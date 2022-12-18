import { fadeOut, styled } from '../../stitches.config';

export const paddingVariants = {
  padding: {
    default: {
      padding: '$5',
    },
    none: {
      padding: '0',
    },
  },
};
export const BoxStyled = styled('article', {
  border: '0.1rem solid transparent',
  borderRadius: '$2',
  display: 'block',
  height: '100%',
  margin: 0,
  paddingBlock: 0,
  position: 'relative',
  transition: '$default',

  variants: {
    animation: {
      true: {
        animation: `${fadeOut} .2s linear`,
        animationFillMode: 'forwards',
      },
    },
    hover: {
      true: {
        '&:hover': {
          boxShadow: '$2',
        },
      },
    },
    loading: {
      true: {
        cursor: 'wait',
      },
    },

    theme: {
      default: {
        backgroundColor: 'transparent',
        borderColor: '$border',
      },
      error: {
        backgroundColor: '$redOverlay',
        borderColor: '$redBorder',
        color: '$redText',
      },
      fill: {
        backgroundColor: '$default',
      },
      success: {
        backgroundColor: '$greenOverlay',
        borderColor: '$greenBorder',
        color: '$greenText',
      },
      transparent: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      warning: {
        backgroundColor: '$orangeOverlay',
        borderColor: '$orangeBorder',
        color: '$orangeText',
      },
    },
    ...paddingVariants,
  },
  width: '100%',
});

export const BoxImageChildrenStyled = styled('div', {
  variants: {
    ...paddingVariants,
  },
});

export const BoxExitStyled = styled('div', {
  '&:hover': {
    opacity: 1,
  },
  'cursor': 'pointer',
  'opacity': 0.7,
  'padding': '1rem',
  'position': 'absolute',
  'right': 0,
  'top': 0,
  'transition': '$default',
});

export default BoxStyled;
