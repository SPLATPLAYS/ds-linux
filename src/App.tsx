import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
    var teamNum = 9999;
    return (
        <div class="container">
            <h1> Linux DS </h1>
            <label>
                Team Number <input type="number" onChange={(val) => { teamNum = val.target.value }}> Team Number </input>
            </label>
            <button onClick={() => { invoke('enable', { teamNum: Number(teamNum) }) }}> Enable </button>
            <button onClick={() => { invoke('disable', { teamNum: Number(teamNum) }) }}> Disable </button>
            <select onInput={async (val) => { invoke('select_mode', { teamNum: Number(teamNum), mode: val.target.value }) }}>
                <option value="teleop"> Teleoperated </option>
                <option value="autonomous"> Autonomous </option>
                <option value="test"> Test </option>
            </select>
        </div>
    );
}

export default App;
