/*
//Imports
import { useState, useEffect, useRef } from 'react';
import { StyledSection, StyledProjectDisplayer, StyledProjectNav } from './style';
import Project from '../Project/index';
import projectList from '../../datas/projectList';

//Component
function Projects() {
    const [index, setIndex] = useState(0); //index of the currently watched project
    /onst [distanceScrolled, setDistanceScrolled] = useState(0);
    const [lastClientX, setLastClientX] = useState(0);
    const displayerRef = useRef();

    function changeProject(newDesiredIndex) {
        setIndex(newDesiredIndex);
    }

    //Scrolling through projects
    useEffect(() => {
        function onTouchStart(e) {
            setDistanceScrolled(0);
            setLastClientX(e.touches[0].clientX);
        }
        function onTouchMove(e) {
            setDistanceScrolled(e.touches[0].clientX - lastClientX);
        }
        function onTouchEnd() {
            if (Math.abs(distanceScrolled) > window.innerWidth * 0.25) {
                changeProject(index + -1 * Math.sign(distanceScrolled));
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
*/
