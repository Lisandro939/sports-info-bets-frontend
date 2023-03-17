export async function getOnlyLeagueLogo (leagueName) {

    const resLogo = await fetch(`https://sport-bets-backend.lisandroagustin321.workers.dev/logos/${leagueName}`).then((res) => res.json())

    return resLogo[0].logo;

}