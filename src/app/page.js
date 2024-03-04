import Technologies from "@/components/Technologies";
import About from "../components/About";
import JobExperience from "../components/JobExperience";
import Presentation from "../components/Presentation";
import Projects from "@/components/Projects";

export const metadata = {
  title: {
    default: "Facundo Sanchez | Frontend Developer",
  },
};

export default function Home() {
  return (
    <main className="app-container">
      <Presentation />

      <JobExperience />

      <About />

      <Technologies />

      <Projects />
    </main>
  );
}
