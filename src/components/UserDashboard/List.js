import React from 'react';
import axios from 'axios';
import { DynamicForm } from './DynamicForm';
import styled from 'styled-components'
const StyledListUl = styled.ul`
   display: grid;
    grid-gap: 1rem;
li {
    border: 5px solid var(--theme-color);
    padding: .25rem;
    display: grid;
    grid-gap: 1rem;
    
    .remove-btn {
        background-color: red;
    }
}
`

export const List = ({ response, resourceType, UserInfo }) => {
    const deleteItem = (id) => {
        axios.delete(`https://dyrevelfaerd.herokuapp.com/api/v1${resourceType}/${id}`,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${UserInfo.token}`
                },
            });
        alert("slettet", id);
    };

    return (
        <>
            <h3 className="sub-title">Edit {resourceType}</h3>
            <StyledListUl>
                {response && response.map((element, index) => {
                    return (
                        <li key={index} >
                            <DynamicForm element={element} resourceType={resourceType} UserInfo={UserInfo} />
                            <button className="remove-btn" onClick={() => { deleteItem(element.id); }}>{`delete: ${resourceType}/${element.id}`}</button>
                            <pre style={{ overflow: 'scroll', maxWidth: '100%' }}>{JSON.stringify(element, null, 2)}</pre>
                        </li>
                    );
                })}
            </StyledListUl>
        </>
    );
};
