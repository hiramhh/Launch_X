const fetchPokemon = () => {
  const pokeName = document.getElementById("pokeName")
  let pokeInput = pokeName.value.toLowerCase();
  const url=`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

  fetch(url).then((res) => {
    if (res.status != "200"){
      console.log(res);
      pokeImage("./pikachu-sad.gif");
    }
    else{
      return res.json();
    }

  }).then((data) =>{
    console.log(data);
    let pokeImg = data.sprites.front_default;
    console.log(pokeImg);
    pokeImage(pokeImg);

  })

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src= url;
}





  fetch(url).then((res) => {
    if (res.status != "200"){
      console.log(res);
      pokeNombre("Pokemon no encontrado");
    }
    else{
      return res.json();
    }

  }).then((data) =>{
    console.log(data);
    let pokenm = data.name;
    console.log(pokenm);
    pokeNombre(pokenm);

})

const pokeNombre = (url) => {
  const pokenm = document.getElementById("nombrePokemon");
  pokenm.value = url;
}


fetch(url).then((res) => {
  if (res.status != "200"){
    console.log(res);
    pokeType("uups! some is wrong");
  }
  else{
    return res.json();
  }

}).then((data) =>{
  console.log(data);
  let pokeTp = data.types.map((typ)=>typ.type.name);
  console.log(pokeTp);
  pokeType(pokeTp);

})

const pokeType = (url) => {
const pokeTp = document.getElementById("typePokemon");
pokeTp.value= url;
}



}
