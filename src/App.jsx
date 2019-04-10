import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
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
            </div>
        );
    }
}

export default App;
