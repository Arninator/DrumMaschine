
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
        this.handleChecked = this.handleChecked.bind(this);

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
        this.playSound(code + "-pad");
    }
    playSound(id) {
        const sound = document.getElementById("audio-" + id);
        const button = document.getElementById(id);
        const display = document.getElementById("display");
        
        sound.currentTime = 0;
        sound.play();

        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 100);

        display.innerText = id;
        // console.log("display.value: " + display.value);
    }
    handleChecked(e) {
        const switchButton = document.getElementById("switch-button");
        const buttons = document.getElementsByClassName("drum-pad");
        const displayContainer = document.getElementsByClassName("display-container");
        const display = document.getElementById("display");

        if (switchButton.checked) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.add("powered");
                buttons[i].disabled = false;
            }
            displayContainer[0].classList.add("powered-display-container");
            display.innerText = "Push it...";
        } else {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("powered");
                buttons[i].disabled = true;
            }
            displayContainer[0].classList.remove("powered-display-container");
            display.innerText = "";
        }
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
                    <Button id="Z-pad" char="Z" file="audio/KIZICK(L.WAV" />
                    <Button id="X-pad" char="X" file="audio/RATTLEKI.WAV" />
                    <Button id="C-pad" char="C" file="audio/SLICESNR.WAV" />
                </div>
                <div id="controls">
                    <div id="power-div">
                        <label className="switch">
                            <input id="switch-button" type="checkbox" onClick={this.handleChecked}/>
                            <span className="slider round"></span>
                        </label>
                        <div><i class="fa fa-power-off"></i></div>
                    </div>
                    <Display id="display" value=""/>
                </div>
                <div className="drum-maschine" id="drum-maschine2" onClick={this.handlePush} onKeyDown={this.pressKey}>
                    <Button id="Y-pad" char="Y" file="audio/CUT-KIK(.WAV" />
                    <Button id="U-pad" char="U" file="audio/BASSD.WAV" />
                    <Button id="I-pad" char="I" file="audio/AIR-SNR(.WAV" />
                    <Button id="H-pad" char="H" file="audio/CL-HH1(L.WAV" />
                    <Button id="J-pad" char="J" file="audio/FILTKIK(.WAV" />
                    <Button id="K-pad" char="K" file="audio/HORNZ(LD.WAV" />
                    <Button id="B-pad" char="B" file="audio/KIZICK(L.WAV" />
                    <Button id="N-pad" char="N" file="audio/RATTLEKI.WAV" />
                    <Button id="M-pad" char="M" file="audio/SLICESNR.WAV" />
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
            id={props.id} 
            char={props.char}
            file={props.file}
            onClick={props.onClick}
            onKeyDown={props.onKeyDown}
            disabled>
                {/* {props.char} */}
                <audio id={"audio-" + props.id} >
                    <source src={props.file} type="audio/mpeg" />
                </audio>
        </button>
    );
}
const Display = (props) => {
    return(
        <div 
            className={props.id + "-container"}>
                <div id="display">{props.value}</div>
        </div>
    );
}

ReactDOM.render(<DrumMaschine />, document.getElementById("root"));