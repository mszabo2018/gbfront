import React from "react";
import { render, screen, within } from "@testing-library/react";
import CustomTable from "./CustomTable";
import { DATA } from "./Constants";

describe("Checking for Title", () => {
  it("generates a valid title", () => {
    const renderResult = render(
      <CustomTable data={DATA} title={"Testing Title"} />
    );
    expect(renderResult.getByText("Testing Title")).toBeInTheDocument();
  });
});

