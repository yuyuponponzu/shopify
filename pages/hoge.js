import React from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/app_header';
import Menu from '../components/Menu';
import MansonryGrid from '../components/mansonry_grid';
import ImageCard from '../components/image_card';
import Fade from '../components/fade';
import Link from 'next/link';
import fetch from 'node-fetch';

class hoge_ extends React.Component {
    constructor(props) {
        super(props);
    }

    RequestImages = async (req) => {
        const res = await fetch('/admin/api/2021-01/products.json?product_type=' + req);
        const json = await res.json();
        return await json.products.map((ret) => ret.image.src);
    };

    handleEffectSelect = (effect) => {
        return this.props.dispatch({ type: 'CHENGE_MENU', effect: effect });
    };

    itemRenderer = (item, index) => {
        return <ImageCard key={index} src={item} />;
    };

    render() {
        // const a = this.RequestImages(this.props.effect);
        const a = this.RequestImages('pants');
        console.log(a);
        return (
            <div>
                {/* Header�̈� */}
                {/* <Head>
                <title>Create Bayashi!</title>
                <link rel="icon" href="/favicon.ico" />
                </Head> */}

                {/* Main�̈� */}
                <React.Fragment>
                    <AppHeader title="shop">
                        {' '}
                        {/* subtitle="unko bayashi"> */}
                        <Menu
                            className="app-menu"
                            options={this.props.menu_list}
                            selected={this.props.effect}
                            onSelect={this.handleEffectSelect}
                        />
                        <Link href="/hoge">hoge</Link>
                    </AppHeader>
                    <div className="app-content">
                        <MansonryGrid
                            key={this.props.effect}
                            transition="fade"
                            // items={['a','a']}
                            items={[a]}
                            itemRenderer={this.itemRenderer}
                            loaded={this.props.loaded}
                        />
                    </div>
                </React.Fragment>

                {/* Footer�̈� (���ƂŎg���Ƃ��p) */}
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

const Hoge = connect((state) => state)(hoge_);
export default Hoge;
