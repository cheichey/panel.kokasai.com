import React from "react";
import GroupList from "../../organisms/group/GroupList";
import ControlPanelTemplate from "../../templates/ControlPanelTemplate";
import { Pages } from "../../../pages";
import { getUserGroupList } from "../../../api/api";
import { useAuth } from "../../../contexts/AuthContext";
import LinearLoading from "../../molecules/LinearLoading";

const Group = (): JSX.Element => {
  const auth = useAuth();
  return (
    <ControlPanelTemplate page={Pages.group}>
      <GroupList
        item={auth.user?.groupList}
        load={() => {
          getUserGroupList().then((response) => {
            const { group } = response.data;
            auth.setUser({
              ...auth.user,
              groupList: group,
              isAdmin: group.includes("admin"),
            });
          });
        }}
        LoadComponent={<LinearLoading />}
      />
    </ControlPanelTemplate>
  );
};

export default Group;
