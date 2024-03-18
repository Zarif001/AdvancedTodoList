import { forwardRef, useImperativeHandle, useRef } from "react";
import ReactDOM from "react-dom"; 
import Button from "./Button";// Import ReactDOM for createPortal

export default forwardRef(function Modal({ children, buttonCaption }, ref) {
  const modalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open() {
      modalRef.current.showModal();
    },
  }));

  return ReactDOM.createPortal(
    <dialog
      ref={modalRef}
      className=" backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button >{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
