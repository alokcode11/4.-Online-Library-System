// const books = [
//     {
//       id: 1,
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       category: "Fiction",
//       cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
//       description: "A story of a young girl witnessing racial injustice in her small southern town. Through her father's defense of a Black man falsely accused of a crime, she learns about compassion, morality and the complexities of human nature.",
//       rating: 4.8,
//       popular: true
//     },
//     {
//       id: 2,
//       title: "1984",
//       author: "George Orwell",
//       category: "Fiction",
//       cover: "https://m.media-amazon.com/images/I/41qUUoeLrOS.SL500.jpg",
//       description: "A dystopian novel set in a totalitarian society where critical thought is suppressed. The story follows Winston Smith's rebellion and ultimate defeat as he questions the regime of Big Brother.",
//       rating: 4.7,
//       popular: true
//     },
//     {
//       id: 3,
//       title: "The Hobbit",
//       author: "J.R.R. Tolkien",
//       category: "Fantasy",
//       cover: "/images/hobbit.jpg",
//       description: "The adventure of Bilbo Baggins, a hobbit who embarks on an unexpected journey to reclaim the Dwarf Kingdom of Erebor from the dragon Smaug.",
//       rating: 4.8,
//       popular: false
//     },
//     {
//       id: 4,
//       title: "A Brief History of Time",
//       author: "Stephen Hawking",
//       category: "Non-Fiction",
//       cover: "/images/brief-history.jpg",
//       description: "Stephen Hawking's landmark work explores the nature of space and time, from the Big Bang to black holes. It makes complex concepts accessible to non-scientists.",
//       rating: 4.5,
//       popular: true
//     },
//     {
//       id: 5,
//       title: "Dune",
//       author: "Frank Herbert",
//       category: "Sci-Fi",
//       cover: "/images/dune.jpg",
//       description: "Set in the distant future, Dune tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis, the only source of the most valuable substance in the universe.",
//       rating: 4.6,
//       popular: true
//     },
//     {
//       id: 6,
//       title: "Pride and Prejudice",
//       author: "Jane Austen",
//       category: "Fiction",
//       cover: "/images/pride.jpg",
//       description: "A classic romance novel following the tumultuous relationship between Elizabeth Bennet and Mr. Darcy as they navigate societal expectations in early 19th-century England.",
//       rating: 4.7,
//       popular: false
//     },
//     {
//       id: 7,
//       title: "Sapiens: A Brief History of Humankind",
//       author: "Yuval Noah Harari",
//       category: "Non-Fiction",
//       cover: "/images/sapiens.jpg",
//       description: "A survey of the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century.",
//       rating: 4.5,
//       popular: true
//     },
//     {
//       id: 8,
//       title: "The Martian",
//       author: "Andy Weir",
//       category: "Sci-Fi",
//       cover: "/images/martian.jpg",
//       description: "Astronaut Mark Watney is stranded on Mars and must use his scientific ingenuity to survive on the hostile planet while NASA works to bring him home.",
//       rating: 4.7,
//       popular: false
//     },
//     {
//       id: 9,
//       title: "The Lord of the Rings",
//       author: "J.R.R. Tolkien",
//       category: "Fantasy",
//       cover: "/images/lotr.jpg",
//       description: "An epic high-fantasy novel that follows hobbits Frodo and Sam as they journey to destroy the One Ring and defeat the Dark Lord Sauron.",
//       rating: 4.9,
//       popular: true
//     },
//     {
//       id: 10,
//       title: "Thinking, Fast and Slow",
//       author: "Daniel Kahneman",
//       category: "Non-Fiction",
//       cover: "/images/thinking.jpg",
//       description: "Nobel Prize winner Daniel Kahneman's exploration of the two systems that drive the way we think and make decisions.",
//       rating: 4.6,
//       popular: false
//     }
//   ];
  
//   // Get all unique categories from books
//   export const categories = [...new Set(books.map(book => book.category))];
  
//   export default books;


