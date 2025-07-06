
import { NavLink, Service, Condition } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Resources', path: '/resources' },
  { name: 'Book Now', path: '/booking' },
  { name: 'Contact Us', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    title: 'Gynecological Exams',
    description: 'Stay proactive about your well-being with our comprehensive gynecological exams. Regular screenings are your shield against unseen threats, ensuring early detection of issues like cervical cancer. Our thorough procedures, including Pap smears and pelvic exams, empowers you to take charge of your health confidently and proactively.',
    imageUrl: 'https://picsum.photos/seed/gyno/600/400',
  },
  {
    title: 'Fertility Treatments',
    description: 'Embark on your fertility journey with us as we offer personalized and compassionate fertility treatments. Our cutting-edge techniques and supportive care pave the way for your dream of parenthood. Let us be your partners in this transformative experience, guiding you towards the precious gift of new life.',
    imageUrl: 'https://picsum.photos/seed/fertility/600/400',
  },
  {
    title: 'Postnatal Clinic',
    description: 'Choose our hospital for postnatal care and experience unparalleled support after childbirth. Our dedicated team offers compassionate care, expert guidance, and a nurturing environment for you and your newborn. Trust us to provide comprehensive services that prioritize your recovery, well-being, and the joy of early parenthood.',
    imageUrl: 'https://picsum.photos/seed/postnatal/600/400',
  },
  {
    title: 'Antenatal Clinic',
    description: 'Experience exceptional antenatal care with us, where every step of your pregnancy journey is nurtured. From personalized check-ups to informative sessions, we prioritize your well-being and that of your baby. Trust our expert team to provide comprehensive support, ensuring a smooth and memorable pregnancy experience tailored just for you.',
    imageUrl: 'https://picsum.photos/seed/antenatal/600/400',
  },
];

export const CONDITIONS_DATA: Condition[] = [
  {
    title: 'Endometriosis',
    description: 'Endometriosis is a chronic condition where uterine-like tissue grows outside the uterus, causing pelvic pain, heavy periods, and infertility. Diagnosis involves laparoscopic surgery. Management includes pain relief, hormone therapy, or surgery for symptom control.',
    imageUrl: 'https://picsum.photos/seed/endo/600/400',
  },
  {
    title: 'Polycystic Ovary Syndrome (PCOS)',
    description: 'A common hormonal disorder among women of reproductive age, characterized by irregular periods, excess androgen levels, and polycystic ovaries. Symptoms include fertility issues, weight gain, acne, and hair growth.',
    imageUrl: 'https://picsum.photos/seed/pcos/600/400',
  }
];

export const TIME_SLOTS = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'
];
