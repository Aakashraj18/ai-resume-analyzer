import { usePuterStore } from "~/lib/puter";
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();


    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Application Dashboard & Resume Insights</h1>
        <h2>Monitor your progress and view AI-generated analysis for every submission.</h2>
      </div>

    {resumes.length > 0 && (
    <div className="resume-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
    {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume} />
    ))}
    </div>
    )}
    </section>
  </main>
}
