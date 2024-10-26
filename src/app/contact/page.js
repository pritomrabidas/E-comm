import Image from "next/image";

const page = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex gap-20">
          <div className="w-1/2 bg-brand flex">
            <div className="w-1/2">
              <Image
                src={"/contact.png"}
                alt="contact"
                width={100}
                height={100}
                className="w-full h-full]"
              />
            </div>
            <div className="w-1/2 justify-center items-center m-auto">
              <h3 className="font-Raleway font-semibold text-3xl text-[#FFFFFF] pb-5">
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
          <div className="w-1/2 items-center mx-auto flex">
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
