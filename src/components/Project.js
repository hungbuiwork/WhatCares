import { Link } from "react-router-dom";

const Project = ({
  imgURL,
  title,
  desc,
  metrics,
  to,
  showLearnMore = true,
  flipped = false,
}) => {
  return (
    <div
      className={`bg-primary w-full min-h-96 rounded-[5rem]  flex flex-col gap-9 relative overflow-hidden group ${
        flipped ? "rounded-tr-none" : "rounded-tl-none"
      }`}
    >
      <div
        className={`absolute h-full w-full bg-cover z-10`}
        style={{ backgroundImage: `url(${imgURL})` }}
      ></div>
      <div className="absolute h-full w-full bg-gradient-to-b from-sky-200 to-white/50 z-20 hover:scale-150"></div>
      <div className="py-12 px-6 md:px-12 z-30 mix-blend-hard-light">
        <div className="mix-blend-screen">
          <h1
            className={`text-5xl md:text-7xl ${
              flipped ? "text-right" : "text-left"
            }`}
          >
            {title}
          </h1>
          <div
            className={`flex flex-col  ${
              flipped ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="flex-[5]">
              <p className="text-md md:text-xl py-4">{desc}</p>
            </div>
            <div className="divider divider-vertical lg:divider-horizontal"></div>
            <div className="flex-[2] text-xl flex flex-col gap-4">
              {metrics.map((metric, index) => (
                <h2 key={index}>{metric}</h2>
              ))}
            </div>
          </div>
        </div>
        {showLearnMore && (
          <div className={`flex ${flipped ? "justify-end" : "justify-start"}`}>
            <Link to={to}>
              <button className="btn btn-neutral w-64 rounded-[5rem] mt-8">
                LEARN MORE
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
