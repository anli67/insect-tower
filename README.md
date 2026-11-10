# 蟲蟲／詞語塔防（Word Tower Defense）

廣東話／English · 小朋友詞彙塔防遊戲（靜態網頁）

用寫詞／默書／拼音／成語／重組句子去派出蟲蟲角式、守護自己嘅塔。本 repo 係 **公開 scrub 版**：已剔走私人路徑、學校名、操作者／學生品牌字、內部作業／QC 筆記。

A static browser game for kids to practise Chinese vocab / dictation / pinyin / idioms / sentence-reorder in a light tower-defense loop with original bug units. This is the **public scrubbed pack** (no private paths, school names, operator/student brand tokens, or internal operations notes).

## Run（本機）

需要一個 local static server（唔好直接用 `file://`）：

```bash
python3 -m http.server 8766
```

然後開：http://127.0.0.1:8766/

（或者任何 static server 指住 repo root。）

## What’s inside

- `index.html` / `game.js` / `style.css` — game shell
- `assets/` — cards, units, backgrounds, gallery art
- JSON word banks at repo root
- `sfx/` — BGM and short SFX
- `CREDITS.md` — audio/art notes
- `LICENSE` — MIT for code; check CREDITS for assets

## GitHub Pages

Pages will be enabled after a public empty repo URL is provided. This pack has not been pushed yet, and no repository URL is claimed here.

## License note

Code: MIT. Assets: educational demo — see `CREDITS.md`. Replace BGM with a track you clearly own / CC0 if you need a stricter public release.

## Privacy

This public pack redacts school source labels to generic placeholders and strips operator / student brand tokens (including localStorage key prefixes in this pack only). Do not re-add real student / school / tutor branding before publishing.
