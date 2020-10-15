import client, {previewClient} from "./sanity";

const getClient = (preview) => (preview ? previewClient : client)

const roomFields = `
    'title': title,
    'slug': slug.current,
    type,
    description,
    content,
    coverImage,
    images,
`

export async function getAllRoomSlugs() {
    return await client.fetch(`*[_type == "room"]{ 'slug': slug.current }`)
}

export async function getFrontPageRooms(preview) {
    const amount = 3
    const query = `*[_type == "room"] | order(date desc, _updatedAt desc)[0...${amount}]{${roomFields}}`
    const result = await getClient(preview).fetch(query)
    return getUniquePosts(result)
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

