import "./App.css";
import "./index.css";
import AudioRecorder from "./AudioRecorder";
import SplitPane from 'react-split-pane';
 

const App = () => {
    return (
      <SplitPane split="vertical" minSize={50} defaultSize={1000}>
        <div>
            <h1>NeuroNotes</h1>
            <div>
                {<AudioRecorder />}
            </div>
            <textarea id="user_message" rows="30" cols="70"></textarea>
        </div>
        </SplitPane>
    );
};

export default App;
