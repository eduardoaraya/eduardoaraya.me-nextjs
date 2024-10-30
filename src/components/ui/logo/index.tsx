import Image from "next/image";

export function Logo({
  height,
  width,
}: {
  width?: number;
  height?: number;
}): JSX.Element {
  return (
    <Image
      width={!width ? 100 : width}
      height={!height ? 100 : height}
      src="/images/logo.png"
      alt="Logo: Eduardo Araya"
    />
  );
}
