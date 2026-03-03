import HeroImg from "@/assets/images/Asif.jpeg";
// import OlovaLogo from "@/assets/images/olova.png";
import hero2 from "@/assets/images/hero2.jpg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="max-w-5xl px-6 mx-auto space-y-8 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium text-white lg:text-5xl">
            Front-End Developer 
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="relative p-px bg-linear-to-b aspect-76/59 rounded-2xl from-zinc-300 to-transparent">
                <img
                  src={hero2}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Usama Rafaqat, a passionate Front-End Developer specializing in building responsive, user-friendly web interfaces and engaging digital experiences. I enjoy turning complex problems into clean, interactive, and visually appealing solutions using modern JavaScript technologies.
                <span className="font-bold text-white">
                  {/* As the creator of the OlovaJS UI Framework */}
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                My focus is on building fast, scalable, and accessible web applications by combining efficient frontend experiences with reliable backend architecture. As a full-stack developer, I continuously work on improving performance, usability, and system design to deliver seamless, end-to-end solutions.
              </p>

              <div className="pt-6">
                <blockquote className="pl-4 border-l-4 border-gray-300">
                  <p className="text-white">
                   I'm a lifelong learner and innovator, driven by a passion for contributing to the developer community through meaningful ideas and practical tools. As a full-stack developer and the creator of OlovaJS, I work across both frontend and backend to push the boundaries of modern JavaScript ecosystems and empower developers to build powerful, scalable applications worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      {/* Nazmul Hossain, Creator of */}
                    </cite>
                    <div className="flex items-center gap-2">
                      {/* <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      /> */}
                      {/* <span className="text-white">OlovaJS</span> */}
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
