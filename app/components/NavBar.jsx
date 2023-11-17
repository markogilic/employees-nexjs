import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 ">
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 item-center text-white">
            Employee Management
          </div>
          <div className="flex space-x-2">
            <Link href="/" className="navButton">
              Home
            </Link>
            <Link href="/about" className="navButton">
              About
            </Link>
            <Link href="/employees" className="navButton">
              Employees
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
