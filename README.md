# 6/1 課題 実行結果

README.mdを編集して、「【ここにConsoleログを記入】」の部分を、Console（Chromeデベロッパーツール）の実行結果に置き換えてください。

## 4時間目 (p.78～101)

### 4-2 関数 (p.79)

- p.79 リスト4.1: `list4-1.js` に記入する
- `index.html`の「【ここにscriptタグを入力】」を次に置き換える：
    - `<script src="list4-1.js"></script>`
- Chromeを更新する（F5 または Ctrl-R/command-R）
- p.80 黒い枠で囲まれた部分（白地）をConsoleで実行する
    - `> `で始まる部分を実行
- ログ（入力したコードと実行結果）をコピーして、下記に貼り付ける

```
function sum() {
    var total = 0;
    for (var counter = 1; counter <= 10; counter++ ) {
        total += counter;
    }
    window.alert(total);
    } 
undefined
55
```

### 4-2-1 引数 (p.81)

- p.81 リスト4.2: `list4-2.js` に記入する
- `index.html`のscriptタグ（最初の【ここにscriptタグを入力】の部分）を次に置き換える：
    - `<script src="list4-2.js"></script>`
- Chromeを更新する
- p.80 （再び）黒い枠で囲まれた部分（白地）をConsoleで実行する
- ログをコピーして、下記に貼り付ける

```
function sum(rangeTo) {
    var total = 0;
    for (var counter = 1; counter <= rangeTo; counter++ ) {
        total += counter;
    }
    window.alert(total);
    } 
undefined
```

- p.82 リスト4.3: `list4-3.js` に記入する
- `index.html`のscriptタグを次に置き換える：
    - `<script src="list4-3.js"></script>`
- Chromeを更新する
- p.80 （再び）黒い枠で囲まれた部分（白地）をConsoleで実行する
    - `> `で始まる部分を実行
- ログをコピーして、下記に貼り付ける

```
function sum(rangeForm,rangeTo) {
    var total = 0;
    for (var counter = 1; counter <= rangeTo; counter++ ) {
        total += counter;
    }
    window.alert(total);
    } 
undefined
```

以下、p.83「4-2-2 デフォルト引数」の上の行までは、自分で読んでください（入力は不要）。

### 4-2-2 デフォルト引数 (p.83)

- p.84 リスト4.4: `list4-4.js` に記入する
- `index.html`のscriptタグを次に置き換える：
    - `<script src="list4-4.js"></script>`
- Chromeを更新する
- p.84 黒い枠で囲まれた部分（白地）をConsoleで実行する
- p.85 黒い枠で囲まれた部分（白地）の**2番目のみ**をConsoleで実行する
    - 1番目（`> function sum(rangeTo, rangeFrom = 1) {`から始まるもの）は、既に`list4-4.js`で記入したので不要
- ログをコピーして、下記に貼り付ける

```
function sum(rangeForm,rangeTo = 10) {
    var total = 0;
    for (var counter = rangeForm; counter <= rangeTo; counter++ ) {
        total += counter;
    }
    window.alert(total);
    } 
undefined

```

- **ここでGit(SourceTree)でステージング→commitしてください。**
    - コミットメッセージ「4-2-2 デフォルト引数」

### 4-2-3 関数とスコープ (p.85)

- p.86～88（「4-2-4 返り値」の上まで） 黒い枠で囲まれた部分（白地）をConsoleで実行する
- ログをコピーして、下記に貼り付ける
- （p.89 Columnは記入不要（以下も同様））

```
total;
0
sum(2,5);
undefined
```

### 4-2-4 返り値 (p.88 中央)

- p.88～90 読む（入力は不要だが、入力して確かめてもいい）
- p.91～93 黒い枠で囲まれた部分（白地）をConsoleで実行する
    - 複数行の部分は`Shift+Enter`で改行する
    - 「書式」（青い字の部分）は記入不要
- ログをコピーして、下記に貼り付ける

