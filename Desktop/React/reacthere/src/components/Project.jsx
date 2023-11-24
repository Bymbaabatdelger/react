import Utilities from "./Utilities";
const Project = (props) => {
  console.log(props.positionReverse);
  return (
    <div
      className="flex p-10 w-screen rounded-xl sm:flex flex-col"
      // style={{ flexDirection: props.positionReverse ? "row" : "row-reverse" }}
    >
      <div className="flex items-center p-10 rounded-xl bg-gray-100">
        <img className="h-[384] w-[480]" src={props.img} />
      </div>
      <div className="flex flex-col p-10 gap-4 h-[480] w-[480]">
        <h3>{props.title}</h3>
        <span>{props.desc}</span>
        <Utilities />
        <img className="h-8 w-8 " src={props.icon} />
      </div>
    </div>
  );
};
export default Project;
