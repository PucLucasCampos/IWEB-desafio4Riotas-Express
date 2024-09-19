const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
   res.send("Hello, World!");
});

app.get("/calcularSeno", (req: any, res: any) => {
   const hipotesuna: number = 10;
   const catetoOposto: number = 6;
   const seno: number = catetoOposto / hipotesuna;
   console.log(`Seno: ${seno}`);
   res.send("CALCULO DO SENO");
});

app.get("/calcularCosseno", (req: any, res: any) => {
   var hipotenusa: number = 5;
   var catetoAdajacente: number = 4;
   const cosseno: number = catetoAdajacente / hipotenusa;
   console.log(`Cosseno: ${cosseno}`);
   res.send("CALCULO DO COSSENO");
});

app.get("/calcularTangente", (req: any, res: any) => {
    var catetoOposto: number = 12;
    var catetoAdajacente: number = 16;
    const tangente: number = catetoOposto / catetoAdajacente;
    console.log(`Tangente: ${tangente}`);
    res.send("CALCULO DO TANGENTE");
 });

app.listen(port, () => {
   //callBack
   console.log("Servidor funcionando!!!");
});
