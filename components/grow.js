const Grow = ({ children, ...other }) => (
    <TransitionEffect name="grow" {...other}>
        {children}
    </TransitionEffect>
);

Grow.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Grow;
