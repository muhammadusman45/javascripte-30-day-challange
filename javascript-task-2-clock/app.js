
  const clock = () =>{
    var date = new Date ;
  const hour = document.querySelector(".hour")
  const minute = document.querySelector(".minute")
  const second = document.querySelector(".second")
  const dHours = date.getHours () ;
  const dMinutes = date.getMinutes () ;
  const dSeconds = date.getSeconds () ;
 
  hour.style.transform = `rotate(${30 * dHours}deg)`;
  minute.style.transform = `rotate(${dMinutes * 6}deg)`;
  second.style.transform = `rotate(${dSeconds * 6}deg)`;
     
}

setInterval(clock , 1000)