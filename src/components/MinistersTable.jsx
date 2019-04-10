import React from 'react';
import ReactTable from 'react-table';
import NumberCell from  './NumberCell';
import data from '../data';

const PartyFilter = ({ filter, onChange }) =>(
    <select
        onChange={event => onChange(event.target.value)}
        style={{ width: "100%" }}
        value={filter ? filter.value : "all"}
        >
        <option value="all">Show All</option>
        <option value="Conservative">Conservative</option>
        <option value="Labour">Labour</option>
        <option value="Scottish National Party">Scottish National Party</option>
        <option value="Independent">Independent</option>
        <option value="Liberal Democrat">Liberal Democrat</option>
        <option value="Democratic Unionist Party">Democratic Unionist Party</option>
        <option value="Plaid Cymru">Plaid Cymru</option>
        <option value="Green Party">Green Party</option>
    </select>
);

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
        filterMethod: (filter, row) => row[filter.id].toLowerCase().indexOf(filter.value.toLowerCase()) > -1,
    },
    {
        Header: 'Party',
        accessor: 'party',
        filterMethod: (filter, row) => {
            if (filter.value === "all") {
                return true;
            } else {
                return filter.value === row[filter.id];
            }
        },
        Filter: PartyFilter,
    },
    {
        Header: 'Votes For',
        accessor: 'ayes',
    },
    {
        Header: 'Votes Against',
        accessor: 'nays',
    },
    {
        id: 'ayes_nays_ratio',
        Header: 'Ratio For:Against',
        accessor: m => m.nays === 0 ? 0 : m.ayes / m.nays,
        Cell: props => props.original.nays === 0 ? 'N/A' : <NumberCell {...props} />,
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
            filterable={true}
            />
    </div>
);

export default MinistersTable;
