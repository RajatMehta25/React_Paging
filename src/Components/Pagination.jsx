import React, { useState, useEffect } from "react";

const Pagination = ({ showperpage, onpaging, total }) => {
  const [counter, setcounter] = useState(1);
  const [buttons, setbuttons] = useState(Math.ceil(total / showperpage));

  useEffect(() => {
    const value = showperpage * counter;
    onpaging(value - showperpage, value);
  }, [counter]);
  const onbuttonclick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setcounter(1);
      } else {
        setcounter(counter - 1);
      }
    } else if (type === "next") {
      if (buttons === counter) {
        setcounter(counter);
      } else {
        setcounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center m-auto ">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item ">
            <a
              className="page-link"
              href="!#"
              onClick={() => onbuttonclick("prev")}
            >
              Previous
            </a>
          </li>

          {new Array(buttons).fill().map((ele, index) => (
            <li
              className={`page-item ${index + 1 === counter ? "active" : null}`}
            >
              <a
                className="page-link"
                href="!#"
                onClick={() => setcounter(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              className="page-link"
              href="!#"
              onClick={() => onbuttonclick("next")}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
