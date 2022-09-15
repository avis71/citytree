import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, Button, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/CityTreeSite_Tours_01_Alex.jpeg';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import { formatPath } from 'src/utils';
import { PAGES } from 'src/constants';
import './styles.scss';

function Tours() {
  const intl = useIntl();

  return (
    <Hero image={image} boxColor="#fff8decc" anchor="tours" position="right">
      <Container className="tours">
        <Row>
          <Col xl={7} lg={6}>
            <BoxInner fullHeight>
              <Title>
                <FormattedMessage id="tours.general.title" />
              </Title>
              <Paragraph intlId="tours.general.text" />
            </BoxInner>
          </Col>
          <Col xl={5} lg={6} className="side-column">
            <Row>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.groups.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.groups.text" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <ComingSoonModalProvider>
                      {(showModal) => (
                        <Link to={formatPath(intl, PAGES.groupTours)} onClick={showModal}>
                          - <FormattedMessage id="more-details" />
                          ...
                        </Link>
                      )}
                    </ComingSoonModalProvider>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.groupTourFormHebrew} target="_blank">
                      <FormattedMessage id="tours.order" />
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.private.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.private.text" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <ComingSoonModalProvider>
                      {(showModal) => (
                        <Link to={formatPath(intl, PAGES.privateTours)} onClick={showModal}>
                          - <FormattedMessage id="more-details" />
                          ...
                        </Link>
                      )}
                    </ComingSoonModalProvider>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.privateTourFormHebrew} target="_blank">
                      <FormattedMessage id="tours.order" />
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.forage.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.forage.text" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <ComingSoonModalProvider>
                      {(showModal) => (
                        <Link to={formatPath(intl, PAGES.forageTours)} onClick={showModal}>
                          - <FormattedMessage id="more-details" />
                          ...
                        </Link>
                      )}
                    </ComingSoonModalProvider>
                  </Paragraph>
                  <div>
                    <ComingSoonModalProvider>
                      {(showModal) => (
                        <Button onClick={showModal}>
                          <FormattedMessage id="tours.register" />
                        </Button>
                      )}
                    </ComingSoonModalProvider>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.magic.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.magic.text" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <ComingSoonModalProvider>
                      {(showModal) => (
                        <Link to={formatPath(intl, PAGES.magicTours)} onClick={showModal}>
                          - <FormattedMessage id="more-details" />
                          ...
                        </Link>
                      )}
                    </ComingSoonModalProvider>
                  </Paragraph>
                  <div>
                    <ComingSoonModalProvider>
                      {(showModal) => (
                        <Button onClick={showModal}>
                          <FormattedMessage id="tours.register" />
                        </Button>
                      )}
                    </ComingSoonModalProvider>
                  </div>
                </BoxInner>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

export default Tours;
