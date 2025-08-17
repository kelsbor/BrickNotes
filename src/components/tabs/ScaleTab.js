const ScaleTab =({scale, onChange, onSubmit}) => {
    return (
        <>
        <h2 style={{marginTop: '20px'}}>Scale Control</h2>
            <p>Fundamental: {scale.fundamental}</p>
            <p>Scale: {scale.scale}</p>
            <select className="form-select" name="fundamental" value={scale.fundamental} onChange={onChange}>
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
            <select className="form-select" name="scale" value={scale.scale} onChange={onChange}>
                <option value="ionian">Ionian</option>
                <option value="dorian">Dorian</option>
                <option value="phrygian">Phrygian</option>
                <option value="lydian">Lydian</option>
                <option value="mixolydian">Mixolydian</option>
                <option value="aeolian">Aeolian</option>
                <option value="locrian">Locrian</option>
            </select>
            <button className='btn btn-primary btn-generate' type="submit" onClick={onSubmit} style={{marginTop: '20px'}}>Generate</button>
        </>
    )    
}

export default ScaleTab