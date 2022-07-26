import { useState } from 'react'

export default function Chair(params: {
  seat: string
  chosen: boolean
  special: boolean
}) {
  const [chair, setChair] = useState('')
  const [chairSelect, setChairSelect] = useState(false)
  function handleClickChair() {
    if (chairSelect) {
      setChairSelect(false)
      setChair('')
    } else {
      setChairSelect(true)
      setChair(params.seat)
    }
  }

  function handleMouseChair(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    if (event.type === 'mouseenter') {
      setChair(params.seat)
    } else if (event.type === 'mouseout') {
      if (!chairSelect) {
        setChair('')
      }
    }
  }
  return (
    <>
      {params.chosen ? (
        <button className="btn btn-circle btn-primary cursor-not-allowed">
          {params.seat}
        </button>
      ) : params.special ? (
        <button
          className="btn btn-circle btn-info"
          onMouseEnter={(event) => handleMouseChair(event)}
          onMouseOut={(event) => handleMouseChair(event)}
          onClick={() => handleClickChair()}
        >
          {chair}
        </button>
      ) : (
        <button
          className="btn btn-circle btn-success"
          onMouseEnter={(event) => handleMouseChair(event)}
          onMouseOut={(event) => handleMouseChair(event)}
          onClick={() => handleClickChair()}
        >
          {chair}
        </button>
      )}
    </>
  )
}
