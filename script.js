let heroStrenth = 0
let heroIntelligence = 0
let heroAgility = 0

let villainStrength = 0
let villainIntelligence = 0
let villainAgility = 0
let timer
let health = 5
let score = 0
// list of Heros 
let heroes = ["Superman", "thor", "Black Panther", "Iron Man", "spidey", "hulk","venom"];
// list of villains 
let villains = ["Darth Vader", "Hades", "Hela", "Jafar", "Joker", "Loki", "Scar", "Thanos", "Two Face"];




function createHero() {
    // list of Heros 
    let heroes = ["Superman", "thor", "Black Panther", "Iron Man", "Batman", "spidey", "hulk","venom"];
    // random heros
    let randomHero = heroes[Math.floor(Math.random() * heroes.length)]

    document.getElementById('hero-name').textContent = randomHero
    //  Name
    document.getElementById('hero-name').textContext = randomHero
    // image
    document.querySelector('#hero-img img').src = "./heroes/" + randomHero + '.jpg'

}
createHero()

function createvillain() {
    // list of villains 
    let villains = ["Darth Vader", "Hades", "Hela", "Jafar", "Joker", "Loki", "Scar", "Thanos", "Two Face"];

    // random villain
    let randomVillain = villains[Math.floor(Math.random() * villains.length)]
    document.getElementById('villain-name').textContent = randomVillain

    //  Name
    document.getElementById('villain-name').textContext = randomVillain
    // image
    document.querySelector('#villain-img img').src = "./villains/" + randomVillain + '.jpg'
}
createvillain()

// let info = prompt("Are you ready? y/n")
// if(info =='y'){

// }else{
//     window.location.href ="fuck off Looser.html"
// }
function generateHeroStats() {
    heroStrenth = Math.round(Math.random() * 100)
    document.querySelector('#hero-strength div').style.width = heroStrenth + '%'
    document.querySelector('#hero-strength div').textContent = `strength: ${heroStrenth}%`



    heroIntelligence = Math.round(Math.random() * 100)
    document.querySelector('#hero-intelligence div').style.width = heroIntelligence + '%'
    document.querySelector('#hero-intelligence div').textContent = `Intelligence: ${heroIntelligence}%`



    heroAgility = Math.round(Math.random() * 100)
    document.querySelector('#hero-agility div').style.width = heroAgility + '%'
    document.querySelector('#hero-agility div').textContent = `Agility: ${heroAgility}%`



}
function generateVillainStats() {
    villainStrength = Math.round(Math.random() * 100)
    document.querySelector('#villain-strength div').style.width = + '%'
    document.querySelector('#villain-strength div').textContent = `Strength: ${villainStrength}%`


    villainIntelligence = Math.round(Math.random() * 100)
    document.querySelector('#villain-intelligence div').style.width = villainIntelligence + '%'
    document.querySelector('#villain-intelligence div').textContent = `Intelligence: ${villainIntelligence}%`



    villainAgility = Math.round(Math.random() * 100)
    document.querySelector('#villain-agility div').style.width = villainAgility + '%'
    document.querySelector('#villain-agility div').textContent = `Agility: ${villainAgility}%`




}

function checkFightDecision() {
    clearInterval(timer)
    
    if (heroIntelligence > villainIntelligence || (heroStrenth >= villainStrength && heroAgility > villainAgility)) {
        score += 10;
        console.log('You win the fight ')
        console.log(score )
        round()
    } else {
        health--
        if  (health <= 0){
            localStorage.setItem('score',score)
            window.location.href ='gameover.html'
        }
        showHearts(health)
        console.log('You Shoulg\'ve Run loser')
        round()
    }

}
function checkRunDecision() {
    clearInterval(timer)
    if (heroIntelligence > 80|| heroAgility > villainAgility) {
        console.log('You Escaped')
        round()
    } else {
        health--
        if  (health <= 0){
            localStorage.setItem('score',score)
            window.location.href ='gameover.html'
        }
        showHearts(health)
        console.log('Opps too slow 😝')
        round()
    }

    
}
createHero()
createvillain()
generateHeroStats()
generateVillainStats()

// checkFightDecision()


function startCountdown() {
    let count = 10
    timer = setInterval(function () {
        count--
        document.getElementById("count-down").textContent = count;
        if (count <=0){
            clearInterval(timer)
            health--
            if (health <= 0){
                window.location.href ='gameover.html'
            }
            round()
        }

        // console.log(count);
    }, 1000)

}


function showHearts(num) {
    let hearts = '';
    for (let i = 0; i < num; i++) {
        hearts += '💔'
    }
    // console.log(document.getElementById('hearts'))
document.getElementById('hearts').textContent = hearts

}

function round(){
    createHero()
    createvillain()
    generateHeroStats()
    generateVillainStats()
    startCountdown() 
    showHearts(health) 
}
round()
