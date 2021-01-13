import PropTypes from 'prop-types';
import classNames from 'classnames';

const Menu = ({ className, options, selected, onSelect }) => {
    const handleItemClick = (effect) => () => onSelect(effect);

    return (
        <ul className={classNames('menu', className)}>
            {options.map((option, index) => (
                <li
                    key={index}
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
