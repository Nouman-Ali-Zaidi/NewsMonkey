import React from 'react';
import loading from "../loading.gif";

const Spinner = () => {

    return (
        <div className='text-center'>
            <img style={{ width: "5%", objectFit: "contain" }} src={loading} alt="Loading" />
        </div>
    )
}

export default Spinner
