import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Table, Tag } from 'antd';

import { getQuestOneList } from 'store/modules/question/action';
import Page from 'components/Page';

class Qusetion1 extends Component {

  componentDidMount() {
    this.props.getQuestOneList();
  }

  render() {
    const { question } = this.props;
    const columns = [
      {
        title: 'Product Name',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Product Code',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags => (
      <>
        {tags ? tags.map((tag) => {
          return (
            <Tag key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        }) : <Tag>NO DATA</Tag>}
      </>
    ))
  },
    ];
    return (
      <Page>
        <Divider orientation="left">Question 1</Divider>
        <Table
          columns={columns}
          dataSource={question}
          pagination={{
            position: ['bottomLeft'],
          }}
        />
      </Page>
    )
  }

}

const mapStateToProps = state =>  ({
  question: state.question.questOneList
});

export default connect(mapStateToProps, { getQuestOneList })(Qusetion1);