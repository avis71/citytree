import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Col, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, Button } from 'src/components/Box';
import { ReactComponent as WhatsappIcon } from 'src/assets/images/icon_whatsapp.svg';
import { ReactComponent as GoogleIcon } from 'src/assets/images/icon_google.svg';
import { ReactComponent as FacebookIcon } from 'src/assets/images/icon_facebook.svg';
import Subscribe from './Subscribe';
import LeafContainer from '../LeafContainer';
import './styles.scss';

function Contact() {
  return (
    <div className="contact" id="contact">
      <LeafContainer>
        <Row>
          <Col lg={6}>
            <BoxInner fullHeight color="#f7fbe2b3">
              <Title>
                <FormattedMessage id="contact.details.title" />
              </Title>
              <Paragraph intlId="contact.details.text" />
              <div className="contact-details">
                <h4>
                  <FormattedMessage id="contact.details.whatsapp.title" />
                </h4>
                <strong>
                  <FormattedMessage id="contact.details.whatsapp.text" />
                </strong>
                <Button>
                  <WhatsappIcon />
                  <FormattedMessage id="contact.details.whatsapp.button" />
                </Button>
              </div>
              <div className="contact-details">
                <h4>
                  <FormattedMessage id="contact.details.google.title" />
                </h4>
                <strong>
                  <FormattedMessage id="contact.details.google.text" />
                </strong>
                <Button>
                  <GoogleIcon />
                  <FormattedMessage id="contact.details.google.button" />
                </Button>
              </div>
              <div className="contact-details">
                <h4>
                  <FormattedMessage id="contact.details.facebook.title" />
                </h4>
                <strong>
                  <FormattedMessage id="contact.details.facebook.text" />
                </strong>
                <Button>
                  <FacebookIcon />
                  <FormattedMessage id="contact.details.facebook.button" />
                </Button>
              </div>
            </BoxInner>
          </Col>
          <Col lg={6} className="side-column">
            <BoxInner fullHeight color="#f7fbe2b3">
              <Title>
                <FormattedMessage id="contact.newsletter.title" />
              </Title>
              <Paragraph intlId="contact.newsletter.text" />
              <Subscribe />
            </BoxInner>
          </Col>
        </Row>
      </LeafContainer>
    </div>
  );
}

export default Contact;
