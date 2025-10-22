import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='logo'>
                {/* <img src='' alt='Data Curation Logo' /> */}
                <i className="bi bi-binoculars-fill" />
                <span> Dataset Curation App</span>
            </div>
        </header>
    )
}

export default Header