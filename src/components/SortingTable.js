import React, {useEffect,useMemo,useState} from "react";
import axios from "axios";
import {useTable,useSortBy,useGlobalFilter} from "react-table";
import {COLUMNS} from "./columns";
import {datas} from "./WORLD_DATA.js";
import {GlobalFilter} from "./GlobalFilter";


export const SortingTable = ()=>{

  const columns = useMemo(()=> COLUMNS,[]);
  const data = useMemo(()=> datas,[]);

  const tableInstance = useTable({
    columns: columns,
    data: data
  },useGlobalFilter, useSortBy)



 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
   state,
   setGlobalFilter
 } = tableInstance

const {globalFilter} = state

  return(
    <div>
    <GlobalFilter  filter={globalFilter} setFilter={setGlobalFilter} />
    <table {...getTableProps()}>
    <thead>
    {
      headerGroups.map((headerGroup)=>(
        <tr {...headerGroup.getHeaderGroupProps()}>
        {
          headerGroup.headers.map( column => (
             <th {...column.getHeaderProps(column.getSortByToggleProps())}>
             {column.render("Header")}
             <span>
             {column.isSorted ? (column.isSortedDesc ? "↓":"↑"): ""}
             </span>
             </th>
          ))
        }
        </tr>
      ))
    }

    </thead>
    <tbody {...getTableBodyProps()}>
    {
      rows.map(row=>{
        prepareRow(row)
        return(
          <tr {...row.getRowProps()}>
          {
            row.cells.map(cell =>{
              return(
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              )
            })
          }

          </tr>
        )
      })
    }
    </tbody>
    </table>
    </div>
  )
}
