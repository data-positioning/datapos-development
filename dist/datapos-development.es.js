import { promises as F } from "node:fs";
import { nanoid as Tr } from "nanoid";
import { promisify as _r } from "node:util";
import { exec as Pr, spawn as Ar } from "node:child_process";
var Cr = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], ds = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Er = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ms = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Wt = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, Kt = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Ir = {
  5: Kt,
  "5module": Kt + " export import",
  6: Kt + " const class extends export import super"
}, Nr = /^in(stanceof)?$/, Lr = new RegExp("[" + ms + "]"), Or = new RegExp("[" + ms + Er + "]");
function ti(e, t) {
  for (var i = 65536, s = 0; s < t.length; s += 2) {
    if (i += t[s], i > e)
      return !1;
    if (i += t[s + 1], i >= e)
      return !0;
  }
  return !1;
}
function _e(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Lr.test(String.fromCharCode(e)) : t === !1 ? !1 : ti(e, ds);
}
function Ie(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Or.test(String.fromCharCode(e)) : t === !1 ? !1 : ti(e, ds) || ti(e, Cr);
}
var z = function(t, i) {
  i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function be(e, t) {
  return new z(e, { beforeExpr: !0, binop: t });
}
var ke = { beforeExpr: !0 }, le = { startsExpr: !0 }, Qe = {};
function B(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, Qe[e] = new z(e, t);
}
var p = {
  num: new z("num", le),
  regexp: new z("regexp", le),
  string: new z("string", le),
  name: new z("name", le),
  privateId: new z("privateId", le),
  eof: new z("eof"),
  // Punctuation token types.
  bracketL: new z("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new z("]"),
  braceL: new z("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new z("}"),
  parenL: new z("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new z(")"),
  comma: new z(",", ke),
  semi: new z(";", ke),
  colon: new z(":", ke),
  dot: new z("."),
  question: new z("?", ke),
  questionDot: new z("?."),
  arrow: new z("=>", ke),
  template: new z("template"),
  invalidTemplate: new z("invalidTemplate"),
  ellipsis: new z("...", ke),
  backQuote: new z("`", le),
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
  logicalOR: be("||", 1),
  logicalAND: be("&&", 2),
  bitwiseOR: be("|", 3),
  bitwiseXOR: be("^", 4),
  bitwiseAND: be("&", 5),
  equality: be("==/!=/===/!==", 6),
  relational: be("</>/<=/>=", 7),
  bitShift: be("<</>>/>>>", 8),
  plusMin: new z("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: be("%", 10),
  star: be("*", 10),
  slash: be("/", 10),
  starstar: new z("**", { beforeExpr: !0 }),
  coalesce: be("??", 1),
  // Keyword token types.
  _break: B("break"),
  _case: B("case", ke),
  _catch: B("catch"),
  _continue: B("continue"),
  _debugger: B("debugger"),
  _default: B("default", ke),
  _do: B("do", { isLoop: !0, beforeExpr: !0 }),
  _else: B("else", ke),
  _finally: B("finally"),
  _for: B("for", { isLoop: !0 }),
  _function: B("function", le),
  _if: B("if"),
  _return: B("return", ke),
  _switch: B("switch"),
  _throw: B("throw", ke),
  _try: B("try"),
  _var: B("var"),
  _const: B("const"),
  _while: B("while", { isLoop: !0 }),
  _with: B("with"),
  _new: B("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: B("this", le),
  _super: B("super", le),
  _class: B("class", le),
  _extends: B("extends", ke),
  _export: B("export"),
  _import: B("import", le),
  _null: B("null", le),
  _true: B("true", le),
  _false: B("false", le),
  _in: B("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: B("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: B("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: B("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: B("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, ue = /\r\n?|\n|\u2028|\u2029/, ys = new RegExp(ue.source, "g");
function Ze(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function vs(e, t, i) {
  i === void 0 && (i = e.length);
  for (var s = t; s < i; s++) {
    var a = e.charCodeAt(s);
    if (Ze(a))
      return s < i - 1 && a === 13 && e.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
  }
  return -1;
}
var hi = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, ae = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, xs = Object.prototype, Mr = xs.hasOwnProperty, Rr = xs.toString, st = Object.hasOwn || (function(e, t) {
  return Mr.call(e, t);
}), Oi = Array.isArray || (function(e) {
  return Rr.call(e) === "[object Array]";
}), Mi = /* @__PURE__ */ Object.create(null);
function Ve(e) {
  return Mi[e] || (Mi[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function Ne(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var Dr = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Ye = function(t, i) {
  this.line = t, this.column = i;
};
Ye.prototype.offset = function(t) {
  return new Ye(this.line, this.column + t);
};
var dt = function(t, i, s) {
  this.start = i, this.end = s, t.sourceFile !== null && (this.source = t.sourceFile);
};
function pi(e, t) {
  for (var i = 1, s = 0; ; ) {
    var a = vs(e, s, t);
    if (a < 0)
      return new Ye(i, t - s);
    ++i, s = a;
  }
}
var At = {
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
}, Ri = !1;
function Vr(e) {
  var t = {};
  for (var i in At)
    t[i] = e && st(e, i) ? e[i] : At[i];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!Ri && typeof console == "object" && console.warn && (Ri = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), Oi(t.onToken)) {
    var s = t.onToken;
    t.onToken = function(a) {
      return s.push(a);
    };
  }
  return Oi(t.onComment) && (t.onComment = zr(t, t.onComment)), t;
}
function zr(e, t) {
  return function(i, s, a, o, h, d) {
    var y = {
      type: i ? "Block" : "Line",
      value: s,
      start: a,
      end: o
    };
    e.locations && (y.loc = new dt(this, h, d)), e.ranges && (y.range = [a, o]), t.push(y);
  };
}
var lt = 1, rt = 2, li = 4, gs = 8, fi = 16, bs = 32, Dt = 64, ks = 128, qe = 256, mt = 512, Vt = lt | rt | qe;
function di(e, t) {
  return rt | (e ? li : 0) | (t ? gs : 0);
}
var Ct = 0, mi = 1, Me = 2, Ss = 3, ws = 4, Ts = 5, X = function(t, i, s) {
  this.options = t = Vr(t), this.sourceFile = t.sourceFile, this.keywords = Ve(Ir[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var a = "";
  t.allowReserved !== !0 && (a = Wt[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (a += " await")), this.reservedWords = Ve(a);
  var o = (a ? a + " " : "") + Wt.strict;
  this.reservedWordsStrict = Ve(o), this.reservedWordsStrictBind = Ve(o + " " + Wt.strictBind), this.input = String(i), this.containsEsc = !1, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf(`
`, s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(ue).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = p.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(lt), this.regexpState = null, this.privateNameStack = [];
}, Pe = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
X.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
Pe.inFunction.get = function() {
  return (this.currentVarScope().flags & rt) > 0;
};
Pe.inGenerator.get = function() {
  return (this.currentVarScope().flags & gs) > 0;
};
Pe.inAsync.get = function() {
  return (this.currentVarScope().flags & li) > 0;
};
Pe.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & (qe | mt))
      return !1;
    if (i & rt)
      return (i & li) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
Pe.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags;
  return (t & Dt) > 0 || this.options.allowSuperOutsideMethod;
};
Pe.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & ks) > 0;
};
Pe.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Pe.allowNewDotTarget.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & (qe | mt) || i & rt && !(i & fi))
      return !0;
  }
  return !1;
};
Pe.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & qe) > 0;
};
X.extend = function() {
  for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
  for (var s = this, a = 0; a < t.length; a++)
    s = t[a](s);
  return s;
};
X.parse = function(t, i) {
  return new this(i, t).parse();
};
X.parseExpressionAt = function(t, i, s) {
  var a = new this(s, t, i);
  return a.nextToken(), a.parseExpression();
};
X.tokenizer = function(t, i) {
  return new this(i, t);
};
Object.defineProperties(X.prototype, Pe);
var ce = X.prototype, Fr = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
ce.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    ae.lastIndex = e, e += ae.exec(this.input)[0].length;
    var t = Fr.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      ae.lastIndex = e + t[0].length;
      var i = ae.exec(this.input), s = i.index + i[0].length, a = this.input.charAt(s);
      return a === ";" || a === "}" || ue.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(a) || a === "!" && this.input.charAt(s + 1) === "=");
    }
    e += t[0].length, ae.lastIndex = e, e += ae.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
ce.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
ce.isContextual = function(e) {
  return this.type === p.name && this.value === e && !this.containsEsc;
};
ce.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
ce.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
ce.canInsertSemicolon = function() {
  return this.type === p.eof || this.type === p.braceR || ue.test(this.input.slice(this.lastTokEnd, this.start));
};
ce.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
ce.semicolon = function() {
  !this.eat(p.semi) && !this.insertSemicolon() && this.unexpected();
};
ce.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
ce.expect = function(e) {
  this.eat(e) || this.unexpected();
};
ce.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var zt = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
ce.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
ce.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var i = e.shorthandAssign, s = e.doubleProto;
  if (!t)
    return i >= 0 || s >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
};
ce.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
ce.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var E = X.prototype;
E.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== p.eof; ) {
    var i = this.parseStatement(null, !0, t);
    e.body.push(i);
  }
  if (this.inModule)
    for (var s = 0, a = Object.keys(this.undefinedExports); s < a.length; s += 1) {
      var o = a[s];
      this.raiseRecoverable(this.undefinedExports[o].start, "Export '" + o + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var yi = { kind: "loop" }, jr = { kind: "switch" };
E.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  ae.lastIndex = this.pos;
  var t = ae.exec(this.input), i = this.pos + t[0].length, s = this.input.charCodeAt(i);
  if (s === 91 || s === 92)
    return !0;
  if (e)
    return !1;
  if (s === 123 || s > 55295 && s < 56320)
    return !0;
  if (_e(s, !0)) {
    for (var a = i + 1; Ie(s = this.input.charCodeAt(a), !0); )
      ++a;
    if (s === 92 || s > 55295 && s < 56320)
      return !0;
    var o = this.input.slice(i, a);
    if (!Nr.test(o))
      return !0;
  }
  return !1;
};
E.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  ae.lastIndex = this.pos;
  var e = ae.exec(this.input), t = this.pos + e[0].length, i;
  return !ue.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(Ie(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
};
E.isUsingKeyword = function(e, t) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using"))
    return !1;
  ae.lastIndex = this.pos;
  var i = ae.exec(this.input), s = this.pos + i[0].length;
  if (ue.test(this.input.slice(this.pos, s)))
    return !1;
  if (e) {
    var a = s + 5, o;
    if (this.input.slice(s, a) !== "using" || a === this.input.length || Ie(o = this.input.charCodeAt(a)) || o > 55295 && o < 56320)
      return !1;
    ae.lastIndex = a;
    var h = ae.exec(this.input);
    if (h && ue.test(this.input.slice(a, a + h[0].length)))
      return !1;
  }
  if (t) {
    var d = s + 2, y;
    if (this.input.slice(s, d) === "of" && (d === this.input.length || !Ie(y = this.input.charCodeAt(d)) && !(y > 55295 && y < 56320)))
      return !1;
  }
  var u = this.input.charCodeAt(s);
  return _e(u, !0) || u === 92;
};
E.isAwaitUsing = function(e) {
  return this.isUsingKeyword(!0, e);
};
E.isUsing = function(e) {
  return this.isUsingKeyword(!1, e);
};
E.parseStatement = function(e, t, i) {
  var s = this.type, a = this.startNode(), o;
  switch (this.isLet(e) && (s = p._var, o = "let"), s) {
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
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(a, !1, !e);
    case p._class:
      return e && this.unexpected(), this.parseClass(a, !0);
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
      return o = o || this.value, e && o !== "var" && this.unexpected(), this.parseVarStatement(a, o);
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
        ae.lastIndex = this.pos;
        var h = ae.exec(this.input), d = this.pos + h[0].length, y = this.input.charCodeAt(d);
        if (y === 40 || y === 46)
          return this.parseExpressionStatement(a, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), s === p._import ? this.parseImport(a) : this.parseExport(a, i);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(a, !0, !e);
      var u = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (u)
        return t && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), u === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(a, !1, u), this.semicolon(), this.finishNode(a, "VariableDeclaration");
      var w = this.value, P = this.parseExpression();
      return s === p.name && P.type === "Identifier" && this.eat(p.colon) ? this.parseLabeledStatement(a, w, P, e) : this.parseExpressionStatement(a, P);
  }
};
E.parseBreakContinueStatement = function(e, t) {
  var i = t === "break";
  this.next(), this.eat(p.semi) || this.insertSemicolon() ? e.label = null : this.type !== p.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var s = 0; s < this.labels.length; ++s) {
    var a = this.labels[s];
    if ((e.label == null || a.name === e.label.name) && (a.kind != null && (i || a.kind === "loop") || e.label && i))
      break;
  }
  return s === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
};
E.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
E.parseDoStatement = function(e) {
  return this.next(), this.labels.push(yi), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(p._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(p.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
E.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(yi), this.enterScope(0), this.expect(p.parenL), this.type === p.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var i = this.isLet();
  if (this.type === p._var || this.type === p._const || i) {
    var s = this.startNode(), a = i ? "let" : this.value;
    return this.next(), this.parseVar(s, !0, a), this.finishNode(s, "VariableDeclaration"), this.parseForAfterInit(e, s, t);
  }
  var o = this.isContextual("let"), h = !1, d = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (d) {
    var y = this.startNode();
    return this.next(), d === "await using" && this.next(), this.parseVar(y, !0, d), this.finishNode(y, "VariableDeclaration"), this.parseForAfterInit(e, y, t);
  }
  var u = this.containsEsc, w = new zt(), P = this.start, M = t > -1 ? this.parseExprSubscripts(w, "await") : this.parseExpression(!0, w);
  return this.type === p._in || (h = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === p._in && this.unexpected(t), e.await = !0) : h && this.options.ecmaVersion >= 8 && (M.start === P && !u && M.type === "Identifier" && M.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), o && h && this.raise(M.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(M, !1, w), this.checkLValPattern(M), this.parseForIn(e, M)) : (this.checkExpressionErrors(w, !0), t > -1 && this.unexpected(t), this.parseFor(e, M));
};
E.parseForAfterInit = function(e, t, i) {
  return (this.type === p._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === p._in ? i > -1 && this.unexpected(i) : e.await = i > -1), this.parseForIn(e, t)) : (i > -1 && this.unexpected(i), this.parseFor(e, t));
};
E.parseFunctionStatement = function(e, t, i) {
  return this.next(), this.parseFunction(e, ht | (i ? 0 : ii), !1, t);
};
E.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(p._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
E.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(p.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
E.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(p.braceL), this.labels.push(jr), this.enterScope(0);
  for (var t, i = !1; this.type !== p.braceR; )
    if (this.type === p._case || this.type === p._default) {
      var s = this.type === p._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), s ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(p.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
E.parseThrowStatement = function(e) {
  return this.next(), ue.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var Br = [];
E.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? bs : 0), this.checkLValPattern(e, t ? ws : Me), this.expect(p.parenR), e;
};
E.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === p._catch) {
    var t = this.startNode();
    this.next(), this.eat(p.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(p._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
E.parseVarStatement = function(e, t, i) {
  return this.next(), this.parseVar(e, !1, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
E.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(yi), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
E.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
E.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
E.parseLabeledStatement = function(e, t, i, s) {
  for (var a = 0, o = this.labels; a < o.length; a += 1) {
    var h = o[a];
    h.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
  }
  for (var d = this.type.isLoop ? "loop" : this.type === p._switch ? "switch" : null, y = this.labels.length - 1; y >= 0; y--) {
    var u = this.labels[y];
    if (u.statementStart === e.start)
      u.statementStart = this.start, u.kind = d;
    else
      break;
  }
  return this.labels.push({ name: t, kind: d, statementStart: this.start }), e.body = this.parseStatement(s ? s.indexOf("label") === -1 ? s + "label" : s : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
};
E.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
E.parseBlock = function(e, t, i) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(p.braceL), e && this.enterScope(0); this.type !== p.braceR; ) {
    var s = this.parseStatement(null);
    t.body.push(s);
  }
  return i && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
E.parseFor = function(e, t) {
  return e.init = t, this.expect(p.semi), e.test = this.type === p.semi ? null : this.parseExpression(), this.expect(p.semi), e.update = this.type === p.parenR ? null : this.parseExpression(), this.expect(p.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
E.parseForIn = function(e, t) {
  var i = this.type === p._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(
    t.start,
    (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(p.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
};
E.parseVar = function(e, t, i, s) {
  for (e.declarations = [], e.kind = i; ; ) {
    var a = this.startNode();
    if (this.parseVarId(a, i), this.eat(p.eq) ? a.init = this.parseMaybeAssign(t) : !s && i === "const" && !(this.type === p._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !s && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== p._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration") : !s && a.id.type !== "Identifier" && !(t && (this.type === p._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : a.init = null, e.declarations.push(this.finishNode(a, "VariableDeclarator")), !this.eat(p.comma))
      break;
  }
  return e;
};
E.parseVarId = function(e, t) {
  e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? mi : Me, !1);
};
var ht = 1, ii = 2, _s = 4;
E.parseFunction = function(e, t, i, s, a) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === p.star && t & ii && this.unexpected(), e.generator = this.eat(p.star)), this.options.ecmaVersion >= 8 && (e.async = !!s), t & ht && (e.id = t & _s && this.type !== p.name ? null : this.parseIdent(), e.id && !(t & ii) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? mi : Me : Ss));
  var o = this.yieldPos, h = this.awaitPos, d = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(di(e.async, e.generator)), t & ht || (e.id = this.type === p.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1, a), this.yieldPos = o, this.awaitPos = h, this.awaitIdentPos = d, this.finishNode(e, t & ht ? "FunctionDeclaration" : "FunctionExpression");
};
E.parseFunctionParams = function(e) {
  this.expect(p.parenL), e.params = this.parseBindingList(p.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
E.parseClass = function(e, t) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var s = this.enterClassBody(), a = this.startNode(), o = !1;
  for (a.body = [], this.expect(p.braceL); this.type !== p.braceR; ) {
    var h = this.parseClassElement(e.superClass !== null);
    h && (a.body.push(h), h.type === "MethodDefinition" && h.kind === "constructor" ? (o && this.raiseRecoverable(h.start, "Duplicate constructor in the same class"), o = !0) : h.key && h.key.type === "PrivateIdentifier" && $r(s, h) && this.raiseRecoverable(h.key.start, "Identifier '#" + h.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), e.body = this.finishNode(a, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
E.parseClassElement = function(e) {
  if (this.eat(p.semi))
    return null;
  var t = this.options.ecmaVersion, i = this.startNode(), s = "", a = !1, o = !1, h = "method", d = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(p.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === p.star ? d = !0 : s = "static";
  }
  if (i.static = d, !s && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === p.star) && !this.canInsertSemicolon() ? o = !0 : s = "async"), !s && (t >= 9 || !o) && this.eat(p.star) && (a = !0), !s && !o && !a) {
    var y = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? h = y : s = y);
  }
  if (s ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = s, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === p.parenL || h !== "method" || a || o) {
    var u = !i.static && Et(i, "constructor"), w = u && e;
    u && h !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = u ? "constructor" : h, this.parseClassMethod(i, a, o, w);
  } else
    this.parseClassField(i);
  return i;
};
E.isClassElementNameStart = function() {
  return this.type === p.name || this.type === p.privateId || this.type === p.num || this.type === p.string || this.type === p.bracketL || this.type.keyword;
};
E.parseClassElementName = function(e) {
  this.type === p.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
E.parseClassMethod = function(e, t, i, s) {
  var a = e.key;
  e.kind === "constructor" ? (t && this.raise(a.start, "Constructor can't be a generator"), i && this.raise(a.start, "Constructor can't be an async method")) : e.static && Et(e, "prototype") && this.raise(a.start, "Classes may not have a static property named prototype");
  var o = e.value = this.parseMethod(t, i, s);
  return e.kind === "get" && o.params.length !== 0 && this.raiseRecoverable(o.start, "getter should have no params"), e.kind === "set" && o.params.length !== 1 && this.raiseRecoverable(o.start, "setter should have exactly one param"), e.kind === "set" && o.params[0].type === "RestElement" && this.raiseRecoverable(o.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
E.parseClassField = function(e) {
  return Et(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Et(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(p.eq) ? (this.enterScope(mt | Dt), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
E.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(qe | Dt); this.type !== p.braceR; ) {
    var i = this.parseStatement(null);
    e.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
E.parseClassId = function(e, t) {
  this.type === p.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, Me, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
E.parseClassSuper = function(e) {
  e.superClass = this.eat(p._extends) ? this.parseExprSubscripts(null, !1) : null;
};
E.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
E.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, i = e.used;
  if (this.options.checkPrivateFields)
    for (var s = this.privateNameStack.length, a = s === 0 ? null : this.privateNameStack[s - 1], o = 0; o < i.length; ++o) {
      var h = i[o];
      st(t, h.name) || (a ? a.used.push(h) : this.raiseRecoverable(h.start, "Private field '#" + h.name + "' must be declared in an enclosing class"));
    }
};
function $r(e, t) {
  var i = t.key.name, s = e[i], a = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (a = (t.static ? "s" : "i") + t.kind), s === "iget" && a === "iset" || s === "iset" && a === "iget" || s === "sget" && a === "sset" || s === "sset" && a === "sget" ? (e[i] = "true", !1) : s ? !0 : (e[i] = a, !1);
}
function Et(e, t) {
  var i = e.computed, s = e.key;
  return !i && (s.type === "Identifier" && s.name === t || s.type === "Literal" && s.value === t);
}
E.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== p.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
E.parseExport = function(e, t) {
  if (this.next(), this.eat(p.star))
    return this.parseExportAllDeclaration(e, t);
  if (this.eat(p._default))
    return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== p.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
    else {
      for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
        var a = s[i];
        this.checkUnreserved(a.local), this.checkLocalExport(a.local), a.local.type === "Literal" && this.raise(a.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
E.parseExportDeclaration = function(e) {
  return this.parseStatement(null);
};
E.parseExportDefaultDeclaration = function() {
  var e;
  if (this.type === p._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, ht | _s, !1, e);
  } else if (this.type === p._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var s = this.parseMaybeAssign();
    return this.semicolon(), s;
  }
};
E.checkExport = function(e, t, i) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), st(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = !0);
};
E.checkPatternExport = function(e, t) {
  var i = t.type;
  if (i === "Identifier")
    this.checkExport(e, t, t.start);
  else if (i === "ObjectPattern")
    for (var s = 0, a = t.properties; s < a.length; s += 1) {
      var o = a[s];
      this.checkPatternExport(e, o);
    }
  else if (i === "ArrayPattern")
    for (var h = 0, d = t.elements; h < d.length; h += 1) {
      var y = d[h];
      y && this.checkPatternExport(e, y);
    }
  else i === "Property" ? this.checkPatternExport(e, t.value) : i === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : i === "RestElement" && this.checkPatternExport(e, t.argument);
};
E.checkVariableExport = function(e, t) {
  if (e)
    for (var i = 0, s = t; i < s.length; i += 1) {
      var a = s[i];
      this.checkPatternExport(e, a.id);
    }
};
E.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
E.parseExportSpecifier = function(e) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(
    e,
    t.exported,
    t.exported.start
  ), this.finishNode(t, "ExportSpecifier");
};
E.parseExportSpecifiers = function(e) {
  var t = [], i = !0;
  for (this.expect(p.braceL); !this.eat(p.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(p.comma), this.afterTrailingComma(p.braceR))
      break;
    t.push(this.parseExportSpecifier(e));
  }
  return t;
};
E.parseImport = function(e) {
  return this.next(), this.type === p.string ? (e.specifiers = Br, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === p.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
E.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, Me), this.finishNode(e, "ImportSpecifier");
};
E.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, Me), this.finishNode(e, "ImportDefaultSpecifier");
};
E.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, Me), this.finishNode(e, "ImportNamespaceSpecifier");
};
E.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === p.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(p.comma)))
    return e;
  if (this.type === p.star)
    return e.push(this.parseImportNamespaceSpecifier()), e;
  for (this.expect(p.braceL); !this.eat(p.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(p.comma), this.afterTrailingComma(p.braceR))
      break;
    e.push(this.parseImportSpecifier());
  }
  return e;
};
E.parseWithClause = function() {
  var e = [];
  if (!this.eat(p._with))
    return e;
  this.expect(p.braceL);
  for (var t = {}, i = !0; !this.eat(p.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(p.comma), this.afterTrailingComma(p.braceR))
      break;
    var s = this.parseImportAttribute(), a = s.key.type === "Identifier" ? s.key.name : s.key.value;
    st(t, a) && this.raiseRecoverable(s.key.start, "Duplicate attribute key '" + a + "'"), t[a] = !0, e.push(s);
  }
  return e;
};
E.parseImportAttribute = function() {
  var e = this.startNode();
  return e.key = this.type === p.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(p.colon), this.type !== p.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
};
E.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === p.string) {
    var e = this.parseLiteral(this.value);
    return Dr.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(!0);
};
E.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
E.isDirectiveCandidate = function(e) {
  return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var we = X.prototype;
we.toAssignable = function(e, t, i) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);
        for (var s = 0, a = e.properties; s < a.length; s += 1) {
          var o = a[s];
          this.toAssignable(o, t), o.type === "RestElement" && (o.argument.type === "ArrayPattern" || o.argument.type === "ObjectPattern") && this.raise(o.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, i);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else i && this.checkPatternErrors(i, !0);
  return e;
};
we.toAssignableList = function(e, t) {
  for (var i = e.length, s = 0; s < i; s++) {
    var a = e[s];
    a && this.toAssignable(a, t);
  }
  if (i) {
    var o = e[i - 1];
    this.options.ecmaVersion === 6 && t && o && o.type === "RestElement" && o.argument.type !== "Identifier" && this.unexpected(o.argument.start);
  }
  return e;
};
we.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
we.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== p.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
we.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case p.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(p.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case p.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
we.parseBindingList = function(e, t, i, s) {
  for (var a = [], o = !0; !this.eat(e); )
    if (o ? o = !1 : this.expect(p.comma), t && this.type === p.comma)
      a.push(null);
    else {
      if (i && this.afterTrailingComma(e))
        break;
      if (this.type === p.ellipsis) {
        var h = this.parseRestBinding();
        this.parseBindingListItem(h), a.push(h), this.type === p.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else
        a.push(this.parseAssignableListItem(s));
    }
  return a;
};
we.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
we.parseBindingListItem = function(e) {
  return e;
};
we.parseMaybeDefault = function(e, t, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(p.eq))
    return i;
  var s = this.startNodeAt(e, t);
  return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");
};
we.checkLValSimple = function(e, t, i) {
  t === void 0 && (t = Ct);
  var s = t !== Ct;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (s ? "Binding " : "Assigning to ") + e.name + " in strict mode"), s && (t === Me && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), i && (st(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = !0), t !== Ts && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      s && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return s && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, i);
    default:
      this.raise(e.start, (s ? "Binding" : "Assigning to") + " rvalue");
  }
};
we.checkLValPattern = function(e, t, i) {
  switch (t === void 0 && (t = Ct), e.type) {
    case "ObjectPattern":
      for (var s = 0, a = e.properties; s < a.length; s += 1) {
        var o = a[s];
        this.checkLValInnerPattern(o, t, i);
      }
      break;
    case "ArrayPattern":
      for (var h = 0, d = e.elements; h < d.length; h += 1) {
        var y = d[h];
        y && this.checkLValInnerPattern(y, t, i);
      }
      break;
    default:
      this.checkLValSimple(e, t, i);
  }
};
we.checkLValInnerPattern = function(e, t, i) {
  switch (t === void 0 && (t = Ct), e.type) {
    case "Property":
      this.checkLValInnerPattern(e.value, t, i);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(e.left, t, i);
      break;
    case "RestElement":
      this.checkLValPattern(e.argument, t, i);
      break;
    default:
      this.checkLValPattern(e, t, i);
  }
};
var oe = function(t, i, s, a, o) {
  this.token = t, this.isExpr = !!i, this.preserveSpace = !!s, this.override = a, this.generator = !!o;
}, H = {
  b_stat: new oe("{", !1),
  b_expr: new oe("{", !0),
  b_tmpl: new oe("${", !1),
  p_stat: new oe("(", !1),
  p_expr: new oe("(", !0),
  q_tmpl: new oe("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new oe("function", !1),
  f_expr: new oe("function", !0),
  f_expr_gen: new oe("function", !0, !1, null, !0),
  f_gen: new oe("function", !1, !1, null, !0)
}, at = X.prototype;
at.initialContext = function() {
  return [H.b_stat];
};
at.curContext = function() {
  return this.context[this.context.length - 1];
};
at.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === H.f_expr || t === H.f_stat ? !0 : e === p.colon && (t === H.b_stat || t === H.b_expr) ? !t.isExpr : e === p._return || e === p.name && this.exprAllowed ? ue.test(this.input.slice(this.lastTokEnd, this.start)) : e === p._else || e === p.semi || e === p.eof || e === p.parenR || e === p.arrow ? !0 : e === p.braceL ? t === H.b_stat : e === p._var || e === p._const || e === p.name ? !1 : !this.exprAllowed;
};
at.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
at.updateContext = function(e) {
  var t, i = this.type;
  i.keyword && e === p.dot ? this.exprAllowed = !1 : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
};
at.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
};
p.parenR.updateContext = p.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === H.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
p.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? H.b_stat : H.b_expr), this.exprAllowed = !0;
};
p.dollarBraceL.updateContext = function() {
  this.context.push(H.b_tmpl), this.exprAllowed = !0;
};
p.parenL.updateContext = function(e) {
  var t = e === p._if || e === p._for || e === p._with || e === p._while;
  this.context.push(t ? H.p_stat : H.p_expr), this.exprAllowed = !0;
};
p.incDec.updateContext = function() {
};
p._function.updateContext = p._class.updateContext = function(e) {
  e.beforeExpr && e !== p._else && !(e === p.semi && this.curContext() !== H.p_stat) && !(e === p._return && ue.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === p.colon || e === p.braceL) && this.curContext() === H.b_stat) ? this.context.push(H.f_expr) : this.context.push(H.f_stat), this.exprAllowed = !1;
};
p.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
p.backQuote.updateContext = function() {
  this.curContext() === H.q_tmpl ? this.context.pop() : this.context.push(H.q_tmpl), this.exprAllowed = !1;
};
p.star.updateContext = function(e) {
  if (e === p._function) {
    var t = this.context.length - 1;
    this.context[t] === H.f_expr ? this.context[t] = H.f_expr_gen : this.context[t] = H.f_gen;
  }
  this.exprAllowed = !0;
};
p.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== p.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var D = X.prototype;
D.checkPropClash = function(e, t, i) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var s = e.key, a;
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
    var o = e.kind;
    if (this.options.ecmaVersion >= 6) {
      a === "__proto__" && o === "init" && (t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = s.start) : this.raiseRecoverable(s.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    a = "$" + a;
    var h = t[a];
    if (h) {
      var d;
      o === "init" ? d = this.strict && h.init || h.get || h.set : d = h.init || h[o], d && this.raiseRecoverable(s.start, "Redefinition of property");
    } else
      h = t[a] = {
        init: !1,
        get: !1,
        set: !1
      };
    h[o] = !0;
  }
};
D.parseExpression = function(e, t) {
  var i = this.start, s = this.startLoc, a = this.parseMaybeAssign(e, t);
  if (this.type === p.comma) {
    var o = this.startNodeAt(i, s);
    for (o.expressions = [a]; this.eat(p.comma); )
      o.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(o, "SequenceExpression");
  }
  return a;
};
D.parseMaybeAssign = function(e, t, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var s = !1, a = -1, o = -1, h = -1;
  t ? (a = t.parenthesizedAssign, o = t.trailingComma, h = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new zt(), s = !0);
  var d = this.start, y = this.startLoc;
  (this.type === p.parenL || this.type === p.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var u = this.parseMaybeConditional(e, t);
  if (i && (u = i.call(this, u, d, y)), this.type.isAssign) {
    var w = this.startNodeAt(d, y);
    return w.operator = this.value, this.type === p.eq && (u = this.toAssignable(u, !1, t)), s || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= u.start && (t.shorthandAssign = -1), this.type === p.eq ? this.checkLValPattern(u) : this.checkLValSimple(u), w.left = u, this.next(), w.right = this.parseMaybeAssign(e), h > -1 && (t.doubleProto = h), this.finishNode(w, "AssignmentExpression");
  } else
    s && this.checkExpressionErrors(t, !0);
  return a > -1 && (t.parenthesizedAssign = a), o > -1 && (t.trailingComma = o), u;
};
D.parseMaybeConditional = function(e, t) {
  var i = this.start, s = this.startLoc, a = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return a;
  if (this.eat(p.question)) {
    var o = this.startNodeAt(i, s);
    return o.test = a, o.consequent = this.parseMaybeAssign(), this.expect(p.colon), o.alternate = this.parseMaybeAssign(e), this.finishNode(o, "ConditionalExpression");
  }
  return a;
};
D.parseExprOps = function(e, t) {
  var i = this.start, s = this.startLoc, a = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || a.start === i && a.type === "ArrowFunctionExpression" ? a : this.parseExprOp(a, i, s, -1, e);
};
D.parseExprOp = function(e, t, i, s, a) {
  var o = this.type.binop;
  if (o != null && (!a || this.type !== p._in) && o > s) {
    var h = this.type === p.logicalOR || this.type === p.logicalAND, d = this.type === p.coalesce;
    d && (o = p.logicalAND.binop);
    var y = this.value;
    this.next();
    var u = this.start, w = this.startLoc, P = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, a), u, w, o, a), M = this.buildBinary(t, i, e, P, y, h || d);
    return (h && this.type === p.coalesce || d && (this.type === p.logicalOR || this.type === p.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(M, t, i, s, a);
  }
  return e;
};
D.buildBinary = function(e, t, i, s, a, o) {
  s.type === "PrivateIdentifier" && this.raise(s.start, "Private identifier can only be left side of binary expression");
  var h = this.startNodeAt(e, t);
  return h.left = i, h.operator = a, h.right = s, this.finishNode(h, o ? "LogicalExpression" : "BinaryExpression");
};
D.parseMaybeUnary = function(e, t, i, s) {
  var a = this.start, o = this.startLoc, h;
  if (this.isContextual("await") && this.canAwait)
    h = this.parseAwait(s), t = !0;
  else if (this.type.prefix) {
    var d = this.startNode(), y = this.type === p.incDec;
    d.operator = this.value, d.prefix = !0, this.next(), d.argument = this.parseMaybeUnary(null, !0, y, s), this.checkExpressionErrors(e, !0), y ? this.checkLValSimple(d.argument) : this.strict && d.operator === "delete" && Ps(d.argument) ? this.raiseRecoverable(d.start, "Deleting local variable in strict mode") : d.operator === "delete" && si(d.argument) ? this.raiseRecoverable(d.start, "Private fields can not be deleted") : t = !0, h = this.finishNode(d, y ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === p.privateId)
    (s || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), h = this.parsePrivateIdent(), this.type !== p._in && this.unexpected();
  else {
    if (h = this.parseExprSubscripts(e, s), this.checkExpressionErrors(e))
      return h;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var u = this.startNodeAt(a, o);
      u.operator = this.value, u.prefix = !1, u.argument = h, this.checkLValSimple(h), this.next(), h = this.finishNode(u, "UpdateExpression");
    }
  }
  if (!i && this.eat(p.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(a, o, h, this.parseMaybeUnary(null, !1, !1, s), "**", !1);
  else
    return h;
};
function Ps(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && Ps(e.expression);
}
function si(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && si(e.expression) || e.type === "ParenthesizedExpression" && si(e.expression);
}
D.parseExprSubscripts = function(e, t) {
  var i = this.start, s = this.startLoc, a = this.parseExprAtom(e, t);
  if (a.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return a;
  var o = this.parseSubscripts(a, i, s, !1, t);
  return e && o.type === "MemberExpression" && (e.parenthesizedAssign >= o.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= o.start && (e.parenthesizedBind = -1), e.trailingComma >= o.start && (e.trailingComma = -1)), o;
};
D.parseSubscripts = function(e, t, i, s, a) {
  for (var o = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, h = !1; ; ) {
    var d = this.parseSubscript(e, t, i, s, o, h, a);
    if (d.optional && (h = !0), d === e || d.type === "ArrowFunctionExpression") {
      if (h) {
        var y = this.startNodeAt(t, i);
        y.expression = d, d = this.finishNode(y, "ChainExpression");
      }
      return d;
    }
    e = d;
  }
};
D.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(p.arrow);
};
D.parseSubscriptAsyncArrow = function(e, t, i, s) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, s);
};
D.parseSubscript = function(e, t, i, s, a, o, h) {
  var d = this.options.ecmaVersion >= 11, y = d && this.eat(p.questionDot);
  s && y && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var u = this.eat(p.bracketL);
  if (u || y && this.type !== p.parenL && this.type !== p.backQuote || this.eat(p.dot)) {
    var w = this.startNodeAt(t, i);
    w.object = e, u ? (w.property = this.parseExpression(), this.expect(p.bracketR)) : this.type === p.privateId && e.type !== "Super" ? w.property = this.parsePrivateIdent() : w.property = this.parseIdent(this.options.allowReserved !== "never"), w.computed = !!u, d && (w.optional = y), e = this.finishNode(w, "MemberExpression");
  } else if (!s && this.eat(p.parenL)) {
    var P = new zt(), M = this.yieldPos, U = this.awaitPos, he = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var Ee = this.parseExprList(p.parenR, this.options.ecmaVersion >= 8, !1, P);
    if (a && !y && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = M, this.awaitPos = U, this.awaitIdentPos = he, this.parseSubscriptAsyncArrow(t, i, Ee, h);
    this.checkExpressionErrors(P, !0), this.yieldPos = M || this.yieldPos, this.awaitPos = U || this.awaitPos, this.awaitIdentPos = he || this.awaitIdentPos;
    var R = this.startNodeAt(t, i);
    R.callee = e, R.arguments = Ee, d && (R.optional = y), e = this.finishNode(R, "CallExpression");
  } else if (this.type === p.backQuote) {
    (y || o) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var re = this.startNodeAt(t, i);
    re.tag = e, re.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(re, "TaggedTemplateExpression");
  }
  return e;
};
D.parseExprAtom = function(e, t, i) {
  this.type === p.slash && this.readRegexp();
  var s, a = this.potentialArrowAt === this.start;
  switch (this.type) {
    case p._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), s = this.startNode(), this.next(), this.type === p.parenL && !this.allowDirectSuper && this.raise(s.start, "super() call outside constructor of a subclass"), this.type !== p.dot && this.type !== p.bracketL && this.type !== p.parenL && this.unexpected(), this.finishNode(s, "Super");
    case p._this:
      return s = this.startNode(), this.next(), this.finishNode(s, "ThisExpression");
    case p.name:
      var o = this.start, h = this.startLoc, d = this.containsEsc, y = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !d && y.name === "async" && !this.canInsertSemicolon() && this.eat(p._function))
        return this.overrideContext(H.f_expr), this.parseFunction(this.startNodeAt(o, h), 0, !1, !0, t);
      if (a && !this.canInsertSemicolon()) {
        if (this.eat(p.arrow))
          return this.parseArrowExpression(this.startNodeAt(o, h), [y], !1, t);
        if (this.options.ecmaVersion >= 8 && y.name === "async" && this.type === p.name && !d && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return y = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(p.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(o, h), [y], !0, t);
      }
      return y;
    case p.regexp:
      var u = this.value;
      return s = this.parseLiteral(u.value), s.regex = { pattern: u.pattern, flags: u.flags }, s;
    case p.num:
    case p.string:
      return this.parseLiteral(this.value);
    case p._null:
    case p._true:
    case p._false:
      return s = this.startNode(), s.value = this.type === p._null ? null : this.type === p._true, s.raw = this.type.keyword, this.next(), this.finishNode(s, "Literal");
    case p.parenL:
      var w = this.start, P = this.parseParenAndDistinguishExpression(a, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(P) && (e.parenthesizedAssign = w), e.parenthesizedBind < 0 && (e.parenthesizedBind = w)), P;
    case p.bracketL:
      return s = this.startNode(), this.next(), s.elements = this.parseExprList(p.bracketR, !0, !0, e), this.finishNode(s, "ArrayExpression");
    case p.braceL:
      return this.overrideContext(H.b_expr), this.parseObj(!1, e);
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
D.parseExprAtomDefault = function() {
  this.unexpected();
};
D.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === p.parenL && !e)
    return this.parseDynamicImport(t);
  if (this.type === p.dot) {
    var i = this.startNodeAt(t.start, t.loc && t.loc.start);
    return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
  } else
    this.unexpected();
};
D.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(p.parenR) ? e.options = null : (this.expect(p.comma), this.afterTrailingComma(p.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(p.parenR) || (this.expect(p.comma), this.afterTrailingComma(p.parenR) || this.unexpected())));
  else if (!this.eat(p.parenR)) {
    var t = this.start;
    this.eat(p.comma) && this.eat(p.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
D.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
D.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
D.parseParenExpression = function() {
  this.expect(p.parenL);
  var e = this.parseExpression();
  return this.expect(p.parenR), e;
};
D.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
D.parseParenAndDistinguishExpression = function(e, t) {
  var i = this.start, s = this.startLoc, a, o = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var h = this.start, d = this.startLoc, y = [], u = !0, w = !1, P = new zt(), M = this.yieldPos, U = this.awaitPos, he;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== p.parenR; )
      if (u ? u = !1 : this.expect(p.comma), o && this.afterTrailingComma(p.parenR, !0)) {
        w = !0;
        break;
      } else if (this.type === p.ellipsis) {
        he = this.start, y.push(this.parseParenItem(this.parseRestBinding())), this.type === p.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        y.push(this.parseMaybeAssign(!1, P, this.parseParenItem));
    var Ee = this.lastTokEnd, R = this.lastTokEndLoc;
    if (this.expect(p.parenR), e && this.shouldParseArrow(y) && this.eat(p.arrow))
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = M, this.awaitPos = U, this.parseParenArrowList(i, s, y, t);
    (!y.length || w) && this.unexpected(this.lastTokStart), he && this.unexpected(he), this.checkExpressionErrors(P, !0), this.yieldPos = M || this.yieldPos, this.awaitPos = U || this.awaitPos, y.length > 1 ? (a = this.startNodeAt(h, d), a.expressions = y, this.finishNodeAt(a, "SequenceExpression", Ee, R)) : a = y[0];
  } else
    a = this.parseParenExpression();
  if (this.options.preserveParens) {
    var re = this.startNodeAt(i, s);
    return re.expression = a, this.finishNode(re, "ParenthesizedExpression");
  } else
    return a;
};
D.parseParenItem = function(e) {
  return e;
};
D.parseParenArrowList = function(e, t, i, s) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, s);
};
var Ur = [];
D.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === p.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var i = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var s = this.start, a = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), s, a, !0, !1), this.eat(p.parenL) ? e.arguments = this.parseExprList(p.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Ur, this.finishNode(e, "NewExpression");
};
D.parseTemplateElement = function(e) {
  var t = e.isTagged, i = this.startNode();
  return this.type === p.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : i.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), i.tail = this.type === p.backQuote, this.finishNode(i, "TemplateElement");
};
D.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var i = this.startNode();
  this.next(), i.expressions = [];
  var s = this.parseTemplateElement({ isTagged: t });
  for (i.quasis = [s]; !s.tail; )
    this.type === p.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(p.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(p.braceR), i.quasis.push(s = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
D.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === p.name || this.type === p.num || this.type === p.string || this.type === p.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === p.star) && !ue.test(this.input.slice(this.lastTokEnd, this.start));
};
D.parseObj = function(e, t) {
  var i = this.startNode(), s = !0, a = {};
  for (i.properties = [], this.next(); !this.eat(p.braceR); ) {
    if (s)
      s = !1;
    else if (this.expect(p.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(p.braceR))
      break;
    var o = this.parseProperty(e, t);
    e || this.checkPropClash(o, a, t), i.properties.push(o);
  }
  return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
};
D.parseProperty = function(e, t) {
  var i = this.startNode(), s, a, o, h;
  if (this.options.ecmaVersion >= 9 && this.eat(p.ellipsis))
    return e ? (i.argument = this.parseIdent(!1), this.type === p.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, t), this.type === p.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (e || t) && (o = this.start, h = this.startLoc), e || (s = this.eat(p.star)));
  var d = this.containsEsc;
  return this.parsePropertyName(i), !e && !d && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(i) ? (a = !0, s = this.options.ecmaVersion >= 9 && this.eat(p.star), this.parsePropertyName(i)) : a = !1, this.parsePropertyValue(i, e, s, a, o, h, t, d), this.finishNode(i, "Property");
};
D.parseGetterSetter = function(e) {
  var t = e.key.name;
  this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
  var i = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== i) {
    var s = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(s, "getter should have no params") : this.raiseRecoverable(s, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
D.parsePropertyValue = function(e, t, i, s, a, o, h, d) {
  (i || s) && this.type === p.colon && this.unexpected(), this.eat(p.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, h), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === p.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(i, s), e.kind = "init") : !t && !d && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== p.comma && this.type !== p.braceR && this.type !== p.eq ? ((i || s) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((i || s) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = a), t ? e.value = this.parseMaybeDefault(a, o, this.copyNode(e.key)) : this.type === p.eq && h ? (h.shorthandAssign < 0 && (h.shorthandAssign = this.start), e.value = this.parseMaybeDefault(a, o, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
};
D.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(p.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(p.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === p.num || this.type === p.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
D.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
D.parseMethod = function(e, t, i) {
  var s = this.startNode(), a = this.yieldPos, o = this.awaitPos, h = this.awaitIdentPos;
  return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = e), this.options.ecmaVersion >= 8 && (s.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(di(t, s.generator) | Dt | (i ? ks : 0)), this.expect(p.parenL), s.params = this.parseBindingList(p.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0, !1), this.yieldPos = a, this.awaitPos = o, this.awaitIdentPos = h, this.finishNode(s, "FunctionExpression");
};
D.parseArrowExpression = function(e, t, i, s) {
  var a = this.yieldPos, o = this.awaitPos, h = this.awaitIdentPos;
  return this.enterScope(di(i, !1) | fi), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, s), this.yieldPos = a, this.awaitPos = o, this.awaitIdentPos = h, this.finishNode(e, "ArrowFunctionExpression");
};
D.parseFunctionBody = function(e, t, i, s) {
  var a = t && this.type !== p.braceL, o = this.strict, h = !1;
  if (a)
    e.body = this.parseMaybeAssign(s), e.expression = !0, this.checkParams(e, !1);
  else {
    var d = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!o || d) && (h = this.strictDirective(this.end), h && d && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var y = this.labels;
    this.labels = [], h && (this.strict = !0), this.checkParams(e, !o && !h && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, Ts), e.body = this.parseBlock(!1, void 0, h && !o), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = y;
  }
  this.exitScope();
};
D.isSimpleParamList = function(e) {
  for (var t = 0, i = e; t < i.length; t += 1) {
    var s = i[t];
    if (s.type !== "Identifier")
      return !1;
  }
  return !0;
};
D.checkParams = function(e, t) {
  for (var i = /* @__PURE__ */ Object.create(null), s = 0, a = e.params; s < a.length; s += 1) {
    var o = a[s];
    this.checkLValInnerPattern(o, mi, t ? null : i);
  }
};
D.parseExprList = function(e, t, i, s) {
  for (var a = [], o = !0; !this.eat(e); ) {
    if (o)
      o = !1;
    else if (this.expect(p.comma), t && this.afterTrailingComma(e))
      break;
    var h = void 0;
    i && this.type === p.comma ? h = null : this.type === p.ellipsis ? (h = this.parseSpread(s), s && this.type === p.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : h = this.parseMaybeAssign(!1, s), a.push(h);
  }
  return a;
};
D.checkUnreserved = function(e) {
  var t = e.start, i = e.end, s = e.name;
  if (this.inGenerator && s === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && s === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & Vt) && s === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (s === "arguments" || s === "await") && this.raise(t, "Cannot use " + s + " in class static initialization block"), this.keywords.test(s) && this.raise(t, "Unexpected keyword '" + s + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
    var a = this.strict ? this.reservedWordsStrict : this.reservedWords;
    a.test(s) && (!this.inAsync && s === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + s + "' is reserved"));
  }
};
D.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
D.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === p.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = p.name) : this.unexpected(), e;
};
D.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === p.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
D.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === p.semi || this.canInsertSemicolon() || this.type !== p.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(p.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
D.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var It = X.prototype;
It.raise = function(e, t) {
  var i = pi(this.input, e);
  t += " (" + i.line + ":" + i.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
  var s = new SyntaxError(t);
  throw s.pos = e, s.loc = i, s.raisedAt = this.pos, s;
};
It.raiseRecoverable = It.raise;
It.curPosition = function() {
  if (this.options.locations)
    return new Ye(this.curLine, this.pos - this.lineStart);
};
var Be = X.prototype, Zr = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
Be.enterScope = function(e) {
  this.scopeStack.push(new Zr(e));
};
Be.exitScope = function() {
  this.scopeStack.pop();
};
Be.treatFunctionsAsVarInScope = function(e) {
  return e.flags & rt || !this.inModule && e.flags & lt;
};
Be.declareName = function(e, t, i) {
  var s = !1;
  if (t === Me) {
    var a = this.currentScope();
    s = a.lexical.indexOf(e) > -1 || a.functions.indexOf(e) > -1 || a.var.indexOf(e) > -1, a.lexical.push(e), this.inModule && a.flags & lt && delete this.undefinedExports[e];
  } else if (t === ws) {
    var o = this.currentScope();
    o.lexical.push(e);
  } else if (t === Ss) {
    var h = this.currentScope();
    this.treatFunctionsAsVar ? s = h.lexical.indexOf(e) > -1 : s = h.lexical.indexOf(e) > -1 || h.var.indexOf(e) > -1, h.functions.push(e);
  } else
    for (var d = this.scopeStack.length - 1; d >= 0; --d) {
      var y = this.scopeStack[d];
      if (y.lexical.indexOf(e) > -1 && !(y.flags & bs && y.lexical[0] === e) || !this.treatFunctionsAsVarInScope(y) && y.functions.indexOf(e) > -1) {
        s = !0;
        break;
      }
      if (y.var.push(e), this.inModule && y.flags & lt && delete this.undefinedExports[e], y.flags & Vt)
        break;
    }
  s && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
};
Be.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
Be.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Be.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (Vt | mt | qe))
      return t;
  }
};
Be.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (Vt | mt | qe) && !(t.flags & fi))
      return t;
  }
};
var yt = function(t, i, s) {
  this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new dt(t, s)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
}, vt = X.prototype;
vt.startNode = function() {
  return new yt(this, this.start, this.startLoc);
};
vt.startNodeAt = function(e, t) {
  return new yt(this, e, t);
};
function As(e, t, i, s) {
  return e.type = t, e.end = i, this.options.locations && (e.loc.end = s), this.options.ranges && (e.range[1] = i), e;
}
vt.finishNode = function(e, t) {
  return As.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
vt.finishNodeAt = function(e, t, i, s) {
  return As.call(this, e, t, i, s);
};
vt.copyNode = function(e) {
  var t = new yt(this, e.start, this.startLoc);
  for (var i in e)
    t[i] = e[i];
  return t;
};
var qr = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", Cs = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Es = Cs + " Extended_Pictographic", Is = Es, Ns = Is + " EBase EComp EMod EPres ExtPict", Ls = Ns, Hr = Ls, Wr = {
  9: Cs,
  10: Es,
  11: Is,
  12: Ns,
  13: Ls,
  14: Hr
}, Kr = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Gr = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Kr
}, Di = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Os = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Ms = Os + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Rs = Ms + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Ds = Rs + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Vs = Ds + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Jr = Vs + " " + qr, Xr = {
  9: Os,
  10: Ms,
  11: Rs,
  12: Ds,
  13: Vs,
  14: Jr
}, zs = {};
function Qr(e) {
  var t = zs[e] = {
    binary: Ve(Wr[e] + " " + Di),
    binaryOfStrings: Ve(Gr[e]),
    nonBinary: {
      General_Category: Ve(Di),
      Script: Ve(Xr[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var Gt = 0, Vi = [9, 10, 11, 12, 13, 14]; Gt < Vi.length; Gt += 1) {
  var Yr = Vi[Gt];
  Qr(Yr);
}
var A = X.prototype, Nt = function(t, i) {
  this.parent = t, this.base = i || this;
};
Nt.prototype.separatedFrom = function(t) {
  for (var i = this; i; i = i.parent)
    for (var s = t; s; s = s.parent)
      if (i.base === s.base && i !== s)
        return !0;
  return !1;
};
Nt.prototype.sibling = function() {
  return new Nt(this.parent, this.base);
};
var Ae = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = zs[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
Ae.prototype.reset = function(t, i, s) {
  var a = s.indexOf("v") !== -1, o = s.indexOf("u") !== -1;
  this.start = t | 0, this.source = i + "", this.flags = s, a && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = o && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = o && this.parser.options.ecmaVersion >= 9);
};
Ae.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
Ae.prototype.at = function(t, i) {
  i === void 0 && (i = !1);
  var s = this.source, a = s.length;
  if (t >= a)
    return -1;
  var o = s.charCodeAt(t);
  if (!(i || this.switchU) || o <= 55295 || o >= 57344 || t + 1 >= a)
    return o;
  var h = s.charCodeAt(t + 1);
  return h >= 56320 && h <= 57343 ? (o << 10) + h - 56613888 : o;
};
Ae.prototype.nextIndex = function(t, i) {
  i === void 0 && (i = !1);
  var s = this.source, a = s.length;
  if (t >= a)
    return a;
  var o = s.charCodeAt(t), h;
  return !(i || this.switchU) || o <= 55295 || o >= 57344 || t + 1 >= a || (h = s.charCodeAt(t + 1)) < 56320 || h > 57343 ? t + 1 : t + 2;
};
Ae.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
Ae.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
Ae.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
Ae.prototype.eat = function(t, i) {
  return i === void 0 && (i = !1), this.current(i) === t ? (this.advance(i), !0) : !1;
};
Ae.prototype.eatChars = function(t, i) {
  i === void 0 && (i = !1);
  for (var s = this.pos, a = 0, o = t; a < o.length; a += 1) {
    var h = o[a], d = this.at(s, i);
    if (d === -1 || d !== h)
      return !1;
    s = this.nextIndex(s, i);
  }
  return this.pos = s, !0;
};
A.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, i = e.flags, s = !1, a = !1, o = 0; o < i.length; o++) {
    var h = i.charAt(o);
    t.indexOf(h) === -1 && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(h, o + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), h === "u" && (s = !0), h === "v" && (a = !0);
  }
  this.options.ecmaVersion >= 15 && s && a && this.raise(e.start, "Invalid regular expression flag");
};
function ea(e) {
  for (var t in e)
    return !0;
  return !1;
}
A.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && ea(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
};
A.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = /* @__PURE__ */ Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(
    41
    /* ) */
  ) && e.raise("Unmatched ')'"), (e.eat(
    93
    /* ] */
  ) || e.eat(
    125
    /* } */
  )) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
    var s = i[t];
    e.groupNames[s] || e.raise("Invalid named capture referenced");
  }
};
A.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new Nt(e.branchID, null)), this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
  t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
