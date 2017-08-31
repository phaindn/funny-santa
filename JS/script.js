console.log('Hello world');
function checkAge() {
  name = prompt("What is your name?");
  age = prompt("How old are you?");
  age = Number(age);
  gender = confirm("Are you a male?");
  suffix = "";
  if ((age>=1)&&(age<=10))  suffix = (gender==true)?"kun":"chan"
  else if ((age>=11)&&(age<=15)) suffix = (gender==true)?"nii":"nee" 
  else if ((age>=16)&&(age<=20)) suffix = (gender==true)?"ōji":"hime"
  else if ((age>=21)&&(age<=25)) suffix = (gender==true)?"ji":"ba"
  else if ((age>=26)&&(age<=30)) suffix = (gender==true)?"jii":"baa"
  else suffix = "san";
  console.log('Konnichiwa '+name+'-'+suffix);
}

