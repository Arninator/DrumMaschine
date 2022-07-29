const keyCodes = {
    81: "Q",
    87: "W",
    69: "E",
    65: "A",
    83: "S",
    68: "D",
    89: "Y",
    88: "X",
    67: "C",
    103: "7",
    104: "8",
    105: "9",
    100: "4",
    101: "5",
    102: "6",
    97: "1",
    98: "2",
    99: "3"
}

class DrumMaschine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            audioId: "",
            char: "",
            file: "",
        }
        this.handlePush = this.handlePush.bind(this);
        this.pressKey = this.pressKey.bind(this);
        this.playSound = this.playSound.bind(this);

    }
    componentDidMount() {
        document.addEventListener('keydown', this.pressKey);
      }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.pressKey);
    }


    handlePush(e) {
        this.playSound(e.target.id);
    }
    pressKey(e) {
        const code = e.code.charAt(3);
        // console.log(code);
        this.playSound(code + "-pad");
    }
    playSound(id) {
        const sound = document.getElementById("audio-" + id);
        sound.currentTime = 0;
        sound.play();
    }

    
    render() {
        return(
            <div id="drum-container">
                <div className="drum-maschine" id="drum-maschine" onClick={this.handlePush} onKeyDown={this.pressKey}>
                    <Button id="Q-pad" char="Q" file="audio/CUT-KIK(.WAV" />
                    <Button id="W-pad" char="W" file="audio/BASSD.WAV" />
                    <Button id="E-pad" char="E" file="audio/AIR-SNR(.WAV" />
                    <Button id="A-pad" char="A" file="audio/CL-HH1(L.WAV" />
                    <Button id="S-pad" char="S" file="audio/FILTKIK(.WAV" />
                    <Button id="D-pad" char="D" file="audio/HORNZ(LD.WAV" />
                    <Button id="Y-pad" char="Y" file="audio/KIZICK(L.WAV" />
                    <Button id="X-pad" char="X" file="audio/RATTLEKI.WAV" />
                    <Button id="C-pad" char="C" file="audio/SLICESNR.WAV" />
                </div>
                <div className="drum-maschine" id="drum-maschine2">
                    <button type="button" className="drum-pad btn" id="7-pad">7</button>
                    <button type="button" className="drum-pad btn" id="8-pad">8</button>
                    <button type="button" className="drum-pad btn" id="9-pad">9</button>
                    <button type="button" className="drum-pad btn" id="4-pad">4</button>
                    <button type="button" className="drum-pad btn" id="5-pad">5</button>
                    <button type="button" className="drum-pad btn" id="6-pad">6</button>
                    <button type="button" className="drum-pad btn" id="1-pad">1</button>
                    <button type="button" className="drum-pad btn" id="2-pad">2</button>
                    <button type="button" className="drum-pad btn" id="3-pad">3</button>
                </div>
            </div>
            
        );
    }
}
const Button = (props) => {
    // console.log("--- " + props.id)
    return(
        <button
            className="drum-pad"
            id={props.id} char={props.char}
            file={props.file}
            onClick={props.onClick}
            onKeyDown={props.onKeyDown}>
                {props.char}
                <audio id={"audio-" + props.id} >
                    <source src={props.file} type="audio/mpeg" />
                </audio>
        </button>
    );
}

ReactDOM.render(<DrumMaschine />, document.getElementById("root"));