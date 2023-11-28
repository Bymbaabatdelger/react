import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
  const [isOpen , setIsOpen] = useState(false)
  const Menuhandler = () =>{
    setIsOpen(!isOpen)
  }
  return (
    
    <header className="flex w-screen items-center justify-between px-24 py-4 bg-transparent dark:bg-sky-950">
      <div className="text-xl">Logo</div>
      <div className="md:hidden">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18H26" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12H26" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 24H26" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>
      <div className="items-center flex-row hidden md:flex">
        <ul className="flex gap-5 ">
          {["About", "Work", "Testimonial", "Contact"].map((navItem) => {
            return <li>{navItem}</li>;
          })}
        </ul>
        <div className="flex items-center justify-center">
          <button className="h-24 w-24 p-4">
            <ThemeIcon />
          </button>
          <button className="w-136 h-32px rounded-xl bg-black text-white p-2">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
}
