import { IDataFilmsChoiceDaysHours } from '../../interface/data'

export default function DaysAndHours(props: {
  daysHours: IDataFilmsChoiceDaysHours
}) {
  return (
    <div className="collapse">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium text-center">
        <h2 className="text-center">{props.daysHours.day}</h2>
      </div>
      <div className="collapse-content ">
        <div className="btn-group btn-group-vertical items-center">
          {props.daysHours.hours?.map((hour, index) => (
            <button key={index} className="btn btn-lg btn-wide">
              {hour}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
