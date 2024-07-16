import Banner from "./_component/Banner";
import Shop from "./_component/Shop";
import Blog from "./_component/Blog";
import Services from "./_component/Services";
import BestProduct from "./_component/BestProduct";
import Comment from "./_component/Comment";
import ReferaFriends from "./_component/ReferAFriends";
import WhatMakes from "./_component/WhatMakes";
import Recently from "./_component/Recently";

const HomePage = () => {
    return (
        <>
            <Banner />
            <Services />
            <BestProduct />
            <Comment />
            <Shop />
            <ReferaFriends />
            <WhatMakes />
            <Recently />
            <Blog />
        </>
    );
};

export default HomePage;
