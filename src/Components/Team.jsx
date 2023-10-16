import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "John McCulling",
      role: "Founder / CEO",
      image:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
      social: [
        { name: "Twitter", icon: "fa-twitter", link: "#" },
        { name: "GitHub", icon: "fa-github", link: "#" },
      ],
    },
    {
      name: "Kate Berg",
      role: "CFO",
      image:
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256",
      social: [
        { name: "Twitter", icon: "fa-twitter", link: "#" },
        { name: "LinkedIn", icon: "fa-linkedin", link: "#" },
      ],
    },
    {
      name: "Greg Jackson",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256",
      social: [
        { name: "Twitter", icon: "fa-twitter", link: "#" },
        { name: "GitHub", icon: "fa-github", link: "#" },
      ],
    },
    {
      name: "Robert Greyson",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256",
      social: [
        { name: "Twitter", icon: "fa-twitter", link: "#" },
        { name: "GitHub", icon: "fa-github", link: "#" },
      ],
    },
  ];

  return (
    <div className="bg-[#020017] pt-4 pb-6 sm:pb-8 lg:pb-12 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img
                  src={member.image}
                  loading="lazy"
                  alt={`Photo of ${member.name}`}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div>
                <div className="text-center font-bold text-white md:text-lg">
                  {member.name}
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  {member.role}
                </p>

                <div className="flex justify-center">
                  <div className="flex gap-4">
                    {member.social.map((social, i) => (
                      <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <i className={`fab ${social.icon} h-5 w-5`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
