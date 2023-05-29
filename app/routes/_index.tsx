import type { V2_MetaFunction } from "@remix-run/node";
import Front from "~/images/front.png";
import Poster from "~/images/poster.jpg";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="p-20 flex flex-col gap-20 2xl:gap-40 pt-[100px] 2xl:pt-[150px]">
      <h1 className="text-8xl text-center font-pilowlava text-tree-poppy-600">
        Hi, I'm Bamba
      </h1>
      <div className="flex flex-row gap-14 items-center justify-center">
        <img
          src={Front}
          className="2xl:h-[500px] border-4 2xl:border-8 border-tree-poppy-600 bg-tree-poppy-300 w-[450px] h-[450px] 2xl:w-[500px]  object-contain p-20 rounded-full"
        />
        <p className="font-shantell text-3xl text-tree-poppy-700 max-w-[600px] leading-relaxed">
          I'm 4 months old. I'm a mongrel mixed with Pit Bull. And I have{" "}
          <span className="font-bold text-tree-poppy-800">"white sock"</span> on
          my left hand.
        </p>
      </div>
      <img
        src={Poster}
        className="w-full max-w-[1000px] 2xl:border-8 border-tree-poppy-600 mx-auto rounded-2xl"
      />
    </div>
  );
}
