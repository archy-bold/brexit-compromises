import React from 'react';
import { Container, Jumbotron, Navbar, Nav } from 'react-bootstrap';
import PartiesTable from './components/PartiesTable';
import MinistersTable from './components/MinistersTable';
import VoteSplitsBarChart from './components/VoteSplitsBarChart';

const App = () => (
    <div className="App">
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">Jump to</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#ayes-nays-split">Party Splits</Nav.Link>
                    <Nav.Link href="#votes-by-party">Parties</Nav.Link>
                    <Nav.Link href="#votes-by-minister">Ministers</Nav.Link>
                    <Nav.Link href="#credits">Credits</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Jumbotron id="home">
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
            <section id="ayes-nays-split">
                <h2>For/Against Votes Split by Party</h2>
                <p>
                    These charts show how the number of motions that were voted
                    for or against split down party lines.
                </p>
                <p>
                    There were 15 individual votes and parties that votes for more
                    motions than they would vote against would be more willing to
                    compromise on Brexit options.
                </p>
                <VoteSplitsBarChart col="ayes" tooltiptTitle="Votes For" label="Number of Options Voted For" title="Party Split by Options Voted For" />
                <VoteSplitsBarChart col="nays" tooltiptTitle="Votes Against" label="Number of Options Voted Againt" title="Party Split by Options Voted Against" />
            </section>
            <section id="votes-by-party">
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
            </section>

            <section id="votes-by-minister">
                <h2>Votes by Minister</h2>
                <p>
                    This table shows the voting breakdown by minister with the final
                    column showing the ratio of ayes to nays that the MP voted for.
                </p>
                <p>
                    The default sorting (by aye:nay ratio) highlights which MP
                    was more likely to vote for options than against.
                </p>
                <p>
                    Note: cabinet ministers were whipped to abstain in the indicative
                    votes so it was not possible to calculate a ratio for these
                    ministers.
                </p>
                <p>All averages are rounded to the nearest two decimal points.</p>
                <MinistersTable />
            </section>

            <section id="credits">
                <h2>Credits</h2>
                <p>
                    Website, data collection and analysis by&nbsp;
                    <a href="https://archybold.com" target="_blank" rel="noopener noreferrer">
                        Simon Archer
                    </a>.
                </p>
                <p>
                    Find me on&nbsp;
                    <a href="https://twitter.com/archy_bold" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    &nbsp;and the full code is available on&nbsp;
                    <a href="https://github.com/archy-bold/brexit-compromises" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </p>
                <p>
                    Data collected from the&nbsp;
                    <a href="http://explore.data.parliament.uk/index.html?endpoint=endpoint/commonsdivisions" target="_blank" rel="noopener noreferrer">
                        data.parliament.uk website
                    </a>.
                </p>
                <small>&copy; 2019 Simon Archer</small>
            </section>
        </Container>
    </div>
);

export default App;
