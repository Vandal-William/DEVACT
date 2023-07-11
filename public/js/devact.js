const title = document.querySelector('.biography-job-title');
const job = document.getElementById('job-value');
let txt;
if (job){
    txt = job.value;
} else {
    txt = "Développeur Web";
}

function typewriter(word, index){
    if(index < word.length){
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index +1);
        }, 300);
    } else if (index === word.length){

        setTimeout(() => {
            title.innerHTML = ""
            typewriter(txt, 0)
        }, 10000)
    }
}
setTimeout(() => {
    typewriter(txt, 0)
}, 500);


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 0) {
      header.classList.add('header-border');
    } else {
      header.classList.remove('header-border');
    }
  });

const plus_button = document.querySelectorAll('.plus-button');
const project_name = document.querySelectorAll('.project-nane');
const container = document.querySelectorAll('.container');
const close_button = document.querySelectorAll('.close');

if(plus_button){
    plus_button.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;
            project_name.forEach(project => {
                if (project.classList.contains(value)){
                    project.classList.toggle('hidden')
                };
            })
            container.forEach(div => {
                if (div.classList.contains(value)){
                    div.classList.toggle('hidden')
                };
            })
        })
    })

}

if(close_button){
    close_button.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;
            project_name.forEach(project => {
                if (project.classList.contains(value)){
                    project.classList.toggle('hidden')
                };
            })
            container.forEach(div => {
                if (div.classList.contains(value)){
                    div.classList.toggle('hidden')
                };
            })
        })
    })

}


const burger = document.querySelector('.content-burger');
const nav_ul = document.querySelector('.nav-ul');

if (burger){
    burger.addEventListener('click', () => {
        nav_ul.classList.toggle('absolute')
    })
}

// Mise a jour du titre du site

const site_title_update_button = document.getElementById('site_title_update');
const update_site_title_form = document.querySelector('.update-site-title');
const header_title = document.querySelector('.header-title');

if(site_title_update_button){
    site_title_update_button.addEventListener('click', () => {
        update_site_title_form.classList.toggle('hidden');
        header_title.classList.toggle('hidden');
        site_title_update_button.classList.toggle('hidden');
    })
}

// Mise a jour de la biographie

const biography_update_button = document.getElementById('update_biography_button');
const biography_info = document.querySelector('.biography-info');
const biography_form = document.querySelector('.update_biography_form');

if (biography_update_button){
    biography_update_button.addEventListener('click', () => {
        biography_info.classList.toggle('hidden');
        biography_form.classList.toggle('hidden');
    })
}

// Mise a jour de la photo utilisateur 

const update_user_picture_button = document.querySelector('.update_picture_button');
const update_picture_form = document.querySelector('.update_picture_form');

if (update_user_picture_button){
    update_user_picture_button.addEventListener('click', () => {
        update_user_picture_button.classList.toggle('hidden');
        update_picture_form.classList.toggle('hidden')
    })
}

// Création d'une compétence 

const add_skill_button = document.querySelector('.add_skill');
const add_skill_form = document.querySelector('.add_one_skill_form');

if (add_skill_button){
    add_skill_button.addEventListener('click', () => {
        add_skill_button.classList.toggle('hidden');
        add_skill_form.classList.toggle('hidden');
    })
}

// Mise a jour d'une compétence

const update_skill_button = document.querySelectorAll('.update_skills');
const hidden_parts = document.querySelectorAll('.one-skill');

if (update_skill_button){
    update_skill_button.forEach(button => {
        button.addEventListener('click', () =>{
            const value = button.value;
            if (value){
                hidden_parts.forEach(part => {
                    if (part.classList.contains(value)){
                        part.classList.toggle('hidden')
                    }
                })
            }
        })
    })
}

// ajouter un projet
const add_project_button = document.querySelector('.add_project');
const add_project_form = document.querySelector('.add_one_project_form');

if (add_project_button){
    add_project_button.addEventListener('click', () => {
        add_project_button.classList.toggle('hidden');
        add_project_form.classList.toggle('hidden');
    })
}

// Mise a jour d'un projet

const update_project_button = document.querySelectorAll('.update_project_button');
const hidden_container = document.querySelectorAll('.one-project');

if (update_project_button){
    update_project_button.forEach(button => {
        button.addEventListener('click', () =>{
            const value = button.value;
            if (value){
                hidden_container.forEach(part => {
                    if (part.classList.contains(value)){
                        part.classList.toggle('hidden')
                    }
                })
            }
        })
    })
}
