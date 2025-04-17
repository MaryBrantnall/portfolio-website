import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Resume = () => {
  const [openSections, setOpenSections] = useState({
    overview: true,
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
    <div className="min-h-screen bg-eggshell flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-eggshell rounded-lg shadow-lg overflow-hidden">
        <div className="bg-brunswick_green p-6 text-center text-eggshell">
          <h1 className="text-3xl mb-2">Resume</h1>
        </div>

        <section className="p-6 border-b border-ash_gray">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDropdown('overview')}
          >
            <h2 className="text-xl font-semibold text-reseda_green">Overview</h2>
            {openSections.overview ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.overview && (
            <div className="mt-4 text-brunswick_green">
              AI programming student from NSCC with a Bachelor of Fine Arts and a graduate certificate in Full Stack Development. Over 10 years of customer service experience, 4+ years in sales, freelance design expertise and front-end development internship experience. A versatile individual with a passion for lifelong learning and a strong, adaptable skill set.
            </div>
          )}
        </section>

        <section className="p-6 border-b border-ash_gray">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDropdown('skills')}
          >
            <h2 className="text-xl font-semibold text-reseda_green">Skills</h2>
            {openSections.skills ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.skills && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-zomp text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </section>

        <section className="p-6 border-b border-ash_gray">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDropdown('experience')}
          >
            <h2 className="text-xl font-semibold text-reseda_green">Experience</h2>
            {openSections.experience ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.experience && (
            <div className="mt-4 space-y-4 text-brunswick_green">
              <div>
                <h3 className="text-lg font-semibold">Eastlink / Sales Associate</h3>
                <p className="text-sm text-brunswick_green">November 2024 - Present, Dartmouth, NS</p>
                <ul className="list-disc list-inside">
                  <li>Operating point-of-sale system</li>
                  <li>Meeting/surpassing sales targets for Eastlink home service/mobile plans</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Truverus / UX/UI Design & Frontend Developer Intern</h3>
                <p className="text-sm text-brunswick_green">April 2024 - July 2024, Halifax, NS</p>
                <ul className="list-disc list-inside">
                  <li>Solving coding-related problems to meet the acceptance criteria for user stories</li>
                  <li>Using Figma to create wireframes for new screens in the application</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">The Source / Sales Associate</h3>
                <p className="text-sm text-brunswick_green">July 2019 - April 2024, Halifax, NS</p>
                <ul className="list-disc list-inside">
                  <li>Operate point-of-sale system</li>
                  <li>Meet sales targets for Bell home service/mobile plans</li>
                </ul>
              </div>
            </div>
          )}
        </section>


        <section className="p-6 border-b border-ash_gray">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDropdown('education')}
          >
            <h2 className="text-xl font-semibold text-reseda_green">Education</h2>
            {openSections.education ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.education && (
            <div className="mt-4 space-y-4 text-brunswick_green">
          
              <div>
                <h3 className="text-lg font-semibold">
                  Nova Scotia Community College - IT Programming for Artificial Intelligence
                </h3>
                <p className="text-sm text-brunswick_green">September 2024 - June 2025, Halifax, NS</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Nova Scotia Community College - Full Stack Application Development</h3>
                <p className="text-sm text-brunswick_green">September 2023 - June 2024, Halifax, NS</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Nova Scotia College of Art and Design (NSCAD University) - Bachelor of Fine Arts</h3>
                <p className="text-sm text-brunswick_green">January 2017 - May 2020, Halifax, NS</p>
              </div>
            </div>
          )}
        </section>

        <section className="p-6 border-b border-ash_gray">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDropdown('volunteer')}
          >
            <h2 className="text-xl font-semibold text-reseda_green">Volunteer Experiences</h2>
            {openSections.volunteer ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.volunteer && (
            <ul className="mt-4 list-disc list-inside text-brunswick_green">
              <li>Art Gallery of Nova Scotia (Mar 2019 - Aug 2019) - Assisted with March Break and Summer Art Camps.</li>
              <li>Dartmouth Community Fridge (Oct 2024 - Present) - Assisting with egg pickup and other volunteer duties.</li>
            </ul>
          )}
        </section>

        <section className="p-6 border-b border-ash_gray">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDropdown('hackathons')}
          >
            <h2 className="text-xl font-semibold text-reseda_green">Hackathons/Projects</h2>
            {openSections.hackathons ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.hackathons && (
            <ul className="mt-4 list-disc list-inside text-brunswick_green">
              <li>NS Challenge Hackathon 2024</li>
              <li>Aviation Tracking Project (Funded by the SPRINT grant in association with NSCC Applied Research)</li>
            </ul>
          )}
        </section>

        <section className="p-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDropdown('references')}
          >
            <h2 className="text-xl font-semibold text-reseda_green">References</h2>
            {openSections.references ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.references && (
            <div className="mt-4 text-brunswick_green">Available upon request.</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Resume;





