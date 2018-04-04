class Pokemon{
    constructor(name,hp,attack,defense,abilities=[]){
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
        this.name = name
    }
    addAbility(ability){
        this.abilities.push(ability)
    }
}
class Scott{
    constructor(){
        this.pokemon = []
    }
    all(){
        return this.pokemon
    }
    add(poke){
        this.pokemon.push(poke)
    }
}
let scooter = new Scott()



let hp = document.getElementById("piplup-hp")
let attack = document.getElementById("piplup-attack")
let defense = document.getElementById("piplup-defense")




axios.get("https://pokeapi.co/api/v2/pokemon/393/")
.then((response) => {
    let data = response.data
    let abilities = document.getElementById("piplup-abilities")

    let piplup = new Pokemon(
        data.name, //WHY?
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )
    data.abilities.forEach((item) => {
        piplup.addAbility(item.ability.name)
        abilities.innerHTML += item.ability.name + "<br>"
    })
    scooter.add( piplup)
    hp.innerHTML = piplup.hp
    attack.innerHTML = piplup.attack
    defense.innerHTML = piplup.defense

}).catch((error) => {
    console.log(error)
  })


//PIPLUP



  axios.get("https://pokeapi.co/api/v2/pokemon/394/")
.then((response) => {
    let data = response.data
    let hp = document.getElementById("prinplup-hp")
    let attack = document.getElementById("prinplup-attack")
    let defense = document.getElementById("prinplup-defense")
    let abilities = document.getElementById("prinplup-abilities")
    let prinplup = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )
    data.abilities.forEach((item) => {
        prinplup.addAbility(item.ability.name)
        abilities.innerHTML += item.ability.name +"<br>"
    })
    scooter.add(prinplup)
    hp.innerHTML = prinplup.hp
    attack.innerHTML = prinplup.attack
    defense.innerHTML = prinplup.defense
}).catch((error) => {
    console.log(error)
  })



//PRINPLUP

  axios.get("https://pokeapi.co/api/v2/pokemon/395/")
  .then((response) => {
      let data = response.data
      let hp = document.getElementById("empoleon-hp")
      let attack = document.getElementById("empoleon-attack")
      let defense = document.getElementById("empoleon-defense")
      let abilities = document.getElementById("empoleon-abilities")
      let empoleon = new Pokemon(
          data.name,
          data.stats[5].base_stat,
          data.stats[4].base_stat,
          data.stats[3].base_stat,
      )
      data.abilities.forEach((item) => {
          empoleon.addAbility(item.ability.name)
          abilities.innerHTML += item.ability.name +"<br>"
      })
      scooter.add(empoleon)
      hp.innerHTML = empoleon.hp
      attack.innerHTML = empoleon.attack
      defense.innerHTML = empoleon.defense
  }).catch((error) => {
      console.log(error)
    })



//nickname button!


    let myBtn = document.querySelector("#btn");
    let myInput = document.querySelector("#username");
    let myMsg = document.querySelector("#desc");

    myBtn.addEventListener("click", myFunction);
    function myFunction() {
      myMsg.innerHTML = "WHATS going on guys, <br><br> its ya boi " + myInput.value
      // "What? " + myInput.value + "<br><br> is Evolving!";


    }




    let evolveButton = document.querySelector('#evo')
    let evoImage = document.querySelector('#evoImage')
    let evoImage2 = document.querySelector('#evoImage2')
    let power = document.querySelector('.info')
    let prinBackground = document.querySelector('.container')
    let tunes = document.getElementById("myAudio");
    evolveButton.addEventListener("click", (event) => {


      evoImage.classList.add("evolve");
      evoImage2.classList.add("evolve2");
      myMsg.innerHTML = myInput.value + " is evolving!"
      tunes.play();

setTimeout(changeToPrinplup, 3800);
      function changeToPrinplup () {

prinBackground.style["background-image"] = 'url(https://i.pinimg.com/originals/cb/b4/75/cbb4756453473e5e6713f000e3f3a48f.jpg)';
myMsg.innerHTML = myInput.value + " evolved" + "<br><br> into Prinplup!";
evolveButton.innerHTML = "Level 32";
tunes.pause();
hp.id = "prinplup-hp";
attack.id = "prinplup-attack";
defense.id = "prinplup-defense";
//Changes ID to prinplup but the value on the page stays the same


}


    })
