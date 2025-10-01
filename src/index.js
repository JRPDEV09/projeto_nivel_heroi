let nomeHeroi="Heroi"
let quantidadeXp=2005
let nivelHeroi="Indefinido"

if (quantidadeXp<=1000){
    console.log("Nível Ferro")
}
else{
    if(quantidadeXp>=1001&&quantidadeXp<=2000){
        nivelHeroi="Nível Bronze"
    }
    else{
        if(quantidadeXp>=2001&&quantidadeXp<=5000){
            nivelHeroi="Nível Prata"
        }
        else{
            if(quantidadeXp>=5001&&quantidadeXp<=7000){
                nivelHeroi="Nível Ouro"
            }
            else{
                if(quantidadeXp>=7001&&quantidadeXp<=8000){
                    nivelHeroi="Nível Platina"
                }
                else{
                    if(quantidadeXp>=8001&&quantidadeXp<=9000){
                        nivelHeroi="Nível Ascendente"
                    }
                    else{
                        if(quantidadeXp>=9001&&quantidadeXp<=10000){
                            nivelHeroi="Nível Ascendente"
                        }
                        else{
                            nivelHeroi="Nível Radiante"
                        }
                    }
                }
            }
        }
    }
}
console.log("O Herói de nome "+nomeHeroi+ " está no nível de "+nivelHeroi)