import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </>
  );
}
