
const string = `阿萨德撒旦发啥打法是否啥打法是否的
撒打发斯蒂芬三分撒打发斯蒂芬阿斯顿发斯蒂芬是
胜多负少方式大是大非撒打发斯蒂芬撒打发斯蒂芬三分撒打发斯蒂芬三分
撒旦法是否啊沙发斯蒂芬阿斯蒂芬阿斯蒂芬萨芬萨芬
撒旦法师法师法撒旦法萨芬的sd撒旦法撒旦法是否萨芬萨芬啥打法是否dsas
士大夫撒旦法是否萨芬撒发顺丰撒旦法萨法萨芬萨芬鼎折覆餗we让我去若无若sdsdfasf
是地方撒发生发顺丰撒发顺丰是放散阀as范德萨发撒旦法是否
撒地方设计风格技术规范就撒即可复健科是款到发货
风口上及包房会计核算客户反馈了沙口路费和卡路里开始就
那边都方面，把手大部分没上班木地板`
const strLen = string.length
const getMsg = () => {
  return string.substring(0, Math.random() * strLen)
}
export default function () {
  let items = []
  let count = 30
  while (count--) {
    items.push({
      img: '',
      msg: getMsg(string)
    })
  }
  return items
}