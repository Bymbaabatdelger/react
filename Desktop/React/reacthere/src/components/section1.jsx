import Icon from "../../public/Home/Desktop/Icon.png";
import icon1 from "../../public/Home/Desktop/icon1-dot-emerald-500.png";
import photo from "../../public/Home/Desktop/Pic.png";
import IconContainer from "@/components/IconContainer";
export default function Section1(){
    return(
        <section>
        <div className="description">
          <h1>Hi , I'm Byambajargal</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="this-location-container">
            <div className="this-location">
              <div>
                <img src={Icon.src}></img>
                Ulaanbaatar,Mongolia
              </div>
              <div>
                <img src={icon1.src}></img>
                Available for new project
              </div>
            </div>
            <div className="iconContainer">
              <IconContainer></IconContainer>
            </div>
          </div>
        </div>
        <div>
          <img src={photo.src}></img>
        </div>
      </section>
    )
}