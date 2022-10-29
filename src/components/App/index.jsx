//Imports
import { useState, useEffect } from 'react';
import { interractWithCollapsibleArea } from '../../utils/misc/index';
import CollapsibleArea from '../CollapsibleArea/index';
import Presentation from '../Presentation';
import colors from '../../utils/style/colors';

//Component
function App() {
    const [opened, setOpened] = useState(false);
    const [backgroundAnim, setBackgroundAnim] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setBackgroundAnim(50 + Math.sin(Number(new Date()) / 2000) * 15);
            document.body.style.background = `linear-gradient(0deg, ${colors.backgroundValue1} 10%, ${colors.backgroundValue2} ${backgroundAnim}%, ${colors.backgroundValue3} 100%)`;
        }, 1000 / 60);
    }, [backgroundAnim]);

    return (
        <main>
            <Presentation />
            {/*
            <button
                id="more-button"
                onClick={() => {
                    interractWithCollapsibleArea(setOpened, opened, 'test999');
                }}
            >
                {opened ? <>FERMER</> : <>OUVRIR</>}
            </button>
            <CollapsibleArea id="test999">
                <p>2</p>
                <TEST>dqzdzq</TEST>
                <TEST>dqzdzq</TEST>
                <TEST>dqzdzq</TEST>
                <TEST>dqzdzq</TEST>
                <TEST>dqzdzq</TEST>
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <TEST>dqzdzq5</TEST>
                <p>3</p>
                <TEST>10</TEST>
            </CollapsibleArea>
            */}
        </main>
    );
}

//Exports
export default App;
