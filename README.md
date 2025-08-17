# BrickNotes 🎵

**Build your sound!**  

BrickNotes is an interactive web-based music tool designed to help musicians, enthusiasts, and developers experiment with piano components, chords, scales, and negative harmony. Developed as part of a Web Development class at **PUC-Campinas**, this project combines commonly used technologies and interesting music theory concepts to deliver a cool user experience.

---

## Table of Contents

1. [Project Concept](#project-concept)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Core Logic and Mechanisms](#core-logic-and-mechanisms)
5. [Project Structure](#project-structure)
6. [Setup and Installation](#setup-and-installation)
7. [Screenshots and Demo](#screenshots-and-demo)
8. [Future Improvements](#future-improvements)
9. [Contributing](#contributing)
10. [License](#license)

---

## Project Concept

BrickNotes is a tool that focuses on **interactive music theory exploration**. Users can:

- Visualize and play piano notes dynamically.
- Build and explore chords and scales.
- Generate **negative harmony** transformations based on a selected axis.
- Experiment with different music ideas in an intuitive, visual, and auditory manner.

---

## Features

1. **Dynamic Piano Component**  
   - Interactive piano with customizable note highlighting.
   - Scalable SVG model for rendering.

2. **Chord and Scale Generator**  
   - Generate and display chords/scales with playback.
   - Highlight notes dynamically based on user selections.

3. **Negative Harmony Exploration**  
   - Select an axis of reflection to generate negative chords/scales.
   - Visualize results on the piano.

4. **Audio Playback Modes**  
   - Play chords as harmonic blocks.
   - Play arpeggios.

5. **Responsive Design**  
   - Responsive interface using **Bootstrap**.
   - Cool animations.

6. **Technologies Integration**  
   - Interactive scrolling animations powered by **AOS**.
   - Dynamic note playback using JavaScript audio API.

---

## Technologies Used

### Frontend
- **React**: Component-based architecture for building a dynamic and interactive user interface.
- **Bootstrap**: Framework for styling and responsive design.
- **AOS (Animate On Scroll)**: Library for adding scrolling animations.

### Audio
- **HTML5 Audio API**: For dynamically loading and playing note audio files.

### Other Tools
- **SVG Models**: Used for rendering the piano component.
- **Git**: Version control and collaboration.
- **GitHub**: Repository hosting and documentation.

---

## Core Logic and Mechanisms

### Piano Rendering
- A scalable SVG-based piano renders the keyboard dynamically.
- Each key is associated with an ID, enabling real-time interaction and highlighting.

### Chord/Scale Generator
- Algorithms process user-selected notes and generate corresponding chords/scales.
- Data is mapped to values (0–11 for C–B) to simplify calculations.

### Negative Harmony
- Implements **note reflection** around a user-selected axis (e.g., D♯/E♭ as axis of symmetry).
- Calculates mirrored notes and displays results on the piano.

### Audio Playback
- Notes are mapped to `.mp3` files (e.g., `c4.mp3`) stored locally.
- **Chord Mode**: All selected notes play simultaneously.
- **Arpeggio Mode**: Notes play sequentially with a configurable delay.

---
## Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/kelsbor/bricknotes.git
   cd bricknotes

2. Install Dependencies
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

4. Open the application in your browser at http://localhost:3000.

--- 

## Future Improvements
- **Customizable Piano Sizes:** Allow users to create pianos with more or fewer keys.
- **Enhanced Audio:** Add support for multiple octaves and dynamic volume control.
- **User Profiles:** Save user progress and preferences with backend integration.
- **Mobile Optimization:** Further refine the mobile experience.
- **Pre-Defined Models:** Make it easier for working with harmony.
- **Random Generation:** Select parameters randomly for testing.

---

## License
This project is licensed under the GNU License. See LICENSE for details.