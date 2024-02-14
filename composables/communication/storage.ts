export const useImageStorage = () => {
  const url = (isPublic:boolean, imageUrl:string) => {
    return 'https://api.dooramgi.kr/storage/v1/object'
      .concat(isPublic ? '/public' : '/auth')
      .concat(imageUrl)
  }
  return {
    url
  }
}
