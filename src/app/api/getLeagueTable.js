export async function getLeagueTable (leagueName) {

    const resLigaProfesionalArgentina = await fetch(`https://sport-bets-backend.lisandroagustin321.workers.dev/leaderboard/${leagueName}`, { cache: 'no-store'}).then((res) => res.json())

    return resLigaProfesionalArgentina;
}