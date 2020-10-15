import Layout from "../components/layout/layout";
import {useEffect, useState} from "react";
import {getAllPostsForHome} from "../lib/api";

export default function Home() {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        getAllPostsForHome(false)
            .then(posts => {
                setPosts(posts)
                console.log(posts)
            })
    },[])

    return (
        <>
            <Layout>
                <h1>Welcome to the NextSanity App</h1>
                <blockquote>Det handler om å kose seg</blockquote>
            </Layout>
        </>
    )
}
