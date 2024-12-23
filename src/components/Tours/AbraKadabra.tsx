import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { deepEcologyUrl } from 'src/constants';
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
  <BoxInner fullHeight color="#fff5f1">
    <Title>קורס כישוף ואקולוגיה עמוקה</Title>
    <Paragraph>
      זה אלפי שנים האנושות מנסה את הסדר הפטריארכלי, ומה נאמר? זה לא הולך כל-כך טוב, וכרגע אנו במשבר
      גדול. משהו חסר, ונדרש תיקון יסודי.
    </Paragraph>
    <Paragraph>
      כשאנחנו מחזירות את האלה, אנחנו מחזירות את הסדר של אימא לעולם, את הכוח שלנו ליצור ולפעול
      בהרמוניה ואת הרוך שנפקד מעולמנו. אנחנו לא מגרשות את האל! אנחנו רק מורידות אותו מכיסאו הרם,
      בחזרה אל האדמה, ומזמינות אותו לשחק יחד, על פי חוקיה של טבע.
    </Paragraph>
    <Paragraph grow>
      כדי להשיב לעולמנו את יופיו, אנחנו יוצאות למסע גילוי של כוחותינו הנסתרים. אנו צוללות לסיפורים
      שלא סופרו על סדרי עולם קדומים ומספרות סיפור חדש על עולם יפה יותר שרְחָמֵינוּ יודעות שאפשרי.
    </Paragraph>
    <Paragraph>
      בהשלמה לעולם הקיימות המעשית של עץבעיר, כאן אנחנו צועדות בשדה שבו האוצרות טמונים מתחת לפני
      האדמה — בתת המודע האישי והקולקטיבי שלנו, בזיכרונות שלנו, בכתבים וברעיונות שהיו אסורים ונשכחו
      במשך אלפי שנה.
    </Paragraph>
    <ButtonWrapper>
      <LinkButton href={deepEcologyUrl} target="_patreon" bgcolor="#4a3b35">
        לרכישת הסידרה
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const AbraKadabra: React.FC = () => (
  <Tour bgcolor="#4a3b35" anchor="abrakadabra" box={<Box />} images={images} reverseLayout />
);

export default AbraKadabra;
