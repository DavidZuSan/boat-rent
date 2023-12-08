import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";

test("search bar updates on input and triggers search on Enter", () => {
  const handleSearchMock = jest.fn();
  render(
    <Router>
      <NavBar onSearch={handleSearchMock} />
    </Router>
  );

  const searchBar = screen.getByPlaceholderText("Search...");
  fireEvent.change(searchBar, { target: { value: "test search" } });
  fireEvent.keyDown(searchBar, { key: "Enter", code: "Enter" });

  expect(handleSearchMock).toHaveBeenCalledWith("test search");
});
