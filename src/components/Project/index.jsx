//Imports
import { StyledProject, StyledThumbnail, StyledTextZone, StyledRelease, StyledDescription, StyledLink } from './style';
import { useString } from '../../utils/hooks/index';

//Component
function Project({ data }) {
    function openProjectWebsite() {
        if (data.url !== 'none') {
            window.open(data.url, '_blank').focus();
        }
    }
    const seeProjectWebsiteString = useString(9);

    //Render
    return (
        <StyledProject
            url={data.url}
            onClick={() => {
                openProjectWebsite();
            }}
        >
            <StyledThumbnail src={data.thumbnail} alt={useString(14)} />
            <StyledTextZone>
                <h2>{data.name}</h2>
                <StyledRelease>{data.year}</StyledRelease>
                <StyledDescription>{useString(data.descriptionId)}</StyledDescription>
                {data.url === 'none' ? null : (
                    <StyledLink href={data.url} target="_blank">
                        <i className="fa-solid fa-link" />
                        <p>{seeProjectWebsiteString}</p>
                    </StyledLink>
                )}
            </StyledTextZone>
        </StyledProject>
    );
}
//Exports
export default Project;
