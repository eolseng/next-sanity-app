import client, {previewClient} from "./sanity";

const getClient = (preview) => (preview ? previewClient : client)

const postFields = `
    name,
    title,
    publishedAt,
    excerpt,
    'slug': slug.current,
    'coverImage': mainImage.asset->url,
    'author': author->{name, 'picture':picture.asset->url}
`

export async function getAllPostsWithSlug() {
    return await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
}

export async function getAllPostsForHome(preview) {
    const result = await getClient(preview)
        .fetch(`
        *[_type == "post"] 
        | order(date desc, _updatedAt desc)
        {${postFields}}
        `)
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

