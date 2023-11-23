import ProjectRender from "./ProjectRender";
const { default: Aboutbutton } = require("./aboutbutton");

const Section5 = () => {
  return (
    <div className="Section5">
      <Aboutbutton title="Work" />
      <p>Some of the noteworthy projects I have built:</p>
      <ProjectRender />
    </div>
  );
};
export default Section5;
