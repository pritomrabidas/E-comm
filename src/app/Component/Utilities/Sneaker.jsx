import Image from "next/image";
import Link from "next/link";

const Sneaker = () => {
  return (
    <div className="bg-brand grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-full">
      <div className="px-24 py-16 mx-auto 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center text-center">
        <h2 className="font-medium font-Poppins 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-[#FFFFFF]  pb-5 w-full">
          Adidas Men Running Sneakers
        </h2>
        <p className="font-normal font-Poppins 2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#FFFFFF] pb-4">
          Performance and design. Taken right to the edge.
        </p>
        <Link
          href="/"
          className="font-normal font-Poppins 2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#FFFFFF] 2xl:border-b-2 xl:border-b-2 lg:border-b-2 md:border-b sm:border-b border-b w-fit border-[#FFFFFF] "
        >
          Show now
        </Link>
      </div>
      <div className="py-0">
        <div className="">
          <Image
            src="/sneakers.png"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Sneaker;
