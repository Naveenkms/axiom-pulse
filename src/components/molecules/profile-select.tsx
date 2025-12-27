import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";

export default function ProfileSelect() {
  return (
    <button className="relative">
      <Avatar className="size-7">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="absolute right-[-2px] bottom-[-2px] z-20 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-background">
        <div className="bg-primary-green size-2 rounded-full"></div>
      </div>
    </button>
  );
}
