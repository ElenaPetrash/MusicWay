import React from "react";
import { DownOutlined, HeartOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space, Table } from "antd";
import { Tag } from "antd";
import { BaseLayout } from "../BaseLayout";
import { ColumnTable, MusicListStyled } from "./MusicList.styled";
const { Column,  } = MusicListStyled;
interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  }, {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  }, {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  }, {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  }
];

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const MusicList: React.FC = () => (
  <MusicListStyled $color="white" $background="rgb(1 23 45)" dataSource={data}>
    <ColumnTable  $background="rgb(1 23 45)" title="Song name" dataIndex="firstName" key="firstName" />
    <Column  title="Autor" dataIndex="lastName" key="lastName" />  
    <Column  title="Year" dataIndex="age" key="age" />
    <Column title="Film" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <a>Add {record.lastName}</a>
          <a>Coment</a>
          <HeartOutlined/>
        </Space>
      )}
    />
  </MusicListStyled>
);

export default MusicList;

// const items = [
//   { key: '1', label: 'Add to my album' },
//   { key: '2', label: 'Add comment' },
// ];
// return (
//   <BaseLayout>
// //      <Dropdown menu={{ items }}>
// //              <Cascader
//             options={[
//               {
//                 value: 'zhejiang',
//                 label: 'Zhejiang',
//                 children: [
//                   {
//                     value: 'hangzhou',
//                     label: 'Hangzhou',
//                   },
//                 ],
//               },
//             ]}
//           />
// //           </Dropdown>
//   </BaseLayout>
