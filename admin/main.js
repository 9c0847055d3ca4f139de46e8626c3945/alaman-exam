const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})
 var ladeado = document.getElementById("mail").value
 var laparure = document.getElementById("pass").value
 
 if(ladeago == "ladeago" && laparure = "laparure"){
   alert("Report to admin")
 }
else{
  alert("Be Leet")
}
