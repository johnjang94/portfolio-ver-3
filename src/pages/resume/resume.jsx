export default function Resume() {
  return (
    <section>
      <p className="text-center mt-10 md:text-2xl">
        The following is my resume sample.
      </p>
      <div className="relative my-10">
        <div className="absolute top-0 left-[48vw] transform -translate-x-1/2 mt-40 text-blue-500 underline flex space-x-64 font-[verdana]">
          <a href="https://www.johnjang.ca/">https://www.johnjang.ca</a>
          <a href="mailto:jscolbe9675@gmail.com">jscolbe9675@gmail.com</a>
          <a href="https://www.linkedin.com/in/johnjang94/">in/johnjang94/</a>
        </div>
        <img
          src="/product_designer.jpg"
          alt="Resume"
          width={1250}
          className="mx-auto rounded-3xl"
        />
      </div>
      <div className="flex items-center text-center gap-1 justify-center">
        <p>Please reach out to me</p>
        <a
          href="mailto:jscolbe9675@gmail.com"
          className="text-blue-500 underline"
        >
          here
        </a>
        <p>for the most up-to-date information.</p>
      </div>
    </section>
  );
}
