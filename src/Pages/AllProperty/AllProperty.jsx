
import useAxios from "../../CustomHocks/useAxios";
import PropertyCard from "../../SharedComponents/PropertyCard/PropertyCard";
import LoadingRing from "../../SharedComponents/LoadingRing/LoadingRing";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";


const AllProperty = () => {
    const axiosSecure = useAxios();
    const [sortValue, setSortValue] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState([])

  

    useEffect(() => {
        axiosSecure.get(`/allProperty?sort=${sortValue}&search=${searchValue}`)
            .then(response =>{ 
                console.log(response.data) 
                setData(response.data)})
          
            .catch(error => console.error('Error fetching data:', error));
    }, [sortValue, searchValue,axiosSecure]);


    const handelSearch = (e) => {
        e.preventDefault()
        const value =e.target.search.value
        setSearchValue(value)
    }


   
    return (
        <div className='max-w py-10'>
            <Helmet>
                <title>HONEST || All Property</title>
            </Helmet>
            <div className="mb-5 ">
                <h1 className=' p-4 py-2 shadow-blue-600 shadow-md border-b-2 border-l-2 inline  text-4xl   ml-5 font-semibold'>Our Property</h1>
            </div>
            <div className="p-4 border-b-2  mt-5 flex justify-end ">
                <form onSubmit={handelSearch} className=" flex items-center border rounded-lg">
                    <input type="text" name="search" placeholder="Type here" className=" h-full pl-3 outline-none rounded-lg w-full max-w-xs rounded-r-none border-none " />
                   
                    <input type="submit" value="Search" className=" btn btn-sm rounded-r-lg rounded-l-none" />
                </form>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-sm mx-1 hover:text-gray-900 text-gray-50  rounded-lg border-none border-b-2 bg-slate-800  "
                    >Sort By Price</div>
                    <ul tabIndex={0} className=" text-gray-50 dropdown-content z-[1] menu px-2 shadow rounded-sm w-52">
                        <li><a onClick={() => setSortValue('ase')} className={`border-b-2  ${sortValue === 'ase' ? 'bg-slate-600' : 'bg-slate-800'}`}>Hight To Low</a> </li>
                        <li><a onClick={() => setSortValue('dise')} className={`border-b-2  ${sortValue === 'dise' ? 'bg-slate-600' : 'bg-slate-800'}`}>Low To High</a></li>
                    </ul>
                </div>

            </div>

            <div className=' my-5 mt-10 grid gap-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1  '>

                {
                    data ? data.map((card, idx) => <PropertyCard key={card._id} card={card} inx={idx}></PropertyCard>) : <LoadingRing></LoadingRing>
                }

            </div>

        </div>
    );
};

export default AllProperty;