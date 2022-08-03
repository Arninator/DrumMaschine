
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
        if (document.getElementById("switch-button").checked) {
            document.addEventListener('keydown', this.pressKey);
        }
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
        const sound = document.getElementById(id.charAt(0));
        const button = document.getElementById(id);
        const display = document.getElementById("display");
        
        sound.currentTime = 0;
        sound.volume = document.getElementById("vol-control").value / 100.;
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
        const texts = document.getElementsByClassName("icons");
        const volSlider = document.getElementById("vol-control")

        if (switchButton.checked) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.add("powered");
                buttons[i].disabled = false;
            }
            for (let i = 0; i < texts.length; i++) {
                texts[i].classList.add("lighted-text");
            }
            displayContainer[0].classList.add("powered-display-container");
            display.innerText = "Push it...";
            volSlider.classList.add("vol-slider-activated");

            this.componentDidMount();
        } else {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("powered");
                buttons[i].disabled = true;
            }
            for (let i = 0; i < texts.length; i++) {
                texts[i].classList.remove("lighted-text");
            }
            displayContainer[0].classList.remove("powered-display-container");
            display.innerText = "";
            volSlider.classList.remove("vol-slider-activated");

            this.componentWillUnmount();
        }
    }

    render() {
        return(
            <div id="drum-container">
                <div className="drum-maschine" id="drum-maschine" onClick={this.handlePush} onKeyDown={this.pressKey}>
                    <Button id="Q-pad" char="Q" file="audio/_IMNASTY.WAV" />
                    <Button id="W-pad" char="W" file="audio/-ECSW-SN.WAV" />
                    <Button id="E-pad" char="E" file="audio/!HAT(LD0.WAV" />
                    <Button id="A-pad" char="A" file="audio/(SNR)(LD.WAV" />
                    <Button id="S-pad" char="S" file="audio/(TMK)SNR.WAV" />
                    <Button id="D-pad" char="D" file="audio/2ILLSNR(.WAV" />
                    <Button id="Z-pad" char="Z" file="audio/1GUIT(LD.WAV" />
                    <Button id="X-pad" char="X" file="audio/1PULL.WAV" />
                    <Button id="C-pad" char="C" file="audio/2GUITS(L.WAV" />
                </div>
                <div id="controls">
                    <div id="regulator-div">
                        <div id="power-div">
                            <label className="switch">
                                <input id="switch-button" type="checkbox" onClick={this.handleChecked}/>
                                <span className="slider round"></span>
                            </label>
                            <div className="icons"><i className="fa fa-power-off"></i></div>
                        </div>
                        <div id="volume-div">
                            <div className="icons"><i className="fa fa-volume-up"></i></div>
                            <input type="range" min="1" max="100" defaultValue="50" id="vol-control" className="vol-slider" />
                        </div>
                    </div>

                    <Display id="display" value=""/>
                </div>
                <div className="drum-maschine" id="drum-maschine2" onClick={this.handlePush} onKeyDown={this.pressKey}>
                    <Button id="Y-pad" char="Y" file="audio/2KICKZ(L.WAV" />
                    <Button id="U-pad" char="U" file="audio/2THINSNR.WAV" />
                    <Button id="I-pad" char="I" file="audio/8BITSNR(.WAV" />
                    <Button id="H-pad" char="H" file="audio/8O8_R.wav" />
                    <Button id="J-pad" char="J" file="audio/88'SNR(L.WAV" />
                    <Button id="K-pad" char="K" file="audio/100_SNR(.WAV" />
                    <Button id="B-pad" char="B" file="audio/808_2.wav" />
                    <Button id="N-pad" char="N" file="audio/808_3.wav" />
                    <Button id="M-pad" char="M" file="audio/808_4.wav" />
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
            value={props.char}
            disabled>
                {/* {props.char} */}
                <audio id={props.char} className="clip">
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