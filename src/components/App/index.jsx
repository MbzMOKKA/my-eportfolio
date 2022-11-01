//Imports
import { useEffect } from 'react';
import Settings from '../Settings/index';
import Presentation from '../Presentation/index';
import ProjectList from '../ProjectList/index';
import Contact from '../Contact/index';
import colors from '../../utils/style/colors';

//Component
function App() {
    //animated background
    useEffect(() => {
        const refresher = setInterval(() => {
            const backgroundAnim = 50 + Math.sin(Number(new Date()) / 1000) * 35;
            document.body.style.background = `linear-gradient(0deg, ${colors.backgroundValue1} 0%, ${colors.backgroundValue2} ${backgroundAnim}%, ${colors.backgroundValue3} 105%)`;
        }, 1000 / 30); //30fps
        return () => {
            clearInterval(refresher);
        };
    }, []);

    //Render
    return (
        <main>
            <Settings />
            <Presentation />
            <ProjectList />
            <Contact />
        </main>
    );
}

//Exports
export default App;
