import {
  Circle as e,
  X as t,
  WarningOctagon as r,
  EyeClosed as n,
  Eye as o,
  Check as i,
  Clipboard as a,
  Question as l,
  TrendUp as d,
  TrendDown as p,
  Moon as c,
  Sun as s,
} from 'phosphor-react';
import m, { useState as g, useEffect as u, useLayoutEffect as h, useRef as b, useCallback as f } from 'react';
import { createStitches as v, createTheme as $, keyframes as w, globalCss as y } from '@stitches/react';
import { parseCookies as x, setCookie as k } from 'nookies';
import W from 'next/link';
import { useRouter as C } from 'next/router';
function E(e) {
  var t = e.stroke,
    r = e.width,
    n = void 0 === r ? 16 : r;
  /*#__PURE__*/ return m.createElement(
    'svg',
    { height: n, stroke: void 0 === t ? '#969696' : t, viewBox: '0 0 38 38', width: n, xmlns: 'http://www.w3.org/2000/svg' },
    /*#__PURE__*/ m.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      /*#__PURE__*/ m.createElement(
        'g',
        { strokeWidth: '2', transform: 'translate(1 1)' },
        /*#__PURE__*/ m.createElement('circle', { cx: '18', cy: '18', r: '18', strokeOpacity: '.5' }),
        /*#__PURE__*/ m.createElement(
          'path',
          { d: 'M36 18c0-9.94-8.06-18-18-18' },
          /*#__PURE__*/ m.createElement('animateTransform', { attributeName: 'transform', dur: '1s', from: '0 18 18', repeatCount: 'indefinite', to: '360 18 18', type: 'rotate' })
        )
      )
    )
  );
}
function S() {
  return (
    (S =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    S.apply(this, arguments)
  );
}
function T(e, t) {
  if (null == e) return {};
  var r,
    n,
    o = {},
    i = Object.keys(e);
  for (n = 0; n < i.length; n++) t.indexOf((r = i[n])) >= 0 || (o[r] = e[r]);
  return o;
}
var B,
  R = {
    phone: '@media only screen and (max-width: 720px)',
    tabletX: '@media only screen and (min-width: 721px) and (max-width: 960px)',
    tablet: '@media only screen and (max-width: 960px)',
    laptopX: '@media only screen and (min-width: 961px) and (max-width: 1580px)',
    laptop: '@media only screen and (max-width: 1580px)',
    desktopX: '@media only screen and (min-width: 1581px) and (max-width: 2160px)',
    desktop: '@media only screen and (max-width: 2160px)',
    wide: '@media only screen and (min-width: 2161px)',
    dark: '@media only screen and (prefers-color-scheme: dark)',
  },
  L = v({
    theme: {
      colors: {
        baseBody: '#ffffff',
        base100: 'rgb(13, 24, 47)',
        base200: 'rgba(13, 24, 47, 0.9)',
        base300: 'rgba(13, 24, 47, 0.15)',
        base400: 'rgba(13, 24, 47, 0.1)',
        baseContrast100: 'rgb(255, 255, 255)',
        baseContrast200: 'rgb(230, 240, 241)',
        baseContrast300: 'rgba(255, 255, 255, 0.15)',
        baseContrast400: 'rgba(255, 255, 255, 0.1)',
        red100: 'rgb(165, 71, 65)',
        red200: 'rgb(249, 187, 183)',
        red300: 'rgb(241, 202, 202)',
        red400: 'rgba(165, 71, 65, 0.2)',
        yellow100: 'rgb(172, 113, 5)',
        yellow200: 'rgb(249, 221, 170)',
        yellow300: 'rgb(245, 226, 195)',
        yellow400: 'rgba(172, 113, 5, 0.2)',
        green100: 'rgb(8, 112, 77)',
        green200: 'rgb(178, 240, 203)',
        green300: 'rgb(202, 243, 226)',
        green400: 'rgba(8, 105, 112, 0.2)',
        blue100: 'rgb(5, 91, 141)',
        blue200: 'rgb(185, 210, 237)',
        blue300: 'rgb(206, 222, 240)',
        blue400: 'rgba(5, 91, 141, 0.2)',
        navy100: 'inherit',
        navy200: 'rgba(0, 76, 104, 0.12)',
        navy300: 'rgba(0, 76, 104, 0.08)',
        navy400: 'rgba(0, 76, 104, 0.04)',
        purple100: 'rgb(89, 33, 141)',
        purple200: 'rgb(219, 195, 244)',
        purple300: 'rgb(229, 212, 246)',
        purple400: 'rgba(89, 33, 141, 0.2)',
        pink100: 'rgb(107, 26, 83)',
        pink200: 'rgb(240, 195, 226)',
        pink300: 'rgb(245, 213, 235)',
        pink400: 'rgba(107, 26, 83, 0.2)',
        border100: 'rgba(0, 1, 2, 0.122)',
        border200: 'rgba(0, 1, 2, 0.088)',
        border300: 'rgba(0, 1, 2, 0.066)',
      },
      space: {
        1: '0.2rem',
        2: '0.4rem',
        3: '1rem',
        4: '1.6rem',
        5: '2rem',
        6: '2.5rem',
        7: '3.5rem',
        8: '5rem',
        9: '7rem',
        10: '8.5rem',
        11: '11rem',
        12: '15rem',
        h1: '$6',
        h2: '$5',
        h3: '$3',
        h4: '$4',
        h5: '$3',
        h6: '$3',
        t1: '$3',
        t2: '$2',
        t3: '$1',
      },
      fonts: { body: 'Graphik, system-ui, sans-serif' },
      fontSizes: { h1: '3.1rem', h2: '2.7rem', h3: '2rem', h4: '1.9rem', h5: '1.8rem', h6: '1.6rem', t1: '1.5rem', t2: '1.4rem', t3: '1.3rem' },
      lineHeights: { h1: '1.3', h2: '1.3', h3: '1.4', h4: '1.4', h5: '1.4', h6: '1.4', t1: '1.4', t2: '1.3', t3: '1.3' },
      sizes: { 1: '98.5%', 2: '98%', 3: '1440px', 4: '1600px', 5: '1800px' },
      radii: { 1: '0.5rem', 2: '1rem', 3: '1.5rem' },
      shadows: { 1: '0 0.2rem 0.1rem rgba(0, 0, 0, 0.01)', 2: '0 0.5rem 0.25rem rgba(0, 0, 0, 0.033)', 3: '0 1rem 2rem rgba(0, 0, 0, 0.099)' },
      zIndices: { dropdown: 10, tooltip: 15, alert: 100, cookies: 9999 },
      transitions: { 1: 'all 0.33s ease-in-out' },
      media: R,
    },
    utils: {
      pt: function (e) {
        return { paddingTop: e + '!important' };
      },
      pb: function (e) {
        return { paddingBottom: e + '!important' };
      },
      pl: function (e) {
        return { paddingLeft: e + '!important' };
      },
      pr: function (e) {
        return { paddingRight: e + '!important' };
      },
      ptb: function (e) {
        return { paddingTop: e + '!important', paddingBottom: e + '!important' };
      },
      plr: function (e) {
        return { paddingLeft: e + '!important', paddingRight: e + '!important' };
      },
      mt: function (e) {
        return { marginTop: e + '!important' };
      },
      mb: function (e) {
        return { marginBottom: e + '!important' };
      },
      ml: function (e) {
        return { marginLeft: e + '!important' };
      },
      mr: function (e) {
        return { marginRight: e + '!important' };
      },
      mtb: function (e) {
        return { marginTop: e + '!important', marginBottom: e + '!important' };
      },
      mlr: function (e) {
        return { marginLeft: e + '!important', marginRight: e + '!important' };
      },
      bt: function (e) {
        return { borderTop: '0.1rem solid ' + e };
      },
      bb: function (e) {
        return { borderBottom: '0.1rem solid ' + e };
      },
      bl: function (e) {
        return { borderLeft: '0.1rem solid ' + e };
      },
      br: function (e) {
        return { borderRight: '0.1rem solid ' + e };
      },
      ft: function (e) {
        var t;
        return (
          ((t = { fontSize: e + '!important', lineHeight: e + '!important', '&:last-child': { marginBottom: 0 } })[R.phone] = { fontSize: 'calc(' + e + ' * .85) !important' }),
          (t[R.tabletX] = { fontSize: 'calc(' + e + ' * .875) !important' }),
          (t[R.laptopX] = { fontSize: 'calc(' + e + ' * .9) !important' }),
          (t[R.desktopX] = { fontSize: 'calc(' + e + ' * .95) !important' }),
          t
        );
      },
      hidden: function (e) {
        var t;
        return ((t = { display: 'auto' })[R[e]] = { display: 'none' }), t;
      },
      visible: function (e) {
        var t;
        return ((t = { display: 'none' })[R[e]] = { display: 'block' }), t;
      },
      visibleInline: function (e) {
        var t;
        return ((t = { display: 'none' })[R[e]] = { display: 'inline-block' }), t;
      },
      phone: function (e) {
        var t;
        return ((t = {})[R.phone] = e), t;
      },
      tablet: function (e) {
        var t;
        return ((t = {})[R.tablet] = e), t;
      },
      tabletX: function (e) {
        var t;
        return ((t = {})[R.tabletX] = e), t;
      },
      laptop: function (e) {
        var t;
        return ((t = {})[R.laptop] = e), t;
      },
      laptopX: function (e) {
        var t;
        return ((t = {})[R.laptopX] = e), t;
      },
      desktop: function (e) {
        var t;
        return ((t = {})[R.desktop] = e), t;
      },
      desktopX: function (e) {
        var t;
        return ((t = {})[R.desktopX] = e), t;
      },
      wide: function (e) {
        var t;
        return ((t = {})[R.wide] = e), t;
      },
    },
  }),
  I = L.theme,
  F = L.css,
  z = L.styled,
  A = L.getCssText,
  H = $('dark', { colors: S({}, I.colors) }),
  O =
    ((B = w({ '0%': { opacity: 0.5, transform: 'scale(0.95)' }, '50%': { opacity: 1, transform: 'scale(1)' }, '100%': { opacity: 0.5, transform: 'scale(0.95)' } })),
    {
      Wrapper: z('div', {
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'relative',
        transition: '$1',
        padding: '$2 calc($4 / 1.5)',
        borderRadius: '$3',
        variants: {
          theme: {
            default: { backgroundColor: '$baseContrast100', color: '$base100' },
            red: { backgroundColor: '$red300', color: '$red100' },
            yellow: { backgroundColor: '$yellow300', color: '$yellow100' },
            green: { backgroundColor: '$green300', color: '$green100' },
            blue: { backgroundColor: '$blue300', color: '$blue100' },
            navy: { backgroundColor: '$navy300', color: '$navy100' },
            purple: { backgroundColor: '$purple300', color: '$purple100' },
            pink: { backgroundColor: '$pink300', color: '$pink100' },
            border: { backgroundColor: '$baseContrast100', color: '$base100', border: '0.1rem solid $border200' },
          },
          inline: { false: { display: 'block' }, true: { display: 'inline-block' } },
          inlineSpacer: {
            default: { marginRight: '0' },
            1: { marginRight: '$1' },
            2: { marginRight: '$2' },
            3: { marginRight: '$3' },
            4: { marginRight: '$4' },
            5: { marginRight: '$5' },
            6: { marginRight: '$6' },
          },
          shadow: { false: { boxShadow: 'none' }, true: { boxShadow: '$2' } },
        },
        '&:disabled': { opacity: 0.5, cursor: 'wait' },
      }),
      DotWrapper: z('div', {
        animation: B + ' 1.5s infinite',
        display: 'inline-flex',
        verticalAlign: 'middle',
        marginRight: '$1',
        variants: {
          dotColor: {
            default: { color: 'inherit' },
            red: { color: '$red100' },
            yellow: { color: '$yellow100' },
            green: { color: '$green100' },
            blue: { color: '$blue100' },
            navy: { color: '$navy100' },
            purple: { color: '$purple100' },
            pink: { color: '$pink100' },
          },
        },
      }),
    }),
  X = O.Wrapper,
  P = O.DotWrapper;
function D(t) {
  var r = t.children,
    n = t.css,
    o = t.dot,
    i = t.dotColor,
    a = t.id,
    l = t.inline,
    d = void 0 === l || l,
    p = t.inlineSpacer,
    c = t.shadow,
    s = t.theme;
  return t.loader
    ? /*#__PURE__*/ m.createElement(X, { css: { height: '$7' }, id: a || void 0 }, /*#__PURE__*/ m.createElement(E, null))
    : /*#__PURE__*/ m.createElement(
        X,
        { css: n, id: a || void 0, inline: d, inlineSpacer: p || 'default', shadow: c, theme: s || 'default' },
        o &&
          ('pulse' === o
            ? /*#__PURE__*/ m.createElement(P, { dotColor: i || 'default' }, /*#__PURE__*/ m.createElement(e, { size: 10, style: { marginRight: 3.33 }, weight: 'fill' }))
            : /*#__PURE__*/ m.createElement(e, { size: 10, style: { marginRight: 3.33 }, weight: 'fill' })),
        r
      );
}
var M = ['children', 'css', 'disabled', 'icon', 'iconPosition', 'id', 'inline', 'inlineSpacer', 'loader', 'onClick', 'theme'],
  N = {
    Wrapper: z('button', {
      textAlign: 'center',
      alignContent: 'center',
      verticalAlign: 'middle',
      position: 'relative',
      transition: '$1',
      fontWeight: 'normal',
      padding: '$2 $4',
      borderRadius: '$1',
      ft: '$h5',
      variants: {
        theme: {
          default: { backgroundColor: '$baseContrast100', color: '$base100', border: '0.1rem solid $border100', '&:hover': { backgroundColor: '$navy300' } },
          red: { backgroundColor: '$red300', color: '$red100', border: '0.1rem solid $red400', '&:hover': { backgroundColor: '$red200' } },
          yellow: { backgroundColor: '$yellow300', color: '$yellow100', border: '0.1rem solid $yellow400', '&:hover': { backgroundColor: '$yellow200' } },
          green: { backgroundColor: '$green300', color: '$green100', border: '0.1rem solid $green400', '&:hover': { backgroundColor: '$green200' } },
          blue: { backgroundColor: '$blue300', color: '$blue100', border: '0.1rem solid $blue400', '&:hover': { backgroundColor: '$blue200' } },
          navy: { backgroundColor: '$navy300', color: '$navy100', border: '0.1rem solid $navy200', '&:hover': { backgroundColor: '$navy200' } },
          purple: { backgroundColor: '$purple300', color: '$purple100', border: '0.1rem solid $purple200', '&:hover': { backgroundColor: '$purple200' } },
          pink: { backgroundColor: '$pink300', color: '$pink100', border: '0.1rem solid $pink200', '&:hover': { backgroundColor: '$pink200' } },
          transparent: { backgroundColor: 'transparent', color: '$base100', border: '0.1rem solid transparent', '&:hover': { backgroundColor: '$navy300' } },
          dark: { backgroundColor: '$base100', color: '$baseContrast100', border: '0.1rem solid $base100', '&:hover': { backgroundColor: '$base200' } },
        },
        inline: { false: { display: 'block' }, true: { display: 'inline-block' } },
        inlineSpacer: {
          default: { marginRight: '0' },
          1: { marginRight: '$1' },
          2: { marginRight: '$2' },
          3: { marginRight: '$3' },
          4: { marginRight: '$4' },
          5: { marginRight: '$5' },
          6: { marginRight: '$6' },
        },
        shadow: { false: { boxShadow: 'none' }, true: { boxShadow: '$2' } },
      },
      boxShadow: '$1',
      '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
    }),
    IconWrapper: z('div', {
      display: 'inline-flex',
      verticalAlign: 'middle',
      variants: { iconPosition: { left: { marginRight: '$3' }, right: { marginLeft: '$3' } } },
      svg: { verticalAlign: 'middle', width: '2.1rem', height: '2.1rem' },
    }),
  },
  j = N.Wrapper,
  G = N.IconWrapper;
function K(e) {
  var t = e.children,
    r = e.css,
    n = e.disabled,
    o = e.icon,
    i = e.iconPosition,
    a = void 0 === i ? 'left' : i,
    l = e.id,
    d = e.inline,
    p = void 0 === d || d,
    c = e.inlineSpacer,
    s = e.loader,
    g = e.onClick,
    u = e.theme,
    h = T(e, M);
  return s
    ? /*#__PURE__*/ m.createElement(j, null, /*#__PURE__*/ m.createElement(E, null))
    : /*#__PURE__*/ m.createElement(
        j,
        S({}, h, { css: r, disabled: n, id: l || void 0, inline: p, inlineSpacer: c || 'default', onClick: g, theme: u || 'default' }),
        o && a && 'left' === a && /*#__PURE__*/ m.createElement(G, { iconPosition: a }, o),
        t,
        o && a && 'right' === a && /*#__PURE__*/ m.createElement(G, { iconPosition: a }, o)
      );
}
var Y,
  J,
  q = {
    Wrapper: z('div', {
      display: 'block',
      position: 'relative',
      borderRadius: '$2',
      height: '100%',
      transition: '$1',
      color: 'inherit',
      variants: {
        theme: {
          default: { backgroundColor: '$baseContrast100' },
          red: { backgroundColor: '$red300' },
          yellow: { backgroundColor: '$yellow300' },
          green: { backgroundColor: '$green300' },
          blue: { backgroundColor: '$blue300' },
          navy: { backgroundColor: '$navy300' },
          purple: { backgroundColor: '$purple300' },
          pink: { backgroundColor: '$pink300' },
          transparent: { backgroundColor: 'transparent' },
        },
        border: {
          false: { border: 0 },
          default: { border: '0.1rem solid $border200', boxShadow: '$1' },
          red: { border: '0.1rem solid $red200', boxShadow: '$1' },
          yellow: { border: '0.1rem solid $yellow200', boxShadow: '$1' },
          green: { border: '0.1rem solid $green200', boxShadow: '$1' },
          blue: { border: '0.1rem solid $blue200', boxShadow: '$1' },
          navy: { border: '0.1rem solid $navy200', boxShadow: '$1' },
          purple: { border: '0.1rem solid $purple200', boxShadow: '$1' },
          pink: { border: '0.1rem solid $pink200', boxShadow: '$1' },
          transparent: { border: 'none', boxShadow: '$1' },
        },
        loader: { false: { opacity: 1 }, true: { opacity: 0.5 } },
        padding: { default: { padding: '$5' }, extra: ((Y = { padding: '$7' }), (Y[R.phone] = { padding: '$6' }), Y), none: { padding: 0 } },
      },
      '&:hover': { boxShadow: '$2' },
    }),
    ImageWrapper: z('div', {
      width: '100%',
      position: 'relative',
      backgroundColor: '$baseContrast200',
      borderTopLeftRadius: '$2',
      borderTopRightRadius: '$2',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      img: { borderTopLeftRadius: '$2', borderTopRightRadius: '$2', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
    }),
    ImageChildrenWrapper: z('div', {
      variants: { padding: { default: { padding: '$5' }, extra: ((J = { padding: '$7' }), (J[R.phone] = { padding: '$6' }), J), none: { padding: 0 } } },
    }),
  },
  Q = q.Wrapper,
  U = q.ImageWrapper,
  V = q.ImageChildrenWrapper;
function Z(e) {
  var t = e.css,
    r = e.extra,
    n = e.id,
    o = e.theme,
    i = e.loader,
    a = e.border,
    l = e.image,
    d = e.minimal,
    p = e.children;
  return l
    ? /*#__PURE__*/ m.createElement(
        Q,
        { border: 'boolean' != typeof a ? a : 'default', css: t, id: n, loader: i, padding: 'none', theme: o || 'default' },
        /*#__PURE__*/ m.createElement(U, { css: { height: e.imageHeight || '15rem' } }, l),
        /*#__PURE__*/ m.createElement(V, { padding: d ? 'none' : r ? 'extra' : 'default' }, p)
      )
    : /*#__PURE__*/ m.createElement(
        Q,
        { border: 'boolean' != typeof a ? a : 'default', css: t, id: n, loader: i, padding: d ? 'none' : r ? 'extra' : 'default', theme: o || 'default' },
        p
      );
}
function _() {
  var e = {
    variants: S(
      {
        inline: { false: { display: 'inherit' }, true: { display: 'inline-block', marginBottom: '0!important' } },
        inlineSpacer: {
          default: { marginRight: '0' },
          1: { marginRight: '$1' },
          2: { marginRight: '$2' },
          3: { marginRight: '$3' },
          4: { marginRight: '$4' },
          5: { marginRight: '$5' },
          6: { marginRight: '$6' },
        },
      },
      {
        top: {
          default: { paddingTop: 0 },
          1: { paddingTop: '$1' },
          2: { paddingTop: '$2' },
          3: { paddingTop: '$3' },
          4: { paddingTop: '$4' },
          5: { paddingTop: '$5' },
          6: { paddingTop: '$6' },
          7: { paddingTop: '$7' },
          8: { paddingTop: '$8' },
          9: { paddingTop: '$9' },
          10: { paddingTop: '$10' },
          11: { paddingTop: '$11' },
          12: { paddingTop: '$12' },
        },
        bottom: {
          default: { paddingBottom: 0 },
          1: { paddingBottom: '$1' },
          2: { paddingBottom: '$2' },
          3: { paddingBottom: '$3' },
          4: { paddingBottom: '$4' },
          5: { paddingBottom: '$5' },
          6: { paddingBottom: '$6' },
          7: { paddingBottom: '$7' },
          8: { paddingBottom: '$8' },
          9: { paddingBottom: '$9' },
          10: { paddingBottom: '$10' },
          11: { paddingBottom: '$11' },
          12: { paddingBottom: '$12' },
        },
      }
    ),
    '&:last-child': { marginBottom: '0!important' },
  };
  return {
    HeadingOneWrapper: z('h1', S({ ft: '$h1', fontWeight: 'bold', marginBottom: '$h1' }, e)),
    HeadingTwoWrapper: z('h2', S({ ft: '$h2', fontWeight: 'bold', marginBottom: '$h2' }, e)),
    HeadingThreeWrapper: z('h3', S({ ft: '$h3', fontWeight: 'bold', marginBottom: '$h3' }, e)),
    HeadingFourWrapper: z('h4', S({ ft: '$h4', fontWeight: 'normal', marginBottom: '$h4', opacity: 0.8 }, e)),
    HeadingFiveWrapper: z('h5', S({ ft: '$h5', fontWeight: 'normal', marginBottom: '$h5' }, e)),
    HeadingSixWrapper: z('h6', S({ ft: '$h6', fontWeight: 'normal', marginBottom: '$h6', opacity: 0.8 }, e)),
    TextOneWrapper: z('p', S({ ft: '$t1', fontWeight: 'normal', marginBottom: '$t1' }, e)),
    TextTwoWrapper: z('p', S({ ft: '$t2', fontWeight: 'normal', marginBottom: '$t2' }, e)),
    TextThreeWrapper: z('p', S({ ft: '$t3', fontWeight: 'normal', marginBottom: '$t3' }, e)),
  };
}
var ee = _(),
  te = ee.HeadingOneWrapper,
  re = ee.HeadingTwoWrapper,
  ne = ee.HeadingThreeWrapper,
  oe = ee.HeadingFourWrapper,
  ie = ee.HeadingFiveWrapper,
  ae = ee.HeadingSixWrapper;
function le(e) {
  var t = e.align,
    r = e.children,
    n = e.id,
    o = e.inline,
    i = void 0 !== o && o,
    a = e.inlineSpacer,
    l = e.level,
    d = e.top;
  /*#__PURE__*/ return m.createElement(
    1 === l ? te : 2 === l ? re : 3 === l ? ne : 4 === l ? oe : 5 === l ? ie : ae,
    { bottom: e.bottom, css: S({ textAlign: void 0 === t ? 'inherit' : t }, e.css), id: n, inline: i, inlineSpacer: a || 'default', top: d },
    r
  );
}
var de = _(),
  pe = de.TextOneWrapper,
  ce = de.TextTwoWrapper,
  se = de.TextThreeWrapper;
function me(e) {
  var t = e.align,
    r = e.children,
    n = e.id,
    o = e.inline,
    i = void 0 !== o && o,
    a = e.inlineSpacer,
    l = e.level,
    d = void 0 === l ? 1 : l,
    p = e.top;
  /*#__PURE__*/ return m.createElement(
    1 === d ? pe : 2 === d ? ce : se,
    { bottom: e.bottom, css: S({ textAlign: void 0 === t ? 'inherit' : t }, e.css), id: n, inline: i, inlineSpacer: a || 'default', top: p },
    r
  );
}
var ge = ['children', 'css', 'cssActive', 'cssInactive', 'hover', 'href', 'id'];
function ue(e) {
  var t = e.children,
    r = e.css,
    n = e.cssActive,
    o = e.cssInactive,
    i = e.hover,
    a = e.href,
    l = e.id,
    d = T(e, ge),
    p = C(),
    c = (null == p ? void 0 : p.pathname) || '/',
    s = z('a', {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': { color: 'inherit', opacity: i ? 0.7 : 1 },
      '&:focus': { color: 'inherit' },
      '&.inactive': S({}, o || { color: '$navy100' }),
      '&.active': S({}, n || { color: 'inherit' }),
    });
  /*#__PURE__*/ return m.createElement(W, S({ href: a, passHref: !0 }, d), /*#__PURE__*/ m.createElement(s, { className: c === a ? 'active' : 'inactive', css: r, id: l }, t));
}
var he,
  be,
  fe = ((be = w({ '0%': { opacity: 1, display: 'block' }, '100%': { opacity: 0, display: 'none' } })),
  {
    Wrapper: z(
      'div',
      (((he = {
        position: 'fixed',
        transition: '$1',
        zIndex: '$cookies',
        bottom: '$4',
        left: 0,
        right: 0,
        maxWidth: '100%',
        margin: 'auto',
        textAlign: 'center',
        variants: { isExiting: { true: { animation: be + ' 0.5s forwards' } } },
        svg: { verticalAlign: 'middle', cursor: 'pointer', transition: '$1', '&:hover': { opacity: 0.4 } },
      })[R.phone] = { maxWidth: '95%' }),
      he)
    ),
  }).Wrapper;
function ve(e) {
  var r = e.css,
    n = e.href,
    o = void 0 === n ? 'https://cosmogroup.io/legal/privacy' : n,
    i = e.token,
    a = void 0 === i ? 'cooookies' : i,
    l = g(!1),
    d = l[0],
    p = l[1],
    c = g(!1),
    s = c[0],
    h = c[1];
  return (
    u(
      function () {
        var e = x();
        p('true' !== e[a]);
      },
      [a]
    ),
    d &&
      /*#__PURE__*/ m.createElement(
        fe,
        { css: r, isExiting: s },
        /*#__PURE__*/ m.createElement(
          Z,
          { border: !0, css: { ptb: '$3', textAlign: 'center', display: 'inline-flex', boxShadow: '$3', '*': { color: '$base100' } } },
          /*#__PURE__*/ m.createElement(le, { inline: !0, inlineSpacer: 3, level: 5 }, '🍪'),
          /*#__PURE__*/ m.createElement(
            le,
            { inline: !0, inlineSpacer: 3, level: 5 },
            'We use cookies.',
            ' ',
            /*#__PURE__*/ m.createElement('a', { href: o }, /*#__PURE__*/ m.createElement('b', null, 'Learn more'))
          ),
          /*#__PURE__*/ m.createElement(
            le,
            { inline: !0, level: 5 },
            /*#__PURE__*/ m.createElement(t, {
              onClick: function () {
                k(null, a, 'true', { maxAge: 31536e3, path: '/' }),
                  h(!0),
                  setTimeout(function () {
                    p(!1);
                  }, 2500);
              },
            })
          )
        )
      )
  );
}
const $e = 'undefined' != typeof window ? h : u;
function we(e, t, r) {
  const n = b(t);
  $e(() => {
    n.current = t;
  }, [t]),
    u(() => {
      const t = r?.current || window;
      if (!t || !t.addEventListener) return;
      const o = (e) => n.current(e);
      return (
        t.addEventListener(e, o),
        () => {
          t.removeEventListener(e, o);
        }
      );
    }, [e, r]);
}
function ye(e) {
  const t = (function (e) {
      const t = (e) => 'undefined' != typeof window && window.matchMedia(e).matches,
        [r, n] = g(t(e));
      function o() {
        n(t(e));
      }
      return (
        u(() => {
          const t = window.matchMedia(e);
          return (
            o(),
            t.addEventListener('change', o),
            () => {
              t.removeEventListener('change', o);
            }
          );
        }, [e]),
        r
      );
    })('(prefers-color-scheme: dark)'),
    [r, n] = (function (e, t) {
      const r = f(() => {
          if ('undefined' == typeof window) return t;
          try {
            const r = window.localStorage.getItem(e);
            return r
              ? (function (e) {
                  try {
                    return 'undefined' === e ? void 0 : JSON.parse(e ?? '');
                  } catch {
                    return void console.log('parsing error on', { value: e });
                  }
                })(r)
              : t;
          } catch (r) {
            return console.warn(`Error reading localStorage key “${e}”:`, r), t;
          }
        }, [t, e]),
        [n, o] = g(r),
        i = f(
          (t) => {
            'undefined' == typeof window && console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);
            try {
              const r = t instanceof Function ? t(n) : t;
              window.localStorage.setItem(e, JSON.stringify(r)), o(r), window.dispatchEvent(new Event('local-storage'));
            } catch (t) {
              console.warn(`Error setting localStorage key “${e}”:`, t);
            }
          },
          [e, n]
        );
      u(() => {
        o(r());
      }, []);
      const a = f(() => {
        o(r());
      }, [r]);
      return we('storage', a), we('local-storage', a), [n, i];
    })('usehooks-ts-dark-mode', e ?? t ?? !1);
  return (
    (function (e, r) {
      const o = (function () {
        const e = b(!0);
        return e.current ? ((e.current = !1), !0) : e.current;
      })();
      u(() => {
        o || n(t);
      }, r);
    })(0, [t]),
    { isDarkMode: r, toggle: () => n((e) => !e), enable: () => n(!0), disable: () => n(!1) }
  );
}
function xe(e, t, r = 'mousedown') {
  we(r, (r) => {
    const n = e?.current;
    n && !n.contains(r.target) && t(r);
  });
}
function ke() {
  var e,
    t = w({ '0%': { opacity: 0 }, '100%': { opacity: 1 } });
  return {
    Wrapper: z('div', { position: 'initial' }),
    TriggerWrapper: z('div', { display: 'inline-flex' }),
    OverlayWrapper: z('div', {
      position: 'fixed',
      transition: '$1',
      zIndex: '$alert',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '$base300',
      width: '100%',
      scrollBehavior: 'smooth',
      overscrollBehavior: 'contain',
      overflowY: 'scroll',
      variants: { animation: { false: { animation: 'none' }, true: { animation: t + ' .6s' } } },
    }),
    CardWrapper: z(
      'div',
      (((e = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70rem',
        maxWidth: '90vw',
        maxHeight: '80vh',
        boxShadow: '$3',
        transition: '$1',
        variants: { animation: { false: { animation: 'none' }, true: { animation: t + ' .3s' } } },
      })[R.phone] = { width: '95%', maxWidth: '95%', maxHeight: '95vh' }),
      e)
    ),
    Exit: z('div', { position: 'absolute', top: 0, right: 0, padding: '1rem', cursor: 'pointer', zIndex: '$alert' }),
    CardActionsWrapper: z('div', { paddingTop: '$6', textAlign: 'right' }),
    CardPrimaryActionwrapper: z('div', { display: 'inline-block' }),
  };
}
var We = ke(),
  Ce = We.Wrapper,
  Ee = We.TriggerWrapper,
  Se = We.OverlayWrapper,
  Te = We.CardWrapper,
  Be = We.Exit;
