//Imports
import { StyledFooter, StyledFooterContent } from './style';

//Component
function Footer() {
    //Render
    return (
        <StyledFooter>
            <StyledFooterContent>
                <a href="https://www.linkedin.com/in/dylanpean/" target="_blanck">
                    <i className="fa-brands fa-linkedin" />
                    LinkedIn
                </a>
            </StyledFooterContent>
        </StyledFooter>
    );
}

//Exports
export default Footer;
