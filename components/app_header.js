import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({ title, subtitle, children }) => (
    <div className="app-header">
        <h1 className="app-header-title">
            {title}
            {subtitle && <span>{subtitle}</span>}
        </h1>
        {children}
    </div>
);

// バリデーション
AppHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.node,
};

export default AppHeader;
