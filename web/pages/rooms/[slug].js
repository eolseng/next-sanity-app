import {getAllRoomSlugs, getRoomBySlug} from "../../lib/api";
import localize from "../../lib/localize";
import RoomCard from "../../components/roomCard";

function Room({localizedRoom}) {
    return (
        <>
            <RoomCard room={localizedRoom}/>
            HALLO
        </>
    )
}

export async function getStaticPaths({locales}) {
    // Get all the slugs for the rooms
    const slugs = await getAllRoomSlugs()
    // Get the paths to pre-render
    let paths = []
    slugs.forEach((slug) => {
        // For each slug
        locales.forEach((locale) => {
            // For each locale
            paths.push({
                params: {slug: slug},
                locale: locale
            })
        })
    })
    // Pre-render the paths
    // {fallback: false} means other routes should 404
    return {
        paths: paths,
        fallback: false
}
}

export async function getStaticProps({params, locale}) {
    // Params contains the room 'slug'
    const slug = params.slug
    // Get the room data from the CMS
    const room = await getRoomBySlug(slug, false)
    // Localize room
    const localizedRoom = localize(room, [locale])
    // Return the localized room
    return {props: {localizedRoom}}
}

export default Room