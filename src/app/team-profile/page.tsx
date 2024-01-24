// pages/index.tsx

import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  image: string;
  socials: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ name, image, socials }) => (
  <div className="card card-side bg-base-100 shadow-xl mb-8">
    <figure>
      <Image src={image} alt={name} width={400} height={600} className="rounded-t-lg" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      {/* <p>Click the button to view my profile.</p> */}
      <div className="card-actions justify-end">
        <Link target="_blank" href={socials} passHref
          className="btn btn-primary">View Profile
        </Link>
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Vansh Dhar",
      image: "/vansh.jpeg",
      socials: "https://www.linkedin.com/in/vansh-dhar-a7794b220/",
    },
    {
      name: "Kanishk Aman",
      image: "/kanishk.jpeg",
      socials: "https://www.linkedin.com/in/kanishk-aman/",
    },
    {
      name: "Bhanu Kumar",
      image: "/bhanu.jpeg",
      socials: "https://www.linkedin.com/in/bhanu-kumar-25a076258/",
    },
    {
      name: "Saumy Sharan",
      image: "/saumy.jpeg",
      socials: "https://www.linkedin.com/in/saumy-sharan-72008426a/",
    },
  ];

  return (
    <div>
      {/* Existing content... */}
      
      <h2 className="text-2xl font-bold mb-4 text-white">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>

      {/* Existing content... */}
    </div>
  );
};

export default Home;
