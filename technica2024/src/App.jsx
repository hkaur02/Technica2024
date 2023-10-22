import "./App.css";
import "./index.css";
import AudioRecorder from "./AudioRecorder";
import TimerPopup from "./timerPopup";
//import TimerPopup from "./timerPopup"
//import SplitPane from 'react-split-pane';
 

const App = () => {
    return (
      <div>
            <div>
                <h1>NeuroNotes</h1>
                <div> {<TimerPopup />}</div>
                <div>
                    {<AudioRecorder />}
                </div>
                <textarea id="user_message" rows="30" cols="70"></textarea>
            </div>
            </div>
    );
};

export default App;
