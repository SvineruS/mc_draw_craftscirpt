//
// Enchanced draw craftsript 
// by svinerus, 2019
//
// you can add your colors by running parse.py
// usage:
// copy image to plugins/WorldEdit/drawings folder 
// run   /cs draw <filename> [v]   in minecraft
//
// v for vertical, else horizontal
//
// craftscript usage: https://worldedit.enginehub.org/en/latest/usage/other/craftscripts/


importPackage(Packages.java.io);
importPackage(Packages.java.awt);
importPackage(Packages.javax.imageio);
importPackage(Packages.com.sk89q.worldedit);
importPackage(Packages.com.sk89q.worldedit.blocks);


// output from parse.py

colors = {
    'quartz_block': [235, 229, 222],
    'purpur_block': [169, 125, 169],
    'magenta_wool': [189, 68, 179],
    'birch_planks': [192, 175, 121],
    'terracotta': [152, 94, 67],
    'cobblestone': [127, 127, 127],
    'blue_terracotta': [74, 59, 91],
    'cyan_wool': [21, 137, 145],
    'andesite': [136, 136, 136],
    'white_concrete': [207, 213, 214],
    'cyan_terracotta': [86, 91, 91],
    'end_stone_bricks': [218, 224, 162],
    'cyan_concrete': [21, 119, 136],
    'carved_pumpkin': [150, 84, 17],
    'lapis_block': [30, 67, 140],
    'packed_ice': [141, 180, 250],
    'lime_terracotta': [103, 117, 52],
    'cracked_stone_bricks': [118, 117, 118],
    'brown_glazed_terracotta': [119, 106, 85],
    'stripped_spruce_log': [115, 89, 52],
    'nether_wart_block': [114, 3, 2],
    'yellow_concrete': [240, 175, 21],
    'redstone_block': [175, 24, 5],
    'magenta_glazed_terracotta': [208, 100, 191],
    'blue_glazed_terracotta': [47, 64, 139],
    'orange_wool': [240, 118, 19],
    'jungle_planks': [160, 115, 80],
    'red_wool': [160, 39, 34],
    'lime_wool': [112, 185, 25],
    'red_nether_bricks': [69, 7, 9],
    'brown_mushroom_block': [149, 111, 81],
    'acacia_planks': [168, 90, 50],
    'nether_bricks': [44, 21, 26],
    'yellow_wool': [248, 197, 39],
    'netherrack': [97, 38, 38],
    'diamond_block': [98, 237, 228],
    'white_terracotta': [209, 178, 161],
    'lime_concrete': [94, 168, 24],
    'chiseled_quartz_block': [231, 226, 218],
    'obsidian': [15, 10, 24],
    'jukebox': [88, 58, 40],
    'iron_block': [220, 220, 220],
    'lime_glazed_terracotta': [162, 197, 55],
    'purple_glazed_terracotta': [109, 48, 152],
    'coarse_dirt': [119, 85, 59],
    'yellow_glazed_terracotta': [234, 192, 88],
    'light_gray_wool': [142, 142, 134],
    'stripped_oak_log': [177, 144, 86],
    'stone_bricks': [122, 121, 122],
    'polished_andesite': [132, 134, 133],
    'quartz_pillar': [235, 230, 224],
    'blue_ice': [116, 167, 253],
    'oak_planks': [162, 130, 78],
    'orange_concrete': [224, 97, 0],
    'stripped_dark_oak_log': [96, 76, 49],
    'crafting_table': [128, 102, 63],
    'purple_terracotta': [118, 70, 86],
    'gray_glazed_terracotta': [83, 90, 93],
    'black_concrete': [8, 10, 15],
    'chiseled_red_sandstone': [183, 96, 27],
    'soul_sand': [81, 62, 50],
    'stripped_birch_log': [196, 176, 118],
    'emerald_ore': [117, 136, 124],
    'nether_quartz_ore': [117, 65, 62],
    'bedrock': [85, 85, 85],
    'pink_wool': [237, 141, 172],
    'stripped_acacia_log': [174, 92, 59],
    'end_stone': [219, 222, 158],
    'gray_concrete': [54, 57, 61],
    'diorite': [188, 188, 188],
    'emerald_block': [42, 203, 87],
    'dark_oak_log': [60, 46, 26],
    'spruce_log': [58, 37, 16],
    'purple_concrete': [100, 31, 156],
    'clay': [160, 166, 179],
    'green_wool': [84, 109, 27],
    'brown_terracotta': [77, 51, 35],
    'dark_oak_planks': [66, 43, 20],
    'blue_wool': [53, 57, 157],
    'ice': [145, 183, 253],
    'jungle_log': [85, 67, 25],
    'blue_concrete': [44, 46, 143],
    'wet_sponge': [171, 181, 70],
    'coal_block': [16, 15, 15],
    'sponge': [195, 192, 74],
    'brown_wool': [114, 71, 40],
    'smooth_stone': [158, 158, 158],
    'cyan_glazed_terracotta': [52, 118, 125],
    'light_blue_terracotta': [113, 108, 137],
    'mossy_stone_bricks': [115, 121, 105],
    'light_gray_terracotta': [135, 106, 97],
    'red_glazed_terracotta': [181, 59, 53],
    'green_concrete': [73, 91, 36],
    'lapis_ore': [99, 110, 132],
    'oak_log': [109, 85, 50],
    'dried_kelp_block': [38, 48, 29],
    'orange_glazed_terracotta': [154, 147, 91],
    'red_sandstone': [186, 99, 29],
    'hay_block': [166, 136, 38],
    'pink_concrete': [213, 101, 142],
    'coal_ore': [116, 116, 116],
    'black_glazed_terracotta': [67, 30, 32],
    'chiseled_stone_bricks': [119, 118, 119],
    'mossy_cobblestone': [110, 118, 94],
    'slime_block': [111, 192, 91],
    'pumpkin': [195, 114, 24],
    'note_block': [88, 58, 40],
    'pink_glazed_terracotta': [235, 154, 181],
    'red_concrete': [142, 32, 32],
    'iron_ore': [136, 130, 127],
    'acacia_log': [103, 96, 86],
    'polished_granite': [154, 106, 89],
    'gray_terracotta': [57, 42, 35],
    'white_glazed_terracotta': [188, 212, 202],
    'light_gray_glazed_terracotta': [144, 166, 167],
    'purpur_pillar': [171, 129, 171],
    'magenta_terracotta': [149, 88, 108],
    'green_glazed_terracotta': [117, 142, 67],
    'redstone_lamp': [95, 54, 30],
    'orange_terracotta': [161, 83, 37],
    'cut_red_sandstone': [189, 101, 31],
    'sandstone': [216, 203, 155],
    'diamond_ore': [125, 142, 141],
    'stripped_jungle_log': [171, 132, 84],
    'gray_wool': [62, 68, 71],
    'stone': [125, 125, 125],
    'light_blue_glazed_terracotta': [94, 164, 208],
    'prismarine_bricks': [99, 171, 158],
    'melon': [114, 146, 30],
    'red_terracotta': [143, 61, 46],
    'purple_wool': [121, 42, 172],
    'dark_prismarine': [51, 91, 75],
    'gold_ore': [143, 140, 125],
    'magenta_concrete': [169, 48, 159],
    'bookshelf': [117, 94, 59],
    'gold_block': [246, 208, 61],
    'white_wool': [233, 236, 236],
    'polished_diorite': [192, 193, 194],
    'yellow_terracotta': [186, 133, 35],
    'light_blue_concrete': [35, 137, 198],
    'brown_concrete': [96, 59, 31],
    'green_terracotta': [76, 83, 42],
    'pink_terracotta': [161, 78, 78],
    'red_mushroom_block': [200, 46, 45],
    'black_terracotta': [37, 22, 16],
    'cut_sandstone': [217, 206, 159],
    'light_gray_concrete': [125, 125, 115],
    'black_wool': [20, 21, 25],
    'spruce_planks': [114, 84, 48],
    'magma_block': [202, 78, 6],
    'dirt': [134, 96, 67],
    'light_blue_wool': [58, 175, 217],
    'bricks': [150, 97, 83],
    'redstone_ore': [133, 107, 107],
    'chiseled_sandstone': [216, 202, 155],
};





