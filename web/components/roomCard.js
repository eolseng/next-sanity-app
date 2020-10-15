export default function RoomCard({room}){
    if (!room) return;
    return (
        <div style={{
            maxWidth: 500,
            margin: 50,
            padding: 20,
            border: '1px solid black',
            borderRadius: 40
        }}>
            <h1>{room.title}</h1>
            <blockquote>{room.type}</blockquote>
            <p>{room.description.nb}</p>
            <p>{room.slug}</p>
        </div>
    )

}