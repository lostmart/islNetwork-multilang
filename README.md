# ISL Network Multi-language Support

This web app is created using Vue 3 and Vite. It's multi-language support site for teachers who belong to the ISL Network. The project aims to make the application accessible to users from different linguistic backgrounds by providing a seamless language-switching experience and a newletter powered by Wordpres' API

## Features

- Multi-language Support: Supports multiple languages for the ISL Network application.
- Language Switching: Users can switch languages dynamically.
- Internationalization (i18n): Uses internationalization standards for easy translation management.
- Locale Management: Stores and retrieves user language preferences.
- Wordpress' resfull API integration

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/lostmart/islNetwork-multilang.git
```

2. Navigate to the project directory:

```bash
cd islNetwork-multilang
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:
   Create a .env file in the root directory and add the necessary environment variables as specified in the Environment Variables section.

5. Start the development server:

```bash
npm start
```

## Project Structure

```bash
islNetwork-multilang/
├── public/             # Public assets
├── src/
│   ├── components/     # React components
│   ├── i18n/           # Internationalization files
│   ├── pages/          # Page components
│   ├── services/       # API service functions
│   ├── App.js          # Main App component
│   ├── index.js        # Entry point
│   ├── App.css         # Global styles
│   └── index.css       # Global styles
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # NPM package configuration
└── README.md           # Project README file
```

## Wordpress integration

This projects is fed via a backoffice site that handles the blog data and allows authenticated users to add, edit and delete posts from the site using the Wordpress technology
