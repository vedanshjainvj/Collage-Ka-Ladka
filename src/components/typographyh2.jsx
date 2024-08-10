import { twMerge } from "tailwind-merge";

export function H2({ className, children }) {
  return (
    <h2
      className={twMerge(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}
