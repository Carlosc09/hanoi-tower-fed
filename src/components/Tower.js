import { toast } from 'react-toastify';
import Disk from './Disk';
import useTowerContext from '../hooks/use-puzzle-context';

const Tower = ({id, disksUI}) => {
    const { disks, validateMove, moveDisk } = useTowerContext();

    const towerDisks = disksUI.map((disk) =>
        <Disk tower={id} key={disk.key} disksUI={disk} />
    );

    const handleDrop = (event) => {
        event.preventDefault();
        const diskId = event.dataTransfer.getData("text");
        const targetTower = event.target.id;
        if(!validateMove(+ diskId, + targetTower)) {
            toast.error('No disk may be placed on top of a disk that is smaller than it', {
                position: 'top-center',
                autoClose: 2000,
            });
            return;
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
