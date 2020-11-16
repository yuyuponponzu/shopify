import PropTypes from 'prop-types';
import TransitionEffect from './transition_effect';

const Fade = ({ children, ...other }) => (
    <TransitionEffect name="fade" {...other}>
        {children}
    </TransitionEffect>
);

Fade.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Fade;
