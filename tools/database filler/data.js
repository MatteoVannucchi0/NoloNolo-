/* eslint-disable no-unused-vars */
const employees = [
    {
      firstname: "Emmanuel",
      lastname: "Gibbs",
      dateOfBirth: "2022-09-02T18:25:43.511Z",
      loginInfo: {
        username: "Sonya Parks",
        password: "CND68LRM7YC",
        email: "lorem@neque.co.uk",
      },
      authorization: "employee",
    },
    {
      firstname: "Honorato",
      lastname: "Roth",
      dateOfBirth: "2021-09-06T18:25:43.511Z",
      loginInfo: {
        username: "Eleanor Avery",
        password: "PTO26QTI7WK",
        email: "dolor.dolor@facilisised.co.uk",
      },
      authorization: "employee",
    },
    {
      firstname: "Anika",
      lastname: "Atkinson",
      dateOfBirth: "2022-10-10T18:25:43.511Z",
      loginInfo: {
        username: "Martina Buchanan",
        password: "CST76DVZ1RE",
        email: "suspendisse.non@massalobortis.org",
      },
      authorization: "employee",
    },
    {
      firstname: "Marah",
      lastname: "Shaffer",
      dateOfBirth: "2021-01-27T18:25:43.511Z",
      loginInfo: {
        username: "Uma Little",
        password: "NRO41MIL9MC",
        email: "luctus.sit@quisqueornaretortor.edu",
      },
      authorization: "employee",
    },
    {
      firstname: "Lani",
      lastname: "Whitaker",
      dateOfBirth: "2021-03-04T18:25:43.511Z",
      loginInfo: {
        username: "Kyla Vargas",
        password: "VCD38BFS4HX",
        email: "lorem.eu.metus@feliseget.org",
      },
      authorization: "employee",
    },
    {
      firstname: "Jarrod",
      lastname: "Sweet",
      dateOfBirth: "2021-04-02T18:25:43.511Z",
      loginInfo: {
        username: "Byron Franks",
        password: "WDI77OMD2DD",
        email: "lacus.cras@temporeratneque.org",
      },
      authorization: "employee",
    },
    {
      firstname: "Malik",
      lastname: "Wooten",
      dateOfBirth: "2021-09-20T18:25:43.511Z",
      loginInfo: {
        username: "Eugenia Rowe",
        password: "VQP83KGW1RX",
        email: "vel@egetlaoreet.net",
      },
      authorization: "employee",
    },
    {
      firstname: "Keegan",
      lastname: "Vargas",
      dateOfBirth: "2021-11-12T18:25:43.511Z",
      loginInfo: {
        username: "Noelle Finley",
        password: "TME36WYR0FM",
        email: "in.molestie@temporarcu.org",
      },
      authorization: "employee",
    },
    {
      firstname: "Christopher",
      lastname: "Knowles",
      dateOfBirth: "2021-01-13T18:25:43.511Z",
      loginInfo: {
        username: "Adara Reeves",
        password: "OTG88CDO7NK",
        email: "vitae@nullatincidunt.net",
      },
      authorization: "employee",
    },
    {
      firstname: "Langley",
      lastname: "Haley",
      dateOfBirth: "2021-12-04T18:25:43.511Z",
      loginInfo: {
        username: "Shoshana Owen",
        password: "URU83RDR2FQ",
        email: "nulla.at@facilisisvitae.co.uk",
      },
      authorization: "employee",
    },
    {
      firstname: "Matteo",
      lastname: "Vannucchi",
      dateOfBirth: "2021-12-04T18:25:43.511Z",
      loginInfo: {
        username: "Matteo",
        password: "matteomatteo",
        email: "matteo@test.com",
      },
      authorization: "admin",
    },
    {
      firstname: "Michele",
      lastname: "Virelli",
      dateOfBirth: "2021-12-04T18:25:43.511Z",
      loginInfo: {
        username: "Michele",
        password: "michelemichele",
        email: "michele@test.com",
      },
      authorization: "admin",
    },
    {
      firstname: "Denis",
      lastname: "Pondini",
      dateOfBirth: "2021-12-04T18:25:43.511Z",
      loginInfo: {
        username: "Denis",
        password: "denisdenis",
        email: "denis@test.com",
      },
      authorization: "admin",
    },
];

