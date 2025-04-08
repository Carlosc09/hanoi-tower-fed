import useTowerContext from "../hooks/use-puzzle-context";

const Disks = ({ index, disksUI }) => {
    const handleDragStart = (event) => {
        event.preventDefault();
        console.log('dragging', event.target.id);
    }

    const isDraggable = () => {
        
    }


    return (
        <div
        style={{
            backgroundColor: disksUI.color,
            width: `${disksUI.size}px`,
        }}
        id={index} className="disk" onDragStart={handleDragStart} draggable="true">{disksUI.num}</div>
    );
}

export default Disks;
