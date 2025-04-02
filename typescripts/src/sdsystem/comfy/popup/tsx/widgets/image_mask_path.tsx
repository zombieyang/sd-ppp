import { BaseWidgetProps } from './_base';
import { Select, Upload, Image, Flex } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import i18n from '../../../../../common/i18n.mts';

interface ImageWidgetProps extends BaseWidgetProps {
    value: string;
    options: string[];
    onValueChange: (value: any) => void;
}

export const ImageWidget = ({ value, onValueChange, options }: ImageWidgetProps) => {
    const handleUpload = (info: any) => {
        if (info.file.status === 'done') {
            const uploadedPath = info.file.response.name; // 假设服务器返回的路径在response.path中
            onValueChange?.(uploadedPath);
        }
    };

    return (
        <Flex gap={5} align='stretch' vertical>
            <Flex gap={5}>
                <Select
                    style={{ flex: 1 }}
                    value={value}
                    onChange={(newValue) => {
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
                    data={(file) => ({
                        image: file  // 将文件字段名设置为 'image'
                    })}
                >
                    <button type="button" className="ant-btn">
                        <UploadOutlined /> {i18n('upload')}
                    </button>
                </Upload>
            </Flex>
            {value && (
                <Image
                    src={`./api/view?filename=${value}&type=input&subfolder=&rand=` + Math.random()}
                    width="100%"
                    style={{
                        aspectRatio: '1/1',
                        objectFit: 'contain'
                    }}
                />
            )}
        </Flex>
    );
};