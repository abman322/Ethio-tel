import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config={
    projectId:'wiqwiafg',
    dataset:'production',
    useCdn:false,
    apiVersion:'2022-01-12',
}

export const client=createClient(config)

export async function getNews(){
    const news=await client.fetch('*[_type == "blog"]')
    return news
}

export async function getBanners(){
    const banner=await client.fetch('*[_type == "banner"]')
    return banner
}

export async function getProducts(){
    const product=await client.fetch('*[_type == "product"]')
    return product
}

export async function getBusiness(){
    const business=await client.fetch('*[_type == "business"]')
    return business
}



export const urlFor = (source) => imageUrlBuilder(config).image(source);