import { Action } from "../components/Action/Action.jsx";

const actions = [
  {
    src: require("../imgs/honduras2019/11.jpg"),
    title: "Treating Veins",
    desc: "Varicose veins are swollen, twisted leg veins caused by weak valves, leading to symptoms like pain and swelling. In severe cases, they can result in leg ulcers—painful, open sores on the lower legs due to poor blood circulation. Our nonprofit's goal is to provide treatment and support for individuals suffering from these conditions",
  },
];

const Empower = () => {
  return (
    <div>
      {actions.map((data) => {
        return (
          <Action src={data.src} title={data.title} desc={data.desc}></Action>
        );
      })}
    </div>
  );
};

export default Empower;
