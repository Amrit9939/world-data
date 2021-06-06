import React from "react";

export const GlobalFilter = ({filter,setFilter}) => {
  return (
    <div className="search">
    <span>
    Search: {" "}
    <input value={filter || ""}
    onChange={e=> setFilter(e.target.value)} />
    </span>
    </div>
  )
}