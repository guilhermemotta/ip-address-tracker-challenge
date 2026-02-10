"use server";

import { revalidatePath } from "next/cache";
import { getGeoData } from "../lib/getGeoData";

export async function handleSearchInput(input: string) {
  const newGeoData = await getGeoData(input);

  revalidatePath("/");
  return { message: "Search successful", data: newGeoData };
}
