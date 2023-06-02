import type { V2_MetaFunction } from "@remix-run/node";
import Front from "~/images/front.png";
import Sea from "~/images/sea.svg";
import Sleep from "~/images/sleep.svg";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-24 p-4">
      <h1 className="font-pilowlava text-7xl text-tree-poppy-500 md:leading-[1] lg:text-[120px]">
        I'm Bamba
      </h1>
      <div className="relative mx-auto flex flex-col items-center justify-center gap-12 rounded-lg border-tree-poppy-700 bg-[length:400px] bg-repeat lg:flex-row lg:gap-24">
        <img
          src={Front}
          className="h-[250px] object-contain md:h-[500px] 2xl:h-[500px]"
        />
        <p className="mx-auto mb-12 max-w-[300px] font-shantell text-3xl !leading-relaxed text-black md:max-w-[500px]">
          <span className="text-tree-poppy-700">
            I love to sleep, to play and to eat.{" "}
          </span>
          I'm 4 months old. I'm a mongrel mixed with Pit Bull. And I have{" "}
          <span className="font-bold text-tree-poppy-700">"white sock"</span> on
          my left hand ©
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-12">
        <p className="font-shantell text-3xl !leading-relaxed text-black md:max-w-[400px]">
          My father took me to the sea for the first time 😍 →
        </p>
        <img src={Sea} className="w-[400px] rotate-6 drop-shadow-lg" />
      </div>
      <div className="flex flex-row items-center justify-center gap-12">
        <img src={Sleep} className="w-[400px] -rotate-12 drop-shadow-lg" />
        <p className="font-shantell text-3xl !leading-relaxed text-black md:max-w-[400px]">
          ← And that's how I'm sleeping
        </p>
      </div>
    </div>
  );
}
