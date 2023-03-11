# js2ts
`js`, `jsx`, `cjs`, `mjs`をそれぞれ`ts`, `tsx`, `cts`, `mts`に変換する。

```bash
git clone git@github.com:Furafrafrfr/js2ts.git && cd ./js2ts
# 既存のファイルを直接書き換える
yarn start /path/to/src 
# or
# /path/to/srcの構造を保ったままjsのファイルのみリネーム。結果は/path/to/distに出力
yarn start /path/to/src /path/to/dist
```

