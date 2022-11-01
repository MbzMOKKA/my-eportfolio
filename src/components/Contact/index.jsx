//Imports
import { StyledFooter, StyledFooterContent, StyledContactLink } from './style';
import { useString } from '../../utils/hooks/index';

//Component
function Contact() {
    //Render
    return (
        <StyledFooter>
            <h1>{useString(7)}</h1>
            <StyledFooterContent>
                <StyledContactLink>
                    <a href="https://www.linkedin.com/in/dylanpean/" target="_blanck">
                        <i className="fa-brands fa-linkedin" />
                        <p>{useString(8)}</p>
                    </a>
                </StyledContactLink>
                <StyledContactLink>
                    <a href="tel:06-38-93-16-19">
                        <i className="fa-solid fa-square-phone" />
                        <p>06-38-93-16-19</p>
                    </a>
                </StyledContactLink>
            </StyledFooterContent>
        </StyledFooter>
    );
}

//Exports
export default Contact;
