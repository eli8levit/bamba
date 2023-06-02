import type { V2_MetaFunction } from "@remix-run/node";
import Front from "~/images/front.png";

const PawSvg = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 900 900"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="285.036"
      cy="442.398"
      rx="59.0837"
      ry="92.2953"
      transform="rotate(-18.2671 285.036 442.398)"
    />
    <ellipse
      cx="615.336"
      cy="473.704"
      rx="59.0837"
      ry="92.2953"
      transform="rotate(17.9596 615.336 473.704)"
    />
    <ellipse
      cx="386.446"
      cy="303.96"
      rx="59.6476"
      ry="103.289"
      transform="rotate(-8.48683 386.446 303.96)"
    />
    <ellipse
      cx="526.969"
      cy="313.324"
      rx="59.6476"
      ry="103.289"
      transform="rotate(13.5265 526.969 313.324)"
    />
    <path d="M419.689 471.342C340.401 504.981 277.243 638.357 296.058 674.344C316.408 713.268 358.086 702.425 397.515 692.075C436.406 681.866 474.169 698.142 513.805 704.904C538.503 709.118 556.734 704.045 568.822 692.946C594.967 668.942 582.841 626.466 569.781 593.463C553.9 553.33 526.668 502.49 480.364 476.164C461.857 465.642 439.287 463.028 419.689 471.342Z" />
  </svg>
);

const Paws = ({ className }: { className: string }) => (
  <div className={`absolute flex flex-col gap-12 ${className}`}>
    <div className="flex flex-row gap-2">
      <PawSvg className="h-[50px] rotate-1 fill-tree-poppy-400" />
      <PawSvg className="h-[50px] rotate-2 fill-tree-poppy-400" />
    </div>
    <div className="flex flex-row gap-2">
      <PawSvg className="h-[50px] -rotate-3 fill-tree-poppy-400" />
      <PawSvg className="h-[50px] -rotate-1 fill-tree-poppy-400" />
    </div>
  </div>
);

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-24 p-4">
      <div>
        <h1 className="font-pilowlava text-7xl text-tree-poppy-500 md:leading-[1] lg:text-[120px]">
          I'm Bamba
        </h1>
      </div>
      <div className="relative mx-auto flex flex-col items-center justify-center gap-12 rounded-lg border-tree-poppy-700 bg-[length:400px] bg-repeat lg:flex-row lg:gap-24">
        <img
          src={Front}
          className="h-[250px] object-contain md:h-[500px] 2xl:h-[500px]"
        />
        <p className="mx-auto mb-12 max-w-[300px] font-shantell text-2xl !leading-relaxed text-black md:max-w-[500px] md:text-3xl">
          <span className="font-bold text-tree-poppy-700 md:text-4xl">
            I love to sleep, to play and to eat.{" "}
          </span>
          I'm 4 months old. I'm a mongrel mixed with Pit Bull. And I have{" "}
          <span className="font-bold text-tree-poppy-700">"white sock"</span> on
          my left hand ©
        </p>
      </div>
    </div>
  );
}
