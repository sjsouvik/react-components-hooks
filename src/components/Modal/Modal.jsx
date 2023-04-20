import { useEffect, useState } from "react";

import "./Modal.css";

const Modal = (props) => {
  const { open, title, content, footer, onClose } = props;

  const keyDownHandler = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => document.removeEventListener("keydown", keyDownHandler);
  }, []);

  return (
    open && (
      <div className="modal">
        <div className="modal-dialog">
          <section className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <button onClick={onClose}>X</button>
          </section>
          <section className="modal-content">{content}</section>
          <section className="modal-footer">{footer}</section>
        </div>
      </div>
    )
  );
};

export const ModalWrapper = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <h2>Modal </h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={isOpen}
        title="Title of the modal"
        content={<p>Content of the modal</p>}
        footer={
          <>
            <button>Cancel</button>
            <button>Save</button>
          </>
        }
        onClose={() => setOpen(false)}
      />
    </>
  );
};
