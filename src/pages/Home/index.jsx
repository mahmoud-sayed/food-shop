import React, { useRef } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Footer from '../../components/common/Footer';
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import { menuItemsData } from '../../components/common/Menu/data';

const Home = () => {

  return (
    <div>
      <Banner />
      <Menu />
      <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default Home;
