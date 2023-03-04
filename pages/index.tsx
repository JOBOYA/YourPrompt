import { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import { FaCopy } from "react-icons/fa";

const Home: NextPage = () => {

  // Ajouter un state pour stocker l'état d'affichage de la zone de texte
  const [showTextarea, setShowTextarea] = useState(false);

  // Ajouter un state pour stocker le contenu du texte généré par le prompt
  const [promptText, setPromptText] = useState("");

  const generatePrompt = () => {
    const prompts = [
    //prompt ai
    "This image has a very futuristic feel to it. I love the way the technology blends seamlessly into the design.",
    "The lighting in this image is simply stunning. It creates a really modern and sophisticated atmosphere.",
    "The way the colors in this image are combined is very innovative. It gives the space a very unique and modern look.",
    "I love how this image incorporates cutting-edge technology into the design. It's both practical and visually stunning.",
    "The clean lines and minimalist design of this image create a very modern and stylish atmosphere.",
    "This image has a very high-tech feel to it. It's perfect for anyone who loves technology and wants to incorporate it into their living space.",
    "The use of technology in this image is very subtle but effective. It adds a modern touch without overwhelming the design.",
    "The overall aesthetic of this image is very sleek and modern. The use of technology really enhances the design.",
    "The blend of natural materials and technology in this image creates a very interesting and modern look.",
    "The use of lighting and color in this image is very creative. It creates a really modern and dynamic atmosphere.",



      
    ];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    // Mettre à jour le state pour afficher la zone de texte avec le prompt généré
    setPromptText(randomPrompt);
    setShowTextarea(true);
  };



const [copySuccess, setCopySuccess] = useState(false);
const copyToClipboard = () => {
  navigator.clipboard.writeText(promptText);
  setCopySuccess(true);
};


  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>YourPrompt</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          href="https://vercel.fyi/roomGPT"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Clone and deploy your own with{" "}
          <span className="text-blue-600">Vercel</span>
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
        Generate your Prompt{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">using AI </span>
          </span>{" "}
          for everyone.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        Copy and paste your prompt and see how your images look in different variations.
        </h2>
        <button
          className="bg-linear-gradient bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full mt-10 transition duration-300 ease-in-out "
          onClick={generatePrompt}
        >
          Générer un prompt
        </button>
        <div className="relative mt-10 w-full sm:w-1/2">
  {showTextarea && (
    <textarea
      className="w-full mt-5 p-2 border border-gray-300 rounded-md bg-gray-800 font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      value={promptText}
      readOnly
      style={{ height: '150px', borderRadius: '4px', borderStyle: 'solid', borderColor: '#718096', resize: 'none' }}
            />
           
          )}
           <FaCopy
    className="absolute top-2 right-2 text-gray-400 cursor-pointer hover:text-gray-300 text-xl"
            onClick={copyToClipboard}
           
          />
          {copySuccess && <span className="text-blue-400 font-bold font-size-18">Copied!</span>}
 

</div>

   

        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
            <div className="sm:mt-0 mt-8 relative">
  <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
  <div className="w-full h-96 rounded-2xl sm:mt-0 mt-2 overflow-hidden">
    <Image
      alt="Generated photo of a room with roomGPT.io"
      width={400}
      height={400}
      src="/fox.jpeg"
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
    />
  </div>
              </div>
              <div className="sm:mt-0 mt-8 relative">
  <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
  <div className="w-full h-96 rounded-2xl sm:mt-0 mt-2 overflow-hidden">
    <Image
      alt="Generated photo of a room with roomGPT.io"
      width={400}
      height={400}
      src="/women2.jpeg"
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
    />
  </div>


              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
