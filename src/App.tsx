import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {

  const [currentPage, setCurrentPage] = useState<string>("home");

  const [darkMode, setDarkMode] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(true);

  const [loaderProgress, setLoaderProgress] = useState<number>(0);

  const [loaderText, setLoaderText] = useState<string>(
    "Booting core terminal modules..."
  );


  // Dark / Light mode handler
  useEffect(() => {

    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

  }, [darkMode]);


  // Page title
  useEffect(() => {

    document.title = "Bandla Harika | Portfolio";

  }, []);



  // Terminal loading animation
  useEffect(() => {

    const textStates = [
      "Booting core terminal modules...",
      "Mapping neural network layers...",
      "Establishing Google Cloud connections...",
      "Fetching GitHub contributions density...",
      "Loading portfolio assets... Done!"
    ];


    let currentStep = 0;


    const progressInterval = setInterval(() => {


      setLoaderProgress((previous) => {


        if (previous >= 100) {

          clearInterval(progressInterval);

          setTimeout(() => {
            setLoading(false);
          }, 300);

          return 100;
        }


        const progress = previous + 2.5;


        const step = Math.floor(progress / 25);


        if (
          step !== currentStep &&
          textStates[step]
        ) {

          currentStep = step;

          setLoaderText(
            textStates[step]
          );

        }


        return progress;

      });


    },45);



    return () => {

      clearInterval(progressInterval);

    };


  }, []);



  // Scroll top when changing pages
  useEffect(() => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  },[currentPage]);





  const renderPage = () => {


    switch(currentPage){


      case "home":

        return (
          <Hero
            setCurrentPage={setCurrentPage}
          />
        );


      case "about":

        return <About/>;


      case "skills":

        return <Skills/>;


      case "projects":

        return <Projects/>;


      case "experience":

        return <Experience/>;


      case "certifications":

        return <Certifications/>;


      case "contact":

        return <Contact/>;


      default:

        return (
          <Hero
            setCurrentPage={setCurrentPage}
          />
        );

    }

  };





  return (

    <div
      className="
      min-h-screen
      bg-white
      dark:bg-zinc-950
      text-zinc-800
      dark:text-zinc-100
      transition-colors
      duration-300
      flex
      flex-col
      font-sans
      selection:bg-cyan-500/30
      "
    >


      <AnimatePresence mode="wait">


        {
        loading ? (


          // Loading Screen

          <motion.div

            key="loader"

            initial={{
              opacity:1
            }}

            exit={{
              opacity:0
            }}

            transition={{
              duration:0.3
            }}

            className="
            fixed
            inset-0
            z-[110]
            bg-zinc-950
            flex
            items-center
            justify-center
            p-6
            text-zinc-50
            "

          >


            <div className="w-full max-w-sm space-y-5">


              <div
                className="
                flex
                items-center
                gap-2
                border-b
                border-zinc-800
                pb-3
                "
              >

                <Terminal
                  size={18}
                  className="
                  text-cyan-400
                  animate-pulse
                  "
                />


                <span
                  className="
                  font-mono
                  text-xs
                  font-bold
                  text-zinc-400
                  "
                >

                  bandla_harika_kernel ~ setup

                </span>


              </div>




              <div
                className="
                space-y-2
                font-mono
                text-xs
                "
              >


                <div
                  className="
                  flex
                  justify-between
                  "
                >

                  <span
                    className="
                    text-cyan-400
                    animate-pulse
                    "
                  >

                    {loaderText}

                  </span>


                  <span className="text-zinc-500">

                    {Math.floor(loaderProgress)}%

                  </span>


                </div>




                <div
                  className="
                  h-1
                  bg-zinc-900
                  rounded-full
                  overflow-hidden
                  "
                >

                  <div

                    className="
                    h-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    transition-all
                    "

                    style={{
                      width:`${loaderProgress}%`
                    }}

                  />


                </div>


              </div>




              <div
                className="
                text-[10px]
                font-mono
                text-zinc-600
                leading-normal
                "
              >

                <p>
                  &gt; loading profile.data: OK
                </p>

                <p>
                  &gt; load index.css: TailwindCSS active
                </p>

                <p>
                  &gt; system architecture: SPA active
                </p>


              </div>



            </div>


          </motion.div>



        ) : (



          <motion.div

            key="main"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              duration:0.4
            }}

            className="
            flex-grow
            flex
            flex-col
            "

          >


            <Header

              currentPage={currentPage}

              setCurrentPage={setCurrentPage}

              darkMode={darkMode}

              setDarkMode={setDarkMode}

            />



            <main
              className="
              flex-grow
              relative
              "
            >


              <AnimatePresence mode="wait">


                <motion.div

                  key={currentPage}

                  initial={{
                    opacity:0,
                    y:15
                  }}

                  animate={{
                    opacity:1,
                    y:0
                  }}

                  exit={{
                    opacity:0,
                    y:-15
                  }}

                  transition={{
                    duration:0.25
                  }}

                >

                  {renderPage()}


                </motion.div>


              </AnimatePresence>


            </main>




            <Footer

              setCurrentPage={setCurrentPage}

            />


          </motion.div>


        )

        }


      </AnimatePresence>



    </div>

  );

}