export default {
  async fetch(request) {
    const init = {
      headers: {
        "Referer": "https://guanjia.qq.com",
      },
    };
    const requestURL = new URL(request.url);
    const path = requestURL.pathname.slice(1);
    let response = await fetch(`https://cgi.urlsec.qq.com/index.php?m=check&a=check&url=${path}`,init);
    let text = await response.text();
    // 返回的字符串以 ( 开头，以 ) 结束，故去掉括号，返回 json 字符串
    let json = text.substring(text.indexOf('(') + 1, text.lastIndexOf(')'));
    return new Response(json, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
  },
};
