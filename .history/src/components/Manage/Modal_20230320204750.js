import './modal.css'

function Modal({open, modalLable, children, custom_modal, onClose}) {

  const handleClose = (e) => {
    if(e.target.className === 'modalContainer'){
      onClose()
    }
    return null
  }

  if(open) {
    return (
      <div
        className="grid grid-cols-4 gap-4 w-screen my-14"
        data-aos="fade-up"
        data-aos-duration="3000"
        onClick={handleClose}
      >
        <div className={`modal ${custom_modal}`}>
          <div className="modal__head">
            <h2>{modalLable}</h2>
            <span className="modal__close" onClick={onClose}>
              x
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
