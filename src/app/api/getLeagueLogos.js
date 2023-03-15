export async function getLeagueLogos () {
    
    const resLigaProfesionalArgentina = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/logos/ligaprofesionalargentina').then((res) => res.json())
    const resPremierLeague = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/logos/premierleague').then((res) => res.json())
    const resLaLiga = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/logos/laliga').then((res) => res.json())
    const resBrasileiraoSerieA = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/logos/brasileiraoseriea', {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
    const resBundesliga = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/logos/bundesliga').then((res) => res.json())
    const resLigue1 = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/logos/ligue1').then((res) => res.json())
    const resSerieA = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/logos/seriea').then((res) => res.json())

    const ligaProfesionalArgentina = resLigaProfesionalArgentina[0].logo
    const premierLeague = resPremierLeague[0].logo
    const laLiga = resLaLiga[0].logo
    const brasileiraoSerieA = resBrasileiraoSerieA[0].logo
    const bundesliga = resBundesliga[0].logo
    const ligue1 = resLigue1[0].logo
    const serieA = resSerieA[0].logo

    const objectWithLogos = {
        ligaProfesionalArgentina: ligaProfesionalArgentina,
        premierLeague: premierLeague,
        laLiga: laLiga,
        brasileiraoSerieA: brasileiraoSerieA,
        bundesliga: bundesliga,
        ligue1: ligue1,
        serieA: serieA
    }

    return objectWithLogos;
}