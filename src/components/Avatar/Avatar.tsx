// import React from 'react';

import { Image } from '../../index';
import { DefaultProps } from '../../stitches.config';

import { AvatarFallbackStyled, AvatarImageStyled, AvatarStyled } from './Avatar.styles';

interface Props extends DefaultProps {
  image?: string;
  fallback: string;
  width?: number | string;
}

export default function Avatar(props: Props): JSX.Element {
  return (
    <AvatarStyled
      css={{
        height: props.width || 20,
        width: props.width || 20,
        ...props.css,
      }}
      id={props.id}>
      {props.image ? (
        <AvatarImageStyled>
          <Image
            alt={props.fallback}
            layout='fill'
            objectFit='cover'
            objectPosition='center center'
            src={props.image}
          />
        </AvatarImageStyled>
      ) : (
        <AvatarFallbackStyled>{props.fallback}</AvatarFallbackStyled>
      )}
    </AvatarStyled>
  );
}
