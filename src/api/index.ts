import InterceptorHelper from '@/InterceptorHelper'

export const login = (data: { usr: string; pwd: string }) => {
  return InterceptorHelper.intercept<any>('method/login', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

export const apiGetRoles = () => {
  return InterceptorHelper.intercept('resource/Role')
}
