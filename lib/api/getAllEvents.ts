export async function getAllEvents(){
    const events = await fetch("http://localhost:3000/api/event/allEvents",{next:{revalidate:60}, method:"GET"});

    const jsonEvents = await events.json();
    
    return jsonEvents.allEvents;
}