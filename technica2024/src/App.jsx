import "./App.css";
import AudioRecorder from "./AudioRecorder";
import { useEffect} from 'react';
import BrickBreaker from './BrickBreaker';

const App = () => {
    /* let [recordOption, setRecordOption] = useState("video"); 
    const toggleRecordOption = (type) => {
        return () => {
            setRecordOption(type);
        }; 
    }; */
    useEffect(() => {
        BrickBreaker();
    }, []);
    return (
        <div>
            <h1>Note Helper</h1>
            <div>
                {<AudioRecorder />}
            </div>
            <div>
            <div id="game-container"></div>

            <h1>Welcome to My Brick Breaker Game</h1>
            <p>Instructions: Use the left and right arrow keys to move the paddle and bounce the ball.</p>

            <div className="scoreboard">
                <p>Score: 0</p>
            </div>

            <footer>
                <p>&copy; 2023 My Game Company</p>
            </footer>
        </div>
        </div>
    );
};

export default App;
