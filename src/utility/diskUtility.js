const getRandomRGBColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 220);
    return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomDisks = (disks) => {
    const randomDisk = [];
    for (let i = 0; i < disks; i++) {
        randomDisk.push({
            id: i,
            num:  i + 1,
            size:  (i * 12) + (30 - i),
            color: getRandomRGBColor()
        });
    }
    return randomDisk;
}

export {
    generateRandomDisks
}
