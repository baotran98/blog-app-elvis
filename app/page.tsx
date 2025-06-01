"use client"
import useSWR from 'swr';
import HeroSection from "@/app/_components/Section/Hero";
import InfoBlock from "@/app/_components/Block/Info";
import { fetchStrapiData } from "@/utils/strapi.utils";

export default function Home() {
  const { data, isLoading } = useSWR('/api/infoblocks-landing?pLevel', fetchStrapiData)
  // Filter data
  const infoBlocks = data?.data?.info_blocks;

  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  )

  return (
    <>
      <HeroSection headline={heroHeadline} />
      { infoBlocks && !isLoading &&
        infoBlocks.map((data: any) => <InfoBlock key={data.id} data={data} reversed={data.showImageRight} />
      )}
    </>
  );
}
