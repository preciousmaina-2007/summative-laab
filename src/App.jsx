import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Modern branding package for startups.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      category: "Branding",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Responsive website for a photographer.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Web Design",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  const deleteProject = (id) => {
    setProjects(
      projects.filter((project) => project.id !== id)
    );
  };


  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Creative Agency Showcase
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <ProjectForm addProject={addProject} />

        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;