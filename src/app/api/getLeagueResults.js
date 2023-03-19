export async function getLeagueResults (leagueName) {

    const res = await fetch(`https://sport-bets-backend.lisandroagustin321.workers.dev/results/${leagueName}`, { cache: 'no-store'}).then((res) => res.json())

    return res;
}