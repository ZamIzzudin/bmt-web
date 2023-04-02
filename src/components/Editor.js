import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({ defaultData, setData }) {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={defaultData}
            onChange={(_, editor) => setData(editor.getData())}
        />
    )
}