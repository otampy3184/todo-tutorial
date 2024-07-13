# TODOアプリ

このプロジェクトは、TypeScriptとReactを使用して作成されたシンプルなTODOアプリである。

## 必要なツール

このプロジェクトをローカルで実行するために以下のツールが必要となる。

- Node.js (バージョン14以上)
- npm (Node.jsに同梱)

## プロジェクトのセットアップ

以下の手順に従ってプロジェクトをローカル環境にセットアップすること

リポジトリをクローンする

```bash
git clone https://github.com/your-username/todo-tutorial.git
```

プロジェクトディレクトリに移動します。

```bash
cd todo-tutorial
```

必要な依存関係をインストールします。

```bash
npm install
```

プロジェクトの実行

以下のコマンドを実行して、ローカル開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで以下のURLにアクセスして、アプリケーションを確認できます。
<http://localhost:5173>

## ディレクトリ構成

プロジェクトの主なディレクトリとファイル構成は以下の通りです。

```
my-todo-app/
├── node_modules/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

主要なスクリプト
npm run dev: ローカル開発サーバーを起動します。
npm run build: アプリケーションをビルドします。
npm run serve: ビルドされたアプリケーションをローカルサーバーで提供します。
