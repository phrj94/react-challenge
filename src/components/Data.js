import { useMemo } from 'react';

export default function Data(props){
    const dataRows = useMemo(
        () => props,[props]
    );
    return dataRows;
}