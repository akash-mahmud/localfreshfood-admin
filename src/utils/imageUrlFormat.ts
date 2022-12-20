import {  image_domain } from "@/config/api"

const imageUrl = (url:string):string => {
    const imageUrl = `${image_domain}${url}`;
    return imageUrl;
}

export default imageUrl;