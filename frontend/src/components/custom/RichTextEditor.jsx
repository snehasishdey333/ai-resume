import { useState } from 'react';
import { 
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar
} from 'react-simple-wysiwyg';

const RichTextEditor = ({onRichTextEditorChange,val}) => {
    const [value, setValue] = useState(val);

  function onChange(e) {
      setValue(e.target.value);
      onRichTextEditorChange(e)
  }
    return (
      
    <EditorProvider>
      <Editor value={value} onChange={onChange}>
        <Toolbar>
          <BtnUndo />
          <BtnRedo />
          <Separator />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
          <BtnClearFormatting />
          <HtmlButton />
          <Separator />
          <BtnStyles />
        </Toolbar>
      </Editor>
    </EditorProvider>
      
     
  )
}

export default RichTextEditor