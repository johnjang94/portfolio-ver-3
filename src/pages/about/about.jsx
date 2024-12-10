import { useEffect } from "react";
import { MyIntroduction } from "../../utils/about";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="md:flex md:space-x-2 md:my-10 md:items-center md:justify-center text-center"></div>
      <div>
        <div className="xl:flex xl:items-center md:w-4/6 md:mx-auto mx-10 md:my-10 xl:gap-10 my-5 p-5 rounded-2xl space-y-5 md:space-y-0 bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6]">
          <img
            src={MyIntroduction.About}
            alt="My profile"
            className="mx-auto rounded-2xl 2xl:w-[400px] w-[250px]"
          />
          <div>
            <div className="px-5 md:space-y-10 space-y-2 py-10 xl:py-12 md:mx-10 xl:mx-0">
              <div>
                <h1 className="2xl:text-4xl md:text-3xl text-2xl 2xl:py-10 py-5 xl:py-5">
                  Who is John Jang?
                </h1>
                <div className="space-y-3">
                  <p className="font-bold">
                    I&#39;m a Product Designer with a journey as unique as the
                    challenges I solve.
                  </p>
                  <p>
                    I didn&#39;t exactly start out in design — far from it. I
                    began by exploring how visuals influence decision-making in
                    a neuroscience lab and later found myself rethinking lesson
                    materials as an ESL teacher during a pandemic. Through these
                    experiences, I realized my passion wasn&#39;t just about
                    solving problems but about creating something that feels
                    thoughtful and refined. I&#39;m drawn to design that carries
                    a sense of sophistication and elegance — where every detail
                    tells a story and leaves a lasting impression. For me,
                    design is a way to connect, inspire, and maybe even add a
                    little beauty to the every day life.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="px-5 space-y-2 md:mx-10 xl:mx-0">
              <p className="font-bold">Current Role</p>
              <p>
                I am a Product Designer at OPERATE-EASE, an independent SaaS project that seeks to automate hospitality management.
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="md:w-4/6 md:mx-auto mx-10 my-20">
        <h2 className="font-bold py-3 text-2xl">My Design Principles</h2>
        <div className="md:grid md:grid-cols-3 md:gap-5 space-y-5 md:space-y-0">
          <div className="bg-white rounded-xl p-2 space-y-3">
            <p className="font-semibold text-center underline">
              North Star Method
            </p>
            <p>
              I use North Star method to clearly identify the challenge, the
              users, the business, the limitations, and what is possible to
              bring together.
            </p>
          </div>
          <div className="bg-white rounded-xl p-2 space-y-3">
            <p className="font-semibold text-center underline">Collaboration</p>
            <p>
              Collaboration is the key to success. I believe that, in a group
              project, UX Researchers help us to get great insights and
              developers help us to build a good product.
            </p>
          </div>
          <div className="bg-white rounded-xl p-2 space-y-3">
            <p className="font-semibold text-center underline">Communication</p>
            <p>
              I always do my best to keep everything open and transparent to
              make sure that my partners and I are on the same page.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-4/6 md:mx-auto mx-10 my-20">
        <div className="md:flex md:items-center md:gap-5">
          <div className="md:w-full">
            <h2 className="font-bold py-3 md:text-2xl text-xl">
              How did my JOURNEY begin?
            </h2>
            <div className="xl:flex lg:items-end xl:items-center lg:gap-5">
              <div className="xl:w-5/6">
                <h3 className="py-3">As an undergrad...</h3>
                <p>
                  I was a lab assistant for a neuroscience research team in
                  Department of Psychology at University of New Brunswick (which
                  the campus is located in Fredericton, New Brunswick, Canada).
                  Although everything that we were interested in was looking at
                  the data that was measured and generated by computer (but in
                  which the input was made by users), we were basically
                  providing some physical and visual tools to the participants
                  to interact with during the experiments. The entire point of
                  this activity was to see how visuals (or tools) influence the
                  way we make decisions.
                </p>
              </div>
              <div className="w-full md:p-5 p-2 md:m-3 my-2 bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] text-center rounded-2xl">
                <span className="text-xs md:text-base">
                  sample photo - not real from the lab
                </span>
                <img
                  src={MyIntroduction.Neuroscience}
                  alt="Neuroscience"
                  width={800}
                  className="rounded-2xl float-image pt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-4/6 md:mx-auto mx-10 my-20">
        <div className="md:flex md:items-center md:gap-5">
          <div className="md:w-full">
            <h3 className="font-bold py-3 text-xl">The Turning Point</h3>
            <div className="xl:flex lg:items-end xl:items-center lg:gap-5">
              <div className="w-full md:p-5 p-2 md:m-3 my-2 bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] text-center rounded-2xl">
                <img
                  src={MyIntroduction.Teacher}
                  alt="Teacher"
                  width={800}
                  className="rounded-2xl float-image"
                />
              </div>
              <div className="xl:w-5/6">
                <h3 className="py-3">Opportunity as an ESL teacher...</h3>
                <p>
                  After I graduated in UNB, I had an opportunity to teach
                  English to students in Korea. It was not my expectation, but I
                  also needed to embrace a bit of different teaching conditions
                  due to COVID-19. COVID-19 changed my work environment from
                  in-class to remote-basis to avoid the spread of the virus.
                  Despite the changes in my work conditions, I still needed to
                  find ways to keep my students entertained and engaged in
                  lessons. I started to look for lots of interactive visual
                  resources including the materials that were provided by the
                  academic institution that I was working for.
                </p>
              </div>
            </div>
            <p>
              I was constantly contemplating on what kind of visual materials
              (the product) would keep up with high engagement rate. Basically,
              I was conducting heavy level of research and was redesigning the
              presentation to keep the students engaged which were basically the
              steps for UX Design. In fact, I was gaining my experience in
              learning design (or educational, experiential design).
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-4/6 md:mx-auto mx-10 my-20">
        <div className="md:flex md:items-center md:gap-5">
          <div className="md:w-full">
            <h3 className="font-bold py-3 text-xl">Coming Back Home</h3>
            <h3 className="py-3">Here comes UX/UI (or Product) Design...</h3>
            <p>
              Wrapping up my trip in Korea, I have come to realize that I have
              been quite keen on understanding how visuals (i.e. typography,
              color, different shapes of elements, etc.) influence the way we
              interpret and decide on things ever since high school.
            </p>
            <p className="py-3">
              Having said that, I pursued my way into the field of UX and went
              to design school at York University (which is located in North
              York, Ontario, Canada).
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-4/6 md:mx-auto mx-10 my-20">
        <h3 className="font-bold py-3 text-xl">Previous Contributions</h3>
        <h3 className="py-3">I have participated in...</h3>
        <p>
          It is true that my journey has been up and down even after graduating
          from the design school at York University. Still, I have tried my best
          to participate in many different design projects in which the fields
          are diverse: from social services to blockchain, e-commerce, SaaS
          company or travel agency.
        </p>
        <div className="md:grid md:grid-cols-2 gap-5 md:justify-between md:w-full space-y-3 md:space-y-0 text-center mt-5">
          <div className="bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img
              src={MyIntroduction.Sakhi}
              alt="E-commerce"
              className="rounded-2xl"
            />
          </div>
          <div className="bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img
              src={MyIntroduction.Blockchain}
              alt="Blockchain"
              className="rounded-2xl"
            />
          </div>
          <div className="bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img
              src={MyIntroduction.Ruminate}
              alt="Social Service"
              className="rounded-2xl"
            />
          </div>
          <div className="bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img
              src={MyIntroduction.Travel}
              alt="Travel"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="md:w-4/6 md:mx-auto mx-10 my-20">
        <div className="md:flex md:items-center md:gap-5">
          <div className="md:w-full">
            <h3 className="font-bold py-3 text-xl">
              Oh hi 👋🏼 Web Development!
            </h3>
            <h3 className="py-3">Learning HTML, CSS, and JavaScript...</h3>
            <p>
              I realized that I needed a portfolio that showcases all my
              previous case studies --- preferably on a website. Though, the
              existing no-code website builders were really limiting my
              creativity on how I want to express myself and my work. Having
              said that, I have decided to learn it myself. Surprisingly, I have
              taught myself well-enough that I was also invited as a volunteer
              apprentice for a few web development projects. Until this day, I
              am still contributing as a web developer apprentice in a few
              projects.
            </p>
            <div className="flex items-center space-x-1 my-3">
              <p>
                Should you be interested in learning further about my journey in
                web development, you can check it out{" "}
                <span className="block md:hidden">
                  {" "}
                  <a href="http://www.johnjang.dev" className="text-blue-500">
                    here
                  </a>
                  .
                </span>
              </p>
              <div className="hidden md:flex md:items-end">
                <a href="http://www.johnjang.dev" className="text-blue-500">
                  here
                </a>
                <p>.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-5 md:justify-between md:w-full space-y-3 md:space-y-0 text-center mt-5">
          <div className="bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img src={MyIntroduction.SaaS} alt="SaaS" className="rounded-2xl" />
          </div>
          <div className="w-fit mx-auto bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img
              src={MyIntroduction.PWA}
              alt="PWA"
              width={window.innerWidth >= 1680 ? 300 : 160}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-[32vw] bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img
              src={MyIntroduction.NewRuminate}
              alt="New Ruminate - Social Service"
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-[24vw] mx-auto bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img
              src={MyIntroduction.Maina}
              alt="Maina - Social service"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="md:w-4/6 md:mx-auto mx-10 my-20">
        <div className="md:flex md:items-center md:gap-5">
          <div className="md:w-full">
            <h3 className="font-bold py-3 text-xl">Besides Design & Code</h3>
            <h3 className="py-3">Cool stuff about me?</h3>
            <p>
              When I am neither designing nor coding, I enjoy dancing, running,
              working out at gym, and possibly traveling around.
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-5 md:justify-between md:w-full space-y-3 md:space-y-0 text-center mt-5">
          <div className="bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img
              src={MyIntroduction.Korea}
              alt="Korea"
              className="rounded-2xl"
            />
          </div>
          <div className="w-fit mx-auto bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl p-5">
            <img src={MyIntroduction.Run} alt="Run" className="rounded-2xl" />
          </div>
        </div>
      </div>

      <div className="md:w-4/6 md:mx-auto mx-10 my-20 bg-white p-5 rounded-2xl">
        <div className="md:flex md:items-center md:gap-5">
          <div>
            <h3 className="font-bold py-3 md:text-2xl text-base">
              Would you like to work with me?
            </h3>
            <p className="md:text-base text-sm">
              Do you have a design challenge? Let&#39;s talk about it! I will be
              there with you in every step of the way from ideation to launch of
              the product.
            </p>
            <div className="py-3">
              <div className="flex items-center space-x-1">
                <p>Let&#39;s</p>
                <a
                  href="https://www.linkedin.com/in/johnjang94/"
                  className="text-blue-500"
                >
                  stay connected
                </a>
                <p>!</p>
              </div>
              <div className="md:flex md:items-center space-x-1">
                <p>You can also reach out to me</p>
                <div className="flex items-end">
                  <Link to="/contact">
                    <p className="text-blue-500">here</p>
                  </Link>
                  <p>.</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={MyIntroduction.Challenge}
            alt="My profile"
            className="mx-auto rounded-2xl 2xl:w-[500px] w-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
