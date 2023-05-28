import type { V2_MetaFunction } from "@remix-run/node";
import Front from "~/images/front.png";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="p-20 pt-[300px]">
      <h1 className="text-8xl text-center font-pilowlava text-tree-poppy-600 mb-32">
        Hi, I'm Bamba
      </h1>
      <div className="flex flex-row gap-14 items-center justify-center">
        <img
          src={Front}
          className="h-[500px] border-8 border-tree-poppy-600 bg-tree-poppy-300 w-[500px]  object-contain p-20 rounded-full"
        />
        <p className="font-shantell text-3xl text-tree-poppy-700 max-w-[600px] leading-relaxed">
          I'm 4 months old. I'm a mongrel mixed with Pit Bull. And I have{" "}
          <span className="font-bold text-tree-poppy-800">"white sock"</span> on
          my left hand.
        </p>
      </div>
    </div>
  );
}
