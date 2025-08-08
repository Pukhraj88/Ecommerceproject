import "./Aboutus.css";
export const Aboutus = () => {
    return (
        <div className="owncontainer aboutus-scoped">
            <div className=" aboutuspage" id="handleAboutUsPage">
                <img src="logo.png" alt="About Us Image" />
                    <p id="aboutustitle">HR Dhram Kanta</p>
                    <div className="aboutuscontent">
                        <h3 className="text-[12px] xl:text-[22px]  lg:pt-3 xl:pt-4">Welcome to HR Dhram Kanta, your trusted destination for high-quality building materials.</h3>
                        <p className="text-[15px] sm:text-lg lg:text-[20px]"  id="ourmission"><span>Our Mission </span> is rooted in delivering excellence to our valued customers. With a focus on
                            quality and reliability, we ensure that our bricks are not just building blocks but a
                            foundation for your dreams. Build with confidence, build with
                            HR Dhram Kanta. The cement we offer is sourced from reputable suppliers,
                            guaranteeing strength and longevity in every mix. Additionally, our premium
                            construction soil selection caters to the diverse needs of your projects, promising
                            optimal fertility and composition.
                       Choose HR Dhram Kanta for your building material needs, where quality meets integrity,
                            and your construction journey is our top priority. Build with confidence, build with
                            HR Dhram Kanta.
                        </p>
                    </div>
            </div>
        </div>
    );
}
