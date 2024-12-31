import React from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';
import { getAbsolutePath } from 'src/utils';

import ogImage from 'src/assets/images/tours/citytree_tour_og.jpg';
import EinatLecture from './EinatLecture';
import TamiTour from './TamiLecture';
import ForageTour from './ForageTour';
import Sessions from './Sessions';
import Intro from './Intro';
import VirtualTour from './VirtualTour';
import AbraKadabra from './AbraKadabra';

const image = {
  path: ogImage,
  width: '1600',
  height: '800',
};

const Page: React.FC<PageProps> = () => {
  const pageTitle = 'עץבעיר - מרכז ידע לאקולוגיה עמוקה';
  const pageDesc = 'חיבור לאקולוגיה עמוקה, השבת חיים לאדמה, סיורי ליקוט, כישוף!';

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={getAbsolutePath(image.path)} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} />
      </Helmet>
      <Intro />
      <ForageTour />
      <VirtualTour />
      <Sessions />
      <AbraKadabra />
      {/* <TamiTour />
      <EinatLecture /> */}
    </Layout>
  );
};

export default Page;
