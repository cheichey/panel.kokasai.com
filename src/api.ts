import { Base64 } from 'js-base64';
import axios from 'axios';

const URL = 'https://api.kokasai.com';

export const getToken = (id?: string) => axios.post(`${URL}/login`,
  { id });

export const login = (id?: string, pass?: string) => {
  const header:{
        [key: string]: string | boolean;
    } = {
      Authorization: `Basic ${Base64.encode(`${id}:${pass}`)}`,
      withCredentials: true,
    };

  return axios.post(`${URL}/auth`, null, { headers: header });
};

export const logout = () => axios.post(`${URL}/logout`);

export const getFile = (path: string) => axios.get(`${URL}/file/${path}`);

export const getDocument = (documentName: string) => axios.get(`${URL}/document/${documentName}`);

export const getGroupDocumentList = (groupName: string) => axios.get(`${URL}/group/document/list/${groupName}`);

export const changeGroupDocumentList = (groupName: string, changedDocumentList: [string]) => axios.post(`${URL}/group/document/list/${groupName}`, changedDocumentList);

export const getListOfUsersBelongingGroup = (groupName: string) => axios.get(`${URL}/group/user/list/${groupName}`);

export const changeListOfUsersBelongingGroup = (groupName: string, changedUsersList: [string]) => axios.post(`${URL}/group/user/list/${groupName}`, changedUsersList);

export const getAccessibleDocumentList = () => axios.get(`${URL}/user/document/list`);
