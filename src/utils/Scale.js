class Scale {
    constructor(scale, key, options) {
        this.scales = {
            // Major Scales
            "ionian": [0,2,4,5,7,9,11],
            "dorian": [0,2,3,5,7,9,10],
            "phrygian": [0,1,3,5,7,8,10],
            "lydian": [0,2,4,6,7,9,11],
            "mixolydian": [0,2,4,5,7,9,10],
            "aeolian": [0,2,3,5,7,8,10],
            "locrian": [0,1,3,5,6,8,10]
            // Harmonic Minor Scales
            

            // Melodic Minor Scales

            // Harmonic Major Scales

            // Simetric Scales
        }

        this.keys ={
            'C': 0,
            'C#':1,
            'D': 2,
            'D#': 3,
            'E': 4,
            'F': 5,
            'F#': 6,
            'G': 7,
            'G#': 8,
            'A': 9,
            'A#': 10,
            'B': 11
        } 

        this.scale = scale;
        this.key = key;
        this.options = options;
        this.selectedScale = this.scales[this.scale];
        
    }
    transpose() {
        this.selectedScale = this.selectedScale.map(note => (note + this.keys[this.key]) % 12);
        return this.selectedScale
    };
}

export default Scale