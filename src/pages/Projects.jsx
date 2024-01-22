import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsContext, ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
  return (
    <ProjectsProvider>
      <div className="container mx-auto">
        <ProjectsGrid context={ProjectsContext} />
      </div>
    </ProjectsProvider>
  );
};

export default Projects;
