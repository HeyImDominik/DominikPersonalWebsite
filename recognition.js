/* Official context is separate from the personal achievements supplied by Dominik. */
(() => {
  'use strict';
  const topics = {
    eucys: {
      title: 'EUCYS', category: 'International science · Kiel, Germany',
      subtitle: 'European Union Contest for Young Scientists', logo: 'eucys-black.svg',
      facts: [['~40', 'countries expected in 2026'], ['14–20', 'age range'], ['National', 'selection route']],
      sections: [
        ['What it is', 'EUCYS is the European Commission’s international competition for young researchers. Entrants bring original scientific or engineering projects selected through national competitions. The 37th edition takes place in Kiel, Germany, on 22–27 September 2026.'],
        ['Why it matters', 'Reaching EUCYS means earning a place through a national selection process. Projects are examined by an international scientific jury through written work, exhibition displays and interviews. Judges consider originality, the quality of the investigation, the results and how well the researchers can defend their work.']
      ],
      chapters: [{title:'The route through AMAVET', kicker:'From Slovakia to the international stage', logo:'amavet-complete.svg', paragraphs:['Slovakia’s Festival of Science and Technology, organised by AMAVET, provides a route to international science competitions. Its 2025 national final brought together 81 students presenting 60 projects, assessed by 27 experts from universities, the Slovak Academy of Sciences and professional practice.']}],
      connection: 'Selected in November 2025 to represent Slovakia at EUCYS 2026 with LAVAIQ, my Android antivirus project using machine learning. This milestone is the national selection for the upcoming international contest.',
      sources: [['European Commission · EUCYS', 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/eucys_en'], ['AMAVET · 2025 national final', 'https://www.festivalvedy.sk/wp2/festival-vedy-a-techniky-amavet-2025-otvoril-tyzden-vedy-a-techniky-na-slovensku/']]
    },
    amavet: {
      title:'Festival of Science & Technology', category:'Student research · Slovakia',
      subtitle:'Festival vedy a techniky AMAVET', logo:'amavet-complete.svg',
      facts:[['28th','edition in 2025'],['Regional → national','competition pathway'],['60','projects at the 2025 national final']],
      sections:[
        ['What it is','An annual Slovak science fair where young people develop their own research or technical projects and present them to experts. AMAVET is the Association for Youth, Science and Technology. The regional round on this page covers the Bratislava and Trnava regions.'],
        ['Why it matters','The festival is part of Slovakia’s progression-based student competition system: regional events lead to a national final, where selected projects can earn nominations to international events such as EUCYS and Regeneron ISEF. It gives students an opportunity to have their ideas evaluated beyond the classroom.']
      ],
      connection:'I received 2nd place at the Bratislava regional round in October 2025 with LAVAIQ. My project subsequently reached the national round and earned selection for EUCYS 2026.',
      sources:[['AMAVET · regional competition','https://www.festivalvedy.sk/wp2/bratislavsky-a-trnavsky-kraj/'],['AMAVET · 2025 national final','https://www.festivalvedy.sk/wp2/festival-vedy-a-techniky-amavet-2025-otvoril-tyzden-vedy-a-techniky-na-slovensku/']]
    },
    bratislava: {
      title:'Bratislava Region Award', category:'Public recognition · Slovakia',
      subtitle:'Exceptional results and representation of the school',logo:'bratislava.png',logoStyle:'bratislava',
      facts:[['50','students honoured at the 2025 ceremony'],['Regional','public recognition'],['SOSTAR','school represented']],
      sections:[
        ['What it recognises','Recognition from the Bratislava Self-Governing Region, the regional authority for Slovakia’s capital and its surrounding area. Its annual student ceremony honours exceptional results and initiative beyond ordinary school responsibilities. In June 2025, Governor Juraj Droba presented awards to 50 secondary-school students.'],
        ['Why it matters','Recipients are recognised for achievements across academic competitions, sport, the arts and contributions to their communities. It is an acknowledgement beyond the school itself, celebrating both students’ accomplishments and the example they set for others.']
      ],
      connection:'In June 2025, I received this award for my results and representation of SOSTAR with LAVAIQ. My award was presented and signed by Juraj Droba, the Governor of the Bratislava Region.',
      sources:[['Bratislava Region · 2025 student awards','https://bratislavskykraj.sk/predseda-bsk-ocenil-najuspesnejsich-stredoskolakov-kraja/'],['SOSTAR','https://sostar.sk/']]
    },
    soc: {
      title:'SOČ',category:'Independent student research · Slovakia',
      subtitle:'Stredoškolská odborná činnosť · Secondary School Professional Activity',logo:'soc-clean-v2.svg',
      facts:[['2,381','students across the 2025 competition'],['17','subject fields'],['272','projects at the 2025 national final']],
      sections:[
        ['What it is','SOČ is Slovakia’s nationwide competition for secondary-school students’ independent research and technical work. Students develop a project, write it up and defend it before a panel. Its 17 fields cover a wide range of scientific, technical and other specialist subjects. The competition is coordinated by the State Institute of Vocational Education (ŠIOV).'],
        ['Why it matters','Projects advance through earlier rounds to the national final, where students present their work to educators and specialists. In 2025, the competition involved 318 schools. A national placing recognises work within its subject field after this progression; the participation figures above describe the whole competition across all fields.']
      ],
      sources:[['ŠIOV · 2025 national competition','https://siov.sk/stredoskolska-odborna-cinnost-predstavi-talenty-na-celostatnom-kole-v-kosiciach/'],['ŠIOV · about SOČ','https://siov.sk/soc/']]
    },
    junior: {
      title:'Junior Coder',category:'Programming · Žilina, Slovakia',
      subtitle:'JUNIOR KÓDER · University of Žilina',logo:'uniza.png',logoStyle:'uniza',
      facts:[['Programming','competition focus'],['UNIZA','university organiser'],['2024','my certificate']],
      sections:[
        ['What it is','Junior Coder is a programming competition organised by the Faculty of Management Science and Informatics at the University of Žilina (UNIZA). It gives aspiring programmers an opportunity to test their abilities in an academic environment and meet the university’s computing community.'],
        ['Its reach','The competition connects school-level programming with university study. For context, the faculty reported 31 finalists from schools across Slovakia in the 2025 edition, illustrating the reach of this growing event.']
      ],
      connection:'I received a Certificate of Successful Completion in March 2024 from the Faculty of Management Science and Informatics at the University of Žilina.',
      sources:[['FRI UNIZA · competition report (2025)','https://www.fri.uniza.sk/aktualita/finale-druheho-rocnika-sutaze-junior-koder-koderka-pozna-svojich-vitazov']]
    },
    universities: {
      title:'Technology meets finance',category:'Higher education · Bratislava, Slovakia',
      subtitle:'Two universities. One joint bachelor’s programme.',logo:'stu-official.svg',
      facts:[['2','partner universities'],['3 years','bachelor’s programme'],['FinTech','shared focus']],
      sections:[['Slovak University of Technology · STU','STU is a research-oriented technical university in Bratislava, with seven faculties and an Institute of Management. Its teaching and research span engineering, computing, architecture, chemistry and related disciplines. Around 11,000 students study at the university.'],['The technical side · FEI STU','The Faculty of Electrical Engineering and Information Technology provides the engineering and computing setting for the joint programme. This is the technical university behind the STU name on my timeline.']],
      chapters:[{title:'Bratislava University of Economics and Business',kicker:'The economics side · EUBA',logo:'euba-official.png',paragraphs:['Also widely known as the University of Economics in Bratislava, EUBA specialises in economics, business and management. Its seven faculties cover these fields and their related disciplines. The Faculty of National Economy (NHF EUBA) is the partner faculty in my programme.','FinTech and Financial Innovation is a joint bachelor’s programme with FEI STU. It brings finance and economics together with information technology, including programming, data analysis and applications of artificial intelligence in financial decision-making.']}],
      connection:'My September 2026–June 2029 study path combines the technical perspective of FEI STU with the financial and economic perspective of NHF EUBA.',
      sources:[['STU · university profile','https://www.stuba.sk/english/university-profile/about-us.html?page_id=9370'],['EUBA · university','https://euba.sk/en/'],['NHF EUBA · study programmes','https://nhf.euba.sk/uchadzaci-o-studium/studijne-programy']]
    },
    founders: {
      title:'Future Founders',category:'Entrepreneurship · Bratislava, Slovakia',
      subtitle:'A founder programme powered by The Spot',logo:'the-spot.svg',
      facts:[['Build','a startup project'],['Mentorship','people from practice'],['The Spot','Bratislava community']],
      sections:[
        ['What it is','Future Founders is a programme for students who want to turn an idea into a project. Its secondary-school programme combines mentoring, practical lessons from people working in business and time to build something of your own.'],
        ['Why it matters','The value is practical experience: working with a team, testing ideas, learning from founders and turning feedback into a better product. It is connected to The Spot, a coworking and entrepreneurial community in Bratislava’s Sky Park, giving participants a setting in which to meet people building businesses.']
      ],
      connection:'Selected for the programme, I worked with a team on a startup project, with mentoring, masterclasses and workshops in product development and strategy.',
      sources:[['Future Founders · official programme','https://futurefounders.sk/'],['The Spot · community','https://thespotcowork.com/']]
    },
    sostar: {
      title:'SOSTAR',category:'Technical education · Bratislava, Slovakia',
      subtitle:'Secondary Vocational School of Technologies and Crafts',logo:'sostar-circle.svg',
      facts:[['4 years','vocational programme'],['IT & networks','my specialisation'],['Bratislava','Ivanská cesta 21']],
      sections:[
        ['What the school is','SOSTAR is a secondary vocational school combining classroom education with practical technical training. Its Slovak name is Stredná odborná škola technológií a remesiel. It is based in Bratislava, Slovakia.'],
        ['What my programme involves','Mechanic of Computer Networks is a four-year programme covering computer hardware, software and the design, installation and maintenance of networks. It also introduces programming and web technologies. The programme leads to a school-leaving examination (maturita) and a vocational qualification, combining a route to university with practical preparation for technical work.']
      ],
      connection:'I studied here from 2022 to 2026. This is the hardware, software and networking foundation behind my projects, and the school I represented in SOČ and other activities.',
      sources:[['SOSTAR · Computer Networks programme','https://sostar.sk/pre-uchadzacov-o-studium/studium-2/4-rocne-ucebne-odbory/mechanik-pocitacovych-sieti-3/']]
    },
    erasmus: {
      title:'Erasmus+',category:'International experience · Portugal',
      subtitle:'European learning mobility, applied to vocational training',logo:'erasmus.svg',
      facts:[['EU','education programme'],['Portugal','placement location'],['Sustainable IT','my internship focus']],
      sections:[
        ['What it is','Erasmus+ is the European Union’s programme supporting education, training, youth and sport. It supports opportunities to study, train and gain experience abroad, including placements for vocational students as well as university exchanges.'],
        ['Why it matters','A vocational placement puts technical learning into a workplace in another country. Alongside practical skills, it offers experience with different working methods, communication across cultures and greater independence.']
      ],
      connection:'In November–December 2023, I completed a professional internship at GreenTek in Portugal, focusing on computer hardware recycling and sustainable IT practices.',
      sources:[['European Commission · Erasmus+','https://erasmus-plus.ec.europa.eu/about-erasmus']]
    }
  };
  const dialog = document.getElementById('recognition-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const scroll = dialog.querySelector('.context-scroll');
  const closeButton = dialog.querySelector('.context-close');
  const label = dialog.querySelector('.context-bar__label');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const arrow = '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 15 15 5M5 5h10v10"/></svg>';
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const logo = (file, style = '') => `<div class="context-logo ${style ? 'context-logo--' + escape(style) : ''}" aria-hidden="true" data-nosnippet><img src="logos/marks/${escape(file)}" alt="" width="120" height="112" decoding="async" draggable="false"></div>`;
  let opener = null;
  let closingTimer = null;
  let scrollY = 0;
  let savedBody = null;

  function render(topic, result) {
    const connection = result || topic.connection;
    label.textContent = ['universities','founders','sostar','erasmus'].includes(opener.dataset.context) ? 'Education & experience / explained' : 'Honors & awards / explained';
    scroll.innerHTML = `<header class="context-hero"><div><p class="context-kicker">${escape(topic.category)}</p><h2 id="context-title" tabindex="-1">${escape(topic.title)}</h2><p class="context-subtitle">${escape(topic.subtitle)}</p></div>${logo(topic.logo, topic.logoStyle)}</header>
      <dl class="context-facts">${topic.facts.map(([value, meaning]) => `<div><dt>${escape(meaning)}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl>
      ${topic.sections.map(([heading, copy]) => `<section class="context-section"><h3>${escape(heading)}</h3><p class="context-copy">${escape(copy)}</p></section>`).join('')}
      ${(topic.chapters || []).map(chapter => `<section class="context-chapter"><div class="context-chapter__head">${logo(chapter.logo)}<div><p class="context-kicker">${escape(chapter.kicker)}</p><h3>${escape(chapter.title)}</h3></div></div>${chapter.paragraphs.map(copy => `<p class="context-copy">${escape(copy)}</p>`).join('')}</section>`).join('')}
      ${connection ? `<aside class="context-connection"><p class="context-kicker">My connection</p><p class="context-copy">${escape(connection)}</p></aside>` : ''}
      <footer class="context-sources"><h3>Explore the official sources</h3><ul>${topic.sources.map(([name,url]) => `<li><a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(name)}${arrow}<span class="sr-only"> (opens in a new tab)</span></a></li>`).join('')}</ul></footer>`;
  }

  function open(button) {
    const topic = topics[button.dataset.context];
    if (!topic || dialog.open) return;
    opener = button;
    render(topic, button.dataset.contextResult);
    scrollY = window.scrollY;
    savedBody = {};
    const styles = {position:'fixed',top:`-${scrollY}px`,left:'0',right:'0',paddingRight:`${parseFloat(getComputedStyle(document.body).paddingRight) + window.innerWidth - document.documentElement.clientWidth}px`};
    for (const name of Object.keys(styles)) { savedBody[name] = document.body.style[name]; document.body.style[name] = styles[name]; }
    document.documentElement.classList.add('context-open');
    dialog.classList.remove('is-closing');
    button.setAttribute('aria-expanded','true');
    dialog.showModal();
    scroll.scrollTop = 0;
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
    closingTimer = setTimeout(finishClose, 210);
  }
  dialog.addEventListener('close', () => {
    clearTimeout(closingTimer);
    closingTimer = null;
    dialog.classList.remove('is-closing');
    document.documentElement.classList.remove('context-open');
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
