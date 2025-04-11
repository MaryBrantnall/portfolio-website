import React, { useState } from 'react';

const Resume = () => {
  const [openSections, setOpenSections] = useState({
    overview: false,
    skills: false,
    experience: false,
    education: false,
    volunteer: false,
    hackathons: false,
    references: false,
  });

  const handleDropdown = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "React Native", "Agile Methodology",
    "Electron", "Git", "SaaS", "Tailwind", "Vue.js", "JQuery", "Node.js",
    "Selenium", "JEST", "Testing", "SQL", "Python", "Wordpress", "REST APIs",
    "MongoDB", "Next.js", "CI/CD Pipeline", "Machine Learning", "AI Development",
    "Python", "Figma", "Adobe Creative Suite"
  ];

  return (
    <div className="flex justify-center bg-gray-100 py-12">

      <h1 className='flex justify-center'>Resume</h1>
      <div className="container bg-zomp mx-auto py-8 px-4 md:px-0 max-w-3xl bg-white shadow-lg rounded-lg">
        {/* Overview Section */}
        <section className="mb-8 px-6">
          <h2
            className="text-3xl font-semibold mb-4 text-gray-800 text-center cursor-pointer hover:text-icterine-600 transition duration-300"
            onClick={() => handleDropdown('overview')}
          >
            Overview
          </h2>
          {openSections.overview && (
            <p className="text-gray-700 leading-relaxed text-center">
              AI programming student from NSCC with a Bachelor of Fine Arts and a graduate certificate in Full Stack Development. Over 10 years of customer service experience, 4+ years in sales, freelance design expertise and front-end development internship experience. A versatile individual with a passion for lifelong learning and a strong, adaptable skill set.
            </p>
          )}
        </section>

        {/* Skills Section */}
        <section className="mb-8 px-6">
          <h2
            className="text-3xl font-semibold mb-4 text-gray-800 text-center cursor-pointer hover:text-icterine-600 transition duration-300"
            onClick={() => handleDropdown('skills')}
          >
            Skills
          </h2>
          {openSections.skills && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-gray-700 px-4 py-2 rounded-md bg-gray-200 hover:bg-icterine cursor-pointer transition duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Experience Section */}
        <section className="mb-8 px-6">
          <h2
            className="text-3xl font-semibold mb-4 text-gray-800 text-center cursor-pointer hover:text-icterine-600 transition duration-300"
            onClick={() => handleDropdown('experience')}
          >
            Experience
          </h2>
          {openSections.experience && (
            <div>
              {/* Eastlink */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Eastlink / Sales Associate</h3>
                <p className="text-gray-600">November 2024 - Present, Dartmouth, NS</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Operating point-of-sale system</li>
                  <li>Meeting/surpassing sales targets for Eastlink home service/mobile plans</li>
                  <li>Answering tech-related questions</li>
                  <li>Providing exceptional customer service</li>
                </ul>
              </div>

              {/* Citadel Hill */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Citadel Hill / Part-Time Gift Shop Sales</h3>
                <p className="text-gray-600">July 2024 - November 2024, Halifax, NS</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Operating Point of Sale</li>
                  <li>Basic cleaning duties</li>
                  <li>Directing tourists to different parts of the park</li>
                </ul>
              </div>

              {/* Truverus */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Truverus / UX/UI Design & Frontend Developer Intern</h3>
                <p className="text-gray-600">April 2024 - July 2024, Halifax, NS</p>
                <p className="text-sm italic text-gray-500">NOTE: This was an unpaid internship opportunity.</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Solving coding-related problems to meet the acceptance criteria for user stories</li>
                  <li>Using Figma to create wireframes for new screens in the application</li>
                  <li>Creating new user stories in relation to the new screens</li>
                  <li>Working with data analysts to develop ERDs and DFD for the new screens</li>
                </ul>
              </div>

              {/* The Source */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">The Source / Sales Associate</h3>
                <p className="text-gray-600">July 2019 - April 2024, Halifax, NS</p>
                <p className="text-sm italic text-gray-500">NOTE: This location was closed down and I was laid off from this position as of April 2024.</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Operate point-of-sale system</li>
                  <li>Meet sales targets for Bell home service/mobile plans</li>
                  <li>Achieve targets for consumer electronic sales</li>
                  <li>Answer tech-related questions</li>
                  <li>Provide exceptional customer service</li>
                </ul>
              </div>

              {/* The Craig Gallery */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">The Craig Gallery / Interim Gallery Coordinator/Facilitator</h3>
                <p className="text-gray-600">June 2021 - September 2022, Dartmouth, NS</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Schedule upcoming exhibitions</li>
                  <li>Prepare the gallery for shows</li>
                  <li>Coordinate volunteers</li>
                  <li>Organize and facilitate community art education through the "Art Carts" program</li>
                </ul>
              </div>

              {/* Upland Studios */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Upland Studios / Freelance Animator/Designer</h3>
                <p className="text-gray-600">April 2021 - July 2021, Dartmouth, NS</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Create design documents</li>
                  <li>Collaborate with various members of the Upland studio team to understand their vision for the animation</li>
                  <li>Animate using Toon Boom Harmony</li>
                  <li>Edit videos using Adobe Premiere & After Effects</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Education Section */}
        <section className="mb-8 px-6">
          <h2
            className="text-3xl font-semibold mb-4 text-gray-800 text-center cursor-pointer hover:text-icterine-600 transition duration-300"
            onClick={() => handleDropdown('education')}
          >
            Education
          </h2>
          {openSections.education && (
            <div>
              {/* NSCC - AI Programming */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Nova Scotia Community College - IT Programming for Artificial Intelligence
                </h3>
                <p className="text-gray-600">September 2024 - June 2025, Halifax, NS</p>
                <p className="text-gray-700">Currently in progress with an anticipated graduation date of June 2025.</p>
              </div>

              {/* NSCC - Full Stack */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Nova Scotia Community College - Full Stack Application Development</h3>
                <p className="text-gray-600">September 2023 - June 2024, Halifax, NS</p>
                <p className="text-gray-700">GPA: 4.0</p>
              </div>

              {/* NSCAD */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Nova Scotia College of Art and Design (NSCAD University) - Bachelor of Fine Arts</h3>
                <p className="text-gray-600">January 2017 - May 2020, Halifax, NS</p>
                <p className="text-gray-700">GPA: 3.8</p>
              </div>

              {/* UNB */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">University of New Brunswick - Bachelor of Computer Science</h3>
                <p className="text-gray-600">January 2015 - May 2016, Fredericton, NB</p>
                <p className="text-gray-700">GPA: 3.8</p>
                <p className="text-sm italic text-gray-500">(*NOTE: I transferred my credits to NSCAD in 2017.)</p>
              </div>
            </div>
          )}
        </section>

        {/* Volunteer Experiences Section */}
        <section className="mb-8 px-6">
          <h2
            className="text-3xl font-semibold mb-4 text-gray-800 text-center cursor-pointer hover:text-icterine-600 transition duration-300"
            onClick={() => handleDropdown('volunteer')}
          >
            Volunteer Experiences
          </h2>
          {openSections.volunteer && (
            <ul className="list-disc list-inside text-gray-700">
              <li>Art Gallery of Nova Scotia (Mar 2019 - Aug 2019) - Assisted with March Break and Summer Art Camps.</li>
              <li>Nocturn: Art at Night (October 2021) - Assisted a group of artists with setting up their exhibition for the festival.</li>
              <li>Dartmouth Community Fridge (Oct 2024 - Present) - Assisting with egg pickup and other volunteer duties.</li>
            </ul>
          )}
        </section>

        {/* Hackathons/Projects Section */}
        <section className="mb-8 px-6">
          <h2
            className="text-3xl font-semibold mb-4 text-gray-800 text-center cursor-pointer hover:text-icterine-600 transition duration-300"
            onClick={() => handleDropdown('hackathons')}
          >
            Hackathons/Projects
          </h2>
          {openSections.hackathons && (
            <ul className="list-disc list-inside text-gray-700">
              <li>NS Challenge Hackathon 2024</li>
              <li>Aviation Tracking Project (Funded by the SPRINT grant in association with NSCC Applied Research)</li>
            </ul>
          )}
        </section>

        {/* References Section */}
        <section className="px-6">
          <h2
            className="text-3xl font-semibold mb-4 text-gray-800 text-center cursor-pointer hover:text-icterine-600 transition duration-300"
            onClick={() => handleDropdown('references')}
          >
            References
          </h2>
          {openSections.references && (
            <p className="text-gray-700 text-center">Available upon request.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Resume;





