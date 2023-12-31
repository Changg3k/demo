// Product.js
import React from "react";
import { data } from "./data";
import "./BusService.css";

export default function BusService() {
  return (
    <section className="product">
      <div className="container">
        <div className="row product-row">
          {data.map((course, index) => {
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item"
                key={index}
              >
                <div className="card">
                  <img
                    src={course.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href={`/course/${course.categoryName}/${course.courseName}`}
                      >
                        {course.courseName}
                      </a>
                    </h5>
                    <p className="card-text">{course.metaDescription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
