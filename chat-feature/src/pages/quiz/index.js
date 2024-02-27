import React,{useState } from 'react';
import { Table,Tag,Space, Card, Modal } from 'antd';

const columns = [
    {
        title:'Position',
        dataIndex:'key',
        key:'key',
        render: (text)=><h5>{text}</h5>
    },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <h4>{text}</h4>,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }else if(tag==='Pro'){
            color='gold'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  }
];

//data should be in order
const data = [
  {
    key: '1',
    name: 'John Brown',
    tags: ['Pro', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Black',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'Joe Black',
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    name: 'Joe Black',
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    name: 'Joe Black',
    tags: ['cool', 'teacher'],
  },
  {
    key: '8',
    name: 'Joe Black',
    tags: ['cool', 'teacher'],
  },
  {
    key: '9',
    name: 'Joe Black',
    tags: ['cool', 'teacher'],
  },
  {
    key: '10',
    name: 'Joe Black',
    tags: ['cool', 'teacher'],
  },
  {
    key: '11',
    name: 'Joe Black',
    tags: ['cool', 'teacher'],
  },
];

const Quiz=()=>{
    const [trophyisModalOpen, setTrophyIsModalOpen] = useState(true);
    const trophyshowModal = () => {
      setTrophyIsModalOpen(true);
    };
    const trophyhandleOk = () => {
      setTrophyIsModalOpen(false);
    };
    const trophyhandleCancel = () => {
      setTrophyIsModalOpen(false);
    };
      return(
        <Modal  title="Quiz Leader Board" open={trophyisModalOpen} onOk={trophyhandleOk} onCancel={trophyhandleCancel} width={800} footerBg={'red'}>
            <Table columns={columns} dataSource={data} scroll={{ y: 400 }} />
        </Modal>
    );
}

export default Quiz;