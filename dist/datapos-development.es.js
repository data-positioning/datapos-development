import { exec as br } from "node:child_process";
import { promises as F } from "node:fs";
import { nanoid as kr } from "nanoid";
import { promisify as Sr } from "node:util";
var wr = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], hs = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Tr = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ps = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", He = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, We = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", _r = {
  5: We,
  "5module": We + " export import",
  6: We + " const class extends export import super"
}, Pr = /^in(stanceof)?$/, Ar = new RegExp("[" + ps + "]"), Cr = new RegExp("[" + ps + Tr + "]");
function ti(t, e) {
  for (var i = 65536, s = 0; s < e.length; s += 2) {
    if (i += e[s], i > t)
      return !1;
    if (i += e[s + 1], i >= t)
      return !0;
  }
  return !1;
}
function _t(t, e) {
  return t < 65 ? t === 36 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && Ar.test(String.fromCharCode(t)) : e === !1 ? !1 : ti(t, hs);
}
function It(t, e) {
  return t < 48 ? t === 36 : t < 58 ? !0 : t < 65 ? !1 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && Cr.test(String.fromCharCode(t)) : e === !1 ? !1 : ti(t, hs) || ti(t, wr);
}
var V = function(e, i) {
  i === void 0 && (i = {}), this.label = e, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function bt(t, e) {
  return new V(t, { beforeExpr: !0, binop: e });
}
var kt = { beforeExpr: !0 }, lt = { startsExpr: !0 }, Qt = {};
function B(t, e) {
  return e === void 0 && (e = {}), e.keyword = t, Qt[t] = new V(t, e);
}
var p = {
  num: new V("num", lt),
  regexp: new V("regexp", lt),
  string: new V("string", lt),
  name: new V("name", lt),
  privateId: new V("privateId", lt),
  eof: new V("eof"),
  // Punctuation token types.
  bracketL: new V("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new V("]"),
  braceL: new V("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new V("}"),
  parenL: new V("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new V(")"),
  comma: new V(",", kt),
  semi: new V(";", kt),
  colon: new V(":", kt),
  dot: new V("."),
  question: new V("?", kt),
  questionDot: new V("?."),
  arrow: new V("=>", kt),
  template: new V("template"),
  invalidTemplate: new V("invalidTemplate"),
  ellipsis: new V("...", kt),
  backQuote: new V("`", lt),
  dollarBraceL: new V("${", { beforeExpr: !0, startsExpr: !0 }),
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
  eq: new V("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new V("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new V("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new V("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: bt("||", 1),
  logicalAND: bt("&&", 2),
  bitwiseOR: bt("|", 3),
  bitwiseXOR: bt("^", 4),
  bitwiseAND: bt("&", 5),
  equality: bt("==/!=/===/!==", 6),
  relational: bt("</>/<=/>=", 7),
  bitShift: bt("<</>>/>>>", 8),
  plusMin: new V("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: bt("%", 10),
  star: bt("*", 10),
  slash: bt("/", 10),
  starstar: new V("**", { beforeExpr: !0 }),
  coalesce: bt("??", 1),
  // Keyword token types.
  _break: B("break"),
  _case: B("case", kt),
  _catch: B("catch"),
  _continue: B("continue"),
  _debugger: B("debugger"),
  _default: B("default", kt),
  _do: B("do", { isLoop: !0, beforeExpr: !0 }),
  _else: B("else", kt),
  _finally: B("finally"),
  _for: B("for", { isLoop: !0 }),
  _function: B("function", lt),
  _if: B("if"),
  _return: B("return", kt),
  _switch: B("switch"),
  _throw: B("throw", kt),
  _try: B("try"),
  _var: B("var"),
  _const: B("const"),
  _while: B("while", { isLoop: !0 }),
  _with: B("with"),
  _new: B("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: B("this", lt),
  _super: B("super", lt),
  _class: B("class", lt),
  _extends: B("extends", kt),
  _export: B("export"),
  _import: B("import", lt),
  _null: B("null", lt),
  _true: B("true", lt),
  _false: B("false", lt),
  _in: B("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: B("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: B("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: B("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: B("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, ut = /\r\n?|\n|\u2028|\u2029/, ls = new RegExp(ut.source, "g");
function Zt(t) {
  return t === 10 || t === 13 || t === 8232 || t === 8233;
}
function fs(t, e, i) {
  i === void 0 && (i = t.length);
  for (var s = e; s < i; s++) {
    var a = t.charCodeAt(s);
    if (Zt(a))
      return s < i - 1 && a === 13 && t.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
  }
  return -1;
}
var ui = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, at = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ds = Object.prototype, Er = ds.hasOwnProperty, Ir = ds.toString, ie = Object.hasOwn || (function(t, e) {
  return Er.call(t, e);
}), Ei = Array.isArray || (function(t) {
  return Ir.call(t) === "[object Array]";
}), Ii = /* @__PURE__ */ Object.create(null);
function zt(t) {
  return Ii[t] || (Ii[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"));
}
function Nt(t) {
  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
var Nr = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Yt = function(e, i) {
  this.line = e, this.column = i;
};
Yt.prototype.offset = function(e) {
  return new Yt(this.line, this.column + e);
};
var fe = function(e, i, s) {
  this.start = i, this.end = s, e.sourceFile !== null && (this.source = e.sourceFile);
};
function ci(t, e) {
  for (var i = 1, s = 0; ; ) {
    var a = fs(t, s, e);
    if (a < 0)
      return new Yt(i, e - s);
    ++i, s = a;
  }
}
var Pe = {
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
}, Ni = !1;
function Lr(t) {
  var e = {};
  for (var i in Pe)
    e[i] = t && ie(t, i) ? t[i] : Pe[i];
  if (e.ecmaVersion === "latest" ? e.ecmaVersion = 1e8 : e.ecmaVersion == null ? (!Ni && typeof console == "object" && console.warn && (Ni = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), e.allowReserved == null && (e.allowReserved = e.ecmaVersion < 5), (!t || t.allowHashBang == null) && (e.allowHashBang = e.ecmaVersion >= 14), Ei(e.onToken)) {
    var s = e.onToken;
    e.onToken = function(a) {
      return s.push(a);
    };
  }
  return Ei(e.onComment) && (e.onComment = Or(e, e.onComment)), e;
}
function Or(t, e) {
  return function(i, s, a, o, h, d) {
    var y = {
      type: i ? "Block" : "Line",
      value: s,
      start: a,
      end: o
    };
    t.locations && (y.loc = new fe(this, h, d)), t.ranges && (y.range = [a, o]), e.push(y);
  };
}
var pe = 1, se = 2, hi = 4, ms = 8, pi = 16, ys = 32, Re = 64, vs = 128, qt = 256, de = 512, De = pe | se | qt;
function li(t, e) {
  return se | (t ? hi : 0) | (e ? ms : 0);
}
var Ae = 0, fi = 1, Mt = 2, xs = 3, gs = 4, bs = 5, X = function(e, i, s) {
  this.options = e = Lr(e), this.sourceFile = e.sourceFile, this.keywords = zt(_r[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
  var a = "";
  e.allowReserved !== !0 && (a = He[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (a += " await")), this.reservedWords = zt(a);
  var o = (a ? a + " " : "") + He.strict;
  this.reservedWordsStrict = zt(o), this.reservedWordsStrictBind = zt(o + " " + He.strictBind), this.input = String(i), this.containsEsc = !1, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf(`
`, s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(ut).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = p.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(pe), this.regexpState = null, this.privateNameStack = [];
}, Pt = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
X.prototype.parse = function() {
  var e = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(e);
};
Pt.inFunction.get = function() {
  return (this.currentVarScope().flags & se) > 0;
};
Pt.inGenerator.get = function() {
  return (this.currentVarScope().flags & ms) > 0;
};
Pt.inAsync.get = function() {
  return (this.currentVarScope().flags & hi) > 0;
};
Pt.canAwait.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], i = e.flags;
    if (i & (qt | de))
      return !1;
    if (i & se)
      return (i & hi) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
Pt.allowSuper.get = function() {
  var t = this.currentThisScope(), e = t.flags;
  return (e & Re) > 0 || this.options.allowSuperOutsideMethod;
};
Pt.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & vs) > 0;
};
Pt.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Pt.allowNewDotTarget.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], i = e.flags;
    if (i & (qt | de) || i & se && !(i & pi))
      return !0;
  }
  return !1;
};
Pt.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & qt) > 0;
};
X.extend = function() {
  for (var e = [], i = arguments.length; i--; ) e[i] = arguments[i];
  for (var s = this, a = 0; a < e.length; a++)
    s = e[a](s);
  return s;
};
X.parse = function(e, i) {
  return new this(i, e).parse();
};
X.parseExpressionAt = function(e, i, s) {
  var a = new this(s, e, i);
  return a.nextToken(), a.parseExpression();
};
X.tokenizer = function(e, i) {
  return new this(i, e);
};
Object.defineProperties(X.prototype, Pt);
var ct = X.prototype, Mr = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
ct.strictDirective = function(t) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    at.lastIndex = t, t += at.exec(this.input)[0].length;
    var e = Mr.exec(this.input.slice(t));
    if (!e)
      return !1;
    if ((e[1] || e[2]) === "use strict") {
      at.lastIndex = t + e[0].length;
      var i = at.exec(this.input), s = i.index + i[0].length, a = this.input.charAt(s);
      return a === ";" || a === "}" || ut.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(a) || a === "!" && this.input.charAt(s + 1) === "=");
    }
    t += e[0].length, at.lastIndex = t, t += at.exec(this.input)[0].length, this.input[t] === ";" && t++;
  }
};
ct.eat = function(t) {
  return this.type === t ? (this.next(), !0) : !1;
};
ct.isContextual = function(t) {
  return this.type === p.name && this.value === t && !this.containsEsc;
};
ct.eatContextual = function(t) {
  return this.isContextual(t) ? (this.next(), !0) : !1;
};
ct.expectContextual = function(t) {
  this.eatContextual(t) || this.unexpected();
};
ct.canInsertSemicolon = function() {
  return this.type === p.eof || this.type === p.braceR || ut.test(this.input.slice(this.lastTokEnd, this.start));
};
ct.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
ct.semicolon = function() {
  !this.eat(p.semi) && !this.insertSemicolon() && this.unexpected();
};
ct.afterTrailingComma = function(t, e) {
  if (this.type === t)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0;
};
ct.expect = function(t) {
  this.eat(t) || this.unexpected();
};
ct.unexpected = function(t) {
  this.raise(t ?? this.start, "Unexpected token");
};
var ze = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
ct.checkPatternErrors = function(t, e) {
  if (t) {
    t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
    var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, e ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
ct.checkExpressionErrors = function(t, e) {
  if (!t)
    return !1;
  var i = t.shorthandAssign, s = t.doubleProto;
  if (!e)
    return i >= 0 || s >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
};
ct.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
ct.isSimpleAssignTarget = function(t) {
  return t.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(t.expression) : t.type === "Identifier" || t.type === "MemberExpression";
};
var E = X.prototype;
E.parseTopLevel = function(t) {
  var e = /* @__PURE__ */ Object.create(null);
  for (t.body || (t.body = []); this.type !== p.eof; ) {
    var i = this.parseStatement(null, !0, e);
    t.body.push(i);
  }
  if (this.inModule)
    for (var s = 0, a = Object.keys(this.undefinedExports); s < a.length; s += 1) {
      var o = a[s];
      this.raiseRecoverable(this.undefinedExports[o].start, "Export '" + o + "' is not defined");
    }
  return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program");
};
var di = { kind: "loop" }, Rr = { kind: "switch" };
E.isLet = function(t) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  at.lastIndex = this.pos;
  var e = at.exec(this.input), i = this.pos + e[0].length, s = this.input.charCodeAt(i);
  if (s === 91 || s === 92)
    return !0;
  if (t)
    return !1;
  if (s === 123 || s > 55295 && s < 56320)
    return !0;
  if (_t(s, !0)) {
    for (var a = i + 1; It(s = this.input.charCodeAt(a), !0); )
      ++a;
    if (s === 92 || s > 55295 && s < 56320)
      return !0;
    var o = this.input.slice(i, a);
    if (!Pr.test(o))
      return !0;
  }
  return !1;
};
E.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  at.lastIndex = this.pos;
  var t = at.exec(this.input), e = this.pos + t[0].length, i;
  return !ut.test(this.input.slice(this.pos, e)) && this.input.slice(e, e + 8) === "function" && (e + 8 === this.input.length || !(It(i = this.input.charCodeAt(e + 8)) || i > 55295 && i < 56320));
};
E.isUsingKeyword = function(t, e) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(t ? "await" : "using"))
    return !1;
  at.lastIndex = this.pos;
  var i = at.exec(this.input), s = this.pos + i[0].length;
  if (ut.test(this.input.slice(this.pos, s)))
    return !1;
  if (t) {
    var a = s + 5, o;
    if (this.input.slice(s, a) !== "using" || a === this.input.length || It(o = this.input.charCodeAt(a)) || o > 55295 && o < 56320)
      return !1;
    at.lastIndex = a;
    var h = at.exec(this.input);
    if (h && ut.test(this.input.slice(a, a + h[0].length)))
      return !1;
  }
  if (e) {
    var d = s + 2, y;
    if (this.input.slice(s, d) === "of" && (d === this.input.length || !It(y = this.input.charCodeAt(d)) && !(y > 55295 && y < 56320)))
      return !1;
  }
  var u = this.input.charCodeAt(s);
  return _t(u, !0) || u === 92;
};
E.isAwaitUsing = function(t) {
  return this.isUsingKeyword(!0, t);
};
E.isUsing = function(t) {
  return this.isUsingKeyword(!1, t);
};
E.parseStatement = function(t, e, i) {
  var s = this.type, a = this.startNode(), o;
  switch (this.isLet(t) && (s = p._var, o = "let"), s) {
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
      return o = o || this.value, t && o !== "var" && this.unexpected(), this.parseVarStatement(a, o);
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
        at.lastIndex = this.pos;
        var h = at.exec(this.input), d = this.pos + h[0].length, y = this.input.charCodeAt(d);
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
      var u = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (u)
        return e && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), u === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(a, !1, u), this.semicolon(), this.finishNode(a, "VariableDeclaration");
      var w = this.value, P = this.parseExpression();
      return s === p.name && P.type === "Identifier" && this.eat(p.colon) ? this.parseLabeledStatement(a, w, P, t) : this.parseExpressionStatement(a, P);
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
  return this.next(), this.labels.push(di), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(p._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(p.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement");
};
E.parseForStatement = function(t) {
  this.next();
  var e = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(di), this.enterScope(0), this.expect(p.parenL), this.type === p.semi)
    return e > -1 && this.unexpected(e), this.parseFor(t, null);
  var i = this.isLet();
  if (this.type === p._var || this.type === p._const || i) {
    var s = this.startNode(), a = i ? "let" : this.value;
    return this.next(), this.parseVar(s, !0, a), this.finishNode(s, "VariableDeclaration"), this.parseForAfterInit(t, s, e);
  }
  var o = this.isContextual("let"), h = !1, d = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (d) {
    var y = this.startNode();
    return this.next(), d === "await using" && this.next(), this.parseVar(y, !0, d), this.finishNode(y, "VariableDeclaration"), this.parseForAfterInit(t, y, e);
  }
  var u = this.containsEsc, w = new ze(), P = this.start, M = e > -1 ? this.parseExprSubscripts(w, "await") : this.parseExpression(!0, w);
  return this.type === p._in || (h = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (e > -1 ? (this.type === p._in && this.unexpected(e), t.await = !0) : h && this.options.ecmaVersion >= 8 && (M.start === P && !u && M.type === "Identifier" && M.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (t.await = !1)), o && h && this.raise(M.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(M, !1, w), this.checkLValPattern(M), this.parseForIn(t, M)) : (this.checkExpressionErrors(w, !0), e > -1 && this.unexpected(e), this.parseFor(t, M));
};
E.parseForAfterInit = function(t, e, i) {
  return (this.type === p._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && e.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === p._in ? i > -1 && this.unexpected(i) : t.await = i > -1), this.parseForIn(t, e)) : (i > -1 && this.unexpected(i), this.parseFor(t, e));
};
E.parseFunctionStatement = function(t, e, i) {
  return this.next(), this.parseFunction(t, ce | (i ? 0 : ei), !1, e);
};
E.parseIfStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(p._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement");
};
E.parseReturnStatement = function(t) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(p.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
};
E.parseSwitchStatement = function(t) {
  this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(p.braceL), this.labels.push(Rr), this.enterScope(0);
  for (var e, i = !1; this.type !== p.braceR; )
    if (this.type === p._case || this.type === p._default) {
      var s = this.type === p._case;
      e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), s ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(p.colon);
    } else
      e || this.unexpected(), e.consequent.push(this.parseStatement(null));
  return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement");
};
E.parseThrowStatement = function(t) {
  return this.next(), ut.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
};
var Dr = [];
E.parseCatchClauseParam = function() {
  var t = this.parseBindingAtom(), e = t.type === "Identifier";
  return this.enterScope(e ? ys : 0), this.checkLValPattern(t, e ? gs : Mt), this.expect(p.parenR), t;
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
  return this.next(), t.test = this.parseParenExpression(), this.labels.push(di), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement");
};
E.parseWithStatement = function(t) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement");
};
E.parseEmptyStatement = function(t) {
  return this.next(), this.finishNode(t, "EmptyStatement");
};
E.parseLabeledStatement = function(t, e, i, s) {
  for (var a = 0, o = this.labels; a < o.length; a += 1) {
    var h = o[a];
    h.name === e && this.raise(i.start, "Label '" + e + "' is already declared");
  }
  for (var d = this.type.isLoop ? "loop" : this.type === p._switch ? "switch" : null, y = this.labels.length - 1; y >= 0; y--) {
    var u = this.labels[y];
    if (u.statementStart === t.start)
      u.statementStart = this.start, u.kind = d;
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
  t.id = e === "using" || e === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(t.id, e === "var" ? fi : Mt, !1);
};
var ce = 1, ei = 2, ks = 4;
E.parseFunction = function(t, e, i, s, a) {
  this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === p.star && e & ei && this.unexpected(), t.generator = this.eat(p.star)), this.options.ecmaVersion >= 8 && (t.async = !!s), e & ce && (t.id = e & ks && this.type !== p.name ? null : this.parseIdent(), t.id && !(e & ei) && this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? fi : Mt : xs));
  var o = this.yieldPos, h = this.awaitPos, d = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(li(t.async, t.generator)), e & ce || (t.id = this.type === p.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1, a), this.yieldPos = o, this.awaitPos = h, this.awaitIdentPos = d, this.finishNode(t, e & ce ? "FunctionDeclaration" : "FunctionExpression");
};
E.parseFunctionParams = function(t) {
  this.expect(p.parenL), t.params = this.parseBindingList(p.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
E.parseClass = function(t, e) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
  var s = this.enterClassBody(), a = this.startNode(), o = !1;
  for (a.body = [], this.expect(p.braceL); this.type !== p.braceR; ) {
    var h = this.parseClassElement(t.superClass !== null);
    h && (a.body.push(h), h.type === "MethodDefinition" && h.kind === "constructor" ? (o && this.raiseRecoverable(h.start, "Duplicate constructor in the same class"), o = !0) : h.key && h.key.type === "PrivateIdentifier" && zr(s, h) && this.raiseRecoverable(h.key.start, "Identifier '#" + h.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), t.body = this.finishNode(a, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
};
E.parseClassElement = function(t) {
  if (this.eat(p.semi))
    return null;
  var e = this.options.ecmaVersion, i = this.startNode(), s = "", a = !1, o = !1, h = "method", d = !1;
  if (this.eatContextual("static")) {
    if (e >= 13 && this.eat(p.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === p.star ? d = !0 : s = "static";
  }
  if (i.static = d, !s && e >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === p.star) && !this.canInsertSemicolon() ? o = !0 : s = "async"), !s && (e >= 9 || !o) && this.eat(p.star) && (a = !0), !s && !o && !a) {
    var y = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? h = y : s = y);
  }
  if (s ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = s, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), e < 13 || this.type === p.parenL || h !== "method" || a || o) {
    var u = !i.static && Ce(i, "constructor"), w = u && t;
    u && h !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = u ? "constructor" : h, this.parseClassMethod(i, a, o, w);
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
  t.kind === "constructor" ? (e && this.raise(a.start, "Constructor can't be a generator"), i && this.raise(a.start, "Constructor can't be an async method")) : t.static && Ce(t, "prototype") && this.raise(a.start, "Classes may not have a static property named prototype");
  var o = t.value = this.parseMethod(e, i, s);
  return t.kind === "get" && o.params.length !== 0 && this.raiseRecoverable(o.start, "getter should have no params"), t.kind === "set" && o.params.length !== 1 && this.raiseRecoverable(o.start, "setter should have exactly one param"), t.kind === "set" && o.params[0].type === "RestElement" && this.raiseRecoverable(o.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition");
};
E.parseClassField = function(t) {
  return Ce(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && Ce(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(p.eq) ? (this.enterScope(de | Re), t.value = this.parseMaybeAssign(), this.exitScope()) : t.value = null, this.semicolon(), this.finishNode(t, "PropertyDefinition");
};
E.parseClassStaticBlock = function(t) {
  t.body = [];
  var e = this.labels;
  for (this.labels = [], this.enterScope(qt | Re); this.type !== p.braceR; ) {
    var i = this.parseStatement(null);
    t.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = e, this.finishNode(t, "StaticBlock");
};
E.parseClassId = function(t, e) {
  this.type === p.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, Mt, !1)) : (e === !0 && this.unexpected(), t.id = null);
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
    for (var s = this.privateNameStack.length, a = s === 0 ? null : this.privateNameStack[s - 1], o = 0; o < i.length; ++o) {
      var h = i[o];
      ie(e, h.name) || (a ? a.used.push(h) : this.raiseRecoverable(h.start, "Private field '#" + h.name + "' must be declared in an enclosing class"));
    }
};
function zr(t, e) {
  var i = e.key.name, s = t[i], a = "true";
  return e.type === "MethodDefinition" && (e.kind === "get" || e.kind === "set") && (a = (e.static ? "s" : "i") + e.kind), s === "iget" && a === "iset" || s === "iset" && a === "iget" || s === "sget" && a === "sset" || s === "sset" && a === "sget" ? (t[i] = "true", !1) : s ? !0 : (t[i] = a, !1);
}
function Ce(t, e) {
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
    return this.next(), t && this.next(), this.parseFunction(e, ce | ks, !1, t);
  } else if (this.type === p._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var s = this.parseMaybeAssign();
    return this.semicolon(), s;
  }
};
E.checkExport = function(t, e, i) {
  t && (typeof e != "string" && (e = e.type === "Identifier" ? e.name : e.value), ie(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0);
};
E.checkPatternExport = function(t, e) {
  var i = e.type;
  if (i === "Identifier")
    this.checkExport(t, e, e.start);
  else if (i === "ObjectPattern")
    for (var s = 0, a = e.properties; s < a.length; s += 1) {
      var o = a[s];
      this.checkPatternExport(t, o);
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
  return this.next(), this.type === p.string ? (t.specifiers = Dr, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === p.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ImportDeclaration");
};
E.parseImportSpecifier = function() {
  var t = this.startNode();
  return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, Mt), this.finishNode(t, "ImportSpecifier");
};
E.parseImportDefaultSpecifier = function() {
  var t = this.startNode();
  return t.local = this.parseIdent(), this.checkLValSimple(t.local, Mt), this.finishNode(t, "ImportDefaultSpecifier");
};
E.parseImportNamespaceSpecifier = function() {
  var t = this.startNode();
  return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, Mt), this.finishNode(t, "ImportNamespaceSpecifier");
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
    ie(e, a) && this.raiseRecoverable(s.key.start, "Duplicate attribute key '" + a + "'"), e[a] = !0, t.push(s);
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
    return Nr.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t;
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
var wt = X.prototype;
wt.toAssignable = function(t, e, i) {
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
          var o = a[s];
          this.toAssignable(o, e), o.type === "RestElement" && (o.argument.type === "ArrayPattern" || o.argument.type === "ObjectPattern") && this.raise(o.argument.start, "Unexpected token");
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
wt.toAssignableList = function(t, e) {
  for (var i = t.length, s = 0; s < i; s++) {
    var a = t[s];
    a && this.toAssignable(a, e);
  }
  if (i) {
    var o = t[i - 1];
    this.options.ecmaVersion === 6 && e && o && o.type === "RestElement" && o.argument.type !== "Identifier" && this.unexpected(o.argument.start);
  }
  return t;
};
wt.parseSpread = function(t) {
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement");
};
wt.parseRestBinding = function() {
  var t = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== p.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
};
wt.parseBindingAtom = function() {
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
wt.parseBindingList = function(t, e, i, s) {
  for (var a = [], o = !0; !this.eat(t); )
    if (o ? o = !1 : this.expect(p.comma), e && this.type === p.comma)
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
wt.parseAssignableListItem = function(t) {
  var e = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(e), e;
};
wt.parseBindingListItem = function(t) {
  return t;
};
wt.parseMaybeDefault = function(t, e, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(p.eq))
    return i;
  var s = this.startNodeAt(t, e);
  return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");
};
wt.checkLValSimple = function(t, e, i) {
  e === void 0 && (e = Ae);
  var s = e !== Ae;
  switch (t.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (s ? "Binding " : "Assigning to ") + t.name + " in strict mode"), s && (e === Mt && t.name === "let" && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), i && (ie(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), e !== bs && this.declareName(t.name, e, t.start));
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
wt.checkLValPattern = function(t, e, i) {
  switch (e === void 0 && (e = Ae), t.type) {
    case "ObjectPattern":
      for (var s = 0, a = t.properties; s < a.length; s += 1) {
        var o = a[s];
        this.checkLValInnerPattern(o, e, i);
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
wt.checkLValInnerPattern = function(t, e, i) {
  switch (e === void 0 && (e = Ae), t.type) {
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
var ot = function(e, i, s, a, o) {
  this.token = e, this.isExpr = !!i, this.preserveSpace = !!s, this.override = a, this.generator = !!o;
}, H = {
  b_stat: new ot("{", !1),
  b_expr: new ot("{", !0),
  b_tmpl: new ot("${", !1),
  p_stat: new ot("(", !1),
  p_expr: new ot("(", !0),
  q_tmpl: new ot("`", !0, !0, function(t) {
    return t.tryReadTemplateToken();
  }),
  f_stat: new ot("function", !1),
  f_expr: new ot("function", !0),
  f_expr_gen: new ot("function", !0, !1, null, !0),
  f_gen: new ot("function", !1, !1, null, !0)
}, re = X.prototype;
re.initialContext = function() {
  return [H.b_stat];
};
re.curContext = function() {
  return this.context[this.context.length - 1];
};
re.braceIsBlock = function(t) {
  var e = this.curContext();
  return e === H.f_expr || e === H.f_stat ? !0 : t === p.colon && (e === H.b_stat || e === H.b_expr) ? !e.isExpr : t === p._return || t === p.name && this.exprAllowed ? ut.test(this.input.slice(this.lastTokEnd, this.start)) : t === p._else || t === p.semi || t === p.eof || t === p.parenR || t === p.arrow ? !0 : t === p.braceL ? e === H.b_stat : t === p._var || t === p._const || t === p.name ? !1 : !this.exprAllowed;
};
re.inGeneratorContext = function() {
  for (var t = this.context.length - 1; t >= 1; t--) {
    var e = this.context[t];
    if (e.token === "function")
      return e.generator;
  }
  return !1;
};
re.updateContext = function(t) {
  var e, i = this.type;
  i.keyword && t === p.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr;
};
re.overrideContext = function(t) {
  this.curContext() !== t && (this.context[this.context.length - 1] = t);
};
p.parenR.updateContext = p.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var t = this.context.pop();
  t === H.b_stat && this.curContext().token === "function" && (t = this.context.pop()), this.exprAllowed = !t.isExpr;
};
p.braceL.updateContext = function(t) {
  this.context.push(this.braceIsBlock(t) ? H.b_stat : H.b_expr), this.exprAllowed = !0;
};
p.dollarBraceL.updateContext = function() {
  this.context.push(H.b_tmpl), this.exprAllowed = !0;
};
p.parenL.updateContext = function(t) {
  var e = t === p._if || t === p._for || t === p._with || t === p._while;
  this.context.push(e ? H.p_stat : H.p_expr), this.exprAllowed = !0;
};
p.incDec.updateContext = function() {
};
p._function.updateContext = p._class.updateContext = function(t) {
  t.beforeExpr && t !== p._else && !(t === p.semi && this.curContext() !== H.p_stat) && !(t === p._return && ut.test(this.input.slice(this.lastTokEnd, this.start))) && !((t === p.colon || t === p.braceL) && this.curContext() === H.b_stat) ? this.context.push(H.f_expr) : this.context.push(H.f_stat), this.exprAllowed = !1;
};
p.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
p.backQuote.updateContext = function() {
  this.curContext() === H.q_tmpl ? this.context.pop() : this.context.push(H.q_tmpl), this.exprAllowed = !1;
};
p.star.updateContext = function(t) {
  if (t === p._function) {
    var e = this.context.length - 1;
    this.context[e] === H.f_expr ? this.context[e] = H.f_expr_gen : this.context[e] = H.f_gen;
  }
  this.exprAllowed = !0;
};
p.name.updateContext = function(t) {
  var e = !1;
  this.options.ecmaVersion >= 6 && t !== p.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e;
};
var D = X.prototype;
D.checkPropClash = function(t, e, i) {
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
    var o = t.kind;
    if (this.options.ecmaVersion >= 6) {
      a === "__proto__" && o === "init" && (e.proto && (i ? i.doubleProto < 0 && (i.doubleProto = s.start) : this.raiseRecoverable(s.start, "Redefinition of __proto__ property")), e.proto = !0);
      return;
    }
    a = "$" + a;
    var h = e[a];
    if (h) {
      var d;
      o === "init" ? d = this.strict && h.init || h.get || h.set : d = h.init || h[o], d && this.raiseRecoverable(s.start, "Redefinition of property");
    } else
      h = e[a] = {
        init: !1,
        get: !1,
        set: !1
      };
    h[o] = !0;
  }
};
D.parseExpression = function(t, e) {
  var i = this.start, s = this.startLoc, a = this.parseMaybeAssign(t, e);
  if (this.type === p.comma) {
    var o = this.startNodeAt(i, s);
    for (o.expressions = [a]; this.eat(p.comma); )
      o.expressions.push(this.parseMaybeAssign(t, e));
    return this.finishNode(o, "SequenceExpression");
  }
  return a;
};
D.parseMaybeAssign = function(t, e, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(t);
    this.exprAllowed = !1;
  }
  var s = !1, a = -1, o = -1, h = -1;
  e ? (a = e.parenthesizedAssign, o = e.trailingComma, h = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new ze(), s = !0);
  var d = this.start, y = this.startLoc;
  (this.type === p.parenL || this.type === p.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = t === "await");
  var u = this.parseMaybeConditional(t, e);
  if (i && (u = i.call(this, u, d, y)), this.type.isAssign) {
    var w = this.startNodeAt(d, y);
    return w.operator = this.value, this.type === p.eq && (u = this.toAssignable(u, !1, e)), s || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= u.start && (e.shorthandAssign = -1), this.type === p.eq ? this.checkLValPattern(u) : this.checkLValSimple(u), w.left = u, this.next(), w.right = this.parseMaybeAssign(t), h > -1 && (e.doubleProto = h), this.finishNode(w, "AssignmentExpression");
  } else
    s && this.checkExpressionErrors(e, !0);
  return a > -1 && (e.parenthesizedAssign = a), o > -1 && (e.trailingComma = o), u;
};
D.parseMaybeConditional = function(t, e) {
  var i = this.start, s = this.startLoc, a = this.parseExprOps(t, e);
  if (this.checkExpressionErrors(e))
    return a;
  if (this.eat(p.question)) {
    var o = this.startNodeAt(i, s);
    return o.test = a, o.consequent = this.parseMaybeAssign(), this.expect(p.colon), o.alternate = this.parseMaybeAssign(t), this.finishNode(o, "ConditionalExpression");
  }
  return a;
};
D.parseExprOps = function(t, e) {
  var i = this.start, s = this.startLoc, a = this.parseMaybeUnary(e, !1, !1, t);
  return this.checkExpressionErrors(e) || a.start === i && a.type === "ArrowFunctionExpression" ? a : this.parseExprOp(a, i, s, -1, t);
};
D.parseExprOp = function(t, e, i, s, a) {
  var o = this.type.binop;
  if (o != null && (!a || this.type !== p._in) && o > s) {
    var h = this.type === p.logicalOR || this.type === p.logicalAND, d = this.type === p.coalesce;
    d && (o = p.logicalAND.binop);
    var y = this.value;
    this.next();
    var u = this.start, w = this.startLoc, P = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, a), u, w, o, a), M = this.buildBinary(e, i, t, P, y, h || d);
    return (h && this.type === p.coalesce || d && (this.type === p.logicalOR || this.type === p.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(M, e, i, s, a);
  }
  return t;
};
D.buildBinary = function(t, e, i, s, a, o) {
  s.type === "PrivateIdentifier" && this.raise(s.start, "Private identifier can only be left side of binary expression");
  var h = this.startNodeAt(t, e);
  return h.left = i, h.operator = a, h.right = s, this.finishNode(h, o ? "LogicalExpression" : "BinaryExpression");
};
D.parseMaybeUnary = function(t, e, i, s) {
  var a = this.start, o = this.startLoc, h;
  if (this.isContextual("await") && this.canAwait)
    h = this.parseAwait(s), e = !0;
  else if (this.type.prefix) {
    var d = this.startNode(), y = this.type === p.incDec;
    d.operator = this.value, d.prefix = !0, this.next(), d.argument = this.parseMaybeUnary(null, !0, y, s), this.checkExpressionErrors(t, !0), y ? this.checkLValSimple(d.argument) : this.strict && d.operator === "delete" && Ss(d.argument) ? this.raiseRecoverable(d.start, "Deleting local variable in strict mode") : d.operator === "delete" && ii(d.argument) ? this.raiseRecoverable(d.start, "Private fields can not be deleted") : e = !0, h = this.finishNode(d, y ? "UpdateExpression" : "UnaryExpression");
  } else if (!e && this.type === p.privateId)
    (s || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), h = this.parsePrivateIdent(), this.type !== p._in && this.unexpected();
  else {
    if (h = this.parseExprSubscripts(t, s), this.checkExpressionErrors(t))
      return h;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var u = this.startNodeAt(a, o);
      u.operator = this.value, u.prefix = !1, u.argument = h, this.checkLValSimple(h), this.next(), h = this.finishNode(u, "UpdateExpression");
    }
  }
  if (!i && this.eat(p.starstar))
    if (e)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(a, o, h, this.parseMaybeUnary(null, !1, !1, s), "**", !1);
  else
    return h;
};
function Ss(t) {
  return t.type === "Identifier" || t.type === "ParenthesizedExpression" && Ss(t.expression);
}
function ii(t) {
  return t.type === "MemberExpression" && t.property.type === "PrivateIdentifier" || t.type === "ChainExpression" && ii(t.expression) || t.type === "ParenthesizedExpression" && ii(t.expression);
}
D.parseExprSubscripts = function(t, e) {
  var i = this.start, s = this.startLoc, a = this.parseExprAtom(t, e);
  if (a.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return a;
  var o = this.parseSubscripts(a, i, s, !1, e);
  return t && o.type === "MemberExpression" && (t.parenthesizedAssign >= o.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= o.start && (t.parenthesizedBind = -1), t.trailingComma >= o.start && (t.trailingComma = -1)), o;
};
D.parseSubscripts = function(t, e, i, s, a) {
  for (var o = this.options.ecmaVersion >= 8 && t.type === "Identifier" && t.name === "async" && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.potentialArrowAt === t.start, h = !1; ; ) {
    var d = this.parseSubscript(t, e, i, s, o, h, a);
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
D.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(p.arrow);
};
D.parseSubscriptAsyncArrow = function(t, e, i, s) {
  return this.parseArrowExpression(this.startNodeAt(t, e), i, !0, s);
};
D.parseSubscript = function(t, e, i, s, a, o, h) {
  var d = this.options.ecmaVersion >= 11, y = d && this.eat(p.questionDot);
  s && y && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var u = this.eat(p.bracketL);
  if (u || y && this.type !== p.parenL && this.type !== p.backQuote || this.eat(p.dot)) {
    var w = this.startNodeAt(e, i);
    w.object = t, u ? (w.property = this.parseExpression(), this.expect(p.bracketR)) : this.type === p.privateId && t.type !== "Super" ? w.property = this.parsePrivateIdent() : w.property = this.parseIdent(this.options.allowReserved !== "never"), w.computed = !!u, d && (w.optional = y), t = this.finishNode(w, "MemberExpression");
  } else if (!s && this.eat(p.parenL)) {
    var P = new ze(), M = this.yieldPos, U = this.awaitPos, ht = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var Et = this.parseExprList(p.parenR, this.options.ecmaVersion >= 8, !1, P);
    if (a && !y && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = M, this.awaitPos = U, this.awaitIdentPos = ht, this.parseSubscriptAsyncArrow(e, i, Et, h);
    this.checkExpressionErrors(P, !0), this.yieldPos = M || this.yieldPos, this.awaitPos = U || this.awaitPos, this.awaitIdentPos = ht || this.awaitIdentPos;
    var R = this.startNodeAt(e, i);
    R.callee = t, R.arguments = Et, d && (R.optional = y), t = this.finishNode(R, "CallExpression");
  } else if (this.type === p.backQuote) {
    (y || o) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var rt = this.startNodeAt(e, i);
    rt.tag = t, rt.quasi = this.parseTemplate({ isTagged: !0 }), t = this.finishNode(rt, "TaggedTemplateExpression");
  }
  return t;
};
D.parseExprAtom = function(t, e, i) {
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
        return this.overrideContext(H.f_expr), this.parseFunction(this.startNodeAt(o, h), 0, !1, !0, e);
      if (a && !this.canInsertSemicolon()) {
        if (this.eat(p.arrow))
          return this.parseArrowExpression(this.startNodeAt(o, h), [y], !1, e);
        if (this.options.ecmaVersion >= 8 && y.name === "async" && this.type === p.name && !d && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return y = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(p.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(o, h), [y], !0, e);
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
      var w = this.start, P = this.parseParenAndDistinguishExpression(a, e);
      return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(P) && (t.parenthesizedAssign = w), t.parenthesizedBind < 0 && (t.parenthesizedBind = w)), P;
    case p.bracketL:
      return s = this.startNode(), this.next(), s.elements = this.parseExprList(p.bracketR, !0, !0, t), this.finishNode(s, "ArrayExpression");
    case p.braceL:
      return this.overrideContext(H.b_expr), this.parseObj(!1, t);
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
D.parseExprImport = function(t) {
  var e = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === p.parenL && !t)
    return this.parseDynamicImport(e);
  if (this.type === p.dot) {
    var i = this.startNodeAt(e.start, e.loc && e.loc.start);
    return i.name = "import", e.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(e);
  } else
    this.unexpected();
};
D.parseDynamicImport = function(t) {
  if (this.next(), t.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(p.parenR) ? t.options = null : (this.expect(p.comma), this.afterTrailingComma(p.parenR) ? t.options = null : (t.options = this.parseMaybeAssign(), this.eat(p.parenR) || (this.expect(p.comma), this.afterTrailingComma(p.parenR) || this.unexpected())));
  else if (!this.eat(p.parenR)) {
    var e = this.start;
    this.eat(p.comma) && this.eat(p.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e);
  }
  return this.finishNode(t, "ImportExpression");
};
D.parseImportMeta = function(t) {
  this.next();
  var e = this.containsEsc;
  return t.property = this.parseIdent(!0), t.property.name !== "meta" && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty");
};
D.parseLiteral = function(t) {
  var e = this.startNode();
  return e.value = t, e.raw = this.input.slice(this.start, this.end), e.raw.charCodeAt(e.raw.length - 1) === 110 && (e.bigint = e.value != null ? e.value.toString() : e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal");
};
D.parseParenExpression = function() {
  this.expect(p.parenL);
  var t = this.parseExpression();
  return this.expect(p.parenR), t;
};
D.shouldParseArrow = function(t) {
  return !this.canInsertSemicolon();
};
D.parseParenAndDistinguishExpression = function(t, e) {
  var i = this.start, s = this.startLoc, a, o = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var h = this.start, d = this.startLoc, y = [], u = !0, w = !1, P = new ze(), M = this.yieldPos, U = this.awaitPos, ht;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== p.parenR; )
      if (u ? u = !1 : this.expect(p.comma), o && this.afterTrailingComma(p.parenR, !0)) {
        w = !0;
        break;
      } else if (this.type === p.ellipsis) {
        ht = this.start, y.push(this.parseParenItem(this.parseRestBinding())), this.type === p.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        y.push(this.parseMaybeAssign(!1, P, this.parseParenItem));
    var Et = this.lastTokEnd, R = this.lastTokEndLoc;
    if (this.expect(p.parenR), t && this.shouldParseArrow(y) && this.eat(p.arrow))
      return this.checkPatternErrors(P, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = M, this.awaitPos = U, this.parseParenArrowList(i, s, y, e);
    (!y.length || w) && this.unexpected(this.lastTokStart), ht && this.unexpected(ht), this.checkExpressionErrors(P, !0), this.yieldPos = M || this.yieldPos, this.awaitPos = U || this.awaitPos, y.length > 1 ? (a = this.startNodeAt(h, d), a.expressions = y, this.finishNodeAt(a, "SequenceExpression", Et, R)) : a = y[0];
  } else
    a = this.parseParenExpression();
  if (this.options.preserveParens) {
    var rt = this.startNodeAt(i, s);
    return rt.expression = a, this.finishNode(rt, "ParenthesizedExpression");
  } else
    return a;
};
D.parseParenItem = function(t) {
  return t;
};
D.parseParenArrowList = function(t, e, i, s) {
  return this.parseArrowExpression(this.startNodeAt(t, e), i, !1, s);
};
var Vr = [];
D.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var t = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === p.dot) {
    var e = this.startNodeAt(t.start, t.loc && t.loc.start);
    e.name = "new", t.meta = this.finishNode(e, "Identifier"), this.next();
    var i = this.containsEsc;
    return t.property = this.parseIdent(!0), t.property.name !== "target" && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty");
  }
  var s = this.start, a = this.startLoc;
  return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), s, a, !0, !1), this.eat(p.parenL) ? t.arguments = this.parseExprList(p.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = Vr, this.finishNode(t, "NewExpression");
};
D.parseTemplateElement = function(t) {
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
D.parseTemplate = function(t) {
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
D.isAsyncProp = function(t) {
  return !t.computed && t.key.type === "Identifier" && t.key.name === "async" && (this.type === p.name || this.type === p.num || this.type === p.string || this.type === p.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === p.star) && !ut.test(this.input.slice(this.lastTokEnd, this.start));
};
D.parseObj = function(t, e) {
  var i = this.startNode(), s = !0, a = {};
  for (i.properties = [], this.next(); !this.eat(p.braceR); ) {
    if (s)
      s = !1;
    else if (this.expect(p.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(p.braceR))
      break;
    var o = this.parseProperty(t, e);
    t || this.checkPropClash(o, a, e), i.properties.push(o);
  }
  return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression");
};
D.parseProperty = function(t, e) {
  var i = this.startNode(), s, a, o, h;
  if (this.options.ecmaVersion >= 9 && this.eat(p.ellipsis))
    return t ? (i.argument = this.parseIdent(!1), this.type === p.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, e), this.type === p.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (t || e) && (o = this.start, h = this.startLoc), t || (s = this.eat(p.star)));
  var d = this.containsEsc;
  return this.parsePropertyName(i), !t && !d && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(i) ? (a = !0, s = this.options.ecmaVersion >= 9 && this.eat(p.star), this.parsePropertyName(i)) : a = !1, this.parsePropertyValue(i, t, s, a, o, h, e, d), this.finishNode(i, "Property");
};
D.parseGetterSetter = function(t) {
  var e = t.key.name;
  this.parsePropertyName(t), t.value = this.parseMethod(!1), t.kind = e;
  var i = t.kind === "get" ? 0 : 1;
  if (t.value.params.length !== i) {
    var s = t.value.start;
    t.kind === "get" ? this.raiseRecoverable(s, "getter should have no params") : this.raiseRecoverable(s, "setter should have exactly one param");
  } else
    t.kind === "set" && t.value.params[0].type === "RestElement" && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params");
};
D.parsePropertyValue = function(t, e, i, s, a, o, h, d) {
  (i || s) && this.type === p.colon && this.unexpected(), this.eat(p.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, h), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === p.parenL ? (e && this.unexpected(), t.method = !0, t.value = this.parseMethod(i, s), t.kind = "init") : !e && !d && this.options.ecmaVersion >= 5 && !t.computed && t.key.type === "Identifier" && (t.key.name === "get" || t.key.name === "set") && this.type !== p.comma && this.type !== p.braceR && this.type !== p.eq ? ((i || s) && this.unexpected(), this.parseGetterSetter(t)) : this.options.ecmaVersion >= 6 && !t.computed && t.key.type === "Identifier" ? ((i || s) && this.unexpected(), this.checkUnreserved(t.key), t.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = a), e ? t.value = this.parseMaybeDefault(a, o, this.copyNode(t.key)) : this.type === p.eq && h ? (h.shorthandAssign < 0 && (h.shorthandAssign = this.start), t.value = this.parseMaybeDefault(a, o, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.kind = "init", t.shorthand = !0) : this.unexpected();
};
D.parsePropertyName = function(t) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(p.bracketL))
      return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(p.bracketR), t.key;
    t.computed = !1;
  }
  return t.key = this.type === p.num || this.type === p.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
D.initFunction = function(t) {
  t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1);
};
D.parseMethod = function(t, e, i) {
  var s = this.startNode(), a = this.yieldPos, o = this.awaitPos, h = this.awaitIdentPos;
  return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = t), this.options.ecmaVersion >= 8 && (s.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(li(e, s.generator) | Re | (i ? vs : 0)), this.expect(p.parenL), s.params = this.parseBindingList(p.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0, !1), this.yieldPos = a, this.awaitPos = o, this.awaitIdentPos = h, this.finishNode(s, "FunctionExpression");
};
D.parseArrowExpression = function(t, e, i, s) {
  var a = this.yieldPos, o = this.awaitPos, h = this.awaitIdentPos;
  return this.enterScope(li(i, !1) | pi), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, s), this.yieldPos = a, this.awaitPos = o, this.awaitIdentPos = h, this.finishNode(t, "ArrowFunctionExpression");
};
D.parseFunctionBody = function(t, e, i, s) {
  var a = e && this.type !== p.braceL, o = this.strict, h = !1;
  if (a)
    t.body = this.parseMaybeAssign(s), t.expression = !0, this.checkParams(t, !1);
  else {
    var d = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
    (!o || d) && (h = this.strictDirective(this.end), h && d && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var y = this.labels;
    this.labels = [], h && (this.strict = !0), this.checkParams(t, !o && !h && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, bs), t.body = this.parseBlock(!1, void 0, h && !o), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = y;
  }
  this.exitScope();
};
D.isSimpleParamList = function(t) {
  for (var e = 0, i = t; e < i.length; e += 1) {
    var s = i[e];
    if (s.type !== "Identifier")
      return !1;
  }
  return !0;
};
D.checkParams = function(t, e) {
  for (var i = /* @__PURE__ */ Object.create(null), s = 0, a = t.params; s < a.length; s += 1) {
    var o = a[s];
    this.checkLValInnerPattern(o, fi, e ? null : i);
  }
};
D.parseExprList = function(t, e, i, s) {
  for (var a = [], o = !0; !this.eat(t); ) {
    if (o)
      o = !1;
    else if (this.expect(p.comma), e && this.afterTrailingComma(t))
      break;
    var h = void 0;
    i && this.type === p.comma ? h = null : this.type === p.ellipsis ? (h = this.parseSpread(s), s && this.type === p.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : h = this.parseMaybeAssign(!1, s), a.push(h);
  }
  return a;
};
D.checkUnreserved = function(t) {
  var e = t.start, i = t.end, s = t.name;
  if (this.inGenerator && s === "yield" && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && s === "await" && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & De) && s === "arguments" && this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (s === "arguments" || s === "await") && this.raise(e, "Cannot use " + s + " in class static initialization block"), this.keywords.test(s) && this.raise(e, "Unexpected keyword '" + s + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(e, i).indexOf("\\") !== -1)) {
    var a = this.strict ? this.reservedWordsStrict : this.reservedWords;
    a.test(s) && (!this.inAsync && s === "await" && this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + s + "' is reserved"));
  }
};
D.parseIdent = function(t) {
  var e = this.parseIdentNode();
  return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), e.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = e.start)), e;
};
D.parseIdentNode = function() {
  var t = this.startNode();
  return this.type === p.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, (t.name === "class" || t.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = p.name) : this.unexpected(), t;
};
D.parsePrivateIdent = function() {
  var t = this.startNode();
  return this.type === p.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t;
};
D.parseYield = function(t) {
  this.yieldPos || (this.yieldPos = this.start);
  var e = this.startNode();
  return this.next(), this.type === p.semi || this.canInsertSemicolon() || this.type !== p.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(p.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression");
};
D.parseAwait = function(t) {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression");
};
var Ee = X.prototype;
Ee.raise = function(t, e) {
  var i = ci(this.input, t);
  e += " (" + i.line + ":" + i.column + ")", this.sourceFile && (e += " in " + this.sourceFile);
  var s = new SyntaxError(e);
  throw s.pos = t, s.loc = i, s.raisedAt = this.pos, s;
};
Ee.raiseRecoverable = Ee.raise;
Ee.curPosition = function() {
  if (this.options.locations)
    return new Yt(this.curLine, this.pos - this.lineStart);
};
var Bt = X.prototype, Fr = function(e) {
  this.flags = e, this.var = [], this.lexical = [], this.functions = [];
};
Bt.enterScope = function(t) {
  this.scopeStack.push(new Fr(t));
};
Bt.exitScope = function() {
  this.scopeStack.pop();
};
Bt.treatFunctionsAsVarInScope = function(t) {
  return t.flags & se || !this.inModule && t.flags & pe;
};
Bt.declareName = function(t, e, i) {
  var s = !1;
  if (e === Mt) {
    var a = this.currentScope();
    s = a.lexical.indexOf(t) > -1 || a.functions.indexOf(t) > -1 || a.var.indexOf(t) > -1, a.lexical.push(t), this.inModule && a.flags & pe && delete this.undefinedExports[t];
  } else if (e === gs) {
    var o = this.currentScope();
    o.lexical.push(t);
  } else if (e === xs) {
    var h = this.currentScope();
    this.treatFunctionsAsVar ? s = h.lexical.indexOf(t) > -1 : s = h.lexical.indexOf(t) > -1 || h.var.indexOf(t) > -1, h.functions.push(t);
  } else
    for (var d = this.scopeStack.length - 1; d >= 0; --d) {
      var y = this.scopeStack[d];
      if (y.lexical.indexOf(t) > -1 && !(y.flags & ys && y.lexical[0] === t) || !this.treatFunctionsAsVarInScope(y) && y.functions.indexOf(t) > -1) {
        s = !0;
        break;
      }
      if (y.var.push(t), this.inModule && y.flags & pe && delete this.undefinedExports[t], y.flags & De)
        break;
    }
  s && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared");
};
Bt.checkLocalExport = function(t) {
  this.scopeStack[0].lexical.indexOf(t.name) === -1 && this.scopeStack[0].var.indexOf(t.name) === -1 && (this.undefinedExports[t.name] = t);
};
Bt.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Bt.currentVarScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (De | de | qt))
      return e;
  }
};
Bt.currentThisScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (De | de | qt) && !(e.flags & pi))
      return e;
  }
};
var me = function(e, i, s) {
  this.type = "", this.start = i, this.end = 0, e.options.locations && (this.loc = new fe(e, s)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [i, 0]);
}, ye = X.prototype;
ye.startNode = function() {
  return new me(this, this.start, this.startLoc);
};
ye.startNodeAt = function(t, e) {
  return new me(this, t, e);
};
function ws(t, e, i, s) {
  return t.type = e, t.end = i, this.options.locations && (t.loc.end = s), this.options.ranges && (t.range[1] = i), t;
}
ye.finishNode = function(t, e) {
  return ws.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
};
ye.finishNodeAt = function(t, e, i, s) {
  return ws.call(this, t, e, i, s);
};
ye.copyNode = function(t) {
  var e = new me(this, t.start, this.startLoc);
  for (var i in t)
    e[i] = t[i];
  return e;
};
var jr = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", Ts = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", _s = Ts + " Extended_Pictographic", Ps = _s, As = Ps + " EBase EComp EMod EPres ExtPict", Cs = As, Br = Cs, $r = {
  9: Ts,
  10: _s,
  11: Ps,
  12: As,
  13: Cs,
  14: Br
}, Ur = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Zr = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Ur
}, Li = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Es = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Is = Es + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Ns = Is + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Ls = Ns + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Os = Ls + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", qr = Os + " " + jr, Hr = {
  9: Es,
  10: Is,
  11: Ns,
  12: Ls,
  13: Os,
  14: qr
}, Ms = {};
function Wr(t) {
  var e = Ms[t] = {
    binary: zt($r[t] + " " + Li),
    binaryOfStrings: zt(Zr[t]),
    nonBinary: {
      General_Category: zt(Li),
      Script: zt(Hr[t])
    }
  };
  e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions;
}
for (var Ke = 0, Oi = [9, 10, 11, 12, 13, 14]; Ke < Oi.length; Ke += 1) {
  var Kr = Oi[Ke];
  Wr(Kr);
}
var A = X.prototype, Ie = function(e, i) {
  this.parent = e, this.base = i || this;
};
Ie.prototype.separatedFrom = function(e) {
  for (var i = this; i; i = i.parent)
    for (var s = e; s; s = s.parent)
      if (i.base === s.base && i !== s)
        return !0;
  return !1;
};
Ie.prototype.sibling = function() {
  return new Ie(this.parent, this.base);
};
var At = function(e) {
  this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : "") + (e.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Ms[e.options.ecmaVersion >= 14 ? 14 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
At.prototype.reset = function(e, i, s) {
  var a = s.indexOf("v") !== -1, o = s.indexOf("u") !== -1;
  this.start = e | 0, this.source = i + "", this.flags = s, a && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = o && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = o && this.parser.options.ecmaVersion >= 9);
};
At.prototype.raise = function(e) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
};
At.prototype.at = function(e, i) {
  i === void 0 && (i = !1);
  var s = this.source, a = s.length;
  if (e >= a)
    return -1;
  var o = s.charCodeAt(e);
  if (!(i || this.switchU) || o <= 55295 || o >= 57344 || e + 1 >= a)
    return o;
  var h = s.charCodeAt(e + 1);
  return h >= 56320 && h <= 57343 ? (o << 10) + h - 56613888 : o;
};
At.prototype.nextIndex = function(e, i) {
  i === void 0 && (i = !1);
  var s = this.source, a = s.length;
  if (e >= a)
    return a;
  var o = s.charCodeAt(e), h;
  return !(i || this.switchU) || o <= 55295 || o >= 57344 || e + 1 >= a || (h = s.charCodeAt(e + 1)) < 56320 || h > 57343 ? e + 1 : e + 2;
};
At.prototype.current = function(e) {
  return e === void 0 && (e = !1), this.at(this.pos, e);
};
At.prototype.lookahead = function(e) {
  return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
};
At.prototype.advance = function(e) {
  e === void 0 && (e = !1), this.pos = this.nextIndex(this.pos, e);
};
At.prototype.eat = function(e, i) {
  return i === void 0 && (i = !1), this.current(i) === e ? (this.advance(i), !0) : !1;
};
At.prototype.eatChars = function(e, i) {
  i === void 0 && (i = !1);
  for (var s = this.pos, a = 0, o = e; a < o.length; a += 1) {
    var h = o[a], d = this.at(s, i);
    if (d === -1 || d !== h)
      return !1;
    s = this.nextIndex(s, i);
  }
  return this.pos = s, !0;
};
A.validateRegExpFlags = function(t) {
  for (var e = t.validFlags, i = t.flags, s = !1, a = !1, o = 0; o < i.length; o++) {
    var h = i.charAt(o);
    e.indexOf(h) === -1 && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(h, o + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), h === "u" && (s = !0), h === "v" && (a = !0);
  }
  this.options.ecmaVersion >= 15 && s && a && this.raise(t.start, "Invalid regular expression flag");
};
function Gr(t) {
  for (var e in t)
    return !0;
  return !1;
}
A.validateRegExpPattern = function(t) {
  this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && Gr(t.groupNames) && (t.switchN = !0, this.regexp_pattern(t));
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
  for (e && (t.branchID = new Ie(t.branchID, null)), this.regexp_alternative(t); t.eat(
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
            var o = i.charAt(a);
            i.indexOf(o, a + 1) > -1 && t.raise("Duplicate regular expression modifiers");
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
  for (var e = "", i = 0; (i = t.current()) !== -1 && Jr(i); )
    e += Nt(i), t.advance();
  return e;
};
function Jr(t) {
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
  return Rs(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function Rs(t) {
  return t === 36 || t >= 40 && t <= 43 || t === 46 || t === 63 || t >= 91 && t <= 94 || t >= 123 && t <= 125;
}
A.regexp_eatPatternCharacters = function(t) {
  for (var e = t.pos, i = 0; (i = t.current()) !== -1 && !Rs(i); )
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
          var o = a[s];
          o.separatedFrom(t.branchID) || t.raise("Duplicate capture group name");
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
    for (t.lastStringValue += Nt(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t); )
      t.lastStringValue += Nt(t.lastIntValue);
    return !0;
  }
  return !1;
};
A.regexp_eatRegExpIdentifierStart = function(t) {
  var e = t.pos, i = this.options.ecmaVersion >= 11, s = t.current(i);
  return t.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (s = t.lastIntValue), Xr(s) ? (t.lastIntValue = s, !0) : (t.pos = e, !1);
};
function Xr(t) {
  return _t(t, !0) || t === 36 || t === 95;
}
A.regexp_eatRegExpIdentifierPart = function(t) {
  var e = t.pos, i = this.options.ecmaVersion >= 11, s = t.current(i);
  return t.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (s = t.lastIntValue), Qr(s) ? (t.lastIntValue = s, !0) : (t.pos = e, !1);
};
function Qr(t) {
  return It(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
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
  return t.current() === 48 && !Ve(t.lookahead()) ? (t.lastIntValue = 0, t.advance(), !0) : !1;
};
A.regexp_eatControlEscape = function(t) {
  var e = t.current();
  return e === 116 ? (t.lastIntValue = 9, t.advance(), !0) : e === 110 ? (t.lastIntValue = 10, t.advance(), !0) : e === 118 ? (t.lastIntValue = 11, t.advance(), !0) : e === 102 ? (t.lastIntValue = 12, t.advance(), !0) : e === 114 ? (t.lastIntValue = 13, t.advance(), !0) : !1;
};
A.regexp_eatControlLetter = function(t) {
  var e = t.current();
  return Ds(e) ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
function Ds(t) {
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
        var o = t.pos;
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
        t.pos = o, t.lastIntValue = a;
      }
      return !0;
    }
    if (s && t.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(t) && t.eat(
      125
      /* } */
    ) && Yr(t.lastIntValue))
      return !0;
    s && t.raise("Invalid unicode escape"), t.pos = i;
  }
  return !1;
};
function Yr(t) {
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
var zs = 0, Lt = 1, St = 2;
A.regexp_eatCharacterClassEscape = function(t) {
  var e = t.current();
  if (ta(e))
    return t.lastIntValue = -1, t.advance(), Lt;
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
      return i && s === St && t.raise("Invalid property name"), s;
    t.raise("Invalid property name");
  }
  return zs;
};
function ta(t) {
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
      return this.regexp_validateUnicodePropertyNameAndValue(t, i, s), Lt;
    }
  }
  if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
    var a = t.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(t, a);
  }
  return zs;
};
A.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
  ie(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(i) || t.raise("Invalid property value");
};
A.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
  if (t.unicodeProperties.binary.test(e))
    return Lt;
  if (t.switchV && t.unicodeProperties.binaryOfStrings.test(e))
    return St;
  t.raise("Invalid property name");
};
A.regexp_eatUnicodePropertyName = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; Vs(e = t.current()); )
    t.lastStringValue += Nt(e), t.advance();
  return t.lastStringValue !== "";
};
function Vs(t) {
  return Ds(t) || t === 95;
}
A.regexp_eatUnicodePropertyValue = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; ea(e = t.current()); )
    t.lastStringValue += Nt(e), t.advance();
  return t.lastStringValue !== "";
};
function ea(t) {
  return Vs(t) || Ve(t);
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
    ) || t.raise("Unterminated character class"), e && i === St && t.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
