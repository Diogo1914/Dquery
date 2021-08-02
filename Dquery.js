///////RECRIANDO E TRADUZINDO O JQUERY/////////
/////recreating and translating t Jquery///////
((doc)=>{
const $$=(c)=>Array.from(doc.querySelectorAll(c));
const $=(g)=>{
    if(typeof(g)==="function"){
    doc.addEventListener("DOMContentLoaded", g)
    return;
    } else {
    this.els=Array.from($$(g))
    this.escreve=(txt="")=>{
        if(txt!=""){
        this.els.forEach((e)=>e.innerHTML=txt);
        }
      }
      this.quando=(e,f)=>{
      this.els.forEach( (elem)=>{
           elem.addEventListener(e,f,true);
      });
      }
    } return this;
}
/////////////TESTANDO O CODIGO²////////////////
function start(){
    $("h1").quando("click", teste)
    function teste(){
      $("#paragrafo").escreve("waw!");
      console.log("pronto!");
    }
} //html>p>output: Hello World!

$(start);
})(document);
////////////// © DiogoC.Cass ® ////////////////
//Listening: Hillsong - Oceans; //nmSys=>Dquery
