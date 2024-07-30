import { react, useState } from "react";

const Header = () => {
  // using use state to store the data from the form values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [about, setAbout] = useState("");
  // using events function to define the functions that trigger with the onchange event and update the data in state variable
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      resume,
      url,
      about
    );
  };

  // reset function

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setResume("");
    setUrl("");
    setAbout("");
  };
  console.log("connected");
  return (
    <div>
      <fieldset>
        <form action="#" method="get">
          <h1>React Form</h1>
          <label htmlFor="firstName">FirstName: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">LastName: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Contact No</label>
          <input type="text" />
          <label htmlFor="">Gender</label>
          <input type="radio" name="gender" />
          Male
          <input type="radio" name="gender" />
          Female
          <label htmlFor="">Upload resume</label>
          <input type="file" />
          <label htmlFor="">Enter URL</label>
          <input type="text" />
          <label htmlFor="">About</label>
          <textarea name="" id=""></textarea>
          <label htmlFor="">Submit or reset</label>
          <input type="submit" />
          <input type="reset" />
        </form>
      </fieldset>
    </div>
  );
};

export default Header;
