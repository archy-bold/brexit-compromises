import React from 'react';
import { Container, Jumbotron, Navbar, Nav } from 'react-bootstrap';
import PartiesTable from './components/PartiesTable';
import MinistersTable from './components/MinistersTable';

const App = () => (
    <div className="App">
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="#home">Jump to</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#votes-by-party">By Party</Nav.Link>
                    <Nav.Link href="#votes-by-minister">By Minister</Nav.Link>
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
                <p>
                    Note: cabinet ministers were whipped to abstain in the indicative
                    votes so it was not possible to calculate a ratio for these
                    ministers.
                </p>
                <p>All averages are rounded to the nearest two decimal points.</p>
                <MinistersTable />
            </div>

            <div className="mb-4" id="credits">
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
                <small>&copy; 2019 Simon Archer</small>
            </div>
        </Container>
    </div>
);

export default App;
