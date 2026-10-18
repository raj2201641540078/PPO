
import { useMemo } from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { useTheme } from "next-themes";
import * as SimpleIcons from "simple-icons";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxWidth: "100%",
      paddingTop: 20,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "transparent",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export default function IconCloud({ iconSlugs = [] }) {
  const { resolvedTheme, theme } = useTheme();

  const icons = useMemo(() => {
    const currentTheme = resolvedTheme || theme || "dark";

    return iconSlugs
      .map((slug) => {
        const icon = Object.values(SimpleIcons).find(
          (item) =>
            item &&
            typeof item === "object" &&
            item.slug === slug
        );

        if (!icon) {
          console.warn(`Icon not found: ${slug}`);
          return null;
        }

        return renderSimpleIcon({
          icon,
          size: 42,
          bgHex:
            currentTheme === "light" ? "#f3f2ef" : "#080510",
          fallbackHex:
            currentTheme === "light" ? "#6e6e73" : "#ffffff",
          minContrastRatio: 1.2,
          aProps: {
            href: undefined,
            onClick: (event) => event.preventDefault(),
          },
        });
      })
      .filter(Boolean);
  }, [iconSlugs, resolvedTheme, theme]);

  return (
    <div className="w-full max-w-full">
      <Cloud {...cloudProps}>{icons}</Cloud>
    </div>
  );
}
