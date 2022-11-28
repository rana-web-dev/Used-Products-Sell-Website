import { useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import useTitle from "../../title/title";

const AllSeller = () => {
  useTitle('All Seller & Buyer');

  // use react query to load sellers and buyers 2
  const { data: allSeller, refetch } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = res.json();
      return data;
    },
  });

  // delete seller or buyer user
  const deleteUser = (seller) => {
    fetch(`http://localhost:5000/users/${seller._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success("User Delete Successfully.", {
            position: toast.POSITION.TOP_CENTER
          })
        }
      });
  };

  return (
    <div className="px-5">
      <ToastContainer/>
      <h2 className="text-center text-2xl my-10">
        All Seller: {allSeller?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Total</th>
              <th>Name</th>
              <th>Email</th>
              <th>UserType</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allSeller?.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <th>{seller.name}</th>
                <td>{seller.email}</td>
                <td>{seller.userType}</td>
                <td>
                  <button
                    onClick={() => deleteUser(seller)}
                    className="btn btn-xs bg-red-500 border-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
