let $input = document.querySelector(".input")
let $btnAgregar = document.querySelector(".boton-agregar")
let $container = document.querySelector(".container")

class item {
    constructor(tarea) {
        this.crearDiv(tarea)
    }
    crearDiv(tarea) {
        let $inputItem = document.createElement("input")
        $inputItem.type = "text"
        $inputItem.value = tarea
        $inputItem.disabled = true
        $inputItem.classList.add("item-input")

        let $botonEditar = document.createElement("button")
        $botonEditar.innerHTML = `<i class="fas fa-lock"></i>`
        $botonEditar.classList.add("boton-editar")

        let $botonRemover = document.createElement("button")
        $botonRemover.innerHTML = `<i class="fas fa-trash"></i>`
        $botonRemover.classList.add("boton-remover")

        let $item = document.createElement("div")
        $item.appendChild($inputItem)
        $item.appendChild($botonEditar)
        $item.appendChild($botonRemover)
        $item.classList.add("item")
        $container.appendChild($item)

        $botonEditar.addEventListener("click", function () {
            if ($inputItem.disabled === true) {
                $inputItem.disabled = false
                $botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
            } else {
                $inputItem.disabled = true
                $botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
            }
        })
        $botonRemover.addEventListener("click", function () {
            $item.remove()
        })
    }
}

function chequearInput() {
    if ($input.value === "") {
        alert("Debe introducir una tarea")
    } else {
        new item ($input.value)
        $input.value = ""
    }
}

$btnAgregar.addEventListener("click", function () {
    chequearInput()
})

document.body.addEventListener("keydown", function (info) {
    if (info.key === "Enter") {
        chequearInput()
    }
})