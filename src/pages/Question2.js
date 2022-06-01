import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Table, Tag, Row, Col } from 'antd';

import { getQuestTwoList } from 'store/modules/question/action';
import Page from 'components/Page';

class Question2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      data: this.props.question
    }

  }

  componentDidMount() {
    this.props.getQuestTwoList();
  }

  render() {
    const { Search } = Input
    const { question } = this.props;
    // const onSearch = (value) => {
    //   this.setState({ value: value })
    //   const filteredData = question.filter(entry =>
    //     entry.title.includes(value)
    //   );
    //   this.setState({ data: filteredData })
    // };
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
        <Row>
          <Col span={8}>
            <p>Question2</p>
          </Col>
          <Col span={8} offset={8}>
            <Search
              placeholder="Search by Product Name"
              // onSearch={onSearch}
              style={{
                width: 350,
              }}
              onChange={e => {
                const currValue = e.target.value;
                this.setState({ value: currValue })
                const filteredData = question.filter(entry =>
                  entry.title.includes(currValue)
                );
                this.setState({ data: filteredData })
              }}
            />
          </Col>
        </Row>
        <Table
          columns={columns}
          dataSource={this.state.data}
          pagination={{
            position: ['bottomLeft'],
          }}
        />
      </Page>
    )
  }

}

const mapStateToProps = state => ({
  question: state.question.questTwoList

});

export default connect(mapStateToProps, { getQuestTwoList })(Question2);