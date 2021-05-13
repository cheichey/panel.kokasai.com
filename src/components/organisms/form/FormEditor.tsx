import React, { FC } from 'react';
import { GetGroupFormResponse } from '../../../api/dataType';
import Typography from '../../atoms/Typography';

type Props = {
  form: GetGroupFormResponse;
}

const FormEditor: FC<Props> = (props): JSX.Element => {
  const { form } = props;
  const keys = Object.keys(form?.values);
  return (
    <>
      <Typography variant="h6">{form?.name}</Typography>
      <Typography variant="subtitle1">{form?.description}</Typography>
      <Typography variant="caption">
        最終期限
        {form?.limit}
      </Typography>
      <br />
      <Typography variant="caption">
        最終更新日時
        {form?.update}
        <br />
      </Typography>
      {
        keys.map(
          (elem) => (
            <>
              {form?.values[elem]?.name}
              {form?.values[elem]?.description}
              <br />
            </>
          ),
        )
      }
    </>
  );
};

export default FormEditor;
