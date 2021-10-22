function validateForm() {
// Validation
console.log('Hello');
const formComponent = [
document.getElementById('tagline').value,
document.getElementById('color').value,
document.getElementById('address').value,
document.getElementById('size').value,
document.getElementById('date').value,
document.getElementById('mobile').value,
];
var j=0;
const y=formComponent[5];
    if(y.length!=10||parseInt(y)==NaN){
        alert("Invalid mobile number");
        return;
    }

for(var i=0;i<=5 && j!=1;i++)
{
if (formComponent[i]==="") {
	j=1;
alert("Please fill the details");
return;
}
}
var Startdate = new Date(formComponent[4]);
var now = new Date();
if (Startdate <= now) {
  // selected date is in the past
  alert("Please enter valid date");
  return;
}
// Bill
const reciept1 = `RECEIPT \nTagline: ${formComponent[0]}\nColor:
${formComponent[1]}\nAddress: ${formComponent[2]}\nSize:${formComponent[3]} \nDate:${formComponent[4]}`;
confirm(reciept1);
}
const form = document.getElementById("buyForm");
console.log(form)

form.addEventListener("submit", (event) => {
// stop form submission
event.preventDefault();
});
