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
  <BoxInner fullHeight color="#fff5f1">
    <Title>סדרת אדמה בזום עם תמי צרי</Title>
    <Paragraph>
      בזמן אדמיות, ליתר דיוק ב-8 בינואר, תתחיל סדרת אדמה בזום עם תמי – 4 מפגשים שלא תוכלו לצאת מהם
      בלי להתחיל לעשות קומפוסט!
    </Paragraph>
    <Paragraph>
      אבל לא רק קומפוסט בתפריט, אלא גם היכרות עמוקה עם יסוד האדמה, עם האפשרות שלנו להתחבר אליה מחדש.
      מהי אדמה, מתי ולמה היא סולקה? איך מחזירות את האדמה הביתה - אל הבית שלנו, הגוף שלנו, התודעה
      שלנו? מהי אדמיות?
    </Paragraph>
    <Paragraph grow>
      נוריד את זה לקרקע! לכאן ועכשיו, בעיר ובכפר.
      <br /> ימי רביעי ב-19:00, משיבות חיים לאדמה.
      <br /> מחבקות מוזמנות להצטרף ללא תשלום נוסף, וכולן כולן מוזמנות להירשם בעמוד הנחמד שהקמנו:
    </Paragraph>
    <ButtonWrapper>
      <LinkButton href={PAGES.soilSeriesForm} target="_blank" bgcolor="#385958">
        לפרטים והרשמה לסדרת האדמה
      </LinkButton>
    </ButtonWrapper>
    <Paragraph>
      * ניתן גם להזמין את תמי להרצאה בפני המעגל שלכם:{' '}
      <a href={PAGES.tamiSoilLectureForm} target="_blank">
        לטופס הזמנת הרצאה
      </a>
    </Paragraph>
  </BoxInner>
);

const VirtualTour: React.FC = () => (
  <Tour bgcolor="#4a3b35" anchor="virtual" box={<Box />} images={images} reverseLayout />
);

export default VirtualTour;
