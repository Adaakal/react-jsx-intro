import React from "react";
import FirstComponent from "./components/FirstComponent";
import NamedComponent from "./components/NamedComponent";
import Tweet from "./components/Tweet";
import Person from "./components/Person";

function App() {
  return (
    <div>
      <h1>Part 1</h1>
      <FirstComponent />
      <NamedComponent />
      <h1>Part 2</h1>
      <Tweet
        username="jackiedoe"
        name="Jackie Doe"
        date="05/03/2020"
        message="I don't tweet much"
      />
      <Tweet
        username="jonnydoe"
        name="Jonny Doe"
        date="05/03/2021"
        message="I don't tweet much"
      />
      <Tweet
        username="jennydoe"
        name="Jenny Doe"
        date="05/03/2022"
        message="I don't tweet much"
      />
      <h1>Part 3</h1>
      <Person
        name="Jackie Doe"
        age={18}
        hobbies={["reading", "writing", "coding"]}
      />
      <Person
        name="Julie Doey"
        age={15}
        hobbies={["rapping", "dancing", "painting"]}
      />
      <Person
        name="Jenny Doe"
        age={20}
        hobbies={["sewing", "dancing", "painting"]}
      />
    </div>
  );
}

export default App;
