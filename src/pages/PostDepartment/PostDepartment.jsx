import { Loader } from "../../components/Loader/Loader";
import { FoundDepartment } from "../../components/FoundDepartment/FoundDepartment";
import { SearchDepartment } from "../../components/SearchDepartment/SearchDepartment";
import { selectIsLoading } from "../../redux/selectors";
import { useSelector } from "react-redux";

const PostDepartment = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <SearchDepartment />
      {isLoading ? <Loader /> : <FoundDepartment />}
    </div>
  );
};

export default PostDepartment;
