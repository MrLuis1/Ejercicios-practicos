let texto = ("*   hola  *");

function squareH(){
    for (let i=10; i<= 10; i++){
        let marco = '';
        for (let j=0; j< i+1; j++){
            marco += '*';
        }
        console.log(marco);
    }
}
function squareV(){
    for (let i=8; i<= 8; i++){
        console.log("*         *");
    }
}

squareH();
squareV();
console.log(texto);
squareV();
squareH();