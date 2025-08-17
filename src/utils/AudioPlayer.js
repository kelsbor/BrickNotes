const AudioPlayer = ({ notes, playmode }) => {
    const noteFiles = [
      "c4.mp3", "c-4.mp3", "d4.mp3", "d-4.mp3", "e4.mp3",
      "f4.mp3", "f-4.mp3", "g4.mp3", "g-4.mp3", "a4.mp3",
      "a-4.mp3", "b4.mp3",
    ];
  
    const playNote = (note) => {
      return new Promise((resolve) => {
        const audio = new Audio(`/audio/piano/${noteFiles[note]}`);
        audio.onended = resolve; // Resolve the promise when the audio ends
        audio.play();
      });
    };
  
    const playChord = async () => {
      if (!notes || notes.length === 0) return;
      const playPromises = notes.map((note) => playNote(note));
      await Promise.all(playPromises); // Wait for all notes in the chord to finish
    };
  
    const playArpeggio = async () => {
      if (!notes || notes.length === 0) return;
    
      for (const note of notes) {
        playNote(note); // Start playing the note
        await new Promise((resolve) => setTimeout(resolve, 150)); // Adjust the delay (200ms here)
      }
    };
  
    return {
      play: async () => {
        if (playmode) {
          await playChord();
        } else {
          await playArpeggio();
        }
      },
    };
  };
  
  export default AudioPlayer;