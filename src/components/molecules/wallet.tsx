import { RiArrowDownSLine, RiWalletLine } from "@remixicon/react";
import Image from "next/image";

import Button from "../atoms/button";

export default function Wallet() {
  return (
    <Button
      variant="ghost"
      className="w-fit min-w-max items-center justify-center gap-[3px] px-1.5 py-0 text-[0.6875rem] font-semibold sm:gap-2 sm:px-3 sm:py-2 sm:text-sm xl:px-3"
    >
      <RiWalletLine className="h-[27px] w-[18.75px]" />
      <div className="flex items-center gap-1">
        <div className="relative h-[19.5px] w-[13.55px] sm:size-4">
          <Image src="/svgs/bnb-fill.svg" fill alt="" />
        </div>
        <span className="">0</span>
      </div>
      <div className="hidden h-full w-px shrink-0 bg-accent-bright xl:block" />
      <div className="flex items-center gap-1">
        <div className="relative h-[19.5px] w-[13.55px] sm:size-4">
          <Image src="/svgs/usdc-perps.svg" fill alt="" />
        </div>
        <span className="">0</span>
      </div>
      <RiArrowDownSLine className="h-[27px] w-[18.75px]" />
    </Button>
  );
}
