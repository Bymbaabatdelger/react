import Utilities from "./Utilities";
const Project = (props) => {
  console.log(props.positionReverse);
  return (
    <div
      className="ProjectContainer"
      style={{ flexDirection: props.positionReverse ? "row" : "row-reverse" }}
    >
      <div className="Pimg">
        <img src={props.img} />
      </div>
      <div className="Pdetails">
        <h3>{props.title}</h3>
        <span>{props.desc}</span>
        <Utilities />
        <img src={props.icon} />
      </div>
    </div>
  );
};
export default Project;
