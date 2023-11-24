import Icon from "../../public/Home/Desktop/Icon.png";
import icon1 from "../../public/Home/Desktop/icon-dot-emerald-500dot.png";
import photo from "../../public/Home/Desktop/Pic.png";
import IconContainer from "@/components/IconContainer";
export default function Section1(){
    return(
        <section className="flex py-24 px-20 justify-between  sm:flex flex-col p-4 bg-transparent dark:bg-sky-950">
        <div className="flex gap-10 flex-col p-5 w-[768px]">
          <h1>Hi , I'm Byambajargal</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="flex gap-10 flex-col">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <img src={Icon.src}></img>
                Ulaanbaatar,Mongolia
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-2 w-2" src={icon1.src}></img>
                Available for new project
              </div>
            </div>
            <div >
              <IconContainer></IconContainer>
            </div>
          </div>
        </div>
        <div>
          <img  className="h-[320px] w-[280px] sm: flex justify-center " src={photo.src}></img>
        </div>
      </section>
    )
}