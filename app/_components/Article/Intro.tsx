"use client"
import { formatDate } from "@/utils/strapi.utils";
import Image from "next/image";

const IntroArticle = ({
    article = {
        title: "",
        author: "",
        publishedAt: Date(),
        image: {
            url: "",
            name: "",
            width: 0,
            height: 0,
        }
    }
}) => {
    // console.log(article)

    const imageLoader = ({ src = '' }) => ( `${process.env.API_URL + src}` );

    return (
        <div className="article-intro">
            <div className="article-intro__background">
                <Image loader={imageLoader} src={article.image?.url} alt={article.image?.name} width={article.image?.width} height={article.image?.height} />
            </div>
            <h3 className="article-intro__headline2">{article.title}</h3>
            <p className="copy-small2 bold">{formatDate(article.publishedAt)}</p>
            <p className="copy-small__author">By {article.author}</p>
        </div>
    )
}
export default IntroArticle;