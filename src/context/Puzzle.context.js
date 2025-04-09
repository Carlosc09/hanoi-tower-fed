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
        setDisks(0);
        setDisksUI([]);
    }

    const updateDisksUI = (disk, parent) => {
        const newDisksUI = disksUI.map((d) => {
            if(d.id === disk.id) {
                return {
                    ...d,
                    parent: parent
                };
            }
            return d;
        });
        setDisksUI(newDisksUI);
    }

    const findDiskInTower = (diskId) => {
        for(let i = 0; i < towers.length; i++) {
            const disk = towers[i].find((d) => d.id === diskId);
            if(disk) {
                return i;
            }
        }
        return null;
    }

    const moveDisk = (from, to) => {
        const newTowers = [...towers];
        const disk = newTowers[from].shift();
        newTowers[to]?.push(disk);
        setTowers(newTowers);
        // updateDisksUI(disk, to);

        return true;
    };

    const validateMove = (diskId, to) => {
        let disk = disksUI[diskId];
        const from = findDiskInTower(diskId);
        console.log(`Validating move Disk ${disk} from ${from} to ${to}`);
        if(towers[to]?.at(-1)?.num < disk?.num) {
            console.log('Invalid move!');
            return false;
        }
        return moveDisk(from, to);
    };

    const publicValues = {
        disks,
        towers,
        disksUI,
        moveDisk,
        reset,
        setTowerAndDisks,
        validateMove
    };

    return (
        <TowerContext.Provider value={publicValues}>
            {children}
        </TowerContext.Provider>
    );
};

export { Provider };
export default TowerContext;

