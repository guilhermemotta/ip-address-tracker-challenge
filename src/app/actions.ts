"use server";

import { revalidatePath } from "next/cache";
import { type GeoData, getGeoData, querySchema } from "../lib/getGeoData";
import { redirect } from "next/navigation";

export default async function handleSearchSubmit(
  prevState: any,
  queryData: FormData,
) {
  const queryString = queryData.get("search") as string;
  if (!queryString || !querySchema.safeParse({ search: queryString }).success) {
    return { message: "Search failed", ...prevState };
  }

  redirect(`/?query=${queryString}`);
  // const queryResult = await getGeoData(queryString);
  // // console.log(queryResult);
  // if (!queryResult || queryResult.hasOwnProperty("errors")) {
  //   return { message: "Search failed", ...prevState };
  // }
  // const { ip, location, isp } = queryResult as GeoData;
  // redirect(
  //   `/?ip=${ip}&lat=${location.lat}&lng=${location.lng}&city=${location.city}&region=${location.region}&timezone=${location.timezone}&isp=${isp}`,
  // );
  // revalidatePath("/");
  // return { message: "Search successful", data: queryResult };
}
