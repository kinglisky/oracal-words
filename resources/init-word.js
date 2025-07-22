const data = require("./data.json");
const fs = require("fs");

const map = {};

const parseWordS = (word) => {
    word = word || '';
    word = word.trim().replace(/(\?|？)$/, '').replace(/\（\）$/g, '').replace(/\（\）/g, '').replace(/\d+$/g, '');
    word = word.replace(/(（|\()/, '/').replace(/(\)|）)$/, '').replace(/^\//, '')
    if (!word || ['残疑字', '（）', '()'].includes(word)) {
        return [];
    }
    // 单个字
    if (Array.from(word).length === 1) {
        return [word];
    }


    // X/Y/Z 模式
    if (word.includes('/')) {
        return word.split('/');
    }

    if (word.includes('，')) {
        return word.split('，');
    }
    if (word.includes(',')) {
        return word.split(',');
    }

    if (word.includes('、')) {
        return word.split('、');
    }
    
    return [word];
}


data.forEach(item => {
    item.JGWZX.forEach(item => {
        let words = new Set([
            ...parseWordS(item.JTZ),
            ...parseWordS(item.FTZ),
        ]);

        words = Array.from(words).filter(word => word);
        if (!words.length) {
            return;
        }
        words.forEach(word => {
            
            if (!map[word]) {
                map[word] = new Set();
            }
            map[word].add(item.ZKBM);
        });
    });
});

const singleWord = {};
const multiWord = {};

Object.entries(map).forEach(([key, value]) => {
    unicodes = Array.from(value).sort((a, b) => a - b);
    if (Array.from(key).length === 1) {
        singleWord[key] = unicodes;
    } else {
        multiWord[key] = unicodes;
    }
});

console.log(`共${Object.keys(singleWord).length}个单字`);
console.log(`共${Object.keys(multiWord).length}个多字`);

fs.writeFileSync("./single-word.json", JSON.stringify(singleWord, null, 2));
fs.writeFileSync("./multi-word.json", JSON.stringify(multiWord, null, 2));


