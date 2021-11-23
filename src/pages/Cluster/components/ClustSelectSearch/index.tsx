import React from 'react';
import { Button, Message, Grid, Search, Icon, Input } from '@b-design/ui';
import { withTranslation } from 'react-i18next';
import './index.less';

type Props = {
  t: (key: string) => {};
  dispatch: ({}) => {};
  getChildCompentQuery: (value: string) => (() => void) | undefined;
};

type State = {
  inputValue: string;
};

class InputSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChangName = (value: string) => {
    this.setState({
      inputValue: value,
    });
  };

  handleClickSearch = () => {
    const { inputValue } = this.state;
    this.props.getChildCompentQuery(inputValue);
  };

  render() {
    const { Row, Col } = Grid;
    const { t } = this.props;
    const { inputValue } = this.state;
    const clusterPlacehole = t('CLuster search query').toString();
    return (
      <Row className="cluster-input-wraper">
        <Col span="24">
          <Input
            innerAfter={
              <Icon
                type="search"
                size="xs"
                onClick={this.handleClickSearch}
                style={{ margin: 4 }}
              />
            }
            placeholder={'Search by name and description'}
            onChange={this.handleChangName}
            onPressEnter={this.handleClickSearch}
            value={inputValue}
            className="item"
          />
        </Col>
      </Row>
    );
  }
}

export default withTranslation()(InputSearch);