import React from "react";

interface Props {
    componentAction: () => void;
}


const ExitButton: React.FC<Props> = ({ componentAction }) => {

    const onButtonClick = () => {
        if (typeof componentAction === 'function') {
            componentAction();
        } else {
            console.error("componentAction is not a function");
        }
    }

    return (
        <div onClick={onButtonClick}>
            <div className="bg-gray-1 flex justify-center items-center w-11 h-11 border-2 border-gray-3 rounded-full"><i className="fa fa-times text-lg text-gray-4" aria-hidden="true"></i></div>
        </div>
    )
} 

export default ExitButton