function Re(e) {
  var r = e.children,
    n = e.css,
    o = e.id,
    i = e.trigger,
    a = b(null),
    l = g(!1),
    d = l[0],
    p = l[1];
  return (
    xe(a, function () {
      p(!1);
    }),
    h(
      function () {
        document.body.style.overflow = d ? 'hidden' : 'auto';
      },
      [d]
    ),
    /*#__PURE__*/ m.createElement(
      Ce,
      { id: o },
      /*#__PURE__*/ m.createElement(
        Ee,
        {
          onClickCapture: function (e) {
            e.persist(), p(!0);
          },
        },
        i
      ),
      d &&
        /*#__PURE__*/ m.createElement(
          Se,
          { animation: d },
          /*#__PURE__*/ m.createElement(
            Te,
            { animation: d, css: n, ref: a },
            /*#__PURE__*/ m.createElement(
              Be,
              {
                onClick: function () {
                  return p(!1);
                },
              },
              /*#__PURE__*/ m.createElement(t, { size: 18 })
            ),
            /*#__PURE__*/ m.createElement(Z, null, r)
          )
        )
    )
  );
}
var Le = ke(),
  Ie = Le.Wrapper,
  Fe = Le.TriggerWrapper,
  ze = Le.OverlayWrapper,
  Ae = Le.CardWrapper,
  He = Le.CardActionsWrapper,
  Oe = Le.CardPrimaryActionwrapper;
