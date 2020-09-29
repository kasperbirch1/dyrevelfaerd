import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, charCountState } from '../Globalstates/Atoms';

const RocoilTest = () => {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <p>Character Count: {count}</p>
            <p>Echo: {text}</p>
            <input type="text" value={text} onChange={onChange} />
            <br />
        </div>
    )
}

export default RocoilTest
