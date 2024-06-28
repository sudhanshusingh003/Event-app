import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About1 from "../../components/about/about";

function Home() {
  const texts = [
    "Effortless Planning",
    "Secure Booking",
    "Real-time Availability",
    "Stay Informed",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [texts.length]);
  return (
    <div className="  w-full">
      <div className=" w-full px-9  flex md:flex-row  flex-col py-10 items-center gap-10 md:justify-between justify-center">
        <div className=" flex items-center">
          {" "}
          <img alt="logo" src="/logo.svg" width="160px" />
          <span className="relative inline-block overflow-hidden rounded-full p-[2px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 -translate-y-[0.50px] px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
              Pro
            </div>
          </span>
        </div>
        <div className=" animated-text-container px-2 w-full mx-2 md:mx-0 md:w-[400px] border-[#A352AC] border-2 rounded-full py-2 bg-[#E0F0FF] ">
          <div className="animated-text flex justify-between text-[#A352AC] ">
            <img alt="diplay" src="/displayicon.svg" width="30px" />
            <div className=" text-fade-up text-center font-bold">
              {texts[currentTextIndex]}
            </div>
            <img alt="display" src="/displayicon.svg" width="30px" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <img
          alt="heroimage"
          src="/calwithman.svg"
          className=" lg:w-[560px] w-[360px] "
        />
      </div>
      <div className=" flex flex-col justify-center items-center text-4xl my-9 md:flex-row text-[#3A66C9] font-extrabold">
        <div>Empowering Events,</div>
        <div>Connecting People.</div>
      </div>
      <div className=" w-full  flex justify-center">
        <Link to="/login">
          <button className=" p-4 px-16  mygrad rounded-xl">
            <div className=" text-base font-bold text-white">Get Started</div>
          </button>
        </Link>
      </div>
      <div className=" mx-4">
        <About1 />
      </div>
      <footer className="">
        <div className="new_footer_top">
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className=" flex flex-row justify-between mx-10 text-gray-400 ">
          <div className="">
            <p className=" text-sm md:text-base">©2024 All rights reserved.</p>
          </div>
          <div className="">
            <p className=" text-sm md:text-base">
              Made with<span>&#10084;</span>by sudhanshu
            </p>
          </div>
        </div>
        <div className=" mb-5 mt-5 flex flex-row items-center justify-center">
          <a href="https://www.instagram.com/_ssr_003/" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
          </a>
          <a href="https://github.com/sudhanshusingh003" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="38"
              height="38"
              viewBox="0 0 72 72"
            >
              <path d="M 36 12 C 22.745 12 12 22.745 12 36 C 12 49.255 22.745 60 36 60 C 49.255 60 60 49.255 60 36 C 60 22.745 49.255 12 36 12 z M 36 20 C 44.837 20 52 27.163 52 36 C 52 43.284178 47.128298 49.420174 40.46875 51.355469 C 40.198559 51.103128 39.941627 50.74363 39.953125 50.285156 C 39.980125 49.233156 39.953125 46.778953 39.953125 45.876953 C 39.953125 44.328953 38.972656 43.230469 38.972656 43.230469 C 38.972656 43.230469 46.654297 43.316141 46.654297 35.119141 C 46.654297 31.957141 45.003906 30.310547 45.003906 30.310547 C 45.003906 30.310547 45.872125 26.933953 44.703125 25.501953 C 43.393125 25.359953 41.046922 26.753297 40.044922 27.404297 C 40.044922 27.404297 38.457406 26.753906 35.816406 26.753906 C 33.175406 26.753906 31.587891 27.404297 31.587891 27.404297 C 30.586891 26.753297 28.239687 25.360953 26.929688 25.501953 C 25.760688 26.933953 26.628906 30.310547 26.628906 30.310547 C 26.628906 30.310547 24.974609 31.956141 24.974609 35.119141 C 24.974609 43.316141 32.65625 43.230469 32.65625 43.230469 C 32.65625 43.230469 31.782197 44.226723 31.693359 45.652344 C 31.180078 45.833418 30.48023 46.048828 29.8125 46.048828 C 28.2025 46.048828 26.978297 44.483766 26.529297 43.759766 C 26.086297 43.045766 25.178031 42.447266 24.332031 42.447266 C 23.775031 42.447266 23.503906 42.726922 23.503906 43.044922 C 23.503906 43.362922 24.285781 43.585781 24.800781 44.175781 C 25.887781 45.420781 25.866281 48.21875 29.738281 48.21875 C 30.196553 48.21875 31.021102 48.11542 31.677734 48.025391 C 31.674106 48.90409 31.663893 49.74536 31.677734 50.285156 C 31.688158 50.700354 31.476914 51.032045 31.236328 51.279297 C 24.726159 49.25177 20 43.177886 20 36 C 20 27.163 27.163 20 36 20 z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sudhanshu-kumar-singh003/ " target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 32 32"
            >
              <path d="M26.963,7.254c-0.258-1.089-1.128-1.959-2.217-2.217c-5.803-1.376-11.688-1.376-17.492,0 C6.165,5.295,5.295,6.165,5.037,7.254C3.66,13.061,3.66,18.947,5.039,24.751c0.257,1.086,1.124,1.953,2.209,2.21 c2.904,0.689,5.828,1.034,8.752,1.034s5.848-0.345,8.752-1.034c1.085-0.257,1.952-1.124,2.209-2.209 C28.34,18.947,28.34,13.061,26.963,7.254z M11.737,22.368c-0.023,0.158-0.118,0.302-0.259,0.376c-0.652,0.342-1.304,0.342-1.956,0 c-0.141-0.074-0.236-0.218-0.259-0.376c-0.351-2.438-0.351-5.298,0-7.736c0.023-0.158,0.118-0.302,0.259-0.376 c0.652-0.342,1.304-0.342,1.956,0c0.141,0.074,0.236,0.218,0.259,0.376C12.088,17.07,12.088,19.93,11.737,22.368z M10.5,13 C9.672,13,9,12.328,9,11.5S9.672,10,10.5,10s1.5,0.672,1.5,1.5S11.328,13,10.5,13z M22.745,22.372 c-0.024,0.15-0.121,0.294-0.256,0.365c-0.626,0.332-1.501,0.349-2.127,0.051c-0.193-0.092-0.284-0.322-0.247-0.532 c0.866-4.998-0.814-5.694-1.94-5.366c-1.295,0.377-1.767,1.525-1.272,5.379c0.026,0.203-0.066,0.423-0.251,0.512 c-0.627,0.303-1.503,0.29-2.13-0.038c-0.141-0.074-0.236-0.218-0.259-0.376c-0.35-2.432-0.351-5.342-0.002-7.776 c0.024-0.167,0.128-0.318,0.283-0.385c0.946-0.412,1.835-0.109,1.982,0.057c0.114,0.128,0.135,0.648,0.118,0.921 C17.935,13.272,24.321,12.588,22.745,22.372z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