```
var total = 0;
function sum(rangeForm, rangeTo) {
    for (var counter = rangeFrom; counter <= rangeTo; counter++) {
        total += counter;
    }
}
undefined
sum(1, 10);
VM252:3 Uncaught ReferenceError: rangeFrom is not defined
    at sum (<anonymous>:3:24)
    at <anonymous>:1:1
sum @ VM252:3
(anonymous) @ VM254:1
window.alert(total);
undefined
0
0
sum(1, 10);
VM252:3 Uncaught ReferenceError: rangeFrom is not defined
    at sum (<anonymous>:3:24)
    at <anonymous>:1:1
sum @ VM252:3
(anonymous) @ VM304:1
window.alert(total);
undefined
110
110
function sum(rangeForm, rangeTo) {
    var total = 0;
    for (var counter = rangeForm; counter <= rangeTo; counter++ ) {
        total += counter;
    }
    return total;
} 

undefined
sum(1,10);

55

function isNarrow() {
    return window.innerWidth < 1000; 
}
undefined
if (isNarrow()) {
    window.alert('狭いです');
} else {
    window.alert('広いです');
}
undefined
```

### 4-3-1 配列の作り方 (p.95)
### 4-3-2 配列への値の追加と取得 (p.96)

- p.95～97 黒い枠で囲まれた部分（白地）をConsoleで実行する
- （p.98 Columnは記入不要）

```
var sampleArray = [];
undefined
sampleArray = [];
[]
sampleArray = [1, 3, 5];
(3) [1, 3, 5]
sampleArray;
(3) [1, 3, 5]
var sampleArray = [];
undefined
sampleArray.push(59);
1
sampleArray;
[59]0: 59length: 1__proto__: Array(0)
sampleArray.push(61);
2
sampleArray;
(2) [59, 61]
sampleArray[0];
59
sampleArray[1];
61
sampleArray[2];
undefined
sampleArray.splice(0, 1);
[59]
sampleArray
[61]
sampleArray;
[61]
sampleArray.push(67);
2
sampleArray.push(71);
3
sampleArray.push(73);
4
sampleArray;
(4) [61, 67, 71, 73]
sampleArray.splice(1, 2);
(2) [67, 71]
sampleArray;
(2) [61, 73]
sampleArray.length;
2
```

### 4-3-3 関数と組み合わせて使う (p.99)
### 4-3-4 便利な関数 (p.99)

- p.99～101（「確認テスト」の上まで） 黒い枠で囲まれた部分（白地）をConsoleで実行する

```
function calculateTaxIncluding(prices) {
    var results =[];
    for (var index = 0, length = prices.length; index < length; index++)
    {

      results.push(prices[index] * 1.08);
    }
    return results;
}
undefined
calculateTaxIncluding([100, 200, 40, 50]);
(4) [108, 216, 43.2, 54]
var a = [0, 1, 1, 2, 3, 5, 8];
undefined
a.toString();
"0,1,1,2,3,5,8"
var a = [0, 1, 1, 2, 3, 5, 8];
undefined
a.join(' and ');
"0 and 1 and 1 and 2 and 3 and 5 and 8"
var a = [0, 1, 1, 2, 3, 5, 8];
undefined
a.indexOf(5);
5
var a = [0, 1, 1, 2, 3, 5, 8];
undefined
a.indexOf(4);
-1
var a = [0, 1, 1, 2, 3, 5, 8];
undefined
a.indexOf(1);
1
var a = [0, 1, 1, 2, 3, 5, 8];
undefined
a.lastndexOf(1);
VM1989:1 Uncaught TypeError: a.lastndexOf is not a function
    at <anonymous>:1:3
(anonymous) @ VM1989:1
a.lastIndexOf(1);
2
```

- **ここでGit(SourceTree)でステージング→commitしてください。**
    - コミットメッセージ「4-3-4 便利な関数」

### 確認テスト (p.101)

