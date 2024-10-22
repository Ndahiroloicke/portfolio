"use client";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import descImage from "../assets/descImage.png";
interface ServeProps {
  name: string;
  description: string;
}
const Serve: FC<ServeProps> = ({ name, description }) => {
  const [moredesc, setmoredesc] = useState(false);
  return (
    <div>
      <div
        className={
          moredesc
            ? "flex flex-row justify-between gap-x-32 mb-[24px] items-start"
            : "flex flex-row justify-between gap-x-32 mb-[24px] items-center"
        }
      >
        <div className="flex gap-x-6 flex-row items-center">
          <div
            className={
              moredesc
                ? "rounded-full w-3 h-3 bg-purple-700"
                : "rounded-full w-3 h-3 bg-black"
            }
          ></div>
          <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0, transition: { duration: moredesc ? 0 : 3 } }}
          >
          <h1
            className={
              moredesc
                ? "font-bold text-[32px] text-purple-700 hover:cursor-pointer"
                : "font-bold text-[32px] hover:cursor-pointer"
            }
            onClick={() => setmoredesc(!moredesc)}
          >
            {name}
          </h1>
          </motion.div>
        </div>

        <div
          className={
            moredesc
              ? "flex flex-row items-start gap-x-32"
              : "flex gap-x-10 flex-row items-center"
          }
        >
          {moredesc ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            >
              <Image src={descImage} alt="description image" />
            </motion.div>
          ) : (
            <p className="w-[542px]">{description}</p>
          )}
          {moredesc ? (
            <i
              className="bx text-5xl bx-minus hover:cursor-pointer"
              onClick={() => setmoredesc(!moredesc)}
            ></i>
          ) : (
            <i className="bx hover:cursor-pointer text-5xl bx-plus"></i>
          )}
        </div>
      </div>
      {moredesc && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        >
          <div className="flex justify-end mr-16">
            <p className="w-[542px]">{description}</p>
          </div>
        </motion.div>
      )}
      <div className="w-auto h-[2px] bg-gray-400"></div>
    </div>
  );
};

export default Serve;
