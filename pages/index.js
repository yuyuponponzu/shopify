import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    itemRenderer = (item) => {
        return <ImageCard key={item} src={item} />;
    };

    return (
        <div className={home.container}>
            {/* Header領域 */}
            {/* <Head>
                <title>Create Bayashi!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            {/* Main領域 */}
            <React.Fragment>
                <AppHeader title="Photo Gallery Grid" subtitle="Loading Animations">
                    <Menu
                        className="app-menu"
                        options={LOADING_EFFECTS}
                        selected={this.props.effect}
                    />
                </AppHeader>
                <div className="app-content">
                    <MansonryGrid
                        key={this.props.effect}
                        transition={this.props.effect}
                        items={IMAGES}
                        itemRenderer={this.itemRenderer}
                    />
                </div>
            </React.Fragment>

            {/* Footer領域 */}
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    );
}

Home = connect((state) => state)(Home);
export default Home;