import React from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/app_header';
import Menu from '../components/Menu';
import MansonryGrid from '../components/mansonry_grid';
import ImageCard from '../components/image_card';
import 'fontsource-roboto';
import Fade from '../components/fade';
import Link from 'next/link';
import axios from 'axios';
import querystring from 'query-string';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import styles from "../styles/Home.module.css";

class _Home extends React.Component {
    constructor(props) {
        super(props);
    }

    requestItemImages = async (effect) => {
    try{
        const req = {
            method: 'get',
            url: effect !== "all"? `${process.env.DOMAIN}/${process.env.ROOT_PATH}/${process.env.PRODUCTS}?product_type=${effect}}`: `${process.env.DOMAIN}/${process.env.ROOT_PATH}/${process.env.PRODUCTS}`,
            headers:{'Authorization':`Basic ${process.env.SHOPIFY_BASE64}`}
        };
        const data = await axios(req);
        const json = await data.data;
        return json;
    } catch (e) {
        console.log('リクエストエラー');
        console.log(e);
        return [];
        }
    }

    handleEffectSelect = async (effect) => {
        const items = await this.requestItemImages(effect);
        return await this.props.dispatch({ type: 'CHENGE_MENU', effect, items });
    };

    handleInitImages = async (init_items) => {
        if (!this.props.images.length){
        return await this.props.dispatch({ type: 'CHENGE_MENU', effect:"all", items: init_items, images: init_items.products.map((ret) => ret.image.src)});
        }
        return this.props.images;
    };

    itemRenderer = (item, index) => {
        return <ImageCard key={index} src={item} />;
    };
    
    render() {
        // this.handleInitImages(this.props.init_items);
        // this.handleEffectSelect("all");
        // console.log(process.env.DOMAIN);
        return (
            <div>
                {/* Header領域 */}
                {/* <Head>
                <title>Create Bayashi!</title>
                <link rel="icon" href="/favicon.ico" />
                </Head> */}
                {/* Main領域 */}
                <React.Fragment>
                    <AppHeader title="shop">
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
                            transition="fade"
                            items={this.props.images}
                            itemRenderer={this.itemRenderer}
                            loaded={this.props.loaded}
                        />
                    </div>
                </React.Fragment>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
            
            </div>
        );
    }
}

const Home = connect((state) => state)(_Home);
export default Home;

export const getServerSideProps = async (ctx) =>{
    const req = {
        method: 'get',
        url:`${process.env.DOMAIN}/${process.env.ROOT_PATH}/${process.env.PRODUCTS}`,
        headers:{'Authorization':`Basic ${process.env.SHOPIFY_BASE64}`}
    };
    const data = await axios(req);
    const json = await data.data;
    const images = await json.products?.map((ret) => ret.image.src);
    return {props: {init_items:json,init_images:images}};
}