それぞれ

- 関数の定義(`function`)
- 関数を使う例

を書くこと。（ヒント：関数(`function`)の作り方はp.92）


Q1：

```
【ここにConsoleログを記入】
```

Q2：

```
【ここにConsoleログを記入】
```

- **ここでGit(SourceTree)でステージング→commitしてください。**
    - コミットメッセージ「4時間目 確認テスト」

## 5時間目（p.102～123）

### 5-1 連想配列と無名関数
### 5-1-1 データ設計 (p.102)

- `ex5-1.js` に配列を用意している
    - p.102 `examinationScores`
    - p.104 `informationExaminationScores`, `englishExaminationScores`
- `index.html`のscriptタグを次に置き換える：
    - `<script src="ex5-1.js"></script>`
- Chromeを更新する
- p.103 青地の部分をConsoleで実行する

```
【ここにConsoleログを記入】
```

### 5-1-2 二次元配列 (p.103)

- 読む（記入不要）

### 5-1-3 定数 (p.105)

- p.105～106（「5-1-4 連想配列」の上まで） 青地の部分をConsoleで実行する

```
【ここにConsoleログを記入】
```

### 5-1-4 連想配列 (p.106)

- p.106 Column 青地の部分をConsoleで実行する
    - ここは重要なので目を通してください
- p.107 黒い枠で囲まれた部分（白地）をConsoleで実行する
- p.108 青地の部分をConsoleで実行する
    - 数字の部分は `ex5-1.js` と同じなので、コピーして使ってください

```
【ここにConsoleログを記入】
```

### 5-1-5 データ構造の見直し (p.109)

- p.109～111（「5-2 関数をもっと活用する」の上まで） 読む（実行不要）

- **ここでGit(SourceTree)でステージング→commitしてください。**
    - コミットメッセージ「5-1-5 データ構造の見直し」

### 5-2 関数をもっと活用する
### 5-2-1 関数型の変数 (p.111)

- p.111 黒い枠で囲まれた部分（白地）をConsoleで実行する

```
【ここにConsoleログを記入】
```

### 5-2-2 関数型の引数 (p.112)

- p.112 黒い枠で囲まれた部分（白地）をConsoleで実行する
- p.113 リスト5.3: `list5-3.js` に記入する
- `index.html`のscriptタグを次に置き換える：
    - `<script src="list5-3.js"></script>`
- Chromeを更新する
- p.113 黒い枠で囲まれた部分（白地）をConsoleで実行する

```
【ここにConsoleログを記入】
```

### 5-2-3 関数式 (p.113)

- p.114 黒い枠で囲まれた部分（白地）をConsoleで実行する

```
【ここにConsoleログを記入】
```

### 5-2-4 無名関数 (p.114)

- p.115～116（「5-2-5 関数宣言と関数式」の上まで） 黒い枠で囲まれた部分（白地）をConsoleで実行する

```
【ここにConsoleログを記入】
```

### 5-2-5 無名関数 (p.116)

- p.116～119 黒い枠で囲まれた部分（白地）をConsoleで実行する

```
【ここにConsoleログを記入】
```

### 5-2-6 関数式と配列を組み合わせて使う (p.120)

- p.120～122 黒い枠で囲まれた部分（白地）をConsoleで実行する

```
【ここにConsoleログを記入】
```

- **ここでGit(SourceTree)でステージング→commitしてください。**
    - コミットメッセージ「5-2-6 関数式と配列を組み合わせて使う」

### 5時間目 確認テスト (p.123)

Q1：

```
【ここにConsoleログを記入】
```

Q2：

```
【ここにConsoleログを記入】
```

Q3：

```
【ここにConsoleログを記入】
```

Q4：

```
【ここにConsoleログを記入】
```

Q5：

```
【ここにConsoleログを記入】
```

- **ここでGit(SourceTree)でステージング→commitしてください。**
    - コミットメッセージ「5時間目 確認テスト」