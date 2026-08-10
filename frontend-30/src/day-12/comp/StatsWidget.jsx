import React from "react";

const StatsWidget = ({ title, value }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
};

export default StatsWidget;
