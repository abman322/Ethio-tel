import React, { useEffect, useState, Fragment } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import TopHeader from "@/components/TopHeader";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import Recharge from "@/components/Recharge";
import ChatBot from "@/components/ChatBot";
import { getNews, getBanners, urlFor, getProducts } from "./sane";

export async function getServerSideProps(context) {
  const news = await getNews();
  const banner = await getBanners();
  const product = await getProducts();

  return {
    props: { news, banner, product }, // will be passed to the page component as props
  };
}

export default function Home({ news, banner, product }) {
  console.log(banner);
  const [showModal, setShowModal] = useState(false);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  var settingss = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <Head>
        <title>EthioTelecom - Telecom Service Provider</title>
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

      <div className=" ">
        {/* CHATBOT*/}
        <Fragment>
          <div className=" z-50">
            <button
              className="  text-white rounded-full bg-[#2590ce] fixed bottom-0 right-0 hover:bg-blue-800 focus:outline-none font-medium text-sm  px-5 py-2.5 mr-5 ml-10 my-5"
              onClick={() => setShowModal(true)}
            >
              Chat
            </button>
          </div>
          <ChatBot isVisible={showModal} onClose={() => setShowModal(false)} />
        </Fragment>
        <TopHeader />
        <Header />

        {/* MAIN SLIDER */}
        <Slider {...settings}>
          {banner != null &&
            banner.map((element) => {
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
            header="Get your prepaid sim"
            description=" Enjoy doorstep KYC, paperless process, and quick activation"
            image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/7a1c7e9995317.560ddb5268ce3.png"
            btnText="BUY SIM"
          />
          <HeroBanner
            header="Pay safe, Earn Reward"
            description=" Send money, make payments & get loans do all this and more with ease on Airtel Payments Bank."
            image="https://mobilemoney.et/img/intro-mobile.png"
            btnText="DOWNLOAD APP"
          />
          {/* <HeroBanner
            header="Get your prepaid sim"
            description=" Enjoy doorstep KYC, paperless process, and quick activation"
            image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/7a1c7e9995317.560ddb5268ce3.png"
            btnText="BUY SIM"
          /> */}
        </Slider>
        <Recharge />
        <section className=" bg-[#f7f7fa] z-0">
          <h1 className=" text-center font-semibold text-xl py-5">
            Product and Services
          </h1>
          <section className=" mx-12">
            {/* PRODUCT AND SERVICE SLIDER */}
            <Slider {...settingss}>
              {product != null &&
                product.map((element) => {
                  return (
                    <ArticleCard
                      key={element}
                      image={urlFor(element.mainImage).url()}
                      tagline={element.tagline}
                      header={element.title}
                      description={element.description}
                      buttonText={element.btntxt}
                    />
                  );
                })}
              <ArticleCard
                image={urlFor(banner[0].mainImage).url()}
                tagline="PACKAGE"
                header={banner.title}
                description=" we offer no expiry data packages, to get 10% off pay with telebirr"
                buttonText="Read More"
              />

              <ArticleCard
                image={"https://pbs.twimg.com/media/EvtFB5tXAAEt2Fa.jpg"}
                tagline="App"
                header="Download My Ethiotel App"
                description=" we offer no expiry data packages, to get 10% off pay with telebirr"
                buttonText="Download App"
              />
              <ArticleCard
                image={
                  "https://ocdn.eu/pulscms-transforms/1/6Q8ktkpTURBXy82ODA0MzQzNGRkN2ViOGIxZDIzMDE3MDUxZDQwYzZkZi5qcGeSlQMAAs0C280Bm5MFzQKAzQFA"
                }
                tagline="Sim"
                header="Get your 5G Simcard"
                description=" we offer no expiry data packages, to get 10% off pay with telebirr"
                buttonText="Read More"
              />
            </Slider>
          </section>
        </section>
        <h1 className=" bg-[#f7f7fa] text-center font-semibold text-xl py-7">
          Latest News
        </h1>
        <section className=" flex  flex-wrap mb-3 bg-[#f7f7fa] justify-center">
          <div className=" w-96 mr-2 bg-white p-7 flex flex-col  gap-4 mb-4">
            <h1 className=" text-xl">
              Ethio Telecom Launches Its Ethiotel Innovation Program Which Is
              Devised To Empower Our Nations Technology-Based Startups!
            </h1>

            <p className=" text-slate-500">
              Our company has been deploying various technologies and value
              adding services that can...
            </p>
            <button> Read More</button>
          </div>
          <div className=" w-96 mr-2 bg-white p-7 flex flex-col  gap-4 mb-4">
            <h1 className=" text-xl">
              Ethio Telecom Launches Its Ethiotel Innovation Program Which Is
              Devised To Empower Our Nations Technology-Based Startups!
            </h1>
            <p className=" text-slate-500">
              Our company has been deploying various technologies and value
              adding services that can...
            </p>
            <button> Read More</button>
          </div>
        </section>
        <Footer />
        {/* <GoogleTranslate /> */}
      </div>
    </>
  );
}
