// Related services configuration for internal linking
export const relatedServices: Record<string, { title: string; link: string; description: string; anchorText?: string }[]> = {
  'ortodontie': [
    {
      title: "Estetică dentară",
      link: "/servicii/estetica-dentara",
      description: "Fațete ceramice și albire pentru un zâmbet perfect după tratamentul ortodontic",
      anchorText: "Detalii estetică dentară pentru zâmbet perfect după aparat"
    },
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie",
      description: "Detartraj și igienizare profesională pentru menținerea sănătății dinților aliniați",
      anchorText: "Detalii profilaxie dentară pentru dinți aliniați sănătoși"
    },
    {
      title: "Stomatologie copii",
      link: "/servicii/stomatologie-copii-piatra-neamt",
      description: "Tratamente ortodontice preventive pentru cei mici",
      anchorText: "Detalii ortodonție copii pentru prevenție timpurie"
    }
  ],
  'estetica-dentara': [
    {
      title: "Ortodonție",
      link: "/servicii/ortodontie-piatra-neamt",
      description: "Alinierea dinților cu aparate fixe sau Invisalign pentru baza unui zâmbet perfect",
      anchorText: "Detalii ortodonție pentru zâmbet perfect aliniat"
    },
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie",
      description: "Albire dentară și detartraj pentru întreținerea zâmbetului strălucitor",
      anchorText: "Detalii albire dentară pentru zâmbet strălucitor durabil"
    },
    {
      title: "Protetica dentară",
      link: "/servicii/protetica-piatra-neamt",
      description: "Coroane și fațete ceramice pentru restaurări estetice",
      anchorText: "Detalii coroane ceramice pentru zâmbet natural"
    }
  ],
  'implant-dentar': [
    {
      title: "Parodontologie",
      link: "/servicii/parodontologie-piatra-neamt",
      description: "Tratament gingii sănătoase - esențial înainte de implant",
      anchorText: "Detalii parodontologie pentru gingii sănătoase pre-implant"
    },
    {
      title: "Radiologie dentară",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      description: "CT dentar 3D pentru planificarea precisă a implantului",
      anchorText: "Detalii CT 3D pentru implant precis fără greșeli"
    },
    {
      title: "Protetica dentară",
      link: "/servicii/protetica-piatra-neamt",
      description: "Coroane pe implanturi pentru finalizarea tratamentului",
      anchorText: "Detalii coroane pe implant pentru finisaj perfect"
    }
  ],
  'chirurgie-orala': [
    {
      title: "Implant dentar",
      link: "/servicii/implant-dentar",
      description: "Înlocuirea dinților lipsă cu implanturi dentare",
      anchorText: "Detalii implant dentar pentru dinți ficși permanenți"
    },
    {
      title: "Radiologie dentară",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      description: "Imagistică avansată pentru planificarea intervențiilor chirurgicale",
      anchorText: "Detalii radiologie 3D pentru chirurgie fără surprize"
    },
    {
      title: "Urgențe stomatologice",
      link: "/servicii/urgente",
      description: "Intervenții de urgență pentru abcese și fracturi dentare",
      anchorText: "Detalii urgențe dentare pentru durere stop imediat"
    }
  ],
  'profilaxie': [
    {
      title: "Parodontologie",
      link: "/servicii/parodontologie-piatra-neamt",
      description: "Tratament pentru gingivită și parodontoză",
      anchorText: "Detalii pentru gingii sănătoase, fără sângerare"
    },
    {
      title: "Estetică dentară",
      link: "/servicii/estetica-dentara",
      description: "Albire profesională pentru un zâmbet strălucitor",
      anchorText: "Fațete dentare ceramice pentru Hollywood smile"
    },
    {
      title: "Stomatologie copii",
      link: "/servicii/stomatologie-copii-piatra-neamt",
      description: "Sigilări și fluorizări pentru prevenția cariilor la copii",
      anchorText: "Stomatologie pediatrică pentru dinți sănătoși fără carii"
    }
  ],
  'parodontologie': [
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie",
      description: "Detartraj și igienizare pentru prevenirea bolilor parodontale",
      anchorText: "Detalii detartraj pentru prevenție parodontoză"
    },
    {
      title: "Implant dentar",
      link: "/servicii/implant-dentar",
      description: "Soluții pentru dinții pierduți din cauza parodontozei",
      anchorText: "Detalii implant dentar după pierdere dinți parodontoză"
    },
    {
      title: "Chirurgie orală",
      link: "/servicii/chirurgie-orala",
      description: "Grefe gingivale și intervenții parodontale complexe",
      anchorText: "Detalii grefe gingivale pentru recesiuni gingii"
    }
  ],
  'protetica': [
    {
      title: "Implant dentar",
      link: "/servicii/implant-dentar",
      description: "Fundație stabilă pentru coroane și punți dentare",
      anchorText: "Detalii implant dentar pentru bază stabilă coroane"
    },
    {
      title: "Estetică dentară",
      link: "/servicii/estetica-dentara",
      description: "Fațete și coroane ceramice pentru un zâmbet natural",
      anchorText: "Detalii fațete ceramice pentru zâmbet natural perfect"
    },
    {
      title: "Radiologie dentară",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      description: "Planificare digitală pentru lucrări protetice precise",
      anchorText: "Detalii radiologie digitală pentru coroane precise"
    }
  ],
  'radiologie-dentara': [
    {
      title: "Implant dentar",
      link: "/servicii/implant-dentar",
      description: "CT 3D pentru planificarea precisă a implanturilor",
      anchorText: "Detalii implant dentar cu planificare 3D precisă"
    },
    {
      title: "Endodonție",
      link: "/servicii/endodontie-piatra-neamt",
      description: "Radiografii pentru diagnosticarea precisă a canalelor radiculare",
      anchorText: "Detalii tratament canal cu diagnostic radiologic precis"
    },
    {
      title: "Ortodonție",
      link: "/servicii/ortodontie-piatra-neamt",
      description: "Radiografii cefalometrice pentru planul de tratament ortodontic",
      anchorText: "Detalii ortodonție cu radiografii pentru plan perfect"
    }
  ],
  'stomatologie-copii': [
    {
      title: "Ortodonție",
      link: "/servicii/ortodontie-piatra-neamt",
      description: "Tratamente ortodontice preventive pentru copii",
      anchorText: "Detalii ortodonție copii pentru dinți drepți la timp"
    },
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie",
      description: "Sigilări, fluorizări și educație pentru igiena orală",
      anchorText: "Detalii sigilări dinți pentru protecție carii copii"
    },
    {
      title: "Tratament carii",
      link: "/servicii/tratament-carii",
      description: "Plombe și tratamente pentru dinții de lapte și permanenți",
      anchorText: "Detalii plombe copii fără durere fără frică"
    }
  ],
  'stomatologie-generala': [
    {
      title: "Tratament carii",
      link: "/servicii/tratament-carii",
      description: "Plombe și restaurări dentare",
      anchorText: "Detalii plombe pentru carii stop durere rapid"
    },
    {
      title: "Endodonție",
      link: "/servicii/endodontie-piatra-neamt",
      description: "Tratament de canal pentru carii profunde și infecții",
      anchorText: "Detalii tratament canal pentru salvare dinte infectat"
    },
    {
      title: "Parodontologie",
      link: "/servicii/parodontologie-piatra-neamt",
      description: "Tratament pentru gingii inflamate și sângerânde",
      anchorText: "Detalii parodontologie pentru gingii fără sângerare"
    }
  ],
  'tratament-carii': [
    {
      title: "Endodonție",
      link: "/servicii/endodontie-piatra-neamt",
      description: "Tratamente de canal pentru carii profunde",
      anchorText: "Detalii tratament canal pentru salvare dinte cariat"
    },
    {
      title: "Parodontologie",
      link: "/servicii/parodontologie-piatra-neamt",
      description: "Sănătatea gingiilor complementară tratamentului cariilor",
      anchorText: "Detalii parodontologie pentru sănătate orală completă"
    },
    {
      title: "Protetica dentară",
      link: "/servicii/protetica-piatra-neamt",
      description: "Coroane și onlay-uri pentru restaurări extinse",
      anchorText: "Detalii coroane pentru restaurare dinte deteriorat"
    }
  ],
  'urgente': [
    {
      title: "Chirurgie orală",
      link: "/servicii/chirurgie-orala",
      description: "Extracții de urgență și drenaj abcese",
      anchorText: "Detalii extracție urgență pentru durere stop rapid"
    },
    {
      title: "Endodonție",
      link: "/servicii/endodontie-piatra-neamt",
      description: "Tratament de canal pentru salvarea dinților cu infecții severe",
      anchorText: "Detalii tratament canal pentru durere stop definitiv"
    },
    {
      title: "Radiologie dentară",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      description: "Diagnostic rapid cu radiografii digitale",
      anchorText: "Detalii radiografie urgență pentru diagnostic rapid"
    }
  ]
};

