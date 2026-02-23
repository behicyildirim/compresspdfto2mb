"use client";

import { useEffect } from "react";

type Props = {
  label?: string;
  className?: string;
};

export default function AdSlot({ label, className }: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className={className ?? "my-6"}>
      {/* Optional label (only visible if ads don't render yet) */}
      {label ? (
        <div className="mb-3 text-center text-xs text-gray-400">{label}</div>
      ) : null}

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4218696370367168"
        data-ad-slot="1217760896"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}