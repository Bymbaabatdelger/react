import Renderskill from "./Renderskill";

const Techstack = (props) => {
  console.log("working");
  return (
    <div className="content">
      {props.data.map((el) => {
        return <Renderskill url={el.url} content={el.content} />;
      })}
    </div>
  );
};
export default Techstack;
