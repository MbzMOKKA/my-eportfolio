//Imports
import { StyledSection, StyledList } from './style';
import Project from '../Project/index';
import projectList from '../../datas/projectList';
import { useString } from '../../utils/hooks/index';

//Component
function ProjectList() {
    //Render
    return (
        <StyledSection>
            <h1>{useString(6)}</h1>
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
