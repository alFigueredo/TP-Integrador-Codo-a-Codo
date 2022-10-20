let cantidad = document.querySelector("#cantidad");
let categoria = document.querySelector("#categoria");
let botonBorrar = document.querySelector(".botonBorrar");
let botonResumen = document.querySelector(".botonResumen");
let monto = document.querySelector("#monto");

const categorias = {
    Estudiante: 0.8,
    Trainee: 0.5,
    Junior: 0.15,
};

const span_monto = () => {
    monto.innerHTML = Math.round(100 * cantidad.value * (1 - categorias[categoria.value]));
};

botonResumen.addEventListener('click', () => {
    if (cantidad.value && categoria.value)
        span_monto();
});

botonBorrar.addEventListener('click', () => {
    monto.innerHTML = ""
});