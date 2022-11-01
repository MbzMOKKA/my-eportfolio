//Imports
import { StyledContainer, StyledButton } from './style';
import { useContext } from 'react';
import { LanguageContext } from '../../utils/context';
import { useString } from '../../utils/hooks/index';

//Component
function Settings() {
    const { switchLanguage } = useContext(LanguageContext);
    //Render
    return (
        <StyledContainer>
            <StyledButton
                onClick={() => {
                    switchLanguage();
                }}
            >
                <i className="fa-solid fa-earth-americas" />
                {useString(1)}
            </StyledButton>
        </StyledContainer>
    );
}
//Exports
export default Settings;
