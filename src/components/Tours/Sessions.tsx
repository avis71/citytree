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
        src="../../assets/images/tours/Z06_0976.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_07_Sq_.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_07_Sq_.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_03_Sq_.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_03_Sq_.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_01_Sq_.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_01_Sq_.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
];

const Box: React.FC = () => (
  <BoxInner fullHeight color="#dcf8f1" style={{ color: '#1b1e2d' }}>
    <Title>חובז׳ות וכישופים בתל חובז׳</Title>
    <Paragraph>
      ב-4 בפברואר תמי תצא החוצה מהזום ל-4 מפגשים בגן הירק הקסום תל חובז, בשכונת שפירא בתל אביב.
    </Paragraph>
    <Paragraph>
      בזמן אדמיות, ליתר דיוק ב-8 בינואר, תתחיל סדרת אדמה בזום עם תמי – 4 מפגשים שלא תוכלו לצאת מהם
      בלי להתחיל לעשות קומפוסט!
    </Paragraph>
    <Paragraph grow>
      מפגש בעולם האמיתי, עם היסודות, הצמחים והסיפורים. המשתתפות מביאות למפגשים דגימות ממה שהכינו
      בבית ואת כל השאלות שעלו תוך כדי עשייה, אנחנו פוגשות את הצמחים ומפתחות את החיבור, האינטואיציה
      והמודעות ליסודות מתוך המפגש החי והתפישה של הכול כחי (אנימיזם). המפגשים מלווים בסרטונים, פרקים
      כתובים וסדנאות מוקלטות של עץבעיר שנשלחים לפני כל מפגש ואחריו, ובהם ניתן למצוא את כל הפרטים
      הטכניים. במפגשים אנחנו מתכיילות עם הממשות ועם החיים עצמם.
    </Paragraph>
    <Paragraph>
      ההשתתפות בסדרה עולה 438 שקלים, ואם זו בעיה, והלב שלך קורא לך להצטרף, תמי זמינה בוואטסאפ ותשמח
      לשמוע ממך עם כל שאלה, תהייה או בקשה: 0584227531
    </Paragraph>
    <ButtonWrapper>
      <LinkButton
        href={PAGES.soilCourseForm}
        target="_blank"
        bgcolor="#385958"
        style={{ color: '#8fdef4' }}
      >
        לפרטים לפרטים והרשמה לסדרת האדמה
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Sessions: React.FC = () => (
  <Tour bgcolor="#385958ff" anchor="sessions" box={<Box />} images={images} />
);

export default Sessions;
