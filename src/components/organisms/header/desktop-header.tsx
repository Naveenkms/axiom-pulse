import Link from "next/link";

import Logo from "@/components/atoms/logo";
import {
  NavigationLink,
  NavigationLinkItem,
} from "@/components/atoms/navigation-link";

export default function DesktopHeader() {
  return (
    <header className="hidden h-16 items-center gap-4 overflow-hidden border-b border-primary-stroke px-4 sm:flex lg:gap-6 lg:px-6">
      <Link href="/">
        <span className="sr-only">Go to homepage</span>
        <Logo className="size-9" />
      </Link>
      <nav>
        <ul className="flex flex-1 gap-1">
          <NavigationLink>
            <li>
              <NavigationLinkItem href="#">Discover</NavigationLinkItem>
            </li>
            <li>
              <NavigationLinkItem href="/">Pulse</NavigationLinkItem>
            </li>
            <li>
              <NavigationLinkItem href="#">Trackers</NavigationLinkItem>
            </li>
            <li>
              <NavigationLinkItem href="#">Perpetuals</NavigationLinkItem>
            </li>
            <li>
              <NavigationLinkItem href="#">Yield</NavigationLinkItem>
            </li>
            <li>
              <NavigationLinkItem href="#">Vision</NavigationLinkItem>
            </li>
            <li>
              <NavigationLinkItem href="#">Portfolio</NavigationLinkItem>
            </li>
            <li>
              <NavigationLinkItem href="#">Rewards</NavigationLinkItem>
            </li>
          </NavigationLink>
        </ul>
      </nav>
    </header>
  );
}
