"use client";
import { useState } from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";

const BLOCKCHAINS = [
  {
    value: "solana",
    label: "Solana",
    img: "/svgs/sol-fill.svg",
  },
  {
    value: "bnb",
    label: "BNB",
    img: "/svgs/bnb-fill.svg",
  },
];

export default function BlockchainSelect() {
  const [value, setValue] = useState("solana");

  const currentBlockchain = BLOCKCHAINS.find(
    (b) => b.value === value,
  ) as (typeof BLOCKCHAINS)[0];

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="pr-1.5 pl-2 hover:brightness-125">
        <SelectValue>
          <div className="flex items-center gap-2">
            <Image src={currentBlockchain.img} alt="" width={16} height={16} />
            <span>{currentBlockchain.label}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {BLOCKCHAINS.map((b) => (
          <SelectItem key={b.value} value={b.value}>
            {b.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
