import LogoLink from "@/components/molecules/logo-link";
import Wallet from "@/components/molecules/wallet";
import ContractAddress from "@/components/molecules/contract-address";
import Search from "@/components/molecules/search";
import ProfileSelect from "@/components/molecules/profile-select";
import HamburgerMenu from "@/components/molecules/hamburger-menu";

export default function MobileHeader() {
  return (
    <header className="flex h-11 w-full items-center justify-between gap-1 border-b border-border bg-background px-2 sm:hidden">
      <LogoLink />
      <div className="flex items-center gap-1">
        <Wallet />
        <ContractAddress />
        <Search />
        <ProfileSelect />
        <HamburgerMenu />
      </div>
    </header>
  );
}
