const fs = require("fs");

async function loadPage(pageIndex) {
    const response = await fetch(`https://jgw.aynu.edu.cn/home/zx/method/jgwzx.ashx?type=sortallbybs&pageindex=${pageIndex}`, {
      "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Google Chrome\";v=\"138\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "lang=zh; ASP.NET_SessionId=syqnkeap3vortnp4yeiovzxx; UserInfo=H4sIAAAAAAAEAO1YzW4kNRB+lz7nkEBI2NzGdv+M2z2ZGXfWP6toNcoOKFLIRDMTVtFqn2c58AZIXJA4ICEOiPfB9TOdDglhVmSRkHJxlct2uVz1Vdnd77LVera+XmVHezvZyWq+HKrsKNv74sXhQUYCuXgzT6Iff/nte5aMZt+AJPWuZqvV28XyDfWmi4skf/Uu4wknNp/aJG9vrlJ3fydT89XZ8vxqncZ+/uPX737/6YcPadjerGDT/fenaYYYXn61QCWJTdLPYZlgG8TxKAd9i/XsQi3eXl4sZmnr3TSDO+P5Us1usqPPdpPw+Gq+nK3nxfXlWXZ0ePBiJ9n17TmZWpzPL9LSV1kpRZX62niw1MTUSGiCA8ugKSbQGJg1bmBYpiaaSQ2kBbFXOFhBG8oWxscelCoBSgXoq7R1oWGmHSemsXEjIxal+laqb6WNnYhuLrBJevp+p3PSQc9JUhVqKydt66Lo2gY9giS6xmAPSYzYKIdE60QUOtJpAZ6pY2hk5z9fK1DhnQ24ghiUGdfq6QQZJZBRwoUqetyy1Oh0FwNujSQ675HBXTFexjXAnyiYbcVmL1Q3DlPsjhTaiPsHVqws6ijHFcYUDSr40ESjaVAa2w03MKb1LVsVGrYrNJ1lyPJkp1Ee3AS1FRUfaHMU0GOC1YCpYHGBQgShk1VAn0b2uToeQk+TQa6GEJQeD+mMFG1pdcdO6ZSwvEBYBJjtvLBoXSCq3DigNgptaIwRpJvOVdNOmnpIxoHGwghb9LDH5VKgbwuBZhQVQgQIgwQ30iWSdiBMPho0kNWC5DwhENoN2RU82i0FgaUKhUFm9NI2rwsYss1g2tqOeQ0joE+gb0UYg79bIrYofSQqAtGWwgCjdSMJrSHYFK1+mh3200w/cZphcUFn6fIh0I8ZY/E2BTb4RfAjhL1oOyA7X90LIodtNBxA3CYAJAnc0NpRh9OQdxnLyXALf8zmW+wTCBl9MRLpckSFOAUEWjm0BrCdM608lU8+1YP5IKkMaEFjD6VHZHdEPh1nBqUElyMXrUcETRyW8+C1RTWcs5gbjA9KkU12OG88FvBJfTddGI334eK5RFCZS5gn7zkTa/YULhzhuUgwqU2DNwqnzd38EH9NEltUvoRIWaAYjEQpCCP5GLg77GvtfD/TnCfQTTDekn1YE80ZGG3FBrQ0W3qFmyc6muIROd9PpmaIdcYzlryEUiJtwgDGXFqpkGl1QDqF6RZNuZffk7pkXw5Nnk5ALvDebJP7CX2xiiCXQyTBgQhH+M5ITMmH6pi8GQwNL2cUc6xgtGM4QlxgaizQ+k61+LJfLZrnS/n5Ur5/KW93MT1ydT94Z/2bG12K7mZ46sv9n4sXm9kVqYJ83dUqZTfEdUzovxe4mN19NujNHbKhH/l+6CX1/l4vqfNmTKX1U70Btn8B/N2FfucqhwkOnWQQ4BpDELUU9OJIDIWViPM8kELf5phWQ1sNXuYAhb5P+p9oQfn6U7rk+Vn0/3sWtf/Bs+j5VfQUr6Iy+5hXUfn4q6hfIvo/KGJ1Mqzyarv30PZ/cmJFf2YqejBU+OMkVlNspTQaEzbj/zHYxb80clwanoN+owgJ+PI7Tc6bn10vz9c3sMNulgRm8fX5Jf3R2n3/J9qps58+EwAA; .ASPXAUTH=BC380DD1E6E594CEE7112C60EB45011AD1A8C79738B6259D2FF89E3C008661B9E4BFCD8594E262D4EF97B87255AB4333C20BB375420E75FEFE35289D3EF79413D3A3497655D34C4B318FA7CCE24454A8322A1D8CC8D6AFB5FA72DA867FC7AB3715B983D5C1EDA17509C71F872B3A02BC85FA350A578625DF1301DC64A836D929",
        "Referer": "https://jgw.aynu.edu.cn/home/zx/index.html"
      },
      "body": null,
      "method": "GET"
    });;
    const data = await response.json();
    return data.ALLDZ;
}

(async () => {
    const pageCount = 20;
    const items = Array.from({ length: pageCount }, (_, i) => i + 1);
    const data = [];
    for await (const pageIndex of items) {
        console.log(`Loading page ${pageIndex} start...`);
        const result = await loadPage(pageIndex);
        data.push(...result);
        console.log(`Loaded page ${pageIndex} end...`);
    }
    fs.writeFileSync(`./all-words.json`, JSON.stringify(data, null, 2));
})();