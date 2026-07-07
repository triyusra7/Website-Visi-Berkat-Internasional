import { cn } from "@/lib/utils";

export function RyoriWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn("font-heading italic font-bold text-[#a13a1f]", className)}
      style={{ WebkitTextStroke: "0.5px #a13a1f" }}
    >
      Ryori
    </span>
  );
}