// Related articles configuration for blog internal linking
export const relatedArticles: Record<string, { title: string; link: string; excerpt: string; anchorText?: string }[]> = {
  'aparat-dentar-adulti': [
    {
      title: "Cum pregătești copilul pentru prima vizită la dentist",
      link: "/blog/prima-vizita-copil-dentist",
      excerpt: "Sfaturi practice pentru părinți despre pregătirea copilului pentru dentist",
      anchorText: "Citește despre prima vizită copil la dentist fără frică"
    },
    {
      title: "Albire dentară profesională în Piatra Neamț",
      link: "/blog/albire-dentara-piatra-neamt",
      excerpt: "Descoperă metodele de albire dentară și rezultatele pe care le poți obține",
      anchorText: "Citește despre albire dentară pentru dinți albi după aparat"
    },
    {
      title: "Ai dinți care se mișcă? Cum recunoști și tratezi parodontoza",
      link: "/blog/parodontoza-tratament",
      excerpt: "Totul despre parodontoză: simptome, tratament și prevenire",
      anchorText: "Citește despre parodontoză pentru dinți stabili fără pierdere"
    }
  ],
  'albire-dentara-piatra-neamt': [
    {
      title: "Aparat dentar pentru adulți: metalic, ceramic sau Invisalign?",
      link: "/blog/aparat-dentar-adulti-piatra-neamt",
      excerpt: "Comparație detaliată între tipurile de aparate dentare pentru adulți",
      anchorText: "Citește despre aparat dentar adulți pentru dinți drepți albi"
    },
    {
      title: "Ai dinți care se mișcă? Cum recunoști și tratezi parodontoza",
      link: "/blog/parodontoza-tratament",
      excerpt: "Simptome, stadii și opțiuni de tratament pentru parodontoză",
      anchorText: "Citește despre parodontoză înainte să fie prea târziu"
    }
  ],
  'prima-vizita-copil-dentist': [
    {
      title: "Aparat dentar pentru adulți în Piatra Neamț",
      link: "/blog/aparat-dentar-adulti-piatra-neamt",
      excerpt: "Ghid complet despre aparatele dentare pentru adulți",
      anchorText: "Citește despre aparat dentar adulți pentru zâmbet perfect"
    },
    {
      title: "Măseaua de minte - când o lași în pace și când trebuie scoasă",
      link: "/blog/maseaua-de-minte",
      excerpt: "Totul despre extracția măselelor de minte și recuperare",
      anchorText: "Citește despre maseaua de minte când să o scoți"
    }
  ],
  'maseaua-de-minte': [
    {
      title: "Urgență dentară: dinte rupt sau plombă căzută",
      link: "/blog/urgente-dentare-dinte-rupt",
      excerpt: "Ce măsuri să iei imediat când ai o urgență dentară",
      anchorText: "Citește despre urgențe dentare pentru primul ajutor rapid"
    },
    {
      title: "Cum pregătești copilul pentru prima vizită la dentist",
      link: "/blog/prima-vizita-copil-dentist",
      excerpt: "Sfaturi practice pentru o experiență pozitivă la dentist",
      anchorText: "Citește despre prima vizită copil pentru experiență fără teamă"
    },
    {
      title: "Ai dinți care se mișcă? Tratamentul parodontozei",
      link: "/blog/parodontoza-tratament",
      excerpt: "Cum recunoști și tratezi parodontoza pas cu pas",
      anchorText: "Citește despre parodontoză pentru salvare dinți care se mișcă"
    }
  ],
  'urgente-dentare-dinte-rupt': [
    {
      title: "Măseaua de minte - când trebuie scoasă",
      link: "/blog/maseaua-de-minte",
      excerpt: "Ghid complet despre măselele de minte și extracția lor",
      anchorText: "Citește despre extracție maseaua de minte fără complicații"
    },
    {
      title: "Ai dinți care se mișcă? Cum recunoști parodontoza",
      link: "/blog/parodontoza-tratament",
      excerpt: "Totul despre parodontoză și opțiunile de tratament",
      anchorText: "Citește despre parodontoză pentru oprire degradare rapidă"
    }
  ],
  'parodontoza-tratament': [
    {
      title: "Albire dentară profesională în Piatra Neamț",
      link: "/blog/albire-dentara-piatra-neamt",
      excerpt: "Metode de albire dentară și rezultatele pe care le poți obține",
      anchorText: "Citește despre albire dentară după vindecare parodontoză"
    },
    {
      title: "Urgență dentară: dinte rupt sau plombă căzută",
      link: "/blog/urgente-dentare-dinte-rupt",
      excerpt: "Primul ajutor dentar și când să mergi urgent la dentist",
      anchorText: "Citește despre urgențe dentare pentru intervenție imediată"
    },
    {
      title: "Aparat dentar pentru adulți în Piatra Neamț",
      link: "/blog/aparat-dentar-adulti-piatra-neamt",
      excerpt: "Comparație între aparate metalice, ceramice și Invisalign",
      anchorText: "Citește despre aparat dentar pentru realiniere după tratament"
    }
  ]
};

