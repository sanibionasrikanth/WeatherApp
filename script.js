const textInput = document.querySelector('.input');

let generate = async () => {

    if (textInput.value.trim() === "") {
        alert("Enter your Location")
        return
    }
    
    const url = "https://api.weatherapi.com/v1/current.json?key=25d68b0d78844ef1bc2102140252107&q="+textInput.value+"&aqi=no"
    console.log(url);

    const response = await fetch(url);
    if (response.status === 200) {
      
       const data=  await response.json();
      const wdetails= document.querySelector('.wdetails');
      wdetails.textContent=`Location: ${data.location.name} Temperature: ${data.current.temp_c}°C  Condition: ${data.current.condition.text}`;
       wdetails.classList.add('display');
    }

     else {
      const wdetails= document.querySelector('.wdetails');
      wdetails.textContent = `Could't retrieve weather details with server status: ${response.status}.`;
   }
} 
  
  
 
  
