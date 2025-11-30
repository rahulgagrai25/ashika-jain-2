export default function Hero() {
    return (
        <>
        <section className="bg-light-cyan h-screen w-100vw flex pl-5 pr-5 pt-10 pb-10 overflow-hidden ">
            
            <div className="flex box-border w-full h-full relative ">
                {/* Decorative elements */}
                <div className="decorative absolute top-[-25%] left-[-15%] rotate-130 opacity-80">
                    <img src="/elements/e1.png" alt="" className="h-140"/>
                </div>
                <div className="decorative absolute bottom-[-35%] right-[-15%] opacity-80">
                    <img src="/elements/e1.png" alt="" className="h-150 "/>
                </div>
                <div className="decorative absolute top-[10%] left-[-7%] rotate-30 ">
                    <img src="/elements/el.png" alt="" className="h-60"/>
                </div>
                <div className="decorative absolute top-[-12%] left-[70%] rotate-220 ">
                    <img src="/elements/et.png" alt="" className="h-50"/>
                </div>
                
                {/* Content */}
                <div className="w-[70%] relative top-0 left-30 ">
                    <div className="pt-30">
                        <h3 className="text text-[#006663] mb-5 text-3xl/10">breathe deeply, move mindfully,</h3>
                        <h1 className="heading text-[#006663] text-7xl/25 ">Find Your Inner Stillness</h1>
                        <p className="w-[60%] text text-[#006663] text-xl/10">experience the transformative power of yoga in a serene, supportive environment. Our dedicated instructors guide you through gentle movements and mindful breathing,</p>
                        <button className="mt-10 w-30 text-white px-6 py-3 rounded-full hover:bg-[#006663] transition duration-300"><img src="/elements/arrow.png" alt="" /></button>
                    </div>
                </div>
                <div className="w-110 z-1 relative left-[-10%] top-25"> 
                    <img src="/Hero/frame1.png" alt="" className="" />
                </div >
                <div className="decorative z-2 absolute top-100 left-[56.36%] ">
                    <img src="/elements/sparkle.png" alt="" className="h-30"/>
                </div>
             
            </div>
            
        </section>
        </>
    )
}