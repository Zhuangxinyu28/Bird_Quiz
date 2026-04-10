const RESULTS = {
  AHHH: {
    title: '大叫者',
    code: 'AHHH',
    species: '乌鸦',
    image: 'assets/images/ahhh.jpeg',
    core: '有事先叫，没事也可以先叫一下。',
    coping: '通过提高音量、放大反应、制造存在感来抢占局面。你不一定总有方案，但你一定先有动静。',
    social: '群体里的高音预警器。别人负责冷静，你负责“啊啊啊啊啊”。',
    review: '乌鸦本来就聪明，但你主要把智商用在了把场面叫得更热闹这件事上。'
  },
  BITE: {
    title: '咬人者',
    code: 'BITE',
    species: '鹅',
    image: 'assets/images/bite.jpeg',
    core: '边界感重，脾气也不是摆设。',
    coping: '一旦觉得被冒犯、被逼、被碰、被烦到，你就会立刻进入“别碰我，我真咬”的模式。',
    social: '团队里的领地保安。平时像个普通家禽，一翻脸就像村口恶霸。',
    review: '鹅这种东西最厉害的地方，不是会飞，是它明明长得像晚餐却敢把你当晚餐。'
  },
  DUMB: {
    title: '傻咕咕',
    code: 'DUMB',
    species: '珠颈斑鸠',
    image: 'assets/images/dumb.jpeg',
    core: '反应慢半拍，但坚持把日子过出一种呆萌的稳定感。',
    coping: '遇到事情先愣住，脑子转一圈，再慢慢上线。世界已经翻页了，你还在读目录。',
    social: '人群里的天然无害区。大家有时候会怀疑你到底懂没懂，但又莫名觉得你很真。',
    review: '珠颈斑鸠的气质就是“看起来不太聪明，实际上……也确实没想那么多”。'
  },
  FAKE: {
    title: '伪装者',
    code: 'FAKE',
    species: '夜鹭',
    image: 'assets/images/fake.jpeg',
    core: '白天装没事，晚上偷偷处理一切。',
    coping: '先把真实情绪压下去，摆出一副“我很好我很稳”的样子，等没人注意你了再暗中行动。',
    social: '人群里的潜伏型选手。平时存在感不大，但你一直在看，一直在记，一直在等时机。',
    review: '夜鹭看起来像没睡醒，实际上只是懒得跟你解释它什么时候才算正式上班。'
  },
  GANG: {
    title: '带佬',
    code: 'GANG',
    species: '喜鹊',
    image: 'assets/images/gang.jpeg',
    core: '要么组局，要么控场，要么顺手把别人也带上。',
    coping: '一看到局面散、节奏乱、人心不齐，你就会本能地开始管。没人请你，你也会忍不住伸手。',
    social: '群体里的民间头目。未必官最大，但通常最像那个真正在带节奏的人。',
    review: '喜鹊这种鸟，单看像普通路人，聚起来像帮派。你也是。'
  },
  KIWI: {
    title: '奇异果',
    code: 'KIWI',
    species: '几维鸟',
    image: 'assets/images/kiwi.jpeg',
    core: '不合群，不合常理，但很完整。',
    coping: '当世界要求你正常一点时，你会选择继续做你那套奇怪但自洽的东西。反正别人也学不会。',
    social: '群体里的稀有怪东西。大家一开始会愣一下，后来会接受“算了，它就这样”。',
    review: '几维鸟本身就像自然界写 bug 写出来的生物，而你身上也有一种“这到底怎么运行成功的”神秘感。'
  },
  CHIP: {
    title: '思考意义者',
    code: 'CHIP',
    species: '海鸥',
    image: 'assets/images/chip.jpeg',
    core: '嘴上讲意义，手上抢薯条。',
    coping: '你会一边认真思考人生、关系、存在与本质，一边精准叼走眼前最实际的好处。',
    social: '团体里的伪哲学家兼机会主义者。看起来像在沉思，其实也可能在看你手里那包吃的。',
    review: '海鸥最擅长的，就是一边装作懂海风和自由，一边把你午饭抢了。很有你的气质。'
  },
  BLUR: {
    title: '身份不明者',
    code: 'BLUR',
    species: '柳莺',
    image: 'assets/images/blur.jpeg',
    core: '模糊、轻盈、难以对焦。',
    coping: '世界一复杂，你就自动切成低清模式。不是逃避，是因为高清运行太耗电。',
    social: '人群里的背景层小精灵。大家经常见过你，但不一定真的记住你到底是什么路数。',
    review: '柳莺这种鸟，最大的本事不是漂亮，是让所有人都看过却还是认不出来。你也挺会这套的。'
  },
  BBOX: {
    title: '说唱家',
    code: 'BBOX',
    species: '乌鸫',
    image: 'assets/images/bbox.jpeg',
    core: '只要一开口，空气里就开始有节奏。',
    coping: '通过接话、输出、抛梗、制造语感来掌控局面。沉默不是不会，只是没必要。',
    social: '群体里的声音型人物。你未必最吵，但你一说话，别人就知道麦克风换人了。',
    review: '乌鸫唱歌是真的好听，你说话则属于“先别管内容，那个 flow 已经赢了”。'
  },
  BIRDER: {
    title: '偷觑者',
    code: 'BIRDER',
    species: '观鸟人',
    image: 'assets/images/birder.jpeg',
    core: '不急着加入，先躲远点看。',
    coping: '通过观察、记录、分析和保持距离来获得安全感。你不是冷淡，你只是很懂“靠太近容易出事”。',
    social: '关系生态纪录片导演。别人忙着活，你忙着看别人怎么活。',
    review: '观鸟人的精髓不在于爱鸟，而在于躲在草丛后面拿望远镜盯半天还觉得自己很高尚。你这个类型，多少有点礼貌版偷窥。'
  }
};

