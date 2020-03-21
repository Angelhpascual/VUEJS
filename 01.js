const app = new Vue({
    //Definimos el div en el que va a actuar en este caso el div con id=app
    el:'#app',
    //Datos Objetos con atributos
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [ //[Array]
            {nombre: 'Manzana', cantidad:8},
            {nombre: 'Pera', cantidad:9},
            {nombre: 'Melocotón', cantidad:0},
            {nombre: 'Naranja', cantidad:10}
        ],
    nuevaFruta: '',
    total : 0

    },
    methods: {
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0,
            })
            this.nuevaFruta = ''
        }, 
        otroMetodo () {

        }
    },
    computed: {
        sumarFruta () {

        }
    }
})