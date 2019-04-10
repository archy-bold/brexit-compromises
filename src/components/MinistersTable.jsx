import React from 'react';
import ReactTable from 'react-table';
import NumberCell from  './NumberCell';
import data from '../data';

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Party',
        accessor: 'party',
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
        id: 'ayes_nays_ratio',
        Header: 'Ratio Ayes:Nays',
        accessor: m => m.nays === 0 ? 'N/A' : m.ayes / m.nays,
        Cell: NumberCell,
    },
];

const MinistersTable = () => (
    <div>

        <ReactTable
            data={data.ministers}
            columns={columns}
            defaultSorted={[
                {
                    id: "ayes_nays_ratio",
                    desc: true,
                }
            ]}
            defaultPageSize={700}
            showPagination={false}
            minRows={0}
            />
    </div>
);

export default MinistersTable;
