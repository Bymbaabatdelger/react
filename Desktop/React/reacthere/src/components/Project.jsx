import Utilities from "./Utilities"
const Project = (props)=> {
return(
    <div className="ProjectContainer">
        <div className="Pimg">
            <img src={props.img}/>
        </div>
        <div className="Pdetails">
            <p>{props.title}</p>
            <span>{props.desc}</span>
            <Utilities/>
            <img src={props.icon}/>
        </div>
    </div>
)
}
export default Project