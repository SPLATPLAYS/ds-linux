import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { useState } from "preact/hooks";

function App() {
    return (
        <div class="container">
            <h1> Linux DS </h1>
            <button onClick={() => { invoke('enable') }}> Enable </button>
            <button onClick={() => { invoke('disable') }}> Disable </button>
            <select onInput={async (val) => {
                const mode = val.target.value;
                invoke('select_mode', { mode: mode });
            }}>
                <option value="teleop" selected={true}> Teleoperated </option>
                <option value="autonomous"> Autonomous </option>
                <option value="test"> Test </option>
            </select>
        </div>
    );
}

export default App;
