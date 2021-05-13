import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { FormatAlignRight } from '@material-ui/icons';
import { useAuth } from '../../../contexts/UserContext';
import Typography from '../../atoms/Typography';
import ListItemIcon from '../../atoms/ListItemIcon';
import ListItemText from '../../atoms/ListItemText';
import List from '../../molecules/List';
import ListStyle from '../common/List.style';
import { Pages } from '../../../pages';

const FormList = (): JSX.Element => {
  const auth = useAuth();
  const classes = ListStyle();
  return (
    <List className={classes.list}>
      <Typography variant="h6">
        フォーム一覧
      </Typography>
      {
        auth.user?.formList?.map(
          (elem) => (
            <Link to={`${Pages.form.href}/${elem}`}>
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <FormatAlignRight />
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

export default FormList;
