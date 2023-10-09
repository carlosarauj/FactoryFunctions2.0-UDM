function pessoa(nome,sobrenome, altura, peso){
    return{
        nome,
        sobrenome,

        say(frase){
            return `ola ${this.nome} ${frase}, `
        },
        peso: peso,
        altura: altura,
        imc(){
            let ind = this.peso / (this.altura ** 2)
            return ind.toFixed(2)
        }
    }
}

let p1  = pessoa('Carlos', 'Araújo', 1.7, 80)
let p2 = pessoa('Lucas', 'Moura', 1.7, 90)
console.log(p1.imc())