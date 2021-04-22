import React from 'react';
import Data from './Data.js';
import Columns from './Columns.js';
import { useSortBy, useTable } from 'react-table';
import { FaCaretSquareUp, FaCaretSquareDown } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag"
import "./Country.css";

function Country(props) {
    const data = Data(props.countries);
    const columns = Columns();

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
                                            {
                                                cell.column.id === "language" ? <span>{cell.row.original.languages.map(element => element.name).toString()}</span> 
                                                : cell.column.id === "emoji" ? 
                                                <ReactCountryFlag 
                                                    countryCode={cell.row.original.code}
                                                    svg
                                                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                                    cdnSuffix="svg"
                                                    title={cell.row.original.code}
                                                    className="flag"
                                                />
                                                : cell.render("Cell")
                                            }
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