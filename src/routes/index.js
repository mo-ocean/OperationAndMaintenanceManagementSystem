import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
//引入components文件夹下index.js暴露的组件
import AllComponents from '../components';
import routesConfig from './config';

export default class CRouter extends Component {
    render() {
        return (
            /* <Switch>用于渲染与路径匹配的第一个子 <Route> 或 <Redirect> */
            <Switch>
                {
                    Object.keys(routesConfig).map(key => 
                        routesConfig[key].map(r => {
                            const route = r => {
                                const Component = AllComponents[r.component];
                                return (
                                    <Route
                                        key={r.route || r.key}
                                        exact
                                        path={r.route || r.key}
                                        render={props =>  
                                            <Component {...props} />
                                        }
                                    />
                                )
                            }
                            return r.component ? route(r) : r.subs.map(r => route(r));
                        })
                    ) 
                }
            </Switch>
        );
    }
}