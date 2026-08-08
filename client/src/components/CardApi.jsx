import React from "react";

const CardApi = ({viewer}) => {
    return(
        <>
        <h3 className="font-bold text-lg text-gray-700 max-w-xl text-center">{viewer.name}</h3>
        <p className="font-bold text-lg text-gray-700 max-w-xl text-center">{viewer.study}</p>
        <p className="font-sans text-5-1 text-gray-700 max-w-xl text-center">{viewer.status === "Active" ? "This user is active in this system" :
         "This user is Inactive in this system."}</p>
        </>
    )
}

export default CardApi;