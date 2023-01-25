# Finnkino Cinema

A movie ticket booking website built with **ReactJS**, **Redux** and **Material UI**.

See the live demo -> [Finnkino Cinema](https://finnkinocinema.vercel.app "Finnkino Cinema") (the API might be expired when you visit the website).

Use this account for testing:

- 👨🏻‍💻Username: tule07
- 🔐Password: 123456Tu

## Tech stack

![Tech logos][stack]

### Core

- [ReactJS][reactjs]: JavaScript library for building user interfaces.
- [Redux][redux]: client state management with [Thunk middleware][redux-thunk].
- [React Hook Form][react-hook-form] | [Formik][formik]: form state management and validation with [Yup][yup].

### UI & Styling

- [Material UI][mui]: React-based UI component library.
- [SCSS/Sass][sass]: CSS pre-processor for styling the website.

[stack]: src/assets/docs-images/finnkino-tech-stack.png
[reactjs]: https://reactjs.org/
[redux]: https://redux.js.org/
[redux-thunk]: https://github.com/reduxjs/redux-thunk
[mui]: https://mui.com/
[sass]: https://sass-lang.com/
[react-hook-form]: https://react-hook-form.com/
[formik]: https://formik.org/docs/overview
[yup]: https://github.com/jquense/yup

<!-- ## Tasks

> 19 Jun - 13 Aug, 2022

Our main tasks in the project are to implement:

- [x] Homepage layout
- [x] Responsive design
- [x] Full effects
- [x] Themes: light and dark

Task assignments: check out checklist.xlsx for more details. -->

## Features

### 👸🏻For users:

Fully responsive design on devices (laptop, tablet and mobile).

| Page                            | Features                                                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home                            | - show theaters, movies and showtime schedules                                                                                                                                        |
| Movie details                   | - show movie details                                                                                                                                                                  |
| Authentication (login + signup) | - validate login and signup forms                                                                                                                                                     |
| Ticket booking                  | - build grid-shaped seat layout with different types of seat<br> - map each seat row in alphabetical order <br> - allow to select a maximum of 5 seats<br> - cannot select sold seats |
| Profile                         | - allow to change user information<br> - show transaction history                                                                                                                     |

### 👩🏻‍💼For administrators:

| Page             | Features                                                                                                                                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User management  | - display the table of users (both clients and administrators)<br> - search user by name<br> - create, update and delete user. Validate user information forms.                                                      |
| Movie management | - display the table of movies<br> - search movie by name<br> - create, update and delete movie. Validate movie information forms<br> - create movie showtime schedules. Validate showtime schedule information forms |

## Project structure

### Main source structure

```
root
└── src
    ├── api                         # Axios client configuration and request setup
    ├── assets                      # Shared multimedia files
    ├── components                  # Shared components
    ├── constants                   # Shared constants
    ├── containers                  # Pages
    │   ├── AdminTemplate           # Admin pages
    │   │   ├── index.js            # Admin template
    │   │   ├── components          # Shared components for admin template
    │   │   ├── UserDashBoard
    │   │   └── MovieDashBoard
    │   ├── AuthTemplate            # Authentication pages
    │   │   ├── index.js            # Authentication template
    │   │   ├── components          # Shared components for authentication template
    │   │   ├── LoginPage
    │   │   └── RegisterPage
    │   ├── HomeTemplate            # Home pages
    │   │   ├── index.js            # Home template
    │   │   ├── components          # Shared components for home template
    │   │   ├── HomePage
    │   │   ├── MovieDetailsPage
    │   │   ├── ProfilePage
    │   │   └── TicketBookingPage
    │   └── NotFoundPage            # 404 not found page
    ├── guard                       # Protect private routes
    ├── hooks                       # Shared hooks
    ├── i18n                        # Translation feature configuration
    ├── routes                      # Routing setup
    ├── store                       # Redux configuration and reducer setup
    ├── validators                  # Schema validators for user inputs
    ├── App.js
    └── index.js
```

### Routing setup

<!-- Try to draw a graph -->
<!-- Should mention which routes are private -->

## Installation and run

Check out the website -> [Finnkino Cinema](https://finnkinocinema.vercel.app "Finnkino Cinema") or run locally by running the following commands:

Clone the project

```bash
git clone https://github.com/scoobytux/finnkino-cinema.git
cd finnkino-cinema
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm start
```

Open http://localhost:3000 with your favorite browser to see the project 😎.

## Some project's views on devices

- On MacBook/Laptop

![finnkino login laptop](src/assets/docs-images/finnkino-login-laptop.png)

![finnkino booking laptop](src/assets/docs-images/finnkino-booking-laptop.png)

![finnkino user management laptop](src/assets/docs-images/finnkino-user-management-laptop.png)

![finnkino user management laptop](src/assets/docs-images/finnkino-movie-management-laptop.png)

- On Mobile

<div style="display: flex; flex-wrap: wrap; gap: 15px;">
  <img src="src/assets/docs-images/finnkino-detail-mobile.png" alt="finnkino detail mobile" width="30%"/>
  <img src="src/assets/docs-images/finnkino-profile-mobile.png" alt="finnkino profile mobile" width="30%"/>
</div>

## Contributors

Thanks go to these wonderful people ✨

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <!-- Phuong Vu -->
    <td align="center"><a href="https://github.com/phuongvu0804"><img src="https://avatars.githubusercontent.com/u/99994868?v=4" width="85px;" alt=""/><br /><sub><b>Phuong Vu (Chloe)</b></sub></a><br /><a href="https://github.com/scoobytux/movielab/commits?author=phuongvu0804" title="Code">💻</a><a href="https://github.com/scoobytux/movielab/commits?author=phuongvu0804" title="Documentation">📖</a></td>
    <!-- Tu Le -->
    <td align="center"><a href="https://github.com/scoobytux"><img src="https://avatars.githubusercontent.com/u/72339711?v=4" width="85px;" alt=""/><br /><sub><b>Tu Le (Liam)</b></sub></a><br /><a href="https://github.com/scoobytux/movielab/commits?author=scoobytux" title="Code">💻</a><a href="https://github.com/scoobytux/movielab/commits?author=scoobytux" title="Documentation">📖</a></td>
  </tr>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Credits and references

| Resource                       | Description                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| [CyberSoft Academy][cybersoft] | API provider                                                                    |
| [Finnkino][finnkino]           | A cool Finnish website for booking online movie tickets we got inspiration from |

[cybersoft]: https://cybersoft.edu.vn/
[finnkino]: https://www.finnkino.fi/en/
