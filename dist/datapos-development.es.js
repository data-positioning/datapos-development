import { exec as Us } from "node:child_process";
import { promises as K } from "node:fs";
import { nanoid as Hs } from "nanoid";
import { promisify as Js } from "node:util";
const Tn = ((t, e) => {
  const i = new Uint32Array(69632);
  let n = 0, a = 0;
  for (; n < 2597; ) {
    const r = t[n++];
    if (r < 0)
      a -= r;
    else {
      let u = t[n++];
      r & 2 && (u = e[u]), r & 1 ? i.fill(u, a, a += t[n++]) : i[a++] = u;
    }
  }
  return i;
})([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 63, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 64, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 58, 2, 7, 2, 6, 0, 4286643967, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191, 0, 929054175, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1885355487, 0, 982991, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 69, 0, 4284449919, 0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 70, 0, 1073741743, 0, 4093607775, -1, 0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137, -1, 3, 0, 2, 2, 23, 2, 0, 2, 9, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2151677951, 2, 29, 2, 10, 0, 909311, 3, 0, 2, 0, 814743551, 2, 48, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2, 30, 2, 8, 0, 268374015, 2, 108, 2, 51, 2, 0, 2, 79, 0, 134153215, -1, 2, 7, 2, 0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 9, 2, 18, 3, 0, 2, 2, 53, 0, 1046528, 3, 0, 3, 2, 10, 2, 0, 2, 127, 0, 4294960127, 2, 9, 2, 6, 2, 11, 0, 4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, 0, 12288, 2, 54, 0, 1048577, 2, 84, 2, 14, -1, 2, 14, 0, 131042, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671, 2, 21, 3, 88, 2, 2, 0, -16, 2, 89, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 2, 18, 2, 0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 2, 0, 0, 4351, 2, 0, 2, 10, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 10, 2, 20, 3, 0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, 2, 25, 0, 1638399, 0, 57344, 2, 107, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5, 2, 28, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 65, 2, 6, 2, 12, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 23, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 47, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 125, 0, 4227858432, 2, 20, 2, 43, 2, 36, 2, 17, 2, 37, 2, 17, 2, 124, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888, 2, 0, 2, 12, 0, 4294901764, 2, 145, 2, 0, 2, 56, 2, 55, 0, 5242879, 3, 0, 2, 0, 402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40, 0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0, 2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 59, 2, 38, -5, 2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 133, 0, 4190109695, 2, 52, -2, 2, 134, 0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 66, 2, 17, 2, 0, 2, 42, -3, 2, 31, -2, 2, 0, 2, 45, 2, 57, 2, 44, 2, 45, 2, 135, 2, 46, 0, 8388351, -2, 2, 136, 0, 3028287487, 2, 47, 2, 138, 0, 33259519, 2, 23, 2, 7, 2, 48, -7, 2, 21, 0, 4294836223, 0, 3355443199, 0, 134152199, -2, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2, 0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 8323099, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 0, 1677656575, -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 90, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2, 155, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 58, 2, 98, -3, 2, 0, 0, 1073684479, 0, 17407, -9, 2, 17, 2, 49, 2, 0, 2, 32, -14, 2, 17, 2, 32, -6, 2, 17, 2, 12, -6, 2, 8, 0, 3225419775, -7, 2, 156, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 59, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -105, 2, 26, -32, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -22116, 3, 0, 7, 2, 25, -6130, 3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 63, 2, 0, 2, 34, -1, 2, 17, 2, 64, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 25, 2, 65, 3, 0, 2, 0, 131135, 2, 96, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 6, 0, 65279, 2, 0, 2, 48, -1, 2, 97, 2, 66, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 68, 2, 67, 0, 33554435, 2, 131, 2, 68, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 67, -1, 0, 4294828e3, 0, 603979263, 0, 922746880, 0, 3, 0, 4294828001, 0, 602930687, 0, 1879048192, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 69, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 70, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 71, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0, 2, 10, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8, -1, 2, 17, 2, 51, 2, 0, 2, 79, 2, 48, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2, 28, 2, 10, 0, 8160, -1, 2, 126, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776, 2, 9, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83, -3, 2, 84, 2, 14, -3, 2, 85, 2, 86, 2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 88, 2, -17, 2, 89, 0, 524157950, 2, 4, 2, 0, 2, 90, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 25, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 0, 4294965179, 0, 7, 2, 0, 2, 10, 2, 93, 2, 10, -1, 0, 1761345536, 2, 96, 0, 4294901823, 2, 38, 2, 20, 2, 97, 2, 35, 2, 98, 0, 2080440287, 2, 0, 2, 34, 2, 154, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2, 101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2, 103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31, 2, 106, -3, 2, 107, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 108, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20, 2, 0, 2, 36, -1, 2, 0, 2, 65, 2, 6, 2, 30, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 17, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1, 3, 20, 2, -1, 2, 33, 2, 124, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 96, 0, 4294934591, 2, 37, -7, 2, 0, 0, 197631, 2, 125, -1, 2, 20, 2, 43, 2, 37, 2, 17, 0, 3, 2, 17, 2, 124, 2, 21, 2, 126, 2, 127, -1, 0, 2490368, 2, 126, 2, 25, 2, 17, 2, 34, 2, 126, 2, 38, 0, 4294901904, 0, 4718591, 2, 126, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743, 0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 68, 0, 3758161920, 0, 3, 2, 132, 0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176, -5, 2, 0, 2, 49, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2, 2, 12, -1, 2, 38, -5, 2, 0, 2, 18, -3, 3, 0, 2, 2, 54, 2, 133, 0, 2147549183, 0, 2, -2, 2, 134, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, 2, 17, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 57, 2, 49, 0, 1, 2, 135, 2, 25, -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, 2, 17, 2, 7, -8, 2, 35, 0, 4294836212, 2, 10, -3, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2, 38, -213, 2, 9, -55, 3, 0, 17, 2, 42, 2, 8, 2, 17, 2, 0, 2, 8, 2, 17, 2, 58, 2, 0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 71, -6, 3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 67583, -1, 2, 105, -2, 0, 8126475, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 2, 145, -187, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 2, 154, -57, 2, 8, 2, 155, -7, 2, 17, 2, 0, 2, 58, -4, 2, 0, 0, 1065361407, 0, 16384, -9, 2, 17, 2, 58, 2, 0, 2, 18, -14, 2, 17, 2, 18, -6, 2, 17, 0, 81919, -6, 2, 8, 0, 3223273399, -7, 2, 156, 3, 0, 6, 2, 124, -1, 3, 0, 2, 0, 2063, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -138, 3, 0, 1335, -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -28252], [4294967295, 4294967291, 4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647, 1073741823, 1048575, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4294901759, 4294901760, 4095, 262143, 536870911, 8388607, 4160749567, 4294902783, 4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431, 4294901888, 4286578687, 67043329, 4294770687, 67043583, 1023, 32767, 15, 2047999, 67043343, 67051519, 2147483648, 4294902e3, 4292870143, 4294966783, 16383, 67047423, 4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4286578688, 4294967292, 4294965759, 4294836224, 4294966272, 4294967280, 32768, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231, 134086655, 4294966591, 2445279231, 3670015, 31, 252, 4294967288, 16777215, 4294705151, 3221208447, 4294902271, 4294549472, 4294921215, 4285526655, 4294966527, 4294705152, 4294966143, 64, 4294966719, 3774873592, 4194303999, 1877934080, 262151, 2555904, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901761]), zs = (t) => (Tn[(t >>> 5) + 0] >>> t & 31 & 1) !== 0, En = (t) => (Tn[(t >>> 5) + 34816] >>> t & 31 & 1) !== 0, W = [
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
], Ws = [
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
], wn = [
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
function Je(t) {
  return t <= 127 ? Ws[t] > 0 : En(t);
}
function qe(t) {
  return t <= 127 ? wn[t] > 0 : zs(t) || t === 8204 || t === 8205;
}
function T(t) {
  return t.column++, t.currentChar = t.source.charCodeAt(++t.index);
}
function Ii(t) {
  const e = t.currentChar;
  if ((e & 64512) !== 55296)
    return 0;
  const i = t.source.charCodeAt(t.index + 1);
  return (i & 64512) !== 56320 ? 0 : 65536 + ((e & 1023) << 10) + (i & 1023);
}
function Ni(t, e) {
  t.currentChar = t.source.charCodeAt(++t.index), t.flags |= 1, (e & 4) === 0 && (t.column = 0, t.line++);
}
function ee(t) {
  t.flags |= 1, t.currentChar = t.source.charCodeAt(++t.index), t.column = 0, t.line++;
}
function Ks(t) {
  return t === 160 || t === 65279 || t === 133 || t === 5760 || t >= 8192 && t <= 8203 || t === 8239 || t === 8287 || t === 12288 || t === 8201 || t === 65519;
}
function St(t) {
  return t < 65 ? t - 48 : t - 65 + 10 & 15;
}
function Xs(t) {
  switch (t) {
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
      return (t & 143360) === 143360 ? "Identifier" : (t & 4096) === 4096 ? "Keyword" : "Punctuator";
  }
}
const Sn = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
function $s(t) {
  const { source: e } = t;
  t.currentChar === 35 && e.charCodeAt(t.index + 1) === 33 && (T(t), T(t), Li(t, e, 0, 4, t.tokenStart));
}
function an(t, e, i, n, a, r) {
  return n & 2 && t.report(0), Li(t, e, i, a, r);
}
function Li(t, e, i, n, a) {
  const { index: r } = t;
  for (t.tokenIndex = t.index, t.tokenLine = t.line, t.tokenColumn = t.column; t.index < t.end; ) {
    if (W[t.currentChar] & 8) {
      const u = t.currentChar === 13;
      ee(t), u && t.index < t.end && t.currentChar === 10 && (t.currentChar = e.charCodeAt(++t.index));
      break;
    } else if ((t.currentChar ^ 8232) <= 1) {
      ee(t);
      break;
    }
    T(t), t.tokenIndex = t.index, t.tokenLine = t.line, t.tokenColumn = t.column;
  }
  if (t.options.onComment) {
    const u = {
      start: {
        line: a.line,
        column: a.column
      },
      end: {
        line: t.tokenLine,
        column: t.tokenColumn
      }
    };
    t.options.onComment(Sn[n & 255], e.slice(r, t.tokenIndex), a.index, t.tokenIndex, u);
  }
  return i | 1;
}
function Qs(t, e, i) {
  const { index: n } = t;
  for (; t.index < t.end; )
    if (t.currentChar < 43) {
      let a = !1;
      for (; t.currentChar === 42; )
        if (a || (i &= -5, a = !0), T(t) === 47) {
          if (T(t), t.options.onComment) {
            const r = {
              start: {
                line: t.tokenLine,
                column: t.tokenColumn
              },
              end: {
                line: t.line,
                column: t.column
              }
            };
            t.options.onComment(Sn[1], e.slice(n, t.index - 2), n - 2, t.index, r);
          }
          return t.tokenIndex = t.index, t.tokenLine = t.line, t.tokenColumn = t.column, i;
        }
      if (a)
        continue;
      W[t.currentChar] & 8 ? t.currentChar === 13 ? (i |= 5, ee(t)) : (Ni(t, i), i = i & -5 | 1) : T(t);
    } else (t.currentChar ^ 8232) <= 1 ? (i = i & -5 | 1, ee(t)) : (i &= -5, T(t));
  t.report(18);
}
const Ys = {
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
class ot extends SyntaxError {
  start;
  end;
  range;
  loc;
  description;
  constructor(e, i, n, ...a) {
    const r = Ys[n].replace(/%(\d+)/g, (h, f) => a[f]), u = "[" + e.line + ":" + e.column + "-" + i.line + ":" + i.column + "]: " + r;
    super(u), this.start = e.index, this.end = i.index, this.range = [e.index, i.index], this.loc = {
      start: { line: e.line, column: e.column },
      end: { line: i.line, column: i.column }
    }, this.description = r;
  }
}
function ei(t, e) {
  return Object.hasOwn(t, e) ? t[e] : void 0;
}
const X = [
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
], Dn = {
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
function rn(t, e, i) {
  for (; wn[T(t)]; )
    ;
  return t.tokenValue = t.source.slice(t.tokenIndex, t.index), t.currentChar !== 92 && t.currentChar <= 126 ? ei(Dn, t.tokenValue) ?? 208897 : _i(t, e, 0, i);
}
function Zs(t, e) {
  const i = Pn(t);
  return Je(i) || t.report(5), t.tokenValue = String.fromCodePoint(i), _i(t, e, 1, W[i] & 4);
}
function _i(t, e, i, n) {
  let a = t.index;
  for (; t.index < t.end; )
    if (t.currentChar === 92) {
      t.tokenValue += t.source.slice(a, t.index), i = 1;
      const u = Pn(t);
      qe(u) || t.report(5), n = n && W[u] & 4, t.tokenValue += String.fromCodePoint(u), a = t.index;
    } else {
      const u = Ii(t);
      if (u > 0)
        qe(u) || t.report(20, String.fromCodePoint(u)), t.currentChar = u, t.index++, t.column++;
      else if (!qe(t.currentChar))
        break;
      T(t);
    }
  t.index <= t.end && (t.tokenValue += t.source.slice(a, t.index));
  const { length: r } = t.tokenValue;
  if (n && r >= 2 && r <= 11) {
    const u = ei(Dn, t.tokenValue);
    return u === void 0 ? 208897 | (i ? -2147483648 : 0) : i ? u === 209006 ? (e & 2050) === 0 ? u | -2147483648 : -2147483528 : e & 1 ? u === 36970 || (u & 36864) === 36864 ? -2147483527 : (u & 20480) === 20480 ? e & 262144 && (e & 8) === 0 ? u | -2147483648 : -2147483528 : -2147274630 : e & 262144 && (e & 8) === 0 && (u & 20480) === 20480 ? u | -2147483648 : u === 241771 ? e & 262144 ? -2147274630 : e & 1024 ? -2147483528 : u | -2147483648 : u === 209005 ? -2147274630 : (u & 36864) === 36864 ? u | 12288 | -2147483648 : -2147483528 : u;
  }
  return 208897 | (i ? -2147483648 : 0);
}
function Gs(t) {
  let e = T(t);
  if (e === 92)
    return 130;
  const i = Ii(t);
  return i && (e = i), Je(e) || t.report(96), 130;
}
function Pn(t) {
  return t.source.charCodeAt(t.index + 1) !== 117 && t.report(5), t.currentChar = t.source.charCodeAt(t.index += 2), t.column += 2, ta(t);
}
function ta(t) {
  let e = 0;
  const i = t.currentChar;
  if (i === 123) {
    const u = t.index - 2;
    for (; W[T(t)] & 64; )
      if (e = e << 4 | St(t.currentChar), e > 1114111)
        throw new ot({ index: u, line: t.line, column: t.column }, t.currentLocation, 104);
    if (t.currentChar !== 125)
      throw new ot({ index: u, line: t.line, column: t.column }, t.currentLocation, 7);
    return T(t), e;
  }
  (W[i] & 64) === 0 && t.report(7);
  const n = t.source.charCodeAt(t.index + 1);
  (W[n] & 64) === 0 && t.report(7);
  const a = t.source.charCodeAt(t.index + 2);
  (W[a] & 64) === 0 && t.report(7);
  const r = t.source.charCodeAt(t.index + 3);
  return (W[r] & 64) === 0 && t.report(7), e = St(i) << 12 | St(n) << 8 | St(a) << 4 | St(r), t.currentChar = t.source.charCodeAt(t.index += 4), t.column += 4, e;
}
function on(t, e, i) {
  let n = t.currentChar, a = 0, r = 9, u = i & 64 ? 0 : 1, h = 0, f = 0;
  if (i & 64)
    a = "." + Ve(t, n), n = t.currentChar, n === 110 && t.report(12);
  else {
    if (n === 48)
      if (n = T(t), (n | 32) === 120) {
        for (i = 136, n = T(t); W[n] & 4160; ) {
          if (n === 95) {
            f || t.report(152), f = 0, n = T(t);
            continue;
          }
          f = 1, a = a * 16 + St(n), h++, n = T(t);
        }
        (h === 0 || !f) && t.report(h === 0 ? 21 : 153);
      } else if ((n | 32) === 111) {
        for (i = 132, n = T(t); W[n] & 4128; ) {
          if (n === 95) {
            f || t.report(152), f = 0, n = T(t);
            continue;
          }
          f = 1, a = a * 8 + (n - 48), h++, n = T(t);
        }
        (h === 0 || !f) && t.report(h === 0 ? 0 : 153);
      } else if ((n | 32) === 98) {
        for (i = 130, n = T(t); W[n] & 4224; ) {
          if (n === 95) {
            f || t.report(152), f = 0, n = T(t);
            continue;
          }
          f = 1, a = a * 2 + (n - 48), h++, n = T(t);
        }
        (h === 0 || !f) && t.report(h === 0 ? 0 : 153);
      } else if (W[n] & 32)
        for (e & 1 && t.report(1), i = 1; W[n] & 16; ) {
          if (W[n] & 512) {
            i = 32, u = 0;
            break;
          }
          a = a * 8 + (n - 48), n = T(t);
        }
      else W[n] & 512 ? (e & 1 && t.report(1), t.flags |= 64, i = 32) : n === 95 && t.report(0);
    if (i & 48) {
      if (u) {
        for (; r >= 0 && W[n] & 4112; ) {
          if (n === 95) {
            if (n = T(t), n === 95 || i & 32)
              throw new ot(t.currentLocation, { index: t.index + 1, line: t.line, column: t.column }, 152);
            f = 1;
            continue;
          }
          f = 0, a = 10 * a + (n - 48), n = T(t), --r;
        }
        if (f)
          throw new ot(t.currentLocation, { index: t.index + 1, line: t.line, column: t.column }, 153);
        if (r >= 0 && !Je(n) && n !== 46)
          return t.tokenValue = a, t.options.raw && (t.tokenRaw = t.source.slice(t.tokenIndex, t.index)), 134283266;
      }
      a += Ve(t, n), n = t.currentChar, n === 46 && (T(t) === 95 && t.report(0), i = 64, a += "." + Ve(t, t.currentChar), n = t.currentChar);
    }
  }
  const l = t.index;
  let m = 0;
  if (n === 110 && i & 128)
    m = 1, n = T(t);
  else if ((n | 32) === 101) {
    n = T(t), W[n] & 256 && (n = T(t));
    const { index: y } = t;
    (W[n] & 16) === 0 && t.report(11), a += t.source.substring(l, y) + Ve(t, n), n = t.currentChar;
  }
  return (t.index < t.end && W[n] & 16 || Je(n)) && t.report(13), m ? (t.tokenRaw = t.source.slice(t.tokenIndex, t.index), t.tokenValue = BigInt(t.tokenRaw.slice(0, -1).replaceAll("_", "")), 134283388) : (t.tokenValue = i & 15 ? a : i & 32 ? parseFloat(t.source.substring(t.tokenIndex, t.index)) : +a, t.options.raw && (t.tokenRaw = t.source.slice(t.tokenIndex, t.index)), 134283266);
}
function Ve(t, e) {
  let i = 0, n = t.index, a = "";
  for (; W[e] & 4112; ) {
    if (e === 95) {
      const { index: r } = t;
      if (e = T(t), e === 95)
        throw new ot(t.currentLocation, { index: t.index + 1, line: t.line, column: t.column }, 152);
      i = 1, a += t.source.substring(n, r), n = t.index;
      continue;
    }
    i = 0, e = T(t);
  }
  if (i)
    throw new ot(t.currentLocation, { index: t.index + 1, line: t.line, column: t.column }, 153);
  return a + t.source.substring(n, t.index);
}
var Xt;
(function(t) {
  t[t.Empty = 0] = "Empty", t[t.Escape = 1] = "Escape", t[t.Class = 2] = "Class";
})(Xt || (Xt = {}));
var lt;
(function(t) {
  t[t.Empty = 0] = "Empty", t[t.IgnoreCase = 1] = "IgnoreCase", t[t.Global = 2] = "Global", t[t.Multiline = 4] = "Multiline", t[t.Unicode = 16] = "Unicode", t[t.Sticky = 8] = "Sticky", t[t.DotAll = 32] = "DotAll", t[t.Indices = 64] = "Indices", t[t.UnicodeSets = 128] = "UnicodeSets";
})(lt || (lt = {}));
function ea(t) {
  const e = t.index;
  let i = Xt.Empty;
  t: for (; ; ) {
    const l = t.currentChar;
    if (T(t), i & Xt.Escape)
      i &= ~Xt.Escape;
    else
      switch (l) {
        case 47:
          if (i)
            break;
          break t;
        case 92:
          i |= Xt.Escape;
          break;
        case 91:
          i |= Xt.Class;
          break;
        case 93:
          i &= Xt.Escape;
          break;
      }
    if ((l === 13 || l === 10 || l === 8232 || l === 8233) && t.report(34), t.index >= t.source.length)
      return t.report(34);
  }
  const n = t.index - 1;
  let a = lt.Empty, r = t.currentChar;
  const { index: u } = t;
  for (; qe(r); ) {
    switch (r) {
      case 103:
        a & lt.Global && t.report(36, "g"), a |= lt.Global;
        break;
      case 105:
        a & lt.IgnoreCase && t.report(36, "i"), a |= lt.IgnoreCase;
        break;
      case 109:
        a & lt.Multiline && t.report(36, "m"), a |= lt.Multiline;
        break;
      case 117:
        a & lt.Unicode && t.report(36, "u"), a & lt.UnicodeSets && t.report(36, "vu"), a |= lt.Unicode;
        break;
      case 118:
        a & lt.Unicode && t.report(36, "uv"), a & lt.UnicodeSets && t.report(36, "v"), a |= lt.UnicodeSets;
        break;
      case 121:
        a & lt.Sticky && t.report(36, "y"), a |= lt.Sticky;
        break;
      case 115:
        a & lt.DotAll && t.report(36, "s"), a |= lt.DotAll;
        break;
      case 100:
        a & lt.Indices && t.report(36, "d"), a |= lt.Indices;
        break;
      default:
        t.report(35);
    }
    r = T(t);
  }
  const h = t.source.slice(u, t.index), f = t.source.slice(e, n);
  return t.tokenRegExp = { pattern: f, flags: h }, t.options.raw && (t.tokenRaw = t.source.slice(t.tokenIndex, t.index)), t.tokenValue = ia(t, f, h), 65540;
}
function ia(t, e, i) {
  try {
    return new RegExp(e, i);
  } catch {
    if (!t.options.validateRegex)
      return null;
    t.report(34);
  }
}
function na(t, e, i) {
  const { index: n } = t;
  let a = "", r = T(t), u = t.index;
  for (; (W[r] & 8) === 0; ) {
    if (r === i)
      return a += t.source.slice(u, t.index), T(t), t.options.raw && (t.tokenRaw = t.source.slice(n, t.index)), t.tokenValue = a, 134283267;
    if ((r & 8) === 8 && r === 92) {
      if (a += t.source.slice(u, t.index), r = T(t), r < 127 || r === 8232 || r === 8233) {
        const h = In(t, e, r);
        h >= 0 ? a += String.fromCodePoint(h) : Nn(t, h, 0);
      } else
        a += String.fromCodePoint(r);
      u = t.index + 1;
    } else (r === 8232 || r === 8233) && (t.column = -1, t.line++);
    t.index >= t.end && t.report(16), r = T(t);
  }
  t.report(16);
}
function In(t, e, i, n = 0) {
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
      if (t.index < t.end) {
        const a = t.source.charCodeAt(t.index + 1);
        a === 10 && (t.index = t.index + 1, t.currentChar = a);
      }
    case 10:
    case 8232:
    case 8233:
      return t.column = -1, t.line++, -1;
    case 48:
    case 49:
    case 50:
    case 51: {
      let a = i - 48, r = t.index + 1, u = t.column + 1;
      if (r < t.end) {
        const h = t.source.charCodeAt(r);
        if ((W[h] & 32) === 0) {
          if (a !== 0 || W[h] & 512) {
            if (e & 1 || n)
              return -2;
            t.flags |= 64;
          }
        } else {
          if (e & 1 || n)
            return -2;
          if (t.currentChar = h, a = a << 3 | h - 48, r++, u++, r < t.end) {
            const f = t.source.charCodeAt(r);
            W[f] & 32 && (t.currentChar = f, a = a << 3 | f - 48, r++, u++);
          }
          t.flags |= 64;
        }
        t.index = r - 1, t.column = u - 1;
      }
      return a;
    }
    case 52:
    case 53:
    case 54:
    case 55: {
      if (n || e & 1)
        return -2;
      let a = i - 48;
      const r = t.index + 1, u = t.column + 1;
      if (r < t.end) {
        const h = t.source.charCodeAt(r);
        W[h] & 32 && (a = a << 3 | h - 48, t.currentChar = h, t.index = r, t.column = u);
      }
      return t.flags |= 64, a;
    }
    case 120: {
      const a = T(t);
      if ((W[a] & 64) === 0)
        return -4;
      const r = St(a), u = T(t);
      if ((W[u] & 64) === 0)
        return -4;
      const h = St(u);
      return r << 4 | h;
    }
    case 117: {
      const a = T(t);
      if (t.currentChar === 123) {
        let r = 0;
        for (; (W[T(t)] & 64) !== 0; )
          if (r = r << 4 | St(t.currentChar), r > 1114111)
            return -5;
        return t.currentChar < 1 || t.currentChar !== 125 ? -4 : r;
      } else {
        if ((W[a] & 64) === 0)
          return -4;
        const r = t.source.charCodeAt(t.index + 1);
        if ((W[r] & 64) === 0)
          return -4;
        const u = t.source.charCodeAt(t.index + 2);
        if ((W[u] & 64) === 0)
          return -4;
        const h = t.source.charCodeAt(t.index + 3);
        return (W[h] & 64) === 0 ? -4 : (t.index += 3, t.column += 3, t.currentChar = t.source.charCodeAt(t.index), St(a) << 12 | St(r) << 8 | St(u) << 4 | St(h));
      }
    }
    case 56:
    case 57:
      if (n || !t.options.webcompat || e & 1)
        return -3;
      t.flags |= 4096;
    default:
      return i;
  }
}
function Nn(t, e, i) {
  switch (e) {
    case -1:
      return;
    case -2:
      t.report(i ? 2 : 1);
    case -3:
      t.report(i ? 3 : 14);
    case -4:
      t.report(7);
    case -5:
      t.report(104);
  }
}
function Ln(t, e) {
  const { index: i } = t;
  let n = 67174409, a = "", r = T(t);
  for (; r !== 96; ) {
    if (r === 36 && t.source.charCodeAt(t.index + 1) === 123) {
      T(t), n = 67174408;
      break;
    } else if (r === 92)
      if (r = T(t), r > 126)
        a += String.fromCodePoint(r);
      else {
        const { index: u, line: h, column: f } = t, l = In(t, e | 1, r, 1);
        if (l >= 0)
          a += String.fromCodePoint(l);
        else if (l !== -1 && e & 64) {
          t.index = u, t.line = h, t.column = f, a = null, r = sa(t, r), r < 0 && (n = 67174408);
          break;
        } else
          Nn(t, l, 1);
      }
    else t.index < t.end && (r === 13 && t.source.charCodeAt(t.index) === 10 && (a += String.fromCodePoint(r), t.currentChar = t.source.charCodeAt(++t.index)), ((r & 83) < 3 && r === 10 || (r ^ 8232) <= 1) && (t.column = -1, t.line++), a += String.fromCodePoint(r));
    t.index >= t.end && t.report(17), r = T(t);
  }
  return T(t), t.tokenValue = a, t.tokenRaw = t.source.slice(i + 1, t.index - (n === 67174409 ? 1 : 2)), n;
}
function sa(t, e) {
  for (; e !== 96; ) {
    switch (e) {
      case 36: {
        const i = t.index + 1;
        if (i < t.end && t.source.charCodeAt(i) === 123)
          return t.index = i, t.column++, -e;
        break;
      }
      case 10:
      case 8232:
      case 8233:
        t.column = -1, t.line++;
    }
    t.index >= t.end && t.report(17), e = T(t);
  }
  return e;
}
function aa(t, e) {
  return t.index >= t.end && t.report(0), t.index--, t.column--, Ln(t, e);
}
const ra = [
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
function w(t, e) {
  t.flags = (t.flags | 1) ^ 1, t.startIndex = t.index, t.startColumn = t.column, t.startLine = t.line, t.setToken(_n(t, e, 0));
}
function _n(t, e, i) {
  const n = t.index === 0, { source: a } = t;
  for (; t.index < t.end; ) {
    t.tokenIndex = t.index, t.tokenColumn = t.column, t.tokenLine = t.line;
    let r = t.currentChar;
    if (r <= 126) {
      const u = ra[r];
      switch (u) {
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
          return T(t), u;
        case 208897:
          return rn(t, e, 0);
        case 4096:
          return rn(t, e, 1);
        case 134283266:
          return on(t, e, 144);
        case 134283267:
          return na(t, e, r);
        case 131:
          return Ln(t, e);
        case 136:
          return Zs(t, e);
        case 130:
          return Gs(t);
        case 127:
          T(t);
          break;
        case 129:
          i |= 5, ee(t);
          break;
        case 135:
          Ni(t, i), i = i & -5 | 1;
          break;
        case 8456256: {
          const h = T(t);
          if (t.index < t.end) {
            if (h === 60)
              return t.index < t.end && T(t) === 61 ? (T(t), 4194332) : 8390978;
            if (h === 61)
              return T(t), 8390718;
            if (h === 33) {
              const f = t.index + 1;
              if (f + 1 < t.end && a.charCodeAt(f) === 45 && a.charCodeAt(f + 1) == 45) {
                t.column += 3, t.currentChar = a.charCodeAt(t.index += 3), i = an(t, a, i, e, 2, t.tokenStart);
                continue;
              }
              return 8456256;
            }
          }
          return 8456256;
        }
        case 1077936155: {
          T(t);
          const h = t.currentChar;
          return h === 61 ? T(t) === 61 ? (T(t), 8390458) : 8390460 : h === 62 ? (T(t), 10) : 1077936155;
        }
        case 16842798:
          return T(t) !== 61 ? 16842798 : T(t) !== 61 ? 8390461 : (T(t), 8390459);
        case 8391477:
          return T(t) !== 61 ? 8391477 : (T(t), 4194340);
        case 8391476: {
          if (T(t), t.index >= t.end)
            return 8391476;
          const h = t.currentChar;
          return h === 61 ? (T(t), 4194338) : h !== 42 ? 8391476 : T(t) !== 61 ? 8391735 : (T(t), 4194335);
        }
        case 8389959:
          return T(t) !== 61 ? 8389959 : (T(t), 4194341);
        case 25233968: {
          T(t);
          const h = t.currentChar;
          return h === 43 ? (T(t), 33619993) : h === 61 ? (T(t), 4194336) : 25233968;
        }
        case 25233969: {
          T(t);
          const h = t.currentChar;
          if (h === 45) {
            if (T(t), (i & 1 || n) && t.currentChar === 62) {
              t.options.webcompat || t.report(112), T(t), i = an(t, a, i, e, 3, t.tokenStart);
              continue;
            }
            return 33619994;
          }
          return h === 61 ? (T(t), 4194337) : 25233969;
        }
        case 8457014: {
          if (T(t), t.index < t.end) {
            const h = t.currentChar;
            if (h === 47) {
              T(t), i = Li(t, a, i, 0, t.tokenStart);
              continue;
            }
            if (h === 42) {
              T(t), i = Qs(t, a, i);
              continue;
            }
            if (e & 32)
              return ea(t);
            if (h === 61)
              return T(t), 4259875;
          }
          return 8457014;
        }
        case 67108877: {
          const h = T(t);
          if (h >= 48 && h <= 57)
            return on(t, e, 80);
          if (h === 46) {
            const f = t.index + 1;
            if (f < t.end && a.charCodeAt(f) === 46)
              return t.column += 2, t.currentChar = a.charCodeAt(t.index += 2), 14;
          }
          return 67108877;
        }
        case 8389702: {
          T(t);
          const h = t.currentChar;
          return h === 124 ? (T(t), t.currentChar === 61 ? (T(t), 4194344) : 8913465) : h === 61 ? (T(t), 4194342) : 8389702;
        }
        case 8390721: {
          T(t);
          const h = t.currentChar;
          if (h === 61)
            return T(t), 8390719;
          if (h !== 62)
            return 8390721;
          if (T(t), t.index < t.end) {
            const f = t.currentChar;
            if (f === 62)
              return T(t) === 61 ? (T(t), 4194334) : 8390980;
            if (f === 61)
              return T(t), 4194333;
          }
          return 8390979;
        }
        case 8390213: {
          T(t);
          const h = t.currentChar;
          return h === 38 ? (T(t), t.currentChar === 61 ? (T(t), 4194345) : 8913720) : h === 61 ? (T(t), 4194343) : 8390213;
        }
        case 22: {
          let h = T(t);
          if (h === 63)
            return T(t), t.currentChar === 61 ? (T(t), 4194346) : 276824445;
          if (h === 46) {
            const f = t.index + 1;
            if (f < t.end && (h = a.charCodeAt(f), !(h >= 48 && h <= 57)))
              return T(t), 67108990;
          }
          return 22;
        }
      }
    } else {
      if ((r ^ 8232) <= 1) {
        i = i & -5 | 1, ee(t);
        continue;
      }
      const u = Ii(t);
      if (u > 0 && (r = u), En(r))
        return t.tokenValue = "", _i(t, e, 0, 0);
      if (Ks(r)) {
        T(t);
        continue;
      }
      t.report(20, String.fromCodePoint(r));
    }
  }
  return 1048576;
}
function kt(t, e) {
  (t.flags & 1) === 0 && (t.getToken() & 1048576) !== 1048576 && t.report(30, X[t.getToken() & 255]), H(t, e, 1074790417) || t.options.onInsertedSemicolon?.(t.startIndex);
}
function Bn(t, e, i, n) {
  return e - i < 13 && n === "use strict" && ((t.getToken() & 1048576) === 1048576 || t.flags & 1) ? 1 : 0;
}
function Bi(t, e, i) {
  return t.getToken() !== i ? 0 : (w(t, e), 1);
}
function H(t, e, i) {
  return t.getToken() !== i ? !1 : (w(t, e), !0);
}
function L(t, e, i) {
  t.getToken() !== i && t.report(25, X[i & 255]), w(t, e);
}
function Vt(t, e) {
  switch (e.type) {
    case "ArrayExpression": {
      e.type = "ArrayPattern";
      const { elements: i } = e;
      for (let n = 0, a = i.length; n < a; ++n) {
        const r = i[n];
        r && Vt(t, r);
      }
      return;
    }
    case "ObjectExpression": {
      e.type = "ObjectPattern";
      const { properties: i } = e;
      for (let n = 0, a = i.length; n < a; ++n)
        Vt(t, i[n]);
      return;
    }
    case "AssignmentExpression":
      e.type = "AssignmentPattern", e.operator !== "=" && t.report(71), delete e.operator, Vt(t, e.left);
      return;
    case "Property":
      Vt(t, e.value);
      return;
    case "SpreadElement":
      e.type = "RestElement", Vt(t, e.argument);
  }
}
function ze(t, e, i, n, a) {
  e & 1 && ((n & 36864) === 36864 && t.report(118), !a && (n & 537079808) === 537079808 && t.report(119)), ((n & 20480) === 20480 || n === -2147483528) && t.report(102), i & 24 && (n & 255) === 73 && t.report(100), e & 2050 && n === 209006 && t.report(110), e & 1025 && n === 241771 && t.report(97, "yield");
}
function Fn(t, e, i) {
  e & 1 && ((i & 36864) === 36864 && t.report(118), (i & 537079808) === 537079808 && t.report(119), i === -2147483527 && t.report(95), i === -2147483528 && t.report(95)), (i & 20480) === 20480 && t.report(102), e & 2050 && i === 209006 && t.report(110), e & 1025 && i === 241771 && t.report(97, "yield");
}
function On(t, e, i) {
  return i === 209006 && (e & 2050 && t.report(110), t.destructible |= 128), i === 241771 && e & 1024 && t.report(97, "yield"), (i & 20480) === 20480 || (i & 36864) === 36864 || i == -2147483527;
}
function oa(t) {
  return t.property ? t.property.type === "PrivateIdentifier" : !1;
}
function Vn(t, e, i, n) {
  for (; e; ) {
    if (e["$" + i])
      return n && t.report(137), 1;
    n && e.loop && (n = 0), e = e.$;
  }
  return 0;
}
function ua(t, e, i) {
  let n = e;
  for (; n; )
    n["$" + i] && t.report(136, i), n = n.$;
  e["$" + i] = 1;
}
function We(t) {
  switch (t.type) {
    case "JSXIdentifier":
      return t.name;
    case "JSXNamespacedName":
      return t.namespace + ":" + t.name;
    case "JSXMemberExpression":
      return We(t.object) + "." + We(t.property);
  }
}
function we(t, e) {
  return t & 1025 ? t & 2 && e === 209006 || t & 1024 && e === 241771 ? !1 : (e & 12288) === 12288 : (e & 12288) === 12288 || (e & 36864) === 36864;
}
function ii(t, e, i) {
  (i & 537079808) === 537079808 && (e & 1 && t.report(119), t.flags |= 512), we(e, i) || t.report(0);
}
const la = {
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
}, ha = {
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
function ca(t) {
  return t.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (e) => {
    if (e.charAt(1) === "#") {
      const i = e.charAt(2), n = i === "X" || i === "x" ? parseInt(e.slice(3), 16) : parseInt(e.slice(2), 10);
      return fa(n);
    }
    return ei(la, e.slice(1, -1)) ?? e;
  });
}
function fa(t) {
  return t >= 55296 && t <= 57343 || t > 1114111 ? "�" : String.fromCodePoint(ei(ha, t) ?? t);
}
function da(t, e) {
  return t.startIndex = t.tokenIndex = t.index, t.startColumn = t.tokenColumn = t.column, t.startLine = t.tokenLine = t.line, t.setToken(W[t.currentChar] & 8192 ? pa(t) : _n(t, e, 0)), t.getToken();
}
function pa(t) {
  const e = t.currentChar;
  let i = T(t);
  const n = t.index;
  for (; i !== e; )
    t.index >= t.end && t.report(16), i = T(t);
  return i !== e && t.report(16), t.tokenValue = t.source.slice(n, t.index), T(t), t.options.raw && (t.tokenRaw = t.source.slice(t.tokenIndex, t.index)), 134283267;
}
function Se(t) {
  if (t.startIndex = t.tokenIndex = t.index, t.startColumn = t.tokenColumn = t.column, t.startLine = t.tokenLine = t.line, t.index >= t.end) {
    t.setToken(1048576);
    return;
  }
  if (t.currentChar === 60) {
    T(t), t.setToken(8456256);
    return;
  }
  if (t.currentChar === 123) {
    T(t), t.setToken(2162700);
    return;
  }
  let e = 0;
  for (; t.index < t.end; ) {
    const n = W[t.source.charCodeAt(t.index)];
    if (n & 1024 ? (e |= 5, ee(t)) : n & 2048 ? (Ni(t, e), e = e & -5 | 1) : T(t), W[t.currentChar] & 16384)
      break;
  }
  t.tokenIndex === t.index && t.report(0);
  const i = t.source.slice(t.tokenIndex, t.index);
  t.options.raw && (t.tokenRaw = i), t.tokenValue = ca(i), t.setToken(137);
}
function Ai(t) {
  if ((t.getToken() & 143360) === 143360) {
    const { index: e } = t;
    let i = t.currentChar;
    for (; W[i] & 32770; )
      i = T(t);
    t.tokenValue += t.source.slice(e, t.index), t.setToken(208897, !0);
  }
  return t.getToken();
}
function ma(t) {
  const e = {
    validateRegex: !0,
    ...t
  };
  return e.module && !e.sourceType && (e.sourceType = "module"), e.globalReturn && (!e.sourceType || e.sourceType === "script") && (e.sourceType = "commonjs"), e;
}
class ga {
  parser;
  parent;
  refs = /* @__PURE__ */ Object.create(null);
  privateIdentifiers = /* @__PURE__ */ new Map();
  constructor(e, i) {
    this.parser = e, this.parent = i;
  }
  addPrivateIdentifier(e, i) {
    const { privateIdentifiers: n } = this;
    let a = i & 800;
    a & 768 || (a |= 768);
    const r = n.get(e);
    this.hasPrivateIdentifier(e) && ((r & 32) !== (a & 32) || r & a & 768) && this.parser.report(146, e), n.set(e, this.hasPrivateIdentifier(e) ? r | a : a);
  }
  addPrivateIdentifierRef(e) {
    this.refs[e] ??= [], this.refs[e].push(this.parser.tokenStart);
  }
  isPrivateIdentifierDefined(e) {
    return this.hasPrivateIdentifier(e) || !!this.parent?.isPrivateIdentifierDefined(e);
  }
  validatePrivateIdentifierRefs() {
    for (const e in this.refs)
      if (!this.isPrivateIdentifierDefined(e)) {
        const { index: i, line: n, column: a } = this.refs[e][0];
        throw new ot({ index: i, line: n, column: a }, { index: i + e.length, line: n, column: a + e.length }, 4, e);
      }
  }
  hasPrivateIdentifier(e) {
    return this.privateIdentifiers.has(e);
  }
}
let ya = class Rn {
  parser;
  type;
  parent;
  scopeError;
  variableBindings = /* @__PURE__ */ new Map();
  constructor(e, i = 2, n) {
    this.parser = e, this.type = i, this.parent = n;
  }
  createChildScope(e) {
    return new Rn(this.parser, e, this);
  }
  addVarOrBlock(e, i, n, a) {
    n & 4 ? this.addVarName(e, i, n) : this.addBlockName(e, i, n, a), a & 64 && this.parser.declareUnboundVariable(i);
  }
  addVarName(e, i, n) {
    const { parser: a } = this;
    let r = this;
    for (; r && (r.type & 128) === 0; ) {
      const { variableBindings: u } = r, h = u.get(i);
      h && h & 248 && (a.options.webcompat && (e & 1) === 0 && (n & 128 && h & 68 || h & 128 && n & 68) || a.report(145, i)), r === this && h && h & 1 && n & 1 && r.recordScopeError(145, i), h && (h & 256 || h & 512 && !a.options.webcompat) && a.report(145, i), r.variableBindings.set(i, n), r = r.parent;
    }
  }
  hasVariable(e) {
    return this.variableBindings.has(e);
  }
  addBlockName(e, i, n, a) {
    const { parser: r } = this, u = this.variableBindings.get(i);
    u && (u & 2) === 0 && (n & 1 ? this.recordScopeError(145, i) : r.options.webcompat && (e & 1) === 0 && a & 2 && u === 64 && n === 64 || r.report(145, i)), this.type & 64 && this.parent?.hasVariable(i) && (this.parent.variableBindings.get(i) & 2) === 0 && r.report(145, i), this.type & 512 && u && (u & 2) === 0 && n & 1 && this.recordScopeError(145, i), this.type & 32 && this.parent.variableBindings.get(i) & 768 && r.report(159, i), this.variableBindings.set(i, n);
  }
  recordScopeError(e, ...i) {
    this.scopeError = {
      type: e,
      params: i,
      start: this.parser.tokenStart,
      end: this.parser.currentLocation
    };
  }
  reportScopeError() {
    const { scopeError: e } = this;
    if (e)
      throw new ot(e.start, e.end, e.type, ...e.params);
  }
};
function ni(t, e, i) {
  const n = t.createScope().createChildScope(512);
  return n.addBlockName(e, i, 1, 0), n;
}
let ba = class {
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
  constructor(e, i = {}) {
    this.source = e, this.end = e.length, this.currentChar = e.charCodeAt(0), this.options = ma(i), Array.isArray(this.options.onComment) && (this.options.onComment = ka(this.options.onComment, this.options)), Array.isArray(this.options.onToken) && (this.options.onToken = xa(this.options.onToken, this.options));
  }
  getToken() {
    return this.token;
  }
  setToken(e, i = !1) {
    this.token = e;
    const { onToken: n } = this.options;
    if (n)
      if (e !== 1048576) {
        const a = {
          start: {
            line: this.tokenLine,
            column: this.tokenColumn
          },
          end: {
            line: this.line,
            column: this.column
          }
        };
        !i && this.lastOnToken && n(...this.lastOnToken), this.lastOnToken = [Xs(e), this.tokenIndex, this.index, a];
      } else
        this.lastOnToken && (n(...this.lastOnToken), this.lastOnToken = null);
    return e;
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
  finishNode(e, i, n) {
    if (this.options.ranges) {
      e.start = i.index;
      const a = n ? n.index : this.startIndex;
      e.end = a, e.range = [i.index, a];
    }
    return this.options.loc && (e.loc = {
      start: {
        line: i.line,
        column: i.column
      },
      end: n ? { line: n.line, column: n.column } : { line: this.startLine, column: this.startColumn }
    }, this.options.source && (e.loc.source = this.options.source)), e;
  }
  addBindingToExports(e) {
    this.exportedBindings.add(e);
  }
  declareUnboundVariable(e) {
    const { exportedNames: i } = this;
    i.has(e) && this.report(147, e), i.add(e);
  }
  report(e, ...i) {
    throw new ot(this.tokenStart, this.currentLocation, e, ...i);
  }
  createScopeIfLexical(e, i) {
    if (this.options.lexical)
      return this.createScope(e, i);
  }
  createScope(e, i) {
    return new ya(this, e, i);
  }
  createPrivateScopeIfLexical(e) {
    if (this.options.lexical)
      return new ga(this, e);
  }
  cloneIdentifier(e) {
    return this.cloneLocationInformation({ ...e }, e);
  }
  cloneStringLiteral(e) {
    return this.cloneLocationInformation({ ...e }, e);
  }
  cloneLocationInformation(e, i) {
    return this.options.ranges && (e.range = [...i.range]), this.options.loc && (e.loc = {
      ...i.loc,
      start: { ...i.loc.start },
      end: { ...i.loc.end }
    }), e;
  }
};
function ka(t, e) {
  return function(i, n, a, r, u) {
    const h = {
      type: i,
      value: n
    };
    e.ranges && (h.start = a, h.end = r, h.range = [a, r]), e.loc && (h.loc = u), t.push(h);
  };
}
function xa(t, e) {
  return function(i, n, a, r) {
    const u = {
      token: i
    };
    e.ranges && (u.start = n, u.end = a, u.range = [n, a]), e.loc && (u.loc = r), t.push(u);
  };
}
function va(t, e = {}, i = 0) {
  const n = new ba(t, e);
  n.options.sourceType === "module" && (i |= 3), n.options.sourceType === "commonjs" && (i |= 69632), n.options.impliedStrict && (i |= 1), $s(n);
  const a = n.createScopeIfLexical();
  let r = [], u = "script";
  if (i & 2) {
    if (u = "module", r = Ca(n, i | 8, a), a)
      for (const h of n.exportedBindings)
        a.hasVariable(h) || n.report(148, h);
  } else
    r = Aa(n, i | 8, a);
  return n.finishNode({
    type: "Program",
    sourceType: u,
    body: r
  }, { index: 0, line: 1, column: 0 }, n.currentLocation);
}
function Aa(t, e, i) {
  w(t, e | 32 | 262144);
  const n = [];
  for (; t.getToken() === 134283267; ) {
    const { index: a, tokenValue: r, tokenStart: u, tokenIndex: h } = t, f = t.getToken(), l = dt(t, e);
    if (Bn(t, a, h, r)) {
      if (e |= 1, t.flags & 64)
        throw new ot(t.tokenStart, t.currentLocation, 9);
      if (t.flags & 4096)
        throw new ot(t.tokenStart, t.currentLocation, 15);
    }
    n.push(Oi(t, e, l, f, u));
  }
  for (; t.getToken() !== 1048576; )
    n.push(De(t, e, i, void 0, 4, {}));
  return n;
}
function Ca(t, e, i) {
  w(t, e | 32);
  const n = [];
  for (; t.getToken() === 134283267; ) {
    const { tokenStart: a } = t, r = t.getToken();
    n.push(Oi(t, e, dt(t, e), r, a));
  }
  for (; t.getToken() !== 1048576; )
    n.push(Ta(t, e, i));
  return n;
}
function Ta(t, e, i) {
  t.getToken() === 132 && Object.assign(t.leadingDecorators, {
    start: t.tokenStart,
    decorators: ri(t, e, void 0)
  });
  let n;
  switch (t.getToken()) {
    case 20564:
      n = Ja(t, e, i);
      break;
    case 86106:
      n = Ua(t, e, i);
      break;
    default:
      n = De(t, e, i, void 0, 4, {});
  }
  return t.leadingDecorators?.decorators.length && t.report(170), n;
}
function De(t, e, i, n, a, r) {
  const u = t.tokenStart;
  switch (t.getToken()) {
    case 86104:
      return Qt(t, e, i, n, a, 1, 0, 0, u);
    case 132:
    case 86094:
      return Ei(t, e, i, n, 0);
    case 86090:
      return Ci(t, e, i, n, 16, 0);
    case 241737:
      return qa(t, e, i, n, a);
    case 20564:
      t.report(103, "export");
    case 86106:
      switch (w(t, e), t.getToken()) {
        case 67174411:
          return Hn(t, e, n, u);
        case 67108877:
          return Un(t, e, u);
        default:
          t.report(103, "import");
      }
    case 209005:
      return Mn(t, e, i, n, a, r, 1);
    default:
      return Pe(t, e, i, n, a, r, 1);
  }
}
function Pe(t, e, i, n, a, r, u) {
  switch (t.getToken()) {
    case 86088:
      return qn(t, e, i, n, 0);
    case 20572:
      return wa(t, e, n);
    case 20569:
      return Pa(t, e, i, n, r);
    case 20567:
      return ja(t, e, i, n, r);
    case 20562:
      return Ma(t, e, i, n, r);
    case 20578:
      return Na(t, e, i, n, r);
    case 86110:
      return Ia(t, e, i, n, r);
    case 1074790417:
      return Sa(t, e);
    case 2162700:
      return Te(t, e, i?.createChildScope(), n, r, t.tokenStart);
    case 86112:
      return Da(t, e, n);
    case 20555:
      return _a(t, e, r);
    case 20559:
      return La(t, e, r);
    case 20577:
      return Oa(t, e, i, n, r);
    case 20579:
      return Ba(t, e, i, n, r);
    case 20560:
      return Fa(t, e);
    case 209005:
      return Mn(t, e, i, n, a, r, 0);
    case 20557:
      t.report(162);
    case 20566:
      t.report(163);
    case 86104:
      t.report(e & 1 ? 76 : t.options.webcompat ? 77 : 78);
    case 86094:
      t.report(79);
    default:
      return Ea(t, e, i, n, a, r, u);
  }
}
function Ea(t, e, i, n, a, r, u) {
  const { tokenValue: h, tokenStart: f } = t, l = t.getToken();
  let m;
  switch (l) {
    case 241737:
      m = tt(t, e), e & 1 && t.report(85), t.getToken() === 69271571 && t.report(84);
      break;
    default:
      m = Dt(t, e, n, 2, 0, 1, 0, 1, t.tokenStart);
  }
  return l & 143360 && t.getToken() === 21 ? Fi(t, e, i, n, a, r, h, m, l, u, f) : (m = G(t, e, n, m, 0, 0, f), m = it(t, e, n, 0, 0, f, m), t.getToken() === 18 && (m = jt(t, e, n, 0, f, m)), ue(t, e, m, f));
}
function Te(t, e, i, n, a, r = t.tokenStart, u = "BlockStatement") {
  const h = [];
  for (L(t, e | 32, 2162700); t.getToken() !== 1074790415; )
    h.push(De(t, e, i, n, 2, { $: a }));
  return L(t, e | 32, 1074790415), t.finishNode({
    type: u,
    body: h
  }, r);
}
function wa(t, e, i) {
  (e & 4096) === 0 && t.report(92);
  const n = t.tokenStart;
  w(t, e | 32);
  const a = t.flags & 1 || t.getToken() & 1048576 ? null : mt(t, e, i, 0, 1, t.tokenStart);
  return kt(t, e | 32), t.finishNode({
    type: "ReturnStatement",
    argument: a
  }, n);
}
function ue(t, e, i, n) {
  return kt(t, e | 32), t.finishNode({
    type: "ExpressionStatement",
    expression: i
  }, n);
}
function Fi(t, e, i, n, a, r, u, h, f, l, m) {
  ze(t, e, 0, f, 1), ua(t, r, u), w(t, e | 32);
  const y = l && (e & 1) === 0 && t.options.webcompat && t.getToken() === 86104 ? Qt(t, e, i?.createChildScope(), n, a, 0, 0, 0, t.tokenStart) : Pe(t, e, i, n, a, r, l);
  return t.finishNode({
    type: "LabeledStatement",
    label: h,
    body: y
  }, m);
}
function Mn(t, e, i, n, a, r, u) {
  const { tokenValue: h, tokenStart: f } = t, l = t.getToken();
  let m = tt(t, e);
  if (t.getToken() === 21)
    return Fi(t, e, i, n, a, r, h, m, l, 1, f);
  const y = t.flags & 1;
  if (!y) {
    if (t.getToken() === 86104)
      return u || t.report(123), Qt(t, e, i, n, a, 1, 0, 1, f);
    if (we(e, t.getToken()))
      return m = Qn(t, e, n, 1, f), t.getToken() === 18 && (m = jt(t, e, n, 0, f, m)), ue(t, e, m, f);
  }
  return t.getToken() === 67174411 ? m = Ui(t, e, n, m, 1, 1, 0, y, f) : (t.getToken() === 10 && (ii(t, e, l), (l & 36864) === 36864 && (t.flags |= 256), m = ai(t, e | 2048, n, t.tokenValue, m, 0, 1, 0, f)), t.assignable = 1), m = G(t, e, n, m, 0, 0, f), m = it(t, e, n, 0, 0, f, m), t.assignable = 1, t.getToken() === 18 && (m = jt(t, e, n, 0, f, m)), ue(t, e, m, f);
}
function Oi(t, e, i, n, a) {
  const r = t.startIndex;
  n !== 1074790417 && (t.assignable = 2, i = G(t, e, void 0, i, 0, 0, a), t.getToken() !== 1074790417 && (i = it(t, e, void 0, 0, 0, a, i), t.getToken() === 18 && (i = jt(t, e, void 0, 0, a, i))), kt(t, e | 32));
  const u = {
    type: "ExpressionStatement",
    expression: i
  };
  return i.type === "Literal" && typeof i.value == "string" && (u.directive = t.source.slice(a.index + 1, r - 1)), t.finishNode(u, a);
}
function Sa(t, e) {
  const i = t.tokenStart;
  return w(t, e | 32), t.finishNode({
    type: "EmptyStatement"
  }, i);
}
function Da(t, e, i) {
  const n = t.tokenStart;
  w(t, e | 32), t.flags & 1 && t.report(90);
  const a = mt(t, e, i, 0, 1, t.tokenStart);
  return kt(t, e | 32), t.finishNode({
    type: "ThrowStatement",
    argument: a
  }, n);
}
function Pa(t, e, i, n, a) {
  const r = t.tokenStart;
  w(t, e), L(t, e | 32, 67174411), t.assignable = 1;
  const u = mt(t, e, n, 0, 1, t.tokenStart);
  L(t, e | 32, 16);
  const h = un(t, e, i, n, a);
  let f = null;
  return t.getToken() === 20563 && (w(t, e | 32), f = un(t, e, i, n, a)), t.finishNode({
    type: "IfStatement",
    test: u,
    consequent: h,
    alternate: f
  }, r);
}
function un(t, e, i, n, a) {
  const { tokenStart: r } = t;
  return e & 1 || !t.options.webcompat || t.getToken() !== 86104 ? Pe(t, e, i, n, 0, { $: a }, 0) : Qt(t, e, i?.createChildScope(), n, 0, 0, 0, 0, r);
}
function Ia(t, e, i, n, a) {
  const r = t.tokenStart;
  w(t, e), L(t, e | 32, 67174411);
  const u = mt(t, e, n, 0, 1, t.tokenStart);
  L(t, e, 16), L(t, e, 2162700);
  const h = [];
  let f = 0;
  for (i = i?.createChildScope(8); t.getToken() !== 1074790415; ) {
    const { tokenStart: l } = t;
    let m = null;
    const y = [];
    for (H(t, e | 32, 20556) ? m = mt(t, e, n, 0, 1, t.tokenStart) : (L(t, e | 32, 20561), f && t.report(89), f = 1), L(t, e | 32, 21); t.getToken() !== 20556 && t.getToken() !== 1074790415 && t.getToken() !== 20561; )
      y.push(De(t, e | 4, i, n, 2, {
        $: a
      }));
    h.push(t.finishNode({
      type: "SwitchCase",
      test: m,
      consequent: y
    }, l));
  }
  return L(t, e | 32, 1074790415), t.finishNode({
    type: "SwitchStatement",
    discriminant: u,
    cases: h
  }, r);
}
function Na(t, e, i, n, a) {
  const r = t.tokenStart;
  w(t, e), L(t, e | 32, 67174411);
  const u = mt(t, e, n, 0, 1, t.tokenStart);
  L(t, e | 32, 16);
  const h = xe(t, e, i, n, a);
  return t.finishNode({
    type: "WhileStatement",
    test: u,
    body: h
  }, r);
}
function xe(t, e, i, n, a) {
  return Pe(t, (e | 131072) ^ 131072 | 128, i, n, 0, { loop: 1, $: a }, 0);
}
function La(t, e, i) {
  (e & 128) === 0 && t.report(68);
  const n = t.tokenStart;
  w(t, e);
  let a = null;
  if ((t.flags & 1) === 0 && t.getToken() & 143360) {
    const { tokenValue: r } = t;
    a = tt(t, e | 32), Vn(t, i, r, 1) || t.report(138, r);
  }
  return kt(t, e | 32), t.finishNode({
    type: "ContinueStatement",
    label: a
  }, n);
}
function _a(t, e, i) {
  const n = t.tokenStart;
  w(t, e | 32);
  let a = null;
  if ((t.flags & 1) === 0 && t.getToken() & 143360) {
    const { tokenValue: r } = t;
    a = tt(t, e | 32), Vn(t, i, r, 0) || t.report(138, r);
  } else (e & 132) === 0 && t.report(69);
  return kt(t, e | 32), t.finishNode({
    type: "BreakStatement",
    label: a
  }, n);
}
function Ba(t, e, i, n, a) {
  const r = t.tokenStart;
  w(t, e), e & 1 && t.report(91), L(t, e | 32, 67174411);
  const u = mt(t, e, n, 0, 1, t.tokenStart);
  L(t, e | 32, 16);
  const h = Pe(t, e, i, n, 2, a, 0);
  return t.finishNode({
    type: "WithStatement",
    object: u,
    body: h
  }, r);
}
function Fa(t, e) {
  const i = t.tokenStart;
  return w(t, e | 32), kt(t, e | 32), t.finishNode({
    type: "DebuggerStatement"
  }, i);
}
function Oa(t, e, i, n, a) {
  const r = t.tokenStart;
  w(t, e | 32);
  const u = i?.createChildScope(16), h = Te(t, e, u, n, { $: a }), { tokenStart: f } = t, l = H(t, e | 32, 20557) ? Va(t, e, i, n, a, f) : null;
  let m = null;
  if (t.getToken() === 20566) {
    w(t, e | 32);
    const y = i?.createChildScope(4);
    m = Te(t, e, y, n, { $: a });
  }
  return !l && !m && t.report(88), t.finishNode({
    type: "TryStatement",
    block: h,
    handler: l,
    finalizer: m
  }, r);
}
function Va(t, e, i, n, a, r) {
  let u = null, h = i;
  H(t, e, 67174411) && (i = i?.createChildScope(4), u = Gn(t, e, i, n, (t.getToken() & 2097152) === 2097152 ? 256 : 512, 0), t.getToken() === 18 ? t.report(86) : t.getToken() === 1077936155 && t.report(87), L(t, e | 32, 16)), h = i?.createChildScope(32);
  const f = Te(t, e, h, n, { $: a });
  return t.finishNode({
    type: "CatchClause",
    param: u,
    body: f
  }, r);
}
function Ra(t, e, i, n, a) {
  i = i?.createChildScope();
  const r = 5764;
  return e = (e | r) ^ r | 256 | 2048 | 524288 | 65536, Te(t, e, i, n, {}, a, "StaticBlock");
}
function Ma(t, e, i, n, a) {
  const r = t.tokenStart;
  w(t, e | 32);
  const u = xe(t, e, i, n, a);
  L(t, e, 20578), L(t, e | 32, 67174411);
  const h = mt(t, e, n, 0, 1, t.tokenStart);
  return L(t, e | 32, 16), H(t, e | 32, 1074790417), t.finishNode({
    type: "DoWhileStatement",
    body: u,
    test: h
  }, r);
}
function qa(t, e, i, n, a) {
  const { tokenValue: r, tokenStart: u } = t, h = t.getToken();
  let f = tt(t, e);
  if (t.getToken() & 2240512) {
    const l = oe(t, e, i, n, 8, 0);
    return kt(t, e | 32), t.finishNode({
      type: "VariableDeclaration",
      kind: "let",
      declarations: l
    }, u);
  }
  if (t.assignable = 1, e & 1 && t.report(85), t.getToken() === 21)
    return Fi(t, e, i, n, a, {}, r, f, h, 0, u);
  if (t.getToken() === 10) {
    let l;
    t.options.lexical && (l = ni(t, e, r)), t.flags = (t.flags | 128) ^ 128, f = Ie(t, e, l, n, [f], 0, u);
  } else
    f = G(t, e, n, f, 0, 0, u), f = it(t, e, n, 0, 0, u, f);
  return t.getToken() === 18 && (f = jt(t, e, n, 0, u, f)), ue(t, e, f, u);
}
function Ci(t, e, i, n, a, r) {
  const u = t.tokenStart;
  w(t, e);
  const h = oe(t, e, i, n, a, r);
  return kt(t, e | 32), t.finishNode({
    type: "VariableDeclaration",
    kind: a & 8 ? "let" : "const",
    declarations: h
  }, u);
}
function qn(t, e, i, n, a) {
  const r = t.tokenStart;
  w(t, e);
  const u = oe(t, e, i, n, 4, a);
  return kt(t, e | 32), t.finishNode({
    type: "VariableDeclaration",
    kind: "var",
    declarations: u
  }, r);
}
function oe(t, e, i, n, a, r) {
  let u = 1;
  const h = [
    ln(t, e, i, n, a, r)
  ];
  for (; H(t, e, 18); )
    u++, h.push(ln(t, e, i, n, a, r));
  return u > 1 && r & 32 && t.getToken() & 262144 && t.report(61, X[t.getToken() & 255]), h;
}
function ln(t, e, i, n, a, r) {
  const { tokenStart: u } = t, h = t.getToken();
  let f = null;
  const l = Gn(t, e, i, n, a, r);
  if (t.getToken() === 1077936155) {
    if (w(t, e | 32), f = et(t, e, n, 1, 0, t.tokenStart), (r & 32 || (h & 2097152) === 0) && (t.getToken() === 471156 || t.getToken() === 8673330 && (h & 2097152 || (a & 4) === 0 || e & 1)))
      throw new ot(u, t.currentLocation, 60, t.getToken() === 471156 ? "of" : "in");
  } else (a & 16 || (h & 2097152) > 0) && (t.getToken() & 262144) !== 262144 && t.report(59, a & 16 ? "const" : "destructuring");
  return t.finishNode({
    type: "VariableDeclarator",
    id: l,
    init: f
  }, u);
}
function ja(t, e, i, n, a) {
  const r = t.tokenStart;
  w(t, e);
  const u = ((e & 2048) > 0 || (e & 2) > 0 && (e & 8) > 0) && H(t, e, 209006);
  L(t, e | 32, 67174411), i = i?.createChildScope(1);
  let h = null, f = null, l = 0, m = null, y = t.getToken() === 86088 || t.getToken() === 241737 || t.getToken() === 86090, A;
  const { tokenStart: N } = t, _ = t.getToken();
  if (y)
    _ === 241737 ? (m = tt(t, e), t.getToken() & 2240512 ? (t.getToken() === 8673330 ? e & 1 && t.report(67) : m = t.finishNode({
      type: "VariableDeclaration",
      kind: "let",
      declarations: oe(t, e | 131072, i, n, 8, 32)
    }, N), t.assignable = 1) : e & 1 ? t.report(67) : (y = !1, t.assignable = 1, m = G(t, e, n, m, 0, 0, N), t.getToken() === 471156 && t.report(115))) : (w(t, e), m = t.finishNode(_ === 86088 ? {
      type: "VariableDeclaration",
      kind: "var",
      declarations: oe(t, e | 131072, i, n, 4, 32)
    } : {
      type: "VariableDeclaration",
      kind: "const",
      declarations: oe(t, e | 131072, i, n, 16, 32)
    }, N), t.assignable = 1);
  else if (_ === 1074790417)
    u && t.report(82);
  else if ((_ & 2097152) === 2097152) {
    const E = t.tokenStart;
    m = _ === 2162700 ? Bt(t, e, void 0, n, 1, 0, 0, 2, 32) : _t(t, e, void 0, n, 1, 0, 0, 2, 32), l = t.destructible, l & 64 && t.report(63), t.assignable = l & 16 ? 2 : 1, m = G(t, e | 131072, n, m, 0, 0, E);
  } else
    m = Lt(t, e | 131072, n, 1, 0, 1);
  if ((t.getToken() & 262144) === 262144) {
    if (t.getToken() === 471156) {
      t.assignable & 2 && t.report(80, u ? "await" : "of"), Vt(t, m), w(t, e | 32), A = et(t, e, n, 1, 0, t.tokenStart), L(t, e | 32, 16);
      const B = xe(t, e, i, n, a);
      return t.finishNode({
        type: "ForOfStatement",
        left: m,
        right: A,
        body: B,
        await: u
      }, r);
    }
    t.assignable & 2 && t.report(80, "in"), Vt(t, m), w(t, e | 32), u && t.report(82), A = mt(t, e, n, 0, 1, t.tokenStart), L(t, e | 32, 16);
    const E = xe(t, e, i, n, a);
    return t.finishNode({
      type: "ForInStatement",
      body: E,
      left: m,
      right: A
    }, r);
  }
  u && t.report(82), y || (l & 8 && t.getToken() !== 1077936155 && t.report(80, "loop"), m = it(t, e | 131072, n, 0, 0, N, m)), t.getToken() === 18 && (m = jt(t, e, n, 0, N, m)), L(t, e | 32, 1074790417), t.getToken() !== 1074790417 && (h = mt(t, e, n, 0, 1, t.tokenStart)), L(t, e | 32, 1074790417), t.getToken() !== 16 && (f = mt(t, e, n, 0, 1, t.tokenStart)), L(t, e | 32, 16);
  const q = xe(t, e, i, n, a);
  return t.finishNode({
    type: "ForStatement",
    init: m,
    test: h,
    update: f,
    body: q
  }, r);
}
function jn(t, e, i) {
  return we(e, t.getToken()) || t.report(118), (t.getToken() & 537079808) === 537079808 && t.report(119), i?.addBlockName(e, t.tokenValue, 8, 0), tt(t, e);
}
function Ua(t, e, i) {
  const n = t.tokenStart;
  w(t, e);
  let a = null;
  const { tokenStart: r } = t;
  let u = [];
  if (t.getToken() === 134283267)
    a = dt(t, e);
  else {
    if (t.getToken() & 143360) {
      const l = jn(t, e, i);
      if (u = [
        t.finishNode({
          type: "ImportDefaultSpecifier",
          local: l
        }, r)
      ], H(t, e, 18))
        switch (t.getToken()) {
          case 8391476:
            u.push(hn(t, e, i));
            break;
          case 2162700:
            cn(t, e, i, u);
            break;
          default:
            t.report(107);
        }
    } else
      switch (t.getToken()) {
        case 8391476:
          u = [hn(t, e, i)];
          break;
        case 2162700:
          cn(t, e, i, u);
          break;
        case 67174411:
          return Hn(t, e, void 0, n);
        case 67108877:
          return Un(t, e, n);
        default:
          t.report(30, X[t.getToken() & 255]);
      }
    a = Ha(t, e);
  }
  const h = Ti(t, e), f = {
    type: "ImportDeclaration",
    specifiers: u,
    source: a,
    attributes: h
  };
  return kt(t, e | 32), t.finishNode(f, n);
}
function hn(t, e, i) {
  const { tokenStart: n } = t;
  if (w(t, e), L(t, e, 77932), (t.getToken() & 134217728) === 134217728)
    throw new ot(n, t.currentLocation, 30, X[t.getToken() & 255]);
  return t.finishNode({
    type: "ImportNamespaceSpecifier",
    local: jn(t, e, i)
  }, n);
}
function Ha(t, e) {
  return L(t, e, 209011), t.getToken() !== 134283267 && t.report(105, "Import"), dt(t, e);
}
function cn(t, e, i, n) {
  for (w(t, e); t.getToken() & 143360 || t.getToken() === 134283267; ) {
    let { tokenValue: a, tokenStart: r } = t;
    const u = t.getToken(), h = je(t, e);
    let f;
    H(t, e, 77932) ? ((t.getToken() & 134217728) === 134217728 || t.getToken() === 18 ? t.report(106) : ze(t, e, 16, t.getToken(), 0), a = t.tokenValue, f = tt(t, e)) : h.type === "Identifier" ? (ze(t, e, 16, u, 0), f = t.cloneIdentifier(h)) : t.report(25, X[108]), i?.addBlockName(e, a, 8, 0), n.push(t.finishNode({
      type: "ImportSpecifier",
      local: f,
      imported: h
    }, r)), t.getToken() !== 1074790415 && L(t, e, 18);
  }
  return L(t, e, 1074790415), n;
}
function Un(t, e, i) {
  let n = Jn(t, e, t.finishNode({
    type: "Identifier",
    name: "import"
  }, i), i);
  return n = G(t, e, void 0, n, 0, 0, i), n = it(t, e, void 0, 0, 0, i, n), t.getToken() === 18 && (n = jt(t, e, void 0, 0, i, n)), ue(t, e, n, i);
}
function Hn(t, e, i, n) {
  let a = zn(t, e, i, 0, n);
  return a = G(t, e, i, a, 0, 0, n), t.getToken() === 18 && (a = jt(t, e, i, 0, n, a)), ue(t, e, a, n);
}
function Ja(t, e, i) {
  const n = t.leadingDecorators.decorators.length ? t.leadingDecorators.start : t.tokenStart;
  w(t, e | 32);
  const a = [];
  let r = null, u = null, h = [];
  if (H(t, e | 32, 20561)) {
    switch (t.getToken()) {
      case 86104: {
        r = Qt(t, e, i, void 0, 4, 1, 1, 0, t.tokenStart);
        break;
      }
      case 132:
      case 86094:
        r = Ei(t, e, i, void 0, 1);
        break;
      case 209005: {
        const { tokenStart: l } = t;
        r = tt(t, e);
        const { flags: m } = t;
        (m & 1) === 0 && (t.getToken() === 86104 ? r = Qt(t, e, i, void 0, 4, 1, 1, 1, l) : t.getToken() === 67174411 ? (r = Ui(t, e, void 0, r, 1, 1, 0, m, l), r = G(t, e, void 0, r, 0, 0, l), r = it(t, e, void 0, 0, 0, l, r)) : t.getToken() & 143360 && (i && (i = ni(t, e, t.tokenValue)), r = tt(t, e), r = Ie(t, e, i, void 0, [r], 1, l)));
        break;
      }
      default:
        r = et(t, e, void 0, 1, 0, t.tokenStart), kt(t, e | 32);
    }
    return i && t.declareUnboundVariable("default"), t.finishNode({
      type: "ExportDefaultDeclaration",
      declaration: r
    }, n);
  }
  switch (t.getToken()) {
    case 8391476: {
      w(t, e);
      let l = null;
      H(t, e, 77932) && (i && t.declareUnboundVariable(t.tokenValue), l = je(t, e)), L(t, e, 209011), t.getToken() !== 134283267 && t.report(105, "Export"), u = dt(t, e);
      const y = Ti(t, e), A = {
        type: "ExportAllDeclaration",
        source: u,
        exported: l,
        attributes: y
      };
      return kt(t, e | 32), t.finishNode(A, n);
    }
    case 2162700: {
      w(t, e);
      const l = [], m = [];
      let y = 0;
      for (; t.getToken() & 143360 || t.getToken() === 134283267; ) {
        const { tokenStart: A, tokenValue: N } = t, _ = je(t, e);
        _.type === "Literal" && (y = 1);
        let q;
        t.getToken() === 77932 ? (w(t, e), (t.getToken() & 143360) === 0 && t.getToken() !== 134283267 && t.report(106), i && (l.push(t.tokenValue), m.push(N)), q = je(t, e)) : (i && (l.push(t.tokenValue), m.push(t.tokenValue)), q = _.type === "Literal" ? t.cloneStringLiteral(_) : t.cloneIdentifier(_)), a.push(t.finishNode({
          type: "ExportSpecifier",
          local: _,
          exported: q
        }, A)), t.getToken() !== 1074790415 && L(t, e, 18);
      }
      L(t, e, 1074790415), H(t, e, 209011) ? (t.getToken() !== 134283267 && t.report(105, "Export"), u = dt(t, e), h = Ti(t, e), i && l.forEach((A) => t.declareUnboundVariable(A))) : (y && t.report(172), i && (l.forEach((A) => t.declareUnboundVariable(A)), m.forEach((A) => t.addBindingToExports(A)))), kt(t, e | 32);
      break;
    }
    case 132:
    case 86094:
      r = Ei(t, e, i, void 0, 2);
      break;
    case 86104:
      r = Qt(t, e, i, void 0, 4, 1, 2, 0, t.tokenStart);
      break;
    case 241737:
      r = Ci(t, e, i, void 0, 8, 64);
      break;
    case 86090:
      r = Ci(t, e, i, void 0, 16, 64);
      break;
    case 86088:
      r = qn(t, e, i, void 0, 64);
      break;
    case 209005: {
      const { tokenStart: l } = t;
      if (w(t, e), (t.flags & 1) === 0 && t.getToken() === 86104) {
        r = Qt(t, e, i, void 0, 4, 1, 2, 1, l);
        break;
      }
    }
    default:
      t.report(30, X[t.getToken() & 255]);
  }
  const f = {
    type: "ExportNamedDeclaration",
    declaration: r,
    specifiers: a,
    source: u,
    attributes: h
  };
  return t.finishNode(f, n);
}
function et(t, e, i, n, a, r) {
  let u = Dt(t, e, i, 2, 0, n, a, 1, r);
  return u = G(t, e, i, u, a, 0, r), it(t, e, i, a, 0, r, u);
}
function jt(t, e, i, n, a, r) {
  const u = [r];
  for (; H(t, e | 32, 18); )
    u.push(et(t, e, i, 1, n, t.tokenStart));
  return t.finishNode({
    type: "SequenceExpression",
    expressions: u
  }, a);
}
function mt(t, e, i, n, a, r) {
  const u = et(t, e, i, a, n, r);
  return t.getToken() === 18 ? jt(t, e, i, n, r, u) : u;
}
function it(t, e, i, n, a, r, u) {
  const h = t.getToken();
  if ((h & 4194304) === 4194304) {
    t.assignable & 2 && t.report(26), (!a && h === 1077936155 && u.type === "ArrayExpression" || u.type === "ObjectExpression") && Vt(t, u), w(t, e | 32);
    const f = et(t, e, i, 1, n, t.tokenStart);
    return t.assignable = 2, t.finishNode(a ? {
      type: "AssignmentPattern",
      left: u,
      right: f
    } : {
      type: "AssignmentExpression",
      left: u,
      operator: X[h & 255],
      right: f
    }, r);
  }
  return (h & 8388608) === 8388608 && (u = $t(t, e, i, n, r, 4, h, u)), H(t, e | 32, 22) && (u = te(t, e, i, u, r)), u;
}
function Re(t, e, i, n, a, r, u) {
  const h = t.getToken();
  w(t, e | 32);
  const f = et(t, e, i, 1, n, t.tokenStart);
  return u = t.finishNode(a ? {
    type: "AssignmentPattern",
    left: u,
    right: f
  } : {
    type: "AssignmentExpression",
    left: u,
    operator: X[h & 255],
    right: f
  }, r), t.assignable = 2, u;
}
function te(t, e, i, n, a) {
  const r = et(t, (e | 131072) ^ 131072, i, 1, 0, t.tokenStart);
  L(t, e | 32, 21), t.assignable = 1;
  const u = et(t, e, i, 1, 0, t.tokenStart);
  return t.assignable = 2, t.finishNode({
    type: "ConditionalExpression",
    test: n,
    consequent: r,
    alternate: u
  }, a);
}
function $t(t, e, i, n, a, r, u, h) {
  const f = -((e & 131072) > 0) & 8673330;
  let l, m;
  for (t.assignable = 2; t.getToken() & 8388608 && (l = t.getToken(), m = l & 3840, (l & 524288 && u & 268435456 || u & 524288 && l & 268435456) && t.report(165), !(m + ((l === 8391735) << 8) - ((f === l) << 12) <= r)); )
    w(t, e | 32), h = t.finishNode({
      type: l & 524288 || l & 268435456 ? "LogicalExpression" : "BinaryExpression",
      left: h,
      right: $t(t, e, i, n, t.tokenStart, m, l, Lt(t, e, i, 0, n, 1)),
      operator: X[l & 255]
    }, a);
  return t.getToken() === 1077936155 && t.report(26), h;
}
function za(t, e, i, n, a) {
  n || t.report(0);
  const { tokenStart: r } = t, u = t.getToken();
  w(t, e | 32);
  const h = Lt(t, e, i, 0, a, 1);
  return t.getToken() === 8391735 && t.report(33), e & 1 && u === 16863276 && (h.type === "Identifier" ? t.report(121) : oa(h) && t.report(127)), t.assignable = 2, t.finishNode({
    type: "UnaryExpression",
    operator: X[u & 255],
    argument: h,
    prefix: !0
  }, r);
}
function Wa(t, e, i, n, a, r, u, h) {
  const f = t.getToken(), l = tt(t, e), { flags: m } = t;
  if ((m & 1) === 0) {
    if (t.getToken() === 86104)
      return Kn(t, e, i, 1, n, h);
    if (we(e, t.getToken()))
      return a || t.report(0), (t.getToken() & 36864) === 36864 && (t.flags |= 256), Qn(t, e, i, r, h);
  }
  return !u && t.getToken() === 67174411 ? Ui(t, e, i, l, r, 1, 0, m, h) : t.getToken() === 10 ? (ii(t, e, f), u && t.report(51), (f & 36864) === 36864 && (t.flags |= 256), ai(t, e, i, t.tokenValue, l, u, r, 0, h)) : (t.assignable = 1, l);
}
function Ka(t, e, i, n, a, r) {
  if (n && (t.destructible |= 256), e & 1024) {
    w(t, e | 32), e & 8192 && t.report(32), a || t.report(26), t.getToken() === 22 && t.report(124);
    let u = null, h = !1;
    return (t.flags & 1) === 0 ? (h = H(t, e | 32, 8391476), (t.getToken() & 77824 || h) && (u = et(t, e, i, 1, 0, t.tokenStart))) : t.getToken() === 8391476 && t.report(30, X[t.getToken() & 255]), t.assignable = 2, t.finishNode({
      type: "YieldExpression",
      argument: u,
      delegate: h
    }, r);
  }
  return e & 1 && t.report(97, "yield"), ji(t, e, i);
}
function Xa(t, e, i, n, a, r) {
  a && (t.destructible |= 128), e & 524288 && t.report(177);
  const u = ji(t, e, i);
  if (u.type === "ArrowFunctionExpression" || (t.getToken() & 65536) === 0) {
    if (e & 2048)
      throw new ot(r, { index: t.startIndex, line: t.startLine, column: t.startColumn }, 176);
    if (e & 2)
      throw new ot(r, { index: t.startIndex, line: t.startLine, column: t.startColumn }, 110);
    if (e & 8192 && e & 2048)
      throw new ot(r, { index: t.startIndex, line: t.startLine, column: t.startColumn }, 110);
    return u;
  }
  if (e & 8192)
    throw new ot(r, { index: t.startIndex, line: t.startLine, column: t.startColumn }, 31);
  if (e & 2048 || e & 2 && e & 8) {
    if (n)
      throw new ot(r, { index: t.startIndex, line: t.startLine, column: t.startColumn }, 0);
    const f = Lt(t, e, i, 0, 0, 1);
    return t.getToken() === 8391735 && t.report(33), t.assignable = 2, t.finishNode({
      type: "AwaitExpression",
      argument: f
    }, r);
  }
  if (e & 2)
    throw new ot(r, { index: t.startIndex, line: t.startLine, column: t.startColumn }, 98);
  return u;
}
function si(t, e, i, n, a, r, u) {
  const { tokenStart: h } = t;
  L(t, e | 32, 2162700);
  const f = [];
  if (t.getToken() !== 1074790415) {
    for (; t.getToken() === 134283267; ) {
      const { index: l, tokenStart: m, tokenIndex: y, tokenValue: A } = t, N = t.getToken(), _ = dt(t, e);
      if (Bn(t, l, y, A)) {
        if (e |= 1, t.flags & 128)
          throw new ot(m, t.currentLocation, 66);
        if (t.flags & 64)
          throw new ot(m, t.currentLocation, 9);
        if (t.flags & 4096)
          throw new ot(m, t.currentLocation, 15);
        u?.reportScopeError();
      }
      f.push(Oi(t, e, _, N, m));
    }
    e & 1 && (r && ((r & 537079808) === 537079808 && t.report(119), (r & 36864) === 36864 && t.report(40)), t.flags & 512 && t.report(119), t.flags & 256 && t.report(118));
  }
  for (t.flags = (t.flags | 512 | 256 | 64 | 4096) ^ 4928, t.destructible = (t.destructible | 256) ^ 256; t.getToken() !== 1074790415; )
    f.push(De(t, e, i, n, 4, {}));
  return L(t, a & 24 ? e | 32 : e, 1074790415), t.flags &= -4289, t.getToken() === 1077936155 && t.report(26), t.finishNode({
    type: "BlockStatement",
    body: f
  }, h);
}
function $a(t, e) {
  const { tokenStart: i } = t;
  switch (w(t, e), t.getToken()) {
    case 67108990:
      t.report(167);
    case 67174411: {
      (e & 512) === 0 && t.report(28), t.assignable = 2;
      break;
    }
    case 69271571:
    case 67108877: {
      (e & 256) === 0 && t.report(29), t.assignable = 1;
      break;
    }
    default:
      t.report(30, "super");
  }
  return t.finishNode({ type: "Super" }, i);
}
function Lt(t, e, i, n, a, r) {
  const u = t.tokenStart, h = Dt(t, e, i, 2, 0, n, a, r, u);
  return G(t, e, i, h, a, 0, u);
}
function Qa(t, e, i, n) {
  t.assignable & 2 && t.report(55);
  const a = t.getToken();
  return w(t, e), t.assignable = 2, t.finishNode({
    type: "UpdateExpression",
    argument: i,
    operator: X[a & 255],
    prefix: !1
  }, n);
}
function G(t, e, i, n, a, r, u) {
  if ((t.getToken() & 33619968) === 33619968 && (t.flags & 1) === 0)
    n = Qa(t, e, n, u);
  else if ((t.getToken() & 67108864) === 67108864) {
    switch (e = (e | 131072) ^ 131072, t.getToken()) {
      case 67108877: {
        w(t, (e | 262144 | 8) ^ 8), e & 16 && t.getToken() === 130 && t.tokenValue === "super" && t.report(173), t.assignable = 1;
        const h = Vi(t, e | 64, i);
        n = t.finishNode({
          type: "MemberExpression",
          object: n,
          computed: !1,
          property: h,
          optional: !1
        }, u);
        break;
      }
      case 69271571: {
        let h = !1;
        (t.flags & 2048) === 2048 && (h = !0, t.flags = (t.flags | 2048) ^ 2048), w(t, e | 32);
        const { tokenStart: f } = t, l = mt(t, e, i, a, 1, f);
        L(t, e, 20), t.assignable = 1, n = t.finishNode({
          type: "MemberExpression",
          object: n,
          computed: !0,
          property: l,
          optional: !1
        }, u), h && (t.flags |= 2048);
        break;
      }
      case 67174411: {
        if ((t.flags & 1024) === 1024)
          return t.flags = (t.flags | 1024) ^ 1024, n;
        let h = !1;
        (t.flags & 2048) === 2048 && (h = !0, t.flags = (t.flags | 2048) ^ 2048);
        const f = qi(t, e, i, a);
        t.assignable = 2, n = t.finishNode({
          type: "CallExpression",
          callee: n,
          arguments: f,
          optional: !1
        }, u), h && (t.flags |= 2048);
        break;
      }
      case 67108990: {
        w(t, (e | 262144 | 8) ^ 8), t.flags |= 2048, t.assignable = 2, n = Ya(t, e, i, n, u);
        break;
      }
      default:
        (t.flags & 2048) === 2048 && t.report(166), t.assignable = 2, n = t.finishNode({
          type: "TaggedTemplateExpression",
          tag: n,
          quasi: t.getToken() === 67174408 ? Mi(t, e | 64, i) : Ri(t, e)
        }, u);
    }
    n = G(t, e, i, n, 0, 1, u);
  }
  return r === 0 && (t.flags & 2048) === 2048 && (t.flags = (t.flags | 2048) ^ 2048, n = t.finishNode({
    type: "ChainExpression",
    expression: n
  }, u)), n;
}
function Ya(t, e, i, n, a) {
  let r = !1, u;
  if ((t.getToken() === 69271571 || t.getToken() === 67174411) && (t.flags & 2048) === 2048 && (r = !0, t.flags = (t.flags | 2048) ^ 2048), t.getToken() === 69271571) {
    w(t, e | 32);
    const { tokenStart: h } = t, f = mt(t, e, i, 0, 1, h);
    L(t, e, 20), t.assignable = 2, u = t.finishNode({
      type: "MemberExpression",
      object: n,
      computed: !0,
      optional: !0,
      property: f
    }, a);
  } else if (t.getToken() === 67174411) {
    const h = qi(t, e, i, 0);
    t.assignable = 2, u = t.finishNode({
      type: "CallExpression",
      callee: n,
      arguments: h,
      optional: !0
    }, a);
  } else {
    const h = Vi(t, e, i);
    t.assignable = 2, u = t.finishNode({
      type: "MemberExpression",
      object: n,
      computed: !1,
      optional: !0,
      property: h
    }, a);
  }
  return r && (t.flags |= 2048), u;
}
function Vi(t, e, i) {
  return (t.getToken() & 143360) === 0 && t.getToken() !== -2147483528 && t.getToken() !== -2147483527 && t.getToken() !== 130 && t.report(160), t.getToken() === 130 ? Xe(t, e, i, 0) : tt(t, e);
}
function Za(t, e, i, n, a, r) {
  n && t.report(56), a || t.report(0);
  const u = t.getToken();
  w(t, e | 32);
  const h = Lt(t, e, i, 0, 0, 1);
  return t.assignable & 2 && t.report(55), t.assignable = 2, t.finishNode({
    type: "UpdateExpression",
    argument: h,
    operator: X[u & 255],
    prefix: !0
  }, r);
}
function Dt(t, e, i, n, a, r, u, h, f) {
  if ((t.getToken() & 143360) === 143360) {
    switch (t.getToken()) {
      case 209006:
        return Xa(t, e, i, a, u, f);
      case 241771:
        return Ka(t, e, i, u, r, f);
      case 209005:
        return Wa(t, e, i, u, h, r, a, f);
    }
    const { tokenValue: l } = t, m = t.getToken(), y = tt(t, e | 64);
    return t.getToken() === 10 ? (h || t.report(0), ii(t, e, m), (m & 36864) === 36864 && (t.flags |= 256), ai(t, e, i, l, y, a, r, 0, f)) : (e & 16 && !(e & 32768) && !(e & 8192) && t.tokenValue === "arguments" && t.report(130), (m & 255) === 73 && (e & 1 && t.report(113), n & 24 && t.report(100)), t.assignable = e & 1 && (m & 537079808) === 537079808 ? 2 : 1, y);
  }
  if ((t.getToken() & 134217728) === 134217728)
    return dt(t, e);
  switch (t.getToken()) {
    case 33619993:
    case 33619994:
      return Za(t, e, i, a, h, f);
    case 16863276:
    case 16842798:
    case 16842799:
    case 25233968:
    case 25233969:
    case 16863275:
    case 16863277:
      return za(t, e, i, h, u);
    case 86104:
      return Kn(t, e, i, 0, u, f);
    case 2162700:
      return rr(t, e, i, r ? 0 : 1, u);
    case 69271571:
      return ar(t, e, i, r ? 0 : 1, u);
    case 67174411:
      return ur(t, e | 64, i, r, 1, 0, f);
    case 86021:
    case 86022:
    case 86023:
      return nr(t, e);
    case 86111:
      return sr(t, e);
    case 65540:
      return cr(t, e);
    case 132:
    case 86094:
      return fr(t, e, i, u, f);
    case 86109:
      return $a(t, e);
    case 67174409:
      return Ri(t, e);
    case 67174408:
      return Mi(t, e, i);
    case 86107:
      return lr(t, e, i, u);
    case 134283388:
      return Wn(t, e);
    case 130:
      return Xe(t, e, i, 0);
    case 86106:
      return Ga(t, e, i, a, u, f);
    case 8456256:
      if (t.options.jsx)
        return oi(t, e, i, 0, t.tokenStart);
    default:
      if (we(e, t.getToken()))
        return ji(t, e, i);
      t.report(30, X[t.getToken() & 255]);
  }
}
function Ga(t, e, i, n, a, r) {
  let u = tt(t, e);
  return t.getToken() === 67108877 ? Jn(t, e, u, r) : (n && t.report(142), u = zn(t, e, i, a, r), t.assignable = 2, G(t, e, i, u, a, 0, r));
}
function Jn(t, e, i, n) {
  (e & 2) === 0 && t.report(169), w(t, e);
  const a = t.getToken();
  return a !== 209030 && t.tokenValue !== "meta" ? t.report(174) : a & -2147483648 && t.report(175), t.assignable = 2, t.finishNode({
    type: "MetaProperty",
    meta: i,
    property: tt(t, e)
  }, n);
}
function zn(t, e, i, n, a) {
  L(t, e | 32, 67174411), t.getToken() === 14 && t.report(143);
  const r = et(t, e, i, 1, n, t.tokenStart);
  let u = null;
  if (t.getToken() === 18) {
    if (L(t, e, 18), t.getToken() !== 16) {
      const f = (e | 131072) ^ 131072;
      u = et(t, f, i, 1, n, t.tokenStart);
    }
    H(t, e, 18);
  }
  const h = {
    type: "ImportExpression",
    source: r,
    options: u
  };
  return L(t, e, 16), t.finishNode(h, a);
}
function Ti(t, e) {
  if (!H(t, e, 20579))
    return [];
  L(t, e, 2162700);
  const i = [], n = /* @__PURE__ */ new Set();
  for (; t.getToken() !== 1074790415; ) {
    const a = t.tokenStart, r = er(t, e);
    L(t, e, 21);
    const u = tr(t, e), h = r.type === "Literal" ? r.value : r.name;
    n.has(h) && t.report(145, `${h}`), n.add(h), i.push(t.finishNode({
      type: "ImportAttribute",
      key: r,
      value: u
    }, a)), t.getToken() !== 1074790415 && L(t, e, 18);
  }
  return L(t, e, 1074790415), i;
}
function tr(t, e) {
  if (t.getToken() === 134283267)
    return dt(t, e);
  t.report(30, X[t.getToken() & 255]);
}
function er(t, e) {
  if (t.getToken() === 134283267)
    return dt(t, e);
  if (t.getToken() & 143360)
    return tt(t, e);
  t.report(30, X[t.getToken() & 255]);
}
function je(t, e) {
  if (t.getToken() === 134283267)
    return t.tokenValue.isWellFormed() || t.report(171), dt(t, e);
  if (t.getToken() & 143360)
    return tt(t, e);
  t.report(30, X[t.getToken() & 255]);
}
function Wn(t, e) {
  const { tokenRaw: i, tokenValue: n, tokenStart: a } = t;
  w(t, e), t.assignable = 2;
  const r = {
    type: "Literal",
    value: n,
    bigint: String(n)
  };
  return t.options.raw && (r.raw = i), t.finishNode(r, a);
}
function Ri(t, e) {
  t.assignable = 2;
  const { tokenValue: i, tokenRaw: n, tokenStart: a } = t;
  L(t, e, 67174409);
  const r = [Ue(t, i, n, a, !0)];
  return t.finishNode({
    type: "TemplateLiteral",
    expressions: [],
    quasis: r
  }, a);
}
function Mi(t, e, i) {
  e = (e | 131072) ^ 131072;
  const { tokenValue: n, tokenRaw: a, tokenStart: r } = t;
  L(t, e & -65 | 32, 67174408);
  const u = [Ue(t, n, a, r, !1)], h = [
    mt(t, e & -65, i, 0, 1, t.tokenStart)
  ];
  for (t.getToken() !== 1074790415 && t.report(83); t.setToken(aa(t, e), !0) !== 67174409; ) {
    const { tokenValue: f, tokenRaw: l, tokenStart: m } = t;
    L(t, e & -65 | 32, 67174408), u.push(Ue(t, f, l, m, !1)), h.push(mt(t, e, i, 0, 1, t.tokenStart)), t.getToken() !== 1074790415 && t.report(83);
  }
  {
    const { tokenValue: f, tokenRaw: l, tokenStart: m } = t;
    L(t, e, 67174409), u.push(Ue(t, f, l, m, !0));
  }
  return t.finishNode({
    type: "TemplateLiteral",
    expressions: h,
    quasis: u
  }, r);
}
function Ue(t, e, i, n, a) {
  const r = t.finishNode({
    type: "TemplateElement",
    value: {
      cooked: e,
      raw: i
    },
    tail: a
  }, n), u = a ? 1 : 2;
  return t.options.ranges && (r.start += 1, r.range[0] += 1, r.end -= u, r.range[1] -= u), t.options.loc && (r.loc.start.column += 1, r.loc.end.column -= u), r;
}
function ir(t, e, i) {
  const n = t.tokenStart;
  e = (e | 131072) ^ 131072, L(t, e | 32, 14);
  const a = et(t, e, i, 1, 0, t.tokenStart);
  return t.assignable = 1, t.finishNode({
    type: "SpreadElement",
    argument: a
  }, n);
}
function qi(t, e, i, n) {
  w(t, e | 32);
  const a = [];
  if (t.getToken() === 16)
    return w(t, e | 64), a;
  for (; t.getToken() !== 16 && (t.getToken() === 14 ? a.push(ir(t, e, i)) : a.push(et(t, e, i, 1, n, t.tokenStart)), !(t.getToken() !== 18 || (w(t, e | 32), t.getToken() === 16))); )
    ;
  return L(t, e | 64, 16), a;
}
function tt(t, e) {
  const { tokenValue: i, tokenStart: n } = t, a = i === "await" && (t.getToken() & -2147483648) === 0;
  return w(t, e | (a ? 32 : 0)), t.finishNode({
    type: "Identifier",
    name: i
  }, n);
}
function dt(t, e) {
  const { tokenValue: i, tokenRaw: n, tokenStart: a } = t;
  if (t.getToken() === 134283388)
    return Wn(t, e);
  const r = {
    type: "Literal",
    value: i
  };
  return t.options.raw && (r.raw = n), w(t, e), t.assignable = 2, t.finishNode(r, a);
}
function nr(t, e) {
  const i = t.tokenStart, n = X[t.getToken() & 255], r = {
    type: "Literal",
    value: t.getToken() === 86023 ? null : n === "true"
  };
  return t.options.raw && (r.raw = n), w(t, e), t.assignable = 2, t.finishNode(r, i);
}
function sr(t, e) {
  const { tokenStart: i } = t;
  return w(t, e), t.assignable = 2, t.finishNode({
    type: "ThisExpression"
  }, i);
}
function Qt(t, e, i, n, a, r, u, h, f) {
  w(t, e | 32);
  const l = r ? Bi(t, e, 8391476) : 0;
  let m = null, y, A = i ? t.createScope() : void 0;
  if (t.getToken() === 67174411)
    (u & 1) === 0 && t.report(39, "Function");
  else {
    const E = a & 4 && ((e & 8) === 0 || (e & 2) === 0) ? 4 : 64 | (h ? 1024 : 0) | (l ? 1024 : 0);
    Fn(t, e, t.getToken()), i && (E & 4 ? i.addVarName(e, t.tokenValue, E) : i.addBlockName(e, t.tokenValue, E, a), A = A?.createChildScope(128), u && u & 2 && t.declareUnboundVariable(t.tokenValue)), y = t.getToken(), t.getToken() & 143360 ? m = tt(t, e) : t.report(30, X[t.getToken() & 255]);
  }
  e = (e | 28416) ^ 28416 | 65536 | (h ? 2048 : 0) | (l ? 1024 : 0) | (l ? 0 : 262144), A = A?.createChildScope(256);
  const N = $n(t, (e | 8192) & -524289, A, n, 0, 1), _ = 524428, q = si(t, (e | _) ^ _ | 32768 | 4096, A?.createChildScope(64), n, 8, y, A);
  return t.finishNode({
    type: "FunctionDeclaration",
    id: m,
    params: N,
    body: q,
    async: h === 1,
    generator: l === 1
  }, f);
}
function Kn(t, e, i, n, a, r) {
  w(t, e | 32);
  const u = Bi(t, e, 8391476), h = (n ? 2048 : 0) | (u ? 1024 : 0);
  let f = null, l, m = t.createScopeIfLexical();
  const y = 552704;
  t.getToken() & 143360 && (Fn(t, (e | y) ^ y | h, t.getToken()), m = m?.createChildScope(128), l = t.getToken(), f = tt(t, e)), e = (e | y) ^ y | 65536 | h | (u ? 0 : 262144), m = m?.createChildScope(256);
  const A = $n(t, (e | 8192) & -524289, m, i, a, 1), N = si(t, e & -131229 | 32768 | 4096, m?.createChildScope(64), i, 0, l, m);
  return t.assignable = 2, t.finishNode({
    type: "FunctionExpression",
    id: f,
    params: A,
    body: N,
    async: n === 1,
    generator: u === 1
  }, r);
}
function ar(t, e, i, n, a) {
  const r = _t(t, e, void 0, i, n, a, 0, 2, 0);
  return t.destructible & 64 && t.report(63), t.destructible & 8 && t.report(62), r;
}
function _t(t, e, i, n, a, r, u, h, f) {
  const { tokenStart: l } = t;
  w(t, e | 32);
  const m = [];
  let y = 0;
  for (e = (e | 131072) ^ 131072; t.getToken() !== 20; )
    if (H(t, e | 32, 18))
      m.push(null);
    else {
      let N;
      const { tokenStart: _, tokenValue: q } = t, E = t.getToken();
      if (E & 143360)
        if (N = Dt(t, e, n, h, 0, 1, r, 1, _), t.getToken() === 1077936155) {
          t.assignable & 2 && t.report(26), w(t, e | 32), i?.addVarOrBlock(e, q, h, f);
          const B = et(t, e, n, 1, r, t.tokenStart);
          N = t.finishNode(u ? {
            type: "AssignmentPattern",
            left: N,
            right: B
          } : {
            type: "AssignmentExpression",
            operator: "=",
            left: N,
            right: B
          }, _), y |= t.destructible & 256 ? 256 : 0 | t.destructible & 128 ? 128 : 0;
        } else t.getToken() === 18 || t.getToken() === 20 ? (t.assignable & 2 ? y |= 16 : i?.addVarOrBlock(e, q, h, f), y |= t.destructible & 256 ? 256 : 0 | t.destructible & 128 ? 128 : 0) : (y |= h & 1 ? 32 : (h & 2) === 0 ? 16 : 0, N = G(t, e, n, N, r, 0, _), t.getToken() !== 18 && t.getToken() !== 20 ? (t.getToken() !== 1077936155 && (y |= 16), N = it(t, e, n, r, u, _, N)) : t.getToken() !== 1077936155 && (y |= t.assignable & 2 ? 16 : 32));
      else E & 2097152 ? (N = t.getToken() === 2162700 ? Bt(t, e, i, n, 0, r, u, h, f) : _t(t, e, i, n, 0, r, u, h, f), y |= t.destructible, t.assignable = t.destructible & 16 ? 2 : 1, t.getToken() === 18 || t.getToken() === 20 ? t.assignable & 2 && (y |= 16) : t.destructible & 8 ? t.report(71) : (N = G(t, e, n, N, r, 0, _), y = t.assignable & 2 ? 16 : 0, t.getToken() !== 18 && t.getToken() !== 20 ? N = it(t, e, n, r, u, _, N) : t.getToken() !== 1077936155 && (y |= t.assignable & 2 ? 16 : 32))) : E === 14 ? (N = ce(t, e, i, n, 20, h, f, 0, r, u), y |= t.destructible, t.getToken() !== 18 && t.getToken() !== 20 && t.report(30, X[t.getToken() & 255])) : (N = Lt(t, e, n, 1, 0, 1), t.getToken() !== 18 && t.getToken() !== 20 ? (N = it(t, e, n, r, u, _, N), (h & 3) === 0 && E === 67174411 && (y |= 16)) : t.assignable & 2 ? y |= 16 : E === 67174411 && (y |= t.assignable & 1 && h & 3 ? 32 : 16));
      if (m.push(N), H(t, e | 32, 18)) {
        if (t.getToken() === 20)
          break;
      } else
        break;
    }
  L(t, e, 20);
  const A = t.finishNode({
    type: u ? "ArrayPattern" : "ArrayExpression",
    elements: m
  }, l);
  return !a && t.getToken() & 4194304 ? Xn(t, e, n, y, r, u, l, A) : (t.destructible = y, A);
}
function Xn(t, e, i, n, a, r, u, h) {
  t.getToken() !== 1077936155 && t.report(26), w(t, e | 32), n & 16 && t.report(26), r || Vt(t, h);
  const { tokenStart: f } = t, l = et(t, e, i, 1, a, f);
  return t.destructible = (n | 64 | 8) ^ 72 | (t.destructible & 128 ? 128 : 0) | (t.destructible & 256 ? 256 : 0), t.finishNode(r ? {
    type: "AssignmentPattern",
    left: h,
    right: l
  } : {
    type: "AssignmentExpression",
    left: h,
    operator: "=",
    right: l
  }, u);
}
function ce(t, e, i, n, a, r, u, h, f, l) {
  const { tokenStart: m } = t;
  w(t, e | 32);
  let y = null, A = 0;
  const { tokenValue: N, tokenStart: _ } = t;
  let q = t.getToken();
  if (q & 143360)
    t.assignable = 1, y = Dt(t, e, n, r, 0, 1, f, 1, _), q = t.getToken(), y = G(t, e, n, y, f, 0, _), t.getToken() !== 18 && t.getToken() !== a && (t.assignable & 2 && t.getToken() === 1077936155 && t.report(71), A |= 16, y = it(t, e, n, f, l, _, y)), t.assignable & 2 ? A |= 16 : q === a || q === 18 ? i?.addVarOrBlock(e, N, r, u) : A |= 32, A |= t.destructible & 128 ? 128 : 0;
  else if (q === a)
    t.report(41);
  else if (q & 2097152)
    y = t.getToken() === 2162700 ? Bt(t, e, i, n, 1, f, l, r, u) : _t(t, e, i, n, 1, f, l, r, u), q = t.getToken(), q !== 1077936155 && q !== a && q !== 18 ? (t.destructible & 8 && t.report(71), y = G(t, e, n, y, f, 0, _), A |= t.assignable & 2 ? 16 : 0, (t.getToken() & 4194304) === 4194304 ? (t.getToken() !== 1077936155 && (A |= 16), y = it(t, e, n, f, l, _, y)) : ((t.getToken() & 8388608) === 8388608 && (y = $t(t, e, n, 1, _, 4, q, y)), H(t, e | 32, 22) && (y = te(t, e, n, y, _)), A |= t.assignable & 2 ? 16 : 32)) : A |= a === 1074790415 && q !== 1077936155 ? 16 : t.destructible;
  else {
    A |= 32, y = Lt(t, e, n, 1, f, 1);
    const { tokenStart: E } = t, B = t.getToken();
    return B === 1077936155 ? (t.assignable & 2 && t.report(26), y = it(t, e, n, f, l, E, y), A |= 16) : (B === 18 ? A |= 16 : B !== a && (y = it(t, e, n, f, l, E, y)), A |= t.assignable & 1 ? 32 : 16), t.destructible = A, t.getToken() !== a && t.getToken() !== 18 && t.report(161), t.finishNode({
      type: l ? "RestElement" : "SpreadElement",
      argument: y
    }, m);
  }
  if (t.getToken() !== a)
    if (r & 1 && (A |= h ? 16 : 32), H(t, e | 32, 1077936155)) {
      A & 16 && t.report(26), Vt(t, y);
      const E = et(t, e, n, 1, f, t.tokenStart);
      y = t.finishNode(l ? {
        type: "AssignmentPattern",
        left: y,
        right: E
      } : {
        type: "AssignmentExpression",
        left: y,
        operator: "=",
        right: E
      }, _), A = 16;
    } else
      A |= 16;
  return t.destructible = A, t.finishNode({
    type: l ? "RestElement" : "SpreadElement",
    argument: y
  }, m);
}
function Ot(t, e, i, n, a, r) {
  const u = 11264 | ((n & 64) === 0 ? 16896 : 0);
  e = (e | u) ^ u | (n & 8 ? 1024 : 0) | (n & 16 ? 2048 : 0) | (n & 64 ? 16384 : 0) | 256 | 32768 | 65536;
  let h = t.createScopeIfLexical(256);
  const f = or(t, (e | 8192) & -524289, h, i, n, 1, a);
  h = h?.createChildScope(64);
  const l = si(t, e & -655373 | 32768 | 4096, h, i, 0, void 0, h?.parent);
  return t.finishNode({
    type: "FunctionExpression",
    params: f,
    body: l,
    async: (n & 16) > 0,
    generator: (n & 8) > 0,
    id: null
  }, r);
}
function rr(t, e, i, n, a) {
  const r = Bt(t, e, void 0, i, n, a, 0, 2, 0);
  return t.destructible & 64 && t.report(63), t.destructible & 8 && t.report(62), r;
}
function Bt(t, e, i, n, a, r, u, h, f) {
  const { tokenStart: l } = t;
  w(t, e);
  const m = [];
  let y = 0, A = 0;
  for (e = (e | 131072) ^ 131072; t.getToken() !== 1074790415; ) {
    const { tokenValue: _, tokenStart: q } = t, E = t.getToken();
    if (E === 14)
      m.push(ce(t, e, i, n, 1074790415, h, f, 0, r, u));
    else {
      let B = 0, ct = null, P;
      if (t.getToken() & 143360 || t.getToken() === -2147483528 || t.getToken() === -2147483527)
        if (t.getToken() === -2147483527 && (y |= 16), ct = tt(t, e), t.getToken() === 18 || t.getToken() === 1074790415 || t.getToken() === 1077936155)
          if (B |= 4, e & 1 && (E & 537079808) === 537079808 ? y |= 16 : ze(t, e, h, E, 0), i?.addVarOrBlock(e, _, h, f), H(t, e | 32, 1077936155)) {
            y |= 8;
            const J = et(t, e, n, 1, r, t.tokenStart);
            y |= t.destructible & 256 ? 256 : 0 | t.destructible & 128 ? 128 : 0, P = t.finishNode({
              type: "AssignmentPattern",
              left: t.cloneIdentifier(ct),
              right: J
            }, q);
          } else
            y |= (E === 209006 ? 128 : 0) | (E === -2147483528 ? 16 : 0), P = t.cloneIdentifier(ct);
        else if (H(t, e | 32, 21)) {
          const { tokenStart: J } = t;
          if (_ === "__proto__" && A++, t.getToken() & 143360) {
            const Gt = t.getToken(), Y = t.tokenValue;
            P = Dt(t, e, n, h, 0, 1, r, 1, J);
            const gt = t.getToken();
            P = G(t, e, n, P, r, 0, J), t.getToken() === 18 || t.getToken() === 1074790415 ? gt === 1077936155 || gt === 1074790415 || gt === 18 ? (y |= t.destructible & 128 ? 128 : 0, t.assignable & 2 ? y |= 16 : (Gt & 143360) === 143360 && i?.addVarOrBlock(e, Y, h, f)) : y |= t.assignable & 1 ? 32 : 16 : (t.getToken() & 4194304) === 4194304 ? (t.assignable & 2 ? y |= 16 : gt !== 1077936155 ? y |= 32 : i?.addVarOrBlock(e, Y, h, f), P = it(t, e, n, r, u, J, P)) : (y |= 16, (t.getToken() & 8388608) === 8388608 && (P = $t(t, e, n, 1, J, 4, gt, P)), H(t, e | 32, 22) && (P = te(t, e, n, P, J)));
          } else (t.getToken() & 2097152) === 2097152 ? (P = t.getToken() === 69271571 ? _t(t, e, i, n, 0, r, u, h, f) : Bt(t, e, i, n, 0, r, u, h, f), y = t.destructible, t.assignable = y & 16 ? 2 : 1, t.getToken() === 18 || t.getToken() === 1074790415 ? t.assignable & 2 && (y |= 16) : t.destructible & 8 ? t.report(71) : (P = G(t, e, n, P, r, 0, J), y = t.assignable & 2 ? 16 : 0, (t.getToken() & 4194304) === 4194304 ? P = Re(t, e, n, r, u, J, P) : ((t.getToken() & 8388608) === 8388608 && (P = $t(t, e, n, 1, J, 4, E, P)), H(t, e | 32, 22) && (P = te(t, e, n, P, J)), y |= t.assignable & 2 ? 16 : 32))) : (P = Lt(t, e, n, 1, r, 1), y |= t.assignable & 1 ? 32 : 16, t.getToken() === 18 || t.getToken() === 1074790415 ? t.assignable & 2 && (y |= 16) : (P = G(t, e, n, P, r, 0, J), y = t.assignable & 2 ? 16 : 0, t.getToken() !== 18 && E !== 1074790415 && (t.getToken() !== 1077936155 && (y |= 16), P = it(t, e, n, r, u, J, P))));
        } else t.getToken() === 69271571 ? (y |= 16, E === 209005 && (B |= 16), B |= (E === 209008 ? 256 : E === 209009 ? 512 : 1) | 2, ct = re(t, e, n, r), y |= t.assignable, P = Ot(t, e, n, B, r, t.tokenStart)) : t.getToken() & 143360 ? (y |= 16, E === -2147483528 && t.report(95), E === 209005 ? (t.flags & 1 && t.report(132), B |= 17) : E === 209008 ? B |= 256 : E === 209009 ? B |= 512 : t.report(0), ct = tt(t, e), P = Ot(t, e, n, B, r, t.tokenStart)) : t.getToken() === 67174411 ? (y |= 16, B |= 1, P = Ot(t, e, n, B, r, t.tokenStart)) : t.getToken() === 8391476 ? (y |= 16, E === 209008 ? t.report(42) : E === 209009 ? t.report(43) : E !== 209005 && t.report(30, X[52]), w(t, e), B |= 9 | (E === 209005 ? 16 : 0), t.getToken() & 143360 ? ct = tt(t, e) : (t.getToken() & 134217728) === 134217728 ? ct = dt(t, e) : t.getToken() === 69271571 ? (B |= 2, ct = re(t, e, n, r), y |= t.assignable) : t.report(30, X[t.getToken() & 255]), P = Ot(t, e, n, B, r, t.tokenStart)) : (t.getToken() & 134217728) === 134217728 ? (E === 209005 && (B |= 16), B |= E === 209008 ? 256 : E === 209009 ? 512 : 1, y |= 16, ct = dt(t, e), P = Ot(t, e, n, B, r, t.tokenStart)) : t.report(133);
      else if ((t.getToken() & 134217728) === 134217728)
        if (ct = dt(t, e), t.getToken() === 21) {
          L(t, e | 32, 21);
          const { tokenStart: J } = t;
          if (_ === "__proto__" && A++, t.getToken() & 143360) {
            P = Dt(t, e, n, h, 0, 1, r, 1, J);
            const { tokenValue: Gt } = t, Y = t.getToken();
            P = G(t, e, n, P, r, 0, J), t.getToken() === 18 || t.getToken() === 1074790415 ? Y === 1077936155 || Y === 1074790415 || Y === 18 ? t.assignable & 2 ? y |= 16 : i?.addVarOrBlock(e, Gt, h, f) : y |= t.assignable & 1 ? 32 : 16 : t.getToken() === 1077936155 ? (t.assignable & 2 && (y |= 16), P = it(t, e, n, r, u, J, P)) : (y |= 16, P = it(t, e, n, r, u, J, P));
          } else (t.getToken() & 2097152) === 2097152 ? (P = t.getToken() === 69271571 ? _t(t, e, i, n, 0, r, u, h, f) : Bt(t, e, i, n, 0, r, u, h, f), y = t.destructible, t.assignable = y & 16 ? 2 : 1, t.getToken() === 18 || t.getToken() === 1074790415 ? t.assignable & 2 && (y |= 16) : (t.destructible & 8) !== 8 && (P = G(t, e, n, P, r, 0, J), y = t.assignable & 2 ? 16 : 0, (t.getToken() & 4194304) === 4194304 ? P = Re(t, e, n, r, u, J, P) : ((t.getToken() & 8388608) === 8388608 && (P = $t(t, e, n, 1, J, 4, E, P)), H(t, e | 32, 22) && (P = te(t, e, n, P, J)), y |= t.assignable & 2 ? 16 : 32))) : (P = Lt(t, e, n, 1, 0, 1), y |= t.assignable & 1 ? 32 : 16, t.getToken() === 18 || t.getToken() === 1074790415 ? t.assignable & 2 && (y |= 16) : (P = G(t, e, n, P, r, 0, J), y = t.assignable & 1 ? 0 : 16, t.getToken() !== 18 && t.getToken() !== 1074790415 && (t.getToken() !== 1077936155 && (y |= 16), P = it(t, e, n, r, u, J, P))));
        } else t.getToken() === 67174411 ? (B |= 1, P = Ot(t, e, n, B, r, t.tokenStart), y = t.assignable | 16) : t.report(134);
      else if (t.getToken() === 69271571)
        if (ct = re(t, e, n, r), y |= t.destructible & 256 ? 256 : 0, B |= 2, t.getToken() === 21) {
          w(t, e | 32);
          const { tokenStart: J, tokenValue: Gt } = t, Y = t.getToken();
          if (t.getToken() & 143360) {
            P = Dt(t, e, n, h, 0, 1, r, 1, J);
            const gt = t.getToken();
            P = G(t, e, n, P, r, 0, J), (t.getToken() & 4194304) === 4194304 ? (y |= t.assignable & 2 ? 16 : gt === 1077936155 ? 0 : 32, P = Re(t, e, n, r, u, J, P)) : t.getToken() === 18 || t.getToken() === 1074790415 ? gt === 1077936155 || gt === 1074790415 || gt === 18 ? t.assignable & 2 ? y |= 16 : (Y & 143360) === 143360 && i?.addVarOrBlock(e, Gt, h, f) : y |= t.assignable & 1 ? 32 : 16 : (y |= 16, P = it(t, e, n, r, u, J, P));
          } else (t.getToken() & 2097152) === 2097152 ? (P = t.getToken() === 69271571 ? _t(t, e, i, n, 0, r, u, h, f) : Bt(t, e, i, n, 0, r, u, h, f), y = t.destructible, t.assignable = y & 16 ? 2 : 1, t.getToken() === 18 || t.getToken() === 1074790415 ? t.assignable & 2 && (y |= 16) : y & 8 ? t.report(62) : (P = G(t, e, n, P, r, 0, J), y = t.assignable & 2 ? y | 16 : 0, (t.getToken() & 4194304) === 4194304 ? (t.getToken() !== 1077936155 && (y |= 16), P = Re(t, e, n, r, u, J, P)) : ((t.getToken() & 8388608) === 8388608 && (P = $t(t, e, n, 1, J, 4, E, P)), H(t, e | 32, 22) && (P = te(t, e, n, P, J)), y |= t.assignable & 2 ? 16 : 32))) : (P = Lt(t, e, n, 1, 0, 1), y |= t.assignable & 1 ? 32 : 16, t.getToken() === 18 || t.getToken() === 1074790415 ? t.assignable & 2 && (y |= 16) : (P = G(t, e, n, P, r, 0, J), y = t.assignable & 1 ? 0 : 16, t.getToken() !== 18 && t.getToken() !== 1074790415 && (t.getToken() !== 1077936155 && (y |= 16), P = it(t, e, n, r, u, J, P))));
        } else t.getToken() === 67174411 ? (B |= 1, P = Ot(t, e, n, B, r, t.tokenStart), y = 16) : t.report(44);
      else if (E === 8391476)
        if (L(t, e | 32, 8391476), B |= 8, t.getToken() & 143360) {
          const J = t.getToken();
          if (ct = tt(t, e), B |= 1, t.getToken() === 67174411)
            y |= 16, P = Ot(t, e, n, B, r, t.tokenStart);
          else
            throw new ot(t.tokenStart, t.currentLocation, J === 209005 ? 46 : J === 209008 || t.getToken() === 209009 ? 45 : 47, X[J & 255]);
        } else (t.getToken() & 134217728) === 134217728 ? (y |= 16, ct = dt(t, e), B |= 1, P = Ot(t, e, n, B, r, t.tokenStart)) : t.getToken() === 69271571 ? (y |= 16, B |= 3, ct = re(t, e, n, r), P = Ot(t, e, n, B, r, t.tokenStart)) : t.report(126);
      else
        t.report(30, X[E & 255]);
      y |= t.destructible & 128 ? 128 : 0, t.destructible = y, m.push(t.finishNode({
        type: "Property",
        key: ct,
        value: P,
        kind: B & 768 ? B & 512 ? "set" : "get" : "init",
        computed: (B & 2) > 0,
        method: (B & 1) > 0,
        shorthand: (B & 4) > 0
      }, q));
    }
    if (y |= t.destructible, t.getToken() !== 18)
      break;
    w(t, e);
  }
  L(t, e, 1074790415), A > 1 && (y |= 64);
  const N = t.finishNode({
    type: u ? "ObjectPattern" : "ObjectExpression",
    properties: m
  }, l);
  return !a && t.getToken() & 4194304 ? Xn(t, e, n, y, r, u, l, N) : (t.destructible = y, N);
}
function or(t, e, i, n, a, r, u) {
  L(t, e, 67174411);
  const h = [];
  if (t.flags = (t.flags | 128) ^ 128, t.getToken() === 16)
    return a & 512 && t.report(37, "Setter", "one", ""), w(t, e), h;
  a & 256 && t.report(37, "Getter", "no", "s"), a & 512 && t.getToken() === 14 && t.report(38), e = (e | 131072) ^ 131072;
  let f = 0, l = 0;
  for (; t.getToken() !== 18; ) {
    let m = null;
    const { tokenStart: y } = t;
    if (t.getToken() & 143360 ? ((e & 1) === 0 && ((t.getToken() & 36864) === 36864 && (t.flags |= 256), (t.getToken() & 537079808) === 537079808 && (t.flags |= 512)), m = Hi(t, e, i, a | 1, 0)) : (t.getToken() === 2162700 ? m = Bt(t, e, i, n, 1, u, 1, r, 0) : t.getToken() === 69271571 ? m = _t(t, e, i, n, 1, u, 1, r, 0) : t.getToken() === 14 && (m = ce(t, e, i, n, 16, r, 0, 0, u, 1)), l = 1, t.destructible & 48 && t.report(50)), t.getToken() === 1077936155) {
      w(t, e | 32), l = 1;
      const A = et(t, e, n, 1, 0, t.tokenStart);
      m = t.finishNode({
        type: "AssignmentPattern",
        left: m,
        right: A
      }, y);
    }
    if (f++, h.push(m), !H(t, e, 18) || t.getToken() === 16)
      break;
  }
  return a & 512 && f !== 1 && t.report(37, "Setter", "one", ""), i?.reportScopeError(), l && (t.flags |= 128), L(t, e, 16), h;
}
function re(t, e, i, n) {
  w(t, e | 32);
  const a = et(t, (e | 131072) ^ 131072, i, 1, n, t.tokenStart);
  return L(t, e, 20), a;
}
function ur(t, e, i, n, a, r, u) {
  t.flags = (t.flags | 128) ^ 128;
  const h = t.tokenStart;
  w(t, e | 32 | 262144);
  const f = t.createScopeIfLexical()?.createChildScope(512);
  if (e = (e | 131072) ^ 131072, H(t, e, 16))
    return Ke(t, e, f, i, [], n, 0, u);
  let l = 0;
  t.destructible &= -385;
  let m, y = [], A = 0, N = 0, _ = 0;
  const q = t.tokenStart;
  for (t.assignable = 1; t.getToken() !== 16; ) {
    const { tokenStart: E } = t, B = t.getToken();
    if (B & 143360)
      f?.addBlockName(e, t.tokenValue, 1, 0), (B & 537079808) === 537079808 ? N = 1 : (B & 36864) === 36864 && (_ = 1), m = Dt(t, e, i, a, 0, 1, 1, 1, E), t.getToken() === 16 || t.getToken() === 18 ? t.assignable & 2 && (l |= 16, N = 1) : (t.getToken() === 1077936155 ? N = 1 : l |= 16, m = G(t, e, i, m, 1, 0, E), t.getToken() !== 16 && t.getToken() !== 18 && (m = it(t, e, i, 1, 0, E, m)));
    else if ((B & 2097152) === 2097152)
      m = B === 2162700 ? Bt(t, e | 262144, f, i, 0, 1, 0, a, r) : _t(t, e | 262144, f, i, 0, 1, 0, a, r), l |= t.destructible, N = 1, t.assignable = 2, t.getToken() !== 16 && t.getToken() !== 18 && (l & 8 && t.report(122), m = G(t, e, i, m, 0, 0, E), l |= 16, t.getToken() !== 16 && t.getToken() !== 18 && (m = it(t, e, i, 0, 0, E, m)));
    else if (B === 14) {
      m = ce(t, e, f, i, 16, a, r, 0, 1, 0), t.destructible & 16 && t.report(74), N = 1, A && (t.getToken() === 16 || t.getToken() === 18) && y.push(m), l |= 8;
      break;
    } else {
      if (l |= 16, m = et(t, e, i, 1, 1, E), A && (t.getToken() === 16 || t.getToken() === 18) && y.push(m), t.getToken() === 18 && (A || (A = 1, y = [m])), A) {
        for (; H(t, e | 32, 18); )
          y.push(et(t, e, i, 1, 1, t.tokenStart));
        t.assignable = 2, m = t.finishNode({
          type: "SequenceExpression",
          expressions: y
        }, q);
      }
      return L(t, e, 16), t.destructible = l, t.options.preserveParens ? t.finishNode({
        type: "ParenthesizedExpression",
        expression: m
      }, h) : m;
    }
    if (A && (t.getToken() === 16 || t.getToken() === 18) && y.push(m), !H(t, e | 32, 18))
      break;
    if (A || (A = 1, y = [m]), t.getToken() === 16) {
      l |= 8;
      break;
    }
  }
  return A && (t.assignable = 2, m = t.finishNode({
    type: "SequenceExpression",
    expressions: y
  }, q)), L(t, e, 16), l & 16 && l & 8 && t.report(151), l |= t.destructible & 256 ? 256 : 0 | t.destructible & 128 ? 128 : 0, t.getToken() === 10 ? (l & 48 && t.report(49), e & 2050 && l & 128 && t.report(31), e & 1025 && l & 256 && t.report(32), N && (t.flags |= 128), _ && (t.flags |= 256), Ke(t, e, f, i, A ? y : [m], n, 0, u)) : (l & 64 && t.report(63), l & 8 && t.report(144), t.destructible = (t.destructible | 256) ^ 256 | l, t.options.preserveParens ? t.finishNode({
    type: "ParenthesizedExpression",
    expression: m
  }, h) : m);
}
function ji(t, e, i) {
  const { tokenStart: n } = t, { tokenValue: a } = t;
  let r = 0, u = 0;
  (t.getToken() & 537079808) === 537079808 ? r = 1 : (t.getToken() & 36864) === 36864 && (u = 1);
  const h = tt(t, e);
  if (t.assignable = 1, t.getToken() === 10) {
    const f = t.options.lexical ? ni(t, e, a) : void 0;
    return r && (t.flags |= 128), u && (t.flags |= 256), Ie(t, e, f, i, [h], 0, n);
  }
  return h;
}
function ai(t, e, i, n, a, r, u, h, f) {
  u || t.report(57), r && t.report(51), t.flags &= -129;
  const l = t.options.lexical ? ni(t, e, n) : void 0;
  return Ie(t, e, l, i, [a], h, f);
}
function Ke(t, e, i, n, a, r, u, h) {
  r || t.report(57);
  for (let f = 0; f < a.length; ++f)
    Vt(t, a[f]);
  return Ie(t, e, i, n, a, u, h);
}
function Ie(t, e, i, n, a, r, u) {
  t.flags & 1 && t.report(48), L(t, e | 32, 10);
  const h = 535552;
  e = (e | h) ^ h | (r ? 2048 : 0);
  const f = t.getToken() !== 2162700;
  let l;
  if (i?.reportScopeError(), f)
    t.flags = (t.flags | 512 | 256 | 64 | 4096) ^ 4928, l = et(t, e, n, 1, 0, t.tokenStart);
  else {
    i = i?.createChildScope(64);
    const m = 131084;
    switch (l = si(t, (e | m) ^ m | 4096, i, n, 16, void 0, void 0), t.getToken()) {
      case 69271571:
        (t.flags & 1) === 0 && t.report(116);
        break;
      case 67108877:
      case 67174409:
      case 22:
        t.report(117);
      case 67174411:
        (t.flags & 1) === 0 && t.report(116), t.flags |= 1024;
        break;
    }
    (t.getToken() & 8388608) === 8388608 && (t.flags & 1) === 0 && t.report(30, X[t.getToken() & 255]), (t.getToken() & 33619968) === 33619968 && t.report(125);
  }
  return t.assignable = 2, t.finishNode({
    type: "ArrowFunctionExpression",
    params: a,
    body: l,
    async: r === 1,
    expression: f,
    generator: !1
  }, u);
}
function $n(t, e, i, n, a, r) {
  L(t, e, 67174411), t.flags = (t.flags | 128) ^ 128;
  const u = [];
  if (H(t, e, 16))
    return u;
  e = (e | 131072) ^ 131072;
  let h = 0;
  for (; t.getToken() !== 18; ) {
    let f;
    const { tokenStart: l } = t, m = t.getToken();
    if (m & 143360 ? ((e & 1) === 0 && ((m & 36864) === 36864 && (t.flags |= 256), (m & 537079808) === 537079808 && (t.flags |= 512)), f = Hi(t, e, i, r | 1, 0)) : (m === 2162700 ? f = Bt(t, e, i, n, 1, a, 1, r, 0) : m === 69271571 ? f = _t(t, e, i, n, 1, a, 1, r, 0) : m === 14 ? f = ce(t, e, i, n, 16, r, 0, 0, a, 1) : t.report(30, X[m & 255]), h = 1, t.destructible & 48 && t.report(50)), t.getToken() === 1077936155) {
      w(t, e | 32), h = 1;
      const y = et(t, e, n, 1, a, t.tokenStart);
      f = t.finishNode({
        type: "AssignmentPattern",
        left: f,
        right: y
      }, l);
    }
    if (u.push(f), !H(t, e, 18) || t.getToken() === 16)
      break;
  }
  return h && (t.flags |= 128), (h || e & 1) && i?.reportScopeError(), L(t, e, 16), u;
}
function He(t, e, i, n, a, r) {
  const u = t.getToken();
  if (u & 67108864) {
    if (u === 67108877) {
      w(t, e | 262144), t.assignable = 1;
      const h = Vi(t, e, i);
      return He(t, e, i, t.finishNode({
        type: "MemberExpression",
        object: n,
        computed: !1,
        property: h,
        optional: !1
      }, r), 0, r);
    } else if (u === 69271571) {
      w(t, e | 32);
      const { tokenStart: h } = t, f = mt(t, e, i, a, 1, h);
      return L(t, e, 20), t.assignable = 1, He(t, e, i, t.finishNode({
        type: "MemberExpression",
        object: n,
        computed: !0,
        property: f,
        optional: !1
      }, r), 0, r);
    } else if (u === 67174408 || u === 67174409)
      return t.assignable = 2, He(t, e, i, t.finishNode({
        type: "TaggedTemplateExpression",
        tag: n,
        quasi: t.getToken() === 67174408 ? Mi(t, e | 64, i) : Ri(t, e | 64)
      }, r), 0, r);
  }
  return n;
}
function lr(t, e, i, n) {
  const { tokenStart: a } = t, r = tt(t, e | 32), { tokenStart: u } = t;
  if (H(t, e, 67108877)) {
    if (e & 65536 && t.getToken() === 209029)
      return t.assignable = 2, hr(t, e, r, a);
    t.report(94);
  }
  t.assignable = 2, (t.getToken() & 16842752) === 16842752 && t.report(65, X[t.getToken() & 255]);
  const h = Dt(t, e, i, 2, 1, 0, n, 1, u);
  e = (e | 131072) ^ 131072, t.getToken() === 67108990 && t.report(168);
  const f = He(t, e, i, h, n, u);
  return t.assignable = 2, t.finishNode({
    type: "NewExpression",
    callee: f,
    arguments: t.getToken() === 67174411 ? qi(t, e, i, n) : []
  }, a);
}
function hr(t, e, i, n) {
  const a = tt(t, e);
  return t.finishNode({
    type: "MetaProperty",
    meta: i,
    property: a
  }, n);
}
function Qn(t, e, i, n, a) {
  return t.getToken() === 209006 && t.report(31), e & 1025 && t.getToken() === 241771 && t.report(32), ii(t, e, t.getToken()), (t.getToken() & 36864) === 36864 && (t.flags |= 256), ai(t, e & -524289 | 2048, i, t.tokenValue, tt(t, e), 0, n, 1, a);
}
function Ui(t, e, i, n, a, r, u, h, f) {
  w(t, e | 32);
  const l = t.createScopeIfLexical()?.createChildScope(512);
  if (e = (e | 131072) ^ 131072, H(t, e, 16))
    return t.getToken() === 10 ? (h & 1 && t.report(48), Ke(t, e, l, i, [], a, 1, f)) : t.finishNode({
      type: "CallExpression",
      callee: n,
      arguments: [],
      optional: !1
    }, f);
  let m = 0, y = null, A = 0;
  t.destructible = (t.destructible | 256 | 128) ^ 384;
  const N = [];
  for (; t.getToken() !== 16; ) {
    const { tokenStart: _ } = t, q = t.getToken();
    if (q & 143360)
      l?.addBlockName(e, t.tokenValue, r, 0), (q & 537079808) === 537079808 ? t.flags |= 512 : (q & 36864) === 36864 && (t.flags |= 256), y = Dt(t, e, i, r, 0, 1, 1, 1, _), t.getToken() === 16 || t.getToken() === 18 ? t.assignable & 2 && (m |= 16, A = 1) : (t.getToken() === 1077936155 ? A = 1 : m |= 16, y = G(t, e, i, y, 1, 0, _), t.getToken() !== 16 && t.getToken() !== 18 && (y = it(t, e, i, 1, 0, _, y)));
    else if (q & 2097152)
      y = q === 2162700 ? Bt(t, e, l, i, 0, 1, 0, r, u) : _t(t, e, l, i, 0, 1, 0, r, u), m |= t.destructible, A = 1, t.getToken() !== 16 && t.getToken() !== 18 && (m & 8 && t.report(122), y = G(t, e, i, y, 0, 0, _), m |= 16, (t.getToken() & 8388608) === 8388608 && (y = $t(t, e, i, 1, f, 4, q, y)), H(t, e | 32, 22) && (y = te(t, e, i, y, f)));
    else if (q === 14)
      y = ce(t, e, l, i, 16, r, u, 1, 1, 0), m |= (t.getToken() === 16 ? 0 : 16) | t.destructible, A = 1;
    else {
      for (y = et(t, e, i, 1, 0, _), m = t.assignable, N.push(y); H(t, e | 32, 18); )
        N.push(et(t, e, i, 1, 0, _));
      return m |= t.assignable, L(t, e, 16), t.destructible = m | 16, t.assignable = 2, t.finishNode({
        type: "CallExpression",
        callee: n,
        arguments: N,
        optional: !1
      }, f);
    }
    if (N.push(y), !H(t, e | 32, 18))
      break;
  }
  return L(t, e, 16), m |= t.destructible & 256 ? 256 : 0 | t.destructible & 128 ? 128 : 0, t.getToken() === 10 ? (m & 48 && t.report(27), (t.flags & 1 || h & 1) && t.report(48), m & 128 && t.report(31), e & 1025 && m & 256 && t.report(32), A && (t.flags |= 128), Ke(t, e | 2048, l, i, N, a, 1, f)) : (m & 64 && t.report(63), m & 8 && t.report(62), t.assignable = 2, t.finishNode({
    type: "CallExpression",
    callee: n,
    arguments: N,
    optional: !1
  }, f));
}
function cr(t, e) {
  const { tokenRaw: i, tokenRegExp: n, tokenValue: a, tokenStart: r } = t;
  w(t, e), t.assignable = 2;
  const u = {
    type: "Literal",
    value: a,
    regex: n
  };
  return t.options.raw && (u.raw = i), t.finishNode(u, r);
}
function Ei(t, e, i, n, a) {
  let r, u;
  t.leadingDecorators.decorators.length ? (t.getToken() === 132 && t.report(30, "@"), r = t.leadingDecorators.start, u = [...t.leadingDecorators.decorators], t.leadingDecorators.decorators.length = 0) : (r = t.tokenStart, u = ri(t, e, n)), e = (e | 16384 | 1) ^ 16384, w(t, e);
  let h = null, f = null;
  const { tokenValue: l } = t;
  t.getToken() & 4096 && t.getToken() !== 20565 ? (On(t, e, t.getToken()) && t.report(118), (t.getToken() & 537079808) === 537079808 && t.report(119), i && (i.addBlockName(e, l, 32, 0), a && a & 2 && t.declareUnboundVariable(l)), h = tt(t, e)) : (a & 1) === 0 && t.report(39, "Class");
  let m = e;
  H(t, e | 32, 20565) ? (f = Lt(t, e, n, 0, 0, 0), m |= 512) : m = (m | 512) ^ 512;
  const y = Yn(t, m, e, i, n, 2, 8, 0);
  return t.finishNode({
    type: "ClassDeclaration",
    id: h,
    superClass: f,
    body: y,
    ...t.options.next ? { decorators: u } : null
  }, r);
}
function fr(t, e, i, n, a) {
  let r = null, u = null;
  const h = ri(t, e, i);
  e = (e | 1 | 16384) ^ 16384, w(t, e), t.getToken() & 4096 && t.getToken() !== 20565 && (On(t, e, t.getToken()) && t.report(118), (t.getToken() & 537079808) === 537079808 && t.report(119), r = tt(t, e));
  let f = e;
  H(t, e | 32, 20565) ? (u = Lt(t, e, i, 0, n, 0), f |= 512) : f = (f | 512) ^ 512;
  const l = Yn(t, f, e, void 0, i, 2, 0, n);
  return t.assignable = 2, t.finishNode({
    type: "ClassExpression",
    id: r,
    superClass: u,
    body: l,
    ...t.options.next ? { decorators: h } : null
  }, a);
}
function ri(t, e, i) {
  const n = [];
  if (t.options.next)
    for (; t.getToken() === 132; )
      n.push(dr(t, e, i));
  return n;
}
function dr(t, e, i) {
  const n = t.tokenStart;
  w(t, e | 32);
  const a = t.tokenStart;
  let r = Dt(t, e, i, 2, 0, 1, 0, 1, n);
  return r = G(t, e, i, r, 0, 0, a), t.finishNode({
    type: "Decorator",
    expression: r
  }, n);
}
function Yn(t, e, i, n, a, r, u, h) {
  const { tokenStart: f } = t, l = t.createPrivateScopeIfLexical(a);
  L(t, e | 32, 2162700);
  const m = 655360;
  e = (e | m) ^ m;
  const y = t.flags & 32;
  t.flags = (t.flags | 32) ^ 32;
  const A = [];
  for (; t.getToken() !== 1074790415; ) {
    const N = t.tokenStart, _ = ri(t, e, l);
    if (_.length > 0 && t.tokenValue === "constructor" && t.report(109), t.getToken() === 1074790415 && t.report(108), H(t, e, 1074790417)) {
      _.length > 0 && t.report(120);
      continue;
    }
    A.push(Zn(t, e, n, l, i, r, _, 0, h, _.length > 0 ? N : t.tokenStart));
  }
  return L(t, u & 8 ? e | 32 : e, 1074790415), l?.validatePrivateIdentifierRefs(), t.flags = t.flags & -33 | y, t.finishNode({
    type: "ClassBody",
    body: A
  }, f);
}
function Zn(t, e, i, n, a, r, u, h, f, l) {
  let m = h ? 32 : 0, y = null;
  const A = t.getToken();
  if (A & 176128 || A === -2147483528)
    switch (y = tt(t, e), A) {
      case 36970:
        if (!h && t.getToken() !== 67174411 && (t.getToken() & 1048576) !== 1048576 && t.getToken() !== 1077936155)
          return Zn(t, e, i, n, a, r, u, 1, f, l);
        break;
      case 209005:
        if (t.getToken() !== 67174411 && (t.flags & 1) === 0) {
          if ((t.getToken() & 1073741824) === 1073741824)
            return ye(t, e, n, y, m, u, l);
          m |= 16 | (Bi(t, e, 8391476) ? 8 : 0);
        }
        break;
      case 209008:
        if (t.getToken() !== 67174411) {
          if ((t.getToken() & 1073741824) === 1073741824)
            return ye(t, e, n, y, m, u, l);
          m |= 256;
        }
        break;
      case 209009:
        if (t.getToken() !== 67174411) {
          if ((t.getToken() & 1073741824) === 1073741824)
            return ye(t, e, n, y, m, u, l);
          m |= 512;
        }
        break;
      case 12402:
        if (t.getToken() !== 67174411 && (t.flags & 1) === 0) {
          if ((t.getToken() & 1073741824) === 1073741824)
            return ye(t, e, n, y, m, u, l);
          t.options.next && (m |= 1024);
        }
        break;
    }
  else if (A === 69271571)
    m |= 2, y = re(t, a, n, f);
  else if ((A & 134217728) === 134217728)
    y = dt(t, e);
  else if (A === 8391476)
    m |= 8, w(t, e);
  else if (t.getToken() === 130)
    m |= 8192, y = Xe(t, e | 16, n, 768);
  else if ((t.getToken() & 1073741824) === 1073741824)
    m |= 128;
  else {
    if (h && A === 2162700)
      return Ra(t, e | 16, i, n, l);
    A === -2147483527 ? (y = tt(t, e), t.getToken() !== 67174411 && t.report(30, X[t.getToken() & 255])) : t.report(30, X[t.getToken() & 255]);
  }
  if (m & 1816 && (t.getToken() & 143360 || t.getToken() === -2147483528 || t.getToken() === -2147483527 ? y = tt(t, e) : (t.getToken() & 134217728) === 134217728 ? y = dt(t, e) : t.getToken() === 69271571 ? (m |= 2, y = re(t, e, n, 0)) : t.getToken() === 130 ? (m |= 8192, y = Xe(t, e, n, m)) : t.report(135)), (m & 2) === 0 && (t.tokenValue === "constructor" ? ((t.getToken() & 1073741824) === 1073741824 ? t.report(129) : (m & 32) === 0 && t.getToken() === 67174411 && (m & 920 ? t.report(53, "accessor") : (e & 512) === 0 && (t.flags & 32 ? t.report(54) : t.flags |= 32)), m |= 64) : (m & 8192) === 0 && m & 32 && t.tokenValue === "prototype" && t.report(52)), m & 1024 || t.getToken() !== 67174411 && (m & 768) === 0)
    return ye(t, e, n, y, m, u, l);
  const N = Ot(t, e | 16, n, m, f, t.tokenStart);
  return t.finishNode({
    type: "MethodDefinition",
    kind: (m & 32) === 0 && m & 64 ? "constructor" : m & 256 ? "get" : m & 512 ? "set" : "method",
    static: (m & 32) > 0,
    computed: (m & 2) > 0,
    key: y,
    value: N,
    ...t.options.next ? { decorators: u } : null
  }, l);
}
function Xe(t, e, i, n) {
  const { tokenStart: a } = t;
  w(t, e);
  const { tokenValue: r } = t;
  return r === "constructor" && t.report(128), t.options.lexical && (i || t.report(4, r), n ? i.addPrivateIdentifier(r, n) : i.addPrivateIdentifierRef(r)), w(t, e), t.finishNode({
    type: "PrivateIdentifier",
    name: r
  }, a);
}
function ye(t, e, i, n, a, r, u) {
  let h = null;
  if (a & 8 && t.report(0), t.getToken() === 1077936155) {
    w(t, e | 32);
    const { tokenStart: f } = t;
    t.getToken() === 537079927 && t.report(119);
    const l = 11264 | ((a & 64) === 0 ? 16896 : 0);
    e = (e | l) ^ l | (a & 8 ? 1024 : 0) | (a & 16 ? 2048 : 0) | (a & 64 ? 16384 : 0) | 256 | 65536, h = Dt(t, e | 16, i, 2, 0, 1, 0, 1, f), ((t.getToken() & 1073741824) !== 1073741824 || (t.getToken() & 4194304) === 4194304) && (h = G(t, e | 16, i, h, 0, 0, f), h = it(t, e | 16, i, 0, 0, f, h));
  }
  return kt(t, e), t.finishNode({
    type: a & 1024 ? "AccessorProperty" : "PropertyDefinition",
    key: n,
    value: h,
    static: (a & 32) > 0,
    computed: (a & 2) > 0,
    ...t.options.next ? { decorators: r } : null
  }, u);
}
function Gn(t, e, i, n, a, r) {
  if (t.getToken() & 143360 || (e & 1) === 0 && t.getToken() === -2147483527)
    return Hi(t, e, i, a, r);
  (t.getToken() & 2097152) !== 2097152 && t.report(30, X[t.getToken() & 255]);
  const u = t.getToken() === 69271571 ? _t(t, e, i, n, 1, 0, 1, a, r) : Bt(t, e, i, n, 1, 0, 1, a, r);
  return t.destructible & 16 && t.report(50), t.destructible & 32 && t.report(50), u;
}
function Hi(t, e, i, n, a) {
  const r = t.getToken();
  e & 1 && ((r & 537079808) === 537079808 ? t.report(119) : ((r & 36864) === 36864 || r === -2147483527) && t.report(118)), (r & 20480) === 20480 && t.report(102), r === 241771 && (e & 1024 && t.report(32), e & 2 && t.report(111)), (r & 255) === 73 && n & 24 && t.report(100), r === 209006 && (e & 2048 && t.report(176), e & 2 && t.report(110));
  const { tokenValue: u, tokenStart: h } = t;
  return w(t, e), i?.addVarOrBlock(e, u, n, a), t.finishNode({
    type: "Identifier",
    name: u
  }, h);
}
function oi(t, e, i, n, a) {
  if (n || L(t, e, 8456256), t.getToken() === 8390721) {
    const f = pr(t, a), [l, m] = br(t, e, i, n);
    return t.finishNode({
      type: "JSXFragment",
      openingFragment: f,
      children: l,
      closingFragment: m
    }, a);
  }
  t.getToken() === 8457014 && t.report(30, X[t.getToken() & 255]);
  let r = null, u = [];
  const h = vr(t, e, i, n, a);
  if (!h.selfClosing) {
    [u, r] = yr(t, e, i, n);
    const f = We(r.name);
    We(h.name) !== f && t.report(155, f);
  }
  return t.finishNode({
    type: "JSXElement",
    children: u,
    openingElement: h,
    closingElement: r
  }, a);
}
function pr(t, e) {
  return Se(t), t.finishNode({
    type: "JSXOpeningFragment"
  }, e);
}
function mr(t, e, i, n) {
  L(t, e, 8457014);
  const a = es(t, e);
  return t.getToken() !== 8390721 && t.report(25, X[65]), i ? Se(t) : w(t, e), t.finishNode({
    type: "JSXClosingElement",
    name: a
  }, n);
}
function gr(t, e, i, n) {
  return L(t, e, 8457014), t.getToken() !== 8390721 && t.report(25, X[65]), i ? Se(t) : w(t, e), t.finishNode({
    type: "JSXClosingFragment"
  }, n);
}
function yr(t, e, i, n) {
  const a = [];
  for (; ; ) {
    const r = kr(t, e, i, n);
    if (r.type === "JSXClosingElement")
      return [a, r];
    a.push(r);
  }
}
function br(t, e, i, n) {
  const a = [];
  for (; ; ) {
    const r = xr(t, e, i, n);
    if (r.type === "JSXClosingFragment")
      return [a, r];
    a.push(r);
  }
}
function kr(t, e, i, n) {
  if (t.getToken() === 137)
    return ts(t, e);
  if (t.getToken() === 2162700)
    return Ji(t, e, i, 1, 0);
  if (t.getToken() === 8456256) {
    const { tokenStart: a } = t;
    return w(t, e), t.getToken() === 8457014 ? mr(t, e, n, a) : oi(t, e, i, 1, a);
  }
  t.report(0);
}
function xr(t, e, i, n) {
  if (t.getToken() === 137)
    return ts(t, e);
  if (t.getToken() === 2162700)
    return Ji(t, e, i, 1, 0);
  if (t.getToken() === 8456256) {
    const { tokenStart: a } = t;
    return w(t, e), t.getToken() === 8457014 ? gr(t, e, n, a) : oi(t, e, i, 1, a);
  }
  t.report(0);
}
function ts(t, e) {
  const i = t.tokenStart;
  w(t, e);
  const n = {
    type: "JSXText",
    value: t.tokenValue
  };
  return t.options.raw && (n.raw = t.tokenRaw), t.finishNode(n, i);
}
function vr(t, e, i, n, a) {
  (t.getToken() & 143360) !== 143360 && (t.getToken() & 4096) !== 4096 && t.report(0);
  const r = es(t, e), u = Cr(t, e, i), h = t.getToken() === 8457014;
  return h && L(t, e, 8457014), t.getToken() !== 8390721 && t.report(25, X[65]), n || !h ? Se(t) : w(t, e), t.finishNode({
    type: "JSXOpeningElement",
    name: r,
    attributes: u,
    selfClosing: h
  }, a);
}
function es(t, e) {
  const { tokenStart: i } = t;
  Ai(t);
  let n = ui(t, e);
  if (t.getToken() === 21)
    return is(t, e, n, i);
  for (; H(t, e, 67108877); )
    Ai(t), n = Ar(t, e, n, i);
  return n;
}
function Ar(t, e, i, n) {
  const a = ui(t, e);
  return t.finishNode({
    type: "JSXMemberExpression",
    object: i,
    property: a
  }, n);
}
function Cr(t, e, i) {
  const n = [];
  for (; t.getToken() !== 8457014 && t.getToken() !== 8390721 && t.getToken() !== 1048576; )
    n.push(Er(t, e, i));
  return n;
}
function Tr(t, e, i) {
  const n = t.tokenStart;
  w(t, e), L(t, e, 14);
  const a = et(t, e, i, 1, 0, t.tokenStart);
  return L(t, e, 1074790415), t.finishNode({
    type: "JSXSpreadAttribute",
    argument: a
  }, n);
}
function Er(t, e, i) {
  const { tokenStart: n } = t;
  if (t.getToken() === 2162700)
    return Tr(t, e, i);
  Ai(t);
  let a = null, r = ui(t, e);
  if (t.getToken() === 21 && (r = is(t, e, r, n)), t.getToken() === 1077936155)
    switch (da(t, e)) {
      case 134283267:
        a = dt(t, e);
        break;
      case 8456256:
        a = oi(t, e, i, 0, t.tokenStart);
        break;
      case 2162700:
        a = Ji(t, e, i, 0, 1);
        break;
      default:
        t.report(154);
    }
  return t.finishNode({
    type: "JSXAttribute",
    value: a,
    name: r
  }, n);
}
function is(t, e, i, n) {
  L(t, e, 21);
  const a = ui(t, e);
  return t.finishNode({
    type: "JSXNamespacedName",
    namespace: i,
    name: a
  }, n);
}
function Ji(t, e, i, n, a) {
  const { tokenStart: r } = t;
  w(t, e | 32);
  const { tokenStart: u } = t;
  if (t.getToken() === 14)
    return wr(t, e, i, r);
  let h = null;
  return t.getToken() === 1074790415 ? (a && t.report(157), h = Sr(t, {
    index: t.startIndex,
    line: t.startLine,
    column: t.startColumn
  })) : h = et(t, e, i, 1, 0, u), t.getToken() !== 1074790415 && t.report(25, X[15]), n ? Se(t) : w(t, e), t.finishNode({
    type: "JSXExpressionContainer",
    expression: h
  }, r);
}
function wr(t, e, i, n) {
  L(t, e, 14);
  const a = et(t, e, i, 1, 0, t.tokenStart);
  return L(t, e, 1074790415), t.finishNode({
    type: "JSXSpreadChild",
    expression: a
  }, n);
}
function Sr(t, e) {
  return t.finishNode({
    type: "JSXEmptyExpression"
  }, e, t.tokenStart);
}
function ui(t, e) {
  const i = t.tokenStart;
  t.getToken() & 143360 || t.report(30, X[t.getToken() & 255]);
  const { tokenValue: n } = t;
  return w(t, e), t.finishNode({
    type: "JSXIdentifier",
    name: n
  }, i);
}
function Dr(t, e) {
  return va(t, { ...e, sourceType: "script" });
}
function Pr(t, e, i, n, a) {
  i || (i = D), (function r(u, h, f) {
    var l = f || u.type;
    i[l](u, h, r), e[l] && e[l](u, h);
  })(t, n, a);
}
function zi(t, e, i) {
  i(t, e);
}
function ie(t, e, i) {
}
var D = {};
D.Program = D.BlockStatement = D.StaticBlock = function(t, e, i) {
  for (var n = 0, a = t.body; n < a.length; n += 1) {
    var r = a[n];
    i(r, e, "Statement");
  }
};
D.Statement = zi;
D.EmptyStatement = ie;
D.ExpressionStatement = D.ParenthesizedExpression = D.ChainExpression = function(t, e, i) {
  return i(t.expression, e, "Expression");
};
D.IfStatement = function(t, e, i) {
  i(t.test, e, "Expression"), i(t.consequent, e, "Statement"), t.alternate && i(t.alternate, e, "Statement");
};
D.LabeledStatement = function(t, e, i) {
  return i(t.body, e, "Statement");
};
D.BreakStatement = D.ContinueStatement = ie;
D.WithStatement = function(t, e, i) {
  i(t.object, e, "Expression"), i(t.body, e, "Statement");
};
D.SwitchStatement = function(t, e, i) {
  i(t.discriminant, e, "Expression");
  for (var n = 0, a = t.cases; n < a.length; n += 1) {
    var r = a[n];
    i(r, e);
  }
};
D.SwitchCase = function(t, e, i) {
  t.test && i(t.test, e, "Expression");
  for (var n = 0, a = t.consequent; n < a.length; n += 1) {
    var r = a[n];
    i(r, e, "Statement");
  }
};
D.ReturnStatement = D.YieldExpression = D.AwaitExpression = function(t, e, i) {
  t.argument && i(t.argument, e, "Expression");
};
D.ThrowStatement = D.SpreadElement = function(t, e, i) {
  return i(t.argument, e, "Expression");
};
D.TryStatement = function(t, e, i) {
  i(t.block, e, "Statement"), t.handler && i(t.handler, e), t.finalizer && i(t.finalizer, e, "Statement");
};
D.CatchClause = function(t, e, i) {
  t.param && i(t.param, e, "Pattern"), i(t.body, e, "Statement");
};
D.WhileStatement = D.DoWhileStatement = function(t, e, i) {
  i(t.test, e, "Expression"), i(t.body, e, "Statement");
};
D.ForStatement = function(t, e, i) {
  t.init && i(t.init, e, "ForInit"), t.test && i(t.test, e, "Expression"), t.update && i(t.update, e, "Expression"), i(t.body, e, "Statement");
};
D.ForInStatement = D.ForOfStatement = function(t, e, i) {
  i(t.left, e, "ForInit"), i(t.right, e, "Expression"), i(t.body, e, "Statement");
};
D.ForInit = function(t, e, i) {
  t.type === "VariableDeclaration" ? i(t, e) : i(t, e, "Expression");
};
D.DebuggerStatement = ie;
D.FunctionDeclaration = function(t, e, i) {
  return i(t, e, "Function");
};
D.VariableDeclaration = function(t, e, i) {
  for (var n = 0, a = t.declarations; n < a.length; n += 1) {
    var r = a[n];
    i(r, e);
  }
};
D.VariableDeclarator = function(t, e, i) {
  i(t.id, e, "Pattern"), t.init && i(t.init, e, "Expression");
};
D.Function = function(t, e, i) {
  t.id && i(t.id, e, "Pattern");
  for (var n = 0, a = t.params; n < a.length; n += 1) {
    var r = a[n];
    i(r, e, "Pattern");
  }
  i(t.body, e, t.expression ? "Expression" : "Statement");
};
D.Pattern = function(t, e, i) {
  t.type === "Identifier" ? i(t, e, "VariablePattern") : t.type === "MemberExpression" ? i(t, e, "MemberPattern") : i(t, e);
};
D.VariablePattern = ie;
D.MemberPattern = zi;
D.RestElement = function(t, e, i) {
  return i(t.argument, e, "Pattern");
};
D.ArrayPattern = function(t, e, i) {
  for (var n = 0, a = t.elements; n < a.length; n += 1) {
    var r = a[n];
    r && i(r, e, "Pattern");
  }
};
D.ObjectPattern = function(t, e, i) {
  for (var n = 0, a = t.properties; n < a.length; n += 1) {
    var r = a[n];
    r.type === "Property" ? (r.computed && i(r.key, e, "Expression"), i(r.value, e, "Pattern")) : r.type === "RestElement" && i(r.argument, e, "Pattern");
  }
};
D.Expression = zi;
D.ThisExpression = D.Super = D.MetaProperty = ie;
D.ArrayExpression = function(t, e, i) {
  for (var n = 0, a = t.elements; n < a.length; n += 1) {
    var r = a[n];
    r && i(r, e, "Expression");
  }
};
D.ObjectExpression = function(t, e, i) {
  for (var n = 0, a = t.properties; n < a.length; n += 1) {
    var r = a[n];
    i(r, e);
  }
};
D.FunctionExpression = D.ArrowFunctionExpression = D.FunctionDeclaration;
D.SequenceExpression = function(t, e, i) {
  for (var n = 0, a = t.expressions; n < a.length; n += 1) {
    var r = a[n];
    i(r, e, "Expression");
  }
};
D.TemplateLiteral = function(t, e, i) {
  for (var n = 0, a = t.quasis; n < a.length; n += 1) {
    var r = a[n];
    i(r, e);
  }
  for (var u = 0, h = t.expressions; u < h.length; u += 1) {
    var f = h[u];
    i(f, e, "Expression");
  }
};
D.TemplateElement = ie;
D.UnaryExpression = D.UpdateExpression = function(t, e, i) {
  i(t.argument, e, "Expression");
};
D.BinaryExpression = D.LogicalExpression = function(t, e, i) {
  i(t.left, e, "Expression"), i(t.right, e, "Expression");
};
D.AssignmentExpression = D.AssignmentPattern = function(t, e, i) {
  i(t.left, e, "Pattern"), i(t.right, e, "Expression");
};
D.ConditionalExpression = function(t, e, i) {
  i(t.test, e, "Expression"), i(t.consequent, e, "Expression"), i(t.alternate, e, "Expression");
};
D.NewExpression = D.CallExpression = function(t, e, i) {
  if (i(t.callee, e, "Expression"), t.arguments)
    for (var n = 0, a = t.arguments; n < a.length; n += 1) {
      var r = a[n];
      i(r, e, "Expression");
    }
};
D.MemberExpression = function(t, e, i) {
  i(t.object, e, "Expression"), t.computed && i(t.property, e, "Expression");
};
D.ExportNamedDeclaration = D.ExportDefaultDeclaration = function(t, e, i) {
  t.declaration && i(t.declaration, e, t.type === "ExportNamedDeclaration" || t.declaration.id ? "Statement" : "Expression"), t.source && i(t.source, e, "Expression");
};
D.ExportAllDeclaration = function(t, e, i) {
  t.exported && i(t.exported, e), i(t.source, e, "Expression");
};
D.ImportDeclaration = function(t, e, i) {
  for (var n = 0, a = t.specifiers; n < a.length; n += 1) {
    var r = a[n];
    i(r, e);
  }
  i(t.source, e, "Expression");
};
D.ImportExpression = function(t, e, i) {
  i(t.source, e, "Expression");
};
D.ImportSpecifier = D.ImportDefaultSpecifier = D.ImportNamespaceSpecifier = D.Identifier = D.PrivateIdentifier = D.Literal = ie;
D.TaggedTemplateExpression = function(t, e, i) {
  i(t.tag, e, "Expression"), i(t.quasi, e, "Expression");
};
D.ClassDeclaration = D.ClassExpression = function(t, e, i) {
  return i(t, e, "Class");
};
D.Class = function(t, e, i) {
  t.id && i(t.id, e, "Pattern"), t.superClass && i(t.superClass, e, "Expression"), i(t.body, e);
};
D.ClassBody = function(t, e, i) {
  for (var n = 0, a = t.body; n < a.length; n += 1) {
    var r = a[n];
    i(r, e);
  }
};
D.MethodDefinition = D.PropertyDefinition = D.Property = function(t, e, i) {
  t.computed && i(t.key, e, "Expression"), t.value && i(t.value, e, "Expression");
};
var Ir = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], ns = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Nr = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ss = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", yi = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, bi = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Lr = {
  5: bi,
  "5module": bi + " export import",
  6: bi + " const class extends export import super"
}, _r = /^in(stanceof)?$/, Br = new RegExp("[" + ss + "]"), Fr = new RegExp("[" + ss + Nr + "]");
function wi(t, e) {
  for (var i = 65536, n = 0; n < e.length; n += 2) {
    if (i += e[n], i > t)
      return !1;
    if (i += e[n + 1], i >= t)
      return !0;
  }
  return !1;
}
function Rt(t, e) {
  return t < 65 ? t === 36 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && Br.test(String.fromCharCode(t)) : e === !1 ? !1 : wi(t, ns);
}
function Ut(t, e) {
  return t < 48 ? t === 36 : t < 58 ? !0 : t < 65 ? !1 : t < 91 ? !0 : t < 97 ? t === 95 : t < 123 ? !0 : t <= 65535 ? t >= 170 && Fr.test(String.fromCharCode(t)) : e === !1 ? !1 : wi(t, ns) || wi(t, Ir);
}
var z = function(e, i) {
  i === void 0 && (i = {}), this.label = e, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function Pt(t, e) {
  return new z(t, { beforeExpr: !0, binop: e });
}
var It = { beforeExpr: !0 }, Ct = { startsExpr: !0 }, le = {};
function Q(t, e) {
  return e === void 0 && (e = {}), e.keyword = t, le[t] = new z(t, e);
}
var d = {
  num: new z("num", Ct),
  regexp: new z("regexp", Ct),
  string: new z("string", Ct),
  name: new z("name", Ct),
  privateId: new z("privateId", Ct),
  eof: new z("eof"),
  // Punctuation token types.
  bracketL: new z("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new z("]"),
  braceL: new z("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new z("}"),
  parenL: new z("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new z(")"),
  comma: new z(",", It),
  semi: new z(";", It),
  colon: new z(":", It),
  dot: new z("."),
  question: new z("?", It),
  questionDot: new z("?."),
  arrow: new z("=>", It),
  template: new z("template"),
  invalidTemplate: new z("invalidTemplate"),
  ellipsis: new z("...", It),
  backQuote: new z("`", Ct),
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
  logicalOR: Pt("||", 1),
  logicalAND: Pt("&&", 2),
  bitwiseOR: Pt("|", 3),
  bitwiseXOR: Pt("^", 4),
  bitwiseAND: Pt("&", 5),
  equality: Pt("==/!=/===/!==", 6),
  relational: Pt("</>/<=/>=", 7),
  bitShift: Pt("<</>>/>>>", 8),
  plusMin: new z("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: Pt("%", 10),
  star: Pt("*", 10),
  slash: Pt("/", 10),
  starstar: new z("**", { beforeExpr: !0 }),
  coalesce: Pt("??", 1),
  // Keyword token types.
  _break: Q("break"),
  _case: Q("case", It),
  _catch: Q("catch"),
  _continue: Q("continue"),
  _debugger: Q("debugger"),
  _default: Q("default", It),
  _do: Q("do", { isLoop: !0, beforeExpr: !0 }),
  _else: Q("else", It),
  _finally: Q("finally"),
  _for: Q("for", { isLoop: !0 }),
  _function: Q("function", Ct),
  _if: Q("if"),
  _return: Q("return", It),
  _switch: Q("switch"),
  _throw: Q("throw", It),
  _try: Q("try"),
  _var: Q("var"),
  _const: Q("const"),
  _while: Q("while", { isLoop: !0 }),
  _with: Q("with"),
  _new: Q("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: Q("this", Ct),
  _super: Q("super", Ct),
  _class: Q("class", Ct),
  _extends: Q("extends", It),
  _export: Q("export"),
  _import: Q("import", Ct),
  _null: Q("null", Ct),
  _true: Q("true", Ct),
  _false: Q("false", Ct),
  _in: Q("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: Q("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: Q("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: Q("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: Q("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, xt = /\r\n?|\n|\u2028|\u2029/, as = new RegExp(xt.source, "g");
function ne(t) {
  return t === 10 || t === 13 || t === 8232 || t === 8233;
}
function rs(t, e, i) {
  i === void 0 && (i = t.length);
  for (var n = e; n < i; n++) {
    var a = t.charCodeAt(n);
    if (ne(a))
      return n < i - 1 && a === 13 && t.charCodeAt(n + 1) === 10 ? n + 2 : n + 1;
  }
  return -1;
}
var Wi = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, pt = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, os = Object.prototype, Or = os.hasOwnProperty, Vr = os.toString, fe = Object.hasOwn || (function(t, e) {
  return Or.call(t, e);
}), fn = Array.isArray || (function(t) {
  return Vr.call(t) === "[object Array]";
}), dn = /* @__PURE__ */ Object.create(null);
function Yt(t) {
  return dn[t] || (dn[t] = new RegExp("^(?:" + t.replace(/ /g, "|") + ")$"));
}
function Ht(t) {
  return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
}
var Rr = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, he = function(e, i) {
  this.line = e, this.column = i;
};
he.prototype.offset = function(e) {
  return new he(this.line, this.column + e);
};
var Ne = function(e, i, n) {
  this.start = i, this.end = n, e.sourceFile !== null && (this.source = e.sourceFile);
};
function Ki(t, e) {
  for (var i = 1, n = 0; ; ) {
    var a = rs(t, n, e);
    if (a < 0)
      return new he(i, e - n);
    ++i, n = a;
  }
}
var $e = {
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
}, pn = !1;
function Mr(t) {
  var e = {};
  for (var i in $e)
    e[i] = t && fe(t, i) ? t[i] : $e[i];
  if (e.ecmaVersion === "latest" ? e.ecmaVersion = 1e8 : e.ecmaVersion == null ? (!pn && typeof console == "object" && console.warn && (pn = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), e.ecmaVersion = 11) : e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009), e.allowReserved == null && (e.allowReserved = e.ecmaVersion < 5), (!t || t.allowHashBang == null) && (e.allowHashBang = e.ecmaVersion >= 14), fn(e.onToken)) {
    var n = e.onToken;
    e.onToken = function(a) {
      return n.push(a);
    };
  }
  return fn(e.onComment) && (e.onComment = qr(e, e.onComment)), e;
}
function qr(t, e) {
  return function(i, n, a, r, u, h) {
    var f = {
      type: i ? "Block" : "Line",
      value: n,
      start: a,
      end: r
    };
    t.locations && (f.loc = new Ne(this, u, h)), t.ranges && (f.range = [a, r]), e.push(f);
  };
}
var Ee = 1, de = 2, Xi = 4, us = 8, $i = 16, ls = 32, li = 64, hs = 128, se = 256, Le = 512, hi = Ee | de | se;
function Qi(t, e) {
  return de | (t ? Xi : 0) | (e ? us : 0);
}
var Qe = 0, Yi = 1, zt = 2, cs = 3, fs = 4, ds = 5, ut = function(e, i, n) {
  this.options = e = Mr(e), this.sourceFile = e.sourceFile, this.keywords = Yt(Lr[e.ecmaVersion >= 6 ? 6 : e.sourceType === "module" ? "5module" : 5]);
  var a = "";
  e.allowReserved !== !0 && (a = yi[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3], e.sourceType === "module" && (a += " await")), this.reservedWords = Yt(a);
  var r = (a ? a + " " : "") + yi.strict;
  this.reservedWordsStrict = Yt(r), this.reservedWordsStrictBind = Yt(r + " " + yi.strictBind), this.input = String(i), this.containsEsc = !1, n ? (this.pos = n, this.lineStart = this.input.lastIndexOf(`
`, n - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(xt).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = d.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = e.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && e.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(Ee), this.regexpState = null, this.privateNameStack = [];
}, Mt = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
ut.prototype.parse = function() {
  var e = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(e);
};
Mt.inFunction.get = function() {
  return (this.currentVarScope().flags & de) > 0;
};
Mt.inGenerator.get = function() {
  return (this.currentVarScope().flags & us) > 0;
};
Mt.inAsync.get = function() {
  return (this.currentVarScope().flags & Xi) > 0;
};
Mt.canAwait.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], i = e.flags;
    if (i & (se | Le))
      return !1;
    if (i & de)
      return (i & Xi) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
Mt.allowSuper.get = function() {
  var t = this.currentThisScope(), e = t.flags;
  return (e & li) > 0 || this.options.allowSuperOutsideMethod;
};
Mt.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & hs) > 0;
};
Mt.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Mt.allowNewDotTarget.get = function() {
  for (var t = this.scopeStack.length - 1; t >= 0; t--) {
    var e = this.scopeStack[t], i = e.flags;
    if (i & (se | Le) || i & de && !(i & $i))
      return !0;
  }
  return !1;
};
Mt.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & se) > 0;
};
ut.extend = function() {
  for (var e = [], i = arguments.length; i--; ) e[i] = arguments[i];
  for (var n = this, a = 0; a < e.length; a++)
    n = e[a](n);
  return n;
};
ut.parse = function(e, i) {
  return new this(i, e).parse();
};
ut.parseExpressionAt = function(e, i, n) {
  var a = new this(n, e, i);
  return a.nextToken(), a.parseExpression();
};
ut.tokenizer = function(e, i) {
  return new this(i, e);
};
Object.defineProperties(ut.prototype, Mt);
var vt = ut.prototype, jr = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
vt.strictDirective = function(t) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    pt.lastIndex = t, t += pt.exec(this.input)[0].length;
    var e = jr.exec(this.input.slice(t));
    if (!e)
      return !1;
    if ((e[1] || e[2]) === "use strict") {
      pt.lastIndex = t + e[0].length;
      var i = pt.exec(this.input), n = i.index + i[0].length, a = this.input.charAt(n);
      return a === ";" || a === "}" || xt.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(a) || a === "!" && this.input.charAt(n + 1) === "=");
    }
    t += e[0].length, pt.lastIndex = t, t += pt.exec(this.input)[0].length, this.input[t] === ";" && t++;
  }
};
vt.eat = function(t) {
  return this.type === t ? (this.next(), !0) : !1;
};
vt.isContextual = function(t) {
  return this.type === d.name && this.value === t && !this.containsEsc;
};
vt.eatContextual = function(t) {
  return this.isContextual(t) ? (this.next(), !0) : !1;
};
vt.expectContextual = function(t) {
  this.eatContextual(t) || this.unexpected();
};
vt.canInsertSemicolon = function() {
  return this.type === d.eof || this.type === d.braceR || xt.test(this.input.slice(this.lastTokEnd, this.start));
};
vt.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
vt.semicolon = function() {
  !this.eat(d.semi) && !this.insertSemicolon() && this.unexpected();
};
vt.afterTrailingComma = function(t, e) {
  if (this.type === t)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0;
};
vt.expect = function(t) {
  this.eat(t) || this.unexpected();
};
vt.unexpected = function(t) {
  this.raise(t ?? this.start, "Unexpected token");
};
var ci = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
vt.checkPatternErrors = function(t, e) {
  if (t) {
    t.trailingComma > -1 && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
    var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, e ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
vt.checkExpressionErrors = function(t, e) {
  if (!t)
    return !1;
  var i = t.shorthandAssign, n = t.doubleProto;
  if (!e)
    return i >= 0 || n >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), n >= 0 && this.raiseRecoverable(n, "Redefinition of __proto__ property");
};
vt.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
vt.isSimpleAssignTarget = function(t) {
  return t.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(t.expression) : t.type === "Identifier" || t.type === "MemberExpression";
};
var V = ut.prototype;
V.parseTopLevel = function(t) {
  var e = /* @__PURE__ */ Object.create(null);
  for (t.body || (t.body = []); this.type !== d.eof; ) {
    var i = this.parseStatement(null, !0, e);
    t.body.push(i);
  }
  if (this.inModule)
    for (var n = 0, a = Object.keys(this.undefinedExports); n < a.length; n += 1) {
      var r = a[n];
      this.raiseRecoverable(this.undefinedExports[r].start, "Export '" + r + "' is not defined");
    }
  return this.adaptDirectivePrologue(t.body), this.next(), t.sourceType = this.options.sourceType, this.finishNode(t, "Program");
};
var Zi = { kind: "loop" }, Ur = { kind: "switch" };
V.isLet = function(t) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  pt.lastIndex = this.pos;
  var e = pt.exec(this.input), i = this.pos + e[0].length, n = this.input.charCodeAt(i);
  if (n === 91 || n === 92)
    return !0;
  if (t)
    return !1;
  if (n === 123 || n > 55295 && n < 56320)
    return !0;
  if (Rt(n, !0)) {
    for (var a = i + 1; Ut(n = this.input.charCodeAt(a), !0); )
      ++a;
    if (n === 92 || n > 55295 && n < 56320)
      return !0;
    var r = this.input.slice(i, a);
    if (!_r.test(r))
      return !0;
  }
  return !1;
};
V.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  pt.lastIndex = this.pos;
  var t = pt.exec(this.input), e = this.pos + t[0].length, i;
  return !xt.test(this.input.slice(this.pos, e)) && this.input.slice(e, e + 8) === "function" && (e + 8 === this.input.length || !(Ut(i = this.input.charCodeAt(e + 8)) || i > 55295 && i < 56320));
};
V.isUsingKeyword = function(t, e) {
  if (this.options.ecmaVersion < 17 || !this.isContextual(t ? "await" : "using"))
    return !1;
  pt.lastIndex = this.pos;
  var i = pt.exec(this.input), n = this.pos + i[0].length;
  if (xt.test(this.input.slice(this.pos, n)))
    return !1;
  if (t) {
    var a = n + 5, r;
    if (this.input.slice(n, a) !== "using" || a === this.input.length || Ut(r = this.input.charCodeAt(a)) || r > 55295 && r < 56320)
      return !1;
    pt.lastIndex = a;
    var u = pt.exec(this.input);
    if (u && xt.test(this.input.slice(a, a + u[0].length)))
      return !1;
  }
  if (e) {
    var h = n + 2, f;
    if (this.input.slice(n, h) === "of" && (h === this.input.length || !Ut(f = this.input.charCodeAt(h)) && !(f > 55295 && f < 56320)))
      return !1;
  }
  var l = this.input.charCodeAt(n);
  return Rt(l, !0) || l === 92;
};
V.isAwaitUsing = function(t) {
  return this.isUsingKeyword(!0, t);
};
V.isUsing = function(t) {
  return this.isUsingKeyword(!1, t);
};
V.parseStatement = function(t, e, i) {
  var n = this.type, a = this.startNode(), r;
  switch (this.isLet(t) && (n = d._var, r = "let"), n) {
    case d._break:
    case d._continue:
      return this.parseBreakContinueStatement(a, n.keyword);
    case d._debugger:
      return this.parseDebuggerStatement(a);
    case d._do:
      return this.parseDoStatement(a);
    case d._for:
      return this.parseForStatement(a);
    case d._function:
      return t && (this.strict || t !== "if" && t !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(a, !1, !t);
    case d._class:
      return t && this.unexpected(), this.parseClass(a, !0);
    case d._if:
      return this.parseIfStatement(a);
    case d._return:
      return this.parseReturnStatement(a);
    case d._switch:
      return this.parseSwitchStatement(a);
    case d._throw:
      return this.parseThrowStatement(a);
    case d._try:
      return this.parseTryStatement(a);
    case d._const:
    case d._var:
      return r = r || this.value, t && r !== "var" && this.unexpected(), this.parseVarStatement(a, r);
    case d._while:
      return this.parseWhileStatement(a);
    case d._with:
      return this.parseWithStatement(a);
    case d.braceL:
      return this.parseBlock(!0, a);
    case d.semi:
      return this.parseEmptyStatement(a);
    case d._export:
    case d._import:
      if (this.options.ecmaVersion > 10 && n === d._import) {
        pt.lastIndex = this.pos;
        var u = pt.exec(this.input), h = this.pos + u[0].length, f = this.input.charCodeAt(h);
        if (f === 40 || f === 46)
          return this.parseExpressionStatement(a, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n === d._import ? this.parseImport(a) : this.parseExport(a, i);
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction())
        return t && this.unexpected(), this.next(), this.parseFunctionStatement(a, !0, !t);
      var l = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
      if (l)
        return e && this.options.sourceType === "script" && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), l === "await using" && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(a, !1, l), this.semicolon(), this.finishNode(a, "VariableDeclaration");
      var m = this.value, y = this.parseExpression();
      return n === d.name && y.type === "Identifier" && this.eat(d.colon) ? this.parseLabeledStatement(a, m, y, t) : this.parseExpressionStatement(a, y);
  }
};
V.parseBreakContinueStatement = function(t, e) {
  var i = e === "break";
  this.next(), this.eat(d.semi) || this.insertSemicolon() ? t.label = null : this.type !== d.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());
  for (var n = 0; n < this.labels.length; ++n) {
    var a = this.labels[n];
    if ((t.label == null || a.name === t.label.name) && (a.kind != null && (i || a.kind === "loop") || t.label && i))
      break;
  }
  return n === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement");
};
V.parseDebuggerStatement = function(t) {
  return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
};
V.parseDoStatement = function(t) {
  return this.next(), this.labels.push(Zi), t.body = this.parseStatement("do"), this.labels.pop(), this.expect(d._while), t.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(d.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement");
};
V.parseForStatement = function(t) {
  this.next();
  var e = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Zi), this.enterScope(0), this.expect(d.parenL), this.type === d.semi)
    return e > -1 && this.unexpected(e), this.parseFor(t, null);
  var i = this.isLet();
  if (this.type === d._var || this.type === d._const || i) {
    var n = this.startNode(), a = i ? "let" : this.value;
    return this.next(), this.parseVar(n, !0, a), this.finishNode(n, "VariableDeclaration"), this.parseForAfterInit(t, n, e);
  }
  var r = this.isContextual("let"), u = !1, h = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
  if (h) {
    var f = this.startNode();
    return this.next(), h === "await using" && this.next(), this.parseVar(f, !0, h), this.finishNode(f, "VariableDeclaration"), this.parseForAfterInit(t, f, e);
  }
  var l = this.containsEsc, m = new ci(), y = this.start, A = e > -1 ? this.parseExprSubscripts(m, "await") : this.parseExpression(!0, m);
  return this.type === d._in || (u = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (e > -1 ? (this.type === d._in && this.unexpected(e), t.await = !0) : u && this.options.ecmaVersion >= 8 && (A.start === y && !l && A.type === "Identifier" && A.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (t.await = !1)), r && u && this.raise(A.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(A, !1, m), this.checkLValPattern(A), this.parseForIn(t, A)) : (this.checkExpressionErrors(m, !0), e > -1 && this.unexpected(e), this.parseFor(t, A));
};
V.parseForAfterInit = function(t, e, i) {
  return (this.type === d._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && e.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === d._in ? i > -1 && this.unexpected(i) : t.await = i > -1), this.parseForIn(t, e)) : (i > -1 && this.unexpected(i), this.parseFor(t, e));
};
V.parseFunctionStatement = function(t, e, i) {
  return this.next(), this.parseFunction(t, ve | (i ? 0 : Si), !1, e);
};
V.parseIfStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(d._else) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement");
};
V.parseReturnStatement = function(t) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(d.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
};
V.parseSwitchStatement = function(t) {
  this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(d.braceL), this.labels.push(Ur), this.enterScope(0);
  for (var e, i = !1; this.type !== d.braceR; )
    if (this.type === d._case || this.type === d._default) {
      var n = this.type === d._case;
      e && this.finishNode(e, "SwitchCase"), t.cases.push(e = this.startNode()), e.consequent = [], this.next(), n ? e.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, e.test = null), this.expect(d.colon);
    } else
      e || this.unexpected(), e.consequent.push(this.parseStatement(null));
  return this.exitScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement");
};
V.parseThrowStatement = function(t) {
  return this.next(), xt.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
};
var Hr = [];
V.parseCatchClauseParam = function() {
  var t = this.parseBindingAtom(), e = t.type === "Identifier";
  return this.enterScope(e ? ls : 0), this.checkLValPattern(t, e ? fs : zt), this.expect(d.parenR), t;
};
V.parseTryStatement = function(t) {
  if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === d._catch) {
    var e = this.startNode();
    this.next(), this.eat(d.parenL) ? e.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), e.param = null, this.enterScope(0)), e.body = this.parseBlock(!1), this.exitScope(), t.handler = this.finishNode(e, "CatchClause");
  }
  return t.finalizer = this.eat(d._finally) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement");
};
V.parseVarStatement = function(t, e, i) {
  return this.next(), this.parseVar(t, !1, e, i), this.semicolon(), this.finishNode(t, "VariableDeclaration");
};
V.parseWhileStatement = function(t) {
  return this.next(), t.test = this.parseParenExpression(), this.labels.push(Zi), t.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(t, "WhileStatement");
};
V.parseWithStatement = function(t) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement("with"), this.finishNode(t, "WithStatement");
};
V.parseEmptyStatement = function(t) {
  return this.next(), this.finishNode(t, "EmptyStatement");
};
V.parseLabeledStatement = function(t, e, i, n) {
  for (var a = 0, r = this.labels; a < r.length; a += 1) {
    var u = r[a];
    u.name === e && this.raise(i.start, "Label '" + e + "' is already declared");
  }
  for (var h = this.type.isLoop ? "loop" : this.type === d._switch ? "switch" : null, f = this.labels.length - 1; f >= 0; f--) {
    var l = this.labels[f];
    if (l.statementStart === t.start)
      l.statementStart = this.start, l.kind = h;
    else
      break;
  }
  return this.labels.push({ name: e, kind: h, statementStart: this.start }), t.body = this.parseStatement(n ? n.indexOf("label") === -1 ? n + "label" : n : "label"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement");
};
V.parseExpressionStatement = function(t, e) {
  return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
};
V.parseBlock = function(t, e, i) {
  for (t === void 0 && (t = !0), e === void 0 && (e = this.startNode()), e.body = [], this.expect(d.braceL), t && this.enterScope(0); this.type !== d.braceR; ) {
    var n = this.parseStatement(null);
    e.body.push(n);
  }
  return i && (this.strict = !1), this.next(), t && this.exitScope(), this.finishNode(e, "BlockStatement");
};
V.parseFor = function(t, e) {
  return t.init = e, this.expect(d.semi), t.test = this.type === d.semi ? null : this.parseExpression(), this.expect(d.semi), t.update = this.type === d.parenR ? null : this.parseExpression(), this.expect(d.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, "ForStatement");
};
V.parseForIn = function(t, e) {
  var i = this.type === d._in;
  return this.next(), e.type === "VariableDeclaration" && e.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(
    e.start,
    (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(d.parenR), t.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement");
};
V.parseVar = function(t, e, i, n) {
  for (t.declarations = [], t.kind = i; ; ) {
    var a = this.startNode();
    if (this.parseVarId(a, i), this.eat(d.eq) ? a.init = this.parseMaybeAssign(e) : !n && i === "const" && !(this.type === d._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !n && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== d._in && !this.isContextual("of") ? this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration") : !n && a.id.type !== "Identifier" && !(e && (this.type === d._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : a.init = null, t.declarations.push(this.finishNode(a, "VariableDeclarator")), !this.eat(d.comma))
      break;
  }
  return t;
};
V.parseVarId = function(t, e) {
  t.id = e === "using" || e === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(t.id, e === "var" ? Yi : zt, !1);
};
var ve = 1, Si = 2, ps = 4;
V.parseFunction = function(t, e, i, n, a) {
  this.initFunction(t), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !n) && (this.type === d.star && e & Si && this.unexpected(), t.generator = this.eat(d.star)), this.options.ecmaVersion >= 8 && (t.async = !!n), e & ve && (t.id = e & ps && this.type !== d.name ? null : this.parseIdent(), t.id && !(e & Si) && this.checkLValSimple(t.id, this.strict || t.generator || t.async ? this.treatFunctionsAsVar ? Yi : zt : cs));
  var r = this.yieldPos, u = this.awaitPos, h = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Qi(t.async, t.generator)), e & ve || (t.id = this.type === d.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i, !1, a), this.yieldPos = r, this.awaitPos = u, this.awaitIdentPos = h, this.finishNode(t, e & ve ? "FunctionDeclaration" : "FunctionExpression");
};
V.parseFunctionParams = function(t) {
  this.expect(d.parenL), t.params = this.parseBindingList(d.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
V.parseClass = function(t, e) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(t, e), this.parseClassSuper(t);
  var n = this.enterClassBody(), a = this.startNode(), r = !1;
  for (a.body = [], this.expect(d.braceL); this.type !== d.braceR; ) {
    var u = this.parseClassElement(t.superClass !== null);
    u && (a.body.push(u), u.type === "MethodDefinition" && u.kind === "constructor" ? (r && this.raiseRecoverable(u.start, "Duplicate constructor in the same class"), r = !0) : u.key && u.key.type === "PrivateIdentifier" && Jr(n, u) && this.raiseRecoverable(u.key.start, "Identifier '#" + u.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), t.body = this.finishNode(a, "ClassBody"), this.exitClassBody(), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
};
V.parseClassElement = function(t) {
  if (this.eat(d.semi))
    return null;
  var e = this.options.ecmaVersion, i = this.startNode(), n = "", a = !1, r = !1, u = "method", h = !1;
  if (this.eatContextual("static")) {
    if (e >= 13 && this.eat(d.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === d.star ? h = !0 : n = "static";
  }
  if (i.static = h, !n && e >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === d.star) && !this.canInsertSemicolon() ? r = !0 : n = "async"), !n && (e >= 9 || !r) && this.eat(d.star) && (a = !0), !n && !r && !a) {
    var f = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? u = f : n = f);
  }
  if (n ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = n, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), e < 13 || this.type === d.parenL || u !== "method" || a || r) {
    var l = !i.static && Ye(i, "constructor"), m = l && t;
    l && u !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = l ? "constructor" : u, this.parseClassMethod(i, a, r, m);
  } else
    this.parseClassField(i);
  return i;
};
V.isClassElementNameStart = function() {
  return this.type === d.name || this.type === d.privateId || this.type === d.num || this.type === d.string || this.type === d.bracketL || this.type.keyword;
};
V.parseClassElementName = function(t) {
  this.type === d.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), t.computed = !1, t.key = this.parsePrivateIdent()) : this.parsePropertyName(t);
};
V.parseClassMethod = function(t, e, i, n) {
  var a = t.key;
  t.kind === "constructor" ? (e && this.raise(a.start, "Constructor can't be a generator"), i && this.raise(a.start, "Constructor can't be an async method")) : t.static && Ye(t, "prototype") && this.raise(a.start, "Classes may not have a static property named prototype");
  var r = t.value = this.parseMethod(e, i, n);
  return t.kind === "get" && r.params.length !== 0 && this.raiseRecoverable(r.start, "getter should have no params"), t.kind === "set" && r.params.length !== 1 && this.raiseRecoverable(r.start, "setter should have exactly one param"), t.kind === "set" && r.params[0].type === "RestElement" && this.raiseRecoverable(r.params[0].start, "Setter cannot use rest params"), this.finishNode(t, "MethodDefinition");
};
V.parseClassField = function(t) {
  return Ye(t, "constructor") ? this.raise(t.key.start, "Classes can't have a field named 'constructor'") : t.static && Ye(t, "prototype") && this.raise(t.key.start, "Classes can't have a static field named 'prototype'"), this.eat(d.eq) ? (this.enterScope(Le | li), t.value = this.parseMaybeAssign(), this.exitScope()) : t.value = null, this.semicolon(), this.finishNode(t, "PropertyDefinition");
};
V.parseClassStaticBlock = function(t) {
  t.body = [];
  var e = this.labels;
  for (this.labels = [], this.enterScope(se | li); this.type !== d.braceR; ) {
    var i = this.parseStatement(null);
    t.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = e, this.finishNode(t, "StaticBlock");
};
V.parseClassId = function(t, e) {
  this.type === d.name ? (t.id = this.parseIdent(), e && this.checkLValSimple(t.id, zt, !1)) : (e === !0 && this.unexpected(), t.id = null);
};
V.parseClassSuper = function(t) {
  t.superClass = this.eat(d._extends) ? this.parseExprSubscripts(null, !1) : null;
};
V.enterClassBody = function() {
  var t = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(t), t.declared;
};
V.exitClassBody = function() {
  var t = this.privateNameStack.pop(), e = t.declared, i = t.used;
  if (this.options.checkPrivateFields)
    for (var n = this.privateNameStack.length, a = n === 0 ? null : this.privateNameStack[n - 1], r = 0; r < i.length; ++r) {
      var u = i[r];
      fe(e, u.name) || (a ? a.used.push(u) : this.raiseRecoverable(u.start, "Private field '#" + u.name + "' must be declared in an enclosing class"));
    }
};
function Jr(t, e) {
  var i = e.key.name, n = t[i], a = "true";
  return e.type === "MethodDefinition" && (e.kind === "get" || e.kind === "set") && (a = (e.static ? "s" : "i") + e.kind), n === "iget" && a === "iset" || n === "iset" && a === "iget" || n === "sget" && a === "sset" || n === "sset" && a === "sget" ? (t[i] = "true", !1) : n ? !0 : (t[i] = a, !1);
}
function Ye(t, e) {
  var i = t.computed, n = t.key;
  return !i && (n.type === "Identifier" && n.name === e || n.type === "Literal" && n.value === e);
}
V.parseExportAllDeclaration = function(t, e) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (t.exported = this.parseModuleExportName(), this.checkExport(e, t.exported, this.lastTokStart)) : t.exported = null), this.expectContextual("from"), this.type !== d.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");
};
V.parseExport = function(t, e) {
  if (this.next(), this.eat(d.star))
    return this.parseExportAllDeclaration(t, e);
  if (this.eat(d._default))
    return this.checkExport(e, "default", this.lastTokStart), t.declaration = this.parseExportDefaultDeclaration(), this.finishNode(t, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    t.declaration = this.parseExportDeclaration(t), t.declaration.type === "VariableDeclaration" ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id, t.declaration.id.start), t.specifiers = [], t.source = null, this.options.ecmaVersion >= 16 && (t.attributes = []);
  else {
    if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from"))
      this.type !== d.string && this.unexpected(), t.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause());
    else {
      for (var i = 0, n = t.specifiers; i < n.length; i += 1) {
        var a = n[i];
        this.checkUnreserved(a.local), this.checkLocalExport(a.local), a.local.type === "Literal" && this.raise(a.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      t.source = null, this.options.ecmaVersion >= 16 && (t.attributes = []);
    }
    this.semicolon();
  }
  return this.finishNode(t, "ExportNamedDeclaration");
};
V.parseExportDeclaration = function(t) {
  return this.parseStatement(null);
};
V.parseExportDefaultDeclaration = function() {
  var t;
  if (this.type === d._function || (t = this.isAsyncFunction())) {
    var e = this.startNode();
    return this.next(), t && this.next(), this.parseFunction(e, ve | ps, !1, t);
  } else if (this.type === d._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var n = this.parseMaybeAssign();
    return this.semicolon(), n;
  }
};
V.checkExport = function(t, e, i) {
  t && (typeof e != "string" && (e = e.type === "Identifier" ? e.name : e.value), fe(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0);
};
V.checkPatternExport = function(t, e) {
  var i = e.type;
  if (i === "Identifier")
    this.checkExport(t, e, e.start);
  else if (i === "ObjectPattern")
    for (var n = 0, a = e.properties; n < a.length; n += 1) {
      var r = a[n];
      this.checkPatternExport(t, r);
    }
  else if (i === "ArrayPattern")
    for (var u = 0, h = e.elements; u < h.length; u += 1) {
      var f = h[u];
      f && this.checkPatternExport(t, f);
    }
  else i === "Property" ? this.checkPatternExport(t, e.value) : i === "AssignmentPattern" ? this.checkPatternExport(t, e.left) : i === "RestElement" && this.checkPatternExport(t, e.argument);
};
V.checkVariableExport = function(t, e) {
  if (t)
    for (var i = 0, n = e; i < n.length; i += 1) {
      var a = n[i];
      this.checkPatternExport(t, a.id);
    }
};
V.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
V.parseExportSpecifier = function(t) {
  var e = this.startNode();
  return e.local = this.parseModuleExportName(), e.exported = this.eatContextual("as") ? this.parseModuleExportName() : e.local, this.checkExport(
    t,
    e.exported,
    e.exported.start
  ), this.finishNode(e, "ExportSpecifier");
};
V.parseExportSpecifiers = function(t) {
  var e = [], i = !0;
  for (this.expect(d.braceL); !this.eat(d.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(d.comma), this.afterTrailingComma(d.braceR))
      break;
    e.push(this.parseExportSpecifier(t));
  }
  return e;
};
V.parseImport = function(t) {
  return this.next(), this.type === d.string ? (t.specifiers = Hr, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === d.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (t.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(t, "ImportDeclaration");
};
V.parseImportSpecifier = function() {
  var t = this.startNode();
  return t.imported = this.parseModuleExportName(), this.eatContextual("as") ? t.local = this.parseIdent() : (this.checkUnreserved(t.imported), t.local = t.imported), this.checkLValSimple(t.local, zt), this.finishNode(t, "ImportSpecifier");
};
V.parseImportDefaultSpecifier = function() {
  var t = this.startNode();
  return t.local = this.parseIdent(), this.checkLValSimple(t.local, zt), this.finishNode(t, "ImportDefaultSpecifier");
};
V.parseImportNamespaceSpecifier = function() {
  var t = this.startNode();
  return this.next(), this.expectContextual("as"), t.local = this.parseIdent(), this.checkLValSimple(t.local, zt), this.finishNode(t, "ImportNamespaceSpecifier");
};
V.parseImportSpecifiers = function() {
  var t = [], e = !0;
  if (this.type === d.name && (t.push(this.parseImportDefaultSpecifier()), !this.eat(d.comma)))
    return t;
  if (this.type === d.star)
    return t.push(this.parseImportNamespaceSpecifier()), t;
  for (this.expect(d.braceL); !this.eat(d.braceR); ) {
    if (e)
      e = !1;
    else if (this.expect(d.comma), this.afterTrailingComma(d.braceR))
      break;
    t.push(this.parseImportSpecifier());
  }
  return t;
};
V.parseWithClause = function() {
  var t = [];
  if (!this.eat(d._with))
    return t;
  this.expect(d.braceL);
  for (var e = {}, i = !0; !this.eat(d.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(d.comma), this.afterTrailingComma(d.braceR))
      break;
    var n = this.parseImportAttribute(), a = n.key.type === "Identifier" ? n.key.name : n.key.value;
    fe(e, a) && this.raiseRecoverable(n.key.start, "Duplicate attribute key '" + a + "'"), e[a] = !0, t.push(n);
  }
  return t;
};
V.parseImportAttribute = function() {
  var t = this.startNode();
  return t.key = this.type === d.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(d.colon), this.type !== d.string && this.unexpected(), t.value = this.parseExprAtom(), this.finishNode(t, "ImportAttribute");
};
V.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === d.string) {
    var t = this.parseLiteral(this.value);
    return Rr.test(t.value) && this.raise(t.start, "An export name cannot include a lone surrogate."), t;
  }
  return this.parseIdent(!0);
};
V.adaptDirectivePrologue = function(t) {
  for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e)
    t[e].directive = t[e].expression.raw.slice(1, -1);
};
V.isDirectiveCandidate = function(t) {
  return this.options.ecmaVersion >= 5 && t.type === "ExpressionStatement" && t.expression.type === "Literal" && typeof t.expression.value == "string" && // Reject parenthesized strings.
  (this.input[t.start] === '"' || this.input[t.start] === "'");
};
var Ft = ut.prototype;
Ft.toAssignable = function(t, e, i) {
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
        for (var n = 0, a = t.properties; n < a.length; n += 1) {
          var r = a[n];
          this.toAssignable(r, e), r.type === "RestElement" && (r.argument.type === "ArrayPattern" || r.argument.type === "ObjectPattern") && this.raise(r.argument.start, "Unexpected token");
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
Ft.toAssignableList = function(t, e) {
  for (var i = t.length, n = 0; n < i; n++) {
    var a = t[n];
    a && this.toAssignable(a, e);
  }
  if (i) {
    var r = t[i - 1];
    this.options.ecmaVersion === 6 && e && r && r.type === "RestElement" && r.argument.type !== "Identifier" && this.unexpected(r.argument.start);
  }
  return t;
};
Ft.parseSpread = function(t) {
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement");
};
Ft.parseRestBinding = function() {
  var t = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== d.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
};
Ft.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case d.bracketL:
        var t = this.startNode();
        return this.next(), t.elements = this.parseBindingList(d.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");
      case d.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
Ft.parseBindingList = function(t, e, i, n) {
  for (var a = [], r = !0; !this.eat(t); )
    if (r ? r = !1 : this.expect(d.comma), e && this.type === d.comma)
      a.push(null);
    else {
      if (i && this.afterTrailingComma(t))
        break;
      if (this.type === d.ellipsis) {
        var u = this.parseRestBinding();
        this.parseBindingListItem(u), a.push(u), this.type === d.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(t);
        break;
      } else
        a.push(this.parseAssignableListItem(n));
    }
  return a;
};
Ft.parseAssignableListItem = function(t) {
  var e = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(e), e;
};
Ft.parseBindingListItem = function(t) {
  return t;
};
Ft.parseMaybeDefault = function(t, e, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(d.eq))
    return i;
  var n = this.startNodeAt(t, e);
  return n.left = i, n.right = this.parseMaybeAssign(), this.finishNode(n, "AssignmentPattern");
};
Ft.checkLValSimple = function(t, e, i) {
  e === void 0 && (e = Qe);
  var n = e !== Qe;
  switch (t.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (n ? "Binding " : "Assigning to ") + t.name + " in strict mode"), n && (e === zt && t.name === "let" && this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"), i && (fe(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), e !== ds && this.declareName(t.name, e, t.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(t.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      n && this.raiseRecoverable(t.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return n && this.raiseRecoverable(t.start, "Binding parenthesized expression"), this.checkLValSimple(t.expression, e, i);
    default:
      this.raise(t.start, (n ? "Binding" : "Assigning to") + " rvalue");
  }
};
Ft.checkLValPattern = function(t, e, i) {
  switch (e === void 0 && (e = Qe), t.type) {
    case "ObjectPattern":
      for (var n = 0, a = t.properties; n < a.length; n += 1) {
        var r = a[n];
        this.checkLValInnerPattern(r, e, i);
      }
      break;
    case "ArrayPattern":
      for (var u = 0, h = t.elements; u < h.length; u += 1) {
        var f = h[u];
        f && this.checkLValInnerPattern(f, e, i);
      }
      break;
    default:
      this.checkLValSimple(t, e, i);
  }
};
Ft.checkLValInnerPattern = function(t, e, i) {
  switch (e === void 0 && (e = Qe), t.type) {
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
var bt = function(e, i, n, a, r) {
  this.token = e, this.isExpr = !!i, this.preserveSpace = !!n, this.override = a, this.generator = !!r;
}, nt = {
  b_stat: new bt("{", !1),
  b_expr: new bt("{", !0),
  b_tmpl: new bt("${", !1),
  p_stat: new bt("(", !1),
  p_expr: new bt("(", !0),
  q_tmpl: new bt("`", !0, !0, function(t) {
    return t.tryReadTemplateToken();
  }),
  f_stat: new bt("function", !1),
  f_expr: new bt("function", !0),
  f_expr_gen: new bt("function", !0, !1, null, !0),
  f_gen: new bt("function", !1, !1, null, !0)
}, pe = ut.prototype;
pe.initialContext = function() {
  return [nt.b_stat];
};
pe.curContext = function() {
  return this.context[this.context.length - 1];
};
pe.braceIsBlock = function(t) {
  var e = this.curContext();
  return e === nt.f_expr || e === nt.f_stat ? !0 : t === d.colon && (e === nt.b_stat || e === nt.b_expr) ? !e.isExpr : t === d._return || t === d.name && this.exprAllowed ? xt.test(this.input.slice(this.lastTokEnd, this.start)) : t === d._else || t === d.semi || t === d.eof || t === d.parenR || t === d.arrow ? !0 : t === d.braceL ? e === nt.b_stat : t === d._var || t === d._const || t === d.name ? !1 : !this.exprAllowed;
};
pe.inGeneratorContext = function() {
  for (var t = this.context.length - 1; t >= 1; t--) {
    var e = this.context[t];
    if (e.token === "function")
      return e.generator;
  }
  return !1;
};
pe.updateContext = function(t) {
  var e, i = this.type;
  i.keyword && t === d.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr;
};
pe.overrideContext = function(t) {
  this.curContext() !== t && (this.context[this.context.length - 1] = t);
};
d.parenR.updateContext = d.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var t = this.context.pop();
  t === nt.b_stat && this.curContext().token === "function" && (t = this.context.pop()), this.exprAllowed = !t.isExpr;
};
d.braceL.updateContext = function(t) {
  this.context.push(this.braceIsBlock(t) ? nt.b_stat : nt.b_expr), this.exprAllowed = !0;
};
d.dollarBraceL.updateContext = function() {
  this.context.push(nt.b_tmpl), this.exprAllowed = !0;
};
d.parenL.updateContext = function(t) {
  var e = t === d._if || t === d._for || t === d._with || t === d._while;
  this.context.push(e ? nt.p_stat : nt.p_expr), this.exprAllowed = !0;
};
d.incDec.updateContext = function() {
};
d._function.updateContext = d._class.updateContext = function(t) {
  t.beforeExpr && t !== d._else && !(t === d.semi && this.curContext() !== nt.p_stat) && !(t === d._return && xt.test(this.input.slice(this.lastTokEnd, this.start))) && !((t === d.colon || t === d.braceL) && this.curContext() === nt.b_stat) ? this.context.push(nt.f_expr) : this.context.push(nt.f_stat), this.exprAllowed = !1;
};
d.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
d.backQuote.updateContext = function() {
  this.curContext() === nt.q_tmpl ? this.context.pop() : this.context.push(nt.q_tmpl), this.exprAllowed = !1;
};
d.star.updateContext = function(t) {
  if (t === d._function) {
    var e = this.context.length - 1;
    this.context[e] === nt.f_expr ? this.context[e] = nt.f_expr_gen : this.context[e] = nt.f_gen;
  }
  this.exprAllowed = !0;
};
d.name.updateContext = function(t) {
  var e = !1;
  this.options.ecmaVersion >= 6 && t !== d.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e;
};
var j = ut.prototype;
j.checkPropClash = function(t, e, i) {
  if (!(this.options.ecmaVersion >= 9 && t.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))) {
    var n = t.key, a;
    switch (n.type) {
      case "Identifier":
        a = n.name;
        break;
      case "Literal":
        a = String(n.value);
        break;
      default:
        return;
    }
    var r = t.kind;
    if (this.options.ecmaVersion >= 6) {
      a === "__proto__" && r === "init" && (e.proto && (i ? i.doubleProto < 0 && (i.doubleProto = n.start) : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")), e.proto = !0);
      return;
    }
    a = "$" + a;
    var u = e[a];
    if (u) {
      var h;
      r === "init" ? h = this.strict && u.init || u.get || u.set : h = u.init || u[r], h && this.raiseRecoverable(n.start, "Redefinition of property");
    } else
      u = e[a] = {
        init: !1,
        get: !1,
        set: !1
      };
    u[r] = !0;
  }
};
j.parseExpression = function(t, e) {
  var i = this.start, n = this.startLoc, a = this.parseMaybeAssign(t, e);
  if (this.type === d.comma) {
    var r = this.startNodeAt(i, n);
    for (r.expressions = [a]; this.eat(d.comma); )
      r.expressions.push(this.parseMaybeAssign(t, e));
    return this.finishNode(r, "SequenceExpression");
  }
  return a;
};
j.parseMaybeAssign = function(t, e, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(t);
    this.exprAllowed = !1;
  }
  var n = !1, a = -1, r = -1, u = -1;
  e ? (a = e.parenthesizedAssign, r = e.trailingComma, u = e.doubleProto, e.parenthesizedAssign = e.trailingComma = -1) : (e = new ci(), n = !0);
  var h = this.start, f = this.startLoc;
  (this.type === d.parenL || this.type === d.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = t === "await");
  var l = this.parseMaybeConditional(t, e);
  if (i && (l = i.call(this, l, h, f)), this.type.isAssign) {
    var m = this.startNodeAt(h, f);
    return m.operator = this.value, this.type === d.eq && (l = this.toAssignable(l, !1, e)), n || (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1), e.shorthandAssign >= l.start && (e.shorthandAssign = -1), this.type === d.eq ? this.checkLValPattern(l) : this.checkLValSimple(l), m.left = l, this.next(), m.right = this.parseMaybeAssign(t), u > -1 && (e.doubleProto = u), this.finishNode(m, "AssignmentExpression");
  } else
    n && this.checkExpressionErrors(e, !0);
  return a > -1 && (e.parenthesizedAssign = a), r > -1 && (e.trailingComma = r), l;
};
j.parseMaybeConditional = function(t, e) {
  var i = this.start, n = this.startLoc, a = this.parseExprOps(t, e);
  if (this.checkExpressionErrors(e))
    return a;
  if (this.eat(d.question)) {
    var r = this.startNodeAt(i, n);
    return r.test = a, r.consequent = this.parseMaybeAssign(), this.expect(d.colon), r.alternate = this.parseMaybeAssign(t), this.finishNode(r, "ConditionalExpression");
  }
  return a;
};
j.parseExprOps = function(t, e) {
  var i = this.start, n = this.startLoc, a = this.parseMaybeUnary(e, !1, !1, t);
  return this.checkExpressionErrors(e) || a.start === i && a.type === "ArrowFunctionExpression" ? a : this.parseExprOp(a, i, n, -1, t);
};
j.parseExprOp = function(t, e, i, n, a) {
  var r = this.type.binop;
  if (r != null && (!a || this.type !== d._in) && r > n) {
    var u = this.type === d.logicalOR || this.type === d.logicalAND, h = this.type === d.coalesce;
    h && (r = d.logicalAND.binop);
    var f = this.value;
    this.next();
    var l = this.start, m = this.startLoc, y = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, a), l, m, r, a), A = this.buildBinary(e, i, t, y, f, u || h);
    return (u && this.type === d.coalesce || h && (this.type === d.logicalOR || this.type === d.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(A, e, i, n, a);
  }
  return t;
};
j.buildBinary = function(t, e, i, n, a, r) {
  n.type === "PrivateIdentifier" && this.raise(n.start, "Private identifier can only be left side of binary expression");
  var u = this.startNodeAt(t, e);
  return u.left = i, u.operator = a, u.right = n, this.finishNode(u, r ? "LogicalExpression" : "BinaryExpression");
};
j.parseMaybeUnary = function(t, e, i, n) {
  var a = this.start, r = this.startLoc, u;
  if (this.isContextual("await") && this.canAwait)
    u = this.parseAwait(n), e = !0;
  else if (this.type.prefix) {
    var h = this.startNode(), f = this.type === d.incDec;
    h.operator = this.value, h.prefix = !0, this.next(), h.argument = this.parseMaybeUnary(null, !0, f, n), this.checkExpressionErrors(t, !0), f ? this.checkLValSimple(h.argument) : this.strict && h.operator === "delete" && ms(h.argument) ? this.raiseRecoverable(h.start, "Deleting local variable in strict mode") : h.operator === "delete" && Di(h.argument) ? this.raiseRecoverable(h.start, "Private fields can not be deleted") : e = !0, u = this.finishNode(h, f ? "UpdateExpression" : "UnaryExpression");
  } else if (!e && this.type === d.privateId)
    (n || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), u = this.parsePrivateIdent(), this.type !== d._in && this.unexpected();
  else {
    if (u = this.parseExprSubscripts(t, n), this.checkExpressionErrors(t))
      return u;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var l = this.startNodeAt(a, r);
      l.operator = this.value, l.prefix = !1, l.argument = u, this.checkLValSimple(u), this.next(), u = this.finishNode(l, "UpdateExpression");
    }
  }
  if (!i && this.eat(d.starstar))
    if (e)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(a, r, u, this.parseMaybeUnary(null, !1, !1, n), "**", !1);
  else
    return u;
};
function ms(t) {
  return t.type === "Identifier" || t.type === "ParenthesizedExpression" && ms(t.expression);
}
function Di(t) {
  return t.type === "MemberExpression" && t.property.type === "PrivateIdentifier" || t.type === "ChainExpression" && Di(t.expression) || t.type === "ParenthesizedExpression" && Di(t.expression);
}
j.parseExprSubscripts = function(t, e) {
  var i = this.start, n = this.startLoc, a = this.parseExprAtom(t, e);
  if (a.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return a;
  var r = this.parseSubscripts(a, i, n, !1, e);
  return t && r.type === "MemberExpression" && (t.parenthesizedAssign >= r.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= r.start && (t.parenthesizedBind = -1), t.trailingComma >= r.start && (t.trailingComma = -1)), r;
};
j.parseSubscripts = function(t, e, i, n, a) {
  for (var r = this.options.ecmaVersion >= 8 && t.type === "Identifier" && t.name === "async" && this.lastTokEnd === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.potentialArrowAt === t.start, u = !1; ; ) {
    var h = this.parseSubscript(t, e, i, n, r, u, a);
    if (h.optional && (u = !0), h === t || h.type === "ArrowFunctionExpression") {
      if (u) {
        var f = this.startNodeAt(e, i);
        f.expression = h, h = this.finishNode(f, "ChainExpression");
      }
      return h;
    }
    t = h;
  }
};
j.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(d.arrow);
};
j.parseSubscriptAsyncArrow = function(t, e, i, n) {
  return this.parseArrowExpression(this.startNodeAt(t, e), i, !0, n);
};
j.parseSubscript = function(t, e, i, n, a, r, u) {
  var h = this.options.ecmaVersion >= 11, f = h && this.eat(d.questionDot);
  n && f && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var l = this.eat(d.bracketL);
  if (l || f && this.type !== d.parenL && this.type !== d.backQuote || this.eat(d.dot)) {
    var m = this.startNodeAt(e, i);
    m.object = t, l ? (m.property = this.parseExpression(), this.expect(d.bracketR)) : this.type === d.privateId && t.type !== "Super" ? m.property = this.parsePrivateIdent() : m.property = this.parseIdent(this.options.allowReserved !== "never"), m.computed = !!l, h && (m.optional = f), t = this.finishNode(m, "MemberExpression");
  } else if (!n && this.eat(d.parenL)) {
    var y = new ci(), A = this.yieldPos, N = this.awaitPos, _ = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var q = this.parseExprList(d.parenR, this.options.ecmaVersion >= 8, !1, y);
    if (a && !f && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(y, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = A, this.awaitPos = N, this.awaitIdentPos = _, this.parseSubscriptAsyncArrow(e, i, q, u);
    this.checkExpressionErrors(y, !0), this.yieldPos = A || this.yieldPos, this.awaitPos = N || this.awaitPos, this.awaitIdentPos = _ || this.awaitIdentPos;
    var E = this.startNodeAt(e, i);
    E.callee = t, E.arguments = q, h && (E.optional = f), t = this.finishNode(E, "CallExpression");
  } else if (this.type === d.backQuote) {
    (f || r) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var B = this.startNodeAt(e, i);
    B.tag = t, B.quasi = this.parseTemplate({ isTagged: !0 }), t = this.finishNode(B, "TaggedTemplateExpression");
  }
  return t;
};
j.parseExprAtom = function(t, e, i) {
  this.type === d.slash && this.readRegexp();
  var n, a = this.potentialArrowAt === this.start;
  switch (this.type) {
    case d._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), n = this.startNode(), this.next(), this.type === d.parenL && !this.allowDirectSuper && this.raise(n.start, "super() call outside constructor of a subclass"), this.type !== d.dot && this.type !== d.bracketL && this.type !== d.parenL && this.unexpected(), this.finishNode(n, "Super");
    case d._this:
      return n = this.startNode(), this.next(), this.finishNode(n, "ThisExpression");
    case d.name:
      var r = this.start, u = this.startLoc, h = this.containsEsc, f = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !h && f.name === "async" && !this.canInsertSemicolon() && this.eat(d._function))
        return this.overrideContext(nt.f_expr), this.parseFunction(this.startNodeAt(r, u), 0, !1, !0, e);
      if (a && !this.canInsertSemicolon()) {
        if (this.eat(d.arrow))
          return this.parseArrowExpression(this.startNodeAt(r, u), [f], !1, e);
        if (this.options.ecmaVersion >= 8 && f.name === "async" && this.type === d.name && !h && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return f = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(d.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(r, u), [f], !0, e);
      }
      return f;
    case d.regexp:
      var l = this.value;
      return n = this.parseLiteral(l.value), n.regex = { pattern: l.pattern, flags: l.flags }, n;
    case d.num:
    case d.string:
      return this.parseLiteral(this.value);
    case d._null:
    case d._true:
    case d._false:
      return n = this.startNode(), n.value = this.type === d._null ? null : this.type === d._true, n.raw = this.type.keyword, this.next(), this.finishNode(n, "Literal");
    case d.parenL:
      var m = this.start, y = this.parseParenAndDistinguishExpression(a, e);
      return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(y) && (t.parenthesizedAssign = m), t.parenthesizedBind < 0 && (t.parenthesizedBind = m)), y;
    case d.bracketL:
      return n = this.startNode(), this.next(), n.elements = this.parseExprList(d.bracketR, !0, !0, t), this.finishNode(n, "ArrayExpression");
    case d.braceL:
      return this.overrideContext(nt.b_expr), this.parseObj(!1, t);
    case d._function:
      return n = this.startNode(), this.next(), this.parseFunction(n, 0);
    case d._class:
      return this.parseClass(this.startNode(), !1);
    case d._new:
      return this.parseNew();
    case d.backQuote:
      return this.parseTemplate();
    case d._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
j.parseExprAtomDefault = function() {
  this.unexpected();
};
j.parseExprImport = function(t) {
  var e = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === d.parenL && !t)
    return this.parseDynamicImport(e);
  if (this.type === d.dot) {
    var i = this.startNodeAt(e.start, e.loc && e.loc.start);
    return i.name = "import", e.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(e);
  } else
    this.unexpected();
};
j.parseDynamicImport = function(t) {
  if (this.next(), t.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16)
    this.eat(d.parenR) ? t.options = null : (this.expect(d.comma), this.afterTrailingComma(d.parenR) ? t.options = null : (t.options = this.parseMaybeAssign(), this.eat(d.parenR) || (this.expect(d.comma), this.afterTrailingComma(d.parenR) || this.unexpected())));
  else if (!this.eat(d.parenR)) {
    var e = this.start;
    this.eat(d.comma) && this.eat(d.parenR) ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()") : this.unexpected(e);
  }
  return this.finishNode(t, "ImportExpression");
};
j.parseImportMeta = function(t) {
  this.next();
  var e = this.containsEsc;
  return t.property = this.parseIdent(!0), t.property.name !== "meta" && this.raiseRecoverable(t.property.start, "The only valid meta property for import is 'import.meta'"), e && this.raiseRecoverable(t.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(t.start, "Cannot use 'import.meta' outside a module"), this.finishNode(t, "MetaProperty");
};
j.parseLiteral = function(t) {
  var e = this.startNode();
  return e.value = t, e.raw = this.input.slice(this.start, this.end), e.raw.charCodeAt(e.raw.length - 1) === 110 && (e.bigint = e.value != null ? e.value.toString() : e.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(e, "Literal");
};
j.parseParenExpression = function() {
  this.expect(d.parenL);
  var t = this.parseExpression();
  return this.expect(d.parenR), t;
};
j.shouldParseArrow = function(t) {
  return !this.canInsertSemicolon();
};
j.parseParenAndDistinguishExpression = function(t, e) {
  var i = this.start, n = this.startLoc, a, r = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var u = this.start, h = this.startLoc, f = [], l = !0, m = !1, y = new ci(), A = this.yieldPos, N = this.awaitPos, _;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== d.parenR; )
      if (l ? l = !1 : this.expect(d.comma), r && this.afterTrailingComma(d.parenR, !0)) {
        m = !0;
        break;
      } else if (this.type === d.ellipsis) {
        _ = this.start, f.push(this.parseParenItem(this.parseRestBinding())), this.type === d.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        f.push(this.parseMaybeAssign(!1, y, this.parseParenItem));
    var q = this.lastTokEnd, E = this.lastTokEndLoc;
    if (this.expect(d.parenR), t && this.shouldParseArrow(f) && this.eat(d.arrow))
      return this.checkPatternErrors(y, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = A, this.awaitPos = N, this.parseParenArrowList(i, n, f, e);
    (!f.length || m) && this.unexpected(this.lastTokStart), _ && this.unexpected(_), this.checkExpressionErrors(y, !0), this.yieldPos = A || this.yieldPos, this.awaitPos = N || this.awaitPos, f.length > 1 ? (a = this.startNodeAt(u, h), a.expressions = f, this.finishNodeAt(a, "SequenceExpression", q, E)) : a = f[0];
  } else
    a = this.parseParenExpression();
  if (this.options.preserveParens) {
    var B = this.startNodeAt(i, n);
    return B.expression = a, this.finishNode(B, "ParenthesizedExpression");
  } else
    return a;
};
j.parseParenItem = function(t) {
  return t;
};
j.parseParenArrowList = function(t, e, i, n) {
  return this.parseArrowExpression(this.startNodeAt(t, e), i, !1, n);
};
var zr = [];
j.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var t = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === d.dot) {
    var e = this.startNodeAt(t.start, t.loc && t.loc.start);
    e.name = "new", t.meta = this.finishNode(e, "Identifier"), this.next();
    var i = this.containsEsc;
    return t.property = this.parseIdent(!0), t.property.name !== "target" && this.raiseRecoverable(t.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(t.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(t.start, "'new.target' can only be used in functions and class static block"), this.finishNode(t, "MetaProperty");
  }
  var n = this.start, a = this.startLoc;
  return t.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), n, a, !0, !1), this.eat(d.parenL) ? t.arguments = this.parseExprList(d.parenR, this.options.ecmaVersion >= 8, !1) : t.arguments = zr, this.finishNode(t, "NewExpression");
};
j.parseTemplateElement = function(t) {
  var e = t.isTagged, i = this.startNode();
  return this.type === d.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : i.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), i.tail = this.type === d.backQuote, this.finishNode(i, "TemplateElement");
};
j.parseTemplate = function(t) {
  t === void 0 && (t = {});
  var e = t.isTagged;
  e === void 0 && (e = !1);
  var i = this.startNode();
  this.next(), i.expressions = [];
  var n = this.parseTemplateElement({ isTagged: e });
  for (i.quasis = [n]; !n.tail; )
    this.type === d.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(d.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(d.braceR), i.quasis.push(n = this.parseTemplateElement({ isTagged: e }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
j.isAsyncProp = function(t) {
  return !t.computed && t.key.type === "Identifier" && t.key.name === "async" && (this.type === d.name || this.type === d.num || this.type === d.string || this.type === d.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === d.star) && !xt.test(this.input.slice(this.lastTokEnd, this.start));
};
j.parseObj = function(t, e) {
  var i = this.startNode(), n = !0, a = {};
  for (i.properties = [], this.next(); !this.eat(d.braceR); ) {
    if (n)
      n = !1;
    else if (this.expect(d.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(d.braceR))
      break;
    var r = this.parseProperty(t, e);
    t || this.checkPropClash(r, a, e), i.properties.push(r);
  }
  return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression");
};
j.parseProperty = function(t, e) {
  var i = this.startNode(), n, a, r, u;
  if (this.options.ecmaVersion >= 9 && this.eat(d.ellipsis))
    return t ? (i.argument = this.parseIdent(!1), this.type === d.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, e), this.type === d.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (t || e) && (r = this.start, u = this.startLoc), t || (n = this.eat(d.star)));
  var h = this.containsEsc;
  return this.parsePropertyName(i), !t && !h && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(i) ? (a = !0, n = this.options.ecmaVersion >= 9 && this.eat(d.star), this.parsePropertyName(i)) : a = !1, this.parsePropertyValue(i, t, n, a, r, u, e, h), this.finishNode(i, "Property");
};
j.parseGetterSetter = function(t) {
  var e = t.key.name;
  this.parsePropertyName(t), t.value = this.parseMethod(!1), t.kind = e;
  var i = t.kind === "get" ? 0 : 1;
  if (t.value.params.length !== i) {
    var n = t.value.start;
    t.kind === "get" ? this.raiseRecoverable(n, "getter should have no params") : this.raiseRecoverable(n, "setter should have exactly one param");
  } else
    t.kind === "set" && t.value.params[0].type === "RestElement" && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params");
};
j.parsePropertyValue = function(t, e, i, n, a, r, u, h) {
  (i || n) && this.type === d.colon && this.unexpected(), this.eat(d.colon) ? (t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, u), t.kind = "init") : this.options.ecmaVersion >= 6 && this.type === d.parenL ? (e && this.unexpected(), t.method = !0, t.value = this.parseMethod(i, n), t.kind = "init") : !e && !h && this.options.ecmaVersion >= 5 && !t.computed && t.key.type === "Identifier" && (t.key.name === "get" || t.key.name === "set") && this.type !== d.comma && this.type !== d.braceR && this.type !== d.eq ? ((i || n) && this.unexpected(), this.parseGetterSetter(t)) : this.options.ecmaVersion >= 6 && !t.computed && t.key.type === "Identifier" ? ((i || n) && this.unexpected(), this.checkUnreserved(t.key), t.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = a), e ? t.value = this.parseMaybeDefault(a, r, this.copyNode(t.key)) : this.type === d.eq && u ? (u.shorthandAssign < 0 && (u.shorthandAssign = this.start), t.value = this.parseMaybeDefault(a, r, this.copyNode(t.key))) : t.value = this.copyNode(t.key), t.kind = "init", t.shorthand = !0) : this.unexpected();
};
j.parsePropertyName = function(t) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(d.bracketL))
      return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(d.bracketR), t.key;
    t.computed = !1;
  }
  return t.key = this.type === d.num || this.type === d.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
j.initFunction = function(t) {
  t.id = null, this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1), this.options.ecmaVersion >= 8 && (t.async = !1);
};
j.parseMethod = function(t, e, i) {
  var n = this.startNode(), a = this.yieldPos, r = this.awaitPos, u = this.awaitIdentPos;
  return this.initFunction(n), this.options.ecmaVersion >= 6 && (n.generator = t), this.options.ecmaVersion >= 8 && (n.async = !!e), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Qi(e, n.generator) | li | (i ? hs : 0)), this.expect(d.parenL), n.params = this.parseBindingList(d.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(n, !1, !0, !1), this.yieldPos = a, this.awaitPos = r, this.awaitIdentPos = u, this.finishNode(n, "FunctionExpression");
};
j.parseArrowExpression = function(t, e, i, n) {
  var a = this.yieldPos, r = this.awaitPos, u = this.awaitIdentPos;
  return this.enterScope(Qi(i, !1) | $i), this.initFunction(t), this.options.ecmaVersion >= 8 && (t.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0, !1, n), this.yieldPos = a, this.awaitPos = r, this.awaitIdentPos = u, this.finishNode(t, "ArrowFunctionExpression");
};
j.parseFunctionBody = function(t, e, i, n) {
  var a = e && this.type !== d.braceL, r = this.strict, u = !1;
  if (a)
    t.body = this.parseMaybeAssign(n), t.expression = !0, this.checkParams(t, !1);
  else {
    var h = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
    (!r || h) && (u = this.strictDirective(this.end), u && h && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var f = this.labels;
    this.labels = [], u && (this.strict = !0), this.checkParams(t, !r && !u && !e && !i && this.isSimpleParamList(t.params)), this.strict && t.id && this.checkLValSimple(t.id, ds), t.body = this.parseBlock(!1, void 0, u && !r), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = f;
  }
  this.exitScope();
};
j.isSimpleParamList = function(t) {
  for (var e = 0, i = t; e < i.length; e += 1) {
    var n = i[e];
    if (n.type !== "Identifier")
      return !1;
  }
  return !0;
};
j.checkParams = function(t, e) {
  for (var i = /* @__PURE__ */ Object.create(null), n = 0, a = t.params; n < a.length; n += 1) {
    var r = a[n];
    this.checkLValInnerPattern(r, Yi, e ? null : i);
  }
};
j.parseExprList = function(t, e, i, n) {
  for (var a = [], r = !0; !this.eat(t); ) {
    if (r)
      r = !1;
    else if (this.expect(d.comma), e && this.afterTrailingComma(t))
      break;
    var u = void 0;
    i && this.type === d.comma ? u = null : this.type === d.ellipsis ? (u = this.parseSpread(n), n && this.type === d.comma && n.trailingComma < 0 && (n.trailingComma = this.start)) : u = this.parseMaybeAssign(!1, n), a.push(u);
  }
  return a;
};
j.checkUnreserved = function(t) {
  var e = t.start, i = t.end, n = t.name;
  if (this.inGenerator && n === "yield" && this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && n === "await" && this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"), !(this.currentThisScope().flags & hi) && n === "arguments" && this.raiseRecoverable(e, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (n === "arguments" || n === "await") && this.raise(e, "Cannot use " + n + " in class static initialization block"), this.keywords.test(n) && this.raise(e, "Unexpected keyword '" + n + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(e, i).indexOf("\\") !== -1)) {
    var a = this.strict ? this.reservedWordsStrict : this.reservedWords;
    a.test(n) && (!this.inAsync && n === "await" && this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + n + "' is reserved"));
  }
};
j.parseIdent = function(t) {
  var e = this.parseIdentNode();
  return this.next(!!t), this.finishNode(e, "Identifier"), t || (this.checkUnreserved(e), e.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = e.start)), e;
};
j.parseIdentNode = function() {
  var t = this.startNode();
  return this.type === d.name ? t.name = this.value : this.type.keyword ? (t.name = this.type.keyword, (t.name === "class" || t.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = d.name) : this.unexpected(), t;
};
j.parsePrivateIdent = function() {
  var t = this.startNode();
  return this.type === d.privateId ? t.name = this.value : this.unexpected(), this.next(), this.finishNode(t, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(t.start, "Private field '#" + t.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(t)), t;
};
j.parseYield = function(t) {
  this.yieldPos || (this.yieldPos = this.start);
  var e = this.startNode();
  return this.next(), this.type === d.semi || this.canInsertSemicolon() || this.type !== d.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(d.star), e.argument = this.parseMaybeAssign(t)), this.finishNode(e, "YieldExpression");
};
j.parseAwait = function(t) {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !0, !1, t), this.finishNode(e, "AwaitExpression");
};
var Ze = ut.prototype;
Ze.raise = function(t, e) {
  var i = Ki(this.input, t);
  e += " (" + i.line + ":" + i.column + ")", this.sourceFile && (e += " in " + this.sourceFile);
  var n = new SyntaxError(e);
  throw n.pos = t, n.loc = i, n.raisedAt = this.pos, n;
};
Ze.raiseRecoverable = Ze.raise;
Ze.curPosition = function() {
  if (this.options.locations)
    return new he(this.curLine, this.pos - this.lineStart);
};
var Zt = ut.prototype, Wr = function(e) {
  this.flags = e, this.var = [], this.lexical = [], this.functions = [];
};
Zt.enterScope = function(t) {
  this.scopeStack.push(new Wr(t));
};
Zt.exitScope = function() {
  this.scopeStack.pop();
};
Zt.treatFunctionsAsVarInScope = function(t) {
  return t.flags & de || !this.inModule && t.flags & Ee;
};
Zt.declareName = function(t, e, i) {
  var n = !1;
  if (e === zt) {
    var a = this.currentScope();
    n = a.lexical.indexOf(t) > -1 || a.functions.indexOf(t) > -1 || a.var.indexOf(t) > -1, a.lexical.push(t), this.inModule && a.flags & Ee && delete this.undefinedExports[t];
  } else if (e === fs) {
    var r = this.currentScope();
    r.lexical.push(t);
  } else if (e === cs) {
    var u = this.currentScope();
    this.treatFunctionsAsVar ? n = u.lexical.indexOf(t) > -1 : n = u.lexical.indexOf(t) > -1 || u.var.indexOf(t) > -1, u.functions.push(t);
  } else
    for (var h = this.scopeStack.length - 1; h >= 0; --h) {
      var f = this.scopeStack[h];
      if (f.lexical.indexOf(t) > -1 && !(f.flags & ls && f.lexical[0] === t) || !this.treatFunctionsAsVarInScope(f) && f.functions.indexOf(t) > -1) {
        n = !0;
        break;
      }
      if (f.var.push(t), this.inModule && f.flags & Ee && delete this.undefinedExports[t], f.flags & hi)
        break;
    }
  n && this.raiseRecoverable(i, "Identifier '" + t + "' has already been declared");
};
Zt.checkLocalExport = function(t) {
  this.scopeStack[0].lexical.indexOf(t.name) === -1 && this.scopeStack[0].var.indexOf(t.name) === -1 && (this.undefinedExports[t.name] = t);
};
Zt.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Zt.currentVarScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (hi | Le | se))
      return e;
  }
};
Zt.currentThisScope = function() {
  for (var t = this.scopeStack.length - 1; ; t--) {
    var e = this.scopeStack[t];
    if (e.flags & (hi | Le | se) && !(e.flags & $i))
      return e;
  }
};
var _e = function(e, i, n) {
  this.type = "", this.start = i, this.end = 0, e.options.locations && (this.loc = new Ne(e, n)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [i, 0]);
}, Be = ut.prototype;
Be.startNode = function() {
  return new _e(this, this.start, this.startLoc);
};
Be.startNodeAt = function(t, e) {
  return new _e(this, t, e);
};
function gs(t, e, i, n) {
  return t.type = e, t.end = i, this.options.locations && (t.loc.end = n), this.options.ranges && (t.range[1] = i), t;
}
Be.finishNode = function(t, e) {
  return gs.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
};
Be.finishNodeAt = function(t, e, i, n) {
  return gs.call(this, t, e, i, n);
};
Be.copyNode = function(t) {
  var e = new _e(this, t.start, this.startLoc);
  for (var i in t)
    e[i] = t[i];
  return e;
};
var Kr = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", ys = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", bs = ys + " Extended_Pictographic", ks = bs, xs = ks + " EBase EComp EMod EPres ExtPict", vs = xs, Xr = vs, $r = {
  9: ys,
  10: bs,
  11: ks,
  12: xs,
  13: vs,
  14: Xr
}, Qr = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Yr = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Qr
}, mn = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", As = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Cs = As + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Ts = Cs + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Es = Ts + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", ws = Es + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Zr = ws + " " + Kr, Gr = {
  9: As,
  10: Cs,
  11: Ts,
  12: Es,
  13: ws,
  14: Zr
}, Ss = {};
function to(t) {
  var e = Ss[t] = {
    binary: Yt($r[t] + " " + mn),
    binaryOfStrings: Yt(Yr[t]),
    nonBinary: {
      General_Category: Yt(mn),
      Script: Yt(Gr[t])
    }
  };
  e.nonBinary.Script_Extensions = e.nonBinary.Script, e.nonBinary.gc = e.nonBinary.General_Category, e.nonBinary.sc = e.nonBinary.Script, e.nonBinary.scx = e.nonBinary.Script_Extensions;
}
for (var ki = 0, gn = [9, 10, 11, 12, 13, 14]; ki < gn.length; ki += 1) {
  var eo = gn[ki];
  to(eo);
}
var F = ut.prototype, Ge = function(e, i) {
  this.parent = e, this.base = i || this;
};
Ge.prototype.separatedFrom = function(e) {
  for (var i = this; i; i = i.parent)
    for (var n = e; n; n = n.parent)
      if (i.base === n.base && i !== n)
        return !0;
  return !1;
};
Ge.prototype.sibling = function() {
  return new Ge(this.parent, this.base);
};
var qt = function(e) {
  this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : "") + (e.options.ecmaVersion >= 13 ? "d" : "") + (e.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Ss[e.options.ecmaVersion >= 14 ? 14 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
qt.prototype.reset = function(e, i, n) {
  var a = n.indexOf("v") !== -1, r = n.indexOf("u") !== -1;
  this.start = e | 0, this.source = i + "", this.flags = n, a && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = r && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = r && this.parser.options.ecmaVersion >= 9);
};
qt.prototype.raise = function(e) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
};
qt.prototype.at = function(e, i) {
  i === void 0 && (i = !1);
  var n = this.source, a = n.length;
  if (e >= a)
    return -1;
  var r = n.charCodeAt(e);
  if (!(i || this.switchU) || r <= 55295 || r >= 57344 || e + 1 >= a)
    return r;
  var u = n.charCodeAt(e + 1);
  return u >= 56320 && u <= 57343 ? (r << 10) + u - 56613888 : r;
};
qt.prototype.nextIndex = function(e, i) {
  i === void 0 && (i = !1);
  var n = this.source, a = n.length;
  if (e >= a)
    return a;
  var r = n.charCodeAt(e), u;
  return !(i || this.switchU) || r <= 55295 || r >= 57344 || e + 1 >= a || (u = n.charCodeAt(e + 1)) < 56320 || u > 57343 ? e + 1 : e + 2;
};
qt.prototype.current = function(e) {
  return e === void 0 && (e = !1), this.at(this.pos, e);
};
qt.prototype.lookahead = function(e) {
  return e === void 0 && (e = !1), this.at(this.nextIndex(this.pos, e), e);
};
qt.prototype.advance = function(e) {
  e === void 0 && (e = !1), this.pos = this.nextIndex(this.pos, e);
};
qt.prototype.eat = function(e, i) {
  return i === void 0 && (i = !1), this.current(i) === e ? (this.advance(i), !0) : !1;
};
qt.prototype.eatChars = function(e, i) {
  i === void 0 && (i = !1);
  for (var n = this.pos, a = 0, r = e; a < r.length; a += 1) {
    var u = r[a], h = this.at(n, i);
    if (h === -1 || h !== u)
      return !1;
    n = this.nextIndex(n, i);
  }
  return this.pos = n, !0;
};
F.validateRegExpFlags = function(t) {
  for (var e = t.validFlags, i = t.flags, n = !1, a = !1, r = 0; r < i.length; r++) {
    var u = i.charAt(r);
    e.indexOf(u) === -1 && this.raise(t.start, "Invalid regular expression flag"), i.indexOf(u, r + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag"), u === "u" && (n = !0), u === "v" && (a = !0);
  }
  this.options.ecmaVersion >= 15 && n && a && this.raise(t.start, "Invalid regular expression flag");
};
function io(t) {
  for (var e in t)
    return !0;
  return !1;
}
F.validateRegExpPattern = function(t) {
  this.regexp_pattern(t), !t.switchN && this.options.ecmaVersion >= 9 && io(t.groupNames) && (t.switchN = !0, this.regexp_pattern(t));
};
F.regexp_pattern = function(t) {
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
    var n = i[e];
    t.groupNames[n] || t.raise("Invalid named capture referenced");
  }
};
F.regexp_disjunction = function(t) {
  var e = this.options.ecmaVersion >= 16;
  for (e && (t.branchID = new Ge(t.branchID, null)), this.regexp_alternative(t); t.eat(
    124
    /* | */
  ); )
    e && (t.branchID = t.branchID.sibling()), this.regexp_alternative(t);
  e && (t.branchID = t.branchID.parent), this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"), t.eat(
    123
    /* { */
  ) && t.raise("Lone quantifier brackets");
};
F.regexp_alternative = function(t) {
  for (; t.pos < t.source.length && this.regexp_eatTerm(t); )
    ;
};
F.regexp_eatTerm = function(t) {
  return this.regexp_eatAssertion(t) ? (t.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(t) && t.switchU && t.raise("Invalid quantifier"), !0) : (t.switchU ? this.regexp_eatAtom(t) : this.regexp_eatExtendedAtom(t)) ? (this.regexp_eatQuantifier(t), !0) : !1;
};
F.regexp_eatAssertion = function(t) {
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
F.regexp_eatQuantifier = function(t, e) {
  return e === void 0 && (e = !1), this.regexp_eatQuantifierPrefix(t, e) ? (t.eat(
    63
    /* ? */
  ), !0) : !1;
};
F.regexp_eatQuantifierPrefix = function(t, e) {
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
F.regexp_eatBracedQuantifier = function(t, e) {
  var i = t.pos;
  if (t.eat(
    123
    /* { */
  )) {
    var n = 0, a = -1;
    if (this.regexp_eatDecimalDigits(t) && (n = t.lastIntValue, t.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(t) && (a = t.lastIntValue), t.eat(
      125
      /* } */
    )))
      return a !== -1 && a < n && !e && t.raise("numbers out of order in {} quantifier"), !0;
    t.switchU && !e && t.raise("Incomplete quantifier"), t.pos = i;
  }
  return !1;
};
F.regexp_eatAtom = function(t) {
  return this.regexp_eatPatternCharacters(t) || t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t);
};
F.regexp_eatReverseSolidusAtomEscape = function(t) {
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
F.regexp_eatUncapturingGroup = function(t) {
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
        var i = this.regexp_eatModifiers(t), n = t.eat(
          45
          /* - */
        );
        if (i || n) {
          for (var a = 0; a < i.length; a++) {
            var r = i.charAt(a);
            i.indexOf(r, a + 1) > -1 && t.raise("Duplicate regular expression modifiers");
          }
          if (n) {
            var u = this.regexp_eatModifiers(t);
            !i && !u && t.current() === 58 && t.raise("Invalid regular expression modifiers");
            for (var h = 0; h < u.length; h++) {
              var f = u.charAt(h);
              (u.indexOf(f, h + 1) > -1 || i.indexOf(f) > -1) && t.raise("Duplicate regular expression modifiers");
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
F.regexp_eatCapturingGroup = function(t) {
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
F.regexp_eatModifiers = function(t) {
  for (var e = "", i = 0; (i = t.current()) !== -1 && no(i); )
    e += Ht(i), t.advance();
  return e;
};
function no(t) {
  return t === 105 || t === 109 || t === 115;
}
F.regexp_eatExtendedAtom = function(t) {
  return t.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(t) || this.regexp_eatCharacterClass(t) || this.regexp_eatUncapturingGroup(t) || this.regexp_eatCapturingGroup(t) || this.regexp_eatInvalidBracedQuantifier(t) || this.regexp_eatExtendedPatternCharacter(t);
};
F.regexp_eatInvalidBracedQuantifier = function(t) {
  return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1;
};
F.regexp_eatSyntaxCharacter = function(t) {
  var e = t.current();
  return Ds(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function Ds(t) {
  return t === 36 || t >= 40 && t <= 43 || t === 46 || t === 63 || t >= 91 && t <= 94 || t >= 123 && t <= 125;
}
F.regexp_eatPatternCharacters = function(t) {
  for (var e = t.pos, i = 0; (i = t.current()) !== -1 && !Ds(i); )
    t.advance();
  return t.pos !== e;
};
F.regexp_eatExtendedPatternCharacter = function(t) {
  var e = t.current();
  return e !== -1 && e !== 36 && !(e >= 40 && e <= 43) && e !== 46 && e !== 63 && e !== 91 && e !== 94 && e !== 124 ? (t.advance(), !0) : !1;
};
F.regexp_groupSpecifier = function(t) {
  if (t.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(t) || t.raise("Invalid group");
    var e = this.options.ecmaVersion >= 16, i = t.groupNames[t.lastStringValue];
    if (i)
      if (e)
        for (var n = 0, a = i; n < a.length; n += 1) {
          var r = a[n];
          r.separatedFrom(t.branchID) || t.raise("Duplicate capture group name");
        }
      else
        t.raise("Duplicate capture group name");
    e ? (i || (t.groupNames[t.lastStringValue] = [])).push(t.branchID) : t.groupNames[t.lastStringValue] = !0;
  }
};
F.regexp_eatGroupName = function(t) {
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
F.regexp_eatRegExpIdentifierName = function(t) {
  if (t.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(t)) {
    for (t.lastStringValue += Ht(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t); )
      t.lastStringValue += Ht(t.lastIntValue);
    return !0;
  }
  return !1;
};
F.regexp_eatRegExpIdentifierStart = function(t) {
  var e = t.pos, i = this.options.ecmaVersion >= 11, n = t.current(i);
  return t.advance(i), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (n = t.lastIntValue), so(n) ? (t.lastIntValue = n, !0) : (t.pos = e, !1);
};
function so(t) {
  return Rt(t, !0) || t === 36 || t === 95;
}
F.regexp_eatRegExpIdentifierPart = function(t) {
  var e = t.pos, i = this.options.ecmaVersion >= 11, n = t.current(i);
  return t.advance(i), n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(t, i) && (n = t.lastIntValue), ao(n) ? (t.lastIntValue = n, !0) : (t.pos = e, !1);
};
function ao(t) {
  return Ut(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
}
F.regexp_eatAtomEscape = function(t) {
  return this.regexp_eatBackReference(t) || this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t) || t.switchN && this.regexp_eatKGroupName(t) ? !0 : (t.switchU && (t.current() === 99 && t.raise("Invalid unicode escape"), t.raise("Invalid escape")), !1);
};
F.regexp_eatBackReference = function(t) {
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
F.regexp_eatKGroupName = function(t) {
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
F.regexp_eatCharacterEscape = function(t) {
  return this.regexp_eatControlEscape(t) || this.regexp_eatCControlLetter(t) || this.regexp_eatZero(t) || this.regexp_eatHexEscapeSequence(t) || this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) || !t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t) || this.regexp_eatIdentityEscape(t);
};
F.regexp_eatCControlLetter = function(t) {
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
F.regexp_eatZero = function(t) {
  return t.current() === 48 && !fi(t.lookahead()) ? (t.lastIntValue = 0, t.advance(), !0) : !1;
};
F.regexp_eatControlEscape = function(t) {
  var e = t.current();
  return e === 116 ? (t.lastIntValue = 9, t.advance(), !0) : e === 110 ? (t.lastIntValue = 10, t.advance(), !0) : e === 118 ? (t.lastIntValue = 11, t.advance(), !0) : e === 102 ? (t.lastIntValue = 12, t.advance(), !0) : e === 114 ? (t.lastIntValue = 13, t.advance(), !0) : !1;
};
F.regexp_eatControlLetter = function(t) {
  var e = t.current();
  return Ps(e) ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
function Ps(t) {
  return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
F.regexp_eatRegExpUnicodeEscapeSequence = function(t, e) {
  e === void 0 && (e = !1);
  var i = t.pos, n = e || t.switchU;
  if (t.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(t, 4)) {
      var a = t.lastIntValue;
      if (n && a >= 55296 && a <= 56319) {
        var r = t.pos;
        if (t.eat(
          92
          /* \ */
        ) && t.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(t, 4)) {
          var u = t.lastIntValue;
          if (u >= 56320 && u <= 57343)
            return t.lastIntValue = (a - 55296) * 1024 + (u - 56320) + 65536, !0;
        }
        t.pos = r, t.lastIntValue = a;
      }
      return !0;
    }
    if (n && t.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(t) && t.eat(
      125
      /* } */
    ) && ro(t.lastIntValue))
      return !0;
    n && t.raise("Invalid unicode escape"), t.pos = i;
  }
  return !1;
};
function ro(t) {
  return t >= 0 && t <= 1114111;
}
F.regexp_eatIdentityEscape = function(t) {
  if (t.switchU)
    return this.regexp_eatSyntaxCharacter(t) ? !0 : t.eat(
      47
      /* / */
    ) ? (t.lastIntValue = 47, !0) : !1;
  var e = t.current();
  return e !== 99 && (!t.switchN || e !== 107) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
F.regexp_eatDecimalEscape = function(t) {
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
var Is = 0, Jt = 1, Nt = 2;
F.regexp_eatCharacterClassEscape = function(t) {
  var e = t.current();
  if (oo(e))
    return t.lastIntValue = -1, t.advance(), Jt;
  var i = !1;
  if (t.switchU && this.options.ecmaVersion >= 9 && ((i = e === 80) || e === 112)) {
    t.lastIntValue = -1, t.advance();
    var n;
    if (t.eat(
      123
      /* { */
    ) && (n = this.regexp_eatUnicodePropertyValueExpression(t)) && t.eat(
      125
      /* } */
    ))
      return i && n === Nt && t.raise("Invalid property name"), n;
    t.raise("Invalid property name");
  }
  return Is;
};
function oo(t) {
  return t === 100 || t === 68 || t === 115 || t === 83 || t === 119 || t === 87;
}
F.regexp_eatUnicodePropertyValueExpression = function(t) {
  var e = t.pos;
  if (this.regexp_eatUnicodePropertyName(t) && t.eat(
    61
    /* = */
  )) {
    var i = t.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(t)) {
      var n = t.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(t, i, n), Jt;
    }
  }
  if (t.pos = e, this.regexp_eatLoneUnicodePropertyNameOrValue(t)) {
    var a = t.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(t, a);
  }
  return Is;
};
F.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
  fe(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"), t.unicodeProperties.nonBinary[e].test(i) || t.raise("Invalid property value");
};
F.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
  if (t.unicodeProperties.binary.test(e))
    return Jt;
  if (t.switchV && t.unicodeProperties.binaryOfStrings.test(e))
    return Nt;
  t.raise("Invalid property name");
};
F.regexp_eatUnicodePropertyName = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; Ns(e = t.current()); )
    t.lastStringValue += Ht(e), t.advance();
  return t.lastStringValue !== "";
};
function Ns(t) {
  return Ps(t) || t === 95;
}
F.regexp_eatUnicodePropertyValue = function(t) {
  var e = 0;
  for (t.lastStringValue = ""; uo(e = t.current()); )
    t.lastStringValue += Ht(e), t.advance();
  return t.lastStringValue !== "";
};
function uo(t) {
  return Ns(t) || fi(t);
}
F.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
  return this.regexp_eatUnicodePropertyValue(t);
};
F.regexp_eatCharacterClass = function(t) {
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
    ) || t.raise("Unterminated character class"), e && i === Nt && t.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
F.regexp_classContents = function(t) {
  return t.current() === 93 ? Jt : t.switchV ? this.regexp_classSetExpression(t) : (this.regexp_nonEmptyClassRanges(t), Jt);
};
F.regexp_nonEmptyClassRanges = function(t) {
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
F.regexp_eatClassAtom = function(t) {
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
  var n = t.current();
  return n !== 93 ? (t.lastIntValue = n, t.advance(), !0) : !1;
};
F.regexp_eatClassEscape = function(t) {
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
F.regexp_classSetExpression = function(t) {
  var e = Jt, i;
  if (!this.regexp_eatClassSetRange(t)) if (i = this.regexp_eatClassSetOperand(t)) {
    i === Nt && (e = Nt);
    for (var n = t.pos; t.eatChars(
      [38, 38]
      /* && */
    ); ) {
      if (t.current() !== 38 && (i = this.regexp_eatClassSetOperand(t))) {
        i !== Nt && (e = Jt);
        continue;
      }
      t.raise("Invalid character in character class");
    }
    if (n !== t.pos)
      return e;
    for (; t.eatChars(
      [45, 45]
      /* -- */
    ); )
      this.regexp_eatClassSetOperand(t) || t.raise("Invalid character in character class");
    if (n !== t.pos)
      return e;
  } else
    t.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(t)) {
      if (i = this.regexp_eatClassSetOperand(t), !i)
        return e;
      i === Nt && (e = Nt);
    }
};
F.regexp_eatClassSetRange = function(t) {
  var e = t.pos;
  if (this.regexp_eatClassSetCharacter(t)) {
    var i = t.lastIntValue;
    if (t.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(t)) {
      var n = t.lastIntValue;
      return i !== -1 && n !== -1 && i > n && t.raise("Range out of order in character class"), !0;
    }
    t.pos = e;
  }
  return !1;
};
F.regexp_eatClassSetOperand = function(t) {
  return this.regexp_eatClassSetCharacter(t) ? Jt : this.regexp_eatClassStringDisjunction(t) || this.regexp_eatNestedClass(t);
};
F.regexp_eatNestedClass = function(t) {
  var e = t.pos;
  if (t.eat(
    91
    /* [ */
  )) {
    var i = t.eat(
      94
      /* ^ */
    ), n = this.regexp_classContents(t);
    if (t.eat(
      93
      /* ] */
    ))
      return i && n === Nt && t.raise("Negated character class may contain strings"), n;
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
F.regexp_eatClassStringDisjunction = function(t) {
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
F.regexp_classStringDisjunctionContents = function(t) {
  for (var e = this.regexp_classString(t); t.eat(
    124
    /* | */
  ); )
    this.regexp_classString(t) === Nt && (e = Nt);
  return e;
};
F.regexp_classString = function(t) {
  for (var e = 0; this.regexp_eatClassSetCharacter(t); )
    e++;
  return e === 1 ? Jt : Nt;
};
F.regexp_eatClassSetCharacter = function(t) {
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
  return i < 0 || i === t.lookahead() && lo(i) || ho(i) ? !1 : (t.advance(), t.lastIntValue = i, !0);
};
function lo(t) {
  return t === 33 || t >= 35 && t <= 38 || t >= 42 && t <= 44 || t === 46 || t >= 58 && t <= 64 || t === 94 || t === 96 || t === 126;
}
function ho(t) {
  return t === 40 || t === 41 || t === 45 || t === 47 || t >= 91 && t <= 93 || t >= 123 && t <= 125;
}
F.regexp_eatClassSetReservedPunctuator = function(t) {
  var e = t.current();
  return co(e) ? (t.lastIntValue = e, t.advance(), !0) : !1;
};
function co(t) {
  return t === 33 || t === 35 || t === 37 || t === 38 || t === 44 || t === 45 || t >= 58 && t <= 62 || t === 64 || t === 96 || t === 126;
}
F.regexp_eatClassControlLetter = function(t) {
  var e = t.current();
  return fi(e) || e === 95 ? (t.lastIntValue = e % 32, t.advance(), !0) : !1;
};
F.regexp_eatHexEscapeSequence = function(t) {
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
F.regexp_eatDecimalDigits = function(t) {
  var e = t.pos, i = 0;
  for (t.lastIntValue = 0; fi(i = t.current()); )
    t.lastIntValue = 10 * t.lastIntValue + (i - 48), t.advance();
  return t.pos !== e;
};
function fi(t) {
  return t >= 48 && t <= 57;
}
F.regexp_eatHexDigits = function(t) {
  var e = t.pos, i = 0;
  for (t.lastIntValue = 0; Ls(i = t.current()); )
    t.lastIntValue = 16 * t.lastIntValue + _s(i), t.advance();
  return t.pos !== e;
};
function Ls(t) {
  return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
}
function _s(t) {
  return t >= 65 && t <= 70 ? 10 + (t - 65) : t >= 97 && t <= 102 ? 10 + (t - 97) : t - 48;
}
F.regexp_eatLegacyOctalEscapeSequence = function(t) {
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
F.regexp_eatOctalDigit = function(t) {
  var e = t.current();
  return Bs(e) ? (t.lastIntValue = e - 48, t.advance(), !0) : (t.lastIntValue = 0, !1);
};
function Bs(t) {
  return t >= 48 && t <= 55;
}
F.regexp_eatFixedHexDigits = function(t, e) {
  var i = t.pos;
  t.lastIntValue = 0;
  for (var n = 0; n < e; ++n) {
    var a = t.current();
    if (!Ls(a))
      return t.pos = i, !1;
    t.lastIntValue = 16 * t.lastIntValue + _s(a), t.advance();
  }
  return !0;
};
var di = function(e) {
  this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new Ne(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
}, $ = ut.prototype;
$.next = function(t) {
  !t && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new di(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
$.getToken = function() {
  return this.next(), new di(this);
};
typeof Symbol < "u" && ($[Symbol.iterator] = function() {
  var t = this;
  return {
    next: function() {
      var e = t.getToken();
      return {
        done: e.type === d.eof,
        value: e
      };
    }
  };
});
$.nextToken = function() {
  var t = this.curContext();
  if ((!t || !t.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(d.eof);
  if (t.override)
    return t.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
$.readToken = function(t) {
  return Rt(t, this.options.ecmaVersion >= 6) || t === 92 ? this.readWord() : this.getTokenFromCode(t);
};
$.fullCharCodeAtPos = function() {
  var t = this.input.charCodeAt(this.pos);
  if (t <= 55295 || t >= 56320)
    return t;
  var e = this.input.charCodeAt(this.pos + 1);
  return e <= 56319 || e >= 57344 ? t : (t << 10) + e - 56613888;
};
$.skipBlockComment = function() {
  var t = this.options.onComment && this.curPosition(), e = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
    for (var n = void 0, a = e; (n = rs(this.input, a, this.pos)) > -1; )
      ++this.curLine, a = this.lineStart = n;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(e + 2, i),
    e,
    this.pos,
    t,
    this.curPosition()
  );
};
$.skipLineComment = function(t) {
  for (var e = this.pos, i = this.options.onComment && this.curPosition(), n = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !ne(n); )
    n = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(e + t, this.pos),
    e,
    this.pos,
    i,
    this.curPosition()
  );
};
$.skipSpace = function() {
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
        if (t > 8 && t < 14 || t >= 5760 && Wi.test(String.fromCharCode(t)))
          ++this.pos;
        else
          break t;
    }
  }
};
$.finishToken = function(t, e) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = t, this.value = e, this.updateContext(i);
};
$.readToken_dot = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t >= 48 && t <= 57)
    return this.readNumber(!0);
  var e = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && t === 46 && e === 46 ? (this.pos += 3, this.finishToken(d.ellipsis)) : (++this.pos, this.finishToken(d.dot));
};
$.readToken_slash = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : t === 61 ? this.finishOp(d.assign, 2) : this.finishOp(d.slash, 1);
};
$.readToken_mult_modulo_exp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), i = 1, n = t === 42 ? d.star : d.modulo;
  return this.options.ecmaVersion >= 7 && t === 42 && e === 42 && (++i, n = d.starstar, e = this.input.charCodeAt(this.pos + 2)), e === 61 ? this.finishOp(d.assign, i + 1) : this.finishOp(n, i);
};
$.readToken_pipe_amp = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e === t) {
    if (this.options.ecmaVersion >= 12) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i === 61)
        return this.finishOp(d.assign, 3);
    }
    return this.finishOp(t === 124 ? d.logicalOR : d.logicalAND, 2);
  }
  return e === 61 ? this.finishOp(d.assign, 2) : this.finishOp(t === 124 ? d.bitwiseOR : d.bitwiseAND, 1);
};
$.readToken_caret = function() {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(d.assign, 2) : this.finishOp(d.bitwiseXOR, 1);
};
$.readToken_plus_min = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === t ? e === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || xt.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(d.incDec, 2) : e === 61 ? this.finishOp(d.assign, 2) : this.finishOp(d.plusMin, 1);
};
$.readToken_lt_gt = function(t) {
  var e = this.input.charCodeAt(this.pos + 1), i = 1;
  return e === t ? (i = t === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(d.assign, i + 1) : this.finishOp(d.bitShift, i)) : e === 33 && t === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (e === 61 && (i = 2), this.finishOp(d.relational, i));
};
$.readToken_eq_excl = function(t) {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(d.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : t === 61 && e === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(d.arrow)) : this.finishOp(t === 61 ? d.eq : d.prefix, 1);
};
$.readToken_question = function() {
  var t = this.options.ecmaVersion;
  if (t >= 11) {
    var e = this.input.charCodeAt(this.pos + 1);
    if (e === 46) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i < 48 || i > 57)
        return this.finishOp(d.questionDot, 2);
    }
    if (e === 63) {
      if (t >= 12) {
        var n = this.input.charCodeAt(this.pos + 2);
        if (n === 61)
          return this.finishOp(d.assign, 3);
      }
      return this.finishOp(d.coalesce, 2);
    }
  }
  return this.finishOp(d.question, 1);
};
$.readToken_numberSign = function() {
  var t = this.options.ecmaVersion, e = 35;
  if (t >= 13 && (++this.pos, e = this.fullCharCodeAtPos(), Rt(e, !0) || e === 92))
    return this.finishToken(d.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + Ht(e) + "'");
};
$.getTokenFromCode = function(t) {
  switch (t) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      return this.readToken_dot();
    // Punctuation tokens.
    case 40:
      return ++this.pos, this.finishToken(d.parenL);
    case 41:
      return ++this.pos, this.finishToken(d.parenR);
    case 59:
      return ++this.pos, this.finishToken(d.semi);
    case 44:
      return ++this.pos, this.finishToken(d.comma);
    case 91:
      return ++this.pos, this.finishToken(d.bracketL);
    case 93:
      return ++this.pos, this.finishToken(d.bracketR);
    case 123:
      return ++this.pos, this.finishToken(d.braceL);
    case 125:
      return ++this.pos, this.finishToken(d.braceR);
    case 58:
      return ++this.pos, this.finishToken(d.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(d.backQuote);
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
      return this.finishOp(d.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + Ht(t) + "'");
};
$.finishOp = function(t, e) {
  var i = this.input.slice(this.pos, this.pos + e);
  return this.pos += e, this.finishToken(t, i);
};
$.readRegexp = function() {
  for (var t, e, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var n = this.input.charAt(this.pos);
    if (xt.test(n) && this.raise(i, "Unterminated regular expression"), t)
      t = !1;
    else {
      if (n === "[")
        e = !0;
      else if (n === "]" && e)
        e = !1;
      else if (n === "/" && !e)
        break;
      t = n === "\\";
    }
    ++this.pos;
  }
  var a = this.input.slice(i, this.pos);
  ++this.pos;
  var r = this.pos, u = this.readWord1();
  this.containsEsc && this.unexpected(r);
  var h = this.regexpState || (this.regexpState = new qt(this));
  h.reset(i, a, u), this.validateRegExpFlags(h), this.validateRegExpPattern(h);
  var f = null;
  try {
    f = new RegExp(a, u);
  } catch {
  }
  return this.finishToken(d.regexp, { pattern: a, flags: u, value: f });
};
$.readInt = function(t, e, i) {
  for (var n = this.options.ecmaVersion >= 12 && e === void 0, a = i && this.input.charCodeAt(this.pos) === 48, r = this.pos, u = 0, h = 0, f = 0, l = e ?? 1 / 0; f < l; ++f, ++this.pos) {
    var m = this.input.charCodeAt(this.pos), y = void 0;
    if (n && m === 95) {
      a && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), h === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), f === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), h = m;
      continue;
    }
    if (m >= 97 ? y = m - 97 + 10 : m >= 65 ? y = m - 65 + 10 : m >= 48 && m <= 57 ? y = m - 48 : y = 1 / 0, y >= t)
      break;
    h = m, u = u * t + y;
  }
  return n && h === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === r || e != null && this.pos - r !== e ? null : u;
};
function fo(t, e) {
  return e ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
}
function Fs(t) {
  return typeof BigInt != "function" ? null : BigInt(t.replace(/_/g, ""));
}
$.readRadixNumber = function(t) {
  var e = this.pos;
  this.pos += 2;
  var i = this.readInt(t);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + t), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = Fs(this.input.slice(e, this.pos)), ++this.pos) : Rt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(d.num, i);
};
$.readNumber = function(t) {
  var e = this.pos;
  !t && this.readInt(10, void 0, !0) === null && this.raise(e, "Invalid number");
  var i = this.pos - e >= 2 && this.input.charCodeAt(e) === 48;
  i && this.strict && this.raise(e, "Invalid number");
  var n = this.input.charCodeAt(this.pos);
  if (!i && !t && this.options.ecmaVersion >= 11 && n === 110) {
    var a = Fs(this.input.slice(e, this.pos));
    return ++this.pos, Rt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(d.num, a);
  }
  i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1), n === 46 && !i && (++this.pos, this.readInt(10), n = this.input.charCodeAt(this.pos)), (n === 69 || n === 101) && !i && (n = this.input.charCodeAt(++this.pos), (n === 43 || n === 45) && ++this.pos, this.readInt(10) === null && this.raise(e, "Invalid number")), Rt(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var r = fo(this.input.slice(e, this.pos), i);
  return this.finishToken(d.num, r);
};
$.readCodePoint = function() {
  var t = this.input.charCodeAt(this.pos), e;
  if (t === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else
    e = this.readHexChar(4);
  return e;
};
$.readString = function(t) {
  for (var e = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var n = this.input.charCodeAt(this.pos);
    if (n === t)
      break;
    n === 92 ? (e += this.input.slice(i, this.pos), e += this.readEscapedChar(!1), i = this.pos) : n === 8232 || n === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (ne(n) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return e += this.input.slice(i, this.pos++), this.finishToken(d.string, e);
};
var Os = {};
$.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (t) {
    if (t === Os)
      this.readInvalidTemplateToken();
    else
      throw t;
  }
  this.inTemplateElement = !1;
};
$.invalidStringToken = function(t, e) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Os;
  this.raise(t, e);
};
$.readTmplToken = function() {
  for (var t = "", e = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === d.template || this.type === d.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(d.dollarBraceL)) : (++this.pos, this.finishToken(d.backQuote)) : (t += this.input.slice(e, this.pos), this.finishToken(d.template, t));
    if (i === 92)
      t += this.input.slice(e, this.pos), t += this.readEscapedChar(!0), e = this.pos;
    else if (ne(i)) {
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
$.readInvalidTemplateToken = function() {
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
        return this.finishToken(d.invalidTemplate, this.input.slice(this.start, this.pos));
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
$.readEscapedChar = function(t) {
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
      return Ht(this.readCodePoint());
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
        var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], a = parseInt(n, 8);
        return a > 255 && (n = n.slice(0, -1), a = parseInt(n, 8)), this.pos += n.length - 1, e = this.input.charCodeAt(this.pos), (n !== "0" || e === 56 || e === 57) && (this.strict || t) && this.invalidStringToken(
          this.pos - 1 - n.length,
          t ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(a);
      }
      return ne(e) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(e);
  }
};
$.readHexChar = function(t) {
  var e = this.pos, i = this.readInt(16, t);
  return i === null && this.invalidStringToken(e, "Bad character escape sequence"), i;
};
$.readWord1 = function() {
  this.containsEsc = !1;
  for (var t = "", e = !0, i = this.pos, n = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var a = this.fullCharCodeAtPos();
    if (Ut(a, n))
      this.pos += a <= 65535 ? 1 : 2;
    else if (a === 92) {
      this.containsEsc = !0, t += this.input.slice(i, this.pos);
      var r = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var u = this.readCodePoint();
      (e ? Rt : Ut)(u, n) || this.invalidStringToken(r, "Invalid Unicode escape"), t += Ht(u), i = this.pos;
    } else
      break;
    e = !1;
  }
  return t + this.input.slice(i, this.pos);
};
$.readWord = function() {
  var t = this.readWord1(), e = d.name;
  return this.keywords.test(t) && (e = le[t]), this.finishToken(e, t);
};
var Vs = "8.15.0";
ut.acorn = {
  Parser: ut,
  version: Vs,
  defaultOptions: $e,
  Position: he,
  SourceLocation: Ne,
  getLineInfo: Ki,
  Node: _e,
  TokenType: z,
  tokTypes: d,
  keywordTypes: le,
  TokContext: bt,
  tokContexts: nt,
  isIdentifierChar: Ut,
  isIdentifierStart: Rt,
  Token: di,
  isNewLine: ne,
  lineBreak: xt,
  lineBreakG: as,
  nonASCIIwhitespace: Wi
};
function po(t, e) {
  return ut.parse(t, e);
}
function mo(t, e, i) {
  return ut.parseExpressionAt(t, e, i);
}
function go(t, e) {
  return ut.tokenizer(t, e);
}
const yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: _e,
  Parser: ut,
  Position: he,
  SourceLocation: Ne,
  TokContext: bt,
  Token: di,
  TokenType: z,
  defaultOptions: $e,
  getLineInfo: Ki,
  isIdentifierChar: Ut,
  isIdentifierStart: Rt,
  isNewLine: ne,
  keywordTypes: le,
  lineBreak: xt,
  lineBreakG: as,
  nonASCIIwhitespace: Wi,
  parse: po,
  parseExpressionAt: mo,
  tokContexts: nt,
  tokTypes: d,
  tokenizer: go,
  version: Vs
}, Symbol.toStringTag, { value: "Module" }));
function yn(t, e) {
  for (var i = 0; i < e.length; i++) {
    var n = e[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, typeof (a = (function(r, u) {
      if (typeof r != "object" || r === null) return r;
      var h = r[Symbol.toPrimitive];
      if (h !== void 0) {
        var f = h.call(r, "string");
        if (typeof f != "object") return f;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(r);
    })(n.key)) == "symbol" ? a : String(a), n);
  }
  var a;
}
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, ti.apply(this, arguments);
}
function Me(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Pi(t, e);
}
function Pi(t, e) {
  return Pi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Pi(t, e);
}
function bn(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
  return n;
}
function kn(t, e) {
  var i = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (i) return (i = i.call(t)).next.bind(i);
  if (Array.isArray(t) || (i = (function(a, r) {
    if (a) {
      if (typeof a == "string") return bn(a, r);
      var u = Object.prototype.toString.call(a).slice(8, -1);
      return u === "Object" && a.constructor && (u = a.constructor.name), u === "Map" || u === "Set" ? Array.from(a) : u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? bn(a, r) : void 0;
    }
  })(t)) || e) {
    i && (t = i);
    var n = 0;
    return function() {
      return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Et = !0;
function wt(t, e) {
  return e === void 0 && (e = {}), new z("name", e);
}
var bo = /* @__PURE__ */ new WeakMap();
function ko(t) {
  var e = bo.get(t.Parser.acorn || t);
  if (!e) {
    var i = { assert: wt(0, { startsExpr: Et }), asserts: wt(0, { startsExpr: Et }), global: wt(0, { startsExpr: Et }), keyof: wt(0, { startsExpr: Et }), readonly: wt(0, { startsExpr: Et }), unique: wt(0, { startsExpr: Et }), abstract: wt(0, { startsExpr: Et }), declare: wt(0, { startsExpr: Et }), enum: wt(0, { startsExpr: Et }), module: wt(0, { startsExpr: Et }), namespace: wt(0, { startsExpr: Et }), interface: wt(0, { startsExpr: Et }), type: wt(0, { startsExpr: Et }) }, n = { at: new z("@"), jsxName: new z("jsxName"), jsxText: new z("jsxText", { beforeExpr: !0 }), jsxTagStart: new z("jsxTagStart", { startsExpr: !0 }), jsxTagEnd: new z("jsxTagEnd") }, a = { tc_oTag: new bt("<tag", !1, !1), tc_cTag: new bt("</tag", !1, !1), tc_expr: new bt("<tag>...</tag>", !0, !0) }, r = new RegExp("^(?:" + Object.keys(i).join("|") + ")$");
    n.jsxTagStart.updateContext = function() {
      this.context.push(a.tc_expr), this.context.push(a.tc_oTag), this.exprAllowed = !1;
    }, n.jsxTagEnd.updateContext = function(u) {
      var h = this.context.pop();
      h === a.tc_oTag && u === d.slash || h === a.tc_cTag ? (this.context.pop(), this.exprAllowed = this.curContext() === a.tc_expr) : this.exprAllowed = !0;
    }, e = { tokTypes: ti({}, i, n), tokContexts: ti({}, a), keywordsRegExp: r, tokenIsLiteralPropertyName: function(u) {
      return [d.name, d.string, d.num].concat(Object.values(le), Object.values(i)).includes(u);
    }, tokenIsKeywordOrIdentifier: function(u) {
      return [d.name].concat(Object.values(le), Object.values(i)).includes(u);
    }, tokenIsIdentifier: function(u) {
      return [].concat(Object.values(i), [d.name]).includes(u);
    }, tokenIsTSDeclarationStart: function(u) {
      return [i.abstract, i.declare, i.enum, i.module, i.namespace, i.interface, i.type].includes(u);
    }, tokenIsTSTypeOperator: function(u) {
      return [i.keyof, i.readonly, i.unique].includes(u);
    }, tokenIsTemplate: function(u) {
      return u === d.invalidTemplate;
    } };
  }
  return e;
}
var be = 1024, xo = new RegExp("(?:[^\\S\\n\\r\\u2028\\u2029]|\\/\\/.*|\\/\\*.*?\\*\\/)*", "y"), xn = new RegExp("(?=(" + xo.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y"), ke = function() {
  this.shorthandAssign = void 0, this.trailingComma = void 0, this.parenthesizedAssign = void 0, this.parenthesizedBind = void 0, this.doubleProto = void 0, this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
function vo(t, e) {
  var i = e.key.name, n = t[i], a = "true";
  return e.type !== "MethodDefinition" || e.kind !== "get" && e.kind !== "set" || (a = (e.static ? "s" : "i") + e.kind), n === "iget" && a === "iset" || n === "iset" && a === "iget" || n === "sget" && a === "sset" || n === "sset" && a === "sget" ? (t[i] = "true", !1) : !!n || (t[i] = a, !1);
}
function vn(t, e) {
  var i = t.key;
  return !t.computed && (i.type === "Identifier" && i.name === e || i.type === "Literal" && i.value === e);
}
var R = { AbstractMethodHasImplementation: function(t) {
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
}, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." }, Ao = { quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, Co = /^[\da-fA-F]+$/, To = /^\d+$/;
function Ae(t) {
  return t && (t.type === "JSXIdentifier" ? t.name : t.type === "JSXNamespacedName" ? t.namespace.name + ":" + t.name.name : t.type === "JSXMemberExpression" ? Ae(t.object) + "." + Ae(t.property) : void 0);
}
var xi = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
function An(t) {
  if (!t) throw new Error("Assert fail");
}
function Eo(t) {
  return t === "accessor";
}
function wo(t) {
  return t === "in" || t === "out";
}
function vi(t, e) {
  return 2 | (t ? 4 : 0) | (e ? 8 : 0);
}
function So(t) {
  if (t.type !== "MemberExpression") return !1;
  var e = t.property;
  return (!t.computed || !(e.type !== "TemplateLiteral" || e.expressions.length > 0)) && Rs(t.object);
}
function Rs(t) {
  return t.type === "Identifier" || t.type === "MemberExpression" && !t.computed && Rs(t.object);
}
function Cn(t) {
  return t === "private" || t === "public" || t === "protected";
}
function Do(t) {
  var e = {}, i = e.dts, n = i !== void 0 && i, a = e.allowSatisfies, r = a !== void 0 && a;
  return function(u) {
    var h = u.acorn || yo, f = ko(h), l = h.tokTypes, m = h.keywordTypes, y = h.isIdentifierStart, A = h.lineBreak, N = h.isNewLine, _ = h.tokContexts, q = h.isIdentifierChar, E = f.tokTypes, B = f.tokContexts, ct = f.keywordsRegExp, P = f.tokenIsLiteralPropertyName, J = f.tokenIsTemplate, Gt = f.tokenIsTSDeclarationStart, Y = f.tokenIsIdentifier, gt = f.tokenIsKeywordOrIdentifier, Ms = f.tokenIsTSTypeOperator;
    function qs(I, At, yt) {
      yt === void 0 && (yt = I.length);
      for (var ht = At; ht < yt; ht++) {
        var Z = I.charCodeAt(ht);
        if (N(Z)) return ht < yt - 1 && Z === 13 && I.charCodeAt(ht + 1) === 10 ? ht + 2 : ht + 1;
      }
      return -1;
    }
    u = (function(I, At, yt) {
      var ht = yt.tokTypes, Z = At.tokTypes;
      return (function(g) {
        function s() {
          return g.apply(this, arguments) || this;
        }
        Me(s, g);
        var o = s.prototype;
        return o.takeDecorators = function(c) {
          var p = this.decoratorStack[this.decoratorStack.length - 1];
          p.length && (c.decorators = p, this.resetStartLocationFromNode(c, p[0]), this.decoratorStack[this.decoratorStack.length - 1] = []);
        }, o.parseDecorators = function(c) {
          for (var p = this.decoratorStack[this.decoratorStack.length - 1]; this.match(Z.at); ) {
            var b = this.parseDecorator();
            p.push(b);
          }
          this.match(ht._export) ? c || this.unexpected() : this.canHaveLeadingDecorator() || this.raise(this.start, "Leading decorators must be attached to a class declaration.");
        }, o.parseDecorator = function() {
          var c = this.startNode();
          this.next(), this.decoratorStack.push([]);
          var p, b = this.start, k = this.startLoc;
          if (this.match(ht.parenL)) {
            var x = this.start, v = this.startLoc;
            if (this.next(), p = this.parseExpression(), this.expect(ht.parenR), this.options.preserveParens) {
              var C = this.startNodeAt(x, v);
              C.expression = p, p = this.finishNode(C, "ParenthesizedExpression");
            }
          } else for (p = this.parseIdent(!1); this.eat(ht.dot); ) {
            var S = this.startNodeAt(b, k);
            S.object = p, S.property = this.parseIdent(!0), S.computed = !1, p = this.finishNode(S, "MemberExpression");
          }
          return c.expression = this.parseMaybeDecoratorArguments(p), this.decoratorStack.pop(), this.finishNode(c, "Decorator");
        }, o.parseMaybeDecoratorArguments = function(c) {
          if (this.eat(ht.parenL)) {
            var p = this.startNodeAtNode(c);
            return p.callee = c, p.arguments = this.parseExprList(ht.parenR, !1), this.finishNode(p, "CallExpression");
          }
          return c;
        }, s;
      })(I);
    })(u, f, h), u = (function(I, At, yt, ht) {
      var Z = I.tokTypes, g = At.tokTypes, s = I.isNewLine, o = I.isIdentifierChar, c = Object.assign({ allowNamespaces: !0, allowNamespacedObjects: !0 }, {});
      return (function(p) {
        function b() {
          return p.apply(this, arguments) || this;
        }
        Me(b, p);
        var k = b.prototype;
        return k.jsx_readToken = function() {
          for (var x = "", v = this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
            var C = this.input.charCodeAt(this.pos);
            switch (C) {
              case 60:
              case 123:
                return this.pos === this.start ? C === 60 && this.exprAllowed ? (++this.pos, this.finishToken(g.jsxTagStart)) : this.getTokenFromCode(C) : (x += this.input.slice(v, this.pos), this.finishToken(g.jsxText, x));
              case 38:
                x += this.input.slice(v, this.pos), x += this.jsx_readEntity(), v = this.pos;
                break;
              case 62:
              case 125:
                this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (C === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
              default:
                s(C) ? (x += this.input.slice(v, this.pos), x += this.jsx_readNewLine(!0), v = this.pos) : ++this.pos;
            }
          }
        }, k.jsx_readNewLine = function(x) {
          var v, C = this.input.charCodeAt(this.pos);
          return ++this.pos, C === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, v = x ? `
` : `\r
`) : v = String.fromCharCode(C), this.options.locations && (++this.curLine, this.lineStart = this.pos), v;
        }, k.jsx_readString = function(x) {
          for (var v = "", C = ++this.pos; ; ) {
            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
            var S = this.input.charCodeAt(this.pos);
            if (S === x) break;
            S === 38 ? (v += this.input.slice(C, this.pos), v += this.jsx_readEntity(), C = this.pos) : s(S) ? (v += this.input.slice(C, this.pos), v += this.jsx_readNewLine(!1), C = this.pos) : ++this.pos;
          }
          return v += this.input.slice(C, this.pos++), this.finishToken(Z.string, v);
        }, k.jsx_readEntity = function() {
          var x, v = "", C = 0, S = this.input[this.pos];
          S !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
          for (var M = ++this.pos; this.pos < this.input.length && C++ < 10; ) {
            if ((S = this.input[this.pos++]) === ";") {
              v[0] === "#" ? v[1] === "x" ? (v = v.substr(2), Co.test(v) && (x = String.fromCharCode(parseInt(v, 16)))) : (v = v.substr(1), To.test(v) && (x = String.fromCharCode(parseInt(v, 10)))) : x = Ao[v];
              break;
            }
            v += S;
          }
          return x || (this.pos = M, "&");
        }, k.jsx_readWord = function() {
          var x, v = this.pos;
          do
            x = this.input.charCodeAt(++this.pos);
          while (o(x) || x === 45);
          return this.finishToken(g.jsxName, this.input.slice(v, this.pos));
        }, k.jsx_parseIdentifier = function() {
          var x = this.startNode();
          return this.type === g.jsxName ? x.name = this.value : this.type.keyword ? x.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(x, "JSXIdentifier");
        }, k.jsx_parseNamespacedName = function() {
          var x = this.start, v = this.startLoc, C = this.jsx_parseIdentifier();
          if (!c.allowNamespaces || !this.eat(Z.colon)) return C;
          var S = this.startNodeAt(x, v);
          return S.namespace = C, S.name = this.jsx_parseIdentifier(), this.finishNode(S, "JSXNamespacedName");
        }, k.jsx_parseElementName = function() {
          if (this.type === g.jsxTagEnd) return "";
          var x = this.start, v = this.startLoc, C = this.jsx_parseNamespacedName();
          for (this.type !== Z.dot || C.type !== "JSXNamespacedName" || c.allowNamespacedObjects || this.unexpected(); this.eat(Z.dot); ) {
            var S = this.startNodeAt(x, v);
            S.object = C, S.property = this.jsx_parseIdentifier(), C = this.finishNode(S, "JSXMemberExpression");
          }
          return C;
        }, k.jsx_parseAttributeValue = function() {
          switch (this.type) {
            case Z.braceL:
              var x = this.jsx_parseExpressionContainer();
              return x.expression.type === "JSXEmptyExpression" && this.raise(x.start, "JSX attributes must only be assigned a non-empty expression"), x;
            case g.jsxTagStart:
            case Z.string:
              return this.parseExprAtom();
            default:
              this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
          }
        }, k.jsx_parseEmptyExpression = function() {
          var x = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
          return this.finishNodeAt(x, "JSXEmptyExpression", this.start, this.startLoc);
        }, k.jsx_parseExpressionContainer = function() {
          var x = this.startNode();
          return this.next(), x.expression = this.type === Z.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(Z.braceR), this.finishNode(x, "JSXExpressionContainer");
        }, k.jsx_parseAttribute = function() {
          var x = this.startNode();
          return this.eat(Z.braceL) ? (this.expect(Z.ellipsis), x.argument = this.parseMaybeAssign(), this.expect(Z.braceR), this.finishNode(x, "JSXSpreadAttribute")) : (x.name = this.jsx_parseNamespacedName(), x.value = this.eat(Z.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(x, "JSXAttribute"));
        }, k.jsx_parseOpeningElementAt = function(x, v) {
          var C = this.startNodeAt(x, v);
          C.attributes = [];
          var S = this.jsx_parseElementName();
          for (S && (C.name = S); this.type !== Z.slash && this.type !== g.jsxTagEnd; ) C.attributes.push(this.jsx_parseAttribute());
          return C.selfClosing = this.eat(Z.slash), this.expect(g.jsxTagEnd), this.finishNode(C, S ? "JSXOpeningElement" : "JSXOpeningFragment");
        }, k.jsx_parseClosingElementAt = function(x, v) {
          var C = this.startNodeAt(x, v), S = this.jsx_parseElementName();
          return S && (C.name = S), this.expect(g.jsxTagEnd), this.finishNode(C, S ? "JSXClosingElement" : "JSXClosingFragment");
        }, k.jsx_parseElementAt = function(x, v) {
          var C = this.startNodeAt(x, v), S = [], M = this.jsx_parseOpeningElementAt(x, v), U = null;
          if (!M.selfClosing) {
            t: for (; ; ) switch (this.type) {
              case g.jsxTagStart:
                if (x = this.start, v = this.startLoc, this.next(), this.eat(Z.slash)) {
                  U = this.jsx_parseClosingElementAt(x, v);
                  break t;
                }
                S.push(this.jsx_parseElementAt(x, v));
                break;
              case g.jsxText:
                S.push(this.parseExprAtom());
                break;
              case Z.braceL:
                S.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
            Ae(U.name) !== Ae(M.name) && this.raise(U.start, "Expected corresponding JSX closing tag for <" + Ae(M.name) + ">");
          }
          var O = M.name ? "Element" : "Fragment";
          return C["opening" + O] = M, C["closing" + O] = U, C.children = S, this.type === Z.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(C, "JSX" + O);
        }, k.jsx_parseText = function() {
          var x = this.parseLiteral(this.value);
          return x.type = "JSXText", x;
        }, k.jsx_parseElement = function() {
          var x = this.start, v = this.startLoc;
          return this.next(), this.jsx_parseElementAt(x, v);
        }, b;
      })(yt);
    })(h, f, u), u = (function(I, At, yt) {
      var ht = At.tokTypes, Z = yt.tokTypes;
      return (function(g) {
        function s() {
          return g.apply(this, arguments) || this;
        }
        Me(s, g);
        var o = s.prototype;
        return o.parseMaybeImportAttributes = function(c) {
          if (this.type === Z._with || this.type === ht.assert) {
            this.next();
            var p = this.parseImportAttributes();
            p && (c.attributes = p);
          }
        }, o.parseImportAttributes = function() {
          this.expect(Z.braceL);
          var c = this.parseWithEntries();
          return this.expect(Z.braceR), c;
        }, o.parseWithEntries = function() {
          var c = [], p = /* @__PURE__ */ new Set();
          do {
            if (this.type === Z.braceR) break;
            var b, k = this.startNode();
            b = this.type === Z.string ? this.parseLiteral(this.value) : this.parseIdent(!0), this.next(), k.key = b, p.has(k.key.name) && this.raise(this.pos, "Duplicated key in attributes"), p.add(k.key.name), this.type !== Z.string && this.raise(this.pos, "Only string is supported as an attribute value"), k.value = this.parseLiteral(this.value), c.push(this.finishNode(k, "ImportAttribute"));
          } while (this.eat(Z.comma));
          return c;
        }, s;
      })(I);
    })(u, f, h);
    var js = /* @__PURE__ */ (function(I) {
      function At(s, o, c) {
        var p;
        return (p = I.call(this, s, o, c) || this).preValue = null, p.preToken = null, p.isLookahead = !1, p.isAmbientContext = !1, p.inAbstractClass = !1, p.inType = !1, p.inDisallowConditionalTypesContext = !1, p.maybeInArrowParameters = !1, p.shouldParseArrowReturnType = void 0, p.shouldParseAsyncArrowReturnType = void 0, p.decoratorStack = [[]], p.importsStack = [[]], p.importOrExportOuterKind = void 0, p.tsParseConstModifier = p.tsParseModifiers.bind((function(b) {
          if (b === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return b;
        })(p), { allowedModifiers: ["const"], disallowedModifiers: ["in", "out"], errorTemplate: R.InvalidModifierOnTypeParameterPositions }), p;
      }
      Me(At, I);
      var yt, ht, Z, g = At.prototype;
      return g.getTokenFromCodeInType = function(s) {
        return s === 62 || s === 60 ? this.finishOp(l.relational, 1) : I.prototype.getTokenFromCode.call(this, s);
      }, g.readToken = function(s) {
        if (!this.inType) {
          var o = this.curContext();
          if (o === B.tc_expr) return this.jsx_readToken();
          if (o === B.tc_oTag || o === B.tc_cTag) {
            if (y(s)) return this.jsx_readWord();
            if (s == 62) return ++this.pos, this.finishToken(E.jsxTagEnd);
            if ((s === 34 || s === 39) && o == B.tc_oTag) return this.jsx_readString(s);
          }
          if (s === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) return ++this.pos, this.finishToken(E.jsxTagStart);
        }
        return I.prototype.readToken.call(this, s);
      }, g.getTokenFromCode = function(s) {
        return this.inType ? this.getTokenFromCodeInType(s) : s === 64 ? (++this.pos, this.finishToken(E.at)) : I.prototype.getTokenFromCode.call(this, s);
      }, g.isAbstractClass = function() {
        return this.ts_isContextual(E.abstract) && this.lookahead().type === l._class;
      }, g.finishNode = function(s, o) {
        return s.type !== "" && s.end !== 0 ? s : I.prototype.finishNode.call(this, s, o);
      }, g.tryParse = function(s, o) {
        o === void 0 && (o = this.cloneCurLookaheadState());
        var c = { node: null };
        try {
          return { node: s(function(b) {
            throw b === void 0 && (b = null), c.node = b, c;
          }), error: null, thrown: !1, aborted: !1, failState: null };
        } catch (b) {
          var p = this.getCurLookaheadState();
          if (this.setLookaheadState(o), b instanceof SyntaxError) return { node: null, error: b, thrown: !0, aborted: !1, failState: p };
          if (b === c) return { node: c.node, error: null, thrown: !1, aborted: !0, failState: p };
          throw b;
        }
      }, g.setOptionalParametersError = function(s, o) {
        var c;
        s.optionalParametersLoc = (c = o?.loc) != null ? c : this.startLoc;
      }, g.reScan_lt_gt = function() {
        this.type === l.relational && (this.pos -= 1, this.readToken_lt_gt(this.fullCharCodeAtPos()));
      }, g.reScan_lt = function() {
        var s = this.type;
        return s === l.bitShift ? (this.pos -= 2, this.finishOp(l.relational, 1), l.relational) : s;
      }, g.resetEndLocation = function(s, o) {
        o === void 0 && (o = this.lastTokEndLoc), s.end = o.column, s.loc.end = o, this.options.ranges && (s.range[1] = o.column);
      }, g.startNodeAtNode = function(s) {
        return I.prototype.startNodeAt.call(this, s.start, s.loc.start);
      }, g.nextTokenStart = function() {
        return this.nextTokenStartSince(this.pos);
      }, g.tsHasSomeModifiers = function(s, o) {
        return o.some(function(c) {
          return Cn(c) ? s.accessibility === c : !!s[c];
        });
      }, g.tsIsStartOfStaticBlocks = function() {
        return this.isContextual("static") && this.lookaheadCharCode() === 123;
      }, g.tsCheckForInvalidTypeCasts = function(s) {
        var o = this;
        s.forEach(function(c) {
          c?.type === "TSTypeCastExpression" && o.raise(c.typeAnnotation.start, R.UnexpectedTypeAnnotation);
        });
      }, g.atPossibleAsyncArrow = function(s) {
        return s.type === "Identifier" && s.name === "async" && this.lastTokEndLoc.column === s.end && !this.canInsertSemicolon() && s.end - s.start == 5 && s.start === this.potentialArrowAt;
      }, g.tsIsIdentifier = function() {
        return Y(this.type);
      }, g.tsTryParseTypeOrTypePredicateAnnotation = function() {
        return this.match(l.colon) ? this.tsParseTypeOrTypePredicateAnnotation(l.colon) : void 0;
      }, g.tsTryParseGenericAsyncArrowFunction = function(s, o, c) {
        var p = this;
        if (this.tsMatchLeftRelational()) {
          var b = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var k = this.tsTryParseAndCatch(function() {
            var x = p.startNodeAt(s, o);
            return x.typeParameters = p.tsParseTypeParameters(), I.prototype.parseFunctionParams.call(p, x), x.returnType = p.tsTryParseTypeOrTypePredicateAnnotation(), p.expect(l.arrow), x;
          });
          if (this.maybeInArrowParameters = b, k) return I.prototype.parseArrowExpression.call(this, k, null, !0, c);
        }
      }, g.tsParseTypeArgumentsInExpression = function() {
        if (this.reScan_lt() === l.relational) return this.tsParseTypeArguments();
      }, g.tsInNoContext = function(s) {
        var o = this.context;
        this.context = [o[0]];
        try {
          return s();
        } finally {
          this.context = o;
        }
      }, g.tsTryParseTypeAnnotation = function() {
        return this.match(l.colon) ? this.tsParseTypeAnnotation() : void 0;
      }, g.isUnparsedContextual = function(s, o) {
        var c = s + o.length;
        if (this.input.slice(s, c) === o) {
          var p = this.input.charCodeAt(c);
          return !(q(p) || (64512 & p) == 55296);
        }
        return !1;
      }, g.isAbstractConstructorSignature = function() {
        return this.ts_isContextual(E.abstract) && this.lookahead().type === l._new;
      }, g.nextTokenStartSince = function(s) {
        return xi.lastIndex = s, xi.test(this.input) ? xi.lastIndex : s;
      }, g.lookaheadCharCode = function() {
        return this.input.charCodeAt(this.nextTokenStart());
      }, g.compareLookaheadState = function(s, o) {
        for (var c = 0, p = Object.keys(s); c < p.length; c++) {
          var b = p[c];
          if (s[b] !== o[b]) return !1;
        }
        return !0;
      }, g.createLookaheadState = function() {
        this.value = null, this.context = [this.curContext()];
      }, g.getCurLookaheadState = function() {
        return { endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context, startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, g.cloneCurLookaheadState = function() {
        return { pos: this.pos, value: this.value, type: this.type, start: this.start, end: this.end, context: this.context && this.context.slice(), startLoc: this.startLoc, lastTokEndLoc: this.lastTokEndLoc, endLoc: this.endLoc, lastTokEnd: this.lastTokEnd, lastTokStart: this.lastTokStart, lastTokStartLoc: this.lastTokStartLoc, curLine: this.curLine, lineStart: this.lineStart, curPosition: this.curPosition, containsEsc: this.containsEsc };
      }, g.setLookaheadState = function(s) {
        this.pos = s.pos, this.value = s.value, this.endLoc = s.endLoc, this.lastTokEnd = s.lastTokEnd, this.lastTokStart = s.lastTokStart, this.lastTokStartLoc = s.lastTokStartLoc, this.type = s.type, this.start = s.start, this.end = s.end, this.context = s.context, this.startLoc = s.startLoc, this.lastTokEndLoc = s.lastTokEndLoc, this.curLine = s.curLine, this.lineStart = s.lineStart, this.curPosition = s.curPosition, this.containsEsc = s.containsEsc;
      }, g.tsLookAhead = function(s) {
        var o = this.getCurLookaheadState(), c = s();
        return this.setLookaheadState(o), c;
      }, g.lookahead = function(s) {
        var o = this.getCurLookaheadState();
        if (this.createLookaheadState(), this.isLookahead = !0, s !== void 0) for (var c = 0; c < s; c++) this.nextToken();
        else this.nextToken();
        this.isLookahead = !1;
        var p = this.getCurLookaheadState();
        return this.setLookaheadState(o), p;
      }, g.readWord = function() {
        var s = this.readWord1(), o = l.name;
        return this.keywords.test(s) ? o = m[s] : new RegExp(ct).test(s) && (o = E[s]), this.finishToken(o, s);
      }, g.skipBlockComment = function() {
        var s;
        this.isLookahead || (s = this.options.onComment && this.curPosition());
        var o = this.pos, c = this.input.indexOf("*/", this.pos += 2);
        if (c === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = c + 2, this.options.locations) for (var p, b = o; (p = qs(this.input, b, this.pos)) > -1; ) ++this.curLine, b = this.lineStart = p;
        this.isLookahead || this.options.onComment && this.options.onComment(!0, this.input.slice(o + 2, c), o, this.pos, s, this.curPosition());
      }, g.skipLineComment = function(s) {
        var o, c = this.pos;
        this.isLookahead || (o = this.options.onComment && this.curPosition());
        for (var p = this.input.charCodeAt(this.pos += s); this.pos < this.input.length && !N(p); ) p = this.input.charCodeAt(++this.pos);
        this.isLookahead || this.options.onComment && this.options.onComment(!1, this.input.slice(c + s, this.pos), c, this.pos, o, this.curPosition());
      }, g.finishToken = function(s, o) {
        this.preValue = this.value, this.preToken = this.type, this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
        var c = this.type;
        this.type = s, this.value = o, this.isLookahead || this.updateContext(c);
      }, g.resetStartLocation = function(s, o, c) {
        s.start = o, s.loc.start = c, this.options.ranges && (s.range[0] = o);
      }, g.isLineTerminator = function() {
        return this.eat(l.semi) || I.prototype.canInsertSemicolon.call(this);
      }, g.hasFollowingLineBreak = function() {
        return xn.lastIndex = this.end, xn.test(this.input);
      }, g.addExtra = function(s, o, c, p) {
        if (p === void 0 && (p = !0), s) {
          var b = s.extra = s.extra || {};
          p ? b[o] = c : Object.defineProperty(b, o, { enumerable: p, value: c });
        }
      }, g.isLiteralPropertyName = function() {
        return P(this.type);
      }, g.hasPrecedingLineBreak = function() {
        return A.test(this.input.slice(this.lastTokEndLoc.index, this.start));
      }, g.createIdentifier = function(s, o) {
        return s.name = o, this.finishNode(s, "Identifier");
      }, g.resetStartLocationFromNode = function(s, o) {
        this.resetStartLocation(s, o.start, o.loc.start);
      }, g.isThisParam = function(s) {
        return s.type === "Identifier" && s.name === "this";
      }, g.isLookaheadContextual = function(s) {
        var o = this.nextTokenStart();
        return this.isUnparsedContextual(o, s);
      }, g.ts_type_isContextual = function(s, o) {
        return s === o && !this.containsEsc;
      }, g.ts_isContextual = function(s) {
        return this.type === s && !this.containsEsc;
      }, g.ts_isContextualWithState = function(s, o) {
        return s.type === o && !s.containsEsc;
      }, g.isContextualWithState = function(s, o) {
        return o.type === l.name && o.value === s && !o.containsEsc;
      }, g.tsIsStartOfMappedType = function() {
        return this.next(), this.eat(l.plusMin) ? this.ts_isContextual(E.readonly) : (this.ts_isContextual(E.readonly) && this.next(), !!this.match(l.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(l._in))));
      }, g.tsInDisallowConditionalTypesContext = function(s) {
        var o = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !0;
        try {
          return s();
        } finally {
          this.inDisallowConditionalTypesContext = o;
        }
      }, g.tsTryParseType = function() {
        return this.tsEatThenParseType(l.colon);
      }, g.match = function(s) {
        return this.type === s;
      }, g.matchJsx = function(s) {
        return this.type === f.tokTypes[s];
      }, g.ts_eatWithState = function(s, o, c) {
        if (s === c.type) {
          for (var p = 0; p < o; p++) this.next();
          return !0;
        }
        return !1;
      }, g.ts_eatContextualWithState = function(s, o, c) {
        if (ct.test(s)) {
          if (this.ts_isContextualWithState(c, E[s])) {
            for (var p = 0; p < o; p++) this.next();
            return !0;
          }
          return !1;
        }
        if (!this.isContextualWithState(s, c)) return !1;
        for (var b = 0; b < o; b++) this.next();
        return !0;
      }, g.canHaveLeadingDecorator = function() {
        return this.match(l._class);
      }, g.eatContextual = function(s) {
        return ct.test(s) ? !!this.ts_isContextual(E[s]) && (this.next(), !0) : I.prototype.eatContextual.call(this, s);
      }, g.tsIsExternalModuleReference = function() {
        return this.isContextual("require") && this.lookaheadCharCode() === 40;
      }, g.tsParseExternalModuleReference = function() {
        var s = this.startNode();
        return this.expectContextual("require"), this.expect(l.parenL), this.match(l.string) || this.unexpected(), s.expression = this.parseExprAtom(), this.expect(l.parenR), this.finishNode(s, "TSExternalModuleReference");
      }, g.tsParseEntityName = function(s) {
        s === void 0 && (s = !0);
        for (var o = this.parseIdent(s); this.eat(l.dot); ) {
          var c = this.startNodeAtNode(o);
          c.left = o, c.right = this.parseIdent(s), o = this.finishNode(c, "TSQualifiedName");
        }
        return o;
      }, g.tsParseEnumMember = function() {
        var s = this.startNode();
        return s.id = this.match(l.string) ? this.parseLiteral(this.value) : this.parseIdent(!0), this.eat(l.eq) && (s.initializer = this.parseMaybeAssign()), this.finishNode(s, "TSEnumMember");
      }, g.tsParseEnumDeclaration = function(s, o) {
        return o === void 0 && (o = {}), o.const && (s.const = !0), o.declare && (s.declare = !0), this.expectContextual("enum"), s.id = this.parseIdent(), this.checkLValSimple(s.id), this.expect(l.braceL), s.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(l.braceR), this.finishNode(s, "TSEnumDeclaration");
      }, g.tsParseModuleBlock = function() {
        var s = this.startNode();
        for (I.prototype.enterScope.call(this, 512), this.expect(l.braceL), s.body = []; this.type !== l.braceR; ) {
          var o = this.parseStatement(null, !0);
          s.body.push(o);
        }
        return this.next(), I.prototype.exitScope.call(this), this.finishNode(s, "TSModuleBlock");
      }, g.tsParseAmbientExternalModuleDeclaration = function(s) {
        return this.ts_isContextual(E.global) ? (s.global = !0, s.id = this.parseIdent()) : this.match(l.string) ? s.id = this.parseLiteral(this.value) : this.unexpected(), this.match(l.braceL) ? (I.prototype.enterScope.call(this, be), s.body = this.tsParseModuleBlock(), I.prototype.exitScope.call(this)) : I.prototype.semicolon.call(this), this.finishNode(s, "TSModuleDeclaration");
      }, g.tsTryParseDeclare = function(s) {
        var o = this;
        if (!this.isLineTerminator()) {
          var c, p = this.type;
          return this.isContextual("let") && (p = l._var, c = "let"), this.tsInAmbientContext(function() {
            if (p === l._function) return s.declare = !0, o.parseFunctionStatement(s, !1, !0);
            if (p === l._class) return s.declare = !0, o.parseClass(s, !0);
            if (p === E.enum) return o.tsParseEnumDeclaration(s, { declare: !0 });
            if (p === E.global) return o.tsParseAmbientExternalModuleDeclaration(s);
            if (p === l._const || p === l._var) return o.match(l._const) && o.isLookaheadContextual("enum") ? (o.expect(l._const), o.tsParseEnumDeclaration(s, { const: !0, declare: !0 })) : (s.declare = !0, o.parseVarStatement(s, c || o.value, !0));
            if (p === E.interface) {
              var b = o.tsParseInterfaceDeclaration(s, { declare: !0 });
              if (b) return b;
            }
            return Y(p) ? o.tsParseDeclaration(s, o.value, !0) : void 0;
          });
        }
      }, g.tsIsListTerminator = function(s) {
        switch (s) {
          case "EnumMembers":
          case "TypeMembers":
            return this.match(l.braceR);
          case "HeritageClauseElement":
            return this.match(l.braceL);
          case "TupleElementTypes":
            return this.match(l.bracketR);
          case "TypeParametersOrArguments":
            return this.tsMatchRightRelational();
        }
      }, g.tsParseDelimitedListWorker = function(s, o, c, p) {
        for (var b = [], k = -1; !this.tsIsListTerminator(s); ) {
          k = -1;
          var x = o();
          if (x == null) return;
          if (b.push(x), !this.eat(l.comma)) {
            if (this.tsIsListTerminator(s)) break;
            return void (c && this.expect(l.comma));
          }
          k = this.lastTokStart;
        }
        return p && (p.value = k), b;
      }, g.tsParseDelimitedList = function(s, o, c) {
        return (function(p) {
          if (p == null) throw new Error("Unexpected " + p + " value.");
          return p;
        })(this.tsParseDelimitedListWorker(s, o, !0, c));
      }, g.tsParseBracketedList = function(s, o, c, p, b) {
        p || this.expect(c ? l.bracketL : l.relational);
        var k = this.tsParseDelimitedList(s, o, b);
        return this.expect(c ? l.bracketR : l.relational), k;
      }, g.tsParseTypeParameterName = function() {
        return this.parseIdent().name;
      }, g.tsEatThenParseType = function(s) {
        return this.match(s) ? this.tsNextThenParseType() : void 0;
      }, g.tsExpectThenParseType = function(s) {
        var o = this;
        return this.tsDoThenParseType(function() {
          return o.expect(s);
        });
      }, g.tsNextThenParseType = function() {
        var s = this;
        return this.tsDoThenParseType(function() {
          return s.next();
        });
      }, g.tsDoThenParseType = function(s) {
        var o = this;
        return this.tsInType(function() {
          return s(), o.tsParseType();
        });
      }, g.tsSkipParameterStart = function() {
        if (Y(this.type) || this.match(l._this)) return this.next(), !0;
        if (this.match(l.braceL)) try {
          return this.parseObj(!0), !0;
        } catch {
          return !1;
        }
        if (this.match(l.bracketL)) {
          this.next();
          try {
            return this.parseBindingList(l.bracketR, !0, !0), !0;
          } catch {
            return !1;
          }
        }
        return !1;
      }, g.tsIsUnambiguouslyStartOfFunctionType = function() {
        return this.next(), !!(this.match(l.parenR) || this.match(l.ellipsis) || this.tsSkipParameterStart() && (this.match(l.colon) || this.match(l.comma) || this.match(l.question) || this.match(l.eq) || this.match(l.parenR) && (this.next(), this.match(l.arrow))));
      }, g.tsIsStartOfFunctionType = function() {
        return !!this.tsMatchLeftRelational() || this.match(l.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }, g.tsInAllowConditionalTypesContext = function(s) {
        var o = this.inDisallowConditionalTypesContext;
        this.inDisallowConditionalTypesContext = !1;
        try {
          return s();
        } finally {
          this.inDisallowConditionalTypesContext = o;
        }
      }, g.tsParseBindingListForSignature = function() {
        var s = this;
        return I.prototype.parseBindingList.call(this, l.parenR, !0, !0).map(function(o) {
          return o.type !== "Identifier" && o.type !== "RestElement" && o.type !== "ObjectPattern" && o.type !== "ArrayPattern" && s.raise(o.start, R.UnsupportedSignatureParameterKind(o.type)), o;
        });
      }, g.tsParseTypePredicateAsserts = function() {
        if (this.type !== E.asserts) return !1;
        var s = this.containsEsc;
        return this.next(), !(!Y(this.type) && !this.match(l._this) || (s && this.raise(this.lastTokStart, "Escape sequence in keyword asserts"), 0));
      }, g.tsParseThisTypeNode = function() {
        var s = this.startNode();
        return this.next(), this.finishNode(s, "TSThisType");
      }, g.tsParseTypeAnnotation = function(s, o) {
        var c = this;
        return s === void 0 && (s = !0), o === void 0 && (o = this.startNode()), this.tsInType(function() {
          s && c.expect(l.colon), o.typeAnnotation = c.tsParseType();
        }), this.finishNode(o, "TSTypeAnnotation");
      }, g.tsParseThisTypePredicate = function(s) {
        this.next();
        var o = this.startNodeAtNode(s);
        return o.parameterName = s, o.typeAnnotation = this.tsParseTypeAnnotation(!1), o.asserts = !1, this.finishNode(o, "TSTypePredicate");
      }, g.tsParseThisTypeOrThisTypePredicate = function() {
        var s = this.tsParseThisTypeNode();
        return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(s) : s;
      }, g.tsParseTypePredicatePrefix = function() {
        var s = this.parseIdent();
        if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), s;
      }, g.tsParseTypeOrTypePredicateAnnotation = function(s) {
        var o = this;
        return this.tsInType(function() {
          var c = o.startNode();
          o.expect(s);
          var p = o.startNode(), b = !!o.tsTryParse(o.tsParseTypePredicateAsserts.bind(o));
          if (b && o.match(l._this)) {
            var k = o.tsParseThisTypeOrThisTypePredicate();
            return k.type === "TSThisType" ? (p.parameterName = k, p.asserts = !0, p.typeAnnotation = null, k = o.finishNode(p, "TSTypePredicate")) : (o.resetStartLocationFromNode(k, p), k.asserts = !0), c.typeAnnotation = k, o.finishNode(c, "TSTypeAnnotation");
          }
          var x = o.tsIsIdentifier() && o.tsTryParse(o.tsParseTypePredicatePrefix.bind(o));
          if (!x) return b ? (p.parameterName = o.parseIdent(), p.asserts = b, p.typeAnnotation = null, c.typeAnnotation = o.finishNode(p, "TSTypePredicate"), o.finishNode(c, "TSTypeAnnotation")) : o.tsParseTypeAnnotation(!1, c);
          var v = o.tsParseTypeAnnotation(!1);
          return p.parameterName = x, p.typeAnnotation = v, p.asserts = b, c.typeAnnotation = o.finishNode(p, "TSTypePredicate"), o.finishNode(c, "TSTypeAnnotation");
        });
      }, g.tsFillSignature = function(s, o) {
        var c = s === l.arrow;
        o.typeParameters = this.tsTryParseTypeParameters(), this.expect(l.parenL), o.parameters = this.tsParseBindingListForSignature(), (c || this.match(s)) && (o.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(s));
      }, g.tsTryNextParseConstantContext = function() {
        if (this.lookahead().type !== l._const) return null;
        this.next();
        var s = this.tsParseTypeReference();
        return s.typeParameters && this.raise(s.typeName.start, R.CannotFindName({ name: "const" })), s;
      }, g.tsParseFunctionOrConstructorType = function(s, o) {
        var c = this, p = this.startNode();
        return s === "TSConstructorType" && (p.abstract = !!o, o && this.next(), this.next()), this.tsInAllowConditionalTypesContext(function() {
          return c.tsFillSignature(l.arrow, p);
        }), this.finishNode(p, s);
      }, g.tsParseUnionOrIntersectionType = function(s, o, c) {
        var p = this.startNode(), b = this.eat(c), k = [];
        do
          k.push(o());
        while (this.eat(c));
        return k.length !== 1 || b ? (p.types = k, this.finishNode(p, s)) : k[0];
      }, g.tsCheckTypeAnnotationForReadOnly = function(s) {
        switch (s.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(s.start, R.UnexpectedReadonly);
        }
      }, g.tsParseTypeOperator = function() {
        var s = this.startNode(), o = this.value;
        return this.next(), s.operator = o, s.typeAnnotation = this.tsParseTypeOperatorOrHigher(), o === "readonly" && this.tsCheckTypeAnnotationForReadOnly(s), this.finishNode(s, "TSTypeOperator");
      }, g.tsParseConstraintForInferType = function() {
        var s = this;
        if (this.eat(l._extends)) {
          var o = this.tsInDisallowConditionalTypesContext(function() {
            return s.tsParseType();
          });
          if (this.inDisallowConditionalTypesContext || !this.match(l.question)) return o;
        }
      }, g.tsParseInferType = function() {
        var s = this, o = this.startNode();
        this.expectContextual("infer");
        var c = this.startNode();
        return c.name = this.tsParseTypeParameterName(), c.constraint = this.tsTryParse(function() {
          return s.tsParseConstraintForInferType();
        }), o.typeParameter = this.finishNode(c, "TSTypeParameter"), this.finishNode(o, "TSInferType");
      }, g.tsParseLiteralTypeNode = function() {
        var s = this, o = this.startNode();
        return o.literal = (function() {
          switch (s.type) {
            case l.num:
            case l.string:
            case l._true:
            case l._false:
              return s.parseExprAtom();
            default:
              s.unexpected();
          }
        })(), this.finishNode(o, "TSLiteralType");
      }, g.tsParseImportType = function() {
        var s = this.startNode();
        return this.expect(l._import), this.expect(l.parenL), this.match(l.string) || this.raise(this.start, R.UnsupportedImportTypeArgument), s.argument = this.parseExprAtom(), this.expect(l.parenR), this.eat(l.dot) && (s.qualifier = this.tsParseEntityName()), this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSImportType");
      }, g.tsParseTypeQuery = function() {
        var s = this.startNode();
        return this.expect(l._typeof), s.exprName = this.match(l._import) ? this.tsParseImportType() : this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSTypeQuery");
      }, g.tsParseMappedTypeParameter = function() {
        var s = this.startNode();
        return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsExpectThenParseType(l._in), this.finishNode(s, "TSTypeParameter");
      }, g.tsParseMappedType = function() {
        var s = this.startNode();
        return this.expect(l.braceL), this.match(l.plusMin) ? (s.readonly = this.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (s.readonly = !0), this.expect(l.bracketL), s.typeParameter = this.tsParseMappedTypeParameter(), s.nameType = this.eatContextual("as") ? this.tsParseType() : null, this.expect(l.bracketR), this.match(l.plusMin) ? (s.optional = this.value, this.next(), this.expect(l.question)) : this.eat(l.question) && (s.optional = !0), s.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(l.braceR), this.finishNode(s, "TSMappedType");
      }, g.tsParseTypeLiteral = function() {
        var s = this.startNode();
        return s.members = this.tsParseObjectTypeMembers(), this.finishNode(s, "TSTypeLiteral");
      }, g.tsParseTupleElementType = function() {
        var s = this.startLoc, o = this.start, c = this.eat(l.ellipsis), p = this.tsParseType(), b = this.eat(l.question);
        if (this.eat(l.colon)) {
          var k = this.startNodeAtNode(p);
          k.optional = b, p.type !== "TSTypeReference" || p.typeParameters || p.typeName.type !== "Identifier" ? (this.raise(p.start, R.InvalidTupleMemberLabel), k.label = p) : k.label = p.typeName, k.elementType = this.tsParseType(), p = this.finishNode(k, "TSNamedTupleMember");
        } else if (b) {
          var x = this.startNodeAtNode(p);
          x.typeAnnotation = p, p = this.finishNode(x, "TSOptionalType");
        }
        if (c) {
          var v = this.startNodeAt(o, s);
          v.typeAnnotation = p, p = this.finishNode(v, "TSRestType");
        }
        return p;
      }, g.tsParseTupleType = function() {
        var s = this, o = this.startNode();
        o.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
        var c = !1, p = null;
        return o.elementTypes.forEach(function(b) {
          var k = b.type;
          !c || k === "TSRestType" || k === "TSOptionalType" || k === "TSNamedTupleMember" && b.optional || s.raise(b.start, R.OptionalTypeBeforeRequired), c || (c = k === "TSNamedTupleMember" && b.optional || k === "TSOptionalType");
          var x = k;
          k === "TSRestType" && (x = (b = b.typeAnnotation).type);
          var v = x === "TSNamedTupleMember";
          p != null || (p = v), p !== v && s.raise(b.start, R.MixedLabeledAndUnlabeledElements);
        }), this.finishNode(o, "TSTupleType");
      }, g.tsParseTemplateLiteralType = function() {
        var s = this.startNode();
        return s.literal = this.parseTemplate({ isTagged: !1 }), this.finishNode(s, "TSLiteralType");
      }, g.tsParseTypeReference = function() {
        var s = this.startNode();
        return s.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.tsMatchLeftRelational() && (s.typeParameters = this.tsParseTypeArguments()), this.finishNode(s, "TSTypeReference");
      }, g.tsMatchLeftRelational = function() {
        return this.match(l.relational) && this.value === "<";
      }, g.tsMatchRightRelational = function() {
        return this.match(l.relational) && this.value === ">";
      }, g.tsParseParenthesizedType = function() {
        var s = this.startNode();
        return this.expect(l.parenL), s.typeAnnotation = this.tsParseType(), this.expect(l.parenR), this.finishNode(s, "TSParenthesizedType");
      }, g.tsParseNonArrayType = function() {
        switch (this.type) {
          case l.string:
          case l.num:
          case l._true:
          case l._false:
            return this.tsParseLiteralTypeNode();
          case l.plusMin:
            if (this.value === "-") {
              var s = this.startNode();
              return this.lookahead().type !== l.num && this.unexpected(), s.literal = this.parseMaybeUnary(), this.finishNode(s, "TSLiteralType");
            }
            break;
          case l._this:
            return this.tsParseThisTypeOrThisTypePredicate();
          case l._typeof:
            return this.tsParseTypeQuery();
          case l._import:
            return this.tsParseImportType();
          case l.braceL:
            return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
          case l.bracketL:
            return this.tsParseTupleType();
          case l.parenL:
            return this.tsParseParenthesizedType();
          case l.backQuote:
          case l.dollarBraceL:
            return this.tsParseTemplateLiteralType();
          default:
            var o = this.type;
            if (Y(o) || o === l._void || o === l._null) {
              var c = o === l._void ? "TSVoidKeyword" : o === l._null ? "TSNullKeyword" : (function(b) {
                switch (b) {
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
                var p = this.startNode();
                return this.next(), this.finishNode(p, c);
              }
              return this.tsParseTypeReference();
            }
        }
        this.unexpected();
      }, g.tsParseArrayTypeOrHigher = function() {
        for (var s = this.tsParseNonArrayType(); !this.hasPrecedingLineBreak() && this.eat(l.bracketL); ) if (this.match(l.bracketR)) {
          var o = this.startNodeAtNode(s);
          o.elementType = s, this.expect(l.bracketR), s = this.finishNode(o, "TSArrayType");
        } else {
          var c = this.startNodeAtNode(s);
          c.objectType = s, c.indexType = this.tsParseType(), this.expect(l.bracketR), s = this.finishNode(c, "TSIndexedAccessType");
        }
        return s;
      }, g.tsParseTypeOperatorOrHigher = function() {
        var s = this;
        return Ms(this.type) && !this.containsEsc ? this.tsParseTypeOperator() : this.isContextual("infer") ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseArrayTypeOrHigher();
        });
      }, g.tsParseIntersectionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), l.bitwiseAND);
      }, g.tsParseUnionTypeOrHigher = function() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), l.bitwiseOR);
      }, g.tsParseNonConditionalType = function() {
        return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(l._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
      }, g.tsParseType = function() {
        var s = this;
        An(this.inType);
        var o = this.tsParseNonConditionalType();
        if (this.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(l._extends)) return o;
        var c = this.startNodeAtNode(o);
        return c.checkType = o, c.extendsType = this.tsInDisallowConditionalTypesContext(function() {
          return s.tsParseNonConditionalType();
        }), this.expect(l.question), c.trueType = this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseType();
        }), this.expect(l.colon), c.falseType = this.tsInAllowConditionalTypesContext(function() {
          return s.tsParseType();
        }), this.finishNode(c, "TSConditionalType");
      }, g.tsIsUnambiguouslyIndexSignature = function() {
        return this.next(), !!Y(this.type) && (this.next(), this.match(l.colon));
      }, g.tsInType = function(s) {
        var o = this.inType;
        this.inType = !0;
        try {
          return s();
        } finally {
          this.inType = o;
        }
      }, g.tsTryParseIndexSignature = function(s) {
        if (this.match(l.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) {
          this.expect(l.bracketL);
          var o = this.parseIdent();
          o.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(o), this.expect(l.bracketR), s.parameters = [o];
          var c = this.tsTryParseTypeAnnotation();
          return c && (s.typeAnnotation = c), this.tsParseTypeMemberSemicolon(), this.finishNode(s, "TSIndexSignature");
        }
      }, g.tsParseNoneModifiers = function(s) {
        this.tsParseModifiers({ modified: s, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: R.InvalidModifierOnTypeParameterPositions });
      }, g.tsParseTypeParameter = function(s) {
        s === void 0 && (s = this.tsParseNoneModifiers.bind(this));
        var o = this.startNode();
        return s(o), o.name = this.tsParseTypeParameterName(), o.constraint = this.tsEatThenParseType(l._extends), o.default = this.tsEatThenParseType(l.eq), this.finishNode(o, "TSTypeParameter");
      }, g.tsParseTypeParameters = function(s) {
        var o = this.startNode();
        this.tsMatchLeftRelational() || this.matchJsx("jsxTagStart") ? this.next() : this.unexpected();
        var c = { value: -1 };
        return o.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, s), !1, !0, c), o.params.length === 0 && this.raise(this.start, R.EmptyTypeParameters), c.value !== -1 && this.addExtra(o, "trailingComma", c.value), this.finishNode(o, "TSTypeParameterDeclaration");
      }, g.tsTryParseTypeParameters = function(s) {
        if (this.tsMatchLeftRelational()) return this.tsParseTypeParameters(s);
      }, g.tsTryParse = function(s) {
        var o = this.getCurLookaheadState(), c = s();
        return c !== void 0 && c !== !1 ? c : void this.setLookaheadState(o);
      }, g.tsTokenCanFollowModifier = function() {
        return (this.match(l.bracketL) || this.match(l.braceL) || this.match(l.star) || this.match(l.ellipsis) || this.match(l.privateId) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
      }, g.tsNextTokenCanFollowModifier = function() {
        return this.next(!0), this.tsTokenCanFollowModifier();
      }, g.tsParseModifier = function(s, o) {
        if (Y(this.type) || this.type === l._in) {
          var c = this.value;
          if (s.indexOf(c) !== -1 && !this.containsEsc) {
            if (o && this.tsIsStartOfStaticBlocks()) return;
            if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return c;
          }
        }
      }, g.tsParseModifiersByMap = function(s) {
        for (var o = s.modified, c = s.map, p = 0, b = Object.keys(c); p < b.length; p++) {
          var k = b[p];
          o[k] = c[k];
        }
      }, g.tsParseModifiers = function(s) {
        for (var o = this, c = s.modified, p = s.allowedModifiers, b = s.disallowedModifiers, k = s.stopOnStartOfClassStaticBlock, x = s.errorTemplate, v = x === void 0 ? R.InvalidModifierOnTypeMember : x, C = {}, S = function(at, st, rt, ft) {
          st === rt && c[ft] && o.raise(at.column, R.InvalidModifiersOrder({ orderedModifiers: [rt, ft] }));
        }, M = function(at, st, rt, ft) {
          (c[rt] && st === ft || c[ft] && st === rt) && o.raise(at.column, R.IncompatibleModifiers({ modifiers: [rt, ft] }));
        }; ; ) {
          var U = this.startLoc, O = this.tsParseModifier(p.concat(b ?? []), k);
          if (!O) break;
          Cn(O) ? c.accessibility ? this.raise(this.start, R.DuplicateAccessibilityModifier()) : (S(U, O, O, "override"), S(U, O, O, "static"), S(U, O, O, "readonly"), S(U, O, O, "accessor"), C.accessibility = O, c.accessibility = O) : wo(O) ? c[O] ? this.raise(this.start, R.DuplicateModifier({ modifier: O })) : (S(U, O, "in", "out"), C[O] = O, c[O] = !0) : Eo(O) ? c[O] ? this.raise(this.start, R.DuplicateModifier({ modifier: O })) : (M(U, O, "accessor", "readonly"), M(U, O, "accessor", "static"), M(U, O, "accessor", "override"), C[O] = O, c[O] = !0) : Object.hasOwnProperty.call(c, O) ? this.raise(this.start, R.DuplicateModifier({ modifier: O })) : (S(U, O, "static", "readonly"), S(U, O, "static", "override"), S(U, O, "override", "readonly"), S(U, O, "abstract", "override"), M(U, O, "declare", "override"), M(U, O, "static", "abstract"), C[O] = O, c[O] = !0), b != null && b.includes(O) && this.raise(this.start, v);
        }
        return C;
      }, g.tsParseInOutModifiers = function(s) {
        this.tsParseModifiers({ modified: s, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: R.InvalidModifierOnTypeParameter });
      }, g.tsParseTypeArguments = function() {
        var s = this, o = this.startNode();
        return o.params = this.tsInType(function() {
          return s.tsInNoContext(function() {
            return s.expect(l.relational), s.tsParseDelimitedList("TypeParametersOrArguments", s.tsParseType.bind(s));
          });
        }), o.params.length === 0 && this.raise(this.start, R.EmptyTypeArguments), this.exprAllowed = !1, this.expect(l.relational), this.finishNode(o, "TSTypeParameterInstantiation");
      }, g.tsParseHeritageClause = function(s) {
        var o = this, c = this.start, p = this.tsParseDelimitedList("HeritageClauseElement", function() {
          var b = o.startNode();
          return b.expression = o.tsParseEntityName(), o.tsMatchLeftRelational() && (b.typeParameters = o.tsParseTypeArguments()), o.finishNode(b, "TSExpressionWithTypeArguments");
        });
        return p.length || this.raise(c, R.EmptyHeritageClauseType({ token: s })), p;
      }, g.tsParseTypeMemberSemicolon = function() {
        this.eat(l.comma) || this.isLineTerminator() || this.expect(l.semi);
      }, g.tsTryParseAndCatch = function(s) {
        var o = this.tryParse(function(c) {
          return s() || c();
        });
        if (!o.aborted && o.node) return o.error && this.setLookaheadState(o.failState), o.node;
      }, g.tsParseSignatureMember = function(s, o) {
        return this.tsFillSignature(l.colon, o), this.tsParseTypeMemberSemicolon(), this.finishNode(o, s);
      }, g.tsParsePropertyOrMethodSignature = function(s, o) {
        this.eat(l.question) && (s.optional = !0);
        var c = s;
        if (this.match(l.parenL) || this.tsMatchLeftRelational()) {
          o && this.raise(s.start, R.ReadonlyForMethodSignature);
          var p = c;
          p.kind && this.tsMatchLeftRelational() && this.raise(this.start, R.AccesorCannotHaveTypeParameters), this.tsFillSignature(l.colon, p), this.tsParseTypeMemberSemicolon();
          var b = "parameters", k = "typeAnnotation";
          if (p.kind === "get") p[b].length > 0 && (this.raise(this.start, "A 'get' accesor must not have any formal parameters."), this.isThisParam(p[b][0]) && this.raise(this.start, R.AccesorCannotDeclareThisParameter));
          else if (p.kind === "set") {
            if (p[b].length !== 1) this.raise(this.start, "A 'get' accesor must not have any formal parameters.");
            else {
              var x = p[b][0];
              this.isThisParam(x) && this.raise(this.start, R.AccesorCannotDeclareThisParameter), x.type === "Identifier" && x.optional && this.raise(this.start, R.SetAccesorCannotHaveOptionalParameter), x.type === "RestElement" && this.raise(this.start, R.SetAccesorCannotHaveRestParameter);
            }
            p[k] && this.raise(p[k].start, R.SetAccesorCannotHaveReturnType);
          } else p.kind = "method";
          return this.finishNode(p, "TSMethodSignature");
        }
        var v = c;
        o && (v.readonly = !0);
        var C = this.tsTryParseTypeAnnotation();
        return C && (v.typeAnnotation = C), this.tsParseTypeMemberSemicolon(), this.finishNode(v, "TSPropertySignature");
      }, g.tsParseTypeMember = function() {
        var s = this.startNode();
        if (this.match(l.parenL) || this.tsMatchLeftRelational()) return this.tsParseSignatureMember("TSCallSignatureDeclaration", s);
        if (this.match(l._new)) {
          var o = this.startNode();
          return this.next(), this.match(l.parenL) || this.tsMatchLeftRelational() ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", s) : (s.key = this.createIdentifier(o, "new"), this.tsParsePropertyOrMethodSignature(s, !1));
        }
        return this.tsParseModifiers({ modified: s, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] }), this.tsTryParseIndexSignature(s) || (this.parsePropertyName(s), s.computed || s.key.type !== "Identifier" || s.key.name !== "get" && s.key.name !== "set" || !this.tsTokenCanFollowModifier() || (s.kind = s.key.name, this.parsePropertyName(s)), this.tsParsePropertyOrMethodSignature(s, !!s.readonly));
      }, g.tsParseList = function(s, o) {
        for (var c = []; !this.tsIsListTerminator(s); ) c.push(o());
        return c;
      }, g.tsParseObjectTypeMembers = function() {
        this.expect(l.braceL);
        var s = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        return this.expect(l.braceR), s;
      }, g.tsParseInterfaceDeclaration = function(s, o) {
        if (o === void 0 && (o = {}), this.hasFollowingLineBreak()) return null;
        this.expectContextual("interface"), o.declare && (s.declare = !0), Y(this.type) ? (s.id = this.parseIdent(), this.checkLValSimple(s.id, 7)) : (s.id = null, this.raise(this.start, R.MissingInterfaceName)), s.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(l._extends) && (s.extends = this.tsParseHeritageClause("extends"));
        var c = this.startNode();
        return c.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), s.body = this.finishNode(c, "TSInterfaceBody"), this.finishNode(s, "TSInterfaceDeclaration");
      }, g.tsParseAbstractDeclaration = function(s) {
        if (this.match(l._class)) return s.abstract = !0, this.parseClass(s, !0);
        if (this.ts_isContextual(E.interface)) {
          if (!this.hasFollowingLineBreak()) return s.abstract = !0, this.tsParseInterfaceDeclaration(s);
        } else this.unexpected(s.start);
      }, g.tsIsDeclarationStart = function() {
        return Gt(this.type);
      }, g.tsParseExpressionStatement = function(s, o) {
        switch (o.name) {
          case "declare":
            var c = this.tsTryParseDeclare(s);
            if (c) return c.declare = !0, c;
            break;
          case "global":
            if (this.match(l.braceL)) {
              I.prototype.enterScope.call(this, be);
              var p = s;
              return p.global = !0, p.id = o, p.body = this.tsParseModuleBlock(), I.prototype.exitScope.call(this), this.finishNode(p, "TSModuleDeclaration");
            }
            break;
          default:
            return this.tsParseDeclaration(s, o.name, !1);
        }
      }, g.tsParseModuleReference = function() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
      }, g.tsIsExportDefaultSpecifier = function() {
        var s = this.type, o = this.isAsyncFunction(), c = this.isLet();
        if (Y(s)) {
          if (o && !this.containsEsc || c) return !1;
          if ((s === E.type || s === E.interface) && !this.containsEsc) {
            var p = this.lookahead();
            if (Y(p.type) && !this.isContextualWithState("from", p) || p.type === l.braceL) return !1;
          }
        } else if (!this.match(l._default)) return !1;
        var b = this.nextTokenStart(), k = this.isUnparsedContextual(b, "from");
        if (this.input.charCodeAt(b) === 44 || Y(this.type) && k) return !0;
        if (this.match(l._default) && k) {
          var x = this.input.charCodeAt(this.nextTokenStartSince(b + 4));
          return x === 34 || x === 39;
        }
        return !1;
      }, g.tsInAmbientContext = function(s) {
        var o = this.isAmbientContext;
        this.isAmbientContext = !0;
        try {
          return s();
        } finally {
          this.isAmbientContext = o;
        }
      }, g.tsCheckLineTerminator = function(s) {
        return s ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator();
      }, g.tsParseModuleOrNamespaceDeclaration = function(s, o) {
        if (o === void 0 && (o = !1), s.id = this.parseIdent(), o || this.checkLValSimple(s.id, 8), this.eat(l.dot)) {
          var c = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(c, !0), s.body = c;
        } else I.prototype.enterScope.call(this, be), s.body = this.tsParseModuleBlock(), I.prototype.exitScope.call(this);
        return this.finishNode(s, "TSModuleDeclaration");
      }, g.checkLValSimple = function(s, o, c) {
        return o === void 0 && (o = 0), I.prototype.checkLValSimple.call(this, s, o, c);
      }, g.tsParseTypeAliasDeclaration = function(s) {
        var o = this;
        return s.id = this.parseIdent(), this.checkLValSimple(s.id, 6), s.typeAnnotation = this.tsInType(function() {
          if (s.typeParameters = o.tsTryParseTypeParameters(o.tsParseInOutModifiers.bind(o)), o.expect(l.eq), o.ts_isContextual(E.interface) && o.lookahead().type !== l.dot) {
            var c = o.startNode();
            return o.next(), o.finishNode(c, "TSIntrinsicKeyword");
          }
          return o.tsParseType();
        }), this.semicolon(), this.finishNode(s, "TSTypeAliasDeclaration");
      }, g.tsParseDeclaration = function(s, o, c) {
        switch (o) {
          case "abstract":
            if (this.tsCheckLineTerminator(c) && (this.match(l._class) || Y(this.type))) return this.tsParseAbstractDeclaration(s);
            break;
          case "module":
            if (this.tsCheckLineTerminator(c)) {
              if (this.match(l.string)) return this.tsParseAmbientExternalModuleDeclaration(s);
              if (Y(this.type)) return this.tsParseModuleOrNamespaceDeclaration(s);
            }
            break;
          case "namespace":
            if (this.tsCheckLineTerminator(c) && Y(this.type)) return this.tsParseModuleOrNamespaceDeclaration(s);
            break;
          case "type":
            if (this.tsCheckLineTerminator(c) && Y(this.type)) return this.tsParseTypeAliasDeclaration(s);
        }
      }, g.tsTryParseExportDeclaration = function() {
        return this.tsParseDeclaration(this.startNode(), this.value, !0);
      }, g.tsParseImportEqualsDeclaration = function(s, o) {
        s.isExport = o || !1, s.id = this.parseIdent(), this.checkLValSimple(s.id, 2), I.prototype.expect.call(this, l.eq);
        var c = this.tsParseModuleReference();
        return s.importKind === "type" && c.type !== "TSExternalModuleReference" && this.raise(c.start, R.ImportAliasHasImportType), s.moduleReference = c, I.prototype.semicolon.call(this), this.finishNode(s, "TSImportEqualsDeclaration");
      }, g.isExportDefaultSpecifier = function() {
        if (this.tsIsDeclarationStart()) return !1;
        var s = this.type;
        if (Y(s)) {
          if (this.isContextual("async") || this.isContextual("let")) return !1;
          if ((s === E.type || s === E.interface) && !this.containsEsc) {
            var o = this.lookahead();
            if (Y(o.type) && !this.isContextualWithState("from", o) || o.type === l.braceL) return !1;
          }
        } else if (!this.match(l._default)) return !1;
        var c = this.nextTokenStart(), p = this.isUnparsedContextual(c, "from");
        if (this.input.charCodeAt(c) === 44 || Y(this.type) && p) return !0;
        if (this.match(l._default) && p) {
          var b = this.input.charCodeAt(this.nextTokenStartSince(c + 4));
          return b === 34 || b === 39;
        }
        return !1;
      }, g.parseTemplate = function(s) {
        var o = (s === void 0 ? {} : s).isTagged, c = o !== void 0 && o, p = this.startNode();
        this.next(), p.expressions = [];
        var b = this.parseTemplateElement({ isTagged: c });
        for (p.quasis = [b]; !b.tail; ) this.type === l.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(l.dollarBraceL), p.expressions.push(this.inType ? this.tsParseType() : this.parseExpression()), this.expect(l.braceR), p.quasis.push(b = this.parseTemplateElement({ isTagged: c }));
        return this.next(), this.finishNode(p, "TemplateLiteral");
      }, g.parseFunction = function(s, o, c, p, b) {
        this.initFunction(s), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !p) && (this.type === l.star && 2 & o && this.unexpected(), s.generator = this.eat(l.star)), this.options.ecmaVersion >= 8 && (s.async = !!p), 1 & o && (s.id = 4 & o && this.type !== l.name ? null : this.parseIdent());
        var k = this.yieldPos, x = this.awaitPos, v = this.awaitIdentPos, C = this.maybeInArrowParameters;
        this.maybeInArrowParameters = !1, this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(vi(s.async, s.generator)), 1 & o || (s.id = this.type === l.name ? this.parseIdent() : null), this.parseFunctionParams(s);
        var S = 1 & o;
        return this.parseFunctionBody(s, c, !1, b, { isFunctionDeclaration: S }), this.yieldPos = k, this.awaitPos = x, this.awaitIdentPos = v, 1 & o && s.id && !(2 & o) && this.checkLValSimple(s.id, s.body ? this.strict || s.generator || s.async ? this.treatFunctionsAsVar ? 1 : 2 : 3 : 0), this.maybeInArrowParameters = C, this.finishNode(s, S ? "FunctionDeclaration" : "FunctionExpression");
      }, g.parseFunctionBody = function(s, o, c, p, b) {
        o === void 0 && (o = !1), c === void 0 && (c = !1), p === void 0 && (p = !1), this.match(l.colon) && (s.returnType = this.tsParseTypeOrTypePredicateAnnotation(l.colon));
        var k = b != null && b.isFunctionDeclaration ? "TSDeclareFunction" : b != null && b.isClassMethod ? "TSDeclareMethod" : void 0;
        return k && !this.match(l.braceL) && this.isLineTerminator() ? this.finishNode(s, k) : k === "TSDeclareFunction" && this.isAmbientContext && (this.raise(s.start, R.DeclareFunctionHasImplementation), s.declare) ? (I.prototype.parseFunctionBody.call(this, s, o, c, !1), this.finishNode(s, k)) : (I.prototype.parseFunctionBody.call(this, s, o, c, p), s);
      }, g.parseNew = function() {
        var s;
        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        var o = this.startNode(), c = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(l.dot)) {
          o.meta = c;
          var p = this.containsEsc;
          return o.property = this.parseIdent(!0), o.property.name !== "target" && this.raiseRecoverable(o.property.start, "The only valid meta property for new is 'new.target'"), p && this.raiseRecoverable(o.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(o.start, "'new.target' can only be used in functions and class static block"), this.finishNode(o, "MetaProperty");
        }
        var b = this.start, k = this.startLoc, x = this.type === l._import;
        o.callee = this.parseSubscripts(this.parseExprAtom(), b, k, !0, !1), x && o.callee.type === "ImportExpression" && this.raise(b, "Cannot use new with import()");
        var v = o.callee;
        return v.type !== "TSInstantiationExpression" || (s = v.extra) != null && s.parenthesized || (o.typeParameters = v.typeParameters, o.callee = v.expression), o.arguments = this.eat(l.parenL) ? this.parseExprList(l.parenR, this.options.ecmaVersion >= 8, !1) : [], this.finishNode(o, "NewExpression");
      }, g.parseExprOp = function(s, o, c, p, b) {
        var k;
        if (l._in.binop > p && !this.hasPrecedingLineBreak() && (this.isContextual("as") && (k = "TSAsExpression"), r && this.isContextual("satisfies") && (k = "TSSatisfiesExpression"), k)) {
          var x = this.startNodeAt(o, c);
          x.expression = s;
          var v = this.tsTryNextParseConstantContext();
          return x.typeAnnotation = v || this.tsNextThenParseType(), this.finishNode(x, k), this.reScan_lt_gt(), this.parseExprOp(x, o, c, p, b);
        }
        return I.prototype.parseExprOp.call(this, s, o, c, p, b);
      }, g.parseImportSpecifiers = function() {
        var s = [], o = !0;
        if (f.tokenIsIdentifier(this.type) && (s.push(this.parseImportDefaultSpecifier()), !this.eat(l.comma))) return s;
        if (this.type === l.star) return s.push(this.parseImportNamespaceSpecifier()), s;
        for (this.expect(l.braceL); !this.eat(l.braceR); ) {
          if (o) o = !1;
          else if (this.expect(l.comma), this.afterTrailingComma(l.braceR)) break;
          s.push(this.parseImportSpecifier());
        }
        return s;
      }, g.parseImport = function(s) {
        var o = this.lookahead();
        if (s.importKind = "value", this.importOrExportOuterKind = "value", Y(o.type) || this.match(l.star) || this.match(l.braceL)) {
          var c = this.lookahead(2);
          if (c.type !== l.comma && !this.isContextualWithState("from", c) && c.type !== l.eq && this.ts_eatContextualWithState("type", 1, o) && (this.importOrExportOuterKind = "type", s.importKind = "type", o = this.lookahead(), c = this.lookahead(2)), Y(o.type) && c.type === l.eq) {
            this.next();
            var p = this.tsParseImportEqualsDeclaration(s);
            return this.importOrExportOuterKind = "value", p;
          }
        }
        return this.next(), this.type === l.string ? (s.specifiers = [], s.source = this.parseExprAtom()) : (s.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), s.source = this.type === l.string ? this.parseExprAtom() : this.unexpected()), this.parseMaybeImportAttributes(s), this.semicolon(), this.finishNode(s, "ImportDeclaration"), this.importOrExportOuterKind = "value", s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(s.start, R.TypeImportCannotSpecifyDefaultAndNamed), s;
      }, g.parseExportDefaultDeclaration = function() {
        if (this.isAbstractClass()) {
          var s = this.startNode();
          return this.next(), s.abstract = !0, this.parseClass(s, !0);
        }
        if (this.match(E.interface)) {
          var o = this.tsParseInterfaceDeclaration(this.startNode());
          if (o) return o;
        }
        return I.prototype.parseExportDefaultDeclaration.call(this);
      }, g.parseExportAllDeclaration = function(s, o) {
        return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (s.exported = this.parseModuleExportName(), this.checkExport(o, s.exported, this.lastTokStart)) : s.exported = null), this.expectContextual("from"), this.type !== l.string && this.unexpected(), s.source = this.parseExprAtom(), this.parseMaybeImportAttributes(s), this.semicolon(), this.finishNode(s, "ExportAllDeclaration");
      }, g.parseDynamicImport = function(s) {
        if (this.next(), s.source = this.parseMaybeAssign(), this.eat(l.comma)) {
          var o = this.parseExpression();
          s.arguments = [o];
        }
        if (!this.eat(l.parenR)) {
          var c = this.start;
          this.eat(l.comma) && this.eat(l.parenR) ? this.raiseRecoverable(c, "Trailing comma is not allowed in import()") : this.unexpected(c);
        }
        return this.finishNode(s, "ImportExpression");
      }, g.parseExport = function(s, o) {
        var c = this.lookahead();
        if (this.ts_eatWithState(l._import, 2, c)) {
          this.ts_isContextual(E.type) && this.lookaheadCharCode() !== 61 ? (s.importKind = "type", this.importOrExportOuterKind = "type", this.next()) : (s.importKind = "value", this.importOrExportOuterKind = "value");
          var p = this.tsParseImportEqualsDeclaration(s, !0);
          return this.importOrExportOuterKind = void 0, p;
        }
        if (this.ts_eatWithState(l.eq, 2, c)) {
          var b = s;
          return b.expression = this.parseExpression(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(b, "TSExportAssignment");
        }
        if (this.ts_eatContextualWithState("as", 2, c)) {
          var k = s;
          return this.expectContextual("namespace"), k.id = this.parseIdent(), this.semicolon(), this.importOrExportOuterKind = void 0, this.finishNode(k, "TSNamespaceExportDeclaration");
        }
        if (this.ts_isContextualWithState(c, E.type) && this.lookahead(2).type === l.braceL ? (this.next(), this.importOrExportOuterKind = "type", s.exportKind = "type") : (this.importOrExportOuterKind = "value", s.exportKind = "value"), this.next(), this.eat(l.star)) return this.parseExportAllDeclaration(s, o);
        if (this.eat(l._default)) return this.checkExport(o, "default", this.lastTokStart), s.declaration = this.parseExportDefaultDeclaration(), this.finishNode(s, "ExportDefaultDeclaration");
        if (this.shouldParseExportStatement()) s.declaration = this.parseExportDeclaration(s), s.declaration.type === "VariableDeclaration" ? this.checkVariableExport(o, s.declaration.declarations) : this.checkExport(o, s.declaration.id, s.declaration.id.start), s.specifiers = [], s.source = null;
        else {
          if (s.declaration = null, s.specifiers = this.parseExportSpecifiers(o), this.eatContextual("from")) this.type !== l.string && this.unexpected(), s.source = this.parseExprAtom(), this.parseMaybeImportAttributes(s);
          else {
            for (var x, v = kn(s.specifiers); !(x = v()).done; ) {
              var C = x.value;
              this.checkUnreserved(C.local), this.checkLocalExport(C.local), C.local.type === "Literal" && this.raise(C.local.start, "A string literal cannot be used as an exported binding without `from`.");
            }
            s.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(s, "ExportNamedDeclaration");
      }, g.checkExport = function(s, o, c) {
        s && (typeof o != "string" && (o = o.type === "Identifier" ? o.name : o.value), s[o] = !0);
      }, g.parseMaybeDefault = function(s, o, c) {
        var p = I.prototype.parseMaybeDefault.call(this, s, o, c);
        return p.type === "AssignmentPattern" && p.typeAnnotation && p.right.start < p.typeAnnotation.start && this.raise(p.typeAnnotation.start, R.TypeAnnotationAfterAssign), p;
      }, g.typeCastToParameter = function(s) {
        return s.expression.typeAnnotation = s.typeAnnotation, this.resetEndLocation(s.expression, s.typeAnnotation.end), s.expression;
      }, g.toAssignableList = function(s, o) {
        for (var c = 0; c < s.length; c++) {
          var p = s[c];
          p?.type === "TSTypeCastExpression" && (s[c] = this.typeCastToParameter(p));
        }
        return I.prototype.toAssignableList.call(this, s, o);
      }, g.reportReservedArrowTypeParam = function(s) {
      }, g.parseExprAtom = function(s, o, c) {
        if (this.type === E.jsxText) return this.jsx_parseText();
        if (this.type === E.jsxTagStart) return this.jsx_parseElement();
        if (this.type === E.at) return this.parseDecorators(), this.parseExprAtom();
        if (Y(this.type)) {
          var p = this.potentialArrowAt === this.start, b = this.start, k = this.startLoc, x = this.containsEsc, v = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !x && v.name === "async" && !this.canInsertSemicolon() && this.eat(l._function)) return this.overrideContext(_.f_expr), this.parseFunction(this.startNodeAt(b, k), 0, !1, !0, o);
          if (p && !this.canInsertSemicolon()) {
            if (this.eat(l.arrow)) return this.parseArrowExpression(this.startNodeAt(b, k), [v], !1, o);
            if (this.options.ecmaVersion >= 8 && v.name === "async" && this.type === l.name && !x && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return v = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(l.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(b, k), [v], !0, o);
          }
          return v;
        }
        return I.prototype.parseExprAtom.call(this, s, o, c);
      }, g.parseExprAtomDefault = function() {
        if (Y(this.type)) {
          var s = this.potentialArrowAt === this.start, o = this.containsEsc, c = this.parseIdent();
          if (!o && c.name === "async" && !this.canInsertSemicolon()) {
            var p = this.type;
            if (p === l._function) return this.next(), this.parseFunction(this.startNodeAtNode(c), void 0, !0, !0);
            if (Y(p)) {
              if (this.lookaheadCharCode() === 61) {
                var b = this.parseIdent(!1);
                return !this.canInsertSemicolon() && this.eat(l.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAtNode(c), [b], !0);
              }
              return c;
            }
          }
          return s && this.match(l.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(c), [c], !1)) : c;
        }
        this.unexpected();
      }, g.parseIdentNode = function() {
        var s = this.startNode();
        return gt(this.type) ? (s.name = this.value, s) : I.prototype.parseIdentNode.call(this);
      }, g.parseVarStatement = function(s, o, c) {
        c === void 0 && (c = !1);
        var p = this.isAmbientContext;
        this.next(), I.prototype.parseVar.call(this, s, !1, o, c || p), this.semicolon();
        var b = this.finishNode(s, "VariableDeclaration");
        if (!p) return b;
        for (var k, x = kn(b.declarations); !(k = x()).done; ) {
          var v = k.value, C = v.init;
          C && (o !== "const" || v.id.typeAnnotation ? this.raise(C.start, R.InitializerNotAllowedInAmbientContext) : C.type !== "StringLiteral" && C.type !== "BooleanLiteral" && C.type !== "NumericLiteral" && C.type !== "BigIntLiteral" && (C.type !== "TemplateLiteral" || C.expressions.length > 0) && !So(C) && this.raise(C.start, R.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference));
        }
        return b;
      }, g.parseStatement = function(s, o, c) {
        if (this.match(E.at) && this.parseDecorators(!0), this.match(l._const) && this.isLookaheadContextual("enum")) {
          var p = this.startNode();
          return this.expect(l._const), this.tsParseEnumDeclaration(p, { const: !0 });
        }
        if (this.ts_isContextual(E.enum)) return this.tsParseEnumDeclaration(this.startNode());
        if (this.ts_isContextual(E.interface)) {
          var b = this.tsParseInterfaceDeclaration(this.startNode());
          if (b) return b;
        }
        return I.prototype.parseStatement.call(this, s, o, c);
      }, g.parseAccessModifier = function() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }, g.parsePostMemberNameModifiers = function(s) {
        this.eat(l.question) && (s.optional = !0), s.readonly && this.match(l.parenL) && this.raise(s.start, R.ClassMethodHasReadonly), s.declare && this.match(l.parenL) && this.raise(s.start, R.ClassMethodHasDeclare);
      }, g.parseExpressionStatement = function(s, o) {
        return (o.type === "Identifier" ? this.tsParseExpressionStatement(s, o) : void 0) || I.prototype.parseExpressionStatement.call(this, s, o);
      }, g.shouldParseExportStatement = function() {
        return !!this.tsIsDeclarationStart() || !!this.match(E.at) || I.prototype.shouldParseExportStatement.call(this);
      }, g.parseConditional = function(s, o, c, p, b) {
        if (this.eat(l.question)) {
          var k = this.startNodeAt(o, c);
          return k.test = s, k.consequent = this.parseMaybeAssign(), this.expect(l.colon), k.alternate = this.parseMaybeAssign(p), this.finishNode(k, "ConditionalExpression");
        }
        return s;
      }, g.parseMaybeConditional = function(s, o) {
        var c = this, p = this.start, b = this.startLoc, k = this.parseExprOps(s, o);
        if (this.checkExpressionErrors(o)) return k;
        if (!this.maybeInArrowParameters || !this.match(l.question)) return this.parseConditional(k, p, b, s, o);
        var x = this.tryParse(function() {
          return c.parseConditional(k, p, b, s, o);
        });
        return x.node ? (x.error && this.setLookaheadState(x.failState), x.node) : (x.error && this.setOptionalParametersError(o, x.error), k);
      }, g.parseParenItem = function(s) {
        var o = this.start, c = this.startLoc;
        if (s = I.prototype.parseParenItem.call(this, s), this.eat(l.question) && (s.optional = !0, this.resetEndLocation(s)), this.match(l.colon)) {
          var p = this.startNodeAt(o, c);
          return p.expression = s, p.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(p, "TSTypeCastExpression");
        }
        return s;
      }, g.parseExportDeclaration = function(s) {
        var o = this;
        if (!this.isAmbientContext && this.ts_isContextual(E.declare)) return this.tsInAmbientContext(function() {
          return o.parseExportDeclaration(s);
        });
        var c = this.start, p = this.startLoc, b = this.eatContextual("declare");
        !b || !this.ts_isContextual(E.declare) && this.shouldParseExportStatement() || this.raise(this.start, R.ExpectedAmbientAfterExportDeclare);
        var k = Y(this.type) && this.tsTryParseExportDeclaration() || this.parseStatement(null);
        return k ? ((k.type === "TSInterfaceDeclaration" || k.type === "TSTypeAliasDeclaration" || b) && (s.exportKind = "type"), b && (this.resetStartLocation(k, c, p), k.declare = !0), k) : null;
      }, g.parseClassId = function(s, o) {
        if (o || !this.isContextual("implements")) {
          I.prototype.parseClassId.call(this, s, o);
          var c = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
          c && (s.typeParameters = c);
        }
      }, g.parseClassPropertyAnnotation = function(s) {
        s.optional || (this.value === "!" && this.eat(l.prefix) ? s.definite = !0 : this.eat(l.question) && (s.optional = !0));
        var o = this.tsTryParseTypeAnnotation();
        o && (s.typeAnnotation = o);
      }, g.parseClassField = function(s) {
        if (s.key.type === "PrivateIdentifier") s.abstract && this.raise(s.start, R.PrivateElementHasAbstract), s.accessibility && this.raise(s.start, R.PrivateElementHasAccessibility({ modifier: s.accessibility })), this.parseClassPropertyAnnotation(s);
        else if (this.parseClassPropertyAnnotation(s), this.isAmbientContext && (!s.readonly || s.typeAnnotation) && this.match(l.eq) && this.raise(this.start, R.DeclareClassFieldHasInitializer), s.abstract && this.match(l.eq)) {
          var o = s.key;
          this.raise(this.start, R.AbstractPropertyHasInitializer({ propertyName: o.type !== "Identifier" || s.computed ? "[" + this.input.slice(o.start, o.end) + "]" : o.name }));
        }
        return I.prototype.parseClassField.call(this, s);
      }, g.parseClassMethod = function(s, o, c, p) {
        var b = s.kind === "constructor", k = s.key.type === "PrivateIdentifier", x = this.tsTryParseTypeParameters();
        k ? (x && (s.typeParameters = x), s.accessibility && this.raise(s.start, R.PrivateMethodsHasAccessibility({ modifier: s.accessibility }))) : x && b && this.raise(x.start, R.ConstructorHasTypeParameters);
        var v = s.declare, C = s.kind;
        !(v !== void 0 && v) || C !== "get" && C !== "set" || this.raise(s.start, R.DeclareAccessor({ kind: C })), x && (s.typeParameters = x);
        var S = s.key;
        s.kind === "constructor" ? (o && this.raise(S.start, "Constructor can't be a generator"), c && this.raise(S.start, "Constructor can't be an async method")) : s.static && vn(s, "prototype") && this.raise(S.start, "Classes may not have a static property named prototype");
        var M = s.value = this.parseMethod(o, c, p, !0, s);
        return s.kind === "get" && M.params.length !== 0 && this.raiseRecoverable(M.start, "getter should have no params"), s.kind === "set" && M.params.length !== 1 && this.raiseRecoverable(M.start, "setter should have exactly one param"), s.kind === "set" && M.params[0].type === "RestElement" && this.raiseRecoverable(M.params[0].start, "Setter cannot use rest params"), this.finishNode(s, "MethodDefinition");
      }, g.isClassMethod = function() {
        return this.match(l.relational);
      }, g.parseClassElement = function(s) {
        var o = this;
        if (this.eat(l.semi)) return null;
        var c, p = this.options.ecmaVersion, b = this.startNode(), k = "", x = !1, v = !1, C = "method", S = ["declare", "private", "public", "protected", "accessor", "override", "abstract", "readonly", "static"], M = this.tsParseModifiers({ modified: b, allowedModifiers: S, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: !0, errorTemplate: R.InvalidModifierOnTypeParameterPositions });
        c = !!M.static;
        var U = function() {
          if (!o.tsIsStartOfStaticBlocks()) {
            var O = o.tsTryParseIndexSignature(b);
            if (O) return b.abstract && o.raise(b.start, R.IndexSignatureHasAbstract), b.accessibility && o.raise(b.start, R.IndexSignatureHasAccessibility({ modifier: b.accessibility })), b.declare && o.raise(b.start, R.IndexSignatureHasDeclare), b.override && o.raise(b.start, R.IndexSignatureHasOverride), O;
            if (!o.inAbstractClass && b.abstract && o.raise(b.start, R.NonAbstractClassHasAbstractMethod), b.override && s && o.raise(b.start, R.OverrideNotInSubClass), b.static = c, c && (o.isClassElementNameStart() || o.type === l.star || (k = "static")), !k && p >= 8 && o.eatContextual("async") && (!o.isClassElementNameStart() && o.type !== l.star || o.canInsertSemicolon() ? k = "async" : v = !0), !k && (p >= 9 || !v) && o.eat(l.star) && (x = !0), !k && !v && !x) {
              var at = o.value;
              (o.eatContextual("get") || o.eatContextual("set")) && (o.isClassElementNameStart() ? C = at : k = at);
            }
            if (k ? (b.computed = !1, b.key = o.startNodeAt(o.lastTokStart, o.lastTokStartLoc), b.key.name = k, o.finishNode(b.key, "Identifier")) : o.parseClassElementName(b), o.parsePostMemberNameModifiers(b), o.isClassMethod() || p < 13 || o.type === l.parenL || C !== "method" || x || v) {
              var st = !b.static && vn(b, "constructor"), rt = st && s;
              st && C !== "method" && o.raise(b.key.start, "Constructor can't have get/set modifier"), b.kind = st ? "constructor" : C, o.parseClassMethod(b, x, v, rt);
            } else o.parseClassField(b);
            return b;
          }
          if (o.next(), o.next(), o.tsHasSomeModifiers(b, S) && o.raise(o.start, R.StaticBlockCannotHaveModifier), p >= 13) return I.prototype.parseClassStaticBlock.call(o, b), b;
        };
        return b.declare ? this.tsInAmbientContext(U) : U(), b;
      }, g.isClassElementNameStart = function() {
        return !!this.tsIsIdentifier() || I.prototype.isClassElementNameStart.call(this);
      }, g.parseClassSuper = function(s) {
        I.prototype.parseClassSuper.call(this, s), s.superClass && (this.tsMatchLeftRelational() || this.match(l.bitShift)) && (s.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual("implements") && (s.implements = this.tsParseHeritageClause("implements"));
      }, g.parseFunctionParams = function(s) {
        var o = this.tsTryParseTypeParameters();
        o && (s.typeParameters = o), I.prototype.parseFunctionParams.call(this, s);
      }, g.parseVarId = function(s, o) {
        I.prototype.parseVarId.call(this, s, o), s.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.value === "!" && this.eat(l.prefix) && (s.definite = !0);
        var c = this.tsTryParseTypeAnnotation();
        c && (s.id.typeAnnotation = c, this.resetEndLocation(s.id));
      }, g.parseArrowExpression = function(s, o, c, p) {
        this.match(l.colon) && (s.returnType = this.tsParseTypeAnnotation());
        var b = this.yieldPos, k = this.awaitPos, x = this.awaitIdentPos;
        this.enterScope(16 | vi(c, !1)), this.initFunction(s);
        var v = this.maybeInArrowParameters;
        return this.options.ecmaVersion >= 8 && (s.async = !!c), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.maybeInArrowParameters = !0, s.params = this.toAssignableList(o, !0), this.maybeInArrowParameters = !1, this.parseFunctionBody(s, !0, !1, p), this.yieldPos = b, this.awaitPos = k, this.awaitIdentPos = x, this.maybeInArrowParameters = v, this.finishNode(s, "ArrowFunctionExpression");
      }, g.parseMaybeAssignOrigin = function(s, o, c) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) return this.parseYield(s);
          this.exprAllowed = !1;
        }
        var p = !1, b = -1, k = -1, x = -1;
        o ? (b = o.parenthesizedAssign, k = o.trailingComma, x = o.doubleProto, o.parenthesizedAssign = o.trailingComma = -1) : (o = new ke(), p = !0);
        var v = this.start, C = this.startLoc;
        (this.type === l.parenL || Y(this.type)) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = s === "await");
        var S = this.parseMaybeConditional(s, o);
        if (c && (S = c.call(this, S, v, C)), this.type.isAssign) {
          var M = this.startNodeAt(v, C);
          return M.operator = this.value, this.type === l.eq && (S = this.toAssignable(S, !0, o)), p || (o.parenthesizedAssign = o.trailingComma = o.doubleProto = -1), o.shorthandAssign >= S.start && (o.shorthandAssign = -1), this.type === l.eq ? this.checkLValPattern(S) : this.checkLValSimple(S), M.left = S, this.next(), M.right = this.parseMaybeAssign(s), x > -1 && (o.doubleProto = x), this.finishNode(M, "AssignmentExpression");
        }
        return p && this.checkExpressionErrors(o, !0), b > -1 && (o.parenthesizedAssign = b), k > -1 && (o.trailingComma = k), S;
      }, g.parseMaybeAssign = function(s, o, c) {
        var p, b, k, x, v, C, S, M, U, O, at, st = this;
        if (this.matchJsx("jsxTagStart") || this.tsMatchLeftRelational()) {
          if (M = this.cloneCurLookaheadState(), !(U = this.tryParse(function() {
            return st.parseMaybeAssignOrigin(s, o, c);
          }, M)).error) return U.node;
          var rt = this.context, ft = rt[rt.length - 1];
          ft === f.tokContexts.tc_oTag && rt[rt.length - 2] === f.tokContexts.tc_expr ? (rt.pop(), rt.pop()) : ft !== f.tokContexts.tc_oTag && ft !== f.tokContexts.tc_expr || rt.pop();
        }
        if (!((p = U) != null && p.error || this.tsMatchLeftRelational())) return this.parseMaybeAssignOrigin(s, o, c);
        M && !this.compareLookaheadState(M, this.getCurLookaheadState()) || (M = this.cloneCurLookaheadState());
        var Tt = this.tryParse(function(Wt) {
          var me, ge;
          at = st.tsParseTypeParameters();
          var Kt = st.parseMaybeAssignOrigin(s, o, c);
          return (Kt.type !== "ArrowFunctionExpression" || (me = Kt.extra) != null && me.parenthesized) && Wt(), ((ge = at) == null ? void 0 : ge.params.length) !== 0 && st.resetStartLocationFromNode(Kt, at), Kt.typeParameters = at, Kt;
        }, M);
        if (!Tt.error && !Tt.aborted) return at && this.reportReservedArrowTypeParam(at), Tt.node;
        if (!U && (An(!0), !(O = this.tryParse(function() {
          return st.parseMaybeAssignOrigin(s, o, c);
        }, M)).error)) return O.node;
        if ((b = U) != null && b.node) return this.setLookaheadState(U.failState), U.node;
        if (Tt.node) return this.setLookaheadState(Tt.failState), at && this.reportReservedArrowTypeParam(at), Tt.node;
        if ((k = O) != null && k.node) return this.setLookaheadState(O.failState), O.node;
        throw (x = U) != null && x.thrown ? U.error : Tt.thrown ? Tt.error : (v = O) != null && v.thrown ? O.error : ((C = U) == null ? void 0 : C.error) || Tt.error || ((S = O) == null ? void 0 : S.error);
      }, g.parseAssignableListItem = function(s) {
        for (var o = []; this.match(E.at); ) o.push(this.parseDecorator());
        var c, p = this.start, b = this.startLoc, k = !1, x = !1;
        if (s !== void 0) {
          var v = {};
          this.tsParseModifiers({ modified: v, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), c = v.accessibility, x = v.override, k = v.readonly, s === !1 && (c || k || x) && this.raise(b.start, R.UnexpectedParameterModifier);
        }
        var C = this.parseMaybeDefault(p, b);
        this.parseBindingListItem(C);
        var S = this.parseMaybeDefault(C.start, C.loc, C);
        if (o.length && (S.decorators = o), c || k || x) {
          var M = this.startNodeAt(p, b);
          return c && (M.accessibility = c), k && (M.readonly = k), x && (M.override = x), S.type !== "Identifier" && S.type !== "AssignmentPattern" && this.raise(M.start, R.UnsupportedParameterPropertyKind), M.parameter = S, this.finishNode(M, "TSParameterProperty");
        }
        return S;
      }, g.checkLValInnerPattern = function(s, o, c) {
        o === void 0 && (o = 0), s.type === "TSParameterProperty" ? this.checkLValInnerPattern(s.parameter, o, c) : I.prototype.checkLValInnerPattern.call(this, s, o, c);
      }, g.parseBindingListItem = function(s) {
        this.eat(l.question) && (s.type === "Identifier" || this.isAmbientContext || this.inType || this.raise(s.start, R.PatternIsOptional), s.optional = !0);
        var o = this.tsTryParseTypeAnnotation();
        return o && (s.typeAnnotation = o), this.resetEndLocation(s), s;
      }, g.isAssignable = function(s, o) {
        var c = this;
        switch (s.type) {
          case "TSTypeCastExpression":
            return this.isAssignable(s.expression, o);
          case "TSParameterProperty":
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
            return !0;
          case "ObjectExpression":
            var p = s.properties.length - 1;
            return s.properties.every(function(b, k) {
              return b.type !== "ObjectMethod" && (k === p || b.type !== "SpreadElement") && c.isAssignable(b);
            });
          case "Property":
          case "ObjectProperty":
            return this.isAssignable(s.value);
          case "SpreadElement":
            return this.isAssignable(s.argument);
          case "ArrayExpression":
            return s.elements.every(function(b) {
              return b === null || c.isAssignable(b);
            });
          case "AssignmentExpression":
            return s.operator === "=";
          case "ParenthesizedExpression":
            return this.isAssignable(s.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !o;
          default:
            return !1;
        }
      }, g.toAssignable = function(s, o, c) {
        switch (o === void 0 && (o = !1), c === void 0 && (c = new ke()), s.type) {
          case "ParenthesizedExpression":
            return this.toAssignableParenthesizedExpression(s, o, c);
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            return o || this.raise(s.start, R.UnexpectedTypeCastInParameter), this.toAssignable(s.expression, o, c);
          case "MemberExpression":
            break;
          case "AssignmentExpression":
            return o || s.left.type !== "TSTypeCastExpression" || (s.left = this.typeCastToParameter(s.left)), I.prototype.toAssignable.call(this, s, o, c);
          case "TSTypeCastExpression":
            return this.typeCastToParameter(s);
          default:
            return I.prototype.toAssignable.call(this, s, o, c);
        }
        return s;
      }, g.toAssignableParenthesizedExpression = function(s, o, c) {
        switch (s.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            return this.toAssignable(s.expression, o, c);
          default:
            return I.prototype.toAssignable.call(this, s, o, c);
        }
      }, g.curPosition = function() {
        if (this.options.locations) {
          var s = I.prototype.curPosition.call(this);
          return Object.defineProperty(s, "offset", { get: function() {
            return function(o) {
              var c = new h.Position(this.line, this.column + o);
              return c.index = this.index + o, c;
            };
          } }), s.index = this.pos, s;
        }
      }, g.parseBindingAtom = function() {
        return this.type === l._this ? this.parseIdent(!0) : I.prototype.parseBindingAtom.call(this);
      }, g.shouldParseArrow = function(s) {
        var o, c = this;
        if (o = this.match(l.colon) ? s.every(function(b) {
          return c.isAssignable(b, !0);
        }) : !this.canInsertSemicolon()) {
          if (this.match(l.colon)) {
            var p = this.tryParse(function(b) {
              var k = c.tsParseTypeOrTypePredicateAnnotation(l.colon);
              return !c.canInsertSemicolon() && c.match(l.arrow) || b(), k;
            });
            if (p.aborted) return this.shouldParseArrowReturnType = void 0, !1;
            p.thrown || (p.error && this.setLookaheadState(p.failState), this.shouldParseArrowReturnType = p.node);
          }
          return !!this.match(l.arrow) || (this.shouldParseArrowReturnType = void 0, !1);
        }
        return this.shouldParseArrowReturnType = void 0, o;
      }, g.parseParenArrowList = function(s, o, c, p) {
        var b = this.startNodeAt(s, o);
        return b.returnType = this.shouldParseArrowReturnType, this.shouldParseArrowReturnType = void 0, this.parseArrowExpression(b, c, !1, p);
      }, g.parseParenAndDistinguishExpression = function(s, o) {
        var c, p = this.start, b = this.startLoc, k = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          var x = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0, this.next();
          var v, C = this.start, S = this.startLoc, M = [], U = !0, O = !1, at = new ke(), st = this.yieldPos, rt = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== l.parenR; ) {
            if (U ? U = !1 : this.expect(l.comma), k && this.afterTrailingComma(l.parenR, !0)) {
              O = !0;
              break;
            }
            if (this.type === l.ellipsis) {
              v = this.start, M.push(this.parseParenItem(this.parseRestBinding())), this.type === l.comma && this.raise(this.start, "Comma is not permitted after the rest element");
              break;
            }
            M.push(this.parseMaybeAssign(o, at, this.parseParenItem));
          }
          var ft = this.lastTokEnd, Tt = this.lastTokEndLoc;
          if (this.expect(l.parenR), this.maybeInArrowParameters = x, s && this.shouldParseArrow(M) && this.eat(l.arrow)) return this.checkPatternErrors(at, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = st, this.awaitPos = rt, this.parseParenArrowList(p, b, M, o);
          M.length && !O || this.unexpected(this.lastTokStart), v && this.unexpected(v), this.checkExpressionErrors(at, !0), this.yieldPos = st || this.yieldPos, this.awaitPos = rt || this.awaitPos, M.length > 1 ? ((c = this.startNodeAt(C, S)).expressions = M, this.finishNodeAt(c, "SequenceExpression", ft, Tt)) : c = M[0];
        } else c = this.parseParenExpression();
        if (this.options.preserveParens) {
          var Wt = this.startNodeAt(p, b);
          return Wt.expression = c, this.finishNode(Wt, "ParenthesizedExpression");
        }
        return c;
      }, g.parseTaggedTemplateExpression = function(s, o, c, p) {
        var b = this.startNodeAt(o, c);
        return b.tag = s, b.quasi = this.parseTemplate({ isTagged: !0 }), p && this.raise(o, "Tagged Template Literals are not allowed in optionalChain."), this.finishNode(b, "TaggedTemplateExpression");
      }, g.shouldParseAsyncArrow = function() {
        var s = this;
        if (!this.match(l.colon)) return !this.canInsertSemicolon() && this.eat(l.arrow);
        var o = this.tryParse(function(c) {
          var p = s.tsParseTypeOrTypePredicateAnnotation(l.colon);
          return !s.canInsertSemicolon() && s.match(l.arrow) || c(), p;
        });
        return o.aborted ? (this.shouldParseAsyncArrowReturnType = void 0, !1) : o.thrown ? void 0 : (o.error && this.setLookaheadState(o.failState), this.shouldParseAsyncArrowReturnType = o.node, !this.canInsertSemicolon() && this.eat(l.arrow));
      }, g.parseSubscriptAsyncArrow = function(s, o, c, p) {
        var b = this.startNodeAt(s, o);
        return b.returnType = this.shouldParseAsyncArrowReturnType, this.shouldParseAsyncArrowReturnType = void 0, this.parseArrowExpression(b, c, !0, p);
      }, g.parseExprList = function(s, o, c, p) {
        for (var b = [], k = !0; !this.eat(s); ) {
          if (k) k = !1;
          else if (this.expect(l.comma), o && this.afterTrailingComma(s)) break;
          var x = void 0;
          c && this.type === l.comma ? x = null : this.type === l.ellipsis ? (x = this.parseSpread(p), p && this.type === l.comma && p.trailingComma < 0 && (p.trailingComma = this.start)) : x = this.parseMaybeAssign(!1, p, this.parseParenItem), b.push(x);
        }
        return b;
      }, g.parseSubscript = function(s, o, c, p, b, k, x) {
        var v = this, C = k;
        if (!this.hasPrecedingLineBreak() && this.value === "!" && this.match(l.prefix)) {
          this.exprAllowed = !1, this.next();
          var S = this.startNodeAt(o, c);
          return S.expression = s, s = this.finishNode(S, "TSNonNullExpression");
        }
        var M = !1;
        if (this.match(l.questionDot) && this.lookaheadCharCode() === 60) {
          if (p) return s;
          s.optional = !0, C = M = !0, this.next();
        }
        if (this.tsMatchLeftRelational() || this.match(l.bitShift)) {
          var U, O = this.tsTryParseAndCatch(function() {
            if (!p && v.atPossibleAsyncArrow(s)) {
              var tn = v.tsTryParseGenericAsyncArrowFunction(o, c, x);
              if (tn) return s = tn;
            }
            var Oe = v.tsParseTypeArgumentsInExpression();
            if (!Oe) return s;
            if (M && !v.match(l.parenL)) return U = v.curPosition(), s;
            if (J(v.type) || v.type === l.backQuote) {
              var en = v.parseTaggedTemplateExpression(s, o, c, C);
              return en.typeParameters = Oe, en;
            }
            if (!p && v.eat(l.parenL)) {
              var nn = new ke(), ae = v.startNodeAt(o, c);
              return ae.callee = s, ae.arguments = v.parseExprList(l.parenR, v.options.ecmaVersion >= 8, !1, nn), v.tsCheckForInvalidTypeCasts(ae.arguments), ae.typeParameters = Oe, C && (ae.optional = M), v.checkExpressionErrors(nn, !0), s = v.finishNode(ae, "CallExpression");
            }
            var mi = v.type;
            if (!(v.tsMatchRightRelational() || mi === l.bitShift || mi !== l.parenL && (sn = mi, !!sn.startsExpr) && !v.hasPrecedingLineBreak())) {
              var sn, gi = v.startNodeAt(o, c);
              return gi.expression = s, gi.typeParameters = Oe, v.finishNode(gi, "TSInstantiationExpression");
            }
          });
          if (U && this.unexpected(U), O) return O.type === "TSInstantiationExpression" && (this.match(l.dot) || this.match(l.questionDot) && this.lookaheadCharCode() !== 40) && this.raise(this.start, R.InvalidPropertyAccessAfterInstantiationExpression), s = O;
        }
        var at = this.options.ecmaVersion >= 11, st = at && this.eat(l.questionDot);
        p && st && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        var rt = this.eat(l.bracketL);
        if (rt || st && this.type !== l.parenL && this.type !== l.backQuote || this.eat(l.dot)) {
          var ft = this.startNodeAt(o, c);
          ft.object = s, rt ? (ft.property = this.parseExpression(), this.expect(l.bracketR)) : ft.property = this.type === l.privateId && s.type !== "Super" ? this.parsePrivateIdent() : this.parseIdent(this.options.allowReserved !== "never"), ft.computed = !!rt, at && (ft.optional = st), s = this.finishNode(ft, "MemberExpression");
        } else if (!p && this.eat(l.parenL)) {
          var Tt = this.maybeInArrowParameters;
          this.maybeInArrowParameters = !0;
          var Wt = new ke(), me = this.yieldPos, ge = this.awaitPos, Kt = this.awaitIdentPos;
          this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
          var Gi = this.parseExprList(l.parenR, this.options.ecmaVersion >= 8, !1, Wt);
          if (b && !st && this.shouldParseAsyncArrow()) this.checkPatternErrors(Wt, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = me, this.awaitPos = ge, this.awaitIdentPos = Kt, s = this.parseSubscriptAsyncArrow(o, c, Gi, x);
          else {
            this.checkExpressionErrors(Wt, !0), this.yieldPos = me || this.yieldPos, this.awaitPos = ge || this.awaitPos, this.awaitIdentPos = Kt || this.awaitIdentPos;
            var Fe = this.startNodeAt(o, c);
            Fe.callee = s, Fe.arguments = Gi, at && (Fe.optional = st), s = this.finishNode(Fe, "CallExpression");
          }
          this.maybeInArrowParameters = Tt;
        } else if (this.type === l.backQuote) {
          (st || C) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          var pi = this.startNodeAt(o, c);
          pi.tag = s, pi.quasi = this.parseTemplate({ isTagged: !0 }), s = this.finishNode(pi, "TaggedTemplateExpression");
        }
        return s;
      }, g.parseGetterSetter = function(s) {
        s.kind = s.key.name, this.parsePropertyName(s), s.value = this.parseMethod(!1);
        var o = s.kind === "get" ? 0 : 1, c = s.value.params[0], p = c && this.isThisParam(c);
        s.value.params.length !== (o = p ? o + 1 : o) ? this.raiseRecoverable(s.value.start, s.kind === "get" ? "getter should have no params" : "setter should have exactly one param") : s.kind === "set" && s.value.params[0].type === "RestElement" && this.raiseRecoverable(s.value.params[0].start, "Setter cannot use rest params");
      }, g.parseProperty = function(s, o) {
        if (!s) {
          var c = [];
          if (this.match(E.at)) for (; this.match(E.at); ) c.push(this.parseDecorator());
          var p = I.prototype.parseProperty.call(this, s, o);
          return p.type === "SpreadElement" && c.length && this.raise(p.start, "Decorators can't be used with SpreadElement"), c.length && (p.decorators = c, c = []), p;
        }
        return I.prototype.parseProperty.call(this, s, o);
      }, g.parseCatchClauseParam = function() {
        var s = this.parseBindingAtom(), o = s.type === "Identifier";
        this.enterScope(o ? 32 : 0), this.checkLValPattern(s, o ? 4 : 2);
        var c = this.tsTryParseTypeAnnotation();
        return c && (s.typeAnnotation = c, this.resetEndLocation(s)), this.expect(l.parenR), s;
      }, g.parseClass = function(s, o) {
        var c = this.inAbstractClass;
        this.inAbstractClass = !!s.abstract;
        try {
          this.next(), this.takeDecorators(s);
          var p = this.strict;
          this.strict = !0, this.parseClassId(s, o), this.parseClassSuper(s);
          var b = this.enterClassBody(), k = this.startNode(), x = !1;
          k.body = [];
          var v = [];
          for (this.expect(l.braceL); this.type !== l.braceR; ) if (this.match(E.at)) v.push(this.parseDecorator());
          else {
            var C = this.parseClassElement(s.superClass !== null);
            v.length && (C.decorators = v, this.resetStartLocationFromNode(C, v[0]), v = []), C && (k.body.push(C), C.type === "MethodDefinition" && C.kind === "constructor" && C.value.type === "FunctionExpression" ? (x && this.raiseRecoverable(C.start, "Duplicate constructor in the same class"), x = !0, C.decorators && C.decorators.length > 0 && this.raise(C.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")) : C.key && C.key.type === "PrivateIdentifier" && vo(b, C) && this.raiseRecoverable(C.key.start, "Identifier '#" + C.key.name + "' has already been declared"));
          }
          return this.strict = p, this.next(), v.length && this.raise(this.start, "Decorators must be attached to a class element."), s.body = this.finishNode(k, "ClassBody"), this.exitClassBody(), this.finishNode(s, o ? "ClassDeclaration" : "ClassExpression");
        } finally {
          this.inAbstractClass = c;
        }
      }, g.parseClassFunctionParams = function() {
        var s = this.tsTryParseTypeParameters(this.tsParseConstModifier), o = this.parseBindingList(l.parenR, !1, this.options.ecmaVersion >= 8, !0);
        return s && (o.typeParameters = s), o;
      }, g.parseMethod = function(s, o, c, p, b) {
        var k = this.startNode(), x = this.yieldPos, v = this.awaitPos, C = this.awaitIdentPos;
        if (this.initFunction(k), this.options.ecmaVersion >= 6 && (k.generator = s), this.options.ecmaVersion >= 8 && (k.async = !!o), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | vi(o, k.generator) | (c ? 128 : 0)), this.expect(l.parenL), k.params = this.parseClassFunctionParams(), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(k, !1, !0, !1, { isClassMethod: p }), this.yieldPos = x, this.awaitPos = v, this.awaitIdentPos = C, b && b.abstract && k.body) {
          var S = b.key;
          this.raise(b.start, R.AbstractMethodHasImplementation({ methodName: S.type !== "Identifier" || b.computed ? "[" + this.input.slice(S.start, S.end) + "]" : S.name }));
        }
        return this.finishNode(k, "FunctionExpression");
      }, At.parse = function(s, o) {
        if (o.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        o.locations = !0;
        var c = new this(o, s);
        return n && (c.isAmbientContext = !0), c.parse();
      }, At.parseExpressionAt = function(s, o, c) {
        if (c.locations === !1) throw new Error("You have to enable options.locations while using acorn-typescript");
        c.locations = !0;
        var p = new this(c, s, o);
        return n && (p.isAmbientContext = !0), p.nextToken(), p.parseExpression();
      }, g.parseImportSpecifier = function() {
        if (this.ts_isContextual(E.type)) {
          var s = this.startNode();
          return s.imported = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(s, !0, this.importOrExportOuterKind === "type"), this.finishNode(s, "ImportSpecifier");
        }
        var o = I.prototype.parseImportSpecifier.call(this);
        return o.importKind = "value", o;
      }, g.parseExportSpecifier = function(s) {
        var o = this.ts_isContextual(E.type);
        if (!this.match(l.string) && o) {
          var c = this.startNode();
          return c.local = this.parseModuleExportName(), this.parseTypeOnlyImportExportSpecifier(c, !1, this.importOrExportOuterKind === "type"), this.finishNode(c, "ExportSpecifier"), this.checkExport(s, c.exported, c.exported.start), c;
        }
        var p = I.prototype.parseExportSpecifier.call(this, s);
        return p.exportKind = "value", p;
      }, g.parseTypeOnlyImportExportSpecifier = function(s, o, c) {
        var p, b = o ? "imported" : "local", k = o ? "local" : "exported", x = s[b], v = !1, C = !0, S = x.start;
        if (this.isContextual("as")) {
          var M = this.parseIdent();
          if (this.isContextual("as")) {
            var U = this.parseIdent();
            gt(this.type) ? (v = !0, x = M, p = o ? this.parseIdent() : this.parseModuleExportName(), C = !1) : (p = U, C = !1);
          } else gt(this.type) ? (C = !1, p = o ? this.parseIdent() : this.parseModuleExportName()) : (v = !0, x = M);
        } else gt(this.type) && (v = !0, o ? (x = I.prototype.parseIdent.call(this, !0), this.isContextual("as") || this.checkUnreserved(x)) : x = this.parseModuleExportName());
        v && c && this.raise(S, o ? R.TypeModifierIsUsedInTypeImports : R.TypeModifierIsUsedInTypeExports), s[b] = x, s[k] = p, s[o ? "importKind" : "exportKind"] = v ? "type" : "value", C && this.eatContextual("as") && (s[k] = o ? this.parseIdent() : this.parseModuleExportName()), s[k] || (s[k] = this.copyNode(s[b])), o && this.checkLValSimple(s[k], 2);
      }, g.raiseCommonCheck = function(s, o, c) {
        return o === "Comma is not permitted after the rest element" ? this.isAmbientContext && this.match(l.comma) && this.lookaheadCharCode() === 41 ? void this.next() : I.prototype.raise.call(this, s, o) : c ? I.prototype.raiseRecoverable.call(this, s, o) : I.prototype.raise.call(this, s, o);
      }, g.raiseRecoverable = function(s, o) {
        return this.raiseCommonCheck(s, o, !0);
      }, g.raise = function(s, o) {
        return this.raiseCommonCheck(s, o, !0);
      }, g.updateContext = function(s) {
        var o = this.type;
        if (o == l.braceL) {
          var c = this.curContext();
          c == B.tc_oTag ? this.context.push(_.b_expr) : c == B.tc_expr ? this.context.push(_.b_tmpl) : I.prototype.updateContext.call(this, s), this.exprAllowed = !0;
        } else {
          if (o !== l.slash || s !== E.jsxTagStart) return I.prototype.updateContext.call(this, s);
          this.context.length -= 2, this.context.push(B.tc_cTag), this.exprAllowed = !1;
        }
      }, g.jsx_parseOpeningElementAt = function(s, o) {
        var c = this, p = this.startNodeAt(s, o), b = this.jsx_parseElementName();
        if (b && (p.name = b), this.match(l.relational) || this.match(l.bitShift)) {
          var k = this.tsTryParseAndCatch(function() {
            return c.tsParseTypeArgumentsInExpression();
          });
          k && (p.typeParameters = k);
        }
        for (p.attributes = []; this.type !== l.slash && this.type !== E.jsxTagEnd; ) p.attributes.push(this.jsx_parseAttribute());
        return p.selfClosing = this.eat(l.slash), this.expect(E.jsxTagEnd), this.finishNode(p, b ? "JSXOpeningElement" : "JSXOpeningFragment");
      }, g.enterScope = function(s) {
        s === be && this.importsStack.push([]), I.prototype.enterScope.call(this, s);
        var o = I.prototype.currentScope.call(this);
        o.types = [], o.enums = [], o.constEnums = [], o.classes = [], o.exportOnlyBindings = [];
      }, g.exitScope = function() {
        I.prototype.currentScope.call(this).flags === be && this.importsStack.pop(), I.prototype.exitScope.call(this);
      }, g.hasImport = function(s, o) {
        var c = this.importsStack.length;
        if (this.importsStack[c - 1].indexOf(s) > -1) return !0;
        if (!o && c > 1) {
          for (var p = 0; p < c - 1; p++) if (this.importsStack[p].indexOf(s) > -1) return !0;
        }
        return !1;
      }, g.maybeExportDefined = function(s, o) {
        this.inModule && 1 & s.flags && this.undefinedExports.delete(o);
      }, g.isRedeclaredInScope = function(s, o, c) {
        return !!(0 & c) && (2 & c ? s.lexical.indexOf(o) > -1 || s.functions.indexOf(o) > -1 || s.var.indexOf(o) > -1 : 3 & c ? s.lexical.indexOf(o) > -1 || !I.prototype.treatFunctionsAsVarInScope.call(this, s) && s.var.indexOf(o) > -1 : s.lexical.indexOf(o) > -1 && !(32 & s.flags && s.lexical[0] === o) || !this.treatFunctionsAsVarInScope(s) && s.functions.indexOf(o) > -1);
      }, g.checkRedeclarationInScope = function(s, o, c, p) {
        this.isRedeclaredInScope(s, o, c) && this.raise(p, "Identifier '" + o + "' has already been declared.");
      }, g.declareName = function(s, o, c) {
        if (4096 & o) return this.hasImport(s, !0) && this.raise(c, "Identifier '" + s + "' has already been declared."), void this.importsStack[this.importsStack.length - 1].push(s);
        var p = this.currentScope();
        if (1024 & o) return this.maybeExportDefined(p, s), void p.exportOnlyBindings.push(s);
        I.prototype.declareName.call(this, s, o, c), 0 & o && (0 & o || (this.checkRedeclarationInScope(p, s, o, c), this.maybeExportDefined(p, s)), p.types.push(s)), 256 & o && p.enums.push(s), 512 & o && p.constEnums.push(s), 128 & o && p.classes.push(s);
      }, g.checkLocalExport = function(s) {
        var o = s.name;
        if (!this.hasImport(o)) {
          for (var c = this.scopeStack.length - 1; c >= 0; c--) {
            var p = this.scopeStack[c];
            if (p.types.indexOf(o) > -1 || p.exportOnlyBindings.indexOf(o) > -1) return;
          }
          I.prototype.checkLocalExport.call(this, s);
        }
      }, yt = At, Z = [{ key: "acornTypeScript", get: function() {
        return f;
      } }], (ht = [{ key: "acornTypeScript", get: function() {
        return f;
      } }]) && yn(yt.prototype, ht), Z && yn(yt, Z), Object.defineProperty(yt, "prototype", { writable: !1 }), At;
    })(u);
    return js;
  };
}
const Po = ["createObject", "dropObject", "removeRecords", "upsertRecords"], Io = ["findObject", "getRecord", "listNodes", "previewObject", "retrieveRecords"], Ce = Js(Us);
async function Oo() {
  try {
    console.info("🚀 Building configuration...");
    const t = JSON.parse(await K.readFile("package.json", "utf8")), e = JSON.parse(await K.readFile("config.json", "utf8"));
    t.name != null && (e.id = t.name.replace("@datapos/", "").replace("@data-positioning/", "")), t.version != null && (e.version = t.version), await K.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Configuration built.");
  } catch (t) {
    console.error("❌ Error building configuration.", t);
  }
}
async function Vo(t) {
  try {
    console.info(`🚀 Building public directory index for identifier '${t}'...`);
    const e = {};
    async function i(a, r) {
      console.info(`⚙️ Processing directory '${a}'...`);
      const u = [], h = a.slice(`public/${t}`.length);
      e[h === "" ? "/" : h] = u;
      for (const f of r) {
        const l = `${a}/${f}`;
        try {
          const m = await K.stat(l);
          if (m.isDirectory()) {
            const y = await K.readdir(l), A = { childCount: y.length, name: f, typeId: "folder" };
            u.push(A), await i(l, y);
          } else {
            const y = { id: Hs(), lastModifiedAt: m.mtimeMs, name: f, size: m.size, typeId: "object" };
            u.push(y);
          }
        } catch (m) {
          throw new Error(`Unable to get information for '${f}' in 'buildPublicDirectoryIndex'. ${String(m)}`);
        }
      }
      u.sort((f, l) => {
        const m = f.typeId.localeCompare(l.typeId);
        return m === 0 ? f.name.localeCompare(l.name) : m;
      });
    }
    const n = await K.readdir(`public/${t}`);
    await i(`public/${t}`, n), await K.writeFile(`./public/${t}Index.json`, JSON.stringify(e), "utf8"), console.info("✅ Public directory index built.");
  } catch (e) {
    console.error("❌ Error building public directory index.", e);
  }
}
async function Ro() {
  try {
    console.info("🚀 Building connector configuration...");
    const t = JSON.parse(await K.readFile("package.json", "utf8")), e = JSON.parse(await K.readFile("config.json", "utf8")), i = await K.readFile("src/index.ts", "utf8");
    try {
      const m = ut.extend(Do()).parse(i, { ecmaVersion: "latest", sourceType: "module" }), y = [];
      Pr(m, {
        FunctionDeclaration(A) {
          A.id && y.push(A.id.name);
        },
        MethodDefinition(A) {
          const N = A.key?.name, _ = A.key?.type === "PrivateIdentifier";
          N && !_ && N !== "constructor" && y.push(N);
        }
      }), console.log(y);
    } catch (l) {
      console.log(1111, l);
    }
    try {
      let l = function(y) {
        y.type === "FunctionDeclaration" ? console.log("function", y) : y.type === "MethodDefinition" && console.log("method", y);
      };
      const m = Dr(i, { next: !0, module: !0 });
      l(m);
    } catch (l) {
      console.log(2222, l);
    }
    let n = !1, a = !1;
    const r = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, u = [...i.matchAll(r)].filter((l) => l[1] == null && l[2] !== "constructor"), h = [];
    for (const l of u) {
      const m = l[2];
      h.push(m), Po.includes(m) && (n = !0), Io.includes(m) && (a = !0);
    }
    h.length > 0 ? console.info(`ℹ️  Implements ${h.length} operations.`) : console.warn("⚠️  Implements no operations.");
    let f;
    a && n ? f = "bidirectional" : a ? f = "source" : n ? f = "destination" : f = "unknown", f === "unknown" ? console.warn("⚠️  No usage identified.") : console.info(`ℹ️  Supports ${f} usage.`), t.name != null && (e.id = t.name), e.operations = h, e.usageId = f, t.version != null && (e.version = t.version), await K.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Connector configuration built.");
  } catch (t) {
    console.error("❌ Error building connector configuration.", t);
  }
}
async function Mo() {
  try {
    console.info("🚀 Building context configuration...");
    const t = JSON.parse(await K.readFile("package.json", "utf8")), e = JSON.parse(await K.readFile("config.json", "utf8")), i = await K.readFile("src/index.ts", "utf8"), n = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, a = [...i.matchAll(n)].filter((r) => r[1] == null && r[2] !== "constructor").map((r) => r[2]);
    t.name != null && (e.id = t.name), e.operations = a, t.version != null && (e.version = t.version), await K.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Context configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function qo() {
  try {
    console.info("🚀 Building presenter configuration...");
    const t = JSON.parse(await K.readFile("package.json", "utf8")), e = JSON.parse(await K.readFile("config.json", "utf8")), i = await K.readFile("src/index.ts", "utf8"), n = /^\s{4}(?:async\s+)?(private\s+)?(?:public\s+|protected\s+)?([A-Za-z_]\w*)\s*\(/gm, a = [...i.matchAll(n)].filter((r) => r[1] == null && r[2] !== "constructor").map((r) => r[2]);
    t.name != null && (e.id = t.name), e.operations = a, t.version != null && (e.version = t.version), await K.writeFile("config.json", JSON.stringify(e, void 0, 4), "utf8"), console.info("✅ Presenter configuration built.");
  } catch (t) {
    console.error("❌ Error building context configuration.", t);
  }
}
async function jo(t = "./") {
  try {
    console.info("🚀 Bumping version...");
    const e = JSON.parse(await K.readFile(`${t}package.json`, "utf8"));
    if (e.version == null)
      e.version = "0.0.001", await K.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.warn(`⚠️ Version initialised to ${e.version}.`);
    else {
      const i = e.version, n = e.version.split(".");
      e.version = `${n[0]}.${n[1]}.${Number(n[2]) + 1}`, await K.writeFile(`${t}package.json`, JSON.stringify(e, void 0, 4), "utf8"), console.info(`✅ Version bumped from ${i} to ${e.version}.`);
    }
  } catch (e) {
    console.error("❌ Error bumping package version.", e);
  }
}
function Uo(t) {
  console.error(`❌ ${t} script not implemented.`);
}
async function Ho() {
  const t = "<!-- DEPENDENCY_LICENSES_START -->", e = "<!-- DEPENDENCY_LICENSES_END -->";
  try {
    const i = (await K.readFile("./licenses.md", "utf8")).trim(), n = await K.readFile("./README.md", "utf8"), a = n.indexOf(t), r = n.indexOf(e);
    (a === -1 || r === -1) && (console.error("❌ Dependency license markers not found in readme file."), process.exit(1));
    const u = n.substring(0, a + t.length) + `
` + i + `
` + n.substring(r);
    await K.writeFile("README.md", u, "utf8"), console.log("✅ Readme file updated with license information");
  } catch (i) {
    console.error("❌ Error updating readme file.", i), process.exit(1);
  }
}
async function Jo() {
  const t = "<!-- OWASP_BADGE_START -->", e = "<!-- OWASP_BADGE_END -->";
  try {
    const i = JSON.parse(await K.readFile("./dependency-check-reports/dependency-check-report.json", "utf-8")), n = { critical: 0, high: 0, moderate: 0, low: 0, unknown: 0 };
    for (const N of i.dependencies)
      if (N.vulnerabilities != null)
        for (const _ of N.vulnerabilities) {
          const q = _.severity?.toLowerCase() ?? "unknown";
          q in n ? n[q]++ : n.unknown++;
        }
    const a = {
      critical: { color: "D32F2F", label: "critical" },
      high: { color: "EF6C00", label: "high" },
      moderate: { color: "FBC02D", label: "moderate" },
      low: { color: "6D8C31", label: "low" },
      unknown: { color: "616161", label: "unknown" }
    }, r = JSON.parse(await K.readFile("config.json", "utf8")), u = [];
    if (Object.values(n).reduce((N, _) => N + _, 0) === 0)
      console.info("✅ No vulnerabilities found."), u.push(`[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/${r.id}/dependency-check-reports/dependency-check-report.html)`);
    else
      for (const [N, _] of Object.entries(n)) {
        const q = a[N];
        if (console.warn(`⚠️  ${_} ${q.label} vulnerability(ies) found.`), _ === 0) continue;
        const E = `https://img.shields.io/badge/OWASP-${_}%20${q.label}-${q.color}`;
        u.push(`[![OWASP](${E})](https://data-positioning.github.io/${r.id}/dependency-check-reports/dependency-check-report.html)`);
      }
    const f = await K.readFile("./README.md", "utf8"), l = f.indexOf(t), m = f.indexOf(e);
    (l === -1 || m === -1) && (console.error("❌ OWASP badge markers not found in README.md."), process.exit(1));
    const y = u.join(" "), A = f.substring(0, l + t.length) + y + f.substring(m);
    await K.writeFile("README.md", A, "utf8"), console.info("✅ OWASP dependency check badge(s) inserted into README.md");
  } catch (i) {
    console.error("❌ Error updating README with OWASP badges:", i), process.exit(1);
  }
}
async function zo() {
  try {
    console.info("🚀 Sending deployment notice...");
    const t = JSON.parse(await K.readFile("config.json", "utf8")), e = {
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
async function Wo() {
  try {
    console.info("🚀 Synchronising with GitHub....");
    const t = JSON.parse(await K.readFile("package.json", "utf8"));
    await Ce("git add ."), await Ce(`git commit -m "v${t.version}"`), await Ce("git push origin main:main"), console.info(`✅ Synchronised version ${t.version} with GitHub.`);
  } catch (t) {
    console.error("❌ Error synchronising with GitHub.", t);
  }
}
async function Ko(t, e) {
  try {
    console.info("🚀 Uploading directory to R2....");
    async function i(a, r, u) {
      for (const h of u) {
        const f = `${a}/${h}`, l = `${r}/${h}`;
        if ((await K.stat(f)).isDirectory()) {
          const y = await K.readdir(f);
          await i(f, l, y);
        } else {
          console.info(`⚙️ Uploading '${a}/${h}'...`);
          const y = `wrangler r2 object put "datapos-sample-data-eu/${r}/${h}" --file="${a}/${h}" --jurisdiction=eu --remote`, A = await Ce(y);
          if (A.stderr) throw new Error(A.stderr);
        }
      }
    }
    const n = await K.readdir(`${t}/${e}/`);
    await i(`${t}/${e}`, e, n), console.info("✅ Directory uploaded to R2.");
  } catch (i) {
    console.error("❌ Error uploading directory to R2.", i);
  }
}
async function Xo() {
  try {
    console.info("🚀 Uploading module configuration....");
    const t = JSON.parse(await K.readFile("config.json", "utf8")), e = t.id, i = {
      body: JSON.stringify(t),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    }, n = await fetch(`https://api.datapos.app/states/${e}`, i);
    if (!n.ok) throw new Error(await n.text());
    console.info("✅ Module configuration uploaded.");
  } catch (t) {
    console.error("❌ Error uploading module configuration.", t);
  }
}
async function $o(t) {
  try {
    console.info("🚀 Uploading module to R2...");
    const i = `v${JSON.parse(await K.readFile("package.json", "utf8")).version}`;
    async function n(a, r = "") {
      const u = await K.readdir(a, { withFileTypes: !0 });
      for (const h of u) {
        const f = `${a}/${h.name}`, l = r ? `${r}/${h.name}` : h.name;
        if (!h.isDirectory()) {
          const m = `${t}_${i}/${l}`.replace(/\\/g, "/"), y = h.name.endsWith(".js") ? "application/javascript" : h.name.endsWith(".css") ? "text/css" : "application/octet-stream";
          console.info(`⚙️ Uploading '${l}' → '${m}'...`);
          const { stderr: A } = await Ce(`wrangler r2 object put "${m}" --file="${f}" --content-type ${y} --jurisdiction=eu --remote`);
          if (A) throw new Error(A);
        }
      }
    }
    await n("dist"), console.info("✅ Module uploaded to R2.");
  } catch (e) {
    console.error("❌ Error uploading module to R2.", e);
  }
}
export {
  Oo as buildConfig,
  Ro as buildConnectorConfig,
  Mo as buildContextConfig,
  qo as buildPresenterConfig,
  Vo as buildPublicDirectoryIndex,
  jo as bumpVersion,
  Uo as echoScriptNotImplemented,
  Ho as insertLicensesIntoReadme,
  Jo as insertOWASPDependencyCheckBadgeIntoReadme,
  zo as sendDeploymentNotice,
  Wo as syncWithGitHub,
  Ko as uploadDirectoryToR2,
  Xo as uploadModuleConfigToDO,
  $o as uploadModuleToR2
};
