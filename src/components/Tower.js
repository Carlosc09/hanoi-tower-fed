import { toast } from 'react-toastify';
import Disk from './Disk';
import useTowerContext from '../hooks/use-puzzle-context';

const Tower = ({id, disksUI}) => {
    const { winner, disks, moves, validateMove, validatePuzzleDone } = useTowerContext();

    const towerDisks = disksUI.map((disk, index) => {
        let draggable = false
        if(index === 0 && !winner){
            draggable = true;
        }

        return <Disk draggable={draggable} key={disk.id} disksUI={disk} />
    });

    const handleDrop = (event) => {
        event.preventDefault();
        const diskId = event.dataTransfer.getData("text");
        const targetTower = event.target.id;
        if(!validateMove(+ diskId, + targetTower)) {
            toast.error('No disk may be placed on top of a disk that is smaller than it', {
                position: 'bottom-center',
                autoClose: 2000,
            });
            return;
        }
        if(validatePuzzleDone()) {
            toast.success(`Excellent, Puzzle solved in ${moves + 1}!`, {
                position: 'bottom-center',
                autoClose: 2000,
            });
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    return (
        <div className="tower">
            <div id={id} onDrop={handleDrop} onDragOver={handleDragOver} className="tower__disks">
                { disks > 2 ? towerDisks : [] }
            </div>
            <div className="tower__base"></div>
        </div>
    );
}

export default Tower;
