// Problema 3 condicionales

const name = "oscar";
const pass = "vivamexico"
let nombre = process.argv[2];
let contraseña = process.argv[3];

if (name == nombre && pass == contraseña) {
    console.log("Bienvenido " + name);
} else {
    console.log("INTRUSO!!!!");
}

