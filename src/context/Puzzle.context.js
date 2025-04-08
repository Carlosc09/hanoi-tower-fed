import { createContext, useState } from 'react';
import { generateRandomDisks } from '../utility/diskUtility';

const TowerContext = createContext();

const Provider = ({ children }) => {
    const [towers, setTowers] = useState([[],[],[]]);
    const [disks, setDisks] = useState(0);
    const [disksUI, setDisksUI] = useState([]);

    const setTowerAndDisks = (diskCount) => {
        diskCount = parseInt(diskCount);
        const randomDisks = generateRandomDisks(diskCount);
        setDisks(diskCount);
        setDisksUI(randomDisks);
        const newTowers = [
            randomDisks,
            [],
            []
        ];
        setTowers(newTowers);
    };

    const reset = () => {
        setTowers([[],[],[]]);
    }

    const moveDisk = (from, to) => {
    };

    const dragStart = (event) => {
        event.dataTransfer.setData("disk", event.target.id);
    };

    const validateMove = (disk, from, to) => {
        if(disk < to.at(-1)) {
            return true;
        }

        return false;
    };

    const publicValues = {
        disks,
        towers,
        disksUI,
        moveDisk,
        reset,
        setTowerAndDisks,
        validateMove,
        dragStart
    };

    return (
        <TowerContext.Provider value={publicValues}>
            {children}
        </TowerContext.Provider>
    );
};

export { Provider };
export default TowerContext;

