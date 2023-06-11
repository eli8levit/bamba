import React from "react";
import Front from "~/images/front.png";
import One from "~/images/1.jpeg";
import Two from "~/images/2.jpeg";
import Three from "~/images/3.jpeg";
import { useScroll, motion, useTransform } from "framer-motion";

export default function _index() {
  const { scrollY } = useScroll();
  const translate = useTransform(scrollY, [0, 800], [0, 300]);
  const translate2 = useTransform(scrollY, [0, 400], [200, 0]);
  const translate3 = useTransform(scrollY, [30, 300], [20, 120]);
  const translate4 = useTransform(scrollY, [30, 300], [20, 100]);

  return (
    <div className="m-4 flex max-w-[1000px] flex-col items-center justify-center gap-6 md:m-16 2xl:m-28">
      <motion.div
        initial={{ opacity: 0, translateX: -300 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
        style={{ x: translate }}
        className="grid grid-cols-1 gap-12 rounded-[70px] border-[0.5px] border-tree-poppy-100 bg-[rgba(255,255,255,0.4)] px-8 py-16 shadow-xl backdrop-blur-md md:rounded-[120px] md:p-24 lg:grid-cols-2 2xl:p-28"
      >
        <div className="mx-auto flex max-w-[400px] flex-col gap-8">
          <h1 className="font-pilowlava text-6xl text-tree-poppy-700 md:text-7xl lg:text-8xl 2xl:text-9xl">
            I'm Bamba
          </h1>
          <p className="l font-shantell text-xl !leading-relaxed text-black 2xl:text-2xl">
            I love to sleep, to play and to eat. I'm 4 months old. I'm a mongrel
            mixed with Pit Bull. And I have
            <span className="font-bold text-tree-poppy-700">
              "white sock"
            </span>{" "}
            on my left hand ©
          </p>
        </div>
        <motion.img
          style={{ backdropFilter: `brightness(${translate4}%)` }}
          src={Front}
          className="mx-auto h-[250px] shrink-0 object-contain md:h-[380px] 2xl:h-[500px]"
        />
      </motion.div>
      <motion.div
        initial={{ translateX: 600, opacity: 0.5 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ x: translate2 }}
        className="grid w-full max-w-[1000px] grid-cols-1 items-end gap-12 rounded-[70px] border-[0.5px] border-tree-poppy-100 bg-[rgba(255,255,255,0.4)] px-8 py-16 shadow-xl backdrop-blur-md md:grid-cols-3 md:rounded-[120px] md:p-24 2xl:p-28"
      >
        <div className="mx-auto flex max-w-[300px] flex-col gap-8">
          <h2 className="font-shantell text-base font-bold text-tree-poppy-600">
            I'm sleeping
          </h2>
          <motion.img
            src={One}
            style={{ borderRadius: translate3 }}
            className="mx-auto h-[250px] w-[250px] border-[1px] border-tree-poppy-200 object-cover shadow-md"
          />
        </div>
        <div className="mx-auto flex max-w-[300px] flex-col gap-8">
          <h2 className="font-shantell text-base font-bold text-tree-poppy-700">
            My owner took me to the sea for the first time
          </h2>
          <motion.img
            src={Two}
            style={{ borderRadius: translate3 }}
            className="mx-auto h-[250px] w-[250px] border-[1px] border-tree-poppy-200 object-cover shadow-md"
          />
        </div>
        <div className="mx-auto flex max-w-[300px] flex-col gap-8">
          <h2 className="font-shantell text-base font-bold text-tree-poppy-900">
            First time in forest with a lot of noises, smells and trees
          </h2>
          <motion.img
            src={Three}
            style={{ borderRadius: translate3 }}
            className="mx-auto h-[250px] w-[250px]  border-[1px] border-tree-poppy-200 object-cover shadow-md"
          />
        </div>
        <p className="col-span-full mx-auto mt-12 w-max max-w-[400px] font-pilowlava text-4xl text-tree-poppy-900 md:max-w-[600px] lg:max-w-[800px]">
          All the fun is yet to come :)
        </p>
      </motion.div>
    </div>
  );
}
