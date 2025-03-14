import { cn } from "@/utils/cn";
import { styleText } from "util";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id:number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={'${id===6}&& flex justify-center h-full'}>
        <div className="w-full h-full absolute">
          {img &&(
            <img src={img} alt={img} className={cn(imgClassName,'object-cover,object-centre')}
            ></img>
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}>
              {spareImg && (<img src={spareImg} alt={spareImg} className={cn('object-cover,object-centre w-full h-full')}/>)}
            </div>
            <div>
              {id===6 && (
                <BackgroundGradientAnimation>
                  <div className="absolute z-50 flex items-center justify-center text-white-100 font-bold"/>
                </BackgroundGradientAnimation>
              )}
            </div>
            <div className={cn(
              titleClassName,'group-hover/bento:translate-x-2 transition duration -200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-sm lg:text-base z-10">{description}</div>
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
        {id === 2 && <GlobeDemo/>}
        {id ===3 && (<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
          <div className="flex flex-col gap-3 lg:gap-8">
            {['react.js','next.js','PHP'].map((item)=>(<span></span>))}
          </div>

        </div>)}
      </div>
    </div>
  );
};
