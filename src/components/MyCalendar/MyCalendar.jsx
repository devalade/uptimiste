import React from "react";
import Arrow from "../icons/Arrow";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import ShowMonth from "./ShowMonth";
import ShowWeek from "./ShowWeek";

const CalendarOptions = [
  {
    title: "Semaine",
  },
  {
    title: "Mois",
  },
  {
    title: "Liste",
  },
];

function MyCalendar() {
  const [activeShowWeek, setActiveShowWeek] = React.useState(true);
  const [activeShowMonth, setActiveShowMonth] = React.useState(false);

  React.useEffect(() => {}, [activeShowWeek, activeShowMonth]);

  const handleChange = (e) => {
    console.log(e.target);
    if (!activeShowWeek && e.target.checked && e.target.id === "Semaine") {
      setActiveShowMonth((prev) => !prev);
      setActiveShowWeek((prev) => !prev);
      console.log(activeShowWeek);
    }

    if (!activeShowMonth && e.target.checked && e.target.id === "Mois") {
      setActiveShowWeek((prev) => !prev);
      setActiveShowMonth((prev) => !prev);
      console.log(activeShowMonth);
    }
  };
  return (
    <div className="mt-12 w-full ">
      <div className="flex w-full justify-between">
        <div className="w-full flex space-x-6">
          <div className="flex items-center space-x-6">
            <ChevronLeft className="w-12 h-12" />
            <h3>Aujourd'hui</h3>
            <ChevronRight className="w-12 h-12" />
          </div>
          <div className="flex items-center space-x-4">
            {(activeShowWeek && (
              <>
                <h3>La semaine 26 Août au 01 Septembre</h3>
                <Arrow className="text-custom-d stroke-current" />
              </>
            )) ||
              (activeShowMonth && (
                <>
                  <h3>Août au 01</h3>
                  <Arrow className="text-custom-d stroke-current" />
                </>
              ))}
          </div>
        </div>
        <div>
          <div className="btn-group w-max space-x-1">
            {CalendarOptions.map(({ title }) => (
              <input
                key={title}
                onChange={handleChange}
                type="radio"
                name="options"
                id={title}
                data-title={title}
                className="btn checked:!bg-custom-l3 capitalize checked:text-custom-d border  checked:!border-custom-l3 !bg-gray-300 !border-gray-300 !text-gray-900 font-normal"
              />
            ))}
          </div>
        </div>
      </div>
      {(activeShowWeek && <ShowWeek />) || (activeShowMonth && <ShowMonth />)}
    </div>
  );
}

export default MyCalendar;
