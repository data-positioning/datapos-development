import { exec as vs } from "node:child_process";
import { promises as F } from "node:fs";
import { nanoid as xs } from "nanoid";
import { promisify as gs } from "node:util";
var bs = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], ur = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], _s = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", cr = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Wt = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, Kt = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", ks = {
  5: Kt,
  "5module": Kt + " export import",
  6: Kt + " const class extends export import super"
}, Ss = /^in(stanceof)?$/, ws = new RegExp("[" + cr + "]"), Ts = new RegExp("[" + cr + _s + "]");
function ei(e, t) {
  for (var i = 65536, r = 0; r < t.length; r += 2) {
    if (i += t[r], i > e)
      return !1;
    if (i += t[r + 1], i >= e)
      return !0;
  }
  return !1;
}
function we(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && ws.test(String.fromCharCode(e)) : t === !1 ? !1 : ei(e, ur);
}
function Ae(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Ts.test(String.fromCharCode(e)) : t === !1 ? !1 : ei(e, ur) || ei(e, bs);
}
var z = function(t, i) {
  i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function xe(e, t) {
  return new z(e, { beforeExpr: !0, binop: t });
}
var ge = { beforeExpr: !0 }, le = { startsExpr: !0 }, Ke = {};
function $(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, Ke[e] = new z(e, t);
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
  comma: new z(",", ge),
  semi: new z(";", ge),
  colon: new z(":", ge),
  dot: new z("."),
  question: new z("?", ge),
  questionDot: new z("?."),
  arrow: new z("=>", ge),
  template: new z("template"),
  invalidTemplate: new z("invalidTemplate"),
  ellipsis: new z("...", ge),
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
  logicalOR: xe("||", 1),
  logicalAND: xe("&&", 2),
  bitwiseOR: xe("|", 3),
  bitwiseXOR: xe("^", 4),
  bitwiseAND: xe("&", 5),
  equality: xe("==/!=/===/!==", 6),
  relational: xe("</>/<=/>=", 7),
  bitShift: xe("<</>>/>>>", 8),
  plusMin: new z("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: xe("%", 10),
  star: xe("*", 10),
  slash: xe("/", 10),
  starstar: new z("**", { beforeExpr: !0 }),
  coalesce: xe("??", 1),
  // Keyword token types.
  _break: $("break"),
  _case: $("case", ge),
  _catch: $("catch"),
  _continue: $("continue"),
  _debugger: $("debugger"),
  _default: $("default", ge),
  _do: $("do", { isLoop: !0, beforeExpr: !0 }),
  _else: $("else", ge),
  _finally: $("finally"),
  _for: $("for", { isLoop: !0 }),
  _function: $("function", le),
  _if: $("if"),
  _return: $("return", ge),
  _switch: $("switch"),
  _throw: $("throw", ge),
  _try: $("try"),
  _var: $("var"),
  _const: $("const"),
  _while: $("while", { isLoop: !0 }),
  _with: $("with"),
  _new: $("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: $("this", le),
  _super: $("super", le),
  _class: $("class", le),
  _extends: $("extends", ge),
  _export: $("export"),
  _import: $("import", le),
  _null: $("null", le),
  _true: $("true", le),
  _false: $("false", le),
  _in: $("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: $("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: $("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: $("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: $("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, ce = /\r\n?|\n|\u2028|\u2029/, hr = new RegExp(ce.source, "g");
function je(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function pr(e, t, i) {
  i === void 0 && (i = e.length);
  for (var r = t; r < i; r++) {
    var n = e.charCodeAt(r);
    if (je(n))
      return r < i - 1 && n === 13 && e.charCodeAt(r + 1) === 10 ? r + 2 : r + 1;
  }
  return -1;
}
var ui = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, ae = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, lr = Object.prototype, Ps = lr.hasOwnProperty, Cs = lr.toString, Qe = Object.hasOwn || (function(e, t) {
  return Ps.call(e, t);
}), Ai = Array.isArray || (function(e) {
  return Cs.call(e) === "[object Array]";
}), Ei = /* @__PURE__ */ Object.create(null);
function Re(e) {
  return Ei[e] || (Ei[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function Ee(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var As = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Ge = function(t, i) {
  this.line = t, this.column = i;
};
Ge.prototype.offset = function(t) {
  return new Ge(this.line, this.column + t);
};
var ft = function(t, i, r) {
  this.start = i, this.end = r, t.sourceFile !== null && (this.source = t.sourceFile);
};
function ci(e, t) {
  for (var i = 1, r = 0; ; ) {
    var n = pr(e, r, t);
    if (n < 0)
      return new Ge(i, t - r);
    ++i, r = n;
  }
}
var Tt = {
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
function Es(e) {
  var t = {};
  for (var i in Tt)
    t[i] = e && Qe(e, i) ? e[i] : Tt[i];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!Ii && typeof console == "object" && console.warn && (Ii = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), Ai(t.onToken)) {
    var r = t.onToken;
    t.onToken = function(n) {
      return r.push(n);
    };
  }
  return Ai(t.onComment) && (t.onComment = Is(t, t.onComment)), t;
}
function Is(e, t) {
  return function(i, r, n, u, h, d) {
    var y = {
      type: i ? "Block" : "Line",
      value: r,
      start: n,
      end: u
    };
    e.locations && (y.loc = new ft(this, h, d)), e.ranges && (y.range = [n, u]), t.push(y);
  };
}
var ht = 1, Ye = 2, hi = 4, fr = 8, pi = 16, dr = 32, Dt = 64, mr = 128, $e = 256, dt = 512, Mt = ht | Ye | $e;
function li(e, t) {
  return Ye | (e ? hi : 0) | (t ? fr : 0);
}
var Pt = 0, fi = 1, Ne = 2, yr = 3, vr = 4, xr = 5, X = function(t, i, r) {
  this.options = t = Es(t), this.sourceFile = t.sourceFile, this.keywords = Re(ks[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var n = "";
  t.allowReserved !== !0 && (n = Wt[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (n += " await")), this.reservedWords = Re(n);
  var u = (n ? n + " " : "") + Wt.strict;
  this.reservedWordsStrict = Re(u), this.reservedWordsStrictBind = Re(u + " " + Wt.strictBind), this.input = String(i), this.containsEsc = !1, r ? (this.pos = r, this.lineStart = this.input.lastIndexOf(`
`, r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(ce).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = p.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(ht), this.regexpState = null, this.privateNameStack = [];
}, Te = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
X.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
Te.inFunction.get = function() {
  return (this.currentVarScope().flags & Ye) > 0;
};
Te.inGenerator.get = function() {
  return (this.currentVarScope().flags & fr) > 0;
};
Te.inAsync.get = function() {
  return (this.currentVarScope().flags & hi) > 0;
};
Te.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & ($e | dt))
      return !1;
    if (i & Ye)
      return (i & hi) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
Te.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags;
  return (t & Dt) > 0 || this.options.allowSuperOutsideMethod;
};
Te.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & mr) > 0;
};
Te.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Te.allowNewDotTarget.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & ($e | dt) || i & Ye && !(i & pi))
      return !0;
  }
  return !1;
};
Te.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & $e) > 0;
};
X.extend = function() {
  for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
  for (var r = this, n = 0; n < t.length; n++)
    r = t[n](r);
  return r;
};
X.parse = function(t, i) {
  return new this(i, t).parse();
};
X.parseExpressionAt = function(t, i, r) {
  var n = new this(r, t, i);
  return n.nextToken(), n.parseExpression();
};
X.tokenizer = function(t, i) {
  return new this(i, t);
};
Object.defineProperties(X.prototype, Te);
var he = X.prototype, Ns = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
he.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    ae.lastIndex = e, e += ae.exec(this.input)[0].length;
    var t = Ns.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      ae.lastIndex = e + t[0].length;
      var i = ae.exec(this.input), r = i.index + i[0].length, n = this.input.charAt(r);
      return n === ";" || n === "}" || ce.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(n) || n === "!" && this.input.charAt(r + 1) === "=");
    }
    e += t[0].length, ae.lastIndex = e, e += ae.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
he.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
he.isContextual = function(e) {
  return this.type === p.name && this.value === e && !this.containsEsc;
};
he.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
he.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
he.canInsertSemicolon = function() {
  return this.type === p.eof || this.type === p.braceR || ce.test(this.input.slice(this.lastTokEnd, this.start));
};
he.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
he.semicolon = function() {
  !this.eat(p.semi) && !this.insertSemicolon() && this.unexpected();
};
he.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
he.expect = function(e) {
  this.eat(e) || this.unexpected();
};
he.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var zt = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
he.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
he.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var i = e.shorthandAssign, r = e.doubleProto;
  if (!t)
    return i >= 0 || r >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property");
};
he.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
he.isSimpleAssignTarget = function(e) {
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
    for (var r = 0, n = Object.keys(this.undefinedExports); r < n.length; r += 1) {
      var u = n[r];
      this.raiseRecoverable(this.undefinedExports[u].start, "Export '" + u + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var di = { kind: "loop" }, Ls = { kind: "switch" };
E.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  ae.lastIndex = this.pos;
  var t = ae.exec(this.input), i = this.pos + t[0].length, r = this.input.charCodeAt(i);
  if (r === 91 || r === 92)
    return !0;
  if (e)
    return !1;
  if (r === 123 || r > 55295 && r < 56320)
    return !0;
  if (we(r, !0)) {
    for (var n = i + 1; Ae(r = this.input.charCodeAt(n), !0); )
      ++n;
    if (r === 92 || r > 55295 && r < 56320)
      return !0;
    var u = this.input.slice(i, n);
    if (!Ss.test(u))
      return !0;
  }
  return !1;
};
E.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  ae.lastIndex = this.pos;
  var e = ae.exec(this.input), t = this.pos + e[0].length, i;
  return !ce.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(Ae(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
};
E.isUsingKeyword = function(e, t) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using"))
    return !1;
  ae.lastIndex = this.pos;
  var i = ae.exec(this.input), r = this.pos + i[0].length;
  if (ce.test(this.input.slice(this.pos, r)))
    return !1;
  if (e) {
    var n = r + 5, u;
    if (this.input.slice(r, n) !== "using" || n === this.input.length || Ae(u = this.input.charCodeAt(n)) || u > 55295 && u < 56320)
      return !1;
    ae.lastIndex = n;
    var h = ae.exec(this.input);
    if (h && ce.test(this.input.slice(n, n + h[0].length)))
      return !1;
  }
  if (t) {
    var d = r + 2, y;
    if (this.input.slice(r, d) === "of" && (d === this.input.length || !Ae(y = this.input.charCodeAt(d)) && !(y > 55295 && y < 56320)))
      return !1;
  }
  var o = this.input.charCodeAt(r);
  return we(o, !0) || o === 92;
};
E.isAwaitUsing = function(e) {
  return this.isUsingKeyword(!0, e);
};
E.isUsing = function(e) {
  return this.isUsingKeyword(!1, e);
};
E.parseStatement = function(e, t, i) {
  var r = this.type, n = this.startNode(), u;
  switch (this.isLet(e) && (r = p._var, u = "let"), r) {
    case p._break:
    case p._continue:
      return this.parseBreakContinueStatement(n, r.keyword);
    case p._debugger:
      return this.parseDebuggerStatement(n);
    case p._do:
      return this.parseDoStatement(n);
    case p._for:
      return this.parseForStatement(n);
    case p._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(n, !1, !e);
    case p._class:
      return e && this.unexpected(), this.parseClass(n, !0);
    case p._if:
      return this.parseIfStatement(n);
    case p._return:
      return this.parseReturnStatement(n);
    case p._switch:
      return this.parseSwitchStatement(n);
    case p._throw:
      return this.parseThrowStatement(n);
    case p._try:
      return this.parseTryStatement(n);
    case p._const:
    case p._var:
      return u = u || this.value, e && u !== "var" && this.unexpected(), this.parseVarStatement(n, u);
    case p._while:
      return this.parseWhileStatement(n);
    case p._with:
      return this.parseWithStatement(n);
    case p.braceL:
      return this.parseBlock(!0, n);
    case p.semi:
      return this.parseEmptyStatement(n);
    case p._export:
    case p._import:
      if (this.options.ecmaVersion > 10 && r === p._import) {
        ae.lastIndex = this.pos;
        var h = ae.exec(this.input), d = this.pos + h[0].length, y = this.input.charCodeAt(d);
        if (y === 40 || y === 46)
          return this.parseExpressionStatement(n, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === p._import ? this.parseImport(n) : this.parseExport(n, i);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(n, !0, !e);
      var o = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (o)
        return t && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), o === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(n, !1, o), this.semicolon(), this.finishNode(n, "VariableDeclaration");
      var k = this.value, P = this.parseExpression();
      return r === p.name && P.type === "Identifier" && this.eat(p.colon) ? this.parseLabeledStatement(n, k, P, e) : this.parseExpressionStatement(n, P);
  }
};
E.parseBreakContinueStatement = function(e, t) {
  var i = t === "break";
  this.next(), this.eat(p.semi) || this.insertSemicolon() ? e.label = null : this.type !== p.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var r = 0; r < this.labels.length; ++r) {
    var n = this.labels[r];
    if ((e.label == null || n.name === e.label.name) && (n.kind != null && (i || n.kind === "loop") || e.label && i))
      break;
  }
  return r === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
};
E.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
E.parseDoStatement = function(e) {
  return this.next(), this.labels.push(di), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(p._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(p.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
E.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(di), this.enterScope(0), this.expect(p.parenL), this.type === p.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var i = this.isLet();
  if (this.type === p._var || this.type === p._const || i) {
    var r = this.startNode(), n = i ? "let" : this.value;
    return this.next(), this.parseVar(r, !0, n), this.finishNode(r, "VariableDeclaration"), this.parseForAfterInit(e, r, t);
  }
  var u = this.isContextual("let"), h = !1, d = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (d) {
    var y = this.startNode();
    return this.next(), d === "await using" && this.next(), this.parseVar(y, !0, d), this.finishNode(y, "VariableDeclaration"), this.parseForAfterInit(e, y, t);
  }
  var o = this.containsEsc, k = new zt(), P = this.start, R = t > -1 ? this.parseExprSubscripts(k, "await") : this.parseExpression(!0, k);
  return this.type === p._in || (h = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === p._in && this.unexpected(t), e.await = !0) : h && this.options.ecmaVersion >= 8 && (R.start === P && !o && R.type === "Identifier" && R.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), u && h && this.raise(R.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(R, !1, k), this.checkLValPattern(R), this.parseForIn(e, R)) : (this.checkExpressionErrors(k, !0), t > -1 && this.unexpected(t), this.parseFor(e, R));
};
E.parseForAfterInit = function(e, t, i) {
  return (this.type === p._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === p._in ? i > -1 && this.unexpected(i) : e.await = i > -1), this.parseForIn(e, t)) : (i > -1 && this.unexpected(i), this.parseFor(e, t));
};
E.parseFunctionStatement = function(e, t, i) {
  return this.next(), this.parseFunction(e, ot | (i ? 0 : ti), !1, t);
};
E.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(p._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
E.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(p.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
E.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(p.braceL), this.labels.push(Ls), this.enterScope(0);
  for (var t, i = !1; this.type !== p.braceR; )
    if (this.type === p._case || this.type === p._default) {
      var r = this.type === p._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(p.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
E.parseThrowStatement = function(e) {
  return this.next(), ce.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var Os = [];
E.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? dr : 0), this.checkLValPattern(e, t ? vr : Ne), this.expect(p.parenR), e;
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
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(di), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
E.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
E.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
E.parseLabeledStatement = function(e, t, i, r) {
  for (var n = 0, u = this.labels; n < u.length; n += 1) {
    var h = u[n];
    h.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
  }
  for (var d = this.type.isLoop ? "loop" : this.type === p._switch ? "switch" : null, y = this.labels.length - 1; y >= 0; y--) {
    var o = this.labels[y];
    if (o.statementStart === e.start)
      o.statementStart = this.start, o.kind = d;
    else
      break;
  }
  return this.labels.push({ name: t, kind: d, statementStart: this.start }), e.body = this.parseStatement(r ? r.indexOf("label") === -1 ? r + "label" : r : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
};
E.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
E.parseBlock = function(e, t, i) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(p.braceL), e && this.enterScope(0); this.type !== p.braceR; ) {
    var r = this.parseStatement(null);
    t.body.push(r);
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
E.parseVar = function(e, t, i, r) {
  for (e.declarations = [], e.kind = i; ; ) {
    var n = this.startNode();
    if (this.parseVarId(n, i), this.eat(p.eq) ? n.init = this.parseMaybeAssign(t) : !r && i === "const" && !(this.type === p._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !r && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== p._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration") : !r && n.id.type !== "Identifier" && !(t && (this.type === p._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : n.init = null, e.declarations.push(this.finishNode(n, "VariableDeclarator")), !this.eat(p.comma))
      break;
  }
  return e;
};
E.parseVarId = function(e, t) {
  e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? fi : Ne, !1);
};
var ot = 1, ti = 2, gr = 4;
E.parseFunction = function(e, t, i, r, n) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === p.star && t & ti && this.unexpected(), e.generator = this.eat(p.star)), this.options.ecmaVersion >= 8 && (e.async = !!r), t & ot && (e.id = t & gr && this.type !== p.name ? null : this.parseIdent(), e.id && !(t & ti) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? fi : Ne : yr));
  var u = this.yieldPos, h = this.awaitPos, d = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(li(e.async, e.generator)), t & ot || (e.id = this.type === p.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1, n), this.yieldPos = u, this.awaitPos = h, this.awaitIdentPos = d, this.finishNode(e, t & ot ? "FunctionDeclaration" : "FunctionExpression");
};
E.parseFunctionParams = function(e) {
  this.expect(p.parenL), e.params = this.parseBindingList(p.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
E.parseClass = function(e, t) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var r = this.enterClassBody(), n = this.startNode(), u = !1;
  for (n.body = [], this.expect(p.braceL); this.type !== p.braceR; ) {
    var h = this.parseClassElement(e.superClass !== null);
    h && (n.body.push(h), h.type === "MethodDefinition" && h.kind === "constructor" ? (u && this.raiseRecoverable(h.start, "Duplicate constructor in the same class"), u = !0) : h.key && h.key.type === "PrivateIdentifier" && Rs(r, h) && this.raiseRecoverable(h.key.start, "Identifier '#" + h.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), e.body = this.finishNode(n, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
E.parseClassElement = function(e) {
  if (this.eat(p.semi))
    return null;
  var t = this.options.ecmaVersion, i = this.startNode(), r = "", n = !1, u = !1, h = "method", d = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(p.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === p.star ? d = !0 : r = "static";
  }
  if (i.static = d, !r && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === p.star) && !this.canInsertSemicolon() ? u = !0 : r = "async"), !r && (t >= 9 || !u) && this.eat(p.star) && (n = !0), !r && !u && !n) {
    var y = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? h = y : r = y);
  }
  if (r ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = r, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === p.parenL || h !== "method" || n || u) {
    var o = !i.static && Ct(i, "constructor"), k = o && e;
    o && h !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = o ? "constructor" : h, this.parseClassMethod(i, n, u, k);
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
E.parseClassMethod = function(e, t, i, r) {
  var n = e.key;
  e.kind === "constructor" ? (t && this.raise(n.start, "Constructor can't be a generator"), i && this.raise(n.start, "Constructor can't be an async method")) : e.static && Ct(e, "prototype") && this.raise(n.start, "Classes may not have a static property named prototype");
  var u = e.value = this.parseMethod(t, i, r);
  return e.kind === "get" && u.params.length !== 0 && this.raiseRecoverable(u.start, "getter should have no params"), e.kind === "set" && u.params.length !== 1 && this.raiseRecoverable(u.start, "setter should have exactly one param"), e.kind === "set" && u.params[0].type === "RestElement" && this.raiseRecoverable(u.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
E.parseClassField = function(e) {
  return Ct(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Ct(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(p.eq) ? (this.enterScope(dt | Dt), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
E.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope($e | Dt); this.type !== p.braceR; ) {
    var i = this.parseStatement(null);
    e.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
E.parseClassId = function(e, t) {
  this.type === p.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, Ne, !1)) : (t === !0 && this.unexpected(), e.id = null);
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
    for (var r = this.privateNameStack.length, n = r === 0 ? null : this.privateNameStack[r - 1], u = 0; u < i.length; ++u) {
      var h = i[u];
      Qe(t, h.name) || (n ? n.used.push(h) : this.raiseRecoverable(h.start, "Private field '#" + h.name + "' must be declared in an enclosing class"));
    }
};
function Rs(e, t) {
  var i = t.key.name, r = e[i], n = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (n = (t.static ? "s" : "i") + t.kind), r === "iget" && n === "iset" || r === "iset" && n === "iget" || r === "sget" && n === "sset" || r === "sset" && n === "sget" ? (e[i] = "true", !1) : r ? !0 : (e[i] = n, !1);
}
function Ct(e, t) {
  var i = e.computed, r = e.key;
  return !i && (r.type === "Identifier" && r.name === t || r.type === "Literal" && r.value === t);
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
      for (var i = 0, r = e.specifiers; i < r.length; i += 1) {
        var n = r[i];
        this.checkUnreserved(n.local), this.checkLocalExport(n.local), n.local.type === "Literal" && this.raise(n.local.start, "A string literal cannot be used as an exported binding without `from`.");
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
    return this.next(), e && this.next(), this.parseFunction(t, ot | gr, !1, e);
  } else if (this.type === p._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var r = this.parseMaybeAssign();
    return this.semicolon(), r;
  }
};
E.checkExport = function(e, t, i) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), Qe(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = !0);
};
E.checkPatternExport = function(e, t) {
  var i = t.type;
  if (i === "Identifier")
    this.checkExport(e, t, t.start);
  else if (i === "ObjectPattern")
    for (var r = 0, n = t.properties; r < n.length; r += 1) {
      var u = n[r];
      this.checkPatternExport(e, u);
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
    for (var i = 0, r = t; i < r.length; i += 1) {
      var n = r[i];
      this.checkPatternExport(e, n.id);
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
  return this.next(), this.type === p.string ? (e.specifiers = Os, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === p.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
E.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, Ne), this.finishNode(e, "ImportSpecifier");
};
E.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, Ne), this.finishNode(e, "ImportDefaultSpecifier");
};
E.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, Ne), this.finishNode(e, "ImportNamespaceSpecifier");
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
    var r = this.parseImportAttribute(), n = r.key.type === "Identifier" ? r.key.name : r.key.value;
    Qe(t, n) && this.raiseRecoverable(r.key.start, "Duplicate attribute key '" + n + "'"), t[n] = !0, e.push(r);
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
    return As.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
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
var _e = X.prototype;
_e.toAssignable = function(e, t, i) {
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
        for (var r = 0, n = e.properties; r < n.length; r += 1) {
          var u = n[r];
          this.toAssignable(u, t), u.type === "RestElement" && (u.argument.type === "ArrayPattern" || u.argument.type === "ObjectPattern") && this.raise(u.argument.start, "Unexpected token");
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
_e.toAssignableList = function(e, t) {
  for (var i = e.length, r = 0; r < i; r++) {
    var n = e[r];
    n && this.toAssignable(n, t);
  }
  if (i) {
    var u = e[i - 1];
    this.options.ecmaVersion === 6 && t && u && u.type === "RestElement" && u.argument.type !== "Identifier" && this.unexpected(u.argument.start);
  }
  return e;
};
_e.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
_e.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== p.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
_e.parseBindingAtom = function() {
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
_e.parseBindingList = function(e, t, i, r) {
  for (var n = [], u = !0; !this.eat(e); )
    if (u ? u = !1 : this.expect(p.comma), t && this.type === p.comma)
      n.push(null);
    else {
      if (i && this.afterTrailingComma(e))
        break;
      if (this.type === p.ellipsis) {
        var h = this.parseRestBinding();
        this.parseBindingListItem(h), n.push(h), this.type === p.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else
        n.push(this.parseAssignableListItem(r));
    }
  return n;
};
_e.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
_e.parseBindingListItem = function(e) {
  return e;
};
_e.parseMaybeDefault = function(e, t, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(p.eq))
    return i;
  var r = this.startNodeAt(e, t);
  return r.left = i, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern");
};
_e.checkLValSimple = function(e, t, i) {
  t === void 0 && (t = Pt);
  var r = t !== Pt;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (r ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (t === Ne && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), i && (Qe(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = !0), t !== xr && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      r && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return r && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, i);
    default:
      this.raise(e.start, (r ? "Binding" : "Assigning to") + " rvalue");
  }
};
_e.checkLValPattern = function(e, t, i) {
  switch (t === void 0 && (t = Pt), e.type) {
    case "ObjectPattern":
      for (var r = 0, n = e.properties; r < n.length; r += 1) {
        var u = n[r];
        this.checkLValInnerPattern(u, t, i);
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
_e.checkLValInnerPattern = function(e, t, i) {
  switch (t === void 0 && (t = Pt), e.type) {
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
var ue = function(t, i, r, n, u) {
  this.token = t, this.isExpr = !!i, this.preserveSpace = !!r, this.override = n, this.generator = !!u;
}, H = {
  b_stat: new ue("{", !1),
  b_expr: new ue("{", !0),
  b_tmpl: new ue("${", !1),
  p_stat: new ue("(", !1),
  p_expr: new ue("(", !0),
  q_tmpl: new ue("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new ue("function", !1),
  f_expr: new ue("function", !0),
  f_expr_gen: new ue("function", !0, !1, null, !0),
  f_gen: new ue("function", !1, !1, null, !0)
}, et = X.prototype;
et.initialContext = function() {
  return [H.b_stat];
};
et.curContext = function() {
  return this.context[this.context.length - 1];
};
et.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === H.f_expr || t === H.f_stat ? !0 : e === p.colon && (t === H.b_stat || t === H.b_expr) ? !t.isExpr : e === p._return || e === p.name && this.exprAllowed ? ce.test(this.input.slice(this.lastTokEnd, this.start)) : e === p._else || e === p.semi || e === p.eof || e === p.parenR || e === p.arrow ? !0 : e === p.braceL ? t === H.b_stat : e === p._var || e === p._const || e === p.name ? !1 : !this.exprAllowed;
};
et.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
et.updateContext = function(e) {
  var t, i = this.type;
  i.keyword && e === p.dot ? this.exprAllowed = !1 : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
};
et.overrideContext = function(e) {
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
  e.beforeExpr && e !== p._else && !(e === p.semi && this.curContext() !== H.p_stat) && !(e === p._return && ce.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === p.colon || e === p.braceL) && this.curContext() === H.b_stat) ? this.context.push(H.f_expr) : this.context.push(H.f_stat), this.exprAllowed = !1;
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
    var r = e.key, n;
    switch (r.type) {
      case "Identifier":
        n = r.name;
        break;
      case "Literal":
        n = String(r.value);
        break;
      default:
        return;
    }
    var u = e.kind;
    if (this.options.ecmaVersion >= 6) {
      n === "__proto__" && u === "init" && (t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = r.start) : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    n = "$" + n;
    var h = t[n];
    if (h) {
      var d;
      u === "init" ? d = this.strict && h.init || h.get || h.set : d = h.init || h[u], d && this.raiseRecoverable(r.start, "Redefinition of property");
    } else
      h = t[n] = {
        init: !1,
        get: !1,
        set: !1
      };
    h[u] = !0;
  }
};
D.parseExpression = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseMaybeAssign(e, t);
  if (this.type === p.comma) {
    var u = this.startNodeAt(i, r);
    for (u.expressions = [n]; this.eat(p.comma); )
      u.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(u, "SequenceExpression");
  }
  return n;
};
D.parseMaybeAssign = function(e, t, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var r = !1, n = -1, u = -1, h = -1;
  t ? (n = t.parenthesizedAssign, u = t.trailingComma, h = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new zt(), r = !0);
  var d = this.start, y = this.startLoc;
  (this.type === p.parenL || this.type === p.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var o = this.parseMaybeConditional(e, t);
  if (i && (o = i.call(this, o, d, y)), this.type.isAssign) {
    var k = this.startNodeAt(d, y);
    return k.operator = this.value, this.type === p.eq && (o = this.toAssignable(o, !1, t)), r || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= o.start && (t.shorthandAssign = -1), this.type === p.eq ? this.checkLValPattern(o) : this.checkLValSimple(o), k.left = o, this.next(), k.right = this.parseMaybeAssign(e), h > -1 && (t.doubleProto = h), this.finishNode(k, "AssignmentExpression");
  } else
    r && this.checkExpressionErrors(t, !0);
  return n > -1 && (t.parenthesizedAssign = n), u > -1 && (t.trailingComma = u), o;
};
D.parseMaybeConditional = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return n;
  if (this.eat(p.question)) {
    var u = this.startNodeAt(i, r);
    return u.test = n, u.consequent = this.parseMaybeAssign(), this.expect(p.colon), u.alternate = this.parseMaybeAssign(e), this.finishNode(u, "ConditionalExpression");
  }
  return n;
};
D.parseExprOps = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || n.start === i && n.type === "ArrowFunctionExpression" ? n : this.parseExprOp(n, i, r, -1, e);
};
D.parseExprOp = function(e, t, i, r, n) {
  var u = this.type.binop;
  if (u != null && (!n || this.type !== p._in) && u > r) {
    var h = this.type === p.logicalOR || this.type === p.logicalAND, d = this.type === p.coalesce;
    d && (u = p.logicalAND.binop);
    var y = this.value;
    this.next();
    var o = this.start, k = this.startLoc, P = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, n), o, k, u, n), R = this.buildBinary(t, i, e, P, y, h || d);
    return (h && this.type === p.coalesce || d && (this.type === p.logicalOR || this.type === p.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(R, t, i, r, n);
  }
  return e;
};
D.buildBinary = function(e, t, i, r, n, u) {
  r.type === "PrivateIdentifier" && this.raise(r.start, "Private identifier can only be left side of binary expression");
  var h = this.startNodeAt(e, t);
  return h.left = i, h.operator = n, h.right = r, this.finishNode(h, u ? "LogicalExpression" : "BinaryExpression");
};
D.parseMaybeUnary = function(e, t, i, r) {
  var n = this.start, u = this.startLoc, h;
  if (this.isContextual("await") && this.canAwait)
    h = this.parseAwait(r), t = !0;
  else if (this.type.prefix) {
    var d = this.startNode(), y = this.type === p.incDec;
    d.operator = this.value, d.prefix = !0, this.next(), d.argument = this.parseMaybeUnary(null, !0, y, r), this.checkExpressionErrors(e, !0), y ? this.checkLValSimple(d.argument) : this.strict && d.operator === "delete" && br(d.argument) ? this.raiseRecoverable(d.start, "Deleting local variable in strict mode") : d.operator === "delete" && ii(d.argument) ? this.raiseRecoverable(d.start, "Private fields can not be deleted") : t = !0, h = this.finishNode(d, y ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === p.privateId)
    (r || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), h = this.parsePrivateIdent(), this.type !== p._in && this.unexpected();
  else {
    if (h = this.parseExprSubscripts(e, r), this.checkExpressionErrors(e))
      return h;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var o = this.startNodeAt(n, u);
      o.operator = this.value, o.prefix = !1, o.argument = h, this.checkLValSimple(h), this.next(), h = this.finishNode(o, "UpdateExpression");
    }
  }
  if (!i && this.eat(p.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(n, u, h, this.parseMaybeUnary(null, !1, !1, r), "**", !1);
  else
    return h;
};
function br(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && br(e.expression);
}
function ii(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && ii(e.expression) || e.type === "ParenthesizedExpression" && ii(e.expression);
}
D.parseExprSubscripts = function(e, t) {
  var i = this.start, r = this.startLoc, n = this.parseExprAtom(e, t);
  if (n.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return n;
  var u = this.parseSubscripts(n, i, r, !1, t);
  return e && u.type === "MemberExpression" && (e.parenthesizedAssign >= u.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= u.start && (e.parenthesizedBind = -1), e.trailingComma >= u.start && (e.trailingComma = -1)), u;
};
D.parseSubscripts = function(e, t, i, r, n) {
  for (var u = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, h = !1; ; ) {
    var d = this.parseSubscript(e, t, i, r, u, h, n);
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
D.parseSubscriptAsyncArrow = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, r);
};
D.parseSubscript = function(e, t, i, r, n, u, h) {
  var d = this.options.ecmaVersion >= 11, y = d && this.eat(p.questionDot);
  r && y && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var o = this.eat(p.bracketL);
  if (o || y && this.type !== p.parenL && this.type !== p.backQuote || this.eat(p.dot)) {
    var k = this.startNodeAt(t, i);
    k.object = e, o ? (k.property = this.parseExpression(), this.expect(p.bracketR)) : this.type === p.privateId && e.type !== "Super" ? k.property = this.parsePrivateIdent() : k.property = this.parseIdent(this.options.allowReserved !== "never"), k.computed = !!o, d && (k.optional = y), e = this.finishNode(k, "MemberExpression");
  } else if (!r && this.eat(p.parenL)) {
    var P = new zt(), R = this.yieldPos, V = this.awaitPos, Z = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var ne = this.parseExprList(p.parenR, this.options.ecmaVersion >= 8, !1, P);
    if (n && !y && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = R, this.awaitPos = V, this.awaitIdentPos = Z, this.parseSubscriptAsyncArrow(t, i, ne, h);
    this.checkExpressionErrors(P, !0), this.yieldPos = R || this.yieldPos, this.awaitPos = V || this.awaitPos, this.awaitIdentPos = Z || this.awaitIdentPos;
    var L = this.startNodeAt(t, i);
    L.callee = e, L.arguments = ne, d && (L.optional = y), e = this.finishNode(L, "CallExpression");
  } else if (this.type === p.backQuote) {
    (y || u) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var se = this.startNodeAt(t, i);
    se.tag = e, se.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(se, "TaggedTemplateExpression");
  }
  return e;
};
D.parseExprAtom = function(e, t, i) {
  this.type === p.slash && this.readRegexp();
  var r, n = this.potentialArrowAt === this.start;
  switch (this.type) {
    case p._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), r = this.startNode(), this.next(), this.type === p.parenL && !this.allowDirectSuper && this.raise(r.start, "super() call outside constructor of a subclass"), this.type !== p.dot && this.type !== p.bracketL && this.type !== p.parenL && this.unexpected(), this.finishNode(r, "Super");
    case p._this:
      return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
    case p.name:
      var u = this.start, h = this.startLoc, d = this.containsEsc, y = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !d && y.name === "async" && !this.canInsertSemicolon() && this.eat(p._function))
        return this.overrideContext(H.f_expr), this.parseFunction(this.startNodeAt(u, h), 0, !1, !0, t);
      if (n && !this.canInsertSemicolon()) {
        if (this.eat(p.arrow))
          return this.parseArrowExpression(this.startNodeAt(u, h), [y], !1, t);
        if (this.options.ecmaVersion >= 8 && y.name === "async" && this.type === p.name && !d && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return y = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(p.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(u, h), [y], !0, t);
      }
      return y;
    case p.regexp:
      var o = this.value;
      return r = this.parseLiteral(o.value), r.regex = { pattern: o.pattern, flags: o.flags }, r;
    case p.num:
    case p.string:
      return this.parseLiteral(this.value);
    case p._null:
    case p._true:
    case p._false:
      return r = this.startNode(), r.value = this.type === p._null ? null : this.type === p._true, r.raw = this.type.keyword, this.next(), this.finishNode(r, "Literal");
    case p.parenL:
      var k = this.start, P = this.parseParenAndDistinguishExpression(n, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(P) && (e.parenthesizedAssign = k), e.parenthesizedBind < 0 && (e.parenthesizedBind = k)), P;
    case p.bracketL:
      return r = this.startNode(), this.next(), r.elements = this.parseExprList(p.bracketR, !0, !0, e), this.finishNode(r, "ArrayExpression");
    case p.braceL:
      return this.overrideContext(H.b_expr), this.parseObj(!1, e);
    case p._function:
      return r = this.startNode(), this.next(), this.parseFunction(r, 0);
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
  var i = this.start, r = this.startLoc, n, u = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var h = this.start, d = this.startLoc, y = [], o = !0, k = !1, P = new zt(), R = this.yieldPos, V = this.awaitPos, Z;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== p.parenR; )
      if (o ? o = !1 : this.expect(p.comma), u && this.afterTrailingComma(p.parenR, !0)) {
        k = !0;
        break;
      } else if (this.type === p.ellipsis) {
        Z = this.start, y.push(this.parseParenItem(this.parseRestBinding())), this.type === p.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        y.push(this.parseMaybeAssign(!1, P, this.parseParenItem));
    var ne = this.lastTokEnd, L = this.lastTokEndLoc;
    if (this.expect(p.parenR), e && this.shouldParseArrow(y) && this.eat(p.arrow))
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = R, this.awaitPos = V, this.parseParenArrowList(i, r, y, t);
    (!y.length || k) && this.unexpected(this.lastTokStart), Z && this.unexpected(Z), this.checkExpressionErrors(P, !0), this.yieldPos = R || this.yieldPos, this.awaitPos = V || this.awaitPos, y.length > 1 ? (n = this.startNodeAt(h, d), n.expressions = y, this.finishNodeAt(n, "SequenceExpression", ne, L)) : n = y[0];
  } else
    n = this.parseParenExpression();
  if (this.options.preserveParens) {
    var se = this.startNodeAt(i, r);
    return se.expression = n, this.finishNode(se, "ParenthesizedExpression");
  } else
    return n;
};
D.parseParenItem = function(e) {
  return e;
};
D.parseParenArrowList = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, r);
};
var Ds = [];
D.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === p.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var i = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var r = this.start, n = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), r, n, !0, !1), this.eat(p.parenL) ? e.arguments = this.parseExprList(p.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Ds, this.finishNode(e, "NewExpression");
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
  var r = this.parseTemplateElement({ isTagged: t });
  for (i.quasis = [r]; !r.tail; )
    this.type === p.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(p.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(p.braceR), i.quasis.push(r = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
D.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === p.name || this.type === p.num || this.type === p.string || this.type === p.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === p.star) && !ce.test(this.input.slice(this.lastTokEnd, this.start));
};
D.parseObj = function(e, t) {
  var i = this.startNode(), r = !0, n = {};
  for (i.properties = [], this.next(); !this.eat(p.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(p.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(p.braceR))
      break;
    var u = this.parseProperty(e, t);
    e || this.checkPropClash(u, n, t), i.properties.push(u);
  }
  return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
};
D.parseProperty = function(e, t) {
  var i = this.startNode(), r, n, u, h;
  if (this.options.ecmaVersion >= 9 && this.eat(p.ellipsis))
    return e ? (i.argument = this.parseIdent(!1), this.type === p.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, t), this.type === p.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (e || t) && (u = this.start, h = this.startLoc), e || (r = this.eat(p.star)));
  var d = this.containsEsc;
  return this.parsePropertyName(i), !e && !d && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(i) ? (n = !0, r = this.options.ecmaVersion >= 9 && this.eat(p.star), this.parsePropertyName(i)) : n = !1, this.parsePropertyValue(i, e, r, n, u, h, t, d), this.finishNode(i, "Property");
};
D.parseGetterSetter = function(e) {
  var t = e.key.name;
  this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
  var i = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== i) {
    var r = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(r, "getter should have no params") : this.raiseRecoverable(r, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
D.parsePropertyValue = function(e, t, i, r, n, u, h, d) {
  (i || r) && this.type === p.colon && this.unexpected(), this.eat(p.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, h), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === p.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(i, r), e.kind = "init") : !t && !d && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== p.comma && this.type !== p.braceR && this.type !== p.eq ? ((i || r) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((i || r) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = n), t ? e.value = this.parseMaybeDefault(n, u, this.copyNode(e.key)) : this.type === p.eq && h ? (h.shorthandAssign < 0 && (h.shorthandAssign = this.start), e.value = this.parseMaybeDefault(n, u, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
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
  var r = this.startNode(), n = this.yieldPos, u = this.awaitPos, h = this.awaitIdentPos;
  return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = e), this.options.ecmaVersion >= 8 && (r.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(li(t, r.generator) | Dt | (i ? mr : 0)), this.expect(p.parenL), r.params = this.parseBindingList(p.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0, !1), this.yieldPos = n, this.awaitPos = u, this.awaitIdentPos = h, this.finishNode(r, "FunctionExpression");
};
D.parseArrowExpression = function(e, t, i, r) {
  var n = this.yieldPos, u = this.awaitPos, h = this.awaitIdentPos;
  return this.enterScope(li(i, !1) | pi), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, r), this.yieldPos = n, this.awaitPos = u, this.awaitIdentPos = h, this.finishNode(e, "ArrowFunctionExpression");
};
D.parseFunctionBody = function(e, t, i, r) {
  var n = t && this.type !== p.braceL, u = this.strict, h = !1;
  if (n)
    e.body = this.parseMaybeAssign(r), e.expression = !0, this.checkParams(e, !1);
  else {
    var d = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!u || d) && (h = this.strictDirective(this.end), h && d && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var y = this.labels;
    this.labels = [], h && (this.strict = !0), this.checkParams(e, !u && !h && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, xr), e.body = this.parseBlock(!1, void 0, h && !u), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = y;
  }
  this.exitScope();
};
D.isSimpleParamList = function(e) {
  for (var t = 0, i = e; t < i.length; t += 1) {
    var r = i[t];
    if (r.type !== "Identifier")
      return !1;
  }
  return !0;
};
D.checkParams = function(e, t) {
  for (var i = /* @__PURE__ */ Object.create(null), r = 0, n = e.params; r < n.length; r += 1) {
    var u = n[r];
    this.checkLValInnerPattern(u, fi, t ? null : i);
  }
};
D.parseExprList = function(e, t, i, r) {
  for (var n = [], u = !0; !this.eat(e); ) {
    if (u)
      u = !1;
    else if (this.expect(p.comma), t && this.afterTrailingComma(e))
      break;
    var h = void 0;
    i && this.type === p.comma ? h = null : this.type === p.ellipsis ? (h = this.parseSpread(r), r && this.type === p.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : h = this.parseMaybeAssign(!1, r), n.push(h);
  }
  return n;
};
D.checkUnreserved = function(e) {
  var t = e.start, i = e.end, r = e.name;
  if (this.inGenerator && r === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & Mt) && r === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (r === "arguments" || r === "await") && this.raise(t, "Cannot use " + r + " in class static initialization block"), this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
    var n = this.strict ? this.reservedWordsStrict : this.reservedWords;
    n.test(r) && (!this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"));
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
var At = X.prototype;
At.raise = function(e, t) {
  var i = ci(this.input, e);
  t += " (" + i.line + ":" + i.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
  var r = new SyntaxError(t);
  throw r.pos = e, r.loc = i, r.raisedAt = this.pos, r;
};
At.raiseRecoverable = At.raise;
At.curPosition = function() {
  if (this.options.locations)
    return new Ge(this.curLine, this.pos - this.lineStart);
};
var ze = X.prototype, Ms = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
ze.enterScope = function(e) {
  this.scopeStack.push(new Ms(e));
};
ze.exitScope = function() {
  this.scopeStack.pop();
};
ze.treatFunctionsAsVarInScope = function(e) {
  return e.flags & Ye || !this.inModule && e.flags & ht;
};
ze.declareName = function(e, t, i) {
  var r = !1;
  if (t === Ne) {
    var n = this.currentScope();
    r = n.lexical.indexOf(e) > -1 || n.functions.indexOf(e) > -1 || n.var.indexOf(e) > -1, n.lexical.push(e), this.inModule && n.flags & ht && delete this.undefinedExports[e];
  } else if (t === vr) {
    var u = this.currentScope();
    u.lexical.push(e);
  } else if (t === yr) {
    var h = this.currentScope();
    this.treatFunctionsAsVar ? r = h.lexical.indexOf(e) > -1 : r = h.lexical.indexOf(e) > -1 || h.var.indexOf(e) > -1, h.functions.push(e);
  } else
    for (var d = this.scopeStack.length - 1; d >= 0; --d) {
      var y = this.scopeStack[d];
      if (y.lexical.indexOf(e) > -1 && !(y.flags & dr && y.lexical[0] === e) || !this.treatFunctionsAsVarInScope(y) && y.functions.indexOf(e) > -1) {
        r = !0;
        break;
      }
      if (y.var.push(e), this.inModule && y.flags & ht && delete this.undefinedExports[e], y.flags & Mt)
        break;
    }
  r && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
};
ze.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
ze.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
ze.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (Mt | dt | $e))
      return t;
  }
};
ze.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (Mt | dt | $e) && !(t.flags & pi))
      return t;
  }
};
var mt = function(t, i, r) {
  this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new ft(t, r)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
}, yt = X.prototype;
yt.startNode = function() {
  return new mt(this, this.start, this.startLoc);
};
yt.startNodeAt = function(e, t) {
  return new mt(this, e, t);
};
function _r(e, t, i, r) {
  return e.type = t, e.end = i, this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = i), e;
}
yt.finishNode = function(e, t) {
  return _r.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
yt.finishNodeAt = function(e, t, i, r) {
  return _r.call(this, e, t, i, r);
};
yt.copyNode = function(e) {
  var t = new mt(this, e.start, this.startLoc);
  for (var i in e)
    t[i] = e[i];
  return t;
};
var zs = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", kr = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Sr = kr + " Extended_Pictographic", wr = Sr, Tr = wr + " EBase EComp EMod EPres ExtPict", Pr = Tr, Vs = Pr, Fs = {
  9: kr,
  10: Sr,
  11: wr,
  12: Tr,
  13: Pr,
  14: Vs
}, js = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", $s = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: js
}, Ni = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Cr = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Ar = Cr + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Er = Ar + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Ir = Er + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Nr = Ir + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Bs = Nr + " " + zs, Zs = {
  9: Cr,
  10: Ar,
  11: Er,
  12: Ir,
  13: Nr,
  14: Bs
}, Lr = {};
function Us(e) {
  var t = Lr[e] = {
    binary: Re(Fs[e] + " " + Ni),
    binaryOfStrings: Re($s[e]),
    nonBinary: {
      General_Category: Re(Ni),
      Script: Re(Zs[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var Gt = 0, Li = [9, 10, 11, 12, 13, 14]; Gt < Li.length; Gt += 1) {
  var qs = Li[Gt];
  Us(qs);
}
var C = X.prototype, Et = function(t, i) {
  this.parent = t, this.base = i || this;
};
Et.prototype.separatedFrom = function(t) {
  for (var i = this; i; i = i.parent)
    for (var r = t; r; r = r.parent)
      if (i.base === r.base && i !== r)
        return !0;
  return !1;
};
Et.prototype.sibling = function() {
  return new Et(this.parent, this.base);
};
var Pe = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Lr[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
Pe.prototype.reset = function(t, i, r) {
  var n = r.indexOf("v") !== -1, u = r.indexOf("u") !== -1;
  this.start = t | 0, this.source = i + "", this.flags = r, n && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = u && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = u && this.parser.options.ecmaVersion >= 9);
};
Pe.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
Pe.prototype.at = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, n = r.length;
  if (t >= n)
    return -1;
  var u = r.charCodeAt(t);
  if (!(i || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= n)
    return u;
  var h = r.charCodeAt(t + 1);
  return h >= 56320 && h <= 57343 ? (u << 10) + h - 56613888 : u;
};
Pe.prototype.nextIndex = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, n = r.length;
  if (t >= n)
    return n;
  var u = r.charCodeAt(t), h;
  return !(i || this.switchU) || u <= 55295 || u >= 57344 || t + 1 >= n || (h = r.charCodeAt(t + 1)) < 56320 || h > 57343 ? t + 1 : t + 2;
};
Pe.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
Pe.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
Pe.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
Pe.prototype.eat = function(t, i) {
  return i === void 0 && (i = !1), this.current(i) === t ? (this.advance(i), !0) : !1;
};
Pe.prototype.eatChars = function(t, i) {
  i === void 0 && (i = !1);
  for (var r = this.pos, n = 0, u = t; n < u.length; n += 1) {
    var h = u[n], d = this.at(r, i);
    if (d === -1 || d !== h)
      return !1;
    r = this.nextIndex(r, i);
  }
  return this.pos = r, !0;
};
C.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, i = e.flags, r = !1, n = !1, u = 0; u < i.length; u++) {
    var h = i.charAt(u);
    t.indexOf(h) === -1 && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(h, u + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), h === "u" && (r = !0), h === "v" && (n = !0);
  }
  this.options.ecmaVersion >= 15 && r && n && this.raise(e.start, "Invalid regular expression flag");
};
function Hs(e) {
  for (var t in e)
    return !0;
  return !1;
}
C.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Hs(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
};
C.regexp_pattern = function(e) {
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
    var r = i[t];
    e.groupNames[r] || e.raise("Invalid named capture referenced");
  }
};
C.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new Et(e.branchID, null)), this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
  t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
C.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
C.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
C.regexp_eatAssertion = function(e) {
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
C.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
C.regexp_eatQuantifierPrefix = function(e, t) {
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
C.regexp_eatBracedQuantifier = function(e, t) {
  var i = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var r = 0, n = -1;
    if (this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return n !== -1 && n < r && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = i;
  }
  return !1;
};
C.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
C.regexp_eatReverseSolidusAtomEscape = function(e) {
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
C.regexp_eatUncapturingGroup = function(e) {
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
        var i = this.regexp_eatModifiers(e), r = e.eat(
          45
          /* - */
        );
        if (i || r) {
          for (var n = 0; n < i.length; n++) {
            var u = i.charAt(n);
            i.indexOf(u, n + 1) > -1 && e.raise("Duplicate regular expression modifiers");
          }
          if (r) {
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
C.regexp_eatCapturingGroup = function(e) {
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
C.regexp_eatModifiers = function(e) {
  for (var t = "", i = 0; (i = e.current()) !== -1 && Ws(i); )
    t += Ee(i), e.advance();
  return t;
};
function Ws(e) {
  return e === 105 || e === 109 || e === 115;
}
C.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
C.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
C.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return Or(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Or(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
C.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !Or(i); )
    e.advance();
  return e.pos !== t;
};
C.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
C.regexp_groupSpecifier = function(e) {
  if (e.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(e) || e.raise("Invalid group");
    var t = this.options.ecmaVersion >= 16, i = e.groupNames[e.lastStringValue];
    if (i)
      if (t)
        for (var r = 0, n = i; r < n.length; r += 1) {
          var u = n[r];
          u.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
        }
      else
        e.raise("Duplicate capture group name");
    t ? (i || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = !0;
  }
};
C.regexp_eatGroupName = function(e) {
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
C.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += Ee(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Ee(e.lastIntValue);
    return !0;
  }
  return !1;
};
C.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), Ks(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function Ks(e) {
  return we(e, !0) || e === 36 || e === 95;
}
C.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), Gs(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function Gs(e) {
  return Ae(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
C.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
C.regexp_eatBackReference = function(e) {
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
C.regexp_eatKGroupName = function(e) {
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
C.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
C.regexp_eatCControlLetter = function(e) {
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
C.regexp_eatZero = function(e) {
  return e.current() === 48 && !Vt(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
C.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
C.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return Rr(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function Rr(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
C.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var i = e.pos, r = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var n = e.lastIntValue;
      if (r && n >= 55296 && n <= 56319) {
        var u = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var h = e.lastIntValue;
          if (h >= 56320 && h <= 57343)
            return e.lastIntValue = (n - 55296) * 1024 + (h - 56320) + 65536, !0;
        }
        e.pos = u, e.lastIntValue = n;
      }
      return !0;
    }
    if (r && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && Js(e.lastIntValue))
      return !0;
    r && e.raise("Invalid unicode escape"), e.pos = i;
  }
  return !1;
};
function Js(e) {
  return e >= 0 && e <= 1114111;
}
C.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
C.regexp_eatDecimalEscape = function(e) {
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
var Dr = 0, Ie = 1, be = 2;
C.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (Xs(t))
    return e.lastIntValue = -1, e.advance(), Ie;
  var i = !1;
  if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
    e.lastIntValue = -1, e.advance();
    var r;
    if (e.eat(
      123
      /* { */
    ) && (r = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(
      125
      /* } */
    ))
      return i && r === be && e.raise("Invalid property name"), r;
    e.raise("Invalid property name");
  }
  return Dr;
};
function Xs(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
C.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var i = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var r = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, i, r), Ie;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var n = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, n);
  }
  return Dr;
};
C.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
  Qe(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
};
C.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return Ie;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return be;
  e.raise("Invalid property name");
};
C.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Mr(t = e.current()); )
    e.lastStringValue += Ee(t), e.advance();
  return e.lastStringValue !== "";
};
function Mr(e) {
  return Rr(e) || e === 95;
}
C.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Qs(t = e.current()); )
    e.lastStringValue += Ee(t), e.advance();
  return e.lastStringValue !== "";
};
function Qs(e) {
  return Mr(e) || Vt(e);
}
C.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
C.regexp_eatCharacterClass = function(e) {
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
    ) || e.raise("Unterminated character class"), t && i === be && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
C.regexp_classContents = function(e) {
  return e.current() === 93 ? Ie : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), Ie);
};
C.regexp_nonEmptyClassRanges = function(e) {
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
C.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var i = e.current();
      (i === 99 || Fr(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var r = e.current();
  return r !== 93 ? (e.lastIntValue = r, e.advance(), !0) : !1;
};
C.regexp_eatClassEscape = function(e) {
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
C.regexp_classSetExpression = function(e) {
  var t = Ie, i;
  if (!this.regexp_eatClassSetRange(e)) if (i = this.regexp_eatClassSetOperand(e)) {
    i === be && (t = be);
    for (var r = e.pos; e.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
        i !== be && (t = Ie);
        continue;
      }
      e.raise("Invalid character in character class");
    }
    if (r !== e.pos)
      return t;
    for (; e.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
    if (r !== e.pos)
      return t;
  } else
    e.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(e)) {
      if (i = this.regexp_eatClassSetOperand(e), !i)
        return t;
      i === be && (t = be);
    }
};
C.regexp_eatClassSetRange = function(e) {
  var t = e.pos;
  if (this.regexp_eatClassSetCharacter(e)) {
    var i = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(e)) {
      var r = e.lastIntValue;
      return i !== -1 && r !== -1 && i > r && e.raise("Range out of order in character class"), !0;
    }
    e.pos = t;
  }
  return !1;
};
C.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? Ie : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
};
C.regexp_eatNestedClass = function(e) {
  var t = e.pos;
  if (e.eat(
    91
    /* [ */
  )) {
    var i = e.eat(
      94
      /* ^ */
    ), r = this.regexp_classContents(e);
    if (e.eat(
      93
      /* ] */
    ))
      return i && r === be && e.raise("Negated character class may contain strings"), r;
    e.pos = t;
  }
  if (e.eat(
    92
    /* \ */
  )) {
    var n = this.regexp_eatCharacterClassEscape(e);
    if (n)
      return n;
    e.pos = t;
  }
  return null;
};
C.regexp_eatClassStringDisjunction = function(e) {
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
C.regexp_classStringDisjunctionContents = function(e) {
  for (var t = this.regexp_classString(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_classString(e) === be && (t = be);
  return t;
};
C.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? Ie : be;
};
C.regexp_eatClassSetCharacter = function(e) {
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
  return i < 0 || i === e.lookahead() && Ys(i) || en(i) ? !1 : (e.advance(), e.lastIntValue = i, !0);
};
function Ys(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function en(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
C.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return tn(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function tn(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
C.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return Vt(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
C.regexp_eatHexEscapeSequence = function(e) {
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
C.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; Vt(i = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
  return e.pos !== t;
};
function Vt(e) {
  return e >= 48 && e <= 57;
}
C.regexp_eatHexDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; zr(i = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + Vr(i), e.advance();
  return e.pos !== t;
};
function zr(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Vr(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
C.regexp_eatLegacyOctalEscapeSequence = function(e) {
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
C.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return Fr(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function Fr(e) {
  return e >= 48 && e <= 55;
}
C.regexp_eatFixedHexDigits = function(e, t) {
  var i = e.pos;
  e.lastIntValue = 0;
  for (var r = 0; r < t; ++r) {
    var n = e.current();
    if (!zr(n))
      return e.pos = i, !1;
    e.lastIntValue = 16 * e.lastIntValue + Vr(n), e.advance();
  }
  return !0;
};
var Ft = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new ft(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, j = X.prototype;
j.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Ft(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
j.getToken = function() {
  return this.next(), new Ft(this);
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
  return we(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
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
    for (var r = void 0, n = t; (r = pr(this.input, n, this.pos)) > -1; )
      ++this.curLine, n = this.lineStart = r;
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
  for (var t = this.pos, i = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !je(r); )
    r = this.input.charCodeAt(++this.pos);
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
        if (e > 8 && e < 14 || e >= 5760 && ui.test(String.fromCharCode(e)))
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
  var t = this.input.charCodeAt(this.pos + 1), i = 1, r = e === 42 ? p.star : p.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, r = p.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(p.assign, i + 1) : this.finishOp(r, i);
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
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || ce.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(p.incDec, 2) : t === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.plusMin, 1);
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
        var r = this.input.charCodeAt(this.pos + 2);
        if (r === 61)
          return this.finishOp(p.assign, 3);
      }
      return this.finishOp(p.coalesce, 2);
    }
  }
  return this.finishOp(p.question, 1);
};
j.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), we(t, !0) || t === 92))
    return this.finishToken(p.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Ee(t) + "'");
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
  this.raise(this.pos, "Unexpected character '" + Ee(e) + "'");
};
j.finishOp = function(e, t) {
  var i = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, i);
};
j.readRegexp = function() {
  for (var e, t, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var r = this.input.charAt(this.pos);
    if (ce.test(r) && this.raise(i, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (r === "[")
        t = !0;
      else if (r === "]" && t)
        t = !1;
      else if (r === "/" && !t)
        break;
      e = r === "\\";
    }
    ++this.pos;
  }
  var n = this.input.slice(i, this.pos);
  ++this.pos;
  var u = this.pos, h = this.readWord1();
  this.containsEsc && this.unexpected(u);
  var d = this.regexpState || (this.regexpState = new Pe(this));
  d.reset(i, n, h), this.validateRegExpFlags(d), this.validateRegExpPattern(d);
  var y = null;
  try {
    y = new RegExp(n, h);
  } catch {
  }
  return this.finishToken(p.regexp, { pattern: n, flags: h, value: y });
};
j.readInt = function(e, t, i) {
  for (var r = this.options.ecmaVersion >= 12 && t === void 0, n = i && this.input.charCodeAt(this.pos) === 48, u = this.pos, h = 0, d = 0, y = 0, o = t ?? 1 / 0; y < o; ++y, ++this.pos) {
    var k = this.input.charCodeAt(this.pos), P = void 0;
    if (r && k === 95) {
      n && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), d === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), y === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), d = k;
      continue;
    }
    if (k >= 97 ? P = k - 97 + 10 : k >= 65 ? P = k - 65 + 10 : k >= 48 && k <= 57 ? P = k - 48 : P = 1 / 0, P >= e)
      break;
    d = k, h = h * e + P;
  }
  return r && d === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === u || t != null && this.pos - u !== t ? null : h;
};
function rn(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function jr(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
j.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var i = this.readInt(e);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = jr(this.input.slice(t, this.pos)), ++this.pos) : we(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(p.num, i);
};
j.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  i && this.strict && this.raise(t, "Invalid number");
  var r = this.input.charCodeAt(this.pos);
  if (!i && !e && this.options.ecmaVersion >= 11 && r === 110) {
    var n = jr(this.input.slice(t, this.pos));
    return ++this.pos, we(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(p.num, n);
  }
  i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1), r === 46 && !i && (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), (r === 69 || r === 101) && !i && (r = this.input.charCodeAt(++this.pos), (r === 43 || r === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), we(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var u = rn(this.input.slice(t, this.pos), i);
  return this.finishToken(p.num, u);
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
    var r = this.input.charCodeAt(this.pos);
    if (r === e)
      break;
    r === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), i = this.pos) : r === 8232 || r === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (je(r) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(i, this.pos++), this.finishToken(p.string, t);
};
var $r = {};
j.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === $r)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
j.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw $r;
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
    else if (je(i)) {
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
      return Ee(this.readCodePoint());
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
        var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], n = parseInt(r, 8);
        return n > 255 && (r = r.slice(0, -1), n = parseInt(r, 8)), this.pos += r.length - 1, t = this.input.charCodeAt(this.pos), (r !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - r.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(n);
      }
      return je(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
j.readHexChar = function(e) {
  var t = this.pos, i = this.readInt(16, e);
  return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
};
j.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, i = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var n = this.fullCharCodeAtPos();
    if (Ae(n, r))
      this.pos += n <= 65535 ? 1 : 2;
    else if (n === 92) {
      this.containsEsc = !0, e += this.input.slice(i, this.pos);
      var u = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var h = this.readCodePoint();
      (t ? we : Ae)(h, r) || this.invalidStringToken(u, "Invalid Unicode escape"), e += Ee(h), i = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(i, this.pos);
};
j.readWord = function() {
  var e = this.readWord1(), t = p.name;
  return this.keywords.test(e) && (t = Ke[e]), this.finishToken(t, e);
};
var Br = "8.15.0";
X.acorn = {
  Parser: X,
  version: Br,
  defaultOptions: Tt,
  Position: Ge,
  SourceLocation: ft,
  getLineInfo: ci,
  Node: mt,
  TokenType: z,
  tokTypes: p,
  keywordTypes: Ke,
  TokContext: ue,
  tokContexts: H,
  isIdentifierChar: Ae,
  isIdentifierStart: we,
  Token: Ft,
  isNewLine: je,
  lineBreak: ce,
  lineBreakG: hr,
  nonASCIIwhitespace: ui
};
function sn(e, t) {
  return X.parse(e, t);
}
function nn(e, t, i) {
  return X.parseExpressionAt(e, t, i);
}
function an(e, t) {
  return X.tokenizer(e, t);
}
const on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: mt,
  Parser: X,
  Position: Ge,
  SourceLocation: ft,
  TokContext: ue,
  Token: Ft,
  TokenType: z,
  defaultOptions: Tt,
  getLineInfo: ci,
  isIdentifierChar: Ae,
  isIdentifierStart: we,
  isNewLine: je,
  keywordTypes: Ke,
  lineBreak: ce,
  lineBreakG: hr,
  nonASCIIwhitespace: ui,
  parse: sn,
  parseExpressionAt: nn,
  tokContexts: H,
  tokTypes: p,
  tokenizer: an,
  version: Br
}, Symbol.toStringTag, { value: "Module" }));
function Oi(e, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, typeof (n = (function(u, h) {
      if (typeof u != "object" || u === null) return u;
      var d = u[Symbol.toPrimitive];
      if (d !== void 0) {
        var y = d.call(u, "string");
        if (typeof y != "object") return y;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(u);
    })(r.key)) == "symbol" ? n : String(n), r);
  }
  var n;
}
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, It.apply(this, arguments);
}
function bt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ri(e, t);
}
function ri(e, t) {
  return ri = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, r) {
    return i.__proto__ = r, i;
  }, ri(e, t);
}
function Ri(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
  return r;
}
function Di(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i) return (i = i.call(e)).next.bind(i);
  if (Array.isArray(e) || (i = (function(n, u) {
    if (n) {
      if (typeof n == "string") return Ri(n, u);
      var h = Object.prototype.toString.call(n).slice(8, -1);
      return h === "Object" && n.constructor && (h = n.constructor.name), h === "Map" || h === "Set" ? Array.from(n) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Ri(n, u) : void 0;
    }
  })(e)) || t) {
    i && (e = i);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var me = !0;
function ye(e, t) {
  return t === void 0 && (t = {}), new z("name", t);
}
var un = /* @__PURE__ */ new WeakMap();
function cn(e) {
  var t = un.get(e.Parser.acorn || e);
  if (!t) {
    var i = { assert: ye(0, { startsExpr: me }), asserts: ye(0, { startsExpr: me }), global: ye(0, { startsExpr: me }), keyof: ye(0, { startsExpr: me }), readonly: ye(0, { startsExpr: me }), unique: ye(0, { startsExpr: me }), abstract: ye(0, { startsExpr: me }), declare: ye(0, { startsExpr: me }), enum: ye(0, { startsExpr: me }), module: ye(0, { startsExpr: me }), namespace: ye(0, { startsExpr: me }), interface: ye(0, { startsExpr: me }), type: ye(0, { startsExpr: me }) }, r = { at: new z("@"), jsxName: new z("jsxName"), jsxText: new z("jsxText", { beforeExpr: !0 }), jsxTagStart: new z("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new z("jsxTagEnd") }, n = { tc_oTag: new ue("<tag", !1, !1), tc_cTag: new ue("</tag", !1, !1), tc_expr: new ue("<tag>...</tag>", !0, !0) }, u = new RegExp("^(?:" + Object.keys(i).join("|") + ")$");
    r.jsxTagStart.updateContext = function() {
      this.context.push(n.tc_expr), this.context.push(n.tc_oTag), this.exprAllowed = !1;
    }, r.jsxTagEnd.updateContext = function(h) {
      var d = this.context.pop();
      d === n.tc_oTag && h === p.slash || d === n.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === n.tc_expr) : this.exprAllowed = !0;
    }, t = { tokTypes: It({}, i, r), tokContexts: It({}, n), keywordsRegExp: u, tokenIsLiteralPropertyName: function(h) {
      return [p.name, p.string, p.num].concat(Object.values(Ke), Object.values(i)).includes(h);
    }, tokenIsKeywordOrIdentifier: function(h) {
      return [p.name].concat(Object.values(Ke), Object.values(i)).includes(h);
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
var nt = 1024, hn = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), Mi = new RegExp("(?=(" + hn.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), at = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function pn(e, t) {
  var i = t.key.name, r = e[i], n = "true";
  return t.type !== "MethodDefinition" || t.kind !== "get" && t.kind !== "set" || (n = (t.static ? "s" : "i") + t.kind), r === "iget" && n === "iset" || r === "iset" && n === "iget" || r === "sget" && n === "sset" || r === "sset" && n === "sget" ? (e[i] = "true", !1) : !!r || (e[i] = n, !1);
}
function zi(e, t) {
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
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, ln = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, fn = /^[\da-fA-F]+$/, dn = /^\d+$/;
function ut(e) {
  return e && (e.type === "JSXIdentifier" ? e.name : e.type === "JSXNamespacedName" ? e.namespace.name + ":" + e.name.name : e.type === "JSXMemberExpression" ? ut(e.object) + "." + ut(e.property) : void 0);
}
var Jt = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function Vi(e) {
  if (!e) throw new Error("Assert fail");
}
function mn(e) {
  return e === "accessor";
}
function yn(e) {
  return e === "in" || e === "out";
}
function Xt(e, t) {
  return 2 | (e ? 4 : 0) | (t ? 8 : 0);
}
function vn(e) {
  if (e.type !== "MemberExpression") return !1;
  var t = e.property;
  return (!e.computed || !(t.type !== "TemplateLiteral" || t.expressions.length > 0)) && Zr(e.object);
}
function Zr(e) {
  return e.type === "Identifier" || e.type === "MemberExpression" && !e.computed && Zr(e.object);
}
function Fi(e) {
  return e === "private" || e === "public" || e === "protected";
}
function xn(e) {
  var t = {}, i = t.dts, r = i !== void 0 && i, n = t.allowSatisfies, u = n !== void 0 && n;
  return function(h) {
    var d = h.acorn || on, y = cn(d), o = d.tokTypes, k = d.keywordTypes, P = d.isIdentifierStart, R = d.lineBreak, V = d.isNewLine, Z = d.tokContexts, ne = d.isIdentifierChar, L = y.tokTypes, se = y.tokContexts, it = y.keywordsRegExp, Se = y.tokenIsLiteralPropertyName, ve = y.tokenIsTemplate, Fe = y.tokenIsTSDeclarationStart, q = y.tokenIsIdentifier, vt = y.tokenIsKeywordOrIdentifier, ds = y.tokenIsTSTypeOperator;
    function ms(w, pe, oe) {
      oe === void 0 && (oe = w.length);
      for (var te = pe; te < oe; te++) {
        var B = w.charCodeAt(te);
        if (V(B)) return te < oe - 1 && B === 13 && w.charCodeAt(te + 1) === 10 ? te + 2 : te + 1;
      }
      return -1;
    }
    h = (function(w, pe, oe) {
      var te = oe.tokTypes, B = pe.tokTypes;
      return (function(f) {
        function s() {
          return f.apply(this, arguments) || this;
        }
        bt(s, f);
        var a = s.prototype;
        return a.takeDecorators = function(c) {
          var l = this.decoratorStack[this.decoratorStack.length - 1];
          l.length && (c.decorators = l, this.resetStartLocationFromNode(c, l[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, a.parseDecorators = function(c) {
          for (var l = this.decoratorStack[this.decoratorStack.length - 1]; this.match(B.at); ) {
            var m = this.parseDecorator();
            l.push(m);
          }
          this.match(te._export) ? c || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, a.parseDecorator = function() {
          var c = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var l, m = this.start, v = this.startLoc;
          if (this.match(te.parenL)) {
            var x = this.start, g = this.startLoc;
            if (this.next(), l = this.parseExpression(), this.expect(te.parenR), this.options.preserveParens) {
              var b = this.startNodeAt(x, g);
              b.expression = l, l = this.finishNode(b, "ParenthesizedExpression");
            }
          } else for (l = this.parseIdent(!1); this.eat(te.dot); ) {
            var S = this.startNodeAt(m, v);
            S.object = l, S.property = this.parseIdent(!0), S.computed = !1, l = this.finishNode(S, "MemberExpression");
          }
          return c.expression = this.parseMaybeDecoratorArguments(l), this.decoratorStack.pop(), this.finishNode(c, "Decorator");
        }, a.parseMaybeDecoratorArguments = function(c) {
          if (this.eat(te.parenL)) {
            var l = this.startNodeAtNode(c);
            return l.callee = c, l.arguments = this.parseExprList(te.parenR, !1), this.finishNode(l, "CallExpression");
          }
          return c;
        }, s;
      })(w);
    })(h, y, d), h = (function(w, pe, oe, te) {
      var B = w.tokTypes, f = pe.tokTypes, s = w.isNewLine, a = w.isIdentifierChar, c = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(l) {
        function m() {
          return l.apply(this, arguments) || this;
        }
        bt(m, l);
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
                s(b) ? (x += this.input.slice(g, this.pos), x += this.jsx_readNewLine(!0), g = this.pos) : ++this.pos;
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
            var S = this.input.charCodeAt(this.pos);
            if (S === x) break;
            S === 38 ? (g += this.input.slice(b, this.pos), g += this.jsx_readEntity(), b = this.pos) : s(S) ? (g += this.input.slice(b, this.pos), g += this.jsx_readNewLine(!1), b = this.pos) : ++this.pos;
          }
          return g += this.input.slice(b, this.pos++), this.finishToken(B.string, g);
        }, v.jsx_readEntity = function() {
          var x, g = "", b = 0, S = this.input[this.pos];
          S !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
          for (var N = ++this.pos; this.pos < this.input.length && b++ < 10; ) {
            if ((S = this.input[this.pos++]) === ";") {
              g[0] === "#" ? g[1] === "x" ? (g = g.substr(2), fn.test(g) && (x = String.fromCharCode(parseInt(g, 16)))) : (g = g.substr(1), dn.test(g) && (x = String.fromCharCode(parseInt(g, 10)))) : x = ln[g];
              break;
            }
            g += S;
          }
          return x || (this.pos = N, "&");
        }, v.jsx_readWord = function() {
          var x, g = this.pos;
          do
            x = this.input.charCodeAt(++this.pos);
          while (a(x) || x === 45);
          return this.finishToken(f.jsxName, this.input.slice(g, this.pos));
        }, v.jsx_parseIdentifier = function() {
          var x = this.startNode();
          return this.type === f.jsxName ? x.name = this.value : this.type.keyword ? x.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(x, "JSXIdentifier");
        }, v.jsx_parseNamespacedName = function() {
          var x = this.start, g = this.startLoc, b = this.jsx_parseIdentifier();
          if (!c.allowNamespaces || !this.eat(B.colon)) return b;
          var S = this.startNodeAt(x, g);
          return S.namespace = b, S.name = this.jsx_parseIdentifier(), this.finishNode(S, "JSXNamespacedName");
        }, v.jsx_parseElementName = function() {
          if (this.type === f.jsxTagEnd) return "";
          var x = this.start, g = this.startLoc, b = this.jsx_parseNamespacedName();
          for (this.type !== B.dot || b.type !== "JSXNamespacedName" || c.allowNamespacedObjects || this.unexpected(); this.eat(B.dot); ) {
            var S = this.startNodeAt(x, g);
            S.object = b, S.property = this.jsx_parseIdentifier(), b = this.finishNode(S, "JSXMemberExpression");
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
          var S = this.jsx_parseElementName();
          for (S && (b.name = S); this.type !== B.slash && this.type !== f.jsxTagEnd; ) b.attributes.push(this.jsx_parseAttribute());
          return b.selfClosing = this.eat(B.slash), this.expect(f.jsxTagEnd), this.finishNode(b, S ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, v.jsx_parseClosingElementAt = function(x, g) {
          var b = this.startNodeAt(x, g), S = this.jsx_parseElementName();
          return S && (b.name = S), this.expect(f.jsxTagEnd), this.finishNode(b, S ? "JSXClosingElement" : "JSXClosingFragment");
        }, v.jsx_parseElementAt = function(x, g) {
          var b = this.startNodeAt(x, g), S = [], N = this.jsx_parseOpeningElementAt(x, g), M = null;
          if (!N.selfClosing) {
            e: for (; ; ) switch (this.type) {
              case f.jsxTagStart:
                if (x = this.start, g = this.startLoc, this.next(), this.eat(B.slash)) {
                  M = this.jsx_parseClosingElementAt(x, g);
                  break e;
                }
                S.push(this.jsx_parseElementAt(x, g));
                break;
              case f.jsxText:
                S.push(this.parseExprAtom());
                break;
              case B.braceL:
                S.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            ut(M.name) !== ut(N.name) && this.raise(M.start, "Expected corresponding JSX closing tag for <" + ut(N.name) + ">");
          }
          var A = N.name ? "Element" : "Fragment";
          return b["opening" + A] = N, b["closing" + A] = M, b.children = S, this.type === B.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(b, "JSX" + A);
        }, v.jsx_parseText = function() {
          var x = this.parseLiteral(this.value);
          return x.type = "JSXText", x;
        }, v.jsx_parseElement = function() {
          var x = this.start, g = this.startLoc;
          return this.next(), this.jsx_parseElementAt(x, g);
        }, m;
      })(oe);
    })(d, y, h), h = (function(w, pe, oe) {
      var te = pe.tokTypes, B = oe.tokTypes;
      return (function(f) {
        function s() {
          return f.apply(this, arguments) || this;
        }
        bt(s, f);
        var a = s.prototype;
        return a.parseMaybeImportAttributes = function(c) {
          if (this.type === B._with || this.type === te.assert) {
            this.next();
            var l = this.parseImportAttributes();
            l && (c.attributes = l);
          }
        }, a.parseImportAttributes = function() {
          this.expect(B.braceL);
          var c = this.parseWithEntries();
          return this.expect(B.braceR), c;
        }, a.parseWithEntries = function() {
          var c = [], l = /* @__PURE__ */ new Set();
          do {
            if (this.type === B.braceR) break;
            var m, v = this.startNode();
            m = this.type === B.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), v.key = m, l.has(v.key.name) && this.raise(this.pos, "Duplicated key in attributes"), l.add(v.key.name), this.type !== B.string && this.raise(this.pos, "Only string is supported as an attribute value"), v.value = this.parseLiteral(this.value), c.push(this.finishNode(v, "ImportAttribute"));
          } while (this.eat(B.comma));
          return c;
        }, s;
      })(w);
    })(h, y, d);
    var ys = /* @__PURE__ */ (function(w) {
      function pe(s, a, c) {
        var l;
        return (l = w.call(this, s, a, c) || this).preValue = null, l.preToken = null, l.isLookahead = !1, l.isAmbientContext = !1, l.inAbstractClass = !1, l.inType = !1, l.inDisallowConditionalTypesContext = !1, l.maybeInArrowParameters = !1, l.shouldParseArrowReturnType = void 0, l.shouldParseAsyncArrowReturnType = void 0, l.decoratorStack = [[]], l.importsStack = [[]], l.importOrExportOuterKind = void 0, l.tsParseConstModifier = l.tsParseModifiers.bind((function(m) {
          if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return m;
        })(l), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: I.InvalidModifierOnTypeParameterPositions }), l;
      }
      bt(pe, w);
      var oe, te, B, f = pe.prototype;
      return f.getTokenFromCodeInType = function(s) {
        return s === 62 || s === 60 ? this.finishOp(o.relational, 1) : w.prototype.getTokenFromCode.call(this, s);
      }, f.readToken = function(s) {
        if (!this.inType) {
          var a = this.curContext();
          if (a === se.tc_expr) return this.jsx_readToken();
          if (a === se.tc_oTag || a === se.tc_cTag) {
            if (P(s)) return this.jsx_readWord();
            if (s == 62) return ++this.pos, this.finishToken(L.jsxTagEnd);
            if ((s === 34 || s === 39) && a == se.tc_oTag) return this.jsx_readString(s);
          }
          if (s === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(L.jsxTagStart);
        }
        return w.prototype.readToken.call(this, s);
      }, f.getTokenFromCode = function(s) {
        return this.inType ? this.getTokenFromCodeInType(s) : s === 64 ? (++this.pos, this.finishToken(L.at)) : w.prototype.getTokenFromCode.call(this, s);
      }, f.isAbstractClass = function() {
        return this.ts_isContextual(L.abstract) && this.lookahead().type === o._class;
      }, f.finishNode = function(s, a) {
        return s.type !== "" && s.end !== 0 ? s : w.prototype.finishNode.call(this, s, a);
      }, f.tryParse = function(s, a) {
        a === void 0 && (a = this.cloneCurLookaheadState());
        var c = { node: null };
        try {
          return { node: s(function(m) {
            throw m === void 0 && (m = null), c.node = m, c;
          }), error: null, thrown: !1, aborted: !1, failState: null };
        } catch (m) {
          var l = this.getCurLookaheadState();
          if (this.setLookaheadState(a), m instanceof SyntaxError) return { node: null, error: m, thrown: !0, aborted: !1, failState: l };
          if (m === c) return { node: c.node, error: null, thrown: !1, aborted: !0, failState: l };
          throw m;
        }
      }, f.setOptionalParametersError = function(s, a) {
        var c;
        s.optionalParametersLoc = (c = a?.loc) != null ? c : this.startLoc;
      }, f.reScan_lt_gt = function() {
        this.type === o.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, f.reScan_lt = function() {
        var s = this.type;
        return s === o.bitShift ? (this.pos -= 2, this.finishOp(o.relational, 1), o.relational) : s;
      }, f.resetEndLocation = function(s, a) {
        a === void 0 && (a = this.lastTokEndLoc), s.end = a.column, s.loc.end = a, this.options.ranges && (s.range[1] = a.column);
      }, f.startNodeAtNode = function(s) {
        return w.prototype.startNodeAt.call(this, s.start, s.loc.start);
      }, f.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, f.tsHasSomeModifiers = function(s, a) {
        return a.some(function(c) {
          return Fi(c) ? s.accessibility === c : !!s[c];
        });
      }, f.tsIsStartOfStaticBlocks = function() {
        return this.isContextual("static") && this.lookaheadCharCode() === 123;
      }, f.tsCheckForInvalidTypeCasts = function(s) {
        var a = this;
        s.forEach(function(c) {
          c?.type === "TSTypeCastExpression" && a.raise(c.typeAnnotation.start, I.UnexpectedTypeAnnotation);
        });
      }, f.atPossibleAsyncArrow = function(s) {
        return s.type === "Identifier" && s.name === "async" && this.lastTokEndLoc.column === s.end && !this.canInsertSemicolon() && s.end - s.start == 5 && s.start === this.potentialArrowAt;
      }, f.tsIsIdentifier = function() {
        return q(this.type);
      }, f.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeOrTypePredicateAnnotation(o.colon) : void 0;
      }, f.tsTryParseGenericAsyncArrowFunction = function(s, a, c) {
        var l = this;
        if (this.tsMatchLeftRelational()) {
          var m = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var v = this.tsTryParseAndCatch(function() {
            var x = l.startNodeAt(s, a);
            return x.typeParameters = l.tsParseTypeParameters(), w.prototype.parseFunctionParams.call(l, x), x.returnType = l.tsTryParseTypeOrTypePredicateAnnotation(), l.expect(o.arrow), x;
          });
          if (this.maybeInArrowParameters = m, v) return w.prototype.parseArrowExpression.call(this, v, null, !0, c);
        }
      }, f.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === o.relational) return this.tsParseTypeArguments();
      }, f.tsInNoContext = function(s) {
        var a = this.context;
        this.context = [a[0]];
        try {
          return s();
        } finally {
          this.context = a;
        }
      }, f.tsTryParseTypeAnnotation = function() {
        return this.match(o.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, f.isUnparsedContextual = function(s, a) {
        var c = s + a.length;
        if (this.input.slice(s, c) === a) {
          var l = this.input.charCodeAt(c);
          return !(ne(l) || (64512 & l) == 55296);
        }
        return !1;
      }, f.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(L.abstract) && this.lookahead().type === o._new;
      }, f.nextTokenStartSince = function(s) {
        return Jt.lastIndex = s, Jt.test(this.input) ? Jt.lastIndex : s;
      }, f.lookaheadCharCode = function() {
        return this.input.charCodeAt(this.nextTokenStart());
      }, f.compareLookaheadState = function(s, a) {
        for (var c = 0, l = Object.keys(s); c < l.length; c++) {
          var m = l[c];
          if (s[m] !== a[m]) return !1;
        }
        return !0;
      }, f.createLookaheadState = function() {
        this.value = null, this.context = [this.curContext()];
      }, f.getCurLookaheadState = function() {
        return { endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context, startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, f.cloneCurLookaheadState = function() {
        return { pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context && this.context.slice(), startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, f.setLookaheadState = function(s) {
        this.pos = s.pos, this.value = s.value, this.endLoc = s.endLoc, this.lastTokEnd = s.lastTokEnd, this.lastTokStart = s.lastTokStart, this.lastTokStartLoc = s.lastTokStartLoc, this.type = s.type, this.start = s.start, this.end = s.end, this.context = s.context, this.startLoc = s.startLoc, this.lastTokEndLoc = s.lastTokEndLoc, this.curLine = s.curLine, this.lineStart = s.lineStart, this.curPosition = s.curPosition, this.containsEsc = s.containsEsc;
      }, f.tsLookAhead = function(s) {
        var a = this.getCurLookaheadState(), c = s();
        return this.setLookaheadState(a), c;
      }, f.lookahead = function(s) {
        var a = this.getCurLookaheadState();
        if (this.createLookaheadState(), this.isLookahead = !0, s !== void 0) for (var c = 0; c < s; c++) this.nextToken();
        else this.nextToken();
        this.isLookahead = !1;
        var l = this.getCurLookaheadState();
        return this.setLookaheadState(a), l;
      }, f.readWord = function() {
        var s = this.readWord1(), a = o.name;
        return this.keywords.test(s) ? a = k[s] : new RegExp(it).test(s) && (a = L[s]), this.finishToken(a, s);
      }, f.skipBlockComment = function() {
        var s;
        this.isLookahead || (s = this.options.onComment && this.curPosition());
        var a = this.pos, c = this.input.indexOf("*/", this.pos += 2);
        if (c === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = c + 2, this.options.locations) for (var l, m = a; (l = ms(this.input, m, this.pos)) > -1; ) ++this.curLine, m = this.lineStart = l;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(a + 2, c), a, this.pos, s, this.curPosition());
      }, f.skipLineComment = function(s) {
        var a, c = this.pos;
        this.isLookahead || (a = this.options.onComment && this.curPosition());
        for (var l = this.input.charCodeAt(this.pos += s); this.pos < this.input.length && !V(l); ) l = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(c + s, this.pos), c, this.pos, a, this.curPosition());
      }, f.finishToken = function(s, a) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var c = this.type;
        this.type = s, this.value = a, this.isLookahead || this.updateContext(c);
      }, f.resetStartLocation = function(s, a, c) {
        s.start = a, s.loc.start = c, this.options.ranges && (s.range[0] = a);
      }, f.isLineTerminator = function() {
        return this.eat(o.semi) || w.prototype.canInsertSemicolon.call(this);
      }, f.hasFollowingLineBreak = function() {
        return Mi.lastIndex = this.end, Mi.test(this.input);
      }, f.addExtra = function(s, a, c, l) {
        if (l === void 0 && (l = !0), s) {
          var m = s.extra = s.extra || {};
          l ? m[a] = c : Object.defineProperty(m, a, { enumerable: l, value: c });
        }
      }, f.isLiteralPropertyName = function() {
        return Se(this.type);
      }, f.hasPrecedingLineBreak = function() {
        return R.test(this.input.slice(this.lastTokEndLoc.index, this.start));
      }, f.createIdentifier = function(s, a) {
        return s.name = a, this.finishNode(s, "Identifier");
      }, f.resetStartLocationFromNode = function(s, a) {
        this.resetStartLocation(s, a.start, a.loc.start);
      }, f.isThisParam = function(s) {
        return s.type === "Identifier" && s.name === "this";
      }, f.isLookaheadContextual = function(s) {
        var a = this.nextTokenStart();
        return this.isUnparsedContextual(a, s);
      }, f.ts_type_isContextual = function(s, a) {
        return s === a && !this.containsEsc;
      }, f.ts_isContextual = function(s) {
        return this.type === s && !this.containsEsc;
      }, f.ts_isContextualWithState = function(s, a) {
        return s.type === a && !s.containsEsc;
      }, f.isContextualWithState = function(s, a) {
        return a.type === o.name && a.value === s && !a.containsEsc;
      }, f.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(o.plusMin) ? this.ts_isContextual(L.readonly) : (this.ts_isContextual(L.readonly) && this.next(), !!this.match(o.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(o._in))));
      }, f.tsInDisallowConditionalTypesContext = function(s) {
        var a = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return s();
        } finally {
          this.inDisallowConditionalTypesContext = a;
        }
      }, f.tsTryParseType = function() {
        return this.tsEatThenParseType(o.colon);
      }, f.match = function(s) {
        return this.type === s;
      }, f.matchJsx = function(s) {
        return this.type === y.tokTypes[s];
      }, f.ts_eatWithState = function(s, a, c) {
        if (s === c.type) {
          for (var l = 0; l < a; l++) this.next();
          return !0;
        }
        return !1;
      }, f.ts_eatContextualWithState = function(s, a, c) {
        if (it.test(s)) {
          if (this.ts_isContextualWithState(c, L[s])) {
            for (var l = 0; l < a; l++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(s, c)) return !1;
        for (var m = 0; m < a; m++) this.next();
        return !0;
      }, f.canHaveLeadingDecorator = function() {
        return this.match(o._class);
      }, f.eatContextual = function(s) {
        return it.test(s) ? !!this.ts_isContextual(L[s]) && (this.next(), !0) : w.prototype.eatContextual.call(this, s);
      }, f.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, f.tsParseExternalModuleReference = function() {
        var s = this.startNode();
        return this.expectContextual("require"), this.expect(o.parenL), this.match(o.string) || this.unexpected(), s.expression = this.parseExprAtom(), this.expect(o.parenR), this.finishNode(s, "TSExternalModuleReference");
      }, f.tsParseEntityName = function(s) {
        s === void 0 && (s = !0);
        for (var a = this.parseIdent(s); this.eat(o.dot); ) {
          var c = this.startNodeAtNode(a);
          c.left = a, c.right = this.parseIdent(s), a = this.finishNode(c, "TSQualifiedName");
        }
        return a;
      }, f.tsParseEnumMember = function() {
        var s = this.startNode();
        return s.id = this.match(o.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(o.eq) && (s.initializer = this.parseMaybeAssign()), this.finishNode(s, "TSEnumMember");
      }, f.tsParseEnumDeclaration = function(s, a) {
        return a === void 0 && (a = {}), a.const && (s.const = !0), a.declare && (s.declare = !0), this.expectContextual("enum"), s.id = this.parseIdent(), this.checkLValSimple(s.id), this.expect(o.braceL), s.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(o.braceR), this.finishNode(s, "TSEnumDeclaration");
      }, f.tsParseModuleBlock = function() {
        var s = this.startNode();
        for (w.prototype.enterScope.call(this, 512), this.expect(o.braceL), s.body = []; this.type !== o.braceR; ) {
          var a = this.parseStatement(null, !0);
          s.body.push(a);
        }
        return this.next(), w.prototype.exitScope.call(this), this.finishNode(s, "TSModuleBlock");
      }, f.tsParseAmbientExternalModuleDeclaration = function(s) {
        return this.ts_isContextual(L.global) ? (s.global = !0, s.id = this.parseIdent()) : this.match(o.string) ? s.id = this.parseLiteral(this.value) : this.unexpected(), this.match(o.braceL) ? (w.prototype.enterScope.call(this, nt), s.body = this.tsParseModuleBlock(), w.prototype.exitScope.call(this)) : w.prototype.semicolon.call(this), this.finishNode(s, "TSModuleDeclaration");
      }, f.tsTryParseDeclare = function(s) {
        var a = this;
        if (!this.isLineTerminator()) {
          var c, l = this.type;
          return this.isContextual("let") && (l = o._var, c = "let"), this.tsInAmbientContext(function() {
            if (l === o._function) return s.declare = !0, a.parseFunctionStatement(s, !1, !0);
            if (l === o._class) return s.declare = !0, a.parseClass(s, !0);
            if (l === L.enum) return a.tsParseEnumDeclaration(s, { declare: !0 });
            if (l === L.global) return a.tsParseAmbientExternalModuleDeclaration(s);
            if (l === o._const || l === o._var) return a.match(o._const) && a.isLookaheadContextual("enum") ? (a.expect(o._const), a.tsParseEnumDeclaration(s, { const: !0, declare: !0 })) : (s.declare = !0, a.parseVarStatement(s, c || a.value, !0));
            if (l === L.interface) {
              var m = a.tsParseInterfaceDeclaration(s, { declare: !0 });
              if (m) return m;
            }
            return q(l) ? a.tsParseDeclaration(s, a.value, !0) : void 0;
          });
        }
      }, f.tsIsListTerminator = function(s) {
        switch (s) {
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
      }, f.tsParseDelimitedListWorker = function(s, a, c, l) {
        for (var m = [], v = -1; !this.tsIsListTerminator(s); ) {
          v = -1;
          var x = a();
          if (x == null) return;
          if (m.push(x), !this.eat(o.comma)) {
            if (this.tsIsListTerminator(s)) break;
            return void (c && this.expect(o.comma));
          }
          v = this.lastTokStart;
        }
        return l && (l.value = v), m;
      }, f.tsParseDelimitedList = function(s, a, c) {
        return (function(l) {
          if (l == null) throw new Error("Unexpected " + l + " value.");
          return l;
        })(this.tsParseDelimitedListWorker(s, a, !0, c));
      }, f.tsParseBracketedList = function(s, a, c, l, m) {
        l || this.expect(c ? o.bracketL : o.relational);
        var v = this.tsParseDelimitedList(s, a, m);
        return this.expect(c ? o.bracketR : o.relational), v;
      }, f.tsParseTypeParameterName = function() {
        return this.parseIdent().name;
      }, f.tsEatThenParseType = function(s) {
        return this.match(s) ? this.tsNextThenParseType() : void 0;
      }, f.tsExpectThenParseType = function(s) {
        var a = this;
        return this.tsDoThenParseType(function() {
          return a.expect(s);
        });
      }, f.tsNextThenParseType = function() {
        var s = this;
        return this.tsDoThenParseType(function() {
          return s.next();
        });
      }, f.tsDoThenParseType = function(s) {
        var a = this;
        return this.tsInType(function() {
          return s(), a.tsParseType();
        });
      }, f.tsSkipParameterStart = function() {
        if (q(this.type) || this.match(o._this)) return this.next(), !0;
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
      }, f.tsInAllowConditionalTypesContext = function(s) {
        var a = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !1;
        try {
          return s();
        } finally {
          this.inDisallowConditionalTypesContext = a;
        }
      }, f.tsParseBindingListForSignature = function() {
        var s = this;
        return w.prototype.parseBindingList.call(this, o.parenR, !0, !0).map(function(a) {
          return a.type !== "Identifier" && a.type !== "RestElement" && a.type !== "ObjectPattern" && a.type !== "ArrayPattern" && s.raise(a.start, I.UnsupportedSignatureParameterKind(a.type)), a;
        });
      }, f.tsParseTypePredicateAsserts = function() {
        if (this.type !== L.asserts) return !1;
        var s = this.containsEsc;
        return this.next(), !(!q(this.type) && !this.match(o._this) || (s && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, f.tsParseThisTypeNode = function() {
        var s = this.startNode();
        return this.next(), this.finishNode(s, "TSThisType");
      }, f.tsParseTypeAnnotation = function(s, a) {
        var c = this;
        return s === void 0 && (s = !0), a === void 0 && (a = this.startNode()), this.tsInType(function() {
          s && c.expect(o.colon), a.typeAnnotation = c.tsParseType();
        }), this.finishNode(a, "TSTypeAnnotation");
      }, f.tsParseThisTypePredicate = function(s) {
        this.next();
        var a = this.startNodeAtNode(s);
        return a.parameterName = s, a.typeAnnotation = this.tsParseTypeAnnotation(!1), a.asserts = !1, this.finishNode(a, "TSTypePredicate");
      }, f.tsParseThisTypeOrThisTypePredicate = function() {
        var s = this.tsParseThisTypeNode();
        return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(s) : s;
      }, f.tsParseTypePredicatePrefix = function() {
        var s = this.parseIdent();
        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), s;
      }, f.tsParseTypeOrTypePredicateAnnotation = function(s) {
        var a = this;
        return this.tsInType(function() {
          var c = a.startNode();
          a.expect(s);
          var l = a.startNode(), m = !!a.tsTryParse(a.tsParseTypePredicateAsserts.bind(a));
          if (m && a.match(o._this)) {
            var v = a.tsParseThisTypeOrThisTypePredicate();
            return v.type === "TSThisType" ? (l.parameterName = v, l.asserts = !0, l.typeAnnotation = null, v = a.finishNode(l, "TSTypePredicate")) : (a.resetStartLocationFromNode(v, l), v.asserts = !0), c.typeAnnotation = v, a.finishNode(c, "TSTypeAnnotation");
          }
          var x = a.tsIsIdentifier() && a.tsTryParse(a.tsParseTypePredicatePrefix.bind(a));
          if (!x) return m ? (l.parameterName = a.parseIdent(), l.asserts = m, l.typeAnnotation = null, c.typeAnnotation = a.finishNode(l, "TSTypePredicate"), a.finishNode(c, "TSTypeAnnotation")) : a.tsParseTypeAnnotation(!1, c);
          var g = a.tsParseTypeAnnotation(!1);
          return l.parameterName = x, l.typeAnnotation = g, l.asserts = m, c.typeAnnotation = a.finishNode(l, "TSTypePredicate"), a.finishNode(c, "TSTypeAnnotation");
        });
      }, f.tsFillSignature = function(s, a) {
        var c = s === o.arrow;
        a.typeParameters = this.tsTryParseTypeParameters(), this.expect(o.parenL), a.parameters = this.tsParseBindingListForSignature(), (c || this.match(s)) && (a.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(s));
      }, f.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== o._const) return null;
        this.next();
        var s = this.tsParseTypeReference();
        return s.typeParameters && this.raise(s.typeName.start, I.CannotFindName({ name: "const" })), s;
      }, f.tsParseFunctionOrConstructorType = function(s, a) {
        var c = this, l = this.startNode();
        return s === "TSConstructorType" && (l.abstract = !!a, a && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return c.tsFillSignature(o.arrow, l);
        }), this.finishNode(l, s);
      }, f.tsParseUnionOrIntersectionType = function(s, a, c) {
        var l = this.startNode(), m = this.eat(c), v = [];
        do
          v.push(a());
        while (this.eat(c));
        return v.length !== 1 || m ? (l.types = v, this.finishNode(l, s)) : v[0];
      }, f.tsCheckTypeAnnotationForReadOnly = function(s) {
        switch (s.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(s.start, I.UnexpectedReadonly);
        }
      }, f.tsParseTypeOperator = function() {
        var s = this.startNode(), a = this.value;
        return this.next(), s.operator = a, s.typeAnnotation = this.tsParseTypeOperatorOrHigher(), a === "readonly" && this.tsCheckTypeAnnotationForReadOnly(s), this.finishNode(s, "TSTypeOperator");
      }, f.tsParseConstraintForInferType = function() {
        var s = this;
        if (this.eat(o._extends)) {
          var a = this.tsInDisallowConditionalTypesContext(function() {
            return s.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(o.question)) return a;
        }
      }, f.tsParseInferType = function() {
        var s = this, a = this.startNode();
        this.expectContextual("infer");
        var c = this.startNode();
        return c.name = this.tsParseTypeParameterName(), c.constraint = this.tsTryParse(function() {
          return s.tsParseConstraintForInferType();
        }), a.typeParameter = this.finishNode(c, "TSTypeParameter"), this.finishNode(a, "TSInferType");
      }, f.tsParseLiteralTypeNode = function() {
        var s = this, a = this.startNode();
        return a.literal = (function() {
          switch (s.type) {
            case o.num:
            case o.string:
            case o._true:
            case o._false:
              return s.parseExprAtom();
            default:
              s.unexpected();
          }
        })(), this.finishNode(a, "TSLiteralType");
      }, f.tsParseImportType = function() {
        var s = this.startNode();
        return this.expect(o._import), this.expect(o.parenL), this.match(o.string) || this.raise(this.start, I.UnsupportedImportTypeArgument), s.argument = this.parseExprAtom(), this.expect(o.parenR), this.eat(o.dot) && (s.qualifier = this.tsParseEntityName()), this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSImportType");
      }, f.tsParseTypeQuery = function() {
        var s = this.startNode();
        return this.expect(o._typeof), s.exprName = this.match(o._import) ? this.tsParseImportType() : this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSTypeQuery");
      }, f.tsParseMappedTypeParameter = function() {
        var s = this.startNode();
        return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsExpectThenParseType(o._in), this.finishNode(s, "TSTypeParameter");
      }, f.tsParseMappedType = function() {
        var s = this.startNode();
        return this.expect(o.braceL), this.match(o.plusMin) ? (s.readonly = this.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (s.readonly = !0), this.expect(o.bracketL), s.typeParameter = this.tsParseMappedTypeParameter(), s.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(o.bracketR), this.match(o.plusMin) ? (s.optional = this.value, this.next(), this.expect(o.question)) : this.eat(o.question) && (s.optional = !0), s.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(o.braceR), this.finishNode(s, "TSMappedType");
      }, f.tsParseTypeLiteral = function() {
        var s = this.startNode();
        return s.members = this.tsParseObjectTypeMembers(), this.finishNode(s, "TSTypeLiteral");
      }, f.tsParseTupleElementType = function() {
        var s = this.startLoc, a = this.start, c = this.eat(o.ellipsis), l = this.tsParseType(), m = this.eat(o.question);
        if (this.eat(o.colon)) {
          var v = this.startNodeAtNode(l);
          v.optional = m, l.type !== "TSTypeReference" || l.typeParameters || l.typeName.type !== "Identifier" ? (this.raise(l.start, I.InvalidTupleMemberLabel), v.label = l) : v.label = l.typeName, v.elementType = this.tsParseType(), l = this.finishNode(v, "TSNamedTupleMember");
        } else if (m) {
          var x = this.startNodeAtNode(l);
          x.typeAnnotation = l, l = this.finishNode(x, "TSOptionalType");
        }
        if (c) {
          var g = this.startNodeAt(a, s);
          g.typeAnnotation = l, l = this.finishNode(g, "TSRestType");
        }
        return l;
      }, f.tsParseTupleType = function() {
        var s = this, a = this.startNode();
        a.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
        var c = !1, l = null;
        return a.elementTypes.forEach(function(m) {
          var v = m.type;
          !c || v === "TSRestType" || v === "TSOptionalType" || v === "TSNamedTupleMember" && m.optional || s.raise(m.start, I.OptionalTypeBeforeRequired), c || (c = v === "TSNamedTupleMember" && m.optional || v === "TSOptionalType");
          var x = v;
          v === "TSRestType" && (x = (m = m.typeAnnotation).type);
          var g = x === "TSNamedTupleMember";
          l != null || (l = g), l !== g && s.raise(m.start, I.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(a, "TSTupleType");
      }, f.tsParseTemplateLiteralType = function() {
        var s = this.startNode();
        return s.literal = this.parseTemplate({ isTagged: !1 }), this.finishNode(s, "TSLiteralType");
      }, f.tsParseTypeReference = function() {
        var s = this.startNode();
        return s.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSTypeReference");
      }, f.tsMatchLeftRelational = function() {
        return this.match(o.relational) && this.value === "<";
      }, f.tsMatchRightRelational = function() {
        return this.match(o.relational) && this.value === ">";
      }, f.tsParseParenthesizedType = function() {
        var s = this.startNode();
        return this.expect(o.parenL), s.typeAnnotation = this.tsParseType(), this.expect(o.parenR), this.finishNode(s, "TSParenthesizedType");
      }, f.tsParseNonArrayType = function() {
        switch (this.type) {
          case o.string:
          case o.num:
          case o._true:
          case o._false:
            return this.tsParseLiteralTypeNode();
          case o.plusMin:
            if (this.value === "-") {
              var s = this.startNode();
              return this.lookahead().type !== o.num && this.unexpected(), s.literal = this.parseMaybeUnary(), this.finishNode(s, "TSLiteralType");
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
            var a = this.type;
            if (q(a) || a === o._void || a === o._null) {
              var c = a === o._void ? "TSVoidKeyword" : a === o._null ? "TSNullKeyword" : (function(m) {
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
        for (var s = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(o.bracketL); ) if (this.match(o.bracketR)) {
          var a = this.startNodeAtNode(s);
          a.elementType = s, this.expect(o.bracketR), s = this.finishNode(a, "TSArrayType");
        } else {
          var c = this.startNodeAtNode(s);
          c.objectType = s, c.indexType = this.tsParseType(), this.expect(o.bracketR), s = this.finishNode(c, "TSIndexedAccessType");
        }
        return s;
      }, f.tsParseTypeOperatorOrHigher = function() {
        var s = this;
        return ds(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseArrayTypeOrHigher();
        });
      }, f.tsParseIntersectionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), o.bitwiseAND);
      }, f.tsParseUnionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), o.bitwiseOR);
      }, f.tsParseNonConditionalType = function() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(o._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
      }, f.tsParseType = function() {
        var s = this;
        Vi(this.inType);
        var a = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(o._extends)) return a;
        var c = this.startNodeAtNode(a);
        return c.checkType = a, c.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return s.tsParseNonConditionalType();
        }), this.expect(o.question), c.trueType = this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseType();
        }), this.expect(o.colon), c.falseType = this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseType();
        }), this.finishNode(c, "TSConditionalType");
      }, f.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!q(this.type) && (this.next(), this.match(o.colon));
      }, f.tsInType = function(s) {
        var a = this.inType;
        this.inType = !0;
        try {
          return s();
        } finally {
          this.inType = a;
        }
      }, f.tsTryParseIndexSignature = function(s) {
        if (this.match(o.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(o.bracketL);
          var a = this.parseIdent();
          a.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(a), this.expect(o.bracketR), s.parameters = [a];
          var c = this.tsTryParseTypeAnnotation();
          return c && (s.typeAnnotation = c), this.tsParseTypeMemberSemicolon(), this.finishNode(s, "TSIndexSignature");
        }
      }, f.tsParseNoneModifiers = function(s) {
        this.tsParseModifiers({ modified: s, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: I.InvalidModifierOnTypeParameterPositions });
      }, f.tsParseTypeParameter = function(s) {
        s === void 0 && (s = this.tsParseNoneModifiers.bind(this));
        var a = this.startNode();
        return s(a), a.name = this.tsParseTypeParameterName(), a.constraint = this.tsEatThenParseType(o._extends), a.default = this.tsEatThenParseType(o.eq), this.finishNode(a, "TSTypeParameter");
      }, f.tsParseTypeParameters = function(s) {
        var a = this.startNode();
        this.tsMatchLeftRelational() || this.matchJsx("jsxTagStart") ? this.next() : this.unexpected();
        var c = { value: -1 };
        return a.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, s), !1, !0, c), a.params.length === 0 && this.raise(this.start, I.EmptyTypeParameters), c.value !== -1 && this.addExtra(a, "trailingComma", c.value), this.finishNode(a, "TSTypeParameterDeclaration");
      }, f.tsTryParseTypeParameters = function(s) {
        if (this.tsMatchLeftRelational()) return this.tsParseTypeParameters(s);
      }, f.tsTryParse = function(s) {
        var a = this.getCurLookaheadState(), c = s();
        return c !== void 0 && c !== !1 ? c : void this.setLookaheadState(a);
      }, f.tsTokenCanFollowModifier = function() {
        return (this.match(o.bracketL) || this.match(o.braceL) || this.match(o.star) || this.match(o.ellipsis) || this.match(o.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, f.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, f.tsParseModifier = function(s, a) {
        if (q(this.type) || this.type === o._in) {
          var c = this.value;
          if (s.indexOf(c) !== -1 && !this.containsEsc) {
            if (a && this.tsIsStartOfStaticBlocks()) return;
            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return c;
          }
        }
      }, f.tsParseModifiersByMap = function(s) {
        for (var a = s.modified, c = s.map, l = 0, m = Object.keys(c); l < m.length; l++) {
          var v = m[l];
          a[v] = c[v];
        }
      }, f.tsParseModifiers = function(s) {
        for (var a = this, c = s.modified, l = s.allowedModifiers, m = s.disallowedModifiers, v = s.stopOnStartOfClassStaticBlock, x = s.errorTemplate, g = x === void 0 ? I.InvalidModifierOnTypeMember : x, b = {}, S = function(G, W, J, re) {
          W === J && c[re] && a.raise(G.column, I.InvalidModifiersOrder({ orderedModifiers: [J, re] }));
        }, N = function(G, W, J, re) {
          (c[J] && W === re || c[re] && W === J) && a.raise(G.column, I.IncompatibleModifiers({ modifiers: [J, re] }));
        }; ; ) {
          var M = this.startLoc, A = this.tsParseModifier(l.concat(m ?? []), v);
          if (!A) break;
          Fi(A) ? c.accessibility ? this.raise(this.start, I.DuplicateAccessibilityModifier()) : (S(M, A, A, "override"), S(M, A, A, "static"), S(M, A, A, "readonly"), S(M, A, A, "accessor"), b.accessibility = A, c.accessibility = A) : yn(A) ? c[A] ? this.raise(this.start, I.DuplicateModifier({ modifier: A })) : (S(M, A, "in", "out"), b[A] = A, c[A] = !0) : mn(A) ? c[A] ? this.raise(this.start, I.DuplicateModifier({ modifier: A })) : (N(M, A, "accessor", "readonly"), N(M, A, "accessor", "static"), N(M, A, "accessor", "override"), b[A] = A, c[A] = !0) : Object.hasOwnProperty.call(c, A) ? this.raise(this.start, I.DuplicateModifier({ modifier: A })) : (S(M, A, "static", "readonly"), S(M, A, "static", "override"), S(M, A, "override", "readonly"), S(M, A, "abstract", "override"), N(M, A, "declare", "override"), N(M, A, "static", "abstract"), b[A] = A, c[A] = !0), m != null && m.includes(A) && this.raise(this.start, g);
        }
        return b;
      }, f.tsParseInOutModifiers = function(s) {
        this.tsParseModifiers({ modified: s, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: I.InvalidModifierOnTypeParameter });
      }, f.tsParseTypeArguments = function() {
        var s = this, a = this.startNode();
        return a.params = this.tsInType(function() {
          return s.tsInNoContext(function() {
            return s.expect(o.relational), s.tsParseDelimitedList("TypeParametersOrArguments", s.tsParseType.bind(s));
          });
        }), a.params.length === 0 && this.raise(this.start, I.EmptyTypeArguments), this.exprAllowed = !1, this.expect(o.relational), this.finishNode(a, "TSTypeParameterInstantiation");
      }, f.tsParseHeritageClause = function(s) {
        var a = this, c = this.start, l = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var m = a.startNode();
          return m.expression = a.tsParseEntityName(), a.tsMatchLeftRelational() && (m.typeParameters = a.tsParseTypeArguments()), a.finishNode(m, "TSExpressionWithTypeArguments");
        });
        return l.length || this.raise(c, I.EmptyHeritageClauseType({ token: s })), l;
      }, f.tsParseTypeMemberSemicolon = function() {
        this.eat(o.comma) || this.isLineTerminator() || this.expect(o.semi);
      }, f.tsTryParseAndCatch = function(s) {
        var a = this.tryParse(function(c) {
          return s() || c();
        });
        if (!a.aborted && a.node) return a.error && this.setLookaheadState(a.failState), a.node;
      }, f.tsParseSignatureMember = function(s, a) {
        return this.tsFillSignature(o.colon, a), this.tsParseTypeMemberSemicolon(), this.finishNode(a, s);
      }, f.tsParsePropertyOrMethodSignature = function(s, a) {
        this.eat(o.question) && (s.optional = !0);
        var c = s;
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) {
          a && this.raise(s.start, I.ReadonlyForMethodSignature);
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
        a && (g.readonly = !0);
        var b = this.tsTryParseTypeAnnotation();
        return b && (g.typeAnnotation = b), this.tsParseTypeMemberSemicolon(), this.finishNode(g, "TSPropertySignature");
      }, f.tsParseTypeMember = function() {
        var s = this.startNode();
        if (this.match(o.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", s);
        if (this.match(o._new)) {
          var a = this.startNode();
          return this.next(), this.match(o.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", s) : (s.key = this.createIdentifier(a, "new"), this.tsParsePropertyOrMethodSignature(s, !1));
        }
        return this.tsParseModifiers({ modified: s, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(s) || (this.parsePropertyName(s), s.computed || s.key.type !== "Identifier" || s.key.name !== "get" && s.key.name !== "set" || !this.tsTokenCanFollowModifier() || (s.kind = s.key.name, this.parsePropertyName(s)), this.tsParsePropertyOrMethodSignature(s, !!s.readonly));
      }, f.tsParseList = function(s, a) {
        for (var c = []; !this.tsIsListTerminator(s); ) c.push(a());
        return c;
      }, f.tsParseObjectTypeMembers = function() {
        this.expect(o.braceL);
        var s = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(o.braceR), s;
      }, f.tsParseInterfaceDeclaration = function(s, a) {
        if (a === void 0 && (a = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), a.declare && (s.declare = !0), q(this.type) ? (s.id = this.parseIdent(), this.checkLValSimple(s.id, 7)) : (s.id = null, this.raise(this.start, I.MissingInterfaceName)), s.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(o._extends) && (s.extends = this.tsParseHeritageClause("extends"));
        var c = this.startNode();
        return c.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), s.body = this.finishNode(c, "TSInterfaceBody"), this.finishNode(s, "TSInterfaceDeclaration");
      }, f.tsParseAbstractDeclaration = function(s) {
        if (this.match(o._class)) return s.abstract = !0, this.parseClass(s, !0);
        if (this.ts_isContextual(L.interface)) {
          if (!this.hasFollowingLineBreak()) return s.abstract = !0, this.tsParseInterfaceDeclaration(s);
        } else this.unexpected(s.start);
      }, f.tsIsDeclarationStart = function() {
        return Fe(this.type);
      }, f.tsParseExpressionStatement = function(s, a) {
        switch (a.name) {
          case "declare":
            var c = this.tsTryParseDeclare(s);
            if (c) return c.declare = !0, c;
            break;
          case "global":
            if (this.match(o.braceL)) {
              w.prototype.enterScope.call(this, nt);
              var l = s;
              return l.global = !0, l.id = a, l.body = this.tsParseModuleBlock(), w.prototype.exitScope.call(this), this.finishNode(l, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(s, a.name, !1);
        }
      }, f.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, f.tsIsExportDefaultSpecifier = function() {
        var s = this.type, a = this.isAsyncFunction(), c = this.isLet();
        if (q(s)) {
          if (a && !this.containsEsc || c) return !1;
          if ((s === L.type || s === L.interface) && !this.containsEsc) {
            var l = this.lookahead();
            if (q(l.type) && !this.isContextualWithState("from", l) || l.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var m = this.nextTokenStart(), v = this.isUnparsedContextual(m, "from");
        if (this.input.charCodeAt(m) === 44 || q(this.type) && v) return !0;
        if (this.match(o._default) && v) {
          var x = this.input.charCodeAt(this.nextTokenStartSince(m + 4));
          return x === 34 || x === 39;
        }
        return !1;
      }, f.tsInAmbientContext = function(s) {
        var a = this.isAmbientContext;
        this.isAmbientContext = !0;
        try {
          return s();
        } finally {
          this.isAmbientContext = a;
        }
      }, f.tsCheckLineTerminator = function(s) {
        return s ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
      }, f.tsParseModuleOrNamespaceDeclaration = function(s, a) {
        if (a === void 0 && (a = !1), s.id = this.parseIdent(), a || this.checkLValSimple(s.id, 8), this.eat(o.dot)) {
          var c = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(c, !0), s.body = c;
        } else w.prototype.enterScope.call(this, nt), s.body = this.tsParseModuleBlock(), w.prototype.exitScope.call(this);
        return this.finishNode(s, "TSModuleDeclaration");
      }, f.checkLValSimple = function(s, a, c) {
        return a === void 0 && (a = 0), w.prototype.checkLValSimple.call(this, s, a, c);
      }, f.tsParseTypeAliasDeclaration = function(s) {
        var a = this;
        return s.id = this.parseIdent(), this.checkLValSimple(s.id, 6), s.typeAnnotation = this.tsInType(function() {
          if (s.typeParameters = a.tsTryParseTypeParameters(a.tsParseInOutModifiers.bind(a)), a.expect(o.eq), a.ts_isContextual(L.interface) && a.lookahead().type !== o.dot) {
            var c = a.startNode();
            return a.next(), a.finishNode(c, "TSIntrinsicKeyword");
          }
          return a.tsParseType();
        }), this.semicolon(), this.finishNode(s, "TSTypeAliasDeclaration");
      }, f.tsParseDeclaration = function(s, a, c) {
        switch (a) {
          case "abstract":
            if (this.tsCheckLineTerminator(c) && (this.match(o._class) || q(this.type))) return this.tsParseAbstractDeclaration(s);
            break;
          case "module":
            if (this.tsCheckLineTerminator(c)) {
              if (this.match(o.string)) return this.tsParseAmbientExternalModuleDeclaration(s);
              if (q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(s);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(c) && q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(s);
            break;
          case "type":
            if (this.tsCheckLineTerminator(c) && q(this.type)) return this.tsParseTypeAliasDeclaration(s);
        }
      }, f.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, f.tsParseImportEqualsDeclaration = function(s, a) {
        s.isExport = a || !1, s.id = this.parseIdent(), this.checkLValSimple(s.id, 2), w.prototype.expect.call(this, o.eq);
        var c = this.tsParseModuleReference();
        return s.importKind === "type" && c.type !== "TSExternalModuleReference" && this.raise(c.start, I.ImportAliasHasImportType), s.moduleReference = c, w.prototype.semicolon.call(this), this.finishNode(s, "TSImportEqualsDeclaration");
      }, f.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var s = this.type;
        if (q(s)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((s === L.type || s === L.interface) && !this.containsEsc) {
            var a = this.lookahead();
            if (q(a.type) && !this.isContextualWithState("from", a) || a.type === o.braceL) return !1;
          }
        } else if (!this.match(o._default)) return !1;
        var c = this.nextTokenStart(), l = this.isUnparsedContextual(c, "from");
        if (this.input.charCodeAt(c) === 44 || q(this.type) && l) return !0;
        if (this.match(o._default) && l) {
          var m = this.input.charCodeAt(this.nextTokenStartSince(c + 4));
          return m === 34 || m === 39;
        }
        return !1;
      }, f.parseTemplate = function(s) {
        var a = (s === void 0 ? {} : s).isTagged, c = a !== void 0 && a, l = this.startNode();
        this.next(), l.expressions = [];
        var m = this.parseTemplateElement({ isTagged: c });
        for (l.quasis = [m]; !m.tail; ) this.type === o.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(o.dollarBraceL), l.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(o.braceR), l.quasis.push(m = this.parseTemplateElement({ isTagged: c }));
        return this.next(), this.finishNode(l, "TemplateLiteral");
      }, f.parseFunction = function(s, a, c, l, m) {
        this.initFunction(s), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !l) && (this.type === o.star && 2 & a && this.unexpected(), s.generator = this.eat(o.star)), this.options.ecmaVersion >= 8 && (s.async = !!l), 1 & a && (s.id = 4 & a && this.type !== o.name ? null : this.parseIdent());
        var v = this.yieldPos, x = this.awaitPos, g = this.awaitIdentPos, b = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Xt(s.async, s.generator)), 1 & a || (s.id = this.type === o.name ? this.parseIdent() : null), this.parseFunctionParams(s);
        var S = 1 & a;
        return this.parseFunctionBody(s, c, !1, m, { isFunctionDeclaration: S }), this.yieldPos = v, this.awaitPos = x, this.awaitIdentPos = g, 1 & a && s.id && !(2 & a) && this.checkLValSimple(s.id, s.body ? this.strict || s.generator || s.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = b, this.finishNode(s, S ? "FunctionDeclaration" : "FunctionExpression");
      }, f.parseFunctionBody = function(s, a, c, l, m) {
        a === void 0 && (a = !1), c === void 0 && (c = !1), l === void 0 && (l = !1), this.match(o.colon) && (s.returnType = this.tsParseTypeOrTypePredicateAnnotation(o.colon));
        var v = m != null && m.isFunctionDeclaration ? "TSDeclareFunction" : m != null && m.isClassMethod ? "TSDeclareMethod" : void 0;
        return v && !this.match(o.braceL) && this.isLineTerminator() ? this.finishNode(s, v) : v === "TSDeclareFunction" && this.isAmbientContext && (this.raise(s.start, I.DeclareFunctionHasImplementation), s.declare) ? (w.prototype.parseFunctionBody.call(this, s, a, c, !1), this.finishNode(s, v)) : (w.prototype.parseFunctionBody.call(this, s, a, c, l), s);
      }, f.parseNew = function() {
        var s;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var a = this.startNode(), c = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(o.dot)) {
          a.meta = c;
          var l = this.containsEsc;
          return a.property = this.parseIdent(!0), a.property.name !== "target" && this.raiseRecoverable(a.property.start, "The only valid meta property for new is 'new.target'"), l && this.raiseRecoverable(a.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(a.start, "'new.target' can only be used in functions and class static block"), this.finishNode(a, "MetaProperty");
        }
        var m = this.start, v = this.startLoc, x = this.type === o._import;
        a.callee = this.parseSubscripts(this.parseExprAtom(), m, v, !0, !1), x && a.callee.type === "ImportExpression" && this.raise(m, "Cannot use new with import()");
        var g = a.callee;
        return g.type !== "TSInstantiationExpression" || (s = g.extra) != null && s.parenthesized || (a.typeParameters = g.typeParameters, a.callee = g.expression), a.arguments = this.eat(o.parenL) ? this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(a, "NewExpression");
      }, f.parseExprOp = function(s, a, c, l, m) {
        var v;
        if (o._in.binop > l && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (v = "TSAsExpression"), u && this.isContextual("satisfies") && (v = "TSSatisfiesExpression"), v)) {
          var x = this.startNodeAt(a, c);
          x.expression = s;
          var g = this.tsTryNextParseConstantContext();
          return x.typeAnnotation = g || this.tsNextThenParseType(), this.finishNode(x, v), this.reScan_lt_gt(), this.parseExprOp(x, a, c, l, m);
        }
        return w.prototype.parseExprOp.call(this, s, a, c, l, m);
      }, f.parseImportSpecifiers = function() {
        var s = [], a = !0;
        if (y.tokenIsIdentifier(this.type) && (s.push(this.parseImportDefaultSpecifier()), !this.eat(o.comma))) return s;
        if (this.type === o.star) return s.push(this.parseImportNamespaceSpecifier()), s;
        for (this.expect(o.braceL); !this.eat(o.braceR); ) {
          if (a) a = !1;
          else if (this.expect(o.comma), this.afterTrailingComma(o.braceR)) break;
          s.push(this.parseImportSpecifier());
        }
        return s;
      }, f.parseImport = function(s) {
        var a = this.lookahead();
        if (s.importKind = "value", this.importOrExportOuterKind = "value", q(a.type) || this.match(o.star) || this.match(o.braceL)) {
          var c = this.lookahead(2);
          if (c.type !== o.comma && !this.isContextualWithState("from", c) && c.type !== o.eq && this.ts_eatContextualWithState("type", 1, a) && (this.importOrExportOuterKind = "type", s.importKind = "type", a = this.lookahead(), c = this.lookahead(2)), q(a.type) && c.type === o.eq) {
            this.next();
            var l = this.tsParseImportEqualsDeclaration(s);
            return this.importOrExportOuterKind = "value", l;
          }
        }
        return this.next(), this.type === o.string ? (s.specifiers = [], s.source = this.parseExprAtom()) : (s.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), s.source = this.type === o.string ? this.parseExprAtom() : this.unexpected()), this.parseMaybeImportAttributes(s), this.semicolon(), this.finishNode(s, "ImportDeclaration"), this.importOrExportOuterKind = "value", s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(s.start, I.TypeImportCannotSpecifyDefaultAndNamed), s;
      }, f.parseExportDefaultDeclaration = function() {
        if (this.isAbstractClass()) {
          var s = this.startNode();
          return this.next(), s.abstract = !0, this.parseClass(s, !0);
        }
        if (this.match(L.interface)) {
          var a = this.tsParseInterfaceDeclaration(this.startNode());
          if (a) return a;
        }
        return w.prototype.parseExportDefaultDeclaration.call(this);
      }, f.parseExportAllDeclaration = function(s, a) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (s.exported = this.parseModuleExportName(), this.checkExport(a, s.exported, this.lastTokStart)) : s.exported = null), this.expectContextual("from"), this.type !== o.string && this.unexpected(), s.source = this.parseExprAtom(), this.parseMaybeImportAttributes(s), this.semicolon(), this.finishNode(s, "ExportAllDeclaration");
      }, f.parseDynamicImport = function(s) {
        if (this.next(), s.source = this.parseMaybeAssign(), this.eat(o.comma)) {
          var a = this.parseExpression();
          s.arguments = [a];
        }
        if (!this.eat(o.parenR)) {
          var c = this.start;
          this.eat(o.comma) && this.eat(o.parenR) ? this.raiseRecoverable(c, "Trailing comma is not allowed in import()") : this.unexpected(c);
        }
        return this.finishNode(s, "ImportExpression");
      }, f.parseExport = function(s, a) {
        var c = this.lookahead();
        if (this.ts_eatWithState(o._import, 2, c)) {
          this.ts_isContextual(L.type) && this.lookaheadCharCode() !== 61 ? (s.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (s.importKind = "value", this.importOrExportOuterKind = "value");
          var l = this.tsParseImportEqualsDeclaration(s, !0);
          return this.importOrExportOuterKind = void 0, l;
        }
        if (this.ts_eatWithState(o.eq, 2, c)) {
          var m = s;
          return m.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(m, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, c)) {
          var v = s;
          return this.expectContextual("namespace"), v.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(v, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(c, L.type) && this.lookahead(2).type === o.braceL ? (this.next(), this.importOrExportOuterKind = "type", s.exportKind = "type") : (this.importOrExportOuterKind = "value", s.exportKind = "value"), this.next(), this.eat(o.star)) return this.parseExportAllDeclaration(s, a);
        if (this.eat(o._default)) return this.checkExport(a, "default", this.lastTokStart), s.declaration = this.parseExportDefaultDeclaration(), this.finishNode(s, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) s.declaration = this.parseExportDeclaration(s), s.declaration.type === "VariableDeclaration" ? this.checkVariableExport(a, s.declaration.declarations) : this.checkExport(a, s.declaration.id, s.declaration.id.start), s.specifiers = [], s.source = null;
        else {
          if (s.declaration = null, s.specifiers = this.parseExportSpecifiers(a), this.eatContextual("from")) this.type !== o.string && this.unexpected(), s.source = this.parseExprAtom(), this.parseMaybeImportAttributes(s);
          else {
            for (var x, g = Di(s.specifiers); !(x = g()).done; ) {
              var b = x.value;
              this.checkUnreserved(b.local), this.checkLocalExport(b.local), b.local.type === "Literal" && this.raise(b.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            s.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(s, "ExportNamedDeclaration");
      }, f.checkExport = function(s, a, c) {
        s && (typeof a != "string" && (a = a.type === "Identifier" ? a.name : a.value), s[a] = !0);
      }, f.parseMaybeDefault = function(s, a, c) {
        var l = w.prototype.parseMaybeDefault.call(this, s, a, c);
        return l.type === "AssignmentPattern" && l.typeAnnotation && l.right.start < l.typeAnnotation.start && this.raise(l.typeAnnotation.start, I.TypeAnnotationAfterAssign), l;
      }, f.typeCastToParameter = function(s) {
        return s.expression.typeAnnotation = s.typeAnnotation, this.resetEndLocation(s.expression, s.typeAnnotation.end), s.expression;
      }, f.toAssignableList = function(s, a) {
        for (var c = 0; c < s.length; c++) {
          var l = s[c];
          l?.type === "TSTypeCastExpression" && (s[c] = this.typeCastToParameter(l));
        }
        return w.prototype.toAssignableList.call(this, s, a);
      }, f.reportReservedArrowTypeParam = function(s) {
      }, f.parseExprAtom = function(s, a, c) {
        if (this.type === L.jsxText) return this.jsx_parseText();
        if (this.type === L.jsxTagStart) return this.jsx_parseElement();
        if (this.type === L.at) return this.parseDecorators(), this.parseExprAtom();
        if (q(this.type)) {
          var l = this.potentialArrowAt === this.start, m = this.start, v = this.startLoc, x = this.containsEsc, g = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !x && g.name === "async" && !this.canInsertSemicolon() && this.eat(o._function)) return this.overrideContext(Z.f_expr), this.parseFunction(this.startNodeAt(m, v), 0, !1, !0, a);
          if (l && !this.canInsertSemicolon()) {
            if (this.eat(o.arrow)) return this.parseArrowExpression(this.startNodeAt(m, v), [g], !1, a);
            if (this.options.ecmaVersion >= 8 && g.name === "async" && this.type === o.name && !x && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return g = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(m, v), [g], !0, a);
          }
          return g;
        }
        return w.prototype.parseExprAtom.call(this, s, a, c);
      }, f.parseExprAtomDefault = function() {
        if (q(this.type)) {
          var s = this.potentialArrowAt === this.start, a = this.containsEsc, c = this.parseIdent();
          if (!a && c.name === "async" && !this.canInsertSemicolon()) {
            var l = this.type;
            if (l === o._function) return this.next(), this.parseFunction(this.startNodeAtNode(c), void 0, !0, !0);
            if (q(l)) {
              if (this.lookaheadCharCode() === 61) {
                var m = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(o.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(c), [m], !0);
              }
              return c;
            }
          }
          return s && this.match(o.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(c), [c], !1)) : c;
        }
        this.unexpected();
      }, f.parseIdentNode = function() {
        var s = this.startNode();
        return vt(this.type) ? (s.name = this.value, s) : w.prototype.parseIdentNode.call(this);
      }, f.parseVarStatement = function(s, a, c) {
        c === void 0 && (c = !1);
        var l = this.isAmbientContext;
        this.next(), w.prototype.parseVar.call(this, s, !1, a, c || l), this.semicolon();
        var m = this.finishNode(s, "VariableDeclaration");
        if (!l) return m;
        for (var v, x = Di(m.declarations); !(v = x()).done; ) {
          var g = v.value, b = g.init;
          b && (a !== "const" || g.id.typeAnnotation ? this.raise(b.start, I.InitializerNotAllowedInAmbientContext) : b.type !== "StringLiteral" && b.type !== "BooleanLiteral" && b.type !== "NumericLiteral" && b.type !== "BigIntLiteral" && (b.type !== "TemplateLiteral" || b.expressions.length > 0) && !vn(b) && this.raise(b.start, I.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return m;
      }, f.parseStatement = function(s, a, c) {
        if (this.match(L.at) && this.parseDecorators(!0), this.match(o._const) && this.isLookaheadContextual("enum")) {
          var l = this.startNode();
          return this.expect(o._const), this.tsParseEnumDeclaration(l, { const: !0 });
        }
        if (this.ts_isContextual(L.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(L.interface)) {
          var m = this.tsParseInterfaceDeclaration(this.startNode());
          if (m) return m;
        }
        return w.prototype.parseStatement.call(this, s, a, c);
      }, f.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, f.parsePostMemberNameModifiers = function(s) {
        this.eat(o.question) && (s.optional = !0), s.readonly && this.match(o.parenL) && this.raise(s.start, I.ClassMethodHasReadonly), s.declare && this.match(o.parenL) && this.raise(s.start, I.ClassMethodHasDeclare);
      }, f.parseExpressionStatement = function(s, a) {
        return (a.type === "Identifier" ? this.tsParseExpressionStatement(s, a) : void 0) || w.prototype.parseExpressionStatement.call(this, s, a);
      }, f.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(L.at) || w.prototype.shouldParseExportStatement.call(this);
      }, f.parseConditional = function(s, a, c, l, m) {
        if (this.eat(o.question)) {
          var v = this.startNodeAt(a, c);
          return v.test = s, v.consequent = this.parseMaybeAssign(), this.expect(o.colon), v.alternate = this.parseMaybeAssign(l), this.finishNode(v, "ConditionalExpression");
        }
        return s;
      }, f.parseMaybeConditional = function(s, a) {
        var c = this, l = this.start, m = this.startLoc, v = this.parseExprOps(s, a);
        if (this.checkExpressionErrors(a)) return v;
        if (!this.maybeInArrowParameters || !this.match(o.question)) return this.parseConditional(v, l, m, s, a);
        var x = this.tryParse(function() {
          return c.parseConditional(v, l, m, s, a);
        });
        return x.node ? (x.error && this.setLookaheadState(x.failState), x.node) : (x.error && this.setOptionalParametersError(a, x.error), v);
      }, f.parseParenItem = function(s) {
        var a = this.start, c = this.startLoc;
        if (s = w.prototype.parseParenItem.call(this, s), this.eat(o.question) && (s.optional = !0, this.resetEndLocation(s)), this.match(o.colon)) {
          var l = this.startNodeAt(a, c);
          return l.expression = s, l.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(l, "TSTypeCastExpression");
        }
        return s;
      }, f.parseExportDeclaration = function(s) {
        var a = this;
        if (!this.isAmbientContext && this.ts_isContextual(L.declare)) return this.tsInAmbientContext(function() {
          return a.parseExportDeclaration(s);
        });
        var c = this.start, l = this.startLoc, m = this.eatContextual("declare");
        !m || !this.ts_isContextual(L.declare) && this.shouldParseExportStatement() || this.raise(this.start, I.ExpectedAmbientAfterExportDeclare);
        var v = q(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return v ? ((v.type === "TSInterfaceDeclaration" || v.type === "TSTypeAliasDeclaration" || m) && (s.exportKind = "type"), m && (this.resetStartLocation(v, c, l), v.declare = !0), v) : null;
      }, f.parseClassId = function(s, a) {
        if (a || !this.isContextual("implements")) {
          w.prototype.parseClassId.call(this, s, a);
          var c = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          c && (s.typeParameters = c);
        }
      }, f.parseClassPropertyAnnotation = function(s) {
        s.optional || (this.value === "!" && this.eat(o.prefix) ? s.definite = !0 : this.eat(o.question) && (s.optional = !0));
        var a = this.tsTryParseTypeAnnotation();
        a && (s.typeAnnotation = a);
      }, f.parseClassField = function(s) {
        if (s.key.type === "PrivateIdentifier") s.abstract && this.raise(s.start, I.PrivateElementHasAbstract), s.accessibility && this.raise(s.start, I.PrivateElementHasAccessibility({ modifier: s.accessibility })), this.parseClassPropertyAnnotation(s);
        else if (this.parseClassPropertyAnnotation(s), this.isAmbientContext && (!s.readonly || s.typeAnnotation) && this.match(o.eq) && this.raise(this.start, I.DeclareClassFieldHasInitializer), s.abstract && this.match(o.eq)) {
          var a = s.key;
          this.raise(this.start, I.AbstractPropertyHasInitializer({ propertyName: a.type !== "Identifier" || s.computed ? "[" + this.input.slice(a.start, a.end) + "]" : a.name }));
        }
        return w.prototype.parseClassField.call(this, s);
      }, f.parseClassMethod = function(s, a, c, l) {
        var m = s.kind === "constructor", v = s.key.type === "PrivateIdentifier", x = this.tsTryParseTypeParameters();
        v ? (x && (s.typeParameters = x), s.accessibility && this.raise(s.start, I.PrivateMethodsHasAccessibility({ modifier: s.accessibility }))) : x && m && this.raise(x.start, I.ConstructorHasTypeParameters);
        var g = s.declare, b = s.kind;
        !(g !== void 0 && g) || b !== "get" && b !== "set" || this.raise(s.start, I.DeclareAccessor({ kind: b })), x && (s.typeParameters = x);
        var S = s.key;
        s.kind === "constructor" ? (a && this.raise(S.start, "Constructor can't be a generator"), c && this.raise(S.start, "Constructor can't be an async method")) : s.static && zi(s, "prototype") && this.raise(S.start, "Classes may not have a static property named prototype");
        var N = s.value = this.parseMethod(a, c, l, !0, s);
        return s.kind === "get" && N.params.length !== 0 && this.raiseRecoverable(N.start, "getter should have no params"), s.kind === "set" && N.params.length !== 1 && this.raiseRecoverable(N.start, "setter should have exactly one param"), s.kind === "set" && N.params[0].type === "RestElement" && this.raiseRecoverable(N.params[0].start, "Setter cannot use rest params"), this.finishNode(s, "MethodDefinition");
      }, f.isClassMethod = function() {
        return this.match(o.relational);
      }, f.parseClassElement = function(s) {
        var a = this;
        if (this.eat(o.semi)) return null;
        var c, l = this.options.ecmaVersion, m = this.startNode(), v = "", x = !1, g = !1, b = "method", S = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], N = this.tsParseModifiers({ modified: m, allowedModifiers: S, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: I.InvalidModifierOnTypeParameterPositions });
        c = !!N.static;
        var M = function() {
          if (!a.tsIsStartOfStaticBlocks()) {
            var A = a.tsTryParseIndexSignature(m);
            if (A) return m.abstract && a.raise(m.start, I.IndexSignatureHasAbstract), m.accessibility && a.raise(m.start, I.IndexSignatureHasAccessibility({ modifier: m.accessibility })), m.declare && a.raise(m.start, I.IndexSignatureHasDeclare), m.override && a.raise(m.start, I.IndexSignatureHasOverride), A;
            if (!a.inAbstractClass && m.abstract && a.raise(m.start, I.NonAbstractClassHasAbstractMethod), m.override && s && a.raise(m.start, I.OverrideNotInSubClass), m.static = c, c && (a.isClassElementNameStart() || a.type === o.star || (v = "static")), !v && l >= 8 && a.eatContextual("async") && (!a.isClassElementNameStart() && a.type !== o.star || a.canInsertSemicolon() ? v = "async" : g = !0), !v && (l >= 9 || !g) && a.eat(o.star) && (x = !0), !v && !g && !x) {
              var G = a.value;
              (a.eatContextual("get") || a.eatContextual("set")) && (a.isClassElementNameStart() ? b = G : v = G);
            }
            if (v ? (m.computed = !1, m.key = a.startNodeAt(a.lastTokStart, a.lastTokStartLoc), m.key.name = v, a.finishNode(m.key, "Identifier")) : a.parseClassElementName(m), a.parsePostMemberNameModifiers(m), a.isClassMethod() || l < 13 || a.type === o.parenL || b !== "method" || x || g) {
              var W = !m.static && zi(m, "constructor"), J = W && s;
              W && b !== "method" && a.raise(m.key.start, "Constructor can't have get/set modifier"), m.kind = W ? "constructor" : b, a.parseClassMethod(m, x, g, J);
            } else a.parseClassField(m);
            return m;
          }
          if (a.next(), a.next(), a.tsHasSomeModifiers(m, S) && a.raise(a.start, I.StaticBlockCannotHaveModifier), l >= 13) return w.prototype.parseClassStaticBlock.call(a, m), m;
        };
        return m.declare ? this.tsInAmbientContext(M) : M(), m;
      }, f.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || w.prototype.isClassElementNameStart.call(this);
      }, f.parseClassSuper = function(s) {
        w.prototype.parseClassSuper.call(this, s), s.superClass && (this.tsMatchLeftRelational() || this.match(o.bitShift)) && (s.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (s.implements = this.tsParseHeritageClause("implements"));
      }, f.parseFunctionParams = function(s) {
        var a = this.tsTryParseTypeParameters();
        a && (s.typeParameters = a), w.prototype.parseFunctionParams.call(this, s);
      }, f.parseVarId = function(s, a) {
        w.prototype.parseVarId.call(this, s, a), s.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(o.prefix) && (s.definite = !0);
        var c = this.tsTryParseTypeAnnotation();
        c && (s.id.typeAnnotation = c, this.resetEndLocation(s.id));
      }, f.parseArrowExpression = function(s, a, c, l) {
        this.match(o.colon) && (s.returnType = this.tsParseTypeAnnotation());
        var m = this.yieldPos, v = this.awaitPos, x = this.awaitIdentPos;
        this.enterScope(16 | Xt(c, !1)), this.initFunction(s);
        var g = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (s.async = !!c), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, s.params = this.toAssignableList(a, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(s, !0, !1, l), this.yieldPos = m, this.awaitPos = v, this.awaitIdentPos = x, this.maybeInArrowParameters = g, this.finishNode(s, "ArrowFunctionExpression");
      }, f.parseMaybeAssignOrigin = function(s, a, c) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(s);
          this.exprAllowed = !1;
        }
        var l = !1, m = -1, v = -1, x = -1;
        a ? (m = a.parenthesizedAssign, v = a.trailingComma, x = a.doubleProto, a.parenthesizedAssign = a.trailingComma = -1) : (a = new at(), l = !0);
        var g = this.start, b = this.startLoc;
        (this.type === o.parenL || q(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = s === "await");
        var S = this.parseMaybeConditional(s, a);
        if (c && (S = c.call(this, S, g, b)), this.type.isAssign) {
          var N = this.startNodeAt(g, b);
          return N.operator = this.value, this.type === o.eq && (S = this.toAssignable(S, !0, a)), l || (a.parenthesizedAssign = a.trailingComma = a.doubleProto = -1), a.shorthandAssign >= S.start && (a.shorthandAssign = -1), this.type === o.eq ? this.checkLValPattern(S) : this.checkLValSimple(S), N.left = S, this.next(), N.right = this.parseMaybeAssign(s), x > -1 && (a.doubleProto = x), this.finishNode(N, "AssignmentExpression");
        }
        return l && this.checkExpressionErrors(a, !0), m > -1 && (a.parenthesizedAssign = m), v > -1 && (a.trailingComma = v), S;
      }, f.parseMaybeAssign = function(s, a, c) {
        var l, m, v, x, g, b, S, N, M, A, G, W = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (N = this.cloneCurLookaheadState(), !(M = this.tryParse(function() {
            return W.parseMaybeAssignOrigin(s, a, c);
          }, N)).error) return M.node;
          var J = this.context, re = J[J.length - 1];
          re === y.tokContexts.tc_oTag && J[J.length - 2] === y.tokContexts.tc_expr ? (J.pop(), J.pop()) : re !== y.tokContexts.tc_oTag && re !== y.tokContexts.tc_expr || J.pop();
        }
        if (!((l = M) != null && l.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(s, a, c);
        N && !this.compareLookaheadState(N, this.getCurLookaheadState()) || (N = this.cloneCurLookaheadState());
        var de = this.tryParse(function(Le) {
          var rt, st;
          G = W.tsParseTypeParameters();
          var Oe = W.parseMaybeAssignOrigin(s, a, c);
          return (Oe.type !== "ArrowFunctionExpression" || (rt = Oe.extra) != null && rt.parenthesized) && Le(), ((st = G) == null ? void 0 : st.params.length) !== 0 && W.resetStartLocationFromNode(Oe, G), Oe.typeParameters = G, Oe;
        }, N);
        if (!de.error && !de.aborted) return G && this.reportReservedArrowTypeParam(G), de.node;
        if (!M && (Vi(!0), !(A = this.tryParse(function() {
          return W.parseMaybeAssignOrigin(s, a, c);
        }, N)).error)) return A.node;
        if ((m = M) != null && m.node) return this.setLookaheadState(M.failState), M.node;
        if (de.node) return this.setLookaheadState(de.failState), G && this.reportReservedArrowTypeParam(G), de.node;
        if ((v = A) != null && v.node) return this.setLookaheadState(A.failState), A.node;
        throw (x = M) != null && x.thrown ? M.error : de.thrown ? de.error : (g = A) != null && g.thrown ? A.error : ((b = M) == null ? void 0 : b.error) || de.error || ((S = A) == null ? void 0 : S.error);
      }, f.parseAssignableListItem = function(s) {
        for (var a = []; this.match(L.at); ) a.push(this.parseDecorator());
        var c, l = this.start, m = this.startLoc, v = !1, x = !1;
        if (s !== void 0) {
          var g = {};
          this.tsParseModifiers({ modified: g, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), c = g.accessibility, x = g.override, v = g.readonly, s === !1 && (c || v || x) && this.raise(m.start, I.UnexpectedParameterModifier);
        }
        var b = this.parseMaybeDefault(l, m);
        this.parseBindingListItem(b);
        var S = this.parseMaybeDefault(b.start, b.loc, b);
        if (a.length && (S.decorators = a), c || v || x) {
          var N = this.startNodeAt(l, m);
          return c && (N.accessibility = c), v && (N.readonly = v), x && (N.override = x), S.type !== "Identifier" && S.type !== "AssignmentPattern" && this.raise(N.start, I.UnsupportedParameterPropertyKind), N.parameter = S, this.finishNode(N, "TSParameterProperty");
        }
        return S;
      }, f.checkLValInnerPattern = function(s, a, c) {
        a === void 0 && (a = 0), s.type === "TSParameterProperty" ? this.checkLValInnerPattern(s.parameter, a, c) : w.prototype.checkLValInnerPattern.call(this, s, a, c);
      }, f.parseBindingListItem = function(s) {
        this.eat(o.question) && (s.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(s.start, I.PatternIsOptional), s.optional = !0);
        var a = this.tsTryParseTypeAnnotation();
        return a && (s.typeAnnotation = a), this.resetEndLocation(s), s;
      }, f.isAssignable = function(s, a) {
        var c = this;
        switch (s.type) {
          case "TSTypeCastExpression":
            return this.isAssignable(s.expression, a);
          case "TSParameterProperty":
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            return !0;
          case "ObjectExpression":
            var l = s.properties.length - 1;
            return s.properties.every(function(m, v) {
              return m.type !== "ObjectMethod" && (v === l || m.type !== "SpreadElement") && c.isAssignable(m);
            });
          case "Property":
          case "ObjectProperty":
            return this.isAssignable(s.value);
          case "SpreadElement":
            return this.isAssignable(s.argument);
          case "ArrayExpression":
            return s.elements.every(function(m) {
              return m === null || c.isAssignable(m);
            });
          case "AssignmentExpression":
            return s.operator === "=";
          case "ParenthesizedExpression":
            return this.isAssignable(s.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !a;
          default:
            return !1;
        }
      }, f.toAssignable = function(s, a, c) {
        switch (a === void 0 && (a = !1), c === void 0 && (c = new at()), s.type) {
          case "ParenthesizedExpression":
            return this.toAssignableParenthesizedExpression(s, a, c);
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            return a || this.raise(s.start, I.UnexpectedTypeCastInParameter), this.toAssignable(s.expression, a, c);
          case "MemberExpression":
            break;
          case "AssignmentExpression":
            return a || s.left.type !== "TSTypeCastExpression" || (s.left = this.typeCastToParameter(s.left)), w.prototype.toAssignable.call(this, s, a, c);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(s);
          default:
            return w.prototype.toAssignable.call(this, s, a, c);
        }
        return s;
      }, f.toAssignableParenthesizedExpression = function(s, a, c) {
        switch (s.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            return this.toAssignable(s.expression, a, c);
          default:
            return w.prototype.toAssignable.call(this, s, a, c);
        }
      }, f.curPosition = function() {
        if (this.options.locations) {
          var s = w.prototype.curPosition.call(this);
          return Object.defineProperty(s, "offset", { get: function() {
            return function(a) {
              var c = new d.Position(this.line, this.column + a);
              return c.index = this.index + a, c;
            };
          } }), s.index = this.pos, s;
        }
      }, f.parseBindingAtom = function() {
        return this.type === o._this ? this.parseIdent(!0) : w.prototype.parseBindingAtom.call(this);
      }, f.shouldParseArrow = function(s) {
        var a, c = this;
        if (a = this.match(o.colon) ? s.every(function(m) {
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
        return this.shouldParseArrowReturnType = void 0, a;
      }, f.parseParenArrowList = function(s, a, c, l) {
        var m = this.startNodeAt(s, a);
        return m.returnType = this.shouldParseArrowReturnType, this.shouldParseArrowReturnType = void 0, this.parseArrowExpression(m, c, !1, l);
      }, f.parseParenAndDistinguishExpression = function(s, a) {
        var c, l = this.start, m = this.startLoc, v = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          var x = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0, this.next();
          var g, b = this.start, S = this.startLoc, N = [], M = !0, A = !1, G = new at(), W = this.yieldPos, J = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== o.parenR; ) {
            if (M ? M = !1 : this.expect(o.comma), v && this.afterTrailingComma(o.parenR, !0)) {
              A = !0;
              break;
            }
            if (this.type === o.ellipsis) {
              g = this.start, N.push(this.parseParenItem(this.parseRestBinding())), this.type === o.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            N.push(this.parseMaybeAssign(a, G, this.parseParenItem));
          }
          var re = this.lastTokEnd, de = this.lastTokEndLoc;
          if (this.expect(o.parenR), this.maybeInArrowParameters = x, s && this.shouldParseArrow(N) && this.eat(o.arrow)) return this.checkPatternErrors(G, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = W, this.awaitPos = J, this.parseParenArrowList(l, m, N, a);
          N.length && !A || this.unexpected(this.lastTokStart), g && this.unexpected(g), this.checkExpressionErrors(G, !0), this.yieldPos = W || this.yieldPos, this.awaitPos = J || this.awaitPos, N.length > 1 ? ((c = this.startNodeAt(b, S)).expressions = N, this.finishNodeAt(c, "SequenceExpression", re, de)) : c = N[0];
        } else c = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Le = this.startNodeAt(l, m);
          return Le.expression = c, this.finishNode(Le, "ParenthesizedExpression");
        }
        return c;
      }, f.parseTaggedTemplateExpression = function(s, a, c, l) {
        var m = this.startNodeAt(a, c);
        return m.tag = s, m.quasi = this.parseTemplate({ isTagged: !0 }), l && this.raise(a, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(m, "TaggedTemplateExpression");
      }, f.shouldParseAsyncArrow = function() {
        var s = this;
        if (!this.match(o.colon)) return !this.canInsertSemicolon() && this.eat(o.arrow);
        var a = this.tryParse(function(c) {
          var l = s.tsParseTypeOrTypePredicateAnnotation(o.colon);
          return !s.canInsertSemicolon() && s.match(o.arrow) || c(), l;
        });
        return a.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : a.thrown ? void 0 : (a.error && this.setLookaheadState(a.failState), this.shouldParseAsyncArrowReturnType = a.node, !this.canInsertSemicolon() && this.eat(o.arrow));
      }, f.parseSubscriptAsyncArrow = function(s, a, c, l) {
        var m = this.startNodeAt(s, a);
        return m.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(m, c, !0, l);
      }, f.parseExprList = function(s, a, c, l) {
        for (var m = [], v = !0; !this.eat(s); ) {
          if (v) v = !1;
          else if (this.expect(o.comma), a && this.afterTrailingComma(s)) break;
          var x = void 0;
          c && this.type === o.comma ? x = null : this.type === o.ellipsis ? (x = this.parseSpread(l), l && this.type === o.comma && l.trailingComma < 0 && (l.trailingComma = this.start)) : x = this.parseMaybeAssign(!1, l, this.parseParenItem), m.push(x);
        }
        return m;
      }, f.parseSubscript = function(s, a, c, l, m, v, x) {
        var g = this, b = v;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(o.prefix)) {
          this.exprAllowed = !1, this.next();
          var S = this.startNodeAt(a, c);
          return S.expression = s, s = this.finishNode(S, "TSNonNullExpression");
        }
        var N = !1;
        if (this.match(o.questionDot) && this.lookaheadCharCode() === 60) {
          if (l) return s;
          s.optional = !0, b = N = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(o.bitShift)) {
          var M, A = this.tsTryParseAndCatch(function() {
            if (!l && g.atPossibleAsyncArrow(s)) {
              var wi = g.tsTryParseGenericAsyncArrowFunction(a, c, x);
              if (wi) return s = wi;
            }
            var gt = g.tsParseTypeArgumentsInExpression();
            if (!gt) return s;
            if (N && !g.match(o.parenL)) return M = g.curPosition(), s;
            if (ve(g.type) || g.type === o.backQuote) {
              var Ti = g.parseTaggedTemplateExpression(s, a, c, b);
              return Ti.typeParameters = gt, Ti;
            }
            if (!l && g.eat(o.parenL)) {
              var Pi = new at(), Ue = g.startNodeAt(a, c);
              return Ue.callee = s, Ue.arguments = g.parseExprList(o.parenR, g.options.ecmaVersion >= 8, !1, Pi), g.tsCheckForInvalidTypeCasts(Ue.arguments), Ue.typeParameters = gt, b && (Ue.optional = N), g.checkExpressionErrors(Pi, !0), s = g.finishNode(Ue, "CallExpression");
            }
            var qt = g.type;
            if (!(g.tsMatchRightRelational() || qt === o.bitShift || qt !== o.parenL && (Ci = qt, !!Ci.startsExpr) && !g.hasPrecedingLineBreak())) {
              var Ci, Ht = g.startNodeAt(a, c);
              return Ht.expression = s, Ht.typeParameters = gt, g.finishNode(Ht, "TSInstantiationExpression");
            }
          });
          if (M && this.unexpected(M), A) return A.type === "TSInstantiationExpression" && (this.match(o.dot) || this.match(o.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, I.InvalidPropertyAccessAfterInstantiationExpression), s = A;
        }
        var G = this.options.ecmaVersion >= 11, W = G && this.eat(o.questionDot);
        l && W && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var J = this.eat(o.bracketL);
        if (J || W && this.type !== o.parenL && this.type !== o.backQuote || this.eat(o.dot)) {
          var re = this.startNodeAt(a, c);
          re.object = s, J ? (re.property = this.parseExpression(), this.expect(o.bracketR)) : re.property = this.type === o.privateId && s.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), re.computed = !!J, G && (re.optional = W), s = this.finishNode(re, "MemberExpression");
        } else if (!l && this.eat(o.parenL)) {
          var de = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var Le = new at(), rt = this.yieldPos, st = this.awaitPos, Oe = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var Si = this.parseExprList(o.parenR, this.options.ecmaVersion >= 8, !1, Le);
          if (m && !W && this.shouldParseAsyncArrow()) this.checkPatternErrors(Le, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = rt, this.awaitPos = st, this.awaitIdentPos = Oe, s = this.parseSubscriptAsyncArrow(a, c, Si, x);
          else {
            this.checkExpressionErrors(Le, !0), this.yieldPos = rt || this.yieldPos, this.awaitPos = st || this.awaitPos, this.awaitIdentPos = Oe || this.awaitIdentPos;
            var xt = this.startNodeAt(a, c);
            xt.callee = s, xt.arguments = Si, G && (xt.optional = W), s = this.finishNode(xt, "CallExpression");
          }
          this.maybeInArrowParameters = de;
        } else if (this.type === o.backQuote) {
          (W || b) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var Ut = this.startNodeAt(a, c);
          Ut.tag = s, Ut.quasi = this.parseTemplate({ isTagged: !0 }), s = this.finishNode(Ut, "TaggedTemplateExpression");
        }
        return s;
      }, f.parseGetterSetter = function(s) {
        s.kind = s.key.name, this.parsePropertyName(s), s.value = this.parseMethod(!1);
        var a = s.kind === "get" ? 0 : 1, c = s.value.params[0], l = c && this.isThisParam(c);
        s.value.params.length !== (a = l ? a + 1 : a) ? this.raiseRecoverable(s.value.start, s.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : s.kind === "set" && s.value.params[0].type === "RestElement" && this.raiseRecoverable(s.value.params[0].start, "Setter cannot use rest params");
      }, f.parseProperty = function(s, a) {
        if (!s) {
          var c = [];
          if (this.match(L.at)) for (; this.match(L.at); ) c.push(this.parseDecorator());
          var l = w.prototype.parseProperty.call(this, s, a);
          return l.type === "SpreadElement" && c.length && this.raise(l.start, "Decorators can't be used with SpreadElement"), c.length && (l.decorators = c, c = []), l;
        }
        return w.prototype.parseProperty.call(this, s, a);
      }, f.parseCatchClauseParam = function() {
        var s = this.parseBindingAtom(), a = s.type === "Identifier";
        this.enterScope(a ? 32 : 0), this.checkLValPattern(s, a ? 4 : 2);
        var c = this.tsTryParseTypeAnnotation();
        return c && (s.typeAnnotation = c, this.resetEndLocation(s)), this.expect(o.parenR), s;
      }, f.parseClass = function(s, a) {
        var c = this.inAbstractClass;
        this.inAbstractClass = !!s.abstract;
        try {
          this.next(), this.takeDecorators(s);
          var l = this.strict;
          this.strict = !0, this.parseClassId(s, a), this.parseClassSuper(s);
          var m = this.enterClassBody(), v = this.startNode(), x = !1;
          v.body = [];
          var g = [];
          for (this.expect(o.braceL); this.type !== o.braceR; ) if (this.match(L.at)) g.push(this.parseDecorator());
          else {
            var b = this.parseClassElement(s.superClass !== null);
            g.length && (b.decorators = g, this.resetStartLocationFromNode(b, g[0]), g = []), b && (v.body.push(b), b.type === "MethodDefinition" && b.kind === "constructor" && b.value.type === "FunctionExpression" ? (x && this.raiseRecoverable(b.start, "Duplicate constructor in the same class"), x = !0, b.decorators && b.decorators.length > 0 && this.raise(b.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : b.key && b.key.type === "PrivateIdentifier" && pn(m, b) && this.raiseRecoverable(b.key.start, "Identifier '#" + b.key.name + "' has already been declared"));
          }
          return this.strict = l, this.next(), g.length && this.raise(this.start, "Decorators must be attached to a class element."), s.body = this.finishNode(v, "ClassBody"), this.exitClassBody(), this.finishNode(s, a ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = c;
        }
      }, f.parseClassFunctionParams = function() {
        var s = this.tsTryParseTypeParameters(this.tsParseConstModifier), a = this.parseBindingList(o.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return s && (a.typeParameters = s), a;
      }, f.parseMethod = function(s, a, c, l, m) {
        var v = this.startNode(), x = this.yieldPos, g = this.awaitPos, b = this.awaitIdentPos;
        if (this.initFunction(v), this.options.ecmaVersion >= 6 && (v.generator = s), this.options.ecmaVersion >= 8 && (v.async = !!a), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Xt(a, v.generator) | (c ? 128 : 0)), this.expect(o.parenL), v.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(v, !1, !0, !1, { isClassMethod: l }), this.yieldPos = x, this.awaitPos = g, this.awaitIdentPos = b, m && m.abstract && v.body) {
          var S = m.key;
          this.raise(m.start, I.AbstractMethodHasImplementation({ methodName: S.type !== "Identifier" || m.computed ? "[" + this.input.slice(S.start, S.end) + "]" : S.name }));
        }
        return this.finishNode(v, "FunctionExpression");
      }, pe.parse = function(s, a) {
        if (a.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        a.locations = !0;
        var c = new this(a, s);
        return r && (c.isAmbientContext = !0), c.parse();
      }, pe.parseExpressionAt = function(s, a, c) {
        if (c.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        c.locations = !0;
        var l = new this(c, s, a);
        return r && (l.isAmbientContext = !0), l.nextToken(), l.parseExpression();
      }, f.parseImportSpecifier = function() {
        if (this.ts_isContextual(L.type)) {
          var s = this.startNode();
          return s.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(s, !0, this.importOrExportOuterKind === "type"), this.finishNode(s, "ImportSpecifier");
        }
        var a = w.prototype.parseImportSpecifier.call(this);
        return a.importKind = "value", a;
      }, f.parseExportSpecifier = function(s) {
        var a = this.ts_isContextual(L.type);
        if (!this.match(o.string) && a) {
          var c = this.startNode();
          return c.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(c, !1, this.importOrExportOuterKind === "type"), this.finishNode(c, "ExportSpecifier"), this.checkExport(s, c.exported, c.exported.start), c;
        }
        var l = w.prototype.parseExportSpecifier.call(this, s);
        return l.exportKind = "value", l;
      }, f.parseTypeOnlyImportExportSpecifier = function(s, a, c) {
        var l, m = a ? "imported" : "local", v = a ? "local" : "exported", x = s[m], g = !1, b = !0, S = x.start;
        if (this.isContextual("as")) {
          var N = this.parseIdent();
          if (this.isContextual("as")) {
            var M = this.parseIdent();
            vt(this.type) ? (g = !0, x = N, l = a ? this.parseIdent() : this.parseModuleExportName(), b = !1) : (l = M, b = !1);
          } else vt(this.type) ? (b = !1, l = a ? this.parseIdent() : this.parseModuleExportName()) : (g = !0, x = N);
        } else vt(this.type) && (g = !0, a ? (x = w.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(x)) : x = this.parseModuleExportName());
        g && c && this.raise(S, a ? I.TypeModifierIsUsedInTypeImports : I.TypeModifierIsUsedInTypeExports), s[m] = x, s[v] = l, s[a ? "importKind" : "exportKind"] = g ? "type" : "value", b && this.eatContextual("as") && (s[v] = a ? this.parseIdent() : this.parseModuleExportName()), s[v] || (s[v] = this.copyNode(s[m])), a && this.checkLValSimple(s[v], 2);
      }, f.raiseCommonCheck = function(s, a, c) {
        return a === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(o.comma) && this.lookaheadCharCode() === 41 ? void this.next() : w.prototype.raise.call(this, s, a) : c ? w.prototype.raiseRecoverable.call(this, s, a) : w.prototype.raise.call(this, s, a);
      }, f.raiseRecoverable = function(s, a) {
        return this.raiseCommonCheck(s, a, !0);
      }, f.raise = function(s, a) {
        return this.raiseCommonCheck(s, a, !0);
      }, f.updateContext = function(s) {
        var a = this.type;
        if (a == o.braceL) {
          var c = this.curContext();
          c == se.tc_oTag ? this.context.push(Z.b_expr) : c == se.tc_expr ? this.context.push(Z.b_tmpl) : w.prototype.updateContext.call(this, s), this.exprAllowed = !0;
        } else {
          if (a !== o.slash || s !== L.jsxTagStart) return w.prototype.updateContext.call(this, s);
          this.context.length -= 2, this.context.push(se.tc_cTag), this.exprAllowed = !1;
        }
      }, f.jsx_parseOpeningElementAt = function(s, a) {
        var c = this, l = this.startNodeAt(s, a), m = this.jsx_parseElementName();
        if (m && (l.name = m), this.match(o.relational) || this.match(o.bitShift)) {
          var v = this.tsTryParseAndCatch(function() {
            return c.tsParseTypeArgumentsInExpression();
          });
          v && (l.typeParameters = v);
        }
        for (l.attributes = []; this.type !== o.slash && this.type !== L.jsxTagEnd; ) l.attributes.push(this.jsx_parseAttribute());
        return l.selfClosing = this.eat(o.slash), this.expect(L.jsxTagEnd), this.finishNode(l, m ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, f.enterScope = function(s) {
        s === nt && this.importsStack.push([]), w.prototype.enterScope.call(this, s);
        var a = w.prototype.currentScope.call(this);
        a.types = [], a.enums = [], a.constEnums = [], a.classes = [], a.exportOnlyBindings = [];
      }, f.exitScope = function() {
        w.prototype.currentScope.call(this).flags === nt && this.importsStack.pop(), w.prototype.exitScope.call(this);
      }, f.hasImport = function(s, a) {
        var c = this.importsStack.length;
        if (this.importsStack[c - 1].indexOf(s) > -1) return !0;
        if (!a && c > 1) {
          for (var l = 0; l < c - 1; l++) if (this.importsStack[l].indexOf(s) > -1) return !0;
        }
        return !1;
      }, f.maybeExportDefined = function(s, a) {
        this.inModule && 1 & s.flags && this.undefinedExports.delete(a);
      }, f.isRedeclaredInScope = function(s, a, c) {
        return !!(0 & c) && (2 & c ? s.lexical.indexOf(a) > -1 || s.functions.indexOf(a) > -1 || s.var.indexOf(a) > -1 : 3 & c ? s.lexical.indexOf(a) > -1 || !w.prototype.treatFunctionsAsVarInScope.call(this, s) && s.var.indexOf(a) > -1 : s.lexical.indexOf(a) > -1 && !(32 & s.flags && s.lexical[0] === a) || !this.treatFunctionsAsVarInScope(s) && s.functions.indexOf(a) > -1);
      }, f.checkRedeclarationInScope = function(s, a, c, l) {
        this.isRedeclaredInScope(s, a, c) && this.raise(l, "Identifier '" + a + "' has already been declared.");
      }, f.declareName = function(s, a, c) {
        if (4096 & a) return this.hasImport(s, !0) && this.raise(c, "Identifier '" + s + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(s);
        var l = this.currentScope();
        if (1024 & a) return this.maybeExportDefined(l, s), void l.exportOnlyBindings.push(s);
        w.prototype.declareName.call(this, s, a, c), 0 & a && (0 & a || (this.checkRedeclarationInScope(l, s, a, c), this.maybeExportDefined(l, s)), l.types.push(s)), 256 & a && l.enums.push(s), 512 & a && l.constEnums.push(s), 128 & a && l.classes.push(s);
      }, f.checkLocalExport = function(s) {
        var a = s.name;
        if (!this.hasImport(a)) {
          for (var c = this.scopeStack.length - 1; c >= 0; c--) {
            var l = this.scopeStack[c];
            if (l.types.indexOf(a) > -1 || l.exportOnlyBindings.indexOf(a) > -1) return;
          }
          w.prototype.checkLocalExport.call(this, s);
        }
      }, oe = pe, B = [{ key: "acornTypeScript", get: function() {
        return y;
      } }], (te = [{ key: "acornTypeScript", get: function() {
        return y;
      } }]) && Oi(oe.prototype, te), B && Oi(oe, B), Object.defineProperty(oe, "prototype", { writable: !1 }), pe;
    })(h);
    return ys;
  };
}
const gn = ["createObject", "dropObject", "removeRecords", "upsertRecords"], bn = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"];
function _(e, t, i) {
  function r(d, y) {
    if (d._zod || Object.defineProperty(d, "_zod", {
      value: {
        def: y,
        constr: h,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), d._zod.traits.has(e))
      return;
    d._zod.traits.add(e), t(d, y);
    const o = h.prototype, k = Object.keys(o);
    for (let P = 0; P < k.length; P++) {
      const R = k[P];
      R in d || (d[R] = o[R].bind(d));
    }
  }
  const n = i?.Parent ?? Object;
  class u extends n {
  }
  Object.defineProperty(u, "name", { value: e });
  function h(d) {
    var y;
    const o = i?.Parent ? new u() : this;
    r(o, d), (y = o._zod).deferred ?? (y.deferred = []);
    for (const k of o._zod.deferred)
      k();
    return o;
  }
  return Object.defineProperty(h, "init", { value: r }), Object.defineProperty(h, Symbol.hasInstance, {
    value: (d) => i?.Parent && d instanceof i.Parent ? !0 : d?._zod?.traits?.has(e)
  }), Object.defineProperty(h, "name", { value: e }), h;
}
class We extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Ur extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const qr = {};
function De(e) {
  return qr;
}
function _n(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, n]) => t.indexOf(+r) === -1).map(([r, n]) => n);
}
function si(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function mi(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function yi(e) {
  return e == null;
}
function vi(e) {
  const t = e.startsWith("^") ? 1 : 0, i = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, i);
}
function kn(e, t) {
  const i = (e.toString().split(".")[1] || "").length, r = t.toString();
  let n = (r.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(r)) {
    const y = r.match(/\d?e-(\d?)/);
    y?.[1] && (n = Number.parseInt(y[1]));
  }
  const u = i > n ? i : n, h = Number.parseInt(e.toFixed(u).replace(".", "")), d = Number.parseInt(t.toFixed(u).replace(".", ""));
  return h % d / 10 ** u;
}
const ji = Symbol("evaluating");
function U(e, t, i) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== ji)
        return r === void 0 && (r = ji, r = i()), r;
    },
    set(n) {
      Object.defineProperty(e, t, {
        value: n
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Be(e, t, i) {
  Object.defineProperty(e, t, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ze(...e) {
  const t = {};
  for (const i of e) {
    const r = Object.getOwnPropertyDescriptors(i);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function $i(e) {
  return JSON.stringify(e);
}
function Sn(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Hr = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Nt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const wn = mi(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Je(e) {
  if (Nt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const i = t.prototype;
  return !(Nt(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function Wr(e) {
  return Je(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Tn = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Xe(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ve(e, t, i) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || i?.parent) && (r._zod.parent = e), r;
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
function Pn(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Cn = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function An(e, t) {
  const i = e._zod.def, r = Ze(e._zod.def, {
    get shape() {
      const n = {};
      for (const u in t) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        t[u] && (n[u] = i.shape[u]);
      }
      return Be(this, "shape", n), n;
    },
    checks: []
  });
  return Ve(e, r);
}
function En(e, t) {
  const i = e._zod.def, r = Ze(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape };
      for (const u in t) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        t[u] && delete n[u];
      }
      return Be(this, "shape", n), n;
    },
    checks: []
  });
  return Ve(e, r);
}
function In(e, t) {
  if (!Je(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = e._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const n = Ze(e._zod.def, {
    get shape() {
      const u = { ...e._zod.def.shape, ...t };
      return Be(this, "shape", u), u;
    },
    checks: []
  });
  return Ve(e, n);
}
function Nn(e, t) {
  if (!Je(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...e._zod.def,
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return Be(this, "shape", r), r;
    },
    checks: e._zod.def.checks
  };
  return Ve(e, i);
}
function Ln(e, t) {
  const i = Ze(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Be(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Ve(e, i);
}
function On(e, t, i) {
  const r = Ze(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, u = { ...n };
      if (i)
        for (const h in i) {
          if (!(h in n))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (u[h] = e ? new e({
            type: "optional",
            innerType: n[h]
          }) : n[h]);
        }
      else
        for (const h in n)
          u[h] = e ? new e({
            type: "optional",
            innerType: n[h]
          }) : n[h];
      return Be(this, "shape", u), u;
    },
    checks: []
  });
  return Ve(t, r);
}
function Rn(e, t, i) {
  const r = Ze(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, u = { ...n };
      if (i)
        for (const h in i) {
          if (!(h in u))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (u[h] = new e({
            type: "nonoptional",
            innerType: n[h]
          }));
        }
      else
        for (const h in n)
          u[h] = new e({
            type: "nonoptional",
            innerType: n[h]
          });
      return Be(this, "shape", u), u;
    },
    checks: []
  });
  return Ve(t, r);
}
function qe(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let i = t; i < e.issues.length; i++)
    if (e.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function He(e, t) {
  return t.map((i) => {
    var r;
    return (r = i).path ?? (r.path = []), i.path.unshift(e), i;
  });
}
function _t(e) {
  return typeof e == "string" ? e : e?.message;
}
function Me(e, t, i) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = _t(e.inst?._zod.def?.error?.(e)) ?? _t(t?.error?.(e)) ?? _t(i.customError?.(e)) ?? _t(i.localeError?.(e)) ?? "Invalid input";
    r.message = n;
  }
  return delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function xi(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function pt(...e) {
  const [t, i, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: i,
    inst: r
  } : { ...t };
}
const Kr = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, si, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Gr = _("$ZodError", Kr), Jr = _("$ZodError", Kr, { Parent: Error });
function Dn(e, t = (i) => i.message) {
  const i = {}, r = [];
  for (const n of e.issues)
    n.path.length > 0 ? (i[n.path[0]] = i[n.path[0]] || [], i[n.path[0]].push(t(n))) : r.push(t(n));
  return { formErrors: r, fieldErrors: i };
}
function Mn(e, t = (i) => i.message) {
  const i = { _errors: [] }, r = (n) => {
    for (const u of n.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((h) => r({ issues: h }));
      else if (u.code === "invalid_key")
        r({ issues: u.issues });
      else if (u.code === "invalid_element")
        r({ issues: u.issues });
      else if (u.path.length === 0)
        i._errors.push(t(u));
      else {
        let h = i, d = 0;
        for (; d < u.path.length; ) {
          const y = u.path[d];
          d === u.path.length - 1 ? (h[y] = h[y] || { _errors: [] }, h[y]._errors.push(t(u))) : h[y] = h[y] || { _errors: [] }, h = h[y], d++;
        }
      }
  };
  return r(e), i;
}
const gi = (e) => (t, i, r, n) => {
  const u = r ? Object.assign(r, { async: !1 }) : { async: !1 }, h = t._zod.run({ value: i, issues: [] }, u);
  if (h instanceof Promise)
    throw new We();
  if (h.issues.length) {
    const d = new (n?.Err ?? e)(h.issues.map((y) => Me(y, u, De())));
    throw Hr(d, n?.callee), d;
  }
  return h.value;
}, bi = (e) => async (t, i, r, n) => {
  const u = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let h = t._zod.run({ value: i, issues: [] }, u);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const d = new (n?.Err ?? e)(h.issues.map((y) => Me(y, u, De())));
    throw Hr(d, n?.callee), d;
  }
  return h.value;
}, jt = (e) => (t, i, r) => {
  const n = r ? { ...r, async: !1 } : { async: !1 }, u = t._zod.run({ value: i, issues: [] }, n);
  if (u instanceof Promise)
    throw new We();
  return u.issues.length ? {
    success: !1,
    error: new (e ?? Gr)(u.issues.map((h) => Me(h, n, De())))
  } : { success: !0, data: u.value };
}, zn = /* @__PURE__ */ jt(Jr), $t = (e) => async (t, i, r) => {
  const n = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let u = t._zod.run({ value: i, issues: [] }, n);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new e(u.issues.map((h) => Me(h, n, De())))
  } : { success: !0, data: u.value };
}, Vn = /* @__PURE__ */ $t(Jr), Fn = (e) => (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return gi(e)(t, i, n);
}, jn = (e) => (t, i, r) => gi(e)(t, i, r), $n = (e) => async (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return bi(e)(t, i, n);
}, Bn = (e) => async (t, i, r) => bi(e)(t, i, r), Zn = (e) => (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return jt(e)(t, i, n);
}, Un = (e) => (t, i, r) => jt(e)(t, i, r), qn = (e) => async (t, i, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return $t(e)(t, i, n);
}, Hn = (e) => async (t, i, r) => $t(e)(t, i, r), Wn = /^[cC][^\s-]{8,}$/, Kn = /^[0-9a-z]+$/, Gn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Jn = /^[0-9a-vA-V]{20}$/, Xn = /^[A-Za-z0-9]{27}$/, Qn = /^[a-zA-Z0-9_-]{21}$/, Yn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, ea = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Bi = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ta = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, ia = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function ra() {
  return new RegExp(ia, "u");
}
const sa = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, na = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, aa = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, oa = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ua = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Xr = /^[A-Za-z0-9_-]*$/, ca = /^\+(?:[0-9]){6,14}[0-9]$/, Qr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", ha = /* @__PURE__ */ new RegExp(`^${Qr}$`);
function Yr(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function pa(e) {
  return new RegExp(`^${Yr(e)}$`);
}
function la(e) {
  const t = Yr({ precision: e.precision }), i = ["Z"];
  e.local && i.push(""), e.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${i.join("|")})`;
  return new RegExp(`^${Qr}T(?:${r})$`);
}
const fa = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, da = /^-?\d+$/, ma = /^-?\d+(?:\.\d+)?/, ya = /^(?:true|false)$/i, va = /^[^A-Z]*$/, xa = /^[^a-z]*$/, fe = /* @__PURE__ */ _("$ZodCheck", (e, t) => {
  var i;
  e._zod ?? (e._zod = {}), e._zod.def = t, (i = e._zod).onattach ?? (i.onattach = []);
}), es = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, ts = /* @__PURE__ */ _("$ZodCheckLessThan", (e, t) => {
  fe.init(e, t);
  const i = es[typeof t.value];
  e._zod.onattach.push((r) => {
    const n = r._zod.bag, u = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < u && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), is = /* @__PURE__ */ _("$ZodCheckGreaterThan", (e, t) => {
  fe.init(e, t);
  const i = es[typeof t.value];
  e._zod.onattach.push((r) => {
    const n = r._zod.bag, u = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > u && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), ga = /* @__PURE__ */ _("$ZodCheckMultipleOf", (e, t) => {
  fe.init(e, t), e._zod.onattach.push((i) => {
    var r;
    (r = i._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (i) => {
    if (typeof i.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % t.value === BigInt(0) : kn(i.value, t.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ba = /* @__PURE__ */ _("$ZodCheckNumberFormat", (e, t) => {
  fe.init(e, t), t.format = t.format || "float64";
  const i = t.format?.includes("int"), r = i ? "int" : "number", [n, u] = Cn[t.format];
  e._zod.onattach.push((h) => {
    const d = h._zod.bag;
    d.format = t.format, d.minimum = n, d.maximum = u, i && (d.pattern = da);
  }), e._zod.check = (h) => {
    const d = h.value;
    if (i) {
      if (!Number.isInteger(d)) {
        h.issues.push({
          expected: r,
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
          origin: r,
          continue: !t.abort
        }) : h.issues.push({
          input: d,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !t.abort
        });
        return;
      }
    }
    d < n && h.issues.push({
      origin: "number",
      input: d,
      code: "too_small",
      minimum: n,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), d > u && h.issues.push({
      origin: "number",
      input: d,
      code: "too_big",
      maximum: u,
      inst: e
    });
  };
}), _a = /* @__PURE__ */ _("$ZodCheckMaxLength", (e, t) => {
  var i;
  fe.init(e, t), (i = e._zod.def).when ?? (i.when = (r) => {
    const n = r.value;
    return !yi(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length <= t.maximum)
      return;
    const h = xi(n);
    r.issues.push({
      origin: h,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), ka = /* @__PURE__ */ _("$ZodCheckMinLength", (e, t) => {
  var i;
  fe.init(e, t), (i = e._zod.def).when ?? (i.when = (r) => {
    const n = r.value;
    return !yi(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length >= t.minimum)
      return;
    const h = xi(n);
    r.issues.push({
      origin: h,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Sa = /* @__PURE__ */ _("$ZodCheckLengthEquals", (e, t) => {
  var i;
  fe.init(e, t), (i = e._zod.def).when ?? (i.when = (r) => {
    const n = r.value;
    return !yi(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (r) => {
    const n = r.value, u = n.length;
    if (u === t.length)
      return;
    const h = xi(n), d = u > t.length;
    r.issues.push({
      origin: h,
      ...d ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Bt = /* @__PURE__ */ _("$ZodCheckStringFormat", (e, t) => {
  var i, r;
  fe.init(e, t), e._zod.onattach.push((n) => {
    const u = n._zod.bag;
    u.format = t.format, t.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(t.pattern));
  }), t.pattern ? (i = e._zod).check ?? (i.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), wa = /* @__PURE__ */ _("$ZodCheckRegex", (e, t) => {
  Bt.init(e, t), e._zod.check = (i) => {
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
}), Ta = /* @__PURE__ */ _("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = va), Bt.init(e, t);
}), Pa = /* @__PURE__ */ _("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = xa), Bt.init(e, t);
}), Ca = /* @__PURE__ */ _("$ZodCheckIncludes", (e, t) => {
  fe.init(e, t);
  const i = Xe(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${i}` : i);
  t.pattern = r, e._zod.onattach.push((n) => {
    const u = n._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.includes(t.includes, t.position) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Aa = /* @__PURE__ */ _("$ZodCheckStartsWith", (e, t) => {
  fe.init(e, t);
  const i = new RegExp(`^${Xe(t.prefix)}.*`);
  t.pattern ?? (t.pattern = i), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(i);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ea = /* @__PURE__ */ _("$ZodCheckEndsWith", (e, t) => {
  fe.init(e, t);
  const i = new RegExp(`.*${Xe(t.suffix)}$`);
  t.pattern ?? (t.pattern = i), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(i);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ia = /* @__PURE__ */ _("$ZodCheckOverwrite", (e, t) => {
  fe.init(e, t), e._zod.check = (i) => {
    i.value = t.tx(i.value);
  };
});
class Na {
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
    const r = t.split(`
`).filter((h) => h), n = Math.min(...r.map((h) => h.length - h.trimStart().length)), u = r.map((h) => h.slice(n)).map((h) => " ".repeat(this.indent * 2) + h);
    for (const h of u)
      this.content.push(h);
  }
  compile() {
    const t = Function, i = this?.args, n = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new t(...i, n.join(`
`));
  }
}
const La = {
  major: 4,
  minor: 1,
  patch: 13
}, Q = /* @__PURE__ */ _("$ZodType", (e, t) => {
  var i;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = La;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const n of r)
    for (const u of n._zod.onattach)
      u(e);
  if (r.length === 0)
    (i = e._zod).deferred ?? (i.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const n = (h, d, y) => {
      let o = qe(h), k;
      for (const P of d) {
        if (P._zod.def.when) {
          if (!P._zod.def.when(h))
            continue;
        } else if (o)
          continue;
        const R = h.issues.length, V = P._zod.check(h);
        if (V instanceof Promise && y?.async === !1)
          throw new We();
        if (k || V instanceof Promise)
          k = (k ?? Promise.resolve()).then(async () => {
            await V, h.issues.length !== R && (o || (o = qe(h, R)));
          });
        else {
          if (h.issues.length === R)
            continue;
          o || (o = qe(h, R));
        }
      }
      return k ? k.then(() => h) : h;
    }, u = (h, d, y) => {
      if (qe(h))
        return h.aborted = !0, h;
      const o = n(d, r, y);
      if (o instanceof Promise) {
        if (y.async === !1)
          throw new We();
        return o.then((k) => e._zod.parse(k, y));
      }
      return e._zod.parse(o, y);
    };
    e._zod.run = (h, d) => {
      if (d.skipChecks)
        return e._zod.parse(h, d);
      if (d.direction === "backward") {
        const o = e._zod.parse({ value: h.value, issues: [] }, { ...d, skipChecks: !0 });
        return o instanceof Promise ? o.then((k) => u(k, h, d)) : u(o, h, d);
      }
      const y = e._zod.parse(h, d);
      if (y instanceof Promise) {
        if (d.async === !1)
          throw new We();
        return y.then((o) => n(o, r, d));
      }
      return n(y, r, d);
    };
  }
  e["~standard"] = {
    validate: (n) => {
      try {
        const u = zn(e, n);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return Vn(e, n).then((h) => h.success ? { value: h.data } : { issues: h.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), _i = /* @__PURE__ */ _("$ZodString", (e, t) => {
  Q.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? fa(e._zod.bag), e._zod.parse = (i, r) => {
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
}), K = /* @__PURE__ */ _("$ZodStringFormat", (e, t) => {
  Bt.init(e, t), _i.init(e, t);
}), Oa = /* @__PURE__ */ _("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = ea), K.init(e, t);
}), Ra = /* @__PURE__ */ _("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Bi(r));
  } else
    t.pattern ?? (t.pattern = Bi());
  K.init(e, t);
}), Da = /* @__PURE__ */ _("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = ta), K.init(e, t);
}), Ma = /* @__PURE__ */ _("$ZodURL", (e, t) => {
  K.init(e, t), e._zod.check = (i) => {
    try {
      const r = i.value.trim(), n = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: i.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: i.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? i.value = n.href : i.value = r;
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
}), za = /* @__PURE__ */ _("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = ra()), K.init(e, t);
}), Va = /* @__PURE__ */ _("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Qn), K.init(e, t);
}), Fa = /* @__PURE__ */ _("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Wn), K.init(e, t);
}), ja = /* @__PURE__ */ _("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Kn), K.init(e, t);
}), $a = /* @__PURE__ */ _("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Gn), K.init(e, t);
}), Ba = /* @__PURE__ */ _("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Jn), K.init(e, t);
}), Za = /* @__PURE__ */ _("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Xn), K.init(e, t);
}), Ua = /* @__PURE__ */ _("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = la(t)), K.init(e, t);
}), qa = /* @__PURE__ */ _("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = ha), K.init(e, t);
}), Ha = /* @__PURE__ */ _("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = pa(t)), K.init(e, t);
}), Wa = /* @__PURE__ */ _("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Yn), K.init(e, t);
}), Ka = /* @__PURE__ */ _("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = sa), K.init(e, t), e._zod.bag.format = "ipv4";
}), Ga = /* @__PURE__ */ _("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = na), K.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (i) => {
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
}), Ja = /* @__PURE__ */ _("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = aa), K.init(e, t);
}), Xa = /* @__PURE__ */ _("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = oa), K.init(e, t), e._zod.check = (i) => {
    const r = i.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [n, u] = r;
      if (!u)
        throw new Error();
      const h = Number(u);
      if (`${h}` !== u)
        throw new Error();
      if (h < 0 || h > 128)
        throw new Error();
      new URL(`http://[${n}]`);
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
function rs(e) {
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
const Qa = /* @__PURE__ */ _("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = ua), K.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (i) => {
    rs(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Ya(e) {
  if (!Xr.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), i = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return rs(i);
}
const eo = /* @__PURE__ */ _("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Xr), K.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (i) => {
    Ya(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), to = /* @__PURE__ */ _("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = ca), K.init(e, t);
});
function io(e, t = null) {
  try {
    const i = e.split(".");
    if (i.length !== 3)
      return !1;
    const [r] = i;
    if (!r)
      return !1;
    const n = JSON.parse(atob(r));
    return !("typ" in n && n?.typ !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return !1;
  }
}
const ro = /* @__PURE__ */ _("$ZodJWT", (e, t) => {
  K.init(e, t), e._zod.check = (i) => {
    io(i.value, t.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ss = /* @__PURE__ */ _("$ZodNumber", (e, t) => {
  Q.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? ma, e._zod.parse = (i, r) => {
    if (t.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const n = i.value;
    if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n))
      return i;
    const u = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: n,
      inst: e,
      ...u ? { received: u } : {}
    }), i;
  };
}), so = /* @__PURE__ */ _("$ZodNumberFormat", (e, t) => {
  ba.init(e, t), ss.init(e, t);
}), no = /* @__PURE__ */ _("$ZodBoolean", (e, t) => {
  Q.init(e, t), e._zod.pattern = ya, e._zod.parse = (i, r) => {
    if (t.coerce)
      try {
        i.value = !!i.value;
      } catch {
      }
    const n = i.value;
    return typeof n == "boolean" || i.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: n,
      inst: e
    }), i;
  };
}), ao = /* @__PURE__ */ _("$ZodUnknown", (e, t) => {
  Q.init(e, t), e._zod.parse = (i) => i;
}), oo = /* @__PURE__ */ _("$ZodNever", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: e
  }), i);
});
function Zi(e, t, i) {
  e.issues.length && t.issues.push(...He(i, e.issues)), t.value[i] = e.value;
}
const uo = /* @__PURE__ */ _("$ZodArray", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => {
    const n = i.value;
    if (!Array.isArray(n))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), i;
    i.value = Array(n.length);
    const u = [];
    for (let h = 0; h < n.length; h++) {
      const d = n[h], y = t.element._zod.run({
        value: d,
        issues: []
      }, r);
      y instanceof Promise ? u.push(y.then((o) => Zi(o, i, h))) : Zi(y, i, h);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Lt(e, t, i, r) {
  e.issues.length && t.issues.push(...He(i, e.issues)), e.value === void 0 ? i in r && (t.value[i] = void 0) : t.value[i] = e.value;
}
function ns(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const i = Pn(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(i)
  };
}
function as(e, t, i, r, n, u) {
  const h = [], d = n.keySet, y = n.catchall._zod, o = y.def.type;
  for (const k in t) {
    if (d.has(k))
      continue;
    if (o === "never") {
      h.push(k);
      continue;
    }
    const P = y.run({ value: t[k], issues: [] }, r);
    P instanceof Promise ? e.push(P.then((R) => Lt(R, i, k, t))) : Lt(P, i, k, t);
  }
  return h.length && i.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: t,
    inst: u
  }), e.length ? Promise.all(e).then(() => i) : i;
}
const co = /* @__PURE__ */ _("$ZodObject", (e, t) => {
  if (Q.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const d = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const y = { ...d };
        return Object.defineProperty(t, "shape", {
          value: y
        }), y;
      }
    });
  }
  const r = mi(() => ns(t));
  U(e._zod, "propValues", () => {
    const d = t.shape, y = {};
    for (const o in d) {
      const k = d[o]._zod;
      if (k.values) {
        y[o] ?? (y[o] = /* @__PURE__ */ new Set());
        for (const P of k.values)
          y[o].add(P);
      }
    }
    return y;
  });
  const n = Nt, u = t.catchall;
  let h;
  e._zod.parse = (d, y) => {
    h ?? (h = r.value);
    const o = d.value;
    if (!n(o))
      return d.issues.push({
        expected: "object",
        code: "invalid_type",
        input: o,
        inst: e
      }), d;
    d.value = {};
    const k = [], P = h.shape;
    for (const R of h.keys) {
      const Z = P[R]._zod.run({ value: o[R], issues: [] }, y);
      Z instanceof Promise ? k.push(Z.then((ne) => Lt(ne, d, R, o))) : Lt(Z, d, R, o);
    }
    return u ? as(k, o, d, y, r.value, e) : k.length ? Promise.all(k).then(() => d) : d;
  };
}), ho = /* @__PURE__ */ _("$ZodObjectJIT", (e, t) => {
  co.init(e, t);
  const i = e._zod.parse, r = mi(() => ns(t)), n = (R) => {
    const V = new Na(["shape", "payload", "ctx"]), Z = r.value, ne = (Se) => {
      const ve = $i(Se);
      return `shape[${ve}]._zod.run({ value: input[${ve}], issues: [] }, ctx)`;
    };
    V.write("const input = payload.value;");
    const L = /* @__PURE__ */ Object.create(null);
    let se = 0;
    for (const Se of Z.keys)
      L[Se] = `key_${se++}`;
    V.write("const newResult = {};");
    for (const Se of Z.keys) {
      const ve = L[Se], Fe = $i(Se);
      V.write(`const ${ve} = ${ne(Se)};`), V.write(`
        if (${ve}.issues.length) {
          payload.issues = payload.issues.concat(${ve}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Fe}, ...iss.path] : [${Fe}]
          })));
        }
        
        
        if (${ve}.value === undefined) {
          if (${Fe} in input) {
            newResult[${Fe}] = undefined;
          }
        } else {
          newResult[${Fe}] = ${ve}.value;
        }
        
      `);
    }
    V.write("payload.value = newResult;"), V.write("return payload;");
    const it = V.compile();
    return (Se, ve) => it(R, Se, ve);
  };
  let u;
  const h = Nt, d = !qr.jitless, o = d && wn.value, k = t.catchall;
  let P;
  e._zod.parse = (R, V) => {
    P ?? (P = r.value);
    const Z = R.value;
    return h(Z) ? d && o && V?.async === !1 && V.jitless !== !0 ? (u || (u = n(t.shape)), R = u(R, V), k ? as([], Z, R, V, P, e) : R) : i(R, V) : (R.issues.push({
      expected: "object",
      code: "invalid_type",
      input: Z,
      inst: e
    }), R);
  };
});
function Ui(e, t, i, r) {
  for (const u of e)
    if (u.issues.length === 0)
      return t.value = u.value, t;
  const n = e.filter((u) => !qe(u));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: i,
    errors: e.map((u) => u.issues.map((h) => Me(h, r, De())))
  }), t);
}
const po = /* @__PURE__ */ _("$ZodUnion", (e, t) => {
  Q.init(e, t), U(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), U(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), U(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), U(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${n.map((u) => vi(u.source)).join("|")})$`);
    }
  });
  const i = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (n, u) => {
    if (i)
      return r(n, u);
    let h = !1;
    const d = [];
    for (const y of t.options) {
      const o = y._zod.run({
        value: n.value,
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
    return h ? Promise.all(d).then((y) => Ui(y, n, e, u)) : Ui(d, n, e, u);
  };
}), lo = /* @__PURE__ */ _("$ZodIntersection", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => {
    const n = i.value, u = t.left._zod.run({ value: n, issues: [] }, r), h = t.right._zod.run({ value: n, issues: [] }, r);
    return u instanceof Promise || h instanceof Promise ? Promise.all([u, h]).then(([y, o]) => qi(i, y, o)) : qi(i, u, h);
  };
});
function ni(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Je(e) && Je(t)) {
    const i = Object.keys(t), r = Object.keys(e).filter((u) => i.indexOf(u) !== -1), n = { ...e, ...t };
    for (const u of r) {
      const h = ni(e[u], t[u]);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...h.mergeErrorPath]
        };
      n[u] = h.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let r = 0; r < e.length; r++) {
      const n = e[r], u = t[r], h = ni(n, u);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...h.mergeErrorPath]
        };
      i.push(h.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function qi(e, t, i) {
  if (t.issues.length && e.issues.push(...t.issues), i.issues.length && e.issues.push(...i.issues), qe(e))
    return e;
  const r = ni(t.value, i.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const fo = /* @__PURE__ */ _("$ZodRecord", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => {
    const n = i.value;
    if (!Je(n))
      return i.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), i;
    const u = [], h = t.keyType._zod.values;
    if (h) {
      i.value = {};
      const d = /* @__PURE__ */ new Set();
      for (const o of h)
        if (typeof o == "string" || typeof o == "number" || typeof o == "symbol") {
          d.add(typeof o == "number" ? o.toString() : o);
          const k = t.valueType._zod.run({ value: n[o], issues: [] }, r);
          k instanceof Promise ? u.push(k.then((P) => {
            P.issues.length && i.issues.push(...He(o, P.issues)), i.value[o] = P.value;
          })) : (k.issues.length && i.issues.push(...He(o, k.issues)), i.value[o] = k.value);
        }
      let y;
      for (const o in n)
        d.has(o) || (y = y ?? [], y.push(o));
      y && y.length > 0 && i.issues.push({
        code: "unrecognized_keys",
        input: n,
        inst: e,
        keys: y
      });
    } else {
      i.value = {};
      for (const d of Reflect.ownKeys(n)) {
        if (d === "__proto__")
          continue;
        const y = t.keyType._zod.run({ value: d, issues: [] }, r);
        if (y instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (y.issues.length) {
          i.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: y.issues.map((k) => Me(k, r, De())),
            input: d,
            path: [d],
            inst: e
          }), i.value[y.value] = y.value;
          continue;
        }
        const o = t.valueType._zod.run({ value: n[d], issues: [] }, r);
        o instanceof Promise ? u.push(o.then((k) => {
          k.issues.length && i.issues.push(...He(d, k.issues)), i.value[y.value] = k.value;
        })) : (o.issues.length && i.issues.push(...He(d, o.issues)), i.value[y.value] = o.value);
      }
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
}), mo = /* @__PURE__ */ _("$ZodEnum", (e, t) => {
  Q.init(e, t);
  const i = _n(t.entries), r = new Set(i);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${i.filter((n) => Tn.has(typeof n)).map((n) => typeof n == "string" ? Xe(n) : n.toString()).join("|")})$`), e._zod.parse = (n, u) => {
    const h = n.value;
    return r.has(h) || n.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: e
    }), n;
  };
}), yo = /* @__PURE__ */ _("$ZodLiteral", (e, t) => {
  if (Q.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const i = new Set(t.values);
  e._zod.values = i, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? Xe(r) : r ? Xe(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, n) => {
    const u = r.value;
    return i.has(u) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: u,
      inst: e
    }), r;
  };
}), vo = /* @__PURE__ */ _("$ZodTransform", (e, t) => {
  Q.init(e, t), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      throw new Ur(e.constructor.name);
    const n = t.transform(i.value, i);
    if (r.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((h) => (i.value = h, i));
    if (n instanceof Promise)
      throw new We();
    return i.value = n, i;
  };
});
function Hi(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const xo = /* @__PURE__ */ _("$ZodOptional", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", U(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), U(e._zod, "pattern", () => {
    const i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${vi(i.source)})?$`) : void 0;
  }), e._zod.parse = (i, r) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(i, r);
      return n instanceof Promise ? n.then((u) => Hi(u, i.value)) : Hi(n, i.value);
    }
    return i.value === void 0 ? i : t.innerType._zod.run(i, r);
  };
}), go = /* @__PURE__ */ _("$ZodNullable", (e, t) => {
  Q.init(e, t), U(e._zod, "optin", () => t.innerType._zod.optin), U(e._zod, "optout", () => t.innerType._zod.optout), U(e._zod, "pattern", () => {
    const i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${vi(i.source)}|null)$`) : void 0;
  }), U(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (i, r) => i.value === null ? i : t.innerType._zod.run(i, r);
}), bo = /* @__PURE__ */ _("$ZodDefault", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", U(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(i, r);
    if (i.value === void 0)
      return i.value = t.defaultValue, i;
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => Wi(u, t)) : Wi(n, t);
  };
});
function Wi(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const _o = /* @__PURE__ */ _("$ZodPrefault", (e, t) => {
  Q.init(e, t), e._zod.optin = "optional", U(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, r) => (r.direction === "backward" || i.value === void 0 && (i.value = t.defaultValue), t.innerType._zod.run(i, r));
}), ko = /* @__PURE__ */ _("$ZodNonOptional", (e, t) => {
  Q.init(e, t), U(e._zod, "values", () => {
    const i = t.innerType._zod.values;
    return i ? new Set([...i].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (i, r) => {
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => Ki(u, e)) : Ki(n, e);
  };
});
function Ki(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const So = /* @__PURE__ */ _("$ZodCatch", (e, t) => {
  Q.init(e, t), U(e._zod, "optin", () => t.innerType._zod.optin), U(e._zod, "optout", () => t.innerType._zod.optout), U(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(i, r);
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => (i.value = u.value, u.issues.length && (i.value = t.catchValue({
      ...i,
      error: {
        issues: u.issues.map((h) => Me(h, r, De()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = n.value, n.issues.length && (i.value = t.catchValue({
      ...i,
      error: {
        issues: n.issues.map((u) => Me(u, r, De()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), wo = /* @__PURE__ */ _("$ZodPipe", (e, t) => {
  Q.init(e, t), U(e._zod, "values", () => t.in._zod.values), U(e._zod, "optin", () => t.in._zod.optin), U(e._zod, "optout", () => t.out._zod.optout), U(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (i, r) => {
    if (r.direction === "backward") {
      const u = t.out._zod.run(i, r);
      return u instanceof Promise ? u.then((h) => kt(h, t.in, r)) : kt(u, t.in, r);
    }
    const n = t.in._zod.run(i, r);
    return n instanceof Promise ? n.then((u) => kt(u, t.out, r)) : kt(n, t.out, r);
  };
});
function kt(e, t, i) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, i);
}
const To = /* @__PURE__ */ _("$ZodReadonly", (e, t) => {
  Q.init(e, t), U(e._zod, "propValues", () => t.innerType._zod.propValues), U(e._zod, "values", () => t.innerType._zod.values), U(e._zod, "optin", () => t.innerType?._zod?.optin), U(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(i, r);
    const n = t.innerType._zod.run(i, r);
    return n instanceof Promise ? n.then(Gi) : Gi(n);
  };
});
function Gi(e) {
  return e.value = Object.freeze(e.value), e;
}
const Po = /* @__PURE__ */ _("$ZodCustom", (e, t) => {
  fe.init(e, t), Q.init(e, t), e._zod.parse = (i, r) => i, e._zod.check = (i) => {
    const r = i.value, n = t.fn(r);
    if (n instanceof Promise)
      return n.then((u) => Ji(u, i, r, e));
    Ji(n, i, r, e);
  };
});
function Ji(e, t, i, r) {
  if (!e) {
    const n = {
      code: "custom",
      input: i,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (n.params = r._zod.def.params), t.issues.push(pt(n));
  }
}
var Xi;
class Co {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...i) {
    const r = i[0];
    if (this._map.set(t, r), r && typeof r == "object" && "id" in r) {
      if (this._idmap.has(r.id))
        throw new Error(`ID ${r.id} already exists in the registry`);
      this._idmap.set(r.id, t);
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
      const r = { ...this.get(i) ?? {} };
      delete r.id;
      const n = { ...r, ...this._map.get(t) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Ao() {
  return new Co();
}
(Xi = globalThis).__zod_globalRegistry ?? (Xi.__zod_globalRegistry = Ao());
const St = globalThis.__zod_globalRegistry;
function Eo(e, t) {
  return new e({
    type: "string",
    ...O(t)
  });
}
function Io(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Qi(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function No(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Lo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...O(t)
  });
}
function Oo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...O(t)
  });
}
function Ro(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...O(t)
  });
}
function Do(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Mo(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function zo(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Vo(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Fo(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function jo(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function $o(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Bo(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Zo(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Uo(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function qo(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Ho(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Wo(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Ko(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Go(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Jo(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...O(t)
  });
}
function Xo(e, t) {
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
function Qo(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...O(t)
  });
}
function Yo(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...O(t)
  });
}
function eu(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...O(t)
  });
}
function tu(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...O(t)
  });
}
function iu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...O(t)
  });
}
function ru(e, t) {
  return new e({
    type: "boolean",
    ...O(t)
  });
}
function su(e) {
  return new e({
    type: "unknown"
  });
}
function nu(e, t) {
  return new e({
    type: "never",
    ...O(t)
  });
}
function Yi(e, t) {
  return new ts({
    check: "less_than",
    ...O(t),
    value: e,
    inclusive: !1
  });
}
function Qt(e, t) {
  return new ts({
    check: "less_than",
    ...O(t),
    value: e,
    inclusive: !0
  });
}
function er(e, t) {
  return new is({
    check: "greater_than",
    ...O(t),
    value: e,
    inclusive: !1
  });
}
function Yt(e, t) {
  return new is({
    check: "greater_than",
    ...O(t),
    value: e,
    inclusive: !0
  });
}
function tr(e, t) {
  return new ga({
    check: "multiple_of",
    ...O(t),
    value: e
  });
}
function os(e, t) {
  return new _a({
    check: "max_length",
    ...O(t),
    maximum: e
  });
}
function Ot(e, t) {
  return new ka({
    check: "min_length",
    ...O(t),
    minimum: e
  });
}
function us(e, t) {
  return new Sa({
    check: "length_equals",
    ...O(t),
    length: e
  });
}
function au(e, t) {
  return new wa({
    check: "string_format",
    format: "regex",
    ...O(t),
    pattern: e
  });
}
function ou(e) {
  return new Ta({
    check: "string_format",
    format: "lowercase",
    ...O(e)
  });
}
function uu(e) {
  return new Pa({
    check: "string_format",
    format: "uppercase",
    ...O(e)
  });
}
function cu(e, t) {
  return new Ca({
    check: "string_format",
    format: "includes",
    ...O(t),
    includes: e
  });
}
function hu(e, t) {
  return new Aa({
    check: "string_format",
    format: "starts_with",
    ...O(t),
    prefix: e
  });
}
function pu(e, t) {
  return new Ea({
    check: "string_format",
    format: "ends_with",
    ...O(t),
    suffix: e
  });
}
function tt(e) {
  return new Ia({
    check: "overwrite",
    tx: e
  });
}
function lu(e) {
  return tt((t) => t.normalize(e));
}
function fu() {
  return tt((e) => e.trim());
}
function du() {
  return tt((e) => e.toLowerCase());
}
function mu() {
  return tt((e) => e.toUpperCase());
}
function yu() {
  return tt((e) => Sn(e));
}
function vu(e, t, i) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...O(i)
  });
}
function xu(e, t, i) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...O(i)
  });
}
function gu(e) {
  const t = bu((i) => (i.addIssue = (r) => {
    if (typeof r == "string")
      i.issues.push(pt(r, i.value, t._zod.def));
    else {
      const n = r;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = i.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), i.issues.push(pt(n));
    }
  }, e(i.value, i)));
  return t;
}
function bu(e, t) {
  const i = new fe({
    check: "custom",
    ...O(t)
  });
  return i._zod.check = e, i;
}
const _u = /* @__PURE__ */ _("ZodISODateTime", (e, t) => {
  Ua.init(e, t), Y.init(e, t);
});
function ku(e) {
  return Xo(_u, e);
}
const Su = /* @__PURE__ */ _("ZodISODate", (e, t) => {
  qa.init(e, t), Y.init(e, t);
});
function wu(e) {
  return Qo(Su, e);
}
const Tu = /* @__PURE__ */ _("ZodISOTime", (e, t) => {
  Ha.init(e, t), Y.init(e, t);
});
function Pu(e) {
  return Yo(Tu, e);
}
const Cu = /* @__PURE__ */ _("ZodISODuration", (e, t) => {
  Wa.init(e, t), Y.init(e, t);
});
function Au(e) {
  return eu(Cu, e);
}
const Eu = (e, t) => {
  Gr.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (i) => Mn(e, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => Dn(e, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        e.issues.push(i), e.message = JSON.stringify(e.issues, si, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        e.issues.push(...i), e.message = JSON.stringify(e.issues, si, 2);
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
}, ke = _("ZodError", Eu, {
  Parent: Error
}), Iu = /* @__PURE__ */ gi(ke), Nu = /* @__PURE__ */ bi(ke), Lu = /* @__PURE__ */ jt(ke), Ou = /* @__PURE__ */ $t(ke), Ru = /* @__PURE__ */ Fn(ke), Du = /* @__PURE__ */ jn(ke), Mu = /* @__PURE__ */ $n(ke), zu = /* @__PURE__ */ Bn(ke), Vu = /* @__PURE__ */ Zn(ke), Fu = /* @__PURE__ */ Un(ke), ju = /* @__PURE__ */ qn(ke), $u = /* @__PURE__ */ Hn(ke), ee = /* @__PURE__ */ _("ZodType", (e, t) => (Q.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...i) => e.clone(Ze(t, {
  checks: [
    ...t.checks ?? [],
    ...i.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
})), e.clone = (i, r) => Ve(e, i, r), e.brand = () => e, e.register = ((i, r) => (i.add(e, r), e)), e.parse = (i, r) => Iu(e, i, r, { callee: e.parse }), e.safeParse = (i, r) => Lu(e, i, r), e.parseAsync = async (i, r) => Nu(e, i, r, { callee: e.parseAsync }), e.safeParseAsync = async (i, r) => Ou(e, i, r), e.spa = e.safeParseAsync, e.encode = (i, r) => Ru(e, i, r), e.decode = (i, r) => Du(e, i, r), e.encodeAsync = async (i, r) => Mu(e, i, r), e.decodeAsync = async (i, r) => zu(e, i, r), e.safeEncode = (i, r) => Vu(e, i, r), e.safeDecode = (i, r) => Fu(e, i, r), e.safeEncodeAsync = async (i, r) => ju(e, i, r), e.safeDecodeAsync = async (i, r) => $u(e, i, r), e.refine = (i, r) => e.check(Rc(i, r)), e.superRefine = (i) => e.check(Dc(i)), e.overwrite = (i) => e.check(tt(i)), e.optional = () => nr(e), e.nullable = () => ar(e), e.nullish = () => nr(ar(e)), e.nonoptional = (i) => Cc(e, i), e.array = () => ki(e), e.or = (i) => Ce([e, i]), e.and = (i) => yc(e, i), e.transform = (i) => or(e, _c(i)), e.default = (i) => wc(e, i), e.prefault = (i) => Pc(e, i), e.catch = (i) => Ec(e, i), e.pipe = (i) => or(e, i), e.readonly = () => Lc(e), e.describe = (i) => {
  const r = e.clone();
  return St.add(r, { description: i }), r;
}, Object.defineProperty(e, "description", {
  get() {
    return St.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...i) => {
  if (i.length === 0)
    return St.get(e);
  const r = e.clone();
  return St.add(r, i[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), cs = /* @__PURE__ */ _("_ZodString", (e, t) => {
  _i.init(e, t), ee.init(e, t);
  const i = e._zod.bag;
  e.format = i.format ?? null, e.minLength = i.minimum ?? null, e.maxLength = i.maximum ?? null, e.regex = (...r) => e.check(au(...r)), e.includes = (...r) => e.check(cu(...r)), e.startsWith = (...r) => e.check(hu(...r)), e.endsWith = (...r) => e.check(pu(...r)), e.min = (...r) => e.check(Ot(...r)), e.max = (...r) => e.check(os(...r)), e.length = (...r) => e.check(us(...r)), e.nonempty = (...r) => e.check(Ot(1, ...r)), e.lowercase = (r) => e.check(ou(r)), e.uppercase = (r) => e.check(uu(r)), e.trim = () => e.check(fu()), e.normalize = (...r) => e.check(lu(...r)), e.toLowerCase = () => e.check(du()), e.toUpperCase = () => e.check(mu()), e.slugify = () => e.check(yu());
}), Bu = /* @__PURE__ */ _("ZodString", (e, t) => {
  _i.init(e, t), cs.init(e, t), e.email = (i) => e.check(Io(Zu, i)), e.url = (i) => e.check(Do(Uu, i)), e.jwt = (i) => e.check(Jo(nc, i)), e.emoji = (i) => e.check(Mo(qu, i)), e.guid = (i) => e.check(Qi(ir, i)), e.uuid = (i) => e.check(No(wt, i)), e.uuidv4 = (i) => e.check(Lo(wt, i)), e.uuidv6 = (i) => e.check(Oo(wt, i)), e.uuidv7 = (i) => e.check(Ro(wt, i)), e.nanoid = (i) => e.check(zo(Hu, i)), e.guid = (i) => e.check(Qi(ir, i)), e.cuid = (i) => e.check(Vo(Wu, i)), e.cuid2 = (i) => e.check(Fo(Ku, i)), e.ulid = (i) => e.check(jo(Gu, i)), e.base64 = (i) => e.check(Wo(ic, i)), e.base64url = (i) => e.check(Ko(rc, i)), e.xid = (i) => e.check($o(Ju, i)), e.ksuid = (i) => e.check(Bo(Xu, i)), e.ipv4 = (i) => e.check(Zo(Qu, i)), e.ipv6 = (i) => e.check(Uo(Yu, i)), e.cidrv4 = (i) => e.check(qo(ec, i)), e.cidrv6 = (i) => e.check(Ho(tc, i)), e.e164 = (i) => e.check(Go(sc, i)), e.datetime = (i) => e.check(ku(i)), e.date = (i) => e.check(wu(i)), e.time = (i) => e.check(Pu(i)), e.duration = (i) => e.check(Au(i));
});
function ie(e) {
  return Eo(Bu, e);
}
const Y = /* @__PURE__ */ _("ZodStringFormat", (e, t) => {
  K.init(e, t), cs.init(e, t);
}), Zu = /* @__PURE__ */ _("ZodEmail", (e, t) => {
  Da.init(e, t), Y.init(e, t);
}), ir = /* @__PURE__ */ _("ZodGUID", (e, t) => {
  Oa.init(e, t), Y.init(e, t);
}), wt = /* @__PURE__ */ _("ZodUUID", (e, t) => {
  Ra.init(e, t), Y.init(e, t);
}), Uu = /* @__PURE__ */ _("ZodURL", (e, t) => {
  Ma.init(e, t), Y.init(e, t);
}), qu = /* @__PURE__ */ _("ZodEmoji", (e, t) => {
  za.init(e, t), Y.init(e, t);
}), Hu = /* @__PURE__ */ _("ZodNanoID", (e, t) => {
  Va.init(e, t), Y.init(e, t);
}), Wu = /* @__PURE__ */ _("ZodCUID", (e, t) => {
  Fa.init(e, t), Y.init(e, t);
}), Ku = /* @__PURE__ */ _("ZodCUID2", (e, t) => {
  ja.init(e, t), Y.init(e, t);
}), Gu = /* @__PURE__ */ _("ZodULID", (e, t) => {
  $a.init(e, t), Y.init(e, t);
}), Ju = /* @__PURE__ */ _("ZodXID", (e, t) => {
  Ba.init(e, t), Y.init(e, t);
}), Xu = /* @__PURE__ */ _("ZodKSUID", (e, t) => {
  Za.init(e, t), Y.init(e, t);
}), Qu = /* @__PURE__ */ _("ZodIPv4", (e, t) => {
  Ka.init(e, t), Y.init(e, t);
}), Yu = /* @__PURE__ */ _("ZodIPv6", (e, t) => {
  Ga.init(e, t), Y.init(e, t);
}), ec = /* @__PURE__ */ _("ZodCIDRv4", (e, t) => {
  Ja.init(e, t), Y.init(e, t);
}), tc = /* @__PURE__ */ _("ZodCIDRv6", (e, t) => {
  Xa.init(e, t), Y.init(e, t);
}), ic = /* @__PURE__ */ _("ZodBase64", (e, t) => {
  Qa.init(e, t), Y.init(e, t);
}), rc = /* @__PURE__ */ _("ZodBase64URL", (e, t) => {
  eo.init(e, t), Y.init(e, t);
}), sc = /* @__PURE__ */ _("ZodE164", (e, t) => {
  to.init(e, t), Y.init(e, t);
}), nc = /* @__PURE__ */ _("ZodJWT", (e, t) => {
  ro.init(e, t), Y.init(e, t);
}), hs = /* @__PURE__ */ _("ZodNumber", (e, t) => {
  ss.init(e, t), ee.init(e, t), e.gt = (r, n) => e.check(er(r, n)), e.gte = (r, n) => e.check(Yt(r, n)), e.min = (r, n) => e.check(Yt(r, n)), e.lt = (r, n) => e.check(Yi(r, n)), e.lte = (r, n) => e.check(Qt(r, n)), e.max = (r, n) => e.check(Qt(r, n)), e.int = (r) => e.check(rr(r)), e.safe = (r) => e.check(rr(r)), e.positive = (r) => e.check(er(0, r)), e.nonnegative = (r) => e.check(Yt(0, r)), e.negative = (r) => e.check(Yi(0, r)), e.nonpositive = (r) => e.check(Qt(0, r)), e.multipleOf = (r, n) => e.check(tr(r, n)), e.step = (r, n) => e.check(tr(r, n)), e.finite = () => e;
  const i = e._zod.bag;
  e.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), e.isFinite = !0, e.format = i.format ?? null;
});
function Rt(e) {
  return tu(hs, e);
}
const ac = /* @__PURE__ */ _("ZodNumberFormat", (e, t) => {
  so.init(e, t), hs.init(e, t);
});
function rr(e) {
  return iu(ac, e);
}
const oc = /* @__PURE__ */ _("ZodBoolean", (e, t) => {
  no.init(e, t), ee.init(e, t);
});
function uc(e) {
  return ru(oc, e);
}
const cc = /* @__PURE__ */ _("ZodUnknown", (e, t) => {
  ao.init(e, t), ee.init(e, t);
});
function sr() {
  return su(cc);
}
const hc = /* @__PURE__ */ _("ZodNever", (e, t) => {
  oo.init(e, t), ee.init(e, t);
});
function pc(e) {
  return nu(hc, e);
}
const lc = /* @__PURE__ */ _("ZodArray", (e, t) => {
  uo.init(e, t), ee.init(e, t), e.element = t.element, e.min = (i, r) => e.check(Ot(i, r)), e.nonempty = (i) => e.check(Ot(1, i)), e.max = (i, r) => e.check(os(i, r)), e.length = (i, r) => e.check(us(i, r)), e.unwrap = () => e.element;
});
function ki(e, t) {
  return vu(lc, e, t);
}
const fc = /* @__PURE__ */ _("ZodObject", (e, t) => {
  ho.init(e, t), ee.init(e, t), U(e, "shape", () => t.shape), e.keyof = () => xc(Object.keys(e._zod.def.shape)), e.catchall = (i) => e.clone({ ...e._zod.def, catchall: i }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: sr() }), e.loose = () => e.clone({ ...e._zod.def, catchall: sr() }), e.strict = () => e.clone({ ...e._zod.def, catchall: pc() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (i) => In(e, i), e.safeExtend = (i) => Nn(e, i), e.merge = (i) => Ln(e, i), e.pick = (i) => An(e, i), e.omit = (i) => En(e, i), e.partial = (...i) => On(ps, e, i[0]), e.required = (...i) => Rn(ls, e, i[0]);
});
function Zt(e, t) {
  const i = {
    type: "object",
    shape: e ?? {},
    ...O(t)
  };
  return new fc(i);
}
const dc = /* @__PURE__ */ _("ZodUnion", (e, t) => {
  po.init(e, t), ee.init(e, t), e.options = t.options;
});
function Ce(e, t) {
  return new dc({
    type: "union",
    options: e,
    ...O(t)
  });
}
const mc = /* @__PURE__ */ _("ZodIntersection", (e, t) => {
  lo.init(e, t), ee.init(e, t);
});
function yc(e, t) {
  return new mc({
    type: "intersection",
    left: e,
    right: t
  });
}
const vc = /* @__PURE__ */ _("ZodRecord", (e, t) => {
  fo.init(e, t), ee.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function lt(e, t, i) {
  return new vc({
    type: "record",
    keyType: e,
    valueType: t,
    ...O(i)
  });
}
const ai = /* @__PURE__ */ _("ZodEnum", (e, t) => {
  mo.init(e, t), ee.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const i = new Set(Object.keys(t.entries));
  e.extract = (r, n) => {
    const u = {};
    for (const h of r)
      if (i.has(h))
        u[h] = t.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new ai({
      ...t,
      checks: [],
      ...O(n),
      entries: u
    });
  }, e.exclude = (r, n) => {
    const u = { ...t.entries };
    for (const h of r)
      if (i.has(h))
        delete u[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new ai({
      ...t,
      checks: [],
      ...O(n),
      entries: u
    });
  };
});
function xc(e, t) {
  const i = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new ai({
    type: "enum",
    entries: i,
    ...O(t)
  });
}
const gc = /* @__PURE__ */ _("ZodLiteral", (e, t) => {
  yo.init(e, t), ee.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function T(e, t) {
  return new gc({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...O(t)
  });
}
const bc = /* @__PURE__ */ _("ZodTransform", (e, t) => {
  vo.init(e, t), ee.init(e, t), e._zod.parse = (i, r) => {
    if (r.direction === "backward")
      throw new Ur(e.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(pt(u, i.value, t));
      else {
        const h = u;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = i.value), h.inst ?? (h.inst = e), i.issues.push(pt(h));
      }
    };
    const n = t.transform(i.value, i);
    return n instanceof Promise ? n.then((u) => (i.value = u, i)) : (i.value = n, i);
  };
});
function _c(e) {
  return new bc({
    type: "transform",
    transform: e
  });
}
const ps = /* @__PURE__ */ _("ZodOptional", (e, t) => {
  xo.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function nr(e) {
  return new ps({
    type: "optional",
    innerType: e
  });
}
const kc = /* @__PURE__ */ _("ZodNullable", (e, t) => {
  go.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ar(e) {
  return new kc({
    type: "nullable",
    innerType: e
  });
}
const Sc = /* @__PURE__ */ _("ZodDefault", (e, t) => {
  bo.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function wc(e, t) {
  return new Sc({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Wr(t);
    }
  });
}
const Tc = /* @__PURE__ */ _("ZodPrefault", (e, t) => {
  _o.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Pc(e, t) {
  return new Tc({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Wr(t);
    }
  });
}
const ls = /* @__PURE__ */ _("ZodNonOptional", (e, t) => {
  ko.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Cc(e, t) {
  return new ls({
    type: "nonoptional",
    innerType: e,
    ...O(t)
  });
}
const Ac = /* @__PURE__ */ _("ZodCatch", (e, t) => {
  So.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Ec(e, t) {
  return new Ac({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Ic = /* @__PURE__ */ _("ZodPipe", (e, t) => {
  wo.init(e, t), ee.init(e, t), e.in = t.in, e.out = t.out;
});
function or(e, t) {
  return new Ic({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Nc = /* @__PURE__ */ _("ZodReadonly", (e, t) => {
  To.init(e, t), ee.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Lc(e) {
  return new Nc({
    type: "readonly",
    innerType: e
  });
}
const Oc = /* @__PURE__ */ _("ZodCustom", (e, t) => {
  Po.init(e, t), ee.init(e, t);
});
function Rc(e, t = {}) {
  return xu(Oc, e, t);
}
function Dc(e) {
  return gu(e);
}
const Mc = Ce([T("amber"), T("green"), T("red"), T("other")]), zc = Ce([T("alpha"), T("beta"), T("generalAvailability"), T("notApplicable"), T("preAlpha"), T("proposed"), T("releaseCandidate"), T("unavailable"), T("underReview")]), Vc = Ce([T("app"), T("connector"), T("connectorConnection"), T("context"), T("contextModelGroup"), T("contextModel"), T("contextModelDimensionGroup"), T("contextModelDimension"), T("contextModelDimensionHierarchy"), T("contextModelEntityGroup"), T("contextModelEntity"), T("contextModelEntityDataItem"), T("contextModelEntityEvent"), T("contextModelEntityPrimaryMeasure"), T("contextModelSecondaryMeasureGroup"), T("contextModelSecondaryMeasure"), T("dataView"), T("dimension"), T("engine"), T("eventQuery"), T("presenter"), T("presenterPresentation"), T("tool")]), Fc = Ce([T("en-au"), T("en-gb"), T("en-us"), T("es-es")]), jc = lt(Fc, ie()), $c = Zt({
  id: ie(),
  color: Mc,
  label: ie()
}), Bc = Zt({
  id: ie(),
  label: lt(ie(), ie()),
  description: lt(ie(), ie()),
  firstCreatedAt: Rt().optional(),
  icon: ie().optional(),
  iconDark: ie().optional(),
  lastUpdatedAt: Rt().optional(),
  status: $c.optional(),
  statusId: zc,
  typeId: Vc
}), Zc = Ce([T("app"), T("engine"), T("connector"), T("context"), T("presenter"), T("tool")]), Uc = Zt({
  id: ie(),
  label: ie()
}), qc = Zt({
  activeConnectionCount: Rt().optional(),
  canDescribe: uc().optional(),
  id: ie().optional(),
  authMethodId: Ce([T("apiKey"), T("disabled"), T("oAuth2"), T("none")]),
  label: jc.optional(),
  maxConnectionCount: Rt().optional(),
  params: ki(lt(ie(), ie())).optional()
}), Hc = Ce([T("application"), T("curatedDataset"), T("database"), T("fileStore")]), Wc = Ce([T("abortOperation"), T("authenticateConnection"), T("createObject"), T("describeConnection"), T("dropObject"), T("findObject"), T("getRecord"), T("listNodes"), T("previewObject"), T("removeRecords"), T("retrieveRecords"), T("upsertRecords")]), Kc = Ce([T("bidirectional"), T("destination"), T("source"), T("unknown")]), Gc = Bc.extend({
  typeId: Zc,
  version: ie()
}), fs = Gc.extend({
  category: Uc.optional(),
  categoryId: Hc,
  implementations: lt(ie(), qc),
  operations: ki(Wc),
  typeId: T("connector"),
  usageId: Kc,
  vendorAccountURL: ie().optional(),
  vendorDocumentationURL: ie().optional(),
  vendorHomeURL: ie().optional()
});
console.log(1111, fs);
const Jc = ["critical", "high", "moderate", "low", "unknown"], ct = gs(vs);
async function rh() {
  try {
    console.info("🚀 Building configuration...");
    const e = JSON.parse(await F.readFile("package.json", "utf8")), t = JSON.parse(await F.readFile("config.json", "utf8")), i = fs.parse(t);
    console.log(2222, i), e.name != null && (t.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (t.version = e.version), await F.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (e) {
    console.error("❌ Error building configuration.", e);
  }
}
async function sh(e) {
  try {
    console.info(`🚀 Building public directory index for identifier '${e}'...`);
    const t = {};
    async function i(n, u) {
      console.info(`⚙️ Processing directory '${n}'...`);
      const h = [], d = n.slice(`public/${e}`.length);
      t[d === "" ? "/" : d] = h;
      for (const y of u) {
        const o = `${n}/${y}`;
        try {
          const k = await F.stat(o);
          if (k.isDirectory()) {
            const P = await F.readdir(o), R = { childCount: P.length, name: y, typeId: "folder" };
            h.push(R), await i(o, P);
          } else {
            const P = { id: xs(), lastModifiedAt: k.mtimeMs, name: y, size: k.size, typeId: "object" };
            h.push(P);
          }
        } catch (k) {
          throw new Error(`Unable to get information for '${y}' in 'buildPublicDirectoryIndex'. ${String(k)}`);
        }
      }
      h.sort((y, o) => {
        const k = y.typeId.localeCompare(o.typeId);
        return k === 0 ? y.name.localeCompare(o.name) : k;
      });
    }
    const r = await F.readdir(`public/${e}`);
    await i(`public/${e}`, r), await F.writeFile(`./public/${e}Index.json`, JSON.stringify(t), "utf8"), console.info("✅ Public directory index built.");
  } catch (t) {
    console.error("❌ Error building public directory index.", t);
  }
}
async function nh() {
  try {
    console.info("🚀 Building connector configuration...");
    const [e, t, i] = await Promise.all([
      F.readFile("package.json", "utf8").then((u) => JSON.parse(u)),
      F.readFile("config.json", "utf8").then((u) => JSON.parse(u)),
      F.readFile("src/index.ts", "utf8")
    ]), r = Xc(i), n = Qc(r);
    r.operations.length > 0 ? console.info(`ℹ️  Implements ${r.operations.length} operations.`) : console.warn("⚠️  Implements no operations."), n === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports '${n}' usage.`), t.id = e.name ?? t.id, t.version = e.version ?? t.version, t.operations = r.operations, t.usageId = n, await F.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (e) {
    console.error("❌ Error building connector configuration.", e);
  }
}
async function ah() {
  try {
    console.info("🚀 Building context configuration...");
    const [e, t, i] = await Promise.all([
      F.readFile("package.json", "utf8").then((u) => JSON.parse(u)),
      F.readFile("config.json", "utf8").then((u) => JSON.parse(u)),
      F.readFile("src/index.ts", "utf8")
    ]), r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, n = [...i.matchAll(r)].filter((u) => u[1] == null && u[2] !== "constructor").map((u) => u[2]);
    e.name != null && (t.id = e.name), t.operations = n, e.version != null && (t.version = e.version), await F.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function oh() {
  try {
    console.info("🚀 Building presenter configuration...");
    const [e, t, i] = await Promise.all([
      F.readFile("package.json", "utf8").then((u) => JSON.parse(u)),
      F.readFile("config.json", "utf8").then((u) => JSON.parse(u)),
      F.readFile("src/index.ts", "utf8")
    ]), r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, n = [...i.matchAll(r)].filter((u) => u[1] == null && u[2] !== "constructor").map((u) => u[2]);
    e.name != null && (t.id = e.name), t.operations = n, e.version != null && (t.version = e.version), await F.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function uh(e = "./") {
  try {
    console.info("🚀 Bumping version...");
    const t = JSON.parse(await F.readFile(`${e}package.json`, "utf8"));
    if (t.version == null)
      t.version = "0.0.001", await F.writeFile(`${e}package.json`, JSON.stringify(t, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${t.version}.`);
    else {
      const i = t.version, r = t.version.split(".");
      t.version = `${r[0]}.${r[1]}.${Number(r[2]) + 1}`, await F.writeFile(`${e}package.json`, JSON.stringify(t, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${t.version}.`);
    }
  } catch (t) {
    console.error("❌ Error bumping package version.", t);
  }
}
function ch(e) {
  console.error(`❌ ${e} script not implemented.`);
}
async function hh() {
  const e = "<!-- DEPENDENCY_LICENSES_START -->", t = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const r = (await F.readFile("./licenses.md", "utf8")).trim(), n = await F.readFile("./README.md", "utf8"), u = n.indexOf(e), h = n.indexOf(t);
    if (u === -1 || h === -1) {
      console.error("❌ Dependency license markers not found in readme file.");
      return;
    }
    const d = n.slice(0, Math.max(0, u + e.length)) + `
` + r + `
` + n.slice(Math.max(0, h));
    await F.writeFile("README.md", d, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (i) {
    console.error("❌ Error updating readme file.", i);
  }
}
async function ph() {
  const e = "<!-- OWASP_BADGE_START -->", t = "<!-- OWASP_BADGE_END -->";
  try {
    const i = JSON.parse(await F.readFile("./dependency-check-reports/dependency-check-report.json", "utf8")), r = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const V of i.dependencies)
      if (V.vulnerabilities != null)
        for (const Z of V.vulnerabilities) {
          const ne = Z.severity?.toLowerCase() ?? "unknown";
          if (ne in r) {
            const L = Jc.find((se) => se === ne);
            r[L ?? "unknown"]++;
          } else
            r.unknown++;
        }
    const n = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, u = JSON.parse(await F.readFile("config.json", "utf8")), h = [];
    if (Object.values(r).reduce((V, Z) => V + Z, 0) === 0)
      console.info("✅ No vulnerabilities found."), h.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${u.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [V, Z] of Object.entries(r)) {
        const ne = n[V];
        if (console.warn(`⚠️  ${Z} ${ne.label} vulnerability(ies) found.`), Z === 0) continue;
        const L = `https://img.shields.io/badge/OWASP-${Z}%20${ne.label}-${ne.color}`;
        h.push(`[![OWASP](${L})](https://data-positioning.github.io/${u.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const y = await F.readFile("./README.md", "utf8"), o = y.indexOf(e), k = y.indexOf(t);
    if (o === -1 || k === -1) {
      console.error("❌ OWASP badge markers not found in README.md.");
      return;
    }
    const P = h.join(" "), R = y.slice(0, Math.max(0, o + e.length)) + P + y.slice(Math.max(0, k));
    await F.writeFile("README.md", R, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (i) {
    console.error("❌ Error updating README with OWASP badges:", i);
  }
}
async function lh() {
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
async function fh() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const e = JSON.parse(await F.readFile("package.json", "utf8"));
    await ct("git add ."), await ct(`git commit -m "v${e.version}"`), await ct("git push origin main:main"), console.info(`✅ Synchronised version ${e.version} with GitHub.`);
  } catch (e) {
    console.error("❌ Error synchronising with GitHub.", e);
  }
}
async function dh(e, t) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(n, u, h) {
      for (const d of h) {
        const y = `${n}/${d}`, o = `${u}/${d}`;
        if ((await F.stat(y)).isDirectory()) {
          const P = await F.readdir(y);
          await i(y, o, P);
        } else {
          console.info(`⚙️ Uploading '${n}/${d}'...`);
          const P = `wrangler r2 object put "datapos-sample-data-eu/${u}/${d}" --file="${n}/${d}" --jurisdiction=eu --remote`, R = await ct(P);
          if (R.stderr) throw new Error(R.stderr);
        }
      }
    }
    const r = await F.readdir(`${e}/${t}/`);
    await i(`${e}/${t}`, t, r), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function mh() {
  try {
    console.info("🚀 Uploading module configuration....");
    const e = JSON.parse(await F.readFile("config.json", "utf8")), t = e.id, i = {
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, r = await fetch(`https://api.datapos.app/states/${t}`, i);
    if (!r.ok) throw new Error(await r.text());
    console.info("✅ Module configuration uploaded.");
  } catch (e) {
    console.error("❌ Error uploading module configuration.", e);
  }
}
async function yh(e) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await F.readFile("package.json", "utf8")).version}`;
    async function r(n, u = "") {
      const h = await F.readdir(n, { withFileTypes: !0 });
      for (const d of h) {
        const y = `${n}/${d.name}`, o = u ? `${u}/${d.name}` : d.name;
        if (d.isDirectory()) continue;
        const k = `${e}_${i}/${o}`.replaceAll("\\", "/"), P = d.name.endsWith(".css") ? "text/css" : "application/octet-stream", R = d.name.endsWith(".js") ? "application/javascript" : P;
        console.info(`⚙️ Uploading '${o}' → '${k}'...`);
        const { stderr: V } = await ct(`wrangler r2 object put "${k}" --file="${y}" --content-type ${R} --jurisdiction=eu --remote`);
        if (V) throw new Error(V);
      }
    }
    await r("dist"), console.info("✅ Module uploaded to R2.");
  } catch (t) {
    console.error("❌ Error uploading module to R2.", t);
  }
}
function Xc(e) {
  const i = X.extend(xn()).parse(e, {
    ecmaVersion: "latest",
    sourceType: "module",
    locations: !0
  }), r = [];
  let n = !1, u = !1;
  return oi(i, (h) => {
    if (h.type !== "MethodDefinition") return;
    const d = h, y = d.key;
    if (y.type !== "Identifier") return;
    const o = y.name;
    o && o !== "constructor" && d.accessibility !== "private" && (r.push(o), bn.includes(o) && (n = !0), gn.includes(o) && (u = !0));
  }), { operations: r, sourceOps: n, destinationOps: u };
}
function Qc(e) {
  return e.sourceOps && e.destinationOps ? "bidirectional" : e.sourceOps ? "source" : e.destinationOps ? "destination" : "unknown";
}
function oi(e, t) {
  t(e);
  for (const [i, r] of Object.entries(e)) {
    if (["loc", "range", "start", "end", "comments"].includes(i)) continue;
    const n = r;
    if (Array.isArray(n))
      for (const u of n) {
        const h = u;
        h && typeof h.type == "string" && oi(h, t);
      }
    else n && typeof n == "object" && typeof n.type == "string" && oi(n, t);
  }
}
export {
  rh as buildConfig,
  nh as buildConnectorConfig,
  ah as buildContextConfig,
  oh as buildPresenterConfig,
  sh as buildPublicDirectoryIndex,
  uh as bumpVersion,
  ch as echoScriptNotImplemented,
  hh as insertLicensesIntoReadme,
  ph as insertOWASPDependencyCheckBadgeIntoReadme,
  lh as sendDeploymentNotice,
  fh as syncWithGitHub,
  dh as uploadDirectoryToR2,
  mh as uploadModuleConfigToDO,
  yh as uploadModuleToR2
};
