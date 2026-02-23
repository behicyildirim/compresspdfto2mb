"use client";

import { useEffect, useId } from "react";

type Props = {
  label?: string;
};

export default function AdSlot({ label }: Props) {
  const rid = useId();

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore
    }
  }, [rid]);

  return (
    <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-4">
      {label ? (
        <div className="mb-2 text-center text-xs text-gray-400">{label}</div>
      ) : null}

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4218696370367168"
        data-ad-slot="1217760896"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />

      {/* fallback look while ads are not serving yet */}
      <div className="mt-3 text-center text-xs text-gray-400">
        Ad is loading…
      </div>
    </div>
  );
}