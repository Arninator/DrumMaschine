
class DrumMaschine extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <div id="drum-container">
                <div class="drum-maschine" id="drum-maschine">
                    <button type="button" class="drum-pad btn" id="q-pad">Q</button>
                    <button type="button" class="drum-pad btn" id="w-pad">W</button>
                    <button type="button" class="drum-pad btn" id="e-pad">E</button>
                    <button type="button" class="drum-pad btn" id="a-pad">A</button>
                    <button type="button" class="drum-pad btn" id="s-pad">S</button>
                    <button type="button" class="drum-pad btn" id="d-pad">D</button>
                    <button type="button" class="drum-pad btn" id="y-pad">Y</button>
                    <button type="button" class="drum-pad btn" id="x-pad">X</button>
                    <button type="button" class="drum-pad btn" id="c-pad">C</button>
                </div>
                <div class="drum-maschine" id="drum-maschine2">
                    <button type="button" class="drum-pad btn" id="7-pad">7</button>
                    <button type="button" class="drum-pad btn" id="8-pad">8</button>
                    <button type="button" class="drum-pad btn" id="9-pad">9</button>
                    <button type="button" class="drum-pad btn" id="4-pad">4</button>
                    <button type="button" class="drum-pad btn" id="5-pad">5</button>
                    <button type="button" class="drum-pad btn" id="6-pad">6</button>
                    <button type="button" class="drum-pad btn" id="1-pad">1</button>
                    <button type="button" class="drum-pad btn" id="2-pad">2</button>
                    <button type="button" class="drum-pad btn" id="3-pad">3</button>
                </div>
            </div>
            
        );
    }
}

ReactDOM.render(<DrumMaschine />, document.getElementById("root"));