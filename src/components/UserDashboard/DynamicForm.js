import React, { useState } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { useForm } from "react-hook-form";
import { UploadPicture } from './UploadPicture';
import styled from 'styled-components'
const StyledFormContainerDiv = styled.div`
    display: grid;
    grid-gap: 1rem;
    form {
        display: grid;
    }
`

export const DynamicForm = ({ element, resourceType, UserInfo }) => {
    const [AssetId, setAssetId] = useState({});
    // console.log("element", element);
    let contentTypes = ["id", "title", "name", "content", "description", "age", "extra", "url", "assetId"];
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        // console.log("onSubmit Data:", { ...data, ...AssetId });
        // console.log("AssetId", AssetId)
        try {
            const response = await axios.put(
                `https://dyrevelfaerd.herokuapp.com/api/v1${resourceType}/${data.id}`,
                qs.stringify({ ...data, ...AssetId }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${UserInfo.token}`
                    }
                });
            console.log("response", response);
            alert("opdateret")
        } catch (error) {
            console.error(error);
            alert("Fejl prøv igen")

        }
    };


    return (
        <StyledFormContainerDiv>
            <form onSubmit={handleSubmit(onSubmit)}>
                {Object.keys(element).filter(el => contentTypes.includes(el)).map((ObjectElenemt, index) => {
                    return (
                        <fieldset style={{ display: 'grid' }} key={ObjectElenemt}>
                            <label htmlFor={ObjectElenemt}>{ObjectElenemt}</label>
                            <input style={{ width: '100%' }} type={typeof element[ObjectElenemt] === "string" ? "text" : "number"}
                                defaultValue={element[ObjectElenemt]}
                                placeholder={ObjectElenemt}
                                name={ObjectElenemt}
                                ref={register()} />
                        </fieldset>
                    );
                })}
                <button type="submit">Update data</button>
            </form>
            {element.asset && <UploadPicture UserInfo={UserInfo} setAssetId={setAssetId} />}

        </StyledFormContainerDiv>
    );
};
