import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ControlPanelTemplate from '../../templates/ControlPanelTemplate';
import { Pages } from '../../../pages';
import { getGroupForm } from '../../../api/api';
import FormEditor from '../../organisms/form/FormEditor';
import { GetGroupFormResponse } from '../../../api/dataType';

const Form: FC = (): JSX.Element => {
  const param: { groupName: string, formName: string } = useParams();
  const [form, setForm] = useState<{[formName: string]: GetGroupFormResponse}>({});
  useEffect(
    () => {
      const asyncGet = async () => {
        const result = await getGroupForm(param.groupName, param.formName);
        setForm({ ...form, [param.formName]: result.data });
      };
      asyncGet()
        .then()
        .catch();
    },
    [],
  );
  const targetForm = form[param.formName];
  return (
    <ControlPanelTemplate page={Pages.form}>
      {
        (() => {
          console.log(form, typeof form, form === {});
          if (Object.keys(form).length === 0) {
            return (
              <></>
            );
          }
          return (
            <FormEditor form={targetForm} />
          );
        })()
      }
    </ControlPanelTemplate>
  );
};

export default Form;
