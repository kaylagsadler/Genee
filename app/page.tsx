import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overscroll-none overscroll-y-none">
      <div className="max-w-[1440px] mx-auto">
      <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="px-6 pt-6 pb-6 flex-shrink-0">
        <div className="bg-[#f7efe2] rounded-3xl px-14 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-10 h-[59px] w-[316px] justify-start">
            <div className="h-11 w-[125px] relative">
              <Image
                src="/genee-logo.png"
                alt="Logo"
                width={125}
                height={44}
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-10 text-[#373731] text-base font-normal flex-1 justify-center">
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              How it works
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
            <a href="#" className="nav-link">
              Resources
            </a>
            <a href="#" className="nav-link">
              FAQ
            </a>
            <a href="#" className="nav-link">
              Reviews
            </a>
          </div>

          {/* Login/Sign up */}
          <div className="flex items-center gap-10 h-[59px] w-[316px] justify-end">
            <a
              href="#"
              className="nav-link text-[#373731] text-base font-normal"
            >
              Log in
            </a>
            <button className="border border-[#01444e] rounded-[20px] h-[50px] px-8 py-4 flex items-center justify-center gap-1 hover:bg-[#01444e]/5 transition-colors cursor-pointer">
              <span className="text-[#01444e] text-base font-bold">Get started</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#01444e]"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[40px] mx-6 mt-0 flex-1 min-h-0">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px] z-0">
          <div className="relative w-full h-full">
            <Image
              src="/hero-image-1.png"
              alt="Hero background"
              fill
              className="object-cover"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>

        {/* Woman Image Overlay - matches background exactly */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px] z-30">
          <div className="relative w-full h-full">
            <Image
              src="/transparent-1.png"
              alt="Woman illustration"
              fill
              className="object-cover"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>

        {/* Graphic Container */}
        <div className="relative h-full w-full">

          {/* Text Overlay */}
          <div className="absolute backdrop-blur-[25px] bg-[rgba(103,76,54,0.5)] flex flex-col gap-14 items-start left-0 px-14 py-10 rounded-br-[24px] rounded-tr-[24px] bottom-[56px] w-[60%] max-w-[779px] z-40" style={{ bottom: 'calc(56px + env(safe-area-inset-bottom))' }}>
            <div className="flex flex-col gap-4 items-start text-[#FFFEFC] w-full">
              <h1 className="hero-heading font-bold leading-[1.2] text-[60px] w-full">
                Embrace your<span className="text-[#d8f370]"> Magic</span>
              </h1>
              <p className="font-normal leading-[1.5] text-2xl w-full">
                Reclaim your confidence and make empowering decisions with individualized, purpose-driven coaching.
              </p>
            </div>
            <button className="bg-[#d8f370] flex gap-1 h-[54px] items-center justify-center px-8 py-4 rounded-[20px] w-[316px] hover:opacity-90 transition-opacity cursor-pointer">
              <span className="font-bold text-[#373731] text-lg">Let's Connect</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#373731"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Bubbles/Badges - positioned relative to hero section */}
          <div className="absolute bg-[#d8f370] flex items-center justify-center left-[30%] px-6 py-3 rounded-[50px] shadow-lg top-[9%] w-[364px] z-20">
            <p className="font-bold text-[#373731] text-2xl whitespace-nowrap">
              Irene, 48
            </p>
          </div>

          <div className="absolute bg-[#01444e] flex items-center justify-center left-[26%] px-6 py-3 rounded-[50px] shadow-lg top-[26%] z-40">
            <p className="font-bold text-[#FFFEFC] text-lg whitespace-nowrap">
              Marketing manager
            </p>
          </div>

          <div className="absolute bg-[#01444e] flex items-center justify-center left-[68%] px-6 py-3 rounded-[50px] shadow-lg top-[57%] z-40">
            <p className="font-bold text-[#FFFEFC] text-lg whitespace-nowrap">
              Is ready to invest in herself
            </p>
          </div>

          <div className="absolute bg-[#01444e] flex items-center justify-center right-[66px] px-6 py-3 rounded-[50px] shadow-lg top-[33%] z-40">
            <p className="font-bold text-[#FFFEFC] text-lg whitespace-nowrap">
              Feels stuck and distant in her career
            </p>
          </div>
        </div>
      </section>
      </div>

      {/* Stats Section */}
      <section className="flex gap-4 items-center justify-center px-0 py-[104px] mt-6">
        <div className="flex flex-col gap-2 items-center justify-center px-6 py-3 rounded-[20px] w-[400px]">
          <p className="font-bold text-[#01444e] text-[72px] whitespace-nowrap">
            94%
          </p>
          <p className="font-normal leading-[1.5] text-[#373731] text-lg text-center w-[272px]">
            Members' satisfaction with their coaching experience
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center px-6 py-3 rounded-[20px] w-[400px]">
          <p className="font-bold text-[#01444e] text-[72px] whitespace-nowrap">
            4.7/5 stars
          </p>
          <p className="font-normal leading-[1.5] text-[#373731] text-lg text-center w-[272px]">
            Members rated the value of our coaching sessions
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center px-6 py-3 rounded-[20px] w-[400px]">
          <p className="font-bold text-[#01444e] text-[72px] whitespace-nowrap">
            100%
          </p>
          <div className="font-normal leading-[1.5] text-[#373731] text-lg text-center">
            <p className="mb-0">Members rated the effectiveness</p>
            <p>when completing a post-coaching survey</p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
