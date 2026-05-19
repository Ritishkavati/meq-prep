# Final Elite MEQ Bank — Integration Instructions

1. Copy `finalEliteMEQBank.ts` into:
   `artifacts/meq-prep/src/lib/questions/finalEliteMEQBank.ts`

2. Update:
   `artifacts/meq-prep/src/lib/quizData.ts`

Add:
```ts
import { FINAL_ELITE_MEQ_BANK } from "./questions/finalEliteMEQBank";
```

Then add `...FINAL_ELITE_MEQ_BANK` into the exported combined question array used by the app.

3. Run:
```bash
npm run check
# or
npx tsc --noEmit
```

4. Replit Agent must not clinically rewrite the content. It should only paste, import, and type-check.
