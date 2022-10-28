import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BoltIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <Image
        alt="img"
        className="object-contain cursor-pointer"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={ClipboardDocumentListIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
    </header>
  );
}

export default Header;
