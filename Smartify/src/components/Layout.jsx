import App from "../App";
import Weather from "./WeatherCard/Weather";
import Pollution from "./PollutionCard/Pollution";

const parentCardStyle =
  " flex items-start  justify-center items-center text-white bg-slate-950 p-7 rounded-xl border-1 border-sky-400 shadow-[0_0_9px_theme('colors.sky.400')] space-x-4 w-fit m-auto hover:scale-102  hover:border-2 transition-transform duration-300 ease-in-out mt-21";
const childCardStyle =
  " text-white bg-gray-900 p-4 rounded-xl border-1 border-sky-400 hover:shadow-[0_0_7px_theme('colors.sky.400')] hover:scale-102  hover:border-2 transition-transform duration-300 ease-in-out";

function Layout() {
  return (
    <div>
      <nav className=" bg-sky-300 pl-10 py-3 text-white flex justify-end list-none m-0 p-0">
        <a href="#home" className="mx-4">
          {" "}
          Home{" "}
        </a>
        <a href="#weather" className="mx-4">
          {" "}
          Weather{" "}
        </a>
        <a href="#pollution" className="mx-4">
          {" "}
          Pollution{" "}
        </a>
      </nav>
      <div className="mt-16">
        {" "}
        {/* Margin to avoid content hiding behind fixed navbar */}
        <section
          id="home"
          className="m-30 flex justify-center items-center"
        >
          <App />
        </section>
        <section
          id="weather"
          className=" m-30 flex justify-center items-center"
        >
          <Weather
            parentstyles={parentCardStyle}
            childstyles={childCardStyle}
          />
        </section>
        <section
          id="pollution"
          className="m-30 flex justify-center items-center "
        >
          <Pollution
            parentstyles={parentCardStyle}
            childstyles={childCardStyle}
          />
        </section>
      </div>
    </div>
  );
}
export default Layout;
