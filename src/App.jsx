import { lazy, Suspense, useEffect, useState } from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  Circle,
  Cloud,
  Database,
  Image,
  Layers,
  Lock,
  MessageCircle,
  Minus,
  Plus,
  Shield,
  Sparkles,
  Star,
  X,
  Zap,
} from 'lucide-react';
import BlurText from './BlurText';
import StarBorder from './StarBorder';
import cardBook from './assets/card-book-dark.png';
import cardFrame from './assets/card-frame-dark.png';
import cardHourglass from './assets/card-hourglass-dark.png';
import cardInfinity from './assets/card-infinity-dark.png';
import cardLotus from './assets/card-lotus-dark.png';
import cardMountain from './assets/card-mountain-dark.png';
import cardStar from './assets/card-star-dark.png';
import cardTree from './assets/card-tree-dark.png';
import homeAlbum from './assets/home-album.png';
import homeEpitaph from './assets/home-epitaph.png';
import homePrivate from './assets/home-private.png';
import homeShare from './assets/home-share.png';
import homeStone from './assets/home-stone.png';
import homeTribute from './assets/home-tribute.png';

const serviceCardImages = [
  cardMountain,
  cardBook,
  cardHourglass,
  cardFrame,
  cardTree,
  cardInfinity,
];

const portfolioCardImages = [
  cardTree,
  cardMountain,
  cardBook,
  cardFrame,
  cardLotus,
  cardStar,
];

const Galaxy = lazy(() => import('./Galaxy'));
const SplashCursor = lazy(() => import('./SplashCursor'));

const memorialFeatureImages = [
  homeStone,
  homeAlbum,
  homeEpitaph,
  homeTribute,
  homeShare,
  homePrivate,
];

