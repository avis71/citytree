import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { deepEcologyUrl, PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import { BoxInner, ButtonWrapper, Title } from './styles';
import Tour from './Tour';

const images = [
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/Abrakadabra_830.jpg"
        alt=""
        placeholder="none"
        width={720}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/Abrakadabra_830.jpg"
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
  <BoxInner fullHeight color="#fddbffff" style={{ color: '#281b2dff' }}>
    <Title>קורס כישוף ואקולוגיה עמוקה</Title>
    <Paragraph>
      בהשלמה לעולם הקיימות המעשית של עץבעיר, הכישוף מוביל אותנו בשדה שבו האוצרות טמונים מתחת לפני
      האדמה — בתת-מודע האישי והקולקטיבי שלנו - אנו נזכרות באמת שלנו כנשים ולהיסטוריה הנשכחת של
      אנושות הרמונית. שואלות מה שבר את ההרמוניה ומגלות רמזים לנשכחות בכתובים. כל שיעור נפתח במדיטציה
      סביב מילה אחת מתוך לחש בן שמונה מילים. החלק המרכזי של השיעור מוקדש לנושאים שונים סביב האלה,
      האקולוגיה, והכלים של המכשפה, בעבר וכיום. השיעורים נעים עם היסודות, עם גלגל הזמן ועם סמלים
      ותבניות.
    </Paragraph>
    <Paragraph>
      שני מחזורי לימוד משולבים כאן לסדרת לימוד אחת שכוללת קטעי מדיטציה והשראה, שיעורים מוקלטים
      ורשומות.
    </Paragraph>
    <Paragraph grow>
      <b>480 ש"ח</b> – כל החומרים המוקלטים של כל אוסף סדרת כישוף.
    </Paragraph>
    <ButtonWrapper>
      <LinkButton
        href={deepEcologyUrl}
        target="_patreon"
        bgcolor="#730062ff"
        style={{ color: '#fcd2f6ff' }}
      >
        לרכישת סדרת הכישוף{' '}
      </LinkButton>
    </ButtonWrapper>
    <br />
    <Paragraph>
      <b>
        * ניתן גם להזמין את תמי להרצאה או סדרת מפגשים משלכן:{' '}
        <a href={PAGES.tamiSoilLectureForm}>בטופס הזה</a>
      </b>
    </Paragraph>
  </BoxInner>
);

const AbraKadabra: React.FC = () => (
  <Tour bgcolor="#593758ff" anchor="abrakadabra" box={<Box />} images={images} reverseLayout />
);

export default AbraKadabra;
