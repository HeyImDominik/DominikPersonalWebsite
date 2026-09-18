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
      subtitle: 'The European Commission has run a science contest for 14 to 20 year olds since 1989. You cannot enter it directly; your country sends you.',
      logo: 'eucys-black.svg',
      lead: ['1989', 'First held in Brussels, with 53 entrants'],
      facts: [
        ['37th edition', 'Kiel, 22–27 September 2026'],
        ['~150 a year', 'entrants now'],
        ['14 to 20', 'eligible ages']
      ],
      sections: [
        ['Getting a place', 'There is no open application. Each participating country runs its own science competition and sends the projects that win it, which is why the field is small and the age range so wide. In Kiel an international jury reads the written work, walks the exhibition stands and interviews the researchers. Originality counts, but so does whether you can defend your method under questioning.'],
        ['What winners get', 'Cash prizes are split across first, second and third places. The awards that tend to matter more are the visits: CERN, the European Space Agency, EMBL and other European research institutions host EUCYS winners. The contest was set up in 1989 under Jacques Delors after a challenge from Philips, and it has grown from 53 entrants to roughly 150 a year.']
      ],
      chapters: [{
        title: 'AMAVET runs the Slovak route',
        kicker: 'How a project gets out of Slovakia',
        logo: 'amavet-complete.svg',
        paragraphs: ['Slovakia fills its EUCYS place through the Festival of Science and Technology, organised by AMAVET. The 2025 national final put 81 students and 60 projects in front of 27 judges drawn from universities, the Slovak Academy of Sciences and industry. The nominations for international contests come out of that room.']
      }],
      connection: 'In November 2025 I was selected to represent Slovakia at EUCYS 2026 with LAVAIQ, my Android antivirus built on machine learning. The national round is the selection; the contest itself is still ahead.',
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
      subtitle: 'Festival vedy a techniky AMAVET. A science fair where students defend their own research in front of working scientists, first regionally, then nationally.',
      logo: 'amavet-complete.svg',
      lead: ['28th', 'edition of the festival in 2025'],
      facts: [
        ['60 projects', 'at the 2025 national final'],
        ['81 students', 'presenting them'],
        ['27 judges', 'universities, SAV, industry']
      ],
      sections: [
        ['Regional first', 'The round on this page covers the Bratislava and Trnava regions. Placing there is what puts a project into the national final, and the national final is where nominations to EUCYS and Regeneron ISEF are handed out. It is a ladder, not a single event, and each rung has a different jury.'],
        ['Who AMAVET is', 'The Association for Youth, Science and Technology has been running since 1990. It is a volunteer organisation more than an institution: clubs across Slovakia, several thousand active members, teachers and researchers who give up weekends. Astronomy, robotics, informatics, biotechnology and earth sciences all sit under the same roof.']
      ],
      connection: 'I took 2nd place at the Bratislava regional round in October 2025 with LAVAIQ. The project went on to the national round and was selected there for EUCYS 2026.',
      sources: [
        ['AMAVET, regional competition', 'https://www.festivalvedy.sk/wp2/bratislavsky-a-trnavsky-kraj/'],
        ['AMAVET, 2025 national final', 'https://www.festivalvedy.sk/wp2/festival-vedy-a-techniky-amavet-2025-otvoril-tyzden-vedy-a-techniky-na-slovensku/'],
        ['AMAVET, about the association', 'https://www.amavet.sk/amavet-2/']
      ]
    },

    bratislava: {
      short: 'Bratislava Region Award',
      title: 'Bratislava Region Award',
      category: 'Bratislavský samosprávny kraj · Slovakia',
      subtitle: 'An annual ceremony at which the region that governs Slovakia’s capital honours secondary-school students for work done outside what school asked of them.',
      logo: 'bratislava.png', logoStyle: 'bratislava',
      lead: ['50', 'students honoured at the June 2025 ceremony'],
      facts: [
        ['Juraj Droba', 'Governor who presents it'],
        ['1 of 8', 'self-governing regions in Slovakia'],
        ['SOSTAR', 'the school I represented']
      ],
      sections: [
        ['What the region is', 'The Bratislava Self-Governing Region is the tier of government between the city and the state. It runs the secondary schools in the capital and the districts around it, and once a year it brings the students it wants to point at into one room.'],
        ['What it is given for', 'Not grades. The list runs across academic competitions, sport, the arts and work done for the community, and the common thread is initiative rather than results in any one subject. The award travels with the school as much as the student.']
      ],
      connection: 'I received the award in June 2025 for my results with LAVAIQ and for representing SOSTAR. It was presented and signed by Juraj Droba, the Governor of the Bratislava Region.',
      sources: [
        ['Bratislava Region, 2025 student awards', 'https://bratislavskykraj.sk/predseda-bsk-ocenil-najuspesnejsich-stredoskolakov-kraja/'],
        ['SOSTAR', 'https://sostar.sk/']
      ]
    },

    soc: {
      short: 'SOČ',
      title: 'SOČ',
      category: 'ŠIOV · Slovakia',
      subtitle: 'Stredoškolská odborná činnosť. Slovakia’s national competition for independent secondary-school research: write a paper, then defend it in front of a panel.',
      logo: 'soc-clean-v2.svg',
      lead: ['2,381', 'students across the 2025 competition'],
      facts: [
        ['17 fields', 'informatics through to social sciences'],
        ['318 schools', 'taking part in 2025'],
        ['272 projects', 'reaching the national final']
      ],
      sections: [
        ['How it works', 'You pick a problem, work on it for months, write it up properly and then sit in front of a panel that has read it. School round, regional round, national round. Each field is judged separately, so a placing is a placing within a subject rather than across the whole competition.'],
        ['Who runs it', 'The State Institute of Vocational Education, ŠIOV, coordinates SOČ nationally. Because it reaches every kind of secondary school rather than only the academic ones, it is often the first time a student has to present technical work to people who are not their teachers.']
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
      subtitle: 'JUNIOR KÓDER. A programming contest run by the informatics faculty at the University of Žilina, held on the faculty’s own machines.',
      logo: 'uniza.png', logoStyle: 'uniza',
      lead: ['31', 'finalists in the 2025 edition'],
      facts: [
        ['2nd edition', 'in 2025, so the contest is young'],
        ['FRI', 'Faculty of Management Science and Informatics'],
        ['1953', 'university founded, as a railway school']
      ],
      sections: [
        ['Where it sits', 'The competition is the faculty’s way of meeting the people who might enrol there in two years, and it puts school programming in front of a university panel rather than a classroom one. The 2025 final drew 31 students from schools across Slovakia.'],
        ['The faculty behind it', 'FRI is one of six faculties at the University of Žilina, with roughly 1,650 students of its own. The university itself started in 1953 as a college of railway transport split off from the Czech Technical University in Prague, and moved to Žilina in the sixties.']
      ],
      connection: 'I received a Certificate of Successful Completion in March 2024, from the Faculty of Management Science and Informatics at the University of Žilina.',
      sources: [
        ['FRI UNIZA, 2025 competition report', 'https://www.fri.uniza.sk/aktualita/finale-druheho-rocnika-sutaze-junior-koder-koderka-pozna-svojich-vitazov'],
        ['University of Žilina, profile', 'https://www.uniza.sk/index.php/en/university/general-information/university-profile']
      ]
    },

    universities: {
      short: 'FEI STU & NHF EUBA',
      title: 'Two universities, one degree',
      category: 'Higher education · Bratislava, Slovakia',
      subtitle: 'FinTech and Financial Innovation is taught jointly by an engineering faculty and an economics faculty. Neither could run it alone.',
      logo: 'stu-official.svg',
      lead: ['1937', 'STU founded, the oldest technical university in Slovakia'],
      facts: [
        ['~11,000', 'students at STU'],
        ['180,000+', 'STU graduates since 1937'],
        ['2026–2029', 'my three years']
      ],
      sections: [
        ['The technical half', 'The Slovak University of Technology has seven faculties and an Institute of Management, spread across Bratislava and Trnava. The Faculty of Electrical Engineering and Information Technology, FEI STU, is the one on my timeline, and it supplies the programming, mathematics and systems side of the joint degree.'],
        ['Why it is split', 'Financial technology sits in the gap between two schools that do not usually share a timetable. Putting the degree across both means the same student writes code in one building and models markets in the other, instead of picking a side at eighteen.']
      ],
      chapters: [{
        title: 'Bratislava University of Economics and Business',
        kicker: 'The economics half',
        logo: 'euba-official.png',
        paragraphs: [
          'EUBA opened in 1940 as the College of Commerce, set up so Slovak students had somewhere to study after the universities in the occupied Czech lands were closed. It now runs seven faculties, more than 7,000 students and 88 accredited programmes.',
          'The Faculty of National Economy, NHF EUBA, is the partner faculty on this programme. Its side of the curriculum is banking, financial markets and economic analysis, which is where the data work from FEI gets pointed at something.'
        ]
      }],
      connection: 'From September 2026 to June 2029 I will be studying across both: engineering at FEI STU, finance and economics at NHF EUBA.',
      sources: [
        ['STU, university profile', 'https://www.stuba.sk/english/university-profile/about-us.html?page_id=9370'],
        ['EUBA, history', 'https://euba.sk/en/univerzita/history'],
        ['NHF EUBA, study programmes', 'https://nhf.euba.sk/uchadzaci-o-studium/studijne-programy']
      ]
    },

    founders: {
      short: 'Future Founders',
      title: 'Future Founders',
      category: 'The Spot · Sky Park, Bratislava',
      subtitle: 'A founder programme for secondary-school students, run out of a coworking space rather than a school. You arrive with an idea and are expected to leave with something people have used.',
      logo: 'the-spot.svg',
      lead: ['Free', 'to join, for secondary-school students'],
      facts: [
        ['The Spot', 'runs it'],
        ['Oct to Aug', 'one school year'],
        ['Varsity', 'the university version']
      ],
      sections: [
        ['What you actually do', 'You are put in a team and given a year. The sessions are workshops rather than lectures: customer interviews, positioning, pricing, prototyping, pitching. Mentors are founders and operators who come in from the Bratislava startup scene, and they will tell you an idea is weak. The point is to get something in front of real users before the programme ends.'],
        ['Where it happens', 'The Spot is a coworking space and startup community in Sky Park. Running the programme there means participants work in the same building as people currently running companies, which is where most of the useful feedback comes from. The Spot runs Varsity on the same model for university students.']
      ],
      connection: 'I was selected for the programme and spent it building a startup project with a team, through mentoring, masterclasses and workshops on product and strategy.',
      sources: [
        ['Future Founders', 'https://futurefounders.sk/'],
        ['Future Founders Varsity', 'https://varsity.futurefounders.sk/'],
        ['The Spot, community', 'https://thespotcowork.com/en/community/']
      ]
    },

    sostar: {
      short: 'SOSTAR',
      title: 'SOSTAR',
      category: 'Vocational school · Bratislava, Slovakia',
      subtitle: 'Stredná odborná škola technológií a remesiel. A technical secondary school where a third of the week is spent with the hardware rather than reading about it.',
      logo: 'sostar-circle.svg',
      lead: ['4 years', 'to a maturita and a trade qualification'],
      facts: [
        ['Computer networks', 'my field'],
        ['Ivanská cesta 21', 'Bratislava'],
        ['2022–2026', 'my years there']
      ],
      sections: [
        ['The school', 'SOSTAR teaches technical trades alongside the standard academic subjects, so its students leave with both a school-leaving exam and a qualification they can work with. That combination is the point: university stays open, but so does a job.'],
        ['My programme', 'Mechanic of Computer Networks runs four years and covers hardware, operating systems and the design, installation and maintenance of networks, with programming and web technologies alongside. Building the network and then having to fix it is a different kind of learning from a lecture about it, and it is the foundation most of my projects sit on.']
      ],
      connection: 'I studied here from 2022 to 2026. It is the school I represented at SOČ and at the regional awards.',
      sources: [
        ['SOSTAR, Computer Networks programme', 'https://sostar.sk/pre-uchadzacov-o-studium/studium-2/4-rocne-ucebne-odbory/mechanik-pocitacovych-sieti-3/']
      ]
    },

    erasmus: {
      short: 'Erasmus+',
      title: 'Erasmus+',
      category: 'European Union · placement in Portugal',
      subtitle: 'Best known for university exchanges, but the same programme sends vocational students abroad to work. That is the half I did.',
      logo: 'erasmus.svg',
      lead: ['16 million', 'people have taken part since 1987'],
      facts: [
        ['€26.2 bn', 'budget for 2021–2027'],
        ['1987', 'first year of the programme'],
        ['Portugal', 'where mine was']
      ],
      sections: [
        ['More than an exchange', 'Erasmus+ covers education, training, youth and sport across the EU. Alongside the semesters abroad it funds vocational placements, where a student on a technical course spends weeks inside a real company in another country. Same programme, different half of it.'],
        ['What a placement is actually like', 'You work rather than study, and the technical part turns out to be the easy half. The rest is doing the job in a second language, in a workplace that organises itself differently from the one at home, with nobody from your school in the room. That is the part you keep.']
      ],
      connection: 'In November and December 2023 I did a professional internship at GreenTek in Portugal, working on computer hardware recycling and sustainable IT practices.',
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