const content = {
  zh: {
    navItems: ['产品', '服务', '案例', '公益方案', '问答'],
    headerAction: '免费创建',
    hero: {
      eyebrow: '云端电子纪念墓园',
      title: '云端立碑，思念永续',
      text: '突破地域与时光的界限，打造永久数字纪念空间，让牵挂随时可抵达。山河相隔，云端相见；记忆不褪色，思念有归处。',
      primary: '创建专属电子墓碑',
      secondary: '浏览云端纪念墓园',
    },
    about: {
      eyebrow: '关于平台',
      title: '数字留存一生，温情跨越岁岁年年。',
      text: '我们搭建线上云端纪念载体，不是替代线下的告别，而是为牵挂多一处长久安放的角落。影像留住音容，文字封存故事，每一次驻足缅怀，都是与故人温柔的重逢。',
      cta: '了解云端纪念',
    },
    coreIntro: {
      eyebrow: '核心能力',
      title: '从建碑、归档到亲友追思，构成完整纪念体验。',
      text: '围绕电子石碑、影像故事、云端权限和线上祭扫，让一座纪念空间可以被创建、守护、分享与长久保存。',
      cta: '预览墓碑样式',
    },
    coreFeatures: [
      {
        icon: Bot,
        title: '只需 5 步建碑',
        label: '智能纪念档案',
        text: '填写基础信息，选择肃穆石碑模板，撰写墓志铭与生平，上传影像语音，再设置空间权限。',
      },
      {
        icon: Database,
        title: '永久云端归档',
        label: '加密保存层',
        text: '照片、视频、文字、语音和家属挽词多重备份，减少资料丢失、损坏和时间损耗。',
      },
      {
        icon: MessageCircle,
        title: '线上祭扫追思',
        label: '纪念互动流',
        text: '献花、点烛、祈福寄语、祭扫记录和亲友留言被安静保存在同一处纪念主页。',
      },
    ],
    tagLine: ['免费创建碑位', '开启私密模式', '生成分享海报', '查看祭扫记录'],
    servicesIntro: {
      eyebrow: 'AI 服务模块',
      title: '六大服务板块，支撑一个安静稳定的线上纪念平台。',
      text: '内容、隐私、视觉、云端与运营被拆成清晰模块，既有技术秩序，也保留人文温度。',
      cta: '获取全套建站方案',
    },
    services: [
      ['产品策略系统', '深耕线上纪念赛道，搭建完整纪念产品信息架构，梳理家属从建碑到缅怀的全路径，兼顾人文温度与长期稳定运营。', Layers],
      ['AI 内容工作室', '智能整理逝者生平履历和人生故事，辅助润色温柔克制的纪念文案、墓志铭与挽词，降低家属提笔书写的情绪负担。', Sparkles],
      ['私密云端架构', '专属私有云存储方案，分级账号权限管控，多副本备份高清照片、影像、语音素材，并进行加密归档。', Cloud],
      ['品牌视觉系统', '统一深色静谧科技视觉语言，提供墓碑页面、祭扫组件、官网页面设计规范，适配移动端与电脑端展示。', Image],
      ['数据安全模型', '支持私密墓园、邀请码访问、多家庭成员分级协作权限，并通过内容审核守护每一份私人缅怀。', Shield],
      ['上线支持体系', '完善上线运营指导、SEO 内容结构、用户转化路径和远程祭扫传播方案，降低平台冷启动难度。', Zap],
    ],
    serviceTags: ['规划完整线上纪念生态', 'AI 辅助纪念文字', '加密私有云存档', '肃穆视觉体系', '多重隐私权限'],
    portfolioIntro: {
      eyebrow: '案例展示',
      title: '六类云端纪念产品形态，覆盖不同家庭与公共缅怀场景。',
      cta: '查看全部墓园',
    },
    portfolio: [
      ['家族云端纪念', '多人协作式家族纪念馆，支持几代人共同上传老照片、家族往事，划分长辈专属碑位，亲友凭邀请码共同追思。'],
      ['静默墓园门户', '开放式公共云端墓园广场，按时间、地域分类陈列公开纪念墓碑，适合公益缅怀、名人纪念和集体追思活动。'],
      ['AI 故事档案', '上传零散生活素材即可整理人生时间线，生成完整回忆录，永久留存逝者的经历、性格与温暖瞬间。'],
      ['传承主页系统', '单人专属电子墓碑主页，自定义石碑样式、碑文、相册、留言区，生成永久访问链接分享亲友。'],
      ['亲友追思社区', '温情文字分享社区，家属可匿名发布怀念短文与生活回忆，内容严格审核，保持安静纯粹。'],
      ['私密记忆库', '完全隐藏式私人纪念空间，仅创建者本人可见，存储不愿公开的影像、寄语和私密资料。'],
    ],
    supportIntro: {
      eyebrow: '交付优势',
      title: '为什么选择线上电子墓碑。',
      text: '它不替代真实墓园，却能让思念跨越山海、节气与天气，在任何一个需要怀念的时刻被安静抵达。',
    },
    supportCards: [
      ['永久留存', '云端加密存储照片、视频、文字，多重备份长期保存，跨越数十年完整传承给后代。', Database],
      ['隔空寄思', '不受距离、节气、天气约束，打开手机即可献花、点烛、留言，异地亲友也能表达思念。', Cloud],
      ['隐私掌控', '公开墓园、亲友专属、私密档案三种权限自由切换，尊重不同家庭的情感边界。', Lock],
    ],
    brandIntro: {
      eyebrow: '平台理念',
      title: '生死有界，思念无界。',
    },
    brandAdvantages: [
      ['不是替代告别', '我们搭建线上云端纪念载体，不是替代线下告别，而是为牵挂多一处长久安放的角落。', Circle],
      ['温柔重逢', '不用奔赴远方，不必受时间约束；影像留住音容，文字封存故事，每一次驻足都是温柔重逢。', Sparkles],
      ['克制纯粹', '坚持庄重纯粹的设计底线，无广告、无弹窗、无商业化诱导，保持安静的缅怀环境。', Shield],
      ['代代相传', '让记忆跨越岁月，将家族往事、生平故事、亲友留言和祭扫痕迹代代保存。', Bot],
    ],
    brandCta: '查看我的纪念库',
    integrationIntro: {
      eyebrow: '创建墓碑',
      title: '只需 5 步，搭建专属数字纪念碑。',
    },
    createTags: ['填写逝者基础信息', '挑选肃穆石碑模板', '撰写墓志铭与生平', '上传影像语音素材', '设置空间隐私权限', '生成分享海报'],
    pricingIntro: {
      eyebrow: '公益服务方案',
      title: '网页不以盈利为目标，保留纯粹缅怀空间。',
      cta: '了解服务说明',
    },
    plans: [
      {
        name: '个人纪念',
        price: '免费创建',
        features: ['创建专属电子墓碑', '基础相册与生平介绍', '线上献花点烛', '公开或私密权限'],
      },
      {
        name: '家族共建',
        price: '协作守护',
        features: ['亲友邀请码访问', '多人上传回忆素材', '家族故事归档', '祭扫记录长期留存'],
      },
      {
        name: '公益墓园',
        price: '合作对接',
        features: ['公共纪念墓园展示', '内容审核机制', '集体追思活动', '平台合作与服务咨询'],
      },
    ],
    choosePlan: '了解方案',
    processIntro: {
      eyebrow: '工作流程',
      title: '从需求梳理到网站正式运营，一站式搭建云端纪念平台。',
    },
    processSteps: [
      ['01', '发现', '深度梳理线上纪念业务逻辑、用户情感需求、影像文字内容资产，明确平台差异化人文定位。'],
      ['02', '设计', '定制统一深色静谧品牌视觉系统，标准化墓碑、祭扫、社区全套 UI 组件。'],
      ['03', '上线', '完成全站响应式开发、页面加载、隐私安全检测，交付完整可运营网站。'],
    ],
    processCta: '启动流程',
    teamIntro: {
      eyebrow: '纪念主页',
      title: '独立专属云端纪念空间，完整承载全部回忆。',
    },
    teamMembers: [
      ['石碑视觉', '居中对称，庄重肃穆'],
      ['生活相册', '照片视频长期留存'],
      ['墓志铭', 'AI 辅助温柔润色'],
      ['祭扫区', '献花点烛自动记录'],
      ['分享链接', '远方亲友共同追思'],
      ['私密模式', '仅本人或亲友可见'],
    ],
    comparisonIntro: {
      eyebrow: '对比',
      title: '云端纪念，让传统缅怀多一处长久安放。',
    },
    comparisonHead: ['AETERNA AI', '普通模板页'],
    comparisonRows: [
      ['照片、视频、文字多重备份', true, false],
      ['远程献花点烛与留言', true, false],
      ['公开、亲友、私密权限切换', true, false],
      ['手机和电脑随时访问', true, true],
      ['完整祭扫记录长期留存', true, false],
    ],
    testimonialsIntro: {
      eyebrow: '客户评价',
      title: '被正在打造安静、重数据服务的团队信任。',
    },
    testimonials: [
      ['页面很克制，但科技感足够强，客户能很快理解我们的云端纪念服务。', '顾问型客户'],
      ['从品牌视觉到功能模块都更像一个真正的 SaaS 产品，而不是单页展示。', '产品负责人'],
      ['暗色玻璃体系让服务显得更稳定，也更适合我们强调隐私和长期保存。', '创始团队'],
    ],
    faqIntro: {
      eyebrow: '常见问题',
      title: '下一轮迭代前，你可能会关心的问题。',
    },
    faqs: [
      ['这个版本是真实后端吗？', '当前是可运行的前端落地页基础版，后续可以继续接入登录、数据库、对象存储和支付系统。'],
      ['可以继续加强电子墓碑纪念属性吗？', '可以。现在是 AI SaaS 科技代理视觉，业务文案仍保留云端纪念方向，后续可以继续加入墓园、建碑、祭扫和亲友权限细节。'],
      ['粒子和图片是真实素材吗？', '当前使用 CSS 生成玻璃卡片、渐变图像和装饰 cutout，不依赖版权图片素材。'],
      ['是否适合手机端？', '是。布局按 mobile-first 编写，PC 端扩展为多列网格，手机端保持纵向模块顺序。'],
    ],
    bottomCta: {
      title: '记忆不褪色，思念有归处。',
      cta: '免费创建碑位',
    },
    commitments: [
      '全站无广告、无弹窗、无商业化诱导，保持纯粹缅怀环境',
      '用户素材多重加密云备份，承诺永久存储不主动删除',
      '严格内容审核机制，杜绝恶搞、低俗、违规纪念内容',
      '完整隐私保护协议，绝不泄露家属私人影像与文字资料',
    ],
    footerGroups: ['平台承诺', '纪念功能', '服务支持', '协议说明'],
    footerLinks: ['隐私协议', '内容规范', '数据存储说明', '联系客服'],
    copyright: '©2026 云端纪｜电子云端纪念墓园 版权所有',
  },
  en: {
    navItems: ['Product', 'Services', 'Works', 'Access', 'FAQ'],
    headerAction: 'Create free',
    hero: {
      eyebrow: 'AI Memorial SaaS Agency',
      title: 'Build calm digital memorial products with AI-grade clarity.',
      text: 'Glassmorphism UI, AI content workflows, cloud archive structure and long-term permission systems for memorial, legacy and private data products.',
      primary: 'Create memorial',
      secondary: 'Browse garden',
    },
    about: {
      eyebrow: 'About',
      title: 'A modular AI studio for quiet, long-term digital legacy products.',
      text: 'We combine memorial services, AI content operations, cloud preservation and premium frontend design into a lightweight product system.',
      cta: 'Learn more',
    },
    coreIntro: {
      eyebrow: 'Core Features',
      title: 'Three core layers, one unified product experience.',
      text: 'Every card follows the same radius, spacing and glass hierarchy so the page can evolve into a real SaaS product.',
      cta: 'Open product map',
    },
    coreFeatures: [
      { icon: Bot, title: 'AI Memorial Builder', label: 'Smart profile engine', text: 'Generate memorial page structures from biographies, media and family letters.' },
      { icon: Database, title: 'Permanent Archive', label: 'Encrypted storage layer', text: 'Design backups, permissions and maintenance paths for long-term preservation.' },
      { icon: MessageCircle, title: 'Family Interaction', label: 'Tribute activity stream', text: 'Bring flowers, candles, messages and shared stories into one calm space.' },
    ],
    tagLine: ['AI PROFILE', 'PRIVATE CLOUD', 'FAMILY ACCESS', 'LONG-TERM ARCHIVE'],
    servicesIntro: {
      eyebrow: 'AI Services',
      title: 'Design, automate and launch a premium cloud memorial platform.',
      text: 'Strategy, visual systems, frontend, cloud and growth are delivered through one modular framework.',
      cta: 'Request service deck',
    },
    services: [
      ['Strategy System', 'Information architecture, business model and user journey planning.', Layers],
      ['AI Content Studio', 'Life story editing, tone refinement and memorial copy assistance.', Sparkles],
      ['Private Cloud', 'Accounts, permissions, backups and object storage architecture.', Cloud],
      ['Visual Identity', 'Dark tech brand visuals, component systems and landing pages.', Image],
      ['Data Security', 'Private memorials, invite access and family collaboration roles.', Shield],
      ['Growth Launch', 'Launch operations, SEO structure and conversion optimization.', Zap],
    ],
    serviceTags: ['UX System', 'AI CMS', 'Cloud API', 'Security', 'Growth'],
    portfolioIntro: {
      eyebrow: 'Portfolio',
      title: 'Showcase systems for premium AI memorial brands.',
      cta: 'See all cases',
    },
    portfolio: [
      ['Family Cloud Memorial', 'A collaborative family hall where relatives upload photos, stories and legacy records through invited access.'],
      ['Silent Garden Portal', 'A public cloud memorial square for open tributes, collective remembrance and公益-style memorial events.'],
      ['AI Story Archive', 'A life timeline system that turns scattered photos and text into a structured biography.'],
      ['Legacy Profile System', 'A complete single memorial homepage with stone style, epitaph, album, messages and tribute actions.'],
      ['Tribute Community', 'A quiet writing space where families share memory notes with careful content review.'],
      ['Private Memory Vault', 'A fully hidden archive for private media, letters and words that should not be publicly displayed.'],
    ],
    supportIntro: {
      eyebrow: 'Support Advantage',
      title: 'High-end delivery support for teams moving from idea to SaaS.',
      text: 'From brand positioning to launch validation, every layer follows the same calm technical standard.',
    },
    supportCards: [
      ['Launch faster', 'Shorten launch cycles with modular pages and automated content workflows.', Zap],
      ['Scale securely', 'Permissions, backups, archives and audits are planned from the beginning.', Lock],
      ['Design consistently', 'Keep the interface premium with one glass card, button and grid system.', Layers],
    ],
    brandIntro: {
      eyebrow: 'Brand Advantage',
      title: 'A calm operating system for premium digital memory brands.',
    },
    brandAdvantages: [
      ['Product clarity', 'Clarify service boundaries, conversion goals and user segments before visual polish.', Circle],
      ['Premium dark UI', 'Use neutral dark surfaces, glass layers and low-saturation cool light for a restrained tech brand.', Sparkles],
      ['AI workflow', 'Connect memorial content, story generation, media archiving and family interaction to automation.', Bot],
      ['Trust architecture', 'Build trust around privacy, preservation, family collaboration and content review.', Shield],
    ],
    brandCta: 'Start planning',
    integrationIntro: {
      eyebrow: 'Create Memorial',
      title: 'Build a dedicated digital memorial in five simple steps.',
    },
    createTags: ['Basic profile', 'Choose stone style', 'Write epitaph', 'Upload media', 'Set privacy', 'Generate share poster'],
    pricingIntro: {
      eyebrow: 'Non-profit Access',
      title: 'The website is not designed for profit, but for a pure memorial environment.',
      cta: 'Read service notes',
    },
    plans: [
      { name: 'Personal Memorial', price: 'Free to create', features: ['Dedicated digital stone', 'Basic album and biography', 'Online flowers and candles', 'Public or private access'] },
      { name: 'Family Co-build', price: 'Shared care', features: ['Invitation access', 'Family media uploads', 'Legacy story archive', 'Long-term tribute records'] },
      { name: 'Public Garden', price: 'Partner support', features: ['Public memorial garden', 'Content review system', 'Collective tribute events', 'Service consultation'] },
    ],
    choosePlan: 'Choose plan',
    processIntro: {
      eyebrow: 'Process',
      title: 'A simple three-step path from idea to launch.',
    },
    processSteps: [
      ['01', 'Discover', 'Map the business, users, content assets and hero conversion goal.'],
      ['02', 'Design', 'Build the visual system, component rules and full long-scroll structure.'],
      ['03', 'Launch', 'Complete responsive development, performance checks and iteration planning.'],
    ],
    processCta: 'Start workflow',
    teamIntro: {
      eyebrow: 'Team',
      title: 'A dedicated cloud memorial homepage that carries every memory.',
    },
    teamMembers: [
      ['Stone Visual', 'Centered and solemn'],
      ['Life Album', 'Photos and videos preserved'],
      ['Epitaph', 'AI-assisted gentle writing'],
      ['Tribute Area', 'Flowers and candles recorded'],
      ['Share Link', 'Invite distant relatives'],
      ['Private Mode', 'Visible only to selected people'],
    ],
    comparisonIntro: {
      eyebrow: 'Comparison',
      title: 'What changes when your website is built as a product system.',
    },
    comparisonHead: ['AETERNA AI', 'Template Page'],
    comparisonRows: [
      ['Unified premium visual system', true, false],
      ['AI content workflow', true, false],
      ['Long-term privacy architecture', true, false],
      ['Mobile-first premium responsive design', true, true],
      ['Scalable SaaS modules', true, false],
    ],
    testimonialsIntro: {
      eyebrow: 'Testimonials',
      title: 'Trusted by founders building quiet, data-rich digital services.',
    },
    testimonials: [
      ['The page is restrained, but the technology signal is strong enough for customers to understand our cloud memorial service.', 'Advisory client'],
      ['The visual system and functional modules feel like a real SaaS product, not just a single showcase page.', 'Product lead'],
      ['The dark glass system makes the service feel stable and aligned with privacy and long-term preservation.', 'Founder team'],
    ],
    faqIntro: {
      eyebrow: 'FAQ',
      title: 'Questions before the next iteration.',
    },
    faqs: [
      ['Is this connected to a real backend?', 'This is a runnable frontend landing page. Login, database, object storage and payment can be added next.'],
      ['Can it become more memorial-focused?', 'Yes. The current direction is AI SaaS tech agency, while the copy still keeps the cloud memorial business direction.'],
      ['Are the particles and images copyrighted assets?', 'No. The glass cards, gradients and decorative cutouts are generated with CSS instead of external image assets.'],
      ['Is it suitable for mobile?', 'Yes. The layout is mobile-first and expands into multi-column grids on larger screens.'],
    ],
    bottomCta: {
      title: 'Memories do not fade. Longing deserves a place to return.',
      cta: 'Create a free memorial',
    },
    commitments: [
      'No ads, popups or commercial pressure, keeping the memorial environment pure',
      'User materials are encrypted and backed up in the cloud for long-term preservation',
      'Strict content review blocks vulgar, malicious or inappropriate memorial content',
      'Privacy rules protect family images, letters and personal materials',
    ],
    footerGroups: ['Commitment', 'Features', 'Support', 'Policies'],
    footerLinks: ['Privacy', 'Content rules', 'Storage notes', 'Contact'],
    copyright: '©2026 Cloud Memorial Garden. All rights reserved.',
  },
};

