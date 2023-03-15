import Navbar from '@/components/header/NavbarLisandro'
import './globals.css'
import { getLeagueLogos } from "./api/getLeagueLogos"

export default async function RootLayout({ children }) {

  const logos = await getLeagueLogos()

  return (
    <html lang="es">
      <body>
        <Navbar logos={logos}/>
        {children}
      </body>
    </html>
  )
}
