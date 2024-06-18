import React from "react";

function Backdrop({ onClick }) {
  return (
    <div>
      <div
        className="fixed inset-0 bg-black opacity-40 z-40"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
      />
    </div>
  );
}

export default Backdrop;
