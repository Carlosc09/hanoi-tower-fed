
const Disks = ({ disksUI }) => {
    const handleDragStart = (event) => {
        console.log('dragging', event.target.id, event);
        event.dataTransfer.setData("text", event.target.id);
    }

    return (
        <div
        style={{
            backgroundColor: disksUI.color,
            width: `${disksUI.size}px`,
        }}
        id={disksUI.id} className="disk" onDragStart={handleDragStart} draggable="true">{disksUI.num}</div>
    );
}

export default Disks;
