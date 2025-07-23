const About = () => {
  return (
    <>
      <section className="relative pt-[100px] pb-[80px] xs:pb-[100px] lg:py-[100px] xl:pb-[50px] play-earn about_bg_img bg-aboutBgImg bg-no-repeat sm:-translate-y-[142px] -translate-y-[80px] mb-[-50px] 2xl:mb-16 z-10 bg-cover">
        <div className="container">
          <div className="sm:my-12 lg:mt-12 pb-16">
            <h2 className="font-raleway uppercase font-bold text-center text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white">
              About PokéVerse
            </h2>
            <div className="text-center">
              <span className="contact_border md:w-[471px] w-full inline-block"></span>
            </div>
            <div className="max-w-[461px] text-bottom-line-bg h-[3px] mx-auto mt-[15px]"></div>

             <h3 className="text-white text-center font-raleway font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-[800px] mx-auto mt-8 mb-4">
              Catch the Future – Where Pokémon Meets the Blockchain!
           </h3>
            <p className="text-white text-center font-normal font-poppins text-xs sm:text-sm md:text-base lg:text-xl max-w-[702px] mx-auto mt-[15px] mb-[35px] ">
              Step into a boundless realm where nostalgia meets innovation!
              Enter the PokéVerse – a vibrant universe teeming with powerful
              creatures waiting to be discovered, trained, and battled. Dive
              into an epic adventure powered by Web3, where your Pokémon journey
              evolves beyond the screen. Explore immersive AAA mobile games,
              stunning digital collectibles, exclusive merch drops, and animated
              stories – all powered by blockchain ownership and community-driven
              gameplay. This isn’t just a game; it’s a revolution for Trainers
              worldwide.
            </p>
            <div className="mt-5 ">
              <video
                className="w-100 rounded-3xl mx-auto object-cover"
                width="700"
                height="700"
                autoPlay
                muted
                controls
              >
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/devomon-home.appspot.com/o/about.mp4?alt=media&token=17e63c8c-9a4e-4266-9f83-eb294e51a01c"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
