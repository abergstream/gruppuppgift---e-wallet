import { useState } from "react";
import "./ModalMessage.css";

const ModalMessage = ({
  error,
  errorMsg,
  setErrorMsg,
  successMsg,
  setSuccessMsg,
}) => {
  return (
    <section className="modal-container">
      <article
        className={`modal__message-container ${
          !error ? "modal__message-container--success" : ""
        }`}
      >
        <h2 className="modal__title">
          {error ? "Something went wrong" : "Card added!"}
        </h2>

        <section className="modal__message">
          <ul className="modal__message-list">
            {error ? (
              errorMsg.map((message, index) => {
                return <li key={index}>{message}</li>;
              })
            ) : (
              <li className="modal__message-list__item">{successMsg}</li>
            )}
          </ul>
        </section>
        <button
          className="modal__button"
          onClick={() => {
            error ? setErrorMsg("") : setSuccessMsg("");
          }}
        >
          Close
        </button>
      </article>
    </section>
  );
};

export default ModalMessage;
