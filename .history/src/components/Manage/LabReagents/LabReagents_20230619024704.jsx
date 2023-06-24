import React from 'react'

export default function LabReagents() {
  return (
    <div className="taskManager__container">
      <div className="grid">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              title={task.data.title}
              calories={task.data.calories}
              description={task.data.description}
              category={task.data.category}
              price={task.data.price}
              imageURL={task.data.imageURL}
              // price={task.data.price}
              // category={task.data.category}
            />
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl text-headingColor font-semibold my-2">
              Loading .... <Loader />
              <img src={NotFound} alt="img" className="h-340" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
