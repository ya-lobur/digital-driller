import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text } from '@gpn-design/uikit/Text';
import { Badge } from '@gpn-design/uikit/Badge';

import { tocList } from '../../mocks/newProgramm';
import { team } from '../../mocks/team';

import './TeamList.css';

function TeamList(props) {
  const { role } = props;
  const history = useHistory();

  const list = team.map(item => {
    let badge;
    let isDone = 0, isMe = false;
    
    tocList.forEach(section => {
      if(section.status !== 'done' && section.member === item.role)
        isDone--;
      else if(section.status === 'done' && section.member === item.role && role === 'geologist')
        isDone++;
    });
    
    if (isDone > 0) badge = { status: 'success', label: 'готово' };
    else            badge = { status: 'system', label: `Подготовить до ${item.deadline}` };
    
    if (item.role === role) isMe = true;

    return (
      <div className='team-member' key={item.name}>
        <div className='decorator decorator_distribute_between decorator_indent-b_xs'>
          <Text size='m' view='primary' weight='bold'>{item.position}</Text>
          <Badge size='m' view='filled' status={badge.status} label={badge.label} />
        </div>
        <Text size='m' view='primary'>
          {item.company} | 
          <Text size='m' view='link' weight={isMe ? 'bold' : 'regular'} display='inline-block'
            onClick={() => { history.push(`/digital-driller/${role}/profile`) }}>@{item.name}</Text>
        </Text>
      </div>);
  });

  return (
    <React.Fragment>
      {list}
    </React.Fragment>
  );
}

export default TeamList;
  