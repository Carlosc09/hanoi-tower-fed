import Disk from './Disk';
import useTowerContext from '../hooks/use-puzzle-context';

const Tower = ({id, disksUI}) => {
    const { disks } = useTowerContext();

    const towerDisks = disksUI.map((disk) =>
        <Disk key={disk.key} disksUI={disk} />
    );

    const handleDrop = (event) => {

    }

    const handleDragOver = (event) => {
        event.preventDefault();
        //moveDisk(event.id, id);
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
