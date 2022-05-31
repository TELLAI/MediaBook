import axios from "axios";
import { useDispatch } from "react-redux";



export const getUsers = async () => {
  const dispatch = useDispatch();
  await axios({
    method: "get",
    url: `http://localhost:5000/api/user/membres`,
  })
    .then((res) => {
      dispatch({
        type: "users/setUsers",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
