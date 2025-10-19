import clsx from "clsx";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  withTornEdge?: boolean;
}

export function PaperCard({ children, className, withTornEdge }: PaperCardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl border border-white/60 bg-[color:var(--paper-background)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_70%)] shadow-[0_18px_45px_rgba(54,38,53,0.15)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--paper-lines)_1px,transparent_1px)] bg-repeat" style={{ backgroundSize: "100% 2.4rem" }} />
      <div className="pointer-events-none absolute left-10 top-0 h-full w-[3px] bg-[var(--paper-margin)]" />
      {withTornEdge ? (
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-6 w-full text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44c58.49,12.88,117-6,175.33-19.74,82.72-19.16,168.23-23.54,250.84-8.26,70,13.39,136,40.82,206,49.86,75.23,9.68,147.4-6.89,219.57-24.73V0H0V27.35C91.09,42,175.16,43.55,321.39,56.44Z"
            className="fill-current opacity-65"
          />
        </svg>
      ) : null}
      <div className="relative z-10 px-5 py-7 sm:px-8 sm:py-10 md:px-12 md:py-16">
        {children}
      </div>
    </div>
  );
}
