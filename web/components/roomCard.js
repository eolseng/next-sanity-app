import {imageBuilder} from "../lib/sanity";
import localize from "../lib/localize";
import {useRouter} from "next/router";

export default function RoomCard({room}) {

    const router = useRouter()
    const {locale, defaultLocale} = router

    const imageWidth = 400
    const imageHeight = imageWidth / 16 * 9

    const localization = [locale, defaultLocale]
    room = localize(room, localization)

    const coverImage = (
        <img
            width={imageWidth}
            height={imageHeight}
            alt={`Cover image for ${room.title}`}
            src={imageBuilder.image(room.coverImage).width(imageWidth).height(imageHeight).url()}
        />
    )

    const images = (
        <div>
            {room.images.map(image => {
                return <img
                    width={imageWidth / 3}
                    height={imageHeight / 3}
                    alt={`Cover image for ${room.title}`}
                    src={imageBuilder
                        .image(image)
                        .width(Math.floor(imageWidth / 3))
                        .height(Math.floor(imageHeight / 3))
                        .url()
                    }
                />

            })}
        </div>
    )

    return (
        <div style={{
            maxWidth: 500,
            margin: 50,
            padding: 20,
            border: '1px solid black',
            borderRadius: 40
        }}>
            <h1>{room.title}</h1>
            <p>Type: {room.type}</p>
            {coverImage}
            {images}
            <blockquote>{room.description}</blockquote>
            <p>{room.slug}</p>
        </div>
    )
}
