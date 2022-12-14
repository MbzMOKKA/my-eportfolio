//Imports
import styled from 'styled-components';
import colors from '../../utils/style/colors';

//Exports
export const StyledProject = styled.li`
    background-color: rgba(255, 255, 255, 0.05);
    list-style: none;
    width: 100%;
    border-top: 1px rgba(255, 255, 255, 0.5) solid;
    border-bottom: 1px rgba(255, 255, 255, 0.5) solid;
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 58px;
    box-shadow: 0px 0px 10px ${colors.primary};
    ${({ url }) =>
        url !== 'none'
            ? `
    :hover{
        cursor: pointer;
    }
    `
            : null};
    @media screen and (min-width: 620px) {
        width: 40%;
        max-width: 620px;
        margin-left 18px;
        margin-right 18px;
    }
`;
export const StyledThumbnail = styled.img`
    width: 100%;
    height: 178px;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    box-shadow: 0px 0px 5px black;
    margin-bottom: 18px;
    @media screen and (min-width: 1024px) {
        height: 300px;
    }
`;
export const StyledTextZone = styled.div`
    padding-left: 4%;
    padding-right: 4%;
`;
export const StyledRelease = styled.p`
    margin-top: 6px;
    margin-bottom: 12px;
    padding-left: 8px;
    font-size: 16px;
    font-style: italic;
`;
export const StyledDescription = styled.p`
    color: rgba(240, 240, 240, 0.75);
    line-height: 1.4;
`;
export const StyledLink = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    padding: 6px;
    text-decoration: none;
    display: flex;
    margin-top: 18px;
    i {
        margin-right: 8px;
    }
    p {
        font-weight: bold;
    }
`;
