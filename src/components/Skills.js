import React, { useState, useEffect } from "react";
import LogoCard from "./LogoCard";
import AOS from 'aos';


const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const logos = [
    {
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      logoAlt: "HTML5 Logo",
      title: "HTML5",
      category: "basic",
    },
    {
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",
      logoAlt: "CSS Logo",
      title: "CSS",
      category: "basic",
    },
    {
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      logoAlt: "JavaScript Logo",
      title: "JavaScript",
      category: "basic",
    },
    {
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
      logoAlt: "React Logo",
      title: "React js",
      category: "framework",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/node-js.svg",
      logoAlt: "React Logo",
      title: "node js",
      category: "basic",
    },
    {
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      logoAlt: "Tailwind CSS Logo",
      title: "Tailwind CSS",
      category: "framework",
    },
    {
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
      logoAlt: "C Logo",
      title: "C",
      category: "basic",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/c-2.svg",
      logoAlt: "MongoDB Logo",
      title: "C++",
      category: "basic",
    },
    {
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      logoAlt: "Java Logo",
      title: "Java",
      category: "basic",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/Spring_Boot.svg.png",
      logoAlt: "Java Logo",
      title: "Spring",
      category: "framework",
    },
    {
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      logoAlt: "Python Logo",
      title: "Python",
      category: "basic",
    },
    {
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      logoAlt: "PHP Logo",
      title: "PHP",
      category: "basic",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/git.svg",
      logoAlt: "Git Logo",
      title: "Git",
      category: "other",
    },
    {
      logoSrc: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
      logoAlt: "MySQL Logo",
      title: "MySQL",
      category: "database",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/mongodb.svg",
      logoAlt: "MongoDB Logo",
      title: "MongoDB",
      category: "database",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/firebase.svg",
      logoAlt: "Firebase Logo",
      title: "Firebase",
      category: "database",
    },
    {
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      logoAlt: "GitHub Logo",
      title: "GitHub",
      category: "other",
    },
    {
      logoSrc:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      logoAlt: "Figma Logo",
      title: "Figma",
      category: "design",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/canva.svg",
      logoAlt: "Canva Logo",
      title: "Canva",
      category: "design",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/dr.svg.png",
      logoAlt: "Draw.io Logo",
      title: "Draw.io",
      category: "design",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/Azure.png",
      logoAlt: "Azure Board Logo",
      title: "Azure Board",
      category: "other",
    },
    {
      logoSrc: "/photoes/LanguagesIcons/ClickUp.png",
      logoAlt: "ClickUp Logo",
      title: "ClickUp",
      category: "other",
    },
    // Adding soft skills without images
    {
      title: "Communication",
      category: "soft-skills",
    },
    {
      title: "Creativity",
      category: "soft-skills",
    },
    {
      title: "Teamwork",
      category: "soft-skills",
    },
    {
      title: "Leadership",
      category: "soft-skills",
    },
    {
      title: "Problem Solving",
      category: "soft-skills",
    },
    {
      title: "Adaptability",
      category: "soft-skills",
    },
    {
      title: "Collaboration",
      category: "soft-skills",
    },
    {
      title: "Quick learning",
      category: "soft-skills",
    },
    {
      title: "Critical Thinking",
      category: "soft-skills",
    },
    {
      title: "Time Management",
      category: "soft-skills",
    },
  ];

  const filteredLogos =
    selectedCategory === "All"
      ? logos.filter((logo) => logo.category !== "soft-skills")
      : logos.filter((logo) => logo.category === selectedCategory);

  return (
    <section className="bg-gray-50">
      <div    className="container max-w-screen-2xl px-6 py-24 md:px-10 md:py-28 lg:px-16  xl:px-24 mx-auto overflow-hidden">
        <h1 data-aos="zoom-in" data-aos-duration="1500"  className="text-2xl font-semibold text-gray-800 lg:text-3xl   bg-cover bg-clip-text  bg-center text-transparent antialiased "  style={{ backgroundImage: "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)" }}  >
          Skills
        </h1>

        <div  className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          {/* left */}
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 ">
              Table of Content
            </h1>

            <div className="mt-4 space-y-4 lg:mt-8">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`block bg-transparent border-none cursor-pointer ${
                    selectedCategory === "All"
                      ? "text-gray-400"
                      : "text-gray-600 "
                  }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory("framework")}
                className={`block bg-transparent border-none cursor-pointer ${
                    selectedCategory === "framework"
                      ? "text-gray-400"
                      : "text-gray-600 "
                  }`}
              >
                Frameworks
              </button>
              <button
                onClick={() => setSelectedCategory("database")}
                className={`block bg-transparent border-none cursor-pointer ${
                    selectedCategory === "database"
                      ? "text-gray-400"
                      : "text-gray-600 "
                  }`}
              >
                Databases
              </button>
              <button
                onClick={() => setSelectedCategory("design")}
                className={`block bg-transparent border-none cursor-pointer ${
                    selectedCategory === "design"
                      ? "text-gray-400"
                      : "text-gray-600 "
                  }`}
              >
                Designing tool
              </button>
              <button
                onClick={() => setSelectedCategory("soft-skills")}
                className={`block bg-transparent border-none cursor-pointer ${
                    selectedCategory === "soft-skills"
                      ? "text-gray-400"
                      : "text-gray-600 " 
                  }`}
              >
                Soft Skill
              </button>
              <button
                onClick={() => setSelectedCategory("other")}
                className={`block bg-transparent border-none cursor-pointer ${
                    selectedCategory === "other"
                       ? "text-gray-400"
                       : "text-gray-600 "
                  }`}
              >
                Other
              </button>
            </div>
          </div>

          {/* right */}
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div  className="grid grid-cols-2 gap-4 xs:gap-8 xs:grid-cols-3 md:grid-cols-4 lg:gap-7  xl:gap-8 xl:grid-cols-5">
              {filteredLogos.map((logo, index) => (
                <div key={index} data-aos="fade-up" data-aos-duration="1500" className="flex flex-col items-center">
                  {logo.logoSrc && logo.logoAlt ? (
                    <LogoCard
                      logoSrc={logo.logoSrc}
                      logoAlt={logo.logoAlt}
                      title={logo.title}
                    />
                  ) : (
                  
                   
                      <div className="max-w-xs w-full  px-6 py-4 text-center bg-slate-100  rounded-lg overflow-hidden  hover:scale-105 transform transition duration-300">
                        <div className="flex justify-center items-center text-sm font-medium text-gray-600  ">
                          {logo.title}
                        </div>
                      </div>

                   
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


