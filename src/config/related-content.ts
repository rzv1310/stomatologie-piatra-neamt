// Related services configuration for internal linking
export const relatedServices: Record<string, { title: string; link: string; description: string }[]> = {
  'ortodontie': [
    {
      title: "Estetică dentară",
      link: "/servicii/estetica-dentara",
      description: "Fațete ceramice și albire pentru un zâmbet perfect după tratamentul ortodontic"
    },
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie-dentara",
      description: "Detartraj și igienizare profesională pentru menținerea sănătății dinților aliniați"
    },
    {
      title: "Stomatologie copii",
      link: "/servicii/stomatologie-copii-piatra-neamt",
      description: "Tratamente ortodontice preventive pentru cei mici"
    }
  ],
  'estetica-dentara': [
    {
      title: "Ortodonție",
      link: "/servicii/ortodontie-piatra-neamt",
      description: "Alinierea dinților cu aparate fixe sau Invisalign pentru baza unui zâmbet perfect"
    },
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie-dentara",
      description: "Albire dentară și detartraj pentru întreținerea zâmbetului strălucitor"
    },
    {
      title: "Protetica dentară",
      link: "/servicii/protetica-dentara",
      description: "Coroane și fațete ceramice pentru restaurări estetice"
    }
  ],
  'implant-dentar': [
    {
      title: "Chirurgie orală",
      link: "/servicii/chirurgie-orala",
      description: "Extracții și preparare pentru implant dentar"
    },
    {
      title: "Radiologie dentară",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      description: "CT dentar 3D pentru planificarea precisă a implantului"
    },
    {
      title: "Protetica dentară",
      link: "/servicii/protetica-dentara",
      description: "Coroane pe implanturi pentru finalizarea tratamentului"
    }
  ],
  'chirurgie-orala': [
    {
      title: "Implant dentar",
      link: "/servicii/implant-dentar",
      description: "Înlocuirea dinților lipsă cu implanturi dentare"
    },
    {
      title: "Radiologie dentară",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      description: "Imagistică avansată pentru planificarea intervențiilor chirurgicale"
    },
    {
      title: "Urgențe stomatologice",
      link: "/servicii/urgente-stomatologice",
      description: "Intervenții de urgență pentru abcese și fracturi dentare"
    }
  ],
  'profilaxie-dentara': [
    {
      title: "Parodontologie",
      link: "/servicii/parodontologie-piatra-neamt",
      description: "Tratament pentru gingivită și parodontoză"
    },
    {
      title: "Estetică dentară",
      link: "/servicii/estetica-dentara",
      description: "Albire profesională pentru un zâmbet strălucitor"
    },
    {
      title: "Stomatologie copii",
      link: "/servicii/stomatologie-copii-piatra-neamt",
      description: "Sigilări și fluorizări pentru prevenția cariilor la copii"
    }
  ],
  'parodontologie': [
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie-dentara",
      description: "Detartraj și igienizare pentru prevenirea bolilor parodontale"
    },
    {
      title: "Implant dentar",
      link: "/servicii/implant-dentar",
      description: "Soluții pentru dinții pierduți din cauza parodontozei"
    },
    {
      title: "Chirurgie orală",
      link: "/servicii/chirurgie-orala",
      description: "Grefe gingivale și intervenții parodontale complexe"
    }
  ],
  'protetica-dentara': [
    {
      title: "Implant dentar",
      link: "/servicii/implant-dentar",
      description: "Fundație stabilă pentru coroane și punți dentare"
    },
    {
      title: "Estetică dentară",
      link: "/servicii/estetica-dentara",
      description: "Fațete și coroane ceramice pentru un zâmbet natural"
    },
    {
      title: "Radiologie dentară",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      description: "Planificare digitală pentru lucrări protetice precise"
    }
  ],
  'radiologie-dentara': [
    {
      title: "Implant dentar",
      link: "/servicii/implant-dentar",
      description: "CT 3D pentru planificarea precisă a implanturilor"
    },
    {
      title: "Chirurgie orală",
      link: "/servicii/chirurgie-orala",
      description: "Imagistică pentru extracții complexe și măsele de minte"
    },
    {
      title: "Ortodonție",
      link: "/servicii/ortodontie-piatra-neamt",
      description: "Radiografii cefalometrice pentru planul de tratament ortodontic"
    }
  ],
  'stomatologie-copii': [
    {
      title: "Ortodonție",
      link: "/servicii/ortodontie-piatra-neamt",
      description: "Tratamente ortodontice preventive pentru copii"
    },
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie-dentara",
      description: "Sigilări, fluorizări și educație pentru igiena orală"
    },
    {
      title: "Tratament carii",
      link: "/servicii/tratament-carii",
      description: "Plombe și tratamente pentru dinții de lapte și permanenți"
    }
  ],
  'stomatologie-generala': [
    {
      title: "Tratament carii",
      link: "/servicii/tratament-carii",
      description: "Plombe și restaurări dentare"
    },
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie-dentara",
      description: "Controale regulate și detartraj profesional"
    },
    {
      title: "Urgențe stomatologice",
      link: "/servicii/urgente-stomatologice",
      description: "Asistență rapidă pentru dureri și probleme acute"
    }
  ],
  'tratament-carii': [
    {
      title: "Endodonție",
      link: "/servicii/endodontie-piatra-neamt",
      description: "Tratamente de canal pentru carii profunde"
    },
    {
      title: "Profilaxie dentară",
      link: "/servicii/profilaxie-dentara",
      description: "Prevenția cariilor prin detartraj și sigilări"
    },
    {
      title: "Protetica dentară",
      link: "/servicii/protetica-dentara",
      description: "Coroane și onlay-uri pentru restaurări extinse"
    }
  ],
  'urgente-stomatologice': [
    {
      title: "Chirurgie orală",
      link: "/servicii/chirurgie-orala",
      description: "Extracții de urgență și drenaj abcese"
    },
    {
      title: "Tratament carii",
      link: "/servicii/tratament-carii",
      description: "Tratarea cariilor dureroase"
    },
    {
      title: "Radiologie dentară",
      link: "/servicii/radiologie-dentara-piatra-neamt",
      description: "Diagnostic rapid cu radiografii digitale"
    }
  ]
};

