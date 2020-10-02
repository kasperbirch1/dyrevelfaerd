import { useEffect, useState } from 'react'
import axios from 'axios';
import qs from 'querystring';



export default async function useUploadImage({ data, token }) {
    const [Data, setData] = useState(null)
    const formData = new FormData();
    formData.append("file", data.picture[0]);
    const UploadImagesResponse = await axios.post(
        "https://dyrevelfaerd.herokuapp.com/api/v1/assets",
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
        });
    console.log("her er AssetId", UploadImagesResponse);
    setData(UploadImagesResponse)

    return [Data]
}