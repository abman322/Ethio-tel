import React from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Slider from "react-slick";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import BusinessHeader from "@/components/BusinessHeader";
import ServiceCard from "@/components/ServiceCard";
import {
  Cloud,
  Conference,
  Connectivity,
  Security,
  Line,
  fiveG,
} from "@/components/SvgIcons";
import { getBusiness, urlFor } from "../components/sane";

export async function getServerSideProps(context) {
  const busin = await getBusiness();

  return {
    props: { busin }, // will be passed to the page component as props
  };
}

export default function business({ busin }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <Head>
        <title>EthioTelecom business service </title>
        <meta
          name="description"
          content="ethio telecom, previously known as the Ethiopian Telecommunications Corporation, is an Ethiopian telecommunication company serving as the major internet and telephone service provider."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <main>
        <TopHeader />
        <BusinessHeader />
        <Slider {...settings}>
          {busin != null &&
            busin.map((element) => {
              return (
                <HeroBanner
                  key={element}
                  header={element.title}
                  description={element.description}
                  image={urlFor(element.mainImage).url()}
                  btnText={element.btntxt}
                />
              );
            })}
          <HeroBanner
            header="Dedicated Internet"
            description=" Strong and dedicated leased line connectivity for your company"
            image="https://history-computer.com/wp-content/uploads/2022/08/shutterstock_1684873624-scaled.jpg"
            btnText="Explore"
          />
          <HeroBanner
            header="Full-stack Solutions"
            description="Best-in-class solutions engineered by professional architects "
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeQff_2Nb5tz1OMG6T4GlLRHGNVLFf28Yeg&usqp=CAU"
            btnText="TeleCloud"
          />
          {/* <HeroBanner
            header="Get your prepaid sim"
            description=" Enjoy doorstep KYC, paperless process, and quick activation"
            image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/7a1c7e9995317.560ddb5268ce3.png"
            btnText="BUY SIM"
          /> */}
        </Slider>
        <h1 className=" bg-[#fafafa] text-center text-2xl font-semibold pt-5 pb-3">
          Products for all your business needs
        </h1>
        <section className=" flex flex-wrap justify-center bg-[#fafafa] mb-4">
          <ServiceCard
            title={"TeleCloud"}
            discription="Empower your business with seamless connectivity."
            Svg={Cloud}
          />
          <ServiceCard
            title={"Landline"}
            discription="Employ a robust calling setup across your business."
            Svg={Line}
          />
          <ServiceCard
            title={"Conferencing"}
            discription="Empower your business with seamless connectivity."
            Svg={Conference}
          />
          <ServiceCard
            title={"Security"}
            discription="Safeguard your enterprise from threats."
            Svg={Security}
          />
          <ServiceCard
            title={"5G connectivity"}
            discription="The power of next gen 5G connectivity."
            Svg={fiveG}
          />
          <ServiceCard
            title={"Ethio telecom connectivity"}
            discription="Empower your business with seamless connectivity."
            Svg={Connectivity}
          />
          {/* <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard /> */}
        </section>

        <Footer />
      </main>
    </>
  );
}
