import React from 'react';
import { Table } from "react-bootstrap";
import ReactTable from 'react-table';
import NumberCell from  './NumberCell';
import data from '../data';

const columns = [
    {
        Header: 'Party',
        accessor: 'party',
    },
    {
        Header: 'Number of MPs',
        accessor: 'num_mps',
    },
    {
        Header: 'Ayes',
        accessor: 'ayes',
    },
    {
        Header: 'Nays',
        accessor: 'nays',
    },
    {
        Header: 'Avg Ayes / MP',
        accessor: 'ayes_per_mp',
        Cell: NumberCell,
    },
    {
        Header: 'Avg Nays / MP',
        accessor: 'nays_per_mp',
        Cell: NumberCell,
    },
    {
        Header: 'Ratio Ayes:Nays',
        accessor: 'ayes_nays_ratio',
        Cell: NumberCell,
    },
];

const PartiesTable = () => (
    <div>

        <ReactTable
            data={data.parties}
            columns={columns}
            defaultSorted={[
                {
                    id: "ayes_nays_ratio",
                    desc: true,
                }
            ]}
            showPagination={false}
            minRows={0}
            />
    </div>
);

export default PartiesTable;
