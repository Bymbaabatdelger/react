const { default: Aboutbutton } = require("./aboutbutton")
import Contactme from "./contact"
import img  from "../../public/Home/Desktop/iconemail.png"
import image from "../../public/Home/Desktop/icon Button.png"
import pic from "../../public/Home/Desktop/Iconphone.png"
import IconContainer from "./IconContainer"



const Footer =() =>(
    <div className="Footer">
        <Aboutbutton title="Get in touch" />
        <p>What’s next? Feel free to reach out to me if you're looking for <br /> a developer, have a query, or simply want to connect.</p>
       <Contactme img={img.src} email="reachsagarshah@gmail.com" image={image.src}/>
       <Contactme img={pic.src} email="+91 8980500565"  image={image.src}/>
       <p>You may also find me on these platforms!</p>
       <IconContainer/>
    </div>
)
export default Footer