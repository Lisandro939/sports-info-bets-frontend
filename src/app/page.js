import GeneralNews from "@/components/homepage/GeneralNewsLisandro";
import Welcome from "@/components/homepage/WelcomeLisandro";

export default async function Home() {
  
  return (
    <div className="flex flex-col h-full w-screen">
      <Welcome />
      <GeneralNews />
    </div>
  )
}
