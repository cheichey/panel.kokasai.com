import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { PeopleOutline } from '@material-ui/icons';
import { useAuth } from '../../../contexts/UserContext';
import Typography from '../../atoms/Typography';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import List from '../../molecules/List';
import ListStyle from '../common/List.style';

type Props = {
  path: '/group' | '/form'
}
const GroupList: FC<Props> = (props): JSX.Element => {
  const { path } = props;
  const auth = useAuth();
  const classes = ListStyle();
  return (
    <List className={classes.list}>
      <Typography variant="h6">
        グループ一覧
      </Typography>
      {
        auth.user?.groupList?.map(
          (elem) => (
            <Link to={`${path}/${elem}`}>
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <PeopleOutline />
                </ListItemIcon>
                <ListItemText>
                  {elem}
                </ListItemText>
              </ListItem>
            </Link>
          ),
        )
      }
    </List>
  );
};

export default GroupList;
