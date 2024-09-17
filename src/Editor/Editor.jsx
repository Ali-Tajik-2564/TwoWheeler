import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
export default function Editor({ value, setValue }) {
  return (
    <div className=" h-auto my-4 ">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        config={{
          plugins: [Essentials, Bold, Italic, Paragraph],
          toolbar: ['undo', 'redo', '|', 'bold', 'italic'],
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
      />
    </div>
  );
}
