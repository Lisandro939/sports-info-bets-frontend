export async function getLeagueTransfers (leagueName) {

    const res = await fetch(`https://sport-bets-backend.lisandroagustin321.workers.dev/transfers/${leagueName}`, { cache: 'no-store'}).then((res) => res.json())

    return res;
}