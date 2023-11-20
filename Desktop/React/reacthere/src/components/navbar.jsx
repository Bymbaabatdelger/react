
import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
  return (
    <header className="header">
      <div>Logo</div>
      <div className="header-items">
        <ul className="header-lists">
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
