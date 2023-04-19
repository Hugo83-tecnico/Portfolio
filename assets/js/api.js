
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Hugo83-tecnico/Portfolio/master/data/profile.json';
    const fetching = await fetch(url);
    
    return await fetching.json();
}

