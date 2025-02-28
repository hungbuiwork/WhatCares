const FeaturedMedia = () => {
  return (
    <div className="mt-64  justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col w-[min(90vw,720px)]  absolute translate-y-[-40%] gap-6  z-20">
          <h1 className=" text-4xl text-left">
            Empowering Communities Worldwide
          </h1>
          <iframe
            src="https://drive.google.com/file/d/18qX6_k95SF0Vu60jyHbPjKywWggIRuIq/preview"
            allow="autoplay"
            className=" w-full aspect-video border-2 border-primary overflow-hidden rounded-xl"
          ></iframe>
        </div>
      </div>
      <div className="w-full h-64 sm:h-[400px] relative">
        <div className=" bg-[url(imgs/import/map.avif)] absolute w-full h-full bg-cover bg-center"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-primary"></div>
      </div>
    </div>
  );
};

export default FeaturedMedia;
