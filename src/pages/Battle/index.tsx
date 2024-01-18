import React, {useState} from 'react';
import './Battle.css';
import Button from '@mui/material/Button';

const FIGHT_RESULT = ['Victory', 'Defeat'] as const;

const Index = (): React.ReactElement => {
    const [isBattle, setIsBattle] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [result, setResult] = useState<number | null>(null);

    const getRandomZeroOrOne = (): 0 | 1 => {
        return Math.random() < 0.5 ? 0 : 1;
    }

    const startBattleSequence = () => {
        setIsBattle(true);
        setTimeout(() => {
            setResult(getRandomZeroOrOne());
            setIsBattle(false);
            setIsMoving(false);
        }, 6000);
    }

    const handleStartBattle = () => {
        if (result !== null) {
            setIsBattle(false);
            setResult(null);
        }
        console.log('Battle started!');
        setIsMoving(true);
        setTimeout(startBattleSequence, 2000);
    };

    return (
        <div className="App">
            <div className="fight-field">
                <img className={`player-block-left ${isMoving ? 'move-left' : ''}`} src="/assets/images/knight.png" alt="knight" />
                {isBattle && <img className="fight" src="/assets/images/fight.gif" alt="fight" />}
                {result !== null && <div className="fight result">{FIGHT_RESULT[result]}</div>}
                <img className={`player-block-right ${isMoving ? 'move-right' : ''}`} src="/assets/images/orc.png" alt="orc" />
            </div>
            <Button
                variant="contained"
                color="primary"
                sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                onClick={handleStartBattle}
            >
                Start Battle
            </Button>
        </div>
    );
}

export default Index;
