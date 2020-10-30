import client, {previewClient} from "./sanity";

const getClient = (preview) => (preview ? previewClient : client)

const roomFields = `
    'title': title,
    'slug': slug.current,
    type,
    description,
    localeContent,
    coverImage,
    images
`

/**
 * Retrieves the slug of every Room
 * @returns a list of slugs
 */
export async function getAllRoomSlugs() {
    const slugs = await client.fetch(`*[_type == "room"]{ 'slug': slug.current }`)
    console.log(slugs.map(slug => slug.slug))
    return slugs.map(slug => slug.slug)
}

/**
 * Retrieves the top 'amount' (3) rooms, ordered by descending date and descending _updatedAt
 * Uses constant 'roomFields' for which fields to retrieve
 * @param preview (boolean) - if it should retrieve preview data from the CMS
 * @returns {Promise<*>}
 */
export async function getFrontPageRooms(preview) {
    const amount = 3
    const query = `*[_type == "room"] | order(date desc, _updatedAt desc)[0...${amount}]{${roomFields}}`
    const result = await getClient(preview).fetch(query)
    return getUniquePosts(result)
}

export async function getRoomBySlug(slug, preview) {
    const query = `*[_type == "room" && slug.current == "${slug}"]{${roomFields}}[0]`
    const result = await getClient(preview).fetch(query)
    return result
}

const getUniquePosts = (posts) => {
    const slugs = new Set()
    return posts.filter((post) => {
        if (slugs.has(post.slug)) {
            return false
        } else {
            slugs.add(post.slug)
            return true
        }
    })
}

