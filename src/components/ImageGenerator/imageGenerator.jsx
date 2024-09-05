import React, { useEffect, useRef, useState } from 'react'
import default_image from "../assets/default_image.svg";

const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);
    const [imageId, setImageId] = useState(null);

    // const generateImage = async () => {
    //     if (inputRef.current.value === "") {
    //         return 0;
    //     }

    //     const response = await fetch(
    //         "https://api.starryai.com/creations/", {
    //         method: 'POST',
    //         headers: {
    //             accept: 'application/json',
    //             'content-type': 'application/json',
    //             'X-API-Key': 'VaXPzda7elH0KlOH6jxQKJgNctOdDA'
    //         },
    //         body: JSON.stringify({
    //             model: 'lyra',
    //             aspectRatio: 'square',
    //             highResolution: false,
    //             resolution: '512x512',
    //             images: 1,
    //             steps: 20,
    //             initialImageMode: 'color',
    //             prompt: inputRef.current.value
    //         })
    //     }
    //     )
    //     const responseJson = await response.json();
    //     const id = responseJson.id;
    //     console.log("Id is:: ", id)
    //     pollForImage(id);
    //     console.log(responseJson);
    //     // getImage(id);

    //     // setTimeout(() => {
    //     //     getImage(id);
    //     // }, 2000);

    //     return id;

    // }

    // useEffect(() => {

    //     setTimeout(() => {
    //         imageId && getImage(imageId);
    //     }, 2000);
    // }, [imageId])

    // const pollForImage = async (id, attempts = 10, interval = 2000) => {
    //     for (let i = 0; i < attempts; i++) {
    //         try {
    //             const response = await fetch(`https://api.starryai.com/creations/${id}`, {
    //                 method: "GET",
    //                 headers: {
    //                     accept: 'application/json',
    //                     'X-API-Key': 'VaXPzda7elH0KlOH6jxQKJgNctOdDA'
    //                 }
    //             });
    //             const responseJson = await response.json();
    //             const ImageURL = responseJson.images[0]?.url;
    //             if (ImageURL) {
    //                 setImage_url(ImageURL);
    //                 console.log("Image is ready:", responseJson);
    //                 break;  // Exit the loop if the image is ready
    //             } else {
    //                 console.log("Image not ready yet, retrying...");
    //             }
    //         } catch (error) {
    //             console.error("Error fetching the image:", error);
    //         }
    //         await new Promise(res => setTimeout(res, interval));  // Wait for the specified interval before the next attempt
    //     }
    // }


    // const getImage = async (id) => {
    //     const response = await fetch(`https://api.starryai.com/creations/${id}`, {
    //         method: "GET",
    //         headers: {
    //             accept: 'application/json',
    //             'X-API-Key': 'VaXPzda7elH0KlOH6jxQKJgNctOdDA'
    //         }
    //     })
    //     const responseJson = await response.json();
    //     const ImageURL = responseJson.images[0].url;
    //     setImage_url(ImageURL + "")
    //     console.log("response image : ", responseJson);
    // }

    // const generateImg = async () => {
    //     const response = await fetch('https://api.replicate.com/v1/predictions', {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer r8_ItBeFnNTS0ZNnJhjedsEvJxzAss6FTE4JgvmE`,
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             version: '3c6374e7a9a17e01afe306a5218cc67de55b19ea536466d6ea2602cfecea40a9',
    //             input: {
    //                 prompt: inputRef.current.value,
    //                 scheduler: 'p_sampler',
    //                 prior_steps: '5',
    //                 guidance_scale: 4,
    //                 prior_cf_scale: 4,
    //                 num_inference_steps: 100
    //             }
    //         })
    //     })

    //     const responseJson = await response.json();
    //     console.log("replcate : \n\n ", responseJson);
    // }



    return (
        <div className=' flex items-center justify-start flex-col m-auto mt-10 mb-20 gap-10 '>
            <div className=' flex flex-col w-[512px]' >
                <img src={image_url === "/" ? default_image : image_url} alt='reading' className=' w-[512px]' />
            </div>
            <div className="flex w-1/3 h-16 justify-around items-center rounded-md bg-[#1F3540] shadow-lg">
                <input
                    className="w-3/4 h-full bg-transparent border-none outline-none text-white placeholder-gray-400 font-normal pl-3 pr-3"
                    type="text"
                    ref={inputRef}
                    placeholder="Describe what is in your mind"
                />

                <button
                    onClick={() => {
                        // generateImage()
                        // imageId && getImage(imageId)
                        // generateImg()
                    }}
                    // onClick={() => getImage(79309)}
                    // onClick={() => handleImage()}
                    className="bg-[#DE1B89] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#C51774] transition duration-300 ease-in-out shadow-md">
                    Generate
                </button>
            </div>


        </div>
    )
}

export default ImageGenerator;