A.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
A.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
A.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = !1, e.eat(
    94
    /* ^ */
  ) || e.eat(
    36
    /* $ */
  ))
    return !0;
  if (e.eat(
    92
    /* \ */
  )) {
    if (e.eat(
      66
      /* B */
    ) || e.eat(
      98
      /* b */
    ))
      return !0;
    e.pos = t;
  }
  if (e.eat(
    40
    /* ( */
  ) && e.eat(
    63
    /* ? */
  )) {
    var i = !1;
    if (this.options.ecmaVersion >= 9 && (i = e.eat(
      60
      /* < */
    )), e.eat(
      61
      /* = */
    ) || e.eat(
      33
      /* ! */
    ))
      return this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !i, !0;
  }
  return e.pos = t, !1;
};
A.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
A.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(
    42
    /* * */
  ) || e.eat(
    43
    /* + */
  ) || e.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(e, t);
};
A.regexp_eatBracedQuantifier = function(e, t) {
  var i = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var s = 0, a = -1;
    if (this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (a = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return a !== -1 && a < s && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = i;
  }
  return !1;
};
A.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
A.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
A.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(
    40
    /* ( */
  )) {
    if (e.eat(
      63
      /* ? */
    )) {
      if (this.options.ecmaVersion >= 16) {
        var i = this.regexp_eatModifiers(e), s = e.eat(
          45
          /* - */
        );
        if (i || s) {
          for (var a = 0; a < i.length; a++) {
            var o = i.charAt(a);
            i.indexOf(o, a + 1) > -1 && e.raise("Duplicate regular expression modifiers");
          }
          if (s) {
            var h = this.regexp_eatModifiers(e);
            !i && !h && e.current() === 58 && e.raise("Invalid regular expression modifiers");
            for (var d = 0; d < h.length; d++) {
              var y = h.charAt(d);
              (h.indexOf(y, d + 1) > -1 || i.indexOf(y) > -1) && e.raise("Duplicate regular expression modifiers");
            }
          }
        }
      }
      if (e.eat(
        58
        /* : */
      )) {
        if (this.regexp_disjunction(e), e.eat(
          41
          /* ) */
        ))
          return !0;
        e.raise("Unterminated group");
      }
    }
    e.pos = t;
  }
  return !1;
};
A.regexp_eatCapturingGroup = function(e) {
  if (e.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(
      41
      /* ) */
    ))
      return e.numCapturingParens += 1, !0;
    e.raise("Unterminated group");
  }
  return !1;
};
A.regexp_eatModifiers = function(e) {
  for (var t = "", i = 0; (i = e.current()) !== -1 && ta(i); )
    t += Ne(i), e.advance();
  return t;
};
function ta(e) {
  return e === 105 || e === 109 || e === 115;
}
A.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
A.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
A.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return Fs(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Fs(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
A.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !Fs(i); )
    e.advance();
  return e.pos !== t;
};
A.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
A.regexp_groupSpecifier = function(e) {
  if (e.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(e) || e.raise("Invalid group");
    var t = this.options.ecmaVersion >= 16, i = e.groupNames[e.lastStringValue];
    if (i)
      if (t)
        for (var s = 0, a = i; s < a.length; s += 1) {
          var o = a[s];
          o.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
        }
      else
        e.raise("Duplicate capture group name");
    t ? (i || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = !0;
  }
};
A.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(
      62
      /* > */
    ))
      return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
A.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += Ne(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Ne(e.lastIntValue);
    return !0;
  }
  return !1;
};
A.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, s = e.current(i);
  return e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue), ia(s) ? (e.lastIntValue = s, !0) : (e.pos = t, !1);
};
function ia(e) {
  return _e(e, !0) || e === 36 || e === 95;
}
A.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, s = e.current(i);
  return e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue), sa(s) ? (e.lastIntValue = s, !0) : (e.pos = t, !1);
};
function sa(e) {
  return Ie(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
A.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
A.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var i = e.lastIntValue;
    if (e.switchU)
      return i > e.maxBackReference && (e.maxBackReference = i), !0;
    if (i <= e.numCapturingParens)
      return !0;
    e.pos = t;
  }
  return !1;
};
A.regexp_eatKGroupName = function(e) {
  if (e.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
A.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
A.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
A.regexp_eatZero = function(e) {
  return e.current() === 48 && !Ft(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
A.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
A.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return js(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function js(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
A.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var i = e.pos, s = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var a = e.lastIntValue;
      if (s && a >= 55296 && a <= 56319) {
        var o = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var h = e.lastIntValue;
          if (h >= 56320 && h <= 57343)
            return e.lastIntValue = (a - 55296) * 1024 + (h - 56320) + 65536, !0;
        }
        e.pos = o, e.lastIntValue = a;
      }
      return !0;
    }
    if (s && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && ra(e.lastIntValue))
      return !0;
    s && e.raise("Invalid unicode escape"), e.pos = i;
  }
  return !1;
};
function ra(e) {
  return e >= 0 && e <= 1114111;
}
A.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
A.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
var Bs = 0, Le = 1, Se = 2;
A.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (aa(t))
    return e.lastIntValue = -1, e.advance(), Le;
  var i = !1;
  if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
    e.lastIntValue = -1, e.advance();
    var s;
    if (e.eat(
      123
      /* { */
    ) && (s = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(
      125
      /* } */
    ))
      return i && s === Se && e.raise("Invalid property name"), s;
    e.raise("Invalid property name");
  }
  return Bs;
};
function aa(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
A.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var i = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var s = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, i, s), Le;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var a = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, a);
  }
  return Bs;
};
A.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
  st(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
};
A.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return Le;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return Se;
  e.raise("Invalid property name");
};
A.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; $s(t = e.current()); )
    e.lastStringValue += Ne(t), e.advance();
  return e.lastStringValue !== "";
};
function $s(e) {
  return js(e) || e === 95;
}
A.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; na(t = e.current()); )
    e.lastStringValue += Ne(t), e.advance();
  return e.lastStringValue !== "";
};
function na(e) {
  return $s(e) || Ft(e);
}
A.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
A.regexp_eatCharacterClass = function(e) {
  if (e.eat(
    91
    /* [ */
  )) {
    var t = e.eat(
      94
      /* ^ */
    ), i = this.regexp_classContents(e);
    return e.eat(
      93
      /* ] */
    ) || e.raise("Unterminated character class"), t && i === Se && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
A.regexp_classContents = function(e) {
  return e.current() === 93 ? Le : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), Le);
};
A.regexp_nonEmptyClassRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(e)) {
      var i = e.lastIntValue;
      e.switchU && (t === -1 || i === -1) && e.raise("Invalid character class"), t !== -1 && i !== -1 && t > i && e.raise("Range out of order in character class");
    }
  }
};
A.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var i = e.current();
      (i === 99 || qs(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var s = e.current();
  return s !== 93 ? (e.lastIntValue = s, e.advance(), !0) : !1;
};
A.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    98
    /* b */
  ))
    return e.lastIntValue = 8, !0;
  if (e.switchU && e.eat(
    45
    /* - */
  ))
    return e.lastIntValue = 45, !0;
  if (!e.switchU && e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(e))
      return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
