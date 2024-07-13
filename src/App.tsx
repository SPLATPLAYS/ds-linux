import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
    const [teamNum, setTeamNum] = useState(9999);
    const [mode, setMode] = useState("teleop");

    return (
        <div className="container">
            <h1> Linux DS </h1>
            <label>
                Team Number 
                <input 
                    type="number" 
                    value={teamNum}
                    onChange={(e) => setTeamNum(Number(e.target.value))} 
                />
            </label>
            <button onClick={() => { invoke('enable', { teamNum }) }}> Enable </button>
            <button onClick={() => { invoke('disable', { teamNum }) }}> Disable </button>
            <select 
                value={mode} 
                onChange={(e) => {
                    const selectedMode = e.target.value;
                    setMode(selectedMode);
                    invoke('select_mode', { teamNum, mode: selectedMode });
                }}
            >
                <option value="teleop"> Teleoperated </option>
                <option value="autonomous"> Autonomous </option>
                <option value="test"> Test </option>
            </select>
        </div>
    );
}

export default App;
