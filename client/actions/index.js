export const GET_COLOURS = 'GET_COLOURS'
export const GET_FRAMES = 'GET_FRAMES'
export const ACTIVE_FRAME = 'ACTIVE_FRAME'
export const SET_BRUSH_COLOUR = 'SET_BRUSH_COLOUR'

export const getColours = (colours) => {
  return {
    type: GET_COLOURS,
    colours
  }
}
export const getFrames = (colours) => {
  return {
    type: GET_FRAMES,
    frames
  }
}

export const setFrame = (frame) => {
  return {
    type: ACTIVE_FRAME,
    frame
  }
}

export const setBrushColour = (colour) => {
  return {
    type: SET_BRUSH_COLOUR,
    colour
  }
}
