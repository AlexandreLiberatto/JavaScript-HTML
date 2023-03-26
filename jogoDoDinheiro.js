const frm = document.querySelector("form")
const dvMoedas = document.querySelector("#divMoedas")

window.addEventListener("load", () => {
    const num1_00 = Math.ceil(Math.random() * 5) 
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    const alt1_00 = "Moedas de um real"
    const alt0_50 = "Moedas de cinquenta centavos"
    const alt0_25 = "Moedas de vinte e cinco centavos"
    const alt0_10 = "Moedas de dez centavos"

    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00") 
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50")
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25")
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10")
})