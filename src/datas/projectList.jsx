import imgOMTBM2 from '../assets/omtbm_2_promotional.png';
import imgSuperMarioMEGALEVEL from '../assets/smml_promotional.png';
import imgOhmyfood from '../assets/omf_promotional.png';
import imgGroupomania from '../assets/groupomania_promotional.png';
/*
type :
    0 = video game
    1 = web site/app
url :
    none if no url available
    otherwise, working url to get more details
thumbnail :
    image displayed to represent the project
name
description :
    short description that ennumerates some features and technologies
year :
    the year of release of the project
*/

const projectList = [
    {
        type: 0,
        url: 'https://mbzmokka.github.io/SuperMarioMEGALEVELwebsite/',
        thumbnail: imgSuperMarioMEGALEVEL,
        name: 'Super Mario MEGALEVEL',
        description: `Un fangame Super Mario réalisé avec GameMaker, sur lequel je travail encore de temps à autres mais pas encore disponnible publiquement.`,
        year: 2020,
    },
    {
        type: 0,
        url: 'none',
        thumbnail: imgOMTBM2,
        name: 'O.M.T.B.M.2',
        description: `Mon 2ème jeu multijoueur en ligne. Un jeu de tir en vu du dessus. Un gros effort à été porté sur la synchronisation et les animations, comparé au 1er.`,
        year: 2021,
    },
    {
        type: 1,
        url: 'https://mbzmokka.github.io/ohmyfood/',
        thumbnail: imgOhmyfood,
        name: 'Ohmyfood!',
        description: `3ème projet de ma formation OpenClassrooms. Utilisation de SASS et d'animation CSS, ainsi que de formulaire HTML. C'est aussi là que j'ai été initié à Git et Github.`,
        year: 2022,
    },
    {
        type: 1,
        url: 'none',
        thumbnail: imgGroupomania,
        name: 'Groupomania',
        description: `Un réseau intranet complet qui conclua ma formation OpenClassrooms. Présence de fonctionnalités de modération et de récupération automatique des nouvelles publications.`,
        year: 2022,
    },
];

//Exports
export default projectList;
