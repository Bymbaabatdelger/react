import Utilities from "./Utilities";
import Project from "./Project";
const data3 = [
  {
    pic: "https://www.figma.com/file/o3Uidr6Q47R5L1hKn1szra/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?type=design&node-id=327-2035&mode=dev",
    title: "Fiskill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    // tool:{Utilities},
    icon: "https://www.figma.com/file/o3Uidr6Q47R5L1hKn1szra/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?type=design&node-id=327-295&mode=dev",
  },
  {
    pic: "https://www.figma.com/file/o3Uidr6Q47R5L1hKn1szra/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?type=design&node-id=327-2035&mode=dev",
    title: "Fiskill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    // tool:{Utilities},
    icon: "https://www.figma.com/file/o3Uidr6Q47R5L1hKn1szra/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?type=design&node-id=327-295&mode=dev",
  },
  {
    pic: "https://www.figma.com/file/o3Uidr6Q47R5L1hKn1szra/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?type=design&node-id=327-2035&mode=dev",
    title: "Fiskill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    // tool:{Utilities},
    icon: "https://www.figma.com/file/o3Uidr6Q47R5L1hKn1szra/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?type=design&node-id=327-295&mode=dev",
  },
];

const ProjectRender = () => {
  return data3.map((el) => {
    return (
      <div>
       <Project img={el.pic} title={el.title} desc={el.desc} icon={el.icon} />
      </div>
    );
  });
};
export default ProjectRender;
