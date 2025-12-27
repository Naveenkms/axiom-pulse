import { RiSearch2Line } from "@remixicon/react";
import { cn } from "@/lib/cn";

import Button from "../atoms/button";

export default function Search({ className }: { className?: string }) {
  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "hidden h-8 w-[36.5px] px-2 sm:flex 2xl:pr-1.5 2xl:pl-3",
          className,
        )}
      >
        <RiSearch2Line className="h-[27px] w-[18.75px]" />
      </Button>
      <Button
        variant="ghost"
        className={cn("flex size-8 sm:hidden", className)}
      >
        <RiSearch2Line className="h-[21px] w-[14.59px]" />
      </Button>
    </>
  );
}
