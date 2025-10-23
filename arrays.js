const marvel_heros= ["idro_man", "thor","loki","groot","rocket"]
const dc_heros= ["batman", "superman","falsk","rock"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// const allheros= marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros= [...marvel_heros, ...dc_heros] // sparade operater ...
// console.log(all_new_heros) 

const a_new_array_of_array=[1,2,3,4,[3,4,5],23,5,6,[0,3,2],9,4,5,[0,5,3],1,4,6]

const one_more_array= a_new_array_of_array.flat(Infinity)

console.log(one_more_array)

let score1=100
let score2=200
let score3=300
let score4=400
console.log(Array.of(score1,score2,score3,score4))