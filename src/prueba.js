function saludar({nombre, edad, profesion}){
    console.log("hola me llamo " + nombre + " soy un " + profesion + " y tengo " + edad + " años");
}

const persona = {
    nombre: "Juan",
    edad: 43,
    profesion: "arquitecto"
};

saludar(persona);