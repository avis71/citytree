import React from 'react';
import topImage from 'src/assets/images/tours/citytree_tour_og.jpg';
import { BoxInner, Hero, Title, Paragraph, Col, Row } from './styles';
import LeafContainer from 'src/components/LeafContainer';

const Intro: React.FC = () => (
  <Hero anchor="intro" image={topImage} boxColor="#342e1190">
    <LeafContainer opacity={0.2}>
      <Row>
        <Col xl={7} lg={8}>
          <BoxInner fullHeight style={{ color: '#e6f1d6' }}>
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
              תוכנית השיבה הביתה מביאה את כל מה שלמדנו ב-16 שנות חיים בדירה האקולוגית. התוכנית
              מחזורית ומחולקת לסדרות על פי הזמנים והעונות. הלימוד מתרחש בעולם האמיתי ובזום, בחומרים
              מוקלטים, מצולמים וכתובים שכולם מרוכזים בדף של עץבעיר בפטראון. אפשר להצטרף ללימוד בכל
              עת.
            </Paragraph>
            <Paragraph>
              * המחבקות של העץ מקבלות גישה לכל חומרי התוכנית ולמפגשי הזום ללא תשלום נוסף, על המפגשים
              בעולם האמיתי הן מוזמנות לשלם כמה שמתאים להן.
            </Paragraph>
          </BoxInner>
        </Col>
        <Col />
      </Row>
    </LeafContainer>
  </Hero>
);

export default Intro;
