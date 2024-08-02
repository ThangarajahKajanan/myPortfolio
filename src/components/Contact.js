import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const formErrors = {};
    const formElements = form.current.elements;

    if (!formElements.fullname.value) formErrors.fullname = true;
    if (!formElements.email.value) {
      formErrors.email = true;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formElements.email.value)
    ) {
      formErrors.email = true;
    }
    if (!formElements.message.value) formErrors.message = true;
    return formErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm(
          "service_p1t28bl", 
          "template_d8gz4wo", 
          form.current, 
          "1PZksJuIMwlwXrdy4"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.reset();
            setErrors({});
            setIsSubmitted(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      setErrors(formErrors);
      setIsSubmitted(false);
    }
  };



  return (
    <section id="Contact"  >
      <div  className="container max-w-screen-2xl px-0 py-24 sm:px-6 lg:px-16  xl:px-24 mx-auto ">
        <div className="lg:flex lg:items-center lg:-mx-0">
          <div data-aos="flip-left" className="px-8 lg:px-0 lg:w-1/2 lg:mx-6 ">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl  bg-cover bg-clip-text  bg-center text-transparent antialiased  "  style={{ backgroundImage: "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)" }}     >
              Contact Me for more info
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2  text-primaryC"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 hover:text-opacity-70 delay-100 transform ease-in-out duration-200 ">
                 Malabe, colombo
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-primaryC"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 hover:text-opacity-70 delay-100 transform ease-in-out duration-200 ">
                  (076) 860-6434
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-primaryC "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 hover:text-opacity-70 delay-100 transform ease-in-out duration-200 ">
                  thangarajahkajanan@gmail.com
                </span>
              </p>
            </div>
          </div>

          <div  className="mt-8 lg:my-8 lg:w-1/2 lg:mx-6">
            <div data-aos="fade-up" data-aos-duration="1500"  className="w-full px-8 py-10 mx-auto overflow-hidden  rounded-lg  sm:border sm:border-fuchsia-100 sm:shadow-md  lg:max-w-xl   ">
              <h1 className="text-lg font-medium text-gray-700">
                Interested in Collaborating or Have Questions?
              </h1>


              <form className="mt-6" ref={form} onSubmit={sendEmail}>
                <div className="flex-1">
                  <label htmlFor="fullname" className="block mb-2 text-sm text-gray-600 ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Yuvan Shankar "
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-purple-400 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 ">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="yuvan@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none  focus:border-purple-400 focus:ring-0 "
                  />
                </div>

                <div className="w-full mt-6">
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-600 ">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:outline-none  focus:border-purple-400 focus:ring-0"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  value="send" 
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize rounded-md bg-primaryC transition duration-200 delay-100  ease-in-out hover:opacity-90 ">
                  get in touch
                </button>
              </form>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
