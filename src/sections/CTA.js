const CTA = () => {
  return (
    <div className=" w-full  relative flex mt-32" id="contribute">
      <div className="  absolute w-[80vw] rounded-tl-[5rem] md:w-[70vw] h-full right-0 overflow-hidden z-0">
        <div className=" absolute h-full w-full bg-cover bg-[url(imgs/honduras2019/47.jpg)] z-10"></div>
        <div className=" absolute h-full w-full bg-gradient-to-b from-sky-200 to-primary/25 z-20 "></div>
      </div>

      <div className=" flex mt-56 z-10">
        <div className="  min-h-[500px] w-[min(80vw,1000px)] rounded-tr-[5rem] bg-gray-800 pt-16 flex flex-col gap-8 px-8 pb-8">
          <h1 className=" font-extrabold text-5xl md:text-6xl text-white">
            We've still got more work to do
          </h1>
          <div className=" text-white text-center">
            <h2 className=" text-white ">
              There are millions of families that still do not have access to
              basic medical care.
            </h2>
            <h2 className=" text-white">
              Get involved by donating to help us provide medical supplies
              during our medical missions.
            </h2>
          </div>

          <div className=" flex flex-wrap gap-8 justify-center">
            {/* <button className="btn btn-secondary btn-lg w-96">
              GET INVOLVED
            </button> */}
            <a href="donate">
              <button className="btn btn-secondary btn-lg w-[min(24rem,60vw)]">
                DONATE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
