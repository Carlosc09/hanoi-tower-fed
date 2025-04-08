import Puzzle from './Puzzle';
import Search from './Search';

const PuzzleShow = () => {
    return (
        <div className="puzzle-show">
            <div className="block">
                <Search />
            </div>
            <div className='block'>
                <Puzzle />
            </div>
        </div>
    );
};

export default PuzzleShow;
