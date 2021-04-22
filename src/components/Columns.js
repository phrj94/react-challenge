import { useMemo } from 'react';

export default function Columns(props) {
    let languageNames = props.map(country => country.languages.map(language => language.name))   
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
                accessor: "emoji"
            },
            {
                Header: "Idiomas",
                id: 'language',
                accessor: () => languageNames
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