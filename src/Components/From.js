import React from "react";

const From = () => {
  return (
    <From>
      <div className="search-container">
        <form className="search-form">
          <div className="search-field">
            <label htmlFor="from">Nhập nơi xuất phát:</label>
            <select id="from" name="from">
              <option value="dia_diem_1">Địa điểm 1</option>
              <option value="dia_diem_2">Địa điểm 2</option>
              <option value="dia_diem_3">Địa điểm 3</option>
            </select>
          </div>

          <div className="search-field">
            <label htmlFor="to">Nhập nơi đến :</label>
            <select id="to" name="to">
              <option value="dia_diem_1">Địa điểm hà nội</option>
              <option value="dia_diem_2">Địa điểm 2</option>
              <option value="dia_diem_3">Địa điểm 3</option>
            </select>
          </div>

          <button type="submit">Tìm</button>
        </form>
      </div>
    </From>
  );
};

export default From;
