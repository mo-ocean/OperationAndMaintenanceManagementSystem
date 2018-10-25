/**
 * 路由组件出口文件
 * by haiyang
 */
//仪表首页
import Dashboard from './dashboard/Dashboard';
//集群--集群--节点
import Cluster from './clusterManage/cluster/Cluster';
import Node from './clusterManage/node/Node';
//应用--应用列表
import AppList from './appManage/list/AppList';
//规则--分库分表--读写分离
import Sharding from './ruleManage/sharding/Sharding';
import RWSplitting from './ruleManage/RWSplitting/RWSplitting';
//用户--用户列表--用户权限
import UserList from './userManage/list/UserList';
import UserPermission from './userManage/permission/UserPermission';
//系统设置--参数设置--修改密码
import SetParameter from './sysSetting/parameter/SetParameter';
import UpdatePassWord from './sysSetting/password/UpdatePassWord';



export default {
    Dashboard, Cluster, Node, AppList, Sharding, RWSplitting, UserList, UserPermission, SetParameter, UpdatePassWord
}