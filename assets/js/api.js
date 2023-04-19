
async function fetchProfileData(){
    const url = 'http://localhost:3000/profile';
    const fetching = await fetch(url);
    
    return await fetching.json();
}