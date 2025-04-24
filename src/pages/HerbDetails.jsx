import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getHerbDetails } from '../services/operations/herbsAPIs';

import HerbMedia from '../components/core/herbMedia/Index';
import HerbInformation from '../components/core/herbInformation/Index';


const herbDetailsNavOptions = [
  {
    name: "Details",
    id: 1,
  },
  {
    name: "Uses",
    id: 2,
  },
  {
    name: "Cultvation",
    id: 3,
  },
  {
    name: "Add Note",
    id: 4,
  },
]

export const HerbDetails = () => {

    // get herbId from params
    const {herbId} = useParams();

    const [herb, setHerb] = useState(null);

    // call API to get herb details
    useEffect(() => {
        const fetchHerbDetails = async () => {
          const result = await getHerbDetails(herbId);
          setHerb(result);
        }

        fetchHerbDetails();
    }, []);

  return (
    <main>
      <div className='py-20 w-11/12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>

          {/* Herb Media */}
          <HerbMedia herb={herb}/>

          {/* Herb Information */}
          <HerbInformation herb={herb}/>

      </div>
    </main>

  )
}
