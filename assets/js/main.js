

function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email;
    email.href= `mailto:${profileData.email}`

}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile__softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join(''); 
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile__hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join(''); 
}

function updateProfileLanguage(profileData){
    const language = document.getElementById('profile__language')
    language.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
   
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile__hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join(''); 
}

function updateProfilePortfolio(profileData){
    const portfolio = document.getElementById('profile__portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return
        `
        <li>
            <span class="title__portfolio gitHub">${project.name}</span>
            <a href="${project.url}" target="_blank">wwww.google.com.br</a>
        </li>

        `
    }); 
}

// Criar uma função imediatamente invocada
(async() =>{
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateProfileLanguage(profileData);
    updateProfilePortfolio(profileData)
})()