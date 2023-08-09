'use client'

import * as React from 'react'

export function PageBackground() {
  const canvasRef = React.useRef<React.ElementRef<'canvas'>>(null)

  React.useEffect(() => {
    function drawBlurredEllipse() {
      if (!canvasRef.current) {
        return
      }

      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        return
      }

      const w = (canvas.width = document.documentElement.clientWidth)
      canvas.height = document.documentElement.clientHeight

      if (w < 1024) {
        ctx.beginPath()
        ctx.fillStyle = '#C5FFEA'
        const w1 = w / 2
        const h1 = (w1 * 2) / 3
        ctx.filter = `blur(${w1 / 2}px)`
        ctx.ellipse(0, 20, w1 / 2, h1 / 2, 0, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = '#C5CEFF'
        const r = w / 4
        ctx.filter = `blur(${r / 2}px)`
        ctx.arc(w, r / 2, r, 0, Math.PI * 2)
        ctx.fill()
      } else {
        ctx.beginPath()
        ctx.fillStyle = '#C5FFEA'
        ctx.filter = `blur(156px)`
        const w1 = 673
        const h1 = 373
        ctx.ellipse(200 + w1 / 2, h1 / 2 - 150, w1 / 2, h1 / 2, 0, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = '#C5CEFF'
        ctx.filter = 'blur(156px)'
        const r = 657 / 2
        ctx.arc(w - (r - 225), -(r - 216), r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    drawBlurredEllipse()

    window.addEventListener('resize', drawBlurredEllipse)

    return () => window.removeEventListener('resize', drawBlurredEllipse)
  })

  return <canvas className="fixed -z-10" ref={canvasRef} />
}
