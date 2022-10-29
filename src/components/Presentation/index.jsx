//Imports
import ImgMe from '../../assets/me.jpg';
import ImgMyAvatar from '../../assets/heavy_dev_cup_icon.png';
import { StyledSection, StyledInfos, StyledPhotoContainer, StyledPhoto, StyledAvatar, StyledTitle, StyledDesc } from './style';
import 'react-lazy-load-image-component/src/effects/blur.css';

//Component
function Presentation() {
    return (
        <>
            <StyledSection>
                <StyledInfos>
                    <StyledPhotoContainer>
                        <StyledPhoto alt="C'est moi" src={ImgMe} loading="lazy" />
                        <StyledAvatar alt="C'est mon avatar" src={ImgMyAvatar} loading="lazy" />
                    </StyledPhotoContainer>
                    <StyledTitle>Je suis...</StyledTitle>
                    <div>
                        <StyledDesc>
                            <em>Dylan Pean</em>, sous le pseudo <em>M.O.K.K.A.</em>...
                        </StyledDesc>
                        <StyledDesc>
                            Développeur indépendant de jeu vidéo depuis 6 ans, j'utilise actuellement le moteur de jeu <em>Game Maker</em> pour réaliser mes créations...
                        </StyledDesc>
                        <StyledDesc>
                            Développeur web récemment diplomé, je sais utiliser <em>ReactJS</em>, <em>NodeJS</em>, <em>ExpressJS</em>, <em>MongoDB</em> et <em>SASS</em>...
                        </StyledDesc>
                        <StyledDesc>
                            Je suis désormais à la recherche d'une <em>alternance</em> ou d'un <em>CDI</em> en tant que développeur web <em>front-end</em> ou <em>fullstack</em>.
                        </StyledDesc>
                    </div>
                </StyledInfos>
                <span className="section-end-line"></span>
            </StyledSection>
        </>
    );
}

//Exports
export default Presentation;
