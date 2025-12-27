import Link from "next/link";

import Logo from "../atoms/logo";

export default function LogoLink() {
  return (
    <Link href="/">
      <span className="sr-only">Go to homepage</span>
      <Logo className="size-4.5 sm:size-9" />
    </Link>
  );
}
