import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { useForm } from "react-hook-form";
import useApi from '../../hooks/useApi'
import styled from 'styled-components'
const StyledEditAnimalsSection = styled.section`
   
`

const EditAnimals = ({ UserInfo }) => {
    const [response] = useApi("https://dyrevelfaerd.herokuapp.com/api/v1/animals");
    const [CurentAnimalID, setCurentAnimalID] = useState(1)
    const [CurentAnimal, setCurentAnimal] = useState(null)
    // console.log("response", response);
    console.log("CurentAnimal", CurentAnimal);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axios.get(`https://dyrevelfaerd.herokuapp.com/api/v1/animals/${CurentAnimalID}`)
                setCurentAnimal(response.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
    }, [CurentAnimalID])

    const { register, handleSubmit, errors } = useForm();
    const [responseData, setResponseData] = useState("responseData");
    const types = ['image/png', 'image/jpeg'];
    const checkExtension = (file) => {
        if (types.includes(file.type)) {
            return "Det skal være png eller jpeg";
        }
    };
    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            // if (data.picture.length === 0) {
            //     const formData = new FormData();
            //     formData.append("file", data.picture[0]);
            //     const UploadImagesResponse = await axios.put(`https://dyrevelfaerd.herokuapp.com/api/v1/assets/${CurentAnimal.asset.id}`,
            //         formData,
            //         {
            //             headers: {
            //                 'Content-Type': 'multipart/form-data',
            //                 'Authorization': `Bearer ${UserInfo.token}`
            //             },
            //         });
            //     console.log("her er AssetId", UploadImagesResponse);
            // }


            const response = await axios.put(`https://dyrevelfaerd.herokuapp.com/api/v1/animals/${CurentAnimalID}`,
                qs.stringify({
                    name: data.name,
                    description: data.description,
                    age: data.age,
                    // assetId: UploadImagesResponse.data.id || CurentAnimal.asset.id,
                    assetId: CurentAnimal.asset.id,
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${UserInfo.token}`
                    }
                });
            console.log("response", response);
            setResponseData(response);
        } catch (error) {
            console.error(error);
        }
    };




    return (
        <StyledEditAnimalsSection>
            <select onChange={e => setCurentAnimalID(e.target.value)}>
                {response && response.map(element => (<option key={element.id} value={element.id}>{element.name}</option>))}
            </select>
            <h1>hej</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input
                    defaultValue={CurentAnimal && CurentAnimal.name}
                    type="text"
                    placeholder="name"
                    name="name"
                    ref={register()} />
                <label htmlFor="description">description</label>
                <input
                    defaultValue={CurentAnimal && CurentAnimal.description}
                    type="text"
                    placeholder="description"
                    name="description"
                    ref={register()} />
                <label htmlFor="age">age</label>
                <input
                    defaultValue={CurentAnimal && CurentAnimal.age}
                    type="number"
                    placeholder="age"
                    name="age"
                    ref={register()} />
                {/* <input
                    defaultValue={CurentAnimal && CurentAnimal.asset.url}
                    type="file"
                    name="picture"
                    ref={register({
                        validate: checkExtension
                    }
                    )} />
                <span className="form-errors">{errors.picture && errors.picture.message}</span> */}

                {console.log("errors", errors)}
                <input type="submit" />
            </form>
            {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
        </StyledEditAnimalsSection>
    )
}

export default EditAnimals