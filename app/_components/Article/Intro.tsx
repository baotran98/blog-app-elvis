"use client"
import { formatDate } from "@/utils/strapi.utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const IntroArticle = ({
    article = {
        title: "",
        author: "",
        content: "",
        publishedAt: Date(),
        image: {
            url: "",
            name: "",
            width: 0,
            height: 0,
        }
    }
}) => {
    const [htmlContent, setHtmlContent] = useState<string>("<p>demo</p>");

    useEffect(() => {
        console.log(article.content);
        if (typeof article.content === "string") {
            setHtmlContent(article.content);
        }
    }, [article.content]);

    const imageLoader = ({ src = '' }) => ( `${process.env.API_URL + src}` );

    return (
        <>
        <div className="article-intro">
            <div className="article-intro__background">
                <Image loader={imageLoader} src={article.image?.url} alt={article.image?.name} width={article.image?.width} height={article.image?.height} />
            </div>
            <h3 className="article-intro__headline2">{article.title}</h3>
            <p className="copy-small2 bold">{formatDate(article.publishedAt)}</p>
            <p className="copy-small__author">By {article.author}</p>
        </div>
            <div
                dangerouslySetInnerHTML={{
                    __html: htmlContent
                }}
            />
        </>
    )
}
export default IntroArticle;