const ChordTab = ({onChange, onSubmit, chord}) => {
    return (
        <>
                <h2 style={{marginTop: '20px'}}>Chord Control</h2>
                <p>Chord: {chord.chord}</p>
                <p>Quality: {chord.quality}</p>
                <p>Key: {chord.key}</p>
                <select className="form-select" name='chord' value={chord.chord} onChange={onChange}>
                    <option value="I">I</option>
                    <option value="bII">bII</option>
                    <option value="II">II</option>
                    <option value="bIII">bIII</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="bV">bV</option>
                    <option value="V">V</option>
                    <option value="bVI">bVI</option>
                    <option value="VI">VI</option>
                    <option value="bVII">bVII</option>
                    <option value="VII">VII</option>
                </select>
                <select className="form-select" name="quality" value={chord.quality} onChange={onChange}>
                    <option value="major">Major</option>
                    <option value="minor">Minor</option>
                    <option value="diminished">Diminished</option>
                    <option value="augmented">Augmented</option>
                    <option value="major7">Major7</option>
                    <option value="major7aug">Major7+</option>
                    <option value="minor7">Minor7</option>
                    <option value="minormaj7">Minor(Maj7)</option>
                    <option value="dom7">Dominant7</option>
                    <option value="dom7aug">Dominant7+</option>
                    <option value="half-diminished">Half-Diminished</option>
                    <option value="fully-diminished">Fully-Diminished</option>
                </select>
                <select className="form-select" name="key" value={chord.key} onChange={onChange}>
                    <option value="C">C</option>
                    <option value="C#">C#</option>
                    <option value="D">D</option>
                    <option value="D#">D#</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="F#">F#</option>
                    <option value="G">G</option>
                    <option value="G#">G#</option>
                    <option value="A">A</option>
                    <option value="A#">A#</option>
                    <option value="B">B</option>
                </select>
                <button className='btn btn-primary btn-generate' type="submit" onClick={onSubmit} style={{marginTop: '20px'}}>Generate</button>
        </>
    )
}

export default ChordTab