const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780061120084",
    description: "A young girl witnesses racial injustice in her Southern town, learning about compassion and morality.",
    rating: 4.8,
    popular: true
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780451524935",
    description: "In a dystopian society, critical thought is suppressed under Big Brother's regime.",
    rating: 4.7,
    popular: true
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780345339683",
    description: "Bilbo Baggins embarks on an unexpected journey to reclaim a stolen treasure.",
    rating: 4.8,
    popular: true
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780141439518",
    description: "Elizabeth Bennet navigates love and societal expectations in 19th-century England.",
    rating: 4.7,
    popular: true
  },
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780441013593",
    description: "Set in a distant future, Dune tells the story of Paul Atreides and the battle for a desert planet.",
    rating: 4.6,
    popular: true
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780316769488",
    description: "A teenage boy recounts his experiences in New York City after being expelled from prep school.",
    rating: 4.5,
    popular: true
  },
  {
    id: 7,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780743273565",
    description: "A mysterious millionaire's obsession with a former lover leads to tragedy in the Roaring Twenties.",
    rating: 4.6,
    popular: true
  },
  {
    id: 8,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9781451673319",
    description: "In a future society, books are banned and 'firemen' burn any that are found.",
    rating: 4.5,
    popular: true
  },
  {
    id: 9,
    title: "War and Peace",
    author: "Leo Tolstoy",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9781400079988",
    description: "An epic novel intertwining personal stories with the backdrop of the Napoleonic Wars.",
    rating: 4.6,
    popular: true
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780345339706",
    description: "An epic quest to destroy a powerful ring and defeat the dark lord Sauron.",
    rating: 4.9,
    popular: true
  },
  {
    id: 11,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780060850524",
    description: "A dystopian novel about a technologically advanced future society and the cost of perceived utopia.",
    rating: 4.5,
    popular: true
  },
  {
    id: 12,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780062315007",
    description: "A shepherd boy's journey to find a worldly treasure, discovering the treasure of self along the way.",
    rating: 4.7,
    popular: false
  },
  {
    id: 13,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780590353427",
    description: "A young wizard discovers his magical heritage and begins his education at Hogwarts School of Witchcraft and Wizardry.",
    rating: 4.8,
    popular: true
  },
  {
    id: 14,
    title: "The Road",
    author: "Cormac McCarthy",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780307387899",
    description: "A father and son journey through a post-apocalyptic America, struggling to survive.",
    rating: 4.3,
    popular: false
  },
  {
    id: 15,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780553293357",
    description: "A mathematician predicts the fall of civilization and establishes a Foundation to preserve knowledge and shorten the dark age to follow.",
    rating: 4.5,
    popular: true
  },
  {
    id: 16,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780141439556",
    description: "A passionate, doomed love story set on the wild, stormy Yorkshire moors.",
    rating: 4.2,
    popular: false
  },
  {
    id: 17,
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780553593716",
    description: "Noble families fight for control of the Seven Kingdoms in this epic fantasy series.",
    rating: 4.7,
    popular: true
  },
  {
    id: 18,
    title: "The Martian",
    author: "Andy Weir",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780553418026",
    description: "An astronaut is stranded on Mars and must rely on his ingenuity to survive until rescue.",
    rating: 4.6,
    popular: false
  },
  {
    id: 19,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780141441146",
    description: "A governess falls in love with her mysterious employer, whose mansion holds a terrible secret.",
    rating: 4.4,
    popular: true
  },
  {
    id: 20,
    title: "Neuromancer",
    author: "William Gibson",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780441569595",
    description: "A washed-up computer hacker is hired for one last job in this cyberpunk classic.",
    rating: 4.3,
    popular: false
  },
  {
    id: 21,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780756404741",
    description: "An infamous wizard recounts his transformation from an orphaned street urchin to the most notorious wizard of his time.",
    rating: 4.8,
    popular: true
  },
  {
    id: 22,
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780385333849",
    description: "An anti-war novel that combines historical events, science fiction, and the author's own experiences.",
    rating: 4.4,
    popular: false
  },
  {
    id: 23,
    title: "Hyperion",
    author: "Dan Simmons",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780553283686",
    description: "Seven pilgrims journey to the mysterious Time Tombs on Hyperion, each with a tale to tell.",
    rating: 4.5,
    popular: true
  },
  {
    id: 24,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780141439570",
    description: "A man remains eternally young while his portrait ages, reflecting his moral corruption.",
    rating: 4.3,
    popular: false
  },
  {
    id: 25,
    title: "The Wheel of Time: The Eye of the World",
    author: "Robert Jordan",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780812511819",
    description: "A shepherd and his friends are thrust into an ancient struggle between Light and Shadow.",
    rating: 4.6,
    popular: true
  },
  {
    id: 26,
    title: "Snow Crash",
    author: "Neal Stephenson",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780553380958",
    description: "A pizza delivery driver in both the real world and the Metaverse uncovers a conspiracy with ancient roots.",
    rating: 4.4,
    popular: false
  },
  {
    id: 27,
    title: "Moby-Dick",
    author: "Herman Melville",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780142437247",
    description: "Captain Ahab's obsessive quest for the white whale Moby Dick leads his crew to disaster.",
    rating: 4.2,
    popular: true
  },
  {
    id: 28,
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780765382030",
    description: "A secret military project sends signals into space, and an alien civilization on the brink of destruction captures the signal and plans to invade Earth.",
    rating: 4.5,
    popular: false
  },
  {
    id: 29,
    title: "The Once and Future King",
    author: "T.H. White",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780441627400",
    description: "A retelling of the Arthurian legend from young Arthur's early years to the end of his reign.",
    rating: 4.4,
    popular: true
  },
  {
    id: 30,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780143107637",
    description: "A poor ex-student murders a pawnbroker and deals with the psychological consequences.",
    rating: 4.4,
    popular: false
  },
  {
    id: 31,
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780765350381",
    description: "A half-Skaa thief bands together with others to take down the seemingly immortal Lord Ruler.",
    rating: 4.7,
    popular: true
  },
  {
    id: 32,
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K. Dick",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780345404473",
    description: "A bounty hunter pursues escaped androids in a post-apocalyptic San Francisco.",
    rating: 4.3,
    popular: false
  },
  {
    id: 33,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780142437230",
    description: "A Spanish nobleman goes mad from reading too many romances and decides to become a knight-errant.",
    rating: 4.4,
    popular: true
  },
  {
    id: 34,
    title: "Childhood's End",
    author: "Arthur C. Clarke",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780345347954",
    description: "Mysterious aliens arrive on Earth, bringing with them an end to war and the dawn of a transformed humanity.",
    rating: 4.4,
    popular: false
  },
  {
    id: 35,
    title: "American Gods",
    author: "Neil Gaiman",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780062572110",
    description: "An ex-con becomes embroiled in a conflict between old gods and new in modern-day America.",
    rating: 4.5,
    popular: true
  },
  {
    id: 36,
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780140449266",
    description: "A man wrongfully imprisoned escapes and exacts intricate revenge on those who betrayed him.",
    rating: 4.7,
    popular: false
  },
  {
    id: 37,
    title: "Leviathan Wakes",
    author: "James S.A. Corey",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780316129084",
    description: "A detective and a ship's officer race to uncover a conspiracy that threatens the entire solar system.",
    rating: 4.5,
    popular: true
  },
  {
    id: 38,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780143035008",
    description: "A married aristocrat enters into a life-changing affair with a wealthy count in 19th-century Russia.",
    rating: 4.3,
    popular: false
  },
  {
    id: 39,
    title: "The Lies of Locke Lamora",
    author: "Scott Lynch",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780553588941",
    description: "An orphan becomes the leader of a gang of thieves in a city resembling medieval Venice.",
    rating: 4.6,
    popular: true
  },
  {
    id: 40,
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780441478125",
    description: "An envoy from Earth is sent to a planet whose inhabitants can change their gender, challenging his understanding of humanity.",
    rating: 4.4,
    popular: false
  },
  {
    id: 41,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780140449242",
    description: "Three brothers become involved in the murder of their father in this exploration of faith, doubt, and reason.",
    rating: 4.5,
    popular: true
  },
  {
    id: 42,
    title: "The Fifth Season",
    author: "N.K. Jemisin",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780316229296",
    description: "In a world wracked by geological instability, people with earth-controlling powers are both feared and needed.",
    rating: 4.7,
    popular: false
  },
  {
    id: 43,
    title: "Ender's Game",
    author: "Orson Scott Card",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780812550702",
    description: "A gifted child is trained in a military academy to fight an alien threat that nearly destroyed humanity decades earlier.",
    rating: 4.6,
    popular: true
  },
  {
    id: 44,
    title: "The Odyssey",
    author: "Homer",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780140268867",
    description: "The epic journey of Odysseus as he tries to return home after the Trojan War.",
    rating: 4.3,
    popular: false
  },
  {
    id: 45,
    title: "Jonathan Strange & Mr Norrell",
    author: "Susanna Clarke",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780765356154",
    description: "Two magicians bring magic back to England during the Napoleonic Wars, with unforeseen consequences.",
    rating: 4.4,
    popular: true
  },
  {
    id: 46,
    title: "2001: A Space Odyssey",
    author: "Arthur C. Clarke",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780451457998",
    description: "A mysterious alien artifact is discovered buried on the Moon, leading to an expedition to Jupiter.",
    rating: 4.5,
    popular: false
  },
  {
    id: 47,
    title: "Les Misérables",
    author: "Victor Hugo",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780140444308",
    description: "An ex-convict's struggle for redemption in post-revolutionary France, amid social injustice and uprising.",
    rating: 4.6,
    popular: true
  },
  {
    id: 48,
    title: "Red Mars",
    author: "Kim Stanley Robinson",
    category: "Sci-Fi",
    cover: "https://images.penguinrandomhouse.com/cover/9780553560732",
    description: "The first hundred colonists on Mars struggle with the transformation of the planet and their own society.",
    rating: 4.3,
    popular: false
  },
  {
    id: 49,
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    category: "Fiction",
    cover: "https://images.penguinrandomhouse.com/cover/9780143034902",
    description: "A boy discovers a mysterious book that leads him into Barcelona's dark secrets.",
    rating: 4.7,
    popular: true
  },
  {
    id: 50,
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    category: "Fantasy",
    cover: "https://images.penguinrandomhouse.com/cover/9780765365279",
    description: "In a world of storms and stone, a war rages on a ruined landscape called the Shattered Plains.",
    rating: 4.8,
    popular: false
  }
];


  export const categories = [...new Set(books.map(book => book.category))];
  
  export default books;