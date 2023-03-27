import React, { useState, useEffect } from "react";
import data from "./data";
import Person from "./Person";
import Slick from "./Slick";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <Person people={people} />
    </section>
  );
}

export default App;
