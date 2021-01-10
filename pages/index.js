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

    reqItem = async () => {
        console.log("aaa");
        const data = await axios(`/${process.env.ROOT_PATH}/${process.env.PRODUCTS}`);
        console.log("bbb");
        const json = await data.data;
        console.log(json);
        return await json;
    }

    handleEffectSelect = (effect) => {
        return this.props.dispatch({ type: 'CHENGE_MENU', effect: effect });
    };

    itemRenderer = (item, index) => {
        return <ImageCard key={index} src={item} />;
    };
    
    render() {
        // this.requestItemImages(this.props.effect);
        const a = this.reqItem();
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
                            items={a}
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

// export const getServerSideProps = async (ctx) =>{
//     const req = {
//         method: 'get',
//         url:`${process.env.DOMAIN}/${process.env.ROOT_PATH}/${process.env.PRODUCTS}?${querystring.stringify(ctx.query)}`,
//         headers:{'Authorization':`Basic ${process.env.SHOPIFY_BASE64}`}
//     };
//     const data = await axios(req);
//     const json = await data.data;
//     const images = await json.products?.map((ret) => ret.image.src);
//     return {props:{images_lists:images}};
// }