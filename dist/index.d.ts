export declare enum Category {
    red = "red",
    pink = "pink",
    purple = "purple",
    deep_purple = "deep_purple",
    indigo = "indigo",
    blue = "blue",
    light_blue = "light_blue",
    cyan = "cyan",
    teal = "teal",
    green = "green",
    light_green = "light_green",
    lime = "lime",
    yellow = "yellow",
    amber = "amber",
    orange = "orange",
    deep_orange = "deep_orange",
    brown = "brown",
    gray = "gray",
    blue_gray = "blue_gray"
}
export declare enum Shade {
    Shade50 = "0",
    Shade100 = "100",
    Shade200 = "200",
    Shade300 = "300",
    Shade400 = "400",
    Shade500 = "500",
    Shade600 = "600",
    Shade700 = "700",
    Shade800 = "800",
    Shade900 = "800",
    ShadeA100 = "A100",
    ShadeA200 = "A200",
    ShadeA300 = "A300",
    ShadeA400 = "A400",
    ShadeA700 = "A700"
}
export interface Color {
    category: Category;
    shade: Shade;
    rgb: string;
    hex: string;
    font: boolean;
}
export interface Options {
    excludeCategories: Category[];
    shades: Shade[];
    darkTheme: boolean;
    lightFontColor: string;
    darkFontColor: string;
}
export declare function getColor(str: string, options?: Options): Color;
export declare namespace getColor {
    var rgb: (str: string, options?: Options) => string;
    var hex: (str: string, options?: Options) => string;
    var fontColor: (str: string, options?: Options) => string;
}
