import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

const Menu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    get_data();
  }, []);

  const get_data = async () => {
    axios.get("http://localhost:5001/menu_items").then((res) => {
      const values = res.data;
      //console.log(values);
      setItems(values);
      // console.log(items);
      //const arrayOfLists = res.map((person) => <Item />);
      //return arrayOfLists;
    });
  };

  return (
    <>
      <section id="menu" className="menu">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Menu</h2>
            <p>
              Check Our <span>Yummy Menu</span>
            </p>
          </div>

          <ul
            className="nav nav-tabs d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li className="nav-item">
              <a
                className="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#menu-starters"
              >
                <h4>Starters</h4>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-breakfast"
              >
                <h4>Breakfast</h4>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-lunch"
              >
                <h4>Lunch</h4>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-dinner"
              >
                <h4>Dinner</h4>
              </a>
            </li>
          </ul>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
            <div className="tab-pane fade active show" id="menu-starters">
              <div className="tab-header text-center">
                <p>Menu</p>
                <h3>Starters</h3>
              </div>

              <div className="row gy-5">
                {items.map((item, id) => {
                  // foreach(items in item)
                  console.log(id);
                  if (item.price > 2)
                    return (
                      <Item name={item.name} price={item.price} key={id} />
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
