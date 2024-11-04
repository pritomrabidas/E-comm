import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Sidebart = ({ HandleClick }) => {
  return (
    <div className=" absolute top-0 right-0 2xl:w-1/2 xl:w-1/2 lg:w-3/4 md:w-3/4 sm:w-4/5 w-full  h-screen bg-brand p-10 ">
      <span className="justify-end flex px-10">
        <HiOutlineArrowNarrowRight
          onClick={() => HandleClick(false)}
          className="text-white text-3xl"
        />
      </span>
      <ul className="flex-col flex text-[#fff] duration-100 font-normal font-Poppins text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl gap-20 text-center pt-10">
        <Link
          href="/"
          onClick={() => HandleClick(false)}
          className="hover:text-secondary  hover:duration-100 delay-100 relative group"
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={() => HandleClick(false)}
          className="hover:text-secondary duration-700 delay-100  hover:duration-100"
        >
          BAGS
        </Link>
        <Link
          href="/contact"
          onClick={() => HandleClick(false)}
          className="hover:text-secondary duration-700 delay-100  hover:duration-100"
        >
          SNEAKERS
        </Link>
        <Link
          href="/blog"
          onClick={() => HandleClick(false)}
          className="hover:text-secondary duration-700 delay-100  hover:duration-100"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          onClick={() => HandleClick(false)}
          className="hover:text-secondary duration-700 delay-100  hover:duration-100"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Sidebart;
