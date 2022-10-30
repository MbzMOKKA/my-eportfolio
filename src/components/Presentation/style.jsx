//Imports
import styled from 'styled-components';

//Exports
export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 48px;
`;

export const StyledInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
`;

export const StyledPhotoContainer = styled.div`
    position: relative;
`;

export const StyledPhoto = styled.img`
    border-radius: 100%;
    width: 50vw;
    height: 50vw;
    max-width: 250px;
    max-height: 250px;
    box-shadow: 3px 6px 9px rgba(0, 0, 0, 0.5);
`;

export const StyledAvatar = styled.img`
    position: absolute;
    bottom: 0;
    right: -6vw;
    border-radius: 100%;
    width: 22vw;
    height: 22vw;
    max-width: 100px;
    max-height: 100px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.5);
`;

export const StyledDesc = styled.p`
    margin-top: 14px;
    text-align: center;
    line-height: 1.3;
`;
