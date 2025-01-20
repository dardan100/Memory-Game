import React from "react";
import { motion } from "framer-motion";
import infoImg from "../assets/images/infoImg.png";

export default function Info({ info }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.6 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <>
      <motion.div
        className="fixed bottom-[50px] md:bottom-[80px] bg-gradient-to-r from-red-700 to-orange-500 rounded-lg right-[165px] md:right-[190px] ml-[30px]  px-4 py-4"
        key="modal"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="border mb-2 text-[15px] md:text-lg bg-orange-600 rounded-lg border-orange-500 px-2 py-1">
          Don't click on the same card twice!
        </div>
        <div className="border text-[15px] bg-red-600 md:text-lg rounded-lg border-red-500 px-2 py-1">
          Click on DRAGON BALL Z logo to go back.
        </div>
      </motion.div>
      <motion.img
        onClick={!info}
        src={infoImg}
        alt="Mabel Info"
        className="fixed h-[150px] md:h-[170px] bottom-[20px] md:bottom-[25px] right-[10px] rounded-3xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
    </>
  );
}
