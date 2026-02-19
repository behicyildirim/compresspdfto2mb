import { NextResponse } from "next/server";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const execFileAsync = promisify(execFile);

function makeTempPath(name: string) {
  const safe = name.replace(/[^a-z0-9.\-_]/gi, "_");
  return path.join(os.tmpdir(), `${Date.now()}_${safe}`);
}

async function compressWithGhostscript(inputPath: string, outputPath: string) {
  const args = [
    "-sDEVICE=pdfwrite",
    "-dCompatibilityLevel=1.4",
    "-dPDFSETTINGS=/ebook",
    "-dNOPAUSE",
    "-dQUIET",
    "-dBATCH",
    `-sOutputFile=${outputPath}`,
    inputPath,
  ];

  await execFileAsync("gs", args);
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());

    const inputPath = makeTempPath(file.name);
    const outputPath = makeTempPath(`compressed_${file.name}`);

    await fs.writeFile(inputPath, bytes);
    await compressWithGhostscript(inputPath, outputPath);

    const outBytes = await fs.readFile(outputPath);

    fs.unlink(inputPath).catch(() => {});
    fs.unlink(outputPath).catch(() => {});

    return new NextResponse(outBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="compressed_${file.name}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Compression failed" }, { status: 500 });
  }
}
