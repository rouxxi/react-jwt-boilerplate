import React from "react";

const Logout = () => {
  const handleSubmit = () => {
    localStorage.removeItem("token");
    alert("Disconnected successfully!");
  };

  return (
    <form>
      <button type="button" onClick={handleSubmit}>
        Disconnect
      </button>
    </form>
  );
};

export default Logout;
