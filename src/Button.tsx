import React from 'react';

export type PropsType = {
    name: string;
    callBack: () => void
}
export const Button = ({name, callBack}: PropsType) => {

    const onClickHandler = () => {
        callBack()
    }
    return (
        <button onClick={onClickHandler}>
            {name}
        </button>
    );
};