// Related articles configuration for blog internal linking
export const relatedArticles: Record<string, { title: string; link: string; excerpt: string }[]> = {
  'aparat-dentar-adulti': [
    {
      title: "Cum pregătești copilul pentru prima vizită la dentist",
      link: "/blog/prima-vizita-copil-dentist",
      excerpt: "Sfaturi practice pentru părinți despre pregătirea copilului pentru dentist"
    },
    {
      title: "Albire dentară profesională în Piatra Neamț",
      link: "/blog/albire-dentara-piatra-neamt",
      excerpt: "Descoperă metodele de albire dentară și rezultatele pe care le poți obține"
    },
    {
      title: "Ai dinți care se mișcă? Cum recunoști și tratezi parodontoza",
      link: "/blog/parodontoza-tratament",
      excerpt: "Totul despre parodontoză: simptome, tratament și prevenire"
    }
  ],
  'albire-dentara-piatra-neamt': [
    {
      title: "Aparat dentar pentru adulți: metalic, ceramic sau Invisalign?",
      link: "/blog/aparat-dentar-adulti-piatra-neamt",
      excerpt: "Comparație detaliată între tipurile de aparate dentare pentru adulți"
    },
    {
      title: "Ai dinți care se mișcă? Cum recunoști și tratezi parodontoza",
      link: "/blog/parodontoza-tratament",
      excerpt: "Simptome, stadii și opțiuni de tratament pentru parodontoză"
    }
  ],
  'prima-vizita-copil-dentist': [
    {
      title: "Aparat dentar pentru adulți în Piatra Neamț",
      link: "/blog/aparat-dentar-adulti-piatra-neamt",
      excerpt: "Ghid complet despre aparatele dentare pentru adulți"
    },
    {
      title: "Măseaua de minte - când o lași în pace și când trebuie scoasă",
      link: "/blog/maseaua-de-minte",
      excerpt: "Totul despre extracția măselelor de minte și recuperare"
    }
  ],
  'maseaua-de-minte': [
    {
      title: "Urgență dentară: dinte rupt sau plombă căzută",
      link: "/blog/urgente-dentare-dinte-rupt",
      excerpt: "Ce măsuri să iei imediat când ai o urgență dentară"
    },
    {
      title: "Cum pregătești copilul pentru prima vizită la dentist",
      link: "/blog/prima-vizita-copil-dentist",
      excerpt: "Sfaturi practice pentru o experiență pozitivă la dentist"
    },
    {
      title: "Ai dinți care se mișcă? Tratamentul parodontozei",
      link: "/blog/parodontoza-tratament",
      excerpt: "Cum recunoști și tratezi parodontoza pas cu pas"
    }
  ],
  'urgente-dentare-dinte-rupt': [
    {
      title: "Măseaua de minte - când trebuie scoasă",
      link: "/blog/maseaua-de-minte",
      excerpt: "Ghid complet despre măselele de minte și extracția lor"
    },
    {
      title: "Ai dinți care se mișcă? Cum recunoști parodontoza",
      link: "/blog/parodontoza-tratament",
      excerpt: "Totul despre parodontoză și opțiunile de tratament"
    }
  ],
  'parodontoza-tratament': [
    {
      title: "Albire dentară profesională în Piatra Neamț",
      link: "/blog/albire-dentara-piatra-neamt",
      excerpt: "Metode de albire dentară și rezultatele pe care le poți obține"
    },
    {
      title: "Urgență dentară: dinte rupt sau plombă căzută",
      link: "/blog/urgente-dentare-dinte-rupt",
      excerpt: "Primul ajutor dentar și când să mergi urgent la dentist"
    },
    {
      title: "Aparat dentar pentru adulți în Piatra Neamț",
      link: "/blog/aparat-dentar-adulti-piatra-neamt",
      excerpt: "Comparație între aparate metalice, ceramice și Invisalign"
    }
  ]
};

// Recent blog articles for homepage
export const recentArticles = [
  {
    title: "Albire dentară profesională în Piatra Neamț | Opțiuni, prețuri și rezultate",
    link: "/blog/albire-dentara-piatra-neamt",
    excerpt: "Descoperă metodele de albire dentară disponibile, prețurile orientative și rezultatele pentru un zâmbet strălucitor.",
    date: "15 Noiembrie 2025"
  },
  {
    title: "Aparat dentar pentru adulți: metalic, ceramic sau Invisalign?",
    link: "/blog/aparat-dentar-adulti-piatra-neamt",
    excerpt: "Comparație detaliată între aparatele dentare metalice, ceramice și Invisalign pentru adulți.",
    date: "10 Noiembrie 2025"
  },
  {
    title: "Cum pregătești copilul pentru prima vizită la dentist",
    link: "/blog/prima-vizita-copil-dentist",
    excerpt: "Sfaturi practice pentru părinți despre cum să reducă anxietatea și să creeze o experiență pozitivă.",
    date: "5 Noiembrie 2025"
  }
];