const QUESTIONS = [
  {
    title: '早上醒来发现今天事情很多，你的第一反应是？',
    options: [
      { text: '先“啊？？？”一声再说。', result: 'AHHH' },
      { text: '打开备忘录，先静静观察今天会怎么毁掉我。', result: 'BIRDER' },
      { text: '人醒了，但灵魂还没完全加载出来。', result: 'BLUR' }
    ]
  },
  {
    title: '有人没打招呼就碰了你的东西，你会？',
    options: [
      { text: '立刻进入防御状态，语气瞬间变硬。', result: 'BITE' },
      { text: '表面没事，心里已经记上一笔。', result: 'FAKE' },
      { text: '当下还没反应过来，过一会儿才觉得不对。', result: 'DUMB' }
    ]
  },
  {
    title: '小组作业第一次讨论时，你通常是？',
    options: [
      { text: '很自然开始组局、分工、安排节奏。', result: 'GANG' },
      { text: '先想清楚这件事到底为什么要做。', result: 'CHIP' },
      { text: '提出一个奇怪但又有点合理的点子。', result: 'KIWI' }
    ]
  },
  {
    title: '朋友把你拉去一个不太熟的聚会，你会？',
    options: [
      { text: '很快就开始接梗、说话、活跃气氛。', result: 'BBOX' },
      { text: '先漂着，像在现场又像不在现场。', result: 'BLUR' },
      { text: '缩在一边默默看别人都是什么品种。', result: 'BIRDER' }
    ]
  },
  {
    title: '别人问你“你现在心情怎么样”，你通常会？',
    options: [
      { text: '说个差不多的版本，不一定是真实完整版。', result: 'FAKE' },
      { text: '很直接，甚至情绪已经写在脸上了。', result: 'AHHH' },
      { text: '说出一个别人意想不到的比喻或奇怪描述。', result: 'KIWI' }
    ]
  },
  {
    title: '第一次去一家餐厅点单时，你更像？',
    options: [
      { text: '“都行吧”，最后点最普通最安全的。', result: 'DUMB' },
      { text: '会认真研究菜单，思考点这个的意义是什么。', result: 'CHIP' },
      { text: '谁催我我就更烦，点单像防御战。', result: 'BITE' }
    ]
  },
  {
    title: '朋友之间气氛有点僵，你往往会？',
    options: [
      { text: '主动出来打圆场，重新把局面带起来。', result: 'GANG' },
      { text: '不急着插手，先看看到底是谁的问题。', result: 'BIRDER' },
      { text: '表面云淡风轻，实际已经把所有情绪都感受到了。', result: 'FAKE' }
    ]
  },
  {
    title: '别人突然夸你一句，你最可能的反应是？',
    options: [
      { text: '立刻接上两句，顺便把场子变成自己的主场。', result: 'BBOX' },
      { text: '脑子空白一下，不知道自己现在是谁。', result: 'BLUR' },
      { text: '呆住，甚至怀疑对方是不是认错人了。', result: 'DUMB' }
    ]
  },
  {
    title: '深夜不睡觉的时候，你更容易在想什么？',
    options: [
      { text: '一些人生、世界、关系、本质之类的问题。', result: 'CHIP' },
      { text: '白天某个瞬间，想到一半突然“啊——”。', result: 'AHHH' },
      { text: '一些非常奇怪但自己觉得合理的东西。', result: 'KIWI' }
    ]
  },
  {
    title: '排队时有人插队，你大概率会？',
    options: [
      { text: '直接出声制止，态度明确。', result: 'BITE' },
      { text: '先忍一下，看对方到底能装到什么程度。', result: 'FAKE' },
      { text: '不出声，但会在心里完整记录全过程。', result: 'BIRDER' }
    ]
  },
  {
    title: '如果你和朋友一起出门旅行，你会更像？',
    options: [
      { text: '不知不觉就成了带路、组织、拍板的人。', result: 'GANG' },
      { text: '走着走着开始被奇怪小东西吸引跑偏。', result: 'KIWI' },
      { text: '整个人模模糊糊，跟着队伍漂流。', result: 'BLUR' }
    ]
  },
  {
    title: '学一个新东西时，你更常见的状态是？',
    options: [
      { text: '先模仿、先输出、先试着表现出来。', result: 'BBOX' },
      { text: '一开始慢半拍，要过一阵子才进入状态。', result: 'DUMB' },
      { text: '一定要先想懂逻辑，不然不甘心。', result: 'CHIP' }
    ]
  },
  {
    title: '喜欢的人突然出现在你面前，你第一反应更像？',
    options: [
      { text: '表面镇定，但内心已经尖叫成一片。', result: 'AHHH' },
      { text: '先管理表情和人设，尽量不露破绽。', result: 'FAKE' },
      { text: '假装路过，实则全程偷偷观察。', result: 'BIRDER' }
    ]
  },
  {
    title: '看到网上一个很离谱的新梗，你会？',
    options: [
      { text: '想把它改造成更怪的版本。', result: 'KIWI' },
      { text: '忍不住思考，大家到底为什么会喜欢这种东西。', result: 'CHIP' },
      { text: '立刻转给朋友，准备拉大家一起玩。', result: 'GANG' }
    ]
  },
  {
    title: '听到别人八卦时，你更接近？',
    options: [
      { text: '不插嘴，但每个细节都听得很认真。', result: 'BIRDER' },
      { text: '会顺势接两句，让对话更有节目效果。', result: 'BBOX' },
      { text: '如果瓜牵扯到我，我马上会变得很有攻击性。', result: 'BITE' }
    ]
  },
  {
    title: '当你特别累的时候，你会变成哪种状态？',
    options: [
      { text: '整个人雾蒙蒙的，不太知道自己在干嘛。', result: 'BLUR' },
      { text: '看起来更呆，处理信息速度明显下降。', result: 'DUMB' },
      { text: '更会把真实状态藏起来，装作没事。', result: 'FAKE' }
    ]
  },
  {
    title: '朋友遇到事来找你，你更可能是？',
    options: [
      { text: '先帮他撑场子，拉资源，直接上手解决。', result: 'GANG' },
      { text: '先陪他一起炸一下。', result: 'AHHH' },
      { text: '陪他分析来龙去脉和底层原因。', result: 'CHIP' }
    ]
  },
  {
    title: '下面三种评价，你最容易被哪句说中？',
    options: [
      { text: '“你这个人怪怪的，但怪得很完整。”', result: 'KIWI' },
      { text: '“你看起来脾气还行，但惹急了不好说。”', result: 'BITE' },
      { text: '“你话一多，现场节奏就变了。”', result: 'BBOX' }
    ]
  }
];

