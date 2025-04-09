
const Disks = ({ disksUI, draggable }) => {
    const handleDragStart = (event) => {
        event.dataTransfer.setData("text", event.target.id);
        event.dataTransfer.setData("parent", disksUI.parent);
    }

    return (
        <div
        style={{
            backgroundColor: disksUI.color,
            width: `${disksUI.size}px`,
        }}
        id={disksUI.id} className="disk" onDragStart={handleDragStart} draggable={draggable}>{disksUI.num}</div>
    );
}

export default Disks;
