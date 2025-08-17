import React, { useState, useMemo, forwardRef, useImperativeHandle } from 'react';
import Selector from './Selector';
import AudioPlayer from '../utils/AudioPlayer';

const Piano = forwardRef(({ notes = [] }, ref) => {
    const [highlightedNotes, setHighlightedNotes] = useState(notes);
    const [showPopover, setShowPopover] = useState(false);
    const [playMode, setPlayMode] = useState(true); // true for chord, false for arpeggio
    const handleSelectNotes = (notes) => {
        console.log('Received notes:', notes);
        setHighlightedNotes(notes);
    };
    
    const getKeyColor = (noteIndex, highlightedNotes) => {
        if (highlightedNotes.includes(noteIndex)) {
          return 'blue';
        }
        const keyColorMap = {
          1: 'black',
          3: 'black',
          6: 'black',
          8: 'black',
          10: 'black',
        };
        return keyColorMap[noteIndex % 12] || 'white';
    };
    
    const keyFills = useMemo(() => {
        return Array(12).fill(0).map((_, index) => getKeyColor(index, highlightedNotes));
    }, [highlightedNotes]);
    
    const handlePianoClick = () => {
      setShowPopover((prev) => !prev);
    }

     // Expose play functionality to parent
    useImperativeHandle(ref, () => ({
      play: async () => {
        await AudioPlayer({ notes: highlightedNotes, playmode: playMode }).play();
      },
    }));
    
    return (
        <>
            <svg width="280" height="120" xmlns="http://www.w3.org/2000/svg" onClick={handlePianoClick}>
            {/* White keys */}
            <rect id="C" x="0" y="0" width="40" height="120" fill={keyFills[0]} stroke="black" />
            <rect id="D" x="40" y="0" width="40" height="120" fill={keyFills[2]} stroke="black" />
            <rect id="E" x="80" y="0" width="40" height="120" fill={keyFills[4]} stroke="black" />
            <rect id="F" x="120" y="0" width="40" height="120" fill={keyFills[5]} stroke="black" />
            <rect id="G" x="160" y="0" width="40" height="120" fill={keyFills[7]} stroke="black" />
            <rect id="A" x="200" y="0" width="40" height="120" fill={keyFills[9]} stroke="black" />
            <rect id="B" x="240" y="0" width="40" height="120" fill={keyFills[11]} stroke="black" />
            
            {/* Black keys */}
            <rect id="C#" x="25" y="0" width="30" height="80" fill={keyFills[1]} />
            <rect id="D#" x="65" y="0" width="30" height="80" fill={keyFills[3]} />
            <rect id="F#" x="145" y="0" width="30" height="80" fill={keyFills[6]} />
            <rect id="G#" x="185" y="0" width="30" height="80" fill={keyFills[8]} />
            <rect id="A#" x="225" y="0" width="30" height="80" fill={keyFills[10]} />
        </svg>
            {showPopover && (
            <Selector
              onClose={() => setShowPopover(false)}
              onSelect={handleSelectNotes}
              highlightedNotes={highlightedNotes}
            />
          )}
        <div className="controls">
          <button className="btn btn-primary play-button" onClick={() => AudioPlayer({ notes: highlightedNotes, playmode: playMode }).play()}>
            <i className="bi bi-play-fill"></i> 
          </button>
          <button
              className="btn btn-secondary switch-button"
              onClick={() => setPlayMode((prev) => !prev)}
            >
            <i class="bi bi-arrow-clockwise"></i> {playMode ? 'Chord' : 'Arpeggio'}
          </button>
        </div>
        </>
    );
});

export default Piano;