import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { MessageCircle, Phone } from "lucide-react";



export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  // Smooth scroll with rolling effect
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const start = window.pageYOffset;
      const target = element.offsetTop - 80; // Account for fixed header
      const distance = target - start;
      const duration = 1200; // Longer duration for rolling effect
      let startTime: number;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (startTime === undefined) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, start + distance * ease);
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Omer Kaplan",
      client: "I'm Ready",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/62a0d86d901ba827098d7e71_OM.png",
      link: "https://www.youtube.com/watch?v=Uo0f_dwEmJ8",
    },
    {
      id: 2,
      title: "Nasrin & Eden Gabay",
      client: "Tinshom",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/62a0d8575e475e2bd7f39ed3_NAS.jpg",
      link: "https://www.youtube.com/watch?v=BydC_mPhuNU&list=RDBydC_mPhuNU&start_radio=1",
    },
    {
      id: 3,
      title: "ALUG",
      client: "Windows",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/68591bd1b17d7b71b3ccfd59_image%201-p-1600.png",
      link: "https://www.youtube.com/watch?v=qU2fLRwHKjc",
    },
    {
      id: 4,
      title: "KLIL",
      client: "Windows",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/68591dc89dc470714bc60cff_image.png",
      link: "https://www.youtube.com/watch?v=YHwGavgU2xc&list=PLgarNduxlVA7WlXIaR8DfN3SqGXQkPlbV",
    },
    {
      id: 5,
      title: "Netta",
      client: "Hakol Alay",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/6859286bed5ec01da1dca2cb_image%20(2).png",
      link: "https://www.youtube.com/watch?v=QBgr_FtXRxQ",
    },
    {
      id: 6,
      title: "Atara",
      client: "Peter Pen",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/685940ee18053c3090630be2_image%20(3).png",
      link: "https://www.youtube.com/watch?v=WleyCDUp44M",
    },
    {
      id: 7,
      title: "Inbal Bibi",
      client: "RAASH",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/685925fd0dc299c0e39ba946_BIBI.png",
      link: "https://www.youtube.com/watch?v=2eOs_y8x-XU",
    },
    {
      id: 8,
      title: "Ran Danker",
      client: "Babel",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/685926c0c09113ea7018bc34_image%20(1).png",
      link: "https://www.youtube.com/watch?v=aQaqnwUsFhs",
    },
    {
      id: 9,
      title: "Sivan Talmor",
      client: "White Shirt",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/62a0d8955bddd6a230ffaf8c_SIV.png",
      link: "https://www.youtube.com/watch?v=yjWDMCnHYZ0",
    },
    {
      id: 10,
      title: "Riverside",
      client: "Magic Clips",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64bf899ad77eaf1e72300f9f_Frame%201000003635%20(1).png",
      link: "https://www.instagram.com/p/CvHHl6Ltupz/?hl=en",
    },
    {
      id: 11,
      title: "Valery Hamati",
      client: "Mangina",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/6207dcbee6b2c2d23a8d8125_valery_1.jpg",
      link: "https://www.youtube.com/watch?v=xjD977pYUxc",
    },
    {
      id: 12,
      title: "Ivry Lider & Miri Mesika",
      client: "Merhak Neshima",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/6207dcbe079604cb0cf7e19d_ivry.jpg",
      link: "https://www.youtube.com/watch?v=sh8zX3-nJmM",
    },
    {
      id: 13,
      title: "AbbVie Campaign",
      client: "Pharmaceutical",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a698af4faf9d755379f95a_Abvvie%20Cover%202%201%20(2).png",
      link: "https://mega.nz/file/szRSwbhT#htds24HRjJQdy6ESpuWoLywP6lNo4ZG3r11cjichUng",
    },
    {
      id: 14,
      title: "Valery Hamati",
      client: "Digital Content",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a69922d65c2f2ec12afc88_6207dcbe06dcfc86257beadd_valery_%40-p-1600%201.png",
      link: "https://www.youtube.com/watch?v=rS8qAd9-K1k",
    },
    {
      id: 15,
      title: "Ivry & Machluf",
      client: "17 Banot",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a699b98d980f1140a59881_2_1.1%201%20(1).png",
      link: "https://www.youtube.com/watch?v=J-RdskDt93w",
    },
    {
      id: 16,
      title: "Valery & Boaz",
      client: "Halevay",
      image:
        "https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/624c8067dbed9b17c1180814_%D7%95%D7%90%D7%9C%D7%A8%D7%99%20%D7%95%D7%91%D7%A0%D7%99%D7%95.png",
      link: "https://www.youtube.com/watch?v=o1zvFPThV5Q",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-bold italic text-white tracking-tight">
            Bozo
          </div>
          <nav className="flex items-center space-x-3 sm:space-x-6 md:space-x-10">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-[#007AFF] transition-colors duration-200 font-medium cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-[#007AFF] transition-colors duration-200 font-medium cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-[#007AFF] transition-colors duration-200 font-medium cursor-pointer"
            >
              Contact
            </button>
            <div className="flex items-center space-x-2 sm:space-x-3 ml-3 sm:ml-4 md:ml-6 pl-3 sm:pl-4 md:pl-6 border-l border-gray-700">
              <a
                href="https://wa.me/972524338671"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 text-gray-300 hover:text-[#007AFF] hover:bg-gray-800 rounded-full transition-all duration-200"
                title="WhatsApp"
              >
                <MessageCircle
                  size={20}
                  className="sm:w-6 sm:h-6"
                />
              </a>
              <a
                href="tel:+972524338671"
                className="p-1.5 sm:p-2 text-gray-300 hover:text-[#007AFF] hover:bg-gray-800 rounded-full transition-all duration-200"
                title="Phone"
              >
                <Phone size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-lg animate-float-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-lg animate-float-slow" style={{animationDelay: '1s'}}></div>
          
          {/* Subtle Geometric Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse-gentle" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400/25 rounded-full animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse-gentle" style={{animationDelay: '4s'}}></div>
          
          {/* Drifting Particles */}
          <div className="absolute top-16 w-1 h-1 bg-white/10 rounded-full animate-drift" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-32 w-0.5 h-0.5 bg-blue-400/20 rounded-full animate-drift" style={{animationDelay: '8s'}}></div>
          <div className="absolute top-48 w-1 h-1 bg-purple-400/15 rounded-full animate-drift" style={{animationDelay: '15s'}}></div>
        </div>

        {/* Content */}
        <div className="text-center max-w-5xl relative z-10">
          <div className="mb-10">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold italic text-white tracking-tight leading-none">
              Bozo
            </h1>
            <p className="text-[20px] text-gray-400 tracking-[0.3em] mt-2 uppercase font-normal">
              Production House
            </p>
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            We create compelling commercials and music videos
          </p>
          <Button
            size="lg"
            className="bg-[#007AFF] hover:bg-[#0056CC] text-white px-12 py-6 text-xl font-normal rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/25 text-[20px]"
            onClick={() => scrollToSection("work")}
          >
            View Our Work
          </Button>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 px-6 bg-gray-900 border-y border-gray-800">
        <div className="max-w-screen-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-400 mb-12 tracking-wide uppercase">
            Trusted by Leading Brands
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-8 md:space-x-16 items-center whitespace-nowrap">
              {/* First set of logos */}
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6ea102903a2277b015_abbvie.svg"
                alt="AbbVie"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6e3423bc66901d38b8_histadrut.svg"
                alt="Histadrut"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6f6c0b576765c1555d_riverside.svg"
                alt="Riverside"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6e340eb423a03f73d4_artlist.svg"
                alt="Artlist"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6f9490e3d081fcc7d0_terminal%20x.svg"
                alt="Terminal X"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6f9d4c3101460d0889_tedi.svg"
                alt="Tedi"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6fe1c6af2535dbf6d8_friends.svg"
                alt="Friends"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6e9490e3d081fcc76c_nurofen.svg"
                alt="Nurofen"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />

              {/* Duplicate set for seamless loop */}
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6ea102903a2277b015_abbvie.svg"
                alt="AbbVie"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6e3423bc66901d38b8_histadrut.svg"
                alt="Histadrut"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6f6c0b576765c1555d_riverside.svg"
                alt="Riverside"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6e340eb423a03f73d4_artlist.svg"
                alt="Artlist"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6f9490e3d081fcc7d0_terminal%20x.svg"
                alt="Terminal X"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6f9d4c3101460d0889_tedi.svg"
                alt="Tedi"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6fe1c6af2535dbf6d8_friends.svg"
                alt="Friends"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/620673ba11a13b3dd446c89a/64a6bb6e9490e3d081fcc76c_nurofen.svg"
                alt="Nurofen"
                className="h-8 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-[70px] text-center text-white tracking-tight p-[0px] mt-[0px] mr-[0px] ml-[0px]">
            Selected Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="group cursor-pointer overflow-hidden rounded-3xl border-0 bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-gray-700/50 transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-400 font-medium">
                      {item.client}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Who We Are
              </h2>
            </div>
            <div>
              <p className="text-2xl text-gray-300 leading-relaxed font-medium">
                Crafting cinematic stories that captivate. From concept to screen, we transform brands into unforgettable visual experiences with precision and creative passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-20 text-center text-white tracking-tight">
            Start a Project
          </h2>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <Label
                htmlFor="name"
                className="text-xl font-bold text-white mb-4 block"
              >
                Your Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-6 text-xl bg-gray-900 border border-gray-700 rounded-2xl focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-colors duration-200 text-white placeholder:text-gray-500 text-[15px]"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-xl font-bold text-white mb-4 block"
              >
                Your Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-6 text-xl bg-gray-900 border border-gray-700 rounded-2xl focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-colors duration-200 text-white placeholder:text-gray-500 text-[15px]"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="project"
                className="text-xl font-bold text-white mb-4 block"
              >
                Tell us about your project
              </Label>
              <Textarea
                id="project"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                rows={6}
                className="w-full p-20 text-xl bg-gray-900 border border-gray-700 rounded-2xl focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-colors duration-200 resize-none text-white placeholder:text-gray-500 text-[15px]"
                required
              />
            </div>
            <div className="text-center pt-6">
              <Button
                type="submit"
                size="lg"
                className="bg-[#007AFF] hover:bg-[#0056CC] text-white px-16 py-6 text-xl font-bold rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-500 font-medium">
            © 2025 Bozo Production House. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}