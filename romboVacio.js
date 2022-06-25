let asterisco ="*";
let espacioLetra =" ";
let espacioCantidad = 3;
let repetirY_1 = 4;
let repetirY_2 = 3;
let repetirXActualmente = 1;
let FiguraFinal="";

for (let i = 0; i < repetirY_1; i++) {

        for (var espacioIndex = 0; espacioIndex < espacioCantidad; espacioIndex++) {
                FiguraFinal+= espacioLetra;
                
        }
        espacioCantidad--;
        
        
        for (let j = 0; j < repetirXActualmente; j++) {
                 
                if(j==0){

                        FiguraFinal+=asterisco;
                }
                else if(j==repetirXActualmente-1){
                        FiguraFinal+=asterisco;
                }
                else{
                        FiguraFinal+= espacioLetra;
                } 
                
        }
        repetirXActualmente+=2;
        FiguraFinal += '\n';
        
}

espacioCantidad=1;
repetirXActualmente-=4;
for (let i = 0; i < repetirY_1; i++) {

        for (var espacioIndex = 0; espacioIndex < espacioCantidad; espacioIndex++) {
                FiguraFinal+= espacioLetra;
                
        }
        espacioCantidad++;
        
        
        for (let j = 0; j < repetirXActualmente; j++) {
                
                if(j==0){

                        FiguraFinal+=asterisco;
                }
                else if(j==repetirXActualmente-1){
                        FiguraFinal+=asterisco;
                }
                else{
                        FiguraFinal+= espacioLetra;
                } 
                
        }
        repetirXActualmente-=2;
        FiguraFinal += '\n';
        
}
console.log(FiguraFinal);



