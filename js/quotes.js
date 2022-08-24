const quotes = [
  {
    quote: `그대만큼 사랑스러운 사람을\n본 일이 없다.`,
    author: "김남조",
    title: "편지",
  },
  {
    quote: `나는 이제 너 없이도\n너를 좋아할 수 있다.`,
    author: "나태주",
    title: "너 없이도 너를",
  },
  {
    quote: `언제나 시작은\n자신을 사랑하는 것 부터.`,
    author: "김준",
    title: "기억할 것",
  },
  {
    quote: `이쯤에서\n너도 왔으면 좋겠다.`,
    author: "김민호",
    title: "비가온다",
  },
  {
    quote: `넌 머지않아\n예쁜 꽃이 될테니까`,
    author: "박치성",
    title: "봄이에게",
  },
  {
    quote: `그대가 봄이라면\n나는 봄에 피는 꽃이었다.`,
    author: "윤나라",
    title: "봄꽃",
  },
  {
    quote: `다시 봄이오면\n너는 또 봄일까.`,
    author: "백희다",
    title: "너는 또 봄일까",
  },
  { quote: `그리운건 그대일까\n그때일까.`, author: "하상욱", title: "시밤" },
  {
    quote: `그대 생각을 켜 놓은 채\n잠이 들었습니다.`,
    author: "한민복",
    title: "가을",
  },
  {
    quote: `까맣게 잊었더니\n하얗게 떠오르는 건.`,
    author: "원태연",
    title: "어쩌죠",
  },
  {
    quote: `그래도 내가\n노을 속 나비라는 생각`,
    author: "허연",
    title: "내가 나비라는 생각",
  },
  { quote: `꽃을 보듯\n너를 본다`, author: "나태주", title: "한 사람 건너" },
];

const quote = document.querySelector("#quotes span:first-child");
const authorTitle = document.querySelector("#quotes span:nth-child(2)");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
const refreshBtn = document.querySelector("#quotes button");

function refreshQuote() {
  quote.innerText = todaysQuote.quote;
  authorTitle.innerText = `${todaysQuote.author} - ${todaysQuote.title}`;
}

refreshQuote();
refreshBtn.addEventListener("click", refreshQuote);
