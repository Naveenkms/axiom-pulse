import { RiFileCopyLine } from "@remixicon/react";

import Button from "../atoms/button";

export default function ContractAddress() {
  return (
    <Button variant="ghost" className="gap-[3px] px-2.5 text-[0.6875rem]">
      <RiFileCopyLine className="h-[21px] w-[14.59px]" />
      Paste CA
    </Button>
  );
}
