// 객체가 빈객체인지 아닌지 판단하는 함수
export function isEmpty(obj) {
  obj = JSON.parse(JSON.stringify(obj));
  for(var key in obj) {
    if (obj.hasOwnProperty(key)) return true;
  }
  return false;
}

// br 태그를 textarea 와 같은 영역에서 \n으로 사용하기 위한 용도
export function convertBrToLinkbreak(text) {
  const newText = text.replace(/\<br\s?\/\>/g,"\n");
  return newText;
};

// \n를 html 문서에서 <br />로 사용하기 위한 용도
export function convertLineBreakToBr(text) {
  let newText = text.replace(/\n\r/g,"<br />");
  newText = text.replace(/\n/g,"<br />");
  return newText;
};