import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../actions/api';
import { switchTheme } from '../../actions/theme';
import { apiURL } from '../../utils/defaults';

import { Container } from './styles';
import { Button, Row } from '../common';

export default function Welcome() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.baseReducer.data);
  const ui = useSelector(state => state.baseReducer.ui);

  return (
    <>
      <Container>
          Here's my starter. Go build something.
      </Container>
      {data && <div>
        {data.title}
      </div>}
      {ui && ui.errorMessage && <div>
        Could not fetch data
      </div>}
      <Row>
        <Button onClick={() => dispatch(apiRequest({body: {}, method: 'GET', url: apiURL}))}>
          Fetch some data
        </Button>
        <Button onClick={() => dispatch(switchTheme())}>
          Toggle Dark Mode
        </Button>
      </Row>
    </>
  );
}
