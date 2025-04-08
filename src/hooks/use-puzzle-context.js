import { useContext } from "react";
import TowerContext from "../context/Puzzle.context";

function useTowerContext() {
    return useContext(TowerContext);
};

export default useTowerContext;
