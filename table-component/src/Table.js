import React, { useState } from "react";

const TableComponent = ({ data }) => {
  const [sort, setSort] = useState({
    column: "",
    direction: ""
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRow, setActiveRow] = useState(null);

  const handleSort = (column) => {
    let direction = "ascending";
    if (sort.column === column && sort.direction === "ascending") {
      direction = "descending";
    }
    setSort({ column, direction });
  };

  const handleMenuToggle = (column) => {
    setMenuOpen(!menuOpen);
    setSort({ column });
  };

  const handleRowClick = (index) => {
    setActiveRow(index);
  };

  const sortedData = [...data].sort((a, b) => {
    if (sort.direction === "ascending") {
      if (a[sort.column] < b[sort.column]) {
        return -1;
      }
      if (a[sort.column] > b[sort.column]) {
        return 1;
      }
      return 0;
    } else {
      if (a[sort.column] > b[sort.column]) {
        return -1;
      }
      if (a[sort.column] < b[sort.column]) {
        return 1;
      }
      return 0;
    }
  });

  return (
    <table className="responsive-table">
      <thead>
        <tr>
          <th>ID</th>
          <th onClick={() => handleSort("first_name")}>
            First Name
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("first_name")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("last_name")}>
            Last Name
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("last_name")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("email")}>
            Email
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("email")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("gender")}>
            Gender
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("gender")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("ip_address")}>
            IP Address
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("ip_address")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("airport_code")}>
            Airport Code
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("airport_code")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("time")}>
            Time
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("time")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("status")}>
            Status
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("status")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("mobile")}>
            Mobile
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("mobile")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("area")}>
            Area
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("area")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("show")}>
            Show
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("show")}
            >
              &#9776;
            </div>
          </th>
          <th onClick={() => handleSort("edit")}>
            Edit
            <div
              className="menu-toggle"
              onClick={() => handleMenuToggle("edit")}
            >
              &#9776;
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr
            key={item.id}
            onClick={() => handleRowClick(index)}
            className={activeRow === index ? "active" : ""}
          >
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.ip_address}</td>
            <td>{item.airport_code}</td>
            <td>{item.time}</td>
            <td style={{ color: item.status === "true" ? "green" : "red" }}>
              {item.status}
            </td>
            <td>{item.mobile}</td>
            <td>{item.area}</td>
            <td>{item.show}</td>
            <td>{item.edit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
