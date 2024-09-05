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

const messageForm = document.getElementById("leave_message");

messageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = e.target.usersName.value;
    const email = e.target.usersEmail.value;
    const message = e.target.usersMessage.value;

    console.log('userName:', userName);
    console.log('email:' , email);
    console.log('message:' ,message);
   
    const messageList = document.getElementById('messages_list');
    const messagesSection = document.getElementById('messages');
    const listItem = document.createElement('li');
    listItem.classList.add('message_item');

   listItem.innerHTML =  `<a href="mailto:${email} "> ${userName} </a>
   <span>wrote:${message}</span>`;
    listItem.appendChild(makeEditButton());
    listItem.appendChild(makeRemoveButton());
    messageList.appendChild(listItem);
    messagesSection.hidden = false;

    messageForm.reset();
});
   
function makeEditButton(){
    const button =document.createElement('button');
    button.textContent = 'Edit';
    button.type = 'button';
    button.classList.add('edit-button');
    button.addEventListener('click', () => {
        const entry = button.parentNode;;
        const messageSpan = entry.querySelector('span');
        const newMessage = prompt('Edit your message:', messageSpan.textContent.replace('wrote: ', ''));
        if (newMessage) {
            messageSpan.textContent = `wrote: ${newMessage}`;
        }
    });
    return button;
}

function makeRemoveButton() {
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.type ='button';
    button.classList.add('remove-button');
    button.addEventListener('click', () => {
        const entry = button.parentNode;
        entry.remove();
        // Hide messages section if no messages are left
        if (messageList.children.length === 0) {
            messagesSection.hidden = true;
        };
    });
    return button;
} 
    
const userName = "MASOUMA2023";
fetch(`https://api.github.com/users/${userName}/repos`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("failed to fetch data!");
    }
  })
  .then((data) => {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.getElementById("projects");
    const projectList = document.createElement("ul");
    projectSection.appendChild(projectList);

    for (let repository of repositories) {
      let project = document.createElement("li");
      project.innerHTML = repository.name;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
    
        
