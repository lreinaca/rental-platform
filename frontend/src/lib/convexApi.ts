import { anyApi } from "convex/server";
import type { api as generatedApi } from "../../../backend/convex/_generated/api";

export const api = anyApi as typeof generatedApi;
