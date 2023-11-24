
import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
  return (
    <header className="flex w-screen items-center justify-between py-4  px-20  gap-500  bg-transparent dark:bg-sky-950">
      <div>Logo</div>
      <div className=" flex gap-20 items-center">
        <ul className="flex gap-10 ">
          {["About", "Work", "Testimonial", "Contact"].map((navItem) => {
            return <li >{navItem}</li>;
          })}
        </ul>
        <button className="h-24 w-24 p-6">
          <ThemeIcon />
        </button>
        <button className="w-136 h-32px rounded-xl bg-black text-white p-6">Download CV</button>
      </div>
    </header>
  );
}
