import { useState } from 'react';
import { toast } from 'react-toastify';
import { getTowerSolution } from '../services/apiService';
import useTowerContext from '../hooks/use-puzzle-context';

const Search = () => {
    const [disks, setDisks] = useState('');
    const { disksUI, reset, setTowerAndDisks, solution, setSolution, moveDisk,  setMoves, moves } = useTowerContext();
    let animate = null;

    const handleChange = (e) => {
        setDisks(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (disks <= 2) {
            toast.error('Disks should be higher then 2', {
                position: 'top-center',
                autoClose: 2000,
            });
            setDisks('');
            return;
        }
        setTowerAndDisks(disks);
    }

    const handleReset = (e) => {
        e.preventDefault();

        setDisks('');
        reset();
    }

    const handleGetSolution = (e) => {
        e.preventDefault();

        let solution = getTowerSolution(disks);
        toast.promise(
            solution,
            {
                pending: 'Getting solution...',
                success: 'Solution was received👌',
                error: 'Promise rejected 🤯'
            }
        );

        solution.then(res => {
            if (!res) {
                toast.error('No solution found', {
                    position: 'top-center',
                    autoClose: 2000,
                });
                return;
            } else {
                setSolution(res);
            }
        }).catch(err => {
            console.error(err);
            toast.error('Error getting solution', {
                position: 'top-center',
                autoClose: 2000,
            });
        });
    };

    const handleStop = (e) => {
        e.preventDefault();
        if (animate) {
            clearInterval(animate);
            animate = null;
        }
    }

    const implementSolution = () => {
        let i = 0;

        animate = setInterval(() => {
            if (i < solution.length) {
                let move = solution[i];
                moveDisk(move.from, move.to);
                setMoves(i + 1 );
                i++;
            } else {
                clearInterval(animate);
                animate = null;
            }
        }, 1500);
    };

    return (
        <div className="box">
            <div className="columns">
                <div className="column is-4">
                    <form onSubmit={handleSubmit}>
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" max="16" type="number" onChange={handleChange} value={disks} placeholder="Number of disks" />
                            </div>
                            <div className="control">
                                <button className="button is-info">Generate Puzzle</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="column is-3">
                    <div className="control">
                        <button onClick={handleReset} className="button is-danger">Reset</button>
                    </div>
                </div>
                <div className="column is-1">
                    <div className="control">
                        <button onClick={handleStop} className="button is-danger" >Stop</button>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="control">
                        <button onClick={implementSolution} className="button is-primary" >Solve</button>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="control">
                        <button onClick={handleGetSolution} className="button is-success" disabled={disksUI?.length ? false : true}>Get Solution</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Search;
