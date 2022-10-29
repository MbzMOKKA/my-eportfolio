//Imports
import { StyledArea } from './style';

//Component
function CollapsibleArea({ id, children }) {
    return (
        <StyledArea id={id}>
            <div className="collapsible-content">{children}</div>
        </StyledArea>
    );
}

//Exports
export default CollapsibleArea;
