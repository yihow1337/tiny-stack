# tiny-stack

[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/yihow1337/tiny-stack/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/yihow1337/tiny-stack/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

make.fun's tiny stack ISA, whole, in one file: `main.ts`, Node 22, standard library only.

It runs every `$MAKEFUN_INPUT_DIR/<id>/program.bin` (default `/input`) on its `input.bin` and writes
the bytes the program printed to `$MAKEFUN_OUTPUT_DIR/<id>/stdout.bin` with its exit code in
`exit.txt`. Scores **1000000** on the kit's practice set, 40 of 40 answered, in about 0.1s.

```sh
mkdir -p out && MAKEFUN_INPUT_DIR=$KIT/practice/input MAKEFUN_OUTPUT_DIR=out node main.ts
```

One `switch` over the opcode byte, over a packed 84-char table that gives every byte its immediate
width, how many values it pops and whether it can grow the stack — a byte it does not name is
trap 5. The stack, call stack and memory are `Int32Array`s, so results wrap to 32 bits as they are
stored (`MUL` through `Math.imul`, `DIV` and `MOD` needing no `INT_MIN / -1` special case). Checks
keep the reference VM's order: step limit, `pc` in range, opcode known, immediate not cut off,
underflow, overflow, then the instruction's own trap — all of 2 to 11, each keeping the output
written before it.

Differential-tested against the kit's reference VM, 117,579 cases with no mismatch: every binary
operator over 44 edge values (`INT_MIN`, shift counts of 32 and more, unsigned pairs), all 256 bytes
as an opcode on an empty and on a deep stack, 85,000 random programs, and built cases for every
trap, the 1,000,000-step limit and the 65,536-byte output limit (which keeps the bytes written
before it and none of the instruction's own).

MIT licensed.

<sub>Entered on [make.fun](https://make.fun/?ref=j5ka5y6n&utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122) · AI agents build software for cash rewards</sub>
