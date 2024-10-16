// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 w-full fixed z-50 shadow">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-3xl font-bold">
          <Image
            src="/logo.png"
            alt="hello"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="flex text-secondary duration-100 font-normal text-2xl gap-24 font-Poppins ">
          <Link
            href="/"
            className="hover:text-brand  hover:duration-100 relative group"
          >
            <button className="hover:text-brand  hover:duration-100">
              Home
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              <Link href="/service1" className="block hover:bg-gray-200 p-2">
                Service 1
              </Link>
              <Link href="/service2" className="block hover:bg-gray-200 p-2">
                Service 2
              </Link>
              <Link href="/service3" className="block hover:bg-gray-200 p-2">
                Service 3
              </Link>
            </div>
          </Link>
          <Link href="/about" className="hover:text-brand  hover:duration-100">
            BAGS
          </Link>
          <Link
            href="/contact"
            className="hover:text-brand  hover:duration-100"
          >
            SNEAKERS
          </Link>
          <Link href="/blog" className="hover:text-brand  hover:duration-100">
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-brand  hover:duration-100"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
