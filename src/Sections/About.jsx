
import Globe from "react-globe.gl";
import Button from "../Components/Button.jsx";

const About = () => {
    return (
        <section className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
             <div className="grid-container">
                 <img src="assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
                <div>
                    <p className="grid-headtext">Hi, I'm Teja</p>
                    <p className="grid-subtext">With 4 years of experience,I have honed my skills in frontend and backend with focus on security and scalability. </p>
                </div>
             </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>

                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">I specialize in Javascript Frameworks with Focus on Angular and React</p>
                </div>

            </div>


                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity={0.5}
                            showAtmosphere showGraticules
                                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[
                                {
                                  lat:53.3498, lng: -7.3055,
                                    text:"I'm Here",
                                    color:"red",
                                    size:304,
                                }
                            ]}/>
                        </div>
                        <div>
                            <p className="grid-headtext">
                            I can work remote in EU🇪🇺 and Indian🇮🇳 timezones.
                            </p>
                            <p className="grid-subtext">
                                I am based in Dublin, Ireland with both Onsite and Remote availability.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>

                </div>



        </div>
        </section>
    )
}
export default About
