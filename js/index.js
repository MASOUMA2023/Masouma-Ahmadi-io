const footer = document.createElement('footer');
const body = document.querySelector('body');
body.appendChild(footer);


const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `<span>Masouma</span><span>&#169</span><span>${year}</span><span>`;
footer.appendChild(copyright);

const skillsList = ['JavaScript','HTML','CSS','IT support','Cybersecurity & Risk Management'];
const skillsSection = document.getElementById('skills');
const skillsUL = skillsSection.querySelector('ul');

for (let skill of skillsList){
      let skillItem = document.createElement('li');
      skillItem.innerHTML = skill;
      skillsUL.appendChild(skillItem);

}