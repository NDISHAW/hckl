import './modal.css'
import { MdClose } from "react-icons/md";

function Modal({open, modalLable, children, custom_modal, onClose}) {

  const handleClose = (e) => {
    if(e.target.className === 'modalContainer'){
      onClose()
    }
    return null
  }

  if(open) {
    return (
      <div className="modalContainer mx" onClick={handleClose}>
        <div className={`modal ${custom_modal}`}>
          <div className="modal__head">
            <h2>{modalLable}</h2>
            <span
              className="bg-gradient-to-br bg-green-600 hover:bg-blue-400 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white hover:text-red-700"
              onClick={onClose}
            >
              {" "}
              <MdClose size={80} />{" "}
            </span>
          </div>
          {children}
        </div>
      </div>
    );
  }
  return null
}

export default Modal
