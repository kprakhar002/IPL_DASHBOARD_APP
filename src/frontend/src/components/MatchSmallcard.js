import React from 'react'
import { TeamPage } from '../pages/TeamPage'
import { Link } from 'react-router-dom';

export const MatchSmallcard = ({teamName,match})=> {

    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    return (
        <div className="MatchSmallCard">
            {/* {match.team1} vs {match.team2} */}
            <h3>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h3>
            <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
    )
}


