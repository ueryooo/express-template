FROM --platform=linux/amd64 node:18.12.1-alpine3.16

# アプリケーションディレクトリを作成する
WORKDIR /app

# アプリケーションの依存関係をインストールする
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# アプリケーションのソースをバンドルする
COPY . .

CMD [ "yarn", "dev" ]