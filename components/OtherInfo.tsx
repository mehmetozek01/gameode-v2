import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: any;
};
const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

function OtherInfo({ data }: Props) {
  return (
    <motion.div initial="hidden" animate={"visible"} className=" flex flex-col">
      {/* <AnimatedText
        className=" spacing overflow-hidden text-[#D5D5D6]"
      // data={data?.location}
      /> */}
      <AnimatedText
       className="backdrop-blur-md rounded-full px-6 py-3 text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold break-words overflow-hidden text-center shadow-lg"
        data={data?.title}
      />
      <AnimatedText
        className=" text-xs text-[#D5D5D6]"
        data={data?.description}
      />
    </motion.div>
  );
}

export default OtherInfo;

const AnimatedText = ({
  data,
  className,
}: {
  data?: string;
  className?: string;
}) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={` ${className}`} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
};
