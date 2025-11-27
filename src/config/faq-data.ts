export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  questions: FAQQuestion[];
}

export const faqCategories: FAQCategory[] = [
  {
    category: "Detartraj cu ultrasunete și periaj profesional",
    questions: [
      {
        question: "De ce am nevoie de detartraj, dacă mă spăl zilnic pe dinți?",
        answer: "Periajul de acasă nu reușește să îndepărteze complet tartrul și placa bacteriană întărită; detartrajul cu ultrasunete curăță zonele greu accesibile și previne gingivita și parodontoza."
      },
      {
        question: "Cât de des este recomandat detartrajul?",
        answer: "În general, la 6-12 luni, în funcție de cât de repede se depune tartrul și de recomandarea medicului dentist."
      },
      {
        question: "Detartrajul doare sau zgârie dinții?",
        answer: "Nu doare, poate fi doar ușor neplăcut; ultrasunetele sparg depunerile de tartru, nu smalțul dintelui."
      }
    ]
  },
  {
    category: "Air-flow (prophy-jet)",
    questions: [
      {
        question: "Ce este tratamentul Air-flow și la ce mă ajută?",
        answer: "Air-flow folosește un jet de apă, aer și particule fine de pulbere pentru a curăța petele superficiale și placa moale, lăsând dinții mai curați și mai netezi."
      },
      {
        question: "Air-flow înlocuiește detartrajul cu ultrasunete?",
        answer: "Nu, Air-flow completează detartrajul; el nu îndepărtează tartrul dur, ci curăță și lustruiește suprafața dinților."
      },
      {
        question: "Air-flow albește dinții?",
        answer: "Nu este un tratament de albire, dar poate face dinții să pară mai albi prin îndepărtarea petelor de cafea, ceai, vin sau tutun."
      }
    ]
  },
  {
    category: "Sigilări dentare",
    questions: [
      {
        question: "Ce sunt sigilările dentare și de ce ar avea nevoie copilul meu de ele?",
        answer: "Sigilările sunt straturi subțiri de material aplicate pe suprafața măselelor pentru a împiedica resturile alimentare și bacteriile să se depună în șanțuri, reducând riscul de carii."
      },
      {
        question: "La ce vârstă se fac sigilările?",
        answer: "De obicei, după erupția măselelor definitive (în jur de 6-7 ani și apoi 11-13 ani), dar medicul stabilește momentul ideal."
      },
      {
        question: "Sigilările dor sau necesită anestezie?",
        answer: "Nu, sigilarea este o procedură non-invazivă, fără durere și fără freză, de obicei bine tolerată de copii."
      }
    ]
  },
  {
    category: "Fațete dentare",
    questions: [
      {
        question: "Ce sunt fațetele dentare și ce probleme pot corecta pentru mine?",
        answer: "Fațetele sunt foițe subțiri aplicate pe fața vizibilă a dinților, care pot corecta culoarea, forma, mici spații sau ușoare aliniamente inestetice."
      },
      {
        question: "Fațetele îmi strică dinții naturali?",
        answer: "Este necesară o șlefuire minimă, controlată, a smalțului; medicul îți explică exact cât și dacă ești un bun candidat pentru fațete."
      },
      {
        question: "Cât timp rezistă fațetele dentare?",
        answer: "Cu igienă bună și controale regulate, fațetele pot rezista mulți ani, însă durata depinde de obiceiurile tale (bruxism, fumat, alimentație)."
      }
    ]
  },
  {
    category: "Bijuterii dentare",
    questions: [
      {
        question: "O bijuterie dentară îmi poate strica smalțul?",
        answer: "Aplicată corect, cu materiale stomatologice, bijuteria nu deteriorează smalțul și poate fi îndepărtată fără a lăsa urme."
      },
      {
        question: "Cât durează să-mi pun o bijuterie dentară?",
        answer: "Procedura este rapidă, de obicei 15-20 de minute, nedureroasă și fără anestezie."
      },
      {
        question: "Dacă mă răzgândesc, pot să o scot?",
        answer: "Da, medicul o poate îndepărta ușor și poate lustrui dintele pentru a reveni la aspectul inițial."
      }
    ]
  },
  {
    category: "Tratamentul cariilor",
    questions: [
      {
        question: "Cum îmi dau seama dacă am o carie?",
        answer: "Uneori apar dureri la rece sau dulce, alteori nu ai niciun simptom; doar controlul periodic și radiografiile pot depista cariile ascunse."
      },
      {
        question: "Ce se întâmplă dacă amân tratamentul unei carii?",
        answer: "Caria avansează, ajunge la nerv, poate necesita tratament de canal sau chiar extracție, crescând costurile și timpul de tratament."
      },
      {
        question: "Tratamentul cariei doare?",
        answer: "În majoritatea cazurilor, tratamentul se face cu anestezie locală și este confortabil, fără durere propriu-zisă."
      }
    ]
  },
  {
    category: "Plombe (obturații)",
    questions: [
      {
        question: "Ce este o plombă dentară?",
        answer: "Plomba este materialul cu care medicul reface dintele după ce a îndepărtat țesutul cariat, redându-i forma și funcția."
      },
      {
        question: "Cât timp rezistă o plombă?",
        answer: "Durata depinde de dimensiune, poziție, material și modul în care muști, dar poate fi de la câțiva ani la peste 10 ani."
      },
      {
        question: "După plombă pot mânca imediat?",
        answer: "În cazul plombelor fotopolimerizabile poți mânca relativ repede, dar este recomandat să aștepți puțin și să eviți masticația intensă pe dintele tratat în primele ore."
      }
    ]
  },
  {
    category: "Tratament de canal (endodonție)",
    questions: [
      {
        question: "Ce înseamnă tratamentul de canal pentru dintele meu?",
        answer: "Înseamnă curățarea, dezinfectarea și obturarea canalelor din rădăcina dintelui atunci când nervul este inflamat sau necrozat, pentru a salva dintele de la extracție."
      },
      {
        question: "Tratamentul de canal doare?",
        answer: "Se face sub anestezie, iar scopul lui este tocmai să elimine durerea; poți simți un disconfort ușor câteva zile după, dar acesta este temporar."
      },
      {
        question: "Câte ședințe sunt necesare pentru un tratament de canal?",
        answer: "Depinde de complexitatea cazului; uneori este suficientă o ședință, alteori pot fi necesare 2-3 vizite."
      }
    ]
  },
  {
    category: "Proteze dentare",
    questions: [
      {
        question: "Când am nevoie de o proteză dentară?",
        answer: "Când lipsesc mai mulți dinți și nu se pot înlocui cu punți sau implanturi, proteza dentară te ajută să mănânci și să zâmbești din nou."
      },
      {
        question: "Cât durează până mă obișnuiesc cu proteza?",
        answer: "Perioada de adaptare diferă de la o persoană la alta, dar în general câteva săptămâni; în acest timp pot fi necesare mici ajustări."
      },
      {
        question: "Cum îngrijesc corect o proteză dentară?",
        answer: "Se curăță zilnic, separat de dinții naturali, cu perie și produse speciale pentru proteze, și se păstrează în mediu umed când nu este purtată."
      }
    ]
  },
  {
    category: "Adiție de os",
    questions: [
      {
        question: "De ce am nevoie de adiție de os înainte de implant?",
        answer: "Când osul este prea subțire sau prea puțin, adiția de os reconstruiește volumul necesar pentru a susține un implant stabil."
      },
      {
        question: "Este dureroasă intervenția de adiție de os?",
        answer: "Se efectuează sub anestezie locală, astfel încât pe moment nu simți durere; ulterior poți avea disconfort și ușoară umflătură, controlate cu medicația recomandată."
      },
      {
        question: "Cât durează vindecarea după adiția de os?",
        answer: "În general, între câteva luni și 6-9 luni, în funcție de tipul de material folosit și zona tratată."
      }
    ]
  },
  {
    category: "Extracții dentare",
    questions: [
      {
        question: "Când este absolut necesară extracția unui dinte?",
        answer: "Atunci când dintele este irecuperabil (cariat profund, fracturat, mobil sever) și nu mai poate fi salvat prin alte tratamente."
      },
      {
        question: "Extracția doare?",
        answer: "Nu, se face sub anestezie locală; poți simți doar presiune, iar durerea de după se controlează cu medicamente prescrise de medic."
      },
      {
        question: "Ce nu am voie să fac după o extracție?",
        answer: "În primele 24 de ore trebuie evitate fumatul, băuturile fierbinți, clătirea energică și efortul fizic intens, pentru a nu desprinde cheagul de sânge."
      }
    ]
  },
  {
    category: "Tratamentul gingivitei",
    questions: [
      {
        question: "Cum îmi dau seama că am gingivită?",
        answer: "Gingivita se manifestă prin gingii roșii, umflate, sensibile, care sângerează la periaj sau spontan."
      },
      {
        question: "Cum se tratează gingivita?",
        answer: "Prin igienizare profesională (detartraj, periaj, eventual Air-flow), periaj corect acasă și folosirea mijloacelor auxiliare (ață, duș bucal, apă de gură)."
      },
      {
        question: "Gingivita poate reveni?",
        answer: "Da, dacă igiena orală este necorespunzătoare; controalele regulate ajută la prevenirea recidivei."
      }
    ]
  },
  {
    category: "Aparate dentare",
    questions: [
      {
        question: "De la ce vârstă se poate pune aparat dentar?",
        answer: "Aparatele mobile se pot folosi la copii, iar cele fixe de regulă după erupția majorității dinților permanenți; medicul ortodont stabilește momentul potrivit."
      },
      {
        question: "Doare purtarea aparatului dentar?",
        answer: "Poți simți disconfort sau sensibilitate câteva zile după aplicare și activări, dar acestea se diminuează în timp."
      },
      {
        question: "Cât durează, în general, tratamentul ortodontic?",
        answer: "De la aproximativ 12 luni până la 2-3 ani, în funcție de gravitatea cazului și de cooperarea pacientului."
      }
    ]
  },
  {
    category: "Invisalign",
    questions: [
      {
        question: "Ce este Invisalign?",
        answer: "Invisalign este un sistem de aliniatori transparenți, personalizați, care îndreaptă treptat dinții fără bracketurile metalice clasice."
      },
      {
        question: "Este Invisalign la fel de eficient ca aparatul dentar clasic?",
        answer: "Pentru multe cazuri, da; totuși, doar ortodontul poate spune dacă malpoziția ta poate fi corectată suficient cu Invisalign."
      },
      {
        question: "Câte ore pe zi trebuie purtați aliniatorii Invisalign?",
        answer: "De obicei 20-22 de ore pe zi, fiind îndepărtați doar pentru mese și periaj."
      }
    ]
  },
  {
    category: "Pedodonție (stomatologie copii)",
    questions: [
      {
        question: "De la ce vârstă ar trebui să duc copilul la dentist?",
        answer: "Ideal, primul control se face la apariția primilor dinți sau cel târziu în jurul vârstei de 1 an."
      },
      {
        question: "De ce trebuie tratați dinții de lapte, dacă oricum cad?",
        answer: "Pentru că dinții de lapte cariați dau dureri, infecții și pot afecta dinții permanenți și dezvoltarea armonioasă a maxilarelor."
      },
      {
        question: "Copilului meu îi va fi frică și va simți durere?",
        answer: "Se folosesc tehnici blânde de acomodare și, la nevoie, anestezie locală; scopul este ca vizita la dentist să fie o experiență cât mai plăcută."
      }
    ]
  },
  {
    category: "Radiografii panoramice (ORT)",
    questions: [
      {
        question: "Ce este radiografia panoramică (ORT)?",
        answer: "Este o imagine largă, 2D, a maxilarelor, dinților și articulațiilor, care ajută medicul să vadă structurile \"din interior\"."
      },
      {
        question: "Sunt radiațiile periculoase?",
        answer: "Doza de radiații este redusă și se folosesc măsuri de protecție; radiografia se indică doar când este cu adevărat necesară."
      },
      {
        question: "De ce am nevoie de panoramă înainte de tratament?",
        answer: "Pentru a depista probleme ascunse (rădăcini, chisturi, dinți incluși) și pentru a planifica corect tratamentul."
      }
    ]
  },
  {
    category: "Tomografie Computerizată (CBCT)",
    questions: [
      {
        question: "Ce este tomografia computerizată dentară (CBCT)?",
        answer: "CBCT oferă imagini 3D detaliate ale dinților și oaselor maxilare, mult mai precise decât o radiografie clasică."
      },
      {
        question: "De ce este necesară CBCT înainte de implant?",
        answer: "Pentru a măsura cu exactitate grosimea și înălțimea osului, poziția nervilor și a sinusurilor, reducând riscurile intervenției."
      },
      {
        question: "CBCT este dureroasă sau incomodă?",
        answer: "Nu, nu doare; trebuie doar să stai nemișcat câteva secunde în timpul scanării."
      }
    ]
  },
  {
    category: "Tratamentul aftelor bucale",
    questions: [
      {
        question: "De ce apar aftele în gură?",
        answer: "Cauzele pot fi multiple: mici traumatisme, stres, carențe nutritive sau factori imunologici; uneori nu se găsește o singură cauză clară."
      },
      {
        question: "Cum se tratează aftele bucale?",
        answer: "Prin geluri și soluții locale care reduc durerea și inflamația, ajustarea factorilor favorizanți și, la nevoie, investigații suplimentare recomandate de medic."
      },
      {
        question: "Când trebuie să vin la dentist pentru afte?",
        answer: "Dacă aftele sunt foarte dureroase, recidivează des sau nu se vindecă în 10-14 zile, este indicat un consult."
      }
    ]
  },
  {
    category: "Urgențe dentare",
    questions: [
      {
        question: "Ce se consideră urgență dentară?",
        answer: "Durerea intensă, umflăturile, abcesele, hemoragiile sau traumatismele (dinți fracturați sau scoși din alveolă) sunt situații de urgență."
      },
      {
        question: "Ce pot face acasă până ajung la dentist?",
        answer: "Poți lua un analgezic uzual (dacă nu ai contraindicații) și poți aplica comprese reci extern; nu pune pe dinte medicamente sau alcool și nu încerca \"leacuri\" agresive."
      },
      {
        question: "Pot veni fără programare în caz de urgență?",
        answer: "În caz de urgențe acute, clinicile din Piatra Neamț au de obicei intervale dedicate; este ideal să suni înainte pentru a fi preluat cât mai rapid."
      }
    ]
  },
  {
    category: "Cancer oral - diagnostic precoce",
    questions: [
      {
        question: "Ce semne în gură ar trebui să mă îngrijoreze?",
        answer: "Leziuni care nu se vindecă, pete roșii sau albe persistente, noduli, sângerări, durere sau senzație de corp străin care durează mai mult de două săptămâni."
      },
      {
        question: "Ce înseamnă screening pentru cancerul oral?",
        answer: "Este examinarea cavității orale de către medic, uneori cu ajutorul unor lumini speciale sau teste suplimentare, pentru a identifica leziuni suspecte cât mai devreme."
      },
      {
        question: "Cât de des ar trebui să fac un control pentru prevenție?",
        answer: "De regulă, o dată pe an, iar dacă fumezi sau consumi frecvent alcool, controalele ar trebui să fie și mai regulate, la recomandarea medicului."
      }
    ]
  },
  {
    category: "Tratament parodontoză",
    questions: [
      {
        question: "Ce este parodontoza și cum mă afectează?",
        answer: "Parodontoza este o boală a țesuturilor care susțin dintele (gingie și os), ducând la mobilitatea și, în timp, pierderea dinților dacă nu este tratată."
      },
      {
        question: "Se poate vindeca parodontoza?",
        answer: "Nu se \"vindecă\" complet, dar poate fi controlată; tratamentul reduce inflamația și încetinește sau oprește evoluția bolii."
      },
      {
        question: "Ce pot face eu ca pacient pentru a preveni sau controla parodontoza?",
        answer: "Igienă riguroasă acasă, renunțarea la fumat, controale și igienizări profesionale regulate și respectarea indicațiilor medicului parodontolog."
      }
    ]
  }
];

// Pentru SEO Schema - prima întrebare din fiecare categorie (21 total)
export const faqDataForSEO = faqCategories.map(cat => ({
  question: cat.questions[0].question,
  answer: cat.questions[0].answer
}));
