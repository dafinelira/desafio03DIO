class hero {
    constructor(name,age,type){
        this.name = name,
        this.age = age,
        this.type = type
    }    

    atack(type){
        if(type === "mago"){
            console.log("usou magia")
        }

        if(type === "guerreiro"){
            console.log("usou espada")
        }

        if(type === "monge") {
            console.log("usou artes maciais")
        }

        if(type === "ninja") {
            console.log("usou shuriken")
        }
    }
    
}

let heroTwo = new hero("Geraldo", 28)
let atackType = "guerreiro"


console.log(`o ${heroTwo.name} atacou usando ${atackType}`)