function Xe(e) {
  var t = e.action,
    r = e.cancel,
    n = e.css,
    o = e.description,
    i = e.id,
    a = e.title,
    l = e.trigger,
    d = b(null),
    p = g(!1),
    c = p[0],
    s = p[1];
  return (
    xe(d, function () {
      s(!1);
    }),
    h(
      function () {
        document.body.style.overflow = c ? 'hidden' : 'auto';
      },
      [c]
    ),
    /*#__PURE__*/ m.createElement(
      Ie,
      { id: i },
      /*#__PURE__*/ m.createElement(
        Fe,
        {
          onClickCapture: function (e) {
            e.persist(), s(!0);
          },
        },
        l
      ),
      c &&
        /*#__PURE__*/ m.createElement(
          ze,
          { animation: c },
          /*#__PURE__*/ m.createElement(
            Ae,
            { animation: c, css: n, ref: d },
            /*#__PURE__*/ m.createElement(
              Z,
              null,
              /*#__PURE__*/ m.createElement(le, { level: 3 }, a),
              /*#__PURE__*/ m.createElement(le, { level: 6 }, o),
              /*#__PURE__*/ m.createElement(
                He,
                null,
                /*#__PURE__*/ m.createElement(
                  K,
                  {
                    css: { mr: '$4' },
                    onClick: function (e) {
                      e.persist(), s(!1);
                    },
                  },
                  r
                ),
                /*#__PURE__*/ m.createElement(
                  Oe,
                  {
                    onClickCapture: function (e) {
                      e.persist(), s(!1);
                    },
                  },
                  t
                )
              )
            )
          )
        )
    )
  );
}
function Pe() {
  var e = w({ '0%': { opacity: 0 }, '100%': { opacity: 1 } });
  return {
    Wrapper: z('div', { position: 'relative', display: 'inline-flex' }),
    TriggerWrapper: z('div', {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      appearance: 'none',
      outline: 'none',
      userSelect: 'none',
      transition: '$1',
      variants: { hover: { false: { '&:hover': { color: 'inherit', opacity: 1 }, true: { '&:hover': { color: 'inherit', opacity: 0.7 } } } } },
    }),
    GroupWrapper: z('div', {
      background: '$baseContrast100',
      borderRadius: '$2',
      border: '0.1rem solid $border100',
      boxShadow: '$3',
      boxSizing: 'border-box',
      overflowY: 'auto',
      position: 'absolute',
      padding: '$2',
      top: '120%',
      maxHeight: '50rem',
      width: '100%',
      zIndex: '$dropdown',
      webkitoverflowscrolling: 'touch',
      variants: { animation: { false: { animation: 'none' }, true: { animation: e + ' .3s' } } },
    }),
    ItemWrapper: z('div', {
      display: 'flex',
      textAlign: 'left',
      transition: '$1',
      padding: '$3',
      borderBottom: '0.1rem solid $navy300',
      cursor: 'pointer',
      borderRadius: '$1',
      ft: '$h6',
      opacity: 1,
      a: { display: 'block', width: '100%' },
      '&:hover': { backgroundColor: '$navy400' },
      '&:last-child': { borderBottom: 0 },
      '&.active': { backgroundColor: '$navy300', '&:hover': { backgroundColor: '$navy400' } },
      phone: { ft: '$h5' },
    }),
    IconWrapper: z('div', {
      display: 'inline-flex',
      alignItems: 'center',
      width: 'auto',
      marginRight: '$3',
      height: '100%',
      position: 'relative',
      verticalAlign: 'middle',
      alignSelf: 'center',
    }),
  };
}
var De = Pe(),
  Me = De.Wrapper,
  Ne = De.GroupWrapper,
  je = De.ItemWrapper,
  Ge = De.IconWrapper;
