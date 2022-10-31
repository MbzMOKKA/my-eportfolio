//Imports
import styled from 'styled-components';

//Exports
export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;
export const StyledFooterContent = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 44px;
    padding-bottom: 128px;
`;
export const StyledContactLink = styled.li`
    background-color: rgba(255, 255, 255, 0.1);
    list-style: none;
    margin-left: 6%;
    margin-right: 6%;
    margin-bottom: 24px;
    border-radius: 10px;
    a {
        height: 64px;
        display: flex;
        flex-direction: row;
        flex-wrap;no-wrap;
        justify-content; flex-start;
        align-items:center;
        padding-left: 14px;
        padding-right: 14px;
        text-decoration: none;
        i{
            font-size: 36px;
            margin-right: 12px;
        }
        p{
            font-size: 20px;
        }
    }
`;
