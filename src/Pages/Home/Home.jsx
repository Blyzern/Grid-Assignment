import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dataSelector } from './store/homeSelectors';
import { getData } from './store/homeSlice';
import { CustomGrid } from '../../components/GridComponent';
import { HideButton } from '../../components/HideButton';
import { Spacer, Wrapper } from './styles';

export const Home = () => {
  const data = useSelector(dataSelector);
  const [Show, setShow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Wrapper>
      <Spacer />
      <HideButton Show={Show} setShow={setShow} isHidden={Show} />

      {Show ? <CustomGrid data={data} /> : null}
    </Wrapper>
  );
};
