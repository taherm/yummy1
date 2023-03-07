import { useState } from "react";

const Item = (props) => {
  const [name, setName] = useState();
  return (
    <div className="col-lg-4 menu-item">
      <a href="assets/img/menu/menu-item-1.png" className="glightbox">
        <img
          src="assets/img/menu/menu-item-1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>{props.name}</h4>
      <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
      <p className="price">{props.price}</p>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default Item;
