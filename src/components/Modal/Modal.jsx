import { useState } from "react";

import "./Modal.css";

const Modal = (props) => {
  const { open, onClose } = props;

  return (
    open && (
      <div className="modal position-center">
        <div className="modal-dialog">
          <section className="modal-header">
            <h3>Title of the modal</h3>
            <button onClick={onClose}>X</button>
          </section>
          <section className="modal-content">Modal Content</section>
          <section className="modal-footer">Modal Footer</section>
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
      <Modal open={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};
