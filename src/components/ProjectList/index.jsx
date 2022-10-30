//Imports
import { StyledSection, StyledList } from './style';
import Project from '../Project/index';
import projectList from '../../datas/projectList';

//Component
function ProjectList() {
    //Render
    return (
        <StyledSection>
            <h1>Projets principaux</h1>
            <StyledList>
                {projectList.map((project, index) => {
                    return <Project key={index} data={project} />;
                })}
            </StyledList>
            <span className="section-end-line"></span>
        </StyledSection>
    );
}

//Exports
export default ProjectList;
