//Imports
import { useState, useEffect, useRef } from 'react';
import { StyledSection, StyledProjectDisplayer } from './style';

//Component
function Projects() {
    const [index, setIndex] = useState(0); //index of the currently watched project
    const [distanceScrolled, setDistanceScrolled] = useState(0);
    const [lastClientX, setLastClientX] = useState(0);
    const displayerRef = useRef();

    //Scrolling through projects
    useEffect(() => {
        function onTouchStart(e) {
            setDistanceScrolled(0);
            setLastClientX(e.touches[0].clientX);
        }
        function onTouchMove(e) {
            setDistanceScrolled(e.touches[0].clientX - lastClientX);
        }
        function onTouchEnd(e) {
            if (Math.abs(distanceScrolled) > window.innerWidth * 0.2) {
                setIndex(index + -1 * Math.sign(distanceScrolled));
            }
        }

        const displayerDOM = displayerRef.current;
        displayerDOM.addEventListener('touchstart', onTouchStart);
        displayerDOM.addEventListener('touchmove', onTouchMove);
        displayerDOM.addEventListener('touchend', onTouchEnd);
        return () => {
            displayerDOM.removeEventListener('touchstart', onTouchStart);
            displayerDOM.removeEventListener('touchmove', onTouchMove);
            displayerDOM.removeEventListener('touchend', onTouchEnd);
        };
    }, [displayerRef, lastClientX, distanceScrolled, index]);

    //Render
    return (
        <StyledSection>
            <h1>Mes réalisations</h1>
            <StyledProjectDisplayer ref={displayerRef}>
                <p>INDEX : {index}</p>
            </StyledProjectDisplayer>
            <span className="section-end-line"></span>
        </StyledSection>
    );
}

//Exports
export default Projects;