function Ke(e) {
  var t = e.actions,
    r = e.align,
    n = void 0 === r ? 'left' : r,
    o = e.css,
    i = e.id,
    a = e.label,
    l = e.options,
    d = e.passKey,
    p = e.width,
    c = b(null),
    s = g(!1),
    u = s[0],
    h = s[1];
  return (
    xe(c, function () {
      h(!1);
    }),
    /*#__PURE__*/ m.createElement(
      Me,
      { css: o, id: i, key: d, ref: c },
      /*#__PURE__*/ m.createElement(
        K,
        {
          onClickCapture: function () {
            h(!u);
          },
        },
        a || /*#__PURE__*/ m.createElement(E, null)
      ),
      u &&
        /*#__PURE__*/ m.createElement(
          Ne,
          { animation: u, css: { minWidth: p || '15rem', maxWidth: p || '80rem', left: 'left' === n ? '0' : 'auto', right: 'right' === n ? '0' : 'auto' } },
          l.map(function (e) {
            /*#__PURE__*/ return m.createElement(
              je,
              {
                className: a === e.name ? 'active' : 'inactive',
                key: e.value,
                onClickCapture: function () {
                  return t(e.value, e.name), void h(!1);
                },
              },
              e.icon && /*#__PURE__*/ m.createElement(Ge, null, e.icon),
              e.name
            );
          })
        )
    )
  );
}
var Ye = Pe(),
  Je = Ye.Wrapper,
  qe = Ye.TriggerWrapper,
  Qe = Ye.GroupWrapper,
  Ue = Ye.ItemWrapper,
  Ve = Ye.IconWrapper;
