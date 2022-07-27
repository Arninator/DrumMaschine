
class DrumMaschine extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <div id="drum-maschine">
                <button type="button" class="drum-pad btn" id="q-pad">Q</button>
                <button type="button" class="drum-pad" id="w-pad">W</button>
                <button type="button" class="drum-pad" id="e-pad">E</button>
                <button type="button" class="drum-pad" id="a-pad">A</button>
                <button type="button" class="drum-pad" id="s-pad">S</button>
                <button type="button" class="drum-pad" id="d-pad">D</button>
                <button type="button" class="drum-pad" id="y-pad">Y</button>
                <button type="button" class="drum-pad" id="x-pad">X</button>
                <button type="button" class="drum-pad" id="c-pad">C</button>
            </div>
        );
    }
}

ReactDOM.render(<DrumMaschine />, document.getElementById("root"));