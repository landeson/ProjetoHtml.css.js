const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dólar = 5.05;
const euro = 5.9;
const bitcoin = 0.0000073


const convertValue = () => {
    const inputReais = document.getElementById('input-real').value
    const realValuetext = document.getElementById('real-value-text')
    const Dolarvaluetext = document.getElementById('Dolar-value-text')


      

     realValuetext.innerHTML = new Intl.NumberFormat('pt-BR',{
        style: 'currency', 
        currency: 'BRL'
   }).format(inputReais);

    if (select.value === "US$ Dólar americano") {
      Dolarvaluetext.innerHTML = new Intl.NumberFormat('en-US',{
         style: 'currency', 
         currency: 'USD'
    }).format( inputReais / dólar);
    }
    
   if (select.value ==="€ Euro") {
      Dolarvaluetext.innerHTML = new Intl.NumberFormat('de-DE',{
         style: 'currency', 
         currency: 'EUR'
    }).format( inputReais / euro);

   }

   if(select.value === "Bitcoin"){
      Dolarvaluetext.innerHTML = new Intl.NumberFormat('en-US',{
         style: 'currency', 
         currency: 'BTC'
    }).format( inputReais*bitcoin);

   }
 

};

   changeCurrency = ( ) => {
    const texto = document.getElementById("texto")
    const bandeiraamericana = document.getElementById("bandeira-americana")

    if (select.value === "US$ Dólar americano"){
       texto.innerHTML = "Dólar americano"
       bandeiraamericana.src ="./img/estados-unidos (1) 1.png"

    }

    if (select.value === "€ Euro"){
        texto.innerHTML = "Euro"
        bandeiraamericana.src ="./img/euro.png"
 
     }

     if(select.value === "Bitcoin"){
       texto.innerHTML = "Bitcoin"
       bandeiraamericana.src ="./img/bitcoin.png"

     }
     convertValue()
   }


button.addEventListener('click', convertValue)
select.addEventListener('change',changeCurrency)
