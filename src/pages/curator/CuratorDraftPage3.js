import React from 'react';
import { Text, Button, IconBackward, Badge, IconAttach, TextField } from '@gpn-design/uikit';
import TheHeader from '../../components/TheHeader/TheHeader';
import TheFooter from '../../components/TheFooter/TheFooter';

function CuratorDraftPage3() {
  return (
    <div className='content-page'>
      <TheHeader role='Куратор' />
      <div className='content decorator decorator_space-v_3xl'>
        <div className='content__main'>
          <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_s decorator_indent-t_none'>Создание программы</Text>
          <Text tag='p' size='m' view='primary' className='decorator decorator_indent-t_none'>Укажите ответственных за каждый раздел программы и прикрепите необходимые документы. Также вы можете написать комментарий в свободной форме</Text>
          
          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Геологический раздел</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <TextField width='full' size='m' form='default-clear' type='text' value='ПАО «Газпром нефть»' disabled />
            <TextField width='full' size='m' form='brick-default' type='text' value='Анастасия Алёшина' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Бурение</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <TextField width='full' size='m' form='default-clear' type='text' value='ООО «БКЕ»' />
            <TextField width='full' size='m' form='brick-default' type='text' value='Дмитрий Ореховский' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>ННБ</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <TextField width='full' size='m' form='default-clear' type='text' value='ООО «БКЕ»' />
            <TextField width='full' size='m' form='brick-default' type='text' value='Оксана Романова' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Буровые растворы</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <TextField width='full' size='m' form='default-clear' type='text' value='ООО «БКЕ»' />
            <TextField width='full' size='m' form='brick-default' type='text' value='Никита Соболев' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Долота</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left'>
            <TextField width='full' size='m' form='default-clear' type='text' value='ООО «БКЕ»' />
            <TextField width='full' size='m' form='brick-default' type='text' value='Тимофей Гайчук' />
          </div>

          <div className='decorator decorator_indent-t_3xl decorator_indent-b_m decorator_distribute_between'>
            <Text size='xl' view='primary' weight='regular'>Цементирование</Text>
            <Badge status='system' size='m' view='filled' label='подготовить до 10.08.2020'></Badge>
          </div>
          <div className='decorator decorator_distribute_left decorator_indent-b_s'>
            <TextField width='full' size='m' form='default-clear' type='text' value='ООО «БКЕ»' />
            <TextField width='full' size='m' form='brick-clear' type='text' value='Фёдор Савенко' />
            <TextField width='full' size='m' form='brick-default' type='text' value='Секция 0 - 152 мм' />
          </div>
          <div className='decorator decorator_distribute_left'>
            <TextField width='full' size='m' form='default-clear' type='text' value='ООО «БКЕ»' />
            <TextField width='full' size='m' form='brick-clear' type='text' value='Глеб Алейнов' />
            <TextField width='full' size='m' form='brick-default' type='text' value='Секция 0 - 152 мм' />
          </div>
          
          <Text size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_3xl decorator_indent-b_m'>Дополнительные файлы</Text>
          <Button size='s' view='ghost' iconLeft={IconAttach} label='Загрузить файл' />
          
          <Text size='xl' view='primary' weight='regular' className='decorator decorator_indent-t_3xl decorator_indent-b_m'>Комментарий</Text>
          <TextField width='full' size='m' type='textarea' maxRows='5' value='Чтобы человек захотел это прочитать, у него должна быть очень веская причина. Может быть, его заставили. Может быть, где-то здесь в тексте решение его насущной проблемы.' />



          <div className='decorator decorator_distribute_between decorator_indent-t_3xl'>
            <Button as='a' size='m' view='ghost' iconLeft={IconBackward} href='/curator/draft-step-2' label='Назад' />
            <div className='decorator decorator_distribute_between'>
              <Button size='m' view='ghost' as='a' href='/curator/list:false' label='Удалить' />
              <div className='decorator decorator_indent-l_m'>
                <Button as='a' size='m' view='primary' href='/curator/list:true' label='Создать программу' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </div>
  );
}

export default CuratorDraftPage3;