/* Reference entries for the institutions behind each award and programme.
   Every figure here is traceable to the sources listed at the foot of its entry.
   Official context is kept separate from the personal note at the end.
   Writing and layout rules for this component live in DESIGN.md. */
(() => {
  'use strict';

  const topics = {
    eucys: {
      short: 'EUCYS',
      title: 'European Union Contest for Young Scientists',
      category: 'European Commission · Kiel, Germany',
      subtitle: 'The European Commission’s annual science competition for national winners aged 14 to 20. Around 150 young scientists from almost 40 countries are expected in 2026.',
      logo: 'eucys-black.svg',
      lead: ['~150', 'young scientists expected in 2026'],
      facts: [
        ['Almost 40', 'countries represented'],
        ['National winners', 'route to entry'],
        ['20 to 25', 'international jurors']
      ],
      sections: [
        ['Why it matters', 'EUCYS brings together projects selected through national science competitions. Students cannot apply directly, and each country may nominate no more than three projects. Reaching EUCYS therefore means being chosen to represent an entire country at the European level.'],
        ['How it is judged', 'An international jury evaluates the research, written work, exhibition and interviews. The European Commission awards four first prizes worth €7,000 each, along with second prizes, third prizes and special opportunities at leading research organisations.']
      ],
      chapters: [{
        title: 'AMAVET selects the Slovak delegation',
        kicker: 'The route from Slovakia to EUCYS',
        logo: 'amavet-complete.svg',
        paragraphs: ['Slovakia selects its EUCYS representatives through the national Festival of Science and Technology organised by AMAVET. In 2025, its national final brought together 81 students with 60 projects and a 27 member jury from universities, the Slovak Academy of Sciences and industry.']
      }],
      connection: 'In November 2025 I was selected to represent Slovakia at EUCYS 2026 with LAVAIQ, my machine learning based Android antivirus. The national final selected the delegation, while EUCYS itself takes place in September 2026.',
      sources: [
        ['European Commission, EUCYS', 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/eucys_en'],
        ['European Commission, past contests', 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/eucys/past-contests_en'],
        ['AMAVET, 2025 national final', 'https://www.festivalvedy.sk/wp2/festival-vedy-a-techniky-amavet-2025-otvoril-tyzden-vedy-a-techniky-na-slovensku/']
      ]
    },

    amavet: {
      short: 'Festival of Science and Technology',
      title: 'Festival of Science and Technology',
      category: 'AMAVET · Slovakia',
      subtitle: 'A nationwide science fair in which students present original research at regional rounds and the strongest projects advance to the Slovak final.',
      logo: 'amavet-complete.svg',
      lead: ['60 projects', 'at the 2025 national final'],
      facts: [
        ['81 students', 'national finalists'],
        ['27 judges', 'from research and industry'],
        ['28th edition', 'held in 2025']
      ],
      sections: [
        ['What the competition is', 'The Festival of Science and Technology, known in Slovak as Festival vedy a techniky AMAVET, is organised by the nonprofit youth science association AMAVET. Students build a research project, present it at a regional fair and defend it before specialists.'],
        ['Why the result matters', 'Regional placements qualify projects for the national final. The national jury then selects projects for major international science competitions, including EUCYS. In 2025 the final included 60 projects assessed by experts from universities, the Slovak Academy of Sciences and industry.']
      ],
      connection: 'I placed 2nd at the Bratislava and Trnava regional round in October 2025 with LAVAIQ. The project advanced to the national final and was selected there for EUCYS 2026.',
      sources: [
        ['AMAVET, regional competition', 'https://www.festivalvedy.sk/wp2/bratislavsky-a-trnavsky-kraj/'],
        ['AMAVET, 2025 national final', 'https://www.festivalvedy.sk/wp2/festival-vedy-a-techniky-amavet-2025-otvoril-tyzden-vedy-a-techniky-na-slovensku/'],
        ['AMAVET, about the association', 'https://www.amavet.sk/amavet-2/']
      ]
    },

    bratislava: {
      short: 'Bratislava Region Award',
      title: 'Bratislava Region Award',
      category: 'Bratislava Self-Governing Region · Slovakia',
      subtitle: 'An annual regional honour for secondary-school students whose results, initiative or public contribution go beyond normal school requirements.',
      logo: 'bratislava.png', logoStyle: 'bratislava',
      lead: ['50 students', 'honoured across the region in 2025'],
      facts: [
        ['Annual', 'regional recognition'],
        ['Juraj Droba', 'award presenter'],
        ['Multiple fields', 'science, sport, art and service']
      ],
      sections: [
        ['What the award is', 'The Bratislava Self-Governing Region recognises students from secondary schools under its authority near the end of each school year. The 2025 ceremony honoured 50 students from across the region.'],
        ['Why it is significant', 'This is not a single-subject competition. The region selects students with exceptional results in academic competitions, sport, art, volunteering and civic initiatives. Receiving it means being chosen as one of a small group representing strong student achievement across the capital region.']
      ],
      connection: 'I received the award in June 2025 for my results with LAVAIQ and for representing SOSTAR. Juraj Droba, Governor of the Bratislava Region, presented and signed the award.',
      sources: [
        ['Bratislava Region, 2025 student awards', 'https://bratislavskykraj.sk/predseda-bsk-ocenil-najuspesnejsich-stredoskolakov-kraja/'],
        ['SOSTAR', 'https://sostar.sk/']
      ]
    },

    soc: {
      short: 'SOČ',
      title: 'SOČ',
      category: 'ŠIOV · Slovakia',
      subtitle: 'Slovakia’s nationwide competition for independent secondary-school research. Students write a formal paper and defend it before an expert panel.',
      logo: 'soc-clean-v2.svg',
      lead: ['2,381', 'students entered in 2025'],
      facts: [
        ['318 schools', 'represented nationwide'],
        ['272 projects', 'reached the national final'],
        ['17 fields', 'judged separately']
      ],
      sections: [
        ['How the competition works', 'SOČ stands for Stredoškolská odborná činnosť. Students develop an original project, document it in a research paper and defend it through school, district, regional and national rounds. Judges assess both the work and the student’s ability to explain and defend it.'],
        ['How large it is', 'In 2025, 2,381 students from 318 schools entered across 17 subject fields. Only 272 projects reached the national final. Placements are awarded within each field, so a national result identifies one of the strongest projects in that discipline across Slovakia.']
      ],
      sources: [
        ['ŠIOV, 2025 national competition', 'https://siov.sk/stredoskolska-odborna-cinnost-predstavi-talenty-na-celostatnom-kole-v-kosiciach/'],
        ['ŠIOV, about SOČ', 'https://siov.sk/soc/']
      ]
    },

    junior: {
      short: 'Junior Coder',
      title: 'Junior Coder',
      category: 'FRI UNIZA · Žilina, Slovakia',
      subtitle: 'A national programming competition for secondary-school students organised by the informatics faculty at the University of Žilina.',
      logo: 'uniza.png', logoStyle: 'uniza',
      lead: ['31 finalists', 'in the 2025 edition'],
      facts: [
        ['University run', 'by FRI UNIZA'],
        ['National', 'schools from across Slovakia'],
        ['2nd edition', 'held in 2025']
      ],
      sections: [
        ['What the competition is', 'Junior Coder tests programming and problem solving in a university environment. It is organised by the Faculty of Management Science and Informatics, known as FRI, and finalists complete the competition using the faculty’s facilities.'],
        ['Scale and significance', 'The 2025 final brought together 31 students from secondary schools across Slovakia. Junior Coder is a newer and more specialised contest than the long-running national olympiads, but its value comes from direct evaluation by a university faculty focused on computing and informatics.']
      ],
      connection: 'I received a Certificate of Successful Completion in March 2024 from the Faculty of Management Science and Informatics at the University of Žilina.',
      sources: [
        ['FRI UNIZA, 2025 competition report', 'https://www.fri.uniza.sk/aktualita/finale-druheho-rocnika-sutaze-junior-koder-koderka-pozna-svojich-vitazov'],
        ['University of Žilina, profile', 'https://www.uniza.sk/index.php/en/university/general-information/university-profile']
      ]
    },

    universities: {
      short: 'FEI STU and NHF EUBA',
      title: 'Two universities, one degree',
      category: 'Higher education · Bratislava, Slovakia',
      subtitle: 'FinTech and Financial Innovation is a joint bachelor’s programme combining engineering and computer science with finance and economics.',
      logo: 'stu-official.svg',
      lead: ['2 universities', 'delivering one joint programme'],
      facts: [
        ['Almost 11,000', 'students at STU'],
        ['Over 7,000', 'students at EUBA'],
        ['3 years', 'standard bachelor’s study']
      ],
      sections: [
        ['What the programme is', 'The degree is taught jointly by FEI STU and NHF EUBA. FEI provides programming, mathematics, data and technology, while NHF provides economics, banking, financial markets and analysis. The joint structure is the defining feature because students study both sides of financial technology instead of choosing only one.'],
        ['STU and FEI', 'The Slovak University of Technology is a major public technical university with almost 11,000 students across seven faculties and an Institute of Management. Its Faculty of Electrical Engineering and Information Technology, FEI, delivers the engineering and computing part of the programme.']
      ],
      chapters: [{
        title: 'Bratislava University of Economics and Business',
        kicker: 'EUBA and the finance side',
        logo: 'euba-official.png',
        paragraphs: [
          'EUBA is a major Slovak public university focused on economics, finance and business. It has seven faculties, more than 7,000 students and over 118,000 graduates.',
          'The Faculty of National Economy, NHF, delivers the programme’s economics and finance subjects. Together, the two faculties connect software and data skills with the financial systems where they are applied.'
        ]
      }],
      connection: 'Since September 2026 I have been studying across both institutions, with engineering and technology at FEI STU and finance and economics at NHF EUBA.',
      sources: [
        ['STU, university profile', 'https://www.stuba.sk/english/university-profile/about-us.html?page_id=9370'],
        ['EUBA, university profile and history', 'https://euba.sk/en/univerzita/history'],
        ['NHF EUBA, study programmes', 'https://nhf.euba.sk/uchadzaci-o-studium/studijne-programy']
      ]
    },

    founders: {
      short: 'Future Founders',
      title: 'Future Founders',
      category: 'The Spot · Sky Park, Bratislava',
      subtitle: 'A free eight-month startup programme for secondary-school students who want to turn an idea into a tested project.',
      logo: 'the-spot.svg',
      lead: ['8 months', 'of project building and mentoring'],
      facts: [
        ['Free', 'for selected students'],
        ['Monthly', 'mentor sessions'],
        ['The Spot', 'startup community in Sky Park']
      ],
      sections: [
        ['What the programme is', 'Participants work in teams on their own project while learning how to identify a real problem, speak with users, build a prototype, develop a business model and present the result. The programme combines practical lessons with feedback from founders and business professionals.'],
        ['How participants are selected', 'Every application is reviewed by a three-person panel from The Spot and its mentor community. The panel looks for how applicants think, how motivated they are and how well they respond to feedback. Each selected team is then paired with an experienced mentor for regular project guidance.']
      ],
      connection: 'I was selected for the programme and spent eight months building a startup project with a team through mentoring, practical lessons and workshops on product and strategy.',
      sources: [
        ['Future Founders, programme overview', 'https://futurefounders.sk/stredoskolak'],
        ['Future Founders, selection process', 'https://futurefounders.sk/hackni-prihlasku'],
        ['Future Founders, mentors', 'https://futurefounders.sk/mentori']
      ]
    },

    sostar: {
      short: 'SOSTAR',
      title: 'SOSTAR',
      category: 'Vocational secondary school · Bratislava, Slovakia',
      subtitle: 'A technical secondary school that combines general education with practical training for a specific profession.',
      logo: 'sostar-circle.svg',
      lead: ['4 years', 'of technical study and practical training'],
      facts: [
        ['Computer networks', 'my study field'],
        ['Maturita', 'school-leaving qualification'],
        ['2022–2026', 'my years at SOSTAR']
      ],
      sections: [
        ['What the school is', 'SOSTAR stands for Stredná odborná škola technológií a remesiel. It is a vocational secondary school in Bratislava where academic subjects are combined with workshops and practical technical training.'],
        ['My study programme', 'Mechanic of Computer Networks covers computer hardware, operating systems, network design, installation, maintenance and troubleshooting, with programming and web technologies alongside them. The four-year programme ends with the Slovak Maturita and a technical qualification.']
      ],
      connection: 'I studied at SOSTAR from 2022 to 2026. It is where I developed my practical IT foundation and the school I represented at SOČ, AMAVET and the regional student awards.',
      sources: [
        ['SOSTAR, Computer Networks programme', 'https://sostar.sk/pre-uchadzacov-o-studium/studium-2/4-rocne-ucebne-odbory/mechanik-pocitacovych-sieti-3/']
      ]
    },

    erasmus: {
      short: 'Erasmus+',
      title: 'Erasmus+',
      category: 'European Union · placement in Portugal',
      subtitle: 'The European Union’s large-scale programme for education, training, youth and sport. It also funds workplace placements for vocational students.',
      logo: 'erasmus.svg',
      lead: ['16 million', 'participants since 1987'],
      facts: [
        ['€26.2 billion', 'budget for 2021–2027'],
        ['Vocational training', 'included alongside universities'],
        ['Portugal', 'location of my placement']
      ],
      sections: [
        ['What the programme is', 'Erasmus+ supports study, training and international mobility across higher education, vocational education, schools, adult learning, youth and sport. More than 16 million people have participated since the programme began in 1987.'],
        ['What a vocational placement means', 'Vocational students can spend part of their training working in a company abroad. It is practical work experience rather than a university exchange or a competition, with the added challenge of adapting to another language, workplace and culture.']
      ],
      connection: 'In November and December 2023 I completed a professional placement at GreenTek in Portugal, working on computer hardware recycling and sustainable IT practices.',
      sources: [
        ['European Commission, about Erasmus+', 'https://erasmus-plus.ec.europa.eu/about-erasmus'],
        ['Erasmus+, history and funding', 'https://erasmus-plus.ec.europa.eu/about-erasmus/history-funding-and-future']
      ]
    }
  };

  const dialog = document.getElementById('recognition-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const scroll = dialog.querySelector('.context-scroll');
  const closeButton = dialog.querySelector('.context-close');
  const label = dialog.querySelector('.context-bar__label');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const linkMark = '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 15 15 5M6 5h9v9"/></svg>';
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const host = url => { try { return new URL(url).hostname.replace(/^www\./,''); } catch { return ''; } };
  const plate = (file, style = '') => `<div class="context-logo ${style ? 'context-logo--' + escape(style) : ''}" aria-hidden="true" data-nosnippet><img src="logos/marks/${escape(file)}" alt="" width="78" height="78" decoding="async" draggable="false"></div>`;
  const fact = ([value, meaning]) => `<div><dt>${escape(meaning)}</dt><dd>${escape(value)}</dd></div>`;

  let opener = null;
  let closingTimer = null;
  let titleWatcher = null;
  let scrollY = 0;
  let savedBody = null;

  function render(topic, result) {
    const connection = result || topic.connection;
    label.textContent = topic.short;

    scroll.innerHTML =
      `<header class="context-hero">${plate(topic.logo, topic.logoStyle)}<div class="context-hero__text">` +
        `<p class="context-kicker">${escape(topic.category)}</p>` +
        `<h2 id="context-title" tabindex="-1">${escape(topic.title)}</h2>` +
        `<p class="context-subtitle">${escape(topic.subtitle)}</p>` +
      `</div></header>` +

      `<dl class="context-facts">${fact(topic.lead)}${topic.facts.map(fact).join('')}</dl>` +

      topic.sections.map(([heading, copy]) =>
        `<section class="context-section"><h3>${escape(heading)}</h3><p class="context-copy">${escape(copy)}</p></section>`).join('') +

      (topic.chapters || []).map(chapter =>
        `<section class="context-chapter"><div class="context-chapter__head">${plate(chapter.logo)}<div>` +
          `<p class="context-kicker">${escape(chapter.kicker)}</p><h3>${escape(chapter.title)}</h3>` +
        `</div></div>${chapter.paragraphs.map(copy => `<p class="context-copy">${escape(copy)}</p>`).join('')}</section>`).join('') +

      (connection ? `<aside class="context-connection"><p class="context-connection__label">In my case</p><p class="context-copy">${escape(connection)}</p></aside>` : '') +

      `<footer class="context-sources"><h3>Check it yourself</h3><ul>${topic.sources.map(([name, url]) =>
        `<li><a href="${escape(url)}" target="_blank" rel="noopener noreferrer">` +
          `<span class="context-sources__name">${escape(name)}</span>` +
          `<span class="context-sources__host">${escape(host(url))}${linkMark}</span>` +
          `<span class="sr-only"> (opens in a new tab)</span></a></li>`).join('')}</ul></footer>`;
  }

  /* The bar label is redundant while the title is still on screen, so it waits. */
  function watchTitle() {
    if (titleWatcher) { titleWatcher.disconnect(); titleWatcher = null; }
    if (typeof IntersectionObserver !== 'function') return;
    const title = dialog.querySelector('#context-title');
    if (!title) return;
    dialog.classList.add('has-sticky-label');
    dialog.classList.remove('is-scrolled');
    titleWatcher = new IntersectionObserver(
      ([entry]) => dialog.classList.toggle('is-scrolled', !entry.isIntersecting),
      {root: scroll, threshold: 0}
    );
    titleWatcher.observe(title);
  }

  function open(button) {
    const topic = topics[button.dataset.context];
    if (!topic || dialog.open) return;
    opener = button;
    render(topic, button.dataset.contextResult);
    scrollY = window.scrollY;
    savedBody = {};
    /* Locking the page can reclaim the scrollbar's width and widen the viewport,
       which slides every centred fixed element sideways. scrollbar-gutter:stable
       makes this zero; where it is unsupported, the nav pads by the same amount. */
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--lock-gutter', `${gutter}px`);
    const styles = {position:'fixed',top:`-${scrollY}px`,left:'0',right:'0',paddingRight:`${parseFloat(getComputedStyle(document.body).paddingRight) + gutter}px`};
    for (const name of Object.keys(styles)) { savedBody[name] = document.body.style[name]; document.body.style[name] = styles[name]; }
    document.documentElement.classList.add('context-open');
    dialog.classList.remove('is-closing');
    button.setAttribute('aria-expanded','true');
    dialog.showModal();
    scroll.scrollTop = 0;
    watchTitle();
    dialog.querySelector('#context-title').focus({preventScroll:true});
  }

  function finishClose() {
    clearTimeout(closingTimer);
    closingTimer = null;
    if (dialog.open) dialog.close();
  }
  function close() {
    if (!dialog.open || closingTimer !== null) return;
    if (motion.matches) return finishClose();
    dialog.classList.add('is-closing');
    closingTimer = setTimeout(finishClose, 170);
  }

  dialog.addEventListener('close', () => {
    clearTimeout(closingTimer);
    closingTimer = null;
    dialog.classList.remove('is-closing');
    if (titleWatcher) { titleWatcher.disconnect(); titleWatcher = null; }
    dialog.classList.remove('has-sticky-label','is-scrolled');
    document.documentElement.classList.remove('context-open');
    document.documentElement.style.removeProperty('--lock-gutter');
    if (savedBody) for (const [name,value] of Object.entries(savedBody)) document.body.style[name] = value;
    savedBody = null;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, scrollY);
    root.style.scrollBehavior = previousBehavior;
    if (opener) { opener.setAttribute('aria-expanded','false'); opener.focus({preventScroll:true}); }
  });

  closeButton.addEventListener('click',close);
  dialog.addEventListener('cancel',event => { event.preventDefault();close(); });

  let downOutside = false;
  function outside(event) { const r=dialog.getBoundingClientRect(); return event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom; }
  dialog.addEventListener('pointerdown',event => { downOutside = event.target === dialog && outside(event); });
  dialog.addEventListener('click',event => { if (downOutside && event.target === dialog && outside(event)) close(); downOutside=false; });
  dialog.addEventListener('pointercancel',() => { downOutside=false; });

  document.querySelectorAll('[data-context]').forEach(button => {
    if (!topics[button.dataset.context]) return;
    button.hidden = false;
    button.setAttribute('aria-haspopup','dialog');
    button.setAttribute('aria-controls','recognition-dialog');
    button.setAttribute('aria-expanded','false');
    button.addEventListener('click',() => open(button));
  });
})();
