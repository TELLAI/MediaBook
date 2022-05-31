import axios from "axios";

    export const getUsers = async () => {
        let result;
      await axios({
        method: "get",
        url: `http://localhost:5000/api/user/membres`,
      })
        .then((res) => {
            result = res.data
            
        })
        .catch((err) => console.log(err));
        return result;
    };

    export const getLivre = async () => {
        let result;
      await axios
        .get("http://localhost:5000/api/livre/affichage")
        .then((res) => {
            result = res.data
        }).catch((err) => console.log(err))
        return result;
    };

    export const fetchLivre = async (id) => {
      let result;
      await axios
        .get(`http://localhost:5000/api/livre/affichageLivre/${id}`)
        .then((res) => {
          result = res.data;
        })
        .catch((err) => console.log(err));
      return result;
    };