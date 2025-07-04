import React, { useState } from "react";
import "./MyTickets.css";

import SearchIcon from "../assets/search.png";
import DropdownArrowIcon from "../assets/dropdownarrow.png";
import StarFull from "../assets/star_full.png";
import StarHalf from "../assets/star_half.png";
import StarEmpty from "../assets/star_empty.png";
import ScrollLeft from "../assets/scroll_left.png";
import ScrollRight from "../assets/scroll_right.png";

const MyTickets = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [entries, setEntries] = useState(5);

  const tickets = [
    {
      ticketNo: "1234",
      subject: "Login issue",
      status: "In Progress",
      supportBy: "Tech support",
      date: "13/08/21",
      rating: 0,
    },
    {
      ticketNo: "1124",
      subject: "New ticket issue",
      status: "On hold",
      supportBy: "Operation Team",
      date: "14/08/21",
      rating: 0,
    },
    {
      ticketNo: "1224",
      subject: "New request",
      status: "Closed",
      supportBy: "Tech support",
      date: "13/08/21",
      rating: 4.5,
    },
    {
      ticketNo: "1244",
      subject: "Ticket submission",
      status: "In Progress",
      supportBy: "Operation Team",
      date: "14/08/21",
      rating: 0,
    },
    {
      ticketNo: "1114",
      subject: "Login issue",
      status: "In Progress",
      supportBy: "Tech support",
      date: "3/08/21",
      rating: 0,
    },
    {
      ticketNo: "1004",
      subject: "Password reset",
      status: "Closed",
      supportBy: "Tech support",
      date: "10/08/21",
      rating: 3,
    },
    {
      ticketNo: "1104",
      subject: "App crash",
      status: "On hold",
      supportBy: "Operation Team",
      date: "11/08/21",
      rating: 0,
    },
  ];

  const filtered = tickets.filter((t) => t.ticketNo.includes(search));
  const totalPages = Math.ceil(filtered.length / entries);
  const paginated = filtered.slice((page - 1) * entries, page * entries);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <>
        {[...Array(full)].map((_, i) => (
          <img
            key={`full-${i}`}
            src={StarFull}
            alt="star"
            className="star-icon"
          />
        ))}
        {half && <img src={StarHalf} alt="half star" className="star-icon" />}
        {[...Array(empty)].map((_, i) => (
          <img
            key={`empty-${i}`}
            src={StarEmpty}
            alt="empty star"
            className="star-icon"
          />
        ))}
      </>
    );
  };

  const handleEntriesChange = (e) => {
    setEntries(parseInt(e.target.value));
    setPage(1);
  };

  return (
    <div className="mytickets-container">
      <h2>List of Ticket</h2>

      <div className="controls-column">
        <div className="search-container">
          <input
            type="text"
            placeholder="Find ticket"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={SearchIcon} alt="search" className="search-icon" />
        </div>

        <div className="entries-dropdown">
          Show:
          <div className="dropdown-container">
            <select value={entries} onChange={handleEntriesChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
            <img
              src={DropdownArrowIcon}
              alt="dropdown arrow"
              className="dropdown-arrow"
            />
          </div>
          Entries
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Support by</th>
            <th>Date</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((t, index) => (
            <tr
              key={t.ticketNo}
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? "rgba(196,196,196,0.37)"
                    : "rgba(196,196,196,0.56)",
              }}
            >
              <td>
                <a href="#">{t.ticketNo}</a>
              </td>
              <td>{t.subject}</td>
              <td>
                <span
                  className={`status ${t.status
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                >
                  {t.status}
                </span>
              </td>
              <td>{t.supportBy}</td>
              <td>{t.date}</td>
              <td>{renderStars(t.rating)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <div>
          Showing {(page - 1) * entries + 1} to{" "}
          {Math.min(page * entries, filtered.length)} of {filtered.length}{" "}
          entries
        </div>

        <div className="scroll-group">
          <img
            src={ScrollLeft}
            alt="first"
            className="scroll-icon-small"
            onClick={() => setPage(1)}
          />
          <img
            src={ScrollLeft}
            alt="prev"
            className="scroll-icon-small"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
          />
          <img
            src={ScrollLeft}
            alt="prev"
            className="scroll-icon-small"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
          />

          <span>{page}</span>

          <img
            src={ScrollRight}
            alt="next"
            className="scroll-icon-small"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          />
          <img
            src={ScrollRight}
            alt="next"
            className="scroll-icon-small"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          />
          <img
            src={ScrollRight}
            alt="last"
            className="scroll-icon-small"
            onClick={() => setPage(totalPages)}
          />
        </div>
      </div>
    </div>
  );
};

export default MyTickets;
