"use client"
import useSWR from "swr";
import HighlightArticle from "@/app/_components/Article/Highlight";
import SubscribeArticle from "@/app/_components/Article/Subscribe";
import FeaturedArticle from "@/app/_components/Article/Featured";
import { fetchStrapiData } from "@/utils/strapi.utils";

export default function BlogPage() {
    const { data } = useSWR('/api/blog-articles?pLevel', fetchStrapiData)
    // Filter data
    const featuredItems = data?.data?.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt
    ));

    return (
        <div className="blog-page">
            <HighlightArticle data={featuredItems}/>
            <SubscribeArticle />
            <FeaturedArticle data={featuredItems?.filter((i) => i.highlight === false)} />
        </div>
    )
}
