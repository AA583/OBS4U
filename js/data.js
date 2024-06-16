let books = [
  {
    id: 0,
    name: "To Kill a Mockingbird",
    url: "to-kill-a-mockingbird",
    author: "Harper Lee",
    description:
      `
    The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.
    <br><br>
    Compassionate, dramatic, and deeply moving, "To Kill A Mockingbird" takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.
    `,
    rating: 4,
    price: 280
  },
  {
    id: 1,
    name: "The Old Man and the Sea",
    url: "the-old-man-and-the-sea",
    author: "Ernest Hemingway",
    description:
      `
    This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses — specifically referred to in the citation accompanying the author"s Nobel Prize for literature in 1954.
    `,
    rating: 4,
    price: 80
  },
  {
    id: 2,
    name: "Pride and Prejudice",
    url: "pride-and-prejudice",
    author: "Jane Austen",
    description:
      `
    Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen"s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.
    `,
    rating: 4,
    price: 60
  },
  {
    id: 3,
    name: "The Hobbit",
    url: "the-hobbit",
    author: "J.R.R. Tolkien",
    description:
      `
    In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.
    <br><br>
    Written for J.R.R. Tolkien"s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001).
    `,
    rating: 4,
    price: 100
  },
  {
    id: 4,
    name: "Harry Potter and the Prisoner of Azkaban",
    url: "harry-potter-and-the-prisoner-of-azkaban",
    author: "J.K. Rowling",
    description:
      `
    Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can"t wait to get back to school after the summer holidays. (Who wouldn"t if they lived with the horrible Dursleys?) But when Harry gets to Hogwarts, the atmosphere is tense. There"s an escaped mass murderer on the loose, and the sinister prison guards of Azkaban have been called in to guard the school...
    `,
    rating: 5,
    price: 200
  },
  {
    id: 5,
    name: "Eclipse",
    url: "eclipse",
    author: "Stephenie Meyer",
    description:
      `
    "BELLA?"
    Edward"s soft voice came from behind me. I turned to see him spring lightly up the porch steps, his hair windblown from running. He pulled me into his arms at once, just like he had in the parking lot, and kissed me again. This kiss frightened me. There was too much tension, too strong an edge to the way his lips crushed mine - like he was afraid we had only so much time left to us.
    <br><br>
    As Seattle is ravaged by a string of mysterious killings and a malicious vampire continues her quest for revenge, Bella once again finds herself surrounded by danger. In the midst of it all, she is forced to choose between her love for Edward and her friendship with Jacob - knowing that her decision has the potential to ignite the ageless struggle between vampire and werewolf. With her graduation quickly approaching, Bella has one more decision to make: life or death. But which is which?
    `,
    rating: 4,
    price: 300
  },
  {
    id: 6,
    name: "Romeo and Juliet",
    url: "romeo-and-juliet",
    author: "William Shakespeare",
    description:
      `
    In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud.
    <br><br>
    In this death-filled setting, the movement from love at first sight to the lovers" final union in death seems almost inevitable. And yet, this play set in an extraordinary world has become the quintessential story of young love. In part because of its exquisite language, it is easy to respond as if it were about all young lovers.
    `,
    rating: 5,
    price: 100
  },
  {
    id: 7,
    name: "The Adventures of Huckleberry Finn",
    url: "the-adventures-of-huckleberry-finn",
    author: "Mark Twain",
    description:
      `
    A nineteenth-century boy from a Mississippi River town recounts his adventures as he travels down the river with a runaway slave, encountering a family involved in a feud, two scoundrels pretending to be royalty, and Tom Sawyer"s aunt who mistakes him for Tom.
    `,
    rating: 3,
    price: 120
  },
  {
    id: 8,
    name: "Animal Farm",
    url: "animal-farm",
    author: "George Orwell",
    description:
      `
    A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.
    <br><br>
    When Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell"s masterpiece have a meaning and message still ferociously fresh.
    `,
    rating: 4,
    price: 50
  },
  {
    id: 9,
    name: "The Little Prince",
    url: "the-little-prince",
    author: "Antoine de Saint-Exupéry",
    description:
      `
    A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. "Please," asks the stranger, "draw me a sheep." And the pilot realizes that when life"s events are too difficult to understand, there is no choice but to succumb to their mysteries. He pulls out pencil and paper... And thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life, has changed forever the world for its readers.
    <br><br>
    Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince, presented here in a stunning new translation with carefully restored artwork. The definitive edition of a worldwide classic, it will capture the hearts of readers of all ages.
    `,
    rating: 5,
    price: 100
  },
  {
    id: 10,
    name: "1984",
    url: "1984",
    author: "George Orwell",
    description:
      `
    A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality With a foreword by Thomas Pynchon With a foreword by Thomas Pynchon A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching View our feature on George Orwell s 1984 Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasion
    `,
    rating: 4,
    price: 200
  },
  {
    id: 11,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    url: "the-great-gatsby",
    description:
      `
    The Great Gatsby, F. Scott Fitzgerald"s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted "gin was the national drink and sex the national obsession," it is an exquisitely crafted tale of America in the 1920s.
    `,
    rating: 4,
    price: 150
  },
  {
    id: 12,
    name: "The Catcher in the Rye",
    url: "the-catcher-in-the-rye",
    author: "J.D. Salinger",
    description:
      `
    Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters—shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning.
    <br><br>
    The Catcher in the Rye is an all-time classic in coming-of-age literature- an elegy to teenage alienation, capturing the deeply human need for connection and the bewildering sense of loss as we leave childhood behind.
    `,
    rating: 5,
    price: 180
  },
  {
    id: 13,
    name: "The Book Thief",
    url: "the-book-thief",
    author: "Markus Zusak",
    description:
      `
    It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still.
    <br><br>
    By her brother"s graveside, Liesel"s life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger"s Handbook, left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel, with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, the mayor"s wife"s library, wherever there are books to be found.
    <br><br>
    But these are dangerous times. When Liesel"s foster family hides a Jew in their basement, Liesel"s world is both opened up, and closed down.
    <br><br>
    In superbly crafted writing that burns with intensity, award-winning author Markus Zusak has given us one of the most enduring stories of our time.
    `,
    rating: 3,
    price: 400
  },
  {
    id: 14,
    name: "The Kite Runner",
    url: "the-kite-runner",
    author: "Khaled Hosseini",
    description:
      `
    1970s Afghanistan: Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what would happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to an Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption.
    `,
    rating: 5,
    price: 200
  },
  {
    id: 15,
    name: "Fahrenheit 451",
    url: "fahrenheit-451",
    author: "Ray Bradbury",
    description:
      `
    Sixty years after its original publication, Ray Bradbury"s internationally acclaimed novel Fahrenheit 451 stands as a classic of world literature set in a bleak, dystopian future. Today its message has grown more relevant than ever before.
    <br><br>
    Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn"t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.
    `,
    rating: 4,
    price: 150
  },
  {
    id: 16,
    name: "Gone with the Wind",
    url: "gone-with-the-wind",
    author: "Margaret Mitchell",
    description:
      `
    Scarlett O"Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner, must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman"s March to the Sea.
    `,
    rating: 5,
    price: 450
  },
  {
    id: 17,
    name: "Hamlet",
    url: "hamlet",
    author: "William Shakespeare",
    description:
      `
    Among Shakespeare"s plays, "Hamlet" is considered by many his masterpiece. Among actors, the role of Hamlet, Prince of Denmark, is considered the jewel in the crown of a triumphant theatrical career. Now Kenneth Branagh plays the leading role and co-directs a brillant ensemble performance. Three generations of legendary leading actors, many of whom first assembled for the Oscar-winning film "Henry V", gather here to perform the rarely heard complete version of the play. This clear, subtly nuanced, stunning dramatization, presented by The Renaissance Theatre Company in association with "Bbc" Broadcasting, features such luminaries as Sir John Gielgud, Derek Jacobi, Emma Thompson and Christopher Ravenscroft. It combines a full cast with stirring music and sound effects to bring this magnificent Shakespearen classic vividly to life. Revealing new riches with each listening, this production of "Hamlet" is an invaluable aid for students, teachers and all true lovers of Shakespeare - a recording to be treasured for decades to come.
    `,
    rating: 4,
    price: 180
  },
  {
    id: 18,
    name: "The Alchemist",
    url: "the-alchemist",
    author: "Paulo Coelho",
    description:
      `
    Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.
    <br><br>
    Paulo Coelho"s masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago"s journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life"s path, and, most importantly, following our dreams.
    `,
    rating: 5,
    price: 100
  },
  {
    id: 19,
    name: "The Odyssey",
    url: "the-odyssey",
    author: "Homer",
    description:
      `
    Sing to me of the man, Muse, the man of twists and turns
    driven time and again off course, once he had plundered
    the hallowed heights of Troy.
    <br><br>
    So begins Robert Fagles" magnificent translation of the Odyssey.
    <br><br>
    If the Iliad is the world"s greatest war epic, then the Odyssey is literature"s grandest evocation of everyman"s journey though life. Odysseus" reliance on his wit and wiliness for survival in his encounters with divine and natural forces, during his ten-year voyage home to Ithaca after the Trojan War, is at once a timeless human story and an individual test of moral endurance.
    <br><br>
    In the myths and legends that are retold here, Fagles has captured the energy and poetry of Homer"s original in a bold, contemporary idiom, and given us an Odyssey to read aloud, to savor, and to treasure for its sheer lyrical mastery.
    <br><br>
    Renowned classicist Bernard Knox"s superb Introduction and textual commentary provide new insights and background information for the general reader and scholar alike, intensifying the strength of Fagles" translation.
    <br><br>
    This is an Odyssey to delight both the classicist and the public at large, and to captivate a new generation of Homer"s students.
    `,
    rating: 4,
    price: 300
  },
  {
    id: 20,
    name: "Life of Pi",
    url: "life-of-pi",
    author: "Yann Martel",
    description:
      `
    Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.
    `,
    rating: 4,
    price: 350
  }
];