import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>scorll animations</h2>
      <p>
        <Link href="/techniques-animation/scroll/parallax/001-background-image-parallax">
          001-background-image-parallax
        </Link>
      </p>
      <p>
        <Link href="/techniques-animation/scroll/parallax/002-smooth-parallax-scroll">
          002-smooth-parallax-scroll
        </Link>
      </p>
      <p>
        <Link href="/techniques-animation/scroll/sticky/001-sticky-footer">
          sticky-footer 001
        </Link>
      </p>
      <p>
        <Link href="/techniques-animation/scroll/sticky/002-sticky-section-perspective">
          002-sticky-section-perspective
        </Link>
      </p>
      <p>
        <Link href="/techniques-animation/scroll/sticky/003-zoom-parallax">
          003-zoom-parallax
        </Link>
      </p>
      <p>
        <Link href="/techniques-animation/scroll/sticky/004-card-paralax">
          004-card-paralax
        </Link>
      </p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Categories</th>
            <th>level</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.href}>
              <td>
                <Link href={item.href}>{item.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type Categories = "masks" | "curved";

const data: {
  name: string;
  href: string;
  categories: Categories[];
  level: "beginer" | "junior";
  desciption: string;
  websites?: string[];
}[] = [
  {
    name: "001 mask animation in reactjs",
    href: "/techniques-animation/junior-01-masks/01-expand-image",
    categories: ["masks"],
    level: "junior",
    desciption: "sticky, animation clip-path, stack layout",
    websites: ['https://www.otherlife.xyz/', "https://zentry.com/"]
  },
  {
    name: "01-curved-menu",
    href: "/techniques-animation/02-junior/001-curved/01-curved-menu",
    categories: ["curved"],
    level: "junior",
    desciption: "animation clip-path",
  },
  {
    name: "02-curved-header",
    href: "/techniques-animation/02-junior/001-curved/02-curved-header",
    categories: ["curved"],
    level: "junior",
    desciption: "animation clip-path",
  },
];
