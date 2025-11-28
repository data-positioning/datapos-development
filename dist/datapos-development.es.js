import { exec as _i } from "node:child_process";
import { promises as D } from "node:fs";
import { nanoid as Li } from "nanoid";
import { promisify as Oi } from "node:util";
function Ri(t, e, s, a, o) {
  var p = [];
  s || (s = T), (function d(v, g, h) {
    var C = h || v.type, N = v !== p[p.length - 1];
    N && p.push(v), s[C](v, g, d), e[C] && e[C](v, g || p, p), N && p.pop();
  })(t, a, o);
}
function ve(t, e, s) {
  s(t, e);
}
function Pt(t, e, s) {
}
var T = {};
T.Program = T.BlockStatement = T.StaticBlock = function(t, e, s) {
  for (var a = 0, o = t.body; a < o.length; a += 1) {
    var p = o[a];
    s(p, e, "Statement");
  }
};
T.Statement = ve;
T.EmptyStatement = Pt;
T.ExpressionStatement = T.ParenthesizedExpression = T.ChainExpression = function(t, e, s) {
  return s(t.expression, e, "Expression");
};
T.IfStatement = function(t, e, s) {
  s(t.test, e, "Expression"), s(t.consequent, e, "Statement"), t.alternate && s(t.alternate, e, "Statement");
};
T.LabeledStatement = function(t, e, s) {
  return s(t.body, e, "Statement");
};
T.BreakStatement = T.ContinueStatement = Pt;
T.WithStatement = function(t, e, s) {
  s(t.object, e, "Expression"), s(t.body, e, "Statement");
};
T.SwitchStatement = function(t, e, s) {
  s(t.discriminant, e, "Expression");
  for (var a = 0, o = t.cases; a < o.length; a += 1) {
    var p = o[a];
    s(p, e);
  }
};
T.SwitchCase = function(t, e, s) {
  t.test && s(t.test, e, "Expression");
  for (var a = 0, o = t.consequent; a < o.length; a += 1) {
    var p = o[a];
    s(p, e, "Statement");
  }
};
T.ReturnStatement = T.YieldExpression = T.AwaitExpression = function(t, e, s) {
  t.argument && s(t.argument, e, "Expression");
};
T.ThrowStatement = T.SpreadElement = function(t, e, s) {
  return s(t.argument, e, "Expression");
};
T.TryStatement = function(t, e, s) {
  s(t.block, e, "Statement"), t.handler && s(t.handler, e), t.finalizer && s(t.finalizer, e, "Statement");
};
T.CatchClause = function(t, e, s) {
  t.param && s(t.param, e, "Pattern"), s(t.body, e, "Statement");
};
T.WhileStatement = T.DoWhileStatement = function(t, e, s) {
  s(t.test, e, "Expression"), s(t.body, e, "Statement");
};
T.ForStatement = function(t, e, s) {
  t.init && s(t.init, e, "ForInit"), t.test && s(t.test, e, "Expression"), t.update && s(t.update, e, "Expression"), s(t.body, e, "Statement");
};
T.ForInStatement = T.ForOfStatement = function(t, e, s) {
  s(t.left, e, "ForInit"), s(t.right, e, "Expression"), s(t.body, e, "Statement");
};
T.ForInit = function(t, e, s) {
  t.type === "VariableDeclaration" ? s(t, e) : s(t, e, "Expression");
};
T.DebuggerStatement = Pt;
T.FunctionDeclaration = function(t, e, s) {
  return s(t, e, "Function");
};
T.VariableDeclaration = function(t, e, s) {
  for (var a = 0, o = t.declarations; a < o.length; a += 1) {
    var p = o[a];
    s(p, e);
  }
};
T.VariableDeclarator = function(t, e, s) {
  s(t.id, e, "Pattern"), t.init && s(t.init, e, "Expression");
};
T.Function = function(t, e, s) {
  t.id && s(t.id, e, "Pattern");
  for (var a = 0, o = t.params; a < o.length; a += 1) {
    var p = o[a];
    s(p, e, "Pattern");
  }
  s(t.body, e, t.expression ? "Expression" : "Statement");
};
T.Pattern = function(t, e, s) {
  t.type === "Identifier" ? s(t, e, "VariablePattern") : t.type === "MemberExpression" ? s(t, e, "MemberPattern") : s(t, e);
};
T.VariablePattern = Pt;
T.MemberPattern = ve;
T.RestElement = function(t, e, s) {
  return s(t.argument, e, "Pattern");
};
T.ArrayPattern = function(t, e, s) {
  for (var a = 0, o = t.elements; a < o.length; a += 1) {
    var p = o[a];
    p && s(p, e, "Pattern");
  }
};
T.ObjectPattern = function(t, e, s) {
  for (var a = 0, o = t.properties; a < o.length; a += 1) {
    var p = o[a];
    p.type === "Property" ? (p.computed && s(p.key, e, "Expression"), s(p.value, e, "Pattern")) : p.type === "RestElement" && s(p.argument, e, "Pattern");
  }
};
T.Expression = ve;
T.ThisExpression = T.Super = T.MetaProperty = Pt;
T.ArrayExpression = function(t, e, s) {
  for (var a = 0, o = t.elements; a < o.length; a += 1) {
    var p = o[a];
    p && s(p, e, "Expression");
  }
};
T.ObjectExpression = function(t, e, s) {
  for (var a = 0, o = t.properties; a < o.length; a += 1) {
    var p = o[a];
    s(p, e);
  }
};
T.FunctionExpression = T.ArrowFunctionExpression = T.FunctionDeclaration;
T.SequenceExpression = function(t, e, s) {
  for (var a = 0, o = t.expressions; a < o.length; a += 1) {
    var p = o[a];
    s(p, e, "Expression");
  }
};
T.TemplateLiteral = function(t, e, s) {
  for (var a = 0, o = t.quasis; a < o.length; a += 1) {
    var p = o[a];
    s(p, e);
  }
  for (var d = 0, v = t.expressions; d < v.length; d += 1) {
    var g = v[d];
    s(g, e, "Expression");
  }
};
T.TemplateElement = Pt;
T.UnaryExpression = T.UpdateExpression = function(t, e, s) {
  s(t.argument, e, "Expression");
};
T.BinaryExpression = T.LogicalExpression = function(t, e, s) {
  s(t.left, e, "Expression"), s(t.right, e, "Expression");
};
T.AssignmentExpression = T.AssignmentPattern = function(t, e, s) {
  s(t.left, e, "Pattern"), s(t.right, e, "Expression");
};
T.ConditionalExpression = function(t, e, s) {
  s(t.test, e, "Expression"), s(t.consequent, e, "Expression"), s(t.alternate, e, "Expression");
};
T.NewExpression = T.CallExpression = function(t, e, s) {
  if (s(t.callee, e, "Expression"), t.arguments)
    for (var a = 0, o = t.arguments; a < o.length; a += 1) {
      var p = o[a];
      s(p, e, "Expression");
    }
};
T.MemberExpression = function(t, e, s) {
  s(t.object, e, "Expression"), t.computed && s(t.property, e, "Expression");
};
T.ExportNamedDeclaration = T.ExportDefaultDeclaration = function(t, e, s) {
  t.declaration && s(t.declaration, e, t.type === "ExportNamedDeclaration" || t.declaration.id ? "Statement" : "Expression"), t.source && s(t.source, e, "Expression");
};
T.ExportAllDeclaration = function(t, e, s) {
  t.exported && s(t.exported, e), s(t.source, e, "Expression");
};
T.ImportDeclaration = function(t, e, s) {
  for (var a = 0, o = t.specifiers; a < o.length; a += 1) {
    var p = o[a];
    s(p, e);
  }
  s(t.source, e, "Expression");
};
T.ImportExpression = function(t, e, s) {
  s(t.source, e, "Expression");
};
T.ImportSpecifier = T.ImportDefaultSpecifier = T.ImportNamespaceSpecifier = T.Identifier = T.PrivateIdentifier = T.Literal = Pt;
T.TaggedTemplateExpression = function(t, e, s) {
  s(t.tag, e, "Expression"), s(t.quasi, e, "Expression");
};
T.ClassDeclaration = T.ClassExpression = function(t, e, s) {
  return s(t, e, "Class");
};
T.Class = function(t, e, s) {
  t.id && s(t.id, e, "Pattern"), t.superClass && s(t.superClass, e, "Expression"), s(t.body, e);
};
T.ClassBody = function(t, e, s) {
  for (var a = 0, o = t.body; a < o.length; a += 1) {
    var p = o[a];
    s(p, e);
  }
};
T.MethodDefinition = T.PropertyDefinition = T.Property = function(t, e, s) {
  t.computed && s(t.key, e, "Expression"), t.value && s(t.value, e, "Expression");
};
var Mi = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], He = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Di = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ze = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", ue = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, ce = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Vi = {
  5: ce,
  "5module": ce + " export import",
  6: ce + " const class extends export import super"
}, Fi = /^in(stanceof)?$/, Bi = new RegExp("[" + ze + "]"), ji = new RegExp("[" + ze + Di + "]");
function de(t, e) {
  for (var s = 65536, a = 0; a < e.length; a += 2) {
    if (s += e[a], s > t)
      return !1;
    if (s += e[a + 1], s >= t)
      return !0;
  }
  return !1;
}
function lt(t, e) {
  return t < 65 ? t === 36 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && Bi.test(String.fromCharCode(t)) : e === !1 ? !1 : de(t, He);
}
function mt(t, e) {
  return t < 48 ? t === 36 : t < 58 ? !0 : t < 65 ? !1 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && ji.test(String.fromCharCode(t)) : e === !1 ? !1 : de(t, He) || de(t, Mi);
}
var M = function(e, s) {
  s === void 0 && (s = {}), this.label = e, this.keyword = s.keyword, this.beforeExpr = !!s.beforeExpr, this.startsExpr = !!s.startsExpr, this.isLoop = !!s.isLoop, this.isAssign = !!s.isAssign, this.prefix = !!s.prefix, this.postfix = !!s.postfix, this.binop = s.binop || null, this.updateContext = null;
};
function ht(t, e) {
  return new M(t, { beforeExpr: !0, binop: e });
}
var ut = { beforeExpr: !0 }, rt = { startsExpr: !0 }, Et = {};
function F(t, e) {
  return e === void 0 && (e = {}), e.keyword = t, Et[t] = new M(t, e);
}
var u = {
  num: new M("num", rt),
  regexp: new M("regexp", rt),
  string: new M("string", rt),
  name: new M("name", rt),
  privateId: new M("privateId", rt),
  eof: new M("eof"),
  // Punctuation token types.
  bracketL: new M("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new M("]"),
  braceL: new M("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new M("}"),
  parenL: new M("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new M(")"),
  comma: new M(",", ut),
  semi: new M(";", ut),
  colon: new M(":", ut),
  dot: new M("."),
  question: new M("?", ut),
  questionDot: new M("?."),
  arrow: new M("=>", ut),
  template: new M("template"),
  invalidTemplate: new M("invalidTemplate"),
  ellipsis: new M("...", ut),
  backQuote: new M("`", rt),
  dollarBraceL: new M("${", { beforeExpr: !0, startsExpr: !0 }),
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
  eq: new M("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new M("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new M("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new M("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: ht("||", 1),
  logicalAND: ht("&&", 2),
  bitwiseOR: ht("|", 3),
  bitwiseXOR: ht("^", 4),
  bitwiseAND: ht("&", 5),
  equality: ht("==/!=/===/!==", 6),
  relational: ht("</>/<=/>=", 7),
  bitShift: ht("<</>>/>>>", 8),
  plusMin: new M("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: ht("%", 10),
  star: ht("*", 10),
  slash: ht("/", 10),
  starstar: new M("**", { beforeExpr: !0 }),
  coalesce: ht("??", 1),
  // Keyword token types.
  _break: F("break"),
  _case: F("case", ut),
  _catch: F("catch"),
  _continue: F("continue"),
  _debugger: F("debugger"),
  _default: F("default", ut),
  _do: F("do", { isLoop: !0, beforeExpr: !0 }),
  _else: F("else", ut),
  _finally: F("finally"),
  _for: F("for", { isLoop: !0 }),
  _function: F("function", rt),
  _if: F("if"),
  _return: F("return", ut),
  _switch: F("switch"),
  _throw: F("throw", ut),
  _try: F("try"),
  _var: F("var"),
  _const: F("const"),
  _while: F("while", { isLoop: !0 }),
  _with: F("with"),
  _new: F("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: F("this", rt),
  _super: F("super", rt),
  _class: F("class", rt),
  _extends: F("extends", ut),
  _export: F("export"),
  _import: F("import", rt),
  _null: F("null", rt),
  _true: F("true", rt),
  _false: F("false", rt),
  _in: F("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: F("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: F("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: F("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: F("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, tt = /\r\n?|\n|\u2028|\u2029/, We = new RegExp(tt.source, "g");
function Ct(t) {
  return t === 10 || t === 13 || t === 8232 || t === 8233;
}
function Ke(t, e, s) {
  s === void 0 && (s = t.length);
  for (var a = e; a < s; a++) {
    var o = t.charCodeAt(a);
    if (Ct(o))
      return a < s - 1 && o === 13 && t.charCodeAt(a + 1) === 10 ? a + 2 : a + 1;
  }
  return -1;
}
var ge = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Q = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Je = Object.prototype, Ui = Je.hasOwnProperty, qi = Je.toString, It = Object.hasOwn || (function(t, e) {
  return Ui.call(t, e);
}), _e = Array.isArray || (function(t) {
  return qi.call(t) === "[object Array]";
}), Le = /* @__PURE__ */ Object.create(null);
function St(t) {
  return Le[t] || (Le[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"));
}
function yt(t) {
  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
var Hi = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, wt = function(e, s) {
  this.line = e, this.column = s;
};
wt.prototype.offset = function(e) {
  return new wt(this.line, this.column + e);
};
var jt = function(e, s, a) {
  this.start = s, this.end = a, e.sourceFile !== null && (this.source = e.sourceFile);
};
function be(t, e) {
  for (var s = 1, a = 0; ; ) {
    var o = Ke(t, a, e);
    if (o < 0)
      return new wt(s, e - a);
    ++s, a = o;
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
function zi(t) {
  var e = {};
  for (var s in Gt)
    e[s] = t && It(t, s) ? t[s] : Gt[s];
  if (e.ecmaVersion === "latest" ? e.ecmaVersion = 1e8 : e.ecmaVersion == null ? (!Oe && typeof console == "object" && console.warn && (Oe = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), e.allowReserved == null && (e.allowReserved = e.ecmaVersion < 5), (!t || t.allowHashBang == null) && (e.allowHashBang = e.ecmaVersion >= 14), _e(e.onToken)) {
    var a = e.onToken;
    e.onToken = function(o) {
      return a.push(o);
    };
  }
  return _e(e.onComment) && (e.onComment = Wi(e, e.onComment)), e;
}
function Wi(t, e) {
  return function(s, a, o, p, d, v) {
    var g = {
      type: s ? "Block" : "Line",
      value: a,
      start: o,
      end: p
    };
    t.locations && (g.loc = new jt(this, d, v)), t.ranges && (g.range = [o, p]), e.push(g);
  };
}
var Bt = 1, Nt = 2, Se = 4, Ge = 8, Te = 16, $e = 32, te = 64, Xe = 128, kt = 256, Ut = 512, ee = Bt | Nt | kt;
function Pe(t, e) {
  return Nt | (t ? Se : 0) | (e ? Ge : 0);
}
var $t = 0, Ce = 1, vt = 2, Qe = 3, Ye = 4, Ze = 5, J = function(e, s, a) {
  this.options = e = zi(e), this.sourceFile = e.sourceFile, this.keywords = St(Vi[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
  var o = "";
  e.allowReserved !== !0 && (o = ue[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (o += " await")), this.reservedWords = St(o);
  var p = (o ? o + " " : "") + ue.strict;
  this.reservedWordsStrict = St(p), this.reservedWordsStrictBind = St(p + " " + ue.strictBind), this.input = String(s), this.containsEsc = !1, a ? (this.pos = a, this.lineStart = this.input.lastIndexOf(`
`, a - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(tt).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = u.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(Bt), this.regexpState = null, this.privateNameStack = [];
}, ft = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
J.prototype.parse = function() {
  var e = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(e);
};
ft.inFunction.get = function() {
  return (this.currentVarScope().flags & Nt) > 0;
};
ft.inGenerator.get = function() {
  return (this.currentVarScope().flags & Ge) > 0;
};
ft.inAsync.get = function() {
  return (this.currentVarScope().flags & Se) > 0;
};
ft.canAwait.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], s = e.flags;
    if (s & (kt | Ut))
      return !1;
    if (s & Nt)
      return (s & Se) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
ft.allowSuper.get = function() {
  var t = this.currentThisScope(), e = t.flags;
  return (e & te) > 0 || this.options.allowSuperOutsideMethod;
};
ft.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & Xe) > 0;
};
ft.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
ft.allowNewDotTarget.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], s = e.flags;
    if (s & (kt | Ut) || s & Nt && !(s & Te))
      return !0;
  }
  return !1;
};
ft.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & kt) > 0;
};
J.extend = function() {
  for (var e = [], s = arguments.length; s--; ) e[s] = arguments[s];
  for (var a = this, o = 0; o < e.length; o++)
    a = e[o](a);
  return a;
};
J.parse = function(e, s) {
  return new this(s, e).parse();
};
J.parseExpressionAt = function(e, s, a) {
  var o = new this(a, e, s);
  return o.nextToken(), o.parseExpression();
};
J.tokenizer = function(e, s) {
  return new this(s, e);
};
Object.defineProperties(J.prototype, ft);
var et = J.prototype, Ki = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
et.strictDirective = function(t) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    Q.lastIndex = t, t += Q.exec(this.input)[0].length;
    var e = Ki.exec(this.input.slice(t));
    if (!e)
      return !1;
    if ((e[1] || e[2]) === "use strict") {
      Q.lastIndex = t + e[0].length;
      var s = Q.exec(this.input), a = s.index + s[0].length, o = this.input.charAt(a);
      return o === ";" || o === "}" || tt.test(s[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(o) || o === "!" && this.input.charAt(a + 1) === "=");
    }
    t += e[0].length, Q.lastIndex = t, t += Q.exec(this.input)[0].length, this.input[t] === ";" && t++;
  }
};
et.eat = function(t) {
  return this.type === t ? (this.next(), !0) : !1;
};
et.isContextual = function(t) {
  return this.type === u.name && this.value === t && !this.containsEsc;
};
et.eatContextual = function(t) {
  return this.isContextual(t) ? (this.next(), !0) : !1;
};
et.expectContextual = function(t) {
  this.eatContextual(t) || this.unexpected();
};
et.canInsertSemicolon = function() {
  return this.type === u.eof || this.type === u.braceR || tt.test(this.input.slice(this.lastTokEnd, this.start));
};
et.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
et.semicolon = function() {
  !this.eat(u.semi) && !this.insertSemicolon() && this.unexpected();
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
    var s = e ? t.parenthesizedAssign : t.parenthesizedBind;
    s > -1 && this.raiseRecoverable(s, e ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
et.checkExpressionErrors = function(t, e) {
  if (!t)
    return !1;
  var s = t.shorthandAssign, a = t.doubleProto;
  if (!e)
    return s >= 0 || a >= 0;
  s >= 0 && this.raise(s, "Shorthand property assignments are valid only in destructuring patterns"), a >= 0 && this.raiseRecoverable(a, "Redefinition of __proto__ property");
};
et.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
et.isSimpleAssignTarget = function(t) {
  return t.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(t.expression) : t.type === "Identifier" || t.type === "MemberExpression";
};
var E = J.prototype;
E.parseTopLevel = function(t) {
  var e = /* @__PURE__ */ Object.create(null);
  for (t.body || (t.body = []); this.type !== u.eof; ) {
    var s = this.parseStatement(null, !0, e);
    t.body.push(s);
  }
  if (this.inModule)
    for (var a = 0, o = Object.keys(this.undefinedExports); a < o.length; a += 1) {
      var p = o[a];
      this.raiseRecoverable(this.undefinedExports[p].start, "Export '" + p + "' is not defined");
    }
  return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program");
};
var ke = { kind: "loop" }, Ji = { kind: "switch" };
E.isLet = function(t) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  Q.lastIndex = this.pos;
  var e = Q.exec(this.input), s = this.pos + e[0].length, a = this.input.charCodeAt(s);
  if (a === 91 || a === 92)
    return !0;
  if (t)
    return !1;
  if (a === 123 || a > 55295 && a < 56320)
    return !0;
  if (lt(a, !0)) {
    for (var o = s + 1; mt(a = this.input.charCodeAt(o), !0); )
      ++o;
    if (a === 92 || a > 55295 && a < 56320)
      return !0;
    var p = this.input.slice(s, o);
    if (!Fi.test(p))
      return !0;
  }
  return !1;
};
E.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  Q.lastIndex = this.pos;
  var t = Q.exec(this.input), e = this.pos + t[0].length, s;
  return !tt.test(this.input.slice(this.pos, e)) && this.input.slice(e, e + 8) === "function" && (e + 8 === this.input.length || !(mt(s = this.input.charCodeAt(e + 8)) || s > 55295 && s < 56320));
};
E.isUsingKeyword = function(t, e) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(t ? "await" : "using"))
    return !1;
  Q.lastIndex = this.pos;
  var s = Q.exec(this.input), a = this.pos + s[0].length;
  if (tt.test(this.input.slice(this.pos, a)))
    return !1;
  if (t) {
    var o = a + 5, p;
    if (this.input.slice(a, o) !== "using" || o === this.input.length || mt(p = this.input.charCodeAt(o)) || p > 55295 && p < 56320)
      return !1;
    Q.lastIndex = o;
    var d = Q.exec(this.input);
    if (d && tt.test(this.input.slice(o, o + d[0].length)))
      return !1;
  }
  if (e) {
    var v = a + 2, g;
    if (this.input.slice(a, v) === "of" && (v === this.input.length || !mt(g = this.input.charCodeAt(v)) && !(g > 55295 && g < 56320)))
      return !1;
  }
  var h = this.input.charCodeAt(a);
  return lt(h, !0) || h === 92;
};
E.isAwaitUsing = function(t) {
  return this.isUsingKeyword(!0, t);
};
E.isUsing = function(t) {
  return this.isUsingKeyword(!1, t);
};
E.parseStatement = function(t, e, s) {
  var a = this.type, o = this.startNode(), p;
  switch (this.isLet(t) && (a = u._var, p = "let"), a) {
    case u._break:
    case u._continue:
      return this.parseBreakContinueStatement(o, a.keyword);
    case u._debugger:
      return this.parseDebuggerStatement(o);
    case u._do:
      return this.parseDoStatement(o);
    case u._for:
      return this.parseForStatement(o);
    case u._function:
      return t && (this.strict || t !== "if" && t !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(o, !1, !t);
    case u._class:
      return t && this.unexpected(), this.parseClass(o, !0);
    case u._if:
      return this.parseIfStatement(o);
    case u._return:
      return this.parseReturnStatement(o);
    case u._switch:
      return this.parseSwitchStatement(o);
    case u._throw:
      return this.parseThrowStatement(o);
    case u._try:
      return this.parseTryStatement(o);
    case u._const:
    case u._var:
      return p = p || this.value, t && p !== "var" && this.unexpected(), this.parseVarStatement(o, p);
    case u._while:
      return this.parseWhileStatement(o);
    case u._with:
      return this.parseWithStatement(o);
    case u.braceL:
      return this.parseBlock(!0, o);
    case u.semi:
      return this.parseEmptyStatement(o);
    case u._export:
    case u._import:
      if (this.options.ecmaVersion > 10 && a === u._import) {
        Q.lastIndex = this.pos;
        var d = Q.exec(this.input), v = this.pos + d[0].length, g = this.input.charCodeAt(v);
        if (g === 40 || g === 46)
          return this.parseExpressionStatement(o, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), a === u._import ? this.parseImport(o) : this.parseExport(o, s);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return t && this.unexpected(), this.next(), this.parseFunctionStatement(o, !0, !t);
      var h = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (h)
        return e && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), h === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(o, !1, h), this.semicolon(), this.finishNode(o, "VariableDeclaration");
      var C = this.value, N = this.parseExpression();
      return a === u.name && N.type === "Identifier" && this.eat(u.colon) ? this.parseLabeledStatement(o, C, N, t) : this.parseExpressionStatement(o, N);
  }
};
E.parseBreakContinueStatement = function(t, e) {
  var s = e === "break";
  this.next(), this.eat(u.semi) || this.insertSemicolon() ? t.label = null : this.type !== u.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
  for (var a = 0; a < this.labels.length; ++a) {
    var o = this.labels[a];
    if ((t.label == null || o.name === t.label.name) && (o.kind != null && (s || o.kind === "loop") || t.label && s))
      break;
  }
  return a === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, s ? "BreakStatement" : "ContinueStatement");
};
E.parseDebuggerStatement = function(t) {
  return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
};
E.parseDoStatement = function(t) {
  return this.next(), this.labels.push(ke), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(u._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(u.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement");
};
E.parseForStatement = function(t) {
  this.next();
  var e = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(ke), this.enterScope(0), this.expect(u.parenL), this.type === u.semi)
    return e > -1 && this.unexpected(e), this.parseFor(t, null);
  var s = this.isLet();
  if (this.type === u._var || this.type === u._const || s) {
    var a = this.startNode(), o = s ? "let" : this.value;
    return this.next(), this.parseVar(a, !0, o), this.finishNode(a, "VariableDeclaration"), this.parseForAfterInit(t, a, e);
  }
  var p = this.isContextual("let"), d = !1, v = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (v) {
    var g = this.startNode();
    return this.next(), v === "await using" && this.next(), this.parseVar(g, !0, v), this.finishNode(g, "VariableDeclaration"), this.parseForAfterInit(t, g, e);
  }
  var h = this.containsEsc, C = new ie(), N = this.start, L = e > -1 ? this.parseExprSubscripts(C, "await") : this.parseExpression(!0, C);
  return this.type === u._in || (d = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (e > -1 ? (this.type === u._in && this.unexpected(e), t.await = !0) : d && this.options.ecmaVersion >= 8 && (L.start === N && !h && L.type === "Identifier" && L.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (t.await = !1)), p && d && this.raise(L.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(L, !1, C), this.checkLValPattern(L), this.parseForIn(t, L)) : (this.checkExpressionErrors(C, !0), e > -1 && this.unexpected(e), this.parseFor(t, L));
};
E.parseForAfterInit = function(t, e, s) {
  return (this.type === u._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && e.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === u._in ? s > -1 && this.unexpected(s) : t.await = s > -1), this.parseForIn(t, e)) : (s > -1 && this.unexpected(s), this.parseFor(t, e));
};
E.parseFunctionStatement = function(t, e, s) {
  return this.next(), this.parseFunction(t, Dt | (s ? 0 : me), !1, e);
};
E.parseIfStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(u._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement");
};
E.parseReturnStatement = function(t) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(u.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
};
E.parseSwitchStatement = function(t) {
  this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(u.braceL), this.labels.push(Ji), this.enterScope(0);
  for (var e, s = !1; this.type !== u.braceR; )
    if (this.type === u._case || this.type === u._default) {
      var a = this.type === u._case;
      e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), a ? e.test = this.parseExpression() : (s && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), s = !0, e.test = null), this.expect(u.colon);
    } else
      e || this.unexpected(), e.consequent.push(this.parseStatement(null));
  return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement");
};
E.parseThrowStatement = function(t) {
  return this.next(), tt.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
};
var Gi = [];
E.parseCatchClauseParam = function() {
  var t = this.parseBindingAtom(), e = t.type === "Identifier";
  return this.enterScope(e ? $e : 0), this.checkLValPattern(t, e ? Ye : vt), this.expect(u.parenR), t;
};
E.parseTryStatement = function(t) {
  if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === u._catch) {
    var e = this.startNode();
    this.next(), this.eat(u.parenL) ? e.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0)), e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause");
  }
  return t.finalizer = this.eat(u._finally) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement");
};
E.parseVarStatement = function(t, e, s) {
  return this.next(), this.parseVar(t, !1, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration");
};
E.parseWhileStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), this.labels.push(ke), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement");
};
E.parseWithStatement = function(t) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement");
};
E.parseEmptyStatement = function(t) {
  return this.next(), this.finishNode(t, "EmptyStatement");
};
E.parseLabeledStatement = function(t, e, s, a) {
  for (var o = 0, p = this.labels; o < p.length; o += 1) {
    var d = p[o];
    d.name === e && this.raise(s.start, "Label '" + e + "' is already declared");
  }
  for (var v = this.type.isLoop ? "loop" : this.type === u._switch ? "switch" : null, g = this.labels.length - 1; g >= 0; g--) {
    var h = this.labels[g];
    if (h.statementStart === t.start)
      h.statementStart = this.start, h.kind = v;
    else
      break;
  }
  return this.labels.push({ name: e, kind: v, statementStart: this.start }), t.body = this.parseStatement(a ? a.indexOf("label") === -1 ? a + "label" : a : "label"), this.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement");
};
E.parseExpressionStatement = function(t, e) {
  return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
};
E.parseBlock = function(t, e, s) {
  for (t === void 0 && (t = !0), e === void 0 && (e = this.startNode()), e.body = [], this.expect(u.braceL), t && this.enterScope(0); this.type !== u.braceR; ) {
    var a = this.parseStatement(null);
    e.body.push(a);
  }
  return s && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement");
};
E.parseFor = function(t, e) {
  return t.init = e, this.expect(u.semi), t.test = this.type === u.semi ? null : this.parseExpression(), this.expect(u.semi), t.update = this.type === u.parenR ? null : this.parseExpression(), this.expect(u.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement");
};
E.parseForIn = function(t, e) {
  var s = this.type === u._in;
  return this.next(), e.type === "VariableDeclaration" && e.declarations[0].init != null && (!s || this.options.ecmaVersion < 8 || this.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(
    e.start,
    (s ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), t.left = e, t.right = s ? this.parseExpression() : this.parseMaybeAssign(), this.expect(u.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, s ? "ForInStatement" : "ForOfStatement");
};
E.parseVar = function(t, e, s, a) {
  for (t.declarations = [], t.kind = s; ; ) {
    var o = this.startNode();
    if (this.parseVarId(o, s), this.eat(u.eq) ? o.init = this.parseMaybeAssign(e) : !a && s === "const" && !(this.type === u._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !a && (s === "using" || s === "await using") && this.options.ecmaVersion >= 17 && this.type !== u._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + s + " declaration") : !a && o.id.type !== "Identifier" && !(e && (this.type === u._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : o.init = null, t.declarations.push(this.finishNode(o, "VariableDeclarator")), !this.eat(u.comma))
      break;
  }
  return t;
};
E.parseVarId = function(t, e) {
  t.id = e === "using" || e === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(t.id, e === "var" ? Ce : vt, !1);
};
var Dt = 1, me = 2, ti = 4;
E.parseFunction = function(t, e, s, a, o) {
  this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !a) && (this.type === u.star && e & me && this.unexpected(), t.generator = this.eat(u.star)), this.options.ecmaVersion >= 8 && (t.async = !!a), e & Dt && (t.id = e & ti && this.type !== u.name ? null : this.parseIdent(), t.id && !(e & me) && this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? Ce : vt : Qe));
  var p = this.yieldPos, d = this.awaitPos, v = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Pe(t.async, t.generator)), e & Dt || (t.id = this.type === u.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, s, !1, o), this.yieldPos = p, this.awaitPos = d, this.awaitIdentPos = v, this.finishNode(t, e & Dt ? "FunctionDeclaration" : "FunctionExpression");
};
E.parseFunctionParams = function(t) {
  this.expect(u.parenL), t.params = this.parseBindingList(u.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
E.parseClass = function(t, e) {
  this.next();
  var s = this.strict;
  this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
  var a = this.enterClassBody(), o = this.startNode(), p = !1;
  for (o.body = [], this.expect(u.braceL); this.type !== u.braceR; ) {
    var d = this.parseClassElement(t.superClass !== null);
    d && (o.body.push(d), d.type === "MethodDefinition" && d.kind === "constructor" ? (p && this.raiseRecoverable(d.start, "Duplicate constructor in the same class"), p = !0) : d.key && d.key.type === "PrivateIdentifier" && $i(a, d) && this.raiseRecoverable(d.key.start, "Identifier '#" + d.key.name + "' has already been declared"));
  }
  return this.strict = s, this.next(), t.body = this.finishNode(o, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
};
E.parseClassElement = function(t) {
  if (this.eat(u.semi))
    return null;
  var e = this.options.ecmaVersion, s = this.startNode(), a = "", o = !1, p = !1, d = "method", v = !1;
  if (this.eatContextual("static")) {
    if (e >= 13 && this.eat(u.braceL))
      return this.parseClassStaticBlock(s), s;
    this.isClassElementNameStart() || this.type === u.star ? v = !0 : a = "static";
  }
  if (s.static = v, !a && e >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === u.star) && !this.canInsertSemicolon() ? p = !0 : a = "async"), !a && (e >= 9 || !p) && this.eat(u.star) && (o = !0), !a && !p && !o) {
    var g = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? d = g : a = g);
  }
  if (a ? (s.computed = !1, s.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), s.key.name = a, this.finishNode(s.key, "Identifier")) : this.parseClassElementName(s), e < 13 || this.type === u.parenL || d !== "method" || o || p) {
    var h = !s.static && Xt(s, "constructor"), C = h && t;
    h && d !== "method" && this.raise(s.key.start, "Constructor can't have get/set modifier"), s.kind = h ? "constructor" : d, this.parseClassMethod(s, o, p, C);
  } else
    this.parseClassField(s);
  return s;
};
E.isClassElementNameStart = function() {
  return this.type === u.name || this.type === u.privateId || this.type === u.num || this.type === u.string || this.type === u.bracketL || this.type.keyword;
};
E.parseClassElementName = function(t) {
  this.type === u.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), t.computed = !1, t.key = this.parsePrivateIdent()) : this.parsePropertyName(t);
};
E.parseClassMethod = function(t, e, s, a) {
  var o = t.key;
  t.kind === "constructor" ? (e && this.raise(o.start, "Constructor can't be a generator"), s && this.raise(o.start, "Constructor can't be an async method")) : t.static && Xt(t, "prototype") && this.raise(o.start, "Classes may not have a static property named prototype");
  var p = t.value = this.parseMethod(e, s, a);
  return t.kind === "get" && p.params.length !== 0 && this.raiseRecoverable(p.start, "getter should have no params"), t.kind === "set" && p.params.length !== 1 && this.raiseRecoverable(p.start, "setter should have exactly one param"), t.kind === "set" && p.params[0].type === "RestElement" && this.raiseRecoverable(p.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition");
};
E.parseClassField = function(t) {
  return Xt(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && Xt(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(u.eq) ? (this.enterScope(Ut | te), t.value = this.parseMaybeAssign(), this.exitScope()) : t.value = null, this.semicolon(), this.finishNode(t, "PropertyDefinition");
};
E.parseClassStaticBlock = function(t) {
  t.body = [];
  var e = this.labels;
  for (this.labels = [], this.enterScope(kt | te); this.type !== u.braceR; ) {
    var s = this.parseStatement(null);
    t.body.push(s);
  }
  return this.next(), this.exitScope(), this.labels = e, this.finishNode(t, "StaticBlock");
};
E.parseClassId = function(t, e) {
  this.type === u.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, vt, !1)) : (e === !0 && this.unexpected(), t.id = null);
};
E.parseClassSuper = function(t) {
  t.superClass = this.eat(u._extends) ? this.parseExprSubscripts(null, !1) : null;
};
E.enterClassBody = function() {
  var t = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(t), t.declared;
};
E.exitClassBody = function() {
  var t = this.privateNameStack.pop(), e = t.declared, s = t.used;
  if (this.options.checkPrivateFields)
    for (var a = this.privateNameStack.length, o = a === 0 ? null : this.privateNameStack[a - 1], p = 0; p < s.length; ++p) {
      var d = s[p];
      It(e, d.name) || (o ? o.used.push(d) : this.raiseRecoverable(d.start, "Private field '#" + d.name + "' must be declared in an enclosing class"));
    }
};
function $i(t, e) {
  var s = e.key.name, a = t[s], o = "true";
  return e.type === "MethodDefinition" && (e.kind === "get" || e.kind === "set") && (o = (e.static ? "s" : "i") + e.kind), a === "iget" && o === "iset" || a === "iset" && o === "iget" || a === "sget" && o === "sset" || a === "sset" && o === "sget" ? (t[s] = "true", !1) : a ? !0 : (t[s] = o, !1);
}
function Xt(t, e) {
  var s = t.computed, a = t.key;
  return !s && (a.type === "Identifier" && a.name === e || a.type === "Literal" && a.value === e);
}
E.parseExportAllDeclaration = function(t, e) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseModuleExportName(), this.checkExport(e, t.exported, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== u.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
};
E.parseExport = function(t, e) {
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
        var o = a[s];
        this.checkUnreserved(o.local), this.checkLocalExport(o.local), o.local.type === "Literal" && this.raise(o.local.start, "A string literal cannot be used as an exported binding without `from`.");
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
  if (this.type === u._function || (t = this.isAsyncFunction())) {
    var e = this.startNode();
    return this.next(), t && this.next(), this.parseFunction(e, Dt | ti, !1, t);
  } else if (this.type === u._class) {
    var s = this.startNode();
    return this.parseClass(s, "nullableID");
  } else {
    var a = this.parseMaybeAssign();
    return this.semicolon(), a;
  }
};
E.checkExport = function(t, e, s) {
  t && (typeof e != "string" && (e = e.type === "Identifier" ? e.name : e.value), It(t, e) && this.raiseRecoverable(s, "Duplicate export '" + e + "'"), t[e] = !0);
};
E.checkPatternExport = function(t, e) {
  var s = e.type;
  if (s === "Identifier")
    this.checkExport(t, e, e.start);
  else if (s === "ObjectPattern")
    for (var a = 0, o = e.properties; a < o.length; a += 1) {
      var p = o[a];
      this.checkPatternExport(t, p);
    }
  else if (s === "ArrayPattern")
    for (var d = 0, v = e.elements; d < v.length; d += 1) {
      var g = v[d];
      g && this.checkPatternExport(t, g);
    }
  else s === "Property" ? this.checkPatternExport(t, e.value) : s === "AssignmentPattern" ? this.checkPatternExport(t, e.left) : s === "RestElement" && this.checkPatternExport(t, e.argument);
};
E.checkVariableExport = function(t, e) {
  if (t)
    for (var s = 0, a = e; s < a.length; s += 1) {
      var o = a[s];
      this.checkPatternExport(t, o.id);
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
E.parseImport = function(t) {
  return this.next(), this.type === u.string ? (t.specifiers = Gi, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === u.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ImportDeclaration");
};
E.parseImportSpecifier = function() {
  var t = this.startNode();
  return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, vt), this.finishNode(t, "ImportSpecifier");
};
E.parseImportDefaultSpecifier = function() {
  var t = this.startNode();
  return t.local = this.parseIdent(), this.checkLValSimple(t.local, vt), this.finishNode(t, "ImportDefaultSpecifier");
};
E.parseImportNamespaceSpecifier = function() {
  var t = this.startNode();
  return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, vt), this.finishNode(t, "ImportNamespaceSpecifier");
};
E.parseImportSpecifiers = function() {
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
E.parseWithClause = function() {
  var t = [];
  if (!this.eat(u._with))
    return t;
  this.expect(u.braceL);
  for (var e = {}, s = !0; !this.eat(u.braceR); ) {
    if (s)
      s = !1;
    else if (this.expect(u.comma), this.afterTrailingComma(u.braceR))
      break;
    var a = this.parseImportAttribute(), o = a.key.type === "Identifier" ? a.key.name : a.key.value;
    It(e, o) && this.raiseRecoverable(a.key.start, "Duplicate attribute key '" + o + "'"), e[o] = !0, t.push(a);
  }
  return t;
};
E.parseImportAttribute = function() {
  var t = this.startNode();
  return t.key = this.type === u.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(u.colon), this.type !== u.string && this.unexpected(), t.value = this.parseExprAtom(), this.finishNode(t, "ImportAttribute");
};
E.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === u.string) {
    var t = this.parseLiteral(this.value);
    return Hi.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t;
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
var pt = J.prototype;
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
        for (var a = 0, o = t.properties; a < o.length; a += 1) {
          var p = o[a];
          this.toAssignable(p, e), p.type === "RestElement" && (p.argument.type === "ArrayPattern" || p.argument.type === "ObjectPattern") && this.raise(p.argument.start, "Unexpected token");
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
    var o = t[a];
    o && this.toAssignable(o, e);
  }
  if (s) {
    var p = t[s - 1];
    this.options.ecmaVersion === 6 && e && p && p.type === "RestElement" && p.argument.type !== "Identifier" && this.unexpected(p.argument.start);
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
  for (var o = [], p = !0; !this.eat(t); )
    if (p ? p = !1 : this.expect(u.comma), e && this.type === u.comma)
      o.push(null);
    else {
      if (s && this.afterTrailingComma(t))
        break;
      if (this.type === u.ellipsis) {
        var d = this.parseRestBinding();
        this.parseBindingListItem(d), o.push(d), this.type === u.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
        break;
      } else
        o.push(this.parseAssignableListItem(a));
    }
  return o;
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
  e === void 0 && (e = $t);
  var a = e !== $t;
  switch (t.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (a ? "Binding " : "Assigning to ") + t.name + " in strict mode"), a && (e === vt && t.name === "let" && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), s && (It(s, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), s[t.name] = !0), e !== Ze && this.declareName(t.name, e, t.start));
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
  switch (e === void 0 && (e = $t), t.type) {
    case "ObjectPattern":
      for (var a = 0, o = t.properties; a < o.length; a += 1) {
        var p = o[a];
        this.checkLValInnerPattern(p, e, s);
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
  switch (e === void 0 && (e = $t), t.type) {
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
var Z = function(e, s, a, o, p) {
  this.token = e, this.isExpr = !!s, this.preserveSpace = !!a, this.override = o, this.generator = !!p;
}, H = {
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
}, _t = J.prototype;
_t.initialContext = function() {
  return [H.b_stat];
};
_t.curContext = function() {
  return this.context[this.context.length - 1];
};
_t.braceIsBlock = function(t) {
  var e = this.curContext();
  return e === H.f_expr || e === H.f_stat ? !0 : t === u.colon && (e === H.b_stat || e === H.b_expr) ? !e.isExpr : t === u._return || t === u.name && this.exprAllowed ? tt.test(this.input.slice(this.lastTokEnd, this.start)) : t === u._else || t === u.semi || t === u.eof || t === u.parenR || t === u.arrow ? !0 : t === u.braceL ? e === H.b_stat : t === u._var || t === u._const || t === u.name ? !1 : !this.exprAllowed;
};
_t.inGeneratorContext = function() {
  for (var t = this.context.length - 1; t >= 1; t--) {
    var e = this.context[t];
    if (e.token === "function")
      return e.generator;
  }
  return !1;
};
_t.updateContext = function(t) {
  var e, s = this.type;
  s.keyword && t === u.dot ? this.exprAllowed = !1 : (e = s.updateContext) ? e.call(this, t) : this.exprAllowed = s.beforeExpr;
};
_t.overrideContext = function(t) {
  this.curContext() !== t && (this.context[this.context.length - 1] = t);
};
u.parenR.updateContext = u.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var t = this.context.pop();
  t === H.b_stat && this.curContext().token === "function" && (t = this.context.pop()), this.exprAllowed = !t.isExpr;
};
u.braceL.updateContext = function(t) {
  this.context.push(this.braceIsBlock(t) ? H.b_stat : H.b_expr), this.exprAllowed = !0;
};
u.dollarBraceL.updateContext = function() {
  this.context.push(H.b_tmpl), this.exprAllowed = !0;
};
u.parenL.updateContext = function(t) {
  var e = t === u._if || t === u._for || t === u._with || t === u._while;
  this.context.push(e ? H.p_stat : H.p_expr), this.exprAllowed = !0;
};
u.incDec.updateContext = function() {
};
u._function.updateContext = u._class.updateContext = function(t) {
  t.beforeExpr && t !== u._else && !(t === u.semi && this.curContext() !== H.p_stat) && !(t === u._return && tt.test(this.input.slice(this.lastTokEnd, this.start))) && !((t === u.colon || t === u.braceL) && this.curContext() === H.b_stat) ? this.context.push(H.f_expr) : this.context.push(H.f_stat), this.exprAllowed = !1;
};
u.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
u.backQuote.updateContext = function() {
  this.curContext() === H.q_tmpl ? this.context.pop() : this.context.push(H.q_tmpl), this.exprAllowed = !1;
};
u.star.updateContext = function(t) {
  if (t === u._function) {
    var e = this.context.length - 1;
    this.context[e] === H.f_expr ? this.context[e] = H.f_expr_gen : this.context[e] = H.f_gen;
  }
  this.exprAllowed = !0;
};
u.name.updateContext = function(t) {
  var e = !1;
  this.options.ecmaVersion >= 6 && t !== u.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e;
};
var O = J.prototype;
O.checkPropClash = function(t, e, s) {
  if (!(this.options.ecmaVersion >= 9 && t.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
    var a = t.key, o;
    switch (a.type) {
      case "Identifier":
        o = a.name;
        break;
      case "Literal":
        o = String(a.value);
        break;
      default:
        return;
    }
    var p = t.kind;
    if (this.options.ecmaVersion >= 6) {
      o === "__proto__" && p === "init" && (e.proto && (s ? s.doubleProto < 0 && (s.doubleProto = a.start) : this.raiseRecoverable(a.start, "Redefinition of __proto__ property")), e.proto = !0);
      return;
    }
    o = "$" + o;
    var d = e[o];
    if (d) {
      var v;
      p === "init" ? v = this.strict && d.init || d.get || d.set : v = d.init || d[p], v && this.raiseRecoverable(a.start, "Redefinition of property");
    } else
      d = e[o] = {
        init: !1,
        get: !1,
        set: !1
      };
    d[p] = !0;
  }
};
O.parseExpression = function(t, e) {
  var s = this.start, a = this.startLoc, o = this.parseMaybeAssign(t, e);
  if (this.type === u.comma) {
    var p = this.startNodeAt(s, a);
    for (p.expressions = [o]; this.eat(u.comma); )
      p.expressions.push(this.parseMaybeAssign(t, e));
    return this.finishNode(p, "SequenceExpression");
  }
  return o;
};
O.parseMaybeAssign = function(t, e, s) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(t);
    this.exprAllowed = !1;
  }
  var a = !1, o = -1, p = -1, d = -1;
  e ? (o = e.parenthesizedAssign, p = e.trailingComma, d = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new ie(), a = !0);
  var v = this.start, g = this.startLoc;
  (this.type === u.parenL || this.type === u.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = t === "await");
  var h = this.parseMaybeConditional(t, e);
  if (s && (h = s.call(this, h, v, g)), this.type.isAssign) {
    var C = this.startNodeAt(v, g);
    return C.operator = this.value, this.type === u.eq && (h = this.toAssignable(h, !1, e)), a || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= h.start && (e.shorthandAssign = -1), this.type === u.eq ? this.checkLValPattern(h) : this.checkLValSimple(h), C.left = h, this.next(), C.right = this.parseMaybeAssign(t), d > -1 && (e.doubleProto = d), this.finishNode(C, "AssignmentExpression");
  } else
    a && this.checkExpressionErrors(e, !0);
  return o > -1 && (e.parenthesizedAssign = o), p > -1 && (e.trailingComma = p), h;
};
O.parseMaybeConditional = function(t, e) {
  var s = this.start, a = this.startLoc, o = this.parseExprOps(t, e);
  if (this.checkExpressionErrors(e))
    return o;
  if (this.eat(u.question)) {
    var p = this.startNodeAt(s, a);
    return p.test = o, p.consequent = this.parseMaybeAssign(), this.expect(u.colon), p.alternate = this.parseMaybeAssign(t), this.finishNode(p, "ConditionalExpression");
  }
  return o;
};
O.parseExprOps = function(t, e) {
  var s = this.start, a = this.startLoc, o = this.parseMaybeUnary(e, !1, !1, t);
  return this.checkExpressionErrors(e) || o.start === s && o.type === "ArrowFunctionExpression" ? o : this.parseExprOp(o, s, a, -1, t);
};
O.parseExprOp = function(t, e, s, a, o) {
  var p = this.type.binop;
  if (p != null && (!o || this.type !== u._in) && p > a) {
    var d = this.type === u.logicalOR || this.type === u.logicalAND, v = this.type === u.coalesce;
    v && (p = u.logicalAND.binop);
    var g = this.value;
    this.next();
    var h = this.start, C = this.startLoc, N = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, o), h, C, p, o), L = this.buildBinary(e, s, t, N, g, d || v);
    return (d && this.type === u.coalesce || v && (this.type === u.logicalOR || this.type === u.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(L, e, s, a, o);
  }
  return t;
};
O.buildBinary = function(t, e, s, a, o, p) {
  a.type === "PrivateIdentifier" && this.raise(a.start, "Private identifier can only be left side of binary expression");
  var d = this.startNodeAt(t, e);
  return d.left = s, d.operator = o, d.right = a, this.finishNode(d, p ? "LogicalExpression" : "BinaryExpression");
};
O.parseMaybeUnary = function(t, e, s, a) {
  var o = this.start, p = this.startLoc, d;
  if (this.isContextual("await") && this.canAwait)
    d = this.parseAwait(a), e = !0;
  else if (this.type.prefix) {
    var v = this.startNode(), g = this.type === u.incDec;
    v.operator = this.value, v.prefix = !0, this.next(), v.argument = this.parseMaybeUnary(null, !0, g, a), this.checkExpressionErrors(t, !0), g ? this.checkLValSimple(v.argument) : this.strict && v.operator === "delete" && ei(v.argument) ? this.raiseRecoverable(v.start, "Deleting local variable in strict mode") : v.operator === "delete" && ye(v.argument) ? this.raiseRecoverable(v.start, "Private fields can not be deleted") : e = !0, d = this.finishNode(v, g ? "UpdateExpression" : "UnaryExpression");
  } else if (!e && this.type === u.privateId)
    (a || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), d = this.parsePrivateIdent(), this.type !== u._in && this.unexpected();
  else {
    if (d = this.parseExprSubscripts(t, a), this.checkExpressionErrors(t))
      return d;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var h = this.startNodeAt(o, p);
      h.operator = this.value, h.prefix = !1, h.argument = d, this.checkLValSimple(d), this.next(), d = this.finishNode(h, "UpdateExpression");
    }
  }
  if (!s && this.eat(u.starstar))
    if (e)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(o, p, d, this.parseMaybeUnary(null, !1, !1, a), "**", !1);
  else
    return d;
};
function ei(t) {
  return t.type === "Identifier" || t.type === "ParenthesizedExpression" && ei(t.expression);
}
function ye(t) {
  return t.type === "MemberExpression" && t.property.type === "PrivateIdentifier" || t.type === "ChainExpression" && ye(t.expression) || t.type === "ParenthesizedExpression" && ye(t.expression);
}
O.parseExprSubscripts = function(t, e) {
  var s = this.start, a = this.startLoc, o = this.parseExprAtom(t, e);
  if (o.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return o;
  var p = this.parseSubscripts(o, s, a, !1, e);
  return t && p.type === "MemberExpression" && (t.parenthesizedAssign >= p.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= p.start && (t.parenthesizedBind = -1), t.trailingComma >= p.start && (t.trailingComma = -1)), p;
};
O.parseSubscripts = function(t, e, s, a, o) {
  for (var p = this.options.ecmaVersion >= 8 && t.type === "Identifier" && t.name === "async" && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.potentialArrowAt === t.start, d = !1; ; ) {
    var v = this.parseSubscript(t, e, s, a, p, d, o);
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
O.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(u.arrow);
};
O.parseSubscriptAsyncArrow = function(t, e, s, a) {
  return this.parseArrowExpression(this.startNodeAt(t, e), s, !0, a);
};
O.parseSubscript = function(t, e, s, a, o, p, d) {
  var v = this.options.ecmaVersion >= 11, g = v && this.eat(u.questionDot);
  a && g && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var h = this.eat(u.bracketL);
  if (h || g && this.type !== u.parenL && this.type !== u.backQuote || this.eat(u.dot)) {
    var C = this.startNodeAt(e, s);
    C.object = t, h ? (C.property = this.parseExpression(), this.expect(u.bracketR)) : this.type === u.privateId && t.type !== "Super" ? C.property = this.parsePrivateIdent() : C.property = this.parseIdent(this.options.allowReserved !== "never"), C.computed = !!h, v && (C.optional = g), t = this.finishNode(C, "MemberExpression");
  } else if (!a && this.eat(u.parenL)) {
    var N = new ie(), L = this.yieldPos, j = this.awaitPos, U = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var X = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1, N);
    if (o && !g && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(N, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = L, this.awaitPos = j, this.awaitIdentPos = U, this.parseSubscriptAsyncArrow(e, s, X, d);
    this.checkExpressionErrors(N, !0), this.yieldPos = L || this.yieldPos, this.awaitPos = j || this.awaitPos, this.awaitIdentPos = U || this.awaitIdentPos;
    var _ = this.startNodeAt(e, s);
    _.callee = t, _.arguments = X, v && (_.optional = g), t = this.finishNode(_, "CallExpression");
  } else if (this.type === u.backQuote) {
    (g || p) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var it = this.startNodeAt(e, s);
    it.tag = t, it.quasi = this.parseTemplate({ isTagged: !0 }), t = this.finishNode(it, "TaggedTemplateExpression");
  }
  return t;
};
O.parseExprAtom = function(t, e, s) {
  this.type === u.slash && this.readRegexp();
  var a, o = this.potentialArrowAt === this.start;
  switch (this.type) {
    case u._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), a = this.startNode(), this.next(), this.type === u.parenL && !this.allowDirectSuper && this.raise(a.start, "super() call outside constructor of a subclass"), this.type !== u.dot && this.type !== u.bracketL && this.type !== u.parenL && this.unexpected(), this.finishNode(a, "Super");
    case u._this:
      return a = this.startNode(), this.next(), this.finishNode(a, "ThisExpression");
    case u.name:
      var p = this.start, d = this.startLoc, v = this.containsEsc, g = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !v && g.name === "async" && !this.canInsertSemicolon() && this.eat(u._function))
        return this.overrideContext(H.f_expr), this.parseFunction(this.startNodeAt(p, d), 0, !1, !0, e);
      if (o && !this.canInsertSemicolon()) {
        if (this.eat(u.arrow))
          return this.parseArrowExpression(this.startNodeAt(p, d), [g], !1, e);
        if (this.options.ecmaVersion >= 8 && g.name === "async" && this.type === u.name && !v && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return g = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(u.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(p, d), [g], !0, e);
      }
      return g;
    case u.regexp:
      var h = this.value;
      return a = this.parseLiteral(h.value), a.regex = { pattern: h.pattern, flags: h.flags }, a;
    case u.num:
    case u.string:
      return this.parseLiteral(this.value);
    case u._null:
    case u._true:
    case u._false:
      return a = this.startNode(), a.value = this.type === u._null ? null : this.type === u._true, a.raw = this.type.keyword, this.next(), this.finishNode(a, "Literal");
    case u.parenL:
      var C = this.start, N = this.parseParenAndDistinguishExpression(o, e);
      return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(N) && (t.parenthesizedAssign = C), t.parenthesizedBind < 0 && (t.parenthesizedBind = C)), N;
    case u.bracketL:
      return a = this.startNode(), this.next(), a.elements = this.parseExprList(u.bracketR, !0, !0, t), this.finishNode(a, "ArrayExpression");
    case u.braceL:
      return this.overrideContext(H.b_expr), this.parseObj(!1, t);
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
O.parseExprAtomDefault = function() {
  this.unexpected();
};
O.parseExprImport = function(t) {
  var e = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === u.parenL && !t)
    return this.parseDynamicImport(e);
  if (this.type === u.dot) {
    var s = this.startNodeAt(e.start, e.loc && e.loc.start);
    return s.name = "import", e.meta = this.finishNode(s, "Identifier"), this.parseImportMeta(e);
  } else
    this.unexpected();
};
O.parseDynamicImport = function(t) {
  if (this.next(), t.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(u.parenR) ? t.options = null : (this.expect(u.comma), this.afterTrailingComma(u.parenR) ? t.options = null : (t.options = this.parseMaybeAssign(), this.eat(u.parenR) || (this.expect(u.comma), this.afterTrailingComma(u.parenR) || this.unexpected())));
  else if (!this.eat(u.parenR)) {
    var e = this.start;
    this.eat(u.comma) && this.eat(u.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e);
  }
  return this.finishNode(t, "ImportExpression");
};
O.parseImportMeta = function(t) {
  this.next();
  var e = this.containsEsc;
  return t.property = this.parseIdent(!0), t.property.name !== "meta" && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty");
};
O.parseLiteral = function(t) {
  var e = this.startNode();
  return e.value = t, e.raw = this.input.slice(this.start, this.end), e.raw.charCodeAt(e.raw.length - 1) === 110 && (e.bigint = e.value != null ? e.value.toString() : e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal");
};
O.parseParenExpression = function() {
  this.expect(u.parenL);
  var t = this.parseExpression();
  return this.expect(u.parenR), t;
};
O.shouldParseArrow = function(t) {
  return !this.canInsertSemicolon();
};
O.parseParenAndDistinguishExpression = function(t, e) {
  var s = this.start, a = this.startLoc, o, p = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var d = this.start, v = this.startLoc, g = [], h = !0, C = !1, N = new ie(), L = this.yieldPos, j = this.awaitPos, U;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== u.parenR; )
      if (h ? h = !1 : this.expect(u.comma), p && this.afterTrailingComma(u.parenR, !0)) {
        C = !0;
        break;
      } else if (this.type === u.ellipsis) {
        U = this.start, g.push(this.parseParenItem(this.parseRestBinding())), this.type === u.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        g.push(this.parseMaybeAssign(!1, N, this.parseParenItem));
    var X = this.lastTokEnd, _ = this.lastTokEndLoc;
    if (this.expect(u.parenR), t && this.shouldParseArrow(g) && this.eat(u.arrow))
      return this.checkPatternErrors(N, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = L, this.awaitPos = j, this.parseParenArrowList(s, a, g, e);
    (!g.length || C) && this.unexpected(this.lastTokStart), U && this.unexpected(U), this.checkExpressionErrors(N, !0), this.yieldPos = L || this.yieldPos, this.awaitPos = j || this.awaitPos, g.length > 1 ? (o = this.startNodeAt(d, v), o.expressions = g, this.finishNodeAt(o, "SequenceExpression", X, _)) : o = g[0];
  } else
    o = this.parseParenExpression();
  if (this.options.preserveParens) {
    var it = this.startNodeAt(s, a);
    return it.expression = o, this.finishNode(it, "ParenthesizedExpression");
  } else
    return o;
};
O.parseParenItem = function(t) {
  return t;
};
O.parseParenArrowList = function(t, e, s, a) {
  return this.parseArrowExpression(this.startNodeAt(t, e), s, !1, a);
};
var Xi = [];
O.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var t = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === u.dot) {
    var e = this.startNodeAt(t.start, t.loc && t.loc.start);
    e.name = "new", t.meta = this.finishNode(e, "Identifier"), this.next();
    var s = this.containsEsc;
    return t.property = this.parseIdent(!0), t.property.name !== "target" && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), s && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty");
  }
  var a = this.start, o = this.startLoc;
  return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), a, o, !0, !1), this.eat(u.parenL) ? t.arguments = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = Xi, this.finishNode(t, "NewExpression");
};
O.parseTemplateElement = function(t) {
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
O.parseTemplate = function(t) {
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
O.isAsyncProp = function(t) {
  return !t.computed && t.key.type === "Identifier" && t.key.name === "async" && (this.type === u.name || this.type === u.num || this.type === u.string || this.type === u.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === u.star) && !tt.test(this.input.slice(this.lastTokEnd, this.start));
};
O.parseObj = function(t, e) {
  var s = this.startNode(), a = !0, o = {};
  for (s.properties = [], this.next(); !this.eat(u.braceR); ) {
    if (a)
      a = !1;
    else if (this.expect(u.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(u.braceR))
      break;
    var p = this.parseProperty(t, e);
    t || this.checkPropClash(p, o, e), s.properties.push(p);
  }
  return this.finishNode(s, t ? "ObjectPattern" : "ObjectExpression");
};
O.parseProperty = function(t, e) {
  var s = this.startNode(), a, o, p, d;
  if (this.options.ecmaVersion >= 9 && this.eat(u.ellipsis))
    return t ? (s.argument = this.parseIdent(!1), this.type === u.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(s, "RestElement")) : (s.argument = this.parseMaybeAssign(!1, e), this.type === u.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(s, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (s.method = !1, s.shorthand = !1, (t || e) && (p = this.start, d = this.startLoc), t || (a = this.eat(u.star)));
  var v = this.containsEsc;
  return this.parsePropertyName(s), !t && !v && this.options.ecmaVersion >= 8 && !a && this.isAsyncProp(s) ? (o = !0, a = this.options.ecmaVersion >= 9 && this.eat(u.star), this.parsePropertyName(s)) : o = !1, this.parsePropertyValue(s, t, a, o, p, d, e, v), this.finishNode(s, "Property");
};
O.parseGetterSetter = function(t) {
  var e = t.key.name;
  this.parsePropertyName(t), t.value = this.parseMethod(!1), t.kind = e;
  var s = t.kind === "get" ? 0 : 1;
  if (t.value.params.length !== s) {
    var a = t.value.start;
    t.kind === "get" ? this.raiseRecoverable(a, "getter should have no params") : this.raiseRecoverable(a, "setter should have exactly one param");
  } else
    t.kind === "set" && t.value.params[0].type === "RestElement" && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params");
};
O.parsePropertyValue = function(t, e, s, a, o, p, d, v) {
  (s || a) && this.type === u.colon && this.unexpected(), this.eat(u.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, d), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === u.parenL ? (e && this.unexpected(), t.method = !0, t.value = this.parseMethod(s, a), t.kind = "init") : !e && !v && this.options.ecmaVersion >= 5 && !t.computed && t.key.type === "Identifier" && (t.key.name === "get" || t.key.name === "set") && this.type !== u.comma && this.type !== u.braceR && this.type !== u.eq ? ((s || a) && this.unexpected(), this.parseGetterSetter(t)) : this.options.ecmaVersion >= 6 && !t.computed && t.key.type === "Identifier" ? ((s || a) && this.unexpected(), this.checkUnreserved(t.key), t.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = o), e ? t.value = this.parseMaybeDefault(o, p, this.copyNode(t.key)) : this.type === u.eq && d ? (d.shorthandAssign < 0 && (d.shorthandAssign = this.start), t.value = this.parseMaybeDefault(o, p, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.kind = "init", t.shorthand = !0) : this.unexpected();
};
O.parsePropertyName = function(t) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(u.bracketL))
      return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(u.bracketR), t.key;
    t.computed = !1;
  }
  return t.key = this.type === u.num || this.type === u.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
O.initFunction = function(t) {
  t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1);
};
O.parseMethod = function(t, e, s) {
  var a = this.startNode(), o = this.yieldPos, p = this.awaitPos, d = this.awaitIdentPos;
  return this.initFunction(a), this.options.ecmaVersion >= 6 && (a.generator = t), this.options.ecmaVersion >= 8 && (a.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Pe(e, a.generator) | te | (s ? Xe : 0)), this.expect(u.parenL), a.params = this.parseBindingList(u.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(a, !1, !0, !1), this.yieldPos = o, this.awaitPos = p, this.awaitIdentPos = d, this.finishNode(a, "FunctionExpression");
};
O.parseArrowExpression = function(t, e, s, a) {
  var o = this.yieldPos, p = this.awaitPos, d = this.awaitIdentPos;
  return this.enterScope(Pe(s, !1) | Te), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!s), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, a), this.yieldPos = o, this.awaitPos = p, this.awaitIdentPos = d, this.finishNode(t, "ArrowFunctionExpression");
};
O.parseFunctionBody = function(t, e, s, a) {
  var o = e && this.type !== u.braceL, p = this.strict, d = !1;
  if (o)
    t.body = this.parseMaybeAssign(a), t.expression = !0, this.checkParams(t, !1);
  else {
    var v = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
    (!p || v) && (d = this.strictDirective(this.end), d && v && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var g = this.labels;
    this.labels = [], d && (this.strict = !0), this.checkParams(t, !p && !d && !e && !s && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, Ze), t.body = this.parseBlock(!1, void 0, d && !p), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = g;
  }
  this.exitScope();
};
O.isSimpleParamList = function(t) {
  for (var e = 0, s = t; e < s.length; e += 1) {
    var a = s[e];
    if (a.type !== "Identifier")
      return !1;
  }
  return !0;
};
O.checkParams = function(t, e) {
  for (var s = /* @__PURE__ */ Object.create(null), a = 0, o = t.params; a < o.length; a += 1) {
    var p = o[a];
    this.checkLValInnerPattern(p, Ce, e ? null : s);
  }
};
O.parseExprList = function(t, e, s, a) {
  for (var o = [], p = !0; !this.eat(t); ) {
    if (p)
      p = !1;
    else if (this.expect(u.comma), e && this.afterTrailingComma(t))
      break;
    var d = void 0;
    s && this.type === u.comma ? d = null : this.type === u.ellipsis ? (d = this.parseSpread(a), a && this.type === u.comma && a.trailingComma < 0 && (a.trailingComma = this.start)) : d = this.parseMaybeAssign(!1, a), o.push(d);
  }
  return o;
};
O.checkUnreserved = function(t) {
  var e = t.start, s = t.end, a = t.name;
  if (this.inGenerator && a === "yield" && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && a === "await" && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & ee) && a === "arguments" && this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (a === "arguments" || a === "await") && this.raise(e, "Cannot use " + a + " in class static initialization block"), this.keywords.test(a) && this.raise(e, "Unexpected keyword '" + a + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(e, s).indexOf("\\") !== -1)) {
    var o = this.strict ? this.reservedWordsStrict : this.reservedWords;
    o.test(a) && (!this.inAsync && a === "await" && this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + a + "' is reserved"));
  }
};
O.parseIdent = function(t) {
  var e = this.parseIdentNode();
  return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), e.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = e.start)), e;
};
O.parseIdentNode = function() {
  var t = this.startNode();
  return this.type === u.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, (t.name === "class" || t.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = u.name) : this.unexpected(), t;
};
O.parsePrivateIdent = function() {
  var t = this.startNode();
  return this.type === u.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t;
};
O.parseYield = function(t) {
  this.yieldPos || (this.yieldPos = this.start);
  var e = this.startNode();
  return this.next(), this.type === u.semi || this.canInsertSemicolon() || this.type !== u.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(u.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression");
};
O.parseAwait = function(t) {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression");
};
var Qt = J.prototype;
Qt.raise = function(t, e) {
  var s = be(this.input, t);
  e += " (" + s.line + ":" + s.column + ")", this.sourceFile && (e += " in " + this.sourceFile);
  var a = new SyntaxError(e);
  throw a.pos = t, a.loc = s, a.raisedAt = this.pos, a;
};
Qt.raiseRecoverable = Qt.raise;
Qt.curPosition = function() {
  if (this.options.locations)
    return new wt(this.curLine, this.pos - this.lineStart);
};
var Tt = J.prototype, Qi = function(e) {
  this.flags = e, this.var = [], this.lexical = [], this.functions = [];
};
Tt.enterScope = function(t) {
  this.scopeStack.push(new Qi(t));
};
Tt.exitScope = function() {
  this.scopeStack.pop();
};
Tt.treatFunctionsAsVarInScope = function(t) {
  return t.flags & Nt || !this.inModule && t.flags & Bt;
};
Tt.declareName = function(t, e, s) {
  var a = !1;
  if (e === vt) {
    var o = this.currentScope();
    a = o.lexical.indexOf(t) > -1 || o.functions.indexOf(t) > -1 || o.var.indexOf(t) > -1, o.lexical.push(t), this.inModule && o.flags & Bt && delete this.undefinedExports[t];
  } else if (e === Ye) {
    var p = this.currentScope();
    p.lexical.push(t);
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
      if (g.var.push(t), this.inModule && g.flags & Bt && delete this.undefinedExports[t], g.flags & ee)
        break;
    }
  a && this.raiseRecoverable(s, "Identifier '" + t + "' has already been declared");
};
Tt.checkLocalExport = function(t) {
  this.scopeStack[0].lexical.indexOf(t.name) === -1 && this.scopeStack[0].var.indexOf(t.name) === -1 && (this.undefinedExports[t.name] = t);
};
Tt.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Tt.currentVarScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (ee | Ut | kt))
      return e;
  }
};
Tt.currentThisScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (ee | Ut | kt) && !(e.flags & Te))
      return e;
  }
};
var qt = function(e, s, a) {
  this.type = "", this.start = s, this.end = 0, e.options.locations && (this.loc = new jt(e, a)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [s, 0]);
}, Ht = J.prototype;
Ht.startNode = function() {
  return new qt(this, this.start, this.startLoc);
};
Ht.startNodeAt = function(t, e) {
  return new qt(this, t, e);
};
function ii(t, e, s, a) {
  return t.type = e, t.end = s, this.options.locations && (t.loc.end = a), this.options.ranges && (t.range[1] = s), t;
}
Ht.finishNode = function(t, e) {
  return ii.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
};
Ht.finishNodeAt = function(t, e, s, a) {
  return ii.call(this, t, e, s, a);
};
Ht.copyNode = function(t) {
  var e = new qt(this, t.start, this.startLoc);
  for (var s in t)
    e[s] = t[s];
  return e;
};
var Yi = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", si = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", ri = si + " Extended_Pictographic", ai = ri, ni = ai + " EBase EComp EMod EPres ExtPict", oi = ni, Zi = oi, ts = {
  9: si,
  10: ri,
  11: ai,
  12: ni,
  13: oi,
  14: Zi
}, es = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", is = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: es
}, Re = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", hi = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", ui = hi + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", ci = ui + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", pi = ci + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", li = pi + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", ss = li + " " + Yi, rs = {
  9: hi,
  10: ui,
  11: ci,
  12: pi,
  13: li,
  14: ss
}, fi = {};
function as(t) {
  var e = fi[t] = {
    binary: St(ts[t] + " " + Re),
    binaryOfStrings: St(is[t]),
    nonBinary: {
      General_Category: St(Re),
      Script: St(rs[t])
    }
  };
  e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions;
}
for (var pe = 0, Me = [9, 10, 11, 12, 13, 14]; pe < Me.length; pe += 1) {
  var ns = Me[pe];
  as(ns);
}
var k = J.prototype, Yt = function(e, s) {
  this.parent = e, this.base = s || this;
};
Yt.prototype.separatedFrom = function(e) {
  for (var s = this; s; s = s.parent)
    for (var a = e; a; a = a.parent)
      if (s.base === a.base && s !== a)
        return !0;
  return !1;
};
Yt.prototype.sibling = function() {
  return new Yt(this.parent, this.base);
};
var dt = function(e) {
  this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : "") + (e.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = fi[e.options.ecmaVersion >= 14 ? 14 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
dt.prototype.reset = function(e, s, a) {
  var o = a.indexOf("v") !== -1, p = a.indexOf("u") !== -1;
  this.start = e | 0, this.source = s + "", this.flags = a, o && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = p && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = p && this.parser.options.ecmaVersion >= 9);
};
dt.prototype.raise = function(e) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
};
dt.prototype.at = function(e, s) {
  s === void 0 && (s = !1);
  var a = this.source, o = a.length;
  if (e >= o)
    return -1;
  var p = a.charCodeAt(e);
  if (!(s || this.switchU) || p <= 55295 || p >= 57344 || e + 1 >= o)
    return p;
  var d = a.charCodeAt(e + 1);
  return d >= 56320 && d <= 57343 ? (p << 10) + d - 56613888 : p;
};
dt.prototype.nextIndex = function(e, s) {
  s === void 0 && (s = !1);
  var a = this.source, o = a.length;
  if (e >= o)
    return o;
  var p = a.charCodeAt(e), d;
  return !(s || this.switchU) || p <= 55295 || p >= 57344 || e + 1 >= o || (d = a.charCodeAt(e + 1)) < 56320 || d > 57343 ? e + 1 : e + 2;
};
dt.prototype.current = function(e) {
  return e === void 0 && (e = !1), this.at(this.pos, e);
};
dt.prototype.lookahead = function(e) {
  return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
};
dt.prototype.advance = function(e) {
  e === void 0 && (e = !1), this.pos = this.nextIndex(this.pos, e);
};
dt.prototype.eat = function(e, s) {
  return s === void 0 && (s = !1), this.current(s) === e ? (this.advance(s), !0) : !1;
};
dt.prototype.eatChars = function(e, s) {
  s === void 0 && (s = !1);
  for (var a = this.pos, o = 0, p = e; o < p.length; o += 1) {
    var d = p[o], v = this.at(a, s);
    if (v === -1 || v !== d)
      return !1;
    a = this.nextIndex(a, s);
  }
  return this.pos = a, !0;
};
k.validateRegExpFlags = function(t) {
  for (var e = t.validFlags, s = t.flags, a = !1, o = !1, p = 0; p < s.length; p++) {
    var d = s.charAt(p);
    e.indexOf(d) === -1 && this.raise(t.start, "Invalid regular expression flag"), s.indexOf(d, p + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), d === "u" && (a = !0), d === "v" && (o = !0);
  }
  this.options.ecmaVersion >= 15 && a && o && this.raise(t.start, "Invalid regular expression flag");
};
function os(t) {
  for (var e in t)
    return !0;
  return !1;
}
k.validateRegExpPattern = function(t) {
  this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && os(t.groupNames) && (t.switchN = !0, this.regexp_pattern(t));
};
k.regexp_pattern = function(t) {
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
k.regexp_disjunction = function(t) {
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
k.regexp_alternative = function(t) {
  for (; t.pos < t.source.length && this.regexp_eatTerm(t); )
    ;
};
k.regexp_eatTerm = function(t) {
  return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : (t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) ? (this.regexp_eatQuantifier(t), !0) : !1;
};
k.regexp_eatAssertion = function(t) {
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
k.regexp_eatQuantifier = function(t, e) {
  return e === void 0 && (e = !1), this.regexp_eatQuantifierPrefix(t, e) ? (t.eat(
    63
    /* ? */
  ), !0) : !1;
};
k.regexp_eatQuantifierPrefix = function(t, e) {
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
k.regexp_eatBracedQuantifier = function(t, e) {
  var s = t.pos;
  if (t.eat(
    123
    /* { */
  )) {
    var a = 0, o = -1;
    if (this.regexp_eatDecimalDigits(t) && (a = t.lastIntValue, t.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(t) && (o = t.lastIntValue), t.eat(
      125
      /* } */
    )))
      return o !== -1 && o < a && !e && t.raise("numbers out of order in {} quantifier"), !0;
    t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = s;
  }
  return !1;
};
k.regexp_eatAtom = function(t) {
  return this.regexp_eatPatternCharacters(t) || t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t);
};
k.regexp_eatReverseSolidusAtomEscape = function(t) {
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
k.regexp_eatUncapturingGroup = function(t) {
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
          for (var o = 0; o < s.length; o++) {
            var p = s.charAt(o);
            s.indexOf(p, o + 1) > -1 && t.raise("Duplicate regular expression modifiers");
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
k.regexp_eatCapturingGroup = function(t) {
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
k.regexp_eatModifiers = function(t) {
  for (var e = "", s = 0; (s = t.current()) !== -1 && hs(s); )
    e += yt(s), t.advance();
  return e;
};
function hs(t) {
  return t === 105 || t === 109 || t === 115;
}
k.regexp_eatExtendedAtom = function(t) {
  return t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t);
};
k.regexp_eatInvalidBracedQuantifier = function(t) {
  return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1;
};
k.regexp_eatSyntaxCharacter = function(t) {
  var e = t.current();
  return di(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function di(t) {
  return t === 36 || t >= 40 && t <= 43 || t === 46 || t === 63 || t >= 91 && t <= 94 || t >= 123 && t <= 125;
}
k.regexp_eatPatternCharacters = function(t) {
  for (var e = t.pos, s = 0; (s = t.current()) !== -1 && !di(s); )
    t.advance();
  return t.pos !== e;
};
k.regexp_eatExtendedPatternCharacter = function(t) {
  var e = t.current();
  return e !== -1 && e !== 36 && !(e >= 40 && e <= 43) && e !== 46 && e !== 63 && e !== 91 && e !== 94 && e !== 124 ? (t.advance(), !0) : !1;
};
k.regexp_groupSpecifier = function(t) {
  if (t.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(t) || t.raise("Invalid group");
    var e = this.options.ecmaVersion >= 16, s = t.groupNames[t.lastStringValue];
    if (s)
      if (e)
        for (var a = 0, o = s; a < o.length; a += 1) {
          var p = o[a];
          p.separatedFrom(t.branchID) || t.raise("Duplicate capture group name");
        }
      else
        t.raise("Duplicate capture group name");
    e ? (s || (t.groupNames[t.lastStringValue] = [])).push(t.branchID) : t.groupNames[t.lastStringValue] = !0;
  }
};
k.regexp_eatGroupName = function(t) {
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
k.regexp_eatRegExpIdentifierName = function(t) {
  if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
    for (t.lastStringValue += yt(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t); )
      t.lastStringValue += yt(t.lastIntValue);
    return !0;
  }
  return !1;
};
k.regexp_eatRegExpIdentifierStart = function(t) {
  var e = t.pos, s = this.options.ecmaVersion >= 11, a = t.current(s);
  return t.advance(s), a === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (a = t.lastIntValue), us(a) ? (t.lastIntValue = a, !0) : (t.pos = e, !1);
};
function us(t) {
  return lt(t, !0) || t === 36 || t === 95;
}
k.regexp_eatRegExpIdentifierPart = function(t) {
  var e = t.pos, s = this.options.ecmaVersion >= 11, a = t.current(s);
  return t.advance(s), a === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, s) && (a = t.lastIntValue), cs(a) ? (t.lastIntValue = a, !0) : (t.pos = e, !1);
};
function cs(t) {
  return mt(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
}
k.regexp_eatAtomEscape = function(t) {
  return this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t) ? !0 : (t.switchU && (t.current() === 99 && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1);
};
k.regexp_eatBackReference = function(t) {
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
k.regexp_eatKGroupName = function(t) {
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
k.regexp_eatCharacterEscape = function(t) {
  return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t);
};
k.regexp_eatCControlLetter = function(t) {
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
k.regexp_eatZero = function(t) {
  return t.current() === 48 && !se(t.lookahead()) ? (t.lastIntValue = 0, t.advance(), !0) : !1;
};
k.regexp_eatControlEscape = function(t) {
  var e = t.current();
  return e === 116 ? (t.lastIntValue = 9, t.advance(), !0) : e === 110 ? (t.lastIntValue = 10, t.advance(), !0) : e === 118 ? (t.lastIntValue = 11, t.advance(), !0) : e === 102 ? (t.lastIntValue = 12, t.advance(), !0) : e === 114 ? (t.lastIntValue = 13, t.advance(), !0) : !1;
};
k.regexp_eatControlLetter = function(t) {
  var e = t.current();
  return mi(e) ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
function mi(t) {
  return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
k.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
  e === void 0 && (e = !1);
  var s = t.pos, a = e || t.switchU;
  if (t.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(t, 4)) {
      var o = t.lastIntValue;
      if (a && o >= 55296 && o <= 56319) {
        var p = t.pos;
        if (t.eat(
          92
          /* \ */
        ) && t.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(t, 4)) {
          var d = t.lastIntValue;
          if (d >= 56320 && d <= 57343)
            return t.lastIntValue = (o - 55296) * 1024 + (d - 56320) + 65536, !0;
        }
        t.pos = p, t.lastIntValue = o;
      }
      return !0;
    }
    if (a && t.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(t) && t.eat(
      125
      /* } */
    ) && ps(t.lastIntValue))
      return !0;
    a && t.raise("Invalid unicode escape"), t.pos = s;
  }
  return !1;
};
function ps(t) {
  return t >= 0 && t <= 1114111;
}
k.regexp_eatIdentityEscape = function(t) {
  if (t.switchU)
    return this.regexp_eatSyntaxCharacter(t) ? !0 : t.eat(
      47
      /* / */
    ) ? (t.lastIntValue = 47, !0) : !1;
  var e = t.current();
  return e !== 99 && (!t.switchN || e !== 107) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
k.regexp_eatDecimalEscape = function(t) {
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
var yi = 0, xt = 1, ct = 2;
k.regexp_eatCharacterClassEscape = function(t) {
  var e = t.current();
  if (ls(e))
    return t.lastIntValue = -1, t.advance(), xt;
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
      return s && a === ct && t.raise("Invalid property name"), a;
    t.raise("Invalid property name");
  }
  return yi;
};
function ls(t) {
  return t === 100 || t === 68 || t === 115 || t === 83 || t === 119 || t === 87;
}
k.regexp_eatUnicodePropertyValueExpression = function(t) {
  var e = t.pos;
  if (this.regexp_eatUnicodePropertyName(t) && t.eat(
    61
    /* = */
  )) {
    var s = t.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(t)) {
      var a = t.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(t, s, a), xt;
    }
  }
  if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
    var o = t.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(t, o);
  }
  return yi;
};
k.regexp_validateUnicodePropertyNameAndValue = function(t, e, s) {
  It(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(s) || t.raise("Invalid property value");
};
k.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
  if (t.unicodeProperties.binary.test(e))
    return xt;
  if (t.switchV && t.unicodeProperties.binaryOfStrings.test(e))
    return ct;
  t.raise("Invalid property name");
};
k.regexp_eatUnicodePropertyName = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; xi(e = t.current()); )
    t.lastStringValue += yt(e), t.advance();
  return t.lastStringValue !== "";
};
function xi(t) {
  return mi(t) || t === 95;
}
k.regexp_eatUnicodePropertyValue = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; fs(e = t.current()); )
    t.lastStringValue += yt(e), t.advance();
  return t.lastStringValue !== "";
};
function fs(t) {
  return xi(t) || se(t);
}
k.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
  return this.regexp_eatUnicodePropertyValue(t);
};
k.regexp_eatCharacterClass = function(t) {
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
    ) || t.raise("Unterminated character class"), e && s === ct && t.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
k.regexp_classContents = function(t) {
  return t.current() === 93 ? xt : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), xt);
};
k.regexp_nonEmptyClassRanges = function(t) {
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
k.regexp_eatClassAtom = function(t) {
  var e = t.pos;
  if (t.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(t))
      return !0;
    if (t.switchU) {
      var s = t.current();
      (s === 99 || bi(s)) && t.raise("Invalid class escape"), t.raise("Invalid escape");
    }
    t.pos = e;
  }
  var a = t.current();
  return a !== 93 ? (t.lastIntValue = a, t.advance(), !0) : !1;
};
k.regexp_eatClassEscape = function(t) {
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
k.regexp_classSetExpression = function(t) {
  var e = xt, s;
  if (!this.regexp_eatClassSetRange(t)) if (s = this.regexp_eatClassSetOperand(t)) {
    s === ct && (e = ct);
    for (var a = t.pos; t.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (t.current() !== 38 && (s = this.regexp_eatClassSetOperand(t))) {
        s !== ct && (e = xt);
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
      s === ct && (e = ct);
    }
};
k.regexp_eatClassSetRange = function(t) {
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
k.regexp_eatClassSetOperand = function(t) {
  return this.regexp_eatClassSetCharacter(t) ? xt : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t);
};
k.regexp_eatNestedClass = function(t) {
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
      return s && a === ct && t.raise("Negated character class may contain strings"), a;
    t.pos = e;
  }
  if (t.eat(
    92
    /* \ */
  )) {
    var o = this.regexp_eatCharacterClassEscape(t);
    if (o)
      return o;
    t.pos = e;
  }
  return null;
};
k.regexp_eatClassStringDisjunction = function(t) {
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
k.regexp_classStringDisjunctionContents = function(t) {
  for (var e = this.regexp_classString(t); t.eat(
    124
    /* | */
  ); )
    this.regexp_classString(t) === ct && (e = ct);
  return e;
};
k.regexp_classString = function(t) {
  for (var e = 0; this.regexp_eatClassSetCharacter(t); )
    e++;
  return e === 1 ? xt : ct;
};
k.regexp_eatClassSetCharacter = function(t) {
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
  return s < 0 || s === t.lookahead() && ds(s) || ms(s) ? !1 : (t.advance(), t.lastIntValue = s, !0);
};
function ds(t) {
  return t === 33 || t >= 35 && t <= 38 || t >= 42 && t <= 44 || t === 46 || t >= 58 && t <= 64 || t === 94 || t === 96 || t === 126;
}
function ms(t) {
  return t === 40 || t === 41 || t === 45 || t === 47 || t >= 91 && t <= 93 || t >= 123 && t <= 125;
}
k.regexp_eatClassSetReservedPunctuator = function(t) {
  var e = t.current();
  return ys(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function ys(t) {
  return t === 33 || t === 35 || t === 37 || t === 38 || t === 44 || t === 45 || t >= 58 && t <= 62 || t === 64 || t === 96 || t === 126;
}
k.regexp_eatClassControlLetter = function(t) {
  var e = t.current();
  return se(e) || e === 95 ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
k.regexp_eatHexEscapeSequence = function(t) {
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
k.regexp_eatDecimalDigits = function(t) {
  var e = t.pos, s = 0;
  for (t.lastIntValue = 0; se(s = t.current()); )
    t.lastIntValue = 10 * t.lastIntValue + (s - 48), t.advance();
  return t.pos !== e;
};
function se(t) {
  return t >= 48 && t <= 57;
}
k.regexp_eatHexDigits = function(t) {
  var e = t.pos, s = 0;
  for (t.lastIntValue = 0; vi(s = t.current()); )
    t.lastIntValue = 16 * t.lastIntValue + gi(s), t.advance();
  return t.pos !== e;
};
function vi(t) {
  return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
}
function gi(t) {
  return t >= 65 && t <= 70 ? 10 + (t - 65) : t >= 97 && t <= 102 ? 10 + (t - 97) : t - 48;
}
k.regexp_eatLegacyOctalEscapeSequence = function(t) {
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
k.regexp_eatOctalDigit = function(t) {
  var e = t.current();
  return bi(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1);
};
function bi(t) {
  return t >= 48 && t <= 55;
}
k.regexp_eatFixedHexDigits = function(t, e) {
  var s = t.pos;
  t.lastIntValue = 0;
  for (var a = 0; a < e; ++a) {
    var o = t.current();
    if (!vi(o))
      return t.pos = s, !1;
    t.lastIntValue = 16 * t.lastIntValue + gi(o), t.advance();
  }
  return !0;
};
var re = function(e) {
  this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new jt(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
}, V = J.prototype;
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
        done: e.type === u.eof,
        value: e
      };
    }
  };
});
V.nextToken = function() {
  var t = this.curContext();
  if ((!t || !t.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(u.eof);
  if (t.override)
    return t.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
V.readToken = function(t) {
  return lt(t, this.options.ecmaVersion >= 6) || t === 92 ? this.readWord() : this.getTokenFromCode(t);
};
V.fullCharCodeAtPos = function() {
  var t = this.input.charCodeAt(this.pos);
  if (t <= 55295 || t >= 56320)
    return t;
  var e = this.input.charCodeAt(this.pos + 1);
  return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888;
};
V.skipBlockComment = function() {
  var t = this.options.onComment && this.curPosition(), e = this.pos, s = this.input.indexOf("*/", this.pos += 2);
  if (s === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations)
    for (var a = void 0, o = e; (a = Ke(this.input, o, this.pos)) > -1; )
      ++this.curLine, o = this.lineStart = a;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(e + 2, s),
    e,
    this.pos,
    t,
    this.curPosition()
  );
};
V.skipLineComment = function(t) {
  for (var e = this.pos, s = this.options.onComment && this.curPosition(), a = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !Ct(a); )
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
  var s = this.type;
  this.type = t, this.value = e, this.updateContext(s);
};
V.readToken_dot = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t >= 48 && t <= 57)
    return this.readNumber(!0);
  var e = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && t === 46 && e === 46 ? (this.pos += 3, this.finishToken(u.ellipsis)) : (++this.pos, this.finishToken(u.dot));
};
V.readToken_slash = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : t === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.slash, 1);
};
V.readToken_mult_modulo_exp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), s = 1, a = t === 42 ? u.star : u.modulo;
  return this.options.ecmaVersion >= 7 && t === 42 && e === 42 && (++s, a = u.starstar, e = this.input.charCodeAt(this.pos + 2)), e === 61 ? this.finishOp(u.assign, s + 1) : this.finishOp(a, s);
};
V.readToken_pipe_amp = function(t) {
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
V.readToken_caret = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.bitwiseXOR, 1);
};
V.readToken_plus_min = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === t ? e === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || tt.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(u.incDec, 2) : e === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.plusMin, 1);
};
V.readToken_lt_gt = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), s = 1;
  return e === t ? (s = t === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + s) === 61 ? this.finishOp(u.assign, s + 1) : this.finishOp(u.bitShift, s)) : e === 33 && t === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (e === 61 && (s = 2), this.finishOp(u.relational, s));
};
V.readToken_eq_excl = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(u.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : t === 61 && e === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(u.arrow)) : this.finishOp(t === 61 ? u.eq : u.prefix, 1);
};
V.readToken_question = function() {
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
V.readToken_numberSign = function() {
  var t = this.options.ecmaVersion, e = 35;
  if (t >= 13 && (++this.pos, e = this.fullCharCodeAtPos(), lt(e, !0) || e === 92))
    return this.finishToken(u.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + yt(e) + "'");
};
V.getTokenFromCode = function(t) {
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
  this.raise(this.pos, "Unexpected character '" + yt(t) + "'");
};
V.finishOp = function(t, e) {
  var s = this.input.slice(this.pos, this.pos + e);
  return this.pos += e, this.finishToken(t, s);
};
V.readRegexp = function() {
  for (var t, e, s = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(s, "Unterminated regular expression");
    var a = this.input.charAt(this.pos);
    if (tt.test(a) && this.raise(s, "Unterminated regular expression"), t)
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
  var o = this.input.slice(s, this.pos);
  ++this.pos;
  var p = this.pos, d = this.readWord1();
  this.containsEsc && this.unexpected(p);
  var v = this.regexpState || (this.regexpState = new dt(this));
  v.reset(s, o, d), this.validateRegExpFlags(v), this.validateRegExpPattern(v);
  var g = null;
  try {
    g = new RegExp(o, d);
  } catch {
  }
  return this.finishToken(u.regexp, { pattern: o, flags: d, value: g });
};
V.readInt = function(t, e, s) {
  for (var a = this.options.ecmaVersion >= 12 && e === void 0, o = s && this.input.charCodeAt(this.pos) === 48, p = this.pos, d = 0, v = 0, g = 0, h = e ?? 1 / 0; g < h; ++g, ++this.pos) {
    var C = this.input.charCodeAt(this.pos), N = void 0;
    if (a && C === 95) {
      o && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), v === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), g === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), v = C;
      continue;
    }
    if (C >= 97 ? N = C - 97 + 10 : C >= 65 ? N = C - 65 + 10 : C >= 48 && C <= 57 ? N = C - 48 : N = 1 / 0, N >= t)
      break;
    v = C, d = d * t + N;
  }
  return a && v === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === p || e != null && this.pos - p !== e ? null : d;
};
function xs(t, e) {
  return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
}
function Si(t) {
  return typeof BigInt != "function" ? null : BigInt(t.replace(/_/g, ""));
}
V.readRadixNumber = function(t) {
  var e = this.pos;
  this.pos += 2;
  var s = this.readInt(t);
  return s == null && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (s = Si(this.input.slice(e, this.pos)), ++this.pos) : lt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(u.num, s);
};
V.readNumber = function(t) {
  var e = this.pos;
  !t && this.readInt(10, void 0, !0) === null && this.raise(e, "Invalid number");
  var s = this.pos - e >= 2 && this.input.charCodeAt(e) === 48;
  s && this.strict && this.raise(e, "Invalid number");
  var a = this.input.charCodeAt(this.pos);
  if (!s && !t && this.options.ecmaVersion >= 11 && a === 110) {
    var o = Si(this.input.slice(e, this.pos));
    return ++this.pos, lt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(u.num, o);
  }
  s && /[89]/.test(this.input.slice(e, this.pos)) && (s = !1), a === 46 && !s && (++this.pos, this.readInt(10), a = this.input.charCodeAt(this.pos)), (a === 69 || a === 101) && !s && (a = this.input.charCodeAt(++this.pos), (a === 43 || a === 45) && ++this.pos, this.readInt(10) === null && this.raise(e, "Invalid number")), lt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var p = xs(this.input.slice(e, this.pos), s);
  return this.finishToken(u.num, p);
};
V.readCodePoint = function() {
  var t = this.input.charCodeAt(this.pos), e;
  if (t === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var s = ++this.pos;
    e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(s, "Code point out of bounds");
  } else
    e = this.readHexChar(4);
  return e;
};
V.readString = function(t) {
  for (var e = "", s = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var a = this.input.charCodeAt(this.pos);
    if (a === t)
      break;
    a === 92 ? (e += this.input.slice(s, this.pos), e += this.readEscapedChar(!1), s = this.pos) : a === 8232 || a === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Ct(a) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return e += this.input.slice(s, this.pos++), this.finishToken(u.string, e);
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
    var s = this.input.charCodeAt(this.pos);
    if (s === 96 || s === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === u.template || this.type === u.invalidTemplate) ? s === 36 ? (this.pos += 2, this.finishToken(u.dollarBraceL)) : (++this.pos, this.finishToken(u.backQuote)) : (t += this.input.slice(e, this.pos), this.finishToken(u.template, t));
    if (s === 92)
      t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
    else if (Ct(s)) {
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
      return yt(this.readCodePoint());
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
        var a = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], o = parseInt(a, 8);
        return o > 255 && (a = a.slice(0, -1), o = parseInt(a, 8)), this.pos += a.length - 1, e = this.input.charCodeAt(this.pos), (a !== "0" || e === 56 || e === 57) && (this.strict || t) && this.invalidStringToken(
          this.pos - 1 - a.length,
          t ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(o);
      }
      return Ct(e) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(e);
  }
};
V.readHexChar = function(t) {
  var e = this.pos, s = this.readInt(16, t);
  return s === null && this.invalidStringToken(e, "Bad character escape sequence"), s;
};
V.readWord1 = function() {
  this.containsEsc = !1;
  for (var t = "", e = !0, s = this.pos, a = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var o = this.fullCharCodeAtPos();
    if (mt(o, a))
      this.pos += o <= 65535 ? 1 : 2;
    else if (o === 92) {
      this.containsEsc = !0, t += this.input.slice(s, this.pos);
      var p = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var d = this.readCodePoint();
      (e ? lt : mt)(d, a) || this.invalidStringToken(p, "Invalid Unicode escape"), t += yt(d), s = this.pos;
    } else
      break;
    e = !1;
  }
  return t + this.input.slice(s, this.pos);
};
V.readWord = function() {
  var t = this.readWord1(), e = u.name;
  return this.keywords.test(t) && (e = Et[t]), this.finishToken(e, t);
};
var Pi = "8.15.0";
J.acorn = {
  Parser: J,
  version: Pi,
  defaultOptions: Gt,
  Position: wt,
  SourceLocation: jt,
  getLineInfo: be,
  Node: qt,
  TokenType: M,
  tokTypes: u,
  keywordTypes: Et,
  TokContext: Z,
  tokContexts: H,
  isIdentifierChar: mt,
  isIdentifierStart: lt,
  Token: re,
  isNewLine: Ct,
  lineBreak: tt,
  lineBreakG: We,
  nonASCIIwhitespace: ge
};
function vs(t, e) {
  return J.parse(t, e);
}
function gs(t, e, s) {
  return J.parseExpressionAt(t, e, s);
}
function bs(t, e) {
  return J.tokenizer(t, e);
}
const Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: qt,
  Parser: J,
  Position: wt,
  SourceLocation: jt,
  TokContext: Z,
  Token: re,
  TokenType: M,
  defaultOptions: Gt,
  getLineInfo: be,
  isIdentifierChar: mt,
  isIdentifierStart: lt,
  isNewLine: Ct,
  keywordTypes: Et,
  lineBreak: tt,
  lineBreakG: We,
  nonASCIIwhitespace: ge,
  parse: vs,
  parseExpressionAt: gs,
  tokContexts: H,
  tokTypes: u,
  tokenizer: bs,
  version: Pi
}, Symbol.toStringTag, { value: "Module" }));
function De(t, e) {
  for (var s = 0; s < e.length; s++) {
    var a = e[s];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, typeof (o = (function(p, d) {
      if (typeof p != "object" || p === null) return p;
      var v = p[Symbol.toPrimitive];
      if (v !== void 0) {
        var g = v.call(p, "string");
        if (typeof g != "object") return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(p);
    })(a.key)) == "symbol" ? o : String(o), a);
  }
  var o;
}
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var s = arguments[e];
      for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
    }
    return t;
  }, Zt.apply(this, arguments);
}
function Jt(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, xe(t, e);
}
function xe(t, e) {
  return xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, a) {
    return s.__proto__ = a, s;
  }, xe(t, e);
}
function Ve(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var s = 0, a = new Array(e); s < e; s++) a[s] = t[s];
  return a;
}
function Fe(t, e) {
  var s = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (s) return (s = s.call(t)).next.bind(s);
  if (Array.isArray(t) || (s = (function(o, p) {
    if (o) {
      if (typeof o == "string") return Ve(o, p);
      var d = Object.prototype.toString.call(o).slice(8, -1);
      return d === "Object" && o.constructor && (d = o.constructor.name), d === "Map" || d === "Set" ? Array.from(o) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Ve(o, p) : void 0;
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
var nt = !0;
function ot(t, e) {
  return e === void 0 && (e = {}), new M("name", e);
}
var Ts = /* @__PURE__ */ new WeakMap();
function Ps(t) {
  var e = Ts.get(t.Parser.acorn || t);
  if (!e) {
    var s = { assert: ot(0, { startsExpr: nt }), asserts: ot(0, { startsExpr: nt }), global: ot(0, { startsExpr: nt }), keyof: ot(0, { startsExpr: nt }), readonly: ot(0, { startsExpr: nt }), unique: ot(0, { startsExpr: nt }), abstract: ot(0, { startsExpr: nt }), declare: ot(0, { startsExpr: nt }), enum: ot(0, { startsExpr: nt }), module: ot(0, { startsExpr: nt }), namespace: ot(0, { startsExpr: nt }), interface: ot(0, { startsExpr: nt }), type: ot(0, { startsExpr: nt }) }, a = { at: new M("@"), jsxName: new M("jsxName"), jsxText: new M("jsxText", { beforeExpr: !0 }), jsxTagStart: new M("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new M("jsxTagEnd") }, o = { tc_oTag: new Z("<tag", !1, !1), tc_cTag: new Z("</tag", !1, !1), tc_expr: new Z("<tag>...</tag>", !0, !0) }, p = new RegExp("^(?:" + Object.keys(s).join("|") + ")$");
    a.jsxTagStart.updateContext = function() {
      this.context.push(o.tc_expr), this.context.push(o.tc_oTag), this.exprAllowed = !1;
    }, a.jsxTagEnd.updateContext = function(d) {
      var v = this.context.pop();
      v === o.tc_oTag && d === u.slash || v === o.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === o.tc_expr) : this.exprAllowed = !0;
    }, e = { tokTypes: Zt({}, s, a), tokContexts: Zt({}, o), keywordsRegExp: p, tokenIsLiteralPropertyName: function(d) {
      return [u.name, u.string, u.num].concat(Object.values(Et), Object.values(s)).includes(d);
    }, tokenIsKeywordOrIdentifier: function(d) {
      return [u.name].concat(Object.values(Et), Object.values(s)).includes(d);
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
var Rt = 1024, Cs = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), Be = new RegExp("(?=(" + Cs.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), Mt = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function ks(t, e) {
  var s = e.key.name, a = t[s], o = "true";
  return e.type !== "MethodDefinition" || e.kind !== "get" && e.kind !== "set" || (o = (e.static ? "s" : "i") + e.kind), a === "iget" && o === "iset" || a === "iset" && o === "iget" || a === "sget" && o === "sset" || a === "sset" && o === "sget" ? (t[s] = "true", !1) : !!a || (t[s] = o, !1);
}
function je(t, e) {
  var s = t.key;
  return !t.computed && (s.type === "Identifier" && s.name === e || s.type === "Literal" && s.value === e);
}
var w = { AbstractMethodHasImplementation: function(t) {
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
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, As = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, Es = /^[\da-fA-F]+$/, ws = /^\d+$/;
function Vt(t) {
  return t && (t.type === "JSXIdentifier" ? t.name : t.type === "JSXNamespacedName" ? t.namespace.name + ":" + t.name.name : t.type === "JSXMemberExpression" ? Vt(t.object) + "." + Vt(t.property) : void 0);
}
var le = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function Ue(t) {
  if (!t) throw new Error("Assert fail");
}
function Is(t) {
  return t === "accessor";
}
function Ns(t) {
  return t === "in" || t === "out";
}
function fe(t, e) {
  return 2 | (t ? 4 : 0) | (e ? 8 : 0);
}
function _s(t) {
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
function Ls(t) {
  var e = {}, s = e.dts, a = s !== void 0 && s, o = e.allowSatisfies, p = o !== void 0 && o;
  return function(d) {
    var v = d.acorn || Ss, g = Ps(v), h = v.tokTypes, C = v.keywordTypes, N = v.isIdentifierStart, L = v.lineBreak, j = v.isNewLine, U = v.tokContexts, X = v.isIdentifierChar, _ = g.tokTypes, it = g.tokContexts, ae = g.keywordsRegExp, ki = g.tokenIsLiteralPropertyName, Ai = g.tokenIsTemplate, Ei = g.tokenIsTSDeclarationStart, q = g.tokenIsIdentifier, zt = g.tokenIsKeywordOrIdentifier, wi = g.tokenIsTSTypeOperator;
    function Ii(P, st, Y) {
      Y === void 0 && (Y = P.length);
      for (var G = st; G < Y; G++) {
        var B = P.charCodeAt(G);
        if (j(B)) return G < Y - 1 && B === 13 && P.charCodeAt(G + 1) === 10 ? G + 2 : G + 1;
      }
      return -1;
    }
    d = (function(P, st, Y) {
      var G = Y.tokTypes, B = st.tokTypes;
      return (function(l) {
        function i() {
          return l.apply(this, arguments) || this;
        }
        Jt(i, l);
        var r = i.prototype;
        return r.takeDecorators = function(n) {
          var c = this.decoratorStack[this.decoratorStack.length - 1];
          c.length && (n.decorators = c, this.resetStartLocationFromNode(n, c[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, r.parseDecorators = function(n) {
          for (var c = this.decoratorStack[this.decoratorStack.length - 1]; this.match(B.at); ) {
            var f = this.parseDecorator();
            c.push(f);
          }
          this.match(G._export) ? n || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, r.parseDecorator = function() {
          var n = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var c, f = this.start, m = this.startLoc;
          if (this.match(G.parenL)) {
            var y = this.start, x = this.startLoc;
            if (this.next(), c = this.parseExpression(), this.expect(G.parenR), this.options.preserveParens) {
              var b = this.startNodeAt(y, x);
              b.expression = c, c = this.finishNode(b, "ParenthesizedExpression");
            }
          } else for (c = this.parseIdent(!1); this.eat(G.dot); ) {
            var S = this.startNodeAt(f, m);
            S.object = c, S.property = this.parseIdent(!0), S.computed = !1, c = this.finishNode(S, "MemberExpression");
          }
          return n.expression = this.parseMaybeDecoratorArguments(c), this.decoratorStack.pop(), this.finishNode(n, "Decorator");
        }, r.parseMaybeDecoratorArguments = function(n) {
          if (this.eat(G.parenL)) {
            var c = this.startNodeAtNode(n);
            return c.callee = n, c.arguments = this.parseExprList(G.parenR, !1), this.finishNode(c, "CallExpression");
          }
          return n;
        }, i;
      })(P);
    })(d, g, v), d = (function(P, st, Y, G) {
      var B = P.tokTypes, l = st.tokTypes, i = P.isNewLine, r = P.isIdentifierChar, n = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(c) {
        function f() {
          return c.apply(this, arguments) || this;
        }
        Jt(f, c);
        var m = f.prototype;
        return m.jsx_readToken = function() {
          for (var y = "", x = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
            var b = this.input.charCodeAt(this.pos);
            switch (b) {
              case 60:
              case 123:
                return this.pos === this.start ? b === 60 && this.exprAllowed ? (++this.pos, this.finishToken(l.jsxTagStart)) : this.getTokenFromCode(b) : (y += this.input.slice(x, this.pos), this.finishToken(l.jsxText, y));
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
          for (var I = ++this.pos; this.pos < this.input.length && b++ < 10; ) {
            if ((S = this.input[this.pos++]) === ";") {
              x[0] === "#" ? x[1] === "x" ? (x = x.substr(2), Es.test(x) && (y = String.fromCharCode(parseInt(x, 16)))) : (x = x.substr(1), ws.test(x) && (y = String.fromCharCode(parseInt(x, 10)))) : y = As[x];
              break;
            }
            x += S;
          }
          return y || (this.pos = I, "&");
        }, m.jsx_readWord = function() {
          var y, x = this.pos;
          do
            y = this.input.charCodeAt(++this.pos);
          while (r(y) || y === 45);
          return this.finishToken(l.jsxName, this.input.slice(x, this.pos));
        }, m.jsx_parseIdentifier = function() {
          var y = this.startNode();
          return this.type === l.jsxName ? y.name = this.value : this.type.keyword ? y.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(y, "JSXIdentifier");
        }, m.jsx_parseNamespacedName = function() {
          var y = this.start, x = this.startLoc, b = this.jsx_parseIdentifier();
          if (!n.allowNamespaces || !this.eat(B.colon)) return b;
          var S = this.startNodeAt(y, x);
          return S.namespace = b, S.name = this.jsx_parseIdentifier(), this.finishNode(S, "JSXNamespacedName");
        }, m.jsx_parseElementName = function() {
          if (this.type === l.jsxTagEnd) return "";
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
            case l.jsxTagStart:
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
          for (S && (b.name = S); this.type !== B.slash && this.type !== l.jsxTagEnd; ) b.attributes.push(this.jsx_parseAttribute());
          return b.selfClosing = this.eat(B.slash), this.expect(l.jsxTagEnd), this.finishNode(b, S ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, m.jsx_parseClosingElementAt = function(y, x) {
          var b = this.startNodeAt(y, x), S = this.jsx_parseElementName();
          return S && (b.name = S), this.expect(l.jsxTagEnd), this.finishNode(b, S ? "JSXClosingElement" : "JSXClosingFragment");
        }, m.jsx_parseElementAt = function(y, x) {
          var b = this.startNodeAt(y, x), S = [], I = this.jsx_parseOpeningElementAt(y, x), R = null;
          if (!I.selfClosing) {
            t: for (; ; ) switch (this.type) {
              case l.jsxTagStart:
                if (y = this.start, x = this.startLoc, this.next(), this.eat(B.slash)) {
                  R = this.jsx_parseClosingElementAt(y, x);
                  break t;
                }
                S.push(this.jsx_parseElementAt(y, x));
                break;
              case l.jsxText:
                S.push(this.parseExprAtom());
                break;
              case B.braceL:
                S.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            Vt(R.name) !== Vt(I.name) && this.raise(R.start, "Expected corresponding JSX closing tag for <" + Vt(I.name) + ">");
          }
          var A = I.name ? "Element" : "Fragment";
          return b["opening" + A] = I, b["closing" + A] = R, b.children = S, this.type === B.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(b, "JSX" + A);
        }, m.jsx_parseText = function() {
          var y = this.parseLiteral(this.value);
          return y.type = "JSXText", y;
        }, m.jsx_parseElement = function() {
          var y = this.start, x = this.startLoc;
          return this.next(), this.jsx_parseElementAt(y, x);
        }, f;
      })(Y);
    })(v, g, d), d = (function(P, st, Y) {
      var G = st.tokTypes, B = Y.tokTypes;
      return (function(l) {
        function i() {
          return l.apply(this, arguments) || this;
        }
        Jt(i, l);
        var r = i.prototype;
        return r.parseMaybeImportAttributes = function(n) {
          if (this.type === B._with || this.type === G.assert) {
            this.next();
            var c = this.parseImportAttributes();
            c && (n.attributes = c);
          }
        }, r.parseImportAttributes = function() {
          this.expect(B.braceL);
          var n = this.parseWithEntries();
          return this.expect(B.braceR), n;
        }, r.parseWithEntries = function() {
          var n = [], c = /* @__PURE__ */ new Set();
          do {
            if (this.type === B.braceR) break;
            var f, m = this.startNode();
            f = this.type === B.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), m.key = f, c.has(m.key.name) && this.raise(this.pos, "Duplicated key in attributes"), c.add(m.key.name), this.type !== B.string && this.raise(this.pos, "Only string is supported as an attribute value"), m.value = this.parseLiteral(this.value), n.push(this.finishNode(m, "ImportAttribute"));
          } while (this.eat(B.comma));
          return n;
        }, i;
      })(P);
    })(d, g, v);
    var Ni = /* @__PURE__ */ (function(P) {
      function st(i, r, n) {
        var c;
        return (c = P.call(this, i, r, n) || this).preValue = null, c.preToken = null, c.isLookahead = !1, c.isAmbientContext = !1, c.inAbstractClass = !1, c.inType = !1, c.inDisallowConditionalTypesContext = !1, c.maybeInArrowParameters = !1, c.shouldParseArrowReturnType = void 0, c.shouldParseAsyncArrowReturnType = void 0, c.decoratorStack = [[]], c.importsStack = [[]], c.importOrExportOuterKind = void 0, c.tsParseConstModifier = c.tsParseModifiers.bind((function(f) {
          if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return f;
        })(c), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: w.InvalidModifierOnTypeParameterPositions }), c;
      }
      Jt(st, P);
      var Y, G, B, l = st.prototype;
      return l.getTokenFromCodeInType = function(i) {
        return i === 62 || i === 60 ? this.finishOp(h.relational, 1) : P.prototype.getTokenFromCode.call(this, i);
      }, l.readToken = function(i) {
        if (!this.inType) {
          var r = this.curContext();
          if (r === it.tc_expr) return this.jsx_readToken();
          if (r === it.tc_oTag || r === it.tc_cTag) {
            if (N(i)) return this.jsx_readWord();
            if (i == 62) return ++this.pos, this.finishToken(_.jsxTagEnd);
            if ((i === 34 || i === 39) && r == it.tc_oTag) return this.jsx_readString(i);
          }
          if (i === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(_.jsxTagStart);
        }
        return P.prototype.readToken.call(this, i);
      }, l.getTokenFromCode = function(i) {
        return this.inType ? this.getTokenFromCodeInType(i) : i === 64 ? (++this.pos, this.finishToken(_.at)) : P.prototype.getTokenFromCode.call(this, i);
      }, l.isAbstractClass = function() {
        return this.ts_isContextual(_.abstract) && this.lookahead().type === h._class;
      }, l.finishNode = function(i, r) {
        return i.type !== "" && i.end !== 0 ? i : P.prototype.finishNode.call(this, i, r);
      }, l.tryParse = function(i, r) {
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
      }, l.setOptionalParametersError = function(i, r) {
        var n;
        i.optionalParametersLoc = (n = r?.loc) != null ? n : this.startLoc;
      }, l.reScan_lt_gt = function() {
        this.type === h.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, l.reScan_lt = function() {
        var i = this.type;
        return i === h.bitShift ? (this.pos -= 2, this.finishOp(h.relational, 1), h.relational) : i;
      }, l.resetEndLocation = function(i, r) {
        r === void 0 && (r = this.lastTokEndLoc), i.end = r.column, i.loc.end = r, this.options.ranges && (i.range[1] = r.column);
      }, l.startNodeAtNode = function(i) {
        return P.prototype.startNodeAt.call(this, i.start, i.loc.start);
      }, l.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, l.tsHasSomeModifiers = function(i, r) {
        return r.some(function(n) {
          return qe(n) ? i.accessibility === n : !!i[n];
        });
      }, l.tsIsStartOfStaticBlocks = function() {
        return this.isContextual("static") && this.lookaheadCharCode() === 123;
      }, l.tsCheckForInvalidTypeCasts = function(i) {
        var r = this;
        i.forEach(function(n) {
          n?.type === "TSTypeCastExpression" && r.raise(n.typeAnnotation.start, w.UnexpectedTypeAnnotation);
        });
      }, l.atPossibleAsyncArrow = function(i) {
        return i.type === "Identifier" && i.name === "async" && this.lastTokEndLoc.column === i.end && !this.canInsertSemicolon() && i.end - i.start == 5 && i.start === this.potentialArrowAt;
      }, l.tsIsIdentifier = function() {
        return q(this.type);
      }, l.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(h.colon) ? this.tsParseTypeOrTypePredicateAnnotation(h.colon) : void 0;
      }, l.tsTryParseGenericAsyncArrowFunction = function(i, r, n) {
        var c = this;
        if (this.tsMatchLeftRelational()) {
          var f = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var m = this.tsTryParseAndCatch(function() {
            var y = c.startNodeAt(i, r);
            return y.typeParameters = c.tsParseTypeParameters(), P.prototype.parseFunctionParams.call(c, y), y.returnType = c.tsTryParseTypeOrTypePredicateAnnotation(), c.expect(h.arrow), y;
          });
          if (this.maybeInArrowParameters = f, m) return P.prototype.parseArrowExpression.call(this, m, null, !0, n);
        }
      }, l.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === h.relational) return this.tsParseTypeArguments();
      }, l.tsInNoContext = function(i) {
        var r = this.context;
        this.context = [r[0]];
        try {
          return i();
        } finally {
          this.context = r;
        }
      }, l.tsTryParseTypeAnnotation = function() {
        return this.match(h.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, l.isUnparsedContextual = function(i, r) {
        var n = i + r.length;
        if (this.input.slice(i, n) === r) {
          var c = this.input.charCodeAt(n);
          return !(X(c) || (64512 & c) == 55296);
        }
        return !1;
      }, l.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(_.abstract) && this.lookahead().type === h._new;
      }, l.nextTokenStartSince = function(i) {
        return le.lastIndex = i, le.test(this.input) ? le.lastIndex : i;
      }, l.lookaheadCharCode = function() {
        return this.input.charCodeAt(this.nextTokenStart());
      }, l.compareLookaheadState = function(i, r) {
        for (var n = 0, c = Object.keys(i); n < c.length; n++) {
          var f = c[n];
          if (i[f] !== r[f]) return !1;
        }
        return !0;
      }, l.createLookaheadState = function() {
        this.value = null, this.context = [this.curContext()];
      }, l.getCurLookaheadState = function() {
        return { endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context, startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, l.cloneCurLookaheadState = function() {
        return { pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context && this.context.slice(), startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, l.setLookaheadState = function(i) {
        this.pos = i.pos, this.value = i.value, this.endLoc = i.endLoc, this.lastTokEnd = i.lastTokEnd, this.lastTokStart = i.lastTokStart, this.lastTokStartLoc = i.lastTokStartLoc, this.type = i.type, this.start = i.start, this.end = i.end, this.context = i.context, this.startLoc = i.startLoc, this.lastTokEndLoc = i.lastTokEndLoc, this.curLine = i.curLine, this.lineStart = i.lineStart, this.curPosition = i.curPosition, this.containsEsc = i.containsEsc;
      }, l.tsLookAhead = function(i) {
        var r = this.getCurLookaheadState(), n = i();
        return this.setLookaheadState(r), n;
      }, l.lookahead = function(i) {
        var r = this.getCurLookaheadState();
        if (this.createLookaheadState(), this.isLookahead = !0, i !== void 0) for (var n = 0; n < i; n++) this.nextToken();
        else this.nextToken();
        this.isLookahead = !1;
        var c = this.getCurLookaheadState();
        return this.setLookaheadState(r), c;
      }, l.readWord = function() {
        var i = this.readWord1(), r = h.name;
        return this.keywords.test(i) ? r = C[i] : new RegExp(ae).test(i) && (r = _[i]), this.finishToken(r, i);
      }, l.skipBlockComment = function() {
        var i;
        this.isLookahead || (i = this.options.onComment && this.curPosition());
        var r = this.pos, n = this.input.indexOf("*/", this.pos += 2);
        if (n === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = n + 2, this.options.locations) for (var c, f = r; (c = Ii(this.input, f, this.pos)) > -1; ) ++this.curLine, f = this.lineStart = c;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(r + 2, n), r, this.pos, i, this.curPosition());
      }, l.skipLineComment = function(i) {
        var r, n = this.pos;
        this.isLookahead || (r = this.options.onComment && this.curPosition());
        for (var c = this.input.charCodeAt(this.pos += i); this.pos < this.input.length && !j(c); ) c = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(n + i, this.pos), n, this.pos, r, this.curPosition());
      }, l.finishToken = function(i, r) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var n = this.type;
        this.type = i, this.value = r, this.isLookahead || this.updateContext(n);
      }, l.resetStartLocation = function(i, r, n) {
        i.start = r, i.loc.start = n, this.options.ranges && (i.range[0] = r);
      }, l.isLineTerminator = function() {
        return this.eat(h.semi) || P.prototype.canInsertSemicolon.call(this);
      }, l.hasFollowingLineBreak = function() {
        return Be.lastIndex = this.end, Be.test(this.input);
      }, l.addExtra = function(i, r, n, c) {
        if (c === void 0 && (c = !0), i) {
          var f = i.extra = i.extra || {};
          c ? f[r] = n : Object.defineProperty(f, r, { enumerable: c, value: n });
        }
      }, l.isLiteralPropertyName = function() {
        return ki(this.type);
      }, l.hasPrecedingLineBreak = function() {
        return L.test(this.input.slice(this.lastTokEndLoc.index, this.start));
      }, l.createIdentifier = function(i, r) {
        return i.name = r, this.finishNode(i, "Identifier");
      }, l.resetStartLocationFromNode = function(i, r) {
        this.resetStartLocation(i, r.start, r.loc.start);
      }, l.isThisParam = function(i) {
        return i.type === "Identifier" && i.name === "this";
      }, l.isLookaheadContextual = function(i) {
        var r = this.nextTokenStart();
        return this.isUnparsedContextual(r, i);
      }, l.ts_type_isContextual = function(i, r) {
        return i === r && !this.containsEsc;
      }, l.ts_isContextual = function(i) {
        return this.type === i && !this.containsEsc;
      }, l.ts_isContextualWithState = function(i, r) {
        return i.type === r && !i.containsEsc;
      }, l.isContextualWithState = function(i, r) {
        return r.type === h.name && r.value === i && !r.containsEsc;
      }, l.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(h.plusMin) ? this.ts_isContextual(_.readonly) : (this.ts_isContextual(_.readonly) && this.next(), !!this.match(h.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(h._in))));
      }, l.tsInDisallowConditionalTypesContext = function(i) {
        var r = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return i();
        } finally {
          this.inDisallowConditionalTypesContext = r;
        }
      }, l.tsTryParseType = function() {
        return this.tsEatThenParseType(h.colon);
      }, l.match = function(i) {
        return this.type === i;
      }, l.matchJsx = function(i) {
        return this.type === g.tokTypes[i];
      }, l.ts_eatWithState = function(i, r, n) {
        if (i === n.type) {
          for (var c = 0; c < r; c++) this.next();
          return !0;
        }
        return !1;
      }, l.ts_eatContextualWithState = function(i, r, n) {
        if (ae.test(i)) {
          if (this.ts_isContextualWithState(n, _[i])) {
            for (var c = 0; c < r; c++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(i, n)) return !1;
        for (var f = 0; f < r; f++) this.next();
        return !0;
      }, l.canHaveLeadingDecorator = function() {
        return this.match(h._class);
      }, l.eatContextual = function(i) {
        return ae.test(i) ? !!this.ts_isContextual(_[i]) && (this.next(), !0) : P.prototype.eatContextual.call(this, i);
      }, l.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, l.tsParseExternalModuleReference = function() {
        var i = this.startNode();
        return this.expectContextual("require"), this.expect(h.parenL), this.match(h.string) || this.unexpected(), i.expression = this.parseExprAtom(), this.expect(h.parenR), this.finishNode(i, "TSExternalModuleReference");
      }, l.tsParseEntityName = function(i) {
        i === void 0 && (i = !0);
        for (var r = this.parseIdent(i); this.eat(h.dot); ) {
          var n = this.startNodeAtNode(r);
          n.left = r, n.right = this.parseIdent(i), r = this.finishNode(n, "TSQualifiedName");
        }
        return r;
      }, l.tsParseEnumMember = function() {
        var i = this.startNode();
        return i.id = this.match(h.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(h.eq) && (i.initializer = this.parseMaybeAssign()), this.finishNode(i, "TSEnumMember");
      }, l.tsParseEnumDeclaration = function(i, r) {
        return r === void 0 && (r = {}), r.const && (i.const = !0), r.declare && (i.declare = !0), this.expectContextual("enum"), i.id = this.parseIdent(), this.checkLValSimple(i.id), this.expect(h.braceL), i.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(h.braceR), this.finishNode(i, "TSEnumDeclaration");
      }, l.tsParseModuleBlock = function() {
        var i = this.startNode();
        for (P.prototype.enterScope.call(this, 512), this.expect(h.braceL), i.body = []; this.type !== h.braceR; ) {
          var r = this.parseStatement(null, !0);
          i.body.push(r);
        }
        return this.next(), P.prototype.exitScope.call(this), this.finishNode(i, "TSModuleBlock");
      }, l.tsParseAmbientExternalModuleDeclaration = function(i) {
        return this.ts_isContextual(_.global) ? (i.global = !0, i.id = this.parseIdent()) : this.match(h.string) ? i.id = this.parseLiteral(this.value) : this.unexpected(), this.match(h.braceL) ? (P.prototype.enterScope.call(this, Rt), i.body = this.tsParseModuleBlock(), P.prototype.exitScope.call(this)) : P.prototype.semicolon.call(this), this.finishNode(i, "TSModuleDeclaration");
      }, l.tsTryParseDeclare = function(i) {
        var r = this;
        if (!this.isLineTerminator()) {
          var n, c = this.type;
          return this.isContextual("let") && (c = h._var, n = "let"), this.tsInAmbientContext(function() {
            if (c === h._function) return i.declare = !0, r.parseFunctionStatement(i, !1, !0);
            if (c === h._class) return i.declare = !0, r.parseClass(i, !0);
            if (c === _.enum) return r.tsParseEnumDeclaration(i, { declare: !0 });
            if (c === _.global) return r.tsParseAmbientExternalModuleDeclaration(i);
            if (c === h._const || c === h._var) return r.match(h._const) && r.isLookaheadContextual("enum") ? (r.expect(h._const), r.tsParseEnumDeclaration(i, { const: !0, declare: !0 })) : (i.declare = !0, r.parseVarStatement(i, n || r.value, !0));
            if (c === _.interface) {
              var f = r.tsParseInterfaceDeclaration(i, { declare: !0 });
              if (f) return f;
            }
            return q(c) ? r.tsParseDeclaration(i, r.value, !0) : void 0;
          });
        }
      }, l.tsIsListTerminator = function(i) {
        switch (i) {
          case "EnumMembers":
          case "TypeMembers":
            return this.match(h.braceR);
          case "HeritageClauseElement":
            return this.match(h.braceL);
          case "TupleElementTypes":
            return this.match(h.bracketR);
          case "TypeParametersOrArguments":
            return this.tsMatchRightRelational();
        }
      }, l.tsParseDelimitedListWorker = function(i, r, n, c) {
        for (var f = [], m = -1; !this.tsIsListTerminator(i); ) {
          m = -1;
          var y = r();
          if (y == null) return;
          if (f.push(y), !this.eat(h.comma)) {
            if (this.tsIsListTerminator(i)) break;
            return void (n && this.expect(h.comma));
          }
          m = this.lastTokStart;
        }
        return c && (c.value = m), f;
      }, l.tsParseDelimitedList = function(i, r, n) {
        return (function(c) {
          if (c == null) throw new Error("Unexpected " + c + " value.");
          return c;
        })(this.tsParseDelimitedListWorker(i, r, !0, n));
      }, l.tsParseBracketedList = function(i, r, n, c, f) {
        c || this.expect(n ? h.bracketL : h.relational);
        var m = this.tsParseDelimitedList(i, r, f);
        return this.expect(n ? h.bracketR : h.relational), m;
      }, l.tsParseTypeParameterName = function() {
        return this.parseIdent().name;
      }, l.tsEatThenParseType = function(i) {
        return this.match(i) ? this.tsNextThenParseType() : void 0;
      }, l.tsExpectThenParseType = function(i) {
        var r = this;
        return this.tsDoThenParseType(function() {
          return r.expect(i);
        });
      }, l.tsNextThenParseType = function() {
        var i = this;
        return this.tsDoThenParseType(function() {
          return i.next();
        });
      }, l.tsDoThenParseType = function(i) {
        var r = this;
        return this.tsInType(function() {
          return i(), r.tsParseType();
        });
      }, l.tsSkipParameterStart = function() {
        if (q(this.type) || this.match(h._this)) return this.next(), !0;
        if (this.match(h.braceL)) try {
          return this.parseObj(!0), !0;
        } catch {
          return !1;
        }
        if (this.match(h.bracketL)) {
          this.next();
          try {
            return this.parseBindingList(h.bracketR, !0, !0), !0;
          } catch {
            return !1;
          }
        }
        return !1;
      }, l.tsIsUnambiguouslyStartOfFunctionType = function() {
        return this.next(), !!(this.match(h.parenR) || this.match(h.ellipsis) || this.tsSkipParameterStart() && (this.match(h.colon) || this.match(h.comma) || this.match(h.question) || this.match(h.eq) || this.match(h.parenR) && (this.next(), this.match(h.arrow))));
      }, l.tsIsStartOfFunctionType = function() {
        return !!this.tsMatchLeftRelational() || this.match(h.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }, l.tsInAllowConditionalTypesContext = function(i) {
        var r = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !1;
        try {
          return i();
        } finally {
          this.inDisallowConditionalTypesContext = r;
        }
      }, l.tsParseBindingListForSignature = function() {
        var i = this;
        return P.prototype.parseBindingList.call(this, h.parenR, !0, !0).map(function(r) {
          return r.type !== "Identifier" && r.type !== "RestElement" && r.type !== "ObjectPattern" && r.type !== "ArrayPattern" && i.raise(r.start, w.UnsupportedSignatureParameterKind(r.type)), r;
        });
      }, l.tsParseTypePredicateAsserts = function() {
        if (this.type !== _.asserts) return !1;
        var i = this.containsEsc;
        return this.next(), !(!q(this.type) && !this.match(h._this) || (i && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, l.tsParseThisTypeNode = function() {
        var i = this.startNode();
        return this.next(), this.finishNode(i, "TSThisType");
      }, l.tsParseTypeAnnotation = function(i, r) {
        var n = this;
        return i === void 0 && (i = !0), r === void 0 && (r = this.startNode()), this.tsInType(function() {
          i && n.expect(h.colon), r.typeAnnotation = n.tsParseType();
        }), this.finishNode(r, "TSTypeAnnotation");
      }, l.tsParseThisTypePredicate = function(i) {
        this.next();
        var r = this.startNodeAtNode(i);
        return r.parameterName = i, r.typeAnnotation = this.tsParseTypeAnnotation(!1), r.asserts = !1, this.finishNode(r, "TSTypePredicate");
      }, l.tsParseThisTypeOrThisTypePredicate = function() {
        var i = this.tsParseThisTypeNode();
        return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(i) : i;
      }, l.tsParseTypePredicatePrefix = function() {
        var i = this.parseIdent();
        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), i;
      }, l.tsParseTypeOrTypePredicateAnnotation = function(i) {
        var r = this;
        return this.tsInType(function() {
          var n = r.startNode();
          r.expect(i);
          var c = r.startNode(), f = !!r.tsTryParse(r.tsParseTypePredicateAsserts.bind(r));
          if (f && r.match(h._this)) {
            var m = r.tsParseThisTypeOrThisTypePredicate();
            return m.type === "TSThisType" ? (c.parameterName = m, c.asserts = !0, c.typeAnnotation = null, m = r.finishNode(c, "TSTypePredicate")) : (r.resetStartLocationFromNode(m, c), m.asserts = !0), n.typeAnnotation = m, r.finishNode(n, "TSTypeAnnotation");
          }
          var y = r.tsIsIdentifier() && r.tsTryParse(r.tsParseTypePredicatePrefix.bind(r));
          if (!y) return f ? (c.parameterName = r.parseIdent(), c.asserts = f, c.typeAnnotation = null, n.typeAnnotation = r.finishNode(c, "TSTypePredicate"), r.finishNode(n, "TSTypeAnnotation")) : r.tsParseTypeAnnotation(!1, n);
          var x = r.tsParseTypeAnnotation(!1);
          return c.parameterName = y, c.typeAnnotation = x, c.asserts = f, n.typeAnnotation = r.finishNode(c, "TSTypePredicate"), r.finishNode(n, "TSTypeAnnotation");
        });
      }, l.tsFillSignature = function(i, r) {
        var n = i === h.arrow;
        r.typeParameters = this.tsTryParseTypeParameters(), this.expect(h.parenL), r.parameters = this.tsParseBindingListForSignature(), (n || this.match(i)) && (r.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(i));
      }, l.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== h._const) return null;
        this.next();
        var i = this.tsParseTypeReference();
        return i.typeParameters && this.raise(i.typeName.start, w.CannotFindName({ name: "const" })), i;
      }, l.tsParseFunctionOrConstructorType = function(i, r) {
        var n = this, c = this.startNode();
        return i === "TSConstructorType" && (c.abstract = !!r, r && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return n.tsFillSignature(h.arrow, c);
        }), this.finishNode(c, i);
      }, l.tsParseUnionOrIntersectionType = function(i, r, n) {
        var c = this.startNode(), f = this.eat(n), m = [];
        do
          m.push(r());
        while (this.eat(n));
        return m.length !== 1 || f ? (c.types = m, this.finishNode(c, i)) : m[0];
      }, l.tsCheckTypeAnnotationForReadOnly = function(i) {
        switch (i.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(i.start, w.UnexpectedReadonly);
        }
      }, l.tsParseTypeOperator = function() {
        var i = this.startNode(), r = this.value;
        return this.next(), i.operator = r, i.typeAnnotation = this.tsParseTypeOperatorOrHigher(), r === "readonly" && this.tsCheckTypeAnnotationForReadOnly(i), this.finishNode(i, "TSTypeOperator");
      }, l.tsParseConstraintForInferType = function() {
        var i = this;
        if (this.eat(h._extends)) {
          var r = this.tsInDisallowConditionalTypesContext(function() {
            return i.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(h.question)) return r;
        }
      }, l.tsParseInferType = function() {
        var i = this, r = this.startNode();
        this.expectContextual("infer");
        var n = this.startNode();
        return n.name = this.tsParseTypeParameterName(), n.constraint = this.tsTryParse(function() {
          return i.tsParseConstraintForInferType();
        }), r.typeParameter = this.finishNode(n, "TSTypeParameter"), this.finishNode(r, "TSInferType");
      }, l.tsParseLiteralTypeNode = function() {
        var i = this, r = this.startNode();
        return r.literal = (function() {
          switch (i.type) {
            case h.num:
            case h.string:
            case h._true:
            case h._false:
              return i.parseExprAtom();
            default:
              i.unexpected();
          }
        })(), this.finishNode(r, "TSLiteralType");
      }, l.tsParseImportType = function() {
        var i = this.startNode();
        return this.expect(h._import), this.expect(h.parenL), this.match(h.string) || this.raise(this.start, w.UnsupportedImportTypeArgument), i.argument = this.parseExprAtom(), this.expect(h.parenR), this.eat(h.dot) && (i.qualifier = this.tsParseEntityName()), this.tsMatchLeftRelational() && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSImportType");
      }, l.tsParseTypeQuery = function() {
        var i = this.startNode();
        return this.expect(h._typeof), i.exprName = this.match(h._import) ? this.tsParseImportType() : this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSTypeQuery");
      }, l.tsParseMappedTypeParameter = function() {
        var i = this.startNode();
        return i.name = this.tsParseTypeParameterName(), i.constraint = this.tsExpectThenParseType(h._in), this.finishNode(i, "TSTypeParameter");
      }, l.tsParseMappedType = function() {
        var i = this.startNode();
        return this.expect(h.braceL), this.match(h.plusMin) ? (i.readonly = this.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (i.readonly = !0), this.expect(h.bracketL), i.typeParameter = this.tsParseMappedTypeParameter(), i.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(h.bracketR), this.match(h.plusMin) ? (i.optional = this.value, this.next(), this.expect(h.question)) : this.eat(h.question) && (i.optional = !0), i.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(h.braceR), this.finishNode(i, "TSMappedType");
      }, l.tsParseTypeLiteral = function() {
        var i = this.startNode();
        return i.members = this.tsParseObjectTypeMembers(), this.finishNode(i, "TSTypeLiteral");
      }, l.tsParseTupleElementType = function() {
        var i = this.startLoc, r = this.start, n = this.eat(h.ellipsis), c = this.tsParseType(), f = this.eat(h.question);
        if (this.eat(h.colon)) {
          var m = this.startNodeAtNode(c);
          m.optional = f, c.type !== "TSTypeReference" || c.typeParameters || c.typeName.type !== "Identifier" ? (this.raise(c.start, w.InvalidTupleMemberLabel), m.label = c) : m.label = c.typeName, m.elementType = this.tsParseType(), c = this.finishNode(m, "TSNamedTupleMember");
        } else if (f) {
          var y = this.startNodeAtNode(c);
          y.typeAnnotation = c, c = this.finishNode(y, "TSOptionalType");
        }
        if (n) {
          var x = this.startNodeAt(r, i);
          x.typeAnnotation = c, c = this.finishNode(x, "TSRestType");
        }
        return c;
      }, l.tsParseTupleType = function() {
        var i = this, r = this.startNode();
        r.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
        var n = !1, c = null;
        return r.elementTypes.forEach(function(f) {
          var m = f.type;
          !n || m === "TSRestType" || m === "TSOptionalType" || m === "TSNamedTupleMember" && f.optional || i.raise(f.start, w.OptionalTypeBeforeRequired), n || (n = m === "TSNamedTupleMember" && f.optional || m === "TSOptionalType");
          var y = m;
          m === "TSRestType" && (y = (f = f.typeAnnotation).type);
          var x = y === "TSNamedTupleMember";
          c != null || (c = x), c !== x && i.raise(f.start, w.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(r, "TSTupleType");
      }, l.tsParseTemplateLiteralType = function() {
        var i = this.startNode();
        return i.literal = this.parseTemplate({ isTagged: !1 }), this.finishNode(i, "TSLiteralType");
      }, l.tsParseTypeReference = function() {
        var i = this.startNode();
        return i.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSTypeReference");
      }, l.tsMatchLeftRelational = function() {
        return this.match(h.relational) && this.value === "<";
      }, l.tsMatchRightRelational = function() {
        return this.match(h.relational) && this.value === ">";
      }, l.tsParseParenthesizedType = function() {
        var i = this.startNode();
        return this.expect(h.parenL), i.typeAnnotation = this.tsParseType(), this.expect(h.parenR), this.finishNode(i, "TSParenthesizedType");
      }, l.tsParseNonArrayType = function() {
        switch (this.type) {
          case h.string:
          case h.num:
          case h._true:
          case h._false:
            return this.tsParseLiteralTypeNode();
          case h.plusMin:
            if (this.value === "-") {
              var i = this.startNode();
              return this.lookahead().type !== h.num && this.unexpected(), i.literal = this.parseMaybeUnary(), this.finishNode(i, "TSLiteralType");
            }
            break;
          case h._this:
            return this.tsParseThisTypeOrThisTypePredicate();
          case h._typeof:
            return this.tsParseTypeQuery();
          case h._import:
            return this.tsParseImportType();
          case h.braceL:
            return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
          case h.bracketL:
            return this.tsParseTupleType();
          case h.parenL:
            return this.tsParseParenthesizedType();
          case h.backQuote:
          case h.dollarBraceL:
            return this.tsParseTemplateLiteralType();
          default:
            var r = this.type;
            if (q(r) || r === h._void || r === h._null) {
              var n = r === h._void ? "TSVoidKeyword" : r === h._null ? "TSNullKeyword" : (function(f) {
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
      }, l.tsParseArrayTypeOrHigher = function() {
        for (var i = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(h.bracketL); ) if (this.match(h.bracketR)) {
          var r = this.startNodeAtNode(i);
          r.elementType = i, this.expect(h.bracketR), i = this.finishNode(r, "TSArrayType");
        } else {
          var n = this.startNodeAtNode(i);
          n.objectType = i, n.indexType = this.tsParseType(), this.expect(h.bracketR), i = this.finishNode(n, "TSIndexedAccessType");
        }
        return i;
      }, l.tsParseTypeOperatorOrHigher = function() {
        var i = this;
        return wi(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseArrayTypeOrHigher();
        });
      }, l.tsParseIntersectionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), h.bitwiseAND);
      }, l.tsParseUnionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), h.bitwiseOR);
      }, l.tsParseNonConditionalType = function() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(h._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
      }, l.tsParseType = function() {
        var i = this;
        Ue(this.inType);
        var r = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(h._extends)) return r;
        var n = this.startNodeAtNode(r);
        return n.checkType = r, n.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return i.tsParseNonConditionalType();
        }), this.expect(h.question), n.trueType = this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseType();
        }), this.expect(h.colon), n.falseType = this.tsInAllowConditionalTypesContext(function() {
          return i.tsParseType();
        }), this.finishNode(n, "TSConditionalType");
      }, l.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!q(this.type) && (this.next(), this.match(h.colon));
      }, l.tsInType = function(i) {
        var r = this.inType;
        this.inType = !0;
        try {
          return i();
        } finally {
          this.inType = r;
        }
      }, l.tsTryParseIndexSignature = function(i) {
        if (this.match(h.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(h.bracketL);
          var r = this.parseIdent();
          r.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(r), this.expect(h.bracketR), i.parameters = [r];
          var n = this.tsTryParseTypeAnnotation();
          return n && (i.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSIndexSignature");
        }
      }, l.tsParseNoneModifiers = function(i) {
        this.tsParseModifiers({ modified: i, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: w.InvalidModifierOnTypeParameterPositions });
      }, l.tsParseTypeParameter = function(i) {
        i === void 0 && (i = this.tsParseNoneModifiers.bind(this));
        var r = this.startNode();
        return i(r), r.name = this.tsParseTypeParameterName(), r.constraint = this.tsEatThenParseType(h._extends), r.default = this.tsEatThenParseType(h.eq), this.finishNode(r, "TSTypeParameter");
      }, l.tsParseTypeParameters = function(i) {
        var r = this.startNode();
        this.tsMatchLeftRelational() || this.matchJsx("jsxTagStart") ? this.next() : this.unexpected();
        var n = { value: -1 };
        return r.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, i), !1, !0, n), r.params.length === 0 && this.raise(this.start, w.EmptyTypeParameters), n.value !== -1 && this.addExtra(r, "trailingComma", n.value), this.finishNode(r, "TSTypeParameterDeclaration");
      }, l.tsTryParseTypeParameters = function(i) {
        if (this.tsMatchLeftRelational()) return this.tsParseTypeParameters(i);
      }, l.tsTryParse = function(i) {
        var r = this.getCurLookaheadState(), n = i();
        return n !== void 0 && n !== !1 ? n : void this.setLookaheadState(r);
      }, l.tsTokenCanFollowModifier = function() {
        return (this.match(h.bracketL) || this.match(h.braceL) || this.match(h.star) || this.match(h.ellipsis) || this.match(h.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, l.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, l.tsParseModifier = function(i, r) {
        if (q(this.type) || this.type === h._in) {
          var n = this.value;
          if (i.indexOf(n) !== -1 && !this.containsEsc) {
            if (r && this.tsIsStartOfStaticBlocks()) return;
            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return n;
          }
        }
      }, l.tsParseModifiersByMap = function(i) {
        for (var r = i.modified, n = i.map, c = 0, f = Object.keys(n); c < f.length; c++) {
          var m = f[c];
          r[m] = n[m];
        }
      }, l.tsParseModifiers = function(i) {
        for (var r = this, n = i.modified, c = i.allowedModifiers, f = i.disallowedModifiers, m = i.stopOnStartOfClassStaticBlock, y = i.errorTemplate, x = y === void 0 ? w.InvalidModifierOnTypeMember : y, b = {}, S = function(W, z, K, $) {
          z === K && n[$] && r.raise(W.column, w.InvalidModifiersOrder({ orderedModifiers: [K, $] }));
        }, I = function(W, z, K, $) {
          (n[K] && z === $ || n[$] && z === K) && r.raise(W.column, w.IncompatibleModifiers({ modifiers: [K, $] }));
        }; ; ) {
          var R = this.startLoc, A = this.tsParseModifier(c.concat(f ?? []), m);
          if (!A) break;
          qe(A) ? n.accessibility ? this.raise(this.start, w.DuplicateAccessibilityModifier()) : (S(R, A, A, "override"), S(R, A, A, "static"), S(R, A, A, "readonly"), S(R, A, A, "accessor"), b.accessibility = A, n.accessibility = A) : Ns(A) ? n[A] ? this.raise(this.start, w.DuplicateModifier({ modifier: A })) : (S(R, A, "in", "out"), b[A] = A, n[A] = !0) : Is(A) ? n[A] ? this.raise(this.start, w.DuplicateModifier({ modifier: A })) : (I(R, A, "accessor", "readonly"), I(R, A, "accessor", "static"), I(R, A, "accessor", "override"), b[A] = A, n[A] = !0) : Object.hasOwnProperty.call(n, A) ? this.raise(this.start, w.DuplicateModifier({ modifier: A })) : (S(R, A, "static", "readonly"), S(R, A, "static", "override"), S(R, A, "override", "readonly"), S(R, A, "abstract", "override"), I(R, A, "declare", "override"), I(R, A, "static", "abstract"), b[A] = A, n[A] = !0), f != null && f.includes(A) && this.raise(this.start, x);
        }
        return b;
      }, l.tsParseInOutModifiers = function(i) {
        this.tsParseModifiers({ modified: i, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: w.InvalidModifierOnTypeParameter });
      }, l.tsParseTypeArguments = function() {
        var i = this, r = this.startNode();
        return r.params = this.tsInType(function() {
          return i.tsInNoContext(function() {
            return i.expect(h.relational), i.tsParseDelimitedList("TypeParametersOrArguments", i.tsParseType.bind(i));
          });
        }), r.params.length === 0 && this.raise(this.start, w.EmptyTypeArguments), this.exprAllowed = !1, this.expect(h.relational), this.finishNode(r, "TSTypeParameterInstantiation");
      }, l.tsParseHeritageClause = function(i) {
        var r = this, n = this.start, c = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var f = r.startNode();
          return f.expression = r.tsParseEntityName(), r.tsMatchLeftRelational() && (f.typeParameters = r.tsParseTypeArguments()), r.finishNode(f, "TSExpressionWithTypeArguments");
        });
        return c.length || this.raise(n, w.EmptyHeritageClauseType({ token: i })), c;
      }, l.tsParseTypeMemberSemicolon = function() {
        this.eat(h.comma) || this.isLineTerminator() || this.expect(h.semi);
      }, l.tsTryParseAndCatch = function(i) {
        var r = this.tryParse(function(n) {
          return i() || n();
        });
        if (!r.aborted && r.node) return r.error && this.setLookaheadState(r.failState), r.node;
      }, l.tsParseSignatureMember = function(i, r) {
        return this.tsFillSignature(h.colon, r), this.tsParseTypeMemberSemicolon(), this.finishNode(r, i);
      }, l.tsParsePropertyOrMethodSignature = function(i, r) {
        this.eat(h.question) && (i.optional = !0);
        var n = i;
        if (this.match(h.parenL) || this.tsMatchLeftRelational()) {
          r && this.raise(i.start, w.ReadonlyForMethodSignature);
          var c = n;
          c.kind && this.tsMatchLeftRelational() && this.raise(this.start, w.AccesorCannotHaveTypeParameters), this.tsFillSignature(h.colon, c), this.tsParseTypeMemberSemicolon();
          var f = "parameters", m = "typeAnnotation";
          if (c.kind === "get") c[f].length > 0 && (this.raise(this.start, "A 'get' accesor must not have any formal parameters."), this.isThisParam(c[f][0]) && this.raise(this.start, w.AccesorCannotDeclareThisParameter));
          else if (c.kind === "set") {
            if (c[f].length !== 1) this.raise(this.start, "A 'get' accesor must not have any formal parameters.");
            else {
              var y = c[f][0];
              this.isThisParam(y) && this.raise(this.start, w.AccesorCannotDeclareThisParameter), y.type === "Identifier" && y.optional && this.raise(this.start, w.SetAccesorCannotHaveOptionalParameter), y.type === "RestElement" && this.raise(this.start, w.SetAccesorCannotHaveRestParameter);
            }
            c[m] && this.raise(c[m].start, w.SetAccesorCannotHaveReturnType);
          } else c.kind = "method";
          return this.finishNode(c, "TSMethodSignature");
        }
        var x = n;
        r && (x.readonly = !0);
        var b = this.tsTryParseTypeAnnotation();
        return b && (x.typeAnnotation = b), this.tsParseTypeMemberSemicolon(), this.finishNode(x, "TSPropertySignature");
      }, l.tsParseTypeMember = function() {
        var i = this.startNode();
        if (this.match(h.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", i);
        if (this.match(h._new)) {
          var r = this.startNode();
          return this.next(), this.match(h.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", i) : (i.key = this.createIdentifier(r, "new"), this.tsParsePropertyOrMethodSignature(i, !1));
        }
        return this.tsParseModifiers({ modified: i, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(i) || (this.parsePropertyName(i), i.computed || i.key.type !== "Identifier" || i.key.name !== "get" && i.key.name !== "set" || !this.tsTokenCanFollowModifier() || (i.kind = i.key.name, this.parsePropertyName(i)), this.tsParsePropertyOrMethodSignature(i, !!i.readonly));
      }, l.tsParseList = function(i, r) {
        for (var n = []; !this.tsIsListTerminator(i); ) n.push(r());
        return n;
      }, l.tsParseObjectTypeMembers = function() {
        this.expect(h.braceL);
        var i = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(h.braceR), i;
      }, l.tsParseInterfaceDeclaration = function(i, r) {
        if (r === void 0 && (r = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), r.declare && (i.declare = !0), q(this.type) ? (i.id = this.parseIdent(), this.checkLValSimple(i.id, 7)) : (i.id = null, this.raise(this.start, w.MissingInterfaceName)), i.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(h._extends) && (i.extends = this.tsParseHeritageClause("extends"));
        var n = this.startNode();
        return n.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), i.body = this.finishNode(n, "TSInterfaceBody"), this.finishNode(i, "TSInterfaceDeclaration");
      }, l.tsParseAbstractDeclaration = function(i) {
        if (this.match(h._class)) return i.abstract = !0, this.parseClass(i, !0);
        if (this.ts_isContextual(_.interface)) {
          if (!this.hasFollowingLineBreak()) return i.abstract = !0, this.tsParseInterfaceDeclaration(i);
        } else this.unexpected(i.start);
      }, l.tsIsDeclarationStart = function() {
        return Ei(this.type);
      }, l.tsParseExpressionStatement = function(i, r) {
        switch (r.name) {
          case "declare":
            var n = this.tsTryParseDeclare(i);
            if (n) return n.declare = !0, n;
            break;
          case "global":
            if (this.match(h.braceL)) {
              P.prototype.enterScope.call(this, Rt);
              var c = i;
              return c.global = !0, c.id = r, c.body = this.tsParseModuleBlock(), P.prototype.exitScope.call(this), this.finishNode(c, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(i, r.name, !1);
        }
      }, l.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, l.tsIsExportDefaultSpecifier = function() {
        var i = this.type, r = this.isAsyncFunction(), n = this.isLet();
        if (q(i)) {
          if (r && !this.containsEsc || n) return !1;
          if ((i === _.type || i === _.interface) && !this.containsEsc) {
            var c = this.lookahead();
            if (q(c.type) && !this.isContextualWithState("from", c) || c.type === h.braceL) return !1;
          }
        } else if (!this.match(h._default)) return !1;
        var f = this.nextTokenStart(), m = this.isUnparsedContextual(f, "from");
        if (this.input.charCodeAt(f) === 44 || q(this.type) && m) return !0;
        if (this.match(h._default) && m) {
          var y = this.input.charCodeAt(this.nextTokenStartSince(f + 4));
          return y === 34 || y === 39;
        }
        return !1;
      }, l.tsInAmbientContext = function(i) {
        var r = this.isAmbientContext;
        this.isAmbientContext = !0;
        try {
          return i();
        } finally {
          this.isAmbientContext = r;
        }
      }, l.tsCheckLineTerminator = function(i) {
        return i ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
      }, l.tsParseModuleOrNamespaceDeclaration = function(i, r) {
        if (r === void 0 && (r = !1), i.id = this.parseIdent(), r || this.checkLValSimple(i.id, 8), this.eat(h.dot)) {
          var n = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(n, !0), i.body = n;
        } else P.prototype.enterScope.call(this, Rt), i.body = this.tsParseModuleBlock(), P.prototype.exitScope.call(this);
        return this.finishNode(i, "TSModuleDeclaration");
      }, l.checkLValSimple = function(i, r, n) {
        return r === void 0 && (r = 0), P.prototype.checkLValSimple.call(this, i, r, n);
      }, l.tsParseTypeAliasDeclaration = function(i) {
        var r = this;
        return i.id = this.parseIdent(), this.checkLValSimple(i.id, 6), i.typeAnnotation = this.tsInType(function() {
          if (i.typeParameters = r.tsTryParseTypeParameters(r.tsParseInOutModifiers.bind(r)), r.expect(h.eq), r.ts_isContextual(_.interface) && r.lookahead().type !== h.dot) {
            var n = r.startNode();
            return r.next(), r.finishNode(n, "TSIntrinsicKeyword");
          }
          return r.tsParseType();
        }), this.semicolon(), this.finishNode(i, "TSTypeAliasDeclaration");
      }, l.tsParseDeclaration = function(i, r, n) {
        switch (r) {
          case "abstract":
            if (this.tsCheckLineTerminator(n) && (this.match(h._class) || q(this.type))) return this.tsParseAbstractDeclaration(i);
            break;
          case "module":
            if (this.tsCheckLineTerminator(n)) {
              if (this.match(h.string)) return this.tsParseAmbientExternalModuleDeclaration(i);
              if (q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(i);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(n) && q(this.type)) return this.tsParseModuleOrNamespaceDeclaration(i);
            break;
          case "type":
            if (this.tsCheckLineTerminator(n) && q(this.type)) return this.tsParseTypeAliasDeclaration(i);
        }
      }, l.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, l.tsParseImportEqualsDeclaration = function(i, r) {
        i.isExport = r || !1, i.id = this.parseIdent(), this.checkLValSimple(i.id, 2), P.prototype.expect.call(this, h.eq);
        var n = this.tsParseModuleReference();
        return i.importKind === "type" && n.type !== "TSExternalModuleReference" && this.raise(n.start, w.ImportAliasHasImportType), i.moduleReference = n, P.prototype.semicolon.call(this), this.finishNode(i, "TSImportEqualsDeclaration");
      }, l.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var i = this.type;
        if (q(i)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((i === _.type || i === _.interface) && !this.containsEsc) {
            var r = this.lookahead();
            if (q(r.type) && !this.isContextualWithState("from", r) || r.type === h.braceL) return !1;
          }
        } else if (!this.match(h._default)) return !1;
        var n = this.nextTokenStart(), c = this.isUnparsedContextual(n, "from");
        if (this.input.charCodeAt(n) === 44 || q(this.type) && c) return !0;
        if (this.match(h._default) && c) {
          var f = this.input.charCodeAt(this.nextTokenStartSince(n + 4));
          return f === 34 || f === 39;
        }
        return !1;
      }, l.parseTemplate = function(i) {
        var r = (i === void 0 ? {} : i).isTagged, n = r !== void 0 && r, c = this.startNode();
        this.next(), c.expressions = [];
        var f = this.parseTemplateElement({ isTagged: n });
        for (c.quasis = [f]; !f.tail; ) this.type === h.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(h.dollarBraceL), c.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(h.braceR), c.quasis.push(f = this.parseTemplateElement({ isTagged: n }));
        return this.next(), this.finishNode(c, "TemplateLiteral");
      }, l.parseFunction = function(i, r, n, c, f) {
        this.initFunction(i), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !c) && (this.type === h.star && 2 & r && this.unexpected(), i.generator = this.eat(h.star)), this.options.ecmaVersion >= 8 && (i.async = !!c), 1 & r && (i.id = 4 & r && this.type !== h.name ? null : this.parseIdent());
        var m = this.yieldPos, y = this.awaitPos, x = this.awaitIdentPos, b = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(fe(i.async, i.generator)), 1 & r || (i.id = this.type === h.name ? this.parseIdent() : null), this.parseFunctionParams(i);
        var S = 1 & r;
        return this.parseFunctionBody(i, n, !1, f, { isFunctionDeclaration: S }), this.yieldPos = m, this.awaitPos = y, this.awaitIdentPos = x, 1 & r && i.id && !(2 & r) && this.checkLValSimple(i.id, i.body ? this.strict || i.generator || i.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = b, this.finishNode(i, S ? "FunctionDeclaration" : "FunctionExpression");
      }, l.parseFunctionBody = function(i, r, n, c, f) {
        r === void 0 && (r = !1), n === void 0 && (n = !1), c === void 0 && (c = !1), this.match(h.colon) && (i.returnType = this.tsParseTypeOrTypePredicateAnnotation(h.colon));
        var m = f != null && f.isFunctionDeclaration ? "TSDeclareFunction" : f != null && f.isClassMethod ? "TSDeclareMethod" : void 0;
        return m && !this.match(h.braceL) && this.isLineTerminator() ? this.finishNode(i, m) : m === "TSDeclareFunction" && this.isAmbientContext && (this.raise(i.start, w.DeclareFunctionHasImplementation), i.declare) ? (P.prototype.parseFunctionBody.call(this, i, r, n, !1), this.finishNode(i, m)) : (P.prototype.parseFunctionBody.call(this, i, r, n, c), i);
      }, l.parseNew = function() {
        var i;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var r = this.startNode(), n = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(h.dot)) {
          r.meta = n;
          var c = this.containsEsc;
          return r.property = this.parseIdent(!0), r.property.name !== "target" && this.raiseRecoverable(r.property.start, "The only valid meta property for new is 'new.target'"), c && this.raiseRecoverable(r.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(r.start, "'new.target' can only be used in functions and class static block"), this.finishNode(r, "MetaProperty");
        }
        var f = this.start, m = this.startLoc, y = this.type === h._import;
        r.callee = this.parseSubscripts(this.parseExprAtom(), f, m, !0, !1), y && r.callee.type === "ImportExpression" && this.raise(f, "Cannot use new with import()");
        var x = r.callee;
        return x.type !== "TSInstantiationExpression" || (i = x.extra) != null && i.parenthesized || (r.typeParameters = x.typeParameters, r.callee = x.expression), r.arguments = this.eat(h.parenL) ? this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(r, "NewExpression");
      }, l.parseExprOp = function(i, r, n, c, f) {
        var m;
        if (h._in.binop > c && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (m = "TSAsExpression"), p && this.isContextual("satisfies") && (m = "TSSatisfiesExpression"), m)) {
          var y = this.startNodeAt(r, n);
          y.expression = i;
          var x = this.tsTryNextParseConstantContext();
          return y.typeAnnotation = x || this.tsNextThenParseType(), this.finishNode(y, m), this.reScan_lt_gt(), this.parseExprOp(y, r, n, c, f);
        }
        return P.prototype.parseExprOp.call(this, i, r, n, c, f);
      }, l.parseImportSpecifiers = function() {
        var i = [], r = !0;
        if (g.tokenIsIdentifier(this.type) && (i.push(this.parseImportDefaultSpecifier()), !this.eat(h.comma))) return i;
        if (this.type === h.star) return i.push(this.parseImportNamespaceSpecifier()), i;
        for (this.expect(h.braceL); !this.eat(h.braceR); ) {
          if (r) r = !1;
          else if (this.expect(h.comma), this.afterTrailingComma(h.braceR)) break;
          i.push(this.parseImportSpecifier());
        }
        return i;
      }, l.parseImport = function(i) {
        var r = this.lookahead();
        if (i.importKind = "value", this.importOrExportOuterKind = "value", q(r.type) || this.match(h.star) || this.match(h.braceL)) {
          var n = this.lookahead(2);
          if (n.type !== h.comma && !this.isContextualWithState("from", n) && n.type !== h.eq && this.ts_eatContextualWithState("type", 1, r) && (this.importOrExportOuterKind = "type", i.importKind = "type", r = this.lookahead(), n = this.lookahead(2)), q(r.type) && n.type === h.eq) {
            this.next();
            var c = this.tsParseImportEqualsDeclaration(i);
            return this.importOrExportOuterKind = "value", c;
          }
        }
        return this.next(), this.type === h.string ? (i.specifiers = [], i.source = this.parseExprAtom()) : (i.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), i.source = this.type === h.string ? this.parseExprAtom() : this.unexpected()), this.parseMaybeImportAttributes(i), this.semicolon(), this.finishNode(i, "ImportDeclaration"), this.importOrExportOuterKind = "value", i.importKind === "type" && i.specifiers.length > 1 && i.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(i.start, w.TypeImportCannotSpecifyDefaultAndNamed), i;
      }, l.parseExportDefaultDeclaration = function() {
        if (this.isAbstractClass()) {
          var i = this.startNode();
          return this.next(), i.abstract = !0, this.parseClass(i, !0);
        }
        if (this.match(_.interface)) {
          var r = this.tsParseInterfaceDeclaration(this.startNode());
          if (r) return r;
        }
        return P.prototype.parseExportDefaultDeclaration.call(this);
      }, l.parseExportAllDeclaration = function(i, r) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (i.exported = this.parseModuleExportName(), this.checkExport(r, i.exported, this.lastTokStart)) : i.exported = null), this.expectContextual("from"), this.type !== h.string && this.unexpected(), i.source = this.parseExprAtom(), this.parseMaybeImportAttributes(i), this.semicolon(), this.finishNode(i, "ExportAllDeclaration");
      }, l.parseDynamicImport = function(i) {
        if (this.next(), i.source = this.parseMaybeAssign(), this.eat(h.comma)) {
          var r = this.parseExpression();
          i.arguments = [r];
        }
        if (!this.eat(h.parenR)) {
          var n = this.start;
          this.eat(h.comma) && this.eat(h.parenR) ? this.raiseRecoverable(n, "Trailing comma is not allowed in import()") : this.unexpected(n);
        }
        return this.finishNode(i, "ImportExpression");
      }, l.parseExport = function(i, r) {
        var n = this.lookahead();
        if (this.ts_eatWithState(h._import, 2, n)) {
          this.ts_isContextual(_.type) && this.lookaheadCharCode() !== 61 ? (i.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (i.importKind = "value", this.importOrExportOuterKind = "value");
          var c = this.tsParseImportEqualsDeclaration(i, !0);
          return this.importOrExportOuterKind = void 0, c;
        }
        if (this.ts_eatWithState(h.eq, 2, n)) {
          var f = i;
          return f.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(f, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, n)) {
          var m = i;
          return this.expectContextual("namespace"), m.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(m, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(n, _.type) && this.lookahead(2).type === h.braceL ? (this.next(), this.importOrExportOuterKind = "type", i.exportKind = "type") : (this.importOrExportOuterKind = "value", i.exportKind = "value"), this.next(), this.eat(h.star)) return this.parseExportAllDeclaration(i, r);
        if (this.eat(h._default)) return this.checkExport(r, "default", this.lastTokStart), i.declaration = this.parseExportDefaultDeclaration(), this.finishNode(i, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) i.declaration = this.parseExportDeclaration(i), i.declaration.type === "VariableDeclaration" ? this.checkVariableExport(r, i.declaration.declarations) : this.checkExport(r, i.declaration.id, i.declaration.id.start), i.specifiers = [], i.source = null;
        else {
          if (i.declaration = null, i.specifiers = this.parseExportSpecifiers(r), this.eatContextual("from")) this.type !== h.string && this.unexpected(), i.source = this.parseExprAtom(), this.parseMaybeImportAttributes(i);
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
      }, l.checkExport = function(i, r, n) {
        i && (typeof r != "string" && (r = r.type === "Identifier" ? r.name : r.value), i[r] = !0);
      }, l.parseMaybeDefault = function(i, r, n) {
        var c = P.prototype.parseMaybeDefault.call(this, i, r, n);
        return c.type === "AssignmentPattern" && c.typeAnnotation && c.right.start < c.typeAnnotation.start && this.raise(c.typeAnnotation.start, w.TypeAnnotationAfterAssign), c;
      }, l.typeCastToParameter = function(i) {
        return i.expression.typeAnnotation = i.typeAnnotation, this.resetEndLocation(i.expression, i.typeAnnotation.end), i.expression;
      }, l.toAssignableList = function(i, r) {
        for (var n = 0; n < i.length; n++) {
          var c = i[n];
          c?.type === "TSTypeCastExpression" && (i[n] = this.typeCastToParameter(c));
        }
        return P.prototype.toAssignableList.call(this, i, r);
      }, l.reportReservedArrowTypeParam = function(i) {
      }, l.parseExprAtom = function(i, r, n) {
        if (this.type === _.jsxText) return this.jsx_parseText();
        if (this.type === _.jsxTagStart) return this.jsx_parseElement();
        if (this.type === _.at) return this.parseDecorators(), this.parseExprAtom();
        if (q(this.type)) {
          var c = this.potentialArrowAt === this.start, f = this.start, m = this.startLoc, y = this.containsEsc, x = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !y && x.name === "async" && !this.canInsertSemicolon() && this.eat(h._function)) return this.overrideContext(U.f_expr), this.parseFunction(this.startNodeAt(f, m), 0, !1, !0, r);
          if (c && !this.canInsertSemicolon()) {
            if (this.eat(h.arrow)) return this.parseArrowExpression(this.startNodeAt(f, m), [x], !1, r);
            if (this.options.ecmaVersion >= 8 && x.name === "async" && this.type === h.name && !y && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return x = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(h.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(f, m), [x], !0, r);
          }
          return x;
        }
        return P.prototype.parseExprAtom.call(this, i, r, n);
      }, l.parseExprAtomDefault = function() {
        if (q(this.type)) {
          var i = this.potentialArrowAt === this.start, r = this.containsEsc, n = this.parseIdent();
          if (!r && n.name === "async" && !this.canInsertSemicolon()) {
            var c = this.type;
            if (c === h._function) return this.next(), this.parseFunction(this.startNodeAtNode(n), void 0, !0, !0);
            if (q(c)) {
              if (this.lookaheadCharCode() === 61) {
                var f = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(h.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(n), [f], !0);
              }
              return n;
            }
          }
          return i && this.match(h.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(n), [n], !1)) : n;
        }
        this.unexpected();
      }, l.parseIdentNode = function() {
        var i = this.startNode();
        return zt(this.type) ? (i.name = this.value, i) : P.prototype.parseIdentNode.call(this);
      }, l.parseVarStatement = function(i, r, n) {
        n === void 0 && (n = !1);
        var c = this.isAmbientContext;
        this.next(), P.prototype.parseVar.call(this, i, !1, r, n || c), this.semicolon();
        var f = this.finishNode(i, "VariableDeclaration");
        if (!c) return f;
        for (var m, y = Fe(f.declarations); !(m = y()).done; ) {
          var x = m.value, b = x.init;
          b && (r !== "const" || x.id.typeAnnotation ? this.raise(b.start, w.InitializerNotAllowedInAmbientContext) : b.type !== "StringLiteral" && b.type !== "BooleanLiteral" && b.type !== "NumericLiteral" && b.type !== "BigIntLiteral" && (b.type !== "TemplateLiteral" || b.expressions.length > 0) && !_s(b) && this.raise(b.start, w.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return f;
      }, l.parseStatement = function(i, r, n) {
        if (this.match(_.at) && this.parseDecorators(!0), this.match(h._const) && this.isLookaheadContextual("enum")) {
          var c = this.startNode();
          return this.expect(h._const), this.tsParseEnumDeclaration(c, { const: !0 });
        }
        if (this.ts_isContextual(_.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(_.interface)) {
          var f = this.tsParseInterfaceDeclaration(this.startNode());
          if (f) return f;
        }
        return P.prototype.parseStatement.call(this, i, r, n);
      }, l.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, l.parsePostMemberNameModifiers = function(i) {
        this.eat(h.question) && (i.optional = !0), i.readonly && this.match(h.parenL) && this.raise(i.start, w.ClassMethodHasReadonly), i.declare && this.match(h.parenL) && this.raise(i.start, w.ClassMethodHasDeclare);
      }, l.parseExpressionStatement = function(i, r) {
        return (r.type === "Identifier" ? this.tsParseExpressionStatement(i, r) : void 0) || P.prototype.parseExpressionStatement.call(this, i, r);
      }, l.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(_.at) || P.prototype.shouldParseExportStatement.call(this);
      }, l.parseConditional = function(i, r, n, c, f) {
        if (this.eat(h.question)) {
          var m = this.startNodeAt(r, n);
          return m.test = i, m.consequent = this.parseMaybeAssign(), this.expect(h.colon), m.alternate = this.parseMaybeAssign(c), this.finishNode(m, "ConditionalExpression");
        }
        return i;
      }, l.parseMaybeConditional = function(i, r) {
        var n = this, c = this.start, f = this.startLoc, m = this.parseExprOps(i, r);
        if (this.checkExpressionErrors(r)) return m;
        if (!this.maybeInArrowParameters || !this.match(h.question)) return this.parseConditional(m, c, f, i, r);
        var y = this.tryParse(function() {
          return n.parseConditional(m, c, f, i, r);
        });
        return y.node ? (y.error && this.setLookaheadState(y.failState), y.node) : (y.error && this.setOptionalParametersError(r, y.error), m);
      }, l.parseParenItem = function(i) {
        var r = this.start, n = this.startLoc;
        if (i = P.prototype.parseParenItem.call(this, i), this.eat(h.question) && (i.optional = !0, this.resetEndLocation(i)), this.match(h.colon)) {
          var c = this.startNodeAt(r, n);
          return c.expression = i, c.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(c, "TSTypeCastExpression");
        }
        return i;
      }, l.parseExportDeclaration = function(i) {
        var r = this;
        if (!this.isAmbientContext && this.ts_isContextual(_.declare)) return this.tsInAmbientContext(function() {
          return r.parseExportDeclaration(i);
        });
        var n = this.start, c = this.startLoc, f = this.eatContextual("declare");
        !f || !this.ts_isContextual(_.declare) && this.shouldParseExportStatement() || this.raise(this.start, w.ExpectedAmbientAfterExportDeclare);
        var m = q(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return m ? ((m.type === "TSInterfaceDeclaration" || m.type === "TSTypeAliasDeclaration" || f) && (i.exportKind = "type"), f && (this.resetStartLocation(m, n, c), m.declare = !0), m) : null;
      }, l.parseClassId = function(i, r) {
        if (r || !this.isContextual("implements")) {
          P.prototype.parseClassId.call(this, i, r);
          var n = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          n && (i.typeParameters = n);
        }
      }, l.parseClassPropertyAnnotation = function(i) {
        i.optional || (this.value === "!" && this.eat(h.prefix) ? i.definite = !0 : this.eat(h.question) && (i.optional = !0));
        var r = this.tsTryParseTypeAnnotation();
        r && (i.typeAnnotation = r);
      }, l.parseClassField = function(i) {
        if (i.key.type === "PrivateIdentifier") i.abstract && this.raise(i.start, w.PrivateElementHasAbstract), i.accessibility && this.raise(i.start, w.PrivateElementHasAccessibility({ modifier: i.accessibility })), this.parseClassPropertyAnnotation(i);
        else if (this.parseClassPropertyAnnotation(i), this.isAmbientContext && (!i.readonly || i.typeAnnotation) && this.match(h.eq) && this.raise(this.start, w.DeclareClassFieldHasInitializer), i.abstract && this.match(h.eq)) {
          var r = i.key;
          this.raise(this.start, w.AbstractPropertyHasInitializer({ propertyName: r.type !== "Identifier" || i.computed ? "[" + this.input.slice(r.start, r.end) + "]" : r.name }));
        }
        return P.prototype.parseClassField.call(this, i);
      }, l.parseClassMethod = function(i, r, n, c) {
        var f = i.kind === "constructor", m = i.key.type === "PrivateIdentifier", y = this.tsTryParseTypeParameters();
        m ? (y && (i.typeParameters = y), i.accessibility && this.raise(i.start, w.PrivateMethodsHasAccessibility({ modifier: i.accessibility }))) : y && f && this.raise(y.start, w.ConstructorHasTypeParameters);
        var x = i.declare, b = i.kind;
        !(x !== void 0 && x) || b !== "get" && b !== "set" || this.raise(i.start, w.DeclareAccessor({ kind: b })), y && (i.typeParameters = y);
        var S = i.key;
        i.kind === "constructor" ? (r && this.raise(S.start, "Constructor can't be a generator"), n && this.raise(S.start, "Constructor can't be an async method")) : i.static && je(i, "prototype") && this.raise(S.start, "Classes may not have a static property named prototype");
        var I = i.value = this.parseMethod(r, n, c, !0, i);
        return i.kind === "get" && I.params.length !== 0 && this.raiseRecoverable(I.start, "getter should have no params"), i.kind === "set" && I.params.length !== 1 && this.raiseRecoverable(I.start, "setter should have exactly one param"), i.kind === "set" && I.params[0].type === "RestElement" && this.raiseRecoverable(I.params[0].start, "Setter cannot use rest params"), this.finishNode(i, "MethodDefinition");
      }, l.isClassMethod = function() {
        return this.match(h.relational);
      }, l.parseClassElement = function(i) {
        var r = this;
        if (this.eat(h.semi)) return null;
        var n, c = this.options.ecmaVersion, f = this.startNode(), m = "", y = !1, x = !1, b = "method", S = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], I = this.tsParseModifiers({ modified: f, allowedModifiers: S, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: w.InvalidModifierOnTypeParameterPositions });
        n = !!I.static;
        var R = function() {
          if (!r.tsIsStartOfStaticBlocks()) {
            var A = r.tsTryParseIndexSignature(f);
            if (A) return f.abstract && r.raise(f.start, w.IndexSignatureHasAbstract), f.accessibility && r.raise(f.start, w.IndexSignatureHasAccessibility({ modifier: f.accessibility })), f.declare && r.raise(f.start, w.IndexSignatureHasDeclare), f.override && r.raise(f.start, w.IndexSignatureHasOverride), A;
            if (!r.inAbstractClass && f.abstract && r.raise(f.start, w.NonAbstractClassHasAbstractMethod), f.override && i && r.raise(f.start, w.OverrideNotInSubClass), f.static = n, n && (r.isClassElementNameStart() || r.type === h.star || (m = "static")), !m && c >= 8 && r.eatContextual("async") && (!r.isClassElementNameStart() && r.type !== h.star || r.canInsertSemicolon() ? m = "async" : x = !0), !m && (c >= 9 || !x) && r.eat(h.star) && (y = !0), !m && !x && !y) {
              var W = r.value;
              (r.eatContextual("get") || r.eatContextual("set")) && (r.isClassElementNameStart() ? b = W : m = W);
            }
            if (m ? (f.computed = !1, f.key = r.startNodeAt(r.lastTokStart, r.lastTokStartLoc), f.key.name = m, r.finishNode(f.key, "Identifier")) : r.parseClassElementName(f), r.parsePostMemberNameModifiers(f), r.isClassMethod() || c < 13 || r.type === h.parenL || b !== "method" || y || x) {
              var z = !f.static && je(f, "constructor"), K = z && i;
              z && b !== "method" && r.raise(f.key.start, "Constructor can't have get/set modifier"), f.kind = z ? "constructor" : b, r.parseClassMethod(f, y, x, K);
            } else r.parseClassField(f);
            return f;
          }
          if (r.next(), r.next(), r.tsHasSomeModifiers(f, S) && r.raise(r.start, w.StaticBlockCannotHaveModifier), c >= 13) return P.prototype.parseClassStaticBlock.call(r, f), f;
        };
        return f.declare ? this.tsInAmbientContext(R) : R(), f;
      }, l.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || P.prototype.isClassElementNameStart.call(this);
      }, l.parseClassSuper = function(i) {
        P.prototype.parseClassSuper.call(this, i), i.superClass && (this.tsMatchLeftRelational() || this.match(h.bitShift)) && (i.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (i.implements = this.tsParseHeritageClause("implements"));
      }, l.parseFunctionParams = function(i) {
        var r = this.tsTryParseTypeParameters();
        r && (i.typeParameters = r), P.prototype.parseFunctionParams.call(this, i);
      }, l.parseVarId = function(i, r) {
        P.prototype.parseVarId.call(this, i, r), i.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(h.prefix) && (i.definite = !0);
        var n = this.tsTryParseTypeAnnotation();
        n && (i.id.typeAnnotation = n, this.resetEndLocation(i.id));
      }, l.parseArrowExpression = function(i, r, n, c) {
        this.match(h.colon) && (i.returnType = this.tsParseTypeAnnotation());
        var f = this.yieldPos, m = this.awaitPos, y = this.awaitIdentPos;
        this.enterScope(16 | fe(n, !1)), this.initFunction(i);
        var x = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (i.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, i.params = this.toAssignableList(r, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(i, !0, !1, c), this.yieldPos = f, this.awaitPos = m, this.awaitIdentPos = y, this.maybeInArrowParameters = x, this.finishNode(i, "ArrowFunctionExpression");
      }, l.parseMaybeAssignOrigin = function(i, r, n) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(i);
          this.exprAllowed = !1;
        }
        var c = !1, f = -1, m = -1, y = -1;
        r ? (f = r.parenthesizedAssign, m = r.trailingComma, y = r.doubleProto, r.parenthesizedAssign = r.trailingComma = -1) : (r = new Mt(), c = !0);
        var x = this.start, b = this.startLoc;
        (this.type === h.parenL || q(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = i === "await");
        var S = this.parseMaybeConditional(i, r);
        if (n && (S = n.call(this, S, x, b)), this.type.isAssign) {
          var I = this.startNodeAt(x, b);
          return I.operator = this.value, this.type === h.eq && (S = this.toAssignable(S, !0, r)), c || (r.parenthesizedAssign = r.trailingComma = r.doubleProto = -1), r.shorthandAssign >= S.start && (r.shorthandAssign = -1), this.type === h.eq ? this.checkLValPattern(S) : this.checkLValSimple(S), I.left = S, this.next(), I.right = this.parseMaybeAssign(i), y > -1 && (r.doubleProto = y), this.finishNode(I, "AssignmentExpression");
        }
        return c && this.checkExpressionErrors(r, !0), f > -1 && (r.parenthesizedAssign = f), m > -1 && (r.trailingComma = m), S;
      }, l.parseMaybeAssign = function(i, r, n) {
        var c, f, m, y, x, b, S, I, R, A, W, z = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (I = this.cloneCurLookaheadState(), !(R = this.tryParse(function() {
            return z.parseMaybeAssignOrigin(i, r, n);
          }, I)).error) return R.node;
          var K = this.context, $ = K[K.length - 1];
          $ === g.tokContexts.tc_oTag && K[K.length - 2] === g.tokContexts.tc_expr ? (K.pop(), K.pop()) : $ !== g.tokContexts.tc_oTag && $ !== g.tokContexts.tc_expr || K.pop();
        }
        if (!((c = R) != null && c.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(i, r, n);
        I && !this.compareLookaheadState(I, this.getCurLookaheadState()) || (I = this.cloneCurLookaheadState());
        var at = this.tryParse(function(gt) {
          var Lt, Ot;
          W = z.tsParseTypeParameters();
          var bt = z.parseMaybeAssignOrigin(i, r, n);
          return (bt.type !== "ArrowFunctionExpression" || (Lt = bt.extra) != null && Lt.parenthesized) && gt(), ((Ot = W) == null ? void 0 : Ot.params.length) !== 0 && z.resetStartLocationFromNode(bt, W), bt.typeParameters = W, bt;
        }, I);
        if (!at.error && !at.aborted) return W && this.reportReservedArrowTypeParam(W), at.node;
        if (!R && (Ue(!0), !(A = this.tryParse(function() {
          return z.parseMaybeAssignOrigin(i, r, n);
        }, I)).error)) return A.node;
        if ((f = R) != null && f.node) return this.setLookaheadState(R.failState), R.node;
        if (at.node) return this.setLookaheadState(at.failState), W && this.reportReservedArrowTypeParam(W), at.node;
        if ((m = A) != null && m.node) return this.setLookaheadState(A.failState), A.node;
        throw (y = R) != null && y.thrown ? R.error : at.thrown ? at.error : (x = A) != null && x.thrown ? A.error : ((b = R) == null ? void 0 : b.error) || at.error || ((S = A) == null ? void 0 : S.error);
      }, l.parseAssignableListItem = function(i) {
        for (var r = []; this.match(_.at); ) r.push(this.parseDecorator());
        var n, c = this.start, f = this.startLoc, m = !1, y = !1;
        if (i !== void 0) {
          var x = {};
          this.tsParseModifiers({ modified: x, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), n = x.accessibility, y = x.override, m = x.readonly, i === !1 && (n || m || y) && this.raise(f.start, w.UnexpectedParameterModifier);
        }
        var b = this.parseMaybeDefault(c, f);
        this.parseBindingListItem(b);
        var S = this.parseMaybeDefault(b.start, b.loc, b);
        if (r.length && (S.decorators = r), n || m || y) {
          var I = this.startNodeAt(c, f);
          return n && (I.accessibility = n), m && (I.readonly = m), y && (I.override = y), S.type !== "Identifier" && S.type !== "AssignmentPattern" && this.raise(I.start, w.UnsupportedParameterPropertyKind), I.parameter = S, this.finishNode(I, "TSParameterProperty");
        }
        return S;
      }, l.checkLValInnerPattern = function(i, r, n) {
        r === void 0 && (r = 0), i.type === "TSParameterProperty" ? this.checkLValInnerPattern(i.parameter, r, n) : P.prototype.checkLValInnerPattern.call(this, i, r, n);
      }, l.parseBindingListItem = function(i) {
        this.eat(h.question) && (i.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(i.start, w.PatternIsOptional), i.optional = !0);
        var r = this.tsTryParseTypeAnnotation();
        return r && (i.typeAnnotation = r), this.resetEndLocation(i), i;
      }, l.isAssignable = function(i, r) {
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
      }, l.toAssignable = function(i, r, n) {
        switch (r === void 0 && (r = !1), n === void 0 && (n = new Mt()), i.type) {
          case "ParenthesizedExpression":
            return this.toAssignableParenthesizedExpression(i, r, n);
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            return r || this.raise(i.start, w.UnexpectedTypeCastInParameter), this.toAssignable(i.expression, r, n);
          case "MemberExpression":
            break;
          case "AssignmentExpression":
            return r || i.left.type !== "TSTypeCastExpression" || (i.left = this.typeCastToParameter(i.left)), P.prototype.toAssignable.call(this, i, r, n);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(i);
          default:
            return P.prototype.toAssignable.call(this, i, r, n);
        }
        return i;
      }, l.toAssignableParenthesizedExpression = function(i, r, n) {
        switch (i.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            return this.toAssignable(i.expression, r, n);
          default:
            return P.prototype.toAssignable.call(this, i, r, n);
        }
      }, l.curPosition = function() {
        if (this.options.locations) {
          var i = P.prototype.curPosition.call(this);
          return Object.defineProperty(i, "offset", { get: function() {
            return function(r) {
              var n = new v.Position(this.line, this.column + r);
              return n.index = this.index + r, n;
            };
          } }), i.index = this.pos, i;
        }
      }, l.parseBindingAtom = function() {
        return this.type === h._this ? this.parseIdent(!0) : P.prototype.parseBindingAtom.call(this);
      }, l.shouldParseArrow = function(i) {
        var r, n = this;
        if (r = this.match(h.colon) ? i.every(function(f) {
          return n.isAssignable(f, !0);
        }) : !this.canInsertSemicolon()) {
          if (this.match(h.colon)) {
            var c = this.tryParse(function(f) {
              var m = n.tsParseTypeOrTypePredicateAnnotation(h.colon);
              return !n.canInsertSemicolon() && n.match(h.arrow) || f(), m;
            });
            if (c.aborted) return this.shouldParseArrowReturnType = void 0, !1;
            c.thrown || (c.error && this.setLookaheadState(c.failState), this.shouldParseArrowReturnType = c.node);
          }
          return !!this.match(h.arrow) || (this.shouldParseArrowReturnType = void 0, !1);
        }
        return this.shouldParseArrowReturnType = void 0, r;
      }, l.parseParenArrowList = function(i, r, n, c) {
        var f = this.startNodeAt(i, r);
        return f.returnType = this.shouldParseArrowReturnType, this.shouldParseArrowReturnType = void 0, this.parseArrowExpression(f, n, !1, c);
      }, l.parseParenAndDistinguishExpression = function(i, r) {
        var n, c = this.start, f = this.startLoc, m = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          var y = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0, this.next();
          var x, b = this.start, S = this.startLoc, I = [], R = !0, A = !1, W = new Mt(), z = this.yieldPos, K = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== h.parenR; ) {
            if (R ? R = !1 : this.expect(h.comma), m && this.afterTrailingComma(h.parenR, !0)) {
              A = !0;
              break;
            }
            if (this.type === h.ellipsis) {
              x = this.start, I.push(this.parseParenItem(this.parseRestBinding())), this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            I.push(this.parseMaybeAssign(r, W, this.parseParenItem));
          }
          var $ = this.lastTokEnd, at = this.lastTokEndLoc;
          if (this.expect(h.parenR), this.maybeInArrowParameters = y, i && this.shouldParseArrow(I) && this.eat(h.arrow)) return this.checkPatternErrors(W, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = z, this.awaitPos = K, this.parseParenArrowList(c, f, I, r);
          I.length && !A || this.unexpected(this.lastTokStart), x && this.unexpected(x), this.checkExpressionErrors(W, !0), this.yieldPos = z || this.yieldPos, this.awaitPos = K || this.awaitPos, I.length > 1 ? ((n = this.startNodeAt(b, S)).expressions = I, this.finishNodeAt(n, "SequenceExpression", $, at)) : n = I[0];
        } else n = this.parseParenExpression();
        if (this.options.preserveParens) {
          var gt = this.startNodeAt(c, f);
          return gt.expression = n, this.finishNode(gt, "ParenthesizedExpression");
        }
        return n;
      }, l.parseTaggedTemplateExpression = function(i, r, n, c) {
        var f = this.startNodeAt(r, n);
        return f.tag = i, f.quasi = this.parseTemplate({ isTagged: !0 }), c && this.raise(r, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(f, "TaggedTemplateExpression");
      }, l.shouldParseAsyncArrow = function() {
        var i = this;
        if (!this.match(h.colon)) return !this.canInsertSemicolon() && this.eat(h.arrow);
        var r = this.tryParse(function(n) {
          var c = i.tsParseTypeOrTypePredicateAnnotation(h.colon);
          return !i.canInsertSemicolon() && i.match(h.arrow) || n(), c;
        });
        return r.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : r.thrown ? void 0 : (r.error && this.setLookaheadState(r.failState), this.shouldParseAsyncArrowReturnType = r.node, !this.canInsertSemicolon() && this.eat(h.arrow));
      }, l.parseSubscriptAsyncArrow = function(i, r, n, c) {
        var f = this.startNodeAt(i, r);
        return f.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(f, n, !0, c);
      }, l.parseExprList = function(i, r, n, c) {
        for (var f = [], m = !0; !this.eat(i); ) {
          if (m) m = !1;
          else if (this.expect(h.comma), r && this.afterTrailingComma(i)) break;
          var y = void 0;
          n && this.type === h.comma ? y = null : this.type === h.ellipsis ? (y = this.parseSpread(c), c && this.type === h.comma && c.trailingComma < 0 && (c.trailingComma = this.start)) : y = this.parseMaybeAssign(!1, c, this.parseParenItem), f.push(y);
        }
        return f;
      }, l.parseSubscript = function(i, r, n, c, f, m, y) {
        var x = this, b = m;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(h.prefix)) {
          this.exprAllowed = !1, this.next();
          var S = this.startNodeAt(r, n);
          return S.expression = i, i = this.finishNode(S, "TSNonNullExpression");
        }
        var I = !1;
        if (this.match(h.questionDot) && this.lookaheadCharCode() === 60) {
          if (c) return i;
          i.optional = !0, b = I = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(h.bitShift)) {
          var R, A = this.tsTryParseAndCatch(function() {
            if (!c && x.atPossibleAsyncArrow(i)) {
              var Ee = x.tsTryParseGenericAsyncArrowFunction(r, n, y);
              if (Ee) return i = Ee;
            }
            var Kt = x.tsParseTypeArgumentsInExpression();
            if (!Kt) return i;
            if (I && !x.match(h.parenL)) return R = x.curPosition(), i;
            if (Ai(x.type) || x.type === h.backQuote) {
              var we = x.parseTaggedTemplateExpression(i, r, n, b);
              return we.typeParameters = Kt, we;
            }
            if (!c && x.eat(h.parenL)) {
              var Ie = new Mt(), At = x.startNodeAt(r, n);
              return At.callee = i, At.arguments = x.parseExprList(h.parenR, x.options.ecmaVersion >= 8, !1, Ie), x.tsCheckForInvalidTypeCasts(At.arguments), At.typeParameters = Kt, b && (At.optional = I), x.checkExpressionErrors(Ie, !0), i = x.finishNode(At, "CallExpression");
            }
            var oe = x.type;
            if (!(x.tsMatchRightRelational() || oe === h.bitShift || oe !== h.parenL && (Ne = oe, !!Ne.startsExpr) && !x.hasPrecedingLineBreak())) {
              var Ne, he = x.startNodeAt(r, n);
              return he.expression = i, he.typeParameters = Kt, x.finishNode(he, "TSInstantiationExpression");
            }
          });
          if (R && this.unexpected(R), A) return A.type === "TSInstantiationExpression" && (this.match(h.dot) || this.match(h.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, w.InvalidPropertyAccessAfterInstantiationExpression), i = A;
        }
        var W = this.options.ecmaVersion >= 11, z = W && this.eat(h.questionDot);
        c && z && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var K = this.eat(h.bracketL);
        if (K || z && this.type !== h.parenL && this.type !== h.backQuote || this.eat(h.dot)) {
          var $ = this.startNodeAt(r, n);
          $.object = i, K ? ($.property = this.parseExpression(), this.expect(h.bracketR)) : $.property = this.type === h.privateId && i.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), $.computed = !!K, W && ($.optional = z), i = this.finishNode($, "MemberExpression");
        } else if (!c && this.eat(h.parenL)) {
          var at = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var gt = new Mt(), Lt = this.yieldPos, Ot = this.awaitPos, bt = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var Ae = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1, gt);
          if (f && !z && this.shouldParseAsyncArrow()) this.checkPatternErrors(gt, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = Lt, this.awaitPos = Ot, this.awaitIdentPos = bt, i = this.parseSubscriptAsyncArrow(r, n, Ae, y);
          else {
            this.checkExpressionErrors(gt, !0), this.yieldPos = Lt || this.yieldPos, this.awaitPos = Ot || this.awaitPos, this.awaitIdentPos = bt || this.awaitIdentPos;
            var Wt = this.startNodeAt(r, n);
            Wt.callee = i, Wt.arguments = Ae, W && (Wt.optional = z), i = this.finishNode(Wt, "CallExpression");
          }
          this.maybeInArrowParameters = at;
        } else if (this.type === h.backQuote) {
          (z || b) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var ne = this.startNodeAt(r, n);
          ne.tag = i, ne.quasi = this.parseTemplate({ isTagged: !0 }), i = this.finishNode(ne, "TaggedTemplateExpression");
        }
        return i;
      }, l.parseGetterSetter = function(i) {
        i.kind = i.key.name, this.parsePropertyName(i), i.value = this.parseMethod(!1);
        var r = i.kind === "get" ? 0 : 1, n = i.value.params[0], c = n && this.isThisParam(n);
        i.value.params.length !== (r = c ? r + 1 : r) ? this.raiseRecoverable(i.value.start, i.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : i.kind === "set" && i.value.params[0].type === "RestElement" && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params");
      }, l.parseProperty = function(i, r) {
        if (!i) {
          var n = [];
          if (this.match(_.at)) for (; this.match(_.at); ) n.push(this.parseDecorator());
          var c = P.prototype.parseProperty.call(this, i, r);
          return c.type === "SpreadElement" && n.length && this.raise(c.start, "Decorators can't be used with SpreadElement"), n.length && (c.decorators = n, n = []), c;
        }
        return P.prototype.parseProperty.call(this, i, r);
      }, l.parseCatchClauseParam = function() {
        var i = this.parseBindingAtom(), r = i.type === "Identifier";
        this.enterScope(r ? 32 : 0), this.checkLValPattern(i, r ? 4 : 2);
        var n = this.tsTryParseTypeAnnotation();
        return n && (i.typeAnnotation = n, this.resetEndLocation(i)), this.expect(h.parenR), i;
      }, l.parseClass = function(i, r) {
        var n = this.inAbstractClass;
        this.inAbstractClass = !!i.abstract;
        try {
          this.next(), this.takeDecorators(i);
          var c = this.strict;
          this.strict = !0, this.parseClassId(i, r), this.parseClassSuper(i);
          var f = this.enterClassBody(), m = this.startNode(), y = !1;
          m.body = [];
          var x = [];
          for (this.expect(h.braceL); this.type !== h.braceR; ) if (this.match(_.at)) x.push(this.parseDecorator());
          else {
            var b = this.parseClassElement(i.superClass !== null);
            x.length && (b.decorators = x, this.resetStartLocationFromNode(b, x[0]), x = []), b && (m.body.push(b), b.type === "MethodDefinition" && b.kind === "constructor" && b.value.type === "FunctionExpression" ? (y && this.raiseRecoverable(b.start, "Duplicate constructor in the same class"), y = !0, b.decorators && b.decorators.length > 0 && this.raise(b.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : b.key && b.key.type === "PrivateIdentifier" && ks(f, b) && this.raiseRecoverable(b.key.start, "Identifier '#" + b.key.name + "' has already been declared"));
          }
          return this.strict = c, this.next(), x.length && this.raise(this.start, "Decorators must be attached to a class element."), i.body = this.finishNode(m, "ClassBody"), this.exitClassBody(), this.finishNode(i, r ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = n;
        }
      }, l.parseClassFunctionParams = function() {
        var i = this.tsTryParseTypeParameters(this.tsParseConstModifier), r = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return i && (r.typeParameters = i), r;
      }, l.parseMethod = function(i, r, n, c, f) {
        var m = this.startNode(), y = this.yieldPos, x = this.awaitPos, b = this.awaitIdentPos;
        if (this.initFunction(m), this.options.ecmaVersion >= 6 && (m.generator = i), this.options.ecmaVersion >= 8 && (m.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | fe(r, m.generator) | (n ? 128 : 0)), this.expect(h.parenL), m.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(m, !1, !0, !1, { isClassMethod: c }), this.yieldPos = y, this.awaitPos = x, this.awaitIdentPos = b, f && f.abstract && m.body) {
          var S = f.key;
          this.raise(f.start, w.AbstractMethodHasImplementation({ methodName: S.type !== "Identifier" || f.computed ? "[" + this.input.slice(S.start, S.end) + "]" : S.name }));
        }
        return this.finishNode(m, "FunctionExpression");
      }, st.parse = function(i, r) {
        if (r.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        r.locations = !0;
        var n = new this(r, i);
        return a && (n.isAmbientContext = !0), n.parse();
      }, st.parseExpressionAt = function(i, r, n) {
        if (n.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        n.locations = !0;
        var c = new this(n, i, r);
        return a && (c.isAmbientContext = !0), c.nextToken(), c.parseExpression();
      }, l.parseImportSpecifier = function() {
        if (this.ts_isContextual(_.type)) {
          var i = this.startNode();
          return i.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(i, !0, this.importOrExportOuterKind === "type"), this.finishNode(i, "ImportSpecifier");
        }
        var r = P.prototype.parseImportSpecifier.call(this);
        return r.importKind = "value", r;
      }, l.parseExportSpecifier = function(i) {
        var r = this.ts_isContextual(_.type);
        if (!this.match(h.string) && r) {
          var n = this.startNode();
          return n.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(n, !1, this.importOrExportOuterKind === "type"), this.finishNode(n, "ExportSpecifier"), this.checkExport(i, n.exported, n.exported.start), n;
        }
        var c = P.prototype.parseExportSpecifier.call(this, i);
        return c.exportKind = "value", c;
      }, l.parseTypeOnlyImportExportSpecifier = function(i, r, n) {
        var c, f = r ? "imported" : "local", m = r ? "local" : "exported", y = i[f], x = !1, b = !0, S = y.start;
        if (this.isContextual("as")) {
          var I = this.parseIdent();
          if (this.isContextual("as")) {
            var R = this.parseIdent();
            zt(this.type) ? (x = !0, y = I, c = r ? this.parseIdent() : this.parseModuleExportName(), b = !1) : (c = R, b = !1);
          } else zt(this.type) ? (b = !1, c = r ? this.parseIdent() : this.parseModuleExportName()) : (x = !0, y = I);
        } else zt(this.type) && (x = !0, r ? (y = P.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(y)) : y = this.parseModuleExportName());
        x && n && this.raise(S, r ? w.TypeModifierIsUsedInTypeImports : w.TypeModifierIsUsedInTypeExports), i[f] = y, i[m] = c, i[r ? "importKind" : "exportKind"] = x ? "type" : "value", b && this.eatContextual("as") && (i[m] = r ? this.parseIdent() : this.parseModuleExportName()), i[m] || (i[m] = this.copyNode(i[f])), r && this.checkLValSimple(i[m], 2);
      }, l.raiseCommonCheck = function(i, r, n) {
        return r === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(h.comma) && this.lookaheadCharCode() === 41 ? void this.next() : P.prototype.raise.call(this, i, r) : n ? P.prototype.raiseRecoverable.call(this, i, r) : P.prototype.raise.call(this, i, r);
      }, l.raiseRecoverable = function(i, r) {
        return this.raiseCommonCheck(i, r, !0);
      }, l.raise = function(i, r) {
        return this.raiseCommonCheck(i, r, !0);
      }, l.updateContext = function(i) {
        var r = this.type;
        if (r == h.braceL) {
          var n = this.curContext();
          n == it.tc_oTag ? this.context.push(U.b_expr) : n == it.tc_expr ? this.context.push(U.b_tmpl) : P.prototype.updateContext.call(this, i), this.exprAllowed = !0;
        } else {
          if (r !== h.slash || i !== _.jsxTagStart) return P.prototype.updateContext.call(this, i);
          this.context.length -= 2, this.context.push(it.tc_cTag), this.exprAllowed = !1;
        }
      }, l.jsx_parseOpeningElementAt = function(i, r) {
        var n = this, c = this.startNodeAt(i, r), f = this.jsx_parseElementName();
        if (f && (c.name = f), this.match(h.relational) || this.match(h.bitShift)) {
          var m = this.tsTryParseAndCatch(function() {
            return n.tsParseTypeArgumentsInExpression();
          });
          m && (c.typeParameters = m);
        }
        for (c.attributes = []; this.type !== h.slash && this.type !== _.jsxTagEnd; ) c.attributes.push(this.jsx_parseAttribute());
        return c.selfClosing = this.eat(h.slash), this.expect(_.jsxTagEnd), this.finishNode(c, f ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, l.enterScope = function(i) {
        i === Rt && this.importsStack.push([]), P.prototype.enterScope.call(this, i);
        var r = P.prototype.currentScope.call(this);
        r.types = [], r.enums = [], r.constEnums = [], r.classes = [], r.exportOnlyBindings = [];
      }, l.exitScope = function() {
        P.prototype.currentScope.call(this).flags === Rt && this.importsStack.pop(), P.prototype.exitScope.call(this);
      }, l.hasImport = function(i, r) {
        var n = this.importsStack.length;
        if (this.importsStack[n - 1].indexOf(i) > -1) return !0;
        if (!r && n > 1) {
          for (var c = 0; c < n - 1; c++) if (this.importsStack[c].indexOf(i) > -1) return !0;
        }
        return !1;
      }, l.maybeExportDefined = function(i, r) {
        this.inModule && 1 & i.flags && this.undefinedExports.delete(r);
      }, l.isRedeclaredInScope = function(i, r, n) {
        return !!(0 & n) && (2 & n ? i.lexical.indexOf(r) > -1 || i.functions.indexOf(r) > -1 || i.var.indexOf(r) > -1 : 3 & n ? i.lexical.indexOf(r) > -1 || !P.prototype.treatFunctionsAsVarInScope.call(this, i) && i.var.indexOf(r) > -1 : i.lexical.indexOf(r) > -1 && !(32 & i.flags && i.lexical[0] === r) || !this.treatFunctionsAsVarInScope(i) && i.functions.indexOf(r) > -1);
      }, l.checkRedeclarationInScope = function(i, r, n, c) {
        this.isRedeclaredInScope(i, r, n) && this.raise(c, "Identifier '" + r + "' has already been declared.");
      }, l.declareName = function(i, r, n) {
        if (4096 & r) return this.hasImport(i, !0) && this.raise(n, "Identifier '" + i + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(i);
        var c = this.currentScope();
        if (1024 & r) return this.maybeExportDefined(c, i), void c.exportOnlyBindings.push(i);
        P.prototype.declareName.call(this, i, r, n), 0 & r && (0 & r || (this.checkRedeclarationInScope(c, i, r, n), this.maybeExportDefined(c, i)), c.types.push(i)), 256 & r && c.enums.push(i), 512 & r && c.constEnums.push(i), 128 & r && c.classes.push(i);
      }, l.checkLocalExport = function(i) {
        var r = i.name;
        if (!this.hasImport(r)) {
          for (var n = this.scopeStack.length - 1; n >= 0; n--) {
            var c = this.scopeStack[n];
            if (c.types.indexOf(r) > -1 || c.exportOnlyBindings.indexOf(r) > -1) return;
          }
          P.prototype.checkLocalExport.call(this, i);
        }
      }, Y = st, B = [{ key: "acornTypeScript", get: function() {
        return g;
      } }], (G = [{ key: "acornTypeScript", get: function() {
        return g;
      } }]) && De(Y.prototype, G), B && De(Y, B), Object.defineProperty(Y, "prototype", { writable: !1 }), st;
    })(d);
    return Ni;
  };
}
const Os = ["createObject", "dropObject", "removeRecords", "upsertRecords"], Rs = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], Ft = Oi(_i);
async function Bs() {
  try {
    console.info("🚀 Building configuration...");
    const t = JSON.parse(await D.readFile("package.json", "utf8")), e = JSON.parse(await D.readFile("config.json", "utf8"));
    t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), await D.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (t) {
    console.error("❌ Error building configuration.", t);
  }
}
async function js(t) {
  try {
    console.info(`🚀 Building public directory index for identifier '${t}'...`);
    const e = {};
    async function s(o, p) {
      console.info(`⚙️ Processing directory '${o}'...`);
      const d = [], v = o.slice(`public/${t}`.length);
      e[v === "" ? "/" : v] = d;
      for (const g of p) {
        const h = `${o}/${g}`;
        try {
          const C = await D.stat(h);
          if (C.isDirectory()) {
            const N = await D.readdir(h), L = { childCount: N.length, name: g, typeId: "folder" };
            d.push(L), await s(h, N);
          } else {
            const N = { id: Li(), lastModifiedAt: C.mtimeMs, name: g, size: C.size, typeId: "object" };
            d.push(N);
          }
        } catch (C) {
          throw new Error(`Unable to get information for '${g}' in 'buildPublicDirectoryIndex'. ${String(C)}`);
        }
      }
      d.sort((g, h) => {
        const C = g.typeId.localeCompare(h.typeId);
        return C === 0 ? g.name.localeCompare(h.name) : C;
      });
    }
    const a = await D.readdir(`public/${t}`);
    await s(`public/${t}`, a), await D.writeFile(`./public/${t}Index.json`, JSON.stringify(e), "utf8"), console.info("✅ Public directory index built.");
  } catch (e) {
    console.error("❌ Error building public directory index.", e);
  }
}
async function Us() {
  try {
    console.info("🚀 Building connector configuration...");
    const t = JSON.parse(await D.readFile("package.json", "utf8")), e = JSON.parse(await D.readFile("config.json", "utf8")), s = await D.readFile("src/index.ts", "utf8"), o = J.extend(Ls()).parse(s, {
      ecmaVersion: "latest",
      sourceType: "module",
      locations: !0
    }), p = /* @__PURE__ */ new Set();
    Ri(o, {
      FunctionDeclaration(L) {
        L.id?.name && p.add(L.id.name);
      },
      MethodDefinition(L) {
        const j = L.key?.name, U = L.key?.type === "PrivateIdentifier";
        j && !U && !(j === "constructor") && p.add(j);
      },
      VariableDeclarator(L) {
        const j = L.id?.name, U = L.init;
        j && U && (U.type === "ArrowFunctionExpression" || U.type === "FunctionExpression") && p.add(j);
      },
      PropertyDefinition(L) {
        const j = L.key?.name, U = L.key?.type === "PrivateIdentifier", X = L.value?.type === "ArrowFunctionExpression" || L.value?.type === "FunctionExpression";
        j && !U && X && p.add(j);
      }
    }), console.log(`Extracted ${p.size} functions:`, Array.from(p));
    let d = !1, v = !1;
    const g = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, h = [...s.matchAll(g)].filter((L) => L[1] == null && L[2] !== "constructor"), C = [];
    for (const L of h) {
      const j = L[2];
      C.push(j), Os.includes(j) && (d = !0), Rs.includes(j) && (v = !0);
    }
    C.length > 0 ? console.info(`ℹ️  Implements ${C.length} operations.`) : console.warn("⚠️  Implements no operations.");
    let N;
    v && d ? N = "bidirectional" : v ? N = "source" : d ? N = "destination" : N = "unknown", N === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports ${N} usage.`), t.name != null && (e.id = t.name), e.operations = C, e.usageId = N, t.version != null && (e.version = t.version), await D.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (t) {
    console.error("❌ Error building connector configuration.", t);
  }
}
async function qs() {
  try {
    console.info("🚀 Building context configuration...");
    const t = JSON.parse(await D.readFile("package.json", "utf8")), e = JSON.parse(await D.readFile("config.json", "utf8")), s = await D.readFile("src/index.ts", "utf8"), a = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, o = [...s.matchAll(a)].filter((p) => p[1] == null && p[2] !== "constructor").map((p) => p[2]);
    t.name != null && (e.id = t.name), e.operations = o, t.version != null && (e.version = t.version), await D.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function Hs() {
  try {
    console.info("🚀 Building presenter configuration...");
    const t = JSON.parse(await D.readFile("package.json", "utf8")), e = JSON.parse(await D.readFile("config.json", "utf8")), s = await D.readFile("src/index.ts", "utf8"), a = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, o = [...s.matchAll(a)].filter((p) => p[1] == null && p[2] !== "constructor").map((p) => p[2]);
    t.name != null && (e.id = t.name), e.operations = o, t.version != null && (e.version = t.version), await D.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function zs(t = "./") {
  try {
    console.info("🚀 Bumping version...");
    const e = JSON.parse(await D.readFile(`${t}package.json`, "utf8"));
    if (e.version == null)
      e.version = "0.0.001", await D.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${e.version}.`);
    else {
      const s = e.version, a = e.version.split(".");
      e.version = `${a[0]}.${a[1]}.${Number(a[2]) + 1}`, await D.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${s} to ${e.version}.`);
    }
  } catch (e) {
    console.error("❌ Error bumping package version.", e);
  }
}
function Ws(t) {
  console.error(`❌ ${t} script not implemented.`);
}
async function Ks() {
  const t = "<!-- DEPENDENCY_LICENSES_START -->", e = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const s = (await D.readFile("./licenses.md", "utf8")).trim(), a = await D.readFile("./README.md", "utf8"), o = a.indexOf(t), p = a.indexOf(e);
    (o === -1 || p === -1) && (console.error("❌ Dependency license markers not found in readme file."), process.exit(1));
    const d = a.substring(0, o + t.length) + `
` + s + `
` + a.substring(p);
    await D.writeFile("README.md", d, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (s) {
    console.error("❌ Error updating readme file.", s), process.exit(1);
  }
}
async function Js() {
  const t = "<!-- OWASP_BADGE_START -->", e = "<!-- OWASP_BADGE_END -->";
  try {
    const s = JSON.parse(await D.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), a = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const j of s.dependencies)
      if (j.vulnerabilities != null)
        for (const U of j.vulnerabilities) {
          const X = U.severity?.toLowerCase() ?? "unknown";
          X in a ? a[X]++ : a.unknown++;
        }
    const o = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, p = JSON.parse(await D.readFile("config.json", "utf8")), d = [];
    if (Object.values(a).reduce((j, U) => j + U, 0) === 0)
      console.info("✅ No vulnerabilities found."), d.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${p.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [j, U] of Object.entries(a)) {
        const X = o[j];
        if (console.warn(`⚠️  ${U} ${X.label} vulnerability(ies) found.`), U === 0) continue;
        const _ = `https://img.shields.io/badge/OWASP-${U}%20${X.label}-${X.color}`;
        d.push(`[![OWASP](${_})](https://data-positioning.github.io/${p.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const g = await D.readFile("./README.md", "utf8"), h = g.indexOf(t), C = g.indexOf(e);
    (h === -1 || C === -1) && (console.error("❌ OWASP badge markers not found in README.md."), process.exit(1));
    const N = d.join(" "), L = g.substring(0, h + t.length) + N + g.substring(C);
    await D.writeFile("README.md", L, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (s) {
    console.error("❌ Error updating README with OWASP badges:", s), process.exit(1);
  }
}
async function Gs() {
  try {
    console.info("🚀 Sending deployment notice...");
    const t = JSON.parse(await D.readFile("config.json", "utf8")), e = {
      body: JSON.stringify(t),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, s = await fetch(`https://api.datapos.app/states/${t.id}`, e);
    if (!s.ok) throw new Error(await s.text());
    console.info("✅ Deployment notice sent.");
  } catch (t) {
    console.error("❌ Error sending deployment notice.", t);
  }
}
async function $s() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const t = JSON.parse(await D.readFile("package.json", "utf8"));
    await Ft("git add ."), await Ft(`git commit -m "v${t.version}"`), await Ft("git push origin main:main"), console.info(`✅ Synchronised version ${t.version} with GitHub.`);
  } catch (t) {
    console.error("❌ Error synchronising with GitHub.", t);
  }
}
async function Xs(t, e) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function s(o, p, d) {
      for (const v of d) {
        const g = `${o}/${v}`, h = `${p}/${v}`;
        if ((await D.stat(g)).isDirectory()) {
          const N = await D.readdir(g);
          await s(g, h, N);
        } else {
          console.info(`⚙️ Uploading '${o}/${v}'...`);
          const N = `wrangler r2 object put "datapos-sample-data-eu/${p}/${v}" --file="${o}/${v}" --jurisdiction=eu --remote`, L = await Ft(N);
          if (L.stderr) throw new Error(L.stderr);
        }
      }
    }
    const a = await D.readdir(`${t}/${e}/`);
    await s(`${t}/${e}`, e, a), console.info("✅ Directory uploaded to R2.");
  } catch (s) {
    console.error("❌ Error uploading directory to R2.", s);
  }
}
async function Qs() {
  try {
    console.info("🚀 Uploading module configuration....");
    const t = JSON.parse(await D.readFile("config.json", "utf8")), e = t.id, s = {
      body: JSON.stringify(t),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, a = await fetch(`https://api.datapos.app/states/${e}`, s);
    if (!a.ok) throw new Error(await a.text());
    console.info("✅ Module configuration uploaded.");
  } catch (t) {
    console.error("❌ Error uploading module configuration.", t);
  }
}
async function Ys(t) {
  try {
    console.info("🚀 Uploading module to R2...");
    const s = `v${JSON.parse(await D.readFile("package.json", "utf8")).version}`;
    async function a(o, p = "") {
      const d = await D.readdir(o, { withFileTypes: !0 });
      for (const v of d) {
        const g = `${o}/${v.name}`, h = p ? `${p}/${v.name}` : v.name;
        if (!v.isDirectory()) {
          const C = `${t}_${s}/${h}`.replace(/\\/g, "/"), N = v.name.endsWith(".js") ? "application/javascript" : v.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${h}' → '${C}'...`);
          const { stderr: L } = await Ft(`wrangler r2 object put "${C}" --file="${g}" --content-type ${N} --jurisdiction=eu --remote`);
          if (L) throw new Error(L);
        }
      }
    }
    await a("dist"), console.info("✅ Module uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading module to R2.", e);
  }
}
export {
  Bs as buildConfig,
  Us as buildConnectorConfig,
  qs as buildContextConfig,
  Hs as buildPresenterConfig,
  js as buildPublicDirectoryIndex,
  zs as bumpVersion,
  Ws as echoScriptNotImplemented,
  Ks as insertLicensesIntoReadme,
  Js as insertOWASPDependencyCheckBadgeIntoReadme,
  Gs as sendDeploymentNotice,
  $s as syncWithGitHub,
  Xs as uploadDirectoryToR2,
  Qs as uploadModuleConfigToDO,
  Ys as uploadModuleToR2
};