const customers = [
    {
      firstname: "Wing",
      lastname: "Tucker",
      dateOfBirth: "2021-02-09T18:25:43.511Z",
      loginInfo: {
        username: "Honorato Montgomery",
        password: "ZUW23YVP1UE",
        email: "lorem.sit@malesuadafames.edu",
      },
      address: {
        country: "Russian Federation",
        city: "Phoenix",
        zipcode: "74742-084",
        streetAddress: "336-382 Quisque Road",
      },
    },
    {
      firstname: "Gallegos",
      lastname: "Huff",
      dateOfBirth: "2021-06-08T18:25:43.511Z",
      loginInfo: {
        username: "Myles Gibbs",
        password: "XCG75KPH8VP",
        email: "molestie@pellentesque.co.uk",
      },
      address: {
        country: "Russian Federation",
        city: "Whangarei",
        zipcode: "58348",
        streetAddress: "372-5242 Semper Avenue",
      },
    },
    {
      firstname: "Hatfield",
      lastname: "Ortiz",
      dateOfBirth: "2021-03-14T18:25:43.511Z",
      loginInfo: {
        username: "Baxter Perry",
        password: "WRE18NCV8NI",
        email: "nisi.mauris.nulla@commodohendrerit.net",
      },
      address: {
        country: "Australia",
        city: "Southaven",
        zipcode: "344117",
        streetAddress: "Ap #227-1667 Non, Road",
      },
    },
    {
      firstname: "Benjamin",
      lastname: "Dorsey",
      dateOfBirth: "2021-04-19T18:25:43.511Z",
      loginInfo: {
        username: "Neil Gray",
        password: "XWP56DWA6BQ",
        email: "neque.nullam.nisl@felis.co.uk",
      },
      address: {
        country: "Canada",
        city: "Comox",
        zipcode: "42767",
        streetAddress: "4630 Integer Avenue",
      },
    },
    {
      firstname: "Ursa",
      lastname: "Lowe",
      dateOfBirth: "2021-10-06T18:25:43.511Z",
      loginInfo: {
        username: "Bruno Palmer",
        password: "HIK72VBR1HP",
        email: "in.faucibus.orci@nuncullamcorper.com",
      },
      address: {
        country: "India",
        city: "Galway",
        zipcode: "135709",
        streetAddress: "Ap #788-8032 Egestas. St.",
      },
    },
    {
      firstname: "Cameron",
      lastname: "Carroll",
      dateOfBirth: "2021-03-30T18:25:43.511Z",
      loginInfo: {
        username: "Joy Serrano",
        password: "PUD34BGR7OF",
        email: "porttitor.eros@ullamcorpereueuismod.co.uk",
      },
      address: {
        country: "Poland",
        city: "Duisburg",
        zipcode: "B5E 1H6",
        streetAddress: "462-7032 Quis Street",
      },
    },
    {
      firstname: "Amaya",
      lastname: "Edwards",
      dateOfBirth: "2021-11-04T18:25:43.511Z",
      loginInfo: {
        username: "Kieran O'brien",
        password: "FYD71WZG1BD",
        email: "sed.leo.cras@elementumsemvitae.ca",
      },
      address: {
        country: "Germany",
        city: "Oviedo",
        zipcode: "7192 PE",
        streetAddress: "122-7661 Donec Rd.",
      },
    },
    {
      firstname: "Natalie",
      lastname: "Hull",
      dateOfBirth: "2021-03-22T18:25:43.511Z",
      loginInfo: {
        username: "Darius Murphy",
        password: "OFG64CJW4BE",
        email: "magna.malesuada.vel@conubianostra.net",
      },
      address: {
        country: "Turkey",
        city: "Yurimaguas",
        zipcode: "8982",
        streetAddress: "Ap #880-7955 Orci. Avenue",
      },
    },
    {
      firstname: "Zelda",
      lastname: "Hendrix",
      dateOfBirth: "2020-12-17T18:25:43.511Z",
      loginInfo: {
        username: "Dexter Kemp",
        password: "IEF39KIG5AH",
        email: "phasellus.vitae@pharetranam.ca",
      },
      address: {
        country: "Spain",
        city: "Coltauco",
        zipcode: "42-688",
        streetAddress: "Ap #388-5968 Sed Av.",
      },
    },
    {
      firstname: "Gray",
      lastname: "Bailey",
      dateOfBirth: "2022-01-02T18:25:43.511Z",
      loginInfo: {
        username: "Kiara Rivers",
        password: "HXS36ASP9QD",
        email: "justo.faucibus@elit.net",
      },
      address: {
        country: "Costa Rica",
        city: "Sasaram",
        zipcode: "677761",
        streetAddress: "992 Mauris Street",
      },
    },
    {
      firstname: "Ulric",
      lastname: "Price",
      dateOfBirth: "2022-04-29T18:25:43.511Z",
      loginInfo: {
        username: "Denise Horn",
        password: "GCA35EPS6EO",
        email: "nisi@metus.ca",
      },
      address: {
        country: "Netherlands",
        city: "Limón (Puerto Limón]",
        zipcode: "j8W 1B7",
        streetAddress: "Ap #132-8156 Feugiat Rd.",
      },
    },
    {
      firstname: "Brent",
      lastname: "Duke",
      dateOfBirth: "2022-09-26T18:25:43.511Z",
      loginInfo: {
        username: "Ferdinand Huff",
        password: "ZVT56JKY8OU",
        email: "eros.nec@quislectusnullam.com",
      },
      address: {
        country: "Vietnam",
        city: "Pazarcık",
        zipcode: "223416",
        streetAddress: "P.O. Box 774, 9913 Nisl Rd.",
      },
    },
    {
      firstname: "Maile",
      lastname: "Cervantes",
      dateOfBirth: "2022-01-11T18:25:43.511Z",
      loginInfo: {
        username: "Devin Blevins",
        password: "WUV66ENR2HU",
        email: "aliquam.eu@loremvehiculaet.edu",
      },
      address: {
        country: "Netherlands",
        city: "Oyo",
        zipcode: "864564",
        streetAddress: "P.O. Box 441, 3350 Quis Street",
      },
    },
    {
      firstname: "Mariko",
      lastname: "Wyatt",
      dateOfBirth: "2022-06-25T18:25:43.511Z",
      loginInfo: {
        username: "Cameron Salinas",
        password: "BJC45ETG5BR",
        email: "tempus.risus@eratvitae.ca",
      },
      address: {
        country: "Russian Federation",
        city: "Buckingham",
        zipcode: "5034",
        streetAddress: "7533 Dictum Ave",
      },
    },
    {
      firstname: "Kristen",
      lastname: "Martinez",
      dateOfBirth: "2022-02-13T18:25:43.511Z",
      loginInfo: {
        username: "Hop Boyd",
        password: "VXN85UDN1KS",
        email: "neque@lacus.org",
      },
      address: {
        country: "Ireland",
        city: "Mount Gambier",
        zipcode: "3195 KJ",
        streetAddress: "Ap #843-8904 Lacus. Road",
      },
    },
];

