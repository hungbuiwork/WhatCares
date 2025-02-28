import { Action } from "../components/Action/Action.jsx";

const actions = [
  {
    src: require("../imgs/honduras2019/11.jpg"),
    title: "VEIN CARE",
    desc: "Varicose veins, caused by weak valves, lead to symptoms like pain and swelling. Severe cases can result in leg ulcers—painful, open sores on the lower legs due to poor circulation. Our nonprofit is dedicated to providing treatment and support for individuals suffering from these conditions.",
  },
  {
    title: "SERVICE",
    desc: "Honduras Vein Week, sponsored by HHPF, is an annual mission uniting volunteers to provide essential care in Honduras. We focus on treating venous diseases through medical interventions, education, and advocacy. Dr. McHutchison and T. Zimmerman play key roles in establishing year-round follow-up clinics for severe leg ulcer patients.",
  },
  {
    title: "MEDICAL EDUCATION",
    desc: "Committed to advancing global medical care, Dr. Bui and A. Greenberg enhance vascular care in Vietnam, emphasizing local physician training. Partnering with Cho Ray, we hold seminars, perform cases, and promote educational exchanges. With Dignity Health, we aim to extend initiatives across specialties, empowering healthcare providers.",
  },
  {
    title: "DONATIONS",
    desc: "Our missions in Vietnam and Honduras involve donating time and supplies alongside medical expertise. We believe in collective support, and your donations are crucial for providing urgent care to individuals with debilitating leg ulcers. Join us in making a meaningful impact.",
  },
];

const Empower = () => {
  return (
    <div className=" px-8  gap-6 bg-slate-100 py-16">
      <h1 className="text-4xl sm:text-6xl mb-12  gap-10">WHAT we do</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {actions.map((data) => {
          return (
            <div className=" max-w-xl">
              <h1 className=" text-xl text-left">{data.title}</h1>
              <hr></hr>
              <p className="text-left">{data.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Empower;
