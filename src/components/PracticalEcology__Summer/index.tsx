import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import Layout from 'src/components/Layout';
import ogImageHe from 'src/assets/images/practical-ecology-summer/og-he.jpg';
import { getAbsolutePath } from 'src/utils';
import { Navigation, Anchor, WinterAnchor } from 'src/components/PracticalEcology__Summer/styles';
import TopSection from './TopSection';
import Overview from './Overview';
import MagicLink from './MagicLink';
import Workshops from './Workshops';
import Investment from './Investment';
import Winter from './Winter';
import Times from './Times';

const image = {
  path: ogImageHe,
  width: '1920',
  height: '1280',
};

const Page: FC<PageProps> = () => {
  const { formatMessage } = useIntl();
  const siteTitle = formatMessage({ id: 'practical-ecology-summer.metatitle' });
  const siteDesc = formatMessage({ id: 'practical-ecology-summer.subtitle' });

  return (
    <Layout>
      <Helmet title={siteTitle}>
        <meta property="og:title" content={siteTitle} />
        <meta name="description" content={siteDesc} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:image" content={getAbsolutePath(image.path)} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} />
      </Helmet>
      <TopSection />
      <Navigation>
        <a href="#overview">
          <FormattedMessage id="practical-ecology-summer.nav.overview" />
        </a>
        <a href="#schedule">
          <FormattedMessage id="practical-ecology-summer.nav.schedule" />
        </a>
        <a href="#pricing">
          <FormattedMessage id="practical-ecology-summer.nav.pricing" />
        </a>
        <a href="#times">
          <FormattedMessage id="practical-ecology-summer.nav.times" />
        </a>
        <WinterAnchor href="#winter">
          <FormattedMessage id="practical-ecology-summer.nav.winter" />
        </WinterAnchor>
      </Navigation>
      <Anchor id="overview" />
      <Overview />
      <MagicLink />
      <Anchor id="schedule" />
      <Workshops />
      <Anchor id="pricing" />
      <Investment />
      <Anchor id="times" />
      <Times />
      <Anchor id="winter" />
      <Winter />
    </Layout>
  );
};

export default Page;
