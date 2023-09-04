// JavaScript source code

let PlayerName = "ChrisDev"
let PlayerXp = 10500

let PlayerRank;

console.log("checando o nível do player... " + PlayerName)

if (pontosXP < 1000) {
    PlayerRank = "Ferro";
} else if (PlayerXp >= 1001 && PlayerXp <= 2000) {
    PlayerRank = "Bronze";
    
} else if (PlayerXp >= 2001 && PlayeerXp <= 5000) {
    PlayerRank = "Prata";
    
} else if (PlayerXp >= 5001 && PlayerXp <= 7000) {
    PlayerRank = "Ouro";
    
} else if (PlayerXp >= 7001 && PlayerXp <= 8000) {
    PlayerRank = "Platina";
    
} else if (PlayerXp >= 8001 && PlayerXp <= 9000) {
  PlayerRank = "Ascendente";
    
} else if (PlayerXp >= 9001 && PlayerXp <= 10000) {
   PlayerRank = "Imortal";
    
} else {
    PlayerRank = "Radiante";
}

console.log(`O Herói de nome ${PlayerName} está no nível de ${PlayerRank}!`)
console.log("Continue assim!)



