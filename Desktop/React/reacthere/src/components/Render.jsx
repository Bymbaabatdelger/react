const Render = (props)=>{
    return(
        <div className="render">
            <img src={props.img}/>
            <div>
                 <h3>{props.desc}</h3>
            <p>{props.text}</p>
            </div>
            <span>{props.date}</span>
        </div>
    )
}
export default Render