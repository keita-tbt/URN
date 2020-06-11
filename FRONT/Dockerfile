# -----------------------------------------------------
# Angular アプリをビルドするための環境を構築する
# -----------------------------------------------------
# Angualr のビルドする環境として node をインストール
# 12.3.1 は開発で使用しているバージョン
FROM node:12.3.1 as build-stage

WORKDIR /vtuber-urn
COPY ./vtuber-urn/package*.json /vtuber-urn/

RUN npm install
COPY ./app/ /app/
ARG configuration=production

# Angular アプリをビルドする
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# -----------------------------------------------------
# Nginx の Docker 環境を構築する
# -----------------------------------------------------
FROM nginx:1.15

# ビルドした成果物を Docker 上の Nginx のドキュメントとして扱うためにコピー(デプロイ)
COPY --from=build-stage /vtuber-urn/dist/out/ /usr/share/nginx/html

# Nginx の設定ファイルを Docker 上の Nginx にコピー
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf