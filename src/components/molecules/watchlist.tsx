import { RiStarLine } from "@remixicon/react";

import Button from "../atoms/button";

export default function Watchlist() {
  return (
    <Button variant="ghost" className="size-8">
      <RiStarLine className="w-[18.75px] h-[27px]"  />
    </Button>
  );
}
