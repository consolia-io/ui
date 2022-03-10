var e = require('phosphor-react'),
  t = require('react'),
  r = require('@stitches/react'),
  n = require('nookies'),
  o = require('next/link'),
  a = require('next/router');
function i(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
var l = /*#__PURE__*/ i(t),
  d = /*#__PURE__*/ i(o);
function p(e) {
  var t = e.stroke,
    r = e.width,
    n = void 0 === r ? 16 : r;
  /*#__PURE__*/ return l.default.createElement(
    'svg',
    { height: n, stroke: void 0 === t ? '#969696' : t, viewBox: '0 0 38 38', width: n, xmlns: 'http://www.w3.org/2000/svg' },
    /*#__PURE__*/ l.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      /*#__PURE__*/ l.default.createElement(
        'g',
        { strokeWidth: '2', transform: 'translate(1 1)' },
        /*#__PURE__*/ l.default.createElement('circle', { cx: '18', cy: '18', r: '18', strokeOpacity: '.5' }),
        /*#__PURE__*/ l.default.createElement(
          'path',
          { d: 'M36 18c0-9.94-8.06-18-18-18' },
          /*#__PURE__*/ l.default.createElement('animateTransform', {
            attributeName: 'transform',
            dur: '1s',
            from: '0 18 18',
            repeatCount: 'indefinite',
            to: '360 18 18',
            type: 'rotate',
          })
        )
      )
    )
  );
}
function c() {
  return (
    (c =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    c.apply(this, arguments)
  );
}
function s(e, t) {
  if (null == e) return {};
  var r,
    n,
    o = {},
    a = Object.keys(e);
  for (n = 0; n < a.length; n++) t.indexOf((r = a[n])) >= 0 || (o[r] = e[r]);
  return o;
}
var u,
  m = {
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
  g = r.createStitches({
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
      media: m,
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
          ((t = { fontSize: e + '!important', lineHeight: e + '!important', '&:last-child': { marginBottom: 0 } })[m.phone] = { fontSize: 'calc(' + e + ' * .85) !important' }),
          (t[m.tabletX] = { fontSize: 'calc(' + e + ' * .875) !important' }),
          (t[m.laptopX] = { fontSize: 'calc(' + e + ' * .9) !important' }),
          (t[m.desktopX] = { fontSize: 'calc(' + e + ' * .95) !important' }),
          t
        );
      },
      hidden: function (e) {
        var t;
        return ((t = { display: 'auto' })[m[e]] = { display: 'none' }), t;
      },
      visible: function (e) {
        var t;
        return ((t = { display: 'none' })[m[e]] = { display: 'block' }), t;
      },
      visibleInline: function (e) {
        var t;
        return ((t = { display: 'none' })[m[e]] = { display: 'inline-block' }), t;
      },
      phone: function (e) {
        var t;
        return ((t = {})[m.phone] = e), t;
      },
      tablet: function (e) {
        var t;
        return ((t = {})[m.tablet] = e), t;
      },
      tabletX: function (e) {
        var t;
        return ((t = {})[m.tabletX] = e), t;
      },
      laptop: function (e) {
        var t;
        return ((t = {})[m.laptop] = e), t;
      },
      laptopX: function (e) {
        var t;
        return ((t = {})[m.laptopX] = e), t;
      },
      desktop: function (e) {
        var t;
        return ((t = {})[m.desktop] = e), t;
      },
      desktopX: function (e) {
        var t;
        return ((t = {})[m.desktopX] = e), t;
      },
      wide: function (e) {
        var t;
        return ((t = {})[m.wide] = e), t;
      },
    },
  }),
  f = g.theme,
  h = g.css,
  b = g.styled,
  v = g.getCssText,
  $ = r.createTheme('dark', { colors: c({}, f.colors) }),
  y =
    ((u = r.keyframes({ '0%': { opacity: 0.5, transform: 'scale(0.95)' }, '50%': { opacity: 1, transform: 'scale(1)' }, '100%': { opacity: 0.5, transform: 'scale(0.95)' } })),
    {
      Wrapper: b('div', {
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
      DotWrapper: b('div', {
        animation: u + ' 1.5s infinite',
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
  x = y.Wrapper,
  w = y.DotWrapper;
function k(t) {
  var r = t.children,
    n = t.css,
    o = t.dot,
    a = t.dotColor,
    i = t.id,
    d = t.inline,
    c = void 0 === d || d,
    s = t.inlineSpacer,
    u = t.shadow,
    m = t.theme;
  return t.loader
    ? /*#__PURE__*/ l.default.createElement(x, { css: { height: '$7' }, id: i || void 0 }, /*#__PURE__*/ l.default.createElement(p, null))
    : /*#__PURE__*/ l.default.createElement(
        x,
        { css: n, id: i || void 0, inline: c, inlineSpacer: s || 'default', shadow: u, theme: m || 'default' },
        o &&
          ('pulse' === o
            ? /*#__PURE__*/ l.default.createElement(
                w,
                { dotColor: a || 'default' },
                /*#__PURE__*/ l.default.createElement(e.Circle, { size: 10, style: { marginRight: 3.33 }, weight: 'fill' })
              )
            : /*#__PURE__*/ l.default.createElement(e.Circle, { size: 10, style: { marginRight: 3.33 }, weight: 'fill' })),
        r
      );
}
var C = ['children', 'css', 'disabled', 'icon', 'iconPosition', 'id', 'inline', 'inlineSpacer', 'loader', 'onClick', 'theme'],
  W = {
    Wrapper: b('button', {
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
    IconWrapper: b('div', {
      display: 'inline-flex',
      verticalAlign: 'middle',
      variants: { iconPosition: { left: { marginRight: '$3' }, right: { marginLeft: '$3' } } },
      svg: { verticalAlign: 'middle', width: '2.1rem', height: '2.1rem' },
    }),
  },
  E = W.Wrapper,
  S = W.IconWrapper;
function T(e) {
  var t = e.children,
    r = e.css,
    n = e.disabled,
    o = e.icon,
    a = e.iconPosition,
    i = void 0 === a ? 'left' : a,
    d = e.id,
    u = e.inline,
    m = void 0 === u || u,
    g = e.inlineSpacer,
    f = e.loader,
    h = e.onClick,
    b = e.theme,
    v = s(e, C);
  return f
    ? /*#__PURE__*/ l.default.createElement(E, null, /*#__PURE__*/ l.default.createElement(p, null))
    : /*#__PURE__*/ l.default.createElement(
        E,
        c({}, v, { css: r, disabled: n, id: d || void 0, inline: m, inlineSpacer: g || 'default', onClick: h, theme: b || 'default' }),
        o && i && 'left' === i && /*#__PURE__*/ l.default.createElement(S, { iconPosition: i }, o),
        t,
        o && i && 'right' === i && /*#__PURE__*/ l.default.createElement(S, { iconPosition: i }, o)
      );
}
var B,
  R,
  L = {
    Wrapper: b('div', {
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
        padding: { default: { padding: '$5' }, extra: ((B = { padding: '$7' }), (B[m.phone] = { padding: '$6' }), B), none: { padding: 0 } },
      },
      '&:hover': { boxShadow: '$2' },
    }),
    ImageWrapper: b('div', {
      width: '100%',
      position: 'relative',
      backgroundColor: '$baseContrast200',
      borderTopLeftRadius: '$2',
      borderTopRightRadius: '$2',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      img: { borderTopLeftRadius: '$2', borderTopRightRadius: '$2', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
    }),
    ImageChildrenWrapper: b('div', {
      variants: { padding: { default: { padding: '$5' }, extra: ((R = { padding: '$7' }), (R[m.phone] = { padding: '$6' }), R), none: { padding: 0 } } },
    }),
  },
  I = L.Wrapper,
  A = L.ImageWrapper,
  F = L.ImageChildrenWrapper;
function z(e) {
  var t = e.css,
    r = e.extra,
    n = e.id,
    o = e.theme,
    a = e.loader,
    i = e.border,
    d = e.image,
    p = e.minimal,
    c = e.children;
  return d
    ? /*#__PURE__*/ l.default.createElement(
        I,
        { border: 'boolean' != typeof i ? i : 'default', css: t, id: n, loader: a, padding: 'none', theme: o || 'default' },
        /*#__PURE__*/ l.default.createElement(A, { css: { height: e.imageHeight || '15rem' } }, d),
        /*#__PURE__*/ l.default.createElement(F, { padding: p ? 'none' : r ? 'extra' : 'default' }, c)
      )
    : /*#__PURE__*/ l.default.createElement(
        I,
        { border: 'boolean' != typeof i ? i : 'default', css: t, id: n, loader: a, padding: p ? 'none' : r ? 'extra' : 'default', theme: o || 'default' },
        c
      );
}
function H() {
  var e = {
    variants: c(
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
    HeadingOneWrapper: b('h1', c({ ft: '$h1', fontWeight: 'bold', marginBottom: '$h1' }, e)),
    HeadingTwoWrapper: b('h2', c({ ft: '$h2', fontWeight: 'bold', marginBottom: '$h2' }, e)),
    HeadingThreeWrapper: b('h3', c({ ft: '$h3', fontWeight: 'bold', marginBottom: '$h3' }, e)),
    HeadingFourWrapper: b('h4', c({ ft: '$h4', fontWeight: 'normal', marginBottom: '$h4', opacity: 0.8 }, e)),
    HeadingFiveWrapper: b('h5', c({ ft: '$h5', fontWeight: 'normal', marginBottom: '$h5' }, e)),
    HeadingSixWrapper: b('h6', c({ ft: '$h6', fontWeight: 'normal', marginBottom: '$h6', opacity: 0.8 }, e)),
    TextOneWrapper: b('p', c({ ft: '$t1', fontWeight: 'normal', marginBottom: '$t1' }, e)),
    TextTwoWrapper: b('p', c({ ft: '$t2', fontWeight: 'normal', marginBottom: '$t2' }, e)),
    TextThreeWrapper: b('p', c({ ft: '$t3', fontWeight: 'normal', marginBottom: '$t3' }, e)),
  };
}
var X = H(),
  O = X.HeadingOneWrapper,
  D = X.HeadingTwoWrapper,
  P = X.HeadingThreeWrapper,
  M = X.HeadingFourWrapper,
  j = X.HeadingFiveWrapper,
  N = X.HeadingSixWrapper;
function q(e) {
  var t = e.align,
    r = e.children,
    n = e.id,
    o = e.inline,
    a = void 0 !== o && o,
    i = e.inlineSpacer,
    d = e.level,
    p = e.top;
  /*#__PURE__*/ return l.default.createElement(
    1 === d ? O : 2 === d ? D : 3 === d ? P : 4 === d ? M : 5 === d ? j : N,
    { bottom: e.bottom, css: c({ textAlign: void 0 === t ? 'inherit' : t }, e.css), id: n, inline: a, inlineSpacer: i || 'default', top: p },
    r
  );
}
var G = H(),
  K = G.TextOneWrapper,
  Y = G.TextTwoWrapper,
  J = G.TextThreeWrapper;
function Q(e) {
  var t = e.align,
    r = e.children,
    n = e.id,
    o = e.inline,
    a = void 0 !== o && o,
    i = e.inlineSpacer,
    d = e.level,
    p = void 0 === d ? 1 : d,
    s = e.top;
  /*#__PURE__*/ return l.default.createElement(
    1 === p ? K : 2 === p ? Y : J,
    { bottom: e.bottom, css: c({ textAlign: void 0 === t ? 'inherit' : t }, e.css), id: n, inline: a, inlineSpacer: i || 'default', top: s },
    r
  );
}
var U,
  V,
  Z = ['children', 'css', 'cssActive', 'cssInactive', 'hover', 'href', 'id'],
  _ = ((V = r.keyframes({ '0%': { opacity: 1, display: 'block' }, '100%': { opacity: 0, display: 'none' } })),
  {
    Wrapper: b(
      'div',
      (((U = {
        position: 'fixed',
        transition: '$1',
        zIndex: '$cookies',
        bottom: '$4',
        left: 0,
        right: 0,
        maxWidth: '100%',
        margin: 'auto',
        textAlign: 'center',
        variants: { isExiting: { true: { animation: V + ' 0.5s forwards' } } },
        svg: { verticalAlign: 'middle', cursor: 'pointer', transition: '$1', '&:hover': { opacity: 0.4 } },
      })[m.phone] = { maxWidth: '95%' }),
      U)
    ),
  }).Wrapper;
const ee = 'undefined' != typeof window ? t.useLayoutEffect : t.useEffect;
function te(e, r, n) {
  const o = t.useRef(r);
  ee(() => {
    o.current = r;
  }, [r]),
    t.useEffect(() => {
      const t = n?.current || window;
      if (!t || !t.addEventListener) return;
      const r = (e) => o.current(e);
      return (
        t.addEventListener(e, r),
        () => {
          t.removeEventListener(e, r);
        }
      );
    }, [e, n]);
}
function re(e) {
  const r = (function (e) {
      const r = (e) => 'undefined' != typeof window && window.matchMedia(e).matches,
        [n, o] = t.useState(r(e));
      function a() {
        o(r(e));
      }
      return (
        t.useEffect(() => {
          const t = window.matchMedia(e);
          return (
            a(),
            t.addEventListener('change', a),
            () => {
              t.removeEventListener('change', a);
            }
          );
        }, [e]),
        n
      );
    })('(prefers-color-scheme: dark)'),
    [n, o] = (function (e, r) {
      const n = t.useCallback(() => {
          if ('undefined' == typeof window) return r;
          try {
            const t = window.localStorage.getItem(e);
            return t
              ? (function (e) {
                  try {
                    return 'undefined' === e ? void 0 : JSON.parse(e ?? '');
                  } catch {
                    return void console.log('parsing error on', { value: e });
                  }
                })(t)
              : r;
          } catch (t) {
            return console.warn(`Error reading localStorage key “${e}”:`, t), r;
          }
        }, [r, e]),
        [o, a] = t.useState(n),
        i = t.useCallback(
          (t) => {
            'undefined' == typeof window && console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);
            try {
              const r = t instanceof Function ? t(o) : t;
              window.localStorage.setItem(e, JSON.stringify(r)), a(r), window.dispatchEvent(new Event('local-storage'));
            } catch (t) {
              console.warn(`Error setting localStorage key “${e}”:`, t);
            }
          },
          [e, o]
        );
      t.useEffect(() => {
        a(n());
      }, []);
      const l = t.useCallback(() => {
        a(n());
      }, [n]);
      return te('storage', l), te('local-storage', l), [o, i];
    })('usehooks-ts-dark-mode', e ?? r ?? !1);
  return (
    (function (e, n) {
      const a = (function () {
        const e = t.useRef(!0);
        return e.current ? ((e.current = !1), !0) : e.current;
      })();
      t.useEffect(() => {
        a || o(r);
      }, n);
    })(0, [r]),
    { isDarkMode: n, toggle: () => o((e) => !e), enable: () => o(!0), disable: () => o(!1) }
  );
}
function ne(e, t, r = 'mousedown') {
  te(r, (r) => {
    const n = e?.current;
    n && !n.contains(r.target) && t(r);
  });
}
function oe() {
  var e,
    t = r.keyframes({ '0%': { opacity: 0 }, '100%': { opacity: 1 } });
  return {
    Wrapper: b('div', { position: 'initial' }),
    TriggerWrapper: b('div', { display: 'inline-flex' }),
    OverlayWrapper: b('div', {
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
    CardWrapper: b(
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
      })[m.phone] = { width: '95%', maxWidth: '95%', maxHeight: '95vh' }),
      e)
    ),
    Exit: b('div', { position: 'absolute', top: 0, right: 0, padding: '1rem', cursor: 'pointer', zIndex: '$alert' }),
    CardActionsWrapper: b('div', { paddingTop: '$6', textAlign: 'right' }),
    CardPrimaryActionwrapper: b('div', { display: 'inline-block' }),
  };
}
var ae = oe(),
  ie = ae.Wrapper,
  le = ae.TriggerWrapper,
  de = ae.OverlayWrapper,
  pe = ae.CardWrapper,
  ce = ae.Exit,
  se = oe(),
  ue = se.Wrapper,
  me = se.TriggerWrapper,
  ge = se.OverlayWrapper,
  fe = se.CardWrapper,
  he = se.CardActionsWrapper,
  be = se.CardPrimaryActionwrapper;
function ve() {
  var e = r.keyframes({ '0%': { opacity: 0 }, '100%': { opacity: 1 } });
  return {
    Wrapper: b('div', { position: 'relative', display: 'inline-flex' }),
    TriggerWrapper: b('div', {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      appearance: 'none',
      outline: 'none',
      userSelect: 'none',
      transition: '$1',
      variants: { hover: { false: { '&:hover': { color: 'inherit', opacity: 1 }, true: { '&:hover': { color: 'inherit', opacity: 0.7 } } } } },
    }),
    GroupWrapper: b('div', {
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
    ItemWrapper: b('div', {
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
    IconWrapper: b('div', {
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
var $e = ve(),
  ye = $e.Wrapper,
  xe = $e.GroupWrapper,
  we = $e.ItemWrapper,
  ke = $e.IconWrapper,
  Ce = ve(),
  We = Ce.Wrapper,
  Ee = Ce.TriggerWrapper,
  Se = Ce.GroupWrapper,
  Te = Ce.ItemWrapper,
  Be = Ce.IconWrapper;
function Re() {
  return {
    CheckboxWrapper: b('div', {
      whiteSpace: 'nowrap',
      display: 'table-row-group',
      variants: {
        disabled: {
          false: { opacity: 1, '*': { cursor: 'pointer' }, svg: { color: '$navy100' } },
          true: { opacity: 0.5, '*': { cursor: 'not-allowed' }, svg: { color: '$navy100' } },
        },
      },
    }),
    CheckboxLabelWrapper: b('div', {
      display: 'table-cell',
      verticalAlign: 'middle',
      paddingLeft: '$3',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      variants: { size: { 1: { ft: '$h5', marginBottom: '0!important' }, 2: { ft: '$h6', marginBottom: '0!important' } } },
    }),
    CheckboxTooltipWrapper: b('div', {
      verticalAlign: 'middle',
      alignContent: 'center',
      display: 'table-cell',
      svg: { marginLeft: '$3', cursor: 'pointer', verticalAlign: 'middle !important', opacity: 0.5, transition: '$1', '&:hover': { opacity: 1 } },
    }),
    FieldWrapper: b('div', {
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
    FieldIconWrapper: b('div', { display: 'inline-flex', alignItems: 'center', width: 'auto', height: '100%', marginRight: '$3', position: 'relative' }),
    FieldInputWrapper: b('input', {
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
    FieldFunctionWrapper: b('div', {
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
    TextareaWrapper: b('div', {
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
    TextareaInputWrapper: b('textarea', {
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
    TextareaFunctionWrapper: b('div', { display: 'block', opacity: 0.4, lineHeight: 0, '&:after': { clear: 'both', content: '""' } }),
  };
}
var Le = [
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
  Ie = Re(),
  Ae = Ie.FieldWrapper,
  Fe = Ie.FieldIconWrapper,
  ze = Ie.FieldInputWrapper,
  He = Ie.FieldFunctionWrapper,
  Xe = ['changeFunction', 'copy', 'css', 'maxLength', 'rows', 'disabled', 'value'],
  Oe = Re(),
  De = Oe.TextareaWrapper,
  Pe = Oe.TextareaInputWrapper,
  Me = Oe.TextareaFunctionWrapper,
  je = (function () {
    var e = r.keyframes({ '0%': { opacity: 0 }, '100%': { opacity: 1 } });
    return {
      Wrapper: b('div', { position: 'relative', display: 'flex', flex: 1 }),
      TriggerWrapper: b('div', { display: 'inline-block', position: 'relative' }),
      ContentWrapper: b('div', {
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
  Ne = je.Wrapper,
  qe = je.TriggerWrapper,
  Ge = je.ContentWrapper;
function Ke(e) {
  var r = e.align,
    n = void 0 === r ? 'left' : r,
    o = e.children,
    a = e.css,
    i = e.id,
    d = e.passKey,
    p = e.trigger,
    c = e.type,
    s = void 0 === c ? 'hover' : c,
    u = t.useRef(null),
    m = t.useState(!1),
    g = m[0],
    f = m[1];
  return (
    ne(u, function () {
      f(!1);
    }),
    /*#__PURE__*/ l.default.createElement(
      Ne,
      { css: a, id: i, key: d, ref: u },
      /*#__PURE__*/ l.default.createElement(
        qe,
        {
          onClickCapture: function () {
            'click' === s && f(!g);
          },
          onMouseEnter: function () {
            'hover' === s && f(!0);
          },
          onMouseLeave: function () {
            'hover' === s && f(!1);
          },
        },
        p
      ),
      g &&
        /*#__PURE__*/ l.default.createElement(
          Ge,
          { animation: g, css: { left: 'left' === n ? '0' : 'right' === n ? 'auto' : '50%', right: 'right' === n ? '0' : 'left' === n ? 'auto' : '50%' } },
          o
        )
    )
  );
}
var Ye = Re(),
  Je = Ye.CheckboxWrapper,
  Qe = Ye.CheckboxLabelWrapper,
  Ue = Ye.CheckboxTooltipWrapper;
function Ve() {
  var e,
    t,
    r,
    n,
    o,
    a = {
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
    BlockWrapper: b('div', {
      minWidth: '100%',
      width: '100%',
      paddingLeft: '$2',
      paddingRight: '$2',
      variants: c(
        {
          theme: {
            default: { backgroundColor: '$baseBody', color: '$base100' },
            dark: { backgroundColor: '$base100', color: '$baseContrast100' },
            alternate: { backgroundColor: '$baseContrast200', color: '$base100' },
            light: { backgroundColor: '$baseContrast100', color: '$base100' },
          },
        },
        a
      ),
    }),
    BlockInnerWrapper: b(
      'div',
      (((e = { margin: 'auto' })[m.phone] = { width: '$1' }),
      (e[m.tabletX] = { width: '$2' }),
      (e[m.laptopX] = { width: '$3', maxWidth: '96%' }),
      (e[m.desktopX] = { width: '$4', maxWidth: '97%' }),
      (e[m.wide] = { width: '$5', maxWidth: '95%' }),
      e)
    ),
    ColumnWrapper: b('div', {
      marginLeft: 0,
      flex: '1 1 auto',
      maxWidth: '100%',
      width: '100%',
      marginBottom: 0,
      variants: c(
        {
          left: {
            false: ((t = { paddingLeft: '$4' }), (t[m.phone] = { paddingLeft: '$3' }), (t[m.wide] = { paddingLeft: '$5' }), t),
            true: ((r = { paddingLeft: '$7' }), (r[m.phone] = { paddingLeft: '$3' }), (r[m.tabletX] = { paddingLeft: '$6' }), r),
          },
          right: {
            false: ((n = { paddingRight: '$4' }), (n[m.phone] = { paddingRight: '$3' }), (n[m.wide] = { paddingRight: '$5' }), n),
            true: ((o = { paddingRight: '$7' }), (o[m.phone] = { paddingRight: '$3' }), (o[m.tabletX] = { paddingRight: '$6' }), o),
          },
        },
        a
      ),
    }),
    ElementWrapper: b('div', { marginBlockStart: 0, marginBlockEnd: 0, variants: c({}, a) }),
    SectionWrapper: b('div', { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', maxWidth: '100%', '*': { boxSizing: 'border-box' }, variants: c({}, a) }),
  };
}
var Ze = Ve().SectionWrapper,
  _e = Ve().ElementWrapper;
function et(e) {
  var t = e.align,
    r = e.children,
    n = e.id,
    o = e.top;
  /*#__PURE__*/ return l.default.createElement(_e, { bottom: e.bottom || 'default', css: c({ textAlign: void 0 === t ? 'inherit' : t }, e.css), id: n, top: o || 'default' }, r);
}
var tt = Ve().ColumnWrapper,
  rt = Ve(),
  nt = rt.BlockWrapper,
  ot = rt.BlockInnerWrapper;
function at() {
  var e = r.globalCss({
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
    ContextWrapper: b('div', { position: 'relative' }),
    SwitchWrapper: b('div', { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }),
    globalStyles: e,
  };
}
var it = at(),
  lt = it.ContextWrapper,
  dt = it.globalStyles,
  pt = at().SwitchWrapper;
(exports.Active = function (e) {
  var t = e.children,
    r = e.css,
    n = e.cssActive,
    o = e.cssInactive,
    i = e.hover,
    p = e.href,
    u = e.id,
    m = s(e, Z),
    g = a.useRouter(),
    f = (null == g ? void 0 : g.pathname) || '/',
    h = b('a', {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': { color: 'inherit', opacity: i ? 0.7 : 1 },
      '&:focus': { color: 'inherit' },
      '&.inactive': c({}, o || { color: '$navy100' }),
      '&.active': c({}, n || { color: 'inherit' }),
    });
  /*#__PURE__*/ return l.default.createElement(
    d.default,
    c({ href: p, passHref: !0 }, m),
    /*#__PURE__*/ l.default.createElement(h, { className: f === p ? 'active' : 'inactive', css: r, id: u }, t)
  );
}),
  (exports.Alert = function (e) {
    var r = e.action,
      n = e.cancel,
      o = e.css,
      a = e.description,
      i = e.id,
      d = e.title,
      p = e.trigger,
      c = t.useRef(null),
      s = t.useState(!1),
      u = s[0],
      m = s[1];
    return (
      ne(c, function () {
        m(!1);
      }),
      t.useLayoutEffect(
        function () {
          document.body.style.overflow = u ? 'hidden' : 'auto';
        },
        [u]
      ),
      /*#__PURE__*/ l.default.createElement(
        ue,
        { id: i },
        /*#__PURE__*/ l.default.createElement(
          me,
          {
            onClickCapture: function (e) {
              e.persist(), m(!0);
            },
          },
          p
        ),
        u &&
          /*#__PURE__*/ l.default.createElement(
            ge,
            { animation: u },
            /*#__PURE__*/ l.default.createElement(
              fe,
              { animation: u, css: o, ref: c },
              /*#__PURE__*/ l.default.createElement(
                z,
                null,
                /*#__PURE__*/ l.default.createElement(q, { level: 3 }, d),
                /*#__PURE__*/ l.default.createElement(q, { level: 6 }, a),
                /*#__PURE__*/ l.default.createElement(
                  he,
                  null,
                  /*#__PURE__*/ l.default.createElement(
                    T,
                    {
                      css: { mr: '$4' },
                      onClick: function (e) {
                        e.persist(), m(!1);
                      },
                    },
                    n
                  ),
                  /*#__PURE__*/ l.default.createElement(
                    be,
                    {
                      onClickCapture: function (e) {
                        e.persist(), m(!1);
                      },
                    },
                    r
                  )
                )
              )
            )
          )
      )
    );
  }),
  (exports.Badge = k),
  (exports.Block = function (e) {
    var t = e.children;
    /*#__PURE__*/ return l.default.createElement(
      nt,
      { bottom: e.bottom || 'default', css: e.css, id: e.id, theme: e.theme || 'default', top: e.top || 'default' },
      e.inner ? /*#__PURE__*/ l.default.createElement(ot, null, t) : t
    );
  }),
  (exports.Button = T),
  (exports.Card = z),
  (exports.Checkbox = function (r) {
    var n = r.children,
      o = r.css,
      a = r.disabled,
      i = r.id,
      d = r.size,
      p = void 0 === d ? 1 : d,
      c = r.tooltip,
      s = t.useState(r.checked),
      u = s[0],
      m = s[1];
    /*#__PURE__*/ return l.default.createElement(
      Je,
      {
        css: o,
        disabled: a,
        id: i,
        onClick: function () {
          a || m(!u);
        },
      },
      /*#__PURE__*/ l.default.createElement(
        T,
        { css: { display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '$3', aspectRatio: 1, padding: '$2' } },
        u ? /*#__PURE__*/ l.default.createElement(e.Check, null) : /*#__PURE__*/ l.default.createElement(e.Circle, { opacity: 0.1 })
      ),
      /*#__PURE__*/ l.default.createElement(Qe, { size: p }, n),
      c &&
        /*#__PURE__*/ l.default.createElement(
          Ue,
          null,
          /*#__PURE__*/ l.default.createElement(Ke, { passKey: '' + n, trigger: /*#__PURE__*/ l.default.createElement(e.Question, { size: 18 }), type: 'click' }, c)
        )
    );
  }),
  (exports.Column = function (e) {
    var t,
      r = e.align,
      n = e.children,
      o = e.css,
      a = e.extra,
      i = e.id,
      d = e.minimal,
      p = e.offset,
      s = void 0 === p ? 0 : p,
      u = e.offsetDesktop,
      g = e.offsetLaptop,
      f = e.offsetPhone,
      h = e.offsetTablet,
      b = e.offsetWide,
      v = e.top,
      $ = e.width,
      y = void 0 === $ ? 100 : $,
      x = e.widthDesktop,
      w = e.widthLaptop,
      k = e.widthPhone,
      C = e.widthTablet,
      W = e.widthWide;
    /*#__PURE__*/ return l.default.createElement(
      tt,
      {
        bottom: e.bottom || 'default',
        css: c(
          ((t = { textAlign: void 0 === r ? 'inherit' : r }),
          (t[m.phone] = { maxWidth: k ? k + '%' : '100%', flex: k ? '0 0 ' + k + '%' : '0 0 100%%', marginLeft: f ? f + '%' : 0 }),
          (t[m.tabletX] = { maxWidth: C ? C + '%' : y + '%', flex: C ? '0 0 ' + C + '%' : '0 0 ' + y + '%', marginLeft: h ? h + '%' : s + '%' }),
          (t[m.laptopX] = { maxWidth: w ? w + '%' : y + '%', flex: w ? '0 0 ' + w + '%' : '0 0 ' + y + '%', marginLeft: g ? g + '%' : s + '%' }),
          (t[m.desktopX] = { maxWidth: x ? x + '%' : y + '%', flex: x ? '0 0 ' + x + '%' : '0 0 ' + y + '%', marginLeft: u ? u + '%' : s + '%' }),
          (t[m.wide] = { maxWidth: W ? W + '%' : y + '%', flex: W ? '0 0 ' + W + '%' : '0 0 ' + y + '%', marginLeft: b ? b + '%' : s + '%' }),
          t),
          o
        ),
        id: i,
        left: !d && ('left' === a || 'left-right' === a),
        right: !d && ('right' === a || 'left-right' === a),
        top: v || 'default',
      },
      n
    );
  }),
  (exports.Context = function (e) {
    var t = e.children,
      r = e.css,
      n = e.switchable,
      o = e.theme,
      a = void 0 === o ? f : o,
      i = re().isDarkMode;
    return dt(), /*#__PURE__*/ l.default.createElement(lt, { className: n && i ? $ : a, css: r }, t);
  }),
  (exports.Cookies = function (r) {
    var o = r.css,
      a = r.href,
      i = void 0 === a ? 'https://cosmogroup.io/legal/privacy' : a,
      d = r.token,
      p = void 0 === d ? 'cooookies' : d,
      c = t.useState(!1),
      s = c[0],
      u = c[1],
      m = t.useState(!1),
      g = m[0],
      f = m[1];
    return (
      t.useEffect(
        function () {
          var e = n.parseCookies();
          u('true' !== e[p]);
        },
        [p]
      ),
      s &&
        /*#__PURE__*/ l.default.createElement(
          _,
          { css: o, isExiting: g },
          /*#__PURE__*/ l.default.createElement(
            z,
            { border: !0, css: { ptb: '$3', textAlign: 'center', display: 'inline-flex', boxShadow: '$3', '*': { color: '$base100' } } },
            /*#__PURE__*/ l.default.createElement(q, { inline: !0, inlineSpacer: 3, level: 5 }, '🍪'),
            /*#__PURE__*/ l.default.createElement(
              q,
              { inline: !0, inlineSpacer: 3, level: 5 },
              'We use cookies.',
              ' ',
              /*#__PURE__*/ l.default.createElement('a', { href: i }, /*#__PURE__*/ l.default.createElement('b', null, 'Learn more'))
            ),
            /*#__PURE__*/ l.default.createElement(
              q,
              { inline: !0, level: 5 },
              /*#__PURE__*/ l.default.createElement(e.X, {
                onClick: function () {
                  n.setCookie(null, p, 'true', { maxAge: 31536e3, path: '/' }),
                    f(!0),
                    setTimeout(function () {
                      u(!1);
                    }, 2500);
                },
              })
            )
          )
        )
    );
  }),
  (exports.Dialog = function (r) {
    var n = r.children,
      o = r.css,
      a = r.id,
      i = r.trigger,
      d = t.useRef(null),
      p = t.useState(!1),
      c = p[0],
      s = p[1];
    return (
      ne(d, function () {
        s(!1);
      }),
      t.useLayoutEffect(
        function () {
          document.body.style.overflow = c ? 'hidden' : 'auto';
        },
        [c]
      ),
      /*#__PURE__*/ l.default.createElement(
        ie,
        { id: a },
        /*#__PURE__*/ l.default.createElement(
          le,
          {
            onClickCapture: function (e) {
              e.persist(), s(!0);
            },
          },
          i
        ),
        c &&
          /*#__PURE__*/ l.default.createElement(
            de,
            { animation: c },
            /*#__PURE__*/ l.default.createElement(
              pe,
              { animation: c, css: o, ref: d },
              /*#__PURE__*/ l.default.createElement(
                ce,
                {
                  onClick: function () {
                    return s(!1);
                  },
                },
                /*#__PURE__*/ l.default.createElement(e.X, { size: 18 })
              ),
              /*#__PURE__*/ l.default.createElement(z, null, n)
            )
          )
      )
    );
  }),
  (exports.Dropdown = function (e) {
    var r = e.actions,
      n = e.align,
      o = void 0 === n ? 'left' : n,
      a = e.css,
      i = e.id,
      d = e.label,
      c = e.options,
      s = e.passKey,
      u = e.width,
      m = t.useRef(null),
      g = t.useState(!1),
      f = g[0],
      h = g[1];
    return (
      ne(m, function () {
        h(!1);
      }),
      /*#__PURE__*/ l.default.createElement(
        ye,
        { css: a, id: i, key: s, ref: m },
        /*#__PURE__*/ l.default.createElement(
          T,
          {
            onClickCapture: function () {
              h(!f);
            },
          },
          d || /*#__PURE__*/ l.default.createElement(p, null)
        ),
        f &&
          /*#__PURE__*/ l.default.createElement(
            xe,
            { animation: f, css: { minWidth: u || '15rem', maxWidth: u || '80rem', left: 'left' === o ? '0' : 'auto', right: 'right' === o ? '0' : 'auto' } },
            c.map(function (e) {
              /*#__PURE__*/ return l.default.createElement(
                we,
                {
                  className: d === e.name ? 'active' : 'inactive',
                  key: e.value,
                  onClickCapture: function () {
                    return r(e.value, e.name), void h(!1);
                  },
                },
                e.icon && /*#__PURE__*/ l.default.createElement(ke, null, e.icon),
                e.name
              );
            })
          )
      )
    );
  }),
  (exports.Element = et),
  (exports.Heading = q),
  (exports.InputField = function (r) {
    var n = r.changeFunction,
      o = r.copy,
      a = r.css,
      i = r.error,
      d = r.icon,
      u = r.inputRef,
      m = r.loader,
      g = r.reset,
      f = r.resetFunction,
      h = r.reveal,
      b = r.submit,
      v = r.submitFunction,
      $ = r.submitOverride,
      y = r.width,
      x = void 0 === y ? 2 : y,
      w = r.id,
      C = r.type,
      W = r.value,
      E = s(r, Le),
      S = t.useState(W || ''),
      B = S[0],
      R = S[1],
      L = t.useState(!1),
      I = L[0],
      A = L[1],
      F = t.useState('password' !== C),
      z = F[0],
      H = F[1];
    /*#__PURE__*/ return l.default.createElement(
      Ae,
      { css: a, id: w },
      d && /*#__PURE__*/ l.default.createElement(Fe, null, d),
      /*#__PURE__*/ l.default.createElement(
        ze,
        c(
          {
            onChange: function (e) {
              return (function (e) {
                R(e.target.value), n && n(e.target.value);
              })(e);
            },
            ref: u || void 0,
            type: 'password' === C ? (z ? 'text' : 'password') : C,
            value: B,
            width: x,
          },
          E
        )
      ),
      (m || i || g || h || o || b || v) &&
        /*#__PURE__*/ l.default.createElement(
          He,
          null,
          m && /*#__PURE__*/ l.default.createElement(k, { theme: 'navy' }, /*#__PURE__*/ l.default.createElement(p, null)),
          i && /*#__PURE__*/ l.default.createElement(k, { dot: 'pulse', theme: 'red' }, /*#__PURE__*/ l.default.createElement(e.WarningOctagon, { weight: 'duotone' })),
          g &&
            (null == B ? void 0 : B.length) > 2 &&
            /*#__PURE__*/ l.default.createElement(
              T,
              {
                onClick: function () {
                  return R(''), void (f && f());
                },
                theme: 'navy',
              },
              /*#__PURE__*/ l.default.createElement(e.X, { weight: 'duotone' })
            ),
          h &&
            /*#__PURE__*/ l.default.createElement(
              T,
              {
                onClick: function () {
                  return H(!z);
                },
                theme: 'navy',
              },
              /*#__PURE__*/ l.default.createElement(z ? e.EyeClosed : e.Eye, { weight: 'duotone' })
            ),
          o &&
            /*#__PURE__*/ l.default.createElement(
              T,
              {
                onClick: function () {
                  o &&
                    (navigator.clipboard.writeText(B),
                    A(!0),
                    setTimeout(function () {
                      A(!1);
                    }, 2e3));
                },
                theme: 'navy',
              },
              /*#__PURE__*/ l.default.createElement(I ? e.Check : e.Clipboard, { weight: 'duotone' })
            ),
          !$ &&
            b &&
            /*#__PURE__*/ l.default.createElement(
              T,
              {
                onClick: function () {
                  return {
                    if: function (e) {
                      e(B);
                    },
                  };
                },
                theme: 'navy',
              },
              'string' == typeof b ? b : 'Submit'
            ),
          $ || null
        )
    );
  }),
  (exports.Loading = p),
  (exports.Percentages = function (r) {
    var n = r.css,
      o = r.id,
      a = r.numberA,
      i = r.numberB,
      d = r.showDollarDifference,
      s = r.toFixed,
      u = void 0 === s ? 1 : s,
      m = r.trendDirection,
      g = void 0 === m ? 'up' : m,
      f = t.useState(!0),
      h = f[0],
      b = f[1],
      v = t.useState(0),
      $ = v[0],
      y = v[1],
      x = t.useState(0),
      w = x[0],
      C = x[1],
      W = t.useState('up'),
      E = W[0],
      S = W[1];
    return (
      t.useEffect(
        function () {
          var e = a - i;
          return (
            y((((a - i) / i) * 100).toFixed(u)),
            C(e.toFixed(u)),
            b(!1),
            S(e > 0 ? ('up' === g ? 'up' : 'down') : 'up' === g ? 'down' : 'up'),
            function () {
              b(!0);
            }
          );
        },
        [a, i, u, g]
      ),
      h
        ? /*#__PURE__*/ l.default.createElement(p, null)
        : /*#__PURE__*/ l.default.createElement(
            et,
            { css: c({ width: '100%', height: '100%' }, n), id: o },
            /*#__PURE__*/ l.default.createElement(
              k,
              { theme: 'up' === E ? 'green' : 'yellow' },
              /*#__PURE__*/ l.default.createElement('up' === E ? e.TrendUp : e.TrendDown, null),
              ' ',
              $,
              '%'
            ),
            d ? /*#__PURE__*/ l.default.createElement(q, { css: { pt: '$1', opacity: 0.5 }, level: 6 }, '$', w.toLocaleString()) : null
          )
    );
  }),
  (exports.Section = function (e) {
    var t = e.align,
      r = void 0 === t ? 'initial' : t,
      n = e.children,
      o = e.id,
      a = e.top;
    /*#__PURE__*/ return l.default.createElement(
      Ze,
      { bottom: e.bottom || 'default', css: c({ alignItems: r, justifyContent: r, '*': { alignItems: r } }, e.css), id: o, top: a || 'default' },
      n
    );
  }),
  (exports.Submenu = function (e) {
    var r = e.align,
      n = void 0 === r ? 'left' : r,
      o = e.css,
      i = e.hover,
      d = e.id,
      p = e.options,
      c = e.passKey,
      s = e.trigger,
      u = e.width,
      m = a.useRouter(),
      g = t.useRef(null),
      f = t.useState(!1),
      h = f[0],
      b = f[1],
      v = (null == m ? void 0 : m.pathname) || '/';
    return (
      ne(g, function () {
        b(!1);
      }),
      /*#__PURE__*/ l.default.createElement(
        We,
        { css: o, id: d, key: c, ref: g },
        /*#__PURE__*/ l.default.createElement(
          Ee,
          {
            hover: i,
            onClickCapture: function () {
              b(!h);
            },
          },
          s
        ),
        h &&
          /*#__PURE__*/ l.default.createElement(
            Se,
            { animation: h, css: { minWidth: u || '15rem', maxWidth: u || '80rem', left: 'left' === n ? '0' : 'auto', right: 'right' === n ? '0' : 'auto' } },
            p.map(function (e) {
              var t = e.value,
                r = e.name,
                n = e.icon;
              /*#__PURE__*/ return l.default.createElement(
                Te,
                { className: v === t ? 'active' : '', key: t },
                /*#__PURE__*/ l.default.createElement(
                  'a',
                  {
                    onClick: function () {
                      return (function (e) {
                        m.push(e), b(!1);
                      })(t);
                    },
                  },
                  n
                    ? /*#__PURE__*/ l.default.createElement(Be, null, n, ' ', ' ', /*#__PURE__*/ l.default.createElement(q, { css: { opacity: 1 }, inline: !0, level: 6 }, r))
                    : /*#__PURE__*/ l.default.createElement(q, { css: { opacity: 1 }, level: 6 }, r)
                )
              );
            })
          )
      )
    );
  }),
  (exports.Switch = function () {
    var t = re();
    /*#__PURE__*/ return l.default.createElement(
      pt,
      null,
      /*#__PURE__*/ l.default.createElement(T, { onClick: t.toggle }, /*#__PURE__*/ l.default.createElement(t.isDarkMode ? e.Moon : e.Sun, null))
    );
  }),
  (exports.Text = Q),
  (exports.Textarea = function (r) {
    var n = r.changeFunction,
      o = r.copy,
      a = r.css,
      i = r.maxLength,
      d = void 0 === i ? 250 : i,
      p = r.rows,
      u = void 0 === p ? 4 : p,
      m = r.disabled,
      g = r.value,
      f = s(r, Xe),
      h = t.useState(g || ''),
      b = h[0],
      v = h[1],
      $ = t.useState(!1),
      y = $[0],
      x = $[1];
    /*#__PURE__*/ return l.default.createElement(
      De,
      { css: a },
      /*#__PURE__*/ l.default.createElement(
        Pe,
        c(
          {
            disabled: m,
            maxLength: d,
            onChange: function (e) {
              v(e.target.value), n && n(e.target.value);
            },
            rows: u,
            value: b,
          },
          f
        )
      ),
      /*#__PURE__*/ l.default.createElement(
        Me,
        null,
        /*#__PURE__*/ l.default.createElement(Q, { inline: !0, inlineSpacer: 4, level: 2 }, b.length, ' / ', d),
        o &&
          /*#__PURE__*/ l.default.createElement(
            T,
            {
              onClick: function () {
                o &&
                  (navigator.clipboard.writeText(b),
                  x(!0),
                  setTimeout(function () {
                    x(!1);
                  }, 2e3));
              },
              theme: 'navy',
            },
            /*#__PURE__*/ l.default.createElement(y ? e.Check : e.Clipboard, null)
          )
      )
    );
  }),
  (exports.Tooltip = Ke),
  (exports.breakpoints = m),
  (exports.css = h),
  (exports.darkTheme = $),
  (exports.getCssText = v),
  (exports.styled = b),
  (exports.theme = f);
//# sourceMappingURL=index.js.map
