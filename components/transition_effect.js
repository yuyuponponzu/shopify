import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

const TransitionEffect = ({ name, children, ...other }) => (
    <CSSTransition classNames={name} appear {...other}>
        {React.cloneElement(children, {
            className: classNames(children.props.className, name),
        })}
    </CSSTransition>
);

TransitionEffect.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default TransitionEffect;
