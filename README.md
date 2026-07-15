# Мерейтойға шақыру — 70 жыл

Full-stack сайт-приглашение: React (Vite + Tailwind + Framer Motion) + Express + Prisma + PostgreSQL.

## Структура

```
mereitoi/
  frontend/   — React SPA (Vercel)
  backend/    — Express API (Render)
```

## 1. Что поменять перед запуском

Все тексты, дата и место — в одном файле: `frontend/src/eventConfig.js`.
Заполните: `personName`, `eventDateISO`, `monthLabel`, `eventDay`, `venueName/City/Address`, `mapUrl`, `invitationText`.

Положите два медиафайла в `frontend/public/`:
- `hero.jpg` — фоновое фото
- `music.mp3` — фоновая музыка

## 2. Backend — локальный запуск

```bash
cd backend
cp .env.example .env      # впишите DATABASE_URL (Render Postgres или Neon)
npm install
npx prisma migrate dev --name init
npm run dev                # http://localhost:4000
```

Проверка: `GET http://localhost:4000/` должен вернуть `{"ok":true}`.

## 3. Frontend — локальный запуск

```bash
cd frontend
cp .env.example .env       # VITE_API_BASE_URL=http://localhost:4000
npm install
npm run dev                # http://localhost:5173
```

## 4. Деплой backend на Render

1. Залейте `backend/` в GitHub-репозиторий.
2. В Render: New → Blueprint → укажите репозиторий, Render подхватит `render.yaml`
   (создаст Web Service + free Postgres автоматически).
3. Либо вручную: New → Web Service → Build command `npm install && npx prisma migrate deploy`,
   Start command `npm start`. Добавьте env vars: `DATABASE_URL` (из вашей Postgres), `CORS_ORIGIN`
   (домен фронтенда после деплоя на Vercel), `ADMIN_KEY` (любая секретная строка).

## 5. Деплой frontend на Vercel

1. Залейте `frontend/` в GitHub-репозиторий (или тот же репо, укажите Root Directory `frontend`).
2. Vercel → New Project → выберите репозиторий → Framework Preset: Vite.
3. Env var: `VITE_API_BASE_URL` = URL вашего backend на Render (например `https://mereitoi-backend.onrender.com`).
4. Deploy.

После этого вернитесь в Render и обновите `CORS_ORIGIN` на реальный домен Vercel.

## 6. Просмотр списка гостей

```
GET https://<backend-url>/api/rsvp
Header: x-admin-key: <значение ADMIN_KEY>
```

Вернёт сводку (`coming` / `comingWithSpouse` / `notComing`) и полный список.

## Заметки по дизайну

- Референс (той-стиль на скриншотах) переработан под юбилей: вместо пары имён — большая
  цифра `70` и имя именинницы, палитра сменена с серо-синей на кремово-золотую.
- Автоплей музыки: браузеры (особенно Safari iOS) блокируют звук без действия пользователя.
  Экран приветствия («Шақыруды ашу») — обязательный первый клик, после него музыка запускается.
- Все компоненты — в `frontend/src/components/`, каждый компонент отвечает за одну секцию.