function Ze(e) {
  var t = e.align,
    r = void 0 === t ? 'left' : t,
    n = e.css,
    o = e.hover,
    i = e.id,
    a = e.options,
    l = e.passKey,
    d = e.trigger,
    p = e.width,
    c = C(),
    s = b(null),
    u = g(!1),
    h = u[0],
    f = u[1],
    v = (null == c ? void 0 : c.pathname) || '/';
  return (
    xe(s, function () {
      f(!1);
    }),
    /*#__PURE__*/ m.createElement(
      Je,
      { css: n, id: i, key: l, ref: s },
      /*#__PURE__*/ m.createElement(
        qe,
        {
          hover: o,
          onClickCapture: function () {
            f(!h);
          },
        },
        d
      ),
      h &&
        /*#__PURE__*/ m.createElement(
          Qe,
          { animation: h, css: { minWidth: p || '15rem', maxWidth: p || '80rem', left: 'left' === r ? '0' : 'auto', right: 'right' === r ? '0' : 'auto' } },
          a.map(function (e) {
            var t = e.value,
              r = e.name,
              n = e.icon;
            /*#__PURE__*/ return m.createElement(
              Ue,
              { className: v === t ? 'active' : '', key: t },
              /*#__PURE__*/ m.createElement(
                'a',
                {
                  onClick: function () {
                    return (function (e) {
                      c.push(e), f(!1);
                    })(t);
                  },
                },
                n
                  ? /*#__PURE__*/ m.createElement(Ve, null, n, ' ', ' ', /*#__PURE__*/ m.createElement(le, { css: { opacity: 1 }, inline: !0, level: 6 }, r))
                  : /*#__PURE__*/ m.createElement(le, { css: { opacity: 1 }, level: 6 }, r)
              )
            );
          })
        )
    )
  );
}
function _e() {
  return {
    CheckboxWrapper: z('div', {
      whiteSpace: 'nowrap',
      display: 'table-row-group',
      variants: {
        disabled: {
          false: { opacity: 1, '*': { cursor: 'pointer' }, svg: { color: '$navy100' } },
          true: { opacity: 0.5, '*': { cursor: 'not-allowed' }, svg: { color: '$navy100' } },
        },
      },
    }),
    CheckboxLabelWrapper: z('div', {
      display: 'table-cell',
      verticalAlign: 'middle',
      paddingLeft: '$3',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      variants: { size: { 1: { ft: '$h5', marginBottom: '0!important' }, 2: { ft: '$h6', marginBottom: '0!important' } } },
    }),
    CheckboxTooltipWrapper: z('div', {
      verticalAlign: 'middle',
      alignContent: 'center',
      display: 'table-cell',
      svg: { marginLeft: '$3', cursor: 'pointer', verticalAlign: 'middle !important', opacity: 0.5, transition: '$1', '&:hover': { opacity: 1 } },
    }),
    FieldWrapper: z('div', {
      display: 'inline-flex',
      position: 'relative',
      height: '3.5rem',
      alignContent: 'center',
      borderRadius: '$2',
      backgroundColor: '$baseContrast100',
      border: '0.1rem solid $border200',
      paddingTop: '$2',
      paddingBottom: '$2',
      paddingLeft: 'calc($5 / 1.5)',
      paddingRight: 'calc($5 / 1.5)',
      boxShadow: '$1',
      transition: '$1',
      maxWidth: '100%',
      '&:hover': { boxShadow: '$2', border: '0.1rem solid $border100' },
      '&:focus-within': { boxShadow: '$2', border: '0.1rem solid $border100' },
      '&:active': { boxShadow: '$2', border: '0.1rem solid $border100' },
      '*': { verticalAlign: 'middle' },
    }),
    FieldIconWrapper: z('div', { display: 'inline-flex', alignItems: 'center', width: 'auto', height: '100%', marginRight: '$3', position: 'relative' }),
    FieldInputWrapper: z('input', {
      appearance: 'none',
      display: 'inline-flex',
      fontSize: '16px !important',
      fontFamily: '$body',
      margin: 0,
      outline: 'none',
      padding: 0,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      border: 0,
      backgroundColor: 'transparent',
      color: '$base100',
      fontWeight: 'normal',
      textAlign: 'left',
      transition: '$1',
      boxSizing: 'border-box',
      alignItems: 'center',
      verticalAlign: 'middle',
      width: '100%',
      '&:focus': { outline: 0 },
      variants: { width: { 1: { width: '12rem' }, 2: { width: '18rem' }, 3: { width: '26rem' }, 4: { width: '34rem' }, 5: { width: '100%' } } },
    }),
    FieldFunctionWrapper: z('div', {
      display: 'inline-flex',
      alignItems: 'center',
      width: 'auto',
      height: '100%',
      position: 'relative',
      verticalAlign: 'middle',
      marginLeft: '$3',
      '*': { verticalAlign: 'middle' },
      button: { marginLeft: '$2', ft: '$h6', lineHeight: '$1', paddingTop: '$1', paddingBottom: '$1', paddingLeft: '$3', paddingRight: '$3' },
      svg: { height: '1.85rem', width: 'auto' },
    }),
    TextareaWrapper: z('div', {
      display: 'inline-flex',
      position: 'relative',
      flexDirection: 'column',
      width: '100%',
      borderRadius: '$2',
      backgroundColor: '$baseContrast100 !important',
      border: '0.1rem solid $border100',
      padding: 'calc($5 / 1.5)',
      boxShadow: '$1',
      transition: '$1',
      '&:hover': { boxShadow: '$2', border: '0.1rem solid $border100' },
      '&:focus-within': { boxShadow: '$2', border: '0.1rem solid $border100' },
      '&:active': { boxShadow: '$2', border: '0.1rem solid $border100' },
      '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
    }),
    TextareaInputWrapper: z('textarea', {
      display: 'block',
      backgroundColor: 'transparent',
      color: '$base100',
      appearance: 'none',
      width: '100%',
      border: '0',
      margin: '0 auto',
      fontSize: '16px !important',
      '&:after': { clear: 'both', content: '""' },
    }),
    TextareaFunctionWrapper: z('div', { display: 'block', opacity: 0.4, lineHeight: 0, '&:after': { clear: 'both', content: '""' } }),
  };
}
var et = [
    'changeFunction',
    'copy',
    'css',
    'error',
    'icon',
    'inputRef',
    'loader',
    'reset',
    'resetFunction',
    'reveal',
    'submit',
    'submitFunction',
    'submitOverride',
    'width',
    'id',
    'type',
    'value',
  ],
  tt = _e(),
  rt = tt.FieldWrapper,
  nt = tt.FieldIconWrapper,
  ot = tt.FieldInputWrapper,
  it = tt.FieldFunctionWrapper;
