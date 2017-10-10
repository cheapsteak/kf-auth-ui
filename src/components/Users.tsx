import * as React from 'react';
import { css } from 'glamor';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import colors from 'common/colors';
import { getUsers } from 'services';
import Logout from 'components/Logout';

const styles = {
  container: {
    backgroundColor: colors.purple,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

    '& .ReactTable': {
      background: '#fff',
      color: '#333',
      '& .pagination-bottom': {
        display: 'none',
      },
    },
  },
};

export default class extends React.Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    const users = (await getUsers()).data;
    this.setState({ users });
  }

  render() {
    return (
      <div className={`${css(styles.container)}`}>
        <Logout />
        <ReactTable
          data={this.state.users}
          columns={[
            { Header: 'ID', accessor: 'id', width: 200 },
            { Header: 'Username', accessor: 'userName' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Role', accessor: 'role' },
            { Header: 'Statue', accessor: 'status' },
          ]}
        />
      </div>
    );
  }
}
