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
        src="../../assets/images/tours/CityTree_Forage_alon_830.jpg"
        alt=""
        placeholder="none"
        width={720}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_ForageTour_02_Einat.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Hibiscus_01_tami.jpg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Hibiscus_01_tami.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Forage_01_tami.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Forage_01_tami.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Alon_Sq_.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Alon_Sq_.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
];

const Box: React.FC = () => (
  <BoxInner fullHeight color="#c2d8b8ff" style={{ color: '#262d1bff' }}>
    <Title>סיור ליקוט עם ד"ר אלון אלירן</Title>
    <Paragraph>
      פעם בחודש וחצי, בכל פעם במקום אחר בתל-אביב, מפגש עם השמות והטעמים של הצמחים החברים שגדלים לנו
      מתחת לאף, מה אפשר לאכול ואיך אפשר לגדל. חוזרות הביתה עם תיק־ליקוט מלא כל-טוב מאכלים ולפעמים גם
      ייחורים. אחרי הסיור נשלח קובץ יפה עם כל הצמחים שפגשנו והמידע עליהם.
    </Paragraph>
    <Paragraph>
      ד"ר אלון אלירן חוקר את הנסתר מן העין בעיר הגדולה כבר עשרים שנה לפחות. הידע שלו משתרע במחוזות
      הבוטניקה, הפואטיקה, הפיזיקה והמוזיקה. במפגש עם אלון אפשר לקבל תשובות על שאלות בענייני תזונה או
      גינון, אקלים או קונספירציה, וכשנחה עליו הרוח, אלון גם קורא משיריו.
    </Paragraph>
    <Paragraph>
      <b>100 ש"ח</b> לסיור בודד
      <br />
      <b>672 ש"ח</b> למחזור של 8 סיורים
    </Paragraph>
    <ButtonWrapper>
      <LinkButton
        href={PAGES.urbanForagingSeries}
        target="_blank"
        bgcolor="#1d4713ff"
        style={{ color: '#d8fb84ff' }}
      >
        לסדרת הליקוט "מאלון ועד תות"{' '}
      </LinkButton>
    </ButtonWrapper>
    <br />
    <Paragraph grow>
      * ניתן גם להזמין סיור משלכם ולהתאימו לגודל הקבוצה ולצרכיה:{' '}
      <a href={PAGES.alonForagingForm} target="_blank">
        לטופס הזמנת סיור
      </a>
    </Paragraph>
  </BoxInner>
);

const ForageTour: React.FC = () => (
  <Tour bgcolor="#3d5937ff" anchor="forage" box={<Box />} images={images} />
);

export default ForageTour;
