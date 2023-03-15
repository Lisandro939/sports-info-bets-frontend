export async function getGeneralNews () {

    const resLigaProfesionalArgentina = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/news/ligaprofesionalargentina', {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
    const resPremierLeague = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/news/premierleague', {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
    const resLaLiga = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/news/laliga', {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
    const resBrasileiraoSerieA = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/news/brasileiraoseriea', {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
    const resBundesliga = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/news/bundesliga', {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
    const resLigue1 = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/news/ligue1', {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())
    const resSerieA = await fetch('https://sport-bets-backend.lisandroagustin321.workers.dev/news/seriea', {headers: {'Cache-Control': 'no-cache'}}).then((res) => res.json())

    const arrayWithGeneralNews = []

    arrayWithGeneralNews.push(resLigaProfesionalArgentina[0])
    arrayWithGeneralNews.push(resPremierLeague[0])
    arrayWithGeneralNews.push(resLaLiga[0])
    arrayWithGeneralNews.push(resBrasileiraoSerieA[0])
    arrayWithGeneralNews.push(resBundesliga[0])
    arrayWithGeneralNews.push(resLigue1[0])
    arrayWithGeneralNews.push(resSerieA[0])

    return arrayWithGeneralNews;
}