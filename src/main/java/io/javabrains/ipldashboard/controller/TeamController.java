package io.javabrains.ipldashboard.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.javabrains.ipldashboard.model.Team;
import io.javabrains.ipldashboard.repository.MatchRepository;
import io.javabrains.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    // We can use constructor injection for autowiring also
    // public TeamController(TeamRepository teamRepository) {
    // this.teamRepository = teamRepository;
    // }

    @RequestMapping(path = "/Team/{teamName}", method = RequestMethod.GET)

    public Team getTeam(@PathVariable("teamName") String teamName) {

        Team team = this.teamRepository.findByTeamName(teamName);

        // To remove domain data dependency from the controller we are creating an
        // elegant method name in repository and using it in the controller
        // Pageable pageable = PageRequest.of(0, 4);
        // team.setMatches(this.matchRepository.getByTeam1OrTeam2OrderByDateDesc(teamName,
        // teamName, pageable));

        team.setMatches(this.matchRepository.findLatestmatchesbyTeam(teamName, 4));
        // teamName));

        return team;
    }

}
