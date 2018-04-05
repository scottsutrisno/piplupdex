
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


// PIPLUP //



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
    data.abilities.forEach((item, addAbility) => {
        piplup.addAbility(item.ability.name)
        abilities.innerHTML += item.ability.name + "<br>"
    })
    scooter.add(piplup)
    hp.innerHTML = piplup.hp
    attack.innerHTML = piplup.attack
    defense.innerHTML = piplup.defense

}).catch((error) => {
    console.log(error)
  })






// PRINPLUP //


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
    data.abilities.forEach((item, addAbility) => {
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




// EMPOLEON //



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
      data.abilities.forEach((item, addAbility) => {
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





// NICKNAME //


    let myBtn = document.querySelector("#btn");
    let myInput = document.querySelector("#username");
    let myMsg = document.querySelector("#desc");

    myBtn.addEventListener("click", myFunction);
    function myFunction() {
      myMsg.innerHTML = "WHATS going on guys, <br><br> its ya boi " + myInput.value

    }




    // EVOLVE BUTTON //


    let evolveButton2 = document.querySelector('.evo2')
    let evolveButton = document.querySelector('.evo')
    let evoImage = document.querySelector('#evoImage')
    let evoImage2 = document.querySelector('#evoImage2')
    let evoImage3 = document.querySelector('#evoImage3')
    let prinBackground = document.querySelector('.container')
    let tunes = document.querySelector('#myAudio');
    let piplupStats = document.querySelector('.info')
    let prinplupStats = document.querySelector('.info2')
    let empoleonStats = document.querySelector('.info3')


    evolveButton.addEventListener("click", (event) => {

      tunes.play();
      evoImage.classList.add("evolve");
      evoImage2.classList.add("evolve2");
      myMsg.innerHTML = myInput.value + " is evolving!"




setTimeout(changeToPrinplup, 7130); //stackoverflow showed me how to delay a function
      function changeToPrinplup () {

prinBackground.style["background-image"] = 'url(https://i.pinimg.com/originals/cb/b4/75/cbb4756453473e5e6713f000e3f3a48f.jpg)';
myMsg.innerHTML = myInput.value + " evolved" + "<br><br> into Prinplup!";
tunes.pause();

prinplupStats.classList.add("fadeIn");
piplupStats.classList.add("fadeOut");
evolveButton.style.zIndex = "-1";
evolveButton2.style.zIndex = "1";


}


    })





    evolveButton2.addEventListener("click", (event) => {

      tunes.play();
      evoImage.classList.add("evolve2");
      evoImage3.classList.add("evolve");
      myMsg.innerHTML = "Prinplup" + " is evolving!"



setTimeout(changeToEmpoleon, 7130);
      function changeToEmpoleon () {

prinBackground.style["background-image"] = 'url(https://pokewalls.files.wordpress.com/2012/12/395empoleon1920x1200.jpg)';
myMsg.innerHTML = "Prinplup evolved" + "<br><br> into Empoleon!";
tunes.pause();

empoleonStats.classList.add("fadeIn");
prinplupStats.classList.add("fadeOut");


}

  })