function at(e) {
  var l = e.changeFunction,
    d = e.copy,
    p = e.css,
    c = e.error,
    s = e.icon,
    u = e.inputRef,
    h = e.loader,
    b = e.reset,
    f = e.resetFunction,
    v = e.reveal,
    $ = e.submit,
    w = e.submitFunction,
    y = e.submitOverride,
    x = e.width,
    k = void 0 === x ? 2 : x,
    W = e.id,
    C = e.type,
    B = e.value,
    R = T(e, et),
    L = g(B || ''),
    I = L[0],
    F = L[1],
    z = g(!1),
    A = z[0],
    H = z[1],
    O = g('password' !== C),
    X = O[0],
    P = O[1];
  /*#__PURE__*/ return m.createElement(
    rt,
    { css: p, id: W },
    s && /*#__PURE__*/ m.createElement(nt, null, s),
    /*#__PURE__*/ m.createElement(
      ot,
      S(
        {
          onChange: function (e) {
            return (function (e) {
              F(e.target.value), l && l(e.target.value);
            })(e);
          },
          ref: u || void 0,
          type: 'password' === C ? (X ? 'text' : 'password') : C,
          value: I,
          width: k,
        },
        R
      )
    ),
    (h || c || b || v || d || $ || w) &&
      /*#__PURE__*/ m.createElement(
        it,
        null,
        h && /*#__PURE__*/ m.createElement(D, { theme: 'navy' }, /*#__PURE__*/ m.createElement(E, null)),
        c && /*#__PURE__*/ m.createElement(D, { dot: 'pulse', theme: 'red' }, /*#__PURE__*/ m.createElement(r, { weight: 'duotone' })),
        b &&
          (null == I ? void 0 : I.length) > 2 &&
          /*#__PURE__*/ m.createElement(
            K,
            {
              onClick: function () {
                return F(''), void (f && f());
              },
              theme: 'navy',
            },
            /*#__PURE__*/ m.createElement(t, { weight: 'duotone' })
          ),
        v &&
          /*#__PURE__*/ m.createElement(
            K,
            {
              onClick: function () {
                return P(!X);
              },
              theme: 'navy',
            },
            /*#__PURE__*/ m.createElement(X ? n : o, { weight: 'duotone' })
          ),
        d &&
          /*#__PURE__*/ m.createElement(
            K,
            {
              onClick: function () {
                d &&
                  (navigator.clipboard.writeText(I),
                  H(!0),
                  setTimeout(function () {
                    H(!1);
                  }, 2e3));
              },
              theme: 'navy',
            },
            /*#__PURE__*/ m.createElement(A ? i : a, { weight: 'duotone' })
          ),
        !y &&
          $ &&
          /*#__PURE__*/ m.createElement(
            K,
            {
              onClick: function () {
                return {
                  if: function (e) {
                    e(I);
                  },
                };
              },
              theme: 'navy',
            },
            'string' == typeof $ ? $ : 'Submit'
          ),
        y || null
      )
  );
}
var lt = ['changeFunction', 'copy', 'css', 'maxLength', 'rows', 'disabled', 'value'],
  dt = _e(),
  pt = dt.TextareaWrapper,
  ct = dt.TextareaInputWrapper,
  st = dt.TextareaFunctionWrapper;
