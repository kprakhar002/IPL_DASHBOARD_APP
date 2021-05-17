import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallcard } from '../components/MatchSmallcard'
//This component will go to the new branch created out of the main branch
export const TeamPage = () => {

    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();

    useEffect(() => {
        // Effect
        const fetchMatches = async () => {
            const response = await fetch(`http://localhost:8080/Team/${teamName}`);
            const data = await response.json();
            // console.log(data);
            setTeam(data);
        };
        fetchMatches();
    }, [teamName]);

    if (!team || !team.teamName) {
        return <h1>Team not Found</h1>
    }

    return (

        <div className="TeamPage">
            {console.log(team.matches)}
            <h1>{team.teamName}</h1>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}></MatchDetailCard>

            {
                team.matches.slice(1).map(match => <MatchSmallcard teamName={team.teamName} match={match}></MatchSmallcard>)
            }
        </div>
    )
}

