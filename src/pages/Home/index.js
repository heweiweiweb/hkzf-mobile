import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './Index/index.js'
import House from './House'
import News from './News'
import My from './My'
import './index.scss'
//  导入组件TabBar
import { TabBar } from 'antd-mobile'

function Error() {
  return <div>我是Error组件</div>
}

const itemList = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/house' },
  { title: '资讯', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/my' }
]

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 默认选中tab栏
      selectedTab: props.location.pathname,
      //   是否全屏
      fullScreen: true
    }
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps)
    // console.log(this.props)
    // console.log('home组件发生了更新')
    // 更新阶段不能直接调用setState的，需要有条件
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname
      })
    }
  }

  renderItem() {
    return itemList.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          // console.log(this.props)
          // selectedTab: item.path
          this.props.history.push(item.path)
        }}
      >
        {/* 
                title: 显示的文字
                icon:未选中的图标
                selectedIcon：选中的图标
                selected: 是否被选中
                badge: 徽章
                onPress:点击事件
              */}
      </TabBar.Item>
    ))
  }

  render() {
    return (
      <div className="home">
        {/* 配置路由规则 */}

        <Switch>
          <Route exact path="/home" component={Index} />
          <Route path="/home/house" component={House} />
          <Route path="/home/news" component={News} />
          <Route path="/home/my" component={My} />
          <Route component={Error} />
        </Switch>

        <div className="tabBar">
          <TabBar
            unselectedTintColor="#888"
            tintColor="#bb1414"
            barTintColor="#fff"
          >
            {/* 
            unselectedTintColor:未选中的颜色
            tintColor：选中的颜色
            barTintColor：背景色
            */}
            {this.renderItem()}
          </TabBar>
        </div>
      </div>
    )
  }
}
export default Home
