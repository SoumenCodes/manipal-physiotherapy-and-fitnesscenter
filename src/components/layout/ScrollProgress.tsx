import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary to-teal transition-[width] duration-100"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}
