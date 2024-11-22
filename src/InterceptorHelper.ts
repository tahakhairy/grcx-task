export default class InterceptorHelper {
  private static baseUrl = 'http://139.162.137.167/api/'

  static async interceptRequest(
    options: RequestInit = {}
  ): Promise<RequestInit> {
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...options.headers
    }
    options.credentials = 'include'
    options.mode = 'cors'
    return options
  }

  // intercept response
  static async interceptResponse<T>(response: Response): Promise<T> {
    const responseJson = await response.json()

    console.log(response.headers.getSetCookie())
    if (!response.ok) {
      return Promise.reject(responseJson)
    }

    return responseJson
  }

  // intercept function
  static async intercept<T>(
    url: string,
    options: RequestInit = {},
    queryParams: Record<string, string | number> = {}
  ): Promise<T> {
    // Construct query string from queryParams object
    const queryString = Object.keys(queryParams)
      .map((key) => {
        const value = queryParams[key]

        if (value === null || value === undefined) return ''

        return `${encodeURIComponent(key)}=${encodeURIComponent(
          queryParams[key]
        )}`
      })
      .filter(Boolean)
      .join('&')

    // Append query string to the URL
    const fullUrl = Object.keys(queryParams).length
      ? `${InterceptorHelper.baseUrl}${url}?${queryString}`
      : `${InterceptorHelper.baseUrl}${url}${queryString}`

    // handle request
    const requestOptions = await InterceptorHelper.interceptRequest(options)

    const response = await fetch(fullUrl, requestOptions)

    // handle response
    const responsOption = await InterceptorHelper.interceptResponse<T>(response)

    return responsOption
  }
}
