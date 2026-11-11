/* 蟲蟲 詞語塔防 · dual-tower · dock LAYOUT · ?v=ytdbc93
   ytdbc93: iPad Pencil／Scribble 寫字手感（S7／S11／S12 紙加大、write-long、唔亂 blur）；底 soft ytdbc92；唔改玩法／詞庫；唔 promote
   ytdbc92: S5 拼音 Wave 2 入池 id 17–30（14 卡＋14 角式）；底 soft ytdbc91；唔改 S7 默書；唔 promote
   ytdbc91: S7 默書開題讀普通話（Google zh-CN）＋audio unlock harden；底 soft ytdbc90；唔 promote
   ytdbc90: Mandarin via Google zh-CN audio（繁→簡）主路徑；Web Speech whitelist fallback；底 soft ytdbc89；唔 promote
   ytdbc89: force Mandarin TTS — whitelist only（拒美玲假 zh-CN）；底 soft ytdbc88；唔 promote
   ytdbc88: iPad Mandarin TTS — exclude 粵／resume／默書再聽 tap／fallback tip；底 soft ytdbc87；唔 promote
   ytdbc87: soft tip ONLY — NIT A–D：默書顯示冇答案圖卡；圖庫新 tab 理髮／繁星；還原 cards＋towers_tall；底 soft ytdbc86；唔 promote
   ytdbc86: soft tip ONLY — 叠 S11 KEEP 300–331（art_td_s11_lifa_shengzi_v0）＋S12 KEEP NEED20（201–216／218／220–222；art_td_s12_fanxing_shengzi_v0）；REUSE7＋REUSE3；底 soft ytdbc85／concept ytdbc84；唔 promote
   ytdbc85: soft tip ONLY — S11＋S12 默書（S7 刀）；叠完整 S11 39（REUSE7＋NEED 300–331 SAMPLE／placeholder）＋S12 23（201–223；REUSE3→pool4/5/6；其餘 sil_bug）；底 ytdbc84；唔 promote
   ytdbc84: soft tip KEEP stamp — face_right_v1 KEY 75801ec… + chip enlarge；bank DRAFT 43 keep；唔 keep ytdbc83；底 ytdbc82；唔 promote
   ytdbc83: soft tip（唔 keep）— S10 重組＋毛毛蟲 face-left art_td_s10_caterpillar5_v0 KEY 0e5356df…
   ytdbc82: PASS LOCK keep product（review 2026-11-02）— L4 金屬 idle+atk id45–54（art_td_knife_blind_lv4_metal_v0）；圖庫凍 ytdbc80；卡面 NEED_ART HOLD；彩虹 leftover HOLD；舊底 ytdbc81 archive
   ytdbc81: PASS LOCK keep（review 2026-11-01）升走 archive — 玩法：同一角式 Lv1 捉滿 5 → 戰鬥 Lv2 角式攻擊；圖庫／sil_bug／橫排／style gallery 凍 keep ytdbc80；舊底 ytdbc80 archive
   ytdbc80: 圖庫 Clar 凍（Lv1 抽過 SHOW；Lv2–4 未解鎖＝可見 sil_bug；橫排 Lv KEEP；唔 brightness(0)／唔灰板）；product 升走 → ytdbc81 → ytdbc82
   ytdbc79: FAIL 灰板 — brightness(0)+黑底；唔 keep · ytdbc78: 橫排＋剪影；唔 keep
   ytdbc77: S8／S4 頂欄必 SHOW 句子＋____ — ASCII alias stage8_sentences_fig23_v0.json（Unicode 404 fallback）；startStage8 強制從 stage8SentenceList 出句；空庫顯示「句庫載入失敗」唔藏 bubble；label＝填句；暫 tryplay 唔 keep；PASS LOCK／暫 keep 仍 ytdbc71（ytdbc75／76 只試）
   ytdbc76: S4 Clar⑥ — SHOW 句子＋____（唔係聽音默書）；rollNextDictation 唔再整段換 bubble；S4／S8 藏左／右卡；tryplay only 唔 PASS LOCK
   ytdbc75: tryplay — 未「睇答案」時 #sel-preview／左欄 deck 藏 ANS（ans-hidden＋???）；圖可照常；唔 PASS LOCK；暫 keep 仍 ytdbc71
   ytdbc74: S8 cloze 改 load stage8_sentences_圖二三_v0.json（183句／61詞；似S4填句）；UI keep ytdbc73；暫唔 product keep；live keep ytdbc71
   ytdbc73: ①S4藏底左選卡＋底右預覽（自己諗字填句）②S8改跟S4填句（allowlist keep；唔選卡）③S7默書藏欄 keep；暫唔 product keep；live keep ytdbc71
   ytdbc72: ①S7默書藏左欄選卡＋右欄預覽 ②新S8圖二＋十課造句 allowlist（REUSE）③S4全庫唔改；暫唔 product keep；live keep ytdbc71
   ytdbc71: PASS LOCK keep Lv3 crystal ATK（art_td_knife_blind_lv3_crystal_atk_v0）id45–54；keep study BG ytdbc70＋blind persist ytdbc69；暫唔 product keep；live keep 仍 ytdbc69
   ytdbc70: 默書新關 study BG wire（溫書 PASS LOCK art bank）→ stage7；暫唔 keep；live keep 仍 ytdbc69
   ytdbc69: ①盲盒 RECORD 改返保留（owned／pull／L2–L4 localStorage persist；唔 wipe）②每角式每階確定 5 抽升 L2／L3／L4 keep ③圖庫剪影 keep
   ytdbc67: PASS LOCK keep rainbow-glass Lv4 idle（art_td_knife_blind_lv4_rainbow_glass_v0）— L4>L3>L2; forceL4=1 QC; atk NEED_ART
   ytdbc66: PASS LOCK keep crystal Lv3 idle art（art_td_knife_blind_lv3_crystal_v0）— bump incomplete ytdbc65 const V
   ytdbc65: ①siege no-die＋spawn denser ②crystal Lv3 wire ③RECORD/gacha persist · ⑦ yokai mid/big staged
   ytdbc64: deck＋sel 唔用 ??? cover — 戰鬥中常顯示角式圖＋詞名（跟 revealed）；SKIP／S3卡圖／S4文字 keep
   ytdbc63: S3 SKIP 漏 stage3 fix；deck ??? cover 縮底帶見卡圖
   ytdbc62: Clar S3 恢復卡圖＋句子（似 S1／S2）；只有 S4 提示淨文字（蓋過 ytdbc48 對 S3 唔俾圖）
   ytdbc61: ③④ PASS art wire — L2 gold idle PNG + fire_atk tower FX；金atk NEED_ART
   ytdbc60: ①S3可用S2詞 ②S3/S4每詞3句均等random ③盲盒L2金 ④攻塔紅火FX
   ytdbc59: bubble 更闊更短；alpha 0.38；撤長窄／rev6；SKIP／清字 keep
   ytdbc58: superseded
   ytdbc55: SKIP／清全部＋清一字；alpha 再透明
   ytdbc54: knife5 BOSS×3 PASS cutout KEEP
   ytdbc53: S3/S4/S5 問題外框半透明長方
   ytdbc52: ALL unit sprites 退地 cutout knife — remap fallback + block jpg box fallback; knife5_boss later PASS ytdbc54
   ytdbc51: S3/S4/S5 問題框改返 pre-48 細框 + 內文更大字
   ytdbc50: ①S3/S4卡細字大 ②S3–5答完先換題 ③國語TTS(S1–5答啱/S6出題) ④死咗清攻 ⑤Easy1+1+1/Hard3+3+1 BOSS
   ytdbc49: ④BG motion overlays + ⑥tall tower PNG (PASS LOCK art)
   ytdbc48: ①prompt big+no thumb ②post-boss small/mid waves ③boss melee engage ⑤ult left ⑥tall towers
   SAMPLE ONLY web_bc0_sample_blind_ult_idle_ytdbc45 — ult idle bypass MEGA → card allySprite; live keep untouched */
