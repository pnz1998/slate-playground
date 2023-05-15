import { FC, useCallback, useState } from 'react';
import { Transforms, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import ImageElement from './ImageElement';

const SlateEditor: FC = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue: any = [
    {
      type: 'paragraph',
      children: [{ text: 'First line of text in a paragraph.' }],
    },
    {
      type: 'paragraph',
      children: [{ text: 'Second line of text in a paragraph.' }],
    },
  ];
  const renderElement = useCallback(({ attributes, children, element }: any) => {
    switch (element.type) {
      case 'image':
        return <ImageElement />
      default:
        return <p {...attributes}>{children}</p>
    }
  }, []);
  const insertImage = () => {
    Transforms.insertNodes(
      editor, 
      { type: 'image', children: [{ text: '' }]},
      { at: [1, 0] }
    )
  };
  return (
    <Slate editor={editor} value={initialValue}>
      {JSON.stringify(initialValue)}
      <div>
        <button onClick={insertImage}>图片</button>
      </div>
      <Editable 
        renderElement={renderElement}
      />
    </Slate>
  )
};
export default SlateEditor;