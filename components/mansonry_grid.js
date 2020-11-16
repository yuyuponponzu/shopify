import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fade from './fade';
import Loader from './loader';
import TransitionEffect from './transition_effect';
// import Grow from './grow';

class MansonryGrid_ extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLayoutComplete = () => {
        return this.props.dispatch({ type: 'LOADED_TRUE' });
    };

    componentDidMount() {
        const imagesLoaded = require('imagesloaded');
        imagesLoaded('.masonry-grid', () => {
            const Masonry = require('masonry-layout');
            let masonry = new Masonry('.masonry-grid', {
                initLayout: false,
                fitWidth: true,
                gutter: 32,
                itemSelector: '.masonry-grid-item',
            });
            masonry.once('layoutComplete', this.handleLayoutComplete);
            masonry.layout();
        });
    }

    render() {
        const { transition, items, itemRenderer, loaded } = this.props;
        return (
            <div className="masonry-grid">
                <Fade
                    // inがトリガー
                    in={!loaded}
                    timeout={{
                        enter: 300,
                        exit: 300,
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    {/* Grow内で呼び出し */}
                    <Loader />
                </Fade>
                {items.map((item, index) => (
                    // childrenとしてTransitionEffect内でdivタグ以下を読み出し
                    // カードがおのおの呼び出される
                    <TransitionEffect key={index} name={transition} in={loaded} timeout={600}>
                        <div
                            className="masonry-grid-item"
                            style={{
                                transitionDuration: `${600 + index * 80}ms`,
                                transitionDelay: `${index * 60}ms`,
                            }}
                        >
                            {itemRenderer(item, index)}
                        </div>
                    </TransitionEffect>
                ))}
            </div>
        );
    }
}

MansonryGrid_.propTypes = {
    transition: PropTypes.string,
    items: PropTypes.array,
    itemRenderer: PropTypes.func,
    onLoaded: PropTypes.func,
};

MansonryGrid_.defaultProps = {
    transition: 'fade',
    items: [],
    itemRenderer: () => {},
    onLoaded: () => {},
};

const MansonryGrid = connect((state) => state)(MansonryGrid_);
export default MansonryGrid;
