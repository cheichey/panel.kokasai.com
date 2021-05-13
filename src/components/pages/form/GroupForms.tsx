import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGroupFormList } from '../../../api/api';
import { useAuth } from '../../../contexts/UserContext';
import GroupFormsList from '../../organisms/form/GroupFormsList';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';

const GroupForms = () => {
  const auth = useAuth();
  const param: {groupName: string} = useParams();
  useEffect(
    () => {
      const asyncGet = async () => {
        const result = await getGroupFormList(param.groupName);
        auth.setUser({
          ...auth.user,
          formList: result.data.form,
        });
      };
      asyncGet()
        .then()
        .catch();
    },
    [],
  );

  return (
    <ControlPanelTemplate page={Pages.form}>
      <GroupFormsList path={param.groupName} />
    </ControlPanelTemplate>
  );
};

export default GroupForms;
