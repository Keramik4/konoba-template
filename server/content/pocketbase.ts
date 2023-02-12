import PocketBase from "pocketbase"
import { getConfig } from "./config"

export const initPbClient = async () => {
  const { PB_EMAIL, PB_PASS } = process.env

  try {
    if (!isString(PB_EMAIL) || !isString(PB_PASS)) {
      throw new Error("Env variables are missing: PB_EMAIL, PB_PASS")
    }
    const pb = new PocketBase(getConfig("apiUrl"))

    await pb.admins.authWithPassword(PB_EMAIL, PB_PASS)
    return pb
  } catch (error) {
    console.log("Error in initPbClient:", error)
    return null
  }
}

const isString = (envVar: string | undefined): envVar is string => {
  return typeof envVar == "string"
}
