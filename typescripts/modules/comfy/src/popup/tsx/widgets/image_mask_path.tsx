import { BaseWidgetProps } from './_base';
import { Select, Upload, Image, Flex } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import i18n from '../../../../../../src/common/i18n.mts';
import { app } from 'src/comfy-globals.mjs';

interface ImageWidgetProps extends BaseWidgetProps {
    value: string;
    options: string[];
    onValueChange: (value: any) => void;
    extraOptions?: Record<string, any>;
    nodeID: number;
}

export const ImageWidget = ({ value, onValueChange, options, nodeID }: ImageWidgetProps) => {
    const handleUpload = (info: any) => {
        if (info.file.status === 'done') {
            const uploadedPath = info.file.response.name; // 假设服务器返回的路径在response.path中
            onValueChange?.(uploadedPath);
        }
    };
    const node = app.graph.nodes.find((node: any) => node.id === value)

    return (
        <Flex gap={5} align='stretch' vertical>
            <Flex gap={5} vertical>
                <Select
                    style={{ flex: 1 }}
                    value={value}
                    onChange={(newValue: string) => {
                        onValueChange?.(newValue);
                    }}
                    options={options.map(file => ({
                        label: file.split('/').pop(),
                        value: file
                    }))}
                />
                <Upload
                    action="./api/upload/image"
                    onChange={handleUpload}
                    showUploadList={false}
                    data={(file: any) => ({
                        image: file  // 将文件字段名设置为 'image'
                    })}
                >
                    <button type="button" className="ant-btn">
                        <UploadOutlined /> {i18n('upload')}
                    </button>
                </Upload>
            </Flex>
            {value && (
                <img
                    src={`./api/view?filename=${value}&type=input&subfolder=${value.startsWith('clipspace/') ? 'clipspace/' : ''}&rand=` + Math.random()}
                    width="100%"
                    style={{
                        aspectRatio: '1/1',
                        objectFit: 'contain',
                        cursor: 'pointer'
                    }}
                    onClick={(e) => {
                        app.constructor.copyToClipspace(app.graph.nodes.find((node: any) => node.id === nodeID))
                        app.constructor.clipspace_return_node = app.graph.nodes.find((node: any) => node.id === nodeID)
                        app.constructor.open_maskeditor()
                    }}
                />
            )}
        </Flex>
    );
};