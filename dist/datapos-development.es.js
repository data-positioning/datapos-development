import { exec as Mn } from "node:child_process";
import { promises as S } from "node:fs";
import { nanoid as $n } from "nanoid";
import { promisify as Xn } from "node:util";
function Hn(n, t, e, u, o) {
  e || (e = k), (function i(l, f, c) {
    var g = c || l.type;
    e[g](l, f, i), t[g] && t[g](l, f);
  })(n, u, o);
}
function U2(n, t, e) {
  e(n, t);
}
function p(n, t, e) {
}
var k = {};
k.Program = k.BlockStatement = k.StaticBlock = function(n, t, e) {
  for (var u = 0, o = n.body; u < o.length; u += 1) {
    var i = o[u];
    e(i, t, "Statement");
  }
};
k.Statement = U2;
k.EmptyStatement = p;
k.ExpressionStatement = k.ParenthesizedExpression = k.ChainExpression = function(n, t, e) {
  return e(n.expression, t, "Expression");
};
k.IfStatement = function(n, t, e) {
  e(n.test, t, "Expression"), e(n.consequent, t, "Statement"), n.alternate && e(n.alternate, t, "Statement");
};
k.LabeledStatement = function(n, t, e) {
  return e(n.body, t, "Statement");
};
k.BreakStatement = k.ContinueStatement = p;
k.WithStatement = function(n, t, e) {
  e(n.object, t, "Expression"), e(n.body, t, "Statement");
};
k.SwitchStatement = function(n, t, e) {
  e(n.discriminant, t, "Expression");
  for (var u = 0, o = n.cases; u < o.length; u += 1) {
    var i = o[u];
    e(i, t);
  }
};
k.SwitchCase = function(n, t, e) {
  n.test && e(n.test, t, "Expression");
  for (var u = 0, o = n.consequent; u < o.length; u += 1) {
    var i = o[u];
    e(i, t, "Statement");
  }
};
k.ReturnStatement = k.YieldExpression = k.AwaitExpression = function(n, t, e) {
  n.argument && e(n.argument, t, "Expression");
};
k.ThrowStatement = k.SpreadElement = function(n, t, e) {
  return e(n.argument, t, "Expression");
};
k.TryStatement = function(n, t, e) {
  e(n.block, t, "Statement"), n.handler && e(n.handler, t), n.finalizer && e(n.finalizer, t, "Statement");
};
k.CatchClause = function(n, t, e) {
  n.param && e(n.param, t, "Pattern"), e(n.body, t, "Statement");
};
k.WhileStatement = k.DoWhileStatement = function(n, t, e) {
  e(n.test, t, "Expression"), e(n.body, t, "Statement");
};
k.ForStatement = function(n, t, e) {
  n.init && e(n.init, t, "ForInit"), n.test && e(n.test, t, "Expression"), n.update && e(n.update, t, "Expression"), e(n.body, t, "Statement");
};
k.ForInStatement = k.ForOfStatement = function(n, t, e) {
  e(n.left, t, "ForInit"), e(n.right, t, "Expression"), e(n.body, t, "Statement");
};
k.ForInit = function(n, t, e) {
  n.type === "VariableDeclaration" ? e(n, t) : e(n, t, "Expression");
};
k.DebuggerStatement = p;
k.FunctionDeclaration = function(n, t, e) {
  return e(n, t, "Function");
};
k.VariableDeclaration = function(n, t, e) {
  for (var u = 0, o = n.declarations; u < o.length; u += 1) {
    var i = o[u];
    e(i, t);
  }
};
k.VariableDeclarator = function(n, t, e) {
  e(n.id, t, "Pattern"), n.init && e(n.init, t, "Expression");
};
k.Function = function(n, t, e) {
  n.id && e(n.id, t, "Pattern");
  for (var u = 0, o = n.params; u < o.length; u += 1) {
    var i = o[u];
    e(i, t, "Pattern");
  }
  e(n.body, t, n.expression ? "Expression" : "Statement");
};
k.Pattern = function(n, t, e) {
  n.type === "Identifier" ? e(n, t, "VariablePattern") : n.type === "MemberExpression" ? e(n, t, "MemberPattern") : e(n, t);
};
k.VariablePattern = p;
k.MemberPattern = U2;
k.RestElement = function(n, t, e) {
  return e(n.argument, t, "Pattern");
};
k.ArrayPattern = function(n, t, e) {
  for (var u = 0, o = n.elements; u < o.length; u += 1) {
    var i = o[u];
    i && e(i, t, "Pattern");
  }
};
k.ObjectPattern = function(n, t, e) {
  for (var u = 0, o = n.properties; u < o.length; u += 1) {
    var i = o[u];
    i.type === "Property" ? (i.computed && e(i.key, t, "Expression"), e(i.value, t, "Pattern")) : i.type === "RestElement" && e(i.argument, t, "Pattern");
  }
};
k.Expression = U2;
k.ThisExpression = k.Super = k.MetaProperty = p;
k.ArrayExpression = function(n, t, e) {
  for (var u = 0, o = n.elements; u < o.length; u += 1) {
    var i = o[u];
    i && e(i, t, "Expression");
  }
};
k.ObjectExpression = function(n, t, e) {
  for (var u = 0, o = n.properties; u < o.length; u += 1) {
    var i = o[u];
    e(i, t);
  }
};
k.FunctionExpression = k.ArrowFunctionExpression = k.FunctionDeclaration;
k.SequenceExpression = function(n, t, e) {
  for (var u = 0, o = n.expressions; u < o.length; u += 1) {
    var i = o[u];
    e(i, t, "Expression");
  }
};
k.TemplateLiteral = function(n, t, e) {
  for (var u = 0, o = n.quasis; u < o.length; u += 1) {
    var i = o[u];
    e(i, t);
  }
  for (var l = 0, f = n.expressions; l < f.length; l += 1) {
    var c = f[l];
    e(c, t, "Expression");
  }
};
k.TemplateElement = p;
k.UnaryExpression = k.UpdateExpression = function(n, t, e) {
  e(n.argument, t, "Expression");
};
k.BinaryExpression = k.LogicalExpression = function(n, t, e) {
  e(n.left, t, "Expression"), e(n.right, t, "Expression");
};
k.AssignmentExpression = k.AssignmentPattern = function(n, t, e) {
  e(n.left, t, "Pattern"), e(n.right, t, "Expression");
};
k.ConditionalExpression = function(n, t, e) {
  e(n.test, t, "Expression"), e(n.consequent, t, "Expression"), e(n.alternate, t, "Expression");
};
k.NewExpression = k.CallExpression = function(n, t, e) {
  if (e(n.callee, t, "Expression"), n.arguments)
    for (var u = 0, o = n.arguments; u < o.length; u += 1) {
      var i = o[u];
      e(i, t, "Expression");
    }
};
k.MemberExpression = function(n, t, e) {
  e(n.object, t, "Expression"), n.computed && e(n.property, t, "Expression");
};
k.ExportNamedDeclaration = k.ExportDefaultDeclaration = function(n, t, e) {
  n.declaration && e(n.declaration, t, n.type === "ExportNamedDeclaration" || n.declaration.id ? "Statement" : "Expression"), n.source && e(n.source, t, "Expression");
};
k.ExportAllDeclaration = function(n, t, e) {
  n.exported && e(n.exported, t), e(n.source, t, "Expression");
};
k.ImportDeclaration = function(n, t, e) {
  for (var u = 0, o = n.specifiers; u < o.length; u += 1) {
    var i = o[u];
    e(i, t);
  }
  e(n.source, t, "Expression");
};
k.ImportExpression = function(n, t, e) {
  e(n.source, t, "Expression");
};
k.ImportSpecifier = k.ImportDefaultSpecifier = k.ImportNamespaceSpecifier = k.Identifier = k.PrivateIdentifier = k.Literal = p;
k.TaggedTemplateExpression = function(n, t, e) {
  e(n.tag, t, "Expression"), e(n.quasi, t, "Expression");
};
k.ClassDeclaration = k.ClassExpression = function(n, t, e) {
  return e(n, t, "Class");
};
k.Class = function(n, t, e) {
  n.id && e(n.id, t, "Pattern"), n.superClass && e(n.superClass, t, "Expression"), e(n.body, t);
};
k.ClassBody = function(n, t, e) {
  for (var u = 0, o = n.body; u < o.length; u += 1) {
    var i = o[u];
    e(i, t);
  }
};
k.MethodDefinition = k.PropertyDefinition = k.Property = function(n, t, e) {
  n.computed && e(n.key, t, "Expression"), n.value && e(n.value, t, "Expression");
};
const cn = ((n, t) => {
  const e = new Uint32Array(69632);
  let u = 0, o = 0;
  for (; u < 2597; ) {
    const i = n[u++];
    if (i < 0)
      o -= i;
    else {
      let l = n[u++];
      i & 2 && (l = t[l]), i & 1 ? e.fill(l, o, o += n[u++]) : e[o++] = l;
    }
  }
  return e;
})([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 63, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 64, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 58, 2, 7, 2, 6, 0, 4286643967, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191, 0, 929054175, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1885355487, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 69, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 70, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 9, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2151677951, 2, 29, 2, 10, 0, 909311, 3, 0, 2, 0, 814743551, 2, 48, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 108, 2, 51, 2, 0, 2, 79, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 9, 2, 18, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 10, 2, 0, 2, 127, 0, 4294960127, 2, 9, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, 0, 12288, 2, 54, 0, 1048577, 2, 84, 2, 14, -1, 2, 14, 0, 131042, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 88, 2, 2, 0, -16, 2, 89, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 2, 18, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 2, 0, 0, 4351, 2, 0, 2, 10, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 10, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, 2, 25, 0, 1638399, 0, 57344, 2, 107, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 65, 2, 6, 2, 12, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 23, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 47, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 125, 0, 4227858432, 2, 20, 2, 43, 2, 36, 2, 17, 2, 37, 2, 17, 2, 124, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 145, 2, 0, 2, 56, 2, 55, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 59, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 133, 0, 4190109695, 2, 52, -2, 2, 134, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 66, 2, 17, 2, 0, 2, 42, -3, 2, 31, -2, 2, 0, 2, 45, 2, 57, 2, 44, 2, 45, 2, 135, 2, 46, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 47, 2, 138, 0, 33259519, 2, 23, 2, 7, 2, 48, -7, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 8323099, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 90, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2, 155, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 58, 2, 98, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 17, 2, 49, 2, 0, 2, 32, -14, 2, 17, 2, 32, -6, 2, 17, 2, 12, -6, 2, 8, 0, 3225419775, -7, 2, 156, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 59, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -22116, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 63, 2, 0, 2, 34, -1, 2, 17, 2, 64, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 65, 3, 0, 2, 0, 131135, 2, 96, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 65279, 2, 0, 2, 48, -1, 2, 97, 2, 66, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 68, 2, 67, 0, 33554435, 2, 131, 2, 68, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 67, -1, 0, 4294828e3, 0, 603979263, 0, 922746880, 0, 3, 0, 4294828001, 0, 602930687, 0, 1879048192, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 69, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 70, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 71, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 10, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 17, 2, 51, 2, 0, 2, 79, 2, 48, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 10, 0, 8160, -1, 2, 126, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776, 2, 9, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, -3, 2, 84, 2, 14, -3, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 88, 2, -17, 2, 89, 0, 524157950, 2, 4, 2, 0, 2, 90, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 25, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 0, 4294965179, 0, 7, 2, 0, 2, 10, 2, 93, 2, 10, -1, 0, 1761345536, 2, 96, 0, 4294901823, 2, 38, 2, 20, 2, 97, 2, 35, 2, 98, 0, 2080440287, 2, 0, 2, 34, 2, 154, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, -3, 2, 107, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 108, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 65, 2, 6, 2, 30, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 17, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 124, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 96, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 125, -1, 2, 20, 2, 43, 2, 37, 2, 17, 0, 3, 2, 17, 2, 124, 2, 21, 2, 126, 2, 127, -1, 0, 2490368, 2, 126, 2, 25, 2, 17, 2, 34, 2, 126, 2, 38, 0, 4294901904, 0, 4718591, 2, 126, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 68, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 49, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 18, -3, 3, 0, 2, 2, 54, 2, 133, 0, 2147549183, 0, 2, -2, 2, 134, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 17, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 57, 2, 49, 0, 1, 2, 135, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, 2, 17, 2, 7, -8, 2, 35, 0, 4294836212, 2, 10, -3, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 9, -55, 3, 0, 17, 2, 42, 2, 8, 2, 17, 2, 0, 2, 8, 2, 17, 2, 58, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 71, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 67583, -1, 2, 105, -2, 0, 8126475, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 2, 145, -187, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 2, 154, -57, 2, 8, 2, 155, -7, 2, 17, 2, 0, 2, 58, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 17, 2, 58, 2, 0, 2, 18, -14, 2, 17, 2, 18, -6, 2, 17, 0, 81919, -6, 2, 8, 0, 3223273399, -7, 2, 156, 3, 0, 6, 2, 124, -1, 3, 0, 2, 0, 2063, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -138, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -28252], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1073741823, 1048575, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 4294901760, 4095, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294770687, 67043583, 1023, 32767, 15, 2047999, 67043343, 67051519, 2147483648, 4294902e3, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 4294836224, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 252, 4294967288, 16777215, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4285526655, 4294966527, 4294705152, 4294966143, 64, 4294966719, 3774873592, 4194303999, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901761]), zn = (n) => (cn[(n >>> 5) + 0] >>> n & 31 & 1) !== 0, dn = (n) => (cn[(n >>> 5) + 34816] >>> n & 31 & 1) !== 0, B = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1032,
  0,
  0,
  2056,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  8192,
  0,
  3,
  0,
  0,
  8192,
  0,
  0,
  0,
  256,
  0,
  33024,
  0,
  0,
  242,
  242,
  114,
  114,
  114,
  114,
  114,
  114,
  594,
  594,
  0,
  0,
  16384,
  0,
  0,
  0,
  0,
  67,
  67,
  67,
  67,
  67,
  67,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  0,
  1,
  0,
  0,
  4099,
  0,
  71,
  71,
  71,
  71,
  71,
  71,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  16384,
  0,
  0,
  0,
  0
], Wn = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0
], sn = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0
];
function E2(n) {
  return n <= 127 ? Wn[n] > 0 : dn(n);
}
function b2(n) {
  return n <= 127 ? sn[n] > 0 : zn(n) || n === 8204 || n === 8205;
}
function a(n) {
  return n.column++, n.currentChar = n.source.charCodeAt(++n.index);
}
function J2(n) {
  const t = n.currentChar;
  if ((t & 64512) !== 55296)
    return 0;
  const e = n.source.charCodeAt(n.index + 1);
  return (e & 64512) !== 56320 ? 0 : 65536 + ((t & 1023) << 10) + (e & 1023);
}
function j2(n, t) {
  n.currentChar = n.source.charCodeAt(++n.index), n.flags |= 1, (t & 4) === 0 && (n.column = 0, n.line++);
}
function x(n) {
  n.flags |= 1, n.currentChar = n.source.charCodeAt(++n.index), n.column = 0, n.line++;
}
function _n(n) {
  return n === 160 || n === 65279 || n === 133 || n === 5760 || n >= 8192 && n <= 8203 || n === 8239 || n === 8287 || n === 12288 || n === 8201 || n === 65519;
}
function J(n) {
  return n < 65 ? n - 48 : n - 65 + 10 & 15;
}
function Yn(n) {
  switch (n) {
    case 134283266:
      return "NumericLiteral";
    case 134283267:
      return "StringLiteral";
    case 86021:
    case 86022:
      return "BooleanLiteral";
    case 86023:
      return "NullLiteral";
    case 65540:
      return "RegularExpression";
    case 67174408:
    case 67174409:
    case 131:
      return "TemplateLiteral";
    default:
      return (n & 143360) === 143360 ? "Identifier" : (n & 4096) === 4096 ? "Keyword" : "Punctuator";
  }
}
const gn = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
function Kn(n) {
  const { source: t } = n;
  n.currentChar === 35 && t.charCodeAt(n.index + 1) === 33 && (a(n), a(n), M2(n, t, 0, 4, n.tokenStart));
}
function nn(n, t, e, u, o, i) {
  return u & 2 && n.report(0), M2(n, t, e, o, i);
}
function M2(n, t, e, u, o) {
  const { index: i } = n;
  for (n.tokenIndex = n.index, n.tokenLine = n.line, n.tokenColumn = n.column; n.index < n.end; ) {
    if (B[n.currentChar] & 8) {
      const l = n.currentChar === 13;
      x(n), l && n.index < n.end && n.currentChar === 10 && (n.currentChar = t.charCodeAt(++n.index));
      break;
    } else if ((n.currentChar ^ 8232) <= 1) {
      x(n);
      break;
    }
    a(n), n.tokenIndex = n.index, n.tokenLine = n.line, n.tokenColumn = n.column;
  }
  if (n.options.onComment) {
    const l = {
      start: {
        line: o.line,
        column: o.column
      },
      end: {
        line: n.tokenLine,
        column: n.tokenColumn
      }
    };
    n.options.onComment(gn[u & 255], t.slice(i, n.tokenIndex), o.index, n.tokenIndex, l);
  }
  return e | 1;
}
function Zn(n, t, e) {
  const { index: u } = n;
  for (; n.index < n.end; )
    if (n.currentChar < 43) {
      let o = !1;
      for (; n.currentChar === 42; )
        if (o || (e &= -5, o = !0), a(n) === 47) {
          if (a(n), n.options.onComment) {
            const i = {
              start: {
                line: n.tokenLine,
                column: n.tokenColumn
              },
              end: {
                line: n.line,
                column: n.column
              }
            };
            n.options.onComment(gn[1], t.slice(u, n.index - 2), u - 2, n.index, i);
          }
          return n.tokenIndex = n.index, n.tokenLine = n.line, n.tokenColumn = n.column, e;
        }
      if (o)
        continue;
      B[n.currentChar] & 8 ? n.currentChar === 13 ? (e |= 5, x(n)) : (j2(n, e), e = e & -5 | 1) : a(n);
    } else (n.currentChar ^ 8232) <= 1 ? (e = e & -5 | 1, x(n)) : (e &= -5, a(n));
  n.report(18);
}
const Qn = {
  0: "Unexpected token",
  30: "Unexpected token: '%0'",
  1: "Octal escape sequences are not allowed in strict mode",
  2: "Octal escape sequences are not allowed in template strings",
  3: "\\8 and \\9 are not allowed in template strings",
  4: "Private identifier #%0 is not defined",
  5: "Illegal Unicode escape sequence",
  6: "Invalid code point %0",
  7: "Invalid hexadecimal escape sequence",
  9: "Octal literals are not allowed in strict mode",
  8: "Decimal integer literals with a leading zero are forbidden in strict mode",
  10: "Expected number in radix %0",
  151: "Invalid left-hand side assignment to a destructible right-hand side",
  11: "Non-number found after exponent indicator",
  12: "Invalid BigIntLiteral",
  13: "No identifiers allowed directly after numeric literal",
  14: "Escapes \\8 or \\9 are not syntactically valid escapes",
  15: "Escapes \\8 or \\9 are not allowed in strict mode",
  16: "Unterminated string literal",
  17: "Unterminated template literal",
  18: "Multiline comment was not closed properly",
  19: "The identifier contained dynamic unicode escape that was not closed",
  20: "Illegal character '%0'",
  21: "Missing hexadecimal digits",
  22: "Invalid implicit octal",
  23: "Invalid line break in string literal",
  24: "Only unicode escapes are legal in identifier names",
  25: "Expected '%0'",
  26: "Invalid left-hand side in assignment",
  27: "Invalid left-hand side in async arrow",
  28: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
  29: "Member access on super must be in a method",
  31: "Await expression not allowed in formal parameter",
  32: "Yield expression not allowed in formal parameter",
  95: "Unexpected token: 'escaped keyword'",
  33: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
  123: "Async functions can only be declared at the top level or inside a block",
  34: "Unterminated regular expression",
  35: "Unexpected regular expression flag",
  36: "Duplicate regular expression flag '%0'",
  37: "%0 functions must have exactly %1 argument%2",
  38: "Setter function argument must not be a rest parameter",
  39: "%0 declaration must have a name in this context",
  40: "Function name may not contain any reserved words or be eval or arguments in strict mode",
  41: "The rest operator is missing an argument",
  42: "A getter cannot be a generator",
  43: "A setter cannot be a generator",
  44: "A computed property name must be followed by a colon or paren",
  134: "Object literal keys that are strings or numbers must be a method or have a colon",
  46: "Found `* async x(){}` but this should be `async * x(){}`",
  45: "Getters and setters can not be generators",
  47: "'%0' can not be generator method",
  48: "No line break is allowed after '=>'",
  49: "The left-hand side of the arrow can only be destructed through assignment",
  50: "The binding declaration is not destructible",
  51: "Async arrow can not be followed by new expression",
  52: "Classes may not have a static property named 'prototype'",
  53: "Class constructor may not be a %0",
  54: "Duplicate constructor method in class",
  55: "Invalid increment/decrement operand",
  56: "Invalid use of `new` keyword on an increment/decrement expression",
  57: "`=>` is an invalid assignment target",
  58: "Rest element may not have a trailing comma",
  59: "Missing initializer in %0 declaration",
  60: "'for-%0' loop head declarations can not have an initializer",
  61: "Invalid left-hand side in for-%0 loop: Must have a single binding",
  62: "Invalid shorthand property initializer",
  63: "Property name __proto__ appears more than once in object literal",
  64: "Let is disallowed as a lexically bound name",
  65: "Invalid use of '%0' inside new expression",
  66: "Illegal 'use strict' directive in function with non-simple parameter list",
  67: 'Identifier "let" disallowed as left-hand side expression in strict mode',
  68: "Illegal continue statement",
  69: "Illegal break statement",
  70: "Cannot have `let[...]` as a var name in strict mode",
  71: "Invalid destructuring assignment target",
  72: "Rest parameter may not have a default initializer",
  73: "The rest argument must the be last parameter",
  74: "Invalid rest argument",
  76: "In strict mode code, functions can only be declared at top level or inside a block",
  77: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
  78: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
  79: "Class declaration can't appear in single-statement context",
  80: "Invalid left-hand side in for-%0",
  81: "Invalid assignment in for-%0",
  82: "for await (... of ...) is only valid in async functions and async generators",
  83: "The first token after the template expression should be a continuation of the template",
  85: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
  84: "`let \n [` is a restricted production at the start of a statement",
  86: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
  87: "Catch clause parameter does not support default values",
  88: "Missing catch or finally after try",
  89: "More than one default clause in switch statement",
  90: "Illegal newline after throw",
  91: "Strict mode code may not include a with statement",
  92: "Illegal return statement",
  93: "The left hand side of the for-header binding declaration is not destructible",
  94: "new.target only allowed within functions or static blocks",
  96: "'#' not followed by identifier",
  102: "Invalid keyword",
  101: "Can not use 'let' as a class name",
  100: "'A lexical declaration can't define a 'let' binding",
  99: "Can not use `let` as variable name in strict mode",
  97: "'%0' may not be used as an identifier in this context",
  98: "Await is only valid in async functions",
  103: "The %0 keyword can only be used with the module goal",
  104: "Unicode codepoint must not be greater than 0x10FFFF",
  105: "%0 source must be string",
  106: "Only a identifier or string can be used to indicate alias",
  107: "Only '*' or '{...}' can be imported after default",
  108: "Trailing decorator may be followed by method",
  109: "Decorators can't be used with a constructor",
  110: "Can not use `await` as identifier in module or async func",
  111: "Can not use `await` as identifier in module",
  112: "HTML comments are only allowed with web compatibility (Annex B)",
  113: "The identifier 'let' must not be in expression position in strict mode",
  114: "Cannot assign to `eval` and `arguments` in strict mode",
  115: "The left-hand side of a for-of loop may not start with 'let'",
  116: "Block body arrows can not be immediately invoked without a group",
  117: "Block body arrows can not be immediately accessed without a group",
  118: "Unexpected strict mode reserved word",
  119: "Unexpected eval or arguments in strict mode",
  120: "Decorators must not be followed by a semicolon",
  121: "Calling delete on expression not allowed in strict mode",
  122: "Pattern can not have a tail",
  124: "Can not have a `yield` expression on the left side of a ternary",
  125: "An arrow function can not have a postfix update operator",
  126: "Invalid object literal key character after generator star",
  127: "Private fields can not be deleted",
  129: "Classes may not have a field called constructor",
  128: "Classes may not have a private element named constructor",
  130: "A class field initializer or static block may not contain arguments",
  131: "Generators can only be declared at the top level or inside a block",
  132: "Async methods are a restricted production and cannot have a newline following it",
  133: "Unexpected character after object literal property name",
  135: "Invalid key token",
  136: "Label '%0' has already been declared",
  137: "continue statement must be nested within an iteration statement",
  138: "Undefined label '%0'",
  139: "Trailing comma is disallowed inside import(...) arguments",
  140: "Invalid binding in JSON import",
  141: "import() requires exactly one argument",
  142: "Cannot use new with import(...)",
  143: "... is not allowed in import()",
  144: "Expected '=>'",
  145: "Duplicate binding '%0'",
  146: "Duplicate private identifier #%0",
  147: "Cannot export a duplicate name '%0'",
  150: "Duplicate %0 for-binding",
  148: "Exported binding '%0' needs to refer to a top-level declared variable",
  149: "Unexpected private field",
  153: "Numeric separators are not allowed at the end of numeric literals",
  152: "Only one underscore is allowed as numeric separator",
  154: "JSX value should be either an expression or a quoted JSX text",
  155: "Expected corresponding JSX closing tag for %0",
  156: "Adjacent JSX elements must be wrapped in an enclosing tag",
  157: "JSX attributes must only be assigned a non-empty 'expression'",
  158: "'%0' has already been declared",
  159: "'%0' shadowed a catch clause binding",
  160: "Dot property must be an identifier",
  161: "Encountered invalid input after spread/rest argument",
  162: "Catch without try",
  163: "Finally without try",
  164: "Expected corresponding closing tag for JSX fragment",
  165: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
  166: "Invalid tagged template on optional chain",
  167: "Invalid optional chain from super property",
  168: "Invalid optional chain from new expression",
  169: 'Cannot use "import.meta" outside a module',
  170: "Leading decorators must be attached to a class declaration",
  171: "An export name cannot include a lone surrogate",
  172: "A string literal cannot be used as an exported binding without `from`",
  173: "Private fields can't be accessed on super",
  174: "The only valid meta property for import is 'import.meta'",
  175: "'import.meta' must not contain escaped characters",
  176: 'cannot use "await" as identifier inside an async function',
  177: 'cannot use "await" in static blocks'
};
class V extends SyntaxError {
  start;
  end;
  range;
  loc;
  description;
  constructor(t, e, u, ...o) {
    const i = Qn[u].replace(/%(\d+)/g, (f, c) => o[c]), l = "[" + t.line + ":" + t.column + "-" + e.line + ":" + e.column + "]: " + i;
    super(l), this.start = t.index, this.end = e.index, this.range = [t.index, e.index], this.loc = {
      start: { line: t.line, column: t.column },
      end: { line: e.line, column: e.column }
    }, this.description = i;
  }
}
function B2(n, t) {
  return Object.hasOwn(n, t) ? n[t] : void 0;
}
const F = [
  "end of source",
  "identifier",
  "number",
  "string",
  "regular expression",
  "false",
  "true",
  "null",
  "template continuation",
  "template tail",
  "=>",
  "(",
  "{",
  ".",
  "...",
  "}",
  ")",
  ";",
  ",",
  "[",
  "]",
  ":",
  "?",
  "'",
  '"',
  "++",
  "--",
  "=",
  "<<=",
  ">>=",
  ">>>=",
  "**=",
  "+=",
  "-=",
  "*=",
  "/=",
  "%=",
  "^=",
  "|=",
  "&=",
  "||=",
  "&&=",
  "??=",
  "typeof",
  "delete",
  "void",
  "!",
  "~",
  "+",
  "-",
  "in",
  "instanceof",
  "*",
  "%",
  "/",
  "**",
  "&&",
  "||",
  "===",
  "!==",
  "==",
  "!=",
  "<=",
  ">=",
  "<",
  ">",
  "<<",
  ">>",
  ">>>",
  "&",
  "|",
  "^",
  "var",
  "let",
  "const",
  "break",
  "case",
  "catch",
  "class",
  "continue",
  "debugger",
  "default",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "while",
  "with",
  "implements",
  "interface",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "yield",
  "as",
  "async",
  "await",
  "constructor",
  "get",
  "set",
  "accessor",
  "from",
  "of",
  "enum",
  "eval",
  "arguments",
  "escaped keyword",
  "escaped future reserved keyword",
  "reserved if strict",
  "#",
  "BigIntLiteral",
  "??",
  "?.",
  "WhiteSpace",
  "Illegal",
  "LineTerminator",
  "PrivateField",
  "Template",
  "@",
  "target",
  "meta",
  "LineFeed",
  "Escaped",
  "JSXText"
], an = {
  this: 86111,
  function: 86104,
  if: 20569,
  return: 20572,
  var: 86088,
  else: 20563,
  for: 20567,
  new: 86107,
  in: 8673330,
  typeof: 16863275,
  while: 20578,
  case: 20556,
  break: 20555,
  try: 20577,
  catch: 20557,
  delete: 16863276,
  throw: 86112,
  switch: 86110,
  continue: 20559,
  default: 20561,
  instanceof: 8411187,
  do: 20562,
  void: 16863277,
  finally: 20566,
  async: 209005,
  await: 209006,
  class: 86094,
  const: 86090,
  constructor: 12399,
  debugger: 20560,
  export: 20564,
  extends: 20565,
  false: 86021,
  from: 209011,
  get: 209008,
  implements: 36964,
  import: 86106,
  interface: 36965,
  let: 241737,
  null: 86023,
  of: 471156,
  package: 36966,
  private: 36967,
  protected: 36968,
  public: 36969,
  set: 209009,
  static: 36970,
  super: 86109,
  true: 86022,
  with: 20579,
  yield: 241771,
  enum: 86133,
  eval: 537079926,
  as: 77932,
  arguments: 537079927,
  target: 209029,
  meta: 209030,
  accessor: 12402
};
function tn(n, t, e) {
  for (; sn[a(n)]; )
    ;
  return n.tokenValue = n.source.slice(n.tokenIndex, n.index), n.currentChar !== 92 && n.currentChar <= 126 ? B2(an, n.tokenValue) ?? 208897 : $2(n, t, 0, e);
}
function Gn(n, t) {
  const e = hn(n);
  return E2(e) || n.report(5), n.tokenValue = String.fromCodePoint(e), $2(n, t, 1, B[e] & 4);
}
function $2(n, t, e, u) {
  let o = n.index;
  for (; n.index < n.end; )
    if (n.currentChar === 92) {
      n.tokenValue += n.source.slice(o, n.index), e = 1;
      const l = hn(n);
      b2(l) || n.report(5), u = u && B[l] & 4, n.tokenValue += String.fromCodePoint(l), o = n.index;
    } else {
      const l = J2(n);
      if (l > 0)
        b2(l) || n.report(20, String.fromCodePoint(l)), n.currentChar = l, n.index++, n.column++;
      else if (!b2(n.currentChar))
        break;
      a(n);
    }
  n.index <= n.end && (n.tokenValue += n.source.slice(o, n.index));
  const { length: i } = n.tokenValue;
  if (u && i >= 2 && i <= 11) {
    const l = B2(an, n.tokenValue);
    return l === void 0 ? 208897 | (e ? -2147483648 : 0) : e ? l === 209006 ? (t & 2050) === 0 ? l | -2147483648 : -2147483528 : t & 1 ? l === 36970 || (l & 36864) === 36864 ? -2147483527 : (l & 20480) === 20480 ? t & 262144 && (t & 8) === 0 ? l | -2147483648 : -2147483528 : -2147274630 : t & 262144 && (t & 8) === 0 && (l & 20480) === 20480 ? l | -2147483648 : l === 241771 ? t & 262144 ? -2147274630 : t & 1024 ? -2147483528 : l | -2147483648 : l === 209005 ? -2147274630 : (l & 36864) === 36864 ? l | 12288 | -2147483648 : -2147483528 : l;
  }
  return 208897 | (e ? -2147483648 : 0);
}
function xn(n) {
  let t = a(n);
  if (t === 92)
    return 130;
  const e = J2(n);
  return e && (t = e), E2(t) || n.report(96), 130;
}
function hn(n) {
  return n.source.charCodeAt(n.index + 1) !== 117 && n.report(5), n.currentChar = n.source.charCodeAt(n.index += 2), n.column += 2, pn(n);
}
function pn(n) {
  let t = 0;
  const e = n.currentChar;
  if (e === 123) {
    const l = n.index - 2;
    for (; B[a(n)] & 64; )
      if (t = t << 4 | J(n.currentChar), t > 1114111)
        throw new V({ index: l, line: n.line, column: n.column }, n.currentLocation, 104);
    if (n.currentChar !== 125)
      throw new V({ index: l, line: n.line, column: n.column }, n.currentLocation, 7);
    return a(n), t;
  }
  (B[e] & 64) === 0 && n.report(7);
  const u = n.source.charCodeAt(n.index + 1);
  (B[u] & 64) === 0 && n.report(7);
  const o = n.source.charCodeAt(n.index + 2);
  (B[o] & 64) === 0 && n.report(7);
  const i = n.source.charCodeAt(n.index + 3);
  return (B[i] & 64) === 0 && n.report(7), t = J(e) << 12 | J(u) << 8 | J(o) << 4 | J(i), n.currentChar = n.source.charCodeAt(n.index += 4), n.column += 4, t;
}
function en(n, t, e) {
  let u = n.currentChar, o = 0, i = 9, l = e & 64 ? 0 : 1, f = 0, c = 0;
  if (e & 64)
    o = "." + m2(n, u), u = n.currentChar, u === 110 && n.report(12);
  else {
    if (u === 48)
      if (u = a(n), (u | 32) === 120) {
        for (e = 136, u = a(n); B[u] & 4160; ) {
          if (u === 95) {
            c || n.report(152), c = 0, u = a(n);
            continue;
          }
          c = 1, o = o * 16 + J(u), f++, u = a(n);
        }
        (f === 0 || !c) && n.report(f === 0 ? 21 : 153);
      } else if ((u | 32) === 111) {
        for (e = 132, u = a(n); B[u] & 4128; ) {
          if (u === 95) {
            c || n.report(152), c = 0, u = a(n);
            continue;
          }
          c = 1, o = o * 8 + (u - 48), f++, u = a(n);
        }
        (f === 0 || !c) && n.report(f === 0 ? 0 : 153);
      } else if ((u | 32) === 98) {
        for (e = 130, u = a(n); B[u] & 4224; ) {
          if (u === 95) {
            c || n.report(152), c = 0, u = a(n);
            continue;
          }
          c = 1, o = o * 2 + (u - 48), f++, u = a(n);
        }
        (f === 0 || !c) && n.report(f === 0 ? 0 : 153);
      } else if (B[u] & 32)
        for (t & 1 && n.report(1), e = 1; B[u] & 16; ) {
          if (B[u] & 512) {
            e = 32, l = 0;
            break;
          }
          o = o * 8 + (u - 48), u = a(n);
        }
      else B[u] & 512 ? (t & 1 && n.report(1), n.flags |= 64, e = 32) : u === 95 && n.report(0);
    if (e & 48) {
      if (l) {
        for (; i >= 0 && B[u] & 4112; ) {
          if (u === 95) {
            if (u = a(n), u === 95 || e & 32)
              throw new V(n.currentLocation, { index: n.index + 1, line: n.line, column: n.column }, 152);
            c = 1;
            continue;
          }
          c = 0, o = 10 * o + (u - 48), u = a(n), --i;
        }
        if (c)
          throw new V(n.currentLocation, { index: n.index + 1, line: n.line, column: n.column }, 153);
        if (i >= 0 && !E2(u) && u !== 46)
          return n.tokenValue = o, n.options.raw && (n.tokenRaw = n.source.slice(n.tokenIndex, n.index)), 134283266;
      }
      o += m2(n, u), u = n.currentChar, u === 46 && (a(n) === 95 && n.report(0), e = 64, o += "." + m2(n, n.currentChar), u = n.currentChar);
    }
  }
  const g = n.index;
  let d = 0;
  if (u === 110 && e & 128)
    d = 1, u = a(n);
  else if ((u | 32) === 101) {
    u = a(n), B[u] & 256 && (u = a(n));
    const { index: s } = n;
    (B[u] & 16) === 0 && n.report(11), o += n.source.substring(g, s) + m2(n, u), u = n.currentChar;
  }
  return (n.index < n.end && B[u] & 16 || E2(u)) && n.report(13), d ? (n.tokenRaw = n.source.slice(n.tokenIndex, n.index), n.tokenValue = BigInt(n.tokenRaw.slice(0, -1).replaceAll("_", "")), 134283388) : (n.tokenValue = e & 15 ? o : e & 32 ? parseFloat(n.source.substring(n.tokenIndex, n.index)) : +o, n.options.raw && (n.tokenRaw = n.source.slice(n.tokenIndex, n.index)), 134283266);
}
function m2(n, t) {
  let e = 0, u = n.index, o = "";
  for (; B[t] & 4112; ) {
    if (t === 95) {
      const { index: i } = n;
      if (t = a(n), t === 95)
        throw new V(n.currentLocation, { index: n.index + 1, line: n.line, column: n.column }, 152);
      e = 1, o += n.source.substring(u, i), u = n.index;
      continue;
    }
    e = 0, t = a(n);
  }
  if (e)
    throw new V(n.currentLocation, { index: n.index + 1, line: n.line, column: n.column }, 153);
  return o + n.source.substring(u, n.index);
}
var K;
(function(n) {
  n[n.Empty = 0] = "Empty", n[n.Escape = 1] = "Escape", n[n.Class = 2] = "Class";
})(K || (K = {}));
var O;
(function(n) {
  n[n.Empty = 0] = "Empty", n[n.IgnoreCase = 1] = "IgnoreCase", n[n.Global = 2] = "Global", n[n.Multiline = 4] = "Multiline", n[n.Unicode = 16] = "Unicode", n[n.Sticky = 8] = "Sticky", n[n.DotAll = 32] = "DotAll", n[n.Indices = 64] = "Indices", n[n.UnicodeSets = 128] = "UnicodeSets";
})(O || (O = {}));
function nt(n) {
  const t = n.index;
  let e = K.Empty;
  n: for (; ; ) {
    const g = n.currentChar;
    if (a(n), e & K.Escape)
      e &= ~K.Escape;
    else
      switch (g) {
        case 47:
          if (e)
            break;
          break n;
        case 92:
          e |= K.Escape;
          break;
        case 91:
          e |= K.Class;
          break;
        case 93:
          e &= K.Escape;
          break;
      }
    if ((g === 13 || g === 10 || g === 8232 || g === 8233) && n.report(34), n.index >= n.source.length)
      return n.report(34);
  }
  const u = n.index - 1;
  let o = O.Empty, i = n.currentChar;
  const { index: l } = n;
  for (; b2(i); ) {
    switch (i) {
      case 103:
        o & O.Global && n.report(36, "g"), o |= O.Global;
        break;
      case 105:
        o & O.IgnoreCase && n.report(36, "i"), o |= O.IgnoreCase;
        break;
      case 109:
        o & O.Multiline && n.report(36, "m"), o |= O.Multiline;
        break;
      case 117:
        o & O.Unicode && n.report(36, "u"), o & O.UnicodeSets && n.report(36, "vu"), o |= O.Unicode;
        break;
      case 118:
        o & O.Unicode && n.report(36, "uv"), o & O.UnicodeSets && n.report(36, "v"), o |= O.UnicodeSets;
        break;
      case 121:
        o & O.Sticky && n.report(36, "y"), o |= O.Sticky;
        break;
      case 115:
        o & O.DotAll && n.report(36, "s"), o |= O.DotAll;
        break;
      case 100:
        o & O.Indices && n.report(36, "d"), o |= O.Indices;
        break;
      default:
        n.report(35);
    }
    i = a(n);
  }
  const f = n.source.slice(l, n.index), c = n.source.slice(t, u);
  return n.tokenRegExp = { pattern: c, flags: f }, n.options.raw && (n.tokenRaw = n.source.slice(n.tokenIndex, n.index)), n.tokenValue = tt(n, c, f), 65540;
}
function tt(n, t, e) {
  try {
    return new RegExp(t, e);
  } catch {
    if (!n.options.validateRegex)
      return null;
    n.report(34);
  }
}
function et(n, t, e) {
  const { index: u } = n;
  let o = "", i = a(n), l = n.index;
  for (; (B[i] & 8) === 0; ) {
    if (i === e)
      return o += n.source.slice(l, n.index), a(n), n.options.raw && (n.tokenRaw = n.source.slice(u, n.index)), n.tokenValue = o, 134283267;
    if ((i & 8) === 8 && i === 92) {
      if (o += n.source.slice(l, n.index), i = a(n), i < 127 || i === 8232 || i === 8233) {
        const f = mn(n, t, i);
        f >= 0 ? o += String.fromCodePoint(f) : kn(n, f, 0);
      } else
        o += String.fromCodePoint(i);
      l = n.index + 1;
    } else (i === 8232 || i === 8233) && (n.column = -1, n.line++);
    n.index >= n.end && n.report(16), i = a(n);
  }
  n.report(16);
}
function mn(n, t, e, u = 0) {
  switch (e) {
    case 98:
      return 8;
    case 102:
      return 12;
    case 114:
      return 13;
    case 110:
      return 10;
    case 116:
      return 9;
    case 118:
      return 11;
    case 13:
      if (n.index < n.end) {
        const o = n.source.charCodeAt(n.index + 1);
        o === 10 && (n.index = n.index + 1, n.currentChar = o);
      }
    case 10:
    case 8232:
    case 8233:
      return n.column = -1, n.line++, -1;
    case 48:
    case 49:
    case 50:
    case 51: {
      let o = e - 48, i = n.index + 1, l = n.column + 1;
      if (i < n.end) {
        const f = n.source.charCodeAt(i);
        if ((B[f] & 32) === 0) {
          if (o !== 0 || B[f] & 512) {
            if (t & 1 || u)
              return -2;
            n.flags |= 64;
          }
        } else {
          if (t & 1 || u)
            return -2;
          if (n.currentChar = f, o = o << 3 | f - 48, i++, l++, i < n.end) {
            const c = n.source.charCodeAt(i);
            B[c] & 32 && (n.currentChar = c, o = o << 3 | c - 48, i++, l++);
          }
          n.flags |= 64;
        }
        n.index = i - 1, n.column = l - 1;
      }
      return o;
    }
    case 52:
    case 53:
    case 54:
    case 55: {
      if (u || t & 1)
        return -2;
      let o = e - 48;
      const i = n.index + 1, l = n.column + 1;
      if (i < n.end) {
        const f = n.source.charCodeAt(i);
        B[f] & 32 && (o = o << 3 | f - 48, n.currentChar = f, n.index = i, n.column = l);
      }
      return n.flags |= 64, o;
    }
    case 120: {
      const o = a(n);
      if ((B[o] & 64) === 0)
        return -4;
      const i = J(o), l = a(n);
      if ((B[l] & 64) === 0)
        return -4;
      const f = J(l);
      return i << 4 | f;
    }
    case 117: {
      const o = a(n);
      if (n.currentChar === 123) {
        let i = 0;
        for (; (B[a(n)] & 64) !== 0; )
          if (i = i << 4 | J(n.currentChar), i > 1114111)
            return -5;
        return n.currentChar < 1 || n.currentChar !== 125 ? -4 : i;
      } else {
        if ((B[o] & 64) === 0)
          return -4;
        const i = n.source.charCodeAt(n.index + 1);
        if ((B[i] & 64) === 0)
          return -4;
        const l = n.source.charCodeAt(n.index + 2);
        if ((B[l] & 64) === 0)
          return -4;
        const f = n.source.charCodeAt(n.index + 3);
        return (B[f] & 64) === 0 ? -4 : (n.index += 3, n.column += 3, n.currentChar = n.source.charCodeAt(n.index), J(o) << 12 | J(i) << 8 | J(l) << 4 | J(f));
      }
    }
    case 56:
    case 57:
      if (u || !n.options.webcompat || t & 1)
        return -3;
      n.flags |= 4096;
    default:
      return e;
  }
}
function kn(n, t, e) {
  switch (t) {
    case -1:
      return;
    case -2:
      n.report(e ? 2 : 1);
    case -3:
      n.report(e ? 3 : 14);
    case -4:
      n.report(7);
    case -5:
      n.report(104);
  }
}
function bn(n, t) {
  const { index: e } = n;
  let u = 67174409, o = "", i = a(n);
  for (; i !== 96; ) {
    if (i === 36 && n.source.charCodeAt(n.index + 1) === 123) {
      a(n), u = 67174408;
      break;
    } else if (i === 92)
      if (i = a(n), i > 126)
        o += String.fromCodePoint(i);
      else {
        const { index: l, line: f, column: c } = n, g = mn(n, t | 1, i, 1);
        if (g >= 0)
          o += String.fromCodePoint(g);
        else if (g !== -1 && t & 64) {
          n.index = l, n.line = f, n.column = c, o = null, i = ut(n, i), i < 0 && (u = 67174408);
          break;
        } else
          kn(n, g, 1);
      }
    else n.index < n.end && (i === 13 && n.source.charCodeAt(n.index) === 10 && (o += String.fromCodePoint(i), n.currentChar = n.source.charCodeAt(++n.index)), ((i & 83) < 3 && i === 10 || (i ^ 8232) <= 1) && (n.column = -1, n.line++), o += String.fromCodePoint(i));
    n.index >= n.end && n.report(17), i = a(n);
  }
  return a(n), n.tokenValue = o, n.tokenRaw = n.source.slice(e + 1, n.index - (u === 67174409 ? 1 : 2)), u;
}
function ut(n, t) {
  for (; t !== 96; ) {
    switch (t) {
      case 36: {
        const e = n.index + 1;
        if (e < n.end && n.source.charCodeAt(e) === 123)
          return n.index = e, n.column++, -t;
        break;
      }
      case 10:
      case 8232:
      case 8233:
        n.column = -1, n.line++;
    }
    n.index >= n.end && n.report(17), t = a(n);
  }
  return t;
}
function it(n, t) {
  return n.index >= n.end && n.report(0), n.index--, n.column--, bn(n, t);
}
const ot = [
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  127,
  135,
  127,
  127,
  129,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  128,
  127,
  16842798,
  134283267,
  130,
  208897,
  8391477,
  8390213,
  134283267,
  67174411,
  16,
  8391476,
  25233968,
  18,
  25233969,
  67108877,
  8457014,
  134283266,
  134283266,
  134283266,
  134283266,
  134283266,
  134283266,
  134283266,
  134283266,
  134283266,
  134283266,
  21,
  1074790417,
  8456256,
  1077936155,
  8390721,
  22,
  132,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  208897,
  69271571,
  136,
  20,
  8389959,
  208897,
  131,
  4096,
  4096,
  4096,
  4096,
  4096,
  4096,
  4096,
  208897,
  4096,
  208897,
  208897,
  4096,
  208897,
  4096,
  208897,
  4096,
  208897,
  4096,
  4096,
  4096,
  208897,
  4096,
  4096,
  208897,
  4096,
  4096,
  2162700,
  8389702,
  1074790415,
  16842799,
  128
];
function m(n, t) {
  n.flags = (n.flags | 1) ^ 1, n.startIndex = n.index, n.startColumn = n.column, n.startLine = n.line, n.setToken(Dn(n, t, 0));
}
function Dn(n, t, e) {
  const u = n.index === 0, { source: o } = n;
  for (; n.index < n.end; ) {
    n.tokenIndex = n.index, n.tokenColumn = n.column, n.tokenLine = n.line;
    let i = n.currentChar;
    if (i <= 126) {
      const l = ot[i];
      switch (l) {
        case 67174411:
        case 16:
        case 2162700:
        case 1074790415:
        case 69271571:
        case 20:
        case 21:
        case 1074790417:
        case 18:
        case 16842799:
        case 132:
        case 128:
          return a(n), l;
        case 208897:
          return tn(n, t, 0);
        case 4096:
          return tn(n, t, 1);
        case 134283266:
          return en(n, t, 144);
        case 134283267:
          return et(n, t, i);
        case 131:
          return bn(n, t);
        case 136:
          return Gn(n, t);
        case 130:
          return xn(n);
        case 127:
          a(n);
          break;
        case 129:
          e |= 5, x(n);
          break;
        case 135:
          j2(n, e), e = e & -5 | 1;
          break;
        case 8456256: {
          const f = a(n);
          if (n.index < n.end) {
            if (f === 60)
              return n.index < n.end && a(n) === 61 ? (a(n), 4194332) : 8390978;
            if (f === 61)
              return a(n), 8390718;
            if (f === 33) {
              const c = n.index + 1;
              if (c + 1 < n.end && o.charCodeAt(c) === 45 && o.charCodeAt(c + 1) == 45) {
                n.column += 3, n.currentChar = o.charCodeAt(n.index += 3), e = nn(n, o, e, t, 2, n.tokenStart);
                continue;
              }
              return 8456256;
            }
          }
          return 8456256;
        }
        case 1077936155: {
          a(n);
          const f = n.currentChar;
          return f === 61 ? a(n) === 61 ? (a(n), 8390458) : 8390460 : f === 62 ? (a(n), 10) : 1077936155;
        }
        case 16842798:
          return a(n) !== 61 ? 16842798 : a(n) !== 61 ? 8390461 : (a(n), 8390459);
        case 8391477:
          return a(n) !== 61 ? 8391477 : (a(n), 4194340);
        case 8391476: {
          if (a(n), n.index >= n.end)
            return 8391476;
          const f = n.currentChar;
          return f === 61 ? (a(n), 4194338) : f !== 42 ? 8391476 : a(n) !== 61 ? 8391735 : (a(n), 4194335);
        }
        case 8389959:
          return a(n) !== 61 ? 8389959 : (a(n), 4194341);
        case 25233968: {
          a(n);
          const f = n.currentChar;
          return f === 43 ? (a(n), 33619993) : f === 61 ? (a(n), 4194336) : 25233968;
        }
        case 25233969: {
          a(n);
          const f = n.currentChar;
          if (f === 45) {
            if (a(n), (e & 1 || u) && n.currentChar === 62) {
              n.options.webcompat || n.report(112), a(n), e = nn(n, o, e, t, 3, n.tokenStart);
              continue;
            }
            return 33619994;
          }
          return f === 61 ? (a(n), 4194337) : 25233969;
        }
        case 8457014: {
          if (a(n), n.index < n.end) {
            const f = n.currentChar;
            if (f === 47) {
              a(n), e = M2(n, o, e, 0, n.tokenStart);
              continue;
            }
            if (f === 42) {
              a(n), e = Zn(n, o, e);
              continue;
            }
            if (t & 32)
              return nt(n);
            if (f === 61)
              return a(n), 4259875;
          }
          return 8457014;
        }
        case 67108877: {
          const f = a(n);
          if (f >= 48 && f <= 57)
            return en(n, t, 80);
          if (f === 46) {
            const c = n.index + 1;
            if (c < n.end && o.charCodeAt(c) === 46)
              return n.column += 2, n.currentChar = o.charCodeAt(n.index += 2), 14;
          }
          return 67108877;
        }
        case 8389702: {
          a(n);
          const f = n.currentChar;
          return f === 124 ? (a(n), n.currentChar === 61 ? (a(n), 4194344) : 8913465) : f === 61 ? (a(n), 4194342) : 8389702;
        }
        case 8390721: {
          a(n);
          const f = n.currentChar;
          if (f === 61)
            return a(n), 8390719;
          if (f !== 62)
            return 8390721;
          if (a(n), n.index < n.end) {
            const c = n.currentChar;
            if (c === 62)
              return a(n) === 61 ? (a(n), 4194334) : 8390980;
            if (c === 61)
              return a(n), 4194333;
          }
          return 8390979;
        }
        case 8390213: {
          a(n);
          const f = n.currentChar;
          return f === 38 ? (a(n), n.currentChar === 61 ? (a(n), 4194345) : 8913720) : f === 61 ? (a(n), 4194343) : 8390213;
        }
        case 22: {
          let f = a(n);
          if (f === 63)
            return a(n), n.currentChar === 61 ? (a(n), 4194346) : 276824445;
          if (f === 46) {
            const c = n.index + 1;
            if (c < n.end && (f = o.charCodeAt(c), !(f >= 48 && f <= 57)))
              return a(n), 67108990;
          }
          return 22;
        }
      }
    } else {
      if ((i ^ 8232) <= 1) {
        e = e & -5 | 1, x(n);
        continue;
      }
      const l = J2(n);
      if (l > 0 && (i = l), dn(i))
        return n.tokenValue = "", $2(n, t, 0, 0);
      if (_n(i)) {
        a(n);
        continue;
      }
      n.report(20, String.fromCodePoint(i));
    }
  }
  return 1048576;
}
function U(n, t) {
  (n.flags & 1) === 0 && (n.getToken() & 1048576) !== 1048576 && n.report(30, F[n.getToken() & 255]), r(n, t, 1074790417) || n.options.onInsertedSemicolon?.(n.startIndex);
}
function An(n, t, e, u) {
  return t - e < 13 && u === "use strict" && ((n.getToken() & 1048576) === 1048576 || n.flags & 1) ? 1 : 0;
}
function X2(n, t, e) {
  return n.getToken() !== e ? 0 : (m(n, t), 1);
}
function r(n, t, e) {
  return n.getToken() !== e ? !1 : (m(n, t), !0);
}
function D(n, t, e) {
  n.getToken() !== e && n.report(25, F[e & 255]), m(n, t);
}
function z(n, t) {
  switch (t.type) {
    case "ArrayExpression": {
      t.type = "ArrayPattern";
      const { elements: e } = t;
      for (let u = 0, o = e.length; u < o; ++u) {
        const i = e[u];
        i && z(n, i);
      }
      return;
    }
    case "ObjectExpression": {
      t.type = "ObjectPattern";
      const { properties: e } = t;
      for (let u = 0, o = e.length; u < o; ++u)
        z(n, e[u]);
      return;
    }
    case "AssignmentExpression":
      t.type = "AssignmentPattern", t.operator !== "=" && n.report(71), delete t.operator, z(n, t.left);
      return;
    case "Property":
      z(n, t.value);
      return;
    case "SpreadElement":
      t.type = "RestElement", z(n, t.argument);
  }
}
function T2(n, t, e, u, o) {
  t & 1 && ((u & 36864) === 36864 && n.report(118), !o && (u & 537079808) === 537079808 && n.report(119)), ((u & 20480) === 20480 || u === -2147483528) && n.report(102), e & 24 && (u & 255) === 73 && n.report(100), t & 2050 && u === 209006 && n.report(110), t & 1025 && u === 241771 && n.report(97, "yield");
}
function Cn(n, t, e) {
  t & 1 && ((e & 36864) === 36864 && n.report(118), (e & 537079808) === 537079808 && n.report(119), e === -2147483527 && n.report(95), e === -2147483528 && n.report(95)), (e & 20480) === 20480 && n.report(102), t & 2050 && e === 209006 && n.report(110), t & 1025 && e === 241771 && n.report(97, "yield");
}
function En(n, t, e) {
  return e === 209006 && (t & 2050 && n.report(110), n.destructible |= 128), e === 241771 && t & 1024 && n.report(97, "yield"), (e & 20480) === 20480 || (e & 36864) === 36864 || e == -2147483527;
}
function lt(n) {
  return n.property ? n.property.type === "PrivateIdentifier" : !1;
}
function Tn(n, t, e, u) {
  for (; t; ) {
    if (t["$" + e])
      return u && n.report(137), 1;
    u && t.loop && (u = 0), t = t.$;
  }
  return 0;
}
function ft(n, t, e) {
  let u = t;
  for (; u; )
    u["$" + e] && n.report(136, e), u = u.$;
  t["$" + e] = 1;
}
function y2(n) {
  switch (n.type) {
    case "JSXIdentifier":
      return n.name;
    case "JSXNamespacedName":
      return n.namespace + ":" + n.name;
    case "JSXMemberExpression":
      return y2(n.object) + "." + y2(n.property);
  }
}
function d2(n, t) {
  return n & 1025 ? n & 2 && t === 209006 || n & 1024 && t === 241771 ? !1 : (t & 12288) === 12288 : (t & 12288) === 12288 || (t & 36864) === 36864;
}
function S2(n, t, e) {
  (e & 537079808) === 537079808 && (t & 1 && n.report(119), n.flags |= 512), d2(t, e) || n.report(0);
}
const ct = {
  AElig: "Æ",
  AMP: "&",
  Aacute: "Á",
  Abreve: "Ă",
  Acirc: "Â",
  Acy: "А",
  Afr: "𝔄",
  Agrave: "À",
  Alpha: "Α",
  Amacr: "Ā",
  And: "⩓",
  Aogon: "Ą",
  Aopf: "𝔸",
  ApplyFunction: "⁡",
  Aring: "Å",
  Ascr: "𝒜",
  Assign: "≔",
  Atilde: "Ã",
  Auml: "Ä",
  Backslash: "∖",
  Barv: "⫧",
  Barwed: "⌆",
  Bcy: "Б",
  Because: "∵",
  Bernoullis: "ℬ",
  Beta: "Β",
  Bfr: "𝔅",
  Bopf: "𝔹",
  Breve: "˘",
  Bscr: "ℬ",
  Bumpeq: "≎",
  CHcy: "Ч",
  COPY: "©",
  Cacute: "Ć",
  Cap: "⋒",
  CapitalDifferentialD: "ⅅ",
  Cayleys: "ℭ",
  Ccaron: "Č",
  Ccedil: "Ç",
  Ccirc: "Ĉ",
  Cconint: "∰",
  Cdot: "Ċ",
  Cedilla: "¸",
  CenterDot: "·",
  Cfr: "ℭ",
  Chi: "Χ",
  CircleDot: "⊙",
  CircleMinus: "⊖",
  CirclePlus: "⊕",
  CircleTimes: "⊗",
  ClockwiseContourIntegral: "∲",
  CloseCurlyDoubleQuote: "”",
  CloseCurlyQuote: "’",
  Colon: "∷",
  Colone: "⩴",
  Congruent: "≡",
  Conint: "∯",
  ContourIntegral: "∮",
  Copf: "ℂ",
  Coproduct: "∐",
  CounterClockwiseContourIntegral: "∳",
  Cross: "⨯",
  Cscr: "𝒞",
  Cup: "⋓",
  CupCap: "≍",
  DD: "ⅅ",
  DDotrahd: "⤑",
  DJcy: "Ђ",
  DScy: "Ѕ",
  DZcy: "Џ",
  Dagger: "‡",
  Darr: "↡",
  Dashv: "⫤",
  Dcaron: "Ď",
  Dcy: "Д",
  Del: "∇",
  Delta: "Δ",
  Dfr: "𝔇",
  DiacriticalAcute: "´",
  DiacriticalDot: "˙",
  DiacriticalDoubleAcute: "˝",
  DiacriticalGrave: "`",
  DiacriticalTilde: "˜",
  Diamond: "⋄",
  DifferentialD: "ⅆ",
  Dopf: "𝔻",
  Dot: "¨",
  DotDot: "⃜",
  DotEqual: "≐",
  DoubleContourIntegral: "∯",
  DoubleDot: "¨",
  DoubleDownArrow: "⇓",
  DoubleLeftArrow: "⇐",
  DoubleLeftRightArrow: "⇔",
  DoubleLeftTee: "⫤",
  DoubleLongLeftArrow: "⟸",
  DoubleLongLeftRightArrow: "⟺",
  DoubleLongRightArrow: "⟹",
  DoubleRightArrow: "⇒",
  DoubleRightTee: "⊨",
  DoubleUpArrow: "⇑",
  DoubleUpDownArrow: "⇕",
  DoubleVerticalBar: "∥",
  DownArrow: "↓",
  DownArrowBar: "⤓",
  DownArrowUpArrow: "⇵",
  DownBreve: "̑",
  DownLeftRightVector: "⥐",
  DownLeftTeeVector: "⥞",
  DownLeftVector: "↽",
  DownLeftVectorBar: "⥖",
  DownRightTeeVector: "⥟",
  DownRightVector: "⇁",
  DownRightVectorBar: "⥗",
  DownTee: "⊤",
  DownTeeArrow: "↧",
  Downarrow: "⇓",
  Dscr: "𝒟",
  Dstrok: "Đ",
  ENG: "Ŋ",
  ETH: "Ð",
  Eacute: "É",
  Ecaron: "Ě",
  Ecirc: "Ê",
  Ecy: "Э",
  Edot: "Ė",
  Efr: "𝔈",
  Egrave: "È",
  Element: "∈",
  Emacr: "Ē",
  EmptySmallSquare: "◻",
  EmptyVerySmallSquare: "▫",
  Eogon: "Ę",
  Eopf: "𝔼",
  Epsilon: "Ε",
  Equal: "⩵",
  EqualTilde: "≂",
  Equilibrium: "⇌",
  Escr: "ℰ",
  Esim: "⩳",
  Eta: "Η",
  Euml: "Ë",
  Exists: "∃",
  ExponentialE: "ⅇ",
  Fcy: "Ф",
  Ffr: "𝔉",
  FilledSmallSquare: "◼",
  FilledVerySmallSquare: "▪",
  Fopf: "𝔽",
  ForAll: "∀",
  Fouriertrf: "ℱ",
  Fscr: "ℱ",
  GJcy: "Ѓ",
  GT: ">",
  Gamma: "Γ",
  Gammad: "Ϝ",
  Gbreve: "Ğ",
  Gcedil: "Ģ",
  Gcirc: "Ĝ",
  Gcy: "Г",
  Gdot: "Ġ",
  Gfr: "𝔊",
  Gg: "⋙",
  Gopf: "𝔾",
  GreaterEqual: "≥",
  GreaterEqualLess: "⋛",
  GreaterFullEqual: "≧",
  GreaterGreater: "⪢",
  GreaterLess: "≷",
  GreaterSlantEqual: "⩾",
  GreaterTilde: "≳",
  Gscr: "𝒢",
  Gt: "≫",
  HARDcy: "Ъ",
  Hacek: "ˇ",
  Hat: "^",
  Hcirc: "Ĥ",
  Hfr: "ℌ",
  HilbertSpace: "ℋ",
  Hopf: "ℍ",
  HorizontalLine: "─",
  Hscr: "ℋ",
  Hstrok: "Ħ",
  HumpDownHump: "≎",
  HumpEqual: "≏",
  IEcy: "Е",
  IJlig: "Ĳ",
  IOcy: "Ё",
  Iacute: "Í",
  Icirc: "Î",
  Icy: "И",
  Idot: "İ",
  Ifr: "ℑ",
  Igrave: "Ì",
  Im: "ℑ",
  Imacr: "Ī",
  ImaginaryI: "ⅈ",
  Implies: "⇒",
  Int: "∬",
  Integral: "∫",
  Intersection: "⋂",
  InvisibleComma: "⁣",
  InvisibleTimes: "⁢",
  Iogon: "Į",
  Iopf: "𝕀",
  Iota: "Ι",
  Iscr: "ℐ",
  Itilde: "Ĩ",
  Iukcy: "І",
  Iuml: "Ï",
  Jcirc: "Ĵ",
  Jcy: "Й",
  Jfr: "𝔍",
  Jopf: "𝕁",
  Jscr: "𝒥",
  Jsercy: "Ј",
  Jukcy: "Є",
  KHcy: "Х",
  KJcy: "Ќ",
  Kappa: "Κ",
  Kcedil: "Ķ",
  Kcy: "К",
  Kfr: "𝔎",
  Kopf: "𝕂",
  Kscr: "𝒦",
  LJcy: "Љ",
  LT: "<",
  Lacute: "Ĺ",
  Lambda: "Λ",
  Lang: "⟪",
  Laplacetrf: "ℒ",
  Larr: "↞",
  Lcaron: "Ľ",
  Lcedil: "Ļ",
  Lcy: "Л",
  LeftAngleBracket: "⟨",
  LeftArrow: "←",
  LeftArrowBar: "⇤",
  LeftArrowRightArrow: "⇆",
  LeftCeiling: "⌈",
  LeftDoubleBracket: "⟦",
  LeftDownTeeVector: "⥡",
  LeftDownVector: "⇃",
  LeftDownVectorBar: "⥙",
  LeftFloor: "⌊",
  LeftRightArrow: "↔",
  LeftRightVector: "⥎",
  LeftTee: "⊣",
  LeftTeeArrow: "↤",
  LeftTeeVector: "⥚",
  LeftTriangle: "⊲",
  LeftTriangleBar: "⧏",
  LeftTriangleEqual: "⊴",
  LeftUpDownVector: "⥑",
  LeftUpTeeVector: "⥠",
  LeftUpVector: "↿",
  LeftUpVectorBar: "⥘",
  LeftVector: "↼",
  LeftVectorBar: "⥒",
  Leftarrow: "⇐",
  Leftrightarrow: "⇔",
  LessEqualGreater: "⋚",
  LessFullEqual: "≦",
  LessGreater: "≶",
  LessLess: "⪡",
  LessSlantEqual: "⩽",
  LessTilde: "≲",
  Lfr: "𝔏",
  Ll: "⋘",
  Lleftarrow: "⇚",
  Lmidot: "Ŀ",
  LongLeftArrow: "⟵",
  LongLeftRightArrow: "⟷",
  LongRightArrow: "⟶",
  Longleftarrow: "⟸",
  Longleftrightarrow: "⟺",
  Longrightarrow: "⟹",
  Lopf: "𝕃",
  LowerLeftArrow: "↙",
  LowerRightArrow: "↘",
  Lscr: "ℒ",
  Lsh: "↰",
  Lstrok: "Ł",
  Lt: "≪",
  Map: "⤅",
  Mcy: "М",
  MediumSpace: " ",
  Mellintrf: "ℳ",
  Mfr: "𝔐",
  MinusPlus: "∓",
  Mopf: "𝕄",
  Mscr: "ℳ",
  Mu: "Μ",
  NJcy: "Њ",
  Nacute: "Ń",
  Ncaron: "Ň",
  Ncedil: "Ņ",
  Ncy: "Н",
  NegativeMediumSpace: "​",
  NegativeThickSpace: "​",
  NegativeThinSpace: "​",
  NegativeVeryThinSpace: "​",
  NestedGreaterGreater: "≫",
  NestedLessLess: "≪",
  NewLine: `
`,
  Nfr: "𝔑",
  NoBreak: "⁠",
  NonBreakingSpace: " ",
  Nopf: "ℕ",
  Not: "⫬",
  NotCongruent: "≢",
  NotCupCap: "≭",
  NotDoubleVerticalBar: "∦",
  NotElement: "∉",
  NotEqual: "≠",
  NotEqualTilde: "≂̸",
  NotExists: "∄",
  NotGreater: "≯",
  NotGreaterEqual: "≱",
  NotGreaterFullEqual: "≧̸",
  NotGreaterGreater: "≫̸",
  NotGreaterLess: "≹",
  NotGreaterSlantEqual: "⩾̸",
  NotGreaterTilde: "≵",
  NotHumpDownHump: "≎̸",
  NotHumpEqual: "≏̸",
  NotLeftTriangle: "⋪",
  NotLeftTriangleBar: "⧏̸",
  NotLeftTriangleEqual: "⋬",
  NotLess: "≮",
  NotLessEqual: "≰",
  NotLessGreater: "≸",
  NotLessLess: "≪̸",
  NotLessSlantEqual: "⩽̸",
  NotLessTilde: "≴",
  NotNestedGreaterGreater: "⪢̸",
  NotNestedLessLess: "⪡̸",
  NotPrecedes: "⊀",
  NotPrecedesEqual: "⪯̸",
  NotPrecedesSlantEqual: "⋠",
  NotReverseElement: "∌",
  NotRightTriangle: "⋫",
  NotRightTriangleBar: "⧐̸",
  NotRightTriangleEqual: "⋭",
  NotSquareSubset: "⊏̸",
  NotSquareSubsetEqual: "⋢",
  NotSquareSuperset: "⊐̸",
  NotSquareSupersetEqual: "⋣",
  NotSubset: "⊂⃒",
  NotSubsetEqual: "⊈",
  NotSucceeds: "⊁",
  NotSucceedsEqual: "⪰̸",
  NotSucceedsSlantEqual: "⋡",
  NotSucceedsTilde: "≿̸",
  NotSuperset: "⊃⃒",
  NotSupersetEqual: "⊉",
  NotTilde: "≁",
  NotTildeEqual: "≄",
  NotTildeFullEqual: "≇",
  NotTildeTilde: "≉",
  NotVerticalBar: "∤",
  Nscr: "𝒩",
  Ntilde: "Ñ",
  Nu: "Ν",
  OElig: "Œ",
  Oacute: "Ó",
  Ocirc: "Ô",
  Ocy: "О",
  Odblac: "Ő",
  Ofr: "𝔒",
  Ograve: "Ò",
  Omacr: "Ō",
  Omega: "Ω",
  Omicron: "Ο",
  Oopf: "𝕆",
  OpenCurlyDoubleQuote: "“",
  OpenCurlyQuote: "‘",
  Or: "⩔",
  Oscr: "𝒪",
  Oslash: "Ø",
  Otilde: "Õ",
  Otimes: "⨷",
  Ouml: "Ö",
  OverBar: "‾",
  OverBrace: "⏞",
  OverBracket: "⎴",
  OverParenthesis: "⏜",
  PartialD: "∂",
  Pcy: "П",
  Pfr: "𝔓",
  Phi: "Φ",
  Pi: "Π",
  PlusMinus: "±",
  Poincareplane: "ℌ",
  Popf: "ℙ",
  Pr: "⪻",
  Precedes: "≺",
  PrecedesEqual: "⪯",
  PrecedesSlantEqual: "≼",
  PrecedesTilde: "≾",
  Prime: "″",
  Product: "∏",
  Proportion: "∷",
  Proportional: "∝",
  Pscr: "𝒫",
  Psi: "Ψ",
  QUOT: '"',
  Qfr: "𝔔",
  Qopf: "ℚ",
  Qscr: "𝒬",
  RBarr: "⤐",
  REG: "®",
  Racute: "Ŕ",
  Rang: "⟫",
  Rarr: "↠",
  Rarrtl: "⤖",
  Rcaron: "Ř",
  Rcedil: "Ŗ",
  Rcy: "Р",
  Re: "ℜ",
  ReverseElement: "∋",
  ReverseEquilibrium: "⇋",
  ReverseUpEquilibrium: "⥯",
  Rfr: "ℜ",
  Rho: "Ρ",
  RightAngleBracket: "⟩",
  RightArrow: "→",
  RightArrowBar: "⇥",
  RightArrowLeftArrow: "⇄",
  RightCeiling: "⌉",
  RightDoubleBracket: "⟧",
  RightDownTeeVector: "⥝",
  RightDownVector: "⇂",
  RightDownVectorBar: "⥕",
  RightFloor: "⌋",
  RightTee: "⊢",
  RightTeeArrow: "↦",
  RightTeeVector: "⥛",
  RightTriangle: "⊳",
  RightTriangleBar: "⧐",
  RightTriangleEqual: "⊵",
  RightUpDownVector: "⥏",
  RightUpTeeVector: "⥜",
  RightUpVector: "↾",
  RightUpVectorBar: "⥔",
  RightVector: "⇀",
  RightVectorBar: "⥓",
  Rightarrow: "⇒",
  Ropf: "ℝ",
  RoundImplies: "⥰",
  Rrightarrow: "⇛",
  Rscr: "ℛ",
  Rsh: "↱",
  RuleDelayed: "⧴",
  SHCHcy: "Щ",
  SHcy: "Ш",
  SOFTcy: "Ь",
  Sacute: "Ś",
  Sc: "⪼",
  Scaron: "Š",
  Scedil: "Ş",
  Scirc: "Ŝ",
  Scy: "С",
  Sfr: "𝔖",
  ShortDownArrow: "↓",
  ShortLeftArrow: "←",
  ShortRightArrow: "→",
  ShortUpArrow: "↑",
  Sigma: "Σ",
  SmallCircle: "∘",
  Sopf: "𝕊",
  Sqrt: "√",
  Square: "□",
  SquareIntersection: "⊓",
  SquareSubset: "⊏",
  SquareSubsetEqual: "⊑",
  SquareSuperset: "⊐",
  SquareSupersetEqual: "⊒",
  SquareUnion: "⊔",
  Sscr: "𝒮",
  Star: "⋆",
  Sub: "⋐",
  Subset: "⋐",
  SubsetEqual: "⊆",
  Succeeds: "≻",
  SucceedsEqual: "⪰",
  SucceedsSlantEqual: "≽",
  SucceedsTilde: "≿",
  SuchThat: "∋",
  Sum: "∑",
  Sup: "⋑",
  Superset: "⊃",
  SupersetEqual: "⊇",
  Supset: "⋑",
  THORN: "Þ",
  TRADE: "™",
  TSHcy: "Ћ",
  TScy: "Ц",
  Tab: "	",
  Tau: "Τ",
  Tcaron: "Ť",
  Tcedil: "Ţ",
  Tcy: "Т",
  Tfr: "𝔗",
  Therefore: "∴",
  Theta: "Θ",
  ThickSpace: "  ",
  ThinSpace: " ",
  Tilde: "∼",
  TildeEqual: "≃",
  TildeFullEqual: "≅",
  TildeTilde: "≈",
  Topf: "𝕋",
  TripleDot: "⃛",
  Tscr: "𝒯",
  Tstrok: "Ŧ",
  Uacute: "Ú",
  Uarr: "↟",
  Uarrocir: "⥉",
  Ubrcy: "Ў",
  Ubreve: "Ŭ",
  Ucirc: "Û",
  Ucy: "У",
  Udblac: "Ű",
  Ufr: "𝔘",
  Ugrave: "Ù",
  Umacr: "Ū",
  UnderBar: "_",
  UnderBrace: "⏟",
  UnderBracket: "⎵",
  UnderParenthesis: "⏝",
  Union: "⋃",
  UnionPlus: "⊎",
  Uogon: "Ų",
  Uopf: "𝕌",
  UpArrow: "↑",
  UpArrowBar: "⤒",
  UpArrowDownArrow: "⇅",
  UpDownArrow: "↕",
  UpEquilibrium: "⥮",
  UpTee: "⊥",
  UpTeeArrow: "↥",
  Uparrow: "⇑",
  Updownarrow: "⇕",
  UpperLeftArrow: "↖",
  UpperRightArrow: "↗",
  Upsi: "ϒ",
  Upsilon: "Υ",
  Uring: "Ů",
  Uscr: "𝒰",
  Utilde: "Ũ",
  Uuml: "Ü",
  VDash: "⊫",
  Vbar: "⫫",
  Vcy: "В",
  Vdash: "⊩",
  Vdashl: "⫦",
  Vee: "⋁",
  Verbar: "‖",
  Vert: "‖",
  VerticalBar: "∣",
  VerticalLine: "|",
  VerticalSeparator: "❘",
  VerticalTilde: "≀",
  VeryThinSpace: " ",
  Vfr: "𝔙",
  Vopf: "𝕍",
  Vscr: "𝒱",
  Vvdash: "⊪",
  Wcirc: "Ŵ",
  Wedge: "⋀",
  Wfr: "𝔚",
  Wopf: "𝕎",
  Wscr: "𝒲",
  Xfr: "𝔛",
  Xi: "Ξ",
  Xopf: "𝕏",
  Xscr: "𝒳",
  YAcy: "Я",
  YIcy: "Ї",
  YUcy: "Ю",
  Yacute: "Ý",
  Ycirc: "Ŷ",
  Ycy: "Ы",
  Yfr: "𝔜",
  Yopf: "𝕐",
  Yscr: "𝒴",
  Yuml: "Ÿ",
  ZHcy: "Ж",
  Zacute: "Ź",
  Zcaron: "Ž",
  Zcy: "З",
  Zdot: "Ż",
  ZeroWidthSpace: "​",
  Zeta: "Ζ",
  Zfr: "ℨ",
  Zopf: "ℤ",
  Zscr: "𝒵",
  aacute: "á",
  abreve: "ă",
  ac: "∾",
  acE: "∾̳",
  acd: "∿",
  acirc: "â",
  acute: "´",
  acy: "а",
  aelig: "æ",
  af: "⁡",
  afr: "𝔞",
  agrave: "à",
  alefsym: "ℵ",
  aleph: "ℵ",
  alpha: "α",
  amacr: "ā",
  amalg: "⨿",
  amp: "&",
  and: "∧",
  andand: "⩕",
  andd: "⩜",
  andslope: "⩘",
  andv: "⩚",
  ang: "∠",
  ange: "⦤",
  angle: "∠",
  angmsd: "∡",
  angmsdaa: "⦨",
  angmsdab: "⦩",
  angmsdac: "⦪",
  angmsdad: "⦫",
  angmsdae: "⦬",
  angmsdaf: "⦭",
  angmsdag: "⦮",
  angmsdah: "⦯",
  angrt: "∟",
  angrtvb: "⊾",
  angrtvbd: "⦝",
  angsph: "∢",
  angst: "Å",
  angzarr: "⍼",
  aogon: "ą",
  aopf: "𝕒",
  ap: "≈",
  apE: "⩰",
  apacir: "⩯",
  ape: "≊",
  apid: "≋",
  apos: "'",
  approx: "≈",
  approxeq: "≊",
  aring: "å",
  ascr: "𝒶",
  ast: "*",
  asymp: "≈",
  asympeq: "≍",
  atilde: "ã",
  auml: "ä",
  awconint: "∳",
  awint: "⨑",
  bNot: "⫭",
  backcong: "≌",
  backepsilon: "϶",
  backprime: "‵",
  backsim: "∽",
  backsimeq: "⋍",
  barvee: "⊽",
  barwed: "⌅",
  barwedge: "⌅",
  bbrk: "⎵",
  bbrktbrk: "⎶",
  bcong: "≌",
  bcy: "б",
  bdquo: "„",
  becaus: "∵",
  because: "∵",
  bemptyv: "⦰",
  bepsi: "϶",
  bernou: "ℬ",
  beta: "β",
  beth: "ℶ",
  between: "≬",
  bfr: "𝔟",
  bigcap: "⋂",
  bigcirc: "◯",
  bigcup: "⋃",
  bigodot: "⨀",
  bigoplus: "⨁",
  bigotimes: "⨂",
  bigsqcup: "⨆",
  bigstar: "★",
  bigtriangledown: "▽",
  bigtriangleup: "△",
  biguplus: "⨄",
  bigvee: "⋁",
  bigwedge: "⋀",
  bkarow: "⤍",
  blacklozenge: "⧫",
  blacksquare: "▪",
  blacktriangle: "▴",
  blacktriangledown: "▾",
  blacktriangleleft: "◂",
  blacktriangleright: "▸",
  blank: "␣",
  blk12: "▒",
  blk14: "░",
  blk34: "▓",
  block: "█",
  bne: "=⃥",
  bnequiv: "≡⃥",
  bnot: "⌐",
  bopf: "𝕓",
  bot: "⊥",
  bottom: "⊥",
  bowtie: "⋈",
  boxDL: "╗",
  boxDR: "╔",
  boxDl: "╖",
  boxDr: "╓",
  boxH: "═",
  boxHD: "╦",
  boxHU: "╩",
  boxHd: "╤",
  boxHu: "╧",
  boxUL: "╝",
  boxUR: "╚",
  boxUl: "╜",
  boxUr: "╙",
  boxV: "║",
  boxVH: "╬",
  boxVL: "╣",
  boxVR: "╠",
  boxVh: "╫",
  boxVl: "╢",
  boxVr: "╟",
  boxbox: "⧉",
  boxdL: "╕",
  boxdR: "╒",
  boxdl: "┐",
  boxdr: "┌",
  boxh: "─",
  boxhD: "╥",
  boxhU: "╨",
  boxhd: "┬",
  boxhu: "┴",
  boxminus: "⊟",
  boxplus: "⊞",
  boxtimes: "⊠",
  boxuL: "╛",
  boxuR: "╘",
  boxul: "┘",
  boxur: "└",
  boxv: "│",
  boxvH: "╪",
  boxvL: "╡",
  boxvR: "╞",
  boxvh: "┼",
  boxvl: "┤",
  boxvr: "├",
  bprime: "‵",
  breve: "˘",
  brvbar: "¦",
  bscr: "𝒷",
  bsemi: "⁏",
  bsim: "∽",
  bsime: "⋍",
  bsol: "\\",
  bsolb: "⧅",
  bsolhsub: "⟈",
  bull: "•",
  bullet: "•",
  bump: "≎",
  bumpE: "⪮",
  bumpe: "≏",
  bumpeq: "≏",
  cacute: "ć",
  cap: "∩",
  capand: "⩄",
  capbrcup: "⩉",
  capcap: "⩋",
  capcup: "⩇",
  capdot: "⩀",
  caps: "∩︀",
  caret: "⁁",
  caron: "ˇ",
  ccaps: "⩍",
  ccaron: "č",
  ccedil: "ç",
  ccirc: "ĉ",
  ccups: "⩌",
  ccupssm: "⩐",
  cdot: "ċ",
  cedil: "¸",
  cemptyv: "⦲",
  cent: "¢",
  centerdot: "·",
  cfr: "𝔠",
  chcy: "ч",
  check: "✓",
  checkmark: "✓",
  chi: "χ",
  cir: "○",
  cirE: "⧃",
  circ: "ˆ",
  circeq: "≗",
  circlearrowleft: "↺",
  circlearrowright: "↻",
  circledR: "®",
  circledS: "Ⓢ",
  circledast: "⊛",
  circledcirc: "⊚",
  circleddash: "⊝",
  cire: "≗",
  cirfnint: "⨐",
  cirmid: "⫯",
  cirscir: "⧂",
  clubs: "♣",
  clubsuit: "♣",
  colon: ":",
  colone: "≔",
  coloneq: "≔",
  comma: ",",
  commat: "@",
  comp: "∁",
  compfn: "∘",
  complement: "∁",
  complexes: "ℂ",
  cong: "≅",
  congdot: "⩭",
  conint: "∮",
  copf: "𝕔",
  coprod: "∐",
  copy: "©",
  copysr: "℗",
  crarr: "↵",
  cross: "✗",
  cscr: "𝒸",
  csub: "⫏",
  csube: "⫑",
  csup: "⫐",
  csupe: "⫒",
  ctdot: "⋯",
  cudarrl: "⤸",
  cudarrr: "⤵",
  cuepr: "⋞",
  cuesc: "⋟",
  cularr: "↶",
  cularrp: "⤽",
  cup: "∪",
  cupbrcap: "⩈",
  cupcap: "⩆",
  cupcup: "⩊",
  cupdot: "⊍",
  cupor: "⩅",
  cups: "∪︀",
  curarr: "↷",
  curarrm: "⤼",
  curlyeqprec: "⋞",
  curlyeqsucc: "⋟",
  curlyvee: "⋎",
  curlywedge: "⋏",
  curren: "¤",
  curvearrowleft: "↶",
  curvearrowright: "↷",
  cuvee: "⋎",
  cuwed: "⋏",
  cwconint: "∲",
  cwint: "∱",
  cylcty: "⌭",
  dArr: "⇓",
  dHar: "⥥",
  dagger: "†",
  daleth: "ℸ",
  darr: "↓",
  dash: "‐",
  dashv: "⊣",
  dbkarow: "⤏",
  dblac: "˝",
  dcaron: "ď",
  dcy: "д",
  dd: "ⅆ",
  ddagger: "‡",
  ddarr: "⇊",
  ddotseq: "⩷",
  deg: "°",
  delta: "δ",
  demptyv: "⦱",
  dfisht: "⥿",
  dfr: "𝔡",
  dharl: "⇃",
  dharr: "⇂",
  diam: "⋄",
  diamond: "⋄",
  diamondsuit: "♦",
  diams: "♦",
  die: "¨",
  digamma: "ϝ",
  disin: "⋲",
  div: "÷",
  divide: "÷",
  divideontimes: "⋇",
  divonx: "⋇",
  djcy: "ђ",
  dlcorn: "⌞",
  dlcrop: "⌍",
  dollar: "$",
  dopf: "𝕕",
  dot: "˙",
  doteq: "≐",
  doteqdot: "≑",
  dotminus: "∸",
  dotplus: "∔",
  dotsquare: "⊡",
  doublebarwedge: "⌆",
  downarrow: "↓",
  downdownarrows: "⇊",
  downharpoonleft: "⇃",
  downharpoonright: "⇂",
  drbkarow: "⤐",
  drcorn: "⌟",
  drcrop: "⌌",
  dscr: "𝒹",
  dscy: "ѕ",
  dsol: "⧶",
  dstrok: "đ",
  dtdot: "⋱",
  dtri: "▿",
  dtrif: "▾",
  duarr: "⇵",
  duhar: "⥯",
  dwangle: "⦦",
  dzcy: "џ",
  dzigrarr: "⟿",
  eDDot: "⩷",
  eDot: "≑",
  eacute: "é",
  easter: "⩮",
  ecaron: "ě",
  ecir: "≖",
  ecirc: "ê",
  ecolon: "≕",
  ecy: "э",
  edot: "ė",
  ee: "ⅇ",
  efDot: "≒",
  efr: "𝔢",
  eg: "⪚",
  egrave: "è",
  egs: "⪖",
  egsdot: "⪘",
  el: "⪙",
  elinters: "⏧",
  ell: "ℓ",
  els: "⪕",
  elsdot: "⪗",
  emacr: "ē",
  empty: "∅",
  emptyset: "∅",
  emptyv: "∅",
  emsp13: " ",
  emsp14: " ",
  emsp: " ",
  eng: "ŋ",
  ensp: " ",
  eogon: "ę",
  eopf: "𝕖",
  epar: "⋕",
  eparsl: "⧣",
  eplus: "⩱",
  epsi: "ε",
  epsilon: "ε",
  epsiv: "ϵ",
  eqcirc: "≖",
  eqcolon: "≕",
  eqsim: "≂",
  eqslantgtr: "⪖",
  eqslantless: "⪕",
  equals: "=",
  equest: "≟",
  equiv: "≡",
  equivDD: "⩸",
  eqvparsl: "⧥",
  erDot: "≓",
  erarr: "⥱",
  escr: "ℯ",
  esdot: "≐",
  esim: "≂",
  eta: "η",
  eth: "ð",
  euml: "ë",
  euro: "€",
  excl: "!",
  exist: "∃",
  expectation: "ℰ",
  exponentiale: "ⅇ",
  fallingdotseq: "≒",
  fcy: "ф",
  female: "♀",
  ffilig: "ﬃ",
  fflig: "ﬀ",
  ffllig: "ﬄ",
  ffr: "𝔣",
  filig: "ﬁ",
  fjlig: "fj",
  flat: "♭",
  fllig: "ﬂ",
  fltns: "▱",
  fnof: "ƒ",
  fopf: "𝕗",
  forall: "∀",
  fork: "⋔",
  forkv: "⫙",
  fpartint: "⨍",
  frac12: "½",
  frac13: "⅓",
  frac14: "¼",
  frac15: "⅕",
  frac16: "⅙",
  frac18: "⅛",
  frac23: "⅔",
  frac25: "⅖",
  frac34: "¾",
  frac35: "⅗",
  frac38: "⅜",
  frac45: "⅘",
  frac56: "⅚",
  frac58: "⅝",
  frac78: "⅞",
  frasl: "⁄",
  frown: "⌢",
  fscr: "𝒻",
  gE: "≧",
  gEl: "⪌",
  gacute: "ǵ",
  gamma: "γ",
  gammad: "ϝ",
  gap: "⪆",
  gbreve: "ğ",
  gcirc: "ĝ",
  gcy: "г",
  gdot: "ġ",
  ge: "≥",
  gel: "⋛",
  geq: "≥",
  geqq: "≧",
  geqslant: "⩾",
  ges: "⩾",
  gescc: "⪩",
  gesdot: "⪀",
  gesdoto: "⪂",
  gesdotol: "⪄",
  gesl: "⋛︀",
  gesles: "⪔",
  gfr: "𝔤",
  gg: "≫",
  ggg: "⋙",
  gimel: "ℷ",
  gjcy: "ѓ",
  gl: "≷",
  glE: "⪒",
  gla: "⪥",
  glj: "⪤",
  gnE: "≩",
  gnap: "⪊",
  gnapprox: "⪊",
  gne: "⪈",
  gneq: "⪈",
  gneqq: "≩",
  gnsim: "⋧",
  gopf: "𝕘",
  grave: "`",
  gscr: "ℊ",
  gsim: "≳",
  gsime: "⪎",
  gsiml: "⪐",
  gt: ">",
  gtcc: "⪧",
  gtcir: "⩺",
  gtdot: "⋗",
  gtlPar: "⦕",
  gtquest: "⩼",
  gtrapprox: "⪆",
  gtrarr: "⥸",
  gtrdot: "⋗",
  gtreqless: "⋛",
  gtreqqless: "⪌",
  gtrless: "≷",
  gtrsim: "≳",
  gvertneqq: "≩︀",
  gvnE: "≩︀",
  hArr: "⇔",
  hairsp: " ",
  half: "½",
  hamilt: "ℋ",
  hardcy: "ъ",
  harr: "↔",
  harrcir: "⥈",
  harrw: "↭",
  hbar: "ℏ",
  hcirc: "ĥ",
  hearts: "♥",
  heartsuit: "♥",
  hellip: "…",
  hercon: "⊹",
  hfr: "𝔥",
  hksearow: "⤥",
  hkswarow: "⤦",
  hoarr: "⇿",
  homtht: "∻",
  hookleftarrow: "↩",
  hookrightarrow: "↪",
  hopf: "𝕙",
  horbar: "―",
  hscr: "𝒽",
  hslash: "ℏ",
  hstrok: "ħ",
  hybull: "⁃",
  hyphen: "‐",
  iacute: "í",
  ic: "⁣",
  icirc: "î",
  icy: "и",
  iecy: "е",
  iexcl: "¡",
  iff: "⇔",
  ifr: "𝔦",
  igrave: "ì",
  ii: "ⅈ",
  iiiint: "⨌",
  iiint: "∭",
  iinfin: "⧜",
  iiota: "℩",
  ijlig: "ĳ",
  imacr: "ī",
  image: "ℑ",
  imagline: "ℐ",
  imagpart: "ℑ",
  imath: "ı",
  imof: "⊷",
  imped: "Ƶ",
  in: "∈",
  incare: "℅",
  infin: "∞",
  infintie: "⧝",
  inodot: "ı",
  int: "∫",
  intcal: "⊺",
  integers: "ℤ",
  intercal: "⊺",
  intlarhk: "⨗",
  intprod: "⨼",
  iocy: "ё",
  iogon: "į",
  iopf: "𝕚",
  iota: "ι",
  iprod: "⨼",
  iquest: "¿",
  iscr: "𝒾",
  isin: "∈",
  isinE: "⋹",
  isindot: "⋵",
  isins: "⋴",
  isinsv: "⋳",
  isinv: "∈",
  it: "⁢",
  itilde: "ĩ",
  iukcy: "і",
  iuml: "ï",
  jcirc: "ĵ",
  jcy: "й",
  jfr: "𝔧",
  jmath: "ȷ",
  jopf: "𝕛",
  jscr: "𝒿",
  jsercy: "ј",
  jukcy: "є",
  kappa: "κ",
  kappav: "ϰ",
  kcedil: "ķ",
  kcy: "к",
  kfr: "𝔨",
  kgreen: "ĸ",
  khcy: "х",
  kjcy: "ќ",
  kopf: "𝕜",
  kscr: "𝓀",
  lAarr: "⇚",
  lArr: "⇐",
  lAtail: "⤛",
  lBarr: "⤎",
  lE: "≦",
  lEg: "⪋",
  lHar: "⥢",
  lacute: "ĺ",
  laemptyv: "⦴",
  lagran: "ℒ",
  lambda: "λ",
  lang: "⟨",
  langd: "⦑",
  langle: "⟨",
  lap: "⪅",
  laquo: "«",
  larr: "←",
  larrb: "⇤",
  larrbfs: "⤟",
  larrfs: "⤝",
  larrhk: "↩",
  larrlp: "↫",
  larrpl: "⤹",
  larrsim: "⥳",
  larrtl: "↢",
  lat: "⪫",
  latail: "⤙",
  late: "⪭",
  lates: "⪭︀",
  lbarr: "⤌",
  lbbrk: "❲",
  lbrace: "{",
  lbrack: "[",
  lbrke: "⦋",
  lbrksld: "⦏",
  lbrkslu: "⦍",
  lcaron: "ľ",
  lcedil: "ļ",
  lceil: "⌈",
  lcub: "{",
  lcy: "л",
  ldca: "⤶",
  ldquo: "“",
  ldquor: "„",
  ldrdhar: "⥧",
  ldrushar: "⥋",
  ldsh: "↲",
  le: "≤",
  leftarrow: "←",
  leftarrowtail: "↢",
  leftharpoondown: "↽",
  leftharpoonup: "↼",
  leftleftarrows: "⇇",
  leftrightarrow: "↔",
  leftrightarrows: "⇆",
  leftrightharpoons: "⇋",
  leftrightsquigarrow: "↭",
  leftthreetimes: "⋋",
  leg: "⋚",
  leq: "≤",
  leqq: "≦",
  leqslant: "⩽",
  les: "⩽",
  lescc: "⪨",
  lesdot: "⩿",
  lesdoto: "⪁",
  lesdotor: "⪃",
  lesg: "⋚︀",
  lesges: "⪓",
  lessapprox: "⪅",
  lessdot: "⋖",
  lesseqgtr: "⋚",
  lesseqqgtr: "⪋",
  lessgtr: "≶",
  lesssim: "≲",
  lfisht: "⥼",
  lfloor: "⌊",
  lfr: "𝔩",
  lg: "≶",
  lgE: "⪑",
  lhard: "↽",
  lharu: "↼",
  lharul: "⥪",
  lhblk: "▄",
  ljcy: "љ",
  ll: "≪",
  llarr: "⇇",
  llcorner: "⌞",
  llhard: "⥫",
  lltri: "◺",
  lmidot: "ŀ",
  lmoust: "⎰",
  lmoustache: "⎰",
  lnE: "≨",
  lnap: "⪉",
  lnapprox: "⪉",
  lne: "⪇",
  lneq: "⪇",
  lneqq: "≨",
  lnsim: "⋦",
  loang: "⟬",
  loarr: "⇽",
  lobrk: "⟦",
  longleftarrow: "⟵",
  longleftrightarrow: "⟷",
  longmapsto: "⟼",
  longrightarrow: "⟶",
  looparrowleft: "↫",
  looparrowright: "↬",
  lopar: "⦅",
  lopf: "𝕝",
  loplus: "⨭",
  lotimes: "⨴",
  lowast: "∗",
  lowbar: "_",
  loz: "◊",
  lozenge: "◊",
  lozf: "⧫",
  lpar: "(",
  lparlt: "⦓",
  lrarr: "⇆",
  lrcorner: "⌟",
  lrhar: "⇋",
  lrhard: "⥭",
  lrm: "‎",
  lrtri: "⊿",
  lsaquo: "‹",
  lscr: "𝓁",
  lsh: "↰",
  lsim: "≲",
  lsime: "⪍",
  lsimg: "⪏",
  lsqb: "[",
  lsquo: "‘",
  lsquor: "‚",
  lstrok: "ł",
  lt: "<",
  ltcc: "⪦",
  ltcir: "⩹",
  ltdot: "⋖",
  lthree: "⋋",
  ltimes: "⋉",
  ltlarr: "⥶",
  ltquest: "⩻",
  ltrPar: "⦖",
  ltri: "◃",
  ltrie: "⊴",
  ltrif: "◂",
  lurdshar: "⥊",
  luruhar: "⥦",
  lvertneqq: "≨︀",
  lvnE: "≨︀",
  mDDot: "∺",
  macr: "¯",
  male: "♂",
  malt: "✠",
  maltese: "✠",
  map: "↦",
  mapsto: "↦",
  mapstodown: "↧",
  mapstoleft: "↤",
  mapstoup: "↥",
  marker: "▮",
  mcomma: "⨩",
  mcy: "м",
  mdash: "—",
  measuredangle: "∡",
  mfr: "𝔪",
  mho: "℧",
  micro: "µ",
  mid: "∣",
  midast: "*",
  midcir: "⫰",
  middot: "·",
  minus: "−",
  minusb: "⊟",
  minusd: "∸",
  minusdu: "⨪",
  mlcp: "⫛",
  mldr: "…",
  mnplus: "∓",
  models: "⊧",
  mopf: "𝕞",
  mp: "∓",
  mscr: "𝓂",
  mstpos: "∾",
  mu: "μ",
  multimap: "⊸",
  mumap: "⊸",
  nGg: "⋙̸",
  nGt: "≫⃒",
  nGtv: "≫̸",
  nLeftarrow: "⇍",
  nLeftrightarrow: "⇎",
  nLl: "⋘̸",
  nLt: "≪⃒",
  nLtv: "≪̸",
  nRightarrow: "⇏",
  nVDash: "⊯",
  nVdash: "⊮",
  nabla: "∇",
  nacute: "ń",
  nang: "∠⃒",
  nap: "≉",
  napE: "⩰̸",
  napid: "≋̸",
  napos: "ŉ",
  napprox: "≉",
  natur: "♮",
  natural: "♮",
  naturals: "ℕ",
  nbsp: " ",
  nbump: "≎̸",
  nbumpe: "≏̸",
  ncap: "⩃",
  ncaron: "ň",
  ncedil: "ņ",
  ncong: "≇",
  ncongdot: "⩭̸",
  ncup: "⩂",
  ncy: "н",
  ndash: "–",
  ne: "≠",
  neArr: "⇗",
  nearhk: "⤤",
  nearr: "↗",
  nearrow: "↗",
  nedot: "≐̸",
  nequiv: "≢",
  nesear: "⤨",
  nesim: "≂̸",
  nexist: "∄",
  nexists: "∄",
  nfr: "𝔫",
  ngE: "≧̸",
  nge: "≱",
  ngeq: "≱",
  ngeqq: "≧̸",
  ngeqslant: "⩾̸",
  nges: "⩾̸",
  ngsim: "≵",
  ngt: "≯",
  ngtr: "≯",
  nhArr: "⇎",
  nharr: "↮",
  nhpar: "⫲",
  ni: "∋",
  nis: "⋼",
  nisd: "⋺",
  niv: "∋",
  njcy: "њ",
  nlArr: "⇍",
  nlE: "≦̸",
  nlarr: "↚",
  nldr: "‥",
  nle: "≰",
  nleftarrow: "↚",
  nleftrightarrow: "↮",
  nleq: "≰",
  nleqq: "≦̸",
  nleqslant: "⩽̸",
  nles: "⩽̸",
  nless: "≮",
  nlsim: "≴",
  nlt: "≮",
  nltri: "⋪",
  nltrie: "⋬",
  nmid: "∤",
  nopf: "𝕟",
  not: "¬",
  notin: "∉",
  notinE: "⋹̸",
  notindot: "⋵̸",
  notinva: "∉",
  notinvb: "⋷",
  notinvc: "⋶",
  notni: "∌",
  notniva: "∌",
  notnivb: "⋾",
  notnivc: "⋽",
  npar: "∦",
  nparallel: "∦",
  nparsl: "⫽⃥",
  npart: "∂̸",
  npolint: "⨔",
  npr: "⊀",
  nprcue: "⋠",
  npre: "⪯̸",
  nprec: "⊀",
  npreceq: "⪯̸",
  nrArr: "⇏",
  nrarr: "↛",
  nrarrc: "⤳̸",
  nrarrw: "↝̸",
  nrightarrow: "↛",
  nrtri: "⋫",
  nrtrie: "⋭",
  nsc: "⊁",
  nsccue: "⋡",
  nsce: "⪰̸",
  nscr: "𝓃",
  nshortmid: "∤",
  nshortparallel: "∦",
  nsim: "≁",
  nsime: "≄",
  nsimeq: "≄",
  nsmid: "∤",
  nspar: "∦",
  nsqsube: "⋢",
  nsqsupe: "⋣",
  nsub: "⊄",
  nsubE: "⫅̸",
  nsube: "⊈",
  nsubset: "⊂⃒",
  nsubseteq: "⊈",
  nsubseteqq: "⫅̸",
  nsucc: "⊁",
  nsucceq: "⪰̸",
  nsup: "⊅",
  nsupE: "⫆̸",
  nsupe: "⊉",
  nsupset: "⊃⃒",
  nsupseteq: "⊉",
  nsupseteqq: "⫆̸",
  ntgl: "≹",
  ntilde: "ñ",
  ntlg: "≸",
  ntriangleleft: "⋪",
  ntrianglelefteq: "⋬",
  ntriangleright: "⋫",
  ntrianglerighteq: "⋭",
  nu: "ν",
  num: "#",
  numero: "№",
  numsp: " ",
  nvDash: "⊭",
  nvHarr: "⤄",
  nvap: "≍⃒",
  nvdash: "⊬",
  nvge: "≥⃒",
  nvgt: ">⃒",
  nvinfin: "⧞",
  nvlArr: "⤂",
  nvle: "≤⃒",
  nvlt: "<⃒",
  nvltrie: "⊴⃒",
  nvrArr: "⤃",
  nvrtrie: "⊵⃒",
  nvsim: "∼⃒",
  nwArr: "⇖",
  nwarhk: "⤣",
  nwarr: "↖",
  nwarrow: "↖",
  nwnear: "⤧",
  oS: "Ⓢ",
  oacute: "ó",
  oast: "⊛",
  ocir: "⊚",
  ocirc: "ô",
  ocy: "о",
  odash: "⊝",
  odblac: "ő",
  odiv: "⨸",
  odot: "⊙",
  odsold: "⦼",
  oelig: "œ",
  ofcir: "⦿",
  ofr: "𝔬",
  ogon: "˛",
  ograve: "ò",
  ogt: "⧁",
  ohbar: "⦵",
  ohm: "Ω",
  oint: "∮",
  olarr: "↺",
  olcir: "⦾",
  olcross: "⦻",
  oline: "‾",
  olt: "⧀",
  omacr: "ō",
  omega: "ω",
  omicron: "ο",
  omid: "⦶",
  ominus: "⊖",
  oopf: "𝕠",
  opar: "⦷",
  operp: "⦹",
  oplus: "⊕",
  or: "∨",
  orarr: "↻",
  ord: "⩝",
  order: "ℴ",
  orderof: "ℴ",
  ordf: "ª",
  ordm: "º",
  origof: "⊶",
  oror: "⩖",
  orslope: "⩗",
  orv: "⩛",
  oscr: "ℴ",
  oslash: "ø",
  osol: "⊘",
  otilde: "õ",
  otimes: "⊗",
  otimesas: "⨶",
  ouml: "ö",
  ovbar: "⌽",
  par: "∥",
  para: "¶",
  parallel: "∥",
  parsim: "⫳",
  parsl: "⫽",
  part: "∂",
  pcy: "п",
  percnt: "%",
  period: ".",
  permil: "‰",
  perp: "⊥",
  pertenk: "‱",
  pfr: "𝔭",
  phi: "φ",
  phiv: "ϕ",
  phmmat: "ℳ",
  phone: "☎",
  pi: "π",
  pitchfork: "⋔",
  piv: "ϖ",
  planck: "ℏ",
  planckh: "ℎ",
  plankv: "ℏ",
  plus: "+",
  plusacir: "⨣",
  plusb: "⊞",
  pluscir: "⨢",
  plusdo: "∔",
  plusdu: "⨥",
  pluse: "⩲",
  plusmn: "±",
  plussim: "⨦",
  plustwo: "⨧",
  pm: "±",
  pointint: "⨕",
  popf: "𝕡",
  pound: "£",
  pr: "≺",
  prE: "⪳",
  prap: "⪷",
  prcue: "≼",
  pre: "⪯",
  prec: "≺",
  precapprox: "⪷",
  preccurlyeq: "≼",
  preceq: "⪯",
  precnapprox: "⪹",
  precneqq: "⪵",
  precnsim: "⋨",
  precsim: "≾",
  prime: "′",
  primes: "ℙ",
  prnE: "⪵",
  prnap: "⪹",
  prnsim: "⋨",
  prod: "∏",
  profalar: "⌮",
  profline: "⌒",
  profsurf: "⌓",
  prop: "∝",
  propto: "∝",
  prsim: "≾",
  prurel: "⊰",
  pscr: "𝓅",
  psi: "ψ",
  puncsp: " ",
  qfr: "𝔮",
  qint: "⨌",
  qopf: "𝕢",
  qprime: "⁗",
  qscr: "𝓆",
  quaternions: "ℍ",
  quatint: "⨖",
  quest: "?",
  questeq: "≟",
  quot: '"',
  rAarr: "⇛",
  rArr: "⇒",
  rAtail: "⤜",
  rBarr: "⤏",
  rHar: "⥤",
  race: "∽̱",
  racute: "ŕ",
  radic: "√",
  raemptyv: "⦳",
  rang: "⟩",
  rangd: "⦒",
  range: "⦥",
  rangle: "⟩",
  raquo: "»",
  rarr: "→",
  rarrap: "⥵",
  rarrb: "⇥",
  rarrbfs: "⤠",
  rarrc: "⤳",
  rarrfs: "⤞",
  rarrhk: "↪",
  rarrlp: "↬",
  rarrpl: "⥅",
  rarrsim: "⥴",
  rarrtl: "↣",
  rarrw: "↝",
  ratail: "⤚",
  ratio: "∶",
  rationals: "ℚ",
  rbarr: "⤍",
  rbbrk: "❳",
  rbrace: "}",
  rbrack: "]",
  rbrke: "⦌",
  rbrksld: "⦎",
  rbrkslu: "⦐",
  rcaron: "ř",
  rcedil: "ŗ",
  rceil: "⌉",
  rcub: "}",
  rcy: "р",
  rdca: "⤷",
  rdldhar: "⥩",
  rdquo: "”",
  rdquor: "”",
  rdsh: "↳",
  real: "ℜ",
  realine: "ℛ",
  realpart: "ℜ",
  reals: "ℝ",
  rect: "▭",
  reg: "®",
  rfisht: "⥽",
  rfloor: "⌋",
  rfr: "𝔯",
  rhard: "⇁",
  rharu: "⇀",
  rharul: "⥬",
  rho: "ρ",
  rhov: "ϱ",
  rightarrow: "→",
  rightarrowtail: "↣",
  rightharpoondown: "⇁",
  rightharpoonup: "⇀",
  rightleftarrows: "⇄",
  rightleftharpoons: "⇌",
  rightrightarrows: "⇉",
  rightsquigarrow: "↝",
  rightthreetimes: "⋌",
  ring: "˚",
  risingdotseq: "≓",
  rlarr: "⇄",
  rlhar: "⇌",
  rlm: "‏",
  rmoust: "⎱",
  rmoustache: "⎱",
  rnmid: "⫮",
  roang: "⟭",
  roarr: "⇾",
  robrk: "⟧",
  ropar: "⦆",
  ropf: "𝕣",
  roplus: "⨮",
  rotimes: "⨵",
  rpar: ")",
  rpargt: "⦔",
  rppolint: "⨒",
  rrarr: "⇉",
  rsaquo: "›",
  rscr: "𝓇",
  rsh: "↱",
  rsqb: "]",
  rsquo: "’",
  rsquor: "’",
  rthree: "⋌",
  rtimes: "⋊",
  rtri: "▹",
  rtrie: "⊵",
  rtrif: "▸",
  rtriltri: "⧎",
  ruluhar: "⥨",
  rx: "℞",
  sacute: "ś",
  sbquo: "‚",
  sc: "≻",
  scE: "⪴",
  scap: "⪸",
  scaron: "š",
  sccue: "≽",
  sce: "⪰",
  scedil: "ş",
  scirc: "ŝ",
  scnE: "⪶",
  scnap: "⪺",
  scnsim: "⋩",
  scpolint: "⨓",
  scsim: "≿",
  scy: "с",
  sdot: "⋅",
  sdotb: "⊡",
  sdote: "⩦",
  seArr: "⇘",
  searhk: "⤥",
  searr: "↘",
  searrow: "↘",
  sect: "§",
  semi: ";",
  seswar: "⤩",
  setminus: "∖",
  setmn: "∖",
  sext: "✶",
  sfr: "𝔰",
  sfrown: "⌢",
  sharp: "♯",
  shchcy: "щ",
  shcy: "ш",
  shortmid: "∣",
  shortparallel: "∥",
  shy: "­",
  sigma: "σ",
  sigmaf: "ς",
  sigmav: "ς",
  sim: "∼",
  simdot: "⩪",
  sime: "≃",
  simeq: "≃",
  simg: "⪞",
  simgE: "⪠",
  siml: "⪝",
  simlE: "⪟",
  simne: "≆",
  simplus: "⨤",
  simrarr: "⥲",
  slarr: "←",
  smallsetminus: "∖",
  smashp: "⨳",
  smeparsl: "⧤",
  smid: "∣",
  smile: "⌣",
  smt: "⪪",
  smte: "⪬",
  smtes: "⪬︀",
  softcy: "ь",
  sol: "/",
  solb: "⧄",
  solbar: "⌿",
  sopf: "𝕤",
  spades: "♠",
  spadesuit: "♠",
  spar: "∥",
  sqcap: "⊓",
  sqcaps: "⊓︀",
  sqcup: "⊔",
  sqcups: "⊔︀",
  sqsub: "⊏",
  sqsube: "⊑",
  sqsubset: "⊏",
  sqsubseteq: "⊑",
  sqsup: "⊐",
  sqsupe: "⊒",
  sqsupset: "⊐",
  sqsupseteq: "⊒",
  squ: "□",
  square: "□",
  squarf: "▪",
  squf: "▪",
  srarr: "→",
  sscr: "𝓈",
  ssetmn: "∖",
  ssmile: "⌣",
  sstarf: "⋆",
  star: "☆",
  starf: "★",
  straightepsilon: "ϵ",
  straightphi: "ϕ",
  strns: "¯",
  sub: "⊂",
  subE: "⫅",
  subdot: "⪽",
  sube: "⊆",
  subedot: "⫃",
  submult: "⫁",
  subnE: "⫋",
  subne: "⊊",
  subplus: "⪿",
  subrarr: "⥹",
  subset: "⊂",
  subseteq: "⊆",
  subseteqq: "⫅",
  subsetneq: "⊊",
  subsetneqq: "⫋",
  subsim: "⫇",
  subsub: "⫕",
  subsup: "⫓",
  succ: "≻",
  succapprox: "⪸",
  succcurlyeq: "≽",
  succeq: "⪰",
  succnapprox: "⪺",
  succneqq: "⪶",
  succnsim: "⋩",
  succsim: "≿",
  sum: "∑",
  sung: "♪",
  sup1: "¹",
  sup2: "²",
  sup3: "³",
  sup: "⊃",
  supE: "⫆",
  supdot: "⪾",
  supdsub: "⫘",
  supe: "⊇",
  supedot: "⫄",
  suphsol: "⟉",
  suphsub: "⫗",
  suplarr: "⥻",
  supmult: "⫂",
  supnE: "⫌",
  supne: "⊋",
  supplus: "⫀",
  supset: "⊃",
  supseteq: "⊇",
  supseteqq: "⫆",
  supsetneq: "⊋",
  supsetneqq: "⫌",
  supsim: "⫈",
  supsub: "⫔",
  supsup: "⫖",
  swArr: "⇙",
  swarhk: "⤦",
  swarr: "↙",
  swarrow: "↙",
  swnwar: "⤪",
  szlig: "ß",
  target: "⌖",
  tau: "τ",
  tbrk: "⎴",
  tcaron: "ť",
  tcedil: "ţ",
  tcy: "т",
  tdot: "⃛",
  telrec: "⌕",
  tfr: "𝔱",
  there4: "∴",
  therefore: "∴",
  theta: "θ",
  thetasym: "ϑ",
  thetav: "ϑ",
  thickapprox: "≈",
  thicksim: "∼",
  thinsp: " ",
  thkap: "≈",
  thksim: "∼",
  thorn: "þ",
  tilde: "˜",
  times: "×",
  timesb: "⊠",
  timesbar: "⨱",
  timesd: "⨰",
  tint: "∭",
  toea: "⤨",
  top: "⊤",
  topbot: "⌶",
  topcir: "⫱",
  topf: "𝕥",
  topfork: "⫚",
  tosa: "⤩",
  tprime: "‴",
  trade: "™",
  triangle: "▵",
  triangledown: "▿",
  triangleleft: "◃",
  trianglelefteq: "⊴",
  triangleq: "≜",
  triangleright: "▹",
  trianglerighteq: "⊵",
  tridot: "◬",
  trie: "≜",
  triminus: "⨺",
  triplus: "⨹",
  trisb: "⧍",
  tritime: "⨻",
  trpezium: "⏢",
  tscr: "𝓉",
  tscy: "ц",
  tshcy: "ћ",
  tstrok: "ŧ",
  twixt: "≬",
  twoheadleftarrow: "↞",
  twoheadrightarrow: "↠",
  uArr: "⇑",
  uHar: "⥣",
  uacute: "ú",
  uarr: "↑",
  ubrcy: "ў",
  ubreve: "ŭ",
  ucirc: "û",
  ucy: "у",
  udarr: "⇅",
  udblac: "ű",
  udhar: "⥮",
  ufisht: "⥾",
  ufr: "𝔲",
  ugrave: "ù",
  uharl: "↿",
  uharr: "↾",
  uhblk: "▀",
  ulcorn: "⌜",
  ulcorner: "⌜",
  ulcrop: "⌏",
  ultri: "◸",
  umacr: "ū",
  uml: "¨",
  uogon: "ų",
  uopf: "𝕦",
  uparrow: "↑",
  updownarrow: "↕",
  upharpoonleft: "↿",
  upharpoonright: "↾",
  uplus: "⊎",
  upsi: "υ",
  upsih: "ϒ",
  upsilon: "υ",
  upuparrows: "⇈",
  urcorn: "⌝",
  urcorner: "⌝",
  urcrop: "⌎",
  uring: "ů",
  urtri: "◹",
  uscr: "𝓊",
  utdot: "⋰",
  utilde: "ũ",
  utri: "▵",
  utrif: "▴",
  uuarr: "⇈",
  uuml: "ü",
  uwangle: "⦧",
  vArr: "⇕",
  vBar: "⫨",
  vBarv: "⫩",
  vDash: "⊨",
  vangrt: "⦜",
  varepsilon: "ϵ",
  varkappa: "ϰ",
  varnothing: "∅",
  varphi: "ϕ",
  varpi: "ϖ",
  varpropto: "∝",
  varr: "↕",
  varrho: "ϱ",
  varsigma: "ς",
  varsubsetneq: "⊊︀",
  varsubsetneqq: "⫋︀",
  varsupsetneq: "⊋︀",
  varsupsetneqq: "⫌︀",
  vartheta: "ϑ",
  vartriangleleft: "⊲",
  vartriangleright: "⊳",
  vcy: "в",
  vdash: "⊢",
  vee: "∨",
  veebar: "⊻",
  veeeq: "≚",
  vellip: "⋮",
  verbar: "|",
  vert: "|",
  vfr: "𝔳",
  vltri: "⊲",
  vnsub: "⊂⃒",
  vnsup: "⊃⃒",
  vopf: "𝕧",
  vprop: "∝",
  vrtri: "⊳",
  vscr: "𝓋",
  vsubnE: "⫋︀",
  vsubne: "⊊︀",
  vsupnE: "⫌︀",
  vsupne: "⊋︀",
  vzigzag: "⦚",
  wcirc: "ŵ",
  wedbar: "⩟",
  wedge: "∧",
  wedgeq: "≙",
  weierp: "℘",
  wfr: "𝔴",
  wopf: "𝕨",
  wp: "℘",
  wr: "≀",
  wreath: "≀",
  wscr: "𝓌",
  xcap: "⋂",
  xcirc: "◯",
  xcup: "⋃",
  xdtri: "▽",
  xfr: "𝔵",
  xhArr: "⟺",
  xharr: "⟷",
  xi: "ξ",
  xlArr: "⟸",
  xlarr: "⟵",
  xmap: "⟼",
  xnis: "⋻",
  xodot: "⨀",
  xopf: "𝕩",
  xoplus: "⨁",
  xotime: "⨂",
  xrArr: "⟹",
  xrarr: "⟶",
  xscr: "𝓍",
  xsqcup: "⨆",
  xuplus: "⨄",
  xutri: "△",
  xvee: "⋁",
  xwedge: "⋀",
  yacute: "ý",
  yacy: "я",
  ycirc: "ŷ",
  ycy: "ы",
  yen: "¥",
  yfr: "𝔶",
  yicy: "ї",
  yopf: "𝕪",
  yscr: "𝓎",
  yucy: "ю",
  yuml: "ÿ",
  zacute: "ź",
  zcaron: "ž",
  zcy: "з",
  zdot: "ż",
  zeetrf: "ℨ",
  zeta: "ζ",
  zfr: "𝔷",
  zhcy: "ж",
  zigrarr: "⇝",
  zopf: "𝕫",
  zscr: "𝓏",
  zwj: "‍",
  zwnj: "‌"
}, dt = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
function st(n) {
  return n.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (t) => {
    if (t.charAt(1) === "#") {
      const e = t.charAt(2), u = e === "X" || e === "x" ? parseInt(t.slice(3), 16) : parseInt(t.slice(2), 10);
      return gt(u);
    }
    return B2(ct, t.slice(1, -1)) ?? t;
  });
}
function gt(n) {
  return n >= 55296 && n <= 57343 || n > 1114111 ? "�" : String.fromCodePoint(B2(dt, n) ?? n);
}
function at(n, t) {
  return n.startIndex = n.tokenIndex = n.index, n.startColumn = n.tokenColumn = n.column, n.startLine = n.tokenLine = n.line, n.setToken(B[n.currentChar] & 8192 ? ht(n) : Dn(n, t, 0)), n.getToken();
}
function ht(n) {
  const t = n.currentChar;
  let e = a(n);
  const u = n.index;
  for (; e !== t; )
    n.index >= n.end && n.report(16), e = a(n);
  return e !== t && n.report(16), n.tokenValue = n.source.slice(u, n.index), a(n), n.options.raw && (n.tokenRaw = n.source.slice(n.tokenIndex, n.index)), 134283267;
}
function s2(n) {
  if (n.startIndex = n.tokenIndex = n.index, n.startColumn = n.tokenColumn = n.column, n.startLine = n.tokenLine = n.line, n.index >= n.end) {
    n.setToken(1048576);
    return;
  }
  if (n.currentChar === 60) {
    a(n), n.setToken(8456256);
    return;
  }
  if (n.currentChar === 123) {
    a(n), n.setToken(2162700);
    return;
  }
  let t = 0;
  for (; n.index < n.end; ) {
    const u = B[n.source.charCodeAt(n.index)];
    if (u & 1024 ? (t |= 5, x(n)) : u & 2048 ? (j2(n, t), t = t & -5 | 1) : a(n), B[n.currentChar] & 16384)
      break;
  }
  n.tokenIndex === n.index && n.report(0);
  const e = n.source.slice(n.tokenIndex, n.index);
  n.options.raw && (n.tokenRaw = e), n.tokenValue = st(e), n.setToken(137);
}
function O2(n) {
  if ((n.getToken() & 143360) === 143360) {
    const { index: t } = n;
    let e = n.currentChar;
    for (; B[e] & 32770; )
      e = a(n);
    n.tokenValue += n.source.slice(t, n.index), n.setToken(208897, !0);
  }
  return n.getToken();
}
function mt(n) {
  const t = {
    validateRegex: !0,
    ...n
  };
  return t.module && !t.sourceType && (t.sourceType = "module"), t.globalReturn && (!t.sourceType || t.sourceType === "script") && (t.sourceType = "commonjs"), t;
}
class kt {
  parser;
  parent;
  refs = /* @__PURE__ */ Object.create(null);
  privateIdentifiers = /* @__PURE__ */ new Map();
  constructor(t, e) {
    this.parser = t, this.parent = e;
  }
  addPrivateIdentifier(t, e) {
    const { privateIdentifiers: u } = this;
    let o = e & 800;
    o & 768 || (o |= 768);
    const i = u.get(t);
    this.hasPrivateIdentifier(t) && ((i & 32) !== (o & 32) || i & o & 768) && this.parser.report(146, t), u.set(t, this.hasPrivateIdentifier(t) ? i | o : o);
  }
  addPrivateIdentifierRef(t) {
    this.refs[t] ??= [], this.refs[t].push(this.parser.tokenStart);
  }
  isPrivateIdentifierDefined(t) {
    return this.hasPrivateIdentifier(t) || !!this.parent?.isPrivateIdentifierDefined(t);
  }
  validatePrivateIdentifierRefs() {
    for (const t in this.refs)
      if (!this.isPrivateIdentifierDefined(t)) {
        const { index: e, line: u, column: o } = this.refs[t][0];
        throw new V({ index: e, line: u, column: o }, { index: e + t.length, line: u, column: o + t.length }, 4, t);
      }
  }
  hasPrivateIdentifier(t) {
    return this.privateIdentifiers.has(t);
  }
}
class H2 {
  parser;
  type;
  parent;
  scopeError;
  variableBindings = /* @__PURE__ */ new Map();
  constructor(t, e = 2, u) {
    this.parser = t, this.type = e, this.parent = u;
  }
  createChildScope(t) {
    return new H2(this.parser, t, this);
  }
  addVarOrBlock(t, e, u, o) {
    u & 4 ? this.addVarName(t, e, u) : this.addBlockName(t, e, u, o), o & 64 && this.parser.declareUnboundVariable(e);
  }
  addVarName(t, e, u) {
    const { parser: o } = this;
    let i = this;
    for (; i && (i.type & 128) === 0; ) {
      const { variableBindings: l } = i, f = l.get(e);
      f && f & 248 && (o.options.webcompat && (t & 1) === 0 && (u & 128 && f & 68 || f & 128 && u & 68) || o.report(145, e)), i === this && f && f & 1 && u & 1 && i.recordScopeError(145, e), f && (f & 256 || f & 512 && !o.options.webcompat) && o.report(145, e), i.variableBindings.set(e, u), i = i.parent;
    }
  }
  hasVariable(t) {
    return this.variableBindings.has(t);
  }
  addBlockName(t, e, u, o) {
    const { parser: i } = this, l = this.variableBindings.get(e);
    l && (l & 2) === 0 && (u & 1 ? this.recordScopeError(145, e) : i.options.webcompat && (t & 1) === 0 && o & 2 && l === 64 && u === 64 || i.report(145, e)), this.type & 64 && this.parent?.hasVariable(e) && (this.parent.variableBindings.get(e) & 2) === 0 && i.report(145, e), this.type & 512 && l && (l & 2) === 0 && u & 1 && this.recordScopeError(145, e), this.type & 32 && this.parent.variableBindings.get(e) & 768 && i.report(159, e), this.variableBindings.set(e, u);
  }
  recordScopeError(t, ...e) {
    this.scopeError = {
      type: t,
      params: e,
      start: this.parser.tokenStart,
      end: this.parser.currentLocation
    };
  }
  reportScopeError() {
    const { scopeError: t } = this;
    if (t)
      throw new V(t.start, t.end, t.type, ...t.params);
  }
}
function F2(n, t, e) {
  const u = n.createScope().createChildScope(512);
  return u.addBlockName(t, e, 1, 0), u;
}
let bt = class {
  source;
  lastOnToken = null;
  options;
  token = 1048576;
  flags = 0;
  index = 0;
  line = 1;
  column = 0;
  startIndex = 0;
  end = 0;
  tokenIndex = 0;
  startColumn = 0;
  tokenColumn = 0;
  tokenLine = 1;
  startLine = 1;
  tokenValue = "";
  tokenRaw = "";
  tokenRegExp = void 0;
  currentChar = 0;
  exportedNames = /* @__PURE__ */ new Set();
  exportedBindings = /* @__PURE__ */ new Set();
  assignable = 1;
  destructible = 0;
  leadingDecorators = { decorators: [] };
  constructor(t, e = {}) {
    this.source = t, this.end = t.length, this.currentChar = t.charCodeAt(0), this.options = mt(e), Array.isArray(this.options.onComment) && (this.options.onComment = Dt(this.options.onComment, this.options)), Array.isArray(this.options.onToken) && (this.options.onToken = At(this.options.onToken, this.options));
  }
  getToken() {
    return this.token;
  }
  setToken(t, e = !1) {
    this.token = t;
    const { onToken: u } = this.options;
    if (u)
      if (t !== 1048576) {
        const o = {
          start: {
            line: this.tokenLine,
            column: this.tokenColumn
          },
          end: {
            line: this.line,
            column: this.column
          }
        };
        !e && this.lastOnToken && u(...this.lastOnToken), this.lastOnToken = [Yn(t), this.tokenIndex, this.index, o];
      } else
        this.lastOnToken && (u(...this.lastOnToken), this.lastOnToken = null);
    return t;
  }
  get tokenStart() {
    return {
      index: this.tokenIndex,
      line: this.tokenLine,
      column: this.tokenColumn
    };
  }
  get currentLocation() {
    return { index: this.index, line: this.line, column: this.column };
  }
  finishNode(t, e, u) {
    if (this.options.ranges) {
      t.start = e.index;
      const o = u ? u.index : this.startIndex;
      t.end = o, t.range = [e.index, o];
    }
    return this.options.loc && (t.loc = {
      start: {
        line: e.line,
        column: e.column
      },
      end: u ? { line: u.line, column: u.column } : { line: this.startLine, column: this.startColumn }
    }, this.options.source && (t.loc.source = this.options.source)), t;
  }
  addBindingToExports(t) {
    this.exportedBindings.add(t);
  }
  declareUnboundVariable(t) {
    const { exportedNames: e } = this;
    e.has(t) && this.report(147, t), e.add(t);
  }
  report(t, ...e) {
    throw new V(this.tokenStart, this.currentLocation, t, ...e);
  }
  createScopeIfLexical(t, e) {
    if (this.options.lexical)
      return this.createScope(t, e);
  }
  createScope(t, e) {
    return new H2(this, t, e);
  }
  createPrivateScopeIfLexical(t) {
    if (this.options.lexical)
      return new kt(this, t);
  }
  cloneIdentifier(t) {
    return this.cloneLocationInformation({ ...t }, t);
  }
  cloneStringLiteral(t) {
    return this.cloneLocationInformation({ ...t }, t);
  }
  cloneLocationInformation(t, e) {
    return this.options.ranges && (t.range = [...e.range]), this.options.loc && (t.loc = {
      ...e.loc,
      start: { ...e.loc.start },
      end: { ...e.loc.end }
    }), t;
  }
};
function Dt(n, t) {
  return function(e, u, o, i, l) {
    const f = {
      type: e,
      value: u
    };
    t.ranges && (f.start = o, f.end = i, f.range = [o, i]), t.loc && (f.loc = l), n.push(f);
  };
}
function At(n, t) {
  return function(e, u, o, i) {
    const l = {
      token: e
    };
    t.ranges && (l.start = u, l.end = o, l.range = [u, o]), t.loc && (l.loc = i), n.push(l);
  };
}
function Ct(n, t = {}, e = 0) {
  const u = new bt(n, t);
  u.options.sourceType === "module" && (e |= 3), u.options.sourceType === "commonjs" && (e |= 69632), u.options.impliedStrict && (e |= 1), Kn(u);
  const o = u.createScopeIfLexical();
  let i = [], l = "script";
  if (e & 2) {
    if (l = "module", i = Tt(u, e | 8, o), o)
      for (const f of u.exportedBindings)
        o.hasVariable(f) || u.report(148, f);
  } else
    i = Et(u, e | 8, o);
  return u.finishNode({
    type: "Program",
    sourceType: l,
    body: i
  }, { index: 0, line: 1, column: 0 }, u.currentLocation);
}
function Et(n, t, e) {
  m(n, t | 32 | 262144);
  const u = [];
  for (; n.getToken() === 134283267; ) {
    const { index: o, tokenValue: i, tokenStart: l, tokenIndex: f } = n, c = n.getToken(), g = v(n, t);
    if (An(n, o, f, i)) {
      if (t |= 1, n.flags & 64)
        throw new V(n.tokenStart, n.currentLocation, 9);
      if (n.flags & 4096)
        throw new V(n.tokenStart, n.currentLocation, 15);
    }
    u.push(W2(n, t, g, c, l));
  }
  for (; n.getToken() !== 1048576; )
    u.push(g2(n, t, e, void 0, 4, {}));
  return u;
}
function Tt(n, t, e) {
  m(n, t | 32);
  const u = [];
  for (; n.getToken() === 134283267; ) {
    const { tokenStart: o } = n, i = n.getToken();
    u.push(W2(n, t, v(n, t), i, o));
  }
  for (; n.getToken() !== 1048576; )
    u.push(yt(n, t, e));
  return u;
}
function yt(n, t, e) {
  n.getToken() === 132 && Object.assign(n.leadingDecorators, {
    start: n.tokenStart,
    decorators: q2(n, t, void 0)
  });
  let u;
  switch (n.getToken()) {
    case 20564:
      u = Xt(n, t, e);
      break;
    case 86106:
      u = Mt(n, t, e);
      break;
    default:
      u = g2(n, t, e, void 0, 4, {});
  }
  return n.leadingDecorators?.decorators.length && n.report(170), u;
}
function g2(n, t, e, u, o, i) {
  const l = n.tokenStart;
  switch (n.getToken()) {
    case 86104:
      return Q(n, t, e, u, o, 1, 0, 0, l);
    case 132:
    case 86094:
      return R2(n, t, e, u, 0);
    case 86090:
      return v2(n, t, e, u, 16, 0);
    case 241737:
      return Jt(n, t, e, u, o);
    case 20564:
      n.report(103, "export");
    case 86106:
      switch (m(n, t), n.getToken()) {
        case 67174411:
          return Sn(n, t, u, l);
        case 67108877:
          return Bn(n, t, l);
        default:
          n.report(103, "import");
      }
    case 209005:
      return yn(n, t, e, u, o, i, 1);
    default:
      return a2(n, t, e, u, o, i, 1);
  }
}
function a2(n, t, e, u, o, i, l) {
  switch (n.getToken()) {
    case 86088:
      return rn(n, t, e, u, 0);
    case 20572:
      return wt(n, t, u);
    case 20569:
      return Ft(n, t, e, u, i);
    case 20567:
      return jt(n, t, e, u, i);
    case 20562:
      return Ut(n, t, e, u, i);
    case 20578:
      return It(n, t, e, u, i);
    case 86110:
      return Nt(n, t, e, u, i);
    case 1074790417:
      return Bt(n, t);
    case 2162700:
      return c2(n, t, e?.createChildScope(), u, i, n.tokenStart);
    case 86112:
      return St(n, t, u);
    case 20555:
      return Lt(n, t, i);
    case 20559:
      return qt(n, t, i);
    case 20577:
      return vt(n, t, e, u, i);
    case 20579:
      return Vt(n, t, e, u, i);
    case 20560:
      return Ot(n, t);
    case 209005:
      return yn(n, t, e, u, o, i, 0);
    case 20557:
      n.report(162);
    case 20566:
      n.report(163);
    case 86104:
      n.report(t & 1 ? 76 : n.options.webcompat ? 77 : 78);
    case 86094:
      n.report(79);
    default:
      return rt(n, t, e, u, o, i, l);
  }
}
function rt(n, t, e, u, o, i, l) {
  const { tokenValue: f, tokenStart: c } = n, g = n.getToken();
  let d;
  switch (g) {
    case 241737:
      d = I(n, t), t & 1 && n.report(85), n.getToken() === 69271571 && n.report(84);
      break;
    default:
      d = j(n, t, u, 2, 0, 1, 0, 1, n.tokenStart);
  }
  return g & 143360 && n.getToken() === 21 ? z2(n, t, e, u, o, i, f, d, g, l, c) : (d = N(n, t, u, d, 0, 0, c), d = L(n, t, u, 0, 0, c, d), n.getToken() === 18 && (d = _(n, t, u, 0, c, d)), e2(n, t, d, c));
}
function c2(n, t, e, u, o, i = n.tokenStart, l = "BlockStatement") {
  const f = [];
  for (D(n, t | 32, 2162700); n.getToken() !== 1074790415; )
    f.push(g2(n, t, e, u, 2, { $: o }));
  return D(n, t | 32, 1074790415), n.finishNode({
    type: l,
    body: f
  }, i);
}
function wt(n, t, e) {
  (t & 4096) === 0 && n.report(92);
  const u = n.tokenStart;
  m(n, t | 32);
  const o = n.flags & 1 || n.getToken() & 1048576 ? null : P(n, t, e, 0, 1, n.tokenStart);
  return U(n, t | 32), n.finishNode({
    type: "ReturnStatement",
    argument: o
  }, u);
}
function e2(n, t, e, u) {
  return U(n, t | 32), n.finishNode({
    type: "ExpressionStatement",
    expression: e
  }, u);
}
function z2(n, t, e, u, o, i, l, f, c, g, d) {
  T2(n, t, 0, c, 1), ft(n, i, l), m(n, t | 32);
  const s = g && (t & 1) === 0 && n.options.webcompat && n.getToken() === 86104 ? Q(n, t, e?.createChildScope(), u, o, 0, 0, 0, n.tokenStart) : a2(n, t, e, u, o, i, g);
  return n.finishNode({
    type: "LabeledStatement",
    label: f,
    body: s
  }, d);
}
function yn(n, t, e, u, o, i, l) {
  const { tokenValue: f, tokenStart: c } = n, g = n.getToken();
  let d = I(n, t);
  if (n.getToken() === 21)
    return z2(n, t, e, u, o, i, f, d, g, 1, c);
  const s = n.flags & 1;
  if (!s) {
    if (n.getToken() === 86104)
      return l || n.report(123), Q(n, t, e, u, o, 1, 0, 1, c);
    if (d2(t, n.getToken()))
      return d = On(n, t, u, 1, c), n.getToken() === 18 && (d = _(n, t, u, 0, c, d)), e2(n, t, d, c);
  }
  return n.getToken() === 67174411 ? d = G2(n, t, u, d, 1, 1, 0, s, c) : (n.getToken() === 10 && (S2(n, t, g), (g & 36864) === 36864 && (n.flags |= 256), d = I2(n, t | 2048, u, n.tokenValue, d, 0, 1, 0, c)), n.assignable = 1), d = N(n, t, u, d, 0, 0, c), d = L(n, t, u, 0, 0, c, d), n.assignable = 1, n.getToken() === 18 && (d = _(n, t, u, 0, c, d)), e2(n, t, d, c);
}
function W2(n, t, e, u, o) {
  const i = n.startIndex;
  u !== 1074790417 && (n.assignable = 2, e = N(n, t, void 0, e, 0, 0, o), n.getToken() !== 1074790417 && (e = L(n, t, void 0, 0, 0, o, e), n.getToken() === 18 && (e = _(n, t, void 0, 0, o, e))), U(n, t | 32));
  const l = {
    type: "ExpressionStatement",
    expression: e
  };
  return e.type === "Literal" && typeof e.value == "string" && (l.directive = n.source.slice(o.index + 1, i - 1)), n.finishNode(l, o);
}
function Bt(n, t) {
  const e = n.tokenStart;
  return m(n, t | 32), n.finishNode({
    type: "EmptyStatement"
  }, e);
}
function St(n, t, e) {
  const u = n.tokenStart;
  m(n, t | 32), n.flags & 1 && n.report(90);
  const o = P(n, t, e, 0, 1, n.tokenStart);
  return U(n, t | 32), n.finishNode({
    type: "ThrowStatement",
    argument: o
  }, u);
}
function Ft(n, t, e, u, o) {
  const i = n.tokenStart;
  m(n, t), D(n, t | 32, 67174411), n.assignable = 1;
  const l = P(n, t, u, 0, 1, n.tokenStart);
  D(n, t | 32, 16);
  const f = un(n, t, e, u, o);
  let c = null;
  return n.getToken() === 20563 && (m(n, t | 32), c = un(n, t, e, u, o)), n.finishNode({
    type: "IfStatement",
    test: l,
    consequent: f,
    alternate: c
  }, i);
}
function un(n, t, e, u, o) {
  const { tokenStart: i } = n;
  return t & 1 || !n.options.webcompat || n.getToken() !== 86104 ? a2(n, t, e, u, 0, { $: o }, 0) : Q(n, t, e?.createChildScope(), u, 0, 0, 0, 0, i);
}
function Nt(n, t, e, u, o) {
  const i = n.tokenStart;
  m(n, t), D(n, t | 32, 67174411);
  const l = P(n, t, u, 0, 1, n.tokenStart);
  D(n, t, 16), D(n, t, 2162700);
  const f = [];
  let c = 0;
  for (e = e?.createChildScope(8); n.getToken() !== 1074790415; ) {
    const { tokenStart: g } = n;
    let d = null;
    const s = [];
    for (r(n, t | 32, 20556) ? d = P(n, t, u, 0, 1, n.tokenStart) : (D(n, t | 32, 20561), c && n.report(89), c = 1), D(n, t | 32, 21); n.getToken() !== 20556 && n.getToken() !== 1074790415 && n.getToken() !== 20561; )
      s.push(g2(n, t | 4, e, u, 2, {
        $: o
      }));
    f.push(n.finishNode({
      type: "SwitchCase",
      test: d,
      consequent: s
    }, g));
  }
  return D(n, t | 32, 1074790415), n.finishNode({
    type: "SwitchStatement",
    discriminant: l,
    cases: f
  }, i);
}
function It(n, t, e, u, o) {
  const i = n.tokenStart;
  m(n, t), D(n, t | 32, 67174411);
  const l = P(n, t, u, 0, 1, n.tokenStart);
  D(n, t | 32, 16);
  const f = l2(n, t, e, u, o);
  return n.finishNode({
    type: "WhileStatement",
    test: l,
    body: f
  }, i);
}
function l2(n, t, e, u, o) {
  return a2(n, (t | 131072) ^ 131072 | 128, e, u, 0, { loop: 1, $: o }, 0);
}
function qt(n, t, e) {
  (t & 128) === 0 && n.report(68);
  const u = n.tokenStart;
  m(n, t);
  let o = null;
  if ((n.flags & 1) === 0 && n.getToken() & 143360) {
    const { tokenValue: i } = n;
    o = I(n, t | 32), Tn(n, e, i, 1) || n.report(138, i);
  }
  return U(n, t | 32), n.finishNode({
    type: "ContinueStatement",
    label: o
  }, u);
}
function Lt(n, t, e) {
  const u = n.tokenStart;
  m(n, t | 32);
  let o = null;
  if ((n.flags & 1) === 0 && n.getToken() & 143360) {
    const { tokenValue: i } = n;
    o = I(n, t | 32), Tn(n, e, i, 0) || n.report(138, i);
  } else (t & 132) === 0 && n.report(69);
  return U(n, t | 32), n.finishNode({
    type: "BreakStatement",
    label: o
  }, u);
}
function Vt(n, t, e, u, o) {
  const i = n.tokenStart;
  m(n, t), t & 1 && n.report(91), D(n, t | 32, 67174411);
  const l = P(n, t, u, 0, 1, n.tokenStart);
  D(n, t | 32, 16);
  const f = a2(n, t, e, u, 2, o, 0);
  return n.finishNode({
    type: "WithStatement",
    object: l,
    body: f
  }, i);
}
function Ot(n, t) {
  const e = n.tokenStart;
  return m(n, t | 32), U(n, t | 32), n.finishNode({
    type: "DebuggerStatement"
  }, e);
}
function vt(n, t, e, u, o) {
  const i = n.tokenStart;
  m(n, t | 32);
  const l = e?.createChildScope(16), f = c2(n, t, l, u, { $: o }), { tokenStart: c } = n, g = r(n, t | 32, 20557) ? Pt(n, t, e, u, o, c) : null;
  let d = null;
  if (n.getToken() === 20566) {
    m(n, t | 32);
    const s = e?.createChildScope(4);
    d = c2(n, t, s, u, { $: o });
  }
  return !g && !d && n.report(88), n.finishNode({
    type: "TryStatement",
    block: f,
    handler: g,
    finalizer: d
  }, i);
}
function Pt(n, t, e, u, o, i) {
  let l = null, f = e;
  r(n, t, 67174411) && (e = e?.createChildScope(4), l = Rn(n, t, e, u, (n.getToken() & 2097152) === 2097152 ? 256 : 512, 0), n.getToken() === 18 ? n.report(86) : n.getToken() === 1077936155 && n.report(87), D(n, t | 32, 16)), f = e?.createChildScope(32);
  const c = c2(n, t, f, u, { $: o });
  return n.finishNode({
    type: "CatchClause",
    param: l,
    body: c
  }, i);
}
function Rt(n, t, e, u, o) {
  e = e?.createChildScope();
  const i = 5764;
  return t = (t | i) ^ i | 256 | 2048 | 524288 | 65536, c2(n, t, e, u, {}, o, "StaticBlock");
}
function Ut(n, t, e, u, o) {
  const i = n.tokenStart;
  m(n, t | 32);
  const l = l2(n, t, e, u, o);
  D(n, t, 20578), D(n, t | 32, 67174411);
  const f = P(n, t, u, 0, 1, n.tokenStart);
  return D(n, t | 32, 16), r(n, t | 32, 1074790417), n.finishNode({
    type: "DoWhileStatement",
    body: l,
    test: f
  }, i);
}
function Jt(n, t, e, u, o) {
  const { tokenValue: i, tokenStart: l } = n, f = n.getToken();
  let c = I(n, t);
  if (n.getToken() & 2240512) {
    const g = t2(n, t, e, u, 8, 0);
    return U(n, t | 32), n.finishNode({
      type: "VariableDeclaration",
      kind: "let",
      declarations: g
    }, l);
  }
  if (n.assignable = 1, t & 1 && n.report(85), n.getToken() === 21)
    return z2(n, t, e, u, o, {}, i, c, f, 0, l);
  if (n.getToken() === 10) {
    let g;
    n.options.lexical && (g = F2(n, t, i)), n.flags = (n.flags | 128) ^ 128, c = h2(n, t, g, u, [c], 0, l);
  } else
    c = N(n, t, u, c, 0, 0, l), c = L(n, t, u, 0, 0, l, c);
  return n.getToken() === 18 && (c = _(n, t, u, 0, l, c)), e2(n, t, c, l);
}
function v2(n, t, e, u, o, i) {
  const l = n.tokenStart;
  m(n, t);
  const f = t2(n, t, e, u, o, i);
  return U(n, t | 32), n.finishNode({
    type: "VariableDeclaration",
    kind: o & 8 ? "let" : "const",
    declarations: f
  }, l);
}
function rn(n, t, e, u, o) {
  const i = n.tokenStart;
  m(n, t);
  const l = t2(n, t, e, u, 4, o);
  return U(n, t | 32), n.finishNode({
    type: "VariableDeclaration",
    kind: "var",
    declarations: l
  }, i);
}
function t2(n, t, e, u, o, i) {
  let l = 1;
  const f = [
    on(n, t, e, u, o, i)
  ];
  for (; r(n, t, 18); )
    l++, f.push(on(n, t, e, u, o, i));
  return l > 1 && i & 32 && n.getToken() & 262144 && n.report(61, F[n.getToken() & 255]), f;
}
function on(n, t, e, u, o, i) {
  const { tokenStart: l } = n, f = n.getToken();
  let c = null;
  const g = Rn(n, t, e, u, o, i);
  if (n.getToken() === 1077936155) {
    if (m(n, t | 32), c = q(n, t, u, 1, 0, n.tokenStart), (i & 32 || (f & 2097152) === 0) && (n.getToken() === 471156 || n.getToken() === 8673330 && (f & 2097152 || (o & 4) === 0 || t & 1)))
      throw new V(l, n.currentLocation, 60, n.getToken() === 471156 ? "of" : "in");
  } else (o & 16 || (f & 2097152) > 0) && (n.getToken() & 262144) !== 262144 && n.report(59, o & 16 ? "const" : "destructuring");
  return n.finishNode({
    type: "VariableDeclarator",
    id: g,
    init: c
  }, l);
}
function jt(n, t, e, u, o) {
  const i = n.tokenStart;
  m(n, t);
  const l = ((t & 2048) > 0 || (t & 2) > 0 && (t & 8) > 0) && r(n, t, 209006);
  D(n, t | 32, 67174411), e = e?.createChildScope(1);
  let f = null, c = null, g = 0, d = null, s = n.getToken() === 86088 || n.getToken() === 241737 || n.getToken() === 86090, h;
  const { tokenStart: A } = n, C = n.getToken();
  if (s)
    C === 241737 ? (d = I(n, t), n.getToken() & 2240512 ? (n.getToken() === 8673330 ? t & 1 && n.report(67) : d = n.finishNode({
      type: "VariableDeclaration",
      kind: "let",
      declarations: t2(n, t | 131072, e, u, 8, 32)
    }, A), n.assignable = 1) : t & 1 ? n.report(67) : (s = !1, n.assignable = 1, d = N(n, t, u, d, 0, 0, A), n.getToken() === 471156 && n.report(115))) : (m(n, t), d = n.finishNode(C === 86088 ? {
      type: "VariableDeclaration",
      kind: "var",
      declarations: t2(n, t | 131072, e, u, 4, 32)
    } : {
      type: "VariableDeclaration",
      kind: "const",
      declarations: t2(n, t | 131072, e, u, 16, 32)
    }, A), n.assignable = 1);
  else if (C === 1074790417)
    l && n.report(82);
  else if ((C & 2097152) === 2097152) {
    const E = n.tokenStart;
    d = C === 2162700 ? X(n, t, void 0, u, 1, 0, 0, 2, 32) : $(n, t, void 0, u, 1, 0, 0, 2, 32), g = n.destructible, g & 64 && n.report(63), n.assignable = g & 16 ? 2 : 1, d = N(n, t | 131072, u, d, 0, 0, E);
  } else
    d = M(n, t | 131072, u, 1, 0, 1);
  if ((n.getToken() & 262144) === 262144) {
    if (n.getToken() === 471156) {
      n.assignable & 2 && n.report(80, l ? "await" : "of"), z(n, d), m(n, t | 32), h = q(n, t, u, 1, 0, n.tokenStart), D(n, t | 32, 16);
      const T = l2(n, t, e, u, o);
      return n.finishNode({
        type: "ForOfStatement",
        left: d,
        right: h,
        body: T,
        await: l
      }, i);
    }
    n.assignable & 2 && n.report(80, "in"), z(n, d), m(n, t | 32), l && n.report(82), h = P(n, t, u, 0, 1, n.tokenStart), D(n, t | 32, 16);
    const E = l2(n, t, e, u, o);
    return n.finishNode({
      type: "ForInStatement",
      body: E,
      left: d,
      right: h
    }, i);
  }
  l && n.report(82), s || (g & 8 && n.getToken() !== 1077936155 && n.report(80, "loop"), d = L(n, t | 131072, u, 0, 0, A, d)), n.getToken() === 18 && (d = _(n, t, u, 0, A, d)), D(n, t | 32, 1074790417), n.getToken() !== 1074790417 && (f = P(n, t, u, 0, 1, n.tokenStart)), D(n, t | 32, 1074790417), n.getToken() !== 16 && (c = P(n, t, u, 0, 1, n.tokenStart)), D(n, t | 32, 16);
  const y = l2(n, t, e, u, o);
  return n.finishNode({
    type: "ForStatement",
    init: d,
    test: f,
    update: c,
    body: y
  }, i);
}
function wn(n, t, e) {
  return d2(t, n.getToken()) || n.report(118), (n.getToken() & 537079808) === 537079808 && n.report(119), e?.addBlockName(t, n.tokenValue, 8, 0), I(n, t);
}
function Mt(n, t, e) {
  const u = n.tokenStart;
  m(n, t);
  let o = null;
  const { tokenStart: i } = n;
  let l = [];
  if (n.getToken() === 134283267)
    o = v(n, t);
  else {
    if (n.getToken() & 143360) {
      const g = wn(n, t, e);
      if (l = [
        n.finishNode({
          type: "ImportDefaultSpecifier",
          local: g
        }, i)
      ], r(n, t, 18))
        switch (n.getToken()) {
          case 8391476:
            l.push(ln(n, t, e));
            break;
          case 2162700:
            fn(n, t, e, l);
            break;
          default:
            n.report(107);
        }
    } else
      switch (n.getToken()) {
        case 8391476:
          l = [ln(n, t, e)];
          break;
        case 2162700:
          fn(n, t, e, l);
          break;
        case 67174411:
          return Sn(n, t, void 0, u);
        case 67108877:
          return Bn(n, t, u);
        default:
          n.report(30, F[n.getToken() & 255]);
      }
    o = $t(n, t);
  }
  const f = P2(n, t), c = {
    type: "ImportDeclaration",
    specifiers: l,
    source: o,
    attributes: f
  };
  return U(n, t | 32), n.finishNode(c, u);
}
function ln(n, t, e) {
  const { tokenStart: u } = n;
  if (m(n, t), D(n, t, 77932), (n.getToken() & 134217728) === 134217728)
    throw new V(u, n.currentLocation, 30, F[n.getToken() & 255]);
  return n.finishNode({
    type: "ImportNamespaceSpecifier",
    local: wn(n, t, e)
  }, u);
}
function $t(n, t) {
  return D(n, t, 209011), n.getToken() !== 134283267 && n.report(105, "Import"), v(n, t);
}
function fn(n, t, e, u) {
  for (m(n, t); n.getToken() & 143360 || n.getToken() === 134283267; ) {
    let { tokenValue: o, tokenStart: i } = n;
    const l = n.getToken(), f = D2(n, t);
    let c;
    r(n, t, 77932) ? ((n.getToken() & 134217728) === 134217728 || n.getToken() === 18 ? n.report(106) : T2(n, t, 16, n.getToken(), 0), o = n.tokenValue, c = I(n, t)) : f.type === "Identifier" ? (T2(n, t, 16, l, 0), c = n.cloneIdentifier(f)) : n.report(25, F[108]), e?.addBlockName(t, o, 8, 0), u.push(n.finishNode({
      type: "ImportSpecifier",
      local: c,
      imported: f
    }, i)), n.getToken() !== 1074790415 && D(n, t, 18);
  }
  return D(n, t, 1074790415), u;
}
function Bn(n, t, e) {
  let u = Fn(n, t, n.finishNode({
    type: "Identifier",
    name: "import"
  }, e), e);
  return u = N(n, t, void 0, u, 0, 0, e), u = L(n, t, void 0, 0, 0, e, u), n.getToken() === 18 && (u = _(n, t, void 0, 0, e, u)), e2(n, t, u, e);
}
function Sn(n, t, e, u) {
  let o = Nn(n, t, e, 0, u);
  return o = N(n, t, e, o, 0, 0, u), n.getToken() === 18 && (o = _(n, t, e, 0, u, o)), e2(n, t, o, u);
}
function Xt(n, t, e) {
  const u = n.leadingDecorators.decorators.length ? n.leadingDecorators.start : n.tokenStart;
  m(n, t | 32);
  const o = [];
  let i = null, l = null, f = [];
  if (r(n, t | 32, 20561)) {
    switch (n.getToken()) {
      case 86104: {
        i = Q(n, t, e, void 0, 4, 1, 1, 0, n.tokenStart);
        break;
      }
      case 132:
      case 86094:
        i = R2(n, t, e, void 0, 1);
        break;
      case 209005: {
        const { tokenStart: g } = n;
        i = I(n, t);
        const { flags: d } = n;
        (d & 1) === 0 && (n.getToken() === 86104 ? i = Q(n, t, e, void 0, 4, 1, 1, 1, g) : n.getToken() === 67174411 ? (i = G2(n, t, void 0, i, 1, 1, 0, d, g), i = N(n, t, void 0, i, 0, 0, g), i = L(n, t, void 0, 0, 0, g, i)) : n.getToken() & 143360 && (e && (e = F2(n, t, n.tokenValue)), i = I(n, t), i = h2(n, t, e, void 0, [i], 1, g)));
        break;
      }
      default:
        i = q(n, t, void 0, 1, 0, n.tokenStart), U(n, t | 32);
    }
    return e && n.declareUnboundVariable("default"), n.finishNode({
      type: "ExportDefaultDeclaration",
      declaration: i
    }, u);
  }
  switch (n.getToken()) {
    case 8391476: {
      m(n, t);
      let g = null;
      r(n, t, 77932) && (e && n.declareUnboundVariable(n.tokenValue), g = D2(n, t)), D(n, t, 209011), n.getToken() !== 134283267 && n.report(105, "Export"), l = v(n, t);
      const s = P2(n, t), h = {
        type: "ExportAllDeclaration",
        source: l,
        exported: g,
        attributes: s
      };
      return U(n, t | 32), n.finishNode(h, u);
    }
    case 2162700: {
      m(n, t);
      const g = [], d = [];
      let s = 0;
      for (; n.getToken() & 143360 || n.getToken() === 134283267; ) {
        const { tokenStart: h, tokenValue: A } = n, C = D2(n, t);
        C.type === "Literal" && (s = 1);
        let y;
        n.getToken() === 77932 ? (m(n, t), (n.getToken() & 143360) === 0 && n.getToken() !== 134283267 && n.report(106), e && (g.push(n.tokenValue), d.push(A)), y = D2(n, t)) : (e && (g.push(n.tokenValue), d.push(n.tokenValue)), y = C.type === "Literal" ? n.cloneStringLiteral(C) : n.cloneIdentifier(C)), o.push(n.finishNode({
          type: "ExportSpecifier",
          local: C,
          exported: y
        }, h)), n.getToken() !== 1074790415 && D(n, t, 18);
      }
      D(n, t, 1074790415), r(n, t, 209011) ? (n.getToken() !== 134283267 && n.report(105, "Export"), l = v(n, t), f = P2(n, t), e && g.forEach((h) => n.declareUnboundVariable(h))) : (s && n.report(172), e && (g.forEach((h) => n.declareUnboundVariable(h)), d.forEach((h) => n.addBindingToExports(h)))), U(n, t | 32);
      break;
    }
    case 132:
    case 86094:
      i = R2(n, t, e, void 0, 2);
      break;
    case 86104:
      i = Q(n, t, e, void 0, 4, 1, 2, 0, n.tokenStart);
      break;
    case 241737:
      i = v2(n, t, e, void 0, 8, 64);
      break;
    case 86090:
      i = v2(n, t, e, void 0, 16, 64);
      break;
    case 86088:
      i = rn(n, t, e, void 0, 64);
      break;
    case 209005: {
      const { tokenStart: g } = n;
      if (m(n, t), (n.flags & 1) === 0 && n.getToken() === 86104) {
        i = Q(n, t, e, void 0, 4, 1, 2, 1, g);
        break;
      }
    }
    default:
      n.report(30, F[n.getToken() & 255]);
  }
  const c = {
    type: "ExportNamedDeclaration",
    declaration: i,
    specifiers: o,
    source: l,
    attributes: f
  };
  return n.finishNode(c, u);
}
function q(n, t, e, u, o, i) {
  let l = j(n, t, e, 2, 0, u, o, 1, i);
  return l = N(n, t, e, l, o, 0, i), L(n, t, e, o, 0, i, l);
}
function _(n, t, e, u, o, i) {
  const l = [i];
  for (; r(n, t | 32, 18); )
    l.push(q(n, t, e, 1, u, n.tokenStart));
  return n.finishNode({
    type: "SequenceExpression",
    expressions: l
  }, o);
}
function P(n, t, e, u, o, i) {
  const l = q(n, t, e, o, u, i);
  return n.getToken() === 18 ? _(n, t, e, u, i, l) : l;
}
function L(n, t, e, u, o, i, l) {
  const f = n.getToken();
  if ((f & 4194304) === 4194304) {
    n.assignable & 2 && n.report(26), (!o && f === 1077936155 && l.type === "ArrayExpression" || l.type === "ObjectExpression") && z(n, l), m(n, t | 32);
    const c = q(n, t, e, 1, u, n.tokenStart);
    return n.assignable = 2, n.finishNode(o ? {
      type: "AssignmentPattern",
      left: l,
      right: c
    } : {
      type: "AssignmentExpression",
      left: l,
      operator: F[f & 255],
      right: c
    }, i);
  }
  return (f & 8388608) === 8388608 && (l = Z(n, t, e, u, i, 4, f, l)), r(n, t | 32, 22) && (l = G(n, t, e, l, i)), l;
}
function k2(n, t, e, u, o, i, l) {
  const f = n.getToken();
  m(n, t | 32);
  const c = q(n, t, e, 1, u, n.tokenStart);
  return l = n.finishNode(o ? {
    type: "AssignmentPattern",
    left: l,
    right: c
  } : {
    type: "AssignmentExpression",
    left: l,
    operator: F[f & 255],
    right: c
  }, i), n.assignable = 2, l;
}
function G(n, t, e, u, o) {
  const i = q(n, (t | 131072) ^ 131072, e, 1, 0, n.tokenStart);
  D(n, t | 32, 21), n.assignable = 1;
  const l = q(n, t, e, 1, 0, n.tokenStart);
  return n.assignable = 2, n.finishNode({
    type: "ConditionalExpression",
    test: u,
    consequent: i,
    alternate: l
  }, o);
}
function Z(n, t, e, u, o, i, l, f) {
  const c = -((t & 131072) > 0) & 8673330;
  let g, d;
  for (n.assignable = 2; n.getToken() & 8388608 && (g = n.getToken(), d = g & 3840, (g & 524288 && l & 268435456 || l & 524288 && g & 268435456) && n.report(165), !(d + ((g === 8391735) << 8) - ((c === g) << 12) <= i)); )
    m(n, t | 32), f = n.finishNode({
      type: g & 524288 || g & 268435456 ? "LogicalExpression" : "BinaryExpression",
      left: f,
      right: Z(n, t, e, u, n.tokenStart, d, g, M(n, t, e, 0, u, 1)),
      operator: F[g & 255]
    }, o);
  return n.getToken() === 1077936155 && n.report(26), f;
}
function Ht(n, t, e, u, o) {
  u || n.report(0);
  const { tokenStart: i } = n, l = n.getToken();
  m(n, t | 32);
  const f = M(n, t, e, 0, o, 1);
  return n.getToken() === 8391735 && n.report(33), t & 1 && l === 16863276 && (f.type === "Identifier" ? n.report(121) : lt(f) && n.report(127)), n.assignable = 2, n.finishNode({
    type: "UnaryExpression",
    operator: F[l & 255],
    argument: f,
    prefix: !0
  }, i);
}
function zt(n, t, e, u, o, i, l, f) {
  const c = n.getToken(), g = I(n, t), { flags: d } = n;
  if ((d & 1) === 0) {
    if (n.getToken() === 86104)
      return qn(n, t, e, 1, u, f);
    if (d2(t, n.getToken()))
      return o || n.report(0), (n.getToken() & 36864) === 36864 && (n.flags |= 256), On(n, t, e, i, f);
  }
  return !l && n.getToken() === 67174411 ? G2(n, t, e, g, i, 1, 0, d, f) : n.getToken() === 10 ? (S2(n, t, c), l && n.report(51), (c & 36864) === 36864 && (n.flags |= 256), I2(n, t, e, n.tokenValue, g, l, i, 0, f)) : (n.assignable = 1, g);
}
function Wt(n, t, e, u, o, i) {
  if (u && (n.destructible |= 256), t & 1024) {
    m(n, t | 32), t & 8192 && n.report(32), o || n.report(26), n.getToken() === 22 && n.report(124);
    let l = null, f = !1;
    return (n.flags & 1) === 0 ? (f = r(n, t | 32, 8391476), (n.getToken() & 77824 || f) && (l = q(n, t, e, 1, 0, n.tokenStart))) : n.getToken() === 8391476 && n.report(30, F[n.getToken() & 255]), n.assignable = 2, n.finishNode({
      type: "YieldExpression",
      argument: l,
      delegate: f
    }, i);
  }
  return t & 1 && n.report(97, "yield"), Q2(n, t, e);
}
function _t(n, t, e, u, o, i) {
  o && (n.destructible |= 128), t & 524288 && n.report(177);
  const l = Q2(n, t, e);
  if (l.type === "ArrowFunctionExpression" || (n.getToken() & 65536) === 0) {
    if (t & 2048)
      throw new V(i, { index: n.startIndex, line: n.startLine, column: n.startColumn }, 176);
    if (t & 2)
      throw new V(i, { index: n.startIndex, line: n.startLine, column: n.startColumn }, 110);
    if (t & 8192 && t & 2048)
      throw new V(i, { index: n.startIndex, line: n.startLine, column: n.startColumn }, 110);
    return l;
  }
  if (t & 8192)
    throw new V(i, { index: n.startIndex, line: n.startLine, column: n.startColumn }, 31);
  if (t & 2048 || t & 2 && t & 8) {
    if (u)
      throw new V(i, { index: n.startIndex, line: n.startLine, column: n.startColumn }, 0);
    const c = M(n, t, e, 0, 0, 1);
    return n.getToken() === 8391735 && n.report(33), n.assignable = 2, n.finishNode({
      type: "AwaitExpression",
      argument: c
    }, i);
  }
  if (t & 2)
    throw new V(i, { index: n.startIndex, line: n.startLine, column: n.startColumn }, 98);
  return l;
}
function N2(n, t, e, u, o, i, l) {
  const { tokenStart: f } = n;
  D(n, t | 32, 2162700);
  const c = [];
  if (n.getToken() !== 1074790415) {
    for (; n.getToken() === 134283267; ) {
      const { index: g, tokenStart: d, tokenIndex: s, tokenValue: h } = n, A = n.getToken(), C = v(n, t);
      if (An(n, g, s, h)) {
        if (t |= 1, n.flags & 128)
          throw new V(d, n.currentLocation, 66);
        if (n.flags & 64)
          throw new V(d, n.currentLocation, 9);
        if (n.flags & 4096)
          throw new V(d, n.currentLocation, 15);
        l?.reportScopeError();
      }
      c.push(W2(n, t, C, A, d));
    }
    t & 1 && (i && ((i & 537079808) === 537079808 && n.report(119), (i & 36864) === 36864 && n.report(40)), n.flags & 512 && n.report(119), n.flags & 256 && n.report(118));
  }
  for (n.flags = (n.flags | 512 | 256 | 64 | 4096) ^ 4928, n.destructible = (n.destructible | 256) ^ 256; n.getToken() !== 1074790415; )
    c.push(g2(n, t, e, u, 4, {}));
  return D(n, o & 24 ? t | 32 : t, 1074790415), n.flags &= -4289, n.getToken() === 1077936155 && n.report(26), n.finishNode({
    type: "BlockStatement",
    body: c
  }, f);
}
function Yt(n, t) {
  const { tokenStart: e } = n;
  switch (m(n, t), n.getToken()) {
    case 67108990:
      n.report(167);
    case 67174411: {
      (t & 512) === 0 && n.report(28), n.assignable = 2;
      break;
    }
    case 69271571:
    case 67108877: {
      (t & 256) === 0 && n.report(29), n.assignable = 1;
      break;
    }
    default:
      n.report(30, "super");
  }
  return n.finishNode({ type: "Super" }, e);
}
function M(n, t, e, u, o, i) {
  const l = n.tokenStart, f = j(n, t, e, 2, 0, u, o, i, l);
  return N(n, t, e, f, o, 0, l);
}
function Kt(n, t, e, u) {
  n.assignable & 2 && n.report(55);
  const o = n.getToken();
  return m(n, t), n.assignable = 2, n.finishNode({
    type: "UpdateExpression",
    argument: e,
    operator: F[o & 255],
    prefix: !1
  }, u);
}
function N(n, t, e, u, o, i, l) {
  if ((n.getToken() & 33619968) === 33619968 && (n.flags & 1) === 0)
    u = Kt(n, t, u, l);
  else if ((n.getToken() & 67108864) === 67108864) {
    switch (t = (t | 131072) ^ 131072, n.getToken()) {
      case 67108877: {
        m(n, (t | 262144 | 8) ^ 8), t & 16 && n.getToken() === 130 && n.tokenValue === "super" && n.report(173), n.assignable = 1;
        const f = _2(n, t | 64, e);
        u = n.finishNode({
          type: "MemberExpression",
          object: u,
          computed: !1,
          property: f,
          optional: !1
        }, l);
        break;
      }
      case 69271571: {
        let f = !1;
        (n.flags & 2048) === 2048 && (f = !0, n.flags = (n.flags | 2048) ^ 2048), m(n, t | 32);
        const { tokenStart: c } = n, g = P(n, t, e, o, 1, c);
        D(n, t, 20), n.assignable = 1, u = n.finishNode({
          type: "MemberExpression",
          object: u,
          computed: !0,
          property: g,
          optional: !1
        }, l), f && (n.flags |= 2048);
        break;
      }
      case 67174411: {
        if ((n.flags & 1024) === 1024)
          return n.flags = (n.flags | 1024) ^ 1024, u;
        let f = !1;
        (n.flags & 2048) === 2048 && (f = !0, n.flags = (n.flags | 2048) ^ 2048);
        const c = Z2(n, t, e, o);
        n.assignable = 2, u = n.finishNode({
          type: "CallExpression",
          callee: u,
          arguments: c,
          optional: !1
        }, l), f && (n.flags |= 2048);
        break;
      }
      case 67108990: {
        m(n, (t | 262144 | 8) ^ 8), n.flags |= 2048, n.assignable = 2, u = Zt(n, t, e, u, l);
        break;
      }
      default:
        (n.flags & 2048) === 2048 && n.report(166), n.assignable = 2, u = n.finishNode({
          type: "TaggedTemplateExpression",
          tag: u,
          quasi: n.getToken() === 67174408 ? K2(n, t | 64, e) : Y2(n, t)
        }, l);
    }
    u = N(n, t, e, u, 0, 1, l);
  }
  return i === 0 && (n.flags & 2048) === 2048 && (n.flags = (n.flags | 2048) ^ 2048, u = n.finishNode({
    type: "ChainExpression",
    expression: u
  }, l)), u;
}
function Zt(n, t, e, u, o) {
  let i = !1, l;
  if ((n.getToken() === 69271571 || n.getToken() === 67174411) && (n.flags & 2048) === 2048 && (i = !0, n.flags = (n.flags | 2048) ^ 2048), n.getToken() === 69271571) {
    m(n, t | 32);
    const { tokenStart: f } = n, c = P(n, t, e, 0, 1, f);
    D(n, t, 20), n.assignable = 2, l = n.finishNode({
      type: "MemberExpression",
      object: u,
      computed: !0,
      optional: !0,
      property: c
    }, o);
  } else if (n.getToken() === 67174411) {
    const f = Z2(n, t, e, 0);
    n.assignable = 2, l = n.finishNode({
      type: "CallExpression",
      callee: u,
      arguments: f,
      optional: !0
    }, o);
  } else {
    const f = _2(n, t, e);
    n.assignable = 2, l = n.finishNode({
      type: "MemberExpression",
      object: u,
      computed: !1,
      optional: !0,
      property: f
    }, o);
  }
  return i && (n.flags |= 2048), l;
}
function _2(n, t, e) {
  return (n.getToken() & 143360) === 0 && n.getToken() !== -2147483528 && n.getToken() !== -2147483527 && n.getToken() !== 130 && n.report(160), n.getToken() === 130 ? w2(n, t, e, 0) : I(n, t);
}
function Qt(n, t, e, u, o, i) {
  u && n.report(56), o || n.report(0);
  const l = n.getToken();
  m(n, t | 32);
  const f = M(n, t, e, 0, 0, 1);
  return n.assignable & 2 && n.report(55), n.assignable = 2, n.finishNode({
    type: "UpdateExpression",
    argument: f,
    operator: F[l & 255],
    prefix: !0
  }, i);
}
function j(n, t, e, u, o, i, l, f, c) {
  if ((n.getToken() & 143360) === 143360) {
    switch (n.getToken()) {
      case 209006:
        return _t(n, t, e, o, l, c);
      case 241771:
        return Wt(n, t, e, l, i, c);
      case 209005:
        return zt(n, t, e, l, f, i, o, c);
    }
    const { tokenValue: g } = n, d = n.getToken(), s = I(n, t | 64);
    return n.getToken() === 10 ? (f || n.report(0), S2(n, t, d), (d & 36864) === 36864 && (n.flags |= 256), I2(n, t, e, g, s, o, i, 0, c)) : (t & 16 && !(t & 32768) && !(t & 8192) && n.tokenValue === "arguments" && n.report(130), (d & 255) === 73 && (t & 1 && n.report(113), u & 24 && n.report(100)), n.assignable = t & 1 && (d & 537079808) === 537079808 ? 2 : 1, s);
  }
  if ((n.getToken() & 134217728) === 134217728)
    return v(n, t);
  switch (n.getToken()) {
    case 33619993:
    case 33619994:
      return Qt(n, t, e, o, f, c);
    case 16863276:
    case 16842798:
    case 16842799:
    case 25233968:
    case 25233969:
    case 16863275:
    case 16863277:
      return Ht(n, t, e, f, l);
    case 86104:
      return qn(n, t, e, 0, l, c);
    case 2162700:
      return ie(n, t, e, i ? 0 : 1, l);
    case 69271571:
      return ue(n, t, e, i ? 0 : 1, l);
    case 67174411:
      return le(n, t | 64, e, i, 1, 0, c);
    case 86021:
    case 86022:
    case 86023:
      return te(n, t);
    case 86111:
      return ee(n, t);
    case 65540:
      return de(n, t);
    case 132:
    case 86094:
      return se(n, t, e, l, c);
    case 86109:
      return Yt(n, t);
    case 67174409:
      return Y2(n, t);
    case 67174408:
      return K2(n, t, e);
    case 86107:
      return fe(n, t, e, l);
    case 134283388:
      return In(n, t);
    case 130:
      return w2(n, t, e, 0);
    case 86106:
      return Gt(n, t, e, o, l, c);
    case 8456256:
      if (n.options.jsx)
        return L2(n, t, e, 0, n.tokenStart);
    default:
      if (d2(t, n.getToken()))
        return Q2(n, t, e);
      n.report(30, F[n.getToken() & 255]);
  }
}
function Gt(n, t, e, u, o, i) {
  let l = I(n, t);
  return n.getToken() === 67108877 ? Fn(n, t, l, i) : (u && n.report(142), l = Nn(n, t, e, o, i), n.assignable = 2, N(n, t, e, l, o, 0, i));
}
function Fn(n, t, e, u) {
  (t & 2) === 0 && n.report(169), m(n, t);
  const o = n.getToken();
  return o !== 209030 && n.tokenValue !== "meta" ? n.report(174) : o & -2147483648 && n.report(175), n.assignable = 2, n.finishNode({
    type: "MetaProperty",
    meta: e,
    property: I(n, t)
  }, u);
}
function Nn(n, t, e, u, o) {
  D(n, t | 32, 67174411), n.getToken() === 14 && n.report(143);
  const i = q(n, t, e, 1, u, n.tokenStart);
  let l = null;
  if (n.getToken() === 18) {
    if (D(n, t, 18), n.getToken() !== 16) {
      const c = (t | 131072) ^ 131072;
      l = q(n, c, e, 1, u, n.tokenStart);
    }
    r(n, t, 18);
  }
  const f = {
    type: "ImportExpression",
    source: i,
    options: l
  };
  return D(n, t, 16), n.finishNode(f, o);
}
function P2(n, t) {
  if (!r(n, t, 20579))
    return [];
  D(n, t, 2162700);
  const e = [], u = /* @__PURE__ */ new Set();
  for (; n.getToken() !== 1074790415; ) {
    const o = n.tokenStart, i = pt(n, t);
    D(n, t, 21);
    const l = xt(n, t), f = i.type === "Literal" ? i.value : i.name;
    u.has(f) && n.report(145, `${f}`), u.add(f), e.push(n.finishNode({
      type: "ImportAttribute",
      key: i,
      value: l
    }, o)), n.getToken() !== 1074790415 && D(n, t, 18);
  }
  return D(n, t, 1074790415), e;
}
function xt(n, t) {
  if (n.getToken() === 134283267)
    return v(n, t);
  n.report(30, F[n.getToken() & 255]);
}
function pt(n, t) {
  if (n.getToken() === 134283267)
    return v(n, t);
  if (n.getToken() & 143360)
    return I(n, t);
  n.report(30, F[n.getToken() & 255]);
}
function D2(n, t) {
  if (n.getToken() === 134283267)
    return n.tokenValue.isWellFormed() || n.report(171), v(n, t);
  if (n.getToken() & 143360)
    return I(n, t);
  n.report(30, F[n.getToken() & 255]);
}
function In(n, t) {
  const { tokenRaw: e, tokenValue: u, tokenStart: o } = n;
  m(n, t), n.assignable = 2;
  const i = {
    type: "Literal",
    value: u,
    bigint: String(u)
  };
  return n.options.raw && (i.raw = e), n.finishNode(i, o);
}
function Y2(n, t) {
  n.assignable = 2;
  const { tokenValue: e, tokenRaw: u, tokenStart: o } = n;
  D(n, t, 67174409);
  const i = [A2(n, e, u, o, !0)];
  return n.finishNode({
    type: "TemplateLiteral",
    expressions: [],
    quasis: i
  }, o);
}
function K2(n, t, e) {
  t = (t | 131072) ^ 131072;
  const { tokenValue: u, tokenRaw: o, tokenStart: i } = n;
  D(n, t & -65 | 32, 67174408);
  const l = [A2(n, u, o, i, !1)], f = [
    P(n, t & -65, e, 0, 1, n.tokenStart)
  ];
  for (n.getToken() !== 1074790415 && n.report(83); n.setToken(it(n, t), !0) !== 67174409; ) {
    const { tokenValue: c, tokenRaw: g, tokenStart: d } = n;
    D(n, t & -65 | 32, 67174408), l.push(A2(n, c, g, d, !1)), f.push(P(n, t, e, 0, 1, n.tokenStart)), n.getToken() !== 1074790415 && n.report(83);
  }
  {
    const { tokenValue: c, tokenRaw: g, tokenStart: d } = n;
    D(n, t, 67174409), l.push(A2(n, c, g, d, !0));
  }
  return n.finishNode({
    type: "TemplateLiteral",
    expressions: f,
    quasis: l
  }, i);
}
function A2(n, t, e, u, o) {
  const i = n.finishNode({
    type: "TemplateElement",
    value: {
      cooked: t,
      raw: e
    },
    tail: o
  }, u), l = o ? 1 : 2;
  return n.options.ranges && (i.start += 1, i.range[0] += 1, i.end -= l, i.range[1] -= l), n.options.loc && (i.loc.start.column += 1, i.loc.end.column -= l), i;
}
function ne(n, t, e) {
  const u = n.tokenStart;
  t = (t | 131072) ^ 131072, D(n, t | 32, 14);
  const o = q(n, t, e, 1, 0, n.tokenStart);
  return n.assignable = 1, n.finishNode({
    type: "SpreadElement",
    argument: o
  }, u);
}
function Z2(n, t, e, u) {
  m(n, t | 32);
  const o = [];
  if (n.getToken() === 16)
    return m(n, t | 64), o;
  for (; n.getToken() !== 16 && (n.getToken() === 14 ? o.push(ne(n, t, e)) : o.push(q(n, t, e, 1, u, n.tokenStart)), !(n.getToken() !== 18 || (m(n, t | 32), n.getToken() === 16))); )
    ;
  return D(n, t | 64, 16), o;
}
function I(n, t) {
  const { tokenValue: e, tokenStart: u } = n, o = e === "await" && (n.getToken() & -2147483648) === 0;
  return m(n, t | (o ? 32 : 0)), n.finishNode({
    type: "Identifier",
    name: e
  }, u);
}
function v(n, t) {
  const { tokenValue: e, tokenRaw: u, tokenStart: o } = n;
  if (n.getToken() === 134283388)
    return In(n, t);
  const i = {
    type: "Literal",
    value: e
  };
  return n.options.raw && (i.raw = u), m(n, t), n.assignable = 2, n.finishNode(i, o);
}
function te(n, t) {
  const e = n.tokenStart, u = F[n.getToken() & 255], i = {
    type: "Literal",
    value: n.getToken() === 86023 ? null : u === "true"
  };
  return n.options.raw && (i.raw = u), m(n, t), n.assignable = 2, n.finishNode(i, e);
}
function ee(n, t) {
  const { tokenStart: e } = n;
  return m(n, t), n.assignable = 2, n.finishNode({
    type: "ThisExpression"
  }, e);
}
function Q(n, t, e, u, o, i, l, f, c) {
  m(n, t | 32);
  const g = i ? X2(n, t, 8391476) : 0;
  let d = null, s, h = e ? n.createScope() : void 0;
  if (n.getToken() === 67174411)
    (l & 1) === 0 && n.report(39, "Function");
  else {
    const E = o & 4 && ((t & 8) === 0 || (t & 2) === 0) ? 4 : 64 | (f ? 1024 : 0) | (g ? 1024 : 0);
    Cn(n, t, n.getToken()), e && (E & 4 ? e.addVarName(t, n.tokenValue, E) : e.addBlockName(t, n.tokenValue, E, o), h = h?.createChildScope(128), l && l & 2 && n.declareUnboundVariable(n.tokenValue)), s = n.getToken(), n.getToken() & 143360 ? d = I(n, t) : n.report(30, F[n.getToken() & 255]);
  }
  t = (t | 28416) ^ 28416 | 65536 | (f ? 2048 : 0) | (g ? 1024 : 0) | (g ? 0 : 262144), h = h?.createChildScope(256);
  const A = Vn(n, (t | 8192) & -524289, h, u, 0, 1), C = 524428, y = N2(n, (t | C) ^ C | 32768 | 4096, h?.createChildScope(64), u, 8, s, h);
  return n.finishNode({
    type: "FunctionDeclaration",
    id: d,
    params: A,
    body: y,
    async: f === 1,
    generator: g === 1
  }, c);
}
function qn(n, t, e, u, o, i) {
  m(n, t | 32);
  const l = X2(n, t, 8391476), f = (u ? 2048 : 0) | (l ? 1024 : 0);
  let c = null, g, d = n.createScopeIfLexical();
  const s = 552704;
  n.getToken() & 143360 && (Cn(n, (t | s) ^ s | f, n.getToken()), d = d?.createChildScope(128), g = n.getToken(), c = I(n, t)), t = (t | s) ^ s | 65536 | f | (l ? 0 : 262144), d = d?.createChildScope(256);
  const h = Vn(n, (t | 8192) & -524289, d, e, o, 1), A = N2(n, t & -131229 | 32768 | 4096, d?.createChildScope(64), e, 0, g, d);
  return n.assignable = 2, n.finishNode({
    type: "FunctionExpression",
    id: c,
    params: h,
    body: A,
    async: u === 1,
    generator: l === 1
  }, i);
}
function ue(n, t, e, u, o) {
  const i = $(n, t, void 0, e, u, o, 0, 2, 0);
  return n.destructible & 64 && n.report(63), n.destructible & 8 && n.report(62), i;
}
function $(n, t, e, u, o, i, l, f, c) {
  const { tokenStart: g } = n;
  m(n, t | 32);
  const d = [];
  let s = 0;
  for (t = (t | 131072) ^ 131072; n.getToken() !== 20; )
    if (r(n, t | 32, 18))
      d.push(null);
    else {
      let A;
      const { tokenStart: C, tokenValue: y } = n, E = n.getToken();
      if (E & 143360)
        if (A = j(n, t, u, f, 0, 1, i, 1, C), n.getToken() === 1077936155) {
          n.assignable & 2 && n.report(26), m(n, t | 32), e?.addVarOrBlock(t, y, f, c);
          const T = q(n, t, u, 1, i, n.tokenStart);
          A = n.finishNode(l ? {
            type: "AssignmentPattern",
            left: A,
            right: T
          } : {
            type: "AssignmentExpression",
            operator: "=",
            left: A,
            right: T
          }, C), s |= n.destructible & 256 ? 256 : 0 | n.destructible & 128 ? 128 : 0;
        } else n.getToken() === 18 || n.getToken() === 20 ? (n.assignable & 2 ? s |= 16 : e?.addVarOrBlock(t, y, f, c), s |= n.destructible & 256 ? 256 : 0 | n.destructible & 128 ? 128 : 0) : (s |= f & 1 ? 32 : (f & 2) === 0 ? 16 : 0, A = N(n, t, u, A, i, 0, C), n.getToken() !== 18 && n.getToken() !== 20 ? (n.getToken() !== 1077936155 && (s |= 16), A = L(n, t, u, i, l, C, A)) : n.getToken() !== 1077936155 && (s |= n.assignable & 2 ? 16 : 32));
      else E & 2097152 ? (A = n.getToken() === 2162700 ? X(n, t, e, u, 0, i, l, f, c) : $(n, t, e, u, 0, i, l, f, c), s |= n.destructible, n.assignable = n.destructible & 16 ? 2 : 1, n.getToken() === 18 || n.getToken() === 20 ? n.assignable & 2 && (s |= 16) : n.destructible & 8 ? n.report(71) : (A = N(n, t, u, A, i, 0, C), s = n.assignable & 2 ? 16 : 0, n.getToken() !== 18 && n.getToken() !== 20 ? A = L(n, t, u, i, l, C, A) : n.getToken() !== 1077936155 && (s |= n.assignable & 2 ? 16 : 32))) : E === 14 ? (A = u2(n, t, e, u, 20, f, c, 0, i, l), s |= n.destructible, n.getToken() !== 18 && n.getToken() !== 20 && n.report(30, F[n.getToken() & 255])) : (A = M(n, t, u, 1, 0, 1), n.getToken() !== 18 && n.getToken() !== 20 ? (A = L(n, t, u, i, l, C, A), (f & 3) === 0 && E === 67174411 && (s |= 16)) : n.assignable & 2 ? s |= 16 : E === 67174411 && (s |= n.assignable & 1 && f & 3 ? 32 : 16));
      if (d.push(A), r(n, t | 32, 18)) {
        if (n.getToken() === 20)
          break;
      } else
        break;
    }
  D(n, t, 20);
  const h = n.finishNode({
    type: l ? "ArrayPattern" : "ArrayExpression",
    elements: d
  }, g);
  return !o && n.getToken() & 4194304 ? Ln(n, t, u, s, i, l, g, h) : (n.destructible = s, h);
}
function Ln(n, t, e, u, o, i, l, f) {
  n.getToken() !== 1077936155 && n.report(26), m(n, t | 32), u & 16 && n.report(26), i || z(n, f);
  const { tokenStart: c } = n, g = q(n, t, e, 1, o, c);
  return n.destructible = (u | 64 | 8) ^ 72 | (n.destructible & 128 ? 128 : 0) | (n.destructible & 256 ? 256 : 0), n.finishNode(i ? {
    type: "AssignmentPattern",
    left: f,
    right: g
  } : {
    type: "AssignmentExpression",
    left: f,
    operator: "=",
    right: g
  }, l);
}
function u2(n, t, e, u, o, i, l, f, c, g) {
  const { tokenStart: d } = n;
  m(n, t | 32);
  let s = null, h = 0;
  const { tokenValue: A, tokenStart: C } = n;
  let y = n.getToken();
  if (y & 143360)
    n.assignable = 1, s = j(n, t, u, i, 0, 1, c, 1, C), y = n.getToken(), s = N(n, t, u, s, c, 0, C), n.getToken() !== 18 && n.getToken() !== o && (n.assignable & 2 && n.getToken() === 1077936155 && n.report(71), h |= 16, s = L(n, t, u, c, g, C, s)), n.assignable & 2 ? h |= 16 : y === o || y === 18 ? e?.addVarOrBlock(t, A, i, l) : h |= 32, h |= n.destructible & 128 ? 128 : 0;
  else if (y === o)
    n.report(41);
  else if (y & 2097152)
    s = n.getToken() === 2162700 ? X(n, t, e, u, 1, c, g, i, l) : $(n, t, e, u, 1, c, g, i, l), y = n.getToken(), y !== 1077936155 && y !== o && y !== 18 ? (n.destructible & 8 && n.report(71), s = N(n, t, u, s, c, 0, C), h |= n.assignable & 2 ? 16 : 0, (n.getToken() & 4194304) === 4194304 ? (n.getToken() !== 1077936155 && (h |= 16), s = L(n, t, u, c, g, C, s)) : ((n.getToken() & 8388608) === 8388608 && (s = Z(n, t, u, 1, C, 4, y, s)), r(n, t | 32, 22) && (s = G(n, t, u, s, C)), h |= n.assignable & 2 ? 16 : 32)) : h |= o === 1074790415 && y !== 1077936155 ? 16 : n.destructible;
  else {
    h |= 32, s = M(n, t, u, 1, c, 1);
    const { tokenStart: E } = n, T = n.getToken();
    return T === 1077936155 ? (n.assignable & 2 && n.report(26), s = L(n, t, u, c, g, E, s), h |= 16) : (T === 18 ? h |= 16 : T !== o && (s = L(n, t, u, c, g, E, s)), h |= n.assignable & 1 ? 32 : 16), n.destructible = h, n.getToken() !== o && n.getToken() !== 18 && n.report(161), n.finishNode({
      type: g ? "RestElement" : "SpreadElement",
      argument: s
    }, d);
  }
  if (n.getToken() !== o)
    if (i & 1 && (h |= f ? 16 : 32), r(n, t | 32, 1077936155)) {
      h & 16 && n.report(26), z(n, s);
      const E = q(n, t, u, 1, c, n.tokenStart);
      s = n.finishNode(g ? {
        type: "AssignmentPattern",
        left: s,
        right: E
      } : {
        type: "AssignmentExpression",
        left: s,
        operator: "=",
        right: E
      }, C), h = 16;
    } else
      h |= 16;
  return n.destructible = h, n.finishNode({
    type: g ? "RestElement" : "SpreadElement",
    argument: s
  }, d);
}
function H(n, t, e, u, o, i) {
  const l = 11264 | ((u & 64) === 0 ? 16896 : 0);
  t = (t | l) ^ l | (u & 8 ? 1024 : 0) | (u & 16 ? 2048 : 0) | (u & 64 ? 16384 : 0) | 256 | 32768 | 65536;
  let f = n.createScopeIfLexical(256);
  const c = oe(n, (t | 8192) & -524289, f, e, u, 1, o);
  f = f?.createChildScope(64);
  const g = N2(n, t & -655373 | 32768 | 4096, f, e, 0, void 0, f?.parent);
  return n.finishNode({
    type: "FunctionExpression",
    params: c,
    body: g,
    async: (u & 16) > 0,
    generator: (u & 8) > 0,
    id: null
  }, i);
}
function ie(n, t, e, u, o) {
  const i = X(n, t, void 0, e, u, o, 0, 2, 0);
  return n.destructible & 64 && n.report(63), n.destructible & 8 && n.report(62), i;
}
function X(n, t, e, u, o, i, l, f, c) {
  const { tokenStart: g } = n;
  m(n, t);
  const d = [];
  let s = 0, h = 0;
  for (t = (t | 131072) ^ 131072; n.getToken() !== 1074790415; ) {
    const { tokenValue: C, tokenStart: y } = n, E = n.getToken();
    if (E === 14)
      d.push(u2(n, t, e, u, 1074790415, f, c, 0, i, l));
    else {
      let T = 0, R = null, b;
      if (n.getToken() & 143360 || n.getToken() === -2147483528 || n.getToken() === -2147483527)
        if (n.getToken() === -2147483527 && (s |= 16), R = I(n, t), n.getToken() === 18 || n.getToken() === 1074790415 || n.getToken() === 1077936155)
          if (T |= 4, t & 1 && (E & 537079808) === 537079808 ? s |= 16 : T2(n, t, f, E, 0), e?.addVarOrBlock(t, C, f, c), r(n, t | 32, 1077936155)) {
            s |= 8;
            const w = q(n, t, u, 1, i, n.tokenStart);
            s |= n.destructible & 256 ? 256 : 0 | n.destructible & 128 ? 128 : 0, b = n.finishNode({
              type: "AssignmentPattern",
              left: n.cloneIdentifier(R),
              right: w
            }, y);
          } else
            s |= (E === 209006 ? 128 : 0) | (E === -2147483528 ? 16 : 0), b = n.cloneIdentifier(R);
        else if (r(n, t | 32, 21)) {
          const { tokenStart: w } = n;
          if (C === "__proto__" && h++, n.getToken() & 143360) {
            const i2 = n.getToken(), Y = n.tokenValue;
            b = j(n, t, u, f, 0, 1, i, 1, w);
            const W = n.getToken();
            b = N(n, t, u, b, i, 0, w), n.getToken() === 18 || n.getToken() === 1074790415 ? W === 1077936155 || W === 1074790415 || W === 18 ? (s |= n.destructible & 128 ? 128 : 0, n.assignable & 2 ? s |= 16 : (i2 & 143360) === 143360 && e?.addVarOrBlock(t, Y, f, c)) : s |= n.assignable & 1 ? 32 : 16 : (n.getToken() & 4194304) === 4194304 ? (n.assignable & 2 ? s |= 16 : W !== 1077936155 ? s |= 32 : e?.addVarOrBlock(t, Y, f, c), b = L(n, t, u, i, l, w, b)) : (s |= 16, (n.getToken() & 8388608) === 8388608 && (b = Z(n, t, u, 1, w, 4, W, b)), r(n, t | 32, 22) && (b = G(n, t, u, b, w)));
          } else (n.getToken() & 2097152) === 2097152 ? (b = n.getToken() === 69271571 ? $(n, t, e, u, 0, i, l, f, c) : X(n, t, e, u, 0, i, l, f, c), s = n.destructible, n.assignable = s & 16 ? 2 : 1, n.getToken() === 18 || n.getToken() === 1074790415 ? n.assignable & 2 && (s |= 16) : n.destructible & 8 ? n.report(71) : (b = N(n, t, u, b, i, 0, w), s = n.assignable & 2 ? 16 : 0, (n.getToken() & 4194304) === 4194304 ? b = k2(n, t, u, i, l, w, b) : ((n.getToken() & 8388608) === 8388608 && (b = Z(n, t, u, 1, w, 4, E, b)), r(n, t | 32, 22) && (b = G(n, t, u, b, w)), s |= n.assignable & 2 ? 16 : 32))) : (b = M(n, t, u, 1, i, 1), s |= n.assignable & 1 ? 32 : 16, n.getToken() === 18 || n.getToken() === 1074790415 ? n.assignable & 2 && (s |= 16) : (b = N(n, t, u, b, i, 0, w), s = n.assignable & 2 ? 16 : 0, n.getToken() !== 18 && E !== 1074790415 && (n.getToken() !== 1077936155 && (s |= 16), b = L(n, t, u, i, l, w, b))));
        } else n.getToken() === 69271571 ? (s |= 16, E === 209005 && (T |= 16), T |= (E === 209008 ? 256 : E === 209009 ? 512 : 1) | 2, R = n2(n, t, u, i), s |= n.assignable, b = H(n, t, u, T, i, n.tokenStart)) : n.getToken() & 143360 ? (s |= 16, E === -2147483528 && n.report(95), E === 209005 ? (n.flags & 1 && n.report(132), T |= 17) : E === 209008 ? T |= 256 : E === 209009 ? T |= 512 : n.report(0), R = I(n, t), b = H(n, t, u, T, i, n.tokenStart)) : n.getToken() === 67174411 ? (s |= 16, T |= 1, b = H(n, t, u, T, i, n.tokenStart)) : n.getToken() === 8391476 ? (s |= 16, E === 209008 ? n.report(42) : E === 209009 ? n.report(43) : E !== 209005 && n.report(30, F[52]), m(n, t), T |= 9 | (E === 209005 ? 16 : 0), n.getToken() & 143360 ? R = I(n, t) : (n.getToken() & 134217728) === 134217728 ? R = v(n, t) : n.getToken() === 69271571 ? (T |= 2, R = n2(n, t, u, i), s |= n.assignable) : n.report(30, F[n.getToken() & 255]), b = H(n, t, u, T, i, n.tokenStart)) : (n.getToken() & 134217728) === 134217728 ? (E === 209005 && (T |= 16), T |= E === 209008 ? 256 : E === 209009 ? 512 : 1, s |= 16, R = v(n, t), b = H(n, t, u, T, i, n.tokenStart)) : n.report(133);
      else if ((n.getToken() & 134217728) === 134217728)
        if (R = v(n, t), n.getToken() === 21) {
          D(n, t | 32, 21);
          const { tokenStart: w } = n;
          if (C === "__proto__" && h++, n.getToken() & 143360) {
            b = j(n, t, u, f, 0, 1, i, 1, w);
            const { tokenValue: i2 } = n, Y = n.getToken();
            b = N(n, t, u, b, i, 0, w), n.getToken() === 18 || n.getToken() === 1074790415 ? Y === 1077936155 || Y === 1074790415 || Y === 18 ? n.assignable & 2 ? s |= 16 : e?.addVarOrBlock(t, i2, f, c) : s |= n.assignable & 1 ? 32 : 16 : n.getToken() === 1077936155 ? (n.assignable & 2 && (s |= 16), b = L(n, t, u, i, l, w, b)) : (s |= 16, b = L(n, t, u, i, l, w, b));
          } else (n.getToken() & 2097152) === 2097152 ? (b = n.getToken() === 69271571 ? $(n, t, e, u, 0, i, l, f, c) : X(n, t, e, u, 0, i, l, f, c), s = n.destructible, n.assignable = s & 16 ? 2 : 1, n.getToken() === 18 || n.getToken() === 1074790415 ? n.assignable & 2 && (s |= 16) : (n.destructible & 8) !== 8 && (b = N(n, t, u, b, i, 0, w), s = n.assignable & 2 ? 16 : 0, (n.getToken() & 4194304) === 4194304 ? b = k2(n, t, u, i, l, w, b) : ((n.getToken() & 8388608) === 8388608 && (b = Z(n, t, u, 1, w, 4, E, b)), r(n, t | 32, 22) && (b = G(n, t, u, b, w)), s |= n.assignable & 2 ? 16 : 32))) : (b = M(n, t, u, 1, 0, 1), s |= n.assignable & 1 ? 32 : 16, n.getToken() === 18 || n.getToken() === 1074790415 ? n.assignable & 2 && (s |= 16) : (b = N(n, t, u, b, i, 0, w), s = n.assignable & 1 ? 0 : 16, n.getToken() !== 18 && n.getToken() !== 1074790415 && (n.getToken() !== 1077936155 && (s |= 16), b = L(n, t, u, i, l, w, b))));
        } else n.getToken() === 67174411 ? (T |= 1, b = H(n, t, u, T, i, n.tokenStart), s = n.assignable | 16) : n.report(134);
      else if (n.getToken() === 69271571)
        if (R = n2(n, t, u, i), s |= n.destructible & 256 ? 256 : 0, T |= 2, n.getToken() === 21) {
          m(n, t | 32);
          const { tokenStart: w, tokenValue: i2 } = n, Y = n.getToken();
          if (n.getToken() & 143360) {
            b = j(n, t, u, f, 0, 1, i, 1, w);
            const W = n.getToken();
            b = N(n, t, u, b, i, 0, w), (n.getToken() & 4194304) === 4194304 ? (s |= n.assignable & 2 ? 16 : W === 1077936155 ? 0 : 32, b = k2(n, t, u, i, l, w, b)) : n.getToken() === 18 || n.getToken() === 1074790415 ? W === 1077936155 || W === 1074790415 || W === 18 ? n.assignable & 2 ? s |= 16 : (Y & 143360) === 143360 && e?.addVarOrBlock(t, i2, f, c) : s |= n.assignable & 1 ? 32 : 16 : (s |= 16, b = L(n, t, u, i, l, w, b));
          } else (n.getToken() & 2097152) === 2097152 ? (b = n.getToken() === 69271571 ? $(n, t, e, u, 0, i, l, f, c) : X(n, t, e, u, 0, i, l, f, c), s = n.destructible, n.assignable = s & 16 ? 2 : 1, n.getToken() === 18 || n.getToken() === 1074790415 ? n.assignable & 2 && (s |= 16) : s & 8 ? n.report(62) : (b = N(n, t, u, b, i, 0, w), s = n.assignable & 2 ? s | 16 : 0, (n.getToken() & 4194304) === 4194304 ? (n.getToken() !== 1077936155 && (s |= 16), b = k2(n, t, u, i, l, w, b)) : ((n.getToken() & 8388608) === 8388608 && (b = Z(n, t, u, 1, w, 4, E, b)), r(n, t | 32, 22) && (b = G(n, t, u, b, w)), s |= n.assignable & 2 ? 16 : 32))) : (b = M(n, t, u, 1, 0, 1), s |= n.assignable & 1 ? 32 : 16, n.getToken() === 18 || n.getToken() === 1074790415 ? n.assignable & 2 && (s |= 16) : (b = N(n, t, u, b, i, 0, w), s = n.assignable & 1 ? 0 : 16, n.getToken() !== 18 && n.getToken() !== 1074790415 && (n.getToken() !== 1077936155 && (s |= 16), b = L(n, t, u, i, l, w, b))));
        } else n.getToken() === 67174411 ? (T |= 1, b = H(n, t, u, T, i, n.tokenStart), s = 16) : n.report(44);
      else if (E === 8391476)
        if (D(n, t | 32, 8391476), T |= 8, n.getToken() & 143360) {
          const w = n.getToken();
          if (R = I(n, t), T |= 1, n.getToken() === 67174411)
            s |= 16, b = H(n, t, u, T, i, n.tokenStart);
          else
            throw new V(n.tokenStart, n.currentLocation, w === 209005 ? 46 : w === 209008 || n.getToken() === 209009 ? 45 : 47, F[w & 255]);
        } else (n.getToken() & 134217728) === 134217728 ? (s |= 16, R = v(n, t), T |= 1, b = H(n, t, u, T, i, n.tokenStart)) : n.getToken() === 69271571 ? (s |= 16, T |= 3, R = n2(n, t, u, i), b = H(n, t, u, T, i, n.tokenStart)) : n.report(126);
      else
        n.report(30, F[E & 255]);
      s |= n.destructible & 128 ? 128 : 0, n.destructible = s, d.push(n.finishNode({
        type: "Property",
        key: R,
        value: b,
        kind: T & 768 ? T & 512 ? "set" : "get" : "init",
        computed: (T & 2) > 0,
        method: (T & 1) > 0,
        shorthand: (T & 4) > 0
      }, y));
    }
    if (s |= n.destructible, n.getToken() !== 18)
      break;
    m(n, t);
  }
  D(n, t, 1074790415), h > 1 && (s |= 64);
  const A = n.finishNode({
    type: l ? "ObjectPattern" : "ObjectExpression",
    properties: d
  }, g);
  return !o && n.getToken() & 4194304 ? Ln(n, t, u, s, i, l, g, A) : (n.destructible = s, A);
}
function oe(n, t, e, u, o, i, l) {
  D(n, t, 67174411);
  const f = [];
  if (n.flags = (n.flags | 128) ^ 128, n.getToken() === 16)
    return o & 512 && n.report(37, "Setter", "one", ""), m(n, t), f;
  o & 256 && n.report(37, "Getter", "no", "s"), o & 512 && n.getToken() === 14 && n.report(38), t = (t | 131072) ^ 131072;
  let c = 0, g = 0;
  for (; n.getToken() !== 18; ) {
    let d = null;
    const { tokenStart: s } = n;
    if (n.getToken() & 143360 ? ((t & 1) === 0 && ((n.getToken() & 36864) === 36864 && (n.flags |= 256), (n.getToken() & 537079808) === 537079808 && (n.flags |= 512)), d = x2(n, t, e, o | 1, 0)) : (n.getToken() === 2162700 ? d = X(n, t, e, u, 1, l, 1, i, 0) : n.getToken() === 69271571 ? d = $(n, t, e, u, 1, l, 1, i, 0) : n.getToken() === 14 && (d = u2(n, t, e, u, 16, i, 0, 0, l, 1)), g = 1, n.destructible & 48 && n.report(50)), n.getToken() === 1077936155) {
      m(n, t | 32), g = 1;
      const h = q(n, t, u, 1, 0, n.tokenStart);
      d = n.finishNode({
        type: "AssignmentPattern",
        left: d,
        right: h
      }, s);
    }
    if (c++, f.push(d), !r(n, t, 18) || n.getToken() === 16)
      break;
  }
  return o & 512 && c !== 1 && n.report(37, "Setter", "one", ""), e?.reportScopeError(), g && (n.flags |= 128), D(n, t, 16), f;
}
function n2(n, t, e, u) {
  m(n, t | 32);
  const o = q(n, (t | 131072) ^ 131072, e, 1, u, n.tokenStart);
  return D(n, t, 20), o;
}
function le(n, t, e, u, o, i, l) {
  n.flags = (n.flags | 128) ^ 128;
  const f = n.tokenStart;
  m(n, t | 32 | 262144);
  const c = n.createScopeIfLexical()?.createChildScope(512);
  if (t = (t | 131072) ^ 131072, r(n, t, 16))
    return r2(n, t, c, e, [], u, 0, l);
  let g = 0;
  n.destructible &= -385;
  let d, s = [], h = 0, A = 0, C = 0;
  const y = n.tokenStart;
  for (n.assignable = 1; n.getToken() !== 16; ) {
    const { tokenStart: E } = n, T = n.getToken();
    if (T & 143360)
      c?.addBlockName(t, n.tokenValue, 1, 0), (T & 537079808) === 537079808 ? A = 1 : (T & 36864) === 36864 && (C = 1), d = j(n, t, e, o, 0, 1, 1, 1, E), n.getToken() === 16 || n.getToken() === 18 ? n.assignable & 2 && (g |= 16, A = 1) : (n.getToken() === 1077936155 ? A = 1 : g |= 16, d = N(n, t, e, d, 1, 0, E), n.getToken() !== 16 && n.getToken() !== 18 && (d = L(n, t, e, 1, 0, E, d)));
    else if ((T & 2097152) === 2097152)
      d = T === 2162700 ? X(n, t | 262144, c, e, 0, 1, 0, o, i) : $(n, t | 262144, c, e, 0, 1, 0, o, i), g |= n.destructible, A = 1, n.assignable = 2, n.getToken() !== 16 && n.getToken() !== 18 && (g & 8 && n.report(122), d = N(n, t, e, d, 0, 0, E), g |= 16, n.getToken() !== 16 && n.getToken() !== 18 && (d = L(n, t, e, 0, 0, E, d)));
    else if (T === 14) {
      d = u2(n, t, c, e, 16, o, i, 0, 1, 0), n.destructible & 16 && n.report(74), A = 1, h && (n.getToken() === 16 || n.getToken() === 18) && s.push(d), g |= 8;
      break;
    } else {
      if (g |= 16, d = q(n, t, e, 1, 1, E), h && (n.getToken() === 16 || n.getToken() === 18) && s.push(d), n.getToken() === 18 && (h || (h = 1, s = [d])), h) {
        for (; r(n, t | 32, 18); )
          s.push(q(n, t, e, 1, 1, n.tokenStart));
        n.assignable = 2, d = n.finishNode({
          type: "SequenceExpression",
          expressions: s
        }, y);
      }
      return D(n, t, 16), n.destructible = g, n.options.preserveParens ? n.finishNode({
        type: "ParenthesizedExpression",
        expression: d
      }, f) : d;
    }
    if (h && (n.getToken() === 16 || n.getToken() === 18) && s.push(d), !r(n, t | 32, 18))
      break;
    if (h || (h = 1, s = [d]), n.getToken() === 16) {
      g |= 8;
      break;
    }
  }
  return h && (n.assignable = 2, d = n.finishNode({
    type: "SequenceExpression",
    expressions: s
  }, y)), D(n, t, 16), g & 16 && g & 8 && n.report(151), g |= n.destructible & 256 ? 256 : 0 | n.destructible & 128 ? 128 : 0, n.getToken() === 10 ? (g & 48 && n.report(49), t & 2050 && g & 128 && n.report(31), t & 1025 && g & 256 && n.report(32), A && (n.flags |= 128), C && (n.flags |= 256), r2(n, t, c, e, h ? s : [d], u, 0, l)) : (g & 64 && n.report(63), g & 8 && n.report(144), n.destructible = (n.destructible | 256) ^ 256 | g, n.options.preserveParens ? n.finishNode({
    type: "ParenthesizedExpression",
    expression: d
  }, f) : d);
}
function Q2(n, t, e) {
  const { tokenStart: u } = n, { tokenValue: o } = n;
  let i = 0, l = 0;
  (n.getToken() & 537079808) === 537079808 ? i = 1 : (n.getToken() & 36864) === 36864 && (l = 1);
  const f = I(n, t);
  if (n.assignable = 1, n.getToken() === 10) {
    const c = n.options.lexical ? F2(n, t, o) : void 0;
    return i && (n.flags |= 128), l && (n.flags |= 256), h2(n, t, c, e, [f], 0, u);
  }
  return f;
}
function I2(n, t, e, u, o, i, l, f, c) {
  l || n.report(57), i && n.report(51), n.flags &= -129;
  const g = n.options.lexical ? F2(n, t, u) : void 0;
  return h2(n, t, g, e, [o], f, c);
}
function r2(n, t, e, u, o, i, l, f) {
  i || n.report(57);
  for (let c = 0; c < o.length; ++c)
    z(n, o[c]);
  return h2(n, t, e, u, o, l, f);
}
function h2(n, t, e, u, o, i, l) {
  n.flags & 1 && n.report(48), D(n, t | 32, 10);
  const f = 535552;
  t = (t | f) ^ f | (i ? 2048 : 0);
  const c = n.getToken() !== 2162700;
  let g;
  if (e?.reportScopeError(), c)
    n.flags = (n.flags | 512 | 256 | 64 | 4096) ^ 4928, g = q(n, t, u, 1, 0, n.tokenStart);
  else {
    e = e?.createChildScope(64);
    const d = 131084;
    switch (g = N2(n, (t | d) ^ d | 4096, e, u, 16, void 0, void 0), n.getToken()) {
      case 69271571:
        (n.flags & 1) === 0 && n.report(116);
        break;
      case 67108877:
      case 67174409:
      case 22:
        n.report(117);
      case 67174411:
        (n.flags & 1) === 0 && n.report(116), n.flags |= 1024;
        break;
    }
    (n.getToken() & 8388608) === 8388608 && (n.flags & 1) === 0 && n.report(30, F[n.getToken() & 255]), (n.getToken() & 33619968) === 33619968 && n.report(125);
  }
  return n.assignable = 2, n.finishNode({
    type: "ArrowFunctionExpression",
    params: o,
    body: g,
    async: i === 1,
    expression: c,
    generator: !1
  }, l);
}
function Vn(n, t, e, u, o, i) {
  D(n, t, 67174411), n.flags = (n.flags | 128) ^ 128;
  const l = [];
  if (r(n, t, 16))
    return l;
  t = (t | 131072) ^ 131072;
  let f = 0;
  for (; n.getToken() !== 18; ) {
    let c;
    const { tokenStart: g } = n, d = n.getToken();
    if (d & 143360 ? ((t & 1) === 0 && ((d & 36864) === 36864 && (n.flags |= 256), (d & 537079808) === 537079808 && (n.flags |= 512)), c = x2(n, t, e, i | 1, 0)) : (d === 2162700 ? c = X(n, t, e, u, 1, o, 1, i, 0) : d === 69271571 ? c = $(n, t, e, u, 1, o, 1, i, 0) : d === 14 ? c = u2(n, t, e, u, 16, i, 0, 0, o, 1) : n.report(30, F[d & 255]), f = 1, n.destructible & 48 && n.report(50)), n.getToken() === 1077936155) {
      m(n, t | 32), f = 1;
      const s = q(n, t, u, 1, o, n.tokenStart);
      c = n.finishNode({
        type: "AssignmentPattern",
        left: c,
        right: s
      }, g);
    }
    if (l.push(c), !r(n, t, 18) || n.getToken() === 16)
      break;
  }
  return f && (n.flags |= 128), (f || t & 1) && e?.reportScopeError(), D(n, t, 16), l;
}
function C2(n, t, e, u, o, i) {
  const l = n.getToken();
  if (l & 67108864) {
    if (l === 67108877) {
      m(n, t | 262144), n.assignable = 1;
      const f = _2(n, t, e);
      return C2(n, t, e, n.finishNode({
        type: "MemberExpression",
        object: u,
        computed: !1,
        property: f,
        optional: !1
      }, i), 0, i);
    } else if (l === 69271571) {
      m(n, t | 32);
      const { tokenStart: f } = n, c = P(n, t, e, o, 1, f);
      return D(n, t, 20), n.assignable = 1, C2(n, t, e, n.finishNode({
        type: "MemberExpression",
        object: u,
        computed: !0,
        property: c,
        optional: !1
      }, i), 0, i);
    } else if (l === 67174408 || l === 67174409)
      return n.assignable = 2, C2(n, t, e, n.finishNode({
        type: "TaggedTemplateExpression",
        tag: u,
        quasi: n.getToken() === 67174408 ? K2(n, t | 64, e) : Y2(n, t | 64)
      }, i), 0, i);
  }
  return u;
}
function fe(n, t, e, u) {
  const { tokenStart: o } = n, i = I(n, t | 32), { tokenStart: l } = n;
  if (r(n, t, 67108877)) {
    if (t & 65536 && n.getToken() === 209029)
      return n.assignable = 2, ce(n, t, i, o);
    n.report(94);
  }
  n.assignable = 2, (n.getToken() & 16842752) === 16842752 && n.report(65, F[n.getToken() & 255]);
  const f = j(n, t, e, 2, 1, 0, u, 1, l);
  t = (t | 131072) ^ 131072, n.getToken() === 67108990 && n.report(168);
  const c = C2(n, t, e, f, u, l);
  return n.assignable = 2, n.finishNode({
    type: "NewExpression",
    callee: c,
    arguments: n.getToken() === 67174411 ? Z2(n, t, e, u) : []
  }, o);
}
function ce(n, t, e, u) {
  const o = I(n, t);
  return n.finishNode({
    type: "MetaProperty",
    meta: e,
    property: o
  }, u);
}
function On(n, t, e, u, o) {
  return n.getToken() === 209006 && n.report(31), t & 1025 && n.getToken() === 241771 && n.report(32), S2(n, t, n.getToken()), (n.getToken() & 36864) === 36864 && (n.flags |= 256), I2(n, t & -524289 | 2048, e, n.tokenValue, I(n, t), 0, u, 1, o);
}
function G2(n, t, e, u, o, i, l, f, c) {
  m(n, t | 32);
  const g = n.createScopeIfLexical()?.createChildScope(512);
  if (t = (t | 131072) ^ 131072, r(n, t, 16))
    return n.getToken() === 10 ? (f & 1 && n.report(48), r2(n, t, g, e, [], o, 1, c)) : n.finishNode({
      type: "CallExpression",
      callee: u,
      arguments: [],
      optional: !1
    }, c);
  let d = 0, s = null, h = 0;
  n.destructible = (n.destructible | 256 | 128) ^ 384;
  const A = [];
  for (; n.getToken() !== 16; ) {
    const { tokenStart: C } = n, y = n.getToken();
    if (y & 143360)
      g?.addBlockName(t, n.tokenValue, i, 0), (y & 537079808) === 537079808 ? n.flags |= 512 : (y & 36864) === 36864 && (n.flags |= 256), s = j(n, t, e, i, 0, 1, 1, 1, C), n.getToken() === 16 || n.getToken() === 18 ? n.assignable & 2 && (d |= 16, h = 1) : (n.getToken() === 1077936155 ? h = 1 : d |= 16, s = N(n, t, e, s, 1, 0, C), n.getToken() !== 16 && n.getToken() !== 18 && (s = L(n, t, e, 1, 0, C, s)));
    else if (y & 2097152)
      s = y === 2162700 ? X(n, t, g, e, 0, 1, 0, i, l) : $(n, t, g, e, 0, 1, 0, i, l), d |= n.destructible, h = 1, n.getToken() !== 16 && n.getToken() !== 18 && (d & 8 && n.report(122), s = N(n, t, e, s, 0, 0, C), d |= 16, (n.getToken() & 8388608) === 8388608 && (s = Z(n, t, e, 1, c, 4, y, s)), r(n, t | 32, 22) && (s = G(n, t, e, s, c)));
    else if (y === 14)
      s = u2(n, t, g, e, 16, i, l, 1, 1, 0), d |= (n.getToken() === 16 ? 0 : 16) | n.destructible, h = 1;
    else {
      for (s = q(n, t, e, 1, 0, C), d = n.assignable, A.push(s); r(n, t | 32, 18); )
        A.push(q(n, t, e, 1, 0, C));
      return d |= n.assignable, D(n, t, 16), n.destructible = d | 16, n.assignable = 2, n.finishNode({
        type: "CallExpression",
        callee: u,
        arguments: A,
        optional: !1
      }, c);
    }
    if (A.push(s), !r(n, t | 32, 18))
      break;
  }
  return D(n, t, 16), d |= n.destructible & 256 ? 256 : 0 | n.destructible & 128 ? 128 : 0, n.getToken() === 10 ? (d & 48 && n.report(27), (n.flags & 1 || f & 1) && n.report(48), d & 128 && n.report(31), t & 1025 && d & 256 && n.report(32), h && (n.flags |= 128), r2(n, t | 2048, g, e, A, o, 1, c)) : (d & 64 && n.report(63), d & 8 && n.report(62), n.assignable = 2, n.finishNode({
    type: "CallExpression",
    callee: u,
    arguments: A,
    optional: !1
  }, c));
}
function de(n, t) {
  const { tokenRaw: e, tokenRegExp: u, tokenValue: o, tokenStart: i } = n;
  m(n, t), n.assignable = 2;
  const l = {
    type: "Literal",
    value: o,
    regex: u
  };
  return n.options.raw && (l.raw = e), n.finishNode(l, i);
}
function R2(n, t, e, u, o) {
  let i, l;
  n.leadingDecorators.decorators.length ? (n.getToken() === 132 && n.report(30, "@"), i = n.leadingDecorators.start, l = [...n.leadingDecorators.decorators], n.leadingDecorators.decorators.length = 0) : (i = n.tokenStart, l = q2(n, t, u)), t = (t | 16384 | 1) ^ 16384, m(n, t);
  let f = null, c = null;
  const { tokenValue: g } = n;
  n.getToken() & 4096 && n.getToken() !== 20565 ? (En(n, t, n.getToken()) && n.report(118), (n.getToken() & 537079808) === 537079808 && n.report(119), e && (e.addBlockName(t, g, 32, 0), o && o & 2 && n.declareUnboundVariable(g)), f = I(n, t)) : (o & 1) === 0 && n.report(39, "Class");
  let d = t;
  r(n, t | 32, 20565) ? (c = M(n, t, u, 0, 0, 0), d |= 512) : d = (d | 512) ^ 512;
  const s = vn(n, d, t, e, u, 2, 8, 0);
  return n.finishNode({
    type: "ClassDeclaration",
    id: f,
    superClass: c,
    body: s,
    ...n.options.next ? { decorators: l } : null
  }, i);
}
function se(n, t, e, u, o) {
  let i = null, l = null;
  const f = q2(n, t, e);
  t = (t | 1 | 16384) ^ 16384, m(n, t), n.getToken() & 4096 && n.getToken() !== 20565 && (En(n, t, n.getToken()) && n.report(118), (n.getToken() & 537079808) === 537079808 && n.report(119), i = I(n, t));
  let c = t;
  r(n, t | 32, 20565) ? (l = M(n, t, e, 0, u, 0), c |= 512) : c = (c | 512) ^ 512;
  const g = vn(n, c, t, void 0, e, 2, 0, u);
  return n.assignable = 2, n.finishNode({
    type: "ClassExpression",
    id: i,
    superClass: l,
    body: g,
    ...n.options.next ? { decorators: f } : null
  }, o);
}
function q2(n, t, e) {
  const u = [];
  if (n.options.next)
    for (; n.getToken() === 132; )
      u.push(ge(n, t, e));
  return u;
}
function ge(n, t, e) {
  const u = n.tokenStart;
  m(n, t | 32);
  const o = n.tokenStart;
  let i = j(n, t, e, 2, 0, 1, 0, 1, u);
  return i = N(n, t, e, i, 0, 0, o), n.finishNode({
    type: "Decorator",
    expression: i
  }, u);
}
function vn(n, t, e, u, o, i, l, f) {
  const { tokenStart: c } = n, g = n.createPrivateScopeIfLexical(o);
  D(n, t | 32, 2162700);
  const d = 655360;
  t = (t | d) ^ d;
  const s = n.flags & 32;
  n.flags = (n.flags | 32) ^ 32;
  const h = [];
  for (; n.getToken() !== 1074790415; ) {
    const A = n.tokenStart, C = q2(n, t, g);
    if (C.length > 0 && n.tokenValue === "constructor" && n.report(109), n.getToken() === 1074790415 && n.report(108), r(n, t, 1074790417)) {
      C.length > 0 && n.report(120);
      continue;
    }
    h.push(Pn(n, t, u, g, e, i, C, 0, f, C.length > 0 ? A : n.tokenStart));
  }
  return D(n, l & 8 ? t | 32 : t, 1074790415), g?.validatePrivateIdentifierRefs(), n.flags = n.flags & -33 | s, n.finishNode({
    type: "ClassBody",
    body: h
  }, c);
}
function Pn(n, t, e, u, o, i, l, f, c, g) {
  let d = f ? 32 : 0, s = null;
  const h = n.getToken();
  if (h & 176128 || h === -2147483528)
    switch (s = I(n, t), h) {
      case 36970:
        if (!f && n.getToken() !== 67174411 && (n.getToken() & 1048576) !== 1048576 && n.getToken() !== 1077936155)
          return Pn(n, t, e, u, o, i, l, 1, c, g);
        break;
      case 209005:
        if (n.getToken() !== 67174411 && (n.flags & 1) === 0) {
          if ((n.getToken() & 1073741824) === 1073741824)
            return o2(n, t, u, s, d, l, g);
          d |= 16 | (X2(n, t, 8391476) ? 8 : 0);
        }
        break;
      case 209008:
        if (n.getToken() !== 67174411) {
          if ((n.getToken() & 1073741824) === 1073741824)
            return o2(n, t, u, s, d, l, g);
          d |= 256;
        }
        break;
      case 209009:
        if (n.getToken() !== 67174411) {
          if ((n.getToken() & 1073741824) === 1073741824)
            return o2(n, t, u, s, d, l, g);
          d |= 512;
        }
        break;
      case 12402:
        if (n.getToken() !== 67174411 && (n.flags & 1) === 0) {
          if ((n.getToken() & 1073741824) === 1073741824)
            return o2(n, t, u, s, d, l, g);
          n.options.next && (d |= 1024);
        }
        break;
    }
  else if (h === 69271571)
    d |= 2, s = n2(n, o, u, c);
  else if ((h & 134217728) === 134217728)
    s = v(n, t);
  else if (h === 8391476)
    d |= 8, m(n, t);
  else if (n.getToken() === 130)
    d |= 8192, s = w2(n, t | 16, u, 768);
  else if ((n.getToken() & 1073741824) === 1073741824)
    d |= 128;
  else {
    if (f && h === 2162700)
      return Rt(n, t | 16, e, u, g);
    h === -2147483527 ? (s = I(n, t), n.getToken() !== 67174411 && n.report(30, F[n.getToken() & 255])) : n.report(30, F[n.getToken() & 255]);
  }
  if (d & 1816 && (n.getToken() & 143360 || n.getToken() === -2147483528 || n.getToken() === -2147483527 ? s = I(n, t) : (n.getToken() & 134217728) === 134217728 ? s = v(n, t) : n.getToken() === 69271571 ? (d |= 2, s = n2(n, t, u, 0)) : n.getToken() === 130 ? (d |= 8192, s = w2(n, t, u, d)) : n.report(135)), (d & 2) === 0 && (n.tokenValue === "constructor" ? ((n.getToken() & 1073741824) === 1073741824 ? n.report(129) : (d & 32) === 0 && n.getToken() === 67174411 && (d & 920 ? n.report(53, "accessor") : (t & 512) === 0 && (n.flags & 32 ? n.report(54) : n.flags |= 32)), d |= 64) : (d & 8192) === 0 && d & 32 && n.tokenValue === "prototype" && n.report(52)), d & 1024 || n.getToken() !== 67174411 && (d & 768) === 0)
    return o2(n, t, u, s, d, l, g);
  const A = H(n, t | 16, u, d, c, n.tokenStart);
  return n.finishNode({
    type: "MethodDefinition",
    kind: (d & 32) === 0 && d & 64 ? "constructor" : d & 256 ? "get" : d & 512 ? "set" : "method",
    static: (d & 32) > 0,
    computed: (d & 2) > 0,
    key: s,
    value: A,
    ...n.options.next ? { decorators: l } : null
  }, g);
}
function w2(n, t, e, u) {
  const { tokenStart: o } = n;
  m(n, t);
  const { tokenValue: i } = n;
  return i === "constructor" && n.report(128), n.options.lexical && (e || n.report(4, i), u ? e.addPrivateIdentifier(i, u) : e.addPrivateIdentifierRef(i)), m(n, t), n.finishNode({
    type: "PrivateIdentifier",
    name: i
  }, o);
}
function o2(n, t, e, u, o, i, l) {
  let f = null;
  if (o & 8 && n.report(0), n.getToken() === 1077936155) {
    m(n, t | 32);
    const { tokenStart: c } = n;
    n.getToken() === 537079927 && n.report(119);
    const g = 11264 | ((o & 64) === 0 ? 16896 : 0);
    t = (t | g) ^ g | (o & 8 ? 1024 : 0) | (o & 16 ? 2048 : 0) | (o & 64 ? 16384 : 0) | 256 | 65536, f = j(n, t | 16, e, 2, 0, 1, 0, 1, c), ((n.getToken() & 1073741824) !== 1073741824 || (n.getToken() & 4194304) === 4194304) && (f = N(n, t | 16, e, f, 0, 0, c), f = L(n, t | 16, e, 0, 0, c, f));
  }
  return U(n, t), n.finishNode({
    type: o & 1024 ? "AccessorProperty" : "PropertyDefinition",
    key: u,
    value: f,
    static: (o & 32) > 0,
    computed: (o & 2) > 0,
    ...n.options.next ? { decorators: i } : null
  }, l);
}
function Rn(n, t, e, u, o, i) {
  if (n.getToken() & 143360 || (t & 1) === 0 && n.getToken() === -2147483527)
    return x2(n, t, e, o, i);
  (n.getToken() & 2097152) !== 2097152 && n.report(30, F[n.getToken() & 255]);
  const l = n.getToken() === 69271571 ? $(n, t, e, u, 1, 0, 1, o, i) : X(n, t, e, u, 1, 0, 1, o, i);
  return n.destructible & 16 && n.report(50), n.destructible & 32 && n.report(50), l;
}
function x2(n, t, e, u, o) {
  const i = n.getToken();
  t & 1 && ((i & 537079808) === 537079808 ? n.report(119) : ((i & 36864) === 36864 || i === -2147483527) && n.report(118)), (i & 20480) === 20480 && n.report(102), i === 241771 && (t & 1024 && n.report(32), t & 2 && n.report(111)), (i & 255) === 73 && u & 24 && n.report(100), i === 209006 && (t & 2048 && n.report(176), t & 2 && n.report(110));
  const { tokenValue: l, tokenStart: f } = n;
  return m(n, t), e?.addVarOrBlock(t, l, u, o), n.finishNode({
    type: "Identifier",
    name: l
  }, f);
}
function L2(n, t, e, u, o) {
  if (u || D(n, t, 8456256), n.getToken() === 8390721) {
    const c = ae(n, o), [g, d] = be(n, t, e, u);
    return n.finishNode({
      type: "JSXFragment",
      openingFragment: c,
      children: g,
      closingFragment: d
    }, o);
  }
  n.getToken() === 8457014 && n.report(30, F[n.getToken() & 255]);
  let i = null, l = [];
  const f = Ce(n, t, e, u, o);
  if (!f.selfClosing) {
    [l, i] = ke(n, t, e, u);
    const c = y2(i.name);
    y2(f.name) !== c && n.report(155, c);
  }
  return n.finishNode({
    type: "JSXElement",
    children: l,
    openingElement: f,
    closingElement: i
  }, o);
}
function ae(n, t) {
  return s2(n), n.finishNode({
    type: "JSXOpeningFragment"
  }, t);
}
function he(n, t, e, u) {
  D(n, t, 8457014);
  const o = Jn(n, t);
  return n.getToken() !== 8390721 && n.report(25, F[65]), e ? s2(n) : m(n, t), n.finishNode({
    type: "JSXClosingElement",
    name: o
  }, u);
}
function me(n, t, e, u) {
  return D(n, t, 8457014), n.getToken() !== 8390721 && n.report(25, F[65]), e ? s2(n) : m(n, t), n.finishNode({
    type: "JSXClosingFragment"
  }, u);
}
function ke(n, t, e, u) {
  const o = [];
  for (; ; ) {
    const i = De(n, t, e, u);
    if (i.type === "JSXClosingElement")
      return [o, i];
    o.push(i);
  }
}
function be(n, t, e, u) {
  const o = [];
  for (; ; ) {
    const i = Ae(n, t, e, u);
    if (i.type === "JSXClosingFragment")
      return [o, i];
    o.push(i);
  }
}
function De(n, t, e, u) {
  if (n.getToken() === 137)
    return Un(n, t);
  if (n.getToken() === 2162700)
    return p2(n, t, e, 1, 0);
  if (n.getToken() === 8456256) {
    const { tokenStart: o } = n;
    return m(n, t), n.getToken() === 8457014 ? he(n, t, u, o) : L2(n, t, e, 1, o);
  }
  n.report(0);
}
function Ae(n, t, e, u) {
  if (n.getToken() === 137)
    return Un(n, t);
  if (n.getToken() === 2162700)
    return p2(n, t, e, 1, 0);
  if (n.getToken() === 8456256) {
    const { tokenStart: o } = n;
    return m(n, t), n.getToken() === 8457014 ? me(n, t, u, o) : L2(n, t, e, 1, o);
  }
  n.report(0);
}
function Un(n, t) {
  const e = n.tokenStart;
  m(n, t);
  const u = {
    type: "JSXText",
    value: n.tokenValue
  };
  return n.options.raw && (u.raw = n.tokenRaw), n.finishNode(u, e);
}
function Ce(n, t, e, u, o) {
  (n.getToken() & 143360) !== 143360 && (n.getToken() & 4096) !== 4096 && n.report(0);
  const i = Jn(n, t), l = Te(n, t, e), f = n.getToken() === 8457014;
  return f && D(n, t, 8457014), n.getToken() !== 8390721 && n.report(25, F[65]), u || !f ? s2(n) : m(n, t), n.finishNode({
    type: "JSXOpeningElement",
    name: i,
    attributes: l,
    selfClosing: f
  }, o);
}
function Jn(n, t) {
  const { tokenStart: e } = n;
  O2(n);
  let u = V2(n, t);
  if (n.getToken() === 21)
    return jn(n, t, u, e);
  for (; r(n, t, 67108877); )
    O2(n), u = Ee(n, t, u, e);
  return u;
}
function Ee(n, t, e, u) {
  const o = V2(n, t);
  return n.finishNode({
    type: "JSXMemberExpression",
    object: e,
    property: o
  }, u);
}
function Te(n, t, e) {
  const u = [];
  for (; n.getToken() !== 8457014 && n.getToken() !== 8390721 && n.getToken() !== 1048576; )
    u.push(re(n, t, e));
  return u;
}
function ye(n, t, e) {
  const u = n.tokenStart;
  m(n, t), D(n, t, 14);
  const o = q(n, t, e, 1, 0, n.tokenStart);
  return D(n, t, 1074790415), n.finishNode({
    type: "JSXSpreadAttribute",
    argument: o
  }, u);
}
function re(n, t, e) {
  const { tokenStart: u } = n;
  if (n.getToken() === 2162700)
    return ye(n, t, e);
  O2(n);
  let o = null, i = V2(n, t);
  if (n.getToken() === 21 && (i = jn(n, t, i, u)), n.getToken() === 1077936155)
    switch (at(n, t)) {
      case 134283267:
        o = v(n, t);
        break;
      case 8456256:
        o = L2(n, t, e, 0, n.tokenStart);
        break;
      case 2162700:
        o = p2(n, t, e, 0, 1);
        break;
      default:
        n.report(154);
    }
  return n.finishNode({
    type: "JSXAttribute",
    value: o,
    name: i
  }, u);
}
function jn(n, t, e, u) {
  D(n, t, 21);
  const o = V2(n, t);
  return n.finishNode({
    type: "JSXNamespacedName",
    namespace: e,
    name: o
  }, u);
}
function p2(n, t, e, u, o) {
  const { tokenStart: i } = n;
  m(n, t | 32);
  const { tokenStart: l } = n;
  if (n.getToken() === 14)
    return we(n, t, e, i);
  let f = null;
  return n.getToken() === 1074790415 ? (o && n.report(157), f = Be(n, {
    index: n.startIndex,
    line: n.startLine,
    column: n.startColumn
  })) : f = q(n, t, e, 1, 0, l), n.getToken() !== 1074790415 && n.report(25, F[15]), u ? s2(n) : m(n, t), n.finishNode({
    type: "JSXExpressionContainer",
    expression: f
  }, i);
}
function we(n, t, e, u) {
  D(n, t, 14);
  const o = q(n, t, e, 1, 0, n.tokenStart);
  return D(n, t, 1074790415), n.finishNode({
    type: "JSXSpreadChild",
    expression: o
  }, u);
}
function Be(n, t) {
  return n.finishNode({
    type: "JSXEmptyExpression"
  }, t, n.tokenStart);
}
function V2(n, t) {
  const e = n.tokenStart;
  n.getToken() & 143360 || n.report(30, F[n.getToken() & 255]);
  const { tokenValue: u } = n;
  return m(n, t), n.finishNode({
    type: "JSXIdentifier",
    name: u
  }, e);
}
function Se(n, t) {
  return Ct(n, { ...t, sourceType: "script" });
}
const Fe = ["createObject", "dropObject", "removeRecords", "upsertRecords"], Ne = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], f2 = Xn(Mn);
async function ve() {
  try {
    console.info("🚀 Building configuration...");
    const n = JSON.parse(await S.readFile("package.json", "utf8")), t = JSON.parse(await S.readFile("config.json", "utf8"));
    n.name != null && (t.id = n.name.replace("@datapos/", "").replace("@data-positioning/", "")), n.version != null && (t.version = n.version), await S.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (n) {
    console.error("❌ Error building configuration.", n);
  }
}
async function Pe(n) {
  try {
    console.info(`🚀 Building public directory index for identifier '${n}'...`);
    const t = {};
    async function e(o, i) {
      console.info(`⚙️ Processing directory '${o}'...`);
      const l = [], f = o.slice(`public/${n}`.length);
      t[f === "" ? "/" : f] = l;
      for (const c of i) {
        const g = `${o}/${c}`;
        try {
          const d = await S.stat(g);
          if (d.isDirectory()) {
            const s = await S.readdir(g), h = { childCount: s.length, name: c, typeId: "folder" };
            l.push(h), await e(g, s);
          } else {
            const s = { id: $n(), lastModifiedAt: d.mtimeMs, name: c, size: d.size, typeId: "object" };
            l.push(s);
          }
        } catch (d) {
          throw new Error(`Unable to get information for '${c}' in 'buildPublicDirectoryIndex'. ${String(d)}`);
        }
      }
      l.sort((c, g) => {
        const d = c.typeId.localeCompare(g.typeId);
        return d === 0 ? c.name.localeCompare(g.name) : d;
      });
    }
    const u = await S.readdir(`public/${n}`);
    await e(`public/${n}`, u), await S.writeFile(`./public/${n}Index.json`, JSON.stringify(t), "utf8"), console.info("✅ Public directory index built.");
  } catch (t) {
    console.error("❌ Error building public directory index.", t);
  }
}
async function Re() {
  try {
    console.info("🚀 Building connector configuration...");
    const n = JSON.parse(await S.readFile("package.json", "utf8")), t = JSON.parse(await S.readFile("config.json", "utf8")), e = await S.readFile("src/index.ts", "utf8");
    try {
      const d = Parser.extend(acornTS()).parse(code, { ecmaVersion: "latest", sourceType: "module" }), s = [];
      Hn(d, {
        FunctionDeclaration(h) {
          h.id && s.push(h.id.name);
        },
        MethodDefinition(h) {
          const A = h.key?.name, C = h.key?.type === "PrivateIdentifier";
          A && !C && A !== "constructor" && s.push(A);
        }
      }), console.log(s);
    } catch (g) {
      console.log(1111, g);
    }
    try {
      let g = function(s) {
        s.type === "FunctionDeclaration" ? console.log("function", s) : s.type === "MethodDefinition" && console.log("method", s);
      };
      const d = Se(e, { next: !0, module: !0 });
      g(d);
    } catch (g) {
      console.log(2222, g);
    }
    let u = !1, o = !1;
    const i = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, l = [...e.matchAll(i)].filter((g) => g[1] == null && g[2] !== "constructor"), f = [];
    for (const g of l) {
      const d = g[2];
      f.push(d), Fe.includes(d) && (u = !0), Ne.includes(d) && (o = !0);
    }
    f.length > 0 ? console.info(`ℹ️  Implements ${f.length} operations.`) : console.warn("⚠️  Implements no operations.");
    let c;
    o && u ? c = "bidirectional" : o ? c = "source" : u ? c = "destination" : c = "unknown", c === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports ${c} usage.`), n.name != null && (t.id = n.name), t.operations = f, t.usageId = c, n.version != null && (t.version = n.version), await S.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (n) {
    console.error("❌ Error building connector configuration.", n);
  }
}
async function Ue() {
  try {
    console.info("🚀 Building context configuration...");
    const n = JSON.parse(await S.readFile("package.json", "utf8")), t = JSON.parse(await S.readFile("config.json", "utf8")), e = await S.readFile("src/index.ts", "utf8"), u = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, o = [...e.matchAll(u)].filter((i) => i[1] == null && i[2] !== "constructor").map((i) => i[2]);
    n.name != null && (t.id = n.name), t.operations = o, n.version != null && (t.version = n.version), await S.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (n) {
    console.error("❌ Error building context configuration.", n);
  }
}
async function Je() {
  try {
    console.info("🚀 Building presenter configuration...");
    const n = JSON.parse(await S.readFile("package.json", "utf8")), t = JSON.parse(await S.readFile("config.json", "utf8")), e = await S.readFile("src/index.ts", "utf8"), u = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, o = [...e.matchAll(u)].filter((i) => i[1] == null && i[2] !== "constructor").map((i) => i[2]);
    n.name != null && (t.id = n.name), t.operations = o, n.version != null && (t.version = n.version), await S.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (n) {
    console.error("❌ Error building context configuration.", n);
  }
}
async function je(n = "./") {
  try {
    console.info("🚀 Bumping version...");
    const t = JSON.parse(await S.readFile(`${n}package.json`, "utf8"));
    if (t.version == null)
      t.version = "0.0.001", await S.writeFile(`${n}package.json`, JSON.stringify(t, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${t.version}.`);
    else {
      const e = t.version, u = t.version.split(".");
      t.version = `${u[0]}.${u[1]}.${Number(u[2]) + 1}`, await S.writeFile(`${n}package.json`, JSON.stringify(t, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${e} to ${t.version}.`);
    }
  } catch (t) {
    console.error("❌ Error bumping package version.", t);
  }
}
function Me(n) {
  console.error(`❌ ${n} script not implemented.`);
}
async function $e() {
  const n = "<!-- DEPENDENCY_LICENSES_START -->", t = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const e = (await S.readFile("./licenses.md", "utf8")).trim(), u = await S.readFile("./README.md", "utf8"), o = u.indexOf(n), i = u.indexOf(t);
    (o === -1 || i === -1) && (console.error("❌ Dependency license markers not found in readme file."), process.exit(1));
    const l = u.substring(0, o + n.length) + `
` + e + `
` + u.substring(i);
    await S.writeFile("README.md", l, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (e) {
    console.error("❌ Error updating readme file.", e), process.exit(1);
  }
}
async function Xe() {
  const n = "<!-- OWASP_BADGE_START -->", t = "<!-- OWASP_BADGE_END -->";
  try {
    const e = JSON.parse(await S.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), u = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const A of e.dependencies)
      if (A.vulnerabilities != null)
        for (const C of A.vulnerabilities) {
          const y = C.severity?.toLowerCase() ?? "unknown";
          y in u ? u[y]++ : u.unknown++;
        }
    const o = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, i = JSON.parse(await S.readFile("config.json", "utf8")), l = [];
    if (Object.values(u).reduce((A, C) => A + C, 0) === 0)
      console.info("✅ No vulnerabilities found."), l.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${i.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [A, C] of Object.entries(u)) {
        const y = o[A];
        if (console.warn(`⚠️  ${C} ${y.label} vulnerability(ies) found.`), C === 0) continue;
        const E = `https://img.shields.io/badge/OWASP-${C}%20${y.label}-${y.color}`;
        l.push(`[![OWASP](${E})](https://data-positioning.github.io/${i.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const c = await S.readFile("./README.md", "utf8"), g = c.indexOf(n), d = c.indexOf(t);
    (g === -1 || d === -1) && (console.error("❌ OWASP badge markers not found in README.md."), process.exit(1));
    const s = l.join(" "), h = c.substring(0, g + n.length) + s + c.substring(d);
    await S.writeFile("README.md", h, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (e) {
    console.error("❌ Error updating README with OWASP badges:", e), process.exit(1);
  }
}
async function He() {
  try {
    console.info("🚀 Sending deployment notice...");
    const n = JSON.parse(await S.readFile("config.json", "utf8")), t = {
      body: JSON.stringify(n),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, e = await fetch(`https://api.datapos.app/states/${n.id}`, t);
    if (!e.ok) throw new Error(await e.text());
    console.info("✅ Deployment notice sent.");
  } catch (n) {
    console.error("❌ Error sending deployment notice.", n);
  }
}
async function ze() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const n = JSON.parse(await S.readFile("package.json", "utf8"));
    await f2("git add ."), await f2(`git commit -m "v${n.version}"`), await f2("git push origin main:main"), console.info(`✅ Synchronised version ${n.version} with GitHub.`);
  } catch (n) {
    console.error("❌ Error synchronising with GitHub.", n);
  }
}
async function We(n, t) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function e(o, i, l) {
      for (const f of l) {
        const c = `${o}/${f}`, g = `${i}/${f}`;
        if ((await S.stat(c)).isDirectory()) {
          const s = await S.readdir(c);
          await e(c, g, s);
        } else {
          console.info(`⚙️ Uploading '${o}/${f}'...`);
          const s = `wrangler r2 object put "datapos-sample-data-eu/${i}/${f}" --file="${o}/${f}" --jurisdiction=eu --remote`, h = await f2(s);
          if (h.stderr) throw new Error(h.stderr);
        }
      }
    }
    const u = await S.readdir(`${n}/${t}/`);
    await e(`${n}/${t}`, t, u), console.info("✅ Directory uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading directory to R2.", e);
  }
}
async function _e() {
  try {
    console.info("🚀 Uploading module configuration....");
    const n = JSON.parse(await S.readFile("config.json", "utf8")), t = n.id, e = {
      body: JSON.stringify(n),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, u = await fetch(`https://api.datapos.app/states/${t}`, e);
    if (!u.ok) throw new Error(await u.text());
    console.info("✅ Module configuration uploaded.");
  } catch (n) {
    console.error("❌ Error uploading module configuration.", n);
  }
}
async function Ye(n) {
  try {
    console.info("🚀 Uploading module to R2...");
    const e = `v${JSON.parse(await S.readFile("package.json", "utf8")).version}`;
    async function u(o, i = "") {
      const l = await S.readdir(o, { withFileTypes: !0 });
      for (const f of l) {
        const c = `${o}/${f.name}`, g = i ? `${i}/${f.name}` : f.name;
        if (!f.isDirectory()) {
          const d = `${n}_${e}/${g}`.replace(/\\/g, "/"), s = f.name.endsWith(".js") ? "application/javascript" : f.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${g}' → '${d}'...`);
          const { stderr: h } = await f2(`wrangler r2 object put "${d}" --file="${c}" --content-type ${s} --jurisdiction=eu --remote`);
          if (h) throw new Error(h);
        }
      }
    }
    await u("dist"), console.info("✅ Module uploaded to R2.");
  } catch (t) {
    console.error("❌ Error uploading module to R2.", t);
  }
}
export {
  ve as buildConfig,
  Re as buildConnectorConfig,
  Ue as buildContextConfig,
  Je as buildPresenterConfig,
  Pe as buildPublicDirectoryIndex,
  je as bumpVersion,
  Me as echoScriptNotImplemented,
  $e as insertLicensesIntoReadme,
  Xe as insertOWASPDependencyCheckBadgeIntoReadme,
  He as sendDeploymentNotice,
  ze as syncWithGitHub,
  We as uploadDirectoryToR2,
  _e as uploadModuleConfigToDO,
  Ye as uploadModuleToR2
};