// Recent blog articles for homepage
export const recentArticles = [
  {
    title: "Albire dentară profesională în Piatra Neamț | Opțiuni, prețuri și rezultate",
    link: "/blog/albire-dentara-piatra-neamt",
    excerpt: "Descoperă metodele de albire dentară disponibile, prețurile orientative și rezultatele pentru un zâmbet strălucitor.",
    date: "15 Noiembrie 2025",
    anchorText: "Citește despre albirea dentară pentru un zâmbet strălucitor"
  },
  {
    title: "Aparat dentar pentru adulți: metalic, ceramic sau Invisalign?",
    link: "/blog/aparat-dentar-adulti-piatra-neamt",
    excerpt: "Comparație detaliată între aparatele dentare metalice, ceramice și Invisalign pentru adulți.",
    date: "10 Noiembrie 2025",
    anchorText: "De ce un aparat dentar poate fi alegerea perfectă chiar și pentru adulți"
  },
  {
    title: "Cum pregătești copilul pentru prima vizită la dentist",
    link: "/blog/prima-vizita-copil-dentist",
    excerpt: "Sfaturi practice pentru părinți despre cum să reducă anxietatea și să creeze o experiență pozitivă.",
    date: "5 Noiembrie 2025",
    anchorText: "Citește despre prima vizită la dentist fără frică și stress"
  }
];