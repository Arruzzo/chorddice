const p2 = document.querySelector('#p2');
const button = document.querySelector('.button');
const chord = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];
const quality = ["", "m"];

button.addEventListener('click', show);

function show() {
    const randomChord = Math.floor(Math.random() * chord.length);
    const randomQuality = Math.floor(Math.random() * quality.length);

p2.innerHTML = chord[randomChord] + quality[randomQuality];
}