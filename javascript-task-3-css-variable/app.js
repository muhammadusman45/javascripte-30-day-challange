

function update() {
      console.log(this.name)
      if(this.name === "bg-color"){
        document.documentElement.style.setProperty(`--${this.name}` , this.value);

      }else{
             document.documentElement.style.setProperty(`--${this.name}` , this.value + "px");
      }
}

const input = document.querySelectorAll("input") ;

console.log(input.forEach)
input.forEach(( input ) => input.addEventListener("change" , update))
// input.forEach(( input ) => input.addEventListener("mousemove" , update)) 