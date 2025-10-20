FROM mcr.microsoft.com/playwright:v1.56.1-jammy

WORKDIR /app
COPY package*.json ./ 
RUN npm ci --silent

#garantir navegador

RUN npx playwright install --with-deps chromium

COPY . .

#build da extensão
RUN npm rum build

#rodar testes
CMD [ "npm", "test" ]