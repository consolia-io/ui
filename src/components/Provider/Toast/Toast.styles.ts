import { fadeIn, fadeOut, styled } from '../../../stitches.config';
import { TextSizes } from '../../Text/Text.styles';

export const ToastStyled = styled('div', {
  backgroundColor: '$background',
  border: '0.1rem solid $border',
  borderRadius: '$1',
  boxShadow: '$3',
  cursor: 'pointer',
  height: 'auto',
  justifyContent: 'center',
  marginTop: '$3',
  textAlign: 'center',
  ...TextSizes.p,
  marginBottom: '0 !important',

  overflow: 'hidden',
  padding: '$1 $3',
  position: 'relative',
  transition: '$default',
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .2s linear`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: 'forwards',
      },
    },
  },
});

export const ToastContainerStyled = styled('div', {
  bottom: '$2',
  left: '50%',
  position: 'fixed',
  transform: 'translateX(-50%)',
  zIndex: '$toast',
});

export default ToastStyled;
