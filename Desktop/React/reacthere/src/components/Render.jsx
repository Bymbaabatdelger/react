const Render = (props)=>{
    return(
        <div className="render">
            <img src={props.img}/>
            <div className="renderdesc">
                 <h3>{props.desc}</h3>
            <li>{props.text}</li>
            <li>{props.text}</li>
            <li>{props.text}</li>
            </div>
            <span>{props.date}</span>
        </div>
    )
}
export default Render