const typograph = () => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="input-wrapper">
      <textarea class="textarea"></textarea>
      <p class="input-result"></p>
    </div>
    <div class="btn-wrapper">
      <button class="typograph-btn">Оттипографить</button>
    </div>
  `);
  const typographBtn = document.querySelector('.typograph-btn');
  const textarea = document.querySelector('.textarea');
  const textResult = document.querySelector('.input-result');

  typographBtn.addEventListener('click', () => {
    textResult.textContent = textarea.value.replace(/(№|#)/g, '№')
        .replace(/\s(—|-)\s/g, '&nbsp;&mdash; ')
        .replace(/©\s/g, '&copy;&nbsp;')
        .replace(/(".*?)"/gi, (str) => {
          const removeQuotes = str.replace(/"/g, '');
          return removeQuotes.replace(removeQuotes,
              `&laquo;${removeQuotes}&raquo;`);
        })
        .replace(/(?:^|\s)(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)(\s)/g, (words) => {
          const sortedStr = words.replace(/\s/g, '');
          return sortedStr.replace(sortedStr, ` ${sortedStr}&nbsp;`);
        });
  });
};

typograph();
