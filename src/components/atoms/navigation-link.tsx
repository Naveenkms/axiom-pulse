"use client";
import Link from "next/link";

import { buttonVariants } from "./button";
import {
  usePathnameContext,
  PathnameProvider,
} from "../providers/pathname-provider";

export function NavigationLink({ children }: { children: React.ReactNode }) {
  return <PathnameProvider>{children}</PathnameProvider>;
}

type NavigationLinkItemProps = {
  children: React.ReactNode;
  href: string;
};

export function NavigationLinkItem({
  children,
  href,
}: NavigationLinkItemProps) {
  const pathname = usePathnameContext();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "link",
        className: active ? "text-secondary-foreground" : "",
      })}
    >
      {children}
    </Link>
  );
}
