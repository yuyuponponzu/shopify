const TransitionEffect = ({ name, children, ...other }) => (
    <ReactTransitionGroup.CSSTransition classNames={name} appear {...other}>
        {React.cloneElement(children, {
            className: classNames(children.props.className, name),
        })}
    </ReactTransitionGroup.CSSTransition>
);

TransitionEffect.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default TransitionEffect;
