# js2ts
`js`, `jsx`, `cjs`, `mjs`をそれぞれ`ts`, `tsx`, `cts`, `mts`に変換する。(`cts`と`mts`が必要かは知らんけど、、、)

```bash
# 既存のファイルを直接書き換える
yarn start /path/to/src 
# or
# /path/to/srcの構造を保ったままjsファイルのみリネーム。結果は/path/to/distに出力
yarn start /path/to/src /path/to/dist
```

__`node_module`も変換対象になってしまう__
