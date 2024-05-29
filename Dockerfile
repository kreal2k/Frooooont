# Используем образ Node.js Alpine
FROM node:alpine

# Указываем рабочую директорию внутри образа
WORKDIR /app

# Копируем все директории внутрь образа
COPY . .

RUN npm install

# Открываем порт 3000
EXPOSE 3000

# Запускаем сервер на порту 3000
CMD ["node", "server.js"]
