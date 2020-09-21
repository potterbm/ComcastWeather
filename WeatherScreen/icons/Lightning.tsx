import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={208} height={276} viewBox="0 0 208 276" {...props}>
      <Path
        d="M207.682 275.5h-5.821L100.12 124.97c-1.385-2.679-.646-4.019 2.219-4.019h41.998L100.122 40.42c-1.294-2.68-.324-4.02 2.91-4.02h56.276c1.57 0 3.003.879 4.297 2.634l41.028 109.363c.37 2.68-.555 4.02-2.772 4.02h-40.613L207.682 275.5zM81.964 181.939h-4.02L.74 68.557C0 67.356-.185 66.385.185 65.647c.37-.74 1.201-1.11 2.495-1.11h31.048L1.432 4.935C-.323 1.978.554.5 4.066.5H44.54c1.94 0 3.419.924 4.435 2.772l30.771 81.086c.462 1.294.416 2.31-.138 3.05-.555.739-1.479 1.109-2.772 1.109H46.619l35.345 93.422z"
        fill="#BBB"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
