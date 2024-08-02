import React, { useState , useEffect} from "react";
import AOS from 'aos';


const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };





  return (
    <section className=" ">
      <div  className="container max-w-screen-2xl px-6 py-24 md:px-10  lg:px-16  xl:px-24 mx-auto ">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[40px] max-w-[510px] text-center">
                <span   className="text-primary mb-2 block text-lg font-semibold">
                  Portfolio
                </span>
                <h2 
                  data-aos="zoom-in" data-aos-duration="1500"
                  className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px] bg-cover bg-clip-text  bg-center text-transparent antialiased "   
                  style={{ backgroundImage: "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)" }}  >
                  
                  My Recent Projects
                </h2>
                <p  className="text-body-color text-base">
                A showcase of my latest work, demonstrating my skills and dedication to delivering high-quality projects.
                </p>
              </div>
            </div> 
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary  text-gray-400"
                        : "inactiveClasses  hover:text-gray-600"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("MERN")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "MERN"
                        ? "text-gray-400"
                        : "hover:text-gray-600"
                    }`}
                  >
                    MERN
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("JAVA")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "JAVA"
                        ? "activeClasses bg-primary  text-gray-400"
                        : "inactiveClasses text-body-color  hover:text-gray-600"
                    }`}
                  >
                    Java
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("FRONT-END")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "FRONT-END"
                        ? "activeClasses bg-primary  text-gray-400"
                        : "inactiveClasses text-body-color  hover:text-gray-600"
                    }`}
                  >
                    Front-end
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("INTERN")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "INTERN"
                        ? "activeClasses bg-primary   text-gray-400"
                        : "inactiveClasses text-body-color  hover:text-gray-600"
                    }`}
                  >
                    Intern
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
          <PortfolioCard
              ImageHref="/photoes/diabetMockup.jpg"
              category="Research Project"
              title="Research Project"
              button="View on GitHub"
              buttonHref="https://github.com/ThangarajahKajanan/diabetesPrediction-RP.git"
              showCard={showCard}
            />

            <PortfolioCard
              ImageHref="/photoes/shoppy.jpg"
              category="MERN"
              title="E-commerce"
              button="View on GitHub"
              buttonHref="https://github.com/ThangarajahKajanan/Online-E-commerce-System.git"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/photoes/userProfileMockup.jpg"
              category="JAVA"
              title="Profile Management"
              button="View on GitHub"
              buttonHref="https://github.com/ThangarajahKajanan/User-Profile-Management-.git"
              showCard={showCard}
            />
      
            <PortfolioCard
              ImageHref="/photoes/heroMockup.jpg"
              category="FRONT-END"
              title="Hero Section"
              button="View on GitHub"
              buttonHref="https://github.com/ThangarajahKajanan/HeroPage.git"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/photoes/calMock.jpg"
              category="Design"
              title="JS Calculator"
              button="View on GitHub"
              buttonHref="https://github.com/ThangarajahKajanan/JS_Calculator.git"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/photoes/cloudMockup.jpg"
              category="INTERN"
              title="Laundry Website"
              button="View on GitHub"
              buttonHref="#"
              showCard={showCard}
            />
             <PortfolioCard
              ImageHref="/photoes/DgatewayMockup.jpg"
              category="INTERN"
              title="Company Website"
              button="View on GitHub"
              buttonHref="https://www.dgatewayin.com/"
              showCard={showCard}
            />

            <PortfolioCard
              ImageHref="/photoes/userMockup.jpg"
              category="JAVA"
              title="Supplier Management"
              button="View on GitHub"
              buttonHref="https://github.com/ThangarajahKajanan/Online-User-Management-System-.git"
              showCard={showCard}
            />
          </div>
      </div>
    </section>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        data-aos="fade-up" data-aos-duration="1500"
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category || showCard === category.toUpperCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12 ">
          <div className="overflow-hidden rounded-[10px] bg-slate-50">
            <img 
              src={ImageHref} 
              alt="portfolio" 
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" />
          </div>
          <div className=" relative z-10  mx-7 -mt-20 rounded-lg bg-white py-[34px] px-3 text-center shadow-sm ">
            <h3 className="text-dark mb-5 text-xl font-semibold text-gray-600 ">{title}</h3>
            <a
              href={buttonHref}
              target="_blank"
              className=" hover:text-white hover:border-primary hover:bg-black inline-block rounded-md border border-stroke  border-gray-300 py-[10px] px-7 text-sm font-medium  transition-all  delay-100 duration-200 ease-in-out "
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
