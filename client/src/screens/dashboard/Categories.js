import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { clearMessage } from "../../store/reducers/globalReducer";
import { useGetQuery } from "../../store/services/categoryService";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";

const Categories = () => {

    let { page } = useParams();
    // console.log('Your page:', page);
    if (!page) {
        page = 1;
    }

    const { success } = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();

    // ===== 
    const { data = [], isFetching } = useGetQuery(page);

    useEffect(() => {
        return () => {
            dispatch(clearMessage());
        }
    }, []);

    return (
        <Wrapper>
            <ScreenHeader>
                <Link to='/dashboard/create-category' className="btn-dark">
                    add categories <i className="bi bi-plus"></i>
                </Link>
            </ScreenHeader>

            {success && <div className="alert-sucess"> {success} </div>}

            {/* {!isLoading ? data?.categories?.lenght > 0 && <div>

                <table className="w-full bg-gray-900 rounded-md">
                    <thead>
                        <tr className="border-b border-gray-800 text-left ">
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">name</th>
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">edit</th>
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.categories?.map(category => (
                            <tr key={category._id} className="odd:bg-gray-800">
                                <td  className="p-3 capitalize text-sm font-normal text-gray-400">{category.name}</td>
                                <td  className="p-3 capitalize text-sm font-normal text-gray-400"><button>edit</button></td>
                                <td  className="p-3 capitalize text-sm font-normal text-gray-400"><button>delete</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> : <Spinner />} */}

            {!isFetching ? data?.categories?.length > 0 && <><div>
                <table className="w-full bg-gray-900 rounded-md">
                    <thead>
                        <tr className="border-b border-gray-800 text-left">
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">name</th>
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">edit</th>
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.categories?.map(category => (
                            <tr key={category._id} className="odd:bg-gray-800">
                                <td className="p-3 capitalize text-sm font-normal text-gray-400">{category.name}</td>
                                <td className="p-3 capitalize text-sm font-normal text-gray-400">
                                    <Link to={`/dashboard/update-category/${category._id}`}
                                     className="btn btn-warning" > edit
                                    </Link>
                                </td>
                                <td className="p-3 capitalize text-sm font-normal text-gray-400">
                                    <button>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div><Pagination page={parseInt(page)} perPage={data.perPage} count={data.count}
                path="dashboard/categories" /></> : <Spinner />}

        </Wrapper>
    )
}

export default Categories;
