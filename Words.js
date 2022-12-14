//De 120 mest almindelige ord
const wordsArr = [
  {ord: "af", sætning: "Jeg fik dem ___ dig", rodetOrd: "fa"}, 
  {ord: "alle", sætning: "Han har ___ bøgerne i tasken", rodetOrd: "lela"}, 
  {ord: "alt", sætning: "Hun er ___ jeg har", rodetOrd: "tla"},
  {ord: "andre", sætning: "Han er ikke som de ___", rodetOrd: "deran"},
  {ord: "at", sætning: "Det er vigtigt ___ lære", rodetOrd: "ta"},
  {ord: "blev", sætning: "Jeg ___ væk i skoven", rodetOrd: "velb"},
  {ord: "bliver", sætning: "Hun ___ drillet", rodetOrd: "brivel"},
  {ord: "bort", sætning: "Læreren ser ___ fra det", rodetOrd: "brot"},
  {ord: "da", sætning: "Det er han ___ god til", rodetOrd: "ad"},
  {ord: "dag", sætning: "Den første ___ i ugen", rodetOrd: "gda"},
  {ord: "dem", sætning: "Det er ___ fra klubben", rodetOrd: "mde"},
  {ord: "den", sætning: "Det er ___ rigtige", rodetOrd: "edn"},
  {ord: "der", sætning: "___ er mange mennesker", rodetOrd: "rde"},
  {ord: "deres", sætning: "Det er ___ tasker", rodetOrd: "deesr"},
  {ord: "det", sætning: "___ er godt", rodetOrd: "tde"},
  {ord: "dig", sætning: "Jeg elsker ___", rodetOrd: "gdi"},
  {ord: "dog", sætning: "Hvor blev hun ___ af?", rodetOrd: "gdo"},
  {ord: "du", sætning: "___ kan godt", rodetOrd: "ud"},
  {ord: "efter", sætning: "Vi gør det ___ skole", rodetOrd: "tefre"},
  {ord: "en", sætning: "___ lang dag", rodetOrd: "ne"},
  {ord: "end", sætning: "Større ___ et hus", rodetOrd: "nde"},
  {ord: "er", sætning: "Det ___ det hele", rodetOrd: "re"},
  {ord: "et", sætning: "Det er ___ træ", rodetOrd: "te"},
  {ord: "far", sætning: "Han er din ___", rodetOrd: "raf"},
  {ord: "fik", sætning: "Der ___ jeg dig", rodetOrd: "ikf"},
  {ord: "fin", sætning: "Hun er for ___ til det", rodetOrd: "nif"},
  {ord: "for", sætning: "Det er ___ din skyld", rodetOrd: "fro"},
  {ord: "forbi", sætning: "Den fløj ___ mit hoved", rodetOrd: "rofbi"},
  {ord: "fra", sætning: "Den gave er ___ mig", rodetOrd: "rfa"},
  {ord: "fri", sætning: "Eleverne har fået ___", rodetOrd: "rfi"},
  {ord: "få", sætning: "Du kan ___ en ny", rodetOrd: "åf"},
  {ord: "gik", sætning: "Hun ___ ud", rodetOrd: "gki"},
  {ord: "glad", sætning: "Hun er ___ når hun smiler", rodetOrd: "dlag"},
  {ord: "godt", sætning: "Det smager ___", rodetOrd: "dgot"},
  {ord: "ham", sætning: "Hun fik ___ til sidst", rodetOrd: "mha"},
  {ord: "han", sætning: "___ er en dreng", rodetOrd: "nha"},
  {ord: "hans", sætning: "Hun har ___ jakke på", rodetOrd: "nhas"},
  {ord: "havde", sætning: "Den ___ han ikke i tasken", rodetOrd: "vahde"},
  {ord: "have", sætning: "Jeg skal ___  det hele", rodetOrd: "vahe"},
  {ord: "hele", sætning: "Den ældste i ___ familien", rodetOrd: "lehe"},
  {ord: "hen", sætning: "Hvor skal du ___?", rodetOrd: "nhe"},
  {ord: "hende", sætning: "Han er glad for ___", rodetOrd: "dnehe"},
  {ord: "her", sætning: "Den er ___", rodetOrd: "rhe"},
  {ord: "hjem", sætning: "Jeg vil ___", rodetOrd: "jmhe"},
  {ord: "hun", sætning: "___ er en pige", rodetOrd: "nhu"},
  {ord: "hvad", sætning: "___ er den lavet af?", rodetOrd: "dvha"},
  {ord: "hvis", sætning: "___ den ikke er her", rodetOrd: "shvi"},
  {ord: "hvor", sætning: "___ er den henne?", rodetOrd: "vhro"},
  {ord: "igen", sætning: "Nu skal vi til det ___", rodetOrd: "gein"},
  {ord: "ikke", sætning: "Jeg har ___ gjort det", rodetOrd: "kike"},
  {ord: "ind", sætning: "Vi skal ___ i varmen", rodetOrd: "dni"},
  {ord: "jeg", sætning: "___ hedder Knud", rodetOrd: "gje"},
  {ord: "jer", sætning: "Jeg gør det for ___", rodetOrd: "rej"},
  {ord: "jo", sætning: "Det kan ___ ikke passe", rodetOrd: "oj"},
  {ord: "kan", sætning: "Det ___ jeg ikke lide", rodetOrd: "nka"},
  {ord: "kommer", sætning: "Soldaten ___ hjem", rodetOrd: "romkme"},
  {ord: "kun", sætning: "Det er ___ lige nok", rodetOrd: "nuk"},
  {ord: "kunne", sætning: "De ___ ikke huske det", rodetOrd: "nuken"},
  {ord: "lang", sætning: "Han er fået en ___ næse", rodetOrd: "glan"},
  {ord: "lidt", sætning: "Det er ___ sjovt at høre på dem", rodetOrd: "dilt"},
  {ord: "lige", sætning: "Hun har ___ været her", rodetOrd: "gile"},
  {ord: "lille", sætning: "Fasanen har en ___ hjerne", rodetOrd: "ilell"},
  {ord: "løb", sætning: "Han ___ for livet", rodetOrd: "blø"},
  {ord: "man", sætning: "Det ___ siger, er man selv", rodetOrd: "nma"},
  {ord: "med", sætning: "De skal have det hele ___", rodetOrd: "dme"},
  {ord: "meget", sætning: "Det er en ___ lang film", rodetOrd: "tmege"},
  {ord: "men", sætning: "Ude godt, ___ hjemme bedst", rodetOrd: "nem"},
  {ord: "mere", sætning: "Nu kan jeg ikke spise ___", rodetOrd: "reem"},
  {ord: "mig", sætning: "De ved alt om ___", rodetOrd: "gim"},
  {ord: "min", sætning: "Det er ___ hund", rodetOrd: "nmi"},
  {ord: "mod", sætning: "Hvorfor gør de det ___ mig?", rodetOrd: "dmo"},
  {ord: "mon", sætning: "___ hun ved det?", rodetOrd: "nmo"},
  {ord: "må", sætning: "Det ___ vi ikke", rodetOrd: "åm"},
  {ord: "nej", sætning: "___, det er ikke sandt", rodetOrd: "enj"},
  {ord: "noget", sætning: "Det ved jeg ikke ___ om", rodetOrd: "gtnoe"},
  {ord: "nok", sætning: "Nu er det ___", rodetOrd: "kno"},
  {ord: "nu", sætning: "De har fri ___", rodetOrd: "un"},
  {ord: "når", sætning: "Han ___ ikke i skole til tiden", rodetOrd: "rnå"},
  {ord: "og", sætning: "Is ___ slik", rodetOrd: "go"},
  {ord: "også", sætning: "Det vil jeg ___", rodetOrd: "goås"},
  {ord: "om", sætning: "Historien handler ___ en pige", rodetOrd: "mo"},
  {ord: "op", sætning: "Kig ___", rodetOrd: "po"},
  {ord: "over", sætning: "De ligger ___ det hele", rodetOrd: "vero"},
  {ord: "på", sætning: "Den er ___ bordet", rodetOrd: "åp"},
  {ord: "sagde", sætning: "Det ___ hun ikke noget om", rodetOrd: "gasde"},
  {ord: "se", sætning: "___ dig for", rodetOrd: "es"},
  {ord: "selv", sætning: "Det kan du ___ være", rodetOrd: "vles"},
  {ord: "sidste", sætning: "Jeg elsker ___ skoledag", rodetOrd: "desist"},
  {ord: "sig", sætning: "Det kan godt lade ___ gøre", rodetOrd: "gsi"},
  {ord: "sin", sætning: "Hun tog ___ bog op", rodetOrd: "nsi"},
  {ord: "sine", sætning: "Han elsker ___ hunde", rodetOrd: "ines"},
  {ord: "skulle", sætning: "Det ___ hun gøre", rodetOrd: "lelusk"},
  {ord: "små", sætning: "De ___ børn i børnehaven", rodetOrd: "mås"},
  {ord: "som", sætning: "Det er ham, ___ synger", rodetOrd: "mso"},
  {ord: "stor", sætning: "Det er en ___ kæmpe", rodetOrd: "rost"},
  {ord: "store", sætning: "De trøjer er for ___", rodetOrd: "resto"},
  {ord: "så", sætning: "Jeg ___ ikke koncerten", rodetOrd: "ås"},
  {ord: "tid", sætning: "Det har vi ikke ___ til", rodetOrd: "dit"},
  {ord: "tog", sætning: "Tyven ___ diamanten", rodetOrd: "got"},
  {ord: "under", sætning: "Den ligger ___ sofaen", rodetOrd: "ndure"},
  {ord: "var", sætning: "Det ___ en dejlig sommer", rodetOrd: "rav"},
  {ord: "ved", sætning: "Det er ___ at blive mørkt", rodetOrd: "dve"},
  {ord: "vi", sætning: "Det har ___ fortjent", rodetOrd: "iv"},
  {ord: "vil", sætning: "Hun ___ have isen", rodetOrd: "ilv"},
  {ord: "ville", sætning: "Det ___ bare blive ved", rodetOrd: "illve"},
  {ord: "være", sætning: "Han skal ___ politibetjent", rodetOrd: "ærve"},
  {ord: "været", sætning: "Det har ___ en lang dag", rodetOrd: "ævret"},
  {ord: "år", sætning: "Vi ses til næste ___", rodetOrd: "rå"}
];