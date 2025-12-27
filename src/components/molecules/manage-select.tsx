import { RiUserSettingsLine } from "@remixicon/react";

import Button from "../atoms/button";

export default function ManageSelect() {
  return (
    <Button variant="ghost" className="relative size-8">
      <RiUserSettingsLine className="h-[27px] w-[18.75px]" />
    </Button>
  );
}
