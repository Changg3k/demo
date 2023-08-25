import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Headline from "./Components/Headline";
import ItemList from "./Components/ItemList";
import Aside from "./Components/Aside";
import BoxList from "./Components/BoxList";
import Footer from "./Components/Footer";
/*import nen from "./Components/image/back1.jpg";*/
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ticket from "./Components/Ticket";
import may from "./Components/image/from.jpg";
import hong from "./Components/image/from2.jpg";
import hon from "./Components/image/from3.jpg";
import Introduce from "./Components/Introduce";
import Product from "./Components/Home/Product";
import img1 from "./Components/Home/img1.jpeg";

class App extends Component {
  render() {
    return (
      <div id="layout">
        <Header />

        <main className="main-content">
          <div className="ticket-introduce-container">
            <Ticket />
          </div>

          <section id="content">
            <Headline bigTitle={blog.bigTitle} />
            <ItemList itemList={blog.itemList} />
          </section>
          <Product />

          <BoxList boxList={blog.boxList} />
        </main>

        <Footer />
      </div>
    );
  }
}

const blog = {
  bigTitle: "",
  itemList: [
    {
      title: (
        <span className="highlight-text">
          NHÀ XE NVN-HT KÍNH CHÀO QUÝ KHÁCH!!
        </span>
      ),
      info: "Rất hân hạnh được phục vụ quý khách",
    },
  ],
  boxList: ["", "", "", "", "", "", ""],
};
export default App;
