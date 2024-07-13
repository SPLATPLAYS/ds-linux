import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
    return (
        <div class="container">
            <h1> Linux DS </h1>
            <button onClick={() => { invoke('enable') }}> Enable </button>
            <button onClick={() => { invoke('disable') }}> Disable </button>
            <select onInput={async (val) => { invoke('select_mode', { mode: val.target.value }) }}>
                <option value="teleop"> Teleoperated </option>
                <option value="autonomous"> Autonomous </option>
                <option value="test"> Test </option>
            </select>
        </div>
    );
}

export default App;
