const Menu = ({ className, options, selected, onSelect }) => {
    const handleItemClick = (effect) => () => onSelect(effect);

    return (
        <ul className={classNames('menu', className)}>
            {options.map((option) => (
                <li
                    className={classNames('menu-item', {
                        active: selected === option,
                    })}
                    onClick={handleItemClick(option)}
                >
                    {option}
                </li>
            ))}
        </ul>
    );
};

// バリデーション
Menu.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    selected: PropTypes.string,
    onSelect: PropTypes.func,
};

Menu.defaultProps = {
    options: [],
    selected: null,
    onSelect: () => {},
};

export default Menu;
