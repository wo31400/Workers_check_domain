export default {
  async fetch(request) {
    const init = {
      headers: {
        "Referer": "https://guanjia.qq.com",
      },
    };
    const requestURL = new URL(request.url);
    const path = requestURL.pathname.slice(1);
    return fetch(`https://cgi.urlsec.qq.com/index.php?m=check&a=check&url=${path}`,init);
  },
};
