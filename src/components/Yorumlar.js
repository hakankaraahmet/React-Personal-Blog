import React, { useState } from "react";

const Comment = () => {
  const [text, setText] = useState({ message: "", name: "", email: "" });
  const [comments, setComments] = useState([]);
  const onButtonClick = (e) => {
    e.preventDefault();
    if (text.message && text.name && text.email) {
      setComments([...comments, text]);
      setText({ message: "", name: "", email: "" });
    } else {
      alert("Lütfen tüm alanları doldurunuz");
    }
  };
  const deleteComment = (e) => {
    return setComments(
      comments.filter((comment, index) => {
        console.log(index);
        console.log(e.target.id);
        return index !== Number(e.target.id);
      })
    );
  };
  const allComments =
    comments.length > 0 &&
    comments.map((comment, index) => {
      return (
        <div key={index} id="comments">
          <div className=" align-items-center">
            <div className="p-3 col-10 bg-light text-dark comment mt-4 text-justify float-left">
              <h4>
                <i className="fa fa-user text-secondary"></i> {comment.name}
                <br />
                <br />
                {"    "}
                <i className="fa fa-envelope text-secondary"></i>
                {"    "}
                {comment.email}
              </h4>
              <br />
              <p>{comment.message}</p>
              <button
                type="button"
                className="btn btn-danger fw-bold"
                onClick={deleteComment}
              >
                <i id={index} title="Delete" className="fa fa-trash-alt"></i>
                <span>Yorumu Sil</span>
              </button>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div
      id="comments"
      className="d-flex justify-content-between p-5 row bg-dark text-light"
    >
      <div className="col-md-6">
        <section className="">
          <form id="algin-form">
            <div className="form-group">
              <h4>Yorumlarınızı yazabilirsiniz...</h4>{" "}
              <label htmlFor="message">Mesaj: </label>{" "}
              <textarea
              placeholder="Yorumunuzu giriniz..."
                onChange={(e) =>
                  setText({
                    message: e.target.value,
                    name: text.name,
                    email: text.email,
                  })
                }
                value={text.message}
                name="message"
                id=""
                cols="30"
                rows="5"
                className="form-control bg-white"
              ></textarea>
            </div>
            <div className="form-group">
              {" "}
              <label htmlFor="name">İsim: </label>{" "}
              <input
              placeholder="Adınızı giriniz..."
                onChange={(e) =>
                  setText({
                    name: e.target.value,
                    message: text.message,
                    email: text.email,
                  })
                }
                value={text.name}
                type="text"
                name="name"
                id="fullname"
                className="form-control"
              />{" "}
            </div>
            <div className="form-group">
              {" "}
              <label htmlFor="email">Email Adresi: </label>{" "}
              <input
              placeholder="E-mail adresinizi giriniz..."
                onChange={(e) =>
                  setText({
                    email: e.target.value,
                    message: text.message,
                    name: text.name,
                  })
                }
                value={text.email}
                type="text"
                name="email"
                id="email"
                className="form-control"
              />{" "}
            </div>
            <div className="form-inline mt-2">
              {" "}
              <button
                onClick={(e) => {
                  onButtonClick(e);
                }}
                type="button"
                className="btn btn-light fw-bold bg-success text-light "
              >
                Gönder
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="col-md-4">{allComments}</div>
    </div>
  );
};

export default Comment;
