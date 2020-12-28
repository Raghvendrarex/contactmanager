import React from 'react';
import PropTypes from 'prop-types';


function Header(props) {
    const { branding } = props;
    return (
        <div>
            <h1>{branding}</h1>
        </div>
    );
}

Header.defaultProps={
    branding:"My Application"
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;