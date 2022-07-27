
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
        this.playSound = this.playSound.bind(this);

    }
    handlePush (e) {
        this.playSound(e.target.id);
    }
    playSound(id) {
        const sound = document.getElementById("audio-" + id);
        sound.currentTime = 0;
        sound.play();
    }
    render() {
        return(
            <div id="drum-container">
                <div className="drum-maschine" id="drum-maschine" onClick={this.handlePush}>
                    <Button id="Q-pad" char="Q" file="audio/CUT-KIK(.WAV" />
                    <Button id="W-pad" char="W" file="audio/BASSD.WAV" />
                    <Button id="E-pad" char="E" file="audio/AIR-SNR(.WAV" />
                    <Button id="A-pad" char="A" file="audio/CL-HH1(L.WAV" />
                    <Button id="S-pad" char="S" file="audio/FILTKIK(.WAV" />
                    <Button id="D-pad" char="D" file="audio/HORNZ(LD.WAV" />
                    <Button id="Y-pad" char="Y" file="audio/KIZICK(L.WAV" />
                    <Button id="X-pad" char="X" file="audio/RATTLEKI.WAV" />
                    <Button id="C-pad" char="C" file="audio/SLICESNR.WAV" />

                    {/* <button type="button" className="drum-pad btn" id="w-pad">W</button>
                    <button type="button" className="drum-pad btn" id="e-pad">E</button>
                    <button type="button" className="drum-pad btn" id="a-pad">A</button>
                    <button type="button" className="drum-pad btn" id="s-pad">S</button>
                    <button type="button" className="drum-pad btn" id="d-pad">D</button>
                    <button type="button" className="drum-pad btn" id="y-pad">Y</button>
                    <button type="button" className="drum-pad btn" id="x-pad">X</button>
                    <button type="button" className="drum-pad btn" id="c-pad">C</button> */}
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
        <button type="button" 
            className="drum-pad btn"
            id={props.id} char={props.char}
            file={props.file}
            onClick={props.onClick}>
                {props.char}
                <audio id={"audio-" + props.id} >
                    <source src={props.file} type="audio/mpeg" />
                </audio>
        </button>
    );
}

ReactDOM.render(<DrumMaschine />, document.getElementById("root"));