function mt(e) {
  var t = e.changeFunction,
    r = e.copy,
    n = e.css,
    o = e.maxLength,
    l = void 0 === o ? 250 : o,
    d = e.rows,
    p = void 0 === d ? 4 : d,
    c = e.disabled,
    s = e.value,
    u = T(e, lt),
    h = g(s || ''),
    b = h[0],
    f = h[1],
    v = g(!1),
    $ = v[0],
    w = v[1];
  /*#__PURE__*/ return m.createElement(
    pt,
    { css: n },
    /*#__PURE__*/ m.createElement(
      ct,
      S(
        {
          disabled: c,
          maxLength: l,
          onChange: function (e) {
            f(e.target.value), t && t(e.target.value);
          },
          rows: p,
          value: b,
        },
        u
      )
    ),
    /*#__PURE__*/ m.createElement(
      st,
      null,
      /*#__PURE__*/ m.createElement(me, { inline: !0, inlineSpacer: 4, level: 2 }, b.length, ' / ', l),
      r &&
        /*#__PURE__*/ m.createElement(
          K,
          {
            onClick: function () {
              r &&
                (navigator.clipboard.writeText(b),
                w(!0),
                setTimeout(function () {
                  w(!1);
                }, 2e3));
            },
            theme: 'navy',
          },
          /*#__PURE__*/ m.createElement($ ? i : a, null)
        )
    )
  );
}
var gt = (function () {
    var e = w({ '0%': { opacity: 0 }, '100%': { opacity: 1 } });
    return {
      Wrapper: z('div', { position: 'relative', display: 'flex', flex: 1 }),
      TriggerWrapper: z('div', { display: 'inline-block', position: 'relative' }),
      ContentWrapper: z('div', {
        transition: '$1',
        borderRadius: '$2',
        background: '$baseContrast100',
        border: '0.1rem solid $border100',
        boxShadow: '$3',
        position: 'absolute',
        top: '120%',
        padding: '$2 $3',
        width: 'max-content',
        maxWidth: '30rem',
        overflowY: 'auto',
        wordBreak: 'break-word',
        lineBreak: 'auto',
        whiteSpace: 'pre-wrap',
        maxHeight: '30rem',
        zIndex: '$tooltip',
        webkitoverflowscrolling: 'touch',
        variants: { animation: { false: { animation: 'none' }, true: { animation: e + ' .3s' } } },
      }),
    };
  })(),
  ut = gt.Wrapper,
  ht = gt.TriggerWrapper,
  bt = gt.ContentWrapper;
function ft(e) {
  var t = e.align,
    r = void 0 === t ? 'left' : t,
    n = e.children,
    o = e.css,
    i = e.id,
    a = e.passKey,
    l = e.trigger,
    d = e.type,
    p = void 0 === d ? 'hover' : d,
    c = b(null),
    s = g(!1),
    u = s[0],
    h = s[1];
  return (
    xe(c, function () {
      h(!1);
    }),
    /*#__PURE__*/ m.createElement(
      ut,
      { css: o, id: i, key: a, ref: c },
      /*#__PURE__*/ m.createElement(
        ht,
        {
          onClickCapture: function () {
            'click' === p && h(!u);
          },
          onMouseEnter: function () {
            'hover' === p && h(!0);
          },
          onMouseLeave: function () {
            'hover' === p && h(!1);
          },
        },
        l
      ),
      u &&
        /*#__PURE__*/ m.createElement(
          bt,
          { animation: u, css: { left: 'left' === r ? '0' : 'right' === r ? 'auto' : '50%', right: 'right' === r ? '0' : 'left' === r ? 'auto' : '50%' } },
          n
        )
    )
  );
}
var vt = _e(),
  $t = vt.CheckboxWrapper,
  wt = vt.CheckboxLabelWrapper,
  yt = vt.CheckboxTooltipWrapper;
