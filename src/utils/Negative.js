class Negative {
    constructor(notes, axis=3.5) {
        this.axis= axis;
        this.notes = notes
    }   

    calculateNegative() {
        const negativeNotes = this.notes.map(note => {
            const reflectedNote = (2*this.axis - note) % 12;
            return reflectedNote < 0 ? reflectedNote + 12 : reflectedNote;
        });
        console.log(negativeNotes)
        return negativeNotes;
      }
}

export default Negative