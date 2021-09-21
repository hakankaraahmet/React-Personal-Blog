import React from "react";
import profilename from "../assets/profilename.png";
const Hakkımda = () => {
  return (
    <div class="card p-5" id="aboutme">
      <div class="row d-flex justify-content-around">
        <div class="col-md-6">
          <div class="card-body">
            <h2 className="about-greeting">
              Merhaba! Ben Hakan{" "}
              <img
                className="wave-emoji"
                alt="Wave Emoji"
                src="https://twemoji.maxcdn.com/2/72x72/1f44b-1f3fc.png"
              />
            </h2>

            <p className="card-text" align="left">
                Kendine güvenen ve içinde bulunduğu durumda her zaman en iyisini yapmayı
                amaçlayan, öğrenme aşkı ve isteğiyle yeni atılımlar gerçekleştirecek iradeye
                sahip bir FRONT-END DEVELOPER, diğer bir deyişle ÖN-UÇ GELİŞTİRİCİ'yim.
              <br />
              <br />
              Eğitim hayatım ve tecrübelerim doğrultusunda farklı insanlarla
              birlikte çalışma, bir takımda yer alma ve birlikte üretebilmeyi
              öğrenme fırsatım oldu. İşini severek yapan ve detayları çok
              önemseyen biriyim. İnsan ilişkileri noktasında esnek olmanın bana
              verimlilik olarak geri döndüğünü sıklıkla tecrübe ettim. Yeni
              şeyler öğrenmeyi, yeteneklerimi geliştirmeyi çok önemsiyor, bu
              amaçla insan ilişkilerinin öğreticiliğinden faydalanmak
              gerektiğini düşünüyorum. Ekibimdeki insanlarla bilgi alışverişinde
              bulunmak benim için bu nedenle çok önemli. Fikir geliştirmenin
              zihni, dolayısıyla bedeni sürekli aktif tuttuğunun bilincinde
              olarak hem iş hem de bireysel hayatta yaratıcı olmanın önemli
              olduğunu düşünüyorum. 
              <br />
              <br />
              Başta HTML5, CSS3, Javascript olmak üzere ön yüz geliştirmede sık kullanılan
              ReactJS, Bootstrap4, MaterialUI, SASS, RestAPI,SemanticUI gibi son dönemin gelişen 
              teknolojisine ayak uydurabileceğim birçok kütüphane ve framework bilgisine sahibim.
              Saygılarımla...
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <img
            src={profilename}
            class="img-fluid rounded-circle"
            alt="100x100"
          />
        </div>
      </div>
    </div>
  );
};

export default Hakkımda;
