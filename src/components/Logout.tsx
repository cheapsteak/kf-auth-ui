import * as React from 'react';
import { css } from 'glamor';
import colors from 'common/colors';
import { googleLogout } from 'services';

const styles = {
  container: {
    backgroundColor: '#fff',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5em 0.8em',
    marginBottom: 10,
  },
};

export default class extends React.Component {
  handleClick = async () => {
    await googleLogout();
    console.log(this.props);
  };
  render() {
    return (
      <div className={`${css(styles.container)}`} onClick={this.handleClick}>
        Logout
      </div>
    );
  }
}
