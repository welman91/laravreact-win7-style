export const getTableHeight = () => {
  const innerHeight = window.innerHeight
  const innerWidth = window.innerWidth

  if (innerHeight < 766) {
    return 150
  }

  if (innerHeight < 915) {
    if (innerWidth < 641) {
      return 380
    } else if (innerWidth < 769) {
      return 330
    } else if (innerWidth < 1025) {
      return 470
    }
    // } else if (innerWidth < 1280) {
    //   return 530
    // } else if (innerWidth < 2000) {
    //   return 530
    // }
    return 530
  }

  if (innerHeight < 1000) {
    if (innerWidth < 641) {
      return 420
    }
    if (innerWidth < 2000) {
      return 460
    }
    return 480
    return 460
  }

  if (innerHeight > 1200) {
    return 800
  }

  return 320
}
