import { FiFacebook, FiInstagram, } from 'react-icons/fi'
import BlankPerson from './assets/img/blank-person.jpg'
import Kenton from './assets/img/kenton-pic.jpg'
import Imac from './assets/img/imac.png'
import Coin from './assets/img/coin.png'
import Healthcare from './assets/img/healthcare.png'

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'Why Us',
    href: 'whyus',
  },
  {
    name: 'Get Started',
    href: 'getstarted',
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
    name: '跃升特色',
    href: 'whyus',
  },
  {
    name: '联系我们',
    href: 'getstarted',
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
    zhDescription: '初期评估，深度沟通，以及定制服务。',
    price: "USD 249.99"
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
    zhDescription: '根据学生个人情况以及美国大学权威数据库规划要申请的学校及专业。',
    price: "USD 249.99"
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
    zhDescription: '根据不同学校的要求，指导学生撰写升学作文以及修改润色。',
    price: "USD 249.99"
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
    zhDescription: '以多年面试实习及工作经验，塑造或改进一份优秀的简历。',
    price: "USD 249.99"
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
    zhDescription: '根据目标学校及专业，规划课外及冬署假期活动，进一步提升竞争力。',
    price: "USD 249.99"
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
    zhDescription: '规划适合学生的社区服务，使学生在申请材料中更能脱颖而出。',
    price: "USD 249.99"
  },
  {
    id: '7',
    name: '1-Year Package',
    category: 'packages',
    description: 'A full year of college consulting containing up to 15 online sessions and behind the scene preparation focusing on the later stages of application. Recommended for students above 11th grade.',
    zhName: '一年套餐',
    zhCategory: '服务套餐',
    zhDescription: '在一年中包含上至15次线上咨询以及定制专属学生的升学计划，将大多时间花在确定学校和专业，文书的撰写和修改等后期项目。推荐11年级以上学生。',
    price: "USD 4880.00"
  },
  {
    id: '8',
    name: '2-Year Package',
    category: 'packages',
    description: 'Two years of college consulting containing up to 30 online sessions and behind the scene preparation focusing on developed a unique and outstanding profile for the applicant.',
    zhName: '两年套餐',
    zhCategory: '服务套餐',
    zhDescription: '在两年中包含上至30次线上咨询并和学生专属升学计划，有更充裕的时间去规划以及完善一份更独特的升学资料。',
    price: "USD 9680.00"
  },
  {
    id: '9',
    name: 'Full Package',
    category: 'packages',
    description: 'Up to 4 years of college consulting containing up to 60 online sessions and even more time spending on learning about the student\'s unique advantage.',
    zhName: '全套套餐',
    zhCategory: '服务套餐',
    zhDescription: '在四年以内包含上至60次线上咨询，更深入挖掘学生优势以及把控细节，推荐最晚10年级以下学生。',
    price: "USD 16800.00"
  },
]

export const advisorProfiles = [
  {
    advisorImg: BlankPerson,
    advisorName: 'Tristan',
    advisorText: "Tristan received a B.S. in Computer Science from Stanford University and is completing an M.S. in Computer Science, Human-Computer Interaction (also at Stanford). Originally intending to study Literature, he attended numerous writing camps when studying at Palo Alto High School, such as the prestigious Iowa Young Writers' Studio. His passion and skill in essay composition has led him to help many of his acquaintances with their college applications over the years.",
    zhAdvisorText: <p className='tracking-wider text-lg'>Tristan毕业于Stanford University，获得计算机科学学士学位，并正在斯坦福大学攻读计算机科学与人机交互领域的硕士学位。最初他打算攻读文学，他在Palo Alto高中时参加了许多写作夏令营，比如著名的爱荷华青年作家工作室（Iowa Young Writers' Studio）。他对文章写作的热情和技巧使他多年来帮助了许多熟人处理他们的大学申请和文书。</p>
  },
  {
    advisorImg: Kenton,
    advisorName: 'Kenton',
    advisorText: "Kenton is on track to receive a B.S. in Computer Science from Northeastern University. Throughout his college years, he assumed two full-time co-op positions, working as a web developer at Commonwealth Financial Network and a software engineer at Poloniex. Considered a trustworthy mentor among his peers due to his experience, he has helped many friends with college and internship applications over the years.",
    zhAdvisorText: <p className='tracking-wider text-lg'>Kenton即将毕业于Northeastern University计算机科学学士学位。在他大学的这几年里，Kenton曾在两个全职合作职位工作过：作为Commonwealth Financial Network的网页开发人员和作为Poloniex的软件工程师。他丰富的经验使他被同龄人以及学弟学妹们信赖，多年来帮助了许多朋友申请大学和实习。</p>
  },
]

