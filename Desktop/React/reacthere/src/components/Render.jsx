const Render = (props)=>{
    return(
        <div className="flex flex-row gap-16 justify-center items-start bg-white rounded-xl p-20 sm:flex flex-col ">
            <img className="h-16 w-102" src={props.img}/>
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