const menuList = [{
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'el-icon-menu', // 图标名称
    isPublic:true
  },
  {
    title: '商品',
    icon: 'el-icon-s-shop',
    key: '/goods',
    children: [ // 子菜单列表
      {
        title: '品类管理',
        key: '/category',
        icon: 'el-icon-s-marketing',
      },
      {
        title: '商品管理',
        key: '/product',
        icon: 'el-icon-shopping-cart-full'
      },
    ]
  },
  {
    title: '用户',
    icon: 'el-icon-user',
    key: '/users',
    children: [ // 子菜单列表
      {
        title: '用户管理',
        key: '/user',
        icon: 'el-icon-s-custom'
      },
      {
        title: '权限管理',
        key: '/role',
        icon: 'el-icon-setting'
      },
    ]
  },

  {
    title: '订单',
    icon: 'el-icon-platform-eleme',
    key: '/orders',
    children: [ // 子菜单列表
      {
        title: '订单管理',
        key: '/order',
        icon: 'el-icon-phone-outline'
      },
    ]
  },
]
  
  export default menuList


