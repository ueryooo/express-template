# express-template

## 構成

- Node : 16.17.0
- MySQL : 8.0.27

## ローカル開発環境設定

- `cp .env.sample .env`
- .env に環境変数の設定
- `docker compose up` でコンテナの立ち上げ
  - ポート番号
    - API : 8081
    - MySQL : 3307
    - Prisma Studio : 5555
- 下記コマンドでアプリケーションコンテナへ入る

  `docker compose exec api ash`

- 依存関係の追加や scripts の実行はアプリケーションコンテナ内で行う

## Migration ファイル命名規則

- テーブル新規作成 : create_テーブル名(ex. create_users)
- テーブル内容変更 : alter_テーブル名(ex. alter_uses)

## Prisma 参考資料

- [公式ドキュメント](https://www.prisma.io/)
- [schema reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
