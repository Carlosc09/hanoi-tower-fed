import { useState } from "react";
import Tower from "./Tower";
import useTowerContext from "../hooks/use-puzzle-context";

const Puzzle = () => {
    const [moves, setMoves] = useState(0);
    const { towers } = useTowerContext();

    return (
        <div className="box">
            <nav className="level">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Moves</p>
                        <p className="title">{moves}</p>
                    </div>
                </div>
            </nav>
            <div className="block">
                <div className="columns">
                    <div className="column is-4">
                        <div className="box">
                            <div className="block">
                                <Tower key="A" id="A" disksUI={towers[0]} />
                            </div>
                            <div >A</div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="box">
                            <div className="block">
                                <Tower key="B" id="B" disksUI={towers[1]} />
                            </div>
                            <div>B</div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="box">
                            <div className="block">
                                <Tower key="C" id="C" disksUI={towers[2]} />
                            </div>
                            <div>C</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Puzzle;