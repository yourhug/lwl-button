import { Button, ConfigProvider } from 'antd';
import React, { useState } from 'react'
export interface IProps_LButton {
    [key: string]: any;
}
const LButton = (props: IProps_LButton) => {
    return (
        <div>
            <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
                <Button type='primary' key={'lwl'}>测试按钮</Button>
            </ConfigProvider>
        </div>
    )
}
export default LButton