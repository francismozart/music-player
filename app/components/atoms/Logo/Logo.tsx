import Image from "next/image";

export function Logo() {
  return (
    <Image
      src={"/assets/images/logo.svg"}
      alt="Muse.ai logo"
      width={87}
      height={22}
    />
  );
}