export const testimonials = [
  {
    authorImg: BlankPerson,
    authorText: 'I received great help with my USC graduate school application essay. As a non-native English speaker, I lacked confidence in my writing skills. Tristan helped me make substantial improvements to my essay.',
    authorName: 'Snow',
    authorCollege: 'University of Southern California',
    chineseCollege: <p className='tracking-wider'>南加州大学</p>,
    chineseText: <p className='tracking-wider'>Tristan在我申请USC硕士的作文上帮了很大的忙。由于英语不是母语，我对自己写作的能力没有完全的自信，非常感谢Tristan花了很多时间帮我修改文章。</p>

  },
  {
    authorImg: BlankPerson,
    authorText: 'Kenton helped me identify my reach, match, and safety schools. He was quick to identify the strengths and weaknesses of my application, which gave me a lot of clarity.',
    authorName: 'Danny',
    authorCollege: 'Carnegie Mellon University',
    chineseCollege: <p className='tracking-wider'>卡耐基梅隆大学</p>,
    chineseText: <p className='tracking-wider'>Kenton帮我列出了保底、目标、和高难度学校。他非常直接的指出我的优势和劣势，让我在申请过程中找到了方向。</p>
  },
  {
    authorImg: BlankPerson,
    authorText: 'Kenton pointed out that I wasted a lot of time at a school club that I didn\'t enjoy, and how I could instead focus on what could make me stand out. He used his experience applying for jobs to help me build my own coding project, which made my application stand out so much more.',
    authorName: 'Justin',
    authorCollege: 'Cornell University',
    chineseCollege: <p className='tracking-wider'>康奈尔大学</p>,
    chineseText: <p className='tracking-wider'>Kenton让我意识到我在一个我根本不喜欢的社团浪费很多时间，并告诉我我可以把这些时间花在更有实际价值的事上。他用他自己多次申请实习的经历去教我编写了我自己的网站，是我的申请材料更能脱颖而出。</p>
  },
  {
    authorImg: BlankPerson,
    authorText: 'Tristan was a great help when it came to helping me narrow down essay ideas, and being an encouraging sound board for taking risks and being creative when it came to writing!',
    authorName: 'Sophie',
    authorCollege: 'Northwestern University',
    chineseCollege: <p className='tracking-wider'>西北大学</p>,
    chineseText: <p className='tracking-wider'>Tristan在我选择作文题目上帮了大忙, 他给了我很多鼓励去在写作上更大胆的展示自己。</p>
  },
  {
    authorImg: BlankPerson,
    authorText: 'Tristan carefully read through my application and offered precise and invaluable advice. I wholeheartedly recommend him to anyone pursuing guidance for their work.',
    authorName: 'Wendy',
    authorCollege: 'University of Texas, Austin',
    chineseCollege: <p className='tracking-wider'>德州大学奥斯汀分校</p>,
    chineseText: <p className='tracking-wider'>Tristan仔细地审读我的申请资料，并给了我很多一针见血的建议。我非常推荐任何学生去找Tristan咨询大学申请。</p>
  },
  {
    authorImg: BlankPerson,
    authorText: 'Tristan was very helpful with editing my college application. I am now attending UCLA so clearly his editing worked. :)',
    authorName: 'Josua',
    authorCollege: 'University of California, Los Angeles',
    chineseCollege: <p className='tracking-wider'>加州大学洛杉矶分校</p>,
    chineseText: <p className='tracking-wider'>Tristan在我的转学申请书上给了很多指导，我现在能够在我UCLA读书很多都是他的功劳。：）</p>
  },
]

