import React, { useState } from "react";

import BMIForm from "./components/BMIForm";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";

const dataFromBackend = [
  { name: "Ram", email: "ram@mail.com", contact: 121636456 },
  { name: "hari", email: "hari@mail.com", contact: 121636456 },
  { name: "shyam", email: "shyam@mail.com", contact: 121636456 },
  { name: "sita", email: "sita@mail.com", contact: 121636456 },
  { name: "gita", email: "gita@mail.com", contact: 121636456 },
];

export default function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <>
      <div>
        <NavBar darkmode={darkmode} setDarkmode={setDarkmode} />
        <CardList />
      </div>
    </>
  );
}
