import Image from "next/image";
import data from "../data.json";
import { TwitterIcon, GithubIcon } from "@/components/social";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center mx-auto w-full mt-16 px-8">
      <Image
        className="rounded-full"
        alt="data.name"
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-2 mt-8">
        {data.socials.map((social) => {
          switch (social.type) {
            case "Twitter":
              return <TwitterIcon key={social.href} {...social} />;
            case "GitHub":
              return <GithubIcon key={social.href} {...social} />;
          }
        })}
      </div>
    </div>
  );
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center max-w-3xl p-1 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-3 border bg-gray-100 w-full"
    >
      <div className="flex w-full">
        <Image
          className="rounded-sm"
          alt={title}
          src={image}
          width={48}
          height={48}
        />
        <h2 className="font-bold text-lg w-full text-center text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}
