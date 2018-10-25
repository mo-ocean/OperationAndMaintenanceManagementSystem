export default {
    menus: [//菜单相关路由
        {
            key: '/app/dashboard/index', title: '首页',
            icon: '', component: 'Dashboard'
        },
        {
            key: '/app/clusterManage', title: '集群', icon: '',
            subs: [
                {
                    key: '/app/clusterManage/cluster', title: '集群',
                    icon: '', component: 'Cluster'
                },
                {
                    key: '/app/clusterManage/node', title: '节点管理',
                    icon: '', component: 'Node'
                },
            ]
        },
        {
            key: '/app/appManage', title: '应用管理', icon: '',
            subs: [
                {
                    key: '/app/appManage/appList', title: '应用列表',
                    icon: '', component: 'AppList'
                }
            ]
        },
        {
            key: '/app/ruleManage', title: '规则', icon: '',
            subs: [
                {
                    key: '/app/ruleManage/sharding', title: '分表分库',
                    icon: '', component: 'Sharding'
                },
                {
                    key: '/app/ruleManage/RWSplitting', title: '读写分离',
                    icon: '', component: 'RWSplitting'
                }
            ]
        },
        {
            key: '/app/userManage', title: '用户', icon: '',
            subs: [
                {
                    key: '/app/userManage/list', title: '用户列表',
                    icon: '', component: 'UserList'
                },
                {
                    key: '/app/userManage/permission', title: '权限',
                    icon: '', component: 'UserPermission'
                }
            ]
        },
        {
            key: '/app/sysSetting', title: '系统设置', icon: '',
            subs: [
                {
                    key: '/app/sysSetting/parameter', title: '参数设置',
                    icon: '', component: 'SetParameter'
                },
                {
                    key: '/app/sysSetting/password', title: '修改密码',
                    icon: '', component: 'UpdatePassWord'
                }
            ]
        },
    ]
}