let products = [
  {
    name: "Ferrari 812 superfast",
    description:`La Ferrari di serie più potente di tutti i tempi è anche una granturismo guidabile tutti i giorni: i suoi 799 cavalli sanno essere brutali o docili a seconda della posizione del manettino sul volante. In fatto di prestazioni, oltre a un poderoso V12 aspirato con condotti di aspirazione a lunghezza variabile (regolati elettroidraulicamente), la Ferrari 812 Superfast può contare su un rapidissimo cambio a doppia frizione. Tutti i sistemi interagiscono con l'elettronica: dal differenziale autobloccante e-Diff ai controlli di stabilità, passando per le quattro ruote sterzanti (soluzione ereditata dalla Ferrari F12Tdf) e per gli ammortizzatori "intelligenti". Al debutto per una Ferrari il servosterzo elettrico, a sua volta collegato al sistema che gestisce la stabilità della vettura, il cosiddetto SSC (Side Slip Angol Control) di quinta generazione. Particolarmente curata l'aerodinamica, con soluzioni ispirate al mondo delle Formula 1: nella parte frontale ci sono flap mobili che si aprono al crescere della velocità per modificare i flussi d'aria sotto il fondo della vettura. Al retrotreno, davanti al vistoso estrattore, sono invece delle alette comandate elettricamente a modificare il coefficiente di penetrazione aerodinamica. Anche l'elaborato design della carrozzeria è funzionale all'aerodinamica e alla gestione dei flussi d'aria in aspirazione e agli sfoghi di calore.`,
    image: "./image/ferrari812superfast.jpg",
    category: "Automobili",
    subcategory: "Supercar",
    tags: [
      {
        key: "Marca",
        value: "Ferrari",
      },
    ],
    altproducts: [],
  },
  {
    name: "SF90 Stradale",
    description: `Un'auto incredibile con linee da navicella spaziale e prestazioni mai raggiunte: è la SF90 Stradale, la Ferrari più veloce di sempre, estrema in ogni parte che si pone al top della gamma del Cavallino e che si inserisce di diritto nella famiglia delle grandi supercar con numeri da record.

    E' la prima Ferrari ibrida plug-in con 1000 cv, ottenuti unendo propulsore termico e elettrico e che impiega solo 2,5 secondi per passare da 0 a 100 km/h e 6,7 secondi da 0 a 200 km/h. Un'auto definita "beyond", oltre in tutto, e lo dimostrano i numeri: la velocità massima è di 340 km/h e per percorrere un giro a Fiorano impiega 79 secondi, uno in meno del precedente record per un'auto di serie ottenuto con la LaFerrari. `,
    image: "./image/ferrariSF90Stradale.jpg",
    category: "Automobili",
    subcategory: "Supercar",
    tags: [
      {
        key: "Marca",
        value: "Ferrari",
      }
    ],
    altproducts: [
    ],
  },
  {
    name: "Porsche 911",
    description: `L'ottava generazione della Porsche 911 non tradisce la sua formula di successo: motore montato dietro l'asse posteriore (ovvero "a sbalzo"), due comodi posti anteriori che si sommano ai due strapuntini (utili più che altro come "estensione" del bagagliaio, che si trova sotto il cofano davanti) e prestazioni elevate che non vanno a discapito del comfort. Il 3.0 sei cilindri boxer biturbo è un'evoluzione di quello montato sulla precedente 911: i suoi 385 cavalli (che salgono a 450 nelle versioni S, e arrivano fino a 650 nelle 3.8 Turbo) spingono con vigore da poco sopra il minimo fino a 7500 giri. Nuovo, invece, il fulmineo cambio robotizzato a doppia frizione con otto marce; una più di prima. Gli interni miscelano elementi moderni (come la microscopica leva del cambio, da azionare con pollice e indice) e altri ispirati a quelle delle prime 911, quali la plancia a sviluppo orizzontale. Al centro di quest'ultima trova posto un grande schermo di 10,25'', che comanda un sistema multimediale ricco e connesso al web. Di qualità le finiture e ampie le possibilità di personalizzazione (anche degli esterni, dato che non mancano i paraurti sportivi opzionali).`,
    image: "./image/porsche911.jpg",
    category: "Automobili",
    subcategory: "Supercar",
    tags: [
      {
        key: "Marca",
        value: "Porsche",
      }
    ],
    altproducts: [],
  },
  {
    name: "Porsche Cayenne",
    description: `È dotata di un propulsore 550 CV con coppia di 750 Nm e, nonostante la potenza incrementata rispetto alla versione Turbo, continua ad avere un consumo medio di 11,5 litri per 100 km. Con questa configurazione la vettura può passare da 0 a 100 km/h in 4,5 secondi, con una velocità massima di 283 km/h.`,
    image: "./image/porscheCayenne.jpg",
    category: "Automobili",
    subcategory: "Lusso",
    tags: [
      {
        key: "Marca",
        value: "Porsche",
      }
    ],
    altproducts: [],
  },
  {
    name: "Lamborghini Urus",
    description: `Questa grande suv ha linee taglienti e un aspetto aggressivo come le coupé della casa italiana. Caratteristiche giustificate dalle prestazioni entusiasmanti della Urus non solo sull'asfalto (i cavalli sono 650 e il retrotreno sterzante favorisce l'agilità), ma anche sulla terra. Il sistema di trazione integrale, le sospensioni ad aria (che possono variare la distanza del fondo dell'auto dal suolo) e i programmi di guida specifici per l'off-road (optional), permettono di muoversi anche nel fuori strada. La meccanica della Urus è condivisa con altri modelli del gruppo Volkswagen (di cui la Lamborghini fa parte), come l'Audi Q7 e la Porsche Cayenne, ma la messa a punto è specifica per questo modello. Moderno (digitale la strumentazione configurabile) e lussuoso (molte le possibilità di personalizzazione) l'abitacolo della Urus è spazioso e proposto in configurazione a quattro o a cinque posti. Grande anche il baule, cui si accede facilmente dal portellone. A titolo di curiosità, ricordiamo che la Urus è la prima Lamborghini di serie dotata di un motore sovralimentato (il V8 è biturbo) e che non si tratta della prima off-road del marchio emiliano: l'ha preceduta la LM002 nel 1986.`,
    image: "./image/lamborghiniUrus.jpg",
    category: "Automobili",
    subcategory: "Lusso",
    tags: [
      {
        key: "Marca",
        value: "Lamborghini",
      }
    ],
    altproducts: [],
  },
  {
    name: "Lamborghini Huracan",
    description: `La Lamborghini Huracán, la più “accessibile” delle supercar di Sant’Agata Bolognese, è l'erede della Gallardo: infatti adotta un motore con la stessa architettura, un V10 aspirato di 5,2 litri. Il dieci cilindri è montato in posizione posteriore-centrale (alle spalle dell’abitacolo biposto), è costruito dalla Volkswagen e abbinato a un cambio a doppia frizione e sette marce. La Huracán Evo ha la trazione integrale: aiuta a scaricare a terra i 639 CV di potenza (ottenuti a 8000 giri) e i 600 Nm di coppia massima (a 6500 giri). Ma ci sono anche due versioni con la sola trazione posteriore: la Evo RWD, con qualche cavallo in meno (610) e di una trentina di kg più leggera, e la STO, con 639 CV, di impostazione prettamente corsaiola. La Super Trofeo Omologata deriva infatti dalle esperienze compiute nelle competizioni (la Huracán, fra l'altro, ha vinto tre volte la 24 ore di Daytona nella sua categoria) e prevede un'aerodinamica completamente rivista, con prese d'aria aggiuntive, una pinna posteriore per accrescere la stabilità e uno spoiler regolabile manualmente su tre posizioni, per variare l'equilibrio della vettura in base al tipo di percorso e alle preferenze del guidatore. La STO fa poi ampio uso di fibra di carbonio (nella carrozzeria e nei sedili), magnesio (per i cerchi) e altri materiali leggeri, oltre ad adottare un parabrezza più sottile, così da guadagnare 50 kg rispetto alla RWD e arrivare a 1339 kg a secco. Di quasi 30 centimetri più corta della Aventador (la carrozzeria misura 452 cm di lunghezza, è larga 193 cm e alta soltanto 117), la Huracán consente di scegliere fra diversi programmi di marcia per variare la risposta di motore, cambio, sterzo, sospensioni e aiuti elettronici, oltre alla ripartizione della coppia da parte del sistema 4x4 e al funzionamento della sterzatura integrale (anche al retrotreno): si può così privilegiare la reattività nell’uso “estremo” oppure la (relativa) comodità di marcia. Di spiccata impostazione sportiva è anche l’abitacolo, che però non rinuncia a uno stile raffinato e a materiali pregiati: disponibili anche rivestimenti in pelle nappa o Alcantara in numerose combinazioni di colore.`,
    image: "./image/lamborghiniHuracan.jpg",
    category: "Automobili",
    subcategory: "Supercar",
    tags: [
      {
        key: "Marca",
        value: "Lamborghini",
      }
    ],
    altproducts: [],
  },
  {
    name: "Rolex Cosmograph Daytona",
    description: `Il Rolex Cosmograph Daytona è un orologio con movimento meccanico a carica automatica, con funzioni di cronografo da polso e qualifica di cronometro ufficialmente certificato dal COSC.`,
    image: "./image/rolexCosmographDaytona.jpg",
    category: "Goielli",
    subcategory: "Orologi",
    tags: [],
    altproducts: [],
  },
  {
    name: "Rolex Submariner",
    description: `Rolex Submariner è l'orologio subacqueo per l'immersione nelle profondità marine. Al momento del suo lancio, nel 1953, il Rolex Submariner è stato il primo orologio Rolex subacqueo impermeabile fino a 100 metri.`,
    image: "./image/rolexSubmarine24k.png",
    category: "Goielli",
    subcategory: "Orologi",
    tags: [
      {
        key: "Tipologia oro",
        value: "24k"
      }
    ],
    altproducts: [],
  },
  {
    name: "Collana Cartier oro giallo 24k",
    description: `Una bellissima collana in oro 24k prodotta dal famoso marco Cartier. Fatta a mano da degli artigiani in una serie di processi di 4 mesi di durata. Oro proveniente da miniere regolamentate.`,
    image: "./image/collana24kCartier.jpg",
    category: "Goielli",
    subcategory: "Collane",
    tags: [
      {
        key: "Tipologia oro",
        value: "24k"
      }
    ],
    altproducts: [
],
  },
  {
    name: "Bracciale Cartier oro bianco 18k",
    description: `Un bellissimo bracciale in oro bianco 18k prodotta dal famoso marco Cartier. Fatta a mano da degli artigiani in una serie di processi di 4 mesi di durata. Oro proveniente da miniere regolamentate.`,
    image: "./image/braccialeCartierOroBianco.jpg",
    category: "Goielli",
    subcategory: "Bracciali",
    tags: [
      {
        key: "Tipologia oro",
        value: "Bianco"
      }
    ],
    altproducts: [],
  },
];

