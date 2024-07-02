import Image from "next/image";

export function Logo(): JSX.Element {
  return (
    <Image
      width="100"
      height="100"
      src="/images/logo.png"
      alt="Logo: Eduardo Araya"
    />
  );
}
