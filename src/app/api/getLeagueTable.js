export async function getLeagueTable (leagueName) {

    const res = await fetch(`https://sport-bets-backend.lisandroagustin321.workers.dev/leaderboard/${leagueName}`, { cache: 'no-store'}).then((res) => res.json())

    return res;
}