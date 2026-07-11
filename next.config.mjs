// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  // @plaiceholder/next injects a webpack-only `sharp` externalization that
  // Turbopack doesn't need; declare an empty turbopack config to confirm
  // Turbopack is intentional and silence the webpack/turbopack mismatch check.
  turbopack: {},
};

export default withPlaiceholder(config);
