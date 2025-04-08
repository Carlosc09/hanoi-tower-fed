import { getTowerSolution } from './services/apiService';
import { useEffect, useState } from 'react';
import PuzzleShow from './components/PuzzleShow';
import { ToastContainer } from 'react-toastify';


function App() {
/*     useEffect(() => {
        const data = getTowerSolution(3);
        console.log(data.then((res) => {
            console.log(res);
        }));
    }, []); */

    return (
        <main className="content">
            <div className='center'>
                <h1 className="title">Hanoi Tower</h1>
            </div>
            <div className="puzzle-area">
                <PuzzleShow />
            </div>
            <ToastContainer />
        </main>
    );
}

export default App;
