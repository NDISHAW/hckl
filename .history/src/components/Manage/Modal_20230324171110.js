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
      <div className="modalContainer w-auto" onClick={handleClose}>
        <div className={`modal w-auto ${custom_modal}`}>
          <div className="modal__head">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto">{modalLable}</h2>
            <span
              className="bg-gradient-to-br bg-green-600 hover:bg-blue-400 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-red-600 hover:text-red-700"
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
