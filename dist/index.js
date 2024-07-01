"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shade = exports.Category = void 0;
exports.getColor = getColor;
var Category;
(function (Category) {
    Category["red"] = "red";
    Category["pink"] = "pink";
    Category["purple"] = "purple";
    Category["deep_purple"] = "deep_purple";
    Category["indigo"] = "indigo";
    Category["blue"] = "blue";
    Category["light_blue"] = "light_blue";
    Category["cyan"] = "cyan";
    Category["teal"] = "teal";
    Category["green"] = "green";
    Category["light_green"] = "light_green";
    Category["lime"] = "lime";
    Category["yellow"] = "yellow";
    Category["amber"] = "amber";
    Category["orange"] = "orange";
    Category["deep_orange"] = "deep_orange";
    Category["brown"] = "brown";
    Category["gray"] = "gray";
    Category["blue_gray"] = "blue_gray";
})(Category || (exports.Category = Category = {}));
var Shade;
(function (Shade) {
    Shade["Shade50"] = "0";
    Shade["Shade100"] = "100";
    Shade["Shade200"] = "200";
    Shade["Shade300"] = "300";
    Shade["Shade400"] = "400";
    Shade["Shade500"] = "500";
    Shade["Shade600"] = "600";
    Shade["Shade700"] = "700";
    Shade["Shade800"] = "800";
    Shade["Shade900"] = "800";
    Shade["ShadeA100"] = "A100";
    Shade["ShadeA200"] = "A200";
    Shade["ShadeA300"] = "A300";
    Shade["ShadeA400"] = "A400";
    Shade["ShadeA700"] = "A700";
})(Shade || (exports.Shade = Shade = {}));
var colors = [
    { category: Category.red, shade: Shade.Shade50, rgb: "rgb(255, 235, 238)", hex: "#FFEBEE", font: true },
    { category: Category.red, shade: Shade.Shade100, rgb: "rgb(255, 205, 210)", hex: "#FFCDD2", font: true },
    { category: Category.red, shade: Shade.Shade200, rgb: "rgb(239, 154, 154)", hex: "#EF9A9A", font: true },
    { category: Category.red, shade: Shade.Shade300, rgb: "rgb(229, 115, 115)", hex: "#E57373", font: true },
    { category: Category.red, shade: Shade.Shade400, rgb: "rgb(239, 83, 80)", hex: "#EF5350", font: true },
    { category: Category.red, shade: Shade.Shade500, rgb: "rgb(244, 67, 54)", hex: "#F44336", font: true },
    { category: Category.red, shade: Shade.Shade600, rgb: "rgb(229, 57, 53)", hex: "#E53935", font: true },
    { category: Category.red, shade: Shade.Shade700, rgb: "rgb(211, 47, 47)", hex: "#D32F2F", font: false },
    { category: Category.red, shade: Shade.Shade800, rgb: "rgb(198, 40, 40)", hex: "#C62828", font: false },
    { category: Category.red, shade: Shade.Shade900, rgb: "rgb(183, 28, 28)", hex: "#B71C1C", font: false },
    { category: Category.red, shade: Shade.ShadeA100, rgb: "rgb(255, 138, 128)", hex: "#FF8A80", font: true },
    { category: Category.red, shade: Shade.ShadeA200, rgb: "rgb(255, 82, 82)", hex: "#FF5252", font: true },
    { category: Category.red, shade: Shade.ShadeA400, rgb: "rgb(255, 23, 68)", hex: "#FF1744", font: true },
    { category: Category.red, shade: Shade.ShadeA700, rgb: "rgb(213, 0, 0)", hex: "#D50000", font: false },
    { category: Category.pink, shade: Shade.Shade50, rgb: "rgb(252, 228, 236)", hex: "#FCE4EC", font: true },
    { category: Category.pink, shade: Shade.Shade100, rgb: "rgb(248, 187, 208)", hex: "#F8BBD0", font: true },
    { category: Category.pink, shade: Shade.Shade200, rgb: "rgb(244, 143, 177)", hex: "#F48FB1", font: true },
    { category: Category.pink, shade: Shade.Shade300, rgb: "rgb(240, 98, 146)", hex: "#F06292", font: true },
    { category: Category.pink, shade: Shade.Shade400, rgb: "rgb(236, 64, 122)", hex: "#EC407A", font: true },
    { category: Category.pink, shade: Shade.Shade500, rgb: "rgb(233, 30, 99)", hex: "#E91E63", font: true },
    { category: Category.pink, shade: Shade.Shade600, rgb: "rgb(216, 27, 96)", hex: "#D81B60", font: false },
    { category: Category.pink, shade: Shade.Shade700, rgb: "rgb(194, 24, 91)", hex: "#C2185B", font: false },
    { category: Category.pink, shade: Shade.Shade800, rgb: "rgb(173, 20, 87)", hex: "#AD1457", font: false },
    { category: Category.pink, shade: Shade.Shade900, rgb: "rgb(136, 14, 79)", hex: "#880E4F", font: false },
    { category: Category.pink, shade: Shade.ShadeA100, rgb: "rgb(255, 128, 171)", hex: "#FF80AB", font: true },
    { category: Category.pink, shade: Shade.ShadeA200, rgb: "rgb(255, 64, 129)", hex: "#FF4081", font: true },
    { category: Category.pink, shade: Shade.ShadeA400, rgb: "rgb(245, 0, 87)", hex: "#F50057", font: true },
    { category: Category.pink, shade: Shade.ShadeA700, rgb: "rgb(197, 17, 98)", hex: "#C51162", font: false },
    { category: Category.purple, shade: Shade.Shade50, rgb: "rgb(243, 229, 245)", hex: "#F3E5F5", font: true },
    { category: Category.purple, shade: Shade.Shade100, rgb: "rgb(225, 190, 231)", hex: "#E1BEE7", font: true },
    { category: Category.purple, shade: Shade.Shade200, rgb: "rgb(206, 147, 216)", hex: "#CE93D8", font: true },
    { category: Category.purple, shade: Shade.Shade300, rgb: "rgb(186, 104, 200)", hex: "#BA68C8", font: true },
    { category: Category.purple, shade: Shade.Shade400, rgb: "rgb(171, 71, 188)", hex: "#AB47BC", font: false },
    { category: Category.purple, shade: Shade.Shade500, rgb: "rgb(156, 39, 176)", hex: "#9C27B0", font: false },
    { category: Category.purple, shade: Shade.Shade600, rgb: "rgb(142, 36, 170)", hex: "#8E24AA", font: false },
    { category: Category.purple, shade: Shade.Shade700, rgb: "rgb(123, 31, 162)", hex: "#7B1FA2", font: false },
    { category: Category.purple, shade: Shade.Shade800, rgb: "rgb(106, 27, 154)", hex: "#6A1B9A", font: false },
    { category: Category.purple, shade: Shade.Shade900, rgb: "rgb(74, 20, 140)", hex: "#4A148C", font: false },
    { category: Category.purple, shade: Shade.ShadeA100, rgb: "rgb(234, 128, 252)", hex: "#EA80FC", font: true },
    { category: Category.purple, shade: Shade.ShadeA200, rgb: "rgb(224, 64, 251)", hex: "#E040FB", font: true },
    { category: Category.purple, shade: Shade.ShadeA400, rgb: "rgb(213, 0, 249)", hex: "#D500F9", font: true },
    { category: Category.purple, shade: Shade.ShadeA700, rgb: "rgb(170, 0, 255)", hex: "#AA00FF", font: false },
    { category: Category.deep_purple, shade: Shade.Shade50, rgb: "rgb(237, 231, 246)", hex: "#EDE7F6", font: true },
    { category: Category.deep_purple, shade: Shade.Shade100, rgb: "rgb(209, 196, 233)", hex: "#D1C4E9", font: true },
    { category: Category.deep_purple, shade: Shade.Shade200, rgb: "rgb(179, 157, 219)", hex: "#B39DDB", font: true },
    { category: Category.deep_purple, shade: Shade.Shade300, rgb: "rgb(149, 117, 205)", hex: "#9575CD", font: true },
    { category: Category.deep_purple, shade: Shade.Shade400, rgb: "rgb(126, 87, 194)", hex: "#7E57C2", font: false },
    { category: Category.deep_purple, shade: Shade.Shade500, rgb: "rgb(103, 58, 183)", hex: "#673AB7", font: false },
    { category: Category.deep_purple, shade: Shade.Shade600, rgb: "rgb(94, 53, 177)", hex: "#5E35B1", font: false },
    { category: Category.deep_purple, shade: Shade.Shade700, rgb: "rgb(81, 45, 168)", hex: "#512DA8", font: false },
    { category: Category.deep_purple, shade: Shade.Shade800, rgb: "rgb(69, 39, 160)", hex: "#4527A0", font: false },
    { category: Category.deep_purple, shade: Shade.Shade900, rgb: "rgb(49, 27, 146)", hex: "#311B92", font: false },
    { category: Category.deep_purple, shade: Shade.ShadeA100, rgb: "rgb(179, 136, 255)", hex: "#B388FF", font: true },
    { category: Category.deep_purple, shade: Shade.ShadeA200, rgb: "rgb(124, 77, 255)", hex: "#7C4DFF", font: false },
    { category: Category.deep_purple, shade: Shade.ShadeA400, rgb: "rgb(101, 31, 255)", hex: "#651FFF", font: false },
    { category: Category.deep_purple, shade: Shade.ShadeA700, rgb: "rgb(98, 0, 234)", hex: "#6200EA", font: false },
    { category: Category.indigo, shade: Shade.Shade50, rgb: "rgb(232, 234, 246)", hex: "#E8EAF6", font: true },
    { category: Category.indigo, shade: Shade.Shade100, rgb: "rgb(197, 202, 233)", hex: "#C5CAE9", font: true },
    { category: Category.indigo, shade: Shade.Shade200, rgb: "rgb(159, 168, 218)", hex: "#9FA8DA", font: true },
    { category: Category.indigo, shade: Shade.Shade300, rgb: "rgb(121, 134, 203)", hex: "#7986CB", font: true },
    { category: Category.indigo, shade: Shade.Shade400, rgb: "rgb(92, 107, 192)", hex: "#5C6BC0", font: false },
    { category: Category.indigo, shade: Shade.Shade500, rgb: "rgb(63, 81, 181)", hex: "#3F51B5", font: false },
    { category: Category.indigo, shade: Shade.Shade600, rgb: "rgb(57, 73, 171)", hex: "#3949AB", font: false },
    { category: Category.indigo, shade: Shade.Shade700, rgb: "rgb(48, 63, 159)", hex: "#303F9F", font: false },
    { category: Category.indigo, shade: Shade.Shade800, rgb: "rgb(40, 53, 147)", hex: "#283593", font: false },
    { category: Category.indigo, shade: Shade.Shade900, rgb: "rgb(26, 35, 126)", hex: "#1A237E", font: false },
    { category: Category.indigo, shade: Shade.ShadeA100, rgb: "rgb(140, 158, 255)", hex: "#8C9EFF", font: true },
    { category: Category.indigo, shade: Shade.ShadeA200, rgb: "rgb(83, 109, 254)", hex: "#536DFE", font: true },
    { category: Category.indigo, shade: Shade.ShadeA400, rgb: "rgb(61, 90, 254)", hex: "#3D5AFE", font: false },
    { category: Category.indigo, shade: Shade.ShadeA700, rgb: "rgb(48, 79, 254)", hex: "#304FFE", font: false },
    { category: Category.blue, shade: Shade.Shade50, rgb: "rgb(227, 242, 253)", hex: "#E3F2FD", font: true },
    { category: Category.blue, shade: Shade.Shade100, rgb: "rgb(187, 222, 251)", hex: "#BBDEFB", font: true },
    { category: Category.blue, shade: Shade.Shade200, rgb: "rgb(144, 202, 249)", hex: "#90CAF9", font: true },
    { category: Category.blue, shade: Shade.Shade300, rgb: "rgb(100, 181, 246)", hex: "#64B5F6", font: true },
    { category: Category.blue, shade: Shade.Shade400, rgb: "rgb(66, 165, 245)", hex: "#42A5F5", font: true },
    { category: Category.blue, shade: Shade.Shade500, rgb: "rgb(33, 150, 243)", hex: "#2196F3", font: true },
    { category: Category.blue, shade: Shade.Shade600, rgb: "rgb(30, 136, 229)", hex: "#1E88E5", font: true },
    { category: Category.blue, shade: Shade.Shade700, rgb: "rgb(25, 118, 210)", hex: "#1976D2", font: false },
    { category: Category.blue, shade: Shade.Shade800, rgb: "rgb(21, 101, 192)", hex: "#1565C0", font: false },
    { category: Category.blue, shade: Shade.Shade900, rgb: "rgb(13, 71, 161)", hex: "#0D47A1", font: false },
    { category: Category.blue, shade: Shade.ShadeA100, rgb: "rgb(130, 177, 255)", hex: "#82B1FF", font: true },
    { category: Category.blue, shade: Shade.ShadeA200, rgb: "rgb(68, 138, 255)", hex: "#448AFF", font: true },
    { category: Category.blue, shade: Shade.ShadeA400, rgb: "rgb(41, 121, 255)", hex: "#2979FF", font: true },
    { category: Category.blue, shade: Shade.ShadeA700, rgb: "rgb(41, 98, 255)", hex: "#2962FF", font: false },
    { category: Category.light_blue, shade: Shade.Shade50, rgb: "rgb(225, 245, 254)", hex: "#E1F5FE", font: true },
    { category: Category.light_blue, shade: Shade.Shade100, rgb: "rgb(179, 229, 252)", hex: "#B3E5FC", font: true },
    { category: Category.light_blue, shade: Shade.Shade200, rgb: "rgb(129, 212, 250)", hex: "#81D4FA", font: true },
    { category: Category.light_blue, shade: Shade.Shade300, rgb: "rgb(79, 195, 247)", hex: "#4FC3F7", font: true },
    { category: Category.light_blue, shade: Shade.Shade400, rgb: "rgb(41, 182, 246)", hex: "#29B6F6", font: true },
    { category: Category.light_blue, shade: Shade.Shade500, rgb: "rgb(3, 169, 244)", hex: "#03A9F4", font: true },
    { category: Category.light_blue, shade: Shade.Shade600, rgb: "rgb(3, 155, 229)", hex: "#039BE5", font: true },
    { category: Category.light_blue, shade: Shade.Shade700, rgb: "rgb(2, 136, 209)", hex: "#0288D1", font: true },
    { category: Category.light_blue, shade: Shade.Shade800, rgb: "rgb(2, 119, 189)", hex: "#0277BD", font: false },
    { category: Category.light_blue, shade: Shade.Shade900, rgb: "rgb(1, 87, 155)", hex: "#01579B", font: false },
    { category: Category.light_blue, shade: Shade.ShadeA100, rgb: "rgb(128, 216, 255)", hex: "#80D8FF", font: true },
    { category: Category.light_blue, shade: Shade.ShadeA200, rgb: "rgb(64, 196, 255)", hex: "#40C4FF", font: true },
    { category: Category.light_blue, shade: Shade.ShadeA400, rgb: "rgb(0, 176, 255)", hex: "#00B0FF", font: true },
    { category: Category.light_blue, shade: Shade.ShadeA700, rgb: "rgb(0, 145, 234)", hex: "#0091EA", font: true },
    { category: Category.cyan, shade: Shade.Shade50, rgb: "rgb(224, 247, 250)", hex: "#E0F7FA", font: true },
    { category: Category.cyan, shade: Shade.Shade100, rgb: "rgb(178, 235, 242)", hex: "#B2EBF2", font: true },
    { category: Category.cyan, shade: Shade.Shade200, rgb: "rgb(128, 222, 234)", hex: "#80DEEA", font: true },
    { category: Category.cyan, shade: Shade.Shade300, rgb: "rgb(77, 208, 225)", hex: "#4DD0E1", font: true },
    { category: Category.cyan, shade: Shade.Shade400, rgb: "rgb(38, 198, 218)", hex: "#26C6DA", font: true },
    { category: Category.cyan, shade: Shade.Shade500, rgb: "rgb(0, 188, 212)", hex: "#00BCD4", font: true },
    { category: Category.cyan, shade: Shade.Shade600, rgb: "rgb(0, 172, 193)", hex: "#00ACC1", font: true },
    { category: Category.cyan, shade: Shade.Shade700, rgb: "rgb(0, 151, 167)", hex: "#0097A7", font: true },
    { category: Category.cyan, shade: Shade.Shade800, rgb: "rgb(0, 131, 143)", hex: "#00838F", font: true },
    { category: Category.cyan, shade: Shade.Shade900, rgb: "rgb(0, 96, 100)", hex: "#006064", font: false },
    { category: Category.cyan, shade: Shade.ShadeA100, rgb: "rgb(132, 255, 255)", hex: "#84FFFF", font: true },
    { category: Category.cyan, shade: Shade.ShadeA200, rgb: "rgb(24, 255, 255)", hex: "#18FFFF", font: true },
    { category: Category.cyan, shade: Shade.ShadeA400, rgb: "rgb(0, 229, 255)", hex: "#00E5FF", font: true },
    { category: Category.cyan, shade: Shade.ShadeA700, rgb: "rgb(0, 184, 212)", hex: "#00B8D4", font: true },
    { category: Category.teal, shade: Shade.Shade50, rgb: "rgb(224, 242, 241)", hex: "#E0F2F1", font: true },
    { category: Category.teal, shade: Shade.Shade100, rgb: "rgb(178, 223, 219)", hex: "#B2DFDB", font: true },
    { category: Category.teal, shade: Shade.Shade200, rgb: "rgb(128, 203, 196)", hex: "#80CBC4", font: true },
    { category: Category.teal, shade: Shade.Shade300, rgb: "rgb(77, 182, 172)", hex: "#4DB6AC", font: true },
    { category: Category.teal, shade: Shade.Shade400, rgb: "rgb(38, 166, 154)", hex: "#26A69A", font: true },
    { category: Category.teal, shade: Shade.Shade500, rgb: "rgb(0, 150, 136)", hex: "#009688", font: true },
    { category: Category.teal, shade: Shade.Shade600, rgb: "rgb(0, 137, 123)", hex: "#00897B", font: true },
    { category: Category.teal, shade: Shade.Shade700, rgb: "rgb(0, 121, 107)", hex: "#00796B", font: false },
    { category: Category.teal, shade: Shade.Shade800, rgb: "rgb(0, 105, 92)", hex: "#00695C", font: false },
    { category: Category.teal, shade: Shade.Shade900, rgb: "rgb(0, 77, 64)", hex: "#004D40", font: false },
    { category: Category.teal, shade: Shade.ShadeA100, rgb: "rgb(167, 255, 235)", hex: "#A7FFEB", font: true },
    { category: Category.teal, shade: Shade.ShadeA200, rgb: "rgb(100, 255, 218)", hex: "#64FFDA", font: true },
    { category: Category.teal, shade: Shade.ShadeA400, rgb: "rgb(29, 233, 182)", hex: "#1DE9B6", font: true },
    { category: Category.teal, shade: Shade.ShadeA700, rgb: "rgb(0, 191, 165)", hex: "#00BFA5", font: true },
    { category: Category.green, shade: Shade.Shade50, rgb: "rgb(232, 245, 233)", hex: "#E8F5E9", font: true },
    { category: Category.green, shade: Shade.Shade100, rgb: "rgb(200, 230, 201)", hex: "#C8E6C9", font: true },
    { category: Category.green, shade: Shade.Shade200, rgb: "rgb(165, 214, 167)", hex: "#A5D6A7", font: true },
    { category: Category.green, shade: Shade.Shade300, rgb: "rgb(129, 199, 132)", hex: "#81C784", font: true },
    { category: Category.green, shade: Shade.Shade400, rgb: "rgb(102, 187, 106)", hex: "#66BB6A", font: true },
    { category: Category.green, shade: Shade.Shade500, rgb: "rgb(76, 175, 80)", hex: "#4CAF50", font: true },
    { category: Category.green, shade: Shade.Shade600, rgb: "rgb(67, 160, 71)", hex: "#43A047", font: true },
    { category: Category.green, shade: Shade.Shade700, rgb: "rgb(56, 142, 60)", hex: "#388E3C", font: true },
    { category: Category.green, shade: Shade.Shade800, rgb: "rgb(46, 125, 50)", hex: "#2E7D32", font: false },
    { category: Category.green, shade: Shade.Shade900, rgb: "rgb(27, 94, 32)", hex: "#1B5E20", font: false },
    { category: Category.green, shade: Shade.ShadeA100, rgb: "rgb(185, 246, 202)", hex: "#B9F6CA", font: true },
    { category: Category.green, shade: Shade.ShadeA200, rgb: "rgb(105, 240, 174)", hex: "#69F0AE", font: true },
    { category: Category.green, shade: Shade.ShadeA400, rgb: "rgb(0, 230, 118)", hex: "#00E676", font: true },
    { category: Category.green, shade: Shade.ShadeA700, rgb: "rgb(0, 200, 83)", hex: "#00C853", font: true },
    { category: Category.light_green, shade: Shade.Shade50, rgb: "rgb(241, 248, 233)", hex: "#F1F8E9", font: true },
    { category: Category.light_green, shade: Shade.Shade100, rgb: "rgb(220, 237, 200)", hex: "#DCEDC8", font: true },
    { category: Category.light_green, shade: Shade.Shade200, rgb: "rgb(197, 225, 165)", hex: "#C5E1A5", font: true },
    { category: Category.light_green, shade: Shade.Shade300, rgb: "rgb(174, 213, 129)", hex: "#AED581", font: true },
    { category: Category.light_green, shade: Shade.Shade400, rgb: "rgb(156, 204, 101)", hex: "#9CCC65", font: true },
    { category: Category.light_green, shade: Shade.Shade500, rgb: "rgb(139, 195, 74)", hex: "#8BC34A", font: true },
    { category: Category.light_green, shade: Shade.Shade600, rgb: "rgb(124, 179, 66)", hex: "#7CB342", font: true },
    { category: Category.light_green, shade: Shade.Shade700, rgb: "rgb(104, 159, 56)", hex: "#689F38", font: true },
    { category: Category.light_green, shade: Shade.Shade800, rgb: "rgb(85, 139, 47)", hex: "#558B2F", font: true },
    { category: Category.light_green, shade: Shade.Shade900, rgb: "rgb(51, 105, 30)", hex: "#33691E", font: false },
    { category: Category.light_green, shade: Shade.ShadeA100, rgb: "rgb(204, 255, 144)", hex: "#CCFF90", font: true },
    { category: Category.light_green, shade: Shade.ShadeA200, rgb: "rgb(178, 255, 89)", hex: "#B2FF59", font: true },
    { category: Category.light_green, shade: Shade.ShadeA400, rgb: "rgb(118, 255, 3)", hex: "#76FF03", font: true },
    { category: Category.light_green, shade: Shade.ShadeA700, rgb: "rgb(100, 221, 23)", hex: "#64DD17", font: true },
    { category: Category.lime, shade: Shade.Shade50, rgb: "rgb(249, 251, 231)", hex: "#F9FBE7", font: true },
    { category: Category.lime, shade: Shade.Shade100, rgb: "rgb(240, 244, 195)", hex: "#F0F4C3", font: true },
    { category: Category.lime, shade: Shade.Shade200, rgb: "rgb(230, 238, 156)", hex: "#E6EE9C", font: true },
    { category: Category.lime, shade: Shade.Shade300, rgb: "rgb(220, 231, 117)", hex: "#DCE775", font: true },
    { category: Category.lime, shade: Shade.Shade400, rgb: "rgb(212, 225, 87)", hex: "#D4E157", font: true },
    { category: Category.lime, shade: Shade.Shade500, rgb: "rgb(205, 220, 57)", hex: "#CDDC39", font: true },
    { category: Category.lime, shade: Shade.Shade600, rgb: "rgb(192, 202, 51)", hex: "#C0CA33", font: true },
    { category: Category.lime, shade: Shade.Shade700, rgb: "rgb(175, 180, 43)", hex: "#AFB42B", font: true },
    { category: Category.lime, shade: Shade.Shade800, rgb: "rgb(158, 157, 36)", hex: "#9E9D24", font: true },
    { category: Category.lime, shade: Shade.Shade900, rgb: "rgb(130, 119, 23)", hex: "#827717", font: true },
    { category: Category.lime, shade: Shade.ShadeA100, rgb: "rgb(244, 255, 129)", hex: "#F4FF81", font: true },
    { category: Category.lime, shade: Shade.ShadeA200, rgb: "rgb(238, 255, 65)", hex: "#EEFF41", font: true },
    { category: Category.lime, shade: Shade.ShadeA400, rgb: "rgb(198, 255, 0)", hex: "#C6FF00", font: true },
    { category: Category.lime, shade: Shade.ShadeA700, rgb: "rgb(174, 234, 0)", hex: "#AEEA00", font: true },
    { category: Category.yellow, shade: Shade.Shade50, rgb: "rgb(255, 253, 231)", hex: "#FFFDE7", font: true },
    { category: Category.yellow, shade: Shade.Shade100, rgb: "rgb(255, 249, 196)", hex: "#FFF9C4", font: true },
    { category: Category.yellow, shade: Shade.Shade200, rgb: "rgb(255, 245, 157)", hex: "#FFF59D", font: true },
    { category: Category.yellow, shade: Shade.Shade300, rgb: "rgb(255, 241, 118)", hex: "#FFF176", font: true },
    { category: Category.yellow, shade: Shade.Shade400, rgb: "rgb(255, 238, 88)", hex: "#FFEE58", font: true },
    { category: Category.yellow, shade: Shade.Shade500, rgb: "rgb(255, 235, 59)", hex: "#FFEB3B", font: true },
    { category: Category.yellow, shade: Shade.Shade600, rgb: "rgb(253, 216, 53)", hex: "#FDD835", font: true },
    { category: Category.yellow, shade: Shade.Shade700, rgb: "rgb(251, 192, 45)", hex: "#FBC02D", font: true },
    { category: Category.yellow, shade: Shade.Shade800, rgb: "rgb(249, 168, 37)", hex: "#F9A825", font: true },
    { category: Category.yellow, shade: Shade.Shade900, rgb: "rgb(245, 127, 23)", hex: "#F57F17", font: true },
    { category: Category.yellow, shade: Shade.ShadeA100, rgb: "rgb(255, 255, 141)", hex: "#FFFF8D", font: true },
    { category: Category.yellow, shade: Shade.ShadeA200, rgb: "rgb(255, 255, 0)", hex: "#FFFF00", font: true },
    { category: Category.yellow, shade: Shade.ShadeA400, rgb: "rgb(255, 234, 0)", hex: "#FFEA00", font: true },
    { category: Category.yellow, shade: Shade.ShadeA700, rgb: "rgb(255, 214, 0)", hex: "#FFD600", font: true },
    { category: Category.amber, shade: Shade.Shade50, rgb: "rgb(255, 248, 225)", hex: "#FFF8E1", font: true },
    { category: Category.amber, shade: Shade.Shade100, rgb: "rgb(255, 236, 179)", hex: "#FFECB3", font: true },
    { category: Category.amber, shade: Shade.Shade200, rgb: "rgb(255, 224, 130)", hex: "#FFE082", font: true },
    { category: Category.amber, shade: Shade.Shade300, rgb: "rgb(255, 213, 79)", hex: "#FFD54F", font: true },
    { category: Category.amber, shade: Shade.Shade400, rgb: "rgb(255, 202, 40)", hex: "#FFCA28", font: true },
    { category: Category.amber, shade: Shade.Shade500, rgb: "rgb(255, 193, 7)", hex: "#FFC107", font: true },
    { category: Category.amber, shade: Shade.Shade600, rgb: "rgb(255, 179, 0)", hex: "#FFB300", font: true },
    { category: Category.amber, shade: Shade.Shade700, rgb: "rgb(255, 160, 0)", hex: "#FFA000", font: true },
    { category: Category.amber, shade: Shade.Shade800, rgb: "rgb(255, 143, 0)", hex: "#FF8F00", font: true },
    { category: Category.amber, shade: Shade.Shade900, rgb: "rgb(255, 111, 0)", hex: "#FF6F00", font: true },
    { category: Category.amber, shade: Shade.ShadeA100, rgb: "rgb(255, 229, 127)", hex: "#FFE57F", font: true },
    { category: Category.amber, shade: Shade.ShadeA200, rgb: "rgb(255, 215, 64)", hex: "#FFD740", font: true },
    { category: Category.amber, shade: Shade.ShadeA400, rgb: "rgb(255, 196, 0)", hex: "#FFC400", font: true },
    { category: Category.amber, shade: Shade.ShadeA700, rgb: "rgb(255, 171, 0)", hex: "#FFAB00", font: true },
    { category: Category.orange, shade: Shade.Shade50, rgb: "rgb(255, 243, 224)", hex: "#FFF3E0", font: true },
    { category: Category.orange, shade: Shade.Shade100, rgb: "rgb(255, 224, 178)", hex: "#FFE0B2", font: true },
    { category: Category.orange, shade: Shade.Shade200, rgb: "rgb(255, 204, 128)", hex: "#FFCC80", font: true },
    { category: Category.orange, shade: Shade.Shade300, rgb: "rgb(255, 183, 77)", hex: "#FFB74D", font: true },
    { category: Category.orange, shade: Shade.Shade400, rgb: "rgb(255, 167, 38)", hex: "#FFA726", font: true },
    { category: Category.orange, shade: Shade.Shade500, rgb: "rgb(255, 152, 0)", hex: "#FF9800", font: true },
    { category: Category.orange, shade: Shade.Shade600, rgb: "rgb(251, 140, 0)", hex: "#FB8C00", font: true },
    { category: Category.orange, shade: Shade.Shade700, rgb: "rgb(245, 124, 0)", hex: "#F57C00", font: true },
    { category: Category.orange, shade: Shade.Shade800, rgb: "rgb(239, 108, 0)", hex: "#EF6C00", font: true },
    { category: Category.orange, shade: Shade.Shade900, rgb: "rgb(230, 81, 0)", hex: "#E65100", font: true },
    { category: Category.orange, shade: Shade.ShadeA100, rgb: "rgb(255, 209, 128)", hex: "#FFD180", font: true },
    { category: Category.orange, shade: Shade.ShadeA200, rgb: "rgb(255, 171, 64)", hex: "#FFAB40", font: true },
    { category: Category.orange, shade: Shade.ShadeA400, rgb: "rgb(255, 145, 0)", hex: "#FF9100", font: true },
    { category: Category.orange, shade: Shade.ShadeA700, rgb: "rgb(255, 109, 0)", hex: "#FF6D00", font: true },
    { category: Category.deep_orange, shade: Shade.Shade50, rgb: "rgb(251, 233, 231)", hex: "#FBE9E7", font: true },
    { category: Category.deep_orange, shade: Shade.Shade100, rgb: "rgb(255, 204, 188)", hex: "#FFCCBC", font: true },
    { category: Category.deep_orange, shade: Shade.Shade200, rgb: "rgb(255, 171, 145)", hex: "#FFAB91", font: true },
    { category: Category.deep_orange, shade: Shade.Shade300, rgb: "rgb(255, 138, 101)", hex: "#FF8A65", font: true },
    { category: Category.deep_orange, shade: Shade.Shade400, rgb: "rgb(255, 112, 67)", hex: "#FF7043", font: true },
    { category: Category.deep_orange, shade: Shade.Shade500, rgb: "rgb(255, 87, 34)", hex: "#FF5722", font: true },
    { category: Category.deep_orange, shade: Shade.Shade600, rgb: "rgb(244, 81, 30)", hex: "#F4511E", font: true },
    { category: Category.deep_orange, shade: Shade.Shade700, rgb: "rgb(230, 74, 25)", hex: "#E64A19", font: true },
    { category: Category.deep_orange, shade: Shade.Shade800, rgb: "rgb(216, 67, 21)", hex: "#D84315", font: true },
    { category: Category.deep_orange, shade: Shade.Shade900, rgb: "rgb(191, 54, 12)", hex: "#BF360C", font: false },
    { category: Category.deep_orange, shade: Shade.ShadeA100, rgb: "rgb(255, 158, 128)", hex: "#FF9E80", font: true },
    { category: Category.deep_orange, shade: Shade.ShadeA200, rgb: "rgb(255, 110, 64)", hex: "#FF6E40", font: true },
    { category: Category.deep_orange, shade: Shade.ShadeA400, rgb: "rgb(255, 61, 0)", hex: "#FF3D00", font: true },
    { category: Category.deep_orange, shade: Shade.ShadeA700, rgb: "rgb(221, 44, 0)", hex: "#DD2C00", font: false },
    { category: Category.brown, shade: Shade.Shade50, rgb: "rgb(239, 235, 233)", hex: "#EFEBE9", font: true },
    { category: Category.brown, shade: Shade.Shade100, rgb: "rgb(215, 204, 200)", hex: "#D7CCC8", font: true },
    { category: Category.brown, shade: Shade.Shade200, rgb: "rgb(188, 170, 164)", hex: "#BCAAA4", font: true },
    { category: Category.brown, shade: Shade.Shade300, rgb: "rgb(161, 136, 127)", hex: "#A1887F", font: true },
    { category: Category.brown, shade: Shade.Shade400, rgb: "rgb(141, 110, 99)", hex: "#8D6E63", font: false },
    { category: Category.brown, shade: Shade.Shade500, rgb: "rgb(121, 85, 72)", hex: "#795548", font: false },
    { category: Category.brown, shade: Shade.Shade600, rgb: "rgb(109, 76, 65)", hex: "#6D4C41", font: false },
    { category: Category.brown, shade: Shade.Shade700, rgb: "rgb(93, 64, 55)", hex: "#5D4037", font: false },
    { category: Category.brown, shade: Shade.Shade800, rgb: "rgb(78, 52, 46)", hex: "#4E342E", font: false },
    { category: Category.brown, shade: Shade.Shade900, rgb: "rgb(62, 39, 35)", hex: "#3E2723", font: false },
    { category: Category.gray, shade: Shade.Shade50, rgb: "rgb(250, 250, 250)", hex: "#FAFAFA", font: true },
    { category: Category.gray, shade: Shade.Shade100, rgb: "rgb(245, 245, 245)", hex: "#F5F5F5", font: true },
    { category: Category.gray, shade: Shade.Shade200, rgb: "rgb(238, 238, 238)", hex: "#EEEEEE", font: true },
    { category: Category.gray, shade: Shade.Shade300, rgb: "rgb(224, 224, 224)", hex: "#E0E0E0", font: true },
    { category: Category.gray, shade: Shade.Shade400, rgb: "rgb(189, 189, 189)", hex: "#BDBDBD", font: true },
    { category: Category.gray, shade: Shade.Shade500, rgb: "rgb(158, 158, 158)", hex: "#9E9E9E", font: true },
    { category: Category.gray, shade: Shade.Shade600, rgb: "rgb(117, 117, 117)", hex: "#757575", font: false },
    { category: Category.gray, shade: Shade.Shade700, rgb: "rgb(97, 97, 97)", hex: "#616161", font: false },
    { category: Category.gray, shade: Shade.Shade800, rgb: "rgb(66, 66, 66)", hex: "#424242", font: false },
    { category: Category.gray, shade: Shade.Shade900, rgb: "rgb(33, 33, 33)", hex: "#212121", font: false },
    { category: Category.blue_gray, shade: Shade.Shade50, rgb: "rgb(236, 239, 241)", hex: "#ECEFF1", font: true },
    { category: Category.blue_gray, shade: Shade.Shade100, rgb: "rgb(207, 216, 220)", hex: "#CFD8DC", font: true },
    { category: Category.blue_gray, shade: Shade.Shade200, rgb: "rgb(176, 190, 197)", hex: "#B0BEC5", font: true },
    { category: Category.blue_gray, shade: Shade.Shade300, rgb: "rgb(144, 164, 174)", hex: "#90A4AE", font: true },
    { category: Category.blue_gray, shade: Shade.Shade400, rgb: "rgb(120, 144, 156)", hex: "#78909C", font: true },
    { category: Category.blue_gray, shade: Shade.Shade500, rgb: "rgb(96, 125, 139)", hex: "#607D8B", font: true },
    { category: Category.blue_gray, shade: Shade.Shade600, rgb: "rgb(84, 110, 122)", hex: "#546E7A", font: false },
    { category: Category.blue_gray, shade: Shade.Shade700, rgb: "rgb(69, 90, 100)", hex: "#455A64", font: false },
    { category: Category.blue_gray, shade: Shade.Shade800, rgb: "rgb(55, 71, 79)", hex: "#37474F", font: false },
    { category: Category.blue_gray, shade: Shade.Shade900, rgb: "rgb(38, 50, 56)", hex: "#263238", font: false },
];
var defaults = {
    shades: [Shade.Shade300, Shade.Shade400, Shade.Shade500, Shade.Shade600],
    excludeCategories: [],
    darkTheme: false,
    lightFontColor: '#000000',
    darkFontColor: '#FFFFFF',
};
function stringToHashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash;
}
function getColor(str, options) {
    if (options === void 0) { options = defaults; }
    var opts = Object.assign(JSON.parse(JSON.stringify(defaults)), options || {});
    var allowedColorsSet = new Set(opts.shades);
    var excludeColorsSet = new Set(opts.excludeCategories);
    var choiceColors = colors.filter(function (c) {
        if (excludeColorsSet.has(c.category) || !allowedColorsSet.has(c.shade))
            return false;
        return true;
    });
    var stringHashNumber = Math.abs(stringToHashCode(str));
    var colorIndex = stringHashNumber % choiceColors.length;
    return choiceColors[colorIndex];
}
getColor.rgb = function (str, options) {
    if (options === void 0) { options = defaults; }
    var color = getColor(str, options);
    return color.rgb;
};
getColor.hex = function (str, options) {
    if (options === void 0) { options = defaults; }
    var color = getColor(str, options);
    return color.hex;
};
getColor.fontColor = function (str, options) {
    if (options === void 0) { options = defaults; }
    var color = getColor(str, options);
    return color.font ? options.darkFontColor : options.lightFontColor;
};
//# sourceMappingURL=index.js.map