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
descriptionId :
    id of the short description that ennumerates some features and technologies
year :
    the year of release of the project
*/

const projectList = [
    {
        type: 0,
        url: 'https://mbzmokka.github.io/SuperMarioMEGALEVELwebsite/',
        thumbnail: imgSuperMarioMEGALEVEL,
        name: 'Super Mario MEGALEVEL',
        descriptionId: 10,
        year: 2020,
    },
    {
        type: 0,
        url: 'none',
        thumbnail: imgOMTBM2,
        name: 'O.M.T.B.M.2',
        descriptionId: 11,
        year: 2021,
    },
    {
        type: 1,
        url: 'https://mbzmokka.github.io/ohmyfood/',
        thumbnail: imgOhmyfood,
        name: 'Ohmyfood!',
        descriptionId: 12,
        year: 2022,
    },
    {
        type: 1,
        url: 'none',
        thumbnail: imgGroupomania,
        name: 'Groupomania',
        descriptionId: 13,
        year: 2022,
    },
];

//Exports
export default projectList;
