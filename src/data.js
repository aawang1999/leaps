import { FiFacebook, FiInstagram } from 'react-icons/fi'
import BlankPerson from './assets/img/blank-person.jpg'

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'Why Us?',
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
    name: '现在联系我们',
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
    zhAdvisorText: "Tristan毕业于Stanford University，获得计算机科学学士学位，并正在斯坦福大学攻读计算机科学与人机交互领域的硕士学位。最初他打算攻读文学，他在Palo Alto高中时参加了许多写作夏令营，比如著名的爱荷华青年作家工作室（Iowa Young Writers' Studio）。他对文章写作的热情和技巧使他多年来帮助了许多熟人处理他们的大学申请和文书。"
  },
  {
    advisorImg: BlankPerson,
    advisorName: 'Kenton',
    advisorText: "Kenton is on track to receive a B.S. in Computer Science from Northeastern University. Throughout his college years, he assumed two full-time co-op positions, working as a web developer at Commonwealth Financial Network and a software engineer at Poloniex. Considered a trustworthy mentor among his peers due to his experience, he has helped many friends with college and internship applications over the years.",
    zhAdvisorText: "Kenton即将毕业于Northeastern University计算机科学学士学位。在他大学的这几年里，Kenton曾在两个全职合作职位工作过：作为Commonwealth Financial Network的网页开发人员和作为Poloniex的软件工程师。他丰富的经验使他被同龄人以及学弟学妹们信赖，多年来帮助了许多朋友申请大学和实习。"
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
    authorText: 'Kenton helped me identify my reach, match, and safety schools. He was quick to identify the strengths and weaknesses of my application, which gave me a lot of clarity.',
    authorName: 'Danny',
    authorCollege: 'Carnegie Mellon University',
  },
  {
    authorImg: BlankPerson,
    authorText: 'Kenton pointed out that I wasted a lot of time at a school club that I didn\'t enjoy, and how I could instead focus on what could make me stand out. He used his experience applying for jobs to help me build my own coding project, which made my application stand out so much more.',
    authorName: 'Justin',
    authorCollege: 'Cornell University',
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