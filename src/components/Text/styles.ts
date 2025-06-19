import { styled } from "../../stitches.config";

const highlight = {
  borderRadius: "$small",
  padding: "calc($smallest / 2) $smaller",
};

const link = {
  "&:hover": {
    backgroundColor: "$surface",
    borderRadius: "$small",
  },
  borderBottom: "1px solid $border",
  color: "$text",
  cursor: "pointer",
  margin: 0,
  transition: "$default",
};

const mutedStyles = {
  opacity: "$default",
};

export const TextSizes = {
  a: {
    marginBottom: 0,
  },
  h1: {
    fontSize: "$h1",
    fontWeight: "bold",
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h2: {
    fontSize: "$h2",
    fontWeight: "bold",
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h3: {
    fontSize: "$h3",
    fontWeight: "bold",
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h4: {
    fontSize: "$h4",
    fontWeight: "bold",
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h5: {
    fontSize: "$h5",
    fontWeight: "bold",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  h6: {
    fontSize: "$h6",
    fontWeight: "bold",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  label: {
    color: "$text",
    display: "block",
    fontSize: "$small",
    fontWeight: "bold",
    lineHeight: "$default",
    marginBottom: "$smaller",
    opacity: "$default",
  },
  li: {
    fontSize: "$default",
    lineHeight: "$default",
    marginBottom: "$smaller",
  },
  micro: {
    color: "$text",
    display: "block",
    fontSize: "$micro",
    lineHeight: "$default",
    marginBottom: "$smaller",
    opacity: "$default",
  },
  ol: {
    listStylePosition: "inside",
    marginBottom: 0,
    paddingLeft: "$small",
  },
  p: {
    color: "$text",
    fontFamily: "$default",
    fontSize: "$default",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  small: {
    color: "$text",
    display: "block",
    fontSize: "$small",
    lineHeight: "$default",
    marginBottom: "$smaller",
    opacity: "$default",
  },
  span: {
    fontSize: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
  },
  strong: {
    fontSize: "inherit",
    fontWeight: "bold",
    lineHeight: "inherit",
  },
  ul: {
    listStylePosition: "inside",
    marginBottom: 0,
    paddingLeft: "$small",
  },
};

export const TextStyled = styled("div", {
  "&:last-child": {
    marginBottom: "0 !important",
  },
  color: "$text",
  variants: {
    accent: {
      true: mutedStyles,
    },
    highlight: {
      blue: {
        ...highlight,
        backgroundColor: "$blue",
      },
      default: {
        ...highlight,
        backgroundColor: "$surface",
      },
      orange: {
        ...highlight,
        backgroundColor: "$orange",
      },
      purple: {
        ...highlight,
        backgroundColor: "$purple",
      },
      yellow: {
        ...highlight,
        backgroundColor: "$yellow",
      },
    },
    inline: {
      false: {
        verticalAlign: "baseline !important",
      },
      true: {
        alignSelf: "center",
        display: "inline-flex !important",
        marginBottom: "0 !important",
        verticalAlign: "middle",
      },
    },
    link: {
      default: {
        ...link,
      },
      minimal: {
        ...link,
        borderColor: "transparent",
      },
    },
    muted: {
      true: mutedStyles,
    },
    size: TextSizes,
    truncate: {
      "1": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      "2": {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
      },
      "3": {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 3,
      },
      "4": {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 4,
      },
    },
  },

  verticalAlign: "baseline",
});

export default TextStyled;
