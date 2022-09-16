import React from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from 'src/components/Layout';
// import { getAbsolutePath } from 'src/utils';

// import topImage from 'src/assets/images/tours/Citytree_PorterTour_19_alex.jpg';

import PrivateTour from './PrivateTour';
import GroupTour from './GroupTour';
// const image = {
//   path: ogImageHe,
//   width: '1600',
//   height: '800',
// };

const Page: React.FC<PageProps> = () => {
  const intl = useIntl();
  const pageTitle = intl.formatMessage({ id: 'tours.meta.title' });
  const pageDesc = intl.formatMessage({ id: 'tours.meta.desc' });

  return (
    <Layout>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta property="og:description" content={pageDesc} />
        {/* <meta property="og:image" content={getAbsolutePath(image.path)} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} /> */}
      </Helmet>
      <GroupTour />
      <PrivateTour />
    </Layout>
  );
};

export default Page;
