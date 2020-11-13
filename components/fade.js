const Fade = ({ children, ...other }) => (
    <TransitionEffect name="fade" {...other}>
        {children}
    </TransitionEffect>
);

Fade.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Fade;
