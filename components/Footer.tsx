//footer with social icon animate 

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footers = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
      <div className="flex items-center justify-center space-x-4">
        <motion.a
          href="  "
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}    
        >
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <FaGithub className="icon" size={24} />
          </motion.div>
        </motion.a>
        <motion.a

          href="  "
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <motion.div

            animate={{
              scale: isHovered2 ? 1.2 : 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <FaLinkedin className="icon" size={24} />
          </motion.div>
        </motion.a>
        <motion.a
          href="  "
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-gray-500 transition-colors duration-200"  
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <motion.div
            animate={{
              scale: isHovered3 ? 1.2 : 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <FaTwitter  className="icon" size={24} />
          </motion.div>
        </motion.a>
      </div>
      <p className="mt-4 text-sm text-gray-400">
        © 2023 YourPrompt.io All rights reserved.
      </p>
    </footer>
  );
};

export default Footers;

