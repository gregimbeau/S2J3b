import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const { firstName, lastName, skills } = useSelector((state) => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    skills: state.skills.skills,
  }));

  const fullName = firstName && lastName ? `${firstName} ${lastName}` : "";

  return (
    <div className='container mt-5'>
      <h1>Bienvenue {fullName}!</h1>
      {skills.length ? (
        <ul className='list-group'>
          {skills.map((skill, index) => (
            <li key={index} className='list-group-item'>
              {skill}
            </li>
          ))}
        </ul>
      ) : (
        <p className='alert alert-info'>
          Renseignez vos compétences dans votre profil.
        </p>
      )}
    </div>
  );
}

export default Home;
