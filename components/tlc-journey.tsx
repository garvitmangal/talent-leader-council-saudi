import BecomeMember from "./blocks/become-member";
import Journey from "./blocks/journey";
import OngoingActivities from "./blocks/ongoing-activities";
import TlcStudyCircle from "./blocks/tlc-study-circle";


export default function TlcJourney() {
    return (
        <section id="tlc-journey" className="bg-black">
            <div className="container mx-auto pt-[65px] pb-[56px]">
                <h2 className="font-neuething-sans text-white text-2xl md:text-3xl leading-normal font-bold text-center px-4">
                    TLC journey
                </h2>
                <p className="font-neuething-sans text-white leading-normal mt-2 text-center px-4 tracking-widest">
                    FROM OUTSIDE THE BOX TO INNER SPHERES
                </p>

                <div className="flex flex-col md:flex-row mt-10 md:mt-20 px-4 md:px-10 gap-4 md:gap-2 relative">
                    <Journey />
                    <OngoingActivities />
                </div>

                <TlcStudyCircle />

                <BecomeMember />
            </div>
        </section>
    )
}