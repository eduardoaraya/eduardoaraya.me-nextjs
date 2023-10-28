import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>eduardoaraya.me</h1>
      <div className="rounded-full overflow-hidden mt-10">
        <Image
          width="100"
          height="100"
          alt="profile picture"
          src="/images/profile.jpeg"
        ></Image>
      </div>
     
      <div className="w-[300px]">
        <ul className="flex row mt-10 justify-between w-full">
          <a href="https://www.instagram.com/arayakadu/" target="_blank">
            <Image
              width="45"
              height="45"
              alt="profile picture"
              src="/icons/icons8-instagram.svg"
            ></Image>
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-araya-jezine-7681b8128/"
            target="_blank"
          >
            <Image
              width="45"
              height="45"
              alt="profile picture"
              src="/icons/icons8-linkedin.svg"
            ></Image>
          </a>
          <a href="https://twitter.com/thisisAraya" target="_blank">
            <Image
              width="45"
              height="45"
              alt="profile picture"
              src="/icons/icons8-github.svg"
            ></Image>
          </a>
          <a href="https://github.com/eduardoaraya" target="_blank">
            <Image
              width="45"
              height="45"
              alt="profile picture"
              src="/icons/icons8-twitter.svg"
            ></Image>
          </a>
        </ul>
      </div>

      <h2 className="mt-10">Hi there,</h2>
      <p className="w-[500px] mt-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the {"industry's"} standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </main>
  );
}
