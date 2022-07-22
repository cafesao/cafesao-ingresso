import { IDataFilmsChoiceDaysHours } from '../../interface/data'

export default function DaysAndHours(props: {
  daysHours: IDataFilmsChoiceDaysHours
}) {
  return (
    <div>
      <h2>Day: {props.daysHours.day}</h2>
      <h2>Hours</h2>
      {props.daysHours.hours?.map((hour) => (
        <p>{hour}</p>
      ))}
    </div>
  )
}
