export default async function Home() {
  const getUsers = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getUser`)
    const result = await res.json()
    return result
  }

  const getPosts = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
    const result = await res.json()
    return result
  }

  const userList = await getUsers()
  console.log("Users",userList)

  return (
    <div className="px-20 py-8">
      <button className="bg-teal-500 font-bold px-5 mr-3 py-3 rounded-lg">Get All Posts</button>
      <button className="bg-teal-500 font-bold px-5 mr-3 py-3 rounded-lg">Get All Users</button>
      <button className="bg-teal-500 font-bold px-5 py-3 rounded-lg">Create New Post</button>
      <p>{userList.length&&userList[0]["name"]}</p>
    </div>
  )
}