import HeadlineArticle from "./Headline";
import ImageParagraphArticle from "./ImageParagraph";

const BlockArticle = ({
    data
}) => {
    // console.log(data)

    const componentType = data.__component.split("blog-article.")[1];

    switch (componentType) {
        case "head-line":
            return <HeadlineArticle headline={data} />
        case "paragraph-and-image":
            return <ImageParagraphArticle imageParagraph={data} />
        case "paragraph":
            return <p>paragraph</p>
        case "land-scape-image":
            return <p>land-scape-image</p>

        default:
            return <p>Not found element</p>;
    }
}
export default BlockArticle;