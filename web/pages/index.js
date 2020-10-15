import Layout from "../components/layout/layout";
import {useEffect, useState} from "react";
import {getFrontPageRooms} from "../lib/api";
import RoomCard from "../components/roomCard";

export default function Home() {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        getFrontPageRooms(false)
            .then(rooms => {setRooms(rooms)})
    },[])

    return (
        <>
            <Layout>
                <h1>Welcome to the NextSanity App</h1>
                <blockquote>Det handler om å kose seg</blockquote>
                {rooms.map(room => <RoomCard room={room}/>)}
            </Layout>
        </>
    )
}
