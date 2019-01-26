import React from 'react'
import { Card,Table,Tag  } from 'antd'
import Axios from '../../axios'


const tabList = [{
  key: 'tab1',
  tab: '待配送',
}, {
  key: 'tab2',
  tab: '待验收',
},{
	key:'tab3',
	tab:'已验收'
}];

const tab1Columns = [{
  title: '配送单号',
  dataIndex: 'order',
  key: 'order',
}, {
  title: '供应商',
  dataIndex: 'Supplier',
  key: 'Supplier',
}, {
  title: '配送日期',
  dataIndex: 'Delivery',
  key: 'Delivery',
}, {
	title: '摘要',
  dataIndex: 'abstract',
	key: 'abstract',
	render: abstract => (
    <span>
      {abstract.map((item,i) => <Tag color="blue" key={i}>{item}</Tag>)}
    </span>
  ),
}, {
	title: '操作',
  dataIndex: 'Operation',
  key: 'Operation',
}];



const tabListNoTitle = [{
  key: 'article',
  tab: 'article',
}, {
  key: 'app',
  tab: 'app',
}, {
  key: 'project',
  tab: 'project',
}];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

class E extends React.Component {
  state = {
    key: 'tab1',
		noTitleKey: 'app',
		DataSource:[]
  }

  onTabChange = (key, type) => {
    console.log(key, type);
		this.setState({ [type]: key });
		console.log(this.state)
	}
	
	componentDidMount() {
    Axios.ajax({
      url:'/delivery'
    }).then((value) => {
      this.setState({
        DataSource:value
      })
    })
	}

  render() {
		console.log(this.DataSource)
		const contentList = {
			tab1: <Table columns={tab1Columns} dataSource={this.state.DataSource} />,
			tab2: <Table columns={tab1Columns} dataSource={this.state.DataSource} />,
			tab3: <Table columns={tab1Columns} dataSource={this.state.DataSource} />
		};
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => { this.onTabChange(key, 'key'); }}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}

export default E