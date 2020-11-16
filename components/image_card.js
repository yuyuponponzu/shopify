import PropTypes from 'prop-types';
import classNames from 'classnames';

const ImageCard = ({ className, src, alt, ...other }) => {
    return <img className={classNames('image-card', className)} src={src} alt={alt} {...other} />;
};

ImageCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

ImageCard.defaultProps = {
    alt: '',
};

export default ImageCard;
