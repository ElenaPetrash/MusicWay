import React from 'react';
import { useState } from 'react';
import {Image, Space,} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';

const ImgsListOfCard: React.FC = () => {
    const [random, setRandom]= useState()
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Space size={3}>
        
        <Image
          width={150}
          src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
          placeholder={
            isHovered ? (
              <CaretRightOutlined  style={{
                fontSize: 50,
                color: 'white',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }} />
            ) : (
              <></>
            )
          }
        />
        </Space>
    )

}

export default ImgsListOfCard;

///placeholder={
 // <Image
  //src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
  //width={200}
///>
//}