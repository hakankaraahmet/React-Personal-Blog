import React, { useState } from "react";
import Hakkımda from "./components/Hakkımda";
import Navbar from "./components/Navbar";
import Çalışmalarım from "./components/Çalışmalarım";
import Yorumlar from "./components/Yorumlar";
import İletişim from "./components/İletişim"
import InitialState from "./components/InitialState";
const App = () => {
  const [yorumlar, setYorumlar] = useState(InitialState);

  
  const yorumEkle = (yorum) => {
    const id = Date.now();
    const yeniYorum = { ...yorum, id };
    setYorumlar((prevState) => [...prevState, yeniYorum]);
  };

 

  const yorumSil = (id) => {
    setYorumlar(yorumlar.filter((yorum) => id !== yorum.id));
  };

  return (
    <div>
      <Navbar />
      <Hakkımda />
      <Çalışmalarım />
      <Yorumlar yorumlar={yorumlar} yorumSil={yorumSil} yorumEkle={yorumEkle}/>
      <İletişim/>
    </div>
  );
};

export default App;
