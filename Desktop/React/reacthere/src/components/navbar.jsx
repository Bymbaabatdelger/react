
import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
  return (
    <header className="w-screen row-gap 500px display-flex flex items-center px-80px py-16px">
      <div>Logo</div>
      <div className="display-flex flex items-center row-gap : 20px">
        <ul className="display-flex">
          {["About", "Work", "Testimonial", "Contact"].map((navItem) => {
            return <li>{navItem}</li>;
          })}
        </ul>
        <button className="header-theme">
          <ThemeIcon />
        </button>
        <button className="header-cv-button">Download CV</button>
      </div>
    </header>
  );
}