(function () {
  "use strict";

  /* ---- Balance v0 ---- */
  const TOWER_HP = 100;
  /* Pace ytdbc6: ~45% slower units, longer spawn gap, gentler energy */
  const ENEMY = { hp: 25, atk: 8, speed: 16 }; /* was 30 */
  const ALLY_SPEED = 21; /* was 38 */
  const ENEMY_SPAWN_MS = 7500; /* was 4500 */
  const MAX_ENEMY = 4;
  /* ytdbc21: no ally deploy cap（蟲出擊不設上限） */
  const MAX_ALLY = 9999;
  const DEPLOY_CD_MS = 4000; /* stage3+ soft CD */
  const DEPLOY_CD_STAGE12_MS = 10000; /* ytdbc21: stage1/2 same-option 10s CD + bar */
  const UNIT_W = 120;
  const BIG4_UNIT_W = 200; /* ytdbc21: 四字角式大隻 */
  const ULT_UNIT_W = 280; /* ytdbc22: MEGA blind ult 超大隻 */
  const BIG4_AURA = true; /* ytdbc22 PASS: red energy aura via CSS */
  const ULT_MEGA_SPRITE = "assets/ui_pass_ytdbc28/mega_ult_soft3d_face_left_opaque.png"; /* ytdbc28 PASS */
  const ULT_BTN_ART = "assets/ui_pass_ytdbc22/ult_btn_ready.png";
  const SPAWN_GAP_CARDS = 1.5;
  const TOWER_DMG = 12;
  const ENERGY_MAX = 100;
  const ENERGY_REGEN = 8; /* was 12 — more write time */
  const STAGE5_WRONG_ENERGY = 20; /* ytdbc27: 拼音錯 −20 ENERGY */
  const ANSWER_PEEK_HP_FRAC = 0.1; /* ytdbc30 knife①: 看答案扣塔 10% */
  /* ytdbc21: ult = 連打倒敵 4 隻 → BUTTON 出盲盒角式（取代舊 deploy 連中 5 自動大招） */
  const COMBO_ULT_NEED = 4;
  const ULT_TOWER_DMG = 10;
  const ULT_ATK_MULT = 3.5; /* blind-box ult ATK multiplier */
  const ULT_HP_MULT = 2.5;
  /* ytdbc42 knife②: 大／中／細 BOSS art（KEEP crystal as fallback） */
  const BOSS_KILL_NEED = 20;
  const MID_BOSS_KILL_NEED = 10; /* ⑦ mid @ half of big */
  const BOSS_SPRITE = "assets/ui_pass_ytdbc28/boss_big_soft3d_crystal_R_face_left_opaque.png"; /* ytdbc28 結晶R KEEP — S6 fallback */
  /* ⑦ yokai PASS: stageMode 1–5 mid/big；S6／未知 → 結晶R；舊烏鴉／螳螂／狸貓 BOSS_BY_SIZE KEEP additive */
  const STAGE_BOSS = {
    1: {
      mid: "assets/boss_s1s5/boss_mid_s1_bihfeng_stag.png",
      big: "assets/boss_s1s5/boss_big_s1_dict_armor_dog.png",
    },
    2: {
      mid: "assets/boss_s1s5/boss_mid_s2_stone_beetle.png",
      big: "assets/boss_s1s5/boss_big_s2_ruin_steam_train.png",
    },
    3: {
      mid: "assets/boss_s1s5/boss_mid_s3_lava_bee.png",
      big: "assets/boss_s1s5/boss_big_s3_volcano_drill_mecha.png",
    },
    4: {
      mid: "assets/boss_s1s5/boss_mid_s4_moss_crab.png",
      big: "assets/boss_s1s5/boss_big_s4_log_armor_roller.png",
    },
    5: {
      mid: "assets/boss_s1s5/boss_mid_s5_mantis_guard.png",
      big: "assets/boss_s1s5/boss_big_s5_starship_honey_cannon.png",
    },
  };
  /* ytdbc54 PASS LOCK: knife5_boss ×3 hard cutout（art_td_cutout_knife5_boss3_v0）— sky-box NEED_ART cleared */
  const BOSS_BY_SIZE = {
    big: {
      size: "big",
      label: "大",
      name: "大嘴烏鴉",
      image: "assets/knife5_boss/boss_大_大嘴烏鴉.png",
      hpMult: 10,
      atkMult: 2.5,
      speed: 8,
      unitW: 220,
    },
    mid: {
      size: "mid",
      label: "中",
      name: "大螳螂",
      image: "assets/knife5_boss/boss_中_大螳螂.png",
      hpMult: 7,
      atkMult: 2.0,
      speed: 10,
      unitW: 180,
    },
    small: {
      size: "small",
      label: "細",
      name: "狸貓",
      image: "assets/knife5_boss/boss_細_狸貓.png",
      hpMult: 5,
      atkMult: 1.6,
      speed: 12,
      unitW: 150,
    },
  };
  /* 每關 BOSS：1細狸貓／2中螳螂／3大烏鴉／4大／5中／6細 */
  const STAGE_BOSS_SIZE = {
    1: "small",
    2: "mid",
    3: "big",
    4: "big",
    5: "mid",
    6: "small",
  };
  const BOSS_HP_MULT = 10; /* default × ENEMY.hp when def missing — big */
  const MID_BOSS_HP_MULT = 6; /* ytdbc50: mid slightly tankier for fun pacing */
  const SMALL_BOSS_HP_MULT = 3.5; /* ytdbc50 knife⑤ 細 BOSS */
  const SMALL_BOSS_ATK_MULT = 1.35;
  const SMALL_BOSS_UNIT_W = 140;
  const BOSS_ATK_MULT = 2.2; /* ytdbc50: was 2.5 — big less melt-y */
  const BOSS_SPEED = 8; /* default */
  const BOSS_ULT_MS = 10000; /* ~8–12s cadence */
  const BOSS_ULT_TOWER_DMG = 0; /* ult does NOT damage player tower */
  /* ytdbc21 knife#2: each BOSS strike hits ≤3 allies, each loses 1/3 maxHp (NOT 3 hits to kill one) */
  const BOSS_ULT_ALLY_RANGE = 3;
  const BOSS_ULT_ALLY_DMG = 0; /* unused; use frac below */
  const BOSS_ULT_ALLY_FRAC = 3; /* deduct ceil(maxHp/3) per hit ally */
  const BOSS_RANGE_FRAC = 0.25; /* ytdbc21 knife#1: boss attack range = 1/4 screen width */
  const BOSS_STRIKE_MS = 1800; /* discrete boss strike cadence (melee soft) */
  const BOSS_UNIT_W = 220;
  const MID_BOSS_UNIT_W = Math.round(BOSS_UNIT_W * 0.72); /* ~158 */
  const BOSS_TOWER_DMG = 22; /* if boss reaches player tower */
  const BOSS_COMBO_CHIP = 40; /* unused after ult rewrite; keep for safety */
  const V = "ytdbc93";
  /* ytdbc93: iPad Pencil／Scribble 寫字手感；底 ytdbc92；唔改玩法／詞庫／拼音；唔 promote */
  /* ytdbc91: S7 默書開題讀普通話（Google zh-CN）＋unlock harden；底 ytdbc90；唔 promote */
  /* ytdbc90: Google zh-CN audio TTS primary；Web Speech whitelist fallback */
  /* ytdbc87 soft: NIT A–D 默書圖卡＋圖庫 lifa／fanxing＋還原 cards／towers；底 ytdbc86；唔 promote */
  /* ytdbc84 soft: S10 毛毛蟲 roster（face_right_v1）（PASS LOCK keep art；卡面 HOLD；local soft ids C1–C5） */
  const S10_CATERPILLAR_KEY = "cc_td_s10_caterpillar_owned_v0";
  const S10_WRONG_ENERGY = 20;
  const S10_CATERPILLARS = [
    {
      id: "caterpillar_01",
      cid: "C1",
      word: "句節毛",
      allySprite: "assets/s10_caterpillar/caterpillar_01_idle.png",
      allyAtkSprite: "assets/s10_caterpillar/caterpillar_01_atk.png",
      atk: 42,
      hp: 46,
      char_count: 3,
      _s10: true,
    },
    {
      id: "caterpillar_02",
      cid: "C2",
      word: "排句蟲",
      allySprite: "assets/s10_caterpillar/caterpillar_02_idle.png",
      allyAtkSprite: "assets/s10_caterpillar/caterpillar_02_atk.png",
      atk: 42,
      hp: 46,
      char_count: 3,
      _s10: true,
    },
    {
      id: "caterpillar_03",
      cid: "C3",
      word: "拖拖毛",
      allySprite: "assets/s10_caterpillar/caterpillar_03_idle.png",
      allyAtkSprite: "assets/s10_caterpillar/caterpillar_03_atk.png",
      atk: 42,
      hp: 46,
      char_count: 3,
      _s10: true,
    },
    {
      id: "caterpillar_04",
      cid: "C4",
      word: "順句毛",
      allySprite: "assets/s10_caterpillar/caterpillar_04_idle.png",
      allyAtkSprite: "assets/s10_caterpillar/caterpillar_04_atk.png",
      atk: 42,
      hp: 46,
      char_count: 3,
      _s10: true,
    },
    {
      id: "caterpillar_05",
      cid: "C5",
      word: "重組蟲",
      allySprite: "assets/s10_caterpillar/caterpillar_05_idle.png",
      allyAtkSprite: "assets/s10_caterpillar/caterpillar_05_atk.png",
      atk: 42,
      hp: 46,
      char_count: 3,
      _s10: true,
    },
  ];
  const SUCCESS_KEY = "cc_td_success_v1";
  const OWNED_KEY = "cc_td_owned_v1";
  /* ytdbc69: sentence fair-use + gacha owned／pull／L2–L4 persist（跨 ?v=／reload） */
  const SENTENCE_USE_KEY = "cc_td_sentence_use_v1";
  const GACHA_PULL_KEY = "cc_td_gacha_pulls_v1";
  const GACHA_L2_KEY = "cc_td_gacha_l2_v1";
  const GACHA_L3_KEY = "cc_td_gacha_l3_v1"; /* ytdbc65 ③ persist crystal Lv3 */
  const GACHA_L4_KEY = "cc_td_gacha_l4_v1"; /* ytdbc67 persist rainbow-glass Lv4 */
  /* ytdbc81: Lv1 捉次數 → 解鎖戰鬥 Lv2 角式攻擊（同 5 抽升皮並存；圖鑑唔改） */
  const LV1_CATCH_KEY = "cc_td_lv1_catch_v1";
  const LV2_ATK_KEY = "cc_td_lv2_atk_v1";
  const LV1_CATCH_NEED = 5; /* 同一角式 Lv1 捉滿 5 次 */
  const LV2_ATK_MULT = 1.25; /* 解鎖後戰鬥 ATK 加成 */
  /* ytdbc41 knife④: 難易度＋遊戲速度 stub（localStorage） */
  const SETTINGS_KEY = "cc_td_settings_v1";
  /* ytdbc50 knife⑤: Easy=1細1中1大／Difficult=3細3中1大；HP／ATK 調好玩 */
  const DIFF_PRESETS = {
    easy: { label: "簡單", enemyHp: 0.75, enemyAtk: 0.6, spawnMs: 1.4, energyRegen: 1.35, maxEnemy: 3, bossSmall: 1, bossMid: 1, bossBig: 1, bossStepKills: 4, bossFirstKills: 3 },
    normal: { label: "普通", enemyHp: 1, enemyAtk: 0.95, spawnMs: 1, energyRegen: 1, maxEnemy: 4, bossSmall: 2, bossMid: 2, bossBig: 1, bossStepKills: 5, bossFirstKills: 4 },
    hard: { label: "困難", enemyHp: 1.2, enemyAtk: 1.15, spawnMs: 0.78, energyRegen: 0.85, maxEnemy: 5, bossSmall: 3, bossMid: 3, bossBig: 1, bossStepKills: 3, bossFirstKills: 2 },
  };
  const DIFF_BOSS_WAVE_FALLBACK = { bossSmall: 2, bossMid: 2, bossBig: 1, bossStepKills: 5, bossFirstKills: 4 };
  const SPEED_OPTS = [1, 1.5, 2];
  const BUG_ID_MIN = 45;
  const BUG_ID_MAX = 54;

  /* Fallback if deck card missing atk/hp (matches deck_pool combat_balance) */
  const ATK_BY_CHARS = { 1: 8, 2: 14, 3: 18, 4: 55 }; /* ytdbc21: 四字 ATK 大增 */
  /* ---- ytdbc44 knife cutout v1b_hard（進攻／idle／打鬥雲／雙塔）+ KEEP blind 45–54 ---- */
  const TOWER_PLAYER_ART = "assets/towers_tall/tower_L_獨角仙巢穴_tall_v0.png"; /* ytdbc49 knife⑥ PASS tall */
  const TOWER_ENEMY_ART = "assets/towers_tall/tower_R_獨角仙巢穴_tall_v0.png";
  const FIGHTCLOUD_FRAMES = [
    "assets/knife_cutout_v1b/fx/fx_fightcloud_01.png",
    "assets/knife_cutout_v1b/fx/fx_fightcloud_02.png",
    "assets/knife_cutout_v1b/fx/fx_fightcloud_03.png",
    "assets/knife_cutout_v1b/fx/fx_fightcloud_04.png",
  ];
  const ATK_ALLY_BY_ID = {
    16: "assets/knife_cutout_v1b/atk/atk_ally_16_裝腔作勢.png",
    39: "assets/knife_cutout_v1b/atk/atk_ally_39_濟.png",
    /* ytdbc43 KEEP: 盲盒大招 id45–54 進攻角式 */
    45: "assets/blind_ult_atk/id45_大兜蟲_atk.png",
    46: "assets/blind_ult_atk/id46_南洋大兜蟲_atk.png",
    47: "assets/blind_ult_atk/id47_長頸鹿鍬形蟲_atk.png",
    48: "assets/blind_ult_atk/id48_五角大兜蟲_atk.png",
    49: "assets/blind_ult_atk/id49_螳螂_atk.png",
    50: "assets/blind_ult_atk/id50_蜘蛛_atk.png",
    51: "assets/blind_ult_atk/id51_巨無霸蜻蜓_atk.png",
    52: "assets/blind_ult_atk/id52_戰神大兜_atk.png",
    53: "assets/blind_ult_atk/id53_毛象兜蟲_atk.png",
    54: "assets/blind_ult_atk/id54_獨角仙_atk.png",
    56: "assets/knife_cutout_v1b/atk/atk_ally_56_高聳入雲.png",
    57: "assets/knife_cutout_v1b/atk/atk_ally_57_肅然起敬.png",
    61: "assets/knife_cutout_v1b/atk/atk_ally_61_眼簾.png",
    64: "assets/knife_cutout_v1b/atk/atk_ally_64_和諧.png",
    65: "assets/knife_cutout_v1b/atk/atk_ally_65_籌劃.png",
    66: "assets/knife_cutout_v1b/atk/atk_ally_66_目睹.png",
    69: "assets/knife_cutout_v1b/atk/atk_ally_69_發誓.png",
  };
  /* Chengyu stage4 ids 03／05／15 — 唔同 deck id 3／5／15 詞 */
  const ATK_ALLY_CHENGYU_BY_ID = {
    3: "assets/knife_cutout_v1b/atk/atk_ally_03_刮目相看.png",
    5: "assets/knife_cutout_v1b/atk/atk_ally_05_如火如荼.png",
    15: "assets/knife_cutout_v1b/atk/atk_ally_15_高談闊論.png",
  };
  const ATK_ALLY_BY_WORD = {
    "刮目相看": "assets/knife_cutout_v1b/atk/atk_ally_03_刮目相看.png",
    "如火如荼": "assets/knife_cutout_v1b/atk/atk_ally_05_如火如荼.png",
    "高談闊論": "assets/knife_cutout_v1b/atk/atk_ally_15_高談闊論.png",
    "裝腔作勢": "assets/knife_cutout_v1b/atk/atk_ally_16_裝腔作勢.png",
    "濟": "assets/knife_cutout_v1b/atk/atk_ally_39_濟.png",
    "高聳入雲": "assets/knife_cutout_v1b/atk/atk_ally_56_高聳入雲.png",
    "肅然起敬": "assets/knife_cutout_v1b/atk/atk_ally_57_肅然起敬.png",
    "眼簾": "assets/knife_cutout_v1b/atk/atk_ally_61_眼簾.png",
    "和諧": "assets/knife_cutout_v1b/atk/atk_ally_64_和諧.png",
    "籌劃": "assets/knife_cutout_v1b/atk/atk_ally_65_籌劃.png",
    "目睹": "assets/knife_cutout_v1b/atk/atk_ally_66_目睹.png",
    "發誓": "assets/knife_cutout_v1b/atk/atk_ally_69_發誓.png",
    /* ytdbc43 KEEP blind ult atk */
    "大兜蟲": "assets/blind_ult_atk/id45_大兜蟲_atk.png",
    "南洋大兜蟲": "assets/blind_ult_atk/id46_南洋大兜蟲_atk.png",
    "長頸鹿鍬形蟲": "assets/blind_ult_atk/id47_長頸鹿鍬形蟲_atk.png",
    "五角大兜蟲": "assets/blind_ult_atk/id48_五角大兜蟲_atk.png",
    "螳螂": "assets/blind_ult_atk/id49_螳螂_atk.png",
    "蜘蛛": "assets/blind_ult_atk/id50_蜘蛛_atk.png",
    "巨無霸蜻蜓": "assets/blind_ult_atk/id51_巨無霸蜻蜓_atk.png",
    "戰神大兜": "assets/blind_ult_atk/id52_戰神大兜_atk.png",
    "毛象兜蟲": "assets/blind_ult_atk/id53_毛象兜蟲_atk.png",
    "獨角仙": "assets/blind_ult_atk/id54_獨角仙_atk.png",
  };
  /* ytdbc44: solid idle for same 12 knife cards（override soft map／chengyu soft） */
  /* ytdbc46 knife A PASS: 盲盒 id45–54 idle = bugs_new10 card art (mapping 2026-10-29); not MEGA */
  const BLIND_IDLE_BY_ID = {
    45: "assets/bug_01_大兜蟲.png",
    46: "assets/bug_02_南洋大兜蟲.png",
    47: "assets/bug_03_長頸鹿鍬形蟲.png",
    48: "assets/bug_04_五角大兜蟲.png",
    49: "assets/bug_05_螳螂.png",
    50: "assets/bug_06_蜘蛛.png",
    51: "assets/bug_07_巨無霸蜻蜓.png",
    52: "assets/bug_08_戰神大兜.png",
    53: "assets/bug_09_毛象兜蟲.png",
    54: "assets/bug_10_獨角仙.png",
  };

  /* ytdbc61 ③ PASS: L2 gold idle — do NOT overwrite L1 BLIND_IDLE_BY_ID */
  const BLIND_IDLE_L2_BY_ID = {
    45: "assets/blind_lv2_gold/id45_大兜蟲_lv2_gold_idle.png",
    46: "assets/blind_lv2_gold/id46_南洋大兜蟲_lv2_gold_idle.png",
    47: "assets/blind_lv2_gold/id47_長頸鹿鍬形蟲_lv2_gold_idle.png",
    48: "assets/blind_lv2_gold/id48_五角大兜蟲_lv2_gold_idle.png",
    49: "assets/blind_lv2_gold/id49_螳螂_lv2_gold_idle.png",
    50: "assets/blind_lv2_gold/id50_蜘蛛_lv2_gold_idle.png",
    51: "assets/blind_lv2_gold/id51_巨無霸蜻蜓_lv2_gold_idle.png",
    52: "assets/blind_lv2_gold/id52_戰神大兜_lv2_gold_idle.png",
    53: "assets/blind_lv2_gold/id53_毛象兜蟲_lv2_gold_idle.png",
    54: "assets/blind_lv2_gold/id54_獨角仙_lv2_gold_idle.png",
  };
  /* ytdbc65 ②: 太晶／水晶 Lv3 idle（approved sample） */
  const BLIND_IDLE_L3_BY_ID = {
    45: "assets/blind_lv3_crystal/id45_大兜蟲_lv3_crystal_idle.png",
    46: "assets/blind_lv3_crystal/id46_南洋大兜蟲_lv3_crystal_idle.png",
    47: "assets/blind_lv3_crystal/id47_長頸鹿鍬形蟲_lv3_crystal_idle.png",
    48: "assets/blind_lv3_crystal/id48_五角大兜蟲_lv3_crystal_idle.png",
    49: "assets/blind_lv3_crystal/id49_螳螂_lv3_crystal_idle.png",
    50: "assets/blind_lv3_crystal/id50_蜘蛛_lv3_crystal_idle.png",
    51: "assets/blind_lv3_crystal/id51_巨無霸蜻蜓_lv3_crystal_idle.png",
    52: "assets/blind_lv3_crystal/id52_戰神大兜_lv3_crystal_idle.png",
    53: "assets/blind_lv3_crystal/id53_毛象兜蟲_lv3_crystal_idle.png",
    54: "assets/blind_lv3_crystal/id54_獨角仙_lv3_crystal_idle.png",
  };
  /* ytdbc71: 太晶／水晶 Lv3 ATK（PASS LOCK keep SAMPLE atk）— fighting swap */
  const BLIND_ATK_L3_BY_ID = {
    45: "assets/blind_lv3_crystal/id45_大兜蟲_lv3_crystal_atk.png",
    46: "assets/blind_lv3_crystal/id46_南洋大兜蟲_lv3_crystal_atk.png",
    47: "assets/blind_lv3_crystal/id47_長頸鹿鍬形蟲_lv3_crystal_atk.png",
    48: "assets/blind_lv3_crystal/id48_五角大兜蟲_lv3_crystal_atk.png",
    49: "assets/blind_lv3_crystal/id49_螳螂_lv3_crystal_atk.png",
    50: "assets/blind_lv3_crystal/id50_蜘蛛_lv3_crystal_atk.png",
    51: "assets/blind_lv3_crystal/id51_巨無霸蜻蜓_lv3_crystal_atk.png",
    52: "assets/blind_lv3_crystal/id52_戰神大兜_lv3_crystal_atk.png",
    53: "assets/blind_lv3_crystal/id53_毛象兜蟲_lv3_crystal_atk.png",
    54: "assets/blind_lv3_crystal/id54_獨角仙_lv3_crystal_atk.png",
  };
  /* ytdbc82 keep: L4 金屬 idle（rainbow 留 disk 唔 wire；CSS class 仍 ally-l4-rainbow） */
  const BLIND_IDLE_L4_BY_ID = {
    45: "assets/blind_lv4_metal/id45_大兜蟲_lv4_metal_idle.png",
    46: "assets/blind_lv4_metal/id46_南洋大兜蟲_lv4_metal_idle.png",
    47: "assets/blind_lv4_metal/id47_長頸鹿鍬形蟲_lv4_metal_idle.png",
    48: "assets/blind_lv4_metal/id48_五角大兜蟲_lv4_metal_idle.png",
    49: "assets/blind_lv4_metal/id49_螳螂_lv4_metal_idle.png",
    50: "assets/blind_lv4_metal/id50_蜘蛛_lv4_metal_idle.png",
    51: "assets/blind_lv4_metal/id51_巨無霸蜻蜓_lv4_metal_idle.png",
    52: "assets/blind_lv4_metal/id52_戰神大兜_lv4_metal_idle.png",
    53: "assets/blind_lv4_metal/id53_毛象兜蟲_lv4_metal_idle.png",
    54: "assets/blind_lv4_metal/id54_獨角仙_lv4_metal_idle.png",
  };
  /* ytdbc82 keep: L4 金屬 atk（卡面 NEED_ART HOLD） */
  const BLIND_ATK_L4_BY_ID = {
    45: "assets/blind_lv4_metal/id45_大兜蟲_lv4_metal_atk.png",
    46: "assets/blind_lv4_metal/id46_南洋大兜蟲_lv4_metal_atk.png",
    47: "assets/blind_lv4_metal/id47_長頸鹿鍬形蟲_lv4_metal_atk.png",
    48: "assets/blind_lv4_metal/id48_五角大兜蟲_lv4_metal_atk.png",
    49: "assets/blind_lv4_metal/id49_螳螂_lv4_metal_atk.png",
    50: "assets/blind_lv4_metal/id50_蜘蛛_lv4_metal_atk.png",
    51: "assets/blind_lv4_metal/id51_巨無霸蜻蜓_lv4_metal_atk.png",
    52: "assets/blind_lv4_metal/id52_戰神大兜_lv4_metal_atk.png",
    53: "assets/blind_lv4_metal/id53_毛象兜蟲_lv4_metal_atk.png",
    54: "assets/blind_lv4_metal/id54_獨角仙_lv4_metal_atk.png",
  };
  /* ytdbc61 ④ PASS: tower-hit red-fire FX pack（replace CSS-only interim） */
  const TOWER_FIRE_ATK_FX = [
    "assets/fire_atk/fx_fire_hit_burst_02.png",
    "assets/fire_atk/fx_fire_hit_burst_01.png",
    "assets/fire_atk/fx_fire_slash_01.png",
    "assets/fire_atk/fx_fire_hit_burst_cloud_01.png",
    "assets/fire_atk/fx_fire_hit_burst_cloud_02.png",
    "assets/fire_atk/fx_fire_hit_burst_cloud_03.png",
  ];
  const TOWER_FIRE_PROJECTILE = "assets/fire_atk/fx_fire_projectile_01.png";

  const IDLE_ALLY_BY_ID = {
    16: "assets/knife_cutout_v1b/idle/idle_ally_16_裝腔作勢.png",
    39: "assets/knife_cutout_v1b/idle/idle_ally_39_濟.png",
    56: "assets/knife_cutout_v1b/idle/idle_ally_56_高聳入雲.png",
    57: "assets/knife_cutout_v1b/idle/idle_ally_57_肅然起敬.png",
    61: "assets/knife_cutout_v1b/idle/idle_ally_61_眼簾.png",
    64: "assets/knife_cutout_v1b/idle/idle_ally_64_和諧.png",
    65: "assets/knife_cutout_v1b/idle/idle_ally_65_籌劃.png",
    66: "assets/knife_cutout_v1b/idle/idle_ally_66_目睹.png",
    69: "assets/knife_cutout_v1b/idle/idle_ally_69_發誓.png",
  };
  const IDLE_ALLY_CHENGYU_BY_ID = {
    3: "assets/knife_cutout_v1b/idle/idle_ally_03_刮目相看.png",
    5: "assets/knife_cutout_v1b/idle/idle_ally_05_如火如荼.png",
    15: "assets/knife_cutout_v1b/idle/idle_ally_15_高談闊論.png",
  };
  const IDLE_ALLY_BY_WORD = {
    "刮目相看": "assets/knife_cutout_v1b/idle/idle_ally_03_刮目相看.png",
    "如火如荼": "assets/knife_cutout_v1b/idle/idle_ally_05_如火如荼.png",
    "高談闊論": "assets/knife_cutout_v1b/idle/idle_ally_15_高談闊論.png",
    "裝腔作勢": "assets/knife_cutout_v1b/idle/idle_ally_16_裝腔作勢.png",
    "濟": "assets/knife_cutout_v1b/idle/idle_ally_39_濟.png",
    "高聳入雲": "assets/knife_cutout_v1b/idle/idle_ally_56_高聳入雲.png",
    "肅然起敬": "assets/knife_cutout_v1b/idle/idle_ally_57_肅然起敬.png",
    "眼簾": "assets/knife_cutout_v1b/idle/idle_ally_61_眼簾.png",
    "和諧": "assets/knife_cutout_v1b/idle/idle_ally_64_和諧.png",
    "籌劃": "assets/knife_cutout_v1b/idle/idle_ally_65_籌劃.png",
    "目睹": "assets/knife_cutout_v1b/idle/idle_ally_66_目睹.png",
    "發誓": "assets/knife_cutout_v1b/idle/idle_ally_69_發誓.png",
  };
  const HP_BY_CHARS = { 1: 22, 2: 28, 3: 32, 4: 48 };

  /* Art PASS LOCK paths (assets root; also mirrored under bg/ + units/) */
  const ALLY_SPRITE = "assets/bug_10_獨角仙.png"; /* ytdbc52: cutout fallback（was white-box jpg ally_stag_beetle_idle） */
  /* Filled at boot from ally_unit_map_v0.json (44 grounded allies) */
  const ALLY_SPRITE_BY_ID = Object.create(null);
  const ALLY_SPRITE_BY_WORD = Object.create(null);
  let allyMapLoaded = 0;

  function applyAllyUnitMap(data) {
    allyMapLoaded = 0;
    const units = (data && data.units) || [];
    units.forEach((u) => {
      const file = u && u.suggested_ally;
      if (!file) return;
      const path = "assets/" + String(file).replace(/^assets\//, "");
      if (u.id != null) ALLY_SPRITE_BY_ID[u.id] = path;
      const w = String(u.word || "").trim();
      if (w) ALLY_SPRITE_BY_WORD[w] = path;
      allyMapLoaded += 1;
    });
  }

  function allySpriteFor(card, opts) {
    opts = opts || {};
    if (!card) return ALLY_SPRITE;
    /* ytdbc82: L4 metal > L3 crystal > L2 gold */
    if (card.id != null && isGachaL4(card.id) && BLIND_IDLE_L4_BY_ID[card.id]) {
      return BLIND_IDLE_L4_BY_ID[card.id];
    }
    /* ytdbc65 ②: L3 crystal preferred over L2 gold */
    if (card.id != null && isGachaL3(card.id) && BLIND_IDLE_L3_BY_ID[card.id]) {
      return BLIND_IDLE_L3_BY_ID[card.id];
    }
    /* ytdbc61 ③: L2 pull 皮；ytdbc81 戰鬥要用 isLv2AtkUnlocked（圖鑑／gacha reveal 仍跟 pulls） */
    const allowCombatL2 =
      !opts.combat || (card.id != null && isLv2AtkUnlocked(card.id));
    if (
      allowCombatL2 &&
      card.id != null &&
      isGachaL2(card.id) &&
      BLIND_IDLE_L2_BY_ID[card.id]
    ) {
      return BLIND_IDLE_L2_BY_ID[card.id];
    }
    /* ytdbc46 knife A PASS: id45–54 → bugs_new10 idle (mapping md) before other maps */
    if (card.id != null && BLIND_IDLE_BY_ID[card.id]) return BLIND_IDLE_BY_ID[card.id];
    /* ytdbc44: v1b_hard idle for 12 knife cards（before soft map／chengyu allySprite） */
    if (card._chengyu) {
      if (card.id != null && IDLE_ALLY_CHENGYU_BY_ID[card.id])
        return IDLE_ALLY_CHENGYU_BY_ID[card.id];
    } else if (card.id != null && IDLE_ALLY_BY_ID[card.id]) {
      return IDLE_ALLY_BY_ID[card.id];
    }
    const wIdle = String(card.word || "").trim();
    if (wIdle && IDLE_ALLY_BY_WORD[wIdle]) return IDLE_ALLY_BY_WORD[wIdle];
    if (card.allySprite) return card.allySprite;
    if (card.id != null && ALLY_SPRITE_BY_ID[card.id]) return ALLY_SPRITE_BY_ID[card.id];
    const w = String(card.word || "").trim();
    if (w && ALLY_SPRITE_BY_WORD[w]) return ALLY_SPRITE_BY_WORD[w];
    return ALLY_SPRITE;
  }
  function allyAtkSpriteFor(card) {
    if (!card) return null;
    if (card.allyAtkSprite) return card.allyAtkSprite;
    /* ytdbc82: L4 metal atk > L3 crystal atk > L1/L2 ult-atk map */
    if (card.id != null && isGachaL4(card.id) && BLIND_ATK_L4_BY_ID[card.id]) {
      return BLIND_ATK_L4_BY_ID[card.id];
    }
    if (
      card.id != null &&
      !isGachaL4(card.id) &&
      isGachaL3(card.id) &&
      BLIND_ATK_L3_BY_ID[card.id]
    ) {
      return BLIND_ATK_L3_BY_ID[card.id];
    }
    if (card._chengyu) {
      if (card.id != null && ATK_ALLY_CHENGYU_BY_ID[card.id])
        return ATK_ALLY_CHENGYU_BY_ID[card.id];
    } else if (card.id != null && ATK_ALLY_BY_ID[card.id]) {
      return ATK_ALLY_BY_ID[card.id];
    }
    const w = String(card.word || "").trim();
    if (w && ATK_ALLY_BY_WORD[w]) return ATK_ALLY_BY_WORD[w];
    return null;
  }
  function bossDefForStage() {
    const size = STAGE_BOSS_SIZE[stageMode] || "big";
    return BOSS_BY_SIZE[size] || BOSS_BY_SIZE.big;
  }
  function applyTowerArt() {
    const tp = document.getElementById("tower-player");
    if (tp) {
      tp.classList.add("has-art");
      tp.setAttribute("aria-label", "獨角仙巢穴");
      tp.innerHTML =
        '<img src="' +
        assetUrl(TOWER_PLAYER_ART) +
        '" alt="獨角仙巢穴" draggable="false" />';
    }
    const te = document.getElementById("tower-enemy");
    if (te) {
      te.classList.add("has-art");
      te.setAttribute("aria-label", "敵方獨角仙巢穴");
      te.removeAttribute("aria-hidden");
      te.innerHTML =
        '<img src="' +
        assetUrl(TOWER_ENEMY_ART) +
        '" alt="敵方獨角仙巢穴" draggable="false" />';
    }
  }
  let fightCloudIdx = 0;
  let lastFightCloudAt = 0;
  function spawnFightCloudAt(xPct, yBias) {
    if (!el.units) return;
    const now = performance.now();
    if (now - lastFightCloudAt < 160) return;
    lastFightCloudAt = now;
    const { pad, usable } = laneUsable();
    const node = document.createElement("div");
    node.className = "fightcloud";
    const src = FIGHTCLOUD_FRAMES[fightCloudIdx % FIGHTCLOUD_FRAMES.length];
    fightCloudIdx += 1;
    node.innerHTML =
      '<img src="' + assetUrl(src) + '" alt="" draggable="false" />';
    const px = pad + (Math.max(0, Math.min(100, xPct)) / 100) * usable;
    node.style.left = px + "px";
    node.style.bottom = (18 + (yBias || 0)) + "px";
    el.units.appendChild(node);
    setTimeout(function () {
      if (node.parentNode) node.parentNode.removeChild(node);
    }, 480);
  }
  function spawnFightCloudBetween(a, b) {
    if (!a || !b) return;
    const mid = (a.x + b.x) / 2;
    spawnFightCloudAt(mid, 8 + Math.floor(Math.random() * 18));
  }
  /** ytdbc61 ④ PASS: ally hits enemy tower — fire_atk PNG FX（CSS anim wrapper） */
  function spawnTowerAtkFx(unit) {
    if (!el.units) return;
    const node = document.createElement("div");
    node.className = "fx-tower-atk has-art";
    node.setAttribute("aria-hidden", "true");
    const burst =
      TOWER_FIRE_ATK_FX[Math.floor(Math.random() * TOWER_FIRE_ATK_FX.length)] ||
      TOWER_FIRE_ATK_FX[0];
    const slash = "assets/fire_atk/fx_fire_slash_01.png";
    const proj = TOWER_FIRE_PROJECTILE;
    node.innerHTML =
      '<img class="fta-burst" src="' +
      assetUrl(burst) +
      '" alt="" draggable="false" />' +
      '<img class="fta-slash-img" src="' +
      assetUrl(slash) +
      '" alt="" draggable="false" />' +
      '<img class="fta-proj" src="' +
      assetUrl(proj) +
      '" alt="" draggable="false" />';
    const { pad, usable } = laneUsable();
    const xPct = unit && typeof unit.x === "number" ? unit.x : 96;
    const px = pad + (Math.max(0, Math.min(100, xPct)) / 100) * usable;
    node.style.left = px + "px";
    el.units.appendChild(node);
    setTimeout(function () {
      if (node.parentNode) node.parentNode.removeChild(node);
    }, 560);
  }
  const FUJI_BG = "assets/bg_fuji_battlefield_16x9.jpg";
  const HARBOUR_BG = "assets/stage2/bg_victoria_harbour_16x9.jpg";
  /* ⑦ PASS BG S3–S5 */
  const BG_S3 = "assets/stage_bg/bg_s3_hell_volcano.png";
  const BG_S4 = "assets/stage_bg/bg_s4_forest.png";
  const BG_S5 = "assets/stage_bg/bg_s5_space.png";
  /* ytdbc70: 默書新關 · 溫書（PASS LOCK art；primary 16x9；alt bank keep） */
  const STUDY_BG = "assets/stage_bg/bg_study_16x9.jpg";
  const STUDY_BG_ALT = "assets/stage_bg/bg_study_alt.jpg";
  const BG_CLASSES = ["has-fuji-photo", "has-harbour-photo", "has-s3-bg", "has-s4-bg", "has-s5-bg", "has-study-bg"];
  const ENEMY_ROSTER = [
    { id: "E1", image: "assets/enemy_E1.png" },
    { id: "E2", image: "assets/enemy_E2.png" },
    { id: "E3", image: "assets/enemy_E3.png" },
    { id: "E4", image: "assets/enemy_E4.png" },
  ];

  const el = {
    bootScreen: document.getElementById("boot-screen"),
    btnBootBattle: document.getElementById("btn-boot-battle"),
    btnBootStage1: document.getElementById("btn-boot-stage1"),
    btnBootStage2: document.getElementById("btn-boot-stage2"),
    btnBootStage3: document.getElementById("btn-boot-stage3"),
    btnBootStage4: document.getElementById("btn-boot-stage4"),
    btnBootStage5: document.getElementById("btn-boot-stage5"),
    btnBootStage6: document.getElementById("btn-boot-stage6"),
    btnBootStage7: document.getElementById("btn-boot-stage7"),
    btnBootStage8: document.getElementById("btn-boot-stage8"),
    btnBootStage10: document.getElementById("btn-boot-stage10"),
    btnBootStage11: document.getElementById("btn-boot-stage11"),
    btnBootStage12: document.getElementById("btn-boot-stage12"),
    btnBootGallery: document.getElementById("btn-boot-gallery"),
    btnBootGacha: document.getElementById("btn-boot-gacha"),
    pickTitle: document.getElementById("pick-title"),
    sentenceBubble: document.getElementById("sentence-bubble"),
    sentenceText: document.getElementById("sentence-text"),
    sentenceHint: document.getElementById("sentence-hint"),
    promptCardThumb: document.getElementById("prompt-card-thumb"),
    galleryScreen: document.getElementById("gallery-screen"),
    galleryGrid: document.getElementById("gallery-grid"),
    galleryOwned: document.getElementById("gallery-owned"),
    galleryTabs: document.getElementById("gallery-tabs"),
    gallerySeriesLogo: document.getElementById("gallery-series-logo"),
    gallerySeriesLabel: document.getElementById("gallery-series-label"),
    btnGalleryClose: document.getElementById("btn-gallery-close"),
    pinyinPane: document.getElementById("pinyin-pane"),
    reorderPane: document.getElementById("reorder-pane"),
    reorderTokens: document.getElementById("reorder-tokens"),
    reorderHint: document.getElementById("reorder-hint"),
    reorderOwned: document.getElementById("reorder-owned"),
    reorderReward: document.getElementById("reorder-reward"),
    btnReorderCheck: document.getElementById("btn-reorder-check"),
    btnReorderShuffle: document.getElementById("btn-reorder-shuffle"),
    btnSkipReorder: document.getElementById("btn-skip-reorder"),
    pinyinHanzi: document.getElementById("pinyin-hanzi"),
    pinyinMeaning: document.getElementById("pinyin-meaning"),
    pinyinBtns: document.getElementById("pinyin-btns"),
    btnSkipPinyin: document.getElementById("btn-skip-pinyin"),
    gachaScreen: document.getElementById("gacha-screen"),
    gachaHint: document.getElementById("gacha-hint"),
    gachaBox: document.getElementById("gacha-box"),
    gachaReveal: document.getElementById("gacha-reveal"),
    gachaCardImg: document.getElementById("gacha-card-img"),
    gachaUnitImg: document.getElementById("gacha-unit-img"),
    gachaName: document.getElementById("gacha-name"),
    gachaTag: document.getElementById("gacha-tag"),
    btnGachaPull: document.getElementById("btn-gacha-pull"),
    btnGachaAgain: document.getElementById("btn-gacha-again"),
    btnGachaClose: document.getElementById("btn-gacha-close"),
    pickScreen: document.getElementById("pick-screen"),
    pickGrid: document.getElementById("pick-grid"),
    pickN: document.getElementById("pick-n"),
    pickSuccess: document.getElementById("pick-success"),
    btnPickBack: document.getElementById("btn-pick-back"),
    btnStart: document.getElementById("btn-start"),
    app: document.getElementById("app"),
    deckPane: document.getElementById("deck-pane"),
    selPreview: document.getElementById("sel-preview"),
    writeDock: document.getElementById("write-dock"),
    hpPlayer: document.getElementById("hp-player"),
    hpEnemy: document.getElementById("hp-enemy"),
    hpPlayerBar: document.getElementById("hp-player-bar"),
    hpEnemyBar: document.getElementById("hp-enemy-bar"),
    energyBar: document.getElementById("energy-bar"),
    energyNum: document.getElementById("energy-num"),
    hudStatus: document.getElementById("hud-status"),
    successHud: document.getElementById("success-hud"),
    killHud: document.getElementById("kill-hud"),
    speedHud: document.getElementById("speed-hud"),
    diffHud: document.getElementById("diff-hud"),
    streakHud: document.getElementById("streak-hud"),
    btnUlt: document.getElementById("btn-ult"),
    ultPick: document.getElementById("ult-pick"),
    ultPickGrid: document.getElementById("ult-pick-grid"),
    ultPickHint: document.getElementById("ult-pick-hint"),
    btnUltPickConfirm: document.getElementById("btn-ult-pick-confirm"),
    btnUltPickClose: document.getElementById("btn-ult-pick-close"),
    ultFlash: document.getElementById("ult-flash"),
    bossUltFlash: document.getElementById("boss-ult-flash"),
    lane: document.getElementById("lane"),
    units: document.getElementById("units"),
    deckGrid: document.getElementById("deck-grid"),
    btnReveal: document.getElementById("btn-reveal"),
    answerPeekWrap: document.getElementById("answer-peek-wrap"),
    btnAnswerPeek: document.getElementById("btn-answer-peek"),
    btnSkip: document.getElementById("btn-skip"),
    selCard: document.getElementById("sel-card"),
    form: document.getElementById("answer-form"),
    answer: document.getElementById("answer"),
    clearInk: document.getElementById("btn-clear-ink"),
    clearOne: document.getElementById("btn-clear-one"),
    btnModePencil: document.getElementById("btn-mode-pencil"),
    btnModeKb: document.getElementById("btn-mode-kb"),
    overlay: document.getElementById("overlay"),
    overlayTitle: document.getElementById("overlay-title"),
    overlayMsg: document.getElementById("overlay-msg"),
    replay: document.getElementById("btn-replay"),
    fujiBg: document.getElementById("fuji-bg"),
    bgFxLayer: document.getElementById("bg-fx-layer"),
  };

  let pool = [];
  let ownedIds = new Set(); /* 1–44 always; 45–54 from gacha */
  let gachaPullCounts = Object.create(null); /* id → pull times；stable key */
  let gachaL2Ids = new Set(); /* unlocked LEVEL2 gold */
  let gachaL3Ids = new Set(); /* ytdbc65 unlocked LEVEL3 crystal */
  let gachaL4Ids = new Set(); /* ytdbc67 unlocked LEVEL4 rainbow glass */
  let lv1CatchCounts = Object.create(null); /* id → Lv1 捉次數 */
  let lv2AtkIds = new Set(); /* unlocked 戰鬥 Lv2 角式攻擊 */
  let lastSpawnLv2Hint = ""; /* spawnAlly 寫入；deploy HUD 合併 */
  let sentenceUseCounts = Object.create(null); /* `${bank}:${cardId}:${variant}` → n */
  let pickSet = new Set();
  let deck = [];
  let cdUntil = {};
  let selectedTip = null;
  let combatBalance = null;
  let revealAnswers = false;
  let answerPeekUsed = false; /* ytdbc30: 每題看答案 1 次 */
  let answerPeekShown = "";
  let ultPickSelected = null; /* ytdbc31: 大招選卡 → 確認先 fire */
  let success = { total: 0, byId: {} };
  let deployStreak = 0; /* legacy HUD; no longer auto-fires ult */
  let killStreak = 0; /* ytdbc21: consecutive enemy KOs → ult button at 4 */
  let ultReady = false;
  let smallKills = 0;
  let midBossSpawned = false;
  let midBossUnit = null;
  let bossSpawned = false;
  let bossUnit = null;
  let nextBossUltAt = 0;
  let winReason = null; /* null | "tower" | "boss" */
  let postBossBlind = false; /* ytdbc16b: BOSS clear → blindbox then next stage */
  /* ytdbc48 knife②: BIG BOSS 倒下後繼續出小／中怪，至我方塔或敵塔血盡 */
  let postBossWave = false;
  let nextPostMidAt = 0;
  /* ytdbc50 knife⑤: 細／中／大 BOSS queue by difficulty */
  let bossQueue = [];
  let bossQueueIdx = 0;
  let nextBossGateKills = 0;
  let smallBossUnit = null;
  let siegeSfxAt = 0;
  let stageMode = 1; /* …7 默書; 8 圖二＋十課; 10 重組; ytdbc85: 11 理髮默書; 12 默書加速（無 S9） */
  let dictationList = []; /* ytdbc70: knife dictation vocab */
  let stage11DictationList = []; /* ytdbc85 soft: S11 barber dictation */
  let stage12DictationList = []; /* ytdbc85 soft: S12 moshu dictation */
  let activeDictation = null;
  let sentenceAllowlist = []; /* ytdbc72: S8 allowlist words（fallback deck） */
  let stage8SentenceList = []; /* ytdbc74: S8 cloze 句庫 */
  let stage10ReorderList = []; /* ytdbc83 soft: S10 DRAFT bank */
  let stage10Owned = new Set(); /* C1–C5 soft unlock */
  let stage10Order = []; /* current token order (strings) */
  let stage10DragIdx = -1;
  let stage10LastRewardCid = "";
  let stage8SentencesByCardId = Object.create(null); /* id → variants[] */
  let chengyuPool = []; /* stage4 15 cards */
  let chengyuSentencesById = Object.create(null);
  let chengyuSentenceList = [];
  let stage5Pool = []; /* stage5 16 pinyin words */
  let stage5ById = Object.create(null);
  let galleryTab = "pinyin"; /* pinyin | chengyu | ciyu | special | lifa | fanxing */
  let focusEnemyRef = null; /* sticky stage2 enemy link (optional) */
  let activePrompt = null;
  let activePromptKey = ""; /* { card_id, sentence, enemy|null } — gates stage2/3 deploy */
  let sentencesByCardId = Object.create(null); /* card_id → sentence obj */
  let sentenceList = [];
  let vocabSentenceList = [];
  let vocabSentencesByCardId = Object.create(null); /* id → variants[] (ytdbc60) */
  let chengyuSentenceVariantsById = Object.create(null); /* id → variants[] */

  let playerHp = TOWER_HP;
  let enemyHp = TOWER_HP;
  /* ytdbc41 knife④ */
  let difficulty = "normal";
  let gameSpeed = 1;
  let energy = 40;
  let allies = [];
  let enemies = [];
  let over = false;
  let lastTs = 0;
  let nextEnemyAt = 0;
  let battleOn = false;
  let lastHitSfx = 0;


  /* ---- ytdbc41 knife④: settings (difficulty + game speed) ---- */
  function loadSettings() {
    difficulty = "normal";
    gameSpeed = 1;
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (!raw) return;
      const o = JSON.parse(raw);
      if (o && DIFF_PRESETS[o.difficulty]) difficulty = o.difficulty;
      const sp = Number(o && o.speed);
      if (SPEED_OPTS.indexOf(sp) >= 0) gameSpeed = sp;
    } catch (e) { /* keep defaults */ }
  }
  function saveSettings() {
    try {
      localStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify({ difficulty: difficulty, speed: gameSpeed })
      );
    } catch (e) { /* ignore quota */ }
  }
  function diffCfg() {
    return DIFF_PRESETS[difficulty] || DIFF_PRESETS.normal;
  }
  function bossWaveCfg() {
    const d = diffCfg();
    return {
      small: Number(d.bossSmall != null ? d.bossSmall : DIFF_BOSS_WAVE_FALLBACK.bossSmall),
      mid: Number(d.bossMid != null ? d.bossMid : DIFF_BOSS_WAVE_FALLBACK.bossMid),
      big: Number(d.bossBig != null ? d.bossBig : DIFF_BOSS_WAVE_FALLBACK.bossBig),
      step: Number(d.bossStepKills != null ? d.bossStepKills : DIFF_BOSS_WAVE_FALLBACK.bossStepKills),
      first: Number(d.bossFirstKills != null ? d.bossFirstKills : DIFF_BOSS_WAVE_FALLBACK.bossFirstKills),
    };
  }
  function buildBossQueue() {
    const p = bossWaveCfg();
    const q = [];
    for (let i = 0; i < p.small; i++) q.push("small");
    for (let i = 0; i < p.mid; i++) q.push("mid");
    for (let i = 0; i < p.big; i++) q.push("big");
    return q;
  }
  function anyBossTierAlive() {
    return enemies.some((e) => e.alive && e.isBoss);
  }
  function balEnemyHp() {
    return Math.max(1, Math.round(ENEMY.hp * diffCfg().enemyHp));
  }
  function balEnemyAtk() {
    return Math.max(1, Math.round(ENEMY.atk * diffCfg().enemyAtk));
  }
  function balMaxEnemy() {
    const n = Number(diffCfg().maxEnemy);
    return Number.isFinite(n) && n > 0 ? n : MAX_ENEMY;
  }
  function anyTowerSiege() {
    /* ytdbc65 ①: either side draining a tower */
    return (
      allies.some((a) => a.alive && a.sieging) ||
      enemies.some((e) => e.alive && e.sieging)
    );
  }
  function balSpawnMs() {
    let ms = (ENEMY_SPAWN_MS * diffCfg().spawnMs) / Math.max(0.25, gameSpeed);
    if (anyTowerSiege()) ms *= 0.42; /* denser while sieging */
    return ms;
  }
  function balEnergyRegen() {
    return ENERGY_REGEN * diffCfg().energyRegen;
  }
  function balBossUltMs() {
    return BOSS_ULT_MS / Math.max(0.25, gameSpeed);
  }
  function balBossStrikeMs() {
    return BOSS_STRIKE_MS / Math.max(0.25, gameSpeed);
  }
  function syncSettingsUi() {
    const boot = document.getElementById("boot-settings");
    if (boot) {
      boot.querySelectorAll("[data-diff]").forEach((b) => {
        b.classList.toggle("is-on", b.getAttribute("data-diff") === difficulty);
      });
      boot.querySelectorAll("[data-speed]").forEach((b) => {
        b.classList.toggle("is-on", Number(b.getAttribute("data-speed")) === gameSpeed);
      });
    }
    if (el.speedHud) {
      el.speedHud.querySelectorAll("[data-speed]").forEach((b) => {
        b.classList.toggle("is-on", Number(b.getAttribute("data-speed")) === gameSpeed);
      });
    }
    if (el.diffHud) {
      el.diffHud.textContent = diffCfg().label;
    }
  }
  function setDifficulty(id) {
    if (!DIFF_PRESETS[id]) return;
    difficulty = id;
    saveSettings();
    syncSettingsUi();
  }
  function setGameSpeed(sp) {
    const n = Number(sp);
    if (SPEED_OPTS.indexOf(n) < 0) return;
    gameSpeed = n;
    saveSettings();
    syncSettingsUi();
  }
  function wireSettingsUi() {
    const boot = document.getElementById("boot-settings");
    if (boot && !boot._wired) {
      boot._wired = true;
      boot.addEventListener("click", (ev) => {
        const t = ev.target.closest("[data-diff], [data-speed]");
        if (!t || !boot.contains(t)) return;
        if (t.hasAttribute("data-diff")) setDifficulty(t.getAttribute("data-diff"));
        else if (t.hasAttribute("data-speed")) setGameSpeed(t.getAttribute("data-speed"));
      });
    }
    if (el.speedHud && !el.speedHud._wired) {
      el.speedHud._wired = true;
      el.speedHud.addEventListener("click", (ev) => {
        const t = ev.target.closest("[data-speed]");
        if (!t || !el.speedHud.contains(t)) return;
        setGameSpeed(t.getAttribute("data-speed"));
      });
    }
    syncSettingsUi();
  }

  /* ---- localStorage success ---- */
  function loadSuccess() {
    try {
      const raw = localStorage.getItem(SUCCESS_KEY);
      if (!raw) return { total: 0, byId: {} };
      const o = JSON.parse(raw);
      return {
        total: typeof o.total === "number" ? o.total : 0,
        byId: o.byId && typeof o.byId === "object" ? o.byId : {},
      };
    } catch (_) {
      return { total: 0, byId: {} };
    }
  }
  function saveSuccess() {
    try {
      localStorage.setItem(SUCCESS_KEY, JSON.stringify(success));
    } catch (_) { /* private mode */ }
  }
  function cardSuccess(id) {
    return success.byId[id] || 0;
  }
  function bumpSuccess(id) {
    success.byId[id] = (success.byId[id] || 0) + 1;
    success.total = (success.total || 0) + 1;
    saveSuccess();
    updateSuccessHud();
  }

  /* ---- localStorage owned／pull／Lv（ytdbc69: RECORD 保留 — 蓋過 ytdbc68 wipe） ---- */
  function loadOwned() {
    const base = [];
    for (let i = 1; i <= 44; i++) base.push(i);
    try {
      const raw = localStorage.getItem(OWNED_KEY);
      if (!raw) return new Set(base);
      const o = JSON.parse(raw);
      const ids = Array.isArray(o.ownedIds) ? o.ownedIds : [];
      const set = new Set(base);
      ids.forEach((id) => {
        const n = Number(id);
        if (n >= BUG_ID_MIN && n <= BUG_ID_MAX) set.add(n);
      });
      return set;
    } catch (_) {
      return new Set(base);
    }
  }
  function saveOwned() {
    try {
      const bugs = [];
      ownedIds.forEach((id) => {
        if (id >= BUG_ID_MIN && id <= BUG_ID_MAX) bugs.push(id);
      });
      bugs.sort((a, b) => a - b);
      localStorage.setItem(OWNED_KEY, JSON.stringify({ ownedIds: bugs }));
    } catch (_) { /* private mode */ }
  }
  function loadSentenceUse() {
    try {
      const raw = localStorage.getItem(SENTENCE_USE_KEY);
      const o = raw ? JSON.parse(raw) : {};
      sentenceUseCounts = Object.create(null);
      if (o && typeof o === "object") {
        Object.keys(o).forEach((k) => {
          const n = Number(o[k]);
          if (Number.isFinite(n) && n > 0) sentenceUseCounts[k] = n;
        });
      }
    } catch (_) {
      sentenceUseCounts = Object.create(null);
    }
  }
  function saveSentenceUse() {
    try {
      localStorage.setItem(SENTENCE_USE_KEY, JSON.stringify(sentenceUseCounts));
    } catch (_) { /* private mode */ }
  }
  function loadGachaMeta() {
    gachaPullCounts = Object.create(null);
    gachaL2Ids = new Set();
    gachaL3Ids = new Set();
    gachaL4Ids = new Set();
    try {
      const rawP = localStorage.getItem(GACHA_PULL_KEY);
      const oP = rawP ? JSON.parse(rawP) : {};
      if (oP && typeof oP === "object") {
        Object.keys(oP).forEach((k) => {
          const n = Number(oP[k]);
          if (Number.isFinite(n) && n > 0) gachaPullCounts[String(k)] = n;
        });
      }
      const rawL = localStorage.getItem(GACHA_L2_KEY);
      const oL = rawL ? JSON.parse(rawL) : {};
      const ids = Array.isArray(oL)
        ? oL
        : oL && Array.isArray(oL.ids)
          ? oL.ids
          : oL && typeof oL === "object"
            ? Object.keys(oL).filter((k) => oL[k])
            : [];
      ids.forEach((id) => {
        const n = Number(id);
        if (n >= BUG_ID_MIN && n <= BUG_ID_MAX) gachaL2Ids.add(n);
      });
      const raw3 = localStorage.getItem(GACHA_L3_KEY);
      if (raw3) {
        const o3 = JSON.parse(raw3);
        const ids3 = Array.isArray(o3) ? o3 : o3 && Array.isArray(o3.ids) ? o3.ids : [];
        ids3.forEach((x) => {
          const n = Number(x);
          if (n >= BUG_ID_MIN && n <= BUG_ID_MAX) gachaL3Ids.add(n);
        });
      }
      const raw4 = localStorage.getItem(GACHA_L4_KEY);
      if (raw4) {
        const o4 = JSON.parse(raw4);
        const ids4 = Array.isArray(o4) ? o4 : o4 && Array.isArray(o4.ids) ? o4.ids : [];
        ids4.forEach((x) => {
          const n = Number(x);
          if (n >= BUG_ID_MIN && n <= BUG_ID_MAX) gachaL4Ids.add(n);
        });
      }
    } catch (_) { /* private mode */ }
  }
  function saveGachaMeta() {
    try {
      localStorage.setItem(GACHA_PULL_KEY, JSON.stringify(gachaPullCounts));
      localStorage.setItem(
        GACHA_L2_KEY,
        JSON.stringify({ ids: Array.from(gachaL2Ids).sort((a, b) => a - b) })
      );
      localStorage.setItem(
        GACHA_L3_KEY,
        JSON.stringify({ ids: Array.from(gachaL3Ids).sort((a, b) => a - b) })
      );
      localStorage.setItem(
        GACHA_L4_KEY,
        JSON.stringify({ ids: Array.from(gachaL4Ids).sort((a, b) => a - b) })
      );
    } catch (_) { /* private mode */ }
  }
  function loadLv2AtkMeta() {
    lv1CatchCounts = Object.create(null);
    lv2AtkIds = new Set();
    try {
      const rawC = localStorage.getItem(LV1_CATCH_KEY);
      const oC = rawC ? JSON.parse(rawC) : {};
      if (oC && typeof oC === "object") {
        Object.keys(oC).forEach((k) => {
          const n = Number(oC[k]);
          if (Number.isFinite(n) && n > 0) lv1CatchCounts[String(k)] = n;
        });
      }
      const rawA = localStorage.getItem(LV2_ATK_KEY);
      const oA = rawA ? JSON.parse(rawA) : {};
      const ids = Array.isArray(oA)
        ? oA
        : oA && Array.isArray(oA.ids)
          ? oA.ids
          : oA && typeof oA === "object"
            ? Object.keys(oA).filter((k) => oA[k])
            : [];
      ids.forEach((id) => {
        const n = Number(id);
        if (Number.isFinite(n) && n > 0) lv2AtkIds.add(n);
      });
    } catch (_) { /* private mode */ }
  }
  function saveLv2AtkMeta() {
    try {
      localStorage.setItem(LV1_CATCH_KEY, JSON.stringify(lv1CatchCounts));
      localStorage.setItem(
        LV2_ATK_KEY,
        JSON.stringify({ ids: Array.from(lv2AtkIds).sort((a, b) => a - b) })
      );
    } catch (_) { /* private mode */ }
  }
  function isLv2AtkUnlocked(id) {
    return lv2AtkIds.has(Number(id));
  }
  function lv1CatchCount(id) {
    return lv1CatchCounts[String(id)] || 0;
  }
  /** ytdbc81: 成功出 Lv1 角式＝捉 +1；滿 LV1_CATCH_NEED → 解鎖戰鬥 Lv2 角式攻擊 */
  function noteLv1Catch(card) {
    if (!card || card.id == null) return { unlocked: false, catches: 0 };
    const id = Number(card.id);
    if (!Number.isFinite(id) || id <= 0) return { unlocked: false, catches: 0 };
    if (isLv2AtkUnlocked(id)) {
      return { unlocked: false, catches: lv1CatchCount(id), already: true };
    }
    const key = String(id);
    const catches = (lv1CatchCounts[key] || 0) + 1;
    lv1CatchCounts[key] = catches;
    let unlocked = false;
    if (catches >= LV1_CATCH_NEED) {
      lv2AtkIds.add(id);
      unlocked = true;
    }
    saveLv2AtkMeta();
    return { unlocked: unlocked, catches: catches, already: false };
  }

  function isGachaL2(id) {
    return gachaL2Ids.has(Number(id));
  }
  function isGachaL3(id) {
    return gachaL3Ids.has(Number(id));
  }
  function isGachaL4(id) {
    return gachaL4Ids.has(Number(id));
  }
  /** ytdbc69 ② keep: 同一角式每階確定 5 抽 — 5→L2、10→L3、15→L4（廢 10+/機率） */
  const GACHA_PULLS_PER_LEVEL = 5;
  function noteGachaPull(cardId) {
    const id = Number(cardId);
    if (!(id >= BUG_ID_MIN && id <= BUG_ID_MAX)) return { upgraded: false, pulls: 0 };
    const key = String(id);
    const pulls = (gachaPullCounts[key] || 0) + 1;
    gachaPullCounts[key] = pulls;
    let upgraded = false;
    let upgradedL3 = false;
    let upgradedL4 = false;
    if (pulls >= GACHA_PULLS_PER_LEVEL * 1 && !gachaL2Ids.has(id)) {
      gachaL2Ids.add(id);
      upgraded = true;
    }
    if (pulls >= GACHA_PULLS_PER_LEVEL * 2 && !gachaL3Ids.has(id)) {
      gachaL3Ids.add(id);
      upgradedL3 = true;
    }
    if (pulls >= GACHA_PULLS_PER_LEVEL * 3 && !gachaL4Ids.has(id)) {
      gachaL4Ids.add(id);
      upgradedL4 = true;
    }
    saveGachaMeta();
    return { upgraded: upgraded, upgradedL3: upgradedL3, upgradedL4: upgradedL4, pulls: pulls };
  }

  function isOwned(id) {
    if (id >= 1 && id <= 44) return true;
    if (id >= 55 && id <= 103) return true; /* ytdbc35: exam always owned for S2 pick */
    return ownedIds.has(id);
  }
  function unlockOwned(id) {
    if (id < BUG_ID_MIN || id > BUG_ID_MAX) return false;
    if (ownedIds.has(id)) return false;
    ownedIds.add(id);
    saveOwned();
    return true;
  }
  function isGachaCard(c) {
    if (!c) return false;
    if (c.gacha === true) return true;
    return c.id >= BUG_ID_MIN && c.id <= BUG_ID_MAX;
  }
  function isCombatPickable(c) {
    /* ytdbc30: S1 → id1–44；S2 exam → id55–103；gacha 45–54 永遠剔 */
    /* ytdbc32: S5 成語 → 只認 _chengyu（唔走 vocab／exam 規則） */
    /* ytdbc60 ①: S3 造句可選 S2（exam55–103）+ id1–44；S4 全庫同可含 exam */
    if (!c) return false;
    if (isGachaCard(c)) return false;
    if (stageMode === 5) return !!c._chengyu;
    if (stageMode === 2) return c.id >= 55 && c.id <= 103;
    if (stageMode === 3 || stageMode === 4) {
      return (c.id >= 1 && c.id <= 44) || (c.id >= 55 && c.id <= 103);
    }
    return c.id >= 1 && c.id <= 44;
  }
  function isExamCard(c) {
    return !!(c && c.id >= 55 && c.id <= 103);
  }
  function combatPickPool() {
    return pool.filter((c) => isCombatPickable(c) && isOwned(c.id));
  }
  function bugCards() {
    return pool.filter((c) => c.id >= BUG_ID_MIN && c.id <= BUG_ID_MAX);
  }
  function unownedBugs() {
    return bugCards().filter((c) => !isOwned(c.id));
  }

  function updateSuccessHud() {
    const t = "成功：" + (success.total || 0);
    if (el.successHud) el.successHud.textContent = t;
    if (el.pickSuccess) el.pickSuccess.textContent = t;
  }

  function deployCdMs() {
    /* ytdbc30: S1+S2 exam+S3 造句 = 10s；S4 全庫 = 0；其餘 soft */
    if (stageMode === 1 || stageMode === 2 || stageMode === 3) return DEPLOY_CD_STAGE12_MS;
    if (stageMode === 4 || stageMode === 8 || stageMode === 10) return 0;
    return DEPLOY_CD_MS;
  }

  function updateStreakHud() {
    if (!el.streakHud) return;
    if (killStreak <= 0 && !ultReady) {
      el.streakHud.hidden = true;
      el.streakHud.classList.remove("hot");
    } else {
      el.streakHud.hidden = false;
      el.streakHud.textContent = ultReady
        ? "連殺 " + killStreak + " · 大招就緒！"
        : "連殺 " + killStreak + "／" + COMBO_ULT_NEED;
      el.streakHud.classList.toggle("hot", killStreak >= COMBO_ULT_NEED - 1 || ultReady);
    }
    syncUltButton();
  }

  function syncUltButton() {
    if (!el.btnUlt) return;
    if (!syncUltButton._art) {
      el.btnUlt.style.backgroundImage = "url(" + assetUrl(ULT_BTN_ART) + ")";
      el.btnUlt.textContent = "";
      el.btnUlt.setAttribute("aria-label", "大招");
      syncUltButton._art = true;
    }
    const show = battleOn && !over && ultReady;
    el.btnUlt.classList.toggle("hidden", !show);
    el.btnUlt.disabled = !show;
  }

  function resetStreak(reason) {
    deployStreak = 0;
    killStreak = 0;
    /* do not clear ultReady here — charged ult stays until fired or battle ends */
    updateStreakHud();
  }

  function resetKillStreak() {
    killStreak = 0;
    updateStreakHud();
  }

  function onEnemyCombatKill() {
    /* ytdbc21 knife#7: 連續打倒對方 4 隻 → show ult BUTTON */
    killStreak += 1;
    if (killStreak >= COMBO_ULT_NEED) {
      ultReady = true;
      el.hudStatus.textContent = "連殺 " + killStreak + "！撳大招出盲盒角式";
    }
    updateStreakHud();
  }

  function playZapSfx() {
    try {
      const ctx = getAudio();
      if (!ctx) return;
      const now = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sawtooth";
      o.frequency.setValueAtTime(880, now);
      o.frequency.exponentialRampToValueAtTime(110, now + 0.28);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.22, now + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(now);
      o.stop(now + 0.36);
      /* second crack */
      const o2 = ctx.createOscillator();
      const g2 = ctx.createGain();
      o2.type = "square";
      o2.frequency.setValueAtTime(1400, now + 0.05);
      o2.frequency.exponentialRampToValueAtTime(90, now + 0.22);
      g2.gain.setValueAtTime(0.0001, now + 0.05);
      g2.gain.exponentialRampToValueAtTime(0.12, now + 0.07);
      g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
      o2.connect(g2);
      g2.connect(ctx.destination);
      o2.start(now + 0.05);
      o2.stop(now + 0.26);
    } catch (_) {}
  }

  function showUltFlash() {
    if (!el.ultFlash) return;
    el.ultFlash.classList.add("hidden");
    void el.ultFlash.offsetWidth; /* restart CSS anim */
    el.ultFlash.classList.remove("hidden");
    clearTimeout(showUltFlash._t);
    showUltFlash._t = setTimeout(() => {
      if (el.ultFlash) el.ultFlash.classList.add("hidden");
    }, 950);
  }

  function pickUltCard() {
    /* Prefer owned blind-box bugs (45–54); else any bug card as placeholder */
    const ownedBugs = bugCards().filter((c) => isOwned(c.id));
    const poolBugs = ownedBugs.length ? ownedBugs : bugCards();
    if (!poolBugs.length) return null;
    return poolBugs[Math.floor(Math.random() * poolBugs.length)];
  }


  function closeUltPick() {
    ultPickSelected = null;
    if (el.ultPickHint) el.ultPickHint.classList.add("hidden");
    if (el.ultPick) el.ultPick.classList.add("hidden");
  }
  function syncUltPickSelection() {
    if (!el.ultPickGrid) return;
    const nodes = el.ultPickGrid.querySelectorAll(".ult-pick-card");
    const hasSel = !!ultPickSelected;
    nodes.forEach((node) => {
      const id = Number(node.getAttribute("data-card-id"));
      const sel = hasSel && id === Number(ultPickSelected.id);
      node.classList.toggle("selected", sel);
      node.classList.toggle("dim", hasSel && !sel);
    });
    if (el.ultPickHint) el.ultPickHint.classList.toggle("hidden", !hasSel);
  }
  function confirmUltPick() {
    if (!ultPickSelected) {
      if (el.hudStatus) el.hudStatus.textContent = "請先揀一張蟲卡";
      return;
    }
    const card = ultPickSelected;
    closeUltPick();
    fireBlindUltWithCard(card);
  }
  function openUltPick() {
    if (!ultReady || over || !battleOn) return;
    const ownedBugs = bugCards().filter((c) => isOwned(c.id));
    if (!ownedBugs.length) {
      el.hudStatus.textContent = "未有盲盒角式 · 通關抽盲盒先";
      return;
    }
    if (!el.ultPickGrid) {
      /* fallback random if UI missing */
      fireBlindUltWithCard(pickUltCard());
      return;
    }
    ultPickSelected = null;
    if (el.ultPickHint) el.ultPickHint.classList.add("hidden");
    el.ultPickGrid.innerHTML = "";
    ownedBugs.forEach((c) => {
      const node = document.createElement("button");
      node.type = "button";
      node.className = "ult-pick-card";
      node.setAttribute("data-card-id", String(c.id));
      node.innerHTML =
        '<img src="' +
        assetCard(c.image, c) +
        '" alt="" draggable="false" />' +
        '<span class="word">' +
        escapeHtml(c.word) +
        "</span>" +
        '<span class="ult-pick-check" aria-hidden="true">✓</span>';
      node.addEventListener("click", () => {
        /* ytdbc31: click = SELECT only；確認先 fire */
        if (ultPickSelected && Number(ultPickSelected.id) === Number(c.id)) {
          ultPickSelected = null;
        } else {
          ultPickSelected = c;
        }
        syncUltPickSelection();
      });
      el.ultPickGrid.appendChild(node);
    });
    el.ultPick.classList.remove("hidden");
  }
  function fireBlindUltWithCard(card) {
    if (!ultReady || over || !battleOn) return;
    if (!card) {
      el.hudStatus.textContent = "未有盲盒角式 · 通關抽盲盒先";
      return;
    }
    ultReady = false;
    killStreak = 0;
    updateStreakHud();
    playZapSfx();
    showUltFlash();
    const hadL2Skin = isGachaL2(card.id);
    const hadL2Atk = isLv2AtkUnlocked(card.id);
    const ok = spawnAlly(card, { ult: true });
    if (!ok) {
      el.hudStatus.textContent = "大招出動失敗";
      return;
    }
    if (hadL2Skin && !hadL2Atk) {
      el.hudStatus.textContent = mergeSpawnHud(
        "大招！「" +
          card.word +
          "」Lv1 · Lv2 角式攻擊未解鎖（捉 " +
          lv1CatchCount(card.id) +
          "／" +
          LV1_CATCH_NEED +
          "）"
      );
    } else if (hadL2Atk && hadL2Skin) {
      el.hudStatus.textContent = mergeSpawnHud(
        "大招！Lv2 角式攻擊「" + card.word + "」登場"
      );
    } else {
      el.hudStatus.textContent = mergeSpawnHud("大招！" + card.word + " 登場");
    }
  }

  function fireBlindUlt() {
    /* ytdbc31 knife③: 選卡→確認；跟 PASS keep UI 樣 */
    openUltPick();
  }

  function onDeploySuccess() {
    deployStreak += 1;
    /* ytdbc21: deploy streak no longer auto-fires ult */
    updateStreakHud();
  }

  /* ---- Mute-safe WebAudio blips ---- */
  let audioCtx = null;
  function getAudio() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtx = new AC();
    }
    if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
    return audioCtx;
  }
  function blip(freq, dur, type, vol) {
    try {
      const ctx = getAudio();
      if (!ctx) return;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type || "square";
      o.frequency.value = freq;
      g.gain.value = vol == null ? 0.08 : vol;
      o.connect(g);
      g.connect(ctx.destination);
      const t = ctx.currentTime;
      g.gain.setValueAtTime(g.gain.value, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.start(t);
      o.stop(t + dur + 0.02);
    } catch (_) { /* mute-safe */ }
  }
  const sfxFileCache = {};
  function playSfxFile(rel, vol) {
    try {
      let a = sfxFileCache[rel];
      if (!a) {
        a = new Audio(rel + "?v=" + V);
        a.volume = vol == null ? 0.5 : vol;
        sfxFileCache[rel] = a;
      }
      a.currentTime = 0;
      a.play().catch(() => {});
      return true;
    } catch (_) {
      return false;
    }
  }
  function sfxDeploy() { blip(520, 0.09, "square", 0.07); setTimeout(() => blip(780, 0.07, "square", 0.05), 60); }
  function sfxHit() {
    const now = performance.now();
    if (now - lastHitSfx < 120) return;
    lastHitSfx = now;
    /* ytdbc14: stage2/3 pack hit; else WebAudio blip */
    if ((stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 6 || stageMode === 8 || stageMode === 10) && playSfxFile("sfx/sfx_hit.mp3", 0.5)) return;
    blip(180, 0.06, "triangle", 0.06);
  }
  function sfxBoom() {
    if ((stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 6 || stageMode === 8) && playSfxFile("sfx/sfx_kill.mp3", 0.55)) return;
    blip(90, 0.18, "sawtooth", 0.05);
  }
  function sfxTower() { blip(140, 0.12, "square", 0.07); }
  function sfxWrongReject() {
    if (playSfxFile("sfx/sfx_wrong_reject.mp3", 0.7)) return;
    blip(220, 0.12, "sawtooth", 0.08);
  }
  function sfxBlindOpen() {
    if (playSfxFile("sfx/sfx_blindbox_open.mp3", 0.75)) return;
    blip(440, 0.15, "triangle", 0.08);
  }

  /* ytdbc90: Mandarin TTS — Google translate_tts zh-CN audio primary；Web Speech whitelist+簡體 fallback；底 ytdbc89 */
  let mandarinVoicesReady = false;
  let mandarinTtsFallbackAt = 0;
  let mandarinResumeTimer = null;
  let dictationReplayWired = false;
  let mandarinGestureUnlockWired = false;
  let mandarinAudioEl = null;
  let mandarinAudioToken = 0;

  /* Inline t2s map（OpenCC t2s from vocab／cards／simpFold）；assets/tts_t2s_map_v0.json 同步 */
  const TTS_T2S_MAP = {"佈":"布","廟":"庙","殺":"杀","進":"进","環":"环","種":"种","實":"实","約":"约","隱":"隐","類":"类","勝":"胜","礙":"碍","嘗":"尝","刪":"删","奮":"奋","輸":"输","轍":"辙","馬":"马","艱":"艰","墜":"坠","寶":"宝","購":"购","組":"组","預":"预","騙":"骗","邊":"边","檔":"档","質":"质","傷":"伤","規":"规","瀏":"浏","術":"术","辦":"办","籠":"笼","攤":"摊","複":"复","樸":"朴","齊":"齐","倫":"伦","館":"馆","寧":"宁","徵":"征","險":"险","圓":"圆","紛":"纷","題":"题","軍":"军","勢":"势","聞":"闻","決":"决","調":"调","達":"达","項":"项","動":"动","頭":"头","籃":"篮","壯":"壮","費":"费","個":"个","細":"细","餘":"余","厲":"厉","務":"务","詐":"诈","懸":"悬","綻":"绽","懇":"恳","餅":"饼","庫":"库","頁":"页","錄":"录","邏":"逻","閘":"闸","毀":"毁","遊":"游","鳴":"鸣","須":"须","濟":"济","棗":"枣","煩":"烦","鏡":"镜","隻":"只","記":"记","訊":"讯","奧":"奥","藍":"蓝","鍵":"键","闖":"闯","過":"过","爛":"烂","雛":"雏","統":"统","嗰":"𠮶","紅":"红","採":"采","廈":"厦","夠":"够","跡":"迹","晉":"晋","輯":"辑","遞":"递","謂":"谓","樓":"楼","學":"学","醫":"医","聽":"听","煥":"焕","襯":"衬","帳":"帐","準":"准","銳":"锐","讀":"读","燈":"灯","矯":"矫","論":"论","舉":"举","篩":"筛","癩":"癞","睜":"睁","螢":"萤","專":"专","凍":"冻","療":"疗","嬌":"娇","試":"试","糧":"粮","賣":"卖","訓":"训","飛":"飞","災":"灾","橫":"横","復":"复","離":"离","纏":"缠","網":"网","純":"纯","習":"习","鄉":"乡","腳":"脚","畢":"毕","願":"愿","計":"计","擊":"击","嚴":"严","還":"还","資":"资","顯":"显","彎":"弯","憫":"悯","觸":"触","緒":"绪","戰":"战","條":"条","嘆":"叹","價":"价","萬":"万","處":"处","換":"换","詩":"诗","鮮":"鲜","開":"开","涼":"凉","釐":"厘","係":"系","劇":"剧","敵":"敌","職":"职","嚇":"吓","別":"别","勁":"劲","屬":"属","捲":"卷","獎":"奖","斷":"断","貿":"贸","維":"维","翹":"翘","啟":"启","貓":"猫","陰":"阴","員":"员","與":"与","偵":"侦","麗":"丽","長":"长","飄":"飘","氣":"气","發":"发","圇":"囵","隊":"队","脫":"脱","揀":"拣","業":"业","膽":"胆","簽":"签","曆":"历","麼":"么","擔":"担","線":"线","髮":"发","謹":"谨","轉":"转","話":"话","積":"积","壞":"坏","於":"于","叢":"丛","語":"语","鵬":"鹏","內":"内","當":"当","盤":"盘","剛":"刚","覺":"觉","廂":"厢","議":"议","卻":"却","鄰":"邻","認":"认","幾":"几","戲":"戏","羣":"群","歡":"欢","堅":"坚","遠":"远","禍":"祸","織":"织","尋":"寻","穩":"稳","惡":"恶","詞":"词","綁":"绑","縷":"缕","間":"间","闇":"暗","樑":"梁","廣":"广","陽":"阳","時":"时","劃":"划","漸":"渐","訂":"订","該":"该","囂":"嚣","覽":"览","區":"区","課":"课","亂":"乱","雖":"虽","艙":"舱","親":"亲","階":"阶","緊":"紧","陣":"阵","龜":"龟","鳥":"鸟","見":"见","驗":"验","參":"参","蹟":"迹","賽":"赛","傘":"伞","祕":"秘","販":"贩","棄":"弃","懲":"惩","丟":"丢","飲":"饮","荊":"荆","暫":"暂","趙":"赵","補":"补","擺":"摆","樹":"树","鄭":"郑","團":"团","紹":"绍","爺":"爷","視":"视","諧":"谐","魚":"鱼","橋":"桥","貴":"贵","評":"评","無":"无","畫":"画","經":"经","號":"号","廳":"厅","訝":"讶","聲":"声","裝":"装","識":"识","虛":"虚","賞":"赏","機":"机","遷":"迁","滿":"满","層":"层","徑":"径","園":"园","慮":"虑","異":"异","廢":"废","場":"场","繩":"绳","淨":"净","樂":"乐","領":"领","暉":"晖","創":"创","併":"并","夢":"梦","懷":"怀","態":"态","來":"来","爭":"争","辯":"辩","誤":"误","縮":"缩","華":"华","責":"责","羅":"罗","膠":"胶","筆":"笔","續":"续","趕":"赶","會":"会","莊":"庄","寫":"写","風":"风","窪":"洼","聳":"耸","負":"负","稱":"称","兒":"儿","燒":"烧","簾":"帘","從":"从","頸":"颈","龍":"龙","選":"选","颱":"台","鷹":"鹰","糉":"粽","擴":"扩","後":"后","憶":"忆","藥":"药","簡":"简","這":"这","鴿":"鸽","脈":"脉","練":"练","讚":"赞","燙":"烫","順":"顺","冊":"册","誠":"诚","憂":"忧","講":"讲","車":"车","則":"则","響":"响","終":"终","眾":"众","檢":"检","敗":"败","產":"产","綱":"纲","歸":"归","錦":"锦","幫":"帮","閱":"阅","農":"农","盡":"尽","貼":"贴","蓋":"盖","興":"兴","誼":"谊","測":"测","獨":"独","帶":"带","靜":"静","紙":"纸","週":"周","疊":"叠","愛":"爱","許":"许","島":"岛","難":"难","標":"标","漢":"汉","獻":"献","餓":"饿","優":"优","東":"东","舊":"旧","屢":"屡","圍":"围","幹":"干","財":"财","沒":"没","體":"体","輔":"辅","績":"绩","極":"极","繞":"绕","撳":"揿","變":"变","鴉":"鸦","媽":"妈","對":"对","兩":"两","減":"减","報":"报","顛":"颠","籌":"筹","飽":"饱","張":"张","驚":"惊","惱":"恼","為":"为","義":"义","請":"请","綠":"绿","協":"协","鍬":"锹","寬":"宽","數":"数","編":"编","絕":"绝","將":"将","歷":"历","搖":"摇","嘩":"哗","級":"级","構":"构","裏":"里","確":"确","單":"单","強":"强","載":"载","霧":"雾","們":"们","闊":"阔","詭":"诡","濃":"浓","戶":"户","說":"说","買":"买","彿":"佛","並":"并","諾":"诺","擁":"拥","書":"书","謀":"谋","獲":"获","鬥":"斗","遺":"遗","禮":"礼","傳":"传","臉":"脸","壓":"压","欄":"栏","門":"门","師":"师","結":"结","納":"纳","蕩":"荡","紀":"纪","鉤":"钩","應":"应","導":"导","罰":"罚","頂":"顶","給":"给","鉗":"钳","粵":"粤","雙":"双","塊":"块","湧":"涌","樣":"样","顧":"顾","國":"国","溫":"温","談":"谈","頻":"频","現":"现","證":"证","節":"节","隨":"随","烏":"乌","設":"设","適":"适","絞":"绞","熱":"热","鐵":"铁","籮":"箩","觀":"观","連":"连","靈":"灵","點":"点","鎖":"锁","輕":"轻","貢":"贡","嚮":"向","繼":"继","錯":"错","問":"问","鐘":"钟","電":"电","蟲":"虫","雲":"云","腦":"脑","掛":"挂","絲":"丝","絡":"络","擾":"扰","牆":"墙","臨":"临","圖":"图","範":"范","運":"运","餵":"喂","憐":"怜","鬆":"松","築":"筑","鑑":"鉴","據":"据","劍":"剑","際":"际","諗":"谂","總":"总","肅":"肃","關":"关","瘡":"疮","討":"讨","護":"护"};

  function toSimplifiedForTts(s) {
    const raw = String(s || "");
    let out = raw.normalize ? raw.normalize("NFKC") : raw;
    /* first: full OpenCC map；then legacy simpFold leftovers */
    out = out.replace(/./g, (ch) => TTS_T2S_MAP[ch] || ch);
    return out;
  }

  function isCantoneseVoice(v) {
    if (!v) return true;
    const lang = String(v.lang || "");
    const name = String(v.name || "");
    const blob = lang + " " + name;
    if (/zh[-_]?HK/i.test(lang) || /^yue\b/i.test(lang) || /[-_]yue\b/i.test(lang)) return true;
    /* 美玲／Meiling 常標 zh-CN 但係粵語；Sin-Ji／Sinji 一律當粵 */
    if (/美玲|Mei[-_\s]?Ling|Meiling|Sin[-_\s]?Ji|Sinji|Aasing|粤|粵|Cantonese|Hong\s*Kong|香港/i.test(name)) return true;
    if (/yue/i.test(blob) && !/Putonghua|Mandarin|普通话|普通話|國語/i.test(blob)) return true;
    return false;
  }

  /** Whitelist only — bare zh-CN 唔夠（iOS「美玲」粵語可標 zh-CN）. */
  function isMandarinWhitelistVoice(v) {
    if (!v || isCantoneseVoice(v)) return false;
    const lang = String(v.lang || "");
    const name = String(v.name || "");
    const langOk = /^(zh[-_]?CN|zh[-_]?TW|cmn[-_]?CN|cmn[-_]?TW)\b/i.test(lang);
    if (!langOk) return false;
    const whitelistName =
      /Putonghua|Mandarin|普通话|普通話|國語|Tingting|Ting[-_\s]?Ting|Ting\s*Ting|Li[-_]?mu|Tian[-_]?Tian|Yu[-_]?shu|Xiaoxiao|Xiaoyi|Yunxi|Yunyang|Chinese\s*\(\s*China\s*\)|Meijia|Mei[-_]?Jia|美佳|Lilian/i;
    return whitelistName.test(name);
  }

  function pickMandarinVoice() {
    try {
      const voices = (window.speechSynthesis && window.speechSynthesis.getVoices()) || [];
      if (!voices.length) return null;
      const pool = voices.filter(isMandarinWhitelistVoice);
      if (!pool.length) return null;
      const preferTing =
        /Tingting|Ting[-_\s]?Ting|Ting\s*Ting|Putonghua|Mandarin|普通话|普通話/i;
      return (
        pool.find((v) => /zh[-_]?CN|cmn[-_]?CN/i.test(v.lang) && preferTing.test(v.name)) ||
        pool.find((v) => /zh[-_]?CN|cmn[-_]?CN/i.test(v.lang)) ||
        pool.find((v) => /zh[-_]?TW|cmn[-_]?TW/i.test(v.lang)) ||
        null
      );
    } catch (_) {
      return null;
    }
  }

  function warmMandarinVoices() {
    try {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      const mark = () => {
        mandarinVoicesReady = !!(window.speechSynthesis.getVoices() || []).length;
      };
      mark();
      if (typeof window.speechSynthesis.addEventListener === "function") {
        window.speechSynthesis.addEventListener("voiceschanged", mark);
      } else {
        window.speechSynthesis.onvoiceschanged = mark;
      }
      window.speechSynthesis.getVoices();
      try {
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      } catch (_) {}
    } catch (_) {}
  }

  function ensureMandarinResumeWatch() {
    if (mandarinResumeTimer != null) return;
    try {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      mandarinResumeTimer = setInterval(() => {
        try {
          if (window.speechSynthesis && window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
        } catch (_) {}
      }, 10000);
    } catch (_) {}
  }

  function showMandarinTtsFallbackTip() {
    const now = Date.now();
    if (now - mandarinTtsFallbackAt < 8000) return;
    mandarinTtsFallbackAt = now;
    const tip = "普通話由線上語音播放；若無聲請檢查網絡／允許聲音";
    try {
      if (el && el.hudStatus) el.hudStatus.textContent = tip;
    } catch (_) {}
    try {
      console.warn("[ytdbc90] Mandarin TTS tip:", tip);
    } catch (_) {}
  }

  function stopMandarinAudio() {
    try {
      if (mandarinAudioEl) {
        try {
          mandarinAudioEl.onended = null;
          mandarinAudioEl.onerror = null;
          mandarinAudioEl.onpause = null;
        } catch (_) {}
        try {
          mandarinAudioEl.pause();
        } catch (_) {}
        try {
          mandarinAudioEl.removeAttribute("src");
          mandarinAudioEl.load();
        } catch (_) {}
        mandarinAudioEl = null;
      }
    } catch (_) {}
  }

  function googleMandarinTtsUrl(simpText) {
    const q = encodeURIComponent(String(simpText || "").trim());
    return (
      "https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=" + q
    );
  }

  /**
   * Primary Mandarin path: Google zh-CN mp3（簡體字串）.
   * Resolves true on play start；rejects on play()/network fail → caller may Web Speech fallback.
   */
  function playMandarinAudio(text) {
    const simp = toSimplifiedForTts(text);
    if (!simp) return Promise.reject(new Error("empty"));
    const url = googleMandarinTtsUrl(simp);
    const token = ++mandarinAudioToken;
    stopMandarinAudio();
    try {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    } catch (_) {}
    return new Promise((resolve, reject) => {
      let settled = false;
      const doneOk = () => {
        if (settled || token !== mandarinAudioToken) return;
        settled = true;
        resolve(true);
      };
      const doneFail = (err) => {
        if (settled || token !== mandarinAudioToken) return;
        settled = true;
        reject(err || new Error("audio fail"));
      };
      try {
        const a = new Audio();
        mandarinAudioEl = a;
        a.preload = "auto";
        /* no crossOrigin — Google TTS 無 ACAO；純播 mp3 唔需要 */
        a.onended = () => {
          if (token === mandarinAudioToken) mandarinAudioEl = null;
        };
        a.onerror = () => doneFail(new Error("audio error"));
        a.src = url;
        const p = a.play();
        if (p && typeof p.then === "function") {
          p.then(() => doneOk()).catch((e) => doneFail(e));
        } else {
          doneOk();
        }
      } catch (e) {
        doneFail(e);
      }
    });
  }

  function wireMandarinGestureUnlock() {
    if (mandarinGestureUnlockWired) return;
    mandarinGestureUnlockWired = true;
    const unlock = () => {
      try {
        warmMandarinVoices();
        if (window.speechSynthesis && window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        /* warm empty audio element unlock on iOS */
        if (!mandarinAudioEl) {
          try {
            const a = new Audio();
            a.muted = true;
            const p = a.play();
            if (p && typeof p.then === "function") {
              p.then(() => {
                try {
                  a.pause();
                } catch (_) {}
              }).catch(() => {});
            }
          } catch (_) {}
        }
      } catch (_) {}
    };
    try {
      document.addEventListener("pointerdown", unlock, { passive: true });
    } catch (_) {
      try {
        document.addEventListener("touchstart", unlock, { passive: true });
      } catch (_) {}
    }
  }

  /** ytdbc91: sync Mandarin audio unlock before S7／S11／S12 roll（iOS autoplay／未 unlock） */
  function primeMandarinForDictationStart() {
    try {
      warmMandarinVoices();
    } catch (_) {}
    try {
      const a = new Audio();
      a.muted = true;
      const p = a.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          try {
            a.pause();
          } catch (_) {}
        }).catch(() => {});
      }
    } catch (_) {}
    wireMandarinGestureUnlock();
    ensureMandarinResumeWatch();
  }

  function currentDictationSpeakWord() {
    return (
      (selectedTip && selectedTip.word) ||
      (activeDictation && activeDictation.word) ||
      ""
    );
  }

  function wireDictationReplayTap() {
    if (dictationReplayWired) return;
    dictationReplayWired = true;
    const replay = (ev) => {
      if (!isDictationStage()) return;
      /* ytdbc93: 唔讓再聽手勢誤食寫字紙上嘅 Pencil 筆畫 */
      if (ev && ev.target && el.answer) {
        const tgt = ev.target;
        if (tgt === el.answer || (typeof el.answer.contains === "function" && el.answer.contains(tgt))) return;
        const wrap = document.getElementById("paper-wrap") || document.getElementById("write-dock");
        if (wrap && typeof wrap.contains === "function" && wrap.contains(tgt)) return;
      }
      const word = currentDictationSpeakWord();
      if (!word) return;
      try {
        if (ev && typeof ev.preventDefault === "function") {
          /* keep click usable; don't block drag elsewhere */
        }
      } catch (_) {}
      speakMandarinWord(word);
    };
    const bind = (node) => {
      if (!node || node._ytdbc90Replay) return;
      node._ytdbc90Replay = true;
      try {
        node.style.cursor = "pointer";
        if (!node.getAttribute("title")) node.setAttribute("title", "再聽普通話");
      } catch (_) {}
      node.addEventListener("click", replay, false);
      node.addEventListener("pointerup", (ev) => {
        if (ev && ev.pointerType === "mouse") return; /* click handles mouse */
        replay(ev);
      }, false);
    };
    bind(el.promptCardThumb || document.getElementById("prompt-card-thumb"));
    bind(el.sentenceBubble || document.getElementById("sentence-bubble"));
  }

  /** Web Speech fallback ONLY — whitelist Mandarin voice + 簡體 + lang=zh-CN；無白名單 → tip＋唔 speak */
  function speakMandarinWordWebSpeechFallback(simpText) {
    const text = String(simpText || "").trim();
    if (!text) return;
    try {
      if (typeof window === "undefined" || !window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
        showMandarinTtsFallbackTip();
        return;
      }
      ensureMandarinResumeWatch();
      try {
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      } catch (_) {}

      const speakNow = () => {
        try {
          try {
            if (window.speechSynthesis.paused) window.speechSynthesis.resume();
          } catch (_) {}
          const zh = pickMandarinVoice();
          if (!zh || !isMandarinWhitelistVoice(zh) || isCantoneseVoice(zh)) {
            showMandarinTtsFallbackTip();
            return;
          }
          const u = new SpeechSynthesisUtterance(text); /* 簡體 */
          u.rate = 0.92;
          u.pitch = 1;
          u.volume = 1;
          u.voice = zh;
          u.lang = "zh-CN";
          window.speechSynthesis.cancel();
          setTimeout(() => {
            try {
              try {
                if (window.speechSynthesis.paused) window.speechSynthesis.resume();
              } catch (_) {}
              if (!zh || !isMandarinWhitelistVoice(zh) || isCantoneseVoice(zh)) {
                showMandarinTtsFallbackTip();
                return;
              }
              window.speechSynthesis.speak(u);
            } catch (_) {
              showMandarinTtsFallbackTip();
            }
          }, 40);
        } catch (_) {
          showMandarinTtsFallbackTip();
        }
      };

      if (!(window.speechSynthesis.getVoices() || []).length) {
        warmMandarinVoices();
        let fired = false;
        const runOnce = () => {
          if (fired) return;
          fired = true;
          try {
            window.speechSynthesis.removeEventListener("voiceschanged", onVoices);
          } catch (_) {}
          if (!(window.speechSynthesis.getVoices() || []).length) {
            showMandarinTtsFallbackTip();
            return;
          }
          speakNow();
        };
        const onVoices = () => runOnce();
        try {
          window.speechSynthesis.addEventListener("voiceschanged", onVoices);
        } catch (_) {}
        setTimeout(runOnce, 450);
        return;
      }
      speakNow();
    } catch (_) {
      showMandarinTtsFallbackTip();
    }
  }

  /**
   * Speak Hanzi in Mandarin.
   * Primary: Google zh-CN audio（簡體）— locks Putonghua even on HK iPad Safari.
   * Fallback: Web Speech whitelist only + 簡體；never blind／粵語.
   */
  function speakMandarinWord(word) {
    const text = String(word || "").trim();
    if (!text) return;
    try {
      ensureMandarinResumeWatch();
      wireMandarinGestureUnlock();
      const simp = toSimplifiedForTts(text);
      playMandarinAudio(simp)
        .then(() => {
          /* audio playing — do NOT Web Speech */
        })
        .catch(() => {
          /* network／autoplay reject → whitelist Web Speech on 簡體 only */
          speakMandarinWordWebSpeechFallback(simp);
        });
    } catch (_) {
      try {
        speakMandarinWordWebSpeechFallback(toSimplifiedForTts(text));
      } catch (_) {}
    }
  }

  /* ---- text match ---- */
  function norm(s) {
    return String(s || "")
      .trim()
      .replace(/\s+/g, "")
      .replace(/[，。、！？\s]/g, "");
  }

  function simpFold(s) {
    let out = s.normalize ? s.normalize("NFKC") : s;
    const map = {
      納: "纳", 涼: "凉", 搖: "摇", 墜: "坠", 彿: "佛", 靜: "静", 佈: "布",
      無: "无", 處: "处", 懷: "怀", 嚴: "严", 謀: "谋", 裝: "装", 勢: "势",
      歸: "归", 趙: "赵", 詐: "诈", 囂: "嚣", 張: "张", 氣: "气", 壯: "壮",
      絞: "绞", 盡: "尽", 評: "评", 討: "讨", 長: "长", 國: "国", 語: "语",
      齊: "齐", 對: "对", 開: "开", 關: "关", 學: "学", 習: "习", 麼: "么",
      這: "这", 還: "还", 們: "们", 個: "个", 為: "为", 來: "来", 時: "时",
      會: "会", 說: "说", 過: "过", 發: "发", 經: "经", 闇: "暗", 昧: "昧",
    };
    /* ytdbc90: also consult full TTS_T2S_MAP */
    return out.replace(/./g, (ch) => map[ch] || (typeof TTS_T2S_MAP !== "undefined" && TTS_T2S_MAP[ch]) || ch);
  }

  function acceptPool(word, acceptList) {
    const b = norm(word);
    const poolSet = new Set();
    if (b) {
      poolSet.add(b);
      poolSet.add(simpFold(b));
    }
    (acceptList || []).forEach((x) => {
      const n = norm(x);
      if (!n) return;
      poolSet.add(n);
      poolSet.add(simpFold(n));
    });
    return poolSet;
  }

  function uniqueChars(s) {
    return Array.from(new Set(Array.from(String(s || ""))));
  }

  function overlapRatio(a, b) {
    const aa = uniqueChars(simpFold(a));
    const bb = new Set(uniqueChars(simpFold(b)));
    if (!aa.length || !bb.size) return 0;
    let hit = 0;
    aa.forEach((ch) => {
      if (bb.has(ch)) hit += 1;
    });
    return hit / Math.max(aa.length, bb.size);
  }

  /* Exact: norm/simpFold against word + accept[] */
  function matchWordExact(input, word, acceptList) {
    const a = norm(input);
    if (!a) return false;
    const af = simpFold(a);
    for (const c of acceptPool(word, acceptList)) {
      if (a === c || af === c || af === simpFold(c)) return true;
    }
    return false;
  }

  /* Soft: Pencil/Scribble approx — share ≥1 char, length ±2, subset/substring, overlap ≥0.4 */
  function matchWordSoft(input, word, acceptList) {
    const a = norm(input);
    if (!a) return false;
    const af = simpFold(a);
    const targets = acceptPool(word, acceptList);
    for (const c of targets) {
      if (!c) continue;
      const cf = simpFold(c);
      /* substring / subset either way (wrote some of the chars) */
      if (af.includes(cf) || cf.includes(af) || a.includes(c) || c.includes(a)) return true;
      /* length within ±2 of target */
      if (Math.abs(af.length - cf.length) <= 2) {
        /* share ≥1 character */
        const setC = new Set(uniqueChars(cf));
        if (uniqueChars(af).some((ch) => setC.has(ch))) return true;
      } else {
        /* longer/shorter but still share a char */
        const setC = new Set(uniqueChars(cf));
        if (uniqueChars(af).some((ch) => setC.has(ch))) return true;
      }
      if (overlapRatio(af, cf) >= 0.4) return true;
    }
    return false;
  }

  function matchWord(input, word, acceptList) {
    return matchWordExact(input, word, acceptList) || matchWordSoft(input, word, acceptList);
  }

  function wordLen(word) {
    return Array.from(String(word || "").trim()).length;
  }

  function statsForCard(card) {
    const n = Math.max(1, Math.min(4, wordLen(card.word) || card.char_count || 1));
    const atkTable = (combatBalance && combatBalance.atk_by_chars) || ATK_BY_CHARS;
    const hpTable = (combatBalance && combatBalance.hp_by_chars) || HP_BY_CHARS;
    let atk =
      typeof card.atk === "number" && !Number.isNaN(card.atk)
        ? card.atk
        : atkTable[String(n)] || atkTable[n] || ATK_BY_CHARS[n] || 14;
    let hp =
      typeof card.hp === "number" && !Number.isNaN(card.hp)
        ? card.hp
        : hpTable[String(n)] || hpTable[n] || HP_BY_CHARS[n] || 28;
    /* ytdbc21 knife#4: 四字 ATK／HP 大增（override deck card numbers） */
    if (n >= 4) {
      atk = Math.max(atk, ATK_BY_CHARS[4] || 55);
      hp = Math.max(hp, HP_BY_CHARS[4] || 48);
    }
    return { atk: atk, hp: hp, chars: n };
  }

  /** Deploy energy cost scales with word length: 1→15 … 4+→25 */
  function energyCost(card) {
    const n = wordLen(card.word) || 1;
    if (n <= 1) return 15;
    if (n === 2) return 18;
    if (n === 3) return 22;
    return 25;
  }

  function assetCard(image, card) {
    const dir =
      (card && card.assetDir) ||
      (stageMode === 6
        ? "assets/stage5_cards/"
        : stageMode === 5
          ? "assets/chengyu_cards_no_answer/"
          : "assets/cards/");
    return dir + image + "?v=" + V;
  }
  /* ytdbc87: 默書提示卡 — 優先 cards_no_answer 面；否則 assetCard／assetDir */
  function dictationPromptCardSrc(card) {
    if (!card) return "";
    const ip = String(card.image_path || "");
    if (ip.indexOf("cards_no_answer/") === 0) {
      return assetUrl("assets/" + ip);
    }
    if (card.image) return assetCard(card.image, card);
    return "";
  }
  function assetUrl(path) {
    return path + "?v=" + V;
  }

  function probeFujiPhoto() {
    applyBattleBg(1);
  }
  /* ytdbc49 knife④: stage BG motion overlays (do NOT replace LOCK BGs) */
  function syncBgFx(mode) {
    const layer = el.bgFxLayer;
    if (!layer) return;
    const m = mode === 3 || mode === 4 || mode === 5 ? mode : "";
    if (String(layer.dataset.mode || "") === String(m) && layer.childNodes.length) return;
    layer.dataset.mode = String(m);
    layer.innerHTML = "";
    if (m === 3) {
      ["f1", "f2", "f3", "f4"].forEach(function (f) {
        const d = document.createElement("div");
        d.className = "fx fx-eruption " + f;
        layer.appendChild(d);
      });
      const em = document.createElement("div");
      em.className = "fx fx-embers";
      layer.appendChild(em);
    } else if (m === 4) {
      ["b1", "b2"].forEach(function (cls) {
        const b = document.createElement("div");
        b.className = "fx fx-butterfly " + cls;
        b.innerHTML = '<div class="wing open"></div><div class="wing flap"></div>';
        layer.appendChild(b);
      });
      const rh = document.createElement("div");
      rh.className = "fx fx-beetle rhino";
      layer.appendChild(rh);
      const gr = document.createElement("div");
      gr.className = "fx fx-beetle green";
      layer.appendChild(gr);
      ["ff1", "ff2", "ff3"].forEach(function (cls) {
        const f = document.createElement("div");
        f.className = "fx fx-firefly " + cls;
        layer.appendChild(f);
      });
    } else if (m === 5) {
      const tw = document.createElement("div");
      tw.className = "fx fx-twinkle-loop";
      layer.appendChild(tw);
      ["s1", "s2", "s3", "s4"].forEach(function (cls) {
        const s = document.createElement("div");
        s.className = "fx fx-star " + cls;
        layer.appendChild(s);
      });
      const ss1 = document.createElement("div");
      ss1.className = "fx fx-shoot";
      layer.appendChild(ss1);
      const ss2 = document.createElement("div");
      ss2.className = "fx fx-shoot ss2";
      layer.appendChild(ss2);
    }
  }
  function applyBattleBg(mode) {
    if (!el.fujiBg) return;
    el.fujiBg.classList.remove(...BG_CLASSES);
    /* S1 Fuji; S2 harbour; S3 volcano; S4 forest; S5 space; S6 harbour; S7 study 溫書 */
    let path = FUJI_BG;
    let cls = "has-fuji-photo";
    if (mode === 3) {
      path = BG_S3;
      cls = "has-s3-bg";
    } else if (mode === 4) {
      path = BG_S4;
      cls = "has-s4-bg";
    } else if (mode === 5) {
      path = BG_S5;
      cls = "has-s5-bg";
    } else if (mode === 6) {
      path = HARBOUR_BG;
      cls = "has-harbour-photo";
    } else if (mode === 7 || mode === 11 || mode === 12) {
      path = STUDY_BG;
      cls = "has-study-bg";
    } else if (mode === 8) {
      path = BG_S4;
      cls = "has-s4-bg";
    } else if (mode === 10) {
      path = BG_S4;
      cls = "has-s4-bg";
    }
    const img = new Image();
    img.onload = () => {
      el.fujiBg.classList.remove(...BG_CLASSES);
      el.fujiBg.classList.add(cls);
      syncBgFx(mode);
    };
    img.onerror = () => {
      el.fujiBg.classList.remove(...BG_CLASSES);
      syncBgFx(0);
    };
    img.src = assetUrl(path);
    syncBgFx(mode);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function syncRevealBtn() {
    if (!el.btnReveal) return;
    el.btnReveal.textContent = revealAnswers ? "藏答案" : "睇答案";
    el.btnReveal.setAttribute("aria-pressed", revealAnswers ? "true" : "false");
    el.btnReveal.classList.toggle("on", revealAnswers);
  }


  function clozeModes() {
    return stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 8;
  }
  function syncAnswerPeekBtn() {
    if (!el.btnAnswerPeek) return;
    const show = battleOn && !over && clozeModes();
    if (el.answerPeekWrap) el.answerPeekWrap.classList.toggle("hidden", !show);
    else el.btnAnswerPeek.classList.toggle("hidden", !show);
    el.btnAnswerPeek.disabled = !show || answerPeekUsed;
    el.btnAnswerPeek.classList.toggle("used", !!answerPeekUsed);
    if (answerPeekUsed) {
      const trunc = answerPeekShown
        ? "答案：" + (answerPeekShown.length > 10 ? answerPeekShown.slice(0, 10) + "…" : answerPeekShown)
        : "已睇答案";
      el.btnAnswerPeek.textContent = trunc;
    } else {
      el.btnAnswerPeek.textContent = "睇答案";
    }
  }
  function peekClozeAnswer() {
    /* knife①：顯示 answer、扣塔 10% maxHP（min1）、每題1次、唔填字 */
    if (!battleOn || over || !clozeModes()) return;
    if (answerPeekUsed) {
      el.hudStatus.textContent = "呢題已睇過答案";
      return;
    }
    const prompt = ensureActivePrompt();
    if (!prompt || !prompt.sentence) {
      el.hudStatus.textContent = "未有題目";
      return;
    }
    const ans = String(prompt.sentence.answer || "").trim();
    if (!ans) {
      el.hudStatus.textContent = "呢題無答案欄";
      return;
    }
    answerPeekUsed = true;
    answerPeekShown = ans;
    const dmg = Math.max(1, Math.ceil(TOWER_HP * ANSWER_PEEK_HP_FRAC));
    playerHp = Math.max(0, playerHp - dmg);
    setHud();
    if (el.sentenceHint) {
      const h = prompt.sentence.hint || "";
      el.sentenceHint.style.display = "";
      el.sentenceHint.textContent =
        "答案：" + ans + (h ? " · 提示：" + h : "") + " · 扣塔 " + dmg;
    }
    el.hudStatus.textContent = "睇咗答案 · 塔 −" + dmg + "（請自己寫）";
    syncAnswerPeekBtn();
    if (playerHp <= 0) endGame(false);
  }
  function resetAnswerPeek() {
    answerPeekUsed = false;
    answerPeekShown = "";
    syncAnswerPeekBtn();
  }

  function setReveal(on) {
    revealAnswers = !!on;
    syncRevealBtn();
    if (battleOn) {
      renderDeckGrid(performance.now());
      /* ytdbc76: S4／S7／S8 唔填右欄答案卡（藏欄／自己諗／默書） */
      if (stageMode === 4 || stageMode === 7 || stageMode === 8 || stageMode === 11 || stageMode === 12) {
        renderSelPreview(null);
      } else {
        renderSelPreview(selectedTip);
      }
      if (stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 8) updateSentenceBubble();
      if (stageMode === 6) updatePinyinPrompt();
      if (isDictationStage()) refreshDictationChrome();
    }
  }

  /* ---- Pick screen (owned + combat pool 1–44; gacha 45–54 excluded) ---- */
  function renderPick() {
    el.pickGrid.innerHTML = "";
    /* drop unowned / gacha from selection */
    Array.from(pickSet).forEach((id) => {
      const card = pool.find((c) => c.id === id);
      if (!card || !isOwned(id) || !isCombatPickable(card)) pickSet.delete(id);
    });
    if (el.pickTitle) {
      el.pickTitle.textContent =
        stageMode === 3
          ? "第三關 · 選 10 張（詞語＋第二關期考詞）"
          : stageMode === 2
            ? "第二關 · 選 10 張期考詞語卡"
            : "第一關 · 選 10 張出戰卡";
    }
    const ownedPool = combatPickPool();
    ownedPool.forEach((c) => {
      const st = statsForCard(c);
      const nOk = cardSuccess(c.id);
      const node = document.createElement("div");
      node.className = "pick-card" + (pickSet.has(c.id) ? " selected" : "");
      node.innerHTML =
        '<img src="' +
        assetCard(c.image, c) +
        '" alt="" draggable="false" />' +
        (nOk > 0 ? '<div class="ok-badge">✓' + nOk + "</div>" : "") +
        '<div class="word">' +
        escapeHtml(c.word) +
        "</div>" +
        '<div class="meaning">' +
        escapeHtml(c.meaning || "") +
        "</div>" +
        '<div class="atk-hint">ATK ' +
        st.atk +
        " · HP " +
        st.hp +
        "（" +
        st.chars +
        "字）</div>";
      node.addEventListener("click", () => togglePick(c.id));
      el.pickGrid.appendChild(node);
    });
    el.pickN.textContent = String(pickSet.size);
    el.btnStart.disabled = pickSet.size !== 10;
    updateSuccessHud();
  }

  function togglePick(id) {
    if (pickSet.has(id)) pickSet.delete(id);
    else {
      if (pickSet.size >= 10) return;
      pickSet.add(id);
    }
    renderPick();
  }

  /* ---- Battle HUD ---- */
  function setHud() {
    el.hpPlayer.textContent = String(Math.max(0, Math.ceil(playerHp)));
    el.hpEnemy.textContent = String(Math.max(0, Math.ceil(enemyHp)));
    const pr = Math.max(0, Math.min(1, playerHp / TOWER_HP));
    const er = Math.max(0, Math.min(1, enemyHp / TOWER_HP));
    el.hpPlayerBar.style.transform = "scaleY(" + pr + ")";
    el.hpEnemyBar.style.transform = "scaleY(" + er + ")";
    setEnergyHud();
    updateSuccessHud();
  }

  function setEnergyHud() {
    const er = Math.max(0, Math.min(1, energy / ENERGY_MAX));
    el.energyBar.style.transform = "scaleX(" + er + ")";
    el.energyNum.textContent = String(Math.floor(energy));
  }

  function syncWritePadLayout() {
    if (!el.app) return;
    /* ytdbc93: S11／S12 默書都要 write-long（原本只得 4／7／8，紙偏短） */
    const long =
      stageMode === 4 ||
      stageMode === 7 ||
      stageMode === 8 ||
      stageMode === 11 ||
      stageMode === 12 ||
      ((stageMode === 3 || stageMode === 5) && !!selectedTip);
    el.app.classList.toggle("write-long", long);
    el.app.classList.toggle("has-tip", !!selectedTip);
  }

  function rejectWrong(msg) {
    sfxWrongReject();
    el.answer.classList.add("shake");
    setTimeout(() => el.answer.classList.remove("shake"), 320);
    el.hudStatus.textContent = msg || "字唔啱 · 唔出角式";
    /* bounce back to pick options (clear selection on pick-then-write) */
    if (stageMode === 3 || stageMode === 5) {
      selectedTip = null;
      renderSelPreview(null);
      renderDeckGrid(performance.now());
    }
    syncWritePadLayout();
    if (el.answer) el.answer.value = "";
  }


  /* ytdbc64: deck＋sel 戰鬥中常顯示圖＋詞名（唔用 ??? cover）；bakeAnsCoverHtml keep stub 空 */
  function bakeAnsCoverHtml(card) {
    return "";
  }
  function wrapCardFace(imgSrc, coverHtml) {
    return (
      '<div class="card-face' +
      (coverHtml ? " has-bake-cover" : "") +
      '"><img src="' +
      imgSrc +
      '" alt="" draggable="false" />' +
      coverHtml +
      "</div>"
    );
  }

  function renderSelPreview(card) {
    if (!card) {
      el.selCard.className = "sel-empty";
      el.selCard.textContent = "點左欄卡";
      syncWritePadLayout();
      return;
    }
    const st = statsForCard(card);
    const nOk = cardSuccess(card.id);
    /* ytdbc75: 未睇答案 → ans-hidden；.sel-word／meaning 用 ???（唔寫 card.word）；圖照常；睇答案後顯示真詞＋释义 */
    const hideAns = !revealAnswers;
    const wordShow = hideAns ? "???" : card.word;
    const meaningShow = hideAns
      ? "（寫出詞語出擊）"
      : card.meaning || "（寫出詞語出擊）";
    el.selCard.className = hideAns ? "ans-hidden" : "";
    el.selCard.innerHTML =
      wrapCardFace(assetCard(card.image, card), "") +
      '<div class="sel-word">' +
      escapeHtml(wordShow) +
      "</div>" +
      '<div class="sel-meaning">' +
      escapeHtml(meaningShow) +
      "</div>" +
      '<div class="sel-atk">ATK ' +
      st.atk +
      " · HP " +
      st.hp +
      " · 耗能 " +
      energyCost(card) +
      (nOk > 0 ? " · ✓" + nOk : "") +
      "</div>";
    syncWritePadLayout();
  }

  function renderDeckGrid(now) {
    el.deckGrid.innerHTML = "";
    /* ytdbc73: S4／S8 填句＋S7 默書 — 唔渲染左欄（自己諗／防泄） */
    if (stageMode === 4 || stageMode === 7 || stageMode === 8 || stageMode === 11 || stageMode === 12) return;
    let show = deck;
    const cdTotal = deployCdMs() || DEPLOY_CD_STAGE12_MS;
    show.forEach((c) => {
      const cdLeft = Math.max(0, (cdUntil[c.id] || 0) - now);
      const nOk = cardSuccess(c.id);
      const node = document.createElement("div");
      const isBig4 = wordLen(c.word) >= 4;
      /* ytdbc75: 未睇答案 → ans-hidden＋???（唔露 c.word／meaning）；圖照常；睇答案後 revealed 真詞 */
      const hideAns = !revealAnswers;
      node.className =
        "deck-card" +
        (hideAns ? " ans-hidden" : " revealed") +
        (cdLeft > 0 ? " cd" : "") +
        (selectedTip && selectedTip.id === c.id ? " sel" : "") +
        (isBig4 ? " big4" : "");
      let cdHtml = "";
      if (cdLeft > 0) {
        const pct = Math.max(0, Math.min(100, (cdLeft / cdTotal) * 100));
        cdHtml =
          '<div class="cd-badge">' +
          '<div class="cd-bar-track"><i class="cd-bar-fill" style="width:' +
          pct.toFixed(1) +
          '%"></i></div>' +
          '<span class="cd-sec">' +
          Math.ceil(cdLeft / 1000) +
          "s</span></div>";
      }
      const wordShow = hideAns ? "???" : c.word;
      const meaningShow = hideAns ? "" : c.meaning || "";
      node.innerHTML =
        wrapCardFace(assetCard(c.image, c), "") +
        (nOk > 0 ? '<div class="ok-badge">✓' + nOk + "</div>" : "") +
        '<div class="ans-word">' +
        escapeHtml(wordShow) +
        "</div>" +
        '<div class="m">' +
        escapeHtml(meaningShow) +
        "</div>" +
        cdHtml;
      node.addEventListener("click", () => {
        selectedTip = c;
        renderSelPreview(c);
        syncWritePadLayout();
        renderDeckGrid(performance.now());
      });
      el.deckGrid.appendChild(node);
    });
  }

  /* ---- Units ---- */
  function laneUsable() {
    const w = el.lane.clientWidth || 800;
    const pad = 48;
    return { w: w, pad: pad, usable: Math.max(200, w - pad * 2) };
  }

  /* ytdbc47: per-sprite native facing. Default RIGHT (soft／chengyu／knife／pinyin／enemy).
     LEFT only for bugs_new10 + soft3d assets named face_left. */
  function artFacesLeftFor(path) {
    const p = String(path || "").split("?")[0];
    if (!p) return false;
    if (/face_left/i.test(p)) return true;
    if (/mega_ult_soft3d/i.test(p)) return true;
    if (/crystal_R_face_left/i.test(p)) return true;
    if (/\/bug_\d/i.test(p) || /(^|\/)bug_\d/i.test(p)) return true;
    if (/bugs_new10/i.test(p)) return true;
    if (/blind_lv2_gold|lv2_gold_idle/i.test(p)) return true;
    if (/blind_lv3_crystal|lv3_crystal_idle|lv3_crystal_atk/i.test(p)) return true;
    if (/blind_lv4_metal|lv4_metal_idle|lv4_metal_atk|blind_lv4_rainbow|lv4_rainbow/i.test(p)) return true;
    if (/fire_atk\/fx_fire/i.test(p)) return true;
    return false;
  }

  function setUnitAnim(u) {
    if (!u.el || !u.alive) return;
    u.el.classList.toggle("fighting", !!u.fighting);
    u.el.classList.toggle("walking", !u.fighting);
    /* ytdbc42 knife①: fighting → attack pose（有 atk map 先 swap） */
    if (u.idleSprite && u.atkSprite) {
      const img = u.el.querySelector("img");
      if (img) {
        const want = u.fighting ? u.atkSprite : u.idleSprite;
        if (img.getAttribute("data-pose") !== want) {
          img.setAttribute("data-pose", want);
          img.src = assetUrl(want);
        }
        /* ytdbc61: real L2 idle PNG → no CSS gold filter; L1 atk keep tint（金atk NEED_ART） */
        if (u.isL2) {
          const idleIsArt = /lv2_gold_idle|blind_lv2_gold|lv3_crystal|blind_lv3_crystal|lv3_crystal_atk/i.test(String(u.idleSprite || ""));
          u.el.classList.toggle("has-l2-art", !!(idleIsArt && !u.fighting));
        }
        /* ytdbc71: L3 crystal atk 亦係 art → fighting 保持 has-l3-art */
        if (u.isL3) {
          const l3Art = /lv3_crystal|blind_lv3_crystal|lv3_crystal_atk/i.test(
            String((u.fighting ? u.atkSprite : u.idleSprite) || u.idleSprite || "")
          );
          u.el.classList.toggle("has-l3-art", !!l3Art);
        }
        /* ytdbc82: L4 metal atk 亦係 art → fighting 保持 has-l4-art（CSS class 仍 ally-l4-rainbow） */
        if (u.isL4) {
          const l4Art = /lv4_metal|blind_lv4_metal|lv4_rainbow|blind_lv4_rainbow/i.test(
            String((u.fighting ? u.atkSprite : u.idleSprite) || u.idleSprite || "")
          );
          u.el.classList.toggle("has-l4-art", !!l4Art);
        }
      }
    } else if (u.isL2 && u.el) {
      const idleIsArt = /lv2_gold_idle|blind_lv2_gold|lv3_crystal|blind_lv3_crystal|lv3_crystal_atk/i.test(String(u.idleSprite || ""));
      u.el.classList.toggle("has-l2-art", !!idleIsArt);
    } else if (u.isL3 && u.el) {
      const l3Art = /lv3_crystal|blind_lv3_crystal|lv3_crystal_atk/i.test(String(u.idleSprite || ""));
      u.el.classList.toggle("has-l3-art", !!l3Art);
    } else if (u.isL4 && u.el) {
      const l4Art = /lv4_metal|blind_lv4_metal|lv4_rainbow|blind_lv4_rainbow/i.test(String(u.idleSprite || ""));
      u.el.classList.toggle("has-l4-art", !!l4Art);
    }
    /* ytdbc47: aim at engaged foe / nearest foe / march dir.
       Art facing is MIXED — most soft／chengyu／knife／stage5_units／enemy_E* face RIGHT;
       bugs_new10／soft3d *face_left* face LEFT. ytdbc46 artFacesLeft=true for ALL
       flipped RIGHT-art when wantRight → S5/S6 (and soft) backs to enemy. */
    let wantRight;
    if (u.fighting && u.fighting.alive) {
      wantRight = u.fighting.x >= u.x;
    } else {
      const foes = u.side === "ally" ? enemies : allies;
      let nearest = null;
      let best = Infinity;
      for (const f of foes) {
        if (!f || !f.alive) continue;
        const d = Math.abs(f.x - u.x);
        if (d < best) {
          best = d;
          nearest = f;
        }
      }
      if (nearest) wantRight = nearest.x >= u.x;
      else wantRight = u.side === "ally";
    }
    const imgEl = u.el.querySelector("img");
    const posePath =
      (imgEl && (imgEl.getAttribute("data-pose") || imgEl.getAttribute("src"))) ||
      u.idleSprite ||
      "";
    const artFacesLeft = artFacesLeftFor(posePath);
    const flip = artFacesLeft ? wantRight : !wantRight;
    u.el.classList.toggle("face-flip", flip);
    u.el.classList.toggle("face-right", wantRight);
    u.el.classList.toggle("face-left", !wantRight);
    u.el.style.setProperty("--face-sx", flip ? "-1" : "1");
  }

  function unitPixelW(u) {
    if (u.isSmallBoss) return SMALL_BOSS_UNIT_W;
    if (u.isMidBoss) return MID_BOSS_UNIT_W;
    if (u.isBoss) return (u.bossDef && u.bossDef.unitW) || BOSS_UNIT_W;
    if (u.isUlt) return ULT_UNIT_W;
    if (u.isBig4) return BIG4_UNIT_W;
    return UNIT_W;
  }

  function layoutUnit(u) {
    const { pad, usable } = laneUsable();
    const uw = unitPixelW(u);
    const px = pad + (u.x / 100) * usable - uw / 2;
    u.el.style.left = px + "px";
    u.el.style.width = uw + "px";
    const ratio = Math.max(0, Math.min(1, u.hp / u.maxHp));
    if (u.hpEl) u.hpEl.style.transform = "scaleX(" + ratio + ")";
    setUnitAnim(u);
  }

  function spawnAlly(card, opts) {
    opts = opts || {};
    /* ytdbc21 knife#5: no deploy / on-field cap */
    const st = statsForCard(card);
    let atk = st.atk;
    let hp = st.hp;
    const isUlt = !!opts.ult;
    const isBig4 = !isUlt && st.chars >= 4;
    if (isUlt) {
      atk = Math.round(Math.max(atk, ATK_BY_CHARS[4] || 55) * ULT_ATK_MULT);
      hp = Math.round(Math.max(hp, HP_BY_CHARS[4] || 48) * ULT_HP_MULT);
    }
    const node = document.createElement("div");
    const isL4 = !!(card && card.id != null && isGachaL4(card.id));
    const isL3 = !isL4 && !!(card && card.id != null && isGachaL3(card.id));
    /* ytdbc81: 戰鬥 Lv2 角式攻擊要 Lv1 捉滿 5；圖鑑 L2 皮仍跟 5 抽 isGachaL2 */
    const gachaL2Ready = !!(card && card.id != null && isGachaL2(card.id));
    const lv2AtkReady = !!(card && card.id != null && isLv2AtkUnlocked(card.id));
    const isL2 = !isL4 && !isL3 && gachaL2Ready && lv2AtkReady;
    /* ytdbc46 knife A PASS: isUlt idle = allySpriteFor(card) / BLIND_IDLE (bugs_new10); NEVER ULT_MEGA as primary.
       fighting swap → allyAtkSpriteFor (id45–54 = blind_ult_atk). MEGA only last-resort fallback. */
    const atkPath = allyAtkSpriteFor(card);
    const spritePath = isUlt
      ? allySpriteFor(card, { combat: true }) || atkPath || ULT_MEGA_SPRITE
      : allySpriteFor(card, { combat: true });
    if (lv2AtkReady) {
      atk = Math.round(atk * LV2_ATK_MULT);
    }
    const l4Art = isL4 && /lv4_metal|blind_lv4_metal|lv4_rainbow|blind_lv4_rainbow/i.test(String(spritePath || ""));
    const l3Art = isL3 && /lv3_crystal|blind_lv3_crystal/i.test(String(spritePath || ""));
    const l2Art = isL2 && /lv2_gold_idle|blind_lv2_gold/i.test(String(spritePath || ""));
    node.className =
      "unit ally walking" +
      (isBig4 ? " big4" : "") +
      (isUlt ? " ult-unit" : "") +
      (isL4 ? " ally-l4-rainbow" : "") +
      (isL3 ? " ally-l3-crystal" : "") +
      (isL2 ? " ally-l2-gold" : "") +
      (l4Art ? " has-l4-art" : "") +
      (l3Art ? " has-l3-art" : "") +
      (l2Art ? " has-l2-art" : "");
    node.innerHTML =
      '<div class="hpmini"><i></i></div><img src="' +
      assetUrl(spritePath) +
      '" alt="" draggable="false" data-pose="' +
      spritePath +
      '" />';
    el.units.appendChild(node);
    /* ytdbc52: NO png↔jpg unit fallback — jpg allies = white/photo box；cutout PNG only */
    const allyImg = node.querySelector("img");
    if (allyImg && !isUlt) {
      allyImg.addEventListener("error", function onAllyExtFail() {
        /* intentionally empty: keep broken PNG rather than opaque jpg box */
        if (allyImg.dataset.extSwap) return;
        allyImg.dataset.extSwap = "1";
      });
    }
    const u = {
      side: "ally",
      cardId: card.id,
      el: node,
      hpEl: node.querySelector(".hpmini i"),
      x: 4,
      hp: hp,
      maxHp: hp,
      atk: atk,
      speed: ALLY_SPEED,
      alive: true,
      fighting: null,
      isBig4: isBig4,
      isUlt: isUlt,
      isL2: isL2,
      isL3: isL3,
      isL4: isL4,
      chars: st.chars,
      idleSprite: spritePath,
      atkSprite: atkPath,
    };
    allies.push(u);
    layoutUnit(u);
    sfxDeploy();
    /* ytdbc81: Lv1 形態成功出擊＝捉；滿 5 解鎖 Lv2 角式攻擊；未解鎖 tip → lastSpawnLv2Hint */
    lastSpawnLv2Hint = "";
    if (!isL4 && !isL3 && !isL2 && card && card.id != null) {
      const catchMeta = noteLv1Catch(card);
      const n = catchMeta.catches || 0;
      const word = card.word || ("#" + card.id);
      if (catchMeta.unlocked) {
        lastSpawnLv2Hint =
          "解鎖！「" + word + "」可用 Lv2 角式攻擊（Lv1 捉滿 " + LV1_CATCH_NEED + " 次）";
      } else if (gachaL2Ready && !lv2AtkReady) {
        lastSpawnLv2Hint =
          "Lv2 角式攻擊未解鎖 · Lv1 捉 " + n + "／" + LV1_CATCH_NEED;
      } else if (!catchMeta.already && n > 0 && n < LV1_CATCH_NEED) {
        lastSpawnLv2Hint = "Lv1 捉 " + n + "／" + LV1_CATCH_NEED + " 解鎖 Lv2 攻擊";
      }
    } else if (lv2AtkReady && card) {
      lastSpawnLv2Hint =
        (isL2 ? "Lv2 角式攻擊" : "Lv2 角式攻擊（ATK）") + " · ATK×" + LV2_ATK_MULT;
    }
    if (lastSpawnLv2Hint && el.hudStatus) el.hudStatus.textContent = lastSpawnLv2Hint;
    return true;
  }

  function mergeSpawnHud(base) {
    const hint = lastSpawnLv2Hint || "";
    if (!hint) return base;
    if (hint.indexOf("解鎖！") === 0 || hint.indexOf("Lv2 角式攻擊 ·") === 0) return hint;
    return String(base || "") + " · " + hint;
  }

  function updateKillHud() {
    if (!el.killHud) return;
    const total = bossQueue.length || 0;
    const done = Math.min(bossQueueIdx, total);
    const next = bossQueueIdx < total ? bossQueue[bossQueueIdx] : null;
    const label = next === "small" ? "細" : next === "mid" ? "中" : next === "big" ? "大" : "—";
    if (postBossWave || (bossSpawned && bossQueueIdx >= total)) {
      el.killHud.textContent = "BOSS齊 · 打敵塔";
      el.killHud.classList.add("ready");
    } else {
      el.killHud.textContent =
        "BOSS " + done + "／" + total +
        (next ? " · 下一" + label + "@" + nextBossGateKills + "殺" : "") +
        " · 擊殺 " + smallKills;
      el.killHud.classList.toggle("ready", !!next && smallKills >= nextBossGateKills && !anyBossTierAlive());
    }
  }

  function stageBossSprites() {
    const m = STAGE_BOSS[stageMode];
    if (m) return m;
    return { mid: BOSS_SPRITE, big: BOSS_SPRITE }; /* S6／未知 → 結晶R KEEP */
  }

  function spawnEnemy() {
    /* ytdbc48／ytdbc50: BIG BOSS 在場停小怪；quota 未出完大 BOSS 前唔因舊 20殺閘停 */
    if (bossUnit && bossUnit.alive) return false;
    if (!bossSpawned && bossQueueIdx >= bossQueue.length && bossQueue.length) return false;
    const alive = enemies.filter((e) => e.alive);
    if (alive.length >= balMaxEnemy()) return false;
    const { usable } = laneUsable();
    const gapPct = (SPAWN_GAP_CARDS * UNIT_W * 100) / usable;
    const rightmost = alive.reduce(
      (m, e) => (m == null || e.x > m ? e.x : m),
      null
    );
    if (rightmost != null && 100 - rightmost < gapPct) return false;

    const kind = ENEMY_ROSTER[Math.floor(Math.random() * ENEMY_ROSTER.length)];
    const node = document.createElement("div");
    node.className = "unit enemy walking";
    node.innerHTML =
      '<div class="hpmini"><i></i></div><img src="' +
      assetUrl(kind.image) +
      '" alt="" draggable="false" />';
    el.units.appendChild(node);
    const u = {
      side: "enemy",
      kind: kind.id,
      isBoss: false,
      el: node,
      hpEl: node.querySelector(".hpmini i"),
      x: 96,
      hp: balEnemyHp(),
      maxHp: balEnemyHp(),
      atk: balEnemyAtk(),
      speed: ENEMY.speed,
      alive: true,
      fighting: null,
      sentence: null,
      card_id: null,
      solved: true,
    };
    if (stageMode === 3) {
      const sent = pickSentenceForDeck();
      if (sent) {
        u.sentence = sent;
        u.card_id = sent.card_id;
        u.solved = false;
      }
    }
    enemies.push(u);
    layoutUnit(u);
    if (stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 8) updateSentenceBubble();
    return true;
  }

  function spawnSmallBoss() {
    if (smallBossUnit && smallBossUnit.alive) return false;
    const def = BOSS_BY_SIZE.small;
    const spr = def.image;
    const hp = Math.round(balEnemyHp() * SMALL_BOSS_HP_MULT);
    const atk = Math.round(balEnemyAtk() * SMALL_BOSS_ATK_MULT);
    const node = document.createElement("div");
    node.className = "unit enemy boss small-boss walking";
    node.innerHTML =
      '<div class="hpmini"><i></i></div><img src="' +
      assetUrl(spr) +
      '" alt="細 BOSS" draggable="false" />';
    el.units.appendChild(node);
    const u = {
      side: "enemy",
      kind: "SMALL_BOSS",
      isBoss: true,
      isMidBoss: false,
      isSmallBoss: true,
      bossDef: def,
      el: node,
      hpEl: node.querySelector(".hpmini i"),
      x: 92,
      hp: hp,
      maxHp: hp,
      atk: atk,
      speed: def.speed || 12,
      alive: true,
      fighting: null,
    };
    enemies.push(u);
    smallBossUnit = u;
    layoutUnit(u);
    updateKillHud();
    el.hudStatus.textContent = "細 BOSS 出現！";
    playZapSfx();
    if (stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 8) {
      if (!activePrompt) rollNextPrompt(false);
      updateSentenceBubble();
    }
    return true;
  }

  function spawnMidBoss() {
    if (midBossUnit && midBossUnit.alive) return false;
    midBossSpawned = true;
    const spr = stageBossSprites().mid;
    const hp = Math.round(balEnemyHp() * MID_BOSS_HP_MULT);
    const atk = Math.round(balEnemyAtk() * Math.min(BOSS_ATK_MULT, 2.0));
    const node = document.createElement("div");
    node.className = "unit enemy boss mid-boss walking";
    node.innerHTML =
      '<div class="hpmini"><i></i></div><img src="' +
      assetUrl(spr) +
      '" alt="MID BOSS" draggable="false" />';
    el.units.appendChild(node);
    const u = {
      side: "enemy",
      kind: "MID_BOSS",
      isBoss: true,
      isMidBoss: true,
      el: node,
      hpEl: node.querySelector(".hpmini i"),
      x: 92,
      hp: hp,
      maxHp: hp,
      atk: atk,
      speed: BOSS_SPEED,
      alive: true,
      fighting: null,
    };
    enemies.push(u);
    midBossUnit = u;
    layoutUnit(u);
    updateKillHud();
    el.hudStatus.textContent = "中 BOSS 出現！";
    playZapSfx();
    if (stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 8) {
      if (!activePrompt) rollNextPrompt(false);
      updateSentenceBubble();
    }
    return true;
  }

  function spawnBigBoss() {
    if (bossSpawned) return false;
    bossSpawned = true;
    const spr = stageBossSprites().big;
    /* KEEP bossDefForStage／BOSS_BY_SIZE for additive roster; spawn art = ⑦ STAGE_BOSS */
    const def = bossDefForStage();
    const hpMult = BOSS_HP_MULT;
    const atkMult = BOSS_ATK_MULT;
    const spd = BOSS_SPEED;
    const hp = Math.round(balEnemyHp() * hpMult);
    const atk = Math.round(balEnemyAtk() * atkMult);
    const node = document.createElement("div");
    node.className = "unit enemy boss walking boss-big";
    node.innerHTML =
      '<div class="hpmini"><i></i></div><img src="' +
      assetUrl(spr) +
      '" alt="BIG BOSS" draggable="false" />';
    el.units.appendChild(node);
    const u = {
      side: "enemy",
      kind: "BOSS",
      isBoss: true,
      isMidBoss: false,
      bossDef: def,
      el: node,
      hpEl: node.querySelector(".hpmini i"),
      x: 92,
      hp: hp,
      maxHp: hp,
      atk: atk,
      speed: spd,
      alive: true,
      fighting: null,
    };
    enemies.push(u);
    bossUnit = u;
    layoutUnit(u);
    nextBossUltAt = performance.now() + balBossUltMs();
    updateKillHud();
    el.hudStatus.textContent = "BIG BOSS 出現！";
    playZapSfx();
    if (stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 8) {
      if (!activePrompt) rollNextPrompt(false);
      updateSentenceBubble();
    }
    return true;
  }

  function maybeSpawnBoss() {
    /* ytdbc50 knife⑤: queue 細→中→大 by Easy/Hard counts; gate by kills */
    if (bossQueueIdx < bossQueue.length) {
      if (anyBossTierAlive()) return;
      if (smallKills < nextBossGateKills) return;
      const kind = bossQueue[bossQueueIdx];
      let ok = false;
      if (kind === "small") ok = spawnSmallBoss();
      else if (kind === "mid") ok = spawnMidBoss();
      else if (kind === "big") ok = spawnBigBoss();
      if (ok) {
        bossQueueIdx += 1;
        const step = bossWaveCfg().step;
        nextBossGateKills = smallKills + step;
        updateKillHud();
      }
      return;
    }
    /* quota done — trash only after BIG（唔再無限中 BOSS） */
  }

  function showBossUltFlash() {
    if (!el.bossUltFlash) {
      showUltFlash();
      if (el.ultFlash) {
        const lab = el.ultFlash.querySelector(".ult-label");
        if (lab) lab.textContent = "BOSS 大招！";
        setTimeout(() => {
          if (lab) lab.textContent = "大招！";
        }, 950);
      }
      return;
    }
    el.bossUltFlash.classList.add("hidden");
    void el.bossUltFlash.offsetWidth;
    el.bossUltFlash.classList.remove("hidden");
    clearTimeout(showBossUltFlash._t);
    showBossUltFlash._t = setTimeout(() => {
      if (el.bossUltFlash) el.bossUltFlash.classList.add("hidden");
    }, 950);
  }

  function bossRangePct() {
    /* knife#1: horizontal attack range = 1/4 of battle screen width → 25 x% */
    return BOSS_RANGE_FRAC * 100;
  }

  function alliesInBossRange(boss) {
    if (!boss) return [];
    const r = bossRangePct();
    return allies.filter((a) => a.alive && Math.abs(a.x - boss.x) <= r);
  }

  function applyBossStrike(targets, reason) {
    /* knife#2: one strike → ≤3 allies × ceil(maxHp/3) each. NOT 3 hits to kill one unit. */
    const n = Math.min(BOSS_ULT_ALLY_RANGE, targets.length);
    const hit = targets.slice(0, n);
    hit.forEach((a) => {
      const base = a.maxHp || a.hp;
      const dmg = Math.max(1, Math.ceil(base / BOSS_ULT_ALLY_FRAC));
      a.hp -= dmg;
      if (a.el) a.el.classList.add("ult-zap");
      layoutUnit(a);
      if (a.hp <= 0) killUnit(a, reason || "bossUlt");
    });
    return hit.length;
  }

  function fireBossUlt() {
    if (!bossUnit || !bossUnit.alive || over) return;
    playZapSfx();
    showBossUltFlash();
    /* ytdbc21: only allies within 1/4 screen; ≤3 × 1/3 HP; no tower dmg */
    const inRange = alliesInBossRange(bossUnit);
    for (let i = inRange.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = inRange[i];
      inRange[i] = inRange[j];
      inRange[j] = tmp;
    }
    const nHit = applyBossStrike(inRange, "bossUlt");
    if (nHit > 0 && inRange[0]) spawnFightCloudBetween(bossUnit, inRange[0]);
    el.hudStatus.textContent =
      nHit > 0
        ? "BOSS 大招！打中 " + nHit + " 隻友軍（各扣⅓）"
        : "BOSS 大招！射程內無友軍";
  }

  function killUnit(u, reason) {
    if (!u.alive) return;
    reason = reason || "other";
    u.alive = false;
    /* ytdbc50 knife④: 死咗即清攻擊／對戰，唔留透明打人 */
    u.atk = 0;
    u.speed = 0;
    u.sieging = false;
    if (u.fighting) {
      const opp = u.fighting;
      if (opp && opp.fighting === u) opp.fighting = null;
      u.fighting = null;
    }
    if (u.el) {
      u.el.classList.remove("walking", "fighting", "hit");
      u.el.classList.add("boom", "dead");
      u.el.style.pointerEvents = "none";
    }
    sfxBoom();
    if (u.el) {
      const dying = u;
      setTimeout(() => {
        if (dying.el) {
          dying.el.remove();
          dying.el = null;
        }
        if (dying.side === "ally") allies = allies.filter((x) => x !== dying);
        else enemies = enemies.filter((x) => x !== dying);
      }, 260);
    }
    if (u.isBoss) {
      if (u.isSmallBoss) {
        smallBossUnit = null;
        if (reason === "combat" || reason === "ult") {
          enemyHp = Math.max(0, enemyHp - 6);
          setHud();
          el.hudStatus.textContent = "細 BOSS 倒下！";
          if (enemyHp <= 0) endGame(true, "tower");
        }
        maybeSpawnBoss();
        return;
      }
      if (u.isMidBoss) {
        midBossUnit = null;
        /* mid 死唔觸發 win；chip 敵塔後繼續 */
        if (reason === "combat" || reason === "ult") {
          enemyHp = Math.max(0, enemyHp - 10);
          setHud();
          el.hudStatus.textContent = postBossWave
            ? "中怪倒下！小／中怪繼續"
            : "中 BOSS 倒下！繼續（大 BOSS 尚待）";
          if (enemyHp <= 0) endGame(true, "tower");
        }
        maybeSpawnBoss();
        return;
      }
      bossUnit = null;
      /* ytdbc21 knife#6 + ytdbc48 knife②: boss kill alone does NOT clear;
         keep spawning small/mid until player tower OR enemy tower HP = 0 */
      postBossWave = true;
      nextPostMidAt = smallKills + MID_BOSS_KILL_NEED;
      if (reason === "combat" || reason === "ult") {
        enemyHp = Math.max(0, enemyHp - 15);
        setHud();
        el.hudStatus.textContent = "BOSS 倒下！小怪繼續 · 打敵塔通關";
        if (enemyHp <= 0) endGame(true, "tower");
      }
      updateKillHud();
      maybeSpawnBoss();
      return;
    }
    if (u.side === "enemy" && (reason === "combat" || reason === "ult")) {
      smallKills += 1;
      updateKillHud();
      maybeSpawnBoss();
      if (reason === "combat") onEnemyCombatKill();
    }
    if (u.side === "ally" && reason === "combat") {
      resetKillStreak();
    }
    if (u.side === "enemy") updateSentenceBubble();
  }

  function hitTower(side, dmg) {
    if (side === "ally") {
      enemyHp -= dmg;
    } else {
      playerHp -= dmg;
    }
    sfxTower();
    setHud();
    if (playerHp <= 0) endGame(false);
    else if (enemyHp <= 0) endGame(true, "tower");
  }

  /* ---- Combat ---- */
  function overlap(a, b) {
    const { usable } = laneUsable();
    /* ytdbc48 knife③: mutual engage = body overlap for ALL (incl. BOSS).
       Boss ¼-screen strike kept in alliesInBossRange / runBossStrike / fireBossUlt. */
    const wa = unitPixelW(a) * 0.55;
    const wb = unitPixelW(b) * 0.55;
    const half = ((wa + wb) / 2 / usable) * 100;
    return Math.abs(a.x - b.x) < half * 2;
  }

  function tickCombat(dt) {
    allies.forEach((a) => {
      if (!a.alive) return;
      if (a.fighting && (!a.fighting.alive || !overlap(a, a.fighting)))
        a.fighting = null;
    });
    enemies.forEach((e) => {
      if (!e.alive) return;
      if (e.fighting && (!e.fighting.alive || !overlap(e, e.fighting)))
        e.fighting = null;
    });

    for (const a of allies) {
      if (!a.alive || a.fighting) continue;
      for (const e of enemies) {
        if (!e.alive || e.fighting) continue;
        if (overlap(a, e)) {
          a.fighting = e;
          e.fighting = a;
          setUnitAnim(a);
          setUnitAnim(e);
          break;
        }
      }
    }

    const dpsScale = 1;
    const now = performance.now();
    /* Boss discrete strike: ≤3 allies in 1/4 range × 1/3 HP (not continuous melt) */
    function runBossStrike(bu) {
      if (!bu || !bu.alive) return;
      if (!bu.nextStrikeAt) bu.nextStrikeAt = now + balBossStrikeMs();
      if (now >= bu.nextStrikeAt) {
        const inRange = alliesInBossRange(bu);
        if (inRange.length) {
          for (let i = inRange.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = inRange[i];
            inRange[i] = inRange[j];
            inRange[j] = tmp;
          }
          applyBossStrike(inRange, "combat");
          sfxHit();
          if (inRange[0]) spawnFightCloudBetween(bu, inRange[0]);
        }
        bu.nextStrikeAt = now + balBossStrikeMs();
      }
    }
    runBossStrike(midBossUnit);
    runBossStrike(bossUnit);

    for (const a of allies) {
      if (!a.alive || !a.atk || !a.fighting || !a.fighting.alive) continue;
      const e = a.fighting;
      e.hp -= (a.atk || 0) * dpsScale * dt;
      /* non-boss enemy still deals continuous DPS; boss damage handled above */
      if (!e.isBoss && e.alive && (e.atk || 0) > 0) {
        a.hp -= e.atk * dpsScale * dt;
      }
      if (a.el) a.el.classList.add("hit");
      if (e.el) e.el.classList.add("hit");
      sfxHit();
      spawnFightCloudBetween(a, e);
      const hitA = a.el;
      const hitE = e.el;
      setTimeout(() => {
        if (hitA) hitA.classList.remove("hit");
        if (hitE) hitE.classList.remove("hit");
      }, 80);
      layoutUnit(a);
      layoutUnit(e);
      if (e.hp <= 0) killUnit(e, "combat");
      if (a.hp <= 0) killUnit(a, "combat");
    }
  }

  function tickMove(dt) {
    const { usable } = laneUsable();
    const allySp = (ALLY_SPEED * dt * 100) / usable;

    for (const a of allies) {
      if (!a.alive) continue;
      if (a.fighting) {
        a.sieging = false;
        setUnitAnim(a);
        continue;
      }
      /* ytdbc65 ①: park at enemy tower — keep draining; do NOT die on reach */
      if (a.sieging || a.x >= 96) {
        a.x = 96;
        a.sieging = true;
        setUnitAnim(a);
        layoutUnit(a);
        if (!a.alive || !(a.atk > 0)) continue;
        const dps = a.atk || TOWER_DMG;
        enemyHp -= dps * dt;
        const now = performance.now();
        if (!a._lastTowerFxAt || now - a._lastTowerFxAt > 420) {
          a._lastTowerFxAt = now;
          spawnTowerAtkFx(a);
          sfxTower();
        }
        setHud();
        if (enemyHp <= 0) endGame(true, "tower");
        continue;
      }
      a.x += allySp;
      if (a.x >= 96) {
        a.x = 96;
        a.sieging = true;
        layoutUnit(a);
      } else layoutUnit(a);
    }
    for (const e of enemies) {
      if (!e.alive) continue;
      if (e.fighting) {
        e.sieging = false;
        setUnitAnim(e);
        continue;
      }
      /* ytdbc16b: park at tower and keep draining until tower HP gone → GO */
      if (e.sieging || e.x <= 4) {
        e.x = 4;
        e.sieging = true;
        setUnitAnim(e);
        layoutUnit(e);
        if (!e.alive || !(e.atk > 0)) continue;
        const dps = e.isBoss
          ? Math.max(
              (e.atk || ENEMY.atk) * ((e.bossDef && e.bossDef.atkMult) || 1),
              BOSS_TOWER_DMG * 0.35
            )
          : e.atk || ENEMY.atk;
        playerHp -= dps * dt;
        const now = performance.now();
        if (now - siegeSfxAt > 280) {
          siegeSfxAt = now;
          sfxTower();
        }
        setHud();
        if (playerHp <= 0) endGame(false);
        continue;
      }
      const enemySp = ((e.speed || ENEMY.speed) * dt * 100) / usable;
      e.x -= enemySp;
      if (e.x <= 4) {
        e.x = 4;
        e.sieging = true;
        layoutUnit(e);
      } else layoutUnit(e);
    }
  }

  /* ytdbc48 knife④ PENDING: bg moving fx (volcano/stars/bugs) — art SAMPLE first; do not wire yet */
  function tick(ts) {
    if (!battleOn || over) return;
    if (!lastTs) lastTs = ts;
    /* ytdbc41: wall dt × gameSpeed → combat／move／energy；spawn／boss cadence ÷ speed */
    const rawDt = Math.min(0.05, (ts - lastTs) / 1000);
    const dt = rawDt * Math.max(0.25, gameSpeed);
    lastTs = ts;

    energy = Math.min(ENERGY_MAX, energy + balEnergyRegen() * dt);
    setEnergyHud();

    if (ts >= nextEnemyAt) {
      if (spawnEnemy()) nextEnemyAt = ts + balSpawnMs();
      else nextEnemyAt = ts + Math.max(200, 800 / Math.max(0.25, gameSpeed));
    }

    if (bossUnit && bossUnit.alive && ts >= nextBossUltAt) {
      fireBossUlt();
      nextBossUltAt = ts + balBossUltMs();
    }

    tickCombat(dt);
    tickMove(dt);

    if (Math.floor(ts / 250) !== Math.floor((ts - dt * 1000) / 250)) {
      renderDeckGrid(ts);
    }

    requestAnimationFrame(tick);
  }


  /* ---- Cloze prompt queue (stage2 + stage3) · ytdbc60 fair 3-sentence ---- */
  function sentenceBankTag() {
    if (stageMode === 5) return "chengyu";
    if (stageMode === 8) return "stage8";
    return "vocab";
  }
  function variantsForCardId(id) {
    const v = sentencesByCardId[id];
    if (!v) return [];
    return Array.isArray(v) ? v : [v];
  }
  function sentenceLookup(id) {
    /* ytdbc18: active bank only — chengyu ids 1–15 overlap vocab; never prefer chengyu globally */
    const vars = variantsForCardId(id);
    return vars.length ? vars[0] : null;
  }
  function copySentence(src) {
    if (!src) return null;
    return {
      card_id: src.card_id,
      word: src.word,
      sentence: src.sentence,
      answer: src.answer,
      hint: src.hint || "",
      accept: (src.accept || []).slice(),
      variant: src.variant || "",
      meaning: src.meaning || "",
      pinyin: src.pinyin || "",
    };
  }
  function useKeyForVariant(cardId, variant, idx) {
    const v = variant || ("i" + idx);
    return sentenceBankTag() + ":" + cardId + ":" + v;
  }
  /** Equal-frequency pick among variants for one word（最低次數優先＋同分 random） */
  function pickFairVariant(cardId) {
    const vars = variantsForCardId(cardId);
    if (!vars.length) return null;
    let min = Infinity;
    const scored = vars.map((s, idx) => {
      const key = useKeyForVariant(cardId, s.variant, idx);
      const n = sentenceUseCounts[key] || 0;
      if (n < min) min = n;
      return { s: s, idx: idx, n: n, key: key };
    });
    const pool = scored.filter((x) => x.n === min);
    const choice = pool[Math.floor(Math.random() * pool.length)];
    sentenceUseCounts[choice.key] = (sentenceUseCounts[choice.key] || 0) + 1;
    saveSentenceUse();
    return copySentence(choice.s);
  }
  function hasSentence(id) {
    return variantsForCardId(id).length > 0;
  }
  function pickSentenceForDeck() {
    const ids = deck.map((c) => c.id).filter((id) => hasSentence(id));
    if (!ids.length) return null;
    const id = ids[Math.floor(Math.random() * ids.length)];
    return pickFairVariant(id);
  }
  function clozePromptIds() {
    if (stageMode === 5) {
      return deck.map((c) => c.id).filter((id) => hasSentence(id));
    }
    if (stageMode === 4) {
      return pool
        .filter((c) => isCombatPickable(c))
        .map((c) => c.id)
        .filter((id) => hasSentence(id));
    }
    /* S3／S8: deck（S8＝stage8_sentences card_ids） */
    return deck.map((c) => c.id).filter((id) => hasSentence(id));
  }

  function leftmostUnsolvedEnemy() {
    let best = null;
    enemies.forEach((e) => {
      if (!e.alive || e.isBoss || e.solved || !e.sentence) return;
      if (!best || e.x < best.x) best = e;
    });
    return best;
  }

  /** Prefer unsolved small-enemy sentence (stage2); else random from cloze pool */
  function rollNextPrompt(preferEnemy) {
    if (stageMode !== 3 && stageMode !== 4 && stageMode !== 5 && stageMode !== 8) {
      activePrompt = null;
      focusEnemyRef = null;
      return null;
    }
    if (preferEnemy && stageMode === 3) {
      const best = leftmostUnsolvedEnemy();
      if (best) {
        focusEnemyRef = best;
        activePrompt = {
          card_id: best.card_id,
          sentence: best.sentence,
          enemy: best,
        };
        return activePrompt;
      }
      /* Wait for first small spawn before free-rolling; once fighting / BOSS, always have a prompt */
      const anySmallAlive = enemies.some((e) => e.alive && !e.isBoss);
      if (!bossSpawned && !anySmallAlive && enemies.length === 0) {
        activePrompt = null;
        focusEnemyRef = null;
        return null;
      }
    }
    const ids = clozePromptIds();
    if (!ids.length) {
      activePrompt = null;
      focusEnemyRef = null;
      return null;
    }
    const id = ids[Math.floor(Math.random() * ids.length)];
    const sent = pickFairVariant(id);
    if (!sent) {
      activePrompt = null;
      focusEnemyRef = null;
      return null;
    }
    /* ytdbc18: card art + bubble + answer all keyed off sentence.card_id */
    const cardId = sent.card_id != null ? sent.card_id : id;
    focusEnemyRef = null;
    activePrompt = { card_id: cardId, sentence: sent, enemy: null };
    return activePrompt;
  }

  function ensureActivePrompt() {
    if (stageMode !== 3 && stageMode !== 4 && stageMode !== 5 && stageMode !== 8) {
      activePrompt = null;
      return null;
    }
    if (activePrompt) {
      /* ytdbc50 knife②: 未答唔換題 — 敵死／solved 只脫鉤，保留同一句 */
      if (
        activePrompt.enemy &&
        (!activePrompt.enemy.alive || activePrompt.enemy.solved)
      ) {
        activePrompt.enemy = null;
        focusEnemyRef = null;
      }
      return activePrompt;
    }
    return rollNextPrompt(stageMode === 3);
  }

  function getFocusEnemy() {
    /* legacy helper — prefer enemy linked to activePrompt */
    if (stageMode !== 3) return null;
    ensureActivePrompt();
    if (activePrompt && activePrompt.enemy) return activePrompt.enemy;
    return leftmostUnsolvedEnemy();
  }

  function formatSentenceHtml(sentence) {
    const raw = String((sentence && sentence.sentence) || "");
    const parts = raw.split("____");
    if (parts.length === 1) return escapeHtml(raw);
    let out = "";
    parts.forEach((part, i) => {
      out += escapeHtml(part);
      if (i < parts.length - 1) out += '<span class="blank">____</span>';
    });
    return out;
  }

  function cardForPrompt(prompt) {
    if (!prompt) return null;
    if (stageMode === 5) {
      return (
        deck.find((c) => c.id === prompt.card_id) ||
        chengyuPool.find((c) => c.id === prompt.card_id) ||
        null
      );
    }
    return (
      deck.find((c) => c.id === prompt.card_id) ||
      pool.find((c) => c.id === prompt.card_id) ||
      null
    );
  }

  /* ytdbc76: S7 以前用 innerHTML 整段換掉 bubble，會拆走 #sentence-text／#sentence-hint；
     之後 S4／S3／S5／S8 寫入已 detach 嘅 cache → 頂欄仍顯示「聽音寫詞」。
     呢度保證 cloze DOM 結構同 index.html 一致，並重綁 peek。 */
  const CLOZE_BUBBLE_HTML =
    '<div class="sb-row">' +
    '<img id="prompt-card-thumb" class="prompt-card-thumb hidden" alt="" draggable="false" data-ytdbc63="s3-card-s4-text" />' +
    '<div class="sb-body">' +
    '<div class="sb-label">造句</div>' +
    '<div id="sentence-text" class="sb-text"></div>' +
    '<div id="sentence-hint" class="sb-hint"></div>' +
    '<div id="answer-peek-wrap" class="answer-peek-wrap hidden">' +
    '<button type="button" id="btn-answer-peek" class="btn-answer-peek">睇答案</button>' +
    '<span class="answer-peek-cost" aria-hidden="true">扣塔血</span>' +
    "</div></div></div>";

  function ensureClozeBubbleDom() {
    if (!el.sentenceBubble) return false;
    let liveText = el.sentenceBubble.querySelector("#sentence-text");
    if (liveText && document.contains(liveText)) {
      el.sentenceText = liveText;
      el.sentenceHint = el.sentenceBubble.querySelector("#sentence-hint");
      const thumb = el.sentenceBubble.querySelector("#prompt-card-thumb");
      if (thumb) el.promptCardThumb = thumb;
      el.answerPeekWrap = el.sentenceBubble.querySelector("#answer-peek-wrap");
      const peekBtn = el.sentenceBubble.querySelector("#btn-answer-peek");
      if (peekBtn && peekBtn !== el.btnAnswerPeek) {
        el.btnAnswerPeek = peekBtn;
        el.btnAnswerPeek.addEventListener("click", peekClozeAnswer);
      } else if (peekBtn) {
        el.btnAnswerPeek = peekBtn;
      }
      const lab = el.sentenceBubble.querySelector(".sb-label");
      if (lab) lab.textContent = "造句";
      return true;
    }
    el.sentenceBubble.innerHTML = CLOZE_BUBBLE_HTML;
    el.sentenceText = document.getElementById("sentence-text");
    el.sentenceHint = document.getElementById("sentence-hint");
    el.promptCardThumb = document.getElementById("prompt-card-thumb");
    el.answerPeekWrap = document.getElementById("answer-peek-wrap");
    el.btnAnswerPeek = document.getElementById("btn-answer-peek");
    if (el.btnAnswerPeek) el.btnAnswerPeek.addEventListener("click", peekClozeAnswer);
    return !!(el.sentenceText);
  }

  function isDictationStage() {
    return stageMode === 7 || stageMode === 11 || stageMode === 12;
  }
  function activeDictationList() {
    if (stageMode === 11) return stage11DictationList;
    if (stageMode === 12) return stage12DictationList;
    return dictationList;
  }
  function refreshDictationChrome() {
    if (!el.sentenceBubble || !isDictationStage()) return;
    ensureClozeBubbleDom();
    el.promptCardThumb = document.getElementById("prompt-card-thumb") || el.promptCardThumb;
    wireDictationReplayTap(); /* ytdbc90: tap 圖卡／氣泡再聽普通話（user gesture） */
    el.sentenceBubble.classList.remove("hidden");
    /* ytdbc87 NIT A: 國語 TTS 同時顯示冇答案圖卡（唔再 hide promptCardThumb） */
    if (el.promptCardThumb) {
      const tip = selectedTip || null;
      const src = tip ? dictationPromptCardSrc(tip) : "";
      if (src) {
        el.promptCardThumb.src = src;
        el.promptCardThumb.alt = tip.word || tip.name || "";
        el.promptCardThumb.classList.remove("hidden");
      } else {
        el.promptCardThumb.classList.add("hidden");
        el.promptCardThumb.removeAttribute("src");
        el.promptCardThumb.alt = "";
      }
    }
    if (el.answerPeekWrap) el.answerPeekWrap.classList.add("hidden");
    const lab = el.sentenceBubble.querySelector(".sb-label");
    if (lab) {
      /* ytdbc91: S7 標「聽普通話寫詞」；S11／S12 照舊＋再聽提示 */
      lab.textContent =
        stageMode === 11
          ? "默書·理髮 · 撳圖卡／氣泡再聽"
          : stageMode === 12
            ? "默書·繁星 · 撳圖卡／氣泡再聽"
            : "默書·聽普通話寫詞 · 撳圖卡／氣泡再聽";
    }
    if (el.sentenceText) {
      el.sentenceText.textContent =
        stageMode === 11
          ? "🎧 聽普通話寫詞（第十一關·理髮大師）· 撳圖卡／氣泡再聽"
          : stageMode === 12
            ? "🎧 聽普通話寫詞（第十二關·繁星）· 撳圖卡／氣泡再聽"
            : "🎧 聽普通話寫詞（第七關·默書）· 撳圖卡／氣泡再聽";
    }
    const word = (selectedTip && selectedTip.word) || (activeDictation && activeDictation.word) || "";
    if (el.sentenceHint) {
      if (revealAnswers && word) {
        el.sentenceHint.style.display = "";
        el.sentenceHint.textContent = "答案：" + word;
      } else {
        el.sentenceHint.textContent = "";
        el.sentenceHint.style.display = "none";
      }
    }
  }

  function updateSentenceBubble() {
    if (!el.sentenceBubble) return;
    ensureClozeBubbleDom();
    enemies.forEach((e) => {
      if (!e.el) return;
      e.el.classList.remove("prompt-focus");
      if (e.solved && e.sentence) e.el.classList.add("prompt-solved");
    });
    if (stageMode !== 3 && stageMode !== 4 && stageMode !== 5 && stageMode !== 8) {
      el.sentenceBubble.classList.add("hidden");
      if (el.promptCardThumb) el.promptCardThumb.classList.add("hidden");
      return;
    }
    const lab = el.sentenceBubble.querySelector(".sb-label");
    if (lab) {
      /* ytdbc77: S4／S8＝填句；S3＝造句；S5＝成語 */
      if (stageMode === 4 || stageMode === 8) lab.textContent = "填句";
      else if (stageMode === 5) lab.textContent = "成語";
      else lab.textContent = "造句";
    }
    const prompt = ensureActivePrompt();
    if (!prompt || !prompt.sentence) {
      /* ytdbc77: S4／S8 唔准淨留關卡名＋空白寫字位 — 顯示失敗／重試 */
      if (stageMode === 4 || stageMode === 8) {
        el.sentenceBubble.classList.remove("hidden");
        if (el.promptCardThumb) el.promptCardThumb.classList.add("hidden");
        if (el.sentenceText) {
          el.sentenceText.textContent =
            stageMode === 8
              ? "句庫載入失敗／重試（第八關填句）"
              : "句庫載入失敗／重試（第四關填句）";
        }
        if (el.sentenceHint) {
          el.sentenceHint.textContent = "";
          el.sentenceHint.style.display = "none";
        }
        if (el.answerPeekWrap) el.answerPeekWrap.classList.add("hidden");
        return;
      }
      el.sentenceBubble.classList.add("hidden");
      if (el.promptCardThumb) el.promptCardThumb.classList.add("hidden");
      return;
    }
    if (prompt.enemy && prompt.enemy.el) {
      prompt.enemy.el.classList.add("prompt-focus");
    }
    el.sentenceBubble.classList.remove("hidden");
    if (el.sentenceText) el.sentenceText.innerHTML = formatSentenceHtml(prompt.sentence);
    if (el.sentenceHint) {
      const h = prompt.sentence.hint || "";
      el.sentenceHint.textContent = h ? "提示：" + h : "";
      el.sentenceHint.style.display = h ? "" : "none";
    }
    const tip = cardForPrompt(prompt);
    const pkey =
      String((prompt.sentence && (prompt.sentence.id || prompt.sentence.sentence)) || "") +
      "|" +
      String(prompt.card_id || "");
    if (pkey && pkey !== activePromptKey) {
      activePromptKey = pkey;
      resetAnswerPeek();
      /* ytdbc50 knife③：S1–5 答啱先播；出題唔播（S6 喺 pinyin prompt） */
    }
    if (el.promptCardThumb) {
      /* ytdbc62 Clar: S3 跟 S1／S2 — 提示卡出卡圖＋句子；只有 S4（＋S5 keep）淨文字 */
      if (stageMode === 3 && tip && tip.image) {
        el.promptCardThumb.src = assetCard(tip.image, tip);
        el.promptCardThumb.alt = tip.word || tip.name || "";
        el.promptCardThumb.classList.remove("hidden");
      } else {
        el.promptCardThumb.classList.add("hidden");
        el.promptCardThumb.removeAttribute("src");
        el.promptCardThumb.alt = "";
      }
    }
    /* ytdbc73: S4／S8 填句 — 內部跟 tip 對答案，唔 render 底左／底右圖 */
    if ((stageMode === 4 || stageMode === 8) && tip) {
      selectedTip = tip;
      renderSelPreview(null);
    } else if (stageMode !== 5 && tip && (!selectedTip || selectedTip.id !== tip.id)) {
      selectedTip = tip;
      renderSelPreview(selectedTip);
      renderDeckGrid(performance.now());
    }
    syncAnswerPeekBtn();
  }
  function afterClozeDeploySuccess(matched) {
    if (activePrompt && activePrompt.enemy) {
      const foc = activePrompt.enemy;
      foc.solved = true;
      if (foc.el) {
        foc.el.classList.remove("prompt-focus");
        foc.el.classList.add("prompt-solved");
      }
    }
    activePrompt = null;
    focusEnemyRef = null;
    /* Always roll a new sentence for the next deploy (incl. BOSS phase) */
    rollNextPrompt(stageMode === 3);
    if (stageMode === 8 && (!activePrompt || !activePrompt.sentence)) {
      forceStage8PromptFromList();
    }
    if (stageMode === 4 && (!activePrompt || !activePrompt.sentence)) {
      forceStage4PromptFromList();
    }
    updateSentenceBubble();
    if (stageMode !== 4 && stageMode !== 8) renderDeckGrid(performance.now());
  }

  /* ---- Stage5 pinyin MC (ytdbc18) ---- */
  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  function rollNextPinyinPrompt() {
    if (!stage5Pool.length) {
      activePrompt = null;
      return null;
    }
    const card = stage5Pool[Math.floor(Math.random() * stage5Pool.length)];
    const opts = shuffleInPlace((card.options || []).slice());
    activePrompt = {
      card_id: card.id,
      card: card,
      options: opts,
      answer: card.answer || card.pinyin,
      enemy: null,
    };
    return activePrompt;
  }

  function updatePinyinPrompt() {
    if (!el.pinyinPane) return;
    if (stageMode !== 6) {
      el.pinyinPane.classList.add("hidden");
      return;
    }
    el.pinyinPane.classList.remove("hidden");
    const prompt = activePrompt && activePrompt.card ? activePrompt : rollNextPinyinPrompt();
    if (!prompt || !prompt.card) {
      if (el.pinyinHanzi) el.pinyinHanzi.textContent = "—";
      if (el.pinyinMeaning) el.pinyinMeaning.textContent = "";
      if (el.pinyinBtns) el.pinyinBtns.innerHTML = "";
      return;
    }
    const card = prompt.card;
    if (el.pinyinHanzi) el.pinyinHanzi.textContent = card.word || "—";
    if (el.pinyinMeaning) {
      el.pinyinMeaning.textContent = card.meaning || "";
    }
    if (el.pinyinBtns) {
      el.pinyinBtns.innerHTML = "";
      (prompt.options || []).forEach((opt) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn pinyin-opt";
        btn.textContent = opt;
        btn.addEventListener("click", () => tryPinyinPick(opt));
        el.pinyinBtns.appendChild(btn);
      });
    }
    /* ytdbc50 knife③: STAGE6 出題即讀國語 */
    const pkey6 = "py|" + String(card.id) + "|" + String(card.word || "");
    if (pkey6 !== activePromptKey) {
      activePromptKey = pkey6;
      if (card.word) speakMandarinWord(card.word);
    }
  }

  function tryPinyinPick(opt) {
    if (over || !battleOn || stageMode !== 6) return;
    const prompt = activePrompt;
    if (!prompt || !prompt.card) {
      rollNextPinyinPrompt();
      updatePinyinPrompt();
      return;
    }
    const card = prompt.card;
    const ans = String(prompt.answer || card.answer || card.pinyin || "").trim();
    if (String(opt || "").trim() !== ans) {
      sfxWrongReject();
      if (el.pinyinBtns) {
        el.pinyinBtns.classList.add("shake");
        setTimeout(() => el.pinyinBtns.classList.remove("shake"), 320);
      }
      energy = Math.max(0, energy - STAGE5_WRONG_ENERGY);
      setEnergyHud();
      el.hudStatus.textContent = "拼音唔啱 · 能量 −" + STAGE5_WRONG_ENERGY;
      return;
    }
    const cost = energyCost(card);
    if (energy < cost) {
      el.hudStatus.textContent = "能量不足（要 " + cost + "）";
      return;
    }
    const now = performance.now();
    if (deployCdMs() > 0 && (cdUntil[card.id] || 0) > now) {
      el.hudStatus.textContent = "冷卻中…";
      return;
    }
    if (!spawnAlly(card)) return;
    energy = Math.max(0, energy - cost);
    setEnergyHud();
    bumpSuccess(card.id);
    const cdMs5 = deployCdMs();
    if (cdMs5 > 0) cdUntil[card.id] = now + cdMs5;
    sfxDeploy();
    /* ytdbc50 knife③: S6 已喺出題讀；答啱唔重複 */
    onDeploySuccess();
    activePrompt = null;
    rollNextPinyinPrompt();
    updatePinyinPrompt();
    el.hudStatus.textContent = mergeSpawnHud(
      "出擊！" + card.word + " · ATK " + statsForCard(card).atk +
      (deployStreak > 0 ? " · 連中 " + deployStreak : "")
    );
  }

  function skipPinyinPrompt() {
    if (over || !battleOn || stageMode !== 6) return;
    activePrompt = null;
    rollNextPinyinPrompt();
    updatePinyinPrompt();
    el.hudStatus.textContent = "已 SKIP · 換下一題";
  }

    /* ---- Stage4 SKIP ---- */
  function skipPrompt() {
    if (stageMode === 6) {
      skipPinyinPrompt();
      return;
    }
    if (stageMode === 10) {
      skipReorderPrompt();
      return;
    }
    /* ytdbc63: Stage3＋Stage4＋Stage5 同 SKIP 語義（換下一題、唔罰）；S6 → skipPinyinPrompt */
    if (isDictationStage()) {
      if (over || !battleOn) return;
      clearAnswer();
      rollNextDictation();
      el.hudStatus.textContent = "已 SKIP · 換下一詞";
      return;
    }
    if (over || !battleOn || (stageMode !== 3 && stageMode !== 4 && stageMode !== 5 && stageMode !== 8)) return;
    activePrompt = null;
    focusEnemyRef = null;
    selectedTip = null;
    renderSelPreview(null);
    clearAnswer();
    rollNextPrompt(false);
    updateSentenceBubble();
    renderDeckGrid(performance.now());
    syncWritePadLayout();
    el.hudStatus.textContent = "已 SKIP · 換下一題";
  }

  /* ---- Deploy ---- */
  function tryDeploy(input) {
    if (over || !battleOn) return;
    const now = performance.now();
    let matched = null;
    const raw = String(input || "");
    const a = norm(raw);
    /* ytdbc70 S7／ytdbc85 S11 默書：對住 activeDictation／selectedTip 寫詞 */
    let s7Ok = false;
    if (isDictationStage()) {
      const tip = selectedTip;
      const d = activeDictation;
      const needWord = (d && d.word) || (tip && tip.word) || "";
      const needAccept =
        (d && Array.isArray(d.accept) && d.accept.length ? d.accept : null) ||
        (tip && tip.accept) ||
        [];
      if (!needWord) {
        el.hudStatus.textContent = "等下一詞…";
        return;
      }
      if (!matchWordExact(raw, needWord, needAccept)) {
        rejectWrong("字唔啱 · 唔出角式");
        return;
      }
      matched = tip || null;
      if (!matched) {
        el.hudStatus.textContent = "卡資料缺失";
        return;
      }
      s7Ok = true;
    }
    const cloze = !s7Ok && (stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 8);
    const prompt = cloze ? ensureActivePrompt() : null;

    if (cloze && prompt && prompt.sentence) {
      const needCard = cardForPrompt(prompt);
      const needWord =
        (needCard && needCard.word) ||
        prompt.sentence.answer ||
        prompt.sentence.word;
      const needAccept =
        (prompt.sentence.accept && prompt.sentence.accept.length
          ? prompt.sentence.accept
          : null) ||
        (needCard && needCard.accept) ||
        [];
      /* ytdbc73: S8 跟 S4 — 唔強制揀卡；只 S3／S5 要揀 */
      if ((stageMode === 3 || stageMode === 5) && !selectedTip) {
        rejectWrong(stageMode === 5 ? "先揀一張成語卡" : "先揀卡");
        return;
      }
      if ((stageMode === 3 || stageMode === 5) && selectedTip && selectedTip.id !== prompt.card_id) {
        rejectWrong(stageMode === 5 ? "揀返成語卡先寫" : "揀返造句對應嗰張卡");
        return;
      }
      /* ytdbc16b: 答案嚴謹 — exact only；字唔岩 → 唔出角式＋SFX＋打回選項 */
      const ok = matchWordExact(raw, needWord, needAccept);
      if (!ok) {
        rejectWrong(stageMode === 5 ? "成語字唔啱 · 唔出角式" : "字唔啱 · 唔出角式");
        return;
      }
      matched = needCard || selectedTip;
      if (!matched) {
        el.hudStatus.textContent = "卡資料缺失";
        return;
      }
    } else if (cloze && !prompt) {
      el.hudStatus.textContent =
        stageMode === 3
          ? "等敵人帶造句…"
          : stageMode === 5
            ? "載入成語句…"
            : "載入造句中…";
      el.answer.classList.add("shake");
      setTimeout(() => el.answer.classList.remove("shake"), 320);
      return;
    } else if (!s7Ok) {
      /* Stage1 write-any */
      const order = selectedTip
        ? [selectedTip].concat(deck.filter((c) => c.id !== selectedTip.id))
        : deck.slice();
      for (const c of order) {
        if (matchWordExact(raw, c.word, c.accept)) {
          matched = c;
          break;
        }
      }
      if (!matched) {
        for (const c of order) {
          if (matchWordSoft(raw, c.word, c.accept)) {
            matched = c;
            break;
          }
        }
      }
      if (!matched) {
        resetStreak("wrong");
        rejectWrong("唔啱 deck 詞 · 唔出角式");
        return;
      }
    }

    if (deployCdMs() > 0 && (cdUntil[matched.id] || 0) > now) {
      el.hudStatus.textContent = "冷卻中…";
      el.answer.classList.add("shake");
      setTimeout(() => el.answer.classList.remove("shake"), 320);
      return;
    }
    const cost = energyCost(matched);
    if (energy < cost) {
      el.hudStatus.textContent = "能量不足（要 " + cost + "）";
      el.answer.classList.add("shake");
      setTimeout(() => el.answer.classList.remove("shake"), 320);
      return;
    }
    if (!spawnAlly(matched)) {
      el.answer.classList.add("shake");
      setTimeout(() => el.answer.classList.remove("shake"), 320);
      return;
    }
    energy -= cost;
    setEnergyHud();
    const cdMs = deployCdMs();
    if (cdMs > 0) cdUntil[matched.id] = now + cdMs;
    bumpSuccess(matched.id);
    selectedTip = matched;
    el.answer.value = "";
    if (cloze) {
      /* ytdbc73: S4／S8 填句唔展示選卡預覽 */
      if (stageMode === 4 || stageMode === 8) renderSelPreview(null);
      else renderSelPreview(matched);
      afterClozeDeploySuccess(matched);
    } else if (isDictationStage()) {
      /* 默書：答啱後即換下一詞；唔留卡面泄題；唔 render 左欄 */
      rollNextDictation();
      if (el.deckGrid) el.deckGrid.innerHTML = "";
      renderSelPreview(null);
    } else {
      renderSelPreview(matched);
      renderDeckGrid(now);
    }
    onDeploySuccess();
    if (!isDictationStage() && matched && matched.word) speakMandarinWord(matched.word); /* ytdbc30 knife②；默書出題已讀 */
    if (deployStreak > 0) {
      el.hudStatus.textContent = mergeSpawnHud(
        "出擊！ATK " + statsForCard(matched).atk + " · 連中 " + deployStreak
      );
    } else {
      const base =
        el.hudStatus.textContent.indexOf("大招") >= 0
          ? el.hudStatus.textContent
          : "出擊！ATK " + statsForCard(matched).atk;
      el.hudStatus.textContent = mergeSpawnHud(base);
    }
  }

  function endGame(win, reason) {
    if (over) return;
    over = true;
    battleOn = false;
    ultReady = false;
    syncUltButton();
    winReason = reason || (win ? "tower" : null);
    if (win) {
      /* ytdbc21 knife#6: 通關必須扣哂敵塔 → 一定抽盲盒 */
      openBossBlindbox();
      return;
    }
    el.overlay.classList.remove("hidden");
    el.overlayTitle.textContent = "敗北…";
    el.overlayMsg.textContent =
      "我方塔能量歸零。再試一次！累計成功：" + success.total;
  }

  function nextStageAfterBlind() {
    postBossBlind = false;
    const next = stageMode + 1;
    if (next <= 6) {
      goPickStage(next);
    } else {
      goBoot();
    }
  }

  function openBossBlindbox() {
    postBossBlind = true;
    if (el.overlay) el.overlay.classList.add("hidden");
    if (el.app) el.app.classList.add("hidden");
    resetGachaUi();
    const title = document.querySelector(".gacha-title");
    if (title) title.textContent = "通關盲盒！";
    if (el.gachaHint) {
      el.gachaHint.textContent = "敵塔清空！抽一次盲盒角式 → 自動下一關";
    }
    if (el.btnGachaAgain) {
      el.btnGachaAgain.classList.add("hidden");
      el.btnGachaAgain.textContent = "下一關";
    }
    if (el.btnGachaClose) {
      el.btnGachaClose.textContent = "跳過 · 下一關";
    }
    if (el.btnGachaPull) {
      el.btnGachaPull.classList.remove("hidden");
      el.btnGachaPull.textContent = "抽盲盒！";
    }
    showOnly("gacha");
    sfxBlindOpen();
  }

  /* ---- Write UX: Pencil (Scribble) default / 鍵盤 toggle ---- */
  let inputMode = "pencil"; /* "pencil" | "keyboard" */

  function isWritePadArmed() {
    /* 寫字 dock 已可見先 focus，避免開機畫面搶 focus */
    const dock = el.writeDock || document.getElementById("write-dock");
    if (!dock || dock.classList.contains("hidden")) return false;
    const app = el.app || document.getElementById("app");
    if (!app || app.classList.contains("hidden")) return false;
    try {
      if (typeof window.getComputedStyle === "function") {
        const st = window.getComputedStyle(dock);
        if (st && (st.display === "none" || st.visibility === "hidden")) return false;
      }
    } catch (_) {}
    return true;
  }


  function focusAnswerForScribble() {
    if (!el.answer || inputMode !== "pencil") return;
    el.answer.setAttribute("inputmode", "none");
    try {
      el.answer.focus({ preventScroll: true });
    } catch (_) {
      el.answer.focus();
    }
  }


  function syncInputModeUi() {
    const pencil = inputMode === "pencil";
    if (el.btnModePencil) {
      el.btnModePencil.classList.toggle("is-on", pencil);
      el.btnModePencil.setAttribute("aria-pressed", pencil ? "true" : "false");
    }
    if (el.btnModeKb) {
      el.btnModeKb.classList.toggle("is-on", !pencil);
      el.btnModeKb.setAttribute("aria-pressed", !pencil ? "true" : "false");
    }
    if (!el.answer) return;
    if (pencil) {
      /* ytdbc93: Scribble 穩定性靠 focused textarea + inputmode=none（鍵盤唔彈）。
         唔好每次 sync 都 blur()——會令 Pencil 寫到一半失焦、筆畫唔入紙。
         只喺由鍵盤模式切走時先 blur 收鍵盤，再 focus 返寫字位。 */
      const wasTextMode = el.answer.getAttribute("inputmode") !== "none";
      const hadFocus = document.activeElement === el.answer;
      el.answer.setAttribute("inputmode", "none");
      if (wasTextMode && hadFocus) {
        el.answer.blur();
        window.requestAnimationFrame(() => {
          if (inputMode !== "pencil") return;
          focusAnswerForScribble();
        });
      }
    } else {
      el.answer.setAttribute("inputmode", "text");
    }
  }

  function setInputMode(mode) {
    inputMode = mode === "keyboard" ? "keyboard" : "pencil";
    syncInputModeUi();
    if (!el.answer) return;
    if (inputMode === "keyboard") {
      el.answer.focus();
    } else if (isWritePadArmed()) {
      /* 開戰／切返 Pencil：inputmode=none 之下 focus，等 Scribble 有目標、鍵盤保持收起 */
      focusAnswerForScribble();
    }
  }

  function clearAnswer() {
    /* 清全部 — wipe pad */
    if (el.answer) el.answer.value = "";
  }

  function clearLastChar() {
    /* 清一字 — drop last Unicode scalar（CJK／合成字 Array.from） */
    if (!el.answer) return;
    const chars = Array.from(el.answer.value);
    if (!chars.length) return;
    chars.pop();
    el.answer.value = chars.join("");
  }

  function bindWriteUi() {
    syncInputModeUi();
    if (el.clearInk) {
      el.clearInk.addEventListener("click", clearAnswer);
    }
    if (el.clearOne) {
      el.clearOne.addEventListener("click", clearLastChar);
    }
    if (el.btnModePencil) {
      el.btnModePencil.addEventListener("click", () => setInputMode("pencil"));
    }
    if (el.btnModeKb) {
      el.btnModeKb.addEventListener("click", () => setInputMode("keyboard"));
    }
    /* Pencil：保持 inputmode=none；允許 focus（Scribble 要有焦點）。唔 preventDefault，以免食筆畫。 */
    if (el.answer) {
      el.answer.addEventListener("focus", () => {
        if (inputMode === "pencil") {
          /* iOS may still focus for Scribble — keep inputmode=none, do not switch, do not blur */
          el.answer.setAttribute("inputmode", "none");
        }
      });
      el.answer.addEventListener(
        "pointerdown",
        () => {
          if (inputMode === "pencil") {
            el.answer.setAttribute("inputmode", "none");
          }
        },
        { passive: true }
      );
    }
  }

  /* ---- BGM optional (stage1 Happy Vibes; stage2/3 pack) ---- */
  let bgm = null;
  let bgmMuted = false;
  let bgmSrc = null;
  function bgmPathForStage() {
    if (stageMode === 6 || stageMode === 5 || stageMode === 4 || stageMode === 8 || stageMode === 10) return "sfx/bgm_stage3.mp3?v=" + V;
    if (stageMode === 3) return "sfx/bgm_stage2.mp3?v=" + V;
    return "sfx/bgm.mp3?v=" + V; /* S1 + S2 exam */
  }
  function ensureBattleChrome() {
    /* ytdbc20: HOME 左上、BGM 右上 — 唔再 overlap；只喺對戰顯示 */
    let home = document.getElementById("btn-home");
    if (!home) {
      home = document.createElement("button");
      home.id = "btn-home";
      home.type = "button";
      home.className = "btn ghost btn-home";
      home.textContent = "HOME";
      home.title = "返回開機";
      document.body.appendChild(home);
      home.addEventListener("click", () => {
        if (bgm) {
          try { bgm.pause(); } catch (_) {}
        }
        backToPick();
      });
    }
    home.classList.remove("hidden");
    let btn = document.getElementById("btn-bgm");
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "btn-bgm";
      btn.type = "button";
      btn.className = "btn ghost btn-bgm";
      document.body.appendChild(btn);
      btn.addEventListener("click", () => {
        bgmMuted = !bgmMuted;
        if (bgm) bgm.muted = bgmMuted;
        btn.textContent = bgmMuted ? "BGM 開" : "BGM 靜音";
        if (!bgmMuted && bgm) bgm.play().catch(() => {});
      });
    }
    btn.classList.remove("hidden");
    btn.textContent = bgmMuted ? "BGM 開" : "BGM 靜音";
  }
  function hideBattleChrome() {
    const home = document.getElementById("btn-home");
    const btn = document.getElementById("btn-bgm");
    if (home) home.classList.add("hidden");
    if (btn) btn.classList.add("hidden");
  }
  function ensureBgm() {
    const src = bgmPathForStage();
    if (!bgm || bgmSrc !== src) {
      if (bgm) {
        try { bgm.pause(); } catch (_) {}
      }
      bgm = new Audio(src);
      bgm.loop = true;
      bgm.volume = 0.4;
      bgmSrc = src;
    }
    ensureBattleChrome();
    const btn = document.getElementById("btn-bgm");
    if (btn) btn.textContent = bgmMuted ? "BGM 開" : "BGM 靜音";
    bgm.muted = bgmMuted;
    bgm.play().catch(() => {});
  }


  /* ---- Boot / Gallery / Gacha ---- */
  function showOnly(which) {
    const map = {
      boot: el.bootScreen,
      pick: el.pickScreen,
      gallery: el.galleryScreen,
      gacha: el.gachaScreen,
      app: el.app,
    };
    Object.keys(map).forEach((k) => {
      const node = map[k];
      if (!node) return;
      if (k === which) node.classList.remove("hidden");
      else node.classList.add("hidden");
    });
  }
  function goBoot() {
    battleOn = false;
    hideBattleChrome();
    if (bgm) {
      try { bgm.pause(); } catch (_) {}
    }
    showOnly("boot");
  }
  function goPick() {
    showOnly("pick");
    renderPick();
  }
  function goPickStage(mode) {
    /* ytdbc30 remap: 1 Fuji · 2 exam · 3 造句 · 4 全庫 · 5 成語 · 6 拼音 · ytdbc70: 7 默書 · ytdbc72: 8 圖二＋十課 · ytdbc83 soft: 10 重組（無 S9） */
    /* ytdbc35: S2 pick exactly 10 from id55–103 (same UX as S1) */
    const m = Number(mode) || 1;
    if (m === 10) {
      stageMode = 10;
      startStage10();
      return;
    }
    if (m === 11) {
      stageMode = 11;
      startStage11();
      return;
    }
    if (m === 12) {
      stageMode = 12;
      startStage12();
      return;
    }
    stageMode = m >= 1 && m <= 8 ? m : 1;
    if (stageMode === 2) {
      goPick();
      return;
    }
    if (stageMode === 3) {
      /* 造句：選 10 張＋cloze（舊 S2 流程；檔 stage2_sentences keep） */
      goPick();
      return;
    }
    if (stageMode === 4) {
      startStage3(); /* 全庫造句；body 已 remap stageMode=4 */
      return;
    }
    if (stageMode === 5) {
      startStage4(); /* 成語 */
      return;
    }
    if (stageMode === 6) {
      startStage5(); /* 拼音 */
      return;
    }
    if (stageMode === 7) {
      startStage7(); /* 默書 · study BG */
      return;
    }
    if (stageMode === 8) {
      startStage8(); /* 圖二＋第十課填句 stage8_sentences */
      return;
    }
    goPick();
  }
  function seriesLogoPath(tab) {
    if (tab === "chengyu") return "assets/series_logos/logo_成語系.png";
    if (tab === "ciyu") return "assets/series_logos/logo_詞語系.png";
    if (tab === "special") return "assets/special_gallery/ui_tab_special.png";
    /* ytdbc87: 理髮／繁星 — 暫 reuse 詞語系 logo（獨立 tab；唔塞入 ciyu） */
    if (tab === "lifa" || tab === "fanxing") return "assets/series_logos/logo_詞語系.png";
    return "assets/series_logos/logo_拼音系.png";
  }
  function seriesLabel(tab) {
    if (tab === "chengyu") return "成語系";
    if (tab === "ciyu") return "詞語系";
    if (tab === "special") return "特別卡";
    if (tab === "lifa") return "理髮";
    if (tab === "fanxing") return "繁星";
    return "拼音系";
  }
  /* ytdbc87: 圖庫獨立系列 — S11 KEEP 300–331（32）；唔塞 ciyu */
  function galleryLifaCards() {
    const out = [];
    for (const w of stage11DictationList) {
      if (!w || !w.word) continue;
      const art = String(w.art || "");
      if (art.indexOf("REUSE") >= 0 || w.reuse_card_id != null) continue;
      const id = Number(w.id);
      if (!Number.isFinite(id) || id < 300 || id > 331) continue;
      out.push({
        id: id,
        word: w.word,
        image: "card_" + id + ".jpg",
        assetDir: "assets/s11_lifa/",
        meaning: w.meaning || "",
        accept: Array.isArray(w.accept) ? w.accept.slice() : [w.word],
        _lifaGallery: true,
      });
    }
    return out;
  }
  /* ytdbc87: S12 KEEP NEED20（skip REUSE 217／219／223） */
  function galleryFanxingCards() {
    const out = [];
    for (const w of stage12DictationList) {
      if (!w || !w.word) continue;
      const art = String(w.art || "");
      if (art.indexOf("REUSE") >= 0 || w.reuse_card_id != null) continue;
      const id = Number(w.id);
      if (!Number.isFinite(id) || id < 201 || id > 222) continue;
      if (id === 217 || id === 219) continue;
      out.push({
        id: id,
        word: w.word,
        image: "card_" + id + ".jpg",
        assetDir: "assets/s12_fanxing/",
        meaning: w.meaning || "",
        accept: Array.isArray(w.accept) ? w.accept.slice() : [w.word],
        _fanxingGallery: true,
      });
    }
    return out;
  }
  function galleryCardsForTab(tab) {
    if (tab === "pinyin") return stage5Pool.slice();
    if (tab === "chengyu") return chengyuPool.slice();
    if (tab === "special") return bugCards();
    if (tab === "lifa") return galleryLifaCards();
    if (tab === "fanxing") return galleryFanxingCards();
    /* ciyu: 1–44 + exam 55–103（特別蟲獨立 tab）；唔注入 S11／S12 soft id */
    return pool.filter((c) => !isGachaCard(c));
  }
  function syncGalleryTabsUi() {
    if (!el.galleryTabs) return;
    el.galleryTabs.querySelectorAll(".gal-tab").forEach((btn) => {
      const on = btn.getAttribute("data-tab") === galleryTab;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (el.gallerySeriesLogo) {
      el.gallerySeriesLogo.src = assetUrl(seriesLogoPath(galleryTab));
      el.gallerySeriesLogo.alt = seriesLabel(galleryTab);
    }
    if (el.gallerySeriesLabel) {
      el.gallerySeriesLabel.textContent = seriesLabel(galleryTab);
    }
  }
  function setGalleryTab(tab) {
    galleryTab =
      tab === "chengyu" ||
      tab === "ciyu" ||
      tab === "special" ||
      tab === "lifa" ||
      tab === "fanxing"
        ? tab
        : "pinyin";
    syncGalleryTabsUi();
    renderGallery();
  }
  function renderGallery() {
    if (!el.galleryGrid) return;
    syncGalleryTabsUi();
    el.galleryGrid.innerHTML = "";
    el.galleryGrid.classList.toggle("gal-by-level", galleryTab === "special");
    const list = galleryCardsForTab(galleryTab);
    let nOwned = 0;
    function appendGalCard(c, idx, opts, parent) {
      opts = opts || {};
      const mount = parent || el.galleryGrid;
      const always =
        galleryTab === "pinyin" ||
        galleryTab === "chengyu" ||
        galleryTab === "lifa" ||
        galleryTab === "fanxing" ||
        (galleryTab === "ciyu" && c.id >= 1 && c.id <= 103 && !isGachaCard(c));
      /* ytdbc80: opts.revealed 覆蓋 — 未解鎖該 Lv＝可見剪影（唔真圖／唔名） */
      const owned =
        typeof opts.revealed === "boolean"
          ? opts.revealed
          : galleryTab === "special"
            ? isOwned(c.id)
            : always || isOwned(c.id);
      if (owned && !opts.skipCount) nOwned += 1;
      const nOk = cardSuccess(c.id);
      const node = document.createElement("div");
      const isL4 = !!opts.l4;
      const isL3 = !isL4 && !!opts.l3;
      const isL2 = !isL4 && !isL3 && !!opts.l2;
      /* ytdbc80: locked／未解鎖 → 唔掛 has-l*-art；src=sil_bug（可見蟲形；CSS 唔 brightness(0)） */
      const showArt = !!owned;
      node.className =
        "gal-card" +
        (owned ? "" : " locked") +
        (showArt && isL4 ? " gal-l4-rainbow" : "") +
        (showArt && isL3 ? " gal-l3-crystal" : "") +
        (showArt && isL2 ? " gal-l2-gold" : "") +
        (showArt && isL4 && BLIND_IDLE_L4_BY_ID[c.id] ? " has-l4-art" : "") +
        (showArt && isL3 && BLIND_IDLE_L3_BY_ID[c.id] ? " has-l3-art" : "") +
        (showArt && isL2 && BLIND_IDLE_L2_BY_ID[c.id] ? " has-l2-art" : "");
      let src;
      if (galleryTab === "special" && !owned) {
        /* KEEP sil_bug bank — REUSE_EXISTING_ONLY；唔開 NEED_ART */
        const silIdx = Math.max(1, Math.min(10, (c.id - 44) || idx + 1));
        src = assetUrl(
          "assets/special_gallery/sil_bug_" +
            String(silIdx).padStart(2, "0") +
            ".png"
        );
      } else if (isL4 && BLIND_IDLE_L4_BY_ID[c.id]) {
        src = assetUrl(BLIND_IDLE_L4_BY_ID[c.id]);
      } else if (isL3 && BLIND_IDLE_L3_BY_ID[c.id]) {
        src = assetUrl(BLIND_IDLE_L3_BY_ID[c.id]);
      } else if (isL2 && BLIND_IDLE_L2_BY_ID[c.id]) {
        /* ytdbc61 ③: gallery dual slot L2 → gold idle PNG（not CSS tint of L1 card） */
        src = assetUrl(BLIND_IDLE_L2_BY_ID[c.id]);
      } else {
        const galCard =
          galleryTab === "chengyu"
            ? Object.assign({}, c, { assetDir: "assets/chengyu_cards/" })
            : c;
        src = assetCard(galCard.image, galCard);
      }
      const lvBadge = isL4
        ? '<div class="lv-badge' + (owned ? " l4" : "") + '">Lv4' + (owned ? " 彩虹玻璃" : "") + "</div>"
        : isL3
        ? '<div class="lv-badge' + (owned ? " l3" : "") + '">Lv3' + (owned ? " 太晶" : "") + "</div>"
        : isL2
        ? '<div class="lv-badge' + (owned ? " l2" : "") + '">Lv2' + (owned ? " 金" : "") + "</div>"
        : galleryTab === "special"
          ? '<div class="lv-badge">Lv1</div>'
          : "";
      const lockStamp = !owned
        ? opts.lockLabel
          ? '<div class="lock-stamp">' + opts.lockLabel + "</div>"
          : '<div class="lock-stamp">未抽到</div>'
        : "";
      const imgCls =
        galleryTab === "special" && !owned
          ? "gal-sil"
          : owned && isL4
            ? "ally-l4-rainbow"
            : owned && isL3
              ? "ally-l3-crystal"
              : owned && isL2
                ? "ally-l2-gold"
                : "";
      node.innerHTML =
        '<img class="' +
        imgCls +
        '" src="' +
        src +
        '" alt="" draggable="false" />' +
        lvBadge +
        lockStamp +
        '<div class="word">' +
        escapeHtml(owned ? c.word + (isL4 ? " · Lv4" : isL3 ? " · Lv3" : isL2 ? " · Lv2" : "") : "？？？") +
        "</div>" +
        '<div class="meaning">' +
        escapeHtml(
          owned
            ? (isL4 ? "金屬版 · " : isL3 ? "太晶水晶版 · " : isL2 ? "金色升級版 · " : "") +
              (c.pinyin ? c.pinyin + " · " : "") +
              (c.meaning || "") +
              (galleryTab === "special"
                ? " · 抽" + (gachaPullCounts[String(c.id)] || 0) + "次"
                : "")
            : "黑剪影 · 未解鎖"
        ) +
        "</div>" +
        '<div class="ok-line' +
        (nOk > 0 ? "" : " zero") +
        '">成功次數：' +
        nOk +
        "</div>";
      if (owned && c.word && galleryTab !== "special") {
        node.addEventListener("click", () => speakMandarinWord(c.word));
        node.style.cursor = "pointer";
        node.title = "點擊播國語";
      } else if (owned && galleryTab === "special") {
        node.addEventListener("click", () => speakMandarinWord(c.word));
        node.style.cursor = "pointer";
      }
      mount.appendChild(node);
    }
    /* ytdbc80 Clar：橫排 by LEVEL KEEP；未解鎖 Lv2–4＝可見剪影；Lv1 未抽＝可見剪影 */
    if (galleryTab === "special") {
      const lvRows = [
        {
          key: "l1",
          label: "Lv1",
          optsFor: function () {
            return { l2: false };
          },
          revealed: function (c) {
            return isOwned(c.id);
          },
          lockLabel: "未抽到",
        },
        {
          key: "l2",
          label: "Lv2 金",
          optsFor: function () {
            return { l2: true, skipCount: true };
          },
          revealed: function (c) {
            return isOwned(c.id) && isGachaL2(c.id);
          },
          lockLabel: "未解鎖",
        },
        {
          key: "l3",
          label: "Lv3 太晶",
          optsFor: function () {
            return { l3: true, skipCount: true };
          },
          revealed: function (c) {
            return isOwned(c.id) && isGachaL3(c.id);
          },
          lockLabel: "未解鎖",
        },
        {
          key: "l4",
          label: "Lv4 彩虹",
          optsFor: function () {
            return { l4: true, skipCount: true };
          },
          revealed: function (c) {
            return isOwned(c.id) && isGachaL4(c.id);
          },
          lockLabel: "未解鎖",
        },
      ];
      lvRows.forEach(function (rowDef) {
        const row = document.createElement("div");
        row.className = "gal-lv-row";
        row.setAttribute("data-lv", rowDef.key);
        const lab = document.createElement("div");
        lab.className = "gal-lv-row-label";
        lab.textContent = rowDef.label;
        row.appendChild(lab);
        const cards = document.createElement("div");
        cards.className = "gal-lv-row-cards";
        list.forEach(function (c, idx) {
          const o = rowDef.optsFor(c);
          o.revealed = rowDef.revealed(c);
          o.lockLabel = rowDef.lockLabel;
          appendGalCard(c, idx, o, cards);
        });
        row.appendChild(cards);
        el.galleryGrid.appendChild(row);
      });
    } else {
      list.forEach(function (c, idx) {
        appendGalCard(c, idx, { l2: false });
      });
    }
    if (el.galleryOwned) {
      el.galleryOwned.textContent = "擁有：" + nOwned + "／" + list.length;
    }
  }
  function goGallery() {
    if (!galleryTab) galleryTab = "pinyin";
    renderGallery();
    showOnly("gallery");
  }
  function resetGachaUi() {
    if (el.gachaBox) el.gachaBox.classList.remove("hidden");
    if (el.gachaReveal) el.gachaReveal.classList.add("hidden");
    if (el.btnGachaPull) el.btnGachaPull.classList.remove("hidden");
    if (el.btnGachaAgain) el.btnGachaAgain.classList.add("hidden");
    const left = unownedBugs().length;
    if (el.gachaHint) {
      el.gachaHint.textContent =
        left > 0
          ? "仲有 " + left + " 隻未解鎖蟲卡 · 免費抽"
          : "全部蟲卡已擁有 · 再抽會出「重複」";
    }
  }
  function goGacha() {
    resetGachaUi();
    showOnly("gacha");
  }
  function revealGachaCard(card, isNew, meta) {
    if (!card) return;
    sfxBlindOpen();
    if (el.gachaBox) el.gachaBox.classList.add("hidden");
    if (el.gachaReveal) {
      el.gachaReveal.classList.remove("pop");
      el.gachaReveal.classList.remove("hidden");
      void el.gachaReveal.offsetWidth;
      el.gachaReveal.classList.add("pop");
    }
    if (el.gachaCardImg) el.gachaCardImg.src = assetCard(card.image, card);
    if (el.gachaUnitImg) el.gachaUnitImg.src = assetUrl(allySpriteFor(card));
    if (el.gachaName) el.gachaName.textContent = card.word;
    if (el.gachaTag) {
      const up = meta && meta.upgraded;
      const pulls = meta && meta.pulls ? meta.pulls : 0;
      const up3 = meta && meta.upgradedL3;
      const up4 = meta && meta.upgradedL4;
      if (up4) {
        el.gachaTag.textContent = "升級 LEVEL 4！彩虹玻璃（抽" + pulls + "次）";
        el.gachaTag.className = "gacha-tag new l4";
      } else if (up3) {
        el.gachaTag.textContent = "升級 LEVEL 3！太晶水晶（抽" + pulls + "次）";
        el.gachaTag.className = "gacha-tag new l3";
      } else if (up) {
        el.gachaTag.textContent = "升級 LEVEL 2！金光（抽" + pulls + "次）";
        el.gachaTag.className = "gacha-tag new l2";
      } else if (isNew) {
        el.gachaTag.textContent = "新解鎖！";
        el.gachaTag.className = "gacha-tag new";
      } else {
        el.gachaTag.textContent =
          "重複" + (pulls >= 10 ? " · 抽" + pulls + "次" : "");
        el.gachaTag.className = "gacha-tag dupe";
      }
    }
    if (el.gachaReveal) {
      el.gachaReveal.classList.toggle("l4-rainbow", isGachaL4(card.id));
      el.gachaReveal.classList.toggle("l3-crystal", !isGachaL4(card.id) && isGachaL3(card.id));
      el.gachaReveal.classList.toggle(
        "l2-gold",
        !isGachaL4(card.id) && !isGachaL3(card.id) && (!!(meta && meta.upgraded) || isGachaL2(card.id))
      );
    }
    if (el.gachaUnitImg) {
      const l4 = isGachaL4(card.id);
      const l3 = !l4 && isGachaL3(card.id);
      const l2 = !l4 && !l3 && isGachaL2(card.id);
      el.gachaUnitImg.classList.toggle("ally-l4-rainbow", l4);
      el.gachaUnitImg.classList.toggle("has-l4-art", l4 && !!BLIND_IDLE_L4_BY_ID[card.id]);
      el.gachaUnitImg.classList.toggle("ally-l3-crystal", l3);
      el.gachaUnitImg.classList.toggle("has-l3-art", l3 && !!BLIND_IDLE_L3_BY_ID[card.id]);
      el.gachaUnitImg.classList.toggle("ally-l2-gold", l2);
      el.gachaUnitImg.classList.toggle(
        "has-l2-art",
        l2 && !!BLIND_IDLE_L2_BY_ID[card.id]
      );
    }
    if (el.btnGachaPull) el.btnGachaPull.classList.add("hidden");
    if (postBossBlind) {
      if (el.btnGachaAgain) {
        el.btnGachaAgain.classList.remove("hidden");
        el.btnGachaAgain.textContent = "下一關";
      }
      if (el.gachaHint) {
        el.gachaHint.textContent =
          (isNew ? "新角式解鎖！" : "重複角式") + " · 即將自動跳下一關…";
      }
      clearTimeout(revealGachaCard._auto);
      revealGachaCard._auto = setTimeout(() => {
        if (postBossBlind) nextStageAfterBlind();
      }, 2200);
    } else if (el.btnGachaAgain) {
      el.btnGachaAgain.classList.remove("hidden");
    }
  }
  function pullGacha() {
    const bugs = bugCards();
    if (!bugs.length) {
      if (el.gachaHint) el.gachaHint.textContent = "未有蟲卡資料";
      if (postBossBlind) {
        setTimeout(() => nextStageAfterBlind(), 800);
      }
      return;
    }
    const fresh = unownedBugs();
    let card;
    let isNew = false;
    if (fresh.length) {
      card = fresh[Math.floor(Math.random() * fresh.length)];
      isNew = unlockOwned(card.id);
    } else {
      card = bugs[Math.floor(Math.random() * bugs.length)];
      isNew = false;
    }
    const meta = noteGachaPull(card.id);
    revealGachaCard(card, isNew, meta);
  }

  /* ---- Start battle / reset ---- */
  function beginBattleCommon() {
    if (el.bootScreen) el.bootScreen.classList.add("hidden");
    if (el.galleryScreen) el.galleryScreen.classList.add("hidden");
    if (el.gachaScreen) el.gachaScreen.classList.add("hidden");
    el.pickScreen.classList.add("hidden");
    el.app.classList.remove("hidden");
    el.app.classList.toggle("stage3-mode", stageMode === 3);
    el.app.classList.toggle("stage4-mode", stageMode === 4);
    el.app.classList.toggle("stage5-mode", stageMode === 5);
    el.app.classList.toggle("stage6-mode", stageMode === 6);
    el.app.classList.toggle("stage7-mode", stageMode === 7 || stageMode === 11 || stageMode === 12);
    el.app.classList.toggle("stage8-mode", stageMode === 8);
    el.app.classList.toggle("stage10-mode", stageMode === 10);
    el.app.classList.toggle("stage11-mode", stageMode === 11);
    el.app.classList.toggle("stage12-mode", stageMode === 12);
    /* ytdbc76 belt: S4／S7／S8／S11／S12 雙保險藏左／右卡欄；ytdbc83 S10 亦藏 */
    const hideDeckSel =
      stageMode === 4 ||
      stageMode === 7 ||
      stageMode === 8 ||
      stageMode === 10 ||
      stageMode === 11 ||
      stageMode === 12;
    if (el.deckPane) el.deckPane.classList.toggle("hidden", hideDeckSel);
    if (el.selPreview) el.selPreview.classList.toggle("hidden", hideDeckSel);
    applyBattleBg(stageMode);
    playerHp = TOWER_HP;
    enemyHp = TOWER_HP;
    energy = 40;
    allies = [];
    enemies = [];
    applyTowerArt();
    over = false;
    battleOn = true;
    cdUntil = {};
    revealAnswers = false;
    syncRevealBtn();
    resetAnswerPeek();
    activePromptKey = "";
    deployStreak = 0;
    killStreak = 0;
    ultReady = false;
    updateStreakHud();
    smallKills = 0;
    midBossSpawned = false;
    midBossUnit = null;
    smallBossUnit = null;
    bossSpawned = false;
    bossUnit = null;
    nextBossUltAt = 0;
    winReason = null;
    postBossBlind = false;
    postBossWave = false;
    nextPostMidAt = 0;
    bossQueue = buildBossQueue();
    bossQueueIdx = 0;
    nextBossGateKills = bossWaveCfg().first;
    siegeSfxAt = 0;
    updateKillHud();
    if (el.btnSkip) {
      el.btnSkip.classList.toggle("hidden", stageMode !== 3 && stageMode !== 4 && stageMode !== 5 && stageMode !== 7 && stageMode !== 8 && stageMode !== 11 && stageMode !== 12);
    }
    if (el.pinyinPane) {
      el.pinyinPane.classList.toggle("hidden", stageMode !== 6);
    }
    if (el.reorderPane) {
      el.reorderPane.classList.toggle("hidden", stageMode !== 10);
    }
    /* stage5／S10：隱藏選卡／寫字 dock */
    const dock = document.getElementById("write-dock");
    if (dock) dock.classList.toggle("hidden", stageMode === 6 || stageMode === 10); /* S7／S11 默書 keep write-dock */
    syncWritePadLayout();
    if (el.ultFlash) el.ultFlash.classList.add("hidden");
    if (el.bossUltFlash) el.bossUltFlash.classList.add("hidden");
    if (el.sentenceBubble) {
      el.sentenceBubble.classList.add("hidden");
      /* ytdbc76: 開戰前若 bubble 被 S7 拆過，即刻還原 cloze DOM（S4／S3／S5／S8 好寫句） */
      if (stageMode === 3 || stageMode === 4 || stageMode === 5 || stageMode === 8) {
        ensureClozeBubbleDom();
      }
    }
    if (el.promptCardThumb) el.promptCardThumb.classList.add("hidden");
    focusEnemyRef = null;
    activePrompt = null;
    el.units.innerHTML = "";
    el.overlay.classList.add("hidden");
    el.answer.value = "";
    setHud();
    setInputMode("pencil");
    lastTs = 0;
    nextEnemyAt = performance.now() + Math.max(400, 1200 / Math.max(0.25, gameSpeed));
    syncSettingsUi();
    getAudio();
    ensureBgm();
  }

  function startBattle() {
    useVocabClozeBank();
    deck = pool.filter((c) => pickSet.has(c.id) && isCombatPickable(c));
    if (deck.length !== 10) return;
    beginBattleCommon();
    selectedTip = deck[0] || null;
    renderSelPreview(selectedTip);
    el.hudStatus.textContent =
      stageMode === 3
        ? "第三關：睇造句 → 揀卡 → 寫詞出擊"
        : stageMode === 2
          ? "第二關：期考詞語 · 寫詞出擊"
          : "寫詞出擊！（Pencil 寫紙上）";
    renderDeckGrid(performance.now());
    updateSentenceBubble();
    requestAnimationFrame(tick);
  }


  function useVocabClozeBank() {
    sentenceList = vocabSentenceList;
    sentencesByCardId = vocabSentencesByCardId; /* id → variants[] */
  }
  function useChengyuClozeBank() {
    sentenceList = chengyuSentenceList;
    sentencesByCardId = chengyuSentenceVariantsById; /* id → variants[] */
  }
  function useStage8ClozeBank() {
    /* ytdbc74: S8 專用句庫（唔用全庫 vocab／exam merge） */
    sentenceList = stage8SentenceList;
    sentencesByCardId = stage8SentencesByCardId;
  }
  function buildChengyuDeck() {
    return chengyuPool.slice();
  }


  function startStageExam() {
    /* ytdbc35: no longer auto-load all 49 — route to pick-10 */
    stageMode = 2;
    goPick();
  }

  function startStage4() {
    stageMode = 5;
    deck = buildChengyuDeck();
    if (deck.length < 1) {
      console.warn("[ytdbc16b] chengyu deck empty");
      return;
    }
    useChengyuClozeBank();
    beginBattleCommon();
    rollNextPrompt(false);
    selectedTip = null;
    renderSelPreview(null);
    el.hudStatus.textContent = "第五關：睇句 → 揀成語卡 → 寫出成語出擊";
    renderDeckGrid(performance.now());
    updateSentenceBubble();
    requestAnimationFrame(tick);
  }

  function forceStage4PromptFromList() {
    /* ytdbc77 harden：S4 頂欄必有句；從 vocabSentenceList／sentenceList 抽 */
    const bank = (sentenceList && sentenceList.length) ? sentenceList : vocabSentenceList;
    if (!bank || !bank.length) return null;
    const s = bank[Math.floor(Math.random() * bank.length)];
    if (!s || !s.sentence) return null;
    focusEnemyRef = null;
    activePrompt = { card_id: s.card_id, sentence: copySentence(s), enemy: null };
    return activePrompt;
  }
  function startStage3() {
    stageMode = 4;
    useVocabClozeBank();
    deck = pool.filter((c) => isCombatPickable(c));
    if (deck.length < 1) {
      if (el.bootScreen)
        el.hudStatus && (el.hudStatus.textContent = "詞庫空");
      return;
    }
    beginBattleCommon();
    rollNextPrompt(false);
    if (!activePrompt || !activePrompt.sentence) {
      forceStage4PromptFromList();
    }
    const tip = cardForPrompt(activePrompt) || deck[0];
    selectedTip = tip || null;
    /* ytdbc73／ytdbc76／ytdbc77: 唔畀底左／底右圖；自己諗字；頂欄 SHOW 句＋____ */
    if (el.deckGrid) el.deckGrid.innerHTML = "";
    renderSelPreview(null);
    ensureClozeBubbleDom();
    el.hudStatus.textContent = "第四關：睇句 → 自己諗字寫詞出擊";
    updateSentenceBubble();
    requestAnimationFrame(tick);
  }

  function startStage5() {
    stageMode = 6;
    deck = stage5Pool.slice();
    if (deck.length < 1) {
      console.warn("[ytdbc18] stage5 pool empty");
      return;
    }
    beginBattleCommon();
    selectedTip = null;
    if (el.sentenceBubble) el.sentenceBubble.classList.add("hidden");
    rollNextPinyinPrompt();
    updatePinyinPrompt();
    el.hudStatus.textContent = "第六關：睇漢字 → 揀正確拼音出擊";
    requestAnimationFrame(tick);
  }

  /* ytdbc70: 第七關默書 — study BG wire；無卡選；聽音寫詞（dictation vocab）；暫 tryplay 唔 keep */
  /* ytdbc86: S11／S12 默書 — 同刀；S11 KEEP 300–331；S12 KEEP NEED20＋REUSE3 */
  function buildDictationDeck() {
    const byId = new Map(pool.map((c) => [c.id, c]));
    const out = [];
    const seen = new Set();
    const softFlag =
      stageMode === 11 ? "_s11soft" : stageMode === 12 ? "_s12soft" : "_dictSoft";
    for (const w of activeDictationList()) {
      if (!w || !w.word) continue;
      const art = String(w.art || "");
      const vocabId = Number(w.id);
      const rid = w.reuse_card_id != null ? Number(w.reuse_card_id) : vocabId;
      const poolCard = Number.isFinite(rid) ? byId.get(rid) : null;
      /* only skip wrong-word pool map when NOT reuse（REUSE 可借池卡皮、詞用 vocab） */
      const collide =
        poolCard && poolCard.word && w.word && String(poolCard.word) !== String(w.word);
      if (collide && art.indexOf("REUSE") < 0 && w.reuse_card_id == null) {
        console.warn("[ytdbc85] skip dictation id collision", rid, w.word, "≠", poolCard.word);
        continue;
      }
      let card = null;
      if (art.indexOf("REUSE") >= 0 || w.reuse_card_id != null) {
        /* REUSE：綁 pool card（S11 69/70/73–77；S12 4/5/6）；唔因字面撞車 skip */
        if (!poolCard) {
          console.warn("[ytdbc85] REUSE missing pool card", rid, w.word);
          continue;
        }
        card = poolCard;
      } else {
        /* NEED_ART／無 reuse：合成 soft 卡；id＝vocab id（300–331／201–223）；唔 map 撞車 pool */
        const n = (w.char_count != null ? w.char_count : (w.word && w.word.length) || 2);
        let allySprite = w.allySprite || w.reuse_ally || "";
        let image = w.image || "";
        let assetDir = w.assetDir || "";
        let placeholder = false;
        if (!allySprite) {
          if (stageMode === 11 && Number.isFinite(vocabId) && vocabId >= 300 && vocabId <= 331) {
            allySprite = "assets/s11_lifa/ally_" + vocabId + ".png";
          } else if (
            stageMode === 12 &&
            Number.isFinite(vocabId) &&
            vocabId >= 201 &&
            vocabId <= 222 &&
            vocabId !== 217 &&
            vocabId !== 219
          ) {
            /* S12 NEED20 KEEP — skip REUSE 217/219/223（223 唔入 NEED） */
            allySprite = "assets/s12_fanxing/ally_" + vocabId + ".png";
          } else {
            const silN = (Math.abs(vocabId) % 10) + 1;
            allySprite =
              "assets/special_gallery/sil_bug_" +
              String(silN).padStart(2, "0") +
              ".png";
            placeholder = true;
          }
        }
        if (!image && stageMode === 11 && Number.isFinite(vocabId) && vocabId >= 300 && vocabId <= 331) {
          image = "card_" + vocabId + ".jpg";
          assetDir = "assets/s11_lifa/";
        } else if (
          !image &&
          stageMode === 12 &&
          Number.isFinite(vocabId) &&
          vocabId >= 201 &&
          vocabId <= 222 &&
          vocabId !== 217 &&
          vocabId !== 219
        ) {
          image = "card_" + vocabId + ".jpg";
          assetDir = "assets/s12_fanxing/";
        }
        card = {
          id: vocabId,
          word: w.word,
          accept: Array.isArray(w.accept) ? w.accept.slice() : [w.word],
          meaning: w.meaning || "",
          pinyin: w.pinyin || "",
          char_count: n,
          atk: w.atk || 14,
          hp: w.hp || 28,
          allySprite: allySprite,
          image: image,
          assetDir: assetDir,
          _dictationPlaceholder: placeholder,
        };
        card[softFlag] = true;
      }
      if (!card) continue;
      const dedupeKey = card.id + "::" + (w.word || card.word);
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);
      const accept = Array.isArray(w.accept) && w.accept.length ? w.accept.slice() : card.accept || [];
      out.push(
        Object.assign({}, card, {
          word: w.word || card.word,
          accept: accept,
          _dictation: w,
        })
      );
    }
    return out;
  }

  function rollNextDictation() {
    if (!deck.length) {
      activeDictation = null;
      selectedTip = null;
      return;
    }
    const card = deck[Math.floor(Math.random() * deck.length)];
    activeDictation = card._dictation || { word: card.word, accept: card.accept, reuse_card_id: card.id };
    selectedTip = card;
    renderSelPreview(null); /* 無卡選：唔展示卡面答案 */
    /* ytdbc76: 唔整段換 bubble.innerHTML（會拆 #sentence-text，連累之後 S4 頂欄卡住默書） */
    refreshDictationChrome();
    /* ytdbc91 S7／S11／S12: 每次新詞讀普通話（Google zh-CN 主路徑）；fail → 300ms 再試 1 次 */
    if (card.word) {
      const w = card.word;
      let retried = false;
      const attempt = () => {
        try {
          ensureMandarinResumeWatch();
          wireMandarinGestureUnlock();
          const simp = toSimplifiedForTts(w);
          playMandarinAudio(simp)
            .then(() => {
              /* audio playing */
            })
            .catch(() => {
              if (!retried) {
                retried = true;
                setTimeout(attempt, 300);
                return;
              }
              speakMandarinWordWebSpeechFallback(simp);
            });
        } catch (_) {
          try {
            speakMandarinWord(w);
          } catch (_) {}
        }
      };
      attempt();
    }
  }
  function startStage7() {
    stageMode = 7;
    deck = buildDictationDeck();
    if (deck.length < 1) {
      console.warn("[ytdbc70] dictation deck empty — fallback combat pool");
      deck = pool.filter((c) => isCombatPickable(c)).slice(0, 40);
    }
    if (deck.length < 1) {
      console.warn("[ytdbc70] stage7 deck empty");
      return;
    }
    beginBattleCommon();
    /* ytdbc87: 唔再永久 hide promptCardThumb — refreshDictationChrome 出冇答案卡 */
    selectedTip = null;
    /* ytdbc72: 唔渲染左欄卡（泄答案）；CSS stage7-mode 亦藏 deck／sel */
    if (el.deckGrid) el.deckGrid.innerHTML = "";
    renderSelPreview(null);
    /* ytdbc91: 開戰前同步 Mandarin unlock（muted Audio＋gesture／resume），再出題讀普通話 */
    primeMandarinForDictationStart();
    rollNextDictation();
    el.hudStatus.textContent =
      "第七關·默書：聽普通話寫詞 → 出擊（溫書 BG；撳圖卡／氣泡再聽）";
    requestAnimationFrame(tick);
  }
  function startStage11() {
    stageMode = 11;
    deck = buildDictationDeck();
    if (deck.length < 1) {
      console.warn("[ytdbc85] S11 dictation deck empty — fallback REUSE 69/70/73–77");
      const reuseIds = new Set([69, 70, 73, 74, 75, 76, 77]);
      deck = pool.filter((c) => c && reuseIds.has(c.id));
    }
    if (deck.length < 1) {
      console.warn("[ytdbc85] stage11 deck empty");
      return;
    }
    beginBattleCommon();
    /* ytdbc87: refreshDictationChrome 負責顯示圖卡 */
    selectedTip = null;
    if (el.deckGrid) el.deckGrid.innerHTML = "";
    renderSelPreview(null);
    primeMandarinForDictationStart(); /* ytdbc91: 同 S7 unlock harden */
    rollNextDictation();
    el.hudStatus.textContent =
      "第十一關·默書《理髮大師》：聽音 → 寫詞出擊（KEEP soft／ytdbc87；playable " +
      deck.length +
      "／vocab 39）";
    requestAnimationFrame(tick);
  }
  function startStage12() {
    stageMode = 12;
    deck = buildDictationDeck();
    if (deck.length < 1) {
      console.warn("[ytdbc85] S12 vocab 未到／空 — 暫唔開戰");
      el.hudStatus &&
        (el.hudStatus.textContent = "第十二關·默書：詞表未到（bank 0；placeholder OK）");
      /* 仍開 battle chrome 方便睇選關；無詞則唔 roll */
      beginBattleCommon();
      if (el.deckGrid) el.deckGrid.innerHTML = "";
      renderSelPreview(null);
      if (el.sentenceText) el.sentenceText.textContent = "⏳ 等 S12 紅圈詞表";
      return;
    }
    beginBattleCommon();
    /* ytdbc87: refreshDictationChrome 負責顯示圖卡 */
    selectedTip = null;
    if (el.deckGrid) el.deckGrid.innerHTML = "";
    renderSelPreview(null);
    primeMandarinForDictationStart(); /* ytdbc91: 同 S7 unlock harden */
    rollNextDictation();
    el.hudStatus.textContent =
      "第十二關·默書《繁星》：聽音 → 寫詞出擊（KEEP soft／ytdbc87；playable " +
      deck.length +
      "／vocab 23）";
    requestAnimationFrame(tick);
  }

  /* ytdbc74: 第八關 — stage8_sentences_圖二三_v0 cloze；玩法跟 S4（出句填空／自己諗字） */
  function buildStage8SentenceDeck() {
    const byId = new Map(pool.map((c) => [c.id, c]));
    const out = [];
    const seen = new Set();
    const ids = Object.keys(stage8SentencesByCardId)
      .map((k) => Number(k))
      .filter((n) => !Number.isNaN(n))
      .sort((a, b) => a - b);
    for (const rid of ids) {
      if (seen.has(rid)) continue;
      const card = byId.get(rid);
      if (!card) continue;
      seen.add(rid);
      const vars = stage8SentencesByCardId[rid] || [];
      const first = vars[0] || {};
      const accept =
        Array.isArray(first.accept) && first.accept.length
          ? first.accept.slice()
          : card.accept || [];
      out.push(
        Object.assign({}, card, {
          word: first.word || card.word,
          accept: accept,
          meaning: first.hint || card.meaning,
          _stage8: true,
        })
      );
    }
    /* fallback：句庫空時用舊 allowlist 建 deck */
    if (!out.length && sentenceAllowlist.length) {
      for (const w of sentenceAllowlist) {
        const rid = w.reuse_card_id != null ? w.reuse_card_id : w.id;
        if (seen.has(rid)) continue;
        const card = byId.get(rid);
        if (!card) continue;
        seen.add(rid);
        const accept = Array.isArray(w.accept) && w.accept.length ? w.accept.slice() : card.accept || [];
        out.push(
          Object.assign({}, card, {
            word: w.word || card.word,
            accept: accept,
            meaning: w.meaning || card.meaning,
            _allowlist: w,
          })
        );
      }
    }
    return out;
  }
  /* ytdbc77: 若 rollNextPrompt 無句（Unicode 句庫 404／allowlist 無 cloze）→ 直接從 stage8SentenceList 強制出題 */
  function forceStage8PromptFromList() {
    if (!stage8SentenceList.length) return null;
    const s = stage8SentenceList[Math.floor(Math.random() * stage8SentenceList.length)];
    if (!s || !s.sentence) return null;
    const cardId = s.card_id;
    focusEnemyRef = null;
    activePrompt = { card_id: cardId, sentence: copySentence(s), enemy: null };
    /* 確保 tip／accept 對得上 */
    if (cardId != null && !stage8SentencesByCardId[cardId]) {
      stage8SentencesByCardId[cardId] = [s];
    }
    return activePrompt;
  }
  function startStage8() {
    stageMode = 8;
    useStage8ClozeBank();
    deck = buildStage8SentenceDeck();
    if (deck.length < 1 && stage8SentenceList.length) {
      /* 句庫有句但 pool 對唔上 id 時，仍用句庫 card 合成最小 deck */
      console.warn("[ytdbc77] S8 deck empty but sentence list has", stage8SentenceList.length);
      const byId = new Map(pool.map((c) => [c.id, c]));
      const seen = new Set();
      for (const s of stage8SentenceList) {
        if (!s || s.card_id == null || seen.has(s.card_id)) continue;
        seen.add(s.card_id);
        const card = byId.get(s.card_id) || {
          id: s.card_id,
          word: s.word || s.answer || "",
          accept: (s.accept || []).slice(),
          meaning: s.hint || "",
          image: "",
        };
        deck.push(
          Object.assign({}, card, {
            word: s.word || card.word,
            accept: Array.isArray(s.accept) && s.accept.length ? s.accept.slice() : card.accept || [],
            meaning: s.hint || card.meaning,
            _stage8: true,
          })
        );
      }
    }
    if (deck.length < 1) {
      console.warn("[ytdbc74] S8 stage8 sentence deck empty");
      beginBattleCommon();
      if (el.deckGrid) el.deckGrid.innerHTML = "";
      renderSelPreview(null);
      ensureClozeBubbleDom();
      activePrompt = null;
      el.hudStatus.textContent = "第八關·填句：句庫未載入";
      updateSentenceBubble();
      requestAnimationFrame(tick);
      return;
    }
    beginBattleCommon();
    rollNextPrompt(false);
    if (!activePrompt || !activePrompt.sentence) {
      forceStage8PromptFromList();
    }
    const tip = cardForPrompt(activePrompt) || deck[0];
    selectedTip = tip || null;
    /* ytdbc73／ytdbc76／ytdbc77: 跟 S4 — 出句填空；藏選卡／預覽；自己諗字；還原 cloze DOM */
    if (el.deckGrid) el.deckGrid.innerHTML = "";
    renderSelPreview(null);
    ensureClozeBubbleDom();
    el.hudStatus.textContent =
      "第八關·圖二＋十課填句：睇句 → 自己諗字寫詞出擊（" +
      deck.length +
      " 詞／" +
      stage8SentenceList.length +
      " 句）";
    updateSentenceBubble();
    requestAnimationFrame(tick);
  }


  /* ---- ytdbc84 soft: S10 重組句子 + 毛毛蟲×5 face_right（DRAFT bank；卡面 HOLD；唔 promote） ---- */
  function loadS10Owned() {
    try {
      const raw = localStorage.getItem(S10_CATERPILLAR_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      stage10Owned = new Set(Array.isArray(arr) ? arr.map(String) : []);
    } catch (_) {
      stage10Owned = new Set();
    }
  }
  function saveS10Owned() {
    try {
      localStorage.setItem(S10_CATERPILLAR_KEY, JSON.stringify(Array.from(stage10Owned)));
    } catch (_) {}
  }
  function caterpillarByCid(cid) {
    return S10_CATERPILLARS.find((c) => c.cid === cid || c.id === cid) || null;
  }
  function unlockS10Caterpillar(cid) {
    const c = caterpillarByCid(cid);
    if (!c) return false;
    const key = c.cid;
    if (stage10Owned.has(key)) return false;
    stage10Owned.add(key);
    saveS10Owned();
    return true;
  }
  function randomS10Caterpillar() {
    return S10_CATERPILLARS[Math.floor(Math.random() * S10_CATERPILLARS.length)];
  }
  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }
  function arraysEqual(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (String(a[i]) !== String(b[i])) return false;
    }
    return true;
  }
  function isPunctToken(tok) {
    const s = String(tok || "");
    return s.length <= 2 && /^[，。！？、；：,.!?;:…—\-「」『』（）()]+$/.test(s);
  }
  function renderS10OwnedBar(flashCid) {
    if (!el.reorderOwned) return;
    el.reorderOwned.innerHTML = "";
    S10_CATERPILLARS.forEach((c) => {
      const owned = stage10Owned.has(c.cid);
      const chip = document.createElement("span");
      chip.className = "cat-chip" + (owned ? "" : " locked") + (flashCid && flashCid === c.cid ? " is-new" : "");
      chip.title = owned ? c.word + "（已解鎖）" : c.word + "（未解鎖）";
      chip.innerHTML =
        '<img src="' +
        assetUrl(c.allySprite) +
        '" alt="" draggable="false" style="' +
        (owned ? "" : "filter:grayscale(1);opacity:0.45") +
        '" /><span>' +
        escapeHtml(owned ? c.word : "？？") +
        "</span>";
      el.reorderOwned.appendChild(chip);
    });
  }
  function showS10Reward(card, isNew) {
    if (!el.reorderReward) return;
    el.reorderReward.classList.remove("hidden");
    el.reorderReward.innerHTML =
      '<img src="' +
      assetUrl(card.allySprite) +
      '" alt="" draggable="false" />' +
      "<span>" +
      (isNew ? "新角式！" : "再出動！") +
      " " +
      escapeHtml(card.word) +
      "（" +
      card.cid +
      "）</span>";
    clearTimeout(showS10Reward._t);
    showS10Reward._t = setTimeout(() => {
      if (el.reorderReward) el.reorderReward.classList.add("hidden");
    }, 2200);
  }
  function renderReorderTokens() {
    if (!el.reorderTokens) return;
    el.reorderTokens.innerHTML = "";
    stage10Order.forEach((tok, idx) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "reorder-token" + (isPunctToken(tok) ? " is-punct" : "");
      chip.setAttribute("role", "listitem");
      chip.dataset.idx = String(idx);
      chip.textContent = tok;
      chip.addEventListener("pointerdown", onReorderPointerDown);
      el.reorderTokens.appendChild(chip);
    });
  }
  function onReorderPointerDown(ev) {
    if (over || !battleOn || stageMode !== 10) return;
    const chip = ev.currentTarget;
    const idx = Number(chip.dataset.idx);
    if (!Number.isFinite(idx)) return;
    stage10DragIdx = idx;
    chip.classList.add("is-dragging");
    chip.setPointerCapture(ev.pointerId);
    const onMove = (e) => {
      const elAt = document.elementFromPoint(e.clientX, e.clientY);
      const target = elAt && elAt.closest ? elAt.closest(".reorder-token") : null;
      el.reorderTokens.querySelectorAll(".reorder-token").forEach((n) => n.classList.remove("is-drop-target"));
      if (target && target !== chip) target.classList.add("is-drop-target");
    };
    const onUp = (e) => {
      chip.releasePointerCapture(e.pointerId);
      chip.classList.remove("is-dragging");
      chip.removeEventListener("pointermove", onMove);
      chip.removeEventListener("pointerup", onUp);
      chip.removeEventListener("pointercancel", onUp);
      const elAt = document.elementFromPoint(e.clientX, e.clientY);
      const target = elAt && elAt.closest ? elAt.closest(".reorder-token") : null;
      el.reorderTokens.querySelectorAll(".reorder-token").forEach((n) => n.classList.remove("is-drop-target"));
      if (target && target !== chip) {
        const to = Number(target.dataset.idx);
        if (Number.isFinite(to) && to !== stage10DragIdx) {
          const item = stage10Order.splice(stage10DragIdx, 1)[0];
          stage10Order.splice(to, 0, item);
          renderReorderTokens();
        }
      }
      stage10DragIdx = -1;
    };
    chip.addEventListener("pointermove", onMove);
    chip.addEventListener("pointerup", onUp);
    chip.addEventListener("pointercancel", onUp);
  }
  function rollNextReorderPrompt() {
    if (!stage10ReorderList.length) {
      activePrompt = null;
      stage10Order = [];
      if (el.reorderHint) el.reorderHint.textContent = "句庫未載入（DRAFT）";
      renderReorderTokens();
      return;
    }
    const item = stage10ReorderList[Math.floor(Math.random() * stage10ReorderList.length)];
    const tokens = Array.isArray(item.tokens) ? item.tokens.slice() : [];
    const answer = Array.isArray(item.answer) ? item.answer.slice() : [];
    /* ensure scrambled ≠ answer when possible */
    let order = tokens.slice();
    shuffleInPlace(order);
    let guard = 0;
    while (arraysEqual(order, answer) && order.length > 1 && guard < 8) {
      shuffleInPlace(order);
      guard += 1;
    }
    stage10Order = order;
    activePrompt = {
      type: "reorder_sentence",
      id: item.id,
      answer: answer,
      answer_text: item.answer_text || answer.join(""),
      item: item,
    };
    if (el.reorderHint) {
      el.reorderHint.textContent =
        (item.theme ? item.theme + " · " : "") +
        (item.id || "S10") +
        " · soft DRAFT bank";
    }
    if (el.reorderReward) el.reorderReward.classList.add("hidden");
    renderReorderTokens();
    renderS10OwnedBar(stage10LastRewardCid);
  }
  function shuffleReorderTokens() {
    if (over || !battleOn || stageMode !== 10) return;
    if (!stage10Order.length) return;
    const ans = (activePrompt && activePrompt.answer) || [];
    shuffleInPlace(stage10Order);
    let guard = 0;
    while (arraysEqual(stage10Order, ans) && stage10Order.length > 1 && guard < 8) {
      shuffleInPlace(stage10Order);
      guard += 1;
    }
    renderReorderTokens();
    el.hudStatus.textContent = "已打亂 · 再排一次";
  }
  function skipReorderPrompt() {
    if (over || !battleOn || stageMode !== 10) return;
    activePrompt = null;
    rollNextReorderPrompt();
    el.hudStatus.textContent = "已 SKIP · 換下一題";
  }
  function tryReorderCheck() {
    if (over || !battleOn || stageMode !== 10) return;
    const prompt = activePrompt;
    if (!prompt || !Array.isArray(prompt.answer)) {
      rollNextReorderPrompt();
      return;
    }
    if (!arraysEqual(stage10Order, prompt.answer)) {
      sfxWrongReject();
      if (el.reorderPane) {
        el.reorderPane.classList.add("shake");
        setTimeout(() => el.reorderPane && el.reorderPane.classList.remove("shake"), 320);
      }
      energy = Math.max(0, energy - S10_WRONG_ENERGY);
      setEnergyHud();
      el.hudStatus.textContent = "次序唔啱 · 能量 −" + S10_WRONG_ENERGY + " · 再排";
      return;
    }
    const card = randomS10Caterpillar();
    const cost = energyCost(card);
    if (energy < cost) {
      el.hudStatus.textContent = "能量不足（要 " + cost + "）";
      return;
    }
    const now = performance.now();
    if (deployCdMs() > 0 && (cdUntil[card.id] || 0) > now) {
      el.hudStatus.textContent = "冷卻中…";
      return;
    }
    if (!spawnAlly(card)) return;
    energy = Math.max(0, energy - cost);
    setEnergyHud();
    bumpSuccess(card.id);
    const cdMs = deployCdMs();
    if (cdMs > 0) cdUntil[card.id] = now + cdMs;
    const isNew = unlockS10Caterpillar(card.cid);
    stage10LastRewardCid = card.cid;
    showS10Reward(card, isNew);
    renderS10OwnedBar(card.cid);
    playSfxFile("sfx/sfx_hit.mp3", 0.55);
    onDeploySuccess();
    el.hudStatus.textContent = mergeSpawnHud(
      "重組成功！" + card.word + " 出擊 · ATK " + statsForCard(card).atk +
      (isNew ? " · 新解鎖" : "") +
      (deployStreak > 0 ? " · 連中 " + deployStreak : "")
    );
    activePrompt = null;
    rollNextReorderPrompt();
  }
  function startStage10() {
    stageMode = 10;
    loadS10Owned();
    deck = S10_CATERPILLARS.slice();
    beginBattleCommon();
    if (el.deckGrid) el.deckGrid.innerHTML = "";
    renderSelPreview(null);
    if (el.sentenceBubble) el.sentenceBubble.classList.add("hidden");
    if (el.promptCardThumb) el.promptCardThumb.classList.add("hidden");
    selectedTip = null;
    stage10LastRewardCid = "";
    if (!stage10ReorderList.length) {
      el.hudStatus.textContent = "第十關·重組句子：句庫未載入（DRAFT）";
      if (el.reorderHint) el.reorderHint.textContent = "stage10_reorder_v0.json 未載入";
      renderReorderTokens();
      renderS10OwnedBar("");
      requestAnimationFrame(tick);
      return;
    }
    rollNextReorderPrompt();
    renderS10OwnedBar("");
    el.hudStatus.textContent =
      "第十關·重組句子：拖動詞塊排正確次序 → 確認出擊（毛毛蟲×5 soft；bank DRAFT " +
      stage10ReorderList.length +
      "）";
    requestAnimationFrame(tick);
  }

  function backToPick() {
    battleOn = false;
    hideBattleChrome();
    if (bgm) {
      try { bgm.pause(); } catch (_) {}
    }
    over = false;
    revealAnswers = false;
    syncRevealBtn();
    resetAnswerPeek();
    activePromptKey = "";
    deployStreak = 0;
    killStreak = 0;
    ultReady = false;
    updateStreakHud();
    activePrompt = null;
    focusEnemyRef = null;
    if (el.ultFlash) el.ultFlash.classList.add("hidden");
    if (el.app) {
      el.app.classList.remove("stage3-mode");
      el.app.classList.remove("stage4-mode");
      el.app.classList.remove("stage5-mode");
      el.app.classList.remove("stage6-mode");
      el.app.classList.remove("stage7-mode");
      el.app.classList.remove("stage8-mode");
      el.app.classList.remove("stage10-mode");
      el.app.classList.remove("stage11-mode");
      el.app.classList.remove("stage12-mode");
    }
    if (el.deckPane) el.deckPane.classList.remove("hidden");
    if (el.selPreview) el.selPreview.classList.remove("hidden");
    if (el.pinyinPane) el.pinyinPane.classList.add("hidden");
    if (el.reorderPane) el.reorderPane.classList.add("hidden");
    const dockReset = document.getElementById("write-dock");
    if (dockReset) dockReset.classList.remove("hidden");
    el.app.classList.add("hidden");
    el.overlay.classList.add("hidden");
    /* ytdbc35: S2 has pick-10 like S1/S3 — return to pick; S4/S5/S6 stay boot */
    if (stageMode === 4 || stageMode === 5 || stageMode === 6 || stageMode === 7 || stageMode === 8 || stageMode === 10 || stageMode === 11 || stageMode === 12) {
      goBoot();
      return;
    }
    el.pickScreen.classList.remove("hidden");
    pickSet = new Set();
    renderPick();
  }

  /* ---- Boot ---- */
  async function boot() {
    success = loadSuccess();
    ownedIds = loadOwned();
    loadGachaMeta();
    loadLv2AtkMeta();
    /* ytdbc69 QC: ?forceL4=1 unlocks id45–54 owned + L2/L3/L4（persist） */
    try {
      const qs = new URLSearchParams(location.search || "");
      /* ytdbc81 QC: ?forceLv2Atk=1 → id45–54 戰鬥 Lv2 角式攻擊解鎖（+滿捉） */
      if (qs.get("forceLv2Atk") === "1") {
        for (let id = BUG_ID_MIN; id <= BUG_ID_MAX; id++) {
          ownedIds.add(id);
          gachaL2Ids.add(id);
          lv2AtkIds.add(id);
          lv1CatchCounts[String(id)] = Math.max(
            lv1CatchCounts[String(id)] || 0,
            LV1_CATCH_NEED
          );
        }
        saveOwned();
        saveGachaMeta();
        saveLv2AtkMeta();
        console.info("[ytdbc81] forceLv2Atk=1 — unlocked 45–54 combat Lv2 atk");
      }
      if (qs.get("forceL4") === "1") {
        for (let id = BUG_ID_MIN; id <= BUG_ID_MAX; id++) {
          ownedIds.add(id);
          gachaL2Ids.add(id);
          gachaL3Ids.add(id);
          gachaL4Ids.add(id);
        }
        saveOwned();
        saveGachaMeta();
        console.info("[ytdbc69] forceL4=1 — unlocked 45–54 L2/L3/L4");
      }
      /* ytdbc71 QC: ?forceL3=1 → L2+L3；清 L4 以便見水晶 idle／atk（persist） */
      if (qs.get("forceL3") === "1") {
        for (let id = BUG_ID_MIN; id <= BUG_ID_MAX; id++) {
          ownedIds.add(id);
          gachaL2Ids.add(id);
          gachaL3Ids.add(id);
          gachaL4Ids.delete(id);
        }
        saveOwned();
        saveGachaMeta();
        console.info("[ytdbc71] forceL3=1 — unlocked 45–54 L2/L3（L4 cleared for QC）");
      }
    } catch (_) { /* ignore */ }
    loadSentenceUse();
    updateSuccessHud();
    const res = await fetch("deck_pool_v0.json?v=" + V);
    if (!res.ok) throw new Error("deck_pool 載入失敗 " + res.status);
    const data = await res.json();
    pool = data.pool || [];
    combatBalance = data.combat_balance || null;
    if (pool.length < 10) throw new Error("詞庫少過 10");
    try {
      const mapRes = await fetch("ally_unit_map_v0.json?v=" + V);
      if (mapRes.ok) {
        applyAllyUnitMap(await mapRes.json());
        console.info("[ytdbc16b] ally map loaded:", allyMapLoaded);
      } else {
        console.warn("[ytdbc16b] ally_unit_map_v0.json missing", mapRes.status);
      }
    } catch (e) {
      console.warn("[ytdbc16b] ally map load failed", e);
    }
    try {
      /* ytdbc60 ②: prefer 3each APPROVED；fallback v0.2 single */
      let sRes = await fetch("stage2_sentences_v0.3_3each.json?v=" + V);
      let sData = null;
      if (sRes.ok) {
        sData = await sRes.json();
      } else {
        sRes = await fetch("stage2_sentences_v0.2.json?v=" + V);
        if (sRes.ok) sData = await sRes.json();
      }
      if (sData) {
        sentenceList = sData.sentences || [];
        const byId = Object.create(null);
        sentenceList.forEach((s) => {
          if (!s || s.card_id == null) return;
          if (!byId[s.card_id]) byId[s.card_id] = [];
          byId[s.card_id].push(s);
        });
        vocabSentenceList = sentenceList;
        vocabSentencesByCardId = byId;
        sentencesByCardId = byId;
        console.info(
          "[ytdbc60] stage2 sentences:",
          sentenceList.length,
          "cards",
          Object.keys(byId).length
        );
      } else {
        console.warn("[ytdbc60] stage2 sentences missing");
      }
    } catch (e) {
      console.warn("[ytdbc60] sentences load failed", e);
    }
    try {
      /* ytdbc60: exam49 3each → merge into vocab bank（S3①／S4②） */
      let eRes = await fetch("exam_s4_sentences_exam49_v0.1_3each.json?v=" + V);
      let eData = null;
      if (eRes.ok) {
        eData = await eRes.json();
      } else {
        eRes = await fetch("exam_s4_sentences_exam49_v0.json?v=" + V);
        if (eRes.ok) eData = await eRes.json();
      }
      if (eData && Array.isArray(eData.sentences)) {
        eData.sentences.forEach((s) => {
          if (!s || s.card_id == null) return;
          if (!vocabSentencesByCardId[s.card_id]) vocabSentencesByCardId[s.card_id] = [];
          vocabSentencesByCardId[s.card_id].push(s);
          vocabSentenceList.push(s);
        });
        sentencesByCardId = vocabSentencesByCardId;
        console.info(
          "[ytdbc60] exam_s4 merged; vocab cards",
          Object.keys(vocabSentencesByCardId).length
        );
      }
    } catch (e) {
      console.warn("[ytdbc60] exam_s4 load failed", e);
    }
    try {
      let cRes = await fetch("stage4_chengyu_sentences_v0.1_3each.json?v=" + V);
      let cData = null;
      if (cRes.ok) {
        cData = await cRes.json();
      } else {
        cRes = await fetch("stage4_chengyu_sentences_v0.json?v=" + V);
        if (cRes.ok) cData = await cRes.json();
      }
      if (cData) {
        chengyuSentenceList = cData.sentences || [];
        chengyuSentencesById = Object.create(null);
        chengyuSentenceVariantsById = Object.create(null);
        chengyuPool = [];
        chengyuSentenceList.forEach((s) => {
          if (!s || s.card_id == null) return;
          if (!chengyuSentenceVariantsById[s.card_id]) {
            chengyuSentenceVariantsById[s.card_id] = [];
          }
          chengyuSentenceVariantsById[s.card_id].push(s);
          /* keep first variant as legacy single lookup */
          if (!chengyuSentencesById[s.card_id]) chengyuSentencesById[s.card_id] = s;
          /* one pool card per id */
          if (chengyuPool.some((c) => c.id === s.card_id)) return;
          const n = Math.max(1, Math.min(4, Number(s.char_count) || 4));
          const imgName =
            s.image ||
            (String(s.card_id).padStart(2, "0") + "_" + (s.word || "") + ".jpg");
          const unitName =
            "ally_chengyu_" +
            String(s.card_id).padStart(2, "0") +
            "_" +
            (s.word || s.answer || "") +
            ".png";
          chengyuPool.push({
            id: s.card_id,
            word: s.word || s.answer,
            image: imgName,
            meaning: s.meaning || s.hint || "",
            accept: (s.accept || []).slice(),
            char_count: n,
            atk: ATK_BY_CHARS[n] || 24,
            hp: HP_BY_CHARS[n] || 38,
            assetDir: "assets/chengyu_cards_no_answer/",
            allySprite: "assets/chengyu_units/" + unitName,
            _chengyu: true,
          });
        });
        console.info(
          "[ytdbc60] stage4 chengyu cards:",
          chengyuPool.length,
          "sentences",
          chengyuSentenceList.length
        );
      } else {
        console.warn("[ytdbc60] stage4_chengyu sentences missing");
      }
    } catch (e) {
      console.warn("[ytdbc60] stage4 load failed", e);
    }
    try {
      const p5Res = await fetch("stage5_pinyin_v0.json?v=" + V);
      if (p5Res.ok) {
        const p5 = await p5Res.json();
        const words = p5.words || [];
        stage5Pool = [];
        stage5ById = Object.create(null);
        words.forEach((w) => {
          if (!w) return;
          const n = Math.max(1, Math.min(4, Number(w.char_count) || String(w.word || "").length || 2));
          const id = "s5_" + w.id;
          const imgName =
            w.image ||
            (String(w.id).padStart(2, "0") + "_" + (w.word || "") + ".jpg");
          const unitName =
            w.ally ||
            ("ally_pinyin_" +
              String(w.id).padStart(2, "0") +
              "_" +
              (w.word || "") +
              ".png");
          const card = {
            id: id,
            word: w.word,
            pinyin: w.pinyin,
            answer: w.answer || w.pinyin,
            options: (w.options || []).slice(),
            meaning: w.meaning || "",
            image: imgName,
            char_count: n,
            atk: ATK_BY_CHARS[n] || 14,
            hp: HP_BY_CHARS[n] || 28,
            assetDir: "assets/stage5_cards/",
            allySprite: "assets/stage5_units/" + unitName,
            _stage5: true,
            series: "pinyin",
          };
          stage5Pool.push(card);
          stage5ById[id] = card;
        });
        console.info("[ytdbc18] stage5 pinyin:", stage5Pool.length);
      } else {
        console.warn("[ytdbc18] stage5_pinyin_v0.json missing", p5Res.status);
      }
    } catch (e) {
      console.warn("[ytdbc18] stage5 load failed", e);
    }
    try {
      const dRes = await fetch("dictation_vocab_l246710_v0.json?v=" + V);
      if (dRes.ok) {
        const dData = await dRes.json();
        dictationList = Array.isArray(dData.words) ? dData.words : [];
        console.info("[ytdbc70] dictation vocab:", dictationList.length);
      } else {
        dictationList = [];
        console.warn("[ytdbc70] dictation_vocab missing", dRes.status);
      }
    } catch (e) {
      dictationList = [];
      console.warn("[ytdbc70] dictation load failed", e);
    }
    try {
      const s10Res = await fetch("stage10_reorder_v0.json?v=" + V);
      if (s10Res.ok) {
        const s10 = await s10Res.json();
        const items = Array.isArray(s10.items) ? s10.items : [];
        stage10ReorderList = items.filter(
          (it) => it && Array.isArray(it.tokens) && Array.isArray(it.answer)
        );
        console.info(
          "[ytdbc84] S10 reorder DRAFT bank:",
          stage10ReorderList.length,
          "/",
          s10.count || items.length,
          "status",
          s10.status || "?"
        );
      } else {
        stage10ReorderList = [];
        console.warn("[ytdbc84] stage10_reorder_v0.json missing", s10Res.status);
      }
    } catch (e) {
      stage10ReorderList = [];
      console.warn("[ytdbc84] S10 bank load failed", e);
    }
    loadS10Owned();
    try {
      const s11Res = await fetch("stage11_barber_dictation_vocab_v0.json?v=" + V);
      if (s11Res.ok) {
        const s11 = await s11Res.json();
        stage11DictationList = Array.isArray(s11.words) ? s11.words : [];
        console.info(
          "[ytdbc85] S11 barber dictation:",
          stage11DictationList.length,
          "status",
          s11.status || "?"
        );
      } else {
        stage11DictationList = [];
        console.warn("[ytdbc85] stage11_barber_dictation_vocab_v0.json missing", s11Res.status);
      }
    } catch (e) {
      stage11DictationList = [];
      console.warn("[ytdbc85] S11 bank load failed", e);
    }
    try {
      const s12Urls = [
        "stage12_moshu_dictation_vocab_v0.json?v=" + V,
        "stage12_barber_dictation_vocab_v0.json?v=" + V,
      ];
      stage12DictationList = [];
      for (const url of s12Urls) {
        try {
          const s12Res = await fetch(url);
          if (!s12Res.ok) continue;
          const s12 = await s12Res.json();
          stage12DictationList = Array.isArray(s12.words) ? s12.words : [];
          console.info(
            "[ytdbc85] S12 moshu dictation:",
            stage12DictationList.length,
            "from",
            url.split("?")[0],
            "status",
            s12.status || "?"
          );
          break;
        } catch (e1) {
          console.warn("[ytdbc85] S12 fetch err", url, e1);
        }
      }
      if (!stage12DictationList.length) {
        console.info("[ytdbc85] S12 vocab pending（選關已加；等詞庫 JSON）");
      }
    } catch (e) {
      stage12DictationList = [];
      console.warn("[ytdbc85] S12 bank load failed", e);
    }

    try {
      /* ytdbc77: ASCII alias 優先（避 Unicode 檔名 404／同步丟檔）；再 fallback 圖二三 */
      const s8Urls = [
        "stage8_sentences_fig23_v0.json?v=" + V,
        "stage8_sentences_圖二三_v0.json?v=" + V,
      ];
      let s8Data = null;
      let s8From = "";
      for (const url of s8Urls) {
        try {
          const s8Res = await fetch(url);
          if (s8Res.ok) {
            s8Data = await s8Res.json();
            s8From = url.split("?")[0];
            break;
          }
          console.warn("[ytdbc77] S8 sentences miss", url, s8Res.status);
        } catch (e1) {
          console.warn("[ytdbc77] S8 sentences fetch err", url, e1);
        }
      }
      if (s8Data) {
        stage8SentenceList = Array.isArray(s8Data.sentences) ? s8Data.sentences : [];
        stage8SentencesByCardId = Object.create(null);
        stage8SentenceList.forEach((s) => {
          if (!s || s.card_id == null) return;
          if (!stage8SentencesByCardId[s.card_id]) stage8SentencesByCardId[s.card_id] = [];
          stage8SentencesByCardId[s.card_id].push(s);
        });
        console.info(
          "[ytdbc77] S8 stage8_sentences:",
          stage8SentenceList.length,
          "cards",
          Object.keys(stage8SentencesByCardId).length,
          "from",
          s8From
        );
      } else {
        stage8SentenceList = [];
        stage8SentencesByCardId = Object.create(null);
        console.warn("[ytdbc77] stage8_sentences all sources failed");
      }
    } catch (e) {
      stage8SentenceList = [];
      stage8SentencesByCardId = Object.create(null);
      console.warn("[ytdbc74/77] stage8_sentences load failed", e);
    }
    try {
      /* fallback deck meta only（S8 cloze 唔再用呢個做句） */
      const aRes = await fetch("sentence_allowlist_圖二三_v0.json?v=" + V);
      if (aRes.ok) {
        const aData = await aRes.json();
        sentenceAllowlist = Array.isArray(aData.words) ? aData.words : [];
        console.info("[ytdbc74] S8 allowlist fallback:", sentenceAllowlist.length);
      } else {
        sentenceAllowlist = [];
        console.warn("[ytdbc74] sentence_allowlist missing", aRes.status);
      }
    } catch (e) {
      sentenceAllowlist = [];
      console.warn("[ytdbc74] allowlist load failed", e);
    }
    pickSet = new Set();
    bindWriteUi();
    applyBattleBg(1);
    syncRevealBtn();
    goBoot();
  }


  el.btnStart.addEventListener("click", startBattle);
  if (el.btnPickBack) el.btnPickBack.addEventListener("click", goBoot);
  if (el.btnBootBattle) el.btnBootBattle.addEventListener("click", () => goPickStage(2));
  if (el.btnBootStage1) el.btnBootStage1.addEventListener("click", () => goPickStage(1));
  if (el.btnBootStage2) el.btnBootStage2.addEventListener("click", () => goPickStage(2));
  if (el.btnBootStage3) el.btnBootStage3.addEventListener("click", () => goPickStage(3));
  if (el.btnBootStage4) el.btnBootStage4.addEventListener("click", () => goPickStage(4));
  if (el.btnBootStage5) el.btnBootStage5.addEventListener("click", () => goPickStage(5));
  if (el.btnBootStage6) el.btnBootStage6.addEventListener("click", () => goPickStage(6));
  if (el.btnBootStage7) el.btnBootStage7.addEventListener("click", () => goPickStage(7));
  if (el.btnBootStage8) el.btnBootStage8.addEventListener("click", () => goPickStage(8));
  if (el.btnBootStage10) el.btnBootStage10.addEventListener("click", () => goPickStage(10));
  if (el.btnBootStage11) el.btnBootStage11.addEventListener("click", () => goPickStage(11));
  if (el.btnBootStage12) el.btnBootStage12.addEventListener("click", () => goPickStage(12));
  if (el.btnReorderCheck) el.btnReorderCheck.addEventListener("click", tryReorderCheck);
  if (el.btnReorderShuffle) el.btnReorderShuffle.addEventListener("click", shuffleReorderTokens);
  if (el.btnSkipReorder) el.btnSkipReorder.addEventListener("click", skipReorderPrompt);
  if (el.btnAnswerPeek) el.btnAnswerPeek.addEventListener("click", peekClozeAnswer);
  if (el.btnUltPickConfirm) el.btnUltPickConfirm.addEventListener("click", confirmUltPick);
  if (el.btnUltPickClose) el.btnUltPickClose.addEventListener("click", closeUltPick);
  loadSettings();
  wireSettingsUi();
  warmMandarinVoices(); /* ytdbc23: prefetch zh-CN voices for Stage5 */
  ensureMandarinResumeWatch(); /* ytdbc90: iOS paused quirk */
  wireMandarinGestureUnlock(); /* ytdbc90: first pointer unlock */
  if (el.btnBootGallery) el.btnBootGallery.addEventListener("click", goGallery);
  if (el.galleryTabs) {
    el.galleryTabs.addEventListener("click", (ev) => {
      const btn = ev.target && ev.target.closest ? ev.target.closest(".gal-tab") : null;
      if (!btn) return;
      const tab = btn.getAttribute("data-tab");
      if (tab) setGalleryTab(tab);
    });
  }
  if (el.btnSkipPinyin) el.btnSkipPinyin.addEventListener("click", skipPinyinPrompt);
  /* ytdbc16b: 主畫面唔可以有「抽盲盒」入口 */
  if (el.btnBootGacha) {
    el.btnBootGacha.classList.add("hidden");
    el.btnBootGacha.style.display = "none";
  }
  if (el.btnGalleryClose) el.btnGalleryClose.addEventListener("click", goBoot);
  if (el.btnGachaClose) {
    el.btnGachaClose.addEventListener("click", () => {
      if (postBossBlind) nextStageAfterBlind();
      else goBoot();
    });
  }
  if (el.btnGachaPull) el.btnGachaPull.addEventListener("click", pullGacha);
  if (el.btnUlt) el.btnUlt.addEventListener("click", fireBlindUlt);
  if (el.btnGachaAgain) {
    el.btnGachaAgain.addEventListener("click", () => {
      if (postBossBlind) {
        nextStageAfterBlind();
        return;
      }
      resetGachaUi();
      pullGacha();
    });
  }
  if (el.btnSkip) el.btnSkip.addEventListener("click", skipPrompt);
  el.form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    tryDeploy(el.answer.value);
  });
  el.replay.addEventListener("click", backToPick);
  if (el.btnReveal) {
    el.btnReveal.addEventListener("click", () => setReveal(!revealAnswers));
  }
  window.addEventListener("resize", () => {
    allies.forEach((u) => u.alive && layoutUnit(u));
    enemies.forEach((u) => u.alive && layoutUnit(u));
  });

  boot().catch((err) => {
    if (el.pickGrid) el.pickGrid.textContent = "載入失敗：" + err.message;
    if (el.bootScreen) el.bootScreen.innerHTML = "<p style=\"padding:24px;font-weight:900\">載入失敗：" + err.message + "</p>";
    console.error(err);
  });
})();
