const p3 = document.querySelector('#p3');
const button = document.querySelector('.button');
const chord = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];
const quality = ["", "m", "", "m", "", "m", "7", "m7"]; /*Triple the chances to get only major or minor chords*/

button.addEventListener('click', show);

function show() {
    const randomChord = Math.floor(Math.random() * chord.length);
    const randomQuality = Math.floor(Math.random() * quality.length);

p3.innerHTML = chord[randomChord] + quality[randomQuality];
}