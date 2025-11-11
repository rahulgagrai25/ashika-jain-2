import React from 'react'

function page() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `
            radial-gradient(
              circle at top left,
              rgba(56, 193, 182, 0.5),
              transparent 70%
            )
          `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-36 max-sm:gap-16">
            {/* Image Section */}
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative">
                {/* Image */}
                <div className="w-64 h-64 md:w-100 md:h-100 bg-linear-to-br from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/Hero/aj.png" 
                    alt="Ashika Jain" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Optional decorative element */}
                {/* <div className="absolute -bottom-2 -right-2 w-24 h-24 border-2 border-gray-900 rounded-full -z-10"></div> */}
              </div>
            </div>
            
            {/* Text Content */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-light text-[#192f33] mb-6 tracking-tight">
                Ashika Jain
              </h1>
              
              <p className="text-xl md:text-2xl text-[#30555a] mb-8 font-light">
                Artist • Guide • Healer
              </p>
              
              <div className="mb-12">
                <p className="lato-font text-lg md:text-xl text-[#192f33] leading-relaxed">
                  Weaving together movement, mindfulness, sound, and energy practices 
                  for holistic well-being and transformative healing experiences.
                </p>
              </div>
              
              <button className="bg-transparent border border-[#192f33] text-[#192f33] px-8 py-3 text-lg font-light 
                                hover:bg-[#377e83] hover:border-white hover:text-white transition-all duration-300 
                                focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page