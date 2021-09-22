import React, { useState } from "react";
import Yorum from "./Yorum";
const Yorumlar = ({ yorumlar, yorumSil, yorumEkle }) => {
  const [mesaj, setMesaj] = useState("");
  const [isim, setİsim] = useState("");
  const [email, setEmail] = useState("");

  const mesajDeğiştirmeButonu = (e) => {
    setMesaj(e.target.value);
  };

  const isimDeğiştirmeButonu = (e) => {
    setİsim(e.target.value);
  };
  const emailDeğiştirmeButonu = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!mesaj || !isim || !email) {
      e.preventDefault();
      alert("lütfen boşlukları doldurunuz");
    } else {
      e.preventDefault();
      yorumEkle({ mesaj, isim, email });
      setMesaj("");
      setİsim("");
      setEmail("");
    }
  };

  return (
    <div className="w-75 m-auto mt-5 mb-5 yorumlar" id="comments">
      <h1 className="text-light text-center mb-5">YORUMLAR</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label htmlFor="mesaj" className="font-weight-bolder text-light h3">
            Lütfen bir yorum giriniz:
          </label>
          <textarea
            id="mesaj"
            onChange={mesajDeğiştirmeButonu}
            type="text"
            className="form-control"
            value={mesaj}
            placeholder="Yorumunuz..."
          />
          <label
            htmlFor="isim"
            className="font-weight-bolder text-light h3 mt-5"
          >
            Lütfen isminizi giriniz:
          </label>
          <input
            id="isim"
            onChange={isimDeğiştirmeButonu}
            type="text"
            value={isim}
            className="form-control "
            placeholder="İsminiz..."
          />

          <label
            htmlFor="email"
            className="font-weight-bolder text-light h3 mt-5"
          >
            Lütfen e-mailinizi giriniz:
          </label>
          <input
            id="email"
            onChange={emailDeğiştirmeButonu}
            type="email"
            value={email}
            className="form-control "
            placeholder="E-mail..."
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-success btn-lg font-weight-bolder mt-5 "
          >
            Yorum Ekle
          </button>
        </div>
      </form>
      <div>
        {yorumlar.map((yorum) => {
          return <Yorum key={yorum.id} yorum={yorum} yorumSil={yorumSil} />;
        })}
      </div>
    </div>
  );
};

export default Yorumlar;
