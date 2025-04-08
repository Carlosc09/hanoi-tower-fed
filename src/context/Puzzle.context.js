import { createContext, useState } from 'react';
import { generateRandomDisks } from '../utility/diskUtility';

const TowerContext = createContext();

const Provider = ({ children }) => {
    const [towers, setTowers] = useState([[],[],[]]);
    const [disks, setDisks] = useState(0);
    const [disksUI, setDisksUI] = useState([]);

    const setTowerAndDisks = (diskCount) => {
        diskCount = parseInt(diskCount);
        setDisksUI(generateRandomDisks(diskCount));
        const newTowers = [
            disksUI,
            [],
            []
        ];
        setTowers(newTowers);
        setDisks(diskCount);
    };

    const reset = () => {
        setTowers([[],[],[]]);
        setDisks(0);
        setDisksUI([]);
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

