console.log('Shopping List Code \nUsed to make a code out of your shopping list and decode it');
console.warn('DO NOT make or decode another code after making or decoding one without copying it or writing it down!')

function encodeList() {
// Get Array
    let shopList = ['lol'];
    let yesOrNo = 'yes';
    let dummyYesOrNo = 'lol';
    for (let i = 1; yesOrNo === 'yes'; i++) {
        shopList[i - 1] = prompt('Item number ' + i + '?');
        while ((dummyYesOrNo != 'yes') && (dummyYesOrNo != 'no')) {
            dummyYesOrNo = prompt('More items? (yes/no)(lowercase)');
        };
        yesOrNo = dummyYesOrNo;
        dummyYesOrNo = 'lol';
    };
// Make Code
    let code = '';
    code = shopList.join('%')
    code = code.replace(/ /g, '#')
    document.getElementById("code").innerHTML = 'Code: ' + code
};

function decodeCode() {
    let shopList = prompt('Code?');
    let item;
    shopList = shopList.replace(/#/g, ' ')
    shopList = shopList.split('%')
    shopList = shopList.join(', ')
    document.getElementById("shopList").innerHTML = 'Shopping list: ' + shopList
};