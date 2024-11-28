# FilmFrontier

## Movie Website with Mock API Integration
This project is a responsive frontend application for browsing movies. Users can search for movies, view movie trailers, and get details about each film. The application integrates with a mock API to simulate real-world data handling, providing an intuitive and user-friendly experience.

## Key Features
- **Login Page**: Users can visit the login page, but it currently routes them directly to the home page. No authentication functionality is implemented yet.
- **Sign-Up Page**: Similar to the login page, the sign-up page allows users to register but currently only routes to the home page without actual sign-up functionality.
- **Search Movies**: A search bar to find movies by title, year, or genre.
- **Movie Details**: Displays detailed information about each movie, including cast, crew, and plot.
- **Trailer Preview**: Users can watch movie trailers (but not full movies) through embedded video players.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices to ensure an accessible and smooth experience across all screen sizes.

## Technical Details
- **Mock API Integration**: Data is fetched from a mock API that simulates real-world movie data, including trailers.
- **Responsive Design**: The app adjusts seamlessly across different devices, ensuring a consistent user experience.
- **Search Functionality**: Users can search for movies by title, year, or genre using the integrated search functionality.
- **Trailer Integration**: Movies feature trailers, which are viewable via embedded video players.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Technology Stack](#technology-stack)
4. [Contributing](#contributing)
5. [License](#license)

## Project Structure
Here’s an overview of the project’s folder structure:

```
filmfrontier/
│
├── public/
│   ├── images/
│   ├── index.html
│
├── src/
│   ├── assets/               # Images, fonts, and other static assets
│   ├── components/           # Reusable UI components (e.g., MovieCard, SearchBar)
│   ├── pages/                # Page components (e.g., HomePage, LoginPage)
│   ├── services/             # API calls and utilities
│   ├── styles/               # Global styles (e.g., index.scss)
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Vite entry point
│
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

- **Prerequisites**:
  - **Node.js** (v14+ recommended)
  - **npm** or **yarn**

- **Installation**:
  - **Clone the repository**:
    ```bash
    git clone https://github.com/stefniey/filmfrontier.git
    cd filmfrontier
    ```

  - **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

  - **Start the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

  - **Access the application**: Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Technology Stack
- **Frontend**: React, TypeScript
- **Styling**: Sass for modular and maintainable styling
- **Build Tool**: Vite for fast build and development
- **API Integration**: Mock API for movie data
- **State Management**: Local Storage or IndexedDB for local data persistence

## Contributing
- **Fork the repository**.
- **Create a new branch** for your feature (`feature-name`).
- **Commit your changes**.
- **Push to your branch**.
- **Open a pull request**.

## License
This project is licensed under the MIT License.
