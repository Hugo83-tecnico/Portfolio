

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

function updateLanguage(profileData){
    const language = document.getElementById('profile__language')
    language.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
   
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile__hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join(''); 
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile__portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => 
        `
        <li>
            <span ${project.github ? 'class="title__portfolio gitHub"' : ''}>${project.name}</span>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>

        `
    ).join('')
}

function updateProfessionalExperience(profileData){
    const experience = document.getElementById('profile__experience')
    experience.innerHTML = profileData.professionalExperience.map(jobs => 
        `
        <li>
            <h3 class="title__experience">${jobs.name}</h3>
            <span class="period__experience">${jobs.period}</span>
            <p>${jobs.description}</p>
        </li>

        `
    ).join('')
}


// Criar uma função imediatamente invocada
(async() =>{
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguage(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData)
})()