import styled from 'styled-components';
import { Col as BSCol, Row as BSRow } from 'react-bootstrap';
import {
  BoxInner as BoxInnerComponent,
  Title as BoxTitle,
  Paragraph as BoxParagraph,
} from 'src/components/Box';
import BSHero from 'src/components/Hero';
import { breakpoints } from 'src/utils';

export const Row = styled(BSRow)`
  padding-block: 50px;
`;

export const Col = styled(BSCol)``;

export const BoxInner = styled(BoxInnerComponent)`
  padding: 20px 20px;

  @media ${breakpoints.sm} {
    padding: 20px;
  }
`;

export const Hero = styled(BSHero)`
  padding: 0;
  min-height: auto;
  overflow: hidden;

  img {
    object-position: center;
  }
`;

export const Title = styled(BoxTitle)`
  font-size: 44px;
  margin-bottom: 22px;
  font-weight: 400;

  @media ${breakpoints.md} {
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const Paragraph = styled(BoxParagraph)`
  margin-bottom: 20px;
`;
