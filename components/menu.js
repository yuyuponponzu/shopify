import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';

const Menu = ({ className, options, selected, onSelect }) => {
    const handleItemClick = (effect) => () => onSelect(effect);

    return (
        <ul className={classNames('menu', className)}>
            {options.map((option, index) => (
                <Link key={index} href={{ pathname: "item", query: { product_type: option } }} >
                <li
                    key={index}
                    className={classNames('menu-item', {
                        active: selected === option,
                    })}
                    onClick={handleItemClick(option)}
                >
                    {option}
                </li>
                </Link>
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
