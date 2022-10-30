//Imports
import { StyledProject, StyledThumbnail, StyledTextZone, StyledRelease, StyledDescription, StyledLink } from './style';

//Component
function Project({ data }) {
    function openProjectWebsite() {
        if (data.url !== 'none') {
            window.open(data.url, '_blank').focus();
        }
    }

    //Render
    return (
        <StyledProject
            onClick={() => {
                openProjectWebsite();
            }}
        >
            <StyledThumbnail src={data.thumbnail} alt="Miniature du projet" />
            <StyledTextZone>
                <h2>{data.name}</h2>
                <StyledRelease>{data.year}</StyledRelease>
                <StyledDescription>{data.description}</StyledDescription>
                {data.url === 'none' ? null : (
                    <StyledLink href={data.url} target="_blank">
                        <i className="fa-solid fa-link" />
                        <p>Voir le site du projet</p>
                    </StyledLink>
                )}
            </StyledTextZone>
        </StyledProject>
    );
}
//Exports
export default Project;