const screens = {
  start: document.getElementById('start-screen'),
  quiz: document.getElementById('quiz-screen'),
  result: document.getElementById('result-screen')
};

const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const copyBtn = document.getElementById('copy-btn');

const progressText = document.getElementById('progress-text');
const progressCount = document.getElementById('progress-count');
const progressFill = document.getElementById('progress-fill');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');

const resultTitle = document.getElementById('result-title');
const resultCode = document.getElementById('result-code');
const resultSpecies = document.getElementById('result-species');
const resultImage = document.getElementById('result-image');
const resultCore = document.getElementById('result-core');
const resultCoping = document.getElementById('result-coping');
const resultSocial = document.getElementById('result-social');
const resultReview = document.getElementById('result-review');
const scoreBreakdown = document.getElementById('score-breakdown');

let currentIndex = 0;
let answers = new Array(QUESTIONS.length).fill(null);

function showScreen(key) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[key].classList.add('active');
}

function updateQuizView() {
  const question = QUESTIONS[currentIndex];
  const answeredCount = answers.filter(Boolean).length;
  const currentAnswer = answers[currentIndex];

  progressText.textContent = `第 ${currentIndex + 1} / ${QUESTIONS.length} 题`;
  progressCount.textContent = `${answeredCount} / ${QUESTIONS.length}`;
  progressFill.style.width = `${(answeredCount / QUESTIONS.length) * 100}%`;
  questionTitle.textContent = question.title;

  optionsContainer.innerHTML = '';

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.type = 'button';
    button.textContent = `${String.fromCharCode(65 + optionIndex)}. ${option.text}`;

    if (currentAnswer === optionIndex) {
      button.classList.add('selected');
    }

    button.addEventListener('click', () => {
      answers[currentIndex] = optionIndex;
      updateQuizView();

      if (currentIndex < QUESTIONS.length - 1) {
        setTimeout(() => {
          currentIndex += 1;
          updateQuizView();
        }, 180);
      }
    });

    optionsContainer.appendChild(button);
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentAnswer === null;
  nextBtn.textContent = currentIndex === QUESTIONS.length - 1 ? '查看结果' : '下一题';
}

