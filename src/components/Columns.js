import { useMemo } from 'react';

export default function Columns(){
    const columns = useMemo(
        () => [
            {
                Header: "Nome",
                accessor: "name"
            },
            {
                Header: "Capital",
                accessor: "capital"
            },
            {
                Header: "População",
                accessor: "population"
            },
            {
                Header: "Área",
                accessor: "area"
            },
            {
                Header: "Bandeira",
                accessor: "flag.svgFile"
            },
            {
                Header: "Sub Região",
                accessor: "subregion.name"
            },
        ],
        []
    )
    return columns;
}