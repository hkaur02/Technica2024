import "./App.css";
import AudioRecorder from "./AudioRecorder";

const App = () => {
    /* let [recordOption, setRecordOption] = useState("video"); 
    const toggleRecordOption = (type) => {
        return () => {
            setRecordOption(type);
        }; 
    }; */
    return (
        <div>
            <h1>Note Helper</h1>
            <div>
                {<AudioRecorder />}
            </div>
        </div>
    );
};

export default App;
