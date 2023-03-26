import { NextPage } from "next";
import { useState, useEffect, FunctionComponent } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SquigglyLines from "../components/SquigglyLines";

import { FaCopy } from "react-icons/fa";

interface CardProps {
  index: number;
}

const images = [
  "/fox.jpeg",
  "/women2.jpeg",
  "/women.jpeg",
  "/studio.jpeg",
  "/house.jpeg",
  "/astro.jpeg",
  "/glamour.jpeg",
  "/tribut.jpeg",
  "/ocean.jpeg",
];

const subtitles = [
  "portrait of the cutest red fox ever fluffy photorealistic soft lighting ",
  "woman robot with blue hair and red eyes futuristic character design cinematic lightning epic fantasy",
  "Beautiful Woman with smile appearing from colorful flowers wet dewdrops cinematic lighting photo",
  "Studio Ghibli fantasy 3d render rain Sakura blossoms magical flowers Guillermo del Toro style",
  "tree house in the forest atmospheric hyper realistic epic composition cinematic landscape",
  "space suit with boots futuristic character design cinematic lightning epic fantasy",
  "glamour shot of queen of the damned a femme fatale morbide dark very detailed rendered in octane",
  "portrait photo of a asia old warrior chief tribal panther make up blue on red side profile looki",
  "rough ocean storm atmospheric hyper realistic 8k epic composition cinematic octane render arts",
];

const titles = [
  "Generated a fox",
  "Generated a women robot",
  "Generated a women with flowers",
  "Genereated a Studio Ghibli",
  "Generated a tree house",
  "Generated a space suit",
  "Generated a queen of the damned",
  "Generated a asia old warrior",
  "Generated a rough ocean storm",
];



const Card: FunctionComponent<CardProps> = ({ index }) => {
  const subtitle = subtitles[index];
  const title = titles[index];
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      className="card-wrapper w-full sm:w-1/3 p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
    >
      <div className="relative">
      <p className="text-sm text-white-500 mb-2 font-bold uppercase">{title}</p>
        <div className="w-full h-96 rounded-2xl sm:mt-0 mt-2 overflow-hidden">
        <Image
            alt="Generated photo of a room"
            width={400}
            height={400}
            src={images[index]} // Utilisez l'image correspondant à l'index de la carte
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
          />
          
        </div>
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
      </div>
    </motion.div>
  );
};


const Home: NextPage = () => {



  // Ajouter un state pour stocker l'état d'affichage de la zone de texte
  const [showTextarea, setShowTextarea] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPrompt, setIsLoadingPrompt] = useState(false);
  const [darkMode, setDarkMode] = useState(false);



  // Ajouter un state pour stocker le contenu du texte généré par le prompt
  const [promptText, setPromptText] = useState("");

  const generatePrompt = () => {
    setIsLoadingPrompt(true);
    setTimeout(() => {
      const prompts = [
        "The combination of natural materials and technology in this image creates a very interesting and modern look.",
        "The lighting in this image is simply breathtaking. It creates a truly modern and sophisticated atmosphere.",
        "The clean lines and minimalist design in this image create a very modern and elegant atmosphere.",
        "I love the way this image incorporates cutting-edge technology into the design. It's both practical and visually impressive.",
        "The use of technology in this image is very subtle but effective. It adds a modern touch without overwhelming the design.",
        "The overall aesthetic of this image is very sleek and modern. The use of technology really enhances the design.",
        "This image has a very futuristic feel. I love the way technology seamlessly blends into the design.",
        "The way the colors are combined in this image is very innovative. It gives the space a very unique and modern look.",
        "This image has a very high-tech feel. It's perfect for those who love technology and want to incorporate it into their living space.",
        "The use of lighting and color in this image is very creative. It creates a truly modern and dynamic atmosphere.",
      ];

      const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

      // Mettre à jour le state pour afficher la zone de texte avec le prompt généré
      setPromptText(randomPrompt);
      setShowTextarea(true);
      setIsLoadingPrompt(false);
    }, 500); // Modifiez cette valeur pour ajuster la durée du chargement
  };



  const [copySuccess, setCopySuccess] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText);
    setCopySuccess(true);
  };


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  }, [darkMode]);



  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>YourPrompt</title>
      </Head>





      <main id="home" className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          href="https://stablediffusion.fr/france"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Download and Install {" "}
          <span className="text-blue-600">StableDiffusion</span>
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-7xl title-h1">
          Generate your Prompt{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">using AI </span>
          </span>{" "}
          for everyone.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg leading-7 title-h2">
          Copy and paste your prompt and see how your images look in different variations.
        </h2>

        <div
          className={`toggle-dark-mode ${darkMode ? "text-white-500 font-bold" : "text-dark-mode font-bold"
            } cursor-pointer`}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <>
              <span role="img" aria-label="moon emoji" className="icon">
                🌑
              </span>
              <span className="ml-2">Dark</span>
            </>
          ) : (
            <>
              <span role="img" aria-label="sun emoji" className="icon">
                ☀️
              </span>
              <span className="ml-2">Light</span>
            </>
          )}
        </div>



        {isLoadingPrompt ? (
          <div className="mt-10">
            <div className="loader loader--style6" title="5">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                xmlSpace="preserve"
              >
                <style>
                  {`
            .rect-loader {
              fill: ${darkMode ? "#fff" : "#333"};
            }
          `}
                </style>
                <rect
                  className="rect-loader"
                  x="0"
                  y="13"
                  width="4"
                  height="5"
                >
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="5;21;5"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="13; 5; 13"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  className="rect-loader"
                  x="10"
                  y="13"
                  width="4"
                  height="5"
                >
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="5;21;5"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="13; 5; 13"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  className="rect-loader"
                  x="20"
                  y="13"
                  width="4"
                  height="5"
                >
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="5;21;5"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="13; 5; 13"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
          </div>
        ) : (
          <button
            className="bg-linear-gradient bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full mt-10 transition duration-300 ease-in-out hover:from-purple-500 hover:to-blue-500"
            onClick={generatePrompt}
          >
            Générer un prompt
          </button>
        )}



        <div className="relative mt-10 w-full sm:w-1/2">
          {showTextarea && (
            <textarea
              className="w-full mt-5 p-2 border border-gray-300 rounded-md bg-gray-800 font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={promptText}
              readOnly
              style={{ height: '150px', borderRadius: '4px', borderStyle: 'solid', borderColor: '#718096', resize: 'none' }}
            />

          )}
          {showTextarea && (
            <div>
              <FaCopy
                className="absolute top-2 right-2 text-gray-400 cursor-pointer hover:text-gray-300 text-xl "
                onClick={copyToClipboard}

              />
              {copySuccess && <span className="text-blue-400 font-bold font-size-18">Copied!</span>}


            </div>

          )}
        </div>





        <div id="arts" className="cards-container flex flex-wrap justify-center">
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <Card key={index} index={index} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Home;