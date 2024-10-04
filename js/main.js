// Definir el array
const array = ["Joaquin", 1, ["Hola", "Adios"], true];

// 1) Recorrer el array e insertar los valores en el localStorage
array.forEach((valor, i) => {
    localStorage.setItem(`variable${i}`, JSON.stringify(valor));
});

// 2) Recorrer de 0 a la longitud del array y hacer la petición de variable + i del localStorage
for (let i = 0; i < array.length; i++) {
    const valor = JSON.parse(localStorage.getItem(`variable${i}`));

    // 3) Crear un div por cada variable e insertar el valor de dicha variable en el div
    const div = document.createElement("div");
    div.textContent = `variable${i}: ${valor}`;

    // 4) Insertar estos divs en el body del HTML
    document.body.appendChild(div);
}
s