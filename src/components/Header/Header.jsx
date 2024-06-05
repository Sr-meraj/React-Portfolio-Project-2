import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';


const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <header className="header-area">
                <Container>
                    <div className="gx-row d-flex align-items-center justify-content-between">
                        <NavLink to="/" className="logo">

                            <svg width="185" height="50.810668733341494"
                                viewBox="0 0 303.9519137418042 36.00000000000001" className="css-1j8o68f">
                                <defs id="SvgjsDefs6465"></defs>
                                <g id="SvgjsG6467" featurekey="nameLeftFeature-0"
                                    transform="matrix(2.3809523582458496,0,0,2.3809523582458496,0,-12.523805967654548)"
                                    fill="#ffffff">
                                    <path
                                        d="M12 9.84 l-1.82 0 c-0.1 -2.22 -1.94 -2.92 -3.56 -2.92 c-1.22 0 -3.28 0.34 -3.28 2.52 c0 1.22 0.86 1.62 1.7 1.82 l4.1 0.94 c1.86 0.44 3.26 1.56 3.26 3.84 c0 3.4 -3.16 4.34 -5.62 4.34 c-2.66 0 -3.7 -0.8 -4.34 -1.38 c-1.22 -1.1 -1.46 -2.3 -1.46 -3.64 l1.82 0 c0 2.6 2.12 3.36 3.96 3.36 c1.4 0 3.76 -0.36 3.76 -2.42 c0 -1.5 -0.7 -1.98 -3.06 -2.54 l-2.94 -0.68 c-0.94 -0.22 -3.06 -0.88 -3.06 -3.38 c0 -2.24 1.46 -4.44 4.94 -4.44 c5.02 0 5.52 3 5.6 4.58 z M17.04 13.84 l0 6.16 l-1.94 0 l0 -14.36 l6.64 0 c2.36 0 4.72 0.82 4.72 3.86 c0 2.12 -1.08 2.9 -2 3.44 c0.82 0.34 1.64 0.7 1.72 2.7 l0.12 2.6 c0.02 0.8 0.12 1.1 0.72 1.44 l0 0.32 l-2.38 0 c-0.28 -0.88 -0.34 -3.06 -0.34 -3.6 c0 -1.18 -0.24 -2.56 -2.56 -2.56 l-4.7 0 z M17.04 7.300000000000001 l0 4.88 l4.5 0 c1.42 0 2.92 -0.36 2.92 -2.48 c0 -2.22 -1.62 -2.4 -2.58 -2.4 l-4.84 0 z M31.6 17.88 l0 2.12 l-2.08 0 l0 -2.12 l2.08 0 z M48.56 20 l-1.88 0 l0 -8.48 c0 -0.42 0.04 -2.24 0.04 -3.58 l-0.04 0 l-4.04 12.06 l-1.92 0 l-4.04 -12.04 l-0.04 0 c0 1.32 0.04 3.14 0.04 3.56 l0 8.48 l-1.88 0 l0 -14.36 l2.78 0 l4.1 12.14 l0.04 0 l4.08 -12.14 l2.76 0 l0 14.36 z">
                                    </path>
                                </g>
                                <g id="SvgjsG6468" featurekey="nameRightFeature-0"
                                    transform="matrix(2.3800785541534424,0,0,2.3800785541534424,123,-11.614776778987016)"
                                    fill="#ffffff">
                                    <path
                                        d="M3.5 4.880000000000001 l7.42 0 c0.8 0 1.46 0.66 1.46 1.46 s-0.62 1.48 -1.42 1.48 l-7.46 0 c-0.3 0 -0.56 0.24 -0.56 0.56 c0 0.3 0.26 0.56 0.56 0.56 c0.34 0 0.62 0.26 0.62 0.6 s-0.28 0.62 -0.62 0.62 c-0.98 0 -1.76 -0.8 -1.76 -1.78 s0.78 -1.78 1.76 -1.78 l7.42 0 c0.14 0 0.24 -0.12 0.24 -0.26 s-0.1 -0.24 -0.24 -0.24 l-7.42 0 c-1.26 0 -2.28 1.02 -2.28 2.28 s1.02 2.28 2.28 2.28 l5.38 0 c0.98 0 1.78 0.8 1.78 1.8 c0 0.98 -0.8 1.76 -1.78 1.76 l-5.38 0 c-1.26 0 -2.28 1.02 -2.28 2.28 s1.02 2.28 2.28 2.28 l8.26 0 c0.34 0 0.62 0.28 0.62 0.62 s-0.28 0.6 -0.62 0.6 l-8.26 0 c-1.94 0 -3.5 -1.56 -3.5 -3.5 c0 -1.92 1.56 -3.5 3.5 -3.5 l5.38 0 c0.32 0 0.56 -0.24 0.56 -0.54 c0 -0.34 -0.24 -0.58 -0.56 -0.58 l-5.38 0 c-1.92 0 -3.5 -1.58 -3.5 -3.5 c0 -1.94 1.58 -3.5 3.5 -3.5 z M3.5 14.74 l5.38 0 c0.34 0 0.62 0.26 0.62 0.6 s-0.28 0.62 -0.62 0.62 l-5.38 0 c-0.3 0 -0.56 0.24 -0.56 0.54 c0 0.32 0.26 0.56 0.56 0.56 c0.34 0 0.6 0.28 0.6 0.62 c0 0.32 -0.26 0.6 -0.6 0.6 c-0.98 0 -1.78 -0.8 -1.78 -1.78 s0.8 -1.76 1.78 -1.76 z M14.58 4.880000000000001 l7.28 0 c2.48 0.02 4.48 2.06 4.48 4.54 c0 2.32 -1.78 4.24 -4.04 4.48 l3.62 3.6 c0.54 0.54 0.54 1.54 0 2.08 s-1.48 0.58 -2.04 0.02 c-0.52 -0.54 -2.52 -2.52 -2.52 -2.52 c-0.24 -0.24 -0.24 -0.62 0 -0.86 s0.62 -0.24 0.86 0 l2.48 2.48 c0.1 0.1 0.26 0.12 0.36 0.02 s0.12 -0.24 0 -0.36 l-4.64 -4.62 c-0.12 -0.12 -0.18 -0.26 -0.18 -0.42 c0 -0.34 0.28 -0.62 0.62 -0.62 l0.96 0 c1.82 0 3.32 -1.48 3.32 -3.3 s-1.5 -3.3 -3.32 -3.3 l-6.62 0 l0 3.3 c0 0.34 -0.28 0.6 -0.62 0.6 s-0.6 -0.26 -0.6 -0.6 l0 -3.92 c0 -0.32 0.26 -0.6 0.6 -0.6 z M21.84 6.6 c1.54 0 2.8 1.26 2.8 2.8 s-1.26 2.78 -2.8 2.78 l-3.34 0 c-1.82 0 -3.3 1.48 -3.3 3.3 l0 3.92 c0 0.32 -0.28 0.6 -0.62 0.6 s-0.6 -0.28 -0.6 -0.6 l0 -3.92 c0 -2.5 2.02 -4.52 4.52 -4.52 l3.34 0 c0.88 0 1.58 -0.7 1.58 -1.56 c0 -0.88 -0.7 -1.58 -1.58 -1.58 c-0.34 0 -0.6 -0.26 -0.6 -0.6 s0.26 -0.62 0.6 -0.62 z M35.88 4.880000000000001 c1.46 0 2.76 0.9 3.28 2.26 l5.02 12.02 c0.14 0.32 -0.02 0.66 -0.32 0.8 c-0.32 0.12 -0.68 -0.02 -0.8 -0.34 l-5.06 -12.1 c-0.36 -0.86 -1.2 -1.42 -2.12 -1.42 c-0.94 0 -1.76 0.56 -2.12 1.42 l-4.56 10.9 c-0.06 0.14 -0.02 0.3 0.12 0.36 s0.28 0 0.34 -0.16 l4.56 -10.88 c0.28 -0.66 0.94 -1.08 1.66 -1.08 s1.38 0.42 1.66 1.1 l2.36 5.62 c0.22 0.52 -0.1 0.84 -0.58 0.84 l-4.8 0 c-0.34 0 -0.62 -0.28 -0.62 -0.62 s0.28 -0.6 0.62 -0.6 l3.9 0 l-2 -4.76 c-0.08 -0.22 -0.28 -0.38 -0.54 -0.38 s-0.46 0.16 -0.54 0.38 l-4.56 10.84 c-0.3 0.76 -1.16 1.12 -1.92 0.82 c-0.76 -0.32 -1.12 -1.18 -0.82 -1.92 l4.56 -10.84 c0.52 -1.36 1.82 -2.26 3.28 -2.26 z M54.42 4.880000000000001 c0.34 0 0.6 0.28 0.6 0.6 l0 6.8 c0 4.26 -3.46 7.72 -7.72 7.72 c-0.82 0 -1.46 -0.66 -1.46 -1.46 c0 -0.9 0.68 -1.46 1.46 -1.46 c1.28 0 2.5 -0.5 3.4 -1.4 c0.9 -0.92 1.4 -2.12 1.4 -3.4 c0 -0.32 0.26 -0.6 0.6 -0.6 c0.32 0 0.6 0.28 0.6 0.6 c0 1.6 -0.62 3.1 -1.76 4.24 c-1.12 1.12 -2.64 1.74 -4.24 1.74 c-0.18 0 -0.26 0.16 -0.26 0.28 s0.08 0.26 0.26 0.26 c3.6 0 6.54 -2.92 6.54 -6.52 l0 -6.8 c0 -0.32 0.26 -0.6 0.58 -0.6 z">
                                    </path>
                                </g>
                            </svg>

                            {/* <svg width="195" height="58"
                                viewBox="0 0 369.66666666666663 107.49559631073888" className="css-1j8o68f">
                                <defs id="SvgjsDefs3014"></defs>
                                <g id="SvgjsG3016" featurekey="Ua4uQk-0"
                                    transform="matrix(4.42071533203125,0,0,4.42071533203125,0,-23.658102926311933)"
                                    fill="#ffffff">
                                    <path
                                        d="M17.715 9.746 q-0.029296875 0.13671875 -0.126953125 0.21484375 t-0.21484 0.078125 q-0.17578125 0 -0.283203125 -0.1123046875 t-0.10742 -0.25879 t0.029297 -0.28809 t0.029297 -0.27832 q0 -0.712890625 -0.439453125 -1.279296875 t-1.2451 -0.95215 t-1.958 -0.59082 t-2.5684 -0.20508 q-1.083984375 0 -2.182617188 0.1416015625 t-2.1094 0.41016 t-1.8896 0.67383 t-1.5283 0.9375 t-1.0205 1.1816 t-0.37109 1.4209 q0 0.595703125 0.2587890625 1.049804688 t0.70801 0.79102 t1.0596 0.57617 t1.3232 0.40039 t1.4844 0.26367 t1.5527 0.1709 l1.5039 0.12695 q1.123046875 0.09765625 2.01171875 0.205078125 t1.5625 0.27344 q1.123046875 0.283203125 1.66015625 0.810546875 t0.53711 1.4063 q0 0.849609375 -0.46875 1.494140625 t-1.2793 1.084 t-1.8945 0.66406 t-2.3242 0.22461 q-1.34765625 0 -2.368164063 -0.1806640625 t-1.709 -0.40039 t-1.0498 -0.40527 t-0.39063 -0.20508 q-0.17578125 -0.09765625 -0.17578125 -0.3125 q0 -0.166015625 0.1171875 -0.2685546875 t0.25391 -0.10254 q0.107421875 0 0.1953125 0.05859375 q0.009765625 0 0.3369140625 0.1708984375 t0.97656 0.37598 t1.6064 0.37109 t2.2217 0.16602 t2.2314 -0.20508 t1.626 -0.57129 t0.99609 -0.85938 t0.33691 -1.0693 q0 -0.341796875 -0.1220703125 -0.5908203125 t-0.33691 -0.42969 t-0.5127 -0.30762 t-0.64941 -0.21484 q-0.37109375 -0.09765625 -0.7958984375 -0.166015625 t-0.87402 -0.11719 t-0.89844 -0.087891 l-2.4023 -0.20508 q-1.77734375 -0.146484375 -3.100585938 -0.4541015625 t-2.2021 -0.79102 t-1.3184 -1.1572 t-0.43945 -1.582 t0.41504 -1.6748 t1.1328 -1.3818 t1.6797 -1.0693 t2.0557 -0.75684 t2.2656 -0.4541 t2.3047 -0.15137 q1.416015625 0 2.465820313 0.1708984375 t1.7969 0.43945 t1.2256 0.61035 t0.77148 0.67383 q0.693359375 0.810546875 0.693359375 1.845703125 q0 0.341796875 -0.068359375 0.654296875 z M17.812515625 15.9863 q-0.0390625 0.263671875 -0.09765625 0.4931640625 t-0.1123 0.40039 t-0.092773 0.27832 t-0.048828 0.11719 q-0.09765625 0.224609375 -0.341796875 0.224609375 q-0.13671875 0 -0.25390625 -0.1025390625 t-0.11719 -0.25879 q0 -0.05859375 0.01953125 -0.087890625 t0.058594 -0.11719 t0.097656 -0.29297 t0.14648 -0.63477 q-0.166015625 0 -0.341796875 -0.009765625 t-0.32715 -0.068359 t-0.24902 -0.18555 t-0.097656 -0.35156 q0 -0.166015625 0.0927734375 -0.44921875 t0.24902 -0.55664 t0.35156 -0.47363 t0.39063 -0.2002 q0.224609375 0 0.3662109375 0.166015625 t0.21973 0.40527 t0.1123 0.50293 t0.03418 0.45898 l0.63477 -0.0097656 q0.556640625 0 0.849609375 0.244140625 t0.29297 0.80078 q0 0.224609375 -0.029296875 0.46875 t-0.068359 0.50293 t-0.068359 0.5127 t-0.029297 0.49805 q0 0.3515625 0.09765625 0.5810546875 t0.24414 0.36621 t0.3125 0.19043 t0.30273 0.053711 q0.419921875 0 0.791015625 -0.2734375 t0.68359 -0.65918 t0.56152 -0.81543 t0.41504 -0.75195 q0.048828125 -0.087890625 0.13671875 -0.13671875 t0.18555 -0.048828 q0.17578125 0 0.2734375 0.1123046875 t0.097656 0.24902 q0 0.09765625 -0.0390625 0.17578125 q-0.224609375 0.400390625 -0.5224609375 0.9033203125 t-0.67871 0.94238 t-0.85449 0.74219 t-1.04 0.30273 q-0.3515625 0 -0.6640625 -0.1318359375 t-0.54199 -0.38086 t-0.36621 -0.61523 t-0.13672 -0.8252 q0 -0.48828125 0.09765625 -0.9716796875 t0.097656 -0.92285 q0 -0.185546875 -0.0830078125 -0.2783203125 t-0.36621 -0.092773 l-0.29297 0 z M17.158205625 15.2637 q0 -0.068359375 -0.0048828125 -0.1806640625 t-0.019531 -0.21973 t-0.039063 -0.18555 t-0.053711 -0.078125 t-0.073242 0.073242 t-0.092773 0.17578 t-0.087891 0.21973 t-0.058594 0.19531 l0.42969 0 z M24.80466875 19.7168 q0 0.224609375 -0.1513671875 0.3759765625 t-0.37598 0.15137 t-0.37598 -0.15137 t-0.15137 -0.37109 t0.15137 -0.37109 t0.37598 -0.15137 t0.37598 0.15137 t0.15137 0.36621 z M28.70121875 19.13086 q0.146484375 -0.29296875 0.3759765625 -0.7275390625 t0.47852 -0.87402 t0.48828 -0.83008 t0.40527 -0.5957 q0.283203125 -0.341796875 0.5859375 -0.48828125 t0.55664 -0.14648 t0.43457 0.10742 t0.29785 0.28809 t0.17578 0.41992 t0.058594 0.5127 q0 0.15625 -0.009765625 0.41015625 l-0.029297 0.54688 l-0.058594 1.1914 q0.146484375 -0.29296875 0.33203125 -0.6494140625 t0.37598 -0.70801 t0.36621 -0.65918 t0.32227 -0.50293 q0.419921875 -0.576171875 0.7861328125 -0.771484375 t0.64941 -0.19531 q0.33203125 0 0.546875 0.1220703125 t0.33691 0.3125 t0.1709 0.4248 t0.048828 0.44922 q0 0.33203125 -0.048828125 0.693359375 t-0.048828 0.85938 q0 0.205078125 0.01953125 0.41015625 t0.083008 0.36133 t0.2002 0.25391 t0.38086 0.097656 t0.48828 -0.13184 t0.46875 -0.34668 t0.4248 -0.48828 t0.36621 -0.54688 t0.29297 -0.52246 t0.20508 -0.4248 q0.048828125 -0.107421875 0.13671875 -0.166015625 t0.19531 -0.058594 q0.166015625 0 0.2685546875 0.1220703125 t0.10254 0.25879 q0 0.068359375 -0.029296875 0.13671875 l-0.15625 0.32227 q-0.1171875 0.25390625 -0.3125 0.5712890625 t-0.4541 0.66895 t-0.57129 0.64941 t-0.67383 0.48828 t-0.76172 0.19043 q-0.4296875 0 -0.6982421875 -0.1513671875 t-0.42969 -0.40527 t-0.21973 -0.58594 t-0.058594 -0.69336 q0 -0.478515625 0.048828125 -0.8837890625 t0.048828 -0.63965 t-0.043945 -0.36133 t-0.10742 -0.18066 t-0.12207 -0.063477 l-0.087891 0 q-0.234375 0 -0.4931640625 0.2587890625 t-0.53223 0.68848 t-0.55664 0.97656 l-0.58594 1.1133 l-0.27344 0.51758 q-0.1171875 0.205078125 -0.2197265625 0.322265625 t-0.2002 0.16602 t-0.21484 0.048828 q-0.25390625 0 -0.3857421875 -0.17578125 t-0.13184 -0.45898 q0 -0.146484375 0.009765625 -0.390625 l0.019531 -0.53711 q0.009765625 -0.29296875 0.029296875 -0.60546875 t0.029297 -0.60547 l0.019531 -0.50781 q0.009765625 -0.224609375 0.009765625 -0.341796875 q0 -0.25390625 -0.087890625 -0.3662109375 t-0.2002 -0.1123 t-0.24414 0.078125 t-0.30762 0.30273 q-0.13671875 0.17578125 -0.3466796875 0.5126953125 t-0.44434 0.74707 t-0.46387 0.83984 t-0.39551 0.77148 q-0.205078125 0.41015625 -0.41015625 0.5615234375 t-0.40039 0.15137 q-0.283203125 0 -0.419921875 -0.1708984375 t-0.13672 -0.4541 l0.13672 -3.1152 q0.009765625 -0.244140625 -0.01953125 -0.44921875 t-0.078125 -0.24414 q-0.078125 0.01953125 -0.3076171875 0.361328125 t-0.58105 1.1914 q-0.048828125 0.107421875 -0.146484375 0.166015625 t-0.20508 0.058594 q-0.166015625 0 -0.263671875 -0.1123046875 t-0.097656 -0.25879 q0 -0.068359375 0.029296875 -0.146484375 q0.439453125 -1.044921875 0.83984375 -1.538085938 t0.78125 -0.49316 q0.224609375 0 0.3759765625 0.1025390625 t0.23926 0.26367 t0.12695 0.36621 t0.039063 0.40039 q0 0.869140625 -0.0390625 1.591796875 z M40.400421875 18.9258 q0.205078125 0.283203125 0.52734375 0.4541015625 t0.7959 0.1709 t0.86426 -0.22949 t0.71289 -0.60059 t0.57617 -0.83008 t0.45898 -0.91797 q0.048828125 -0.107421875 0.13671875 -0.1611328125 t0.19531 -0.053711 q0.166015625 0 0.2685546875 0.1171875 t0.10254 0.25391 q0 0.048828125 -0.009765625 0.0830078125 t-0.029297 0.073242 q-0.673828125 1.484375 -1.469726563 2.236328125 t-1.8018 0.77148 q-0.64453125 0 -1.11328125 -0.2490234375 t-0.77148 -0.64453 t-0.44922 -0.89355 t-0.14648 -0.99609 t0.12207 -0.91797 t0.35156 -0.73242 t0.54688 -0.48828 t0.69824 -0.17578 q0.224609375 0 0.4443359375 0.0927734375 t0.39551 0.26367 t0.2832 0.41504 t0.10742 0.55664 q0 0.400390625 -0.13671875 0.751953125 t-0.37598 0.6543 t-0.57129 0.55664 t-0.71289 0.43945 z M40.107421875 18.291 q0.302734375 -0.126953125 0.5517578125 -0.322265625 t0.4248 -0.42969 t0.27344 -0.49316 t0.097656 -0.52246 q0 -0.29296875 -0.146484375 -0.4443359375 t-0.3418 -0.15137 q-0.263671875 0 -0.44921875 0.146484375 t-0.30273 0.38086 t-0.1709 0.52246 t-0.053711 0.57129 q0 0.17578125 0.0341796875 0.37109375 t0.083008 0.37109 z M45.36134375 15.9863 q-0.0390625 0.263671875 -0.09765625 0.4931640625 t-0.1123 0.40039 t-0.092773 0.27832 t-0.048828 0.11719 q-0.09765625 0.224609375 -0.341796875 0.224609375 q-0.13671875 0 -0.25390625 -0.1025390625 t-0.11719 -0.25879 q0 -0.05859375 0.01953125 -0.087890625 t0.058594 -0.11719 t0.097656 -0.29297 t0.14648 -0.63477 q-0.166015625 0 -0.341796875 -0.009765625 t-0.32715 -0.068359 t-0.24902 -0.18555 t-0.097656 -0.35156 q0 -0.166015625 0.0927734375 -0.44921875 t0.24902 -0.55664 t0.35156 -0.47363 t0.39063 -0.2002 q0.224609375 0 0.3662109375 0.166015625 t0.21973 0.40527 t0.1123 0.50293 t0.03418 0.45898 l0.63477 -0.0097656 q0.556640625 0 0.849609375 0.244140625 t0.29297 0.80078 q0 0.224609375 -0.029296875 0.46875 t-0.068359 0.50293 t-0.068359 0.5127 t-0.029297 0.49805 q0 0.3515625 0.09765625 0.5810546875 t0.24414 0.36621 t0.3125 0.19043 t0.30273 0.053711 q0.419921875 0 0.791015625 -0.2734375 t0.68359 -0.65918 t0.56152 -0.81543 t0.41504 -0.75195 q0.048828125 -0.087890625 0.13671875 -0.13671875 t0.18555 -0.048828 q0.17578125 0 0.2734375 0.1123046875 t0.097656 0.24902 q0 0.09765625 -0.0390625 0.17578125 q-0.224609375 0.400390625 -0.5224609375 0.9033203125 t-0.67871 0.94238 t-0.85449 0.74219 t-1.04 0.30273 q-0.3515625 0 -0.6640625 -0.1318359375 t-0.54199 -0.38086 t-0.36621 -0.61523 t-0.13672 -0.8252 q0 -0.48828125 0.09765625 -0.9716796875 t0.097656 -0.92285 q0 -0.185546875 -0.0830078125 -0.2783203125 t-0.36621 -0.092773 l-0.29297 0 z M44.70703375 15.2637 q0 -0.068359375 -0.0048828125 -0.1806640625 t-0.019531 -0.21973 t-0.039063 -0.18555 t-0.053711 -0.078125 t-0.073242 0.073242 t-0.092773 0.17578 t-0.087891 0.21973 t-0.058594 0.19531 l0.42969 0 z M57.949196875 17.2754 q-0.0390625 0.078125 -0.1611328125 0.3271484375 t-0.3125 0.57129 t-0.44434 0.67383 t-0.56641 0.64453 t-0.67383 0.4834 t-0.76172 0.19043 q-0.56640625 0 -0.9521484375 -0.361328125 t-0.56152 -0.9082 q-0.33203125 0.556640625 -0.791015625 0.8837890625 t-0.91797 0.32715 q-0.361328125 0 -0.654296875 -0.1318359375 t-0.49805 -0.37109 t-0.31738 -0.56152 t-0.1123 -0.70313 q0 -0.76171875 0.2587890625 -1.342773438 t0.65918 -0.97168 t0.88379 -0.58594 t0.93262 -0.19531 q0.302734375 0 0.556640625 0.0830078125 t0.43457 0.18066 t0.27832 0.17578 l0.10742 0.097656 q0.107421875 0.126953125 0.107421875 0.2685546875 t-0.10742 0.25391 t-0.25879 0.1123 t-0.25879 -0.10742 l-0.087891 -0.078125 q-0.068359375 -0.048828125 -0.185546875 -0.107421875 t-0.27832 -0.10254 t-0.36621 -0.043945 q-0.302734375 0 -0.64453125 0.13671875 t-0.625 0.4248 t-0.47363 0.72266 t-0.19043 1.0303 q0 0.185546875 0.0390625 0.3759765625 t0.13672 0.34668 t0.26367 0.25391 t0.41016 0.097656 q0.17578125 0 0.4052734375 -0.1171875 t0.43945 -0.36133 t0.38086 -0.61523 t0.23926 -0.87891 q0.01953125 -0.13671875 0.126953125 -0.2294921875 t0.24902 -0.092773 t0.24414 0.10742 t0.1123 0.24414 q0.009765625 0.185546875 0.0390625 0.5224609375 t0.13184 0.66895 t0.30762 0.57617 t0.56641 0.24414 q0.234375 0 0.4638671875 -0.126953125 t0.44922 -0.33691 t0.41992 -0.47852 t0.36621 -0.54199 t0.29297 -0.52734 l0.21484 -0.43945 q0.048828125 -0.107421875 0.1416015625 -0.166015625 t0.2002 -0.058594 q0.166015625 0 0.2685546875 0.1220703125 t0.10254 0.25879 q0 0.068359375 -0.029296875 0.13671875 z M58.955096875 12.334 q0 0.37109375 -0.2587890625 0.6298828125 t-0.62988 0.25879 t-0.62988 -0.25879 t-0.25879 -0.62988 q0 -0.185546875 0.068359375 -0.3466796875 t0.19043 -0.2832 t0.2832 -0.19043 t0.34668 -0.068359 t0.34668 0.068359 t0.2832 0.19043 t0.19043 0.2832 t0.068359 0.34668 z M58.017596875 20.3418 q0.361328125 -0.390625 0.7421875 -0.8251953125 t0.73242 -0.86914 t0.64453 -0.85938 t0.45898 -0.80566 q0.087890625 -0.21484375 0.33203125 -0.21484375 q0.166015625 0 0.2685546875 0.1123046875 t0.10254 0.24902 q0 0.078125 -0.029296875 0.146484375 q-0.224609375 0.5078125 -0.615234375 1.0546875 t-0.84473 1.0889 t-0.92773 1.0547 t-0.86426 0.95215 l0.029297 1.5332 q0.009765625 0.751953125 0.009765625 1.42578125 q0 2.685546875 -0.52734375 3.984375 t-1.5723 1.2988 q-0.361328125 0 -0.6640625 -0.15625 t-0.51758 -0.44922 t-0.33691 -0.72266 t-0.12207 -0.97656 q0 -0.60546875 0.1611328125 -1.323242188 t0.51758 -1.5186 t0.92285 -1.6553 t1.3672 -1.7334 q0 -0.83984375 0.009765625 -1.674804688 t0.03418 -1.6016 t0.068359 -1.4355 t0.10254 -1.1865 q0.01953125 -0.146484375 0.1220703125 -0.234375 t0.24902 -0.087891 t0.25391 0.10742 t0.10742 0.26367 q0 0.05859375 -0.0341796875 0.380859375 t-0.073242 0.94727 t-0.073242 1.5479 t-0.03418 2.1826 z M58.398396875 12.334 q0 -0.13671875 -0.09765625 -0.2392578125 t-0.23438 -0.10254 t-0.23926 0.10254 t-0.10254 0.23926 t0.10254 0.23438 t0.23926 0.097656 t0.23438 -0.097656 t0.097656 -0.23438 z M57.324216875 24.3262 q0 -0.498046875 -0.009765625 -0.99609375 l-0.019531 -1.084 q-0.60546875 0.732421875 -1.030273438 1.4453125 t-0.69824 1.3672 t-0.39551 1.2402 t-0.12207 1.0645 q0 0.2734375 0.0390625 0.5517578125 t0.1416 0.50781 t0.27832 0.37109 t0.44922 0.1416 q0.107421875 0 0.25390625 -0.048828125 t0.29785 -0.20996 t0.29785 -0.46387 t0.26367 -0.81543 t0.18555 -1.2646 t0.068359 -1.8066 z">
                                    </path>
                                </g>
                            </svg> */}

                        </NavLink>

                        <nav className={`navbar ${show && 'active'}`}>
                            <ul className="menu text-capitalize">
                                <li className=""><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="about">About</NavLink></li>
                                <li><NavLink to="projects">Projects</NavLink></li>
                                <li><NavLink to="contact">Contact</NavLink></li>
                            </ul>
                            <NavLink to="/contact" className="theme-btn">Let's talk</NavLink>
                        </nav>

                        <NavLink to="/contact" className="theme-btn">Let's talk</NavLink>

                        <div className={`show-menu ${show && 'active'}`} onClick={() => { setShow(!show) }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;