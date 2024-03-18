import React, { useState,useEffect } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import EmptyProject from "./components/EmptyProject";
import SelectedProjects from "./components/SelectedProjects";
function App() {
  const [isAdd, setIsAdd] = useState(() => {
    const storedData = localStorage.getItem("projectData");
    return storedData ? JSON.parse(storedData) : {
      selectedProject: undefined,
      projects: [],
      tasks: [],
    };
  });

  useEffect(() => {
    localStorage.setItem("projectData", JSON.stringify(isAdd));
  }, [isAdd]);

  const handleAddTask = (text) => {
    setIsAdd((prevProject) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevProject.selectedProject,
        id: taskId,
      };
      return {
        ...prevProject,
        tasks: [newTask, ...prevProject.tasks],
      };
    });
  };
  const handleDeleteTask = (id) => {
    setIsAdd((prevProject) => {
      return {
        ...prevProject,
        tasks: prevProject.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  };

  const handleSelectProject = (id) => {
    setIsAdd((prevProject) => {
      return {
        ...prevProject,
        selectedProject: id,
      };
    });
  };
  const handleAddProject = () => {
    setIsAdd((prevProject) => {
      return {
        ...prevProject,
        selectedProject: null,
      };
    });
  };

  const hanldeGetProject = (projectData) => {
    setIsAdd((prevProject) => {
      const addedProjects = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevProject,
        projects: [...prevProject.projects, addedProjects],
      };
    });
  };
  const handleCancel = () => {
    setIsAdd((prevProject) => {
      return {
        ...prevProject,
        selectedProject: undefined,
      };
    });
  };
  const handleDeleteProject = () => {
    setIsAdd((prevProject) => {
      return {
        ...prevProject,
        selectedProject: undefined,
        projects: prevProject.projects.filter(
          (project) => project.id !== prevProject.selectedProject
        ),
      };
    });
  };
  const selectedProject = isAdd.projects.find(
    (project) => project.id === isAdd.selectedProject
  );
  let content = (
    <SelectedProjects
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={isAdd.tasks}
    />
  );
  if (isAdd.selectedProject === null) {
    content = <NewProject onSet={hanldeGetProject} onCancel={handleCancel} />;
  } else if (isAdd.selectedProject === undefined) {
    content = <EmptyProject onAdd={handleAddProject} />;
  } else {
    content;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAdd={handleAddProject}
        projects={isAdd.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={isAdd.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
