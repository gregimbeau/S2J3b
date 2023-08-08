import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const { firstName, lastName, skills } = useSelector((state) => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    skills: state.skills.skills,
  }));
  const [formData, setFormData] = useState({
    firstName: firstName || "",
    lastName: lastName || "",
    skills: skills.join(", ") || "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedData = {
      ...formData,
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };
    console.log(formattedData);

    updateFirstName(formattedData.firstName);
    updateLastName(formattedData.lastName);
    updateSkills(formattedData.skills);

    // Ici, vous pouvez aussi traiter l'objet, par exemple le sauvegarder dans une base de données
  };

  const updateFirstName = (fname) => {
    dispatch({ type: "SET_FIRST_NAME", payload: fname });
  };
  const updateLastName = (lname) => {
    dispatch({ type: "SET_LAST_NAME", payload: lname });
  };
  const updateSkills = (skillsList) => {
    dispatch({ type: "SET_SKILLS", payload: skillsList });
  };

  return (
    <div className='container mt-5 profile-container'>
      <h1>Profil</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>Prénom: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='lastName'>Nom de famille: </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='skills'>
            Compétences (séparées par des virgules):{" "}
          </label>
          <input
            type='text'
            id='skills'
            name='skills'
            value={formData.skills}
            onChange={handleChange}
            required
            className='form-control'
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Soumettre
        </button>
      </form>
    </div>
  );
}

export default Profile;