let units = [
  {
    name: "Ferrari 812 superfast ",
    condition: "perfect",
    price: 980,
    product: "",
    rentals: [],
  },
  {
    name: "Ferrari 812 superfast",
    condition: "minor flaw",
    price: 808,
    product: "",
    rentals: [],
  },
  {
    name: "SF90 stradale",
    condition: "broken",
    price: 0,
    product: "",
    rentals: [],
  },
  {
    name: "SF90 stradale",
    condition: "minor flaw",
    price: 900,
    product: "",
    rentals: [],
  },
  {
    name: "Porshe 911",
    condition: "minor flaw",
    price: 770,
    product: "",
    rentals: [],
  },
  {
    name: "Porshe 911",
    condition: "major flaw",
    price: 650,
    product: "",
    rentals: [],
  },
  {
    name: "Porshe Cayenne",
    condition: "minor flaw",
    price: 792,
    product: "",
    rentals: [],
  },
  {
    name: "Lamborghini Urus",
    condition: "major flaw",
    price: 880,
    product: "",
    rentals: [],
  },
  {
    name: "Lamborghini Huracan",
    condition: "perfect",
    price: 1050,
    product: "",
    rentals: [],
  },
  {
    name: "Rolex Cosmograph Daytona",
    condition: "perfect",
    price: 136,
    product: "",
    rentals: [],
  },
  {
    name: "Rolex Cosmograph Daytona",
    condition: "minor flaw",
    price: 120,
    product: "",
    rentals: [],
  },
  {
    name: "Rolex Cosmograph Daytona",
    condition: "major flaw",
    price: 90,
    product: "",
    rentals: [],
  },
  {
    name: "Rolex submariner",
    condition: "perfect",
    price: 130,
    product: "",
    rentals: [],
  },
  {
    name: "Collana Cartier oro giallo 24k",
    condition: "minor flaw",
    price: 80,
    product: "",
    rentals: [],
  },
  {
    name: "Bracciale Cartier oro bianco 18k",
    condition: "broken",
    price: 70,
    product: "",
    rentals: [],
  },
];

