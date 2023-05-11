import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useCart } from "../../cart-context";

const EmailOrderForm = () => {
//   const { cartItems } = useCart();
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wmgnbl",
        "template_u07hvsd",
        form.current,
        "Z0CbWT44L2zlf5Ag-"
      )
      .then(
        (result) => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED!");
        }
      );
    console.log(cartItems);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Note</label>
      <textarea name="message" />
      <ul name="order">
        {cartItems.map((item) => (
          <li className="cart-item" key={item.index}>
            <div
              className="cart-item-image"
              style={{
                backgroundImage: `url(${item.image})`,
                width: "100px",
                height: "100px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              alt={item.name}
            ></div>
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-price">{item.price}&nbsp;Kč</span>
          </li>
        ))}
      </ul>
      <button className="cart-order" type="submit">
        Order
      </button>
    </form>
  );
};

export default EmailOrderForm;
