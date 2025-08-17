class Chord { 
    constructor(functionalName, chordQuality, key) { 
        this.functionalChords = {
            "I": [0,4,7],
            "bII": [1,5,8],
            "II": [2,6,9],
            "bIII": [3,7,10],
            "III": [4,8,11],
            "IV": [5,9,12],
            "bV": [6,10,13],
            "V": [7,11,14],
            "bVI": [8,12,15],
            "VI": [9,13,16],
            "bVII": [10,14,17],
            "VII": [11,15,18]
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
 
        this.functionalName = functionalName; 
        this.key = key; 
        this.chordQuality = chordQuality; 
        this.selectedChord = this.functionalChords[this.functionalName]; 
    } 
 
    addQualities() { 
        switch (this.chordQuality) {
            //Add the logic for each type of chord (adding 7th, +5, 7b, etc)
            case 'major':
                break
            
            case 'minor':
                this.selectedChord[1] = this.selectedChord[1] - 1
                console.log('Modified chord:', this.selectedChord);
                break

            case 'diminished':
                this.selectedChord[1] = this.selectedChord[1] - 1
                this.selectedChord[2] = this.selectedChord[2] - 1
                break

            case 'augmented':
                this.selectedChord[2] = this.selectedChord[2] + 1
                break

            case 'major7':
                this.selectedChord.push(this.selectedChord[0] + 11)
                break

            case 'major7aug':
                this.selectedChord[2] = this.selectedChord[2] + 1
                this.selectedChord.push(this.selectedChord[0] + 11)
                break

            case 'minor7':
                this.selectedChord[1] = this.selectedChord[1] - 1
                this.selectedChord.push(this.selectedChord[0] + 10)
                break

            case 'minormaj7':
                this.selectedChord[1] = this.selectedChord[1] - 1
                this.selectedChord.push(this.selectedChord[0] + 11)
                break

            case 'dom7':
                this.selectedChord.push(this.selectedChord[0] + 10)
                break

            case 'dom7aug':
                this.selectedChord[2] = this.selectedChord[2] + 1
                this.selectedChord.push(this.selectedChord[0] + 10)
                break
            
            case 'half-diminished':
                this.selectedChord[1] = this.selectedChord[1] - 1
                this.selectedChord[2] = this.selectedChord[2] - 1
                this.selectedChord.push(this.selectedChord[0] + 10)
                break

            case 'fully-diminished':
                this.selectedChord[1] = this.selectedChord[1] - 1
                this.selectedChord[2] = this.selectedChord[2] - 1
                this.selectedChord.push(this.selectedChord[0] + 9)
                break
                
            default:
                console.error('Unknown chord quality')
        } 
    } 

    transpose() { 
        const keyRoot = this.keys[this.key]; 
        this.selectedChord = this.selectedChord.map(note => (note + keyRoot) % 12); 
    }

    mount() {
        this.addQualities();
        this.transpose();
        return this.selectedChord
    }
} 
 
export default Chord;