function computeResult() {
  const scores = Object.keys(RESULTS).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const chosen = QUESTIONS[questionIndex].options[answerIndex];
    scores[chosen.result] += 1;
  });

  const maxScore = Math.max(...Object.values(scores));
  let tiedKeys = Object.keys(scores).filter(key => scores[key] === maxScore);

  if (tiedKeys.length > 1) {
    for (let i = answers.length - 1; i >= 0; i -= 1) {
      const answerIndex = answers[i];
      if (answerIndex === null) continue;
      const candidate = QUESTIONS[i].options[answerIndex].result;
      if (tiedKeys.includes(candidate)) {
        tiedKeys = [candidate];
        break;
      }
    }
  }

  return {
    key: tiedKeys[0],
    scores
  };
}

function renderResult() {
  const { key, scores } = computeResult();
  const result = RESULTS[key];

  resultTitle.textContent = result.title;
  resultCode.textContent = result.code;
  resultSpecies.textContent = `对应鸟类：${result.species}`;
  resultImage.src = result.image;
  resultImage.alt = `${result.title} 结果图`;
  resultCore.textContent = result.core;
  resultCoping.textContent = result.coping;
  resultSocial.textContent = result.social;
  resultReview.textContent = result.review;

  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 6);
  scoreBreakdown.innerHTML = `
    <div class="score-title">本次测试里，你最像的前 6 种鸟格</div>
    <div class="score-grid">
      ${sortedScores.map(([scoreKey, value]) => `
        <div class="score-pill">
          <span>${RESULTS[scoreKey].title}</span>
          <strong>${value}</strong>
        </div>
      `).join('')}
    </div>
  `;

  showScreen('result');
}

function startQuiz() {
  currentIndex = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  showScreen('quiz');
  updateQuizView();
}

function restartQuiz() {
  showScreen('start');
}

function copyResultText() {
  const { key } = computeResult();
  const result = RESULTS[key];
  const text = `你的鸟格类型是：${result.title} ${result.code}\n对应鸟类：${result.species}\n核心行为倾向：${result.core}\n你的应对机制：${result.coping}\n你的社交位置：${result.social}\n鸟评：${result.review}`;

  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = '已复制';
    setTimeout(() => {
      copyBtn.textContent = '复制结果文案';
    }, 1200);
  }).catch(() => {
    copyBtn.textContent = '复制失败';
    setTimeout(() => {
      copyBtn.textContent = '复制结果文案';
    }, 1200);
  });
}

startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateQuizView();
  }
});
nextBtn.addEventListener('click', () => {
  if (answers[currentIndex] === null) return;
  if (currentIndex === QUESTIONS.length - 1) {
    renderResult();
  } else {
    currentIndex += 1;
    updateQuizView();
  }
});
restartBtn.addEventListener('click', restartQuiz);
copyBtn.addEventListener('click', copyResultText);

showScreen('start');
