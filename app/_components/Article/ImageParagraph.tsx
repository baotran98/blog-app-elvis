"use client"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import Image from "next/image";

export default function ImageParagraphArticle({
    imageParagraph = {
        paragraph: [],
        imageCaption: "",
        image: {
            name: "",
            url: "",
            width: 0,
            height: 0,
        },
        landScape: false,
        imageRight: false,
    }
}) {
    console.log('Image text', imageParagraph)

    const imageLoader = ({ src = '' }) => ( `${process.env.API_URL + src}` );

    return (
        <div className={"article-text-image" + (imageParagraph.landScape ? "" : " article-text-image--portrait") + (imageParagraph.imageRight ? "" : " article-text-image--reversed")}>
            <div className="copy article-text-image__text article-paragraph">
                <BlocksRenderer content={imageParagraph.paragraph} />
            </div>
            <div className="article-text-image__container">
                <div className="article-text-image__image">
                    <Image loader={imageLoader} src={imageParagraph.image?.url} alt={imageParagraph.image?.name} width={imageParagraph.image?.width} height={imageParagraph.image?.height} />
                </div>
                {imageParagraph.imageCaption ? (
                    <p className="article-text-image__caption copy-small">{imageParagraph.imageCaption}</p>
                ) : null}
            </div>
        </div>
    )
}
