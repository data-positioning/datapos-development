import { exec as yr } from "node:child_process";
import { promises as V } from "node:fs";
import { nanoid as vr } from "nanoid";
import { promisify as xr } from "node:util";
var gr = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], os = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], br = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", us = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", He = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, We = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", kr = {
  5: We,
  "5module": We + " export import",
  6: We + " const class extends export import super"
}, Sr = /^in(stanceof)?$/, wr = new RegExp("[" + us + "]"), Tr = new RegExp("[" + us + br + "]");
function Qe(t, e) {
  for (var i = 65536, s = 0; s < e.length; s += 2) {
    if (i += e[s], i > t)
      return !1;
    if (i += e[s + 1], i >= t)
      return !0;
  }
  return !1;
}
function Tt(t, e) {
  return t < 65 ? t === 36 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && wr.test(String.fromCharCode(t)) : e === !1 ? !1 : Qe(t, os);
}
function Ct(t, e) {
  return t < 48 ? t === 36 : t < 58 ? !0 : t < 65 ? !1 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && Tr.test(String.fromCharCode(t)) : e === !1 ? !1 : Qe(t, os) || Qe(t, gr);
}
var z = function(e, i) {
  i === void 0 && (i = {}), this.label = e, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function gt(t, e) {
  return new z(t, { beforeExpr: !0, binop: e });
}
var bt = { beforeExpr: !0 }, lt = { startsExpr: !0 }, Kt = {};
function j(t, e) {
  return e === void 0 && (e = {}), e.keyword = t, Kt[t] = new z(t, e);
}
var p = {
  num: new z("num", lt),
  regexp: new z("regexp", lt),
  string: new z("string", lt),
  name: new z("name", lt),
  privateId: new z("privateId", lt),
  eof: new z("eof"),
  // Punctuation token types.
  bracketL: new z("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new z("]"),
  braceL: new z("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new z("}"),
  parenL: new z("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new z(")"),
  comma: new z(",", bt),
  semi: new z(";", bt),
  colon: new z(":", bt),
  dot: new z("."),
  question: new z("?", bt),
  questionDot: new z("?."),
  arrow: new z("=>", bt),
  template: new z("template"),
  invalidTemplate: new z("invalidTemplate"),
  ellipsis: new z("...", bt),
  backQuote: new z("`", lt),
  dollarBraceL: new z("${", { beforeExpr: !0, startsExpr: !0 }),
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
  eq: new z("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new z("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new z("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new z("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: gt("||", 1),
  logicalAND: gt("&&", 2),
  bitwiseOR: gt("|", 3),
  bitwiseXOR: gt("^", 4),
  bitwiseAND: gt("&", 5),
  equality: gt("==/!=/===/!==", 6),
  relational: gt("</>/<=/>=", 7),
  bitShift: gt("<</>>/>>>", 8),
  plusMin: new z("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: gt("%", 10),
  star: gt("*", 10),
  slash: gt("/", 10),
  starstar: new z("**", { beforeExpr: !0 }),
  coalesce: gt("??", 1),
  // Keyword token types.
  _break: j("break"),
  _case: j("case", bt),
  _catch: j("catch"),
  _continue: j("continue"),
  _debugger: j("debugger"),
  _default: j("default", bt),
  _do: j("do", { isLoop: !0, beforeExpr: !0 }),
  _else: j("else", bt),
  _finally: j("finally"),
  _for: j("for", { isLoop: !0 }),
  _function: j("function", lt),
  _if: j("if"),
  _return: j("return", bt),
  _switch: j("switch"),
  _throw: j("throw", bt),
  _try: j("try"),
  _var: j("var"),
  _const: j("const"),
  _while: j("while", { isLoop: !0 }),
  _with: j("with"),
  _new: j("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: j("this", lt),
  _super: j("super", lt),
  _class: j("class", lt),
  _extends: j("extends", bt),
  _export: j("export"),
  _import: j("import", lt),
  _null: j("null", lt),
  _true: j("true", lt),
  _false: j("false", lt),
  _in: j("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: j("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: j("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: j("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: j("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, ct = /\r\n?|\n|\u2028|\u2029/, cs = new RegExp(ct.source, "g");
function jt(t) {
  return t === 10 || t === 13 || t === 8232 || t === 8233;
}
function hs(t, e, i) {
  i === void 0 && (i = t.length);
  for (var s = e; s < i; s++) {
    var a = t.charCodeAt(s);
    if (jt(a))
      return s < i - 1 && a === 13 && t.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
  }
  return -1;
}
var oi = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, nt = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ps = Object.prototype, _r = ps.hasOwnProperty, Pr = ps.toString, Yt = Object.hasOwn || (function(t, e) {
  return _r.call(t, e);
}), Ci = Array.isArray || (function(t) {
  return Pr.call(t) === "[object Array]";
}), Ei = /* @__PURE__ */ Object.create(null);
function Rt(t) {
  return Ei[t] || (Ei[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"));
}
function Et(t) {
  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
var Ar = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Jt = function(e, i) {
  this.line = e, this.column = i;
};
Jt.prototype.offset = function(e) {
  return new Jt(this.line, this.column + e);
};
var pe = function(e, i, s) {
  this.start = i, this.end = s, e.sourceFile !== null && (this.source = e.sourceFile);
};
function ui(t, e) {
  for (var i = 1, s = 0; ; ) {
    var a = hs(t, s, e);
    if (a < 0)
      return new Jt(i, e - s);
    ++i, s = a;
  }
}
var Te = {
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
}, Ii = !1;
function Cr(t) {
  var e = {};
  for (var i in Te)
    e[i] = t && Yt(t, i) ? t[i] : Te[i];
  if (e.ecmaVersion === "latest" ? e.ecmaVersion = 1e8 : e.ecmaVersion == null ? (!Ii && typeof console == "object" && console.warn && (Ii = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), e.allowReserved == null && (e.allowReserved = e.ecmaVersion < 5), (!t || t.allowHashBang == null) && (e.allowHashBang = e.ecmaVersion >= 14), Ci(e.onToken)) {
    var s = e.onToken;
    e.onToken = function(a) {
      return s.push(a);
    };
  }
  return Ci(e.onComment) && (e.onComment = Er(e, e.onComment)), e;
}
function Er(t, e) {
  return function(i, s, a, u, h, d) {
    var y = {
      type: i ? "Block" : "Line",
      value: s,
      start: a,
      end: u
    };
    t.locations && (y.loc = new pe(this, h, d)), t.ranges && (y.range = [a, u]), e.push(y);
  };
}
var ue = 1, Qt = 2, ci = 4, ls = 8, hi = 16, fs = 32, Re = 64, ds = 128, Bt = 256, le = 512, Me = ue | Qt | Bt;
function pi(t, e) {
  return Qt | (t ? ci : 0) | (e ? ls : 0);
}
var _e = 0, li = 1, Nt = 2, ms = 3, ys = 4, vs = 5, G = function(e, i, s) {
  this.options = e = Cr(e), this.sourceFile = e.sourceFile, this.keywords = Rt(kr[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
  var a = "";
  e.allowReserved !== !0 && (a = He[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (a += " await")), this.reservedWords = Rt(a);
  var u = (a ? a + " " : "") + He.strict;
  this.reservedWordsStrict = Rt(u), this.reservedWordsStrictBind = Rt(u + " " + He.strictBind), this.input = String(i), this.containsEsc = !1, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf(`
`, s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(ct).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = p.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(ue), this.regexpState = null, this.privateNameStack = [];
}, _t = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
G.prototype.parse = function() {
  var e = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(e);
};
_t.inFunction.get = function() {
  return (this.currentVarScope().flags & Qt) > 0;
};
_t.inGenerator.get = function() {
  return (this.currentVarScope().flags & ls) > 0;
};
_t.inAsync.get = function() {
  return (this.currentVarScope().flags & ci) > 0;
};
_t.canAwait.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], i = e.flags;
    if (i & (Bt | le))
      return !1;
    if (i & Qt)
      return (i & ci) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
_t.allowSuper.get = function() {
  var t = this.currentThisScope(), e = t.flags;
  return (e & Re) > 0 || this.options.allowSuperOutsideMethod;
};
_t.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & ds) > 0;
};
_t.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
_t.allowNewDotTarget.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], i = e.flags;
    if (i & (Bt | le) || i & Qt && !(i & hi))
      return !0;
  }
  return !1;
};
_t.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & Bt) > 0;
};
G.extend = function() {
  for (var e = [], i = arguments.length; i--; ) e[i] = arguments[i];
  for (var s = this, a = 0; a < e.length; a++)
    s = e[a](s);
  return s;
};
G.parse = function(e, i) {
  return new this(i, e).parse();
};
G.parseExpressionAt = function(e, i, s) {
  var a = new this(s, e, i);
  return a.nextToken(), a.parseExpression();
};
G.tokenizer = function(e, i) {
  return new this(i, e);
};
Object.defineProperties(G.prototype, _t);
var ht = G.prototype, Ir = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
ht.strictDirective = function(t) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    nt.lastIndex = t, t += nt.exec(this.input)[0].length;
    var e = Ir.exec(this.input.slice(t));
    if (!e)
      return !1;
    if ((e[1] || e[2]) === "use strict") {
      nt.lastIndex = t + e[0].length;
      var i = nt.exec(this.input), s = i.index + i[0].length, a = this.input.charAt(s);
      return a === ";" || a === "}" || ct.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(a) || a === "!" && this.input.charAt(s + 1) === "=");
    }
    t += e[0].length, nt.lastIndex = t, t += nt.exec(this.input)[0].length, this.input[t] === ";" && t++;
  }
};
ht.eat = function(t) {
  return this.type === t ? (this.next(), !0) : !1;
};
ht.isContextual = function(t) {
  return this.type === p.name && this.value === t && !this.containsEsc;
};
ht.eatContextual = function(t) {
  return this.isContextual(t) ? (this.next(), !0) : !1;
};
ht.expectContextual = function(t) {
  this.eatContextual(t) || this.unexpected();
};
ht.canInsertSemicolon = function() {
  return this.type === p.eof || this.type === p.braceR || ct.test(this.input.slice(this.lastTokEnd, this.start));
};
ht.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
ht.semicolon = function() {
  !this.eat(p.semi) && !this.insertSemicolon() && this.unexpected();
};
ht.afterTrailingComma = function(t, e) {
  if (this.type === t)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0;
};
ht.expect = function(t) {
  this.eat(t) || this.unexpected();
};
ht.unexpected = function(t) {
  this.raise(t ?? this.start, "Unexpected token");
};
var De = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
ht.checkPatternErrors = function(t, e) {
  if (t) {
    t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
    var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, e ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
ht.checkExpressionErrors = function(t, e) {
  if (!t)
    return !1;
  var i = t.shorthandAssign, s = t.doubleProto;
  if (!e)
    return i >= 0 || s >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
};
ht.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
ht.isSimpleAssignTarget = function(t) {
  return t.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(t.expression) : t.type === "Identifier" || t.type === "MemberExpression";
};
var E = G.prototype;
E.parseTopLevel = function(t) {
  var e = /* @__PURE__ */ Object.create(null);
  for (t.body || (t.body = []); this.type !== p.eof; ) {
    var i = this.parseStatement(null, !0, e);
    t.body.push(i);
  }
  if (this.inModule)
    for (var s = 0, a = Object.keys(this.undefinedExports); s < a.length; s += 1) {
      var u = a[s];
      this.raiseRecoverable(this.undefinedExports[u].start, "Export '" + u + "' is not defined");
    }
  return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program");
};
var fi = { kind: "loop" }, Nr = { kind: "switch" };
E.isLet = function(t) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  nt.lastIndex = this.pos;
  var e = nt.exec(this.input), i = this.pos + e[0].length, s = this.input.charCodeAt(i);
  if (s === 91 || s === 92)
    return !0;
  if (t)
    return !1;
  if (s === 123 || s > 55295 && s < 56320)
    return !0;
  if (Tt(s, !0)) {
    for (var a = i + 1; Ct(s = this.input.charCodeAt(a), !0); )
      ++a;
    if (s === 92 || s > 55295 && s < 56320)
      return !0;
    var u = this.input.slice(i, a);
    if (!Sr.test(u))
      return !0;
  }
  return !1;
};
E.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  nt.lastIndex = this.pos;
  var t = nt.exec(this.input), e = this.pos + t[0].length, i;
  return !ct.test(this.input.slice(this.pos, e)) && this.input.slice(e, e + 8) === "function" && (e + 8 === this.input.length || !(Ct(i = this.input.charCodeAt(e + 8)) || i > 55295 && i < 56320));
};
E.isUsingKeyword = function(t, e) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(t ? "await" : "using"))
    return !1;
  nt.lastIndex = this.pos;
  var i = nt.exec(this.input), s = this.pos + i[0].length;
  if (ct.test(this.input.slice(this.pos, s)))
    return !1;
  if (t) {
    var a = s + 5, u;
    if (this.input.slice(s, a) !== "using" || a === this.input.length || Ct(u = this.input.charCodeAt(a)) || u > 55295 && u < 56320)
      return !1;
    nt.lastIndex = a;
    var h = nt.exec(this.input);
    if (h && ct.test(this.input.slice(a, a + h[0].length)))
      return !1;
  }
  if (e) {
    var d = s + 2, y;
    if (this.input.slice(s, d) === "of" && (d === this.input.length || !Ct(y = this.input.charCodeAt(d)) && !(y > 55295 && y < 56320)))
      return !1;
  }
  var o = this.input.charCodeAt(s);
  return Tt(o, !0) || o === 92;
};
E.isAwaitUsing = function(t) {
  return this.isUsingKeyword(!0, t);
};
E.isUsing = function(t) {
  return this.isUsingKeyword(!1, t);
};
E.parseStatement = function(t, e, i) {
  var s = this.type, a = this.startNode(), u;
  switch (this.isLet(t) && (s = p._var, u = "let"), s) {
    case p._break:
    case p._continue:
      return this.parseBreakContinueStatement(a, s.keyword);
    case p._debugger:
      return this.parseDebuggerStatement(a);
    case p._do:
      return this.parseDoStatement(a);
    case p._for:
      return this.parseForStatement(a);
    case p._function:
      return t && (this.strict || t !== "if" && t !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(a, !1, !t);
    case p._class:
      return t && this.unexpected(), this.parseClass(a, !0);
    case p._if:
      return this.parseIfStatement(a);
    case p._return:
      return this.parseReturnStatement(a);
    case p._switch:
      return this.parseSwitchStatement(a);
    case p._throw:
      return this.parseThrowStatement(a);
    case p._try:
      return this.parseTryStatement(a);
    case p._const:
    case p._var:
      return u = u || this.value, t && u !== "var" && this.unexpected(), this.parseVarStatement(a, u);
    case p._while:
      return this.parseWhileStatement(a);
    case p._with:
      return this.parseWithStatement(a);
    case p.braceL:
      return this.parseBlock(!0, a);
    case p.semi:
      return this.parseEmptyStatement(a);
    case p._export:
    case p._import:
      if (this.options.ecmaVersion > 10 && s === p._import) {
        nt.lastIndex = this.pos;
        var h = nt.exec(this.input), d = this.pos + h[0].length, y = this.input.charCodeAt(d);
        if (y === 40 || y === 46)
          return this.parseExpressionStatement(a, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), s === p._import ? this.parseImport(a) : this.parseExport(a, i);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return t && this.unexpected(), this.next(), this.parseFunctionStatement(a, !0, !t);
      var o = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (o)
        return e && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), o === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(a, !1, o), this.semicolon(), this.finishNode(a, "VariableDeclaration");
      var S = this.value, P = this.parseExpression();
      return s === p.name && P.type === "Identifier" && this.eat(p.colon) ? this.parseLabeledStatement(a, S, P, t) : this.parseExpressionStatement(a, P);
  }
};
E.parseBreakContinueStatement = function(t, e) {
  var i = e === "break";
  this.next(), this.eat(p.semi) || this.insertSemicolon() ? t.label = null : this.type !== p.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
  for (var s = 0; s < this.labels.length; ++s) {
    var a = this.labels[s];
    if ((t.label == null || a.name === t.label.name) && (a.kind != null && (i || a.kind === "loop") || t.label && i))
      break;
  }
  return s === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement");
};
E.parseDebuggerStatement = function(t) {
  return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
};
E.parseDoStatement = function(t) {
  return this.next(), this.labels.push(fi), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(p._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(p.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement");
};
E.parseForStatement = function(t) {
  this.next();
  var e = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(fi), this.enterScope(0), this.expect(p.parenL), this.type === p.semi)
    return e > -1 && this.unexpected(e), this.parseFor(t, null);
  var i = this.isLet();
  if (this.type === p._var || this.type === p._const || i) {
    var s = this.startNode(), a = i ? "let" : this.value;
    return this.next(), this.parseVar(s, !0, a), this.finishNode(s, "VariableDeclaration"), this.parseForAfterInit(t, s, e);
  }
  var u = this.isContextual("let"), h = !1, d = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (d) {
    var y = this.startNode();
    return this.next(), d === "await using" && this.next(), this.parseVar(y, !0, d), this.finishNode(y, "VariableDeclaration"), this.parseForAfterInit(t, y, e);
  }
  var o = this.containsEsc, S = new De(), P = this.start, R = e > -1 ? this.parseExprSubscripts(S, "await") : this.parseExpression(!0, S);
  return this.type === p._in || (h = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (e > -1 ? (this.type === p._in && this.unexpected(e), t.await = !0) : h && this.options.ecmaVersion >= 8 && (R.start === P && !o && R.type === "Identifier" && R.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (t.await = !1)), u && h && this.raise(R.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(R, !1, S), this.checkLValPattern(R), this.parseForIn(t, R)) : (this.checkExpressionErrors(S, !0), e > -1 && this.unexpected(e), this.parseFor(t, R));
};
E.parseForAfterInit = function(t, e, i) {
  return (this.type === p._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && e.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === p._in ? i > -1 && this.unexpected(i) : t.await = i > -1), this.parseForIn(t, e)) : (i > -1 && this.unexpected(i), this.parseFor(t, e));
};
E.parseFunctionStatement = function(t, e, i) {
  return this.next(), this.parseFunction(t, ae | (i ? 0 : ti), !1, e);
};
E.parseIfStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(p._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement");
};
E.parseReturnStatement = function(t) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(p.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
};
E.parseSwitchStatement = function(t) {
  this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(p.braceL), this.labels.push(Nr), this.enterScope(0);
  for (var e, i = !1; this.type !== p.braceR; )
    if (this.type === p._case || this.type === p._default) {
      var s = this.type === p._case;
      e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), s ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(p.colon);
    } else
      e || this.unexpected(), e.consequent.push(this.parseStatement(null));
  return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement");
};
E.parseThrowStatement = function(t) {
  return this.next(), ct.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
};
var Lr = [];
E.parseCatchClauseParam = function() {
  var t = this.parseBindingAtom(), e = t.type === "Identifier";
  return this.enterScope(e ? fs : 0), this.checkLValPattern(t, e ? ys : Nt), this.expect(p.parenR), t;
};
E.parseTryStatement = function(t) {
  if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === p._catch) {
    var e = this.startNode();
    this.next(), this.eat(p.parenL) ? e.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0)), e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause");
  }
  return t.finalizer = this.eat(p._finally) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement");
};
E.parseVarStatement = function(t, e, i) {
  return this.next(), this.parseVar(t, !1, e, i), this.semicolon(), this.finishNode(t, "VariableDeclaration");
};
E.parseWhileStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), this.labels.push(fi), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement");
};
E.parseWithStatement = function(t) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement");
};
E.parseEmptyStatement = function(t) {
  return this.next(), this.finishNode(t, "EmptyStatement");
};
E.parseLabeledStatement = function(t, e, i, s) {
  for (var a = 0, u = this.labels; a < u.length; a += 1) {
    var h = u[a];
    h.name === e && this.raise(i.start, "Label '" + e + "' is already declared");
  }
  for (var d = this.type.isLoop ? "loop" : this.type === p._switch ? "switch" : null, y = this.labels.length - 1; y >= 0; y--) {
    var o = this.labels[y];
    if (o.statementStart === t.start)
      o.statementStart = this.start, o.kind = d;
    else
      break;
  }
  return this.labels.push({ name: e, kind: d, statementStart: this.start }), t.body = this.parseStatement(s ? s.indexOf("label") === -1 ? s + "label" : s : "label"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement");
};
E.parseExpressionStatement = function(t, e) {
  return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
};
E.parseBlock = function(t, e, i) {
  for (t === void 0 && (t = !0), e === void 0 && (e = this.startNode()), e.body = [], this.expect(p.braceL), t && this.enterScope(0); this.type !== p.braceR; ) {
    var s = this.parseStatement(null);
    e.body.push(s);
  }
  return i && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement");
};
E.parseFor = function(t, e) {
  return t.init = e, this.expect(p.semi), t.test = this.type === p.semi ? null : this.parseExpression(), this.expect(p.semi), t.update = this.type === p.parenR ? null : this.parseExpression(), this.expect(p.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement");
};
E.parseForIn = function(t, e) {
  var i = this.type === p._in;
  return this.next(), e.type === "VariableDeclaration" && e.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(
    e.start,
    (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(p.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement");
};
E.parseVar = function(t, e, i, s) {
  for (t.declarations = [], t.kind = i; ; ) {
    var a = this.startNode();
    if (this.parseVarId(a, i), this.eat(p.eq) ? a.init = this.parseMaybeAssign(e) : !s && i === "const" && !(this.type === p._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !s && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== p._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration") : !s && a.id.type !== "Identifier" && !(e && (this.type === p._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : a.init = null, t.declarations.push(this.finishNode(a, "VariableDeclarator")), !this.eat(p.comma))
      break;
  }
  return t;
};
E.parseVarId = function(t, e) {
  t.id = e === "using" || e === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(t.id, e === "var" ? li : Nt, !1);
};
var ae = 1, ti = 2, xs = 4;
E.parseFunction = function(t, e, i, s, a) {
  this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === p.star && e & ti && this.unexpected(), t.generator = this.eat(p.star)), this.options.ecmaVersion >= 8 && (t.async = !!s), e & ae && (t.id = e & xs && this.type !== p.name ? null : this.parseIdent(), t.id && !(e & ti) && this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? li : Nt : ms));
  var u = this.yieldPos, h = this.awaitPos, d = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(pi(t.async, t.generator)), e & ae || (t.id = this.type === p.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1, a), this.yieldPos = u, this.awaitPos = h, this.awaitIdentPos = d, this.finishNode(t, e & ae ? "FunctionDeclaration" : "FunctionExpression");
};
E.parseFunctionParams = function(t) {
  this.expect(p.parenL), t.params = this.parseBindingList(p.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
E.parseClass = function(t, e) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
  var s = this.enterClassBody(), a = this.startNode(), u = !1;
  for (a.body = [], this.expect(p.braceL); this.type !== p.braceR; ) {
    var h = this.parseClassElement(t.superClass !== null);
    h && (a.body.push(h), h.type === "MethodDefinition" && h.kind === "constructor" ? (u && this.raiseRecoverable(h.start, "Duplicate constructor in the same class"), u = !0) : h.key && h.key.type === "PrivateIdentifier" && Or(s, h) && this.raiseRecoverable(h.key.start, "Identifier '#" + h.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), t.body = this.finishNode(a, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
};
E.parseClassElement = function(t) {
  if (this.eat(p.semi))
    return null;
  var e = this.options.ecmaVersion, i = this.startNode(), s = "", a = !1, u = !1, h = "method", d = !1;
  if (this.eatContextual("static")) {
    if (e >= 13 && this.eat(p.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === p.star ? d = !0 : s = "static";
  }
  if (i.static = d, !s && e >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === p.star) && !this.canInsertSemicolon() ? u = !0 : s = "async"), !s && (e >= 9 || !u) && this.eat(p.star) && (a = !0), !s && !u && !a) {
    var y = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? h = y : s = y);
  }
  if (s ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = s, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), e < 13 || this.type === p.parenL || h !== "method" || a || u) {
    var o = !i.static && Pe(i, "constructor"), S = o && t;
    o && h !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = o ? "constructor" : h, this.parseClassMethod(i, a, u, S);
  } else
    this.parseClassField(i);
  return i;
};
E.isClassElementNameStart = function() {
  return this.type === p.name || this.type === p.privateId || this.type === p.num || this.type === p.string || this.type === p.bracketL || this.type.keyword;
};
E.parseClassElementName = function(t) {
  this.type === p.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), t.computed = !1, t.key = this.parsePrivateIdent()) : this.parsePropertyName(t);
};
E.parseClassMethod = function(t, e, i, s) {
  var a = t.key;
  t.kind === "constructor" ? (e && this.raise(a.start, "Constructor can't be a generator"), i && this.raise(a.start, "Constructor can't be an async method")) : t.static && Pe(t, "prototype") && this.raise(a.start, "Classes may not have a static property named prototype");
  var u = t.value = this.parseMethod(e, i, s);
  return t.kind === "get" && u.params.length !== 0 && this.raiseRecoverable(u.start, "getter should have no params"), t.kind === "set" && u.params.length !== 1 && this.raiseRecoverable(u.start, "setter should have exactly one param"), t.kind === "set" && u.params[0].type === "RestElement" && this.raiseRecoverable(u.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition");
};
E.parseClassField = function(t) {
  return Pe(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && Pe(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(p.eq) ? (this.enterScope(le | Re), t.value = this.parseMaybeAssign(), this.exitScope()) : t.value = null, this.semicolon(), this.finishNode(t, "PropertyDefinition");
};
E.parseClassStaticBlock = function(t) {
  t.body = [];
  var e = this.labels;
  for (this.labels = [], this.enterScope(Bt | Re); this.type !== p.braceR; ) {
    var i = this.parseStatement(null);
    t.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = e, this.finishNode(t, "StaticBlock");
};
E.parseClassId = function(t, e) {
  this.type === p.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, Nt, !1)) : (e === !0 && this.unexpected(), t.id = null);
};
E.parseClassSuper = function(t) {
  t.superClass = this.eat(p._extends) ? this.parseExprSubscripts(null, !1) : null;
};
E.enterClassBody = function() {
  var t = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(t), t.declared;
};
E.exitClassBody = function() {
  var t = this.privateNameStack.pop(), e = t.declared, i = t.used;
  if (this.options.checkPrivateFields)
    for (var s = this.privateNameStack.length, a = s === 0 ? null : this.privateNameStack[s - 1], u = 0; u < i.length; ++u) {
      var h = i[u];
      Yt(e, h.name) || (a ? a.used.push(h) : this.raiseRecoverable(h.start, "Private field '#" + h.name + "' must be declared in an enclosing class"));
    }
};
function Or(t, e) {
  var i = e.key.name, s = t[i], a = "true";
  return e.type === "MethodDefinition" && (e.kind === "get" || e.kind === "set") && (a = (e.static ? "s" : "i") + e.kind), s === "iget" && a === "iset" || s === "iset" && a === "iget" || s === "sget" && a === "sset" || s === "sset" && a === "sget" ? (t[i] = "true", !1) : s ? !0 : (t[i] = a, !1);
}
function Pe(t, e) {
  var i = t.computed, s = t.key;
  return !i && (s.type === "Identifier" && s.name === e || s.type === "Literal" && s.value === e);
}
E.parseExportAllDeclaration = function(t, e) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseModuleExportName(), this.checkExport(e, t.exported, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== p.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
};
E.parseExport = function(t, e) {
  if (this.next(), this.eat(p.star))
    return this.parseExportAllDeclaration(t, e);
  if (this.eat(p._default))
    return this.checkExport(e, "default", this.lastTokStart), t.declaration = this.parseExportDefaultDeclaration(), this.finishNode(t, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    t.declaration = this.parseExportDeclaration(t), t.declaration.type === "VariableDeclaration" ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id, t.declaration.id.start), t.specifiers = [], t.source = null, this.options.ecmaVersion >= 16 && (t.attributes = []);
  else {
    if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from"))
      this.type !== p.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause());
    else {
      for (var i = 0, s = t.specifiers; i < s.length; i += 1) {
        var a = s[i];
        this.checkUnreserved(a.local), this.checkLocalExport(a.local), a.local.type === "Literal" && this.raise(a.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      t.source = null, this.options.ecmaVersion >= 16 && (t.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(t, "ExportNamedDeclaration");
};
E.parseExportDeclaration = function(t) {
  return this.parseStatement(null);
};
E.parseExportDefaultDeclaration = function() {
  var t;
  if (this.type === p._function || (t = this.isAsyncFunction())) {
    var e = this.startNode();
    return this.next(), t && this.next(), this.parseFunction(e, ae | xs, !1, t);
  } else if (this.type === p._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var s = this.parseMaybeAssign();
    return this.semicolon(), s;
  }
};
E.checkExport = function(t, e, i) {
  t && (typeof e != "string" && (e = e.type === "Identifier" ? e.name : e.value), Yt(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0);
};
E.checkPatternExport = function(t, e) {
  var i = e.type;
  if (i === "Identifier")
    this.checkExport(t, e, e.start);
  else if (i === "ObjectPattern")
    for (var s = 0, a = e.properties; s < a.length; s += 1) {
      var u = a[s];
      this.checkPatternExport(t, u);
    }
  else if (i === "ArrayPattern")
    for (var h = 0, d = e.elements; h < d.length; h += 1) {
      var y = d[h];
      y && this.checkPatternExport(t, y);
    }
  else i === "Property" ? this.checkPatternExport(t, e.value) : i === "AssignmentPattern" ? this.checkPatternExport(t, e.left) : i === "RestElement" && this.checkPatternExport(t, e.argument);
};
E.checkVariableExport = function(t, e) {
  if (t)
    for (var i = 0, s = e; i < s.length; i += 1) {
      var a = s[i];
      this.checkPatternExport(t, a.id);
    }
};
E.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
E.parseExportSpecifier = function(t) {
  var e = this.startNode();
  return e.local = this.parseModuleExportName(), e.exported = this.eatContextual("as") ? this.parseModuleExportName() : e.local, this.checkExport(
    t,
    e.exported,
    e.exported.start
  ), this.finishNode(e, "ExportSpecifier");
};
E.parseExportSpecifiers = function(t) {
  var e = [], i = !0;
  for (this.expect(p.braceL); !this.eat(p.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(p.comma), this.afterTrailingComma(p.braceR))
      break;
    e.push(this.parseExportSpecifier(t));
  }
  return e;
};
E.parseImport = function(t) {
  return this.next(), this.type === p.string ? (t.specifiers = Lr, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === p.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ImportDeclaration");
};
E.parseImportSpecifier = function() {
  var t = this.startNode();
  return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, Nt), this.finishNode(t, "ImportSpecifier");
};
E.parseImportDefaultSpecifier = function() {
  var t = this.startNode();
  return t.local = this.parseIdent(), this.checkLValSimple(t.local, Nt), this.finishNode(t, "ImportDefaultSpecifier");
};
E.parseImportNamespaceSpecifier = function() {
  var t = this.startNode();
  return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, Nt), this.finishNode(t, "ImportNamespaceSpecifier");
};
E.parseImportSpecifiers = function() {
  var t = [], e = !0;
  if (this.type === p.name && (t.push(this.parseImportDefaultSpecifier()), !this.eat(p.comma)))
    return t;
  if (this.type === p.star)
    return t.push(this.parseImportNamespaceSpecifier()), t;
  for (this.expect(p.braceL); !this.eat(p.braceR); ) {
    if (e)
      e = !1;
    else if (this.expect(p.comma), this.afterTrailingComma(p.braceR))
      break;
    t.push(this.parseImportSpecifier());
  }
  return t;
};
E.parseWithClause = function() {
  var t = [];
  if (!this.eat(p._with))
    return t;
  this.expect(p.braceL);
  for (var e = {}, i = !0; !this.eat(p.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(p.comma), this.afterTrailingComma(p.braceR))
      break;
    var s = this.parseImportAttribute(), a = s.key.type === "Identifier" ? s.key.name : s.key.value;
    Yt(e, a) && this.raiseRecoverable(s.key.start, "Duplicate attribute key '" + a + "'"), e[a] = !0, t.push(s);
  }
  return t;
};
E.parseImportAttribute = function() {
  var t = this.startNode();
  return t.key = this.type === p.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(p.colon), this.type !== p.string && this.unexpected(), t.value = this.parseExprAtom(), this.finishNode(t, "ImportAttribute");
};
E.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === p.string) {
    var t = this.parseLiteral(this.value);
    return Ar.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t;
  }
  return this.parseIdent(!0);
};
E.adaptDirectivePrologue = function(t) {
  for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e)
    t[e].directive = t[e].expression.raw.slice(1, -1);
};
E.isDirectiveCandidate = function(t) {
  return this.options.ecmaVersion >= 5 && t.type === "ExpressionStatement" && t.expression.type === "Literal" && typeof t.expression.value == "string" && // Reject parenthesized strings.
  (this.input[t.start] === '"' || this.input[t.start] === "'");
};
var St = G.prototype;
St.toAssignable = function(t, e, i) {
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
        t.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);
        for (var s = 0, a = t.properties; s < a.length; s += 1) {
          var u = a[s];
          this.toAssignable(u, e), u.type === "RestElement" && (u.argument.type === "ArrayPattern" || u.argument.type === "ObjectPattern") && this.raise(u.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        t.kind !== "init" && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
        break;
      case "ArrayExpression":
        t.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(t.elements, e);
        break;
      case "SpreadElement":
        t.type = "RestElement", this.toAssignable(t.argument, e), t.argument.type === "AssignmentPattern" && this.raise(t.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        t.operator !== "=" && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(t.expression, e, i);
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
  else i && this.checkPatternErrors(i, !0);
  return t;
};
St.toAssignableList = function(t, e) {
  for (var i = t.length, s = 0; s < i; s++) {
    var a = t[s];
    a && this.toAssignable(a, e);
  }
  if (i) {
    var u = t[i - 1];
    this.options.ecmaVersion === 6 && e && u && u.type === "RestElement" && u.argument.type !== "Identifier" && this.unexpected(u.argument.start);
  }
  return t;
};
St.parseSpread = function(t) {
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement");
};
St.parseRestBinding = function() {
  var t = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== p.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
};
St.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case p.bracketL:
        var t = this.startNode();
        return this.next(), t.elements = this.parseBindingList(p.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
      case p.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
St.parseBindingList = function(t, e, i, s) {
  for (var a = [], u = !0; !this.eat(t); )
    if (u ? u = !1 : this.expect(p.comma), e && this.type === p.comma)
      a.push(null);
    else {
      if (i && this.afterTrailingComma(t))
        break;
      if (this.type === p.ellipsis) {
        var h = this.parseRestBinding();
        this.parseBindingListItem(h), a.push(h), this.type === p.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
        break;
      } else
        a.push(this.parseAssignableListItem(s));
    }
  return a;
};
St.parseAssignableListItem = function(t) {
  var e = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(e), e;
};
St.parseBindingListItem = function(t) {
  return t;
};
St.parseMaybeDefault = function(t, e, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(p.eq))
    return i;
  var s = this.startNodeAt(t, e);
  return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");
};
St.checkLValSimple = function(t, e, i) {
  e === void 0 && (e = _e);
  var s = e !== _e;
  switch (t.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (s ? "Binding " : "Assigning to ") + t.name + " in strict mode"), s && (e === Nt && t.name === "let" && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), i && (Yt(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), e !== vs && this.declareName(t.name, e, t.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      s && this.raiseRecoverable(t.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return s && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, i);
    default:
      this.raise(t.start, (s ? "Binding" : "Assigning to") + " rvalue");
  }
};
St.checkLValPattern = function(t, e, i) {
  switch (e === void 0 && (e = _e), t.type) {
    case "ObjectPattern":
      for (var s = 0, a = t.properties; s < a.length; s += 1) {
        var u = a[s];
        this.checkLValInnerPattern(u, e, i);
      }
      break;
    case "ArrayPattern":
      for (var h = 0, d = t.elements; h < d.length; h += 1) {
        var y = d[h];
        y && this.checkLValInnerPattern(y, e, i);
      }
      break;
    default:
      this.checkLValSimple(t, e, i);
  }
};
St.checkLValInnerPattern = function(t, e, i) {
  switch (e === void 0 && (e = _e), t.type) {
    case "Property":
      this.checkLValInnerPattern(t.value, e, i);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(t.left, e, i);
      break;
    case "RestElement":
      this.checkLValPattern(t.argument, e, i);
      break;
    default:
      this.checkLValPattern(t, e, i);
  }
};
var ut = function(e, i, s, a, u) {
  this.token = e, this.isExpr = !!i, this.preserveSpace = !!s, this.override = a, this.generator = !!u;
}, q = {
  b_stat: new ut("{", !1),
  b_expr: new ut("{", !0),
  b_tmpl: new ut("${", !1),
  p_stat: new ut("(", !1),
  p_expr: new ut("(", !0),
  q_tmpl: new ut("`", !0, !0, function(t) {
    return t.tryReadTemplateToken();
  }),
  f_stat: new ut("function", !1),
  f_expr: new ut("function", !0),
  f_expr_gen: new ut("function", !0, !1, null, !0),
  f_gen: new ut("function", !1, !1, null, !0)
}, te = G.prototype;
te.initialContext = function() {
  return [q.b_stat];
};
te.curContext = function() {
  return this.context[this.context.length - 1];
};
te.braceIsBlock = function(t) {
  var e = this.curContext();
  return e === q.f_expr || e === q.f_stat ? !0 : t === p.colon && (e === q.b_stat || e === q.b_expr) ? !e.isExpr : t === p._return || t === p.name && this.exprAllowed ? ct.test(this.input.slice(this.lastTokEnd, this.start)) : t === p._else || t === p.semi || t === p.eof || t === p.parenR || t === p.arrow ? !0 : t === p.braceL ? e === q.b_stat : t === p._var || t === p._const || t === p.name ? !1 : !this.exprAllowed;
};
te.inGeneratorContext = function() {
  for (var t = this.context.length - 1; t >= 1; t--) {
    var e = this.context[t];
    if (e.token === "function")
      return e.generator;
  }
  return !1;
};
te.updateContext = function(t) {
  var e, i = this.type;
  i.keyword && t === p.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr;
};
te.overrideContext = function(t) {
  this.curContext() !== t && (this.context[this.context.length - 1] = t);
};
p.parenR.updateContext = p.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var t = this.context.pop();
  t === q.b_stat && this.curContext().token === "function" && (t = this.context.pop()), this.exprAllowed = !t.isExpr;
};
p.braceL.updateContext = function(t) {
  this.context.push(this.braceIsBlock(t) ? q.b_stat : q.b_expr), this.exprAllowed = !0;
};
p.dollarBraceL.updateContext = function() {
  this.context.push(q.b_tmpl), this.exprAllowed = !0;
};
p.parenL.updateContext = function(t) {
  var e = t === p._if || t === p._for || t === p._with || t === p._while;
  this.context.push(e ? q.p_stat : q.p_expr), this.exprAllowed = !0;
};
p.incDec.updateContext = function() {
};
p._function.updateContext = p._class.updateContext = function(t) {
  t.beforeExpr && t !== p._else && !(t === p.semi && this.curContext() !== q.p_stat) && !(t === p._return && ct.test(this.input.slice(this.lastTokEnd, this.start))) && !((t === p.colon || t === p.braceL) && this.curContext() === q.b_stat) ? this.context.push(q.f_expr) : this.context.push(q.f_stat), this.exprAllowed = !1;
};
p.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
p.backQuote.updateContext = function() {
  this.curContext() === q.q_tmpl ? this.context.pop() : this.context.push(q.q_tmpl), this.exprAllowed = !1;
};
p.star.updateContext = function(t) {
  if (t === p._function) {
    var e = this.context.length - 1;
    this.context[e] === q.f_expr ? this.context[e] = q.f_expr_gen : this.context[e] = q.f_gen;
  }
  this.exprAllowed = !0;
};
p.name.updateContext = function(t) {
  var e = !1;
  this.options.ecmaVersion >= 6 && t !== p.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e;
};
var M = G.prototype;
M.checkPropClash = function(t, e, i) {
  if (!(this.options.ecmaVersion >= 9 && t.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
    var s = t.key, a;
    switch (s.type) {
      case "Identifier":
        a = s.name;
        break;
      case "Literal":
        a = String(s.value);
        break;
      default:
        return;
    }
    var u = t.kind;
    if (this.options.ecmaVersion >= 6) {
      a === "__proto__" && u === "init" && (e.proto && (i ? i.doubleProto < 0 && (i.doubleProto = s.start) : this.raiseRecoverable(s.start, "Redefinition of __proto__ property")), e.proto = !0);
      return;
    }
    a = "$" + a;
    var h = e[a];
    if (h) {
      var d;
      u === "init" ? d = this.strict && h.init || h.get || h.set : d = h.init || h[u], d && this.raiseRecoverable(s.start, "Redefinition of property");
    } else
      h = e[a] = {
        init: !1,
        get: !1,
        set: !1
      };
    h[u] = !0;
  }
};
M.parseExpression = function(t, e) {
  var i = this.start, s = this.startLoc, a = this.parseMaybeAssign(t, e);
  if (this.type === p.comma) {
    var u = this.startNodeAt(i, s);
    for (u.expressions = [a]; this.eat(p.comma); )
      u.expressions.push(this.parseMaybeAssign(t, e));
    return this.finishNode(u, "SequenceExpression");
  }
  return a;
};
M.parseMaybeAssign = function(t, e, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(t);
    this.exprAllowed = !1;
  }
  var s = !1, a = -1, u = -1, h = -1;
  e ? (a = e.parenthesizedAssign, u = e.trailingComma, h = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new De(), s = !0);
  var d = this.start, y = this.startLoc;
  (this.type === p.parenL || this.type === p.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = t === "await");
  var o = this.parseMaybeConditional(t, e);
  if (i && (o = i.call(this, o, d, y)), this.type.isAssign) {
    var S = this.startNodeAt(d, y);
    return S.operator = this.value, this.type === p.eq && (o = this.toAssignable(o, !1, e)), s || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= o.start && (e.shorthandAssign = -1), this.type === p.eq ? this.checkLValPattern(o) : this.checkLValSimple(o), S.left = o, this.next(), S.right = this.parseMaybeAssign(t), h > -1 && (e.doubleProto = h), this.finishNode(S, "AssignmentExpression");
  } else
    s && this.checkExpressionErrors(e, !0);
  return a > -1 && (e.parenthesizedAssign = a), u > -1 && (e.trailingComma = u), o;
};
M.parseMaybeConditional = function(t, e) {
  var i = this.start, s = this.startLoc, a = this.parseExprOps(t, e);
  if (this.checkExpressionErrors(e))
    return a;
  if (this.eat(p.question)) {
    var u = this.startNodeAt(i, s);
    return u.test = a, u.consequent = this.parseMaybeAssign(), this.expect(p.colon), u.alternate = this.parseMaybeAssign(t), this.finishNode(u, "ConditionalExpression");
  }
  return a;
};
M.parseExprOps = function(t, e) {
  var i = this.start, s = this.startLoc, a = this.parseMaybeUnary(e, !1, !1, t);
  return this.checkExpressionErrors(e) || a.start === i && a.type === "ArrowFunctionExpression" ? a : this.parseExprOp(a, i, s, -1, t);
};
M.parseExprOp = function(t, e, i, s, a) {
  var u = this.type.binop;
  if (u != null && (!a || this.type !== p._in) && u > s) {
    var h = this.type === p.logicalOR || this.type === p.logicalAND, d = this.type === p.coalesce;
    d && (u = p.logicalAND.binop);
    var y = this.value;
    this.next();
    var o = this.start, S = this.startLoc, P = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, a), o, S, u, a), R = this.buildBinary(e, i, t, P, y, h || d);
    return (h && this.type === p.coalesce || d && (this.type === p.logicalOR || this.type === p.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(R, e, i, s, a);
  }
  return t;
};
M.buildBinary = function(t, e, i, s, a, u) {
  s.type === "PrivateIdentifier" && this.raise(s.start, "Private identifier can only be left side of binary expression");
  var h = this.startNodeAt(t, e);
  return h.left = i, h.operator = a, h.right = s, this.finishNode(h, u ? "LogicalExpression" : "BinaryExpression");
};
M.parseMaybeUnary = function(t, e, i, s) {
  var a = this.start, u = this.startLoc, h;
  if (this.isContextual("await") && this.canAwait)
    h = this.parseAwait(s), e = !0;
  else if (this.type.prefix) {
    var d = this.startNode(), y = this.type === p.incDec;
    d.operator = this.value, d.prefix = !0, this.next(), d.argument = this.parseMaybeUnary(null, !0, y, s), this.checkExpressionErrors(t, !0), y ? this.checkLValSimple(d.argument) : this.strict && d.operator === "delete" && gs(d.argument) ? this.raiseRecoverable(d.start, "Deleting local variable in strict mode") : d.operator === "delete" && ei(d.argument) ? this.raiseRecoverable(d.start, "Private fields can not be deleted") : e = !0, h = this.finishNode(d, y ? "UpdateExpression" : "UnaryExpression");
  } else if (!e && this.type === p.privateId)
    (s || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), h = this.parsePrivateIdent(), this.type !== p._in && this.unexpected();
  else {
    if (h = this.parseExprSubscripts(t, s), this.checkExpressionErrors(t))
      return h;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var o = this.startNodeAt(a, u);
      o.operator = this.value, o.prefix = !1, o.argument = h, this.checkLValSimple(h), this.next(), h = this.finishNode(o, "UpdateExpression");
    }
  }
  if (!i && this.eat(p.starstar))
    if (e)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(a, u, h, this.parseMaybeUnary(null, !1, !1, s), "**", !1);
  else
    return h;
};
function gs(t) {
  return t.type === "Identifier" || t.type === "ParenthesizedExpression" && gs(t.expression);
}
function ei(t) {
  return t.type === "MemberExpression" && t.property.type === "PrivateIdentifier" || t.type === "ChainExpression" && ei(t.expression) || t.type === "ParenthesizedExpression" && ei(t.expression);
}
M.parseExprSubscripts = function(t, e) {
  var i = this.start, s = this.startLoc, a = this.parseExprAtom(t, e);
  if (a.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return a;
  var u = this.parseSubscripts(a, i, s, !1, e);
  return t && u.type === "MemberExpression" && (t.parenthesizedAssign >= u.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= u.start && (t.parenthesizedBind = -1), t.trailingComma >= u.start && (t.trailingComma = -1)), u;
};
M.parseSubscripts = function(t, e, i, s, a) {
  for (var u = this.options.ecmaVersion >= 8 && t.type === "Identifier" && t.name === "async" && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.potentialArrowAt === t.start, h = !1; ; ) {
    var d = this.parseSubscript(t, e, i, s, u, h, a);
    if (d.optional && (h = !0), d === t || d.type === "ArrowFunctionExpression") {
      if (h) {
        var y = this.startNodeAt(e, i);
        y.expression = d, d = this.finishNode(y, "ChainExpression");
      }
      return d;
    }
    t = d;
  }
};
M.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(p.arrow);
};
M.parseSubscriptAsyncArrow = function(t, e, i, s) {
  return this.parseArrowExpression(this.startNodeAt(t, e), i, !0, s);
};
M.parseSubscript = function(t, e, i, s, a, u, h) {
  var d = this.options.ecmaVersion >= 11, y = d && this.eat(p.questionDot);
  s && y && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var o = this.eat(p.bracketL);
  if (o || y && this.type !== p.parenL && this.type !== p.backQuote || this.eat(p.dot)) {
    var S = this.startNodeAt(e, i);
    S.object = t, o ? (S.property = this.parseExpression(), this.expect(p.bracketR)) : this.type === p.privateId && t.type !== "Super" ? S.property = this.parsePrivateIdent() : S.property = this.parseIdent(this.options.allowReserved !== "never"), S.computed = !!o, d && (S.optional = y), t = this.finishNode(S, "MemberExpression");
  } else if (!s && this.eat(p.parenL)) {
    var P = new De(), R = this.yieldPos, $ = this.awaitPos, tt = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var at = this.parseExprList(p.parenR, this.options.ecmaVersion >= 8, !1, P);
    if (a && !y && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = R, this.awaitPos = $, this.awaitIdentPos = tt, this.parseSubscriptAsyncArrow(e, i, at, h);
    this.checkExpressionErrors(P, !0), this.yieldPos = R || this.yieldPos, this.awaitPos = $ || this.awaitPos, this.awaitIdentPos = tt || this.awaitIdentPos;
    var O = this.startNodeAt(e, i);
    O.callee = t, O.arguments = at, d && (O.optional = y), t = this.finishNode(O, "CallExpression");
  } else if (this.type === p.backQuote) {
    (y || u) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var rt = this.startNodeAt(e, i);
    rt.tag = t, rt.quasi = this.parseTemplate({ isTagged: !0 }), t = this.finishNode(rt, "TaggedTemplateExpression");
  }
  return t;
};
M.parseExprAtom = function(t, e, i) {
  this.type === p.slash && this.readRegexp();
  var s, a = this.potentialArrowAt === this.start;
  switch (this.type) {
    case p._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), s = this.startNode(), this.next(), this.type === p.parenL && !this.allowDirectSuper && this.raise(s.start, "super() call outside constructor of a subclass"), this.type !== p.dot && this.type !== p.bracketL && this.type !== p.parenL && this.unexpected(), this.finishNode(s, "Super");
    case p._this:
      return s = this.startNode(), this.next(), this.finishNode(s, "ThisExpression");
    case p.name:
      var u = this.start, h = this.startLoc, d = this.containsEsc, y = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !d && y.name === "async" && !this.canInsertSemicolon() && this.eat(p._function))
        return this.overrideContext(q.f_expr), this.parseFunction(this.startNodeAt(u, h), 0, !1, !0, e);
      if (a && !this.canInsertSemicolon()) {
        if (this.eat(p.arrow))
          return this.parseArrowExpression(this.startNodeAt(u, h), [y], !1, e);
        if (this.options.ecmaVersion >= 8 && y.name === "async" && this.type === p.name && !d && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return y = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(p.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(u, h), [y], !0, e);
      }
      return y;
    case p.regexp:
      var o = this.value;
      return s = this.parseLiteral(o.value), s.regex = { pattern: o.pattern, flags: o.flags }, s;
    case p.num:
    case p.string:
      return this.parseLiteral(this.value);
    case p._null:
    case p._true:
    case p._false:
      return s = this.startNode(), s.value = this.type === p._null ? null : this.type === p._true, s.raw = this.type.keyword, this.next(), this.finishNode(s, "Literal");
    case p.parenL:
      var S = this.start, P = this.parseParenAndDistinguishExpression(a, e);
      return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(P) && (t.parenthesizedAssign = S), t.parenthesizedBind < 0 && (t.parenthesizedBind = S)), P;
    case p.bracketL:
      return s = this.startNode(), this.next(), s.elements = this.parseExprList(p.bracketR, !0, !0, t), this.finishNode(s, "ArrayExpression");
    case p.braceL:
      return this.overrideContext(q.b_expr), this.parseObj(!1, t);
    case p._function:
      return s = this.startNode(), this.next(), this.parseFunction(s, 0);
    case p._class:
      return this.parseClass(this.startNode(), !1);
    case p._new:
      return this.parseNew();
    case p.backQuote:
      return this.parseTemplate();
    case p._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
M.parseExprAtomDefault = function() {
  this.unexpected();
};
M.parseExprImport = function(t) {
  var e = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === p.parenL && !t)
    return this.parseDynamicImport(e);
  if (this.type === p.dot) {
    var i = this.startNodeAt(e.start, e.loc && e.loc.start);
    return i.name = "import", e.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(e);
  } else
    this.unexpected();
};
M.parseDynamicImport = function(t) {
  if (this.next(), t.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(p.parenR) ? t.options = null : (this.expect(p.comma), this.afterTrailingComma(p.parenR) ? t.options = null : (t.options = this.parseMaybeAssign(), this.eat(p.parenR) || (this.expect(p.comma), this.afterTrailingComma(p.parenR) || this.unexpected())));
  else if (!this.eat(p.parenR)) {
    var e = this.start;
    this.eat(p.comma) && this.eat(p.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e);
  }
  return this.finishNode(t, "ImportExpression");
};
M.parseImportMeta = function(t) {
  this.next();
  var e = this.containsEsc;
  return t.property = this.parseIdent(!0), t.property.name !== "meta" && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty");
};
M.parseLiteral = function(t) {
  var e = this.startNode();
  return e.value = t, e.raw = this.input.slice(this.start, this.end), e.raw.charCodeAt(e.raw.length - 1) === 110 && (e.bigint = e.value != null ? e.value.toString() : e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal");
};
M.parseParenExpression = function() {
  this.expect(p.parenL);
  var t = this.parseExpression();
  return this.expect(p.parenR), t;
};
M.shouldParseArrow = function(t) {
  return !this.canInsertSemicolon();
};
M.parseParenAndDistinguishExpression = function(t, e) {
  var i = this.start, s = this.startLoc, a, u = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var h = this.start, d = this.startLoc, y = [], o = !0, S = !1, P = new De(), R = this.yieldPos, $ = this.awaitPos, tt;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== p.parenR; )
      if (o ? o = !1 : this.expect(p.comma), u && this.afterTrailingComma(p.parenR, !0)) {
        S = !0;
        break;
      } else if (this.type === p.ellipsis) {
        tt = this.start, y.push(this.parseParenItem(this.parseRestBinding())), this.type === p.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        y.push(this.parseMaybeAssign(!1, P, this.parseParenItem));
    var at = this.lastTokEnd, O = this.lastTokEndLoc;
    if (this.expect(p.parenR), t && this.shouldParseArrow(y) && this.eat(p.arrow))
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = R, this.awaitPos = $, this.parseParenArrowList(i, s, y, e);
    (!y.length || S) && this.unexpected(this.lastTokStart), tt && this.unexpected(tt), this.checkExpressionErrors(P, !0), this.yieldPos = R || this.yieldPos, this.awaitPos = $ || this.awaitPos, y.length > 1 ? (a = this.startNodeAt(h, d), a.expressions = y, this.finishNodeAt(a, "SequenceExpression", at, O)) : a = y[0];
  } else
    a = this.parseParenExpression();
  if (this.options.preserveParens) {
    var rt = this.startNodeAt(i, s);
    return rt.expression = a, this.finishNode(rt, "ParenthesizedExpression");
  } else
    return a;
};
M.parseParenItem = function(t) {
  return t;
};
M.parseParenArrowList = function(t, e, i, s) {
  return this.parseArrowExpression(this.startNodeAt(t, e), i, !1, s);
};
var Rr = [];
M.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var t = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === p.dot) {
    var e = this.startNodeAt(t.start, t.loc && t.loc.start);
    e.name = "new", t.meta = this.finishNode(e, "Identifier"), this.next();
    var i = this.containsEsc;
    return t.property = this.parseIdent(!0), t.property.name !== "target" && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty");
  }
  var s = this.start, a = this.startLoc;
  return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), s, a, !0, !1), this.eat(p.parenL) ? t.arguments = this.parseExprList(p.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = Rr, this.finishNode(t, "NewExpression");
};
M.parseTemplateElement = function(t) {
  var e = t.isTagged, i = this.startNode();
  return this.type === p.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : i.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), i.tail = this.type === p.backQuote, this.finishNode(i, "TemplateElement");
};
M.parseTemplate = function(t) {
  t === void 0 && (t = {});
  var e = t.isTagged;
  e === void 0 && (e = !1);
  var i = this.startNode();
  this.next(), i.expressions = [];
  var s = this.parseTemplateElement({ isTagged: e });
  for (i.quasis = [s]; !s.tail; )
    this.type === p.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(p.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(p.braceR), i.quasis.push(s = this.parseTemplateElement({ isTagged: e }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
M.isAsyncProp = function(t) {
  return !t.computed && t.key.type === "Identifier" && t.key.name === "async" && (this.type === p.name || this.type === p.num || this.type === p.string || this.type === p.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === p.star) && !ct.test(this.input.slice(this.lastTokEnd, this.start));
};
M.parseObj = function(t, e) {
  var i = this.startNode(), s = !0, a = {};
  for (i.properties = [], this.next(); !this.eat(p.braceR); ) {
    if (s)
      s = !1;
    else if (this.expect(p.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(p.braceR))
      break;
    var u = this.parseProperty(t, e);
    t || this.checkPropClash(u, a, e), i.properties.push(u);
  }
  return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression");
};
M.parseProperty = function(t, e) {
  var i = this.startNode(), s, a, u, h;
  if (this.options.ecmaVersion >= 9 && this.eat(p.ellipsis))
    return t ? (i.argument = this.parseIdent(!1), this.type === p.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, e), this.type === p.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (t || e) && (u = this.start, h = this.startLoc), t || (s = this.eat(p.star)));
  var d = this.containsEsc;
  return this.parsePropertyName(i), !t && !d && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(i) ? (a = !0, s = this.options.ecmaVersion >= 9 && this.eat(p.star), this.parsePropertyName(i)) : a = !1, this.parsePropertyValue(i, t, s, a, u, h, e, d), this.finishNode(i, "Property");
};
M.parseGetterSetter = function(t) {
  var e = t.key.name;
  this.parsePropertyName(t), t.value = this.parseMethod(!1), t.kind = e;
  var i = t.kind === "get" ? 0 : 1;
  if (t.value.params.length !== i) {
    var s = t.value.start;
    t.kind === "get" ? this.raiseRecoverable(s, "getter should have no params") : this.raiseRecoverable(s, "setter should have exactly one param");
  } else
    t.kind === "set" && t.value.params[0].type === "RestElement" && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params");
};
M.parsePropertyValue = function(t, e, i, s, a, u, h, d) {
  (i || s) && this.type === p.colon && this.unexpected(), this.eat(p.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, h), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === p.parenL ? (e && this.unexpected(), t.method = !0, t.value = this.parseMethod(i, s), t.kind = "init") : !e && !d && this.options.ecmaVersion >= 5 && !t.computed && t.key.type === "Identifier" && (t.key.name === "get" || t.key.name === "set") && this.type !== p.comma && this.type !== p.braceR && this.type !== p.eq ? ((i || s) && this.unexpected(), this.parseGetterSetter(t)) : this.options.ecmaVersion >= 6 && !t.computed && t.key.type === "Identifier" ? ((i || s) && this.unexpected(), this.checkUnreserved(t.key), t.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = a), e ? t.value = this.parseMaybeDefault(a, u, this.copyNode(t.key)) : this.type === p.eq && h ? (h.shorthandAssign < 0 && (h.shorthandAssign = this.start), t.value = this.parseMaybeDefault(a, u, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.kind = "init", t.shorthand = !0) : this.unexpected();
};
M.parsePropertyName = function(t) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(p.bracketL))
      return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(p.bracketR), t.key;
    t.computed = !1;
  }
  return t.key = this.type === p.num || this.type === p.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
M.initFunction = function(t) {
  t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1);
};
M.parseMethod = function(t, e, i) {
  var s = this.startNode(), a = this.yieldPos, u = this.awaitPos, h = this.awaitIdentPos;
  return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = t), this.options.ecmaVersion >= 8 && (s.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(pi(e, s.generator) | Re | (i ? ds : 0)), this.expect(p.parenL), s.params = this.parseBindingList(p.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0, !1), this.yieldPos = a, this.awaitPos = u, this.awaitIdentPos = h, this.finishNode(s, "FunctionExpression");
};
M.parseArrowExpression = function(t, e, i, s) {
  var a = this.yieldPos, u = this.awaitPos, h = this.awaitIdentPos;
  return this.enterScope(pi(i, !1) | hi), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, s), this.yieldPos = a, this.awaitPos = u, this.awaitIdentPos = h, this.finishNode(t, "ArrowFunctionExpression");
};
M.parseFunctionBody = function(t, e, i, s) {
  var a = e && this.type !== p.braceL, u = this.strict, h = !1;
  if (a)
    t.body = this.parseMaybeAssign(s), t.expression = !0, this.checkParams(t, !1);
  else {
    var d = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
    (!u || d) && (h = this.strictDirective(this.end), h && d && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var y = this.labels;
    this.labels = [], h && (this.strict = !0), this.checkParams(t, !u && !h && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, vs), t.body = this.parseBlock(!1, void 0, h && !u), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = y;
  }
  this.exitScope();
};
M.isSimpleParamList = function(t) {
  for (var e = 0, i = t; e < i.length; e += 1) {
    var s = i[e];
    if (s.type !== "Identifier")
      return !1;
  }
  return !0;
};
M.checkParams = function(t, e) {
  for (var i = /* @__PURE__ */ Object.create(null), s = 0, a = t.params; s < a.length; s += 1) {
    var u = a[s];
    this.checkLValInnerPattern(u, li, e ? null : i);
  }
};
M.parseExprList = function(t, e, i, s) {
  for (var a = [], u = !0; !this.eat(t); ) {
    if (u)
      u = !1;
    else if (this.expect(p.comma), e && this.afterTrailingComma(t))
      break;
    var h = void 0;
    i && this.type === p.comma ? h = null : this.type === p.ellipsis ? (h = this.parseSpread(s), s && this.type === p.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : h = this.parseMaybeAssign(!1, s), a.push(h);
  }
  return a;
};
M.checkUnreserved = function(t) {
  var e = t.start, i = t.end, s = t.name;
  if (this.inGenerator && s === "yield" && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && s === "await" && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & Me) && s === "arguments" && this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (s === "arguments" || s === "await") && this.raise(e, "Cannot use " + s + " in class static initialization block"), this.keywords.test(s) && this.raise(e, "Unexpected keyword '" + s + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(e, i).indexOf("\\") !== -1)) {
    var a = this.strict ? this.reservedWordsStrict : this.reservedWords;
    a.test(s) && (!this.inAsync && s === "await" && this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + s + "' is reserved"));
  }
};
M.parseIdent = function(t) {
  var e = this.parseIdentNode();
  return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), e.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = e.start)), e;
};
M.parseIdentNode = function() {
  var t = this.startNode();
  return this.type === p.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, (t.name === "class" || t.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = p.name) : this.unexpected(), t;
};
M.parsePrivateIdent = function() {
  var t = this.startNode();
  return this.type === p.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t;
};
M.parseYield = function(t) {
  this.yieldPos || (this.yieldPos = this.start);
  var e = this.startNode();
  return this.next(), this.type === p.semi || this.canInsertSemicolon() || this.type !== p.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(p.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression");
};
M.parseAwait = function(t) {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression");
};
var Ae = G.prototype;
Ae.raise = function(t, e) {
  var i = ui(this.input, t);
  e += " (" + i.line + ":" + i.column + ")", this.sourceFile && (e += " in " + this.sourceFile);
  var s = new SyntaxError(e);
  throw s.pos = t, s.loc = i, s.raisedAt = this.pos, s;
};
Ae.raiseRecoverable = Ae.raise;
Ae.curPosition = function() {
  if (this.options.locations)
    return new Jt(this.curLine, this.pos - this.lineStart);
};
var zt = G.prototype, Mr = function(e) {
  this.flags = e, this.var = [], this.lexical = [], this.functions = [];
};
zt.enterScope = function(t) {
  this.scopeStack.push(new Mr(t));
};
zt.exitScope = function() {
  this.scopeStack.pop();
};
zt.treatFunctionsAsVarInScope = function(t) {
  return t.flags & Qt || !this.inModule && t.flags & ue;
};
zt.declareName = function(t, e, i) {
  var s = !1;
  if (e === Nt) {
    var a = this.currentScope();
    s = a.lexical.indexOf(t) > -1 || a.functions.indexOf(t) > -1 || a.var.indexOf(t) > -1, a.lexical.push(t), this.inModule && a.flags & ue && delete this.undefinedExports[t];
  } else if (e === ys) {
    var u = this.currentScope();
    u.lexical.push(t);
  } else if (e === ms) {
    var h = this.currentScope();
    this.treatFunctionsAsVar ? s = h.lexical.indexOf(t) > -1 : s = h.lexical.indexOf(t) > -1 || h.var.indexOf(t) > -1, h.functions.push(t);
  } else
    for (var d = this.scopeStack.length - 1; d >= 0; --d) {
      var y = this.scopeStack[d];
      if (y.lexical.indexOf(t) > -1 && !(y.flags & fs && y.lexical[0] === t) || !this.treatFunctionsAsVarInScope(y) && y.functions.indexOf(t) > -1) {
        s = !0;
        break;
      }
      if (y.var.push(t), this.inModule && y.flags & ue && delete this.undefinedExports[t], y.flags & Me)
        break;
    }
  s && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared");
};
zt.checkLocalExport = function(t) {
  this.scopeStack[0].lexical.indexOf(t.name) === -1 && this.scopeStack[0].var.indexOf(t.name) === -1 && (this.undefinedExports[t.name] = t);
};
zt.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
zt.currentVarScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (Me | le | Bt))
      return e;
  }
};
zt.currentThisScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (Me | le | Bt) && !(e.flags & hi))
      return e;
  }
};
var fe = function(e, i, s) {
  this.type = "", this.start = i, this.end = 0, e.options.locations && (this.loc = new pe(e, s)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [i, 0]);
}, de = G.prototype;
de.startNode = function() {
  return new fe(this, this.start, this.startLoc);
};
de.startNodeAt = function(t, e) {
  return new fe(this, t, e);
};
function bs(t, e, i, s) {
  return t.type = e, t.end = i, this.options.locations && (t.loc.end = s), this.options.ranges && (t.range[1] = i), t;
}
de.finishNode = function(t, e) {
  return bs.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
};
de.finishNodeAt = function(t, e, i, s) {
  return bs.call(this, t, e, i, s);
};
de.copyNode = function(t) {
  var e = new fe(this, t.start, this.startLoc);
  for (var i in t)
    e[i] = t[i];
  return e;
};
var Dr = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", ks = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Ss = ks + " Extended_Pictographic", ws = Ss, Ts = ws + " EBase EComp EMod EPres ExtPict", _s = Ts, zr = _s, Vr = {
  9: ks,
  10: Ss,
  11: ws,
  12: Ts,
  13: _s,
  14: zr
}, Fr = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", jr = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Fr
}, Ni = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Ps = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", As = Ps + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Cs = As + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Es = Cs + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Is = Es + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Br = Is + " " + Dr, $r = {
  9: Ps,
  10: As,
  11: Cs,
  12: Es,
  13: Is,
  14: Br
}, Ns = {};
function Ur(t) {
  var e = Ns[t] = {
    binary: Rt(Vr[t] + " " + Ni),
    binaryOfStrings: Rt(jr[t]),
    nonBinary: {
      General_Category: Rt(Ni),
      Script: Rt($r[t])
    }
  };
  e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions;
}
for (var Ke = 0, Li = [9, 10, 11, 12, 13, 14]; Ke < Li.length; Ke += 1) {
  var Zr = Li[Ke];
  Ur(Zr);
}
var A = G.prototype, Ce = function(e, i) {
  this.parent = e, this.base = i || this;
};
Ce.prototype.separatedFrom = function(e) {
  for (var i = this; i; i = i.parent)
    for (var s = e; s; s = s.parent)
      if (i.base === s.base && i !== s)
        return !0;
  return !1;
};
Ce.prototype.sibling = function() {
  return new Ce(this.parent, this.base);
};
var Pt = function(e) {
  this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : "") + (e.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Ns[e.options.ecmaVersion >= 14 ? 14 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
Pt.prototype.reset = function(e, i, s) {
  var a = s.indexOf("v") !== -1, u = s.indexOf("u") !== -1;
  this.start = e | 0, this.source = i + "", this.flags = s, a && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = u && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = u && this.parser.options.ecmaVersion >= 9);
};
Pt.prototype.raise = function(e) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
};
Pt.prototype.at = function(e, i) {
  i === void 0 && (i = !1);
  var s = this.source, a = s.length;
  if (e >= a)
    return -1;
  var u = s.charCodeAt(e);
  if (!(i || this.switchU) || u <= 55295 || u >= 57344 || e + 1 >= a)
    return u;
  var h = s.charCodeAt(e + 1);
  return h >= 56320 && h <= 57343 ? (u << 10) + h - 56613888 : u;
};
Pt.prototype.nextIndex = function(e, i) {
  i === void 0 && (i = !1);
  var s = this.source, a = s.length;
  if (e >= a)
    return a;
  var u = s.charCodeAt(e), h;
  return !(i || this.switchU) || u <= 55295 || u >= 57344 || e + 1 >= a || (h = s.charCodeAt(e + 1)) < 56320 || h > 57343 ? e + 1 : e + 2;
};
Pt.prototype.current = function(e) {
  return e === void 0 && (e = !1), this.at(this.pos, e);
};
Pt.prototype.lookahead = function(e) {
  return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
};
Pt.prototype.advance = function(e) {
  e === void 0 && (e = !1), this.pos = this.nextIndex(this.pos, e);
};
Pt.prototype.eat = function(e, i) {
  return i === void 0 && (i = !1), this.current(i) === e ? (this.advance(i), !0) : !1;
};
Pt.prototype.eatChars = function(e, i) {
  i === void 0 && (i = !1);
  for (var s = this.pos, a = 0, u = e; a < u.length; a += 1) {
    var h = u[a], d = this.at(s, i);
    if (d === -1 || d !== h)
      return !1;
    s = this.nextIndex(s, i);
  }
  return this.pos = s, !0;
};
A.validateRegExpFlags = function(t) {
  for (var e = t.validFlags, i = t.flags, s = !1, a = !1, u = 0; u < i.length; u++) {
    var h = i.charAt(u);
    e.indexOf(h) === -1 && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(h, u + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), h === "u" && (s = !0), h === "v" && (a = !0);
  }
  this.options.ecmaVersion >= 15 && s && a && this.raise(t.start, "Invalid regular expression flag");
};
function qr(t) {
  for (var e in t)
    return !0;
  return !1;
}
A.validateRegExpPattern = function(t) {
  this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && qr(t.groupNames) && (t.switchN = !0, this.regexp_pattern(t));
};
A.regexp_pattern = function(t) {
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
  for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
    var s = i[e];
    t.groupNames[s] || t.raise("Invalid named capture referenced");
  }
};
A.regexp_disjunction = function(t) {
  var e = this.options.ecmaVersion >= 16;
  for (e && (t.branchID = new Ce(t.branchID, null)), this.regexp_alternative(t); t.eat(
    124
    /* | */
  ); )
    e && (t.branchID = t.branchID.sibling()), this.regexp_alternative(t);
  e && (t.branchID = t.branchID.parent), this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(
    123
    /* { */
  ) && t.raise("Lone quantifier brackets");
};
A.regexp_alternative = function(t) {
  for (; t.pos < t.source.length && this.regexp_eatTerm(t); )
    ;
};
A.regexp_eatTerm = function(t) {
  return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : (t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) ? (this.regexp_eatQuantifier(t), !0) : !1;
};
A.regexp_eatAssertion = function(t) {
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
    var i = !1;
    if (this.options.ecmaVersion >= 9 && (i = t.eat(
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
      ) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !i, !0;
  }
  return t.pos = e, !1;
};
A.regexp_eatQuantifier = function(t, e) {
  return e === void 0 && (e = !1), this.regexp_eatQuantifierPrefix(t, e) ? (t.eat(
    63
    /* ? */
  ), !0) : !1;
};
A.regexp_eatQuantifierPrefix = function(t, e) {
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
A.regexp_eatBracedQuantifier = function(t, e) {
  var i = t.pos;
  if (t.eat(
    123
    /* { */
  )) {
    var s = 0, a = -1;
    if (this.regexp_eatDecimalDigits(t) && (s = t.lastIntValue, t.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(t) && (a = t.lastIntValue), t.eat(
      125
      /* } */
    )))
      return a !== -1 && a < s && !e && t.raise("numbers out of order in {} quantifier"), !0;
    t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = i;
  }
  return !1;
};
A.regexp_eatAtom = function(t) {
  return this.regexp_eatPatternCharacters(t) || t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t);
};
A.regexp_eatReverseSolidusAtomEscape = function(t) {
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
A.regexp_eatUncapturingGroup = function(t) {
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
        var i = this.regexp_eatModifiers(t), s = t.eat(
          45
          /* - */
        );
        if (i || s) {
          for (var a = 0; a < i.length; a++) {
            var u = i.charAt(a);
            i.indexOf(u, a + 1) > -1 && t.raise("Duplicate regular expression modifiers");
          }
          if (s) {
            var h = this.regexp_eatModifiers(t);
            !i && !h && t.current() === 58 && t.raise("Invalid regular expression modifiers");
            for (var d = 0; d < h.length; d++) {
              var y = h.charAt(d);
              (h.indexOf(y, d + 1) > -1 || i.indexOf(y) > -1) && t.raise("Duplicate regular expression modifiers");
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
A.regexp_eatCapturingGroup = function(t) {
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
A.regexp_eatModifiers = function(t) {
  for (var e = "", i = 0; (i = t.current()) !== -1 && Hr(i); )
    e += Et(i), t.advance();
  return e;
};
function Hr(t) {
  return t === 105 || t === 109 || t === 115;
}
A.regexp_eatExtendedAtom = function(t) {
  return t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t);
};
A.regexp_eatInvalidBracedQuantifier = function(t) {
  return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1;
};
A.regexp_eatSyntaxCharacter = function(t) {
  var e = t.current();
  return Ls(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function Ls(t) {
  return t === 36 || t >= 40 && t <= 43 || t === 46 || t === 63 || t >= 91 && t <= 94 || t >= 123 && t <= 125;
}
A.regexp_eatPatternCharacters = function(t) {
  for (var e = t.pos, i = 0; (i = t.current()) !== -1 && !Ls(i); )
    t.advance();
  return t.pos !== e;
};
A.regexp_eatExtendedPatternCharacter = function(t) {
  var e = t.current();
  return e !== -1 && e !== 36 && !(e >= 40 && e <= 43) && e !== 46 && e !== 63 && e !== 91 && e !== 94 && e !== 124 ? (t.advance(), !0) : !1;
};
A.regexp_groupSpecifier = function(t) {
  if (t.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(t) || t.raise("Invalid group");
    var e = this.options.ecmaVersion >= 16, i = t.groupNames[t.lastStringValue];
    if (i)
      if (e)
        for (var s = 0, a = i; s < a.length; s += 1) {
          var u = a[s];
          u.separatedFrom(t.branchID) || t.raise("Duplicate capture group name");
        }
      else
        t.raise("Duplicate capture group name");
    e ? (i || (t.groupNames[t.lastStringValue] = [])).push(t.branchID) : t.groupNames[t.lastStringValue] = !0;
  }
};
A.regexp_eatGroupName = function(t) {
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
A.regexp_eatRegExpIdentifierName = function(t) {
  if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
    for (t.lastStringValue += Et(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t); )
      t.lastStringValue += Et(t.lastIntValue);
    return !0;
  }
  return !1;
};
A.regexp_eatRegExpIdentifierStart = function(t) {
  var e = t.pos, i = this.options.ecmaVersion >= 11, s = t.current(i);
  return t.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (s = t.lastIntValue), Wr(s) ? (t.lastIntValue = s, !0) : (t.pos = e, !1);
};
function Wr(t) {
  return Tt(t, !0) || t === 36 || t === 95;
}
A.regexp_eatRegExpIdentifierPart = function(t) {
  var e = t.pos, i = this.options.ecmaVersion >= 11, s = t.current(i);
  return t.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (s = t.lastIntValue), Kr(s) ? (t.lastIntValue = s, !0) : (t.pos = e, !1);
};
function Kr(t) {
  return Ct(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
}
A.regexp_eatAtomEscape = function(t) {
  return this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t) ? !0 : (t.switchU && (t.current() === 99 && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1);
};
A.regexp_eatBackReference = function(t) {
  var e = t.pos;
  if (this.regexp_eatDecimalEscape(t)) {
    var i = t.lastIntValue;
    if (t.switchU)
      return i > t.maxBackReference && (t.maxBackReference = i), !0;
    if (i <= t.numCapturingParens)
      return !0;
    t.pos = e;
  }
  return !1;
};
A.regexp_eatKGroupName = function(t) {
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
A.regexp_eatCharacterEscape = function(t) {
  return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t);
};
A.regexp_eatCControlLetter = function(t) {
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
A.regexp_eatZero = function(t) {
  return t.current() === 48 && !ze(t.lookahead()) ? (t.lastIntValue = 0, t.advance(), !0) : !1;
};
A.regexp_eatControlEscape = function(t) {
  var e = t.current();
  return e === 116 ? (t.lastIntValue = 9, t.advance(), !0) : e === 110 ? (t.lastIntValue = 10, t.advance(), !0) : e === 118 ? (t.lastIntValue = 11, t.advance(), !0) : e === 102 ? (t.lastIntValue = 12, t.advance(), !0) : e === 114 ? (t.lastIntValue = 13, t.advance(), !0) : !1;
};
A.regexp_eatControlLetter = function(t) {
  var e = t.current();
  return Os(e) ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
function Os(t) {
  return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
A.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
  e === void 0 && (e = !1);
  var i = t.pos, s = e || t.switchU;
  if (t.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(t, 4)) {
      var a = t.lastIntValue;
      if (s && a >= 55296 && a <= 56319) {
        var u = t.pos;
        if (t.eat(
          92
          /* \ */
        ) && t.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(t, 4)) {
          var h = t.lastIntValue;
          if (h >= 56320 && h <= 57343)
            return t.lastIntValue = (a - 55296) * 1024 + (h - 56320) + 65536, !0;
        }
        t.pos = u, t.lastIntValue = a;
      }
      return !0;
    }
    if (s && t.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(t) && t.eat(
      125
      /* } */
    ) && Jr(t.lastIntValue))
      return !0;
    s && t.raise("Invalid unicode escape"), t.pos = i;
  }
  return !1;
};
function Jr(t) {
  return t >= 0 && t <= 1114111;
}
A.regexp_eatIdentityEscape = function(t) {
  if (t.switchU)
    return this.regexp_eatSyntaxCharacter(t) ? !0 : t.eat(
      47
      /* / */
    ) ? (t.lastIntValue = 47, !0) : !1;
  var e = t.current();
  return e !== 99 && (!t.switchN || e !== 107) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
A.regexp_eatDecimalEscape = function(t) {
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
var Rs = 0, It = 1, kt = 2;
A.regexp_eatCharacterClassEscape = function(t) {
  var e = t.current();
  if (Gr(e))
    return t.lastIntValue = -1, t.advance(), It;
  var i = !1;
  if (t.switchU && this.options.ecmaVersion >= 9 && ((i = e === 80) || e === 112)) {
    t.lastIntValue = -1, t.advance();
    var s;
    if (t.eat(
      123
      /* { */
    ) && (s = this.regexp_eatUnicodePropertyValueExpression(t)) && t.eat(
      125
      /* } */
    ))
      return i && s === kt && t.raise("Invalid property name"), s;
    t.raise("Invalid property name");
  }
  return Rs;
};
function Gr(t) {
  return t === 100 || t === 68 || t === 115 || t === 83 || t === 119 || t === 87;
}
A.regexp_eatUnicodePropertyValueExpression = function(t) {
  var e = t.pos;
  if (this.regexp_eatUnicodePropertyName(t) && t.eat(
    61
    /* = */
  )) {
    var i = t.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(t)) {
      var s = t.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(t, i, s), It;
    }
  }
  if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
    var a = t.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(t, a);
  }
  return Rs;
};
A.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
  Yt(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(i) || t.raise("Invalid property value");
};
A.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
  if (t.unicodeProperties.binary.test(e))
    return It;
  if (t.switchV && t.unicodeProperties.binaryOfStrings.test(e))
    return kt;
  t.raise("Invalid property name");
};
A.regexp_eatUnicodePropertyName = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; Ms(e = t.current()); )
    t.lastStringValue += Et(e), t.advance();
  return t.lastStringValue !== "";
};
function Ms(t) {
  return Os(t) || t === 95;
}
A.regexp_eatUnicodePropertyValue = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; Xr(e = t.current()); )
    t.lastStringValue += Et(e), t.advance();
  return t.lastStringValue !== "";
};
function Xr(t) {
  return Ms(t) || ze(t);
}
A.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
  return this.regexp_eatUnicodePropertyValue(t);
};
A.regexp_eatCharacterClass = function(t) {
  if (t.eat(
    91
    /* [ */
  )) {
    var e = t.eat(
      94
      /* ^ */
    ), i = this.regexp_classContents(t);
    return t.eat(
      93
      /* ] */
    ) || t.raise("Unterminated character class"), e && i === kt && t.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
A.regexp_classContents = function(t) {
  return t.current() === 93 ? It : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), It);
};
A.regexp_nonEmptyClassRanges = function(t) {
  for (; this.regexp_eatClassAtom(t); ) {
    var e = t.lastIntValue;
    if (t.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(t)) {
      var i = t.lastIntValue;
      t.switchU && (e === -1 || i === -1) && t.raise("Invalid character class"), e !== -1 && i !== -1 && e > i && t.raise("Range out of order in character class");
    }
  }
};
A.regexp_eatClassAtom = function(t) {
  var e = t.pos;
  if (t.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(t))
      return !0;
    if (t.switchU) {
      var i = t.current();
      (i === 99 || Vs(i)) && t.raise("Invalid class escape"), t.raise("Invalid escape");
    }
    t.pos = e;
  }
  var s = t.current();
  return s !== 93 ? (t.lastIntValue = s, t.advance(), !0) : !1;
};
A.regexp_eatClassEscape = function(t) {
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
A.regexp_classSetExpression = function(t) {
  var e = It, i;
  if (!this.regexp_eatClassSetRange(t)) if (i = this.regexp_eatClassSetOperand(t)) {
    i === kt && (e = kt);
    for (var s = t.pos; t.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (t.current() !== 38 && (i = this.regexp_eatClassSetOperand(t))) {
        i !== kt && (e = It);
        continue;
      }
      t.raise("Invalid character in character class");
    }
    if (s !== t.pos)
      return e;
    for (; t.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(t) || t.raise("Invalid character in character class");
    if (s !== t.pos)
      return e;
  } else
    t.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(t)) {
      if (i = this.regexp_eatClassSetOperand(t), !i)
        return e;
      i === kt && (e = kt);
    }
};
A.regexp_eatClassSetRange = function(t) {
  var e = t.pos;
  if (this.regexp_eatClassSetCharacter(t)) {
    var i = t.lastIntValue;
    if (t.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(t)) {
      var s = t.lastIntValue;
      return i !== -1 && s !== -1 && i > s && t.raise("Range out of order in character class"), !0;
    }
    t.pos = e;
  }
  return !1;
};
A.regexp_eatClassSetOperand = function(t) {
  return this.regexp_eatClassSetCharacter(t) ? It : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t);
};
A.regexp_eatNestedClass = function(t) {
  var e = t.pos;
  if (t.eat(
    91
    /* [ */
  )) {
    var i = t.eat(
      94
      /* ^ */
    ), s = this.regexp_classContents(t);
    if (t.eat(
      93
      /* ] */
    ))
      return i && s === kt && t.raise("Negated character class may contain strings"), s;
    t.pos = e;
  }
  if (t.eat(
    92
    /* \ */
  )) {
    var a = this.regexp_eatCharacterClassEscape(t);
    if (a)
      return a;
    t.pos = e;
  }
  return null;
};
A.regexp_eatClassStringDisjunction = function(t) {
  var e = t.pos;
  if (t.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (t.eat(
      123
      /* { */
    )) {
      var i = this.regexp_classStringDisjunctionContents(t);
      if (t.eat(
        125
        /* } */
      ))
        return i;
    } else
      t.raise("Invalid escape");
    t.pos = e;
  }
  return null;
};
A.regexp_classStringDisjunctionContents = function(t) {
  for (var e = this.regexp_classString(t); t.eat(
    124
    /* | */
  ); )
    this.regexp_classString(t) === kt && (e = kt);
  return e;
};
A.regexp_classString = function(t) {
  for (var e = 0; this.regexp_eatClassSetCharacter(t); )
    e++;
  return e === 1 ? It : kt;
};
A.regexp_eatClassSetCharacter = function(t) {
  var e = t.pos;
  if (t.eat(
    92
    /* \ */
  ))
    return this.regexp_eatCharacterEscape(t) || this.regexp_eatClassSetReservedPunctuator(t) ? !0 : t.eat(
      98
      /* b */
    ) ? (t.lastIntValue = 8, !0) : (t.pos = e, !1);
  var i = t.current();
  return i < 0 || i === t.lookahead() && Yr(i) || Qr(i) ? !1 : (t.advance(), t.lastIntValue = i, !0);
};
function Yr(t) {
  return t === 33 || t >= 35 && t <= 38 || t >= 42 && t <= 44 || t === 46 || t >= 58 && t <= 64 || t === 94 || t === 96 || t === 126;
}
function Qr(t) {
  return t === 40 || t === 41 || t === 45 || t === 47 || t >= 91 && t <= 93 || t >= 123 && t <= 125;
}
A.regexp_eatClassSetReservedPunctuator = function(t) {
  var e = t.current();
  return ta(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function ta(t) {
  return t === 33 || t === 35 || t === 37 || t === 38 || t === 44 || t === 45 || t >= 58 && t <= 62 || t === 64 || t === 96 || t === 126;
}
A.regexp_eatClassControlLetter = function(t) {
  var e = t.current();
  return ze(e) || e === 95 ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
A.regexp_eatHexEscapeSequence = function(t) {
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
A.regexp_eatDecimalDigits = function(t) {
  var e = t.pos, i = 0;
  for (t.lastIntValue = 0; ze(i = t.current()); )
    t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
  return t.pos !== e;
};
function ze(t) {
  return t >= 48 && t <= 57;
}
A.regexp_eatHexDigits = function(t) {
  var e = t.pos, i = 0;
  for (t.lastIntValue = 0; Ds(i = t.current()); )
    t.lastIntValue = 16 * t.lastIntValue + zs(i), t.advance();
  return t.pos !== e;
};
function Ds(t) {
  return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
}
function zs(t) {
  return t >= 65 && t <= 70 ? 10 + (t - 65) : t >= 97 && t <= 102 ? 10 + (t - 97) : t - 48;
}
A.regexp_eatLegacyOctalEscapeSequence = function(t) {
  if (this.regexp_eatOctalDigit(t)) {
    var e = t.lastIntValue;
    if (this.regexp_eatOctalDigit(t)) {
      var i = t.lastIntValue;
      e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = e * 64 + i * 8 + t.lastIntValue : t.lastIntValue = e * 8 + i;
    } else
      t.lastIntValue = e;
    return !0;
  }
  return !1;
};
A.regexp_eatOctalDigit = function(t) {
  var e = t.current();
  return Vs(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1);
};
function Vs(t) {
  return t >= 48 && t <= 55;
}
A.regexp_eatFixedHexDigits = function(t, e) {
  var i = t.pos;
  t.lastIntValue = 0;
  for (var s = 0; s < e; ++s) {
    var a = t.current();
    if (!Ds(a))
      return t.pos = i, !1;
    t.lastIntValue = 16 * t.lastIntValue + zs(a), t.advance();
  }
  return !0;
};
var Ve = function(e) {
  this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new pe(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
}, F = G.prototype;
F.next = function(t) {
  !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Ve(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
F.getToken = function() {
  return this.next(), new Ve(this);
};
typeof Symbol < "u" && (F[Symbol.iterator] = function() {
  var t = this;
  return {
    next: function() {
      var e = t.getToken();
      return {
        done: e.type === p.eof,
        value: e
      };
    }
  };
});
F.nextToken = function() {
  var t = this.curContext();
  if ((!t || !t.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(p.eof);
  if (t.override)
    return t.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
F.readToken = function(t) {
  return Tt(t, this.options.ecmaVersion >= 6) || t === 92 ? this.readWord() : this.getTokenFromCode(t);
};
F.fullCharCodeAtPos = function() {
  var t = this.input.charCodeAt(this.pos);
  if (t <= 55295 || t >= 56320)
    return t;
  var e = this.input.charCodeAt(this.pos + 1);
  return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888;
};
F.skipBlockComment = function() {
  var t = this.options.onComment && this.curPosition(), e = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
    for (var s = void 0, a = e; (s = hs(this.input, a, this.pos)) > -1; )
      ++this.curLine, a = this.lineStart = s;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(e + 2, i),
    e,
    this.pos,
    t,
    this.curPosition()
  );
};
F.skipLineComment = function(t) {
  for (var e = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !jt(s); )
    s = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(e + t, this.pos),
    e,
    this.pos,
    i,
    this.curPosition()
  );
};
F.skipSpace = function() {
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
        if (t > 8 && t < 14 || t >= 5760 && oi.test(String.fromCharCode(t)))
          ++this.pos;
        else
          break t;
    }
  }
};
F.finishToken = function(t, e) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = t, this.value = e, this.updateContext(i);
};
F.readToken_dot = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t >= 48 && t <= 57)
    return this.readNumber(!0);
  var e = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && t === 46 && e === 46 ? (this.pos += 3, this.finishToken(p.ellipsis)) : (++this.pos, this.finishToken(p.dot));
};
F.readToken_slash = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : t === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.slash, 1);
};
F.readToken_mult_modulo_exp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), i = 1, s = t === 42 ? p.star : p.modulo;
  return this.options.ecmaVersion >= 7 && t === 42 && e === 42 && (++i, s = p.starstar, e = this.input.charCodeAt(this.pos + 2)), e === 61 ? this.finishOp(p.assign, i + 1) : this.finishOp(s, i);
};
F.readToken_pipe_amp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e === t) {
    if (this.options.ecmaVersion >= 12) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i === 61)
        return this.finishOp(p.assign, 3);
    }
    return this.finishOp(t === 124 ? p.logicalOR : p.logicalAND, 2);
  }
  return e === 61 ? this.finishOp(p.assign, 2) : this.finishOp(t === 124 ? p.bitwiseOR : p.bitwiseAND, 1);
};
F.readToken_caret = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.bitwiseXOR, 1);
};
F.readToken_plus_min = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === t ? e === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || ct.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(p.incDec, 2) : e === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.plusMin, 1);
};
F.readToken_lt_gt = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), i = 1;
  return e === t ? (i = t === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(p.assign, i + 1) : this.finishOp(p.bitShift, i)) : e === 33 && t === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (e === 61 && (i = 2), this.finishOp(p.relational, i));
};
F.readToken_eq_excl = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(p.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : t === 61 && e === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(p.arrow)) : this.finishOp(t === 61 ? p.eq : p.prefix, 1);
};
F.readToken_question = function() {
  var t = this.options.ecmaVersion;
  if (t >= 11) {
    var e = this.input.charCodeAt(this.pos + 1);
    if (e === 46) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i < 48 || i > 57)
        return this.finishOp(p.questionDot, 2);
    }
    if (e === 63) {
      if (t >= 12) {
        var s = this.input.charCodeAt(this.pos + 2);
        if (s === 61)
          return this.finishOp(p.assign, 3);
      }
      return this.finishOp(p.coalesce, 2);
    }
  }
  return this.finishOp(p.question, 1);
};
F.readToken_numberSign = function() {
  var t = this.options.ecmaVersion, e = 35;
  if (t >= 13 && (++this.pos, e = this.fullCharCodeAtPos(), Tt(e, !0) || e === 92))
    return this.finishToken(p.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Et(e) + "'");
};
F.getTokenFromCode = function(t) {
  switch (t) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      return this.readToken_dot();
    // Punctuation tokens.
    case 40:
      return ++this.pos, this.finishToken(p.parenL);
    case 41:
      return ++this.pos, this.finishToken(p.parenR);
    case 59:
      return ++this.pos, this.finishToken(p.semi);
    case 44:
      return ++this.pos, this.finishToken(p.comma);
    case 91:
      return ++this.pos, this.finishToken(p.bracketL);
    case 93:
      return ++this.pos, this.finishToken(p.bracketR);
    case 123:
      return ++this.pos, this.finishToken(p.braceL);
    case 125:
      return ++this.pos, this.finishToken(p.braceR);
    case 58:
      return ++this.pos, this.finishToken(p.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(p.backQuote);
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
      return this.finishOp(p.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + Et(t) + "'");
};
F.finishOp = function(t, e) {
  var i = this.input.slice(this.pos, this.pos + e);
  return this.pos += e, this.finishToken(t, i);
};
F.readRegexp = function() {
  for (var t, e, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var s = this.input.charAt(this.pos);
    if (ct.test(s) && this.raise(i, "Unterminated regular expression"), t)
      t = !1;
    else {
      if (s === "[")
        e = !0;
      else if (s === "]" && e)
        e = !1;
      else if (s === "/" && !e)
        break;
      t = s === "\\";
    }
    ++this.pos;
  }
  var a = this.input.slice(i, this.pos);
  ++this.pos;
  var u = this.pos, h = this.readWord1();
  this.containsEsc && this.unexpected(u);
  var d = this.regexpState || (this.regexpState = new Pt(this));
  d.reset(i, a, h), this.validateRegExpFlags(d), this.validateRegExpPattern(d);
  var y = null;
  try {
    y = new RegExp(a, h);
  } catch {
  }
  return this.finishToken(p.regexp, { pattern: a, flags: h, value: y });
};
F.readInt = function(t, e, i) {
  for (var s = this.options.ecmaVersion >= 12 && e === void 0, a = i && this.input.charCodeAt(this.pos) === 48, u = this.pos, h = 0, d = 0, y = 0, o = e ?? 1 / 0; y < o; ++y, ++this.pos) {
    var S = this.input.charCodeAt(this.pos), P = void 0;
    if (s && S === 95) {
      a && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), d === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), y === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), d = S;
      continue;
    }
    if (S >= 97 ? P = S - 97 + 10 : S >= 65 ? P = S - 65 + 10 : S >= 48 && S <= 57 ? P = S - 48 : P = 1 / 0, P >= t)
      break;
    d = S, h = h * t + P;
  }
  return s && d === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === u || e != null && this.pos - u !== e ? null : h;
};
function ea(t, e) {
  return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
}
function Fs(t) {
  return typeof BigInt != "function" ? null : BigInt(t.replace(/_/g, ""));
}
F.readRadixNumber = function(t) {
  var e = this.pos;
  this.pos += 2;
  var i = this.readInt(t);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = Fs(this.input.slice(e, this.pos)), ++this.pos) : Tt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(p.num, i);
};
F.readNumber = function(t) {
  var e = this.pos;
  !t && this.readInt(10, void 0, !0) === null && this.raise(e, "Invalid number");
  var i = this.pos - e >= 2 && this.input.charCodeAt(e) === 48;
  i && this.strict && this.raise(e, "Invalid number");
  var s = this.input.charCodeAt(this.pos);
  if (!i && !t && this.options.ecmaVersion >= 11 && s === 110) {
    var a = Fs(this.input.slice(e, this.pos));
    return ++this.pos, Tt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(p.num, a);
  }
  i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1), s === 46 && !i && (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), (s === 69 || s === 101) && !i && (s = this.input.charCodeAt(++this.pos), (s === 43 || s === 45) && ++this.pos, this.readInt(10) === null && this.raise(e, "Invalid number")), Tt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var u = ea(this.input.slice(e, this.pos), i);
  return this.finishToken(p.num, u);
};
F.readCodePoint = function() {
  var t = this.input.charCodeAt(this.pos), e;
  if (t === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else
    e = this.readHexChar(4);
  return e;
};
F.readString = function(t) {
  for (var e = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var s = this.input.charCodeAt(this.pos);
    if (s === t)
      break;
    s === 92 ? (e += this.input.slice(i, this.pos), e += this.readEscapedChar(!1), i = this.pos) : s === 8232 || s === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (jt(s) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return e += this.input.slice(i, this.pos++), this.finishToken(p.string, e);
};
var js = {};
F.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (t) {
    if (t === js)
      this.readInvalidTemplateToken();
    else
      throw t;
  }
  this.inTemplateElement = !1;
};
F.invalidStringToken = function(t, e) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw js;
  this.raise(t, e);
};
F.readTmplToken = function() {
  for (var t = "", e = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === p.template || this.type === p.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(p.dollarBraceL)) : (++this.pos, this.finishToken(p.backQuote)) : (t += this.input.slice(e, this.pos), this.finishToken(p.template, t));
    if (i === 92)
      t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
    else if (jt(i)) {
      switch (t += this.input.slice(e, this.pos), ++this.pos, i) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          t += `
`;
          break;
        default:
          t += String.fromCharCode(i);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), e = this.pos;
    } else
      ++this.pos;
  }
};
F.readInvalidTemplateToken = function() {
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
        return this.finishToken(p.invalidTemplate, this.input.slice(this.start, this.pos));
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
F.readEscapedChar = function(t) {
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
      return Et(this.readCodePoint());
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
        var i = this.pos - 1;
        this.invalidStringToken(
          i,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (e >= 48 && e <= 55) {
        var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], a = parseInt(s, 8);
        return a > 255 && (s = s.slice(0, -1), a = parseInt(s, 8)), this.pos += s.length - 1, e = this.input.charCodeAt(this.pos), (s !== "0" || e === 56 || e === 57) && (this.strict || t) && this.invalidStringToken(
          this.pos - 1 - s.length,
          t ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(a);
      }
      return jt(e) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(e);
  }
};
F.readHexChar = function(t) {
  var e = this.pos, i = this.readInt(16, t);
  return i === null && this.invalidStringToken(e, "Bad character escape sequence"), i;
};
F.readWord1 = function() {
  this.containsEsc = !1;
  for (var t = "", e = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var a = this.fullCharCodeAtPos();
    if (Ct(a, s))
      this.pos += a <= 65535 ? 1 : 2;
    else if (a === 92) {
      this.containsEsc = !0, t += this.input.slice(i, this.pos);
      var u = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var h = this.readCodePoint();
      (e ? Tt : Ct)(h, s) || this.invalidStringToken(u, "Invalid Unicode escape"), t += Et(h), i = this.pos;
    } else
      break;
    e = !1;
  }
  return t + this.input.slice(i, this.pos);
};
F.readWord = function() {
  var t = this.readWord1(), e = p.name;
  return this.keywords.test(t) && (e = Kt[t]), this.finishToken(e, t);
};
var Bs = "8.15.0";
G.acorn = {
  Parser: G,
  version: Bs,
  defaultOptions: Te,
  Position: Jt,
  SourceLocation: pe,
  getLineInfo: ui,
  Node: fe,
  TokenType: z,
  tokTypes: p,
  keywordTypes: Kt,
  TokContext: ut,
  tokContexts: q,
  isIdentifierChar: Ct,
  isIdentifierStart: Tt,
  Token: Ve,
  isNewLine: jt,
  lineBreak: ct,
  lineBreakG: cs,
  nonASCIIwhitespace: oi
};
function ia(t, e) {
  return G.parse(t, e);
}
function sa(t, e, i) {
  return G.parseExpressionAt(t, e, i);
}
function ra(t, e) {
  return G.tokenizer(t, e);
}
const aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: fe,
  Parser: G,
  Position: Jt,
  SourceLocation: pe,
  TokContext: ut,
  Token: Ve,
  TokenType: z,
  defaultOptions: Te,
  getLineInfo: ui,
  isIdentifierChar: Ct,
  isIdentifierStart: Tt,
  isNewLine: jt,
  keywordTypes: Kt,
  lineBreak: ct,
  lineBreakG: cs,
  nonASCIIwhitespace: oi,
  parse: ia,
  parseExpressionAt: sa,
  tokContexts: q,
  tokTypes: p,
  tokenizer: ra,
  version: Bs
}, Symbol.toStringTag, { value: "Module" }));
function Oi(t, e) {
  for (var i = 0; i < e.length; i++) {
    var s = e[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, typeof (a = (function(u, h) {
      if (typeof u != "object" || u === null) return u;
      var d = u[Symbol.toPrimitive];
      if (d !== void 0) {
        var y = d.call(u, "string");
        if (typeof y != "object") return y;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(u);
    })(s.key)) == "symbol" ? a : String(a), s);
  }
  var a;
}
function Ee() {
  return Ee = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, Ee.apply(this, arguments);
}
function ge(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ii(t, e);
}
function ii(t, e) {
  return ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, ii(t, e);
}
function Ri(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
  return s;
}
function Mi(t, e) {
  var i = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (i) return (i = i.call(t)).next.bind(i);
  if (Array.isArray(t) || (i = (function(a, u) {
    if (a) {
      if (typeof a == "string") return Ri(a, u);
      var h = Object.prototype.toString.call(a).slice(8, -1);
      return h === "Object" && a.constructor && (h = a.constructor.name), h === "Map" || h === "Set" ? Array.from(a) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Ri(a, u) : void 0;
    }
  })(t)) || e) {
    i && (t = i);
    var s = 0;
    return function() {
      return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var yt = !0;
function vt(t, e) {
  return e === void 0 && (e = {}), new z("name", e);
}
var na = /* @__PURE__ */ new WeakMap();
function oa(t) {
  var e = na.get(t.Parser.acorn || t);
  if (!e) {
    var i = { assert: vt(0, { startsExpr: yt }), asserts: vt(0, { startsExpr: yt }), global: vt(0, { startsExpr: yt }), keyof: vt(0, { startsExpr: yt }), readonly: vt(0, { startsExpr: yt }), unique: vt(0, { startsExpr: yt }), abstract: vt(0, { startsExpr: yt }), declare: vt(0, { startsExpr: yt }), enum: vt(0, { startsExpr: yt }), module: vt(0, { startsExpr: yt }), namespace: vt(0, { startsExpr: yt }), interface: vt(0, { startsExpr: yt }), type: vt(0, { startsExpr: yt }) }, s = { at: new z("@"), jsxName: new z("jsxName"), jsxText: new z("jsxText", { beforeExpr: !0 }), jsxTagStart: new z("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new z("jsxTagEnd") }, a = { tc_oTag: new ut("<tag", !1, !1), tc_cTag: new ut("</tag", !1, !1), tc_expr: new ut("<tag>...</tag>", !0, !0) }, u = new RegExp("^(?:" + Object.keys(i).join("|") + ")$");
    s.jsxTagStart.updateContext = function() {
      this.context.push(a.tc_expr), this.context.push(a.tc_oTag), this.exprAllowed = !1;
    }, s.jsxTagEnd.updateContext = function(h) {
      var d = this.context.pop();
      d === a.tc_oTag && h === p.slash || d === a.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === a.tc_expr) : this.exprAllowed = !0;
    }, e = { tokTypes: Ee({}, i, s), tokContexts: Ee({}, a), keywordsRegExp: u, tokenIsLiteralPropertyName: function(h) {
      return [p.name, p.string, p.num].concat(Object.values(Kt), Object.values(i)).includes(h);
    }, tokenIsKeywordOrIdentifier: function(h) {
      return [p.name].concat(Object.values(Kt), Object.values(i)).includes(h);
    }, tokenIsIdentifier: function(h) {
      return [].concat(Object.values(i), [p.name]).includes(h);
    }, tokenIsTSDeclarationStart: function(h) {
      return [i.abstract, i.declare, i.enum, i.module, i.namespace, i.interface, i.type].includes(h);
    }, tokenIsTSTypeOperator: function(h) {
      return [i.keyof, i.readonly, i.unique].includes(h);
    }, tokenIsTemplate: function(h) {
      return h === p.invalidTemplate;
    } };
  }
  return e;
}
var se = 1024, ua = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), Di = new RegExp("(?=(" + ua.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), re = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function ca(t, e) {
  var i = e.key.name, s = t[i], a = "true";
  return e.type !== "MethodDefinition" || e.kind !== "get" && e.kind !== "set" || (a = (e.static ? "s" : "i") + e.kind), s === "iget" && a === "iset" || s === "iset" && a === "iget" || s === "sget" && a === "sset" || s === "sset" && a === "sget" ? (t[i] = "true", !1) : !!s || (t[i] = a, !1);
}
function zi(t, e) {
  var i = t.key;
  return !t.computed && (i.type === "Identifier" && i.name === e || i.type === "Literal" && i.value === e);
}
var I = { AbstractMethodHasImplementation: function(t) {
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
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, ha = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, pa = /^[\da-fA-F]+$/, la = /^\d+$/;
function ne(t) {
  return t && (t.type === "JSXIdentifier" ? t.name : t.type === "JSXNamespacedName" ? t.namespace.name + ":" + t.name.name : t.type === "JSXMemberExpression" ? ne(t.object) + "." + ne(t.property) : void 0);
}
var Je = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function Vi(t) {
  if (!t) throw new Error("Assert fail");
}
function fa(t) {
  return t === "accessor";
}
function da(t) {
  return t === "in" || t === "out";
}
function Ge(t, e) {
  return 2 | (t ? 4 : 0) | (e ? 8 : 0);
}
function ma(t) {
  if (t.type !== "MemberExpression") return !1;
  var e = t.property;
  return (!t.computed || !(e.type !== "TemplateLiteral" || e.expressions.length > 0)) && $s(t.object);
}
function $s(t) {
  return t.type === "Identifier" || t.type === "MemberExpression" && !t.computed && $s(t.object);
}
function Fi(t) {
  return t === "private" || t === "public" || t === "protected";
}
function ya(t) {
  var e = {}, i = e.dts, s = i !== void 0 && i, a = e.allowSatisfies, u = a !== void 0 && a;
  return function(h) {
    var d = h.acorn || aa, y = oa(d), o = d.tokTypes, S = d.keywordTypes, P = d.isIdentifierStart, R = d.lineBreak, $ = d.isNewLine, tt = d.tokContexts, at = d.isIdentifierChar, O = y.tokTypes, rt = y.tokContexts, dt = y.keywordsRegExp, xt = y.tokenIsLiteralPropertyName, Ft = y.tokenIsTemplate, lr = y.tokenIsTSDeclarationStart, Z = y.tokenIsIdentifier, ye = y.tokenIsKeywordOrIdentifier, fr = y.tokenIsTSTypeOperator;
    function dr(T, pt, ot) {
      ot === void 0 && (ot = T.length);
      for (var et = pt; et < ot; et++) {
        var B = T.charCodeAt(et);
        if ($(B)) return et < ot - 1 && B === 13 && T.charCodeAt(et + 1) === 10 ? et + 2 : et + 1;
      }
      return -1;
    }
    h = (function(T, pt, ot) {
      var et = ot.tokTypes, B = pt.tokTypes;
      return (function(f) {
        function r() {
          return f.apply(this, arguments) || this;
        }
        ge(r, f);
        var n = r.prototype;
        return n.takeDecorators = function(c) {
          var l = this.decoratorStack[this.decoratorStack.length - 1];
          l.length && (c.decorators = l, this.resetStartLocationFromNode(c, l[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, n.parseDecorators = function(c) {
          for (var l = this.decoratorStack[this.decoratorStack.length - 1]; this.match(B.at); ) {
            var m = this.parseDecorator();
            l.push(m);
          }
          this.match(et._export) ? c || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, n.parseDecorator = function() {
          var c = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var l, m = this.start, v = this.startLoc;
          if (this.match(et.parenL)) {
            var x = this.start, g = this.startLoc;
            if (this.next(), l = this.parseExpression(), this.expect(et.parenR), this.options.preserveParens) {
              var b = this.startNodeAt(x, g);
              b.expression = l, l = this.finishNode(b, "ParenthesizedExpression");
            }
          } else for (l = this.parseIdent(!1); this.eat(et.dot); ) {
            var w = this.startNodeAt(m, v);
            w.object = l, w.property = this.parseIdent(!0), w.computed = !1, l = this.finishNode(w, "MemberExpression");
          }
          return c.expression = this.parseMaybeDecoratorArguments(l), this.decoratorStack.pop(), this.finishNode(c, "Decorator");
        }, n.parseMaybeDecoratorArguments = function(c) {
          if (this.eat(et.parenL)) {
            var l = this.startNodeAtNode(c);
            return l.callee = c, l.arguments = this.parseExprList(et.parenR, !1), this.finishNode(l, "CallExpression");
          }
          return c;
        }, r;
      })(T);
    })(h, y, d), h = (function(T, pt, ot, et) {
      var B = T.tokTypes, f = pt.tokTypes, r = T.isNewLine, n = T.isIdentifierChar, c = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(l) {
        function m() {
          return l.apply(this, arguments) || this;
        }
        ge(m, l);
        var v = m.prototype;
        return v.jsx_readToken = function() {
          for (var x = "", g = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
            var b = this.input.charCodeAt(this.pos);
            switch (b) {
              case 60:
              case 123:
                return this.pos === this.start ? b === 60 && this.exprAllowed ? (++this.pos, this.finishToken(f.jsxTagStart)) : this.getTokenFromCode(b) : (x += this.input.slice(g, this.pos), this.finishToken(f.jsxText, x));
              case 38:
                x += this.input.slice(g, this.pos), x += this.jsx_readEntity(), g = this.pos;
                break;
              case 62:
              case 125:
                this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (b === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
              default:
                r(b) ? (x += this.input.slice(g, this.pos), x += this.jsx_readNewLine(!0), g = this.pos) : ++this.pos;
            }
          }
        }, v.jsx_readNewLine = function(x) {
          var g, b = this.input.charCodeAt(this.pos);
          return ++this.pos, b === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, g = x ? `
` : `\r
`) : g = String.fromCharCode(b), this.options.locations && (++this.curLine, this.lineStart = this.pos), g;
        }, v.jsx_readString = function(x) {
          for (var g = "", b = ++this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var w = this.input.charCodeAt(this.pos);
            if (w === x) break;
            w === 38 ? (g += this.input.slice(b, this.pos), g += this.jsx_readEntity(), b = this.pos) : r(w) ? (g += this.input.slice(b, this.pos), g += this.jsx_readNewLine(!1), b = this.pos) : ++this.pos;
          }
          return g += this.input.slice(b, this.pos++), this.finishToken(B.string, g);
        }, v.jsx_readEntity = function() {
          var x, g = "", b = 0, w = this.input[this.pos];
          w !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
          for (var N = ++this.pos; this.pos < this.input.length && b++ < 10; ) {
            if ((w = this.input[this.pos++]) === ";") {
              g[0] === "#" ? g[1] === "x" ? (g = g.substr(2), pa.test(g) && (x = String.fromCharCode(parseInt(g, 16)))) : (g = g.substr(1), la.test(g) && (x = String.fromCharCode(parseInt(g, 10)))) : x = ha[g];
              break;
            }
            g += w;
          }
          return x || (this.pos = N, "&");
        }, v.jsx_readWord = function() {
          var x, g = this.pos;
          do
            x = this.input.charCodeAt(++this.pos);
          while (n(x) || x === 45);
          return this.finishToken(f.jsxName, this.input.slice(g, this.pos));
        }, v.jsx_parseIdentifier = function() {
          var x = this.startNode();
          return this.type === f.jsxName ? x.name = this.value : this.type.keyword ? x.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(x, "JSXIdentifier");
        }, v.jsx_parseNamespacedName = function() {
          var x = this.start, g = this.startLoc, b = this.jsx_parseIdentifier();
          if (!c.allowNamespaces || !this.eat(B.colon)) return b;
          var w = this.startNodeAt(x, g);
          return w.namespace = b, w.name = this.jsx_parseIdentifier(), this.finishNode(w, "JSXNamespacedName");
        }, v.jsx_parseElementName = function() {
          if (this.type === f.jsxTagEnd) return "";
          var x = this.start, g = this.startLoc, b = this.jsx_parseNamespacedName();
          for (this.type !== B.dot || b.type !== "JSXNamespacedName" || c.allowNamespacedObjects || this.unexpected(); this.eat(B.dot); ) {
            var w = this.startNodeAt(x, g);
            w.object = b, w.property = this.jsx_parseIdentifier(), b = this.finishNode(w, "JSXMemberExpression");
          }
          return b;
        }, v.jsx_parseAttributeValue = function() {
          switch (this.type) {
            case B.braceL:
              var x = this.jsx_parseExpressionContainer();
              return x.expression.type === "JSXEmptyExpression" && this.raise(x.start, "JSX attributes must only be assigned a non-empty expression"), x;
            case f.jsxTagStart:
            case B.string:
              return this.parseExprAtom();
            default:
              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
          }
        }, v.jsx_parseEmptyExpression = function() {
          var x = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(x, "JSXEmptyExpression", this.start, this.startLoc);
        }, v.jsx_parseExpressionContainer = function() {
          var x = this.startNode();
          return this.next(), x.expression = this.type === B.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(B.braceR), this.finishNode(x, "JSXExpressionContainer");
        }, v.jsx_parseAttribute = function() {
          var x = this.startNode();
          return this.eat(B.braceL) ? (this.expect(B.ellipsis), x.argument = this.parseMaybeAssign(), this.expect(B.braceR), this.finishNode(x, "JSXSpreadAttribute")) : (x.name = this.jsx_parseNamespacedName(), x.value = this.eat(B.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(x, "JSXAttribute"));
        }, v.jsx_parseOpeningElementAt = function(x, g) {
          var b = this.startNodeAt(x, g);
          b.attributes = [];
          var w = this.jsx_parseElementName();
          for (w && (b.name = w); this.type !== B.slash && this.type !== f.jsxTagEnd; ) b.attributes.push(this.jsx_parseAttribute());
          return b.selfClosing = this.eat(B.slash), this.expect(f.jsxTagEnd), this.finishNode(b, w ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, v.jsx_parseClosingElementAt = function(x, g) {
          var b = this.startNodeAt(x, g), w = this.jsx_parseElementName();
          return w && (b.name = w), this.expect(f.jsxTagEnd), this.finishNode(b, w ? "JSXClosingElement" : "JSXClosingFragment");
        }, v.jsx_parseElementAt = function(x, g) {
          var b = this.startNodeAt(x, g), w = [], N = this.jsx_parseOpeningElementAt(x, g), D = null;
          if (!N.selfClosing) {
            t: for (; ; ) switch (this.type) {
              case f.jsxTagStart:
                if (x = this.start, g = this.startLoc, this.next(), this.eat(B.slash)) {
                  D = this.jsx_parseClosingElementAt(x, g);
                  break t;
                }
                w.push(this.jsx_parseElementAt(x, g));
                break;
              case f.jsxText:
                w.push(this.parseExprAtom());
                break;
              case B.braceL:
                w.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            ne(D.name) !== ne(N.name) && this.raise(D.start, "Expected corresponding JSX closing tag for <" + ne(N.name) + ">");
          }
          var C = N.name ? "Element" : "Fragment";
          return b["opening" + C] = N, b["closing" + C] = D, b.children = w, this.type === B.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(b, "JSX" + C);
        }, v.jsx_parseText = function() {
          var x = this.parseLiteral(this.value);
          return x.type = "JSXText", x;
        }, v.jsx_parseElement = function() {
          var x = this.start, g = this.startLoc;
          return this.next(), this.jsx_parseElementAt(x, g);
        }, m;
      })(ot);
    })(d, y, h), h = (function(T, pt, ot) {
      var et = pt.tokTypes, B = ot.tokTypes;
      return (function(f) {
        function r() {
          return f.apply(this, arguments) || this;
        }
        ge(r, f);
        var n = r.prototype;
        return n.parseMaybeImportAttributes = function(c) {
          if (this.type === B._with || this.type === et.assert) {
            this.next();
            var l = this.parseImportAttributes();
            l && (c.attributes = l);
          }
        }, n.parseImportAttributes = function() {
          this.expect(B.braceL);
          var c = this.parseWithEntries();
          return this.expect(B.braceR), c;
        }, n.parseWithEntries = function() {
          var c = [], l = /* @__PURE__ */ new Set();
          do {
            if (this.type === B.braceR) break;
            var m, v = this.startNode();
            m = this.type === B.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), v.key = m, l.has(v.key.name) && this.raise(this.pos, "Duplicated key in attributes"), l.add(v.key.name), this.type !== B.string && this.raise(this.pos, "Only string is supported as an attribute value"), v.value = this.parseLiteral(this.value), c.push(this.finishNode(v, "ImportAttribute"));
          } while (this.eat(B.comma));
          return c;
        }, r;
      })(T);
    })(h, y, d);
    var mr = /* @__PURE__ */ (function(T) {
      function pt(r, n, c) {
        var l;
        return (l = T.call(this, r, n, c) || this).preValue = null, l.preToken = null, l.isLookahead = !1, l.isAmbientContext = !1, l.inAbstractClass = !1, l.inType = !1, l.inDisallowConditionalTypesContext = !1, l.maybeInArrowParameters = !1, l.shouldParseArrowReturnType = void 0, l.shouldParseAsyncArrowReturnType = void 0, l.decoratorStack = [[]], l.importsStack = [[]], l.importOrExportOuterKind = void 0, l.tsParseConstModifier = l.tsParseModifiers.bind((function(m) {
          if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return m;
        })(l), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: I.InvalidModifierOnTypeParameterPositions }), l;
      }
      ge(pt, T);
      var ot, et, B, f = pt.prototype;
      return f.getTokenFromCodeInType = function(r) {
        return r === 62 || r === 60 ? this.finishOp(o.relational, 1) : T.prototype.getTokenFromCode.call(this, r);
      }, f.readToken = function(r) {
        if (!this.inType) {
          var n = this.curContext();
          if (n === rt.tc_expr) return this.jsx_readToken();
          if (n === rt.tc_oTag || n === rt.tc_cTag) {
            if (P(r)) return this.jsx_readWord();
            if (r == 62) return ++this.pos, this.finishToken(O.jsxTagEnd);
            if ((r === 34 || r === 39) && n == rt.tc_oTag) return this.jsx_readString(r);
          }
          if (r === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(O.jsxTagStart);
        }
        return T.prototype.readToken.call(this, r);
      }, f.getTokenFromCode = function(r) {
        return this.inType ? this.getTokenFromCodeInType(r) : r === 64 ? (++this.pos, this.finishToken(O.at)) : T.prototype.getTokenFromCode.call(this, r);
      }, f.isAbstractClass = function() {
        return this.ts_isContextual(O.abstract) && this.lookahead().type === o._class;
      }, f.finishNode = function(r, n) {
        return r.type !== "" && r.end !== 0 ? r : T.prototype.finishNode.call(this, r, n);
      }, f.tryParse = function(r, n) {
        n === void 0 && (n = this.cloneCurLookaheadState());
        var c = { node: null };
        try {
          return { node: r(function(m) {
            throw m === void 0 && (m = null), c.node = m, c;
          }), error: null, thrown: !1, aborted: !1, failState: null };
        } catch (m) {
          var l = this.getCurLookaheadState();
          if (this.setLookaheadState(n), m instanceof SyntaxError) return { node: null, error: m, thrown: !0, aborted: !1, failState: l };
          if (m === c) return { node: c.node, error: null, thrown: !1, aborted: !0, failState: l };
          throw m;
        }
      }, f.setOptionalParametersError = function(r, n) {
        var c;
        r.optionalParametersLoc = (c = n?.loc) != null ? c : this.startLoc;
      }, f.reScan_lt_gt = function() {
        this.type === o.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, f.reScan_lt = function() {
        var r = this.type;
        return r === o.bitShift ? (this.pos -= 2, this.finishOp(o.relational, 1), o.relational) : r;
      }, f.resetEndLocation = function(r, n) {
        n === void 0 && (n = this.lastTokEndLoc), r.end = n.column, r.loc.end = n, this.options.ranges && (r.range[1] = n.column);
      }, f.startNodeAtNode = function(r) {
        return T.prototype.startNodeAt.call(this, r.start, r.loc.start);
      }, f.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, f.tsHasSomeModifiers = function(r, n) {
        return n.some(function(c) {
          return Fi(c) ? r.accessibility === c : !!r[c];
        });
      }, f.tsIsStartOfStaticBlocks = function() {
        return this.isContextual("static") && this.lookaheadCharCode() === 123;
      }, f.tsCheckForInvalidTypeCasts = function(r) {
        var n = this;
        r.forEach(function(c) {
          c?.type === "TSTypeCastExpression" && n.raise(c.typeAnnotation.start, I.UnexpectedTypeAnnotation);
        });
      }, f.atPossibleAsyncArrow = function(r) {
        return r.type === "Identifier" && r.name === "async" && this.lastTokEndLoc.column === r.end && !this.canInsertSemicolon() && r.end - r.start == 5 && r.start === this.potentialArrowAt;
      }, f.tsIsIdentifier = function() {
        return Z(this.type);
      }, f.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeOrTypePredicateAnnotation(o.colon) : void 0;
      }, f.tsTryParseGenericAsyncArrowFunction = function(r, n, c) {
        var l = this;
        if (this.tsMatchLeftRelational()) {
          var m = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var v = this.tsTryParseAndCatch(function() {
            var x = l.startNodeAt(r, n);
            return x.typeParameters = l.tsParseTypeParameters(), T.prototype.parseFunctionParams.call(l, x), x.returnType = l.tsTryParseTypeOrTypePredicateAnnotation(), l.expect(o.arrow), x;
          });
          if (this.maybeInArrowParameters = m, v) return T.prototype.parseArrowExpression.call(this, v, null, !0, c);
        }
      }, f.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === o.relational) return this.tsParseTypeArguments();
      }, f.tsInNoContext = function(r) {
        var n = this.context;
        this.context = [n[0]];
        try {
          return r();
        } finally {
          this.context = n;
        }
      }, f.tsTryParseTypeAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, f.isUnparsedContextual = function(r, n) {
        var c = r + n.length;
        if (this.input.slice(r, c) === n) {
          var l = this.input.charCodeAt(c);
          return !(at(l) || (64512 & l) == 55296);
        }
        return !1;
      }, f.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(O.abstract) && this.lookahead().type === o._new;
      }, f.nextTokenStartSince = function(r) {
        return Je.lastIndex = r, Je.test(this.input) ? Je.lastIndex : r;
      }, f.lookaheadCharCode = function() {
        return this.input.charCodeAt(this.nextTokenStart());
      }, f.compareLookaheadState = function(r, n) {
        for (var c = 0, l = Object.keys(r); c < l.length; c++) {
          var m = l[c];
          if (r[m] !== n[m]) return !1;
        }
        return !0;
      }, f.createLookaheadState = function() {
        this.value = null, this.context = [this.curContext()];
      }, f.getCurLookaheadState = function() {
        return { endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context, startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, f.cloneCurLookaheadState = function() {
        return { pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context && this.context.slice(), startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, f.setLookaheadState = function(r) {
        this.pos = r.pos, this.value = r.value, this.endLoc = r.endLoc, this.lastTokEnd = r.lastTokEnd, this.lastTokStart = r.lastTokStart, this.lastTokStartLoc = r.lastTokStartLoc, this.type = r.type, this.start = r.start, this.end = r.end, this.context = r.context, this.startLoc = r.startLoc, this.lastTokEndLoc = r.lastTokEndLoc, this.curLine = r.curLine, this.lineStart = r.lineStart, this.curPosition = r.curPosition, this.containsEsc = r.containsEsc;
      }, f.tsLookAhead = function(r) {
        var n = this.getCurLookaheadState(), c = r();
        return this.setLookaheadState(n), c;
      }, f.lookahead = function(r) {
        var n = this.getCurLookaheadState();
        if (this.createLookaheadState(), this.isLookahead = !0, r !== void 0) for (var c = 0; c < r; c++) this.nextToken();
        else this.nextToken();
        this.isLookahead = !1;
        var l = this.getCurLookaheadState();
        return this.setLookaheadState(n), l;
      }, f.readWord = function() {
        var r = this.readWord1(), n = o.name;
        return this.keywords.test(r) ? n = S[r] : new RegExp(dt).test(r) && (n = O[r]), this.finishToken(n, r);
      }, f.skipBlockComment = function() {
        var r;
        this.isLookahead || (r = this.options.onComment && this.curPosition());
        var n = this.pos, c = this.input.indexOf("*/", this.pos += 2);
        if (c === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = c + 2, this.options.locations) for (var l, m = n; (l = dr(this.input, m, this.pos)) > -1; ) ++this.curLine, m = this.lineStart = l;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(n + 2, c), n, this.pos, r, this.curPosition());
      }, f.skipLineComment = function(r) {
        var n, c = this.pos;
        this.isLookahead || (n = this.options.onComment && this.curPosition());
        for (var l = this.input.charCodeAt(this.pos += r); this.pos < this.input.length && !$(l); ) l = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(c + r, this.pos), c, this.pos, n, this.curPosition());
      }, f.finishToken = function(r, n) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var c = this.type;
        this.type = r, this.value = n, this.isLookahead || this.updateContext(c);
      }, f.resetStartLocation = function(r, n, c) {
        r.start = n, r.loc.start = c, this.options.ranges && (r.range[0] = n);
      }, f.isLineTerminator = function() {
        return this.eat(o.semi) || T.prototype.canInsertSemicolon.call(this);
      }, f.hasFollowingLineBreak = function() {
        return Di.lastIndex = this.end, Di.test(this.input);
      }, f.addExtra = function(r, n, c, l) {
        if (l === void 0 && (l = !0), r) {
          var m = r.extra = r.extra || {};
          l ? m[n] = c : Object.defineProperty(m, n, { enumerable: l, value: c });
        }
      }, f.isLiteralPropertyName = function() {
        return xt(this.type);
      }, f.hasPrecedingLineBreak = function() {
        return R.test(this.input.slice(this.lastTokEndLoc.index, this.start));
      }, f.createIdentifier = function(r, n) {
        return r.name = n, this.finishNode(r, "Identifier");
      }, f.resetStartLocationFromNode = function(r, n) {
        this.resetStartLocation(r, n.start, n.loc.start);
      }, f.isThisParam = function(r) {
        return r.type === "Identifier" && r.name === "this";
      }, f.isLookaheadContextual = function(r) {
        var n = this.nextTokenStart();
        return this.isUnparsedContextual(n, r);
      }, f.ts_type_isContextual = function(r, n) {
        return r === n && !this.containsEsc;
      }, f.ts_isContextual = function(r) {
        return this.type === r && !this.containsEsc;
      }, f.ts_isContextualWithState = function(r, n) {
        return r.type === n && !r.containsEsc;
      }, f.isContextualWithState = function(r, n) {
        return n.type === o.name && n.value === r && !n.containsEsc;
      }, f.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(o.plusMin) ? this.ts_isContextual(O.readonly) : (this.ts_isContextual(O.readonly) && this.next(), !!this.match(o.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(o._in))));
      }, f.tsInDisallowConditionalTypesContext = function(r) {
        var n = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return r();
        } finally {
          this.inDisallowConditionalTypesContext = n;
        }
      }, f.tsTryParseType = function() {
        return this.tsEatThenParseType(o.colon);
      }, f.match = function(r) {
        return this.type === r;
      }, f.matchJsx = function(r) {
        return this.type === y.tokTypes[r];
      }, f.ts_eatWithState = function(r, n, c) {
        if (r === c.type) {
          for (var l = 0; l < n; l++) this.next();
          return !0;
        }
        return !1;
      }, f.ts_eatContextualWithState = function(r, n, c) {
        if (dt.test(r)) {
          if (this.ts_isContextualWithState(c, O[r])) {
            for (var l = 0; l < n; l++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(r, c)) return !1;
        for (var m = 0; m < n; m++) this.next();
        return !0;
      }, f.canHaveLeadingDecorator = function() {
        return this.match(o._class);
      }, f.eatContextual = function(r) {
        return dt.test(r) ? !!this.ts_isContextual(O[r]) && (this.next(), !0) : T.prototype.eatContextual.call(this, r);
      }, f.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, f.tsParseExternalModuleReference = function() {
        var r = this.startNode();
        return this.expectContextual("require"), this.expect(o.parenL), this.match(o.string) || this.unexpected(), r.expression = this.parseExprAtom(), this.expect(o.parenR), this.finishNode(r, "TSExternalModuleReference");
      }, f.tsParseEntityName = function(r) {
        r === void 0 && (r = !0);
        for (var n = this.parseIdent(r); this.eat(o.dot); ) {
          var c = this.startNodeAtNode(n);
          c.left = n, c.right = this.parseIdent(r), n = this.finishNode(c, "TSQualifiedName");
        }
        return n;
      }, f.tsParseEnumMember = function() {
        var r = this.startNode();
        return r.id = this.match(o.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(o.eq) && (r.initializer = this.parseMaybeAssign()), this.finishNode(r, "TSEnumMember");
      }, f.tsParseEnumDeclaration = function(r, n) {
        return n === void 0 && (n = {}), n.const && (r.const = !0), n.declare && (r.declare = !0), this.expectContextual("enum"), r.id = this.parseIdent(), this.checkLValSimple(r.id), this.expect(o.braceL), r.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(o.braceR), this.finishNode(r, "TSEnumDeclaration");
      }, f.tsParseModuleBlock = function() {
        var r = this.startNode();
        for (T.prototype.enterScope.call(this, 512), this.expect(o.braceL), r.body = []; this.type !== o.braceR; ) {
          var n = this.parseStatement(null, !0);
          r.body.push(n);
        }
        return this.next(), T.prototype.exitScope.call(this), this.finishNode(r, "TSModuleBlock");
      }, f.tsParseAmbientExternalModuleDeclaration = function(r) {
        return this.ts_isContextual(O.global) ? (r.global = !0, r.id = this.parseIdent()) : this.match(o.string) ? r.id = this.parseLiteral(this.value) : this.unexpected(), this.match(o.braceL) ? (T.prototype.enterScope.call(this, se), r.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this)) : T.prototype.semicolon.call(this), this.finishNode(r, "TSModuleDeclaration");
      }, f.tsTryParseDeclare = function(r) {
        var n = this;
        if (!this.isLineTerminator()) {
          var c, l = this.type;
          return this.isContextual("let") && (l = o._var, c = "let"), this.tsInAmbientContext(function() {
            if (l === o._function) return r.declare = !0, n.parseFunctionStatement(r, !1, !0);
            if (l === o._class) return r.declare = !0, n.parseClass(r, !0);
            if (l === O.enum) return n.tsParseEnumDeclaration(r, { declare: !0 });
            if (l === O.global) return n.tsParseAmbientExternalModuleDeclaration(r);
            if (l === o._const || l === o._var) return n.match(o._const) && n.isLookaheadContextual("enum") ? (n.expect(o._const), n.tsParseEnumDeclaration(r, { const: !0, declare: !0 })) : (r.declare = !0, n.parseVarStatement(r, c || n.value, !0));
            if (l === O.interface) {
              var m = n.tsParseInterfaceDeclaration(r, { declare: !0 });
              if (m) return m;
            }
            return Z(l) ? n.tsParseDeclaration(r, n.value, !0) : void 0;
          });
        }
      }, f.tsIsListTerminator = function(r) {
        switch (r) {
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
      }, f.tsParseDelimitedListWorker = function(r, n, c, l) {
        for (var m = [], v = -1; !this.tsIsListTerminator(r); ) {
          v = -1;
          var x = n();
          if (x == null) return;
          if (m.push(x), !this.eat(o.comma)) {
            if (this.tsIsListTerminator(r)) break;
            return void (c && this.expect(o.comma));
          }
          v = this.lastTokStart;
        }
        return l && (l.value = v), m;
      }, f.tsParseDelimitedList = function(r, n, c) {
        return (function(l) {
          if (l == null) throw new Error("Unexpected " + l + " value.");
          return l;
        })(this.tsParseDelimitedListWorker(r, n, !0, c));
      }, f.tsParseBracketedList = function(r, n, c, l, m) {
        l || this.expect(c ? o.bracketL : o.relational);
        var v = this.tsParseDelimitedList(r, n, m);
        return this.expect(c ? o.bracketR : o.relational), v;
      }, f.tsParseTypeParameterName = function() {
        return this.parseIdent().name;
      }, f.tsEatThenParseType = function(r) {
        return this.match(r) ? this.tsNextThenParseType() : void 0;
      }, f.tsExpectThenParseType = function(r) {
        var n = this;
        return this.tsDoThenParseType(function() {
          return n.expect(r);
        });
      }, f.tsNextThenParseType = function() {
        var r = this;
        return this.tsDoThenParseType(function() {
          return r.next();
        });
      }, f.tsDoThenParseType = function(r) {
        var n = this;
        return this.tsInType(function() {
          return r(), n.tsParseType();
        });
      }, f.tsSkipParameterStart = function() {
        if (Z(this.type) || this.match(o._this)) return this.next(), !0;
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
      }, f.tsIsUnambiguouslyStartOfFunctionType = function() {
        return this.next(), !!(this.match(o.parenR) || this.match(o.ellipsis) || this.tsSkipParameterStart() && (this.match(o.colon) || this.match(o.comma) || this.match(o.question) || this.match(o.eq) || this.match(o.parenR) && (this.next(), this.match(o.arrow))));
      }, f.tsIsStartOfFunctionType = function() {
        return !!this.tsMatchLeftRelational() || this.match(o.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }, f.tsInAllowConditionalTypesContext = function(r) {
        var n = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !1;
        try {
          return r();
        } finally {
          this.inDisallowConditionalTypesContext = n;
        }
      }, f.tsParseBindingListForSignature = function() {
        var r = this;
        return T.prototype.parseBindingList.call(this, o.parenR, !0, !0).map(function(n) {
          return n.type !== "Identifier" && n.type !== "RestElement" && n.type !== "ObjectPattern" && n.type !== "ArrayPattern" && r.raise(n.start, I.UnsupportedSignatureParameterKind(n.type)), n;
        });
      }, f.tsParseTypePredicateAsserts = function() {
        if (this.type !== O.asserts) return !1;
        var r = this.containsEsc;
        return this.next(), !(!Z(this.type) && !this.match(o._this) || (r && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, f.tsParseThisTypeNode = function() {
        var r = this.startNode();
        return this.next(), this.finishNode(r, "TSThisType");
      }, f.tsParseTypeAnnotation = function(r, n) {
        var c = this;
        return r === void 0 && (r = !0), n === void 0 && (n = this.startNode()), this.tsInType(function() {
          r && c.expect(o.colon), n.typeAnnotation = c.tsParseType();
        }), this.finishNode(n, "TSTypeAnnotation");
      }, f.tsParseThisTypePredicate = function(r) {
        this.next();
        var n = this.startNodeAtNode(r);
        return n.parameterName = r, n.typeAnnotation = this.tsParseTypeAnnotation(!1), n.asserts = !1, this.finishNode(n, "TSTypePredicate");
      }, f.tsParseThisTypeOrThisTypePredicate = function() {
        var r = this.tsParseThisTypeNode();
        return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(r) : r;
      }, f.tsParseTypePredicatePrefix = function() {
        var r = this.parseIdent();
        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), r;
      }, f.tsParseTypeOrTypePredicateAnnotation = function(r) {
        var n = this;
        return this.tsInType(function() {
          var c = n.startNode();
          n.expect(r);
          var l = n.startNode(), m = !!n.tsTryParse(n.tsParseTypePredicateAsserts.bind(n));
          if (m && n.match(o._this)) {
            var v = n.tsParseThisTypeOrThisTypePredicate();
            return v.type === "TSThisType" ? (l.parameterName = v, l.asserts = !0, l.typeAnnotation = null, v = n.finishNode(l, "TSTypePredicate")) : (n.resetStartLocationFromNode(v, l), v.asserts = !0), c.typeAnnotation = v, n.finishNode(c, "TSTypeAnnotation");
          }
          var x = n.tsIsIdentifier() && n.tsTryParse(n.tsParseTypePredicatePrefix.bind(n));
          if (!x) return m ? (l.parameterName = n.parseIdent(), l.asserts = m, l.typeAnnotation = null, c.typeAnnotation = n.finishNode(l, "TSTypePredicate"), n.finishNode(c, "TSTypeAnnotation")) : n.tsParseTypeAnnotation(!1, c);
          var g = n.tsParseTypeAnnotation(!1);
          return l.parameterName = x, l.typeAnnotation = g, l.asserts = m, c.typeAnnotation = n.finishNode(l, "TSTypePredicate"), n.finishNode(c, "TSTypeAnnotation");
        });
      }, f.tsFillSignature = function(r, n) {
        var c = r === o.arrow;
        n.typeParameters = this.tsTryParseTypeParameters(), this.expect(o.parenL), n.parameters = this.tsParseBindingListForSignature(), (c || this.match(r)) && (n.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(r));
      }, f.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== o._const) return null;
        this.next();
        var r = this.tsParseTypeReference();
        return r.typeParameters && this.raise(r.typeName.start, I.CannotFindName({ name: "const" })), r;
      }, f.tsParseFunctionOrConstructorType = function(r, n) {
        var c = this, l = this.startNode();
        return r === "TSConstructorType" && (l.abstract = !!n, n && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return c.tsFillSignature(o.arrow, l);
        }), this.finishNode(l, r);
      }, f.tsParseUnionOrIntersectionType = function(r, n, c) {
        var l = this.startNode(), m = this.eat(c), v = [];
        do
          v.push(n());
        while (this.eat(c));
        return v.length !== 1 || m ? (l.types = v, this.finishNode(l, r)) : v[0];
      }, f.tsCheckTypeAnnotationForReadOnly = function(r) {
        switch (r.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(r.start, I.UnexpectedReadonly);
        }
      }, f.tsParseTypeOperator = function() {
        var r = this.startNode(), n = this.value;
        return this.next(), r.operator = n, r.typeAnnotation = this.tsParseTypeOperatorOrHigher(), n === "readonly" && this.tsCheckTypeAnnotationForReadOnly(r), this.finishNode(r, "TSTypeOperator");
      }, f.tsParseConstraintForInferType = function() {
        var r = this;
        if (this.eat(o._extends)) {
          var n = this.tsInDisallowConditionalTypesContext(function() {
            return r.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(o.question)) return n;
        }
      }, f.tsParseInferType = function() {
        var r = this, n = this.startNode();
        this.expectContextual("infer");
        var c = this.startNode();
        return c.name = this.tsParseTypeParameterName(), c.constraint = this.tsTryParse(function() {
          return r.tsParseConstraintForInferType();
        }), n.typeParameter = this.finishNode(c, "TSTypeParameter"), this.finishNode(n, "TSInferType");
      }, f.tsParseLiteralTypeNode = function() {
        var r = this, n = this.startNode();
        return n.literal = (function() {
          switch (r.type) {
            case o.num:
            case o.string:
            case o._true:
            case o._false:
              return r.parseExprAtom();
            default:
              r.unexpected();
          }
        })(), this.finishNode(n, "TSLiteralType");
      }, f.tsParseImportType = function() {
        var r = this.startNode();
        return this.expect(o._import), this.expect(o.parenL), this.match(o.string) || this.raise(this.start, I.UnsupportedImportTypeArgument), r.argument = this.parseExprAtom(), this.expect(o.parenR), this.eat(o.dot) && (r.qualifier = this.tsParseEntityName()), this.tsMatchLeftRelational() && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSImportType");
      }, f.tsParseTypeQuery = function() {
        var r = this.startNode();
        return this.expect(o._typeof), r.exprName = this.match(o._import) ? this.tsParseImportType() : this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSTypeQuery");
      }, f.tsParseMappedTypeParameter = function() {
        var r = this.startNode();
        return r.name = this.tsParseTypeParameterName(), r.constraint = this.tsExpectThenParseType(o._in), this.finishNode(r, "TSTypeParameter");
      }, f.tsParseMappedType = function() {
        var r = this.startNode();
        return this.expect(o.braceL), this.match(o.plusMin) ? (r.readonly = this.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (r.readonly = !0), this.expect(o.bracketL), r.typeParameter = this.tsParseMappedTypeParameter(), r.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(o.bracketR), this.match(o.plusMin) ? (r.optional = this.value, this.next(), this.expect(o.question)) : this.eat(o.question) && (r.optional = !0), r.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(o.braceR), this.finishNode(r, "TSMappedType");
      }, f.tsParseTypeLiteral = function() {
        var r = this.startNode();
        return r.members = this.tsParseObjectTypeMembers(), this.finishNode(r, "TSTypeLiteral");
      }, f.tsParseTupleElementType = function() {
        var r = this.startLoc, n = this.start, c = this.eat(o.ellipsis), l = this.tsParseType(), m = this.eat(o.question);
        if (this.eat(o.colon)) {
          var v = this.startNodeAtNode(l);
          v.optional = m, l.type !== "TSTypeReference" || l.typeParameters || l.typeName.type !== "Identifier" ? (this.raise(l.start, I.InvalidTupleMemberLabel), v.label = l) : v.label = l.typeName, v.elementType = this.tsParseType(), l = this.finishNode(v, "TSNamedTupleMember");
        } else if (m) {
          var x = this.startNodeAtNode(l);
          x.typeAnnotation = l, l = this.finishNode(x, "TSOptionalType");
        }
        if (c) {
          var g = this.startNodeAt(n, r);
          g.typeAnnotation = l, l = this.finishNode(g, "TSRestType");
        }
        return l;
      }, f.tsParseTupleType = function() {
        var r = this, n = this.startNode();
        n.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
        var c = !1, l = null;
        return n.elementTypes.forEach(function(m) {
          var v = m.type;
          !c || v === "TSRestType" || v === "TSOptionalType" || v === "TSNamedTupleMember" && m.optional || r.raise(m.start, I.OptionalTypeBeforeRequired), c || (c = v === "TSNamedTupleMember" && m.optional || v === "TSOptionalType");
          var x = v;
          v === "TSRestType" && (x = (m = m.typeAnnotation).type);
          var g = x === "TSNamedTupleMember";
          l != null || (l = g), l !== g && r.raise(m.start, I.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(n, "TSTupleType");
      }, f.tsParseTemplateLiteralType = function() {
        var r = this.startNode();
        return r.literal = this.parseTemplate({ isTagged: !1 }), this.finishNode(r, "TSLiteralType");
      }, f.tsParseTypeReference = function() {
        var r = this.startNode();
        return r.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSTypeReference");
      }, f.tsMatchLeftRelational = function() {
        return this.match(o.relational) && this.value === "<";
      }, f.tsMatchRightRelational = function() {
        return this.match(o.relational) && this.value === ">";
      }, f.tsParseParenthesizedType = function() {
        var r = this.startNode();
        return this.expect(o.parenL), r.typeAnnotation = this.tsParseType(), this.expect(o.parenR), this.finishNode(r, "TSParenthesizedType");
      }, f.tsParseNonArrayType = function() {
        switch (this.type) {
          case o.string:
          case o.num:
          case o._true:
          case o._false:
            return this.tsParseLiteralTypeNode();
          case o.plusMin:
            if (this.value === "-") {
              var r = this.startNode();
              return this.lookahead().type !== o.num && this.unexpected(), r.literal = this.parseMaybeUnary(), this.finishNode(r, "TSLiteralType");
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
            var n = this.type;
            if (Z(n) || n === o._void || n === o._null) {
              var c = n === o._void ? "TSVoidKeyword" : n === o._null ? "TSNullKeyword" : (function(m) {
                switch (m) {
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
              if (c !== void 0 && this.lookaheadCharCode() !== 46) {
                var l = this.startNode();
                return this.next(), this.finishNode(l, c);
              }
              return this.tsParseTypeReference();
            }
        }
        this.unexpected();
      }, f.tsParseArrayTypeOrHigher = function() {
        for (var r = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(o.bracketL); ) if (this.match(o.bracketR)) {
          var n = this.startNodeAtNode(r);
          n.elementType = r, this.expect(o.bracketR), r = this.finishNode(n, "TSArrayType");
        } else {
          var c = this.startNodeAtNode(r);
          c.objectType = r, c.indexType = this.tsParseType(), this.expect(o.bracketR), r = this.finishNode(c, "TSIndexedAccessType");
        }
        return r;
      }, f.tsParseTypeOperatorOrHigher = function() {
        var r = this;
        return fr(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
          return r.tsParseArrayTypeOrHigher();
        });
      }, f.tsParseIntersectionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), o.bitwiseAND);
      }, f.tsParseUnionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), o.bitwiseOR);
      }, f.tsParseNonConditionalType = function() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(o._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
      }, f.tsParseType = function() {
        var r = this;
        Vi(this.inType);
        var n = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(o._extends)) return n;
        var c = this.startNodeAtNode(n);
        return c.checkType = n, c.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return r.tsParseNonConditionalType();
        }), this.expect(o.question), c.trueType = this.tsInAllowConditionalTypesContext(function() {
          return r.tsParseType();
        }), this.expect(o.colon), c.falseType = this.tsInAllowConditionalTypesContext(function() {
          return r.tsParseType();
        }), this.finishNode(c, "TSConditionalType");
      }, f.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!Z(this.type) && (this.next(), this.match(o.colon));
      }, f.tsInType = function(r) {
        var n = this.inType;
        this.inType = !0;
        try {
          return r();
        } finally {
          this.inType = n;
        }
      }, f.tsTryParseIndexSignature = function(r) {
        if (this.match(o.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(o.bracketL);
          var n = this.parseIdent();
          n.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(n), this.expect(o.bracketR), r.parameters = [n];
          var c = this.tsTryParseTypeAnnotation();
          return c && (r.typeAnnotation = c), this.tsParseTypeMemberSemicolon(), this.finishNode(r, "TSIndexSignature");
        }
      }, f.tsParseNoneModifiers = function(r) {
        this.tsParseModifiers({ modified: r, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: I.InvalidModifierOnTypeParameterPositions });
      }, f.tsParseTypeParameter = function(r) {
        r === void 0 && (r = this.tsParseNoneModifiers.bind(this));
        var n = this.startNode();
        return r(n), n.name = this.tsParseTypeParameterName(), n.constraint = this.tsEatThenParseType(o._extends), n.default = this.tsEatThenParseType(o.eq), this.finishNode(n, "TSTypeParameter");
      }, f.tsParseTypeParameters = function(r) {
        var n = this.startNode();
        this.tsMatchLeftRelational() || this.matchJsx("jsxTagStart") ? this.next() : this.unexpected();
        var c = { value: -1 };
        return n.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, r), !1, !0, c), n.params.length === 0 && this.raise(this.start, I.EmptyTypeParameters), c.value !== -1 && this.addExtra(n, "trailingComma", c.value), this.finishNode(n, "TSTypeParameterDeclaration");
      }, f.tsTryParseTypeParameters = function(r) {
        if (this.tsMatchLeftRelational()) return this.tsParseTypeParameters(r);
      }, f.tsTryParse = function(r) {
        var n = this.getCurLookaheadState(), c = r();
        return c !== void 0 && c !== !1 ? c : void this.setLookaheadState(n);
      }, f.tsTokenCanFollowModifier = function() {
        return (this.match(o.bracketL) || this.match(o.braceL) || this.match(o.star) || this.match(o.ellipsis) || this.match(o.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, f.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, f.tsParseModifier = function(r, n) {
        if (Z(this.type) || this.type === o._in) {
          var c = this.value;
          if (r.indexOf(c) !== -1 && !this.containsEsc) {
            if (n && this.tsIsStartOfStaticBlocks()) return;
            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return c;
          }
        }
      }, f.tsParseModifiersByMap = function(r) {
        for (var n = r.modified, c = r.map, l = 0, m = Object.keys(c); l < m.length; l++) {
          var v = m[l];
          n[v] = c[v];
        }
      }, f.tsParseModifiers = function(r) {
        for (var n = this, c = r.modified, l = r.allowedModifiers, m = r.disallowedModifiers, v = r.stopOnStartOfClassStaticBlock, x = r.errorTemplate, g = x === void 0 ? I.InvalidModifierOnTypeMember : x, b = {}, w = function(K, H, J, st) {
          H === J && c[st] && n.raise(K.column, I.InvalidModifiersOrder({ orderedModifiers: [J, st] }));
        }, N = function(K, H, J, st) {
          (c[J] && H === st || c[st] && H === J) && n.raise(K.column, I.IncompatibleModifiers({ modifiers: [J, st] }));
        }; ; ) {
          var D = this.startLoc, C = this.tsParseModifier(l.concat(m ?? []), v);
          if (!C) break;
          Fi(C) ? c.accessibility ? this.raise(this.start, I.DuplicateAccessibilityModifier()) : (w(D, C, C, "override"), w(D, C, C, "static"), w(D, C, C, "readonly"), w(D, C, C, "accessor"), b.accessibility = C, c.accessibility = C) : da(C) ? c[C] ? this.raise(this.start, I.DuplicateModifier({ modifier: C })) : (w(D, C, "in", "out"), b[C] = C, c[C] = !0) : fa(C) ? c[C] ? this.raise(this.start, I.DuplicateModifier({ modifier: C })) : (N(D, C, "accessor", "readonly"), N(D, C, "accessor", "static"), N(D, C, "accessor", "override"), b[C] = C, c[C] = !0) : Object.hasOwnProperty.call(c, C) ? this.raise(this.start, I.DuplicateModifier({ modifier: C })) : (w(D, C, "static", "readonly"), w(D, C, "static", "override"), w(D, C, "override", "readonly"), w(D, C, "abstract", "override"), N(D, C, "declare", "override"), N(D, C, "static", "abstract"), b[C] = C, c[C] = !0), m != null && m.includes(C) && this.raise(this.start, g);
        }
        return b;
      }, f.tsParseInOutModifiers = function(r) {
        this.tsParseModifiers({ modified: r, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: I.InvalidModifierOnTypeParameter });
      }, f.tsParseTypeArguments = function() {
        var r = this, n = this.startNode();
        return n.params = this.tsInType(function() {
          return r.tsInNoContext(function() {
            return r.expect(o.relational), r.tsParseDelimitedList("TypeParametersOrArguments", r.tsParseType.bind(r));
          });
        }), n.params.length === 0 && this.raise(this.start, I.EmptyTypeArguments), this.exprAllowed = !1, this.expect(o.relational), this.finishNode(n, "TSTypeParameterInstantiation");
      }, f.tsParseHeritageClause = function(r) {
        var n = this, c = this.start, l = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var m = n.startNode();
          return m.expression = n.tsParseEntityName(), n.tsMatchLeftRelational() && (m.typeParameters = n.tsParseTypeArguments()), n.finishNode(m, "TSExpressionWithTypeArguments");
        });
        return l.length || this.raise(c, I.EmptyHeritageClauseType({ token: r })), l;
      }, f.tsParseTypeMemberSemicolon = function() {
        this.eat(o.comma) || this.isLineTerminator() || this.expect(o.semi);
      }, f.tsTryParseAndCatch = function(r) {
        var n = this.tryParse(function(c) {
          return r() || c();
        });
        if (!n.aborted && n.node) return n.error && this.setLookaheadState(n.failState), n.node;
      }, f.tsParseSignatureMember = function(r, n) {
        return this.tsFillSignature(o.colon, n), this.tsParseTypeMemberSemicolon(), this.finishNode(n, r);
      }, f.tsParsePropertyOrMethodSignature = function(r, n) {
        this.eat(o.question) && (r.optional = !0);
        var c = r;
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) {
          n && this.raise(r.start, I.ReadonlyForMethodSignature);
          var l = c;
          l.kind && this.tsMatchLeftRelational() && this.raise(this.start, I.AccesorCannotHaveTypeParameters), this.tsFillSignature(o.colon, l), this.tsParseTypeMemberSemicolon();
          var m = "parameters", v = "typeAnnotation";
          if (l.kind === "get") l[m].length > 0 && (this.raise(this.start, "A 'get' accesor must not have any formal parameters."), this.isThisParam(l[m][0]) && this.raise(this.start, I.AccesorCannotDeclareThisParameter));
          else if (l.kind === "set") {
            if (l[m].length !== 1) this.raise(this.start, "A 'get' accesor must not have any formal parameters.");
            else {
              var x = l[m][0];
              this.isThisParam(x) && this.raise(this.start, I.AccesorCannotDeclareThisParameter), x.type === "Identifier" && x.optional && this.raise(this.start, I.SetAccesorCannotHaveOptionalParameter), x.type === "RestElement" && this.raise(this.start, I.SetAccesorCannotHaveRestParameter);
            }
            l[v] && this.raise(l[v].start, I.SetAccesorCannotHaveReturnType);
          } else l.kind = "method";
          return this.finishNode(l, "TSMethodSignature");
        }
        var g = c;
        n && (g.readonly = !0);
        var b = this.tsTryParseTypeAnnotation();
        return b && (g.typeAnnotation = b), this.tsParseTypeMemberSemicolon(), this.finishNode(g, "TSPropertySignature");
      }, f.tsParseTypeMember = function() {
        var r = this.startNode();
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", r);
        if (this.match(o._new)) {
          var n = this.startNode();
          return this.next(), this.match(o.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", r) : (r.key = this.createIdentifier(n, "new"), this.tsParsePropertyOrMethodSignature(r, !1));
        }
        return this.tsParseModifiers({ modified: r, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(r) || (this.parsePropertyName(r), r.computed || r.key.type !== "Identifier" || r.key.name !== "get" && r.key.name !== "set" || !this.tsTokenCanFollowModifier() || (r.kind = r.key.name, this.parsePropertyName(r)), this.tsParsePropertyOrMethodSignature(r, !!r.readonly));
      }, f.tsParseList = function(r, n) {
        for (var c = []; !this.tsIsListTerminator(r); ) c.push(n());
        return c;
      }, f.tsParseObjectTypeMembers = function() {
        this.expect(o.braceL);
        var r = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(o.braceR), r;
      }, f.tsParseInterfaceDeclaration = function(r, n) {
        if (n === void 0 && (n = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), n.declare && (r.declare = !0), Z(this.type) ? (r.id = this.parseIdent(), this.checkLValSimple(r.id, 7)) : (r.id = null, this.raise(this.start, I.MissingInterfaceName)), r.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(o._extends) && (r.extends = this.tsParseHeritageClause("extends"));
        var c = this.startNode();
        return c.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), r.body = this.finishNode(c, "TSInterfaceBody"), this.finishNode(r, "TSInterfaceDeclaration");
      }, f.tsParseAbstractDeclaration = function(r) {
        if (this.match(o._class)) return r.abstract = !0, this.parseClass(r, !0);
        if (this.ts_isContextual(O.interface)) {
          if (!this.hasFollowingLineBreak()) return r.abstract = !0, this.tsParseInterfaceDeclaration(r);
        } else this.unexpected(r.start);
      }, f.tsIsDeclarationStart = function() {
        return lr(this.type);
      }, f.tsParseExpressionStatement = function(r, n) {
        switch (n.name) {
          case "declare":
            var c = this.tsTryParseDeclare(r);
            if (c) return c.declare = !0, c;
            break;
          case "global":
            if (this.match(o.braceL)) {
              T.prototype.enterScope.call(this, se);
              var l = r;
              return l.global = !0, l.id = n, l.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this), this.finishNode(l, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(r, n.name, !1);
        }
      }, f.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, f.tsIsExportDefaultSpecifier = function() {
        var r = this.type, n = this.isAsyncFunction(), c = this.isLet();
        if (Z(r)) {
          if (n && !this.containsEsc || c) return !1;
          if ((r === O.type || r === O.interface) && !this.containsEsc) {
            var l = this.lookahead();
            if (Z(l.type) && !this.isContextualWithState("from", l) || l.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var m = this.nextTokenStart(), v = this.isUnparsedContextual(m, "from");
        if (this.input.charCodeAt(m) === 44 || Z(this.type) && v) return !0;
        if (this.match(o._default) && v) {
          var x = this.input.charCodeAt(this.nextTokenStartSince(m + 4));
          return x === 34 || x === 39;
        }
        return !1;
      }, f.tsInAmbientContext = function(r) {
        var n = this.isAmbientContext;
        this.isAmbientContext = !0;
        try {
          return r();
        } finally {
          this.isAmbientContext = n;
        }
      }, f.tsCheckLineTerminator = function(r) {
        return r ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
      }, f.tsParseModuleOrNamespaceDeclaration = function(r, n) {
        if (n === void 0 && (n = !1), r.id = this.parseIdent(), n || this.checkLValSimple(r.id, 8), this.eat(o.dot)) {
          var c = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(c, !0), r.body = c;
        } else T.prototype.enterScope.call(this, se), r.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this);
        return this.finishNode(r, "TSModuleDeclaration");
      }, f.checkLValSimple = function(r, n, c) {
        return n === void 0 && (n = 0), T.prototype.checkLValSimple.call(this, r, n, c);
      }, f.tsParseTypeAliasDeclaration = function(r) {
        var n = this;
        return r.id = this.parseIdent(), this.checkLValSimple(r.id, 6), r.typeAnnotation = this.tsInType(function() {
          if (r.typeParameters = n.tsTryParseTypeParameters(n.tsParseInOutModifiers.bind(n)), n.expect(o.eq), n.ts_isContextual(O.interface) && n.lookahead().type !== o.dot) {
            var c = n.startNode();
            return n.next(), n.finishNode(c, "TSIntrinsicKeyword");
          }
          return n.tsParseType();
        }), this.semicolon(), this.finishNode(r, "TSTypeAliasDeclaration");
      }, f.tsParseDeclaration = function(r, n, c) {
        switch (n) {
          case "abstract":
            if (this.tsCheckLineTerminator(c) && (this.match(o._class) || Z(this.type))) return this.tsParseAbstractDeclaration(r);
            break;
          case "module":
            if (this.tsCheckLineTerminator(c)) {
              if (this.match(o.string)) return this.tsParseAmbientExternalModuleDeclaration(r);
              if (Z(this.type)) return this.tsParseModuleOrNamespaceDeclaration(r);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(c) && Z(this.type)) return this.tsParseModuleOrNamespaceDeclaration(r);
            break;
          case "type":
            if (this.tsCheckLineTerminator(c) && Z(this.type)) return this.tsParseTypeAliasDeclaration(r);
        }
      }, f.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, f.tsParseImportEqualsDeclaration = function(r, n) {
        r.isExport = n || !1, r.id = this.parseIdent(), this.checkLValSimple(r.id, 2), T.prototype.expect.call(this, o.eq);
        var c = this.tsParseModuleReference();
        return r.importKind === "type" && c.type !== "TSExternalModuleReference" && this.raise(c.start, I.ImportAliasHasImportType), r.moduleReference = c, T.prototype.semicolon.call(this), this.finishNode(r, "TSImportEqualsDeclaration");
      }, f.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var r = this.type;
        if (Z(r)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((r === O.type || r === O.interface) && !this.containsEsc) {
            var n = this.lookahead();
            if (Z(n.type) && !this.isContextualWithState("from", n) || n.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var c = this.nextTokenStart(), l = this.isUnparsedContextual(c, "from");
        if (this.input.charCodeAt(c) === 44 || Z(this.type) && l) return !0;
        if (this.match(o._default) && l) {
          var m = this.input.charCodeAt(this.nextTokenStartSince(c + 4));
          return m === 34 || m === 39;
        }
        return !1;
      }, f.parseTemplate = function(r) {
        var n = (r === void 0 ? {} : r).isTagged, c = n !== void 0 && n, l = this.startNode();
        this.next(), l.expressions = [];
        var m = this.parseTemplateElement({ isTagged: c });
        for (l.quasis = [m]; !m.tail; ) this.type === o.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(o.dollarBraceL), l.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(o.braceR), l.quasis.push(m = this.parseTemplateElement({ isTagged: c }));
        return this.next(), this.finishNode(l, "TemplateLiteral");
      }, f.parseFunction = function(r, n, c, l, m) {
        this.initFunction(r), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !l) && (this.type === o.star && 2 & n && this.unexpected(), r.generator = this.eat(o.star)), this.options.ecmaVersion >= 8 && (r.async = !!l), 1 & n && (r.id = 4 & n && this.type !== o.name ? null : this.parseIdent());
        var v = this.yieldPos, x = this.awaitPos, g = this.awaitIdentPos, b = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ge(r.async, r.generator)), 1 & n || (r.id = this.type === o.name ? this.parseIdent() : null), this.parseFunctionParams(r);
        var w = 1 & n;
        return this.parseFunctionBody(r, c, !1, m, { isFunctionDeclaration: w }), this.yieldPos = v, this.awaitPos = x, this.awaitIdentPos = g, 1 & n && r.id && !(2 & n) && this.checkLValSimple(r.id, r.body ? this.strict || r.generator || r.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = b, this.finishNode(r, w ? "FunctionDeclaration" : "FunctionExpression");
      }, f.parseFunctionBody = function(r, n, c, l, m) {
        n === void 0 && (n = !1), c === void 0 && (c = !1), l === void 0 && (l = !1), this.match(o.colon) && (r.returnType = this.tsParseTypeOrTypePredicateAnnotation(o.colon));
        var v = m != null && m.isFunctionDeclaration ? "TSDeclareFunction" : m != null && m.isClassMethod ? "TSDeclareMethod" : void 0;
        return v && !this.match(o.braceL) && this.isLineTerminator() ? this.finishNode(r, v) : v === "TSDeclareFunction" && this.isAmbientContext && (this.raise(r.start, I.DeclareFunctionHasImplementation), r.declare) ? (T.prototype.parseFunctionBody.call(this, r, n, c, !1), this.finishNode(r, v)) : (T.prototype.parseFunctionBody.call(this, r, n, c, l), r);
      }, f.parseNew = function() {
        var r;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var n = this.startNode(), c = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(o.dot)) {
          n.meta = c;
          var l = this.containsEsc;
          return n.property = this.parseIdent(!0), n.property.name !== "target" && this.raiseRecoverable(n.property.start, "The only valid meta property for new is 'new.target'"), l && this.raiseRecoverable(n.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(n.start, "'new.target' can only be used in functions and class static block"), this.finishNode(n, "MetaProperty");
        }
        var m = this.start, v = this.startLoc, x = this.type === o._import;
        n.callee = this.parseSubscripts(this.parseExprAtom(), m, v, !0, !1), x && n.callee.type === "ImportExpression" && this.raise(m, "Cannot use new with import()");
        var g = n.callee;
        return g.type !== "TSInstantiationExpression" || (r = g.extra) != null && r.parenthesized || (n.typeParameters = g.typeParameters, n.callee = g.expression), n.arguments = this.eat(o.parenL) ? this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(n, "NewExpression");
      }, f.parseExprOp = function(r, n, c, l, m) {
        var v;
        if (o._in.binop > l && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (v = "TSAsExpression"), u && this.isContextual("satisfies") && (v = "TSSatisfiesExpression"), v)) {
          var x = this.startNodeAt(n, c);
          x.expression = r;
          var g = this.tsTryNextParseConstantContext();
          return x.typeAnnotation = g || this.tsNextThenParseType(), this.finishNode(x, v), this.reScan_lt_gt(), this.parseExprOp(x, n, c, l, m);
        }
        return T.prototype.parseExprOp.call(this, r, n, c, l, m);
      }, f.parseImportSpecifiers = function() {
        var r = [], n = !0;
        if (y.tokenIsIdentifier(this.type) && (r.push(this.parseImportDefaultSpecifier()), !this.eat(o.comma))) return r;
        if (this.type === o.star) return r.push(this.parseImportNamespaceSpecifier()), r;
        for (this.expect(o.braceL); !this.eat(o.braceR); ) {
          if (n) n = !1;
          else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
          r.push(this.parseImportSpecifier());
        }
        return r;
      }, f.parseImport = function(r) {
        var n = this.lookahead();
        if (r.importKind = "value", this.importOrExportOuterKind = "value", Z(n.type) || this.match(o.star) || this.match(o.braceL)) {
          var c = this.lookahead(2);
          if (c.type !== o.comma && !this.isContextualWithState("from", c) && c.type !== o.eq && this.ts_eatContextualWithState("type", 1, n) && (this.importOrExportOuterKind = "type", r.importKind = "type", n = this.lookahead(), c = this.lookahead(2)), Z(n.type) && c.type === o.eq) {
            this.next();
            var l = this.tsParseImportEqualsDeclaration(r);
            return this.importOrExportOuterKind = "value", l;
          }
        }
        return this.next(), this.type === o.string ? (r.specifiers = [], r.source = this.parseExprAtom()) : (r.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), r.source = this.type === o.string ? this.parseExprAtom() : this.unexpected()), this.parseMaybeImportAttributes(r), this.semicolon(), this.finishNode(r, "ImportDeclaration"), this.importOrExportOuterKind = "value", r.importKind === "type" && r.specifiers.length > 1 && r.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(r.start, I.TypeImportCannotSpecifyDefaultAndNamed), r;
      }, f.parseExportDefaultDeclaration = function() {
        if (this.isAbstractClass()) {
          var r = this.startNode();
          return this.next(), r.abstract = !0, this.parseClass(r, !0);
        }
        if (this.match(O.interface)) {
          var n = this.tsParseInterfaceDeclaration(this.startNode());
          if (n) return n;
        }
        return T.prototype.parseExportDefaultDeclaration.call(this);
      }, f.parseExportAllDeclaration = function(r, n) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (r.exported = this.parseModuleExportName(), this.checkExport(n, r.exported, this.lastTokStart)) : r.exported = null), this.expectContextual("from"), this.type !== o.string && this.unexpected(), r.source = this.parseExprAtom(), this.parseMaybeImportAttributes(r), this.semicolon(), this.finishNode(r, "ExportAllDeclaration");
      }, f.parseDynamicImport = function(r) {
        if (this.next(), r.source = this.parseMaybeAssign(), this.eat(o.comma)) {
          var n = this.parseExpression();
          r.arguments = [n];
        }
        if (!this.eat(o.parenR)) {
          var c = this.start;
          this.eat(o.comma) && this.eat(o.parenR) ? this.raiseRecoverable(c, "Trailing comma is not allowed in import()") : this.unexpected(c);
        }
        return this.finishNode(r, "ImportExpression");
      }, f.parseExport = function(r, n) {
        var c = this.lookahead();
        if (this.ts_eatWithState(o._import, 2, c)) {
          this.ts_isContextual(O.type) && this.lookaheadCharCode() !== 61 ? (r.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (r.importKind = "value", this.importOrExportOuterKind = "value");
          var l = this.tsParseImportEqualsDeclaration(r, !0);
          return this.importOrExportOuterKind = void 0, l;
        }
        if (this.ts_eatWithState(o.eq, 2, c)) {
          var m = r;
          return m.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(m, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, c)) {
          var v = r;
          return this.expectContextual("namespace"), v.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(v, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(c, O.type) && this.lookahead(2).type === o.braceL ? (this.next(), this.importOrExportOuterKind = "type", r.exportKind = "type") : (this.importOrExportOuterKind = "value", r.exportKind = "value"), this.next(), this.eat(o.star)) return this.parseExportAllDeclaration(r, n);
        if (this.eat(o._default)) return this.checkExport(n, "default", this.lastTokStart), r.declaration = this.parseExportDefaultDeclaration(), this.finishNode(r, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) r.declaration = this.parseExportDeclaration(r), r.declaration.type === "VariableDeclaration" ? this.checkVariableExport(n, r.declaration.declarations) : this.checkExport(n, r.declaration.id, r.declaration.id.start), r.specifiers = [], r.source = null;
        else {
          if (r.declaration = null, r.specifiers = this.parseExportSpecifiers(n), this.eatContextual("from")) this.type !== o.string && this.unexpected(), r.source = this.parseExprAtom(), this.parseMaybeImportAttributes(r);
          else {
            for (var x, g = Mi(r.specifiers); !(x = g()).done; ) {
              var b = x.value;
              this.checkUnreserved(b.local), this.checkLocalExport(b.local), b.local.type === "Literal" && this.raise(b.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            r.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(r, "ExportNamedDeclaration");
      }, f.checkExport = function(r, n, c) {
        r && (typeof n != "string" && (n = n.type === "Identifier" ? n.name : n.value), r[n] = !0);
      }, f.parseMaybeDefault = function(r, n, c) {
        var l = T.prototype.parseMaybeDefault.call(this, r, n, c);
        return l.type === "AssignmentPattern" && l.typeAnnotation && l.right.start < l.typeAnnotation.start && this.raise(l.typeAnnotation.start, I.TypeAnnotationAfterAssign), l;
      }, f.typeCastToParameter = function(r) {
        return r.expression.typeAnnotation = r.typeAnnotation, this.resetEndLocation(r.expression, r.typeAnnotation.end), r.expression;
      }, f.toAssignableList = function(r, n) {
        for (var c = 0; c < r.length; c++) {
          var l = r[c];
          l?.type === "TSTypeCastExpression" && (r[c] = this.typeCastToParameter(l));
        }
        return T.prototype.toAssignableList.call(this, r, n);
      }, f.reportReservedArrowTypeParam = function(r) {
      }, f.parseExprAtom = function(r, n, c) {
        if (this.type === O.jsxText) return this.jsx_parseText();
        if (this.type === O.jsxTagStart) return this.jsx_parseElement();
        if (this.type === O.at) return this.parseDecorators(), this.parseExprAtom();
        if (Z(this.type)) {
          var l = this.potentialArrowAt === this.start, m = this.start, v = this.startLoc, x = this.containsEsc, g = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !x && g.name === "async" && !this.canInsertSemicolon() && this.eat(o._function)) return this.overrideContext(tt.f_expr), this.parseFunction(this.startNodeAt(m, v), 0, !1, !0, n);
          if (l && !this.canInsertSemicolon()) {
            if (this.eat(o.arrow)) return this.parseArrowExpression(this.startNodeAt(m, v), [g], !1, n);
            if (this.options.ecmaVersion >= 8 && g.name === "async" && this.type === o.name && !x && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return g = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(m, v), [g], !0, n);
          }
          return g;
        }
        return T.prototype.parseExprAtom.call(this, r, n, c);
      }, f.parseExprAtomDefault = function() {
        if (Z(this.type)) {
          var r = this.potentialArrowAt === this.start, n = this.containsEsc, c = this.parseIdent();
          if (!n && c.name === "async" && !this.canInsertSemicolon()) {
            var l = this.type;
            if (l === o._function) return this.next(), this.parseFunction(this.startNodeAtNode(c), void 0, !0, !0);
            if (Z(l)) {
              if (this.lookaheadCharCode() === 61) {
                var m = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(c), [m], !0);
              }
              return c;
            }
          }
          return r && this.match(o.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(c), [c], !1)) : c;
        }
        this.unexpected();
      }, f.parseIdentNode = function() {
        var r = this.startNode();
        return ye(this.type) ? (r.name = this.value, r) : T.prototype.parseIdentNode.call(this);
      }, f.parseVarStatement = function(r, n, c) {
        c === void 0 && (c = !1);
        var l = this.isAmbientContext;
        this.next(), T.prototype.parseVar.call(this, r, !1, n, c || l), this.semicolon();
        var m = this.finishNode(r, "VariableDeclaration");
        if (!l) return m;
        for (var v, x = Mi(m.declarations); !(v = x()).done; ) {
          var g = v.value, b = g.init;
          b && (n !== "const" || g.id.typeAnnotation ? this.raise(b.start, I.InitializerNotAllowedInAmbientContext) : b.type !== "StringLiteral" && b.type !== "BooleanLiteral" && b.type !== "NumericLiteral" && b.type !== "BigIntLiteral" && (b.type !== "TemplateLiteral" || b.expressions.length > 0) && !ma(b) && this.raise(b.start, I.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return m;
      }, f.parseStatement = function(r, n, c) {
        if (this.match(O.at) && this.parseDecorators(!0), this.match(o._const) && this.isLookaheadContextual("enum")) {
          var l = this.startNode();
          return this.expect(o._const), this.tsParseEnumDeclaration(l, { const: !0 });
        }
        if (this.ts_isContextual(O.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(O.interface)) {
          var m = this.tsParseInterfaceDeclaration(this.startNode());
          if (m) return m;
        }
        return T.prototype.parseStatement.call(this, r, n, c);
      }, f.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, f.parsePostMemberNameModifiers = function(r) {
        this.eat(o.question) && (r.optional = !0), r.readonly && this.match(o.parenL) && this.raise(r.start, I.ClassMethodHasReadonly), r.declare && this.match(o.parenL) && this.raise(r.start, I.ClassMethodHasDeclare);
      }, f.parseExpressionStatement = function(r, n) {
        return (n.type === "Identifier" ? this.tsParseExpressionStatement(r, n) : void 0) || T.prototype.parseExpressionStatement.call(this, r, n);
      }, f.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(O.at) || T.prototype.shouldParseExportStatement.call(this);
      }, f.parseConditional = function(r, n, c, l, m) {
        if (this.eat(o.question)) {
          var v = this.startNodeAt(n, c);
          return v.test = r, v.consequent = this.parseMaybeAssign(), this.expect(o.colon), v.alternate = this.parseMaybeAssign(l), this.finishNode(v, "ConditionalExpression");
        }
        return r;
      }, f.parseMaybeConditional = function(r, n) {
        var c = this, l = this.start, m = this.startLoc, v = this.parseExprOps(r, n);
        if (this.checkExpressionErrors(n)) return v;
        if (!this.maybeInArrowParameters || !this.match(o.question)) return this.parseConditional(v, l, m, r, n);
        var x = this.tryParse(function() {
          return c.parseConditional(v, l, m, r, n);
        });
        return x.node ? (x.error && this.setLookaheadState(x.failState), x.node) : (x.error && this.setOptionalParametersError(n, x.error), v);
      }, f.parseParenItem = function(r) {
        var n = this.start, c = this.startLoc;
        if (r = T.prototype.parseParenItem.call(this, r), this.eat(o.question) && (r.optional = !0, this.resetEndLocation(r)), this.match(o.colon)) {
          var l = this.startNodeAt(n, c);
          return l.expression = r, l.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(l, "TSTypeCastExpression");
        }
        return r;
      }, f.parseExportDeclaration = function(r) {
        var n = this;
        if (!this.isAmbientContext && this.ts_isContextual(O.declare)) return this.tsInAmbientContext(function() {
          return n.parseExportDeclaration(r);
        });
        var c = this.start, l = this.startLoc, m = this.eatContextual("declare");
        !m || !this.ts_isContextual(O.declare) && this.shouldParseExportStatement() || this.raise(this.start, I.ExpectedAmbientAfterExportDeclare);
        var v = Z(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return v ? ((v.type === "TSInterfaceDeclaration" || v.type === "TSTypeAliasDeclaration" || m) && (r.exportKind = "type"), m && (this.resetStartLocation(v, c, l), v.declare = !0), v) : null;
      }, f.parseClassId = function(r, n) {
        if (n || !this.isContextual("implements")) {
          T.prototype.parseClassId.call(this, r, n);
          var c = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          c && (r.typeParameters = c);
        }
      }, f.parseClassPropertyAnnotation = function(r) {
        r.optional || (this.value === "!" && this.eat(o.prefix) ? r.definite = !0 : this.eat(o.question) && (r.optional = !0));
        var n = this.tsTryParseTypeAnnotation();
        n && (r.typeAnnotation = n);
      }, f.parseClassField = function(r) {
        if (r.key.type === "PrivateIdentifier") r.abstract && this.raise(r.start, I.PrivateElementHasAbstract), r.accessibility && this.raise(r.start, I.PrivateElementHasAccessibility({ modifier: r.accessibility })), this.parseClassPropertyAnnotation(r);
        else if (this.parseClassPropertyAnnotation(r), this.isAmbientContext && (!r.readonly || r.typeAnnotation) && this.match(o.eq) && this.raise(this.start, I.DeclareClassFieldHasInitializer), r.abstract && this.match(o.eq)) {
          var n = r.key;
          this.raise(this.start, I.AbstractPropertyHasInitializer({ propertyName: n.type !== "Identifier" || r.computed ? "[" + this.input.slice(n.start, n.end) + "]" : n.name }));
        }
        return T.prototype.parseClassField.call(this, r);
      }, f.parseClassMethod = function(r, n, c, l) {
        var m = r.kind === "constructor", v = r.key.type === "PrivateIdentifier", x = this.tsTryParseTypeParameters();
        v ? (x && (r.typeParameters = x), r.accessibility && this.raise(r.start, I.PrivateMethodsHasAccessibility({ modifier: r.accessibility }))) : x && m && this.raise(x.start, I.ConstructorHasTypeParameters);
        var g = r.declare, b = r.kind;
        !(g !== void 0 && g) || b !== "get" && b !== "set" || this.raise(r.start, I.DeclareAccessor({ kind: b })), x && (r.typeParameters = x);
        var w = r.key;
        r.kind === "constructor" ? (n && this.raise(w.start, "Constructor can't be a generator"), c && this.raise(w.start, "Constructor can't be an async method")) : r.static && zi(r, "prototype") && this.raise(w.start, "Classes may not have a static property named prototype");
        var N = r.value = this.parseMethod(n, c, l, !0, r);
        return r.kind === "get" && N.params.length !== 0 && this.raiseRecoverable(N.start, "getter should have no params"), r.kind === "set" && N.params.length !== 1 && this.raiseRecoverable(N.start, "setter should have exactly one param"), r.kind === "set" && N.params[0].type === "RestElement" && this.raiseRecoverable(N.params[0].start, "Setter cannot use rest params"), this.finishNode(r, "MethodDefinition");
      }, f.isClassMethod = function() {
        return this.match(o.relational);
      }, f.parseClassElement = function(r) {
        var n = this;
        if (this.eat(o.semi)) return null;
        var c, l = this.options.ecmaVersion, m = this.startNode(), v = "", x = !1, g = !1, b = "method", w = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], N = this.tsParseModifiers({ modified: m, allowedModifiers: w, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: I.InvalidModifierOnTypeParameterPositions });
        c = !!N.static;
        var D = function() {
          if (!n.tsIsStartOfStaticBlocks()) {
            var C = n.tsTryParseIndexSignature(m);
            if (C) return m.abstract && n.raise(m.start, I.IndexSignatureHasAbstract), m.accessibility && n.raise(m.start, I.IndexSignatureHasAccessibility({ modifier: m.accessibility })), m.declare && n.raise(m.start, I.IndexSignatureHasDeclare), m.override && n.raise(m.start, I.IndexSignatureHasOverride), C;
            if (!n.inAbstractClass && m.abstract && n.raise(m.start, I.NonAbstractClassHasAbstractMethod), m.override && r && n.raise(m.start, I.OverrideNotInSubClass), m.static = c, c && (n.isClassElementNameStart() || n.type === o.star || (v = "static")), !v && l >= 8 && n.eatContextual("async") && (!n.isClassElementNameStart() && n.type !== o.star || n.canInsertSemicolon() ? v = "async" : g = !0), !v && (l >= 9 || !g) && n.eat(o.star) && (x = !0), !v && !g && !x) {
              var K = n.value;
              (n.eatContextual("get") || n.eatContextual("set")) && (n.isClassElementNameStart() ? b = K : v = K);
            }
            if (v ? (m.computed = !1, m.key = n.startNodeAt(n.lastTokStart, n.lastTokStartLoc), m.key.name = v, n.finishNode(m.key, "Identifier")) : n.parseClassElementName(m), n.parsePostMemberNameModifiers(m), n.isClassMethod() || l < 13 || n.type === o.parenL || b !== "method" || x || g) {
              var H = !m.static && zi(m, "constructor"), J = H && r;
              H && b !== "method" && n.raise(m.key.start, "Constructor can't have get/set modifier"), m.kind = H ? "constructor" : b, n.parseClassMethod(m, x, g, J);
            } else n.parseClassField(m);
            return m;
          }
          if (n.next(), n.next(), n.tsHasSomeModifiers(m, w) && n.raise(n.start, I.StaticBlockCannotHaveModifier), l >= 13) return T.prototype.parseClassStaticBlock.call(n, m), m;
        };
        return m.declare ? this.tsInAmbientContext(D) : D(), m;
      }, f.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || T.prototype.isClassElementNameStart.call(this);
      }, f.parseClassSuper = function(r) {
        T.prototype.parseClassSuper.call(this, r), r.superClass && (this.tsMatchLeftRelational() || this.match(o.bitShift)) && (r.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (r.implements = this.tsParseHeritageClause("implements"));
      }, f.parseFunctionParams = function(r) {
        var n = this.tsTryParseTypeParameters();
        n && (r.typeParameters = n), T.prototype.parseFunctionParams.call(this, r);
      }, f.parseVarId = function(r, n) {
        T.prototype.parseVarId.call(this, r, n), r.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(o.prefix) && (r.definite = !0);
        var c = this.tsTryParseTypeAnnotation();
        c && (r.id.typeAnnotation = c, this.resetEndLocation(r.id));
      }, f.parseArrowExpression = function(r, n, c, l) {
        this.match(o.colon) && (r.returnType = this.tsParseTypeAnnotation());
        var m = this.yieldPos, v = this.awaitPos, x = this.awaitIdentPos;
        this.enterScope(16 | Ge(c, !1)), this.initFunction(r);
        var g = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (r.async = !!c), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, r.params = this.toAssignableList(n, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(r, !0, !1, l), this.yieldPos = m, this.awaitPos = v, this.awaitIdentPos = x, this.maybeInArrowParameters = g, this.finishNode(r, "ArrowFunctionExpression");
      }, f.parseMaybeAssignOrigin = function(r, n, c) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(r);
          this.exprAllowed = !1;
        }
        var l = !1, m = -1, v = -1, x = -1;
        n ? (m = n.parenthesizedAssign, v = n.trailingComma, x = n.doubleProto, n.parenthesizedAssign = n.trailingComma = -1) : (n = new re(), l = !0);
        var g = this.start, b = this.startLoc;
        (this.type === o.parenL || Z(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = r === "await");
        var w = this.parseMaybeConditional(r, n);
        if (c && (w = c.call(this, w, g, b)), this.type.isAssign) {
          var N = this.startNodeAt(g, b);
          return N.operator = this.value, this.type === o.eq && (w = this.toAssignable(w, !0, n)), l || (n.parenthesizedAssign = n.trailingComma = n.doubleProto = -1), n.shorthandAssign >= w.start && (n.shorthandAssign = -1), this.type === o.eq ? this.checkLValPattern(w) : this.checkLValSimple(w), N.left = w, this.next(), N.right = this.parseMaybeAssign(r), x > -1 && (n.doubleProto = x), this.finishNode(N, "AssignmentExpression");
        }
        return l && this.checkExpressionErrors(n, !0), m > -1 && (n.parenthesizedAssign = m), v > -1 && (n.trailingComma = v), w;
      }, f.parseMaybeAssign = function(r, n, c) {
        var l, m, v, x, g, b, w, N, D, C, K, H = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (N = this.cloneCurLookaheadState(), !(D = this.tryParse(function() {
            return H.parseMaybeAssignOrigin(r, n, c);
          }, N)).error) return D.node;
          var J = this.context, st = J[J.length - 1];
          st === y.tokContexts.tc_oTag && J[J.length - 2] === y.tokContexts.tc_expr ? (J.pop(), J.pop()) : st !== y.tokContexts.tc_oTag && st !== y.tokContexts.tc_expr || J.pop();
        }
        if (!((l = D) != null && l.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(r, n, c);
        N && !this.compareLookaheadState(N, this.getCurLookaheadState()) || (N = this.cloneCurLookaheadState());
        var mt = this.tryParse(function(Lt) {
          var ee, ie;
          K = H.tsParseTypeParameters();
          var Ot = H.parseMaybeAssignOrigin(r, n, c);
          return (Ot.type !== "ArrowFunctionExpression" || (ee = Ot.extra) != null && ee.parenthesized) && Lt(), ((ie = K) == null ? void 0 : ie.params.length) !== 0 && H.resetStartLocationFromNode(Ot, K), Ot.typeParameters = K, Ot;
        }, N);
        if (!mt.error && !mt.aborted) return K && this.reportReservedArrowTypeParam(K), mt.node;
        if (!D && (Vi(!0), !(C = this.tryParse(function() {
          return H.parseMaybeAssignOrigin(r, n, c);
        }, N)).error)) return C.node;
        if ((m = D) != null && m.node) return this.setLookaheadState(D.failState), D.node;
        if (mt.node) return this.setLookaheadState(mt.failState), K && this.reportReservedArrowTypeParam(K), mt.node;
        if ((v = C) != null && v.node) return this.setLookaheadState(C.failState), C.node;
        throw (x = D) != null && x.thrown ? D.error : mt.thrown ? mt.error : (g = C) != null && g.thrown ? C.error : ((b = D) == null ? void 0 : b.error) || mt.error || ((w = C) == null ? void 0 : w.error);
      }, f.parseAssignableListItem = function(r) {
        for (var n = []; this.match(O.at); ) n.push(this.parseDecorator());
        var c, l = this.start, m = this.startLoc, v = !1, x = !1;
        if (r !== void 0) {
          var g = {};
          this.tsParseModifiers({ modified: g, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), c = g.accessibility, x = g.override, v = g.readonly, r === !1 && (c || v || x) && this.raise(m.start, I.UnexpectedParameterModifier);
        }
        var b = this.parseMaybeDefault(l, m);
        this.parseBindingListItem(b);
        var w = this.parseMaybeDefault(b.start, b.loc, b);
        if (n.length && (w.decorators = n), c || v || x) {
          var N = this.startNodeAt(l, m);
          return c && (N.accessibility = c), v && (N.readonly = v), x && (N.override = x), w.type !== "Identifier" && w.type !== "AssignmentPattern" && this.raise(N.start, I.UnsupportedParameterPropertyKind), N.parameter = w, this.finishNode(N, "TSParameterProperty");
        }
        return w;
      }, f.checkLValInnerPattern = function(r, n, c) {
        n === void 0 && (n = 0), r.type === "TSParameterProperty" ? this.checkLValInnerPattern(r.parameter, n, c) : T.prototype.checkLValInnerPattern.call(this, r, n, c);
      }, f.parseBindingListItem = function(r) {
        this.eat(o.question) && (r.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(r.start, I.PatternIsOptional), r.optional = !0);
        var n = this.tsTryParseTypeAnnotation();
        return n && (r.typeAnnotation = n), this.resetEndLocation(r), r;
      }, f.isAssignable = function(r, n) {
        var c = this;
        switch (r.type) {
          case "TSTypeCastExpression":
            return this.isAssignable(r.expression, n);
          case "TSParameterProperty":
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            return !0;
          case "ObjectExpression":
            var l = r.properties.length - 1;
            return r.properties.every(function(m, v) {
              return m.type !== "ObjectMethod" && (v === l || m.type !== "SpreadElement") && c.isAssignable(m);
            });
          case "Property":
          case "ObjectProperty":
            return this.isAssignable(r.value);
          case "SpreadElement":
            return this.isAssignable(r.argument);
          case "ArrayExpression":
            return r.elements.every(function(m) {
              return m === null || c.isAssignable(m);
            });
          case "AssignmentExpression":
            return r.operator === "=";
          case "ParenthesizedExpression":
            return this.isAssignable(r.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !n;
          default:
            return !1;
        }
      }, f.toAssignable = function(r, n, c) {
        switch (n === void 0 && (n = !1), c === void 0 && (c = new re()), r.type) {
          case "ParenthesizedExpression":
            return this.toAssignableParenthesizedExpression(r, n, c);
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            return n || this.raise(r.start, I.UnexpectedTypeCastInParameter), this.toAssignable(r.expression, n, c);
          case "MemberExpression":
            break;
          case "AssignmentExpression":
            return n || r.left.type !== "TSTypeCastExpression" || (r.left = this.typeCastToParameter(r.left)), T.prototype.toAssignable.call(this, r, n, c);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(r);
          default:
            return T.prototype.toAssignable.call(this, r, n, c);
        }
        return r;
      }, f.toAssignableParenthesizedExpression = function(r, n, c) {
        switch (r.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            return this.toAssignable(r.expression, n, c);
          default:
            return T.prototype.toAssignable.call(this, r, n, c);
        }
      }, f.curPosition = function() {
        if (this.options.locations) {
          var r = T.prototype.curPosition.call(this);
          return Object.defineProperty(r, "offset", { get: function() {
            return function(n) {
              var c = new d.Position(this.line, this.column + n);
              return c.index = this.index + n, c;
            };
          } }), r.index = this.pos, r;
        }
      }, f.parseBindingAtom = function() {
        return this.type === o._this ? this.parseIdent(!0) : T.prototype.parseBindingAtom.call(this);
      }, f.shouldParseArrow = function(r) {
        var n, c = this;
        if (n = this.match(o.colon) ? r.every(function(m) {
          return c.isAssignable(m, !0);
        }) : !this.canInsertSemicolon()) {
          if (this.match(o.colon)) {
            var l = this.tryParse(function(m) {
              var v = c.tsParseTypeOrTypePredicateAnnotation(o.colon);
              return !c.canInsertSemicolon() && c.match(o.arrow) || m(), v;
            });
            if (l.aborted) return this.shouldParseArrowReturnType = void 0, !1;
            l.thrown || (l.error && this.setLookaheadState(l.failState), this.shouldParseArrowReturnType = l.node);
          }
          return !!this.match(o.arrow) || (this.shouldParseArrowReturnType = void 0, !1);
        }
        return this.shouldParseArrowReturnType = void 0, n;
      }, f.parseParenArrowList = function(r, n, c, l) {
        var m = this.startNodeAt(r, n);
        return m.returnType = this.shouldParseArrowReturnType, this.shouldParseArrowReturnType = void 0, this.parseArrowExpression(m, c, !1, l);
      }, f.parseParenAndDistinguishExpression = function(r, n) {
        var c, l = this.start, m = this.startLoc, v = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          var x = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0, this.next();
          var g, b = this.start, w = this.startLoc, N = [], D = !0, C = !1, K = new re(), H = this.yieldPos, J = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== o.parenR; ) {
            if (D ? D = !1 : this.expect(o.comma), v && this.afterTrailingComma(o.parenR, !0)) {
              C = !0;
              break;
            }
            if (this.type === o.ellipsis) {
              g = this.start, N.push(this.parseParenItem(this.parseRestBinding())), this.type === o.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            N.push(this.parseMaybeAssign(n, K, this.parseParenItem));
          }
          var st = this.lastTokEnd, mt = this.lastTokEndLoc;
          if (this.expect(o.parenR), this.maybeInArrowParameters = x, r && this.shouldParseArrow(N) && this.eat(o.arrow)) return this.checkPatternErrors(K, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = H, this.awaitPos = J, this.parseParenArrowList(l, m, N, n);
          N.length && !C || this.unexpected(this.lastTokStart), g && this.unexpected(g), this.checkExpressionErrors(K, !0), this.yieldPos = H || this.yieldPos, this.awaitPos = J || this.awaitPos, N.length > 1 ? ((c = this.startNodeAt(b, w)).expressions = N, this.finishNodeAt(c, "SequenceExpression", st, mt)) : c = N[0];
        } else c = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Lt = this.startNodeAt(l, m);
          return Lt.expression = c, this.finishNode(Lt, "ParenthesizedExpression");
        }
        return c;
      }, f.parseTaggedTemplateExpression = function(r, n, c, l) {
        var m = this.startNodeAt(n, c);
        return m.tag = r, m.quasi = this.parseTemplate({ isTagged: !0 }), l && this.raise(n, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(m, "TaggedTemplateExpression");
      }, f.shouldParseAsyncArrow = function() {
        var r = this;
        if (!this.match(o.colon)) return !this.canInsertSemicolon() && this.eat(o.arrow);
        var n = this.tryParse(function(c) {
          var l = r.tsParseTypeOrTypePredicateAnnotation(o.colon);
          return !r.canInsertSemicolon() && r.match(o.arrow) || c(), l;
        });
        return n.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : n.thrown ? void 0 : (n.error && this.setLookaheadState(n.failState), this.shouldParseAsyncArrowReturnType = n.node, !this.canInsertSemicolon() && this.eat(o.arrow));
      }, f.parseSubscriptAsyncArrow = function(r, n, c, l) {
        var m = this.startNodeAt(r, n);
        return m.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(m, c, !0, l);
      }, f.parseExprList = function(r, n, c, l) {
        for (var m = [], v = !0; !this.eat(r); ) {
          if (v) v = !1;
          else if (this.expect(o.comma), n && this.afterTrailingComma(r)) break;
          var x = void 0;
          c && this.type === o.comma ? x = null : this.type === o.ellipsis ? (x = this.parseSpread(l), l && this.type === o.comma && l.trailingComma < 0 && (l.trailingComma = this.start)) : x = this.parseMaybeAssign(!1, l, this.parseParenItem), m.push(x);
        }
        return m;
      }, f.parseSubscript = function(r, n, c, l, m, v, x) {
        var g = this, b = v;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(o.prefix)) {
          this.exprAllowed = !1, this.next();
          var w = this.startNodeAt(n, c);
          return w.expression = r, r = this.finishNode(w, "TSNonNullExpression");
        }
        var N = !1;
        if (this.match(o.questionDot) && this.lookaheadCharCode() === 60) {
          if (l) return r;
          r.optional = !0, b = N = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(o.bitShift)) {
          var D, C = this.tsTryParseAndCatch(function() {
            if (!l && g.atPossibleAsyncArrow(r)) {
              var Ti = g.tsTryParseGenericAsyncArrowFunction(n, c, x);
              if (Ti) return r = Ti;
            }
            var xe = g.tsParseTypeArgumentsInExpression();
            if (!xe) return r;
            if (N && !g.match(o.parenL)) return D = g.curPosition(), r;
            if (Ft(g.type) || g.type === o.backQuote) {
              var _i = g.parseTaggedTemplateExpression(r, n, c, b);
              return _i.typeParameters = xe, _i;
            }
            if (!l && g.eat(o.parenL)) {
              var Pi = new re(), Zt = g.startNodeAt(n, c);
              return Zt.callee = r, Zt.arguments = g.parseExprList(o.parenR, g.options.ecmaVersion >= 8, !1, Pi), g.tsCheckForInvalidTypeCasts(Zt.arguments), Zt.typeParameters = xe, b && (Zt.optional = N), g.checkExpressionErrors(Pi, !0), r = g.finishNode(Zt, "CallExpression");
            }
            var Ze = g.type;
            if (!(g.tsMatchRightRelational() || Ze === o.bitShift || Ze !== o.parenL && (Ai = Ze, !!Ai.startsExpr) && !g.hasPrecedingLineBreak())) {
              var Ai, qe = g.startNodeAt(n, c);
              return qe.expression = r, qe.typeParameters = xe, g.finishNode(qe, "TSInstantiationExpression");
            }
          });
          if (D && this.unexpected(D), C) return C.type === "TSInstantiationExpression" && (this.match(o.dot) || this.match(o.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, I.InvalidPropertyAccessAfterInstantiationExpression), r = C;
        }
        var K = this.options.ecmaVersion >= 11, H = K && this.eat(o.questionDot);
        l && H && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var J = this.eat(o.bracketL);
        if (J || H && this.type !== o.parenL && this.type !== o.backQuote || this.eat(o.dot)) {
          var st = this.startNodeAt(n, c);
          st.object = r, J ? (st.property = this.parseExpression(), this.expect(o.bracketR)) : st.property = this.type === o.privateId && r.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), st.computed = !!J, K && (st.optional = H), r = this.finishNode(st, "MemberExpression");
        } else if (!l && this.eat(o.parenL)) {
          var mt = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var Lt = new re(), ee = this.yieldPos, ie = this.awaitPos, Ot = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var wi = this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1, Lt);
          if (m && !H && this.shouldParseAsyncArrow()) this.checkPatternErrors(Lt, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = ee, this.awaitPos = ie, this.awaitIdentPos = Ot, r = this.parseSubscriptAsyncArrow(n, c, wi, x);
          else {
            this.checkExpressionErrors(Lt, !0), this.yieldPos = ee || this.yieldPos, this.awaitPos = ie || this.awaitPos, this.awaitIdentPos = Ot || this.awaitIdentPos;
            var ve = this.startNodeAt(n, c);
            ve.callee = r, ve.arguments = wi, K && (ve.optional = H), r = this.finishNode(ve, "CallExpression");
          }
          this.maybeInArrowParameters = mt;
        } else if (this.type === o.backQuote) {
          (H || b) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var Ue = this.startNodeAt(n, c);
          Ue.tag = r, Ue.quasi = this.parseTemplate({ isTagged: !0 }), r = this.finishNode(Ue, "TaggedTemplateExpression");
        }
        return r;
      }, f.parseGetterSetter = function(r) {
        r.kind = r.key.name, this.parsePropertyName(r), r.value = this.parseMethod(!1);
        var n = r.kind === "get" ? 0 : 1, c = r.value.params[0], l = c && this.isThisParam(c);
        r.value.params.length !== (n = l ? n + 1 : n) ? this.raiseRecoverable(r.value.start, r.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : r.kind === "set" && r.value.params[0].type === "RestElement" && this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params");
      }, f.parseProperty = function(r, n) {
        if (!r) {
          var c = [];
          if (this.match(O.at)) for (; this.match(O.at); ) c.push(this.parseDecorator());
          var l = T.prototype.parseProperty.call(this, r, n);
          return l.type === "SpreadElement" && c.length && this.raise(l.start, "Decorators can't be used with SpreadElement"), c.length && (l.decorators = c, c = []), l;
        }
        return T.prototype.parseProperty.call(this, r, n);
      }, f.parseCatchClauseParam = function() {
        var r = this.parseBindingAtom(), n = r.type === "Identifier";
        this.enterScope(n ? 32 : 0), this.checkLValPattern(r, n ? 4 : 2);
        var c = this.tsTryParseTypeAnnotation();
        return c && (r.typeAnnotation = c, this.resetEndLocation(r)), this.expect(o.parenR), r;
      }, f.parseClass = function(r, n) {
        var c = this.inAbstractClass;
        this.inAbstractClass = !!r.abstract;
        try {
          this.next(), this.takeDecorators(r);
          var l = this.strict;
          this.strict = !0, this.parseClassId(r, n), this.parseClassSuper(r);
          var m = this.enterClassBody(), v = this.startNode(), x = !1;
          v.body = [];
          var g = [];
          for (this.expect(o.braceL); this.type !== o.braceR; ) if (this.match(O.at)) g.push(this.parseDecorator());
          else {
            var b = this.parseClassElement(r.superClass !== null);
            g.length && (b.decorators = g, this.resetStartLocationFromNode(b, g[0]), g = []), b && (v.body.push(b), b.type === "MethodDefinition" && b.kind === "constructor" && b.value.type === "FunctionExpression" ? (x && this.raiseRecoverable(b.start, "Duplicate constructor in the same class"), x = !0, b.decorators && b.decorators.length > 0 && this.raise(b.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : b.key && b.key.type === "PrivateIdentifier" && ca(m, b) && this.raiseRecoverable(b.key.start, "Identifier '#" + b.key.name + "' has already been declared"));
          }
          return this.strict = l, this.next(), g.length && this.raise(this.start, "Decorators must be attached to a class element."), r.body = this.finishNode(v, "ClassBody"), this.exitClassBody(), this.finishNode(r, n ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = c;
        }
      }, f.parseClassFunctionParams = function() {
        var r = this.tsTryParseTypeParameters(this.tsParseConstModifier), n = this.parseBindingList(o.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return r && (n.typeParameters = r), n;
      }, f.parseMethod = function(r, n, c, l, m) {
        var v = this.startNode(), x = this.yieldPos, g = this.awaitPos, b = this.awaitIdentPos;
        if (this.initFunction(v), this.options.ecmaVersion >= 6 && (v.generator = r), this.options.ecmaVersion >= 8 && (v.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Ge(n, v.generator) | (c ? 128 : 0)), this.expect(o.parenL), v.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(v, !1, !0, !1, { isClassMethod: l }), this.yieldPos = x, this.awaitPos = g, this.awaitIdentPos = b, m && m.abstract && v.body) {
          var w = m.key;
          this.raise(m.start, I.AbstractMethodHasImplementation({ methodName: w.type !== "Identifier" || m.computed ? "[" + this.input.slice(w.start, w.end) + "]" : w.name }));
        }
        return this.finishNode(v, "FunctionExpression");
      }, pt.parse = function(r, n) {
        if (n.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        n.locations = !0;
        var c = new this(n, r);
        return s && (c.isAmbientContext = !0), c.parse();
      }, pt.parseExpressionAt = function(r, n, c) {
        if (c.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        c.locations = !0;
        var l = new this(c, r, n);
        return s && (l.isAmbientContext = !0), l.nextToken(), l.parseExpression();
      }, f.parseImportSpecifier = function() {
        if (this.ts_isContextual(O.type)) {
          var r = this.startNode();
          return r.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(r, !0, this.importOrExportOuterKind === "type"), this.finishNode(r, "ImportSpecifier");
        }
        var n = T.prototype.parseImportSpecifier.call(this);
        return n.importKind = "value", n;
      }, f.parseExportSpecifier = function(r) {
        var n = this.ts_isContextual(O.type);
        if (!this.match(o.string) && n) {
          var c = this.startNode();
          return c.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(c, !1, this.importOrExportOuterKind === "type"), this.finishNode(c, "ExportSpecifier"), this.checkExport(r, c.exported, c.exported.start), c;
        }
        var l = T.prototype.parseExportSpecifier.call(this, r);
        return l.exportKind = "value", l;
      }, f.parseTypeOnlyImportExportSpecifier = function(r, n, c) {
        var l, m = n ? "imported" : "local", v = n ? "local" : "exported", x = r[m], g = !1, b = !0, w = x.start;
        if (this.isContextual("as")) {
          var N = this.parseIdent();
          if (this.isContextual("as")) {
            var D = this.parseIdent();
            ye(this.type) ? (g = !0, x = N, l = n ? this.parseIdent() : this.parseModuleExportName(), b = !1) : (l = D, b = !1);
          } else ye(this.type) ? (b = !1, l = n ? this.parseIdent() : this.parseModuleExportName()) : (g = !0, x = N);
        } else ye(this.type) && (g = !0, n ? (x = T.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(x)) : x = this.parseModuleExportName());
        g && c && this.raise(w, n ? I.TypeModifierIsUsedInTypeImports : I.TypeModifierIsUsedInTypeExports), r[m] = x, r[v] = l, r[n ? "importKind" : "exportKind"] = g ? "type" : "value", b && this.eatContextual("as") && (r[v] = n ? this.parseIdent() : this.parseModuleExportName()), r[v] || (r[v] = this.copyNode(r[m])), n && this.checkLValSimple(r[v], 2);
      }, f.raiseCommonCheck = function(r, n, c) {
        return n === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(o.comma) && this.lookaheadCharCode() === 41 ? void this.next() : T.prototype.raise.call(this, r, n) : c ? T.prototype.raiseRecoverable.call(this, r, n) : T.prototype.raise.call(this, r, n);
      }, f.raiseRecoverable = function(r, n) {
        return this.raiseCommonCheck(r, n, !0);
      }, f.raise = function(r, n) {
        return this.raiseCommonCheck(r, n, !0);
      }, f.updateContext = function(r) {
        var n = this.type;
        if (n == o.braceL) {
          var c = this.curContext();
          c == rt.tc_oTag ? this.context.push(tt.b_expr) : c == rt.tc_expr ? this.context.push(tt.b_tmpl) : T.prototype.updateContext.call(this, r), this.exprAllowed = !0;
        } else {
          if (n !== o.slash || r !== O.jsxTagStart) return T.prototype.updateContext.call(this, r);
          this.context.length -= 2, this.context.push(rt.tc_cTag), this.exprAllowed = !1;
        }
      }, f.jsx_parseOpeningElementAt = function(r, n) {
        var c = this, l = this.startNodeAt(r, n), m = this.jsx_parseElementName();
        if (m && (l.name = m), this.match(o.relational) || this.match(o.bitShift)) {
          var v = this.tsTryParseAndCatch(function() {
            return c.tsParseTypeArgumentsInExpression();
          });
          v && (l.typeParameters = v);
        }
        for (l.attributes = []; this.type !== o.slash && this.type !== O.jsxTagEnd; ) l.attributes.push(this.jsx_parseAttribute());
        return l.selfClosing = this.eat(o.slash), this.expect(O.jsxTagEnd), this.finishNode(l, m ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, f.enterScope = function(r) {
        r === se && this.importsStack.push([]), T.prototype.enterScope.call(this, r);
        var n = T.prototype.currentScope.call(this);
        n.types = [], n.enums = [], n.constEnums = [], n.classes = [], n.exportOnlyBindings = [];
      }, f.exitScope = function() {
        T.prototype.currentScope.call(this).flags === se && this.importsStack.pop(), T.prototype.exitScope.call(this);
      }, f.hasImport = function(r, n) {
        var c = this.importsStack.length;
        if (this.importsStack[c - 1].indexOf(r) > -1) return !0;
        if (!n && c > 1) {
          for (var l = 0; l < c - 1; l++) if (this.importsStack[l].indexOf(r) > -1) return !0;
        }
        return !1;
      }, f.maybeExportDefined = function(r, n) {
        this.inModule && 1 & r.flags && this.undefinedExports.delete(n);
      }, f.isRedeclaredInScope = function(r, n, c) {
        return !!(0 & c) && (2 & c ? r.lexical.indexOf(n) > -1 || r.functions.indexOf(n) > -1 || r.var.indexOf(n) > -1 : 3 & c ? r.lexical.indexOf(n) > -1 || !T.prototype.treatFunctionsAsVarInScope.call(this, r) && r.var.indexOf(n) > -1 : r.lexical.indexOf(n) > -1 && !(32 & r.flags && r.lexical[0] === n) || !this.treatFunctionsAsVarInScope(r) && r.functions.indexOf(n) > -1);
      }, f.checkRedeclarationInScope = function(r, n, c, l) {
        this.isRedeclaredInScope(r, n, c) && this.raise(l, "Identifier '" + n + "' has already been declared.");
      }, f.declareName = function(r, n, c) {
        if (4096 & n) return this.hasImport(r, !0) && this.raise(c, "Identifier '" + r + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(r);
        var l = this.currentScope();
        if (1024 & n) return this.maybeExportDefined(l, r), void l.exportOnlyBindings.push(r);
        T.prototype.declareName.call(this, r, n, c), 0 & n && (0 & n || (this.checkRedeclarationInScope(l, r, n, c), this.maybeExportDefined(l, r)), l.types.push(r)), 256 & n && l.enums.push(r), 512 & n && l.constEnums.push(r), 128 & n && l.classes.push(r);
      }, f.checkLocalExport = function(r) {
        var n = r.name;
        if (!this.hasImport(n)) {
          for (var c = this.scopeStack.length - 1; c >= 0; c--) {
            var l = this.scopeStack[c];
            if (l.types.indexOf(n) > -1 || l.exportOnlyBindings.indexOf(n) > -1) return;
          }
          T.prototype.checkLocalExport.call(this, r);
        }
      }, ot = pt, B = [{ key: "acornTypeScript", get: function() {
        return y;
      } }], (et = [{ key: "acornTypeScript", get: function() {
        return y;
      } }]) && Oi(ot.prototype, et), B && Oi(ot, B), Object.defineProperty(ot, "prototype", { writable: !1 }), pt;
    })(h);
    return mr;
  };
}
const va = ["createObject", "dropObject", "removeRecords", "upsertRecords"], xa = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"];
function k(t, e, i) {
  function s(d, y) {
    var o;
    Object.defineProperty(d, "_zod", {
      value: d._zod ?? {},
      enumerable: !1
    }), (o = d._zod).traits ?? (o.traits = /* @__PURE__ */ new Set()), d._zod.traits.add(t), e(d, y);
    for (const S in h.prototype)
      S in d || Object.defineProperty(d, S, { value: h.prototype[S].bind(d) });
    d._zod.constr = h, d._zod.def = y;
  }
  const a = i?.Parent ?? Object;
  class u extends a {
  }
  Object.defineProperty(u, "name", { value: t });
  function h(d) {
    var y;
    const o = i?.Parent ? new u() : this;
    s(o, d), (y = o._zod).deferred ?? (y.deferred = []);
    for (const S of o._zod.deferred)
      S();
    return o;
  }
  return Object.defineProperty(h, "init", { value: s }), Object.defineProperty(h, Symbol.hasInstance, {
    value: (d) => i?.Parent && d instanceof i.Parent ? !0 : d?._zod?.traits?.has(t)
  }), Object.defineProperty(h, "name", { value: t }), h;
}
class Wt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Us extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
  }
}
const Zs = {};
function Mt(t) {
  return Zs;
}
function ga(t) {
  const e = Object.values(t).filter((i) => typeof i == "number");
  return Object.entries(t).filter(([i, s]) => e.indexOf(+i) === -1).map(([i, s]) => s);
}
function si(t, e) {
  return typeof e == "bigint" ? e.toString() : e;
}
function di(t) {
  return {
    get value() {
      {
        const e = t();
        return Object.defineProperty(this, "value", { value: e }), e;
      }
    }
  };
}
function mi(t) {
  return t == null;
}
function yi(t) {
  const e = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(e, i);
}
function ba(t, e) {
  const i = (t.toString().split(".")[1] || "").length, s = e.toString();
  let a = (s.split(".")[1] || "").length;
  if (a === 0 && /\d?e-\d?/.test(s)) {
    const y = s.match(/\d?e-(\d?)/);
    y?.[1] && (a = Number.parseInt(y[1]));
  }
  const u = i > a ? i : a, h = Number.parseInt(t.toFixed(u).replace(".", "")), d = Number.parseInt(e.toFixed(u).replace(".", ""));
  return h % d / 10 ** u;
}
const ji = Symbol("evaluating");
function U(t, e, i) {
  let s;
  Object.defineProperty(t, e, {
    get() {
      if (s !== ji)
        return s === void 0 && (s = ji, s = i()), s;
    },
    set(a) {
      Object.defineProperty(t, e, {
        value: a
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function $t(t, e, i) {
  Object.defineProperty(t, e, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ut(...t) {
  const e = {};
  for (const i of t) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(e, s);
  }
  return Object.defineProperties({}, e);
}
function Bi(t) {
  return JSON.stringify(t);
}
const qs = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Ie(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const ka = di(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function Gt(t) {
  if (Ie(t) === !1)
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const i = e.prototype;
  return !(Ie(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function Hs(t) {
  return Gt(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const Sa = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Xt(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Vt(t, e, i) {
  const s = new t._zod.constr(e ?? t._zod.def);
  return (!e || i?.parent) && (s._zod.parent = t), s;
}
function L(t) {
  const e = t;
  if (!e)
    return {};
  if (typeof e == "string")
    return { error: () => e };
  if (e?.message !== void 0) {
    if (e?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    e.error = e.message;
  }
  return delete e.message, typeof e.error == "string" ? { ...e, error: () => e.error } : e;
}
function wa(t) {
  return Object.keys(t).filter((e) => t[e]._zod.optin === "optional" && t[e]._zod.optout === "optional");
}
const Ta = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function _a(t, e) {
  const i = t._zod.def, s = Ut(t._zod.def, {
    get shape() {
      const a = {};
      for (const u in e) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        e[u] && (a[u] = i.shape[u]);
      }
      return $t(this, "shape", a), a;
    },
    checks: []
  });
  return Vt(t, s);
}
function Pa(t, e) {
  const i = t._zod.def, s = Ut(t._zod.def, {
    get shape() {
      const a = { ...t._zod.def.shape };
      for (const u in e) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        e[u] && delete a[u];
      }
      return $t(this, "shape", a), a;
    },
    checks: []
  });
  return Vt(t, s);
}
function Aa(t, e) {
  if (!Gt(e))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const s = Ut(t._zod.def, {
    get shape() {
      const a = { ...t._zod.def.shape, ...e };
      return $t(this, "shape", a), a;
    },
    checks: []
  });
  return Vt(t, s);
}
function Ca(t, e) {
  if (!Gt(e))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...e };
      return $t(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return Vt(t, i);
}
function Ea(t, e) {
  const i = Ut(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...e._zod.def.shape };
      return $t(this, "shape", s), s;
    },
    get catchall() {
      return e._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Vt(t, i);
}
function Ia(t, e, i) {
  const s = Ut(e._zod.def, {
    get shape() {
      const a = e._zod.def.shape, u = { ...a };
      if (i)
        for (const h in i) {
          if (!(h in a))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (u[h] = t ? new t({
            type: "optional",
            innerType: a[h]
          }) : a[h]);
        }
      else
        for (const h in a)
          u[h] = t ? new t({
            type: "optional",
            innerType: a[h]
          }) : a[h];
      return $t(this, "shape", u), u;
    },
    checks: []
  });
  return Vt(e, s);
}
function Na(t, e, i) {
  const s = Ut(e._zod.def, {
    get shape() {
      const a = e._zod.def.shape, u = { ...a };
      if (i)
        for (const h in i) {
          if (!(h in u))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (u[h] = new t({
            type: "nonoptional",
            innerType: a[h]
          }));
        }
      else
        for (const h in a)
          u[h] = new t({
            type: "nonoptional",
            innerType: a[h]
          });
      return $t(this, "shape", u), u;
    },
    checks: []
  });
  return Vt(e, s);
}
function qt(t, e = 0) {
  if (t.aborted === !0)
    return !0;
  for (let i = e; i < t.issues.length; i++)
    if (t.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function Ht(t, e) {
  return e.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(t), i;
  });
}
function be(t) {
  return typeof t == "string" ? t : t?.message;
}
function Dt(t, e, i) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const a = be(t.inst?._zod.def?.error?.(t)) ?? be(e?.error?.(t)) ?? be(i.customError?.(t)) ?? be(i.localeError?.(t)) ?? "Invalid input";
    s.message = a;
  }
  return delete s.inst, delete s.continue, e?.reportInput || delete s.input, s;
}
function vi(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function ce(...t) {
  const [e, i, s] = t;
  return typeof e == "string" ? {
    message: e,
    code: "custom",
    input: i,
    inst: s
  } : { ...e };
}
const Ws = (t, e) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: e,
    enumerable: !1
  }), t.message = JSON.stringify(e, si, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, Ks = k("$ZodError", Ws), Js = k("$ZodError", Ws, { Parent: Error });
function La(t, e = (i) => i.message) {
  const i = {}, s = [];
  for (const a of t.issues)
    a.path.length > 0 ? (i[a.path[0]] = i[a.path[0]] || [], i[a.path[0]].push(e(a))) : s.push(e(a));
  return { formErrors: s, fieldErrors: i };
}
function Oa(t, e = (i) => i.message) {
  const i = { _errors: [] }, s = (a) => {
    for (const u of a.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((h) => s({ issues: h }));
      else if (u.code === "invalid_key")
        s({ issues: u.issues });
      else if (u.code === "invalid_element")
        s({ issues: u.issues });
      else if (u.path.length === 0)
        i._errors.push(e(u));
      else {
        let h = i, d = 0;
        for (; d < u.path.length; ) {
          const y = u.path[d];
          d === u.path.length - 1 ? (h[y] = h[y] || { _errors: [] }, h[y]._errors.push(e(u))) : h[y] = h[y] || { _errors: [] }, h = h[y], d++;
        }
      }
  };
  return s(t), i;
}
const xi = (t) => (e, i, s, a) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, h = e._zod.run({ value: i, issues: [] }, u);
  if (h instanceof Promise)
    throw new Wt();
  if (h.issues.length) {
    const d = new (a?.Err ?? t)(h.issues.map((y) => Dt(y, u, Mt())));
    throw qs(d, a?.callee), d;
  }
  return h.value;
}, gi = (t) => async (e, i, s, a) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let h = e._zod.run({ value: i, issues: [] }, u);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const d = new (a?.Err ?? t)(h.issues.map((y) => Dt(y, u, Mt())));
    throw qs(d, a?.callee), d;
  }
  return h.value;
}, Fe = (t) => (e, i, s) => {
  const a = s ? { ...s, async: !1 } : { async: !1 }, u = e._zod.run({ value: i, issues: [] }, a);
  if (u instanceof Promise)
    throw new Wt();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? Ks)(u.issues.map((h) => Dt(h, a, Mt())))
  } : { success: !0, data: u.value };
}, Ra = /* @__PURE__ */ Fe(Js), je = (t) => async (e, i, s) => {
  const a = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = e._zod.run({ value: i, issues: [] }, a);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((h) => Dt(h, a, Mt())))
  } : { success: !0, data: u.value };
}, Ma = /* @__PURE__ */ je(Js), Da = (t) => (e, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return xi(t)(e, i, a);
}, za = (t) => (e, i, s) => xi(t)(e, i, s), Va = (t) => async (e, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return gi(t)(e, i, a);
}, Fa = (t) => async (e, i, s) => gi(t)(e, i, s), ja = (t) => (e, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Fe(t)(e, i, a);
}, Ba = (t) => (e, i, s) => Fe(t)(e, i, s), $a = (t) => async (e, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return je(t)(e, i, a);
}, Ua = (t) => async (e, i, s) => je(t)(e, i, s), Za = /^[cC][^\s-]{8,}$/, qa = /^[0-9a-z]+$/, Ha = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Wa = /^[0-9a-vA-V]{20}$/, Ka = /^[A-Za-z0-9]{27}$/, Ja = /^[a-zA-Z0-9_-]{21}$/, Ga = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Xa = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, $i = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Ya = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Qa = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function tn() {
  return new RegExp(Qa, "u");
}
const en = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, rn = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, an = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, nn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Gs = /^[A-Za-z0-9_-]*$/, on = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, un = /^\+(?:[0-9]){6,14}[0-9]$/, Xs = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", cn = /* @__PURE__ */ new RegExp(`^${Xs}$`);
function Ys(t) {
  const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${e}` : t.precision === 0 ? `${e}:[0-5]\\d` : `${e}:[0-5]\\d\\.\\d{${t.precision}}` : `${e}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function hn(t) {
  return new RegExp(`^${Ys(t)}$`);
}
function pn(t) {
  const e = Ys({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${e}(?:${i.join("|")})`;
  return new RegExp(`^${Xs}T(?:${s})$`);
}
const ln = (t) => {
  const e = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${e}$`);
}, fn = /^-?\d+$/, dn = /^-?\d+(?:\.\d+)?/, mn = /^(?:true|false)$/i, yn = /^[^A-Z]*$/, vn = /^[^a-z]*$/, ft = /* @__PURE__ */ k("$ZodCheck", (t, e) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = e, (i = t._zod).onattach ?? (i.onattach = []);
}), Qs = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, tr = /* @__PURE__ */ k("$ZodCheckLessThan", (t, e) => {
  ft.init(t, e);
  const i = Qs[typeof e.value];
  t._zod.onattach.push((s) => {
    const a = s._zod.bag, u = (e.inclusive ? a.maximum : a.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    e.value < u && (e.inclusive ? a.maximum = e.value : a.exclusiveMaximum = e.value);
  }), t._zod.check = (s) => {
    (e.inclusive ? s.value <= e.value : s.value < e.value) || s.issues.push({
      origin: i,
      code: "too_big",
      maximum: e.value,
      input: s.value,
      inclusive: e.inclusive,
      inst: t,
      continue: !e.abort
    });
  };
}), er = /* @__PURE__ */ k("$ZodCheckGreaterThan", (t, e) => {
  ft.init(t, e);
  const i = Qs[typeof e.value];
  t._zod.onattach.push((s) => {
    const a = s._zod.bag, u = (e.inclusive ? a.minimum : a.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    e.value > u && (e.inclusive ? a.minimum = e.value : a.exclusiveMinimum = e.value);
  }), t._zod.check = (s) => {
    (e.inclusive ? s.value >= e.value : s.value > e.value) || s.issues.push({
      origin: i,
      code: "too_small",
      minimum: e.value,
      input: s.value,
      inclusive: e.inclusive,
      inst: t,
      continue: !e.abort
    });
  };
}), xn = /* @__PURE__ */ k("$ZodCheckMultipleOf", (t, e) => {
  ft.init(t, e), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = e.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof e.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % e.value === BigInt(0) : ba(i.value, e.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: e.value,
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), gn = /* @__PURE__ */ k("$ZodCheckNumberFormat", (t, e) => {
  ft.init(t, e), e.format = e.format || "float64";
  const i = e.format?.includes("int"), s = i ? "int" : "number", [a, u] = Ta[e.format];
  t._zod.onattach.push((h) => {
    const d = h._zod.bag;
    d.format = e.format, d.minimum = a, d.maximum = u, i && (d.pattern = fn);
  }), t._zod.check = (h) => {
    const d = h.value;
    if (i) {
      if (!Number.isInteger(d)) {
        h.issues.push({
          expected: s,
          format: e.format,
          code: "invalid_type",
          continue: !1,
          input: d,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(d)) {
        d > 0 ? h.issues.push({
          input: d,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !e.abort
        }) : h.issues.push({
          input: d,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !e.abort
        });
        return;
      }
    }
    d < a && h.issues.push({
      origin: "number",
      input: d,
      code: "too_small",
      minimum: a,
      inclusive: !0,
      inst: t,
      continue: !e.abort
    }), d > u && h.issues.push({
      origin: "number",
      input: d,
      code: "too_big",
      maximum: u,
      inst: t
    });
  };
}), bn = /* @__PURE__ */ k("$ZodCheckMaxLength", (t, e) => {
  var i;
  ft.init(t, e), (i = t._zod.def).when ?? (i.when = (s) => {
    const a = s.value;
    return !mi(a) && a.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const a = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    e.maximum < a && (s._zod.bag.maximum = e.maximum);
  }), t._zod.check = (s) => {
    const a = s.value;
    if (a.length <= e.maximum)
      return;
    const u = vi(a);
    s.issues.push({
      origin: u,
      code: "too_big",
      maximum: e.maximum,
      inclusive: !0,
      input: a,
      inst: t,
      continue: !e.abort
    });
  };
}), kn = /* @__PURE__ */ k("$ZodCheckMinLength", (t, e) => {
  var i;
  ft.init(t, e), (i = t._zod.def).when ?? (i.when = (s) => {
    const a = s.value;
    return !mi(a) && a.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const a = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    e.minimum > a && (s._zod.bag.minimum = e.minimum);
  }), t._zod.check = (s) => {
    const a = s.value;
    if (a.length >= e.minimum)
      return;
    const u = vi(a);
    s.issues.push({
      origin: u,
      code: "too_small",
      minimum: e.minimum,
      inclusive: !0,
      input: a,
      inst: t,
      continue: !e.abort
    });
  };
}), Sn = /* @__PURE__ */ k("$ZodCheckLengthEquals", (t, e) => {
  var i;
  ft.init(t, e), (i = t._zod.def).when ?? (i.when = (s) => {
    const a = s.value;
    return !mi(a) && a.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.minimum = e.length, a.maximum = e.length, a.length = e.length;
  }), t._zod.check = (s) => {
    const a = s.value, u = a.length;
    if (u === e.length)
      return;
    const h = vi(a), d = u > e.length;
    s.issues.push({
      origin: h,
      ...d ? { code: "too_big", maximum: e.length } : { code: "too_small", minimum: e.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: t,
      continue: !e.abort
    });
  };
}), Be = /* @__PURE__ */ k("$ZodCheckStringFormat", (t, e) => {
  var i, s;
  ft.init(t, e), t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.format = e.format, e.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(e.pattern));
  }), e.pattern ? (i = t._zod).check ?? (i.check = (a) => {
    e.pattern.lastIndex = 0, !e.pattern.test(a.value) && a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: e.format,
      input: a.value,
      ...e.pattern ? { pattern: e.pattern.toString() } : {},
      inst: t,
      continue: !e.abort
    });
  }) : (s = t._zod).check ?? (s.check = () => {
  });
}), wn = /* @__PURE__ */ k("$ZodCheckRegex", (t, e) => {
  Be.init(t, e), t._zod.check = (i) => {
    e.pattern.lastIndex = 0, !e.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: e.pattern.toString(),
      inst: t,
      continue: !e.abort
    });
  };
}), Tn = /* @__PURE__ */ k("$ZodCheckLowerCase", (t, e) => {
  e.pattern ?? (e.pattern = yn), Be.init(t, e);
}), _n = /* @__PURE__ */ k("$ZodCheckUpperCase", (t, e) => {
  e.pattern ?? (e.pattern = vn), Be.init(t, e);
}), Pn = /* @__PURE__ */ k("$ZodCheckIncludes", (t, e) => {
  ft.init(t, e);
  const i = Xt(e.includes), s = new RegExp(typeof e.position == "number" ? `^.{${e.position}}${i}` : i);
  e.pattern = s, t._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (a) => {
    a.value.includes(e.includes, e.position) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: e.includes,
      input: a.value,
      inst: t,
      continue: !e.abort
    });
  };
}), An = /* @__PURE__ */ k("$ZodCheckStartsWith", (t, e) => {
  ft.init(t, e);
  const i = new RegExp(`^${Xt(e.prefix)}.*`);
  e.pattern ?? (e.pattern = i), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(i);
  }), t._zod.check = (s) => {
    s.value.startsWith(e.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: e.prefix,
      input: s.value,
      inst: t,
      continue: !e.abort
    });
  };
}), Cn = /* @__PURE__ */ k("$ZodCheckEndsWith", (t, e) => {
  ft.init(t, e);
  const i = new RegExp(`.*${Xt(e.suffix)}$`);
  e.pattern ?? (e.pattern = i), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(i);
  }), t._zod.check = (s) => {
    s.value.endsWith(e.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: e.suffix,
      input: s.value,
      inst: t,
      continue: !e.abort
    });
  };
}), En = /* @__PURE__ */ k("$ZodCheckOverwrite", (t, e) => {
  ft.init(t, e), t._zod.check = (i) => {
    i.value = e.tx(i.value);
  };
});
class In {
  constructor(e = []) {
    this.content = [], this.indent = 0, this && (this.args = e);
  }
  indented(e) {
    this.indent += 1, e(this), this.indent -= 1;
  }
  write(e) {
    if (typeof e == "function") {
      e(this, { execution: "sync" }), e(this, { execution: "async" });
      return;
    }
    const i = e.split(`
`).filter((u) => u), s = Math.min(...i.map((u) => u.length - u.trimStart().length)), a = i.map((u) => u.slice(s)).map((u) => " ".repeat(this.indent * 2) + u);
    for (const u of a)
      this.content.push(u);
  }
  compile() {
    const e = Function, i = this?.args, s = [...(this?.content ?? [""]).map((a) => `  ${a}`)];
    return new e(...i, s.join(`
`));
  }
}
const Nn = {
  major: 4,
  minor: 1,
  patch: 12
}, X = /* @__PURE__ */ k("$ZodType", (t, e) => {
  var i;
  t ?? (t = {}), t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = Nn;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const a of s)
    for (const u of a._zod.onattach)
      u(t);
  if (s.length === 0)
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const a = (h, d, y) => {
      let o = qt(h), S;
      for (const P of d) {
        if (P._zod.def.when) {
          if (!P._zod.def.when(h))
            continue;
        } else if (o)
          continue;
        const R = h.issues.length, $ = P._zod.check(h);
        if ($ instanceof Promise && y?.async === !1)
          throw new Wt();
        if (S || $ instanceof Promise)
          S = (S ?? Promise.resolve()).then(async () => {
            await $, h.issues.length !== R && (o || (o = qt(h, R)));
          });
        else {
          if (h.issues.length === R)
            continue;
          o || (o = qt(h, R));
        }
      }
      return S ? S.then(() => h) : h;
    }, u = (h, d, y) => {
      if (qt(h))
        return h.aborted = !0, h;
      const o = a(d, s, y);
      if (o instanceof Promise) {
        if (y.async === !1)
          throw new Wt();
        return o.then((S) => t._zod.parse(S, y));
      }
      return t._zod.parse(o, y);
    };
    t._zod.run = (h, d) => {
      if (d.skipChecks)
        return t._zod.parse(h, d);
      if (d.direction === "backward") {
        const o = t._zod.parse({ value: h.value, issues: [] }, { ...d, skipChecks: !0 });
        return o instanceof Promise ? o.then((S) => u(S, h, d)) : u(o, h, d);
      }
      const y = t._zod.parse(h, d);
      if (y instanceof Promise) {
        if (d.async === !1)
          throw new Wt();
        return y.then((o) => a(o, s, d));
      }
      return a(y, s, d);
    };
  }
  t["~standard"] = {
    validate: (a) => {
      try {
        const u = Ra(t, a);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return Ma(t, a).then((u) => u.success ? { value: u.data } : { issues: u.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), bi = /* @__PURE__ */ k("$ZodString", (t, e) => {
  X.init(t, e), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? ln(t._zod.bag), t._zod.parse = (i, s) => {
    if (e.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: t
    }), i;
  };
}), W = /* @__PURE__ */ k("$ZodStringFormat", (t, e) => {
  Be.init(t, e), bi.init(t, e);
}), Ln = /* @__PURE__ */ k("$ZodGUID", (t, e) => {
  e.pattern ?? (e.pattern = Xa), W.init(t, e);
}), On = /* @__PURE__ */ k("$ZodUUID", (t, e) => {
  if (e.version) {
    const i = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[e.version];
    if (i === void 0)
      throw new Error(`Invalid UUID version: "${e.version}"`);
    e.pattern ?? (e.pattern = $i(i));
  } else
    e.pattern ?? (e.pattern = $i());
  W.init(t, e);
}), Rn = /* @__PURE__ */ k("$ZodEmail", (t, e) => {
  e.pattern ?? (e.pattern = Ya), W.init(t, e);
}), Mn = /* @__PURE__ */ k("$ZodURL", (t, e) => {
  W.init(t, e), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), a = new URL(s);
      e.hostname && (e.hostname.lastIndex = 0, e.hostname.test(a.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: on.source,
        input: i.value,
        inst: t,
        continue: !e.abort
      })), e.protocol && (e.protocol.lastIndex = 0, e.protocol.test(a.protocol.endsWith(":") ? a.protocol.slice(0, -1) : a.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: e.protocol.source,
        input: i.value,
        inst: t,
        continue: !e.abort
      })), e.normalize ? i.value = a.href : i.value = s;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: t,
        continue: !e.abort
      });
    }
  };
}), Dn = /* @__PURE__ */ k("$ZodEmoji", (t, e) => {
  e.pattern ?? (e.pattern = tn()), W.init(t, e);
}), zn = /* @__PURE__ */ k("$ZodNanoID", (t, e) => {
  e.pattern ?? (e.pattern = Ja), W.init(t, e);
}), Vn = /* @__PURE__ */ k("$ZodCUID", (t, e) => {
  e.pattern ?? (e.pattern = Za), W.init(t, e);
}), Fn = /* @__PURE__ */ k("$ZodCUID2", (t, e) => {
  e.pattern ?? (e.pattern = qa), W.init(t, e);
}), jn = /* @__PURE__ */ k("$ZodULID", (t, e) => {
  e.pattern ?? (e.pattern = Ha), W.init(t, e);
}), Bn = /* @__PURE__ */ k("$ZodXID", (t, e) => {
  e.pattern ?? (e.pattern = Wa), W.init(t, e);
}), $n = /* @__PURE__ */ k("$ZodKSUID", (t, e) => {
  e.pattern ?? (e.pattern = Ka), W.init(t, e);
}), Un = /* @__PURE__ */ k("$ZodISODateTime", (t, e) => {
  e.pattern ?? (e.pattern = pn(e)), W.init(t, e);
}), Zn = /* @__PURE__ */ k("$ZodISODate", (t, e) => {
  e.pattern ?? (e.pattern = cn), W.init(t, e);
}), qn = /* @__PURE__ */ k("$ZodISOTime", (t, e) => {
  e.pattern ?? (e.pattern = hn(e)), W.init(t, e);
}), Hn = /* @__PURE__ */ k("$ZodISODuration", (t, e) => {
  e.pattern ?? (e.pattern = Ga), W.init(t, e);
}), Wn = /* @__PURE__ */ k("$ZodIPv4", (t, e) => {
  e.pattern ?? (e.pattern = en), W.init(t, e), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), Kn = /* @__PURE__ */ k("$ZodIPv6", (t, e) => {
  e.pattern ?? (e.pattern = sn), W.init(t, e), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv6";
  }), t._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: t,
        continue: !e.abort
      });
    }
  };
}), Jn = /* @__PURE__ */ k("$ZodCIDRv4", (t, e) => {
  e.pattern ?? (e.pattern = rn), W.init(t, e);
}), Gn = /* @__PURE__ */ k("$ZodCIDRv6", (t, e) => {
  e.pattern ?? (e.pattern = an), W.init(t, e), t._zod.check = (i) => {
    const s = i.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [a, u] = s;
      if (!u)
        throw new Error();
      const h = Number(u);
      if (`${h}` !== u)
        throw new Error();
      if (h < 0 || h > 128)
        throw new Error();
      new URL(`http://[${a}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: t,
        continue: !e.abort
      });
    }
  };
});
function ir(t) {
  if (t === "")
    return !0;
  if (t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const Xn = /* @__PURE__ */ k("$ZodBase64", (t, e) => {
  e.pattern ?? (e.pattern = nn), W.init(t, e), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    ir(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
});
function Yn(t) {
  if (!Gs.test(t))
    return !1;
  const e = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
  return ir(i);
}
const Qn = /* @__PURE__ */ k("$ZodBase64URL", (t, e) => {
  e.pattern ?? (e.pattern = Gs), W.init(t, e), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    Yn(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), to = /* @__PURE__ */ k("$ZodE164", (t, e) => {
  e.pattern ?? (e.pattern = un), W.init(t, e);
});
function eo(t, e = null) {
  try {
    const i = t.split(".");
    if (i.length !== 3)
      return !1;
    const [s] = i;
    if (!s)
      return !1;
    const a = JSON.parse(atob(s));
    return !("typ" in a && a?.typ !== "JWT" || !a.alg || e && (!("alg" in a) || a.alg !== e));
  } catch {
    return !1;
  }
}
const io = /* @__PURE__ */ k("$ZodJWT", (t, e) => {
  W.init(t, e), t._zod.check = (i) => {
    eo(i.value, e.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), sr = /* @__PURE__ */ k("$ZodNumber", (t, e) => {
  X.init(t, e), t._zod.pattern = t._zod.bag.pattern ?? dn, t._zod.parse = (i, s) => {
    if (e.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const a = i.value;
    if (typeof a == "number" && !Number.isNaN(a) && Number.isFinite(a))
      return i;
    const u = typeof a == "number" ? Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: a,
      inst: t,
      ...u ? { received: u } : {}
    }), i;
  };
}), so = /* @__PURE__ */ k("$ZodNumber", (t, e) => {
  gn.init(t, e), sr.init(t, e);
}), ro = /* @__PURE__ */ k("$ZodBoolean", (t, e) => {
  X.init(t, e), t._zod.pattern = mn, t._zod.parse = (i, s) => {
    if (e.coerce)
      try {
        i.value = !!i.value;
      } catch {
      }
    const a = i.value;
    return typeof a == "boolean" || i.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: a,
      inst: t
    }), i;
  };
}), ao = /* @__PURE__ */ k("$ZodUnknown", (t, e) => {
  X.init(t, e), t._zod.parse = (i) => i;
}), no = /* @__PURE__ */ k("$ZodNever", (t, e) => {
  X.init(t, e), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function Ui(t, e, i) {
  t.issues.length && e.issues.push(...Ht(i, t.issues)), e.value[i] = t.value;
}
const oo = /* @__PURE__ */ k("$ZodArray", (t, e) => {
  X.init(t, e), t._zod.parse = (i, s) => {
    const a = i.value;
    if (!Array.isArray(a))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: a,
        inst: t
      }), i;
    i.value = Array(a.length);
    const u = [];
    for (let h = 0; h < a.length; h++) {
      const d = a[h], y = e.element._zod.run({
        value: d,
        issues: []
      }, s);
      y instanceof Promise ? u.push(y.then((o) => Ui(o, i, h))) : Ui(y, i, h);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Ne(t, e, i, s) {
  t.issues.length && e.issues.push(...Ht(i, t.issues)), t.value === void 0 ? i in s && (e.value[i] = void 0) : e.value[i] = t.value;
}
function rr(t) {
  const e = Object.keys(t.shape);
  for (const s of e)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = wa(t.shape);
  return {
    ...t,
    keys: e,
    keySet: new Set(e),
    numKeys: e.length,
    optionalKeys: new Set(i)
  };
}
function ar(t, e, i, s, a, u) {
  const h = [], d = a.keySet, y = a.catchall._zod, o = y.def.type;
  for (const S of Object.keys(e)) {
    if (d.has(S))
      continue;
    if (o === "never") {
      h.push(S);
      continue;
    }
    const P = y.run({ value: e[S], issues: [] }, s);
    P instanceof Promise ? t.push(P.then((R) => Ne(R, i, S, e))) : Ne(P, i, S, e);
  }
  return h.length && i.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: e,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const uo = /* @__PURE__ */ k("$ZodObject", (t, e) => {
  if (X.init(t, e), !Object.getOwnPropertyDescriptor(e, "shape")?.get) {
    const h = e.shape;
    Object.defineProperty(e, "shape", {
      get: () => {
        const d = { ...h };
        return Object.defineProperty(e, "shape", {
          value: d
        }), d;
      }
    });
  }
  const i = di(() => rr(e));
  U(t._zod, "propValues", () => {
    const h = e.shape, d = {};
    for (const y in h) {
      const o = h[y]._zod;
      if (o.values) {
        d[y] ?? (d[y] = /* @__PURE__ */ new Set());
        for (const S of o.values)
          d[y].add(S);
      }
    }
    return d;
  });
  const s = Ie, a = e.catchall;
  let u;
  t._zod.parse = (h, d) => {
    u ?? (u = i.value);
    const y = h.value;
    if (!s(y))
      return h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: y,
        inst: t
      }), h;
    h.value = {};
    const o = [], S = u.shape;
    for (const P of u.keys) {
      const R = S[P]._zod.run({ value: y[P], issues: [] }, d);
      R instanceof Promise ? o.push(R.then(($) => Ne($, h, P, y))) : Ne(R, h, P, y);
    }
    return a ? ar(o, y, h, d, i.value, t) : o.length ? Promise.all(o).then(() => h) : h;
  };
}), co = /* @__PURE__ */ k("$ZodObjectJIT", (t, e) => {
  uo.init(t, e);
  const i = t._zod.parse, s = di(() => rr(e)), a = (P) => {
    const R = new In(["shape", "payload", "ctx"]), $ = s.value, tt = (dt) => {
      const xt = Bi(dt);
      return `shape[${xt}]._zod.run({ value: input[${xt}], issues: [] }, ctx)`;
    };
    R.write("const input = payload.value;");
    const at = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const dt of $.keys)
      at[dt] = `key_${O++}`;
    R.write("const newResult = {};");
    for (const dt of $.keys) {
      const xt = at[dt], Ft = Bi(dt);
      R.write(`const ${xt} = ${tt(dt)};`), R.write(`
        if (${xt}.issues.length) {
          payload.issues = payload.issues.concat(${xt}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Ft}, ...iss.path] : [${Ft}]
          })));
        }
        
        
        if (${xt}.value === undefined) {
          if (${Ft} in input) {
            newResult[${Ft}] = undefined;
          }
        } else {
          newResult[${Ft}] = ${xt}.value;
        }
        
      `);
    }
    R.write("payload.value = newResult;"), R.write("return payload;");
    const rt = R.compile();
    return (dt, xt) => rt(P, dt, xt);
  };
  let u;
  const h = Ie, d = !Zs.jitless, y = d && ka.value, o = e.catchall;
  let S;
  t._zod.parse = (P, R) => {
    S ?? (S = s.value);
    const $ = P.value;
    return h($) ? d && y && R?.async === !1 && R.jitless !== !0 ? (u || (u = a(e.shape)), P = u(P, R), o ? ar([], $, P, R, S, t) : P) : i(P, R) : (P.issues.push({
      expected: "object",
      code: "invalid_type",
      input: $,
      inst: t
    }), P);
  };
});
function Zi(t, e, i, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return e.value = u.value, e;
  const a = t.filter((u) => !qt(u));
  return a.length === 1 ? (e.value = a[0].value, a[0]) : (e.issues.push({
    code: "invalid_union",
    input: e.value,
    inst: i,
    errors: t.map((u) => u.issues.map((h) => Dt(h, s, Mt())))
  }), e);
}
const ho = /* @__PURE__ */ k("$ZodUnion", (t, e) => {
  X.init(t, e), U(t._zod, "optin", () => e.options.some((a) => a._zod.optin === "optional") ? "optional" : void 0), U(t._zod, "optout", () => e.options.some((a) => a._zod.optout === "optional") ? "optional" : void 0), U(t._zod, "values", () => {
    if (e.options.every((a) => a._zod.values))
      return new Set(e.options.flatMap((a) => Array.from(a._zod.values)));
  }), U(t._zod, "pattern", () => {
    if (e.options.every((a) => a._zod.pattern)) {
      const a = e.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${a.map((u) => yi(u.source)).join("|")})$`);
    }
  });
  const i = e.options.length === 1, s = e.options[0]._zod.run;
  t._zod.parse = (a, u) => {
    if (i)
      return s(a, u);
    let h = !1;
    const d = [];
    for (const y of e.options) {
      const o = y._zod.run({
        value: a.value,
        issues: []
      }, u);
      if (o instanceof Promise)
        d.push(o), h = !0;
      else {
        if (o.issues.length === 0)
          return o;
        d.push(o);
      }
    }
    return h ? Promise.all(d).then((y) => Zi(y, a, t, u)) : Zi(d, a, t, u);
  };
}), po = /* @__PURE__ */ k("$ZodIntersection", (t, e) => {
  X.init(t, e), t._zod.parse = (i, s) => {
    const a = i.value, u = e.left._zod.run({ value: a, issues: [] }, s), h = e.right._zod.run({ value: a, issues: [] }, s);
    return u instanceof Promise || h instanceof Promise ? Promise.all([u, h]).then(([d, y]) => qi(i, d, y)) : qi(i, u, h);
  };
});
function ri(t, e) {
  if (t === e)
    return { valid: !0, data: t };
  if (t instanceof Date && e instanceof Date && +t == +e)
    return { valid: !0, data: t };
  if (Gt(t) && Gt(e)) {
    const i = Object.keys(e), s = Object.keys(t).filter((u) => i.indexOf(u) !== -1), a = { ...t, ...e };
    for (const u of s) {
      const h = ri(t[u], e[u]);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...h.mergeErrorPath]
        };
      a[u] = h.data;
    }
    return { valid: !0, data: a };
  }
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const a = t[s], u = e[s], h = ri(a, u);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...h.mergeErrorPath]
        };
      i.push(h.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function qi(t, e, i) {
  if (e.issues.length && t.issues.push(...e.issues), i.issues.length && t.issues.push(...i.issues), qt(t))
    return t;
  const s = ri(e.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const lo = /* @__PURE__ */ k("$ZodRecord", (t, e) => {
  X.init(t, e), t._zod.parse = (i, s) => {
    const a = i.value;
    if (!Gt(a))
      return i.issues.push({
        expected: "record",
        code: "invalid_type",
        input: a,
        inst: t
      }), i;
    const u = [];
    if (e.keyType._zod.values) {
      const h = e.keyType._zod.values;
      i.value = {};
      for (const y of h)
        if (typeof y == "string" || typeof y == "number" || typeof y == "symbol") {
          const o = e.valueType._zod.run({ value: a[y], issues: [] }, s);
          o instanceof Promise ? u.push(o.then((S) => {
            S.issues.length && i.issues.push(...Ht(y, S.issues)), i.value[y] = S.value;
          })) : (o.issues.length && i.issues.push(...Ht(y, o.issues)), i.value[y] = o.value);
        }
      let d;
      for (const y in a)
        h.has(y) || (d = d ?? [], d.push(y));
      d && d.length > 0 && i.issues.push({
        code: "unrecognized_keys",
        input: a,
        inst: t,
        keys: d
      });
    } else {
      i.value = {};
      for (const h of Reflect.ownKeys(a)) {
        if (h === "__proto__")
          continue;
        const d = e.keyType._zod.run({ value: h, issues: [] }, s);
        if (d instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (d.issues.length) {
          i.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: d.issues.map((o) => Dt(o, s, Mt())),
            input: h,
            path: [h],
            inst: t
          }), i.value[d.value] = d.value;
          continue;
        }
        const y = e.valueType._zod.run({ value: a[h], issues: [] }, s);
        y instanceof Promise ? u.push(y.then((o) => {
          o.issues.length && i.issues.push(...Ht(h, o.issues)), i.value[d.value] = o.value;
        })) : (y.issues.length && i.issues.push(...Ht(h, y.issues)), i.value[d.value] = y.value);
      }
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
}), fo = /* @__PURE__ */ k("$ZodEnum", (t, e) => {
  X.init(t, e);
  const i = ga(e.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((a) => Sa.has(typeof a)).map((a) => typeof a == "string" ? Xt(a) : a.toString()).join("|")})$`), t._zod.parse = (a, u) => {
    const h = a.value;
    return s.has(h) || a.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: t
    }), a;
  };
}), mo = /* @__PURE__ */ k("$ZodLiteral", (t, e) => {
  if (X.init(t, e), e.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  t._zod.values = new Set(e.values), t._zod.pattern = new RegExp(`^(${e.values.map((i) => typeof i == "string" ? Xt(i) : i ? Xt(i.toString()) : String(i)).join("|")})$`), t._zod.parse = (i, s) => {
    const a = i.value;
    return t._zod.values.has(a) || i.issues.push({
      code: "invalid_value",
      values: e.values,
      input: a,
      inst: t
    }), i;
  };
}), yo = /* @__PURE__ */ k("$ZodTransform", (t, e) => {
  X.init(t, e), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new Us(t.constructor.name);
    const a = e.transform(i.value, i);
    if (s.async)
      return (a instanceof Promise ? a : Promise.resolve(a)).then((u) => (i.value = u, i));
    if (a instanceof Promise)
      throw new Wt();
    return i.value = a, i;
  };
});
function Hi(t, e) {
  return t.issues.length && e === void 0 ? { issues: [], value: void 0 } : t;
}
const vo = /* @__PURE__ */ k("$ZodOptional", (t, e) => {
  X.init(t, e), t._zod.optin = "optional", t._zod.optout = "optional", U(t._zod, "values", () => e.innerType._zod.values ? /* @__PURE__ */ new Set([...e.innerType._zod.values, void 0]) : void 0), U(t._zod, "pattern", () => {
    const i = e.innerType._zod.pattern;
    return i ? new RegExp(`^(${yi(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (e.innerType._zod.optin === "optional") {
      const a = e.innerType._zod.run(i, s);
      return a instanceof Promise ? a.then((u) => Hi(u, i.value)) : Hi(a, i.value);
    }
    return i.value === void 0 ? i : e.innerType._zod.run(i, s);
  };
}), xo = /* @__PURE__ */ k("$ZodNullable", (t, e) => {
  X.init(t, e), U(t._zod, "optin", () => e.innerType._zod.optin), U(t._zod, "optout", () => e.innerType._zod.optout), U(t._zod, "pattern", () => {
    const i = e.innerType._zod.pattern;
    return i ? new RegExp(`^(${yi(i.source)}|null)$`) : void 0;
  }), U(t._zod, "values", () => e.innerType._zod.values ? /* @__PURE__ */ new Set([...e.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : e.innerType._zod.run(i, s);
}), go = /* @__PURE__ */ k("$ZodDefault", (t, e) => {
  X.init(t, e), t._zod.optin = "optional", U(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return e.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = e.defaultValue, i;
    const a = e.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then((u) => Wi(u, e)) : Wi(a, e);
  };
});
function Wi(t, e) {
  return t.value === void 0 && (t.value = e.defaultValue), t;
}
const bo = /* @__PURE__ */ k("$ZodPrefault", (t, e) => {
  X.init(t, e), t._zod.optin = "optional", U(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = e.defaultValue), e.innerType._zod.run(i, s));
}), ko = /* @__PURE__ */ k("$ZodNonOptional", (t, e) => {
  X.init(t, e), U(t._zod, "values", () => {
    const i = e.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const a = e.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then((u) => Ki(u, t)) : Ki(a, t);
  };
});
function Ki(t, e) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: e
  }), t;
}
const So = /* @__PURE__ */ k("$ZodCatch", (t, e) => {
  X.init(t, e), U(t._zod, "optin", () => e.innerType._zod.optin), U(t._zod, "optout", () => e.innerType._zod.optout), U(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return e.innerType._zod.run(i, s);
    const a = e.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then((u) => (i.value = u.value, u.issues.length && (i.value = e.catchValue({
      ...i,
      error: {
        issues: u.issues.map((h) => Dt(h, s, Mt()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = a.value, a.issues.length && (i.value = e.catchValue({
      ...i,
      error: {
        issues: a.issues.map((u) => Dt(u, s, Mt()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), wo = /* @__PURE__ */ k("$ZodPipe", (t, e) => {
  X.init(t, e), U(t._zod, "values", () => e.in._zod.values), U(t._zod, "optin", () => e.in._zod.optin), U(t._zod, "optout", () => e.out._zod.optout), U(t._zod, "propValues", () => e.in._zod.propValues), t._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const u = e.out._zod.run(i, s);
      return u instanceof Promise ? u.then((h) => ke(h, e.in, s)) : ke(u, e.in, s);
    }
    const a = e.in._zod.run(i, s);
    return a instanceof Promise ? a.then((u) => ke(u, e.out, s)) : ke(a, e.out, s);
  };
});
function ke(t, e, i) {
  return t.issues.length ? (t.aborted = !0, t) : e._zod.run({ value: t.value, issues: t.issues }, i);
}
const To = /* @__PURE__ */ k("$ZodReadonly", (t, e) => {
  X.init(t, e), U(t._zod, "propValues", () => e.innerType._zod.propValues), U(t._zod, "values", () => e.innerType._zod.values), U(t._zod, "optin", () => e.innerType._zod.optin), U(t._zod, "optout", () => e.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return e.innerType._zod.run(i, s);
    const a = e.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then(Ji) : Ji(a);
  };
});
function Ji(t) {
  return t.value = Object.freeze(t.value), t;
}
const _o = /* @__PURE__ */ k("$ZodCustom", (t, e) => {
  ft.init(t, e), X.init(t, e), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, a = e.fn(s);
    if (a instanceof Promise)
      return a.then((u) => Gi(u, i, s, t));
    Gi(a, i, s, t);
  };
});
function Gi(t, e, i, s) {
  if (!t) {
    const a = {
      code: "custom",
      input: i,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (a.params = s._zod.def.params), e.issues.push(ce(a));
  }
}
class Po {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(e, ...i) {
    const s = i[0];
    if (this._map.set(e, s), s && typeof s == "object" && "id" in s) {
      if (this._idmap.has(s.id))
        throw new Error(`ID ${s.id} already exists in the registry`);
      this._idmap.set(s.id, e);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(e) {
    const i = this._map.get(e);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(e), this;
  }
  get(e) {
    const i = e._zod.parent;
    if (i) {
      const s = { ...this.get(i) ?? {} };
      delete s.id;
      const a = { ...s, ...this._map.get(e) };
      return Object.keys(a).length ? a : void 0;
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}
function Ao() {
  return new Po();
}
const Se = /* @__PURE__ */ Ao();
function Co(t, e) {
  return new t({
    type: "string",
    ...L(e)
  });
}
function Eo(t, e) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Xi(t, e) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Io(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function No(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...L(e)
  });
}
function Lo(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...L(e)
  });
}
function Oo(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...L(e)
  });
}
function Ro(t, e) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Mo(t, e) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Do(t, e) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function zo(t, e) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Vo(t, e) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Fo(t, e) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function jo(t, e) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Bo(t, e) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function $o(t, e) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Uo(t, e) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Zo(t, e) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function qo(t, e) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Ho(t, e) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Wo(t, e) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Ko(t, e) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Jo(t, e) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...L(e)
  });
}
function Go(t, e) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...L(e)
  });
}
function Xo(t, e) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...L(e)
  });
}
function Yo(t, e) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...L(e)
  });
}
function Qo(t, e) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...L(e)
  });
}
function tu(t, e) {
  return new t({
    type: "number",
    checks: [],
    ...L(e)
  });
}
function eu(t, e) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...L(e)
  });
}
function iu(t, e) {
  return new t({
    type: "boolean",
    ...L(e)
  });
}
function su(t) {
  return new t({
    type: "unknown"
  });
}
function ru(t, e) {
  return new t({
    type: "never",
    ...L(e)
  });
}
function Yi(t, e) {
  return new tr({
    check: "less_than",
    ...L(e),
    value: t,
    inclusive: !1
  });
}
function Xe(t, e) {
  return new tr({
    check: "less_than",
    ...L(e),
    value: t,
    inclusive: !0
  });
}
function Qi(t, e) {
  return new er({
    check: "greater_than",
    ...L(e),
    value: t,
    inclusive: !1
  });
}
function Ye(t, e) {
  return new er({
    check: "greater_than",
    ...L(e),
    value: t,
    inclusive: !0
  });
}
function ts(t, e) {
  return new xn({
    check: "multiple_of",
    ...L(e),
    value: t
  });
}
function nr(t, e) {
  return new bn({
    check: "max_length",
    ...L(e),
    maximum: t
  });
}
function Le(t, e) {
  return new kn({
    check: "min_length",
    ...L(e),
    minimum: t
  });
}
function or(t, e) {
  return new Sn({
    check: "length_equals",
    ...L(e),
    length: t
  });
}
function au(t, e) {
  return new wn({
    check: "string_format",
    format: "regex",
    ...L(e),
    pattern: t
  });
}
function nu(t) {
  return new Tn({
    check: "string_format",
    format: "lowercase",
    ...L(t)
  });
}
function ou(t) {
  return new _n({
    check: "string_format",
    format: "uppercase",
    ...L(t)
  });
}
function uu(t, e) {
  return new Pn({
    check: "string_format",
    format: "includes",
    ...L(e),
    includes: t
  });
}
function cu(t, e) {
  return new An({
    check: "string_format",
    format: "starts_with",
    ...L(e),
    prefix: t
  });
}
function hu(t, e) {
  return new Cn({
    check: "string_format",
    format: "ends_with",
    ...L(e),
    suffix: t
  });
}
function me(t) {
  return new En({
    check: "overwrite",
    tx: t
  });
}
function pu(t) {
  return me((e) => e.normalize(t));
}
function lu() {
  return me((t) => t.trim());
}
function fu() {
  return me((t) => t.toLowerCase());
}
function du() {
  return me((t) => t.toUpperCase());
}
function mu(t, e, i) {
  return new t({
    type: "array",
    element: e,
    // get element() {
    //   return element;
    // },
    ...L(i)
  });
}
function yu(t, e, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: e,
    ...L(i)
  });
}
function vu(t) {
  const e = xu((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(ce(s, i.value, e._zod.def));
    else {
      const a = s;
      a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = i.value), a.inst ?? (a.inst = e), a.continue ?? (a.continue = !e._zod.def.abort), i.issues.push(ce(a));
    }
  }, t(i.value, i)));
  return e;
}
function xu(t, e) {
  const i = new ft({
    check: "custom",
    ...L(e)
  });
  return i._zod.check = t, i;
}
const gu = /* @__PURE__ */ k("ZodISODateTime", (t, e) => {
  Un.init(t, e), Y.init(t, e);
});
function bu(t) {
  return Go(gu, t);
}
const ku = /* @__PURE__ */ k("ZodISODate", (t, e) => {
  Zn.init(t, e), Y.init(t, e);
});
function Su(t) {
  return Xo(ku, t);
}
const wu = /* @__PURE__ */ k("ZodISOTime", (t, e) => {
  qn.init(t, e), Y.init(t, e);
});
function Tu(t) {
  return Yo(wu, t);
}
const _u = /* @__PURE__ */ k("ZodISODuration", (t, e) => {
  Hn.init(t, e), Y.init(t, e);
});
function Pu(t) {
  return Qo(_u, t);
}
const Au = (t, e) => {
  Ks.init(t, e), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => Oa(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => La(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, si, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, si, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return t.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, wt = k("ZodError", Au, {
  Parent: Error
}), Cu = /* @__PURE__ */ xi(wt), Eu = /* @__PURE__ */ gi(wt), Iu = /* @__PURE__ */ Fe(wt), Nu = /* @__PURE__ */ je(wt), Lu = /* @__PURE__ */ Da(wt), Ou = /* @__PURE__ */ za(wt), Ru = /* @__PURE__ */ Va(wt), Mu = /* @__PURE__ */ Fa(wt), Du = /* @__PURE__ */ ja(wt), zu = /* @__PURE__ */ Ba(wt), Vu = /* @__PURE__ */ $a(wt), Fu = /* @__PURE__ */ Ua(wt), Q = /* @__PURE__ */ k("ZodType", (t, e) => (X.init(t, e), t.def = e, t.type = e.type, Object.defineProperty(t, "_def", { value: e }), t.check = (...i) => t.clone(Ut(e, {
  checks: [
    ...e.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => Vt(t, i, s), t.brand = () => t, t.register = (i, s) => (i.add(t, s), t), t.parse = (i, s) => Cu(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => Iu(t, i, s), t.parseAsync = async (i, s) => Eu(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => Nu(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => Lu(t, i, s), t.decode = (i, s) => Ou(t, i, s), t.encodeAsync = async (i, s) => Ru(t, i, s), t.decodeAsync = async (i, s) => Mu(t, i, s), t.safeEncode = (i, s) => Du(t, i, s), t.safeDecode = (i, s) => zu(t, i, s), t.safeEncodeAsync = async (i, s) => Vu(t, i, s), t.safeDecodeAsync = async (i, s) => Fu(t, i, s), t.refine = (i, s) => t.check(Lc(i, s)), t.superRefine = (i) => t.check(Oc(i)), t.overwrite = (i) => t.check(me(i)), t.optional = () => rs(t), t.nullable = () => as(t), t.nullish = () => rs(as(t)), t.nonoptional = (i) => _c(t, i), t.array = () => ki(t), t.or = (i) => At([t, i]), t.and = (i) => dc(t, i), t.transform = (i) => ns(t, gc(i)), t.default = (i) => Sc(t, i), t.prefault = (i) => Tc(t, i), t.catch = (i) => Ac(t, i), t.pipe = (i) => ns(t, i), t.readonly = () => Ic(t), t.describe = (i) => {
  const s = t.clone();
  return Se.add(s, { description: i }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return Se.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...i) => {
  if (i.length === 0)
    return Se.get(t);
  const s = t.clone();
  return Se.add(s, i[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), ur = /* @__PURE__ */ k("_ZodString", (t, e) => {
  bi.init(t, e), Q.init(t, e);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(au(...s)), t.includes = (...s) => t.check(uu(...s)), t.startsWith = (...s) => t.check(cu(...s)), t.endsWith = (...s) => t.check(hu(...s)), t.min = (...s) => t.check(Le(...s)), t.max = (...s) => t.check(nr(...s)), t.length = (...s) => t.check(or(...s)), t.nonempty = (...s) => t.check(Le(1, ...s)), t.lowercase = (s) => t.check(nu(s)), t.uppercase = (s) => t.check(ou(s)), t.trim = () => t.check(lu()), t.normalize = (...s) => t.check(pu(...s)), t.toLowerCase = () => t.check(fu()), t.toUpperCase = () => t.check(du());
}), ju = /* @__PURE__ */ k("ZodString", (t, e) => {
  bi.init(t, e), ur.init(t, e), t.email = (i) => t.check(Eo(Bu, i)), t.url = (i) => t.check(Ro($u, i)), t.jwt = (i) => t.check(Jo(sc, i)), t.emoji = (i) => t.check(Mo(Uu, i)), t.guid = (i) => t.check(Xi(es, i)), t.uuid = (i) => t.check(Io(we, i)), t.uuidv4 = (i) => t.check(No(we, i)), t.uuidv6 = (i) => t.check(Lo(we, i)), t.uuidv7 = (i) => t.check(Oo(we, i)), t.nanoid = (i) => t.check(Do(Zu, i)), t.guid = (i) => t.check(Xi(es, i)), t.cuid = (i) => t.check(zo(qu, i)), t.cuid2 = (i) => t.check(Vo(Hu, i)), t.ulid = (i) => t.check(Fo(Wu, i)), t.base64 = (i) => t.check(Ho(tc, i)), t.base64url = (i) => t.check(Wo(ec, i)), t.xid = (i) => t.check(jo(Ku, i)), t.ksuid = (i) => t.check(Bo(Ju, i)), t.ipv4 = (i) => t.check($o(Gu, i)), t.ipv6 = (i) => t.check(Uo(Xu, i)), t.cidrv4 = (i) => t.check(Zo(Yu, i)), t.cidrv6 = (i) => t.check(qo(Qu, i)), t.e164 = (i) => t.check(Ko(ic, i)), t.datetime = (i) => t.check(bu(i)), t.date = (i) => t.check(Su(i)), t.time = (i) => t.check(Tu(i)), t.duration = (i) => t.check(Pu(i));
});
function it(t) {
  return Co(ju, t);
}
const Y = /* @__PURE__ */ k("ZodStringFormat", (t, e) => {
  W.init(t, e), ur.init(t, e);
}), Bu = /* @__PURE__ */ k("ZodEmail", (t, e) => {
  Rn.init(t, e), Y.init(t, e);
}), es = /* @__PURE__ */ k("ZodGUID", (t, e) => {
  Ln.init(t, e), Y.init(t, e);
}), we = /* @__PURE__ */ k("ZodUUID", (t, e) => {
  On.init(t, e), Y.init(t, e);
}), $u = /* @__PURE__ */ k("ZodURL", (t, e) => {
  Mn.init(t, e), Y.init(t, e);
}), Uu = /* @__PURE__ */ k("ZodEmoji", (t, e) => {
  Dn.init(t, e), Y.init(t, e);
}), Zu = /* @__PURE__ */ k("ZodNanoID", (t, e) => {
  zn.init(t, e), Y.init(t, e);
}), qu = /* @__PURE__ */ k("ZodCUID", (t, e) => {
  Vn.init(t, e), Y.init(t, e);
}), Hu = /* @__PURE__ */ k("ZodCUID2", (t, e) => {
  Fn.init(t, e), Y.init(t, e);
}), Wu = /* @__PURE__ */ k("ZodULID", (t, e) => {
  jn.init(t, e), Y.init(t, e);
}), Ku = /* @__PURE__ */ k("ZodXID", (t, e) => {
  Bn.init(t, e), Y.init(t, e);
}), Ju = /* @__PURE__ */ k("ZodKSUID", (t, e) => {
  $n.init(t, e), Y.init(t, e);
}), Gu = /* @__PURE__ */ k("ZodIPv4", (t, e) => {
  Wn.init(t, e), Y.init(t, e);
}), Xu = /* @__PURE__ */ k("ZodIPv6", (t, e) => {
  Kn.init(t, e), Y.init(t, e);
}), Yu = /* @__PURE__ */ k("ZodCIDRv4", (t, e) => {
  Jn.init(t, e), Y.init(t, e);
}), Qu = /* @__PURE__ */ k("ZodCIDRv6", (t, e) => {
  Gn.init(t, e), Y.init(t, e);
}), tc = /* @__PURE__ */ k("ZodBase64", (t, e) => {
  Xn.init(t, e), Y.init(t, e);
}), ec = /* @__PURE__ */ k("ZodBase64URL", (t, e) => {
  Qn.init(t, e), Y.init(t, e);
}), ic = /* @__PURE__ */ k("ZodE164", (t, e) => {
  to.init(t, e), Y.init(t, e);
}), sc = /* @__PURE__ */ k("ZodJWT", (t, e) => {
  io.init(t, e), Y.init(t, e);
}), cr = /* @__PURE__ */ k("ZodNumber", (t, e) => {
  sr.init(t, e), Q.init(t, e), t.gt = (s, a) => t.check(Qi(s, a)), t.gte = (s, a) => t.check(Ye(s, a)), t.min = (s, a) => t.check(Ye(s, a)), t.lt = (s, a) => t.check(Yi(s, a)), t.lte = (s, a) => t.check(Xe(s, a)), t.max = (s, a) => t.check(Xe(s, a)), t.int = (s) => t.check(is(s)), t.safe = (s) => t.check(is(s)), t.positive = (s) => t.check(Qi(0, s)), t.nonnegative = (s) => t.check(Ye(0, s)), t.negative = (s) => t.check(Yi(0, s)), t.nonpositive = (s) => t.check(Xe(0, s)), t.multipleOf = (s, a) => t.check(ts(s, a)), t.step = (s, a) => t.check(ts(s, a)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Oe(t) {
  return tu(cr, t);
}
const rc = /* @__PURE__ */ k("ZodNumberFormat", (t, e) => {
  so.init(t, e), cr.init(t, e);
});
function is(t) {
  return eu(rc, t);
}
const ac = /* @__PURE__ */ k("ZodBoolean", (t, e) => {
  ro.init(t, e), Q.init(t, e);
});
function nc(t) {
  return iu(ac, t);
}
const oc = /* @__PURE__ */ k("ZodUnknown", (t, e) => {
  ao.init(t, e), Q.init(t, e);
});
function ss() {
  return su(oc);
}
const uc = /* @__PURE__ */ k("ZodNever", (t, e) => {
  no.init(t, e), Q.init(t, e);
});
function cc(t) {
  return ru(uc, t);
}
const hc = /* @__PURE__ */ k("ZodArray", (t, e) => {
  oo.init(t, e), Q.init(t, e), t.element = e.element, t.min = (i, s) => t.check(Le(i, s)), t.nonempty = (i) => t.check(Le(1, i)), t.max = (i, s) => t.check(nr(i, s)), t.length = (i, s) => t.check(or(i, s)), t.unwrap = () => t.element;
});
function ki(t, e) {
  return mu(hc, t, e);
}
const pc = /* @__PURE__ */ k("ZodObject", (t, e) => {
  co.init(t, e), Q.init(t, e), U(t, "shape", () => e.shape), t.keyof = () => yc(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: ss() }), t.loose = () => t.clone({ ...t._zod.def, catchall: ss() }), t.strict = () => t.clone({ ...t._zod.def, catchall: cc() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => Aa(t, i), t.safeExtend = (i) => Ca(t, i), t.merge = (i) => Ea(t, i), t.pick = (i) => _a(t, i), t.omit = (i) => Pa(t, i), t.partial = (...i) => Ia(hr, t, i[0]), t.required = (...i) => Na(pr, t, i[0]);
});
function $e(t, e) {
  const i = {
    type: "object",
    shape: t ?? {},
    ...L(e)
  };
  return new pc(i);
}
const lc = /* @__PURE__ */ k("ZodUnion", (t, e) => {
  ho.init(t, e), Q.init(t, e), t.options = e.options;
});
function At(t, e) {
  return new lc({
    type: "union",
    options: t,
    ...L(e)
  });
}
const fc = /* @__PURE__ */ k("ZodIntersection", (t, e) => {
  po.init(t, e), Q.init(t, e);
});
function dc(t, e) {
  return new fc({
    type: "intersection",
    left: t,
    right: e
  });
}
const mc = /* @__PURE__ */ k("ZodRecord", (t, e) => {
  lo.init(t, e), Q.init(t, e), t.keyType = e.keyType, t.valueType = e.valueType;
});
function he(t, e, i) {
  return new mc({
    type: "record",
    keyType: t,
    valueType: e,
    ...L(i)
  });
}
const ai = /* @__PURE__ */ k("ZodEnum", (t, e) => {
  fo.init(t, e), Q.init(t, e), t.enum = e.entries, t.options = Object.values(e.entries);
  const i = new Set(Object.keys(e.entries));
  t.extract = (s, a) => {
    const u = {};
    for (const h of s)
      if (i.has(h))
        u[h] = e.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new ai({
      ...e,
      checks: [],
      ...L(a),
      entries: u
    });
  }, t.exclude = (s, a) => {
    const u = { ...e.entries };
    for (const h of s)
      if (i.has(h))
        delete u[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new ai({
      ...e,
      checks: [],
      ...L(a),
      entries: u
    });
  };
});
function yc(t, e) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new ai({
    type: "enum",
    entries: i,
    ...L(e)
  });
}
const vc = /* @__PURE__ */ k("ZodLiteral", (t, e) => {
  mo.init(t, e), Q.init(t, e), t.values = new Set(e.values), Object.defineProperty(t, "value", {
    get() {
      if (e.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return e.values[0];
    }
  });
});
function _(t, e) {
  return new vc({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...L(e)
  });
}
const xc = /* @__PURE__ */ k("ZodTransform", (t, e) => {
  yo.init(t, e), Q.init(t, e), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new Us(t.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(ce(u, i.value, e));
      else {
        const h = u;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = i.value), h.inst ?? (h.inst = t), i.issues.push(ce(h));
      }
    };
    const a = e.transform(i.value, i);
    return a instanceof Promise ? a.then((u) => (i.value = u, i)) : (i.value = a, i);
  };
});
function gc(t) {
  return new xc({
    type: "transform",
    transform: t
  });
}
const hr = /* @__PURE__ */ k("ZodOptional", (t, e) => {
  vo.init(t, e), Q.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function rs(t) {
  return new hr({
    type: "optional",
    innerType: t
  });
}
const bc = /* @__PURE__ */ k("ZodNullable", (t, e) => {
  xo.init(t, e), Q.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function as(t) {
  return new bc({
    type: "nullable",
    innerType: t
  });
}
const kc = /* @__PURE__ */ k("ZodDefault", (t, e) => {
  go.init(t, e), Q.init(t, e), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function Sc(t, e) {
  return new kc({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : Hs(e);
    }
  });
}
const wc = /* @__PURE__ */ k("ZodPrefault", (t, e) => {
  bo.init(t, e), Q.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function Tc(t, e) {
  return new wc({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : Hs(e);
    }
  });
}
const pr = /* @__PURE__ */ k("ZodNonOptional", (t, e) => {
  ko.init(t, e), Q.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function _c(t, e) {
  return new pr({
    type: "nonoptional",
    innerType: t,
    ...L(e)
  });
}
const Pc = /* @__PURE__ */ k("ZodCatch", (t, e) => {
  So.init(t, e), Q.init(t, e), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function Ac(t, e) {
  return new Pc({
    type: "catch",
    innerType: t,
    catchValue: typeof e == "function" ? e : () => e
  });
}
const Cc = /* @__PURE__ */ k("ZodPipe", (t, e) => {
  wo.init(t, e), Q.init(t, e), t.in = e.in, t.out = e.out;
});
function ns(t, e) {
  return new Cc({
    type: "pipe",
    in: t,
    out: e
    // ...util.normalizeParams(params),
  });
}
const Ec = /* @__PURE__ */ k("ZodReadonly", (t, e) => {
  To.init(t, e), Q.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function Ic(t) {
  return new Ec({
    type: "readonly",
    innerType: t
  });
}
const Nc = /* @__PURE__ */ k("ZodCustom", (t, e) => {
  _o.init(t, e), Q.init(t, e);
});
function Lc(t, e = {}) {
  return yu(Nc, t, e);
}
function Oc(t) {
  return vu(t);
}
const Rc = At([_("amber"), _("green"), _("red"), _("other")]), Mc = At([
  _("alpha"),
  _("beta"),
  _("generalAvailability"),
  _("notApplicable"),
  _("preAlpha"),
  _("proposed"),
  _("releaseCandidate"),
  _("unavailable"),
  _("underReview")
]), Dc = At([
  _("app"),
  _("connector"),
  _("connectorConnection"),
  _("context"),
  _("contextModelGroup"),
  _("contextModel"),
  _("contextModelDimensionGroup"),
  _("contextModelDimension"),
  _("contextModelDimensionHierarchy"),
  _("contextModelEntityGroup"),
  _("contextModelEntity"),
  _("contextModelEntityDataItem"),
  _("contextModelEntityEvent"),
  _("contextModelEntityPrimaryMeasure"),
  _("contextModelSecondaryMeasureGroup"),
  _("contextModelSecondaryMeasure"),
  _("dataView"),
  _("dimension"),
  _("engine"),
  _("eventQuery"),
  _("presenter"),
  _("presenterPresentation"),
  _("tool")
]), zc = At([_("en-au"), _("en-gb"), _("en-us"), _("es-es")]), Vc = he(zc, it()), Fc = $e({
  id: it(),
  color: Rc,
  label: it()
}), jc = $e({
  id: it(),
  label: he(it(), it()),
  description: he(it(), it()),
  firstCreatedAt: Oe().optional(),
  icon: it().optional(),
  iconDark: it().optional(),
  lastUpdatedAt: Oe().optional(),
  status: Fc.nullable().optional(),
  statusId: Mc,
  typeId: Dc
}), Bc = At([_("app"), _("engine"), _("connector"), _("context"), _("presenter"), _("tool")]), $c = $e({
  id: it(),
  label: it()
}), Uc = $e({
  activeConnectionCount: Oe().optional(),
  canDescribe: nc().optional(),
  id: it().optional(),
  authMethodId: At([_("apiKey"), _("disabled"), _("oAuth2"), _("none")]),
  label: Vc.optional(),
  maxConnectionCount: Oe().optional(),
  params: ki(he(it(), it())).optional()
}), Zc = At([_("application"), _("curatedDataset"), _("database"), _("fileStore")]), qc = At([
  _("abortOperation"),
  _("authenticateConnection"),
  _("createObject"),
  _("describeConnection"),
  _("dropObject"),
  _("findObject"),
  _("getRecord"),
  _("listNodes"),
  _("previewObject"),
  _("removeRecords"),
  _("retrieveRecords"),
  _("upsertRecords")
]), Hc = At([_("bidirectional"), _("destination"), _("source"), _("unknown")]), Wc = jc.extend({
  typeId: Bc,
  version: it()
}), Kc = Wc.extend({
  category: $c.optional(),
  categoryId: Zc,
  implementations: he(it(), Uc),
  operations: ki(qc),
  typeId: _("connector"),
  usageId: Hc,
  vendorAccountURL: it().nullable().optional(),
  vendorDocumentationURL: it().nullable().optional(),
  vendorHomeURL: it().nullable().optional()
}), Jc = ["critical", "high", "moderate", "low", "unknown"], oe = xr(yr);
async function eh() {
  try {
    console.info("🚀 Building configuration...");
    const t = JSON.parse(await V.readFile("package.json", "utf8")), e = JSON.parse(await V.readFile("config.json", "utf8"));
    t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), await V.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (t) {
    console.error("❌ Error building configuration.", t);
  }
}
async function ih(t) {
  try {
    console.info(`🚀 Building public directory index for identifier '${t}'...`);
    const e = {};
    async function i(a, u) {
      console.info(`⚙️ Processing directory '${a}'...`);
      const h = [], d = a.slice(`public/${t}`.length);
      e[d === "" ? "/" : d] = h;
      for (const y of u) {
        const o = `${a}/${y}`;
        try {
          const S = await V.stat(o);
          if (S.isDirectory()) {
            const P = await V.readdir(o), R = { childCount: P.length, name: y, typeId: "folder" };
            h.push(R), await i(o, P);
          } else {
            const P = { id: vr(), lastModifiedAt: S.mtimeMs, name: y, size: S.size, typeId: "object" };
            h.push(P);
          }
        } catch (S) {
          throw new Error(`Unable to get information for '${y}' in 'buildPublicDirectoryIndex'. ${String(S)}`);
        }
      }
      h.sort((y, o) => {
        const S = y.typeId.localeCompare(o.typeId);
        return S === 0 ? y.name.localeCompare(o.name) : S;
      });
    }
    const s = await V.readdir(`public/${t}`);
    await i(`public/${t}`, s), await V.writeFile(`./public/${t}Index.json`, JSON.stringify(e), "utf8"), console.info("✅ Public directory index built.");
  } catch (e) {
    console.error("❌ Error building public directory index.", e);
  }
}
async function sh() {
  try {
    console.info("🚀 Building connector configuration...");
    const [t, e, i] = await Promise.all([
      V.readFile("package.json", "utf8").then((h) => JSON.parse(h)),
      V.readFile("config.json", "utf8").then((h) => JSON.parse(h)),
      V.readFile("src/index.ts", "utf8")
    ]), s = Kc.safeParse(e);
    if (s.success)
      console.info("ℹ️  Configuration is valid.");
    else {
      console.log("❌ Configuration is invalid:"), console.table(s.error.issues);
      return;
    }
    const a = Si(i), u = Gc(a);
    a.length > 0 ? (console.info(`ℹ️  Implements ${a.length} operations:`), console.table(a)) : console.warn("⚠️  Implements no operations."), u === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports '${u}' usage.`), t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), e.operations = a, e.usageId = u, await V.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (t) {
    console.error("❌ Error building connector configuration.", t);
  }
}
async function rh() {
  try {
    console.info("🚀 Building context configuration...");
    const [t, e, i] = await Promise.all([
      V.readFile("package.json", "utf8").then((a) => JSON.parse(a)),
      V.readFile("config.json", "utf8").then((a) => JSON.parse(a)),
      V.readFile("src/index.ts", "utf8")
    ]), s = Si(i);
    s.length > 0 ? (console.info(`ℹ️  Implements ${s.length} operations:`), console.table(s)) : console.warn("⚠️  Implements no operations."), t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), e.operations = s, await V.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function ah() {
  try {
    console.info("🚀 Building presenter configuration...");
    const [t, e, i] = await Promise.all([
      V.readFile("package.json", "utf8").then((a) => JSON.parse(a)),
      V.readFile("config.json", "utf8").then((a) => JSON.parse(a)),
      V.readFile("src/index.ts", "utf8")
    ]), s = Si(i);
    s.length > 0 ? (console.info(`ℹ️  Implements ${s.length} operations:`), console.table(s)) : console.warn("⚠️  Implements no operations."), t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), e.operations = s, await V.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function nh(t = "./") {
  try {
    console.info("🚀 Bumping version...");
    const e = JSON.parse(await V.readFile(`${t}package.json`, "utf8"));
    if (e.version == null)
      e.version = "0.0.001", await V.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${e.version}.`);
    else {
      const i = e.version, s = e.version.split(".");
      e.version = `${s[0]}.${s[1]}.${Number(s[2]) + 1}`, await V.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${e.version}.`);
    }
  } catch (e) {
    console.error("❌ Error bumping package version.", e);
  }
}
function oh(t) {
  console.error(`❌ ${t} script not implemented.`);
}
async function uh() {
  const t = "<!-- DEPENDENCY_LICENSES_START -->", e = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const s = (await V.readFile("./licenses.md", "utf8")).trim(), a = await V.readFile("./README.md", "utf8"), u = a.indexOf(t), h = a.indexOf(e);
    if (u === -1 || h === -1) {
      console.error("❌ Dependency license markers not found in readme file.");
      return;
    }
    const d = a.slice(0, Math.max(0, u + t.length)) + `
` + s + `
` + a.slice(Math.max(0, h));
    await V.writeFile("README.md", d, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (i) {
    console.error("❌ Error updating readme file.", i);
  }
}
async function ch() {
  const t = "<!-- OWASP_BADGE_START -->", e = "<!-- OWASP_BADGE_END -->";
  try {
    const i = JSON.parse(await V.readFile("./dependency-check-reports/dependency-check-report.json", "utf8")), s = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const $ of i.dependencies)
      if ($.vulnerabilities != null)
        for (const tt of $.vulnerabilities) {
          const at = tt.severity?.toLowerCase() ?? "unknown";
          if (at in s) {
            const O = Jc.find((rt) => rt === at);
            s[O ?? "unknown"]++;
          } else
            s.unknown++;
        }
    const a = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, u = JSON.parse(await V.readFile("config.json", "utf8")), h = [];
    if (Object.values(s).reduce(($, tt) => $ + tt, 0) === 0)
      console.info("✅ No vulnerabilities found."), h.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${u.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [$, tt] of Object.entries(s)) {
        const at = a[$];
        if (console.warn(`⚠️  ${tt} ${at.label} vulnerability(ies) found.`), tt === 0) continue;
        const O = `https://img.shields.io/badge/OWASP-${tt}%20${at.label}-${at.color}`;
        h.push(`[![OWASP](${O})](https://data-positioning.github.io/${u.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const y = await V.readFile("./README.md", "utf8"), o = y.indexOf(t), S = y.indexOf(e);
    if (o === -1 || S === -1) {
      console.error("❌ OWASP badge markers not found in README.md.");
      return;
    }
    const P = h.join(" "), R = y.slice(0, Math.max(0, o + t.length)) + P + y.slice(Math.max(0, S));
    await V.writeFile("README.md", R, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (i) {
    console.error("❌ Error updating README with OWASP badges:", i);
  }
}
async function hh() {
  try {
    console.info("🚀 Sending deployment notice...");
    const t = JSON.parse(await V.readFile("config.json", "utf8")), e = {
      body: JSON.stringify(t),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, i = await fetch(`https://api.datapos.app/states/${t.id}`, e);
    if (!i.ok) throw new Error(await i.text());
    console.info("✅ Deployment notice sent.");
  } catch (t) {
    console.error("❌ Error sending deployment notice.", t);
  }
}
async function ph() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const t = JSON.parse(await V.readFile("package.json", "utf8"));
    await oe("git add ."), await oe(`git commit -m "v${t.version}"`), await oe("git push origin main:main"), console.info(`✅ Synchronised version ${t.version} with GitHub.`);
  } catch (t) {
    console.error("❌ Error synchronising with GitHub.", t);
  }
}
async function lh(t, e) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(a, u, h) {
      for (const d of h) {
        const y = `${a}/${d}`, o = `${u}/${d}`;
        if ((await V.stat(y)).isDirectory()) {
          const P = await V.readdir(y);
          await i(y, o, P);
        } else {
          console.info(`⚙️ Uploading '${a}/${d}'...`);
          const P = `wrangler r2 object put "datapos-sample-data-eu/${u}/${d}" --file="${a}/${d}" --jurisdiction=eu --remote`, R = await oe(P);
          if (R.stderr) throw new Error(R.stderr);
        }
      }
    }
    const s = await V.readdir(`${t}/${e}/`);
    await i(`${t}/${e}`, e, s), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function fh() {
  try {
    console.info("🚀 Uploading module configuration....");
    const t = JSON.parse(await V.readFile("config.json", "utf8")), e = t.id, i = {
      body: JSON.stringify(t),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, s = await fetch(`https://api.datapos.app/states/${e}`, i);
    if (!s.ok) throw new Error(await s.text());
    console.info("✅ Module configuration uploaded.");
  } catch (t) {
    console.error("❌ Error uploading module configuration.", t);
  }
}
async function dh(t) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await V.readFile("package.json", "utf8")).version}`;
    async function s(a, u = "") {
      const h = await V.readdir(a, { withFileTypes: !0 });
      for (const d of h) {
        const y = `${a}/${d.name}`, o = u ? `${u}/${d.name}` : d.name;
        if (d.isDirectory()) continue;
        const S = `${t}_${i}/${o}`.replaceAll("\\", "/"), P = d.name.endsWith(".css") ? "text/css" : "application/octet-stream", R = d.name.endsWith(".js") ? "application/javascript" : P;
        console.info(`⚙️ Uploading '${o}' → '${S}'...`);
        const { stderr: $ } = await oe(`wrangler r2 object put "${S}" --file="${y}" --content-type ${R} --jurisdiction=eu --remote`);
        if ($) throw new Error($);
      }
    }
    await s("dist"), console.info("✅ Module uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading module to R2.", e);
  }
}
function Si(t) {
  const i = G.extend(ya()).parse(t, {
    ecmaVersion: "latest",
    sourceType: "module",
    locations: !0
  }), s = [];
  return ni(i, (a) => {
    if (a.type !== "MethodDefinition") return;
    const u = a, h = u.key;
    if (h.type !== "Identifier") return;
    const d = h.name;
    d && d !== "constructor" && u.accessibility !== "private" && s.push(d);
  }), s;
}
function Gc(t) {
  let e = !1, i = !1;
  for (const s of t)
    xa.includes(s) && (e = !0), va.includes(s) && (i = !0);
  return e && i ? "bidirectional" : e ? "source" : i ? "destination" : "unknown";
}
function ni(t, e) {
  e(t);
  for (const [i, s] of Object.entries(t)) {
    if (["loc", "range", "start", "end", "comments"].includes(i)) continue;
    const a = s;
    if (Array.isArray(a))
      for (const u of a) {
        const h = u;
        h && typeof h.type == "string" && ni(h, e);
      }
    else a && typeof a == "object" && typeof a.type == "string" && ni(a, e);
  }
}
export {
  eh as buildConfig,
  sh as buildConnectorConfig,
  rh as buildContextConfig,
  ah as buildPresenterConfig,
  ih as buildPublicDirectoryIndex,
  nh as bumpVersion,
  oh as echoScriptNotImplemented,
  uh as insertLicensesIntoReadme,
  ch as insertOWASPDependencyCheckBadgeIntoReadme,
  hh as sendDeploymentNotice,
  ph as syncWithGitHub,
  lh as uploadDirectoryToR2,
  fh as uploadModuleConfigToDO,
  dh as uploadModuleToR2
};
