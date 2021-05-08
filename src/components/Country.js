import React from 'react';
import Data from './Data.js';
import Columns from './Columns.js';
import { useSortBy, useTable } from 'react-table';
import { FaCaretSquareUp, FaCaretSquareDown } from "react-icons/fa";
//import "./Country.css";
import styled from 'styled-components';

//Styled components
const TableStyled = styled.table`
    border-spacing: 0;
    border-collapse: collapse;
    border: 1px solid black;
    position: relative;
`;

const ThStyled = styled.th`
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    text-align: center;
    width: 70px;
    height: 22px;
    background-color: black;
    color: white;

    :last-child{
        border-right: 0;
    }

    div + span{
        width: 80%;
        float: left;
    }
    
`;

const TdStyled = styled.td`
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child{
        border-right: 0;
    }
`;

const TrStyled = styled.tr`
    :nth-child(even) {
        background-color: #f2f2f2;
    }

    last-child td {
        border-bottom: 0;
    }

    > th > div > span {
        position: relative;
        float: right;
    }
`;

const SpanTitleHeaderStyled = styled.span`
    width: 80%;
    float: left;
`;

const SpanSortIconStyled = styled.span`
    width: 20%;
`;

const DivContainer = styled.div`
    padding-top: 25px;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px){
        padding-top: 0;
        display: flex;
        overflow-x: auto;
        justify-content: left;
    }
`


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
        <DivContainer>
            <TableStyled {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} >
                            {headerGroup.headers.map(column => (
                                <ThStyled {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <div>
                                        <SpanTitleHeaderStyled>
                                            {column.render("Header")}
                                        </SpanTitleHeaderStyled>
                                        <SpanSortIconStyled >
                                            {column.isSorted ? (column.isSortedDesc ? (<FaCaretSquareDown /> ) : ( <FaCaretSquareUp /> ) ) : ("")}
                                        </SpanSortIconStyled>
                                    </div>
                                </ThStyled>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <TrStyled {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <TdStyled {...cell.getCellProps()}>
                                            { cell.render("Cell")}
                                        </TdStyled>
                                    );
                                })}
                            </TrStyled>
                        );
                    })}
                </tbody>
            </TableStyled>
        </DivContainer>
    )
}

export default Country;