let rentals = [
  {
    customer: "",
    employee: undefined,
    prenotationDate: "2021-11-20T18:25:43.511Z",
    state: "pending",
    bill: undefined,
    startDate: "2021-11-23T00:00:00.000Z",
    expectedEndDate: "2021-11-29T00:00:00.000Z",
    actualEndDate: "",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2021-11-05T18:25:43.511Z",
    state: "pending",
    bill: "",
    startDate: "2021-11-10T00:00:00.000Z",
    expectedEndDate: "2021-12-23T00:00:00.000Z",
    actualEndDate: "",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2021-08-10T00:43:25.115Z",
    state: "pending",
    bill: "",
    startDate: "2021-08-15T00:00:00.000Z",
    expectedEndDate: "2021-08-01T00:00:00.000Z",
    actualEndDate: "",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2021-03-13T02:00:40.007Z",
    state: "open",
    bill: "",
    startDate: "2021-03-13T02:00:40.007Z",
    expectedEndDate: "2021-03-18T00:00:00.000Z",
    actualEndDate: "",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2017-05-19T13:00:54.829Z",
    state: "open",
    bill: "",
    startDate: "2017-06-19T13:00:54.829Z",
    expectedEndDate: "2017-05-21T13:00:54.829Z",
    actualEndDate: "",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2020-01-31T05:00:30.202Z",
    state: "open",
    bill: "",
    startDate: "2020-02-20T05:00:30.202Z",
    expectedEndDate: "2020-03-01T00:00:00.000Z",
    actualEndDate: "",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2020-12-28T02:00:50.364Z",
    state: "open",
    bill: "",
    startDate: "2021-01-01T02:00:50.364Z",
    expectedEndDate: "2021-01-07T00:00:00.000Z",
    actualEndDate: "",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2021-04-15T02:00:15.453Z",
    state: "open",
    bill: "",
    startDate: "2021-04-15T00:00:00.000Z",
    expectedEndDate: "2021-04-19T00:00:00.000Z",
    actualEndDate: "",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2021-09-17T02:00:03.119Z",
    state: "close",
    bill: "",
    startDate: "2021-09-17T02:00:03.119Z",
    expectedEndDate: "2021-09-22T02:00:03.119Z",
    actualEndDate: "2021-09-23T02:00:03.119Z",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2021-04-01T15:00:43.411Z",
    state: "close",
    bill: "",
    startDate: "2021-04-05T15:00:43.411Z",
    expectedEndDate: "2021-04-08T15:00:43.411Z",
    actualEndDate: "2021-04-08T15:00:43.411Z",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2020-12-14T03:00:21.333Z",
    state: "close",
    bill: "",
    startDate: "2020-01-01T03:00:21.333Z",
    expectedEndDate: "2020-01-03T03:00:21.333Z",
    actualEndDate: "2020-01-07T03:00:21.333Z",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2021-02-14T14:30:00.039Z",
    state: "close",
    bill: "",
    startDate: "2021-02-30T14:30:00.039Z",
    expectedEndDate: "2021-03-01T14:00:30.039Z",
    actualEndDate: "2021-03-01T14:00:30.039Z",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2020-10-04T09:00:38.553Z",
    state: "close",
    bill: "",
    startDate: "2020-10-16T00:00:00.000Z",
    expectedEndDate: "2020-10-20T00:00:00.000Z",
    actualEndDate: "2020-10-20T00:00:38.553Z",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2020-10-20T06:00:29.427Z",
    state: "close",
    bill: "",
    startDate: "2020-10-28T00:00:00.000Z",
    expectedEndDate: "2020-10-30T00:00:00.000Z",
    actualEndDate: "2020-11-30T06:00:29.427Z",
    unit: "",
    priceEstimation: "",
  },
  {
    customer: "",
    employee: "",
    prenotationDate: "2020-02-18T17:00:15.406Z",
    state: "close",
    bill: "",
    startDate: "2020-02-25T00:00:00.000Z",
    expectedEndDate: "2020-02-28T00:00:00.000Z",
    actualEndDate: "2020-02-28T17:00:15.406Z",
    unit: "",
    priceEstimation: "",
  },
];

