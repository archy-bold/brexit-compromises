import React from 'react';
import data from '../data';
import { Bar } from 'react-chartjs-2';

const getColourForParty = (colour) => {
    switch (colour) {
        case 'Conservative':
            return '#0087DC';
        case 'Labour':
            return '#dc241f';
        case 'Scottish National Party':
            return '#FEF987';
        case 'Independent':
            return '#DDDDDD';
        case 'Liberal Democrat':
            return '#fdbb30';
        case 'Democratic Unionist Party':
            return '#D46A4C';
        case 'Plaid Cymru':
            return '#008142';
        case 'Green Party':
            return '#78b943';
        default:
            return '#DDDDDD';
    }
}

// Sort the parties
const parties = data.parties.sort((a, b) => b.num_mps - a.num_mps);
const partyIndexes = parties.reduce((acc, party, idx) => {
    acc[party.party] = idx;
    return acc;
}, []);

const VoteSplitsBarChart = (props) => {
    // Sort the data
    const barData = {
        labels: [],
        datasets: Array.from(new Array(parties.length), (val, index) => ({
            label: data.parties[index].party,
            backgroundColor: getColourForParty(parties[index].party),
            stack: 'Stack 0',
            data: Array(16).fill(0),
        })),
    };
    // Set the data based on votes.
    let highest = 0;
    for (const mp of data.ministers) {
        if (mp[props.col] > highest) {
            highest = mp[props.col];
        }
        barData.datasets[partyIndexes[mp.party]].data[mp[props.col]]++;
    }
    barData.labels = Array.from(new Array(highest + 1), (val, index) => index)

    return (
        <div className="vote-splits-bar-chart">
            <Bar
                data={barData}
                options={{
                    title: {
						display: true,
						text: props.title,
					},
					tooltips: {
    					mode: 'index',
    					intersect: false,
    				},
    				responsive: true,
    				scales: {
    					xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: props.label,
                            },
    						stacked: true,
    					}],
    					yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Number of MPs',
                            },
    						stacked: true,
    					}],
    				},
                }}
                />
        </div>
    );
};

export default VoteSplitsBarChart;
