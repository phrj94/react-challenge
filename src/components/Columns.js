import { useMemo } from 'react';
import ReactCountryFlag from "react-country-flag";

export default function Columns() {
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
                Header: "Bandeira",
                accessor: "code",
                Cell: ({ cell: { value } }) => <ReactCountryFlag countryCode={value} svg title={value} />
            },
            {
                Header: "Idiomas",
                accessor:'languages[0].name',
                Cell: ({ cell: { row } }) => <span>{row.original.languages.map(el => el.name).toString()}</span>
            },
            {
                Header: "Moeda",
                accessor: "currency"
            },
        ],
        []
    )
    return columns;
}