import { useState } from "react";

function ProjectForm({ addProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addProject(formData);

    setFormData({
      title: "",
      description: "",
      image: "",
      category: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow mb-8"
    >
      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Project title"
          className="border p-3 rounded-lg"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />

        <textarea
          placeholder="Project description"
          className="border p-3 rounded-lg"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Image URL"
          className="border p-3 rounded-lg"
          value={formData.image}
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Category"
          className="border p-3 rounded-lg"
          value={formData.category}
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value,
            })
          }
        />

        <button className="bg-black text-white py-3 rounded-lg">
          Add Project
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;