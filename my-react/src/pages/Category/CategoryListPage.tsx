import {useGetCategoriesQuery} from "../../services/apiCategory.ts";
import {Link} from "react-router-dom";

const CategoryListPage = () => {

    const {data: list, isLoading, error} = useGetCategoriesQuery();
    // console.log("DATA REDUX", list);
    console.log("isLoading REDUX", isLoading);
    console.log("error REDUX", error);
    //RTK Query

    const mapData = list?.map((category) => (
        <tr key={category.id}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {category.name}
            </th>
            <td className="px-6 py-4">
                {category.slug}
            </td>
            <td className="px-6 py-4">
                {category.description}
            </td>
            <td className="px-6 py-4">
                <Link to={`edit/${category.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
            </td>
        </tr>
    ));

    return (
        <>
            <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 my-6">
                Список категорій
            </h1>

            <div className={"mb-4"}>
                <Link to={"create"} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Додати
                </Link>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Назва
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Slug
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Опис
                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {mapData}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default CategoryListPage;