export const advantages = [
  {
    id: 1,
    title: 'Accessible Anywhere',
    titleZh: <p className='tracking-widest'>随处可及</p>,
    icon: Imac,
    content: <p>Our services are <strong>completely virtual</strong>, so you can log on from home, school, or your favorite café. This saves us the cost of renting offices, and <strong>saves you countless trips!</strong></p>,
    contentZh: <p className='tracking-wider text-lg'>我们的服务将完全通过<strong>线上会议</strong>进行, 您可以从家中或任何方便的地方进行线上咨询. 这不仅让我们能够剩下办公室的房租去为您提供更物超所值的服务，同时也让您能够<strong>更方便的进行咨询</strong>。</p>,
    footnote: null,
    footnoteZh: null
  },
  {
    id: 2,
    title: 'More Bang For Your Buck',
    titleZh: <p className='tracking-widest'>诚实的价格</p>,
    icon: Coin,
    content: <p>In the Bay Area, typical comprehensive college application services can easily cost $10000 per year.* Assuming 3 years' worth of consulting and 20 sessions per year, a single session can cost you $500. <strong>Leaps halves this price</strong> at $4880 per year and $249.99 per individual session by not having to rent out a physical office and devote resources on actually helping students.</p>,
    contentZh: <p className='tracking-wider text-lg'>在美国旧金山湾区，完整的大学咨询至少会在一万美金每年左右。* 假设您在3年中每年咨询20次，那么您单次咨询的费用将为至少五百美金. <strong>在跃升我们提供将近一半的价格</strong>， 完整的套餐每年最高只需美元4880，而单次咨询只需要美元249.99。通过线上咨询的方式，我们将办公室的租金剩下来，将您所有的支付全部用在最大程度地帮助学生完成他们的目标。</p>,
    footnote: "*Statistic from Bay Area College Consulting FAQ.",
    footnoteZh: <p className='tracking-wider'>*数据来源于湾区大学咨询官网。</p>
  },
  {
    id: 3,
    title: 'No Frills',
    titleZh: <p className='tracking-widest'>没有套路</p>,
    icon: Healthcare,
    content: <p>At Leaps, you are guaranteed transparency and flexibility. You get the <strong>high-quality service</strong> and <strong>actionable advice</strong> that you pay for. No sugarcoated guarantees, fancy packages, or hidden fees.</p>,
    contentZh: <p className='tracking-wider text-lg'>在跃升，我们承诺提供<strong>最透明实际的高质量</strong>服务。我们会诚实地通过您的目标和需求去进行建议，不会有虚假的“保送”，摸棱两可的套餐，或隐藏起来的额外费用。</p>,
    footnote: null,
    footnoteZh: null
  },
]

export const categoryTitleInfo = {
  'all': "Here's what we offer. For your first meeting, we recommend a free General Consultation session. Click the tabs below to learn more about our services and packages!",
  'hourly sessions': 'Hour-long online meetings dedicated to a goal of your choice. An economical choice for independent students who are about to apply to colleges soon.',
  'packages': 'A tailored long-term plan. These have a higher per-hour rate than individual sessions. This is because of the additional research we will do outside of meetings to create the best strategy for you!'
}

export const categoryTitleInfoZh = {
  'all': '跃升提供以下精品服务。所有客户可享受一次免费初步咨询，让我们能为您制定专属升学计划。点击副标题了解单次咨询和套餐的区别！',
  'hourly sessions': '精品服务是专注于您选择的一个目标的一小时在线咨询和辅导。对于那些非常独立且即将申请的学生来说是一个更经济实惠选择。',
  'packages': '一个套餐是根据您的目标和情况量身定制的长期计划。我们坦诚，套餐的每小时费用较高，这是因为我们在会议之外额外投入了更多的时间。这些额外时间会被用学生以及目标学校调查，时间规划，和设定长短期里程碑。'
}