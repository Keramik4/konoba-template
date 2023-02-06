import PocketBase from "pocketbase"

export const fetchAllContent = async () => {
  const pb = await initPbClient()

  if (!pb) return null

  const food = await fetchListOfFood(pb)
  return food
}

const initPbClient = async () => {
  const { PB_EMAIL, PB_PASS } = process.env

  try {
    if (!isString(PB_EMAIL) || !isString(PB_PASS)) {
      throw new Error("Envariable variables are missing: PB_EMAIL, PB_PASS")
    }
    const pb = new PocketBase("http://0.0.0.0:8090")

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

const fetchListOfFood = async (pb: PocketBase) => {
  const list = await pb.collection("food").getList(1, 100)

  return list
}
