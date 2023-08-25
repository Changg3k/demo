import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header-nav">
          <li>
            <a href="#">Thông tin</a>
          </li>
          <li>
            <a href="#">Đơn Hàng</a>
          </li>
          <li>
            <a href="#">Trở thành đối tác</a>
          </li>
          <li>
            <a href="#">Đăng Nhập</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
