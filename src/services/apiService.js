import axios from 'axios';

const getTowerSolution = async(disks) => {
    try {
        const response = await axios.get(`http://localhost:3100/api/tower/${disks}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tower solution:', error);
    }
}

export {
    getTowerSolution
};
