import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/UserContext';
import * as api from '../../api';

const Account = (): JSX.Element => {
  const auth = useAuth();
  useEffect(
    () => {
      const asyncGet = async () => {
        const result = await api.getAccessibleDocumentList();
        console.log(result);
        auth.setUser({ ...auth.user, documentList: result.data.document });
      };
      asyncGet().then().catch();
    }, [],
  );

  return (
    <div>
      {auth.user?.documentList?.map(
        (name) => (
          <li><a href={`${api.URL}/document/${name}`}>{name}</a></li>
        ),
      )}
    </div>
  );
};

export default Account;