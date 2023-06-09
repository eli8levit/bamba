import React from "react";
import Front from "~/images/front.png";
import one from "~/images/1.jpeg";
import two from "~/images/2.jpeg";

export default function _index() {
  return (
    <div className="flex max-w-[1600px] flex-col gap-6">
      <div className="grid w-full grid-cols-2 items-center justify-center gap-20 rounded-[120px] border-[0.5px] border-tree-poppy-100 bg-[rgba(255,255,255,0.4)] p-28 shadow-xl backdrop-blur-md">
        <div className="mx-auto flex max-w-[500px] flex-col gap-8 py-[50px]">
          <h1 className="font-pilowlava text-9xl text-tree-poppy-700">
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
        <img src={Front} className="mx-auto h-[500px] shrink-0" />
      </div>
      {/*<div className="grid grid-cols-[1fr_2fr] gap-6">*/}
      {/*  <div className="grid h-[500px] w-full grid-cols-1 grid-rows-2 gap-8 rounded-[60px] rounded-r-[35px] border-[0.5px] border-tree-poppy-100 bg-[rgba(255,255,255,0.4)] p-16 shadow-xl backdrop-blur-md">*/}
      {/*    <img src={one} className="w-full rounded-[50px] object-cover" />*/}
      {/*    <p className="max-w-[300px] font-shantell text-xl text-black md:text-2xl">*/}
      {/*      As you can see here I'm sleeping*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <div className="grid h-[500px] w-full grid-cols-2 items-center gap-8 rounded-[60px] rounded-l-[35px] border-[0.5px] border-tree-poppy-100 bg-[rgba(255,255,255,0.4)] p-16 shadow-xl backdrop-blur-md">*/}
      {/*    <img src={two} className="mx-auto w-full rounded-[50px] " />*/}
      {/*    <p className="max-w-[400px] font-shantell text-xl text-black md:text-3xl">*/}
      {/*      And here my owner took my to the sea for the first time!!!*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}
