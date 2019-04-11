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
                    <Nav.Link href="#analysis">Conclusions</Nav.Link>
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
                    column showing the ratio of votes for to votes against that
                    the average MP voted for.
                </p>
                <p>
                    The default sorting (by for:against ratio) highlights which parties
                    were more likely to vote for options than against.
                </p>
                <p>All averages are rounded to the nearest two decimal points.</p>
                <PartiesTable />
            </section>

            <section id="votes-by-minister">
                <h2>Votes by Minister</h2>
                <p>
                    This table shows the voting breakdown by minister with the final
                    column showing the ratio of votes for to votes against that
                    the MP voted for.
                </p>
                <p>
                    The default sorting (by for:against ratio) highlights which MP
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

            <section id="analysis">
                <h2>Conclusions</h2>
                <p>
                    Having analysed the data there were some interesting conclusions
                    to draw, which I outlined in a series of tweets.
                </p>
                <div className="tweets">
                    <blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">So I&#39;ve analysed the voting data for all MPs on the <a href="https://twitter.com/hashtag/meaningfulvote?src=hash&amp;ref_src=twsrc%5Etfw">#meaningfulvote</a> and <a href="https://twitter.com/hashtag/IndicativeVotes?src=hash&amp;ref_src=twsrc%5Etfw">#IndicativeVotes</a> and surprisingly, only one MP has voted down all options, and that&#39;s <a href="https://twitter.com/jarrowstevemp?ref_src=twsrc%5Etfw">@jarrowstevemp</a></p>&mdash; Simon Archer (@archy_bold) <a href="https://twitter.com/archy_bold/status/1113150799897559041?ref_src=twsrc%5Etfw">2 avril 2019</a></blockquote>
                    <blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">The <a href="https://twitter.com/duponline?ref_src=twsrc%5Etfw">@duponline</a> only supported the &#39;Contingent preferential arrangements&#39; option, which was an ERG motion. <a href="https://twitter.com/hashtag/IndicativeVotes?src=hash&amp;ref_src=twsrc%5Etfw">#IndicativeVotes</a></p>&mdash; Simon Archer (@archy_bold) <a href="https://twitter.com/archy_bold/status/1113156005788028929?ref_src=twsrc%5Etfw">2 avril 2019</a></blockquote>
                    <blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">There were 5 Conservative MPs and one Labour MP who only voted for one option but against the majority:<br />Theresa Villiers | Conservative<br />John Redwood | Conservative<br />Anne Marie Morris | Conservative<br />Douglas Ross | Conservative<br />Mr John Baron | Conservative<br />Graham Stringer | Labour</p>&mdash; Simon Archer (@archy_bold) <a href="https://twitter.com/archy_bold/status/1113159550377525248?ref_src=twsrc%5Etfw">2 avril 2019</a></blockquote>
                    <blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Interestingly <a href="https://twitter.com/Plaid_Cymru?ref_src=twsrc%5Etfw">@Plaid_Cymru</a> were most likely to compromise on <a href="https://twitter.com/hashtag/Brexit?src=hash&amp;ref_src=twsrc%5Etfw">#Brexit</a>, with their MPs voting for an average of 6 MV/IV options vs 5 against.<a href="https://twitter.com/UKLabour?ref_src=twsrc%5Etfw">@UKLabour</a> were the only other party to vote for more than against (ratio of 7.95:7.13)</p>&mdash; Simon Archer (@archy_bold) <a href="https://twitter.com/archy_bold/status/1113179658080718853?ref_src=twsrc%5Etfw">2 avril 2019</a></blockquote>
                    <blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Unsurprising the <a href="https://twitter.com/duponline?ref_src=twsrc%5Etfw">@duponline</a> were by far the least likely to compromise with a ratio of 1:11.1 (votes for <a href="https://twitter.com/hashtag/Brexit?src=hash&amp;ref_src=twsrc%5Etfw">#Brexit</a> options vs against)<br />Next were the <a href="https://twitter.com/TheGreenParty?ref_src=twsrc%5Etfw">@TheGreenParty</a> at 4:11<a href="https://twitter.com/Conservatives?ref_src=twsrc%5Etfw">@Conservatives</a> 3.94:9.18<br />Independents 4.4:8.09<a href="https://twitter.com/LibDems?ref_src=twsrc%5Etfw">@LibDems</a> 4.27:6.36<a href="https://twitter.com/theSNP?ref_src=twsrc%5Etfw">@theSNP</a> 4.6:5.86</p>&mdash; Simon Archer (@archy_bold) <a href="https://twitter.com/archy_bold/status/1113179659271892992?ref_src=twsrc%5Etfw">2 avril 2019</a></blockquote>
                    <blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Just taken another look at this data and the <a href="https://twitter.com/Conservative?ref_src=twsrc%5Etfw">@Conservative</a> MP <a href="https://twitter.com/Sandbach?ref_src=twsrc%5Etfw">@Sandbach</a> was most willing to compromise on <a href="https://twitter.com/hashtag/Brexit?src=hash&amp;ref_src=twsrc%5Etfw">#Brexit</a>, voting for 4 options in each of the <a href="https://twitter.com/hashtag/indicativevotes?src=hash&amp;ref_src=twsrc%5Etfw">#indicativevotes</a> and for May&#39;s deal.</p>&mdash; Simon Archer (@archy_bold) <a href="https://twitter.com/archy_bold/status/1114108604305555456?ref_src=twsrc%5Etfw">5 avril 2019</a></blockquote>
                    <blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">The following MPs voted &#39;aye&#39; on ten of the <a href="https://twitter.com/hashtag/meaningfulvote?src=hash&amp;ref_src=twsrc%5Etfw">#meaningfulvote</a> <a href="https://twitter.com/hashtag/indicativevotes?src=hash&amp;ref_src=twsrc%5Etfw">#indicativevotes</a> options.<br />Sir Mark Hendrick | Labour (Co-op)<br />Richard Harrington | Conservative<br />Mr Kenneth Clarke | Conservative<br />Mr Edward Vaizey | Conservative<br />Stephen Lloyd | Independent<br />Nick Boles | Independent</p>&mdash; Simon Archer (@archy_bold) <a href="https://twitter.com/archy_bold/status/1114109289449369604?ref_src=twsrc%5Etfw">5 avril 2019</a></blockquote>
                    <blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">No real surprise to see the likes of <a href="https://twitter.com/NickBoles?ref_src=twsrc%5Etfw">@NickBoles</a>, <a href="https://twitter.com/edvaizey?ref_src=twsrc%5Etfw">@edvaizey</a> and <a href="https://twitter.com/KenClarkeMP?ref_src=twsrc%5Etfw">@KenClarkeMP</a> on that list. But good to see Preston MP <a href="https://twitter.com/MpHendrick?ref_src=twsrc%5Etfw">@MpHendrick</a> on there too.</p>&mdash; Simon Archer (@archy_bold) <a href="https://twitter.com/archy_bold/status/1114109852303937537?ref_src=twsrc%5Etfw">5 avril 2019</a></blockquote>
                </div>
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
