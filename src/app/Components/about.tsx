export default function About() {
  return (
    <>
      <div className="bg-light-cyan h-screen w-full flex pl-10 pr-10 pt-30 pb-10 overflow-hidden">
        <div className="flex box-border w-full h-full relative  ">
          {/* Decorative elements */}
          {/* <div className="decorative absolute bottom-[-8%] right-[-4%] rotate-230">
            <img src="/elements/et.png" alt="" className="h-50" />
          </div> */}
          <div className="w-[50%] object-fill p-2 flex items-center ">
            <img
              src="/Hero/f1.png"
              alt=""
              className="p-2 border-3 border-[#006663] rounded-tl-[30%] rounded-bl-[30%]"
            />
            <div className="decorative z-2 absolute top-100 left-[28.22%] ">
              <img src="/elements/sparkle.png" alt="" className="h-30" />
            </div>
            <div className="decorative z-2 absolute top-120 left-[60%] ">
              <img src="/elements/sparkle.png" alt="" className="h-20" />
            </div>
          </div>
          <div className="w-[50%] flex flex-col items-center p-8 ">
            <h1 className="heading text-[#006663] text-5xl/25 ">Ashika Jain</h1>
            <p className="text text-[#006663] text-xl/10">
              I’m Ashika Jain — a yoga trainer, dancer, sound healer, and eft
              practitioner. My purpose is to guide people toward balance,
              healing, and self-discovery through mindful movement, rhythm, and
              energy work.
            </p>
          </div>
          <div className="w-[50%] object-fill p-0.5 flex items-center ">
            <img
              src="/Hero/f7.png"
              alt=""
              className="p-2 border-3 border-[#006663]"
            />
            <div className="decorative z-2 absolute top-80 right-[29.7%] ">
              <img src="/elements/sparkle.png" alt="" className="h-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
