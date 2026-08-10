import React from "react";

const Widget = ({ title, loading, error, children }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      {loading && <p>Loading.....</p>}
      {error && <p>{error}</p>}
      {!loading && !error && children}
    </div>
  );
};

export default Widget;
