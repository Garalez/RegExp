// 1 задача

const arrFiles = ['module.jsx', 'index.html', 'style.css',
  'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const regexpFiles = /jsx?|ts/;

const resultFiles = arrFiles.filter(item => item.match(regexpFiles));

console.log(resultFiles);

// 2 задача

const strEmails = 'info@methed.ru, max24@mail.com, java_script@google.io, my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz';

const regexpEmails = /(\s|^)(\w+)@[a-zA-Z]{3,}\.(\w){2,5}/g;

const resultEmails = strEmails.match(regexpEmails);

console.log(resultEmails);

// 3 задача

const strText = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';

const regexpText = /(\(.*?)\)/g;

const resultText = strText.match(regexpText);

console.log(resultText);

// 4 задача

const strUrls = 'http://site.ru, https://site.com';

const urlsToLinks = (str) => {
  str = str.replace(/[^\s|,]+/g, (url) => {
    const createLink = url.replace(url, `<a href="${url}">${url}</a>`);
    return createLink.replace(/>https?:\/\//g, '>');
  });

  return str;
};

console.log(urlsToLinks(strUrls));

