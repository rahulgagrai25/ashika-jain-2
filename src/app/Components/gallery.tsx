import React from "react";

function Gallery() {
  return (
    <div>
      <div className="h-auto w-auto p-10 pt-30 bg-light-cyan flex flex-col justify-center gap-10 box-border overflow-hidden ">
        {/* Decorative elements */}
        <div className="decorative absolute rotate-130 opacity-80 top-[200%] left-[-15%] z-1">
          <img src="/elements/e1.png" alt="" className="h-140" />
        </div>
        <div className="pl-30 pr-30 z-2">
          <h1 className="heading text-[#006663] text-8xl/25 ">
            A quiet invitation to
          </h1>
          <h1 className="heading text-[#006663] text-7xl/25 ">
            return to the breathe,
          </h1>
          <h3 className="text text-[#006663] mb-5 text-3xl/10">
            soften the mind, and reconnect with the soul
          </h3>
        </div>
        <div className="p-10 flex justify-center z-2">
          <img
            src="/Hero/f72.png"
            alt=""
            className="h-130 p-2 border-3 border-[#006663]"
          />
        </div>
        <div className="decorative z-2 absolute top-[235%] left-[70%]">
          <img src="/elements/sparkle.png" alt="" className="h-30" />
        </div>
        <div className="decorative z-2 absolute top-[300%] left-[76.9%]">
          <img src="/elements/sparkle.png" alt="" className="h-20" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
