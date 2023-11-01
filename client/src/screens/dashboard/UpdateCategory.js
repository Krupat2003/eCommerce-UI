
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { setSuccess } from "../../store/reducers/globalReducer";
import { useFetchCategoryQuery } from "../../store/services/categoryService";

const UpdateCategory = () => {

    const [state, setState] = useState('');
    const {id} = useParams();
    const {data, isFetching} = useFetchCategoryQuery(id);
    console.log('category data:', data);

    useEffect(() => {
        data?.category && setState(data?.category?.name);
    }, [data?.category])    

    // const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
    // console.log(data);

    // const submitCategory = e => {
    //     e.preventDefault();
    //     saveCategory({ name: state });
    // };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (data?.isSuccess) {
    //         dispatch(setSuccess(data?.data?.message));
    //         navigate('/dashboard/categories');
    //     }
    // }, [data.isSuccess]);

    return (
        <Wrapper>
            <ScreenHeader>
                <Link to='/dashboard/categories' className="btn-dark">
                    <i className="bi bi-arrow-left"></i>  categories list
                </Link>
            </ScreenHeader>
            {/* {!isFetching ?}  */}
        </Wrapper>
    )
}

export default UpdateCategory;
