export default async function getAllEvents(){
    const res = await fetch("https://dum-dance-team.vercel.app/api/event/allEvents",{next:{revalidate:60}, method:"GET"});
    if(!res.ok)
        throw new Error("failed");

    return res.json();
    
}