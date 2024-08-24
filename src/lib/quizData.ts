interface QuizData {
  userId: number;
  postId: number;
  title: string;
  content: string;
  options: string[];           
  correctAnswers: number[];    
  wrongAnswers: number[];      
}

export  const quizData: QuizData[] = [
  {
    userId: 1,
    postId: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    options: [
      "quia et suscipit",
      "suscipit recusandae consequuntur expedita et cum",
      "reprehenderit molestiae ut ut quas totam",
      "nostrum rerum est autem sunt rem eveniet architecto"
    ],
    correctAnswers: [0, 1],
    wrongAnswers: [2, 3]
  },
  {
    userId: 1,
    postId: 2,
    title: "qui est esse",
    content: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    options: [
      "est rerum tempore vitae",
      "sequi sint nihil reprehenderit dolor beatae ea dolores neque",
      "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis",
      "qui aperiam non debitis possimus qui neque nisi nulla"
    ],
    correctAnswers: [0],
    wrongAnswers: [1, 2, 3]
  },
  {
    userId: 1,
    postId: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    content: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    options: [
      "et iusto sed quo iure",
      "voluptatem occaecati omnis eligendi aut ad",
      "voluptatem doloribus vel accusantium quis pariatur",
      "molestiae porro eius odio et labore et velit aut"
    ],
    correctAnswers: [1, 2],
    wrongAnswers: [0, 3]
  },
  {
    userId: 1,
    postId: 4,
    title: "eum et est occaecati",
    content: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    options: [
      "ullam et saepe reiciendis voluptatem adipisci",
      "sit amet autem assumenda provident rerum culpa",
      "quis hic commodi nesciunt rem tenetur doloremque ipsam iure",
      "quis sunt voluptatem rerum illo velit"
    ],
    correctAnswers: [1],
    wrongAnswers: [0, 2, 3]
  },
  {
    userId: 1,
    postId: 5,
    title: "nesciunt quas odio",
    content: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    options: [
      "repudiandae veniam quaerat sunt sed",
      "alias aut fugiat sit autem sed est",
      "voluptatem omnis possimus esse voluptatibus quis",
      "est aut tenetur dolor neque"
    ],
    correctAnswers: [0, 3],
    wrongAnswers: [1, 2]
  },
  {
    userId: 1,
    postId: 6,
    title: "dolorem eum magni eos aperiam quia",
    content: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    options: [
      "ut aspernatur corporis harum nihil quis provident sequi",
      "mollitia nobis aliquid molestiae",
      "perspiciatis et ea nemo ab reprehenderit accusantium quas",
      "voluptate dolores velit et doloremque molestiae"
    ],
    correctAnswers: [1, 2],
    wrongAnswers: [0, 3]
  },
  {
    userId: 1,
    postId: 7,
    title: "magnam facilis autem",
    content: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe",
    options: [
      "dolore placeat quibusdam ea quo vitae",
      "magni quis enim qui quis quo nemo aut saepe"
    ],
    correctAnswers: [0],
    wrongAnswers: [1]
  },
  {
    userId: 1,
    postId: 8,
    title: "ratione voluptatem sequi est enim",
    content: "voluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    options: [
      "voluptatem omnis possimus esse voluptatibus quis",
      "est aut tenetur dolor neque"
    ],
    correctAnswers: [1],
    wrongAnswers: [0]
  },
  {
    userId: 1,
    postId: 9,
    title: "et voluptates corrupti molestias voluptatem",
    content: "aliquid voluptatibus deleniti id placeat\nvoluptatibus velit quod et sit doloremque\nofficia ut et fugiat",
    options: [
      "aliquid voluptatibus deleniti id placeat",
      "voluptatibus velit quod et sit doloremque",
      "officia ut et fugiat"
    ],
    correctAnswers: [2],
    wrongAnswers: [0, 1]
  },
  {
    userId: 1,
    postId: 10,
    title: "optio molestias id quia eum",
    content: "doloribus ad provident suscipit at\nvelit esse molestias est eligendi aut\nquod enim est expedita sit autem sed est voluptatum omnis possimus esse voluptatibus quis",
    options: [
      "doloribus ad provident suscipit at",
      "velit esse molestias est eligendi aut",
      "quod enim est expedita sit autem sed est voluptatum omnis possimus esse voluptatibus quis"
    ],
    correctAnswers: [0, 2],
    wrongAnswers: [1]
  },
  {
    userId: 1,
    postId: 11,
    title: "repudiandae veniam quaerat sunt sed",
    content: "voluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    options: [
      "voluptatem omnis possimus esse voluptatibus quis",
      "est aut tenetur dolor neque"
    ],
    correctAnswers: [0],
    wrongAnswers: [1]
  },
  {
    userId: 1,
    postId: 12,
    title: "dolore ipsum quia dolor sit amet",
    content: "sapiente odit est soluta consequatur molestias\nfacere assumenda ut perspiciatis sit voluptatem\nveritatis tenetur et ea magni\net sunt non debitis rem",
    options: [
      "sapiente odit est soluta consequatur molestias",
      "facere assumenda ut perspiciatis sit voluptatem",
      "veritatis tenetur et ea magni",
      "et sunt non debitis rem"
    ],
    correctAnswers: [1],
    wrongAnswers: [0, 2, 3]
  },
  {
    userId: 1,
    postId: 13,
    title: "autem hic labore sunt dolores explicabo",
    content: "voluptatem omnis voluptas\nitaque ipsam quisquam\nvoluptatem eos omnis officia\npraesentium accusantium est",
    options: [
      "voluptatem omnis voluptas",
      "itaque ipsam quisquam",
      "voluptatem eos omnis officia",
      "praesentium accusantium est"
    ],
    correctAnswers: [0, 2],
    wrongAnswers: [1, 3]
  },
  {
    userId: 1,
    postId: 14,
    title: "ratione voluptatem sequi est",
    content: "est asperiores ea id libero et iure\nvelit autem velit ut nobis\nitaque numquam aut sint\nneque velit fugiat quo aut",
    options: [
      "est asperiores ea id libero et iure",
      "velit autem velit ut nobis",
      "itaque numquam aut sint",
      "neque velit fugiat quo aut"
    ],
    correctAnswers: [2, 3],
    wrongAnswers: [0, 1]
  },
  {
    userId: 1,
    postId: 15,
    title: "nam aliquid et incidunt",
    content: "molestiae inventore est eos delectus\nmollitia ut minus consectetur\nrem nobis earum et\neum voluptatum exercitationem",
    options: [
      "molestiae inventore est eos delectus",
      "mollitia ut minus consectetur",
      "rem nobis earum et",
      "eum voluptatum exercitationem"
    ],
    correctAnswers: [1, 3],
    wrongAnswers: [0, 2]
  },
  {
    userId: 1,
    postId: 16,
    title: "maxime laborum aut",
    content: "reprehenderit voluptatem quaerat et\nfacilis velit rerum sunt\nerror dolorum vero et\nfugit sit rerum aliquam",
    options: [
      "reprehenderit voluptatem quaerat et",
      "facilis velit rerum sunt",
      "error dolorum vero et",
      "fugit sit rerum aliquam"
    ],
    correctAnswers: [0, 2],
    wrongAnswers: [1, 3]
  },
  {
    userId: 1,
    postId: 17,
    title: "voluptatem aspernatur",
    content: "voluptas ad quibusdam\nmaxime dolor et sit\nest atque nisi laboriosam\nquasi ullam sequi perferendis",
    options: [
      "voluptas ad quibusdam",
      "maxime dolor et sit",
      "est atque nisi laboriosam",
      "quasi ullam sequi perferendis"
    ],
    correctAnswers: [1, 3],
    wrongAnswers: [0, 2]
  },
  {
    userId: 1,
    postId: 18,
    title: "reprehenderit nesciunt error",
    content: "accusamus sunt et\nrepudiandae libero eos\nest expedita consequatur\ndolores sunt cum",
    options: [
      "accusamus sunt et",
      "repudiandae libero eos",
      "est expedita consequatur",
      "dolores sunt cum"
    ],
    correctAnswers: [0],
    wrongAnswers: [1, 2, 3]
  },
  {
    userId: 1,
    postId: 19,
    title: "optio vel nulla",
    content: "quod eveniet consequatur\nrerum velit esse\nquod repellendus occaecati\nrepudiandae necessitatibus",
    options: [
      "quod eveniet consequatur",
      "rerum velit esse",
      "quod repellendus occaecati",
      "repudiandae necessitatibus"
    ],
    correctAnswers: [2],
    wrongAnswers: [0, 1, 3]
  },
  {
    userId: 1,
    postId: 20,
    title: "eius modis consequuntur",
    content: "quasi et molestias\nut odio voluptate\ntempore est voluptas\nsit eaque vero eos",
    options: [
      "quasi et molestias",
      "ut odio voluptate",
      "tempore est voluptas",
      "sit eaque vero eos"
    ],
    correctAnswers: [0, 2],
    wrongAnswers: [1, 3]
  }
];
