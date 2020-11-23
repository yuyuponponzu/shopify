# shopify_bayashi

## まずは？
git cloneして、developブランチに移動。

そしてとりあえず
  yarn install
  （もしうまくいかあかったら一応教えてください。）

そのあと
  yarn dev
で現状を確認。

## 運用方法（ブランチの切り方とか）
* masterブランチは最終的な動く状態を保持
* developブランチは各機能取り込んでmergeしてtestしたりとか。（各機能の開発終わったらこっちにマージするように）
* 各機能作成ブランチはdevelopから切るようにして、個人の開発を行う。（命名規則はどうでもいいけど被りそうだから自分の名前は入れてて欲しい。）
* マージしたブランチは基本消去。（落ち着いたくらいから学びのためにもPRレビューしたい）
* 開発の手順はなんとなくで

## Nextとは？
クライアント側でレンダリングするReactを、SSR(サーバサイドレンダリング)させるためのフレームワーク。

## 必要なモジュールがあったら
  yarn add {package} // 本番でも必要なモジュールはこちら。勝手にdependenciesにも入れてくれる。
  
  yarn add --dev {package} // 開発環境のみ必要なモジュールはこちら（極力本番に必要ないものはこっちに入れるようにする）
  
  もしくはnpm install (こっちのが使いそうだけど、どちらにしてもdev環境に入れるのかどうかを確認。間違えたらjsonを直接書き換える。)

## ローカルで確認するときのコマンド
  Starts the development server. //開発時に実行。開発サーバを起動。起動中は変更が自動で更新される。
    
    yarn dev
    
  Builds the app for production.　//本番用にビルドを行う
  
    yarn build

  Runs the built app in production mode.// 本番用にビルドしたアプリを起動
  
    yarn start

## その他メモ
### とりあえずのコード整形
  pretty-quick: prettierでGitステージング状態のファイルを全部整形してくれる
  
  (precommit/prepushでlintが働くようにしてます)
  
  prettierの設定ファイルは.prettierrc、
  
  eslintの設定ファイルは.eslintrc.json
  
  走査対象はpackage.jsonのscriptのところ

    yarn run lint // 任意のタイミングでlintかけたいとき
  
  もしくは
  
    yarn run lint:fix
  
### もしnode入ってないなら
  #### 仮想環境噛ませるなら[こっち](https://www.to-r.net/media/anyenv/)と[こっち](https://qiita.com/ttokdev/items/3547587b0494dd624901)を参考に
  1. nodebrewを入れる(macとwindowsで違う)
  
  1. nodebrew use {ver} // 使用するバージョンを指定、latestで良いと思う
  
  1. nodebrew ls で指定できてること確認。
  
  1. path通してnode ls できること確認。
  
  (anyenv通してnodeenv入れてたら、プロジェクトルートに移動して、nodenv local {nodeのver}をするだけで、プロジェクト毎にver管理できる)
  
  とりあえず安定版ぽい node 14.14.0 で動かしてます。
