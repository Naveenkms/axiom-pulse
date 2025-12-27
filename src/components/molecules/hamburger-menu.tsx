import { RiMenuLine } from "@remixicon/react";

import Button from "../atoms/button";

export default function HamburgerMenu() {
    return (
       <Button variant="ghost">
        <RiMenuLine className="w-[18.75px] h-[27px]" />
       </Button>
    )
}