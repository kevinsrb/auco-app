import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white py-3 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="text-3xl">AUCO - APP</h3>
        </Link>

        <ul>
          <li>
            <Link href="/aboutme" className="text-sky-500 hover:text-sky-400">
              Sobre mi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
