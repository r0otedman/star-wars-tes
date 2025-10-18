import { useState } from "react";

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return { copied, copy };
};

export default useCopyToClipboard;
