import { useRef } from 'react'

export const useSlider = () => {
	const slider = useRef(null)
	const left = () => slider.current.slickPrev()
	const right = () => slider.current.slickNext()
	return { slider, left, right }
}
