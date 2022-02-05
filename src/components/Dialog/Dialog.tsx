import { CSS } from '@stitches/react/types/css-util';
import { X } from 'phosphor-react';
import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Card } from '../Card';

import stitchesShared from './Dialog.stitches';

export interface Props {
  children: ReactNode;
  css?: CSS;
  id?: string;
  trigger: ReactNode;
}

export default function Dialog({ children, css, id, trigger }: Props): JSX.Element {
  const ref = useRef(null);

  const [isShown, setIsShown] = useState(false);

  useOnClickOutside(ref, () => {
    setIsShown(false);
  });

  useLayoutEffect(() => {
    document.body.style.overflow = isShown ? 'hidden' : 'auto';
  }, [isShown]);

  const { Wrapper, TriggerWrapper, OverlayWrapper, CardWrapper, Exit } = stitchesShared();

  return (
    <Wrapper id={id}>
      <TriggerWrapper
        onClickCapture={(e) => {
          e.persist();
          setIsShown(true);
        }}>
        {trigger}
      </TriggerWrapper>
      {isShown && (
        <OverlayWrapper>
          <CardWrapper ref={ref} css={css}>
            <Exit onClick={() => setIsShown(false)}>
              <X size={18} />
            </Exit>
            <Card>{children}</Card>
          </CardWrapper>
        </OverlayWrapper>
      )}
    </Wrapper>
  );
}
