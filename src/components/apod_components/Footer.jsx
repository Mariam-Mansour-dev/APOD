import React from 'react'

const Footer = (props) => {
    const { handleToggleModal, data } = props;
    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal} >
                < i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer