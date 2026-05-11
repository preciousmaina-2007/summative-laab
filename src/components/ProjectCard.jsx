function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:scale-105 transition">
      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{project.title}</h2>

        <p className="text-gray-600 mt-2">
          {project.description}
        </p>

        <span className="inline-block mt-4 bg-gray-200 px-3 py-1 rounded-full text-sm">
          {project.category}
        </span>

         <button
          onClick={() => deleteProject(project.id)}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          Delete Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;