"use client";
import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import descImage from "../assets/descImage.png";

interface ServeProps {
  name: string;
  description: string;
}

const Serve: FC<ServeProps> = ({ name, description }) => {
  const [moredesc, setmoredesc] = useState(false);

  const toggleMoreDesc = () => setmoredesc((prev) => !prev);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className="mb-8"
    >
      <div
        className={`flex flex-col md:flex-row justify-between gap-y-6 md:gap-x-10 mb-6 md:mb-[24px] items-center transition-all duration-500 ${
          moredesc ? "items-start" : "items-center"
        }`}
      >
        {/* Title and indicator */}
        <div className="flex gap-x-6 flex-row items-center">
          <motion.div
            className={
              moredesc
                ? "rounded-full w-3 h-3 bg-purple-700"
                : "rounded-full w-3 h-3 bg-black"
            }
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.4 } }}
          ></motion.div>

          <motion.h1
            className={`font-bold text-xl sm:text-2xl lg:text-[32px] hover:cursor-pointer ${
              moredesc ? "text-purple-700" : ""
            }`}
            onClick={toggleMoreDesc}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          >
            {name}
          </motion.h1>
        </div>

        {/* Description and Image */}
        <div
          className={`flex flex-col md:flex-row gap-y-4 md:gap-x-10 items-center transition-all duration-500 ${
            moredesc ? "items-start gap-x-32" : "items-center"
          }`}
        >
          <AnimatePresence>
            {moredesc ? (
              <motion.div
                key="image"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image
                  src={descImage}
                  alt="description image"
                  className="w-full max-w-[400px] md:mr-16 sm:max-w-[500px]"
                />
              </motion.div>
            ) : (
              <motion.p
                key="description"
                className="w-full max-w-full md:max-w-[400px] lg:max-w-[542px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Plus/Minus icon */}
          <motion.i
            className={`bx ${
              moredesc ? "bx-minus" : "bx-plus"
            } text-3xl md:text-4xl lg:text-5xl hover:cursor-pointer`}
            onClick={toggleMoreDesc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            whileHover={{ scale: 1.2 }}
          ></motion.i>
        </div>
      </div>

      {/* Expanded Description */}
      <AnimatePresence>
        {moredesc && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex justify-start md:justify-end mr-4 md:mr-10">
              <p className="w-full max-w-[542px]">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider Line */}
      <motion.div
        className="w-full h-[2px] bg-gray-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { duration: 0.5 } }}
      ></motion.div>
    </motion.div>
  );
};

export default Serve;
