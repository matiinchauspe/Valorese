import type { NextRequest } from "next/server";

import dollarValues from "../../db/dollar-values.json";

export default async function handler(req: NextRequest) {
  return new Response(JSON.stringify(dollarValues), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
