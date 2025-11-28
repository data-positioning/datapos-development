import { exec as Fn } from "node:child_process";
import { promises as B } from "node:fs";
import { nanoid as Ln } from "nanoid";
import { promisify as Pn } from "node:util";
function Vn(e, t, i, n, u) {
  i || (i = b), (function s(o, a, l) {
    var f = l || o.type;
    i[f](o, a, s), t[f] && t[f](o, a);
  })(e, n, u);
}
function Rt(e, t, i) {
  i(e, t);
}
function xe(e, t, i) {
}
var b = {};
b.Program = b.BlockStatement = b.StaticBlock = function(e, t, i) {
  for (var n = 0, u = e.body; n < u.length; n += 1) {
    var s = u[n];
    i(s, t, "Statement");
  }
};
b.Statement = Rt;
b.EmptyStatement = xe;
b.ExpressionStatement = b.ParenthesizedExpression = b.ChainExpression = function(e, t, i) {
  return i(e.expression, t, "Expression");
};
b.IfStatement = function(e, t, i) {
  i(e.test, t, "Expression"), i(e.consequent, t, "Statement"), e.alternate && i(e.alternate, t, "Statement");
};
b.LabeledStatement = function(e, t, i) {
  return i(e.body, t, "Statement");
};
b.BreakStatement = b.ContinueStatement = xe;
b.WithStatement = function(e, t, i) {
  i(e.object, t, "Expression"), i(e.body, t, "Statement");
};
b.SwitchStatement = function(e, t, i) {
  i(e.discriminant, t, "Expression");
  for (var n = 0, u = e.cases; n < u.length; n += 1) {
    var s = u[n];
    i(s, t);
  }
};
b.SwitchCase = function(e, t, i) {
  e.test && i(e.test, t, "Expression");
  for (var n = 0, u = e.consequent; n < u.length; n += 1) {
    var s = u[n];
    i(s, t, "Statement");
  }
};
b.ReturnStatement = b.YieldExpression = b.AwaitExpression = function(e, t, i) {
  e.argument && i(e.argument, t, "Expression");
};
b.ThrowStatement = b.SpreadElement = function(e, t, i) {
  return i(e.argument, t, "Expression");
};
b.TryStatement = function(e, t, i) {
  i(e.block, t, "Statement"), e.handler && i(e.handler, t), e.finalizer && i(e.finalizer, t, "Statement");
};
b.CatchClause = function(e, t, i) {
  e.param && i(e.param, t, "Pattern"), i(e.body, t, "Statement");
};
b.WhileStatement = b.DoWhileStatement = function(e, t, i) {
  i(e.test, t, "Expression"), i(e.body, t, "Statement");
};
b.ForStatement = function(e, t, i) {
  e.init && i(e.init, t, "ForInit"), e.test && i(e.test, t, "Expression"), e.update && i(e.update, t, "Expression"), i(e.body, t, "Statement");
};
b.ForInStatement = b.ForOfStatement = function(e, t, i) {
  i(e.left, t, "ForInit"), i(e.right, t, "Expression"), i(e.body, t, "Statement");
};
b.ForInit = function(e, t, i) {
  e.type === "VariableDeclaration" ? i(e, t) : i(e, t, "Expression");
};
b.DebuggerStatement = xe;
b.FunctionDeclaration = function(e, t, i) {
  return i(e, t, "Function");
};
b.VariableDeclaration = function(e, t, i) {
  for (var n = 0, u = e.declarations; n < u.length; n += 1) {
    var s = u[n];
    i(s, t);
  }
};
b.VariableDeclarator = function(e, t, i) {
  i(e.id, t, "Pattern"), e.init && i(e.init, t, "Expression");
};
b.Function = function(e, t, i) {
  e.id && i(e.id, t, "Pattern");
  for (var n = 0, u = e.params; n < u.length; n += 1) {
    var s = u[n];
    i(s, t, "Pattern");
  }
  i(e.body, t, e.expression ? "Expression" : "Statement");
};
b.Pattern = function(e, t, i) {
  e.type === "Identifier" ? i(e, t, "VariablePattern") : e.type === "MemberExpression" ? i(e, t, "MemberPattern") : i(e, t);
};
b.VariablePattern = xe;
b.MemberPattern = Rt;
b.RestElement = function(e, t, i) {
  return i(e.argument, t, "Pattern");
};
b.ArrayPattern = function(e, t, i) {
  for (var n = 0, u = e.elements; n < u.length; n += 1) {
    var s = u[n];
    s && i(s, t, "Pattern");
  }
};
b.ObjectPattern = function(e, t, i) {
  for (var n = 0, u = e.properties; n < u.length; n += 1) {
    var s = u[n];
    s.type === "Property" ? (s.computed && i(s.key, t, "Expression"), i(s.value, t, "Pattern")) : s.type === "RestElement" && i(s.argument, t, "Pattern");
  }
};
b.Expression = Rt;
b.ThisExpression = b.Super = b.MetaProperty = xe;
b.ArrayExpression = function(e, t, i) {
  for (var n = 0, u = e.elements; n < u.length; n += 1) {
    var s = u[n];
    s && i(s, t, "Expression");
  }
};
b.ObjectExpression = function(e, t, i) {
  for (var n = 0, u = e.properties; n < u.length; n += 1) {
    var s = u[n];
    i(s, t);
  }
};
b.FunctionExpression = b.ArrowFunctionExpression = b.FunctionDeclaration;
b.SequenceExpression = function(e, t, i) {
  for (var n = 0, u = e.expressions; n < u.length; n += 1) {
    var s = u[n];
    i(s, t, "Expression");
  }
};
b.TemplateLiteral = function(e, t, i) {
  for (var n = 0, u = e.quasis; n < u.length; n += 1) {
    var s = u[n];
    i(s, t);
  }
  for (var o = 0, a = e.expressions; o < a.length; o += 1) {
    var l = a[o];
    i(l, t, "Expression");
  }
};
b.TemplateElement = xe;
b.UnaryExpression = b.UpdateExpression = function(e, t, i) {
  i(e.argument, t, "Expression");
};
b.BinaryExpression = b.LogicalExpression = function(e, t, i) {
  i(e.left, t, "Expression"), i(e.right, t, "Expression");
};
b.AssignmentExpression = b.AssignmentPattern = function(e, t, i) {
  i(e.left, t, "Pattern"), i(e.right, t, "Expression");
};
b.ConditionalExpression = function(e, t, i) {
  i(e.test, t, "Expression"), i(e.consequent, t, "Expression"), i(e.alternate, t, "Expression");
};
b.NewExpression = b.CallExpression = function(e, t, i) {
  if (i(e.callee, t, "Expression"), e.arguments)
    for (var n = 0, u = e.arguments; n < u.length; n += 1) {
      var s = u[n];
      i(s, t, "Expression");
    }
};
b.MemberExpression = function(e, t, i) {
  i(e.object, t, "Expression"), e.computed && i(e.property, t, "Expression");
};
b.ExportNamedDeclaration = b.ExportDefaultDeclaration = function(e, t, i) {
  e.declaration && i(e.declaration, t, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"), e.source && i(e.source, t, "Expression");
};
b.ExportAllDeclaration = function(e, t, i) {
  e.exported && i(e.exported, t), i(e.source, t, "Expression");
};
b.ImportDeclaration = function(e, t, i) {
  for (var n = 0, u = e.specifiers; n < u.length; n += 1) {
    var s = u[n];
    i(s, t);
  }
  i(e.source, t, "Expression");
};
b.ImportExpression = function(e, t, i) {
  i(e.source, t, "Expression");
};
b.ImportSpecifier = b.ImportDefaultSpecifier = b.ImportNamespaceSpecifier = b.Identifier = b.PrivateIdentifier = b.Literal = xe;
b.TaggedTemplateExpression = function(e, t, i) {
  i(e.tag, t, "Expression"), i(e.quasi, t, "Expression");
};
b.ClassDeclaration = b.ClassExpression = function(e, t, i) {
  return i(e, t, "Class");
};
b.Class = function(e, t, i) {
  e.id && i(e.id, t, "Pattern"), e.superClass && i(e.superClass, t, "Expression"), i(e.body, t);
};
b.ClassBody = function(e, t, i) {
  for (var n = 0, u = e.body; n < u.length; n += 1) {
    var s = u[n];
    i(s, t);
  }
};
b.MethodDefinition = b.PropertyDefinition = b.Property = function(e, t, i) {
  e.computed && i(e.key, t, "Expression"), e.value && i(e.value, t, "Expression");
};
const pi = ((e, t) => {
  const i = new Uint32Array(69632);
  let n = 0, u = 0;
  for (; n < 2597; ) {
    const s = e[n++];
    if (s < 0)
      u -= s;
    else {
      let o = e[n++];
      s & 2 && (o = t[o]), s & 1 ? i.fill(o, u, u += e[n++]) : i[u++] = o;
    }
  }
  return i;
})([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 63, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 64, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 58, 2, 7, 2, 6, 0, 4286643967, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191, 0, 929054175, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1885355487, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 69, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 70, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 9, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2151677951, 2, 29, 2, 10, 0, 909311, 3, 0, 2, 0, 814743551, 2, 48, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 108, 2, 51, 2, 0, 2, 79, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 9, 2, 18, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 10, 2, 0, 2, 127, 0, 4294960127, 2, 9, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, 0, 12288, 2, 54, 0, 1048577, 2, 84, 2, 14, -1, 2, 14, 0, 131042, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 88, 2, 2, 0, -16, 2, 89, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 2, 18, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 2, 0, 0, 4351, 2, 0, 2, 10, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 10, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, 2, 25, 0, 1638399, 0, 57344, 2, 107, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 65, 2, 6, 2, 12, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 23, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 47, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 125, 0, 4227858432, 2, 20, 2, 43, 2, 36, 2, 17, 2, 37, 2, 17, 2, 124, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 145, 2, 0, 2, 56, 2, 55, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 59, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 133, 0, 4190109695, 2, 52, -2, 2, 134, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 66, 2, 17, 2, 0, 2, 42, -3, 2, 31, -2, 2, 0, 2, 45, 2, 57, 2, 44, 2, 45, 2, 135, 2, 46, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 47, 2, 138, 0, 33259519, 2, 23, 2, 7, 2, 48, -7, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 8323099, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 90, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2, 155, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 58, 2, 98, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 17, 2, 49, 2, 0, 2, 32, -14, 2, 17, 2, 32, -6, 2, 17, 2, 12, -6, 2, 8, 0, 3225419775, -7, 2, 156, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 59, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -22116, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 63, 2, 0, 2, 34, -1, 2, 17, 2, 64, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 65, 3, 0, 2, 0, 131135, 2, 96, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 65279, 2, 0, 2, 48, -1, 2, 97, 2, 66, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 68, 2, 67, 0, 33554435, 2, 131, 2, 68, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 67, -1, 0, 4294828e3, 0, 603979263, 0, 922746880, 0, 3, 0, 4294828001, 0, 602930687, 0, 1879048192, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 69, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 70, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 71, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 10, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 17, 2, 51, 2, 0, 2, 79, 2, 48, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 10, 0, 8160, -1, 2, 126, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776, 2, 9, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, -3, 2, 84, 2, 14, -3, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 88, 2, -17, 2, 89, 0, 524157950, 2, 4, 2, 0, 2, 90, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 25, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 0, 4294965179, 0, 7, 2, 0, 2, 10, 2, 93, 2, 10, -1, 0, 1761345536, 2, 96, 0, 4294901823, 2, 38, 2, 20, 2, 97, 2, 35, 2, 98, 0, 2080440287, 2, 0, 2, 34, 2, 154, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, -3, 2, 107, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 108, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 65, 2, 6, 2, 30, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 17, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 124, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 96, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 125, -1, 2, 20, 2, 43, 2, 37, 2, 17, 0, 3, 2, 17, 2, 124, 2, 21, 2, 126, 2, 127, -1, 0, 2490368, 2, 126, 2, 25, 2, 17, 2, 34, 2, 126, 2, 38, 0, 4294901904, 0, 4718591, 2, 126, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 68, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 49, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 18, -3, 3, 0, 2, 2, 54, 2, 133, 0, 2147549183, 0, 2, -2, 2, 134, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 17, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 57, 2, 49, 0, 1, 2, 135, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, 2, 17, 2, 7, -8, 2, 35, 0, 4294836212, 2, 10, -3, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 9, -55, 3, 0, 17, 2, 42, 2, 8, 2, 17, 2, 0, 2, 8, 2, 17, 2, 58, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 71, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 67583, -1, 2, 105, -2, 0, 8126475, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 2, 145, -187, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 2, 154, -57, 2, 8, 2, 155, -7, 2, 17, 2, 0, 2, 58, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 17, 2, 58, 2, 0, 2, 18, -14, 2, 17, 2, 18, -6, 2, 17, 0, 81919, -6, 2, 8, 0, 3223273399, -7, 2, 156, 3, 0, 6, 2, 124, -1, 3, 0, 2, 0, 2063, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -138, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -28252], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1073741823, 1048575, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 4294901760, 4095, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294770687, 67043583, 1023, 32767, 15, 2047999, 67043343, 67051519, 2147483648, 4294902e3, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 4294836224, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 252, 4294967288, 16777215, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4285526655, 4294966527, 4294705152, 4294966143, 64, 4294966719, 3774873592, 4194303999, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901761]), Rn = (e) => (pi[(e >>> 5) + 0] >>> e & 31 & 1) !== 0, yi = (e) => (pi[(e >>> 5) + 34816] >>> e & 31 & 1) !== 0, I = [
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
], On = [
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
], Ci = [
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
function nt(e) {
  return e <= 127 ? On[e] > 0 : yi(e);
}
function Ge(e) {
  return e <= 127 ? Ci[e] > 0 : Rn(e) || e === 8204 || e === 8205;
}
function g(e) {
  return e.column++, e.currentChar = e.source.charCodeAt(++e.index);
}
function Ot(e) {
  const t = e.currentChar;
  if ((t & 64512) !== 55296)
    return 0;
  const i = e.source.charCodeAt(e.index + 1);
  return (i & 64512) !== 56320 ? 0 : 65536 + ((t & 1023) << 10) + (i & 1023);
}
function qt(e, t) {
  e.currentChar = e.source.charCodeAt(++e.index), e.flags |= 1, (t & 4) === 0 && (e.column = 0, e.line++);
}
function De(e) {
  e.flags |= 1, e.currentChar = e.source.charCodeAt(++e.index), e.column = 0, e.line++;
}
function qn(e) {
  return e === 160 || e === 65279 || e === 133 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 8201 || e === 65519;
}
function Y(e) {
  return e < 65 ? e - 48 : e - 65 + 10 & 15;
}
function Mn(e) {
  switch (e) {
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
      return (e & 143360) === 143360 ? "Identifier" : (e & 4096) === 4096 ? "Keyword" : "Punctuator";
  }
}
const Ai = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
function Un(e) {
  const { source: t } = e;
  e.currentChar === 35 && t.charCodeAt(e.index + 1) === 33 && (g(e), g(e), Mt(e, t, 0, 4, e.tokenStart));
}
function oi(e, t, i, n, u, s) {
  return n & 2 && e.report(0), Mt(e, t, i, u, s);
}
function Mt(e, t, i, n, u) {
  const { index: s } = e;
  for (e.tokenIndex = e.index, e.tokenLine = e.line, e.tokenColumn = e.column; e.index < e.end; ) {
    if (I[e.currentChar] & 8) {
      const o = e.currentChar === 13;
      De(e), o && e.index < e.end && e.currentChar === 10 && (e.currentChar = t.charCodeAt(++e.index));
      break;
    } else if ((e.currentChar ^ 8232) <= 1) {
      De(e);
      break;
    }
    g(e), e.tokenIndex = e.index, e.tokenLine = e.line, e.tokenColumn = e.column;
  }
  if (e.options.onComment) {
    const o = {
      start: {
        line: u.line,
        column: u.column
      },
      end: {
        line: e.tokenLine,
        column: e.tokenColumn
      }
    };
    e.options.onComment(Ai[n & 255], t.slice(s, e.tokenIndex), u.index, e.tokenIndex, o);
  }
  return i | 1;
}
function jn(e, t, i) {
  const { index: n } = e;
  for (; e.index < e.end; )
    if (e.currentChar < 43) {
      let u = !1;
      for (; e.currentChar === 42; )
        if (u || (i &= -5, u = !0), g(e) === 47) {
          if (g(e), e.options.onComment) {
            const s = {
              start: {
                line: e.tokenLine,
                column: e.tokenColumn
              },
              end: {
                line: e.line,
                column: e.column
              }
            };
            e.options.onComment(Ai[1], t.slice(n, e.index - 2), n - 2, e.index, s);
          }
          return e.tokenIndex = e.index, e.tokenLine = e.line, e.tokenColumn = e.column, i;
        }
      if (u)
        continue;
      I[e.currentChar] & 8 ? e.currentChar === 13 ? (i |= 5, De(e)) : (qt(e, i), i = i & -5 | 1) : g(e);
    } else (e.currentChar ^ 8232) <= 1 ? (i = i & -5 | 1, De(e)) : (i &= -5, g(e));
  e.report(18);
}
const Jn = {
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
class M extends SyntaxError {
  start;
  end;
  range;
  loc;
  description;
  constructor(t, i, n, ...u) {
    const s = Jn[n].replace(/%(\d+)/g, (a, l) => u[l]), o = "[" + t.line + ":" + t.column + "-" + i.line + ":" + i.column + "]: " + s;
    super(o), this.start = t.index, this.end = i.index, this.range = [t.index, i.index], this.loc = {
      start: { line: t.line, column: t.column },
      end: { line: i.line, column: i.column }
    }, this.description = s;
  }
}
function ht(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}
const N = [
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
], vi = {
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
function ai(e, t, i) {
  for (; Ci[g(e)]; )
    ;
  return e.tokenValue = e.source.slice(e.tokenIndex, e.index), e.currentChar !== 92 && e.currentChar <= 126 ? ht(vi, e.tokenValue) ?? 208897 : Ut(e, t, 0, i);
}
function Hn(e, t) {
  const i = wi(e);
  return nt(i) || e.report(5), e.tokenValue = String.fromCodePoint(i), Ut(e, t, 1, I[i] & 4);
}
function Ut(e, t, i, n) {
  let u = e.index;
  for (; e.index < e.end; )
    if (e.currentChar === 92) {
      e.tokenValue += e.source.slice(u, e.index), i = 1;
      const o = wi(e);
      Ge(o) || e.report(5), n = n && I[o] & 4, e.tokenValue += String.fromCodePoint(o), u = e.index;
    } else {
      const o = Ot(e);
      if (o > 0)
        Ge(o) || e.report(20, String.fromCodePoint(o)), e.currentChar = o, e.index++, e.column++;
      else if (!Ge(e.currentChar))
        break;
      g(e);
    }
  e.index <= e.end && (e.tokenValue += e.source.slice(u, e.index));
  const { length: s } = e.tokenValue;
  if (n && s >= 2 && s <= 11) {
    const o = ht(vi, e.tokenValue);
    return o === void 0 ? 208897 | (i ? -2147483648 : 0) : i ? o === 209006 ? (t & 2050) === 0 ? o | -2147483648 : -2147483528 : t & 1 ? o === 36970 || (o & 36864) === 36864 ? -2147483527 : (o & 20480) === 20480 ? t & 262144 && (t & 8) === 0 ? o | -2147483648 : -2147483528 : -2147274630 : t & 262144 && (t & 8) === 0 && (o & 20480) === 20480 ? o | -2147483648 : o === 241771 ? t & 262144 ? -2147274630 : t & 1024 ? -2147483528 : o | -2147483648 : o === 209005 ? -2147274630 : (o & 36864) === 36864 ? o | 12288 | -2147483648 : -2147483528 : o;
  }
  return 208897 | (i ? -2147483648 : 0);
}
function zn(e) {
  let t = g(e);
  if (t === 92)
    return 130;
  const i = Ot(e);
  return i && (t = i), nt(t) || e.report(96), 130;
}
function wi(e) {
  return e.source.charCodeAt(e.index + 1) !== 117 && e.report(5), e.currentChar = e.source.charCodeAt(e.index += 2), e.column += 2, Wn(e);
}
function Wn(e) {
  let t = 0;
  const i = e.currentChar;
  if (i === 123) {
    const o = e.index - 2;
    for (; I[g(e)] & 64; )
      if (t = t << 4 | Y(e.currentChar), t > 1114111)
        throw new M({ index: o, line: e.line, column: e.column }, e.currentLocation, 104);
    if (e.currentChar !== 125)
      throw new M({ index: o, line: e.line, column: e.column }, e.currentLocation, 7);
    return g(e), t;
  }
  (I[i] & 64) === 0 && e.report(7);
  const n = e.source.charCodeAt(e.index + 1);
  (I[n] & 64) === 0 && e.report(7);
  const u = e.source.charCodeAt(e.index + 2);
  (I[u] & 64) === 0 && e.report(7);
  const s = e.source.charCodeAt(e.index + 3);
  return (I[s] & 64) === 0 && e.report(7), t = Y(i) << 12 | Y(n) << 8 | Y(u) << 4 | Y(s), e.currentChar = e.source.charCodeAt(e.index += 4), e.column += 4, t;
}
function ri(e, t, i) {
  let n = e.currentChar, u = 0, s = 9, o = i & 64 ? 0 : 1, a = 0, l = 0;
  if (i & 64)
    u = "." + Ye(e, n), n = e.currentChar, n === 110 && e.report(12);
  else {
    if (n === 48)
      if (n = g(e), (n | 32) === 120) {
        for (i = 136, n = g(e); I[n] & 4160; ) {
          if (n === 95) {
            l || e.report(152), l = 0, n = g(e);
            continue;
          }
          l = 1, u = u * 16 + Y(n), a++, n = g(e);
        }
        (a === 0 || !l) && e.report(a === 0 ? 21 : 153);
      } else if ((n | 32) === 111) {
        for (i = 132, n = g(e); I[n] & 4128; ) {
          if (n === 95) {
            l || e.report(152), l = 0, n = g(e);
            continue;
          }
          l = 1, u = u * 8 + (n - 48), a++, n = g(e);
        }
        (a === 0 || !l) && e.report(a === 0 ? 0 : 153);
      } else if ((n | 32) === 98) {
        for (i = 130, n = g(e); I[n] & 4224; ) {
          if (n === 95) {
            l || e.report(152), l = 0, n = g(e);
            continue;
          }
          l = 1, u = u * 2 + (n - 48), a++, n = g(e);
        }
        (a === 0 || !l) && e.report(a === 0 ? 0 : 153);
      } else if (I[n] & 32)
        for (t & 1 && e.report(1), i = 1; I[n] & 16; ) {
          if (I[n] & 512) {
            i = 32, o = 0;
            break;
          }
          u = u * 8 + (n - 48), n = g(e);
        }
      else I[n] & 512 ? (t & 1 && e.report(1), e.flags |= 64, i = 32) : n === 95 && e.report(0);
    if (i & 48) {
      if (o) {
        for (; s >= 0 && I[n] & 4112; ) {
          if (n === 95) {
            if (n = g(e), n === 95 || i & 32)
              throw new M(e.currentLocation, { index: e.index + 1, line: e.line, column: e.column }, 152);
            l = 1;
            continue;
          }
          l = 0, u = 10 * u + (n - 48), n = g(e), --s;
        }
        if (l)
          throw new M(e.currentLocation, { index: e.index + 1, line: e.line, column: e.column }, 153);
        if (s >= 0 && !nt(n) && n !== 46)
          return e.tokenValue = u, e.options.raw && (e.tokenRaw = e.source.slice(e.tokenIndex, e.index)), 134283266;
      }
      u += Ye(e, n), n = e.currentChar, n === 46 && (g(e) === 95 && e.report(0), i = 64, u += "." + Ye(e, e.currentChar), n = e.currentChar);
    }
  }
  const f = e.index;
  let c = 0;
  if (n === 110 && i & 128)
    c = 1, n = g(e);
  else if ((n | 32) === 101) {
    n = g(e), I[n] & 256 && (n = g(e));
    const { index: h } = e;
    (I[n] & 16) === 0 && e.report(11), u += e.source.substring(f, h) + Ye(e, n), n = e.currentChar;
  }
  return (e.index < e.end && I[n] & 16 || nt(n)) && e.report(13), c ? (e.tokenRaw = e.source.slice(e.tokenIndex, e.index), e.tokenValue = BigInt(e.tokenRaw.slice(0, -1).replaceAll("_", "")), 134283388) : (e.tokenValue = i & 15 ? u : i & 32 ? parseFloat(e.source.substring(e.tokenIndex, e.index)) : +u, e.options.raw && (e.tokenRaw = e.source.slice(e.tokenIndex, e.index)), 134283266);
}
function Ye(e, t) {
  let i = 0, n = e.index, u = "";
  for (; I[t] & 4112; ) {
    if (t === 95) {
      const { index: s } = e;
      if (t = g(e), t === 95)
        throw new M(e.currentLocation, { index: e.index + 1, line: e.line, column: e.column }, 152);
      i = 1, u += e.source.substring(n, s), n = e.index;
      continue;
    }
    i = 0, t = g(e);
  }
  if (i)
    throw new M(e.currentLocation, { index: e.index + 1, line: e.line, column: e.column }, 153);
  return u + e.source.substring(n, e.index);
}
var pe;
(function(e) {
  e[e.Empty = 0] = "Empty", e[e.Escape = 1] = "Escape", e[e.Class = 2] = "Class";
})(pe || (pe = {}));
var U;
(function(e) {
  e[e.Empty = 0] = "Empty", e[e.IgnoreCase = 1] = "IgnoreCase", e[e.Global = 2] = "Global", e[e.Multiline = 4] = "Multiline", e[e.Unicode = 16] = "Unicode", e[e.Sticky = 8] = "Sticky", e[e.DotAll = 32] = "DotAll", e[e.Indices = 64] = "Indices", e[e.UnicodeSets = 128] = "UnicodeSets";
})(U || (U = {}));
function Xn(e) {
  const t = e.index;
  let i = pe.Empty;
  e: for (; ; ) {
    const f = e.currentChar;
    if (g(e), i & pe.Escape)
      i &= ~pe.Escape;
    else
      switch (f) {
        case 47:
          if (i)
            break;
          break e;
        case 92:
          i |= pe.Escape;
          break;
        case 91:
          i |= pe.Class;
          break;
        case 93:
          i &= pe.Escape;
          break;
      }
    if ((f === 13 || f === 10 || f === 8232 || f === 8233) && e.report(34), e.index >= e.source.length)
      return e.report(34);
  }
  const n = e.index - 1;
  let u = U.Empty, s = e.currentChar;
  const { index: o } = e;
  for (; Ge(s); ) {
    switch (s) {
      case 103:
        u & U.Global && e.report(36, "g"), u |= U.Global;
        break;
      case 105:
        u & U.IgnoreCase && e.report(36, "i"), u |= U.IgnoreCase;
        break;
      case 109:
        u & U.Multiline && e.report(36, "m"), u |= U.Multiline;
        break;
      case 117:
        u & U.Unicode && e.report(36, "u"), u & U.UnicodeSets && e.report(36, "vu"), u |= U.Unicode;
        break;
      case 118:
        u & U.Unicode && e.report(36, "uv"), u & U.UnicodeSets && e.report(36, "v"), u |= U.UnicodeSets;
        break;
      case 121:
        u & U.Sticky && e.report(36, "y"), u |= U.Sticky;
        break;
      case 115:
        u & U.DotAll && e.report(36, "s"), u |= U.DotAll;
        break;
      case 100:
        u & U.Indices && e.report(36, "d"), u |= U.Indices;
        break;
      default:
        e.report(35);
    }
    s = g(e);
  }
  const a = e.source.slice(o, e.index), l = e.source.slice(t, n);
  return e.tokenRegExp = { pattern: l, flags: a }, e.options.raw && (e.tokenRaw = e.source.slice(e.tokenIndex, e.index)), e.tokenValue = $n(e, l, a), 65540;
}
function $n(e, t, i) {
  try {
    return new RegExp(t, i);
  } catch {
    if (!e.options.validateRegex)
      return null;
    e.report(34);
  }
}
function Kn(e, t, i) {
  const { index: n } = e;
  let u = "", s = g(e), o = e.index;
  for (; (I[s] & 8) === 0; ) {
    if (s === i)
      return u += e.source.slice(o, e.index), g(e), e.options.raw && (e.tokenRaw = e.source.slice(n, e.index)), e.tokenValue = u, 134283267;
    if ((s & 8) === 8 && s === 92) {
      if (u += e.source.slice(o, e.index), s = g(e), s < 127 || s === 8232 || s === 8233) {
        const a = Ei(e, t, s);
        a >= 0 ? u += String.fromCodePoint(a) : Di(e, a, 0);
      } else
        u += String.fromCodePoint(s);
      o = e.index + 1;
    } else (s === 8232 || s === 8233) && (e.column = -1, e.line++);
    e.index >= e.end && e.report(16), s = g(e);
  }
  e.report(16);
}
function Ei(e, t, i, n = 0) {
  switch (i) {
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
      if (e.index < e.end) {
        const u = e.source.charCodeAt(e.index + 1);
        u === 10 && (e.index = e.index + 1, e.currentChar = u);
      }
    case 10:
    case 8232:
    case 8233:
      return e.column = -1, e.line++, -1;
    case 48:
    case 49:
    case 50:
    case 51: {
      let u = i - 48, s = e.index + 1, o = e.column + 1;
      if (s < e.end) {
        const a = e.source.charCodeAt(s);
        if ((I[a] & 32) === 0) {
          if (u !== 0 || I[a] & 512) {
            if (t & 1 || n)
              return -2;
            e.flags |= 64;
          }
        } else {
          if (t & 1 || n)
            return -2;
          if (e.currentChar = a, u = u << 3 | a - 48, s++, o++, s < e.end) {
            const l = e.source.charCodeAt(s);
            I[l] & 32 && (e.currentChar = l, u = u << 3 | l - 48, s++, o++);
          }
          e.flags |= 64;
        }
        e.index = s - 1, e.column = o - 1;
      }
      return u;
    }
    case 52:
    case 53:
    case 54:
    case 55: {
      if (n || t & 1)
        return -2;
      let u = i - 48;
      const s = e.index + 1, o = e.column + 1;
      if (s < e.end) {
        const a = e.source.charCodeAt(s);
        I[a] & 32 && (u = u << 3 | a - 48, e.currentChar = a, e.index = s, e.column = o);
      }
      return e.flags |= 64, u;
    }
    case 120: {
      const u = g(e);
      if ((I[u] & 64) === 0)
        return -4;
      const s = Y(u), o = g(e);
      if ((I[o] & 64) === 0)
        return -4;
      const a = Y(o);
      return s << 4 | a;
    }
    case 117: {
      const u = g(e);
      if (e.currentChar === 123) {
        let s = 0;
        for (; (I[g(e)] & 64) !== 0; )
          if (s = s << 4 | Y(e.currentChar), s > 1114111)
            return -5;
        return e.currentChar < 1 || e.currentChar !== 125 ? -4 : s;
      } else {
        if ((I[u] & 64) === 0)
          return -4;
        const s = e.source.charCodeAt(e.index + 1);
        if ((I[s] & 64) === 0)
          return -4;
        const o = e.source.charCodeAt(e.index + 2);
        if ((I[o] & 64) === 0)
          return -4;
        const a = e.source.charCodeAt(e.index + 3);
        return (I[a] & 64) === 0 ? -4 : (e.index += 3, e.column += 3, e.currentChar = e.source.charCodeAt(e.index), Y(u) << 12 | Y(s) << 8 | Y(o) << 4 | Y(a));
      }
    }
    case 56:
    case 57:
      if (n || !e.options.webcompat || t & 1)
        return -3;
      e.flags |= 4096;
    default:
      return i;
  }
}
function Di(e, t, i) {
  switch (t) {
    case -1:
      return;
    case -2:
      e.report(i ? 2 : 1);
    case -3:
      e.report(i ? 3 : 14);
    case -4:
      e.report(7);
    case -5:
      e.report(104);
  }
}
function xi(e, t) {
  const { index: i } = e;
  let n = 67174409, u = "", s = g(e);
  for (; s !== 96; ) {
    if (s === 36 && e.source.charCodeAt(e.index + 1) === 123) {
      g(e), n = 67174408;
      break;
    } else if (s === 92)
      if (s = g(e), s > 126)
        u += String.fromCodePoint(s);
      else {
        const { index: o, line: a, column: l } = e, f = Ei(e, t | 1, s, 1);
        if (f >= 0)
          u += String.fromCodePoint(f);
        else if (f !== -1 && t & 64) {
          e.index = o, e.line = a, e.column = l, u = null, s = Qn(e, s), s < 0 && (n = 67174408);
          break;
        } else
          Di(e, f, 1);
      }
    else e.index < e.end && (s === 13 && e.source.charCodeAt(e.index) === 10 && (u += String.fromCodePoint(s), e.currentChar = e.source.charCodeAt(++e.index)), ((s & 83) < 3 && s === 10 || (s ^ 8232) <= 1) && (e.column = -1, e.line++), u += String.fromCodePoint(s));
    e.index >= e.end && e.report(17), s = g(e);
  }
  return g(e), e.tokenValue = u, e.tokenRaw = e.source.slice(i + 1, e.index - (n === 67174409 ? 1 : 2)), n;
}
function Qn(e, t) {
  for (; t !== 96; ) {
    switch (t) {
      case 36: {
        const i = e.index + 1;
        if (i < e.end && e.source.charCodeAt(i) === 123)
          return e.index = i, e.column++, -t;
        break;
      }
      case 10:
      case 8232:
      case 8233:
        e.column = -1, e.line++;
    }
    e.index >= e.end && e.report(17), t = g(e);
  }
  return t;
}
function Yn(e, t) {
  return e.index >= e.end && e.report(0), e.index--, e.column--, xi(e, t);
}
const Zn = [
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
function m(e, t) {
  e.flags = (e.flags | 1) ^ 1, e.startIndex = e.index, e.startColumn = e.column, e.startLine = e.line, e.setToken(Ti(e, t, 0));
}
function Ti(e, t, i) {
  const n = e.index === 0, { source: u } = e;
  for (; e.index < e.end; ) {
    e.tokenIndex = e.index, e.tokenColumn = e.column, e.tokenLine = e.line;
    let s = e.currentChar;
    if (s <= 126) {
      const o = Zn[s];
      switch (o) {
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
          return g(e), o;
        case 208897:
          return ai(e, t, 0);
        case 4096:
          return ai(e, t, 1);
        case 134283266:
          return ri(e, t, 144);
        case 134283267:
          return Kn(e, t, s);
        case 131:
          return xi(e, t);
        case 136:
          return Hn(e, t);
        case 130:
          return zn(e);
        case 127:
          g(e);
          break;
        case 129:
          i |= 5, De(e);
          break;
        case 135:
          qt(e, i), i = i & -5 | 1;
          break;
        case 8456256: {
          const a = g(e);
          if (e.index < e.end) {
            if (a === 60)
              return e.index < e.end && g(e) === 61 ? (g(e), 4194332) : 8390978;
            if (a === 61)
              return g(e), 8390718;
            if (a === 33) {
              const l = e.index + 1;
              if (l + 1 < e.end && u.charCodeAt(l) === 45 && u.charCodeAt(l + 1) == 45) {
                e.column += 3, e.currentChar = u.charCodeAt(e.index += 3), i = oi(e, u, i, t, 2, e.tokenStart);
                continue;
              }
              return 8456256;
            }
          }
          return 8456256;
        }
        case 1077936155: {
          g(e);
          const a = e.currentChar;
          return a === 61 ? g(e) === 61 ? (g(e), 8390458) : 8390460 : a === 62 ? (g(e), 10) : 1077936155;
        }
        case 16842798:
          return g(e) !== 61 ? 16842798 : g(e) !== 61 ? 8390461 : (g(e), 8390459);
        case 8391477:
          return g(e) !== 61 ? 8391477 : (g(e), 4194340);
        case 8391476: {
          if (g(e), e.index >= e.end)
            return 8391476;
          const a = e.currentChar;
          return a === 61 ? (g(e), 4194338) : a !== 42 ? 8391476 : g(e) !== 61 ? 8391735 : (g(e), 4194335);
        }
        case 8389959:
          return g(e) !== 61 ? 8389959 : (g(e), 4194341);
        case 25233968: {
          g(e);
          const a = e.currentChar;
          return a === 43 ? (g(e), 33619993) : a === 61 ? (g(e), 4194336) : 25233968;
        }
        case 25233969: {
          g(e);
          const a = e.currentChar;
          if (a === 45) {
            if (g(e), (i & 1 || n) && e.currentChar === 62) {
              e.options.webcompat || e.report(112), g(e), i = oi(e, u, i, t, 3, e.tokenStart);
              continue;
            }
            return 33619994;
          }
          return a === 61 ? (g(e), 4194337) : 25233969;
        }
        case 8457014: {
          if (g(e), e.index < e.end) {
            const a = e.currentChar;
            if (a === 47) {
              g(e), i = Mt(e, u, i, 0, e.tokenStart);
              continue;
            }
            if (a === 42) {
              g(e), i = jn(e, u, i);
              continue;
            }
            if (t & 32)
              return Xn(e);
            if (a === 61)
              return g(e), 4259875;
          }
          return 8457014;
        }
        case 67108877: {
          const a = g(e);
          if (a >= 48 && a <= 57)
            return ri(e, t, 80);
          if (a === 46) {
            const l = e.index + 1;
            if (l < e.end && u.charCodeAt(l) === 46)
              return e.column += 2, e.currentChar = u.charCodeAt(e.index += 2), 14;
          }
          return 67108877;
        }
        case 8389702: {
          g(e);
          const a = e.currentChar;
          return a === 124 ? (g(e), e.currentChar === 61 ? (g(e), 4194344) : 8913465) : a === 61 ? (g(e), 4194342) : 8389702;
        }
        case 8390721: {
          g(e);
          const a = e.currentChar;
          if (a === 61)
            return g(e), 8390719;
          if (a !== 62)
            return 8390721;
          if (g(e), e.index < e.end) {
            const l = e.currentChar;
            if (l === 62)
              return g(e) === 61 ? (g(e), 4194334) : 8390980;
            if (l === 61)
              return g(e), 4194333;
          }
          return 8390979;
        }
        case 8390213: {
          g(e);
          const a = e.currentChar;
          return a === 38 ? (g(e), e.currentChar === 61 ? (g(e), 4194345) : 8913720) : a === 61 ? (g(e), 4194343) : 8390213;
        }
        case 22: {
          let a = g(e);
          if (a === 63)
            return g(e), e.currentChar === 61 ? (g(e), 4194346) : 276824445;
          if (a === 46) {
            const l = e.index + 1;
            if (l < e.end && (a = u.charCodeAt(l), !(a >= 48 && a <= 57)))
              return g(e), 67108990;
          }
          return 22;
        }
      }
    } else {
      if ((s ^ 8232) <= 1) {
        i = i & -5 | 1, De(e);
        continue;
      }
      const o = Ot(e);
      if (o > 0 && (s = o), yi(s))
        return e.tokenValue = "", Ut(e, t, 0, 0);
      if (qn(s)) {
        g(e);
        continue;
      }
      e.report(20, String.fromCodePoint(s));
    }
  }
  return 1048576;
}
function X(e, t) {
  (e.flags & 1) === 0 && (e.getToken() & 1048576) !== 1048576 && e.report(30, N[e.getToken() & 255]), T(e, t, 1074790417) || e.options.onInsertedSemicolon?.(e.startIndex);
}
function Si(e, t, i, n) {
  return t - i < 13 && n === "use strict" && ((e.getToken() & 1048576) === 1048576 || e.flags & 1) ? 1 : 0;
}
function jt(e, t, i) {
  return e.getToken() !== i ? 0 : (m(e, t), 1);
}
function T(e, t, i) {
  return e.getToken() !== i ? !1 : (m(e, t), !0);
}
function p(e, t, i) {
  e.getToken() !== i && e.report(25, N[i & 255]), m(e, t);
}
function re(e, t) {
  switch (t.type) {
    case "ArrayExpression": {
      t.type = "ArrayPattern";
      const { elements: i } = t;
      for (let n = 0, u = i.length; n < u; ++n) {
        const s = i[n];
        s && re(e, s);
      }
      return;
    }
    case "ObjectExpression": {
      t.type = "ObjectPattern";
      const { properties: i } = t;
      for (let n = 0, u = i.length; n < u; ++n)
        re(e, i[n]);
      return;
    }
    case "AssignmentExpression":
      t.type = "AssignmentPattern", t.operator !== "=" && e.report(71), delete t.operator, re(e, t.left);
      return;
    case "Property":
      re(e, t.value);
      return;
    case "SpreadElement":
      t.type = "RestElement", re(e, t.argument);
  }
}
function ut(e, t, i, n, u) {
  t & 1 && ((n & 36864) === 36864 && e.report(118), !u && (n & 537079808) === 537079808 && e.report(119)), ((n & 20480) === 20480 || n === -2147483528) && e.report(102), i & 24 && (n & 255) === 73 && e.report(100), t & 2050 && n === 209006 && e.report(110), t & 1025 && n === 241771 && e.report(97, "yield");
}
function Ii(e, t, i) {
  t & 1 && ((i & 36864) === 36864 && e.report(118), (i & 537079808) === 537079808 && e.report(119), i === -2147483527 && e.report(95), i === -2147483528 && e.report(95)), (i & 20480) === 20480 && e.report(102), t & 2050 && i === 209006 && e.report(110), t & 1025 && i === 241771 && e.report(97, "yield");
}
function Bi(e, t, i) {
  return i === 209006 && (t & 2050 && e.report(110), e.destructible |= 128), i === 241771 && t & 1024 && e.report(97, "yield"), (i & 20480) === 20480 || (i & 36864) === 36864 || i == -2147483527;
}
function Gn(e) {
  return e.property ? e.property.type === "PrivateIdentifier" : !1;
}
function Ni(e, t, i, n) {
  for (; t; ) {
    if (t["$" + i])
      return n && e.report(137), 1;
    n && t.loop && (n = 0), t = t.$;
  }
  return 0;
}
function eu(e, t, i) {
  let n = t;
  for (; n; )
    n["$" + i] && e.report(136, i), n = n.$;
  t["$" + i] = 1;
}
function st(e) {
  switch (e.type) {
    case "JSXIdentifier":
      return e.name;
    case "JSXNamespacedName":
      return e.namespace + ":" + e.name;
    case "JSXMemberExpression":
      return st(e.object) + "." + st(e.property);
  }
}
function He(e, t) {
  return e & 1025 ? e & 2 && t === 209006 || e & 1024 && t === 241771 ? !1 : (t & 12288) === 12288 : (t & 12288) === 12288 || (t & 36864) === 36864;
}
function dt(e, t, i) {
  (i & 537079808) === 537079808 && (t & 1 && e.report(119), e.flags |= 512), He(t, i) || e.report(0);
}
const tu = {
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
}, iu = {
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
function nu(e) {
  return e.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (t) => {
    if (t.charAt(1) === "#") {
      const i = t.charAt(2), n = i === "X" || i === "x" ? parseInt(t.slice(3), 16) : parseInt(t.slice(2), 10);
      return uu(n);
    }
    return ht(tu, t.slice(1, -1)) ?? t;
  });
}
function uu(e) {
  return e >= 55296 && e <= 57343 || e > 1114111 ? "�" : String.fromCodePoint(ht(iu, e) ?? e);
}
function su(e, t) {
  return e.startIndex = e.tokenIndex = e.index, e.startColumn = e.tokenColumn = e.column, e.startLine = e.tokenLine = e.line, e.setToken(I[e.currentChar] & 8192 ? ou(e) : Ti(e, t, 0)), e.getToken();
}
function ou(e) {
  const t = e.currentChar;
  let i = g(e);
  const n = e.index;
  for (; i !== t; )
    e.index >= e.end && e.report(16), i = g(e);
  return i !== t && e.report(16), e.tokenValue = e.source.slice(n, e.index), g(e), e.options.raw && (e.tokenRaw = e.source.slice(e.tokenIndex, e.index)), 134283267;
}
function ze(e) {
  if (e.startIndex = e.tokenIndex = e.index, e.startColumn = e.tokenColumn = e.column, e.startLine = e.tokenLine = e.line, e.index >= e.end) {
    e.setToken(1048576);
    return;
  }
  if (e.currentChar === 60) {
    g(e), e.setToken(8456256);
    return;
  }
  if (e.currentChar === 123) {
    g(e), e.setToken(2162700);
    return;
  }
  let t = 0;
  for (; e.index < e.end; ) {
    const n = I[e.source.charCodeAt(e.index)];
    if (n & 1024 ? (t |= 5, De(e)) : n & 2048 ? (qt(e, t), t = t & -5 | 1) : g(e), I[e.currentChar] & 16384)
      break;
  }
  e.tokenIndex === e.index && e.report(0);
  const i = e.source.slice(e.tokenIndex, e.index);
  e.options.raw && (e.tokenRaw = i), e.tokenValue = nu(i), e.setToken(137);
}
function It(e) {
  if ((e.getToken() & 143360) === 143360) {
    const { index: t } = e;
    let i = e.currentChar;
    for (; I[i] & 32770; )
      i = g(e);
    e.tokenValue += e.source.slice(t, e.index), e.setToken(208897, !0);
  }
  return e.getToken();
}
function au(e) {
  const t = {
    validateRegex: !0,
    ...e
  };
  return t.module && !t.sourceType && (t.sourceType = "module"), t.globalReturn && (!t.sourceType || t.sourceType === "script") && (t.sourceType = "commonjs"), t;
}
class ru {
  parser;
  parent;
  refs = /* @__PURE__ */ Object.create(null);
  privateIdentifiers = /* @__PURE__ */ new Map();
  constructor(t, i) {
    this.parser = t, this.parent = i;
  }
  addPrivateIdentifier(t, i) {
    const { privateIdentifiers: n } = this;
    let u = i & 800;
    u & 768 || (u |= 768);
    const s = n.get(t);
    this.hasPrivateIdentifier(t) && ((s & 32) !== (u & 32) || s & u & 768) && this.parser.report(146, t), n.set(t, this.hasPrivateIdentifier(t) ? s | u : u);
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
        const { index: i, line: n, column: u } = this.refs[t][0];
        throw new M({ index: i, line: n, column: u }, { index: i + t.length, line: n, column: u + t.length }, 4, t);
      }
  }
  hasPrivateIdentifier(t) {
    return this.privateIdentifiers.has(t);
  }
}
let lu = class _i {
  parser;
  type;
  parent;
  scopeError;
  variableBindings = /* @__PURE__ */ new Map();
  constructor(t, i = 2, n) {
    this.parser = t, this.type = i, this.parent = n;
  }
  createChildScope(t) {
    return new _i(this.parser, t, this);
  }
  addVarOrBlock(t, i, n, u) {
    n & 4 ? this.addVarName(t, i, n) : this.addBlockName(t, i, n, u), u & 64 && this.parser.declareUnboundVariable(i);
  }
  addVarName(t, i, n) {
    const { parser: u } = this;
    let s = this;
    for (; s && (s.type & 128) === 0; ) {
      const { variableBindings: o } = s, a = o.get(i);
      a && a & 248 && (u.options.webcompat && (t & 1) === 0 && (n & 128 && a & 68 || a & 128 && n & 68) || u.report(145, i)), s === this && a && a & 1 && n & 1 && s.recordScopeError(145, i), a && (a & 256 || a & 512 && !u.options.webcompat) && u.report(145, i), s.variableBindings.set(i, n), s = s.parent;
    }
  }
  hasVariable(t) {
    return this.variableBindings.has(t);
  }
  addBlockName(t, i, n, u) {
    const { parser: s } = this, o = this.variableBindings.get(i);
    o && (o & 2) === 0 && (n & 1 ? this.recordScopeError(145, i) : s.options.webcompat && (t & 1) === 0 && u & 2 && o === 64 && n === 64 || s.report(145, i)), this.type & 64 && this.parent?.hasVariable(i) && (this.parent.variableBindings.get(i) & 2) === 0 && s.report(145, i), this.type & 512 && o && (o & 2) === 0 && n & 1 && this.recordScopeError(145, i), this.type & 32 && this.parent.variableBindings.get(i) & 768 && s.report(159, i), this.variableBindings.set(i, n);
  }
  recordScopeError(t, ...i) {
    this.scopeError = {
      type: t,
      params: i,
      start: this.parser.tokenStart,
      end: this.parser.currentLocation
    };
  }
  reportScopeError() {
    const { scopeError: t } = this;
    if (t)
      throw new M(t.start, t.end, t.type, ...t.params);
  }
};
function gt(e, t, i) {
  const n = e.createScope().createChildScope(512);
  return n.addBlockName(t, i, 1, 0), n;
}
let cu = class {
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
  constructor(t, i = {}) {
    this.source = t, this.end = t.length, this.currentChar = t.charCodeAt(0), this.options = au(i), Array.isArray(this.options.onComment) && (this.options.onComment = fu(this.options.onComment, this.options)), Array.isArray(this.options.onToken) && (this.options.onToken = hu(this.options.onToken, this.options));
  }
  getToken() {
    return this.token;
  }
  setToken(t, i = !1) {
    this.token = t;
    const { onToken: n } = this.options;
    if (n)
      if (t !== 1048576) {
        const u = {
          start: {
            line: this.tokenLine,
            column: this.tokenColumn
          },
          end: {
            line: this.line,
            column: this.column
          }
        };
        !i && this.lastOnToken && n(...this.lastOnToken), this.lastOnToken = [Mn(t), this.tokenIndex, this.index, u];
      } else
        this.lastOnToken && (n(...this.lastOnToken), this.lastOnToken = null);
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
  finishNode(t, i, n) {
    if (this.options.ranges) {
      t.start = i.index;
      const u = n ? n.index : this.startIndex;
      t.end = u, t.range = [i.index, u];
    }
    return this.options.loc && (t.loc = {
      start: {
        line: i.line,
        column: i.column
      },
      end: n ? { line: n.line, column: n.column } : { line: this.startLine, column: this.startColumn }
    }, this.options.source && (t.loc.source = this.options.source)), t;
  }
  addBindingToExports(t) {
    this.exportedBindings.add(t);
  }
  declareUnboundVariable(t) {
    const { exportedNames: i } = this;
    i.has(t) && this.report(147, t), i.add(t);
  }
  report(t, ...i) {
    throw new M(this.tokenStart, this.currentLocation, t, ...i);
  }
  createScopeIfLexical(t, i) {
    if (this.options.lexical)
      return this.createScope(t, i);
  }
  createScope(t, i) {
    return new lu(this, t, i);
  }
  createPrivateScopeIfLexical(t) {
    if (this.options.lexical)
      return new ru(this, t);
  }
  cloneIdentifier(t) {
    return this.cloneLocationInformation({ ...t }, t);
  }
  cloneStringLiteral(t) {
    return this.cloneLocationInformation({ ...t }, t);
  }
  cloneLocationInformation(t, i) {
    return this.options.ranges && (t.range = [...i.range]), this.options.loc && (t.loc = {
      ...i.loc,
      start: { ...i.loc.start },
      end: { ...i.loc.end }
    }), t;
  }
};
function fu(e, t) {
  return function(i, n, u, s, o) {
    const a = {
      type: i,
      value: n
    };
    t.ranges && (a.start = u, a.end = s, a.range = [u, s]), t.loc && (a.loc = o), e.push(a);
  };
}
function hu(e, t) {
  return function(i, n, u, s) {
    const o = {
      token: i
    };
    t.ranges && (o.start = n, o.end = u, o.range = [n, u]), t.loc && (o.loc = s), e.push(o);
  };
}
function du(e, t = {}, i = 0) {
  const n = new cu(e, t);
  n.options.sourceType === "module" && (i |= 3), n.options.sourceType === "commonjs" && (i |= 69632), n.options.impliedStrict && (i |= 1), Un(n);
  const u = n.createScopeIfLexical();
  let s = [], o = "script";
  if (i & 2) {
    if (o = "module", s = mu(n, i | 8, u), u)
      for (const a of n.exportedBindings)
        u.hasVariable(a) || n.report(148, a);
  } else
    s = gu(n, i | 8, u);
  return n.finishNode({
    type: "Program",
    sourceType: o,
    body: s
  }, { index: 0, line: 1, column: 0 }, n.currentLocation);
}
function gu(e, t, i) {
  m(e, t | 32 | 262144);
  const n = [];
  for (; e.getToken() === 134283267; ) {
    const { index: u, tokenValue: s, tokenStart: o, tokenIndex: a } = e, l = e.getToken(), f = J(e, t);
    if (Si(e, u, a, s)) {
      if (t |= 1, e.flags & 64)
        throw new M(e.tokenStart, e.currentLocation, 9);
      if (e.flags & 4096)
        throw new M(e.tokenStart, e.currentLocation, 15);
    }
    n.push(Ht(e, t, f, l, o));
  }
  for (; e.getToken() !== 1048576; )
    n.push(We(e, t, i, void 0, 4, {}));
  return n;
}
function mu(e, t, i) {
  m(e, t | 32);
  const n = [];
  for (; e.getToken() === 134283267; ) {
    const { tokenStart: u } = e, s = e.getToken();
    n.push(Ht(e, t, J(e, t), s, u));
  }
  for (; e.getToken() !== 1048576; )
    n.push(bu(e, t, i));
  return n;
}
function bu(e, t, i) {
  e.getToken() === 132 && Object.assign(e.leadingDecorators, {
    start: e.tokenStart,
    decorators: kt(e, t, void 0)
  });
  let n;
  switch (e.getToken()) {
    case 20564:
      n = Vu(e, t, i);
      break;
    case 86106:
      n = Lu(e, t, i);
      break;
    default:
      n = We(e, t, i, void 0, 4, {});
  }
  return e.leadingDecorators?.decorators.length && e.report(170), n;
}
function We(e, t, i, n, u, s) {
  const o = e.tokenStart;
  switch (e.getToken()) {
    case 86104:
      return Ce(e, t, i, n, u, 1, 0, 0, o);
    case 132:
    case 86094:
      return _t(e, t, i, n, 0);
    case 86090:
      return Bt(e, t, i, n, 16, 0);
    case 241737:
      return _u(e, t, i, n, u);
    case 20564:
      e.report(103, "export");
    case 86106:
      switch (m(e, t), e.getToken()) {
        case 67174411:
          return Ri(e, t, n, o);
        case 67108877:
          return Vi(e, t, o);
        default:
          e.report(103, "import");
      }
    case 209005:
      return Fi(e, t, i, n, u, s, 1);
    default:
      return Xe(e, t, i, n, u, s, 1);
  }
}
function Xe(e, t, i, n, u, s, o) {
  switch (e.getToken()) {
    case 86088:
      return Li(e, t, i, n, 0);
    case 20572:
      return pu(e, t, n);
    case 20569:
      return Au(e, t, i, n, s);
    case 20567:
      return Fu(e, t, i, n, s);
    case 20562:
      return Nu(e, t, i, n, s);
    case 20578:
      return wu(e, t, i, n, s);
    case 86110:
      return vu(e, t, i, n, s);
    case 1074790417:
      return yu(e, t);
    case 2162700:
      return Ue(e, t, i?.createChildScope(), n, s, e.tokenStart);
    case 86112:
      return Cu(e, t, n);
    case 20555:
      return Du(e, t, s);
    case 20559:
      return Eu(e, t, s);
    case 20577:
      return Su(e, t, i, n, s);
    case 20579:
      return xu(e, t, i, n, s);
    case 20560:
      return Tu(e, t);
    case 209005:
      return Fi(e, t, i, n, u, s, 0);
    case 20557:
      e.report(162);
    case 20566:
      e.report(163);
    case 86104:
      e.report(t & 1 ? 76 : e.options.webcompat ? 77 : 78);
    case 86094:
      e.report(79);
    default:
      return ku(e, t, i, n, u, s, o);
  }
}
function ku(e, t, i, n, u, s, o) {
  const { tokenValue: a, tokenStart: l } = e, f = e.getToken();
  let c;
  switch (f) {
    case 241737:
      c = V(e, t), t & 1 && e.report(85), e.getToken() === 69271571 && e.report(84);
      break;
    default:
      c = Z(e, t, n, 2, 0, 1, 0, 1, e.tokenStart);
  }
  return f & 143360 && e.getToken() === 21 ? Jt(e, t, i, n, u, s, a, c, f, o, l) : (c = P(e, t, n, c, 0, 0, l), c = O(e, t, n, 0, 0, l, c), e.getToken() === 18 && (c = de(e, t, n, 0, l, c)), Be(e, t, c, l));
}
function Ue(e, t, i, n, u, s = e.tokenStart, o = "BlockStatement") {
  const a = [];
  for (p(e, t | 32, 2162700); e.getToken() !== 1074790415; )
    a.push(We(e, t, i, n, 2, { $: u }));
  return p(e, t | 32, 1074790415), e.finishNode({
    type: o,
    body: a
  }, s);
}
function pu(e, t, i) {
  (t & 4096) === 0 && e.report(92);
  const n = e.tokenStart;
  m(e, t | 32);
  const u = e.flags & 1 || e.getToken() & 1048576 ? null : z(e, t, i, 0, 1, e.tokenStart);
  return X(e, t | 32), e.finishNode({
    type: "ReturnStatement",
    argument: u
  }, n);
}
function Be(e, t, i, n) {
  return X(e, t | 32), e.finishNode({
    type: "ExpressionStatement",
    expression: i
  }, n);
}
function Jt(e, t, i, n, u, s, o, a, l, f, c) {
  ut(e, t, 0, l, 1), eu(e, s, o), m(e, t | 32);
  const h = f && (t & 1) === 0 && e.options.webcompat && e.getToken() === 86104 ? Ce(e, t, i?.createChildScope(), n, u, 0, 0, 0, e.tokenStart) : Xe(e, t, i, n, u, s, f);
  return e.finishNode({
    type: "LabeledStatement",
    label: a,
    body: h
  }, c);
}
function Fi(e, t, i, n, u, s, o) {
  const { tokenValue: a, tokenStart: l } = e, f = e.getToken();
  let c = V(e, t);
  if (e.getToken() === 21)
    return Jt(e, t, i, n, u, s, a, c, f, 1, l);
  const h = e.flags & 1;
  if (!h) {
    if (e.getToken() === 86104)
      return o || e.report(123), Ce(e, t, i, n, u, 1, 0, 1, l);
    if (He(t, e.getToken()))
      return c = Hi(e, t, n, 1, l), e.getToken() === 18 && (c = de(e, t, n, 0, l, c)), Be(e, t, c, l);
  }
  return e.getToken() === 67174411 ? c = Qt(e, t, n, c, 1, 1, 0, h, l) : (e.getToken() === 10 && (dt(e, t, f), (f & 36864) === 36864 && (e.flags |= 256), c = bt(e, t | 2048, n, e.tokenValue, c, 0, 1, 0, l)), e.assignable = 1), c = P(e, t, n, c, 0, 0, l), c = O(e, t, n, 0, 0, l, c), e.assignable = 1, e.getToken() === 18 && (c = de(e, t, n, 0, l, c)), Be(e, t, c, l);
}
function Ht(e, t, i, n, u) {
  const s = e.startIndex;
  n !== 1074790417 && (e.assignable = 2, i = P(e, t, void 0, i, 0, 0, u), e.getToken() !== 1074790417 && (i = O(e, t, void 0, 0, 0, u, i), e.getToken() === 18 && (i = de(e, t, void 0, 0, u, i))), X(e, t | 32));
  const o = {
    type: "ExpressionStatement",
    expression: i
  };
  return i.type === "Literal" && typeof i.value == "string" && (o.directive = e.source.slice(u.index + 1, s - 1)), e.finishNode(o, u);
}
function yu(e, t) {
  const i = e.tokenStart;
  return m(e, t | 32), e.finishNode({
    type: "EmptyStatement"
  }, i);
}
function Cu(e, t, i) {
  const n = e.tokenStart;
  m(e, t | 32), e.flags & 1 && e.report(90);
  const u = z(e, t, i, 0, 1, e.tokenStart);
  return X(e, t | 32), e.finishNode({
    type: "ThrowStatement",
    argument: u
  }, n);
}
function Au(e, t, i, n, u) {
  const s = e.tokenStart;
  m(e, t), p(e, t | 32, 67174411), e.assignable = 1;
  const o = z(e, t, n, 0, 1, e.tokenStart);
  p(e, t | 32, 16);
  const a = li(e, t, i, n, u);
  let l = null;
  return e.getToken() === 20563 && (m(e, t | 32), l = li(e, t, i, n, u)), e.finishNode({
    type: "IfStatement",
    test: o,
    consequent: a,
    alternate: l
  }, s);
}
function li(e, t, i, n, u) {
  const { tokenStart: s } = e;
  return t & 1 || !e.options.webcompat || e.getToken() !== 86104 ? Xe(e, t, i, n, 0, { $: u }, 0) : Ce(e, t, i?.createChildScope(), n, 0, 0, 0, 0, s);
}
function vu(e, t, i, n, u) {
  const s = e.tokenStart;
  m(e, t), p(e, t | 32, 67174411);
  const o = z(e, t, n, 0, 1, e.tokenStart);
  p(e, t, 16), p(e, t, 2162700);
  const a = [];
  let l = 0;
  for (i = i?.createChildScope(8); e.getToken() !== 1074790415; ) {
    const { tokenStart: f } = e;
    let c = null;
    const h = [];
    for (T(e, t | 32, 20556) ? c = z(e, t, n, 0, 1, e.tokenStart) : (p(e, t | 32, 20561), l && e.report(89), l = 1), p(e, t | 32, 21); e.getToken() !== 20556 && e.getToken() !== 1074790415 && e.getToken() !== 20561; )
      h.push(We(e, t | 4, i, n, 2, {
        $: u
      }));
    a.push(e.finishNode({
      type: "SwitchCase",
      test: c,
      consequent: h
    }, f));
  }
  return p(e, t | 32, 1074790415), e.finishNode({
    type: "SwitchStatement",
    discriminant: o,
    cases: a
  }, s);
}
function wu(e, t, i, n, u) {
  const s = e.tokenStart;
  m(e, t), p(e, t | 32, 67174411);
  const o = z(e, t, n, 0, 1, e.tokenStart);
  p(e, t | 32, 16);
  const a = Oe(e, t, i, n, u);
  return e.finishNode({
    type: "WhileStatement",
    test: o,
    body: a
  }, s);
}
function Oe(e, t, i, n, u) {
  return Xe(e, (t | 131072) ^ 131072 | 128, i, n, 0, { loop: 1, $: u }, 0);
}
function Eu(e, t, i) {
  (t & 128) === 0 && e.report(68);
  const n = e.tokenStart;
  m(e, t);
  let u = null;
  if ((e.flags & 1) === 0 && e.getToken() & 143360) {
    const { tokenValue: s } = e;
    u = V(e, t | 32), Ni(e, i, s, 1) || e.report(138, s);
  }
  return X(e, t | 32), e.finishNode({
    type: "ContinueStatement",
    label: u
  }, n);
}
function Du(e, t, i) {
  const n = e.tokenStart;
  m(e, t | 32);
  let u = null;
  if ((e.flags & 1) === 0 && e.getToken() & 143360) {
    const { tokenValue: s } = e;
    u = V(e, t | 32), Ni(e, i, s, 0) || e.report(138, s);
  } else (t & 132) === 0 && e.report(69);
  return X(e, t | 32), e.finishNode({
    type: "BreakStatement",
    label: u
  }, n);
}
function xu(e, t, i, n, u) {
  const s = e.tokenStart;
  m(e, t), t & 1 && e.report(91), p(e, t | 32, 67174411);
  const o = z(e, t, n, 0, 1, e.tokenStart);
  p(e, t | 32, 16);
  const a = Xe(e, t, i, n, 2, u, 0);
  return e.finishNode({
    type: "WithStatement",
    object: o,
    body: a
  }, s);
}
function Tu(e, t) {
  const i = e.tokenStart;
  return m(e, t | 32), X(e, t | 32), e.finishNode({
    type: "DebuggerStatement"
  }, i);
}
function Su(e, t, i, n, u) {
  const s = e.tokenStart;
  m(e, t | 32);
  const o = i?.createChildScope(16), a = Ue(e, t, o, n, { $: u }), { tokenStart: l } = e, f = T(e, t | 32, 20557) ? Iu(e, t, i, n, u, l) : null;
  let c = null;
  if (e.getToken() === 20566) {
    m(e, t | 32);
    const h = i?.createChildScope(4);
    c = Ue(e, t, h, n, { $: u });
  }
  return !f && !c && e.report(88), e.finishNode({
    type: "TryStatement",
    block: a,
    handler: f,
    finalizer: c
  }, s);
}
function Iu(e, t, i, n, u, s) {
  let o = null, a = i;
  T(e, t, 67174411) && (i = i?.createChildScope(4), o = Xi(e, t, i, n, (e.getToken() & 2097152) === 2097152 ? 256 : 512, 0), e.getToken() === 18 ? e.report(86) : e.getToken() === 1077936155 && e.report(87), p(e, t | 32, 16)), a = i?.createChildScope(32);
  const l = Ue(e, t, a, n, { $: u });
  return e.finishNode({
    type: "CatchClause",
    param: o,
    body: l
  }, s);
}
function Bu(e, t, i, n, u) {
  i = i?.createChildScope();
  const s = 5764;
  return t = (t | s) ^ s | 256 | 2048 | 524288 | 65536, Ue(e, t, i, n, {}, u, "StaticBlock");
}
function Nu(e, t, i, n, u) {
  const s = e.tokenStart;
  m(e, t | 32);
  const o = Oe(e, t, i, n, u);
  p(e, t, 20578), p(e, t | 32, 67174411);
  const a = z(e, t, n, 0, 1, e.tokenStart);
  return p(e, t | 32, 16), T(e, t | 32, 1074790417), e.finishNode({
    type: "DoWhileStatement",
    body: o,
    test: a
  }, s);
}
function _u(e, t, i, n, u) {
  const { tokenValue: s, tokenStart: o } = e, a = e.getToken();
  let l = V(e, t);
  if (e.getToken() & 2240512) {
    const f = Ie(e, t, i, n, 8, 0);
    return X(e, t | 32), e.finishNode({
      type: "VariableDeclaration",
      kind: "let",
      declarations: f
    }, o);
  }
  if (e.assignable = 1, t & 1 && e.report(85), e.getToken() === 21)
    return Jt(e, t, i, n, u, {}, s, l, a, 0, o);
  if (e.getToken() === 10) {
    let f;
    e.options.lexical && (f = gt(e, t, s)), e.flags = (e.flags | 128) ^ 128, l = $e(e, t, f, n, [l], 0, o);
  } else
    l = P(e, t, n, l, 0, 0, o), l = O(e, t, n, 0, 0, o, l);
  return e.getToken() === 18 && (l = de(e, t, n, 0, o, l)), Be(e, t, l, o);
}
function Bt(e, t, i, n, u, s) {
  const o = e.tokenStart;
  m(e, t);
  const a = Ie(e, t, i, n, u, s);
  return X(e, t | 32), e.finishNode({
    type: "VariableDeclaration",
    kind: u & 8 ? "let" : "const",
    declarations: a
  }, o);
}
function Li(e, t, i, n, u) {
  const s = e.tokenStart;
  m(e, t);
  const o = Ie(e, t, i, n, 4, u);
  return X(e, t | 32), e.finishNode({
    type: "VariableDeclaration",
    kind: "var",
    declarations: o
  }, s);
}
function Ie(e, t, i, n, u, s) {
  let o = 1;
  const a = [
    ci(e, t, i, n, u, s)
  ];
  for (; T(e, t, 18); )
    o++, a.push(ci(e, t, i, n, u, s));
  return o > 1 && s & 32 && e.getToken() & 262144 && e.report(61, N[e.getToken() & 255]), a;
}
function ci(e, t, i, n, u, s) {
  const { tokenStart: o } = e, a = e.getToken();
  let l = null;
  const f = Xi(e, t, i, n, u, s);
  if (e.getToken() === 1077936155) {
    if (m(e, t | 32), l = R(e, t, n, 1, 0, e.tokenStart), (s & 32 || (a & 2097152) === 0) && (e.getToken() === 471156 || e.getToken() === 8673330 && (a & 2097152 || (u & 4) === 0 || t & 1)))
      throw new M(o, e.currentLocation, 60, e.getToken() === 471156 ? "of" : "in");
  } else (u & 16 || (a & 2097152) > 0) && (e.getToken() & 262144) !== 262144 && e.report(59, u & 16 ? "const" : "destructuring");
  return e.finishNode({
    type: "VariableDeclarator",
    id: f,
    init: l
  }, o);
}
function Fu(e, t, i, n, u) {
  const s = e.tokenStart;
  m(e, t);
  const o = ((t & 2048) > 0 || (t & 2) > 0 && (t & 8) > 0) && T(e, t, 209006);
  p(e, t | 32, 67174411), i = i?.createChildScope(1);
  let a = null, l = null, f = 0, c = null, h = e.getToken() === 86088 || e.getToken() === 241737 || e.getToken() === 86090, d;
  const { tokenStart: y } = e, C = e.getToken();
  if (h)
    C === 241737 ? (c = V(e, t), e.getToken() & 2240512 ? (e.getToken() === 8673330 ? t & 1 && e.report(67) : c = e.finishNode({
      type: "VariableDeclaration",
      kind: "let",
      declarations: Ie(e, t | 131072, i, n, 8, 32)
    }, y), e.assignable = 1) : t & 1 ? e.report(67) : (h = !1, e.assignable = 1, c = P(e, t, n, c, 0, 0, y), e.getToken() === 471156 && e.report(115))) : (m(e, t), c = e.finishNode(C === 86088 ? {
      type: "VariableDeclaration",
      kind: "var",
      declarations: Ie(e, t | 131072, i, n, 4, 32)
    } : {
      type: "VariableDeclaration",
      kind: "const",
      declarations: Ie(e, t | 131072, i, n, 16, 32)
    }, y), e.assignable = 1);
  else if (C === 1074790417)
    o && e.report(82);
  else if ((C & 2097152) === 2097152) {
    const w = e.tokenStart;
    c = C === 2162700 ? ue(e, t, void 0, n, 1, 0, 0, 2, 32) : ne(e, t, void 0, n, 1, 0, 0, 2, 32), f = e.destructible, f & 64 && e.report(63), e.assignable = f & 16 ? 2 : 1, c = P(e, t | 131072, n, c, 0, 0, w);
  } else
    c = ie(e, t | 131072, n, 1, 0, 1);
  if ((e.getToken() & 262144) === 262144) {
    if (e.getToken() === 471156) {
      e.assignable & 2 && e.report(80, o ? "await" : "of"), re(e, c), m(e, t | 32), d = R(e, t, n, 1, 0, e.tokenStart), p(e, t | 32, 16);
      const E = Oe(e, t, i, n, u);
      return e.finishNode({
        type: "ForOfStatement",
        left: c,
        right: d,
        body: E,
        await: o
      }, s);
    }
    e.assignable & 2 && e.report(80, "in"), re(e, c), m(e, t | 32), o && e.report(82), d = z(e, t, n, 0, 1, e.tokenStart), p(e, t | 32, 16);
    const w = Oe(e, t, i, n, u);
    return e.finishNode({
      type: "ForInStatement",
      body: w,
      left: c,
      right: d
    }, s);
  }
  o && e.report(82), h || (f & 8 && e.getToken() !== 1077936155 && e.report(80, "loop"), c = O(e, t | 131072, n, 0, 0, y, c)), e.getToken() === 18 && (c = de(e, t, n, 0, y, c)), p(e, t | 32, 1074790417), e.getToken() !== 1074790417 && (a = z(e, t, n, 0, 1, e.tokenStart)), p(e, t | 32, 1074790417), e.getToken() !== 16 && (l = z(e, t, n, 0, 1, e.tokenStart)), p(e, t | 32, 16);
  const D = Oe(e, t, i, n, u);
  return e.finishNode({
    type: "ForStatement",
    init: c,
    test: a,
    update: l,
    body: D
  }, s);
}
function Pi(e, t, i) {
  return He(t, e.getToken()) || e.report(118), (e.getToken() & 537079808) === 537079808 && e.report(119), i?.addBlockName(t, e.tokenValue, 8, 0), V(e, t);
}
function Lu(e, t, i) {
  const n = e.tokenStart;
  m(e, t);
  let u = null;
  const { tokenStart: s } = e;
  let o = [];
  if (e.getToken() === 134283267)
    u = J(e, t);
  else {
    if (e.getToken() & 143360) {
      const f = Pi(e, t, i);
      if (o = [
        e.finishNode({
          type: "ImportDefaultSpecifier",
          local: f
        }, s)
      ], T(e, t, 18))
        switch (e.getToken()) {
          case 8391476:
            o.push(fi(e, t, i));
            break;
          case 2162700:
            hi(e, t, i, o);
            break;
          default:
            e.report(107);
        }
    } else
      switch (e.getToken()) {
        case 8391476:
          o = [fi(e, t, i)];
          break;
        case 2162700:
          hi(e, t, i, o);
          break;
        case 67174411:
          return Ri(e, t, void 0, n);
        case 67108877:
          return Vi(e, t, n);
        default:
          e.report(30, N[e.getToken() & 255]);
      }
    u = Pu(e, t);
  }
  const a = Nt(e, t), l = {
    type: "ImportDeclaration",
    specifiers: o,
    source: u,
    attributes: a
  };
  return X(e, t | 32), e.finishNode(l, n);
}
function fi(e, t, i) {
  const { tokenStart: n } = e;
  if (m(e, t), p(e, t, 77932), (e.getToken() & 134217728) === 134217728)
    throw new M(n, e.currentLocation, 30, N[e.getToken() & 255]);
  return e.finishNode({
    type: "ImportNamespaceSpecifier",
    local: Pi(e, t, i)
  }, n);
}
function Pu(e, t) {
  return p(e, t, 209011), e.getToken() !== 134283267 && e.report(105, "Import"), J(e, t);
}
function hi(e, t, i, n) {
  for (m(e, t); e.getToken() & 143360 || e.getToken() === 134283267; ) {
    let { tokenValue: u, tokenStart: s } = e;
    const o = e.getToken(), a = et(e, t);
    let l;
    T(e, t, 77932) ? ((e.getToken() & 134217728) === 134217728 || e.getToken() === 18 ? e.report(106) : ut(e, t, 16, e.getToken(), 0), u = e.tokenValue, l = V(e, t)) : a.type === "Identifier" ? (ut(e, t, 16, o, 0), l = e.cloneIdentifier(a)) : e.report(25, N[108]), i?.addBlockName(t, u, 8, 0), n.push(e.finishNode({
      type: "ImportSpecifier",
      local: l,
      imported: a
    }, s)), e.getToken() !== 1074790415 && p(e, t, 18);
  }
  return p(e, t, 1074790415), n;
}
function Vi(e, t, i) {
  let n = Oi(e, t, e.finishNode({
    type: "Identifier",
    name: "import"
  }, i), i);
  return n = P(e, t, void 0, n, 0, 0, i), n = O(e, t, void 0, 0, 0, i, n), e.getToken() === 18 && (n = de(e, t, void 0, 0, i, n)), Be(e, t, n, i);
}
function Ri(e, t, i, n) {
  let u = qi(e, t, i, 0, n);
  return u = P(e, t, i, u, 0, 0, n), e.getToken() === 18 && (u = de(e, t, i, 0, n, u)), Be(e, t, u, n);
}
function Vu(e, t, i) {
  const n = e.leadingDecorators.decorators.length ? e.leadingDecorators.start : e.tokenStart;
  m(e, t | 32);
  const u = [];
  let s = null, o = null, a = [];
  if (T(e, t | 32, 20561)) {
    switch (e.getToken()) {
      case 86104: {
        s = Ce(e, t, i, void 0, 4, 1, 1, 0, e.tokenStart);
        break;
      }
      case 132:
      case 86094:
        s = _t(e, t, i, void 0, 1);
        break;
      case 209005: {
        const { tokenStart: f } = e;
        s = V(e, t);
        const { flags: c } = e;
        (c & 1) === 0 && (e.getToken() === 86104 ? s = Ce(e, t, i, void 0, 4, 1, 1, 1, f) : e.getToken() === 67174411 ? (s = Qt(e, t, void 0, s, 1, 1, 0, c, f), s = P(e, t, void 0, s, 0, 0, f), s = O(e, t, void 0, 0, 0, f, s)) : e.getToken() & 143360 && (i && (i = gt(e, t, e.tokenValue)), s = V(e, t), s = $e(e, t, i, void 0, [s], 1, f)));
        break;
      }
      default:
        s = R(e, t, void 0, 1, 0, e.tokenStart), X(e, t | 32);
    }
    return i && e.declareUnboundVariable("default"), e.finishNode({
      type: "ExportDefaultDeclaration",
      declaration: s
    }, n);
  }
  switch (e.getToken()) {
    case 8391476: {
      m(e, t);
      let f = null;
      T(e, t, 77932) && (i && e.declareUnboundVariable(e.tokenValue), f = et(e, t)), p(e, t, 209011), e.getToken() !== 134283267 && e.report(105, "Export"), o = J(e, t);
      const h = Nt(e, t), d = {
        type: "ExportAllDeclaration",
        source: o,
        exported: f,
        attributes: h
      };
      return X(e, t | 32), e.finishNode(d, n);
    }
    case 2162700: {
      m(e, t);
      const f = [], c = [];
      let h = 0;
      for (; e.getToken() & 143360 || e.getToken() === 134283267; ) {
        const { tokenStart: d, tokenValue: y } = e, C = et(e, t);
        C.type === "Literal" && (h = 1);
        let D;
        e.getToken() === 77932 ? (m(e, t), (e.getToken() & 143360) === 0 && e.getToken() !== 134283267 && e.report(106), i && (f.push(e.tokenValue), c.push(y)), D = et(e, t)) : (i && (f.push(e.tokenValue), c.push(e.tokenValue)), D = C.type === "Literal" ? e.cloneStringLiteral(C) : e.cloneIdentifier(C)), u.push(e.finishNode({
          type: "ExportSpecifier",
          local: C,
          exported: D
        }, d)), e.getToken() !== 1074790415 && p(e, t, 18);
      }
      p(e, t, 1074790415), T(e, t, 209011) ? (e.getToken() !== 134283267 && e.report(105, "Export"), o = J(e, t), a = Nt(e, t), i && f.forEach((d) => e.declareUnboundVariable(d))) : (h && e.report(172), i && (f.forEach((d) => e.declareUnboundVariable(d)), c.forEach((d) => e.addBindingToExports(d)))), X(e, t | 32);
      break;
    }
    case 132:
    case 86094:
      s = _t(e, t, i, void 0, 2);
      break;
    case 86104:
      s = Ce(e, t, i, void 0, 4, 1, 2, 0, e.tokenStart);
      break;
    case 241737:
      s = Bt(e, t, i, void 0, 8, 64);
      break;
    case 86090:
      s = Bt(e, t, i, void 0, 16, 64);
      break;
    case 86088:
      s = Li(e, t, i, void 0, 64);
      break;
    case 209005: {
      const { tokenStart: f } = e;
      if (m(e, t), (e.flags & 1) === 0 && e.getToken() === 86104) {
        s = Ce(e, t, i, void 0, 4, 1, 2, 1, f);
        break;
      }
    }
    default:
      e.report(30, N[e.getToken() & 255]);
  }
  const l = {
    type: "ExportNamedDeclaration",
    declaration: s,
    specifiers: u,
    source: o,
    attributes: a
  };
  return e.finishNode(l, n);
}
function R(e, t, i, n, u, s) {
  let o = Z(e, t, i, 2, 0, n, u, 1, s);
  return o = P(e, t, i, o, u, 0, s), O(e, t, i, u, 0, s, o);
}
function de(e, t, i, n, u, s) {
  const o = [s];
  for (; T(e, t | 32, 18); )
    o.push(R(e, t, i, 1, n, e.tokenStart));
  return e.finishNode({
    type: "SequenceExpression",
    expressions: o
  }, u);
}
function z(e, t, i, n, u, s) {
  const o = R(e, t, i, u, n, s);
  return e.getToken() === 18 ? de(e, t, i, n, s, o) : o;
}
function O(e, t, i, n, u, s, o) {
  const a = e.getToken();
  if ((a & 4194304) === 4194304) {
    e.assignable & 2 && e.report(26), (!u && a === 1077936155 && o.type === "ArrayExpression" || o.type === "ObjectExpression") && re(e, o), m(e, t | 32);
    const l = R(e, t, i, 1, n, e.tokenStart);
    return e.assignable = 2, e.finishNode(u ? {
      type: "AssignmentPattern",
      left: o,
      right: l
    } : {
      type: "AssignmentExpression",
      left: o,
      operator: N[a & 255],
      right: l
    }, s);
  }
  return (a & 8388608) === 8388608 && (o = ye(e, t, i, n, s, 4, a, o)), T(e, t | 32, 22) && (o = Ee(e, t, i, o, s)), o;
}
function Ze(e, t, i, n, u, s, o) {
  const a = e.getToken();
  m(e, t | 32);
  const l = R(e, t, i, 1, n, e.tokenStart);
  return o = e.finishNode(u ? {
    type: "AssignmentPattern",
    left: o,
    right: l
  } : {
    type: "AssignmentExpression",
    left: o,
    operator: N[a & 255],
    right: l
  }, s), e.assignable = 2, o;
}
function Ee(e, t, i, n, u) {
  const s = R(e, (t | 131072) ^ 131072, i, 1, 0, e.tokenStart);
  p(e, t | 32, 21), e.assignable = 1;
  const o = R(e, t, i, 1, 0, e.tokenStart);
  return e.assignable = 2, e.finishNode({
    type: "ConditionalExpression",
    test: n,
    consequent: s,
    alternate: o
  }, u);
}
function ye(e, t, i, n, u, s, o, a) {
  const l = -((t & 131072) > 0) & 8673330;
  let f, c;
  for (e.assignable = 2; e.getToken() & 8388608 && (f = e.getToken(), c = f & 3840, (f & 524288 && o & 268435456 || o & 524288 && f & 268435456) && e.report(165), !(c + ((f === 8391735) << 8) - ((l === f) << 12) <= s)); )
    m(e, t | 32), a = e.finishNode({
      type: f & 524288 || f & 268435456 ? "LogicalExpression" : "BinaryExpression",
      left: a,
      right: ye(e, t, i, n, e.tokenStart, c, f, ie(e, t, i, 0, n, 1)),
      operator: N[f & 255]
    }, u);
  return e.getToken() === 1077936155 && e.report(26), a;
}
function Ru(e, t, i, n, u) {
  n || e.report(0);
  const { tokenStart: s } = e, o = e.getToken();
  m(e, t | 32);
  const a = ie(e, t, i, 0, u, 1);
  return e.getToken() === 8391735 && e.report(33), t & 1 && o === 16863276 && (a.type === "Identifier" ? e.report(121) : Gn(a) && e.report(127)), e.assignable = 2, e.finishNode({
    type: "UnaryExpression",
    operator: N[o & 255],
    argument: a,
    prefix: !0
  }, s);
}
function Ou(e, t, i, n, u, s, o, a) {
  const l = e.getToken(), f = V(e, t), { flags: c } = e;
  if ((c & 1) === 0) {
    if (e.getToken() === 86104)
      return Ui(e, t, i, 1, n, a);
    if (He(t, e.getToken()))
      return u || e.report(0), (e.getToken() & 36864) === 36864 && (e.flags |= 256), Hi(e, t, i, s, a);
  }
  return !o && e.getToken() === 67174411 ? Qt(e, t, i, f, s, 1, 0, c, a) : e.getToken() === 10 ? (dt(e, t, l), o && e.report(51), (l & 36864) === 36864 && (e.flags |= 256), bt(e, t, i, e.tokenValue, f, o, s, 0, a)) : (e.assignable = 1, f);
}
function qu(e, t, i, n, u, s) {
  if (n && (e.destructible |= 256), t & 1024) {
    m(e, t | 32), t & 8192 && e.report(32), u || e.report(26), e.getToken() === 22 && e.report(124);
    let o = null, a = !1;
    return (e.flags & 1) === 0 ? (a = T(e, t | 32, 8391476), (e.getToken() & 77824 || a) && (o = R(e, t, i, 1, 0, e.tokenStart))) : e.getToken() === 8391476 && e.report(30, N[e.getToken() & 255]), e.assignable = 2, e.finishNode({
      type: "YieldExpression",
      argument: o,
      delegate: a
    }, s);
  }
  return t & 1 && e.report(97, "yield"), Kt(e, t, i);
}
function Mu(e, t, i, n, u, s) {
  u && (e.destructible |= 128), t & 524288 && e.report(177);
  const o = Kt(e, t, i);
  if (o.type === "ArrowFunctionExpression" || (e.getToken() & 65536) === 0) {
    if (t & 2048)
      throw new M(s, { index: e.startIndex, line: e.startLine, column: e.startColumn }, 176);
    if (t & 2)
      throw new M(s, { index: e.startIndex, line: e.startLine, column: e.startColumn }, 110);
    if (t & 8192 && t & 2048)
      throw new M(s, { index: e.startIndex, line: e.startLine, column: e.startColumn }, 110);
    return o;
  }
  if (t & 8192)
    throw new M(s, { index: e.startIndex, line: e.startLine, column: e.startColumn }, 31);
  if (t & 2048 || t & 2 && t & 8) {
    if (n)
      throw new M(s, { index: e.startIndex, line: e.startLine, column: e.startColumn }, 0);
    const l = ie(e, t, i, 0, 0, 1);
    return e.getToken() === 8391735 && e.report(33), e.assignable = 2, e.finishNode({
      type: "AwaitExpression",
      argument: l
    }, s);
  }
  if (t & 2)
    throw new M(s, { index: e.startIndex, line: e.startLine, column: e.startColumn }, 98);
  return o;
}
function mt(e, t, i, n, u, s, o) {
  const { tokenStart: a } = e;
  p(e, t | 32, 2162700);
  const l = [];
  if (e.getToken() !== 1074790415) {
    for (; e.getToken() === 134283267; ) {
      const { index: f, tokenStart: c, tokenIndex: h, tokenValue: d } = e, y = e.getToken(), C = J(e, t);
      if (Si(e, f, h, d)) {
        if (t |= 1, e.flags & 128)
          throw new M(c, e.currentLocation, 66);
        if (e.flags & 64)
          throw new M(c, e.currentLocation, 9);
        if (e.flags & 4096)
          throw new M(c, e.currentLocation, 15);
        o?.reportScopeError();
      }
      l.push(Ht(e, t, C, y, c));
    }
    t & 1 && (s && ((s & 537079808) === 537079808 && e.report(119), (s & 36864) === 36864 && e.report(40)), e.flags & 512 && e.report(119), e.flags & 256 && e.report(118));
  }
  for (e.flags = (e.flags | 512 | 256 | 64 | 4096) ^ 4928, e.destructible = (e.destructible | 256) ^ 256; e.getToken() !== 1074790415; )
    l.push(We(e, t, i, n, 4, {}));
  return p(e, u & 24 ? t | 32 : t, 1074790415), e.flags &= -4289, e.getToken() === 1077936155 && e.report(26), e.finishNode({
    type: "BlockStatement",
    body: l
  }, a);
}
function Uu(e, t) {
  const { tokenStart: i } = e;
  switch (m(e, t), e.getToken()) {
    case 67108990:
      e.report(167);
    case 67174411: {
      (t & 512) === 0 && e.report(28), e.assignable = 2;
      break;
    }
    case 69271571:
    case 67108877: {
      (t & 256) === 0 && e.report(29), e.assignable = 1;
      break;
    }
    default:
      e.report(30, "super");
  }
  return e.finishNode({ type: "Super" }, i);
}
function ie(e, t, i, n, u, s) {
  const o = e.tokenStart, a = Z(e, t, i, 2, 0, n, u, s, o);
  return P(e, t, i, a, u, 0, o);
}
function ju(e, t, i, n) {
  e.assignable & 2 && e.report(55);
  const u = e.getToken();
  return m(e, t), e.assignable = 2, e.finishNode({
    type: "UpdateExpression",
    argument: i,
    operator: N[u & 255],
    prefix: !1
  }, n);
}
function P(e, t, i, n, u, s, o) {
  if ((e.getToken() & 33619968) === 33619968 && (e.flags & 1) === 0)
    n = ju(e, t, n, o);
  else if ((e.getToken() & 67108864) === 67108864) {
    switch (t = (t | 131072) ^ 131072, e.getToken()) {
      case 67108877: {
        m(e, (t | 262144 | 8) ^ 8), t & 16 && e.getToken() === 130 && e.tokenValue === "super" && e.report(173), e.assignable = 1;
        const a = zt(e, t | 64, i);
        n = e.finishNode({
          type: "MemberExpression",
          object: n,
          computed: !1,
          property: a,
          optional: !1
        }, o);
        break;
      }
      case 69271571: {
        let a = !1;
        (e.flags & 2048) === 2048 && (a = !0, e.flags = (e.flags | 2048) ^ 2048), m(e, t | 32);
        const { tokenStart: l } = e, f = z(e, t, i, u, 1, l);
        p(e, t, 20), e.assignable = 1, n = e.finishNode({
          type: "MemberExpression",
          object: n,
          computed: !0,
          property: f,
          optional: !1
        }, o), a && (e.flags |= 2048);
        break;
      }
      case 67174411: {
        if ((e.flags & 1024) === 1024)
          return e.flags = (e.flags | 1024) ^ 1024, n;
        let a = !1;
        (e.flags & 2048) === 2048 && (a = !0, e.flags = (e.flags | 2048) ^ 2048);
        const l = $t(e, t, i, u);
        e.assignable = 2, n = e.finishNode({
          type: "CallExpression",
          callee: n,
          arguments: l,
          optional: !1
        }, o), a && (e.flags |= 2048);
        break;
      }
      case 67108990: {
        m(e, (t | 262144 | 8) ^ 8), e.flags |= 2048, e.assignable = 2, n = Ju(e, t, i, n, o);
        break;
      }
      default:
        (e.flags & 2048) === 2048 && e.report(166), e.assignable = 2, n = e.finishNode({
          type: "TaggedTemplateExpression",
          tag: n,
          quasi: e.getToken() === 67174408 ? Xt(e, t | 64, i) : Wt(e, t)
        }, o);
    }
    n = P(e, t, i, n, 0, 1, o);
  }
  return s === 0 && (e.flags & 2048) === 2048 && (e.flags = (e.flags | 2048) ^ 2048, n = e.finishNode({
    type: "ChainExpression",
    expression: n
  }, o)), n;
}
function Ju(e, t, i, n, u) {
  let s = !1, o;
  if ((e.getToken() === 69271571 || e.getToken() === 67174411) && (e.flags & 2048) === 2048 && (s = !0, e.flags = (e.flags | 2048) ^ 2048), e.getToken() === 69271571) {
    m(e, t | 32);
    const { tokenStart: a } = e, l = z(e, t, i, 0, 1, a);
    p(e, t, 20), e.assignable = 2, o = e.finishNode({
      type: "MemberExpression",
      object: n,
      computed: !0,
      optional: !0,
      property: l
    }, u);
  } else if (e.getToken() === 67174411) {
    const a = $t(e, t, i, 0);
    e.assignable = 2, o = e.finishNode({
      type: "CallExpression",
      callee: n,
      arguments: a,
      optional: !0
    }, u);
  } else {
    const a = zt(e, t, i);
    e.assignable = 2, o = e.finishNode({
      type: "MemberExpression",
      object: n,
      computed: !1,
      optional: !0,
      property: a
    }, u);
  }
  return s && (e.flags |= 2048), o;
}
function zt(e, t, i) {
  return (e.getToken() & 143360) === 0 && e.getToken() !== -2147483528 && e.getToken() !== -2147483527 && e.getToken() !== 130 && e.report(160), e.getToken() === 130 ? at(e, t, i, 0) : V(e, t);
}
function Hu(e, t, i, n, u, s) {
  n && e.report(56), u || e.report(0);
  const o = e.getToken();
  m(e, t | 32);
  const a = ie(e, t, i, 0, 0, 1);
  return e.assignable & 2 && e.report(55), e.assignable = 2, e.finishNode({
    type: "UpdateExpression",
    argument: a,
    operator: N[o & 255],
    prefix: !0
  }, s);
}
function Z(e, t, i, n, u, s, o, a, l) {
  if ((e.getToken() & 143360) === 143360) {
    switch (e.getToken()) {
      case 209006:
        return Mu(e, t, i, u, o, l);
      case 241771:
        return qu(e, t, i, o, s, l);
      case 209005:
        return Ou(e, t, i, o, a, s, u, l);
    }
    const { tokenValue: f } = e, c = e.getToken(), h = V(e, t | 64);
    return e.getToken() === 10 ? (a || e.report(0), dt(e, t, c), (c & 36864) === 36864 && (e.flags |= 256), bt(e, t, i, f, h, u, s, 0, l)) : (t & 16 && !(t & 32768) && !(t & 8192) && e.tokenValue === "arguments" && e.report(130), (c & 255) === 73 && (t & 1 && e.report(113), n & 24 && e.report(100)), e.assignable = t & 1 && (c & 537079808) === 537079808 ? 2 : 1, h);
  }
  if ((e.getToken() & 134217728) === 134217728)
    return J(e, t);
  switch (e.getToken()) {
    case 33619993:
    case 33619994:
      return Hu(e, t, i, u, a, l);
    case 16863276:
    case 16842798:
    case 16842799:
    case 25233968:
    case 25233969:
    case 16863275:
    case 16863277:
      return Ru(e, t, i, a, o);
    case 86104:
      return Ui(e, t, i, 0, o, l);
    case 2162700:
      return Zu(e, t, i, s ? 0 : 1, o);
    case 69271571:
      return Yu(e, t, i, s ? 0 : 1, o);
    case 67174411:
      return es(e, t | 64, i, s, 1, 0, l);
    case 86021:
    case 86022:
    case 86023:
      return Ku(e, t);
    case 86111:
      return Qu(e, t);
    case 65540:
      return ns(e, t);
    case 132:
    case 86094:
      return us(e, t, i, o, l);
    case 86109:
      return Uu(e, t);
    case 67174409:
      return Wt(e, t);
    case 67174408:
      return Xt(e, t, i);
    case 86107:
      return ts(e, t, i, o);
    case 134283388:
      return Mi(e, t);
    case 130:
      return at(e, t, i, 0);
    case 86106:
      return zu(e, t, i, u, o, l);
    case 8456256:
      if (e.options.jsx)
        return pt(e, t, i, 0, e.tokenStart);
    default:
      if (He(t, e.getToken()))
        return Kt(e, t, i);
      e.report(30, N[e.getToken() & 255]);
  }
}
function zu(e, t, i, n, u, s) {
  let o = V(e, t);
  return e.getToken() === 67108877 ? Oi(e, t, o, s) : (n && e.report(142), o = qi(e, t, i, u, s), e.assignable = 2, P(e, t, i, o, u, 0, s));
}
function Oi(e, t, i, n) {
  (t & 2) === 0 && e.report(169), m(e, t);
  const u = e.getToken();
  return u !== 209030 && e.tokenValue !== "meta" ? e.report(174) : u & -2147483648 && e.report(175), e.assignable = 2, e.finishNode({
    type: "MetaProperty",
    meta: i,
    property: V(e, t)
  }, n);
}
function qi(e, t, i, n, u) {
  p(e, t | 32, 67174411), e.getToken() === 14 && e.report(143);
  const s = R(e, t, i, 1, n, e.tokenStart);
  let o = null;
  if (e.getToken() === 18) {
    if (p(e, t, 18), e.getToken() !== 16) {
      const l = (t | 131072) ^ 131072;
      o = R(e, l, i, 1, n, e.tokenStart);
    }
    T(e, t, 18);
  }
  const a = {
    type: "ImportExpression",
    source: s,
    options: o
  };
  return p(e, t, 16), e.finishNode(a, u);
}
function Nt(e, t) {
  if (!T(e, t, 20579))
    return [];
  p(e, t, 2162700);
  const i = [], n = /* @__PURE__ */ new Set();
  for (; e.getToken() !== 1074790415; ) {
    const u = e.tokenStart, s = Xu(e, t);
    p(e, t, 21);
    const o = Wu(e, t), a = s.type === "Literal" ? s.value : s.name;
    n.has(a) && e.report(145, `${a}`), n.add(a), i.push(e.finishNode({
      type: "ImportAttribute",
      key: s,
      value: o
    }, u)), e.getToken() !== 1074790415 && p(e, t, 18);
  }
  return p(e, t, 1074790415), i;
}
function Wu(e, t) {
  if (e.getToken() === 134283267)
    return J(e, t);
  e.report(30, N[e.getToken() & 255]);
}
function Xu(e, t) {
  if (e.getToken() === 134283267)
    return J(e, t);
  if (e.getToken() & 143360)
    return V(e, t);
  e.report(30, N[e.getToken() & 255]);
}
function et(e, t) {
  if (e.getToken() === 134283267)
    return e.tokenValue.isWellFormed() || e.report(171), J(e, t);
  if (e.getToken() & 143360)
    return V(e, t);
  e.report(30, N[e.getToken() & 255]);
}
function Mi(e, t) {
  const { tokenRaw: i, tokenValue: n, tokenStart: u } = e;
  m(e, t), e.assignable = 2;
  const s = {
    type: "Literal",
    value: n,
    bigint: String(n)
  };
  return e.options.raw && (s.raw = i), e.finishNode(s, u);
}
function Wt(e, t) {
  e.assignable = 2;
  const { tokenValue: i, tokenRaw: n, tokenStart: u } = e;
  p(e, t, 67174409);
  const s = [tt(e, i, n, u, !0)];
  return e.finishNode({
    type: "TemplateLiteral",
    expressions: [],
    quasis: s
  }, u);
}
function Xt(e, t, i) {
  t = (t | 131072) ^ 131072;
  const { tokenValue: n, tokenRaw: u, tokenStart: s } = e;
  p(e, t & -65 | 32, 67174408);
  const o = [tt(e, n, u, s, !1)], a = [
    z(e, t & -65, i, 0, 1, e.tokenStart)
  ];
  for (e.getToken() !== 1074790415 && e.report(83); e.setToken(Yn(e, t), !0) !== 67174409; ) {
    const { tokenValue: l, tokenRaw: f, tokenStart: c } = e;
    p(e, t & -65 | 32, 67174408), o.push(tt(e, l, f, c, !1)), a.push(z(e, t, i, 0, 1, e.tokenStart)), e.getToken() !== 1074790415 && e.report(83);
  }
  {
    const { tokenValue: l, tokenRaw: f, tokenStart: c } = e;
    p(e, t, 67174409), o.push(tt(e, l, f, c, !0));
  }
  return e.finishNode({
    type: "TemplateLiteral",
    expressions: a,
    quasis: o
  }, s);
}
function tt(e, t, i, n, u) {
  const s = e.finishNode({
    type: "TemplateElement",
    value: {
      cooked: t,
      raw: i
    },
    tail: u
  }, n), o = u ? 1 : 2;
  return e.options.ranges && (s.start += 1, s.range[0] += 1, s.end -= o, s.range[1] -= o), e.options.loc && (s.loc.start.column += 1, s.loc.end.column -= o), s;
}
function $u(e, t, i) {
  const n = e.tokenStart;
  t = (t | 131072) ^ 131072, p(e, t | 32, 14);
  const u = R(e, t, i, 1, 0, e.tokenStart);
  return e.assignable = 1, e.finishNode({
    type: "SpreadElement",
    argument: u
  }, n);
}
function $t(e, t, i, n) {
  m(e, t | 32);
  const u = [];
  if (e.getToken() === 16)
    return m(e, t | 64), u;
  for (; e.getToken() !== 16 && (e.getToken() === 14 ? u.push($u(e, t, i)) : u.push(R(e, t, i, 1, n, e.tokenStart)), !(e.getToken() !== 18 || (m(e, t | 32), e.getToken() === 16))); )
    ;
  return p(e, t | 64, 16), u;
}
function V(e, t) {
  const { tokenValue: i, tokenStart: n } = e, u = i === "await" && (e.getToken() & -2147483648) === 0;
  return m(e, t | (u ? 32 : 0)), e.finishNode({
    type: "Identifier",
    name: i
  }, n);
}
function J(e, t) {
  const { tokenValue: i, tokenRaw: n, tokenStart: u } = e;
  if (e.getToken() === 134283388)
    return Mi(e, t);
  const s = {
    type: "Literal",
    value: i
  };
  return e.options.raw && (s.raw = n), m(e, t), e.assignable = 2, e.finishNode(s, u);
}
function Ku(e, t) {
  const i = e.tokenStart, n = N[e.getToken() & 255], s = {
    type: "Literal",
    value: e.getToken() === 86023 ? null : n === "true"
  };
  return e.options.raw && (s.raw = n), m(e, t), e.assignable = 2, e.finishNode(s, i);
}
function Qu(e, t) {
  const { tokenStart: i } = e;
  return m(e, t), e.assignable = 2, e.finishNode({
    type: "ThisExpression"
  }, i);
}
function Ce(e, t, i, n, u, s, o, a, l) {
  m(e, t | 32);
  const f = s ? jt(e, t, 8391476) : 0;
  let c = null, h, d = i ? e.createScope() : void 0;
  if (e.getToken() === 67174411)
    (o & 1) === 0 && e.report(39, "Function");
  else {
    const w = u & 4 && ((t & 8) === 0 || (t & 2) === 0) ? 4 : 64 | (a ? 1024 : 0) | (f ? 1024 : 0);
    Ii(e, t, e.getToken()), i && (w & 4 ? i.addVarName(t, e.tokenValue, w) : i.addBlockName(t, e.tokenValue, w, u), d = d?.createChildScope(128), o && o & 2 && e.declareUnboundVariable(e.tokenValue)), h = e.getToken(), e.getToken() & 143360 ? c = V(e, t) : e.report(30, N[e.getToken() & 255]);
  }
  t = (t | 28416) ^ 28416 | 65536 | (a ? 2048 : 0) | (f ? 1024 : 0) | (f ? 0 : 262144), d = d?.createChildScope(256);
  const y = Ji(e, (t | 8192) & -524289, d, n, 0, 1), C = 524428, D = mt(e, (t | C) ^ C | 32768 | 4096, d?.createChildScope(64), n, 8, h, d);
  return e.finishNode({
    type: "FunctionDeclaration",
    id: c,
    params: y,
    body: D,
    async: a === 1,
    generator: f === 1
  }, l);
}
function Ui(e, t, i, n, u, s) {
  m(e, t | 32);
  const o = jt(e, t, 8391476), a = (n ? 2048 : 0) | (o ? 1024 : 0);
  let l = null, f, c = e.createScopeIfLexical();
  const h = 552704;
  e.getToken() & 143360 && (Ii(e, (t | h) ^ h | a, e.getToken()), c = c?.createChildScope(128), f = e.getToken(), l = V(e, t)), t = (t | h) ^ h | 65536 | a | (o ? 0 : 262144), c = c?.createChildScope(256);
  const d = Ji(e, (t | 8192) & -524289, c, i, u, 1), y = mt(e, t & -131229 | 32768 | 4096, c?.createChildScope(64), i, 0, f, c);
  return e.assignable = 2, e.finishNode({
    type: "FunctionExpression",
    id: l,
    params: d,
    body: y,
    async: n === 1,
    generator: o === 1
  }, s);
}
function Yu(e, t, i, n, u) {
  const s = ne(e, t, void 0, i, n, u, 0, 2, 0);
  return e.destructible & 64 && e.report(63), e.destructible & 8 && e.report(62), s;
}
function ne(e, t, i, n, u, s, o, a, l) {
  const { tokenStart: f } = e;
  m(e, t | 32);
  const c = [];
  let h = 0;
  for (t = (t | 131072) ^ 131072; e.getToken() !== 20; )
    if (T(e, t | 32, 18))
      c.push(null);
    else {
      let y;
      const { tokenStart: C, tokenValue: D } = e, w = e.getToken();
      if (w & 143360)
        if (y = Z(e, t, n, a, 0, 1, s, 1, C), e.getToken() === 1077936155) {
          e.assignable & 2 && e.report(26), m(e, t | 32), i?.addVarOrBlock(t, D, a, l);
          const E = R(e, t, n, 1, s, e.tokenStart);
          y = e.finishNode(o ? {
            type: "AssignmentPattern",
            left: y,
            right: E
          } : {
            type: "AssignmentExpression",
            operator: "=",
            left: y,
            right: E
          }, C), h |= e.destructible & 256 ? 256 : 0 | e.destructible & 128 ? 128 : 0;
        } else e.getToken() === 18 || e.getToken() === 20 ? (e.assignable & 2 ? h |= 16 : i?.addVarOrBlock(t, D, a, l), h |= e.destructible & 256 ? 256 : 0 | e.destructible & 128 ? 128 : 0) : (h |= a & 1 ? 32 : (a & 2) === 0 ? 16 : 0, y = P(e, t, n, y, s, 0, C), e.getToken() !== 18 && e.getToken() !== 20 ? (e.getToken() !== 1077936155 && (h |= 16), y = O(e, t, n, s, o, C, y)) : e.getToken() !== 1077936155 && (h |= e.assignable & 2 ? 16 : 32));
      else w & 2097152 ? (y = e.getToken() === 2162700 ? ue(e, t, i, n, 0, s, o, a, l) : ne(e, t, i, n, 0, s, o, a, l), h |= e.destructible, e.assignable = e.destructible & 16 ? 2 : 1, e.getToken() === 18 || e.getToken() === 20 ? e.assignable & 2 && (h |= 16) : e.destructible & 8 ? e.report(71) : (y = P(e, t, n, y, s, 0, C), h = e.assignable & 2 ? 16 : 0, e.getToken() !== 18 && e.getToken() !== 20 ? y = O(e, t, n, s, o, C, y) : e.getToken() !== 1077936155 && (h |= e.assignable & 2 ? 16 : 32))) : w === 14 ? (y = Ne(e, t, i, n, 20, a, l, 0, s, o), h |= e.destructible, e.getToken() !== 18 && e.getToken() !== 20 && e.report(30, N[e.getToken() & 255])) : (y = ie(e, t, n, 1, 0, 1), e.getToken() !== 18 && e.getToken() !== 20 ? (y = O(e, t, n, s, o, C, y), (a & 3) === 0 && w === 67174411 && (h |= 16)) : e.assignable & 2 ? h |= 16 : w === 67174411 && (h |= e.assignable & 1 && a & 3 ? 32 : 16));
      if (c.push(y), T(e, t | 32, 18)) {
        if (e.getToken() === 20)
          break;
      } else
        break;
    }
  p(e, t, 20);
  const d = e.finishNode({
    type: o ? "ArrayPattern" : "ArrayExpression",
    elements: c
  }, f);
  return !u && e.getToken() & 4194304 ? ji(e, t, n, h, s, o, f, d) : (e.destructible = h, d);
}
function ji(e, t, i, n, u, s, o, a) {
  e.getToken() !== 1077936155 && e.report(26), m(e, t | 32), n & 16 && e.report(26), s || re(e, a);
  const { tokenStart: l } = e, f = R(e, t, i, 1, u, l);
  return e.destructible = (n | 64 | 8) ^ 72 | (e.destructible & 128 ? 128 : 0) | (e.destructible & 256 ? 256 : 0), e.finishNode(s ? {
    type: "AssignmentPattern",
    left: a,
    right: f
  } : {
    type: "AssignmentExpression",
    left: a,
    operator: "=",
    right: f
  }, o);
}
function Ne(e, t, i, n, u, s, o, a, l, f) {
  const { tokenStart: c } = e;
  m(e, t | 32);
  let h = null, d = 0;
  const { tokenValue: y, tokenStart: C } = e;
  let D = e.getToken();
  if (D & 143360)
    e.assignable = 1, h = Z(e, t, n, s, 0, 1, l, 1, C), D = e.getToken(), h = P(e, t, n, h, l, 0, C), e.getToken() !== 18 && e.getToken() !== u && (e.assignable & 2 && e.getToken() === 1077936155 && e.report(71), d |= 16, h = O(e, t, n, l, f, C, h)), e.assignable & 2 ? d |= 16 : D === u || D === 18 ? i?.addVarOrBlock(t, y, s, o) : d |= 32, d |= e.destructible & 128 ? 128 : 0;
  else if (D === u)
    e.report(41);
  else if (D & 2097152)
    h = e.getToken() === 2162700 ? ue(e, t, i, n, 1, l, f, s, o) : ne(e, t, i, n, 1, l, f, s, o), D = e.getToken(), D !== 1077936155 && D !== u && D !== 18 ? (e.destructible & 8 && e.report(71), h = P(e, t, n, h, l, 0, C), d |= e.assignable & 2 ? 16 : 0, (e.getToken() & 4194304) === 4194304 ? (e.getToken() !== 1077936155 && (d |= 16), h = O(e, t, n, l, f, C, h)) : ((e.getToken() & 8388608) === 8388608 && (h = ye(e, t, n, 1, C, 4, D, h)), T(e, t | 32, 22) && (h = Ee(e, t, n, h, C)), d |= e.assignable & 2 ? 16 : 32)) : d |= u === 1074790415 && D !== 1077936155 ? 16 : e.destructible;
  else {
    d |= 32, h = ie(e, t, n, 1, l, 1);
    const { tokenStart: w } = e, E = e.getToken();
    return E === 1077936155 ? (e.assignable & 2 && e.report(26), h = O(e, t, n, l, f, w, h), d |= 16) : (E === 18 ? d |= 16 : E !== u && (h = O(e, t, n, l, f, w, h)), d |= e.assignable & 1 ? 32 : 16), e.destructible = d, e.getToken() !== u && e.getToken() !== 18 && e.report(161), e.finishNode({
      type: f ? "RestElement" : "SpreadElement",
      argument: h
    }, c);
  }
  if (e.getToken() !== u)
    if (s & 1 && (d |= a ? 16 : 32), T(e, t | 32, 1077936155)) {
      d & 16 && e.report(26), re(e, h);
      const w = R(e, t, n, 1, l, e.tokenStart);
      h = e.finishNode(f ? {
        type: "AssignmentPattern",
        left: h,
        right: w
      } : {
        type: "AssignmentExpression",
        left: h,
        operator: "=",
        right: w
      }, C), d = 16;
    } else
      d |= 16;
  return e.destructible = d, e.finishNode({
    type: f ? "RestElement" : "SpreadElement",
    argument: h
  }, c);
}
function oe(e, t, i, n, u, s) {
  const o = 11264 | ((n & 64) === 0 ? 16896 : 0);
  t = (t | o) ^ o | (n & 8 ? 1024 : 0) | (n & 16 ? 2048 : 0) | (n & 64 ? 16384 : 0) | 256 | 32768 | 65536;
  let a = e.createScopeIfLexical(256);
  const l = Gu(e, (t | 8192) & -524289, a, i, n, 1, u);
  a = a?.createChildScope(64);
  const f = mt(e, t & -655373 | 32768 | 4096, a, i, 0, void 0, a?.parent);
  return e.finishNode({
    type: "FunctionExpression",
    params: l,
    body: f,
    async: (n & 16) > 0,
    generator: (n & 8) > 0,
    id: null
  }, s);
}
function Zu(e, t, i, n, u) {
  const s = ue(e, t, void 0, i, n, u, 0, 2, 0);
  return e.destructible & 64 && e.report(63), e.destructible & 8 && e.report(62), s;
}
function ue(e, t, i, n, u, s, o, a, l) {
  const { tokenStart: f } = e;
  m(e, t);
  const c = [];
  let h = 0, d = 0;
  for (t = (t | 131072) ^ 131072; e.getToken() !== 1074790415; ) {
    const { tokenValue: C, tokenStart: D } = e, w = e.getToken();
    if (w === 14)
      c.push(Ne(e, t, i, n, 1074790415, a, l, 0, s, o));
    else {
      let E = 0, W = null, k;
      if (e.getToken() & 143360 || e.getToken() === -2147483528 || e.getToken() === -2147483527)
        if (e.getToken() === -2147483527 && (h |= 16), W = V(e, t), e.getToken() === 18 || e.getToken() === 1074790415 || e.getToken() === 1077936155)
          if (E |= 4, t & 1 && (w & 537079808) === 537079808 ? h |= 16 : ut(e, t, a, w, 0), i?.addVarOrBlock(t, C, a, l), T(e, t | 32, 1077936155)) {
            h |= 8;
            const S = R(e, t, n, 1, s, e.tokenStart);
            h |= e.destructible & 256 ? 256 : 0 | e.destructible & 128 ? 128 : 0, k = e.finishNode({
              type: "AssignmentPattern",
              left: e.cloneIdentifier(W),
              right: S
            }, D);
          } else
            h |= (w === 209006 ? 128 : 0) | (w === -2147483528 ? 16 : 0), k = e.cloneIdentifier(W);
        else if (T(e, t | 32, 21)) {
          const { tokenStart: S } = e;
          if (C === "__proto__" && d++, e.getToken() & 143360) {
            const Ve = e.getToken(), ke = e.tokenValue;
            k = Z(e, t, n, a, 0, 1, s, 1, S);
            const le = e.getToken();
            k = P(e, t, n, k, s, 0, S), e.getToken() === 18 || e.getToken() === 1074790415 ? le === 1077936155 || le === 1074790415 || le === 18 ? (h |= e.destructible & 128 ? 128 : 0, e.assignable & 2 ? h |= 16 : (Ve & 143360) === 143360 && i?.addVarOrBlock(t, ke, a, l)) : h |= e.assignable & 1 ? 32 : 16 : (e.getToken() & 4194304) === 4194304 ? (e.assignable & 2 ? h |= 16 : le !== 1077936155 ? h |= 32 : i?.addVarOrBlock(t, ke, a, l), k = O(e, t, n, s, o, S, k)) : (h |= 16, (e.getToken() & 8388608) === 8388608 && (k = ye(e, t, n, 1, S, 4, le, k)), T(e, t | 32, 22) && (k = Ee(e, t, n, k, S)));
          } else (e.getToken() & 2097152) === 2097152 ? (k = e.getToken() === 69271571 ? ne(e, t, i, n, 0, s, o, a, l) : ue(e, t, i, n, 0, s, o, a, l), h = e.destructible, e.assignable = h & 16 ? 2 : 1, e.getToken() === 18 || e.getToken() === 1074790415 ? e.assignable & 2 && (h |= 16) : e.destructible & 8 ? e.report(71) : (k = P(e, t, n, k, s, 0, S), h = e.assignable & 2 ? 16 : 0, (e.getToken() & 4194304) === 4194304 ? k = Ze(e, t, n, s, o, S, k) : ((e.getToken() & 8388608) === 8388608 && (k = ye(e, t, n, 1, S, 4, w, k)), T(e, t | 32, 22) && (k = Ee(e, t, n, k, S)), h |= e.assignable & 2 ? 16 : 32))) : (k = ie(e, t, n, 1, s, 1), h |= e.assignable & 1 ? 32 : 16, e.getToken() === 18 || e.getToken() === 1074790415 ? e.assignable & 2 && (h |= 16) : (k = P(e, t, n, k, s, 0, S), h = e.assignable & 2 ? 16 : 0, e.getToken() !== 18 && w !== 1074790415 && (e.getToken() !== 1077936155 && (h |= 16), k = O(e, t, n, s, o, S, k))));
        } else e.getToken() === 69271571 ? (h |= 16, w === 209005 && (E |= 16), E |= (w === 209008 ? 256 : w === 209009 ? 512 : 1) | 2, W = Se(e, t, n, s), h |= e.assignable, k = oe(e, t, n, E, s, e.tokenStart)) : e.getToken() & 143360 ? (h |= 16, w === -2147483528 && e.report(95), w === 209005 ? (e.flags & 1 && e.report(132), E |= 17) : w === 209008 ? E |= 256 : w === 209009 ? E |= 512 : e.report(0), W = V(e, t), k = oe(e, t, n, E, s, e.tokenStart)) : e.getToken() === 67174411 ? (h |= 16, E |= 1, k = oe(e, t, n, E, s, e.tokenStart)) : e.getToken() === 8391476 ? (h |= 16, w === 209008 ? e.report(42) : w === 209009 ? e.report(43) : w !== 209005 && e.report(30, N[52]), m(e, t), E |= 9 | (w === 209005 ? 16 : 0), e.getToken() & 143360 ? W = V(e, t) : (e.getToken() & 134217728) === 134217728 ? W = J(e, t) : e.getToken() === 69271571 ? (E |= 2, W = Se(e, t, n, s), h |= e.assignable) : e.report(30, N[e.getToken() & 255]), k = oe(e, t, n, E, s, e.tokenStart)) : (e.getToken() & 134217728) === 134217728 ? (w === 209005 && (E |= 16), E |= w === 209008 ? 256 : w === 209009 ? 512 : 1, h |= 16, W = J(e, t), k = oe(e, t, n, E, s, e.tokenStart)) : e.report(133);
      else if ((e.getToken() & 134217728) === 134217728)
        if (W = J(e, t), e.getToken() === 21) {
          p(e, t | 32, 21);
          const { tokenStart: S } = e;
          if (C === "__proto__" && d++, e.getToken() & 143360) {
            k = Z(e, t, n, a, 0, 1, s, 1, S);
            const { tokenValue: Ve } = e, ke = e.getToken();
            k = P(e, t, n, k, s, 0, S), e.getToken() === 18 || e.getToken() === 1074790415 ? ke === 1077936155 || ke === 1074790415 || ke === 18 ? e.assignable & 2 ? h |= 16 : i?.addVarOrBlock(t, Ve, a, l) : h |= e.assignable & 1 ? 32 : 16 : e.getToken() === 1077936155 ? (e.assignable & 2 && (h |= 16), k = O(e, t, n, s, o, S, k)) : (h |= 16, k = O(e, t, n, s, o, S, k));
          } else (e.getToken() & 2097152) === 2097152 ? (k = e.getToken() === 69271571 ? ne(e, t, i, n, 0, s, o, a, l) : ue(e, t, i, n, 0, s, o, a, l), h = e.destructible, e.assignable = h & 16 ? 2 : 1, e.getToken() === 18 || e.getToken() === 1074790415 ? e.assignable & 2 && (h |= 16) : (e.destructible & 8) !== 8 && (k = P(e, t, n, k, s, 0, S), h = e.assignable & 2 ? 16 : 0, (e.getToken() & 4194304) === 4194304 ? k = Ze(e, t, n, s, o, S, k) : ((e.getToken() & 8388608) === 8388608 && (k = ye(e, t, n, 1, S, 4, w, k)), T(e, t | 32, 22) && (k = Ee(e, t, n, k, S)), h |= e.assignable & 2 ? 16 : 32))) : (k = ie(e, t, n, 1, 0, 1), h |= e.assignable & 1 ? 32 : 16, e.getToken() === 18 || e.getToken() === 1074790415 ? e.assignable & 2 && (h |= 16) : (k = P(e, t, n, k, s, 0, S), h = e.assignable & 1 ? 0 : 16, e.getToken() !== 18 && e.getToken() !== 1074790415 && (e.getToken() !== 1077936155 && (h |= 16), k = O(e, t, n, s, o, S, k))));
        } else e.getToken() === 67174411 ? (E |= 1, k = oe(e, t, n, E, s, e.tokenStart), h = e.assignable | 16) : e.report(134);
      else if (e.getToken() === 69271571)
        if (W = Se(e, t, n, s), h |= e.destructible & 256 ? 256 : 0, E |= 2, e.getToken() === 21) {
          m(e, t | 32);
          const { tokenStart: S, tokenValue: Ve } = e, ke = e.getToken();
          if (e.getToken() & 143360) {
            k = Z(e, t, n, a, 0, 1, s, 1, S);
            const le = e.getToken();
            k = P(e, t, n, k, s, 0, S), (e.getToken() & 4194304) === 4194304 ? (h |= e.assignable & 2 ? 16 : le === 1077936155 ? 0 : 32, k = Ze(e, t, n, s, o, S, k)) : e.getToken() === 18 || e.getToken() === 1074790415 ? le === 1077936155 || le === 1074790415 || le === 18 ? e.assignable & 2 ? h |= 16 : (ke & 143360) === 143360 && i?.addVarOrBlock(t, Ve, a, l) : h |= e.assignable & 1 ? 32 : 16 : (h |= 16, k = O(e, t, n, s, o, S, k));
          } else (e.getToken() & 2097152) === 2097152 ? (k = e.getToken() === 69271571 ? ne(e, t, i, n, 0, s, o, a, l) : ue(e, t, i, n, 0, s, o, a, l), h = e.destructible, e.assignable = h & 16 ? 2 : 1, e.getToken() === 18 || e.getToken() === 1074790415 ? e.assignable & 2 && (h |= 16) : h & 8 ? e.report(62) : (k = P(e, t, n, k, s, 0, S), h = e.assignable & 2 ? h | 16 : 0, (e.getToken() & 4194304) === 4194304 ? (e.getToken() !== 1077936155 && (h |= 16), k = Ze(e, t, n, s, o, S, k)) : ((e.getToken() & 8388608) === 8388608 && (k = ye(e, t, n, 1, S, 4, w, k)), T(e, t | 32, 22) && (k = Ee(e, t, n, k, S)), h |= e.assignable & 2 ? 16 : 32))) : (k = ie(e, t, n, 1, 0, 1), h |= e.assignable & 1 ? 32 : 16, e.getToken() === 18 || e.getToken() === 1074790415 ? e.assignable & 2 && (h |= 16) : (k = P(e, t, n, k, s, 0, S), h = e.assignable & 1 ? 0 : 16, e.getToken() !== 18 && e.getToken() !== 1074790415 && (e.getToken() !== 1077936155 && (h |= 16), k = O(e, t, n, s, o, S, k))));
        } else e.getToken() === 67174411 ? (E |= 1, k = oe(e, t, n, E, s, e.tokenStart), h = 16) : e.report(44);
      else if (w === 8391476)
        if (p(e, t | 32, 8391476), E |= 8, e.getToken() & 143360) {
          const S = e.getToken();
          if (W = V(e, t), E |= 1, e.getToken() === 67174411)
            h |= 16, k = oe(e, t, n, E, s, e.tokenStart);
          else
            throw new M(e.tokenStart, e.currentLocation, S === 209005 ? 46 : S === 209008 || e.getToken() === 209009 ? 45 : 47, N[S & 255]);
        } else (e.getToken() & 134217728) === 134217728 ? (h |= 16, W = J(e, t), E |= 1, k = oe(e, t, n, E, s, e.tokenStart)) : e.getToken() === 69271571 ? (h |= 16, E |= 3, W = Se(e, t, n, s), k = oe(e, t, n, E, s, e.tokenStart)) : e.report(126);
      else
        e.report(30, N[w & 255]);
      h |= e.destructible & 128 ? 128 : 0, e.destructible = h, c.push(e.finishNode({
        type: "Property",
        key: W,
        value: k,
        kind: E & 768 ? E & 512 ? "set" : "get" : "init",
        computed: (E & 2) > 0,
        method: (E & 1) > 0,
        shorthand: (E & 4) > 0
      }, D));
    }
    if (h |= e.destructible, e.getToken() !== 18)
      break;
    m(e, t);
  }
  p(e, t, 1074790415), d > 1 && (h |= 64);
  const y = e.finishNode({
    type: o ? "ObjectPattern" : "ObjectExpression",
    properties: c
  }, f);
  return !u && e.getToken() & 4194304 ? ji(e, t, n, h, s, o, f, y) : (e.destructible = h, y);
}
function Gu(e, t, i, n, u, s, o) {
  p(e, t, 67174411);
  const a = [];
  if (e.flags = (e.flags | 128) ^ 128, e.getToken() === 16)
    return u & 512 && e.report(37, "Setter", "one", ""), m(e, t), a;
  u & 256 && e.report(37, "Getter", "no", "s"), u & 512 && e.getToken() === 14 && e.report(38), t = (t | 131072) ^ 131072;
  let l = 0, f = 0;
  for (; e.getToken() !== 18; ) {
    let c = null;
    const { tokenStart: h } = e;
    if (e.getToken() & 143360 ? ((t & 1) === 0 && ((e.getToken() & 36864) === 36864 && (e.flags |= 256), (e.getToken() & 537079808) === 537079808 && (e.flags |= 512)), c = Yt(e, t, i, u | 1, 0)) : (e.getToken() === 2162700 ? c = ue(e, t, i, n, 1, o, 1, s, 0) : e.getToken() === 69271571 ? c = ne(e, t, i, n, 1, o, 1, s, 0) : e.getToken() === 14 && (c = Ne(e, t, i, n, 16, s, 0, 0, o, 1)), f = 1, e.destructible & 48 && e.report(50)), e.getToken() === 1077936155) {
      m(e, t | 32), f = 1;
      const d = R(e, t, n, 1, 0, e.tokenStart);
      c = e.finishNode({
        type: "AssignmentPattern",
        left: c,
        right: d
      }, h);
    }
    if (l++, a.push(c), !T(e, t, 18) || e.getToken() === 16)
      break;
  }
  return u & 512 && l !== 1 && e.report(37, "Setter", "one", ""), i?.reportScopeError(), f && (e.flags |= 128), p(e, t, 16), a;
}
function Se(e, t, i, n) {
  m(e, t | 32);
  const u = R(e, (t | 131072) ^ 131072, i, 1, n, e.tokenStart);
  return p(e, t, 20), u;
}
function es(e, t, i, n, u, s, o) {
  e.flags = (e.flags | 128) ^ 128;
  const a = e.tokenStart;
  m(e, t | 32 | 262144);
  const l = e.createScopeIfLexical()?.createChildScope(512);
  if (t = (t | 131072) ^ 131072, T(e, t, 16))
    return ot(e, t, l, i, [], n, 0, o);
  let f = 0;
  e.destructible &= -385;
  let c, h = [], d = 0, y = 0, C = 0;
  const D = e.tokenStart;
  for (e.assignable = 1; e.getToken() !== 16; ) {
    const { tokenStart: w } = e, E = e.getToken();
    if (E & 143360)
      l?.addBlockName(t, e.tokenValue, 1, 0), (E & 537079808) === 537079808 ? y = 1 : (E & 36864) === 36864 && (C = 1), c = Z(e, t, i, u, 0, 1, 1, 1, w), e.getToken() === 16 || e.getToken() === 18 ? e.assignable & 2 && (f |= 16, y = 1) : (e.getToken() === 1077936155 ? y = 1 : f |= 16, c = P(e, t, i, c, 1, 0, w), e.getToken() !== 16 && e.getToken() !== 18 && (c = O(e, t, i, 1, 0, w, c)));
    else if ((E & 2097152) === 2097152)
      c = E === 2162700 ? ue(e, t | 262144, l, i, 0, 1, 0, u, s) : ne(e, t | 262144, l, i, 0, 1, 0, u, s), f |= e.destructible, y = 1, e.assignable = 2, e.getToken() !== 16 && e.getToken() !== 18 && (f & 8 && e.report(122), c = P(e, t, i, c, 0, 0, w), f |= 16, e.getToken() !== 16 && e.getToken() !== 18 && (c = O(e, t, i, 0, 0, w, c)));
    else if (E === 14) {
      c = Ne(e, t, l, i, 16, u, s, 0, 1, 0), e.destructible & 16 && e.report(74), y = 1, d && (e.getToken() === 16 || e.getToken() === 18) && h.push(c), f |= 8;
      break;
    } else {
      if (f |= 16, c = R(e, t, i, 1, 1, w), d && (e.getToken() === 16 || e.getToken() === 18) && h.push(c), e.getToken() === 18 && (d || (d = 1, h = [c])), d) {
        for (; T(e, t | 32, 18); )
          h.push(R(e, t, i, 1, 1, e.tokenStart));
        e.assignable = 2, c = e.finishNode({
          type: "SequenceExpression",
          expressions: h
        }, D);
      }
      return p(e, t, 16), e.destructible = f, e.options.preserveParens ? e.finishNode({
        type: "ParenthesizedExpression",
        expression: c
      }, a) : c;
    }
    if (d && (e.getToken() === 16 || e.getToken() === 18) && h.push(c), !T(e, t | 32, 18))
      break;
    if (d || (d = 1, h = [c]), e.getToken() === 16) {
      f |= 8;
      break;
    }
  }
  return d && (e.assignable = 2, c = e.finishNode({
    type: "SequenceExpression",
    expressions: h
  }, D)), p(e, t, 16), f & 16 && f & 8 && e.report(151), f |= e.destructible & 256 ? 256 : 0 | e.destructible & 128 ? 128 : 0, e.getToken() === 10 ? (f & 48 && e.report(49), t & 2050 && f & 128 && e.report(31), t & 1025 && f & 256 && e.report(32), y && (e.flags |= 128), C && (e.flags |= 256), ot(e, t, l, i, d ? h : [c], n, 0, o)) : (f & 64 && e.report(63), f & 8 && e.report(144), e.destructible = (e.destructible | 256) ^ 256 | f, e.options.preserveParens ? e.finishNode({
    type: "ParenthesizedExpression",
    expression: c
  }, a) : c);
}
function Kt(e, t, i) {
  const { tokenStart: n } = e, { tokenValue: u } = e;
  let s = 0, o = 0;
  (e.getToken() & 537079808) === 537079808 ? s = 1 : (e.getToken() & 36864) === 36864 && (o = 1);
  const a = V(e, t);
  if (e.assignable = 1, e.getToken() === 10) {
    const l = e.options.lexical ? gt(e, t, u) : void 0;
    return s && (e.flags |= 128), o && (e.flags |= 256), $e(e, t, l, i, [a], 0, n);
  }
  return a;
}
function bt(e, t, i, n, u, s, o, a, l) {
  o || e.report(57), s && e.report(51), e.flags &= -129;
  const f = e.options.lexical ? gt(e, t, n) : void 0;
  return $e(e, t, f, i, [u], a, l);
}
function ot(e, t, i, n, u, s, o, a) {
  s || e.report(57);
  for (let l = 0; l < u.length; ++l)
    re(e, u[l]);
  return $e(e, t, i, n, u, o, a);
}
function $e(e, t, i, n, u, s, o) {
  e.flags & 1 && e.report(48), p(e, t | 32, 10);
  const a = 535552;
  t = (t | a) ^ a | (s ? 2048 : 0);
  const l = e.getToken() !== 2162700;
  let f;
  if (i?.reportScopeError(), l)
    e.flags = (e.flags | 512 | 256 | 64 | 4096) ^ 4928, f = R(e, t, n, 1, 0, e.tokenStart);
  else {
    i = i?.createChildScope(64);
    const c = 131084;
    switch (f = mt(e, (t | c) ^ c | 4096, i, n, 16, void 0, void 0), e.getToken()) {
      case 69271571:
        (e.flags & 1) === 0 && e.report(116);
        break;
      case 67108877:
      case 67174409:
      case 22:
        e.report(117);
      case 67174411:
        (e.flags & 1) === 0 && e.report(116), e.flags |= 1024;
        break;
    }
    (e.getToken() & 8388608) === 8388608 && (e.flags & 1) === 0 && e.report(30, N[e.getToken() & 255]), (e.getToken() & 33619968) === 33619968 && e.report(125);
  }
  return e.assignable = 2, e.finishNode({
    type: "ArrowFunctionExpression",
    params: u,
    body: f,
    async: s === 1,
    expression: l,
    generator: !1
  }, o);
}
function Ji(e, t, i, n, u, s) {
  p(e, t, 67174411), e.flags = (e.flags | 128) ^ 128;
  const o = [];
  if (T(e, t, 16))
    return o;
  t = (t | 131072) ^ 131072;
  let a = 0;
  for (; e.getToken() !== 18; ) {
    let l;
    const { tokenStart: f } = e, c = e.getToken();
    if (c & 143360 ? ((t & 1) === 0 && ((c & 36864) === 36864 && (e.flags |= 256), (c & 537079808) === 537079808 && (e.flags |= 512)), l = Yt(e, t, i, s | 1, 0)) : (c === 2162700 ? l = ue(e, t, i, n, 1, u, 1, s, 0) : c === 69271571 ? l = ne(e, t, i, n, 1, u, 1, s, 0) : c === 14 ? l = Ne(e, t, i, n, 16, s, 0, 0, u, 1) : e.report(30, N[c & 255]), a = 1, e.destructible & 48 && e.report(50)), e.getToken() === 1077936155) {
      m(e, t | 32), a = 1;
      const h = R(e, t, n, 1, u, e.tokenStart);
      l = e.finishNode({
        type: "AssignmentPattern",
        left: l,
        right: h
      }, f);
    }
    if (o.push(l), !T(e, t, 18) || e.getToken() === 16)
      break;
  }
  return a && (e.flags |= 128), (a || t & 1) && i?.reportScopeError(), p(e, t, 16), o;
}
function it(e, t, i, n, u, s) {
  const o = e.getToken();
  if (o & 67108864) {
    if (o === 67108877) {
      m(e, t | 262144), e.assignable = 1;
      const a = zt(e, t, i);
      return it(e, t, i, e.finishNode({
        type: "MemberExpression",
        object: n,
        computed: !1,
        property: a,
        optional: !1
      }, s), 0, s);
    } else if (o === 69271571) {
      m(e, t | 32);
      const { tokenStart: a } = e, l = z(e, t, i, u, 1, a);
      return p(e, t, 20), e.assignable = 1, it(e, t, i, e.finishNode({
        type: "MemberExpression",
        object: n,
        computed: !0,
        property: l,
        optional: !1
      }, s), 0, s);
    } else if (o === 67174408 || o === 67174409)
      return e.assignable = 2, it(e, t, i, e.finishNode({
        type: "TaggedTemplateExpression",
        tag: n,
        quasi: e.getToken() === 67174408 ? Xt(e, t | 64, i) : Wt(e, t | 64)
      }, s), 0, s);
  }
  return n;
}
function ts(e, t, i, n) {
  const { tokenStart: u } = e, s = V(e, t | 32), { tokenStart: o } = e;
  if (T(e, t, 67108877)) {
    if (t & 65536 && e.getToken() === 209029)
      return e.assignable = 2, is(e, t, s, u);
    e.report(94);
  }
  e.assignable = 2, (e.getToken() & 16842752) === 16842752 && e.report(65, N[e.getToken() & 255]);
  const a = Z(e, t, i, 2, 1, 0, n, 1, o);
  t = (t | 131072) ^ 131072, e.getToken() === 67108990 && e.report(168);
  const l = it(e, t, i, a, n, o);
  return e.assignable = 2, e.finishNode({
    type: "NewExpression",
    callee: l,
    arguments: e.getToken() === 67174411 ? $t(e, t, i, n) : []
  }, u);
}
function is(e, t, i, n) {
  const u = V(e, t);
  return e.finishNode({
    type: "MetaProperty",
    meta: i,
    property: u
  }, n);
}
function Hi(e, t, i, n, u) {
  return e.getToken() === 209006 && e.report(31), t & 1025 && e.getToken() === 241771 && e.report(32), dt(e, t, e.getToken()), (e.getToken() & 36864) === 36864 && (e.flags |= 256), bt(e, t & -524289 | 2048, i, e.tokenValue, V(e, t), 0, n, 1, u);
}
function Qt(e, t, i, n, u, s, o, a, l) {
  m(e, t | 32);
  const f = e.createScopeIfLexical()?.createChildScope(512);
  if (t = (t | 131072) ^ 131072, T(e, t, 16))
    return e.getToken() === 10 ? (a & 1 && e.report(48), ot(e, t, f, i, [], u, 1, l)) : e.finishNode({
      type: "CallExpression",
      callee: n,
      arguments: [],
      optional: !1
    }, l);
  let c = 0, h = null, d = 0;
  e.destructible = (e.destructible | 256 | 128) ^ 384;
  const y = [];
  for (; e.getToken() !== 16; ) {
    const { tokenStart: C } = e, D = e.getToken();
    if (D & 143360)
      f?.addBlockName(t, e.tokenValue, s, 0), (D & 537079808) === 537079808 ? e.flags |= 512 : (D & 36864) === 36864 && (e.flags |= 256), h = Z(e, t, i, s, 0, 1, 1, 1, C), e.getToken() === 16 || e.getToken() === 18 ? e.assignable & 2 && (c |= 16, d = 1) : (e.getToken() === 1077936155 ? d = 1 : c |= 16, h = P(e, t, i, h, 1, 0, C), e.getToken() !== 16 && e.getToken() !== 18 && (h = O(e, t, i, 1, 0, C, h)));
    else if (D & 2097152)
      h = D === 2162700 ? ue(e, t, f, i, 0, 1, 0, s, o) : ne(e, t, f, i, 0, 1, 0, s, o), c |= e.destructible, d = 1, e.getToken() !== 16 && e.getToken() !== 18 && (c & 8 && e.report(122), h = P(e, t, i, h, 0, 0, C), c |= 16, (e.getToken() & 8388608) === 8388608 && (h = ye(e, t, i, 1, l, 4, D, h)), T(e, t | 32, 22) && (h = Ee(e, t, i, h, l)));
    else if (D === 14)
      h = Ne(e, t, f, i, 16, s, o, 1, 1, 0), c |= (e.getToken() === 16 ? 0 : 16) | e.destructible, d = 1;
    else {
      for (h = R(e, t, i, 1, 0, C), c = e.assignable, y.push(h); T(e, t | 32, 18); )
        y.push(R(e, t, i, 1, 0, C));
      return c |= e.assignable, p(e, t, 16), e.destructible = c | 16, e.assignable = 2, e.finishNode({
        type: "CallExpression",
        callee: n,
        arguments: y,
        optional: !1
      }, l);
    }
    if (y.push(h), !T(e, t | 32, 18))
      break;
  }
  return p(e, t, 16), c |= e.destructible & 256 ? 256 : 0 | e.destructible & 128 ? 128 : 0, e.getToken() === 10 ? (c & 48 && e.report(27), (e.flags & 1 || a & 1) && e.report(48), c & 128 && e.report(31), t & 1025 && c & 256 && e.report(32), d && (e.flags |= 128), ot(e, t | 2048, f, i, y, u, 1, l)) : (c & 64 && e.report(63), c & 8 && e.report(62), e.assignable = 2, e.finishNode({
    type: "CallExpression",
    callee: n,
    arguments: y,
    optional: !1
  }, l));
}
function ns(e, t) {
  const { tokenRaw: i, tokenRegExp: n, tokenValue: u, tokenStart: s } = e;
  m(e, t), e.assignable = 2;
  const o = {
    type: "Literal",
    value: u,
    regex: n
  };
  return e.options.raw && (o.raw = i), e.finishNode(o, s);
}
function _t(e, t, i, n, u) {
  let s, o;
  e.leadingDecorators.decorators.length ? (e.getToken() === 132 && e.report(30, "@"), s = e.leadingDecorators.start, o = [...e.leadingDecorators.decorators], e.leadingDecorators.decorators.length = 0) : (s = e.tokenStart, o = kt(e, t, n)), t = (t | 16384 | 1) ^ 16384, m(e, t);
  let a = null, l = null;
  const { tokenValue: f } = e;
  e.getToken() & 4096 && e.getToken() !== 20565 ? (Bi(e, t, e.getToken()) && e.report(118), (e.getToken() & 537079808) === 537079808 && e.report(119), i && (i.addBlockName(t, f, 32, 0), u && u & 2 && e.declareUnboundVariable(f)), a = V(e, t)) : (u & 1) === 0 && e.report(39, "Class");
  let c = t;
  T(e, t | 32, 20565) ? (l = ie(e, t, n, 0, 0, 0), c |= 512) : c = (c | 512) ^ 512;
  const h = zi(e, c, t, i, n, 2, 8, 0);
  return e.finishNode({
    type: "ClassDeclaration",
    id: a,
    superClass: l,
    body: h,
    ...e.options.next ? { decorators: o } : null
  }, s);
}
function us(e, t, i, n, u) {
  let s = null, o = null;
  const a = kt(e, t, i);
  t = (t | 1 | 16384) ^ 16384, m(e, t), e.getToken() & 4096 && e.getToken() !== 20565 && (Bi(e, t, e.getToken()) && e.report(118), (e.getToken() & 537079808) === 537079808 && e.report(119), s = V(e, t));
  let l = t;
  T(e, t | 32, 20565) ? (o = ie(e, t, i, 0, n, 0), l |= 512) : l = (l | 512) ^ 512;
  const f = zi(e, l, t, void 0, i, 2, 0, n);
  return e.assignable = 2, e.finishNode({
    type: "ClassExpression",
    id: s,
    superClass: o,
    body: f,
    ...e.options.next ? { decorators: a } : null
  }, u);
}
function kt(e, t, i) {
  const n = [];
  if (e.options.next)
    for (; e.getToken() === 132; )
      n.push(ss(e, t, i));
  return n;
}
function ss(e, t, i) {
  const n = e.tokenStart;
  m(e, t | 32);
  const u = e.tokenStart;
  let s = Z(e, t, i, 2, 0, 1, 0, 1, n);
  return s = P(e, t, i, s, 0, 0, u), e.finishNode({
    type: "Decorator",
    expression: s
  }, n);
}
function zi(e, t, i, n, u, s, o, a) {
  const { tokenStart: l } = e, f = e.createPrivateScopeIfLexical(u);
  p(e, t | 32, 2162700);
  const c = 655360;
  t = (t | c) ^ c;
  const h = e.flags & 32;
  e.flags = (e.flags | 32) ^ 32;
  const d = [];
  for (; e.getToken() !== 1074790415; ) {
    const y = e.tokenStart, C = kt(e, t, f);
    if (C.length > 0 && e.tokenValue === "constructor" && e.report(109), e.getToken() === 1074790415 && e.report(108), T(e, t, 1074790417)) {
      C.length > 0 && e.report(120);
      continue;
    }
    d.push(Wi(e, t, n, f, i, s, C, 0, a, C.length > 0 ? y : e.tokenStart));
  }
  return p(e, o & 8 ? t | 32 : t, 1074790415), f?.validatePrivateIdentifierRefs(), e.flags = e.flags & -33 | h, e.finishNode({
    type: "ClassBody",
    body: d
  }, l);
}
function Wi(e, t, i, n, u, s, o, a, l, f) {
  let c = a ? 32 : 0, h = null;
  const d = e.getToken();
  if (d & 176128 || d === -2147483528)
    switch (h = V(e, t), d) {
      case 36970:
        if (!a && e.getToken() !== 67174411 && (e.getToken() & 1048576) !== 1048576 && e.getToken() !== 1077936155)
          return Wi(e, t, i, n, u, s, o, 1, l, f);
        break;
      case 209005:
        if (e.getToken() !== 67174411 && (e.flags & 1) === 0) {
          if ((e.getToken() & 1073741824) === 1073741824)
            return Re(e, t, n, h, c, o, f);
          c |= 16 | (jt(e, t, 8391476) ? 8 : 0);
        }
        break;
      case 209008:
        if (e.getToken() !== 67174411) {
          if ((e.getToken() & 1073741824) === 1073741824)
            return Re(e, t, n, h, c, o, f);
          c |= 256;
        }
        break;
      case 209009:
        if (e.getToken() !== 67174411) {
          if ((e.getToken() & 1073741824) === 1073741824)
            return Re(e, t, n, h, c, o, f);
          c |= 512;
        }
        break;
      case 12402:
        if (e.getToken() !== 67174411 && (e.flags & 1) === 0) {
          if ((e.getToken() & 1073741824) === 1073741824)
            return Re(e, t, n, h, c, o, f);
          e.options.next && (c |= 1024);
        }
        break;
    }
  else if (d === 69271571)
    c |= 2, h = Se(e, u, n, l);
  else if ((d & 134217728) === 134217728)
    h = J(e, t);
  else if (d === 8391476)
    c |= 8, m(e, t);
  else if (e.getToken() === 130)
    c |= 8192, h = at(e, t | 16, n, 768);
  else if ((e.getToken() & 1073741824) === 1073741824)
    c |= 128;
  else {
    if (a && d === 2162700)
      return Bu(e, t | 16, i, n, f);
    d === -2147483527 ? (h = V(e, t), e.getToken() !== 67174411 && e.report(30, N[e.getToken() & 255])) : e.report(30, N[e.getToken() & 255]);
  }
  if (c & 1816 && (e.getToken() & 143360 || e.getToken() === -2147483528 || e.getToken() === -2147483527 ? h = V(e, t) : (e.getToken() & 134217728) === 134217728 ? h = J(e, t) : e.getToken() === 69271571 ? (c |= 2, h = Se(e, t, n, 0)) : e.getToken() === 130 ? (c |= 8192, h = at(e, t, n, c)) : e.report(135)), (c & 2) === 0 && (e.tokenValue === "constructor" ? ((e.getToken() & 1073741824) === 1073741824 ? e.report(129) : (c & 32) === 0 && e.getToken() === 67174411 && (c & 920 ? e.report(53, "accessor") : (t & 512) === 0 && (e.flags & 32 ? e.report(54) : e.flags |= 32)), c |= 64) : (c & 8192) === 0 && c & 32 && e.tokenValue === "prototype" && e.report(52)), c & 1024 || e.getToken() !== 67174411 && (c & 768) === 0)
    return Re(e, t, n, h, c, o, f);
  const y = oe(e, t | 16, n, c, l, e.tokenStart);
  return e.finishNode({
    type: "MethodDefinition",
    kind: (c & 32) === 0 && c & 64 ? "constructor" : c & 256 ? "get" : c & 512 ? "set" : "method",
    static: (c & 32) > 0,
    computed: (c & 2) > 0,
    key: h,
    value: y,
    ...e.options.next ? { decorators: o } : null
  }, f);
}
function at(e, t, i, n) {
  const { tokenStart: u } = e;
  m(e, t);
  const { tokenValue: s } = e;
  return s === "constructor" && e.report(128), e.options.lexical && (i || e.report(4, s), n ? i.addPrivateIdentifier(s, n) : i.addPrivateIdentifierRef(s)), m(e, t), e.finishNode({
    type: "PrivateIdentifier",
    name: s
  }, u);
}
function Re(e, t, i, n, u, s, o) {
  let a = null;
  if (u & 8 && e.report(0), e.getToken() === 1077936155) {
    m(e, t | 32);
    const { tokenStart: l } = e;
    e.getToken() === 537079927 && e.report(119);
    const f = 11264 | ((u & 64) === 0 ? 16896 : 0);
    t = (t | f) ^ f | (u & 8 ? 1024 : 0) | (u & 16 ? 2048 : 0) | (u & 64 ? 16384 : 0) | 256 | 65536, a = Z(e, t | 16, i, 2, 0, 1, 0, 1, l), ((e.getToken() & 1073741824) !== 1073741824 || (e.getToken() & 4194304) === 4194304) && (a = P(e, t | 16, i, a, 0, 0, l), a = O(e, t | 16, i, 0, 0, l, a));
  }
  return X(e, t), e.finishNode({
    type: u & 1024 ? "AccessorProperty" : "PropertyDefinition",
    key: n,
    value: a,
    static: (u & 32) > 0,
    computed: (u & 2) > 0,
    ...e.options.next ? { decorators: s } : null
  }, o);
}
function Xi(e, t, i, n, u, s) {
  if (e.getToken() & 143360 || (t & 1) === 0 && e.getToken() === -2147483527)
    return Yt(e, t, i, u, s);
  (e.getToken() & 2097152) !== 2097152 && e.report(30, N[e.getToken() & 255]);
  const o = e.getToken() === 69271571 ? ne(e, t, i, n, 1, 0, 1, u, s) : ue(e, t, i, n, 1, 0, 1, u, s);
  return e.destructible & 16 && e.report(50), e.destructible & 32 && e.report(50), o;
}
function Yt(e, t, i, n, u) {
  const s = e.getToken();
  t & 1 && ((s & 537079808) === 537079808 ? e.report(119) : ((s & 36864) === 36864 || s === -2147483527) && e.report(118)), (s & 20480) === 20480 && e.report(102), s === 241771 && (t & 1024 && e.report(32), t & 2 && e.report(111)), (s & 255) === 73 && n & 24 && e.report(100), s === 209006 && (t & 2048 && e.report(176), t & 2 && e.report(110));
  const { tokenValue: o, tokenStart: a } = e;
  return m(e, t), i?.addVarOrBlock(t, o, n, u), e.finishNode({
    type: "Identifier",
    name: o
  }, a);
}
function pt(e, t, i, n, u) {
  if (n || p(e, t, 8456256), e.getToken() === 8390721) {
    const l = os(e, u), [f, c] = cs(e, t, i, n);
    return e.finishNode({
      type: "JSXFragment",
      openingFragment: l,
      children: f,
      closingFragment: c
    }, u);
  }
  e.getToken() === 8457014 && e.report(30, N[e.getToken() & 255]);
  let s = null, o = [];
  const a = ds(e, t, i, n, u);
  if (!a.selfClosing) {
    [o, s] = ls(e, t, i, n);
    const l = st(s.name);
    st(a.name) !== l && e.report(155, l);
  }
  return e.finishNode({
    type: "JSXElement",
    children: o,
    openingElement: a,
    closingElement: s
  }, u);
}
function os(e, t) {
  return ze(e), e.finishNode({
    type: "JSXOpeningFragment"
  }, t);
}
function as(e, t, i, n) {
  p(e, t, 8457014);
  const u = Ki(e, t);
  return e.getToken() !== 8390721 && e.report(25, N[65]), i ? ze(e) : m(e, t), e.finishNode({
    type: "JSXClosingElement",
    name: u
  }, n);
}
function rs(e, t, i, n) {
  return p(e, t, 8457014), e.getToken() !== 8390721 && e.report(25, N[65]), i ? ze(e) : m(e, t), e.finishNode({
    type: "JSXClosingFragment"
  }, n);
}
function ls(e, t, i, n) {
  const u = [];
  for (; ; ) {
    const s = fs(e, t, i, n);
    if (s.type === "JSXClosingElement")
      return [u, s];
    u.push(s);
  }
}
function cs(e, t, i, n) {
  const u = [];
  for (; ; ) {
    const s = hs(e, t, i, n);
    if (s.type === "JSXClosingFragment")
      return [u, s];
    u.push(s);
  }
}
function fs(e, t, i, n) {
  if (e.getToken() === 137)
    return $i(e, t);
  if (e.getToken() === 2162700)
    return Zt(e, t, i, 1, 0);
  if (e.getToken() === 8456256) {
    const { tokenStart: u } = e;
    return m(e, t), e.getToken() === 8457014 ? as(e, t, n, u) : pt(e, t, i, 1, u);
  }
  e.report(0);
}
function hs(e, t, i, n) {
  if (e.getToken() === 137)
    return $i(e, t);
  if (e.getToken() === 2162700)
    return Zt(e, t, i, 1, 0);
  if (e.getToken() === 8456256) {
    const { tokenStart: u } = e;
    return m(e, t), e.getToken() === 8457014 ? rs(e, t, n, u) : pt(e, t, i, 1, u);
  }
  e.report(0);
}
function $i(e, t) {
  const i = e.tokenStart;
  m(e, t);
  const n = {
    type: "JSXText",
    value: e.tokenValue
  };
  return e.options.raw && (n.raw = e.tokenRaw), e.finishNode(n, i);
}
function ds(e, t, i, n, u) {
  (e.getToken() & 143360) !== 143360 && (e.getToken() & 4096) !== 4096 && e.report(0);
  const s = Ki(e, t), o = ms(e, t, i), a = e.getToken() === 8457014;
  return a && p(e, t, 8457014), e.getToken() !== 8390721 && e.report(25, N[65]), n || !a ? ze(e) : m(e, t), e.finishNode({
    type: "JSXOpeningElement",
    name: s,
    attributes: o,
    selfClosing: a
  }, u);
}
function Ki(e, t) {
  const { tokenStart: i } = e;
  It(e);
  let n = yt(e, t);
  if (e.getToken() === 21)
    return Qi(e, t, n, i);
  for (; T(e, t, 67108877); )
    It(e), n = gs(e, t, n, i);
  return n;
}
function gs(e, t, i, n) {
  const u = yt(e, t);
  return e.finishNode({
    type: "JSXMemberExpression",
    object: i,
    property: u
  }, n);
}
function ms(e, t, i) {
  const n = [];
  for (; e.getToken() !== 8457014 && e.getToken() !== 8390721 && e.getToken() !== 1048576; )
    n.push(ks(e, t, i));
  return n;
}
function bs(e, t, i) {
  const n = e.tokenStart;
  m(e, t), p(e, t, 14);
  const u = R(e, t, i, 1, 0, e.tokenStart);
  return p(e, t, 1074790415), e.finishNode({
    type: "JSXSpreadAttribute",
    argument: u
  }, n);
}
function ks(e, t, i) {
  const { tokenStart: n } = e;
  if (e.getToken() === 2162700)
    return bs(e, t, i);
  It(e);
  let u = null, s = yt(e, t);
  if (e.getToken() === 21 && (s = Qi(e, t, s, n)), e.getToken() === 1077936155)
    switch (su(e, t)) {
      case 134283267:
        u = J(e, t);
        break;
      case 8456256:
        u = pt(e, t, i, 0, e.tokenStart);
        break;
      case 2162700:
        u = Zt(e, t, i, 0, 1);
        break;
      default:
        e.report(154);
    }
  return e.finishNode({
    type: "JSXAttribute",
    value: u,
    name: s
  }, n);
}
function Qi(e, t, i, n) {
  p(e, t, 21);
  const u = yt(e, t);
  return e.finishNode({
    type: "JSXNamespacedName",
    namespace: i,
    name: u
  }, n);
}
function Zt(e, t, i, n, u) {
  const { tokenStart: s } = e;
  m(e, t | 32);
  const { tokenStart: o } = e;
  if (e.getToken() === 14)
    return ps(e, t, i, s);
  let a = null;
  return e.getToken() === 1074790415 ? (u && e.report(157), a = ys(e, {
    index: e.startIndex,
    line: e.startLine,
    column: e.startColumn
  })) : a = R(e, t, i, 1, 0, o), e.getToken() !== 1074790415 && e.report(25, N[15]), n ? ze(e) : m(e, t), e.finishNode({
    type: "JSXExpressionContainer",
    expression: a
  }, s);
}
function ps(e, t, i, n) {
  p(e, t, 14);
  const u = R(e, t, i, 1, 0, e.tokenStart);
  return p(e, t, 1074790415), e.finishNode({
    type: "JSXSpreadChild",
    expression: u
  }, n);
}
function ys(e, t) {
  return e.finishNode({
    type: "JSXEmptyExpression"
  }, t, e.tokenStart);
}
function yt(e, t) {
  const i = e.tokenStart;
  e.getToken() & 143360 || e.report(30, N[e.getToken() & 255]);
  const { tokenValue: n } = e;
  return m(e, t), e.finishNode({
    type: "JSXIdentifier",
    name: n
  }, i);
}
function Cs(e, t) {
  return du(e, { ...t, sourceType: "script" });
}
var As = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], Yi = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], vs = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", Zi = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", xt = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, Tt = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", ws = {
  5: Tt,
  "5module": Tt + " export import",
  6: Tt + " const class extends export import super"
}, Es = /^in(stanceof)?$/, Ds = new RegExp("[" + Zi + "]"), xs = new RegExp("[" + Zi + vs + "]");
function Ft(e, t) {
  for (var i = 65536, n = 0; n < t.length; n += 2) {
    if (i += t[n], i > e)
      return !1;
    if (i += t[n + 1], i >= e)
      return !0;
  }
  return !1;
}
function ce(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Ds.test(String.fromCharCode(e)) : t === !1 ? !1 : Ft(e, Yi);
}
function ve(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && xs.test(String.fromCharCode(e)) : t === !1 ? !1 : Ft(e, Yi) || Ft(e, As);
}
var L = function(t, i) {
  i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function G(e, t) {
  return new L(e, { beforeExpr: !0, binop: t });
}
var ee = { beforeExpr: !0 }, K = { startsExpr: !0 }, Gt = {};
function F(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, Gt[e] = new L(e, t);
}
var r = {
  num: new L("num", K),
  regexp: new L("regexp", K),
  string: new L("string", K),
  name: new L("name", K),
  privateId: new L("privateId", K),
  eof: new L("eof"),
  // Punctuation token types.
  bracketL: new L("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new L("]"),
  braceL: new L("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new L("}"),
  parenL: new L("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new L(")"),
  comma: new L(",", ee),
  semi: new L(";", ee),
  colon: new L(":", ee),
  dot: new L("."),
  question: new L("?", ee),
  questionDot: new L("?."),
  arrow: new L("=>", ee),
  template: new L("template"),
  invalidTemplate: new L("invalidTemplate"),
  ellipsis: new L("...", ee),
  backQuote: new L("`", K),
  dollarBraceL: new L("${", { beforeExpr: !0, startsExpr: !0 }),
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
  eq: new L("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new L("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new L("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new L("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: G("||", 1),
  logicalAND: G("&&", 2),
  bitwiseOR: G("|", 3),
  bitwiseXOR: G("^", 4),
  bitwiseAND: G("&", 5),
  equality: G("==/!=/===/!==", 6),
  relational: G("</>/<=/>=", 7),
  bitShift: G("<</>>/>>>", 8),
  plusMin: new L("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: G("%", 10),
  star: G("*", 10),
  slash: G("/", 10),
  starstar: new L("**", { beforeExpr: !0 }),
  coalesce: G("??", 1),
  // Keyword token types.
  _break: F("break"),
  _case: F("case", ee),
  _catch: F("catch"),
  _continue: F("continue"),
  _debugger: F("debugger"),
  _default: F("default", ee),
  _do: F("do", { isLoop: !0, beforeExpr: !0 }),
  _else: F("else", ee),
  _finally: F("finally"),
  _for: F("for", { isLoop: !0 }),
  _function: F("function", K),
  _if: F("if"),
  _return: F("return", ee),
  _switch: F("switch"),
  _throw: F("throw", ee),
  _try: F("try"),
  _var: F("var"),
  _const: F("const"),
  _while: F("while", { isLoop: !0 }),
  _with: F("with"),
  _new: F("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: F("this", K),
  _super: F("super", K),
  _class: F("class", K),
  _extends: F("extends", ee),
  _export: F("export"),
  _import: F("import", K),
  _null: F("null", K),
  _true: F("true", K),
  _false: F("false", K),
  _in: F("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: F("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: F("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: F("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: F("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, Q = /\r\n?|\n|\u2028|\u2029/, Ts = new RegExp(Q.source, "g");
function _e(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Gi(e, t, i) {
  i === void 0 && (i = e.length);
  for (var n = t; n < i; n++) {
    var u = e.charCodeAt(n);
    if (_e(u))
      return n < i - 1 && u === 13 && e.charCodeAt(n + 1) === 10 ? n + 2 : n + 1;
  }
  return -1;
}
var en = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, H = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, tn = Object.prototype, Ss = tn.hasOwnProperty, Is = tn.toString, Fe = Object.hasOwn || (function(e, t) {
  return Ss.call(e, t);
}), di = Array.isArray || (function(e) {
  return Is.call(e) === "[object Array]";
}), gi = /* @__PURE__ */ Object.create(null);
function Ae(e) {
  return gi[e] || (gi[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function ge(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var Bs = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, je = function(t, i) {
  this.line = t, this.column = i;
};
je.prototype.offset = function(t) {
  return new je(this.line, this.column + t);
};
var Ct = function(t, i, n) {
  this.start = i, this.end = n, t.sourceFile !== null && (this.source = t.sourceFile);
};
function nn(e, t) {
  for (var i = 1, n = 0; ; ) {
    var u = Gi(e, n, t);
    if (u < 0)
      return new je(i, t - n);
    ++i, n = u;
  }
}
var Lt = {
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
}, mi = !1;
function Ns(e) {
  var t = {};
  for (var i in Lt)
    t[i] = e && Fe(e, i) ? e[i] : Lt[i];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!mi && typeof console == "object" && console.warn && (mi = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), di(t.onToken)) {
    var n = t.onToken;
    t.onToken = function(u) {
      return n.push(u);
    };
  }
  return di(t.onComment) && (t.onComment = _s(t, t.onComment)), t;
}
function _s(e, t) {
  return function(i, n, u, s, o, a) {
    var l = {
      type: i ? "Block" : "Line",
      value: n,
      start: u,
      end: s
    };
    e.locations && (l.loc = new Ct(this, o, a)), e.ranges && (l.range = [u, s]), t.push(l);
  };
}
var Je = 1, Le = 2, ei = 4, un = 8, ti = 16, sn = 32, At = 64, on = 128, Te = 256, Ke = 512, vt = Je | Le | Te;
function ii(e, t) {
  return Le | (e ? ei : 0) | (t ? un : 0);
}
var rt = 0, ni = 1, be = 2, an = 3, rn = 4, ln = 5, j = function(t, i, n) {
  this.options = t = Ns(t), this.sourceFile = t.sourceFile, this.keywords = Ae(ws[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var u = "";
  t.allowReserved !== !0 && (u = xt[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (u += " await")), this.reservedWords = Ae(u);
  var s = (u ? u + " " : "") + xt.strict;
  this.reservedWordsStrict = Ae(s), this.reservedWordsStrictBind = Ae(s + " " + xt.strictBind), this.input = String(i), this.containsEsc = !1, n ? (this.pos = n, this.lineStart = this.input.lastIndexOf(`
`, n - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(Q).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = r.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(Je), this.regexpState = null, this.privateNameStack = [];
}, fe = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
j.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
fe.inFunction.get = function() {
  return (this.currentVarScope().flags & Le) > 0;
};
fe.inGenerator.get = function() {
  return (this.currentVarScope().flags & un) > 0;
};
fe.inAsync.get = function() {
  return (this.currentVarScope().flags & ei) > 0;
};
fe.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & (Te | Ke))
      return !1;
    if (i & Le)
      return (i & ei) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
fe.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags;
  return (t & At) > 0 || this.options.allowSuperOutsideMethod;
};
fe.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & on) > 0;
};
fe.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
fe.allowNewDotTarget.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e], i = t.flags;
    if (i & (Te | Ke) || i & Le && !(i & ti))
      return !0;
  }
  return !1;
};
fe.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & Te) > 0;
};
j.extend = function() {
  for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
  for (var n = this, u = 0; u < t.length; u++)
    n = t[u](n);
  return n;
};
j.parse = function(t, i) {
  return new this(i, t).parse();
};
j.parseExpressionAt = function(t, i, n) {
  var u = new this(n, t, i);
  return u.nextToken(), u.parseExpression();
};
j.tokenizer = function(t, i) {
  return new this(i, t);
};
Object.defineProperties(j.prototype, fe);
var $ = j.prototype, Fs = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
$.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    H.lastIndex = e, e += H.exec(this.input)[0].length;
    var t = Fs.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      H.lastIndex = e + t[0].length;
      var i = H.exec(this.input), n = i.index + i[0].length, u = this.input.charAt(n);
      return u === ";" || u === "}" || Q.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(u) || u === "!" && this.input.charAt(n + 1) === "=");
    }
    e += t[0].length, H.lastIndex = e, e += H.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
$.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
$.isContextual = function(e) {
  return this.type === r.name && this.value === e && !this.containsEsc;
};
$.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
$.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
$.canInsertSemicolon = function() {
  return this.type === r.eof || this.type === r.braceR || Q.test(this.input.slice(this.lastTokEnd, this.start));
};
$.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
$.semicolon = function() {
  !this.eat(r.semi) && !this.insertSemicolon() && this.unexpected();
};
$.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
$.expect = function(e) {
  this.eat(e) || this.unexpected();
};
$.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var wt = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
$.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
$.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var i = e.shorthandAssign, n = e.doubleProto;
  if (!t)
    return i >= 0 || n >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), n >= 0 && this.raiseRecoverable(n, "Redefinition of __proto__ property");
};
$.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
$.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var v = j.prototype;
v.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== r.eof; ) {
    var i = this.parseStatement(null, !0, t);
    e.body.push(i);
  }
  if (this.inModule)
    for (var n = 0, u = Object.keys(this.undefinedExports); n < u.length; n += 1) {
      var s = u[n];
      this.raiseRecoverable(this.undefinedExports[s].start, "Export '" + s + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var ui = { kind: "loop" }, Ls = { kind: "switch" };
v.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  H.lastIndex = this.pos;
  var t = H.exec(this.input), i = this.pos + t[0].length, n = this.input.charCodeAt(i);
  if (n === 91 || n === 92)
    return !0;
  if (e)
    return !1;
  if (n === 123 || n > 55295 && n < 56320)
    return !0;
  if (ce(n, !0)) {
    for (var u = i + 1; ve(n = this.input.charCodeAt(u), !0); )
      ++u;
    if (n === 92 || n > 55295 && n < 56320)
      return !0;
    var s = this.input.slice(i, u);
    if (!Es.test(s))
      return !0;
  }
  return !1;
};
v.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  H.lastIndex = this.pos;
  var e = H.exec(this.input), t = this.pos + e[0].length, i;
  return !Q.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(ve(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
};
v.isUsingKeyword = function(e, t) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using"))
    return !1;
  H.lastIndex = this.pos;
  var i = H.exec(this.input), n = this.pos + i[0].length;
  if (Q.test(this.input.slice(this.pos, n)))
    return !1;
  if (e) {
    var u = n + 5, s;
    if (this.input.slice(n, u) !== "using" || u === this.input.length || ve(s = this.input.charCodeAt(u)) || s > 55295 && s < 56320)
      return !1;
    H.lastIndex = u;
    var o = H.exec(this.input);
    if (o && Q.test(this.input.slice(u, u + o[0].length)))
      return !1;
  }
  if (t) {
    var a = n + 2, l;
    if (this.input.slice(n, a) === "of" && (a === this.input.length || !ve(l = this.input.charCodeAt(a)) && !(l > 55295 && l < 56320)))
      return !1;
  }
  var f = this.input.charCodeAt(n);
  return ce(f, !0) || f === 92;
};
v.isAwaitUsing = function(e) {
  return this.isUsingKeyword(!0, e);
};
v.isUsing = function(e) {
  return this.isUsingKeyword(!1, e);
};
v.parseStatement = function(e, t, i) {
  var n = this.type, u = this.startNode(), s;
  switch (this.isLet(e) && (n = r._var, s = "let"), n) {
    case r._break:
    case r._continue:
      return this.parseBreakContinueStatement(u, n.keyword);
    case r._debugger:
      return this.parseDebuggerStatement(u);
    case r._do:
      return this.parseDoStatement(u);
    case r._for:
      return this.parseForStatement(u);
    case r._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(u, !1, !e);
    case r._class:
      return e && this.unexpected(), this.parseClass(u, !0);
    case r._if:
      return this.parseIfStatement(u);
    case r._return:
      return this.parseReturnStatement(u);
    case r._switch:
      return this.parseSwitchStatement(u);
    case r._throw:
      return this.parseThrowStatement(u);
    case r._try:
      return this.parseTryStatement(u);
    case r._const:
    case r._var:
      return s = s || this.value, e && s !== "var" && this.unexpected(), this.parseVarStatement(u, s);
    case r._while:
      return this.parseWhileStatement(u);
    case r._with:
      return this.parseWithStatement(u);
    case r.braceL:
      return this.parseBlock(!0, u);
    case r.semi:
      return this.parseEmptyStatement(u);
    case r._export:
    case r._import:
      if (this.options.ecmaVersion > 10 && n === r._import) {
        H.lastIndex = this.pos;
        var o = H.exec(this.input), a = this.pos + o[0].length, l = this.input.charCodeAt(a);
        if (l === 40 || l === 46)
          return this.parseExpressionStatement(u, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n === r._import ? this.parseImport(u) : this.parseExport(u, i);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(u, !0, !e);
      var f = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (f)
        return t && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), f === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(u, !1, f), this.semicolon(), this.finishNode(u, "VariableDeclaration");
      var c = this.value, h = this.parseExpression();
      return n === r.name && h.type === "Identifier" && this.eat(r.colon) ? this.parseLabeledStatement(u, c, h, e) : this.parseExpressionStatement(u, h);
  }
};
v.parseBreakContinueStatement = function(e, t) {
  var i = t === "break";
  this.next(), this.eat(r.semi) || this.insertSemicolon() ? e.label = null : this.type !== r.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var n = 0; n < this.labels.length; ++n) {
    var u = this.labels[n];
    if ((e.label == null || u.name === e.label.name) && (u.kind != null && (i || u.kind === "loop") || e.label && i))
      break;
  }
  return n === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
};
v.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
v.parseDoStatement = function(e) {
  return this.next(), this.labels.push(ui), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(r._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(r.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
v.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(ui), this.enterScope(0), this.expect(r.parenL), this.type === r.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var i = this.isLet();
  if (this.type === r._var || this.type === r._const || i) {
    var n = this.startNode(), u = i ? "let" : this.value;
    return this.next(), this.parseVar(n, !0, u), this.finishNode(n, "VariableDeclaration"), this.parseForAfterInit(e, n, t);
  }
  var s = this.isContextual("let"), o = !1, a = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (a) {
    var l = this.startNode();
    return this.next(), a === "await using" && this.next(), this.parseVar(l, !0, a), this.finishNode(l, "VariableDeclaration"), this.parseForAfterInit(e, l, t);
  }
  var f = this.containsEsc, c = new wt(), h = this.start, d = t > -1 ? this.parseExprSubscripts(c, "await") : this.parseExpression(!0, c);
  return this.type === r._in || (o = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === r._in && this.unexpected(t), e.await = !0) : o && this.options.ecmaVersion >= 8 && (d.start === h && !f && d.type === "Identifier" && d.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), s && o && this.raise(d.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(d, !1, c), this.checkLValPattern(d), this.parseForIn(e, d)) : (this.checkExpressionErrors(c, !0), t > -1 && this.unexpected(t), this.parseFor(e, d));
};
v.parseForAfterInit = function(e, t, i) {
  return (this.type === r._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === r._in ? i > -1 && this.unexpected(i) : e.await = i > -1), this.parseForIn(e, t)) : (i > -1 && this.unexpected(i), this.parseFor(e, t));
};
v.parseFunctionStatement = function(e, t, i) {
  return this.next(), this.parseFunction(e, qe | (i ? 0 : Pt), !1, t);
};
v.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(r._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
v.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(r.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
v.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(r.braceL), this.labels.push(Ls), this.enterScope(0);
  for (var t, i = !1; this.type !== r.braceR; )
    if (this.type === r._case || this.type === r._default) {
      var n = this.type === r._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), n ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(r.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
v.parseThrowStatement = function(e) {
  return this.next(), Q.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var Ps = [];
v.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? sn : 0), this.checkLValPattern(e, t ? rn : be), this.expect(r.parenR), e;
};
v.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === r._catch) {
    var t = this.startNode();
    this.next(), this.eat(r.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(r._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
v.parseVarStatement = function(e, t, i) {
  return this.next(), this.parseVar(e, !1, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
v.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(ui), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
v.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
v.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
v.parseLabeledStatement = function(e, t, i, n) {
  for (var u = 0, s = this.labels; u < s.length; u += 1) {
    var o = s[u];
    o.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
  }
  for (var a = this.type.isLoop ? "loop" : this.type === r._switch ? "switch" : null, l = this.labels.length - 1; l >= 0; l--) {
    var f = this.labels[l];
    if (f.statementStart === e.start)
      f.statementStart = this.start, f.kind = a;
    else
      break;
  }
  return this.labels.push({ name: t, kind: a, statementStart: this.start }), e.body = this.parseStatement(n ? n.indexOf("label") === -1 ? n + "label" : n : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
};
v.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
v.parseBlock = function(e, t, i) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(r.braceL), e && this.enterScope(0); this.type !== r.braceR; ) {
    var n = this.parseStatement(null);
    t.body.push(n);
  }
  return i && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
v.parseFor = function(e, t) {
  return e.init = t, this.expect(r.semi), e.test = this.type === r.semi ? null : this.parseExpression(), this.expect(r.semi), e.update = this.type === r.parenR ? null : this.parseExpression(), this.expect(r.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
v.parseForIn = function(e, t) {
  var i = this.type === r._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(
    t.start,
    (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(r.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
};
v.parseVar = function(e, t, i, n) {
  for (e.declarations = [], e.kind = i; ; ) {
    var u = this.startNode();
    if (this.parseVarId(u, i), this.eat(r.eq) ? u.init = this.parseMaybeAssign(t) : !n && i === "const" && !(this.type === r._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !n && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== r._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration") : !n && u.id.type !== "Identifier" && !(t && (this.type === r._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : u.init = null, e.declarations.push(this.finishNode(u, "VariableDeclarator")), !this.eat(r.comma))
      break;
  }
  return e;
};
v.parseVarId = function(e, t) {
  e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? ni : be, !1);
};
var qe = 1, Pt = 2, cn = 4;
v.parseFunction = function(e, t, i, n, u) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !n) && (this.type === r.star && t & Pt && this.unexpected(), e.generator = this.eat(r.star)), this.options.ecmaVersion >= 8 && (e.async = !!n), t & qe && (e.id = t & cn && this.type !== r.name ? null : this.parseIdent(), e.id && !(t & Pt) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? ni : be : an));
  var s = this.yieldPos, o = this.awaitPos, a = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(ii(e.async, e.generator)), t & qe || (e.id = this.type === r.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1, u), this.yieldPos = s, this.awaitPos = o, this.awaitIdentPos = a, this.finishNode(e, t & qe ? "FunctionDeclaration" : "FunctionExpression");
};
v.parseFunctionParams = function(e) {
  this.expect(r.parenL), e.params = this.parseBindingList(r.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
v.parseClass = function(e, t) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var n = this.enterClassBody(), u = this.startNode(), s = !1;
  for (u.body = [], this.expect(r.braceL); this.type !== r.braceR; ) {
    var o = this.parseClassElement(e.superClass !== null);
    o && (u.body.push(o), o.type === "MethodDefinition" && o.kind === "constructor" ? (s && this.raiseRecoverable(o.start, "Duplicate constructor in the same class"), s = !0) : o.key && o.key.type === "PrivateIdentifier" && Vs(n, o) && this.raiseRecoverable(o.key.start, "Identifier '#" + o.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), e.body = this.finishNode(u, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
v.parseClassElement = function(e) {
  if (this.eat(r.semi))
    return null;
  var t = this.options.ecmaVersion, i = this.startNode(), n = "", u = !1, s = !1, o = "method", a = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(r.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === r.star ? a = !0 : n = "static";
  }
  if (i.static = a, !n && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === r.star) && !this.canInsertSemicolon() ? s = !0 : n = "async"), !n && (t >= 9 || !s) && this.eat(r.star) && (u = !0), !n && !s && !u) {
    var l = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? o = l : n = l);
  }
  if (n ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = n, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === r.parenL || o !== "method" || u || s) {
    var f = !i.static && lt(i, "constructor"), c = f && e;
    f && o !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = f ? "constructor" : o, this.parseClassMethod(i, u, s, c);
  } else
    this.parseClassField(i);
  return i;
};
v.isClassElementNameStart = function() {
  return this.type === r.name || this.type === r.privateId || this.type === r.num || this.type === r.string || this.type === r.bracketL || this.type.keyword;
};
v.parseClassElementName = function(e) {
  this.type === r.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
v.parseClassMethod = function(e, t, i, n) {
  var u = e.key;
  e.kind === "constructor" ? (t && this.raise(u.start, "Constructor can't be a generator"), i && this.raise(u.start, "Constructor can't be an async method")) : e.static && lt(e, "prototype") && this.raise(u.start, "Classes may not have a static property named prototype");
  var s = e.value = this.parseMethod(t, i, n);
  return e.kind === "get" && s.params.length !== 0 && this.raiseRecoverable(s.start, "getter should have no params"), e.kind === "set" && s.params.length !== 1 && this.raiseRecoverable(s.start, "setter should have exactly one param"), e.kind === "set" && s.params[0].type === "RestElement" && this.raiseRecoverable(s.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
v.parseClassField = function(e) {
  return lt(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && lt(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(r.eq) ? (this.enterScope(Ke | At), e.value = this.parseMaybeAssign(), this.exitScope()) : e.value = null, this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
v.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(Te | At); this.type !== r.braceR; ) {
    var i = this.parseStatement(null);
    e.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
v.parseClassId = function(e, t) {
  this.type === r.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, be, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
v.parseClassSuper = function(e) {
  e.superClass = this.eat(r._extends) ? this.parseExprSubscripts(null, !1) : null;
};
v.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
v.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, i = e.used;
  if (this.options.checkPrivateFields)
    for (var n = this.privateNameStack.length, u = n === 0 ? null : this.privateNameStack[n - 1], s = 0; s < i.length; ++s) {
      var o = i[s];
      Fe(t, o.name) || (u ? u.used.push(o) : this.raiseRecoverable(o.start, "Private field '#" + o.name + "' must be declared in an enclosing class"));
    }
};
function Vs(e, t) {
  var i = t.key.name, n = e[i], u = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (u = (t.static ? "s" : "i") + t.kind), n === "iget" && u === "iset" || n === "iset" && u === "iget" || n === "sget" && u === "sset" || n === "sset" && u === "sget" ? (e[i] = "true", !1) : n ? !0 : (e[i] = u, !1);
}
function lt(e, t) {
  var i = e.computed, n = e.key;
  return !i && (n.type === "Identifier" && n.name === t || n.type === "Literal" && n.value === t);
}
v.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== r.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
v.parseExport = function(e, t) {
  if (this.next(), this.eat(r.star))
    return this.parseExportAllDeclaration(e, t);
  if (this.eat(r._default))
    return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== r.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
    else {
      for (var i = 0, n = e.specifiers; i < n.length; i += 1) {
        var u = n[i];
        this.checkUnreserved(u.local), this.checkLocalExport(u.local), u.local.type === "Literal" && this.raise(u.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e.source = null, this.options.ecmaVersion >= 16 && (e.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
v.parseExportDeclaration = function(e) {
  return this.parseStatement(null);
};
v.parseExportDefaultDeclaration = function() {
  var e;
  if (this.type === r._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, qe | cn, !1, e);
  } else if (this.type === r._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var n = this.parseMaybeAssign();
    return this.semicolon(), n;
  }
};
v.checkExport = function(e, t, i) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), Fe(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = !0);
};
v.checkPatternExport = function(e, t) {
  var i = t.type;
  if (i === "Identifier")
    this.checkExport(e, t, t.start);
  else if (i === "ObjectPattern")
    for (var n = 0, u = t.properties; n < u.length; n += 1) {
      var s = u[n];
      this.checkPatternExport(e, s);
    }
  else if (i === "ArrayPattern")
    for (var o = 0, a = t.elements; o < a.length; o += 1) {
      var l = a[o];
      l && this.checkPatternExport(e, l);
    }
  else i === "Property" ? this.checkPatternExport(e, t.value) : i === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : i === "RestElement" && this.checkPatternExport(e, t.argument);
};
v.checkVariableExport = function(e, t) {
  if (e)
    for (var i = 0, n = t; i < n.length; i += 1) {
      var u = n[i];
      this.checkPatternExport(e, u.id);
    }
};
v.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
v.parseExportSpecifier = function(e) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(
    e,
    t.exported,
    t.exported.start
  ), this.finishNode(t, "ExportSpecifier");
};
v.parseExportSpecifiers = function(e) {
  var t = [], i = !0;
  for (this.expect(r.braceL); !this.eat(r.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(r.comma), this.afterTrailingComma(r.braceR))
      break;
    t.push(this.parseExportSpecifier(e));
  }
  return t;
};
v.parseImport = function(e) {
  return this.next(), this.type === r.string ? (e.specifiers = Ps, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === r.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
v.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, be), this.finishNode(e, "ImportSpecifier");
};
v.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, be), this.finishNode(e, "ImportDefaultSpecifier");
};
v.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, be), this.finishNode(e, "ImportNamespaceSpecifier");
};
v.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === r.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(r.comma)))
    return e;
  if (this.type === r.star)
    return e.push(this.parseImportNamespaceSpecifier()), e;
  for (this.expect(r.braceL); !this.eat(r.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(r.comma), this.afterTrailingComma(r.braceR))
      break;
    e.push(this.parseImportSpecifier());
  }
  return e;
};
v.parseWithClause = function() {
  var e = [];
  if (!this.eat(r._with))
    return e;
  this.expect(r.braceL);
  for (var t = {}, i = !0; !this.eat(r.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(r.comma), this.afterTrailingComma(r.braceR))
      break;
    var n = this.parseImportAttribute(), u = n.key.type === "Identifier" ? n.key.name : n.key.value;
    Fe(t, u) && this.raiseRecoverable(n.key.start, "Duplicate attribute key '" + u + "'"), t[u] = !0, e.push(n);
  }
  return e;
};
v.parseImportAttribute = function() {
  var e = this.startNode();
  return e.key = this.type === r.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(r.colon), this.type !== r.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
};
v.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === r.string) {
    var e = this.parseLiteral(this.value);
    return Bs.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(!0);
};
v.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
v.isDirectiveCandidate = function(e) {
  return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var se = j.prototype;
se.toAssignable = function(e, t, i) {
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
        for (var n = 0, u = e.properties; n < u.length; n += 1) {
          var s = u[n];
          this.toAssignable(s, t), s.type === "RestElement" && (s.argument.type === "ArrayPattern" || s.argument.type === "ObjectPattern") && this.raise(s.argument.start, "Unexpected token");
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
se.toAssignableList = function(e, t) {
  for (var i = e.length, n = 0; n < i; n++) {
    var u = e[n];
    u && this.toAssignable(u, t);
  }
  if (i) {
    var s = e[i - 1];
    this.options.ecmaVersion === 6 && t && s && s.type === "RestElement" && s.argument.type !== "Identifier" && this.unexpected(s.argument.start);
  }
  return e;
};
se.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
se.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== r.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
se.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case r.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(r.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case r.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
se.parseBindingList = function(e, t, i, n) {
  for (var u = [], s = !0; !this.eat(e); )
    if (s ? s = !1 : this.expect(r.comma), t && this.type === r.comma)
      u.push(null);
    else {
      if (i && this.afterTrailingComma(e))
        break;
      if (this.type === r.ellipsis) {
        var o = this.parseRestBinding();
        this.parseBindingListItem(o), u.push(o), this.type === r.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else
        u.push(this.parseAssignableListItem(n));
    }
  return u;
};
se.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
se.parseBindingListItem = function(e) {
  return e;
};
se.parseMaybeDefault = function(e, t, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(r.eq))
    return i;
  var n = this.startNodeAt(e, t);
  return n.left = i, n.right = this.parseMaybeAssign(), this.finishNode(n, "AssignmentPattern");
};
se.checkLValSimple = function(e, t, i) {
  t === void 0 && (t = rt);
  var n = t !== rt;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (n ? "Binding " : "Assigning to ") + e.name + " in strict mode"), n && (t === be && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), i && (Fe(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = !0), t !== ln && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      n && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return n && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, i);
    default:
      this.raise(e.start, (n ? "Binding" : "Assigning to") + " rvalue");
  }
};
se.checkLValPattern = function(e, t, i) {
  switch (t === void 0 && (t = rt), e.type) {
    case "ObjectPattern":
      for (var n = 0, u = e.properties; n < u.length; n += 1) {
        var s = u[n];
        this.checkLValInnerPattern(s, t, i);
      }
      break;
    case "ArrayPattern":
      for (var o = 0, a = e.elements; o < a.length; o += 1) {
        var l = a[o];
        l && this.checkLValInnerPattern(l, t, i);
      }
      break;
    default:
      this.checkLValSimple(e, t, i);
  }
};
se.checkLValInnerPattern = function(e, t, i) {
  switch (t === void 0 && (t = rt), e.type) {
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
var ae = function(t, i, n, u, s) {
  this.token = t, this.isExpr = !!i, this.preserveSpace = !!n, this.override = u, this.generator = !!s;
}, q = {
  b_stat: new ae("{", !1),
  b_expr: new ae("{", !0),
  b_tmpl: new ae("${", !1),
  p_stat: new ae("(", !1),
  p_expr: new ae("(", !0),
  q_tmpl: new ae("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new ae("function", !1),
  f_expr: new ae("function", !0),
  f_expr_gen: new ae("function", !0, !1, null, !0),
  f_gen: new ae("function", !1, !1, null, !0)
}, Pe = j.prototype;
Pe.initialContext = function() {
  return [q.b_stat];
};
Pe.curContext = function() {
  return this.context[this.context.length - 1];
};
Pe.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === q.f_expr || t === q.f_stat ? !0 : e === r.colon && (t === q.b_stat || t === q.b_expr) ? !t.isExpr : e === r._return || e === r.name && this.exprAllowed ? Q.test(this.input.slice(this.lastTokEnd, this.start)) : e === r._else || e === r.semi || e === r.eof || e === r.parenR || e === r.arrow ? !0 : e === r.braceL ? t === q.b_stat : e === r._var || e === r._const || e === r.name ? !1 : !this.exprAllowed;
};
Pe.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
Pe.updateContext = function(e) {
  var t, i = this.type;
  i.keyword && e === r.dot ? this.exprAllowed = !1 : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
};
Pe.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
};
r.parenR.updateContext = r.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === q.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
r.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? q.b_stat : q.b_expr), this.exprAllowed = !0;
};
r.dollarBraceL.updateContext = function() {
  this.context.push(q.b_tmpl), this.exprAllowed = !0;
};
r.parenL.updateContext = function(e) {
  var t = e === r._if || e === r._for || e === r._with || e === r._while;
  this.context.push(t ? q.p_stat : q.p_expr), this.exprAllowed = !0;
};
r.incDec.updateContext = function() {
};
r._function.updateContext = r._class.updateContext = function(e) {
  e.beforeExpr && e !== r._else && !(e === r.semi && this.curContext() !== q.p_stat) && !(e === r._return && Q.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === r.colon || e === r.braceL) && this.curContext() === q.b_stat) ? this.context.push(q.f_expr) : this.context.push(q.f_stat), this.exprAllowed = !1;
};
r.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
r.backQuote.updateContext = function() {
  this.curContext() === q.q_tmpl ? this.context.pop() : this.context.push(q.q_tmpl), this.exprAllowed = !1;
};
r.star.updateContext = function(e) {
  if (e === r._function) {
    var t = this.context.length - 1;
    this.context[t] === q.f_expr ? this.context[t] = q.f_expr_gen : this.context[t] = q.f_gen;
  }
  this.exprAllowed = !0;
};
r.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== r.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var x = j.prototype;
x.checkPropClash = function(e, t, i) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var n = e.key, u;
    switch (n.type) {
      case "Identifier":
        u = n.name;
        break;
      case "Literal":
        u = String(n.value);
        break;
      default:
        return;
    }
    var s = e.kind;
    if (this.options.ecmaVersion >= 6) {
      u === "__proto__" && s === "init" && (t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = n.start) : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    u = "$" + u;
    var o = t[u];
    if (o) {
      var a;
      s === "init" ? a = this.strict && o.init || o.get || o.set : a = o.init || o[s], a && this.raiseRecoverable(n.start, "Redefinition of property");
    } else
      o = t[u] = {
        init: !1,
        get: !1,
        set: !1
      };
    o[s] = !0;
  }
};
x.parseExpression = function(e, t) {
  var i = this.start, n = this.startLoc, u = this.parseMaybeAssign(e, t);
  if (this.type === r.comma) {
    var s = this.startNodeAt(i, n);
    for (s.expressions = [u]; this.eat(r.comma); )
      s.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(s, "SequenceExpression");
  }
  return u;
};
x.parseMaybeAssign = function(e, t, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var n = !1, u = -1, s = -1, o = -1;
  t ? (u = t.parenthesizedAssign, s = t.trailingComma, o = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new wt(), n = !0);
  var a = this.start, l = this.startLoc;
  (this.type === r.parenL || this.type === r.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var f = this.parseMaybeConditional(e, t);
  if (i && (f = i.call(this, f, a, l)), this.type.isAssign) {
    var c = this.startNodeAt(a, l);
    return c.operator = this.value, this.type === r.eq && (f = this.toAssignable(f, !1, t)), n || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= f.start && (t.shorthandAssign = -1), this.type === r.eq ? this.checkLValPattern(f) : this.checkLValSimple(f), c.left = f, this.next(), c.right = this.parseMaybeAssign(e), o > -1 && (t.doubleProto = o), this.finishNode(c, "AssignmentExpression");
  } else
    n && this.checkExpressionErrors(t, !0);
  return u > -1 && (t.parenthesizedAssign = u), s > -1 && (t.trailingComma = s), f;
};
x.parseMaybeConditional = function(e, t) {
  var i = this.start, n = this.startLoc, u = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return u;
  if (this.eat(r.question)) {
    var s = this.startNodeAt(i, n);
    return s.test = u, s.consequent = this.parseMaybeAssign(), this.expect(r.colon), s.alternate = this.parseMaybeAssign(e), this.finishNode(s, "ConditionalExpression");
  }
  return u;
};
x.parseExprOps = function(e, t) {
  var i = this.start, n = this.startLoc, u = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || u.start === i && u.type === "ArrowFunctionExpression" ? u : this.parseExprOp(u, i, n, -1, e);
};
x.parseExprOp = function(e, t, i, n, u) {
  var s = this.type.binop;
  if (s != null && (!u || this.type !== r._in) && s > n) {
    var o = this.type === r.logicalOR || this.type === r.logicalAND, a = this.type === r.coalesce;
    a && (s = r.logicalAND.binop);
    var l = this.value;
    this.next();
    var f = this.start, c = this.startLoc, h = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, u), f, c, s, u), d = this.buildBinary(t, i, e, h, l, o || a);
    return (o && this.type === r.coalesce || a && (this.type === r.logicalOR || this.type === r.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(d, t, i, n, u);
  }
  return e;
};
x.buildBinary = function(e, t, i, n, u, s) {
  n.type === "PrivateIdentifier" && this.raise(n.start, "Private identifier can only be left side of binary expression");
  var o = this.startNodeAt(e, t);
  return o.left = i, o.operator = u, o.right = n, this.finishNode(o, s ? "LogicalExpression" : "BinaryExpression");
};
x.parseMaybeUnary = function(e, t, i, n) {
  var u = this.start, s = this.startLoc, o;
  if (this.isContextual("await") && this.canAwait)
    o = this.parseAwait(n), t = !0;
  else if (this.type.prefix) {
    var a = this.startNode(), l = this.type === r.incDec;
    a.operator = this.value, a.prefix = !0, this.next(), a.argument = this.parseMaybeUnary(null, !0, l, n), this.checkExpressionErrors(e, !0), l ? this.checkLValSimple(a.argument) : this.strict && a.operator === "delete" && fn(a.argument) ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode") : a.operator === "delete" && Vt(a.argument) ? this.raiseRecoverable(a.start, "Private fields can not be deleted") : t = !0, o = this.finishNode(a, l ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === r.privateId)
    (n || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), o = this.parsePrivateIdent(), this.type !== r._in && this.unexpected();
  else {
    if (o = this.parseExprSubscripts(e, n), this.checkExpressionErrors(e))
      return o;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var f = this.startNodeAt(u, s);
      f.operator = this.value, f.prefix = !1, f.argument = o, this.checkLValSimple(o), this.next(), o = this.finishNode(f, "UpdateExpression");
    }
  }
  if (!i && this.eat(r.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(u, s, o, this.parseMaybeUnary(null, !1, !1, n), "**", !1);
  else
    return o;
};
function fn(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && fn(e.expression);
}
function Vt(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Vt(e.expression) || e.type === "ParenthesizedExpression" && Vt(e.expression);
}
x.parseExprSubscripts = function(e, t) {
  var i = this.start, n = this.startLoc, u = this.parseExprAtom(e, t);
  if (u.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return u;
  var s = this.parseSubscripts(u, i, n, !1, t);
  return e && s.type === "MemberExpression" && (e.parenthesizedAssign >= s.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= s.start && (e.parenthesizedBind = -1), e.trailingComma >= s.start && (e.trailingComma = -1)), s;
};
x.parseSubscripts = function(e, t, i, n, u) {
  for (var s = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, o = !1; ; ) {
    var a = this.parseSubscript(e, t, i, n, s, o, u);
    if (a.optional && (o = !0), a === e || a.type === "ArrowFunctionExpression") {
      if (o) {
        var l = this.startNodeAt(t, i);
        l.expression = a, a = this.finishNode(l, "ChainExpression");
      }
      return a;
    }
    e = a;
  }
};
x.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(r.arrow);
};
x.parseSubscriptAsyncArrow = function(e, t, i, n) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, n);
};
x.parseSubscript = function(e, t, i, n, u, s, o) {
  var a = this.options.ecmaVersion >= 11, l = a && this.eat(r.questionDot);
  n && l && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var f = this.eat(r.bracketL);
  if (f || l && this.type !== r.parenL && this.type !== r.backQuote || this.eat(r.dot)) {
    var c = this.startNodeAt(t, i);
    c.object = e, f ? (c.property = this.parseExpression(), this.expect(r.bracketR)) : this.type === r.privateId && e.type !== "Super" ? c.property = this.parsePrivateIdent() : c.property = this.parseIdent(this.options.allowReserved !== "never"), c.computed = !!f, a && (c.optional = l), e = this.finishNode(c, "MemberExpression");
  } else if (!n && this.eat(r.parenL)) {
    var h = new wt(), d = this.yieldPos, y = this.awaitPos, C = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var D = this.parseExprList(r.parenR, this.options.ecmaVersion >= 8, !1, h);
    if (u && !l && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(h, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = d, this.awaitPos = y, this.awaitIdentPos = C, this.parseSubscriptAsyncArrow(t, i, D, o);
    this.checkExpressionErrors(h, !0), this.yieldPos = d || this.yieldPos, this.awaitPos = y || this.awaitPos, this.awaitIdentPos = C || this.awaitIdentPos;
    var w = this.startNodeAt(t, i);
    w.callee = e, w.arguments = D, a && (w.optional = l), e = this.finishNode(w, "CallExpression");
  } else if (this.type === r.backQuote) {
    (l || s) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var E = this.startNodeAt(t, i);
    E.tag = e, E.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(E, "TaggedTemplateExpression");
  }
  return e;
};
x.parseExprAtom = function(e, t, i) {
  this.type === r.slash && this.readRegexp();
  var n, u = this.potentialArrowAt === this.start;
  switch (this.type) {
    case r._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), n = this.startNode(), this.next(), this.type === r.parenL && !this.allowDirectSuper && this.raise(n.start, "super() call outside constructor of a subclass"), this.type !== r.dot && this.type !== r.bracketL && this.type !== r.parenL && this.unexpected(), this.finishNode(n, "Super");
    case r._this:
      return n = this.startNode(), this.next(), this.finishNode(n, "ThisExpression");
    case r.name:
      var s = this.start, o = this.startLoc, a = this.containsEsc, l = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !a && l.name === "async" && !this.canInsertSemicolon() && this.eat(r._function))
        return this.overrideContext(q.f_expr), this.parseFunction(this.startNodeAt(s, o), 0, !1, !0, t);
      if (u && !this.canInsertSemicolon()) {
        if (this.eat(r.arrow))
          return this.parseArrowExpression(this.startNodeAt(s, o), [l], !1, t);
        if (this.options.ecmaVersion >= 8 && l.name === "async" && this.type === r.name && !a && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return l = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(r.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(s, o), [l], !0, t);
      }
      return l;
    case r.regexp:
      var f = this.value;
      return n = this.parseLiteral(f.value), n.regex = { pattern: f.pattern, flags: f.flags }, n;
    case r.num:
    case r.string:
      return this.parseLiteral(this.value);
    case r._null:
    case r._true:
    case r._false:
      return n = this.startNode(), n.value = this.type === r._null ? null : this.type === r._true, n.raw = this.type.keyword, this.next(), this.finishNode(n, "Literal");
    case r.parenL:
      var c = this.start, h = this.parseParenAndDistinguishExpression(u, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(h) && (e.parenthesizedAssign = c), e.parenthesizedBind < 0 && (e.parenthesizedBind = c)), h;
    case r.bracketL:
      return n = this.startNode(), this.next(), n.elements = this.parseExprList(r.bracketR, !0, !0, e), this.finishNode(n, "ArrayExpression");
    case r.braceL:
      return this.overrideContext(q.b_expr), this.parseObj(!1, e);
    case r._function:
      return n = this.startNode(), this.next(), this.parseFunction(n, 0);
    case r._class:
      return this.parseClass(this.startNode(), !1);
    case r._new:
      return this.parseNew();
    case r.backQuote:
      return this.parseTemplate();
    case r._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
x.parseExprAtomDefault = function() {
  this.unexpected();
};
x.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === r.parenL && !e)
    return this.parseDynamicImport(t);
  if (this.type === r.dot) {
    var i = this.startNodeAt(t.start, t.loc && t.loc.start);
    return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
  } else
    this.unexpected();
};
x.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(r.parenR) ? e.options = null : (this.expect(r.comma), this.afterTrailingComma(r.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(r.parenR) || (this.expect(r.comma), this.afterTrailingComma(r.parenR) || this.unexpected())));
  else if (!this.eat(r.parenR)) {
    var t = this.start;
    this.eat(r.comma) && this.eat(r.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
x.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
x.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
x.parseParenExpression = function() {
  this.expect(r.parenL);
  var e = this.parseExpression();
  return this.expect(r.parenR), e;
};
x.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
x.parseParenAndDistinguishExpression = function(e, t) {
  var i = this.start, n = this.startLoc, u, s = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var o = this.start, a = this.startLoc, l = [], f = !0, c = !1, h = new wt(), d = this.yieldPos, y = this.awaitPos, C;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== r.parenR; )
      if (f ? f = !1 : this.expect(r.comma), s && this.afterTrailingComma(r.parenR, !0)) {
        c = !0;
        break;
      } else if (this.type === r.ellipsis) {
        C = this.start, l.push(this.parseParenItem(this.parseRestBinding())), this.type === r.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        l.push(this.parseMaybeAssign(!1, h, this.parseParenItem));
    var D = this.lastTokEnd, w = this.lastTokEndLoc;
    if (this.expect(r.parenR), e && this.shouldParseArrow(l) && this.eat(r.arrow))
      return this.checkPatternErrors(h, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = d, this.awaitPos = y, this.parseParenArrowList(i, n, l, t);
    (!l.length || c) && this.unexpected(this.lastTokStart), C && this.unexpected(C), this.checkExpressionErrors(h, !0), this.yieldPos = d || this.yieldPos, this.awaitPos = y || this.awaitPos, l.length > 1 ? (u = this.startNodeAt(o, a), u.expressions = l, this.finishNodeAt(u, "SequenceExpression", D, w)) : u = l[0];
  } else
    u = this.parseParenExpression();
  if (this.options.preserveParens) {
    var E = this.startNodeAt(i, n);
    return E.expression = u, this.finishNode(E, "ParenthesizedExpression");
  } else
    return u;
};
x.parseParenItem = function(e) {
  return e;
};
x.parseParenArrowList = function(e, t, i, n) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, n);
};
var Rs = [];
x.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === r.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var i = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var n = this.start, u = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), n, u, !0, !1), this.eat(r.parenL) ? e.arguments = this.parseExprList(r.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Rs, this.finishNode(e, "NewExpression");
};
x.parseTemplateElement = function(e) {
  var t = e.isTagged, i = this.startNode();
  return this.type === r.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : i.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), i.tail = this.type === r.backQuote, this.finishNode(i, "TemplateElement");
};
x.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var i = this.startNode();
  this.next(), i.expressions = [];
  var n = this.parseTemplateElement({ isTagged: t });
  for (i.quasis = [n]; !n.tail; )
    this.type === r.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(r.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(r.braceR), i.quasis.push(n = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
x.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === r.name || this.type === r.num || this.type === r.string || this.type === r.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === r.star) && !Q.test(this.input.slice(this.lastTokEnd, this.start));
};
x.parseObj = function(e, t) {
  var i = this.startNode(), n = !0, u = {};
  for (i.properties = [], this.next(); !this.eat(r.braceR); ) {
    if (n)
      n = !1;
    else if (this.expect(r.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(r.braceR))
      break;
    var s = this.parseProperty(e, t);
    e || this.checkPropClash(s, u, t), i.properties.push(s);
  }
  return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
};
x.parseProperty = function(e, t) {
  var i = this.startNode(), n, u, s, o;
  if (this.options.ecmaVersion >= 9 && this.eat(r.ellipsis))
    return e ? (i.argument = this.parseIdent(!1), this.type === r.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, t), this.type === r.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (e || t) && (s = this.start, o = this.startLoc), e || (n = this.eat(r.star)));
  var a = this.containsEsc;
  return this.parsePropertyName(i), !e && !a && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(i) ? (u = !0, n = this.options.ecmaVersion >= 9 && this.eat(r.star), this.parsePropertyName(i)) : u = !1, this.parsePropertyValue(i, e, n, u, s, o, t, a), this.finishNode(i, "Property");
};
x.parseGetterSetter = function(e) {
  var t = e.key.name;
  this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
  var i = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== i) {
    var n = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(n, "getter should have no params") : this.raiseRecoverable(n, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
x.parsePropertyValue = function(e, t, i, n, u, s, o, a) {
  (i || n) && this.type === r.colon && this.unexpected(), this.eat(r.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, o), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === r.parenL ? (t && this.unexpected(), e.method = !0, e.value = this.parseMethod(i, n), e.kind = "init") : !t && !a && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== r.comma && this.type !== r.braceR && this.type !== r.eq ? ((i || n) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((i || n) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = u), t ? e.value = this.parseMaybeDefault(u, s, this.copyNode(e.key)) : this.type === r.eq && o ? (o.shorthandAssign < 0 && (o.shorthandAssign = this.start), e.value = this.parseMaybeDefault(u, s, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.kind = "init", e.shorthand = !0) : this.unexpected();
};
x.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(r.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(r.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === r.num || this.type === r.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
x.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
x.parseMethod = function(e, t, i) {
  var n = this.startNode(), u = this.yieldPos, s = this.awaitPos, o = this.awaitIdentPos;
  return this.initFunction(n), this.options.ecmaVersion >= 6 && (n.generator = e), this.options.ecmaVersion >= 8 && (n.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(ii(t, n.generator) | At | (i ? on : 0)), this.expect(r.parenL), n.params = this.parseBindingList(r.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(n, !1, !0, !1), this.yieldPos = u, this.awaitPos = s, this.awaitIdentPos = o, this.finishNode(n, "FunctionExpression");
};
x.parseArrowExpression = function(e, t, i, n) {
  var u = this.yieldPos, s = this.awaitPos, o = this.awaitIdentPos;
  return this.enterScope(ii(i, !1) | ti), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, n), this.yieldPos = u, this.awaitPos = s, this.awaitIdentPos = o, this.finishNode(e, "ArrowFunctionExpression");
};
x.parseFunctionBody = function(e, t, i, n) {
  var u = t && this.type !== r.braceL, s = this.strict, o = !1;
  if (u)
    e.body = this.parseMaybeAssign(n), e.expression = !0, this.checkParams(e, !1);
  else {
    var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!s || a) && (o = this.strictDirective(this.end), o && a && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var l = this.labels;
    this.labels = [], o && (this.strict = !0), this.checkParams(e, !s && !o && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, ln), e.body = this.parseBlock(!1, void 0, o && !s), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = l;
  }
  this.exitScope();
};
x.isSimpleParamList = function(e) {
  for (var t = 0, i = e; t < i.length; t += 1) {
    var n = i[t];
    if (n.type !== "Identifier")
      return !1;
  }
  return !0;
};
x.checkParams = function(e, t) {
  for (var i = /* @__PURE__ */ Object.create(null), n = 0, u = e.params; n < u.length; n += 1) {
    var s = u[n];
    this.checkLValInnerPattern(s, ni, t ? null : i);
  }
};
x.parseExprList = function(e, t, i, n) {
  for (var u = [], s = !0; !this.eat(e); ) {
    if (s)
      s = !1;
    else if (this.expect(r.comma), t && this.afterTrailingComma(e))
      break;
    var o = void 0;
    i && this.type === r.comma ? o = null : this.type === r.ellipsis ? (o = this.parseSpread(n), n && this.type === r.comma && n.trailingComma < 0 && (n.trailingComma = this.start)) : o = this.parseMaybeAssign(!1, n), u.push(o);
  }
  return u;
};
x.checkUnreserved = function(e) {
  var t = e.start, i = e.end, n = e.name;
  if (this.inGenerator && n === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & vt) && n === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (n === "arguments" || n === "await") && this.raise(t, "Cannot use " + n + " in class static initialization block"), this.keywords.test(n) && this.raise(t, "Unexpected keyword '" + n + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
    var u = this.strict ? this.reservedWordsStrict : this.reservedWords;
    u.test(n) && (!this.inAsync && n === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + n + "' is reserved"));
  }
};
x.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
x.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === r.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = r.name) : this.unexpected(), e;
};
x.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === r.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
x.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === r.semi || this.canInsertSemicolon() || this.type !== r.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(r.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
x.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var ct = j.prototype;
ct.raise = function(e, t) {
  var i = nn(this.input, e);
  t += " (" + i.line + ":" + i.column + ")", this.sourceFile && (t += " in " + this.sourceFile);
  var n = new SyntaxError(t);
  throw n.pos = e, n.loc = i, n.raisedAt = this.pos, n;
};
ct.raiseRecoverable = ct.raise;
ct.curPosition = function() {
  if (this.options.locations)
    return new je(this.curLine, this.pos - this.lineStart);
};
var we = j.prototype, Os = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
we.enterScope = function(e) {
  this.scopeStack.push(new Os(e));
};
we.exitScope = function() {
  this.scopeStack.pop();
};
we.treatFunctionsAsVarInScope = function(e) {
  return e.flags & Le || !this.inModule && e.flags & Je;
};
we.declareName = function(e, t, i) {
  var n = !1;
  if (t === be) {
    var u = this.currentScope();
    n = u.lexical.indexOf(e) > -1 || u.functions.indexOf(e) > -1 || u.var.indexOf(e) > -1, u.lexical.push(e), this.inModule && u.flags & Je && delete this.undefinedExports[e];
  } else if (t === rn) {
    var s = this.currentScope();
    s.lexical.push(e);
  } else if (t === an) {
    var o = this.currentScope();
    this.treatFunctionsAsVar ? n = o.lexical.indexOf(e) > -1 : n = o.lexical.indexOf(e) > -1 || o.var.indexOf(e) > -1, o.functions.push(e);
  } else
    for (var a = this.scopeStack.length - 1; a >= 0; --a) {
      var l = this.scopeStack[a];
      if (l.lexical.indexOf(e) > -1 && !(l.flags & sn && l.lexical[0] === e) || !this.treatFunctionsAsVarInScope(l) && l.functions.indexOf(e) > -1) {
        n = !0;
        break;
      }
      if (l.var.push(e), this.inModule && l.flags & Je && delete this.undefinedExports[e], l.flags & vt)
        break;
    }
  n && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
};
we.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
we.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
we.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (vt | Ke | Te))
      return t;
  }
};
we.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & (vt | Ke | Te) && !(t.flags & ti))
      return t;
  }
};
var Et = function(t, i, n) {
  this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new Ct(t, n)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
}, Qe = j.prototype;
Qe.startNode = function() {
  return new Et(this, this.start, this.startLoc);
};
Qe.startNodeAt = function(e, t) {
  return new Et(this, e, t);
};
function hn(e, t, i, n) {
  return e.type = t, e.end = i, this.options.locations && (e.loc.end = n), this.options.ranges && (e.range[1] = i), e;
}
Qe.finishNode = function(e, t) {
  return hn.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
Qe.finishNodeAt = function(e, t, i, n) {
  return hn.call(this, e, t, i, n);
};
Qe.copyNode = function(e) {
  var t = new Et(this, e.start, this.startLoc);
  for (var i in e)
    t[i] = e[i];
  return t;
};
var qs = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", dn = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", gn = dn + " Extended_Pictographic", mn = gn, bn = mn + " EBase EComp EMod EPres ExtPict", kn = bn, Ms = kn, Us = {
  9: dn,
  10: gn,
  11: mn,
  12: bn,
  13: kn,
  14: Ms
}, js = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Js = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: js
}, bi = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", pn = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", yn = pn + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Cn = yn + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", An = Cn + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", vn = An + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Hs = vn + " " + qs, zs = {
  9: pn,
  10: yn,
  11: Cn,
  12: An,
  13: vn,
  14: Hs
}, wn = {};
function Ws(e) {
  var t = wn[e] = {
    binary: Ae(Us[e] + " " + bi),
    binaryOfStrings: Ae(Js[e]),
    nonBinary: {
      General_Category: Ae(bi),
      Script: Ae(zs[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var St = 0, ki = [9, 10, 11, 12, 13, 14]; St < ki.length; St += 1) {
  var Xs = ki[St];
  Ws(Xs);
}
var A = j.prototype, ft = function(t, i) {
  this.parent = t, this.base = i || this;
};
ft.prototype.separatedFrom = function(t) {
  for (var i = this; i; i = i.parent)
    for (var n = t; n; n = n.parent)
      if (i.base === n.base && i !== n)
        return !0;
  return !1;
};
ft.prototype.sibling = function() {
  return new ft(this.parent, this.base);
};
var he = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = wn[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
he.prototype.reset = function(t, i, n) {
  var u = n.indexOf("v") !== -1, s = n.indexOf("u") !== -1;
  this.start = t | 0, this.source = i + "", this.flags = n, u && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = s && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = s && this.parser.options.ecmaVersion >= 9);
};
he.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
he.prototype.at = function(t, i) {
  i === void 0 && (i = !1);
  var n = this.source, u = n.length;
  if (t >= u)
    return -1;
  var s = n.charCodeAt(t);
  if (!(i || this.switchU) || s <= 55295 || s >= 57344 || t + 1 >= u)
    return s;
  var o = n.charCodeAt(t + 1);
  return o >= 56320 && o <= 57343 ? (s << 10) + o - 56613888 : s;
};
he.prototype.nextIndex = function(t, i) {
  i === void 0 && (i = !1);
  var n = this.source, u = n.length;
  if (t >= u)
    return u;
  var s = n.charCodeAt(t), o;
  return !(i || this.switchU) || s <= 55295 || s >= 57344 || t + 1 >= u || (o = n.charCodeAt(t + 1)) < 56320 || o > 57343 ? t + 1 : t + 2;
};
he.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
he.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
he.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
he.prototype.eat = function(t, i) {
  return i === void 0 && (i = !1), this.current(i) === t ? (this.advance(i), !0) : !1;
};
he.prototype.eatChars = function(t, i) {
  i === void 0 && (i = !1);
  for (var n = this.pos, u = 0, s = t; u < s.length; u += 1) {
    var o = s[u], a = this.at(n, i);
    if (a === -1 || a !== o)
      return !1;
    n = this.nextIndex(n, i);
  }
  return this.pos = n, !0;
};
A.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, i = e.flags, n = !1, u = !1, s = 0; s < i.length; s++) {
    var o = i.charAt(s);
    t.indexOf(o) === -1 && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(o, s + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), o === "u" && (n = !0), o === "v" && (u = !0);
  }
  this.options.ecmaVersion >= 15 && n && u && this.raise(e.start, "Invalid regular expression flag");
};
function $s(e) {
  for (var t in e)
    return !0;
  return !1;
}
A.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && $s(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
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
    var n = i[t];
    e.groupNames[n] || e.raise("Invalid named capture referenced");
  }
};
A.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new ft(e.branchID, null)), this.regexp_alternative(e); e.eat(
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
    var n = 0, u = -1;
    if (this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (u = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return u !== -1 && u < n && !t && e.raise("numbers out of order in {} quantifier"), !0;
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
        var i = this.regexp_eatModifiers(e), n = e.eat(
          45
          /* - */
        );
        if (i || n) {
          for (var u = 0; u < i.length; u++) {
            var s = i.charAt(u);
            i.indexOf(s, u + 1) > -1 && e.raise("Duplicate regular expression modifiers");
          }
          if (n) {
            var o = this.regexp_eatModifiers(e);
            !i && !o && e.current() === 58 && e.raise("Invalid regular expression modifiers");
            for (var a = 0; a < o.length; a++) {
              var l = o.charAt(a);
              (o.indexOf(l, a + 1) > -1 || i.indexOf(l) > -1) && e.raise("Duplicate regular expression modifiers");
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
  for (var t = "", i = 0; (i = e.current()) !== -1 && Ks(i); )
    t += ge(i), e.advance();
  return t;
};
function Ks(e) {
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
  return En(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function En(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
A.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !En(i); )
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
        for (var n = 0, u = i; n < u.length; n += 1) {
          var s = u[n];
          s.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
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
    for (e.lastStringValue += ge(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += ge(e.lastIntValue);
    return !0;
  }
  return !1;
};
A.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, n = e.current(i);
  return e.advance(i), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (n = e.lastIntValue), Qs(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1);
};
function Qs(e) {
  return ce(e, !0) || e === 36 || e === 95;
}
A.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, n = e.current(i);
  return e.advance(i), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (n = e.lastIntValue), Ys(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1);
};
function Ys(e) {
  return ve(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
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
  return e.current() === 48 && !Dt(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
A.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
A.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return Dn(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function Dn(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
A.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var i = e.pos, n = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var u = e.lastIntValue;
      if (n && u >= 55296 && u <= 56319) {
        var s = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var o = e.lastIntValue;
          if (o >= 56320 && o <= 57343)
            return e.lastIntValue = (u - 55296) * 1024 + (o - 56320) + 65536, !0;
        }
        e.pos = s, e.lastIntValue = u;
      }
      return !0;
    }
    if (n && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && Zs(e.lastIntValue))
      return !0;
    n && e.raise("Invalid unicode escape"), e.pos = i;
  }
  return !1;
};
function Zs(e) {
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
var xn = 0, me = 1, te = 2;
A.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (Gs(t))
    return e.lastIntValue = -1, e.advance(), me;
  var i = !1;
  if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
    e.lastIntValue = -1, e.advance();
    var n;
    if (e.eat(
      123
      /* { */
    ) && (n = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(
      125
      /* } */
    ))
      return i && n === te && e.raise("Invalid property name"), n;
    e.raise("Invalid property name");
  }
  return xn;
};
function Gs(e) {
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
      var n = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, i, n), me;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var u = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, u);
  }
  return xn;
};
A.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
  Fe(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
};
A.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return me;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return te;
  e.raise("Invalid property name");
};
A.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Tn(t = e.current()); )
    e.lastStringValue += ge(t), e.advance();
  return e.lastStringValue !== "";
};
function Tn(e) {
  return Dn(e) || e === 95;
}
A.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; eo(t = e.current()); )
    e.lastStringValue += ge(t), e.advance();
  return e.lastStringValue !== "";
};
function eo(e) {
  return Tn(e) || Dt(e);
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
    ) || e.raise("Unterminated character class"), t && i === te && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
A.regexp_classContents = function(e) {
  return e.current() === 93 ? me : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), me);
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
      (i === 99 || Bn(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var n = e.current();
  return n !== 93 ? (e.lastIntValue = n, e.advance(), !0) : !1;
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
  var t = me, i;
  if (!this.regexp_eatClassSetRange(e)) if (i = this.regexp_eatClassSetOperand(e)) {
    i === te && (t = te);
    for (var n = e.pos; e.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
        i !== te && (t = me);
        continue;
      }
      e.raise("Invalid character in character class");
    }
    if (n !== e.pos)
      return t;
    for (; e.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
    if (n !== e.pos)
      return t;
  } else
    e.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(e)) {
      if (i = this.regexp_eatClassSetOperand(e), !i)
        return t;
      i === te && (t = te);
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
      var n = e.lastIntValue;
      return i !== -1 && n !== -1 && i > n && e.raise("Range out of order in character class"), !0;
    }
    e.pos = t;
  }
  return !1;
};
A.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? me : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
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
    ), n = this.regexp_classContents(e);
    if (e.eat(
      93
      /* ] */
    ))
      return i && n === te && e.raise("Negated character class may contain strings"), n;
    e.pos = t;
  }
  if (e.eat(
    92
    /* \ */
  )) {
    var u = this.regexp_eatCharacterClassEscape(e);
    if (u)
      return u;
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
    this.regexp_classString(e) === te && (t = te);
  return t;
};
A.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? me : te;
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
  return i < 0 || i === e.lookahead() && to(i) || io(i) ? !1 : (e.advance(), e.lastIntValue = i, !0);
};
function to(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function io(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
A.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return no(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function no(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
A.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return Dt(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
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
  for (e.lastIntValue = 0; Dt(i = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
  return e.pos !== t;
};
function Dt(e) {
  return e >= 48 && e <= 57;
}
A.regexp_eatHexDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; Sn(i = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + In(i), e.advance();
  return e.pos !== t;
};
function Sn(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function In(e) {
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
  return Bn(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function Bn(e) {
  return e >= 48 && e <= 55;
}
A.regexp_eatFixedHexDigits = function(e, t) {
  var i = e.pos;
  e.lastIntValue = 0;
  for (var n = 0; n < t; ++n) {
    var u = e.current();
    if (!Sn(u))
      return e.pos = i, !1;
    e.lastIntValue = 16 * e.lastIntValue + In(u), e.advance();
  }
  return !0;
};
var si = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new Ct(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, _ = j.prototype;
_.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new si(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
_.getToken = function() {
  return this.next(), new si(this);
};
typeof Symbol < "u" && (_[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === r.eof,
        value: t
      };
    }
  };
});
_.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(r.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
_.readToken = function(e) {
  return ce(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
_.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 56320)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
};
_.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
    for (var n = void 0, u = t; (n = Gi(this.input, u, this.pos)) > -1; )
      ++this.curLine, u = this.lineStart = n;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, i),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
_.skipLineComment = function(e) {
  for (var t = this.pos, i = this.options.onComment && this.curPosition(), n = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !_e(n); )
    n = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    i,
    this.curPosition()
  );
};
_.skipSpace = function() {
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
        if (e > 8 && e < 14 || e >= 5760 && en.test(String.fromCharCode(e)))
          ++this.pos;
        else
          break e;
    }
  }
};
_.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = e, this.value = t, this.updateContext(i);
};
_.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(r.ellipsis)) : (++this.pos, this.finishToken(r.dot));
};
_.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(r.assign, 2) : this.finishOp(r.slash, 1);
};
_.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1, n = e === 42 ? r.star : r.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, n = r.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(r.assign, i + 1) : this.finishOp(n, i);
};
_.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i === 61)
        return this.finishOp(r.assign, 3);
    }
    return this.finishOp(e === 124 ? r.logicalOR : r.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(r.assign, 2) : this.finishOp(e === 124 ? r.bitwiseOR : r.bitwiseAND, 1);
};
_.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(r.assign, 2) : this.finishOp(r.bitwiseXOR, 1);
};
_.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || Q.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(r.incDec, 2) : t === 61 ? this.finishOp(r.assign, 2) : this.finishOp(r.plusMin, 1);
};
_.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1;
  return t === e ? (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(r.assign, i + 1) : this.finishOp(r.bitShift, i)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (i = 2), this.finishOp(r.relational, i));
};
_.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(r.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(r.arrow)) : this.finishOp(e === 61 ? r.eq : r.prefix, 1);
};
_.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i < 48 || i > 57)
        return this.finishOp(r.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var n = this.input.charCodeAt(this.pos + 2);
        if (n === 61)
          return this.finishOp(r.assign, 3);
      }
      return this.finishOp(r.coalesce, 2);
    }
  }
  return this.finishOp(r.question, 1);
};
_.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), ce(t, !0) || t === 92))
    return this.finishToken(r.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + ge(t) + "'");
};
_.getTokenFromCode = function(e) {
  switch (e) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      return this.readToken_dot();
    // Punctuation tokens.
    case 40:
      return ++this.pos, this.finishToken(r.parenL);
    case 41:
      return ++this.pos, this.finishToken(r.parenR);
    case 59:
      return ++this.pos, this.finishToken(r.semi);
    case 44:
      return ++this.pos, this.finishToken(r.comma);
    case 91:
      return ++this.pos, this.finishToken(r.bracketL);
    case 93:
      return ++this.pos, this.finishToken(r.bracketR);
    case 123:
      return ++this.pos, this.finishToken(r.braceL);
    case 125:
      return ++this.pos, this.finishToken(r.braceR);
    case 58:
      return ++this.pos, this.finishToken(r.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(r.backQuote);
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
      return this.finishOp(r.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + ge(e) + "'");
};
_.finishOp = function(e, t) {
  var i = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, i);
};
_.readRegexp = function() {
  for (var e, t, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var n = this.input.charAt(this.pos);
    if (Q.test(n) && this.raise(i, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (n === "[")
        t = !0;
      else if (n === "]" && t)
        t = !1;
      else if (n === "/" && !t)
        break;
      e = n === "\\";
    }
    ++this.pos;
  }
  var u = this.input.slice(i, this.pos);
  ++this.pos;
  var s = this.pos, o = this.readWord1();
  this.containsEsc && this.unexpected(s);
  var a = this.regexpState || (this.regexpState = new he(this));
  a.reset(i, u, o), this.validateRegExpFlags(a), this.validateRegExpPattern(a);
  var l = null;
  try {
    l = new RegExp(u, o);
  } catch {
  }
  return this.finishToken(r.regexp, { pattern: u, flags: o, value: l });
};
_.readInt = function(e, t, i) {
  for (var n = this.options.ecmaVersion >= 12 && t === void 0, u = i && this.input.charCodeAt(this.pos) === 48, s = this.pos, o = 0, a = 0, l = 0, f = t ?? 1 / 0; l < f; ++l, ++this.pos) {
    var c = this.input.charCodeAt(this.pos), h = void 0;
    if (n && c === 95) {
      u && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), a === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), l === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), a = c;
      continue;
    }
    if (c >= 97 ? h = c - 97 + 10 : c >= 65 ? h = c - 65 + 10 : c >= 48 && c <= 57 ? h = c - 48 : h = 1 / 0, h >= e)
      break;
    a = c, o = o * e + h;
  }
  return n && a === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === s || t != null && this.pos - s !== t ? null : o;
};
function uo(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Nn(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
_.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var i = this.readInt(e);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = Nn(this.input.slice(t, this.pos)), ++this.pos) : ce(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(r.num, i);
};
_.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  i && this.strict && this.raise(t, "Invalid number");
  var n = this.input.charCodeAt(this.pos);
  if (!i && !e && this.options.ecmaVersion >= 11 && n === 110) {
    var u = Nn(this.input.slice(t, this.pos));
    return ++this.pos, ce(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(r.num, u);
  }
  i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1), n === 46 && !i && (++this.pos, this.readInt(10), n = this.input.charCodeAt(this.pos)), (n === 69 || n === 101) && !i && (n = this.input.charCodeAt(++this.pos), (n === 43 || n === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), ce(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var s = uo(this.input.slice(t, this.pos), i);
  return this.finishToken(r.num, s);
};
_.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
_.readString = function(e) {
  for (var t = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var n = this.input.charCodeAt(this.pos);
    if (n === e)
      break;
    n === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), i = this.pos) : n === 8232 || n === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (_e(n) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(i, this.pos++), this.finishToken(r.string, t);
};
var _n = {};
_.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === _n)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
_.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw _n;
  this.raise(e, t);
};
_.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === r.template || this.type === r.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(r.dollarBraceL)) : (++this.pos, this.finishToken(r.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(r.template, e));
    if (i === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (_e(i)) {
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
_.readInvalidTemplateToken = function() {
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
        return this.finishToken(r.invalidTemplate, this.input.slice(this.start, this.pos));
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
_.readEscapedChar = function(e) {
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
      return ge(this.readCodePoint());
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
        var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], u = parseInt(n, 8);
        return u > 255 && (n = n.slice(0, -1), u = parseInt(n, 8)), this.pos += n.length - 1, t = this.input.charCodeAt(this.pos), (n !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - n.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(u);
      }
      return _e(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
_.readHexChar = function(e) {
  var t = this.pos, i = this.readInt(16, e);
  return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
};
_.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, i = this.pos, n = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var u = this.fullCharCodeAtPos();
    if (ve(u, n))
      this.pos += u <= 65535 ? 1 : 2;
    else if (u === 92) {
      this.containsEsc = !0, e += this.input.slice(i, this.pos);
      var s = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var o = this.readCodePoint();
      (t ? ce : ve)(o, n) || this.invalidStringToken(s, "Invalid Unicode escape"), e += ge(o), i = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(i, this.pos);
};
_.readWord = function() {
  var e = this.readWord1(), t = r.name;
  return this.keywords.test(e) && (t = Gt[e]), this.finishToken(t, e);
};
var so = "8.15.0";
j.acorn = {
  Parser: j,
  version: so,
  defaultOptions: Lt,
  Position: je,
  SourceLocation: Ct,
  getLineInfo: nn,
  Node: Et,
  TokenType: L,
  tokTypes: r,
  keywordTypes: Gt,
  TokContext: ae,
  tokContexts: q,
  isIdentifierChar: ve,
  isIdentifierStart: ce,
  Token: si,
  isNewLine: _e,
  lineBreak: Q,
  lineBreakG: Ts,
  nonASCIIwhitespace: en
};
function oo(e, t) {
  return j.parse(e, t);
}
const ao = ["createObject", "dropObject", "removeRecords", "upsertRecords"], ro = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], Me = Pn(Fn);
async function mo() {
  try {
    console.info("🚀 Building configuration...");
    const e = JSON.parse(await B.readFile("package.json", "utf8")), t = JSON.parse(await B.readFile("config.json", "utf8"));
    e.name != null && (t.id = e.name.replace("@datapos/", "").replace("@data-positioning/", "")), e.version != null && (t.version = e.version), await B.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (e) {
    console.error("❌ Error building configuration.", e);
  }
}
async function bo(e) {
  try {
    console.info(`🚀 Building public directory index for identifier '${e}'...`);
    const t = {};
    async function i(u, s) {
      console.info(`⚙️ Processing directory '${u}'...`);
      const o = [], a = u.slice(`public/${e}`.length);
      t[a === "" ? "/" : a] = o;
      for (const l of s) {
        const f = `${u}/${l}`;
        try {
          const c = await B.stat(f);
          if (c.isDirectory()) {
            const h = await B.readdir(f), d = { childCount: h.length, name: l, typeId: "folder" };
            o.push(d), await i(f, h);
          } else {
            const h = { id: Ln(), lastModifiedAt: c.mtimeMs, name: l, size: c.size, typeId: "object" };
            o.push(h);
          }
        } catch (c) {
          throw new Error(`Unable to get information for '${l}' in 'buildPublicDirectoryIndex'. ${String(c)}`);
        }
      }
      o.sort((l, f) => {
        const c = l.typeId.localeCompare(f.typeId);
        return c === 0 ? l.name.localeCompare(f.name) : c;
      });
    }
    const n = await B.readdir(`public/${e}`);
    await i(`public/${e}`, n), await B.writeFile(`./public/${e}Index.json`, JSON.stringify(t), "utf8"), console.info("✅ Public directory index built.");
  } catch (t) {
    console.error("❌ Error building public directory index.", t);
  }
}
async function ko() {
  try {
    let e = function(d) {
      d.type === "FunctionDeclaration" ? console.log("function", d) : d.type === "MethodDefinition" && console.log("method", d);
    };
    console.info("🚀 Building connector configuration...");
    const t = JSON.parse(await B.readFile("package.json", "utf8")), i = JSON.parse(await B.readFile("config.json", "utf8")), n = await B.readFile("src/index.ts", "utf8"), u = oo(n, { ecmaVersion: 2020, sourceType: "module" });
    Vn(u, {
      FunctionDeclaration(d) {
        console.log("function", d);
      },
      MethodDefinition(d) {
        console.log("method", d);
      }
    });
    const s = Cs(n, { next: !0, module: !0 });
    e(s);
    let o = !1, a = !1;
    const l = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, f = [...n.matchAll(l)].filter((d) => d[1] == null && d[2] !== "constructor"), c = [];
    for (const d of f) {
      const y = d[2];
      c.push(y), ao.includes(y) && (o = !0), ro.includes(y) && (a = !0);
    }
    c.length > 0 ? console.info(`ℹ️  Implements ${c.length} operations.`) : console.warn("⚠️  Implements no operations.");
    let h;
    a && o ? h = "bidirectional" : a ? h = "source" : o ? h = "destination" : h = "unknown", h === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports ${h} usage.`), t.name != null && (i.id = t.name), i.operations = c, i.usageId = h, t.version != null && (i.version = t.version), await B.writeFile("config.json", JSON.stringify(i, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (e) {
    console.error("❌ Error building connector configuration.", e);
  }
}
async function po() {
  try {
    console.info("🚀 Building context configuration...");
    const e = JSON.parse(await B.readFile("package.json", "utf8")), t = JSON.parse(await B.readFile("config.json", "utf8")), i = await B.readFile("src/index.ts", "utf8"), n = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, u = [...i.matchAll(n)].filter((s) => s[1] == null && s[2] !== "constructor").map((s) => s[2]);
    e.name != null && (t.id = e.name), t.operations = u, e.version != null && (t.version = e.version), await B.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function yo() {
  try {
    console.info("🚀 Building presenter configuration...");
    const e = JSON.parse(await B.readFile("package.json", "utf8")), t = JSON.parse(await B.readFile("config.json", "utf8")), i = await B.readFile("src/index.ts", "utf8"), n = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, u = [...i.matchAll(n)].filter((s) => s[1] == null && s[2] !== "constructor").map((s) => s[2]);
    e.name != null && (t.id = e.name), t.operations = u, e.version != null && (t.version = e.version), await B.writeFile("config.json", JSON.stringify(t, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (e) {
    console.error("❌ Error building context configuration.", e);
  }
}
async function Co(e = "./") {
  try {
    console.info("🚀 Bumping version...");
    const t = JSON.parse(await B.readFile(`${e}package.json`, "utf8"));
    if (t.version == null)
      t.version = "0.0.001", await B.writeFile(`${e}package.json`, JSON.stringify(t, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${t.version}.`);
    else {
      const i = t.version, n = t.version.split(".");
      t.version = `${n[0]}.${n[1]}.${Number(n[2]) + 1}`, await B.writeFile(`${e}package.json`, JSON.stringify(t, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${t.version}.`);
    }
  } catch (t) {
    console.error("❌ Error bumping package version.", t);
  }
}
function Ao(e) {
  console.error(`❌ ${e} script not implemented.`);
}
async function vo() {
  const e = "<!-- DEPENDENCY_LICENSES_START -->", t = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const i = (await B.readFile("./licenses.md", "utf8")).trim(), n = await B.readFile("./README.md", "utf8"), u = n.indexOf(e), s = n.indexOf(t);
    (u === -1 || s === -1) && (console.error("❌ Dependency license markers not found in readme file."), process.exit(1));
    const o = n.substring(0, u + e.length) + `
` + i + `
` + n.substring(s);
    await B.writeFile("README.md", o, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (i) {
    console.error("❌ Error updating readme file.", i), process.exit(1);
  }
}
async function wo() {
  const e = "<!-- OWASP_BADGE_START -->", t = "<!-- OWASP_BADGE_END -->";
  try {
    const i = JSON.parse(await B.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), n = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const y of i.dependencies)
      if (y.vulnerabilities != null)
        for (const C of y.vulnerabilities) {
          const D = C.severity?.toLowerCase() ?? "unknown";
          D in n ? n[D]++ : n.unknown++;
        }
    const u = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, s = JSON.parse(await B.readFile("config.json", "utf8")), o = [];
    if (Object.values(n).reduce((y, C) => y + C, 0) === 0)
      console.info("✅ No vulnerabilities found."), o.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${s.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [y, C] of Object.entries(n)) {
        const D = u[y];
        if (console.warn(`⚠️  ${C} ${D.label} vulnerability(ies) found.`), C === 0) continue;
        const w = `https://img.shields.io/badge/OWASP-${C}%20${D.label}-${D.color}`;
        o.push(`[![OWASP](${w})](https://data-positioning.github.io/${s.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const l = await B.readFile("./README.md", "utf8"), f = l.indexOf(e), c = l.indexOf(t);
    (f === -1 || c === -1) && (console.error("❌ OWASP badge markers not found in README.md."), process.exit(1));
    const h = o.join(" "), d = l.substring(0, f + e.length) + h + l.substring(c);
    await B.writeFile("README.md", d, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (i) {
    console.error("❌ Error updating README with OWASP badges:", i), process.exit(1);
  }
}
async function Eo() {
  try {
    console.info("🚀 Sending deployment notice...");
    const e = JSON.parse(await B.readFile("config.json", "utf8")), t = {
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
async function Do() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const e = JSON.parse(await B.readFile("package.json", "utf8"));
    await Me("git add ."), await Me(`git commit -m "v${e.version}"`), await Me("git push origin main:main"), console.info(`✅ Synchronised version ${e.version} with GitHub.`);
  } catch (e) {
    console.error("❌ Error synchronising with GitHub.", e);
  }
}
async function xo(e, t) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(u, s, o) {
      for (const a of o) {
        const l = `${u}/${a}`, f = `${s}/${a}`;
        if ((await B.stat(l)).isDirectory()) {
          const h = await B.readdir(l);
          await i(l, f, h);
        } else {
          console.info(`⚙️ Uploading '${u}/${a}'...`);
          const h = `wrangler r2 object put "datapos-sample-data-eu/${s}/${a}" --file="${u}/${a}" --jurisdiction=eu --remote`, d = await Me(h);
          if (d.stderr) throw new Error(d.stderr);
        }
      }
    }
    const n = await B.readdir(`${e}/${t}/`);
    await i(`${e}/${t}`, t, n), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function To() {
  try {
    console.info("🚀 Uploading module configuration....");
    const e = JSON.parse(await B.readFile("config.json", "utf8")), t = e.id, i = {
      body: JSON.stringify(e),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, n = await fetch(`https://api.datapos.app/states/${t}`, i);
    if (!n.ok) throw new Error(await n.text());
    console.info("✅ Module configuration uploaded.");
  } catch (e) {
    console.error("❌ Error uploading module configuration.", e);
  }
}
async function So(e) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await B.readFile("package.json", "utf8")).version}`;
    async function n(u, s = "") {
      const o = await B.readdir(u, { withFileTypes: !0 });
      for (const a of o) {
        const l = `${u}/${a.name}`, f = s ? `${s}/${a.name}` : a.name;
        if (!a.isDirectory()) {
          const c = `${e}_${i}/${f}`.replace(/\\/g, "/"), h = a.name.endsWith(".js") ? "application/javascript" : a.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${f}' → '${c}'...`);
          const { stderr: d } = await Me(`wrangler r2 object put "${c}" --file="${l}" --content-type ${h} --jurisdiction=eu --remote`);
          if (d) throw new Error(d);
        }
      }
    }
    await n("dist"), console.info("✅ Module uploaded to R2.");
  } catch (t) {
    console.error("❌ Error uploading module to R2.", t);
  }
}
export {
  mo as buildConfig,
  ko as buildConnectorConfig,
  po as buildContextConfig,
  yo as buildPresenterConfig,
  bo as buildPublicDirectoryIndex,
  Co as bumpVersion,
  Ao as echoScriptNotImplemented,
  vo as insertLicensesIntoReadme,
  wo as insertOWASPDependencyCheckBadgeIntoReadme,
  Eo as sendDeploymentNotice,
  Do as syncWithGitHub,
  xo as uploadDirectoryToR2,
  To as uploadModuleConfigToDO,
  So as uploadModuleToR2
};
