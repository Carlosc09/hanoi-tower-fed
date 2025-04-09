import { useState } from 'react';
import { toast } from 'react-toastify';
import useTowerContext from '../hooks/use-puzzle-context';

const Search = () => {
    const [disks, setDisks] = useState('');
    const { reset, setTowerAndDisks } = useTowerContext();

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

    return (
        <div className="box">
            <div className="columns">
                <div className="column is-4">
                    <form onSubmit={handleSubmit}>
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" max="20" type="number" onChange={handleChange} value={disks} placeholder="Number of disks" />
                            </div>
                            <div className="control">
                                <button className="button is-info">Generate Puzzle</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="column is-4">
                    <div className="control">
                        <button onClick={handleReset} className="button is-danger">Reset</button>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="control">
                        <button className="button is-success">Get Solution</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Search;
