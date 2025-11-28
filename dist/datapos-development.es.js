import { exec as Ei } from "node:child_process";
import { promises as M } from "node:fs";
import { nanoid as Ii } from "nanoid";
import { promisify as Ni } from "node:util";
var _i = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], He = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Li = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ze = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", ce = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, pe = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Oi = {
  5: pe,
  "5module": pe + " export import",
  6: pe + " const class extends export import super"
}, Ri = /^in(stanceof)?$/, Mi = new RegExp("[" + ze + "]"), Di = new RegExp("[" + ze + Li + "]");
function me(t, e) {
  for (var r = 65536, a = 0; a < e.length; a += 2) {
    if (r += e[a], r > t)
      return !1;
    if (r += e[a + 1], r >= t)
      return !0;
  }
  return !1;
}
function pt(t, e) {
  return t < 65 ? t === 36 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && Mi.test(String.fromCharCode(t)) : e === !1 ? !1 : me(t, He);
}
function dt(t, e) {
  return t < 48 ? t === 36 : t < 58 ? !0 : t < 65 ? !1 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && Di.test(String.fromCharCode(t)) : e === !1 ? !1 : me(t, He) || me(t, _i);
}
var O = function(e, r) {
  r === void 0 && (r = {}), this.label = e, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop || null, this.updateContext = null;
};
function ot(t, e) {
  return new O(t, { beforeExpr: !0, binop: e });
}
var ht = { beforeExpr: !0 }, st = { startsExpr: !0 }, At = {};
function F(t, e) {
  return e === void 0 && (e = {}), e.keyword = t, At[t] = new O(t, e);
}
var h = {
  num: new O("num", st),
  regexp: new O("regexp", st),
  string: new O("string", st),
  name: new O("name", st),
  privateId: new O("privateId", st),
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
  backQuote: new O("`", st),
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
  _break: F("break"),
  _case: F("case", ht),
  _catch: F("catch"),
  _continue: F("continue"),
  _debugger: F("debugger"),
  _default: F("default", ht),
  _do: F("do", { isLoop: !0, beforeExpr: !0 }),
  _else: F("else", ht),
  _finally: F("finally"),
  _for: F("for", { isLoop: !0 }),
  _function: F("function", st),
  _if: F("if"),
  _return: F("return", ht),
  _switch: F("switch"),
  _throw: F("throw", ht),
  _try: F("try"),
  _var: F("var"),
  _const: F("const"),
  _while: F("while", { isLoop: !0 }),
  _with: F("with"),
  _new: F("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: F("this", st),
  _super: F("super", st),
  _class: F("class", st),
  _extends: F("extends", ht),
  _export: F("export"),
  _import: F("import", st),
  _null: F("null", st),
  _true: F("true", st),
  _false: F("false", st),
  _in: F("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: F("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: F("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: F("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: F("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, tt = /\r\n?|\n|\u2028|\u2029/, We = new RegExp(tt.source, "g");
function Pt(t) {
  return t === 10 || t === 13 || t === 8232 || t === 8233;
}
function Ke(t, e, r) {
  r === void 0 && (r = t.length);
  for (var a = e; a < r; a++) {
    var u = t.charCodeAt(a);
    if (Pt(u))
      return a < r - 1 && u === 13 && t.charCodeAt(a + 1) === 10 ? a + 2 : a + 1;
  }
  return -1;
}
var ge = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Q = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Je = Object.prototype, Vi = Je.hasOwnProperty, Fi = Je.toString, Et = Object.hasOwn || (function(t, e) {
  return Vi.call(t, e);
}), _e = Array.isArray || (function(t) {
  return Fi.call(t) === "[object Array]";
}), Le = /* @__PURE__ */ Object.create(null);
function bt(t) {
  return Le[t] || (Le[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"));
}
function mt(t) {
  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
var Bi = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, wt = function(e, r) {
  this.line = e, this.column = r;
};
wt.prototype.offset = function(e) {
  return new wt(this.line, this.column + e);
};
var Bt = function(e, r, a) {
  this.start = r, this.end = a, e.sourceFile !== null && (this.source = e.sourceFile);
};
function be(t, e) {
  for (var r = 1, a = 0; ; ) {
    var u = Ke(t, a, e);
    if (u < 0)
      return new wt(r, e - a);
    ++r, a = u;
  }
}
var Gt = {
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
}, Oe = !1;
function ji(t) {
  var e = {};
  for (var r in Gt)
    e[r] = t && Et(t, r) ? t[r] : Gt[r];
  if (e.ecmaVersion === "latest" ? e.ecmaVersion = 1e8 : e.ecmaVersion == null ? (!Oe && typeof console == "object" && console.warn && (Oe = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), e.allowReserved == null && (e.allowReserved = e.ecmaVersion < 5), (!t || t.allowHashBang == null) && (e.allowHashBang = e.ecmaVersion >= 14), _e(e.onToken)) {
    var a = e.onToken;
    e.onToken = function(u) {
      return a.push(u);
    };
  }
  return _e(e.onComment) && (e.onComment = Ui(e, e.onComment)), e;
}
function Ui(t, e) {
  return function(r, a, u, f, d, v) {
    var g = {
      type: r ? "Block" : "Line",
      value: a,
      start: u,
      end: f
    };
    t.locations && (g.loc = new Bt(this, d, v)), t.ranges && (g.range = [u, f]), e.push(g);
  };
}
var Ft = 1, It = 2, Se = 4, Ge = 8, Te = 16, $e = 32, te = 64, Xe = 128, Ct = 256, jt = 512, ee = Ft | It | Ct;
function Pe(t, e) {
  return It | (t ? Se : 0) | (e ? Ge : 0);
}
var $t = 0, Ce = 1, xt = 2, Qe = 3, Ye = 4, Ze = 5, K = function(e, r, a) {
  this.options = e = ji(e), this.sourceFile = e.sourceFile, this.keywords = bt(Oi[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
  var u = "";
  e.allowReserved !== !0 && (u = ce[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (u += " await")), this.reservedWords = bt(u);
  var f = (u ? u + " " : "") + ce.strict;
  this.reservedWordsStrict = bt(f), this.reservedWordsStrictBind = bt(f + " " + ce.strictBind), this.input = String(r), this.containsEsc = !1, a ? (this.pos = a, this.lineStart = this.input.lastIndexOf(`
`, a - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(tt).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = h.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(Ft), this.regexpState = null, this.privateNameStack = [];
}, lt = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
K.prototype.parse = function() {
  var e = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(e);
};
lt.inFunction.get = function() {
  return (this.currentVarScope().flags & It) > 0;
};
lt.inGenerator.get = function() {
  return (this.currentVarScope().flags & Ge) > 0;
};
lt.inAsync.get = function() {
  return (this.currentVarScope().flags & Se) > 0;
};
lt.canAwait.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], r = e.flags;
    if (r & (Ct | jt))
      return !1;
    if (r & It)
      return (r & Se) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
lt.allowSuper.get = function() {
  var t = this.currentThisScope(), e = t.flags;
  return (e & te) > 0 || this.options.allowSuperOutsideMethod;
};
lt.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & Xe) > 0;
};
lt.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
lt.allowNewDotTarget.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], r = e.flags;
    if (r & (Ct | jt) || r & It && !(r & Te))
      return !0;
  }
  return !1;
};
lt.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & Ct) > 0;
};
K.extend = function() {
  for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
  for (var a = this, u = 0; u < e.length; u++)
    a = e[u](a);
  return a;
};
K.parse = function(e, r) {
  return new this(r, e).parse();
};
K.parseExpressionAt = function(e, r, a) {
  var u = new this(a, e, r);
  return u.nextToken(), u.parseExpression();
};
K.tokenizer = function(e, r) {
  return new this(r, e);
};
Object.defineProperties(K.prototype, lt);
var et = K.prototype, qi = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
et.strictDirective = function(t) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    Q.lastIndex = t, t += Q.exec(this.input)[0].length;
    var e = qi.exec(this.input.slice(t));
    if (!e)
      return !1;
    if ((e[1] || e[2]) === "use strict") {
      Q.lastIndex = t + e[0].length;
      var r = Q.exec(this.input), a = r.index + r[0].length, u = this.input.charAt(a);
      return u === ";" || u === "}" || tt.test(r[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(u) || u === "!" && this.input.charAt(a + 1) === "=");
    }
    t += e[0].length, Q.lastIndex = t, t += Q.exec(this.input)[0].length, this.input[t] === ";" && t++;
  }
};
et.eat = function(t) {
  return this.type === t ? (this.next(), !0) : !1;
};
et.isContextual = function(t) {
  return this.type === h.name && this.value === t && !this.containsEsc;
};
et.eatContextual = function(t) {
  return this.isContextual(t) ? (this.next(), !0) : !1;
};
et.expectContextual = function(t) {
  this.eatContextual(t) || this.unexpected();
};
et.canInsertSemicolon = function() {
  return this.type === h.eof || this.type === h.braceR || tt.test(this.input.slice(this.lastTokEnd, this.start));
};
et.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
et.semicolon = function() {
  !this.eat(h.semi) && !this.insertSemicolon() && this.unexpected();
};
et.afterTrailingComma = function(t, e) {
  if (this.type === t)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0;
};
et.expect = function(t) {
  this.eat(t) || this.unexpected();
};
et.unexpected = function(t) {
  this.raise(t ?? this.start, "Unexpected token");
};
var ie = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
et.checkPatternErrors = function(t, e) {
  if (t) {
    t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
    var r = e ? t.parenthesizedAssign : t.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, e ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
et.checkExpressionErrors = function(t, e) {
  if (!t)
    return !1;
  var r = t.shorthandAssign, a = t.doubleProto;
  if (!e)
    return r >= 0 || a >= 0;
  r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"), a >= 0 && this.raiseRecoverable(a, "Redefinition of __proto__ property");
};
et.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
et.isSimpleAssignTarget = function(t) {
  return t.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(t.expression) : t.type === "Identifier" || t.type === "MemberExpression";
};
var k = K.prototype;
k.parseTopLevel = function(t) {
  var e = /* @__PURE__ */ Object.create(null);
  for (t.body || (t.body = []); this.type !== h.eof; ) {
    var r = this.parseStatement(null, !0, e);
    t.body.push(r);
  }
  if (this.inModule)
    for (var a = 0, u = Object.keys(this.undefinedExports); a < u.length; a += 1) {
      var f = u[a];
      this.raiseRecoverable(this.undefinedExports[f].start, "Export '" + f + "' is not defined");
    }
  return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program");
};
var ke = { kind: "loop" }, Hi = { kind: "switch" };
k.isLet = function(t) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  Q.lastIndex = this.pos;
  var e = Q.exec(this.input), r = this.pos + e[0].length, a = this.input.charCodeAt(r);
  if (a === 91 || a === 92)
    return !0;
  if (t)
    return !1;
  if (a === 123 || a > 55295 && a < 56320)
    return !0;
  if (pt(a, !0)) {
    for (var u = r + 1; dt(a = this.input.charCodeAt(u), !0); )
      ++u;
    if (a === 92 || a > 55295 && a < 56320)
      return !0;
    var f = this.input.slice(r, u);
    if (!Ri.test(f))
      return !0;
  }
  return !1;
};
k.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  Q.lastIndex = this.pos;
  var t = Q.exec(this.input), e = this.pos + t[0].length, r;
  return !tt.test(this.input.slice(this.pos, e)) && this.input.slice(e, e + 8) === "function" && (e + 8 === this.input.length || !(dt(r = this.input.charCodeAt(e + 8)) || r > 55295 && r < 56320));
};
k.isUsingKeyword = function(t, e) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(t ? "await" : "using"))
    return !1;
  Q.lastIndex = this.pos;
  var r = Q.exec(this.input), a = this.pos + r[0].length;
  if (tt.test(this.input.slice(this.pos, a)))
    return !1;
  if (t) {
    var u = a + 5, f;
    if (this.input.slice(a, u) !== "using" || u === this.input.length || dt(f = this.input.charCodeAt(u)) || f > 55295 && f < 56320)
      return !1;
    Q.lastIndex = u;
    var d = Q.exec(this.input);
    if (d && tt.test(this.input.slice(u, u + d[0].length)))
      return !1;
  }
  if (e) {
    var v = a + 2, g;
    if (this.input.slice(a, v) === "of" && (v === this.input.length || !dt(g = this.input.charCodeAt(v)) && !(g > 55295 && g < 56320)))
      return !1;
  }
  var o = this.input.charCodeAt(a);
  return pt(o, !0) || o === 92;
};
k.isAwaitUsing = function(t) {
  return this.isUsingKeyword(!0, t);
};
k.isUsing = function(t) {
  return this.isUsingKeyword(!1, t);
};
k.parseStatement = function(t, e, r) {
  var a = this.type, u = this.startNode(), f;
  switch (this.isLet(t) && (a = h._var, f = "let"), a) {
    case h._break:
    case h._continue:
      return this.parseBreakContinueStatement(u, a.keyword);
    case h._debugger:
      return this.parseDebuggerStatement(u);
    case h._do:
      return this.parseDoStatement(u);
    case h._for:
      return this.parseForStatement(u);
    case h._function:
      return t && (this.strict || t !== "if" && t !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(u, !1, !t);
    case h._class:
      return t && this.unexpected(), this.parseClass(u, !0);
    case h._if:
      return this.parseIfStatement(u);
    case h._return:
      return this.parseReturnStatement(u);
    case h._switch:
      return this.parseSwitchStatement(u);
    case h._throw:
      return this.parseThrowStatement(u);
    case h._try:
      return this.parseTryStatement(u);
    case h._const:
    case h._var:
      return f = f || this.value, t && f !== "var" && this.unexpected(), this.parseVarStatement(u, f);
    case h._while:
      return this.parseWhileStatement(u);
    case h._with:
      return this.parseWithStatement(u);
    case h.braceL:
      return this.parseBlock(!0, u);
    case h.semi:
      return this.parseEmptyStatement(u);
    case h._export:
    case h._import:
      if (this.options.ecmaVersion > 10 && a === h._import) {
        Q.lastIndex = this.pos;
        var d = Q.exec(this.input), v = this.pos + d[0].length, g = this.input.charCodeAt(v);
        if (g === 40 || g === 46)
          return this.parseExpressionStatement(u, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), a === h._import ? this.parseImport(u) : this.parseExport(u, r);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return t && this.unexpected(), this.next(), this.parseFunctionStatement(u, !0, !t);
      var o = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (o)
        return e && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), o === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(u, !1, o), this.semicolon(), this.finishNode(u, "VariableDeclaration");
      var w = this.value, _ = this.parseExpression();
      return a === h.name && _.type === "Identifier" && this.eat(h.colon) ? this.parseLabeledStatement(u, w, _, t) : this.parseExpressionStatement(u, _);
  }
};
k.parseBreakContinueStatement = function(t, e) {
  var r = e === "break";
  this.next(), this.eat(h.semi) || this.insertSemicolon() ? t.label = null : this.type !== h.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
  for (var a = 0; a < this.labels.length; ++a) {
    var u = this.labels[a];
    if ((t.label == null || u.name === t.label.name) && (u.kind != null && (r || u.kind === "loop") || t.label && r))
      break;
  }
  return a === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, r ? "BreakStatement" : "ContinueStatement");
};
k.parseDebuggerStatement = function(t) {
  return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
};
k.parseDoStatement = function(t) {
  return this.next(), this.labels.push(ke), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(h._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(h.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement");
};
k.parseForStatement = function(t) {
  this.next();
  var e = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(ke), this.enterScope(0), this.expect(h.parenL), this.type === h.semi)
    return e > -1 && this.unexpected(e), this.parseFor(t, null);
  var r = this.isLet();
  if (this.type === h._var || this.type === h._const || r) {
    var a = this.startNode(), u = r ? "let" : this.value;
    return this.next(), this.parseVar(a, !0, u), this.finishNode(a, "VariableDeclaration"), this.parseForAfterInit(t, a, e);
  }
  var f = this.isContextual("let"), d = !1, v = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (v) {
    var g = this.startNode();
    return this.next(), v === "await using" && this.next(), this.parseVar(g, !0, v), this.finishNode(g, "VariableDeclaration"), this.parseForAfterInit(t, g, e);
  }
  var o = this.containsEsc, w = new ie(), _ = this.start, D = e > -1 ? this.parseExprSubscripts(w, "await") : this.parseExpression(!0, w);
  return this.type === h._in || (d = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (e > -1 ? (this.type === h._in && this.unexpected(e), t.await = !0) : d && this.options.ecmaVersion >= 8 && (D.start === _ && !o && D.type === "Identifier" && D.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (t.await = !1)), f && d && this.raise(D.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(D, !1, w), this.checkLValPattern(D), this.parseForIn(t, D)) : (this.checkExpressionErrors(w, !0), e > -1 && this.unexpected(e), this.parseFor(t, D));
};
k.parseForAfterInit = function(t, e, r) {
  return (this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && e.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === h._in ? r > -1 && this.unexpected(r) : t.await = r > -1), this.parseForIn(t, e)) : (r > -1 && this.unexpected(r), this.parseFor(t, e));
};
k.parseFunctionStatement = function(t, e, r) {
  return this.next(), this.parseFunction(t, Mt | (r ? 0 : ye), !1, e);
};
k.parseIfStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(h._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement");
};
k.parseReturnStatement = function(t) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(h.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
};
k.parseSwitchStatement = function(t) {
  this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(h.braceL), this.labels.push(Hi), this.enterScope(0);
  for (var e, r = !1; this.type !== h.braceR; )
    if (this.type === h._case || this.type === h._default) {
      var a = this.type === h._case;
      e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), a ? e.test = this.parseExpression() : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), r = !0, e.test = null), this.expect(h.colon);
    } else
      e || this.unexpected(), e.consequent.push(this.parseStatement(null));
  return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement");
};
k.parseThrowStatement = function(t) {
  return this.next(), tt.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
};
var zi = [];
k.parseCatchClauseParam = function() {
  var t = this.parseBindingAtom(), e = t.type === "Identifier";
  return this.enterScope(e ? $e : 0), this.checkLValPattern(t, e ? Ye : xt), this.expect(h.parenR), t;
};
k.parseTryStatement = function(t) {
  if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === h._catch) {
    var e = this.startNode();
    this.next(), this.eat(h.parenL) ? e.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0)), e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause");
  }
  return t.finalizer = this.eat(h._finally) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement");
};
k.parseVarStatement = function(t, e, r) {
  return this.next(), this.parseVar(t, !1, e, r), this.semicolon(), this.finishNode(t, "VariableDeclaration");
};
k.parseWhileStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), this.labels.push(ke), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement");
};
k.parseWithStatement = function(t) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement");
};
k.parseEmptyStatement = function(t) {
  return this.next(), this.finishNode(t, "EmptyStatement");
};
k.parseLabeledStatement = function(t, e, r, a) {
  for (var u = 0, f = this.labels; u < f.length; u += 1) {
    var d = f[u];
    d.name === e && this.raise(r.start, "Label '" + e + "' is already declared");
  }
  for (var v = this.type.isLoop ? "loop" : this.type === h._switch ? "switch" : null, g = this.labels.length - 1; g >= 0; g--) {
    var o = this.labels[g];
    if (o.statementStart === t.start)
      o.statementStart = this.start, o.kind = v;
    else
      break;
  }
  return this.labels.push({ name: e, kind: v, statementStart: this.start }), t.body = this.parseStatement(a ? a.indexOf("label") === -1 ? a + "label" : a : "label"), this.labels.pop(), t.label = r, this.finishNode(t, "LabeledStatement");
};
k.parseExpressionStatement = function(t, e) {
  return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
};
k.parseBlock = function(t, e, r) {
  for (t === void 0 && (t = !0), e === void 0 && (e = this.startNode()), e.body = [], this.expect(h.braceL), t && this.enterScope(0); this.type !== h.braceR; ) {
    var a = this.parseStatement(null);
    e.body.push(a);
  }
  return r && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement");
};
k.parseFor = function(t, e) {
  return t.init = e, this.expect(h.semi), t.test = this.type === h.semi ? null : this.parseExpression(), this.expect(h.semi), t.update = this.type === h.parenR ? null : this.parseExpression(), this.expect(h.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement");
};
k.parseForIn = function(t, e) {
  var r = this.type === h._in;
  return this.next(), e.type === "VariableDeclaration" && e.declarations[0].init != null && (!r || this.options.ecmaVersion < 8 || this.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(
    e.start,
    (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), t.left = e, t.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(h.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, r ? "ForInStatement" : "ForOfStatement");
};
k.parseVar = function(t, e, r, a) {
  for (t.declarations = [], t.kind = r; ; ) {
    var u = this.startNode();
    if (this.parseVarId(u, r), this.eat(h.eq) ? u.init = this.parseMaybeAssign(e) : !a && r === "const" && !(this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !a && (r === "using" || r === "await using") && this.options.ecmaVersion >= 17 && this.type !== h._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + r + " declaration") : !a && u.id.type !== "Identifier" && !(e && (this.type === h._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : u.init = null, t.declarations.push(this.finishNode(u, "VariableDeclarator")), !this.eat(h.comma))
      break;
  }
  return t;
};
k.parseVarId = function(t, e) {
  t.id = e === "using" || e === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(t.id, e === "var" ? Ce : xt, !1);
};
var Mt = 1, ye = 2, ti = 4;
k.parseFunction = function(t, e, r, a, u) {
  this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !a) && (this.type === h.star && e & ye && this.unexpected(), t.generator = this.eat(h.star)), this.options.ecmaVersion >= 8 && (t.async = !!a), e & Mt && (t.id = e & ti && this.type !== h.name ? null : this.parseIdent(), t.id && !(e & ye) && this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? Ce : xt : Qe));
  var f = this.yieldPos, d = this.awaitPos, v = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Pe(t.async, t.generator)), e & Mt || (t.id = this.type === h.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, r, !1, u), this.yieldPos = f, this.awaitPos = d, this.awaitIdentPos = v, this.finishNode(t, e & Mt ? "FunctionDeclaration" : "FunctionExpression");
};
k.parseFunctionParams = function(t) {
  this.expect(h.parenL), t.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
k.parseClass = function(t, e) {
  this.next();
  var r = this.strict;
  this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
  var a = this.enterClassBody(), u = this.startNode(), f = !1;
  for (u.body = [], this.expect(h.braceL); this.type !== h.braceR; ) {
    var d = this.parseClassElement(t.superClass !== null);
    d && (u.body.push(d), d.type === "MethodDefinition" && d.kind === "constructor" ? (f && this.raiseRecoverable(d.start, "Duplicate constructor in the same class"), f = !0) : d.key && d.key.type === "PrivateIdentifier" && Wi(a, d) && this.raiseRecoverable(d.key.start, "Identifier '#" + d.key.name + "' has already been declared"));
  }
  return this.strict = r, this.next(), t.body = this.finishNode(u, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
};
k.parseClassElement = function(t) {
  if (this.eat(h.semi))
    return null;
  var e = this.options.ecmaVersion, r = this.startNode(), a = "", u = !1, f = !1, d = "method", v = !1;
  if (this.eatContextual("static")) {
    if (e >= 13 && this.eat(h.braceL))
      return this.parseClassStaticBlock(r), r;
    this.isClassElementNameStart() || this.type === h.star ? v = !0 : a = "static";
  }
  if (r.static = v, !a && e >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === h.star) && !this.canInsertSemicolon() ? f = !0 : a = "async"), !a && (e >= 9 || !f) && this.eat(h.star) && (u = !0), !a && !f && !u) {
    var g = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? d = g : a = g);
  }
  if (a ? (r.computed = !1, r.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), r.key.name = a, this.finishNode(r.key, "Identifier")) : this.parseClassElementName(r), e < 13 || this.type === h.parenL || d !== "method" || u || f) {
    var o = !r.static && Xt(r, "constructor"), w = o && t;
    o && d !== "method" && this.raise(r.key.start, "Constructor can't have get/set modifier"), r.kind = o ? "constructor" : d, this.parseClassMethod(r, u, f, w);
  } else
    this.parseClassField(r);
  return r;
};
k.isClassElementNameStart = function() {
  return this.type === h.name || this.type === h.privateId || this.type === h.num || this.type === h.string || this.type === h.bracketL || this.type.keyword;
};
k.parseClassElementName = function(t) {
  this.type === h.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), t.computed = !1, t.key = this.parsePrivateIdent()) : this.parsePropertyName(t);
};
k.parseClassMethod = function(t, e, r, a) {
  var u = t.key;
  t.kind === "constructor" ? (e && this.raise(u.start, "Constructor can't be a generator"), r && this.raise(u.start, "Constructor can't be an async method")) : t.static && Xt(t, "prototype") && this.raise(u.start, "Classes may not have a static property named prototype");
  var f = t.value = this.parseMethod(e, r, a);
  return t.kind === "get" && f.params.length !== 0 && this.raiseRecoverable(f.start, "getter should have no params"), t.kind === "set" && f.params.length !== 1 && this.raiseRecoverable(f.start, "setter should have exactly one param"), t.kind === "set" && f.params[0].type === "RestElement" && this.raiseRecoverable(f.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition");
};
k.parseClassField = function(t) {
  return Xt(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && Xt(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(h.eq) ? (this.enterScope(jt | te), t.value = this.parseMaybeAssign(), this.exitScope()) : t.value = null, this.semicolon(), this.finishNode(t, "PropertyDefinition");
};
k.parseClassStaticBlock = function(t) {
  t.body = [];
  var e = this.labels;
  for (this.labels = [], this.enterScope(Ct | te); this.type !== h.braceR; ) {
    var r = this.parseStatement(null);
    t.body.push(r);
  }
  return this.next(), this.exitScope(), this.labels = e, this.finishNode(t, "StaticBlock");
};
k.parseClassId = function(t, e) {
  this.type === h.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, xt, !1)) : (e === !0 && this.unexpected(), t.id = null);
};
k.parseClassSuper = function(t) {
  t.superClass = this.eat(h._extends) ? this.parseExprSubscripts(null, !1) : null;
};
k.enterClassBody = function() {
  var t = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(t), t.declared;
};
k.exitClassBody = function() {
  var t = this.privateNameStack.pop(), e = t.declared, r = t.used;
  if (this.options.checkPrivateFields)
    for (var a = this.privateNameStack.length, u = a === 0 ? null : this.privateNameStack[a - 1], f = 0; f < r.length; ++f) {
      var d = r[f];
      Et(e, d.name) || (u ? u.used.push(d) : this.raiseRecoverable(d.start, "Private field '#" + d.name + "' must be declared in an enclosing class"));
    }
};
function Wi(t, e) {
  var r = e.key.name, a = t[r], u = "true";
  return e.type === "MethodDefinition" && (e.kind === "get" || e.kind === "set") && (u = (e.static ? "s" : "i") + e.kind), a === "iget" && u === "iset" || a === "iset" && u === "iget" || a === "sget" && u === "sset" || a === "sset" && u === "sget" ? (t[r] = "true", !1) : a ? !0 : (t[r] = u, !1);
}
function Xt(t, e) {
  var r = t.computed, a = t.key;
  return !r && (a.type === "Identifier" && a.name === e || a.type === "Literal" && a.value === e);
}
k.parseExportAllDeclaration = function(t, e) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseModuleExportName(), this.checkExport(e, t.exported, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== h.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
};
k.parseExport = function(t, e) {
  if (this.next(), this.eat(h.star))
    return this.parseExportAllDeclaration(t, e);
  if (this.eat(h._default))
    return this.checkExport(e, "default", this.lastTokStart), t.declaration = this.parseExportDefaultDeclaration(), this.finishNode(t, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    t.declaration = this.parseExportDeclaration(t), t.declaration.type === "VariableDeclaration" ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id, t.declaration.id.start), t.specifiers = [], t.source = null, this.options.ecmaVersion >= 16 && (t.attributes = []);
  else {
    if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from"))
      this.type !== h.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause());
    else {
      for (var r = 0, a = t.specifiers; r < a.length; r += 1) {
        var u = a[r];
        this.checkUnreserved(u.local), this.checkLocalExport(u.local), u.local.type === "Literal" && this.raise(u.local.start, "A string literal cannot be used as an exported binding without `from`.");
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
  if (this.type === h._function || (t = this.isAsyncFunction())) {
    var e = this.startNode();
    return this.next(), t && this.next(), this.parseFunction(e, Mt | ti, !1, t);
  } else if (this.type === h._class) {
    var r = this.startNode();
    return this.parseClass(r, "nullableID");
  } else {
    var a = this.parseMaybeAssign();
    return this.semicolon(), a;
  }
};
k.checkExport = function(t, e, r) {
  t && (typeof e != "string" && (e = e.type === "Identifier" ? e.name : e.value), Et(t, e) && this.raiseRecoverable(r, "Duplicate export '" + e + "'"), t[e] = !0);
};
k.checkPatternExport = function(t, e) {
  var r = e.type;
  if (r === "Identifier")
    this.checkExport(t, e, e.start);
  else if (r === "ObjectPattern")
    for (var a = 0, u = e.properties; a < u.length; a += 1) {
      var f = u[a];
      this.checkPatternExport(t, f);
    }
  else if (r === "ArrayPattern")
    for (var d = 0, v = e.elements; d < v.length; d += 1) {
      var g = v[d];
      g && this.checkPatternExport(t, g);
    }
  else r === "Property" ? this.checkPatternExport(t, e.value) : r === "AssignmentPattern" ? this.checkPatternExport(t, e.left) : r === "RestElement" && this.checkPatternExport(t, e.argument);
};
k.checkVariableExport = function(t, e) {
  if (t)
    for (var r = 0, a = e; r < a.length; r += 1) {
      var u = a[r];
      this.checkPatternExport(t, u.id);
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
  var e = [], r = !0;
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    e.push(this.parseExportSpecifier(t));
  }
  return e;
};
k.parseImport = function(t) {
  return this.next(), this.type === h.string ? (t.specifiers = zi, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === h.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ImportDeclaration");
};
k.parseImportSpecifier = function() {
  var t = this.startNode();
  return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, xt), this.finishNode(t, "ImportSpecifier");
};
k.parseImportDefaultSpecifier = function() {
  var t = this.startNode();
  return t.local = this.parseIdent(), this.checkLValSimple(t.local, xt), this.finishNode(t, "ImportDefaultSpecifier");
};
k.parseImportNamespaceSpecifier = function() {
  var t = this.startNode();
  return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, xt), this.finishNode(t, "ImportNamespaceSpecifier");
};
k.parseImportSpecifiers = function() {
  var t = [], e = !0;
  if (this.type === h.name && (t.push(this.parseImportDefaultSpecifier()), !this.eat(h.comma)))
    return t;
  if (this.type === h.star)
    return t.push(this.parseImportNamespaceSpecifier()), t;
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (e)
      e = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    t.push(this.parseImportSpecifier());
  }
  return t;
};
k.parseWithClause = function() {
  var t = [];
  if (!this.eat(h._with))
    return t;
  this.expect(h.braceL);
  for (var e = {}, r = !0; !this.eat(h.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    var a = this.parseImportAttribute(), u = a.key.type === "Identifier" ? a.key.name : a.key.value;
    Et(e, u) && this.raiseRecoverable(a.key.start, "Duplicate attribute key '" + u + "'"), e[u] = !0, t.push(a);
  }
  return t;
};
k.parseImportAttribute = function() {
  var t = this.startNode();
  return t.key = this.type === h.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(h.colon), this.type !== h.string && this.unexpected(), t.value = this.parseExprAtom(), this.finishNode(t, "ImportAttribute");
};
k.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === h.string) {
    var t = this.parseLiteral(this.value);
    return Bi.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t;
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
var ct = K.prototype;
ct.toAssignable = function(t, e, r) {
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
        t.type = "ObjectPattern", r && this.checkPatternErrors(r, !0);
        for (var a = 0, u = t.properties; a < u.length; a += 1) {
          var f = u[a];
          this.toAssignable(f, e), f.type === "RestElement" && (f.argument.type === "ArrayPattern" || f.argument.type === "ObjectPattern") && this.raise(f.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        t.kind !== "init" && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);
        break;
      case "ArrayExpression":
        t.type = "ArrayPattern", r && this.checkPatternErrors(r, !0), this.toAssignableList(t.elements, e);
        break;
      case "SpreadElement":
        t.type = "RestElement", this.toAssignable(t.argument, e), t.argument.type === "AssignmentPattern" && this.raise(t.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        t.operator !== "=" && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(t.expression, e, r);
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
  else r && this.checkPatternErrors(r, !0);
  return t;
};
ct.toAssignableList = function(t, e) {
  for (var r = t.length, a = 0; a < r; a++) {
    var u = t[a];
    u && this.toAssignable(u, e);
  }
  if (r) {
    var f = t[r - 1];
    this.options.ecmaVersion === 6 && e && f && f.type === "RestElement" && f.argument.type !== "Identifier" && this.unexpected(f.argument.start);
  }
  return t;
};
ct.parseSpread = function(t) {
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement");
};
ct.parseRestBinding = function() {
  var t = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== h.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
};
ct.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case h.bracketL:
        var t = this.startNode();
        return this.next(), t.elements = this.parseBindingList(h.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
      case h.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
ct.parseBindingList = function(t, e, r, a) {
  for (var u = [], f = !0; !this.eat(t); )
    if (f ? f = !1 : this.expect(h.comma), e && this.type === h.comma)
      u.push(null);
    else {
      if (r && this.afterTrailingComma(t))
        break;
      if (this.type === h.ellipsis) {
        var d = this.parseRestBinding();
        this.parseBindingListItem(d), u.push(d), this.type === h.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
        break;
      } else
        u.push(this.parseAssignableListItem(a));
    }
  return u;
};
ct.parseAssignableListItem = function(t) {
  var e = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(e), e;
};
ct.parseBindingListItem = function(t) {
  return t;
};
ct.parseMaybeDefault = function(t, e, r) {
  if (r = r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(h.eq))
    return r;
  var a = this.startNodeAt(t, e);
  return a.left = r, a.right = this.parseMaybeAssign(), this.finishNode(a, "AssignmentPattern");
};
ct.checkLValSimple = function(t, e, r) {
  e === void 0 && (e = $t);
  var a = e !== $t;
  switch (t.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (a ? "Binding " : "Assigning to ") + t.name + " in strict mode"), a && (e === xt && t.name === "let" && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), r && (Et(r, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), r[t.name] = !0), e !== Ze && this.declareName(t.name, e, t.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      a && this.raiseRecoverable(t.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return a && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, r);
    default:
      this.raise(t.start, (a ? "Binding" : "Assigning to") + " rvalue");
  }
};
ct.checkLValPattern = function(t, e, r) {
  switch (e === void 0 && (e = $t), t.type) {
    case "ObjectPattern":
      for (var a = 0, u = t.properties; a < u.length; a += 1) {
        var f = u[a];
        this.checkLValInnerPattern(f, e, r);
      }
      break;
    case "ArrayPattern":
      for (var d = 0, v = t.elements; d < v.length; d += 1) {
        var g = v[d];
        g && this.checkLValInnerPattern(g, e, r);
      }
      break;
    default:
      this.checkLValSimple(t, e, r);
  }
};
ct.checkLValInnerPattern = function(t, e, r) {
  switch (e === void 0 && (e = $t), t.type) {
    case "Property":
      this.checkLValInnerPattern(t.value, e, r);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(t.left, e, r);
      break;
    case "RestElement":
      this.checkLValPattern(t.argument, e, r);
      break;
    default:
      this.checkLValPattern(t, e, r);
  }
};
var Z = function(e, r, a, u, f) {
  this.token = e, this.isExpr = !!r, this.preserveSpace = !!a, this.override = u, this.generator = !!f;
}, q = {
  b_stat: new Z("{", !1),
  b_expr: new Z("{", !0),
  b_tmpl: new Z("${", !1),
  p_stat: new Z("(", !1),
  p_expr: new Z("(", !0),
  q_tmpl: new Z("`", !0, !0, function(t) {
    return t.tryReadTemplateToken();
  }),
  f_stat: new Z("function", !1),
  f_expr: new Z("function", !0),
  f_expr_gen: new Z("function", !0, !1, null, !0),
  f_gen: new Z("function", !1, !1, null, !0)
}, Nt = K.prototype;
Nt.initialContext = function() {
  return [q.b_stat];
};
Nt.curContext = function() {
  return this.context[this.context.length - 1];
};
Nt.braceIsBlock = function(t) {
  var e = this.curContext();
  return e === q.f_expr || e === q.f_stat ? !0 : t === h.colon && (e === q.b_stat || e === q.b_expr) ? !e.isExpr : t === h._return || t === h.name && this.exprAllowed ? tt.test(this.input.slice(this.lastTokEnd, this.start)) : t === h._else || t === h.semi || t === h.eof || t === h.parenR || t === h.arrow ? !0 : t === h.braceL ? e === q.b_stat : t === h._var || t === h._const || t === h.name ? !1 : !this.exprAllowed;
};
Nt.inGeneratorContext = function() {
  for (var t = this.context.length - 1; t >= 1; t--) {
    var e = this.context[t];
    if (e.token === "function")
      return e.generator;
  }
  return !1;
};
Nt.updateContext = function(t) {
  var e, r = this.type;
  r.keyword && t === h.dot ? this.exprAllowed = !1 : (e = r.updateContext) ? e.call(this, t) : this.exprAllowed = r.beforeExpr;
};
Nt.overrideContext = function(t) {
  this.curContext() !== t && (this.context[this.context.length - 1] = t);
};
h.parenR.updateContext = h.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var t = this.context.pop();
  t === q.b_stat && this.curContext().token === "function" && (t = this.context.pop()), this.exprAllowed = !t.isExpr;
};
h.braceL.updateContext = function(t) {
  this.context.push(this.braceIsBlock(t) ? q.b_stat : q.b_expr), this.exprAllowed = !0;
};
h.dollarBraceL.updateContext = function() {
  this.context.push(q.b_tmpl), this.exprAllowed = !0;
};
h.parenL.updateContext = function(t) {
  var e = t === h._if || t === h._for || t === h._with || t === h._while;
  this.context.push(e ? q.p_stat : q.p_expr), this.exprAllowed = !0;
};
h.incDec.updateContext = function() {
};
h._function.updateContext = h._class.updateContext = function(t) {
  t.beforeExpr && t !== h._else && !(t === h.semi && this.curContext() !== q.p_stat) && !(t === h._return && tt.test(this.input.slice(this.lastTokEnd, this.start))) && !((t === h.colon || t === h.braceL) && this.curContext() === q.b_stat) ? this.context.push(q.f_expr) : this.context.push(q.f_stat), this.exprAllowed = !1;
};
h.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
h.backQuote.updateContext = function() {
  this.curContext() === q.q_tmpl ? this.context.pop() : this.context.push(q.q_tmpl), this.exprAllowed = !1;
};
h.star.updateContext = function(t) {
  if (t === h._function) {
    var e = this.context.length - 1;
    this.context[e] === q.f_expr ? this.context[e] = q.f_expr_gen : this.context[e] = q.f_gen;
  }
  this.exprAllowed = !0;
};
h.name.updateContext = function(t) {
  var e = !1;
  this.options.ecmaVersion >= 6 && t !== h.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e;
};
var N = K.prototype;
N.checkPropClash = function(t, e, r) {
  if (!(this.options.ecmaVersion >= 9 && t.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
    var a = t.key, u;
    switch (a.type) {
      case "Identifier":
        u = a.name;
        break;
      case "Literal":
        u = String(a.value);
        break;
      default:
        return;
    }
    var f = t.kind;
    if (this.options.ecmaVersion >= 6) {
      u === "__proto__" && f === "init" && (e.proto && (r ? r.doubleProto < 0 && (r.doubleProto = a.start) : this.raiseRecoverable(a.start, "Redefinition of __proto__ property")), e.proto = !0);
      return;
    }
    u = "$" + u;
    var d = e[u];
    if (d) {
      var v;
      f === "init" ? v = this.strict && d.init || d.get || d.set : v = d.init || d[f], v && this.raiseRecoverable(a.start, "Redefinition of property");
    } else
      d = e[u] = {
        init: !1,
        get: !1,
        set: !1
      };
    d[f] = !0;
  }
};
N.parseExpression = function(t, e) {
  var r = this.start, a = this.startLoc, u = this.parseMaybeAssign(t, e);
  if (this.type === h.comma) {
    var f = this.startNodeAt(r, a);
    for (f.expressions = [u]; this.eat(h.comma); )
      f.expressions.push(this.parseMaybeAssign(t, e));
    return this.finishNode(f, "SequenceExpression");
  }
  return u;
};
N.parseMaybeAssign = function(t, e, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(t);
    this.exprAllowed = !1;
  }
  var a = !1, u = -1, f = -1, d = -1;
  e ? (u = e.parenthesizedAssign, f = e.trailingComma, d = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new ie(), a = !0);
  var v = this.start, g = this.startLoc;
  (this.type === h.parenL || this.type === h.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = t === "await");
  var o = this.parseMaybeConditional(t, e);
  if (r && (o = r.call(this, o, v, g)), this.type.isAssign) {
    var w = this.startNodeAt(v, g);
    return w.operator = this.value, this.type === h.eq && (o = this.toAssignable(o, !1, e)), a || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= o.start && (e.shorthandAssign = -1), this.type === h.eq ? this.checkLValPattern(o) : this.checkLValSimple(o), w.left = o, this.next(), w.right = this.parseMaybeAssign(t), d > -1 && (e.doubleProto = d), this.finishNode(w, "AssignmentExpression");
  } else
    a && this.checkExpressionErrors(e, !0);
  return u > -1 && (e.parenthesizedAssign = u), f > -1 && (e.trailingComma = f), o;
};
N.parseMaybeConditional = function(t, e) {
  var r = this.start, a = this.startLoc, u = this.parseExprOps(t, e);
  if (this.checkExpressionErrors(e))
    return u;
  if (this.eat(h.question)) {
    var f = this.startNodeAt(r, a);
    return f.test = u, f.consequent = this.parseMaybeAssign(), this.expect(h.colon), f.alternate = this.parseMaybeAssign(t), this.finishNode(f, "ConditionalExpression");
  }
  return u;
};
N.parseExprOps = function(t, e) {
  var r = this.start, a = this.startLoc, u = this.parseMaybeUnary(e, !1, !1, t);
  return this.checkExpressionErrors(e) || u.start === r && u.type === "ArrowFunctionExpression" ? u : this.parseExprOp(u, r, a, -1, t);
};
N.parseExprOp = function(t, e, r, a, u) {
  var f = this.type.binop;
  if (f != null && (!u || this.type !== h._in) && f > a) {
    var d = this.type === h.logicalOR || this.type === h.logicalAND, v = this.type === h.coalesce;
    v && (f = h.logicalAND.binop);
    var g = this.value;
    this.next();
    var o = this.start, w = this.startLoc, _ = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, u), o, w, f, u), D = this.buildBinary(e, r, t, _, g, d || v);
    return (d && this.type === h.coalesce || v && (this.type === h.logicalOR || this.type === h.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(D, e, r, a, u);
  }
  return t;
};
N.buildBinary = function(t, e, r, a, u, f) {
  a.type === "PrivateIdentifier" && this.raise(a.start, "Private identifier can only be left side of binary expression");
  var d = this.startNodeAt(t, e);
  return d.left = r, d.operator = u, d.right = a, this.finishNode(d, f ? "LogicalExpression" : "BinaryExpression");
};
N.parseMaybeUnary = function(t, e, r, a) {
  var u = this.start, f = this.startLoc, d;
  if (this.isContextual("await") && this.canAwait)
    d = this.parseAwait(a), e = !0;
  else if (this.type.prefix) {
    var v = this.startNode(), g = this.type === h.incDec;
    v.operator = this.value, v.prefix = !0, this.next(), v.argument = this.parseMaybeUnary(null, !0, g, a), this.checkExpressionErrors(t, !0), g ? this.checkLValSimple(v.argument) : this.strict && v.operator === "delete" && ei(v.argument) ? this.raiseRecoverable(v.start, "Deleting local variable in strict mode") : v.operator === "delete" && xe(v.argument) ? this.raiseRecoverable(v.start, "Private fields can not be deleted") : e = !0, d = this.finishNode(v, g ? "UpdateExpression" : "UnaryExpression");
  } else if (!e && this.type === h.privateId)
    (a || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), d = this.parsePrivateIdent(), this.type !== h._in && this.unexpected();
  else {
    if (d = this.parseExprSubscripts(t, a), this.checkExpressionErrors(t))
      return d;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var o = this.startNodeAt(u, f);
      o.operator = this.value, o.prefix = !1, o.argument = d, this.checkLValSimple(d), this.next(), d = this.finishNode(o, "UpdateExpression");
    }
  }
  if (!r && this.eat(h.starstar))
    if (e)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(u, f, d, this.parseMaybeUnary(null, !1, !1, a), "**", !1);
  else
    return d;
};
function ei(t) {
  return t.type === "Identifier" || t.type === "ParenthesizedExpression" && ei(t.expression);
}
function xe(t) {
  return t.type === "MemberExpression" && t.property.type === "PrivateIdentifier" || t.type === "ChainExpression" && xe(t.expression) || t.type === "ParenthesizedExpression" && xe(t.expression);
}
N.parseExprSubscripts = function(t, e) {
  var r = this.start, a = this.startLoc, u = this.parseExprAtom(t, e);
  if (u.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return u;
  var f = this.parseSubscripts(u, r, a, !1, e);
  return t && f.type === "MemberExpression" && (t.parenthesizedAssign >= f.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= f.start && (t.parenthesizedBind = -1), t.trailingComma >= f.start && (t.trailingComma = -1)), f;
};
N.parseSubscripts = function(t, e, r, a, u) {
  for (var f = this.options.ecmaVersion >= 8 && t.type === "Identifier" && t.name === "async" && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.potentialArrowAt === t.start, d = !1; ; ) {
    var v = this.parseSubscript(t, e, r, a, f, d, u);
    if (v.optional && (d = !0), v === t || v.type === "ArrowFunctionExpression") {
      if (d) {
        var g = this.startNodeAt(e, r);
        g.expression = v, v = this.finishNode(g, "ChainExpression");
      }
      return v;
    }
    t = v;
  }
};
N.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(h.arrow);
};
N.parseSubscriptAsyncArrow = function(t, e, r, a) {
  return this.parseArrowExpression(this.startNodeAt(t, e), r, !0, a);
};
N.parseSubscript = function(t, e, r, a, u, f, d) {
  var v = this.options.ecmaVersion >= 11, g = v && this.eat(h.questionDot);
  a && g && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var o = this.eat(h.bracketL);
  if (o || g && this.type !== h.parenL && this.type !== h.backQuote || this.eat(h.dot)) {
    var w = this.startNodeAt(e, r);
    w.object = t, o ? (w.property = this.parseExpression(), this.expect(h.bracketR)) : this.type === h.privateId && t.type !== "Super" ? w.property = this.parsePrivateIdent() : w.property = this.parseIdent(this.options.allowReserved !== "never"), w.computed = !!o, v && (w.optional = g), t = this.finishNode(w, "MemberExpression");
  } else if (!a && this.eat(h.parenL)) {
    var _ = new ie(), D = this.yieldPos, R = this.awaitPos, j = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var J = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1, _);
    if (u && !g && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(_, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = D, this.awaitPos = R, this.awaitIdentPos = j, this.parseSubscriptAsyncArrow(e, r, J, d);
    this.checkExpressionErrors(_, !0), this.yieldPos = D || this.yieldPos, this.awaitPos = R || this.awaitPos, this.awaitIdentPos = j || this.awaitIdentPos;
    var I = this.startNodeAt(e, r);
    I.callee = t, I.arguments = J, v && (I.optional = g), t = this.finishNode(I, "CallExpression");
  } else if (this.type === h.backQuote) {
    (g || f) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var X = this.startNodeAt(e, r);
    X.tag = t, X.quasi = this.parseTemplate({ isTagged: !0 }), t = this.finishNode(X, "TaggedTemplateExpression");
  }
  return t;
};
N.parseExprAtom = function(t, e, r) {
  this.type === h.slash && this.readRegexp();
  var a, u = this.potentialArrowAt === this.start;
  switch (this.type) {
    case h._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), a = this.startNode(), this.next(), this.type === h.parenL && !this.allowDirectSuper && this.raise(a.start, "super() call outside constructor of a subclass"), this.type !== h.dot && this.type !== h.bracketL && this.type !== h.parenL && this.unexpected(), this.finishNode(a, "Super");
    case h._this:
      return a = this.startNode(), this.next(), this.finishNode(a, "ThisExpression");
    case h.name:
      var f = this.start, d = this.startLoc, v = this.containsEsc, g = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !v && g.name === "async" && !this.canInsertSemicolon() && this.eat(h._function))
        return this.overrideContext(q.f_expr), this.parseFunction(this.startNodeAt(f, d), 0, !1, !0, e);
      if (u && !this.canInsertSemicolon()) {
        if (this.eat(h.arrow))
          return this.parseArrowExpression(this.startNodeAt(f, d), [g], !1, e);
        if (this.options.ecmaVersion >= 8 && g.name === "async" && this.type === h.name && !v && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return g = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(h.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(f, d), [g], !0, e);
      }
      return g;
    case h.regexp:
      var o = this.value;
      return a = this.parseLiteral(o.value), a.regex = { pattern: o.pattern, flags: o.flags }, a;
    case h.num:
    case h.string:
      return this.parseLiteral(this.value);
    case h._null:
    case h._true:
    case h._false:
      return a = this.startNode(), a.value = this.type === h._null ? null : this.type === h._true, a.raw = this.type.keyword, this.next(), this.finishNode(a, "Literal");
    case h.parenL:
      var w = this.start, _ = this.parseParenAndDistinguishExpression(u, e);
      return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(_) && (t.parenthesizedAssign = w), t.parenthesizedBind < 0 && (t.parenthesizedBind = w)), _;
    case h.bracketL:
      return a = this.startNode(), this.next(), a.elements = this.parseExprList(h.bracketR, !0, !0, t), this.finishNode(a, "ArrayExpression");
    case h.braceL:
      return this.overrideContext(q.b_expr), this.parseObj(!1, t);
    case h._function:
      return a = this.startNode(), this.next(), this.parseFunction(a, 0);
    case h._class:
      return this.parseClass(this.startNode(), !1);
    case h._new:
      return this.parseNew();
    case h.backQuote:
      return this.parseTemplate();
    case h._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(r) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
N.parseExprAtomDefault = function() {
  this.unexpected();
};
N.parseExprImport = function(t) {
  var e = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === h.parenL && !t)
    return this.parseDynamicImport(e);
  if (this.type === h.dot) {
    var r = this.startNodeAt(e.start, e.loc && e.loc.start);
    return r.name = "import", e.meta = this.finishNode(r, "Identifier"), this.parseImportMeta(e);
  } else
    this.unexpected();
};
N.parseDynamicImport = function(t) {
  if (this.next(), t.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(h.parenR) ? t.options = null : (this.expect(h.comma), this.afterTrailingComma(h.parenR) ? t.options = null : (t.options = this.parseMaybeAssign(), this.eat(h.parenR) || (this.expect(h.comma), this.afterTrailingComma(h.parenR) || this.unexpected())));
  else if (!this.eat(h.parenR)) {
    var e = this.start;
    this.eat(h.comma) && this.eat(h.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e);
  }
  return this.finishNode(t, "ImportExpression");
};
N.parseImportMeta = function(t) {
  this.next();
  var e = this.containsEsc;
  return t.property = this.parseIdent(!0), t.property.name !== "meta" && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty");
};
N.parseLiteral = function(t) {
  var e = this.startNode();
  return e.value = t, e.raw = this.input.slice(this.start, this.end), e.raw.charCodeAt(e.raw.length - 1) === 110 && (e.bigint = e.value != null ? e.value.toString() : e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal");
};
N.parseParenExpression = function() {
  this.expect(h.parenL);
  var t = this.parseExpression();
  return this.expect(h.parenR), t;
};
N.shouldParseArrow = function(t) {
  return !this.canInsertSemicolon();
};
N.parseParenAndDistinguishExpression = function(t, e) {
  var r = this.start, a = this.startLoc, u, f = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var d = this.start, v = this.startLoc, g = [], o = !0, w = !1, _ = new ie(), D = this.yieldPos, R = this.awaitPos, j;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== h.parenR; )
      if (o ? o = !1 : this.expect(h.comma), f && this.afterTrailingComma(h.parenR, !0)) {
        w = !0;
        break;
      } else if (this.type === h.ellipsis) {
        j = this.start, g.push(this.parseParenItem(this.parseRestBinding())), this.type === h.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        g.push(this.parseMaybeAssign(!1, _, this.parseParenItem));
    var J = this.lastTokEnd, I = this.lastTokEndLoc;
    if (this.expect(h.parenR), t && this.shouldParseArrow(g) && this.eat(h.arrow))
      return this.checkPatternErrors(_, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = D, this.awaitPos = R, this.parseParenArrowList(r, a, g, e);
    (!g.length || w) && this.unexpected(this.lastTokStart), j && this.unexpected(j), this.checkExpressionErrors(_, !0), this.yieldPos = D || this.yieldPos, this.awaitPos = R || this.awaitPos, g.length > 1 ? (u = this.startNodeAt(d, v), u.expressions = g, this.finishNodeAt(u, "SequenceExpression", J, I)) : u = g[0];
  } else
    u = this.parseParenExpression();
  if (this.options.preserveParens) {
    var X = this.startNodeAt(r, a);
    return X.expression = u, this.finishNode(X, "ParenthesizedExpression");
  } else
    return u;
};
N.parseParenItem = function(t) {
  return t;
};
N.parseParenArrowList = function(t, e, r, a) {
  return this.parseArrowExpression(this.startNodeAt(t, e), r, !1, a);
};
var Ki = [];
N.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var t = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === h.dot) {
    var e = this.startNodeAt(t.start, t.loc && t.loc.start);
    e.name = "new", t.meta = this.finishNode(e, "Identifier"), this.next();
    var r = this.containsEsc;
    return t.property = this.parseIdent(!0), t.property.name !== "target" && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), r && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty");
  }
  var a = this.start, u = this.startLoc;
  return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), a, u, !0, !1), this.eat(h.parenL) ? t.arguments = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = Ki, this.finishNode(t, "NewExpression");
};
N.parseTemplateElement = function(t) {
  var e = t.isTagged, r = this.startNode();
  return this.type === h.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), r.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : r.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), r.tail = this.type === h.backQuote, this.finishNode(r, "TemplateElement");
};
N.parseTemplate = function(t) {
  t === void 0 && (t = {});
  var e = t.isTagged;
  e === void 0 && (e = !1);
  var r = this.startNode();
  this.next(), r.expressions = [];
  var a = this.parseTemplateElement({ isTagged: e });
  for (r.quasis = [a]; !a.tail; )
    this.type === h.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(h.dollarBraceL), r.expressions.push(this.parseExpression()), this.expect(h.braceR), r.quasis.push(a = this.parseTemplateElement({ isTagged: e }));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
N.isAsyncProp = function(t) {
  return !t.computed && t.key.type === "Identifier" && t.key.name === "async" && (this.type === h.name || this.type === h.num || this.type === h.string || this.type === h.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === h.star) && !tt.test(this.input.slice(this.lastTokEnd, this.start));
};
N.parseObj = function(t, e) {
  var r = this.startNode(), a = !0, u = {};
  for (r.properties = [], this.next(); !this.eat(h.braceR); ) {
    if (a)
      a = !1;
    else if (this.expect(h.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(h.braceR))
      break;
    var f = this.parseProperty(t, e);
    t || this.checkPropClash(f, u, e), r.properties.push(f);
  }
  return this.finishNode(r, t ? "ObjectPattern" : "ObjectExpression");
};
N.parseProperty = function(t, e) {
  var r = this.startNode(), a, u, f, d;
  if (this.options.ecmaVersion >= 9 && this.eat(h.ellipsis))
    return t ? (r.argument = this.parseIdent(!1), this.type === h.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(r, "RestElement")) : (r.argument = this.parseMaybeAssign(!1, e), this.type === h.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (r.method = !1, r.shorthand = !1, (t || e) && (f = this.start, d = this.startLoc), t || (a = this.eat(h.star)));
  var v = this.containsEsc;
  return this.parsePropertyName(r), !t && !v && this.options.ecmaVersion >= 8 && !a && this.isAsyncProp(r) ? (u = !0, a = this.options.ecmaVersion >= 9 && this.eat(h.star), this.parsePropertyName(r)) : u = !1, this.parsePropertyValue(r, t, a, u, f, d, e, v), this.finishNode(r, "Property");
};
N.parseGetterSetter = function(t) {
  var e = t.key.name;
  this.parsePropertyName(t), t.value = this.parseMethod(!1), t.kind = e;
  var r = t.kind === "get" ? 0 : 1;
  if (t.value.params.length !== r) {
    var a = t.value.start;
    t.kind === "get" ? this.raiseRecoverable(a, "getter should have no params") : this.raiseRecoverable(a, "setter should have exactly one param");
  } else
    t.kind === "set" && t.value.params[0].type === "RestElement" && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params");
};
N.parsePropertyValue = function(t, e, r, a, u, f, d, v) {
  (r || a) && this.type === h.colon && this.unexpected(), this.eat(h.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, d), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === h.parenL ? (e && this.unexpected(), t.method = !0, t.value = this.parseMethod(r, a), t.kind = "init") : !e && !v && this.options.ecmaVersion >= 5 && !t.computed && t.key.type === "Identifier" && (t.key.name === "get" || t.key.name === "set") && this.type !== h.comma && this.type !== h.braceR && this.type !== h.eq ? ((r || a) && this.unexpected(), this.parseGetterSetter(t)) : this.options.ecmaVersion >= 6 && !t.computed && t.key.type === "Identifier" ? ((r || a) && this.unexpected(), this.checkUnreserved(t.key), t.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = u), e ? t.value = this.parseMaybeDefault(u, f, this.copyNode(t.key)) : this.type === h.eq && d ? (d.shorthandAssign < 0 && (d.shorthandAssign = this.start), t.value = this.parseMaybeDefault(u, f, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.kind = "init", t.shorthand = !0) : this.unexpected();
};
N.parsePropertyName = function(t) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(h.bracketL))
      return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(h.bracketR), t.key;
    t.computed = !1;
  }
  return t.key = this.type === h.num || this.type === h.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
N.initFunction = function(t) {
  t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1);
};
N.parseMethod = function(t, e, r) {
  var a = this.startNode(), u = this.yieldPos, f = this.awaitPos, d = this.awaitIdentPos;
  return this.initFunction(a), this.options.ecmaVersion >= 6 && (a.generator = t), this.options.ecmaVersion >= 8 && (a.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Pe(e, a.generator) | te | (r ? Xe : 0)), this.expect(h.parenL), a.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(a, !1, !0, !1), this.yieldPos = u, this.awaitPos = f, this.awaitIdentPos = d, this.finishNode(a, "FunctionExpression");
};
N.parseArrowExpression = function(t, e, r, a) {
  var u = this.yieldPos, f = this.awaitPos, d = this.awaitIdentPos;
  return this.enterScope(Pe(r, !1) | Te), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, a), this.yieldPos = u, this.awaitPos = f, this.awaitIdentPos = d, this.finishNode(t, "ArrowFunctionExpression");
};
N.parseFunctionBody = function(t, e, r, a) {
  var u = e && this.type !== h.braceL, f = this.strict, d = !1;
  if (u)
    t.body = this.parseMaybeAssign(a), t.expression = !0, this.checkParams(t, !1);
  else {
    var v = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
    (!f || v) && (d = this.strictDirective(this.end), d && v && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var g = this.labels;
    this.labels = [], d && (this.strict = !0), this.checkParams(t, !f && !d && !e && !r && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, Ze), t.body = this.parseBlock(!1, void 0, d && !f), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = g;
  }
  this.exitScope();
};
N.isSimpleParamList = function(t) {
  for (var e = 0, r = t; e < r.length; e += 1) {
    var a = r[e];
    if (a.type !== "Identifier")
      return !1;
  }
  return !0;
};
N.checkParams = function(t, e) {
  for (var r = /* @__PURE__ */ Object.create(null), a = 0, u = t.params; a < u.length; a += 1) {
    var f = u[a];
    this.checkLValInnerPattern(f, Ce, e ? null : r);
  }
};
N.parseExprList = function(t, e, r, a) {
  for (var u = [], f = !0; !this.eat(t); ) {
    if (f)
      f = !1;
    else if (this.expect(h.comma), e && this.afterTrailingComma(t))
      break;
    var d = void 0;
    r && this.type === h.comma ? d = null : this.type === h.ellipsis ? (d = this.parseSpread(a), a && this.type === h.comma && a.trailingComma < 0 && (a.trailingComma = this.start)) : d = this.parseMaybeAssign(!1, a), u.push(d);
  }
  return u;
};
N.checkUnreserved = function(t) {
  var e = t.start, r = t.end, a = t.name;
  if (this.inGenerator && a === "yield" && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && a === "await" && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & ee) && a === "arguments" && this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (a === "arguments" || a === "await") && this.raise(e, "Cannot use " + a + " in class static initialization block"), this.keywords.test(a) && this.raise(e, "Unexpected keyword '" + a + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(e, r).indexOf("\\") !== -1)) {
    var u = this.strict ? this.reservedWordsStrict : this.reservedWords;
    u.test(a) && (!this.inAsync && a === "await" && this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + a + "' is reserved"));
  }
};
N.parseIdent = function(t) {
  var e = this.parseIdentNode();
  return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), e.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = e.start)), e;
};
N.parseIdentNode = function() {
  var t = this.startNode();
  return this.type === h.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, (t.name === "class" || t.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = h.name) : this.unexpected(), t;
};
N.parsePrivateIdent = function() {
  var t = this.startNode();
  return this.type === h.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t;
};
N.parseYield = function(t) {
  this.yieldPos || (this.yieldPos = this.start);
  var e = this.startNode();
  return this.next(), this.type === h.semi || this.canInsertSemicolon() || this.type !== h.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(h.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression");
};
N.parseAwait = function(t) {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression");
};
var Qt = K.prototype;
Qt.raise = function(t, e) {
  var r = be(this.input, t);
  e += " (" + r.line + ":" + r.column + ")", this.sourceFile && (e += " in " + this.sourceFile);
  var a = new SyntaxError(e);
  throw a.pos = t, a.loc = r, a.raisedAt = this.pos, a;
};
Qt.raiseRecoverable = Qt.raise;
Qt.curPosition = function() {
  if (this.options.locations)
    return new wt(this.curLine, this.pos - this.lineStart);
};
var St = K.prototype, Ji = function(e) {
  this.flags = e, this.var = [], this.lexical = [], this.functions = [];
};
St.enterScope = function(t) {
  this.scopeStack.push(new Ji(t));
};
St.exitScope = function() {
  this.scopeStack.pop();
};
St.treatFunctionsAsVarInScope = function(t) {
  return t.flags & It || !this.inModule && t.flags & Ft;
};
St.declareName = function(t, e, r) {
  var a = !1;
  if (e === xt) {
    var u = this.currentScope();
    a = u.lexical.indexOf(t) > -1 || u.functions.indexOf(t) > -1 || u.var.indexOf(t) > -1, u.lexical.push(t), this.inModule && u.flags & Ft && delete this.undefinedExports[t];
  } else if (e === Ye) {
    var f = this.currentScope();
    f.lexical.push(t);
  } else if (e === Qe) {
    var d = this.currentScope();
    this.treatFunctionsAsVar ? a = d.lexical.indexOf(t) > -1 : a = d.lexical.indexOf(t) > -1 || d.var.indexOf(t) > -1, d.functions.push(t);
  } else
    for (var v = this.scopeStack.length - 1; v >= 0; --v) {
      var g = this.scopeStack[v];
      if (g.lexical.indexOf(t) > -1 && !(g.flags & $e && g.lexical[0] === t) || !this.treatFunctionsAsVarInScope(g) && g.functions.indexOf(t) > -1) {
        a = !0;
        break;
      }
      if (g.var.push(t), this.inModule && g.flags & Ft && delete this.undefinedExports[t], g.flags & ee)
        break;
    }
  a && this.raiseRecoverable(r, "Identifier '" + t + "' has already been declared");
};
St.checkLocalExport = function(t) {
  this.scopeStack[0].lexical.indexOf(t.name) === -1 && this.scopeStack[0].var.indexOf(t.name) === -1 && (this.undefinedExports[t.name] = t);
};
St.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
St.currentVarScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (ee | jt | Ct))
      return e;
  }
};
St.currentThisScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (ee | jt | Ct) && !(e.flags & Te))
      return e;
  }
};
var Ut = function(e, r, a) {
  this.type = "", this.start = r, this.end = 0, e.options.locations && (this.loc = new Bt(e, a)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [r, 0]);
}, qt = K.prototype;
qt.startNode = function() {
  return new Ut(this, this.start, this.startLoc);
};
qt.startNodeAt = function(t, e) {
  return new Ut(this, t, e);
};
function ii(t, e, r, a) {
  return t.type = e, t.end = r, this.options.locations && (t.loc.end = a), this.options.ranges && (t.range[1] = r), t;
}
qt.finishNode = function(t, e) {
  return ii.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
};
qt.finishNodeAt = function(t, e, r, a) {
  return ii.call(this, t, e, r, a);
};
qt.copyNode = function(t) {
  var e = new Ut(this, t.start, this.startLoc);
  for (var r in t)
    e[r] = t[r];
  return e;
};
var Gi = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", si = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", ri = si + " Extended_Pictographic", ai = ri, ni = ai + " EBase EComp EMod EPres ExtPict", oi = ni, $i = oi, Xi = {
  9: si,
  10: ri,
  11: ai,
  12: ni,
  13: oi,
  14: $i
}, Qi = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Yi = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Qi
}, Re = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", hi = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", ui = hi + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", ci = ui + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", pi = ci + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", li = pi + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Zi = li + " " + Gi, ts = {
  9: hi,
  10: ui,
  11: ci,
  12: pi,
  13: li,
  14: Zi
}, fi = {};
function es(t) {
  var e = fi[t] = {
    binary: bt(Xi[t] + " " + Re),
    binaryOfStrings: bt(Yi[t]),
    nonBinary: {
      General_Category: bt(Re),
      Script: bt(ts[t])
    }
  };
  e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions;
}
for (var le = 0, Me = [9, 10, 11, 12, 13, 14]; le < Me.length; le += 1) {
  var is = Me[le];
  es(is);
}
var P = K.prototype, Yt = function(e, r) {
  this.parent = e, this.base = r || this;
};
Yt.prototype.separatedFrom = function(e) {
  for (var r = this; r; r = r.parent)
    for (var a = e; a; a = a.parent)
      if (r.base === a.base && r !== a)
        return !0;
  return !1;
};
Yt.prototype.sibling = function() {
  return new Yt(this.parent, this.base);
};
var ft = function(e) {
  this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : "") + (e.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = fi[e.options.ecmaVersion >= 14 ? 14 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
ft.prototype.reset = function(e, r, a) {
  var u = a.indexOf("v") !== -1, f = a.indexOf("u") !== -1;
  this.start = e | 0, this.source = r + "", this.flags = a, u && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = f && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = f && this.parser.options.ecmaVersion >= 9);
};
ft.prototype.raise = function(e) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
};
ft.prototype.at = function(e, r) {
  r === void 0 && (r = !1);
  var a = this.source, u = a.length;
  if (e >= u)
    return -1;
  var f = a.charCodeAt(e);
  if (!(r || this.switchU) || f <= 55295 || f >= 57344 || e + 1 >= u)
    return f;
  var d = a.charCodeAt(e + 1);
  return d >= 56320 && d <= 57343 ? (f << 10) + d - 56613888 : f;
};
ft.prototype.nextIndex = function(e, r) {
  r === void 0 && (r = !1);
  var a = this.source, u = a.length;
  if (e >= u)
    return u;
  var f = a.charCodeAt(e), d;
  return !(r || this.switchU) || f <= 55295 || f >= 57344 || e + 1 >= u || (d = a.charCodeAt(e + 1)) < 56320 || d > 57343 ? e + 1 : e + 2;
};
ft.prototype.current = function(e) {
  return e === void 0 && (e = !1), this.at(this.pos, e);
};
ft.prototype.lookahead = function(e) {
  return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
};
ft.prototype.advance = function(e) {
  e === void 0 && (e = !1), this.pos = this.nextIndex(this.pos, e);
};
ft.prototype.eat = function(e, r) {
  return r === void 0 && (r = !1), this.current(r) === e ? (this.advance(r), !0) : !1;
};
ft.prototype.eatChars = function(e, r) {
  r === void 0 && (r = !1);
  for (var a = this.pos, u = 0, f = e; u < f.length; u += 1) {
    var d = f[u], v = this.at(a, r);
    if (v === -1 || v !== d)
      return !1;
    a = this.nextIndex(a, r);
  }
  return this.pos = a, !0;
};
P.validateRegExpFlags = function(t) {
  for (var e = t.validFlags, r = t.flags, a = !1, u = !1, f = 0; f < r.length; f++) {
    var d = r.charAt(f);
    e.indexOf(d) === -1 && this.raise(t.start, "Invalid regular expression flag"), r.indexOf(d, f + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), d === "u" && (a = !0), d === "v" && (u = !0);
  }
  this.options.ecmaVersion >= 15 && a && u && this.raise(t.start, "Invalid regular expression flag");
};
function ss(t) {
  for (var e in t)
    return !0;
  return !1;
}
P.validateRegExpPattern = function(t) {
  this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && ss(t.groupNames) && (t.switchN = !0, this.regexp_pattern(t));
};
P.regexp_pattern = function(t) {
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
  for (var e = 0, r = t.backReferenceNames; e < r.length; e += 1) {
    var a = r[e];
    t.groupNames[a] || t.raise("Invalid named capture referenced");
  }
};
P.regexp_disjunction = function(t) {
  var e = this.options.ecmaVersion >= 16;
  for (e && (t.branchID = new Yt(t.branchID, null)), this.regexp_alternative(t); t.eat(
    124
    /* | */
  ); )
    e && (t.branchID = t.branchID.sibling()), this.regexp_alternative(t);
  e && (t.branchID = t.branchID.parent), this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(
    123
    /* { */
  ) && t.raise("Lone quantifier brackets");
};
P.regexp_alternative = function(t) {
  for (; t.pos < t.source.length && this.regexp_eatTerm(t); )
    ;
};
P.regexp_eatTerm = function(t) {
  return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : (t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) ? (this.regexp_eatQuantifier(t), !0) : !1;
};
P.regexp_eatAssertion = function(t) {
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
    var r = !1;
    if (this.options.ecmaVersion >= 9 && (r = t.eat(
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
      ) || t.raise("Unterminated group"), t.lastAssertionIsQuantifiable = !r, !0;
  }
  return t.pos = e, !1;
};
P.regexp_eatQuantifier = function(t, e) {
  return e === void 0 && (e = !1), this.regexp_eatQuantifierPrefix(t, e) ? (t.eat(
    63
    /* ? */
  ), !0) : !1;
};
P.regexp_eatQuantifierPrefix = function(t, e) {
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
P.regexp_eatBracedQuantifier = function(t, e) {
  var r = t.pos;
  if (t.eat(
    123
    /* { */
  )) {
    var a = 0, u = -1;
    if (this.regexp_eatDecimalDigits(t) && (a = t.lastIntValue, t.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(t) && (u = t.lastIntValue), t.eat(
      125
      /* } */
    )))
      return u !== -1 && u < a && !e && t.raise("numbers out of order in {} quantifier"), !0;
    t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = r;
  }
  return !1;
};
P.regexp_eatAtom = function(t) {
  return this.regexp_eatPatternCharacters(t) || t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t);
};
P.regexp_eatReverseSolidusAtomEscape = function(t) {
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
P.regexp_eatUncapturingGroup = function(t) {
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
        var r = this.regexp_eatModifiers(t), a = t.eat(
          45
          /* - */
        );
        if (r || a) {
          for (var u = 0; u < r.length; u++) {
            var f = r.charAt(u);
            r.indexOf(f, u + 1) > -1 && t.raise("Duplicate regular expression modifiers");
          }
          if (a) {
            var d = this.regexp_eatModifiers(t);
            !r && !d && t.current() === 58 && t.raise("Invalid regular expression modifiers");
            for (var v = 0; v < d.length; v++) {
              var g = d.charAt(v);
              (d.indexOf(g, v + 1) > -1 || r.indexOf(g) > -1) && t.raise("Duplicate regular expression modifiers");
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
P.regexp_eatCapturingGroup = function(t) {
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
P.regexp_eatModifiers = function(t) {
  for (var e = "", r = 0; (r = t.current()) !== -1 && rs(r); )
    e += mt(r), t.advance();
  return e;
};
function rs(t) {
  return t === 105 || t === 109 || t === 115;
}
P.regexp_eatExtendedAtom = function(t) {
  return t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t);
};
P.regexp_eatInvalidBracedQuantifier = function(t) {
  return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1;
};
P.regexp_eatSyntaxCharacter = function(t) {
  var e = t.current();
  return di(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function di(t) {
  return t === 36 || t >= 40 && t <= 43 || t === 46 || t === 63 || t >= 91 && t <= 94 || t >= 123 && t <= 125;
}
P.regexp_eatPatternCharacters = function(t) {
  for (var e = t.pos, r = 0; (r = t.current()) !== -1 && !di(r); )
    t.advance();
  return t.pos !== e;
};
P.regexp_eatExtendedPatternCharacter = function(t) {
  var e = t.current();
  return e !== -1 && e !== 36 && !(e >= 40 && e <= 43) && e !== 46 && e !== 63 && e !== 91 && e !== 94 && e !== 124 ? (t.advance(), !0) : !1;
};
P.regexp_groupSpecifier = function(t) {
  if (t.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(t) || t.raise("Invalid group");
    var e = this.options.ecmaVersion >= 16, r = t.groupNames[t.lastStringValue];
    if (r)
      if (e)
        for (var a = 0, u = r; a < u.length; a += 1) {
          var f = u[a];
          f.separatedFrom(t.branchID) || t.raise("Duplicate capture group name");
        }
      else
        t.raise("Duplicate capture group name");
    e ? (r || (t.groupNames[t.lastStringValue] = [])).push(t.branchID) : t.groupNames[t.lastStringValue] = !0;
  }
};
P.regexp_eatGroupName = function(t) {
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
P.regexp_eatRegExpIdentifierName = function(t) {
  if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
    for (t.lastStringValue += mt(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t); )
      t.lastStringValue += mt(t.lastIntValue);
    return !0;
  }
  return !1;
};
P.regexp_eatRegExpIdentifierStart = function(t) {
  var e = t.pos, r = this.options.ecmaVersion >= 11, a = t.current(r);
  return t.advance(r), a === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, r) && (a = t.lastIntValue), as(a) ? (t.lastIntValue = a, !0) : (t.pos = e, !1);
};
function as(t) {
  return pt(t, !0) || t === 36 || t === 95;
}
P.regexp_eatRegExpIdentifierPart = function(t) {
  var e = t.pos, r = this.options.ecmaVersion >= 11, a = t.current(r);
  return t.advance(r), a === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, r) && (a = t.lastIntValue), ns(a) ? (t.lastIntValue = a, !0) : (t.pos = e, !1);
};
function ns(t) {
  return dt(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
}
P.regexp_eatAtomEscape = function(t) {
  return this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t) ? !0 : (t.switchU && (t.current() === 99 && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1);
};
P.regexp_eatBackReference = function(t) {
  var e = t.pos;
  if (this.regexp_eatDecimalEscape(t)) {
    var r = t.lastIntValue;
    if (t.switchU)
      return r > t.maxBackReference && (t.maxBackReference = r), !0;
    if (r <= t.numCapturingParens)
      return !0;
    t.pos = e;
  }
  return !1;
};
P.regexp_eatKGroupName = function(t) {
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
P.regexp_eatCharacterEscape = function(t) {
  return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t);
};
P.regexp_eatCControlLetter = function(t) {
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
P.regexp_eatZero = function(t) {
  return t.current() === 48 && !se(t.lookahead()) ? (t.lastIntValue = 0, t.advance(), !0) : !1;
};
P.regexp_eatControlEscape = function(t) {
  var e = t.current();
  return e === 116 ? (t.lastIntValue = 9, t.advance(), !0) : e === 110 ? (t.lastIntValue = 10, t.advance(), !0) : e === 118 ? (t.lastIntValue = 11, t.advance(), !0) : e === 102 ? (t.lastIntValue = 12, t.advance(), !0) : e === 114 ? (t.lastIntValue = 13, t.advance(), !0) : !1;
};
P.regexp_eatControlLetter = function(t) {
  var e = t.current();
  return mi(e) ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
function mi(t) {
  return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
P.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
  e === void 0 && (e = !1);
  var r = t.pos, a = e || t.switchU;
  if (t.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(t, 4)) {
      var u = t.lastIntValue;
      if (a && u >= 55296 && u <= 56319) {
        var f = t.pos;
        if (t.eat(
          92
          /* \ */
        ) && t.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(t, 4)) {
          var d = t.lastIntValue;
          if (d >= 56320 && d <= 57343)
            return t.lastIntValue = (u - 55296) * 1024 + (d - 56320) + 65536, !0;
        }
        t.pos = f, t.lastIntValue = u;
      }
      return !0;
    }
    if (a && t.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(t) && t.eat(
      125
      /* } */
    ) && os(t.lastIntValue))
      return !0;
    a && t.raise("Invalid unicode escape"), t.pos = r;
  }
  return !1;
};
function os(t) {
  return t >= 0 && t <= 1114111;
}
P.regexp_eatIdentityEscape = function(t) {
  if (t.switchU)
    return this.regexp_eatSyntaxCharacter(t) ? !0 : t.eat(
      47
      /* / */
    ) ? (t.lastIntValue = 47, !0) : !1;
  var e = t.current();
  return e !== 99 && (!t.switchN || e !== 107) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
P.regexp_eatDecimalEscape = function(t) {
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
var yi = 0, yt = 1, ut = 2;
P.regexp_eatCharacterClassEscape = function(t) {
  var e = t.current();
  if (hs(e))
    return t.lastIntValue = -1, t.advance(), yt;
  var r = !1;
  if (t.switchU && this.options.ecmaVersion >= 9 && ((r = e === 80) || e === 112)) {
    t.lastIntValue = -1, t.advance();
    var a;
    if (t.eat(
      123
      /* { */
    ) && (a = this.regexp_eatUnicodePropertyValueExpression(t)) && t.eat(
      125
      /* } */
    ))
      return r && a === ut && t.raise("Invalid property name"), a;
    t.raise("Invalid property name");
  }
  return yi;
};
function hs(t) {
  return t === 100 || t === 68 || t === 115 || t === 83 || t === 119 || t === 87;
}
P.regexp_eatUnicodePropertyValueExpression = function(t) {
  var e = t.pos;
  if (this.regexp_eatUnicodePropertyName(t) && t.eat(
    61
    /* = */
  )) {
    var r = t.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(t)) {
      var a = t.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(t, r, a), yt;
    }
  }
  if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
    var u = t.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(t, u);
  }
  return yi;
};
P.regexp_validateUnicodePropertyNameAndValue = function(t, e, r) {
  Et(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(r) || t.raise("Invalid property value");
};
P.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
  if (t.unicodeProperties.binary.test(e))
    return yt;
  if (t.switchV && t.unicodeProperties.binaryOfStrings.test(e))
    return ut;
  t.raise("Invalid property name");
};
P.regexp_eatUnicodePropertyName = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; xi(e = t.current()); )
    t.lastStringValue += mt(e), t.advance();
  return t.lastStringValue !== "";
};
function xi(t) {
  return mi(t) || t === 95;
}
P.regexp_eatUnicodePropertyValue = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; us(e = t.current()); )
    t.lastStringValue += mt(e), t.advance();
  return t.lastStringValue !== "";
};
function us(t) {
  return xi(t) || se(t);
}
P.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
  return this.regexp_eatUnicodePropertyValue(t);
};
P.regexp_eatCharacterClass = function(t) {
  if (t.eat(
    91
    /* [ */
  )) {
    var e = t.eat(
      94
      /* ^ */
    ), r = this.regexp_classContents(t);
    return t.eat(
      93
      /* ] */
    ) || t.raise("Unterminated character class"), e && r === ut && t.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
P.regexp_classContents = function(t) {
  return t.current() === 93 ? yt : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), yt);
};
P.regexp_nonEmptyClassRanges = function(t) {
  for (; this.regexp_eatClassAtom(t); ) {
    var e = t.lastIntValue;
    if (t.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(t)) {
      var r = t.lastIntValue;
      t.switchU && (e === -1 || r === -1) && t.raise("Invalid character class"), e !== -1 && r !== -1 && e > r && t.raise("Range out of order in character class");
    }
  }
};
P.regexp_eatClassAtom = function(t) {
  var e = t.pos;
  if (t.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(t))
      return !0;
    if (t.switchU) {
      var r = t.current();
      (r === 99 || bi(r)) && t.raise("Invalid class escape"), t.raise("Invalid escape");
    }
    t.pos = e;
  }
  var a = t.current();
  return a !== 93 ? (t.lastIntValue = a, t.advance(), !0) : !1;
};
P.regexp_eatClassEscape = function(t) {
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
P.regexp_classSetExpression = function(t) {
  var e = yt, r;
  if (!this.regexp_eatClassSetRange(t)) if (r = this.regexp_eatClassSetOperand(t)) {
    r === ut && (e = ut);
    for (var a = t.pos; t.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (t.current() !== 38 && (r = this.regexp_eatClassSetOperand(t))) {
        r !== ut && (e = yt);
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
      if (r = this.regexp_eatClassSetOperand(t), !r)
        return e;
      r === ut && (e = ut);
    }
};
P.regexp_eatClassSetRange = function(t) {
  var e = t.pos;
  if (this.regexp_eatClassSetCharacter(t)) {
    var r = t.lastIntValue;
    if (t.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(t)) {
      var a = t.lastIntValue;
      return r !== -1 && a !== -1 && r > a && t.raise("Range out of order in character class"), !0;
    }
    t.pos = e;
  }
  return !1;
};
P.regexp_eatClassSetOperand = function(t) {
  return this.regexp_eatClassSetCharacter(t) ? yt : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t);
};
P.regexp_eatNestedClass = function(t) {
  var e = t.pos;
  if (t.eat(
    91
    /* [ */
  )) {
    var r = t.eat(
      94
      /* ^ */
    ), a = this.regexp_classContents(t);
    if (t.eat(
      93
      /* ] */
    ))
      return r && a === ut && t.raise("Negated character class may contain strings"), a;
    t.pos = e;
  }
  if (t.eat(
    92
    /* \ */
  )) {
    var u = this.regexp_eatCharacterClassEscape(t);
    if (u)
      return u;
    t.pos = e;
  }
  return null;
};
P.regexp_eatClassStringDisjunction = function(t) {
  var e = t.pos;
  if (t.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (t.eat(
      123
      /* { */
    )) {
      var r = this.regexp_classStringDisjunctionContents(t);
      if (t.eat(
        125
        /* } */
      ))
        return r;
    } else
      t.raise("Invalid escape");
    t.pos = e;
  }
  return null;
};
P.regexp_classStringDisjunctionContents = function(t) {
  for (var e = this.regexp_classString(t); t.eat(
    124
    /* | */
  ); )
    this.regexp_classString(t) === ut && (e = ut);
  return e;
};
P.regexp_classString = function(t) {
  for (var e = 0; this.regexp_eatClassSetCharacter(t); )
    e++;
  return e === 1 ? yt : ut;
};
P.regexp_eatClassSetCharacter = function(t) {
  var e = t.pos;
  if (t.eat(
    92
    /* \ */
  ))
    return this.regexp_eatCharacterEscape(t) || this.regexp_eatClassSetReservedPunctuator(t) ? !0 : t.eat(
      98
      /* b */
    ) ? (t.lastIntValue = 8, !0) : (t.pos = e, !1);
  var r = t.current();
  return r < 0 || r === t.lookahead() && cs(r) || ps(r) ? !1 : (t.advance(), t.lastIntValue = r, !0);
};
function cs(t) {
  return t === 33 || t >= 35 && t <= 38 || t >= 42 && t <= 44 || t === 46 || t >= 58 && t <= 64 || t === 94 || t === 96 || t === 126;
}
function ps(t) {
  return t === 40 || t === 41 || t === 45 || t === 47 || t >= 91 && t <= 93 || t >= 123 && t <= 125;
}
P.regexp_eatClassSetReservedPunctuator = function(t) {
  var e = t.current();
  return ls(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function ls(t) {
  return t === 33 || t === 35 || t === 37 || t === 38 || t === 44 || t === 45 || t >= 58 && t <= 62 || t === 64 || t === 96 || t === 126;
}
P.regexp_eatClassControlLetter = function(t) {
  var e = t.current();
  return se(e) || e === 95 ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
P.regexp_eatHexEscapeSequence = function(t) {
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
P.regexp_eatDecimalDigits = function(t) {
  var e = t.pos, r = 0;
  for (t.lastIntValue = 0; se(r = t.current()); )
    t.lastIntValue = 10 * t.lastIntValue + (r - 48), t.advance();
  return t.pos !== e;
};
function se(t) {
  return t >= 48 && t <= 57;
}
P.regexp_eatHexDigits = function(t) {
  var e = t.pos, r = 0;
  for (t.lastIntValue = 0; vi(r = t.current()); )
    t.lastIntValue = 16 * t.lastIntValue + gi(r), t.advance();
  return t.pos !== e;
};
function vi(t) {
  return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
}
function gi(t) {
  return t >= 65 && t <= 70 ? 10 + (t - 65) : t >= 97 && t <= 102 ? 10 + (t - 97) : t - 48;
}
P.regexp_eatLegacyOctalEscapeSequence = function(t) {
  if (this.regexp_eatOctalDigit(t)) {
    var e = t.lastIntValue;
    if (this.regexp_eatOctalDigit(t)) {
      var r = t.lastIntValue;
      e <= 3 && this.regexp_eatOctalDigit(t) ? t.lastIntValue = e * 64 + r * 8 + t.lastIntValue : t.lastIntValue = e * 8 + r;
    } else
      t.lastIntValue = e;
    return !0;
  }
  return !1;
};
P.regexp_eatOctalDigit = function(t) {
  var e = t.current();
  return bi(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1);
};
function bi(t) {
  return t >= 48 && t <= 55;
}
P.regexp_eatFixedHexDigits = function(t, e) {
  var r = t.pos;
  t.lastIntValue = 0;
  for (var a = 0; a < e; ++a) {
    var u = t.current();
    if (!vi(u))
      return t.pos = r, !1;
    t.lastIntValue = 16 * t.lastIntValue + gi(u), t.advance();
  }
  return !0;
};
var re = function(e) {
  this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new Bt(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
}, V = K.prototype;
V.next = function(t) {
  !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new re(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
V.getToken = function() {
  return this.next(), new re(this);
};
typeof Symbol < "u" && (V[Symbol.iterator] = function() {
  var t = this;
  return {
    next: function() {
      var e = t.getToken();
      return {
        done: e.type === h.eof,
        value: e
      };
    }
  };
});
V.nextToken = function() {
  var t = this.curContext();
  if ((!t || !t.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(h.eof);
  if (t.override)
    return t.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
V.readToken = function(t) {
  return pt(t, this.options.ecmaVersion >= 6) || t === 92 ? this.readWord() : this.getTokenFromCode(t);
};
V.fullCharCodeAtPos = function() {
  var t = this.input.charCodeAt(this.pos);
  if (t <= 55295 || t >= 56320)
    return t;
  var e = this.input.charCodeAt(this.pos + 1);
  return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888;
};
V.skipBlockComment = function() {
  var t = this.options.onComment && this.curPosition(), e = this.pos, r = this.input.indexOf("*/", this.pos += 2);
  if (r === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations)
    for (var a = void 0, u = e; (a = Ke(this.input, u, this.pos)) > -1; )
      ++this.curLine, u = this.lineStart = a;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(e + 2, r),
    e,
    this.pos,
    t,
    this.curPosition()
  );
};
V.skipLineComment = function(t) {
  for (var e = this.pos, r = this.options.onComment && this.curPosition(), a = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !Pt(a); )
    a = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(e + t, this.pos),
    e,
    this.pos,
    r,
    this.curPosition()
  );
};
V.skipSpace = function() {
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
        if (t > 8 && t < 14 || t >= 5760 && ge.test(String.fromCharCode(t)))
          ++this.pos;
        else
          break t;
    }
  }
};
V.finishToken = function(t, e) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  this.type = t, this.value = e, this.updateContext(r);
};
V.readToken_dot = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t >= 48 && t <= 57)
    return this.readNumber(!0);
  var e = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && t === 46 && e === 46 ? (this.pos += 3, this.finishToken(h.ellipsis)) : (++this.pos, this.finishToken(h.dot));
};
V.readToken_slash = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : t === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.slash, 1);
};
V.readToken_mult_modulo_exp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), r = 1, a = t === 42 ? h.star : h.modulo;
  return this.options.ecmaVersion >= 7 && t === 42 && e === 42 && (++r, a = h.starstar, e = this.input.charCodeAt(this.pos + 2)), e === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(a, r);
};
V.readToken_pipe_amp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e === t) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61)
        return this.finishOp(h.assign, 3);
    }
    return this.finishOp(t === 124 ? h.logicalOR : h.logicalAND, 2);
  }
  return e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(t === 124 ? h.bitwiseOR : h.bitwiseAND, 1);
};
V.readToken_caret = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.bitwiseXOR, 1);
};
V.readToken_plus_min = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === t ? e === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || tt.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(h.incDec, 2) : e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.plusMin, 1);
};
V.readToken_lt_gt = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), r = 1;
  return e === t ? (r = t === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + r) === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(h.bitShift, r)) : e === 33 && t === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (e === 61 && (r = 2), this.finishOp(h.relational, r));
};
V.readToken_eq_excl = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(h.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : t === 61 && e === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(h.arrow)) : this.finishOp(t === 61 ? h.eq : h.prefix, 1);
};
V.readToken_question = function() {
  var t = this.options.ecmaVersion;
  if (t >= 11) {
    var e = this.input.charCodeAt(this.pos + 1);
    if (e === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57)
        return this.finishOp(h.questionDot, 2);
    }
    if (e === 63) {
      if (t >= 12) {
        var a = this.input.charCodeAt(this.pos + 2);
        if (a === 61)
          return this.finishOp(h.assign, 3);
      }
      return this.finishOp(h.coalesce, 2);
    }
  }
  return this.finishOp(h.question, 1);
};
V.readToken_numberSign = function() {
  var t = this.options.ecmaVersion, e = 35;
  if (t >= 13 && (++this.pos, e = this.fullCharCodeAtPos(), pt(e, !0) || e === 92))
    return this.finishToken(h.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + mt(e) + "'");
};
V.getTokenFromCode = function(t) {
  switch (t) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      return this.readToken_dot();
    // Punctuation tokens.
    case 40:
      return ++this.pos, this.finishToken(h.parenL);
    case 41:
      return ++this.pos, this.finishToken(h.parenR);
    case 59:
      return ++this.pos, this.finishToken(h.semi);
    case 44:
      return ++this.pos, this.finishToken(h.comma);
    case 91:
      return ++this.pos, this.finishToken(h.bracketL);
    case 93:
      return ++this.pos, this.finishToken(h.bracketR);
    case 123:
      return ++this.pos, this.finishToken(h.braceL);
    case 125:
      return ++this.pos, this.finishToken(h.braceR);
    case 58:
      return ++this.pos, this.finishToken(h.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(h.backQuote);
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
      return this.finishOp(h.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + mt(t) + "'");
};
V.finishOp = function(t, e) {
  var r = this.input.slice(this.pos, this.pos + e);
  return this.pos += e, this.finishToken(t, r);
};
V.readRegexp = function() {
  for (var t, e, r = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
    var a = this.input.charAt(this.pos);
    if (tt.test(a) && this.raise(r, "Unterminated regular expression"), t)
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
  var u = this.input.slice(r, this.pos);
  ++this.pos;
  var f = this.pos, d = this.readWord1();
  this.containsEsc && this.unexpected(f);
  var v = this.regexpState || (this.regexpState = new ft(this));
  v.reset(r, u, d), this.validateRegExpFlags(v), this.validateRegExpPattern(v);
  var g = null;
  try {
    g = new RegExp(u, d);
  } catch {
  }
  return this.finishToken(h.regexp, { pattern: u, flags: d, value: g });
};
V.readInt = function(t, e, r) {
  for (var a = this.options.ecmaVersion >= 12 && e === void 0, u = r && this.input.charCodeAt(this.pos) === 48, f = this.pos, d = 0, v = 0, g = 0, o = e ?? 1 / 0; g < o; ++g, ++this.pos) {
    var w = this.input.charCodeAt(this.pos), _ = void 0;
    if (a && w === 95) {
      u && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), v === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), g === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), v = w;
      continue;
    }
    if (w >= 97 ? _ = w - 97 + 10 : w >= 65 ? _ = w - 65 + 10 : w >= 48 && w <= 57 ? _ = w - 48 : _ = 1 / 0, _ >= t)
      break;
    v = w, d = d * t + _;
  }
  return a && v === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === f || e != null && this.pos - f !== e ? null : d;
};
function fs(t, e) {
  return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
}
function Si(t) {
  return typeof BigInt != "function" ? null : BigInt(t.replace(/_/g, ""));
}
V.readRadixNumber = function(t) {
  var e = this.pos;
  this.pos += 2;
  var r = this.readInt(t);
  return r == null && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (r = Si(this.input.slice(e, this.pos)), ++this.pos) : pt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(h.num, r);
};
V.readNumber = function(t) {
  var e = this.pos;
  !t && this.readInt(10, void 0, !0) === null && this.raise(e, "Invalid number");
  var r = this.pos - e >= 2 && this.input.charCodeAt(e) === 48;
  r && this.strict && this.raise(e, "Invalid number");
  var a = this.input.charCodeAt(this.pos);
  if (!r && !t && this.options.ecmaVersion >= 11 && a === 110) {
    var u = Si(this.input.slice(e, this.pos));
    return ++this.pos, pt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(h.num, u);
  }
  r && /[89]/.test(this.input.slice(e, this.pos)) && (r = !1), a === 46 && !r && (++this.pos, this.readInt(10), a = this.input.charCodeAt(this.pos)), (a === 69 || a === 101) && !r && (a = this.input.charCodeAt(++this.pos), (a === 43 || a === 45) && ++this.pos, this.readInt(10) === null && this.raise(e, "Invalid number")), pt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var f = fs(this.input.slice(e, this.pos), r);
  return this.finishToken(h.num, f);
};
V.readCodePoint = function() {
  var t = this.input.charCodeAt(this.pos), e;
  if (t === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else
    e = this.readHexChar(4);
  return e;
};
V.readString = function(t) {
  for (var e = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var a = this.input.charCodeAt(this.pos);
    if (a === t)
      break;
    a === 92 ? (e += this.input.slice(r, this.pos), e += this.readEscapedChar(!1), r = this.pos) : a === 8232 || a === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Pt(a) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return e += this.input.slice(r, this.pos++), this.finishToken(h.string, e);
};
var Ti = {};
V.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (t) {
    if (t === Ti)
      this.readInvalidTemplateToken();
    else
      throw t;
  }
  this.inTemplateElement = !1;
};
V.invalidStringToken = function(t, e) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Ti;
  this.raise(t, e);
};
V.readTmplToken = function() {
  for (var t = "", e = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || r === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === h.template || this.type === h.invalidTemplate) ? r === 36 ? (this.pos += 2, this.finishToken(h.dollarBraceL)) : (++this.pos, this.finishToken(h.backQuote)) : (t += this.input.slice(e, this.pos), this.finishToken(h.template, t));
    if (r === 92)
      t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
    else if (Pt(r)) {
      switch (t += this.input.slice(e, this.pos), ++this.pos, r) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          t += `
`;
          break;
        default:
          t += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), e = this.pos;
    } else
      ++this.pos;
  }
};
V.readInvalidTemplateToken = function() {
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
        return this.finishToken(h.invalidTemplate, this.input.slice(this.start, this.pos));
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
V.readEscapedChar = function(t) {
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
      return mt(this.readCodePoint());
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
        var r = this.pos - 1;
        this.invalidStringToken(
          r,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (e >= 48 && e <= 55) {
        var a = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], u = parseInt(a, 8);
        return u > 255 && (a = a.slice(0, -1), u = parseInt(a, 8)), this.pos += a.length - 1, e = this.input.charCodeAt(this.pos), (a !== "0" || e === 56 || e === 57) && (this.strict || t) && this.invalidStringToken(
          this.pos - 1 - a.length,
          t ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(u);
      }
      return Pt(e) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(e);
  }
};
V.readHexChar = function(t) {
  var e = this.pos, r = this.readInt(16, t);
  return r === null && this.invalidStringToken(e, "Bad character escape sequence"), r;
};
V.readWord1 = function() {
  this.containsEsc = !1;
  for (var t = "", e = !0, r = this.pos, a = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var u = this.fullCharCodeAtPos();
    if (dt(u, a))
      this.pos += u <= 65535 ? 1 : 2;
    else if (u === 92) {
      this.containsEsc = !0, t += this.input.slice(r, this.pos);
      var f = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var d = this.readCodePoint();
      (e ? pt : dt)(d, a) || this.invalidStringToken(f, "Invalid Unicode escape"), t += mt(d), r = this.pos;
    } else
      break;
    e = !1;
  }
  return t + this.input.slice(r, this.pos);
};
V.readWord = function() {
  var t = this.readWord1(), e = h.name;
  return this.keywords.test(t) && (e = At[t]), this.finishToken(e, t);
};
var Pi = "8.15.0";
K.acorn = {
  Parser: K,
  version: Pi,
  defaultOptions: Gt,
  Position: wt,
  SourceLocation: Bt,
  getLineInfo: be,
  Node: Ut,
  TokenType: O,
  tokTypes: h,
  keywordTypes: At,
  TokContext: Z,
  tokContexts: q,
  isIdentifierChar: dt,
  isIdentifierStart: pt,
  Token: re,
  isNewLine: Pt,
  lineBreak: tt,
  lineBreakG: We,
  nonASCIIwhitespace: ge
};
function ds(t, e) {
  return K.parse(t, e);
}
function ms(t, e, r) {
  return K.parseExpressionAt(t, e, r);
}
function ys(t, e) {
  return K.tokenizer(t, e);
}
const xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: Ut,
  Parser: K,
  Position: wt,
  SourceLocation: Bt,
  TokContext: Z,
  Token: re,
  TokenType: O,
  defaultOptions: Gt,
  getLineInfo: be,
  isIdentifierChar: dt,
  isIdentifierStart: pt,
  isNewLine: Pt,
  keywordTypes: At,
  lineBreak: tt,
  lineBreakG: We,
  nonASCIIwhitespace: ge,
  parse: ds,
  parseExpressionAt: ms,
  tokContexts: q,
  tokTypes: h,
  tokenizer: ys,
  version: Pi
}, Symbol.toStringTag, { value: "Module" }));
function De(t, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, typeof (u = (function(f, d) {
      if (typeof f != "object" || f === null) return f;
      var v = f[Symbol.toPrimitive];
      if (v !== void 0) {
        var g = v.call(f, "string");
        if (typeof g != "object") return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(f);
    })(a.key)) == "symbol" ? u : String(u), a);
  }
  var u;
}
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Zt.apply(this, arguments);
}
function Jt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ve(t, e);
}
function ve(t, e) {
  return ve = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, ve(t, e);
}
function Ve(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
  return a;
}
function Fe(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r) return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = (function(u, f) {
    if (u) {
      if (typeof u == "string") return Ve(u, f);
      var d = Object.prototype.toString.call(u).slice(8, -1);
      return d === "Object" && u.constructor && (d = u.constructor.name), d === "Map" || d === "Set" ? Array.from(u) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Ve(u, f) : void 0;
    }
  })(t)) || e) {
    r && (t = r);
    var a = 0;
    return function() {
      return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var at = !0;
function nt(t, e) {
  return e === void 0 && (e = {}), new O("name", e);
}
var vs = /* @__PURE__ */ new WeakMap();
function gs(t) {
  var e = vs.get(t.Parser.acorn || t);
  if (!e) {
    var r = { assert: nt(0, { startsExpr: at }), asserts: nt(0, { startsExpr: at }), global: nt(0, { startsExpr: at }), keyof: nt(0, { startsExpr: at }), readonly: nt(0, { startsExpr: at }), unique: nt(0, { startsExpr: at }), abstract: nt(0, { startsExpr: at }), declare: nt(0, { startsExpr: at }), enum: nt(0, { startsExpr: at }), module: nt(0, { startsExpr: at }), namespace: nt(0, { startsExpr: at }), interface: nt(0, { startsExpr: at }), type: nt(0, { startsExpr: at }) }, a = { at: new O("@"), jsxName: new O("jsxName"), jsxText: new O("jsxText", { beforeExpr: !0 }), jsxTagStart: new O("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new O("jsxTagEnd") }, u = { tc_oTag: new Z("<tag", !1, !1), tc_cTag: new Z("</tag", !1, !1), tc_expr: new Z("<tag>...</tag>", !0, !0) }, f = new RegExp("^(?:" + Object.keys(r).join("|") + ")$");
    a.jsxTagStart.updateContext = function() {
      this.context.push(u.tc_expr), this.context.push(u.tc_oTag), this.exprAllowed = !1;
    }, a.jsxTagEnd.updateContext = function(d) {
      var v = this.context.pop();
      v === u.tc_oTag && d === h.slash || v === u.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === u.tc_expr) : this.exprAllowed = !0;
    }, e = { tokTypes: Zt({}, r, a), tokContexts: Zt({}, u), keywordsRegExp: f, tokenIsLiteralPropertyName: function(d) {
      return [h.name, h.string, h.num].concat(Object.values(At), Object.values(r)).includes(d);
    }, tokenIsKeywordOrIdentifier: function(d) {
      return [h.name].concat(Object.values(At), Object.values(r)).includes(d);
    }, tokenIsIdentifier: function(d) {
      return [].concat(Object.values(r), [h.name]).includes(d);
    }, tokenIsTSDeclarationStart: function(d) {
      return [r.abstract, r.declare, r.enum, r.module, r.namespace, r.interface, r.type].includes(d);
    }, tokenIsTSTypeOperator: function(d) {
      return [r.keyof, r.readonly, r.unique].includes(d);
    }, tokenIsTemplate: function(d) {
      return d === h.invalidTemplate;
    } };
  }
  return e;
}
var Ot = 1024, bs = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), Be = new RegExp("(?=(" + bs.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), Rt = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function Ss(t, e) {
  var r = e.key.name, a = t[r], u = "true";
  return e.type !== "MethodDefinition" || e.kind !== "get" && e.kind !== "set" || (u = (e.static ? "s" : "i") + e.kind), a === "iget" && u === "iset" || a === "iset" && u === "iget" || a === "sget" && u === "sset" || a === "sset" && u === "sget" ? (t[r] = "true", !1) : !!a || (t[r] = u, !1);
}
function je(t, e) {
  var r = t.key;
  return !t.computed && (r.type === "Identifier" && r.name === e || r.type === "Literal" && r.value === e);
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
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, Ts = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, Ps = /^[\da-fA-F]+$/, Cs = /^\d+$/;
function Dt(t) {
  return t && (t.type === "JSXIdentifier" ? t.name : t.type === "JSXNamespacedName" ? t.namespace.name + ":" + t.name.name : t.type === "JSXMemberExpression" ? Dt(t.object) + "." + Dt(t.property) : void 0);
}
var fe = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function Ue(t) {
  if (!t) throw new Error("Assert fail");
}
function ks(t) {
  return t === "accessor";
}
function As(t) {
  return t === "in" || t === "out";
}
function de(t, e) {
  return 2 | (t ? 4 : 0) | (e ? 8 : 0);
}
function ws(t) {
  if (t.type !== "MemberExpression") return !1;
  var e = t.property;
  return (!t.computed || !(e.type !== "TemplateLiteral" || e.expressions.length > 0)) && Ci(t.object);
}
function Ci(t) {
  return t.type === "Identifier" || t.type === "MemberExpression" && !t.computed && Ci(t.object);
}
function qe(t) {
  return t === "private" || t === "public" || t === "protected";
}
function Es(t) {
  var e = {}, r = e.dts, a = r !== void 0 && r, u = e.allowSatisfies, f = u !== void 0 && u;
  return function(d) {
    var v = d.acorn || xs, g = gs(v), o = v.tokTypes, w = v.keywordTypes, _ = v.isIdentifierStart, D = v.lineBreak, R = v.isNewLine, j = v.tokContexts, J = v.isIdentifierChar, I = g.tokTypes, X = g.tokContexts, Tt = g.keywordsRegExp, Ht = g.tokenIsLiteralPropertyName, ae = g.tokenIsTemplate, ne = g.tokenIsTSDeclarationStart, U = g.tokenIsIdentifier, zt = g.tokenIsKeywordOrIdentifier, ki = g.tokenIsTSTypeOperator;
    function Ai(T, it, Y) {
      Y === void 0 && (Y = T.length);
      for (var G = it; G < Y; G++) {
        var B = T.charCodeAt(G);
        if (R(B)) return G < Y - 1 && B === 13 && T.charCodeAt(G + 1) === 10 ? G + 2 : G + 1;
      }
      return -1;
    }
    d = (function(T, it, Y) {
      var G = Y.tokTypes, B = it.tokTypes;
      return (function(p) {
        function i() {
          return p.apply(this, arguments) || this;
        }
        Jt(i, p);
        var s = i.prototype;
        return s.takeDecorators = function(n) {
          var c = this.decoratorStack[this.decoratorStack.length - 1];
          c.length && (n.decorators = c, this.resetStartLocationFromNode(n, c[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, s.parseDecorators = function(n) {
          for (var c = this.decoratorStack[this.decoratorStack.length - 1]; this.match(B.at); ) {
            var l = this.parseDecorator();
            c.push(l);
          }
          this.match(G._export) ? n || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, s.parseDecorator = function() {
          var n = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var c, l = this.start, m = this.startLoc;
          if (this.match(G.parenL)) {
            var y = this.start, x = this.startLoc;
            if (this.next(), c = this.parseExpression(), this.expect(G.parenR), this.options.preserveParens) {
              var b = this.startNodeAt(y, x);
              b.expression = c, c = this.finishNode(b, "ParenthesizedExpression");
            }
          } else for (c = this.parseIdent(!1); this.eat(G.dot); ) {
            var S = this.startNodeAt(l, m);
            S.object = c, S.property = this.parseIdent(!0), S.computed = !1, c = this.finishNode(S, "MemberExpression");
          }
          return n.expression = this.parseMaybeDecoratorArguments(c), this.decoratorStack.pop(), this.finishNode(n, "Decorator");
        }, s.parseMaybeDecoratorArguments = function(n) {
          if (this.eat(G.parenL)) {
            var c = this.startNodeAtNode(n);
            return c.callee = n, c.arguments = this.parseExprList(G.parenR, !1), this.finishNode(c, "CallExpression");
          }
          return n;
        }, i;
      })(T);
    })(d, g, v), d = (function(T, it, Y, G) {
      var B = T.tokTypes, p = it.tokTypes, i = T.isNewLine, s = T.isIdentifierChar, n = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(c) {
        function l() {
          return c.apply(this, arguments) || this;
        }
        Jt(l, c);
        var m = l.prototype;
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
            var S = this.input.charCodeAt(this.pos);
            if (S === y) break;
            S === 38 ? (x += this.input.slice(b, this.pos), x += this.jsx_readEntity(), b = this.pos) : i(S) ? (x += this.input.slice(b, this.pos), x += this.jsx_readNewLine(!1), b = this.pos) : ++this.pos;
          }
          return x += this.input.slice(b, this.pos++), this.finishToken(B.string, x);
        }, m.jsx_readEntity = function() {
          var y, x = "", b = 0, S = this.input[this.pos];
          S !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
          for (var E = ++this.pos; this.pos < this.input.length && b++ < 10; ) {
            if ((S = this.input[this.pos++]) === ";") {
              x[0] === "#" ? x[1] === "x" ? (x = x.substr(2), Ps.test(x) && (y = String.fromCharCode(parseInt(x, 16)))) : (x = x.substr(1), Cs.test(x) && (y = String.fromCharCode(parseInt(x, 10)))) : y = Ts[x];
              break;
            }
            x += S;
          }
          return y || (this.pos = E, "&");
        }, m.jsx_readWord = function() {
          var y, x = this.pos;
          do
            y = this.input.charCodeAt(++this.pos);
          while (s(y) || y === 45);
          return this.finishToken(p.jsxName, this.input.slice(x, this.pos));
        }, m.jsx_parseIdentifier = function() {
          var y = this.startNode();
          return this.type === p.jsxName ? y.name = this.value : this.type.keyword ? y.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(y, "JSXIdentifier");
        }, m.jsx_parseNamespacedName = function() {
          var y = this.start, x = this.startLoc, b = this.jsx_parseIdentifier();
          if (!n.allowNamespaces || !this.eat(B.colon)) return b;
          var S = this.startNodeAt(y, x);
          return S.namespace = b, S.name = this.jsx_parseIdentifier(), this.finishNode(S, "JSXNamespacedName");
        }, m.jsx_parseElementName = function() {
          if (this.type === p.jsxTagEnd) return "";
          var y = this.start, x = this.startLoc, b = this.jsx_parseNamespacedName();
          for (this.type !== B.dot || b.type !== "JSXNamespacedName" || n.allowNamespacedObjects || this.unexpected(); this.eat(B.dot); ) {
            var S = this.startNodeAt(y, x);
            S.object = b, S.property = this.jsx_parseIdentifier(), b = this.finishNode(S, "JSXMemberExpression");
          }
          return b;
        }, m.jsx_parseAttributeValue = function() {
          switch (this.type) {
            case B.braceL:
              var y = this.jsx_parseExpressionContainer();
              return y.expression.type === "JSXEmptyExpression" && this.raise(y.start, "JSX attributes must only be assigned a non-empty expression"), y;
            case p.jsxTagStart:
            case B.string:
              return this.parseExprAtom();
            default:
              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
          }
        }, m.jsx_parseEmptyExpression = function() {
          var y = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(y, "JSXEmptyExpression", this.start, this.startLoc);
        }, m.jsx_parseExpressionContainer = function() {
          var y = this.startNode();
          return this.next(), y.expression = this.type === B.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(B.braceR), this.finishNode(y, "JSXExpressionContainer");
        }, m.jsx_parseAttribute = function() {
          var y = this.startNode();
          return this.eat(B.braceL) ? (this.expect(B.ellipsis), y.argument = this.parseMaybeAssign(), this.expect(B.braceR), this.finishNode(y, "JSXSpreadAttribute")) : (y.name = this.jsx_parseNamespacedName(), y.value = this.eat(B.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(y, "JSXAttribute"));
        }, m.jsx_parseOpeningElementAt = function(y, x) {
          var b = this.startNodeAt(y, x);
          b.attributes = [];
          var S = this.jsx_parseElementName();
          for (S && (b.name = S); this.type !== B.slash && this.type !== p.jsxTagEnd; ) b.attributes.push(this.jsx_parseAttribute());
          return b.selfClosing = this.eat(B.slash), this.expect(p.jsxTagEnd), this.finishNode(b, S ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, m.jsx_parseClosingElementAt = function(y, x) {
          var b = this.startNodeAt(y, x), S = this.jsx_parseElementName();
          return S && (b.name = S), this.expect(p.jsxTagEnd), this.finishNode(b, S ? "JSXClosingElement" : "JSXClosingFragment");
        }, m.jsx_parseElementAt = function(y, x) {
          var b = this.startNodeAt(y, x), S = [], E = this.jsx_parseOpeningElementAt(y, x), L = null;
          if (!E.selfClosing) {
            t: for (; ; ) switch (this.type) {
              case p.jsxTagStart:
                if (y = this.start, x = this.startLoc, this.next(), this.eat(B.slash)) {
                  L = this.jsx_parseClosingElementAt(y, x);
                  break t;
                }
                S.push(this.jsx_parseElementAt(y, x));
                break;
              case p.jsxText:
                S.push(this.parseExprAtom());
                break;
              case B.braceL:
                S.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            Dt(L.name) !== Dt(E.name) && this.raise(L.start, "Expected corresponding JSX closing tag for <" + Dt(E.name) + ">");
          }
          var C = E.name ? "Element" : "Fragment";
          return b["opening" + C] = E, b["closing" + C] = L, b.children = S, this.type === B.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(b, "JSX" + C);
        }, m.jsx_parseText = function() {
          var y = this.parseLiteral(this.value);
          return y.type = "JSXText", y;
        }, m.jsx_parseElement = function() {
          var y = this.start, x = this.startLoc;
          return this.next(), this.jsx_parseElementAt(y, x);
        }, l;
      })(Y);
    })(v, g, d), d = (function(T, it, Y) {
      var G = it.tokTypes, B = Y.tokTypes;
      return (function(p) {
        function i() {
          return p.apply(this, arguments) || this;
        }
        Jt(i, p);
        var s = i.prototype;
        return s.parseMaybeImportAttributes = function(n) {
          if (this.type === B._with || this.type === G.assert) {
            this.next();
            var c = this.parseImportAttributes();
            c && (n.attributes = c);
          }
        }, s.parseImportAttributes = function() {
          this.expect(B.braceL);
          var n = this.parseWithEntries();
          return this.expect(B.braceR), n;
        }, s.parseWithEntries = function() {
          var n = [], c = /* @__PURE__ */ new Set();
          do {
            if (this.type === B.braceR) break;
            var l, m = this.startNode();
            l = this.type === B.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), m.key = l, c.has(m.key.name) && this.raise(this.pos, "Duplicated key in attributes"), c.add(m.key.name), this.type !== B.string && this.raise(this.pos, "Only string is supported as an attribute value"), m.value = this.parseLiteral(this.value), n.push(this.finishNode(m, "ImportAttribute"));
          } while (this.eat(B.comma));
          return n;
        }, i;
      })(T);
    })(d, g, v);
    var wi = /* @__PURE__ */ (function(T) {
      function it(i, s, n) {
        var c;
        return (c = T.call(this, i, s, n) || this).preValue = null, c.preToken = null, c.isLookahead = !1, c.isAmbientContext = !1, c.inAbstractClass = !1, c.inType = !1, c.inDisallowConditionalTypesContext = !1, c.maybeInArrowParameters = !1, c.shouldParseArrowReturnType = void 0, c.shouldParseAsyncArrowReturnType = void 0, c.decoratorStack = [[]], c.importsStack = [[]], c.importOrExportOuterKind = void 0, c.tsParseConstModifier = c.tsParseModifiers.bind((function(l) {
          if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return l;
        })(c), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: A.InvalidModifierOnTypeParameterPositions }), c;
      }
      Jt(it, T);
      var Y, G, B, p = it.prototype;
      return p.getTokenFromCodeInType = function(i) {
        return i === 62 || i === 60 ? this.finishOp(o.relational, 1) : T.prototype.getTokenFromCode.call(this, i);
      }, p.readToken = function(i) {
        if (!this.inType) {
          var s = this.curContext();
          if (s === X.tc_expr) return this.jsx_readToken();
          if (s === X.tc_oTag || s === X.tc_cTag) {
            if (_(i)) return this.jsx_readWord();
            if (i == 62) return ++this.pos, this.finishToken(I.jsxTagEnd);
            if ((i === 34 || i === 39) && s == X.tc_oTag) return this.jsx_readString(i);
          }
          if (i === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(I.jsxTagStart);
        }
        return T.prototype.readToken.call(this, i);
      }, p.getTokenFromCode = function(i) {
        return this.inType ? this.getTokenFromCodeInType(i) : i === 64 ? (++this.pos, this.finishToken(I.at)) : T.prototype.getTokenFromCode.call(this, i);
      }, p.isAbstractClass = function() {
        return this.ts_isContextual(I.abstract) && this.lookahead().type === o._class;
      }, p.finishNode = function(i, s) {
        return i.type !== "" && i.end !== 0 ? i : T.prototype.finishNode.call(this, i, s);
      }, p.tryParse = function(i, s) {
        s === void 0 && (s = this.cloneCurLookaheadState());
        var n = { node: null };
        try {
          return { node: i(function(l) {
            throw l === void 0 && (l = null), n.node = l, n;
          }), error: null, thrown: !1, aborted: !1, failState: null };
        } catch (l) {
          var c = this.getCurLookaheadState();
          if (this.setLookaheadState(s), l instanceof SyntaxError) return { node: null, error: l, thrown: !0, aborted: !1, failState: c };
          if (l === n) return { node: n.node, error: null, thrown: !1, aborted: !0, failState: c };
          throw l;
        }
      }, p.setOptionalParametersError = function(i, s) {
        var n;
        i.optionalParametersLoc = (n = s?.loc) != null ? n : this.startLoc;
      }, p.reScan_lt_gt = function() {
        this.type === o.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, p.reScan_lt = function() {
        var i = this.type;
        return i === o.bitShift ? (this.pos -= 2, this.finishOp(o.relational, 1), o.relational) : i;
      }, p.resetEndLocation = function(i, s) {
        s === void 0 && (s = this.lastTokEndLoc), i.end = s.column, i.loc.end = s, this.options.ranges && (i.range[1] = s.column);
      }, p.startNodeAtNode = function(i) {
        return T.prototype.startNodeAt.call(this, i.start, i.loc.start);
      }, p.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, p.tsHasSomeModifiers = function(i, s) {
        return s.some(function(n) {
          return qe(n) ? i.accessibility === n : !!i[n];
        });
      }, p.tsIsStartOfStaticBlocks = function() {
        return this.isContextual("static") && this.lookaheadCharCode() === 123;
      }, p.tsCheckForInvalidTypeCasts = function(i) {
        var s = this;
        i.forEach(function(n) {
          n?.type === "TSTypeCastExpression" && s.raise(n.typeAnnotation.start, A.UnexpectedTypeAnnotation);
        });
      }, p.atPossibleAsyncArrow = function(i) {
        return i.type === "Identifier" && i.name === "async" && this.lastTokEndLoc.column === i.end && !this.canInsertSemicolon() && i.end - i.start == 5 && i.start === this.potentialArrowAt;
      }, p.tsIsIdentifier = function() {
        return U(this.type);
      }, p.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeOrTypePredicateAnnotation(o.colon) : void 0;
      }, p.tsTryParseGenericAsyncArrowFunction = function(i, s, n) {
        var c = this;
        if (this.tsMatchLeftRelational()) {
          var l = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var m = this.tsTryParseAndCatch(function() {
            var y = c.startNodeAt(i, s);
            return y.typeParameters = c.tsParseTypeParameters(), T.prototype.parseFunctionParams.call(c, y), y.returnType = c.tsTryParseTypeOrTypePredicateAnnotation(), c.expect(o.arrow), y;
          });
          if (this.maybeInArrowParameters = l, m) return T.prototype.parseArrowExpression.call(this, m, null, !0, n);
        }
      }, p.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === o.relational) return this.tsParseTypeArguments();
      }, p.tsInNoContext = function(i) {
        var s = this.context;
        this.context = [s[0]];
        try {
          return i();
        } finally {
          this.context = s;
        }
      }, p.tsTryParseTypeAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, p.isUnparsedContextual = function(i, s) {
        var n = i + s.length;
        if (this.input.slice(i, n) === s) {
          var c = this.input.charCodeAt(n);
          return !(J(c) || (64512 & c) == 55296);
        }
        return !1;
      }, p.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(I.abstract) && this.lookahead().type === o._new;
      }, p.nextTokenStartSince = function(i) {
        return fe.lastIndex = i, fe.test(this.input) ? fe.lastIndex : i;
      }, p.lookaheadCharCode = function() {
        return this.input.charCodeAt(this.nextTokenStart());
      }, p.compareLookaheadState = function(i, s) {
        for (var n = 0, c = Object.keys(i); n < c.length; n++) {
          var l = c[n];
          if (i[l] !== s[l]) return !1;
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
        var s = this.getCurLookaheadState(), n = i();
        return this.setLookaheadState(s), n;
      }, p.lookahead = function(i) {
        var s = this.getCurLookaheadState();
        if (this.createLookaheadState(), this.isLookahead = !0, i !== void 0) for (var n = 0; n < i; n++) this.nextToken();
        else this.nextToken();
        this.isLookahead = !1;
        var c = this.getCurLookaheadState();
        return this.setLookaheadState(s), c;
      }, p.readWord = function() {
        var i = this.readWord1(), s = o.name;
        return this.keywords.test(i) ? s = w[i] : new RegExp(Tt).test(i) && (s = I[i]), this.finishToken(s, i);
      }, p.skipBlockComment = function() {
        var i;
        this.isLookahead || (i = this.options.onComment && this.curPosition());
        var s = this.pos, n = this.input.indexOf("*/", this.pos += 2);
        if (n === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = n + 2, this.options.locations) for (var c, l = s; (c = Ai(this.input, l, this.pos)) > -1; ) ++this.curLine, l = this.lineStart = c;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(s + 2, n), s, this.pos, i, this.curPosition());
      }, p.skipLineComment = function(i) {
        var s, n = this.pos;
        this.isLookahead || (s = this.options.onComment && this.curPosition());
        for (var c = this.input.charCodeAt(this.pos += i); this.pos < this.input.length && !R(c); ) c = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(n + i, this.pos), n, this.pos, s, this.curPosition());
      }, p.finishToken = function(i, s) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var n = this.type;
        this.type = i, this.value = s, this.isLookahead || this.updateContext(n);
      }, p.resetStartLocation = function(i, s, n) {
        i.start = s, i.loc.start = n, this.options.ranges && (i.range[0] = s);
      }, p.isLineTerminator = function() {
        return this.eat(o.semi) || T.prototype.canInsertSemicolon.call(this);
      }, p.hasFollowingLineBreak = function() {
        return Be.lastIndex = this.end, Be.test(this.input);
      }, p.addExtra = function(i, s, n, c) {
        if (c === void 0 && (c = !0), i) {
          var l = i.extra = i.extra || {};
          c ? l[s] = n : Object.defineProperty(l, s, { enumerable: c, value: n });
        }
      }, p.isLiteralPropertyName = function() {
        return Ht(this.type);
      }, p.hasPrecedingLineBreak = function() {
        return D.test(this.input.slice(this.lastTokEndLoc.index, this.start));
      }, p.createIdentifier = function(i, s) {
        return i.name = s, this.finishNode(i, "Identifier");
      }, p.resetStartLocationFromNode = function(i, s) {
        this.resetStartLocation(i, s.start, s.loc.start);
      }, p.isThisParam = function(i) {
        return i.type === "Identifier" && i.name === "this";
      }, p.isLookaheadContextual = function(i) {
        var s = this.nextTokenStart();
        return this.isUnparsedContextual(s, i);
      }, p.ts_type_isContextual = function(i, s) {
        return i === s && !this.containsEsc;
      }, p.ts_isContextual = function(i) {
        return this.type === i && !this.containsEsc;
      }, p.ts_isContextualWithState = function(i, s) {
        return i.type === s && !i.containsEsc;
      }, p.isContextualWithState = function(i, s) {
        return s.type === o.name && s.value === i && !s.containsEsc;
      }, p.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(o.plusMin) ? this.ts_isContextual(I.readonly) : (this.ts_isContextual(I.readonly) && this.next(), !!this.match(o.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(o._in))));
      }, p.tsInDisallowConditionalTypesContext = function(i) {
        var s = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return i();
        } finally {
          this.inDisallowConditionalTypesContext = s;
        }
      }, p.tsTryParseType = function() {
        return this.tsEatThenParseType(o.colon);
      }, p.match = function(i) {
        return this.type === i;
      }, p.matchJsx = function(i) {
        return this.type === g.tokTypes[i];
      }, p.ts_eatWithState = function(i, s, n) {
        if (i === n.type) {
          for (var c = 0; c < s; c++) this.next();
          return !0;
        }
        return !1;
      }, p.ts_eatContextualWithState = function(i, s, n) {
        if (Tt.test(i)) {
          if (this.ts_isContextualWithState(n, I[i])) {
            for (var c = 0; c < s; c++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(i, n)) return !1;
        for (var l = 0; l < s; l++) this.next();
        return !0;
      }, p.canHaveLeadingDecorator = function() {
        return this.match(o._class);
      }, p.eatContextual = function(i) {
        return Tt.test(i) ? !!this.ts_isContextual(I[i]) && (this.next(), !0) : T.prototype.eatContextual.call(this, i);
      }, p.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, p.tsParseExternalModuleReference = function() {
        var i = this.startNode();
        return this.expectContextual("require"), this.expect(o.parenL), this.match(o.string) || this.unexpected(), i.expression = this.parseExprAtom(), this.expect(o.parenR), this.finishNode(i, "TSExternalModuleReference");
      }, p.tsParseEntityName = function(i) {
        i === void 0 && (i = !0);
        for (var s = this.parseIdent(i); this.eat(o.dot); ) {
          var n = this.startNodeAtNode(s);
          n.left = s, n.right = this.parseIdent(i), s = this.finishNode(n, "TSQualifiedName");
        }
        return s;
      }, p.tsParseEnumMember = function() {
        var i = this.startNode();
        return i.id = this.match(o.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(o.eq) && (i.initializer = this.parseMaybeAssign()), this.finishNode(i, "TSEnumMember");
      }, p.tsParseEnumDeclaration = function(i, s) {
        return s === void 0 && (s = {}), s.const && (i.const = !0), s.declare && (i.declare = !0), this.expectContextual("enum"), i.id = this.parseIdent(), this.checkLValSimple(i.id), this.expect(o.braceL), i.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(o.braceR), this.finishNode(i, "TSEnumDeclaration");
      }, p.tsParseModuleBlock = function() {
        var i = this.startNode();
        for (T.prototype.enterScope.call(this, 512), this.expect(o.braceL), i.body = []; this.type !== o.braceR; ) {
          var s = this.parseStatement(null, !0);
          i.body.push(s);
        }
        return this.next(), T.prototype.exitScope.call(this), this.finishNode(i, "TSModuleBlock");
      }, p.tsParseAmbientExternalModuleDeclaration = function(i) {
        return this.ts_isContextual(I.global) ? (i.global = !0, i.id = this.parseIdent()) : this.match(o.string) ? i.id = this.parseLiteral(this.value) : this.unexpected(), this.match(o.braceL) ? (T.prototype.enterScope.call(this, Ot), i.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this)) : T.prototype.semicolon.call(this), this.finishNode(i, "TSModuleDeclaration");
      }, p.tsTryParseDeclare = function(i) {
        var s = this;
        if (!this.isLineTerminator()) {
          var n, c = this.type;
          return this.isContextual("let") && (c = o._var, n = "let"), this.tsInAmbientContext(function() {
            if (c === o._function) return i.declare = !0, s.parseFunctionStatement(i, !1, !0);
            if (c === o._class) return i.declare = !0, s.parseClass(i, !0);
            if (c === I.enum) return s.tsParseEnumDeclaration(i, { declare: !0 });
            if (c === I.global) return s.tsParseAmbientExternalModuleDeclaration(i);
            if (c === o._const || c === o._var) return s.match(o._const) && s.isLookaheadContextual("enum") ? (s.expect(o._const), s.tsParseEnumDeclaration(i, { const: !0, declare: !0 })) : (i.declare = !0, s.parseVarStatement(i, n || s.value, !0));
            if (c === I.interface) {
              var l = s.tsParseInterfaceDeclaration(i, { declare: !0 });
              if (l) return l;
            }
            return U(c) ? s.tsParseDeclaration(i, s.value, !0) : void 0;
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
      }, p.tsParseDelimitedListWorker = function(i, s, n, c) {
        for (var l = [], m = -1; !this.tsIsListTerminator(i); ) {
          m = -1;
          var y = s();
          if (y == null) return;
          if (l.push(y), !this.eat(o.comma)) {
            if (this.tsIsListTerminator(i)) break;
            return void (n && this.expect(o.comma));
          }
          m = this.lastTokStart;
        }
        return c && (c.value = m), l;
      }, p.tsParseDelimitedList = function(i, s, n) {
        return (function(c) {
          if (c == null) throw new Error("Unexpected " + c + " value.");
          return c;
        })(this.tsParseDelimitedListWorker(i, s, !0, n));
      }, p.tsParseBracketedList = function(i, s, n, c, l) {
        c || this.expect(n ? o.bracketL : o.relational);
        var m = this.tsParseDelimitedList(i, s, l);
        return this.expect(n ? o.bracketR : o.relational), m;
      }, p.tsParseTypeParameterName = function() {
        return this.parseIdent().name;
      }, p.tsEatThenParseType = function(i) {
        return this.match(i) ? this.tsNextThenParseType() : void 0;
      }, p.tsExpectThenParseType = function(i) {
        var s = this;
        return this.tsDoThenParseType(function() {
          return s.expect(i);
        });
      }, p.tsNextThenParseType = function() {
        var i = this;
        return this.tsDoThenParseType(function() {
          return i.next();
        });
      }, p.tsDoThenParseType = function(i) {
        var s = this;
        return this.tsInType(function() {
          return i(), s.tsParseType();
        });
      }, p.tsSkipParameterStart = function() {
        if (U(this.type) || this.match(o._this)) return this.next(), !0;
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
        var s = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !1;
        try {
          return i();
        } finally {
          this.inDisallowConditionalTypesContext = s;
        }
      }, p.tsParseBindingListForSignature = function() {
        var i = this;
        return T.prototype.parseBindingList.call(this, o.parenR, !0, !0).map(function(s) {
          return s.type !== "Identifier" && s.type !== "RestElement" && s.type !== "ObjectPattern" && s.type !== "ArrayPattern" && i.raise(s.start, A.UnsupportedSignatureParameterKind(s.type)), s;
        });
      }, p.tsParseTypePredicateAsserts = function() {
        if (this.type !== I.asserts) return !1;
        var i = this.containsEsc;
        return this.next(), !(!U(this.type) && !this.match(o._this) || (i && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, p.tsParseThisTypeNode = function() {
        var i = this.startNode();
        return this.next(), this.finishNode(i, "TSThisType");
      }, p.tsParseTypeAnnotation = function(i, s) {
        var n = this;
        return i === void 0 && (i = !0), s === void 0 && (s = this.startNode()), this.tsInType(function() {
          i && n.expect(o.colon), s.typeAnnotation = n.tsParseType();
        }), this.finishNode(s, "TSTypeAnnotation");
      }, p.tsParseThisTypePredicate = function(i) {
        this.next();
        var s = this.startNodeAtNode(i);
        return s.parameterName = i, s.typeAnnotation = this.tsParseTypeAnnotation(!1), s.asserts = !1, this.finishNode(s, "TSTypePredicate");
      }, p.tsParseThisTypeOrThisTypePredicate = function() {
        var i = this.tsParseThisTypeNode();
        return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(i) : i;
      }, p.tsParseTypePredicatePrefix = function() {
        var i = this.parseIdent();
        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), i;
      }, p.tsParseTypeOrTypePredicateAnnotation = function(i) {
        var s = this;
        return this.tsInType(function() {
          var n = s.startNode();
          s.expect(i);
          var c = s.startNode(), l = !!s.tsTryParse(s.tsParseTypePredicateAsserts.bind(s));
          if (l && s.match(o._this)) {
            var m = s.tsParseThisTypeOrThisTypePredicate();
            return m.type === "TSThisType" ? (c.parameterName = m, c.asserts = !0, c.typeAnnotation = null, m = s.finishNode(c, "TSTypePredicate")) : (s.resetStartLocationFromNode(m, c), m.asserts = !0), n.typeAnnotation = m, s.finishNode(n, "TSTypeAnnotation");
          }
          var y = s.tsIsIdentifier() && s.tsTryParse(s.tsParseTypePredicatePrefix.bind(s));
          if (!y) return l ? (c.parameterName = s.parseIdent(), c.asserts = l, c.typeAnnotation = null, n.typeAnnotation = s.finishNode(c, "TSTypePredicate"), s.finishNode(n, "TSTypeAnnotation")) : s.tsParseTypeAnnotation(!1, n);
          var x = s.tsParseTypeAnnotation(!1);
          return c.parameterName = y, c.typeAnnotation = x, c.asserts = l, n.typeAnnotation = s.finishNode(c, "TSTypePredicate"), s.finishNode(n, "TSTypeAnnotation");
        });
      }, p.tsFillSignature = function(i, s) {
        var n = i === o.arrow;
        s.typeParameters = this.tsTryParseTypeParameters(), this.expect(o.parenL), s.parameters = this.tsParseBindingListForSignature(), (n || this.match(i)) && (s.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(i));
      }, p.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== o._const) return null;
        this.next();
        var i = this.tsParseTypeReference();
        return i.typeParameters && this.raise(i.typeName.start, A.CannotFindName({ name: "const" })), i;
      }, p.tsParseFunctionOrConstructorType = function(i, s) {
        var n = this, c = this.startNode();
        return i === "TSConstructorType" && (c.abstract = !!s, s && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return n.tsFillSignature(o.arrow, c);
        }), this.finishNode(c, i);
      }, p.tsParseUnionOrIntersectionType = function(i, s, n) {
        var c = this.startNode(), l = this.eat(n), m = [];
        do
          m.push(s());
        while (this.eat(n));
        return m.length !== 1 || l ? (c.types = m, this.finishNode(c, i)) : m[0];
      }, p.tsCheckTypeAnnotationForReadOnly = function(i) {
        switch (i.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(i.start, A.UnexpectedReadonly);
        }
      }, p.tsParseTypeOperator = function() {
        var i = this.startNode(), s = this.value;
        return this.next(), i.operator = s, i.typeAnnotation = this.tsParseTypeOperatorOrHigher(), s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(i), this.finishNode(i, "TSTypeOperator");
      }, p.tsParseConstraintForInferType = function() {
        var i = this;
        if (this.eat(o._extends)) {
          var s = this.tsInDisallowConditionalTypesContext(function() {
            return i.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(o.question)) return s;
        }
      }, p.tsParseInferType = function() {
        var i = this, s = this.startNode();
        this.expectContextual("infer");
        var n = this.startNode();
        return n.name = this.tsParseTypeParameterName(), n.constraint = this.tsTryParse(function() {
          return i.tsParseConstraintForInferType();
        }), s.typeParameter = this.finishNode(n, "TSTypeParameter"), this.finishNode(s, "TSInferType");
      }, p.tsParseLiteralTypeNode = function() {
        var i = this, s = this.startNode();
        return s.literal = (function() {
          switch (i.type) {
            case o.num:
            case o.string:
            case o._true:
            case o._false:
              return i.parseExprAtom();
            default:
              i.unexpected();
          }
        })(), this.finishNode(s, "TSLiteralType");
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
        var i = this.startLoc, s = this.start, n = this.eat(o.ellipsis), c = this.tsParseType(), l = this.eat(o.question);
        if (this.eat(o.colon)) {
          var m = this.startNodeAtNode(c);
          m.optional = l, c.type !== "TSTypeReference" || c.typeParameters || c.typeName.type !== "Identifier" ? (this.raise(c.start, A.InvalidTupleMemberLabel), m.label = c) : m.label = c.typeName, m.elementType = this.tsParseType(), c = this.finishNode(m, "TSNamedTupleMember");
        } else if (l) {
          var y = this.startNodeAtNode(c);
          y.typeAnnotation = c, c = this.finishNode(y, "TSOptionalType");
        }
        if (n) {
          var x = this.startNodeAt(s, i);
          x.typeAnnotation = c, c = this.finishNode(x, "TSRestType");
        }
        return c;
      }, p.tsParseTupleType = function() {
        var i = this, s = this.startNode();
        s.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
        var n = !1, c = null;
        return s.elementTypes.forEach(function(l) {
          var m = l.type;
          !n || m === "TSRestType" || m === "TSOptionalType" || m === "TSNamedTupleMember" && l.optional || i.raise(l.start, A.OptionalTypeBeforeRequired), n || (n = m === "TSNamedTupleMember" && l.optional || m === "TSOptionalType");
          var y = m;
          m === "TSRestType" && (y = (l = l.typeAnnotation).type);
          var x = y === "TSNamedTupleMember";
          c != null || (c = x), c !== x && i.raise(l.start, A.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(s, "TSTupleType");
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
            var s = this.type;
            if (U(s) || s === o._void || s === o._null) {
              var n = s === o._void ? "TSVoidKeyword" : s === o._null ? "TSNullKeyword" : (function(l) {
                switch (l) {
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
          var s = this.startNodeAtNode(i);
          s.elementType = i, this.expect(o.bracketR), i = this.finishNode(s, "TSArrayType");
        } else {
          var n = this.startNodeAtNode(i);
          n.objectType = i, n.indexType = this.tsParseType(), this.expect(o.bracketR), i = this.finishNode(n, "TSIndexedAccessType");
        }
        return i;
      }, p.tsParseTypeOperatorOrHigher = function() {
        var i = this;
        return ki(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
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
        Ue(this.inType);
        var s = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(o._extends)) return s;
        var n = this.startNodeAtNode(s);
        return n.checkType = s, n.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return i.tsParseNonConditionalType();
        }), this.expect(o.question), n.trueType = this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseType();
        }), this.expect(o.colon), n.falseType = this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseType();
        }), this.finishNode(n, "TSConditionalType");
      }, p.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!U(this.type) && (this.next(), this.match(o.colon));
      }, p.tsInType = function(i) {
        var s = this.inType;
        this.inType = !0;
        try {
          return i();
        } finally {
          this.inType = s;
        }
      }, p.tsTryParseIndexSignature = function(i) {
        if (this.match(o.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(o.bracketL);
          var s = this.parseIdent();
          s.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(s), this.expect(o.bracketR), i.parameters = [s];
          var n = this.tsTryParseTypeAnnotation();
          return n && (i.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSIndexSignature");
        }
      }, p.tsParseNoneModifiers = function(i) {
        this.tsParseModifiers({ modified: i, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: A.InvalidModifierOnTypeParameterPositions });
      }, p.tsParseTypeParameter = function(i) {
        i === void 0 && (i = this.tsParseNoneModifiers.bind(this));
        var s = this.startNode();
        return i(s), s.name = this.tsParseTypeParameterName(), s.constraint = this.tsEatThenParseType(o._extends), s.default = this.tsEatThenParseType(o.eq), this.finishNode(s, "TSTypeParameter");
      }, p.tsParseTypeParameters = function(i) {
        var s = this.startNode();
        this.tsMatchLeftRelational() || this.matchJsx("jsxTagStart") ? this.next() : this.unexpected();
        var n = { value: -1 };
        return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, i), !1, !0, n), s.params.length === 0 && this.raise(this.start, A.EmptyTypeParameters), n.value !== -1 && this.addExtra(s, "trailingComma", n.value), this.finishNode(s, "TSTypeParameterDeclaration");
      }, p.tsTryParseTypeParameters = function(i) {
        if (this.tsMatchLeftRelational()) return this.tsParseTypeParameters(i);
      }, p.tsTryParse = function(i) {
        var s = this.getCurLookaheadState(), n = i();
        return n !== void 0 && n !== !1 ? n : void this.setLookaheadState(s);
      }, p.tsTokenCanFollowModifier = function() {
        return (this.match(o.bracketL) || this.match(o.braceL) || this.match(o.star) || this.match(o.ellipsis) || this.match(o.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, p.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, p.tsParseModifier = function(i, s) {
        if (U(this.type) || this.type === o._in) {
          var n = this.value;
          if (i.indexOf(n) !== -1 && !this.containsEsc) {
            if (s && this.tsIsStartOfStaticBlocks()) return;
            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return n;
          }
        }
      }, p.tsParseModifiersByMap = function(i) {
        for (var s = i.modified, n = i.map, c = 0, l = Object.keys(n); c < l.length; c++) {
          var m = l[c];
          s[m] = n[m];
        }
      }, p.tsParseModifiers = function(i) {
        for (var s = this, n = i.modified, c = i.allowedModifiers, l = i.disallowedModifiers, m = i.stopOnStartOfClassStaticBlock, y = i.errorTemplate, x = y === void 0 ? A.InvalidModifierOnTypeMember : y, b = {}, S = function(z, H, W, $) {
          H === W && n[$] && s.raise(z.column, A.InvalidModifiersOrder({ orderedModifiers: [W, $] }));
        }, E = function(z, H, W, $) {
          (n[W] && H === $ || n[$] && H === W) && s.raise(z.column, A.IncompatibleModifiers({ modifiers: [W, $] }));
        }; ; ) {
          var L = this.startLoc, C = this.tsParseModifier(c.concat(l ?? []), m);
          if (!C) break;
          qe(C) ? n.accessibility ? this.raise(this.start, A.DuplicateAccessibilityModifier()) : (S(L, C, C, "override"), S(L, C, C, "static"), S(L, C, C, "readonly"), S(L, C, C, "accessor"), b.accessibility = C, n.accessibility = C) : As(C) ? n[C] ? this.raise(this.start, A.DuplicateModifier({ modifier: C })) : (S(L, C, "in", "out"), b[C] = C, n[C] = !0) : ks(C) ? n[C] ? this.raise(this.start, A.DuplicateModifier({ modifier: C })) : (E(L, C, "accessor", "readonly"), E(L, C, "accessor", "static"), E(L, C, "accessor", "override"), b[C] = C, n[C] = !0) : Object.hasOwnProperty.call(n, C) ? this.raise(this.start, A.DuplicateModifier({ modifier: C })) : (S(L, C, "static", "readonly"), S(L, C, "static", "override"), S(L, C, "override", "readonly"), S(L, C, "abstract", "override"), E(L, C, "declare", "override"), E(L, C, "static", "abstract"), b[C] = C, n[C] = !0), l != null && l.includes(C) && this.raise(this.start, x);
        }
        return b;
      }, p.tsParseInOutModifiers = function(i) {
        this.tsParseModifiers({ modified: i, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: A.InvalidModifierOnTypeParameter });
      }, p.tsParseTypeArguments = function() {
        var i = this, s = this.startNode();
        return s.params = this.tsInType(function() {
          return i.tsInNoContext(function() {
            return i.expect(o.relational), i.tsParseDelimitedList("TypeParametersOrArguments", i.tsParseType.bind(i));
          });
        }), s.params.length === 0 && this.raise(this.start, A.EmptyTypeArguments), this.exprAllowed = !1, this.expect(o.relational), this.finishNode(s, "TSTypeParameterInstantiation");
      }, p.tsParseHeritageClause = function(i) {
        var s = this, n = this.start, c = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var l = s.startNode();
          return l.expression = s.tsParseEntityName(), s.tsMatchLeftRelational() && (l.typeParameters = s.tsParseTypeArguments()), s.finishNode(l, "TSExpressionWithTypeArguments");
        });
        return c.length || this.raise(n, A.EmptyHeritageClauseType({ token: i })), c;
      }, p.tsParseTypeMemberSemicolon = function() {
        this.eat(o.comma) || this.isLineTerminator() || this.expect(o.semi);
      }, p.tsTryParseAndCatch = function(i) {
        var s = this.tryParse(function(n) {
          return i() || n();
        });
        if (!s.aborted && s.node) return s.error && this.setLookaheadState(s.failState), s.node;
      }, p.tsParseSignatureMember = function(i, s) {
        return this.tsFillSignature(o.colon, s), this.tsParseTypeMemberSemicolon(), this.finishNode(s, i);
      }, p.tsParsePropertyOrMethodSignature = function(i, s) {
        this.eat(o.question) && (i.optional = !0);
        var n = i;
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) {
          s && this.raise(i.start, A.ReadonlyForMethodSignature);
          var c = n;
          c.kind && this.tsMatchLeftRelational() && this.raise(this.start, A.AccesorCannotHaveTypeParameters), this.tsFillSignature(o.colon, c), this.tsParseTypeMemberSemicolon();
          var l = "parameters", m = "typeAnnotation";
          if (c.kind === "get") c[l].length > 0 && (this.raise(this.start, "A 'get' accesor must not have any formal parameters."), this.isThisParam(c[l][0]) && this.raise(this.start, A.AccesorCannotDeclareThisParameter));
          else if (c.kind === "set") {
            if (c[l].length !== 1) this.raise(this.start, "A 'get' accesor must not have any formal parameters.");
            else {
              var y = c[l][0];
              this.isThisParam(y) && this.raise(this.start, A.AccesorCannotDeclareThisParameter), y.type === "Identifier" && y.optional && this.raise(this.start, A.SetAccesorCannotHaveOptionalParameter), y.type === "RestElement" && this.raise(this.start, A.SetAccesorCannotHaveRestParameter);
            }
            c[m] && this.raise(c[m].start, A.SetAccesorCannotHaveReturnType);
          } else c.kind = "method";
          return this.finishNode(c, "TSMethodSignature");
        }
        var x = n;
        s && (x.readonly = !0);
        var b = this.tsTryParseTypeAnnotation();
        return b && (x.typeAnnotation = b), this.tsParseTypeMemberSemicolon(), this.finishNode(x, "TSPropertySignature");
      }, p.tsParseTypeMember = function() {
        var i = this.startNode();
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", i);
        if (this.match(o._new)) {
          var s = this.startNode();
          return this.next(), this.match(o.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", i) : (i.key = this.createIdentifier(s, "new"), this.tsParsePropertyOrMethodSignature(i, !1));
        }
        return this.tsParseModifiers({ modified: i, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(i) || (this.parsePropertyName(i), i.computed || i.key.type !== "Identifier" || i.key.name !== "get" && i.key.name !== "set" || !this.tsTokenCanFollowModifier() || (i.kind = i.key.name, this.parsePropertyName(i)), this.tsParsePropertyOrMethodSignature(i, !!i.readonly));
      }, p.tsParseList = function(i, s) {
        for (var n = []; !this.tsIsListTerminator(i); ) n.push(s());
        return n;
      }, p.tsParseObjectTypeMembers = function() {
        this.expect(o.braceL);
        var i = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(o.braceR), i;
      }, p.tsParseInterfaceDeclaration = function(i, s) {
        if (s === void 0 && (s = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), s.declare && (i.declare = !0), U(this.type) ? (i.id = this.parseIdent(), this.checkLValSimple(i.id, 7)) : (i.id = null, this.raise(this.start, A.MissingInterfaceName)), i.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(o._extends) && (i.extends = this.tsParseHeritageClause("extends"));
        var n = this.startNode();
        return n.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), i.body = this.finishNode(n, "TSInterfaceBody"), this.finishNode(i, "TSInterfaceDeclaration");
      }, p.tsParseAbstractDeclaration = function(i) {
        if (this.match(o._class)) return i.abstract = !0, this.parseClass(i, !0);
        if (this.ts_isContextual(I.interface)) {
          if (!this.hasFollowingLineBreak()) return i.abstract = !0, this.tsParseInterfaceDeclaration(i);
        } else this.unexpected(i.start);
      }, p.tsIsDeclarationStart = function() {
        return ne(this.type);
      }, p.tsParseExpressionStatement = function(i, s) {
        switch (s.name) {
          case "declare":
            var n = this.tsTryParseDeclare(i);
            if (n) return n.declare = !0, n;
            break;
          case "global":
            if (this.match(o.braceL)) {
              T.prototype.enterScope.call(this, Ot);
              var c = i;
              return c.global = !0, c.id = s, c.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this), this.finishNode(c, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(i, s.name, !1);
        }
      }, p.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, p.tsIsExportDefaultSpecifier = function() {
        var i = this.type, s = this.isAsyncFunction(), n = this.isLet();
        if (U(i)) {
          if (s && !this.containsEsc || n) return !1;
          if ((i === I.type || i === I.interface) && !this.containsEsc) {
            var c = this.lookahead();
            if (U(c.type) && !this.isContextualWithState("from", c) || c.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var l = this.nextTokenStart(), m = this.isUnparsedContextual(l, "from");
        if (this.input.charCodeAt(l) === 44 || U(this.type) && m) return !0;
        if (this.match(o._default) && m) {
          var y = this.input.charCodeAt(this.nextTokenStartSince(l + 4));
          return y === 34 || y === 39;
        }
        return !1;
      }, p.tsInAmbientContext = function(i) {
        var s = this.isAmbientContext;
        this.isAmbientContext = !0;
        try {
          return i();
        } finally {
          this.isAmbientContext = s;
        }
      }, p.tsCheckLineTerminator = function(i) {
        return i ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
      }, p.tsParseModuleOrNamespaceDeclaration = function(i, s) {
        if (s === void 0 && (s = !1), i.id = this.parseIdent(), s || this.checkLValSimple(i.id, 8), this.eat(o.dot)) {
          var n = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(n, !0), i.body = n;
        } else T.prototype.enterScope.call(this, Ot), i.body = this.tsParseModuleBlock(), T.prototype.exitScope.call(this);
        return this.finishNode(i, "TSModuleDeclaration");
      }, p.checkLValSimple = function(i, s, n) {
        return s === void 0 && (s = 0), T.prototype.checkLValSimple.call(this, i, s, n);
      }, p.tsParseTypeAliasDeclaration = function(i) {
        var s = this;
        return i.id = this.parseIdent(), this.checkLValSimple(i.id, 6), i.typeAnnotation = this.tsInType(function() {
          if (i.typeParameters = s.tsTryParseTypeParameters(s.tsParseInOutModifiers.bind(s)), s.expect(o.eq), s.ts_isContextual(I.interface) && s.lookahead().type !== o.dot) {
            var n = s.startNode();
            return s.next(), s.finishNode(n, "TSIntrinsicKeyword");
          }
          return s.tsParseType();
        }), this.semicolon(), this.finishNode(i, "TSTypeAliasDeclaration");
      }, p.tsParseDeclaration = function(i, s, n) {
        switch (s) {
          case "abstract":
            if (this.tsCheckLineTerminator(n) && (this.match(o._class) || U(this.type))) return this.tsParseAbstractDeclaration(i);
            break;
          case "module":
            if (this.tsCheckLineTerminator(n)) {
              if (this.match(o.string)) return this.tsParseAmbientExternalModuleDeclaration(i);
              if (U(this.type)) return this.tsParseModuleOrNamespaceDeclaration(i);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(n) && U(this.type)) return this.tsParseModuleOrNamespaceDeclaration(i);
            break;
          case "type":
            if (this.tsCheckLineTerminator(n) && U(this.type)) return this.tsParseTypeAliasDeclaration(i);
        }
      }, p.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, p.tsParseImportEqualsDeclaration = function(i, s) {
        i.isExport = s || !1, i.id = this.parseIdent(), this.checkLValSimple(i.id, 2), T.prototype.expect.call(this, o.eq);
        var n = this.tsParseModuleReference();
        return i.importKind === "type" && n.type !== "TSExternalModuleReference" && this.raise(n.start, A.ImportAliasHasImportType), i.moduleReference = n, T.prototype.semicolon.call(this), this.finishNode(i, "TSImportEqualsDeclaration");
      }, p.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var i = this.type;
        if (U(i)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((i === I.type || i === I.interface) && !this.containsEsc) {
            var s = this.lookahead();
            if (U(s.type) && !this.isContextualWithState("from", s) || s.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var n = this.nextTokenStart(), c = this.isUnparsedContextual(n, "from");
        if (this.input.charCodeAt(n) === 44 || U(this.type) && c) return !0;
        if (this.match(o._default) && c) {
          var l = this.input.charCodeAt(this.nextTokenStartSince(n + 4));
          return l === 34 || l === 39;
        }
        return !1;
      }, p.parseTemplate = function(i) {
        var s = (i === void 0 ? {} : i).isTagged, n = s !== void 0 && s, c = this.startNode();
        this.next(), c.expressions = [];
        var l = this.parseTemplateElement({ isTagged: n });
        for (c.quasis = [l]; !l.tail; ) this.type === o.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(o.dollarBraceL), c.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(o.braceR), c.quasis.push(l = this.parseTemplateElement({ isTagged: n }));
        return this.next(), this.finishNode(c, "TemplateLiteral");
      }, p.parseFunction = function(i, s, n, c, l) {
        this.initFunction(i), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !c) && (this.type === o.star && 2 & s && this.unexpected(), i.generator = this.eat(o.star)), this.options.ecmaVersion >= 8 && (i.async = !!c), 1 & s && (i.id = 4 & s && this.type !== o.name ? null : this.parseIdent());
        var m = this.yieldPos, y = this.awaitPos, x = this.awaitIdentPos, b = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(de(i.async, i.generator)), 1 & s || (i.id = this.type === o.name ? this.parseIdent() : null), this.parseFunctionParams(i);
        var S = 1 & s;
        return this.parseFunctionBody(i, n, !1, l, { isFunctionDeclaration: S }), this.yieldPos = m, this.awaitPos = y, this.awaitIdentPos = x, 1 & s && i.id && !(2 & s) && this.checkLValSimple(i.id, i.body ? this.strict || i.generator || i.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = b, this.finishNode(i, S ? "FunctionDeclaration" : "FunctionExpression");
      }, p.parseFunctionBody = function(i, s, n, c, l) {
        s === void 0 && (s = !1), n === void 0 && (n = !1), c === void 0 && (c = !1), this.match(o.colon) && (i.returnType = this.tsParseTypeOrTypePredicateAnnotation(o.colon));
        var m = l != null && l.isFunctionDeclaration ? "TSDeclareFunction" : l != null && l.isClassMethod ? "TSDeclareMethod" : void 0;
        return m && !this.match(o.braceL) && this.isLineTerminator() ? this.finishNode(i, m) : m === "TSDeclareFunction" && this.isAmbientContext && (this.raise(i.start, A.DeclareFunctionHasImplementation), i.declare) ? (T.prototype.parseFunctionBody.call(this, i, s, n, !1), this.finishNode(i, m)) : (T.prototype.parseFunctionBody.call(this, i, s, n, c), i);
      }, p.parseNew = function() {
        var i;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var s = this.startNode(), n = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(o.dot)) {
          s.meta = n;
          var c = this.containsEsc;
          return s.property = this.parseIdent(!0), s.property.name !== "target" && this.raiseRecoverable(s.property.start, "The only valid meta property for new is 'new.target'"), c && this.raiseRecoverable(s.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(s.start, "'new.target' can only be used in functions and class static block"), this.finishNode(s, "MetaProperty");
        }
        var l = this.start, m = this.startLoc, y = this.type === o._import;
        s.callee = this.parseSubscripts(this.parseExprAtom(), l, m, !0, !1), y && s.callee.type === "ImportExpression" && this.raise(l, "Cannot use new with import()");
        var x = s.callee;
        return x.type !== "TSInstantiationExpression" || (i = x.extra) != null && i.parenthesized || (s.typeParameters = x.typeParameters, s.callee = x.expression), s.arguments = this.eat(o.parenL) ? this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(s, "NewExpression");
      }, p.parseExprOp = function(i, s, n, c, l) {
        var m;
        if (o._in.binop > c && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (m = "TSAsExpression"), f && this.isContextual("satisfies") && (m = "TSSatisfiesExpression"), m)) {
          var y = this.startNodeAt(s, n);
          y.expression = i;
          var x = this.tsTryNextParseConstantContext();
          return y.typeAnnotation = x || this.tsNextThenParseType(), this.finishNode(y, m), this.reScan_lt_gt(), this.parseExprOp(y, s, n, c, l);
        }
        return T.prototype.parseExprOp.call(this, i, s, n, c, l);
      }, p.parseImportSpecifiers = function() {
        var i = [], s = !0;
        if (g.tokenIsIdentifier(this.type) && (i.push(this.parseImportDefaultSpecifier()), !this.eat(o.comma))) return i;
        if (this.type === o.star) return i.push(this.parseImportNamespaceSpecifier()), i;
        for (this.expect(o.braceL); !this.eat(o.braceR); ) {
          if (s) s = !1;
          else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
          i.push(this.parseImportSpecifier());
        }
        return i;
      }, p.parseImport = function(i) {
        var s = this.lookahead();
        if (i.importKind = "value", this.importOrExportOuterKind = "value", U(s.type) || this.match(o.star) || this.match(o.braceL)) {
          var n = this.lookahead(2);
          if (n.type !== o.comma && !this.isContextualWithState("from", n) && n.type !== o.eq && this.ts_eatContextualWithState("type", 1, s) && (this.importOrExportOuterKind = "type", i.importKind = "type", s = this.lookahead(), n = this.lookahead(2)), U(s.type) && n.type === o.eq) {
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
          var s = this.tsParseInterfaceDeclaration(this.startNode());
          if (s) return s;
        }
        return T.prototype.parseExportDefaultDeclaration.call(this);
      }, p.parseExportAllDeclaration = function(i, s) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (i.exported = this.parseModuleExportName(), this.checkExport(s, i.exported, this.lastTokStart)) : i.exported = null), this.expectContextual("from"), this.type !== o.string && this.unexpected(), i.source = this.parseExprAtom(), this.parseMaybeImportAttributes(i), this.semicolon(), this.finishNode(i, "ExportAllDeclaration");
      }, p.parseDynamicImport = function(i) {
        if (this.next(), i.source = this.parseMaybeAssign(), this.eat(o.comma)) {
          var s = this.parseExpression();
          i.arguments = [s];
        }
        if (!this.eat(o.parenR)) {
          var n = this.start;
          this.eat(o.comma) && this.eat(o.parenR) ? this.raiseRecoverable(n, "Trailing comma is not allowed in import()") : this.unexpected(n);
        }
        return this.finishNode(i, "ImportExpression");
      }, p.parseExport = function(i, s) {
        var n = this.lookahead();
        if (this.ts_eatWithState(o._import, 2, n)) {
          this.ts_isContextual(I.type) && this.lookaheadCharCode() !== 61 ? (i.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (i.importKind = "value", this.importOrExportOuterKind = "value");
          var c = this.tsParseImportEqualsDeclaration(i, !0);
          return this.importOrExportOuterKind = void 0, c;
        }
        if (this.ts_eatWithState(o.eq, 2, n)) {
          var l = i;
          return l.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(l, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, n)) {
          var m = i;
          return this.expectContextual("namespace"), m.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(m, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(n, I.type) && this.lookahead(2).type === o.braceL ? (this.next(), this.importOrExportOuterKind = "type", i.exportKind = "type") : (this.importOrExportOuterKind = "value", i.exportKind = "value"), this.next(), this.eat(o.star)) return this.parseExportAllDeclaration(i, s);
        if (this.eat(o._default)) return this.checkExport(s, "default", this.lastTokStart), i.declaration = this.parseExportDefaultDeclaration(), this.finishNode(i, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) i.declaration = this.parseExportDeclaration(i), i.declaration.type === "VariableDeclaration" ? this.checkVariableExport(s, i.declaration.declarations) : this.checkExport(s, i.declaration.id, i.declaration.id.start), i.specifiers = [], i.source = null;
        else {
          if (i.declaration = null, i.specifiers = this.parseExportSpecifiers(s), this.eatContextual("from")) this.type !== o.string && this.unexpected(), i.source = this.parseExprAtom(), this.parseMaybeImportAttributes(i);
          else {
            for (var y, x = Fe(i.specifiers); !(y = x()).done; ) {
              var b = y.value;
              this.checkUnreserved(b.local), this.checkLocalExport(b.local), b.local.type === "Literal" && this.raise(b.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            i.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(i, "ExportNamedDeclaration");
      }, p.checkExport = function(i, s, n) {
        i && (typeof s != "string" && (s = s.type === "Identifier" ? s.name : s.value), i[s] = !0);
      }, p.parseMaybeDefault = function(i, s, n) {
        var c = T.prototype.parseMaybeDefault.call(this, i, s, n);
        return c.type === "AssignmentPattern" && c.typeAnnotation && c.right.start < c.typeAnnotation.start && this.raise(c.typeAnnotation.start, A.TypeAnnotationAfterAssign), c;
      }, p.typeCastToParameter = function(i) {
        return i.expression.typeAnnotation = i.typeAnnotation, this.resetEndLocation(i.expression, i.typeAnnotation.end), i.expression;
      }, p.toAssignableList = function(i, s) {
        for (var n = 0; n < i.length; n++) {
          var c = i[n];
          c?.type === "TSTypeCastExpression" && (i[n] = this.typeCastToParameter(c));
        }
        return T.prototype.toAssignableList.call(this, i, s);
      }, p.reportReservedArrowTypeParam = function(i) {
      }, p.parseExprAtom = function(i, s, n) {
        if (this.type === I.jsxText) return this.jsx_parseText();
        if (this.type === I.jsxTagStart) return this.jsx_parseElement();
        if (this.type === I.at) return this.parseDecorators(), this.parseExprAtom();
        if (U(this.type)) {
          var c = this.potentialArrowAt === this.start, l = this.start, m = this.startLoc, y = this.containsEsc, x = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !y && x.name === "async" && !this.canInsertSemicolon() && this.eat(o._function)) return this.overrideContext(j.f_expr), this.parseFunction(this.startNodeAt(l, m), 0, !1, !0, s);
          if (c && !this.canInsertSemicolon()) {
            if (this.eat(o.arrow)) return this.parseArrowExpression(this.startNodeAt(l, m), [x], !1, s);
            if (this.options.ecmaVersion >= 8 && x.name === "async" && this.type === o.name && !y && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return x = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(l, m), [x], !0, s);
          }
          return x;
        }
        return T.prototype.parseExprAtom.call(this, i, s, n);
      }, p.parseExprAtomDefault = function() {
        if (U(this.type)) {
          var i = this.potentialArrowAt === this.start, s = this.containsEsc, n = this.parseIdent();
          if (!s && n.name === "async" && !this.canInsertSemicolon()) {
            var c = this.type;
            if (c === o._function) return this.next(), this.parseFunction(this.startNodeAtNode(n), void 0, !0, !0);
            if (U(c)) {
              if (this.lookaheadCharCode() === 61) {
                var l = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(n), [l], !0);
              }
              return n;
            }
          }
          return i && this.match(o.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(n), [n], !1)) : n;
        }
        this.unexpected();
      }, p.parseIdentNode = function() {
        var i = this.startNode();
        return zt(this.type) ? (i.name = this.value, i) : T.prototype.parseIdentNode.call(this);
      }, p.parseVarStatement = function(i, s, n) {
        n === void 0 && (n = !1);
        var c = this.isAmbientContext;
        this.next(), T.prototype.parseVar.call(this, i, !1, s, n || c), this.semicolon();
        var l = this.finishNode(i, "VariableDeclaration");
        if (!c) return l;
        for (var m, y = Fe(l.declarations); !(m = y()).done; ) {
          var x = m.value, b = x.init;
          b && (s !== "const" || x.id.typeAnnotation ? this.raise(b.start, A.InitializerNotAllowedInAmbientContext) : b.type !== "StringLiteral" && b.type !== "BooleanLiteral" && b.type !== "NumericLiteral" && b.type !== "BigIntLiteral" && (b.type !== "TemplateLiteral" || b.expressions.length > 0) && !ws(b) && this.raise(b.start, A.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return l;
      }, p.parseStatement = function(i, s, n) {
        if (this.match(I.at) && this.parseDecorators(!0), this.match(o._const) && this.isLookaheadContextual("enum")) {
          var c = this.startNode();
          return this.expect(o._const), this.tsParseEnumDeclaration(c, { const: !0 });
        }
        if (this.ts_isContextual(I.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(I.interface)) {
          var l = this.tsParseInterfaceDeclaration(this.startNode());
          if (l) return l;
        }
        return T.prototype.parseStatement.call(this, i, s, n);
      }, p.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, p.parsePostMemberNameModifiers = function(i) {
        this.eat(o.question) && (i.optional = !0), i.readonly && this.match(o.parenL) && this.raise(i.start, A.ClassMethodHasReadonly), i.declare && this.match(o.parenL) && this.raise(i.start, A.ClassMethodHasDeclare);
      }, p.parseExpressionStatement = function(i, s) {
        return (s.type === "Identifier" ? this.tsParseExpressionStatement(i, s) : void 0) || T.prototype.parseExpressionStatement.call(this, i, s);
      }, p.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(I.at) || T.prototype.shouldParseExportStatement.call(this);
      }, p.parseConditional = function(i, s, n, c, l) {
        if (this.eat(o.question)) {
          var m = this.startNodeAt(s, n);
          return m.test = i, m.consequent = this.parseMaybeAssign(), this.expect(o.colon), m.alternate = this.parseMaybeAssign(c), this.finishNode(m, "ConditionalExpression");
        }
        return i;
      }, p.parseMaybeConditional = function(i, s) {
        var n = this, c = this.start, l = this.startLoc, m = this.parseExprOps(i, s);
        if (this.checkExpressionErrors(s)) return m;
        if (!this.maybeInArrowParameters || !this.match(o.question)) return this.parseConditional(m, c, l, i, s);
        var y = this.tryParse(function() {
          return n.parseConditional(m, c, l, i, s);
        });
        return y.node ? (y.error && this.setLookaheadState(y.failState), y.node) : (y.error && this.setOptionalParametersError(s, y.error), m);
      }, p.parseParenItem = function(i) {
        var s = this.start, n = this.startLoc;
        if (i = T.prototype.parseParenItem.call(this, i), this.eat(o.question) && (i.optional = !0, this.resetEndLocation(i)), this.match(o.colon)) {
          var c = this.startNodeAt(s, n);
          return c.expression = i, c.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(c, "TSTypeCastExpression");
        }
        return i;
      }, p.parseExportDeclaration = function(i) {
        var s = this;
        if (!this.isAmbientContext && this.ts_isContextual(I.declare)) return this.tsInAmbientContext(function() {
          return s.parseExportDeclaration(i);
        });
        var n = this.start, c = this.startLoc, l = this.eatContextual("declare");
        !l || !this.ts_isContextual(I.declare) && this.shouldParseExportStatement() || this.raise(this.start, A.ExpectedAmbientAfterExportDeclare);
        var m = U(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return m ? ((m.type === "TSInterfaceDeclaration" || m.type === "TSTypeAliasDeclaration" || l) && (i.exportKind = "type"), l && (this.resetStartLocation(m, n, c), m.declare = !0), m) : null;
      }, p.parseClassId = function(i, s) {
        if (s || !this.isContextual("implements")) {
          T.prototype.parseClassId.call(this, i, s);
          var n = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          n && (i.typeParameters = n);
        }
      }, p.parseClassPropertyAnnotation = function(i) {
        i.optional || (this.value === "!" && this.eat(o.prefix) ? i.definite = !0 : this.eat(o.question) && (i.optional = !0));
        var s = this.tsTryParseTypeAnnotation();
        s && (i.typeAnnotation = s);
      }, p.parseClassField = function(i) {
        if (i.key.type === "PrivateIdentifier") i.abstract && this.raise(i.start, A.PrivateElementHasAbstract), i.accessibility && this.raise(i.start, A.PrivateElementHasAccessibility({ modifier: i.accessibility })), this.parseClassPropertyAnnotation(i);
        else if (this.parseClassPropertyAnnotation(i), this.isAmbientContext && (!i.readonly || i.typeAnnotation) && this.match(o.eq) && this.raise(this.start, A.DeclareClassFieldHasInitializer), i.abstract && this.match(o.eq)) {
          var s = i.key;
          this.raise(this.start, A.AbstractPropertyHasInitializer({ propertyName: s.type !== "Identifier" || i.computed ? "[" + this.input.slice(s.start, s.end) + "]" : s.name }));
        }
        return T.prototype.parseClassField.call(this, i);
      }, p.parseClassMethod = function(i, s, n, c) {
        var l = i.kind === "constructor", m = i.key.type === "PrivateIdentifier", y = this.tsTryParseTypeParameters();
        m ? (y && (i.typeParameters = y), i.accessibility && this.raise(i.start, A.PrivateMethodsHasAccessibility({ modifier: i.accessibility }))) : y && l && this.raise(y.start, A.ConstructorHasTypeParameters);
        var x = i.declare, b = i.kind;
        !(x !== void 0 && x) || b !== "get" && b !== "set" || this.raise(i.start, A.DeclareAccessor({ kind: b })), y && (i.typeParameters = y);
        var S = i.key;
        i.kind === "constructor" ? (s && this.raise(S.start, "Constructor can't be a generator"), n && this.raise(S.start, "Constructor can't be an async method")) : i.static && je(i, "prototype") && this.raise(S.start, "Classes may not have a static property named prototype");
        var E = i.value = this.parseMethod(s, n, c, !0, i);
        return i.kind === "get" && E.params.length !== 0 && this.raiseRecoverable(E.start, "getter should have no params"), i.kind === "set" && E.params.length !== 1 && this.raiseRecoverable(E.start, "setter should have exactly one param"), i.kind === "set" && E.params[0].type === "RestElement" && this.raiseRecoverable(E.params[0].start, "Setter cannot use rest params"), this.finishNode(i, "MethodDefinition");
      }, p.isClassMethod = function() {
        return this.match(o.relational);
      }, p.parseClassElement = function(i) {
        var s = this;
        if (this.eat(o.semi)) return null;
        var n, c = this.options.ecmaVersion, l = this.startNode(), m = "", y = !1, x = !1, b = "method", S = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], E = this.tsParseModifiers({ modified: l, allowedModifiers: S, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: A.InvalidModifierOnTypeParameterPositions });
        n = !!E.static;
        var L = function() {
          if (!s.tsIsStartOfStaticBlocks()) {
            var C = s.tsTryParseIndexSignature(l);
            if (C) return l.abstract && s.raise(l.start, A.IndexSignatureHasAbstract), l.accessibility && s.raise(l.start, A.IndexSignatureHasAccessibility({ modifier: l.accessibility })), l.declare && s.raise(l.start, A.IndexSignatureHasDeclare), l.override && s.raise(l.start, A.IndexSignatureHasOverride), C;
            if (!s.inAbstractClass && l.abstract && s.raise(l.start, A.NonAbstractClassHasAbstractMethod), l.override && i && s.raise(l.start, A.OverrideNotInSubClass), l.static = n, n && (s.isClassElementNameStart() || s.type === o.star || (m = "static")), !m && c >= 8 && s.eatContextual("async") && (!s.isClassElementNameStart() && s.type !== o.star || s.canInsertSemicolon() ? m = "async" : x = !0), !m && (c >= 9 || !x) && s.eat(o.star) && (y = !0), !m && !x && !y) {
              var z = s.value;
              (s.eatContextual("get") || s.eatContextual("set")) && (s.isClassElementNameStart() ? b = z : m = z);
            }
            if (m ? (l.computed = !1, l.key = s.startNodeAt(s.lastTokStart, s.lastTokStartLoc), l.key.name = m, s.finishNode(l.key, "Identifier")) : s.parseClassElementName(l), s.parsePostMemberNameModifiers(l), s.isClassMethod() || c < 13 || s.type === o.parenL || b !== "method" || y || x) {
              var H = !l.static && je(l, "constructor"), W = H && i;
              H && b !== "method" && s.raise(l.key.start, "Constructor can't have get/set modifier"), l.kind = H ? "constructor" : b, s.parseClassMethod(l, y, x, W);
            } else s.parseClassField(l);
            return l;
          }
          if (s.next(), s.next(), s.tsHasSomeModifiers(l, S) && s.raise(s.start, A.StaticBlockCannotHaveModifier), c >= 13) return T.prototype.parseClassStaticBlock.call(s, l), l;
        };
        return l.declare ? this.tsInAmbientContext(L) : L(), l;
      }, p.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || T.prototype.isClassElementNameStart.call(this);
      }, p.parseClassSuper = function(i) {
        T.prototype.parseClassSuper.call(this, i), i.superClass && (this.tsMatchLeftRelational() || this.match(o.bitShift)) && (i.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (i.implements = this.tsParseHeritageClause("implements"));
      }, p.parseFunctionParams = function(i) {
        var s = this.tsTryParseTypeParameters();
        s && (i.typeParameters = s), T.prototype.parseFunctionParams.call(this, i);
      }, p.parseVarId = function(i, s) {
        T.prototype.parseVarId.call(this, i, s), i.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(o.prefix) && (i.definite = !0);
        var n = this.tsTryParseTypeAnnotation();
        n && (i.id.typeAnnotation = n, this.resetEndLocation(i.id));
      }, p.parseArrowExpression = function(i, s, n, c) {
        this.match(o.colon) && (i.returnType = this.tsParseTypeAnnotation());
        var l = this.yieldPos, m = this.awaitPos, y = this.awaitIdentPos;
        this.enterScope(16 | de(n, !1)), this.initFunction(i);
        var x = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (i.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, i.params = this.toAssignableList(s, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(i, !0, !1, c), this.yieldPos = l, this.awaitPos = m, this.awaitIdentPos = y, this.maybeInArrowParameters = x, this.finishNode(i, "ArrowFunctionExpression");
      }, p.parseMaybeAssignOrigin = function(i, s, n) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(i);
          this.exprAllowed = !1;
        }
        var c = !1, l = -1, m = -1, y = -1;
        s ? (l = s.parenthesizedAssign, m = s.trailingComma, y = s.doubleProto, s.parenthesizedAssign = s.trailingComma = -1) : (s = new Rt(), c = !0);
        var x = this.start, b = this.startLoc;
        (this.type === o.parenL || U(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = i === "await");
        var S = this.parseMaybeConditional(i, s);
        if (n && (S = n.call(this, S, x, b)), this.type.isAssign) {
          var E = this.startNodeAt(x, b);
          return E.operator = this.value, this.type === o.eq && (S = this.toAssignable(S, !0, s)), c || (s.parenthesizedAssign = s.trailingComma = s.doubleProto = -1), s.shorthandAssign >= S.start && (s.shorthandAssign = -1), this.type === o.eq ? this.checkLValPattern(S) : this.checkLValSimple(S), E.left = S, this.next(), E.right = this.parseMaybeAssign(i), y > -1 && (s.doubleProto = y), this.finishNode(E, "AssignmentExpression");
        }
        return c && this.checkExpressionErrors(s, !0), l > -1 && (s.parenthesizedAssign = l), m > -1 && (s.trailingComma = m), S;
      }, p.parseMaybeAssign = function(i, s, n) {
        var c, l, m, y, x, b, S, E, L, C, z, H = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (E = this.cloneCurLookaheadState(), !(L = this.tryParse(function() {
            return H.parseMaybeAssignOrigin(i, s, n);
          }, E)).error) return L.node;
          var W = this.context, $ = W[W.length - 1];
          $ === g.tokContexts.tc_oTag && W[W.length - 2] === g.tokContexts.tc_expr ? (W.pop(), W.pop()) : $ !== g.tokContexts.tc_oTag && $ !== g.tokContexts.tc_expr || W.pop();
        }
        if (!((c = L) != null && c.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(i, s, n);
        E && !this.compareLookaheadState(E, this.getCurLookaheadState()) || (E = this.cloneCurLookaheadState());
        var rt = this.tryParse(function(vt) {
          var _t, Lt;
          z = H.tsParseTypeParameters();
          var gt = H.parseMaybeAssignOrigin(i, s, n);
          return (gt.type !== "ArrowFunctionExpression" || (_t = gt.extra) != null && _t.parenthesized) && vt(), ((Lt = z) == null ? void 0 : Lt.params.length) !== 0 && H.resetStartLocationFromNode(gt, z), gt.typeParameters = z, gt;
        }, E);
        if (!rt.error && !rt.aborted) return z && this.reportReservedArrowTypeParam(z), rt.node;
        if (!L && (Ue(!0), !(C = this.tryParse(function() {
          return H.parseMaybeAssignOrigin(i, s, n);
        }, E)).error)) return C.node;
        if ((l = L) != null && l.node) return this.setLookaheadState(L.failState), L.node;
        if (rt.node) return this.setLookaheadState(rt.failState), z && this.reportReservedArrowTypeParam(z), rt.node;
        if ((m = C) != null && m.node) return this.setLookaheadState(C.failState), C.node;
        throw (y = L) != null && y.thrown ? L.error : rt.thrown ? rt.error : (x = C) != null && x.thrown ? C.error : ((b = L) == null ? void 0 : b.error) || rt.error || ((S = C) == null ? void 0 : S.error);
      }, p.parseAssignableListItem = function(i) {
        for (var s = []; this.match(I.at); ) s.push(this.parseDecorator());
        var n, c = this.start, l = this.startLoc, m = !1, y = !1;
        if (i !== void 0) {
          var x = {};
          this.tsParseModifiers({ modified: x, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), n = x.accessibility, y = x.override, m = x.readonly, i === !1 && (n || m || y) && this.raise(l.start, A.UnexpectedParameterModifier);
        }
        var b = this.parseMaybeDefault(c, l);
        this.parseBindingListItem(b);
        var S = this.parseMaybeDefault(b.start, b.loc, b);
        if (s.length && (S.decorators = s), n || m || y) {
          var E = this.startNodeAt(c, l);
          return n && (E.accessibility = n), m && (E.readonly = m), y && (E.override = y), S.type !== "Identifier" && S.type !== "AssignmentPattern" && this.raise(E.start, A.UnsupportedParameterPropertyKind), E.parameter = S, this.finishNode(E, "TSParameterProperty");
        }
        return S;
      }, p.checkLValInnerPattern = function(i, s, n) {
        s === void 0 && (s = 0), i.type === "TSParameterProperty" ? this.checkLValInnerPattern(i.parameter, s, n) : T.prototype.checkLValInnerPattern.call(this, i, s, n);
      }, p.parseBindingListItem = function(i) {
        this.eat(o.question) && (i.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(i.start, A.PatternIsOptional), i.optional = !0);
        var s = this.tsTryParseTypeAnnotation();
        return s && (i.typeAnnotation = s), this.resetEndLocation(i), i;
      }, p.isAssignable = function(i, s) {
        var n = this;
        switch (i.type) {
          case "TSTypeCastExpression":
            return this.isAssignable(i.expression, s);
          case "TSParameterProperty":
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            return !0;
          case "ObjectExpression":
            var c = i.properties.length - 1;
            return i.properties.every(function(l, m) {
              return l.type !== "ObjectMethod" && (m === c || l.type !== "SpreadElement") && n.isAssignable(l);
            });
          case "Property":
          case "ObjectProperty":
            return this.isAssignable(i.value);
          case "SpreadElement":
            return this.isAssignable(i.argument);
          case "ArrayExpression":
            return i.elements.every(function(l) {
              return l === null || n.isAssignable(l);
            });
          case "AssignmentExpression":
            return i.operator === "=";
          case "ParenthesizedExpression":
            return this.isAssignable(i.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !s;
          default:
            return !1;
        }
      }, p.toAssignable = function(i, s, n) {
        switch (s === void 0 && (s = !1), n === void 0 && (n = new Rt()), i.type) {
          case "ParenthesizedExpression":
            return this.toAssignableParenthesizedExpression(i, s, n);
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            return s || this.raise(i.start, A.UnexpectedTypeCastInParameter), this.toAssignable(i.expression, s, n);
          case "MemberExpression":
            break;
          case "AssignmentExpression":
            return s || i.left.type !== "TSTypeCastExpression" || (i.left = this.typeCastToParameter(i.left)), T.prototype.toAssignable.call(this, i, s, n);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(i);
          default:
            return T.prototype.toAssignable.call(this, i, s, n);
        }
        return i;
      }, p.toAssignableParenthesizedExpression = function(i, s, n) {
        switch (i.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            return this.toAssignable(i.expression, s, n);
          default:
            return T.prototype.toAssignable.call(this, i, s, n);
        }
      }, p.curPosition = function() {
        if (this.options.locations) {
          var i = T.prototype.curPosition.call(this);
          return Object.defineProperty(i, "offset", { get: function() {
            return function(s) {
              var n = new v.Position(this.line, this.column + s);
              return n.index = this.index + s, n;
            };
          } }), i.index = this.pos, i;
        }
      }, p.parseBindingAtom = function() {
        return this.type === o._this ? this.parseIdent(!0) : T.prototype.parseBindingAtom.call(this);
      }, p.shouldParseArrow = function(i) {
        var s, n = this;
        if (s = this.match(o.colon) ? i.every(function(l) {
          return n.isAssignable(l, !0);
        }) : !this.canInsertSemicolon()) {
          if (this.match(o.colon)) {
            var c = this.tryParse(function(l) {
              var m = n.tsParseTypeOrTypePredicateAnnotation(o.colon);
              return !n.canInsertSemicolon() && n.match(o.arrow) || l(), m;
            });
            if (c.aborted) return this.shouldParseArrowReturnType = void 0, !1;
            c.thrown || (c.error && this.setLookaheadState(c.failState), this.shouldParseArrowReturnType = c.node);
          }
          return !!this.match(o.arrow) || (this.shouldParseArrowReturnType = void 0, !1);
        }
        return this.shouldParseArrowReturnType = void 0, s;
      }, p.parseParenArrowList = function(i, s, n, c) {
        var l = this.startNodeAt(i, s);
        return l.returnType = this.shouldParseArrowReturnType, this.shouldParseArrowReturnType = void 0, this.parseArrowExpression(l, n, !1, c);
      }, p.parseParenAndDistinguishExpression = function(i, s) {
        var n, c = this.start, l = this.startLoc, m = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          var y = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0, this.next();
          var x, b = this.start, S = this.startLoc, E = [], L = !0, C = !1, z = new Rt(), H = this.yieldPos, W = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== o.parenR; ) {
            if (L ? L = !1 : this.expect(o.comma), m && this.afterTrailingComma(o.parenR, !0)) {
              C = !0;
              break;
            }
            if (this.type === o.ellipsis) {
              x = this.start, E.push(this.parseParenItem(this.parseRestBinding())), this.type === o.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            E.push(this.parseMaybeAssign(s, z, this.parseParenItem));
          }
          var $ = this.lastTokEnd, rt = this.lastTokEndLoc;
          if (this.expect(o.parenR), this.maybeInArrowParameters = y, i && this.shouldParseArrow(E) && this.eat(o.arrow)) return this.checkPatternErrors(z, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = H, this.awaitPos = W, this.parseParenArrowList(c, l, E, s);
          E.length && !C || this.unexpected(this.lastTokStart), x && this.unexpected(x), this.checkExpressionErrors(z, !0), this.yieldPos = H || this.yieldPos, this.awaitPos = W || this.awaitPos, E.length > 1 ? ((n = this.startNodeAt(b, S)).expressions = E, this.finishNodeAt(n, "SequenceExpression", $, rt)) : n = E[0];
        } else n = this.parseParenExpression();
        if (this.options.preserveParens) {
          var vt = this.startNodeAt(c, l);
          return vt.expression = n, this.finishNode(vt, "ParenthesizedExpression");
        }
        return n;
      }, p.parseTaggedTemplateExpression = function(i, s, n, c) {
        var l = this.startNodeAt(s, n);
        return l.tag = i, l.quasi = this.parseTemplate({ isTagged: !0 }), c && this.raise(s, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(l, "TaggedTemplateExpression");
      }, p.shouldParseAsyncArrow = function() {
        var i = this;
        if (!this.match(o.colon)) return !this.canInsertSemicolon() && this.eat(o.arrow);
        var s = this.tryParse(function(n) {
          var c = i.tsParseTypeOrTypePredicateAnnotation(o.colon);
          return !i.canInsertSemicolon() && i.match(o.arrow) || n(), c;
        });
        return s.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : s.thrown ? void 0 : (s.error && this.setLookaheadState(s.failState), this.shouldParseAsyncArrowReturnType = s.node, !this.canInsertSemicolon() && this.eat(o.arrow));
      }, p.parseSubscriptAsyncArrow = function(i, s, n, c) {
        var l = this.startNodeAt(i, s);
        return l.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(l, n, !0, c);
      }, p.parseExprList = function(i, s, n, c) {
        for (var l = [], m = !0; !this.eat(i); ) {
          if (m) m = !1;
          else if (this.expect(o.comma), s && this.afterTrailingComma(i)) break;
          var y = void 0;
          n && this.type === o.comma ? y = null : this.type === o.ellipsis ? (y = this.parseSpread(c), c && this.type === o.comma && c.trailingComma < 0 && (c.trailingComma = this.start)) : y = this.parseMaybeAssign(!1, c, this.parseParenItem), l.push(y);
        }
        return l;
      }, p.parseSubscript = function(i, s, n, c, l, m, y) {
        var x = this, b = m;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(o.prefix)) {
          this.exprAllowed = !1, this.next();
          var S = this.startNodeAt(s, n);
          return S.expression = i, i = this.finishNode(S, "TSNonNullExpression");
        }
        var E = !1;
        if (this.match(o.questionDot) && this.lookaheadCharCode() === 60) {
          if (c) return i;
          i.optional = !0, b = E = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(o.bitShift)) {
          var L, C = this.tsTryParseAndCatch(function() {
            if (!c && x.atPossibleAsyncArrow(i)) {
              var we = x.tsTryParseGenericAsyncArrowFunction(s, n, y);
              if (we) return i = we;
            }
            var Kt = x.tsParseTypeArgumentsInExpression();
            if (!Kt) return i;
            if (E && !x.match(o.parenL)) return L = x.curPosition(), i;
            if (ae(x.type) || x.type === o.backQuote) {
              var Ee = x.parseTaggedTemplateExpression(i, s, n, b);
              return Ee.typeParameters = Kt, Ee;
            }
            if (!c && x.eat(o.parenL)) {
              var Ie = new Rt(), kt = x.startNodeAt(s, n);
              return kt.callee = i, kt.arguments = x.parseExprList(o.parenR, x.options.ecmaVersion >= 8, !1, Ie), x.tsCheckForInvalidTypeCasts(kt.arguments), kt.typeParameters = Kt, b && (kt.optional = E), x.checkExpressionErrors(Ie, !0), i = x.finishNode(kt, "CallExpression");
            }
            var he = x.type;
            if (!(x.tsMatchRightRelational() || he === o.bitShift || he !== o.parenL && (Ne = he, !!Ne.startsExpr) && !x.hasPrecedingLineBreak())) {
              var Ne, ue = x.startNodeAt(s, n);
              return ue.expression = i, ue.typeParameters = Kt, x.finishNode(ue, "TSInstantiationExpression");
            }
          });
          if (L && this.unexpected(L), C) return C.type === "TSInstantiationExpression" && (this.match(o.dot) || this.match(o.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, A.InvalidPropertyAccessAfterInstantiationExpression), i = C;
        }
        var z = this.options.ecmaVersion >= 11, H = z && this.eat(o.questionDot);
        c && H && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var W = this.eat(o.bracketL);
        if (W || H && this.type !== o.parenL && this.type !== o.backQuote || this.eat(o.dot)) {
          var $ = this.startNodeAt(s, n);
          $.object = i, W ? ($.property = this.parseExpression(), this.expect(o.bracketR)) : $.property = this.type === o.privateId && i.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), $.computed = !!W, z && ($.optional = H), i = this.finishNode($, "MemberExpression");
        } else if (!c && this.eat(o.parenL)) {
          var rt = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var vt = new Rt(), _t = this.yieldPos, Lt = this.awaitPos, gt = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var Ae = this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1, vt);
          if (l && !H && this.shouldParseAsyncArrow()) this.checkPatternErrors(vt, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = _t, this.awaitPos = Lt, this.awaitIdentPos = gt, i = this.parseSubscriptAsyncArrow(s, n, Ae, y);
          else {
            this.checkExpressionErrors(vt, !0), this.yieldPos = _t || this.yieldPos, this.awaitPos = Lt || this.awaitPos, this.awaitIdentPos = gt || this.awaitIdentPos;
            var Wt = this.startNodeAt(s, n);
            Wt.callee = i, Wt.arguments = Ae, z && (Wt.optional = H), i = this.finishNode(Wt, "CallExpression");
          }
          this.maybeInArrowParameters = rt;
        } else if (this.type === o.backQuote) {
          (H || b) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var oe = this.startNodeAt(s, n);
          oe.tag = i, oe.quasi = this.parseTemplate({ isTagged: !0 }), i = this.finishNode(oe, "TaggedTemplateExpression");
        }
        return i;
      }, p.parseGetterSetter = function(i) {
        i.kind = i.key.name, this.parsePropertyName(i), i.value = this.parseMethod(!1);
        var s = i.kind === "get" ? 0 : 1, n = i.value.params[0], c = n && this.isThisParam(n);
        i.value.params.length !== (s = c ? s + 1 : s) ? this.raiseRecoverable(i.value.start, i.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : i.kind === "set" && i.value.params[0].type === "RestElement" && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params");
      }, p.parseProperty = function(i, s) {
        if (!i) {
          var n = [];
          if (this.match(I.at)) for (; this.match(I.at); ) n.push(this.parseDecorator());
          var c = T.prototype.parseProperty.call(this, i, s);
          return c.type === "SpreadElement" && n.length && this.raise(c.start, "Decorators can't be used with SpreadElement"), n.length && (c.decorators = n, n = []), c;
        }
        return T.prototype.parseProperty.call(this, i, s);
      }, p.parseCatchClauseParam = function() {
        var i = this.parseBindingAtom(), s = i.type === "Identifier";
        this.enterScope(s ? 32 : 0), this.checkLValPattern(i, s ? 4 : 2);
        var n = this.tsTryParseTypeAnnotation();
        return n && (i.typeAnnotation = n, this.resetEndLocation(i)), this.expect(o.parenR), i;
      }, p.parseClass = function(i, s) {
        var n = this.inAbstractClass;
        this.inAbstractClass = !!i.abstract;
        try {
          this.next(), this.takeDecorators(i);
          var c = this.strict;
          this.strict = !0, this.parseClassId(i, s), this.parseClassSuper(i);
          var l = this.enterClassBody(), m = this.startNode(), y = !1;
          m.body = [];
          var x = [];
          for (this.expect(o.braceL); this.type !== o.braceR; ) if (this.match(I.at)) x.push(this.parseDecorator());
          else {
            var b = this.parseClassElement(i.superClass !== null);
            x.length && (b.decorators = x, this.resetStartLocationFromNode(b, x[0]), x = []), b && (m.body.push(b), b.type === "MethodDefinition" && b.kind === "constructor" && b.value.type === "FunctionExpression" ? (y && this.raiseRecoverable(b.start, "Duplicate constructor in the same class"), y = !0, b.decorators && b.decorators.length > 0 && this.raise(b.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : b.key && b.key.type === "PrivateIdentifier" && Ss(l, b) && this.raiseRecoverable(b.key.start, "Identifier '#" + b.key.name + "' has already been declared"));
          }
          return this.strict = c, this.next(), x.length && this.raise(this.start, "Decorators must be attached to a class element."), i.body = this.finishNode(m, "ClassBody"), this.exitClassBody(), this.finishNode(i, s ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = n;
        }
      }, p.parseClassFunctionParams = function() {
        var i = this.tsTryParseTypeParameters(this.tsParseConstModifier), s = this.parseBindingList(o.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return i && (s.typeParameters = i), s;
      }, p.parseMethod = function(i, s, n, c, l) {
        var m = this.startNode(), y = this.yieldPos, x = this.awaitPos, b = this.awaitIdentPos;
        if (this.initFunction(m), this.options.ecmaVersion >= 6 && (m.generator = i), this.options.ecmaVersion >= 8 && (m.async = !!s), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | de(s, m.generator) | (n ? 128 : 0)), this.expect(o.parenL), m.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(m, !1, !0, !1, { isClassMethod: c }), this.yieldPos = y, this.awaitPos = x, this.awaitIdentPos = b, l && l.abstract && m.body) {
          var S = l.key;
          this.raise(l.start, A.AbstractMethodHasImplementation({ methodName: S.type !== "Identifier" || l.computed ? "[" + this.input.slice(S.start, S.end) + "]" : S.name }));
        }
        return this.finishNode(m, "FunctionExpression");
      }, it.parse = function(i, s) {
        if (s.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        s.locations = !0;
        var n = new this(s, i);
        return a && (n.isAmbientContext = !0), n.parse();
      }, it.parseExpressionAt = function(i, s, n) {
        if (n.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        n.locations = !0;
        var c = new this(n, i, s);
        return a && (c.isAmbientContext = !0), c.nextToken(), c.parseExpression();
      }, p.parseImportSpecifier = function() {
        if (this.ts_isContextual(I.type)) {
          var i = this.startNode();
          return i.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(i, !0, this.importOrExportOuterKind === "type"), this.finishNode(i, "ImportSpecifier");
        }
        var s = T.prototype.parseImportSpecifier.call(this);
        return s.importKind = "value", s;
      }, p.parseExportSpecifier = function(i) {
        var s = this.ts_isContextual(I.type);
        if (!this.match(o.string) && s) {
          var n = this.startNode();
          return n.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(n, !1, this.importOrExportOuterKind === "type"), this.finishNode(n, "ExportSpecifier"), this.checkExport(i, n.exported, n.exported.start), n;
        }
        var c = T.prototype.parseExportSpecifier.call(this, i);
        return c.exportKind = "value", c;
      }, p.parseTypeOnlyImportExportSpecifier = function(i, s, n) {
        var c, l = s ? "imported" : "local", m = s ? "local" : "exported", y = i[l], x = !1, b = !0, S = y.start;
        if (this.isContextual("as")) {
          var E = this.parseIdent();
          if (this.isContextual("as")) {
            var L = this.parseIdent();
            zt(this.type) ? (x = !0, y = E, c = s ? this.parseIdent() : this.parseModuleExportName(), b = !1) : (c = L, b = !1);
          } else zt(this.type) ? (b = !1, c = s ? this.parseIdent() : this.parseModuleExportName()) : (x = !0, y = E);
        } else zt(this.type) && (x = !0, s ? (y = T.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(y)) : y = this.parseModuleExportName());
        x && n && this.raise(S, s ? A.TypeModifierIsUsedInTypeImports : A.TypeModifierIsUsedInTypeExports), i[l] = y, i[m] = c, i[s ? "importKind" : "exportKind"] = x ? "type" : "value", b && this.eatContextual("as") && (i[m] = s ? this.parseIdent() : this.parseModuleExportName()), i[m] || (i[m] = this.copyNode(i[l])), s && this.checkLValSimple(i[m], 2);
      }, p.raiseCommonCheck = function(i, s, n) {
        return s === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(o.comma) && this.lookaheadCharCode() === 41 ? void this.next() : T.prototype.raise.call(this, i, s) : n ? T.prototype.raiseRecoverable.call(this, i, s) : T.prototype.raise.call(this, i, s);
      }, p.raiseRecoverable = function(i, s) {
        return this.raiseCommonCheck(i, s, !0);
      }, p.raise = function(i, s) {
        return this.raiseCommonCheck(i, s, !0);
      }, p.updateContext = function(i) {
        var s = this.type;
        if (s == o.braceL) {
          var n = this.curContext();
          n == X.tc_oTag ? this.context.push(j.b_expr) : n == X.tc_expr ? this.context.push(j.b_tmpl) : T.prototype.updateContext.call(this, i), this.exprAllowed = !0;
        } else {
          if (s !== o.slash || i !== I.jsxTagStart) return T.prototype.updateContext.call(this, i);
          this.context.length -= 2, this.context.push(X.tc_cTag), this.exprAllowed = !1;
        }
      }, p.jsx_parseOpeningElementAt = function(i, s) {
        var n = this, c = this.startNodeAt(i, s), l = this.jsx_parseElementName();
        if (l && (c.name = l), this.match(o.relational) || this.match(o.bitShift)) {
          var m = this.tsTryParseAndCatch(function() {
            return n.tsParseTypeArgumentsInExpression();
          });
          m && (c.typeParameters = m);
        }
        for (c.attributes = []; this.type !== o.slash && this.type !== I.jsxTagEnd; ) c.attributes.push(this.jsx_parseAttribute());
        return c.selfClosing = this.eat(o.slash), this.expect(I.jsxTagEnd), this.finishNode(c, l ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, p.enterScope = function(i) {
        i === Ot && this.importsStack.push([]), T.prototype.enterScope.call(this, i);
        var s = T.prototype.currentScope.call(this);
        s.types = [], s.enums = [], s.constEnums = [], s.classes = [], s.exportOnlyBindings = [];
      }, p.exitScope = function() {
        T.prototype.currentScope.call(this).flags === Ot && this.importsStack.pop(), T.prototype.exitScope.call(this);
      }, p.hasImport = function(i, s) {
        var n = this.importsStack.length;
        if (this.importsStack[n - 1].indexOf(i) > -1) return !0;
        if (!s && n > 1) {
          for (var c = 0; c < n - 1; c++) if (this.importsStack[c].indexOf(i) > -1) return !0;
        }
        return !1;
      }, p.maybeExportDefined = function(i, s) {
        this.inModule && 1 & i.flags && this.undefinedExports.delete(s);
      }, p.isRedeclaredInScope = function(i, s, n) {
        return !!(0 & n) && (2 & n ? i.lexical.indexOf(s) > -1 || i.functions.indexOf(s) > -1 || i.var.indexOf(s) > -1 : 3 & n ? i.lexical.indexOf(s) > -1 || !T.prototype.treatFunctionsAsVarInScope.call(this, i) && i.var.indexOf(s) > -1 : i.lexical.indexOf(s) > -1 && !(32 & i.flags && i.lexical[0] === s) || !this.treatFunctionsAsVarInScope(i) && i.functions.indexOf(s) > -1);
      }, p.checkRedeclarationInScope = function(i, s, n, c) {
        this.isRedeclaredInScope(i, s, n) && this.raise(c, "Identifier '" + s + "' has already been declared.");
      }, p.declareName = function(i, s, n) {
        if (4096 & s) return this.hasImport(i, !0) && this.raise(n, "Identifier '" + i + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(i);
        var c = this.currentScope();
        if (1024 & s) return this.maybeExportDefined(c, i), void c.exportOnlyBindings.push(i);
        T.prototype.declareName.call(this, i, s, n), 0 & s && (0 & s || (this.checkRedeclarationInScope(c, i, s, n), this.maybeExportDefined(c, i)), c.types.push(i)), 256 & s && c.enums.push(i), 512 & s && c.constEnums.push(i), 128 & s && c.classes.push(i);
      }, p.checkLocalExport = function(i) {
        var s = i.name;
        if (!this.hasImport(s)) {
          for (var n = this.scopeStack.length - 1; n >= 0; n--) {
            var c = this.scopeStack[n];
            if (c.types.indexOf(s) > -1 || c.exportOnlyBindings.indexOf(s) > -1) return;
          }
          T.prototype.checkLocalExport.call(this, i);
        }
      }, Y = it, B = [{ key: "acornTypeScript", get: function() {
        return g;
      } }], (G = [{ key: "acornTypeScript", get: function() {
        return g;
      } }]) && De(Y.prototype, G), B && De(Y, B), Object.defineProperty(Y, "prototype", { writable: !1 }), it;
    })(d);
    return wi;
  };
}
const Is = ["createObject", "dropObject", "removeRecords", "upsertRecords"], Ns = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], Vt = Ni(Ei);
async function Ms() {
  try {
    console.info("🚀 Building configuration...");
    const t = JSON.parse(await M.readFile("package.json", "utf8")), e = JSON.parse(await M.readFile("config.json", "utf8"));
    t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), await M.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (t) {
    console.error("❌ Error building configuration.", t);
  }
}
async function Ds(t) {
  try {
    console.info(`🚀 Building public directory index for identifier '${t}'...`);
    const e = {};
    async function r(u, f) {
      console.info(`⚙️ Processing directory '${u}'...`);
      const d = [], v = u.slice(`public/${t}`.length);
      e[v === "" ? "/" : v] = d;
      for (const g of f) {
        const o = `${u}/${g}`;
        try {
          const w = await M.stat(o);
          if (w.isDirectory()) {
            const _ = await M.readdir(o), D = { childCount: _.length, name: g, typeId: "folder" };
            d.push(D), await r(o, _);
          } else {
            const _ = { id: Ii(), lastModifiedAt: w.mtimeMs, name: g, size: w.size, typeId: "object" };
            d.push(_);
          }
        } catch (w) {
          throw new Error(`Unable to get information for '${g}' in 'buildPublicDirectoryIndex'. ${String(w)}`);
        }
      }
      d.sort((g, o) => {
        const w = g.typeId.localeCompare(o.typeId);
        return w === 0 ? g.name.localeCompare(o.name) : w;
      });
    }
    const a = await M.readdir(`public/${t}`);
    await r(`public/${t}`, a), await M.writeFile(`./public/${t}Index.json`, JSON.stringify(e), "utf8"), console.info("✅ Public directory index built.");
  } catch (e) {
    console.error("❌ Error building public directory index.", e);
  }
}
async function Vs() {
  try {
    let t = function(R) {
      if (!(!R || typeof R != "object")) {
        switch (R.type) {
          case "FunctionDeclaration":
            R.id?.name && d.add(R.id.name);
            break;
          case "MethodDefinition":
            const j = R.key?.name, J = R.key?.type === "PrivateIdentifier";
            j && !J && !(j === "constructor") && d.add(j);
            break;
          case "VariableDeclarator":
            const X = R.id?.name, Tt = R.init;
            X && Tt && (Tt.type === "ArrowFunctionExpression" || Tt.type === "FunctionExpression") && d.add(X);
            break;
          case "PropertyDefinition":
            const Ht = R.key?.name, ae = R.key?.type === "PrivateIdentifier", ne = R.value?.type === "ArrowFunctionExpression" || R.value?.type === "FunctionExpression";
            Ht && !ae && ne && d.add(Ht);
            break;
        }
        for (const j in R) {
          if (j === "loc" || j === "range" || j === "start" || j === "end" || j === "comments") continue;
          const J = R[j];
          Array.isArray(J) ? J.forEach(t) : J && typeof J == "object" && typeof J.type == "string" && t(J);
        }
      }
    };
    console.info("🚀 Building connector configuration...");
    const e = JSON.parse(await M.readFile("package.json", "utf8")), r = JSON.parse(await M.readFile("config.json", "utf8")), a = await M.readFile("src/index.ts", "utf8"), f = K.extend(Es()).parse(a, { ecmaVersion: "latest", sourceType: "module", locations: !0 }), d = /* @__PURE__ */ new Set();
    t(f), console.log(`Extracted ${d.size} functions:`, Array.from(d));
    let v = !1, g = !1;
    const o = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, w = [...a.matchAll(o)].filter((R) => R[1] == null && R[2] !== "constructor"), _ = [];
    for (const R of w) {
      const j = R[2];
      _.push(j), Is.includes(j) && (v = !0), Ns.includes(j) && (g = !0);
    }
    _.length > 0 ? console.info(`ℹ️  Implements ${_.length} operations.`) : console.warn("⚠️  Implements no operations.");
    let D;
    g && v ? D = "bidirectional" : g ? D = "source" : v ? D = "destination" : D = "unknown", D === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports ${D} usage.`), e.name != null && (r.id = e.name), r.operations = _, r.usageId = D, e.version != null && (r.version = e.version), await M.writeFile("config.json", JSON.stringify(r, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (t) {
    console.error("❌ Error building connector configuration.", t);
  }
}
async function Fs() {
  try {
    console.info("🚀 Building context configuration...");
    const t = JSON.parse(await M.readFile("package.json", "utf8")), e = JSON.parse(await M.readFile("config.json", "utf8")), r = await M.readFile("src/index.ts", "utf8"), a = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, u = [...r.matchAll(a)].filter((f) => f[1] == null && f[2] !== "constructor").map((f) => f[2]);
    t.name != null && (e.id = t.name), e.operations = u, t.version != null && (e.version = t.version), await M.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function Bs() {
  try {
    console.info("🚀 Building presenter configuration...");
    const t = JSON.parse(await M.readFile("package.json", "utf8")), e = JSON.parse(await M.readFile("config.json", "utf8")), r = await M.readFile("src/index.ts", "utf8"), a = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, u = [...r.matchAll(a)].filter((f) => f[1] == null && f[2] !== "constructor").map((f) => f[2]);
    t.name != null && (e.id = t.name), e.operations = u, t.version != null && (e.version = t.version), await M.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function js(t = "./") {
  try {
    console.info("🚀 Bumping version...");
    const e = JSON.parse(await M.readFile(`${t}package.json`, "utf8"));
    if (e.version == null)
      e.version = "0.0.001", await M.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${e.version}.`);
    else {
      const r = e.version, a = e.version.split(".");
      e.version = `${a[0]}.${a[1]}.${Number(a[2]) + 1}`, await M.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${r} to ${e.version}.`);
    }
  } catch (e) {
    console.error("❌ Error bumping package version.", e);
  }
}
function Us(t) {
  console.error(`❌ ${t} script not implemented.`);
}
async function qs() {
  const t = "<!-- DEPENDENCY_LICENSES_START -->", e = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const r = (await M.readFile("./licenses.md", "utf8")).trim(), a = await M.readFile("./README.md", "utf8"), u = a.indexOf(t), f = a.indexOf(e);
    (u === -1 || f === -1) && (console.error("❌ Dependency license markers not found in readme file."), process.exit(1));
    const d = a.substring(0, u + t.length) + `
` + r + `
` + a.substring(f);
    await M.writeFile("README.md", d, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (r) {
    console.error("❌ Error updating readme file.", r), process.exit(1);
  }
}
async function Hs() {
  const t = "<!-- OWASP_BADGE_START -->", e = "<!-- OWASP_BADGE_END -->";
  try {
    const r = JSON.parse(await M.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), a = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const R of r.dependencies)
      if (R.vulnerabilities != null)
        for (const j of R.vulnerabilities) {
          const J = j.severity?.toLowerCase() ?? "unknown";
          J in a ? a[J]++ : a.unknown++;
        }
    const u = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, f = JSON.parse(await M.readFile("config.json", "utf8")), d = [];
    if (Object.values(a).reduce((R, j) => R + j, 0) === 0)
      console.info("✅ No vulnerabilities found."), d.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${f.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [R, j] of Object.entries(a)) {
        const J = u[R];
        if (console.warn(`⚠️  ${j} ${J.label} vulnerability(ies) found.`), j === 0) continue;
        const I = `https://img.shields.io/badge/OWASP-${j}%20${J.label}-${J.color}`;
        d.push(`[![OWASP](${I})](https://data-positioning.github.io/${f.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const g = await M.readFile("./README.md", "utf8"), o = g.indexOf(t), w = g.indexOf(e);
    (o === -1 || w === -1) && (console.error("❌ OWASP badge markers not found in README.md."), process.exit(1));
    const _ = d.join(" "), D = g.substring(0, o + t.length) + _ + g.substring(w);
    await M.writeFile("README.md", D, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (r) {
    console.error("❌ Error updating README with OWASP badges:", r), process.exit(1);
  }
}
async function zs() {
  try {
    console.info("🚀 Sending deployment notice...");
    const t = JSON.parse(await M.readFile("config.json", "utf8")), e = {
      body: JSON.stringify(t),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, r = await fetch(`https://api.datapos.app/states/${t.id}`, e);
    if (!r.ok) throw new Error(await r.text());
    console.info("✅ Deployment notice sent.");
  } catch (t) {
    console.error("❌ Error sending deployment notice.", t);
  }
}
async function Ws() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const t = JSON.parse(await M.readFile("package.json", "utf8"));
    await Vt("git add ."), await Vt(`git commit -m "v${t.version}"`), await Vt("git push origin main:main"), console.info(`✅ Synchronised version ${t.version} with GitHub.`);
  } catch (t) {
    console.error("❌ Error synchronising with GitHub.", t);
  }
}
async function Ks(t, e) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function r(u, f, d) {
      for (const v of d) {
        const g = `${u}/${v}`, o = `${f}/${v}`;
        if ((await M.stat(g)).isDirectory()) {
          const _ = await M.readdir(g);
          await r(g, o, _);
        } else {
          console.info(`⚙️ Uploading '${u}/${v}'...`);
          const _ = `wrangler r2 object put "datapos-sample-data-eu/${f}/${v}" --file="${u}/${v}" --jurisdiction=eu --remote`, D = await Vt(_);
          if (D.stderr) throw new Error(D.stderr);
        }
      }
    }
    const a = await M.readdir(`${t}/${e}/`);
    await r(`${t}/${e}`, e, a), console.info("✅ Directory uploaded to R2.");
  } catch (r) {
    console.error("❌ Error uploading directory to R2.", r);
  }
}
async function Js() {
  try {
    console.info("🚀 Uploading module configuration....");
    const t = JSON.parse(await M.readFile("config.json", "utf8")), e = t.id, r = {
      body: JSON.stringify(t),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, a = await fetch(`https://api.datapos.app/states/${e}`, r);
    if (!a.ok) throw new Error(await a.text());
    console.info("✅ Module configuration uploaded.");
  } catch (t) {
    console.error("❌ Error uploading module configuration.", t);
  }
}
async function Gs(t) {
  try {
    console.info("🚀 Uploading module to R2...");
    const r = `v${JSON.parse(await M.readFile("package.json", "utf8")).version}`;
    async function a(u, f = "") {
      const d = await M.readdir(u, { withFileTypes: !0 });
      for (const v of d) {
        const g = `${u}/${v.name}`, o = f ? `${f}/${v.name}` : v.name;
        if (!v.isDirectory()) {
          const w = `${t}_${r}/${o}`.replace(/\\/g, "/"), _ = v.name.endsWith(".js") ? "application/javascript" : v.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${o}' → '${w}'...`);
          const { stderr: D } = await Vt(`wrangler r2 object put "${w}" --file="${g}" --content-type ${_} --jurisdiction=eu --remote`);
          if (D) throw new Error(D);
        }
      }
    }
    await a("dist"), console.info("✅ Module uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading module to R2.", e);
  }
}
export {
  Ms as buildConfig,
  Vs as buildConnectorConfig,
  Fs as buildContextConfig,
  Bs as buildPresenterConfig,
  Ds as buildPublicDirectoryIndex,
  js as bumpVersion,
  Us as echoScriptNotImplemented,
  qs as insertLicensesIntoReadme,
  Hs as insertOWASPDependencyCheckBadgeIntoReadme,
  zs as sendDeploymentNotice,
  Ws as syncWithGitHub,
  Ks as uploadDirectoryToR2,
  Js as uploadModuleConfigToDO,
  Gs as uploadModuleToR2
};
