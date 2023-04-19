// Criar uma função imediatamente invocada

(async() =>{
    const profileData = await fetchProfileData();
    console.log(profileData);
})()