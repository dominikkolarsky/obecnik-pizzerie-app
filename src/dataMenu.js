const ing = {
  tomato: "tomato",
  mozzarella: "mozzarella",
  bazalka: "bazalka",
  zampiony: "žampiony",
  salamDolce: "salám dolce",
  sunka: "šunka",
  ananas: "ananas",
  // olivy: "černé olivy",
  paprika: "paprika",
  kukurice: "kukuřice",
  pikantniSalam: "pikantní salám",
  parmazan: "parmazán",
  feferonky: "feferonky",
  cibule: "cibule",
  vejce: "vejce",
  tunak: "tuňák",
  italskaKlobasa: "italská klobása",
  cervenaCibule: "červená cibule",
  parmskaSunka: "parmská šunka",
  rukola: "rukola",
  slanina: "slanina",
  olivovyOlej: "olivový olej",
  cesnek: "česnek",
  oregano: "oregano",
  smetana: "smetana",
  pancetta: "pancetta",
  listovySpenat: "listový špenát",
  rajcata: "rajčata",
  gorgonzola: "gorgonzela",
  mascarpone: "mascarpone",
  uzenyLosos: "uzený losos",
  platkyCitronu: "plátky citronu",
  panenka: "kousky vepřové panenky",
  beraniRohy: 'beraní rohy',
  niva: "niva",
};

export const dataPizzaTomato = [
  {
    name: "1. MARGARITA",
    allergens: "(1, 7)",
    ingredients: [ing.tomato, ing.mozzarella, ing.bazalka],
    price: "139,-",
  },
  {
    name: "2. SALAMI",
    allergens: "(1, 7, 12)",
    ingredients: [ing.tomato, ing.mozzarella, ing.salamDolce],
    price: "184,-",
  },
  {
    name: "3. AL COTTO",
    allergens: "(1, 7)",
    ingredients: [ing.tomato, ing.mozzarella, ing.sunka],
    price: "169,-",
  },
  {
    name: "4. HAWAI",
    allergens: "(1, 7, 9, 12)",
    ingredients: [ing.tomato, ing.mozzarella, ing.sunka, ing.ananas],
    price: "179,-",
  },
  {
    name: "5. CAPRICIOSA",
    allergens: "(1, 7)",
    ingredients: [ing.tomato, ing.mozzarella, ing.sunka, ing.zampiony],
    price: "179,-",
  },
  {
    name: "6. VEGETARIANA",
    allergens: " (1, 7, 12)",
    ingredients: [
      ing.tomato,
      ing.mozzarella,
      ing.zampiony,
      ing.paprika,
      ing.kukurice,
      ing.rajcata,
    ],
    price: "169,-",
  },
  {
    name: "7. PALERMO 🌶️🌶️",
    allergens: "(1, 7, 12)",
    ingredients: [
      ing.tomato,
      ing.mozzarella,
      ing.pikantniSalam,
      ing.paprika,
      ing.parmazan,
      ing.feferonky,
    ],
    price: "xxx,-",
  },
  {
    name: "8. MEXICANA 🌶️",
    allergens: "(1, 7, 12)",
    ingredients: [
      ing.tomato,
      ing.mozzarella,
      ing.pikantniSalam,
      ing.kukurice,
      ing.cibule,
      ing.vejce,
    ],
    price: "189,-",
  },
  {
    name: "9. AL TONNO",
    allergens: "(1, 4, 7, 12)",
    ingredients: [ing.tomato, ing.mozzarella, ing.tunak, ing.cibule],
    price: "194,-",
  },
  {
    name: "10. VALPOLICELLA 🌶️🌶️",
    allergens: "(1, 7, 12)",
    ingredients: [
      ing.tomato,
      ing.mozzarella,
      ing.italskaKlobasa,
      ing.cervenaCibule,
      ing.parmazan,
    ],
    price: "209,-",
  },
  {
    name: "11. PROSCIUTTO CRUDO",
    allergens: "(1, 7, 12)",
    ingredients: [
      ing.tomato,
      ing.mozzarella,
      ing.parmskaSunka,
      ing.rukola,
      ing.parmazan,
    ],
    price: "209,-",
  },
  {
    name: "12. QUATTRO SALAMI 🌶️",
    allergens: "(1, 7, 12)",
    ingredients: [
      ing.tomato,
      ing.mozzarella,
      ing.pikantniSalam,
      ing.salamDolce,
      ing.pancetta,
      ing.italskaKlobasa,
    ],
    price: "209,-",
  },
  {
    name: "13. OBECNÍK SPECIALLE",
    allergens: "(1, 7)",
    ingredients: [
      ing.tomato,
      ing.mozzarella,
      ing.pancetta,
      ing.panenka,
      ing.beraniRohy,
      ing.cesnek,
      ing.cervenaCibule
    ],
    price: "xxx,-",
  },
];

export const dataPizzaCream = [
  {
    name: "14. FUNGHI",
    allergens: "(1, 7, 12)",
    ingredients: [
      ing.smetana,
      ing.mozzarella, 
      ing.zampiony,
    ],
    price: "149,-",
  },
  {
    name: "15. POLLO CON SPINACI",
    allergens: "(1, 3, 7)",
    ingredients: [
      ing.smetana,
      ing.mozzarella,
      ing.pancetta,
      ing.listovySpenat,
      ing.cesnek,
    ],
    price: "194,-",
  },
  {
    name: "16. AL COTTO BIANKA",
    allergens: "(1, 7, 12)",
    ingredients: [
      ing.smetana,
      ing.mozzarella,
      ing.rajcata,
      ing.rukola,
      ing.parmazan
    ],
    price: "194,-",
  },
  {
    name: "17. ALBORI",
    allergens: "(1, 7)",
    ingredients: [
      ing.smetana,
      ing.mozzarella,
      ing.slanina,
      ing.niva,
      ing.cibule,
    ],
    price: "194,-",
  },
  {
    name: "18. QUATTRO FORMAGGI",
    allergens: "(1, 6, 7)",
    ingredients: [
      ing.smetana,
      ing.mozzarella,
      ing.gorgonzola,
      ing.mascarpone,
      ing.parmazan,
    ],
    price: "189,-",
  },
  {
    name: "19. FANTASTICCA",
    allergens: "(1, 4, 7, 12)",
    ingredients: [
      ing.smetana,
      ing.mozzarella,
      ing.listovySpenat,
      ing.uzenyLosos,
      ing.platkyCitronu,
    ],
    price: "209,-",
  },
];

export const dataPizzaBread = [
  {
    name: "20. ITALSKÝ CHLÉB",
    allergens: "(1)",
    ingredients: [ing.olivovyOlej, ing.cesnek, ing.oregano],
    price: "60,-",
  },
];
