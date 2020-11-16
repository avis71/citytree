import React from 'react';
import { ITabs } from './types';
import { phoneLink, emailLink } from '../../constants';
import AboutUsImage from '../../images/about-us.jpg';

const color1 = '#000000';
const color2 = '#ffffff';

export const Tabs: ITabs[] = [
  {
    key: 'about',
    title: 'עוד על עץבעיר',
    text: (
      <p>
        עץבעיר הוא נקודה ברשת תומכת החיים שנקראת "התנועה הגדולה", וחבריו פעילים במרד בהכחדה ובכלל
        התנועה הסביבתית. המתנה הייחודית שהעץ מביא אל המפה היא האפשרות הנגישה והמיידית לשינוי
        אישי–קהילתי–אקולוגי. גם לאלה מבינינו הפעילים בגינות קהילתיות, בהפגנות או בעשייה ציבורית אחרת
        נותר במקרים רבים פער בין הציבורי לאישי. עץבעיר הופך את הבית ואת העבודה בו ובקרבתו לזירה
        אומנותית–חתרנית של שינוי וגילוי ובכך הוא משלים ומעשיר כל פעילות במרחב הציבורי.
        <br />
        <br />
        בעץבעיר אנחנו חיות את האוטופיה במידה שאפשרית לנו כאן ועכשיו – "אוטופיה" השולחת אלינו רמזים
        על כל צעד ושעל – מההיסטוריה של העיר האהובה שלנו ועד גמל-שלמה שהתגלה בגינה.
        <br />
        <br />
        העץ חוקר בפועל איך "לחיות טוב בעיר" ומנחיל ידע לטיפוח הסביבה העירונית כמרחב שופע חיים
        ומערכות יחסים – בין האדם לצומח ולחי, בינם לבין עצמם, לאדמה, למים ולכל היסודות. המידע רב-הערך
        שהצטבר וממשיך להצטבר בעץ יכול להיות קיומי בעת משבר, וביומיום הוא פשוט איכות חיים: תזונה
        מיטיבה, שימור מזון, השבת הזבל לאדמה, עבודה נכונה עם מים ועם צמחים, אקולוגיה אנושית,
        עצמאות-עם, כלכלה מעגלית, יצרנות מקומית.
        <br />
        <br />
        להרחבה:{' '}
        <a
          href="https://docs.google.com/document/d/1b_J-MArPb-HrdbwanwqlwcGY1L7Zy3_aEeqj-rMNIAI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          מה עץבעיר נותן לעיר, נייר-עמדה, אביב 2020
        </a>
      </p>
    ),
    imageUrl: AboutUsImage,
  },
  {
    key: 'visit',
    title: 'מתי ואיך אפשר לבוא',
    text: (
      <>
        <p>
          בימי שלישי הבית והגינה פתוחים לביקורים ואפשר לבוא לפגוש את תמי, אלון וחבורת המתלמדים
          והדיירות שחיות לפרקים בדירה או מבקרות בה. הבית נפתח, כמובן, גם כשמתקיימים בו אירועים,
          סיורים או סדנאות. אפשר גם להגיע בתיאום מראש כדי לקנות חומץ, סבון או בוקאשי.{' '}
        </p>
        <p>
          אפשר לבוא לשהות ארוכה במסגרת ריטריט אישי. א'נשים מגיעות לעץ כדי ללמוד, להיחשף לפרקטיקות
          אקולוגיות, לפגוש עוד שותפות ושותפים לדרך, לנוח ולהבריא. אנחנו פותחות את הבית שלנו כדי לשרת
          את מי שבאה בתהליכי הלמידה והריפוי שלה.
        </p>
        <p>
          בכל זמן שתבואו תקבלו הזדמנות להציץ לבועה קטנה של חמימות ושפיות בלב לבה של העיר ותיחשפו לכל
          העבודה שנעשית כדי לברוא אנושות חדשה שיודעת איך לחיות על פני הכדור הכחול היפה – ההזמנה
          להצטרף לעשייה פתוחה תמיד!
        </p>
        <p>
          ** אנחנו מציעות ריטריט עבודה לא'נשות עיצוב, איור, וידאו, עריכה ושיווק – בואו לגור בעץ,
          ללמוד, לחוות, לתת מהיכולות שלכן לפיתוח ערוצי המידע שלנו ולאכול אוכל ממש ממש ממש בריא וטוב,
          תוך-כדי קבלת תשובה לכל שאלה סביבתית ובריאותית – חוויה מבריאה לכל הצדדים.
        </p>
      </>
    ),
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13523.738071490261!2d34.7820358!3d32.0710198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf87e0681964f7087!2z16LXpdeR16LXmdeoIC0g15HXmdeqINec15DXp9eV15zXldeS15nXlCDXoteZ16jXldeg15nXqg!5e0!3m2!1sen!2sil!4v1590827210854!5m2!1sen!2sil',
    addressTitle: 'ממש בלב העיר תל אביב',
  },
  {
    key: 'workshops',
    title: 'סדנאות וסיורים',
    subtitle: 'לבירור פרטים או להזמנת סדנה, דברו איתנו',
    text: (
      <>
        <p>
          היומיום של עץבעיר משלב מחקר עשייה ולמידה הנטועים בבית ובגינות. בסדנאות של עץבעיר תוכלו
          ללמוד את מכלול המלאכות והעבודות של משק-הבית והגינה האקולוגיים: שימוש חוזר ("מחדוש"),
          תפירה, הכנת חומרי ניקוי וטיפוח, אוכל ומרפא, קומפוסט, וכמובן, גינון – בבית ובסביבתו.
          מהסדנאות תצאו עם ידע איך לעשות בעצמכן'ם וגם, בדרך כלל, עם משהו שהכנו ביחד.{' '}
        </p>
        <p>
          בסיורים קבוצות ומשפחות באות לביקור לימודי במרחב האקולוגי שלנו. בסיור אפשר לשלב ארוחה
          טבעונית קלה, סדנאות קצרצרות או פעילות בגינה. אנחנו מתאימים את התוכן ואת המחיר לדרישות
          וליכולת.
        </p>
        <p>אנחנו פועלים על פי הזמנים והעונות.</p>
        <br />
        הסדנאות של זמן ניידות:
      </>
    ),
    events: [
      {
        title: 'תיק כלי הרחצה האקולוגי',
        facebookEventUrl: 'https://www.facebook.com/events/256390302111525/',
      },
      {
        title: 'השיער המבריק',
        facebookEventUrl: 'https://www.facebook.com/events/258756938892935/',
      },
      {
        title: 'צמחים מועילים בקיץ בעיר',
        facebookEventUrl: 'https://www.facebook.com/events/951579041967594/',
      },
      {
        title: 'צנצנות מתגלגלות בכלכלה מעגלית',
        facebookEventUrl: 'https://www.facebook.com/events/701897433929969/',
      },
      {
        title: 'על ההאטה, עם אורח מיוחד: עמית נויפלד',
        facebookEventUrl: 'https://www.facebook.com/events/612152333012448/',
      },
      {
        title: 'צמחים מועילים בקיץ בעיר - סדנה מקוונת',
        facebookEventUrl: 'https://www.facebook.com/events/571600510454833/',
      },
      {
        title: 'על הזיעה ועל הדיאודורנט',
        facebookEventUrl: 'https://www.facebook.com/events/586136439004505/',
      },
      {
        title: 'ליקוט צמחים מועילים בקיץ בעיר',
        facebookEventUrl: 'https://www.facebook.com/events/256948208958393/',
      },
      {
        title: 'מפגש תפירה: שימוש חוזר בבגדים ובבדים עם חי ערב',
        facebookEventUrl: 'https://www.facebook.com/events/2946199315499108/',
      },
      {
        title: 'היה שלום הפלסטיק החד-פעמי',
        facebookEventUrl: 'https://www.facebook.com/events/546106239402067/',
      },
      {
        title: 'סדנת הנבטה וארוחת הצהריים הקיצית',
        facebookEventUrl: 'https://www.facebook.com/events/2957209760998970/',
      },
      {
        title: 'סדנת קומפוסט מקוונת',
        facebookEventUrl: 'https://www.facebook.com/events/678195979606570/',
      },
      {
        title: 'על ניידות ועל אנרגיה',
        facebookEventUrl: 'https://www.facebook.com/events/3920351578039807/',
      },
      {
        title: 'מפגש תפירה: שימוש חוזר בבגדים ובבדים עם חי ערב',
        facebookEventUrl: 'https://www.facebook.com/events/592459831677734/',
      },
      {
        title: 'ארוחת-צהריים קייצית מיידית – העמקה לסודות המיטפח',
        facebookEventUrl: 'https://www.facebook.com/events/287863472599017/',
      },
    ],
  },
  {
    key: 'schedule',
    title: 'לוח זמנים',
    subtitle: 'לוח הזמנים הקבוע שלנו',
    text: (
      <>
        בימי שלישי ב-11:00 בבוקר – שיעור "השיבה הביתה" עם תמי, בזום
        <br />
        בימי שלישי ב-15:00 – עבודה בגינות עם אלון
        <br />
        בימי שישי ב-11:00 בבוקר – "עושות חיים בבית" עם תמי
        <br />
        בימי שישי ב-15:00 – עבודה בגינות עם אלון
        <br />
        <br />
        בנוסף מתקיימות סדנאות ואירועים חד-פעמיים.
        <br />
        אנו מעדכנים על כל ההתרחשות בעלון שבועי, ופעם בשישה שבועות יוצא עלון "עונתי" – טופס הצטרפות
        לרשימת התפוצה
        <br />
        אפשר לתאם איתנו סדנאות וסיורים, בטלפון: {phoneLink} או בדוא"ל: {emailLink} .
      </>
    ),
    calendarUrl: {
      url: 'https://calendar.google.com/calendar/b/1/embed',
      params: {
        wkst: 1,
        color: color1,
        bgcolor: color2,
        ctz: 'Asia-Jerusalem',
        src: 'Zm1oajBuMmFudjlwcnNvcXVob2MyMmc4bTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
        mode: 'WEEK',
        showTabs: 0,
        showCalendars: 0,
        showTz: 0,
        showPrint: 0,
        showTitle: 0,
        showNav: 1,
      },
    },
  },
];
