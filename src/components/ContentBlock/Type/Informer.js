import React from 'react';

import { Text } from '@gpn-design/uikit/Text';
import { Informer } from '@gpn-design/uikit/Informer';
import Field from '../../Field/Field';

function ContentBlockInformer(props) {
  const { isCommentable, isEditable, addButton = '', commentButton = '', deleteButton = '', commentPopup, newBlockPopup, children } = props;

  return (
    <div className='Article__section Block decorator decorator_indent-b_l'>
      { isEditable ?
        <React.Fragment>
          {newBlockPopup}
          <div className='Block__leftButtons'>
            {deleteButton}
            {addButton}
          </div>
        </React.Fragment> : ''
      }
      { isCommentable || isEditable ? 
        <React.Fragment>
          { commentPopup }
          <div className='Block__rightButtons'>
            {commentButton}
          </div>
        </React.Fragment> : ''
      }

      <Informer status='system' view='filled'>
        <Text size='m' view='primary' weight='bold'>Примечание</Text>
        { isEditable ? <Field width='full' size='m' view='clear' type='textarea' maxRows={10000} placeholder='Начните писать' dValue={children} /> : '' }
        { !isEditable ? <Text size='m' view='primary' lineHeight='s'>{children}</Text> : '' }
      </Informer>
    </div>
  );
}

export default ContentBlockInformer;