A.regexp_classContents = function(t) {
  return t.current() === 93 ? Lt : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), Lt);
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
      (i === 99 || Bs(i)) && t.raise("Invalid class escape"), t.raise("Invalid escape");
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
  var e = Lt, i;
  if (!this.regexp_eatClassSetRange(t)) if (i = this.regexp_eatClassSetOperand(t)) {
    i === St && (e = St);
    for (var s = t.pos; t.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (t.current() !== 38 && (i = this.regexp_eatClassSetOperand(t))) {
        i !== St && (e = Lt);
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
      i === St && (e = St);
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
  return this.regexp_eatClassSetCharacter(t) ? Lt : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t);
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
      return i && s === St && t.raise("Negated character class may contain strings"), s;
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
    this.regexp_classString(t) === St && (e = St);
  return e;
};
A.regexp_classString = function(t) {
  for (var e = 0; this.regexp_eatClassSetCharacter(t); )
    e++;
  return e === 1 ? Lt : St;
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
  return i < 0 || i === t.lookahead() && ia(i) || sa(i) ? !1 : (t.advance(), t.lastIntValue = i, !0);
};
function ia(t) {
  return t === 33 || t >= 35 && t <= 38 || t >= 42 && t <= 44 || t === 46 || t >= 58 && t <= 64 || t === 94 || t === 96 || t === 126;
}
function sa(t) {
  return t === 40 || t === 41 || t === 45 || t === 47 || t >= 91 && t <= 93 || t >= 123 && t <= 125;
}
A.regexp_eatClassSetReservedPunctuator = function(t) {
  var e = t.current();
  return ra(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function ra(t) {
  return t === 33 || t === 35 || t === 37 || t === 38 || t === 44 || t === 45 || t >= 58 && t <= 62 || t === 64 || t === 96 || t === 126;
}
A.regexp_eatClassControlLetter = function(t) {
  var e = t.current();
  return Ve(e) || e === 95 ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
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
  for (t.lastIntValue = 0; Ve(i = t.current()); )
    t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
  return t.pos !== e;
};
function Ve(t) {
  return t >= 48 && t <= 57;
}
A.regexp_eatHexDigits = function(t) {
  var e = t.pos, i = 0;
  for (t.lastIntValue = 0; Fs(i = t.current()); )
    t.lastIntValue = 16 * t.lastIntValue + js(i), t.advance();
  return t.pos !== e;
};
function Fs(t) {
  return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
}
function js(t) {
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
  return Bs(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1);
};
function Bs(t) {
  return t >= 48 && t <= 55;
}
A.regexp_eatFixedHexDigits = function(t, e) {
  var i = t.pos;
  t.lastIntValue = 0;
  for (var s = 0; s < e; ++s) {
    var a = t.current();
    if (!Fs(a))
      return t.pos = i, !1;
    t.lastIntValue = 16 * t.lastIntValue + js(a), t.advance();
  }
  return !0;
};
var Fe = function(e) {
  this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new fe(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
}, j = X.prototype;
j.next = function(t) {
  !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Fe(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
j.getToken = function() {
  return this.next(), new Fe(this);
};
typeof Symbol < "u" && (j[Symbol.iterator] = function() {
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
j.nextToken = function() {
  var t = this.curContext();
  if ((!t || !t.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(p.eof);
  if (t.override)
    return t.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
j.readToken = function(t) {
  return _t(t, this.options.ecmaVersion >= 6) || t === 92 ? this.readWord() : this.getTokenFromCode(t);
};
j.fullCharCodeAtPos = function() {
  var t = this.input.charCodeAt(this.pos);
  if (t <= 55295 || t >= 56320)
    return t;
  var e = this.input.charCodeAt(this.pos + 1);
  return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888;
};
j.skipBlockComment = function() {
  var t = this.options.onComment && this.curPosition(), e = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
    for (var s = void 0, a = e; (s = fs(this.input, a, this.pos)) > -1; )
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
j.skipLineComment = function(t) {
  for (var e = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !Zt(s); )
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
j.skipSpace = function() {
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
        if (t > 8 && t < 14 || t >= 5760 && ui.test(String.fromCharCode(t)))
          ++this.pos;
        else
          break t;
    }
  }
};
j.finishToken = function(t, e) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = t, this.value = e, this.updateContext(i);
};
j.readToken_dot = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t >= 48 && t <= 57)
    return this.readNumber(!0);
  var e = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && t === 46 && e === 46 ? (this.pos += 3, this.finishToken(p.ellipsis)) : (++this.pos, this.finishToken(p.dot));
};
j.readToken_slash = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : t === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.slash, 1);
};
j.readToken_mult_modulo_exp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), i = 1, s = t === 42 ? p.star : p.modulo;
  return this.options.ecmaVersion >= 7 && t === 42 && e === 42 && (++i, s = p.starstar, e = this.input.charCodeAt(this.pos + 2)), e === 61 ? this.finishOp(p.assign, i + 1) : this.finishOp(s, i);
};
j.readToken_pipe_amp = function(t) {
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
j.readToken_caret = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.bitwiseXOR, 1);
};
j.readToken_plus_min = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === t ? e === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || ut.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(p.incDec, 2) : e === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.plusMin, 1);
};
j.readToken_lt_gt = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), i = 1;
  return e === t ? (i = t === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(p.assign, i + 1) : this.finishOp(p.bitShift, i)) : e === 33 && t === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (e === 61 && (i = 2), this.finishOp(p.relational, i));
};
j.readToken_eq_excl = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(p.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : t === 61 && e === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(p.arrow)) : this.finishOp(t === 61 ? p.eq : p.prefix, 1);
};
j.readToken_question = function() {
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
j.readToken_numberSign = function() {
  var t = this.options.ecmaVersion, e = 35;
  if (t >= 13 && (++this.pos, e = this.fullCharCodeAtPos(), _t(e, !0) || e === 92))
    return this.finishToken(p.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Nt(e) + "'");
};
j.getTokenFromCode = function(t) {
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
  this.raise(this.pos, "Unexpected character '" + Nt(t) + "'");
};
j.finishOp = function(t, e) {
  var i = this.input.slice(this.pos, this.pos + e);
  return this.pos += e, this.finishToken(t, i);
};
j.readRegexp = function() {
  for (var t, e, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var s = this.input.charAt(this.pos);
    if (ut.test(s) && this.raise(i, "Unterminated regular expression"), t)
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
  var o = this.pos, h = this.readWord1();
  this.containsEsc && this.unexpected(o);
  var d = this.regexpState || (this.regexpState = new At(this));
  d.reset(i, a, h), this.validateRegExpFlags(d), this.validateRegExpPattern(d);
  var y = null;
  try {
    y = new RegExp(a, h);
  } catch {
  }
  return this.finishToken(p.regexp, { pattern: a, flags: h, value: y });
};
j.readInt = function(t, e, i) {
  for (var s = this.options.ecmaVersion >= 12 && e === void 0, a = i && this.input.charCodeAt(this.pos) === 48, o = this.pos, h = 0, d = 0, y = 0, u = e ?? 1 / 0; y < u; ++y, ++this.pos) {
    var w = this.input.charCodeAt(this.pos), P = void 0;
    if (s && w === 95) {
      a && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), d === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), y === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), d = w;
      continue;
    }
    if (w >= 97 ? P = w - 97 + 10 : w >= 65 ? P = w - 65 + 10 : w >= 48 && w <= 57 ? P = w - 48 : P = 1 / 0, P >= t)
      break;
    d = w, h = h * t + P;
  }
  return s && d === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === o || e != null && this.pos - o !== e ? null : h;
};
function aa(t, e) {
  return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
}
function $s(t) {
  return typeof BigInt != "function" ? null : BigInt(t.replace(/_/g, ""));
}
j.readRadixNumber = function(t) {
  var e = this.pos;
  this.pos += 2;
  var i = this.readInt(t);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = $s(this.input.slice(e, this.pos)), ++this.pos) : _t(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(p.num, i);
};
j.readNumber = function(t) {
  var e = this.pos;
  !t && this.readInt(10, void 0, !0) === null && this.raise(e, "Invalid number");
  var i = this.pos - e >= 2 && this.input.charCodeAt(e) === 48;
  i && this.strict && this.raise(e, "Invalid number");
  var s = this.input.charCodeAt(this.pos);
  if (!i && !t && this.options.ecmaVersion >= 11 && s === 110) {
    var a = $s(this.input.slice(e, this.pos));
    return ++this.pos, _t(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(p.num, a);
  }
  i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1), s === 46 && !i && (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), (s === 69 || s === 101) && !i && (s = this.input.charCodeAt(++this.pos), (s === 43 || s === 45) && ++this.pos, this.readInt(10) === null && this.raise(e, "Invalid number")), _t(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var o = aa(this.input.slice(e, this.pos), i);
  return this.finishToken(p.num, o);
};
j.readCodePoint = function() {
  var t = this.input.charCodeAt(this.pos), e;
  if (t === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else
    e = this.readHexChar(4);
  return e;
};
j.readString = function(t) {
  for (var e = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var s = this.input.charCodeAt(this.pos);
    if (s === t)
      break;
    s === 92 ? (e += this.input.slice(i, this.pos), e += this.readEscapedChar(!1), i = this.pos) : s === 8232 || s === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Zt(s) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return e += this.input.slice(i, this.pos++), this.finishToken(p.string, e);
};
var Us = {};
j.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (t) {
    if (t === Us)
      this.readInvalidTemplateToken();
    else
      throw t;
  }
  this.inTemplateElement = !1;
};
j.invalidStringToken = function(t, e) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Us;
  this.raise(t, e);
};
j.readTmplToken = function() {
  for (var t = "", e = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === p.template || this.type === p.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(p.dollarBraceL)) : (++this.pos, this.finishToken(p.backQuote)) : (t += this.input.slice(e, this.pos), this.finishToken(p.template, t));
    if (i === 92)
      t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
    else if (Zt(i)) {
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
j.readEscapedChar = function(t) {
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
      return Nt(this.readCodePoint());
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
      return Zt(e) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(e);
  }
};
j.readHexChar = function(t) {
  var e = this.pos, i = this.readInt(16, t);
  return i === null && this.invalidStringToken(e, "Bad character escape sequence"), i;
};
j.readWord1 = function() {
  this.containsEsc = !1;
  for (var t = "", e = !0, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var a = this.fullCharCodeAtPos();
    if (It(a, s))
      this.pos += a <= 65535 ? 1 : 2;
    else if (a === 92) {
      this.containsEsc = !0, t += this.input.slice(i, this.pos);
      var o = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var h = this.readCodePoint();
      (e ? _t : It)(h, s) || this.invalidStringToken(o, "Invalid Unicode escape"), t += Nt(h), i = this.pos;
    } else
      break;
    e = !1;
  }
  return t + this.input.slice(i, this.pos);
};
j.readWord = function() {
  var t = this.readWord1(), e = p.name;
  return this.keywords.test(t) && (e = Qt[t]), this.finishToken(e, t);
};
var Zs = "8.15.0";
X.acorn = {
  Parser: X,
  version: Zs,
  defaultOptions: Pe,
  Position: Yt,
  SourceLocation: fe,
  getLineInfo: ci,
  Node: me,
  TokenType: V,
  tokTypes: p,
  keywordTypes: Qt,
  TokContext: ot,
  tokContexts: H,
  isIdentifierChar: It,
  isIdentifierStart: _t,
  Token: Fe,
  isNewLine: Zt,
  lineBreak: ut,
  lineBreakG: ls,
  nonASCIIwhitespace: ui
};
function na(t, e) {
  return X.parse(t, e);
}
function oa(t, e, i) {
  return X.parseExpressionAt(t, e, i);
}
function ua(t, e) {
  return X.tokenizer(t, e);
}
const ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: me,
  Parser: X,
  Position: Yt,
  SourceLocation: fe,
  TokContext: ot,
  Token: Fe,
  TokenType: V,
  defaultOptions: Pe,
  getLineInfo: ci,
  isIdentifierChar: It,
  isIdentifierStart: _t,
  isNewLine: Zt,
  keywordTypes: Qt,
  lineBreak: ut,
  lineBreakG: ls,
  nonASCIIwhitespace: ui,
  parse: na,
  parseExpressionAt: oa,
  tokContexts: H,
  tokTypes: p,
  tokenizer: ua,
  version: Zs
}, Symbol.toStringTag, { value: "Module" }));
function Mi(t, e) {
  for (var i = 0; i < e.length; i++) {
    var s = e[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, typeof (a = (function(o, h) {
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
function Ne() {
  return Ne = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, Ne.apply(this, arguments);
}
function ke(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, si(t, e);
}
function si(t, e) {
  return si = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, si(t, e);
}
function Ri(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
  return s;
}
function Di(t, e) {
  var i = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (i) return (i = i.call(t)).next.bind(i);
  if (Array.isArray(t) || (i = (function(a, o) {
    if (a) {
      if (typeof a == "string") return Ri(a, o);
      var h = Object.prototype.toString.call(a).slice(8, -1);
      return h === "Object" && a.constructor && (h = a.constructor.name), h === "Map" || h === "Set" ? Array.from(a) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Ri(a, o) : void 0;
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
  return e === void 0 && (e = {}), new V("name", e);
}
var ha = /* @__PURE__ */ new WeakMap();
function pa(t) {
  var e = ha.get(t.Parser.acorn || t);
  if (!e) {
    var i = { assert: vt(0, { startsExpr: yt }), asserts: vt(0, { startsExpr: yt }), global: vt(0, { startsExpr: yt }), keyof: vt(0, { startsExpr: yt }), readonly: vt(0, { startsExpr: yt }), unique: vt(0, { startsExpr: yt }), abstract: vt(0, { startsExpr: yt }), declare: vt(0, { startsExpr: yt }), enum: vt(0, { startsExpr: yt }), module: vt(0, { startsExpr: yt }), namespace: vt(0, { startsExpr: yt }), interface: vt(0, { startsExpr: yt }), type: vt(0, { startsExpr: yt }) }, s = { at: new V("@"), jsxName: new V("jsxName"), jsxText: new V("jsxText", { beforeExpr: !0 }), jsxTagStart: new V("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new V("jsxTagEnd") }, a = { tc_oTag: new ot("<tag", !1, !1), tc_cTag: new ot("</tag", !1, !1), tc_expr: new ot("<tag>...</tag>", !0, !0) }, o = new RegExp("^(?:" + Object.keys(i).join("|") + ")$");
    s.jsxTagStart.updateContext = function() {
      this.context.push(a.tc_expr), this.context.push(a.tc_oTag), this.exprAllowed = !1;
    }, s.jsxTagEnd.updateContext = function(h) {
      var d = this.context.pop();
      d === a.tc_oTag && h === p.slash || d === a.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === a.tc_expr) : this.exprAllowed = !0;
    }, e = { tokTypes: Ne({}, i, s), tokContexts: Ne({}, a), keywordsRegExp: o, tokenIsLiteralPropertyName: function(h) {
      return [p.name, p.string, p.num].concat(Object.values(Qt), Object.values(i)).includes(h);
    }, tokenIsKeywordOrIdentifier: function(h) {
      return [p.name].concat(Object.values(Qt), Object.values(i)).includes(h);
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
var oe = 1024, la = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), zi = new RegExp("(?=(" + la.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), ue = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function fa(t, e) {
  var i = e.key.name, s = t[i], a = "true";
  return e.type !== "MethodDefinition" || e.kind !== "get" && e.kind !== "set" || (a = (e.static ? "s" : "i") + e.kind), s === "iget" && a === "iset" || s === "iset" && a === "iget" || s === "sget" && a === "sset" || s === "sset" && a === "sget" ? (t[i] = "true", !1) : !!s || (t[i] = a, !1);
}
function Vi(t, e) {
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
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, da = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, ma = /^[\da-fA-F]+$/, ya = /^\d+$/;
function he(t) {
  return t && (t.type === "JSXIdentifier" ? t.name : t.type === "JSXNamespacedName" ? t.namespace.name + ":" + t.name.name : t.type === "JSXMemberExpression" ? he(t.object) + "." + he(t.property) : void 0);
}
var Ge = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function Fi(t) {
  if (!t) throw new Error("Assert fail");
}
function va(t) {
  return t === "accessor";
}
function xa(t) {
  return t === "in" || t === "out";
}
function Je(t, e) {
  return 2 | (t ? 4 : 0) | (e ? 8 : 0);
}
function ga(t) {
  if (t.type !== "MemberExpression") return !1;
  var e = t.property;
  return (!t.computed || !(e.type !== "TemplateLiteral" || e.expressions.length > 0)) && qs(t.object);
}
function qs(t) {
  return t.type === "Identifier" || t.type === "MemberExpression" && !t.computed && qs(t.object);
}
function ji(t) {
  return t === "private" || t === "public" || t === "protected";
}
function ba(t) {
  var e = {}, i = e.dts, s = i !== void 0 && i, a = e.allowSatisfies, o = a !== void 0 && a;
  return function(h) {
    var d = h.acorn || ca, y = pa(d), u = d.tokTypes, w = d.keywordTypes, P = d.isIdentifierStart, M = d.lineBreak, U = d.isNewLine, ht = d.tokContexts, Et = d.isIdentifierChar, R = y.tokTypes, rt = y.tokContexts, dt = y.keywordsRegExp, gt = y.tokenIsLiteralPropertyName, Ut = y.tokenIsTemplate, yr = y.tokenIsTSDeclarationStart, q = y.tokenIsIdentifier, xe = y.tokenIsKeywordOrIdentifier, vr = y.tokenIsTSTypeOperator;
    function xr(_, pt, nt) {
      nt === void 0 && (nt = _.length);
      for (var et = pt; et < nt; et++) {
        var $ = _.charCodeAt(et);
        if (U($)) return et < nt - 1 && $ === 13 && _.charCodeAt(et + 1) === 10 ? et + 2 : et + 1;
      }
      return -1;
    }
    h = (function(_, pt, nt) {
      var et = nt.tokTypes, $ = pt.tokTypes;
      return (function(f) {
        function r() {
          return f.apply(this, arguments) || this;
        }
        ke(r, f);
        var n = r.prototype;
        return n.takeDecorators = function(c) {
          var l = this.decoratorStack[this.decoratorStack.length - 1];
          l.length && (c.decorators = l, this.resetStartLocationFromNode(c, l[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, n.parseDecorators = function(c) {
          for (var l = this.decoratorStack[this.decoratorStack.length - 1]; this.match($.at); ) {
            var m = this.parseDecorator();
            l.push(m);
          }
          this.match(et._export) ? c || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, n.parseDecorator = function() {
          var c = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var l, m = this.start, v = this.startLoc;
          if (this.match(et.parenL)) {
            var x = this.start, b = this.startLoc;
            if (this.next(), l = this.parseExpression(), this.expect(et.parenR), this.options.preserveParens) {
              var k = this.startNodeAt(x, b);
              k.expression = l, l = this.finishNode(k, "ParenthesizedExpression");
            }
          } else for (l = this.parseIdent(!1); this.eat(et.dot); ) {
            var T = this.startNodeAt(m, v);
            T.object = l, T.property = this.parseIdent(!0), T.computed = !1, l = this.finishNode(T, "MemberExpression");
          }
          return c.expression = this.parseMaybeDecoratorArguments(l), this.decoratorStack.pop(), this.finishNode(c, "Decorator");
        }, n.parseMaybeDecoratorArguments = function(c) {
          if (this.eat(et.parenL)) {
            var l = this.startNodeAtNode(c);
            return l.callee = c, l.arguments = this.parseExprList(et.parenR, !1), this.finishNode(l, "CallExpression");
          }
          return c;
        }, r;
      })(_);
    })(h, y, d), h = (function(_, pt, nt, et) {
      var $ = _.tokTypes, f = pt.tokTypes, r = _.isNewLine, n = _.isIdentifierChar, c = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(l) {
        function m() {
          return l.apply(this, arguments) || this;
        }
        ke(m, l);
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
              b[0] === "#" ? b[1] === "x" ? (b = b.substr(2), ma.test(b) && (x = String.fromCharCode(parseInt(b, 16)))) : (b = b.substr(1), ya.test(b) && (x = String.fromCharCode(parseInt(b, 10)))) : x = da[b];
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
          var k = this.startNodeAt(x, b), T = [], N = this.jsx_parseOpeningElementAt(x, b), z = null;
          if (!N.selfClosing) {
            t: for (; ; ) switch (this.type) {
              case f.jsxTagStart:
                if (x = this.start, b = this.startLoc, this.next(), this.eat($.slash)) {
                  z = this.jsx_parseClosingElementAt(x, b);
                  break t;
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
            he(z.name) !== he(N.name) && this.raise(z.start, "Expected corresponding JSX closing tag for <" + he(N.name) + ">");
          }
          var C = N.name ? "Element" : "Fragment";
          return k["opening" + C] = N, k["closing" + C] = z, k.children = T, this.type === $.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(k, "JSX" + C);
        }, v.jsx_parseText = function() {
          var x = this.parseLiteral(this.value);
          return x.type = "JSXText", x;
        }, v.jsx_parseElement = function() {
          var x = this.start, b = this.startLoc;
          return this.next(), this.jsx_parseElementAt(x, b);
        }, m;
      })(nt);
    })(d, y, h), h = (function(_, pt, nt) {
      var et = pt.tokTypes, $ = nt.tokTypes;
      return (function(f) {
        function r() {
          return f.apply(this, arguments) || this;
        }
        ke(r, f);
        var n = r.prototype;
        return n.parseMaybeImportAttributes = function(c) {
          if (this.type === $._with || this.type === et.assert) {
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
    var gr = /* @__PURE__ */ (function(_) {
      function pt(r, n, c) {
        var l;
        return (l = _.call(this, r, n, c) || this).preValue = null, l.preToken = null, l.isLookahead = !1, l.isAmbientContext = !1, l.inAbstractClass = !1, l.inType = !1, l.inDisallowConditionalTypesContext = !1, l.maybeInArrowParameters = !1, l.shouldParseArrowReturnType = void 0, l.shouldParseAsyncArrowReturnType = void 0, l.decoratorStack = [[]], l.importsStack = [[]], l.importOrExportOuterKind = void 0, l.tsParseConstModifier = l.tsParseModifiers.bind((function(m) {
          if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return m;
        })(l), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: I.InvalidModifierOnTypeParameterPositions }), l;
      }
      ke(pt, _);
      var nt, et, $, f = pt.prototype;
      return f.getTokenFromCodeInType = function(r) {
        return r === 62 || r === 60 ? this.finishOp(u.relational, 1) : _.prototype.getTokenFromCode.call(this, r);
      }, f.readToken = function(r) {
        if (!this.inType) {
          var n = this.curContext();
          if (n === rt.tc_expr) return this.jsx_readToken();
          if (n === rt.tc_oTag || n === rt.tc_cTag) {
            if (P(r)) return this.jsx_readWord();
            if (r == 62) return ++this.pos, this.finishToken(R.jsxTagEnd);
            if ((r === 34 || r === 39) && n == rt.tc_oTag) return this.jsx_readString(r);
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
          return ji(c) ? r.accessibility === c : !!r[c];
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
          return !(Et(l) || (64512 & l) == 55296);
        }
        return !1;
      }, f.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(R.abstract) && this.lookahead().type === u._new;
      }, f.nextTokenStartSince = function(r) {
        return Ge.lastIndex = r, Ge.test(this.input) ? Ge.lastIndex : r;
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
        return this.keywords.test(r) ? n = w[r] : new RegExp(dt).test(r) && (n = R[r]), this.finishToken(n, r);
      }, f.skipBlockComment = function() {
        var r;
        this.isLookahead || (r = this.options.onComment && this.curPosition());
        var n = this.pos, c = this.input.indexOf("*/", this.pos += 2);
        if (c === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = c + 2, this.options.locations) for (var l, m = n; (l = xr(this.input, m, this.pos)) > -1; ) ++this.curLine, m = this.lineStart = l;
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
        return zi.lastIndex = this.end, zi.test(this.input);
      }, f.addExtra = function(r, n, c, l) {
        if (l === void 0 && (l = !0), r) {
          var m = r.extra = r.extra || {};
          l ? m[n] = c : Object.defineProperty(m, n, { enumerable: l, value: c });
        }
      }, f.isLiteralPropertyName = function() {
        return gt(this.type);
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
        if (dt.test(r)) {
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
        return dt.test(r) ? !!this.ts_isContextual(R[r]) && (this.next(), !0) : _.prototype.eatContextual.call(this, r);
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
        return this.ts_isContextual(R.global) ? (r.global = !0, r.id = this.parseIdent()) : this.match(u.string) ? r.id = this.parseLiteral(this.value) : this.unexpected(), this.match(u.braceL) ? (_.prototype.enterScope.call(this, oe), r.body = this.tsParseModuleBlock(), _.prototype.exitScope.call(this)) : _.prototype.semicolon.call(this), this.finishNode(r, "TSModuleDeclaration");
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
        return vr(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
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
        Fi(this.inType);
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
        for (var n = this, c = r.modified, l = r.allowedModifiers, m = r.disallowedModifiers, v = r.stopOnStartOfClassStaticBlock, x = r.errorTemplate, b = x === void 0 ? I.InvalidModifierOnTypeMember : x, k = {}, T = function(G, W, J, it) {
          W === J && c[it] && n.raise(G.column, I.InvalidModifiersOrder({ orderedModifiers: [J, it] }));
        }, N = function(G, W, J, it) {
          (c[J] && W === it || c[it] && W === J) && n.raise(G.column, I.IncompatibleModifiers({ modifiers: [J, it] }));
        }; ; ) {
          var z = this.startLoc, C = this.tsParseModifier(l.concat(m ?? []), v);
          if (!C) break;
          ji(C) ? c.accessibility ? this.raise(this.start, I.DuplicateAccessibilityModifier()) : (T(z, C, C, "override"), T(z, C, C, "static"), T(z, C, C, "readonly"), T(z, C, C, "accessor"), k.accessibility = C, c.accessibility = C) : xa(C) ? c[C] ? this.raise(this.start, I.DuplicateModifier({ modifier: C })) : (T(z, C, "in", "out"), k[C] = C, c[C] = !0) : va(C) ? c[C] ? this.raise(this.start, I.DuplicateModifier({ modifier: C })) : (N(z, C, "accessor", "readonly"), N(z, C, "accessor", "static"), N(z, C, "accessor", "override"), k[C] = C, c[C] = !0) : Object.hasOwnProperty.call(c, C) ? this.raise(this.start, I.DuplicateModifier({ modifier: C })) : (T(z, C, "static", "readonly"), T(z, C, "static", "override"), T(z, C, "override", "readonly"), T(z, C, "abstract", "override"), N(z, C, "declare", "override"), N(z, C, "static", "abstract"), k[C] = C, c[C] = !0), m != null && m.includes(C) && this.raise(this.start, b);
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
        return yr(this.type);
      }, f.tsParseExpressionStatement = function(r, n) {
        switch (n.name) {
          case "declare":
            var c = this.tsTryParseDeclare(r);
            if (c) return c.declare = !0, c;
            break;
          case "global":
            if (this.match(u.braceL)) {
              _.prototype.enterScope.call(this, oe);
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
        } else _.prototype.enterScope.call(this, oe), r.body = this.tsParseModuleBlock(), _.prototype.exitScope.call(this);
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
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Je(r.async, r.generator)), 1 & n || (r.id = this.type === u.name ? this.parseIdent() : null), this.parseFunctionParams(r);
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
            for (var x, b = Di(r.specifiers); !(x = b()).done; ) {
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
          if (this.options.ecmaVersion >= 8 && !x && b.name === "async" && !this.canInsertSemicolon() && this.eat(u._function)) return this.overrideContext(ht.f_expr), this.parseFunction(this.startNodeAt(m, v), 0, !1, !0, n);
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
        return xe(this.type) ? (r.name = this.value, r) : _.prototype.parseIdentNode.call(this);
      }, f.parseVarStatement = function(r, n, c) {
        c === void 0 && (c = !1);
        var l = this.isAmbientContext;
        this.next(), _.prototype.parseVar.call(this, r, !1, n, c || l), this.semicolon();
        var m = this.finishNode(r, "VariableDeclaration");
        if (!l) return m;
        for (var v, x = Di(m.declarations); !(v = x()).done; ) {
          var b = v.value, k = b.init;
          k && (n !== "const" || b.id.typeAnnotation ? this.raise(k.start, I.InitializerNotAllowedInAmbientContext) : k.type !== "StringLiteral" && k.type !== "BooleanLiteral" && k.type !== "NumericLiteral" && k.type !== "BigIntLiteral" && (k.type !== "TemplateLiteral" || k.expressions.length > 0) && !ga(k) && this.raise(k.start, I.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
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
        r.kind === "constructor" ? (n && this.raise(T.start, "Constructor can't be a generator"), c && this.raise(T.start, "Constructor can't be an async method")) : r.static && Vi(r, "prototype") && this.raise(T.start, "Classes may not have a static property named prototype");
        var N = r.value = this.parseMethod(n, c, l, !0, r);
        return r.kind === "get" && N.params.length !== 0 && this.raiseRecoverable(N.start, "getter should have no params"), r.kind === "set" && N.params.length !== 1 && this.raiseRecoverable(N.start, "setter should have exactly one param"), r.kind === "set" && N.params[0].type === "RestElement" && this.raiseRecoverable(N.params[0].start, "Setter cannot use rest params"), this.finishNode(r, "MethodDefinition");
      }, f.isClassMethod = function() {
        return this.match(u.relational);
      }, f.parseClassElement = function(r) {
        var n = this;
        if (this.eat(u.semi)) return null;
        var c, l = this.options.ecmaVersion, m = this.startNode(), v = "", x = !1, b = !1, k = "method", T = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], N = this.tsParseModifiers({ modified: m, allowedModifiers: T, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: I.InvalidModifierOnTypeParameterPositions });
        c = !!N.static;
        var z = function() {
          if (!n.tsIsStartOfStaticBlocks()) {
            var C = n.tsTryParseIndexSignature(m);
            if (C) return m.abstract && n.raise(m.start, I.IndexSignatureHasAbstract), m.accessibility && n.raise(m.start, I.IndexSignatureHasAccessibility({ modifier: m.accessibility })), m.declare && n.raise(m.start, I.IndexSignatureHasDeclare), m.override && n.raise(m.start, I.IndexSignatureHasOverride), C;
            if (!n.inAbstractClass && m.abstract && n.raise(m.start, I.NonAbstractClassHasAbstractMethod), m.override && r && n.raise(m.start, I.OverrideNotInSubClass), m.static = c, c && (n.isClassElementNameStart() || n.type === u.star || (v = "static")), !v && l >= 8 && n.eatContextual("async") && (!n.isClassElementNameStart() && n.type !== u.star || n.canInsertSemicolon() ? v = "async" : b = !0), !v && (l >= 9 || !b) && n.eat(u.star) && (x = !0), !v && !b && !x) {
              var G = n.value;
              (n.eatContextual("get") || n.eatContextual("set")) && (n.isClassElementNameStart() ? k = G : v = G);
            }
            if (v ? (m.computed = !1, m.key = n.startNodeAt(n.lastTokStart, n.lastTokStartLoc), m.key.name = v, n.finishNode(m.key, "Identifier")) : n.parseClassElementName(m), n.parsePostMemberNameModifiers(m), n.isClassMethod() || l < 13 || n.type === u.parenL || k !== "method" || x || b) {
              var W = !m.static && Vi(m, "constructor"), J = W && r;
              W && k !== "method" && n.raise(m.key.start, "Constructor can't have get/set modifier"), m.kind = W ? "constructor" : k, n.parseClassMethod(m, x, b, J);
            } else n.parseClassField(m);
            return m;
          }
          if (n.next(), n.next(), n.tsHasSomeModifiers(m, T) && n.raise(n.start, I.StaticBlockCannotHaveModifier), l >= 13) return _.prototype.parseClassStaticBlock.call(n, m), m;
        };
        return m.declare ? this.tsInAmbientContext(z) : z(), m;
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
        this.enterScope(16 | Je(c, !1)), this.initFunction(r);
        var b = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (r.async = !!c), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, r.params = this.toAssignableList(n, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(r, !0, !1, l), this.yieldPos = m, this.awaitPos = v, this.awaitIdentPos = x, this.maybeInArrowParameters = b, this.finishNode(r, "ArrowFunctionExpression");
      }, f.parseMaybeAssignOrigin = function(r, n, c) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(r);
          this.exprAllowed = !1;
        }
        var l = !1, m = -1, v = -1, x = -1;
        n ? (m = n.parenthesizedAssign, v = n.trailingComma, x = n.doubleProto, n.parenthesizedAssign = n.trailingComma = -1) : (n = new ue(), l = !0);
        var b = this.start, k = this.startLoc;
        (this.type === u.parenL || q(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = r === "await");
        var T = this.parseMaybeConditional(r, n);
        if (c && (T = c.call(this, T, b, k)), this.type.isAssign) {
          var N = this.startNodeAt(b, k);
          return N.operator = this.value, this.type === u.eq && (T = this.toAssignable(T, !0, n)), l || (n.parenthesizedAssign = n.trailingComma = n.doubleProto = -1), n.shorthandAssign >= T.start && (n.shorthandAssign = -1), this.type === u.eq ? this.checkLValPattern(T) : this.checkLValSimple(T), N.left = T, this.next(), N.right = this.parseMaybeAssign(r), x > -1 && (n.doubleProto = x), this.finishNode(N, "AssignmentExpression");
        }
        return l && this.checkExpressionErrors(n, !0), m > -1 && (n.parenthesizedAssign = m), v > -1 && (n.trailingComma = v), T;
      }, f.parseMaybeAssign = function(r, n, c) {
        var l, m, v, x, b, k, T, N, z, C, G, W = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (N = this.cloneCurLookaheadState(), !(z = this.tryParse(function() {
            return W.parseMaybeAssignOrigin(r, n, c);
          }, N)).error) return z.node;
          var J = this.context, it = J[J.length - 1];
          it === y.tokContexts.tc_oTag && J[J.length - 2] === y.tokContexts.tc_expr ? (J.pop(), J.pop()) : it !== y.tokContexts.tc_oTag && it !== y.tokContexts.tc_expr || J.pop();
        }
        if (!((l = z) != null && l.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(r, n, c);
        N && !this.compareLookaheadState(N, this.getCurLookaheadState()) || (N = this.cloneCurLookaheadState());
        var mt = this.tryParse(function(Rt) {
          var ae, ne;
          G = W.tsParseTypeParameters();
          var Dt = W.parseMaybeAssignOrigin(r, n, c);
          return (Dt.type !== "ArrowFunctionExpression" || (ae = Dt.extra) != null && ae.parenthesized) && Rt(), ((ne = G) == null ? void 0 : ne.params.length) !== 0 && W.resetStartLocationFromNode(Dt, G), Dt.typeParameters = G, Dt;
        }, N);
        if (!mt.error && !mt.aborted) return G && this.reportReservedArrowTypeParam(G), mt.node;
        if (!z && (Fi(!0), !(C = this.tryParse(function() {
          return W.parseMaybeAssignOrigin(r, n, c);
        }, N)).error)) return C.node;
        if ((m = z) != null && m.node) return this.setLookaheadState(z.failState), z.node;
        if (mt.node) return this.setLookaheadState(mt.failState), G && this.reportReservedArrowTypeParam(G), mt.node;
        if ((v = C) != null && v.node) return this.setLookaheadState(C.failState), C.node;
        throw (x = z) != null && x.thrown ? z.error : mt.thrown ? mt.error : (b = C) != null && b.thrown ? C.error : ((k = z) == null ? void 0 : k.error) || mt.error || ((T = C) == null ? void 0 : T.error);
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
        switch (n === void 0 && (n = !1), c === void 0 && (c = new ue()), r.type) {
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
          var b, k = this.start, T = this.startLoc, N = [], z = !0, C = !1, G = new ue(), W = this.yieldPos, J = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== u.parenR; ) {
            if (z ? z = !1 : this.expect(u.comma), v && this.afterTrailingComma(u.parenR, !0)) {
              C = !0;
              break;
            }
            if (this.type === u.ellipsis) {
              b = this.start, N.push(this.parseParenItem(this.parseRestBinding())), this.type === u.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            N.push(this.parseMaybeAssign(n, G, this.parseParenItem));
          }
          var it = this.lastTokEnd, mt = this.lastTokEndLoc;
          if (this.expect(u.parenR), this.maybeInArrowParameters = x, r && this.shouldParseArrow(N) && this.eat(u.arrow)) return this.checkPatternErrors(G, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = W, this.awaitPos = J, this.parseParenArrowList(l, m, N, n);
          N.length && !C || this.unexpected(this.lastTokStart), b && this.unexpected(b), this.checkExpressionErrors(G, !0), this.yieldPos = W || this.yieldPos, this.awaitPos = J || this.awaitPos, N.length > 1 ? ((c = this.startNodeAt(k, T)).expressions = N, this.finishNodeAt(c, "SequenceExpression", it, mt)) : c = N[0];
        } else c = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Rt = this.startNodeAt(l, m);
          return Rt.expression = c, this.finishNode(Rt, "ParenthesizedExpression");
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
          var z, C = this.tsTryParseAndCatch(function() {
            if (!l && b.atPossibleAsyncArrow(r)) {
              var _i = b.tsTryParseGenericAsyncArrowFunction(n, c, x);
              if (_i) return r = _i;
            }
            var be = b.tsParseTypeArgumentsInExpression();
            if (!be) return r;
            if (N && !b.match(u.parenL)) return z = b.curPosition(), r;
            if (Ut(b.type) || b.type === u.backQuote) {
              var Pi = b.parseTaggedTemplateExpression(r, n, c, k);
              return Pi.typeParameters = be, Pi;
            }
            if (!l && b.eat(u.parenL)) {
              var Ai = new ue(), Kt = b.startNodeAt(n, c);
              return Kt.callee = r, Kt.arguments = b.parseExprList(u.parenR, b.options.ecmaVersion >= 8, !1, Ai), b.tsCheckForInvalidTypeCasts(Kt.arguments), Kt.typeParameters = be, k && (Kt.optional = N), b.checkExpressionErrors(Ai, !0), r = b.finishNode(Kt, "CallExpression");
            }
            var Ze = b.type;
            if (!(b.tsMatchRightRelational() || Ze === u.bitShift || Ze !== u.parenL && (Ci = Ze, !!Ci.startsExpr) && !b.hasPrecedingLineBreak())) {
              var Ci, qe = b.startNodeAt(n, c);
              return qe.expression = r, qe.typeParameters = be, b.finishNode(qe, "TSInstantiationExpression");
            }
          });
          if (z && this.unexpected(z), C) return C.type === "TSInstantiationExpression" && (this.match(u.dot) || this.match(u.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, I.InvalidPropertyAccessAfterInstantiationExpression), r = C;
        }
        var G = this.options.ecmaVersion >= 11, W = G && this.eat(u.questionDot);
        l && W && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var J = this.eat(u.bracketL);
        if (J || W && this.type !== u.parenL && this.type !== u.backQuote || this.eat(u.dot)) {
          var it = this.startNodeAt(n, c);
          it.object = r, J ? (it.property = this.parseExpression(), this.expect(u.bracketR)) : it.property = this.type === u.privateId && r.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), it.computed = !!J, G && (it.optional = W), r = this.finishNode(it, "MemberExpression");
        } else if (!l && this.eat(u.parenL)) {
          var mt = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var Rt = new ue(), ae = this.yieldPos, ne = this.awaitPos, Dt = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var Ti = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1, Rt);
          if (m && !W && this.shouldParseAsyncArrow()) this.checkPatternErrors(Rt, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = ae, this.awaitPos = ne, this.awaitIdentPos = Dt, r = this.parseSubscriptAsyncArrow(n, c, Ti, x);
          else {
            this.checkExpressionErrors(Rt, !0), this.yieldPos = ae || this.yieldPos, this.awaitPos = ne || this.awaitPos, this.awaitIdentPos = Dt || this.awaitIdentPos;
            var ge = this.startNodeAt(n, c);
            ge.callee = r, ge.arguments = Ti, G && (ge.optional = W), r = this.finishNode(ge, "CallExpression");
          }
          this.maybeInArrowParameters = mt;
        } else if (this.type === u.backQuote) {
          (W || k) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
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
            b.length && (k.decorators = b, this.resetStartLocationFromNode(k, b[0]), b = []), k && (v.body.push(k), k.type === "MethodDefinition" && k.kind === "constructor" && k.value.type === "FunctionExpression" ? (x && this.raiseRecoverable(k.start, "Duplicate constructor in the same class"), x = !0, k.decorators && k.decorators.length > 0 && this.raise(k.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : k.key && k.key.type === "PrivateIdentifier" && fa(m, k) && this.raiseRecoverable(k.key.start, "Identifier '#" + k.key.name + "' has already been declared"));
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
        if (this.initFunction(v), this.options.ecmaVersion >= 6 && (v.generator = r), this.options.ecmaVersion >= 8 && (v.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | Je(n, v.generator) | (c ? 128 : 0)), this.expect(u.parenL), v.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(v, !1, !0, !1, { isClassMethod: l }), this.yieldPos = x, this.awaitPos = b, this.awaitIdentPos = k, m && m.abstract && v.body) {
          var T = m.key;
          this.raise(m.start, I.AbstractMethodHasImplementation({ methodName: T.type !== "Identifier" || m.computed ? "[" + this.input.slice(T.start, T.end) + "]" : T.name }));
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
            var z = this.parseIdent();
            xe(this.type) ? (b = !0, x = N, l = n ? this.parseIdent() : this.parseModuleExportName(), k = !1) : (l = z, k = !1);
          } else xe(this.type) ? (k = !1, l = n ? this.parseIdent() : this.parseModuleExportName()) : (b = !0, x = N);
        } else xe(this.type) && (b = !0, n ? (x = _.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(x)) : x = this.parseModuleExportName());
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
          c == rt.tc_oTag ? this.context.push(ht.b_expr) : c == rt.tc_expr ? this.context.push(ht.b_tmpl) : _.prototype.updateContext.call(this, r), this.exprAllowed = !0;
        } else {
          if (n !== u.slash || r !== R.jsxTagStart) return _.prototype.updateContext.call(this, r);
          this.context.length -= 2, this.context.push(rt.tc_cTag), this.exprAllowed = !1;
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
        r === oe && this.importsStack.push([]), _.prototype.enterScope.call(this, r);
        var n = _.prototype.currentScope.call(this);
        n.types = [], n.enums = [], n.constEnums = [], n.classes = [], n.exportOnlyBindings = [];
      }, f.exitScope = function() {
        _.prototype.currentScope.call(this).flags === oe && this.importsStack.pop(), _.prototype.exitScope.call(this);
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
      }, nt = pt, $ = [{ key: "acornTypeScript", get: function() {
        return y;
      } }], (et = [{ key: "acornTypeScript", get: function() {
        return y;
      } }]) && Mi(nt.prototype, et), $ && Mi(nt, $), Object.defineProperty(nt, "prototype", { writable: !1 }), pt;
    })(h);
    return gr;
  };
}
const ka = ["createObject", "dropObject", "removeRecords", "upsertRecords"], Sa = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"];
function S(t, e, i) {
  function s(d, y) {
    var u;
    Object.defineProperty(d, "_zod", {
      value: d._zod ?? {},
      enumerable: !1
    }), (u = d._zod).traits ?? (u.traits = /* @__PURE__ */ new Set()), d._zod.traits.add(t), e(d, y);
    for (const w in h.prototype)
      w in d || Object.defineProperty(d, w, { value: h.prototype[w].bind(d) });
    d._zod.constr = h, d._zod.def = y;
  }
  const a = i?.Parent ?? Object;
  class o extends a {
  }
  Object.defineProperty(o, "name", { value: t });
  function h(d) {
    var y;
    const u = i?.Parent ? new o() : this;
    s(u, d), (y = u._zod).deferred ?? (y.deferred = []);
    for (const w of u._zod.deferred)
      w();
    return u;
  }
  return Object.defineProperty(h, "init", { value: s }), Object.defineProperty(h, Symbol.hasInstance, {
    value: (d) => i?.Parent && d instanceof i.Parent ? !0 : d?._zod?.traits?.has(t)
  }), Object.defineProperty(h, "name", { value: t }), h;
}
class Xt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Hs extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
  }
}
const Ws = {};
function Vt(t) {
  return Ws;
}
function wa(t) {
  const e = Object.values(t).filter((i) => typeof i == "number");
  return Object.entries(t).filter(([i, s]) => e.indexOf(+i) === -1).map(([i, s]) => s);
}
function ri(t, e) {
  return typeof e == "bigint" ? e.toString() : e;
}
function mi(t) {
  return {
    get value() {
      {
        const e = t();
        return Object.defineProperty(this, "value", { value: e }), e;
      }
    }
  };
}
function yi(t) {
  return t == null;
}
function vi(t) {
  const e = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(e, i);
}
function Ta(t, e) {
  const i = (t.toString().split(".")[1] || "").length, s = e.toString();
  let a = (s.split(".")[1] || "").length;
  if (a === 0 && /\d?e-\d?/.test(s)) {
    const y = s.match(/\d?e-(\d?)/);
    y?.[1] && (a = Number.parseInt(y[1]));
  }
  const o = i > a ? i : a, h = Number.parseInt(t.toFixed(o).replace(".", "")), d = Number.parseInt(e.toFixed(o).replace(".", ""));
  return h % d / 10 ** o;
}
const Bi = Symbol("evaluating");
function Z(t, e, i) {
  let s;
  Object.defineProperty(t, e, {
    get() {
      if (s !== Bi)
        return s === void 0 && (s = Bi, s = i()), s;
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
function Ht(t, e, i) {
  Object.defineProperty(t, e, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Wt(...t) {
  const e = {};
  for (const i of t) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(e, s);
  }
  return Object.defineProperties({}, e);
}
function $i(t) {
  return JSON.stringify(t);
}
const Ks = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Le(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const _a = mi(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function te(t) {
  if (Le(t) === !1)
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const i = e.prototype;
  return !(Le(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function Gs(t) {
  return te(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const Pa = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ee(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function $t(t, e, i) {
  const s = new t._zod.constr(e ?? t._zod.def);
  return (!e || i?.parent) && (s._zod.parent = t), s;
}
function O(t) {
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
function Aa(t) {
  return Object.keys(t).filter((e) => t[e]._zod.optin === "optional" && t[e]._zod.optout === "optional");
}
const Ca = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Ea(t, e) {
  const i = t._zod.def, s = Wt(t._zod.def, {
    get shape() {
      const a = {};
      for (const o in e) {
        if (!(o in i.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        e[o] && (a[o] = i.shape[o]);
      }
      return Ht(this, "shape", a), a;
    },
    checks: []
  });
  return $t(t, s);
}
function Ia(t, e) {
  const i = t._zod.def, s = Wt(t._zod.def, {
    get shape() {
      const a = { ...t._zod.def.shape };
      for (const o in e) {
        if (!(o in i.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        e[o] && delete a[o];
      }
      return Ht(this, "shape", a), a;
    },
    checks: []
  });
  return $t(t, s);
}
function Na(t, e) {
  if (!te(e))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const s = Wt(t._zod.def, {
    get shape() {
      const a = { ...t._zod.def.shape, ...e };
      return Ht(this, "shape", a), a;
    },
    checks: []
  });
  return $t(t, s);
}
function La(t, e) {
  if (!te(e))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...e };
      return Ht(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return $t(t, i);
}
function Oa(t, e) {
  const i = Wt(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...e._zod.def.shape };
      return Ht(this, "shape", s), s;
    },
    get catchall() {
      return e._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return $t(t, i);
}
function Ma(t, e, i) {
  const s = Wt(e._zod.def, {
    get shape() {
      const a = e._zod.def.shape, o = { ...a };
      if (i)
        for (const h in i) {
          if (!(h in a))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (o[h] = t ? new t({
            type: "optional",
            innerType: a[h]
          }) : a[h]);
        }
      else
        for (const h in a)
          o[h] = t ? new t({
            type: "optional",
            innerType: a[h]
          }) : a[h];
      return Ht(this, "shape", o), o;
    },
    checks: []
  });
  return $t(e, s);
}
function Ra(t, e, i) {
  const s = Wt(e._zod.def, {
    get shape() {
      const a = e._zod.def.shape, o = { ...a };
      if (i)
        for (const h in i) {
          if (!(h in o))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (o[h] = new t({
            type: "nonoptional",
            innerType: a[h]
          }));
        }
      else
        for (const h in a)
          o[h] = new t({
            type: "nonoptional",
            innerType: a[h]
          });
      return Ht(this, "shape", o), o;
    },
    checks: []
  });
  return $t(e, s);
}
function Gt(t, e = 0) {
  if (t.aborted === !0)
    return !0;
  for (let i = e; i < t.issues.length; i++)
    if (t.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function Jt(t, e) {
  return e.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(t), i;
  });
}
function Se(t) {
  return typeof t == "string" ? t : t?.message;
}
function Ft(t, e, i) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const a = Se(t.inst?._zod.def?.error?.(t)) ?? Se(e?.error?.(t)) ?? Se(i.customError?.(t)) ?? Se(i.localeError?.(t)) ?? "Invalid input";
    s.message = a;
  }
  return delete s.inst, delete s.continue, e?.reportInput || delete s.input, s;
}
function xi(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function le(...t) {
  const [e, i, s] = t;
  return typeof e == "string" ? {
    message: e,
    code: "custom",
    input: i,
    inst: s
  } : { ...e };
}
const Js = (t, e) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: e,
    enumerable: !1
  }), t.message = JSON.stringify(e, ri, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, Xs = S("$ZodError", Js), Qs = S("$ZodError", Js, { Parent: Error });
function Da(t, e = (i) => i.message) {
  const i = {}, s = [];
  for (const a of t.issues)
    a.path.length > 0 ? (i[a.path[0]] = i[a.path[0]] || [], i[a.path[0]].push(e(a))) : s.push(e(a));
  return { formErrors: s, fieldErrors: i };
}
function za(t, e = (i) => i.message) {
  const i = { _errors: [] }, s = (a) => {
    for (const o of a.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((h) => s({ issues: h }));
      else if (o.code === "invalid_key")
        s({ issues: o.issues });
      else if (o.code === "invalid_element")
        s({ issues: o.issues });
      else if (o.path.length === 0)
        i._errors.push(e(o));
      else {
        let h = i, d = 0;
        for (; d < o.path.length; ) {
          const y = o.path[d];
          d === o.path.length - 1 ? (h[y] = h[y] || { _errors: [] }, h[y]._errors.push(e(o))) : h[y] = h[y] || { _errors: [] }, h = h[y], d++;
        }
      }
  };
  return s(t), i;
}
const gi = (t) => (e, i, s, a) => {
  const o = s ? Object.assign(s, { async: !1 }) : { async: !1 }, h = e._zod.run({ value: i, issues: [] }, o);
  if (h instanceof Promise)
    throw new Xt();
  if (h.issues.length) {
    const d = new (a?.Err ?? t)(h.issues.map((y) => Ft(y, o, Vt())));
    throw Ks(d, a?.callee), d;
  }
  return h.value;
}, bi = (t) => async (e, i, s, a) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let h = e._zod.run({ value: i, issues: [] }, o);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const d = new (a?.Err ?? t)(h.issues.map((y) => Ft(y, o, Vt())));
    throw Ks(d, a?.callee), d;
  }
  return h.value;
}, je = (t) => (e, i, s) => {
  const a = s ? { ...s, async: !1 } : { async: !1 }, o = e._zod.run({ value: i, issues: [] }, a);
  if (o instanceof Promise)
    throw new Xt();
  return o.issues.length ? {
    success: !1,
    error: new (t ?? Xs)(o.issues.map((h) => Ft(h, a, Vt())))
  } : { success: !0, data: o.value };
}, Va = /* @__PURE__ */ je(Qs), Be = (t) => async (e, i, s) => {
  const a = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let o = e._zod.run({ value: i, issues: [] }, a);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new t(o.issues.map((h) => Ft(h, a, Vt())))
  } : { success: !0, data: o.value };
}, Fa = /* @__PURE__ */ Be(Qs), ja = (t) => (e, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return gi(t)(e, i, a);
}, Ba = (t) => (e, i, s) => gi(t)(e, i, s), $a = (t) => async (e, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return bi(t)(e, i, a);
}, Ua = (t) => async (e, i, s) => bi(t)(e, i, s), Za = (t) => (e, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return je(t)(e, i, a);
}, qa = (t) => (e, i, s) => je(t)(e, i, s), Ha = (t) => async (e, i, s) => {
  const a = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Be(t)(e, i, a);
}, Wa = (t) => async (e, i, s) => Be(t)(e, i, s), Ka = /^[cC][^\s-]{8,}$/, Ga = /^[0-9a-z]+$/, Ja = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Xa = /^[0-9a-vA-V]{20}$/, Qa = /^[A-Za-z0-9]{27}$/, Ya = /^[a-zA-Z0-9_-]{21}$/, tn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, en = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ui = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, sn = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, rn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function an() {
  return new RegExp(rn, "u");
}
const nn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, on = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, un = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, cn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, hn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ys = /^[A-Za-z0-9_-]*$/, pn = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, ln = /^\+(?:[0-9]){6,14}[0-9]$/, tr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", fn = /* @__PURE__ */ new RegExp(`^${tr}$`);
function er(t) {
  const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${e}` : t.precision === 0 ? `${e}:[0-5]\\d` : `${e}:[0-5]\\d\\.\\d{${t.precision}}` : `${e}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function dn(t) {
  return new RegExp(`^${er(t)}$`);
}
function mn(t) {
  const e = er({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${e}(?:${i.join("|")})`;
  return new RegExp(`^${tr}T(?:${s})$`);
}
const yn = (t) => {
  const e = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${e}$`);
}, vn = /^-?\d+$/, xn = /^-?\d+(?:\.\d+)?/, gn = /^(?:true|false)$/i, bn = /^[^A-Z]*$/, kn = /^[^a-z]*$/, ft = /* @__PURE__ */ S("$ZodCheck", (t, e) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = e, (i = t._zod).onattach ?? (i.onattach = []);
}), ir = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, sr = /* @__PURE__ */ S("$ZodCheckLessThan", (t, e) => {
  ft.init(t, e);
  const i = ir[typeof e.value];
  t._zod.onattach.push((s) => {
    const a = s._zod.bag, o = (e.inclusive ? a.maximum : a.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    e.value < o && (e.inclusive ? a.maximum = e.value : a.exclusiveMaximum = e.value);
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
}), rr = /* @__PURE__ */ S("$ZodCheckGreaterThan", (t, e) => {
  ft.init(t, e);
  const i = ir[typeof e.value];
  t._zod.onattach.push((s) => {
    const a = s._zod.bag, o = (e.inclusive ? a.minimum : a.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    e.value > o && (e.inclusive ? a.minimum = e.value : a.exclusiveMinimum = e.value);
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
}), Sn = /* @__PURE__ */ S("$ZodCheckMultipleOf", (t, e) => {
  ft.init(t, e), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = e.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof e.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % e.value === BigInt(0) : Ta(i.value, e.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: e.value,
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), wn = /* @__PURE__ */ S("$ZodCheckNumberFormat", (t, e) => {
  ft.init(t, e), e.format = e.format || "float64";
  const i = e.format?.includes("int"), s = i ? "int" : "number", [a, o] = Ca[e.format];
  t._zod.onattach.push((h) => {
    const d = h._zod.bag;
    d.format = e.format, d.minimum = a, d.maximum = o, i && (d.pattern = vn);
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
    }), d > o && h.issues.push({
      origin: "number",
      input: d,
      code: "too_big",
      maximum: o,
      inst: t
    });
  };
}), Tn = /* @__PURE__ */ S("$ZodCheckMaxLength", (t, e) => {
  var i;
  ft.init(t, e), (i = t._zod.def).when ?? (i.when = (s) => {
    const a = s.value;
    return !yi(a) && a.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const a = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    e.maximum < a && (s._zod.bag.maximum = e.maximum);
  }), t._zod.check = (s) => {
    const a = s.value;
    if (a.length <= e.maximum)
      return;
    const o = xi(a);
    s.issues.push({
      origin: o,
      code: "too_big",
      maximum: e.maximum,
      inclusive: !0,
      input: a,
      inst: t,
      continue: !e.abort
    });
  };
}), _n = /* @__PURE__ */ S("$ZodCheckMinLength", (t, e) => {
  var i;
  ft.init(t, e), (i = t._zod.def).when ?? (i.when = (s) => {
    const a = s.value;
    return !yi(a) && a.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const a = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    e.minimum > a && (s._zod.bag.minimum = e.minimum);
  }), t._zod.check = (s) => {
    const a = s.value;
    if (a.length >= e.minimum)
      return;
    const o = xi(a);
    s.issues.push({
      origin: o,
      code: "too_small",
      minimum: e.minimum,
      inclusive: !0,
      input: a,
      inst: t,
      continue: !e.abort
    });
  };
}), Pn = /* @__PURE__ */ S("$ZodCheckLengthEquals", (t, e) => {
  var i;
  ft.init(t, e), (i = t._zod.def).when ?? (i.when = (s) => {
    const a = s.value;
    return !yi(a) && a.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.minimum = e.length, a.maximum = e.length, a.length = e.length;
  }), t._zod.check = (s) => {
    const a = s.value, o = a.length;
    if (o === e.length)
      return;
    const h = xi(a), d = o > e.length;
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
}), $e = /* @__PURE__ */ S("$ZodCheckStringFormat", (t, e) => {
  var i, s;
  ft.init(t, e), t._zod.onattach.push((a) => {
    const o = a._zod.bag;
    o.format = e.format, e.pattern && (o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(e.pattern));
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
}), An = /* @__PURE__ */ S("$ZodCheckRegex", (t, e) => {
  $e.init(t, e), t._zod.check = (i) => {
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
}), Cn = /* @__PURE__ */ S("$ZodCheckLowerCase", (t, e) => {
  e.pattern ?? (e.pattern = bn), $e.init(t, e);
}), En = /* @__PURE__ */ S("$ZodCheckUpperCase", (t, e) => {
  e.pattern ?? (e.pattern = kn), $e.init(t, e);
}), In = /* @__PURE__ */ S("$ZodCheckIncludes", (t, e) => {
  ft.init(t, e);
  const i = ee(e.includes), s = new RegExp(typeof e.position == "number" ? `^.{${e.position}}${i}` : i);
  e.pattern = s, t._zod.onattach.push((a) => {
    const o = a._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(s);
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
}), Nn = /* @__PURE__ */ S("$ZodCheckStartsWith", (t, e) => {
  ft.init(t, e);
  const i = new RegExp(`^${ee(e.prefix)}.*`);
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
}), Ln = /* @__PURE__ */ S("$ZodCheckEndsWith", (t, e) => {
  ft.init(t, e);
  const i = new RegExp(`.*${ee(e.suffix)}$`);
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
}), On = /* @__PURE__ */ S("$ZodCheckOverwrite", (t, e) => {
  ft.init(t, e), t._zod.check = (i) => {
    i.value = e.tx(i.value);
  };
});
class Mn {
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
`).filter((o) => o), s = Math.min(...i.map((o) => o.length - o.trimStart().length)), a = i.map((o) => o.slice(s)).map((o) => " ".repeat(this.indent * 2) + o);
    for (const o of a)
      this.content.push(o);
  }
  compile() {
    const e = Function, i = this?.args, s = [...(this?.content ?? [""]).map((a) => `  ${a}`)];
    return new e(...i, s.join(`
`));
  }
}
const Rn = {
  major: 4,
  minor: 1,
  patch: 12
}, Q = /* @__PURE__ */ S("$ZodType", (t, e) => {
  var i;
  t ?? (t = {}), t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = Rn;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const a of s)
    for (const o of a._zod.onattach)
      o(t);
  if (s.length === 0)
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const a = (h, d, y) => {
      let u = Gt(h), w;
      for (const P of d) {
        if (P._zod.def.when) {
          if (!P._zod.def.when(h))
            continue;
        } else if (u)
          continue;
        const M = h.issues.length, U = P._zod.check(h);
        if (U instanceof Promise && y?.async === !1)
          throw new Xt();
        if (w || U instanceof Promise)
          w = (w ?? Promise.resolve()).then(async () => {
            await U, h.issues.length !== M && (u || (u = Gt(h, M)));
          });
        else {
          if (h.issues.length === M)
            continue;
          u || (u = Gt(h, M));
        }
      }
      return w ? w.then(() => h) : h;
    }, o = (h, d, y) => {
      if (Gt(h))
        return h.aborted = !0, h;
      const u = a(d, s, y);
      if (u instanceof Promise) {
        if (y.async === !1)
          throw new Xt();
        return u.then((w) => t._zod.parse(w, y));
      }
      return t._zod.parse(u, y);
    };
    t._zod.run = (h, d) => {
      if (d.skipChecks)
        return t._zod.parse(h, d);
      if (d.direction === "backward") {
        const u = t._zod.parse({ value: h.value, issues: [] }, { ...d, skipChecks: !0 });
        return u instanceof Promise ? u.then((w) => o(w, h, d)) : o(u, h, d);
      }
      const y = t._zod.parse(h, d);
      if (y instanceof Promise) {
        if (d.async === !1)
          throw new Xt();
        return y.then((u) => a(u, s, d));
      }
      return a(y, s, d);
    };
  }
  t["~standard"] = {
    validate: (a) => {
      try {
        const o = Va(t, a);
        return o.success ? { value: o.data } : { issues: o.error?.issues };
      } catch {
        return Fa(t, a).then((o) => o.success ? { value: o.data } : { issues: o.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ki = /* @__PURE__ */ S("$ZodString", (t, e) => {
  Q.init(t, e), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? yn(t._zod.bag), t._zod.parse = (i, s) => {
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
}), K = /* @__PURE__ */ S("$ZodStringFormat", (t, e) => {
  $e.init(t, e), ki.init(t, e);
}), Dn = /* @__PURE__ */ S("$ZodGUID", (t, e) => {
  e.pattern ?? (e.pattern = en), K.init(t, e);
}), zn = /* @__PURE__ */ S("$ZodUUID", (t, e) => {
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
    e.pattern ?? (e.pattern = Ui(i));
  } else
    e.pattern ?? (e.pattern = Ui());
  K.init(t, e);
}), Vn = /* @__PURE__ */ S("$ZodEmail", (t, e) => {
  e.pattern ?? (e.pattern = sn), K.init(t, e);
}), Fn = /* @__PURE__ */ S("$ZodURL", (t, e) => {
  K.init(t, e), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), a = new URL(s);
      e.hostname && (e.hostname.lastIndex = 0, e.hostname.test(a.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: pn.source,
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
}), jn = /* @__PURE__ */ S("$ZodEmoji", (t, e) => {
  e.pattern ?? (e.pattern = an()), K.init(t, e);
}), Bn = /* @__PURE__ */ S("$ZodNanoID", (t, e) => {
  e.pattern ?? (e.pattern = Ya), K.init(t, e);
}), $n = /* @__PURE__ */ S("$ZodCUID", (t, e) => {
  e.pattern ?? (e.pattern = Ka), K.init(t, e);
}), Un = /* @__PURE__ */ S("$ZodCUID2", (t, e) => {
  e.pattern ?? (e.pattern = Ga), K.init(t, e);
}), Zn = /* @__PURE__ */ S("$ZodULID", (t, e) => {
  e.pattern ?? (e.pattern = Ja), K.init(t, e);
}), qn = /* @__PURE__ */ S("$ZodXID", (t, e) => {
  e.pattern ?? (e.pattern = Xa), K.init(t, e);
}), Hn = /* @__PURE__ */ S("$ZodKSUID", (t, e) => {
  e.pattern ?? (e.pattern = Qa), K.init(t, e);
}), Wn = /* @__PURE__ */ S("$ZodISODateTime", (t, e) => {
  e.pattern ?? (e.pattern = mn(e)), K.init(t, e);
}), Kn = /* @__PURE__ */ S("$ZodISODate", (t, e) => {
  e.pattern ?? (e.pattern = fn), K.init(t, e);
}), Gn = /* @__PURE__ */ S("$ZodISOTime", (t, e) => {
  e.pattern ?? (e.pattern = dn(e)), K.init(t, e);
}), Jn = /* @__PURE__ */ S("$ZodISODuration", (t, e) => {
  e.pattern ?? (e.pattern = tn), K.init(t, e);
}), Xn = /* @__PURE__ */ S("$ZodIPv4", (t, e) => {
  e.pattern ?? (e.pattern = nn), K.init(t, e), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), Qn = /* @__PURE__ */ S("$ZodIPv6", (t, e) => {
  e.pattern ?? (e.pattern = on), K.init(t, e), t._zod.onattach.push((i) => {
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
}), Yn = /* @__PURE__ */ S("$ZodCIDRv4", (t, e) => {
  e.pattern ?? (e.pattern = un), K.init(t, e);
}), to = /* @__PURE__ */ S("$ZodCIDRv6", (t, e) => {
  e.pattern ?? (e.pattern = cn), K.init(t, e), t._zod.check = (i) => {
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
        inst: t,
        continue: !e.abort
      });
    }
  };
});
function ar(t) {
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
const eo = /* @__PURE__ */ S("$ZodBase64", (t, e) => {
  e.pattern ?? (e.pattern = hn), K.init(t, e), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    ar(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
});
function io(t) {
  if (!Ys.test(t))
    return !1;
  const e = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
  return ar(i);
}
const so = /* @__PURE__ */ S("$ZodBase64URL", (t, e) => {
  e.pattern ?? (e.pattern = Ys), K.init(t, e), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    io(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), ro = /* @__PURE__ */ S("$ZodE164", (t, e) => {
  e.pattern ?? (e.pattern = ln), K.init(t, e);
});
function ao(t, e = null) {
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
const no = /* @__PURE__ */ S("$ZodJWT", (t, e) => {
  K.init(t, e), t._zod.check = (i) => {
    ao(i.value, e.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), nr = /* @__PURE__ */ S("$ZodNumber", (t, e) => {
  Q.init(t, e), t._zod.pattern = t._zod.bag.pattern ?? xn, t._zod.parse = (i, s) => {
    if (e.coerce)
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
      inst: t,
      ...o ? { received: o } : {}
    }), i;
  };
}), oo = /* @__PURE__ */ S("$ZodNumber", (t, e) => {
  wn.init(t, e), nr.init(t, e);
}), uo = /* @__PURE__ */ S("$ZodBoolean", (t, e) => {
  Q.init(t, e), t._zod.pattern = gn, t._zod.parse = (i, s) => {
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
}), co = /* @__PURE__ */ S("$ZodUnknown", (t, e) => {
  Q.init(t, e), t._zod.parse = (i) => i;
}), ho = /* @__PURE__ */ S("$ZodNever", (t, e) => {
  Q.init(t, e), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function Zi(t, e, i) {
  t.issues.length && e.issues.push(...Jt(i, t.issues)), e.value[i] = t.value;
}
const po = /* @__PURE__ */ S("$ZodArray", (t, e) => {
  Q.init(t, e), t._zod.parse = (i, s) => {
    const a = i.value;
    if (!Array.isArray(a))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: a,
        inst: t
      }), i;
    i.value = Array(a.length);
    const o = [];
    for (let h = 0; h < a.length; h++) {
      const d = a[h], y = e.element._zod.run({
        value: d,
        issues: []
      }, s);
      y instanceof Promise ? o.push(y.then((u) => Zi(u, i, h))) : Zi(y, i, h);
    }
    return o.length ? Promise.all(o).then(() => i) : i;
  };
});
function Oe(t, e, i, s) {
  t.issues.length && e.issues.push(...Jt(i, t.issues)), t.value === void 0 ? i in s && (e.value[i] = void 0) : e.value[i] = t.value;
}
function or(t) {
  const e = Object.keys(t.shape);
  for (const s of e)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = Aa(t.shape);
  return {
    ...t,
    keys: e,
    keySet: new Set(e),
    numKeys: e.length,
    optionalKeys: new Set(i)
  };
}
function ur(t, e, i, s, a, o) {
  const h = [], d = a.keySet, y = a.catchall._zod, u = y.def.type;
  for (const w of Object.keys(e)) {
    if (d.has(w))
      continue;
    if (u === "never") {
      h.push(w);
      continue;
    }
    const P = y.run({ value: e[w], issues: [] }, s);
    P instanceof Promise ? t.push(P.then((M) => Oe(M, i, w, e))) : Oe(P, i, w, e);
  }
  return h.length && i.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: e,
    inst: o
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const lo = /* @__PURE__ */ S("$ZodObject", (t, e) => {
  if (Q.init(t, e), !Object.getOwnPropertyDescriptor(e, "shape")?.get) {
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
  const i = mi(() => or(e));
  Z(t._zod, "propValues", () => {
    const h = e.shape, d = {};
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
  const s = Le, a = e.catchall;
  let o;
  t._zod.parse = (h, d) => {
    o ?? (o = i.value);
    const y = h.value;
    if (!s(y))
      return h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: y,
        inst: t
      }), h;
    h.value = {};
    const u = [], w = o.shape;
    for (const P of o.keys) {
      const M = w[P]._zod.run({ value: y[P], issues: [] }, d);
      M instanceof Promise ? u.push(M.then((U) => Oe(U, h, P, y))) : Oe(M, h, P, y);
    }
    return a ? ur(u, y, h, d, i.value, t) : u.length ? Promise.all(u).then(() => h) : h;
  };
}), fo = /* @__PURE__ */ S("$ZodObjectJIT", (t, e) => {
  lo.init(t, e);
  const i = t._zod.parse, s = mi(() => or(e)), a = (P) => {
    const M = new Mn(["shape", "payload", "ctx"]), U = s.value, ht = (dt) => {
      const gt = $i(dt);
      return `shape[${gt}]._zod.run({ value: input[${gt}], issues: [] }, ctx)`;
    };
    M.write("const input = payload.value;");
    const Et = /* @__PURE__ */ Object.create(null);
    let R = 0;
    for (const dt of U.keys)
      Et[dt] = `key_${R++}`;
    M.write("const newResult = {};");
    for (const dt of U.keys) {
      const gt = Et[dt], Ut = $i(dt);
      M.write(`const ${gt} = ${ht(dt)};`), M.write(`
        if (${gt}.issues.length) {
          payload.issues = payload.issues.concat(${gt}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Ut}, ...iss.path] : [${Ut}]
          })));
        }
        
        
        if (${gt}.value === undefined) {
          if (${Ut} in input) {
            newResult[${Ut}] = undefined;
          }
        } else {
          newResult[${Ut}] = ${gt}.value;
        }
        
      `);
    }
    M.write("payload.value = newResult;"), M.write("return payload;");
    const rt = M.compile();
    return (dt, gt) => rt(P, dt, gt);
  };
  let o;
  const h = Le, d = !Ws.jitless, y = d && _a.value, u = e.catchall;
  let w;
  t._zod.parse = (P, M) => {
    w ?? (w = s.value);
    const U = P.value;
    return h(U) ? d && y && M?.async === !1 && M.jitless !== !0 ? (o || (o = a(e.shape)), P = o(P, M), u ? ur([], U, P, M, w, t) : P) : i(P, M) : (P.issues.push({
      expected: "object",
      code: "invalid_type",
      input: U,
      inst: t
    }), P);
  };
});
function qi(t, e, i, s) {
  for (const o of t)
    if (o.issues.length === 0)
      return e.value = o.value, e;
  const a = t.filter((o) => !Gt(o));
  return a.length === 1 ? (e.value = a[0].value, a[0]) : (e.issues.push({
    code: "invalid_union",
    input: e.value,
    inst: i,
    errors: t.map((o) => o.issues.map((h) => Ft(h, s, Vt())))
  }), e);
}
const mo = /* @__PURE__ */ S("$ZodUnion", (t, e) => {
  Q.init(t, e), Z(t._zod, "optin", () => e.options.some((a) => a._zod.optin === "optional") ? "optional" : void 0), Z(t._zod, "optout", () => e.options.some((a) => a._zod.optout === "optional") ? "optional" : void 0), Z(t._zod, "values", () => {
    if (e.options.every((a) => a._zod.values))
      return new Set(e.options.flatMap((a) => Array.from(a._zod.values)));
  }), Z(t._zod, "pattern", () => {
    if (e.options.every((a) => a._zod.pattern)) {
      const a = e.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${a.map((o) => vi(o.source)).join("|")})$`);
    }
  });
  const i = e.options.length === 1, s = e.options[0]._zod.run;
  t._zod.parse = (a, o) => {
    if (i)
      return s(a, o);
    let h = !1;
    const d = [];
    for (const y of e.options) {
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
    return h ? Promise.all(d).then((y) => qi(y, a, t, o)) : qi(d, a, t, o);
  };
}), yo = /* @__PURE__ */ S("$ZodIntersection", (t, e) => {
  Q.init(t, e), t._zod.parse = (i, s) => {
    const a = i.value, o = e.left._zod.run({ value: a, issues: [] }, s), h = e.right._zod.run({ value: a, issues: [] }, s);
    return o instanceof Promise || h instanceof Promise ? Promise.all([o, h]).then(([d, y]) => Hi(i, d, y)) : Hi(i, o, h);
  };
});
function ai(t, e) {
  if (t === e)
    return { valid: !0, data: t };
  if (t instanceof Date && e instanceof Date && +t == +e)
    return { valid: !0, data: t };
  if (te(t) && te(e)) {
    const i = Object.keys(e), s = Object.keys(t).filter((o) => i.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of s) {
      const h = ai(t[o], e[o]);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...h.mergeErrorPath]
        };
      a[o] = h.data;
    }
    return { valid: !0, data: a };
  }
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const a = t[s], o = e[s], h = ai(a, o);
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
function Hi(t, e, i) {
  if (e.issues.length && t.issues.push(...e.issues), i.issues.length && t.issues.push(...i.issues), Gt(t))
    return t;
  const s = ai(e.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const vo = /* @__PURE__ */ S("$ZodRecord", (t, e) => {
  Q.init(t, e), t._zod.parse = (i, s) => {
    const a = i.value;
    if (!te(a))
      return i.issues.push({
        expected: "record",
        code: "invalid_type",
        input: a,
        inst: t
      }), i;
    const o = [];
    if (e.keyType._zod.values) {
      const h = e.keyType._zod.values;
      i.value = {};
      for (const y of h)
        if (typeof y == "string" || typeof y == "number" || typeof y == "symbol") {
          const u = e.valueType._zod.run({ value: a[y], issues: [] }, s);
          u instanceof Promise ? o.push(u.then((w) => {
            w.issues.length && i.issues.push(...Jt(y, w.issues)), i.value[y] = w.value;
          })) : (u.issues.length && i.issues.push(...Jt(y, u.issues)), i.value[y] = u.value);
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
            issues: d.issues.map((u) => Ft(u, s, Vt())),
            input: h,
            path: [h],
            inst: t
          }), i.value[d.value] = d.value;
          continue;
        }
        const y = e.valueType._zod.run({ value: a[h], issues: [] }, s);
        y instanceof Promise ? o.push(y.then((u) => {
          u.issues.length && i.issues.push(...Jt(h, u.issues)), i.value[d.value] = u.value;
        })) : (y.issues.length && i.issues.push(...Jt(h, y.issues)), i.value[d.value] = y.value);
      }
    }
    return o.length ? Promise.all(o).then(() => i) : i;
  };
}), xo = /* @__PURE__ */ S("$ZodEnum", (t, e) => {
  Q.init(t, e);
  const i = wa(e.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((a) => Pa.has(typeof a)).map((a) => typeof a == "string" ? ee(a) : a.toString()).join("|")})$`), t._zod.parse = (a, o) => {
    const h = a.value;
    return s.has(h) || a.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: t
    }), a;
  };
}), go = /* @__PURE__ */ S("$ZodLiteral", (t, e) => {
  if (Q.init(t, e), e.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  t._zod.values = new Set(e.values), t._zod.pattern = new RegExp(`^(${e.values.map((i) => typeof i == "string" ? ee(i) : i ? ee(i.toString()) : String(i)).join("|")})$`), t._zod.parse = (i, s) => {
    const a = i.value;
    return t._zod.values.has(a) || i.issues.push({
      code: "invalid_value",
      values: e.values,
      input: a,
      inst: t
    }), i;
  };
}), bo = /* @__PURE__ */ S("$ZodTransform", (t, e) => {
  Q.init(t, e), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new Hs(t.constructor.name);
    const a = e.transform(i.value, i);
    if (s.async)
      return (a instanceof Promise ? a : Promise.resolve(a)).then((o) => (i.value = o, i));
    if (a instanceof Promise)
      throw new Xt();
    return i.value = a, i;
  };
});
function Wi(t, e) {
  return t.issues.length && e === void 0 ? { issues: [], value: void 0 } : t;
}
const ko = /* @__PURE__ */ S("$ZodOptional", (t, e) => {
  Q.init(t, e), t._zod.optin = "optional", t._zod.optout = "optional", Z(t._zod, "values", () => e.innerType._zod.values ? /* @__PURE__ */ new Set([...e.innerType._zod.values, void 0]) : void 0), Z(t._zod, "pattern", () => {
    const i = e.innerType._zod.pattern;
    return i ? new RegExp(`^(${vi(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (e.innerType._zod.optin === "optional") {
      const a = e.innerType._zod.run(i, s);
      return a instanceof Promise ? a.then((o) => Wi(o, i.value)) : Wi(a, i.value);
    }
    return i.value === void 0 ? i : e.innerType._zod.run(i, s);
  };
}), So = /* @__PURE__ */ S("$ZodNullable", (t, e) => {
  Q.init(t, e), Z(t._zod, "optin", () => e.innerType._zod.optin), Z(t._zod, "optout", () => e.innerType._zod.optout), Z(t._zod, "pattern", () => {
    const i = e.innerType._zod.pattern;
    return i ? new RegExp(`^(${vi(i.source)}|null)$`) : void 0;
  }), Z(t._zod, "values", () => e.innerType._zod.values ? /* @__PURE__ */ new Set([...e.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : e.innerType._zod.run(i, s);
}), wo = /* @__PURE__ */ S("$ZodDefault", (t, e) => {
  Q.init(t, e), t._zod.optin = "optional", Z(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return e.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = e.defaultValue, i;
    const a = e.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then((o) => Ki(o, e)) : Ki(a, e);
  };
});
function Ki(t, e) {
  return t.value === void 0 && (t.value = e.defaultValue), t;
}
const To = /* @__PURE__ */ S("$ZodPrefault", (t, e) => {
  Q.init(t, e), t._zod.optin = "optional", Z(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = e.defaultValue), e.innerType._zod.run(i, s));
}), _o = /* @__PURE__ */ S("$ZodNonOptional", (t, e) => {
  Q.init(t, e), Z(t._zod, "values", () => {
    const i = e.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const a = e.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then((o) => Gi(o, t)) : Gi(a, t);
  };
});
function Gi(t, e) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: e
  }), t;
}
const Po = /* @__PURE__ */ S("$ZodCatch", (t, e) => {
  Q.init(t, e), Z(t._zod, "optin", () => e.innerType._zod.optin), Z(t._zod, "optout", () => e.innerType._zod.optout), Z(t._zod, "values", () => e.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return e.innerType._zod.run(i, s);
    const a = e.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then((o) => (i.value = o.value, o.issues.length && (i.value = e.catchValue({
      ...i,
      error: {
        issues: o.issues.map((h) => Ft(h, s, Vt()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = a.value, a.issues.length && (i.value = e.catchValue({
      ...i,
      error: {
        issues: a.issues.map((o) => Ft(o, s, Vt()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), Ao = /* @__PURE__ */ S("$ZodPipe", (t, e) => {
  Q.init(t, e), Z(t._zod, "values", () => e.in._zod.values), Z(t._zod, "optin", () => e.in._zod.optin), Z(t._zod, "optout", () => e.out._zod.optout), Z(t._zod, "propValues", () => e.in._zod.propValues), t._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const o = e.out._zod.run(i, s);
      return o instanceof Promise ? o.then((h) => we(h, e.in, s)) : we(o, e.in, s);
    }
    const a = e.in._zod.run(i, s);
    return a instanceof Promise ? a.then((o) => we(o, e.out, s)) : we(a, e.out, s);
  };
});
function we(t, e, i) {
  return t.issues.length ? (t.aborted = !0, t) : e._zod.run({ value: t.value, issues: t.issues }, i);
}
const Co = /* @__PURE__ */ S("$ZodReadonly", (t, e) => {
  Q.init(t, e), Z(t._zod, "propValues", () => e.innerType._zod.propValues), Z(t._zod, "values", () => e.innerType._zod.values), Z(t._zod, "optin", () => e.innerType._zod.optin), Z(t._zod, "optout", () => e.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return e.innerType._zod.run(i, s);
    const a = e.innerType._zod.run(i, s);
    return a instanceof Promise ? a.then(Ji) : Ji(a);
  };
});
function Ji(t) {
  return t.value = Object.freeze(t.value), t;
}
const Eo = /* @__PURE__ */ S("$ZodCustom", (t, e) => {
  ft.init(t, e), Q.init(t, e), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, a = e.fn(s);
    if (a instanceof Promise)
      return a.then((o) => Xi(o, i, s, t));
    Xi(a, i, s, t);
  };
});
function Xi(t, e, i, s) {
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
    s._zod.def.params && (a.params = s._zod.def.params), e.issues.push(le(a));
  }
}
class Io {
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
function No() {
  return new Io();
}
const Te = /* @__PURE__ */ No();
function Lo(t, e) {
  return new t({
    type: "string",
    ...O(e)
  });
}
function Oo(t, e) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Qi(t, e) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Mo(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Ro(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...O(e)
  });
}
function Do(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...O(e)
  });
}
function zo(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...O(e)
  });
}
function Vo(t, e) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Fo(t, e) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function jo(t, e) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Bo(t, e) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function $o(t, e) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Uo(t, e) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Zo(t, e) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function qo(t, e) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Ho(t, e) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Wo(t, e) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Ko(t, e) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Go(t, e) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Jo(t, e) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Xo(t, e) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Qo(t, e) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function Yo(t, e) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
function tu(t, e) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...O(e)
  });
}
function eu(t, e) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...O(e)
  });
}
function iu(t, e) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...O(e)
  });
}
function su(t, e) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...O(e)
  });
}
function ru(t, e) {
  return new t({
    type: "number",
    checks: [],
    ...O(e)
  });
}
function au(t, e) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...O(e)
  });
}
function nu(t, e) {
  return new t({
    type: "boolean",
    ...O(e)
  });
}
function ou(t) {
  return new t({
    type: "unknown"
  });
}
function uu(t, e) {
  return new t({
    type: "never",
    ...O(e)
  });
}
function Yi(t, e) {
  return new sr({
    check: "less_than",
    ...O(e),
    value: t,
    inclusive: !1
  });
}
function Xe(t, e) {
  return new sr({
    check: "less_than",
    ...O(e),
    value: t,
    inclusive: !0
  });
}
function ts(t, e) {
  return new rr({
    check: "greater_than",
    ...O(e),
    value: t,
    inclusive: !1
  });
}
function Qe(t, e) {
  return new rr({
    check: "greater_than",
    ...O(e),
    value: t,
    inclusive: !0
  });
}
function es(t, e) {
  return new Sn({
    check: "multiple_of",
    ...O(e),
    value: t
  });
}
function cr(t, e) {
  return new Tn({
    check: "max_length",
    ...O(e),
    maximum: t
  });
}
function Me(t, e) {
  return new _n({
    check: "min_length",
    ...O(e),
    minimum: t
  });
}
function hr(t, e) {
  return new Pn({
    check: "length_equals",
    ...O(e),
    length: t
  });
}
function cu(t, e) {
  return new An({
    check: "string_format",
    format: "regex",
    ...O(e),
    pattern: t
  });
}
function hu(t) {
  return new Cn({
    check: "string_format",
    format: "lowercase",
    ...O(t)
  });
}
function pu(t) {
  return new En({
    check: "string_format",
    format: "uppercase",
    ...O(t)
  });
}
function lu(t, e) {
  return new In({
    check: "string_format",
    format: "includes",
    ...O(e),
    includes: t
  });
}
function fu(t, e) {
  return new Nn({
    check: "string_format",
    format: "starts_with",
    ...O(e),
    prefix: t
  });
}
function du(t, e) {
  return new Ln({
    check: "string_format",
    format: "ends_with",
    ...O(e),
    suffix: t
  });
}
function ve(t) {
  return new On({
    check: "overwrite",
    tx: t
  });
}
function mu(t) {
  return ve((e) => e.normalize(t));
}
function yu() {
  return ve((t) => t.trim());
}
function vu() {
  return ve((t) => t.toLowerCase());
}
function xu() {
  return ve((t) => t.toUpperCase());
}
function gu(t, e, i) {
  return new t({
    type: "array",
    element: e,
    // get element() {
    //   return element;
    // },
    ...O(i)
  });
}
function bu(t, e, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: e,
    ...O(i)
  });
}
function ku(t) {
  const e = Su((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(le(s, i.value, e._zod.def));
    else {
      const a = s;
      a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = i.value), a.inst ?? (a.inst = e), a.continue ?? (a.continue = !e._zod.def.abort), i.issues.push(le(a));
    }
  }, t(i.value, i)));
  return e;
}
function Su(t, e) {
  const i = new ft({
    check: "custom",
    ...O(e)
  });
  return i._zod.check = t, i;
}
const wu = /* @__PURE__ */ S("ZodISODateTime", (t, e) => {
  Wn.init(t, e), Y.init(t, e);
});
function Tu(t) {
  return tu(wu, t);
}
const _u = /* @__PURE__ */ S("ZodISODate", (t, e) => {
  Kn.init(t, e), Y.init(t, e);
});
function Pu(t) {
  return eu(_u, t);
}
const Au = /* @__PURE__ */ S("ZodISOTime", (t, e) => {
  Gn.init(t, e), Y.init(t, e);
});
function Cu(t) {
  return iu(Au, t);
}
const Eu = /* @__PURE__ */ S("ZodISODuration", (t, e) => {
  Jn.init(t, e), Y.init(t, e);
});
function Iu(t) {
  return su(Eu, t);
}
const Nu = (t, e) => {
  Xs.init(t, e), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => za(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => Da(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, ri, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, ri, 2);
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
}, Tt = S("ZodError", Nu, {
  Parent: Error
}), Lu = /* @__PURE__ */ gi(Tt), Ou = /* @__PURE__ */ bi(Tt), Mu = /* @__PURE__ */ je(Tt), Ru = /* @__PURE__ */ Be(Tt), Du = /* @__PURE__ */ ja(Tt), zu = /* @__PURE__ */ Ba(Tt), Vu = /* @__PURE__ */ $a(Tt), Fu = /* @__PURE__ */ Ua(Tt), ju = /* @__PURE__ */ Za(Tt), Bu = /* @__PURE__ */ qa(Tt), $u = /* @__PURE__ */ Ha(Tt), Uu = /* @__PURE__ */ Wa(Tt), tt = /* @__PURE__ */ S("ZodType", (t, e) => (Q.init(t, e), t.def = e, t.type = e.type, Object.defineProperty(t, "_def", { value: e }), t.check = (...i) => t.clone(Wt(e, {
  checks: [
    ...e.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => $t(t, i, s), t.brand = () => t, t.register = (i, s) => (i.add(t, s), t), t.parse = (i, s) => Lu(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => Mu(t, i, s), t.parseAsync = async (i, s) => Ou(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => Ru(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => Du(t, i, s), t.decode = (i, s) => zu(t, i, s), t.encodeAsync = async (i, s) => Vu(t, i, s), t.decodeAsync = async (i, s) => Fu(t, i, s), t.safeEncode = (i, s) => ju(t, i, s), t.safeDecode = (i, s) => Bu(t, i, s), t.safeEncodeAsync = async (i, s) => $u(t, i, s), t.safeDecodeAsync = async (i, s) => Uu(t, i, s), t.refine = (i, s) => t.check(Dc(i, s)), t.superRefine = (i) => t.check(zc(i)), t.overwrite = (i) => t.check(ve(i)), t.optional = () => as(t), t.nullable = () => ns(t), t.nullish = () => as(ns(t)), t.nonoptional = (i) => Ec(t, i), t.array = () => jt(t), t.or = (i) => st([t, i]), t.and = (i) => xc(t, i), t.transform = (i) => os(t, wc(i)), t.default = (i) => Pc(t, i), t.prefault = (i) => Cc(t, i), t.catch = (i) => Nc(t, i), t.pipe = (i) => os(t, i), t.readonly = () => Mc(t), t.describe = (i) => {
  const s = t.clone();
  return Te.add(s, { description: i }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return Te.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...i) => {
  if (i.length === 0)
    return Te.get(t);
  const s = t.clone();
  return Te.add(s, i[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), pr = /* @__PURE__ */ S("_ZodString", (t, e) => {
  ki.init(t, e), tt.init(t, e);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(cu(...s)), t.includes = (...s) => t.check(lu(...s)), t.startsWith = (...s) => t.check(fu(...s)), t.endsWith = (...s) => t.check(du(...s)), t.min = (...s) => t.check(Me(...s)), t.max = (...s) => t.check(cr(...s)), t.length = (...s) => t.check(hr(...s)), t.nonempty = (...s) => t.check(Me(1, ...s)), t.lowercase = (s) => t.check(hu(s)), t.uppercase = (s) => t.check(pu(s)), t.trim = () => t.check(yu()), t.normalize = (...s) => t.check(mu(...s)), t.toLowerCase = () => t.check(vu()), t.toUpperCase = () => t.check(xu());
}), Zu = /* @__PURE__ */ S("ZodString", (t, e) => {
  ki.init(t, e), pr.init(t, e), t.email = (i) => t.check(Oo(qu, i)), t.url = (i) => t.check(Vo(Hu, i)), t.jwt = (i) => t.check(Yo(oc, i)), t.emoji = (i) => t.check(Fo(Wu, i)), t.guid = (i) => t.check(Qi(is, i)), t.uuid = (i) => t.check(Mo(_e, i)), t.uuidv4 = (i) => t.check(Ro(_e, i)), t.uuidv6 = (i) => t.check(Do(_e, i)), t.uuidv7 = (i) => t.check(zo(_e, i)), t.nanoid = (i) => t.check(jo(Ku, i)), t.guid = (i) => t.check(Qi(is, i)), t.cuid = (i) => t.check(Bo(Gu, i)), t.cuid2 = (i) => t.check($o(Ju, i)), t.ulid = (i) => t.check(Uo(Xu, i)), t.base64 = (i) => t.check(Jo(rc, i)), t.base64url = (i) => t.check(Xo(ac, i)), t.xid = (i) => t.check(Zo(Qu, i)), t.ksuid = (i) => t.check(qo(Yu, i)), t.ipv4 = (i) => t.check(Ho(tc, i)), t.ipv6 = (i) => t.check(Wo(ec, i)), t.cidrv4 = (i) => t.check(Ko(ic, i)), t.cidrv6 = (i) => t.check(Go(sc, i)), t.e164 = (i) => t.check(Qo(nc, i)), t.datetime = (i) => t.check(Tu(i)), t.date = (i) => t.check(Pu(i)), t.time = (i) => t.check(Cu(i)), t.duration = (i) => t.check(Iu(i));
});
function L(t) {
  return Lo(Zu, t);
}
const Y = /* @__PURE__ */ S("ZodStringFormat", (t, e) => {
  K.init(t, e), pr.init(t, e);
}), qu = /* @__PURE__ */ S("ZodEmail", (t, e) => {
  Vn.init(t, e), Y.init(t, e);
}), is = /* @__PURE__ */ S("ZodGUID", (t, e) => {
  Dn.init(t, e), Y.init(t, e);
}), _e = /* @__PURE__ */ S("ZodUUID", (t, e) => {
  zn.init(t, e), Y.init(t, e);
}), Hu = /* @__PURE__ */ S("ZodURL", (t, e) => {
  Fn.init(t, e), Y.init(t, e);
}), Wu = /* @__PURE__ */ S("ZodEmoji", (t, e) => {
  jn.init(t, e), Y.init(t, e);
}), Ku = /* @__PURE__ */ S("ZodNanoID", (t, e) => {
  Bn.init(t, e), Y.init(t, e);
}), Gu = /* @__PURE__ */ S("ZodCUID", (t, e) => {
  $n.init(t, e), Y.init(t, e);
}), Ju = /* @__PURE__ */ S("ZodCUID2", (t, e) => {
  Un.init(t, e), Y.init(t, e);
}), Xu = /* @__PURE__ */ S("ZodULID", (t, e) => {
  Zn.init(t, e), Y.init(t, e);
}), Qu = /* @__PURE__ */ S("ZodXID", (t, e) => {
  qn.init(t, e), Y.init(t, e);
}), Yu = /* @__PURE__ */ S("ZodKSUID", (t, e) => {
  Hn.init(t, e), Y.init(t, e);
}), tc = /* @__PURE__ */ S("ZodIPv4", (t, e) => {
  Xn.init(t, e), Y.init(t, e);
}), ec = /* @__PURE__ */ S("ZodIPv6", (t, e) => {
  Qn.init(t, e), Y.init(t, e);
}), ic = /* @__PURE__ */ S("ZodCIDRv4", (t, e) => {
  Yn.init(t, e), Y.init(t, e);
}), sc = /* @__PURE__ */ S("ZodCIDRv6", (t, e) => {
  to.init(t, e), Y.init(t, e);
}), rc = /* @__PURE__ */ S("ZodBase64", (t, e) => {
  eo.init(t, e), Y.init(t, e);
}), ac = /* @__PURE__ */ S("ZodBase64URL", (t, e) => {
  so.init(t, e), Y.init(t, e);
}), nc = /* @__PURE__ */ S("ZodE164", (t, e) => {
  ro.init(t, e), Y.init(t, e);
}), oc = /* @__PURE__ */ S("ZodJWT", (t, e) => {
  no.init(t, e), Y.init(t, e);
}), lr = /* @__PURE__ */ S("ZodNumber", (t, e) => {
  nr.init(t, e), tt.init(t, e), t.gt = (s, a) => t.check(ts(s, a)), t.gte = (s, a) => t.check(Qe(s, a)), t.min = (s, a) => t.check(Qe(s, a)), t.lt = (s, a) => t.check(Yi(s, a)), t.lte = (s, a) => t.check(Xe(s, a)), t.max = (s, a) => t.check(Xe(s, a)), t.int = (s) => t.check(ss(s)), t.safe = (s) => t.check(ss(s)), t.positive = (s) => t.check(ts(0, s)), t.nonnegative = (s) => t.check(Qe(0, s)), t.negative = (s) => t.check(Yi(0, s)), t.nonpositive = (s) => t.check(Xe(0, s)), t.multipleOf = (s, a) => t.check(es(s, a)), t.step = (s, a) => t.check(es(s, a)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Ot(t) {
  return ru(lr, t);
}
const uc = /* @__PURE__ */ S("ZodNumberFormat", (t, e) => {
  oo.init(t, e), lr.init(t, e);
});
function ss(t) {
  return au(uc, t);
}
const cc = /* @__PURE__ */ S("ZodBoolean", (t, e) => {
  uo.init(t, e), tt.init(t, e);
});
function hc(t) {
  return nu(cc, t);
}
const pc = /* @__PURE__ */ S("ZodUnknown", (t, e) => {
  co.init(t, e), tt.init(t, e);
});
function rs() {
  return ou(pc);
}
const lc = /* @__PURE__ */ S("ZodNever", (t, e) => {
  ho.init(t, e), tt.init(t, e);
});
function fc(t) {
  return uu(lc, t);
}
const dc = /* @__PURE__ */ S("ZodArray", (t, e) => {
  po.init(t, e), tt.init(t, e), t.element = e.element, t.min = (i, s) => t.check(Me(i, s)), t.nonempty = (i) => t.check(Me(1, i)), t.max = (i, s) => t.check(cr(i, s)), t.length = (i, s) => t.check(hr(i, s)), t.unwrap = () => t.element;
});
function jt(t, e) {
  return gu(dc, t, e);
}
const mc = /* @__PURE__ */ S("ZodObject", (t, e) => {
  fo.init(t, e), tt.init(t, e), Z(t, "shape", () => e.shape), t.keyof = () => bc(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: rs() }), t.loose = () => t.clone({ ...t._zod.def, catchall: rs() }), t.strict = () => t.clone({ ...t._zod.def, catchall: fc() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => Na(t, i), t.safeExtend = (i) => La(t, i), t.merge = (i) => Oa(t, i), t.pick = (i) => Ea(t, i), t.omit = (i) => Ia(t, i), t.partial = (...i) => Ma(fr, t, i[0]), t.required = (...i) => Ra(dr, t, i[0]);
});
function Ct(t, e) {
  const i = {
    type: "object",
    shape: t ?? {},
    ...O(e)
  };
  return new mc(i);
}
const yc = /* @__PURE__ */ S("ZodUnion", (t, e) => {
  mo.init(t, e), tt.init(t, e), t.options = e.options;
});
function st(t, e) {
  return new yc({
    type: "union",
    options: t,
    ...O(e)
  });
}
const vc = /* @__PURE__ */ S("ZodIntersection", (t, e) => {
  yo.init(t, e), tt.init(t, e);
});
function xc(t, e) {
  return new vc({
    type: "intersection",
    left: t,
    right: e
  });
}
const gc = /* @__PURE__ */ S("ZodRecord", (t, e) => {
  vo.init(t, e), tt.init(t, e), t.keyType = e.keyType, t.valueType = e.valueType;
});
function xt(t, e, i) {
  return new gc({
    type: "record",
    keyType: t,
    valueType: e,
    ...O(i)
  });
}
const ni = /* @__PURE__ */ S("ZodEnum", (t, e) => {
  xo.init(t, e), tt.init(t, e), t.enum = e.entries, t.options = Object.values(e.entries);
  const i = new Set(Object.keys(e.entries));
  t.extract = (s, a) => {
    const o = {};
    for (const h of s)
      if (i.has(h))
        o[h] = e.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new ni({
      ...e,
      checks: [],
      ...O(a),
      entries: o
    });
  }, t.exclude = (s, a) => {
    const o = { ...e.entries };
    for (const h of s)
      if (i.has(h))
        delete o[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new ni({
      ...e,
      checks: [],
      ...O(a),
      entries: o
    });
  };
});
function bc(t, e) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new ni({
    type: "enum",
    entries: i,
    ...O(e)
  });
}
const kc = /* @__PURE__ */ S("ZodLiteral", (t, e) => {
  go.init(t, e), tt.init(t, e), t.values = new Set(e.values), Object.defineProperty(t, "value", {
    get() {
      if (e.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return e.values[0];
    }
  });
});
function g(t, e) {
  return new kc({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...O(e)
  });
}
const Sc = /* @__PURE__ */ S("ZodTransform", (t, e) => {
  bo.init(t, e), tt.init(t, e), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new Hs(t.constructor.name);
    i.addIssue = (o) => {
      if (typeof o == "string")
        i.issues.push(le(o, i.value, e));
      else {
        const h = o;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = i.value), h.inst ?? (h.inst = t), i.issues.push(le(h));
      }
    };
    const a = e.transform(i.value, i);
    return a instanceof Promise ? a.then((o) => (i.value = o, i)) : (i.value = a, i);
  };
});
function wc(t) {
  return new Sc({
    type: "transform",
    transform: t
  });
}
const fr = /* @__PURE__ */ S("ZodOptional", (t, e) => {
  ko.init(t, e), tt.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function as(t) {
  return new fr({
    type: "optional",
    innerType: t
  });
}
const Tc = /* @__PURE__ */ S("ZodNullable", (t, e) => {
  So.init(t, e), tt.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function ns(t) {
  return new Tc({
    type: "nullable",
    innerType: t
  });
}
const _c = /* @__PURE__ */ S("ZodDefault", (t, e) => {
  wo.init(t, e), tt.init(t, e), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function Pc(t, e) {
  return new _c({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : Gs(e);
    }
  });
}
const Ac = /* @__PURE__ */ S("ZodPrefault", (t, e) => {
  To.init(t, e), tt.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function Cc(t, e) {
  return new Ac({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : Gs(e);
    }
  });
}
const dr = /* @__PURE__ */ S("ZodNonOptional", (t, e) => {
  _o.init(t, e), tt.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function Ec(t, e) {
  return new dr({
    type: "nonoptional",
    innerType: t,
    ...O(e)
  });
}
const Ic = /* @__PURE__ */ S("ZodCatch", (t, e) => {
  Po.init(t, e), tt.init(t, e), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function Nc(t, e) {
  return new Ic({
    type: "catch",
    innerType: t,
    catchValue: typeof e == "function" ? e : () => e
  });
}
const Lc = /* @__PURE__ */ S("ZodPipe", (t, e) => {
  Ao.init(t, e), tt.init(t, e), t.in = e.in, t.out = e.out;
});
function os(t, e) {
  return new Lc({
    type: "pipe",
    in: t,
    out: e
    // ...util.normalizeParams(params),
  });
}
const Oc = /* @__PURE__ */ S("ZodReadonly", (t, e) => {
  Co.init(t, e), tt.init(t, e), t.unwrap = () => t._zod.def.innerType;
});
function Mc(t) {
  return new Oc({
    type: "readonly",
    innerType: t
  });
}
const Rc = /* @__PURE__ */ S("ZodCustom", (t, e) => {
  Eo.init(t, e), tt.init(t, e);
});
function Dc(t, e = {}) {
  return bu(Rc, t, e);
}
function zc(t) {
  return ku(t);
}
const Vc = st([g("amber"), g("green"), g("red"), g("other")]), Fc = st([
  g("alpha"),
  g("beta"),
  g("generalAvailability"),
  g("notApplicable"),
  g("preAlpha"),
  g("proposed"),
  g("releaseCandidate"),
  g("unavailable"),
  g("underReview")
]), jc = st([
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
]), Bc = st([g("en-au"), g("en-gb"), g("en-us"), g("es-es")]), $c = xt(Bc, L()), Uc = Ct({
  id: L(),
  color: Vc,
  label: L()
}), Zc = Ct({
  id: L(),
  label: xt(L(), L()),
  description: xt(L(), L()),
  firstCreatedAt: Ot().optional(),
  icon: L().optional(),
  iconDark: L().optional(),
  lastUpdatedAt: Ot().optional(),
  status: Uc.nullable().optional(),
  statusId: Fc,
  typeId: jc
}), qc = st([g("app"), g("engine"), g("connector"), g("context"), g("presenter"), g("tool")]), Hc = Ct({
  id: L(),
  label: L()
}), Wc = Ct({
  activeConnectionCount: Ot().optional(),
  canDescribe: hc().optional(),
  id: L().optional(),
  authMethodId: st([g("apiKey"), g("disabled"), g("oAuth2"), g("none")]),
  label: $c.optional(),
  maxConnectionCount: Ot().optional(),
  params: jt(xt(L(), L())).optional()
}), Kc = st([g("application"), g("curatedDataset"), g("database"), g("fileStore")]), Gc = st([
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
]), Jc = st([g("bidirectional"), g("destination"), g("source"), g("unknown")]), Xc = Zc.extend({
  typeId: qc,
  version: L()
}), Qc = Xc.extend({
  category: Hc.optional(),
  categoryId: Kc,
  implementations: xt(L(), Wc),
  operations: jt(Gc),
  typeId: g("connector"),
  usageId: Jc,
  vendorAccountURL: L().nullable().optional(),
  vendorDocumentationURL: L().nullable().optional(),
  vendorHomeURL: L().nullable().optional()
}), Yc = st([g("amber"), g("green"), g("red"), g("other")]), th = st([
  g("alpha"),
  g("beta"),
  g("generalAvailability"),
  g("notApplicable"),
  g("preAlpha"),
  g("proposed"),
  g("releaseCandidate"),
  g("unavailable"),
  g("underReview")
]), eh = st([
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
]), us = Ot(), ih = Ct({
  id: L(),
  color: Yc,
  label: L()
}), sh = Ct({
  id: L(),
  label: xt(L(), L()),
  description: xt(L(), L()),
  icon: L().optional(),
  iconDark: L().optional(),
  order: Ot(),
  path: L()
}), mr = Ct({
  id: L(),
  label: xt(L(), L()),
  description: xt(L(), L()),
  firstCreatedAt: us.optional(),
  icon: L().optional(),
  iconDark: L().optional(),
  lastUpdatedAt: us.optional(),
  status: ih.optional(),
  statusId: th,
  typeId: eh
}), rh = st([g("app"), g("engine"), g("connector"), g("context"), g("presenter"), g("tool")]), ah = mr.extend({
  typeId: rh,
  version: L()
}), nh = mr.extend({
  modelRefs: jt(sh),
  order: Ot()
}), oh = g("list"), uh = ah.extend({
  models: jt(nh),
  operations: jt(oh),
  typeId: g("context")
}), ch = st([g("amber"), g("green"), g("red"), g("other")]), hh = st([g("alpha"), g("beta"), g("generalAvailability"), g("notApplicable"), g("preAlpha"), g("proposed"), g("releaseCandidate"), g("unavailable"), g("underReview")]), ph = st([g("app"), g("connector"), g("connectorConnection"), g("context"), g("contextModelGroup"), g("contextModel"), g("contextModelDimensionGroup"), g("contextModelDimension"), g("contextModelDimensionHierarchy"), g("contextModelEntityGroup"), g("contextModelEntity"), g("contextModelEntityDataItem"), g("contextModelEntityEvent"), g("contextModelEntityPrimaryMeasure"), g("contextModelSecondaryMeasureGroup"), g("contextModelSecondaryMeasure"), g("dataView"), g("dimension"), g("engine"), g("eventQuery"), g("presenter"), g("presenterPresentation"), g("tool")]), cs = Ot(), lh = Ct({
  id: L(),
  color: ch,
  label: L()
}), fh = Ct({
  id: L(),
  label: xt(L(), L()),
  description: xt(L(), L()),
  icon: L().optional(),
  iconDark: L().optional(),
  order: Ot(),
  path: L()
}), dh = Ct({
  id: L(),
  label: xt(L(), L()),
  description: xt(L(), L()),
  firstCreatedAt: cs.optional(),
  icon: L().optional(),
  iconDark: L().optional(),
  lastUpdatedAt: cs.optional(),
  status: lh.optional(),
  statusId: hh,
  typeId: ph
}), mh = st([g("app"), g("engine"), g("connector"), g("context"), g("presenter"), g("tool")]), yh = dh.extend({
  typeId: mh,
  version: L()
}), vh = st([g("list"), g("render"), g("setColorMode")]), xh = yh.extend({
  presentations: jt(fh),
  operations: jt(vh),
  typeId: g("presenter")
}), gh = ["critical", "high", "moderate", "low", "unknown"], Si = Sr(br);
async function Ah() {
  try {
    console.info("🚀 Building configuration...");
    const t = JSON.parse(await F.readFile("package.json", "utf8")), e = JSON.parse(await F.readFile("config.json", "utf8"));
    t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), await F.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (t) {
    console.error("❌ Error building configuration.", t);
  }
}
async function Ch(t) {
  try {
    console.info(`🚀 Building public directory index for identifier '${t}'...`);
    const e = {};
    async function i(a, o) {
      console.info(`⚙️ Processing directory '${a}'...`);
      const h = [], d = a.slice(`public/${t}`.length);
      e[d === "" ? "/" : d] = h;
      for (const y of o) {
        const u = `${a}/${y}`;
        try {
          const w = await F.stat(u);
          if (w.isDirectory()) {
            const P = await F.readdir(u), M = { childCount: P.length, name: y, typeId: "folder" };
            h.push(M), await i(u, P);
          } else {
            const P = { id: kr(), lastModifiedAt: w.mtimeMs, name: y, size: w.size, typeId: "object" };
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
    const s = await F.readdir(`public/${t}`);
    await i(`public/${t}`, s), await F.writeFile(`./public/${t}Index.json`, JSON.stringify(e), "utf8"), console.info("✅ Public directory index built.");
  } catch (e) {
    console.error("❌ Error building public directory index.", e);
  }
}
async function Eh() {
  try {
    console.info("🚀 Building connector configuration...");
    const [t, e, i] = await Promise.all([
      F.readFile("package.json", "utf8").then((h) => JSON.parse(h)),
      F.readFile("config.json", "utf8").then((h) => JSON.parse(h)),
      F.readFile("src/index.ts", "utf8")
    ]), s = Qc.safeParse(e);
    if (s.success)
      console.info("ℹ️  Configuration is valid.");
    else {
      console.log("❌ Configuration is invalid:"), console.table(s.error.issues);
      return;
    }
    const a = wi(i), o = kh(a);
    a.length > 0 ? (console.info(`ℹ️  Implements ${a.length} operations:`), console.table(a)) : console.warn("⚠️  Implements no operations."), o === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports '${o}' usage.`), t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), e.operations = a, e.usageId = o, await F.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (t) {
    console.error("❌ Error building connector configuration.", t);
  }
}
async function Ih() {
  try {
    console.info("🚀 Building context configuration...");
    const [t, e, i] = await Promise.all([
      F.readFile("package.json", "utf8").then((o) => JSON.parse(o)),
      F.readFile("config.json", "utf8").then((o) => JSON.parse(o)),
      F.readFile("src/index.ts", "utf8")
    ]), s = uh.safeParse(e);
    if (s.success)
      console.info("ℹ️  Configuration is valid.");
    else {
      console.log("❌ Configuration is invalid:"), console.table(s.error.issues);
      return;
    }
    const a = wi(i);
    a.length > 0 ? (console.info(`ℹ️  Implements ${a.length} operations:`), console.table(a)) : console.warn("⚠️  Implements no operations."), t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), e.operations = a, await F.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function Nh() {
  try {
    console.info("🚀 Building presenter configuration...");
    const [t, e, i] = await Promise.all([
      F.readFile("package.json", "utf8").then((o) => JSON.parse(o)),
      F.readFile("config.json", "utf8").then((o) => JSON.parse(o)),
      F.readFile("src/index.ts", "utf8")
    ]), s = xh.safeParse(e);
    if (s.success)
      console.info("ℹ️  Configuration is valid.");
    else {
      console.log("❌ Configuration is invalid:"), console.table(s.error.issues);
      return;
    }
    const a = wi(i);
    a.length > 0 ? (console.info(`ℹ️  Implements ${a.length} operations:`), console.table(a)) : console.warn("⚠️  Implements no operations."), t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), e.operations = a, await F.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function Lh(t = "./") {
  try {
    console.info("🚀 Bumping version...");
    const e = JSON.parse(await F.readFile(`${t}package.json`, "utf8"));
    if (e.version == null)
      e.version = "0.0.001", await F.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${e.version}.`);
    else {
      const i = e.version, s = e.version.split(".");
      e.version = `${s[0]}.${s[1]}.${Number(s[2]) + 1}`, await F.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${e.version}.`);
    }
  } catch (e) {
    console.error("❌ Error bumping package version.", e);
  }
}
function Oh(t) {
  console.error(`❌ ${t} script not implemented.`);
}
async function Mh() {
  const t = "<!-- DEPENDENCY_LICENSES_START -->", e = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const s = (await F.readFile("./licenses.md", "utf8")).trim(), a = await F.readFile("./README.md", "utf8"), o = a.indexOf(t), h = a.indexOf(e);
    if (o === -1 || h === -1) {
      console.error("❌ Dependency license markers not found in readme file.");
      return;
    }
    const d = a.slice(0, Math.max(0, o + t.length)) + `
` + s + `
` + a.slice(Math.max(0, h));
    await F.writeFile("README.md", d, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (i) {
    console.error("❌ Error updating readme file.", i);
  }
}
async function Rh() {
  const t = "<!-- OWASP_BADGE_START -->", e = "<!-- OWASP_BADGE_END -->";
  try {
    const i = JSON.parse(await F.readFile("./dependency-check-reports/dependency-check-report.json", "utf8")), s = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const w of i.dependencies)
      if (w.vulnerabilities != null)
        for (const P of w.vulnerabilities) {
          const M = P.severity?.toLowerCase() ?? "unknown";
          if (M in s) {
            const U = gh.find((ht) => ht === M);
            s[U ?? "unknown"]++;
          } else
            s.unknown++;
        }
    const a = await bh(s), o = await F.readFile("./README.md", "utf8"), h = o.indexOf(t), d = o.indexOf(e);
    if (h === -1 || d === -1) {
      console.error("❌ OWASP badge markers not found in README.md.");
      return;
    }
    const y = a.join(" "), u = o.slice(0, Math.max(0, h + t.length)) + y + o.slice(Math.max(0, d));
    await F.writeFile("README.md", u, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (i) {
    console.error("❌ Error updating README with OWASP badges:", i);
  }
}
async function Dh() {
  try {
    console.info("🚀 Sending deployment notice...");
    const t = JSON.parse(await F.readFile("config.json", "utf8")), e = {
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
async function zh() {
  try {
    Sh("Synchronising with GitHub....");
    const t = JSON.parse(await F.readFile("package.json", "utf8"));
    await Ye("git add ."), await Ye(`git commit -m "v${t.version}"`), await Ye("git push origin main:main"), console.info(`✅ Synchronised version ${t.version} with GitHub.`);
  } catch (t) {
    console.error("❌ Error synchronising with GitHub.", t), process.exit(1);
  }
}
async function Vh(t, e) {
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
          const P = `wrangler r2 object put "datapos-sample-data-eu/${o}/${d}" --file="${a}/${d}" --jurisdiction=eu --remote`, M = await Si(P);
          if (M.stderr) throw new Error(M.stderr);
        }
      }
    }
    const s = await F.readdir(`${t}/${e}/`);
    await i(`${t}/${e}`, e, s), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function Fh() {
  try {
    console.info("🚀 Uploading module configuration....");
    const t = JSON.parse(await F.readFile("config.json", "utf8")), e = t.id, i = {
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
async function jh(t) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await F.readFile("package.json", "utf8")).version}`;
    async function s(a, o = "") {
      const h = await F.readdir(a, { withFileTypes: !0 });
      for (const d of h) {
        const y = `${a}/${d.name}`, u = o ? `${o}/${d.name}` : d.name;
        if (d.isDirectory()) continue;
        const w = `${t}_${i}/${u}`.replaceAll("\\", "/"), P = d.name.endsWith(".css") ? "text/css" : "application/octet-stream", M = d.name.endsWith(".js") ? "application/javascript" : P;
        console.info(`⚙️ Uploading '${u}' → '${w}'...`);
        const { stderr: U } = await Si(`wrangler r2 object put "${w}" --file="${y}" --content-type ${M} --jurisdiction=eu --remote`);
        if (U) throw new Error(U);
      }
    }
    await s("dist"), console.info("✅ Module uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading module to R2.", e);
  }
}
async function bh(t) {
  const e = {
    critical: { color: "D32F2F", label: "critical" },
    high: { color: "EF6C00", label: "high" },
    moderate: { color: "FBC02D", label: "moderate" },
    low: { color: "6D8C31", label: "low" },
    unknown: { color: "616161", label: "unknown" }
  }, i = JSON.parse(await F.readFile("config.json", "utf8")), s = [];
  if (Object.values(t).reduce((o, h) => o + h, 0) === 0)
    console.info("✅ No vulnerabilities found."), s.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${i.id}/dependency-check-reports/dependency-check-report.html)`);
  else
    for (const [o, h] of Object.entries(t)) {
      const d = e[o];
      if (console.warn(`⚠️  ${h} ${d.label} vulnerability(ies) found.`), h === 0) continue;
      const y = `https://img.shields.io/badge/OWASP-${h}%20${d.label}-${d.color}`;
      s.push(`[![OWASP](${y})](https://data-positioning.github.io/${i.id}/dependency-check-reports/dependency-check-report.html)`);
    }
  return s;
}
function wi(t) {
  const i = X.extend(ba()).parse(t, {
    ecmaVersion: "latest",
    sourceType: "module",
    locations: !0
  }), s = [];
  return oi(i, (a) => {
    if (a.type !== "MethodDefinition") return;
    const o = a, h = o.key;
    if (h.type !== "Identifier") return;
    const d = h.name;
    d && d !== "constructor" && o.accessibility !== "private" && s.push(d);
  }), s;
}
function kh(t) {
  let e = !1, i = !1;
  for (const s of t)
    Sa.includes(s) && (e = !0), ka.includes(s) && (i = !0);
  return e && i ? "bidirectional" : e ? "source" : i ? "destination" : "unknown";
}
async function Ye(t) {
  console.info(`▶️  ${t}`);
  const { stdout: e, stderr: i } = await Si(t);
  e.trim() && console.log(e.trim()), i.trim() && console.error(i.trim());
}
function Sh(t) {
  const e = "─".repeat(t.length + 10);
  console.info(`
${e}`), console.info(`     ${t}`), console.info(`${e}
`);
}
function oi(t, e) {
  e(t);
  for (const [i, s] of Object.entries(t)) {
    if (["loc", "range", "start", "end", "comments"].includes(i)) continue;
    const a = s;
    if (Array.isArray(a))
      for (const o of a) {
        const h = o;
        h && typeof h.type == "string" && oi(h, e);
      }
    else a && typeof a == "object" && typeof a.type == "string" && oi(a, e);
  }
}
export {
  Ah as buildConfig,
  Eh as buildConnectorConfig,
  Ih as buildContextConfig,
  Nh as buildPresenterConfig,
  Ch as buildPublicDirectoryIndex,
  Lh as bumpVersion,
  Oh as echoScriptNotImplemented,
  Mh as insertLicensesIntoReadme,
  Rh as insertOWASPDependencyCheckBadgeIntoReadme,
  Dh as sendDeploymentNotice,
  zh as syncWithGitHub,
  Vh as uploadDirectoryToR2,
  Fh as uploadModuleConfigToDO,
  jh as uploadModuleToR2
};
