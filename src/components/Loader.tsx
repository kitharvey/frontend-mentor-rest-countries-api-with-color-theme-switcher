import React from 'react'


const Loader: React.FC = () => {
        return (
            <div className='loader-wrapper' >
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        );
}


export default Loader