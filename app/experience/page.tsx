"use client"
import useSWR from "swr";
import HeroSection from "@/app/_components/Section/Hero";
import InfoBlock from "@/app/_components/Block/Info";
import { fetchStrapiData } from "@/utils/strapi.utils";

export default function ExperiencePage() {
    const { data, isLoading } = useSWR('/api/infoblocks-experience?pLevel', fetchStrapiData)

    const heroHeadline = (
        <>
            <h1>discover.</h1>
            <h1>your.</h1>
            <h1>spirit.</h1>
        </>
    )

    const infoBlocks = data?.data?.info_blocks;
    const imgExperience = "/assets/block/info-camp.png"

    return (
        <>
            <HeroSection imgSrc={imgExperience} headline={heroHeadline} theme="orange"/>
            { infoBlocks && !isLoading &&
                infoBlocks.map((data: any) => <InfoBlock key={data.id} data={data} reversed={data.showImageRight} />
            )}
        </>
    )
}
