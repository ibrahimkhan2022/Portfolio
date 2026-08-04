import Background from '../components/Background'
import Nav from '../components/Nav'
import RobotCompanion from '../components/RobotCompanion'
import Hero from '../components/sections/Hero'
import Hobbies from '../components/sections/Hobbies'
import Projects from '../components/sections/Projects'
import ClientWork from '../components/sections/ClientWork'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <RobotCompanion />
      <main className="relative mx-auto max-w-[1400px]">
        <Hero />
        <Hobbies />
        <Projects />
        <ClientWork />
        <Contact />
      </main>
    </>
  )
}
