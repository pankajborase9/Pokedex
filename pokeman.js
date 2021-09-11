//initializing Values////////
var p =   0
var q =  p+20


//Setting Names to the button/////////
async function getPokemon () {
          for ( var i=0;i<20;i++)
          await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${p}&limit=${q}/results`,
           {Method:"GET"})
           .then (pokemon =>(pokemon.json()))
           .then(data=> {document.querySelector('.inlist').innerHTML+=`<button onclick="setpokemon(${p+i+1})" class="pokebutton" value="${p+i+1}">${data.results[i].name}</button>`;
                        })}

getPokemon()


//Adding Initial Details///////////
 async function initialsetter(a){ 
                    await fetch(`https://pokeapi.co/api/v2/pokemon/${a}`)
                    .then(data=>data.json())
                    .then(data=>{console.log(data.types[0].type.name)
                      document.querySelector('.name1').innerHTML+=`${data.name }`;
                      document.querySelector('.baseexprience').innerHTML+=`Base Exprience:${data.base_experience}`;
                      document.querySelector('.height').innerHTML+=`Height:${data.height}`;
                      document.querySelector('.weight').innerHTML+=`Weight:${data.weight}`;
                      document.querySelector('.type').innerHTML+=`Type:${data.types[0].type.name}`;
                      document.querySelector('.image').src=`${data.sprites.other.dream_world.front_default}`;
                    }) }

initialsetter(p+1)


//Setting Initial Details///////////
async function setpokemon(value){
                    console.log(document.querySelector(' .inbody'))
                    document.querySelector('.name1').innerHTML='';
                    document.querySelector('.baseexprience').innerHTML='';
                    document.querySelector('.height').innerHTML='';
                    document.querySelector('.weight').innerHTML='';
                    document.querySelector('.image').innerHTML='';
                    document.querySelector('.type').innerHTML='';
                    await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
                    .then(data=>data.json())
                    .then(data=>{console.log(data.sprites)
                      document.querySelector('.name1').innerHTML+=`${data.name }`;
                      document.querySelector('.baseexprience').innerHTML+=`Base Exprience:${data.base_experience}`;
                      document.querySelector('.height').innerHTML+=`Height:${data.height}`;
                      document.querySelector('.weight').innerHTML+=`Weight:${data.weight}`;
                      document.querySelector('.type').innerHTML+=`Type:${data.types[0].type.name}`;
                      document.querySelector('.image').src=`${data.sprites.other.dream_world.front_default}`;
                    }) }

////Values To Next Button///////
function nxtbutton(){
             document.querySelector('.inlist').innerHTML=''
              if (q <=1000)
                  p+=20,q+=20
                  console.log(p,q)
                  getPokemon()
                  } 


////Values To Previous Button//////
function prebutton(){
             document.querySelector('.inlist').innerHTML=''
             if (p>0)
                p-=20,q-=20
                getPokemon()
                } 

