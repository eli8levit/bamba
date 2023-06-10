import React from "react";
import Front from "~/images/front.png";

export default function _index() {
  return (
    <div className="m-4 grid grid-cols-1 items-center justify-center gap-12 rounded-[70px] border-[0.5px] border-tree-poppy-100 bg-[rgba(255,255,255,0.4)] px-8 py-16 shadow-xl backdrop-blur-md md:m-16 md:rounded-[120px] md:p-24 lg:grid-cols-2 2xl:m-28 2xl:p-28">
      <div className="mx-auto flex max-w-[400px] flex-col gap-8">
        <h1 className="font-pilowlava text-6xl text-tree-poppy-700 md:text-7xl 2xl:text-9xl">
          I'm Bamba
        </h1>
        <p className="l font-shantell text-xl !leading-relaxed text-black 2xl:text-2xl">
          I love to sleep, to play and to eat. I'm 4 months old. I'm a mongrel
          mixed with Pit Bull. And I have
          <span className="font-bold text-tree-poppy-700">"white sock"</span> on
          my left hand ©
        </p>
      </div>
      <img
        src={Front}
        className="mx-auto h-[250px] shrink-0 object-contain md:h-[380px] 2xl:h-[500px]"
      />
    </div>
  );
}
