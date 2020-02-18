 const KEYS = new Map(
   [
     //key white
     ['z' , 'C'],['x' , 'G'],['c' , 'E'],['v' , 'F'],['b' , 'B'],['n' , 'D'],['m' , 'A'],
     // key black
     ['a' , 'GB'],['s' , 'Eb'],['d' , 'Bb'],['f' , 'Db'],['g' , 'Ab'],
   ]
 );

const NOTES = new Map([
  ['C', 'notes/C.mp3'],['GB', 'notes/Gb.mp3'],['G', 'notes/G.mp3'],['Eb', 'notes/Eb.mp3'],
  ['E', 'notes/E.mp3'],['F', 'notes/F.mp3'],['Bb', 'notes/Bb.mp3'],['B', 'notes/B.mp3'],
  ['Db', 'notes/Db.mp3'],['D', 'notes/D.mp3'],['Ab', 'notes/Ab.mp3'],['A', 'notes/A.mp3'],
]);
const key = document.querySelectorAll('.key');
key.forEach(key=> {
    key.addEventListener('click', () => {
    const divElement =  key.dataset.note;
      onPlaySound(divElement);
    });
    
});

document.addEventListener('keydown', e => {
   if(!e.repeat){
    const noteId = KEYS.get(e.key)
    if(noteId !== null){
      onPlaySound(noteId);
    }
   }
});

function onPlaySound(key){
    const audio = NOTES.get(key);
    var sound = new Audio(audio);
    sound.play();
};








