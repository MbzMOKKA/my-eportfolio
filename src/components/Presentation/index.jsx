//Imports
import ImgMe from '../../assets/me.jpg';
import ImgMyAvatar from '../../assets/heavy_dev_cup_icon.png';
import { StyledSection, StyledInfos, StyledPhotoContainer, StyledPhoto, StyledAvatar, StyledDesc } from './style';
import { useString } from '../../utils/hooks/index';

//Component
function Presentation() {
    return (
        <StyledSection>
            <StyledInfos>
                <StyledPhotoContainer>
                    <StyledPhoto alt={useString(15)} src={ImgMe} />
                    <StyledAvatar alt={useString(16)} src={ImgMyAvatar} />
                </StyledPhotoContainer>
                <h1>{useString(0)}</h1>
                <div>
                    <StyledDesc>{useString(2)}</StyledDesc>
                    <StyledDesc>{useString(3)}</StyledDesc>
                    <StyledDesc>{useString(4)}</StyledDesc>
                    <StyledDesc>{useString(5)}</StyledDesc>
                </div>
            </StyledInfos>
            <span className="section-end-line"></span>
        </StyledSection>
    );
}

//Exports
export default Presentation;
