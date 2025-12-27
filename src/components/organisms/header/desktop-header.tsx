import {
  NavigationLink,
  NavigationLinkItem,
} from "@/components/atoms/navigation-link";
import Search from "@/components/molecules/search";
import BlockchainSelect from "@/components/molecules/blockchain-select";
import Deposit from "@/components/molecules/deposit";
import Watchlist from "@/components/molecules/watchlist";
import Wallet from "@/components/molecules/wallet";
import ProfileSelect from "@/components/molecules/profile-select";
import ManageSelect from "@/components/molecules/manage-select";
import LogoLink from "@/components/molecules/logo-link";

export default function DesktopHeader() {
  return (
    <header className="hidden h-16 items-center justify-between gap-4 overflow-hidden border-b border-border px-4 sm:flex lg:gap-6 lg:px-6">
      <div className="flex items-center gap-4">
        <LogoLink />
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
                <NavigationLinkItem href="#">Portfolio</NavigationLinkItem>
              </li>
              <li>
                <NavigationLinkItem href="#">Rewards</NavigationLinkItem>
              </li>
            </NavigationLink>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="ml-4 flex items-center gap-4">
          <Search />
          <BlockchainSelect />
        </div>
        <div className="flex items-center gap-4">
          <Deposit />
          <div className="flex items-center gap-2 lg:gap-4">
            <Watchlist />
            <Wallet />
            <ProfileSelect />
            <ManageSelect />
          </div>
        </div>
      </div>
    </header>
  );
}
