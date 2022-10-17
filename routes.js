const handler = (req, h) => {
  const response = h.response;
  respo;
};

const routes = [
  // ? route for '/'
  {
    method: `GET`,
    path: `/`,
    handler: (req, h) => {
      return `Homepage`;
    },
  },
  {
    method: `*`,
    path: `/`,
    handler: (req, h) => {
      return `Halaman tidak dapat diakses dengan method tersebut`;
    },
  },
  // ? routesfor '/about'
  {
    method: `GET`,
    path: `/about`,
    handler: (req, h) => {
      return `About Page`;
    },
  },
  {
    method: `*`,
    path: `/about`,
    handler: (req, h) => {
      return `Halaman tidak ditemukan`;
    },
  },
  // ? route for any routes except both of above
  {
    method: `*`,
    path: `/{any*}`,
    handler: (req, h) => {
      return `Halaman tidak dapat diakses dengan method tersebut`;
    },
  },
  {
    method: `GET`,
    path: `/hello/{name?}`,
    handler: (req, h) => {
      const { name = "stranger" } = req.params;
      const { lang } = req.query;

      if (lang === "id") {
        return `Hai, ${name}!`;
      }

      return `Halo, ${name}!`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;

      // * Detailed notation
      /**
      const response = h.response("success");
      response.type("text/plain");
      response.header("X-Custom", "some-value");
      */

      // * Chained notation
      const response = h
        .response("success")
        .type("text/plain")
        .header("X-Custom", "some-value");

      return `response: ${response} \nWelcome ${username}!`;
    },
  },
];

module.exports = routes;
