import Layout from "../components/layout/layout";
import {useEffect, useState} from "react";
import {getAllRoomSlugs, getFrontPageRooms} from "../lib/api";
import RoomCard from "../components/roomCard";
import {useRouter} from "next/router";

export default function Home() {

    const router = useRouter();
    const {locale, locales, defaultLocale} = router;

    const [rooms, setRooms] = useState([])
    const [slugs, setSlugs] = useState([])

    useEffect(() => {
        getFrontPageRooms(false)
            .then(rooms => {setRooms(rooms)})
    },[])

    useEffect(() => {
        getAllRoomSlugs()
            .then(slugs => {setSlugs(slugs.map(slug => slug.slug))})
    }, [])

    return (
        <>
            <Layout>
                <h1>Welcome to the NextSanity App</h1>
                <blockquote>Det handler om å kose seg</blockquote>
                {rooms.map(room => <RoomCard room={room}/>)}
                {slugs}
            </Layout>
        </>
    )
}
