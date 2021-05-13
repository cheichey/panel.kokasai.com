import React, { useEffect } from 'react';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import GroupList from '../../organisms/group/GroupList';

const Forms = () => (
  <ControlPanelTemplate page={Pages.form}>
    <GroupList path="/form" />
  </ControlPanelTemplate>
);
export default Forms;
