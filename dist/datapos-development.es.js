import { promises as at, existsSync as Qi } from "node:fs";
import { nanoid as Ji } from "nanoid";
import { contextConfigSchema as Yi, connectorConfigSchema as Zi, CONNECTOR_SOURCE_OPERATIONS as ts, CONNECTOR_DESTINATION_OPERATIONS as es, presenterConfigSchema as is } from "@datapos/datapos-shared";
import qt from "node:path";
import { promisify as ss } from "node:util";
import { exec as rs, spawn as as } from "node:child_process";
import { fileURLToPath as ri, URL as ns } from "node:url";
let xe;
// @__NO_SIDE_EFFECTS__
function os(t) {
  return {
    lang: t?.lang ?? xe?.lang,
    message: t?.message,
    abortEarly: t?.abortEarly ?? xe?.abortEarly,
    abortPipeEarly: t?.abortPipeEarly ?? xe?.abortPipeEarly
  };
}
// @__NO_SIDE_EFFECTS__
function Ee(t, e, s) {
  const a = t["~run"]({ value: e }, /* @__PURE__ */ os(s));
  return {
    typed: a.typed,
    success: !a.issues,
    output: a.value,
    issues: a.issues
  };
}
var hs = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], ai = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], us = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ni = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", ve = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, ge = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", cs = {
  5: ge,
  "5module": ge + " export import",
  6: ge + " const class extends export import super"
}, ps = /^in(stanceof)?$/, ls = new RegExp("[" + ni + "]"), fs = new RegExp("[" + ni + us + "]");
function Pe(t, e) {
  for (var s = 65536, a = 0; a < e.length; a += 2) {
    if (s += e[a], s > t)
      return !1;
    if (s += e[a + 1], s >= t)
      return !0;
  }
  return !1;
}
function ft(t, e) {
  return t < 65 ? t === 36 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && ls.test(String.fromCharCode(t)) : e === !1 ? !1 : Pe(t, ai);
}
function gt(t, e) {
  return t < 48 ? t === 36 : t < 58 ? !0 : t < 65 ? !1 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && fs.test(String.fromCharCode(t)) : e === !1 ? !1 : Pe(t, ai) || Pe(t, hs);
}
var O = function(e, s) {
  s === void 0 && (s = {}), this.label = e, this.keyword = s.keyword, this.beforeExpr = !!s.beforeExpr, this.startsExpr = !!s.startsExpr, this.isLoop = !!s.isLoop, this.isAssign = !!s.isAssign, this.prefix = !!s.prefix, this.postfix = !!s.postfix, this.binop = s.binop || null, this.updateContext = null;
};
function ot(t, e) {
  return new O(t, { beforeExpr: !0, binop: e });
}
var ht = { beforeExpr: !0 }, et = { startsExpr: !0 }, Ot = {};
function M(t, e) {
  return e === void 0 && (e = {}), e.keyword = t, Ot[t] = new O(t, e);
}
var u = {
  num: new O("num", et),
  regexp: new O("regexp", et),
  string: new O("string", et),
  name: new O("name", et),
  privateId: new O("privateId", et),
  eof: new O("eof"),
  // Punctuation token types.
  bracketL: new O("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new O("]"),
  braceL: new O("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new O("}"),
  parenL: new O("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new O(")"),
  comma: new O(",", ht),
  semi: new O(";", ht),
  colon: new O(":", ht),
  dot: new O("."),
  question: new O("?", ht),
  questionDot: new O("?."),
  arrow: new O("=>", ht),
  template: new O("template"),
  invalidTemplate: new O("invalidTemplate"),
  ellipsis: new O("...", ht),
  backQuote: new O("`", et),
  dollarBraceL: new O("${", { beforeExpr: !0, startsExpr: !0 }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new O("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new O("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new O("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new O("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: ot("||", 1),
  logicalAND: ot("&&", 2),
  bitwiseOR: ot("|", 3),
  bitwiseXOR: ot("^", 4),
  bitwiseAND: ot("&", 5),
  equality: ot("==/!=/===/!==", 6),
  relational: ot("</>/<=/>=", 7),
  bitShift: ot("<</>>/>>>", 8),
  plusMin: new O("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: ot("%", 10),
  star: ot("*", 10),
  slash: ot("/", 10),
  starstar: new O("**", { beforeExpr: !0 }),
  coalesce: ot("??", 1),
  // Keyword token types.
  _break: M("break"),
  _case: M("case", ht),
  _catch: M("catch"),
  _continue: M("continue"),
  _debugger: M("debugger"),
  _default: M("default", ht),
  _do: M("do", { isLoop: !0, beforeExpr: !0 }),
  _else: M("else", ht),
  _finally: M("finally"),
  _for: M("for", { isLoop: !0 }),
  _function: M("function", et),
  _if: M("if"),
  _return: M("return", ht),
  _switch: M("switch"),
  _throw: M("throw", ht),
  _try: M("try"),
  _var: M("var"),
  _const: M("const"),
  _while: M("while", { isLoop: !0 }),
  _with: M("with"),
  _new: M("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: M("this", et),
  _super: M("super", et),
  _class: M("class", et),
  _extends: M("extends", ht),
  _export: M("export"),
  _import: M("import", et),
  _null: M("null", et),
  _true: M("true", et),
  _false: M("false", et),
  _in: M("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: M("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: M("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: M("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: M("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, J = /\r\n?|\n|\u2028|\u2029/, oi = new RegExp(J.source, "g");
function It(t) {
  return t === 10 || t === 13 || t === 8232 || t === 8233;
}
function hi(t, e, s) {
  s === void 0 && (s = t.length);
  for (var a = e; a < s; a++) {
    var h = t.charCodeAt(a);
    if (It(h))
      return a < s - 1 && h === 13 && t.charCodeAt(a + 1) === 10 ? a + 2 : a + 1;
  }
  return -1;
}
var Ie = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, K = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ui = Object.prototype, ds = ui.hasOwnProperty, ms = ui.toString, Mt = Object.hasOwn || (function(t, e) {
  return ds.call(t, e);
}), $e = Array.isArray || (function(t) {
  return ms.call(t) === "[object Array]";
}), Ge = /* @__PURE__ */ Object.create(null);
function kt(t) {
  return Ge[t] || (Ge[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"));
}
function bt(t) {
  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
var ys = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Rt = function(e, s) {
  this.line = e, this.column = s;
};
Rt.prototype.offset = function(e) {
  return new Rt(this.line, this.column + e);
};
var Kt = function(e, s, a) {
  this.start = s, this.end = a, e.sourceFile !== null && (this.source = e.sourceFile);
};
function _e(t, e) {
  for (var s = 1, a = 0; ; ) {
    var h = hi(t, a, e);
    if (h < 0)
      return new Rt(s, e - a);
    ++s, a = h;
  }
}
var ee = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
  // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
  // (the latest version the library supports). This influences
  // support for strict mode, the set of reserved words, and support
  // for new syntax features.
  ecmaVersion: null,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called when
  // a semicolon is automatically inserted. It will be passed the
  // position of the inserted semicolon as an offset, and if
  // `locations` is enabled, it is given the location as a `{line,
  // column}` object as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: !1,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program, and an import.meta expression
  // in a script isn't considered an error.
  allowImportExportEverywhere: !1,
  // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: null,
  // When enabled, super identifiers are not constrained to
  // appearing in methods and do not raise an error when they appear elsewhere.
  allowSuperOutsideMethod: null,
  // When enabled, hashbang directive in the beginning of file is
  // allowed and treated as a line comment. Enabled by default when
  // `ecmaVersion` >= 2023.
  allowHashBang: !1,
  // By default, the parser will verify that private properties are
  // only used in places where they are valid and have been declared.
  // Set this to false to turn such checks off.
  checkPrivateFields: !0,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: !1,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  // When this option has an array as value, objects representing the
  // comments are pushed to it.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: !1,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: !1
}, We = !1;
function xs(t) {
  var e = {};
  for (var s in ee)
    e[s] = t && Mt(t, s) ? t[s] : ee[s];
  if (e.ecmaVersion === "latest" ? e.ecmaVersion = 1e8 : e.ecmaVersion == null ? (!We && typeof console == "object" && console.warn && (We = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), e.allowReserved == null && (e.allowReserved = e.ecmaVersion < 5), (!t || t.allowHashBang == null) && (e.allowHashBang = e.ecmaVersion >= 14), $e(e.onToken)) {
    var a = e.onToken;
    e.onToken = function(h) {
      return a.push(h);
    };
  }
  return $e(e.onComment) && (e.onComment = vs(e, e.onComment)), e;
}
function vs(t, e) {
  return function(s, a, h, l, d, v) {
    var g = {
      type: s ? "Block" : "Line",
      value: a,
      start: h,
      end: l
    };
    t.locations && (g.loc = new Kt(this, d, v)), t.ranges && (g.range = [h, l]), e.push(g);
  };
}
var Gt = 1, Dt = 2, Ne = 4, ci = 8, Le = 16, pi = 32, he = 64, li = 128, _t = 256, zt = 512, ue = Gt | Dt | _t;
function Oe(t, e) {
  return Dt | (t ? Ne : 0) | (e ? ci : 0);
}
var ie = 0, Re = 1, St = 2, fi = 3, di = 4, mi = 5, H = function(e, s, a) {
  this.options = e = xs(e), this.sourceFile = e.sourceFile, this.keywords = kt(cs[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
  var h = "";
  e.allowReserved !== !0 && (h = ve[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (h += " await")), this.reservedWords = kt(h);
  var l = (h ? h + " " : "") + ve.strict;
  this.reservedWordsStrict = kt(l), this.reservedWordsStrictBind = kt(l + " " + ve.strictBind), this.input = String(s), this.containsEsc = !1, a ? (this.pos = a, this.lineStart = this.input.lastIndexOf(`
`, a - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(J).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = u.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(Gt), this.regexpState = null, this.privateNameStack = [];
}, yt = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
H.prototype.parse = function() {
  var e = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(e);
};
yt.inFunction.get = function() {
  return (this.currentVarScope().flags & Dt) > 0;
};
yt.inGenerator.get = function() {
  return (this.currentVarScope().flags & ci) > 0;
};
yt.inAsync.get = function() {
  return (this.currentVarScope().flags & Ne) > 0;
};
yt.canAwait.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], s = e.flags;
    if (s & (_t | zt))
      return !1;
    if (s & Dt)
      return (s & Ne) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
yt.allowSuper.get = function() {
  var t = this.currentThisScope(), e = t.flags;
  return (e & he) > 0 || this.options.allowSuperOutsideMethod;
};
yt.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & li) > 0;
};
yt.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
yt.allowNewDotTarget.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], s = e.flags;
    if (s & (_t | zt) || s & Dt && !(s & Le))
      return !0;
  }
  return !1;
};
yt.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & _t) > 0;
};
H.extend = function() {
  for (var e = [], s = arguments.length; s--; ) e[s] = arguments[s];
  for (var a = this, h = 0; h < e.length; h++)
    a = e[h](a);
  return a;
};
H.parse = function(e, s) {
  return new this(s, e).parse();
};
H.parseExpressionAt = function(e, s, a) {
  var h = new this(a, e, s);
  return h.nextToken(), h.parseExpression();
};
H.tokenizer = function(e, s) {
  return new this(s, e);
};
Object.defineProperties(H.prototype, yt);
var Y = H.prototype, gs = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
Y.strictDirective = function(t) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    K.lastIndex = t, t += K.exec(this.input)[0].length;
    var e = gs.exec(this.input.slice(t));
    if (!e)
      return !1;
    if ((e[1] || e[2]) === "use strict") {
      K.lastIndex = t + e[0].length;
      var s = K.exec(this.input), a = s.index + s[0].length, h = this.input.charAt(a);
      return h === ";" || h === "}" || J.test(s[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(h) || h === "!" && this.input.charAt(a + 1) === "=");
    }
    t += e[0].length, K.lastIndex = t, t += K.exec(this.input)[0].length, this.input[t] === ";" && t++;
  }
};
Y.eat = function(t) {
  return this.type === t ? (this.next(), !0) : !1;
};
Y.isContextual = function(t) {
  return this.type === u.name && this.value === t && !this.containsEsc;
};
Y.eatContextual = function(t) {
  return this.isContextual(t) ? (this.next(), !0) : !1;
};
Y.expectContextual = function(t) {
  this.eatContextual(t) || this.unexpected();
};
Y.canInsertSemicolon = function() {
  return this.type === u.eof || this.type === u.braceR || J.test(this.input.slice(this.lastTokEnd, this.start));
};
Y.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
Y.semicolon = function() {
  !this.eat(u.semi) && !this.insertSemicolon() && this.unexpected();
};
Y.afterTrailingComma = function(t, e) {
  if (this.type === t)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0;
};
Y.expect = function(t) {
  this.eat(t) || this.unexpected();
};
Y.unexpected = function(t) {
  this.raise(t ?? this.start, "Unexpected token");
};
var ce = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
Y.checkPatternErrors = function(t, e) {
  if (t) {
    t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
    var s = e ? t.parenthesizedAssign : t.parenthesizedBind;
    s > -1 && this.raiseRecoverable(s, e ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
Y.checkExpressionErrors = function(t, e) {
  if (!t)
    return !1;
  var s = t.shorthandAssign, a = t.doubleProto;
  if (!e)
    return s >= 0 || a >= 0;
  s >= 0 && this.raise(s, "Shorthand property assignments are valid only in destructuring patterns"), a >= 0 && this.raiseRecoverable(a, "Redefinition of __proto__ property");
};
Y.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Y.isSimpleAssignTarget = function(t) {
  return t.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(t.expression) : t.type === "Identifier" || t.type === "MemberExpression";
};
var k = H.prototype;
k.parseTopLevel = function(t) {
  var e = /* @__PURE__ */ Object.create(null);
  for (t.body || (t.body = []); this.type !== u.eof; ) {
    var s = this.parseStatement(null, !0, e);
    t.body.push(s);
  }
  if (this.inModule)
    for (var a = 0, h = Object.keys(this.undefinedExports); a < h.length; a += 1) {
      var l = h[a];
      this.raiseRecoverable(this.undefinedExports[l].start, "Export '" + l + "' is not defined");
    }
  return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program");
};
var Me = { kind: "loop" }, bs = { kind: "switch" };
k.isLet = function(t) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  K.lastIndex = this.pos;
  var e = K.exec(this.input), s = this.pos + e[0].length, a = this.input.charCodeAt(s);
  if (a === 91 || a === 92)
    return !0;
  if (t)
    return !1;
  if (a === 123 || a > 55295 && a < 56320)
    return !0;
  if (ft(a, !0)) {
    for (var h = s + 1; gt(a = this.input.charCodeAt(h), !0); )
      ++h;
    if (a === 92 || a > 55295 && a < 56320)
      return !0;
    var l = this.input.slice(s, h);
    if (!ps.test(l))
      return !0;
  }
  return !1;
};
k.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  K.lastIndex = this.pos;
  var t = K.exec(this.input), e = this.pos + t[0].length, s;
  return !J.test(this.input.slice(this.pos, e)) && this.input.slice(e, e + 8) === "function" && (e + 8 === this.input.length || !(gt(s = this.input.charCodeAt(e + 8)) || s > 55295 && s < 56320));
};
k.isUsingKeyword = function(t, e) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(t ? "await" : "using"))
    return !1;
  K.lastIndex = this.pos;
  var s = K.exec(this.input), a = this.pos + s[0].length;
  if (J.test(this.input.slice(this.pos, a)))
    return !1;
  if (t) {
    var h = a + 5, l;
    if (this.input.slice(a, h) !== "using" || h === this.input.length || gt(l = this.input.charCodeAt(h)) || l > 55295 && l < 56320)
      return !1;
    K.lastIndex = h;
    var d = K.exec(this.input);
    if (d && J.test(this.input.slice(h, h + d[0].length)))
      return !1;
  }
  if (e) {
    var v = a + 2, g;
    if (this.input.slice(a, v) === "of" && (v === this.input.length || !gt(g = this.input.charCodeAt(v)) && !(g > 55295 && g < 56320)))
      return !1;
  }
  var o = this.input.charCodeAt(a);
  return ft(o, !0) || o === 92;
};
k.isAwaitUsing = function(t) {
  return this.isUsingKeyword(!0, t);
};
k.isUsing = function(t) {
  return this.isUsingKeyword(!1, t);
};
k.parseStatement = function(t, e, s) {
  var a = this.type, h = this.startNode(), l;
  switch (this.isLet(t) && (a = u._var, l = "let"), a) {
    case u._break:
    case u._continue:
      return this.parseBreakContinueStatement(h, a.keyword);
    case u._debugger:
      return this.parseDebuggerStatement(h);
    case u._do:
      return this.parseDoStatement(h);
    case u._for:
      return this.parseForStatement(h);
    case u._function:
      return t && (this.strict || t !== "if" && t !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(h, !1, !t);
    case u._class:
      return t && this.unexpected(), this.parseClass(h, !0);
    case u._if:
      return this.parseIfStatement(h);
    case u._return:
      return this.parseReturnStatement(h);
    case u._switch:
      return this.parseSwitchStatement(h);
    case u._throw:
      return this.parseThrowStatement(h);
    case u._try:
      return this.parseTryStatement(h);
    case u._const:
    case u._var:
      return l = l || this.value, t && l !== "var" && this.unexpected(), this.parseVarStatement(h, l);
    case u._while:
      return this.parseWhileStatement(h);
    case u._with:
      return this.parseWithStatement(h);
    case u.braceL:
      return this.parseBlock(!0, h);
    case u.semi:
      return this.parseEmptyStatement(h);
    case u._export:
    case u._import:
      if (this.options.ecmaVersion > 10 && a === u._import) {
        K.lastIndex = this.pos;
        var d = K.exec(this.input), v = this.pos + d[0].length, g = this.input.charCodeAt(v);
        if (g === 40 || g === 46)
          return this.parseExpressionStatement(h, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), a === u._import ? this.parseImport(h) : this.parseExport(h, s);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return t && this.unexpected(), this.next(), this.parseFunctionStatement(h, !0, !t);
      var o = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (o)
        return e && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), o === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(h, !1, o), this.semicolon(), this.finishNode(h, "VariableDeclaration");
      var P = this.value, N = this.parseExpression();
      return a === u.name && N.type === "Identifier" && this.eat(u.colon) ? this.parseLabeledStatement(h, P, N, t) : this.parseExpressionStatement(h, N);
  }
};
k.parseBreakContinueStatement = function(t, e) {
  var s = e === "break";
  this.next(), this.eat(u.semi) || this.insertSemicolon() ? t.label = null : this.type !== u.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
  for (var a = 0; a < this.labels.length; ++a) {
    var h = this.labels[a];
    if ((t.label == null || h.name === t.label.name) && (h.kind != null && (s || h.kind === "loop") || t.label && s))
      break;
  }
  return a === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, s ? "BreakStatement" : "ContinueStatement");
};
k.parseDebuggerStatement = function(t) {
  return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
};
k.parseDoStatement = function(t) {
  return this.next(), this.labels.push(Me), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(u._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(u.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement");
};
k.parseForStatement = function(t) {
  this.next();
  var e = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Me), this.enterScope(0), this.expect(u.parenL), this.type === u.semi)
    return e > -1 && this.unexpected(e), this.parseFor(t, null);
  var s = this.isLet();
  if (this.type === u._var || this.type === u._const || s) {
    var a = this.startNode(), h = s ? "let" : this.value;
    return this.next(), this.parseVar(a, !0, h), this.finishNode(a, "VariableDeclaration"), this.parseForAfterInit(t, a, e);
  }
  var l = this.isContextual("let"), d = !1, v = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (v) {
    var g = this.startNode();
    return this.next(), v === "await using" && this.next(), this.parseVar(g, !0, v), this.finishNode(g, "VariableDeclaration"), this.parseForAfterInit(t, g, e);
  }
  var o = this.containsEsc, P = new ce(), N = this.start, j = e > -1 ? this.parseExprSubscripts(P, "await") : this.parseExpression(!0, P);
  return this.type === u._in || (d = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (e > -1 ? (this.type === u._in && this.unexpected(e), t.await = !0) : d && this.options.ecmaVersion >= 8 && (j.start === N && !o && j.type === "Identifier" && j.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (t.await = !1)), l && d && this.raise(j.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(j, !1, P), this.checkLValPattern(j), this.parseForIn(t, j)) : (this.checkExpressionErrors(P, !0), e > -1 && this.unexpected(e), this.parseFor(t, j));
};
k.parseForAfterInit = function(t, e, s) {
  return (this.type === u._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && e.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === u._in ? s > -1 && this.unexpected(s) : t.await = s > -1), this.parseForIn(t, e)) : (s > -1 && this.unexpected(s), this.parseFor(t, e));
};
k.parseFunctionStatement = function(t, e, s) {
  return this.next(), this.parseFunction(t, Ht | (s ? 0 : Ce), !1, e);
};
k.parseIfStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(u._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement");
};
k.parseReturnStatement = function(t) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(u.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
};
k.parseSwitchStatement = function(t) {
  this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(u.braceL), this.labels.push(bs), this.enterScope(0);
  for (var e, s = !1; this.type !== u.braceR; )
    if (this.type === u._case || this.type === u._default) {
      var a = this.type === u._case;
      e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), a ? e.test = this.parseExpression() : (s && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), s = !0, e.test = null), this.expect(u.colon);
    } else
      e || this.unexpected(), e.consequent.push(this.parseStatement(null));
  return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement");
};
k.parseThrowStatement = function(t) {
  return this.next(), J.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
};
var Ts = [];
k.parseCatchClauseParam = function() {
  var t = this.parseBindingAtom(), e = t.type === "Identifier";
  return this.enterScope(e ? pi : 0), this.checkLValPattern(t, e ? di : St), this.expect(u.parenR), t;
};
k.parseTryStatement = function(t) {
  if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === u._catch) {
    var e = this.startNode();
    this.next(), this.eat(u.parenL) ? e.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0)), e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause");
  }
  return t.finalizer = this.eat(u._finally) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement");
};
k.parseVarStatement = function(t, e, s) {
  return this.next(), this.parseVar(t, !1, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration");
};
k.parseWhileStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), this.labels.push(Me), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement");
};
k.parseWithStatement = function(t) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement");
};
k.parseEmptyStatement = function(t) {
  return this.next(), this.finishNode(t, "EmptyStatement");
};
k.parseLabeledStatement = function(t, e, s, a) {
  for (var h = 0, l = this.labels; h < l.length; h += 1) {
    var d = l[h];
    d.name === e && this.raise(s.start, "Label '" + e + "' is already declared");
  }
  for (var v = this.type.isLoop ? "loop" : this.type === u._switch ? "switch" : null, g = this.labels.length - 1; g >= 0; g--) {
    var o = this.labels[g];
    if (o.statementStart === t.start)
      o.statementStart = this.start, o.kind = v;
    else
      break;
  }
  return this.labels.push({ name: e, kind: v, statementStart: this.start }), t.body = this.parseStatement(a ? a.indexOf("label") === -1 ? a + "label" : a : "label"), this.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement");
};
k.parseExpressionStatement = function(t, e) {
  return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
};
k.parseBlock = function(t, e, s) {
  for (t === void 0 && (t = !0), e === void 0 && (e = this.startNode()), e.body = [], this.expect(u.braceL), t && this.enterScope(0); this.type !== u.braceR; ) {
    var a = this.parseStatement(null);
    e.body.push(a);
  }
  return s && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement");
};
k.parseFor = function(t, e) {
  return t.init = e, this.expect(u.semi), t.test = this.type === u.semi ? null : this.parseExpression(), this.expect(u.semi), t.update = this.type === u.parenR ? null : this.parseExpression(), this.expect(u.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement");
};
k.parseForIn = function(t, e) {
  var s = this.type === u._in;
  return this.next(), e.type === "VariableDeclaration" && e.declarations[0].init != null && (!s || this.options.ecmaVersion < 8 || this.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(
    e.start,
    (s ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), t.left = e, t.right = s ? this.parseExpression() : this.parseMaybeAssign(), this.expect(u.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, s ? "ForInStatement" : "ForOfStatement");
};
k.parseVar = function(t, e, s, a) {
  for (t.declarations = [], t.kind = s; ; ) {
    var h = this.startNode();
    if (this.parseVarId(h, s), this.eat(u.eq) ? h.init = this.parseMaybeAssign(e) : !a && s === "const" && !(this.type === u._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !a && (s === "using" || s === "await using") && this.options.ecmaVersion >= 17 && this.type !== u._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + s + " declaration") : !a && h.id.type !== "Identifier" && !(e && (this.type === u._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : h.init = null, t.declarations.push(this.finishNode(h, "VariableDeclarator")), !this.eat(u.comma))
      break;
  }
  return t;
};
k.parseVarId = function(t, e) {
  t.id = e === "using" || e === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(t.id, e === "var" ? Re : St, !1);
};
var Ht = 1, Ce = 2, yi = 4;
k.parseFunction = function(t, e, s, a, h) {
  this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !a) && (this.type === u.star && e & Ce && this.unexpected(), t.generator = this.eat(u.star)), this.options.ecmaVersion >= 8 && (t.async = !!a), e & Ht && (t.id = e & yi && this.type !== u.name ? null : this.parseIdent(), t.id && !(e & Ce) && this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? Re : St : fi));
  var l = this.yieldPos, d = this.awaitPos, v = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Oe(t.async, t.generator)), e & Ht || (t.id = this.type === u.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, s, !1, h), this.yieldPos = l, this.awaitPos = d, this.awaitIdentPos = v, this.finishNode(t, e & Ht ? "FunctionDeclaration" : "FunctionExpression");
};
k.parseFunctionParams = function(t) {
  this.expect(u.parenL), t.params = this.parseBindingList(u.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
k.parseClass = function(t, e) {
  this.next();
  var s = this.strict;
  this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
  var a = this.enterClassBody(), h = this.startNode(), l = !1;
  for (h.body = [], this.expect(u.braceL); this.type !== u.braceR; ) {
    var d = this.parseClassElement(t.superClass !== null);
    d && (h.body.push(d), d.type === "MethodDefinition" && d.kind === "constructor" ? (l && this.raiseRecoverable(d.start, "Duplicate constructor in the same class"), l = !0) : d.key && d.key.type === "PrivateIdentifier" && Ss(a, d) && this.raiseRecoverable(d.key.start, "Identifier '#" + d.key.name + "' has already been declared"));
  }
  return this.strict = s, this.next(), t.body = this.finishNode(h, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
};
k.parseClassElement = function(t) {
  if (this.eat(u.semi))
    return null;
  var e = this.options.ecmaVersion, s = this.startNode(), a = "", h = !1, l = !1, d = "method", v = !1;
  if (this.eatContextual("static")) {
    if (e >= 13 && this.eat(u.braceL))
      return this.parseClassStaticBlock(s), s;
    this.isClassElementNameStart() || this.type === u.star ? v = !0 : a = "static";
  }
  if (s.static = v, !a && e >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === u.star) && !this.canInsertSemicolon() ? l = !0 : a = "async"), !a && (e >= 9 || !l) && this.eat(u.star) && (h = !0), !a && !l && !h) {
    var g = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? d = g : a = g);
  }
  if (a ? (s.computed = !1, s.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), s.key.name = a, this.finishNode(s.key, "Identifier")) : this.parseClassElementName(s), e < 13 || this.type === u.parenL || d !== "method" || h || l) {
    var o = !s.static && se(s, "constructor"), P = o && t;
    o && d !== "method" && this.raise(s.key.start, "Constructor can't have get/set modifier"), s.kind = o ? "constructor" : d, this.parseClassMethod(s, h, l, P);
  } else
    this.parseClassField(s);
  return s;
};
k.isClassElementNameStart = function() {
  return this.type === u.name || this.type === u.privateId || this.type === u.num || this.type === u.string || this.type === u.bracketL || this.type.keyword;
};
k.parseClassElementName = function(t) {
  this.type === u.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), t.computed = !1, t.key = this.parsePrivateIdent()) : this.parsePropertyName(t);
};
k.parseClassMethod = function(t, e, s, a) {
  var h = t.key;
  t.kind === "constructor" ? (e && this.raise(h.start, "Constructor can't be a generator"), s && this.raise(h.start, "Constructor can't be an async method")) : t.static && se(t, "prototype") && this.raise(h.start, "Classes may not have a static property named prototype");
  var l = t.value = this.parseMethod(e, s, a);
  return t.kind === "get" && l.params.length !== 0 && this.raiseRecoverable(l.start, "getter should have no params"), t.kind === "set" && l.params.length !== 1 && this.raiseRecoverable(l.start, "setter should have exactly one param"), t.kind === "set" && l.params[0].type === "RestElement" && this.raiseRecoverable(l.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition");
};
k.parseClassField = function(t) {
  return se(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && se(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(u.eq) ? (this.enterScope(zt | he), t.value = this.parseMaybeAssign(), this.exitScope()) : t.value = null, this.semicolon(), this.finishNode(t, "PropertyDefinition");
};
k.parseClassStaticBlock = function(t) {
  t.body = [];
  var e = this.labels;
  for (this.labels = [], this.enterScope(_t | he); this.type !== u.braceR; ) {
    var s = this.parseStatement(null);
    t.body.push(s);
  }
  return this.next(), this.exitScope(), this.labels = e, this.finishNode(t, "StaticBlock");
};
k.parseClassId = function(t, e) {
  this.type === u.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, St, !1)) : (e === !0 && this.unexpected(), t.id = null);
};
k.parseClassSuper = function(t) {
  t.superClass = this.eat(u._extends) ? this.parseExprSubscripts(null, !1) : null;
};
k.enterClassBody = function() {
  var t = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(t), t.declared;
};
k.exitClassBody = function() {
  var t = this.privateNameStack.pop(), e = t.declared, s = t.used;
  if (this.options.checkPrivateFields)
    for (var a = this.privateNameStack.length, h = a === 0 ? null : this.privateNameStack[a - 1], l = 0; l < s.length; ++l) {
      var d = s[l];
      Mt(e, d.name) || (h ? h.used.push(d) : this.raiseRecoverable(d.start, "Private field '#" + d.name + "' must be declared in an enclosing class"));
    }
};
function Ss(t, e) {
  var s = e.key.name, a = t[s], h = "true";
  return e.type === "MethodDefinition" && (e.kind === "get" || e.kind === "set") && (h = (e.static ? "s" : "i") + e.kind), a === "iget" && h === "iset" || a === "iset" && h === "iget" || a === "sget" && h === "sset" || a === "sset" && h === "sget" ? (t[s] = "true", !1) : a ? !0 : (t[s] = h, !1);
}
function se(t, e) {
  var s = t.computed, a = t.key;
  return !s && (a.type === "Identifier" && a.name === e || a.type === "Literal" && a.value === e);
}
k.parseExportAllDeclaration = function(t, e) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseModuleExportName(), this.checkExport(e, t.exported, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== u.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
};
k.parseExport = function(t, e) {
  if (this.next(), this.eat(u.star))
    return this.parseExportAllDeclaration(t, e);
  if (this.eat(u._default))
    return this.checkExport(e, "default", this.lastTokStart), t.declaration = this.parseExportDefaultDeclaration(), this.finishNode(t, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    t.declaration = this.parseExportDeclaration(t), t.declaration.type === "VariableDeclaration" ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id, t.declaration.id.start), t.specifiers = [], t.source = null, this.options.ecmaVersion >= 16 && (t.attributes = []);
  else {
    if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from"))
      this.type !== u.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause());
    else {
      for (var s = 0, a = t.specifiers; s < a.length; s += 1) {
        var h = a[s];
        this.checkUnreserved(h.local), this.checkLocalExport(h.local), h.local.type === "Literal" && this.raise(h.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      t.source = null, this.options.ecmaVersion >= 16 && (t.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(t, "ExportNamedDeclaration");
};
k.parseExportDeclaration = function(t) {
  return this.parseStatement(null);
};
k.parseExportDefaultDeclaration = function() {
  var t;
  if (this.type === u._function || (t = this.isAsyncFunction())) {
    var e = this.startNode();
    return this.next(), t && this.next(), this.parseFunction(e, Ht | yi, !1, t);
  } else if (this.type === u._class) {
    var s = this.startNode();
    return this.parseClass(s, "nullableID");
  } else {
    var a = this.parseMaybeAssign();
    return this.semicolon(), a;
  }
};
k.checkExport = function(t, e, s) {
  t && (typeof e != "string" && (e = e.type === "Identifier" ? e.name : e.value), Mt(t, e) && this.raiseRecoverable(s, "Duplicate export '" + e + "'"), t[e] = !0);
};
k.checkPatternExport = function(t, e) {
  var s = e.type;
  if (s === "Identifier")
    this.checkExport(t, e, e.start);
  else if (s === "ObjectPattern")
    for (var a = 0, h = e.properties; a < h.length; a += 1) {
      var l = h[a];
      this.checkPatternExport(t, l);
    }
  else if (s === "ArrayPattern")
    for (var d = 0, v = e.elements; d < v.length; d += 1) {
      var g = v[d];
      g && this.checkPatternExport(t, g);
    }
  else s === "Property" ? this.checkPatternExport(t, e.value) : s === "AssignmentPattern" ? this.checkPatternExport(t, e.left) : s === "RestElement" && this.checkPatternExport(t, e.argument);
};
k.checkVariableExport = function(t, e) {
  if (t)
    for (var s = 0, a = e; s < a.length; s += 1) {
      var h = a[s];
      this.checkPatternExport(t, h.id);
    }
};
k.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
k.parseExportSpecifier = function(t) {
  var e = this.startNode();
  return e.local = this.parseModuleExportName(), e.exported = this.eatContextual("as") ? this.parseModuleExportName() : e.local, this.checkExport(
    t,
    e.exported,
    e.exported.start
  ), this.finishNode(e, "ExportSpecifier");
};
k.parseExportSpecifiers = function(t) {
  var e = [], s = !0;
  for (this.expect(u.braceL); !this.eat(u.braceR); ) {
    if (s)
      s = !1;
    else if (this.expect(u.comma), this.afterTrailingComma(u.braceR))
      break;
    e.push(this.parseExportSpecifier(t));
  }
  return e;
};
k.parseImport = function(t) {
  return this.next(), this.type === u.string ? (t.specifiers = Ts, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === u.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ImportDeclaration");
};
k.parseImportSpecifier = function() {
  var t = this.startNode();
  return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, St), this.finishNode(t, "ImportSpecifier");
};
k.parseImportDefaultSpecifier = function() {
  var t = this.startNode();
  return t.local = this.parseIdent(), this.checkLValSimple(t.local, St), this.finishNode(t, "ImportDefaultSpecifier");
};
k.parseImportNamespaceSpecifier = function() {
  var t = this.startNode();
  return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, St), this.finishNode(t, "ImportNamespaceSpecifier");
};
k.parseImportSpecifiers = function() {
  var t = [], e = !0;
  if (this.type === u.name && (t.push(this.parseImportDefaultSpecifier()), !this.eat(u.comma)))
    return t;
  if (this.type === u.star)
    return t.push(this.parseImportNamespaceSpecifier()), t;
  for (this.expect(u.braceL); !this.eat(u.braceR); ) {
    if (e)
      e = !1;
    else if (this.expect(u.comma), this.afterTrailingComma(u.braceR))
      break;
    t.push(this.parseImportSpecifier());
  }
  return t;
};
k.parseWithClause = function() {
  var t = [];
  if (!this.eat(u._with))
    return t;
  this.expect(u.braceL);
  for (var e = {}, s = !0; !this.eat(u.braceR); ) {
    if (s)
      s = !1;
    else if (this.expect(u.comma), this.afterTrailingComma(u.braceR))
      break;
    var a = this.parseImportAttribute(), h = a.key.type === "Identifier" ? a.key.name : a.key.value;
    Mt(e, h) && this.raiseRecoverable(a.key.start, "Duplicate attribute key '" + h + "'"), e[h] = !0, t.push(a);
  }
  return t;
};
k.parseImportAttribute = function() {
  var t = this.startNode();
  return t.key = this.type === u.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(u.colon), this.type !== u.string && this.unexpected(), t.value = this.parseExprAtom(), this.finishNode(t, "ImportAttribute");
};
k.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === u.string) {
    var t = this.parseLiteral(this.value);
    return ys.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t;
  }
  return this.parseIdent(!0);
};
k.adaptDirectivePrologue = function(t) {
  for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e)
    t[e].directive = t[e].expression.raw.slice(1, -1);
};
k.isDirectiveCandidate = function(t) {
  return this.options.ecmaVersion >= 5 && t.type === "ExpressionStatement" && t.expression.type === "Literal" && typeof t.expression.value == "string" && // Reject parenthesized strings.
  (this.input[t.start] === '"' || this.input[t.start] === "'");
};
var pt = H.prototype;
pt.toAssignable = function(t, e, s) {
  if (this.options.ecmaVersion >= 6 && t)
    switch (t.type) {
      case "Identifier":
        this.inAsync && t.name === "await" && this.raise(t.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        t.type = "ObjectPattern", s && this.checkPatternErrors(s, !0);
        for (var a = 0, h = t.properties; a < h.length; a += 1) {
          var l = h[a];
          this.toAssignable(l, e), l.type === "RestElement" && (l.argument.type === "ArrayPattern" || l.argument.type === "ObjectPattern") && this.raise(l.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        t.kind !== "init" && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
        break;
      case "ArrayExpression":
        t.type = "ArrayPattern", s && this.checkPatternErrors(s, !0), this.toAssignableList(t.elements, e);
        break;
      case "SpreadElement":
        t.type = "RestElement", this.toAssignable(t.argument, e), t.argument.type === "AssignmentPattern" && this.raise(t.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        t.operator !== "=" && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(t.expression, e, s);
        break;
      case "ChainExpression":
        this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!e)
          break;
      default:
        this.raise(t.start, "Assigning to rvalue");
    }
  else s && this.checkPatternErrors(s, !0);
  return t;
};
pt.toAssignableList = function(t, e) {
  for (var s = t.length, a = 0; a < s; a++) {
    var h = t[a];
    h && this.toAssignable(h, e);
  }
  if (s) {
    var l = t[s - 1];
    this.options.ecmaVersion === 6 && e && l && l.type === "RestElement" && l.argument.type !== "Identifier" && this.unexpected(l.argument.start);
  }
  return t;
};
pt.parseSpread = function(t) {
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement");
};
pt.parseRestBinding = function() {
  var t = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== u.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
};
pt.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case u.bracketL:
        var t = this.startNode();
        return this.next(), t.elements = this.parseBindingList(u.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
      case u.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
pt.parseBindingList = function(t, e, s, a) {
  for (var h = [], l = !0; !this.eat(t); )
    if (l ? l = !1 : this.expect(u.comma), e && this.type === u.comma)
      h.push(null);
    else {
      if (s && this.afterTrailingComma(t))
        break;
      if (this.type === u.ellipsis) {
        var d = this.parseRestBinding();
        this.parseBindingListItem(d), h.push(d), this.type === u.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
        break;
      } else
        h.push(this.parseAssignableListItem(a));
    }
  return h;
};
pt.parseAssignableListItem = function(t) {
  var e = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(e), e;
};
pt.parseBindingListItem = function(t) {
  return t;
};
pt.parseMaybeDefault = function(t, e, s) {
  if (s = s || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(u.eq))
    return s;
  var a = this.startNodeAt(t, e);
  return a.left = s, a.right = this.parseMaybeAssign(), this.finishNode(a, "AssignmentPattern");
};
pt.checkLValSimple = function(t, e, s) {
  e === void 0 && (e = ie);
  var a = e !== ie;
  switch (t.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (a ? "Binding " : "Assigning to ") + t.name + " in strict mode"), a && (e === St && t.name === "let" && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), s && (Mt(s, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), s[t.name] = !0), e !== mi && this.declareName(t.name, e, t.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      a && this.raiseRecoverable(t.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return a && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, s);
    default:
      this.raise(t.start, (a ? "Binding" : "Assigning to") + " rvalue");
  }
};
pt.checkLValPattern = function(t, e, s) {
  switch (e === void 0 && (e = ie), t.type) {
    case "ObjectPattern":
      for (var a = 0, h = t.properties; a < h.length; a += 1) {
        var l = h[a];
        this.checkLValInnerPattern(l, e, s);
      }
      break;
    case "ArrayPattern":
      for (var d = 0, v = t.elements; d < v.length; d += 1) {
        var g = v[d];
        g && this.checkLValInnerPattern(g, e, s);
      }
      break;
    default:
      this.checkLValSimple(t, e, s);
  }
};
pt.checkLValInnerPattern = function(t, e, s) {
  switch (e === void 0 && (e = ie), t.type) {
    case "Property":
      this.checkLValInnerPattern(t.value, e, s);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(t.left, e, s);
      break;
    case "RestElement":
      this.checkLValPattern(t.argument, e, s);
      break;
    default:
      this.checkLValPattern(t, e, s);
  }
};
var X = function(e, s, a, h, l) {
  this.token = e, this.isExpr = !!s, this.preserveSpace = !!a, this.override = h, this.generator = !!l;
}, F = {
  b_stat: new X("{", !1),
  b_expr: new X("{", !0),
  b_tmpl: new X("${", !1),
  p_stat: new X("(", !1),
  p_expr: new X("(", !0),
  q_tmpl: new X("`", !0, !0, function(t) {
    return t.tryReadTemplateToken();
  }),
  f_stat: new X("function", !1),
  f_expr: new X("function", !0),
  f_expr_gen: new X("function", !0, !1, null, !0),
  f_gen: new X("function", !1, !1, null, !0)
}, Vt = H.prototype;
Vt.initialContext = function() {
  return [F.b_stat];
};
Vt.curContext = function() {
  return this.context[this.context.length - 1];
};
Vt.braceIsBlock = function(t) {
  var e = this.curContext();
  return e === F.f_expr || e === F.f_stat ? !0 : t === u.colon && (e === F.b_stat || e === F.b_expr) ? !e.isExpr : t === u._return || t === u.name && this.exprAllowed ? J.test(this.input.slice(this.lastTokEnd, this.start)) : t === u._else || t === u.semi || t === u.eof || t === u.parenR || t === u.arrow ? !0 : t === u.braceL ? e === F.b_stat : t === u._var || t === u._const || t === u.name ? !1 : !this.exprAllowed;
};
Vt.inGeneratorContext = function() {
  for (var t = this.context.length - 1; t >= 1; t--) {
    var e = this.context[t];
    if (e.token === "function")
      return e.generator;
  }
  return !1;
};
Vt.updateContext = function(t) {
  var e, s = this.type;
  s.keyword && t === u.dot ? this.exprAllowed = !1 : (e = s.updateContext) ? e.call(this, t) : this.exprAllowed = s.beforeExpr;
};
Vt.overrideContext = function(t) {
  this.curContext() !== t && (this.context[this.context.length - 1] = t);
};
u.parenR.updateContext = u.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var t = this.context.pop();
  t === F.b_stat && this.curContext().token === "function" && (t = this.context.pop()), this.exprAllowed = !t.isExpr;
};
u.braceL.updateContext = function(t) {
  this.context.push(this.braceIsBlock(t) ? F.b_stat : F.b_expr), this.exprAllowed = !0;
};
u.dollarBraceL.updateContext = function() {
  this.context.push(F.b_tmpl), this.exprAllowed = !0;
};
u.parenL.updateContext = function(t) {
  var e = t === u._if || t === u._for || t === u._with || t === u._while;
  this.context.push(e ? F.p_stat : F.p_expr), this.exprAllowed = !0;
};
u.incDec.updateContext = function() {
};
u._function.updateContext = u._class.updateContext = function(t) {
  t.beforeExpr && t !== u._else && !(t === u.semi && this.curContext() !== F.p_stat) && !(t === u._return && J.test(this.input.slice(this.lastTokEnd, this.start))) && !((t === u.colon || t === u.braceL) && this.curContext() === F.b_stat) ? this.context.push(F.f_expr) : this.context.push(F.f_stat), this.exprAllowed = !1;
};
u.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
u.backQuote.updateContext = function() {
  this.curContext() === F.q_tmpl ? this.context.pop() : this.context.push(F.q_tmpl), this.exprAllowed = !1;
};
u.star.updateContext = function(t) {
  if (t === u._function) {
    var e = this.context.length - 1;
    this.context[e] === F.f_expr ? this.context[e] = F.f_expr_gen : this.context[e] = F.f_gen;
  }
  this.exprAllowed = !0;
};
u.name.updateContext = function(t) {
  var e = !1;
  this.options.ecmaVersion >= 6 && t !== u.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e;
};
var _ = H.prototype;
_.checkPropClash = function(t, e, s) {
  if (!(this.options.ecmaVersion >= 9 && t.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
    var a = t.key, h;
    switch (a.type) {
      case "Identifier":
        h = a.name;
        break;
      case "Literal":
        h = String(a.value);
        break;
      default:
        return;
    }
    var l = t.kind;
    if (this.options.ecmaVersion >= 6) {
      h === "__proto__" && l === "init" && (e.proto && (s ? s.doubleProto < 0 && (s.doubleProto = a.start) : this.raiseRecoverable(a.start, "Redefinition of __proto__ property")), e.proto = !0);
      return;
    }
    h = "$" + h;
    var d = e[h];
    if (d) {
      var v;
      l === "init" ? v = this.strict && d.init || d.get || d.set : v = d.init || d[l], v && this.raiseRecoverable(a.start, "Redefinition of property");
    } else
      d = e[h] = {
        init: !1,
        get: !1,
        set: !1
      };
    d[l] = !0;
  }
};
_.parseExpression = function(t, e) {
  var s = this.start, a = this.startLoc, h = this.parseMaybeAssign(t, e);
  if (this.type === u.comma) {
    var l = this.startNodeAt(s, a);
    for (l.expressions = [h]; this.eat(u.comma); )
      l.expressions.push(this.parseMaybeAssign(t, e));
    return this.finishNode(l, "SequenceExpression");
  }
  return h;
};
_.parseMaybeAssign = function(t, e, s) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(t);
    this.exprAllowed = !1;
  }
  var a = !1, h = -1, l = -1, d = -1;
  e ? (h = e.parenthesizedAssign, l = e.trailingComma, d = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new ce(), a = !0);
  var v = this.start, g = this.startLoc;
  (this.type === u.parenL || this.type === u.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = t === "await");
  var o = this.parseMaybeConditional(t, e);
  if (s && (o = s.call(this, o, v, g)), this.type.isAssign) {
    var P = this.startNodeAt(v, g);
    return P.operator = this.value, this.type === u.eq && (o = this.toAssignable(o, !1, e)), a || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= o.start && (e.shorthandAssign = -1), this.type === u.eq ? this.checkLValPattern(o) : this.checkLValSimple(o), P.left = o, this.next(), P.right = this.parseMaybeAssign(t), d > -1 && (e.doubleProto = d), this.finishNode(P, "AssignmentExpression");
  } else
    a && this.checkExpressionErrors(e, !0);
  return h > -1 && (e.parenthesizedAssign = h), l > -1 && (e.trailingComma = l), o;
};
_.parseMaybeConditional = function(t, e) {
  var s = this.start, a = this.startLoc, h = this.parseExprOps(t, e);
  if (this.checkExpressionErrors(e))
    return h;
  if (this.eat(u.question)) {
    var l = this.startNodeAt(s, a);
    return l.test = h, l.consequent = this.parseMaybeAssign(), this.expect(u.colon), l.alternate = this.parseMaybeAssign(t), this.finishNode(l, "ConditionalExpression");
  }
  return h;
};
_.parseExprOps = function(t, e) {
  var s = this.start, a = this.startLoc, h = this.parseMaybeUnary(e, !1, !1, t);
  return this.checkExpressionErrors(e) || h.start === s && h.type === "ArrowFunctionExpression" ? h : this.parseExprOp(h, s, a, -1, t);
};
_.parseExprOp = function(t, e, s, a, h) {
  var l = this.type.binop;
  if (l != null && (!h || this.type !== u._in) && l > a) {
    var d = this.type === u.logicalOR || this.type === u.logicalAND, v = this.type === u.coalesce;
    v && (l = u.logicalAND.binop);
    var g = this.value;
    this.next();
    var o = this.start, P = this.startLoc, N = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, h), o, P, l, h), j = this.buildBinary(e, s, t, N, g, d || v);
    return (d && this.type === u.coalesce || v && (this.type === u.logicalOR || this.type === u.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(j, e, s, a, h);
  }
  return t;
};
_.buildBinary = function(t, e, s, a, h, l) {
  a.type === "PrivateIdentifier" && this.raise(a.start, "Private identifier can only be left side of binary expression");
  var d = this.startNodeAt(t, e);
  return d.left = s, d.operator = h, d.right = a, this.finishNode(d, l ? "LogicalExpression" : "BinaryExpression");
};
_.parseMaybeUnary = function(t, e, s, a) {
  var h = this.start, l = this.startLoc, d;
  if (this.isContextual("await") && this.canAwait)
    d = this.parseAwait(a), e = !0;
  else if (this.type.prefix) {
    var v = this.startNode(), g = this.type === u.incDec;
    v.operator = this.value, v.prefix = !0, this.next(), v.argument = this.parseMaybeUnary(null, !0, g, a), this.checkExpressionErrors(t, !0), g ? this.checkLValSimple(v.argument) : this.strict && v.operator === "delete" && xi(v.argument) ? this.raiseRecoverable(v.start, "Deleting local variable in strict mode") : v.operator === "delete" && we(v.argument) ? this.raiseRecoverable(v.start, "Private fields can not be deleted") : e = !0, d = this.finishNode(v, g ? "UpdateExpression" : "UnaryExpression");
  } else if (!e && this.type === u.privateId)
    (a || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), d = this.parsePrivateIdent(), this.type !== u._in && this.unexpected();
  else {
    if (d = this.parseExprSubscripts(t, a), this.checkExpressionErrors(t))
      return d;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var o = this.startNodeAt(h, l);
      o.operator = this.value, o.prefix = !1, o.argument = d, this.checkLValSimple(d), this.next(), d = this.finishNode(o, "UpdateExpression");
    }
  }
  if (!s && this.eat(u.starstar))
    if (e)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(h, l, d, this.parseMaybeUnary(null, !1, !1, a), "**", !1);
  else
    return d;
};
function xi(t) {
  return t.type === "Identifier" || t.type === "ParenthesizedExpression" && xi(t.expression);
}
function we(t) {
  return t.type === "MemberExpression" && t.property.type === "PrivateIdentifier" || t.type === "ChainExpression" && we(t.expression) || t.type === "ParenthesizedExpression" && we(t.expression);
}
_.parseExprSubscripts = function(t, e) {
  var s = this.start, a = this.startLoc, h = this.parseExprAtom(t, e);
  if (h.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return h;
  var l = this.parseSubscripts(h, s, a, !1, e);
  return t && l.type === "MemberExpression" && (t.parenthesizedAssign >= l.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= l.start && (t.parenthesizedBind = -1), t.trailingComma >= l.start && (t.trailingComma = -1)), l;
};
_.parseSubscripts = function(t, e, s, a, h) {
  for (var l = this.options.ecmaVersion >= 8 && t.type === "Identifier" && t.name === "async" && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.potentialArrowAt === t.start, d = !1; ; ) {
    var v = this.parseSubscript(t, e, s, a, l, d, h);
    if (v.optional && (d = !0), v === t || v.type === "ArrowFunctionExpression") {
      if (d) {
        var g = this.startNodeAt(e, s);
        g.expression = v, v = this.finishNode(g, "ChainExpression");
      }
      return v;
    }
    t = v;
  }
};
_.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(u.arrow);
};
_.parseSubscriptAsyncArrow = function(t, e, s, a) {
  return this.parseArrowExpression(this.startNodeAt(t, e), s, !0, a);
};
_.parseSubscript = function(t, e, s, a, h, l, d) {
  var v = this.options.ecmaVersion >= 11, g = v && this.eat(u.questionDot);
  a && g && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var o = this.eat(u.bracketL);
  if (o || g && this.type !== u.parenL && this.type !== u.backQuote || this.eat(u.dot)) {
    var P = this.startNodeAt(e, s);
    P.object = t, o ? (P.property = this.parseExpression(), this.expect(u.bracketR)) : this.type === u.privateId && t.type !== "Super" ? P.property = this.parsePrivateIdent() : P.property = this.parseIdent(this.options.allowReserved !== "never"), P.computed = !!o, v && (P.optional = g), t = this.finishNode(P, "MemberExpression");
  } else if (!a && this.eat(u.parenL)) {
    var N = new ce(), j = this.yieldPos, nt = this.awaitPos, lt = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var Nt = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1, N);
    if (h && !g && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(N, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = j, this.awaitPos = nt, this.awaitIdentPos = lt, this.parseSubscriptAsyncArrow(e, s, Nt, d);
    this.checkExpressionErrors(N, !0), this.yieldPos = j || this.yieldPos, this.awaitPos = nt || this.awaitPos, this.awaitIdentPos = lt || this.awaitIdentPos;
    var I = this.startNodeAt(e, s);
    I.callee = t, I.arguments = Nt, v && (I.optional = g), t = this.finishNode(I, "CallExpression");
  } else if (this.type === u.backQuote) {
    (g || l) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var Z = this.startNodeAt(e, s);
    Z.tag = t, Z.quasi = this.parseTemplate({ isTagged: !0 }), t = this.finishNode(Z, "TaggedTemplateExpression");
  }
  return t;
};
_.parseExprAtom = function(t, e, s) {
  this.type === u.slash && this.readRegexp();
  var a, h = this.potentialArrowAt === this.start;
  switch (this.type) {
    case u._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), a = this.startNode(), this.next(), this.type === u.parenL && !this.allowDirectSuper && this.raise(a.start, "super() call outside constructor of a subclass"), this.type !== u.dot && this.type !== u.bracketL && this.type !== u.parenL && this.unexpected(), this.finishNode(a, "Super");
    case u._this:
      return a = this.startNode(), this.next(), this.finishNode(a, "ThisExpression");
    case u.name:
      var l = this.start, d = this.startLoc, v = this.containsEsc, g = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !v && g.name === "async" && !this.canInsertSemicolon() && this.eat(u._function))
        return this.overrideContext(F.f_expr), this.parseFunction(this.startNodeAt(l, d), 0, !1, !0, e);
      if (h && !this.canInsertSemicolon()) {
        if (this.eat(u.arrow))
          return this.parseArrowExpression(this.startNodeAt(l, d), [g], !1, e);
        if (this.options.ecmaVersion >= 8 && g.name === "async" && this.type === u.name && !v && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return g = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(u.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(l, d), [g], !0, e);
      }
      return g;
    case u.regexp:
      var o = this.value;
      return a = this.parseLiteral(o.value), a.regex = { pattern: o.pattern, flags: o.flags }, a;
    case u.num:
    case u.string:
      return this.parseLiteral(this.value);
    case u._null:
    case u._true:
    case u._false:
      return a = this.startNode(), a.value = this.type === u._null ? null : this.type === u._true, a.raw = this.type.keyword, this.next(), this.finishNode(a, "Literal");
    case u.parenL:
      var P = this.start, N = this.parseParenAndDistinguishExpression(h, e);
      return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(N) && (t.parenthesizedAssign = P), t.parenthesizedBind < 0 && (t.parenthesizedBind = P)), N;
    case u.bracketL:
      return a = this.startNode(), this.next(), a.elements = this.parseExprList(u.bracketR, !0, !0, t), this.finishNode(a, "ArrayExpression");
    case u.braceL:
      return this.overrideContext(F.b_expr), this.parseObj(!1, t);
    case u._function:
      return a = this.startNode(), this.next(), this.parseFunction(a, 0);
    case u._class:
      return this.parseClass(this.startNode(), !1);
    case u._new:
      return this.parseNew();
    case u.backQuote:
      return this.parseTemplate();
    case u._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(s) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
_.parseExprAtomDefault = function() {
  this.unexpected();
};
_.parseExprImport = function(t) {
  var e = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === u.parenL && !t)
    return this.parseDynamicImport(e);
  if (this.type === u.dot) {
    var s = this.startNodeAt(e.start, e.loc && e.loc.start);
    return s.name = "import", e.meta = this.finishNode(s, "Identifier"), this.parseImportMeta(e);
  } else
    this.unexpected();
};
_.parseDynamicImport = function(t) {
  if (this.next(), t.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(u.parenR) ? t.options = null : (this.expect(u.comma), this.afterTrailingComma(u.parenR) ? t.options = null : (t.options = this.parseMaybeAssign(), this.eat(u.parenR) || (this.expect(u.comma), this.afterTrailingComma(u.parenR) || this.unexpected())));
  else if (!this.eat(u.parenR)) {
    var e = this.start;
    this.eat(u.comma) && this.eat(u.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e);
  }
  return this.finishNode(t, "ImportExpression");
};
_.parseImportMeta = function(t) {
  this.next();
  var e = this.containsEsc;
  return t.property = this.parseIdent(!0), t.property.name !== "meta" && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty");
};
_.parseLiteral = function(t) {
  var e = this.startNode();
  return e.value = t, e.raw = this.input.slice(this.start, this.end), e.raw.charCodeAt(e.raw.length - 1) === 110 && (e.bigint = e.value != null ? e.value.toString() : e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal");
};
_.parseParenExpression = function() {
  this.expect(u.parenL);
  var t = this.parseExpression();
  return this.expect(u.parenR), t;
};
_.shouldParseArrow = function(t) {
  return !this.canInsertSemicolon();
};
_.parseParenAndDistinguishExpression = function(t, e) {
  var s = this.start, a = this.startLoc, h, l = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var d = this.start, v = this.startLoc, g = [], o = !0, P = !1, N = new ce(), j = this.yieldPos, nt = this.awaitPos, lt;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== u.parenR; )
      if (o ? o = !1 : this.expect(u.comma), l && this.afterTrailingComma(u.parenR, !0)) {
        P = !0;
        break;
      } else if (this.type === u.ellipsis) {
        lt = this.start, g.push(this.parseParenItem(this.parseRestBinding())), this.type === u.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        g.push(this.parseMaybeAssign(!1, N, this.parseParenItem));
    var Nt = this.lastTokEnd, I = this.lastTokEndLoc;
    if (this.expect(u.parenR), t && this.shouldParseArrow(g) && this.eat(u.arrow))
      return this.checkPatternErrors(N, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = j, this.awaitPos = nt, this.parseParenArrowList(s, a, g, e);
    (!g.length || P) && this.unexpected(this.lastTokStart), lt && this.unexpected(lt), this.checkExpressionErrors(N, !0), this.yieldPos = j || this.yieldPos, this.awaitPos = nt || this.awaitPos, g.length > 1 ? (h = this.startNodeAt(d, v), h.expressions = g, this.finishNodeAt(h, "SequenceExpression", Nt, I)) : h = g[0];
  } else
    h = this.parseParenExpression();
  if (this.options.preserveParens) {
    var Z = this.startNodeAt(s, a);
    return Z.expression = h, this.finishNode(Z, "ParenthesizedExpression");
  } else
    return h;
};
_.parseParenItem = function(t) {
  return t;
};
_.parseParenArrowList = function(t, e, s, a) {
  return this.parseArrowExpression(this.startNodeAt(t, e), s, !1, a);
};
var Ps = [];
_.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var t = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === u.dot) {
    var e = this.startNodeAt(t.start, t.loc && t.loc.start);
    e.name = "new", t.meta = this.finishNode(e, "Identifier"), this.next();
    var s = this.containsEsc;
    return t.property = this.parseIdent(!0), t.property.name !== "target" && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), s && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty");
  }
  var a = this.start, h = this.startLoc;
  return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), a, h, !0, !1), this.eat(u.parenL) ? t.arguments = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = Ps, this.finishNode(t, "NewExpression");
};
_.parseTemplateElement = function(t) {
  var e = t.isTagged, s = this.startNode();
  return this.type === u.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), s.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : s.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), s.tail = this.type === u.backQuote, this.finishNode(s, "TemplateElement");
};
_.parseTemplate = function(t) {
  t === void 0 && (t = {});
  var e = t.isTagged;
  e === void 0 && (e = !1);
  var s = this.startNode();
  this.next(), s.expressions = [];
  var a = this.parseTemplateElement({ isTagged: e });
  for (s.quasis = [a]; !a.tail; )
    this.type === u.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(u.dollarBraceL), s.expressions.push(this.parseExpression()), this.expect(u.braceR), s.quasis.push(a = this.parseTemplateElement({ isTagged: e }));
  return this.next(), this.finishNode(s, "TemplateLiteral");
};
_.isAsyncProp = function(t) {
  return !t.computed && t.key.type === "Identifier" && t.key.name === "async" && (this.type === u.name || this.type === u.num || this.type === u.string || this.type === u.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === u.star) && !J.test(this.input.slice(this.lastTokEnd, this.start));
};
_.parseObj = function(t, e) {
  var s = this.startNode(), a = !0, h = {};
  for (s.properties = [], this.next(); !this.eat(u.braceR); ) {
    if (a)
      a = !1;
    else if (this.expect(u.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(u.braceR))
      break;
    var l = this.parseProperty(t, e);
    t || this.checkPropClash(l, h, e), s.properties.push(l);
  }
  return this.finishNode(s, t ? "ObjectPattern" : "ObjectExpression");
};
_.parseProperty = function(t, e) {
  var s = this.startNode(), a, h, l, d;
  if (this.options.ecmaVersion >= 9 && this.eat(u.ellipsis))
    return t ? (s.argument = this.parseIdent(!1), this.type === u.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(s, "RestElement")) : (s.argument = this.parseMaybeAssign(!1, e), this.type === u.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(s, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (s.method = !1, s.shorthand = !1, (t || e) && (l = this.start, d = this.startLoc), t || (a = this.eat(u.star)));
  var v = this.containsEsc;
  return this.parsePropertyName(s), !t && !v && this.options.ecmaVersion >= 8 && !a && this.isAsyncProp(s) ? (h = !0, a = this.options.ecmaVersion >= 9 && this.eat(u.star), this.parsePropertyName(s)) : h = !1, this.parsePropertyValue(s, t, a, h, l, d, e, v), this.finishNode(s, "Property");
};
_.parseGetterSetter = function(t) {
  var e = t.key.name;
  this.parsePropertyName(t), t.value = this.parseMethod(!1), t.kind = e;
  var s = t.kind === "get" ? 0 : 1;
  if (t.value.params.length !== s) {
    var a = t.value.start;
    t.kind === "get" ? this.raiseRecoverable(a, "getter should have no params") : this.raiseRecoverable(a, "setter should have exactly one param");
  } else
    t.kind === "set" && t.value.params[0].type === "RestElement" && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params");
};
_.parsePropertyValue = function(t, e, s, a, h, l, d, v) {
  (s || a) && this.type === u.colon && this.unexpected(), this.eat(u.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, d), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === u.parenL ? (e && this.unexpected(), t.method = !0, t.value = this.parseMethod(s, a), t.kind = "init") : !e && !v && this.options.ecmaVersion >= 5 && !t.computed && t.key.type === "Identifier" && (t.key.name === "get" || t.key.name === "set") && this.type !== u.comma && this.type !== u.braceR && this.type !== u.eq ? ((s || a) && this.unexpected(), this.parseGetterSetter(t)) : this.options.ecmaVersion >= 6 && !t.computed && t.key.type === "Identifier" ? ((s || a) && this.unexpected(), this.checkUnreserved(t.key), t.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = h), e ? t.value = this.parseMaybeDefault(h, l, this.copyNode(t.key)) : this.type === u.eq && d ? (d.shorthandAssign < 0 && (d.shorthandAssign = this.start), t.value = this.parseMaybeDefault(h, l, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.kind = "init", t.shorthand = !0) : this.unexpected();
};
_.parsePropertyName = function(t) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(u.bracketL))
      return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(u.bracketR), t.key;
    t.computed = !1;
  }
  return t.key = this.type === u.num || this.type === u.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
_.initFunction = function(t) {
  t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1);
};
_.parseMethod = function(t, e, s) {
  var a = this.startNode(), h = this.yieldPos, l = this.awaitPos, d = this.awaitIdentPos;
  return this.initFunction(a), this.options.ecmaVersion >= 6 && (a.generator = t), this.options.ecmaVersion >= 8 && (a.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Oe(e, a.generator) | he | (s ? li : 0)), this.expect(u.parenL), a.params = this.parseBindingList(u.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(a, !1, !0, !1), this.yieldPos = h, this.awaitPos = l, this.awaitIdentPos = d, this.finishNode(a, "FunctionExpression");
};
_.parseArrowExpression = function(t, e, s, a) {
  var h = this.yieldPos, l = this.awaitPos, d = this.awaitIdentPos;
  return this.enterScope(Oe(s, !1) | Le), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!s), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, a), this.yieldPos = h, this.awaitPos = l, this.awaitIdentPos = d, this.finishNode(t, "ArrowFunctionExpression");
};
_.parseFunctionBody = function(t, e, s, a) {
  var h = e && this.type !== u.braceL, l = this.strict, d = !1;
  if (h)
    t.body = this.parseMaybeAssign(a), t.expression = !0, this.checkParams(t, !1);
  else {
    var v = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
    (!l || v) && (d = this.strictDirective(this.end), d && v && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var g = this.labels;
    this.labels = [], d && (this.strict = !0), this.checkParams(t, !l && !d && !e && !s && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, mi), t.body = this.parseBlock(!1, void 0, d && !l), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = g;
  }
  this.exitScope();
};
_.isSimpleParamList = function(t) {
  for (var e = 0, s = t; e < s.length; e += 1) {
    var a = s[e];
    if (a.type !== "Identifier")
      return !1;
  }
  return !0;
};
_.checkParams = function(t, e) {
  for (var s = /* @__PURE__ */ Object.create(null), a = 0, h = t.params; a < h.length; a += 1) {
    var l = h[a];
    this.checkLValInnerPattern(l, Re, e ? null : s);
  }
};
_.parseExprList = function(t, e, s, a) {
  for (var h = [], l = !0; !this.eat(t); ) {
    if (l)
      l = !1;
    else if (this.expect(u.comma), e && this.afterTrailingComma(t))
      break;
    var d = void 0;
    s && this.type === u.comma ? d = null : this.type === u.ellipsis ? (d = this.parseSpread(a), a && this.type === u.comma && a.trailingComma < 0 && (a.trailingComma = this.start)) : d = this.parseMaybeAssign(!1, a), h.push(d);
  }
  return h;
};
_.checkUnreserved = function(t) {
  var e = t.start, s = t.end, a = t.name;
  if (this.inGenerator && a === "yield" && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && a === "await" && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & ue) && a === "arguments" && this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (a === "arguments" || a === "await") && this.raise(e, "Cannot use " + a + " in class static initialization block"), this.keywords.test(a) && this.raise(e, "Unexpected keyword '" + a + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(e, s).indexOf("\\") !== -1)) {
    var h = this.strict ? this.reservedWordsStrict : this.reservedWords;
    h.test(a) && (!this.inAsync && a === "await" && this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + a + "' is reserved"));
  }
};
_.parseIdent = function(t) {
  var e = this.parseIdentNode();
  return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), e.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = e.start)), e;
};
_.parseIdentNode = function() {
  var t = this.startNode();
  return this.type === u.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, (t.name === "class" || t.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = u.name) : this.unexpected(), t;
};
_.parsePrivateIdent = function() {
  var t = this.startNode();
  return this.type === u.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t;
};
_.parseYield = function(t) {
  this.yieldPos || (this.yieldPos = this.start);
  var e = this.startNode();
  return this.next(), this.type === u.semi || this.canInsertSemicolon() || this.type !== u.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(u.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression");
};
_.parseAwait = function(t) {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression");
};
var re = H.prototype;
re.raise = function(t, e) {
  var s = _e(this.input, t);
  e += " (" + s.line + ":" + s.column + ")", this.sourceFile && (e += " in " + this.sourceFile);
  var a = new SyntaxError(e);
  throw a.pos = t, a.loc = s, a.raisedAt = this.pos, a;
};
re.raiseRecoverable = re.raise;
re.curPosition = function() {
  if (this.options.locations)
    return new Rt(this.curLine, this.pos - this.lineStart);
};
var At = H.prototype, Cs = function(e) {
  this.flags = e, this.var = [], this.lexical = [], this.functions = [];
};
At.enterScope = function(t) {
  this.scopeStack.push(new Cs(t));
};
At.exitScope = function() {
  this.scopeStack.pop();
};
At.treatFunctionsAsVarInScope = function(t) {
  return t.flags & Dt || !this.inModule && t.flags & Gt;
};
At.declareName = function(t, e, s) {
  var a = !1;
  if (e === St) {
    var h = this.currentScope();
    a = h.lexical.indexOf(t) > -1 || h.functions.indexOf(t) > -1 || h.var.indexOf(t) > -1, h.lexical.push(t), this.inModule && h.flags & Gt && delete this.undefinedExports[t];
  } else if (e === di) {
    var l = this.currentScope();
    l.lexical.push(t);
  } else if (e === fi) {
    var d = this.currentScope();
    this.treatFunctionsAsVar ? a = d.lexical.indexOf(t) > -1 : a = d.lexical.indexOf(t) > -1 || d.var.indexOf(t) > -1, d.functions.push(t);
  } else
    for (var v = this.scopeStack.length - 1; v >= 0; --v) {
      var g = this.scopeStack[v];
      if (g.lexical.indexOf(t) > -1 && !(g.flags & pi && g.lexical[0] === t) || !this.treatFunctionsAsVarInScope(g) && g.functions.indexOf(t) > -1) {
        a = !0;
        break;
      }
      if (g.var.push(t), this.inModule && g.flags & Gt && delete this.undefinedExports[t], g.flags & ue)
        break;
    }
  a && this.raiseRecoverable(s, "Identifier '" + t + "' has already been declared");
};
At.checkLocalExport = function(t) {
  this.scopeStack[0].lexical.indexOf(t.name) === -1 && this.scopeStack[0].var.indexOf(t.name) === -1 && (this.undefinedExports[t.name] = t);
};
At.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
At.currentVarScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (ue | zt | _t))
      return e;
  }
};
At.currentThisScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (ue | zt | _t) && !(e.flags & Le))
      return e;
  }
};
var Xt = function(e, s, a) {
  this.type = "", this.start = s, this.end = 0, e.options.locations && (this.loc = new Kt(e, a)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [s, 0]);
}, Qt = H.prototype;
Qt.startNode = function() {
  return new Xt(this, this.start, this.startLoc);
};
Qt.startNodeAt = function(t, e) {
  return new Xt(this, t, e);
};
function vi(t, e, s, a) {
  return t.type = e, t.end = s, this.options.locations && (t.loc.end = a), this.options.ranges && (t.range[1] = s), t;
}
Qt.finishNode = function(t, e) {
  return vi.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
};
Qt.finishNodeAt = function(t, e, s, a) {
  return vi.call(this, t, e, s, a);
};
Qt.copyNode = function(t) {
  var e = new Xt(this, t.start, this.startLoc);
  for (var s in t)
    e[s] = t[s];
  return e;
};
var ws = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", gi = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", bi = gi + " Extended_Pictographic", Ti = bi, Si = Ti + " EBase EComp EMod EPres ExtPict", Pi = Si, ks = Pi, As = {
  9: gi,
  10: bi,
  11: Ti,
  12: Si,
  13: Pi,
  14: ks
}, Es = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Is = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Es
}, Ke = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Ci = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", wi = Ci + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", ki = wi + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Ai = ki + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Ei = Ai + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", _s = Ei + " " + ws, Ns = {
  9: Ci,
  10: wi,
  11: ki,
  12: Ai,
  13: Ei,
  14: _s
}, Ii = {};
function Ls(t) {
  var e = Ii[t] = {
    binary: kt(As[t] + " " + Ke),
    binaryOfStrings: kt(Is[t]),
    nonBinary: {
      General_Category: kt(Ke),
      Script: kt(Ns[t])
    }
  };
  e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions;
}
for (var be = 0, ze = [9, 10, 11, 12, 13, 14]; be < ze.length; be += 1) {
  var Os = ze[be];
  Ls(Os);
}
var C = H.prototype, ae = function(e, s) {
  this.parent = e, this.base = s || this;
};
ae.prototype.separatedFrom = function(e) {
  for (var s = this; s; s = s.parent)
    for (var a = e; a; a = a.parent)
      if (s.base === a.base && s !== a)
        return !0;
  return !1;
};
ae.prototype.sibling = function() {
  return new ae(this.parent, this.base);
};
var xt = function(e) {
  this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : "") + (e.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Ii[e.options.ecmaVersion >= 14 ? 14 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
xt.prototype.reset = function(e, s, a) {
  var h = a.indexOf("v") !== -1, l = a.indexOf("u") !== -1;
  this.start = e | 0, this.source = s + "", this.flags = a, h && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = l && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = l && this.parser.options.ecmaVersion >= 9);
};
xt.prototype.raise = function(e) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
};
xt.prototype.at = function(e, s) {
  s === void 0 && (s = !1);
  var a = this.source, h = a.length;
  if (e >= h)
    return -1;
  var l = a.charCodeAt(e);
  if (!(s || this.switchU) || l <= 55295 || l >= 57344 || e + 1 >= h)
    return l;
  var d = a.charCodeAt(e + 1);
  return d >= 56320 && d <= 57343 ? (l << 10) + d - 56613888 : l;
};
xt.prototype.nextIndex = function(e, s) {
  s === void 0 && (s = !1);
  var a = this.source, h = a.length;
  if (e >= h)
    return h;
  var l = a.charCodeAt(e), d;
  return !(s || this.switchU) || l <= 55295 || l >= 57344 || e + 1 >= h || (d = a.charCodeAt(e + 1)) < 56320 || d > 57343 ? e + 1 : e + 2;
};
xt.prototype.current = function(e) {
  return e === void 0 && (e = !1), this.at(this.pos, e);
};
xt.prototype.lookahead = function(e) {
  return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
};
xt.prototype.advance = function(e) {
  e === void 0 && (e = !1), this.pos = this.nextIndex(this.pos, e);
};
xt.prototype.eat = function(e, s) {
  return s === void 0 && (s = !1), this.current(s) === e ? (this.advance(s), !0) : !1;
};
xt.prototype.eatChars = function(e, s) {
  s === void 0 && (s = !1);
  for (var a = this.pos, h = 0, l = e; h < l.length; h += 1) {
    var d = l[h], v = this.at(a, s);
    if (v === -1 || v !== d)
      return !1;
    a = this.nextIndex(a, s);
  }
  return this.pos = a, !0;
};
C.validateRegExpFlags = function(t) {
  for (var e = t.validFlags, s = t.flags, a = !1, h = !1, l = 0; l < s.length; l++) {
    var d = s.charAt(l);
    e.indexOf(d) === -1 && this.raise(t.start, "Invalid regular expression flag"), s.indexOf(d, l + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), d === "u" && (a = !0), d === "v" && (h = !0);
  }
  this.options.ecmaVersion >= 15 && a && h && this.raise(t.start, "Invalid regular expression flag");
};
function Rs(t) {
  for (var e in t)
    return !0;
  return !1;
}
C.validateRegExpPattern = function(t) {
  this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && Rs(t.groupNames) && (t.switchN = !0, this.regexp_pattern(t));
};
C.regexp_pattern = function(t) {
  t.pos = 0, t.lastIntValue = 0, t.lastStringValue = "", t.lastAssertionIsQuantifiable = !1, t.numCapturingParens = 0, t.maxBackReference = 0, t.groupNames = /* @__PURE__ */ Object.create(null), t.backReferenceNames.length = 0, t.branchID = null, this.regexp_disjunction(t), t.pos !== t.source.length && (t.eat(
    41
    /* ) */
  ) && t.raise("Unmatched ')'"), (t.eat(
    93
    /* ] */
  ) || t.eat(
    125
    /* } */
  )) && t.raise("Lone quantifier brackets")), t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
  for (var e = 0, s = t.backReferenceNames; e < s.length; e += 1) {
    var a = s[e];
    t.groupNames[a] || t.raise("Invalid named capture referenced");
  }
};
C.regexp_disjunction = function(t) {
  var e = this.options.ecmaVersion >= 16;
  for (e && (t.branchID = new ae(t.branchID, null)), this.regexp_alternative(t); t.eat(
    124
    /* | */
  ); )
    e && (t.branchID = t.branchID.sibling()), this.regexp_alternative(t);
  e && (t.branchID = t.branchID.parent), this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(
    123
    /* { */
  ) && t.raise("Lone quantifier brackets");
};
C.regexp_alternative = function(t) {
  for (; t.pos < t.source.length && this.regexp_eatTerm(t); )
    ;
};
C.regexp_eatTerm = function(t) {
  return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : (t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) ? (this.regexp_eatQuantifier(t), !0) : !1;
};
C.regexp_eatAssertion = function(t) {
  var e = t.pos;
  if (t.lastAssertionIsQuantifiable = !1, t.eat(
    94
    /* ^ */
  ) || t.eat(
    36
    /* $ */
  ))
    return !0;
  if (t.eat(
    92
    /* \ */
  )) {
    if (t.eat(
      66
      /* B */
    ) || t.eat(
      98
      /* b */
    ))
      return !0;
    t.pos = e;
  }
  if (t.eat(
    40
    /* ( */
  ) && t.eat(
    63
    /* ? */
  )) {
    var s = !1;
    if (this.options.ecmaVersion >= 9 && (s = t.eat(
      60
      /* < */
    )), t.eat(
      61
      /* = */
    ) || t.eat(
      33
      /* ! */
    ))
      return this.regexp_disjunction(t), t.eat(
        41
        /* ) */
      ) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !s, !0;
  }
  return t.pos = e, !1;
};
C.regexp_eatQuantifier = function(t, e) {
  return e === void 0 && (e = !1), this.regexp_eatQuantifierPrefix(t, e) ? (t.eat(
    63
    /* ? */
  ), !0) : !1;
};
C.regexp_eatQuantifierPrefix = function(t, e) {
  return t.eat(
    42
    /* * */
  ) || t.eat(
    43
    /* + */
  ) || t.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(t, e);
};
C.regexp_eatBracedQuantifier = function(t, e) {
  var s = t.pos;
  if (t.eat(
    123
    /* { */
  )) {
    var a = 0, h = -1;
    if (this.regexp_eatDecimalDigits(t) && (a = t.lastIntValue, t.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(t) && (h = t.lastIntValue), t.eat(
      125
      /* } */
    )))
      return h !== -1 && h < a && !e && t.raise("numbers out of order in {} quantifier"), !0;
    t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = s;
  }
  return !1;
};
C.regexp_eatAtom = function(t) {
  return this.regexp_eatPatternCharacters(t) || t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t);
};
C.regexp_eatReverseSolidusAtomEscape = function(t) {
  var e = t.pos;
  if (t.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(t))
      return !0;
    t.pos = e;
  }
  return !1;
};
C.regexp_eatUncapturingGroup = function(t) {
  var e = t.pos;
  if (t.eat(
    40
    /* ( */
  )) {
    if (t.eat(
      63
      /* ? */
    )) {
      if (this.options.ecmaVersion >= 16) {
        var s = this.regexp_eatModifiers(t), a = t.eat(
          45
          /* - */
        );
        if (s || a) {
          for (var h = 0; h < s.length; h++) {
            var l = s.charAt(h);
            s.indexOf(l, h + 1) > -1 && t.raise("Duplicate regular expression modifiers");
          }
          if (a) {
            var d = this.regexp_eatModifiers(t);
            !s && !d && t.current() === 58 && t.raise("Invalid regular expression modifiers");
            for (var v = 0; v < d.length; v++) {
              var g = d.charAt(v);
              (d.indexOf(g, v + 1) > -1 || s.indexOf(g) > -1) && t.raise("Duplicate regular expression modifiers");
            }
          }
        }
      }
      if (t.eat(
        58
        /* : */
      )) {
        if (this.regexp_disjunction(t), t.eat(
          41
          /* ) */
        ))
          return !0;
        t.raise("Unterminated group");
      }
    }
    t.pos = e;
  }
  return !1;
};
C.regexp_eatCapturingGroup = function(t) {
  if (t.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(t) : t.current() === 63 && t.raise("Invalid group"), this.regexp_disjunction(t), t.eat(
      41
      /* ) */
    ))
      return t.numCapturingParens += 1, !0;
    t.raise("Unterminated group");
  }
  return !1;
};
C.regexp_eatModifiers = function(t) {
  for (var e = "", s = 0; (s = t.current()) !== -1 && Ms(s); )
    e += bt(s), t.advance();
  return e;
};
function Ms(t) {
  return t === 105 || t === 109 || t === 115;
}
C.regexp_eatExtendedAtom = function(t) {
  return t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t);
};
C.regexp_eatInvalidBracedQuantifier = function(t) {
  return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1;
};
C.regexp_eatSyntaxCharacter = function(t) {
  var e = t.current();
  return _i(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function _i(t) {
  return t === 36 || t >= 40 && t <= 43 || t === 46 || t === 63 || t >= 91 && t <= 94 || t >= 123 && t <= 125;
}
C.regexp_eatPatternCharacters = function(t) {
  for (var e = t.pos, s = 0; (s = t.current()) !== -1 && !_i(s); )
    t.advance();
  return t.pos !== e;
};
C.regexp_eatExtendedPatternCharacter = function(t) {
  var e = t.current();
  return e !== -1 && e !== 36 && !(e >= 40 && e <= 43) && e !== 46 && e !== 63 && e !== 91 && e !== 94 && e !== 124 ? (t.advance(), !0) : !1;
};
C.regexp_groupSpecifier = function(t) {
  if (t.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(t) || t.raise("Invalid group");
    var e = this.options.ecmaVersion >= 16, s = t.groupNames[t.lastStringValue];
    if (s)
      if (e)
        for (var a = 0, h = s; a < h.length; a += 1) {
          var l = h[a];
          l.separatedFrom(t.branchID) || t.raise("Duplicate capture group name");
        }
      else
        t.raise("Duplicate capture group name");
    e ? (s || (t.groupNames[t.lastStringValue] = [])).push(t.branchID) : t.groupNames[t.lastStringValue] = !0;
  }
};
C.regexp_eatGroupName = function(t) {
  if (t.lastStringValue = "", t.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(t) && t.eat(
      62
      /* > */
    ))
      return !0;
    t.raise("Invalid capture group name");
  }
  return !1;
};
C.regexp_eatRegExpIdentifierName = function(t) {
  if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
    for (t.lastStringValue += bt(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t); )
      t.lastStringValue += bt(t.lastIntValue);
    return !0;
  }
  return !1;
};
C.regexp_eatRegExpIdentifierStart = function(t) {
  var e = t.pos, s = this.options.ecmaVersion >= 11, a = t.current(s);
  return t.advance(s), a === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (a = t.lastIntValue), Ds(a) ? (t.lastIntValue = a, !0) : (t.pos = e, !1);
};
function Ds(t) {
  return ft(t, !0) || t === 36 || t === 95;
}
C.regexp_eatRegExpIdentifierPart = function(t) {
  var e = t.pos, s = this.options.ecmaVersion >= 11, a = t.current(s);
  return t.advance(s), a === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (a = t.lastIntValue), Vs(a) ? (t.lastIntValue = a, !0) : (t.pos = e, !1);
};
function Vs(t) {
  return gt(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
}
C.regexp_eatAtomEscape = function(t) {
  return this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t) ? !0 : (t.switchU && (t.current() === 99 && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1);
};
C.regexp_eatBackReference = function(t) {
  var e = t.pos;
  if (this.regexp_eatDecimalEscape(t)) {
    var s = t.lastIntValue;
    if (t.switchU)
      return s > t.maxBackReference && (t.maxBackReference = s), !0;
    if (s <= t.numCapturingParens)
      return !0;
    t.pos = e;
  }
  return !1;
};
C.regexp_eatKGroupName = function(t) {
  if (t.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(t))
      return t.backReferenceNames.push(t.lastStringValue), !0;
    t.raise("Invalid named reference");
  }
  return !1;
};
C.regexp_eatCharacterEscape = function(t) {
  return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t);
};
C.regexp_eatCControlLetter = function(t) {
  var e = t.pos;
  if (t.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(t))
      return !0;
    t.pos = e;
  }
  return !1;
};
C.regexp_eatZero = function(t) {
  return t.current() === 48 && !pe(t.lookahead()) ? (t.lastIntValue = 0, t.advance(), !0) : !1;
};
C.regexp_eatControlEscape = function(t) {
  var e = t.current();
  return e === 116 ? (t.lastIntValue = 9, t.advance(), !0) : e === 110 ? (t.lastIntValue = 10, t.advance(), !0) : e === 118 ? (t.lastIntValue = 11, t.advance(), !0) : e === 102 ? (t.lastIntValue = 12, t.advance(), !0) : e === 114 ? (t.lastIntValue = 13, t.advance(), !0) : !1;
};
C.regexp_eatControlLetter = function(t) {
  var e = t.current();
  return Ni(e) ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
function Ni(t) {
  return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
C.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
  e === void 0 && (e = !1);
  var s = t.pos, a = e || t.switchU;
  if (t.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(t, 4)) {
      var h = t.lastIntValue;
      if (a && h >= 55296 && h <= 56319) {
        var l = t.pos;
        if (t.eat(
          92
          /* \ */
        ) && t.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(t, 4)) {
          var d = t.lastIntValue;
          if (d >= 56320 && d <= 57343)
            return t.lastIntValue = (h - 55296) * 1024 + (d - 56320) + 65536, !0;
        }
        t.pos = l, t.lastIntValue = h;
      }
      return !0;
    }
    if (a && t.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(t) && t.eat(
      125
      /* } */
    ) && Fs(t.lastIntValue))
      return !0;
    a && t.raise("Invalid unicode escape"), t.pos = s;
  }
  return !1;
};
function Fs(t) {
  return t >= 0 && t <= 1114111;
}
C.regexp_eatIdentityEscape = function(t) {
  if (t.switchU)
    return this.regexp_eatSyntaxCharacter(t) ? !0 : t.eat(
      47
      /* / */
    ) ? (t.lastIntValue = 47, !0) : !1;
  var e = t.current();
  return e !== 99 && (!t.switchN || e !== 107) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
C.regexp_eatDecimalEscape = function(t) {
  t.lastIntValue = 0;
  var e = t.current();
  if (e >= 49 && e <= 57) {
    do
      t.lastIntValue = 10 * t.lastIntValue + (e - 48), t.advance();
    while ((e = t.current()) >= 48 && e <= 57);
    return !0;
  }
  return !1;
};
var Li = 0, Tt = 1, ut = 2;
C.regexp_eatCharacterClassEscape = function(t) {
  var e = t.current();
  if (js(e))
    return t.lastIntValue = -1, t.advance(), Tt;
  var s = !1;
  if (t.switchU && this.options.ecmaVersion >= 9 && ((s = e === 80) || e === 112)) {
    t.lastIntValue = -1, t.advance();
    var a;
    if (t.eat(
      123
      /* { */
    ) && (a = this.regexp_eatUnicodePropertyValueExpression(t)) && t.eat(
      125
      /* } */
    ))
      return s && a === ut && t.raise("Invalid property name"), a;
    t.raise("Invalid property name");
  }
  return Li;
};
function js(t) {
  return t === 100 || t === 68 || t === 115 || t === 83 || t === 119 || t === 87;
}
C.regexp_eatUnicodePropertyValueExpression = function(t) {
  var e = t.pos;
  if (this.regexp_eatUnicodePropertyName(t) && t.eat(
    61
    /* = */
  )) {
    var s = t.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(t)) {
      var a = t.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(t, s, a), Tt;
    }
  }
  if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
    var h = t.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(t, h);
  }
  return Li;
};
C.regexp_validateUnicodePropertyNameAndValue = function(t, e, s) {
  Mt(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(s) || t.raise("Invalid property value");
};
C.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
  if (t.unicodeProperties.binary.test(e))
    return Tt;
  if (t.switchV && t.unicodeProperties.binaryOfStrings.test(e))
    return ut;
  t.raise("Invalid property name");
};
C.regexp_eatUnicodePropertyName = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; Oi(e = t.current()); )
    t.lastStringValue += bt(e), t.advance();
  return t.lastStringValue !== "";
};
function Oi(t) {
  return Ni(t) || t === 95;
}
C.regexp_eatUnicodePropertyValue = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; Bs(e = t.current()); )
    t.lastStringValue += bt(e), t.advance();
  return t.lastStringValue !== "";
};
function Bs(t) {
  return Oi(t) || pe(t);
}
C.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
  return this.regexp_eatUnicodePropertyValue(t);
};
C.regexp_eatCharacterClass = function(t) {
  if (t.eat(
    91
    /* [ */
  )) {
    var e = t.eat(
      94
      /* ^ */
    ), s = this.regexp_classContents(t);
    return t.eat(
      93
      /* ] */
    ) || t.raise("Unterminated character class"), e && s === ut && t.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
C.regexp_classContents = function(t) {
  return t.current() === 93 ? Tt : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), Tt);
};
C.regexp_nonEmptyClassRanges = function(t) {
  for (; this.regexp_eatClassAtom(t); ) {
    var e = t.lastIntValue;
    if (t.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(t)) {
      var s = t.lastIntValue;
      t.switchU && (e === -1 || s === -1) && t.raise("Invalid character class"), e !== -1 && s !== -1 && e > s && t.raise("Range out of order in character class");
    }
  }
};
C.regexp_eatClassAtom = function(t) {
  var e = t.pos;
  if (t.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(t))
      return !0;
    if (t.switchU) {
      var s = t.current();
      (s === 99 || Di(s)) && t.raise("Invalid class escape"), t.raise("Invalid escape");
    }
    t.pos = e;
  }
  var a = t.current();
  return a !== 93 ? (t.lastIntValue = a, t.advance(), !0) : !1;
};
C.regexp_eatClassEscape = function(t) {
  var e = t.pos;
  if (t.eat(
    98
    /* b */
  ))
    return t.lastIntValue = 8, !0;
  if (t.switchU && t.eat(
    45
    /* - */
  ))
    return t.lastIntValue = 45, !0;
  if (!t.switchU && t.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(t))
      return !0;
    t.pos = e;
  }
  return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t);
};
C.regexp_classSetExpression = function(t) {
  var e = Tt, s;
  if (!this.regexp_eatClassSetRange(t)) if (s = this.regexp_eatClassSetOperand(t)) {
    s === ut && (e = ut);
    for (var a = t.pos; t.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (t.current() !== 38 && (s = this.regexp_eatClassSetOperand(t))) {
        s !== ut && (e = Tt);
        continue;
      }
      t.raise("Invalid character in character class");
    }
    if (a !== t.pos)
      return e;
    for (; t.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(t) || t.raise("Invalid character in character class");
    if (a !== t.pos)
      return e;
  } else
    t.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(t)) {
      if (s = this.regexp_eatClassSetOperand(t), !s)
        return e;
      s === ut && (e = ut);
    }
};
C.regexp_eatClassSetRange = function(t) {
  var e = t.pos;
  if (this.regexp_eatClassSetCharacter(t)) {
    var s = t.lastIntValue;
    if (t.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(t)) {
      var a = t.lastIntValue;
      return s !== -1 && a !== -1 && s > a && t.raise("Range out of order in character class"), !0;
    }
    t.pos = e;
  }
  return !1;
};
C.regexp_eatClassSetOperand = function(t) {
  return this.regexp_eatClassSetCharacter(t) ? Tt : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t);
};
C.regexp_eatNestedClass = function(t) {
  var e = t.pos;
  if (t.eat(
    91
    /* [ */
  )) {
    var s = t.eat(
      94
      /* ^ */
    ), a = this.regexp_classContents(t);
    if (t.eat(
      93
      /* ] */
    ))
      return s && a === ut && t.raise("Negated character class may contain strings"), a;
    t.pos = e;
  }
  if (t.eat(
    92
    /* \ */
  )) {
    var h = this.regexp_eatCharacterClassEscape(t);
    if (h)
      return h;
    t.pos = e;
  }
  return null;
};
C.regexp_eatClassStringDisjunction = function(t) {
  var e = t.pos;
  if (t.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (t.eat(
      123
      /* { */
    )) {
      var s = this.regexp_classStringDisjunctionContents(t);
      if (t.eat(
        125
        /* } */
      ))
        return s;
    } else
      t.raise("Invalid escape");
    t.pos = e;
  }
  return null;
};
C.regexp_classStringDisjunctionContents = function(t) {
  for (var e = this.regexp_classString(t); t.eat(
    124
    /* | */
  ); )
    this.regexp_classString(t) === ut && (e = ut);
  return e;
};
C.regexp_classString = function(t) {
  for (var e = 0; this.regexp_eatClassSetCharacter(t); )
    e++;
  return e === 1 ? Tt : ut;
};
C.regexp_eatClassSetCharacter = function(t) {
  var e = t.pos;
  if (t.eat(
    92
    /* \ */
  ))
    return this.regexp_eatCharacterEscape(t) || this.regexp_eatClassSetReservedPunctuator(t) ? !0 : t.eat(
      98
      /* b */
    ) ? (t.lastIntValue = 8, !0) : (t.pos = e, !1);
  var s = t.current();
  return s < 0 || s === t.lookahead() && Us(s) || qs(s) ? !1 : (t.advance(), t.lastIntValue = s, !0);
};
function Us(t) {
  return t === 33 || t >= 35 && t <= 38 || t >= 42 && t <= 44 || t === 46 || t >= 58 && t <= 64 || t === 94 || t === 96 || t === 126;
}
function qs(t) {
  return t === 40 || t === 41 || t === 45 || t === 47 || t >= 91 && t <= 93 || t >= 123 && t <= 125;
}
C.regexp_eatClassSetReservedPunctuator = function(t) {
  var e = t.current();
  return Hs(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function Hs(t) {
  return t === 33 || t === 35 || t === 37 || t === 38 || t === 44 || t === 45 || t >= 58 && t <= 62 || t === 64 || t === 96 || t === 126;
}
C.regexp_eatClassControlLetter = function(t) {
  var e = t.current();
  return pe(e) || e === 95 ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
C.regexp_eatHexEscapeSequence = function(t) {
  var e = t.pos;
  if (t.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(t, 2))
      return !0;
    t.switchU && t.raise("Invalid escape"), t.pos = e;
  }
  return !1;
};
C.regexp_eatDecimalDigits = function(t) {
  var e = t.pos, s = 0;
  for (t.lastIntValue = 0; pe(s = t.current()); )
    t.lastIntValue = 10 * t.lastIntValue + (s - 48), t.advance();
  return t.pos !== e;
};
function pe(t) {
  return t >= 48 && t <= 57;
}
C.regexp_eatHexDigits = function(t) {
  var e = t.pos, s = 0;
  for (t.lastIntValue = 0; Ri(s = t.current()); )
    t.lastIntValue = 16 * t.lastIntValue + Mi(s), t.advance();
  return t.pos !== e;
};
function Ri(t) {
  return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
}
function Mi(t) {
  return t >= 65 && t <= 70 ? 10 + (t - 65) : t >= 97 && t <= 102 ? 10 + (t - 97) : t - 48;
}
C.regexp_eatLegacyOctalEscapeSequence = function(t) {
  if (this.regexp_eatOctalDigit(t)) {
    var e = t.lastIntValue;
    if (this.regexp_eatOctalDigit(t)) {
      var s = t.lastIntValue;
      e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = e * 64 + s * 8 + t.lastIntValue : t.lastIntValue = e * 8 + s;
    } else
      t.lastIntValue = e;
    return !0;
  }
  return !1;
};
C.regexp_eatOctalDigit = function(t) {
  var e = t.current();
  return Di(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1);
};
function Di(t) {
  return t >= 48 && t <= 55;
}
C.regexp_eatFixedHexDigits = function(t, e) {
  var s = t.pos;
  t.lastIntValue = 0;
  for (var a = 0; a < e; ++a) {
    var h = t.current();
    if (!Ri(h))
      return t.pos = s, !1;
    t.lastIntValue = 16 * t.lastIntValue + Mi(h), t.advance();
  }
  return !0;
};
var le = function(e) {
  this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new Kt(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
}, R = H.prototype;
R.next = function(t) {
  !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new le(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
R.getToken = function() {
  return this.next(), new le(this);
};
typeof Symbol < "u" && (R[Symbol.iterator] = function() {
  var t = this;
  return {
    next: function() {
      var e = t.getToken();
      return {
        done: e.type === u.eof,
        value: e
      };
    }
  };
});
R.nextToken = function() {
  var t = this.curContext();
  if ((!t || !t.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(u.eof);
  if (t.override)
    return t.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
R.readToken = function(t) {
  return ft(t, this.options.ecmaVersion >= 6) || t === 92 ? this.readWord() : this.getTokenFromCode(t);
};
R.fullCharCodeAtPos = function() {
  var t = this.input.charCodeAt(this.pos);
  if (t <= 55295 || t >= 56320)
    return t;
  var e = this.input.charCodeAt(this.pos + 1);
  return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888;
};
R.skipBlockComment = function() {
  var t = this.options.onComment && this.curPosition(), e = this.pos, s = this.input.indexOf("*/", this.pos += 2);
  if (s === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
    for (var a = void 0, h = e; (a = hi(this.input, h, this.pos)) > -1; )
      ++this.curLine, h = this.lineStart = a;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(e + 2, s),
    e,
    this.pos,
    t,
    this.curPosition()
  );
};
R.skipLineComment = function(t) {
  for (var e = this.pos, s = this.options.onComment && this.curPosition(), a = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !It(a); )
    a = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(e + t, this.pos),
    e,
    this.pos,
    s,
    this.curPosition()
  );
};
R.skipSpace = function() {
  t: for (; this.pos < this.input.length; ) {
    var t = this.input.charCodeAt(this.pos);
    switch (t) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break t;
        }
        break;
      default:
        if (t > 8 && t < 14 || t >= 5760 && Ie.test(String.fromCharCode(t)))
          ++this.pos;
        else
          break t;
    }
  }
};
R.finishToken = function(t, e) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var s = this.type;
  this.type = t, this.value = e, this.updateContext(s);
};
R.readToken_dot = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t >= 48 && t <= 57)
    return this.readNumber(!0);
  var e = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && t === 46 && e === 46 ? (this.pos += 3, this.finishToken(u.ellipsis)) : (++this.pos, this.finishToken(u.dot));
};
R.readToken_slash = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : t === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.slash, 1);
};
R.readToken_mult_modulo_exp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), s = 1, a = t === 42 ? u.star : u.modulo;
  return this.options.ecmaVersion >= 7 && t === 42 && e === 42 && (++s, a = u.starstar, e = this.input.charCodeAt(this.pos + 2)), e === 61 ? this.finishOp(u.assign, s + 1) : this.finishOp(a, s);
};
R.readToken_pipe_amp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e === t) {
    if (this.options.ecmaVersion >= 12) {
      var s = this.input.charCodeAt(this.pos + 2);
      if (s === 61)
        return this.finishOp(u.assign, 3);
    }
    return this.finishOp(t === 124 ? u.logicalOR : u.logicalAND, 2);
  }
  return e === 61 ? this.finishOp(u.assign, 2) : this.finishOp(t === 124 ? u.bitwiseOR : u.bitwiseAND, 1);
};
R.readToken_caret = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.bitwiseXOR, 1);
};
R.readToken_plus_min = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === t ? e === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || J.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(u.incDec, 2) : e === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.plusMin, 1);
};
R.readToken_lt_gt = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), s = 1;
  return e === t ? (s = t === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + s) === 61 ? this.finishOp(u.assign, s + 1) : this.finishOp(u.bitShift, s)) : e === 33 && t === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (e === 61 && (s = 2), this.finishOp(u.relational, s));
};
R.readToken_eq_excl = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(u.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : t === 61 && e === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(u.arrow)) : this.finishOp(t === 61 ? u.eq : u.prefix, 1);
};
R.readToken_question = function() {
  var t = this.options.ecmaVersion;
  if (t >= 11) {
    var e = this.input.charCodeAt(this.pos + 1);
    if (e === 46) {
      var s = this.input.charCodeAt(this.pos + 2);
      if (s < 48 || s > 57)
        return this.finishOp(u.questionDot, 2);
    }
    if (e === 63) {
      if (t >= 12) {
        var a = this.input.charCodeAt(this.pos + 2);
        if (a === 61)
          return this.finishOp(u.assign, 3);
      }
      return this.finishOp(u.coalesce, 2);
    }
  }
  return this.finishOp(u.question, 1);
};
R.readToken_numberSign = function() {
  var t = this.options.ecmaVersion, e = 35;
  if (t >= 13 && (++this.pos, e = this.fullCharCodeAtPos(), ft(e, !0) || e === 92))
    return this.finishToken(u.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + bt(e) + "'");
};
R.getTokenFromCode = function(t) {
  switch (t) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      return this.readToken_dot();
    // Punctuation tokens.
    case 40:
      return ++this.pos, this.finishToken(u.parenL);
    case 41:
      return ++this.pos, this.finishToken(u.parenR);
    case 59:
      return ++this.pos, this.finishToken(u.semi);
    case 44:
      return ++this.pos, this.finishToken(u.comma);
    case 91:
      return ++this.pos, this.finishToken(u.bracketL);
    case 93:
      return ++this.pos, this.finishToken(u.bracketR);
    case 123:
      return ++this.pos, this.finishToken(u.braceL);
    case 125:
      return ++this.pos, this.finishToken(u.braceR);
    case 58:
      return ++this.pos, this.finishToken(u.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(u.backQuote);
    case 48:
      var e = this.input.charCodeAt(this.pos + 1);
      if (e === 120 || e === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (e === 111 || e === 79)
          return this.readRadixNumber(8);
        if (e === 98 || e === 66)
          return this.readRadixNumber(2);
      }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    // Quotes produce strings.
    case 34:
    case 39:
      return this.readString(t);
    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(t);
    case 124:
    case 38:
      return this.readToken_pipe_amp(t);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(t);
    case 60:
    case 62:
      return this.readToken_lt_gt(t);
    case 61:
    case 33:
      return this.readToken_eq_excl(t);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(u.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + bt(t) + "'");
};
R.finishOp = function(t, e) {
  var s = this.input.slice(this.pos, this.pos + e);
  return this.pos += e, this.finishToken(t, s);
};
R.readRegexp = function() {
  for (var t, e, s = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(s, "Unterminated regular expression");
    var a = this.input.charAt(this.pos);
    if (J.test(a) && this.raise(s, "Unterminated regular expression"), t)
      t = !1;
    else {
      if (a === "[")
        e = !0;
      else if (a === "]" && e)
        e = !1;
      else if (a === "/" && !e)
        break;
      t = a === "\\";
    }
    ++this.pos;
  }
  var h = this.input.slice(s, this.pos);
  ++this.pos;
  var l = this.pos, d = this.readWord1();
  this.containsEsc && this.unexpected(l);
  var v = this.regexpState || (this.regexpState = new xt(this));
  v.reset(s, h, d), this.validateRegExpFlags(v), this.validateRegExpPattern(v);
  var g = null;
  try {
    g = new RegExp(h, d);
  } catch {
  }
  return this.finishToken(u.regexp, { pattern: h, flags: d, value: g });
};
R.readInt = function(t, e, s) {
  for (var a = this.options.ecmaVersion >= 12 && e === void 0, h = s && this.input.charCodeAt(this.pos) === 48, l = this.pos, d = 0, v = 0, g = 0, o = e ?? 1 / 0; g < o; ++g, ++this.pos) {
    var P = this.input.charCodeAt(this.pos), N = void 0;
    if (a && P === 95) {
      h && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), v === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), g === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), v = P;
      continue;
    }
    if (P >= 97 ? N = P - 97 + 10 : P >= 65 ? N = P - 65 + 10 : P >= 48 && P <= 57 ? N = P - 48 : N = 1 / 0, N >= t)
      break;
    v = P, d = d * t + N;
  }
  return a && v === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === l || e != null && this.pos - l !== e ? null : d;
};
function $s(t, e) {
  return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
}
function Vi(t) {
  return typeof BigInt != "function" ? null : BigInt(t.replace(/_/g, ""));
}
R.readRadixNumber = function(t) {
  var e = this.pos;
  this.pos += 2;
  var s = this.readInt(t);
  return s == null && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (s = Vi(this.input.slice(e, this.pos)), ++this.pos) : ft(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(u.num, s);
};
R.readNumber = function(t) {
  var e = this.pos;
  !t && this.readInt(10, void 0, !0) === null && this.raise(e, "Invalid number");
  var s = this.pos - e >= 2 && this.input.charCodeAt(e) === 48;
  s && this.strict && this.raise(e, "Invalid number");
  var a = this.input.charCodeAt(this.pos);
  if (!s && !t && this.options.ecmaVersion >= 11 && a === 110) {
    var h = Vi(this.input.slice(e, this.pos));
    return ++this.pos, ft(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(u.num, h);
  }
  s && /[89]/.test(this.input.slice(e, this.pos)) && (s = !1), a === 46 && !s && (++this.pos, this.readInt(10), a = this.input.charCodeAt(this.pos)), (a === 69 || a === 101) && !s && (a = this.input.charCodeAt(++this.pos), (a === 43 || a === 45) && ++this.pos, this.readInt(10) === null && this.raise(e, "Invalid number")), ft(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var l = $s(this.input.slice(e, this.pos), s);
  return this.finishToken(u.num, l);
};
R.readCodePoint = function() {
  var t = this.input.charCodeAt(this.pos), e;
  if (t === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var s = ++this.pos;
    e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(s, "Code point out of bounds");
  } else
    e = this.readHexChar(4);
  return e;
};
R.readString = function(t) {
  for (var e = "", s = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var a = this.input.charCodeAt(this.pos);
    if (a === t)
      break;
    a === 92 ? (e += this.input.slice(s, this.pos), e += this.readEscapedChar(!1), s = this.pos) : a === 8232 || a === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (It(a) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return e += this.input.slice(s, this.pos++), this.finishToken(u.string, e);
};
var Fi = {};
R.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (t) {
    if (t === Fi)
      this.readInvalidTemplateToken();
    else
      throw t;
  }
  this.inTemplateElement = !1;
};
R.invalidStringToken = function(t, e) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Fi;
  this.raise(t, e);
};
R.readTmplToken = function() {
  for (var t = "", e = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var s = this.input.charCodeAt(this.pos);
    if (s === 96 || s === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === u.template || this.type === u.invalidTemplate) ? s === 36 ? (this.pos += 2, this.finishToken(u.dollarBraceL)) : (++this.pos, this.finishToken(u.backQuote)) : (t += this.input.slice(e, this.pos), this.finishToken(u.template, t));
    if (s === 92)
      t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
    else if (It(s)) {
      switch (t += this.input.slice(e, this.pos), ++this.pos, s) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          t += `
`;
          break;
        default:
          t += String.fromCharCode(s);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), e = this.pos;
    } else
      ++this.pos;
  }
};
R.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      // fall through
      case "`":
        return this.finishToken(u.invalidTemplate, this.input.slice(this.start, this.pos));
      case "\r":
        this.input[this.pos + 1] === `
` && ++this.pos;
      // fall through
      case `
`:
      case "\u2028":
      case "\u2029":
        ++this.curLine, this.lineStart = this.pos + 1;
        break;
    }
  this.raise(this.start, "Unterminated template");
};
R.readEscapedChar = function(t) {
  var e = this.input.charCodeAt(++this.pos);
  switch (++this.pos, e) {
    case 110:
      return `
`;
    // 'n' -> '\n'
    case 114:
      return "\r";
    // 'r' -> '\r'
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    // 'x'
    case 117:
      return bt(this.readCodePoint());
    // 'u'
    case 116:
      return "	";
    // 't' -> '\t'
    case 98:
      return "\b";
    // 'b' -> '\b'
    case 118:
      return "\v";
    // 'v' -> '\u000b'
    case 102:
      return "\f";
    // 'f' -> '\f'
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    // '\r\n'
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (this.strict && this.invalidStringToken(
        this.pos - 1,
        "Invalid escape sequence"
      ), t) {
        var s = this.pos - 1;
        this.invalidStringToken(
          s,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (e >= 48 && e <= 55) {
        var a = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], h = parseInt(a, 8);
        return h > 255 && (a = a.slice(0, -1), h = parseInt(a, 8)), this.pos += a.length - 1, e = this.input.charCodeAt(this.pos), (a !== "0" || e === 56 || e === 57) && (this.strict || t) && this.invalidStringToken(
          this.pos - 1 - a.length,
          t ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(h);
      }
      return It(e) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(e);
  }
};
R.readHexChar = function(t) {
  var e = this.pos, s = this.readInt(16, t);
  return s === null && this.invalidStringToken(e, "Bad character escape sequence"), s;
};
R.readWord1 = function() {
  this.containsEsc = !1;
  for (var t = "", e = !0, s = this.pos, a = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var h = this.fullCharCodeAtPos();
    if (gt(h, a))
      this.pos += h <= 65535 ? 1 : 2;
    else if (h === 92) {
      this.containsEsc = !0, t += this.input.slice(s, this.pos);
      var l = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var d = this.readCodePoint();
      (e ? ft : gt)(d, a) || this.invalidStringToken(l, "Invalid Unicode escape"), t += bt(d), s = this.pos;
    } else
      break;
    e = !1;
  }
  return t + this.input.slice(s, this.pos);
};
R.readWord = function() {
  var t = this.readWord1(), e = u.name;
  return this.keywords.test(t) && (e = Ot[t]), this.finishToken(e, t);
};
var ji = "8.15.0";
H.acorn = {
  Parser: H,
  version: ji,
  defaultOptions: ee,
  Position: Rt,
  SourceLocation: Kt,
  getLineInfo: _e,
  Node: Xt,
  TokenType: O,
  tokTypes: u,
  keywordTypes: Ot,
  TokContext: X,
  tokContexts: F,
  isIdentifierChar: gt,
  isIdentifierStart: ft,
  Token: le,
  isNewLine: It,
  lineBreak: J,
  lineBreakG: oi,
  nonASCIIwhitespace: Ie
};
function Gs(t, e) {
  return H.parse(t, e);
}
function Ws(t, e, s) {
  return H.parseExpressionAt(t, e, s);
}
function Ks(t, e) {
  return H.tokenizer(t, e);
}
const zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: Xt,
  Parser: H,
  Position: Rt,
  SourceLocation: Kt,
  TokContext: X,
  Token: le,
  TokenType: O,
  defaultOptions: ee,
  getLineInfo: _e,
  isIdentifierChar: gt,
  isIdentifierStart: ft,
  isNewLine: It,
  keywordTypes: Ot,
  lineBreak: J,
  lineBreakG: oi,
  nonASCIIwhitespace: Ie,
  parse: Gs,
  parseExpressionAt: Ws,
  tokContexts: F,
  tokTypes: u,
  tokenizer: Ks,
  version: ji
}, Symbol.toStringTag, { value: "Module" }));
function Xe(t, e) {
  for (var s = 0; s < e.length; s++) {
    var a = e[s];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, typeof (h = (function(l, d) {
      if (typeof l != "object" || l === null) return l;
      var v = l[Symbol.toPrimitive];
      if (v !== void 0) {
        var g = v.call(l, "string");
        if (typeof g != "object") return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(l);
    })(a.key)) == "symbol" ? h : String(h), a);
  }
  var h;
}
function ne() {
  return ne = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var s = arguments[e];
      for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
    }
    return t;
  }, ne.apply(this, arguments);
}
function te(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ke(t, e);
}
function ke(t, e) {
  return ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, a) {
    return s.__proto__ = a, s;
  }, ke(t, e);
}
function Qe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var s = 0, a = new Array(e); s < e; s++) a[s] = t[s];
  return a;
}
function Je(t, e) {
  var s = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (s) return (s = s.call(t)).next.bind(s);
  if (Array.isArray(t) || (s = (function(h, l) {
    if (h) {
      if (typeof h == "string") return Qe(h, l);
      var d = Object.prototype.toString.call(h).slice(8, -1);
      return d === "Object" && h.constructor && (d = h.constructor.name), d === "Map" || d === "Set" ? Array.from(h) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Qe(h, l) : void 0;
    }
  })(t)) || e) {
    s && (t = s);
    var a = 0;
    return function() {
      return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var st = !0;
function rt(t, e) {
  return e === void 0 && (e = {}), new O("name", e);
}
var Xs = /* @__PURE__ */ new WeakMap();
function Qs(t) {
  var e = Xs.get(t.Parser.acorn || t);
  if (!e) {
    var s = { assert: rt(0, { startsExpr: st }), asserts: rt(0, { startsExpr: st }), global: rt(0, { startsExpr: st }), keyof: rt(0, { startsExpr: st }), readonly: rt(0, { startsExpr: st }), unique: rt(0, { startsExpr: st }), abstract: rt(0, { startsExpr: st }), declare: rt(0, { startsExpr: st }), enum: rt(0, { startsExpr: st }), module: rt(0, { startsExpr: st }), namespace: rt(0, { startsExpr: st }), interface: rt(0, { startsExpr: st }), type: rt(0, { startsExpr: st }) }, a = { at: new O("@"), jsxName: new O("jsxName"), jsxText: new O("jsxText", { beforeExpr: !0 }), jsxTagStart: new O("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new O("jsxTagEnd") }, h = { tc_oTag: new X("<tag", !1, !1), tc_cTag: new X("</tag", !1, !1), tc_expr: new X("<tag>...</tag>", !0, !0) }, l = new RegExp("^(?:" + Object.keys(s).join("|") + ")$");
    a.jsxTagStart.updateContext = function() {
      this.context.push(h.tc_expr), this.context.push(h.tc_oTag), this.exprAllowed = !1;
    }, a.jsxTagEnd.updateContext = function(d) {
      var v = this.context.pop();
      v === h.tc_oTag && d === u.slash || v === h.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === h.tc_expr) : this.exprAllowed = !0;
    }, e = { tokTypes: ne({}, s, a), tokContexts: ne({}, h), keywordsRegExp: l, tokenIsLiteralPropertyName: function(d) {
      return [u.name, u.string, u.num].concat(Object.values(Ot), Object.values(s)).includes(d);
    }, tokenIsKeywordOrIdentifier: function(d) {
      return [u.name].concat(Object.values(Ot), Object.values(s)).includes(d);
    }, tokenIsIdentifier: function(d) {
      return [].concat(Object.values(s), [u.name]).includes(d);
    }, tokenIsTSDeclarationStart: function(d) {
      return [s.abstract, s.declare, s.enum, s.module, s.namespace, s.interface, s.type].includes(d);
    }, tokenIsTSTypeOperator: function(d) {
      return [s.keyof, s.readonly, s.unique].includes(d);
    }, tokenIsTemplate: function(d) {
      return d === u.invalidTemplate;
    } };
  }
  return e;
}
var Bt = 1024, Js = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), Ye = new RegExp("(?=(" + Js.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), Ut = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function Ys(t, e) {
  var s = e.key.name, a = t[s], h = "true";
  return e.type !== "MethodDefinition" || e.kind !== "get" && e.kind !== "set" || (h = (e.static ? "s" : "i") + e.kind), a === "iget" && h === "iset" || a === "iset" && h === "iget" || a === "sget" && h === "sset" || a === "sset" && h === "sget" ? (t[s] = "true", !1) : !!a || (t[s] = h, !1);
}
function Ze(t, e) {
  var s = t.key;
  return !t.computed && (s.type === "Identifier" && s.name === e || s.type === "Literal" && s.value === e);
}
var A = { AbstractMethodHasImplementation: function(t) {
  return "Method '" + t.methodName + "' cannot have an implementation because it is marked abstract.";
}, AbstractPropertyHasInitializer: function(t) {
  return "Property '" + t.propertyName + "' cannot have an initializer because it is marked abstract.";
}, AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.", AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.", CannotFindName: function(t) {
  return "Cannot find name '" + t.name + "'.";
}, ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.", ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.", ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.", ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.", DeclareAccessor: function(t) {
  return "'declare' is not allowed in " + t.kind + "ters.";
}, DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.", DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.", DuplicateAccessibilityModifier: function() {
  return "Accessibility modifier already seen.";
}, DuplicateModifier: function(t) {
  return "Duplicate modifier: '" + t.modifier + "'.";
}, EmptyHeritageClauseType: function(t) {
  return "'" + t.token + "' list cannot be empty.";
}, EmptyTypeArguments: "Type argument list cannot be empty.", EmptyTypeParameters: "Type parameter list cannot be empty.", ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.", ImportAliasHasImportType: "An import alias can not use 'import type'.", IncompatibleModifiers: function(t) {
  var e = t.modifiers;
  return "'" + e[0] + "' modifier cannot be used with '" + e[1] + "' modifier.";
}, IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.", IndexSignatureHasAccessibility: function(t) {
  return "Index signatures cannot have an accessibility modifier ('" + t.modifier + "').";
}, IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.", IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.", IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.", InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.", InvalidModifierOnTypeMember: function(t) {
  return "'" + t.modifier + "' modifier cannot appear on a type member.";
}, InvalidModifierOnTypeParameter: function(t) {
  return "'" + t.modifier + "' modifier cannot appear on a type parameter.";
}, InvalidModifierOnTypeParameterPositions: function(t) {
  return "'" + t.modifier + "' modifier can only appear on a type parameter of a class, interface or type alias.";
}, InvalidModifiersOrder: function(t) {
  var e = t.orderedModifiers;
  return "'" + e[0] + "' modifier must precede '" + e[1] + "' modifier.";
}, InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.", InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.", MissingInterfaceName: "'interface' declarations must be followed by an identifier.", MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.", NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.", NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.", OptionalTypeBeforeRequired: "A required element cannot follow an optional element.", OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.", PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.", PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.", PrivateElementHasAccessibility: function(t) {
  return "Private elements cannot have an accessibility modifier ('" + t.modifier + "').";
}, PrivateMethodsHasAccessibility: function(t) {
  return "Private methods cannot have an accessibility modifier ('" + t.modifier + "').";
}, ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.", ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.", ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.", SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.", SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.", SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.", SingleTypeParameterWithoutTrailingComma: function(t) {
  var e = t.typeParameterName;
  return "Single type parameter " + e + " should have a trailing comma. Example usage: <" + e + ",>.";
}, StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.", TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.", TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.", TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.", UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.", UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.", GenericsEndWithComma: "Trailing comma is not allowed at the end of generics.", UnexpectedTypeAnnotation: "Did not expect a type annotation here.", UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.", UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.", UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.", UnsupportedSignatureParameterKind: function(t) {
  return "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got " + t.type + ".";
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, Zs = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, tr = /^[\da-fA-F]+$/, er = /^\d+$/;
function $t(t) {
  return t && (t.type === "JSXIdentifier" ? t.name : t.type === "JSXNamespacedName" ? t.namespace.name + ":" + t.name.name : t.type === "JSXMemberExpression" ? $t(t.object) + "." + $t(t.property) : void 0);
}
var Te = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function ti(t) {
  if (!t) throw new Error("Assert fail");
}
function ir(t) {
  return t === "accessor";
}
function sr(t) {
  return t === "in" || t === "out";
}
function Se(t, e) {
  return 2 | (t ? 4 : 0) | (e ? 8 : 0);
}
function rr(t) {
  if (t.type !== "MemberExpression") return !1;
  var e = t.property;
  return (!t.computed || !(e.type !== "TemplateLiteral" || e.expressions.length > 0)) && Bi(t.object);
}
function Bi(t) {
  return t.type === "Identifier" || t.type === "MemberExpression" && !t.computed && Bi(t.object);
}
function ei(t) {
  return t === "private" || t === "public" || t === "protected";
}
function ar(t) {
  var e = {}, s = e.dts, a = s !== void 0 && s, h = e.allowSatisfies, l = h !== void 0 && h;
  return function(d) {
    var v = d.acorn || zs, g = Qs(v), o = v.tokTypes, P = v.keywordTypes, N = v.isIdentifierStart, j = v.lineBreak, nt = v.isNewLine, lt = v.tokContexts, Nt = v.isIdentifierChar, I = g.tokTypes, Z = g.tokContexts, fe = g.keywordsRegExp, $i = g.tokenIsLiteralPropertyName, Gi = g.tokenIsTemplate, Wi = g.tokenIsTSDeclarationStart, V = g.tokenIsIdentifier, Jt = g.tokenIsKeywordOrIdentifier, Ki = g.tokenIsTSTypeOperator;
    function zi(S, tt, z) {
      z === void 0 && (z = S.length);
      for (var $ = tt; $ < z; $++) {
        var D = S.charCodeAt($);
        if (nt(D)) return $ < z - 1 && D === 13 && S.charCodeAt($ + 1) === 10 ? $ + 2 : $ + 1;
      }
      return -1;
    }
    d = (function(S, tt, z) {
      var $ = z.tokTypes, D = tt.tokTypes;
      return (function(p) {
        function i() {
          return p.apply(this, arguments) || this;
        }
        te(i, p);
        var r = i.prototype;
        return r.takeDecorators = function(n) {
          var c = this.decoratorStack[this.decoratorStack.length - 1];
          c.length && (n.decorators = c, this.resetStartLocationFromNode(n, c[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, r.parseDecorators = function(n) {
          for (var c = this.decoratorStack[this.decoratorStack.length - 1]; this.match(D.at); ) {
            var f = this.parseDecorator();
            c.push(f);
          }
          this.match($._export) ? n || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, r.parseDecorator = function() {
          var n = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var c, f = this.start, m = this.startLoc;
          if (this.match($.parenL)) {
            var y = this.start, x = this.startLoc;
            if (this.next(), c = this.parseExpression(), this.expect($.parenR), this.options.preserveParens) {
              var b = this.startNodeAt(y, x);
              b.expression = c, c = this.finishNode(b, "ParenthesizedExpression");
            }
          } else for (c = this.parseIdent(!1); this.eat($.dot); ) {
            var T = this.startNodeAt(f, m);
            T.object = c, T.property = this.parseIdent(!0), T.computed = !1, c = this.finishNode(T, "MemberExpression");
          }
          return n.expression = this.parseMaybeDecoratorArguments(c), this.decoratorStack.pop(), this.finishNode(n, "Decorator");
        }, r.parseMaybeDecoratorArguments = function(n) {
          if (this.eat($.parenL)) {
            var c = this.startNodeAtNode(n);
            return c.callee = n, c.arguments = this.parseExprList($.parenR, !1), this.finishNode(c, "CallExpression");
          }
          return n;
        }, i;
      })(S);
    })(d, g, v), d = (function(S, tt, z, $) {
      var D = S.tokTypes, p = tt.tokTypes, i = S.isNewLine, r = S.isIdentifierChar, n = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(c) {
        function f() {
          return c.apply(this, arguments) || this;
        }
        te(f, c);
        var m = f.prototype;
        return m.jsx_readToken = function() {
          for (var y = "", x = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
            var b = this.input.charCodeAt(this.pos);
            switch (b) {
              case 60:
              case 123:
                return this.pos === this.start ? b === 60 && this.exprAllowed ? (++this.pos, this.finishToken(p.jsxTagStart)) : this.getTokenFromCode(b) : (y += this.input.slice(x, this.pos), this.finishToken(p.jsxText, y));
              case 38:
                y += this.input.slice(x, this.pos), y += this.jsx_readEntity(), x = this.pos;
                break;
              case 62:
              case 125:
                this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (b === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
              default:
                i(b) ? (y += this.input.slice(x, this.pos), y += this.jsx_readNewLine(!0), x = this.pos) : ++this.pos;
            }
          }
        }, m.jsx_readNewLine = function(y) {
          var x, b = this.input.charCodeAt(this.pos);
          return ++this.pos, b === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, x = y ? `
` : `\r
`) : x = String.fromCharCode(b), this.options.locations && (++this.curLine, this.lineStart = this.pos), x;
        }, m.jsx_readString = function(y) {
          for (var x = "", b = ++this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var T = this.input.charCodeAt(this.pos);
            if (T === y) break;
            T === 38 ? (x += this.input.slice(b, this.pos), x += this.jsx_readEntity(), b = this.pos) : i(T) ? (x += this.input.slice(b, this.pos), x += this.jsx_readNewLine(!1), b = this.pos) : ++this.pos;
          }
          return x += this.input.slice(b, this.pos++), this.finishToken(D.string, x);
        }, m.jsx_readEntity = function() {
          var y, x = "", b = 0, T = this.input[this.pos];
          T !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
          for (var E = ++this.pos; this.pos < this.input.length && b++ < 10; ) {
            if ((T = this.input[this.pos++]) === ";") {
              x[0] === "#" ? x[1] === "x" ? (x = x.substr(2), tr.test(x) && (y = String.fromCharCode(parseInt(x, 16)))) : (x = x.substr(1), er.test(x) && (y = String.fromCharCode(parseInt(x, 10)))) : y = Zs[x];
              break;
            }
            x += T;
          }
          return y || (this.pos = E, "&");
        }, m.jsx_readWord = function() {
          var y, x = this.pos;
          do
            y = this.input.charCodeAt(++this.pos);
          while (r(y) || y === 45);
          return this.finishToken(p.jsxName, this.input.slice(x, this.pos));
        }, m.jsx_parseIdentifier = function() {
          var y = this.startNode();
          return this.type === p.jsxName ? y.name = this.value : this.type.keyword ? y.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(y, "JSXIdentifier");
        }, m.jsx_parseNamespacedName = function() {
          var y = this.start, x = this.startLoc, b = this.jsx_parseIdentifier();
          if (!n.allowNamespaces || !this.eat(D.colon)) return b;
          var T = this.startNodeAt(y, x);
          return T.namespace = b, T.name = this.jsx_parseIdentifier(), this.finishNode(T, "JSXNamespacedName");
        }, m.jsx_parseElementName = function() {
          if (this.type === p.jsxTagEnd) return "";
          var y = this.start, x = this.startLoc, b = this.jsx_parseNamespacedName();
          for (this.type !== D.dot || b.type !== "JSXNamespacedName" || n.allowNamespacedObjects || this.unexpected(); this.eat(D.dot); ) {
            var T = this.startNodeAt(y, x);
            T.object = b, T.property = this.jsx_parseIdentifier(), b = this.finishNode(T, "JSXMemberExpression");
          }
          return b;
        }, m.jsx_parseAttributeValue = function() {
          switch (this.type) {
            case D.braceL:
              var y = this.jsx_parseExpressionContainer();
              return y.expression.type === "JSXEmptyExpression" && this.raise(y.start, "JSX attributes must only be assigned a non-empty expression"), y;
            case p.jsxTagStart:
            case D.string:
              return this.parseExprAtom();
            default:
              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
          }
        }, m.jsx_parseEmptyExpression = function() {
          var y = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(y, "JSXEmptyExpression", this.start, this.startLoc);
        }, m.jsx_parseExpressionContainer = function() {
          var y = this.startNode();
          return this.next(), y.expression = this.type === D.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(D.braceR), this.finishNode(y, "JSXExpressionContainer");
        }, m.jsx_parseAttribute = function() {
          var y = this.startNode();
          return this.eat(D.braceL) ? (this.expect(D.ellipsis), y.argument = this.parseMaybeAssign(), this.expect(D.braceR), this.finishNode(y, "JSXSpreadAttribute")) : (y.name = this.jsx_parseNamespacedName(), y.value = this.eat(D.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(y, "JSXAttribute"));
        }, m.jsx_parseOpeningElementAt = function(y, x) {
          var b = this.startNodeAt(y, x);
          b.attributes = [];
          var T = this.jsx_parseElementName();
          for (T && (b.name = T); this.type !== D.slash && this.type !== p.jsxTagEnd; ) b.attributes.push(this.jsx_parseAttribute());
          return b.selfClosing = this.eat(D.slash), this.expect(p.jsxTagEnd), this.finishNode(b, T ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, m.jsx_parseClosingElementAt = function(y, x) {
          var b = this.startNodeAt(y, x), T = this.jsx_parseElementName();
          return T && (b.name = T), this.expect(p.jsxTagEnd), this.finishNode(b, T ? "JSXClosingElement" : "JSXClosingFragment");
        }, m.jsx_parseElementAt = function(y, x) {
          var b = this.startNodeAt(y, x), T = [], E = this.jsx_parseOpeningElementAt(y, x), L = null;
          if (!E.selfClosing) {
            t: for (; ; ) switch (this.type) {
              case p.jsxTagStart:
                if (y = this.start, x = this.startLoc, this.next(), this.eat(D.slash)) {
                  L = this.jsx_parseClosingElementAt(y, x);
                  break t;
                }
                T.push(this.jsx_parseElementAt(y, x));
                break;
              case p.jsxText:
                T.push(this.parseExprAtom());
                break;
              case D.braceL:
                T.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            $t(L.name) !== $t(E.name) && this.raise(L.start, "Expected corresponding JSX closing tag for <" + $t(E.name) + ">");
          }
          var w = E.name ? "Element" : "Fragment";
          return b["opening" + w] = E, b["closing" + w] = L, b.children = T, this.type === D.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(b, "JSX" + w);
        }, m.jsx_parseText = function() {
          var y = this.parseLiteral(this.value);
          return y.type = "JSXText", y;
        }, m.jsx_parseElement = function() {
          var y = this.start, x = this.startLoc;
          return this.next(), this.jsx_parseElementAt(y, x);
        }, f;
      })(z);
    })(v, g, d), d = (function(S, tt, z) {
      var $ = tt.tokTypes, D = z.tokTypes;
      return (function(p) {
        function i() {
          return p.apply(this, arguments) || this;
        }
        te(i, p);
        var r = i.prototype;
        return r.parseMaybeImportAttributes = function(n) {
          if (this.type === D._with || this.type === $.assert) {
            this.next();
            var c = this.parseImportAttributes();
            c && (n.attributes = c);
          }
        }, r.parseImportAttributes = function() {
          this.expect(D.braceL);
          var n = this.parseWithEntries();
          return this.expect(D.braceR), n;
        }, r.parseWithEntries = function() {
          var n = [], c = /* @__PURE__ */ new Set();
          do {
            if (this.type === D.braceR) break;
            var f, m = this.startNode();
            f = this.type === D.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), m.key = f, c.has(m.key.name) && this.raise(this.pos, "Duplicated key in attributes"), c.add(m.key.name), this.type !== D.string && this.raise(this.pos, "Only string is supported as an attribute value"), m.value = this.parseLiteral(this.value), n.push(this.finishNode(m, "ImportAttribute"));
          } while (this.eat(D.comma));
          return n;
        }, i;
      })(S);
    })(d, g, v);
    var Xi = /* @__PURE__ */ (function(S) {
      function tt(i, r, n) {
        var c;
        return (c = S.call(this, i, r, n) || this).preValue = null, c.preToken = null, c.isLookahead = !1, c.isAmbientContext = !1, c.inAbstractClass = !1, c.inType = !1, c.inDisallowConditionalTypesContext = !1, c.maybeInArrowParameters = !1, c.shouldParseArrowReturnType = void 0, c.shouldParseAsyncArrowReturnType = void 0, c.decoratorStack = [[]], c.importsStack = [[]], c.importOrExportOuterKind = void 0, c.tsParseConstModifier = c.tsParseModifiers.bind((function(f) {
          if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return f;
        })(c), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: A.InvalidModifierOnTypeParameterPositions }), c;
      }
      te(tt, S);
      var z, $, D, p = tt.prototype;
      return p.getTokenFromCodeInType = function(i) {
        return i === 62 || i === 60 ? this.finishOp(o.relational, 1) : S.prototype.getTokenFromCode.call(this, i);
      }, p.readToken = function(i) {
        if (!this.inType) {
          var r = this.curContext();
          if (r === Z.tc_expr) return this.jsx_readToken();
          if (r === Z.tc_oTag || r === Z.tc_cTag) {
            if (N(i)) return this.jsx_readWord();
            if (i == 62) return ++this.pos, this.finishToken(I.jsxTagEnd);
            if ((i === 34 || i === 39) && r == Z.tc_oTag) return this.jsx_readString(i);
          }
          if (i === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(I.jsxTagStart);
        }
        return S.prototype.readToken.call(this, i);
      }, p.getTokenFromCode = function(i) {
        return this.inType ? this.getTokenFromCodeInType(i) : i === 64 ? (++this.pos, this.finishToken(I.at)) : S.prototype.getTokenFromCode.call(this, i);
      }, p.isAbstractClass = function() {
        return this.ts_isContextual(I.abstract) && this.lookahead().type === o._class;
      }, p.finishNode = function(i, r) {
        return i.type !== "" && i.end !== 0 ? i : S.prototype.finishNode.call(this, i, r);
      }, p.tryParse = function(i, r) {
        r === void 0 && (r = this.cloneCurLookaheadState());
        var n = { node: null };
        try {
          return { node: i(function(f) {
            throw f === void 0 && (f = null), n.node = f, n;
          }), error: null, thrown: !1, aborted: !1, failState: null };
        } catch (f) {
          var c = this.getCurLookaheadState();
          if (this.setLookaheadState(r), f instanceof SyntaxError) return { node: null, error: f, thrown: !0, aborted: !1, failState: c };
          if (f === n) return { node: n.node, error: null, thrown: !1, aborted: !0, failState: c };
          throw f;
        }
      }, p.setOptionalParametersError = function(i, r) {
        var n;
        i.optionalParametersLoc = (n = r?.loc) != null ? n : this.startLoc;
      }, p.reScan_lt_gt = function() {
        this.type === o.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, p.reScan_lt = function() {
        var i = this.type;
        return i === o.bitShift ? (this.pos -= 2, this.finishOp(o.relational, 1), o.relational) : i;
      }, p.resetEndLocation = function(i, r) {
        r === void 0 && (r = this.lastTokEndLoc), i.end = r.column, i.loc.end = r, this.options.ranges && (i.range[1] = r.column);
      }, p.startNodeAtNode = function(i) {
        return S.prototype.startNodeAt.call(this, i.start, i.loc.start);
      }, p.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, p.tsHasSomeModifiers = function(i, r) {
        return r.some(function(n) {
          return ei(n) ? i.accessibility === n : !!i[n];
        });
      }, p.tsIsStartOfStaticBlocks = function() {
        return this.isContextual("static") && this.lookaheadCharCode() === 123;
      }, p.tsCheckForInvalidTypeCasts = function(i) {
        var r = this;
        i.forEach(function(n) {
          n?.type === "TSTypeCastExpression" && r.raise(n.typeAnnotation.start, A.UnexpectedTypeAnnotation);
        });
      }, p.atPossibleAsyncArrow = function(i) {
        return i.type === "Identifier" && i.name === "async" && this.lastTokEndLoc.column === i.end && !this.canInsertSemicolon() && i.end - i.start == 5 && i.start === this.potentialArrowAt;
      }, p.tsIsIdentifier = function() {
        return V(this.type);
      }, p.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeOrTypePredicateAnnotation(o.colon) : void 0;
      }, p.tsTryParseGenericAsyncArrowFunction = function(i, r, n) {
        var c = this;
        if (this.tsMatchLeftRelational()) {
          var f = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var m = this.tsTryParseAndCatch(function() {
            var y = c.startNodeAt(i, r);
            return y.typeParameters = c.tsParseTypeParameters(), S.prototype.parseFunctionParams.call(c, y), y.returnType = c.tsTryParseTypeOrTypePredicateAnnotation(), c.expect(o.arrow), y;
          });
          if (this.maybeInArrowParameters = f, m) return S.prototype.parseArrowExpression.call(this, m, null, !0, n);
        }
      }, p.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === o.relational) return this.tsParseTypeArguments();
      }, p.tsInNoContext = function(i) {
        var r = this.context;
        this.context = [r[0]];
        try {
          return i();
        } finally {
          this.context = r;
        }
      }, p.tsTryParseTypeAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, p.isUnparsedContextual = function(i, r) {
        var n = i + r.length;
        if (this.input.slice(i, n) === r) {
          var c = this.input.charCodeAt(n);
          return !(Nt(c) || (64512 & c) == 55296);
        }
        return !1;
      }, p.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(I.abstract) && this.lookahead().type === o._new;
      }, p.nextTokenStartSince = function(i) {
        return Te.lastIndex = i, Te.test(this.input) ? Te.lastIndex : i;
      }, p.lookaheadCharCode = function() {
        return this.input.charCodeAt(this.nextTokenStart());
      }, p.compareLookaheadState = function(i, r) {
        for (var n = 0, c = Object.keys(i); n < c.length; n++) {
          var f = c[n];
          if (i[f] !== r[f]) return !1;
        }
        return !0;
      }, p.createLookaheadState = function() {
        this.value = null, this.context = [this.curContext()];
      }, p.getCurLookaheadState = function() {
        return { endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context, startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, p.cloneCurLookaheadState = function() {
        return { pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context && this.context.slice(), startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, p.setLookaheadState = function(i) {
        this.pos = i.pos, this.value = i.value, this.endLoc = i.endLoc, this.lastTokEnd = i.lastTokEnd, this.lastTokStart = i.lastTokStart, this.lastTokStartLoc = i.lastTokStartLoc, this.type = i.type, this.start = i.start, this.end = i.end, this.context = i.context, this.startLoc = i.startLoc, this.lastTokEndLoc = i.lastTokEndLoc, this.curLine = i.curLine, this.lineStart = i.lineStart, this.curPosition = i.curPosition, this.containsEsc = i.containsEsc;
      }, p.tsLookAhead = function(i) {
        var r = this.getCurLookaheadState(), n = i();
        return this.setLookaheadState(r), n;
      }, p.lookahead = function(i) {
        var r = this.getCurLookaheadState();
        if (this.createLookaheadState(), this.isLookahead = !0, i !== void 0) for (var n = 0; n < i; n++) this.nextToken();
        else this.nextToken();
        this.isLookahead = !1;
        var c = this.getCurLookaheadState();
        return this.setLookaheadState(r), c;
      }, p.readWord = function() {
        var i = this.readWord1(), r = o.name;
        return this.keywords.test(i) ? r = P[i] : new RegExp(fe).test(i) && (r = I[i]), this.finishToken(r, i);
      }, p.skipBlockComment = function() {
        var i;
        this.isLookahead || (i = this.options.onComment && this.curPosition());
        var r = this.pos, n = this.input.indexOf("*/", this.pos += 2);
        if (n === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = n + 2, this.options.locations) for (var c, f = r; (c = zi(this.input, f, this.pos)) > -1; ) ++this.curLine, f = this.lineStart = c;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(r + 2, n), r, this.pos, i, this.curPosition());
      }, p.skipLineComment = function(i) {
        var r, n = this.pos;
        this.isLookahead || (r = this.options.onComment && this.curPosition());
        for (var c = this.input.charCodeAt(this.pos += i); this.pos < this.input.length && !nt(c); ) c = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(n + i, this.pos), n, this.pos, r, this.curPosition());
      }, p.finishToken = function(i, r) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var n = this.type;
        this.type = i, this.value = r, this.isLookahead || this.updateContext(n);
      }, p.resetStartLocation = function(i, r, n) {
        i.start = r, i.loc.start = n, this.options.ranges && (i.range[0] = r);
      }, p.isLineTerminator = function() {
        return this.eat(o.semi) || S.prototype.canInsertSemicolon.call(this);
      }, p.hasFollowingLineBreak = function() {
        return Ye.lastIndex = this.end, Ye.test(this.input);
      }, p.addExtra = function(i, r, n, c) {
        if (c === void 0 && (c = !0), i) {
          var f = i.extra = i.extra || {};
          c ? f[r] = n : Object.defineProperty(f, r, { enumerable: c, value: n });
        }
      }, p.isLiteralPropertyName = function() {
        return $i(this.type);
      }, p.hasPrecedingLineBreak = function() {
        return j.test(this.input.slice(this.lastTokEndLoc.index, this.start));
      }, p.createIdentifier = function(i, r) {
        return i.name = r, this.finishNode(i, "Identifier");
      }, p.resetStartLocationFromNode = function(i, r) {
        this.resetStartLocation(i, r.start, r.loc.start);
      }, p.isThisParam = function(i) {
        return i.type === "Identifier" && i.name === "this";
      }, p.isLookaheadContextual = function(i) {
        var r = this.nextTokenStart();
        return this.isUnparsedContextual(r, i);
      }, p.ts_type_isContextual = function(i, r) {
        return i === r && !this.containsEsc;
      }, p.ts_isContextual = function(i) {
        return this.type === i && !this.containsEsc;
      }, p.ts_isContextualWithState = function(i, r) {
        return i.type === r && !i.containsEsc;
      }, p.isContextualWithState = function(i, r) {
        return r.type === o.name && r.value === i && !r.containsEsc;
      }, p.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(o.plusMin) ? this.ts_isContextual(I.readonly) : (this.ts_isContextual(I.readonly) && this.next(), !!this.match(o.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(o._in))));
      }, p.tsInDisallowConditionalTypesContext = function(i) {
        var r = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return i();
        } finally {
          this.inDisallowConditionalTypesContext = r;
        }
      }, p.tsTryParseType = function() {
        return this.tsEatThenParseType(o.colon);
      }, p.match = function(i) {
        return this.type === i;
      }, p.matchJsx = function(i) {
        return this.type === g.tokTypes[i];
      }, p.ts_eatWithState = function(i, r, n) {
        if (i === n.type) {
          for (var c = 0; c < r; c++) this.next();
          return !0;
        }
        return !1;
      }, p.ts_eatContextualWithState = function(i, r, n) {
        if (fe.test(i)) {
          if (this.ts_isContextualWithState(n, I[i])) {
            for (var c = 0; c < r; c++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(i, n)) return !1;
        for (var f = 0; f < r; f++) this.next();
        return !0;
      }, p.canHaveLeadingDecorator = function() {
        return this.match(o._class);
      }, p.eatContextual = function(i) {
        return fe.test(i) ? !!this.ts_isContextual(I[i]) && (this.next(), !0) : S.prototype.eatContextual.call(this, i);
      }, p.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, p.tsParseExternalModuleReference = function() {
        var i = this.startNode();
        return this.expectContextual("require"), this.expect(o.parenL), this.match(o.string) || this.unexpected(), i.expression = this.parseExprAtom(), this.expect(o.parenR), this.finishNode(i, "TSExternalModuleReference");
      }, p.tsParseEntityName = function(i) {
        i === void 0 && (i = !0);
        for (var r = this.parseIdent(i); this.eat(o.dot); ) {
          var n = this.startNodeAtNode(r);
          n.left = r, n.right = this.parseIdent(i), r = this.finishNode(n, "TSQualifiedName");
        }
        return r;
      }, p.tsParseEnumMember = function() {
        var i = this.startNode();
        return i.id = this.match(o.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(o.eq) && (i.initializer = this.parseMaybeAssign()), this.finishNode(i, "TSEnumMember");
      }, p.tsParseEnumDeclaration = function(i, r) {
        return r === void 0 && (r = {}), r.const && (i.const = !0), r.declare && (i.declare = !0), this.expectContextual("enum"), i.id = this.parseIdent(), this.checkLValSimple(i.id), this.expect(o.braceL), i.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(o.braceR), this.finishNode(i, "TSEnumDeclaration");
      }, p.tsParseModuleBlock = function() {
        var i = this.startNode();
        for (S.prototype.enterScope.call(this, 512), this.expect(o.braceL), i.body = []; this.type !== o.braceR; ) {
          var r = this.parseStatement(null, !0);
          i.body.push(r);
        }
        return this.next(), S.prototype.exitScope.call(this), this.finishNode(i, "TSModuleBlock");
      }, p.tsParseAmbientExternalModuleDeclaration = function(i) {
        return this.ts_isContextual(I.global) ? (i.global = !0, i.id = this.parseIdent()) : this.match(o.string) ? i.id = this.parseLiteral(this.value) : this.unexpected(), this.match(o.braceL) ? (S.prototype.enterScope.call(this, Bt), i.body = this.tsParseModuleBlock(), S.prototype.exitScope.call(this)) : S.prototype.semicolon.call(this), this.finishNode(i, "TSModuleDeclaration");
      }, p.tsTryParseDeclare = function(i) {
        var r = this;
        if (!this.isLineTerminator()) {
          var n, c = this.type;
          return this.isContextual("let") && (c = o._var, n = "let"), this.tsInAmbientContext(function() {
            if (c === o._function) return i.declare = !0, r.parseFunctionStatement(i, !1, !0);
            if (c === o._class) return i.declare = !0, r.parseClass(i, !0);
            if (c === I.enum) return r.tsParseEnumDeclaration(i, { declare: !0 });
            if (c === I.global) return r.tsParseAmbientExternalModuleDeclaration(i);
            if (c === o._const || c === o._var) return r.match(o._const) && r.isLookaheadContextual("enum") ? (r.expect(o._const), r.tsParseEnumDeclaration(i, { const: !0, declare: !0 })) : (i.declare = !0, r.parseVarStatement(i, n || r.value, !0));
            if (c === I.interface) {
              var f = r.tsParseInterfaceDeclaration(i, { declare: !0 });
              if (f) return f;
            }
            return V(c) ? r.tsParseDeclaration(i, r.value, !0) : void 0;
          });
        }
      }, p.tsIsListTerminator = function(i) {
        switch (i) {
          case "EnumMembers":
          case "TypeMembers":
            return this.match(o.braceR);
          case "HeritageClauseElement":
            return this.match(o.braceL);
          case "TupleElementTypes":
            return this.match(o.bracketR);
          case "TypeParametersOrArguments":
            return this.tsMatchRightRelational();
        }
      }, p.tsParseDelimitedListWorker = function(i, r, n, c) {
        for (var f = [], m = -1; !this.tsIsListTerminator(i); ) {
          m = -1;
          var y = r();
          if (y == null) return;
          if (f.push(y), !this.eat(o.comma)) {
            if (this.tsIsListTerminator(i)) break;
            return void (n && this.expect(o.comma));
          }
          m = this.lastTokStart;
        }
        return c && (c.value = m), f;
      }, p.tsParseDelimitedList = function(i, r, n) {
        return (function(c) {
          if (c == null) throw new Error("Unexpected " + c + " value.");
          return c;
        })(this.tsParseDelimitedListWorker(i, r, !0, n));
      }, p.tsParseBracketedList = function(i, r, n, c, f) {
        c || this.expect(n ? o.bracketL : o.relational);
        var m = this.tsParseDelimitedList(i, r, f);
        return this.expect(n ? o.bracketR : o.relational), m;
      }, p.tsParseTypeParameterName = function() {
        return this.parseIdent().name;
      }, p.tsEatThenParseType = function(i) {
        return this.match(i) ? this.tsNextThenParseType() : void 0;
      }, p.tsExpectThenParseType = function(i) {
        var r = this;
        return this.tsDoThenParseType(function() {
          return r.expect(i);
        });
      }, p.tsNextThenParseType = function() {
        var i = this;
        return this.tsDoThenParseType(function() {
          return i.next();
        });
      }, p.tsDoThenParseType = function(i) {
        var r = this;
        return this.tsInType(function() {
          return i(), r.tsParseType();
        });
      }, p.tsSkipParameterStart = function() {
        if (V(this.type) || this.match(o._this)) return this.next(), !0;
        if (this.match(o.braceL)) try {
          return this.parseObj(!0), !0;
        } catch {
          return !1;
        }
        if (this.match(o.bracketL)) {
          this.next();
          try {
            return this.parseBindingList(o.bracketR, !0, !0), !0;
          } catch {
            return !1;
          }
        }
        return !1;
      }, p.tsIsUnambiguouslyStartOfFunctionType = function() {
        return this.next(), !!(this.match(o.parenR) || this.match(o.ellipsis) || this.tsSkipParameterStart() && (this.match(o.colon) || this.match(o.comma) || this.match(o.question) || this.match(o.eq) || this.match(o.parenR) && (this.next(), this.match(o.arrow))));
      }, p.tsIsStartOfFunctionType = function() {
        return !!this.tsMatchLeftRelational() || this.match(o.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }, p.tsInAllowConditionalTypesContext = function(i) {
        var r = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !1;
        try {
          return i();
        } finally {
          this.inDisallowConditionalTypesContext = r;
        }
      }, p.tsParseBindingListForSignature = function() {
        var i = this;
        return S.prototype.parseBindingList.call(this, o.parenR, !0, !0).map(function(r) {
          return r.type !== "Identifier" && r.type !== "RestElement" && r.type !== "ObjectPattern" && r.type !== "ArrayPattern" && i.raise(r.start, A.UnsupportedSignatureParameterKind(r.type)), r;
        });
      }, p.tsParseTypePredicateAsserts = function() {
        if (this.type !== I.asserts) return !1;
        var i = this.containsEsc;
        return this.next(), !(!V(this.type) && !this.match(o._this) || (i && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, p.tsParseThisTypeNode = function() {
        var i = this.startNode();
        return this.next(), this.finishNode(i, "TSThisType");
      }, p.tsParseTypeAnnotation = function(i, r) {
        var n = this;
        return i === void 0 && (i = !0), r === void 0 && (r = this.startNode()), this.tsInType(function() {
          i && n.expect(o.colon), r.typeAnnotation = n.tsParseType();
        }), this.finishNode(r, "TSTypeAnnotation");
      }, p.tsParseThisTypePredicate = function(i) {
        this.next();
        var r = this.startNodeAtNode(i);
        return r.parameterName = i, r.typeAnnotation = this.tsParseTypeAnnotation(!1), r.asserts = !1, this.finishNode(r, "TSTypePredicate");
      }, p.tsParseThisTypeOrThisTypePredicate = function() {
        var i = this.tsParseThisTypeNode();
        return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(i) : i;
      }, p.tsParseTypePredicatePrefix = function() {
        var i = this.parseIdent();
        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), i;
      }, p.tsParseTypeOrTypePredicateAnnotation = function(i) {
        var r = this;
        return this.tsInType(function() {
          var n = r.startNode();
          r.expect(i);
          var c = r.startNode(), f = !!r.tsTryParse(r.tsParseTypePredicateAsserts.bind(r));
          if (f && r.match(o._this)) {
            var m = r.tsParseThisTypeOrThisTypePredicate();
            return m.type === "TSThisType" ? (c.parameterName = m, c.asserts = !0, c.typeAnnotation = null, m = r.finishNode(c, "TSTypePredicate")) : (r.resetStartLocationFromNode(m, c), m.asserts = !0), n.typeAnnotation = m, r.finishNode(n, "TSTypeAnnotation");
          }
          var y = r.tsIsIdentifier() && r.tsTryParse(r.tsParseTypePredicatePrefix.bind(r));
          if (!y) return f ? (c.parameterName = r.parseIdent(), c.asserts = f, c.typeAnnotation = null, n.typeAnnotation = r.finishNode(c, "TSTypePredicate"), r.finishNode(n, "TSTypeAnnotation")) : r.tsParseTypeAnnotation(!1, n);
          var x = r.tsParseTypeAnnotation(!1);
          return c.parameterName = y, c.typeAnnotation = x, c.asserts = f, n.typeAnnotation = r.finishNode(c, "TSTypePredicate"), r.finishNode(n, "TSTypeAnnotation");
        });
      }, p.tsFillSignature = function(i, r) {
        var n = i === o.arrow;
        r.typeParameters = this.tsTryParseTypeParameters(), this.expect(o.parenL), r.parameters = this.tsParseBindingListForSignature(), (n || this.match(i)) && (r.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(i));
      }, p.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== o._const) return null;
        this.next();
        var i = this.tsParseTypeReference();
        return i.typeParameters && this.raise(i.typeName.start, A.CannotFindName({ name: "const" })), i;
      }, p.tsParseFunctionOrConstructorType = function(i, r) {
        var n = this, c = this.startNode();
        return i === "TSConstructorType" && (c.abstract = !!r, r && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return n.tsFillSignature(o.arrow, c);
        }), this.finishNode(c, i);
      }, p.tsParseUnionOrIntersectionType = function(i, r, n) {
        var c = this.startNode(), f = this.eat(n), m = [];
        do
          m.push(r());
        while (this.eat(n));
        return m.length !== 1 || f ? (c.types = m, this.finishNode(c, i)) : m[0];
      }, p.tsCheckTypeAnnotationForReadOnly = function(i) {
        switch (i.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(i.start, A.UnexpectedReadonly);
        }
      }, p.tsParseTypeOperator = function() {
        var i = this.startNode(), r = this.value;
        return this.next(), i.operator = r, i.typeAnnotation = this.tsParseTypeOperatorOrHigher(), r === "readonly" && this.tsCheckTypeAnnotationForReadOnly(i), this.finishNode(i, "TSTypeOperator");
      }, p.tsParseConstraintForInferType = function() {
        var i = this;
        if (this.eat(o._extends)) {
          var r = this.tsInDisallowConditionalTypesContext(function() {
            return i.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(o.question)) return r;
        }
      }, p.tsParseInferType = function() {
        var i = this, r = this.startNode();
        this.expectContextual("infer");
        var n = this.startNode();
        return n.name = this.tsParseTypeParameterName(), n.constraint = this.tsTryParse(function() {
          return i.tsParseConstraintForInferType();
        }), r.typeParameter = this.finishNode(n, "TSTypeParameter"), this.finishNode(r, "TSInferType");
      }, p.tsParseLiteralTypeNode = function() {
        var i = this, r = this.startNode();
        return r.literal = (function() {
          switch (i.type) {
            case o.num:
            case o.string:
            case o._true:
            case o._false:
              return i.parseExprAtom();
            default:
              i.unexpected();
          }
        })(), this.finishNode(r, "TSLiteralType");
      }, p.tsParseImportType = function() {
        var i = this.startNode();
        return this.expect(o._import), this.expect(o.parenL), this.match(o.string) || this.raise(this.start, A.UnsupportedImportTypeArgument), i.argument = this.parseExprAtom(), this.expect(o.parenR), this.eat(o.dot) && (i.qualifier = this.tsParseEntityName()), this.tsMatchLeftRelational() && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSImportType");
      }, p.tsParseTypeQuery = function() {
        var i = this.startNode();
        return this.expect(o._typeof), i.exprName = this.match(o._import) ? this.tsParseImportType() : this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSTypeQuery");
      }, p.tsParseMappedTypeParameter = function() {
        var i = this.startNode();
        return i.name = this.tsParseTypeParameterName(), i.constraint = this.tsExpectThenParseType(o._in), this.finishNode(i, "TSTypeParameter");
      }, p.tsParseMappedType = function() {
        var i = this.startNode();
        return this.expect(o.braceL), this.match(o.plusMin) ? (i.readonly = this.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (i.readonly = !0), this.expect(o.bracketL), i.typeParameter = this.tsParseMappedTypeParameter(), i.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(o.bracketR), this.match(o.plusMin) ? (i.optional = this.value, this.next(), this.expect(o.question)) : this.eat(o.question) && (i.optional = !0), i.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(o.braceR), this.finishNode(i, "TSMappedType");
      }, p.tsParseTypeLiteral = function() {
        var i = this.startNode();
        return i.members = this.tsParseObjectTypeMembers(), this.finishNode(i, "TSTypeLiteral");
      }, p.tsParseTupleElementType = function() {
        var i = this.startLoc, r = this.start, n = this.eat(o.ellipsis), c = this.tsParseType(), f = this.eat(o.question);
        if (this.eat(o.colon)) {
          var m = this.startNodeAtNode(c);
          m.optional = f, c.type !== "TSTypeReference" || c.typeParameters || c.typeName.type !== "Identifier" ? (this.raise(c.start, A.InvalidTupleMemberLabel), m.label = c) : m.label = c.typeName, m.elementType = this.tsParseType(), c = this.finishNode(m, "TSNamedTupleMember");
        } else if (f) {
          var y = this.startNodeAtNode(c);
          y.typeAnnotation = c, c = this.finishNode(y, "TSOptionalType");
        }
        if (n) {
          var x = this.startNodeAt(r, i);
          x.typeAnnotation = c, c = this.finishNode(x, "TSRestType");
        }
        return c;
      }, p.tsParseTupleType = function() {
        var i = this, r = this.startNode();
        r.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
        var n = !1, c = null;
        return r.elementTypes.forEach(function(f) {
          var m = f.type;
          !n || m === "TSRestType" || m === "TSOptionalType" || m === "TSNamedTupleMember" && f.optional || i.raise(f.start, A.OptionalTypeBeforeRequired), n || (n = m === "TSNamedTupleMember" && f.optional || m === "TSOptionalType");
          var y = m;
          m === "TSRestType" && (y = (f = f.typeAnnotation).type);
          var x = y === "TSNamedTupleMember";
          c != null || (c = x), c !== x && i.raise(f.start, A.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(r, "TSTupleType");
      }, p.tsParseTemplateLiteralType = function() {
        var i = this.startNode();
        return i.literal = this.parseTemplate({ isTagged: !1 }), this.finishNode(i, "TSLiteralType");
      }, p.tsParseTypeReference = function() {
        var i = this.startNode();
        return i.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSTypeReference");
      }, p.tsMatchLeftRelational = function() {
        return this.match(o.relational) && this.value === "<";
      }, p.tsMatchRightRelational = function() {
        return this.match(o.relational) && this.value === ">";
      }, p.tsParseParenthesizedType = function() {
        var i = this.startNode();
        return this.expect(o.parenL), i.typeAnnotation = this.tsParseType(), this.expect(o.parenR), this.finishNode(i, "TSParenthesizedType");
      }, p.tsParseNonArrayType = function() {
        switch (this.type) {
          case o.string:
          case o.num:
          case o._true:
          case o._false:
            return this.tsParseLiteralTypeNode();
          case o.plusMin:
            if (this.value === "-") {
              var i = this.startNode();
              return this.lookahead().type !== o.num && this.unexpected(), i.literal = this.parseMaybeUnary(), this.finishNode(i, "TSLiteralType");
            }
            break;
          case o._this:
            return this.tsParseThisTypeOrThisTypePredicate();
          case o._typeof:
            return this.tsParseTypeQuery();
          case o._import:
            return this.tsParseImportType();
          case o.braceL:
            return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
          case o.bracketL:
            return this.tsParseTupleType();
          case o.parenL:
            return this.tsParseParenthesizedType();
          case o.backQuote:
          case o.dollarBraceL:
            return this.tsParseTemplateLiteralType();
          default:
            var r = this.type;
            if (V(r) || r === o._void || r === o._null) {
              var n = r === o._void ? "TSVoidKeyword" : r === o._null ? "TSNullKeyword" : (function(f) {
                switch (f) {
                  case "any":
                    return "TSAnyKeyword";
                  case "boolean":
                    return "TSBooleanKeyword";
                  case "bigint":
                    return "TSBigIntKeyword";
                  case "never":
                    return "TSNeverKeyword";
                  case "number":
                    return "TSNumberKeyword";
                  case "object":
                    return "TSObjectKeyword";
                  case "string":
                    return "TSStringKeyword";
                  case "symbol":
                    return "TSSymbolKeyword";
                  case "undefined":
                    return "TSUndefinedKeyword";
                  case "unknown":
                    return "TSUnknownKeyword";
                  default:
                    return;
                }
              })(this.value);
              if (n !== void 0 && this.lookaheadCharCode() !== 46) {
                var c = this.startNode();
                return this.next(), this.finishNode(c, n);
              }
              return this.tsParseTypeReference();
            }
        }
        this.unexpected();
      }, p.tsParseArrayTypeOrHigher = function() {
        for (var i = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(o.bracketL); ) if (this.match(o.bracketR)) {
          var r = this.startNodeAtNode(i);
          r.elementType = i, this.expect(o.bracketR), i = this.finishNode(r, "TSArrayType");
        } else {
          var n = this.startNodeAtNode(i);
          n.objectType = i, n.indexType = this.tsParseType(), this.expect(o.bracketR), i = this.finishNode(n, "TSIndexedAccessType");
        }
        return i;
      }, p.tsParseTypeOperatorOrHigher = function() {
        var i = this;
        return Ki(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseArrayTypeOrHigher();
        });
      }, p.tsParseIntersectionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), o.bitwiseAND);
      }, p.tsParseUnionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), o.bitwiseOR);
      }, p.tsParseNonConditionalType = function() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(o._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
      }, p.tsParseType = function() {
        var i = this;
        ti(this.inType);
        var r = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(o._extends)) return r;
        var n = this.startNodeAtNode(r);
        return n.checkType = r, n.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return i.tsParseNonConditionalType();
        }), this.expect(o.question), n.trueType = this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseType();
        }), this.expect(o.colon), n.falseType = this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseType();
        }), this.finishNode(n, "TSConditionalType");
      }, p.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!V(this.type) && (this.next(), this.match(o.colon));
      }, p.tsInType = function(i) {
        var r = this.inType;
        this.inType = !0;
        try {
          return i();
        } finally {
          this.inType = r;
        }
      }, p.tsTryParseIndexSignature = function(i) {
        if (this.match(o.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(o.bracketL);
          var r = this.parseIdent();
          r.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(r), this.expect(o.bracketR), i.parameters = [r];
          var n = this.tsTryParseTypeAnnotation();
          return n && (i.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSIndexSignature");
        }
      }, p.tsParseNoneModifiers = function(i) {
        this.tsParseModifiers({ modified: i, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: A.InvalidModifierOnTypeParameterPositions });
      }, p.tsParseTypeParameter = function(i) {
        i === void 0 && (i = this.tsParseNoneModifiers.bind(this));
        var r = this.startNode();
        return i(r), r.name = this.tsParseTypeParameterName(), r.constraint = this.tsEatThenParseType(o._extends), r.default = this.tsEatThenParseType(o.eq), this.finishNode(r, "TSTypeParameter");
      }, p.tsParseTypeParameters = function(i) {
        var r = this.startNode();
        this.tsMatchLeftRelational() || this.matchJsx("jsxTagStart") ? this.next() : this.unexpected();
        var n = { value: -1 };
        return r.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, i), !1, !0, n), r.params.length === 0 && this.raise(this.start, A.EmptyTypeParameters), n.value !== -1 && this.addExtra(r, "trailingComma", n.value), this.finishNode(r, "TSTypeParameterDeclaration");
      }, p.tsTryParseTypeParameters = function(i) {
        if (this.tsMatchLeftRelational()) return this.tsParseTypeParameters(i);
      }, p.tsTryParse = function(i) {
        var r = this.getCurLookaheadState(), n = i();
        return n !== void 0 && n !== !1 ? n : void this.setLookaheadState(r);
      }, p.tsTokenCanFollowModifier = function() {
        return (this.match(o.bracketL) || this.match(o.braceL) || this.match(o.star) || this.match(o.ellipsis) || this.match(o.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, p.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, p.tsParseModifier = function(i, r) {
        if (V(this.type) || this.type === o._in) {
          var n = this.value;
          if (i.indexOf(n) !== -1 && !this.containsEsc) {
            if (r && this.tsIsStartOfStaticBlocks()) return;
            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return n;
          }
        }
      }, p.tsParseModifiersByMap = function(i) {
        for (var r = i.modified, n = i.map, c = 0, f = Object.keys(n); c < f.length; c++) {
          var m = f[c];
          r[m] = n[m];
        }
      }, p.tsParseModifiers = function(i) {
        for (var r = this, n = i.modified, c = i.allowedModifiers, f = i.disallowedModifiers, m = i.stopOnStartOfClassStaticBlock, y = i.errorTemplate, x = y === void 0 ? A.InvalidModifierOnTypeMember : y, b = {}, T = function(U, B, q, G) {
          B === q && n[G] && r.raise(U.column, A.InvalidModifiersOrder({ orderedModifiers: [q, G] }));
        }, E = function(U, B, q, G) {
          (n[q] && B === G || n[G] && B === q) && r.raise(U.column, A.IncompatibleModifiers({ modifiers: [q, G] }));
        }; ; ) {
          var L = this.startLoc, w = this.tsParseModifier(c.concat(f ?? []), m);
          if (!w) break;
          ei(w) ? n.accessibility ? this.raise(this.start, A.DuplicateAccessibilityModifier()) : (T(L, w, w, "override"), T(L, w, w, "static"), T(L, w, w, "readonly"), T(L, w, w, "accessor"), b.accessibility = w, n.accessibility = w) : sr(w) ? n[w] ? this.raise(this.start, A.DuplicateModifier({ modifier: w })) : (T(L, w, "in", "out"), b[w] = w, n[w] = !0) : ir(w) ? n[w] ? this.raise(this.start, A.DuplicateModifier({ modifier: w })) : (E(L, w, "accessor", "readonly"), E(L, w, "accessor", "static"), E(L, w, "accessor", "override"), b[w] = w, n[w] = !0) : Object.hasOwnProperty.call(n, w) ? this.raise(this.start, A.DuplicateModifier({ modifier: w })) : (T(L, w, "static", "readonly"), T(L, w, "static", "override"), T(L, w, "override", "readonly"), T(L, w, "abstract", "override"), E(L, w, "declare", "override"), E(L, w, "static", "abstract"), b[w] = w, n[w] = !0), f != null && f.includes(w) && this.raise(this.start, x);
        }
        return b;
      }, p.tsParseInOutModifiers = function(i) {
        this.tsParseModifiers({ modified: i, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: A.InvalidModifierOnTypeParameter });
      }, p.tsParseTypeArguments = function() {
        var i = this, r = this.startNode();
        return r.params = this.tsInType(function() {
          return i.tsInNoContext(function() {
            return i.expect(o.relational), i.tsParseDelimitedList("TypeParametersOrArguments", i.tsParseType.bind(i));
          });
        }), r.params.length === 0 && this.raise(this.start, A.EmptyTypeArguments), this.exprAllowed = !1, this.expect(o.relational), this.finishNode(r, "TSTypeParameterInstantiation");
      }, p.tsParseHeritageClause = function(i) {
        var r = this, n = this.start, c = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var f = r.startNode();
          return f.expression = r.tsParseEntityName(), r.tsMatchLeftRelational() && (f.typeParameters = r.tsParseTypeArguments()), r.finishNode(f, "TSExpressionWithTypeArguments");
        });
        return c.length || this.raise(n, A.EmptyHeritageClauseType({ token: i })), c;
      }, p.tsParseTypeMemberSemicolon = function() {
        this.eat(o.comma) || this.isLineTerminator() || this.expect(o.semi);
      }, p.tsTryParseAndCatch = function(i) {
        var r = this.tryParse(function(n) {
          return i() || n();
        });
        if (!r.aborted && r.node) return r.error && this.setLookaheadState(r.failState), r.node;
      }, p.tsParseSignatureMember = function(i, r) {
        return this.tsFillSignature(o.colon, r), this.tsParseTypeMemberSemicolon(), this.finishNode(r, i);
      }, p.tsParsePropertyOrMethodSignature = function(i, r) {
        this.eat(o.question) && (i.optional = !0);
        var n = i;
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) {
          r && this.raise(i.start, A.ReadonlyForMethodSignature);
          var c = n;
          c.kind && this.tsMatchLeftRelational() && this.raise(this.start, A.AccesorCannotHaveTypeParameters), this.tsFillSignature(o.colon, c), this.tsParseTypeMemberSemicolon();
          var f = "parameters", m = "typeAnnotation";
          if (c.kind === "get") c[f].length > 0 && (this.raise(this.start, "A 'get' accesor must not have any formal parameters."), this.isThisParam(c[f][0]) && this.raise(this.start, A.AccesorCannotDeclareThisParameter));
          else if (c.kind === "set") {
            if (c[f].length !== 1) this.raise(this.start, "A 'get' accesor must not have any formal parameters.");
            else {
              var y = c[f][0];
              this.isThisParam(y) && this.raise(this.start, A.AccesorCannotDeclareThisParameter), y.type === "Identifier" && y.optional && this.raise(this.start, A.SetAccesorCannotHaveOptionalParameter), y.type === "RestElement" && this.raise(this.start, A.SetAccesorCannotHaveRestParameter);
            }
            c[m] && this.raise(c[m].start, A.SetAccesorCannotHaveReturnType);
          } else c.kind = "method";
          return this.finishNode(c, "TSMethodSignature");
        }
        var x = n;
        r && (x.readonly = !0);
        var b = this.tsTryParseTypeAnnotation();
        return b && (x.typeAnnotation = b), this.tsParseTypeMemberSemicolon(), this.finishNode(x, "TSPropertySignature");
      }, p.tsParseTypeMember = function() {
        var i = this.startNode();
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", i);
        if (this.match(o._new)) {
          var r = this.startNode();
          return this.next(), this.match(o.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", i) : (i.key = this.createIdentifier(r, "new"), this.tsParsePropertyOrMethodSignature(i, !1));
        }
        return this.tsParseModifiers({ modified: i, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(i) || (this.parsePropertyName(i), i.computed || i.key.type !== "Identifier" || i.key.name !== "get" && i.key.name !== "set" || !this.tsTokenCanFollowModifier() || (i.kind = i.key.name, this.parsePropertyName(i)), this.tsParsePropertyOrMethodSignature(i, !!i.readonly));
      }, p.tsParseList = function(i, r) {
        for (var n = []; !this.tsIsListTerminator(i); ) n.push(r());
        return n;
      }, p.tsParseObjectTypeMembers = function() {
        this.expect(o.braceL);
        var i = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(o.braceR), i;
      }, p.tsParseInterfaceDeclaration = function(i, r) {
        if (r === void 0 && (r = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), r.declare && (i.declare = !0), V(this.type) ? (i.id = this.parseIdent(), this.checkLValSimple(i.id, 7)) : (i.id = null, this.raise(this.start, A.MissingInterfaceName)), i.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(o._extends) && (i.extends = this.tsParseHeritageClause("extends"));
        var n = this.startNode();
        return n.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), i.body = this.finishNode(n, "TSInterfaceBody"), this.finishNode(i, "TSInterfaceDeclaration");
      }, p.tsParseAbstractDeclaration = function(i) {
        if (this.match(o._class)) return i.abstract = !0, this.parseClass(i, !0);
        if (this.ts_isContextual(I.interface)) {
          if (!this.hasFollowingLineBreak()) return i.abstract = !0, this.tsParseInterfaceDeclaration(i);
        } else this.unexpected(i.start);
      }, p.tsIsDeclarationStart = function() {
        return Wi(this.type);
      }, p.tsParseExpressionStatement = function(i, r) {
        switch (r.name) {
          case "declare":
            var n = this.tsTryParseDeclare(i);
            if (n) return n.declare = !0, n;
            break;
          case "global":
            if (this.match(o.braceL)) {
              S.prototype.enterScope.call(this, Bt);
              var c = i;
              return c.global = !0, c.id = r, c.body = this.tsParseModuleBlock(), S.prototype.exitScope.call(this), this.finishNode(c, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(i, r.name, !1);
        }
      }, p.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, p.tsIsExportDefaultSpecifier = function() {
        var i = this.type, r = this.isAsyncFunction(), n = this.isLet();
        if (V(i)) {
          if (r && !this.containsEsc || n) return !1;
          if ((i === I.type || i === I.interface) && !this.containsEsc) {
            var c = this.lookahead();
            if (V(c.type) && !this.isContextualWithState("from", c) || c.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var f = this.nextTokenStart(), m = this.isUnparsedContextual(f, "from");
        if (this.input.charCodeAt(f) === 44 || V(this.type) && m) return !0;
        if (this.match(o._default) && m) {
          var y = this.input.charCodeAt(this.nextTokenStartSince(f + 4));
          return y === 34 || y === 39;
        }
        return !1;
      }, p.tsInAmbientContext = function(i) {
        var r = this.isAmbientContext;
        this.isAmbientContext = !0;
        try {
          return i();
        } finally {
          this.isAmbientContext = r;
        }
      }, p.tsCheckLineTerminator = function(i) {
        return i ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
      }, p.tsParseModuleOrNamespaceDeclaration = function(i, r) {
        if (r === void 0 && (r = !1), i.id = this.parseIdent(), r || this.checkLValSimple(i.id, 8), this.eat(o.dot)) {
          var n = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(n, !0), i.body = n;
        } else S.prototype.enterScope.call(this, Bt), i.body = this.tsParseModuleBlock(), S.prototype.exitScope.call(this);
        return this.finishNode(i, "TSModuleDeclaration");
      }, p.checkLValSimple = function(i, r, n) {
        return r === void 0 && (r = 0), S.prototype.checkLValSimple.call(this, i, r, n);
      }, p.tsParseTypeAliasDeclaration = function(i) {
        var r = this;
        return i.id = this.parseIdent(), this.checkLValSimple(i.id, 6), i.typeAnnotation = this.tsInType(function() {
          if (i.typeParameters = r.tsTryParseTypeParameters(r.tsParseInOutModifiers.bind(r)), r.expect(o.eq), r.ts_isContextual(I.interface) && r.lookahead().type !== o.dot) {
            var n = r.startNode();
            return r.next(), r.finishNode(n, "TSIntrinsicKeyword");
          }
          return r.tsParseType();
        }), this.semicolon(), this.finishNode(i, "TSTypeAliasDeclaration");
      }, p.tsParseDeclaration = function(i, r, n) {
        switch (r) {
          case "abstract":
            if (this.tsCheckLineTerminator(n) && (this.match(o._class) || V(this.type))) return this.tsParseAbstractDeclaration(i);
            break;
          case "module":
            if (this.tsCheckLineTerminator(n)) {
              if (this.match(o.string)) return this.tsParseAmbientExternalModuleDeclaration(i);
              if (V(this.type)) return this.tsParseModuleOrNamespaceDeclaration(i);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(n) && V(this.type)) return this.tsParseModuleOrNamespaceDeclaration(i);
            break;
          case "type":
            if (this.tsCheckLineTerminator(n) && V(this.type)) return this.tsParseTypeAliasDeclaration(i);
        }
      }, p.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, p.tsParseImportEqualsDeclaration = function(i, r) {
        i.isExport = r || !1, i.id = this.parseIdent(), this.checkLValSimple(i.id, 2), S.prototype.expect.call(this, o.eq);
        var n = this.tsParseModuleReference();
        return i.importKind === "type" && n.type !== "TSExternalModuleReference" && this.raise(n.start, A.ImportAliasHasImportType), i.moduleReference = n, S.prototype.semicolon.call(this), this.finishNode(i, "TSImportEqualsDeclaration");
      }, p.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var i = this.type;
        if (V(i)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((i === I.type || i === I.interface) && !this.containsEsc) {
            var r = this.lookahead();
            if (V(r.type) && !this.isContextualWithState("from", r) || r.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var n = this.nextTokenStart(), c = this.isUnparsedContextual(n, "from");
        if (this.input.charCodeAt(n) === 44 || V(this.type) && c) return !0;
        if (this.match(o._default) && c) {
          var f = this.input.charCodeAt(this.nextTokenStartSince(n + 4));
          return f === 34 || f === 39;
        }
        return !1;
      }, p.parseTemplate = function(i) {
        var r = (i === void 0 ? {} : i).isTagged, n = r !== void 0 && r, c = this.startNode();
        this.next(), c.expressions = [];
        var f = this.parseTemplateElement({ isTagged: n });
        for (c.quasis = [f]; !f.tail; ) this.type === o.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(o.dollarBraceL), c.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(o.braceR), c.quasis.push(f = this.parseTemplateElement({ isTagged: n }));
        return this.next(), this.finishNode(c, "TemplateLiteral");
      }, p.parseFunction = function(i, r, n, c, f) {
        this.initFunction(i), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !c) && (this.type === o.star && 2 & r && this.unexpected(), i.generator = this.eat(o.star)), this.options.ecmaVersion >= 8 && (i.async = !!c), 1 & r && (i.id = 4 & r && this.type !== o.name ? null : this.parseIdent());
        var m = this.yieldPos, y = this.awaitPos, x = this.awaitIdentPos, b = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Se(i.async, i.generator)), 1 & r || (i.id = this.type === o.name ? this.parseIdent() : null), this.parseFunctionParams(i);
        var T = 1 & r;
        return this.parseFunctionBody(i, n, !1, f, { isFunctionDeclaration: T }), this.yieldPos = m, this.awaitPos = y, this.awaitIdentPos = x, 1 & r && i.id && !(2 & r) && this.checkLValSimple(i.id, i.body ? this.strict || i.generator || i.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = b, this.finishNode(i, T ? "FunctionDeclaration" : "FunctionExpression");
      }, p.parseFunctionBody = function(i, r, n, c, f) {
        r === void 0 && (r = !1), n === void 0 && (n = !1), c === void 0 && (c = !1), this.match(o.colon) && (i.returnType = this.tsParseTypeOrTypePredicateAnnotation(o.colon));
        var m = f != null && f.isFunctionDeclaration ? "TSDeclareFunction" : f != null && f.isClassMethod ? "TSDeclareMethod" : void 0;
        return m && !this.match(o.braceL) && this.isLineTerminator() ? this.finishNode(i, m) : m === "TSDeclareFunction" && this.isAmbientContext && (this.raise(i.start, A.DeclareFunctionHasImplementation), i.declare) ? (S.prototype.parseFunctionBody.call(this, i, r, n, !1), this.finishNode(i, m)) : (S.prototype.parseFunctionBody.call(this, i, r, n, c), i);
      }, p.parseNew = function() {
        var i;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var r = this.startNode(), n = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(o.dot)) {
          r.meta = n;
          var c = this.containsEsc;
          return r.property = this.parseIdent(!0), r.property.name !== "target" && this.raiseRecoverable(r.property.start, "The only valid meta property for new is 'new.target'"), c && this.raiseRecoverable(r.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(r.start, "'new.target' can only be used in functions and class static block"), this.finishNode(r, "MetaProperty");
        }
        var f = this.start, m = this.startLoc, y = this.type === o._import;
        r.callee = this.parseSubscripts(this.parseExprAtom(), f, m, !0, !1), y && r.callee.type === "ImportExpression" && this.raise(f, "Cannot use new with import()");
        var x = r.callee;
        return x.type !== "TSInstantiationExpression" || (i = x.extra) != null && i.parenthesized || (r.typeParameters = x.typeParameters, r.callee = x.expression), r.arguments = this.eat(o.parenL) ? this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(r, "NewExpression");
      }, p.parseExprOp = function(i, r, n, c, f) {
        var m;
        if (o._in.binop > c && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (m = "TSAsExpression"), l && this.isContextual("satisfies") && (m = "TSSatisfiesExpression"), m)) {
          var y = this.startNodeAt(r, n);
          y.expression = i;
          var x = this.tsTryNextParseConstantContext();
          return y.typeAnnotation = x || this.tsNextThenParseType(), this.finishNode(y, m), this.reScan_lt_gt(), this.parseExprOp(y, r, n, c, f);
        }
        return S.prototype.parseExprOp.call(this, i, r, n, c, f);
      }, p.parseImportSpecifiers = function() {
        var i = [], r = !0;
        if (g.tokenIsIdentifier(this.type) && (i.push(this.parseImportDefaultSpecifier()), !this.eat(o.comma))) return i;
        if (this.type === o.star) return i.push(this.parseImportNamespaceSpecifier()), i;
        for (this.expect(o.braceL); !this.eat(o.braceR); ) {
          if (r) r = !1;
          else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
          i.push(this.parseImportSpecifier());
        }
        return i;
      }, p.parseImport = function(i) {
        var r = this.lookahead();
        if (i.importKind = "value", this.importOrExportOuterKind = "value", V(r.type) || this.match(o.star) || this.match(o.braceL)) {
          var n = this.lookahead(2);
          if (n.type !== o.comma && !this.isContextualWithState("from", n) && n.type !== o.eq && this.ts_eatContextualWithState("type", 1, r) && (this.importOrExportOuterKind = "type", i.importKind = "type", r = this.lookahead(), n = this.lookahead(2)), V(r.type) && n.type === o.eq) {
            this.next();
            var c = this.tsParseImportEqualsDeclaration(i);
            return this.importOrExportOuterKind = "value", c;
          }
        }
        return this.next(), this.type === o.string ? (i.specifiers = [], i.source = this.parseExprAtom()) : (i.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), i.source = this.type === o.string ? this.parseExprAtom() : this.unexpected()), this.parseMaybeImportAttributes(i), this.semicolon(), this.finishNode(i, "ImportDeclaration"), this.importOrExportOuterKind = "value", i.importKind === "type" && i.specifiers.length > 1 && i.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(i.start, A.TypeImportCannotSpecifyDefaultAndNamed), i;
      }, p.parseExportDefaultDeclaration = function() {
        if (this.isAbstractClass()) {
          var i = this.startNode();
          return this.next(), i.abstract = !0, this.parseClass(i, !0);
        }
        if (this.match(I.interface)) {
          var r = this.tsParseInterfaceDeclaration(this.startNode());
          if (r) return r;
        }
        return S.prototype.parseExportDefaultDeclaration.call(this);
      }, p.parseExportAllDeclaration = function(i, r) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (i.exported = this.parseModuleExportName(), this.checkExport(r, i.exported, this.lastTokStart)) : i.exported = null), this.expectContextual("from"), this.type !== o.string && this.unexpected(), i.source = this.parseExprAtom(), this.parseMaybeImportAttributes(i), this.semicolon(), this.finishNode(i, "ExportAllDeclaration");
      }, p.parseDynamicImport = function(i) {
        if (this.next(), i.source = this.parseMaybeAssign(), this.eat(o.comma)) {
          var r = this.parseExpression();
          i.arguments = [r];
        }
        if (!this.eat(o.parenR)) {
          var n = this.start;
          this.eat(o.comma) && this.eat(o.parenR) ? this.raiseRecoverable(n, "Trailing comma is not allowed in import()") : this.unexpected(n);
        }
        return this.finishNode(i, "ImportExpression");
      }, p.parseExport = function(i, r) {
        var n = this.lookahead();
        if (this.ts_eatWithState(o._import, 2, n)) {
          this.ts_isContextual(I.type) && this.lookaheadCharCode() !== 61 ? (i.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (i.importKind = "value", this.importOrExportOuterKind = "value");
          var c = this.tsParseImportEqualsDeclaration(i, !0);
          return this.importOrExportOuterKind = void 0, c;
        }
        if (this.ts_eatWithState(o.eq, 2, n)) {
          var f = i;
          return f.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(f, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, n)) {
          var m = i;
          return this.expectContextual("namespace"), m.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(m, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(n, I.type) && this.lookahead(2).type === o.braceL ? (this.next(), this.importOrExportOuterKind = "type", i.exportKind = "type") : (this.importOrExportOuterKind = "value", i.exportKind = "value"), this.next(), this.eat(o.star)) return this.parseExportAllDeclaration(i, r);
        if (this.eat(o._default)) return this.checkExport(r, "default", this.lastTokStart), i.declaration = this.parseExportDefaultDeclaration(), this.finishNode(i, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) i.declaration = this.parseExportDeclaration(i), i.declaration.type === "VariableDeclaration" ? this.checkVariableExport(r, i.declaration.declarations) : this.checkExport(r, i.declaration.id, i.declaration.id.start), i.specifiers = [], i.source = null;
        else {
          if (i.declaration = null, i.specifiers = this.parseExportSpecifiers(r), this.eatContextual("from")) this.type !== o.string && this.unexpected(), i.source = this.parseExprAtom(), this.parseMaybeImportAttributes(i);
          else {
            for (var y, x = Je(i.specifiers); !(y = x()).done; ) {
              var b = y.value;
              this.checkUnreserved(b.local), this.checkLocalExport(b.local), b.local.type === "Literal" && this.raise(b.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            i.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(i, "ExportNamedDeclaration");
      }, p.checkExport = function(i, r, n) {
        i && (typeof r != "string" && (r = r.type === "Identifier" ? r.name : r.value), i[r] = !0);
      }, p.parseMaybeDefault = function(i, r, n) {
        var c = S.prototype.parseMaybeDefault.call(this, i, r, n);
        return c.type === "AssignmentPattern" && c.typeAnnotation && c.right.start < c.typeAnnotation.start && this.raise(c.typeAnnotation.start, A.TypeAnnotationAfterAssign), c;
      }, p.typeCastToParameter = function(i) {
        return i.expression.typeAnnotation = i.typeAnnotation, this.resetEndLocation(i.expression, i.typeAnnotation.end), i.expression;
      }, p.toAssignableList = function(i, r) {
        for (var n = 0; n < i.length; n++) {
          var c = i[n];
          c?.type === "TSTypeCastExpression" && (i[n] = this.typeCastToParameter(c));
        }
        return S.prototype.toAssignableList.call(this, i, r);
      }, p.reportReservedArrowTypeParam = function(i) {
      }, p.parseExprAtom = function(i, r, n) {
        if (this.type === I.jsxText) return this.jsx_parseText();
        if (this.type === I.jsxTagStart) return this.jsx_parseElement();
        if (this.type === I.at) return this.parseDecorators(), this.parseExprAtom();
        if (V(this.type)) {
          var c = this.potentialArrowAt === this.start, f = this.start, m = this.startLoc, y = this.containsEsc, x = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !y && x.name === "async" && !this.canInsertSemicolon() && this.eat(o._function)) return this.overrideContext(lt.f_expr), this.parseFunction(this.startNodeAt(f, m), 0, !1, !0, r);
          if (c && !this.canInsertSemicolon()) {
            if (this.eat(o.arrow)) return this.parseArrowExpression(this.startNodeAt(f, m), [x], !1, r);
            if (this.options.ecmaVersion >= 8 && x.name === "async" && this.type === o.name && !y && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return x = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(f, m), [x], !0, r);
          }
          return x;
        }
        return S.prototype.parseExprAtom.call(this, i, r, n);
      }, p.parseExprAtomDefault = function() {
        if (V(this.type)) {
          var i = this.potentialArrowAt === this.start, r = this.containsEsc, n = this.parseIdent();
          if (!r && n.name === "async" && !this.canInsertSemicolon()) {
            var c = this.type;
            if (c === o._function) return this.next(), this.parseFunction(this.startNodeAtNode(n), void 0, !0, !0);
            if (V(c)) {
              if (this.lookaheadCharCode() === 61) {
                var f = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(n), [f], !0);
              }
              return n;
            }
          }
          return i && this.match(o.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(n), [n], !1)) : n;
        }
        this.unexpected();
      }, p.parseIdentNode = function() {
        var i = this.startNode();
        return Jt(this.type) ? (i.name = this.value, i) : S.prototype.parseIdentNode.call(this);
      }, p.parseVarStatement = function(i, r, n) {
        n === void 0 && (n = !1);
        var c = this.isAmbientContext;
        this.next(), S.prototype.parseVar.call(this, i, !1, r, n || c), this.semicolon();
        var f = this.finishNode(i, "VariableDeclaration");
        if (!c) return f;
        for (var m, y = Je(f.declarations); !(m = y()).done; ) {
          var x = m.value, b = x.init;
          b && (r !== "const" || x.id.typeAnnotation ? this.raise(b.start, A.InitializerNotAllowedInAmbientContext) : b.type !== "StringLiteral" && b.type !== "BooleanLiteral" && b.type !== "NumericLiteral" && b.type !== "BigIntLiteral" && (b.type !== "TemplateLiteral" || b.expressions.length > 0) && !rr(b) && this.raise(b.start, A.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return f;
      }, p.parseStatement = function(i, r, n) {
        if (this.match(I.at) && this.parseDecorators(!0), this.match(o._const) && this.isLookaheadContextual("enum")) {
          var c = this.startNode();
          return this.expect(o._const), this.tsParseEnumDeclaration(c, { const: !0 });
        }
        if (this.ts_isContextual(I.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(I.interface)) {
          var f = this.tsParseInterfaceDeclaration(this.startNode());
          if (f) return f;
        }
        return S.prototype.parseStatement.call(this, i, r, n);
      }, p.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, p.parsePostMemberNameModifiers = function(i) {
        this.eat(o.question) && (i.optional = !0), i.readonly && this.match(o.parenL) && this.raise(i.start, A.ClassMethodHasReadonly), i.declare && this.match(o.parenL) && this.raise(i.start, A.ClassMethodHasDeclare);
      }, p.parseExpressionStatement = function(i, r) {
        return (r.type === "Identifier" ? this.tsParseExpressionStatement(i, r) : void 0) || S.prototype.parseExpressionStatement.call(this, i, r);
      }, p.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(I.at) || S.prototype.shouldParseExportStatement.call(this);
      }, p.parseConditional = function(i, r, n, c, f) {
        if (this.eat(o.question)) {
          var m = this.startNodeAt(r, n);
          return m.test = i, m.consequent = this.parseMaybeAssign(), this.expect(o.colon), m.alternate = this.parseMaybeAssign(c), this.finishNode(m, "ConditionalExpression");
        }
        return i;
      }, p.parseMaybeConditional = function(i, r) {
        var n = this, c = this.start, f = this.startLoc, m = this.parseExprOps(i, r);
        if (this.checkExpressionErrors(r)) return m;
        if (!this.maybeInArrowParameters || !this.match(o.question)) return this.parseConditional(m, c, f, i, r);
        var y = this.tryParse(function() {
          return n.parseConditional(m, c, f, i, r);
        });
        return y.node ? (y.error && this.setLookaheadState(y.failState), y.node) : (y.error && this.setOptionalParametersError(r, y.error), m);
      }, p.parseParenItem = function(i) {
        var r = this.start, n = this.startLoc;
        if (i = S.prototype.parseParenItem.call(this, i), this.eat(o.question) && (i.optional = !0, this.resetEndLocation(i)), this.match(o.colon)) {
          var c = this.startNodeAt(r, n);
          return c.expression = i, c.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(c, "TSTypeCastExpression");
        }
        return i;
      }, p.parseExportDeclaration = function(i) {
        var r = this;
        if (!this.isAmbientContext && this.ts_isContextual(I.declare)) return this.tsInAmbientContext(function() {
          return r.parseExportDeclaration(i);
        });
        var n = this.start, c = this.startLoc, f = this.eatContextual("declare");
        !f || !this.ts_isContextual(I.declare) && this.shouldParseExportStatement() || this.raise(this.start, A.ExpectedAmbientAfterExportDeclare);
        var m = V(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return m ? ((m.type === "TSInterfaceDeclaration" || m.type === "TSTypeAliasDeclaration" || f) && (i.exportKind = "type"), f && (this.resetStartLocation(m, n, c), m.declare = !0), m) : null;
      }, p.parseClassId = function(i, r) {
        if (r || !this.isContextual("implements")) {
          S.prototype.parseClassId.call(this, i, r);
          var n = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          n && (i.typeParameters = n);
        }
      }, p.parseClassPropertyAnnotation = function(i) {
        i.optional || (this.value === "!" && this.eat(o.prefix) ? i.definite = !0 : this.eat(o.question) && (i.optional = !0));
        var r = this.tsTryParseTypeAnnotation();
        r && (i.typeAnnotation = r);
      }, p.parseClassField = function(i) {
        if (i.key.type === "PrivateIdentifier") i.abstract && this.raise(i.start, A.PrivateElementHasAbstract), i.accessibility && this.raise(i.start, A.PrivateElementHasAccessibility({ modifier: i.accessibility })), this.parseClassPropertyAnnotation(i);
        else if (this.parseClassPropertyAnnotation(i), this.isAmbientContext && (!i.readonly || i.typeAnnotation) && this.match(o.eq) && this.raise(this.start, A.DeclareClassFieldHasInitializer), i.abstract && this.match(o.eq)) {
          var r = i.key;
          this.raise(this.start, A.AbstractPropertyHasInitializer({ propertyName: r.type !== "Identifier" || i.computed ? "[" + this.input.slice(r.start, r.end) + "]" : r.name }));
        }
        return S.prototype.parseClassField.call(this, i);
      }, p.parseClassMethod = function(i, r, n, c) {
        var f = i.kind === "constructor", m = i.key.type === "PrivateIdentifier", y = this.tsTryParseTypeParameters();
        m ? (y && (i.typeParameters = y), i.accessibility && this.raise(i.start, A.PrivateMethodsHasAccessibility({ modifier: i.accessibility }))) : y && f && this.raise(y.start, A.ConstructorHasTypeParameters);
        var x = i.declare, b = i.kind;
        !(x !== void 0 && x) || b !== "get" && b !== "set" || this.raise(i.start, A.DeclareAccessor({ kind: b })), y && (i.typeParameters = y);
        var T = i.key;
        i.kind === "constructor" ? (r && this.raise(T.start, "Constructor can't be a generator"), n && this.raise(T.start, "Constructor can't be an async method")) : i.static && Ze(i, "prototype") && this.raise(T.start, "Classes may not have a static property named prototype");
        var E = i.value = this.parseMethod(r, n, c, !0, i);
        return i.kind === "get" && E.params.length !== 0 && this.raiseRecoverable(E.start, "getter should have no params"), i.kind === "set" && E.params.length !== 1 && this.raiseRecoverable(E.start, "setter should have exactly one param"), i.kind === "set" && E.params[0].type === "RestElement" && this.raiseRecoverable(E.params[0].start, "Setter cannot use rest params"), this.finishNode(i, "MethodDefinition");
      }, p.isClassMethod = function() {
        return this.match(o.relational);
      }, p.parseClassElement = function(i) {
        var r = this;
        if (this.eat(o.semi)) return null;
        var n, c = this.options.ecmaVersion, f = this.startNode(), m = "", y = !1, x = !1, b = "method", T = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], E = this.tsParseModifiers({ modified: f, allowedModifiers: T, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: A.InvalidModifierOnTypeParameterPositions });
        n = !!E.static;
        var L = function() {
          if (!r.tsIsStartOfStaticBlocks()) {
            var w = r.tsTryParseIndexSignature(f);
            if (w) return f.abstract && r.raise(f.start, A.IndexSignatureHasAbstract), f.accessibility && r.raise(f.start, A.IndexSignatureHasAccessibility({ modifier: f.accessibility })), f.declare && r.raise(f.start, A.IndexSignatureHasDeclare), f.override && r.raise(f.start, A.IndexSignatureHasOverride), w;
            if (!r.inAbstractClass && f.abstract && r.raise(f.start, A.NonAbstractClassHasAbstractMethod), f.override && i && r.raise(f.start, A.OverrideNotInSubClass), f.static = n, n && (r.isClassElementNameStart() || r.type === o.star || (m = "static")), !m && c >= 8 && r.eatContextual("async") && (!r.isClassElementNameStart() && r.type !== o.star || r.canInsertSemicolon() ? m = "async" : x = !0), !m && (c >= 9 || !x) && r.eat(o.star) && (y = !0), !m && !x && !y) {
              var U = r.value;
              (r.eatContextual("get") || r.eatContextual("set")) && (r.isClassElementNameStart() ? b = U : m = U);
            }
            if (m ? (f.computed = !1, f.key = r.startNodeAt(r.lastTokStart, r.lastTokStartLoc), f.key.name = m, r.finishNode(f.key, "Identifier")) : r.parseClassElementName(f), r.parsePostMemberNameModifiers(f), r.isClassMethod() || c < 13 || r.type === o.parenL || b !== "method" || y || x) {
              var B = !f.static && Ze(f, "constructor"), q = B && i;
              B && b !== "method" && r.raise(f.key.start, "Constructor can't have get/set modifier"), f.kind = B ? "constructor" : b, r.parseClassMethod(f, y, x, q);
            } else r.parseClassField(f);
            return f;
          }
          if (r.next(), r.next(), r.tsHasSomeModifiers(f, T) && r.raise(r.start, A.StaticBlockCannotHaveModifier), c >= 13) return S.prototype.parseClassStaticBlock.call(r, f), f;
        };
        return f.declare ? this.tsInAmbientContext(L) : L(), f;
      }, p.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || S.prototype.isClassElementNameStart.call(this);
      }, p.parseClassSuper = function(i) {
        S.prototype.parseClassSuper.call(this, i), i.superClass && (this.tsMatchLeftRelational() || this.match(o.bitShift)) && (i.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (i.implements = this.tsParseHeritageClause("implements"));
      }, p.parseFunctionParams = function(i) {
        var r = this.tsTryParseTypeParameters();
        r && (i.typeParameters = r), S.prototype.parseFunctionParams.call(this, i);
      }, p.parseVarId = function(i, r) {
        S.prototype.parseVarId.call(this, i, r), i.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(o.prefix) && (i.definite = !0);
        var n = this.tsTryParseTypeAnnotation();
        n && (i.id.typeAnnotation = n, this.resetEndLocation(i.id));
      }, p.parseArrowExpression = function(i, r, n, c) {
        this.match(o.colon) && (i.returnType = this.tsParseTypeAnnotation());
        var f = this.yieldPos, m = this.awaitPos, y = this.awaitIdentPos;
        this.enterScope(16 | Se(n, !1)), this.initFunction(i);
        var x = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (i.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, i.params = this.toAssignableList(r, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(i, !0, !1, c), this.yieldPos = f, this.awaitPos = m, this.awaitIdentPos = y, this.maybeInArrowParameters = x, this.finishNode(i, "ArrowFunctionExpression");
      }, p.parseMaybeAssignOrigin = function(i, r, n) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(i);
          this.exprAllowed = !1;
        }
        var c = !1, f = -1, m = -1, y = -1;
        r ? (f = r.parenthesizedAssign, m = r.trailingComma, y = r.doubleProto, r.parenthesizedAssign = r.trailingComma = -1) : (r = new Ut(), c = !0);
        var x = this.start, b = this.startLoc;
        (this.type === o.parenL || V(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = i === "await");
        var T = this.parseMaybeConditional(i, r);
        if (n && (T = n.call(this, T, x, b)), this.type.isAssign) {
          var E = this.startNodeAt(x, b);
          return E.operator = this.value, this.type === o.eq && (T = this.toAssignable(T, !0, r)), c || (r.parenthesizedAssign = r.trailingComma = r.doubleProto = -1), r.shorthandAssign >= T.start && (r.shorthandAssign = -1), this.type === o.eq ? this.checkLValPattern(T) : this.checkLValSimple(T), E.left = T, this.next(), E.right = this.parseMaybeAssign(i), y > -1 && (r.doubleProto = y), this.finishNode(E, "AssignmentExpression");
        }
        return c && this.checkExpressionErrors(r, !0), f > -1 && (r.parenthesizedAssign = f), m > -1 && (r.trailingComma = m), T;
      }, p.parseMaybeAssign = function(i, r, n) {
        var c, f, m, y, x, b, T, E, L, w, U, B = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (E = this.cloneCurLookaheadState(), !(L = this.tryParse(function() {
            return B.parseMaybeAssignOrigin(i, r, n);
          }, E)).error) return L.node;
          var q = this.context, G = q[q.length - 1];
          G === g.tokContexts.tc_oTag && q[q.length - 2] === g.tokContexts.tc_expr ? (q.pop(), q.pop()) : G !== g.tokContexts.tc_oTag && G !== g.tokContexts.tc_expr || q.pop();
        }
        if (!((c = L) != null && c.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(i, r, n);
        E && !this.compareLookaheadState(E, this.getCurLookaheadState()) || (E = this.cloneCurLookaheadState());
        var it = this.tryParse(function(Ct) {
          var Ft, jt;
          U = B.tsParseTypeParameters();
          var wt = B.parseMaybeAssignOrigin(i, r, n);
          return (wt.type !== "ArrowFunctionExpression" || (Ft = wt.extra) != null && Ft.parenthesized) && Ct(), ((jt = U) == null ? void 0 : jt.params.length) !== 0 && B.resetStartLocationFromNode(wt, U), wt.typeParameters = U, wt;
        }, E);
        if (!it.error && !it.aborted) return U && this.reportReservedArrowTypeParam(U), it.node;
        if (!L && (ti(!0), !(w = this.tryParse(function() {
          return B.parseMaybeAssignOrigin(i, r, n);
        }, E)).error)) return w.node;
        if ((f = L) != null && f.node) return this.setLookaheadState(L.failState), L.node;
        if (it.node) return this.setLookaheadState(it.failState), U && this.reportReservedArrowTypeParam(U), it.node;
        if ((m = w) != null && m.node) return this.setLookaheadState(w.failState), w.node;
        throw (y = L) != null && y.thrown ? L.error : it.thrown ? it.error : (x = w) != null && x.thrown ? w.error : ((b = L) == null ? void 0 : b.error) || it.error || ((T = w) == null ? void 0 : T.error);
      }, p.parseAssignableListItem = function(i) {
        for (var r = []; this.match(I.at); ) r.push(this.parseDecorator());
        var n, c = this.start, f = this.startLoc, m = !1, y = !1;
        if (i !== void 0) {
          var x = {};
          this.tsParseModifiers({ modified: x, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), n = x.accessibility, y = x.override, m = x.readonly, i === !1 && (n || m || y) && this.raise(f.start, A.UnexpectedParameterModifier);
        }
        var b = this.parseMaybeDefault(c, f);
        this.parseBindingListItem(b);
        var T = this.parseMaybeDefault(b.start, b.loc, b);
        if (r.length && (T.decorators = r), n || m || y) {
          var E = this.startNodeAt(c, f);
          return n && (E.accessibility = n), m && (E.readonly = m), y && (E.override = y), T.type !== "Identifier" && T.type !== "AssignmentPattern" && this.raise(E.start, A.UnsupportedParameterPropertyKind), E.parameter = T, this.finishNode(E, "TSParameterProperty");
        }
        return T;
      }, p.checkLValInnerPattern = function(i, r, n) {
        r === void 0 && (r = 0), i.type === "TSParameterProperty" ? this.checkLValInnerPattern(i.parameter, r, n) : S.prototype.checkLValInnerPattern.call(this, i, r, n);
      }, p.parseBindingListItem = function(i) {
        this.eat(o.question) && (i.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(i.start, A.PatternIsOptional), i.optional = !0);
        var r = this.tsTryParseTypeAnnotation();
        return r && (i.typeAnnotation = r), this.resetEndLocation(i), i;
      }, p.isAssignable = function(i, r) {
        var n = this;
        switch (i.type) {
          case "TSTypeCastExpression":
            return this.isAssignable(i.expression, r);
          case "TSParameterProperty":
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            return !0;
          case "ObjectExpression":
            var c = i.properties.length - 1;
            return i.properties.every(function(f, m) {
              return f.type !== "ObjectMethod" && (m === c || f.type !== "SpreadElement") && n.isAssignable(f);
            });
          case "Property":
          case "ObjectProperty":
            return this.isAssignable(i.value);
          case "SpreadElement":
            return this.isAssignable(i.argument);
          case "ArrayExpression":
            return i.elements.every(function(f) {
              return f === null || n.isAssignable(f);
            });
          case "AssignmentExpression":
            return i.operator === "=";
          case "ParenthesizedExpression":
            return this.isAssignable(i.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !r;
          default:
            return !1;
        }
      }, p.toAssignable = function(i, r, n) {
        switch (r === void 0 && (r = !1), n === void 0 && (n = new Ut()), i.type) {
          case "ParenthesizedExpression":
            return this.toAssignableParenthesizedExpression(i, r, n);
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            return r || this.raise(i.start, A.UnexpectedTypeCastInParameter), this.toAssignable(i.expression, r, n);
          case "MemberExpression":
            break;
          case "AssignmentExpression":
            return r || i.left.type !== "TSTypeCastExpression" || (i.left = this.typeCastToParameter(i.left)), S.prototype.toAssignable.call(this, i, r, n);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(i);
          default:
            return S.prototype.toAssignable.call(this, i, r, n);
        }
        return i;
      }, p.toAssignableParenthesizedExpression = function(i, r, n) {
        switch (i.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            return this.toAssignable(i.expression, r, n);
          default:
            return S.prototype.toAssignable.call(this, i, r, n);
        }
      }, p.curPosition = function() {
        if (this.options.locations) {
          var i = S.prototype.curPosition.call(this);
          return Object.defineProperty(i, "offset", { get: function() {
            return function(r) {
              var n = new v.Position(this.line, this.column + r);
              return n.index = this.index + r, n;
            };
          } }), i.index = this.pos, i;
        }
      }, p.parseBindingAtom = function() {
        return this.type === o._this ? this.parseIdent(!0) : S.prototype.parseBindingAtom.call(this);
      }, p.shouldParseArrow = function(i) {
        var r, n = this;
        if (r = this.match(o.colon) ? i.every(function(f) {
          return n.isAssignable(f, !0);
        }) : !this.canInsertSemicolon()) {
          if (this.match(o.colon)) {
            var c = this.tryParse(function(f) {
              var m = n.tsParseTypeOrTypePredicateAnnotation(o.colon);
              return !n.canInsertSemicolon() && n.match(o.arrow) || f(), m;
            });
            if (c.aborted) return this.shouldParseArrowReturnType = void 0, !1;
            c.thrown || (c.error && this.setLookaheadState(c.failState), this.shouldParseArrowReturnType = c.node);
          }
          return !!this.match(o.arrow) || (this.shouldParseArrowReturnType = void 0, !1);
        }
        return this.shouldParseArrowReturnType = void 0, r;
      }, p.parseParenArrowList = function(i, r, n, c) {
        var f = this.startNodeAt(i, r);
        return f.returnType = this.shouldParseArrowReturnType, this.shouldParseArrowReturnType = void 0, this.parseArrowExpression(f, n, !1, c);
      }, p.parseParenAndDistinguishExpression = function(i, r) {
        var n, c = this.start, f = this.startLoc, m = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          var y = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0, this.next();
          var x, b = this.start, T = this.startLoc, E = [], L = !0, w = !1, U = new Ut(), B = this.yieldPos, q = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== o.parenR; ) {
            if (L ? L = !1 : this.expect(o.comma), m && this.afterTrailingComma(o.parenR, !0)) {
              w = !0;
              break;
            }
            if (this.type === o.ellipsis) {
              x = this.start, E.push(this.parseParenItem(this.parseRestBinding())), this.type === o.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            E.push(this.parseMaybeAssign(r, U, this.parseParenItem));
          }
          var G = this.lastTokEnd, it = this.lastTokEndLoc;
          if (this.expect(o.parenR), this.maybeInArrowParameters = y, i && this.shouldParseArrow(E) && this.eat(o.arrow)) return this.checkPatternErrors(U, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = B, this.awaitPos = q, this.parseParenArrowList(c, f, E, r);
          E.length && !w || this.unexpected(this.lastTokStart), x && this.unexpected(x), this.checkExpressionErrors(U, !0), this.yieldPos = B || this.yieldPos, this.awaitPos = q || this.awaitPos, E.length > 1 ? ((n = this.startNodeAt(b, T)).expressions = E, this.finishNodeAt(n, "SequenceExpression", G, it)) : n = E[0];
        } else n = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Ct = this.startNodeAt(c, f);
          return Ct.expression = n, this.finishNode(Ct, "ParenthesizedExpression");
        }
        return n;
      }, p.parseTaggedTemplateExpression = function(i, r, n, c) {
        var f = this.startNodeAt(r, n);
        return f.tag = i, f.quasi = this.parseTemplate({ isTagged: !0 }), c && this.raise(r, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(f, "TaggedTemplateExpression");
      }, p.shouldParseAsyncArrow = function() {
        var i = this;
        if (!this.match(o.colon)) return !this.canInsertSemicolon() && this.eat(o.arrow);
        var r = this.tryParse(function(n) {
          var c = i.tsParseTypeOrTypePredicateAnnotation(o.colon);
          return !i.canInsertSemicolon() && i.match(o.arrow) || n(), c;
        });
        return r.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : r.thrown ? void 0 : (r.error && this.setLookaheadState(r.failState), this.shouldParseAsyncArrowReturnType = r.node, !this.canInsertSemicolon() && this.eat(o.arrow));
      }, p.parseSubscriptAsyncArrow = function(i, r, n, c) {
        var f = this.startNodeAt(i, r);
        return f.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(f, n, !0, c);
      }, p.parseExprList = function(i, r, n, c) {
        for (var f = [], m = !0; !this.eat(i); ) {
          if (m) m = !1;
          else if (this.expect(o.comma), r && this.afterTrailingComma(i)) break;
          var y = void 0;
          n && this.type === o.comma ? y = null : this.type === o.ellipsis ? (y = this.parseSpread(c), c && this.type === o.comma && c.trailingComma < 0 && (c.trailingComma = this.start)) : y = this.parseMaybeAssign(!1, c, this.parseParenItem), f.push(y);
        }
        return f;
      }, p.parseSubscript = function(i, r, n, c, f, m, y) {
        var x = this, b = m;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(o.prefix)) {
          this.exprAllowed = !1, this.next();
          var T = this.startNodeAt(r, n);
          return T.expression = i, i = this.finishNode(T, "TSNonNullExpression");
        }
        var E = !1;
        if (this.match(o.questionDot) && this.lookaheadCharCode() === 60) {
          if (c) return i;
          i.optional = !0, b = E = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(o.bitShift)) {
          var L, w = this.tsTryParseAndCatch(function() {
            if (!c && x.atPossibleAsyncArrow(i)) {
              var Be = x.tsTryParseGenericAsyncArrowFunction(r, n, y);
              if (Be) return i = Be;
            }
            var Zt = x.tsParseTypeArgumentsInExpression();
            if (!Zt) return i;
            if (E && !x.match(o.parenL)) return L = x.curPosition(), i;
            if (Gi(x.type) || x.type === o.backQuote) {
              var Ue = x.parseTaggedTemplateExpression(i, r, n, b);
              return Ue.typeParameters = Zt, Ue;
            }
            if (!c && x.eat(o.parenL)) {
              var qe = new Ut(), Lt = x.startNodeAt(r, n);
              return Lt.callee = i, Lt.arguments = x.parseExprList(o.parenR, x.options.ecmaVersion >= 8, !1, qe), x.tsCheckForInvalidTypeCasts(Lt.arguments), Lt.typeParameters = Zt, b && (Lt.optional = E), x.checkExpressionErrors(qe, !0), i = x.finishNode(Lt, "CallExpression");
            }
            var me = x.type;
            if (!(x.tsMatchRightRelational() || me === o.bitShift || me !== o.parenL && (He = me, !!He.startsExpr) && !x.hasPrecedingLineBreak())) {
              var He, ye = x.startNodeAt(r, n);
              return ye.expression = i, ye.typeParameters = Zt, x.finishNode(ye, "TSInstantiationExpression");
            }
          });
          if (L && this.unexpected(L), w) return w.type === "TSInstantiationExpression" && (this.match(o.dot) || this.match(o.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, A.InvalidPropertyAccessAfterInstantiationExpression), i = w;
        }
        var U = this.options.ecmaVersion >= 11, B = U && this.eat(o.questionDot);
        c && B && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var q = this.eat(o.bracketL);
        if (q || B && this.type !== o.parenL && this.type !== o.backQuote || this.eat(o.dot)) {
          var G = this.startNodeAt(r, n);
          G.object = i, q ? (G.property = this.parseExpression(), this.expect(o.bracketR)) : G.property = this.type === o.privateId && i.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), G.computed = !!q, U && (G.optional = B), i = this.finishNode(G, "MemberExpression");
        } else if (!c && this.eat(o.parenL)) {
          var it = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var Ct = new Ut(), Ft = this.yieldPos, jt = this.awaitPos, wt = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var je = this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1, Ct);
          if (f && !B && this.shouldParseAsyncArrow()) this.checkPatternErrors(Ct, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = Ft, this.awaitPos = jt, this.awaitIdentPos = wt, i = this.parseSubscriptAsyncArrow(r, n, je, y);
          else {
            this.checkExpressionErrors(Ct, !0), this.yieldPos = Ft || this.yieldPos, this.awaitPos = jt || this.awaitPos, this.awaitIdentPos = wt || this.awaitIdentPos;
            var Yt = this.startNodeAt(r, n);
            Yt.callee = i, Yt.arguments = je, U && (Yt.optional = B), i = this.finishNode(Yt, "CallExpression");
          }
          this.maybeInArrowParameters = it;
        } else if (this.type === o.backQuote) {
          (B || b) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var de = this.startNodeAt(r, n);
          de.tag = i, de.quasi = this.parseTemplate({ isTagged: !0 }), i = this.finishNode(de, "TaggedTemplateExpression");
        }
        return i;
      }, p.parseGetterSetter = function(i) {
        i.kind = i.key.name, this.parsePropertyName(i), i.value = this.parseMethod(!1);
        var r = i.kind === "get" ? 0 : 1, n = i.value.params[0], c = n && this.isThisParam(n);
        i.value.params.length !== (r = c ? r + 1 : r) ? this.raiseRecoverable(i.value.start, i.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : i.kind === "set" && i.value.params[0].type === "RestElement" && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params");
      }, p.parseProperty = function(i, r) {
        if (!i) {
          var n = [];
          if (this.match(I.at)) for (; this.match(I.at); ) n.push(this.parseDecorator());
          var c = S.prototype.parseProperty.call(this, i, r);
          return c.type === "SpreadElement" && n.length && this.raise(c.start, "Decorators can't be used with SpreadElement"), n.length && (c.decorators = n, n = []), c;
        }
        return S.prototype.parseProperty.call(this, i, r);
      }, p.parseCatchClauseParam = function() {
        var i = this.parseBindingAtom(), r = i.type === "Identifier";
        this.enterScope(r ? 32 : 0), this.checkLValPattern(i, r ? 4 : 2);
        var n = this.tsTryParseTypeAnnotation();
        return n && (i.typeAnnotation = n, this.resetEndLocation(i)), this.expect(o.parenR), i;
      }, p.parseClass = function(i, r) {
        var n = this.inAbstractClass;
        this.inAbstractClass = !!i.abstract;
        try {
          this.next(), this.takeDecorators(i);
          var c = this.strict;
          this.strict = !0, this.parseClassId(i, r), this.parseClassSuper(i);
          var f = this.enterClassBody(), m = this.startNode(), y = !1;
          m.body = [];
          var x = [];
          for (this.expect(o.braceL); this.type !== o.braceR; ) if (this.match(I.at)) x.push(this.parseDecorator());
          else {
            var b = this.parseClassElement(i.superClass !== null);
            x.length && (b.decorators = x, this.resetStartLocationFromNode(b, x[0]), x = []), b && (m.body.push(b), b.type === "MethodDefinition" && b.kind === "constructor" && b.value.type === "FunctionExpression" ? (y && this.raiseRecoverable(b.start, "Duplicate constructor in the same class"), y = !0, b.decorators && b.decorators.length > 0 && this.raise(b.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : b.key && b.key.type === "PrivateIdentifier" && Ys(f, b) && this.raiseRecoverable(b.key.start, "Identifier '#" + b.key.name + "' has already been declared"));
          }
          return this.strict = c, this.next(), x.length && this.raise(this.start, "Decorators must be attached to a class element."), i.body = this.finishNode(m, "ClassBody"), this.exitClassBody(), this.finishNode(i, r ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = n;
        }
      }, p.parseClassFunctionParams = function() {
        var i = this.tsTryParseTypeParameters(this.tsParseConstModifier), r = this.parseBindingList(o.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return i && (r.typeParameters = i), r;
      }, p.parseMethod = function(i, r, n, c, f) {
        var m = this.startNode(), y = this.yieldPos, x = this.awaitPos, b = this.awaitIdentPos;
        if (this.initFunction(m), this.options.ecmaVersion >= 6 && (m.generator = i), this.options.ecmaVersion >= 8 && (m.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Se(r, m.generator) | (n ? 128 : 0)), this.expect(o.parenL), m.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(m, !1, !0, !1, { isClassMethod: c }), this.yieldPos = y, this.awaitPos = x, this.awaitIdentPos = b, f && f.abstract && m.body) {
          var T = f.key;
          this.raise(f.start, A.AbstractMethodHasImplementation({ methodName: T.type !== "Identifier" || f.computed ? "[" + this.input.slice(T.start, T.end) + "]" : T.name }));
        }
        return this.finishNode(m, "FunctionExpression");
      }, tt.parse = function(i, r) {
        if (r.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        r.locations = !0;
        var n = new this(r, i);
        return a && (n.isAmbientContext = !0), n.parse();
      }, tt.parseExpressionAt = function(i, r, n) {
        if (n.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        n.locations = !0;
        var c = new this(n, i, r);
        return a && (c.isAmbientContext = !0), c.nextToken(), c.parseExpression();
      }, p.parseImportSpecifier = function() {
        if (this.ts_isContextual(I.type)) {
          var i = this.startNode();
          return i.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(i, !0, this.importOrExportOuterKind === "type"), this.finishNode(i, "ImportSpecifier");
        }
        var r = S.prototype.parseImportSpecifier.call(this);
        return r.importKind = "value", r;
      }, p.parseExportSpecifier = function(i) {
        var r = this.ts_isContextual(I.type);
        if (!this.match(o.string) && r) {
          var n = this.startNode();
          return n.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(n, !1, this.importOrExportOuterKind === "type"), this.finishNode(n, "ExportSpecifier"), this.checkExport(i, n.exported, n.exported.start), n;
        }
        var c = S.prototype.parseExportSpecifier.call(this, i);
        return c.exportKind = "value", c;
      }, p.parseTypeOnlyImportExportSpecifier = function(i, r, n) {
        var c, f = r ? "imported" : "local", m = r ? "local" : "exported", y = i[f], x = !1, b = !0, T = y.start;
        if (this.isContextual("as")) {
          var E = this.parseIdent();
          if (this.isContextual("as")) {
            var L = this.parseIdent();
            Jt(this.type) ? (x = !0, y = E, c = r ? this.parseIdent() : this.parseModuleExportName(), b = !1) : (c = L, b = !1);
          } else Jt(this.type) ? (b = !1, c = r ? this.parseIdent() : this.parseModuleExportName()) : (x = !0, y = E);
        } else Jt(this.type) && (x = !0, r ? (y = S.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(y)) : y = this.parseModuleExportName());
        x && n && this.raise(T, r ? A.TypeModifierIsUsedInTypeImports : A.TypeModifierIsUsedInTypeExports), i[f] = y, i[m] = c, i[r ? "importKind" : "exportKind"] = x ? "type" : "value", b && this.eatContextual("as") && (i[m] = r ? this.parseIdent() : this.parseModuleExportName()), i[m] || (i[m] = this.copyNode(i[f])), r && this.checkLValSimple(i[m], 2);
      }, p.raiseCommonCheck = function(i, r, n) {
        return r === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(o.comma) && this.lookaheadCharCode() === 41 ? void this.next() : S.prototype.raise.call(this, i, r) : n ? S.prototype.raiseRecoverable.call(this, i, r) : S.prototype.raise.call(this, i, r);
      }, p.raiseRecoverable = function(i, r) {
        return this.raiseCommonCheck(i, r, !0);
      }, p.raise = function(i, r) {
        return this.raiseCommonCheck(i, r, !0);
      }, p.updateContext = function(i) {
        var r = this.type;
        if (r == o.braceL) {
          var n = this.curContext();
          n == Z.tc_oTag ? this.context.push(lt.b_expr) : n == Z.tc_expr ? this.context.push(lt.b_tmpl) : S.prototype.updateContext.call(this, i), this.exprAllowed = !0;
        } else {
          if (r !== o.slash || i !== I.jsxTagStart) return S.prototype.updateContext.call(this, i);
          this.context.length -= 2, this.context.push(Z.tc_cTag), this.exprAllowed = !1;
        }
      }, p.jsx_parseOpeningElementAt = function(i, r) {
        var n = this, c = this.startNodeAt(i, r), f = this.jsx_parseElementName();
        if (f && (c.name = f), this.match(o.relational) || this.match(o.bitShift)) {
          var m = this.tsTryParseAndCatch(function() {
            return n.tsParseTypeArgumentsInExpression();
          });
          m && (c.typeParameters = m);
        }
        for (c.attributes = []; this.type !== o.slash && this.type !== I.jsxTagEnd; ) c.attributes.push(this.jsx_parseAttribute());
        return c.selfClosing = this.eat(o.slash), this.expect(I.jsxTagEnd), this.finishNode(c, f ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, p.enterScope = function(i) {
        i === Bt && this.importsStack.push([]), S.prototype.enterScope.call(this, i);
        var r = S.prototype.currentScope.call(this);
        r.types = [], r.enums = [], r.constEnums = [], r.classes = [], r.exportOnlyBindings = [];
      }, p.exitScope = function() {
        S.prototype.currentScope.call(this).flags === Bt && this.importsStack.pop(), S.prototype.exitScope.call(this);
      }, p.hasImport = function(i, r) {
        var n = this.importsStack.length;
        if (this.importsStack[n - 1].indexOf(i) > -1) return !0;
        if (!r && n > 1) {
          for (var c = 0; c < n - 1; c++) if (this.importsStack[c].indexOf(i) > -1) return !0;
        }
        return !1;
      }, p.maybeExportDefined = function(i, r) {
        this.inModule && 1 & i.flags && this.undefinedExports.delete(r);
      }, p.isRedeclaredInScope = function(i, r, n) {
        return !!(0 & n) && (2 & n ? i.lexical.indexOf(r) > -1 || i.functions.indexOf(r) > -1 || i.var.indexOf(r) > -1 : 3 & n ? i.lexical.indexOf(r) > -1 || !S.prototype.treatFunctionsAsVarInScope.call(this, i) && i.var.indexOf(r) > -1 : i.lexical.indexOf(r) > -1 && !(32 & i.flags && i.lexical[0] === r) || !this.treatFunctionsAsVarInScope(i) && i.functions.indexOf(r) > -1);
      }, p.checkRedeclarationInScope = function(i, r, n, c) {
        this.isRedeclaredInScope(i, r, n) && this.raise(c, "Identifier '" + r + "' has already been declared.");
      }, p.declareName = function(i, r, n) {
        if (4096 & r) return this.hasImport(i, !0) && this.raise(n, "Identifier '" + i + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(i);
        var c = this.currentScope();
        if (1024 & r) return this.maybeExportDefined(c, i), void c.exportOnlyBindings.push(i);
        S.prototype.declareName.call(this, i, r, n), 0 & r && (0 & r || (this.checkRedeclarationInScope(c, i, r, n), this.maybeExportDefined(c, i)), c.types.push(i)), 256 & r && c.enums.push(i), 512 & r && c.constEnums.push(i), 128 & r && c.classes.push(i);
      }, p.checkLocalExport = function(i) {
        var r = i.name;
        if (!this.hasImport(r)) {
          for (var n = this.scopeStack.length - 1; n >= 0; n--) {
            var c = this.scopeStack[n];
            if (c.types.indexOf(r) > -1 || c.exportOnlyBindings.indexOf(r) > -1) return;
          }
          S.prototype.checkLocalExport.call(this, i);
        }
      }, z = tt, D = [{ key: "acornTypeScript", get: function() {
        return g;
      } }], ($ = [{ key: "acornTypeScript", get: function() {
        return g;
      } }]) && Xe(z.prototype, $), D && Xe(z, D), Object.defineProperty(z, "prototype", { writable: !1 }), tt;
    })(d);
    return Xi;
  };
}
const nr = [
  { idPrefix: "datapos-app-nuxt", typeId: "app", isPublish: !1, uploadGroupName: void 0 },
  { idPrefix: "datapos-api", typeId: "api", isPublish: !1, uploadGroupName: void 0 },
  { idPrefix: "datapos-connector", typeId: "connector", isPublish: !0, uploadGroupName: "connectors" },
  { idPrefix: "datapos-context", typeId: "context", isPublish: !0, uploadGroupName: "contexts" },
  { idPrefix: "datapos-development", typeId: "development", isPublish: !0, uploadGroupName: void 0 },
  { idPrefix: "datapos-engine", typeId: "engine", isPublish: !1, uploadGroupName: "engine" },
  { idPrefix: "datapos-presenter", typeId: "presenter", isPublish: !0, uploadGroupName: "presenters" },
  { idPrefix: "datapos-resources", typeId: "resources", isPublish: !1, uploadGroupName: void 0 },
  { idPrefix: "datapos-shared", typeId: "shared", isPublish: !0, uploadGroupName: void 0 },
  { idPrefix: "datapos-tool", typeId: "tool", isPublish: !0, uploadGroupName: "tools" },
  { idPrefix: "eslint-config-datapos", typeId: "eslint", isPublish: !0, uploadGroupName: void 0 }
], or = ss(rs);
async function hr(t) {
  let e;
  try {
    e = await at.readdir(t, { withFileTypes: !0 });
  } catch (s) {
    if (s.code === "ENOENT") return;
    throw s;
  }
  await Promise.all(
    e.map(async (s) => {
      const a = qt.join(t, s.name);
      try {
        await at.rm(a, { recursive: !0, force: !0 });
      } catch (h) {
        if (h.code !== "ENOENT") throw h;
      }
    })
  );
}
function De(t) {
  const s = H.extend(ar()).parse(t, {
    ecmaVersion: "latest",
    sourceType: "module",
    locations: !0
  }), a = [];
  return Ae(s, (h) => {
    if (h.type !== "MethodDefinition") return;
    const l = h, d = l.key;
    if (d.type !== "Identifier") return;
    const v = d.name;
    v && v !== "constructor" && l.accessibility !== "private" && a.push(v);
  }), a;
}
async function ct(t, e, s = [], a) {
  const h = `${e} ${s.join(" ")}`;
  t !== void 0 && W(`${t} - exec(${h})`);
  const { stdout: l, stderr: d } = await or(h);
  a === void 0 ? l.trim() && console.log(l.trim()) : await at.writeFile(a, l.trim(), "utf8"), d.trim() && console.error(d.trim());
}
async function ur(t, e) {
  return at.readdir(t, e);
}
function Ui(t) {
  const e = nr.find((s) => t.startsWith(s.idPrefix));
  if (!e) throw new Error(`Failed to locate module type configuration for identifier '${t}'.`);
  return e;
}
async function Ve() {
}
function vt(t) {
  const e = "\x1B[36m", s = "\x1B[0m", a = "─".repeat(Math.max(t.length + 60, 60));
  console.info(`
${e}${a}`), console.info(`▶️  ${t}`), console.info(`${a}${s}`);
}
function Pt(t) {
  console.info(`
✅ ${t}
`);
}
function W(t) {
  console.info(`
${t}
`);
}
async function Q(t) {
  return JSON.parse(await at.readFile(t, "utf8"));
}
async function Et(t) {
  return await at.readFile(t, "utf8");
}
async function cr(t) {
  try {
    await at.unlink(t);
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
}
async function dt(t, e, s = [], a = !1) {
  return W(`${t} - spawn(${e} ${s.join(" ")})`), new Promise((h, l) => {
    as(e, s, { stdio: "inherit" }).on("close", (v) => {
      v === 0 || a ? h() : l(new Error(`${e} exited with code ${v}`));
    });
  });
}
function qi(t, e, s, a) {
  const h = t.indexOf(s), l = t.indexOf(a);
  if (h === -1 || l === -1) throw new Error(`Markers ${s}-${a} not found in content.`);
  return `${t.slice(0, Math.max(0, h + s.length))}
${e}
${t.slice(Math.max(0, l))}`;
}
async function oe(t, e) {
  await at.writeFile(t, JSON.stringify(e, void 0, 4), "utf8");
}
async function Wt(t, e) {
  await at.writeFile(t, e, "utf8");
}
function Ae(t, e) {
  e(t);
  for (const [s, a] of Object.entries(t)) {
    if (["loc", "range", "start", "end", "comments"].includes(s)) continue;
    const h = a;
    if (Array.isArray(h))
      for (const l of h) {
        const d = l;
        d && typeof d.type == "string" && Ae(d, e);
      }
    else h && typeof h == "object" && typeof h.type == "string" && Ae(h, e);
  }
}
async function pr() {
  const t = await Q("config.json"), e = {
    body: JSON.stringify(t),
    headers: { "Content-Type": "application/json" },
    method: "PUT"
  }, s = await fetch(`https://api.datapos.app/states/${t.id}`, e);
  if (!s.ok) throw new Error(await s.text());
}
async function ii(t) {
  const e = t.id, s = {
    body: JSON.stringify(t),
    headers: { "Content-Type": "application/json" },
    method: "PUT"
  }, a = await fetch(`https://api.datapos.app/states/${e}`, s);
  if (!a.ok) throw new Error(await a.text());
}
async function si(t, e) {
  const s = `v${t.version}`;
  async function a(h, l = "") {
    const d = await ur(h, { withFileTypes: !0 });
    for (const v of d) {
      const g = `${h}/${v.name}`, o = l ? `${l}/${v.name}` : v.name;
      if (v.isDirectory()) continue;
      const P = `${e}_${s}/${o}`.replaceAll("\\", "/"), N = v.name.endsWith(".css") ? "text/css" : "application/octet-stream", j = v.name.endsWith(".js") ? "application/javascript" : N;
      console.info(`⚙️ Uploading '${o}' → '${P}'...`), await ct(void 0, `wrangler r2 object put "${P}" --file="${g}" --content-type ${j} --jurisdiction=eu --remote`);
    }
  }
  await a("dist");
}
async function Mr() {
  try {
    vt("Build Project"), await dt("1️⃣  Bundle project", "vite", ["build"]), Pt("Project built.");
  } catch (t) {
    console.error("❌ Error building project.", t), process.exit(1);
  }
}
async function Dr() {
  try {
    vt("Release Project"), await Ve();
    const t = await Q("package.json");
    let e = await Q("config.json");
    await Hi("1️⃣", t);
    const s = Ui(e.id);
    switch (s.typeId) {
      case "connector":
        e = await fr("2️⃣", t);
        break;
      case "context":
        e = await dr("2️⃣", t);
        break;
      case "presenter":
        e = await mr("2️⃣", t);
        break;
      default:
        e = await lr("2️⃣", t);
    }
    if (await dt("3️⃣  Bundle project", "vite", ["build"]), await ct("4️⃣  Stage changes", "git", ["add", "."]), await ct("5️⃣  Commit changes", "git", ["commit", "-m", `"v${t.version}"`]), await ct("6️⃣  Push changes", "git", ["push", "origin", "main:main"]), s.typeId === "app")
      W("7️⃣  Register module"), await pr();
    else if (s.typeId === "engine")
      W("7️⃣  Register module"), await si(t, `datapos-engine-eu/${s.uploadGroupName}`), await ii(e);
    else if (s.uploadGroupName === void 0)
      W("7️⃣  Registration NOT required.");
    else {
      W("7️⃣  Register module");
      const a = e.id.split("-").slice(2).join("-");
      await si(t, `datapos-engine-eu/${s.uploadGroupName}/${a}`), await ii(e);
    }
    if (s.isPublish) {
      const a = ".npmrc";
      try {
        await Wt(a, `registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN ?? ""}`), await dt("8️⃣  Publish to npm", "npm", ["publish", "--access", "public"]);
      } finally {
        await cr(a);
      }
    } else
      W(`8️⃣  Publishing NOT required for package with type identifier of '${s.typeId}'.`);
    Pt(`Project version '${t.version}' released.`);
  } catch (t) {
    console.error("❌ Error releasing project.", t), process.exit(1);
  }
}
async function Vr() {
  try {
    vt("Synchronise Project with GitHub");
    const t = await Q("package.json");
    W("Bump project version"), await Hi("1️⃣", t), await ct("2️⃣  Stage changes", "git", ["add", "."]), await ct("3️⃣  Commit changes", "git", ["commit", "-m", `"v${t.version}"`]), await ct("4️⃣  Push changes", "git", ["push", "origin", "main:main"]), Pt(`Project version '${t.version}' synchronised with GitHub.`);
  } catch (t) {
    console.error("❌ Error synchronising project with GitHub.", t), process.exit(1);
  }
}
function Fr() {
  try {
    vt("Test Project"), console.error(`
❌ No tests implemented.
`);
  } catch (t) {
    console.error("❌ Error testing project.", t), process.exit(1);
  }
}
async function lr(t, e) {
  W(`${t}  Build project configuration`);
  const s = await Q("config.json");
  return e.name != null && (s.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (s.version = e.version), await oe("config.json", s), s;
}
async function fr(t, e) {
  W(`${t}  Build connector project configuration`);
  const [s, a] = await Promise.all([Q("config.json"), Et("src/index.ts")]), h = /* @__PURE__ */ Ee(Zi, s);
  if (!h.success)
    throw console.error("❌ Configuration is invalid:"), console.table(h.issues), new Error("Configuration is invalid.");
  const l = De(a), d = yr(l);
  return await Fe(e, s, l, d);
}
async function Fe(t, e, s, a) {
  return s.length > 0 ? (console.info(`ℹ️  Implements ${s.length} operations:`), console.table(s)) : console.warn("⚠️  Implements no operations."), a === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports '${a}' usage.`), t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), e.operations = s, e.usageId = a, await oe("config.json", e), e;
}
async function dr(t, e) {
  W(`${t}  Build context project configuration`);
  const [s, a] = await Promise.all([Q("config.json"), Et("src/index.ts")]), h = /* @__PURE__ */ Ee(Yi, s);
  if (!h.success)
    throw console.error("❌ Configuration is invalid:"), console.table(h.issues), new Error("Configuration is invalid.");
  const l = De(a);
  return await Fe(e, s, l);
}
async function mr(t, e) {
  W(`${t}  Build presenter project configuration`);
  const [s, a] = await Promise.all([Q("config.json"), Et("src/index.ts")]), h = /* @__PURE__ */ Ee(is, s);
  if (!h.success)
    throw console.error("❌ Configuration is invalid:"), console.table(h.issues), new Error("Configuration is invalid.");
  const l = De(a);
  return await Fe(e, s, l);
}
async function Hi(t, e, s = "./") {
  if (W(`${t}  Bump project version`), e.version == null)
    e.version = "0.0.001", console.warn(`⚠️ Project version initialised to '${e.version}'.`), await oe(`${s}package.json`, e);
  else {
    const a = e.version, h = e.version.split(".");
    e.version = `${h[0]}.${h[1]}.${Number(h[2]) + 1}`, console.info(`Project version bumped from '${a}' to '${e.version}'.`), await oe(`${s}package.json`, e);
  }
}
function yr(t) {
  let e = !1, s = !1;
  for (const a of t)
    ts.includes(a) && (e = !0), es.includes(a) && (s = !0);
  return e && s ? "bidirectional" : e ? "source" : s ? "destination" : "unknown";
}
const xr = {
  critical: { color: "D32F2F", label: "critical" },
  high: { color: "EF6C00", label: "high" },
  moderate: { color: "FBC02D", label: "moderate" },
  low: { color: "6D8C31", label: "low" },
  unknown: { color: "616161", label: "unknown" }
  // See sample badges in ~/tests/sampleBadges.md. Also included 'info' colouring.
}, vr = "<!-- OWASP_BADGES_START -->", gr = "<!-- OWASP_BADGES_END -->";
async function jr() {
  try {
    vt("Audit Dependencies"), await Ve();
    const t = await Q("package.json");
    await dt("1️⃣", "owasp-dependency-check", [
      "--out",
      "dependency-check-reports",
      "--project",
      t.name ?? "unknown",
      "--enableRetired",
      "--nodePackageSkipDevDependencies",
      "--nvdApiKey",
      process.env.OWASP_NVD_API_KEY ?? ""
    ]), await br("2️⃣"), await dt("3️⃣  Check using 'npm audit'", "npm", ["audit"]), Pt("Dependencies audited.");
  } catch (t) {
    console.error("❌ Error auditing dependencies.", t), process.exit(1);
  }
}
async function br(t) {
  W(`${t}  Insert OWASP Badge(s) into 'README.md'`);
  const e = await Q("dependency-check-reports/dependency-check-report.json"), s = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
  for (const d of e.dependencies)
    if (d.vulnerabilities != null)
      for (const v of d.vulnerabilities) {
        const g = v.severity?.toLowerCase() ?? "unknown";
        g in s ? s[g]++ : s.unknown++;
      }
  const a = await Tr(s), h = await Et("./README.md"), l = qi(h, a.join(" "), vr, gr);
  await Wt("README.md", l), console.info("OWASP audit badge(s) inserted into 'README.md'");
}
async function Tr(t) {
  const e = await Q("config.json"), s = [];
  if (Object.values(t).reduce((h, l) => h + l, 0) === 0)
    console.info("No vulnerabilities found."), s.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${e.id}/dependency-check-reports/dependency-check-report.html)`);
  else
    for (const [h, l] of Object.entries(t)) {
      const d = xr[h];
      if (console.warn(`⚠️  ${l} ${d.label} vulnerability(ies) found.`), l === 0) continue;
      const v = `https://img.shields.io/badge/OWASP-${l}%20${d.label}-${d.color}`;
      s.push(`[![OWASP](${v})](https://data-positioning.github.io/${e.id}/dependency-check-reports/dependency-check-report.html)`);
    }
  return s;
}
async function Br() {
  try {
    vt("Check Dependencies"), await dt("1️⃣  Check using 'npm outdated'", "npm", ["outdated"], !0), await dt("2️⃣  Check using 'npm-check-updates'", "npm-check-updates", ["-i"]), Pt("Dependencies checked.");
  } catch (t) {
    console.error("❌ Error checking dependencies.", t), process.exit(1);
  }
}
const Sr = "<!-- DEPENDENCY_LICENSES_START -->", Pr = "<!-- DEPENDENCY_LICENSES_END -->";
async function Ur(t = [], e = !0) {
  try {
    vt("Document Dependencies"), await Ve();
    const s = t.flatMap((h) => ["--allowed", `'${h}'`]), a = ri(new ns(import.meta.resolve("@datapos/datapos-development/license-report-config")));
    await ct(
      "1️⃣  Generate 'licenses.json' file",
      "license-report",
      ["--config", `'${a}'`, "--only=prod,peer", "--output=json"],
      "licenses/licenses.json"
    ), await ct("2️⃣  Check 'licenses.json' file", "license-report-check", ["--source", "licenses/licenses.json", "--output=table", ...s]), e ? (await ct(
      "3️⃣  Generate 'licenseTree.json' file",
      "license-report-recursive",
      ["--only=prod,peer", "--output=tree", "--recurse", "--department.value=n/a", "--licensePeriod.value=n/a", "--material.value=n/a", "--relatedTo.value=n/a"],
      "licenses/licenseTree.json"
    ), await ct("4️⃣  Check 'licenseTree.json' file", "license-report-check", ["--source", "licenses/licenseTree.json", "--output=table", ...s])) : (W("3️⃣  Skip 'licenses/licenseTree.json' file generate"), W("4️⃣  Skip 'licenses/licenseTree.json' file check")), await hr("licenses/downloads"), await ct("5️⃣  Download license files", "license-downloader", [
      "--source",
      "licenses/licenses.json",
      "--licDir",
      "licenses/downloads",
      "--githubToken.tokenEnvVar",
      "GITHUB_TOKEN",
      "--download"
    ]), await Cr("6️⃣", e), Pt("Dependencies documented.");
  } catch (s) {
    console.error("❌ Error documenting dependencies.", s), process.exit(1);
  }
}
async function Cr(t, e) {
  W(`${t}  Insert licenses into 'README.md'`);
  const s = await Q("licenses/licenses.json"), a = await Q("licenses/downloads/licenses.ext.json");
  let h = [];
  e && (h = await Q("licenses/licenseTree.json"));
  const l = [
    ...(() => {
      const o = /* @__PURE__ */ new Map();
      for (const P of s)
        o.set(P.name, { ...P });
      for (const P of a) {
        const N = o.get(P.name);
        o.set(P.name, N ? { ...N, ...P } : { ...P });
      }
      for (const P of h) {
        const N = o.get(P.name);
        N && o.set(P.name, { ...N, dependencyCount: P.requires?.length ?? 0 });
      }
      return o.values();
    })()
  ];
  let d = `|Name|Type|Installed|Latest|Latest Released|Deps|Document|
|:-|:-|:-:|:-:|:-|-:|:-|
`;
  for (const o of l) {
    const P = o.installedVersion === o.remoteVersion ? o.installedVersion : `${o.installedVersion} ⚠️`, N = o.latestRemoteModified ? wr(o.latestRemoteModified.split("T")[0]) : "n/a", j = o.dependencyCount != null && o.dependencyCount >= 0 ? o.dependencyCount : "n/a";
    let nt;
    o.licenseFileLink == null || o.licenseFileLink == "" ? nt = "⚠️ No license file" : nt = `[${o.licenseFileLink.slice(Math.max(0, o.licenseFileLink.lastIndexOf("/") + 1))}](${o.licenseFileLink})`, d += `|${o.name}|${o.licenseType}|${P}|${o.remoteVersion}|${N}|${j}|${nt}|
`;
  }
  const v = await Et("./README.md"), g = qi(v, d, Sr, Pr);
  await Wt("README.md", g), console.info("OWASP audit badge(s) inserted into 'README.md'"), await Wt("README.md", g);
}
function wr(t) {
  if (t == null || t === "") return "n/a";
  const e = t.split("T")[0];
  if (e == null || e === "") return "n/a";
  const s = new Date(e), a = /* @__PURE__ */ new Date();
  let h = (a.getFullYear() - s.getFullYear()) * 12 + (a.getMonth() - s.getMonth());
  return a.getDate() < s.getDate() && (h -= 1), h === 0 ? `this month: ${e}` : h === 1 ? `1 month ago: ${e}` : h <= 6 ? `${h} months ago: ${e}` : h <= 12 ? `${h} months ago: ${e} ⚠️` : `${h} months ago: ${e}❗`;
}
async function qr() {
  try {
    vt("Format Code");
    const s = ["--write", "*.json", "*.md", "*.ts", ...["app", "src"].filter((a) => Qi(a)).map((a) => `${a}/**`)];
    await dt("1️⃣  Format", "prettier", s), Pt("Code formatted.");
  } catch (t) {
    console.error("❌ Error formatting code.", t), process.exit(1);
  }
}
async function Hr() {
  try {
    vt("Lint Code"), await dt("1️⃣  Lint", "eslint", ["."]), Pt("Code linted.");
  } catch (t) {
    console.error("❌ Error linting code.", t), process.exit(1);
  }
}
const kr = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
async function $r(t = []) {
  try {
    vt("Update '@datapos/datapos' Dependencies");
    for (const [e, s] of t.entries()) {
      const a = kr.at(e) ?? "🔢";
      if (s === "eslint")
        await dt(`${a}  Update '${s}'`, "npm", ["install", "@datapos/eslint-config-datapos@latest"]);
      else if (await dt(`${a}  Update '${s}'`, "npm", ["install", `@datapos/datapos-${s}@latest`]), s === "development") {
        const h = await Q("config.json"), l = Ui(h.id);
        await Ar(l);
      }
    }
    Pt("'@datapos/datapos' dependencies updated.");
  } catch (e) {
    console.error("❌ Error updating '@datapos/datapos' dependencies.", e), process.exit(1);
  }
}
async function Ar(t) {
  const e = qt.dirname(ri(import.meta.url));
  await mt(e, "../", ".editorconfig"), await mt(e, "../", ".gitattributes"), await (t.isPublish ? mt(e, "../", ".gitignore_published", ".gitignore2") : mt(e, "../", ".gitignore_unpublished", ".gitignore2")), await mt(e, "../", ".markdownlint.json"), await mt(e, "../", "LICENSE"), await mt(e, "../", "tsconfig.json", "tsconfig2.json"), t.typeId === "eslint" || (await mt(e, "../", "eslint.config.ts", "eslint.config2.ts"), await mt(e, "../", "vite.config.ts", "vite.config2.ts"), await mt(e, "../", "vitest.config.ts", "vitest.config2.ts"));
}
async function mt(t, e, s, a) {
  const h = qt.resolve(t, `${e}${s}`), l = await Et(h), d = qt.resolve(process.cwd(), s.split("_")[0] ?? s), v = qt.resolve(process.cwd(), a ?? s);
  let g;
  try {
    g = await Et(d);
  } catch (o) {
    if (o.code !== "ENOENT") throw o;
  }
  if (g === l) {
    console.info(`ℹ️  File '${s}' is already up to date.`);
    return;
  }
  await Wt(v, l), console.info(`ℹ️  File '${s}' synchronised.`);
}
async function Gr(t) {
  try {
    console.info(`🚀 Building public directory index for identifier '${t}'...`);
    const e = {};
    async function s(h, l) {
      console.info(`⚙️ Processing directory '${h}'...`);
      const d = [], v = h.slice(`public/${t}`.length);
      e[v === "" ? "/" : v] = d;
      for (const g of l) {
        const o = `${h}/${g}`;
        try {
          const P = await at.stat(o);
          if (P.isDirectory()) {
            const N = await at.readdir(o), j = { childCount: N.length, name: g, typeId: "folder" };
            d.push(j), await s(o, N);
          } else {
            const N = { id: Ji(), lastModifiedAt: P.mtimeMs, name: g, size: P.size, typeId: "object" };
            d.push(N);
          }
        } catch (P) {
          throw new Error(`Unable to get information for '${g}' in 'buildPublicDirectoryIndex'. ${String(P)}`);
        }
      }
      d.sort((g, o) => {
        const P = g.typeId.localeCompare(o.typeId);
        return P === 0 ? g.name.localeCompare(o.name) : P;
      });
    }
    const a = await at.readdir(`public/${t}`);
    await s(`public/${t}`, a), await at.writeFile(`./public/${t}Index.json`, JSON.stringify(e), "utf8"), console.info("✅ Public directory index built.");
  } catch (e) {
    console.error("❌ Error building public directory index.", e);
  }
}
export {
  jr as auditDependencies,
  Gr as buildDirectoryIndex,
  Mr as buildProject,
  Br as checkDependencies,
  Ur as documentDependencies,
  qr as formatCode,
  Hr as lintCode,
  Dr as releaseProject,
  Vr as syncProjectWithGitHub,
  Fr as testProject,
  $r as updateDataPosDependencies
};
//# sourceMappingURL=datapos-development.es.js.map
