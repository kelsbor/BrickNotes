import React, { useState, useRef } from "react";
import Piano from "./Piano";
import "../styles/piano.css";

const PianoContainer = () => {
  const [pianos, setPianos] = useState([
    { id: 1, occupied: false },
    { id: 2, occupied: false },
  ]);
  const pianoRefs = useRef([]);

  const addPianoRef = (el, id) => {
    if (el) {
      const index = pianoRefs.current.findIndex((ref) => ref.id === id);
      if (index === -1) {
        pianoRefs.current.push({ id, ref: el });
      } else {
        pianoRefs.current[index] = { id, ref: el };
      }
    }
  };

  const removePianoRef = (id) => {
    pianoRefs.current = pianoRefs.current.filter((item) => item.id !== id);
  };

  const handleAddPiano = () => {
    setPianos((prevPianos) => [
      ...prevPianos,
      { id: prevPianos.length + 1, occupied: true },
    ]);
  };

  const handleRemovePiano = (id) => {
    setPianos((prevPianos) => prevPianos.filter((piano) => piano.id !== id));
    removePianoRef(id);
  };

  const handlePlayAll = async () => {
    console.log("Valid piano refs:", pianoRefs.current);
    for (const { ref } of pianoRefs.current) {
      if (ref && ref.play) {
        await ref.play();
        await setTimeout(1000)
      }
    }
  };

  return (
    <>
    <div className="piano-container">
    <div className="container-fluid">
        <nav className="navbar navbar-expand-sm text-white p-3 m-0 bg-dark">
          <button
            className="btn btn-primary m-2 add-piano-btn"
            onClick={handleAddPiano}
          >
            <i className="bi bi-plus-circle-fill"></i> Add Piano
          </button>
          <button
            className="btn btn-primary m-2 add-piano-btn"
            onClick={handlePlayAll}
          >
            <i className="bi bi-play-fill"></i> Play All
          </button>
        </nav>
      </div>

      <div className="grid-container">
        {pianos.map((piano) => (
          <div key={piano.id} className="grid-item">
            <Piano ref={(el) => addPianoRef(el, piano.id)} />
            <button
              className="btn btn-danger remove-piano-btn"
              onClick={() => handleRemovePiano(piano.id)}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PianoContainer;