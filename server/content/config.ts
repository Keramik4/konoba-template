export const getConfig = (key: keyof ContentConfig) => {
  return config[key]
}

type ContentConfig = {
  apiUrl: string
  thumbSize: string
}

const config = {
  apiUrl: "http://0.0.0.0:8090",
  thumbSize: "120x90",
}
