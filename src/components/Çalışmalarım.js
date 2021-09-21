import React from "react";
import Card from "./Card";
import recipeapp from "../assets/recipeapp.png";
import financeapp from "../assets/financeapp.png";
import academyapp from "../assets/academyapp.png";
const Çalışmalarım = () => {
  return (
    <div className="row m-3" id="works">
      <Card
        image={recipeapp}
        title="Recipe App"
        link="https://github.com/hakankaraahmet/React-Recipe-App"
        content="Bu projede bir yemek sitesi hazırladım. İçerisinde 
        home,about,github ve login sayfaları mevcut
         ve bu sayfalara router vasıtası ile erişim sağlanıyor.
        sayfaları yönlendirmek için useHistory hook'unu kullandım.
        Api çekme işlemini ise axios ile yaptım.
        Stillendirmeyi ise styled component ile yaptım.
        Oldukça faydalı ve öğretici bir proje"
      />
      <Card
        image={financeapp}
        title="Finance App"
        link="https://github.com/hakankaraahmet/React-Finance_Track-App"
        content="Bu projede bir gelir gider tablosu oluşturma ve toplam 
        karı hesaplayan bir uygulama oluşturdum.Listeye ekleme,silme,düzenleme
        gibi javascript fonksiyonlarını aktif kullandığım bir uygulama oldu."
      />
      <Card
        image={academyapp}
        title="HakanAcademy App"
        link="https://github.com/hakankaraahmet/Bootstrap-Project"
        content="Bu projede örnek bir kurs sitesi oluşturdum. 4 farklı sayfa mevcut.
        Tamamen Bootstrap4 ile hazırlanan bu projede bootstrapin çoğu özelliğini kullandım.
        Örnek vermek gerekirse slideshow,modal ve carousel gibi özellikleri sayfamı zenginleştirmek
        için kullandım."
      />
      <button className="btn btn-lg"><i className="fab fa-github"></i><a className="text-decoration-none text-dark" href="https://github.com/hakankaraahmet">Viev More Projects</a></button>
    </div>
  );
};

export default Çalışmalarım;
