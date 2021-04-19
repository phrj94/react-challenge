import React from 'react';
import Data from './Data.js';
import Columns from './Columns.js';
import { useSortBy, useTable } from 'react-table';
import { FaCaretSquareUp, FaCaretSquareDown } from "react-icons/fa";
import "./Country.css";

function Country(props) {
    const data = Data(props.country);
    const columns = Columns(props.country);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data }, useSortBy);

    return (
        <div className="container">
            <table {...getTableProps()}>
                <thead >
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} >

                            {headerGroup.headers.map(column => (
                                <th className="thead" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <div >
                                        <span className="titleHeader">
                                          {column.render("Header")}  
                                        </span>                                        
                                        <span>
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <FaCaretSquareDown />
                                                ) : (
                                                    <FaCaretSquareUp />
                                                )
                                            ) : (
                                                ""
                                            )}
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            { cell.column.id === "flag.svgFile" ? <img src={cell.value} alt="Bandeira do país"></img>
                                                : cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Country;