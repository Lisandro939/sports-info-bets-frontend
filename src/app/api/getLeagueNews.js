export async function getLeagueNews (leagueName) {

    const res = await fetch(`https://sport-bets-backend.lisandroagustin321.workers.dev/news/${leagueName}`, { cache: 'no-store'}).then((res) => res.json())

    return res;
}