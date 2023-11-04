import { FiFacebook, FiInstagram } from 'react-icons/fi'
import BlankPerson from './assets/img/blank-person.jpg'

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'services',
    href: 'services',
  }
]

export const zhCnNavigation = [
  {
    name: '首页',
    href: 'home',
  },
  {
    name: '服务项目',
    href: 'services',
  }
]

export const social = [
  {
    icon: <FiFacebook />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
]

export const servicesNav = [
  {
    name: 'all',
    zhName: '全部',
  },
  {
    name: 'hourly sessions',
    zhName: '精品服务',
  },
  {
    name: 'packages',
    zhName: '服务套餐',
  },
]

export const servicesData = [
  {
    id: '1',
    name: 'General Consultation (1st Session Free)',
    category: 'hourly sessions',
    duration: '60 mins',
    description: 'Addressing your college-related questions and charting a strategy going forward.',
    zhName: '综合咨询（第一次免费）',
    zhCategory: '精品服务',
    zhDuration: '60分钟',
    zhDescription: '初期评估，深度沟通，以及定制服务',
  },
  {
    id: '2',
    name: 'College Selection',
    category: 'hourly sessions',
    duration: '60 mins',
    description: 'Building a solid list of colleges that suits your academic and personal aspirations.',
    zhName: '选校选专业',
    zhCategory: '精品服务',
    zhDuration: '60分钟',
    zhDescription: '根据学生个人情况以及美国大学权威数据库规划要申请的学校及专业',
  },
  {
    id: '3',
    name: 'Essay Editing',
    category: 'hourly sessions',
    duration: '60 mins',
    description: 'Crafting a standout admissions or supplementary essay that highlights your strengths and perspectives.',
    zhName: '文书指导',
    zhCategory: '精品服务',
    zhDuration: '60分钟',
    zhDescription: '根据不同学校的要求，指导学生撰写升学作文以及修改润色',
  },
  {
    id: '4',
    name: 'Resume Editing',
    category: 'hourly sessions',
    duration: '60 mins',
    description: 'Fine-tuning your academic and extracurricular achievements to reflect your best self on paper.',
    zhName: '简历修改',
    zhCategory: '精品服务',
    zhDuration: '60分钟',
    zhDescription: '以多年面试实习及工作经验，塑造或改进一份优秀的简历',
  },
  {
    id: '5',
    name: 'Extracurricular Planning',
    category: 'hourly sessions',
    duration: '60 mins',
    description: 'Strategizing your club, sport, and organizational involvement to enhance your application and development.',
    zhName: '课外活动规划',
    zhCategory: '精品服务',
    zhDuration: '60分钟',
    zhDescription: '根据目标学校及专业，规划课外及冬署假期活动，进一步提升竞争力',
  },
  {
    id: '6',
    name: 'Community Service Planning',
    category: 'hourly sessions',
    duration: '60 mins',
    description: 'Helping you identify volunteer opportunities that highlight your passions and commitment.',
    zhName: '义工服务',
    zhCategory: '精品服务',
    zhDuration: '60分钟',
    zhDescription: '规划适合学生的社区服务，使学生在申请材料中更能脱颖而出',
  },
  {
    id: '7',
    name: '5 Hourly Sessions',
    category: 'packages',
    description: 'Any combination of 5 hourly sessions.',
    zhName: '初级套餐',
    zhCategory: '服务套餐',
    zhDescription: '包含任意5项精品服务，推荐非常独立积极的学生',
  },
  {
    id: '8',
    name: '10 Hourly Sessions',
    category: 'packages',
    description: 'Any combination of 10 hourly sessions.',
    zhName: '精华套餐',
    zhCategory: '服务套餐',
    zhDescription: '包含任意10项精品服务，有更充裕的时间去规划以及完善升学资料',
  },
  {
    id: '9',
    name: '20 Hourly Sessions',
    category: 'packages',
    description: 'Any combination of 20 hourly sessions.',
    zhName: '深度套餐',
    zhCategory: '服务套餐',
    zhDescription: '包含任意20项精品服务，深入挖掘学生优势以及把控细节，推荐最晚11年级以下学生',
  },
]

export const advisorProfiles = [
  {
    advisorImg: BlankPerson,
    advisorName: 'Tristan',
    advisorText: "Tristan received a B.S. in Computer Science from Stanford University and is completing an M.S. in Computer Science, Human-Computer Interaction (also at Stanford). Originally intending to study Literature, he attended numerous writing camps when studying at Palo Alto High School, such as the prestigious Iowa Young Writers' Studio. His passion and skill in essay composition has led him to help many of his acquaintances with their college applications over the years.",
  },
  {
    advisorImg: BlankPerson,
    advisorName: 'Name',
    advisorText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Eros in cursus turpis massa tincidunt. Mauris pellentesque pulvinar pellentesque habitant morbi. Nibh nisl condimentum id venenatis a condimentum. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.",
  },
]

export const testimonials = [
  {
    authorImg: BlankPerson,
    authorText: 'I received great help with my USC graduate school application essay. As a non-native English speaker, I lacked confidence in my writing skills. Tristan helped me make substantial improvements to my essay.',
    authorName: 'Snow',
    authorCollege: 'University of Southern California',
  },
  {
    authorImg: BlankPerson,
    authorText: 'Kenton helped me identify my reach, match, and safety schools. He was quick to point out the strengths and weaknesses of my application, which gave me a lot of clarity.',
    authorName: 'Danny',
    authorCollege: 'Carnegie Mellon University',
  },
  {
    authorImg: BlankPerson,
    authorText: 'Tristan was a great help when it came to helping me narrow down essay ideas, and being an encouraging sound board for taking risks and being creative when it came to writing!',
    authorName: 'Sophie',
    authorCollege: 'Northwestern University',
  },
  {
    authorImg: BlankPerson,
    authorText: 'Tristan carefully read through my application and offered precise and invaluable advice. I wholeheartedly recommend him to anyone pursuing guidance for their work.',
    authorName: 'Wendy',
    authorCollege: 'University of Texas, Austin',
  },
  {
    authorImg: BlankPerson,
    authorText: 'Tristan was very helpful with editing my college application. I am now attending UCLA so clearly his editing worked. :)',
    authorName: 'Josua',
    authorCollege: 'University of California, Los Angeles',
  },
]

export const whyusP1 = 'As students who also went through the college application just a few years ago, we came to the realization through our own experiences that many conventional college consulting services fail to adequately prepare students for success. Instead, they often adhere to outdated formulas, resulting in a repetitive and uninspiring approach. '

export const whyusP2 = 'At Leaps, our goal is to offer the most practical service that not only enhances each student\'s chances but also uncovers their unique strengths, enabling them to stand out among all the highly competitive candidates. Over the years, we\'ve been assisting peers through college application for free, and we\'ve observed significantly better results when compared to traditional college consulting methods. Therefore, we\'re now excited to provide you with the most transparent, effective, and approachable consulting services.'

export const whyusP3 = 'We can relate with both students and parents during this pivotal moment in life because we\'ve too experienced this process ourselves. We\'re committed to offering honest and practical opinions without the smoke screens or sugarcoating tactics other companies love to use. Our approach is to cut through the unnecessary distractions that many other companies emphasize and concentrate on addressing the most crucial factors that can significantly impact the outcome of your college application.'

export const whyusP4 = 'We hope to connect with you soon, and best of luck on your college journey!'

export const zhwhyusP1 = '作为几年前经才历过大学申请过程的学生，我们通过自身经验意识到，许多传统的大学咨询服务未能充分准备学生取得成功。相反，它们通常坚守换汤不换药的方式对待每一位学生，并没有真的去理解学生。'

export const zhwhyusP2 = '在跃升，我们的目标是提供最实际有效的服务，不仅提高每位学生进入他们理想学校的机会，还是为了发掘他们的独特优势，使他们在众多竞争激烈的候选人中脱颖而出。多年来，我们一直免费帮助同龄人进行大学申请，与传统的大学咨询方法相比，我们意识到显著更好的结果。因此，我们现在很高兴为您提供最透明、最有效和最平易近人的咨询服务。'

export const zhwhyusP3 = '我们非常能体会学生们和家长们在这人生转折点上的心情，因为我们自己也经历过这个过程。所以我们承诺提供最坦诚和实用的意见，而不是其他公司习惯使用的套路或粉饰。我们的方法不会浪费学生精力在没有意义的公式化步骤上，而是专注于对学生在大学申请以及未来规划上的最关键因素。'

export const zhwhyusP4 = '我们期待与您见面，也祝愿各位学生在升学路上都不会留下遗憾！'