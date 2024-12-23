import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import topImage from 'src/assets/images/tours/citytree_tour_og.jpg';
import bottomImage from 'src/assets/images/tours/CityTree_Pomegranet_02_tami.jpg';
import { tamiPhoneLink, einatPhoneLink } from 'src/constants';
import { TopParallaxContent, BoxInner, Container, Hero, Wrapper, Title, Paragraph } from './styles';

const Content: React.FC<{ offsetY?: number }> = React.memo(({ offsetY = 0 }) => (
  <Container style={{ transform: `translateY(${offsetY}px)`, color: '#e6f1d6' }}>
    <Row bgcolor="342e11ff">
      <Col md={12} lg={9}>
        <BoxInner>
          <Title>תוכנית השיבה הביתה</Title>
          <Paragraph>
            איך להכין קומפוסט בשיטות שונות?
            <br />
            מה אפשר ללקט ברחובות העיר?
            <br />
            איך להשיג ולהכין מזון מיטיב?
            <br />
            איך לטפח גינה אקולוגית?
            <br />
            איך לחיות ביחד?
            <br />
            איך לנקות את הבית מרעלים?
            <br />
            ולבסוף – מדוע כל הדברים הטובים האלה נשארים בשוליים?
          </Paragraph>

          <Paragraph>
            תוכנית השיבה הביתה מביאה את כל מה שלמדנו ב-16 שנות חיים בדירה האקולוגית. התוכנית מחזורית
            ומחולקת לסדרות על פי הזמנים והעונות. הלימוד מתרחש בעולם האמיתי ובזום, בחומרים מוקלטים,
            מצולמים וכתובים שכולם מרוכזים בדף של עץבעיר בפטראון. אפשר להצטרף ללימוד בכל עת.
          </Paragraph>
          <Paragraph>
            * המחבקות של העץ מקבלות גישה לכל חומרי התוכנית ולמפגשי הזום ללא תשלום נוסף, על המפגשים
            בעולם האמיתי הן מוזמנות לשלם כמה שמתאים להן.
          </Paragraph>
        </BoxInner>
      </Col>
    </Row>
  </Container>
));

const Intro: React.FC = () => (
  <Wrapper>
    <Parallax bgImage={topImage} strength={200}>
      <TopParallaxContent />
    </Parallax>
    <Parallax
      className="bottomParallax"
      renderLayer={(percentage) => {
        const offsetY = percentage < 0.9 ? -175 * (0.9 - percentage) : 0;
        return (
          <Hero image={bottomImage} boxColor="#342e11ff" position="left">
            <Content offsetY={offsetY} />
          </Hero>
        );
      }}
    />
  </Wrapper>
);

export default Intro;
