//Imports
import { useState } from 'react';
import { interractWithCollapsibleArea } from '../../utils/misc/index';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CollapsibleArea from '../CollapsibleArea/index';
import { TEST } from './style';

//Component
function App() {
    const [opened, setOpened] = useState(false);
    return (
        <div className="App">
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
            <LazyLoadImage
                alt={'test'}
                height={200}
                src={'https://cdn.discordapp.com/attachments/851546956215484426/1030481403462291547/4_0_teaser_10.png'} // use normal <img> attributes as props
                width={320}
                effect="blur"
            />
        </div>
    );
}

//Exports
export default App;
