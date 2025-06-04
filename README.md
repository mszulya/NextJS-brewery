# 🍺 Next.js Brewery Directory

A modern brewery directory built with **Next.js 14**, **Tailwind CSS**, and the [Open Brewery DB API](https://www.openbrewerydb.org/). Search, view, and explore breweries with an interactive Google Map.

🔗 **Live Demo**: [https://br-six-sigma.vercel.app/](https://br-six-sigma.vercel.app/)

---

## ✨ Features

- 🔍 **Live Search** with debounce and autocomplete
- 📄 **Paginated Table** with 15 breweries per page
- 📍 **Brewery Details Page** with embedded Google Map
- 🌐 Responsive, mobile-friendly layout with Tailwind CSS
- 🔁 Built using the **Next.js App Router** (app directory)

## 📦 Tech Stack

- **Next.js 14**
- **React 18**
- **Tailwind CSS**
- **TypeScript**
- **Google Maps Embed API**
- **Open Brewery DB API**

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mszulya/NextJS-brewery.git
cd NextJS-brewery
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env.local` file

```
NEXT_PUBLIC_GOOGLE_MAP_KEY=your_google_maps_api_key
```

> Make sure the key has Maps Embed API enabled in Google Cloud Console.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it live.

## 🖼️ Screenshots

| Homepage | Table View | Detail Page |
|----------|------------|-------------|
| ![Home](public/screenshots/home.png) | ![Table](public/screenshots/table.png) | ![Detail](public/screenshots/detail.png) |

## 🔧 Project Structure

```
app/
├── page.tsx           → Home with search
├── table/             → Paginated brewery table
├── brewery/[id]/      → Dynamic detail route with map
├── api/               → Autocomplete API route
public/                → Assets and logos
```

## 📌 Future Improvements

- 🍺 Add filters by type or city
- 📍 Map clustering for multiple results
- 📝 Brewery reviews & ratings

## 📄 License

MIT — free to use, modify, and share.

---

Made with ❤️ by [Zulfiia](https://github.com/mszulya)
