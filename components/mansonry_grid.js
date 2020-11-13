const MansonryGrid = (key, transition, items, itemRenderer) => {

    handleLayoutComplete = () => {
        this.setState({
            loaded: true,
        });
    };

    componentDidMount() = () => {
        imagesLoaded('.masonry-grid', () => {
            this.masonry = new Masonry('.masonry-grid', {
                initLayout: false,
                fitWidth: true,
                gutter: 32,
                itemSelector: '.masonry-grid-item',
            });

            this.masonry.once('layoutComplete', this.handleLayoutComplete);
            this.masonry.layout();
        });
    }
        const loaded  = this.props.loaded;

        return (
            <div className="masonry-grid">
                <Fade
                    in={!loaded}
                    timeout={{
                        enter: 300,
                        exit: 300,
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    <Loader />
                </Fade>
                {items.map((item, index) => (
                    <TransitionEffect name={transition} in={loaded} timeout={600}>
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
    };

MansonryGrid.propTypes = {
    transition: PropTypes.string,
    items: PropTypes.array,
    itemRenderer: PropTypes.func,
    onLoaded: PropTypes.func,
};

MansonryGrid.defaultProps = {
    transition: 'fade',
    items: [],
    itemRenderer: () => {},
    onLoaded: () => {},
};

export default MansonryGrid;