import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import PartiesTable from './components/PartiesTable';
import MinistersTable from './components/MinistersTable';

const App = () => (
    <div className="App">
        <Jumbotron>
            <Container>
                <h1>Did my MP Compromise on Brexit?</h1>
                <p>
                    Parliament have had a number of opportunites to vote on
                    Brexit options in the three meaningful votes and two
                    rounds of indicative votes.
                </p>
                <p>
                    Analysing how MPs voted on these motions allows us to
                    see which MPs are more willing to compromise on Brexit.
                </p>
            </Container>
        </Jumbotron>
        <Container>
            <div className="mb-4" id="votes-by-party">
                <h2>Votes by Party</h2>
                <p>
                    This table shows the voting breakdown by party with the final
                    column showing the ratio of ayes to nays that the average MP
                    voted for.
                </p>
                <p>
                    The default sorting (by aye:nay ratio) highlights which parties
                    were more likely to vote for options than against.
                </p>
                <p>All averages are rounded to the nearest two decimal points.</p>
                <PartiesTable />
            </div>

            <div className="mb-4" id="votes-by-minister">
                <h2>Votes by Minister</h2>
                <p>
                    This table shows the voting breakdown by minister with the final
                    column showing the ratio of ayes to nays that the MP voted for.
                </p>
                <p>
                    The default sorting (by aye:nay ratio) highlights which MP
                    was more likely to vote for options than against.
                </p>
                <p>All averages are rounded to the nearest two decimal points.</p>
                <MinistersTable />
            </div>
        </Container>
    </div>
);

export default App;
