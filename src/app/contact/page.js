import Image from "next/image";

const page = () => {
  return (
    <section className="py-32">
      <div className="container m-auto px-3">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-20">
          <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full bg-brand flex rounded px-2">
            <div className="w-1/2">
              <Image
                src={"/contact.png"}
                alt="contact"
                width={100}
                height={100}
                className="w-full h-full]"
              />
            </div>
            <div className="w-1/2 justify-center items-center m-auto py-4">
              <h3 className="font-Raleway font-semibold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl  text-[#FFFFFF] 2xl:pb-5 xl:pb-5 lg:pb-5 md:pb-4 sm:pb-3 pb-2">
                Get in touch
              </h3>
              <h4 className="font-Raleway font-medium text-base text-[#FFFFFF] py-5">
                contact@e-comm.ng
              </h4>
              <h4 className="font-Raleway font-medium text-base text-[#FFFFFF]">
                +234 4556 6665 34
              </h4>
              <p className="font-Raleway font-medium text-base text-[#FFFFFF] py-5">
                20 Prince Hakerem Lekki Phase 1, Lagos.
              </p>
            </div>
          </div>
          <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full items-center mx-auto flex">
            <div className="flex-col flex">
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none py-3 px-6 w-72 border-2 border-[#969393] rounded-sm  focus:border-brand"
              />
              <input
                type="email"
                placeholder="Email"
                className="outline-none py-3 px-6 w-72 border-2 border-[#969393] rounded-sm my-8 focus:border-brand"
              />
                <textarea
                  id="textarea"
                  rows="4"
                  placeholder="Type your message here..."
                  className="outline-none py-3 px-6 w-72 border-2 border-[#969393] rounded-sm my-8 focus:border-brand"
                ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
