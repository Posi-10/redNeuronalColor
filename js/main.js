var neurona = new brain.NeuralNerwork

neurona.train([
    {input: {rojo:0, verde:0, azul:0}, output:{color:1}},
    {input: {rojo:1, verde:1, azul:1}, output:{color:0}},
])
function update (color){
    console.log(color.rgb)
    $(bg_color).css("background-color", color)

    var entrada = {
        rojo: color.toRGBString(0,0,0)/255,
        verde: color.toRGBString(1,1,1)/255,
        azul: color.toRGBString(2,2,2)/255
    }

    var resultado = neurona.run(entrada)
    console.log(resultado)
}
