import { createContext, useState } from 'react';
import { generateRandomDisks } from '../utility/diskUtility';

const TowerContext = createContext();

const Provider = ({ children }) => {
    const [towers, setTowers] = useState([[],[],[]]);
    const [disks, setDisks] = useState(0);
    const [disksUI, setDisksUI] = useState([]);
    const [moves, setMoves] = useState(0);
    const [winner, setWinner] = useState(false);
    const [solution, setSolution] = useState([]);


    const setTowerAndDisks = (diskCount) => {
        diskCount = parseInt(diskCount);
        const randomDisks = generateRandomDisks(diskCount);
        setDisks(diskCount);
        setDisksUI(randomDisks);
        const newTowers = [
            [...randomDisks],
            [],
            []
        ];
        setTowers(newTowers);
        setMoves(0);
        setWinner(false);
    };

    const reset = () => {
        setTowers([[],[],[]]);
        setDisks(0);
        setDisksUI([]);
        setMoves(0);
        setWinner(false);
    }

    const findDiskInTower = (diskId) => {
        for(let i = 0; i < towers.length; i++) {
            const disk = towers[i]?.find((d) => d.id === diskId);
            if(disk) {
                return i;
            }
        }
        return null;
    }

    const validatePuzzleDone = () => {
        for(let i = 1; i < towers.length; i++) {
            if(towers[i].length === disks) {
                setWinner(true);
                return true;
            }
        }
        return false;
    }

    const moveDisk = (from, to) => {
        const newTowers = [...towers];
        const disk = newTowers[from].shift();
        newTowers[to]?.unshift(disk);
        setTowers(newTowers);
        setMoves(moves + 1);
        return true;
    };

    const validateMove = (diskId, to) => {
        let disk = disksUI[diskId];
        const from = findDiskInTower(diskId);
        if(towers[to].length === 0) {
            return moveDisk(from, to);
        } else if(towers[to]?.at(-1)?.num > disk?.num) {
            return moveDisk(from, to);
        }
        return false;
    };

    const publicValues = {
        disks,
        towers,
        disksUI,
        moves,
        winner,
        solution,
        setMoves,
        setSolution,
        reset,
        setTowerAndDisks,
        validateMove,
        validatePuzzleDone,
        moveDisk
    };

    return (
        <TowerContext.Provider value={publicValues}>
            {children}
        </TowerContext.Provider>
    );
};

export { Provider };
export default TowerContext;

