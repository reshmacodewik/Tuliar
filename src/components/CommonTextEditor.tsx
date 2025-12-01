import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';

interface Props {
    value: string;
    onChange: (html: string) => void;
    editorRef?: any;
    maxHeight?: number;
}

const CommonTextEditor: React.FC<Props> = ({
    value,
    onChange,
    editorRef,
    maxHeight = 300,
}) => {
    const localRef = editorRef || useRef<RichEditor>(null);

    const onInit = () => {
        if (value && value.length > 0) {
            setTimeout(() => {
                localRef.current?.setContentHTML(value);
            }, 50);
        }
    };

    useEffect(() => {
        if (localRef.current && value && value.length > 0) {
            setTimeout(() => {
                localRef.current?.setContentHTML(value);
            }, 50);
        }
    }, [value]);

    return (
        <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 10, backgroundColor: '#fff' }}>
            <RichEditor
                ref={localRef}
                placeholder="Write something..."
                initialHeight={maxHeight}
                useContainer
                onChange={onChange}
                editorInitializedCallback={onInit}
            />

            <RichToolbar
                editor={localRef}
                actions={[
                    actions.setBold,
                    actions.setItalic,
                    actions.setUnderline,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                ]}
                iconTint="#444"
                selectedIconTint="#007bff"
                style={{
                    borderTopWidth: 1,
                    borderTopColor: '#eee',
                    backgroundColor: '#fafafa',
                }}
            />
        </View>
    );
};

export default CommonTextEditor;
