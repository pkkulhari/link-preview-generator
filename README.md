# Link Preview Generator

Link previews like in Twitter/LinkedIn/Facebook, but as downloadable images for use in any note taking tool (Notion. MacDown, Word, etc.)

### => **[Live Demo](https://link-preview-generator.onrender.com/)**

## Screenshots

![Screenshot](./assets/screenshot.png)

## Features

- **Link Preview** - get the preview of any link
- **Download Preview** - download the preview as image and use in any note taking tool
- **Analyse** - check if the link has basic meta tags or not (Important for SEO)
- **Dark Mode** - choose your preferred theme (Dark or Light)

## Technologes

- Node.js
- Express.js
- React
- Tailwind CSS
- Vite

## API Reference

-> Get metdata of a link

```http
  GET https://link-preview-generator.onrender.com/api?url=
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `url`     | `string` | **Required**. any url |

## Getting Started

```sh
git clone https://github.com/pkkulhari/link-preview-generator.git
```

```sh
cd ./link-preview-generator
```

```sh
yarn install --cwd client && yarn install --cwd server
```

```sh
 yarn --cwd ./server start
```

Start a new terminal session

```sh
 yarn --cwd ./client dev
```

Now you can visit - http://localhost:5173/