const logos = ['AI', 'Cloud', 'Vault', 'CMS', 'CRM', 'S3', 'API', 'SEO'];

const getTitleAnimationMode = (text) =>
  /[\u4e00-\u9fff]/.test(text) ? 'letters' : 'words';

function SectionIntro({ eyebrow, title, text, cta }) {
  const animateBy = getTitleAnimationMode(title);

  return (
    <div className="sectionIntro">
      <span className="eyebrow">{eyebrow}</span>
      <BlurText
        text={title}
        animateBy={animateBy}
        delay={animateBy === 'letters' ? 22 : 75}
        direction="top"
        className="sectionTitle"
      />
      {text && <p>{text}</p>}
      {cta && <button className="pillButton">{cta}</button>}
    </div>
  );
}

function DemoScreen({ variant = 'one', image, label = '' }) {
  return (
    <div className={`demoScreen ${variant}`}>
      {image && <img src={image} alt={label} loading="lazy" decoding="async" />}
      <span />
      <span />
      <span />
      <i />
    </div>
  );
}

function VisualTile({ label, index, image }) {
  const title = Array.isArray(label) ? label[0] : label;
  const description = Array.isArray(label) ? label[1] : '';

  return (
    <article className={`visualTile tile${(index % 6) + 1}`}>
      {image && <img src={image} alt="" loading="lazy" decoding="async" />}
      <span>{title}</span>
      {description && <p>{description}</p>}
    </article>
  );
}