var clothColors = []
var clothBlocks = []
for (var block_name in colors) {
    var block = context.getBlock(block_name);
    var color = colors[block_name];
    color = new Color(color[0]/255, color[1]/255, color[2]/255);
    clothColors.push(color);
    clothBlocks.push(block);
}




// http://stackoverflow.com/questions/2103368/color-logic-algorithm/2103608#2103608
function colorDistance(c1, c2) {
    var r = c1.getRed() - c2.getRed();
    var g = c1.getGreen() - c2.getGreen();
    var b = c1.getBlue() - c2.getBlue();
    var rmean = (c1.getRed() + c2.getRed()) / 2;
    var weightR = 2 + rmean / 256;
    var weightG = 4.0;
    var weightB = 2 + (255 - rmean) / 256;
    return Math.sqrt(weightR * r * r + weightG * g * g + weightB * b * b);
}


function findClosestColor(col) {
    var closestId = 0;
    var closestDistance = 999;

    for (var i = 0; i < clothColors.length; i++) {
        var dist = colorDistance(col, clothColors[i]);

        if (dist < closestDistance) {
            closestId = i;
            closestDistance = dist;
        }
    }

    return closestId;
}

function main() {
    var sess = context.remember();

    context.checkArgs(1, 2, "<image> [v]");
    if (argv[1].startsWith("http")) {
        var f = new URL(argv[1]);
    } else {
        var f = context.getSafeOpenFile("drawings", argv[1], "png", ["png", "jpg", "jpeg", "bmp"]);
        if (!f.exists()) {
            player.printError("Specified file doesn't exist.");
            return
        }
    }

    var upright = argv[2] == "v";

    var img = ImageIO.read(f);
    var width = img.getWidth();
    var height = img.getHeight();

    var origin = player.getBlockIn().toVector().toBlockPoint();

    var dir = player.getCardinalDirection();
    if (!dir.isCardinal()) {
        context.error("You need to be facing at a right angle to the world.");
        return;
    }
    dir = dir.toVector();

    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {

            var color = new Color(img.getRGB(x, y), true);
            if (color.getAlpha() < 50)
                continue;

            var data = findClosestColor(color);
            var block = clothBlocks[data];

            var coords = upright ?
                origin.add(0, height - y, 0).add(dir.multiply(x).toBlockPoint())
                :
                origin.add(x, 0, y);

            sess.setBlock(coords, block);

        }
    }
}

main() 
