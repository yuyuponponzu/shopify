import React from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/app_header';
import Menu from '../components/Menu';
import MansonryGrid from '../components/mansonry_grid';
import ImageCard from '../components/image_card';

class Home_ extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEffectSelect = (effect) => {
        return this.props.dispatch({ type: 'CHENGE_MENU', effect: effect });
    };

    itemRenderer = (item, index) => {
        return <ImageCard key={index} src={item} />;
    };

    render() {
        return (
            <div>
                {/* Header領域 */}
                {/* <Head>
                <title>Create Bayashi!</title>
                <link rel="icon" href="/favicon.ico" />
                </Head> */}

                {/* Main領域 */}
                <React.Fragment>
                    <AppHeader title="furugi shop">
                        {' '}
                        {/* subtitle="unko bayashi"> */}
                        <Menu
                            className="app-menu"
                            options={this.props.menu_list}
                            selected={this.props.effect}
                            onSelect={this.handleEffectSelect}
                        />
                    </AppHeader>
                    <div className="app-content">
                        <MansonryGrid
                            key={this.props.effect}
                            transition={this.props.effect}
                            items={this.props.images}
                            itemRenderer={this.itemRenderer}
                            loaded={this.props.loaded}
                        />
                    </div>
                </React.Fragment>

                {/* Footer領域 (あとで使うとき用) */}
                {/* <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' bayashi nikudango '}
                        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                    </a>
                </footer> */}
            </div>
        );
    }
}

const Home = connect((state) => state)(Home_);
export default Home;
