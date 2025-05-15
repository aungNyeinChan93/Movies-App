import React, { useState } from 'react';

const Card = ({ children }) => {
    const [isLike, setLike] = useState(false)
    return (
        <React.Fragment>
            <div className=' p-3 mx-10 my-4  rounded shadow bg-gradient-100 hover:bg-gradient-200'>
                <div className='flex justify-between px-3 mx-10'>
                    <h3 className='text-2xl text-center p-2'>{children}</h3>
                    <button onClick={() => setLike(like => like = !like)} className='text-center text-4xl '>{isLike ? "👍" : "👎"}</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Card;

