import type { V2_MetaFunction } from "@remix-run/node";
import Front from "~/images/front.png";
import Sea from "~/images/sea.svg";
import Sleep from "~/images/sleep.svg";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-20 overflow-hidden p-4 md:gap-16">
      <h1 className="font-pilowlava text-7xl text-tree-poppy-700 md:leading-[1] lg:text-[120px]">
        I'm Bamba
      </h1>
      <div className="relative mx-auto flex flex-col items-center justify-center gap-8 rounded-lg border-tree-poppy-700 bg-[length:400px] bg-repeat md:gap-12 lg:flex-row lg:gap-24">
        <img
          src={Front}
          className="h-[250px] object-contain md:h-[500px] 2xl:h-[500px]"
        />
        <p className="mx-auto font-shantell text-xl !leading-relaxed text-black md:max-w-[300px] md:max-w-[500px] md:text-3xl">
          I love to sleep, to play and to eat. I'm 4 months old. I'm a mongrel
          mixed with Pit Bull. And I have
          <span className="font-bold text-tree-poppy-700">"white sock"</span> on
          my left hand ©
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
        <p className="font-shantell text-xl !leading-relaxed text-black md:max-w-[400px] md:text-3xl">
          My father took me to the sea for the first time 😍 →
        </p>
        <img src={Sea} className="w-[500px] rotate-6" />
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-12">
        <img src={Sleep} className="w-[500px] -rotate-12" />
        <p className="font-shantell text-xl !leading-relaxed text-black md:max-w-[400px] md:text-3xl">
          ← And that's how I'm sleeping
        </p>
      </div>
    </div>
  );
}
