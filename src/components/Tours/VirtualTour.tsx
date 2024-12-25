import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import { BoxInner, ButtonWrapper, Title } from './styles';
import Tour from './Tour';

const images = [
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/tami_soil_series.jpg"
        alt=""
        placeholder="none"
        width={720}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/tami_soil_series.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_BialikCircle_Liana.jpg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_BialikCircle_Liana.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Batata_01_tami.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Batata_01_tami.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_AlonAviKabucha_01_Tami.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_AlonAviKabucha_01_Tami.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
];

const Box: React.FC = () => (
  <BoxInner fullHeight color="#f5e9d8ff" style={{ color: '#2d1b1bff' }}>
    <Title>סדרת אדמה בזום עם תמי צרי</Title>
    <Paragraph>4 מפגשי זום שלא תוכלו לעבור אותם בלי להתחיל לעשות קומפוסט.</Paragraph>
    <Paragraph>
      מהי אדמה, מתי ולמה היא סולקה? איך מחזירות את האדמה הביתה – אל הבית שלנו, הגוף שלנו, התודעה
      שלנו? מהי אדמיות? נוריד את כל זה לקרקע! נלמד איך להשיב חיים לאדמה, ונתחיל לעשות קומפוסט.
    </Paragraph>
    <Paragraph>
      ימי רביעי ב-19:00, מפגשים בני שעתיים, מתחילים במדיטציה קצרה, ואז הרצאה, ואז לעיקר – דיון ומענה
      על שאלות מעשיות. כל ערמה תקבל את כל התשובות : ) המפגשים מלווים בחומרי לימוד כתובים ומוקלטים
      מהספרייה העשירה של עץבעיר.
    </Paragraph>
    <Paragraph>
      <b>480 ש"ח</b> – השתתפות בסדרה + כל החומרים המוקלטים של כל אוסף עושות חיים בבית. מחבקות
      מוזמנות להצטרף ללא תשלום נוסף.
    </Paragraph>
    <ButtonWrapper>
      <LinkButton
        href={PAGES.soilSeriesForm}
        target="_blank"
        bgcolor="#532c10ff"
        style={{ color: '#e17645ff' }}
      >
        לפרטים והרשמה לסדרת האדמה
      </LinkButton>
    </ButtonWrapper>
    <br />
    <Paragraph>
      * ניתן גם להזמין את תמי להרצאה בפני המעגל שלכם:{' '}
      <a href={PAGES.tamiSoilLectureForm} target="_blank">
        לטופס הזמנת הרצאה
      </a>
    </Paragraph>
  </BoxInner>
);

const VirtualTour: React.FC = () => (
  <Tour bgcolor="#594537ff" anchor="virtual" box={<Box />} images={images} reverseLayout />
);

export default VirtualTour;