A.regexp_classSetExpression = function(e) {
  var t = Le, i;
  if (!this.regexp_eatClassSetRange(e)) if (i = this.regexp_eatClassSetOperand(e)) {
    i === Se && (t = Se);
    for (var s = e.pos; e.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
        i !== Se && (t = Le);
        continue;
      }
      e.raise("Invalid character in character class");
    }
    if (s !== e.pos)
      return t;
    for (; e.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
    if (s !== e.pos)
      return t;
  } else
    e.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(e)) {
      if (i = this.regexp_eatClassSetOperand(e), !i)
        return t;
      i === Se && (t = Se);
    }
};
A.regexp_eatClassSetRange = function(e) {
  var t = e.pos;
  if (this.regexp_eatClassSetCharacter(e)) {
    var i = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(e)) {
      var s = e.lastIntValue;
      return i !== -1 && s !== -1 && i > s && e.raise("Range out of order in character class"), !0;
    }
    e.pos = t;
  }
  return !1;
};
A.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? Le : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
};
A.regexp_eatNestedClass = function(e) {
  var t = e.pos;
  if (e.eat(
    91
    /* [ */
  )) {
    var i = e.eat(
      94
      /* ^ */
    ), s = this.regexp_classContents(e);
    if (e.eat(
      93
      /* ] */
    ))
      return i && s === Se && e.raise("Negated character class may contain strings"), s;
    e.pos = t;
  }
  if (e.eat(
    92
    /* \ */
  )) {
    var a = this.regexp_eatCharacterClassEscape(e);
    if (a)
      return a;
    e.pos = t;
  }
  return null;
};
A.regexp_eatClassStringDisjunction = function(e) {
  var t = e.pos;
  if (e.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (e.eat(
      123
      /* { */
    )) {
      var i = this.regexp_classStringDisjunctionContents(e);
      if (e.eat(
        125
        /* } */
      ))
        return i;
    } else
      e.raise("Invalid escape");
    e.pos = t;
  }
  return null;
};
A.regexp_classStringDisjunctionContents = function(e) {
  for (var t = this.regexp_classString(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_classString(e) === Se && (t = Se);
  return t;
};
A.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? Le : Se;
};
A.regexp_eatClassSetCharacter = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  ))
    return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e) ? !0 : e.eat(
      98
      /* b */
    ) ? (e.lastIntValue = 8, !0) : (e.pos = t, !1);
  var i = e.current();
  return i < 0 || i === e.lookahead() && oa(i) || ua(i) ? !1 : (e.advance(), e.lastIntValue = i, !0);
};
function oa(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function ua(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
A.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return ca(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function ca(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
A.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return Ft(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
A.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return !0;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return !1;
};
A.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; Ft(i = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
  return e.pos !== t;
};
function Ft(e) {
  return e >= 48 && e <= 57;
}
A.regexp_eatHexDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; Us(i = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + Zs(i), e.advance();
  return e.pos !== t;
};
function Us(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Zs(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
A.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var i = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + i * 8 + e.lastIntValue : e.lastIntValue = t * 8 + i;
    } else
      e.lastIntValue = t;
    return !0;
  }
  return !1;
};
A.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return qs(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function qs(e) {
  return e >= 48 && e <= 55;
}
A.regexp_eatFixedHexDigits = function(e, t) {
  var i = e.pos;
  e.lastIntValue = 0;
  for (var s = 0; s < t; ++s) {
    var a = e.current();
    if (!Us(a))
      return e.pos = i, !1;
    e.lastIntValue = 16 * e.lastIntValue + Zs(a), e.advance();
  }
  return !0;
};
var jt = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new dt(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, j = X.prototype;
j.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new jt(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
j.getToken = function() {
  return this.next(), new jt(this);
};
typeof Symbol < "u" && (j[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === p.eof,
        value: t
      };
    }
  };
});
j.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(p.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
j.readToken = function(e) {
  return _e(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
j.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 56320)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
};
j.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
    for (var s = void 0, a = t; (s = vs(this.input, a, this.pos)) > -1; )
      ++this.curLine, a = this.lineStart = s;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, i),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
j.skipLineComment = function(e) {
  for (var t = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !Ze(s); )
    s = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    i,
    this.curPosition()
  );
};
j.skipSpace = function() {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
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
            break e;
        }
        break;
      default:
        if (e > 8 && e < 14 || e >= 5760 && hi.test(String.fromCharCode(e)))
          ++this.pos;
        else
          break e;
    }
  }
};
j.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = e, this.value = t, this.updateContext(i);
};
j.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(p.ellipsis)) : (++this.pos, this.finishToken(p.dot));
};
j.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.slash, 1);
};
j.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1, s = e === 42 ? p.star : p.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, s = p.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(p.assign, i + 1) : this.finishOp(s, i);
};
j.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i === 61)
        return this.finishOp(p.assign, 3);
    }
    return this.finishOp(e === 124 ? p.logicalOR : p.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(p.assign, 2) : this.finishOp(e === 124 ? p.bitwiseOR : p.bitwiseAND, 1);
};
j.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.bitwiseXOR, 1);
};
j.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || ue.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(p.incDec, 2) : t === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.plusMin, 1);
};
j.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1;
  return t === e ? (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(p.assign, i + 1) : this.finishOp(p.bitShift, i)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (i = 2), this.finishOp(p.relational, i));
};
j.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(p.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(p.arrow)) : this.finishOp(e === 61 ? p.eq : p.prefix, 1);
};
j.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i < 48 || i > 57)
        return this.finishOp(p.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var s = this.input.charCodeAt(this.pos + 2);
        if (s === 61)
          return this.finishOp(p.assign, 3);
      }
      return this.finishOp(p.coalesce, 2);
    }
  }
  return this.finishOp(p.question, 1);
};
j.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), _e(t, !0) || t === 92))
    return this.finishToken(p.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Ne(t) + "'");
};
j.getTokenFromCode = function(e) {
  switch (e) {
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
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79)
          return this.readRadixNumber(8);
        if (t === 98 || t === 66)
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
      return this.readString(e);
    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(p.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + Ne(e) + "'");
};
j.finishOp = function(e, t) {
  var i = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, i);
};
j.readRegexp = function() {
  for (var e, t, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var s = this.input.charAt(this.pos);
    if (ue.test(s) && this.raise(i, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (s === "[")
        t = !0;
      else if (s === "]" && t)
        t = !1;
      else if (s === "/" && !t)
        break;
      e = s === "\\";
    }
    ++this.pos;
  }
  var a = this.input.slice(i, this.pos);
  ++this.pos;
  var o = this.pos, h = this.readWord1();
  this.containsEsc && this.unexpected(o);
  var d = this.regexpState || (this.regexpState = new Ae(this));
  d.reset(i, a, h), this.validateRegExpFlags(d), this.validateRegExpPattern(d);
  var y = null;
  try {
    y = new RegExp(a, h);
  } catch {
  }
  return this.finishToken(p.regexp, { pattern: a, flags: h, value: y });
};
j.readInt = function(e, t, i) {
  for (var s = this.options.ecmaVersion >= 12 && t === void 0, a = i && this.input.charCodeAt(this.pos) === 48, o = this.pos, h = 0, d = 0, y = 0, u = t ?? 1 / 0; y < u; ++y, ++this.pos) {
    var w = this.input.charCodeAt(this.pos), P = void 0;
    if (s && w === 95) {
      a && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), d === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), y === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), d = w;
      continue;
    }
    if (w >= 97 ? P = w - 97 + 10 : w >= 65 ? P = w - 65 + 10 : w >= 48 && w <= 57 ? P = w - 48 : P = 1 / 0, P >= e)
      break;
    d = w, h = h * e + P;
  }
  return s && d === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === o || t != null && this.pos - o !== t ? null : h;
};
function ha(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Hs(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
j.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var i = this.readInt(e);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = Hs(this.input.slice(t, this.pos)), ++this.pos) : _e(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(p.num, i);
};
j.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  i && this.strict && this.raise(t, "Invalid number");
  var s = this.input.charCodeAt(this.pos);
  if (!i && !e && this.options.ecmaVersion >= 11 && s === 110) {
    var a = Hs(this.input.slice(t, this.pos));
    return ++this.pos, _e(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(p.num, a);
  }
  i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1), s === 46 && !i && (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), (s === 69 || s === 101) && !i && (s = this.input.charCodeAt(++this.pos), (s === 43 || s === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), _e(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var o = ha(this.input.slice(t, this.pos), i);
  return this.finishToken(p.num, o);
};
j.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
j.readString = function(e) {
  for (var t = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var s = this.input.charCodeAt(this.pos);
    if (s === e)
      break;
    s === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), i = this.pos) : s === 8232 || s === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Ze(s) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(i, this.pos++), this.finishToken(p.string, t);
};
var Ws = {};
j.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === Ws)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
j.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Ws;
  this.raise(e, t);
};
j.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === p.template || this.type === p.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(p.dollarBraceL)) : (++this.pos, this.finishToken(p.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(p.template, e));
    if (i === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (Ze(i)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, i) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(i);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
};
j.readInvalidTemplateToken = function() {
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
j.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
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
      return Ne(this.readCodePoint());
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
      ), e) {
        var i = this.pos - 1;
        this.invalidStringToken(
          i,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (t >= 48 && t <= 55) {
        var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], a = parseInt(s, 8);
        return a > 255 && (s = s.slice(0, -1), a = parseInt(s, 8)), this.pos += s.length - 1, t = this.input.charCodeAt(this.pos), (s !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - s.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(a);
      }
      return Ze(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
j.readHexChar = function(e) {
  var t = this.pos, i = this.readInt(16, e);
  return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
};
j.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var a = this.fullCharCodeAtPos();
    if (Ie(a, s))
      this.pos += a <= 65535 ? 1 : 2;
    else if (a === 92) {
      this.containsEsc = !0, e += this.input.slice(i, this.pos);
      var o = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var h = this.readCodePoint();
      (t ? _e : Ie)(h, s) || this.invalidStringToken(o, "Invalid Unicode escape"), e += Ne(h), i = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(i, this.pos);
};
j.readWord = function() {
  var e = this.readWord1(), t = p.name;
  return this.keywords.test(e) && (t = Qe[e]), this.finishToken(t, e);
};
var Ks = "8.15.0";
X.acorn = {
  Parser: X,
  version: Ks,
  defaultOptions: At,
  Position: Ye,
  SourceLocation: dt,
  getLineInfo: pi,
  Node: yt,
  TokenType: z,
  tokTypes: p,
  keywordTypes: Qe,
  TokContext: oe,
  tokContexts: H,
  isIdentifierChar: Ie,
  isIdentifierStart: _e,
  Token: jt,
  isNewLine: Ze,
  lineBreak: ue,
  lineBreakG: ys,
  nonASCIIwhitespace: hi
};
function pa(e, t) {
  return X.parse(e, t);
}
function la(e, t, i) {
  return X.parseExpressionAt(e, t, i);
}
function fa(e, t) {
  return X.tokenizer(e, t);
}
const da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: yt,
  Parser: X,
  Position: Ye,
  SourceLocation: dt,
  TokContext: oe,
  Token: jt,
  TokenType: z,
  defaultOptions: At,
  getLineInfo: pi,
  isIdentifierChar: Ie,
  isIdentifierStart: _e,
  isNewLine: Ze,
  keywordTypes: Qe,
  lineBreak: ue,
  lineBreakG: ys,
  nonASCIIwhitespace: hi,
  parse: pa,
  parseExpressionAt: la,
  tokContexts: H,
  tokTypes: p,
  tokenizer: fa,
  version: Ks
}, Symbol.toStringTag, { value: "Module" }));
function zi(e, t) {
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, typeof (a = (function(o, h) {
      if (typeof o != "object" || o === null) return o;
      var d = o[Symbol.toPrimitive];
      if (d !== void 0) {
        var y = d.call(o, "string");
        if (typeof y != "object") return y;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(o);
    })(s.key)) == "symbol" ? a : String(a), s);
  }
  var a;
}
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
function St(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ri(e, t);
}
function ri(e, t) {
  return ri = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, ri(e, t);
}
function Fi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
  return s;
}
function ji(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i) return (i = i.call(e)).next.bind(i);
  if (Array.isArray(e) || (i = (function(a, o) {
    if (a) {
      if (typeof a == "string") return Fi(a, o);
      var h = Object.prototype.toString.call(a).slice(8, -1);
      return h === "Object" && a.constructor && (h = a.constructor.name), h === "Map" || h === "Set" ? Array.from(a) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Fi(a, o) : void 0;
    }
  })(e)) || t) {
    i && (e = i);
    var s = 0;
    return function() {
      return s >= e.length ? { done: !0 } : { done: !1, value: e[s++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ye = !0;
function ve(e, t) {
  return t === void 0 && (t = {}), new z("name", t);
}
var ma = /* @__PURE__ */ new WeakMap();
function ya(e) {
  var t = ma.get(e.Parser.acorn || e);
  if (!t) {
    var i = { assert: ve(0, { startsExpr: ye }), asserts: ve(0, { startsExpr: ye }), global: ve(0, { startsExpr: ye }), keyof: ve(0, { startsExpr: ye }), readonly: ve(0, { startsExpr: ye }), unique: ve(0, { startsExpr: ye }), abstract: ve(0, { startsExpr: ye }), declare: ve(0, { startsExpr: ye }), enum: ve(0, { startsExpr: ye }), module: ve(0, { startsExpr: ye }), namespace: ve(0, { startsExpr: ye }), interface: ve(0, { startsExpr: ye }), type: ve(0, { startsExpr: ye }) }, s = { at: new z("@"), jsxName: new z("jsxName"), jsxText: new z("jsxText", { beforeExpr: !0 }), jsxTagStart: new z("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new z("jsxTagEnd") }, a = { tc_oTag: new oe("<tag", !1, !1), tc_cTag: new oe("</tag", !1, !1), tc_expr: new oe("<tag>...</tag>", !0, !0) }, o = new RegExp("^(?:" + Object.keys(i).join("|") + ")$");
    s.jsxTagStart.updateContext = function() {
      this.context.push(a.tc_expr), this.context.push(a.tc_oTag), this.exprAllowed = !1;
    }, s.jsxTagEnd.updateContext = function(h) {
      var d = this.context.pop();
      d === a.tc_oTag && h === p.slash || d === a.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === a.tc_expr) : this.exprAllowed = !0;
    }, t = { tokTypes: Lt({}, i, s), tokContexts: Lt({}, a), keywordsRegExp: o, tokenIsLiteralPropertyName: function(h) {
      return [p.name, p.string, p.num].concat(Object.values(Qe), Object.values(i)).includes(h);
    }, tokenIsKeywordOrIdentifier: function(h) {
      return [p.name].concat(Object.values(Qe), Object.values(i)).includes(h);
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
  return t;
}
var ut = 1024, va = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), Bi = new RegExp("(?=(" + va.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), ct = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function xa(e, t) {
  var i = t.key.name, s = e[i], a = "true";
  return t.type !== "MethodDefinition" || t.kind !== "get" && t.kind !== "set" || (a = (t.static ? "s" : "i") + t.kind), s === "iget" && a === "iset" || s === "iset" && a === "iget" || s === "sget" && a === "sset" || s === "sset" && a === "sget" ? (e[i] = "true", !1) : !!s || (e[i] = a, !1);
}
function $i(e, t) {
  var i = e.key;
  return !e.computed && (i.type === "Identifier" && i.name === t || i.type === "Literal" && i.value === t);
}
var I = { AbstractMethodHasImplementation: function(e) {
  return "Method '" + e.methodName + "' cannot have an implementation because it is marked abstract.";
}, AbstractPropertyHasInitializer: function(e) {
  return "Property '" + e.propertyName + "' cannot have an initializer because it is marked abstract.";
}, AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.", AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.", CannotFindName: function(e) {
  return "Cannot find name '" + e.name + "'.";
}, ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.", ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.", ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.", ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.", DeclareAccessor: function(e) {
  return "'declare' is not allowed in " + e.kind + "ters.";
}, DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.", DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.", DuplicateAccessibilityModifier: function() {
  return "Accessibility modifier already seen.";
}, DuplicateModifier: function(e) {
  return "Duplicate modifier: '" + e.modifier + "'.";
}, EmptyHeritageClauseType: function(e) {
  return "'" + e.token + "' list cannot be empty.";
}, EmptyTypeArguments: "Type argument list cannot be empty.", EmptyTypeParameters: "Type parameter list cannot be empty.", ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.", ImportAliasHasImportType: "An import alias can not use 'import type'.", IncompatibleModifiers: function(e) {
  var t = e.modifiers;
  return "'" + t[0] + "' modifier cannot be used with '" + t[1] + "' modifier.";
}, IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.", IndexSignatureHasAccessibility: function(e) {
  return "Index signatures cannot have an accessibility modifier ('" + e.modifier + "').";
}, IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.", IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.", IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.", InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.", InvalidModifierOnTypeMember: function(e) {
  return "'" + e.modifier + "' modifier cannot appear on a type member.";
}, InvalidModifierOnTypeParameter: function(e) {
  return "'" + e.modifier + "' modifier cannot appear on a type parameter.";
}, InvalidModifierOnTypeParameterPositions: function(e) {
  return "'" + e.modifier + "' modifier can only appear on a type parameter of a class, interface or type alias.";
}, InvalidModifiersOrder: function(e) {
  var t = e.orderedModifiers;
  return "'" + t[0] + "' modifier must precede '" + t[1] + "' modifier.";
}, InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.", InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.", MissingInterfaceName: "'interface' declarations must be followed by an identifier.", MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.", NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.", NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.", OptionalTypeBeforeRequired: "A required element cannot follow an optional element.", OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.", PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.", PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.", PrivateElementHasAccessibility: function(e) {
  return "Private elements cannot have an accessibility modifier ('" + e.modifier + "').";
}, PrivateMethodsHasAccessibility: function(e) {
  return "Private methods cannot have an accessibility modifier ('" + e.modifier + "').";
}, ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.", ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.", ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.", SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.", SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.", SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.", SingleTypeParameterWithoutTrailingComma: function(e) {
  var t = e.typeParameterName;
  return "Single type parameter " + t + " should have a trailing comma. Example usage: <" + t + ",>.";
}, StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.", TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.", TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.", TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.", UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.", UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.", GenericsEndWithComma: "Trailing comma is not allowed at the end of generics.", UnexpectedTypeAnnotation: "Did not expect a type annotation here.", UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.", UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.", UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.", UnsupportedSignatureParameterKind: function(e) {
  return "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got " + e.type + ".";
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, ga = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, ba = /^[\da-fA-F]+$/, ka = /^\d+$/;
function pt(e) {
  return e && (e.type === "JSXIdentifier" ? e.name : e.type === "JSXNamespacedName" ? e.namespace.name + ":" + e.name.name : e.type === "JSXMemberExpression" ? pt(e.object) + "." + pt(e.property) : void 0);
}
var Jt = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function Ui(e) {
  if (!e) throw new Error("Assert fail");
}
function Sa(e) {
  return e === "accessor";
}
function wa(e) {
  return e === "in" || e === "out";
}
function Xt(e, t) {
  return 2 | (e ? 4 : 0) | (t ? 8 : 0);
}
function Ta(e) {
  if (e.type !== "MemberExpression") return !1;
  var t = e.property;
  return (!e.computed || !(t.type !== "TemplateLiteral" || t.expressions.length > 0)) && Gs(e.object);
}
function Gs(e) {
  return e.type === "Identifier" || e.type === "MemberExpression" && !e.computed && Gs(e.object);
}
function Zi(e) {
  return e === "private" || e === "public" || e === "protected";
}
function _a(e) {
  var t = {}, i = t.dts, s = i !== void 0 && i, a = t.allowSatisfies, o = a !== void 0 && a;
  return function(h) {
    var d = h.acorn || da, y = ya(d), u = d.tokTypes, w = d.keywordTypes, P = d.isIdentifierStart, M = d.lineBreak, U = d.isNewLine, he = d.tokContexts, Ee = d.isIdentifierChar, R = y.tokTypes, re = y.tokContexts, de = y.keywordsRegExp, ge = y.tokenIsLiteralPropertyName, Ue = y.tokenIsTemplate, br = y.tokenIsTSDeclarationStart, q = y.tokenIsIdentifier, gt = y.tokenIsKeywordOrIdentifier, kr = y.tokenIsTSTypeOperator;
    function Sr(_, pe, ne) {
      ne === void 0 && (ne = _.length);
      for (var te = pe; te < ne; te++) {
        var $ = _.charCodeAt(te);
        if (U($)) return te < ne - 1 && $ === 13 && _.charCodeAt(te + 1) === 10 ? te + 2 : te + 1;
      }
      return -1;
    }
    h = (function(_, pe, ne) {
      var te = ne.tokTypes, $ = pe.tokTypes;
      return (function(f) {
        function r() {
          return f.apply(this, arguments) || this;
        }
        St(r, f);
        var n = r.prototype;
        return n.takeDecorators = function(c) {
          var l = this.decoratorStack[this.decoratorStack.length - 1];
          l.length && (c.decorators = l, this.resetStartLocationFromNode(c, l[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, n.parseDecorators = function(c) {
          for (var l = this.decoratorStack[this.decoratorStack.length - 1]; this.match($.at); ) {
            var m = this.parseDecorator();
            l.push(m);
          }
          this.match(te._export) ? c || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, n.parseDecorator = function() {
          var c = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var l, m = this.start, v = this.startLoc;
          if (this.match(te.parenL)) {
            var x = this.start, b = this.startLoc;
            if (this.next(), l = this.parseExpression(), this.expect(te.parenR), this.options.preserveParens) {
              var k = this.startNodeAt(x, b);
              k.expression = l, l = this.finishNode(k, "ParenthesizedExpression");
            }
          } else for (l = this.parseIdent(!1); this.eat(te.dot); ) {
            var T = this.startNodeAt(m, v);
            T.object = l, T.property = this.parseIdent(!0), T.computed = !1, l = this.finishNode(T, "MemberExpression");
          }
          return c.expression = this.parseMaybeDecoratorArguments(l), this.decoratorStack.pop(), this.finishNode(c, "Decorator");
        }, n.parseMaybeDecoratorArguments = function(c) {
          if (this.eat(te.parenL)) {
            var l = this.startNodeAtNode(c);
            return l.callee = c, l.arguments = this.parseExprList(te.parenR, !1), this.finishNode(l, "CallExpression");
          }
          return c;
        }, r;
      })(_);
    })(h, y, d), h = (function(_, pe, ne, te) {
      var $ = _.tokTypes, f = pe.tokTypes, r = _.isNewLine, n = _.isIdentifierChar, c = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(l) {
        function m() {
          return l.apply(this, arguments) || this;
        }
        St(m, l);
        var v = m.prototype;
        return v.jsx_readToken = function() {
          for (var x = "", b = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
            var k = this.input.charCodeAt(this.pos);
            switch (k) {
              case 60:
              case 123:
                return this.pos === this.start ? k === 60 && this.exprAllowed ? (++this.pos, this.finishToken(f.jsxTagStart)) : this.getTokenFromCode(k) : (x += this.input.slice(b, this.pos), this.finishToken(f.jsxText, x));
              case 38:
                x += this.input.slice(b, this.pos), x += this.jsx_readEntity(), b = this.pos;
                break;
              case 62:
              case 125:
                this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (k === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
              default:
                r(k) ? (x += this.input.slice(b, this.pos), x += this.jsx_readNewLine(!0), b = this.pos) : ++this.pos;
            }
          }
        }, v.jsx_readNewLine = function(x) {
          var b, k = this.input.charCodeAt(this.pos);
          return ++this.pos, k === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, b = x ? `
` : `\r
`) : b = String.fromCharCode(k), this.options.locations && (++this.curLine, this.lineStart = this.pos), b;
        }, v.jsx_readString = function(x) {
          for (var b = "", k = ++this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var T = this.input.charCodeAt(this.pos);
            if (T === x) break;
            T === 38 ? (b += this.input.slice(k, this.pos), b += this.jsx_readEntity(), k = this.pos) : r(T) ? (b += this.input.slice(k, this.pos), b += this.jsx_readNewLine(!1), k = this.pos) : ++this.pos;
          }
          return b += this.input.slice(k, this.pos++), this.finishToken($.string, b);
        }, v.jsx_readEntity = function() {
          var x, b = "", k = 0, T = this.input[this.pos];
          T !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
          for (var N = ++this.pos; this.pos < this.input.length && k++ < 10; ) {
            if ((T = this.input[this.pos++]) === ";") {
              b[0] === "#" ? b[1] === "x" ? (b = b.substr(2), ba.test(b) && (x = String.fromCharCode(parseInt(b, 16)))) : (b = b.substr(1), ka.test(b) && (x = String.fromCharCode(parseInt(b, 10)))) : x = ga[b];
              break;
            }
            b += T;
          }
          return x || (this.pos = N, "&");
        }, v.jsx_readWord = function() {
          var x, b = this.pos;
          do
            x = this.input.charCodeAt(++this.pos);
          while (n(x) || x === 45);
          return this.finishToken(f.jsxName, this.input.slice(b, this.pos));
        }, v.jsx_parseIdentifier = function() {
          var x = this.startNode();
          return this.type === f.jsxName ? x.name = this.value : this.type.keyword ? x.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(x, "JSXIdentifier");
        }, v.jsx_parseNamespacedName = function() {
          var x = this.start, b = this.startLoc, k = this.jsx_parseIdentifier();
          if (!c.allowNamespaces || !this.eat($.colon)) return k;
          var T = this.startNodeAt(x, b);
          return T.namespace = k, T.name = this.jsx_parseIdentifier(), this.finishNode(T, "JSXNamespacedName");
        }, v.jsx_parseElementName = function() {
          if (this.type === f.jsxTagEnd) return "";
          var x = this.start, b = this.startLoc, k = this.jsx_parseNamespacedName();
          for (this.type !== $.dot || k.type !== "JSXNamespacedName" || c.allowNamespacedObjects || this.unexpected(); this.eat($.dot); ) {
            var T = this.startNodeAt(x, b);
            T.object = k, T.property = this.jsx_parseIdentifier(), k = this.finishNode(T, "JSXMemberExpression");
          }
          return k;
        }, v.jsx_parseAttributeValue = function() {
          switch (this.type) {
            case $.braceL:
              var x = this.jsx_parseExpressionContainer();
              return x.expression.type === "JSXEmptyExpression" && this.raise(x.start, "JSX attributes must only be assigned a non-empty expression"), x;
            case f.jsxTagStart:
            case $.string:
              return this.parseExprAtom();
            default:
              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
          }
        }, v.jsx_parseEmptyExpression = function() {
          var x = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(x, "JSXEmptyExpression", this.start, this.startLoc);
        }, v.jsx_parseExpressionContainer = function() {
          var x = this.startNode();
          return this.next(), x.expression = this.type === $.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect($.braceR), this.finishNode(x, "JSXExpressionContainer");
        }, v.jsx_parseAttribute = function() {
          var x = this.startNode();
          return this.eat($.braceL) ? (this.expect($.ellipsis), x.argument = this.parseMaybeAssign(), this.expect($.braceR), this.finishNode(x, "JSXSpreadAttribute")) : (x.name = this.jsx_parseNamespacedName(), x.value = this.eat($.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(x, "JSXAttribute"));
        }, v.jsx_parseOpeningElementAt = function(x, b) {
          var k = this.startNodeAt(x, b);
          k.attributes = [];
          var T = this.jsx_parseElementName();
          for (T && (k.name = T); this.type !== $.slash && this.type !== f.jsxTagEnd; ) k.attributes.push(this.jsx_parseAttribute());
          return k.selfClosing = this.eat($.slash), this.expect(f.jsxTagEnd), this.finishNode(k, T ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, v.jsx_parseClosingElementAt = function(x, b) {
          var k = this.startNodeAt(x, b), T = this.jsx_parseElementName();
          return T && (k.name = T), this.expect(f.jsxTagEnd), this.finishNode(k, T ? "JSXClosingElement" : "JSXClosingFragment");
        }, v.jsx_parseElementAt = function(x, b) {
          var k = this.startNodeAt(x, b), T = [], N = this.jsx_parseOpeningElementAt(x, b), V = null;
          if (!N.selfClosing) {
            e: for (; ; ) switch (this.type) {
              case f.jsxTagStart:
                if (x = this.start, b = this.startLoc, this.next(), this.eat($.slash)) {
                  V = this.jsx_parseClosingElementAt(x, b);
                  break e;
                }
                T.push(this.jsx_parseElementAt(x, b));
                break;
              case f.jsxText:
                T.push(this.parseExprAtom());
                break;
              case $.braceL:
                T.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            pt(V.name) !== pt(N.name) && this.raise(V.start, "Expected corresponding JSX closing tag for <" + pt(N.name) + ">");
          }
          var C = N.name ? "Element" : "Fragment";
          return k["opening" + C] = N, k["closing" + C] = V, k.children = T, this.type === $.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(k, "JSX" + C);
        }, v.jsx_parseText = function() {
          var x = this.parseLiteral(this.value);
          return x.type = "JSXText", x;
        }, v.jsx_parseElement = function() {
          var x = this.start, b = this.startLoc;
          return this.next(), this.jsx_parseElementAt(x, b);
        }, m;
      })(ne);
    })(d, y, h), h = (function(_, pe, ne) {
      var te = pe.tokTypes, $ = ne.tokTypes;
      return (function(f) {
        function r() {
          return f.apply(this, arguments) || this;
        }
        St(r, f);
        var n = r.prototype;
        return n.parseMaybeImportAttributes = function(c) {
          if (this.type === $._with || this.type === te.assert) {
            this.next();
            var l = this.parseImportAttributes();
            l && (c.attributes = l);
          }
        }, n.parseImportAttributes = function() {
          this.expect($.braceL);
          var c = this.parseWithEntries();
          return this.expect($.braceR), c;
        }, n.parseWithEntries = function() {
          var c = [], l = /* @__PURE__ */ new Set();
          do {
            if (this.type === $.braceR) break;
            var m, v = this.startNode();
            m = this.type === $.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), v.key = m, l.has(v.key.name) && this.raise(this.pos, "Duplicated key in attributes"), l.add(v.key.name), this.type !== $.string && this.raise(this.pos, "Only string is supported as an attribute value"), v.value = this.parseLiteral(this.value), c.push(this.finishNode(v, "ImportAttribute"));
          } while (this.eat($.comma));
          return c;
        }, r;
      })(_);
    })(h, y, d);
    var wr = /* @__PURE__ */ (function(_) {
      function pe(r, n, c) {
        var l;
        return (l = _.call(this, r, n, c) || this).preValue = null, l.preToken = null, l.isLookahead = !1, l.isAmbientContext = !1, l.inAbstractClass = !1, l.inType = !1, l.inDisallowConditionalTypesContext = !1, l.maybeInArrowParameters = !1, l.shouldParseArrowReturnType = void 0, l.shouldParseAsyncArrowReturnType = void 0, l.decoratorStack = [[]], l.importsStack = [[]], l.importOrExportOuterKind = void 0, l.tsParseConstModifier = l.tsParseModifiers.bind((function(m) {
          if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return m;
        })(l), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: I.InvalidModifierOnTypeParameterPositions }), l;
      }
      St(pe, _);
      var ne, te, $, f = pe.prototype;
      return f.getTokenFromCodeInType = function(r) {
        return r === 62 || r === 60 ? this.finishOp(u.relational, 1) : _.prototype.getTokenFromCode.call(this, r);
      }, f.readToken = function(r) {
        if (!this.inType) {
          var n = this.curContext();
          if (n === re.tc_expr) return this.jsx_readToken();
          if (n === re.tc_oTag || n === re.tc_cTag) {
            if (P(r)) return this.jsx_readWord();
            if (r == 62) return ++this.pos, this.finishToken(R.jsxTagEnd);
            if ((r === 34 || r === 39) && n == re.tc_oTag) return this.jsx_readString(r);
          }
          if (r === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(R.jsxTagStart);
        }
        return _.prototype.readToken.call(this, r);
      }, f.getTokenFromCode = function(r) {
        return this.inType ? this.getTokenFromCodeInType(r) : r === 64 ? (++this.pos, this.finishToken(R.at)) : _.prototype.getTokenFromCode.call(this, r);
      }, f.isAbstractClass = function() {
        return this.ts_isContextual(R.abstract) && this.lookahead().type === u._class;
      }, f.finishNode = function(r, n) {
        return r.type !== "" && r.end !== 0 ? r : _.prototype.finishNode.call(this, r, n);
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
        this.type === u.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, f.reScan_lt = function() {
        var r = this.type;
        return r === u.bitShift ? (this.pos -= 2, this.finishOp(u.relational, 1), u.relational) : r;
      }, f.resetEndLocation = function(r, n) {
        n === void 0 && (n = this.lastTokEndLoc), r.end = n.column, r.loc.end = n, this.options.ranges && (r.range[1] = n.column);
      }, f.startNodeAtNode = function(r) {
        return _.prototype.startNodeAt.call(this, r.start, r.loc.start);
      }, f.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, f.tsHasSomeModifiers = function(r, n) {
        return n.some(function(c) {
          return Zi(c) ? r.accessibility === c : !!r[c];
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
        return q(this.type);
      }, f.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(u.colon) ? this.tsParseTypeOrTypePredicateAnnotation(u.colon) : void 0;
      }, f.tsTryParseGenericAsyncArrowFunction = function(r, n, c) {
        var l = this;
        if (this.tsMatchLeftRelational()) {
          var m = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var v = this.tsTryParseAndCatch(function() {
            var x = l.startNodeAt(r, n);
            return x.typeParameters = l.tsParseTypeParameters(), _.prototype.parseFunctionParams.call(l, x), x.returnType = l.tsTryParseTypeOrTypePredicateAnnotation(), l.expect(u.arrow), x;
          });
          if (this.maybeInArrowParameters = m, v) return _.prototype.parseArrowExpression.call(this, v, null, !0, c);
        }
      }, f.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === u.relational) return this.tsParseTypeArguments();
      }, f.tsInNoContext = function(r) {
        var n = this.context;
        this.context = [n[0]];
        try {
          return r();
        } finally {
          this.context = n;
        }
      }, f.tsTryParseTypeAnnotation = function() {
        return this.match(u.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, f.isUnparsedContextual = function(r, n) {
        var c = r + n.length;
        if (this.input.slice(r, c) === n) {
          var l = this.input.charCodeAt(c);
          return !(Ee(l) || (64512 & l) == 55296);
        }
        return !1;
      }, f.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(R.abstract) && this.lookahead().type === u._new;
      }, f.nextTokenStartSince = function(r) {
        return Jt.lastIndex = r, Jt.test(this.input) ? Jt.lastIndex : r;
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
        var r = this.readWord1(), n = u.name;
        return this.keywords.test(r) ? n = w[r] : new RegExp(de).test(r) && (n = R[r]), this.finishToken(n, r);
      }, f.skipBlockComment = function() {
        var r;
        this.isLookahead || (r = this.options.onComment && this.curPosition());
        var n = this.pos, c = this.input.indexOf("*/", this.pos += 2);
        if (c === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = c + 2, this.options.locations) for (var l, m = n; (l = Sr(this.input, m, this.pos)) > -1; ) ++this.curLine, m = this.lineStart = l;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(n + 2, c), n, this.pos, r, this.curPosition());
      }, f.skipLineComment = function(r) {
        var n, c = this.pos;
        this.isLookahead || (n = this.options.onComment && this.curPosition());
        for (var l = this.input.charCodeAt(this.pos += r); this.pos < this.input.length && !U(l); ) l = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(c + r, this.pos), c, this.pos, n, this.curPosition());
      }, f.finishToken = function(r, n) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var c = this.type;
        this.type = r, this.value = n, this.isLookahead || this.updateContext(c);
      }, f.resetStartLocation = function(r, n, c) {
        r.start = n, r.loc.start = c, this.options.ranges && (r.range[0] = n);
      }, f.isLineTerminator = function() {
        return this.eat(u.semi) || _.prototype.canInsertSemicolon.call(this);
      }, f.hasFollowingLineBreak = function() {
        return Bi.lastIndex = this.end, Bi.test(this.input);
      }, f.addExtra = function(r, n, c, l) {
        if (l === void 0 && (l = !0), r) {
          var m = r.extra = r.extra || {};
          l ? m[n] = c : Object.defineProperty(m, n, { enumerable: l, value: c });
        }
      }, f.isLiteralPropertyName = function() {
        return ge(this.type);
      }, f.hasPrecedingLineBreak = function() {
        return M.test(this.input.slice(this.lastTokEndLoc.index, this.start));
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
        return n.type === u.name && n.value === r && !n.containsEsc;
      }, f.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(u.plusMin) ? this.ts_isContextual(R.readonly) : (this.ts_isContextual(R.readonly) && this.next(), !!this.match(u.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(u._in))));
      }, f.tsInDisallowConditionalTypesContext = function(r) {
        var n = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return r();
        } finally {
          this.inDisallowConditionalTypesContext = n;
        }
      }, f.tsTryParseType = function() {
        return this.tsEatThenParseType(u.colon);
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
        if (de.test(r)) {
          if (this.ts_isContextualWithState(c, R[r])) {
            for (var l = 0; l < n; l++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(r, c)) return !1;
        for (var m = 0; m < n; m++) this.next();
        return !0;
      }, f.canHaveLeadingDecorator = function() {
        return this.match(u._class);
      }, f.eatContextual = function(r) {
        return de.test(r) ? !!this.ts_isContextual(R[r]) && (this.next(), !0) : _.prototype.eatContextual.call(this, r);
      }, f.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, f.tsParseExternalModuleReference = function() {
        var r = this.startNode();
        return this.expectContextual("require"), this.expect(u.parenL), this.match(u.string) || this.unexpected(), r.expression = this.parseExprAtom(), this.expect(u.parenR), this.finishNode(r, "TSExternalModuleReference");
      }, f.tsParseEntityName = function(r) {
        r === void 0 && (r = !0);
        for (var n = this.parseIdent(r); this.eat(u.dot); ) {
          var c = this.startNodeAtNode(n);
          c.left = n, c.right = this.parseIdent(r), n = this.finishNode(c, "TSQualifiedName");
        }
        return n;
      }, f.tsParseEnumMember = function() {
        var r = this.startNode();
        return r.id = this.match(u.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(u.eq) && (r.initializer = this.parseMaybeAssign()), this.finishNode(r, "TSEnumMember");
      }, f.tsParseEnumDeclaration = function(r, n) {
        return n === void 0 && (n = {}), n.const && (r.const = !0), n.declare && (r.declare = !0), this.expectContextual("enum"), r.id = this.parseIdent(), this.checkLValSimple(r.id), this.expect(u.braceL), r.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(u.braceR), this.finishNode(r, "TSEnumDeclaration");
      }, f.tsParseModuleBlock = function() {
        var r = this.startNode();
        for (_.prototype.enterScope.call(this, 512), this.expect(u.braceL), r.body = []; this.type !== u.braceR; ) {
          var n = this.parseStatement(null, !0);
          r.body.push(n);
        }
        return this.next(), _.prototype.exitScope.call(this), this.finishNode(r, "TSModuleBlock");
      }, f.tsParseAmbientExternalModuleDeclaration = function(r) {
        return this.ts_isContextual(R.global) ? (r.global = !0, r.id = this.parseIdent()) : this.match(u.string) ? r.id = this.parseLiteral(this.value) : this.unexpected(), this.match(u.braceL) ? (_.prototype.enterScope.call(this, ut), r.body = this.tsParseModuleBlock(), _.prototype.exitScope.call(this)) : _.prototype.semicolon.call(this), this.finishNode(r, "TSModuleDeclaration");
      }, f.tsTryParseDeclare = function(r) {
        var n = this;
        if (!this.isLineTerminator()) {
          var c, l = this.type;
          return this.isContextual("let") && (l = u._var, c = "let"), this.tsInAmbientContext(function() {
            if (l === u._function) return r.declare = !0, n.parseFunctionStatement(r, !1, !0);
            if (l === u._class) return r.declare = !0, n.parseClass(r, !0);
            if (l === R.enum) return n.tsParseEnumDeclaration(r, { declare: !0 });
            if (l === R.global) return n.tsParseAmbientExternalModuleDeclaration(r);
            if (l === u._const || l === u._var) return n.match(u._const) && n.isLookaheadContextual("enum") ? (n.expect(u._const), n.tsParseEnumDeclaration(r, { const: !0, declare: !0 })) : (r.declare = !0, n.parseVarStatement(r, c || n.value, !0));
            if (l === R.interface) {
              var m = n.tsParseInterfaceDeclaration(r, { declare: !0 });
              if (m) return m;
            }
            return q(l) ? n.tsParseDeclaration(r, n.value, !0) : void 0;
          });
        }
      }, f.tsIsListTerminator = function(r) {
        switch (r) {
          case "EnumMembers":
          case "TypeMembers":
            return this.match(u.braceR);
          case "HeritageClauseElement":
            return this.match(u.braceL);
          case "TupleElementTypes":
            return this.match(u.bracketR);
          case "TypeParametersOrArguments":
            return this.tsMatchRightRelational();
        }
      }, f.tsParseDelimitedListWorker = function(r, n, c, l) {
        for (var m = [], v = -1; !this.tsIsListTerminator(r); ) {
          v = -1;
          var x = n();
          if (x == null) return;
          if (m.push(x), !this.eat(u.comma)) {
            if (this.tsIsListTerminator(r)) break;
            return void (c && this.expect(u.comma));
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
        l || this.expect(c ? u.bracketL : u.relational);
        var v = this.tsParseDelimitedList(r, n, m);
        return this.expect(c ? u.bracketR : u.relational), v;
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
        if (q(this.type) || this.match(u._this)) return this.next(), !0;
        if (this.match(u.braceL)) try {
          return this.parseObj(!0), !0;
        } catch {
          return !1;
        }
        if (this.match(u.bracketL)) {
          this.next();
          try {
            return this.parseBindingList(u.bracketR, !0, !0), !0;
          } catch {
            return !1;
          }
        }
        return !1;
      }, f.tsIsUnambiguouslyStartOfFunctionType = function() {
        return this.next(), !!(this.match(u.parenR) || this.match(u.ellipsis) || this.tsSkipParameterStart() && (this.match(u.colon) || this.match(u.comma) || this.match(u.question) || this.match(u.eq) || this.match(u.parenR) && (this.next(), this.match(u.arrow))));
      }, f.tsIsStartOfFunctionType = function() {
        return !!this.tsMatchLeftRelational() || this.match(u.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
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
        return _.prototype.parseBindingList.call(this, u.parenR, !0, !0).map(function(n) {
          return n.type !== "Identifier" && n.type !== "RestElement" && n.type !== "ObjectPattern" && n.type !== "ArrayPattern" && r.raise(n.start, I.UnsupportedSignatureParameterKind(n.type)), n;
        });
      }, f.tsParseTypePredicateAsserts = function() {
        if (this.type !== R.asserts) return !1;
        var r = this.containsEsc;
        return this.next(), !(!q(this.type) && !this.match(u._this) || (r && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, f.tsParseThisTypeNode = function() {
        var r = this.startNode();
        return this.next(), this.finishNode(r, "TSThisType");
      }, f.tsParseTypeAnnotation = function(r, n) {
        var c = this;
        return r === void 0 && (r = !0), n === void 0 && (n = this.startNode()), this.tsInType(function() {
          r && c.expect(u.colon), n.typeAnnotation = c.tsParseType();
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
          if (m && n.match(u._this)) {
            var v = n.tsParseThisTypeOrThisTypePredicate();
            return v.type === "TSThisType" ? (l.parameterName = v, l.asserts = !0, l.typeAnnotation = null, v = n.finishNode(l, "TSTypePredicate")) : (n.resetStartLocationFromNode(v, l), v.asserts = !0), c.typeAnnotation = v, n.finishNode(c, "TSTypeAnnotation");
          }
          var x = n.tsIsIdentifier() && n.tsTryParse(n.tsParseTypePredicatePrefix.bind(n));
          if (!x) return m ? (l.parameterName = n.parseIdent(), l.asserts = m, l.typeAnnotation = null, c.typeAnnotation = n.finishNode(l, "TSTypePredicate"), n.finishNode(c, "TSTypeAnnotation")) : n.tsParseTypeAnnotation(!1, c);
          var b = n.tsParseTypeAnnotation(!1);
          return l.parameterName = x, l.typeAnnotation = b, l.asserts = m, c.typeAnnotation = n.finishNode(l, "TSTypePredicate"), n.finishNode(c, "TSTypeAnnotation");
        });
      }, f.tsFillSignature = function(r, n) {
        var c = r === u.arrow;
        n.typeParameters = this.tsTryParseTypeParameters(), this.expect(u.parenL), n.parameters = this.tsParseBindingListForSignature(), (c || this.match(r)) && (n.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(r));
      }, f.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== u._const) return null;
        this.next();
        var r = this.tsParseTypeReference();
        return r.typeParameters && this.raise(r.typeName.start, I.CannotFindName({ name: "const" })), r;
      }, f.tsParseFunctionOrConstructorType = function(r, n) {
        var c = this, l = this.startNode();
        return r === "TSConstructorType" && (l.abstract = !!n, n && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return c.tsFillSignature(u.arrow, l);
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
        if (this.eat(u._extends)) {
          var n = this.tsInDisallowConditionalTypesContext(function() {
            return r.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(u.question)) return n;
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
            case u.num:
            case u.string:
            case u._true:
            case u._false:
              return r.parseExprAtom();
            default:
              r.unexpected();
          }
        })(), this.finishNode(n, "TSLiteralType");
      }, f.tsParseImportType = function() {
        var r = this.startNode();
        return this.expect(u._import), this.expect(u.parenL), this.match(u.string) || this.raise(this.start, I.UnsupportedImportTypeArgument), r.argument = this.parseExprAtom(), this.expect(u.parenR), this.eat(u.dot) && (r.qualifier = this.tsParseEntityName()), this.tsMatchLeftRelational() && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSImportType");
      }, f.tsParseTypeQuery = function() {
        var r = this.startNode();
        return this.expect(u._typeof), r.exprName = this.match(u._import) ? this.tsParseImportType() : this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSTypeQuery");
      }, f.tsParseMappedTypeParameter = function() {
        var r = this.startNode();
        return r.name = this.tsParseTypeParameterName(), r.constraint = this.tsExpectThenParseType(u._in), this.finishNode(r, "TSTypeParameter");
      }, f.tsParseMappedType = function() {
        var r = this.startNode();
        return this.expect(u.braceL), this.match(u.plusMin) ? (r.readonly = this.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (r.readonly = !0), this.expect(u.bracketL), r.typeParameter = this.tsParseMappedTypeParameter(), r.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(u.bracketR), this.match(u.plusMin) ? (r.optional = this.value, this.next(), this.expect(u.question)) : this.eat(u.question) && (r.optional = !0), r.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(u.braceR), this.finishNode(r, "TSMappedType");
      }, f.tsParseTypeLiteral = function() {
        var r = this.startNode();
        return r.members = this.tsParseObjectTypeMembers(), this.finishNode(r, "TSTypeLiteral");
      }, f.tsParseTupleElementType = function() {
        var r = this.startLoc, n = this.start, c = this.eat(u.ellipsis), l = this.tsParseType(), m = this.eat(u.question);
        if (this.eat(u.colon)) {
          var v = this.startNodeAtNode(l);
          v.optional = m, l.type !== "TSTypeReference" || l.typeParameters || l.typeName.type !== "Identifier" ? (this.raise(l.start, I.InvalidTupleMemberLabel), v.label = l) : v.label = l.typeName, v.elementType = this.tsParseType(), l = this.finishNode(v, "TSNamedTupleMember");
        } else if (m) {
          var x = this.startNodeAtNode(l);
          x.typeAnnotation = l, l = this.finishNode(x, "TSOptionalType");
        }
        if (c) {
          var b = this.startNodeAt(n, r);
          b.typeAnnotation = l, l = this.finishNode(b, "TSRestType");
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
          var b = x === "TSNamedTupleMember";
          l != null || (l = b), l !== b && r.raise(m.start, I.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(n, "TSTupleType");
      }, f.tsParseTemplateLiteralType = function() {
        var r = this.startNode();
        return r.literal = this.parseTemplate({ isTagged: !1 }), this.finishNode(r, "TSLiteralType");
      }, f.tsParseTypeReference = function() {
        var r = this.startNode();
        return r.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSTypeReference");
      }, f.tsMatchLeftRelational = function() {
        return this.match(u.relational) && this.value === "<";
      }, f.tsMatchRightRelational = function() {
        return this.match(u.relational) && this.value === ">";
      }, f.tsParseParenthesizedType = function() {
        var r = this.startNode();
        return this.expect(u.parenL), r.typeAnnotation = this.tsParseType(), this.expect(u.parenR), this.finishNode(r, "TSParenthesizedType");
      }, f.tsParseNonArrayType = function() {
        switch (this.type) {
          case u.string:
          case u.num:
          case u._true:
          case u._false:
            return this.tsParseLiteralTypeNode();
          case u.plusMin:
            if (this.value === "-") {
              var r = this.startNode();
              return this.lookahead().type !== u.num && this.unexpected(), r.literal = this.parseMaybeUnary(), this.finishNode(r, "TSLiteralType");
            }
            break;
          case u._this:
            return this.tsParseThisTypeOrThisTypePredicate();
          case u._typeof:
            return this.tsParseTypeQuery();
          case u._import:
            return this.tsParseImportType();
          case u.braceL:
            return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
          case u.bracketL:
            return this.tsParseTupleType();
          case u.parenL:
            return this.tsParseParenthesizedType();
          case u.backQuote:
          case u.dollarBraceL:
            return this.tsParseTemplateLiteralType();
          default:
            var n = this.type;
            if (q(n) || n === u._void || n === u._null) {
              var c = n === u._void ? "TSVoidKeyword" : n === u._null ? "TSNullKeyword" : (function(m) {
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
        for (var r = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(u.bracketL); ) if (this.match(u.bracketR)) {
          var n = this.startNodeAtNode(r);
          n.elementType = r, this.expect(u.bracketR), r = this.finishNode(n, "TSArrayType");
        } else {
          var c = this.startNodeAtNode(r);
          c.objectType = r, c.indexType = this.tsParseType(), this.expect(u.bracketR), r = this.finishNode(c, "TSIndexedAccessType");
        }
        return r;
      }, f.tsParseTypeOperatorOrHigher = function() {
        var r = this;
        return kr(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
          return r.tsParseArrayTypeOrHigher();
        });
      }, f.tsParseIntersectionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), u.bitwiseAND);
      }, f.tsParseUnionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), u.bitwiseOR);
      }, f.tsParseNonConditionalType = function() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(u._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
      }, f.tsParseType = function() {
        var r = this;
        Ui(this.inType);
        var n = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(u._extends)) return n;
        var c = this.startNodeAtNode(n);
        return c.checkType = n, c.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return r.tsParseNonConditionalType();
        }), this.expect(u.question), c.trueType = this.tsInAllowConditionalTypesContext(function() {
          return r.tsParseType();
        }), this.expect(u.colon), c.falseType = this.tsInAllowConditionalTypesContext(function() {
          return r.tsParseType();
        }), this.finishNode(c, "TSConditionalType");
      }, f.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!q(this.type) && (this.next(), this.match(u.colon));
      }, f.tsInType = function(r) {
        var n = this.inType;
        this.inType = !0;
        try {
          return r();
        } finally {
          this.inType = n;
        }
      }, f.tsTryParseIndexSignature = function(r) {
        if (this.match(u.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(u.bracketL);
          var n = this.parseIdent();
          n.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(n), this.expect(u.bracketR), r.parameters = [n];
          var c = this.tsTryParseTypeAnnotation();
          return c && (r.typeAnnotation = c), this.tsParseTypeMemberSemicolon(), this.finishNode(r, "TSIndexSignature");
        }
      }, f.tsParseNoneModifiers = function(r) {
        this.tsParseModifiers({ modified: r, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: I.InvalidModifierOnTypeParameterPositions });
      }, f.tsParseTypeParameter = function(r) {
        r === void 0 && (r = this.tsParseNoneModifiers.bind(this));
        var n = this.startNode();
        return r(n), n.name = this.tsParseTypeParameterName(), n.constraint = this.tsEatThenParseType(u._extends), n.default = this.tsEatThenParseType(u.eq), this.finishNode(n, "TSTypeParameter");
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
        return (this.match(u.bracketL) || this.match(u.braceL) || this.match(u.star) || this.match(u.ellipsis) || this.match(u.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, f.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, f.tsParseModifier = function(r, n) {
        if (q(this.type) || this.type === u._in) {
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
        for (var n = this, c = r.modified, l = r.allowedModifiers, m = r.disallowedModifiers, v = r.stopOnStartOfClassStaticBlock, x = r.errorTemplate, b = x === void 0 ? I.InvalidModifierOnTypeMember : x, k = {}, T = function(G, W, J, ie) {
          W === J && c[ie] && n.raise(G.column, I.InvalidModifiersOrder({ orderedModifiers: [J, ie] }));
        }, N = function(G, W, J, ie) {
          (c[J] && W === ie || c[ie] && W === J) && n.raise(G.column, I.IncompatibleModifiers({ modifiers: [J, ie] }));
        }; ; ) {
          var V = this.startLoc, C = this.tsParseModifier(l.concat(m ?? []), v);
          if (!C) break;
          Zi(C) ? c.accessibility ? this.raise(this.start, I.DuplicateAccessibilityModifier()) : (T(V, C, C, "override"), T(V, C, C, "static"), T(V, C, C, "readonly"), T(V, C, C, "accessor"), k.accessibility = C, c.accessibility = C) : wa(C) ? c[C] ? this.raise(this.start, I.DuplicateModifier({ modifier: C })) : (T(V, C, "in", "out"), k[C] = C, c[C] = !0) : Sa(C) ? c[C] ? this.raise(this.start, I.DuplicateModifier({ modifier: C })) : (N(V, C, "accessor", "readonly"), N(V, C, "accessor", "static"), N(V, C, "accessor", "override"), k[C] = C, c[C] = !0) : Object.hasOwnProperty.call(c, C) ? this.raise(this.start, I.DuplicateModifier({ modifier: C })) : (T(V, C, "static", "readonly"), T(V, C, "static", "override"), T(V, C, "override", "readonly"), T(V, C, "abstract", "override"), N(V, C, "declare", "override"), N(V, C, "static", "abstract"), k[C] = C, c[C] = !0), m != null && m.includes(C) && this.raise(this.start, b);
        }
        return k;
      }, f.tsParseInOutModifiers = function(r) {
        this.tsParseModifiers({ modified: r, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: I.InvalidModifierOnTypeParameter });
      }, f.tsParseTypeArguments = function() {
        var r = this, n = this.startNode();
        return n.params = this.tsInType(function() {
          return r.tsInNoContext(function() {
            return r.expect(u.relational), r.tsParseDelimitedList("TypeParametersOrArguments", r.tsParseType.bind(r));
          });
        }), n.params.length === 0 && this.raise(this.start, I.EmptyTypeArguments), this.exprAllowed = !1, this.expect(u.relational), this.finishNode(n, "TSTypeParameterInstantiation");
      }, f.tsParseHeritageClause = function(r) {
        var n = this, c = this.start, l = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var m = n.startNode();
          return m.expression = n.tsParseEntityName(), n.tsMatchLeftRelational() && (m.typeParameters = n.tsParseTypeArguments()), n.finishNode(m, "TSExpressionWithTypeArguments");
        });
        return l.length || this.raise(c, I.EmptyHeritageClauseType({ token: r })), l;
      }, f.tsParseTypeMemberSemicolon = function() {
        this.eat(u.comma) || this.isLineTerminator() || this.expect(u.semi);
      }, f.tsTryParseAndCatch = function(r) {
        var n = this.tryParse(function(c) {
          return r() || c();
        });
        if (!n.aborted && n.node) return n.error && this.setLookaheadState(n.failState), n.node;
      }, f.tsParseSignatureMember = function(r, n) {
        return this.tsFillSignature(u.colon, n), this.tsParseTypeMemberSemicolon(), this.finishNode(n, r);
      }, f.tsParsePropertyOrMethodSignature = function(r, n) {
        this.eat(u.question) && (r.optional = !0);
        var c = r;
        if (this.match(u.parenL) || this.tsMatchLeftRelational()) {
          n && this.raise(r.start, I.ReadonlyForMethodSignature);
          var l = c;
          l.kind && this.tsMatchLeftRelational() && this.raise(this.start, I.AccesorCannotHaveTypeParameters), this.tsFillSignature(u.colon, l), this.tsParseTypeMemberSemicolon();
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
        var b = c;
        n && (b.readonly = !0);
        var k = this.tsTryParseTypeAnnotation();
        return k && (b.typeAnnotation = k), this.tsParseTypeMemberSemicolon(), this.finishNode(b, "TSPropertySignature");
      }, f.tsParseTypeMember = function() {
        var r = this.startNode();
        if (this.match(u.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", r);
        if (this.match(u._new)) {
          var n = this.startNode();
          return this.next(), this.match(u.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", r) : (r.key = this.createIdentifier(n, "new"), this.tsParsePropertyOrMethodSignature(r, !1));
        }
        return this.tsParseModifiers({ modified: r, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(r) || (this.parsePropertyName(r), r.computed || r.key.type !== "Identifier" || r.key.name !== "get" && r.key.name !== "set" || !this.tsTokenCanFollowModifier() || (r.kind = r.key.name, this.parsePropertyName(r)), this.tsParsePropertyOrMethodSignature(r, !!r.readonly));
      }, f.tsParseList = function(r, n) {
        for (var c = []; !this.tsIsListTerminator(r); ) c.push(n());
        return c;
      }, f.tsParseObjectTypeMembers = function() {
        this.expect(u.braceL);
        var r = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(u.braceR), r;
      }, f.tsParseInterfaceDeclaration = function(r, n) {
        if (n === void 0 && (n = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), n.declare && (r.declare = !0), q(this.type) ? (r.id = this.parseIdent(), this.checkLValSimple(r.id, 7)) : (r.id = null, this.raise(this.start, I.MissingInterfaceName)), r.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(u._extends) && (r.extends = this.tsParseHeritageClause("extends"));
        var c = this.startNode();
        return c.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), r.body = this.finishNode(c, "TSInterfaceBody"), this.finishNode(r, "TSInterfaceDeclaration");
      }, f.tsParseAbstractDeclaration = function(r) {
        if (this.match(u._class)) return r.abstract = !0, this.parseClass(r, !0);
        if (this.ts_isContextual(R.interface)) {
          if (!this.hasFollowingLineBreak()) return r.abstract = !0, this.tsParseInterfaceDeclaration(r);
        } else this.unexpected(r.start);
      }, f.tsIsDeclarationStart = function() {
        return br(this.type);
      }, f.tsParseExpressionStatement = function(r, n) {
        switch (n.name) {
          case "declare":
            var c = this.tsTryParseDeclare(r);
            if (c) return c.declare = !0, c;
            break;
          case "global":
            if (this.match(u.braceL)) {
              _.prototype.enterScope.call(this, ut);
              var l = r;
              return l.global = !0, l.id = n, l.body = this.tsParseModuleBlock(), _.prototype.exitScope.call(this), this.finishNode(l, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(r, n.name, !1);
        }
      }, f.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, f.tsIsExportDefaultSpecifier = function() {
        var r = this.type, n = this.isAsyncFunction(), c = this.isLet();
        if (q(r)) {
          if (n && !this.containsEsc || c) return !1;
          if ((r === R.type || r === R.interface) && !this.containsEsc) {
            var l = this.lookahead();
            if (q(l.type) && !this.isContextualWithState("from", l) || l.type === u.braceL) return !1;
          }
        } else if (!this.match(u._default)) return !1;
        var m = this.nextTokenStart(), v = this.isUnparsedContextual(m, "from");
        if (this.input.charCodeAt(m) === 44 || q(this.type) && v) return !0;
        if (this.match(u._default) && v) {
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
        if (n === void 0 && (n = !1), r.id = this.parseIdent(), n || this.checkLValSimple(r.id, 8), this.eat(u.dot)) {
          var c = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(c, !0), r.body = c;
        } else _.prototype.enterScope.call(this, ut), r.body = this.tsParseModuleBlock(), _.prototype.exitScope.call(this);
        return this.finishNode(r, "TSModuleDeclaration");
      }, f.checkLValSimple = function(r, n, c) {
        return n === void 0 && (n = 0), _.prototype.checkLValSimple.call(this, r, n, c);
      }, f.tsParseTypeAliasDeclaration = function(r) {
        var n = this;
        return r.id = this.parseIdent(), this.checkLValSimple(r.id, 6), r.typeAnnotation = this.tsInType(function() {
          if (r.typeParameters = n.tsTryParseTypeParameters(n.tsParseInOutModifiers.bind(n)), n.expect(u.eq), n.ts_isContextual(R.interface) && n.lookahead().type !== u.dot) {
            var c = n.startNode();
            return n.next(), n.finishNode(c, "TSIntrinsicKeyword");
          }
          return n.tsParseType();
        }), this.semicolon(), this.finishNode(r, "TSTypeAliasDeclaration");
      }, f.tsParseDeclaration = function(r, n, c) {
        switch (n) {
          case "abstract":
            if (this.tsCheckLineTerminator(c) && (this.match(u._class) || q(this.type))) return this.tsParseAbstractDeclaration(r);
            break;
          case "module":
            if (this.tsCheckLineTerminator(c)) {
              if (this.match(u.string)) return this.tsParseAmbientExternalModuleDeclaration(r);
              if (q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(r);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(c) && q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(r);
            break;
          case "type":
            if (this.tsCheckLineTerminator(c) && q(this.type)) return this.tsParseTypeAliasDeclaration(r);
        }
      }, f.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, f.tsParseImportEqualsDeclaration = function(r, n) {
        r.isExport = n || !1, r.id = this.parseIdent(), this.checkLValSimple(r.id, 2), _.prototype.expect.call(this, u.eq);
        var c = this.tsParseModuleReference();
        return r.importKind === "type" && c.type !== "TSExternalModuleReference" && this.raise(c.start, I.ImportAliasHasImportType), r.moduleReference = c, _.prototype.semicolon.call(this), this.finishNode(r, "TSImportEqualsDeclaration");
      }, f.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var r = this.type;
        if (q(r)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((r === R.type || r === R.interface) && !this.containsEsc) {
            var n = this.lookahead();
            if (q(n.type) && !this.isContextualWithState("from", n) || n.type === u.braceL) return !1;
          }
        } else if (!this.match(u._default)) return !1;
        var c = this.nextTokenStart(), l = this.isUnparsedContextual(c, "from");
        if (this.input.charCodeAt(c) === 44 || q(this.type) && l) return !0;
        if (this.match(u._default) && l) {
          var m = this.input.charCodeAt(this.nextTokenStartSince(c + 4));
          return m === 34 || m === 39;
        }
        return !1;
      }, f.parseTemplate = function(r) {
        var n = (r === void 0 ? {} : r).isTagged, c = n !== void 0 && n, l = this.startNode();
        this.next(), l.expressions = [];
        var m = this.parseTemplateElement({ isTagged: c });
        for (l.quasis = [m]; !m.tail; ) this.type === u.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(u.dollarBraceL), l.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(u.braceR), l.quasis.push(m = this.parseTemplateElement({ isTagged: c }));
        return this.next(), this.finishNode(l, "TemplateLiteral");
      }, f.parseFunction = function(r, n, c, l, m) {
        this.initFunction(r), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !l) && (this.type === u.star && 2 & n && this.unexpected(), r.generator = this.eat(u.star)), this.options.ecmaVersion >= 8 && (r.async = !!l), 1 & n && (r.id = 4 & n && this.type !== u.name ? null : this.parseIdent());
        var v = this.yieldPos, x = this.awaitPos, b = this.awaitIdentPos, k = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Xt(r.async, r.generator)), 1 & n || (r.id = this.type === u.name ? this.parseIdent() : null), this.parseFunctionParams(r);
        var T = 1 & n;
        return this.parseFunctionBody(r, c, !1, m, { isFunctionDeclaration: T }), this.yieldPos = v, this.awaitPos = x, this.awaitIdentPos = b, 1 & n && r.id && !(2 & n) && this.checkLValSimple(r.id, r.body ? this.strict || r.generator || r.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = k, this.finishNode(r, T ? "FunctionDeclaration" : "FunctionExpression");
      }, f.parseFunctionBody = function(r, n, c, l, m) {
        n === void 0 && (n = !1), c === void 0 && (c = !1), l === void 0 && (l = !1), this.match(u.colon) && (r.returnType = this.tsParseTypeOrTypePredicateAnnotation(u.colon));
        var v = m != null && m.isFunctionDeclaration ? "TSDeclareFunction" : m != null && m.isClassMethod ? "TSDeclareMethod" : void 0;
        return v && !this.match(u.braceL) && this.isLineTerminator() ? this.finishNode(r, v) : v === "TSDeclareFunction" && this.isAmbientContext && (this.raise(r.start, I.DeclareFunctionHasImplementation), r.declare) ? (_.prototype.parseFunctionBody.call(this, r, n, c, !1), this.finishNode(r, v)) : (_.prototype.parseFunctionBody.call(this, r, n, c, l), r);
      }, f.parseNew = function() {
        var r;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var n = this.startNode(), c = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(u.dot)) {
          n.meta = c;
          var l = this.containsEsc;
          return n.property = this.parseIdent(!0), n.property.name !== "target" && this.raiseRecoverable(n.property.start, "The only valid meta property for new is 'new.target'"), l && this.raiseRecoverable(n.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(n.start, "'new.target' can only be used in functions and class static block"), this.finishNode(n, "MetaProperty");
        }
        var m = this.start, v = this.startLoc, x = this.type === u._import;
        n.callee = this.parseSubscripts(this.parseExprAtom(), m, v, !0, !1), x && n.callee.type === "ImportExpression" && this.raise(m, "Cannot use new with import()");
        var b = n.callee;
        return b.type !== "TSInstantiationExpression" || (r = b.extra) != null && r.parenthesized || (n.typeParameters = b.typeParameters, n.callee = b.expression), n.arguments = this.eat(u.parenL) ? this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(n, "NewExpression");
      }, f.parseExprOp = function(r, n, c, l, m) {
        var v;
        if (u._in.binop > l && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (v = "TSAsExpression"), o && this.isContextual("satisfies") && (v = "TSSatisfiesExpression"), v)) {
          var x = this.startNodeAt(n, c);
          x.expression = r;
          var b = this.tsTryNextParseConstantContext();
          return x.typeAnnotation = b || this.tsNextThenParseType(), this.finishNode(x, v), this.reScan_lt_gt(), this.parseExprOp(x, n, c, l, m);
        }
        return _.prototype.parseExprOp.call(this, r, n, c, l, m);
      }, f.parseImportSpecifiers = function() {
        var r = [], n = !0;
        if (y.tokenIsIdentifier(this.type) && (r.push(this.parseImportDefaultSpecifier()), !this.eat(u.comma))) return r;
        if (this.type === u.star) return r.push(this.parseImportNamespaceSpecifier()), r;
        for (this.expect(u.braceL); !this.eat(u.braceR); ) {
          if (n) n = !1;
          else if (this.expect(u.comma), this.afterTrailingComma(u.braceR)) break;
          r.push(this.parseImportSpecifier());
        }
        return r;
      }, f.parseImport = function(r) {
        var n = this.lookahead();
        if (r.importKind = "value", this.importOrExportOuterKind = "value", q(n.type) || this.match(u.star) || this.match(u.braceL)) {
          var c = this.lookahead(2);
          if (c.type !== u.comma && !this.isContextualWithState("from", c) && c.type !== u.eq && this.ts_eatContextualWithState("type", 1, n) && (this.importOrExportOuterKind = "type", r.importKind = "type", n = this.lookahead(), c = this.lookahead(2)), q(n.type) && c.type === u.eq) {
            this.next();
            var l = this.tsParseImportEqualsDeclaration(r);
            return this.importOrExportOuterKind = "value", l;
          }
        }
        return this.next(), this.type === u.string ? (r.specifiers = [], r.source = this.parseExprAtom()) : (r.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), r.source = this.type === u.string ? this.parseExprAtom() : this.unexpected()), this.parseMaybeImportAttributes(r), this.semicolon(), this.finishNode(r, "ImportDeclaration"), this.importOrExportOuterKind = "value", r.importKind === "type" && r.specifiers.length > 1 && r.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(r.start, I.TypeImportCannotSpecifyDefaultAndNamed), r;
      }, f.parseExportDefaultDeclaration = function() {
        if (this.isAbstractClass()) {
          var r = this.startNode();
          return this.next(), r.abstract = !0, this.parseClass(r, !0);
        }
        if (this.match(R.interface)) {
          var n = this.tsParseInterfaceDeclaration(this.startNode());
          if (n) return n;
        }
        return _.prototype.parseExportDefaultDeclaration.call(this);
      }, f.parseExportAllDeclaration = function(r, n) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (r.exported = this.parseModuleExportName(), this.checkExport(n, r.exported, this.lastTokStart)) : r.exported = null), this.expectContextual("from"), this.type !== u.string && this.unexpected(), r.source = this.parseExprAtom(), this.parseMaybeImportAttributes(r), this.semicolon(), this.finishNode(r, "ExportAllDeclaration");
      }, f.parseDynamicImport = function(r) {
        if (this.next(), r.source = this.parseMaybeAssign(), this.eat(u.comma)) {
          var n = this.parseExpression();
          r.arguments = [n];
        }
        if (!this.eat(u.parenR)) {
          var c = this.start;
          this.eat(u.comma) && this.eat(u.parenR) ? this.raiseRecoverable(c, "Trailing comma is not allowed in import()") : this.unexpected(c);
        }
        return this.finishNode(r, "ImportExpression");
      }, f.parseExport = function(r, n) {
        var c = this.lookahead();
        if (this.ts_eatWithState(u._import, 2, c)) {
          this.ts_isContextual(R.type) && this.lookaheadCharCode() !== 61 ? (r.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (r.importKind = "value", this.importOrExportOuterKind = "value");
          var l = this.tsParseImportEqualsDeclaration(r, !0);
          return this.importOrExportOuterKind = void 0, l;
        }
        if (this.ts_eatWithState(u.eq, 2, c)) {
          var m = r;
          return m.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(m, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, c)) {
          var v = r;
          return this.expectContextual("namespace"), v.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(v, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(c, R.type) && this.lookahead(2).type === u.braceL ? (this.next(), this.importOrExportOuterKind = "type", r.exportKind = "type") : (this.importOrExportOuterKind = "value", r.exportKind = "value"), this.next(), this.eat(u.star)) return this.parseExportAllDeclaration(r, n);
        if (this.eat(u._default)) return this.checkExport(n, "default", this.lastTokStart), r.declaration = this.parseExportDefaultDeclaration(), this.finishNode(r, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) r.declaration = this.parseExportDeclaration(r), r.declaration.type === "VariableDeclaration" ? this.checkVariableExport(n, r.declaration.declarations) : this.checkExport(n, r.declaration.id, r.declaration.id.start), r.specifiers = [], r.source = null;
        else {
          if (r.declaration = null, r.specifiers = this.parseExportSpecifiers(n), this.eatContextual("from")) this.type !== u.string && this.unexpected(), r.source = this.parseExprAtom(), this.parseMaybeImportAttributes(r);
          else {
            for (var x, b = ji(r.specifiers); !(x = b()).done; ) {
              var k = x.value;
              this.checkUnreserved(k.local), this.checkLocalExport(k.local), k.local.type === "Literal" && this.raise(k.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            r.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(r, "ExportNamedDeclaration");
      }, f.checkExport = function(r, n, c) {
        r && (typeof n != "string" && (n = n.type === "Identifier" ? n.name : n.value), r[n] = !0);
      }, f.parseMaybeDefault = function(r, n, c) {
        var l = _.prototype.parseMaybeDefault.call(this, r, n, c);
        return l.type === "AssignmentPattern" && l.typeAnnotation && l.right.start < l.typeAnnotation.start && this.raise(l.typeAnnotation.start, I.TypeAnnotationAfterAssign), l;
      }, f.typeCastToParameter = function(r) {
        return r.expression.typeAnnotation = r.typeAnnotation, this.resetEndLocation(r.expression, r.typeAnnotation.end), r.expression;
      }, f.toAssignableList = function(r, n) {
        for (var c = 0; c < r.length; c++) {
          var l = r[c];
          l?.type === "TSTypeCastExpression" && (r[c] = this.typeCastToParameter(l));
        }
        return _.prototype.toAssignableList.call(this, r, n);
      }, f.reportReservedArrowTypeParam = function(r) {
      }, f.parseExprAtom = function(r, n, c) {
        if (this.type === R.jsxText) return this.jsx_parseText();
        if (this.type === R.jsxTagStart) return this.jsx_parseElement();
        if (this.type === R.at) return this.parseDecorators(), this.parseExprAtom();
        if (q(this.type)) {
          var l = this.potentialArrowAt === this.start, m = this.start, v = this.startLoc, x = this.containsEsc, b = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !x && b.name === "async" && !this.canInsertSemicolon() && this.eat(u._function)) return this.overrideContext(he.f_expr), this.parseFunction(this.startNodeAt(m, v), 0, !1, !0, n);
          if (l && !this.canInsertSemicolon()) {
            if (this.eat(u.arrow)) return this.parseArrowExpression(this.startNodeAt(m, v), [b], !1, n);
            if (this.options.ecmaVersion >= 8 && b.name === "async" && this.type === u.name && !x && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return b = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(u.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(m, v), [b], !0, n);
          }
          return b;
        }
        return _.prototype.parseExprAtom.call(this, r, n, c);
      }, f.parseExprAtomDefault = function() {
        if (q(this.type)) {
          var r = this.potentialArrowAt === this.start, n = this.containsEsc, c = this.parseIdent();
          if (!n && c.name === "async" && !this.canInsertSemicolon()) {
            var l = this.type;
            if (l === u._function) return this.next(), this.parseFunction(this.startNodeAtNode(c), void 0, !0, !0);
            if (q(l)) {
              if (this.lookaheadCharCode() === 61) {
                var m = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(u.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(c), [m], !0);
              }
              return c;
            }
          }
          return r && this.match(u.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(c), [c], !1)) : c;
        }
        this.unexpected();
      }, f.parseIdentNode = function() {
        var r = this.startNode();
        return gt(this.type) ? (r.name = this.value, r) : _.prototype.parseIdentNode.call(this);
      }, f.parseVarStatement = function(r, n, c) {
        c === void 0 && (c = !1);
        var l = this.isAmbientContext;
        this.next(), _.prototype.parseVar.call(this, r, !1, n, c || l), this.semicolon();
        var m = this.finishNode(r, "VariableDeclaration");
        if (!l) return m;
        for (var v, x = ji(m.declarations); !(v = x()).done; ) {
          var b = v.value, k = b.init;
          k && (n !== "const" || b.id.typeAnnotation ? this.raise(k.start, I.InitializerNotAllowedInAmbientContext) : k.type !== "StringLiteral" && k.type !== "BooleanLiteral" && k.type !== "NumericLiteral" && k.type !== "BigIntLiteral" && (k.type !== "TemplateLiteral" || k.expressions.length > 0) && !Ta(k) && this.raise(k.start, I.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return m;
      }, f.parseStatement = function(r, n, c) {
        if (this.match(R.at) && this.parseDecorators(!0), this.match(u._const) && this.isLookaheadContextual("enum")) {
          var l = this.startNode();
          return this.expect(u._const), this.tsParseEnumDeclaration(l, { const: !0 });
        }
        if (this.ts_isContextual(R.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(R.interface)) {
          var m = this.tsParseInterfaceDeclaration(this.startNode());
          if (m) return m;
        }
        return _.prototype.parseStatement.call(this, r, n, c);
      }, f.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, f.parsePostMemberNameModifiers = function(r) {
        this.eat(u.question) && (r.optional = !0), r.readonly && this.match(u.parenL) && this.raise(r.start, I.ClassMethodHasReadonly), r.declare && this.match(u.parenL) && this.raise(r.start, I.ClassMethodHasDeclare);
      }, f.parseExpressionStatement = function(r, n) {
        return (n.type === "Identifier" ? this.tsParseExpressionStatement(r, n) : void 0) || _.prototype.parseExpressionStatement.call(this, r, n);
      }, f.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(R.at) || _.prototype.shouldParseExportStatement.call(this);
      }, f.parseConditional = function(r, n, c, l, m) {
        if (this.eat(u.question)) {
          var v = this.startNodeAt(n, c);
          return v.test = r, v.consequent = this.parseMaybeAssign(), this.expect(u.colon), v.alternate = this.parseMaybeAssign(l), this.finishNode(v, "ConditionalExpression");
        }
        return r;
      }, f.parseMaybeConditional = function(r, n) {
        var c = this, l = this.start, m = this.startLoc, v = this.parseExprOps(r, n);
        if (this.checkExpressionErrors(n)) return v;
        if (!this.maybeInArrowParameters || !this.match(u.question)) return this.parseConditional(v, l, m, r, n);
        var x = this.tryParse(function() {
          return c.parseConditional(v, l, m, r, n);
        });
        return x.node ? (x.error && this.setLookaheadState(x.failState), x.node) : (x.error && this.setOptionalParametersError(n, x.error), v);
      }, f.parseParenItem = function(r) {
        var n = this.start, c = this.startLoc;
        if (r = _.prototype.parseParenItem.call(this, r), this.eat(u.question) && (r.optional = !0, this.resetEndLocation(r)), this.match(u.colon)) {
          var l = this.startNodeAt(n, c);
          return l.expression = r, l.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(l, "TSTypeCastExpression");
        }
        return r;
      }, f.parseExportDeclaration = function(r) {
        var n = this;
        if (!this.isAmbientContext && this.ts_isContextual(R.declare)) return this.tsInAmbientContext(function() {
          return n.parseExportDeclaration(r);
        });
        var c = this.start, l = this.startLoc, m = this.eatContextual("declare");
        !m || !this.ts_isContextual(R.declare) && this.shouldParseExportStatement() || this.raise(this.start, I.ExpectedAmbientAfterExportDeclare);
        var v = q(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return v ? ((v.type === "TSInterfaceDeclaration" || v.type === "TSTypeAliasDeclaration" || m) && (r.exportKind = "type"), m && (this.resetStartLocation(v, c, l), v.declare = !0), v) : null;
      }, f.parseClassId = function(r, n) {
        if (n || !this.isContextual("implements")) {
          _.prototype.parseClassId.call(this, r, n);
          var c = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          c && (r.typeParameters = c);
        }
      }, f.parseClassPropertyAnnotation = function(r) {
        r.optional || (this.value === "!" && this.eat(u.prefix) ? r.definite = !0 : this.eat(u.question) && (r.optional = !0));
        var n = this.tsTryParseTypeAnnotation();
        n && (r.typeAnnotation = n);
      }, f.parseClassField = function(r) {
        if (r.key.type === "PrivateIdentifier") r.abstract && this.raise(r.start, I.PrivateElementHasAbstract), r.accessibility && this.raise(r.start, I.PrivateElementHasAccessibility({ modifier: r.accessibility })), this.parseClassPropertyAnnotation(r);
        else if (this.parseClassPropertyAnnotation(r), this.isAmbientContext && (!r.readonly || r.typeAnnotation) && this.match(u.eq) && this.raise(this.start, I.DeclareClassFieldHasInitializer), r.abstract && this.match(u.eq)) {
          var n = r.key;
          this.raise(this.start, I.AbstractPropertyHasInitializer({ propertyName: n.type !== "Identifier" || r.computed ? "[" + this.input.slice(n.start, n.end) + "]" : n.name }));
        }
        return _.prototype.parseClassField.call(this, r);
      }, f.parseClassMethod = function(r, n, c, l) {
        var m = r.kind === "constructor", v = r.key.type === "PrivateIdentifier", x = this.tsTryParseTypeParameters();
        v ? (x && (r.typeParameters = x), r.accessibility && this.raise(r.start, I.PrivateMethodsHasAccessibility({ modifier: r.accessibility }))) : x && m && this.raise(x.start, I.ConstructorHasTypeParameters);
        var b = r.declare, k = r.kind;
        !(b !== void 0 && b) || k !== "get" && k !== "set" || this.raise(r.start, I.DeclareAccessor({ kind: k })), x && (r.typeParameters = x);
        var T = r.key;
        r.kind === "constructor" ? (n && this.raise(T.start, "Constructor can't be a generator"), c && this.raise(T.start, "Constructor can't be an async method")) : r.static && $i(r, "prototype") && this.raise(T.start, "Classes may not have a static property named prototype");
        var N = r.value = this.parseMethod(n, c, l, !0, r);
        return r.kind === "get" && N.params.length !== 0 && this.raiseRecoverable(N.start, "getter should have no params"), r.kind === "set" && N.params.length !== 1 && this.raiseRecoverable(N.start, "setter should have exactly one param"), r.kind === "set" && N.params[0].type === "RestElement" && this.raiseRecoverable(N.params[0].start, "Setter cannot use rest params"), this.finishNode(r, "MethodDefinition");
      }, f.isClassMethod = function() {
        return this.match(u.relational);
      }, f.parseClassElement = function(r) {
        var n = this;
        if (this.eat(u.semi)) return null;
        var c, l = this.options.ecmaVersion, m = this.startNode(), v = "", x = !1, b = !1, k = "method", T = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], N = this.tsParseModifiers({ modified: m, allowedModifiers: T, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: I.InvalidModifierOnTypeParameterPositions });
        c = !!N.static;
        var V = function() {
          if (!n.tsIsStartOfStaticBlocks()) {
            var C = n.tsTryParseIndexSignature(m);
            if (C) return m.abstract && n.raise(m.start, I.IndexSignatureHasAbstract), m.accessibility && n.raise(m.start, I.IndexSignatureHasAccessibility({ modifier: m.accessibility })), m.declare && n.raise(m.start, I.IndexSignatureHasDeclare), m.override && n.raise(m.start, I.IndexSignatureHasOverride), C;
            if (!n.inAbstractClass && m.abstract && n.raise(m.start, I.NonAbstractClassHasAbstractMethod), m.override && r && n.raise(m.start, I.OverrideNotInSubClass), m.static = c, c && (n.isClassElementNameStart() || n.type === u.star || (v = "static")), !v && l >= 8 && n.eatContextual("async") && (!n.isClassElementNameStart() && n.type !== u.star || n.canInsertSemicolon() ? v = "async" : b = !0), !v && (l >= 9 || !b) && n.eat(u.star) && (x = !0), !v && !b && !x) {
              var G = n.value;
              (n.eatContextual("get") || n.eatContextual("set")) && (n.isClassElementNameStart() ? k = G : v = G);
            }
            if (v ? (m.computed = !1, m.key = n.startNodeAt(n.lastTokStart, n.lastTokStartLoc), m.key.name = v, n.finishNode(m.key, "Identifier")) : n.parseClassElementName(m), n.parsePostMemberNameModifiers(m), n.isClassMethod() || l < 13 || n.type === u.parenL || k !== "method" || x || b) {
              var W = !m.static && $i(m, "constructor"), J = W && r;
              W && k !== "method" && n.raise(m.key.start, "Constructor can't have get/set modifier"), m.kind = W ? "constructor" : k, n.parseClassMethod(m, x, b, J);
            } else n.parseClassField(m);
            return m;
          }
          if (n.next(), n.next(), n.tsHasSomeModifiers(m, T) && n.raise(n.start, I.StaticBlockCannotHaveModifier), l >= 13) return _.prototype.parseClassStaticBlock.call(n, m), m;
        };
        return m.declare ? this.tsInAmbientContext(V) : V(), m;
      }, f.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || _.prototype.isClassElementNameStart.call(this);
      }, f.parseClassSuper = function(r) {
        _.prototype.parseClassSuper.call(this, r), r.superClass && (this.tsMatchLeftRelational() || this.match(u.bitShift)) && (r.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (r.implements = this.tsParseHeritageClause("implements"));
      }, f.parseFunctionParams = function(r) {
        var n = this.tsTryParseTypeParameters();
        n && (r.typeParameters = n), _.prototype.parseFunctionParams.call(this, r);
      }, f.parseVarId = function(r, n) {
        _.prototype.parseVarId.call(this, r, n), r.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(u.prefix) && (r.definite = !0);
        var c = this.tsTryParseTypeAnnotation();
        c && (r.id.typeAnnotation = c, this.resetEndLocation(r.id));
      }, f.parseArrowExpression = function(r, n, c, l) {
        this.match(u.colon) && (r.returnType = this.tsParseTypeAnnotation());
        var m = this.yieldPos, v = this.awaitPos, x = this.awaitIdentPos;
        this.enterScope(16 | Xt(c, !1)), this.initFunction(r);
        var b = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (r.async = !!c), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, r.params = this.toAssignableList(n, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(r, !0, !1, l), this.yieldPos = m, this.awaitPos = v, this.awaitIdentPos = x, this.maybeInArrowParameters = b, this.finishNode(r, "ArrowFunctionExpression");
      }, f.parseMaybeAssignOrigin = function(r, n, c) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(r);
          this.exprAllowed = !1;
        }
        var l = !1, m = -1, v = -1, x = -1;
        n ? (m = n.parenthesizedAssign, v = n.trailingComma, x = n.doubleProto, n.parenthesizedAssign = n.trailingComma = -1) : (n = new ct(), l = !0);
        var b = this.start, k = this.startLoc;
        (this.type === u.parenL || q(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = r === "await");
        var T = this.parseMaybeConditional(r, n);
        if (c && (T = c.call(this, T, b, k)), this.type.isAssign) {
          var N = this.startNodeAt(b, k);
          return N.operator = this.value, this.type === u.eq && (T = this.toAssignable(T, !0, n)), l || (n.parenthesizedAssign = n.trailingComma = n.doubleProto = -1), n.shorthandAssign >= T.start && (n.shorthandAssign = -1), this.type === u.eq ? this.checkLValPattern(T) : this.checkLValSimple(T), N.left = T, this.next(), N.right = this.parseMaybeAssign(r), x > -1 && (n.doubleProto = x), this.finishNode(N, "AssignmentExpression");
        }
        return l && this.checkExpressionErrors(n, !0), m > -1 && (n.parenthesizedAssign = m), v > -1 && (n.trailingComma = v), T;
      }, f.parseMaybeAssign = function(r, n, c) {
        var l, m, v, x, b, k, T, N, V, C, G, W = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (N = this.cloneCurLookaheadState(), !(V = this.tryParse(function() {
            return W.parseMaybeAssignOrigin(r, n, c);
          }, N)).error) return V.node;
          var J = this.context, ie = J[J.length - 1];
          ie === y.tokContexts.tc_oTag && J[J.length - 2] === y.tokContexts.tc_expr ? (J.pop(), J.pop()) : ie !== y.tokContexts.tc_oTag && ie !== y.tokContexts.tc_expr || J.pop();
        }
        if (!((l = V) != null && l.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(r, n, c);
        N && !this.compareLookaheadState(N, this.getCurLookaheadState()) || (N = this.cloneCurLookaheadState());
        var me = this.tryParse(function(Re) {
          var nt, ot;
          G = W.tsParseTypeParameters();
          var De = W.parseMaybeAssignOrigin(r, n, c);
          return (De.type !== "ArrowFunctionExpression" || (nt = De.extra) != null && nt.parenthesized) && Re(), ((ot = G) == null ? void 0 : ot.params.length) !== 0 && W.resetStartLocationFromNode(De, G), De.typeParameters = G, De;
        }, N);
        if (!me.error && !me.aborted) return G && this.reportReservedArrowTypeParam(G), me.node;
        if (!V && (Ui(!0), !(C = this.tryParse(function() {
          return W.parseMaybeAssignOrigin(r, n, c);
        }, N)).error)) return C.node;
        if ((m = V) != null && m.node) return this.setLookaheadState(V.failState), V.node;
        if (me.node) return this.setLookaheadState(me.failState), G && this.reportReservedArrowTypeParam(G), me.node;
        if ((v = C) != null && v.node) return this.setLookaheadState(C.failState), C.node;
        throw (x = V) != null && x.thrown ? V.error : me.thrown ? me.error : (b = C) != null && b.thrown ? C.error : ((k = V) == null ? void 0 : k.error) || me.error || ((T = C) == null ? void 0 : T.error);
      }, f.parseAssignableListItem = function(r) {
        for (var n = []; this.match(R.at); ) n.push(this.parseDecorator());
        var c, l = this.start, m = this.startLoc, v = !1, x = !1;
        if (r !== void 0) {
          var b = {};
          this.tsParseModifiers({ modified: b, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), c = b.accessibility, x = b.override, v = b.readonly, r === !1 && (c || v || x) && this.raise(m.start, I.UnexpectedParameterModifier);
        }
        var k = this.parseMaybeDefault(l, m);
        this.parseBindingListItem(k);
        var T = this.parseMaybeDefault(k.start, k.loc, k);
        if (n.length && (T.decorators = n), c || v || x) {
          var N = this.startNodeAt(l, m);
          return c && (N.accessibility = c), v && (N.readonly = v), x && (N.override = x), T.type !== "Identifier" && T.type !== "AssignmentPattern" && this.raise(N.start, I.UnsupportedParameterPropertyKind), N.parameter = T, this.finishNode(N, "TSParameterProperty");
        }
        return T;
      }, f.checkLValInnerPattern = function(r, n, c) {
        n === void 0 && (n = 0), r.type === "TSParameterProperty" ? this.checkLValInnerPattern(r.parameter, n, c) : _.prototype.checkLValInnerPattern.call(this, r, n, c);
      }, f.parseBindingListItem = function(r) {
        this.eat(u.question) && (r.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(r.start, I.PatternIsOptional), r.optional = !0);
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
        switch (n === void 0 && (n = !1), c === void 0 && (c = new ct()), r.type) {
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
            return n || r.left.type !== "TSTypeCastExpression" || (r.left = this.typeCastToParameter(r.left)), _.prototype.toAssignable.call(this, r, n, c);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(r);
          default:
            return _.prototype.toAssignable.call(this, r, n, c);
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
            return _.prototype.toAssignable.call(this, r, n, c);
        }
      }, f.curPosition = function() {
        if (this.options.locations) {
          var r = _.prototype.curPosition.call(this);
          return Object.defineProperty(r, "offset", { get: function() {
            return function(n) {
              var c = new d.Position(this.line, this.column + n);
              return c.index = this.index + n, c;
            };
          } }), r.index = this.pos, r;
        }
      }, f.parseBindingAtom = function() {
        return this.type === u._this ? this.parseIdent(!0) : _.prototype.parseBindingAtom.call(this);
      }, f.shouldParseArrow = function(r) {
        var n, c = this;
        if (n = this.match(u.colon) ? r.every(function(m) {
          return c.isAssignable(m, !0);
        }) : !this.canInsertSemicolon()) {
          if (this.match(u.colon)) {
            var l = this.tryParse(function(m) {
              var v = c.tsParseTypeOrTypePredicateAnnotation(u.colon);
              return !c.canInsertSemicolon() && c.match(u.arrow) || m(), v;
            });
            if (l.aborted) return this.shouldParseArrowReturnType = void 0, !1;
            l.thrown || (l.error && this.setLookaheadState(l.failState), this.shouldParseArrowReturnType = l.node);
          }
          return !!this.match(u.arrow) || (this.shouldParseArrowReturnType = void 0, !1);
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
          var b, k = this.start, T = this.startLoc, N = [], V = !0, C = !1, G = new ct(), W = this.yieldPos, J = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== u.parenR; ) {
            if (V ? V = !1 : this.expect(u.comma), v && this.afterTrailingComma(u.parenR, !0)) {
              C = !0;
              break;
            }
            if (this.type === u.ellipsis) {
              b = this.start, N.push(this.parseParenItem(this.parseRestBinding())), this.type === u.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            N.push(this.parseMaybeAssign(n, G, this.parseParenItem));
          }
          var ie = this.lastTokEnd, me = this.lastTokEndLoc;
          if (this.expect(u.parenR), this.maybeInArrowParameters = x, r && this.shouldParseArrow(N) && this.eat(u.arrow)) return this.checkPatternErrors(G, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = W, this.awaitPos = J, this.parseParenArrowList(l, m, N, n);
          N.length && !C || this.unexpected(this.lastTokStart), b && this.unexpected(b), this.checkExpressionErrors(G, !0), this.yieldPos = W || this.yieldPos, this.awaitPos = J || this.awaitPos, N.length > 1 ? ((c = this.startNodeAt(k, T)).expressions = N, this.finishNodeAt(c, "SequenceExpression", ie, me)) : c = N[0];
        } else c = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Re = this.startNodeAt(l, m);
          return Re.expression = c, this.finishNode(Re, "ParenthesizedExpression");
        }
        return c;
      }, f.parseTaggedTemplateExpression = function(r, n, c, l) {
        var m = this.startNodeAt(n, c);
        return m.tag = r, m.quasi = this.parseTemplate({ isTagged: !0 }), l && this.raise(n, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(m, "TaggedTemplateExpression");
      }, f.shouldParseAsyncArrow = function() {
        var r = this;
        if (!this.match(u.colon)) return !this.canInsertSemicolon() && this.eat(u.arrow);
        var n = this.tryParse(function(c) {
          var l = r.tsParseTypeOrTypePredicateAnnotation(u.colon);
          return !r.canInsertSemicolon() && r.match(u.arrow) || c(), l;
        });
        return n.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : n.thrown ? void 0 : (n.error && this.setLookaheadState(n.failState), this.shouldParseAsyncArrowReturnType = n.node, !this.canInsertSemicolon() && this.eat(u.arrow));
      }, f.parseSubscriptAsyncArrow = function(r, n, c, l) {
        var m = this.startNodeAt(r, n);
        return m.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(m, c, !0, l);
      }, f.parseExprList = function(r, n, c, l) {
        for (var m = [], v = !0; !this.eat(r); ) {
          if (v) v = !1;
          else if (this.expect(u.comma), n && this.afterTrailingComma(r)) break;
          var x = void 0;
          c && this.type === u.comma ? x = null : this.type === u.ellipsis ? (x = this.parseSpread(l), l && this.type === u.comma && l.trailingComma < 0 && (l.trailingComma = this.start)) : x = this.parseMaybeAssign(!1, l, this.parseParenItem), m.push(x);
        }
        return m;
      }, f.parseSubscript = function(r, n, c, l, m, v, x) {
        var b = this, k = v;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(u.prefix)) {
          this.exprAllowed = !1, this.next();
          var T = this.startNodeAt(n, c);
          return T.expression = r, r = this.finishNode(T, "TSNonNullExpression");
        }
        var N = !1;
        if (this.match(u.questionDot) && this.lookaheadCharCode() === 60) {
          if (l) return r;
          r.optional = !0, k = N = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(u.bitShift)) {
          var V, C = this.tsTryParseAndCatch(function() {
            if (!l && b.atPossibleAsyncArrow(r)) {
              var Ei = b.tsTryParseGenericAsyncArrowFunction(n, c, x);
              if (Ei) return r = Ei;
            }
            var kt = b.tsParseTypeArgumentsInExpression();
            if (!kt) return r;
            if (N && !b.match(u.parenL)) return V = b.curPosition(), r;
            if (Ue(b.type) || b.type === u.backQuote) {
              var Ii = b.parseTaggedTemplateExpression(r, n, c, k);
              return Ii.typeParameters = kt, Ii;
            }
            if (!l && b.eat(u.parenL)) {
              var Ni = new ct(), Ke = b.startNodeAt(n, c);
              return Ke.callee = r, Ke.arguments = b.parseExprList(u.parenR, b.options.ecmaVersion >= 8, !1, Ni), b.tsCheckForInvalidTypeCasts(Ke.arguments), Ke.typeParameters = kt, k && (Ke.optional = N), b.checkExpressionErrors(Ni, !0), r = b.finishNode(Ke, "CallExpression");
            }
            var qt = b.type;
            if (!(b.tsMatchRightRelational() || qt === u.bitShift || qt !== u.parenL && (Li = qt, !!Li.startsExpr) && !b.hasPrecedingLineBreak())) {
              var Li, Ht = b.startNodeAt(n, c);
              return Ht.expression = r, Ht.typeParameters = kt, b.finishNode(Ht, "TSInstantiationExpression");
            }
          });
          if (V && this.unexpected(V), C) return C.type === "TSInstantiationExpression" && (this.match(u.dot) || this.match(u.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, I.InvalidPropertyAccessAfterInstantiationExpression), r = C;
        }
        var G = this.options.ecmaVersion >= 11, W = G && this.eat(u.questionDot);
        l && W && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var J = this.eat(u.bracketL);
        if (J || W && this.type !== u.parenL && this.type !== u.backQuote || this.eat(u.dot)) {
          var ie = this.startNodeAt(n, c);
          ie.object = r, J ? (ie.property = this.parseExpression(), this.expect(u.bracketR)) : ie.property = this.type === u.privateId && r.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), ie.computed = !!J, G && (ie.optional = W), r = this.finishNode(ie, "MemberExpression");
        } else if (!l && this.eat(u.parenL)) {
          var me = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var Re = new ct(), nt = this.yieldPos, ot = this.awaitPos, De = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var Ci = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1, Re);
          if (m && !W && this.shouldParseAsyncArrow()) this.checkPatternErrors(Re, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = nt, this.awaitPos = ot, this.awaitIdentPos = De, r = this.parseSubscriptAsyncArrow(n, c, Ci, x);
          else {
            this.checkExpressionErrors(Re, !0), this.yieldPos = nt || this.yieldPos, this.awaitPos = ot || this.awaitPos, this.awaitIdentPos = De || this.awaitIdentPos;
            var bt = this.startNodeAt(n, c);
            bt.callee = r, bt.arguments = Ci, G && (bt.optional = W), r = this.finishNode(bt, "CallExpression");
          }
          this.maybeInArrowParameters = me;
        } else if (this.type === u.backQuote) {
          (W || k) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var Zt = this.startNodeAt(n, c);
          Zt.tag = r, Zt.quasi = this.parseTemplate({ isTagged: !0 }), r = this.finishNode(Zt, "TaggedTemplateExpression");
        }
        return r;
      }, f.parseGetterSetter = function(r) {
        r.kind = r.key.name, this.parsePropertyName(r), r.value = this.parseMethod(!1);
        var n = r.kind === "get" ? 0 : 1, c = r.value.params[0], l = c && this.isThisParam(c);
        r.value.params.length !== (n = l ? n + 1 : n) ? this.raiseRecoverable(r.value.start, r.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : r.kind === "set" && r.value.params[0].type === "RestElement" && this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params");
      }, f.parseProperty = function(r, n) {
        if (!r) {
          var c = [];
          if (this.match(R.at)) for (; this.match(R.at); ) c.push(this.parseDecorator());
          var l = _.prototype.parseProperty.call(this, r, n);
          return l.type === "SpreadElement" && c.length && this.raise(l.start, "Decorators can't be used with SpreadElement"), c.length && (l.decorators = c, c = []), l;
        }
        return _.prototype.parseProperty.call(this, r, n);
      }, f.parseCatchClauseParam = function() {
        var r = this.parseBindingAtom(), n = r.type === "Identifier";
        this.enterScope(n ? 32 : 0), this.checkLValPattern(r, n ? 4 : 2);
        var c = this.tsTryParseTypeAnnotation();
        return c && (r.typeAnnotation = c, this.resetEndLocation(r)), this.expect(u.parenR), r;
      }, f.parseClass = function(r, n) {
        var c = this.inAbstractClass;
        this.inAbstractClass = !!r.abstract;
        try {
          this.next(), this.takeDecorators(r);
          var l = this.strict;
          this.strict = !0, this.parseClassId(r, n), this.parseClassSuper(r);
          var m = this.enterClassBody(), v = this.startNode(), x = !1;
          v.body = [];
          var b = [];
          for (this.expect(u.braceL); this.type !== u.braceR; ) if (this.match(R.at)) b.push(this.parseDecorator());
          else {
            var k = this.parseClassElement(r.superClass !== null);
            b.length && (k.decorators = b, this.resetStartLocationFromNode(k, b[0]), b = []), k && (v.body.push(k), k.type === "MethodDefinition" && k.kind === "constructor" && k.value.type === "FunctionExpression" ? (x && this.raiseRecoverable(k.start, "Duplicate constructor in the same class"), x = !0, k.decorators && k.decorators.length > 0 && this.raise(k.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : k.key && k.key.type === "PrivateIdentifier" && xa(m, k) && this.raiseRecoverable(k.key.start, "Identifier '#" + k.key.name + "' has already been declared"));
          }
          return this.strict = l, this.next(), b.length && this.raise(this.start, "Decorators must be attached to a class element."), r.body = this.finishNode(v, "ClassBody"), this.exitClassBody(), this.finishNode(r, n ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = c;
        }
      }, f.parseClassFunctionParams = function() {
        var r = this.tsTryParseTypeParameters(this.tsParseConstModifier), n = this.parseBindingList(u.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return r && (n.typeParameters = r), n;
      }, f.parseMethod = function(r, n, c, l, m) {
        var v = this.startNode(), x = this.yieldPos, b = this.awaitPos, k = this.awaitIdentPos;
        if (this.initFunction(v), this.options.ecmaVersion >= 6 && (v.generator = r), this.options.ecmaVersion >= 8 && (v.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Xt(n, v.generator) | (c ? 128 : 0)), this.expect(u.parenL), v.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(v, !1, !0, !1, { isClassMethod: l }), this.yieldPos = x, this.awaitPos = b, this.awaitIdentPos = k, m && m.abstract && v.body) {
          var T = m.key;
          this.raise(m.start, I.AbstractMethodHasImplementation({ methodName: T.type !== "Identifier" || m.computed ? "[" + this.input.slice(T.start, T.end) + "]" : T.name }));
        }
        return this.finishNode(v, "FunctionExpression");
      }, pe.parse = function(r, n) {
        if (n.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        n.locations = !0;
        var c = new this(n, r);
        return s && (c.isAmbientContext = !0), c.parse();
      }, pe.parseExpressionAt = function(r, n, c) {
        if (c.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        c.locations = !0;
        var l = new this(c, r, n);
        return s && (l.isAmbientContext = !0), l.nextToken(), l.parseExpression();
      }, f.parseImportSpecifier = function() {
        if (this.ts_isContextual(R.type)) {
          var r = this.startNode();
          return r.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(r, !0, this.importOrExportOuterKind === "type"), this.finishNode(r, "ImportSpecifier");
        }
        var n = _.prototype.parseImportSpecifier.call(this);
        return n.importKind = "value", n;
      }, f.parseExportSpecifier = function(r) {
        var n = this.ts_isContextual(R.type);
        if (!this.match(u.string) && n) {
          var c = this.startNode();
          return c.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(c, !1, this.importOrExportOuterKind === "type"), this.finishNode(c, "ExportSpecifier"), this.checkExport(r, c.exported, c.exported.start), c;
        }
        var l = _.prototype.parseExportSpecifier.call(this, r);
        return l.exportKind = "value", l;
      }, f.parseTypeOnlyImportExportSpecifier = function(r, n, c) {
        var l, m = n ? "imported" : "local", v = n ? "local" : "exported", x = r[m], b = !1, k = !0, T = x.start;
        if (this.isContextual("as")) {
          var N = this.parseIdent();
          if (this.isContextual("as")) {
            var V = this.parseIdent();
            gt(this.type) ? (b = !0, x = N, l = n ? this.parseIdent() : this.parseModuleExportName(), k = !1) : (l = V, k = !1);
          } else gt(this.type) ? (k = !1, l = n ? this.parseIdent() : this.parseModuleExportName()) : (b = !0, x = N);
        } else gt(this.type) && (b = !0, n ? (x = _.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(x)) : x = this.parseModuleExportName());
        b && c && this.raise(T, n ? I.TypeModifierIsUsedInTypeImports : I.TypeModifierIsUsedInTypeExports), r[m] = x, r[v] = l, r[n ? "importKind" : "exportKind"] = b ? "type" : "value", k && this.eatContextual("as") && (r[v] = n ? this.parseIdent() : this.parseModuleExportName()), r[v] || (r[v] = this.copyNode(r[m])), n && this.checkLValSimple(r[v], 2);
      }, f.raiseCommonCheck = function(r, n, c) {
        return n === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(u.comma) && this.lookaheadCharCode() === 41 ? void this.next() : _.prototype.raise.call(this, r, n) : c ? _.prototype.raiseRecoverable.call(this, r, n) : _.prototype.raise.call(this, r, n);
      }, f.raiseRecoverable = function(r, n) {
        return this.raiseCommonCheck(r, n, !0);
      }, f.raise = function(r, n) {
        return this.raiseCommonCheck(r, n, !0);
      }, f.updateContext = function(r) {
        var n = this.type;
        if (n == u.braceL) {
          var c = this.curContext();
          c == re.tc_oTag ? this.context.push(he.b_expr) : c == re.tc_expr ? this.context.push(he.b_tmpl) : _.prototype.updateContext.call(this, r), this.exprAllowed = !0;
        } else {
          if (n !== u.slash || r !== R.jsxTagStart) return _.prototype.updateContext.call(this, r);
          this.context.length -= 2, this.context.push(re.tc_cTag), this.exprAllowed = !1;
        }
      }, f.jsx_parseOpeningElementAt = function(r, n) {
        var c = this, l = this.startNodeAt(r, n), m = this.jsx_parseElementName();
        if (m && (l.name = m), this.match(u.relational) || this.match(u.bitShift)) {
          var v = this.tsTryParseAndCatch(function() {
            return c.tsParseTypeArgumentsInExpression();
          });
          v && (l.typeParameters = v);
        }
        for (l.attributes = []; this.type !== u.slash && this.type !== R.jsxTagEnd; ) l.attributes.push(this.jsx_parseAttribute());
        return l.selfClosing = this.eat(u.slash), this.expect(R.jsxTagEnd), this.finishNode(l, m ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, f.enterScope = function(r) {
        r === ut && this.importsStack.push([]), _.prototype.enterScope.call(this, r);
        var n = _.prototype.currentScope.call(this);
        n.types = [], n.enums = [], n.constEnums = [], n.classes = [], n.exportOnlyBindings = [];
      }, f.exitScope = function() {
        _.prototype.currentScope.call(this).flags === ut && this.importsStack.pop(), _.prototype.exitScope.call(this);
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
        return !!(0 & c) && (2 & c ? r.lexical.indexOf(n) > -1 || r.functions.indexOf(n) > -1 || r.var.indexOf(n) > -1 : 3 & c ? r.lexical.indexOf(n) > -1 || !_.prototype.treatFunctionsAsVarInScope.call(this, r) && r.var.indexOf(n) > -1 : r.lexical.indexOf(n) > -1 && !(32 & r.flags && r.lexical[0] === n) || !this.treatFunctionsAsVarInScope(r) && r.functions.indexOf(n) > -1);
      }, f.checkRedeclarationInScope = function(r, n, c, l) {
        this.isRedeclaredInScope(r, n, c) && this.raise(l, "Identifier '" + n + "' has already been declared.");
      }, f.declareName = function(r, n, c) {
        if (4096 & n) return this.hasImport(r, !0) && this.raise(c, "Identifier '" + r + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(r);
        var l = this.currentScope();
        if (1024 & n) return this.maybeExportDefined(l, r), void l.exportOnlyBindings.push(r);
        _.prototype.declareName.call(this, r, n, c), 0 & n && (0 & n || (this.checkRedeclarationInScope(l, r, n, c), this.maybeExportDefined(l, r)), l.types.push(r)), 256 & n && l.enums.push(r), 512 & n && l.constEnums.push(r), 128 & n && l.classes.push(r);
      }, f.checkLocalExport = function(r) {
        var n = r.name;
        if (!this.hasImport(n)) {
          for (var c = this.scopeStack.length - 1; c >= 0; c--) {
            var l = this.scopeStack[c];
            if (l.types.indexOf(n) > -1 || l.exportOnlyBindings.indexOf(n) > -1) return;
          }
          _.prototype.checkLocalExport.call(this, r);
        }
      }, ne = pe, $ = [{ key: "acornTypeScript", get: function() {
        return y;
      } }], (te = [{ key: "acornTypeScript", get: function() {
        return y;
      } }]) && zi(ne.prototype, te), $ && zi(ne, $), Object.defineProperty(ne, "prototype", { writable: !1 }), pe;
    })(h);
    return wr;
  };
}
const Pa = ["createObject", "dropObject", "removeRecords", "upsertRecords"], Aa = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"];
function S(e, t, i) {
  function s(d, y) {
    var u;
    Object.defineProperty(d, "_zod", {
      value: d._zod ?? {},
      enumerable: !1
    }), (u = d._zod).traits ?? (u.traits = /* @__PURE__ */ new Set()), d._zod.traits.add(e), t(d, y);
    for (const w in h.prototype)
      w in d || Object.defineProperty(d, w, { value: h.prototype[w].bind(d) });
    d._zod.constr = h, d._zod.def = y;
  }
  const a = i?.Parent ?? Object;
  class o extends a {
  }
  Object.defineProperty(o, "name", { value: e });
  function h(d) {
    var y;
    const u = i?.Parent ? new o() : this;
    s(u, d), (y = u._zod).deferred ?? (y.deferred = []);
    for (const w of u._zod.deferred)
      w();
    return u;
  }
  return Object.defineProperty(h, "init", { value: s }), Object.defineProperty(h, Symbol.hasInstance, {
    value: (d) => i?.Parent && d instanceof i.Parent ? !0 : d?._zod?.traits?.has(e)
  }), Object.defineProperty(h, "name", { value: e }), h;
}
class Xe extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Js extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Xs = {};
function ze(e) {
  return Xs;
}
function Ca(e) {
  const t = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e).filter(([i, s]) => t.indexOf(+i) === -1).map(([i, s]) => s);
}
function ai(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function vi(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function xi(e) {
  return e == null;
}
function gi(e) {
  const t = e.startsWith("^") ? 1 : 0, i = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, i);
}
function Ea(e, t) {
  const i = (e.toString().split(".")[1] || "").length, s = t.toString();
  let a = (s.split(".")[1] || "").length;
  if (a === 0 && /\d?e-\d?/.test(s)) {
    const y = s.match(/\d?e-(\d?)/);
    y?.[1] && (a = Number.parseInt(y[1]));
  }
  const o = i > a ? i : a, h = Number.parseInt(e.toFixed(o).replace(".", "")), d = Number.parseInt(t.toFixed(o).replace(".", ""));
  return h % d / 10 ** o;
}
const qi = Symbol("evaluating");
function Z(e, t, i) {
  let s;
  Object.defineProperty(e, t, {
    get() {
      if (s !== qi)
        return s === void 0 && (s = qi, s = i()), s;
    },
    set(a) {
      Object.defineProperty(e, t, {
        value: a
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function He(e, t, i) {
  Object.defineProperty(e, t, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function We(...e) {
  const t = {};
  for (const i of e) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(t, s);
  }
  return Object.defineProperties({}, t);
}
function Hi(e) {
  return JSON.stringify(e);
}
const Qs = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Ot(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Ia = vi(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function et(e) {
  if (Ot(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const i = t.prototype;
  return !(Ot(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function Ys(e) {
  return et(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Na = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function tt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function $e(e, t, i) {
  const s = new e._zod.constr(t ?? e._zod.def);
  return (!t || i?.parent) && (s._zod.parent = e), s;
}
function O(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function La(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Oa = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Ma(e, t) {
  const i = e._zod.def, s = We(e._zod.def, {
    get shape() {
      const a = {};
      for (const o in t) {
        if (!(o in i.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        t[o] && (a[o] = i.shape[o]);
      }
      return He(this, "shape", a), a;
    },
    checks: []
  });
  return $e(e, s);
}
function Ra(e, t) {
  const i = e._zod.def, s = We(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape };
      for (const o in t) {
        if (!(o in i.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        t[o] && delete a[o];
      }
      return He(this, "shape", a), a;
    },
    checks: []
  });
  return $e(e, s);
}
function Da(e, t) {
  if (!et(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = e._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const s = We(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape, ...t };
      return He(this, "shape", a), a;
    },
    checks: []
  });
  return $e(e, s);
}
function Va(e, t) {
  if (!et(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...e._zod.def,
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return He(this, "shape", s), s;
    },
    checks: e._zod.def.checks
  };
  return $e(e, i);
}
function za(e, t) {
  const i = We(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t._zod.def.shape };
      return He(this, "shape", s), s;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return $e(e, i);
}
function Fa(e, t, i) {
  const s = We(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, o = { ...a };
      if (i)
        for (const h in i) {
          if (!(h in a))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (o[h] = e ? new e({
            type: "optional",
            innerType: a[h]
          }) : a[h]);
        }
      else
        for (const h in a)
          o[h] = e ? new e({
            type: "optional",
            innerType: a[h]
          }) : a[h];
      return He(this, "shape", o), o;
    },
    checks: []
  });
  return $e(t, s);
}
function ja(e, t, i) {
  const s = We(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, o = { ...a };
      if (i)
        for (const h in i) {
          if (!(h in o))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (o[h] = new e({
            type: "nonoptional",
            innerType: a[h]
          }));
        }
      else
        for (const h in a)
          o[h] = new e({
            type: "nonoptional",
            innerType: a[h]
          });
      return He(this, "shape", o), o;
    },
    checks: []
  });
  return $e(t, s);
}
function Ge(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let i = t; i < e.issues.length; i++)
    if (e.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function Je(e, t) {
  return t.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(e), i;
  });
}
function wt(e) {
  return typeof e == "string" ? e : e?.message;
}
function Fe(e, t, i) {
  const s = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const a = wt(e.inst?._zod.def?.error?.(e)) ?? wt(t?.error?.(e)) ?? wt(i.customError?.(e)) ?? wt(i.localeError?.(e)) ?? "Invalid input";
    s.message = a;
  }
  return delete s.inst, delete s.continue, t?.reportInput || delete s.input, s;
}
function bi(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function ft(...e) {
  const [t, i, s] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: i,
    inst: s
  } : { ...t };
}
const er = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, ai, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, tr = S("$ZodError", er), ir = S("$ZodError", er, { Parent: Error });
function Ba(e, t = (i) => i.message) {
  const i = {}, s = [];
  for (const a of e.issues)
    a.path.length > 0 ? (i[a.path[0]] = i[a.path[0]] || [], i[a.path[0]].push(t(a))) : s.push(t(a));
  return { formErrors: s, fieldErrors: i };
}
function $a(e, t = (i) => i.message) {
  const i = { _errors: [] }, s = (a) => {
    for (const o of a.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((h) => s({ issues: h }));
      else if (o.code === "invalid_key")
        s({ issues: o.issues });
      else if (o.code === "invalid_element")
        s({ issues: o.issues });
      else if (o.path.length === 0)
        i._errors.push(t(o));
      else {
        let h = i, d = 0;
        for (; d < o.path.length; ) {
          const y = o.path[d];
          d === o.path.length - 1 ? (h[y] = h[y] || { _errors: [] }, h[y]._errors.push(t(o))) : h[y] = h[y] || { _errors: [] }, h = h[y], d++;
        }
      }
  };
  return s(e), i;
}
const ki = (e) => (t, i, s, a) => {
  const o = s ? Object.assign(s, { async: !1 }) : { async: !1 }, h = t._zod.run({ value: i, issues: [] }, o);
  if (h instanceof Promise)
    throw new Xe();
  if (h.issues.length) {
    const d = new (a?.Err ?? e)(h.issues.map((y) => Fe(y, o, ze())));
    throw Qs(d, a?.callee), d;
  }
  return h.value;
}, Si = (e) => async (t, i, s, a) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let h = t._zod.run({ value: i, issues: [] }, o);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const d = new (a?.Err ?? e)(h.issues.map((y) => Fe(y, o, ze())));
    throw Qs(d, a?.callee), d;
  }
  return h.value;
}, Bt = (e) => (t, i, s) => {
  const a = s ? { ...s, async: !1 } : { async: !1 }, o = t._zod.run({ value: i, issues: [] }, a);
  if (o instanceof Promise)
    throw new Xe();
  return o.issues.length ? {
    success: !1,
    error: new (e ?? tr)(o.issues.map((h) => Fe(h, a, ze())))
  } : { success: !0, data: o.value };
}, Ua = /* @__PURE__ */ Bt(ir), $t = (e) => async (t, i, s) => {
  const a = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let o = t._zod.run({ value: i, issues: [] }, a);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new e(o.issues.map((h) => Fe(h, a, ze())))
  } : { success: !0, data: o.value };
}, Za = /* @__PURE__ */ $t(ir), qa = (e) => (t, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ki(e)(t, i, a);
}, Ha = (e) => (t, i, s) => ki(e)(t, i, s), Wa = (e) => async (t, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Si(e)(t, i, a);
}, Ka = (e) => async (t, i, s) => Si(e)(t, i, s), Ga = (e) => (t, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Bt(e)(t, i, a);
}, Ja = (e) => (t, i, s) => Bt(e)(t, i, s), Xa = (e) => async (t, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return $t(e)(t, i, a);
}, Qa = (e) => async (t, i, s) => $t(e)(t, i, s), Ya = /^[cC][^\s-]{8,}$/, en = /^[0-9a-z]+$/, tn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, sn = /^[0-9a-vA-V]{20}$/, rn = /^[A-Za-z0-9]{27}$/, an = /^[a-zA-Z0-9_-]{21}$/, nn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, on = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Wi = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, un = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, cn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function hn() {
  return new RegExp(cn, "u");
}
const pn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ln = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, fn = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, dn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, mn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, sr = /^[A-Za-z0-9_-]*$/, yn = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, vn = /^\+(?:[0-9]){6,14}[0-9]$/, rr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", xn = /* @__PURE__ */ new RegExp(`^${rr}$`);
function ar(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function gn(e) {
  return new RegExp(`^${ar(e)}$`);
}
function bn(e) {
  const t = ar({ precision: e.precision }), i = ["Z"];
  e.local && i.push(""), e.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${t}(?:${i.join("|")})`;
  return new RegExp(`^${rr}T(?:${s})$`);
}
const kn = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Sn = /^-?\d+$/, wn = /^-?\d+(?:\.\d+)?/, Tn = /^(?:true|false)$/i, _n = /^[^A-Z]*$/, Pn = /^[^a-z]*$/, fe = /* @__PURE__ */ S("$ZodCheck", (e, t) => {
  var i;
  e._zod ?? (e._zod = {}), e._zod.def = t, (i = e._zod).onattach ?? (i.onattach = []);
}), nr = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, or = /* @__PURE__ */ S("$ZodCheckLessThan", (e, t) => {
  fe.init(e, t);
  const i = nr[typeof t.value];
  e._zod.onattach.push((s) => {
    const a = s._zod.bag, o = (t.inclusive ? a.maximum : a.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < o && (t.inclusive ? a.maximum = t.value : a.exclusiveMaximum = t.value);
  }), e._zod.check = (s) => {
    (t.inclusive ? s.value <= t.value : s.value < t.value) || s.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.value,
      input: s.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), ur = /* @__PURE__ */ S("$ZodCheckGreaterThan", (e, t) => {
  fe.init(e, t);
  const i = nr[typeof t.value];
  e._zod.onattach.push((s) => {
    const a = s._zod.bag, o = (t.inclusive ? a.minimum : a.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > o && (t.inclusive ? a.minimum = t.value : a.exclusiveMinimum = t.value);
  }), e._zod.check = (s) => {
    (t.inclusive ? s.value >= t.value : s.value > t.value) || s.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.value,
      input: s.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), An = /* @__PURE__ */ S("$ZodCheckMultipleOf", (e, t) => {
  fe.init(e, t), e._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = t.value);
  }), e._zod.check = (i) => {
    if (typeof i.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % t.value === BigInt(0) : Ea(i.value, t.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Cn = /* @__PURE__ */ S("$ZodCheckNumberFormat", (e, t) => {
  fe.init(e, t), t.format = t.format || "float64";
  const i = t.format?.includes("int"), s = i ? "int" : "number", [a, o] = Oa[t.format];
  e._zod.onattach.push((h) => {
    const d = h._zod.bag;
    d.format = t.format, d.minimum = a, d.maximum = o, i && (d.pattern = Sn);
  }), e._zod.check = (h) => {
    const d = h.value;
    if (i) {
      if (!Number.isInteger(d)) {
        h.issues.push({
          expected: s,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: d,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(d)) {
        d > 0 ? h.issues.push({
          input: d,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: s,
          continue: !t.abort
        }) : h.issues.push({
          input: d,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: s,
          continue: !t.abort
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
      inst: e,
      continue: !t.abort
    }), d > o && h.issues.push({
      origin: "number",
      input: d,
      code: "too_big",
      maximum: o,
      inst: e
    });
  };
}), En = /* @__PURE__ */ S("$ZodCheckMaxLength", (e, t) => {
  var i;
  fe.init(e, t), (i = e._zod.def).when ?? (i.when = (s) => {
    const a = s.value;
    return !xi(a) && a.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const a = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < a && (s._zod.bag.maximum = t.maximum);
  }), e._zod.check = (s) => {
    const a = s.value;
    if (a.length <= t.maximum)
      return;
    const o = bi(a);
    s.issues.push({
      origin: o,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: a,
      inst: e,
      continue: !t.abort
    });
  };
}), In = /* @__PURE__ */ S("$ZodCheckMinLength", (e, t) => {
  var i;
  fe.init(e, t), (i = e._zod.def).when ?? (i.when = (s) => {
    const a = s.value;
    return !xi(a) && a.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const a = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > a && (s._zod.bag.minimum = t.minimum);
  }), e._zod.check = (s) => {
    const a = s.value;
    if (a.length >= t.minimum)
      return;
    const o = bi(a);
    s.issues.push({
      origin: o,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: a,
      inst: e,
      continue: !t.abort
    });
  };
}), Nn = /* @__PURE__ */ S("$ZodCheckLengthEquals", (e, t) => {
  var i;
  fe.init(e, t), (i = e._zod.def).when ?? (i.when = (s) => {
    const a = s.value;
    return !xi(a) && a.length !== void 0;
  }), e._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.minimum = t.length, a.maximum = t.length, a.length = t.length;
  }), e._zod.check = (s) => {
    const a = s.value, o = a.length;
    if (o === t.length)
      return;
    const h = bi(a), d = o > t.length;
    s.issues.push({
      origin: h,
      ...d ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ut = /* @__PURE__ */ S("$ZodCheckStringFormat", (e, t) => {
  var i, s;
  fe.init(e, t), e._zod.onattach.push((a) => {
    const o = a._zod.bag;
    o.format = t.format, t.pattern && (o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t.pattern));
  }), t.pattern ? (i = e._zod).check ?? (i.check = (a) => {
    t.pattern.lastIndex = 0, !t.pattern.test(a.value) && a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: a.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (s = e._zod).check ?? (s.check = () => {
  });
}), Ln = /* @__PURE__ */ S("$ZodCheckRegex", (e, t) => {
  Ut.init(e, t), e._zod.check = (i) => {
    t.pattern.lastIndex = 0, !t.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), On = /* @__PURE__ */ S("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = _n), Ut.init(e, t);
}), Mn = /* @__PURE__ */ S("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Pn), Ut.init(e, t);
}), Rn = /* @__PURE__ */ S("$ZodCheckIncludes", (e, t) => {
  fe.init(e, t);
  const i = tt(t.includes), s = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${i}` : i);
  t.pattern = s, e._zod.onattach.push((a) => {
    const o = a._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(s);
  }), e._zod.check = (a) => {
    a.value.includes(t.includes, t.position) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: a.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Dn = /* @__PURE__ */ S("$ZodCheckStartsWith", (e, t) => {
  fe.init(e, t);
  const i = new RegExp(`^${tt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = i), e._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(i);
  }), e._zod.check = (s) => {
    s.value.startsWith(t.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Vn = /* @__PURE__ */ S("$ZodCheckEndsWith", (e, t) => {
  fe.init(e, t);
  const i = new RegExp(`.*${tt(t.suffix)}$`);
  t.pattern ?? (t.pattern = i), e._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(i);
  }), e._zod.check = (s) => {
    s.value.endsWith(t.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), zn = /* @__PURE__ */ S("$ZodCheckOverwrite", (e, t) => {
  fe.init(e, t), e._zod.check = (i) => {
    i.value = t.tx(i.value);
  };
});
class Fn {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const i = t.split(`
`).filter((o) => o), s = Math.min(...i.map((o) => o.length - o.trimStart().length)), a = i.map((o) => o.slice(s)).map((o) => " ".repeat(this.indent * 2) + o);
    for (const o of a)
      this.content.push(o);
  }
  compile() {
    const t = Function, i = this?.args, s = [...(this?.content ?? [""]).map((a) => `  ${a}`)];
    return new t(...i, s.join(`
`));
  }
}
const jn = {
  major: 4,
  minor: 1,
  patch: 12
}, Q = /* @__PURE__ */ S("$ZodType", (e, t) => {
  var i;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = jn;
  const s = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && s.unshift(e);
  for (const a of s)
    for (const o of a._zod.onattach)
      o(e);
  if (s.length === 0)
    (i = e._zod).deferred ?? (i.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const a = (h, d, y) => {
      let u = Ge(h), w;
      for (const P of d) {
        if (P._zod.def.when) {
          if (!P._zod.def.when(h))
            continue;
        } else if (u)
          continue;
        const M = h.issues.length, U = P._zod.check(h);
        if (U instanceof Promise && y?.async === !1)
          throw new Xe();
        if (w || U instanceof Promise)
          w = (w ?? Promise.resolve()).then(async () => {
            await U, h.issues.length !== M && (u || (u = Ge(h, M)));
          });
        else {
          if (h.issues.length === M)
            continue;
          u || (u = Ge(h, M));
        }
      }
      return w ? w.then(() => h) : h;
    }, o = (h, d, y) => {
      if (Ge(h))
        return h.aborted = !0, h;
      const u = a(d, s, y);
      if (u instanceof Promise) {
        if (y.async === !1)
          throw new Xe();
        return u.then((w) => e._zod.parse(w, y));
      }
      return e._zod.parse(u, y);
    };
    e._zod.run = (h, d) => {
      if (d.skipChecks)
        return e._zod.parse(h, d);
      if (d.direction === "backward") {
        const u = e._zod.parse({ value: h.value, issues: [] }, { ...d, skipChecks: !0 });
        return u instanceof Promise ? u.then((w) => o(w, h, d)) : o(u, h, d);
      }
      const y = e._zod.parse(h, d);
      if (y instanceof Promise) {
        if (d.async === !1)
          throw new Xe();
        return y.then((u) => a(u, s, d));
      }
      return a(y, s, d);
    };
  }
  e["~standard"] = {
    validate: (a) => {
      try {
        const o = Ua(e, a);
        return o.success ? { value: o.data } : { issues: o.error?.issues };
      } catch {
        return Za(e, a).then((o) => o.success ? { value: o.data } : { issues: o.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), wi = /* @__PURE__ */ S("$ZodString", (e, t) => {
  Q.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? kn(e._zod.bag), e._zod.parse = (i, s) => {
    if (t.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: e
    }), i;
  };
}), K = /* @__PURE__ */ S("$ZodStringFormat", (e, t) => {
  Ut.init(e, t), wi.init(e, t);
}), Bn = /* @__PURE__ */ S("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = on), K.init(e, t);
}), $n = /* @__PURE__ */ S("$ZodUUID", (e, t) => {
  if (t.version) {
    const i = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (i === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Wi(i));
  } else
    t.pattern ?? (t.pattern = Wi());
  K.init(e, t);
}), Un = /* @__PURE__ */ S("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = un), K.init(e, t);
}), Zn = /* @__PURE__ */ S("$ZodURL", (e, t) => {
  K.init(e, t), e._zod.check = (i) => {
    try {
      const s = i.value.trim(), a = new URL(s);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(a.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: yn.source,
        input: i.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(a.protocol.endsWith(":") ? a.protocol.slice(0, -1) : a.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: i.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? i.value = a.href : i.value = s;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), qn = /* @__PURE__ */ S("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = hn()), K.init(e, t);
}), Hn = /* @__PURE__ */ S("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = an), K.init(e, t);
}), Wn = /* @__PURE__ */ S("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Ya), K.init(e, t);
}), Kn = /* @__PURE__ */ S("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = en), K.init(e, t);
}), Gn = /* @__PURE__ */ S("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = tn), K.init(e, t);
}), Jn = /* @__PURE__ */ S("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = sn), K.init(e, t);
}), Xn = /* @__PURE__ */ S("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = rn), K.init(e, t);
}), Qn = /* @__PURE__ */ S("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = bn(t)), K.init(e, t);
}), Yn = /* @__PURE__ */ S("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = xn), K.init(e, t);
}), eo = /* @__PURE__ */ S("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = gn(t)), K.init(e, t);
}), to = /* @__PURE__ */ S("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = nn), K.init(e, t);
}), io = /* @__PURE__ */ S("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = pn), K.init(e, t), e._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), so = /* @__PURE__ */ S("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = ln), K.init(e, t), e._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv6";
  }), e._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ro = /* @__PURE__ */ S("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = fn), K.init(e, t);
}), ao = /* @__PURE__ */ S("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = dn), K.init(e, t), e._zod.check = (i) => {
    const s = i.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [a, o] = s;
      if (!o)
        throw new Error();
      const h = Number(o);
      if (`${h}` !== o)
        throw new Error();
      if (h < 0 || h > 128)
        throw new Error();
      new URL(`http://[${a}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function cr(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const no = /* @__PURE__ */ S("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = mn), K.init(e, t), e._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (i) => {
    cr(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function oo(e) {
  if (!sr.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return cr(i);
}
const uo = /* @__PURE__ */ S("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = sr), K.init(e, t), e._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (i) => {
    oo(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), co = /* @__PURE__ */ S("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = vn), K.init(e, t);
});
function ho(e, t = null) {
  try {
    const i = e.split(".");
    if (i.length !== 3)
      return !1;
    const [s] = i;
    if (!s)
      return !1;
    const a = JSON.parse(atob(s));
    return !("typ" in a && a?.typ !== "JWT" || !a.alg || t && (!("alg" in a) || a.alg !== t));
  } catch {
    return !1;
  }
}
const po = /* @__PURE__ */ S("$ZodJWT", (e, t) => {
  K.init(e, t), e._zod.check = (i) => {
    ho(i.value, t.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), hr = /* @__PURE__ */ S("$ZodNumber", (e, t) => {
  Q.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? wn, e._zod.parse = (i, s) => {
    if (t.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const a = i.value;
    if (typeof a == "number" && !Number.isNaN(a) && Number.isFinite(a))
      return i;
    const o = typeof a == "number" ? Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: a,
      inst: e,
      ...o ? { received: o } : {}
    }), i;
  };
}), lo = /* @__PURE__ */ S("$ZodNumber", (e, t) => {
  Cn.init(e, t), hr.init(e, t);
}), fo = /* @__PURE__ */ S("$ZodBoolean", (e, t) => {
  Q.init(e, t), e._zod.pattern = Tn, e._zod.parse = (i, s) => {
    if (t.coerce)
      try {
        i.value = !!i.value;
      } catch {
      }
    const a = i.value;
    return typeof a == "boolean" || i.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: a,
      inst: e
    }), i;
  };
}), mo = /* @__PURE__ */ S("$ZodUnknown", (e, t) => {
  Q.init(e, t), e._zod.parse = (i) => i;
}), yo = /* @__PURE__ */ S("$ZodNever", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: e
  }), i);
});
function Ki(e, t, i) {
  e.issues.length && t.issues.push(...Je(i, e.issues)), t.value[i] = e.value;
}
const vo = /* @__PURE__ */ S("$ZodArray", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, s) => {
    const a = i.value;
    if (!Array.isArray(a))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: a,
        inst: e
      }), i;
    i.value = Array(a.length);
    const o = [];
    for (let h = 0; h < a.length; h++) {
      const d = a[h], y = t.element._zod.run({
        value: d,
        issues: []
      }, s);
      y instanceof Promise ? o.push(y.then((u) => Ki(u, i, h))) : Ki(y, i, h);
    }
    return o.length ? Promise.all(o).then(() => i) : i;
  };
});
function Mt(e, t, i, s) {
  e.issues.length && t.issues.push(...Je(i, e.issues)), e.value === void 0 ? i in s && (t.value[i] = void 0) : t.value[i] = e.value;
}
function pr(e) {
  const t = Object.keys(e.shape);
  for (const s of t)
    if (!e.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = La(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(i)
  };
}
function lr(e, t, i, s, a, o) {
  const h = [], d = a.keySet, y = a.catchall._zod, u = y.def.type;
  for (const w of Object.keys(t)) {
    if (d.has(w))
      continue;
    if (u === "never") {
      h.push(w);
      continue;
    }
    const P = y.run({ value: t[w], issues: [] }, s);
    P instanceof Promise ? e.push(P.then((M) => Mt(M, i, w, t))) : Mt(P, i, w, t);
  }
  return h.length && i.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: t,
    inst: o
  }), e.length ? Promise.all(e).then(() => i) : i;
}
const xo = /* @__PURE__ */ S("$ZodObject", (e, t) => {
  if (Q.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const h = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const d = { ...h };
        return Object.defineProperty(t, "shape", {
          value: d
        }), d;
      }
    });
  }
  const i = vi(() => pr(t));
  Z(e._zod, "propValues", () => {
    const h = t.shape, d = {};
    for (const y in h) {
      const u = h[y]._zod;
      if (u.values) {
        d[y] ?? (d[y] = /* @__PURE__ */ new Set());
        for (const w of u.values)
          d[y].add(w);
      }
    }
    return d;
  });
  const s = Ot, a = t.catchall;
  let o;
  e._zod.parse = (h, d) => {
    o ?? (o = i.value);
    const y = h.value;
    if (!s(y))
      return h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: y,
        inst: e
      }), h;
    h.value = {};
    const u = [], w = o.shape;
    for (const P of o.keys) {
      const M = w[P]._zod.run({ value: y[P], issues: [] }, d);
      M instanceof Promise ? u.push(M.then((U) => Mt(U, h, P, y))) : Mt(M, h, P, y);
    }
    return a ? lr(u, y, h, d, i.value, e) : u.length ? Promise.all(u).then(() => h) : h;
  };
}), go = /* @__PURE__ */ S("$ZodObjectJIT", (e, t) => {
  xo.init(e, t);
  const i = e._zod.parse, s = vi(() => pr(t)), a = (P) => {
    const M = new Fn(["shape", "payload", "ctx"]), U = s.value, he = (de) => {
      const ge = Hi(de);
      return `shape[${ge}]._zod.run({ value: input[${ge}], issues: [] }, ctx)`;
    };
    M.write("const input = payload.value;");
    const Ee = /* @__PURE__ */ Object.create(null);
    let R = 0;
    for (const de of U.keys)
      Ee[de] = `key_${R++}`;
    M.write("const newResult = {};");
    for (const de of U.keys) {
      const ge = Ee[de], Ue = Hi(de);
      M.write(`const ${ge} = ${he(de)};`), M.write(`
        if (${ge}.issues.length) {
          payload.issues = payload.issues.concat(${ge}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Ue}, ...iss.path] : [${Ue}]
          })));
        }
        
        
        if (${ge}.value === undefined) {
          if (${Ue} in input) {
            newResult[${Ue}] = undefined;
          }
        } else {
          newResult[${Ue}] = ${ge}.value;
        }
        
      `);
    }
    M.write("payload.value = newResult;"), M.write("return payload;");
    const re = M.compile();
    return (de, ge) => re(P, de, ge);
  };
  let o;
  const h = Ot, d = !Xs.jitless, y = d && Ia.value, u = t.catchall;
  let w;
  e._zod.parse = (P, M) => {
    w ?? (w = s.value);
    const U = P.value;
    return h(U) ? d && y && M?.async === !1 && M.jitless !== !0 ? (o || (o = a(t.shape)), P = o(P, M), u ? lr([], U, P, M, w, e) : P) : i(P, M) : (P.issues.push({
      expected: "object",
      code: "invalid_type",
      input: U,
      inst: e
    }), P);
  };
});
function Gi(e, t, i, s) {
  for (const o of e)
    if (o.issues.length === 0)
      return t.value = o.value, t;
  const a = e.filter((o) => !Ge(o));
  return a.length === 1 ? (t.value = a[0].value, a[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: i,
    errors: e.map((o) => o.issues.map((h) => Fe(h, s, ze())))
  }), t);
}
const bo = /* @__PURE__ */ S("$ZodUnion", (e, t) => {
  Q.init(e, t), Z(e._zod, "optin", () => t.options.some((a) => a._zod.optin === "optional") ? "optional" : void 0), Z(e._zod, "optout", () => t.options.some((a) => a._zod.optout === "optional") ? "optional" : void 0), Z(e._zod, "values", () => {
    if (t.options.every((a) => a._zod.values))
      return new Set(t.options.flatMap((a) => Array.from(a._zod.values)));
  }), Z(e._zod, "pattern", () => {
    if (t.options.every((a) => a._zod.pattern)) {
      const a = t.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${a.map((o) => gi(o.source)).join("|")})$`);
    }
  });
  const i = t.options.length === 1, s = t.options[0]._zod.run;
  e._zod.parse = (a, o) => {
    if (i)
      return s(a, o);
    let h = !1;
    const d = [];
    for (const y of t.options) {
      const u = y._zod.run({
        value: a.value,
        issues: []
      }, o);
      if (u instanceof Promise)
        d.push(u), h = !0;
      else {
        if (u.issues.length === 0)
          return u;
        d.push(u);
      }
    }
    return h ? Promise.all(d).then((y) => Gi(y, a, e, o)) : Gi(d, a, e, o);
  };
}), ko = /* @__PURE__ */ S("$ZodIntersection", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, s) => {
    const a = i.value, o = t.left._zod.run({ value: a, issues: [] }, s), h = t.right._zod.run({ value: a, issues: [] }, s);
    return o instanceof Promise || h instanceof Promise ? Promise.all([o, h]).then(([d, y]) => Ji(i, d, y)) : Ji(i, o, h);
  };
});
function ni(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (et(e) && et(t)) {
    const i = Object.keys(t), s = Object.keys(e).filter((o) => i.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of s) {
      const h = ni(e[o], t[o]);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...h.mergeErrorPath]
        };
      a[o] = h.data;
    }
    return { valid: !0, data: a };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s], o = t[s], h = ni(a, o);
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
function Ji(e, t, i) {
  if (t.issues.length && e.issues.push(...t.issues), i.issues.length && e.issues.push(...i.issues), Ge(e))
    return e;
  const s = ni(t.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const So = /* @__PURE__ */ S("$ZodRecord", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, s) => {
    const a = i.value;
    if (!et(a))
      return i.issues.push({
        expected: "record",
        code: "invalid_type",
        input: a,
        inst: e
      }), i;
    const o = [];
    if (t.keyType._zod.values) {
      const h = t.keyType._zod.values;
      i.value = {};
      for (const y of h)
        if (typeof y == "string" || typeof y == "number" || typeof y == "symbol") {
          const u = t.valueType._zod.run({ value: a[y], issues: [] }, s);
          u instanceof Promise ? o.push(u.then((w) => {
            w.issues.length && i.issues.push(...Je(y, w.issues)), i.value[y] = w.value;
          })) : (u.issues.length && i.issues.push(...Je(y, u.issues)), i.value[y] = u.value);
        }
      let d;
      for (const y in a)
        h.has(y) || (d = d ?? [], d.push(y));
      d && d.length > 0 && i.issues.push({
        code: "unrecognized_keys",
        input: a,
        inst: e,
        keys: d
      });
    } else {
      i.value = {};
      for (const h of Reflect.ownKeys(a)) {
        if (h === "__proto__")
          continue;
        const d = t.keyType._zod.run({ value: h, issues: [] }, s);
        if (d instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (d.issues.length) {
          i.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: d.issues.map((u) => Fe(u, s, ze())),
            input: h,
            path: [h],
            inst: e
          }), i.value[d.value] = d.value;
          continue;
        }
        const y = t.valueType._zod.run({ value: a[h], issues: [] }, s);
        y instanceof Promise ? o.push(y.then((u) => {
          u.issues.length && i.issues.push(...Je(h, u.issues)), i.value[d.value] = u.value;
        })) : (y.issues.length && i.issues.push(...Je(h, y.issues)), i.value[d.value] = y.value);
      }
    }
    return o.length ? Promise.all(o).then(() => i) : i;
  };
}), wo = /* @__PURE__ */ S("$ZodEnum", (e, t) => {
  Q.init(e, t);
  const i = Ca(t.entries), s = new Set(i);
  e._zod.values = s, e._zod.pattern = new RegExp(`^(${i.filter((a) => Na.has(typeof a)).map((a) => typeof a == "string" ? tt(a) : a.toString()).join("|")})$`), e._zod.parse = (a, o) => {
    const h = a.value;
    return s.has(h) || a.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: e
    }), a;
  };
}), To = /* @__PURE__ */ S("$ZodLiteral", (e, t) => {
  if (Q.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map((i) => typeof i == "string" ? tt(i) : i ? tt(i.toString()) : String(i)).join("|")})$`), e._zod.parse = (i, s) => {
    const a = i.value;
    return e._zod.values.has(a) || i.issues.push({
      code: "invalid_value",
      values: t.values,
      input: a,
      inst: e
    }), i;
  };
}), _o = /* @__PURE__ */ S("$ZodTransform", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new Js(e.constructor.name);
    const a = t.transform(i.value, i);
    if (s.async)
      return (a instanceof Promise ? a : Promise.resolve(a)).then((o) => (i.value = o, i));
    if (a instanceof Promise)
      throw new Xe();
    return i.value = a, i;
  };
});
function Xi(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Po = /* @__PURE__ */ S("$ZodOptional", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), Z(e._zod, "pattern", () => {
    const i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${gi(i.source)})?$`) : void 0;
  }), e._zod.parse = (i, s) => {
    if (t.innerType._zod.optin === "optional") {
      const a = t.innerType._zod.run(i, s);
      return a instanceof Promise ? a.then((o) => Xi(o, i.value)) : Xi(a, i.value);
    }
    return i.value === void 0 ? i : t.innerType._zod.run(i, s);
  };
}), Ao = /* @__PURE__ */ S("$ZodNullable", (e, t) => {
  Q.init(e, t), Z(e._zod, "optin", () => t.innerType._zod.optin), Z(e._zod, "optout", () => t.innerType._zod.optout), Z(e._zod, "pattern", () => {
    const i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${gi(i.source)}|null)$`) : void 0;
  }), Z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (i, s) => i.value === null ? i : t.innerType._zod.run(i, s);
}), Co = /* @__PURE__ */ S("$ZodDefault", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", Z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return t.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = t.defaultValue, i;
    const a = t.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then((o) => Qi(o, t)) : Qi(a, t);
  };
});
function Qi(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Eo = /* @__PURE__ */ S("$ZodPrefault", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", Z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = t.defaultValue), t.innerType._zod.run(i, s));
}), Io = /* @__PURE__ */ S("$ZodNonOptional", (e, t) => {
  Q.init(e, t), Z(e._zod, "values", () => {
    const i = t.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), e._zod.parse = (i, s) => {
    const a = t.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then((o) => Yi(o, e)) : Yi(a, e);
  };
});
function Yi(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const No = /* @__PURE__ */ S("$ZodCatch", (e, t) => {
  Q.init(e, t), Z(e._zod, "optin", () => t.innerType._zod.optin), Z(e._zod, "optout", () => t.innerType._zod.optout), Z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return t.innerType._zod.run(i, s);
    const a = t.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then((o) => (i.value = o.value, o.issues.length && (i.value = t.catchValue({
      ...i,
      error: {
        issues: o.issues.map((h) => Fe(h, s, ze()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = a.value, a.issues.length && (i.value = t.catchValue({
      ...i,
      error: {
        issues: a.issues.map((o) => Fe(o, s, ze()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), Lo = /* @__PURE__ */ S("$ZodPipe", (e, t) => {
  Q.init(e, t), Z(e._zod, "values", () => t.in._zod.values), Z(e._zod, "optin", () => t.in._zod.optin), Z(e._zod, "optout", () => t.out._zod.optout), Z(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const o = t.out._zod.run(i, s);
      return o instanceof Promise ? o.then((h) => Tt(h, t.in, s)) : Tt(o, t.in, s);
    }
    const a = t.in._zod.run(i, s);
    return a instanceof Promise ? a.then((o) => Tt(o, t.out, s)) : Tt(a, t.out, s);
  };
});
function Tt(e, t, i) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, i);
}
const Oo = /* @__PURE__ */ S("$ZodReadonly", (e, t) => {
  Q.init(e, t), Z(e._zod, "propValues", () => t.innerType._zod.propValues), Z(e._zod, "values", () => t.innerType._zod.values), Z(e._zod, "optin", () => t.innerType._zod.optin), Z(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return t.innerType._zod.run(i, s);
    const a = t.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then(es) : es(a);
  };
});
function es(e) {
  return e.value = Object.freeze(e.value), e;
}
const Mo = /* @__PURE__ */ S("$ZodCustom", (e, t) => {
  fe.init(e, t), Q.init(e, t), e._zod.parse = (i, s) => i, e._zod.check = (i) => {
    const s = i.value, a = t.fn(s);
    if (a instanceof Promise)
      return a.then((o) => ts(o, i, s, e));
    ts(a, i, s, e);
  };
});
function ts(e, t, i, s) {
  if (!e) {
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
    s._zod.def.params && (a.params = s._zod.def.params), t.issues.push(ft(a));
  }
}
class Ro {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...i) {
    const s = i[0];
    if (this._map.set(t, s), s && typeof s == "object" && "id" in s) {
      if (this._idmap.has(s.id))
        throw new Error(`ID ${s.id} already exists in the registry`);
      this._idmap.set(s.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const i = this._map.get(t);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(t), this;
  }
  get(t) {
    const i = t._zod.parent;
    if (i) {
      const s = { ...this.get(i) ?? {} };
      delete s.id;
      const a = { ...s, ...this._map.get(t) };
      return Object.keys(a).length ? a : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Do() {
  return new Ro();
}
const _t = /* @__PURE__ */ Do();
function Vo(e, t) {
  return new e({
    type: "string",
    ...O(t)
  });
}
function zo(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function is(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Fo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function jo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...O(t)
  });
}
function Bo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...O(t)
  });
}
function $o(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...O(t)
  });
}
function Uo(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Zo(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function qo(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Ho(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Wo(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Ko(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Go(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Jo(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Xo(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Qo(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Yo(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function eu(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function tu(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function iu(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function su(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function ru(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function au(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...O(t)
  });
}
function nu(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...O(t)
  });
}
function ou(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...O(t)
  });
}
function uu(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...O(t)
  });
}
function cu(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...O(t)
  });
}
function hu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...O(t)
  });
}
function pu(e, t) {
  return new e({
    type: "boolean",
    ...O(t)
  });
}
function lu(e) {
  return new e({
    type: "unknown"
  });
}
function fu(e, t) {
  return new e({
    type: "never",
    ...O(t)
  });
}
function ss(e, t) {
  return new or({
    check: "less_than",
    ...O(t),
    value: e,
    inclusive: !1
  });
}
function Qt(e, t) {
  return new or({
    check: "less_than",
    ...O(t),
    value: e,
    inclusive: !0
  });
}
function rs(e, t) {
  return new ur({
    check: "greater_than",
    ...O(t),
    value: e,
    inclusive: !1
  });
}
function Yt(e, t) {
  return new ur({
    check: "greater_than",
    ...O(t),
    value: e,
    inclusive: !0
  });
}
function as(e, t) {
  return new An({
    check: "multiple_of",
    ...O(t),
    value: e
  });
}
function fr(e, t) {
  return new En({
    check: "max_length",
    ...O(t),
    maximum: e
  });
}
function Rt(e, t) {
  return new In({
    check: "min_length",
    ...O(t),
    minimum: e
  });
}
function dr(e, t) {
  return new Nn({
    check: "length_equals",
    ...O(t),
    length: e
  });
}
function du(e, t) {
  return new Ln({
    check: "string_format",
    format: "regex",
    ...O(t),
    pattern: e
  });
}
function mu(e) {
  return new On({
    check: "string_format",
    format: "lowercase",
    ...O(e)
  });
}
function yu(e) {
  return new Mn({
    check: "string_format",
    format: "uppercase",
    ...O(e)
  });
}
function vu(e, t) {
  return new Rn({
    check: "string_format",
    format: "includes",
    ...O(t),
    includes: e
  });
}
function xu(e, t) {
  return new Dn({
    check: "string_format",
    format: "starts_with",
    ...O(t),
    prefix: e
  });
}
function gu(e, t) {
  return new Vn({
    check: "string_format",
    format: "ends_with",
    ...O(t),
    suffix: e
  });
}
function xt(e) {
  return new zn({
    check: "overwrite",
    tx: e
  });
}
function bu(e) {
  return xt((t) => t.normalize(e));
}
function ku() {
  return xt((e) => e.trim());
}
function Su() {
  return xt((e) => e.toLowerCase());
}
function wu() {
  return xt((e) => e.toUpperCase());
}
function Tu(e, t, i) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...O(i)
  });
}
function _u(e, t, i) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...O(i)
  });
}
function Pu(e) {
  const t = Au((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(ft(s, i.value, t._zod.def));
    else {
      const a = s;
      a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = i.value), a.inst ?? (a.inst = t), a.continue ?? (a.continue = !t._zod.def.abort), i.issues.push(ft(a));
    }
  }, e(i.value, i)));
  return t;
}
function Au(e, t) {
  const i = new fe({
    check: "custom",
    ...O(t)
  });
  return i._zod.check = e, i;
}
const Cu = /* @__PURE__ */ S("ZodISODateTime", (e, t) => {
  Qn.init(e, t), Y.init(e, t);
});
function Eu(e) {
  return au(Cu, e);
}
const Iu = /* @__PURE__ */ S("ZodISODate", (e, t) => {
  Yn.init(e, t), Y.init(e, t);
});
function Nu(e) {
  return nu(Iu, e);
}
const Lu = /* @__PURE__ */ S("ZodISOTime", (e, t) => {
  eo.init(e, t), Y.init(e, t);
});
function Ou(e) {
  return ou(Lu, e);
}
const Mu = /* @__PURE__ */ S("ZodISODuration", (e, t) => {
  to.init(e, t), Y.init(e, t);
});
function Ru(e) {
  return uu(Mu, e);
}
const Du = (e, t) => {
  tr.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (i) => $a(e, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => Ba(e, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        e.issues.push(i), e.message = JSON.stringify(e.issues, ai, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        e.issues.push(...i), e.message = JSON.stringify(e.issues, ai, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Te = S("ZodError", Du, {
  Parent: Error
}), Vu = /* @__PURE__ */ ki(Te), zu = /* @__PURE__ */ Si(Te), Fu = /* @__PURE__ */ Bt(Te), ju = /* @__PURE__ */ $t(Te), Bu = /* @__PURE__ */ qa(Te), $u = /* @__PURE__ */ Ha(Te), Uu = /* @__PURE__ */ Wa(Te), Zu = /* @__PURE__ */ Ka(Te), qu = /* @__PURE__ */ Ga(Te), Hu = /* @__PURE__ */ Ja(Te), Wu = /* @__PURE__ */ Xa(Te), Ku = /* @__PURE__ */ Qa(Te), ee = /* @__PURE__ */ S("ZodType", (e, t) => (Q.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...i) => e.clone(We(t, {
  checks: [
    ...t.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), e.clone = (i, s) => $e(e, i, s), e.brand = () => e, e.register = (i, s) => (i.add(e, s), e), e.parse = (i, s) => Vu(e, i, s, { callee: e.parse }), e.safeParse = (i, s) => Fu(e, i, s), e.parseAsync = async (i, s) => zu(e, i, s, { callee: e.parseAsync }), e.safeParseAsync = async (i, s) => ju(e, i, s), e.spa = e.safeParseAsync, e.encode = (i, s) => Bu(e, i, s), e.decode = (i, s) => $u(e, i, s), e.encodeAsync = async (i, s) => Uu(e, i, s), e.decodeAsync = async (i, s) => Zu(e, i, s), e.safeEncode = (i, s) => qu(e, i, s), e.safeDecode = (i, s) => Hu(e, i, s), e.safeEncodeAsync = async (i, s) => Wu(e, i, s), e.safeDecodeAsync = async (i, s) => Ku(e, i, s), e.refine = (i, s) => e.check(Bc(i, s)), e.superRefine = (i) => e.check($c(i)), e.overwrite = (i) => e.check(xt(i)), e.optional = () => cs(e), e.nullable = () => hs(e), e.nullish = () => cs(hs(e)), e.nonoptional = (i) => Mc(e, i), e.array = () => je(e), e.or = (i) => se([e, i]), e.and = (i) => wc(e, i), e.transform = (i) => ps(e, Cc(i)), e.default = (i) => Nc(e, i), e.prefault = (i) => Oc(e, i), e.catch = (i) => Dc(e, i), e.pipe = (i) => ps(e, i), e.readonly = () => Fc(e), e.describe = (i) => {
  const s = e.clone();
  return _t.add(s, { description: i }), s;
}, Object.defineProperty(e, "description", {
  get() {
    return _t.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...i) => {
  if (i.length === 0)
    return _t.get(e);
  const s = e.clone();
  return _t.add(s, i[0]), s;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), mr = /* @__PURE__ */ S("_ZodString", (e, t) => {
  wi.init(e, t), ee.init(e, t);
  const i = e._zod.bag;
  e.format = i.format ?? null, e.minLength = i.minimum ?? null, e.maxLength = i.maximum ?? null, e.regex = (...s) => e.check(du(...s)), e.includes = (...s) => e.check(vu(...s)), e.startsWith = (...s) => e.check(xu(...s)), e.endsWith = (...s) => e.check(gu(...s)), e.min = (...s) => e.check(Rt(...s)), e.max = (...s) => e.check(fr(...s)), e.length = (...s) => e.check(dr(...s)), e.nonempty = (...s) => e.check(Rt(1, ...s)), e.lowercase = (s) => e.check(mu(s)), e.uppercase = (s) => e.check(yu(s)), e.trim = () => e.check(ku()), e.normalize = (...s) => e.check(bu(...s)), e.toLowerCase = () => e.check(Su()), e.toUpperCase = () => e.check(wu());
}), Gu = /* @__PURE__ */ S("ZodString", (e, t) => {
  wi.init(e, t), mr.init(e, t), e.email = (i) => e.check(zo(Ju, i)), e.url = (i) => e.check(Uo(Xu, i)), e.jwt = (i) => e.check(ru(lc, i)), e.emoji = (i) => e.check(Zo(Qu, i)), e.guid = (i) => e.check(is(ns, i)), e.uuid = (i) => e.check(Fo(Pt, i)), e.uuidv4 = (i) => e.check(jo(Pt, i)), e.uuidv6 = (i) => e.check(Bo(Pt, i)), e.uuidv7 = (i) => e.check($o(Pt, i)), e.nanoid = (i) => e.check(qo(Yu, i)), e.guid = (i) => e.check(is(ns, i)), e.cuid = (i) => e.check(Ho(ec, i)), e.cuid2 = (i) => e.check(Wo(tc, i)), e.ulid = (i) => e.check(Ko(ic, i)), e.base64 = (i) => e.check(tu(cc, i)), e.base64url = (i) => e.check(iu(hc, i)), e.xid = (i) => e.check(Go(sc, i)), e.ksuid = (i) => e.check(Jo(rc, i)), e.ipv4 = (i) => e.check(Xo(ac, i)), e.ipv6 = (i) => e.check(Qo(nc, i)), e.cidrv4 = (i) => e.check(Yo(oc, i)), e.cidrv6 = (i) => e.check(eu(uc, i)), e.e164 = (i) => e.check(su(pc, i)), e.datetime = (i) => e.check(Eu(i)), e.date = (i) => e.check(Nu(i)), e.time = (i) => e.check(Ou(i)), e.duration = (i) => e.check(Ru(i));
});
function L(e) {
  return Vo(Gu, e);
}
const Y = /* @__PURE__ */ S("ZodStringFormat", (e, t) => {
  K.init(e, t), mr.init(e, t);
}), Ju = /* @__PURE__ */ S("ZodEmail", (e, t) => {
  Un.init(e, t), Y.init(e, t);
}), ns = /* @__PURE__ */ S("ZodGUID", (e, t) => {
  Bn.init(e, t), Y.init(e, t);
}), Pt = /* @__PURE__ */ S("ZodUUID", (e, t) => {
  $n.init(e, t), Y.init(e, t);
}), Xu = /* @__PURE__ */ S("ZodURL", (e, t) => {
  Zn.init(e, t), Y.init(e, t);
}), Qu = /* @__PURE__ */ S("ZodEmoji", (e, t) => {
  qn.init(e, t), Y.init(e, t);
}), Yu = /* @__PURE__ */ S("ZodNanoID", (e, t) => {
  Hn.init(e, t), Y.init(e, t);
}), ec = /* @__PURE__ */ S("ZodCUID", (e, t) => {
  Wn.init(e, t), Y.init(e, t);
}), tc = /* @__PURE__ */ S("ZodCUID2", (e, t) => {
  Kn.init(e, t), Y.init(e, t);
}), ic = /* @__PURE__ */ S("ZodULID", (e, t) => {
  Gn.init(e, t), Y.init(e, t);
}), sc = /* @__PURE__ */ S("ZodXID", (e, t) => {
  Jn.init(e, t), Y.init(e, t);
}), rc = /* @__PURE__ */ S("ZodKSUID", (e, t) => {
  Xn.init(e, t), Y.init(e, t);
}), ac = /* @__PURE__ */ S("ZodIPv4", (e, t) => {
  io.init(e, t), Y.init(e, t);
}), nc = /* @__PURE__ */ S("ZodIPv6", (e, t) => {
  so.init(e, t), Y.init(e, t);
}), oc = /* @__PURE__ */ S("ZodCIDRv4", (e, t) => {
  ro.init(e, t), Y.init(e, t);
}), uc = /* @__PURE__ */ S("ZodCIDRv6", (e, t) => {
  ao.init(e, t), Y.init(e, t);
}), cc = /* @__PURE__ */ S("ZodBase64", (e, t) => {
  no.init(e, t), Y.init(e, t);
}), hc = /* @__PURE__ */ S("ZodBase64URL", (e, t) => {
  uo.init(e, t), Y.init(e, t);
}), pc = /* @__PURE__ */ S("ZodE164", (e, t) => {
  co.init(e, t), Y.init(e, t);
}), lc = /* @__PURE__ */ S("ZodJWT", (e, t) => {
  po.init(e, t), Y.init(e, t);
}), yr = /* @__PURE__ */ S("ZodNumber", (e, t) => {
  hr.init(e, t), ee.init(e, t), e.gt = (s, a) => e.check(rs(s, a)), e.gte = (s, a) => e.check(Yt(s, a)), e.min = (s, a) => e.check(Yt(s, a)), e.lt = (s, a) => e.check(ss(s, a)), e.lte = (s, a) => e.check(Qt(s, a)), e.max = (s, a) => e.check(Qt(s, a)), e.int = (s) => e.check(os(s)), e.safe = (s) => e.check(os(s)), e.positive = (s) => e.check(rs(0, s)), e.nonnegative = (s) => e.check(Yt(0, s)), e.negative = (s) => e.check(ss(0, s)), e.nonpositive = (s) => e.check(Qt(0, s)), e.multipleOf = (s, a) => e.check(as(s, a)), e.step = (s, a) => e.check(as(s, a)), e.finite = () => e;
  const i = e._zod.bag;
  e.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), e.isFinite = !0, e.format = i.format ?? null;
});
function Oe(e) {
  return cu(yr, e);
}
const fc = /* @__PURE__ */ S("ZodNumberFormat", (e, t) => {
  lo.init(e, t), yr.init(e, t);
});
function os(e) {
  return hu(fc, e);
}
const dc = /* @__PURE__ */ S("ZodBoolean", (e, t) => {
  fo.init(e, t), ee.init(e, t);
});
function mc(e) {
  return pu(dc, e);
}
const yc = /* @__PURE__ */ S("ZodUnknown", (e, t) => {
  mo.init(e, t), ee.init(e, t);
});
function us() {
  return lu(yc);
}
const vc = /* @__PURE__ */ S("ZodNever", (e, t) => {
  yo.init(e, t), ee.init(e, t);
});
function xc(e) {
  return fu(vc, e);
}
const gc = /* @__PURE__ */ S("ZodArray", (e, t) => {
  vo.init(e, t), ee.init(e, t), e.element = t.element, e.min = (i, s) => e.check(Rt(i, s)), e.nonempty = (i) => e.check(Rt(1, i)), e.max = (i, s) => e.check(fr(i, s)), e.length = (i, s) => e.check(dr(i, s)), e.unwrap = () => e.element;
});
function je(e, t) {
  return Tu(gc, e, t);
}
const bc = /* @__PURE__ */ S("ZodObject", (e, t) => {
  go.init(e, t), ee.init(e, t), Z(e, "shape", () => t.shape), e.keyof = () => _c(Object.keys(e._zod.def.shape)), e.catchall = (i) => e.clone({ ...e._zod.def, catchall: i }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: us() }), e.loose = () => e.clone({ ...e._zod.def, catchall: us() }), e.strict = () => e.clone({ ...e._zod.def, catchall: xc() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (i) => Da(e, i), e.safeExtend = (i) => Va(e, i), e.merge = (i) => za(e, i), e.pick = (i) => Ma(e, i), e.omit = (i) => Ra(e, i), e.partial = (...i) => Fa(vr, e, i[0]), e.required = (...i) => ja(xr, e, i[0]);
});
function Ce(e, t) {
  const i = {
    type: "object",
    shape: e ?? {},
    ...O(t)
  };
  return new bc(i);
}
const kc = /* @__PURE__ */ S("ZodUnion", (e, t) => {
  bo.init(e, t), ee.init(e, t), e.options = t.options;
});
function se(e, t) {
  return new kc({
    type: "union",
    options: e,
    ...O(t)
  });
}
const Sc = /* @__PURE__ */ S("ZodIntersection", (e, t) => {
  ko.init(e, t), ee.init(e, t);
});
function wc(e, t) {
  return new Sc({
    type: "intersection",
    left: e,
    right: t
  });
}
const Tc = /* @__PURE__ */ S("ZodRecord", (e, t) => {
  So.init(e, t), ee.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function xe(e, t, i) {
  return new Tc({
    type: "record",
    keyType: e,
    valueType: t,
    ...O(i)
  });
}
const oi = /* @__PURE__ */ S("ZodEnum", (e, t) => {
  wo.init(e, t), ee.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const i = new Set(Object.keys(t.entries));
  e.extract = (s, a) => {
    const o = {};
    for (const h of s)
      if (i.has(h))
        o[h] = t.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new oi({
      ...t,
      checks: [],
      ...O(a),
      entries: o
    });
  }, e.exclude = (s, a) => {
    const o = { ...t.entries };
    for (const h of s)
      if (i.has(h))
        delete o[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new oi({
      ...t,
      checks: [],
      ...O(a),
      entries: o
    });
  };
});
function _c(e, t) {
  const i = Array.isArray(e) ? Object.fromEntries(e.map((s) => [s, s])) : e;
  return new oi({
    type: "enum",
    entries: i,
    ...O(t)
  });
}
const Pc = /* @__PURE__ */ S("ZodLiteral", (e, t) => {
  To.init(e, t), ee.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function g(e, t) {
  return new Pc({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...O(t)
  });
}
const Ac = /* @__PURE__ */ S("ZodTransform", (e, t) => {
  _o.init(e, t), ee.init(e, t), e._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new Js(e.constructor.name);
    i.addIssue = (o) => {
      if (typeof o == "string")
        i.issues.push(ft(o, i.value, t));
      else {
        const h = o;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = i.value), h.inst ?? (h.inst = e), i.issues.push(ft(h));
      }
    };
    const a = t.transform(i.value, i);
    return a instanceof Promise ? a.then((o) => (i.value = o, i)) : (i.value = a, i);
  };
});
function Cc(e) {
  return new Ac({
    type: "transform",
    transform: e
  });
}
const vr = /* @__PURE__ */ S("ZodOptional", (e, t) => {
  Po.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function cs(e) {
  return new vr({
    type: "optional",
    innerType: e
  });
}
const Ec = /* @__PURE__ */ S("ZodNullable", (e, t) => {
  Ao.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function hs(e) {
  return new Ec({
    type: "nullable",
    innerType: e
  });
}
const Ic = /* @__PURE__ */ S("ZodDefault", (e, t) => {
  Co.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Nc(e, t) {
  return new Ic({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ys(t);
    }
  });
}
const Lc = /* @__PURE__ */ S("ZodPrefault", (e, t) => {
  Eo.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Oc(e, t) {
  return new Lc({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ys(t);
    }
  });
}
const xr = /* @__PURE__ */ S("ZodNonOptional", (e, t) => {
  Io.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Mc(e, t) {
  return new xr({
    type: "nonoptional",
    innerType: e,
    ...O(t)
  });
}
const Rc = /* @__PURE__ */ S("ZodCatch", (e, t) => {
  No.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Dc(e, t) {
  return new Rc({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Vc = /* @__PURE__ */ S("ZodPipe", (e, t) => {
  Lo.init(e, t), ee.init(e, t), e.in = t.in, e.out = t.out;
});
function ps(e, t) {
  return new Vc({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const zc = /* @__PURE__ */ S("ZodReadonly", (e, t) => {
  Oo.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Fc(e) {
  return new zc({
    type: "readonly",
    innerType: e
  });
}
const jc = /* @__PURE__ */ S("ZodCustom", (e, t) => {
  Mo.init(e, t), ee.init(e, t);
});
function Bc(e, t = {}) {
  return _u(jc, e, t);
}
function $c(e) {
  return Pu(e);
}
const Uc = se([g("amber"), g("green"), g("red"), g("other")]), Zc = se([
  g("alpha"),
  g("beta"),
  g("generalAvailability"),
  g("notApplicable"),
  g("preAlpha"),
  g("proposed"),
  g("releaseCandidate"),
  g("unavailable"),
  g("underReview")
]), qc = se([
  g("app"),
  g("connector"),
  g("connectorConnection"),
  g("context"),
  g("contextModelGroup"),
  g("contextModel"),
  g("contextModelDimensionGroup"),
  g("contextModelDimension"),
  g("contextModelDimensionHierarchy"),
  g("contextModelEntityGroup"),
  g("contextModelEntity"),
  g("contextModelEntityDataItem"),
  g("contextModelEntityEvent"),
  g("contextModelEntityPrimaryMeasure"),
  g("contextModelSecondaryMeasureGroup"),
  g("contextModelSecondaryMeasure"),
  g("dataView"),
  g("dimension"),
  g("engine"),
  g("eventQuery"),
  g("presenter"),
  g("presenterPresentation"),
  g("tool")
]), Hc = se([g("en-au"), g("en-gb"), g("en-us"), g("es-es")]), Wc = xe(Hc, L()), Kc = Ce({
  id: L(),
  color: Uc,
  label: L()
}), Gc = Ce({
  id: L(),
  label: xe(L(), L()),
  description: xe(L(), L()),
  firstCreatedAt: Oe().optional(),
  icon: L().optional(),
  iconDark: L().optional(),
  lastUpdatedAt: Oe().optional(),
  status: Kc.nullable().optional(),
  statusId: Zc,
  typeId: qc
}), Jc = se([g("app"), g("engine"), g("connector"), g("context"), g("presenter"), g("tool")]), Xc = Ce({
  id: L(),
  label: L()
}), Qc = Ce({
  activeConnectionCount: Oe().optional(),
  canDescribe: mc().optional(),
  id: L().optional(),
  authMethodId: se([g("apiKey"), g("disabled"), g("oAuth2"), g("none")]),
  label: Wc.optional(),
  maxConnectionCount: Oe().optional(),
  params: je(xe(L(), L())).optional()
}), Yc = se([g("application"), g("curatedDataset"), g("database"), g("fileStore")]), eh = se([
  g("abortOperation"),
  g("authenticateConnection"),
  g("createObject"),
  g("describeConnection"),
  g("dropObject"),
  g("findObject"),
  g("getRecord"),
  g("listNodes"),
  g("previewObject"),
  g("removeRecords"),
  g("retrieveRecords"),
  g("upsertRecords")
]), th = se([g("bidirectional"), g("destination"), g("source"), g("unknown")]), ih = Gc.extend({
  typeId: Jc,
  version: L()
}), sh = ih.extend({
  category: Xc.optional(),
  categoryId: Yc,
  implementations: xe(L(), Qc),
  operations: je(eh),
  typeId: g("connector"),
  usageId: th,
  vendorAccountURL: L().nullable().optional(),
  vendorDocumentationURL: L().nullable().optional(),
  vendorHomeURL: L().nullable().optional()
}), rh = se([g("amber"), g("green"), g("red"), g("other")]), ah = se([
  g("alpha"),
  g("beta"),
  g("generalAvailability"),
  g("notApplicable"),
  g("preAlpha"),
  g("proposed"),
  g("releaseCandidate"),
  g("unavailable"),
  g("underReview")
]), nh = se([
  g("app"),
  g("connector"),
  g("connectorConnection"),
  g("context"),
  g("contextModelGroup"),
  g("contextModel"),
  g("contextModelDimensionGroup"),
  g("contextModelDimension"),
  g("contextModelDimensionHierarchy"),
  g("contextModelEntityGroup"),
  g("contextModelEntity"),
  g("contextModelEntityDataItem"),
  g("contextModelEntityEvent"),
  g("contextModelEntityPrimaryMeasure"),
  g("contextModelSecondaryMeasureGroup"),
  g("contextModelSecondaryMeasure"),
  g("dataView"),
  g("dimension"),
  g("engine"),
  g("eventQuery"),
  g("presenter"),
  g("presenterPresentation"),
  g("tool")
]), ls = Oe(), oh = Ce({
  id: L(),
  color: rh,
  label: L()
}), uh = Ce({
  id: L(),
  label: xe(L(), L()),
  description: xe(L(), L()),
  icon: L().optional(),
  iconDark: L().optional(),
  order: Oe(),
  path: L()
}), gr = Ce({
  id: L(),
  label: xe(L(), L()),
  description: xe(L(), L()),
  firstCreatedAt: ls.optional(),
  icon: L().optional(),
  iconDark: L().optional(),
  lastUpdatedAt: ls.optional(),
  status: oh.optional(),
  statusId: ah,
  typeId: nh
}), ch = se([g("app"), g("engine"), g("connector"), g("context"), g("presenter"), g("tool")]), hh = gr.extend({
  typeId: ch,
  version: L()
}), ph = gr.extend({
  modelRefs: je(uh),
  order: Oe()
}), lh = g("list"), fh = hh.extend({
  models: je(ph),
  operations: je(lh),
  typeId: g("context")
}), dh = se([g("amber"), g("green"), g("red"), g("other")]), mh = se([g("alpha"), g("beta"), g("generalAvailability"), g("notApplicable"), g("preAlpha"), g("proposed"), g("releaseCandidate"), g("unavailable"), g("underReview")]), yh = se([g("app"), g("connector"), g("connectorConnection"), g("context"), g("contextModelGroup"), g("contextModel"), g("contextModelDimensionGroup"), g("contextModelDimension"), g("contextModelDimensionHierarchy"), g("contextModelEntityGroup"), g("contextModelEntity"), g("contextModelEntityDataItem"), g("contextModelEntityEvent"), g("contextModelEntityPrimaryMeasure"), g("contextModelSecondaryMeasureGroup"), g("contextModelSecondaryMeasure"), g("dataView"), g("dimension"), g("engine"), g("eventQuery"), g("presenter"), g("presenterPresentation"), g("tool")]), fs = Oe(), vh = Ce({
  id: L(),
  color: dh,
  label: L()
}), xh = Ce({
  id: L(),
  label: xe(L(), L()),
  description: xe(L(), L()),
  icon: L().optional(),
  iconDark: L().optional(),
  order: Oe(),
  path: L()
}), gh = Ce({
  id: L(),
  label: xe(L(), L()),
  description: xe(L(), L()),
  firstCreatedAt: fs.optional(),
  icon: L().optional(),
  iconDark: L().optional(),
  lastUpdatedAt: fs.optional(),
  status: vh.optional(),
  statusId: mh,
  typeId: yh
}), bh = se([g("app"), g("engine"), g("connector"), g("context"), g("presenter"), g("tool")]), kh = gh.extend({
  typeId: bh,
  version: L()
}), Sh = se([g("list"), g("render"), g("setColorMode")]), wh = kh.extend({
  presentations: je(xh),
  operations: je(Sh),
  typeId: g("presenter")
}), Th = ["critical", "high", "moderate", "low", "unknown"], Ti = _r(Pr);
async function Rh() {
  try {
    Pi("Audit Dependencies"), it("Load environment variables"), await Ih(), await ui("owasp-dependency-check", [
      "--project",
      "@datapos/datapos-development",
      "--enableRetired",
      "--nodePackageSkipDevDependencies",
      "--nvdApiKey",
      process.env.NVD_API_KEY ?? ""
    ]), it("Insert OWASP Badge"), await Ph(), await ui("npm", ["audit"]), Ai("Dependency audit complete.");
  } catch (e) {
    console.error("❌ Error auditing dependencies.", e), process.exit(1);
  }
}
async function Dh() {
  try {
    Pi("Build Artifact"), await ui("vite", ["build"]), Ai("Artifact built.");
  } catch (e) {
    console.error("❌ Error building artifact.", e), process.exit(1);
  }
}
async function Vh() {
  try {
    console.info("🚀 Building configuration...");
    const e = JSON.parse(await F.readFile("package.json", "utf8")), t = JSON.parse(await F.readFile("config.json", "utf8"));
    e.name != null && (t.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (t.version = e.version), await F.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (e) {
    console.error("❌ Error building configuration.", e);
  }
}
async function zh(e) {
  try {
    console.info(`🚀 Building public directory index for identifier '${e}'...`);
    const t = {};
    async function i(a, o) {
      console.info(`⚙️ Processing directory '${a}'...`);
      const h = [], d = a.slice(`public/${e}`.length);
      t[d === "" ? "/" : d] = h;
      for (const y of o) {
        const u = `${a}/${y}`;
        try {
          const w = await F.stat(u);
          if (w.isDirectory()) {
            const P = await F.readdir(u), M = { childCount: P.length, name: y, typeId: "folder" };
            h.push(M), await i(u, P);
          } else {
            const P = { id: Tr(), lastModifiedAt: w.mtimeMs, name: y, size: w.size, typeId: "object" };
            h.push(P);
          }
        } catch (w) {
          throw new Error(`Unable to get information for '${y}' in 'buildPublicDirectoryIndex'. ${String(w)}`);
        }
      }
      h.sort((y, u) => {
        const w = y.typeId.localeCompare(u.typeId);
        return w === 0 ? y.name.localeCompare(u.name) : w;
      });
    }
    const s = await F.readdir(`public/${e}`);
    await i(`public/${e}`, s), await F.writeFile(`./public/${e}Index.json`, JSON.stringify(t), "utf8"), console.info("✅ Public directory index built.");
  } catch (t) {
    console.error("❌ Error building public directory index.", t);
  }
}
async function Fh() {
  try {
    console.info("🚀 Building connector configuration...");
    const [e, t, i] = await Promise.all([
      F.readFile("package.json", "utf8").then((h) => JSON.parse(h)),
      F.readFile("config.json", "utf8").then((h) => JSON.parse(h)),
      F.readFile("src/index.ts", "utf8")
    ]), s = sh.safeParse(t);
    if (s.success)
      console.info("ℹ️  Configuration is valid.");
    else {
      console.log("❌ Configuration is invalid:"), console.table(s.error.issues);
      return;
    }
    const a = _i(i), o = Eh(a);
    a.length > 0 ? (console.info(`ℹ️  Implements ${a.length} operations:`), console.table(a)) : console.warn("⚠️  Implements no operations."), o === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports '${o}' usage.`), e.name != null && (t.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (t.version = e.version), t.operations = a, t.usageId = o, await F.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (e) {
    console.error("❌ Error building connector configuration.", e);
  }
}
async function jh() {
  try {
    console.info("🚀 Building context configuration...");
    const [e, t, i] = await Promise.all([
      F.readFile("package.json", "utf8").then((o) => JSON.parse(o)),
      F.readFile("config.json", "utf8").then((o) => JSON.parse(o)),
      F.readFile("src/index.ts", "utf8")
    ]), s = fh.safeParse(t);
    if (s.success)
      console.info("ℹ️  Configuration is valid.");
    else {
      console.log("❌ Configuration is invalid:"), console.table(s.error.issues);
      return;
    }
    const a = _i(i);
    a.length > 0 ? (console.info(`ℹ️  Implements ${a.length} operations:`), console.table(a)) : console.warn("⚠️  Implements no operations."), e.name != null && (t.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (t.version = e.version), t.operations = a, await F.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function Bh() {
  try {
    console.info("🚀 Building presenter configuration...");
    const [e, t, i] = await Promise.all([
      F.readFile("package.json", "utf8").then((o) => JSON.parse(o)),
      F.readFile("config.json", "utf8").then((o) => JSON.parse(o)),
      F.readFile("src/index.ts", "utf8")
    ]), s = wh.safeParse(t);
    if (s.success)
      console.info("ℹ️  Configuration is valid.");
    else {
      console.log("❌ Configuration is invalid:"), console.table(s.error.issues);
      return;
    }
    const a = _i(i);
    a.length > 0 ? (console.info(`ℹ️  Implements ${a.length} operations:`), console.table(a)) : console.warn("⚠️  Implements no operations."), e.name != null && (t.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (t.version = e.version), t.operations = a, await F.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function _h(e = "./") {
  try {
    const t = JSON.parse(await F.readFile(`${e}package.json`, "utf8"));
    if (t.version == null)
      t.version = "0.0.001", await F.writeFile(`${e}package.json`, JSON.stringify(t, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${t.version}.`);
    else {
      const i = t.version, s = t.version.split(".");
      t.version = `${s[0]}.${s[1]}.${Number(s[2]) + 1}`, await F.writeFile(`${e}package.json`, JSON.stringify(t, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${t.version}.`);
    }
  } catch (t) {
    console.error("❌ Error bumping package version.", t);
  }
}
function $h(e) {
  console.error(`❌ ${e} script not implemented.`);
}
async function Uh() {
  const e = "<!-- DEPENDENCY_LICENSES_START -->", t = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const s = (await F.readFile("./licenses.md", "utf8")).trim(), a = await F.readFile("./README.md", "utf8"), o = a.indexOf(e), h = a.indexOf(t);
    if (o === -1 || h === -1) {
      console.error("❌ No dependency license markers found in 'README.md'.");
      return;
    }
    const d = a.slice(0, Math.max(0, o + e.length)) + `
` + s + `
` + a.slice(Math.max(0, h));
    await F.writeFile("README.md", d, "utf8"), console.log("✅ Updated dependency license information in 'README.md'.");
  } catch (i) {
    console.error("❌ Error inserting dependency license information into 'README.md'.", i);
  }
}
async function Ph() {
  const e = "<!-- OWASP_BADGES_START -->", t = "<!-- OWASP_BADGES_END -->";
  try {
    const i = JSON.parse(await F.readFile("./dependency-check-reports/dependency-check-report.json", "utf8")), s = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const w of i.dependencies)
      if (w.vulnerabilities != null)
        for (const P of w.vulnerabilities) {
          const M = P.severity?.toLowerCase() ?? "unknown";
          if (M in s) {
            const U = Th.find((he) => he === M);
            s[U ?? "unknown"]++;
          } else
            s.unknown++;
        }
    const a = await Ch(s), o = await F.readFile("./README.md", "utf8"), h = o.indexOf(e), d = o.indexOf(t);
    if (h === -1 || d === -1) {
      console.error("❌ No OWASP badge markers found in 'README.md'.");
      return;
    }
    const y = a.join(" "), u = o.slice(0, Math.max(0, h + e.length)) + y + o.slice(Math.max(0, d));
    await F.writeFile("README.md", u, "utf8"), console.info("'✅ OWASP audit badge(s) inserted into 'README.md'");
  } catch (i) {
    console.error("❌ Error inserting OWASP badges into 'README.md'.", i);
  }
}
async function Zh() {
  try {
    console.info("🚀 Sending deployment notice...");
    const e = JSON.parse(await F.readFile("config.json", "utf8")), t = {
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, i = await fetch(`https://api.datapos.app/states/${e.id}`, t);
    if (!i.ok) throw new Error(await i.text());
    console.info("✅ Deployment notice sent.");
  } catch (e) {
    console.error("❌ Error sending deployment notice.", e);
  }
}
async function qh() {
  try {
    Pi("Synchronising with GitHub");
    const e = await Ah("package.json");
    it("Bump version"), await _h(), await ei("git add ."), await ei(`git commit -m "v${e.version}"`), await ei("git push origin main:main"), Ai(`Version ${e.version} synchronised with GitHub.`);
  } catch (e) {
    console.error("❌ Error synchronising with GitHub.", e), process.exit(1);
  }
}
async function Ah(e) {
  return it(`Load JSON file '${e}'`), JSON.parse(await F.readFile(e, "utf8"));
}
async function Hh(e, t) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(a, o, h) {
      for (const d of h) {
        const y = `${a}/${d}`, u = `${o}/${d}`;
        if ((await F.stat(y)).isDirectory()) {
          const P = await F.readdir(y);
          await i(y, u, P);
        } else {
          console.info(`⚙️ Uploading '${a}/${d}'...`);
          const P = `wrangler r2 object put "datapos-sample-data-eu/${o}/${d}" --file="${a}/${d}" --jurisdiction=eu --remote`, M = await Ti(P);
          if (M.stderr) throw new Error(M.stderr);
        }
      }
    }
    const s = await F.readdir(`${e}/${t}/`);
    await i(`${e}/${t}`, t, s), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function Wh() {
  try {
    console.info("🚀 Uploading module configuration....");
    const e = JSON.parse(await F.readFile("config.json", "utf8")), t = e.id, i = {
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, s = await fetch(`https://api.datapos.app/states/${t}`, i);
    if (!s.ok) throw new Error(await s.text());
    console.info("✅ Module configuration uploaded.");
  } catch (e) {
    console.error("❌ Error uploading module configuration.", e);
  }
}
async function Kh(e) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await F.readFile("package.json", "utf8")).version}`;
    async function s(a, o = "") {
      const h = await F.readdir(a, { withFileTypes: !0 });
      for (const d of h) {
        const y = `${a}/${d.name}`, u = o ? `${o}/${d.name}` : d.name;
        if (d.isDirectory()) continue;
        const w = `${e}_${i}/${u}`.replaceAll("\\", "/"), P = d.name.endsWith(".css") ? "text/css" : "application/octet-stream", M = d.name.endsWith(".js") ? "application/javascript" : P;
        console.info(`⚙️ Uploading '${u}' → '${w}'...`);
        const { stderr: U } = await Ti(`wrangler r2 object put "${w}" --file="${y}" --content-type ${M} --jurisdiction=eu --remote`);
        if (U) throw new Error(U);
      }
    }
    await s("dist"), console.info("✅ Module uploaded to R2.");
  } catch (t) {
    console.error("❌ Error uploading module to R2.", t);
  }
}
async function Ch(e) {
  const t = {
    critical: { color: "D32F2F", label: "critical" },
    high: { color: "EF6C00", label: "high" },
    moderate: { color: "FBC02D", label: "moderate" },
    low: { color: "6D8C31", label: "low" },
    unknown: { color: "616161", label: "unknown" }
  }, i = JSON.parse(await F.readFile("config.json", "utf8")), s = [];
  if (Object.values(e).reduce((o, h) => o + h, 0) === 0)
    console.info("✅ No vulnerabilities found."), s.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${i.id}/dependency-check-reports/dependency-check-report.html)`);
  else
    for (const [o, h] of Object.entries(e)) {
      const d = t[o];
      if (console.warn(`⚠️  ${h} ${d.label} vulnerability(ies) found.`), h === 0) continue;
      const y = `https://img.shields.io/badge/OWASP-${h}%20${d.label}-${d.color}`;
      s.push(`[![OWASP](${y})](https://data-positioning.github.io/${i.id}/dependency-check-reports/dependency-check-report.html)`);
    }
  return s;
}
function _i(e) {
  const i = X.extend(_a()).parse(e, {
    ecmaVersion: "latest",
    sourceType: "module",
    locations: !0
  }), s = [];
  return ci(i, (a) => {
    if (a.type !== "MethodDefinition") return;
    const o = a, h = o.key;
    if (h.type !== "Identifier") return;
    const d = h.name;
    d && d !== "constructor" && o.accessibility !== "private" && s.push(d);
  }), s;
}
function Eh(e) {
  let t = !1, i = !1;
  for (const s of e)
    Aa.includes(s) && (t = !0), Pa.includes(s) && (i = !0);
  return t && i ? "bidirectional" : t ? "source" : i ? "destination" : "unknown";
}
async function ei(e) {
  it(`Execute command: ${e}`);
  const { stdout: t, stderr: i } = await Ti(e);
  t.trim() && console.log(t.trim()), i.trim() && console.error(i.trim());
}
async function Ih() {
  (await import("dotenv")).config();
}
function Pi(e) {
  const t = "\x1B[36m", i = "\x1B[0m", s = "─".repeat(e.length + 10);
  console.info(`
${t}${s}`), console.info(`🚀 ${e}`), console.info(`${s}${i}`);
}
function Ai(e) {
  console.info(`
✅ ${e}
`);
}
function it(e) {
  console.info(`
▶️  ${e}`);
}
async function ui(e, t = []) {
  return it(`Spawn command: ${e} ${t.join(" ")}`), new Promise((i, s) => {
    Ar(e, t, { stdio: "inherit" }).on("close", (o) => {
      o === 0 ? i() : s(new Error(`${e} exited with code ${o}`));
    });
  });
}
function ci(e, t) {
  t(e);
  for (const [i, s] of Object.entries(e)) {
    if (["loc", "range", "start", "end", "comments"].includes(i)) continue;
    const a = s;
    if (Array.isArray(a))
      for (const o of a) {
        const h = o;
        h && typeof h.type == "string" && ci(h, t);
      }
    else a && typeof a == "object" && typeof a.type == "string" && ci(a, t);
  }
}
export {
  Rh as audit,
  Dh as build,
  Vh as buildConfig,
  Fh as buildConnectorConfig,
  jh as buildContextConfig,
  Bh as buildPresenterConfig,
  zh as buildPublicDirectoryIndex,
  _h as bumpVersion,
  $h as echoScriptNotImplemented,
  Uh as insertLicensesIntoReadme,
  Ph as insertOWASPDependencyCheckBadgeIntoReadme,
  Zh as sendDeploymentNotice,
  qh as syncWithGitHub,
  Hh as uploadDirectoryToR2,
  Wh as uploadModuleConfigToDO,
  Kh as uploadModuleToR2
};