function App() {
  const [language, setLanguage] = useState('zh');
  const [openFaq, setOpenFaq] = useState(0);
  const [ambientEffectsEnabled, setAmbientEffectsEnabled] = useState(false);
  const t = content[language];
  const nextLanguage = language === 'zh' ? 'en' : 'zh';

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const isCoarsePointer = window.matchMedia?.('(pointer: coarse)').matches;

    if (prefersReducedMotion || isCoarsePointer) return undefined;

    const enable = () => setAmbientEffectsEnabled(true);
    const timer = window.setTimeout(enable, 900);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`app ${language === 'zh' ? 'zhLayout' : 'enLayout'}`}>
      {ambientEffectsEnabled && (
        <Suspense fallback={null}>
          <Galaxy
            className="globalGalaxy"
            mouseInteraction={false}
            mouseRepulsion={false}
            density={0.72}
            glowIntensity={0.18}
            saturation={0.38}
            hueShift={205}
            starSpeed={0.28}
            speed={0.45}
            twinkleIntensity={0.18}
            rotationSpeed={0.018}
            transparent
          />
          <SplashCursor
            RAINBOW_MODE={false}
            COLOR="#8edcff"
            SPLAT_RADIUS={0.13}
            SPLAT_FORCE={3200}
            DENSITY_DISSIPATION={4.8}
            COLOR_UPDATE_SPEED={5}
          />
        </Suspense>
      )}
      <header className="siteHeader">
        <nav className="shell navBar" aria-label={language === 'zh' ? '主导航' : 'Primary navigation'}>
          <a href="#home" className="logoMark">
            AETERNA<span>AI</span>
          </a>
          <div className="navLinks">
            {t.navItems.map((item, index) => (
              <a key={item} href={['#product', '#services', '#works', '#pricing', '#faq'][index]}>
                {item}
              </a>
            ))}
          </div>
          <div className="headerControls">
            <button
              className="languageToggle"
              type="button"
              onClick={() => setLanguage(nextLanguage)}
              aria-label={language === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <a className="headerAction" href="#pricing">
              {t.headerAction}
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="heroSection" id="home">
          <div className="shell heroShell">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <BlurText
              text={t.hero.title}
              animateBy={getTitleAnimationMode(t.hero.title)}
              delay={language === 'zh' ? 34 : 95}
              direction="top"
              stepDuration={0.42}
              className="heroTitle"
            />
            <p>{t.hero.text}</p>
            <div className="heroActions">
              <StarBorder
                as="a"
                className="starPill"
                color="#8edcff"
                speed="7s"
                thickness={1}
                href="#services"
              >
                {t.hero.primary} <ArrowRight size={18} />
              </StarBorder>
              <a className="pillButton ghost" href="#works">
                {t.hero.secondary}
              </a>
            </div>
          </div>
        </section>

        <section className="pageSection" id="product">
          <div className="shell">
            <SectionIntro
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              text={t.about.text}
              cta={t.about.cta}
            />
          </div>
        </section>

        <section className="pageSection">
          <div className="shell">
            <SectionIntro
              eyebrow={t.coreIntro.eyebrow}
              title={t.coreIntro.title}
              text={t.coreIntro.text}
              cta={t.coreIntro.cta}
            />
            <div className="threeGrid">
              {t.coreFeatures.map(({ icon: Icon, title, label, text }, index) => (
                <article className="glassCard featureCard" key={title}>
                  <div className="iconCircle">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <DemoScreen variant={`core${index + 1}`} />
                  <small>{label}</small>
                </article>
              ))}
            </div>
            <div className="tagLine">
              {t.tagLine.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="pageSection" id="services">
          <div className="shell">
            <div className="outerGlass">
              <SectionIntro
                eyebrow={t.servicesIntro.eyebrow}
                title={t.servicesIntro.title}
                text={t.servicesIntro.text}
                cta={t.servicesIntro.cta}
              />
              <div className="serviceGrid">
                {t.services.map(([title, text, Icon], index) => (
                  <article className="serviceCard" key={title}>
                    <div className="iconCircle">
                      <Icon size={22} />
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <DemoScreen
                      variant={`service${index + 1}`}
                      image={serviceCardImages[index]}
                      label={title}
                    />
                  </article>
                ))}
              </div>
              <div className="pillList">
                {t.serviceTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
                </div>
        </section>

        <section className="pageSection" id="works">
          <div className="shell">
            <SectionIntro
              eyebrow={t.portfolioIntro.eyebrow}
              title={t.portfolioIntro.title}
              cta={t.portfolioIntro.cta}
            />
            <div className="portfolioGrid">
              {t.portfolio.map((item, index) => (
                <VisualTile
                  key={Array.isArray(item) ? item[0] : item}
                  label={item}
                  index={index}
                  image={portfolioCardImages[index]}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="pageSection">
          <div className="shell">
            <SectionIntro
              eyebrow={t.supportIntro.eyebrow}
              title={t.supportIntro.title}
              text={t.supportIntro.text}
            />
            <div className="threeGrid">
              {t.supportCards.map(([title, text, Icon]) => (
                <article className="glassCard simpleCard" key={title}>
                  <div className="iconCircle">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
          </div>
        </div>
      </section>

        <section className="pageSection">
          <div className="shell narrowShell">
            <SectionIntro
              eyebrow={t.brandIntro.eyebrow}
              title={t.brandIntro.title}
            />
            <div className="textStack">
              {t.brandAdvantages.map(([title, text, Icon], index) => (
                <article className="textCard" key={title}>
                  <Icon size={22} />
          <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  {index === t.brandAdvantages.length - 1 && (
                    <a className="pillButton small" href="#pricing">
                      {t.brandCta}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pageSection">
          <div className="shell">
            <SectionIntro
              eyebrow={t.integrationIntro.eyebrow}
              title={t.integrationIntro.title}
            />
            <div className="logoStrip">
              {(t.createTags || logos).map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="pageSection" id="pricing">
          <div className="shell">
            <SectionIntro
              eyebrow={t.pricingIntro.eyebrow}
              title={t.pricingIntro.title}
              cta={t.pricingIntro.cta}
            />
            <div className="pricingGrid">
              {t.plans.map((plan, index) => {
                const cardContent = (
                  <article className="priceCard" key={plan.name}>
                    <span>{plan.name}</span>
                    <strong>{plan.price}</strong>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <Check size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a className="pillButton full" href="#faq">
                      {t.choosePlan}
                    </a>
                  </article>
                );

                if (index !== 0) return cardContent;

                return (
                  <StarBorder
                    as="div"
                    className="starCard"
                    color="#8edcff"
                    speed="8s"
                    thickness={1}
                    key={plan.name}
                  >
                    {cardContent}
                  </StarBorder>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pageSection">
          <div className="shell">
            <SectionIntro
              eyebrow={t.processIntro.eyebrow}
              title={t.processIntro.title}
            />
            <div className="threeGrid">
              {t.processSteps.map(([number, title, text]) => (
                <article className="glassCard processCard" key={number}>
                  <span className="numberIcon">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="wideScreens">
              <DemoScreen variant="wideOne" />
              <DemoScreen variant="wideTwo" />
            </div>
            <div className="centerCta">
              <a className="pillButton" href="#faq">
                {t.processCta}
              </a>
            </div>
          </div>
        </section>

        <section className="pageSection">
          <div className="shell">
            <SectionIntro
              eyebrow={t.teamIntro.eyebrow}
              title={t.teamIntro.title}
            />
            <div className="teamGrid">
              {t.teamMembers.map(([name, role], index) => (
                <article className="teamCard" key={name}>
                  <div className={`avatar avatar${index + 1}`}>
                    <img
                      src={memorialFeatureImages[index]}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>{name}</h3>
                  <p>{role}</p>
                </article>
              ))}
            </div>
        </div>
        </section>

        <section className="pageSection">
          <div className="shell narrowShell">
            <SectionIntro
              eyebrow={t.comparisonIntro.eyebrow}
              title={t.comparisonIntro.title}
            />
            <div className="comparisonPanel">
              <div className="comparisonHead">
                {t.comparisonHead.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              {t.comparisonRows.map(([label, ours, template]) => (
                <div className="comparisonRow" key={label}>
                  <p>{label}</p>
                  <span className={ours ? 'ok' : 'no'}>{ours ? <Check /> : <X />}</span>
                  <span className={template ? 'ok' : 'no'}>
                    {template ? <Check /> : <X />}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pageSection">
          <div className="shell">
            <SectionIntro
              eyebrow={t.testimonialsIntro.eyebrow}
              title={t.testimonialsIntro.title}
            />
            <div className="threeGrid">
              {t.testimonials.map(([quote, name], index) => (
                <article className="reviewCard" key={name}>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p>“{quote}”</p>
                  <div className="reviewUser">
                    <div className={`miniAvatar avatar${index + 1}`} />
                    <span>{name}</span>
              </div>
            </article>
          ))}
            </div>
        </div>
      </section>

        <section className="pageSection" id="faq">
          <div className="shell narrowShell">
            <SectionIntro
              eyebrow={t.faqIntro.eyebrow}
              title={t.faqIntro.title}
            />
            <div className="faqStack">
              {t.faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                return (
                  <article className="faqItem" key={question}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      {question}
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </button>
                    {isOpen && <p>{answer}</p>}
                  </article>
                );
              })}
        </div>
        </div>
      </section>

        <section className="pageSection bottomCtaSection">
          <div className="shell">
            <StarBorder
              as="div"
              className="starPanel"
              color="#8edcff"
              speed="9s"
              thickness={1}
            >
              <div className="bottomCta">
                <BlurText
                  text={t.bottomCta.title}
                  animateBy={getTitleAnimationMode(t.bottomCta.title)}
                  delay={language === 'zh' ? 28 : 82}
                  direction="bottom"
                  className="bottomTitle"
                />
                <a className="pillButton" href="#pricing">
                  {t.bottomCta.cta}
                </a>
              </div>
            </StarBorder>
          </div>
        </section>
      </main>

      <footer className="footer">
        {t.commitments && (
          <div className="shell footerTrust">
            {t.commitments.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
        <div className="shell footerGrid">
          {t.footerGroups.map((group) => (
            <div key={group}>
              <h3>{group}</h3>
              <a href="#product">{t.footerLinks[0]}</a>
              <a href="#services">{t.footerLinks[1]}</a>
              <a href="#works">{t.footerLinks[2]}</a>
              <a href="#faq">{t.footerLinks[3]}</a>
        </div>
          ))}
        </div>
        {t.copyright && <p className="copyright">{t.copyright}</p>}
      </footer>
        </div>
  );
}

export default App;
