import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* TODO: Add Logo or Name */}
            <span className="font-bold font-serif text-lg">
              Russell Trzaska
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        {/* TODO: Add mobile navigation */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
          <span className="font-bold font-serif text-lg">Logo</span>{" "}
          {/* Placeholder */}
          {/* Mobile Menu Button Placeholder */}
          <button className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:text-foreground/80 focus:outline-none">
            <span className="sr-only">Open main menu</span>
            {/* TODO: Add Menu Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
