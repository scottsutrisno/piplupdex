
class Pokemon{
    constructor(name,hp,attack,defense){
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = []
        this.name = name

    }
    ability(ability){

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
    add(addToArray){
        this.pokemon.push(addToArray)
    }
    //
    // get(name) {
    //   for(let i = 0; i < pokemon.length; i++)
    //   if(name == pokemon[i].name){
    //     return pokemon[i]
    //   }
    // }



}
let scooter = new Scott()


// PIPLUP //



axios.get("https://pokeapi.co/api/v2/pokemon/393/")
.then((response) => {
    let data = response.data
    let hp = document.querySelector("#piplup-hp")
    let attack = document.querySelector("#piplup-attack")
    let defense = document.querySelector("#piplup-defense")
    let abilities = document.querySelector("#piplup-abilities")

    let piplup = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )



    data.abilities.forEach((item, ability) => {
        piplup.ability(item.ability.name)
        abilities.innerHTML += item.ability.name + "<br>"










    })
    scooter.add(piplup)
    hp.innerHTML = piplup.hp
    attack.innerHTML = piplup.attack
    defense.innerHTML = piplup.defense

})


// PRINPLUP //


  axios.get("https://pokeapi.co/api/v2/pokemon/394/")
.then((response) => {
    let data = response.data
    let hp = document.querySelector("#prinplup-hp")
    let attack = document.querySelector("#prinplup-attack")
    let defense = document.querySelector("#prinplup-defense")
    let abilities = document.querySelector("#prinplup-abilities")
    let prinplup = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )
    data.abilities.forEach((item, ability) => {
        prinplup.ability(item.ability.name)
        abilities.innerHTML += item.ability.name +"<br>"
    })
    scooter.add(prinplup)
    hp.innerHTML = prinplup.hp
    attack.innerHTML = prinplup.attack
    defense.innerHTML = prinplup.defense
})


// EMPOLEON //


  axios.get("https://pokeapi.co/api/v2/pokemon/395/")
  .then((response) => {
      let data = response.data
      let hp = document.querySelector("#empoleon-hp")
      let attack = document.querySelector("#empoleon-attack")
      let defense = document.querySelector("#empoleon-defense")
      let abilities = document.querySelector("#empoleon-abilities")
      let empoleon = new Pokemon(
          data.name,
          data.stats[5].base_stat,
          data.stats[4].base_stat,
          data.stats[3].base_stat,
      )
      data.abilities.forEach((item, ability) => {
          empoleon.ability(item.ability.name)
          abilities.innerHTML += item.ability.name +"<br>"
      })
      scooter.add(empoleon)
      hp.innerHTML = empoleon.hp
      attack.innerHTML = empoleon.attack
      defense.innerHTML = empoleon.defense
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
    let buttonDesc = document.querySelector('.level')
    let evoImage = document.querySelector('#evoImage')
    let evoImage2 = document.querySelector('#evoImage2')
    let evoImage3 = document.querySelector('#evoImage3')
    let prinBackground = document.querySelector('.container')
    let tunes = document.querySelector('#myAudio')
    let piplupStats = document.querySelector('.info')
    let prinplupStats = document.querySelector('.info2')
    let empoleonStats = document.querySelector('.info3')


    evolveButton.addEventListener("click", (event) => {

      tunes.play();

      evoImage.classList.add("evolve2");
      evoImage2.classList.add("evolve");
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
            buttonDesc.innerHTML = "LVL 32!"
            evoImage2.classList.remove("nFadeOut");

      }
    })


// EVOLVE BUTTON 2 //


    evolveButton2.addEventListener("click", (event) => {
      tunes.currentTime = 0;
      tunes.play();
      evoImage2.classList.add("evolve2");
      evoImage3.classList.add("evolve");
      myMsg.innerHTML = "Prinplup" + " is evolving!"



setTimeout(changeToEmpoleon, 7130);
      function changeToEmpoleon () {

prinBackground.style["background-image"] = 'url(https://pokewalls.files.wordpress.com/2012/12/395empoleon1920x1200.jpg)';
myMsg.innerHTML = "Prinplup evolved" + "<br><br> into Empoleon!";
tunes.pause();

empoleonStats.classList.add("fadeIn");
prinplupStats.classList.add("fadeOut");
evolveButton2.style.zIndex = "-1";
buttonDesc.innerHTML = ""
evoImage2.classList.remove("nFadeOut");


}

  })






  let piplupButton = document.querySelector('#nv3');



  piplupButton.addEventListener("click", (event) => {

evolveButton2.style.zIndex = "-1";
evolveButton.style.zIndex = "1";
evoImage.style.opacity = "1";
evoImage2.style.opacity = "0";
evoImage3.style.opacity = "0";
buttonDesc.innerHTML = "LVL 16!"
prinBackground.style["background-image"] = 'url(http://getwallpapers.com/wallpaper/full/7/8/2/1099174-free-download-piplup-wallpaper-1920x1080-photo.jpg)';
piplupStats.style.opacity = "1";
prinplupStats.style.opacity = "0";
empoleonStats.style.opacity = "0";


  })





    let prinplupButton = document.querySelector('#nv2');



    prinplupButton.addEventListener("click", (event) => {

  evolveButton2.style.zIndex = "1";
  evolveButton.style.zIndex = "-1";
  evoImage.style.opacity = "0";
  evoImage2.style.opacity = "1";
  evoImage3.style.opacity = "0";
  buttonDesc.innerHTML = "LVL 32!"
  prinBackground.style["background-image"] = 'url(https://i.pinimg.com/originals/cb/b4/75/cbb4756453473e5e6713f000e3f3a48f.jpg)';
  piplupStats.style.opacity = "0";
  prinplupStats.style.opacity = "1";
  empoleonStats.style.opacity = "0";


    })




      let empoleonButton = document.querySelector('#nv1');



      empoleonButton.addEventListener("click", (event) => {

    evolveButton2.style.zIndex = "-1";
    evolveButton.style.zIndex = "-1";
    evoImage.style.opacity = "0";
    evoImage2.style.opacity = "0";
    evoImage3.style.opacity = "1";
    buttonDesc.innerHTML = ""
    prinBackground.style["background-image"] = 'url(https://pokewalls.files.wordpress.com/2012/12/395empoleon1920x1200.jpg)';
    piplupStats.style.opacity = "0";
    prinplupStats.style.opacity = "0";
    empoleonStats.style.opacity = "1";

      })



      let sprite = document.querySelector('#sprite')
      let trainerCard = document.querySelector('#logo');
      sprite.addEventListener("click", (event) => {

      trainerCard.style.opacity = "1";



        })

        trainerCard.addEventListener("click", (event) => {

        trainerCard.style.opacity = "0";

      })
