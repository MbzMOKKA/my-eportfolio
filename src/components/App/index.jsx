//Imports
import { useEffect } from 'react';
import Presentation from '../Presentation/index';
import ProjectList from '../ProjectList/index';
import Contact from '../Contact/index';
import colors from '../../utils/style/colors';

//Component
function App() {
    //animated background
    useEffect(() => {
        const refresher = setInterval(() => {
            const backgroundAnim = 55 + Math.sin(Number(new Date()) / 700) * 30;
            document.body.style.background = `linear-gradient(0deg, ${colors.backgroundValue1} 5%, ${colors.backgroundValue2} ${backgroundAnim}%, ${colors.backgroundValue3} 100%)`;
        }, 1000 / 30); //30fps
        return () => {
            clearInterval(refresher);
        };
    }, []);

    //Render
    return (
        <main>
            <Presentation />
            <ProjectList />
            <Contact />
        </main>
    );
}

//Exports
export default App;
