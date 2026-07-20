import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
  rounded?: string;
}

export function ImagePlaceholder({
  label,
  aspect = "aspect-[4/5]",
  className,
  rounded = "rounded-3xl",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        aspect,
        rounded,
        "relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden bg-mist text-ink-muted",
        "before:absolute before:inset-0 before:bg-[linear-gradient(135deg,transparent_48%,rgba(17,17,17,0.04)_50%,transparent_52%)]",
        className
      )}
    >
      <ImageIcon strokeWidth={1.25} className="h-6 w-6 opacity-40" />
      <span className="px-6 text-center text-xs font-medium uppercase tracking-[0.15em] opacity-50">
        {label}
      </span>
    </div>
  );
}
