import React from "react";

function Person(props) {
  let voteMessage =
    props.age >= 18 ? <p>please go vote!</p> : <p>you must be 18!</p>;


  let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person</p>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <ul>
        Hobbies
        {hobbies}
      </ul>
      <h3>{voteMessage}</h3>
    </div>
  );
}
export default Person;
