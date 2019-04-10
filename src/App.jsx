import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import PartiesTable from './components/PartiesTable';

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
            <PartiesTable />
        </Container>
    </div>
);

export default App;
