import React from "react";

export const GlobalFilter = ({filter,setFilter}) => {
  return (
    <div className="search">
    <span>
    Search: {" "}
    <input style={{margin: "1vh"}} placeholder=" Enter Country" value={filter || ""}
    onChange={e=> setFilter(e.target.value)} />
    </span>
    </div>
  )
}
