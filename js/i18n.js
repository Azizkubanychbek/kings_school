/* RU / EN / KY — тексты сайта */
(function (global) {
  var STRINGS = {
    ru: {
      meta_title: "Kings International School — Международная школа в Бишкеке",
      meta_desc:
        "Kings International School — международная школа в Бишкеке. Программа Cambridge от начальной школы до A Level.",
      nav_open: "Открыть меню",
      nav_main: "Основное меню",
      nav_about: "О школе",
      nav_grad: "Выпускники",
      nav_prog: "Образование",
      nav_ex: "Факультативы",
      nav_adm: "Поступление",
      nav_faq: "Вопросы",
      nav_cont: "Контакты",
      nav_call: "Позвонить",
      hero_aria: "Главный экран",
      hero_eyebrow: "Международное образование в Бишкеке",
      hero_title_html: "Вдохновляем детей. <em>Строим будущее.</em>",
      hero_lead:
        "Kings International School — частная международная школа с программой Cambridge: от младших классов до IGCSE и A Level. Здесь учатся с интересом, играют в команде и растут в атмосфере доверия и поддержки.",
      hero_btn1: "Запросить консультацию",
      hero_btn2: "Учебные программы",
      stat_l1: "академическая программа",
      stat_l2: "лет — полный образовательный цикл",
      stat_l3: "современная инфраструктура",
      stat_l4: "наука, творчество, нравственность",
      stat_num4: "Ценности",
      about_title: "О школе Kings",
      about_sub:
        "Мы создаём среду, где сочетаются высокие академические стандарты Cambridge, забота о каждом ребёнке и воспитание ответственных лидеров завтрашнего дня.",
      ab_m_t: "Наша миссия",
      ab_m_p:
        "Помогать каждому ученику раскрыть таланты, думать критически и с достоинством идти к своей цели — с уважением к себе, людям и миру.",
      ab_v_t: "Наше видение",
      ab_v_p:
        "Школа, где наука, технологии, творчество и моральные ценности формируют уверенных, эмпатичных граждан с глобальным мышлением.",
      ab_a_t: "Подход",
      ab_a_p:
        "Современные методы обучения, международная программа и внимание к личности: академический прогресс и гармоничное развитие идут рука об руку.",
      pil1_t: "Академическая честность",
      pil1_p: "Учим работать самостоятельно и ответственно относиться к знаниям.",
      pil2_t: "Критическое мышление",
      pil2_p: "Развиваем умение анализировать, спрашивать «почему» и принимать взвешенные решения.",
      pil3_t: "Лидерство и забота",
      pil3_p: "Воспитываем уверенность, сопереживание и готовность вносить вклад в общество.",
      grad_eyebrow: "Истории выпускников",
      grad_title: "Куда ведёт дорога после Kings",
      grad_sub:
        "Наши выпускники учатся в разных странах и выбирают смелые профессии. Листайте истории — каждая из них про рост, поддержку школы и собственный путь.",
      grad_dots_aria: "Выбор истории выпускника",
      grad1_q:
        "В Kings меня научили не бояться сложных предметов и честно работать над ошибками. Cambridge и поддержка учителей помогли спокойно подготовиться к поступлению и чувствовать себя уверенно на экзаменах.",
      grad1_name: "Айгерим К.",
      grad1_n1: "Выпуск 2023 · Natural Sciences",
      grad1_dest: "Учёба в Европе",
      grad2_q:
        "Я с детства любила языки и проекты. В школе было место и для олимпиад, и для творчества — поэтому выбор международного вуза оказался логичным шагом, а не стрессом.",
      grad2_name: "Данияр Т.",
      grad2_n1: "Выпуск 2022 · Humanities",
      grad2_dest: "Магистратура за рубежом",
      grad3_q:
        "Робототехника и математика открыли путь в IT. Самое ценное — атмосфера, где к тебе относятся серьёзно и с теплом: хочется расти и возвращаться в школу как гость.",
      grad3_name: "Эрмек Н.",
      grad3_n1: "Выпуск 2024 · STEM",
      grad3_dest: "Технологический стартап",
      grad4_q:
        "Для нашей семьи важно было, чтобы ребёнок и учился, и оставался ребёнком — с футболом, друзьями и нормальным ритмом. Kings совместили академию и заботу так, как мы и мечтали.",
      grad4_name: "Родители Алины М.",
      grad4_n1: "Выпускница 2021",
      grad4_dest: "Семейная история",
      prog_title: "Академическая программа",
      prog_sub:
        "Программа Cambridge признаётся по всему миру: она выстраивает последовательный путь от начальной школы к старшим классам и подготовке к университету.",
      p1_t: "Начальная ступень",
      p1_p:
        "Фундамент грамотности, математики, естественных наук и языков в дружелюбной, поддерживающей среде.",
      p1_li1: "Cambridge Primary",
      p1_li2: "Развитие любознательности и привычек к учёбе",
      p2_t: "Средняя ступень",
      p2_p: "Углубление предметов, междисциплинарные связи и подготовка к IGCSE.",
      p2_li1: "Cambridge Lower Secondary",
      p2_li2: "Логика, проекты, цифровая грамотность",
      p3_t: "Старшая школа",
      p3_p: "Международные экзамены и профильное обучение для поступления в вузы в Кыргызстане и за рубежом.",
      p3_li1: "Cambridge IGCSE и A Level",
      p3_li2: "Ориентация на университеты и карьеру",
      extras_title: "Факультативы и инфраструктура",
      extras_sub:
        "Помимо уроков — спорт, творчество и STEM: пространство для здоровья, характера и интересов ребёнка.",
      ex1: "Футбол — оборудованное поле",
      ex2: "Плавание",
      ex3: "Шахматы",
      ex4: "Тхэквондо и дзюдо",
      ex5: "Большой и настольный теннис",
      ex6: "Робототехника",
      adm_title: "Как поступить",
      adm_sub: "Прозрачные шаги: знакомство со школой, диагностика уровня и оформление документов.",
      s1_t: "Консультация",
      s1_p: "Свяжитесь с приёмной комиссией — ответим на вопросы о программе, расписании и свободных местах.",
      s2_t: "Встреча и оценка",
      s2_p: "Знакомство с школой и проверка уровня подготовки по ключевым предметам (по договорённости).",
      s3_t: "Договор и документы",
      s3_p: "Заключение договора, предоставление необходимых документов и медицинских справок.",
      s4_t: "Зачисление",
      s4_p: "Подтверждение зачисления и начало учёбы в Kings International School.",
      faq_title: "Частые вопросы",
      faq1_q: "На каком языке ведётся обучение?",
      faq1_a:
        "Международная программа Cambridge с опорой на английский язык; детали по параллелям и поддержке русского языка уточняйте в приёмной комиссии.",
      faq2_q: "Можно ли перевестись в течение года?",
      faq2_a: "Перевод возможен при наличии мест в классе. Напишите или позвоните — подскажем актуальную ситуацию.",
      faq3_q: "Есть ли продлёнка и внеклассные занятия?",
      faq3_a:
        "Факультативы и спортивная инфраструктура помогают детям оставаться в школе весь день с пользой и безопасностью — уточняйте расписание у администрации.",
      cta_title: "Готовы познакомиться с Kings?",
      cta_text: "Запишитесь на консультацию — расскажем о программе, кампусе и поступлении.",
      cta_btn: "Написать на office@kings-school.kg",
      foot_tag: "Международная школа в Бишкеке. Cambridge. Развитие с заботой.",
      foot_cont: "Контакты",
      foot_nav: "Навигация",
      foot_copy: "Все права защищены.",
      foot_top: "Наверх",
      lang_choose: "Язык",
      a11y_grad_story: "История",
    },
    en: {
      meta_title: "Kings International School — International School in Bishkek",
      meta_desc:
        "Kings International School — international school in Bishkek. Cambridge programme from primary to A Level.",
      nav_open: "Open menu",
      nav_main: "Main menu",
      nav_about: "About",
      nav_grad: "Alumni",
      nav_prog: "Education",
      nav_ex: "Activities",
      nav_adm: "Admissions",
      nav_faq: "FAQ",
      nav_cont: "Contact",
      nav_call: "Call us",
      hero_aria: "Hero",
      hero_eyebrow: "International education in Bishkek",
      hero_title_html: "We inspire children. <em>We build the future.</em>",
      hero_lead:
        "Kings International School is a private international school with the Cambridge pathway from early years to IGCSE and A Level. Students learn with curiosity, play as a team, and grow in an atmosphere of trust and support.",
      hero_btn1: "Request a consultation",
      hero_btn2: "Academic programmes",
      stat_l1: "academic programme",
      stat_l2: "years — full school journey",
      stat_l3: "modern campus",
      stat_l4: "science, creativity, values",
      stat_num4: "Values",
      about_title: "About Kings",
      about_sub:
        "We create an environment where Cambridge academic standards, care for every child, and leadership for tomorrow come together.",
      ab_m_t: "Our mission",
      ab_m_p:
        "Help every student discover talents, think critically, and pursue goals with dignity — with respect for self, others, and the world.",
      ab_v_t: "Our vision",
      ab_v_p:
        "A school where science, technology, creativity, and values shape confident, empathetic global citizens.",
      ab_a_t: "Our approach",
      ab_a_p:
        "Modern teaching methods, an international programme, and attention to the whole person: academic growth and wellbeing go hand in hand.",
      pil1_t: "Academic integrity",
      pil1_p: "We teach independent work and responsibility for learning.",
      pil2_t: "Critical thinking",
      pil2_p: "We nurture analysis, asking “why”, and thoughtful decisions.",
      pil3_t: "Leadership & care",
      pil3_p: "We build confidence, empathy, and a wish to contribute to society.",
      grad_eyebrow: "Alumni stories",
      grad_title: "Where the road leads after Kings",
      grad_sub:
        "Our graduates study in many countries and choose bold paths. Browse their stories — each one is about growth, the school’s support, and a personal journey.",
      grad_dots_aria: "Choose an alumni story",
      grad1_q:
        "At Kings I learned not to fear difficult subjects and to work honestly on mistakes. Cambridge and my teachers helped me prepare calmly for exams and feel confident.",
      grad1_name: "Aigerim K.",
      grad1_n1: "Class of 2023 · Natural Sciences",
      grad1_dest: "Studying in Europe",
      grad2_q:
        "I have always loved languages and projects. School made room for both competitions and creativity — so choosing an international university felt natural, not stressful.",
      grad2_name: "Daniyar T.",
      grad2_n1: "Class of 2022 · Humanities",
      grad2_dest: "Graduate school abroad",
      grad3_q:
        "Robotics and maths opened the door to IT. What I value most is being taken seriously with warmth — I want to grow and come back to school as a guest.",
      grad3_name: "Ermek N.",
      grad3_n1: "Class of 2024 · STEM",
      grad3_dest: "Tech startup",
      grad4_q:
        "We wanted our child to learn and still be a child — football, friends, a healthy rhythm. Kings combined academics and care just as we hoped.",
      grad4_name: "Parents of Alina M.",
      grad4_n1: "Class of 2021 graduate",
      grad4_dest: "A family story",
      prog_title: "Academic programme",
      prog_sub:
        "Cambridge is recognised worldwide: a clear path from primary to upper secondary and university preparation.",
      p1_t: "Primary stage",
      p1_p: "Foundations in literacy, maths, sciences, and languages in a friendly, supportive setting.",
      p1_li1: "Cambridge Primary",
      p1_li2: "Curiosity and habits for learning",
      p2_t: "Lower secondary",
      p2_p: "Deeper subjects, cross-disciplinary links, and preparation for IGCSE.",
      p2_li1: "Cambridge Lower Secondary",
      p2_li2: "Logic, projects, digital literacy",
      p3_t: "Upper secondary",
      p3_p: "International exams and focused study for universities in Kyrgyzstan and abroad.",
      p3_li1: "Cambridge IGCSE & A Level",
      p3_li2: "University and career guidance",
      extras_title: "Activities & facilities",
      extras_sub:
        "Beyond lessons — sport, creativity, and STEM: space for health, character, and each child’s interests.",
      ex1: "Football — full pitch",
      ex2: "Swimming",
      ex3: "Chess",
      ex4: "Taekwondo & judo",
      ex5: "Tennis & table tennis",
      ex6: "Robotics",
      adm_title: "How to enrol",
      adm_sub: "Clear steps: get to know the school, assessment, and paperwork.",
      s1_t: "Consultation",
      s1_p: "Contact admissions — we answer questions about the programme, schedule, and places.",
      s2_t: "Visit & assessment",
      s2_p: "Tour the school and check readiness in key subjects (by arrangement).",
      s3_t: "Contract & documents",
      s3_p: "Sign the agreement and submit required documents and medical forms.",
      s4_t: "Enrolment",
      s4_p: "Confirmation of enrolment and the start of learning at Kings International School.",
      faq_title: "Frequently asked questions",
      faq1_q: "What language is used for instruction?",
      faq1_a:
        "The international Cambridge track is English-based; ask admissions about parallel classes and Russian support.",
      faq2_q: "Can we join mid-year?",
      faq2_a: "Yes, if there is a place in the class. Write or call — we will confirm availability.",
      faq3_q: "Is there after-school care and clubs?",
      faq3_a:
        "Activities and sports facilities help children stay at school productively and safely — ask the office for the schedule.",
      cta_title: "Ready to meet Kings?",
      cta_text: "Book a consultation — we will tell you about the programme, campus, and admissions.",
      cta_btn: "Email office@kings-school.kg",
      foot_tag: "International school in Bishkek. Cambridge. Growing with care.",
      foot_cont: "Contact",
      foot_nav: "Navigation",
      foot_copy: "All rights reserved.",
      foot_top: "Back to top",
      lang_choose: "Language",
      a11y_grad_story: "Story",
    },
    ky: {
      meta_title: "Kings International School — Бишкектеги эл аралык мектеп",
      meta_desc:
        "Kings International School — Бишкектеги эл аралык мектеп. Cambridge программасы башталгычтан A Levelге чейин.",
      nav_open: "Менюну ачуу",
      nav_main: "Негизги меню",
      nav_about: "Мектеп жөнүндө",
      nav_grad: "Бүтүрүүчүлөр",
      nav_prog: "Билим берүү",
      nav_ex: "Факультативтер",
      nav_adm: "Кабыл алуу",
      nav_faq: "Суроолор",
      nav_cont: "Байланыш",
      nav_call: "Чалуу",
      hero_aria: "Башкы экран",
      hero_eyebrow: "Бишкектеги эл аралык билим берүү",
      hero_title_html: "Балдарды шыктандырабыз. <em>Келечекти курабыз.</em>",
      hero_lead:
        "Kings International School — Cambridge программасы менен жеке менчик эл аралык мектеп: кичи класстардан IGCSE жана A Levelге чейин. Балдар кызыгуу менен окушат, командада ойношот, ишеним жана колдоо атмосферасында өсүшөт.",
      hero_btn1: "Кеңеш суроо",
      hero_btn2: "Окуу программалары",
      stat_l1: "академиялык программа",
      stat_l2: "жаш — толук билим цикли",
      stat_l3: "азыркы инфраструктура",
      stat_l4: "илим, чыгармачылык, адеп-ахлак",
      stat_num4: "Баалуулуктар",
      about_title: "Kings мектеби жөнүндө",
      about_sub:
        "Cambridge академиялык стандарттары, ар бир баланын камкордугу жана эртеңки күн лидерлери менен айкалышкан чөйрө түзөбүз.",
      ab_m_t: "Миссиябыз",
      ab_m_p:
        "Ар бир окуучунун талантын ачууга, критикалык ой жүгүртүүгө жана өз максатына сыймыктуу кадам таштоого жардам берүү — өзүнө, адамдарга жана дүйнөгө урмат менен.",
      ab_v_t: "Көрүнүшүбүз",
      ab_v_p:
        "Илим, технология, чыгармачылык жана баалуулуктар ишенимдүү, эмпатиялуу дүйнөлүк жарандарды тарбиялаган мектеп.",
      ab_a_t: "Көз карашыбыз",
      ab_a_p:
        "Заманбап окутуу ыкмалары, эл аралык программа жана жеке адамга көңүл: академиялык өнүгүү жана гармониялуу өсүү бирге жүрөт.",
      pil1_t: "Академиялык тазалык",
      pil1_p: "Өз алдынча иштөөгө жана билимге жоопкерчиликтүү мамиле кылууга үйрөтөбүз.",
      pil2_t: "Критикалык ой жүгүртүү",
      pil2_p: "Талдоо, «эмне үчүн» деп суроо жана ойлонуп чечим кабыл алуу жөндөмүн өнүктүрөбүз.",
      pil3_t: "Лидерлик жана камкордук",
      pil3_p: "Ишенимди, сүрөөчтүүлүктү жана коомго салым кошуу ниетин тарбиялайбыз.",
      grad_eyebrow: "Бүтүрүүчүлөрдүн тарыхтары",
      grad_title: "Kingsтен кийинки жол кайда алып барат",
      grad_sub:
        "Бүтүрүүчүлөрбүз ар кандай өлкөлөрдө окушат жана кайраттуу кесиптерди тандашат. Тарыхтарды караңыз — ар бири өсүү, мектептин колдоосу жана жеке жол жөнүндө.",
      grad_dots_aria: "Бүтүрүүчүнүн тарыхын тандоо",
      grad1_q:
        "Kings мени татаал предметтерден коркпоого жана каталар үстүнөн чынчыл иштөөгө үйрөттү. Cambridge жана мугалимдердин колдоосу экзамендерге тынч даярданууга жардам берди.",
      grad1_name: "Айгерим К.",
      grad1_n1: "2023-бүтүрүү · Табигый илимдер",
      grad1_dest: "Европада окуу",
      grad2_q:
        "Балалык кезимден тилдерди жана долбоорлорду сүйөм. Мектеп олимпиада жана чыгармачылык үчүн орун берди — ошондуктан эл аралык университет тандоо логикалык кадам болду.",
      grad2_name: "Данияр Т.",
      grad2_n1: "2022-бүтүрүү · Гуманитардык",
      grad2_dest: "Чет өлкөдө магистратура",
      grad3_q:
        "Робототехника жана математика IT жолун ачты. Эң баалуусу — сизге ысык мамиле менен олуттуу мамиле кылуу: өсүүнү каалайсыз жана конок катары кайтып келесиз.",
      grad3_name: "Эрмек Н.",
      grad3_n1: "2024-бүтүрүү · STEM",
      grad3_dest: "Технологиялык стартап",
      grad4_q:
        "Биздин үй-бүлө үчүн бала окуса да, бала болуп кала берсе маанилүү эле — футбол, достор, туура ритм. Kings академияны жана камкордукту каалаганыбыздай айкалаштырды.",
      grad4_name: "Алина М.нын ата-энеси",
      grad4_n1: "2021-бүтүрүүчү кыз",
      grad4_dest: "Үй-бүлөлүк тарых",
      prog_title: "Академиялык программа",
      prog_sub:
        "Cambridge дүйнө жүзүндө таанылат: башталгычтан жогорку класстарга жана университетке даярдыкка чейинки жол.",
      p1_t: "Башталгыч баскыч",
      p1_p: "Сабаттуулук, математика, табигый илимдер жана тилдердин негизи дос күтүүчү чөйрөдө.",
      p1_li1: "Cambridge Primary",
      p1_li2: "Кызыгуу жана окуу адаттары",
      p2_t: "Орто баскыч",
      p2_p: "Предметтерди тереңдетүү, предметтер аралык байланыш жана IGCSEге даярдык.",
      p2_li1: "Cambridge Lower Secondary",
      p2_li2: "Логика, долбоорлор, санариптик сабаттуулук",
      p3_t: "Жогорку мектеп",
      p3_p: "Эл аралык экзамендер жана Кыргызстанда жана чет өлкөдө университетке даярдык.",
      p3_li1: "Cambridge IGCSE жана A Level",
      p3_li2: "Университет жана карьерага багыттоо",
      extras_title: "Факультативтер жана инфраструктура",
      extras_sub:
        "Сабактан тышкары — спорт, чыгармачылык жана STEM: ден соолук, мүнөз жана баланы кызыктыруулар үчүн мейкиндик.",
      ex1: "Футбол — талаа менен",
      ex2: "Сүзүү",
      ex3: "Шахмат",
      ex4: "Тхэквондо жана дзюдо",
      ex5: "Чоң жана стол тенниси",
      ex6: "Робототехника",
      adm_title: "Кантип кабыл алынат",
      adm_sub: "Так кадамдар: мектеп менен таанышуу, деңгээлди текшерүү жана документтер.",
      s1_t: "Кеңеш",
      s1_p: "Кабыл алуу комиссиясына кайрылыңыз — программа, график жана бош орундар боюнча жооп беребиз.",
      s2_t: "Көрүшүү жана баалоо",
      s2_p: "Мектеп менен таанышуу жана негизги предметтер боюнча даярдыкты текшерүү (макулдашуу боюнча).",
      s3_t: "Келишим жана документтер",
      s3_p: "Келишим түзүү жана зарыл документтер менен медициналык маалымдамаларды берүү.",
      s4_t: "Кабыл алуу",
      s4_p: "Кабыл алынгандыгы ырастоо жана Kings International Schoolдо окууну баштоо.",
      faq_title: "Көп берилген суроолор",
      faq1_q: "Окуу кайсы тилде жүргүзүлөт?",
      faq1_a:
        "Cambridge эл аралык программасы англис тили негизинде; параллелдер жана орус тилин колдоо боюнча кабыл алуудан сураңыз.",
      faq2_q: "Окуу жылынын ортосунда которулса болобу?",
      faq2_a: "Класста орун болсо болот. Жазыңыз же чалыңыз — актуалдуу абалды айтып беребиз.",
      faq3_q: "Узартуу жана сабактан тышкары иштер барбы?",
      faq3_a:
        "Факультативтер жана спорттук инфраструктура балдардын мектепте пайдалуу жана коопсуз болушуна жардам берет — графикти администрациядан сураңыз.",
      cta_title: "Kings менен таанышууга даярсызбы?",
      cta_text: "Кеңешке жазылыңыз — программа, кампус жана кабыл алуу жөнүндө айтып беребиз.",
      cta_btn: "office@kings-school.kg дарегине жазуу",
      foot_tag: "Бишкектеги эл аралык мектеп. Cambridge. Камкордук менен өсүү.",
      foot_cont: "Байланыш",
      foot_nav: "Навигация",
      foot_copy: "Бардык укуктар корголгон.",
      foot_top: "Жогору",
      lang_choose: "Тил",
      a11y_grad_story: "Тарых",
    },
  };

  var LANG_LABEL = { ru: "РУС", en: "ENG", ky: "КЫРГ" };
  var STORAGE = "kings_lang";

  function getStrings(lang) {
    return STRINGS[lang] || STRINGS.ru;
  }

  function apply(lang) {
    if (!STRINGS[lang]) lang = "ru";
    var t = getStrings(lang);
    document.documentElement.lang = lang === "ky" ? "ky" : lang === "en" ? "en" : "ru";

    var mt = document.querySelector('meta[name="description"]');
    if (mt) mt.setAttribute("content", t.meta_desc);
    document.title = t.meta_title;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key || t[key] === undefined) return;
      el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!key || t[key] === undefined) return;
      el.innerHTML = t[key];
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      if (!key || t[key] === undefined) return;
      el.setAttribute("aria-label", t[key]);
    });

    var cur = document.querySelector("[data-lang-current]");
    if (cur) cur.textContent = LANG_LABEL[lang] || "РУС";

    try {
      localStorage.setItem(STORAGE, lang);
    } catch (e) {}

    document.dispatchEvent(new CustomEvent("kings:lang", { detail: { lang: lang } }));
  }

  function initLangUi() {
    var root = document.querySelector("[data-lang-root]");
    var btn = document.querySelector("[data-lang-toggle]");
    var list = document.querySelector("[data-lang-list]");
    if (!root || !btn || !list) return;

    function close() {
      root.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      list.setAttribute("aria-hidden", "true");
    }

    function open() {
      root.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      list.setAttribute("aria-hidden", "false");
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (root.classList.contains("is-open")) close();
      else open();
    });

    list.querySelectorAll("[data-lang-set]").forEach(function (opt) {
      opt.addEventListener("click", function () {
        var code = opt.getAttribute("data-lang-set");
        apply(code);
        close();
      });
    });

    document.addEventListener("click", function () {
      close();
    });

    root.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  function getStoredLang() {
    try {
      var s = localStorage.getItem(STORAGE);
      if (s && STRINGS[s]) return s;
    } catch (e) {}
    return "ru";
  }

  global.KingsI18n = {
    STRINGS: STRINGS,
    apply: apply,
    initLangUi: initLangUi,
    getStoredLang: getStoredLang,
    LANG_LABEL: LANG_LABEL,
  };
})(typeof window !== "undefined" ? window : this);
