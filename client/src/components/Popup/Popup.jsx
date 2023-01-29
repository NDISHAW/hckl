import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box w-full flex flex-col items-center justify-center">
      <div className="box w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;

// import React, { useState } from "react";

// const Modal = () => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       {showModal ? (
//         <div
//           className="modal fade"
//           id="exampleModal"
//           tabindex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-dialog-centered modal-xl">
//             <div className="modal-content">
//               <div className="modal-body p-0">
//                 <div className="container-fluid">
//                   <div className="row gy-4">
//                     <div
//                       className="col-lg-4 col-sm-12 bg-cover"
//                       style={`background-image: url(img/contus.jpg);
//                     min-height: 300px`}
//                     >
//                       <div></div>
//                     </div>
//                     <div className="col-lg-8">
//                       <form className="p-lg-5 col-12 row g-3">
//                         <div>
//                           <h1>Get in touch</h1>
//                           <p>Enter your message</p>
//                         </div>
//                         <div className="col-lg-6">
//                           <label for="userName" className="form-label">
//                             First name
//                           </label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="John"
//                             id="fuserName"
//                             aria-describedby="emailHelp"
//                           />
//                         </div>
//                         <div className="col-lg-6">
//                           <label for="userName" className="form-label">
//                             Last name
//                           </label>
//                           <input
//                             className="form-control"
//                             placeholder="kamau"
//                             id="suserName"
//                             aria-describedby="emailHelp"
//                           />
//                         </div>
//                         <div className="col-12">
//                           <label for="userName" className="form-label">
//                             Email address
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Johnkamaa@gmail.com"
//                             id="euserName"
//                             aria-describedby="email"
//                           />
//                         </div>
//                         <div className="col-12">
//                           <label for="exampleInputEmail1" className="form-label">
//                             Enter Message
//                           </label>
//                           <textarea
//                             name=""
//                             placeholder="Yes,how can we help you,Type your message here."
//                             className="form-control"
//                             id=""
//                             rows="4"
//                           ></textarea>
//                         </div>

//                         <div className="col-12">
//                           <button type="submit" className="btn btn-brand">
//                             Send Message
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default Modal;
