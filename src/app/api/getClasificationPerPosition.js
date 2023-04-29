export function clasificationPerPosition (league) {

    let championsLeague = []
    let europeLeague = []
    let europeConferenceLeague = []
    let relegationElimination = []
    let relegation = []

    if (league === 'laliga') {
        championsLeague = [1,2,3,4];
        europeLeague = [5];
        europeConferenceLeague = [6];
        relegationElimination = [];
        relegation = [18,19,20]
    } else if (league === 'premierleague') {
        championsLeague = [1,2,3,4];
        europeLeague = [5];
        europeConferenceLeague = [];
        relegationElimination = [];
        relegation = [18,19,20]
    } else if (league === 'bundesliga') {
        championsLeague = [1,2,3,4];
        europeLeague = [5];
        europeConferenceLeague = [6];
        relegationElimination = [16];
        relegation = [17,18]
    } else if (league === 'ligue1') {
        championsLeague = [1,2,3];
        europeLeague = [4];
        europeConferenceLeague = [5];
        relegationElimination = [];
        relegation = [17,18,19,20]
    } else if ( league === 'seriea') {
        championsLeague = [1,2,3,4];
        europeLeague = [5];
        europeConferenceLeague = [6];
        relegationElimination = [];
        relegation = [18,19,20]
    }else {
        championsLeague = [];
        europeLeague = [];
        europeConferenceLeague = [];
        relegationElimination = [];
        relegation = []
    }

    return ({
        champions_league: championsLeague,
        europe_league: europeLeague,
        europe_conference_league: europeConferenceLeague,
        relegation_elimination: relegationElimination,
        relegation: relegation
    })
}