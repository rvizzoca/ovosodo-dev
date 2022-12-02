import { createMedia } from '@artsy/fresnel'

const SiteMedia = createMedia({
  breakpoints: {
    mobileSmall: 0,
    mobileMedium: 480,
    tabletSmall: 575,
    ipadVertical: 768,
    tabletMedium: 992,
    ipadHorizontal: 1024,
    desktopSmall: 1200,
    desktopMedium: 1440,
    desktopLarge: 1920,
    desktopXL: 1680,
    desktopXXL: 2200,
  },
})

export const mediaStyle = SiteMedia.createMediaStyle()
export const { MediaContextProvider, Media } = SiteMedia
