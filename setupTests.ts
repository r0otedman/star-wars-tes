import "@testing-library/jest-dom";
import {
  TextEncoder as NodeTextEncoder,
  TextDecoder as NodeTextDecoder,
} from "util";

// В тестах безопасно переопределять через globalThis
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).TextEncoder = NodeTextEncoder;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).TextDecoder = NodeTextDecoder;
