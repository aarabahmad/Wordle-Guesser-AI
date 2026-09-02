document.addEventListener('DOMContentLoaded', () => {
    let wordList = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "aroma", "caulk", "shake", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "harry", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "hasty", "trash", "fella", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "fetus", "butch", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "payer", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "gaily", "egret", "lilac", "sever", "field", "fluff", "hydro", "flack", "agape", "voice", "stead", "stalk", "berth", "madam", "night", "bland", "liver", "wedge", "augur", "roomy", "wacky", "flock", "angry", "bobby", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "unlit", "waste", "merit", "woven", "octal", "needy", "clown", "widow", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "eclat", "doubt", "parer", "chute", "stick", "trice", "alike", "sooth", "recap", "saint", "liege", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "unset", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "vomit", "ombre", "fanny", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "shine", "gecko", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave"];

    let customWords = [];
    try {
        const storedCustom = localStorage.getItem('wordle_custom_words');
        if (storedCustom) {
            customWords = JSON.parse(storedCustom);
            customWords.forEach(word => {
                if (!wordList.includes(word)) {
                    wordList.push(word);
                }
            });
        }
    } catch (e) {
        console.error('Failed to load custom words from localStorage', e);
    }

    let extendedWordList = [];
    async function loadExtendedDictionary() {
        try {
            const response = await fetch('https://cdn.jsdelivr.net/gh/tabatkins/wordle-list@main/words');
            if (response.ok) {
                const text = await response.text();
                extendedWordList = text.split('\n')
                    .map(w => w.trim().toLowerCase())
                    .filter(w => w.length === 5);
                if (state.isChallengeMode && state.challengeWord && !extendedWordList.includes(state.challengeWord)) {
                    extendedWordList.push(state.challengeWord);
                }
            }
        } catch (e) {
            console.error('Failed to load extended dictionary from CDN.', e);
        }
    }
    loadExtendedDictionary();
    let networkTimeOffset = 0;

    async function syncNetworkTime() {
        try {
            const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=UTC');
            if (response.ok) {
                const data = await response.json();
                if (data && data.dateTime) {
                    const networkUtc = new Date(data.dateTime).getTime();
                    const localTime = Date.now();
                    networkTimeOffset = networkUtc - localTime;
                }
            }
        } catch (e) {
            console.error('Failed to sync network time, using local system clock:', e);
        }
    }
    syncNetworkTime();

    function getSecureDate() {
        return new Date(Date.now() + networkTimeOffset);
    }

    function getDeviceFingerprint() {
        try {
            const savedFp = localStorage.getItem('wordle_persistent_fp');
            if (savedFp) return savedFp;

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            let fp = '';
            if (!ctx) {
                fp = 'no-canvas-' + navigator.userAgent.replace(/[^a-zA-Z0-9]/g, '');
            } else {
                ctx.textBaseline = "top";
                ctx.font = "14px 'Arial'";
                ctx.fillStyle = "#f60";
                ctx.fillRect(125, 1, 62, 20);
                ctx.fillStyle = "#069";
                ctx.fillText("WordleFingerprint!", 2, 15);
                ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
                ctx.fillText("WordleFingerprint!", 4, 17);
                const dataURL = canvas.toDataURL();
                let hash = 0;
                for (let i = 0; i < dataURL.length; i++) {
                    hash = ((hash << 5) - hash) + dataURL.charCodeAt(i);
                    hash |= 0;
                }
                fp = 'fp_' + [hash, screen.width + 'x' + screen.height, navigator.language, new Date().getTimezoneOffset()].join('_');
            }
            localStorage.setItem('wordle_persistent_fp', fp);
            return fp;
        } catch (e) {
            const fallback = 'fallback_' + Math.random().toString(36).substring(2, 9);
            try { localStorage.setItem('wordle_persistent_fp', fallback); } catch(err){}
            return fallback;
        }
    }

    async function getPublicIpAddress() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            if (response.ok) {
                const data = await response.json();
                return data.ip || '';
            }
        } catch (e) {
            console.error('Failed to retrieve IP address:', e);
        }
        return '';
    }

    const supabaseConfig = {
        url: 'https://dbahrwaqbqixfslvrhww.supabase.co', // e.g. 'https://your-project.supabase.co'
        anonKey: 'sb_publishable_hoXt4Igq_bcBBCiPfktXLA_QFT1rsdM' // e.g. 'your-anon-public-key'
    };

    let supabaseClient = null;
    try {
        if (window.supabase && typeof window.supabase.createClient === 'function') {
            supabaseClient = window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey);
        }
    } catch (e) {
        console.error('Failed to init Supabase client for realtime:', e);
    }

    // Challenge Mode Database Manager (Supabase REST API + Local Storage fallback)
    const ChallengeDb = {
        supabaseUrl: supabaseConfig.url || '',
        supabaseKey: supabaseConfig.anonKey || '',
        accessToken: '',
        userId: '',

        isConfigured() {
            return this.supabaseUrl && !this.supabaseUrl.includes('YOUR_') && this.supabaseUrl !== '' &&
                this.supabaseKey && !this.supabaseKey.includes('YOUR_') && this.supabaseKey !== '';
        },

        anonAuthDisabled: false,

        async ensureSession() {
            if (this.anonAuthDisabled) return null;
            if (this.accessToken && this.userId && this.sessionExpiresAt && this.sessionExpiresAt > Date.now()) {
                return { access_token: this.accessToken, user_id: this.userId };
            }
            let saved = null;
            try {
                const raw = localStorage.getItem('supabase_anon_session');
                if (raw) {
                    saved = JSON.parse(raw);
                    if (saved.expires_at && saved.expires_at > Date.now()) {
                        this.accessToken = saved.access_token;
                        this.userId = saved.user_id;
                        this.sessionExpiresAt = saved.expires_at;
                        return saved;
                    }
                }
            } catch (e) {
                console.error('Error reading saved session:', e);
            }

            if (!this.isConfigured()) return null;

            // Attempt to refresh existing session using refresh_token before creating a new user
            if (saved && saved.refresh_token) {
                try {
                    const refreshRes = await fetch(`${this.supabaseUrl}/auth/v1/token?grant_type=refresh_token`, {
                        method: 'POST',
                        headers: {
                            'apikey': this.supabaseKey,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ refresh_token: saved.refresh_token })
                    });
                    if (refreshRes.ok) {
                        const data = await refreshRes.json();
                        const session = {
                            access_token: data.access_token,
                            refresh_token: data.refresh_token || saved.refresh_token,
                            user_id: data.user ? data.user.id : (saved.user_id || this.userId),
                            expires_at: Date.now() + ((data.expires_in || 3600) * 1000) - 60000
                        };
                        localStorage.setItem('supabase_anon_session', JSON.stringify(session));
                        this.accessToken = session.access_token;
                        this.userId = session.user_id;
                        this.sessionExpiresAt = session.expires_at;
                        return session;
                    }
                } catch (e) {
                    console.error('Failed to refresh Supabase session:', e);
                }
            }

            // Fallback to new anonymous sign-in / signup
            try {
                const response = await fetch(`${this.supabaseUrl}/auth/v1/signup`, {
                    method: 'POST',
                    headers: {
                        'apikey': this.supabaseKey,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                });
                if (response.ok) {
                    const data = await response.json();
                    const session = {
                        access_token: data.access_token,
                        refresh_token: data.refresh_token || '',
                        user_id: data.user.id,
                        expires_at: Date.now() + ((data.expires_in || 3600) * 1000) - 60000
                    };
                    localStorage.setItem('supabase_anon_session', JSON.stringify(session));
                    this.accessToken = session.access_token;
                    this.userId = session.user_id;
                    this.sessionExpiresAt = session.expires_at;
                    return session;
                } else {
                    const text = await response.text();
                    if (text.includes('anonymous_provider_disabled')) {
                        this.anonAuthDisabled = true;
                        console.warn('Supabase Anonymous Sign-Ins are disabled in project settings. Operating with standard API key auth.');
                    } else {
                        console.error('Supabase anonymous sign-in failed:', text);
                    }
                }
            } catch (e) {
                console.error('Failed to establish authenticated session:', e);
            }
            return null;
        },

        getHeaders(session) {
            const headers = {
                'apikey': this.supabaseKey,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            };
            if (session && session.access_token) {
                headers['Authorization'] = `Bearer ${session.access_token}`;
            }
            return headers;
        },

        async createChallengeMetadata(challengeId, word) {
            if (this.isConfigured() && challengeId) {
                const session = await this.ensureSession();
                const metadata = {
                    challenge_id: challengeId.toLowerCase(),
                    challenge_word: word.toLowerCase(),
                    player_name: 'CREATOR',
                    guesses: 0,
                    time_seconds: 0,
                    won: false,
                    fingerprint: 'creator',
                    ip_address: null,
                    game_state: { guesses: [], guessWords: [] },
                    created_at: new Date().toISOString()
                };
                try {
                    const response = await fetch(`${this.supabaseUrl}/rest/v1/wordle_leaderboard`, {
                        method: 'POST',
                        headers: this.getHeaders(session),
                        body: JSON.stringify(metadata)
                    });
                    return response.ok;
                } catch (e) {
                    console.error('Failed to create challenge metadata in Supabase:', e);
                }
            }
            return false;
        },

        async fetchChallengeWord(challengeId) {
            if (this.isConfigured() && challengeId) {
                try {
                    const session = await this.ensureSession();
                    const response = await fetch(`${this.supabaseUrl}/rest/v1/wordle_leaderboard?challenge_id=eq.${encodeURIComponent(challengeId.toLowerCase())}&fingerprint=eq.creator&select=challenge_word`, {
                        method: 'GET',
                        headers: this.getHeaders(session)
                    });
                    if (response.ok) {
                        const data = await response.json();
                        return data && data.length > 0 ? data[0] : null;
                    }
                } catch (e) {
                    console.error('Failed to fetch challenge word from Supabase:', e);
                }
            }
            return null;
        },

        async getExistingRecord(challengeId, fingerprint, ipAddress) {
            if (this.isConfigured() && challengeId) {
                try {
                    const session = await this.ensureSession();
                    const orFilter = encodeURIComponent(`fingerprint.eq.${fingerprint},ip_address.eq.${ipAddress}`);
                    const response = await fetch(`${this.supabaseUrl}/rest/v1/wordle_leaderboard?challenge_id=eq.${encodeURIComponent(challengeId.toLowerCase())}&or=(${orFilter})`, {
                        method: 'GET',
                        headers: this.getHeaders(session)
                    });
                    if (response.ok) {
                        return await response.json();
                    } else {
                        console.error('Supabase getExistingRecord response error:', await response.text());
                    }
                } catch (e) {
                    console.error('Failed to fetch existing record from Supabase:', e);
                }
            }
            return null;
        },

        async initializeSession(challengeId, word, fingerprint, ipAddress) {
            if (this.isConfigured() && challengeId) {
                const session = await this.ensureSession();
                const activeFingerprint = (session ? session.user_id : null) || fingerprint || getDeviceFingerprint();
                const gameSession = {
                    challenge_id: challengeId.toLowerCase(),
                    challenge_word: word.toLowerCase(),
                    player_name: '',
                    guesses: 0,
                    time_seconds: 0,
                    won: false,
                    fingerprint: activeFingerprint,
                    ip_address: ipAddress,
                    game_state: { guesses: [], guessWords: [] },
                    created_at: new Date().toISOString()
                };
                try {
                    const response = await fetch(`${this.supabaseUrl}/rest/v1/wordle_leaderboard`, {
                        method: 'POST',
                        headers: this.getHeaders(session),
                        body: JSON.stringify(gameSession)
                    });
                    return response.ok;
                } catch (e) {
                    console.error('Failed to initialize session in Supabase:', e);
                    return false;
                }
            }
            return true;
        },

        async updateProgress(challengeId, fingerprint, guesses, guessWords) {
            if (this.isConfigured() && challengeId && fingerprint) {
                try {
                    const session = await this.ensureSession();
                    const activeFingerprint = (session ? session.user_id : null) || fingerprint;
                    const progress = {
                        game_state: { guesses, guessWords }
                    };
                    const response = await fetch(`${this.supabaseUrl}/rest/v1/wordle_leaderboard?challenge_id=eq.${encodeURIComponent(challengeId.toLowerCase())}&fingerprint=eq.${encodeURIComponent(activeFingerprint)}`, {
                        method: 'PATCH',
                        headers: this.getHeaders(session),
                        body: JSON.stringify(progress)
                    });
                    if (!response.ok) {
                        console.error('Supabase updateProgress error:', await response.text());
                    }
                } catch (e) {
                    console.error('Failed to update progress in Supabase:', e);
                }
            }
        },

        async submitScore(challengeId, word, playerName, guesses, timeSeconds, won) {
            const score = {
                player_name: playerName.trim(),
                guesses: parseInt(guesses, 10),
                time_seconds: parseInt(timeSeconds, 10),
                won: !!won,
                created_at: new Date().toISOString()
            };

            // 1. Save to local storage (always do this as a personal log/local history)
            try {
                const localData = JSON.parse(localStorage.getItem('wordle_challenge_leaderboards') || '{}');
                if (!localData[challengeId]) {
                    localData[challengeId] = [];
                }
                const scoreWithWord = { ...score, challenge_id: challengeId.toLowerCase(), challenge_word: word.toLowerCase() };
                const exists = localData[challengeId].some(s => s.player_name.toLowerCase() === score.player_name.toLowerCase() && s.guesses === score.guesses && s.time_seconds === score.time_seconds);
                if (!exists) {
                    localData[challengeId].push(scoreWithWord);
                    localStorage.setItem('wordle_challenge_leaderboards', JSON.stringify(localData));
                }
            } catch (e) {
                console.error('Failed to write to local leaderboard storage', e);
            }

            // 2. Submit to Supabase if configured
            if (this.isConfigured()) {
                try {
                    const session = await this.ensureSession();
                    let submitted = false;
                    const activeUserId = session ? session.user_id : null;
                    const fingerprint = activeUserId || state.fingerprint || getDeviceFingerprint();

                    if (fingerprint) {
                        // Try updating the existing session record
                        const patchResponse = await fetch(`${this.supabaseUrl}/rest/v1/wordle_leaderboard?challenge_id=eq.${encodeURIComponent(challengeId.toLowerCase())}&fingerprint=eq.${encodeURIComponent(fingerprint)}`, {
                            method: 'PATCH',
                            headers: this.getHeaders(session),
                            body: JSON.stringify(score)
                        });
                        if (patchResponse.ok) {
                            if (patchResponse.status === 204) {
                                submitted = true;
                            } else {
                                const updatedRows = await patchResponse.json();
                                if (Array.isArray(updatedRows) && updatedRows.length > 0) {
                                    submitted = true;
                                }
                            }
                        }
                    }
                    
                    if (!submitted) {
                        // Fallback to inserting a new record
                        const insertScore = {
                            ...score,
                            challenge_id: challengeId.toLowerCase(),
                            challenge_word: word.toLowerCase(),
                            fingerprint: fingerprint || null,
                            ip_address: state.ipAddress || null,
                            game_state: { guesses: state.guesses || [], guessWords: state.guessWords || [] }
                        };
                        const postResponse = await fetch(`${this.supabaseUrl}/rest/v1/wordle_leaderboard`, {
                            method: 'POST',
                            headers: this.getHeaders(session),
                            body: JSON.stringify(insertScore)
                        });
                        if (postResponse.ok) {
                            submitted = true;
                        } else {
                            console.error('Supabase insert response error:', await postResponse.text());
                        }
                    }
                    
                    return submitted;
                } catch (e) {
                    console.error('Failed to submit score to Supabase:', e);
                    return false;
                }
            }
            return true;
        },

        async getScores(challengeId) {
            // 1. Try to fetch from Supabase if configured
            if (this.isConfigured()) {
                try {
                    const session = await this.ensureSession();
                    const response = await fetch(`${this.supabaseUrl}/rest/v1/wordle_leaderboard?challenge_id=eq.${encodeURIComponent(challengeId.toLowerCase())}&guesses=gt.0&order=won.desc,guesses.asc,time_seconds.asc`, {
                        method: 'GET',
                        headers: this.getHeaders(session)
                    });
                    if (response.ok) {
                        return await response.json();
                    } else {
                        console.error('Supabase getScores response error:', await response.text());
                    }
                } catch (e) {
                    console.error('Failed to fetch scores from Supabase:', e);
                }
            }

            // 2. Fall back to local storage
            try {
                const localData = JSON.parse(localStorage.getItem('wordle_challenge_leaderboards') || '{}');
                const scores = localData[challengeId] || [];
                return scores.sort((a, b) => {
                    if (a.won !== b.won) return a.won ? -1 : 1;
                    if (a.guesses !== b.guesses) return a.guesses - b.guesses;
                    return a.time_seconds - b.time_seconds;
                });
            } catch (e) {
                console.error('Failed to read from local leaderboard storage', e);
                return [];
            }
        }
    };

    // Creator Challenges Local History Dashboard Helper
    const CreatorHistory = {
        saveChallenge(word, timestamp) {
            try {
                const history = JSON.parse(localStorage.getItem('wordle_creator_challenges') || '[]');
                const exists = history.some(item => item.word === word && item.timestamp === timestamp);
                if (!exists) {
                    history.push({ word, timestamp });
                    if (history.length > 50) history.shift();
                    localStorage.setItem('wordle_creator_challenges', JSON.stringify(history));
                }
            } catch (e) {
                console.error('Failed to save challenge to creator history', e);
            }
        },

        getChallenges() {
            try {
                const history = JSON.parse(localStorage.getItem('wordle_creator_challenges') || '[]');
                const now = Date.now();
                const filtered = history.filter(item => (now - item.timestamp) < 24 * 60 * 60 * 1000);
                if (filtered.length !== history.length) {
                    localStorage.setItem('wordle_creator_challenges', JSON.stringify(filtered));
                }
                return filtered.reverse(); // Newest first
            } catch (e) {
                console.error('Failed to read challenge history', e);
                return [];
            }
        }
    };

    function trackEvent(name, data = {}) {
        if (window.umami && typeof window.umami.track === 'function') {
            window.umami.track(name, data);
        }
    }

    const gameBoard = document.getElementById('game-board');
    const submitButton = document.getElementById('submit-button');
    const restartButton = document.getElementById('restart-button');
    const gameOverContainer = document.getElementById('game-over-container');
    const gameOverTitle = document.getElementById('game-over-title');
    const gameOverText = document.getElementById('game-over-text');
    const statusMessage = document.getElementById('status-message');
    const feedbackInput = document.getElementById('feedback-input');
    const actionArea = document.getElementById('action-area');
    const addWordContainer = document.getElementById('add-word-container');
    const addWordInput = document.getElementById('add-word-input');
    const addWordButton = document.getElementById('add-word-button');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const confettiCtx = confettiCanvas.getContext('2d');
    const difficultyNormalBtn = document.getElementById('difficulty-normal');
    const difficultyHardBtn = document.getElementById('difficulty-hard');
    const shareButton = document.getElementById('share-button');
    const howToPlayModal = document.getElementById('how-to-play-modal');
    const howToPlayButton = document.getElementById('how-to-play-button');
    const closeModalButton = document.getElementById('close-modal-button');

    const insightsPanel = document.getElementById('insights-panel');
    const remainingCount = document.getElementById('remaining-count');
    const topSuggestions = document.getElementById('top-suggestions');
    const dictionaryBadge = document.getElementById('dictionary-badge');
    const headerRow = document.getElementById('header-row');
    const headerTitle = document.getElementById('header-title');
    const difficultySelector = document.getElementById('difficulty-selector');
    const headerControlsContainer = document.getElementById('header-controls-container');

    // Challenge Mode DOM Selectors
    const challengeButton = document.getElementById('challenge-button');
    const gameOverChallengeButton = document.getElementById('game-over-challenge-button');
    const challengeModal = document.getElementById('challenge-modal');
    const closeChallengeModalButton = document.getElementById('close-challenge-modal-button');
    const challengeWordInput = document.getElementById('challenge-word-input');
    const challengeStatus = document.getElementById('challenge-status');
    const generateChallengeButton = document.getElementById('generate-challenge-button');
    const challengeLinkContainer = document.getElementById('challenge-link-container');
    const challengeLinkInput = document.getElementById('challenge-link-input');
    const copyChallengeLinkButton = document.getElementById('copy-challenge-link-button');
    const challengeBanner = document.getElementById('challenge-banner');
    const exitChallengeButton = document.getElementById('exit-challenge-button');
    const feedbackSubtext = document.getElementById('feedback-subtext');

    // Challenge Leaderboards Selectors
    const leaderboardModal = document.getElementById('leaderboard-modal');
    const closeLeaderboardModal = document.getElementById('close-leaderboard-modal');
    const leaderboardWordDisplay = document.getElementById('leaderboard-word-display');
    const leaderboardListContainer = document.getElementById('leaderboard-list-container');
    const leaderboardRefreshBtn = document.getElementById('leaderboard-refresh-btn');
    const leaderboardShareBtn = document.getElementById('leaderboard-share-btn');
    const challengeLeaderboardSubmitContainer = document.getElementById('challenge-leaderboard-submit-container');
    const leaderboardPlayerName = document.getElementById('leaderboard-player-name');
    const submitLeaderboardBtn = document.getElementById('submit-leaderboard-btn');
    const gameOverLeaderboardBtn = document.getElementById('game-over-leaderboard-btn');
    const creatorChallengesContainer = document.getElementById('creator-challenges-container');
    const creatorChallengesList = document.getElementById('creator-challenges-list');
    const creatorViewLeaderboardBtn = document.getElementById('creator-view-leaderboard-btn');
    const landingLeaderboardBtn = document.getElementById('landing-leaderboard-btn');

    // Challenge Landing & Dictionary Modal Selectors
    const challengeLandingOverlay = document.getElementById('challenge-landing-overlay');
    const acceptChallengeBtn = document.getElementById('accept-challenge-btn');
    const challengeLandingBackBtn = document.getElementById('challenge-landing-back-btn');
    const definitionModal = document.getElementById('definition-modal');
    const defWord = document.getElementById('def-word');
    const defPhonetic = document.getElementById('def-phonetic');
    const defContent = document.getElementById('def-content');
    const closeDefBtn = document.getElementById('close-def-btn');
    const shareImageButton = document.getElementById('share-image-button');
    const newGameButton = document.getElementById('new-game-button');
    const closeGameOverBtn = document.getElementById('close-game-over-btn');
    const statsButton = document.getElementById('stats-button');
    const statsModal = document.getElementById('stats-modal');
    const closeStatsModal = document.getElementById('close-stats-modal');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Mode Selection & Pass 'n Play DOM Selectors
    const modeSelectionOverlay = document.getElementById('mode-selection-overlay');
    const modeAiBtn = document.getElementById('mode-ai-btn');
    const modeChallengeBtn = document.getElementById('mode-challenge-btn');
    const hubViewChallengesBtn = document.getElementById('hub-view-challenges-btn');
    const modePassPlayBtn = document.getElementById('mode-pass-play-btn');
    const modeDailyBtn = document.getElementById('mode-daily-btn');
    const dailyBanner = document.getElementById('daily-banner');
    const dailyBannerDate = document.getElementById('daily-banner-date');
    const exitDailyButton = document.getElementById('exit-daily-button');
    const dailyResultOverlay = document.getElementById('daily-result-overlay');
    const dailyModeBadge = document.getElementById('daily-mode-badge');
    const keyboardContainer = document.getElementById('keyboard-container');

    const passPlaySetupOverlay = document.getElementById('pass-play-setup-overlay');
    const passPlayScreenWord = document.getElementById('pass-play-screen-word');
    const passPlayScreenHandover = document.getElementById('pass-play-screen-handover');
    const passPlayWordInput = document.getElementById('pass-play-word-input');
    const passPlayToggleVisibility = document.getElementById('pass-play-toggle-visibility');
    const passPlayEyeIcon = document.getElementById('pass-play-eye-icon');
    const passPlayStatus = document.getElementById('pass-play-status');
    const passPlaySubmitWordBtn = document.getElementById('pass-play-submit-word-btn');
    const passPlayCancelBtn = document.getElementById('pass-play-cancel-btn');
    const passPlayStartBtn = document.getElementById('pass-play-start-btn');
    const passPlayBanner = document.getElementById('pass-play-banner');
    const exitPassPlayButton = document.getElementById('exit-pass-play-button');

    // Mode Info Explanation DOM Selectors
    const modeInfoModal = document.getElementById('mode-info-modal');
    const modeInfoTitle = document.getElementById('mode-info-title');
    const modeInfoIcon = document.getElementById('mode-info-icon');
    const modeInfoIconContainer = document.getElementById('mode-info-icon-container');
    const modeInfoTagline = document.getElementById('mode-info-tagline');
    const modeInfoGraphics = document.getElementById('mode-info-graphics');
    const modeInfoActionBtn = document.getElementById('mode-info-action-btn');
    const modeInfoBackBtn = document.getElementById('mode-info-back-btn');

    // Live Multiplayer Room Selectors
    const modeLiveRoomBtn = document.getElementById('mode-live-room-btn');
    const liveRoomSetupModal = document.getElementById('live-room-setup-modal');
    const closeLiveRoomSetup = document.getElementById('close-live-room-setup');
    const liveTabCreateBtn = document.getElementById('live-tab-create-btn');
    const liveTabJoinBtn = document.getElementById('live-tab-join-btn');
    const liveTabCreateContent = document.getElementById('live-tab-create-content');
    const liveTabJoinContent = document.getElementById('live-tab-join-content');
    const liveHostNameInput = document.getElementById('live-host-name-input');
    const liveSecretWordInput = document.getElementById('live-secret-word-input');
    const liveRandomWordBtn = document.getElementById('live-random-word-btn');
    const liveCreateStatus = document.getElementById('live-create-status');
    const liveStartHostBtn = document.getElementById('live-start-host-btn');
    const liveGuestNameInput = document.getElementById('live-guest-name-input');
    const liveRoomCodeInput = document.getElementById('live-room-code-input');
    const liveJoinStatus = document.getElementById('live-join-status');
    const liveSubmitJoinBtn = document.getElementById('live-submit-join-btn');

    // Host Spectator Dashboard Selectors
    const liveRoomSpectatorModal = document.getElementById('live-room-spectator-modal');
    const spectatorRoomCodeDisplay = document.getElementById('spectator-room-code-display');
    const spectatorCopyLinkBtn = document.getElementById('spectator-copy-link-btn');
    const spectatorExitBtn = document.getElementById('spectator-exit-btn');
    const spectatorStatusBanner = document.getElementById('spectator-status-banner');
    const spectatorStatusText = document.getElementById('spectator-status-text');
    const spectatorWordDisplay = document.getElementById('spectator-word-display');
    const spectatorPlayerNameDisplay = document.getElementById('spectator-player-name-display');
    const spectatorHostNameDisplay = document.getElementById('spectator-host-name-display');
    const spectatorTimerDisplay = document.getElementById('spectator-timer-display');
    const spectatorBoard = document.getElementById('spectator-board');

    let state = {
        isRoomMode: false,
        roomCode: null,
        isHost: false,
        hostName: '',
        guestName: '',
        roomChannel: null,
        roomPollInterval: null,
        roomTimerInterval: null,
        spectatorBoardState: {
            guesses: [],
            guessWords: [],
            currentTyped: '',
            won: null
        }
    };
    let confettiParticles = [];
    const colorMap = { g: 'correct', y: 'present', b: 'absent' };
    const colorClasses = { absent: 'bg-absent', present: 'bg-present', correct: 'bg-correct' };

    // ── Live Room Multiplayer System ───────────────────
    function initLiveRoomState() {
        state.isRoomMode = false;
        state.roomCode = null;
        state.isHost = false;
        state.hostName = '';
        state.guestName = '';
        if (state.roomChannel) {
            try { state.roomChannel.unsubscribe(); } catch(e){}
            state.roomChannel = null;
        }
        if (state.roomPollInterval) {
            clearInterval(state.roomPollInterval);
            state.roomPollInterval = null;
        }
        if (state.roomTimerInterval) {
            clearInterval(state.roomTimerInterval);
            state.roomTimerInterval = null;
        }
        state.spectatorBoardState = {
            guesses: [],
            guessWords: [],
            currentTyped: '',
            won: null
        };
    }

    function generateRoomCode() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }

    function renderSpectatorBoard() {
        if (!spectatorBoard) return;
        spectatorBoard.innerHTML = '';
        const { guesses, guessWords, currentTyped } = state.spectatorBoardState;

        for (let r = 0; r < 6; r++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'flex justify-center gap-1.5';

            const guessFeedback = guesses[r];
            const word = guessWords[r] || (r === guesses.length ? currentTyped : '');

            for (let c = 0; c < 5; c++) {
                const tile = document.createElement('div');
                tile.className = 'spectator-tile border-2 font-bold font-mono transition-all duration-300';
                const letter = (word[c] || '').toUpperCase();
                tile.textContent = letter;

                if (guessFeedback) {
                    const fb = guessFeedback[c];
                    tile.classList.add('spectator-tile-reveal');
                    if (fb === 'correct') {
                        tile.classList.add('bg-green-500', 'text-white', 'border-green-500');
                    } else if (fb === 'present') {
                        tile.classList.add('bg-yellow-500', 'text-white', 'border-yellow-500');
                    } else {
                        tile.classList.add('bg-slate-500', 'text-white', 'border-slate-500');
                    }
                } else if (letter) {
                    tile.classList.add('border-slate-400', 'text-slate-800', 'dark:text-slate-100', 'pop-in');
                } else {
                    tile.classList.add('border-slate-200', 'dark:border-slate-800', 'text-slate-300');
                }
                rowDiv.appendChild(tile);
            }
            spectatorBoard.appendChild(rowDiv);
        }
    }

    function broadcastRoomEvent(event, payload) {
        if (!state.isRoomMode || state.isHost || !state.roomCode) return;
        if (!state.roomChannel && supabaseClient) {
            state.roomChannel = supabaseClient.channel(`room_${state.roomCode}`);
            state.roomChannel.subscribe();
        }
        if (state.roomChannel) {
            try {
                state.roomChannel.send({
                    type: 'broadcast',
                    event: event,
                    payload: payload
                });
            } catch (e) {
                console.error('Failed to send broadcast event:', e);
            }
        }
    }

    function handleSpectatorEvent(event, data) {
        if (!data) return;
        const payload = (data && data.payload) ? data.payload : data;
        if (!payload) return;

        if (event === 'join') {
            const name = payload.guestName || 'Friend';
            if (spectatorPlayerNameDisplay) spectatorPlayerNameDisplay.textContent = name;
            if (spectatorStatusText) spectatorStatusText.textContent = `${name} is currently playing!`;
            if (spectatorStatusBanner) {
                spectatorStatusBanner.className = 'flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 p-2.5 rounded-xl text-xs font-bold text-emerald-800 dark:text-emerald-300';
            }
            startSpectatorTimer();
        } else if (event === 'typing') {
            state.spectatorBoardState.currentTyped = payload.currentTyped || '';
            renderSpectatorBoard();
            if (spectatorStatusText) {
                const playerName = spectatorPlayerNameDisplay.textContent || 'Player';
                spectatorStatusText.textContent = `${playerName} is typing guess ${(payload.guessCount || 0) + 1}...`;
            }
        } else if (event === 'guess') {
            state.spectatorBoardState.guesses = payload.guesses || [];
            state.spectatorBoardState.guessWords = payload.guessWords || [];
            state.spectatorBoardState.currentTyped = '';
            renderSpectatorBoard();
            if (spectatorStatusText) {
                const playerName = spectatorPlayerNameDisplay.textContent || 'Player';
                spectatorStatusText.textContent = `${playerName} submitted guess ${state.spectatorBoardState.guesses.length}/6`;
            }
        } else if (event === 'complete') {
            state.spectatorBoardState.guesses = payload.guesses || state.spectatorBoardState.guesses;
            state.spectatorBoardState.guessWords = payload.guessWords || state.spectatorBoardState.guessWords;
            state.spectatorBoardState.currentTyped = '';
            state.spectatorBoardState.won = payload.won;
            renderSpectatorBoard();

            if (state.roomTimerInterval) {
                clearInterval(state.roomTimerInterval);
                state.roomTimerInterval = null;
            }

            const playerName = payload.guestName || spectatorPlayerNameDisplay.textContent || 'Player';
            if (payload.won) {
                if (spectatorStatusText) spectatorStatusText.textContent = `🎉 ${playerName} cracked the word in ${payload.guessCount} tries!`;
                if (spectatorStatusBanner) {
                    spectatorStatusBanner.className = 'flex items-center justify-center gap-2 bg-green-100 dark:bg-green-950/50 border border-green-300 p-2.5 rounded-xl text-xs font-bold text-green-800 dark:text-green-200';
                }
                launchConfetti();
                sounds?.win.triggerAttackRelease(["C4", "E4", "G4", "C5"], 0.4);
            } else {
                if (spectatorStatusText) spectatorStatusText.textContent = `😔 ${playerName} ran out of attempts!`;
                if (spectatorStatusBanner) {
                    spectatorStatusBanner.className = 'flex items-center justify-center gap-2 bg-rose-100 dark:bg-rose-950/50 border border-rose-300 p-2.5 rounded-xl text-xs font-bold text-rose-800 dark:text-rose-200';
                }
                sounds?.lose.triggerAttackRelease(["C3", "B2", "Bb2", "A2"], 0.5);
            }

            const specActions = document.getElementById('spectator-match-actions');
            if (specActions) specActions.classList.remove('hidden');

            showHostMatchResultModal(payload);
        }
    }

    function showHostMatchResultModal(payload) {
        const hostMatchResultModal = document.getElementById('host-match-result-modal');
        if (!hostMatchResultModal) return;

        const iconEl = document.getElementById('host-result-icon');
        const titleEl = document.getElementById('host-result-title');
        const subtitleEl = document.getElementById('host-result-subtitle');
        const guessesEl = document.getElementById('host-result-guesses');
        const timeEl = document.getElementById('host-result-time');
        const wordEl = document.getElementById('host-result-word');
        const emojiGridEl = document.getElementById('host-result-emoji-grid');

        const playerName = payload.guestName || spectatorPlayerNameDisplay?.textContent || 'Player';
        const won = payload.won;
        const guessCount = payload.guessCount || (payload.guesses ? payload.guesses.length : 6);
        const secretWord = (spectatorWordDisplay ? spectatorWordDisplay.textContent : state.challengeWord || '').toUpperCase();

        const elapsedSeconds = spectatorStartTime ? Math.floor((Date.now() - spectatorStartTime) / 1000) : 0;
        const m = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
        const s = String(elapsedSeconds % 60).padStart(2, '0');
        const timeStr = `${m}:${s}`;

        if (won) {
            if (iconEl) iconEl.textContent = '🎉';
            if (titleEl) titleEl.textContent = `${playerName} Solved It!`;
            if (subtitleEl) subtitleEl.textContent = `Cracked the secret word in ${guessCount} ${guessCount === 1 ? 'try' : 'tries'}!`;
        } else {
            if (iconEl) iconEl.textContent = '😔';
            if (titleEl) titleEl.textContent = `${playerName} Out of Attempts!`;
            if (subtitleEl) subtitleEl.textContent = `Could not solve the secret word.`;
        }

        if (guessesEl) guessesEl.textContent = `${guessCount}/6`;
        if (timeEl) timeEl.textContent = timeStr;
        if (wordEl) wordEl.textContent = secretWord;

        if (emojiGridEl) {
            const emojiMap = { correct: '🟩', present: '🟨', absent: '⬛' };
            const guesses = payload.guesses || state.spectatorBoardState.guesses || [];
            if (Array.isArray(guesses) && guesses.length > 0) {
                const rowsHtml = guesses.map(g => {
                    if (Array.isArray(g)) {
                        return `<div>${g.map(f => emojiMap[f] || '⬛').join('')}</div>`;
                    }
                    return '';
                }).filter(Boolean).join('');
                emojiGridEl.innerHTML = rowsHtml;
                emojiGridEl.classList.remove('hidden');
            } else {
                emojiGridEl.classList.add('hidden');
            }
        }

        hostMatchResultModal.classList.remove('hidden');
    }

    function handleGuestRematch(payload) {
        if (!payload || !payload.secretWord) return;
        const newWord = payload.secretWord.toLowerCase();
        state.challengeWord = newWord;
        state.guesses = [];
        state.guessWords = [];
        state.guessCount = 0;
        state.isGameOver = false;
        state.currentTypedGuess = '';

        if (gameOverContainer) gameOverContainer.classList.add('hidden');
        startGame();
        showToast(`🔄 Round ${payload.round || 2} Started! Host set a new word.`);
    }

    let spectatorStartTime = 0;
    function startSpectatorTimer() {
        if (state.roomTimerInterval) clearInterval(state.roomTimerInterval);
        spectatorStartTime = Date.now();
        state.roomTimerInterval = setInterval(() => {
            const elapsedSeconds = Math.floor((Date.now() - spectatorStartTime) / 1000);
            const m = Math.floor(elapsedSeconds / 60).toString().padStart(2, '0');
            const s = (elapsedSeconds % 60).toString().padStart(2, '0');
            if (spectatorTimerDisplay) spectatorTimerDisplay.textContent = `${m}:${s}`;
        }, 1000);
    }

    async function createLiveRoom(hostName, secretWord) {
        initLiveRoomState();
        hostName = hostName.trim() || 'Host';
        secretWord = secretWord.trim().toLowerCase();

        localStorage.setItem('wordle_host_name', hostName);
        const code = generateRoomCode();
        const challengeId = `room_${code}`;

        state.isHost = true;
        state.isRoomMode = true;
        state.roomCode = code;
        state.hostName = hostName;

        if (ChallengeDb.isConfigured()) {
            await ChallengeDb.createChallengeMetadata(challengeId, secretWord);
        }

        if (spectatorRoomCodeDisplay) spectatorRoomCodeDisplay.textContent = code;
        if (spectatorHostNameDisplay) spectatorHostNameDisplay.textContent = hostName;
        if (spectatorWordDisplay) spectatorWordDisplay.textContent = secretWord.toUpperCase();
        if (spectatorPlayerNameDisplay) spectatorPlayerNameDisplay.textContent = 'Waiting for player...';
        if (spectatorStatusText) spectatorStatusText.textContent = 'Waiting for player to join with room code...';
        if (spectatorStatusBanner) {
            spectatorStatusBanner.className = 'flex items-center justify-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 p-2.5 rounded-xl text-xs font-bold text-amber-800 dark:text-amber-300';
        }

        renderSpectatorBoard();

        // Show Spectator Modal
        if (liveRoomSetupModal) liveRoomSetupModal.classList.add('hidden');
        if (modeSelectionOverlay) modeSelectionOverlay.classList.add('hidden');
        if (liveRoomSpectatorModal) liveRoomSpectatorModal.classList.remove('hidden');

        // Connect Supabase Realtime Channel
        if (supabaseClient) {
            state.roomChannel = supabaseClient.channel(`room_${code}`);
            state.roomChannel
                .on('broadcast', { event: 'join' }, payload => handleSpectatorEvent('join', payload))
                .on('broadcast', { event: 'typing' }, payload => handleSpectatorEvent('typing', payload))
                .on('broadcast', { event: 'guess' }, payload => handleSpectatorEvent('guess', payload))
                .on('broadcast', { event: 'complete' }, payload => handleSpectatorEvent('complete', payload))
                .subscribe();
        }

        // Database Fallback Polling (Every 2 Seconds)
        state.roomPollInterval = setInterval(async () => {
            if (!state.isHost || !state.roomCode) return;
            if (ChallengeDb.isConfigured()) {
                try {
                    const session = await ChallengeDb.ensureSession();
                    const res = await fetch(`${ChallengeDb.supabaseUrl}/rest/v1/wordle_leaderboard?challenge_id=eq.room_${state.roomCode}&fingerprint=neq.creator&order=created_at.desc&limit=1`, {
                        headers: ChallengeDb.getHeaders(session)
                    });
                    if (res.ok) {
                        const records = await res.json();
                        if (records && records.length > 0) {
                            const rec = records[0];
                            let gameState = rec.game_state;
                            if (typeof gameState === 'string') {
                                try { gameState = JSON.parse(gameState); } catch (e) {}
                            }

                            const recGuesses = (gameState && Array.isArray(gameState.guesses)) ? gameState.guesses : [];
                            const recWords = (gameState && Array.isArray(gameState.guessWords)) ? gameState.guessWords : [];

                            if (rec.player_name && (spectatorPlayerNameDisplay.textContent === 'Waiting for player...' || spectatorPlayerNameDisplay.textContent === '')) {
                                handleSpectatorEvent('join', { guestName: rec.player_name });
                            }

                            if (recGuesses.length > state.spectatorBoardState.guesses.length) {
                                handleSpectatorEvent('guess', {
                                    guesses: recGuesses,
                                    guessWords: recWords,
                                    guessCount: recGuesses.length
                                });
                            }

                            if (rec.guesses > 0 && rec.won !== null && rec.won !== undefined && state.spectatorBoardState.won === null) {
                                if (recGuesses.length === 6 || rec.won === true) {
                                    handleSpectatorEvent('complete', {
                                        won: rec.won,
                                        guessCount: rec.guesses,
                                        guesses: recGuesses,
                                        guessWords: recWords,
                                        guestName: rec.player_name
                                    });
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.error('Room polling error:', e);
                }
            }
        }, 2000);
    }

    async function joinLiveRoom(code, guestName) {
        guestName = guestName.trim() || 'Guest';
        code = code.trim();

        if (liveJoinStatus) liveJoinStatus.textContent = 'Joining room...';

        localStorage.setItem('wordle_guest_name', guestName);
        const challengeId = `room_${code}`;

        let secretWord = null;
        if (ChallengeDb.isConfigured()) {
            const wordData = await ChallengeDb.fetchChallengeWord(challengeId);
            if (wordData && wordData.challenge_word) {
                secretWord = wordData.challenge_word;
            }
        }

        if (!secretWord) {
            if (liveJoinStatus) liveJoinStatus.textContent = 'Room not found! Check your code.';
            return;
        }

        initLiveRoomState();

        state.isChallengeMode = true;
        state.isRoomMode = true;
        state.roomCode = code;
        state.guestName = guestName;
        state.challengeWord = secretWord.toLowerCase();
        state.challengeIdOverride = challengeId;

        // DB Session init for guest
        const session = await ChallengeDb.ensureSession();
        state.fingerprint = session ? session.user_id : getDeviceFingerprint();
        state.ipAddress = await getPublicIpAddress();

        if (ChallengeDb.isConfigured()) {
            await ChallengeDb.initializeSession(challengeId, secretWord, state.fingerprint, state.ipAddress);
            // Save initial player_name
            try {
                await fetch(`${ChallengeDb.supabaseUrl}/rest/v1/wordle_leaderboard?challenge_id=eq.${challengeId}&fingerprint=eq.${state.fingerprint}`, {
                    method: 'PATCH',
                    headers: ChallengeDb.getHeaders(session),
                    body: JSON.stringify({ player_name: guestName })
                });
            } catch (e) {}
        }

        // Connect Supabase Realtime channel & broadcast 'join'
        if (supabaseClient) {
            state.roomChannel = supabaseClient.channel(`room_${code}`);
            state.roomChannel.on('broadcast', { event: 'rematch' }, (data) => {
                handleGuestRematch(data.payload);
            });
            state.roomChannel.subscribe((status) => {
                if (status === 'SUBSCRIBED') {
                    state.roomChannel.send({
                        type: 'broadcast',
                        event: 'join',
                        payload: { guestName }
                    });
                }
            });
        }

        if (liveRoomSetupModal) liveRoomSetupModal.classList.add('hidden');
        if (modeSelectionOverlay) modeSelectionOverlay.classList.add('hidden');

        showToast(`Joined Room ${code}! All the best! 🎮`);
        startGame();
    }

    let sounds;
    const initSounds = () => {
        if (sounds) return;
        sounds = {
            flip: new Tone.Synth({ oscillator: { type: 'sine' }, envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.1 } }).toDestination(),
            win: new Tone.PolySynth(Tone.Synth, { oscillator: { type: 'fatsawtooth' }, envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.2 } }).toDestination(),
            lose: new Tone.PolySynth(Tone.Synth, { oscillator: { type: 'fatsquare' }, envelope: { attack: 0.01, decay: 0.5, sustain: 0.1, release: 0.5 } }).toDestination(),
            invalid: new Tone.Synth({ oscillator: { type: 'triangle' }, envelope: { attack: 0.01, decay: 0.2, sustain: 0, release: 0.2 } }).toDestination(),
            type: new Tone.Synth({ oscillator: { type: 'sine' }, envelope: { attack: 0.001, decay: 0.02, sustain: 0.05, release: 0.02 } }).toDestination(),
        };
        sounds.type.volume.value = -12; // soft click
    };
    document.body.addEventListener('click', async () => {
        await Tone.start();
        initSounds();
    }, { once: true });

    function saveChallengeCompletion(challengeId, won, guesses) {
        if (!challengeId) return;
        try {
            const record = {
                completed: true,
                won: won,
                guessCount: guesses,
                guessWords: state.guessWords,
                guesses: state.guesses,
                timestamp: Date.now()
            };
            localStorage.setItem(`wordle_challenge_completed_${challengeId}`, JSON.stringify(record));
            localStorage.removeItem(`wordle_challenge_progress_${challengeId}`);
        } catch (e) {
            console.error('Failed to save challenge completion', e);
        }
    }

    function getChallengeCompletion(challengeId) {
        if (!challengeId) return null;
        try {
            const saved = localStorage.getItem(`wordle_challenge_completed_${challengeId}`);
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            console.error('Failed to get challenge completion', e);
            return null;
        }
    }

    function saveGameProgress() {
        try {
            if (state.isDailyMode) {
                const progress = {
                    date: getDailyDateKey(),
                    guesses: state.guesses,
                    guessWords: state.guessWords,
                    startTime: state.startTime
                };
                localStorage.setItem('wordle_daily_progress', JSON.stringify(progress));
            } else if (state.isChallengeMode) {
                const challengeId = getChallengeId();
                if (challengeId) {
                    const progress = {
                        guesses: state.guesses,
                        guessWords: state.guessWords,
                        startTime: state.startTime
                    };
                    localStorage.setItem(`wordle_challenge_progress_${challengeId}`, JSON.stringify(progress));
                    
                    // Sync progress to Supabase
                    if (state.fingerprint) {
                        ChallengeDb.updateProgress(challengeId, state.fingerprint, state.guesses, state.guessWords);
                    }
                }
            }
        } catch (e) {
            console.error('Failed to save game progress', e);
        }
    }

    async function verifyChallengeSession() {
        if (!state.isChallengeMode) return;

        const challengeId = getChallengeId();
        if (!challengeId) return;

        // Fetch session first to populate anonymous user ID
        const session = await ChallengeDb.ensureSession();
        state.fingerprint = session ? session.user_id : getDeviceFingerprint();
        state.ipAddress = await getPublicIpAddress();

        // 1. Show loading state on landing card
        const landingTitle = document.getElementById('challenge-landing-title');
        const landingText = document.getElementById('challenge-landing-text');
        const landingIcon = document.getElementById('challenge-landing-icon');
        const acceptBtn = document.getElementById('accept-challenge-btn');

        if (landingTitle) landingTitle.textContent = 'Verifying Challenge...';
        if (landingText) landingText.textContent = 'Checking for previous attempts on your device and network...';
        if (landingIcon) landingIcon.textContent = '⏳';
        if (acceptBtn) {
            acceptBtn.disabled = true;
            acceptBtn.innerHTML = `
                <div class="flex items-center justify-center gap-2">
                    <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Verifying...</span>
                </div>
            `;
        }

        let dbRecord = null;
        let isCompleted = false;
        let inProgressRecord = null;

        // 2. Fetch from Supabase if configured
        if (ChallengeDb.isConfigured()) {
            try {
                const records = await ChallengeDb.getExistingRecord(challengeId, state.fingerprint, state.ipAddress);
                if (records && records.length > 0) {
                    dbRecord = records;
                    const completedRecords = records.filter(r => r.guesses > 0);
                    const matchingFingerprint = records.find(r => r.fingerprint === state.fingerprint);
                    
                    if (completedRecords.length > 0) {
                        isCompleted = true;
                        const compRecord = completedRecords[0];
                        saveChallengeCompletion(challengeId, compRecord.won, compRecord.guesses);
                    } else if (matchingFingerprint && matchingFingerprint.guesses === 0) {
                        inProgressRecord = matchingFingerprint;
                    }
                }
            } catch (e) {
                console.error('Failed to verify challenge session with database:', e);
            }
        }

        // 3. Check local storage fallback
        const localCompletion = getChallengeCompletion(challengeId);
        if (localCompletion) {
            isCompleted = true;
        }

        let isExpired = false;
        if (state.challengeTimestamp) {
            const elapsed = Date.now() - state.challengeTimestamp;
            isExpired = elapsed > 24 * 60 * 60 * 1000;
        }

        // 4. Reset acceptBtn style
        if (acceptBtn) {
            acceptBtn.disabled = false;
            acceptBtn.innerHTML = 'Accept Challenge';
        }

        // 5. Update landing UI based on status
        if (isCompleted) {
            const comp = localCompletion || (dbRecord && dbRecord.filter(r => r.guesses > 0)[0]);
            if (landingTitle) landingTitle.textContent = 'Challenge Completed!';
            if (landingText) landingText.textContent = `You have already attempted this challenge. Score: ${comp.won ? (comp.guessCount || comp.guesses) : 'X'}/6.`;
            if (landingIcon) landingIcon.textContent = '🏆';
            if (acceptBtn) acceptBtn.classList.add('hidden');
            if (landingLeaderboardBtn) landingLeaderboardBtn.classList.remove('hidden');
            if (challengeLandingOverlay) {
                challengeLandingOverlay.classList.remove('hidden');
            }
        } else if (isExpired) {
            if (landingTitle) landingTitle.textContent = 'Challenge Closed!';
            if (landingText) landingText.textContent = 'This challenge was created more than 24 hours ago and has expired. You can no longer submit guesses, but you can view the final leaderboard below.';
            if (landingIcon) landingIcon.textContent = '🔒';
            if (acceptBtn) acceptBtn.classList.add('hidden');
            if (landingLeaderboardBtn) landingLeaderboardBtn.classList.remove('hidden');
            if (challengeLandingOverlay) {
                challengeLandingOverlay.classList.remove('hidden');
            }
        } else if (inProgressRecord) {
            // Restore from Supabase progress!
            if (challengeLandingOverlay) challengeLandingOverlay.classList.add('hidden');
            
            // Restore state fields
            const savedState = inProgressRecord.game_state || {};
            state.guesses = savedState.guesses || [];
            state.guessWords = savedState.guessWords || [];
            state.guessCount = state.guesses.length;
            state.startTime = inProgressRecord.created_at ? new Date(inProgressRecord.created_at).getTime() : Date.now();
            
            // Re-render
            gameBoard.innerHTML = '';
            for (let i = 0; i < 6; i++) {
                const row = document.createElement('div');
                row.className = 'flex justify-center gap-1.5';
                row.id = `row-${i}`;
                for (let j = 0; j < 5; j++) {
                    const tileContainer = document.createElement('div');
                    tileContainer.className = 'tile-container border-2 border-gray-200 rounded-md';
                    row.appendChild(tileContainer);
                }
                gameBoard.appendChild(row);
            }
            
            for (let i = 0; i < state.guessCount; i++) {
                const word = state.guessWords[i];
                const feedback = state.guesses[i];
                renderRowImmediate(i, word, feedback);
                processFeedback(word, feedback);
            }
            updateActiveRowTiles();
            updateKeyboardColors();
            feedbackInput.disabled = false;
            submitButton.disabled = false;
            feedbackInput.focus();
        } else {
            // Fresh game setup or local progress setup
            const localProgress = localStorage.getItem(`wordle_challenge_progress_${challengeId}`);
            if (localProgress) {
                // If local progress exists, just restore it and skip landing
                if (challengeLandingOverlay) challengeLandingOverlay.classList.add('hidden');
                restoreProgress();
            } else {
                // Normal accept challenge flow
                if (landingTitle) landingTitle.textContent = 'You Are Challenged!';
                if (landingText) landingText.textContent = 'A friend has created a secret 5-letter word for you to guess. Can you solve it in 6 tries?';
                if (landingIcon) landingIcon.textContent = '⚔️';
                if (acceptBtn) {
                    acceptBtn.disabled = false;
                    acceptBtn.classList.remove('hidden');
                }
                if (challengeLandingOverlay) {
                    challengeLandingOverlay.classList.remove('hidden');
                }
            }
        }
    }

    function renderRowImmediate(rowIdx, word, feedback) {
        const row = document.getElementById(`row-${rowIdx}`);
        if (!row || !word || !feedback) return;
        row.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const letter = word[i];
            const colorClass = colorClasses[feedback[i]];
            const tileContainer = document.createElement('div');
            tileContainer.className = 'tile-container';
            const tile = document.createElement('div');
            tile.className = 'tile is-flipped';
            const front = document.createElement('div');
            front.className = 'tile-front';
            front.textContent = letter.toUpperCase();
            const back = document.createElement('div');
            back.className = `tile-back ${colorClass}`;
            back.textContent = letter.toUpperCase();
            tile.appendChild(front);
            tile.appendChild(back);
            tileContainer.appendChild(tile);
            row.appendChild(tileContainer);
        }
    }

    function restoreProgress() {
        let progress = null;
        let challengeId = '';
        if (state.isDailyMode) {
            const saved = localStorage.getItem('wordle_daily_progress');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.date === getDailyDateKey()) {
                    progress = parsed;
                } else {
                    localStorage.removeItem('wordle_daily_progress');
                }
            }
        } else if (state.isChallengeMode) {
            challengeId = getChallengeId();
            const saved = localStorage.getItem(`wordle_challenge_progress_${challengeId}`);
            if (saved) {
                progress = JSON.parse(saved);
            }
        }

        if (progress) {
            state.guesses = progress.guesses || [];
            state.guessWords = progress.guessWords || [];
            state.guessCount = state.guesses.length;
            state.startTime = progress.startTime || Date.now();

            for (let i = 0; i < state.guessCount; i++) {
                const word = state.guessWords[i];
                const feedback = state.guesses[i];
                renderRowImmediate(i, word, feedback);
                processFeedback(word, feedback);
            }

            if (state.isDailyMode || state.isChallengeMode) {
                updateCandidatesAndInsights();
                updateKeyboardColors();
            }

            if (state.guessCount > 0) {
                state.currentGuessWord = state.guessWords[state.guessCount - 1];
                const lastFeedback = state.guesses[state.guessCount - 1];
                if (lastFeedback.every(f => f === 'correct')) {
                    if (state.isDailyMode) {
                        saveDailyRecord(true);
                        localStorage.removeItem('wordle_daily_progress');
                    } else if (state.isChallengeMode) {
                        saveChallengeCompletion(challengeId, true, state.guessCount);
                    }

                    endGame();
                    if (state.isDailyMode) {
                        const record = getDailyRecord();
                        const streak = getDailyStreakData();
                        showDailyResultOverlay(record, streak);
                    } else if (state.isChallengeMode) {
                        const emojiEl = document.getElementById('game-over-emoji');
                        if (emojiEl) { emojiEl.textContent = '⚔️'; emojiEl.className = 'text-5xl text-center leading-none hero-emoji-animate'; }
                        gameOverTitle.textContent = 'You Won!';
                        gameOverText.textContent = `Cracked "${state.currentGuessWord.toUpperCase()}" in ${state.guessCount} tries!`;
                        handleChallengeGameOver(true);
                    }
                    return true;
                } else if (state.guessCount === 6) {
                    if (state.isDailyMode) {
                        saveDailyRecord(false);
                        localStorage.removeItem('wordle_daily_progress');
                    } else if (state.isChallengeMode) {
                        saveChallengeCompletion(challengeId, false, state.guessCount);
                    }

                    endGame();
                    if (state.isDailyMode) {
                        const record = getDailyRecord();
                        const streak = getDailyStreakData();
                        showDailyResultOverlay(record, streak);
                    } else if (state.isChallengeMode) {
                        const emojiEl = document.getElementById('game-over-emoji');
                        if (emojiEl) { emojiEl.textContent = '😔'; emojiEl.className = 'text-5xl text-center leading-none hero-emoji-animate'; }
                        gameOverTitle.textContent = 'Game Over!';
                        gameOverText.textContent = `You ran out of guesses! The word was "${state.challengeWord.toUpperCase()}".`;
                        handleChallengeGameOver(false);
                    }
                    return true;
                }
            }

            if (state.guessCount < 6) {
                updateActiveRowTiles();
                feedbackInput.disabled = false;
                submitButton.disabled = false;
                feedbackInput.focus();
            }
            return true;
        }
        return false;
    }

    function resetState() {
        const isChallenge = state.isChallengeMode || false;
        const challengeW = state.challengeWord || null;
        const challengeT = state.challengeTimestamp || null;
        const isPassPlay = state.isPassAndPlayMode || false;
        const passPlayW = state.passAndPlayWord || null;
        const isDaily = state.isDailyMode || false;
        const dailyW = state.dailyWord || null;

        const isRoom = state.isRoomMode || false;
        const roomC = state.roomCode || null;
        const isH = state.isHost || false;
        const hostN = state.hostName || '';
        const guestN = state.guestName || '';
        const roomChan = state.roomChannel || null;
        const roomRound = state.roomRound || 1;
        const roomPollInt = state.roomPollInterval || null;
        const roomTimerInt = state.roomTimerInterval || null;
        const specBoardState = state.spectatorBoardState || { guesses: [], guessWords: [], currentTyped: '', won: null };
        const isUnlimited = state.isUnlimitedMode || false;

        let unlimitedWord = state.challengeWord;
        if (isUnlimited && !unlimitedWord) {
            unlimitedWord = wordList[Math.floor(Math.random() * wordList.length)];
        }

        state = {
            possibleWords: [...wordList],
            guesses: [],
            guessWords: [],
            absentLetters: new Set(),
            presentLetters: new Set(),
            correctLetters: Array(5).fill(null),
            yellowPositions: {},
            minLetterCounts: {},
            exactLetterCounts: {},
            isGameOver: false,
            isAnimating: false,
            guessCount: 0,
            currentGuessWord: '',
            difficulty: 'normal',
            usedExtendedDictionary: false,
            isChallengeMode: isChallenge,
            challengeWord: isUnlimited ? unlimitedWord : challengeW,
            challengeTimestamp: challengeT,
            scoreSubmitted: false,
            startTime: null,
            isPassAndPlayMode: isPassPlay,
            passAndPlayWord: passPlayW,
            isDailyMode: isDaily,
            dailyWord: dailyW,
            isUnlimitedMode: isUnlimited,
            currentTypedGuess: '',
            isRoomMode: isRoom,
            roomCode: roomC,
            isHost: isH,
            hostName: hostN,
            guestName: guestN,
            roomChannel: roomChan,
            roomRound: roomRound,
            roomPollInterval: roomPollInt,
            roomTimerInterval: roomTimerInt,
            spectatorBoardState: specBoardState
        };

        if (isChallenge && challengeW && !state.possibleWords.includes(challengeW)) {
            state.possibleWords.push(challengeW);
        }
        if (isPassPlay && passPlayW && !state.possibleWords.includes(passPlayW)) {
            state.possibleWords.push(passPlayW);
        }
        if (isDaily && dailyW && !state.possibleWords.includes(dailyW)) {
            state.possibleWords.push(dailyW);
        }
    }

    function startGame() {
        resetState();
        state.difficulty = difficultyNormalBtn.classList.contains('bg-indigo-500') ? 'normal' : 'hard';
        trackEvent('game_started', {
            mode: state.isDailyMode ? 'daily' : (state.isChallengeMode ? 'challenge' : (state.isPassAndPlayMode ? 'pass_play' : 'ai_solver')),
            difficulty: state.difficulty
        });
        gameBoard.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('div');
            row.className = 'flex justify-center gap-1.5';
            row.id = `row-${i}`;
            for (let j = 0; j < 5; j++) {
                const tileContainer = document.createElement('div');
                tileContainer.className = 'tile-container border-2 border-gray-200 rounded-md';
                row.appendChild(tileContainer);
            }
            gameBoard.appendChild(row);
        }

        if (state.isChallengeMode) {
            actionArea.classList.add('hidden');
            challengeBanner.classList.remove('hidden');
            passPlayBanner.classList.add('hidden');
            feedbackInput.placeholder = 'GUESS';
            submitButton.textContent = 'Submit Guess';
            if (feedbackSubtext) {
                feedbackSubtext.textContent = 'Enter a 5-letter word guess';
            }
            feedbackInput.disabled = true;
            submitButton.disabled = true;

            // Check challenge expiration
            let isExpired = false;
            if (state.challengeTimestamp) {
                const elapsed = Date.now() - state.challengeTimestamp;
                isExpired = elapsed > 24 * 60 * 60 * 1000;
            }

            const challengeId = getChallengeId();
            const completion = getChallengeCompletion(challengeId);
            const hasProgress = localStorage.getItem(`wordle_challenge_progress_${challengeId}`) !== null;

            const landingTitle = document.getElementById('challenge-landing-title');
            const landingText = document.getElementById('challenge-landing-text');
            const landingIcon = document.getElementById('challenge-landing-icon');

            if (completion) {
                if (landingTitle) landingTitle.textContent = 'Challenge Completed!';
                if (landingText) landingText.textContent = `You have already attempted this challenge on this device. You scored ${completion.won ? completion.guessCount : 'X'}/6.`;
                if (landingIcon) landingIcon.textContent = '🏆';
                if (acceptChallengeBtn) acceptChallengeBtn.classList.add('hidden');
                if (landingLeaderboardBtn) landingLeaderboardBtn.classList.remove('hidden');
            } else if (isExpired) {
                if (landingTitle) landingTitle.textContent = 'Challenge Closed!';
                if (landingText) landingText.textContent = 'This challenge was created more than 24 hours ago and has expired. You can no longer submit guesses, but you can view the final leaderboard below.';
                if (landingIcon) landingIcon.textContent = '🔒';
                if (acceptChallengeBtn) acceptChallengeBtn.classList.add('hidden');
                if (landingLeaderboardBtn) landingLeaderboardBtn.classList.remove('hidden');
            } else {
                if (landingTitle) landingTitle.textContent = 'You Are Challenged!';
                if (landingText) landingText.textContent = 'A friend has created a secret 5-letter word for you to guess. Can you solve it in 6 tries?';
                if (landingIcon) landingIcon.textContent = '⚔️';
                if (acceptChallengeBtn) acceptChallengeBtn.classList.remove('hidden');
            }

            if (challengeLandingOverlay) {
                if (hasProgress && !completion && !isExpired) {
                    challengeLandingOverlay.classList.add('hidden');
                } else {
                    challengeLandingOverlay.classList.remove('hidden');
                }
            }
            if (challengeButton) {
                challengeButton.classList.add('hidden');
            }

            // Center and align header to match the Wordle card width
            if (headerRow) {
                headerRow.classList.remove('max-w-[896px]', 'md:flex-row', 'gap-8');
                headerRow.classList.add('max-w-[432px]', 'flex-col', 'gap-2');
            }
            if (headerTitle) {
                headerTitle.textContent = 'Wordle Challenge';
            }
            if (headerControlsContainer) {
                headerControlsContainer.classList.remove('md:flex-row');
                headerControlsContainer.classList.add('flex-col');
            }
        } else if (state.isPassAndPlayMode) {
            actionArea.classList.add('hidden');
            challengeBanner.classList.add('hidden');
            passPlayBanner.classList.remove('hidden');
            feedbackInput.placeholder = 'GUESS';
            submitButton.textContent = 'Submit Guess';
            if (feedbackSubtext) {
                feedbackSubtext.textContent = 'Enter a 5-letter word guess';
            }
            feedbackInput.disabled = false; // Enabled for Player 2
            submitButton.disabled = false;
            if (challengeButton) {
                challengeButton.classList.add('hidden');
            }

            // Center and align header to match the Wordle card width
            if (headerRow) {
                headerRow.classList.remove('max-w-[896px]', 'md:flex-row', 'gap-8');
                headerRow.classList.add('max-w-[432px]', 'flex-col', 'gap-2');
            }
            if (headerTitle) {
                headerTitle.textContent = 'Wordle 2-Player';
            }
            if (headerControlsContainer) {
                headerControlsContainer.classList.remove('md:flex-row');
                headerControlsContainer.classList.add('flex-col');
            }
        } else if (state.isDailyMode) {
            actionArea.classList.add('hidden');
            challengeBanner.classList.add('hidden');
            passPlayBanner.classList.add('hidden');
            if (unlimitedBanner) unlimitedBanner.classList.add('hidden');
            if (dailyBanner) dailyBanner.classList.remove('hidden');
            if (dailyBannerDate) {
                dailyBannerDate.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
            }
            feedbackInput.placeholder = 'GUESS';
            submitButton.textContent = 'Submit Guess';
            if (feedbackSubtext) feedbackSubtext.textContent = 'Enter a 5-letter word guess';
            feedbackInput.disabled = false;
            submitButton.disabled = false;
            if (challengeButton) challengeButton.classList.add('hidden');
            if (headerRow) { headerRow.classList.remove('max-w-[896px]', 'md:flex-row', 'gap-8'); headerRow.classList.add('max-w-[432px]', 'flex-col', 'gap-2'); }
            if (headerTitle) headerTitle.textContent = 'Daily Challenge';
        } else if (state.isUnlimitedMode) {
            actionArea.classList.add('hidden');
            challengeBanner.classList.add('hidden');
            passPlayBanner.classList.add('hidden');
            if (dailyBanner) dailyBanner.classList.add('hidden');
            if (unlimitedBanner) unlimitedBanner.classList.remove('hidden');
            feedbackInput.placeholder = 'GUESS';
            submitButton.textContent = 'Submit Guess';
            if (feedbackSubtext) feedbackSubtext.textContent = 'Enter a 5-letter word guess';
            feedbackInput.disabled = false;
            submitButton.disabled = false;
            if (challengeButton) challengeButton.classList.add('hidden');
            if (headerRow) { headerRow.classList.remove('max-w-[896px]', 'md:flex-row', 'gap-8'); headerRow.classList.add('max-w-[432px]', 'flex-col', 'gap-2'); }
            if (headerTitle) headerTitle.textContent = 'Unlimited Practice';
        } else {
            actionArea.classList.remove('hidden');
            challengeBanner.classList.add('hidden');
            passPlayBanner.classList.add('hidden');
            if (dailyBanner) dailyBanner.classList.add('hidden');
            if (unlimitedBanner) unlimitedBanner.classList.add('hidden');
            feedbackInput.placeholder = '*****';
            submitButton.textContent = 'Submit Clues';
            if (feedbackSubtext) {
                feedbackSubtext.textContent = 'Enter Clue Pattern (G = Green, Y = Yellow, B = Gray)';
            }
            feedbackInput.disabled = true;
            submitButton.disabled = true;
            if (challengeButton) {
                challengeButton.classList.remove('hidden');
            }

            // Restore default header layout
            if (headerRow) {
                headerRow.classList.remove('max-w-[432px]', 'flex-col', 'gap-2');
                headerRow.classList.add('max-w-[896px]', 'md:flex-row', 'gap-8');
            }
            if (headerTitle) {
                headerTitle.textContent = 'AI Wordle Guesser';
            }
            if (headerControlsContainer) {
                headerControlsContainer.classList.remove('flex-col');
            }
        }

        gameOverContainer.classList.add('hidden');
        statusMessage.textContent = '';
        statusMessage.className = 'text-center h-8 flex items-center justify-center font-semibold text-lg mt-2';
        feedbackInput.value = '';

        if (state.isChallengeMode || state.isPassAndPlayMode || state.isDailyMode || state.isUnlimitedMode) {
            insightsPanel.classList.add('hidden');
            if (keyboardContainer) keyboardContainer.classList.remove('hidden');
            updateKeyboardColors();
        } else {
            insightsPanel.classList.remove('hidden');
            if (keyboardContainer) keyboardContainer.classList.add('hidden');
            if (dictionaryBadge) {
                dictionaryBadge.textContent = 'Default Dictionary';
                dictionaryBadge.className = 'text-[10px] text-gray-400 font-semibold uppercase tracking-wider';
            }
            updateInsightsPanel();
        }

        let restored = false;
        if (state.isDailyMode) {
            restored = restoreProgress();
        } else if (state.isChallengeMode) {
            verifyChallengeSession();
            restored = true;
        }

        if (!restored && !state.isChallengeMode && !state.isPassAndPlayMode && !state.isDailyMode && !state.isUnlimitedMode) {
            setTimeout(() => {
                makeGuess(computeOpeningGuess());
            }, 500);
        }
    }

    function makeGuess(word) {
        state.currentGuessWord = word;
        state.guessWords[state.guessCount] = word;
        const row = document.getElementById(`row-${state.guessCount}`);
        row.innerHTML = '';

        word.split('').forEach((letter) => {
            const tileContainer = document.createElement('div');
            tileContainer.className = 'tile-container';
            const tile = document.createElement('div');
            tile.className = 'tile';
            const front = document.createElement('div');
            front.className = 'tile-front';
            front.textContent = letter.toUpperCase();
            const back = document.createElement('div');
            back.className = 'tile-back';
            back.textContent = letter.toUpperCase();
            tile.appendChild(front);
            tile.appendChild(back);
            tileContainer.appendChild(tile);
            row.appendChild(tileContainer);
        });

        feedbackInput.value = '';
        state.isAnimating = false;
        submitButton.disabled = false;
        feedbackInput.disabled = false;
        feedbackInput.focus();
    }

    async function submitFeedbackAndAdvance(feedback) {
        state.guesses.push(feedback);
        state.isAnimating = true;
        submitButton.disabled = true;
        feedbackInput.disabled = true;
        statusMessage.textContent = '';

        const currentTiles = document.getElementById(`row-${state.guessCount}`).querySelectorAll('.tile');
        for (let i = 0; i < currentTiles.length; i++) {
            const tile = currentTiles[i];
            const backFace = tile.querySelector('.tile-back');
            backFace.classList.remove(...Object.values(colorClasses));
            backFace.classList.add(colorClasses[feedback[i]]);
            await new Promise(resolve => setTimeout(resolve, 250));
            tile.classList.add('is-flipped');
            sounds?.flip.triggerAttackRelease("C5", "0.1");
        }
        await new Promise(resolve => setTimeout(resolve, 700));

        state.guessCount++;

        // Broadcast guess submission to room spectator
        broadcastRoomEvent('guess', {
            guesses: state.guesses,
            guessWords: state.guessWords,
            guessCount: state.guessCount
        });

        if (feedback.every(f => f === 'correct')) {
            winGame(currentTiles);
            return;
        }

        if (state.guessCount === 6) {
            if (state.isChallengeMode) {
                endGameNoSolution(`You ran out of guesses! The word was "${state.challengeWord.toUpperCase()}".`);
            } else if (state.isPassAndPlayMode) {
                endGameNoSolution(`Player 2 ran out of guesses! The word was "${state.passAndPlayWord.toUpperCase()}".`);
            } else if (state.isDailyMode) {
                endGameNoSolution(`Out of guesses! The word was "${state.dailyWord.toUpperCase()}".`);
            } else {
                endGameNoSolution("I've run out of guesses!");
            }
            return;
        }

        processFeedback(state.currentGuessWord, feedback);

        if (state.isChallengeMode || state.isPassAndPlayMode || state.isDailyMode || state.isUnlimitedMode) {
            updateCandidatesAndInsights();
            saveGameProgress();
            feedbackInput.value = '';
            state.isAnimating = false;
            submitButton.disabled = false;
            feedbackInput.disabled = false;
            feedbackInput.focus();
            updateKeyboardColors();
        } else {
            generateNextGuess();
        }
    }

    async function handleFeedback() {
        if (state.isGameOver || state.isAnimating) return;

        const isManual = state.isChallengeMode || state.isPassAndPlayMode || state.isDailyMode || state.isUnlimitedMode;
        const inputVal = isManual
            ? (state.currentTypedGuess || '').toLowerCase().trim()
            : feedbackInput.value.toLowerCase().trim();

        if (isManual) {
            if (inputVal.length !== 5 || !/^[a-z]{5}$/.test(inputVal)) {
                showToast('Please enter a valid 5-letter word.');
                sounds?.invalid.triggerAttackRelease("C3", "0.2");
                return;
            }

            if (!wordList.includes(inputVal) && (!extendedWordList || !extendedWordList.includes(inputVal))) {
                showToast('Hmm, not a valid word. Try again!');
                sounds?.invalid.triggerAttackRelease("C3", "0.2");
                return;
            }

            makeGuess(inputVal);
            state.currentTypedGuess = '';
            const targetWord = (state.isChallengeMode || state.isUnlimitedMode) ? state.challengeWord
                : state.isPassAndPlayMode ? state.passAndPlayWord
                    : state.dailyWord;
            const feedback = calculateFeedback(inputVal, targetWord);
            await submitFeedbackAndAdvance(feedback);

        } else {
            if (!/^[gyb]{5}$/.test(inputVal)) {
                showToast('Enter a 5-letter pattern using G, Y, or B.');
                sounds?.invalid.triggerAttackRelease("C3", "0.2");
                return;
            }

            const feedback = inputVal.split('').map(char => colorMap[char]);

            if (!validateFeedback(state.currentGuessWord, feedback)) {
                showToast('Contradictory clues — a letter can\'t be both Green and Grey.');
                sounds?.invalid.triggerAttackRelease("C3", "0.2");
                return;
            }

            await submitFeedbackAndAdvance(feedback);
        }
    }

    function updateCandidatesAndInsights() {
        state.possibleWords = state.possibleWords.filter(word => {
            return checkWordAgainstClues(word, state);
        });

        if (state.possibleWords.length === 0 && extendedWordList.length > 0 && !state.usedExtendedDictionary) {
            state.usedExtendedDictionary = true;
            if (dictionaryBadge) {
                dictionaryBadge.textContent = 'Extended Dictionary';
                dictionaryBadge.className = 'text-[10px] text-indigo-600 font-bold uppercase tracking-wider animate-pulse';
            }
            state.possibleWords = extendedWordList.filter(word => {
                return checkWordAgainstClues(word, state);
            });
        }

        updateInsightsPanel();
    }

    function calculateFeedback(guess, secret) {
        const feedback = Array(5).fill('absent');
        const secretLetters = secret.split('');
        const guessLetters = guess.split('');

        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] === secretLetters[i]) {
                feedback[i] = 'correct';
                secretLetters[i] = null;
                guessLetters[i] = null;
            }
        }
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] !== null) {
                const index = secretLetters.indexOf(guessLetters[i]);
                if (index !== -1) {
                    feedback[i] = 'present';
                    secretLetters[index] = null;
                }
            }
        }
        return feedback;
    }



    function validateFeedback(word, feedback) {
        // Any 5-letter clue pattern is theoretically valid for some word,
        // and duplicate letter feedback (e.g. one correct, one absent) is perfectly valid.
        return true;
    }

    function processFeedback(word, feedback) {
        // First, track correct positions and collect present/correct letters
        for (let i = 0; i < 5; i++) {
            const letter = word[i];
            const result = feedback[i];
            if (result === 'correct') {
                state.correctLetters[i] = letter;
                state.presentLetters.add(letter);
                state.absentLetters.delete(letter);
            } else if (result === 'present') {
                state.presentLetters.add(letter);
                if (!state.yellowPositions[letter]) state.yellowPositions[letter] = [];
                state.yellowPositions[letter].push(i);
                state.absentLetters.delete(letter);
            }
        }

        // Handle completely absent letters (only added to absentLetters if the letter is never correct or present)
        for (let i = 0; i < 5; i++) {
            const letter = word[i];
            const result = feedback[i];
            if (result === 'absent') {
                if (!state.presentLetters.has(letter) && !state.correctLetters.includes(letter)) {
                    state.absentLetters.add(letter);
                }
            }
        }

        // Count occurrences of each letter in the guess to update min/exact letter count constraints
        const guessLetterCounts = {};
        for (let i = 0; i < 5; i++) {
            const letter = word[i];
            guessLetterCounts[letter] = (guessLetterCounts[letter] || 0) + 1;
        }

        for (const letter in guessLetterCounts) {
            let nonAbsentCount = 0;
            let absentCount = 0;
            for (let i = 0; i < 5; i++) {
                if (word[i] === letter) {
                    if (feedback[i] === 'correct' || feedback[i] === 'present') {
                        nonAbsentCount++;
                    } else if (feedback[i] === 'absent') {
                        absentCount++;
                    }
                }
            }

            if (absentCount > 0) {
                // If a letter was marked absent, we know exactly how many copies exist in the secret word
                state.exactLetterCounts[letter] = nonAbsentCount;
            } else {
                // Otherwise, the secret word has at least this many copies of the letter
                state.minLetterCounts[letter] = Math.max(state.minLetterCounts[letter] || 0, nonAbsentCount);
            }
        }
    }

    function generateNextGuess() {
        showThinkingIndicator();

        setTimeout(() => {
            state.possibleWords = state.possibleWords.filter(word => {
                return checkWordAgainstClues(word, state);
            });

            updateInsightsPanel();

            setStatusMessage(`${state.possibleWords.length} words remaining...`, '', 'text-gray-500');

            let bestGuess = '';
            if (state.possibleWords.length === 0) {
                if (extendedWordList.length > 0 && !state.usedExtendedDictionary) {
                    state.usedExtendedDictionary = true;
                    setStatusMessage('Expanding dictionary search...', '', 'text-indigo-600 font-bold animate-pulse');
                    if (dictionaryBadge) {
                        dictionaryBadge.textContent = 'Extended Dictionary';
                        dictionaryBadge.className = 'text-[10px] text-indigo-600 font-bold uppercase tracking-wider animate-pulse';
                    }

                    setTimeout(() => {
                        state.possibleWords = extendedWordList.filter(word => {
                            return checkWordAgainstClues(word, state);
                        });

                        updateInsightsPanel();

                        if (state.possibleWords.length > 0) {
                            setStatusMessage(`Found ${state.possibleWords.length} candidates in extended list!`, '', 'text-green-600 font-bold');

                            if (state.possibleWords.length <= 2 || state.difficulty === 'normal') {
                                bestGuess = state.possibleWords[0];
                            } else {
                                bestGuess = findOptimalGuess();
                            }

                            setTimeout(() => {
                                statusMessage.textContent = '';
                                makeGuess(bestGuess);
                            }, 1200);
                        } else {
                            endGameNoSolution("I'm stumped! My dictionary might not have your word.");
                        }
                    }, 1200);
                    return;
                }

                endGameNoSolution("I'm stumped! My dictionary might not have your word.");
                return;
            } else if (state.possibleWords.length <= 2 || state.difficulty === 'normal') {
                bestGuess = state.possibleWords[0];
            } else {
                bestGuess = findOptimalGuess();
            }

            setTimeout(() => {
                statusMessage.textContent = '';
                statusMessage.className = 'text-center h-8 flex items-center justify-center font-semibold text-lg';
                makeGuess(bestGuess);
            }, 800)
        }, 700);
    }

    // Computes the Wordle feedback pattern between a guess and a secret as a string key
    function getPatternKey(guess, secret) {
        const result = [0, 0, 0, 0, 0];
        const s = secret.split('');
        const g = guess.split('');
        for (let i = 0; i < 5; i++) {
            if (g[i] === s[i]) { result[i] = 2; s[i] = null; g[i] = null; }
        }
        for (let i = 0; i < 5; i++) {
            if (g[i] !== null) {
                const idx = s.indexOf(g[i]);
                if (idx !== -1) { result[i] = 1; s[idx] = null; }
            }
        }
        return result.join('');
    }

    // Entropy-based guess: picks the word that maximally partitions the remaining candidates.
    // Used when remaining candidates are small enough to be fast (<= 150 words).
    function findEntropyGuess() {
        const remaining = state.possibleWords;
        const n = remaining.length;
        let bestScore = -1;
        let bestWord = remaining[0];
        for (const guess of wordList) {
            const groups = {};
            for (const secret of remaining) {
                const key = getPatternKey(guess, secret);
                groups[key] = (groups[key] || 0) + 1;
            }
            let entropy = 0;
            for (const count of Object.values(groups)) {
                const p = count / n;
                entropy -= p * Math.log2(p);
            }
            // Small bonus for guesses that are themselves candidates (could be the answer)
            const score = entropy + (remaining.includes(guess) ? 0.01 : 0);
            if (score > bestScore) { bestScore = score; bestWord = guess; }
        }
        return bestWord;
    }

    // Positional-frequency heuristic: scores words by how well they cover
    // the most common letters at each position in the remaining candidates.
    // Used as a fast approximation when candidate count is large.
    function findPositionalFrequencyGuess() {
        const remaining = state.possibleWords;
        const posFreq = Array.from({ length: 5 }, () => ({}));
        for (const word of remaining) {
            for (let i = 0; i < 5; i++) {
                const l = word[i];
                posFreq[i][l] = (posFreq[i][l] || 0) + 1;
            }
        }
        let bestScore = -1;
        let bestWord = remaining[0];
        for (const word of wordList) {
            const seen = new Set();
            let score = 0;
            for (let i = 0; i < 5; i++) {
                const l = word[i];
                if (!state.absentLetters.has(l) && !seen.has(l)) {
                    score += (posFreq[i][l] || 0);
                    seen.add(l);
                }
            }
            if (score > bestScore) { bestScore = score; bestWord = word; }
        }
        return bestWord;
    }

    function findOptimalGuess() {
        const remaining = state.possibleWords;
        if (remaining.length <= 2) return remaining[0];
        // Use full entropy analysis for small candidate pools (fast enough);
        // fall back to positional-frequency heuristic for larger pools.
        return remaining.length <= 150 ? findEntropyGuess() : findPositionalFrequencyGuess();
    }

    function checkWordAgainstClues(word, currentState) {
        for (const letter of currentState.absentLetters) {
            if (word.includes(letter)) return false;
        }
        for (const letter of currentState.presentLetters) {
            if (!word.includes(letter)) return false;
        }
        for (let i = 0; i < 5; i++) {
            if (currentState.correctLetters[i] && word[i] !== currentState.correctLetters[i]) {
                return false;
            }
        }
        for (const letter in currentState.yellowPositions) {
            for (const pos of currentState.yellowPositions[letter]) {
                if (word[pos] === letter) return false;
            }
        }

        // Count frequencies of each letter in the candidate word
        const candidateCounts = {};
        for (let i = 0; i < 5; i++) {
            const letter = word[i];
            candidateCounts[letter] = (candidateCounts[letter] || 0) + 1;
        }

        // Enforce exact letter count constraints
        for (const letter in currentState.exactLetterCounts) {
            const expected = currentState.exactLetterCounts[letter];
            const actual = candidateCounts[letter] || 0;
            if (actual !== expected) return false;
        }

        // Enforce minimum letter count constraints
        for (const letter in currentState.minLetterCounts) {
            const expected = currentState.minLetterCounts[letter];
            const actual = candidateCounts[letter] || 0;
            if (actual < expected) return false;
        }

        return true;
    }

    async function showWordDefinition(word) {
        if (!word) return;
        word = word.toLowerCase().trim();
        if (word.length !== 5) return;

        defWord.textContent = word;
        defPhonetic.textContent = '';
        defContent.innerHTML = '<p class="text-slate-400 italic">Loading definition...</p>';
        definitionModal.classList.remove('hidden');

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (response.ok) {
                const data = await response.json();
                const firstEntry = data[0];
                const phonetic = firstEntry.phonetic || (firstEntry.phonetics && firstEntry.phonetics.find(p => p.text)?.text) || '';
                defPhonetic.textContent = phonetic;

                let contentHtml = '';
                if (firstEntry.meanings && firstEntry.meanings.length > 0) {
                    firstEntry.meanings.forEach(meaning => {
                        const partOfSpeech = meaning.partOfSpeech;
                        const definition = meaning.definitions[0]?.definition || 'No definition text available.';
                        contentHtml += `
                            <div class="mb-3">
                                <span class="text-[10px] bg-indigo-50 text-indigo-700 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">${partOfSpeech}</span>
                                <p class="text-xs text-slate-700 mt-1 leading-relaxed">${definition}</p>
                            </div>
                        `;
                    });
                } else {
                    contentHtml = '<p class="text-xs text-slate-500">No definitions found for this word.</p>';
                }
                defContent.innerHTML = contentHtml;
            } else {
                defContent.innerHTML = '<p class="text-xs text-slate-500">Definition not found in dictionary.</p>';
            }
        } catch (e) {
            console.error('Error fetching word definition:', e);
            defContent.innerHTML = '<p class="text-xs text-red-500">Failed to fetch definition.</p>';
        }
    }

    function updateInsightsPanel() {
        if (state.possibleWords.length === 0) {
            remainingCount.textContent = '0';
            topSuggestions.innerHTML = '<span class="text-xs text-gray-400">None</span>';
            return;
        }

        remainingCount.textContent = state.possibleWords.length.toLocaleString();

        // Calculate character frequency count in remaining possible words
        const letterFrequency = {};
        state.possibleWords.forEach(word => {
            const uniqueLetters = new Set(word.split(''));
            uniqueLetters.forEach(letter => {
                letterFrequency[letter] = (letterFrequency[letter] || 0) + 1;
            });
        });

        // Score each possible word based on remaining letters' frequencies
        const scoredWords = state.possibleWords.map(word => {
            const uniqueLetters = new Set(word.split(''));
            let score = 0;
            uniqueLetters.forEach(letter => {
                score += letterFrequency[letter] || 0;
            });
            return { word, score };
        });

        // Sort descending by score, then alphabetically
        scoredWords.sort((a, b) => b.score - a.score || a.word.localeCompare(b.word));

        // Take top 5 candidates
        const top5 = scoredWords.slice(0, 5);

        topSuggestions.innerHTML = '';

        // Render matching candidate words as tile rows with confidence bars
        const maxScore = top5.length > 0 ? top5[0].score : 1;
        top5.forEach((item, idx) => {
            const wordWrapper = document.createElement('div');
            wordWrapper.className = 'flex flex-col w-full cursor-pointer';
            wordWrapper.addEventListener('click', () => showWordDefinition(item.word));

            const row = document.createElement('div');
            row.className = 'flex justify-center gap-1.5';
            item.word.split('').forEach(letter => {
                const tile = document.createElement('div');
                tile.className = 'suggestion-tile flex items-center justify-center font-bold text-xl sm:text-2xl uppercase rounded-md border-2 border-indigo-200 bg-indigo-50 text-indigo-700 shadow-sm transition-transform duration-300 hover:scale-105';
                tile.textContent = letter;
                row.appendChild(tile);
            });
            wordWrapper.appendChild(row);

            // Confidence bar
            const pct = maxScore > 0 ? Math.round((item.score / maxScore) * 100) : 100;
            const track = document.createElement('div');
            track.className = 'confidence-bar-track';
            const fill = document.createElement('div');
            fill.className = 'confidence-bar-fill';
            fill.style.width = '0%';
            track.appendChild(fill);
            wordWrapper.appendChild(track);
            setTimeout(() => { fill.style.width = `${pct}%`; }, 60 + idx * 70);

            topSuggestions.appendChild(wordWrapper);
        });

        // Pad remaining slots up to 5 with empty dashed placeholder rows
        for (let i = top5.length; i < 5; i++) {
            const row = document.createElement('div');
            row.className = 'flex justify-center gap-1.5 w-full opacity-40';

            for (let j = 0; j < 5; j++) {
                const tile = document.createElement('div');
                tile.className = 'suggestion-tile flex items-center justify-center font-bold text-xl sm:text-2xl uppercase rounded-md border-2 border-dashed border-gray-300 bg-gray-50 text-gray-400';
                tile.textContent = '•';
                row.appendChild(tile);
            }

            topSuggestions.appendChild(row);
        }
    }

    function setStatusMessage(msg, animationClass = '', textClass = '') {
        statusMessage.textContent = msg;
        statusMessage.className = `text-center h-8 flex items-center justify-center font-semibold text-lg ${textClass}`;
        if (animationClass) {
            const elementToShake = addWordContainer.classList.contains('hidden') ? feedbackInput : addWordInput;
            elementToShake.classList.add(animationClass);
            elementToShake.classList.add('border-red-500', 'ring-red-500');
            setTimeout(() => {
                elementToShake.classList.remove('shake', 'border-red-500', 'ring-red-500');
            }, 600);
        }
    }

    const UnlimitedStats = {
        getStats: function() {
            try {
                const stored = localStorage.getItem('wordle_unlimited_stats');
                if (stored) return JSON.parse(stored);
            } catch (e) {}
            return { played: 0, won: 0, streak: 0, maxStreak: 0, guesses: [0, 0, 0, 0, 0, 0] };
        },
        saveRecord: function(won, guessCount) {
            const stats = this.getStats();
            stats.played += 1;
            if (won) {
                stats.won += 1;
                stats.streak += 1;
                if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
                if (guessCount >= 1 && guessCount <= 6) stats.guesses[guessCount - 1] += 1;
            } else {
                stats.streak = 0;
            }
            try {
                localStorage.setItem('wordle_unlimited_stats', JSON.stringify(stats));
            } catch (e) {}
            return stats;
        }
    };

    function renderUnlimitedStats(stats) {
        if (!unlimitedStatPlayed) return;
        unlimitedStatPlayed.textContent = stats.played;
        const pct = stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0;
        unlimitedStatWinPct.textContent = `${pct}%`;
        unlimitedStatStreak.textContent = stats.streak;
        unlimitedStatBest.textContent = stats.maxStreak;
        
        const chart = document.getElementById('unlimited-distribution-chart');
        if (chart) {
            chart.innerHTML = '';
            let maxGuesses = 0;
            for (let i = 1; i <= 6; i++) {
                if (stats.guesses[i] > maxGuesses) maxGuesses = stats.guesses[i];
            }
            
            for (let i = 1; i <= 6; i++) {
                const count = stats.guesses[i] || 0;
                const percent = maxGuesses > 0 ? Math.max(5, Math.round((count / maxGuesses) * 100)) : 5;
                const isCurrent = state.won && state.guessCount === i;
                
                const barRow = document.createElement('div');
                barRow.className = 'flex items-center text-xs text-gray-600 font-bold';
                barRow.innerHTML = `
                    <div class="w-4">${i}</div>
                    <div class="flex-1 bg-gray-200 ml-1 rounded">
                        <div class="${isCurrent ? 'bg-sky-500' : 'bg-slate-400'} text-white text-right px-1.5 rounded min-w-fit" style="width: ${percent}%;">${count}</div>
                    </div>
                `;
                chart.appendChild(barRow);
            }
        }
    }

    function applyGameOverContextLayout(won) {
        if (addWordContainer) addWordContainer.classList.add('hidden');
        if (challengeLeaderboardSubmitContainer) challengeLeaderboardSubmitContainer.classList.add('hidden');
        if (gameOverLeaderboardBtn) gameOverLeaderboardBtn.classList.add('hidden');
        if (unlimitedStatsContainer) unlimitedStatsContainer.classList.add('hidden');
        
        const detailsWrapper = document.getElementById('unlimited-detailed-stats-wrapper');
        if (detailsWrapper) detailsWrapper.classList.add('hidden');

        if (state.isUnlimitedMode) {
            const stats = UnlimitedStats.saveRecord(won, state.guessCount);
            renderUnlimitedStats(stats);
            if (unlimitedStatsContainer) unlimitedStatsContainer.classList.remove('hidden');
            const detailsWrapper = document.getElementById('unlimited-detailed-stats-wrapper');
            if (detailsWrapper) {
                detailsWrapper.classList.remove('hidden');
                document.getElementById('unlimited-detailed-stats-container').classList.add('hidden');
                const icon = document.getElementById('unlimited-toggle-icon');
                if(icon) icon.style.transform = 'rotate(0deg)';
            }
            if (restartButton) {
                restartButton.textContent = 'Play Next Word 🎲';
                restartButton.classList.remove('hidden');
            }
        } else if (state.isChallengeMode) {
            if (gameOverLeaderboardBtn) gameOverLeaderboardBtn.classList.remove('hidden');
            if (!state.scoreSubmitted && challengeLeaderboardSubmitContainer) {
                challengeLeaderboardSubmitContainer.classList.remove('hidden');
                const savedName = localStorage.getItem('wordle_leaderboard_player_name') || '';
                if (leaderboardPlayerName) leaderboardPlayerName.value = savedName;
            }
            if (restartButton) restartButton.classList.add('hidden');
        } else if (state.isPassAndPlayMode) {
            if (restartButton) {
                restartButton.textContent = 'Play Again';
                restartButton.classList.remove('hidden');
            }
        } else {
            if (!won && addWordContainer) {
                addWordContainer.classList.remove('hidden');
            }
            if (restartButton) {
                restartButton.textContent = 'Play Again';
                restartButton.classList.remove('hidden');
            }
        }

        if (newGameButton) newGameButton.classList.remove('hidden');
    }

    function setGameOverButtons(isChallengeOrPassPlay) {
        if (newGameButton) newGameButton.classList.remove('hidden');
    }

    async function winGame(tiles) {
        endGame();
        trackEvent('game_won', {
            mode: state.isDailyMode ? 'daily' : (state.isUnlimitedMode ? 'unlimited' : (state.isChallengeMode ? 'challenge' : (state.isPassAndPlayMode ? 'pass_play' : 'ai_solver'))),
            guesses: state.guessCount,
            difficulty: state.difficulty
        });
        const emojiEl = document.getElementById('game-over-emoji');
        broadcastRoomEvent('complete', {
            won: true,
            guessCount: state.guessCount,
            guesses: state.guesses,
            guessWords: state.guessWords,
            guestName: state.guestName
        });
        if (state.isDailyMode) {
            gameOverTitle.textContent = 'Daily Complete!';
            gameOverText.textContent = `You solved today's word in ${state.guessCount} tries!`;
            if (emojiEl) { emojiEl.textContent = '📅'; emojiEl.className = 'text-5xl text-center leading-none hero-emoji-animate'; }
            restartButton.classList.add('hidden');
            setGameOverButtons(false);
            addWordContainer.classList.add('hidden');
            const streak = saveDailyRecord(true);
            localStorage.removeItem('wordle_daily_progress');
            updateDailyBadge();
            sounds?.win.triggerAttackRelease(["C4", "E4", "G4", "C5"], 0.4);
            launchConfetti();
            for (let i = 0; i < tiles.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 80));
                tiles[i].classList.add('victory-bounce');
            }
            animateWordReveal(state.currentGuessWord, state.guesses[state.guesses.length - 1]);
            setTimeout(() => showDailyResultOverlay(getDailyRecord(), streak), 1400);
            return;
        } else if (state.isUnlimitedMode) {
            if (emojiEl) { emojiEl.textContent = '🎉'; emojiEl.className = 'text-5xl text-center leading-none hero-emoji-animate'; }
            gameOverTitle.textContent = 'Victory!';
            gameOverText.textContent = `Cracked "${state.currentGuessWord.toUpperCase()}" in ${state.guessCount} tries!`;
            applyGameOverContextLayout(true);
        } else if (state.isChallengeMode) {
            if (emojiEl) { emojiEl.textContent = '⚔️'; emojiEl.className = 'text-5xl text-center leading-none hero-emoji-animate'; }
            gameOverTitle.textContent = 'You Won!';
            gameOverText.textContent = `Cracked "${state.currentGuessWord.toUpperCase()}" in ${state.guessCount} tries!`;
            saveChallengeCompletion(getChallengeId(), true, state.guessCount);
            handleChallengeGameOver(true);
            applyGameOverContextLayout(true);
        } else if (state.isPassAndPlayMode) {
            if (emojiEl) { emojiEl.textContent = '🏆'; emojiEl.className = 'text-5xl text-center leading-none hero-emoji-animate'; }
            gameOverTitle.textContent = 'Player 2 Wins!';
            gameOverText.textContent = `Guessed "${state.currentGuessWord.toUpperCase()}" in ${state.guessCount} tries!`;
            applyGameOverContextLayout(true);
        } else {
            if (emojiEl) { emojiEl.textContent = '🎉'; emojiEl.className = 'text-5xl text-center leading-none hero-emoji-animate'; }
            gameOverTitle.textContent = 'I Won!';
            gameOverText.textContent = `Solved "${state.currentGuessWord.toUpperCase()}" in ${state.guessCount} tries!`;
            applyGameOverContextLayout(true);
        }
        sounds?.win.triggerAttackRelease(["C4", "E4", "G4", "C5"], 0.4);
        launchConfetti();
        for (let i = 0; i < tiles.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 80));
            tiles[i].classList.add('victory-bounce');
        }
        animateWordReveal(state.currentGuessWord, state.guesses[state.guesses.length - 1]);
    }

    function endGameNoSolution(message) {
        endGame();
        trackEvent('game_lost', {
            mode: state.isDailyMode ? 'daily' : (state.isUnlimitedMode ? 'unlimited' : (state.isChallengeMode ? 'challenge' : (state.isPassAndPlayMode ? 'pass_play' : 'ai_solver'))),
            guesses: state.guessCount,
            difficulty: state.difficulty
        });
        const emojiEl = document.getElementById('game-over-emoji');
        const wordReveal = document.getElementById('game-over-word-reveal');
        if (wordReveal) wordReveal.classList.add('hidden');
        if (emojiEl) { emojiEl.textContent = '😔'; emojiEl.className = 'text-5xl text-center leading-none hero-emoji-animate'; }

        broadcastRoomEvent('complete', {
            won: false,
            guessCount: state.guessCount,
            guesses: state.guesses,
            guessWords: state.guessWords,
            guestName: state.guestName
        });

        if (state.isDailyMode) {
            gameOverTitle.textContent = 'Daily Failed!';
            gameOverText.textContent = message;
            addWordContainer.classList.add('hidden');
            restartButton.classList.add('hidden');
            setGameOverButtons(false);
            const streak = saveDailyRecord(false);
            localStorage.removeItem('wordle_daily_progress');
            updateDailyBadge();
            setTimeout(() => showDailyResultOverlay(getDailyRecord(), streak), 1200);
        } else if (state.isUnlimitedMode) {
            gameOverTitle.textContent = 'Out of Tries!';
            gameOverText.textContent = `The word was "${(state.challengeWord || state.currentGuessWord).toUpperCase()}".`;
            applyGameOverContextLayout(false);
        } else if (state.isChallengeMode) {
            gameOverTitle.textContent = 'Game Over!';
            gameOverText.textContent = message;
            saveChallengeCompletion(getChallengeId(), false, state.guessCount);
            handleChallengeGameOver(false);
            applyGameOverContextLayout(false);
        } else if (state.isPassAndPlayMode) {
            gameOverTitle.textContent = 'Game Over!';
            gameOverText.textContent = message;
            applyGameOverContextLayout(false);
        } else {
            gameOverTitle.textContent = 'You Stumped Me!';
            gameOverText.textContent = message;
            applyGameOverContextLayout(false);
        }
        sounds?.lose.triggerAttackRelease(["C4", "A3", "F3", "D3"], 0.8);
    }

    function handleAddWord() {
        const userWord = addWordInput.value.toLowerCase();
        if (userWord.length !== 5) {
            showToast('The word must be 5 letters long.');
            return;
        }

        if (checkWordAgainstClues(userWord, state)) {
            if (!wordList.includes(userWord)) {
                wordList.push(userWord);
            }
            if (!customWords.includes(userWord)) {
                customWords.push(userWord);
                try {
                    localStorage.setItem('wordle_custom_words', JSON.stringify(customWords));
                } catch (e) {
                    console.error('Failed to save custom word to localStorage', e);
                }
            }
            gameOverText.textContent = "Thanks for teaching me! My dictionary is updated for next time.";
            addWordContainer.classList.add('hidden');
        } else {
            showToast("That word doesn't match the clues you gave.");
        }
    }

    function endGame() {
        state.isGameOver = true;
        state.isAnimating = true;
        actionArea.classList.add('hidden');
        statusMessage.classList.add('hidden');
        gameOverContainer.classList.remove('hidden');
        insightsPanel.classList.add('hidden');
    }

    function launchConfetti() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
        const confettiCount = 200;
        const colors = ['#6aaa64', '#c9b458', '#787c7e', '#ffffff', '#4f46e5'];
        confettiParticles = [];
        for (let i = 0; i < confettiCount; i++) {
            confettiParticles.push({
                x: Math.random() * confettiCanvas.width,
                y: -Math.random() * confettiCanvas.height,
                size: Math.random() * 5 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                speedX: Math.random() * 3 - 1.5,
                speedY: Math.random() * 5 + 2,
                angle: Math.random() * 360,
                spin: (Math.random() - 0.5) * 10,
            });
        }
        animateConfetti();
    }

    function animateConfetti() {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        let stillAnimating = false;
        confettiParticles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.angle += p.spin;
            p.speedY += 0.05;

            if (p.y < confettiCanvas.height) {
                stillAnimating = true;
                confettiCtx.save();
                confettiCtx.translate(p.x, p.y);
                confettiCtx.rotate(p.angle * Math.PI / 180);
                confettiCtx.fillStyle = p.color;
                confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                confettiCtx.restore();
            }
        });
        if (stillAnimating) {
            requestAnimationFrame(animateConfetti);
        } else {
            confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }
    }

    function handleShare() {
        const emojiMap = { correct: '🟩', present: '🟨', absent: '⬛' };
        let shareText = '';
        if (state.isChallengeMode) {
            const hasWon = state.guesses[state.guesses.length - 1].every(f => f === 'correct');
            const score = hasWon ? `${state.guessCount}/6` : 'X/6';
            shareText = `⚔️ I played my friend's Wordle Challenge!\nResult: ${score}\n\n`;
        } else {
            shareText = `AI Wordle Guesser ${state.guessCount}/6 (${state.difficulty.charAt(0).toUpperCase() + state.difficulty.slice(1)})\n\n`;
        }

        state.guesses.forEach(guess => {
            shareText += guess.map(result => emojiMap[result]).join('') + '\n';
        });

        if (state.isChallengeMode) {
            shareText += `\nPlay this challenge: ${window.location.href}`;
        } else {
            shareText += `\nPlay here: ${window.location.origin}${window.location.pathname}`;
        }

        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            const originalText = shareButton.textContent;
            shareButton.textContent = 'Copied!';
            setTimeout(() => {
                shareButton.textContent = originalText;
            }, 2000);
        } catch (err) {
            gameOverText.textContent = 'Could not copy results.';
        }
        document.body.removeChild(textArea);
    }

    function downloadBoardImage() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const tileSize = 60;
        const gap = 8;
        const padding = 24;
        const headerHeight = 80;

        const width = (tileSize * 5) + (gap * 4) + (padding * 2);
        const height = (tileSize * 6) + (gap * 5) + (padding * 2) + headerHeight;

        canvas.width = width;
        canvas.height = height;

        // Background: clean white
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);

        // Draw title
        ctx.fillStyle = '#1e293b'; // slate-800
        ctx.font = 'bold 22px sans-serif';
        ctx.textAlign = 'center';
        const titleText = state.isChallengeMode ? 'Wordle Challenge' : 'AI Wordle Solver';
        ctx.fillText(titleText, width / 2, padding + 22);

        // Draw score/attempts
        ctx.fillStyle = '#64748b'; // slate-500
        ctx.font = 'bold 15px sans-serif';
        const lastGuess = state.guesses[state.guesses.length - 1];
        const hasWon = lastGuess && lastGuess.every(f => f === 'correct');
        const scoreText = hasWon ? `${state.guessCount}/6` : 'X/6';
        ctx.fillText(scoreText, width / 2, padding + 48);

        // Define colors
        const colorHex = {
            correct: '#6aaa64', // green
            present: '#c9b458', // yellow
            absent: '#787c7e',  // gray
            empty: '#f1f5f9'    // slate-100
        };

        // Draw each grid tile
        for (let r = 0; r < 6; r++) {
            const y = padding + headerHeight + r * (tileSize + gap);
            const feedback = state.guesses[r];
            const word = state.guessWords[r];

            for (let c = 0; c < 5; c++) {
                const x = padding + c * (tileSize + gap);

                let tileColor = colorHex.empty;
                let strokeColor = '#cbd5e1'; // slate-300
                if (feedback) {
                    tileColor = colorHex[feedback[c]] || colorHex.absent;
                    strokeColor = tileColor;
                }

                // Draw rounded tile
                ctx.fillStyle = tileColor;
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = 2;
                ctx.beginPath();
                const radius = 6;
                if (ctx.roundRect) {
                    ctx.roundRect(x, y, tileSize, tileSize, radius);
                } else {
                    ctx.rect(x, y, tileSize, tileSize);
                }
                ctx.fill();
                ctx.stroke();

                // Draw letter text
                if (word && word[c]) {
                    ctx.fillStyle = '#ffffff';
                    ctx.font = 'bold 24px sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(word[c].toUpperCase(), x + tileSize / 2, y + tileSize / 2);
                }
            }
        }

        // Generate download
        const link = document.createElement('a');
        link.download = `wordle-challenge-result.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }

    const modeDetails = {
        ai: {
            title: 'AI Solver Mode',
            tagline: 'I make the guesses, you input the color clues.',
            icon: '🤖',
            themeClass: 'bg-indigo-100 text-indigo-700 border-indigo-200',
            buttonClass: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30',
            buttonText: "Let's Play",
            action: () => {
                modeInfoModal.classList.add('hidden');
                startGame();
            },
            graphics: `
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Choose Secret Word</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Think of any 5-letter word in your head (e.g., <span class="font-mono bg-slate-200 px-1 rounded">SWEET</span>). Keep it hidden!</p>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-indigo-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">AI Makes a Guess</h4>
                        <p class="text-xs text-slate-500 mt-0.5">The AI engine automatically outputs its best guess on the board.</p>
                        <div class="flex gap-1 mt-1.5">
                            <span class="w-6 h-6 bg-slate-800 text-white font-bold text-xs flex items-center justify-center rounded">C</span>
                            <span class="w-6 h-6 bg-slate-800 text-white font-bold text-xs flex items-center justify-center rounded">R</span>
                            <span class="w-6 h-6 bg-slate-800 text-white font-bold text-xs flex items-center justify-center rounded">A</span>
                            <span class="w-6 h-6 bg-slate-800 text-white font-bold text-xs flex items-center justify-center rounded">N</span>
                            <span class="w-6 h-6 bg-slate-800 text-white font-bold text-xs flex items-center justify-center rounded">E</span>
                        </div>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-indigo-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Input Color Clues</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Enter letters corresponding to the colors of each tile on standard Wordle:</p>
                        <div class="grid grid-cols-3 gap-2 mt-2">
                            <div class="flex items-center gap-1.5 bg-green-50 p-1.5 rounded border border-green-200">
                                <span class="w-5 h-5 bg-green-600 text-white text-[10px] font-bold flex items-center justify-center rounded">G</span>
                                <span class="text-[10px] text-green-800 font-semibold">Green</span>
                            </div>
                            <div class="flex items-center gap-1.5 bg-yellow-50 p-1.5 rounded border border-yellow-200">
                                <span class="w-5 h-5 bg-yellow-500 text-white text-[10px] font-bold flex items-center justify-center rounded">Y</span>
                                <span class="text-[10px] text-yellow-800 font-semibold">Yellow</span>
                            </div>
                            <div class="flex items-center gap-1.5 bg-gray-100 p-1.5 rounded border border-gray-200">
                                <span class="w-5 h-5 bg-gray-500 text-white text-[10px] font-bold flex items-center justify-center rounded">B</span>
                                <span class="text-[10px] text-gray-700 font-semibold">Gray</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-indigo-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">AI Iterates & Solves</h4>
                        <p class="text-xs text-slate-500 mt-0.5">The AI filters the remaining dictionary based on your feedback and calculates the optimal next guess until solved!</p>
                    </div>
                </div>
            `
        },
        challenge: {
            title: 'Challenge Mode',
            tagline: 'Create a custom word and challenge others.',
            icon: '⚔️',
            themeClass: 'bg-purple-100 text-purple-700 border-purple-200',
            buttonClass: 'bg-purple-600 hover:bg-purple-700 shadow-purple-600/30',
            buttonText: 'Setup Challenge',
            action: () => {
                modeInfoModal.classList.add('hidden');
                openChallengeModal();
            },
            graphics: `
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Set Secret Word</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Type any valid 5-letter word you want your friend to guess.</p>
                        <div class="mt-1.5 flex gap-1 font-mono text-xs">
                            <span class="px-2 py-1 bg-purple-50 border border-purple-200 text-purple-700 rounded font-semibold tracking-wider font-bold">G</span>
                            <span class="px-2 py-1 bg-purple-50 border border-purple-200 text-purple-700 rounded font-semibold tracking-wider font-bold">H</span>
                            <span class="px-2 py-1 bg-purple-50 border border-purple-200 text-purple-700 rounded font-semibold tracking-wider font-bold">O</span>
                            <span class="px-2 py-1 bg-purple-50 border border-purple-200 text-purple-700 rounded font-semibold tracking-wider font-bold">S</span>
                            <span class="px-2 py-1 bg-purple-50 border border-purple-200 text-purple-700 rounded font-semibold tracking-wider font-bold">T</span>
                        </div>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-purple-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Generate & Copy Link</h4>
                        <p class="text-xs text-slate-500 mt-0.5">The app encrypts the word and compiles a unique sharing link.</p>
                        <div class="mt-1.5 flex items-center gap-1 bg-slate-100 p-1.5 rounded border border-slate-200 text-[10px] text-slate-500 select-all overflow-hidden truncate">
                            https://wordle-hub.app/?challenge=Z2hvc3Q=
                        </div>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-purple-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Share with a Friend</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Send the generated link to a friend to challenge their spelling skills.</p>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-purple-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">They Play Locally</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Your friend opens the link and tries to guess the word, or lets the AI assist them!</p>
                    </div>
                </div>
            `
        },
        passplay: {
            title: 'Pass \'n Play Mode',
            tagline: 'Local 2-player mode on the same device.',
            icon: '👥',
            themeClass: 'bg-emerald-100 text-emerald-700 border-emerald-200',
            buttonClass: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30',
            buttonText: 'Start Setup',
            action: () => {
                modeInfoModal.classList.add('hidden');
                passPlaySetupOverlay.classList.remove('hidden');
                passPlayScreenWord.classList.remove('hidden');
                passPlayScreenHandover.classList.add('hidden');
                passPlayWordInput.value = '';
                passPlayWordInput.type = 'password';
                passPlayStatus.textContent = '';
                passPlayWordInput.focus();
            },
            graphics: `
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Player 1 Sets Word</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Type a secret 5-letter word. It will be hidden behind a secure password field.</p>
                        <div class="mt-1.5 flex gap-1 font-mono text-xs">
                            <span class="w-6 h-6 bg-slate-100 border rounded flex items-center justify-center text-slate-600 font-bold">•</span>
                            <span class="w-6 h-6 bg-slate-100 border rounded flex items-center justify-center text-slate-600 font-bold">•</span>
                            <span class="w-6 h-6 bg-slate-100 border rounded flex items-center justify-center text-slate-600 font-bold">•</span>
                            <span class="w-6 h-6 bg-slate-100 border rounded flex items-center justify-center text-slate-600 font-bold">•</span>
                            <span class="w-6 h-6 bg-slate-100 border rounded flex items-center justify-center text-slate-600 font-bold">•</span>
                        </div>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-emerald-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Pass the Device</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Hand the device over to Player 2. The secret word is hidden so they can't peek.</p>
                        <div class="mt-1.5 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold bg-emerald-50 border border-emerald-100 p-1.5 rounded max-w-xs">
                            <span>👥</span> Pass to Player 2!
                        </div>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-emerald-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Player 2 Guesses</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Player 2 makes guesses on the board to figure out the word in 6 attempts.</p>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-emerald-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Result Summary</h4>
                        <p class="text-xs text-slate-500 mt-0.5">See if Player 2 beats the challenge or runs out of guesses!</p>
                    </div>
                </div>
            `
        },
        unlimited: {
            title: 'Unlimited Practice',
            tagline: 'Play endless Wordles with random words and build your stats!',
            icon: '♾️',
            themeClass: 'bg-sky-100 text-sky-700 border-sky-200',
            buttonClass: 'bg-sky-600 hover:bg-sky-700 shadow-sky-600/30',
            buttonText: 'Start Unlimited Practice',
            action: () => {
                modeInfoModal.classList.add('hidden');
                state.isUnlimitedMode = true;
                state.isChallengeMode = false;
                state.isPassAndPlayMode = false;
                state.isDailyMode = false;
                state.challengeWord = wordList[Math.floor(Math.random() * wordList.length)];
                startGame();
            },
            graphics: `
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Random Target Words</h4>
                        <p class="text-xs text-slate-500 mt-0.5">A fresh secret word is chosen every single round.</p>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-sky-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Endless Play</h4>
                        <p class="text-xs text-slate-500 mt-0.5">No 24-hour limit! Keep playing as many rounds as you like.</p>
                    </div>
                </div>
                <div class="w-0.5 h-4 bg-sky-100 ml-3"></div>
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-slate-700 text-sm">Track Stats & Streaks</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Keep track of your wins, streaks, win rate, and guess distributions.</p>
                    </div>
                </div>
            `
        }
    };

    let currentModeAction = null;

    function showModeExplanation(modeKey) {
        const details = modeDetails[modeKey];
        if (!details) return;

        // Hide main mode selection overlay
        modeSelectionOverlay.classList.add('hidden');

        // Set content
        modeInfoTitle.textContent = details.title;
        modeInfoTagline.textContent = details.tagline;
        modeInfoIcon.textContent = details.icon;
        modeInfoGraphics.innerHTML = details.graphics;
        modeInfoActionBtn.textContent = details.buttonText;

        // Setup theme specific classes on icon container and action button
        modeInfoIconContainer.className = "w-16 h-16 rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm transition-all duration-300 " + details.themeClass;
        modeInfoActionBtn.className = "w-full text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 " + details.buttonClass;

        // Set action callback
        currentModeAction = details.action;

        // Show/hide difficulty selector (only for AI mode)
        if (difficultySelector) {
            difficultySelector.classList.toggle('hidden', modeKey !== 'ai');
        }

        // Show modal
        modeInfoModal.classList.remove('hidden');
    }

    submitButton.addEventListener('click', handleFeedback);
    restartButton.addEventListener('click', () => {
        if (state.isUnlimitedMode) {
            state.challengeWord = wordList[Math.floor(Math.random() * wordList.length)];
            gameOverContainer.classList.add('hidden');
            startGame();
        } else if (state.isChallengeMode) {
            startGame();
        } else {
            openModeSelection();
        }
    });
    addWordButton.addEventListener('click', handleAddWord);
    shareButton.addEventListener('click', handleShare);
    shareImageButton.addEventListener('click', downloadBoardImage);
    newGameButton?.addEventListener('click', () => {
        state.isChallengeMode = false;
        state.challengeWord = null;
        state.isPassAndPlayMode = false;
        state.passAndPlayWord = null;
        const cleanUrl = `${window.location.origin}${window.location.pathname}`;
        window.history.replaceState({}, document.title, cleanUrl);
        openModeSelection();
    });

    closeGameOverBtn?.addEventListener('click', () => {
        gameOverContainer.classList.add('hidden');
    });

    headerTitle?.addEventListener('click', () => {
        state.isChallengeMode = false;
        state.challengeWord = null;
        state.isPassAndPlayMode = false;
        state.passAndPlayWord = null;
        const cleanUrl = `${window.location.origin}${window.location.pathname}`;
        window.history.replaceState({}, document.title, cleanUrl);
        openModeSelection();
    });

    acceptChallengeBtn?.addEventListener('click', async () => {
        if (acceptChallengeBtn.disabled) return;

        const originalText = acceptChallengeBtn.innerHTML;
        acceptChallengeBtn.disabled = true;
        acceptChallengeBtn.innerHTML = `
            <div class="flex items-center justify-center gap-2">
                <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white text-white"></div>
                <span>Starting...</span>
            </div>
        `;

        const challengeId = getChallengeId();

        // 1. Initialize session in Supabase (if configured)
        if (ChallengeDb.isConfigured() && challengeId) {
            const session = await ChallengeDb.ensureSession();
            const fingerprint = state.fingerprint || (session ? session.user_id : getDeviceFingerprint());
            const ipAddress = state.ipAddress || await getPublicIpAddress();
            state.fingerprint = fingerprint;
            state.ipAddress = ipAddress;

            await ChallengeDb.initializeSession(challengeId, state.challengeWord, fingerprint, ipAddress);
        }

        // 2. Reset acceptBtn style and transition to game
        acceptChallengeBtn.disabled = false;
        acceptChallengeBtn.innerHTML = originalText;

        if (challengeLandingOverlay) {
            challengeLandingOverlay.classList.add('hidden');
        }
        feedbackInput.disabled = false;
        submitButton.disabled = false;
        feedbackInput.focus();
        state.startTime = getSecureDate().getTime();
        saveGameProgress();
    });

    challengeLandingBackBtn?.addEventListener('click', () => {
        if (challengeLandingOverlay) {
            challengeLandingOverlay.classList.add('hidden');
        }
        state.isChallengeMode = false;
        state.challengeWord = null;
        const cleanUrl = `${window.location.origin}${window.location.pathname}`;
        window.history.replaceState({}, document.title, cleanUrl);
        openModeSelection();
    });

    closeDefBtn?.addEventListener('click', () => {
        if (definitionModal) {
            definitionModal.classList.add('hidden');
        }
    });

    definitionModal?.addEventListener('click', (e) => {
        if (e.target === definitionModal) {
            definitionModal.classList.add('hidden');
        }
    });

    gameBoard.addEventListener('click', (e) => {
        const row = e.target.closest('[id^="row-"]');
        if (row) {
            const rowIdx = parseInt(row.id.split('-')[1]);
            const word = state.guessWords[rowIdx];
            if (word) {
                showWordDefinition(word);
            }
        }
    });

    difficultyNormalBtn.addEventListener('click', () => {
        state.difficulty = 'normal';
        difficultyNormalBtn.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-500', 'text-white');
        difficultyNormalBtn.classList.remove('bg-gray-200', 'text-gray-700');
        difficultyHardBtn.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-500', 'text-white');
        difficultyHardBtn.classList.add('bg-gray-200', 'text-gray-700');
    });
    difficultyHardBtn.addEventListener('click', () => {
        state.difficulty = 'hard';
        difficultyHardBtn.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-500', 'text-white');
        difficultyHardBtn.classList.remove('bg-gray-200', 'text-gray-700');
        difficultyNormalBtn.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-500', 'text-white');
        difficultyNormalBtn.classList.add('bg-gray-200', 'text-gray-700');
    });

    feedbackInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleFeedback();
        }
    });
    addWordInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleAddWord();
        }
    });

    howToPlayButton.addEventListener('click', () => {
        howToPlayModal.classList.remove('opacity-0', 'pointer-events-none');
    });

    closeModalButton.addEventListener('click', () => {
        howToPlayModal.classList.add('opacity-0', 'pointer-events-none');
    });

    howToPlayModal.addEventListener('click', (e) => {
        if (e.target === howToPlayModal) {
            howToPlayModal.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    // Challenge Mode Event Listeners
    const openChallengeModal = () => {
        challengeWordInput.value = '';
        challengeStatus.textContent = '';
        challengeLinkContainer.classList.add('hidden');
        challengeModal.classList.remove('opacity-0', 'pointer-events-none');
        challengeWordInput.focus();
        loadCreatorChallenges();
    };

    challengeButton?.addEventListener('click', openChallengeModal);
    gameOverChallengeButton?.addEventListener('click', openChallengeModal);

    closeChallengeModalButton?.addEventListener('click', () => {
        challengeModal.classList.add('opacity-0', 'pointer-events-none');
    });

    challengeModal?.addEventListener('click', (e) => {
        if (e.target === challengeModal) {
            challengeModal.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    generateChallengeButton?.addEventListener('click', async () => {
        const word = challengeWordInput.value.trim().toLowerCase();
        if (word.length !== 5) {
            challengeStatus.textContent = 'Word must be exactly 5 letters long!';
            challengeWordInput.classList.add('shake');
            setTimeout(() => challengeWordInput.classList.remove('shake'), 600);
            return;
        }

        if (!/^[a-z]{5}$/.test(word)) {
            challengeStatus.textContent = 'Word must contain only letters!';
            challengeWordInput.classList.add('shake');
            setTimeout(() => challengeWordInput.classList.remove('shake'), 600);
            return;
        }

        // Validate against dictionary — must be a real Wordle word
        const inBase = wordList.includes(word);
        const inExtended = extendedWordList.length > 0 && extendedWordList.includes(word);
        if (!inBase && !inExtended) {
            challengeStatus.textContent = extendedWordList.length === 0
                ? 'Dictionary still loading — try again in a moment!'
                : 'Nope. Try something your English teacher would approve of.';
            challengeWordInput.classList.add('shake');
            setTimeout(() => challengeWordInput.classList.remove('shake'), 600);
            return;
        }

        challengeStatus.textContent = '';
        generateChallengeButton.disabled = true;
        const originalBtnText = generateChallengeButton.innerHTML;
        generateChallengeButton.innerHTML = 'Generating...';

        try {
            let challengeCode = '';
            const timestamp = Date.now();

            if (ChallengeDb.isConfigured()) {
                const uuid = crypto.randomUUID();
                const success = await ChallengeDb.createChallengeMetadata(uuid, word);
                if (success) {
                    challengeCode = `db_${uuid}`;
                } else {
                    console.warn('DB creation failed, falling back to URL encoding');
                    challengeCode = btoa(word + '|' + timestamp);
                }
            } else {
                challengeCode = btoa(word + '|' + timestamp);
            }

            const challengeUrl = `${window.location.origin}${window.location.pathname}?challenge=${challengeCode}`;
            challengeLinkInput.value = challengeUrl;
            challengeLinkContainer.classList.remove('hidden');

            CreatorHistory.saveChallenge(word, timestamp);
            loadCreatorChallenges();
        } catch (e) {
            console.error('Failed to generate challenge:', e);
            challengeStatus.textContent = 'Error creating challenge link.';
        } finally {
            generateChallengeButton.disabled = false;
            generateChallengeButton.innerHTML = originalBtnText;
        }
    });

    copyChallengeLinkButton?.addEventListener('click', () => {
        challengeLinkInput.select();
        try {
            document.execCommand('copy');
            const originalText = copyChallengeLinkButton.textContent;
            copyChallengeLinkButton.textContent = 'Copied!';
            copyChallengeLinkButton.classList.replace('bg-green-500', 'bg-indigo-600');
            setTimeout(() => {
                copyChallengeLinkButton.textContent = originalText;
                copyChallengeLinkButton.classList.replace('bg-indigo-600', 'bg-green-500');
            }, 2000);
        } catch (err) {
            challengeStatus.textContent = 'Could not copy link.';
        }
    });

    exitChallengeButton?.addEventListener('click', () => {
        state.isChallengeMode = false;
        state.challengeWord = null;
        const cleanUrl = `${window.location.origin}${window.location.pathname}`;
        window.history.replaceState({}, document.title, cleanUrl);
        openModeSelection();
    });

    // ── Challenge Leaderboards Controller & Listeners ──

    function getChallengeId() {
        if (!state.isChallengeMode) return '';
        if (state.challengeIdOverride) return state.challengeIdOverride;
        if (state.challengeWord && state.challengeTimestamp) {
            return `${state.challengeWord}|${state.challengeTimestamp}`;
        }
        return state.challengeWord || '';
    }

    function handleChallengeGameOver(won) {
        if (!state.isChallengeMode) return;

        const challengeId = getChallengeId();
        if (challengeId) {
            localStorage.removeItem(`wordle_challenge_progress_${challengeId}`);
        }

        // 1. Calculate time
        const endTime = getSecureDate().getTime();
        const elapsedMs = state.startTime ? (endTime - state.startTime) : 0;
        const timeSeconds = Math.max(1, Math.floor(elapsedMs / 1000));

        state.completionTime = timeSeconds;
        state.completionWon = won;

        // 2. Show View Leaderboard button
        if (gameOverLeaderboardBtn) {
            gameOverLeaderboardBtn.classList.remove('hidden');
        }

        // 3. Show name input if not submitted yet
        if (!state.scoreSubmitted) {
            if (challengeLeaderboardSubmitContainer) {
                challengeLeaderboardSubmitContainer.classList.remove('hidden');
            }
            if (leaderboardPlayerName) {
                const savedName = localStorage.getItem('wordle_leaderboard_player_name') || '';
                leaderboardPlayerName.value = savedName;
                setTimeout(() => leaderboardPlayerName.focus(), 500);
            }
        } else {
            if (challengeLeaderboardSubmitContainer) {
                challengeLeaderboardSubmitContainer.classList.add('hidden');
            }
        }
    }

    async function renderLeaderboard(challengeId, word) {
        if (!leaderboardModal || !leaderboardWordDisplay || !leaderboardListContainer) return;

        leaderboardWordDisplay.textContent = word.toUpperCase();
        leaderboardModal.classList.remove('hidden');

        leaderboardListContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 text-slate-400">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-2"></div>
                <span>Fetching scores...</span>
            </div>
        `;

        const scores = await ChallengeDb.getScores(challengeId);

        leaderboardListContainer.innerHTML = '';

        if (scores.length === 0) {
            leaderboardListContainer.innerHTML = `
                <div class="text-center py-8 text-slate-500 dark:text-slate-400 font-medium italic">
                    No scores yet. Be the first to solve it!
                </div>
            `;
            return;
        }

        const currentName = leaderboardPlayerName ? leaderboardPlayerName.value.trim().toLowerCase() : '';

        scores.forEach((score, index) => {
            const rank = index + 1;
            const row = document.createElement('div');

            const isSelf = state.scoreSubmitted &&
                score.player_name.toLowerCase() === currentName &&
                score.guesses === state.guessCount &&
                score.won === state.completionWon;

            row.className = `leaderboard-row flex items-center px-3 py-2.5 rounded-xl border border-transparent text-sm ${isSelf ? 'highlight-self bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800' : 'bg-slate-100/60 dark:bg-slate-800/20'}`;

            const rankCol = document.createElement('div');
            rankCol.className = 'w-12 flex justify-center';
            const badge = document.createElement('span');
            badge.className = `rank-badge ${rank === 1 ? 'rank-badge-1' : rank === 2 ? 'rank-badge-2' : rank === 3 ? 'rank-badge-3' : 'rank-badge-other'}`;
            badge.textContent = rank;
            rankCol.appendChild(badge);

            const nameCol = document.createElement('div');
            nameCol.className = `flex-1 pl-2 truncate font-semibold text-slate-800 dark:text-slate-100 ${isSelf ? 'font-bold text-purple-900 dark:text-purple-300' : ''}`;
            nameCol.textContent = score.player_name;
            if (isSelf) {
                const youTag = document.createElement('span');
                youTag.className = 'ml-1.5 text-[10px] bg-purple-600 text-white font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider';
                youTag.textContent = 'YOU';
                nameCol.appendChild(youTag);
            }

            const guessesCol = document.createElement('div');
            guessesCol.className = 'w-16 text-center font-bold text-slate-800 dark:text-slate-100';
            guessesCol.textContent = score.won ? `${score.guesses}/6` : 'X/6';
            if (!score.won) {
                guessesCol.className += ' text-red-500 dark:text-red-400';
            }

            const timeCol = document.createElement('div');
            timeCol.className = 'w-16 text-center text-slate-600 dark:text-slate-200 font-mono text-xs font-semibold';

            const timeSec = score.time_seconds;
            if (timeSec < 60) {
                timeCol.textContent = `${timeSec}s`;
            } else {
                const mins = Math.floor(timeSec / 60);
                const secs = timeSec % 60;
                timeCol.textContent = `${mins}m ${secs}s`;
            }

            row.appendChild(rankCol);
            row.appendChild(nameCol);
            row.appendChild(guessesCol);
            row.appendChild(timeCol);

            leaderboardListContainer.appendChild(row);
        });
    }

    function loadCreatorChallenges() {
        if (!creatorChallengesList || !creatorChallengesContainer) return;
        const challenges = CreatorHistory.getChallenges();
        if (challenges.length === 0) {
            creatorChallengesContainer.classList.add('hidden');
            return;
        }

        creatorChallengesContainer.classList.remove('hidden');
        creatorChallengesList.innerHTML = '';

        challenges.forEach(item => {
            const row = document.createElement('div');
            row.className = 'creator-challenge-item flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800 text-xs';

            const info = document.createElement('div');
            info.className = 'flex flex-col';
            const wordSpan = document.createElement('span');
            wordSpan.className = 'font-bold uppercase text-purple-600 dark:text-purple-400 font-mono tracking-wider';
            wordSpan.textContent = item.word;

            const timeSpan = document.createElement('span');
            timeSpan.className = 'text-[10px] text-slate-400';

            const hoursLeft = 24 - (Date.now() - item.timestamp) / (1000 * 60 * 60);
            if (hoursLeft > 1) {
                timeSpan.textContent = `${Math.floor(hoursLeft)}h left`;
            } else if (hoursLeft > 0) {
                timeSpan.textContent = `${Math.floor(hoursLeft * 60)}m left`;
            } else {
                timeSpan.textContent = `Expired`;
            }

            info.appendChild(wordSpan);
            info.appendChild(timeSpan);

            const actions = document.createElement('div');
            actions.className = 'flex gap-1.5';

            const copyBtn = document.createElement('button');
            copyBtn.className = 'bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 font-bold px-2 py-1 rounded text-[10px] transition-colors';
            copyBtn.textContent = 'Link';
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const code = btoa(item.word + '|' + item.timestamp);
                const url = `${window.location.origin}${window.location.pathname}?challenge=${code}`;
                navigator.clipboard.writeText(url).then(() => {
                    showToast('Challenge link copied!');
                }).catch(err => {
                    console.error('Failed to copy', err);
                });
            });

            const viewBtn = document.createElement('button');
            viewBtn.className = 'bg-purple-600 hover:bg-purple-700 text-white font-bold px-2 py-1 rounded text-[10px] transition-colors';
            viewBtn.textContent = 'View';
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (challengeModal) {
                    challengeModal.classList.add('opacity-0', 'pointer-events-none');
                }
                const challengeId = `${item.word}|${item.timestamp}`;
                renderLeaderboard(challengeId, item.word);
            });

            actions.appendChild(copyBtn);
            actions.appendChild(viewBtn);

            row.appendChild(info);
            row.appendChild(actions);
            creatorChallengesList.appendChild(row);
        });
    }

    // Leaderboards Event Listeners
    submitLeaderboardBtn?.addEventListener('click', async () => {
        const name = leaderboardPlayerName.value.trim();
        if (name.length < 2) {
            showToast('Name must be at least 2 characters.');
            leaderboardPlayerName.classList.add('shake');
            setTimeout(() => leaderboardPlayerName.classList.remove('shake'), 600);
            return;
        }
        if (name.length > 15) {
            showToast('Name cannot exceed 15 characters.');
            leaderboardPlayerName.classList.add('shake');
            setTimeout(() => leaderboardPlayerName.classList.remove('shake'), 600);
            return;
        }
        if (!/^[a-zA-Z0-9\s_-]+$/.test(name)) {
            showToast('Name contains invalid characters.');
            leaderboardPlayerName.classList.add('shake');
            setTimeout(() => leaderboardPlayerName.classList.remove('shake'), 600);
            return;
        }

        localStorage.setItem('wordle_leaderboard_player_name', name);

        submitLeaderboardBtn.disabled = true;
        const originalText = submitLeaderboardBtn.textContent;
        submitLeaderboardBtn.innerHTML = `<span class="animate-pulse">Submitting...</span>`;

        const challengeId = getChallengeId();
        const success = await ChallengeDb.submitScore(
            challengeId,
            state.challengeWord,
            name,
            state.guessCount,
            state.completionTime,
            state.completionWon
        );

        submitLeaderboardBtn.disabled = false;
        submitLeaderboardBtn.textContent = originalText;

        if (success) {
            showToast('Score submitted successfully!');
            state.scoreSubmitted = true;
            if (challengeLeaderboardSubmitContainer) {
                challengeLeaderboardSubmitContainer.classList.add('hidden');
            }
            renderLeaderboard(challengeId, state.challengeWord);
        } else {
            showToast('Failed to submit score. Try again.');
        }
    });

    closeLeaderboardModal?.addEventListener('click', () => {
        leaderboardModal.classList.add('hidden');
    });

    leaderboardModal?.addEventListener('click', (e) => {
        if (e.target === leaderboardModal) {
            leaderboardModal.classList.add('hidden');
        }
    });

    leaderboardRefreshBtn?.addEventListener('click', () => {
        const challengeId = getChallengeId();
        const word = state.challengeWord || (leaderboardWordDisplay ? leaderboardWordDisplay.textContent.toLowerCase() : '');
        if (challengeId && word) {
            renderLeaderboard(challengeId, word);
        } else {
            const activeHeaderWord = leaderboardWordDisplay ? leaderboardWordDisplay.textContent.toLowerCase() : '';
            const history = CreatorHistory.getChallenges();
            const match = history.find(h => h.word.toLowerCase() === activeHeaderWord);
            if (match) {
                renderLeaderboard(`${match.word}|${match.timestamp}`, match.word);
            }
        }
    });

    leaderboardShareBtn?.addEventListener('click', async () => {
        const activeHeaderWord = leaderboardWordDisplay ? leaderboardWordDisplay.textContent.toUpperCase() : '';
        let challengeId = getChallengeId();
        if (!challengeId && activeHeaderWord) {
            const history = CreatorHistory.getChallenges();
            const match = history.find(h => h.word.toUpperCase() === activeHeaderWord);
            if (match) {
                challengeId = `${match.word}|${match.timestamp}`;
            }
        }

        if (!challengeId) return;

        const scores = await ChallengeDb.getScores(challengeId);
        if (scores.length === 0) {
            showToast('Leaderboard is empty — nothing to share.');
            return;
        }

        let text = `🏆 Wordle Challenge Leaderboard: "${activeHeaderWord}"\n`;
        scores.slice(0, 5).forEach((score, index) => {
            const timeStr = score.time_seconds < 60
                ? `${score.time_seconds}s`
                : `${Math.floor(score.time_seconds / 60)}m ${score.time_seconds % 60}s`;
            const scoreStr = score.won ? `${score.guesses}/6` : 'X/6';
            text += `${index + 1}. ${score.player_name} (${scoreStr}, ${timeStr})\n`;
        });
        text += `\nPlay this challenge here: ${window.location.origin}${window.location.pathname}?challenge=${btoa(challengeId)}`;

        navigator.clipboard.writeText(text).then(() => {
            showToast('Leaderboard copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy leaderboard text', err);
        });
    });

    gameOverLeaderboardBtn?.addEventListener('click', () => {
        renderLeaderboard(getChallengeId(), state.challengeWord);
    });

    creatorViewLeaderboardBtn?.addEventListener('click', () => {
        const word = challengeWordInput.value.trim().toLowerCase();
        const history = CreatorHistory.getChallenges();
        const newest = history.find(h => h.word.toLowerCase() === word);
        if (newest) {
            challengeModal.classList.add('opacity-0', 'pointer-events-none');
            renderLeaderboard(`${newest.word}|${newest.timestamp}`, newest.word);
        } else {
            showToast('Could not find active challenge.');
        }
    });

    landingLeaderboardBtn?.addEventListener('click', () => {
        renderLeaderboard(getChallengeId(), state.challengeWord);
    });

    // Pass 'n Play & Mode Selection Event Listeners
    modeAiBtn?.addEventListener('click', () => {
        showModeExplanation('ai');
    });

    modeChallengeBtn?.addEventListener('click', () => {
        showModeExplanation('challenge');
    });

    hubViewChallengesBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (modeSelectionOverlay) {
            modeSelectionOverlay.classList.add('hidden');
        }
        openChallengeModal();
    });

    modePassPlayBtn?.addEventListener('click', () => {
        showModeExplanation('passplay');
    });

    modeDailyBtn?.addEventListener('click', () => {
        const record = getDailyRecord();
        if (record && record.completed) {
            // Already played today — show results overlay directly
            const streak = getDailyStreakData();
            showDailyResultOverlay(record, streak);
        } else {
            // Fresh game — start daily mode
            state.isDailyMode = true;
            state.dailyWord = getDailyWord();
            modeSelectionOverlay.classList.add('hidden');
            startGame();
        }
    });

    const modeUnlimitedBtn = document.getElementById('mode-unlimited-btn');
    const unlimitedBanner = document.getElementById('unlimited-banner');
    const exitUnlimitedButton = document.getElementById('exit-unlimited-button');
    const unlimitedStatsContainer = document.getElementById('unlimited-stats-container');
    const unlimitedStatPlayed = document.getElementById('unlimited-stat-played');
    const unlimitedStatWinPct = document.getElementById('unlimited-stat-win-pct');
    const unlimitedStatStreak = document.getElementById('unlimited-stat-streak');
    const unlimitedStatBest = document.getElementById('unlimited-stat-best');
    const unlimitedToggleDetailsBtn = document.getElementById('unlimited-toggle-details-btn');

    modeUnlimitedBtn?.addEventListener('click', () => {
        showModeExplanation('unlimited');
    });

    exitUnlimitedButton?.addEventListener('click', () => openModeSelection());
    
    unlimitedToggleDetailsBtn?.addEventListener('click', () => {
        const container = document.getElementById('unlimited-detailed-stats-container');
        const icon = document.getElementById('unlimited-toggle-icon');
        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            container.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    });

    // Live Multiplayer Room Setup Listeners
    modeLiveRoomBtn?.addEventListener('click', () => {
        if (modeSelectionOverlay) modeSelectionOverlay.classList.add('hidden');
        if (liveRoomSetupModal) liveRoomSetupModal.classList.remove('hidden');

        // Pre-fill stored names
        const savedHost = localStorage.getItem('wordle_host_name') || '';
        const savedGuest = localStorage.getItem('wordle_guest_name') || '';
        if (liveHostNameInput && savedHost) liveHostNameInput.value = savedHost;
        if (liveGuestNameInput && savedGuest) liveGuestNameInput.value = savedGuest;
    });

    closeLiveRoomSetup?.addEventListener('click', () => {
        if (liveRoomSetupModal) liveRoomSetupModal.classList.add('hidden');
        openModeSelection();
    });

    liveTabCreateBtn?.addEventListener('click', () => {
        liveTabCreateBtn.className = 'flex-1 py-2 text-center font-semibold text-xs sm:text-sm rounded-lg transition-all bg-emerald-600 text-white shadow-sm';
        liveTabJoinBtn.className = 'flex-1 py-2 text-center font-semibold text-xs sm:text-sm rounded-lg transition-all text-slate-500 hover:text-slate-700 dark:text-slate-400';
        liveTabCreateContent.classList.remove('hidden');
        liveTabJoinContent.classList.add('hidden');
    });

    liveTabJoinBtn?.addEventListener('click', () => {
        liveTabJoinBtn.className = 'flex-1 py-2 text-center font-semibold text-xs sm:text-sm rounded-lg transition-all bg-emerald-600 text-white shadow-sm';
        liveTabCreateBtn.className = 'flex-1 py-2 text-center font-semibold text-xs sm:text-sm rounded-lg transition-all text-slate-500 hover:text-slate-700 dark:text-slate-400';
        liveTabJoinContent.classList.remove('hidden');
        liveTabCreateContent.classList.add('hidden');
    });

    liveRandomWordBtn?.addEventListener('click', () => {
        if (wordList && wordList.length > 0) {
            const random = wordList[Math.floor(Math.random() * wordList.length)];
            if (liveSecretWordInput) liveSecretWordInput.value = random.toUpperCase();
        }
    });

    liveStartHostBtn?.addEventListener('click', async () => {
        const hostName = liveHostNameInput ? liveHostNameInput.value.trim() : 'Host';
        const word = liveSecretWordInput ? liveSecretWordInput.value.trim().toLowerCase() : '';

        if (!hostName) {
            if (liveCreateStatus) liveCreateStatus.textContent = 'Please enter your host name!';
            return;
        }

        if (word.length !== 5 || !/^[a-z]{5}$/.test(word)) {
            if (liveCreateStatus) liveCreateStatus.textContent = 'Secret word must be exactly 5 letters!';
            return;
        }

        if (!wordList.includes(word) && (!extendedWordList || !extendedWordList.includes(word))) {
            if (liveCreateStatus) liveCreateStatus.textContent = 'Word not in valid dictionary!';
            return;
        }

        if (liveCreateStatus) liveCreateStatus.textContent = '';
        await createLiveRoom(hostName, word);
    });

    liveSubmitJoinBtn?.addEventListener('click', async () => {
        const guestName = liveGuestNameInput ? liveGuestNameInput.value.trim() : 'Guest';
        const code = liveRoomCodeInput ? liveRoomCodeInput.value.trim() : '';

        if (!guestName) {
            if (liveJoinStatus) liveJoinStatus.textContent = 'Please enter your name!';
            return;
        }

        if (code.length !== 4 || !/^\d{4}$/.test(code)) {
            if (liveJoinStatus) liveJoinStatus.textContent = 'Room code must be a 4-digit number!';
            return;
        }

        if (liveJoinStatus) liveJoinStatus.textContent = '';
        await joinLiveRoom(code, guestName);
    });

    // Spectator Modal Listeners
    spectatorCopyLinkBtn?.addEventListener('click', () => {
        if (!state.roomCode) return;
        const link = `${window.location.origin}${window.location.pathname}?room=${state.roomCode}`;
        navigator.clipboard.writeText(link).then(() => {
            showToast('Room link copied! Send it to your friend.');
        }).catch(err => {
            console.error('Failed to copy room link:', err);
        });
    });

    spectatorExitBtn?.addEventListener('click', () => {
        initLiveRoomState();
        if (liveRoomSpectatorModal) liveRoomSpectatorModal.classList.add('hidden');
        document.getElementById('host-match-result-modal')?.classList.add('hidden');
        openModeSelection();
    });

    function getRandomWord() {
        if (!wordList || wordList.length === 0) return 'APPLE';
        return wordList[Math.floor(Math.random() * wordList.length)];
    }

    // Host Result Modal & Rematch Listeners
    document.getElementById('host-rematch-btn')?.addEventListener('click', () => {
        const input = document.getElementById('rematch-secret-word-input');
        if (input) input.value = getRandomWord().toUpperCase();
        const roundNumEl = document.getElementById('rematch-round-number');
        if (roundNumEl) roundNumEl.textContent = (state.roomRound || 1) + 1;
        const errEl = document.getElementById('rematch-error-status');
        if (errEl) errEl.textContent = '';
        document.getElementById('host-rematch-selector-modal')?.classList.remove('hidden');
    });

    document.getElementById('close-rematch-selector')?.addEventListener('click', () => {
        document.getElementById('host-rematch-selector-modal')?.classList.add('hidden');
    });

    document.getElementById('rematch-random-word-btn')?.addEventListener('click', () => {
        const input = document.getElementById('rematch-secret-word-input');
        if (input) input.value = getRandomWord().toUpperCase();
    });

    document.getElementById('host-new-room-btn')?.addEventListener('click', () => {
        document.getElementById('host-match-result-modal')?.classList.add('hidden');
        document.getElementById('live-room-spectator-modal')?.classList.add('hidden');
        initLiveRoomState();
        if (liveRoomSetupModal) liveRoomSetupModal.classList.remove('hidden');
    });

    document.getElementById('host-exit-to-menu-btn')?.addEventListener('click', () => {
        document.getElementById('host-match-result-modal')?.classList.add('hidden');
        document.getElementById('live-room-spectator-modal')?.classList.add('hidden');
        initLiveRoomState();
        openModeSelection();
    });

    document.getElementById('confirm-rematch-start-btn')?.addEventListener('click', async () => {
        const input = document.getElementById('rematch-secret-word-input');
        const errEl = document.getElementById('rematch-error-status');
        const newWord = (input ? input.value : '').trim().toLowerCase();

        if (newWord.length !== 5 || !/^[a-z]{5}$/.test(newWord)) {
            if (errEl) errEl.textContent = 'Please enter a valid 5-letter word.';
            return;
        }
        if (!wordList.includes(newWord) && (!extendedWordList || !extendedWordList.includes(newWord))) {
            if (errEl) errEl.textContent = 'Not in word list! Try another.';
            return;
        }

        state.roomRound = (state.roomRound || 1) + 1;
        state.spectatorBoardState = { guesses: [], guessWords: [], currentTyped: '', won: null };
        renderSpectatorBoard();
        startSpectatorTimer();

        if (spectatorWordDisplay) spectatorWordDisplay.textContent = newWord.toUpperCase();
        const playerName = spectatorPlayerNameDisplay?.textContent || 'Player';
        if (spectatorStatusText) spectatorStatusText.textContent = `Round ${state.roomRound} started! Waiting for ${playerName}...`;
        if (spectatorStatusBanner) {
            spectatorStatusBanner.className = 'flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 p-2.5 rounded-xl text-xs font-bold text-emerald-800 dark:text-emerald-300';
        }

        broadcastRoomEvent('rematch', {
            secretWord: newWord,
            round: state.roomRound
        });

        if (ChallengeDb.isConfigured()) {
            const challengeId = `room_${state.roomCode}`;
            ChallengeDb.createChallengeMetadata(challengeId, newWord).catch(e => console.warn('DB Sync Warning:', e));
        }

        document.getElementById('host-match-result-modal')?.classList.add('hidden');
        document.getElementById('host-rematch-selector-modal')?.classList.add('hidden');
        document.getElementById('spectator-match-actions')?.classList.add('hidden');
        showToast(`🔄 Round ${state.roomRound} Started! Secret word: ${newWord.toUpperCase()}`);
    });

    document.getElementById('spectator-dashboard-rematch-btn')?.addEventListener('click', () => {
        const input = document.getElementById('rematch-secret-word-input');
        if (input) input.value = getRandomWord().toUpperCase();
        const roundNumEl = document.getElementById('rematch-round-number');
        if (roundNumEl) roundNumEl.textContent = (state.roomRound || 1) + 1;
        const errEl = document.getElementById('rematch-error-status');
        if (errEl) errEl.textContent = '';
        document.getElementById('host-rematch-selector-modal')?.classList.remove('hidden');
    });

    document.getElementById('spectator-dashboard-new-room-btn')?.addEventListener('click', () => {
        document.getElementById('host-match-result-modal')?.classList.add('hidden');
        document.getElementById('live-room-spectator-modal')?.classList.add('hidden');
        initLiveRoomState();
        if (liveRoomSetupModal) liveRoomSetupModal.classList.remove('hidden');
    });

    document.getElementById('spectator-dashboard-menu-btn')?.addEventListener('click', () => {
        document.getElementById('host-match-result-modal')?.classList.add('hidden');
        document.getElementById('live-room-spectator-modal')?.classList.add('hidden');
        initLiveRoomState();
        openModeSelection();
    });

    exitDailyButton?.addEventListener('click', () => openModeSelection());

    document.getElementById('daily-share-btn')?.addEventListener('click', () => {
        const record = getDailyRecord();
        const emojiMap = { correct: '🟩', present: '🟨', absent: '⬛' };
        const grid = record.guesses.map(g => g.map(f => emojiMap[f]).join('')).join('\n');
        const scoreStr = record.won ? `${record.guessCount}/6` : 'X/6';
        const text = `Wordle Hub Daily - ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}\n${scoreStr}\n\n${grid}`;
        navigator.clipboard?.writeText(text).then(() => {
            const btn = document.getElementById('daily-share-btn');
            const orig = btn.textContent; btn.textContent = 'Copied! ✓';
            setTimeout(() => btn.textContent = orig, 2000);
        }).catch(() => { alert(text); });
    });

    document.getElementById('daily-close-btn')?.addEventListener('click', () => {
        dailyResultOverlay.classList.add('hidden');
        if (state.isDailyMode && state.isGameOver) openModeSelection();
    });

    // Explanation Modal Actions
    modeInfoActionBtn?.addEventListener('click', () => {
        if (currentModeAction) {
            currentModeAction();
        }
    });

    modeInfoBackBtn?.addEventListener('click', () => {
        modeInfoModal.classList.add('hidden');
        openModeSelection();
    });

    passPlayToggleVisibility?.addEventListener('click', () => {
        if (passPlayWordInput.type === 'password') {
            passPlayWordInput.type = 'text';
            passPlayToggleVisibility.innerHTML = `
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="pass-play-eye-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
            `;
        } else {
            passPlayWordInput.type = 'password';
            passPlayToggleVisibility.innerHTML = `
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="pass-play-eye-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            `;
        }
    });

    passPlayCancelBtn?.addEventListener('click', () => {
        passPlaySetupOverlay.classList.add('hidden');
        openModeSelection();
    });

    passPlaySubmitWordBtn?.addEventListener('click', () => {
        const word = passPlayWordInput.value.trim().toLowerCase();
        if (word.length !== 5) {
            passPlayStatus.textContent = 'Word must be exactly 5 letters long!';
            passPlayWordInput.classList.add('shake');
            sounds?.invalid.triggerAttackRelease("C3", "0.2");
            setTimeout(() => passPlayWordInput.classList.remove('shake'), 600);
            return;
        }
        if (!/^[a-z]{5}$/.test(word)) {
            passPlayStatus.textContent = 'Word must contain only letters!';
            passPlayWordInput.classList.add('shake');
            sounds?.invalid.triggerAttackRelease("C3", "0.2");
            setTimeout(() => passPlayWordInput.classList.remove('shake'), 600);
            return;
        }
        if (!wordList.includes(word) && (!extendedWordList || !extendedWordList.includes(word))) {
            passPlayStatus.textContent = 'Not in word list!';
            passPlayWordInput.classList.add('shake');
            sounds?.invalid.triggerAttackRelease("C3", "0.2");
            setTimeout(() => passPlayWordInput.classList.remove('shake'), 600);
            return;
        }

        state.passAndPlayWord = word;
        state.isPassAndPlayMode = true;

        // Clear input value so player 2 cannot inspect it or see it by accident
        passPlayWordInput.value = '';
        passPlayStatus.textContent = '';

        passPlayScreenWord.classList.add('hidden');
        passPlayScreenHandover.classList.remove('hidden');
        passPlayStartBtn.focus();
    });

    passPlayWordInput?.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            passPlaySubmitWordBtn.click();
        }
    });

    passPlayStartBtn?.addEventListener('click', () => {
        passPlaySetupOverlay.classList.add('hidden');
        startGame();
    });

    exitPassPlayButton?.addEventListener('click', () => {
        openModeSelection();
    });

    // ── Daily Challenge Utilities ──────────────────────────────────────────
    function getDailyDateKey() {
        const d = getSecureDate();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }
    function getDailyWord() {
        const epoch = new Date('2024-01-01'); epoch.setHours(0, 0, 0, 0);
        const today = getSecureDate(); today.setHours(0, 0, 0, 0);
        const idx = Math.floor((today - epoch) / 86400000);
        return wordList[idx % wordList.length];
    }
    function getDailyRecord() {
        try { const d = localStorage.getItem(`wordle_daily_${getDailyDateKey()}`); return d ? JSON.parse(d) : null; } catch { return null; }
    }
    function getDailyStreakData() {
        try { const d = localStorage.getItem('wordle_daily_streak'); return d ? JSON.parse(d) : { current: 0, max: 0, lastDate: null }; } catch { return { current: 0, max: 0, lastDate: null }; }
    }
    function updateDailyStreak(won) {
        const streak = getDailyStreakData();
        const today = getDailyDateKey();
        const d = getSecureDate(); d.setDate(d.getDate() - 1);
        const yesterday = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        if (won) {
            streak.current = (streak.lastDate === yesterday || streak.lastDate === today) ? streak.current + (streak.lastDate === today ? 0 : 1) : 1;
            streak.max = Math.max(streak.current, streak.max);
        } else { streak.current = 0; }
        streak.lastDate = today;
        try { localStorage.setItem('wordle_daily_streak', JSON.stringify(streak)); } catch { }
        return streak;
    }
    function saveDailyRecord(won) {
        const streak = updateDailyStreak(won);
        updateDailyGlobalStats(won, state.guessCount);
        try { localStorage.setItem(`wordle_daily_${getDailyDateKey()}`, JSON.stringify({ completed: true, won, guessWords: state.guessWords, guesses: state.guesses, guessCount: state.guessCount })); } catch { }
        return streak;
    }
    function getDailyEmojis() {
        const m = { correct: '🟩', present: '🟨', absent: '⬛' };
        return state.guesses.map(g => g.map(f => m[f]).join('')).join('\n');
    }
    function formatCountdown() {
        const now = new Date(), tom = new Date(now); tom.setDate(tom.getDate() + 1); tom.setHours(0, 0, 0, 0);
        const diff = tom - now;
        return [Math.floor(diff / 3600000), Math.floor((diff % 3600000) / 60000), Math.floor((diff % 60000) / 1000)].map(n => String(n).padStart(2, '0')).join(':');
    }
    let dailyCountdownTimer = null;
    function showDailyResultOverlay(record, streak) {
        if (gameOverContainer) gameOverContainer.classList.add('hidden');
        const emojiMap = { correct: '🟩', present: '🟨', absent: '⬛' };
        document.getElementById('daily-result-emoji-icon').textContent = record.won ? '🎉' : '😔';
        document.getElementById('daily-result-title').textContent = record.won ? '🎉 Solved It!' : 'Better luck tomorrow!';
        document.getElementById('daily-result-word').textContent = `The word was: ${getDailyWord().toUpperCase()}`;
        document.getElementById('daily-result-grid').innerHTML = record.guesses.map(g => `<div>${g.map(f => emojiMap[f]).join('')}</div>`).join('');
        document.getElementById('daily-streak-count').textContent = streak.current;
        document.getElementById('daily-max-streak-count').textContent = streak.max;
        const countdown = document.getElementById('daily-countdown');
        countdown.textContent = formatCountdown();
        if (dailyCountdownTimer) clearInterval(dailyCountdownTimer);
        dailyCountdownTimer = setInterval(() => { if (!dailyResultOverlay.classList.contains('hidden')) countdown.textContent = formatCountdown(); else clearInterval(dailyCountdownTimer); }, 1000);
        dailyResultOverlay.classList.remove('hidden');
        // Auto-fetch word definition
        const defContent = document.getElementById('daily-def-content');
        if (defContent) {
            defContent.innerHTML = '<span class="italic">Fetching definition…</span>';
            fetchWordDefinitionInline(getDailyWord(), defContent);
        }
    }
    function updateDailyBadge() {
        if (!dailyModeBadge) return;
        const record = getDailyRecord();
        if (record && record.completed) { dailyModeBadge.textContent = record.won ? 'Done ✓' : 'Done'; dailyModeBadge.className = dailyModeBadge.className.replace('bg-green-100 text-green-700', 'bg-slate-100 text-slate-500'); }
    }

    function openModeSelection() {
        state.isChallengeMode = false;
        state.challengeWord = null;
        state.isPassAndPlayMode = false;
        state.passAndPlayWord = null;
        state.isDailyMode = false;
        state.dailyWord = null;
        gameOverContainer.classList.add('hidden');
        actionArea.classList.add('hidden');
        challengeBanner.classList.add('hidden');
        passPlayBanner.classList.add('hidden');
        if (dailyBanner) dailyBanner.classList.add('hidden');
        insightsPanel.classList.add('hidden');
        if (keyboardContainer) keyboardContainer.classList.add('hidden');

        // Hide explanation modal if open
        if (modeInfoModal) {
            modeInfoModal.classList.add('hidden');
        }

        // Show selection overlay
        if (modeSelectionOverlay) {
            modeSelectionOverlay.classList.remove('hidden');
        }
    }

    function initKeyboard() {
        const rows = [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace']
        ];

        if (!keyboardContainer) return;
        keyboardContainer.innerHTML = '';
        keyboardContainer.className = 'mt-2 sm:mt-4 select-none max-w-sm mx-auto space-y-1 px-1 sm:px-2';

        rows.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'flex justify-center gap-1 sm:gap-1.5 w-full';

            row.forEach(key => {
                const button = document.createElement('button');
                button.className = 'keyboard-key flex-1 h-10 sm:h-12 flex items-center justify-center font-bold text-xs sm:text-sm uppercase rounded bg-slate-200 hover:bg-slate-300 active:scale-95 text-slate-700 transition-all focus:outline-none';
                button.dataset.key = key;

                if (key === 'enter') {
                    button.textContent = 'Enter';
                    button.classList.add('px-1.5', 'text-[10px]', 'sm:text-xs');
                    button.style.flexGrow = '1.5';
                } else if (key === 'backspace') {
                    button.textContent = '⌫';
                    button.classList.add('px-1.5');
                    button.style.flexGrow = '1.5';
                } else {
                    button.textContent = key;
                }

                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    handleVirtualKeyPress(key);
                });

                rowDiv.appendChild(button);
            });

            keyboardContainer.appendChild(rowDiv);
        });
    }

    function handleVirtualKeyPress(key) {
        if (state.isGameOver || state.isAnimating) return;

        const isManual = state.isChallengeMode || state.isPassAndPlayMode || state.isDailyMode || state.isUnlimitedMode;

        // Visual and auditory feedback
        if (sounds && sounds.type) {
            const toneFreq = key === 'enter' ? 'G5' : key === 'backspace' ? 'E5' : 'C6';
            sounds.type.triggerAttackRelease(toneFreq, '0.01');
        }
        if (navigator.vibrate) {
            navigator.vibrate(10); // 10ms click vibration on mobile
        }

        if (key === 'backspace') {
            if (isManual) {
                state.currentTypedGuess = (state.currentTypedGuess || '').slice(0, -1);
                updateActiveRowTiles();
            } else {
                feedbackInput.value = feedbackInput.value.slice(0, -1);
            }
        } else if (key === 'enter') {
            if (isManual) {
                handleFeedback();
            } else {
                submitButton.click();
            }
        } else {
            if (isManual) {
                if ((state.currentTypedGuess || '').length < 5) {
                    state.currentTypedGuess = (state.currentTypedGuess || '') + key;
                    updateActiveRowTiles();
                }
            } else {
                if (feedbackInput.value.length < 5) {
                    feedbackInput.value += key;
                }
            }
        }

        // Broadcast live typing state if in multiplayer room mode
        broadcastRoomEvent('typing', {
            currentTyped: state.currentTypedGuess || '',
            guessCount: state.guessCount
        });

        if (!isManual) {
            feedbackInput.focus();
        }
    }

    function updateActiveRowTiles() {
        const row = document.getElementById(`row-${state.guessCount}`);
        if (!row) return;

        row.innerHTML = '';
        const word = state.currentTypedGuess || '';

        for (let i = 0; i < 5; i++) {
            const letter = word[i] || '';
            const tileContainer = document.createElement('div');

            if (letter) {
                tileContainer.className = 'tile-container';
                const tile = document.createElement('div');
                tile.className = 'tile';
                const front = document.createElement('div');
                front.className = 'tile-front border-2 border-gray-500 pop-in';
                front.textContent = letter.toUpperCase();
                tile.appendChild(front);
                tileContainer.appendChild(tile);
            } else {
                tileContainer.className = 'tile-container border-2 border-gray-200 rounded-md';
            }
            row.appendChild(tileContainer);
        }
    }

    document.addEventListener('keydown', (e) => {
        if (state.isGameOver || state.isAnimating) return;
        const isManual = state.isChallengeMode || state.isPassAndPlayMode || state.isDailyMode || state.isUnlimitedMode;
        if (!isManual) return;

        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
            if (document.activeElement !== feedbackInput) {
                return;
            }
        }

        const key = e.key;
        if (key === 'Enter') {
            e.preventDefault();
            handleVirtualKeyPress('enter');
        } else if (key === 'Backspace') {
            e.preventDefault();
            handleVirtualKeyPress('backspace');
        } else if (/^[a-zA-Z]$/.test(key)) {
            e.preventDefault();
            handleVirtualKeyPress(key.toLowerCase());
        }
    });

    function updateKeyboardColors() {
        const keyElements = document.querySelectorAll('.keyboard-key');
        if (!keyElements.length) return;

        // Reset key styling
        keyElements.forEach(key => {
            key.classList.remove('bg-correct', 'bg-present', 'bg-absent', 'text-white');
            key.classList.add('bg-slate-200', 'text-slate-700');
        });

        if (state.guesses && state.guessWords) {
            const letterStatuses = {};

            for (let gIdx = 0; gIdx < state.guesses.length; gIdx++) {
                const guessWord = state.guessWords[gIdx];
                const feedback = state.guesses[gIdx];
                if (!guessWord || !feedback) continue;

                for (let i = 0; i < 5; i++) {
                    const char = guessWord[i].toLowerCase();
                    const status = feedback[i];

                    if (status === 'correct') {
                        letterStatuses[char] = 'correct';
                    } else if (status === 'present') {
                        if (letterStatuses[char] !== 'correct') {
                            letterStatuses[char] = 'present';
                        }
                    } else if (status === 'absent') {
                        if (letterStatuses[char] !== 'correct' && letterStatuses[char] !== 'present') {
                            letterStatuses[char] = 'absent';
                        }
                    }
                }
            }

            keyElements.forEach(key => {
                const char = key.dataset.key;
                if (char && letterStatuses[char]) {
                    const status = letterStatuses[char];
                    key.classList.remove('bg-slate-200', 'text-slate-700');
                    key.classList.add('text-white');
                    if (status === 'correct') {
                        key.classList.add('bg-correct');
                    } else if (status === 'present') {
                        key.classList.add('bg-present');
                    } else if (status === 'absent') {
                        key.classList.add('bg-absent');
                    }
                }
            });
        }
    }

    async function parseURLParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const challengeCode = urlParams.get('challenge');
        if (challengeCode) {
            try {
                if (challengeCode.startsWith('db_')) {
                    const challengeId = challengeCode.substring(3);
                    if (ChallengeDb.isConfigured()) {
                        const wordData = await ChallengeDb.fetchChallengeWord(challengeId);
                        if (wordData && wordData.challenge_word) {
                            state.challengeWord = wordData.challenge_word;
                            state.isChallengeMode = true;
                            state.challengeIdOverride = challengeId; // Store actual UUID for game session
                            
                            if (!wordList.includes(state.challengeWord)) {
                                wordList.push(state.challengeWord);
                            }
                            if (extendedWordList && !extendedWordList.includes(state.challengeWord)) {
                                extendedWordList.push(state.challengeWord);
                            }
                        } else {
                            showToast('Could not load challenge word from database.');
                        }
                    }
                } else {
                    const decoded = atob(challengeCode).toLowerCase();
                    const parts = decoded.split('|');
                    const word = parts[0];
                    const timestampStr = parts[1];

                    if (word && word.length === 5 && /^[a-z]{5}$/.test(word)) {
                        state.challengeWord = word;
                        state.isChallengeMode = true;

                        if (timestampStr) {
                            const timestamp = parseInt(timestampStr, 10);
                            if (!isNaN(timestamp)) {
                                state.challengeTimestamp = timestamp;
                            }
                        }

                        if (!wordList.includes(word)) {
                            wordList.push(word);
                        }
                        if (extendedWordList && !extendedWordList.includes(word)) {
                            extendedWordList.push(word);
                        }
                    }
                }
            } catch (e) {
                console.error('Invalid challenge code in URL', e);
            }
        }

        const roomCode = urlParams.get('room');
        if (roomCode) {
            if (liveRoomSetupModal) liveRoomSetupModal.classList.remove('hidden');
            if (modeSelectionOverlay) modeSelectionOverlay.classList.add('hidden');
            if (liveTabJoinBtn && liveTabCreateBtn && liveTabJoinContent && liveTabCreateContent) {
                liveTabJoinBtn.click();
            }
            if (liveRoomCodeInput) liveRoomCodeInput.value = roomCode;
        }
    }

    // ── Dark Mode ──────────────────────────────────────────────────────────

    const sunSvg = `
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
    `;
    const moonSvg = `
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    `;

    function applyDarkMode(dark) {
        document.body.classList.toggle('dark', dark);
        if (darkModeToggle) darkModeToggle.innerHTML = dark ? sunSvg : moonSvg;
    }

    // Init from localStorage
    applyDarkMode(localStorage.getItem('wordle_dark_mode') === 'true');

    darkModeToggle?.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('wordle_dark_mode', isDark);
        applyDarkMode(isDark);
    });

    // ── Word Definition (inline, for daily result) ─────────────────────────

    async function fetchWordDefinitionInline(word, targetEl) {
        if (!word || !targetEl) return;
        try {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!res.ok) { targetEl.textContent = 'Definition not available.'; return; }
            const data = await res.json();
            const entry = data[0];
            if (entry && entry.meanings && entry.meanings.length > 0) {
                const meaning = entry.meanings[0];
                const pos = meaning.partOfSpeech;
                const def = meaning.definitions[0]?.definition || 'No definition text available.';
                const example = meaning.definitions[0]?.example;
                targetEl.innerHTML =
                    `<span class="inline-block text-[10px] bg-indigo-100 text-indigo-700 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider mr-1.5 not-italic">${pos}</span>` +
                    `<span class="not-italic text-slate-700">${def}</span>` +
                    (example ? `<div class="mt-1 text-slate-400 italic">“${example}”</div>` : '');
            } else {
                targetEl.textContent = 'No definition found.';
            }
        } catch {
            targetEl.textContent = 'Could not load definition.';
        }
    }

    // ── Utility helpers ────────────────────────────────────────────────────

    function showToast(msg) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = msg;
        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('slide-out');
            toast.addEventListener('animationend', () => toast.remove(), { once: true });
        }, 2200);
    }

    function showThinkingIndicator() {
        statusMessage.innerHTML = `<span class="text-indigo-500 font-semibold text-base flex items-center gap-1">🤖 Thinking<span class="thinking-dots"><span></span><span></span><span></span></span></span>`;
        statusMessage.className = 'text-center h-8 flex items-center justify-center';
    }

    function animateWordReveal(word, feedbackColors) {
        const container = document.getElementById('game-over-word-reveal');
        if (!container || !word) return;
        container.innerHTML = '';
        container.classList.remove('hidden');
        word.split('').forEach((letter, i) => {
            const colorClass = feedbackColors ? colorClasses[feedbackColors[i]] : 'bg-correct';
            const tile = document.createElement('div');
            tile.className = `game-over-letter w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-lg sm:text-xl uppercase rounded-md text-white ${colorClass}`;
            tile.textContent = letter;
            tile.style.animationDelay = `${i * 80}ms`;
            container.appendChild(tile);
        });
    }

    function computeOpeningGuess() {
        const openers = ['crane', 'slate', 'trace', 'raise', 'stare', 'arise'];
        const posFreq = Array.from({ length: 5 }, () => ({}));
        for (const word of wordList) {
            for (let i = 0; i < 5; i++) {
                const l = word[i];
                posFreq[i][l] = (posFreq[i][l] || 0) + 1;
            }
        }
        const scored = openers.map(word => {
            let score = 0;
            const seen = new Set();
            for (let i = 0; i < 5; i++) {
                const l = word[i];
                if (!seen.has(l)) { score += (posFreq[i][l] || 0); seen.add(l); }
            }
            return { word, score };
        }).sort((a, b) => b.score - a.score);
        const top3 = scored.slice(0, 3);
        return top3[Math.floor(Math.random() * top3.length)].word;
    }

    // ── Daily Global Stats ────────────────────────────────────────────────

    function getDailyGlobalStats() {
        try {
            const d = localStorage.getItem('wordle_daily_global_stats');
            return d ? JSON.parse(d) : { played: 0, wins: 0, distribution: [0, 0, 0, 0, 0, 0] };
        } catch { return { played: 0, wins: 0, distribution: [0, 0, 0, 0, 0, 0] }; }
    }

    function updateDailyGlobalStats(won, guessCount) {
        const stats = getDailyGlobalStats();
        stats.played++;
        if (won) {
            stats.wins++;
            const idx = Math.max(0, Math.min(5, guessCount - 1));
            stats.distribution[idx]++;
        }
        try { localStorage.setItem('wordle_daily_global_stats', JSON.stringify(stats)); } catch { }
    }

    function renderStatsModal() {
        const stats = getDailyGlobalStats();
        const streak = getDailyStreakData();
        document.getElementById('stat-played').textContent = stats.played;
        document.getElementById('stat-win-pct').textContent = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;
        document.getElementById('stat-streak').textContent = streak.current;
        document.getElementById('stat-max-streak').textContent = streak.max;

        const dist = document.getElementById('guess-distribution');
        if (!dist) return;
        dist.innerHTML = '';
        const maxVal = Math.max(...stats.distribution, 1);
        stats.distribution.forEach((count, i) => {
            const pct = Math.round((count / maxVal) * 100);
            const isHighlight = count > 0 && stats.distribution.indexOf(Math.max(...stats.distribution)) === i;
            const row = document.createElement('div');
            row.className = 'flex items-center gap-2 h-7';
            row.innerHTML = `
                <span class="w-4 text-xs font-bold text-slate-500 text-right">${i + 1}</span>
                <div class="flex-1 bg-slate-100 rounded-sm h-full overflow-hidden">
                    <div class="stat-bar-fill ${isHighlight ? 'bg-indigo-600' : 'bg-slate-400'}" style="width:0%">
                        <span class="text-white text-xs font-bold">${count > 0 ? count : ''}</span>
                    </div>
                </div>`;
            dist.appendChild(row);
            setTimeout(() => {
                const bar = row.querySelector('.stat-bar-fill');
                if (bar) bar.style.width = `${count > 0 ? Math.max(pct, 8) : 0}%`;
            }, 60 + i * 80);
        });
    }

    statsButton?.addEventListener('click', () => {
        renderStatsModal();
        statsModal?.classList.remove('hidden');
    });
    closeStatsModal?.addEventListener('click', () => statsModal?.classList.add('hidden'));
    statsModal?.addEventListener('click', (e) => { if (e.target === statsModal) statsModal.classList.add('hidden'); });

    async function init() {
        initKeyboard();
        await parseURLParams();
        updateDailyBadge();
        if (state.isChallengeMode) {
            startGame();
        } else {
            openModeSelection();
        }
    }
    init();
});