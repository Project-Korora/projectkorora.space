import PageContainer from "../../components/PageContainer";
import PageHeader from "../../components/PageHeader";
import Grid from "../../components/Grid";
import TeamCard from "../../components/TeamCard";

export default function TeamPage() {
    const teamMembers = [
        {
            lead: "Zac",
            team: "Attitude Determination & Mission Design",
            bio: "We are the navigators and the sense of direction for Project Koror. As the attitude determination and mission design team (Team Direction), we are responsible for calculating the project's overall trajectory and determining, simulating, and updating the satellite's orientation throughout its journey in space. This team will be divided into three subcategories: Trajectory Design (Using GMAT to design the orbital path and determine communication windows), Attitude Determination and Control (Researching control algorithms and modelling the satellite's attitude dynamics), and Environmental Effects.",
        },
        {
            lead: "Alex F",
            team: "Mechanical & Thermal",
            bio: "The Mechanical team is responsible for developing the propulsion and structure of the project including frame, payload housing, thermal control, screws, rails, and brackets for mounting, shock and vibration mitigation, access ports etc. This includes developing the propulsion unit and instrumentation to go along with it, meaning gas flow control and storage, propulsion ignition system, and hollow cathode.",
        },
        {
            lead: "Mario",
            team: "Power",
            bio: "We're powering the satellite! Kororā will need to collect and store energy to be able to actually do anything once it's up in space, and we're the ones making that happen. The open source PyCubed platform has existing hardware designs for some power management, but there's plenty that we need to add before we can go to space; from designing deployable solar panels, to an insane power conversion for the Hall Effect thruster.",
        },
        {
            lead: "Reuben",
            team: "Communications",
            bio: "The communications team is the lifeline of Project Kororā. Through our efforts, we will enable the satellite to exchange data with the ground station, allowing for the uplink of commands and the down link of payload data. The team will be responsible for developing the reception and transmission capabilities of the satellite, as well as ensuring compliance with relevant regulatory standards.",
        },
        {
            lead: "Kai",
            team: "Avionics",
            bio: 'The Avionics Team is responsible for laying the electronic groundwork that makes it possible to control the satellite and its systems. We focus on designing and implementing the key sensors and control systems that will keep Koror running smoothly in space and allow us to operate the Hall effect thruster. Our work includes selecting and integrating aviation electronics, building connections between hardware components, and developing ways for the satellite to "see" and "feel" what\'s happening around it.',
        },
        {
            lead: "Fyfa",
            team: "Software",
            bio: "We're building the brain of the satellite - the software that will run on Kororā Our work is built on PyCubed, a open-source platform designed to make CubeSats more affordable, accessible, and easy to develop. PyCubed gives us the tools to handle everything from power and, communications to payload control, and we're adapting it to work with Kororā's unique systems, like our Hall effect thruster, while ensuring we can keep the whole project open-source.",
        },
        {
            lead: "?",
            team: "Ethics",
            bio: "",
        },
        {
            lead: "?",
            team: "Law & Policy",
            bio: "",
        },
        {
            lead: "?",
            team: "Design & Promotion",
            bio: "",
        },
        {
            lead: "?",
            team: "Finance",
            bio: "",
        },
    ];

    return (
        <PageContainer>
            <PageHeader
                title="Our Team"
                description="Meet the dedicated teams and students working to get Project Kororā off the ground"
            />

            <Grid cols={2}>
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        team={member.team}
                        lead={member.lead}
                        bio={member.bio}
                    />
                ))}
            </Grid>
        </PageContainer>
    );
}
