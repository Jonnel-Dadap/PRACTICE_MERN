import React from "react";

const CardForAdmin = ({ admin }) => {
    return (
        <>
            <h3 className="font-bold text-lg text-gray-700 max-w-xl text-center">{admin.name}</h3>
            <p className="font-bold text-lg text-gray-700 max-w-xl text-center">{admin.role}</p>
            <p className="font-sans text-5-1 text-gray-700 max-w-xl text-center">
                {admin.status && admin.status.toLowerCase() === "active"
                    ? "This user is active in this system."
                    : "This user is Inactive in this system."}
            </p>
        </>
    )
};

export default CardForAdmin;