import React from "react";

const Yorum = ({ key, yorum, yorumSil }) => {
  return (
    <div >
      <div className="row">
        <div className="p-3  bg-light text-dark comment mt-4 text-justify">
          <h4 className="overflow-auto">
            <i className="fa fa-user text-secondary me-2"> </i>
            {yorum.isim}
            <br />
            <br />
            <i className="fa fa-envelope text-secondary me-2"> </i>
            {yorum.email}
          </h4 >
          <br />
          <p> {yorum.mesaj} </p>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-danger fw-bold"
            onClick={() => yorumSil(yorum.id)}
          >
            <i title="Delete" className="fa fa-trash-alt"></i>
            <span> Yorumu Sil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Yorum;