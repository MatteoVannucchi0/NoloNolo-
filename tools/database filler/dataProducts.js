/* eslint-disable */
const products = [
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
  {
    name: "Jamalia Estes",
    description:
      "nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Lusso",
    tags: [],
    altproducts: [],
  },
  {
    name: "Joelle Macias",
    description:
      "Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa.",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Sportive",
    tags: [],
    altproducts: [],
  },
  {
    name: "Venus Vazquez",
    description:
      "luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Yatch",
    tags: [],
    altproducts: [],
  },
  {
    name: "Hedda Sweet",
    description:
      "adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat.",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Gommone",
    tags: [],
    altproducts: [],
  },
  {
    name: "Clayton Francis",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Bracciali",
    tags: [],
    altproducts: [],
  },
  {
    name: "Nasim Blackburn",
    description:
      "habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Orecchini",
    tags: [],
    altproducts: [],
  },
  {
    name: "Ima Miles",
    description:
      "tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Anelli",
    tags: [],
    altproducts: [],
  },
  {
    name: "Grace Conrad",
    description:
      "mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Lusso",
    tags: [],
    altproducts: [],
  },
  {
    name: "Callie Bullock",
    description:
      "magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Sportive",
    tags: [],
    altproducts: [],
  },
  {
    name: "Chester Bennett",
    description:
      "velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices.",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Yatch",
    tags: [],
    altproducts: [],
  },
  {
    name: "Ann Bartlett",
    description:
      "Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Gommone",
    tags: [],
    altproducts: [],
  },
  {
    name: "Dana Huffman",
    description:
      "hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero.",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Bracciali",
    tags: [],
    altproducts: [],
  },
  {
    name: "Hamilton Clarke",
    description:
      "id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Orecchini",
    tags: [],
    altproducts: [],
  },
  {
    name: "Heather Clay",
    description:
      "Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Anelli",
    tags: [],
    altproducts: [],
  },
  {
    name: "Drew Chase",
    description:
      "ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Lusso",
    tags: [],
    altproducts: [],
  },
  {
    name: "Kalia Mathis",
    description:
      "amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus,",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Sportive",
    tags: [],
    altproducts: [],
  },
  {
    name: "Sylvester Potter",
    description:
      "turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget,",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Yatch",
    tags: [],
    altproducts: [],
  },
  {
    name: "Thane Olson",
    description:
      "Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Gommone",
    tags: [],
    altproducts: [],
  },
  {
    name: "Gregory Weeks",
    description:
      "at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Bracciali",
    tags: [],
    altproducts: [],
  },
  {
    name: "Elizabeth Summers",
    description:
      "est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at,",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Orecchini",
    tags: [],
    altproducts: [],
  },
  {
    name: "Hector Black",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus.",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Anelli",
    tags: [],
    altproducts: [],
  },
  {
    name: "Samantha Schmidt",
    description:
      "Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Lusso",
    tags: [],
    altproducts: [],
  },
  {
    name: "Ursa Ruiz",
    description:
      "accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non,",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Sportive",
    tags: [],
    altproducts: [],
  },
  {
    name: "Lara Wilcox",
    description:
      "sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Yatch",
    tags: [],
    altproducts: [],
  },
  {
    name: "Asher Rich",
    description:
      "elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Gommone",
    tags: [],
    altproducts: [],
  },
  {
    name: "Rafael Leon",
    description:
      "vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit,",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Bracciali",
    tags: [],
    altproducts: [],
  },
  {
    name: "Drew Brady",
    description:
      "ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Orecchini",
    tags: [],
    altproducts: [],
  },
  {
    name: "Elton Wooten",
    description:
      "arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet,",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Anelli",
    tags: [],
    altproducts: [],
  },
  {
    name: "Britanney Baird",
    description:
      "sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris.",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Lusso",
    tags: [],
    altproducts: [],
  },
  {
    name: "Quail Blanchard",
    description:
      "Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Sportive",
    tags: [],
    altproducts: [],
  },
  {
    name: "Blaze Ward",
    description:
      "vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit,",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Yatch",
    tags: [],
    altproducts: [],
  },
  {
    name: "Orli Orr",
    description:
      "sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Gommone",
    tags: [],
    altproducts: [],
  },
  {
    name: "Len King",
    description:
      "nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna.",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Bracciali",
    tags: [],
    altproducts: [],
  },
  {
    name: "Josephine Strickland",
    description:
      "elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Orecchini",
    tags: [],
    altproducts: [],
  },
  {
    name: "Nasim Lee",
    description:
      "malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Anelli",
    tags: [],
    altproducts: [],
  },
  {
    name: "Dacey Roberts",
    description:
      "dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Lusso",
    tags: [],
    altproducts: [],
  },
  {
    name: "Allistair Murray",
    description:
      "neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec",
    image: "./image/nicepic.jpg",
    category: "Automobili",
    subcategory: "Sportive",
    tags: [],
    altproducts: [],
  },
  {
    name: "Briar Estrada",
    description:
      "dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    image: "./image/nicepic.jpg",
    category: "Gioielli",
    subcategory: "Yatch",
    tags: [],
    altproducts: [],
  },
  {
    name: "Kibo Simon",
    description:
      "Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius",
    image: "./image/nicepic.jpg",
    category: "Orologi",
    subcategory: "Gommone",
    tags: [],
    altproducts: [],
  },
  {
    name: "Brady Rivers",
    description:
      "dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi.",
    image: "./image/nicepic.jpg",
    category: "Barche",
    subcategory: "Bracciali",
    tags: [],
    altproducts: [],
  },
];

function random(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomProduct() {
  return products[random(0,products.length - 1)]
}

products.forEach(product => {
  const n = random(0,5);
  const set = new Set()
  for(let i = 0; i < n; i += 1){
    set.add(getRandomProduct())
  }

  product.altproducts = [...set]

});

module.exports = products