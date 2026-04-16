import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { preloadRoute } from "@/lib/routes";

type PrefetchLinkProps = ComponentPropsWithoutRef<typeof Link>;

const PrefetchLink = forwardRef<HTMLAnchorElement, PrefetchLinkProps>(
  ({ to, onMouseEnter, onFocus, onTouchStart, ...props }, ref) => {
    const handlePreload = () => {
      if (typeof to === "string") {
        preloadRoute(to);
      }
    };

    return (
      <Link
        ref={ref}
        to={to}
        onMouseEnter={(event) => {
          handlePreload();
          onMouseEnter?.(event);
        }}
        onFocus={(event) => {
          handlePreload();
          onFocus?.(event);
        }}
        onTouchStart={(event) => {
          handlePreload();
          onTouchStart?.(event);
        }}
        {...props}
      />
    );
  },
);

PrefetchLink.displayName = "PrefetchLink";

export default PrefetchLink;
