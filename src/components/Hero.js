import React, { useEffect } from "react";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import TextEffect17 from "./TextHover";
import { Link } from "react-scroll";
import AOS from 'aos';

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section id="Hero">
      <div   className="relative pb-[110px] pt-[120px] lg:pt-[150px] 2xl:mt-20  ">
        <div className="container max-w-screen-2xl  px-6 py-4 md:px-10 md:py-6  lg:px-16  xl:px-24  mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="hero-content">
                <h1 className="mb-6 text-4xl font-bold !leading-[1.208]  sm:text-[42px] lg:text-[40px] xl:text-5x bg-cover bg-clip-text  bg-center text-transparent antialiased  " style={{ backgroundImage: "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)" }}  >
                  Hello, I'm Kajanan
                </h1>
                <h4>
                  <TextEffect17 />
                </h4>
                <p className="mb-8 max-w-[480px] text-base text-body-color  tracking-wide ">
                Passionate about transforming <span className="">innovative ideas</span> into meaningful results - excited to bring my creativity, enthusiasm, and skills to your team and make a real impact <span className=" text-amber-500 hover:text-violet-500">together!</span> 
                </p>
                <ul className="flex flex-wrap items-center cursor-pointer">
                  <li>
                    <Link
                      to="AboutMe"
                      smooth={true} 
                      duration={500} 
                      offset={-80} //
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-whiteC bg-primaryC lg:px-7 transition duration-200 delay-100  ease-in-out hover:opacity-90 ">
                        Know more
                    </Link>
                   
                  </li>
                  <li>

                    <button>
                    <a
                      href="https://drive.google.com/uc?export=download&id=116agEz4D-hVwhQbzfh6SGf-UpWd0b9e6"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646]   ml-3   "
                    >
                      <span className="mr-2">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                          <rect
                            x="7.99893"
                            y="14.979"
                            width="8.18182"
                            height="1.63636"
                            fill="white"
                          />
                          <rect
                            x="11.2717"
                            y="7.61523"
                            width="1.63636"
                            height="4.09091"
                            fill="white"
                          />
                          <path
                            d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Resume
                    </a>

                    </button>
               

                  </li>
                </ul>
               
                <div className="clients pt-12">
                
                  <div className="flex gap-x-6">
                    <a
                      className="flex items-center justify-center w-12 h-12 bg-transparent hover:bg-fuchsia-100 rounded-lg transition duration-300"
                      href="https://www.linkedin.com/in/kajanan-t"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-4xl text-black transition duration-300" />
                    </a>
                    <a
                      className="flex items-center justify-center w-12 h-12 bg-transparent hover:bg-fuchsia-100 rounded-lg transition duration-300"
                      href="https://github.com/ThangarajahKajanan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare className="text-4xl text-black transition duration-300" />
                    </a>
                    <a
                      className="flex items-center justify-center w-12 h-12 bg-transparent hover:bg-fuchsia-100 rounded-lg transition duration-300"
                      href="https://www.facebook.com/yuvan.kajanan.7?mibextid=ZbWKwL"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookSquare className="text-4xl text-black transition duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="/Hero.jpeg"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