products[0].altproducts = [products[1], products[2], products[3]];
products[1].altproducts = [products[0]];
products[2].altproducts = [products[3]];
products[3].altproducts = [products[2]];
products[4].altproducts = [products[5]];
products[5].altproducts = [products[4]];
products[7].altproducts = [products[8]]; 
products[8].altproducts = [products[7]];

units[0].product = products[0];
units[1].product = products[0];
units[2].product = products[1];
units[3].product = products[1];
units[4].product = products[2];
units[5].product = products[2];
units[6].product = products[3];
units[7].product = products[4];
units[8].product = products[5];
units[9].product = products[6];
units[10].product = products[7];
units[11].product = products[7];
units[12].product = products[7];
units[13].product = products[8];
units[14].product = products[9];

//Operazioni ordinate per rental esaminato
rentals[0].customer = customers[0];
rentals[0].employee = employees[0];
rentals[0].unit = units[0];
rentals[1].customer = customers[0];
rentals[1].employee = employees[0];
rentals[1].unit = units[1];
rentals[2].customer = customers[0];
rentals[2].employee = employees[0];
rentals[2].unit = units[0];
rentals[3].customer = customers[0];
rentals[3].employee = employees[0];
rentals[3].unit = units[0];
rentals[4].customer = customers[0];
rentals[4].employee = employees[0];
rentals[4].unit = units[0];
rentals[5].customer = customers[0];
rentals[5].employee = employees[0];
rentals[5].unit = units[0];
rentals[6].customer = customers[0];
rentals[6].employee = employees[0];
rentals[6].unit = units[0];
rentals[7].customer = customers[0];
rentals[7].employee = employees[0];
rentals[7].unit = units[0];
rentals[8].customer = customers[0];
rentals[8].employee = employees[0];
rentals[8].unit = units[0];
rentals[9].customer = customers[0];
rentals[9].employee = employees[0];
rentals[9].unit = units[0];
rentals[10].customer = customers[0];
rentals[10].employee = employees[0];
rentals[10].unit = units[0];
rentals[11].customer = customers[0];
rentals[11].employee = employees[0];
rentals[11].unit = units[0];
rentals[12].customer = customers[0];
rentals[12].employee = employees[0];
rentals[12].unit = units[0];
rentals[13].customer = customers[0];
rentals[13].employee = employees[0];
rentals[13].unit = units[0];
rentals[14].customer = customers[0];
rentals[14].employee = employees[0];
rentals[14].unit = units[0];


for(const rental of rentals){
  if(rental.state == "pending")
    rental.employee = undefined;
  if(rental.state == 'pending' || rental.state == 'open'){
    rental.bill = undefined;
  }
  rental.bill = undefined;
  rental.priceEstimation = {};
}


module.exports = {employees, customers, products, units, rentals}