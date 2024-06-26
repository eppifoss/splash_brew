import Link from "next/link";

import NavBarHeader from "./components/navigation/NavBarHeader";

export default function Home() {
  return (
    <>
      <NavBarHeader fixed />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-faded-yellow">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <Link
            href="/dashboard"
            className=" group rounded-lg border border-transparent px-5 py-4 transition-colors

                        bg-faded-black text-white hover:shadow-xl
                        "
            //target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold ">
              Make your first batch
            </h2>
          </Link>
        </div>
      </main>
    </>
  );
}
