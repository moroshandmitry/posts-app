import React from "react";
import PT from "prop-types";

export const Title = ({ children, amount }) => {
  const count = amount + 10;
  return (
    <h3>
      {children} <span style={{ color: "red" }}>{count}</span>
    </h3>
  );
};

Title.propTypes = {
  amount: PT.number.isRequired
};