function xt(t) {
  var r = t.children,
    n = t.css,
    o = t.disabled,
    a = t.id,
    d = t.size,
    p = void 0 === d ? 1 : d,
    c = t.tooltip,
    s = g(t.checked),
    u = s[0],
    h = s[1];
  /*#__PURE__*/ return m.createElement(
    $t,
    {
      css: n,
      disabled: o,
      id: a,
      onClick: function () {
        o || h(!u);
      },
    },
    /*#__PURE__*/ m.createElement(
      K,
      { css: { display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '$3', aspectRatio: 1, padding: '$2' } },
      u ? /*#__PURE__*/ m.createElement(i, null) : /*#__PURE__*/ m.createElement(e, { opacity: 0.1 })
    ),
    /*#__PURE__*/ m.createElement(wt, { size: p }, r),
    c && /*#__PURE__*/ m.createElement(yt, null, /*#__PURE__*/ m.createElement(ft, { passKey: '' + r, trigger: /*#__PURE__*/ m.createElement(l, { size: 18 }), type: 'click' }, c))
  );
}
function kt() {
  var e,
    t,
    r,
    n,
    o,
    i = {
      top: {
        default: { paddingTop: 0 },
        1: { paddingTop: '$1' },
        2: { paddingTop: '$2' },
        3: { paddingTop: '$3' },
        4: { paddingTop: '$4' },
        5: { paddingTop: '$5' },
        6: { paddingTop: '$6' },
        7: { paddingTop: '$7' },
        8: { paddingTop: '$8' },
        9: { paddingTop: '$9' },
        10: { paddingTop: '$10' },
        11: { paddingTop: '$11' },
        12: { paddingTop: '$12' },
      },
      bottom: {
        default: { paddingBottom: 0 },
        1: { paddingBottom: '$1' },
        2: { paddingBottom: '$2' },
        3: { paddingBottom: '$3' },
        4: { paddingBottom: '$4' },
        5: { paddingBottom: '$5' },
        6: { paddingBottom: '$6' },
        7: { paddingBottom: '$7' },
        8: { paddingBottom: '$8' },
        9: { paddingBottom: '$9' },
        10: { paddingBottom: '$10' },
        11: { paddingBottom: '$11' },
        12: { paddingBottom: '$12' },
      },
    };
  return {
    BlockWrapper: z('div', {
      minWidth: '100%',
      width: '100%',
      paddingLeft: '$2',
      paddingRight: '$2',
      variants: S(
        {
          theme: {
            default: { backgroundColor: '$baseBody', color: '$base100' },
            dark: { backgroundColor: '$base100', color: '$baseContrast100' },
            alternate: { backgroundColor: '$baseContrast200', color: '$base100' },
            light: { backgroundColor: '$baseContrast100', color: '$base100' },
          },
        },
        i
      ),
    }),
    BlockInnerWrapper: z(
      'div',
      (((e = { margin: 'auto' })[R.phone] = { width: '$1' }),
      (e[R.tabletX] = { width: '$2' }),
      (e[R.laptopX] = { width: '$3', maxWidth: '96%' }),
      (e[R.desktopX] = { width: '$4', maxWidth: '97%' }),
      (e[R.wide] = { width: '$5', maxWidth: '95%' }),
      e)
    ),
    ColumnWrapper: z('div', {
      marginLeft: 0,
      flex: '1 1 auto',
      maxWidth: '100%',
      width: '100%',
      marginBottom: 0,
      variants: S(
        {
          left: {
            false: ((t = { paddingLeft: '$4' }), (t[R.phone] = { paddingLeft: '$3' }), (t[R.wide] = { paddingLeft: '$5' }), t),
            true: ((r = { paddingLeft: '$7' }), (r[R.phone] = { paddingLeft: '$3' }), (r[R.tabletX] = { paddingLeft: '$6' }), r),
          },
          right: {
            false: ((n = { paddingRight: '$4' }), (n[R.phone] = { paddingRight: '$3' }), (n[R.wide] = { paddingRight: '$5' }), n),
            true: ((o = { paddingRight: '$7' }), (o[R.phone] = { paddingRight: '$3' }), (o[R.tabletX] = { paddingRight: '$6' }), o),
          },
        },
        i
      ),
    }),
    ElementWrapper: z('div', { marginBlockStart: 0, marginBlockEnd: 0, variants: S({}, i) }),
    SectionWrapper: z('div', { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', maxWidth: '100%', '*': { boxSizing: 'border-box' }, variants: S({}, i) }),
  };
}
var Wt = kt().SectionWrapper;
function Ct(e) {
  var t = e.align,
    r = void 0 === t ? 'initial' : t,
    n = e.children,
    o = e.id,
    i = e.top;
  /*#__PURE__*/ return m.createElement(
    Wt,
    { bottom: e.bottom || 'default', css: S({ alignItems: r, justifyContent: r, '*': { alignItems: r } }, e.css), id: o, top: i || 'default' },
    n
  );
}
var Et = kt().ElementWrapper;
function St(e) {
  var t = e.align,
    r = e.children,
    n = e.id,
    o = e.top;
  /*#__PURE__*/ return m.createElement(Et, { bottom: e.bottom || 'default', css: S({ textAlign: void 0 === t ? 'inherit' : t }, e.css), id: n, top: o || 'default' }, r);
}
var Tt = kt().ColumnWrapper;
function Bt(e) {
  var t,
    r = e.align,
    n = e.children,
    o = e.css,
    i = e.extra,
    a = e.id,
    l = e.minimal,
    d = e.offset,
    p = void 0 === d ? 0 : d,
    c = e.offsetDesktop,
    s = e.offsetLaptop,
    g = e.offsetPhone,
    u = e.offsetTablet,
    h = e.offsetWide,
    b = e.top,
    f = e.width,
    v = void 0 === f ? 100 : f,
    $ = e.widthDesktop,
    w = e.widthLaptop,
    y = e.widthPhone,
    x = e.widthTablet,
    k = e.widthWide;
  /*#__PURE__*/ return m.createElement(
    Tt,
    {
      bottom: e.bottom || 'default',
      css: S(
        ((t = { textAlign: void 0 === r ? 'inherit' : r }),
        (t[R.phone] = { maxWidth: y ? y + '%' : '100%', flex: y ? '0 0 ' + y + '%' : '0 0 100%%', marginLeft: g ? g + '%' : 0 }),
        (t[R.tabletX] = { maxWidth: x ? x + '%' : v + '%', flex: x ? '0 0 ' + x + '%' : '0 0 ' + v + '%', marginLeft: u ? u + '%' : p + '%' }),
        (t[R.laptopX] = { maxWidth: w ? w + '%' : v + '%', flex: w ? '0 0 ' + w + '%' : '0 0 ' + v + '%', marginLeft: s ? s + '%' : p + '%' }),
        (t[R.desktopX] = { maxWidth: $ ? $ + '%' : v + '%', flex: $ ? '0 0 ' + $ + '%' : '0 0 ' + v + '%', marginLeft: c ? c + '%' : p + '%' }),
        (t[R.wide] = { maxWidth: k ? k + '%' : v + '%', flex: k ? '0 0 ' + k + '%' : '0 0 ' + v + '%', marginLeft: h ? h + '%' : p + '%' }),
        t),
        o
      ),
      id: a,
      left: !l && ('left' === i || 'left-right' === i),
      right: !l && ('right' === i || 'left-right' === i),
      top: b || 'default',
    },
    n
  );
}
var Rt = kt(),
  Lt = Rt.BlockWrapper,
  It = Rt.BlockInnerWrapper;
function Ft(e) {
  var t = e.children;
  /*#__PURE__*/ return m.createElement(
    Lt,
    { bottom: e.bottom || 'default', css: e.css, id: e.id, theme: e.theme || 'default', top: e.top || 'default' },
    e.inner ? /*#__PURE__*/ m.createElement(It, null, t) : t
  );
}
function zt(e) {
  var t = e.css,
    r = e.id,
    n = e.numberA,
    o = e.numberB,
    i = e.showDollarDifference,
    a = e.toFixed,
    l = void 0 === a ? 1 : a,
    c = e.trendDirection,
    s = void 0 === c ? 'up' : c,
    h = g(!0),
    b = h[0],
    f = h[1],
    v = g(0),
    $ = v[0],
    w = v[1],
    y = g(0),
    x = y[0],
    k = y[1],
    W = g('up'),
    C = W[0],
    T = W[1];
  return (
    u(
      function () {
        var e = n - o;
        return (
          w((((n - o) / o) * 100).toFixed(l)),
          k(e.toFixed(l)),
          f(!1),
          T(e > 0 ? ('up' === s ? 'up' : 'down') : 'up' === s ? 'down' : 'up'),
          function () {
            f(!0);
          }
        );
      },
      [n, o, l, s]
    ),
    b
      ? /*#__PURE__*/ m.createElement(E, null)
      : /*#__PURE__*/ m.createElement(
          St,
          { css: S({ width: '100%', height: '100%' }, t), id: r },
          /*#__PURE__*/ m.createElement(D, { theme: 'up' === C ? 'green' : 'yellow' }, /*#__PURE__*/ m.createElement('up' === C ? d : p, null), ' ', $, '%'),
          i ? /*#__PURE__*/ m.createElement(le, { css: { pt: '$1', opacity: 0.5 }, level: 6 }, '$', x.toLocaleString()) : null
        )
  );
}
function At() {
  var e = y({
    html: { position: 'relative', background: '$baseBody', fontSize: '62.5% !important', height: '100%', boxSizing: 'border-box;', margin: '0', padding: '0', border: '0' },
    body: { color: '$base100', lineHeight: '1.6', fontSize: '1.6rem !important', fontFamily: '$body', height: '100%', margin: 0, padding: 0, border: 0 },
    '*': {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitAppearance: 'none',
      outline: 'none',
      letterSpacing: 'normal',
      wordSpacing: 'normal',
      marginBlockStart: 0,
      marginBlockEnd: 0,
      marginInlineStart: 0,
      marginInlineEnd: 0,
      paddingBlockStart: 0,
      paddingBlockEnd: 0,
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
      boxSizing: 'inherit',
    },
    '*:before': { boxSizing: 'inherit' },
    '*:after': { boxSizing: 'inherit' },
    button: {
      appearance: 'none',
      outline: 'none',
      cursor: 'pointer',
      margin: 0,
      width: 'auto',
      font: '$body',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitAppearance: 'none',
      overflow: 'visible',
      fontFamily: 'inherit',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&::-moz-focus-inner': { border: 0, padding: 0, outline: 0, outlineOffset: 0 },
      '&:focus': { outline: 0 },
      '&:active': { outline: 0 },
    },
    svg: { transition: '$1', verticalAlign: 'middle !important', fill: 'currentColor', lineHeight: '1 !important' },
    img: { borderRadius: '$3' },
    a: { transition: '$1', textDecoration: 'none', color: 'inherit', cursor: 'pointer', '&:hover': { opacity: 0.7 }, '&:focus': { outline: 'none' } },
    pre: { fontFamily: 'monospace', fontSize: '$base2', overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' },
    code: { fontFamily: 'monospace', fontSize: '$base2' },
    ol: { listStylePosition: 'inside' },
    ul: { listStylePosition: 'inside' },
    li: { listStyle: 'circle', marginBottom: '$3', '&:last-child': { marginBottom: 0 } },
  });
  return {
    ContextWrapper: z('div', { position: 'relative' }),
    SwitchWrapper: z('div', { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }),
    globalStyles: e,
  };
}
var Ht = At(),
  Ot = Ht.ContextWrapper,
  Xt = Ht.globalStyles;
function Pt(e) {
  var t = e.children,
    r = e.css,
    n = e.switchable,
    o = e.theme,
    i = void 0 === o ? I : o,
    a = ye().isDarkMode;
  return Xt(), /*#__PURE__*/ m.createElement(Ot, { className: n && a ? H : i, css: r }, t);
}
var Dt = At().SwitchWrapper;
function Mt() {
  var e = ye();
  /*#__PURE__*/ return m.createElement(Dt, null, /*#__PURE__*/ m.createElement(K, { onClick: e.toggle }, /*#__PURE__*/ m.createElement(e.isDarkMode ? c : s, null)));
}
export {
  ue as Active,
  Xe as Alert,
  D as Badge,
  Ft as Block,
  K as Button,
  Z as Card,
  xt as Checkbox,
  Bt as Column,
  Pt as Context,
  ve as Cookies,
  Re as Dialog,
  Ke as Dropdown,
  St as Element,
  le as Heading,
  at as InputField,
  E as Loading,
  zt as Percentages,
  Ct as Section,
  Ze as Submenu,
  Mt as Switch,
  me as Text,
  mt as Textarea,
  ft as Tooltip,
  R as breakpoints,
  F as css,
  H as darkTheme,
  A as getCssText,
  z as styled,
  I as theme,
};
//# sourceMappingURL=index.modern.module.js.map
