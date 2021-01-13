import PropTypes from 'prop-types';
import TransitionEffect from './transition_effect';

const Grow = ({ children, ...other }) => (
    <TransitionEffect name="grow" {...other}>
        {children}
    </TransitionEffect>
);

Grow.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Grow;
