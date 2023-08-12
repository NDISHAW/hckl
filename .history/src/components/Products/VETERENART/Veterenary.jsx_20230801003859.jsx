import React from 'react'
import  NotFound  from '../../../img/NotFound.svg';

export default function Veterenary() {
  return (
    <div
      className={`w-full flex items-center gap-1 my-1 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div
        id="hospital"
        className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none"
      >
        {RLA &&
          RLA.map((category) => (
            <motion.div
              scrollValue={scrollValue}
              whileTap={{ scale: 1.7 }}
              key={category.id}
              className={`group ${
                filter.category === category.urlParamName
                  ? "bg-blue-400 "
                  : "bg-card"
              } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
              onClick={() => handleCategoryClick(category.urlParamName)}
            >
              <div
                className={`w-10 h-10 rounded-full shadow-lg ${
                  filter.category === category.urlParamName
                    ? "bg-white"
                    : "bg-Main"
                } group-hover:bg-white flex items-center justify-center`}
              >
                <Icon
                  icon="medical-icon:hospital"
                  className={`${
                    filter.category === category.urlParamName
                      ? "text-textColor"
                      : "text-white"
                  } group-hover:text-textColor text-lg`}
                />
              </div>
              <p
                className={`text-sm ${
                  filter.category === category.urlParamName
                    ? "text-white"
                    : "text-textColor"
                } group-hover:text-white`}
              >
                {category.name}
              </p>
            </motion.div>
          ))}
      </div>     

      <div className="w-full">
        <LabContaine
          scrollValue={scrollValue}
          flag={false}
          data={LabReagents?.filter(
            (item) =>
              item.data.category === filter.category &&
              (filter.subcategory === "" ||
                item.data.SubCartegory === filter.subcategory)
          )}
        />
      </div>
    </div>
  );
}
