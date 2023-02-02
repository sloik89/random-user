import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelopeOpen,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
const UserContainer = () => {
  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      console.log(newValue);
      // console.log(newValue);
      // setPerson(person[newValue]);
      console.log(person[newValue]);
      setValue(person[newValue]);
      setTitle(newValue);
    } else {
      return;
    }
  };
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");
  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];

    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
    console.log(newPerson);
  };
  useEffect(() => {
    getPerson();
  }, []);
  return (
    <div className="user-contaiener">
      <div className="user">
        <img src={(person && person.image) || defaultImage} alt="" />
        <p className="user-title">my {title} is</p>
        <p className="user-value">{value}</p>
        <div className="values-list">
          <button className="icon" data-label="name" onMouseOver={handleValue}>
            <FaUser />
          </button>
          <button className="icon" data-label="email" onMouseOver={handleValue}>
            <FaEnvelopeOpen />
          </button>
          <button className="icon" data-label="age" onMouseOver={handleValue}>
            <FaCalendarTimes />
          </button>
          <button
            className="icon"
            data-label="street"
            onMouseOver={handleValue}
          >
            <FaMap />
          </button>
          <button className="icon" data-label="phone" onMouseOver={handleValue}>
            <FaPhone />
          </button>
          <button
            className="icon"
            data-label="password"
            onMouseOver={handleValue}
          >
            <FaLock />
          </button>
        </div>
        <button onClick={getPerson} className="btn">
          {loading ? "loading..." : "random user"}
        </button>
      </div>
    </div>
  );
};

export default UserContainer;
