import React from 'react'
import { NotFound } from '../../../';

export default function Veterenary() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img src={NotFound} alt="img" className="h-340" />
      <p className="text-xl text-headingColor font-semibold my-2">
        Items Not Available For Now Contact us For More Details
      </p>
    </div>
  );
}
