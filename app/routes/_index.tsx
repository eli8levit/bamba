import React from "react";
import Front from "~/images/front.png";

export default function _index() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[200px] w-full bg-main bg-[length:300px] bg-center md:bg-[length:600px] lg:h-[340px]">
        <img
          src={Front}
          className="absolute right-[50px] top-[40px] h-[240px] drop-shadow-2xl md:right-[120px] md:top-[80px] md:h-[300px] lg:right-[50%] lg:top-[100px] lg:h-[450px] lg:translate-x-[380px]"
        />
      </div>
      <div className="p-8">
        <div className="mx-auto flex max-w-[500px] flex-col gap-8 py-[50px] md:w-max lg:-translate-x-[200px]">
          <h1 className="font-pilowlava text-7xl leading-[1.2] text-tree-poppy-900 md:text-8xl">
            I'm Bamba
          </h1>
          <p className="font-shantell text-xl !leading-relaxed text-black  md:text-2xl">
            I love to sleep, to play and to eat. I'm 4 months old. I'm a mongrel
            mixed with Pit Bull. And I have
            <span className="font-bold text-tree-poppy-700">
              "white sock"
            </span>{" "}
            on my left hand ©
          </p>
        </div>
      </div>
    </div>
  );
}
