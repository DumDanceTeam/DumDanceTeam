export default async function getAllEvents(){
    const events = await fetch("https://dum-dance-team.vercel.app/api/event/allEvents",{next:{revalidate:60}, method:"GET"});

    const jsonEvents = await events.json();
    
    return jsonEvents.allEvents;
}