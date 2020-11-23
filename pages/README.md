# 注意点
「変数名・関数名に統一性がない」、「関数・クラスコンポーネントが混在(ステート持った場合の切り分けができなかった)」、「ステートを持ってるコンポーネントがある」、「mapで生成してるコンポーネントのkeyにindexを渡してる」などなど山ほどイマイチな部分があるので、見つけ次第面倒くさがらずに都度fixしてくれると嬉しいです。

最悪issuesに上げとくだけでもよき

# Nextの性質
## 基本
### 基本はpages内にファイルを追加していく。

ファイルが一つのパスとなり、例えば`/pages/post/porn.js`であれば`localhost:3000/post/porn`のパスに対応する。

### componentはcomponentsフォルダに置く

上記の性質があるため、componentはcomponentsフォルダに置いて、
  import Layout from '../../components/layout'
で読み込むようにする。

なお、pagesのjsファイルには極力componentは書かず、分離させる。（各ページのトップレベル（枠組み）だけを記述する。）

## 基本的なところ

### JSX記法はHTMLではない。

* すごい似てるけど、JSXはあくまでJSであって、HTMLではない。

### コンポーネント内で定義し使用する関数は、必ずコンストラクタ内でbindする。
* (example)this.itemRender = this.itemRender.bind(this))

### CSS系

#### Nextはすでにcssとscssのサポートライブラリが組み込まれている。

* 特に意識せずにimportできる。import時は以下の性質がある。

1. components内に、**.modules.cssとしてcssを保存する。

1. styles としてこのファイルをインポートする

1. styles.<class-name> を className として使う。
  
  （例えばクラス名がcontainerの場合、styles.container を使う）

#### グローバルなスタイルの定義方法

* pages ディレクトリ配下の _app.js 内で、好きな場所に置いたスタイルファイルをimportする。

### Redux
* データの貯蔵庫。ストアにデータをためといて、それを一方向的にコンポーネント側で取得する。

* 何か操作したいときは都度dispatchに渡して操作。

* stateは直接いじらない。コンポーネント内にstateを作らない。

* 基本的に、親コンポーネントからpropsを呼び出し、操作するようにする。（子コンポーネントに渡し、子コンポーネントは親に対して影響を作らないようにする。）

* またこれに関連して、子コンポーネントでのconnectもできれば最小限にしたい。dispatchするときは仕方ないけど、極力そうならないよう実装する。

(2019年以前のReduxの書き方をしているので、最新版にfixしていけると良いかも)
