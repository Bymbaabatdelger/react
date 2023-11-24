
const Renderskill =(props) =>{ 
 return (
<div className="details">
    <img className="h-16 w-16" src= {props.url}/>
    <p>{props.content}</p>
</div>
 )
}
export default Renderskill