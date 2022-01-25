// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking')
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all')
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    conversation: path(ROOTS_DASHBOARD, '/chat/:conversationKey')
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    newUser: path(ROOTS_DASHBOARD, '/user/new'),
    editById: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
    account: path(ROOTS_DASHBOARD, '/user/account')
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),    
    motocycle: path(ROOTS_DASHBOARD, '/e-commerce/motocycle'),    
    motocyclegear: path(ROOTS_DASHBOARD, '/e-commerce/motocyclegear'),    
    motocycleparts: path(ROOTS_DASHBOARD, '/e-commerce/motocycleparts'),
    product: path(ROOTS_DASHBOARD, '/e-commerce/product/:name'),
    productById: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    newProduct: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    editById: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    invoice: path(ROOTS_DASHBOARD, '/e-commerce/invoice')
  },
  usedeCommerce: {
    root: path(ROOTS_DASHBOARD, '/used-e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/used-e-commerce/shop'),   
    motocycle: path(ROOTS_DASHBOARD, '/used-e-commerce/motocycle'),    
    motocyclegear: path(ROOTS_DASHBOARD, '/used-e-commerce/motocyclegear'),  
    motocycleparts: path(ROOTS_DASHBOARD, '/used-e-commerce/motocycleparts'),
    product: path(ROOTS_DASHBOARD, '/used-e-commerce/product/:name'),
    productById: path(ROOTS_DASHBOARD, '/used-e-commerce/product/nike-air-force-1-ndestrukt'),
    list: path(ROOTS_DASHBOARD, '/used-e-commerce/list'),
    newProduct: path(ROOTS_DASHBOARD, '/used-e-commerce/product/new'),
    editById: path(ROOTS_DASHBOARD, '/used-e-commerce/product/nike-blazer-low-77-vintage/edit'),
    checkout: path(ROOTS_DASHBOARD, 'used-e-commerce/checkout'),
    invoice: path(ROOTS_DASHBOARD, '/used-e-commerce/invoice')
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    Motocycle: path(ROOTS_DASHBOARD, '/blog/Motocycle'),    
    Motocycleparts: path(ROOTS_DASHBOARD, '/blog/Motocycleparts'),
    Motocyclearticle: path(ROOTS_DASHBOARD, '/blog/Motocyclearticle'),
    post: path(ROOTS_DASHBOARD, '/blog/post/:title'),
    postById: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
    newPost: path(ROOTS_DASHBOARD, '/blog/new-post')
  },
  board: {
    root: path(ROOTS_DASHBOARD, '/board'),
    posts: path(ROOTS_DASHBOARD, '/board/posts'),
    motocycle: path(ROOTS_DASHBOARD, '/board/Motocycle'),    
    motocyclefix: path(ROOTS_DASHBOARD, '/board/Motocyclefix'),
    motocyclepicture: path(ROOTS_DASHBOARD, '/board/Motocyclepicture'),
    free: path(ROOTS_DASHBOARD, '/board/free'),
    post: path(ROOTS_DASHBOARD, '/board/post/:title'),
    postById: path(ROOTS_DASHBOARD, '/board/post/apply-these-7-secret-techniques-to-improve-event'),
    newPost: path(ROOTS_DASHBOARD, '/board/new-post')
  }
};

export const PATH_DOCS = 'https://naver.com';
