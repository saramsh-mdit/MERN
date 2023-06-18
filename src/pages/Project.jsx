import MainWrapper from "../layout/main";

import style from "./index.module.scss";
import Title from "./../components/Title";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
  return (
    <MainWrapper>
      <div className={style.project_bg}>
        <Title>Project</Title>
        <ProjectCard
          isLeft
          title="E Commerce"
        />
        <ProjectCard title="Blog Website" />
      </div>
    </MainWrapper>
  );
};

export default ProjectPage;
