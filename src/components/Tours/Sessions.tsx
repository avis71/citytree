import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import Tour from './Tour';
import { BoxInner, ButtonWrapper, Title } from './styles';

const images = [
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/Soil_Tel_Hubez_830.jpg"
        alt=""
        placeholder="none"
        width={720}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/Soil_Tel_Hubez_830.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/magic_avocado_02_830.jpg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/magic_avocado_02_830.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/tel_rosmarin_05_830.jpg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/tel_rosmarin_05_830.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/tel_nettels_01_700.jpg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/tel_nettels_01_700.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
];

const Box: React.FC = () => (
  <BoxInner fullHeight color="#dcf8f1ff" style={{ color: '#1b1e2dff' }}>
    <Title>חובז׳ות וכישופים בתל חובז׳</Title>
    <Paragraph>
      <b>4 שיעורי כישוף, אקולוגיה עמוקה ועבודה עם צמחים, בגן הירק תל חובז בשכונת שפירא, תל-אביב.</b>
    </Paragraph>
    <Paragraph>איך מתחברים בחזרה לממשות? לחיים שיש בבית ובגינה? לבריאות שלנו?</Paragraph>
    <Paragraph grow>
      סרטונים וסדנאות מוקלטות מלווים את הלימוד. השיעורים בגינה מוקדשים למפגש החי עם הא'נשים, האדמה
      והצמחים. המשתתפים והמשתתפות מביאות דגימות ממה שהכינו בבית ואת כל השאלות שעלו תוך-כדי עשייה,
      אנחנו משתפות בידע, מספרות סיפורים, מקשיבות, עונות על שאלות, ומפתחות את החיבור והאינטואיציה
      מתוך המפגש החי והתפישה של הכול כחי (אנימיזם).
    </Paragraph>
    <Paragraph>
      <b>438 ש"ח</b> – השתתפות במפגשים + חומרי עיון ולימוד מוקלטים וכתובים.
      <br />
      מתחילות ב-4 בפברואר, סמוך לט"ו בשבט, 4 מפגשים שבועיים בימי שלישי ב-16:00.
    </Paragraph>
    <ButtonWrapper>
      <LinkButton
        href={PAGES.soilCourseForm}
        target="_blank"
        bgcolor="#385958"
        style={{ color: '#8fdef4ff' }}
      >
        לפרטים והרשמה לחוביזות וכישופים{' '}
      </LinkButton>
    </ButtonWrapper>
    <Paragraph>
      * ניתן גם להזמין את תמי להרצאה או סדרת מפגשים משלכן: {''}
      <a href={PAGES.tamiSoilLectureForm} target="_blank">
        כאן{' '}
      </a>
    </Paragraph>
  </BoxInner>
);

const Sessions: React.FC = () => (
  <Tour bgcolor="#385958ff" anchor="sessions" box={<Box />} images={images} />
);

export default Sessions;
